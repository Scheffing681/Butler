/* v252: sections as on the iPhone — every section can stand alone; in «Изменить» hold a tile and drop it on another to make a folder,
   on the edge of a tile to move it; tap a folder to rename it or take a section out. «Наши группы» brings back the butler's folders. */
try{
 const F12S={grp:['Наши группы','Unsere Gruppen','Our groups','Nasze grupy','Gruplarımız','Nos groupes','Nuestros grupos'],
  solo:['Каждый отдельно','Alle einzeln','Each on its own','Każdy osobno','Hepsi ayrı','Chacun à part','Cada uno aparte'],
  undo:['Отменить','Rückgängig','Undo','Cofnij','Geri al','Annuler','Deshacer'],
  hint:['Удерживайте плитку и перетащите на другую — получится папка. На край плитки — переставить. Нажмите на папку, чтобы переименовать её или вынуть раздел.','Kachel halten und auf eine andere ziehen – so entsteht ein Ordner. Auf den Rand ziehen – verschieben. Ordner antippen zum Umbenennen oder Herausnehmen.','Hold a tile and drop it on another to make a folder. Drop it on the edge to move it. Tap a folder to rename it or take a section out.','Przytrzymaj kafelek i upuść na inny – powstanie folder. Na krawędź – przenieś. Dotknij folderu, aby zmienić nazwę lub wyjąć dział.','Bir kutucuğu basılı tutup diğerine bırakın – klasör olur. Kenara bırakın – taşıyın. Klasöre dokunup adını değiştirin veya bölümü çıkarın.','Maintenez une tuile et déposez-la sur une autre pour créer un dossier. Sur le bord – la déplacer. Touchez un dossier pour le renommer ou en sortir une rubrique.','Mantén un mosaico y suéltalo sobre otro para crear una carpeta. En el borde – moverlo. Toca una carpeta para renombrarla o sacar una sección.'],
  fold:['Папка','Ordner','Folder','Folder','Klasör','Dossier','Carpeta'],name:['Название папки','Name des Ordners','Folder name','Nazwa folderu','Klasör adı','Nom du dossier','Nombre de la carpeta'],
  out:['Вынуть','Herausnehmen','Take out','Wyjmij','Çıkar','Sortir','Sacar'],split:['Разобрать папку','Ordner auflösen','Undo the folder','Rozwiąż folder','Klasörü dağıt','Défaire le dossier','Deshacer la carpeta'],
  move:['Переместить в…','Verschieben nach …','Move to…','Przenieś do…','Taşı…','Déplacer vers…','Mover a…'],alone:['Отдельно','Einzeln','On its own','Osobno','Ayrı','À part','Aparte'],
  nw:['Новая папка с…','Neuer Ordner mit …','New folder with…','Nowy folder z…','Yeni klasör…','Nouveau dossier avec…','Nueva carpeta con…'],
  made:['Папка создана','Ordner erstellt','Folder made','Folder utworzony','Klasör oluşturuldu','Dossier créé','Carpeta creada'],
  rs:['Вернуть наши группы? Ваши папки будут заменены.','Unsere Gruppen wiederherstellen? Ihre Ordner werden ersetzt.','Bring back our groups? Your folders will be replaced.','Przywrócić nasze grupy? Twoje foldery zostaną zastąpione.','Gruplarımız geri gelsin mi? Klasörleriniz değişir.','Rétablir nos groupes ? Vos dossiers seront remplacés.','¿Volver a nuestros grupos? Tus carpetas se reemplazarán.']};
 const f12=k=>cv5n(F12S[k]);
 const H9DEF=JSON.parse(JSON.stringify(H9X)),H9SDEF={};H9X.forEach(h=>{H9SDEF[h[0]]=h9S[h[0]]});
 const used0=()=>new Set(H9DEF.flatMap(h=>h[1]));
 /* every section there is: the butler's groups' members that exist + the user's own */
 let f12r=null;const f12all=()=>{const out=[];H9DEF.forEach(h=>h[1].forEach(k=>{if(h9has(k)&&!out.includes(k))out.push(k)}));const r=f12r||[];let base=[];try{const keep=g.h9u,kx=H9X.slice();g.h9u=null;H9X.length=0;H9DEF.forEach(h=>H9X.push(h));base=x_();H9X.length=0;kx.forEach(h=>H9X.push(h));g.h9u=keep}catch{}const ok=new Set(out.concat(base));r.forEach(k=>{const id=h9id(k);(id?h9mem(id):[k]).forEach(q=>{if(!out.includes(q)&&(ok.has(q)||!base.length))out.push(q)})});base.forEach(k=>{if(!h9id(k)&&!out.includes(k))out.push(k)});return out};
 const f12def=()=>{const out=[];H9DEF.forEach(h=>{const M=h[1].filter(h9has);if(M.length)out.push({id:h[0],k:M})});const u=used0();let r=[];try{const keep=g.h9u;g.h9u=null;r=x_();g.h9u=keep}catch{}r.forEach(k=>{if(!h9id(k)&&!u.has(k)&&!out.includes(k))out.push(k)});return out};
 const isF=e=>e&&typeof e==='object';
 /* the user's layout → H9X, names, icons */
 function f12apply(){const L=g.h9u;if(!Array.isArray(L))return;H9X.length=0;Object.keys(H9SDEF).forEach(id=>{h9S[id]=H9SDEF[id]});
  L.forEach(e=>{if(!isF(e))return;const d=H9DEF.find(h=>h[0]===e.id);H9X.push([e.id,e.k.slice(),d?d[2]:'fld']);if(e.n)h9S[e.id]=Array(7).fill(e.n);else if(!h9S[e.id])h9S[e.id]=Array(7).fill(cv5n(F12S.fold));BD8K['q:h9'+e.id]=d?d[2]:'fld';H9XPS[e.id]=H9XPS[e.id]||'doc'})}
 function f12L(){if(!Array.isArray(g.h9u))g.h9u=f12def();return g.h9u}
 const f12push=()=>{m.f12u=(m.f12u||[]).concat([JSON.stringify({u:g.h9u||null,q:(g.secQ||[]).slice(),mo:g.h9mode||'grp'})]).slice(-30)};
 const f12show=k=>{try{if(k.startsWith('c:')){const c=nt(k.slice(2));if(c)c.hidden=!1}else{const s=Array.isArray(g.secQ)?g.secQ:(g.secQ=[]);const q=k.slice(2);s.includes(q)||s.push(q)}}catch{}};
 const f12done=(msg,mo)=>{g.h9mode=mo||'own';f12apply();$();try{k3keep(()=>v())}catch{v()}msg&&T(msg)};
 /* take a key out of wherever it is */
 const f12pull=(L,k)=>{for(let j=L.length-1;j>=0;j--){const e=L[j];if(e===k)L.splice(j,1);else if(isF(e)){const x=e.k.indexOf(k);if(x>=0)e.k.splice(x,1)}}};
 const f12tidy=L=>{for(let j=L.length-1;j>=0;j--){const e=L[j];if(isF(e)&&e.k.length<2){L.splice(j,1,...e.k);e.k.forEach(f12show)}}};
 const keyOf=t=>{const id=h9id(t);return id?{f:id}:{k:t}};
 const idxOf=(L,t)=>{const id=h9id(t);return L.findIndex(e=>id?isF(e)&&e.id===id:e===t)};
 /* drop a on b: mode 'in' | 'before' | 'after' */
 function f12drop(a,b,mode){if(a===b)return;f12push();const L=f12L(),A=h9id(a),B=h9id(b);
  if(mode!=='in'){const j=idxOf(L,a);if(j<0)return;const it=L.splice(j,1)[0];let t=idxOf(L,b);if(t<0)t=L.length;else if(mode==='after')t++;L.splice(t,0,it);f12tidy(L);return f12done()}
  if(A){/* a folder onto something: its sections join the target */const fa=L.find(e=>isF(e)&&e.id===A);if(!fa)return;if(B){const fb=L.find(e=>isF(e)&&e.id===B);fa.k.forEach(k=>fb.k.includes(k)||fb.k.push(k));L.splice(L.indexOf(fa),1)}else{fa.k.push(b);f12pull(L,b);fa.k.push(b);fa.k=[...new Set(fa.k)]}f12tidy(L);return f12done(f12('made'))}
  if(B){const fb=L.find(e=>isF(e)&&e.id===B);f12pull(L,a);fb.k.includes(a)||fb.k.push(a);f12tidy(L);return f12done(f12('made'))}
  const t=idxOf(L,b);f12pull(L,a);const t2=idxOf(L,b);const nf={id:'u'+Date.now().toString(36),n:'',k:[b,a]};
  /* a fitting name: the butler's group both came from */const gd=H9DEF.find(h=>h[1].includes(a)&&h[1].includes(b));nf.n=gd?cv5n(H9SDEF[gd[0]]):cv5n(F12S.fold);L.splice(t2>=0?t2:t,1,nf);f12show('q:h9'+nf.id);(g.secQ||(g.secQ=[])).includes('h9'+nf.id)||g.secQ.push('h9'+nf.id);f12tidy(L);f12done(f12('made'))}
 /* folder sheet: rename, take out, undo the folder */
 function f12folder(id){const L=f12L(),fo=L.find(e=>isF(e)&&e.id===id);if(!fo)return;const body=()=>`<label class="f12nm"><span>${i(f12('name'))}</span><input class="field" maxlength="28" value="${i(fo.n||h9t(id))}"></label>
  <div class="f12ls">${fo.k.map(k=>`<div><span>${bd8kic(k,{ico:'line'})}<b>${i(h9lab(k))}</b></span><button type="button" data-out="${i(k)}">${i(f12('out'))}</button></div>`).join('')}</div>
  <button type="button" class="btn f12sp" data-sp="1">${i(f12('split'))}</button>`;
  const sh=H(fo.n||h9t(id),body(),()=>{});sh.classList.add('bd8sheet','f12sh');const box=sh.querySelector('.dtscroll');
  const nm=()=>box.querySelector('.f12nm input');const save=()=>{const v2=(nm().value||'').trim();if(v2&&v2!==fo.n){f12push();fo.n=v2;f12done()}};
  box.addEventListener('change',e=>{if(e.target===nm())save()});
  box.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
   if(b.dataset.out){f12push();const k=b.dataset.out;fo.k=fo.k.filter(q=>q!==k);const j=L.indexOf(fo);L.splice(j+1,0,k);f12show(k);f12tidy(L);f12done();if(L.includes(fo))box.innerHTML=body();else sh.remove();return}
   if(b.dataset.sp){f12push();const j=L.indexOf(fo);L.splice(j,1,...fo.k);fo.k.forEach(f12show);f12done();sh.remove()}})}
 /* move sheet for a single section: for those who prefer tapping to dragging */
 function f12move(k){const L=f12L(),fs=L.filter(isF);const body=`<div class="h9mn">${fs.map(f=>`<button type="button" data-f="${i(f.id)}">${bd8i('grid')}<span>${i(f.n||h9t(f.id))}</span></button>`).join('')}<button type="button" data-f="">${bd8i('chev')}<span>${i(f12('alone'))}</span></button></div>`;
  const sh=H(f12('move'),body,()=>{});sh.classList.add('bd8sheet');sh.querySelector('.dtscroll').addEventListener('click',e=>{const b=e.target.closest('button[data-f]');if(!b)return;sh.remove();const id=b.dataset.f;
   if(id){const fo=L.find(q=>isF(q)&&q.id===id);if(fo&&!fo.k.includes(k)){f12push();f12pull(L,k);fo.k.push(k);f12tidy(L);f12done(f12('made'))}}else{f12push();const inF=L.some(q=>isF(q)&&q.k.includes(k));if(inF){f12pull(L,k);L.push(k);f12show(k);f12tidy(L);f12done()}}})}
 /* the list */
 x_=(f=>function(){const r=f.apply(this,arguments);if(h9raw||g.h9off||!Array.isArray(g.h9u))return r;f12r=r;try{const L=g.h9u,all=f12all(),seen=new Set(),out=[];
   L.forEach(e=>{if(isF(e)){const M=e.k.filter(k=>all.includes(k));M.forEach(k=>seen.add(k));if(M.length>1)out.push('q:h9'+e.id);else if(M.length===1)out.push(M[0])}else if(all.includes(e)&&!seen.has(e)){seen.add(e);out.push(e)}});
   all.forEach(k=>{if(!seen.has(k))out.push(k)});return out}catch{return r}})(x_);
 f12apply();
 /* the two ready layouts */
 L.f12grp=function(){if((g.h9mode||'grp')==='own'&&!confirm(f12('rs')))return;f12push();g.h9u=null;H9X.length=0;H9DEF.forEach(h=>H9X.push(JSON.parse(JSON.stringify(h))));Object.keys(H9SDEF).forEach(id=>{h9S[id]=H9SDEF[id]});g.h9u=f12def();f12apply();f12done(0,'grp')};
 L.f12solo=function(){f12push();if(!f12r){try{const keep=g.h9u;g.h9u=null;f12r=x_();g.h9u=keep}catch{}}g.h9u=f12all();g.h9u.forEach(f12show);f12apply();f12done(0,'solo')};
 L.f12undo=function(){const u=(m.f12u||[]).pop();if(!u)return;try{const o=JSON.parse(u);g.h9u=o.u;g.secQ=o.q;g.h9mode=o.mo;if(!o.u){H9X.length=0;H9DEF.forEach(h=>H9X.push(JSON.parse(JSON.stringify(h))))}f12apply();$();try{k3keep(()=>v())}catch{v()}}catch{}};
 /* folders look like folders: up to four small signs */
 bd9item=(f=>function(k,ed){let h=f.apply(this,arguments);try{if(k.startsWith('r:'))h=h.replace(/<span><\/span>/,`<span>${i(h9lab(k))}</span>`).replace(/data-n=""/,`data-n="${i(h9lab(k).toLowerCase())}"`);const id=h9id(k);if(id){const M=h9mem(id).slice(0,4);h=h.replace(/(<button type="button" class="bd9b")/,'$1 data-f12f="1"').replace(/<svg class="bi"[\s\S]*?<\/svg>/,`<i class="f12mini">${M.map(q=>`<i>${bd8kic(q,{ico:'line'})}</i>`).join('')}</i>`)}if(ed)h=h.replace('class="bd9it','class="bd9it f12j').replace(/(<button type="button" class="bd9b")/,`$1 data-f12k="${i(k)}"`)}catch{}return h})(bd9item);
 bd9screen=(f=>function(){let h=f.apply(this,arguments);try{if(m.bd9e){const mo=g.h9mode||'grp',sol=mo==='solo';h=h.replace(/<p class="bd9hint">[\s\S]*?<\/p>/,`<p class="bd9hint">${i(f12('hint'))}</p><div class="f12bar"><button type="button" class="${mo==='grp'?'on':''}" data-act="f12grp">${i(f12('grp'))}</button><button type="button" class="${sol?'on':''}" data-act="f12solo">${i(f12('solo'))}</button><button type="button" class="u" data-act="f12undo" ${(m.f12u||[]).length?'':'disabled'}>↶ ${i(f12('undo'))}</button></div>`)}}catch{}return h})(bd9screen);
 /* in «Изменить» a tap opens the folder / the move sheet; the eye still shows or hides */
 document.addEventListener('click',e=>{if(!m.bd9e||m.route!=='bd9all')return;const b=e.target.closest&&e.target.closest('.screen.bd9 .bd9b[data-f12k]');if(!b)return;if(Date.now()-(m.f12dt||0)<500){e.stopPropagation();e.preventDefault();return}e.stopPropagation();e.preventDefault();const k=b.dataset.f12k,id=h9id(k);if(id)f12folder(id);else f12move(k)},!0);
 /* dragging */
 let D=null;
 const f12end=()=>{if(!D)return;clearTimeout(D.t);if(D.gh)D.gh.remove();document.querySelectorAll('.f12tg,.f12be,.f12af,.f12src').forEach(x=>x.classList.remove('f12tg','f12be','f12af','f12src'));document.documentElement.classList.remove('f12drag');D=null};
 document.addEventListener('pointerdown',e=>{if(!m.bd9e||m.route!=='bd9all'||e.button>0)return;const b=e.target.closest&&e.target.closest('.screen.bd9 .bd9b[data-f12k]');if(!b)return;f12end();
  D={b,k:b.dataset.f12k,x0:e.clientX,y0:e.clientY,on:0,tg:null,mode:null};D.t=setTimeout(()=>{if(!D)return;D.on=1;try{navigator.vibrate&&navigator.vibrate(12)}catch{}const r=b.getBoundingClientRect();const gh=b.cloneNode(!0);gh.classList.add('f12gh');gh.classList.remove('f12tg','f12be','f12af');gh.style.cssText=`width:${r.width}px;height:${r.height}px;left:${r.left}px;top:${r.top}px`;(b.closest('.bd9g')||document.body).appendChild(gh);D.gh=gh;D.dx=D.x0-r.left;D.dy=D.y0-r.top;b.classList.add('f12src');document.documentElement.classList.add('f12drag')},280)},{passive:!0});
 const mv=e=>{if(!D)return;const p=e.touches?e.touches[0]:e;if(!D.on){if(Math.hypot(p.clientX-D.x0,p.clientY-D.y0)>9)f12end();return}if(e.cancelable)e.preventDefault();D.gh.style.left=(p.clientX-D.dx)+'px';D.gh.style.top=(p.clientY-D.dy)+'px';
  document.querySelectorAll('.f12tg,.f12be,.f12af').forEach(x=>x.classList.remove('f12tg','f12be','f12af'));const el=document.elementFromPoint(p.clientX,p.clientY),t=el&&el.closest('.screen.bd9 .bd9b[data-f12k]');D.tg=null;if(t&&t!==D.b){const r=t.getBoundingClientRect(),fx=(p.clientX-r.left)/r.width;D.tg=t.dataset.f12k;D.mode=fx<.22?'before':fx>.78?'after':'in';t.classList.add(D.mode==='in'?'f12tg':D.mode==='before'?'f12be':'f12af')}
  /* near the edges the list scrolls by itself */const H0=innerHeight;if(p.clientY<90)scrollBy(0,-12);else if(p.clientY>H0-150)scrollBy(0,12)};
 document.addEventListener('pointermove',mv,{passive:!1});document.addEventListener('touchmove',mv,{passive:!1});
 const up=()=>{if(!D)return;const d=D;if(d.on){m.f12dt=Date.now();const a=d.k,b=d.tg,mo=d.mode;f12end();if(b)f12drop(a,b,mo)}else f12end()};
 document.addEventListener('pointerup',up,!0);document.addEventListener('pointercancel',()=>{if(D&&!D.on)f12end()},!0);document.addEventListener('touchend',up,!0);
 document.addEventListener('contextmenu',e=>{if(m.bd9e&&e.target.closest&&e.target.closest('.screen.bd9 .bd9b'))e.preventDefault()},!0);
 const st=document.createElement('style');st.textContent=`
.f12bar{display:flex;gap:6px;flex-wrap:wrap}.f12bar button{flex:1 1 auto;height:38px;padding:0 12px;border-radius:19px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:14px;cursor:pointer;white-space:nowrap}.f12bar button.on{background:var(--gold,#C99A3E);color:#15120b;border-color:transparent;font-weight:600}.f12bar button.u{flex:0 0 auto}.f12bar button:disabled{opacity:.4}
.f12mini{display:grid!important;grid-template-columns:repeat(2,18px)!important;grid-auto-rows:18px;gap:3px;padding:5px;font-style:normal;flex:none;border-radius:10px;background:color-mix(in srgb,var(--gold,#C99A3E) 12%,transparent);border:1px solid color-mix(in srgb,var(--gold,#C99A3E) 35%,transparent)}.f12mini>i{display:grid!important;place-items:center;width:18px;height:18px;overflow:hidden;font-style:normal}.f12mini>i>*{display:grid!important;place-items:center;max-width:18px;max-height:18px}.f12mini svg{width:16px!important;max-width:16px;max-height:16px;height:18px!important;color:var(--gold,#C99A3E);fill:none;stroke:currentColor;stroke-width:1.8}
.bd9it.f12j .bd9b{animation:f12j .32s ease-in-out infinite alternate;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;touch-action:pan-y}.bd9it.f12j:nth-child(2n) .bd9b{animation-delay:-.16s}
@keyframes f12j{from{transform:rotate(-1.1deg)}to{transform:rotate(1.1deg)}}
html.f12drag,html.f12drag body{overflow:hidden;touch-action:none}html.f12drag .bd9it.f12j .bd9b{animation:none}
.f12gh{position:fixed!important;z-index:9999;pointer-events:none;transform:scale(1.08);box-shadow:0 14px 34px rgba(0,0,0,.35)!important;opacity:.95;border-color:var(--gold,#C99A3E)!important}
.bd9b.f12src{opacity:.25}.bd9b.f12tg{outline:3px solid var(--gold,#C99A3E);outline-offset:2px;transform:scale(1.06)!important;animation:none!important}
.bd9b.f12be{box-shadow:-5px 0 0 0 var(--gold,#C99A3E)!important}.bd9b.f12af{box-shadow:5px 0 0 0 var(--gold,#C99A3E)!important}
.f12sh .f12nm{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)}.f12sh .f12nm input{font-size:17px}
.f12ls{display:flex;flex-direction:column;gap:8px;margin:14px 0}.f12ls>div{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:14px;border:1px solid var(--line);background:var(--surface)}.f12ls span{display:flex;align-items:center;gap:10px;min-width:0}.f12ls svg{width:22px;height:22px;color:var(--gold,#C99A3E);fill:none;stroke:currentColor;stroke-width:1.7;flex:none}.f12ls b{font-weight:500}
.f12ls button{border:1px solid var(--line);background:transparent;color:var(--ink);font:inherit;font-size:13.5px;padding:7px 12px;border-radius:12px;cursor:pointer}.f12sp{width:100%}
`;document.head.appendChild(st);
}catch(e){}
