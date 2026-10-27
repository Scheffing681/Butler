/*
  Butler relay — a small private server for the Butler app (Cloudflare Workers, free plan).
  It keeps the DB and RMV keys secret and answers only to the Butler website.

  Secrets to add in Cloudflare (Settings → Variables and Secrets → Add → type "Secret"):
    DB_CLIENT_ID   – Client ID of your app on developers.deutschebahn.com
    DB_API_KEY     – API Key of the same app (subscribed to: Timetables, StaDa, FaSta)
    RMV_KEY        – optional, your key from opendata.rmv.de (buses and trams in Hessen)
  Optional plain variable:
    ALLOW_ORIGIN   – who may use the server (default: https://scheffing681.github.io)
*/
const DB = 'https://apis.deutschebahn.com/db-api-marketplace/apis';
const TT = DB + '/timetables/v1';
const STADA = DB + '/station-data/v2';
const FASTA = DB + '/fasta/v2';
const RMV = 'https://www.rmv.de/hapi';
const VERSION = 1;

export default {
  async fetch(req, env, ctx) {
    const allow = (env.ALLOW_ORIGIN || 'https://scheffing681.github.io').split(',').map(s => s.trim()).filter(Boolean);
    const origin = req.headers.get('Origin') || '';
    const ok = allow.includes(origin);
    const cors = {
      'Access-Control-Allow-Origin': ok ? origin : allow[0],
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin'
    };
    if (req.method === 'OPTIONS') return new Response(null, { status: ok ? 204 : 403, headers: cors });
    if (!ok) return json({ error: 'forbidden' }, 403, cors);
    if (req.method !== 'GET') return json({ error: 'method' }, 405, cors);
    const u = new URL(req.url), p = u.pathname.replace(/\/+$/, '') || '/', q = u.searchParams;
    const hasDb = !!(env.DB_CLIENT_ID && env.DB_API_KEY), hasRmv = !!env.RMV_KEY;
    try {
      if (p === '/' || p === '/ping') return json({ ok: true, v: VERSION, db: hasDb, rmv: hasRmv }, 200, cors);
      if (p.startsWith('/db/') && !hasDb) return json({ error: 'nokey', src: 'db' }, 200, cors);
      if (p.startsWith('/rmv/') && !hasRmv) return json({ error: 'nokey', src: 'rmv' }, 200, cors);
      const C = { env, ctx };
      if (p === '/db/st') return json(await dbStations(C, (q.get('q') || '').trim()), 200, cors);
      if (p === '/db/near') return json(await dbNear(C, +q.get('lat'), +q.get('lon')), 200, cors);
      if (p === '/db/board') return json(await dbBoard(C, q.get('eva'), Math.min(3, Math.max(1, +q.get('h') || 2))), 200, cors);
      if (p === '/db/lifts') return json(await dbLifts(C, q.get('eva')), 200, cors);
      if (p === '/rmv/st') return json(await rmvStations(C, q), 200, cors);
      if (p === '/rmv/board') return json(await rmvBoard(C, q.get('id')), 200, cors);
      return json({ error: 'notfound' }, 404, cors);
    } catch (e) {
      return json({ error: String((e && e.message) || e).slice(0, 200) }, 200, cors);
    }
  }
};

function json(o, status, h) {
  return new Response(JSON.stringify(o), { status, headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, h) });
}

/* ---------- upstream fetch with a shared cache ---------- */
async function up(C, url, ttl, headers, kind) {
  const cache = typeof caches !== 'undefined' ? caches.default : null;
  const key = new Request('https://butler-relay.cache/' + encodeURIComponent(url));
  if (cache) { const hit = await cache.match(key); if (hit) return kind === 'json' ? hit.json() : hit.text(); }
  const r = await fetch(url, { headers, cf: { cacheTtl: 0 } });
  if (r.status === 404) return kind === 'json' ? null : '';
  if (!r.ok) throw new Error('upstream ' + r.status);
  const body = await r.text();
  if (cache && ttl > 0) C.ctx.waitUntil(cache.put(key, new Response(body, { headers: { 'Cache-Control': 'max-age=' + ttl } })));
  return kind === 'json' ? JSON.parse(body) : body;
}
const dbH = (C, acc) => ({ 'DB-Client-Id': C.env.DB_CLIENT_ID, 'DB-Api-Key': C.env.DB_API_KEY, 'Accept': acc || 'application/xml' });

