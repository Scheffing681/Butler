/* Network first for the app itself, so every update arrives at once; the last copy is kept for offline use.
   Program libraries (PDF viewer, camera model) are kept on the phone after the first use.
   In «fully offline» mode nothing leaves the phone: every request to another site is refused here. */
const C='butler-v95',LIBS='butler-libs',PV='butler-pv';
const LIB_RE=/^https:\/\/(cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|unpkg\.com|storage\.googleapis\.com\/mediapipe-)/;
let OFF=null;
const offNow=()=>OFF!==null?Promise.resolve(OFF):caches.open(PV).then(c=>c.match('/__pv')).then(m=>m?m.text():'0').then(t=>(OFF=t==='1')).catch(()=>(OFF=false));
self.addEventListener('message',e=>{const d=e.data||{};if('pvOff' in d){OFF=!!d.pvOff;caches.open(PV).then(c=>c.put('/__pv',new Response(OFF?'1':'0'))).catch(()=>{})}});
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icons/icon-192.png','img/ic3.webp','fonts/fonts.css']).then(()=>c.addAll(['img/person_m.webp','img/person_f.webp','lib/pdf.min.mjs','lib/pdf.worker.min.mjs','lib/d3geo.js','geo/world.json']).catch(()=>{}))).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!=='butler-books'&&x!==LIBS&&x!==PV).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
offNow();
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
  if(u.origin!==location.origin){const lib=r.method==='GET'&&LIB_RE.test(r.url);
    if(OFF===false&&!lib)return; /* online: the browser handles it as usual */
    e.respondWith(offNow().then(off=>{
      if(lib)return caches.open(LIBS).then(c=>c.match(r).then(m=>m||(off?Response.error():fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone()).catch(()=>{});return res}))));
      return off?Response.error():fetch(r)}));
    return}
  if(r.method!=='GET')return;
  e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))))});
