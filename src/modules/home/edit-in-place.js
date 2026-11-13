/* ===== v266 Edit the home screen in place (like an iPhone) =====
   Hold any block on the home screen → edit mode. Each block gets a gold frame: «–» hides it, «≡» drags it up/down,
   a tap opens its settings (tiles: size and which sections; quick actions; today; goals). «＋ Добавить блок» brings blocks back.
   The header (sign, grid, bell, settings) is locked. «Готово» keeps the changes and stores them as «Мой: <template>»,
   «Отменить» puts everything back. Works for every template; the classic Silentium Gold home is not touched. */
const HE1={ru:{done:'Готово',undo:'Отменить',add:'Добавить блок',lock:'Шапка закреплена',hint:'Тяните ≡, чтобы переставить · нажмите на блок, чтобы настроить',size:'Размер',inside:'Что в плитках',swap:'Заменить',addT:'Добавить плитку',pick:'Выберите раздел',big2:'Крупные',big:'Большие',small:'Маленькие',list:'Список',acts:'Кнопки',view:'Вид',tl:'Лента времени',plain:'Список дел',ring:'Кольцо',bar:'Полоса',hide:'Спрятать блок',none:'Все блоки уже на экране',mine:'Мой',saved:'Сохранено как «%n»',up:'Выше',down:'Ниже',fits:'Главная помещается на один экран — лишнее уходит в «Ещё»'},
 de:{done:'Fertig',undo:'Abbrechen',add:'Block hinzufügen',lock:'Kopfzeile fixiert',hint:'≡ ziehen zum Verschieben · Block antippen zum Anpassen',size:'Größe',inside:'Was in den Kacheln ist',swap:'Ersetzen',addT:'Kachel hinzufügen',pick:'Bereich wählen',big2:'Sehr groß',big:'Groß',small:'Klein',list:'Liste',acts:'Tasten',view:'Ansicht',tl:'Zeitleiste',plain:'Liste',ring:'Ring',bar:'Balken',hide:'Block ausblenden',none:'Alle Blöcke sind schon da',mine:'Mein',saved:'Gespeichert als «%n»',up:'Nach oben',down:'Nach unten',fits:'Die Startseite passt auf einen Bildschirm — der Rest steht unter «Mehr»'},
 en:{done:'Done',undo:'Cancel',add:'Add block',lock:'Header is locked',hint:'Drag ≡ to move · tap a block to adjust',size:'Size',inside:'What the tiles show',swap:'Replace',addT:'Add tile',pick:'Choose a section',big2:'Extra large',big:'Large',small:'Small',list:'List',acts:'Buttons',view:'View',tl:'Timeline',plain:'List',ring:'Ring',bar:'Bar',hide:'Hide block',none:'All blocks are already on the screen',mine:'My',saved:'Saved as «%n»',up:'Up',down:'Down',fits:'Home fits one screen — the rest goes to «More»'}};
const he1t=(k,o)=>{let s=(HE1[g.lang]||HE1.en)[k]||HE1.en[k]||k;if(o)Object.keys(o).forEach(q=>{s=s.replace('%'+q,o[q])});return s};
const HE1MAP={bd8gr:'greet',bd8clk:'clock',bd8wk:'week',bd8td:'today',bd8g:'tiles',bd8bal:'bal',bd8sts:'stats',bd8ac:'acts',bd8go:'goal',bd8in:'input'};
let he1orig=null,he1lp=null;
const he1cfg=()=>{const c=bd8C();return c.on&&c.cfg&&!c.cfg.gold?c.cfg:null};
const he1home=()=>document.querySelector('.screen.bd8s .bd8h:not(.bd8th)');
const he1key=el=>{for(const k in HE1MAP)if(el.classList.contains(k))return HE1MAP[k];return null};
function he1enter(){const cf=he1cfg();if(!cf||m.he1)return;const c=bd8C();he1orig=JSON.stringify({cfg:cf,slots:c.slots,arow:c.arow});m.he1=1;if(!Array.isArray(cf.blocks))cf.blocks=[];try{navigator.vibrate&&navigator.vibrate(12)}catch{}v();setTimeout(()=>{try{T(he1t('hint'))}catch{}},250)}
function he1exit(keep){if(!m.he1)return;const c=bd8C();m.he1=0;document.querySelectorAll('.he1ov').forEach(x=>x.remove());
 if(!keep&&he1orig){try{const o=JSON.parse(he1orig);c.cfg=o.cfg;c.slots=o.slots;c.arow=o.arow}catch{}}
 else if(keep&&he1orig&&he1orig!==JSON.stringify({cfg:c.cfg,slots:c.slots,arow:c.arow})){try{const base=c.cfg.he1base||bd8name(c.cfg);c.cfg.he1base=base;const n=he1t('mine')+': '+base,cf=JSON.parse(JSON.stringify(c.cfg));const ex=c.saved.find(q=>q.he1);if(ex){ex.cfg=cf;ex.n=n}else c.saved.unshift({n,cfg:cf,he1:1});c.saved=c.saved.slice(0,8);T(he1t('saved',{n}))}catch(e){Hooks.err('he1save',e)}}
 he1orig=null;$();v()}