/* ---------- tiny XML reader (Workers have no DOMParser) ---------- */
function attrs(s) { const o = {}; s.replace(/([\w:-]+)="([^"]*)"/g, (_, k, v) => { o[k] = unx(v); return ''; }); return o; }
function unx(v) { return v.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&amp;/g, '&'); }
function blocks(xml, tag) { const out = [], re = new RegExp('<' + tag + '\\b([^>]*?)(\\/>|>([\\s\\S]*?)<\\/' + tag + '>)', 'g'); let m; while ((m = re.exec(xml))) out.push({ a: attrs(m[1]), body: m[3] || '' }); return out; }
function one(xml, tag) { const b = blocks(xml, tag); return b[0] || null; }

/* ---------- time in Germany ---------- */
function berlinParts(d) {
  const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23' }).formatToParts(d);
  const g = t => f.find(x => x.type === t).value; return { yy: g('year'), mm: g('month'), dd: g('day'), hh: g('hour') };
}
function berlinOffset(ms) {
  const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date(ms));
  const g = t => +f.find(x => x.type === t).value; return Date.UTC(g('year'), g('month') - 1, g('day'), g('hour'), g('minute')) - Math.floor(ms / 60000) * 60000;
}
function berlinMs(y, mo, d, h, mi) { const guess = Date.UTC(y, mo - 1, d, h, mi); let t = guess - berlinOffset(guess); t = guess - berlinOffset(t); return t; }
/* yyMMddHHmm → epoch ms */
function ttMs(s) { if (!s || s.length < 10) return null; return berlinMs(2000 + +s.slice(0, 2), +s.slice(2, 4), +s.slice(4, 6), +s.slice(6, 8), +s.slice(8, 10)); }

/* ---------- DB: stations ---------- */
async function dbStations(C, q) {
  if (!q || q.length < 2) return [];
  const xml = await up(C, TT + '/station/' + encodeURIComponent(q), 86400, dbH(C), 'text');
  const seen = new Set();
  return blocks(xml || '', 'station').map(s => ({ eva: s.a.eva, name: s.a.name, ds100: s.a.ds100 || '' })).filter(s => s.eva && !seen.has(s.eva) && seen.add(s.eva)).slice(0, 12);
}
/* nearby railway stations from OpenStreetMap (uic_ref is usually the EVA number) */
async function dbNear(C, lat, lon) {
  if (!isFinite(lat) || !isFinite(lon)) return [];
  const la = lat.toFixed(3), lo = lon.toFixed(3);
  const qy = `[out:json][timeout:10];(node[railway~"^(station|halt)$"](around:2500,${la},${lo});node[public_transport=station][train=yes](around:2500,${la},${lo}););out 12;`;
  const d = await up(C, 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(qy), 86400, { 'User-Agent': 'butler-relay/1' }, 'json');
  const hav = (a, b, c, e) => { const R = 6371e3, r = x => x * Math.PI / 180, dl = r(c - a), dn = r(e - b); const h = Math.sin(dl / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); };
  const els = ((d && d.elements) || []).filter(e => e.tags && e.tags.name).map(e => ({ name: e.tags.name, uic: (e.tags.uic_ref || '').replace(/\D/g, ''), dist: Math.round(hav(lat, lon, e.lat, e.lon)) })).sort((a, b) => a.dist - b.dist);
  const out = [], seen = new Set();
  for (const e of els.slice(0, 6)) {
    let eva = e.uic && e.uic.length >= 7 ? e.uic : null, name = e.name;
    if (!eva) { const s = await dbStations(C, e.name).catch(() => []); if (s[0]) { eva = s[0].eva; name = s[0].name; } }
    if (eva && !seen.has(eva)) { seen.add(eva); out.push({ eva, name, dist: e.dist }); }
    if (out.length >= 4) break;
  }
  return out;
}

