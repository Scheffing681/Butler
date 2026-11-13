/* v220: saved entries stay visible (Add sheet + bell), login without digital time / square button, iPhone bottom band fix */
const H10S={rec:['Только что записано','Gerade notiert','Just saved','Właśnie zapisane','Az önce kaydedildi','Tout juste noté','Recién guardado'],
 nt:['Записано','Notiert','Saved','Zapisano','Kaydedildi','Noté','Guardado'],
 clr:['Очистить всё','Alles löschen','Clear all','Wyczyść wszystko','Tümünü temizle','Tout effacer','Borrar todo']};
const h10t=k=>cv5n(H10S[k]);
const h10hm=at=>{try{const d=new Date(at),t0=new Date();const hm=String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');return d.toDateString()===t0.toDateString()?hm:d.getDate()+'.'+(d.getMonth()+1)+' '+hm}catch{return''}};
function h10list(){const a=Array.isArray(g.h10n)?g.h10n:[];const wk=Date.now()-7*864e5;return a.filter(o=>o&&o.k&&o.at>wk&&bd8res(o.k))}
/* every new task / note / event / money entry also lands in the bell */
bd8track=(f=>function(){const before=m.bd8ids;const r=f.apply(this,arguments);try{if(before){const lg=g.bd8log||[];const seen=new Set((g.h10n||[]).map(o=>o.k));const nw=lg.filter(o=>o.at>Date.now()-5e3&&!seen.has(o.k)&&o.k[0]!=='s');if(nw.length&&nw.length<=6){g.h10n=nw.map(o=>({k:o.k,at:o.at})).concat(h10list()).slice(0,20);requestAnimationFrame(h10dot)}}}catch{}return r})(bd8track);
function h10unread(){const s=+g.h10seen||0;return h10list().filter(o=>o.at>s).length}
function h10dot(){try{const n=h10unread();document.querySelectorAll('.ly7bell,[data-act="ly7bell"]').forEach(b=>{let d=b.querySelector('.h10dt');const has=b.querySelector('.ly7bd:not(.h10dt),.bd8bd,b:not(.h10dt)');if(n&&!has){if(!d){d=document.createElement('b');d.className='ly7bd h10dt';b.appendChild(d)}d.textContent=n}else if(d&&(!n||has))d.remove()})}catch{}}
ly7pop=(f=>function(){const r=f.apply(this,arguments);try{const el=document.querySelector('.ly7pop');const L1=h10list();if(el&&L1.length){const p=el.querySelector(':scope > p');p&&p.remove();const go=el.querySelector('.ly7go');
 const box=document.createElement('div');box.className='h10nb';box.innerHTML=`<h5>✓ ${i(h10t('nt'))}</h5>`+L1.slice(0,6).map(o=>{const x=bd8res(o.k);return`<div class="h10r" data-k="${i(o.k)}"><button type="button" class="op"><span class="t">${i(x.t)}</span><small>${i(x.w)} · ${i(h10hm(o.at))}</small></button><button type="button" class="x" aria-label="×">×</button></div>`}).join('')+(L1.length>1?`<button type="button" class="h10clr">${i(h10t('clr'))}</button>`:'');
 go?el.insertBefore(box,go):el.appendChild(box);
 box.addEventListener('click',ev=>{const b=ev.target.closest('button');if(!b)return;ev.stopPropagation();if(b.classList.contains('h10clr')){g.h10n=[];$();box.remove();h10dot();return}const row=b.closest('.h10r');if(!row)return;const k=row.dataset.k;
  if(b.classList.contains('x')){g.h10n=(g.h10n||[]).filter(o=>o.k!==k);$();row.remove();if(!box.querySelector('.h10r'))box.remove();h10dot();return}
  el.remove();bd8go(k)});
 g.h10seen=Date.now();$();h10dot()}}catch{}return r})(ly7pop);
/* the Add sheet shows the last three entries and where each one went */
bd8menu=(f=>function(edit){const r=f.apply(this,arguments);try{const sh=[...document.querySelectorAll('.bd8sheet')].pop();const box=sh&&sh.querySelector('.dtscroll');const lg=(g.bd8log||[]).filter(o=>o.k[0]!=='s').map(o=>[o,bd8res(o.k)]).filter(q=>q[1]).slice(0,3);
 if(box&&lg.length&&!sh.querySelector('.h10rc')){const d=document.createElement('div');d.className='h10rc';d.innerHTML=`<h5>${i(h10t('rec'))}</h5>`+lg.map(([o,x])=>`<button type="button" data-k="${i(o.k)}">${bd8i(x.ic,'sm')}<span class="t">${i(x.t)}</span><em>→ ${i(x.w)}</em></button>`).join('');box.appendChild(d);
  d.addEventListener('click',ev=>{const b=ev.target.closest('button[data-k]');if(!b)return;ev.stopPropagation();sh.remove();setTimeout(()=>bd8go(b.dataset.k),30)});
  new MutationObserver(()=>{if(!box.contains(d)&&!box.querySelector('.bd8pm.ed'))box.appendChild(d)}).observe(box,{childList:!0})}}catch{}return r})(bd8menu);
v=(f=>function(){const r=f.apply(this,arguments);try{requestAnimationFrame(h10dot)}catch{}return r})(v);
/* iPhone: the page itself reaches the very bottom of the screen, so nothing white can show below it */
function h10edge(){try{const R=document.documentElement,gap=parseFloat(getComputedStyle(R).getPropertyValue('--g9gap'))||0;R.style.setProperty('--h10vh',innerHeight+'px');R.classList.toggle('h10x',gap>0);
 const bot=(()=>{const L2=document.elementsFromPoint(innerWidth/2,innerHeight-2).filter(e=>!e.closest('.bd8sv,.toast'));return L2[0]&&g9col(L2[0],0)})()||getComputedStyle(document.body).backgroundColor;R.style.setProperty('background-repeat','no-repeat','important');document.body.style.setProperty('background-repeat','no-repeat','important');if(bot){R.style.setProperty('background-color',bot,'important');document.body.style.setProperty('background-color',bot,'important');R.style.setProperty('--h10bot',bot)}}catch{}}
g9edges=(f=>function(){const r=f.apply(this,arguments);h10edge();return r})(g9edges);
{const st=document.createElement('style');st.textContent=`
.login .lg9time,.login .br9time,.login .br9date,.login .br9qc{display:none!important}
html,body{background-repeat:no-repeat!important}
html.h10x{min-height:calc(var(--h10vh,100%) + var(--g9gap,0px))!important;overflow:hidden!important}
html.h10x body{height:var(--h10vh,100%)!important;overflow:hidden!important}
html.h10x body::after{content:"";position:fixed;left:0;right:0;top:var(--h10vh,100%);height:calc(var(--g9gap,0px) + 40px);background:var(--h10bot,var(--bg));z-index:0;pointer-events:none}
html.g9short .dtsheet,html.g9short .bd8sheet{padding-bottom:calc(env(safe-area-inset-bottom,0px) + var(--g9gap,0px))!important}
.h10rc{margin-top:16px;border-top:1px solid var(--line);padding-top:10px}
.h10rc h5,.h10nb h5{margin:0 2px 6px;font-size:13px;font-weight:500;letter-spacing:.04em;opacity:.7}
.h10rc button{display:flex;align-items:center;gap:10px;width:100%;padding:9px 6px;border:0;background:none;color:var(--ink);font:inherit;font-size:15px;text-align:left;cursor:pointer;border-radius:10px}
.h10rc button .t{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.h10rc button em{font-style:normal;font-size:13px;color:var(--gold,#C99A3E);flex:none}
.h10rc svg.bi{width:18px!important;height:18px!important}
.h10nb{margin:4px 0 8px;padding-top:6px;border-top:1px solid var(--line)}
.h10r{display:flex;align-items:center;gap:6px}.h10r .op{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:1px;padding:7px 4px;border:0;background:none;color:var(--ink);font:inherit;font-size:15px;text-align:left;cursor:pointer}
.h10r .op .t{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.h10r .op small{font-size:12px;color:var(--gold,#C99A3E)}
.h10r .x{flex:none;width:32px;height:32px;border:0;border-radius:50%;background:none;color:var(--ink);opacity:.55;font-size:20px;cursor:pointer}
.h10clr{display:block;margin:4px 0 0 auto;border:0;background:none;color:var(--ink);opacity:.6;font:inherit;font-size:13px;cursor:pointer;text-decoration:underline}
`;document.head.appendChild(st)}
{const st=document.createElement('style');st.textContent=`[data-act="ly7bell"]{position:relative}.h10dt{position:absolute;top:2px;right:2px;min-width:17px;height:17px;padding:0 4px;border-radius:9px;background:var(--gold,#C99A3E);color:#10261c;font:600 11px/17px system-ui,sans-serif;text-align:center;pointer-events:none}`;document.head.appendChild(st)}