/* ---------- frames over the blocks ---------- */
function he1draw(){document.querySelectorAll('.he1ov').forEach(x=>x.remove());if(!m.he1||m.route!=='home')return;const H=he1home(),cf=he1cfg();if(!H||!cf){m.he1=0;return}
 const ov=document.createElement('div');ov.className='he1ov';
 ov.innerHTML=`<div class="he1bar"><button type="button" data-he="undo">↶ ${i(he1t('undo'))}</button><button type="button" class="he1add" data-he="add">＋ ${i(he1t('add'))}</button><button type="button" class="ok" data-he="done">${i(he1t('done'))}</button></div>`;
 const top=H.querySelector('.bd8top');if(top){const r=top.getBoundingClientRect(),d=document.createElement('div');d.className='he1lock';Object.assign(d.style,{left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px'});d.innerHTML=`<span>🔒 ${i(he1t('lock'))}</span>`;ov.appendChild(d)}
 [...H.children].forEach(el=>{const k=he1key(el);if(!k)return;const r=el.getBoundingClientRect();if(r.height<4)return;const f=document.createElement('div');f.className='he1f';f.dataset.k=k;Object.assign(f.style,{left:(r.left-3)+'px',top:(r.top-3)+'px',width:(r.width+6)+'px',height:(r.height+6)+'px'});
  f.innerHTML=`<button type="button" class="he1x" data-he="rm" aria-label="${i(he1t('hide'))}">–</button><span class="he1h" aria-label="≡"><i></i><i></i><i></i></span><b class="he1n">${i(bd8s('b_'+k))}</b>`;ov.appendChild(f)});
 document.body.appendChild(ov)}
Hooks.on('render',()=>{if(m.he1)requestAnimationFrame(()=>requestAnimationFrame(he1draw));else document.querySelectorAll('.he1ov').forEach(x=>x.remove())});
Hooks.on('route',r=>{if(m.he1&&r!=='home')he1exit(!0)});
addEventListener('resize',()=>{if(m.he1)he1draw()});
/* ---------- hold to start ---------- */
document.addEventListener('pointerdown',e=>{if(m.he1||e.button>0||m.route!=='home')return;const el=e.target.closest&&e.target.closest('.screen.bd8s .bd8h:not(.bd8th) > .bd8k');if(!el||!he1key(el)||e.target.closest('[data-lp]')||!he1cfg())return;
 const x0=e.clientX,y0=e.clientY;clearTimeout(he1lp&&he1lp.t);he1lp={x0,y0,t:setTimeout(()=>{he1lp=null;he1enter()},600)}},!0);
document.addEventListener('pointermove',e=>{if(he1lp&&Math.hypot(e.clientX-he1lp.x0,e.clientY-he1lp.y0)>10){clearTimeout(he1lp.t);he1lp=null}},!0);
['pointerup','pointercancel'].forEach(t=>document.addEventListener(t,()=>{if(he1lp){clearTimeout(he1lp.t);he1lp=null}},!0));
document.addEventListener('click',e=>{if(m.he1&&e.target.closest&&e.target.closest('.screen.bd8s')){e.preventDefault();e.stopPropagation()}},!0);
document.addEventListener('contextmenu',e=>{if(e.target.closest&&e.target.closest('.screen.bd8s .bd8k'))e.preventDefault()});
/* ---------- edit actions ---------- */
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('.he1ov [data-he], .he1ov .he1f, .he1ov .he1lock');if(!b)return;e.preventDefault();e.stopPropagation();const cf=he1cfg();if(!cf)return;
 if(b.classList.contains('he1lock')){T(he1t('lock'));return}
 const a=b.dataset.he,f=b.closest('.he1f'),k=f&&f.dataset.k;
 if(a==='done')return he1exit(!0);if(a==='undo')return he1exit(!1);if(a==='add')return he1addSheet();
 if(a==='rm'&&k){cf.blocks=cf.blocks.filter(q=>q!==k);if(!cf.blocks.length)cf.blocks=['today'];$();v();return}
 if(f&&k&&!he1drag)he1opts(k)},!0);
let he1drag=null;
document.addEventListener('pointerdown',e=>{const h=e.target.closest&&e.target.closest('.he1ov .he1h');if(!h)return;e.preventDefault();const f=h.closest('.he1f'),H=he1home();if(!H)return;
 const els=[...H.children].filter(el=>he1key(el)),src=els.find(el=>he1key(el)===f.dataset.k);if(!src)return;
 he1drag={k:f.dataset.k,f,src,y0:e.clientY,els,mid:els.map(el=>{const r=el.getBoundingClientRect();return r.top+r.height/2}),to:els.indexOf(src),r:src.getBoundingClientRect()};f.classList.add('up');src.classList.add('he1lift');try{h.setPointerCapture(e.pointerId)}catch{}},!0);
document.addEventListener('pointermove',e=>{const D=he1drag;if(!D)return;const dy=e.clientY-D.y0;D.f.style.transform=D.src.style.transform=`translateY(${dy}px)`;const edge=dy<0?D.r.top+dy:D.r.bottom+dy;let to=0;D.mid.forEach((mm,j)=>{if(D.els[j]!==D.src&&edge>mm)to++});D.to=to;const from=D.els.indexOf(D.src),sh=D.src.getBoundingClientRect().height+10;D.els.forEach((el,j)=>{if(el===D.src)return;let s=0;if(from<to&&j>from&&j<=to)s=-sh;if(from>to&&j>=to&&j<from)s=sh;el.style.transform=s?`translateY(${s}px)`:'';el.style.transition='transform .18s'})},!0);
['pointerup','pointercancel'].forEach(t=>document.addEventListener(t,()=>{const D=he1drag;if(!D)return;setTimeout(()=>{he1drag=null},50);D.els.forEach(el=>{el.style.transform='';el.style.transition='';el.classList.remove('he1lift')});const cf=he1cfg();if(!cf)return;
 const order=D.els.map(he1key),from=order.indexOf(D.k);if(D.to!==from){order.splice(from,1);order.splice(D.to,0,D.k);const rest=cf.blocks.filter(q=>!order.includes(q));cf.blocks=order.concat(rest);$()}v()},!0));
/* ---------- sheets ---------- */
const he1seg=(name,opts,cur)=>`<p class="he1st">${i(name)}</p><div class="he1seg">${opts.map(([v2,l,pic])=>`<button type="button" class="${v2===cur?'on':''}" data-v="${v2}">${pic||''}<span>${i(l)}</span></button>`).join('')}</div>`;
const he1pic=(n,r,list)=>`<em class="he1pic${list?' ls':''}" style="--n:${n}">${'<u></u>'.repeat(list?3:n*r)}</em>`;
function he1size(cf){if(cf.cols===1)return'list';if(cf.cols===2)return'big2';if(cf.sz==='s')return'small';return'big'}
function he1opts(k){const cf=he1cfg();if(!cf)return;let body='';
 const ix=cf.blocks.indexOf(k),mv=`<div class="he1mv"><button type="button" data-mv="-1" ${ix<=0?'disabled':''}>↑ ${i(he1t('up'))}</button><button type="button" data-mv="1" ${ix<0||ix>=cf.blocks.length-1?'disabled':''}>↓ ${i(he1t('down'))}</button></div>`;
 if(k==='tiles'){const keys=bd8keys(cf),shown=(cf.keys&&cf.keys.length?cf.keys.filter(q=>keys.includes(q)):keys.slice(0,Math.max(1,(cf.n||cf.cols*2)-1)));
  body=he1seg(he1t('size'),[['big2',he1t('big2'),he1pic(2,1)],['big',he1t('big'),he1pic(4,1)],['small',he1t('small'),he1pic(4,2)],['list',he1t('list'),he1pic(1,1,1)]],he1size(cf))+`<p class="he1st">${i(he1t('inside'))}</p><div class="he1ls">${shown.map((q,j)=>{let l='';try{l=$A(q)}catch{}return`<div><span>${bd8kic(q,cf)}</span><b>${i(l)}</b><button type="button" data-up="${j}" ${j?'':'disabled'} aria-label="↑">↑</button><button type="button" data-sw="${j}">${i(he1t('swap'))}</button><button type="button" data-rmk="${j}" aria-label="–">–</button></div>`}).join('')}</div><button type="button" class="he1more" data-addk="1">＋ ${i(he1t('addT'))}</button><p class="he1st he1note">${i(he1t('fits'))}</p>`;
  he1sh(bd8s('b_tiles'),body+mv,k,box=>{box.onclick=ev=>{const b=ev.target.closest('button');if(!b)return;let L2=shown.slice();
   if(b.dataset.v){const v2=b.dataset.v;if(v2==='list'){cf.cols=1;cf.sz='m'}else if(v2==='big2'){cf.cols=2;cf.sz='m'}else if(v2==='small'){cf.cols=4;cf.sz='s'}else{cf.cols=4;cf.sz='m'}}
   else if(b.dataset.up){const j=+b.dataset.up;[L2[j-1],L2[j]]=[L2[j],L2[j-1]]}
   else if(b.dataset.rmk){L2.splice(+b.dataset.rmk,1)}
   else if(b.dataset.sw||b.dataset.addk){const j=b.dataset.sw!=null?+b.dataset.sw:-1;return he1pickSec(L2,q=>{if(j<0)L2.push(q);else L2[j]=q;cf.keys=L2;cf.n=L2.length+1;$();v();he1opts('tiles')})}
   else if(b.dataset.mv)return he1move(k,+b.dataset.mv);else return;
   if(!b.dataset.v){cf.keys=L2;cf.n=Math.max(2,L2.length+1)}$();v();he1opts('tiles')}});return}
 if(k==='acts'){const c=bd8C(),A=c.arow.slice(0,5);body=`<p class="he1st">${i(he1t('acts'))}</p><div class="he1ls">${A.map((a,j)=>`<div><span>${a?bd8i(BD8AI[a]):''}</span><b>${a?i(bd8s('a_'+a)):'—'}</b><button type="button" data-sw="${j}">${i(he1t('swap'))}</button></div>`).join('')}</div>`;
  he1sh(bd8s('b_acts'),body+mv,k,box=>{box.onclick=ev=>{const b=ev.target.closest('button');if(!b)return;if(b.dataset.sw!=null){ev.stopPropagation();document.querySelectorAll('.he1sheet').forEach(s=>s.remove());try{bd8pick('a',+b.dataset.sw)}catch(er){Hooks.err('he1pick',er)}}else if(b.dataset.mv)he1move(k,+b.dataset.mv)}});return}
 if(k==='today')body=he1seg(he1t('view'),[['tl',he1t('tl')],['pl',he1t('plain')]],cf.tl?'tl':'pl');
 if(k==='goal')body=he1seg(he1t('view'),[['ring',he1t('ring')],['bar',he1t('bar')]],cf.goal==='ring'?'ring':'bar');
 he1sh(bd8s('b_'+k),body+mv,k,box=>{box.onclick=ev=>{const b=ev.target.closest('button');if(!b)return;if(b.dataset.mv)return he1move(k,+b.dataset.mv);if(!b.dataset.v)return;
  if(k==='today')cf.tl=b.dataset.v==='tl'?1:0;if(k==='goal')cf.goal=b.dataset.v;$();v();he1opts(k)}})}
function he1move(k,d){const cf=he1cfg(),a=cf.blocks,j=a.indexOf(k),t=j+d;if(j<0||t<0||t>=a.length)return;[a[j],a[t]]=[a[t],a[j]];$();v();he1opts(k)}
function he1sh(title,html,k,fn){document.querySelectorAll('.he1sheet').forEach(s=>s.remove());const s=document.createElement('div');s.className='he1sheet';s.innerHTML=`<div class="he1bg" data-x="1"></div><div class="he1pan"><i class="he1grab"></i><div class="he1ht"><b>${i(title)}</b><button type="button" data-x="1" aria-label="×">×</button></div><div class="he1body">${html}</div></div>`;
 s.addEventListener('click',ev=>{if(ev.target.closest('[data-x]')){s.remove()}});document.body.appendChild(s);fn&&fn(s.querySelector('.he1body'))}
function he1pickSec(cur,cb){let all=[];try{all=x_().filter(zA)}catch{}const free=all.filter(q=>!cur.includes(q));
 he1sh(he1t('pick'),`<div class="he1ls">${free.map(q=>{let l='';try{l=$A(q)}catch{}return`<div class="pk" data-q="${i(q)}"><span>${bd8kic(q,he1cfg())}</span><b>${i(l)}</b></div>`}).join('')}</div>`,'',box=>{box.onclick=ev=>{const r=ev.target.closest('[data-q]');if(!r)return;document.querySelectorAll('.he1sheet').forEach(s=>s.remove());cb(r.dataset.q)}})}
function he1addSheet(){const cf=he1cfg();const free=BD8B.filter(q=>!cf.blocks.includes(q));
 he1sh(he1t('add'),free.length?`<div class="he1ls">${free.map(q=>`<div class="pk" data-q="${q}"><span>＋</span><b>${i(bd8s('b_'+q))}</b></div>`).join('')}</div>`:`<p class="he1st">${i(he1t('none'))}</p>`,'',box=>{box.onclick=ev=>{const r=ev.target.closest('[data-q]');if(!r)return;cf.blocks.push(r.dataset.q);document.querySelectorAll('.he1sheet').forEach(s=>s.remove());$();v()}})}
Hooks.act('he1go',()=>{if(m.route!=='home')R('home');setTimeout(he1enter,120)});
Hooks.css('home-edit',`
.screen.bd8s .bd8k{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}
.he1lift{position:relative;z-index:5;box-shadow:0 18px 40px rgba(0,0,0,.28)!important;transition:none!important}
.he1ov{position:fixed;inset:0;z-index:9000;pointer-events:none}
.he1ov>*{pointer-events:auto}
.he1f{position:fixed;border:2.5px solid #C9A046;border-radius:22px;box-sizing:border-box;background:rgba(201,160,70,.05);animation:he1w .5s ease-in-out infinite alternate}
.he1f:nth-child(odd){animation-delay:-.25s}.he1f.up{animation:none;z-index:2;background:rgba(201,160,70,.12)}
@keyframes he1w{from{transform:rotate(-.25deg)}to{transform:rotate(.25deg)}}
.he1x{position:absolute;left:-10px;top:-10px;width:28px;height:28px;border-radius:50%;border:0;background:#5b5b5b;color:#fff;font-size:20px;line-height:26px;padding:0;box-shadow:0 2px 6px rgba(0,0,0,.3)}
.he1h{position:absolute;right:-8px;top:-12px;width:34px;height:30px;border-radius:10px;background:rgba(255,255,255,.95);border:1.5px solid #C9A046;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:4px;touch-action:none;cursor:grab}
.he1h{gap:3px!important}.he1h i{display:block;width:16px;height:2.5px;border-radius:2px;background:#C9A046}
.he1n{position:absolute;left:22px;top:-11px;font:600 11px/18px system-ui,sans-serif;padding:0 8px;border-radius:9px;background:#C9A046;color:#fff;letter-spacing:.02em}
.he1lock{position:fixed;border-radius:20px;background:rgba(255,255,255,.55);display:flex;align-items:flex-end;justify-content:center;backdrop-filter:saturate(.4)}
.he1lock span{margin-bottom:-12px;font:600 12px/24px system-ui,sans-serif;padding:0 12px;border-radius:12px;background:rgba(40,40,40,.85);color:#fff}
.he1bar{position:fixed;left:12px;right:12px;top:calc(env(safe-area-inset-top,0px) + 6px);display:flex;justify-content:space-between;z-index:3}
.he1bar button{border:1.5px solid #C9A046;border-radius:20px;padding:8px 13px;white-space:nowrap;background:rgba(255,255,255,.96);color:#333;font:500 15px system-ui,sans-serif}
.he1bar .ok{background:#2E7D48;border-color:#2E7D48;color:#fff;font-weight:600;padding:8px 22px}
.he1hint{position:fixed;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 150px);text-align:center;margin:0;pointer-events:none!important;font:12px system-ui,sans-serif;color:#8a7a55}
.he1bar .he1add{color:#7a5a1a;font-weight:600;padding:8px 12px}
.he1sheet{position:fixed;inset:0;z-index:9500}.he1bg{position:absolute;inset:0;background:rgba(0,0,0,.35)}
.he1pan{position:absolute;left:0;right:0;bottom:0;max-height:82vh;overflow:auto;background:#FAF8F3;color:#222;border-radius:26px 26px 0 0;padding:8px 18px calc(env(safe-area-inset-bottom,0px) + 24px);box-shadow:0 -10px 30px rgba(0,0,0,.2)}
.he1grab{display:block;width:44px;height:5px;border-radius:3px;background:#d0ccc2;margin:2px auto 8px}
.he1ht{display:flex;align-items:center;justify-content:space-between}.he1ht b{font:700 22px Georgia,serif}.he1ht button{border:0;background:none;font-size:28px;color:#777}
.he1st{margin:16px 0 8px;font:13px system-ui,sans-serif;color:#8a8478}.he1note{font-size:12px}
.he1seg{display:grid;grid-template-columns:repeat(auto-fit,minmax(70px,1fr));gap:8px}
.he1seg button{border:1.5px solid #e2ddd2;border-radius:16px;background:#fff;padding:10px 6px;font:500 14px system-ui,sans-serif;color:#333;display:flex;flex-direction:column;align-items:center;gap:8px}
.he1seg button.on{border:2.5px solid #2E7D48;font-weight:700}
.he1pic{display:grid;grid-template-columns:repeat(var(--n),1fr);gap:3px;width:52px}.he1pic u{display:block;height:12px;border-radius:3px;background:#EBDFC4}.he1pic.ls{grid-template-columns:1fr}.he1pic.ls u{height:7px}
.he1ls{display:flex;flex-direction:column;gap:8px}
.he1ls>div{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #e6e1d6;border-radius:14px;padding:8px 10px;min-height:44px}
.he1ls>div>span{--a:#C9A046;--gd:#C9A046;--k:#C9A046;--m:#C9A046;width:30px;height:30px;display:flex;align-items:center;justify-content:center;color:#C9A046}.he1ls>div>span svg{width:22px;height:22px}
.he1ls>div>span svg,.he1ls>div>span svg *{fill:none!important;stroke:#C9A046!important}.he1ls>div>b{flex:1;font:500 16px system-ui,sans-serif}
.he1ls>div>button{border:1px solid #e2ddd2;background:#fff;border-radius:10px;padding:6px 10px;font:500 13px system-ui,sans-serif;color:#2E7D48}.he1ls>div>button:disabled{opacity:.3}
.he1more{margin-top:10px;border:0;background:none;color:#2E7D48;font:600 15px system-ui,sans-serif;padding:8px 0}
.he1mv{display:flex;gap:10px;margin-top:18px}.he1mv button{flex:1;border:1.5px solid #e2ddd2;border-radius:14px;background:#fff;padding:11px;font:500 15px system-ui,sans-serif;color:#333}.he1mv button:disabled{opacity:.35}
`);