/* ---------- DB: departures board (plan + live changes) ---------- */
async function dbBoard(C, eva, hours) {
  if (!/^\d{6,9}$/.test(eva || '')) throw new Error('eva');
  const now = Date.now(), plans = [];
  for (let i = 0; i < hours; i++) { const b = berlinParts(new Date(now + i * 3600e3)); plans.push(up(C, `${TT}/plan/${eva}/${b.yy}${b.mm}${b.dd}/${b.hh}`, 1800, dbH(C), 'text').catch(() => '')); }
  const prev = berlinParts(new Date(now - 3600e3));
  plans.push(up(C, `${TT}/plan/${eva}/${prev.yy}${prev.mm}${prev.dd}/${prev.hh}`, 1800, dbH(C), 'text').catch(() => ''));
  const [chg, ...xs] = await Promise.all([up(C, `${TT}/fchg/${eva}`, 30, dbH(C), 'text').catch(() => ''), ...plans]);
  let station = '';
  const map = new Map();
  for (const x of xs) {
    const tt = one(x || '', 'timetable'); if (tt && tt.a.station) station = tt.a.station;
    for (const s of blocks(x || '', 's')) {
      const tl = one(s.body, 'tl'), dp = one(s.body, 'dp'); if (!dp || !tl) continue;
      const t = tl.a, a = dp.a, line = a.l ? (/^\d/.test(a.l) ? (t.c || '') + a.l : a.l) : ((t.c || '') + ' ' + (t.n || '')).trim();
      const path = (a.ppth || '').split('|').filter(Boolean);
      map.set(s.a.id, { id: s.a.id, cat: t.c || '', num: t.n || '', fc: t.f || '', line, dir: path[path.length - 1] || '', via: path.slice(0, 3), pt: ttMs(a.pt), ct: null, pp: a.pp || '', cp: '', cancel: false, msg: [] });
    }
  }
  if (chg) {
    const ct = one(chg, 'timetable'); if (ct && ct.a.station && !station) station = ct.a.station;
    for (const s of blocks(chg, 's')) {
      const it = map.get(s.a.id); if (!it) continue;
      const dp = one(s.body, 'dp'); if (dp) {
        const a = dp.a;
        if (a.ct) it.ct = ttMs(a.ct);
        if (a.cp && a.cp !== it.pp) it.cp = a.cp;
        if (a.cs === 'c' || a.cs === 'C') it.cancel = true;
        if (a.cpth) { const p = a.cpth.split('|').filter(Boolean); if (p.length) it.dir = p[p.length - 1]; }
        for (const m of blocks(dp.body, 'm')) if (m.a.t === 'h' || m.a.t === 'f') it.msg.push({ t: m.a.t, c: m.a.c || '', cat: m.a.cat || '', pr: m.a.pr || '' });
      }
      for (const m of blocks(s.body.replace(/<dp\b[\s\S]*?(<\/dp>|\/>)/g, '').replace(/<ar\b[\s\S]*?(<\/ar>|\/>)/g, ''), 'm')) if (m.a.t === 'h') it.msg.push({ t: 'h', c: m.a.c || '', cat: m.a.cat || '', pr: m.a.pr || '' });
    }
  }
  const from = now - 5 * 60e3, to = now + hours * 3600e3;
  const list = [...map.values()].filter(x => { const t = x.ct || x.pt; return t && t >= from && t <= to; })
    .map(x => Object.assign(x, { delay: x.ct && x.pt ? Math.round((x.ct - x.pt) / 60000) : null }))
    .sort((a, b) => (a.ct || a.pt) - (b.ct || b.pt)).slice(0, 80);
  return { src: 'db', st: { id: eva, name: station }, ts: now, list };
}

/* ---------- DB: lifts and escalators ---------- */
async function dbLifts(C, eva) {
  if (!/^\d{6,9}$/.test(eva || '')) throw new Error('eva');
  const sd = await up(C, `${STADA}/stations?eva=${eva}`, 30 * 86400, dbH(C, 'application/json'), 'json');
  const st = sd && sd.result && sd.result[0]; if (!st) return { st: null, items: [] };
  const fa = await up(C, `${FASTA}/stations/${st.number}`, 120, dbH(C, 'application/json'), 'json').catch(() => null);
  const items = ((fa && fa.facilities) || []).map(f => ({ id: f.equipmentnumber, type: f.type, state: f.state, d: f.description || '', x: f.stateExplanation || '' }));
  return { st: { number: st.number, name: st.name }, items, ts: Date.now() };
}

/* ---------- RMV (Hessen): stops and departures ---------- */
const arr = x => Array.isArray(x) ? x : x ? [x] : [];
async function rmvStations(C, q) {
  const k = encodeURIComponent(C.env.RMV_KEY), lat = +q.get('lat'), lon = +q.get('lon'), s = (q.get('q') || '').trim();
  let url;
  if (isFinite(lat) && isFinite(lon) && q.get('lat')) url = `${RMV}/location.nearbystops?accessId=${k}&format=json&originCoordLat=${lat.toFixed(5)}&originCoordLong=${lon.toFixed(5)}&r=1200&maxNo=10`;
  else if (s.length >= 2) url = `${RMV}/location.name?accessId=${k}&format=json&type=S&maxNo=12&input=${encodeURIComponent(s)}`;
  else return [];
  const d = await up(C, url, 86400, {}, 'json');
  return arr(d && d.stopLocationOrCoordLocation).map(x => x.StopLocation).filter(Boolean).map(x => ({ id: x.extId || x.id, name: x.name, lat: +x.lat, lon: +x.lon, dist: x.dist != null ? +x.dist : null }));
}
async function rmvBoard(C, id) {
  if (!id) throw new Error('id');
  const k = encodeURIComponent(C.env.RMV_KEY);
  const d = await up(C, `${RMV}/departureBoard?accessId=${k}&format=json&id=${encodeURIComponent(id)}&duration=90&maxJourneys=60`, 30, {}, 'json');
  const ms = (date, time) => { if (!date || !time) return null; const [y, mo, dd] = date.split('-').map(Number), [h, mi] = time.split(':').map(Number); return berlinMs(y, mo, dd, h, mi); };
  let station = '';
  const list = arr(d && d.Departure).map((x, i) => {
    const pr = arr(x.Product)[0] || {}, pt = ms(x.date, x.time), ct = x.rtTime ? ms(x.rtDate || x.date, x.rtTime) : null;
    station = station || x.stop || '';
    const line = (pr.line || pr.displayNumber || (x.name || '').replace(/\s+/g, ' ').trim()).trim();
    const cat = pr.catOut || pr.catOutS || '';
    return { id: (x.JourneyDetailRef && x.JourneyDetailRef.ref) || String(i), cat: cat.trim(), num: pr.num || '', fc: '', line: /^\d/.test(line) && cat && !/bus|tram/i.test(cat) ? cat.trim() + line : line, dir: x.direction || '', via: [], pt, ct, pp: x.track || '', cp: x.rtTrack && x.rtTrack !== x.track ? x.rtTrack : '', cancel: x.cancelled === true || x.cancelled === 'true', msg: arr(x.Messages && x.Messages.Message).map(m => ({ t: 'h', head: m.head || '', text: m.text || '' })).slice(0, 2), delay: ct && pt ? Math.round((ct - pt) / 60000) : null, kind: /bus/i.test(cat) ? 'bus' : /tram|str/i.test(cat) ? 'tram' : /u-?bahn|^u$/i.test(cat) ? 'subway' : /s-?bahn|^s$/i.test(cat) ? 'suburban' : 'train' };
  }).filter(x => x.pt);
  return { src: 'rmv', st: { id, name: station }, ts: Date.now(), list };
}

/* exported for local tests */
export const _t = { attrs, blocks, ttMs, berlinMs, dbBoard, dbStations, dbLifts, rmvBoard, rmvStations };
