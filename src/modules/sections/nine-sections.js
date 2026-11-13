/* v218: 9 sections instead of 28 icons — same design, every icon opens a section with its former parts as tabs; any tab can go to quick access */
const h9S={day:['Мой день','Mein Tag','My day','Mój dzień','Günüm','Ma journée','Mi día'],notes:['Заметки','Notizen','Notes','Notatki','Notlar','Notes','Notas'],money:['Деньги','Geld','Money','Pieniądze','Para','Argent','Dinero'],docs:['Документы','Dokumente','Documents','Dokumenty','Belgeler','Documents','Documentos'],people:['Люди','Menschen','People','Ludzie','Kişiler','Personnes','Personas'],body:['Здоровье и спорт','Gesundheit & Sport','Health & sport','Zdrowie i sport','Sağlık ve spor','Santé et sport','Salud y deporte'],home:['Дом и поездки','Zuhause & Reisen','Home & travel','Dom i podróże','Ev ve seyahat','Maison et voyages','Casa y viajes'],grow:['Развитие','Entwicklung','Growth','Rozwój','Gelişim','Développement','Desarrollo'],work:['Дело','Beruf','Work','Praca','İş','Travail','Trabajo'],
shop:['Список покупок','Einkaufsliste','Shopping list','Lista zakupów','Alışveriş listesi','Liste de courses','Lista de compras'],
tabT:['Вкладка «%n»','Reiter „%n“','Tab “%n”','Karta „%n”','“%n” sekmesi','Onglet « %n »','Pestaña «%n»'],
pin:['Вынести в быстрый доступ','In den Schnellzugriff','Add to quick access','Do szybkiego dostępu','Hızlı erişime ekle','Ajouter à l’accès rapide','Añadir al acceso rápido'],
solo:['Сделать отдельным разделом','Als eigenen Bereich zeigen','Show as its own section','Osobny dział','Ayrı bölüm yap','En faire une rubrique','Convertir en sección propia'],
unsolo:['Убрать отдельный раздел','Eigenen Bereich entfernen','Remove own section','Usuń osobny dział','Ayrı bölümü kaldır','Retirer la rubrique','Quitar sección propia'],
open:['Открыть','Öffnen','Open','Otwórz','Aç','Ouvrir','Abrir'],where:['Куда поставить?','Wohin?','Where to put it?','Gdzie umieścić?','Nereye konsun?','Où le placer ?','¿Dónde ponerlo?'],
put:['Поставлено в быстрый доступ','Zum Schnellzugriff hinzugefügt','Added to quick access','Dodano do szybkiego dostępu','Hızlı erişime eklendi','Ajouté à l’accès rapide','Añadido al acceso rápido'],
sug:['Вы часто открываете «%n». Вынести в быстрый доступ?','Sie öffnen „%n“ oft. In den Schnellzugriff?','You often open “%n”. Add to quick access?','Często otwierasz „%n”. Dodać do szybkiego dostępu?','“%n” bölümünü sık açıyorsunuz. Hızlı erişime eklensin mi?','Vous ouvrez souvent « %n ». L’ajouter à l’accès rapide ?','Abre a menudo «%n». ¿Añadir al acceso rápido?'],
yes:['Да','Ja','Yes','Tak','Evet','Oui','Sí'],no:['Нет','Nein','No','Nie','Hayır','Non','No'],whole:['Весь раздел','Ganzer Bereich','Whole section','Cały dział','Tüm bölüm','Toute la rubrique','Toda la sección']};
const h9t=(k,o)=>{let t=cv5n(h9S[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const H9X=[['day',['q:tasks','q:mycal','q:routine','q:projects','q:report','q:reminders'],'cal'],['notes',['c:notes','r:kbshop'],'pen'],['money',['c:bank','q:fin','q:assets','q:stats'],'coin'],['docs',['q:archive','q:letters','c:law'],'fld'],['people',['c:family','c:contacts','q:people'],'users'],['body',['c:health','c:sport','q:body'],'hrt'],['home',['c:rest','c:travel','c:wd'],'home'],['grow',['c:books','q:edu','q:goals','q:news'],'book'],['work',['c:work'],'brief']];
const H9XPS={day:'cal',notes:'doc',money:'bank',docs:'doc',people:'people',body:'star',home:'home',grow:'globe',work:'work'};
const h9id=k=>typeof k==='string'&&/^q:h9/.test(k)?k.slice(4):null;
let h9raw=0;const h9rawX=()=>{h9raw=1;try{return x_()}finally{h9raw=0}};
function h9has(k){try{if(k.startsWith('c:'))return!!nt(k.slice(2));const r=k.slice(2);if(k.startsWith('r:'))return Te.includes(r)||r==='kbshop';return r==='mycal'||Te.includes(r)||h9rawX().includes(k)}catch{return!1}}
const h9mem=id=>{const h=H9X.find(q=>q[0]===id);return h?h[1].filter(h9has):[]};
const h9of=k=>{const L2=H9X.filter(h=>h[1].includes(k)).map(h=>h[0]).filter(id=>h9mem(id).includes(k));return L2};
function h9lab(k){try{if(k.startsWith('r:'))return k==='r:kbshop'?h9t('shop'):k.slice(2);const id=h9id(k);if(id)return h9t(id);return $A(k)}catch{return k}}
/* list of sections: hubs + the user’s own sections + tabs shown on their own */
x_=(f=>function(){const raw=f.apply(this,arguments);if(h9raw||g.h9off)return raw;const used=new Set(H9X.flatMap(h=>h[1]));const hubs=H9X.filter(h=>h9mem(h[0]).length).map(h=>'q:h9'+h[0]);
 const own=raw.filter(k=>!used.has(k));const solo=(g.h9solo||[]).filter(k=>h9has(k)&&!own.includes(k));let out=hubs.concat(solo,own);
 const ord=g.areaOrd||[];if(ord.some(k=>/^q:h9/.test(k)))out=out.map((k,j)=>[k,ord.includes(k)?ord.indexOf(k):1e3+j]).sort((a,b)=>a[1]-b[1]).map(q=>q[0]);return out})(x_);
Yn=(f=>function(e){const id=typeof e==='string'&&/^h9/.test(e)?e.slice(2):null;if(id&&h9S[id])return h9t(id);return f.apply(this,arguments)})(Yn);
Ps=(f=>function(e){const id=typeof e==='string'&&/^h9/.test(e)?e.slice(2):null;if(id&&H9XPS[id])return H9XPS[id];return f.apply(this,arguments)})(Ps);
Qc=(f=>function(e){if(e==='h9day'){try{return xs().length}catch{return 0}}if(typeof e==='string'&&/^h9/.test(e))return 0;return f.apply(this,arguments)})(Qc);
H9X.forEach(h=>{BD8K['q:h9'+h[0]]=h[2]});BD8K['r:kbshop']='cart';
function h9go(k){try{if(k.startsWith('c:'))qi(k.slice(2));else if(k.startsWith('r:'))R(k.slice(2));else{const r=k.slice(2);r==='mycal'?R('mycal'):R(r)}}catch{}}
R=(f=>function(e,a,t){if(typeof e==='string'&&/^h9/.test(e)){const id=e.slice(2),M=h9mem(id);if(M.length){m.h9=id;const last=(g.h9last||{})[id];return h9go(M.includes(last)?last:M[0])}}return f.apply(this,arguments)})(R);
bd8act=(f=>function(k){if(k&&k.startsWith('r:'))return`data-act="go" data-to="${i(k.slice(2))}"`;return f.apply(this,arguments)})(bd8act);
bd8sinfo=(f=>function(q){const o=f.apply(this,arguments);try{if(q.startsWith('r:')){o.t=h9lab(q);o.ic=bd8i(BD8K[q]||'grid');o.act=bd8act(q)}if(m.h9pk&&!h9id(q)){const p=h9of(q)[0];if(p)o.sub=h9t(p)}if(m.h9pk&&h9id(q))o.sub=h9t('whole')}catch{}return o})(bd8sinfo);
bd8slotOpts=(f=>function(){const sp=Object.keys(BD8SP);const out=sp.slice();x_().forEach(k=>{out.push(k);const id=h9id(k);if(id)h9mem(id).forEach(q=>out.includes(q)||out.push(q))});return out})(bd8slotOpts);
bd8pick=(f=>function(kind,j){m.h9pk=1;try{return f.apply(this,arguments)}finally{setTimeout(()=>{m.h9pk=0},0)}})(bd8pick);
/* where am I */
function h9here(){const r=m.route;if(r==='cat')return'c:'+m.cat;if(r==='biz')return'c:work';if(r==='family')return'c:family';if(r==='kbshop')return'r:kbshop';if(r==='people'){return h9has('c:contacts')&&!((nt('contacts')||{}).items||[]).length?'c:contacts':'q:people'}return'q:'+r}
function h9tabs(){const k=h9here();let id=m.h9&&h9mem(m.h9).includes(k)?m.h9:h9of(k)[0];if(!id){m.h9=null;return}m.h9=id;const M=h9mem(id);if(M.length<2)return;
 g.h9last=g.h9last||{};g.h9last[id]=k;g.h9cnt=g.h9cnt||{};g.h9cnt[k]=(g.h9cnt[k]||0)+1;
 const sc=document.querySelector('.screen');if(!sc||sc.querySelector('.h9tabs'))return;const hd=sc.querySelector('.sub-hdr');
 const html=`<div class="h9tabs" role="tablist" aria-label="${i(h9t(id))}">${M.map(q=>`<button type="button" role="tab" aria-selected="${q===k}" class="${q===k?'on':''}" data-act="h9tab" data-k="${i(q)}" data-hub="${id}">${i(h9lab(q))}</button>`).join('')}</div>`;
 if(hd){hd.insertAdjacentHTML('afterend',html);const h2=hd.querySelector('.ttl h2');if(h2&&!h2.dataset.h9){h2.dataset.h9=1;h2.insertAdjacentHTML('beforebegin',`<small class="h9hub">${i(h9t(id))}</small>`)}}else{const st0=sc.getBoundingClientRect().top;const kid=[...sc.children].find(c=>{const r=c.getBoundingClientRect();return r.height>0&&r.top-st0<170&&c.querySelector('button,[data-act]')&&r.height<140});kid?kid.insertAdjacentHTML('afterend',html):sc.insertAdjacentHTML('afterbegin',html)}
 const on=sc.querySelector('.h9tabs .on');on&&on.scrollIntoView&&on.scrollIntoView({block:'nearest',inline:'center'})}
L.h9tab=function(e){m.h9=e.hub;if(e.k===h9here())return;h9go(e.k)};
/* long press on a tab: quick access / own section */
function h9menu(k){const isSolo=(g.h9solo||[]).includes(k);const body=`<div class="h9mn"><button type="button" class="gold" data-a="pin">${bd8i('pinn')}<span>${i(h9t('pin'))}</span></button><button type="button" data-a="solo">${bd8i('grid')}<span>${i(isSolo?h9t('unsolo'):h9t('solo'))}</span></button><button type="button" data-a="open">${bd8i('chev')}<span>${i(h9t('open'))}</span></button></div>`;
 const sh=H(h9t('tabT',{n:h9lab(k)}),body,()=>{});sh.classList.add('bd8sheet');sh.querySelector('.dtscroll').addEventListener('click',e=>{const b=e.target.closest('button[data-a]');if(!b)return;sh.remove();const a=b.dataset.a;
  if(a==='open')h9go(k);else if(a==='solo'){const s2=g.h9solo||(g.h9solo=[]);const j=s2.indexOf(k);j>=0?s2.splice(j,1):s2.push(k);$();T(h9t(isSolo?'unsolo':'solo'))}else h9where(k)})}
function h9where(k){const c=bd8C();const free=c.slots.findIndex(q=>!q);if(free>=0){c.slots[free]=k;$();T(h9t('put'));return}
 const body=`<div class="bd8pg">${c.slots.map((q,j)=>{const o=bd8sinfo(q);return`<button type="button" data-j="${j}">${o.ic}<span>${i(o.t)}</span><small>${j+1}</small></button>`}).join('')}</div>`;
 const sh=H(h9t('where'),body,()=>{});sh.classList.add('bd8sheet','bd8psheet');sh.querySelector('.dtscroll').addEventListener('click',e=>{const b=e.target.closest('button[data-j]');if(!b)return;c.slots[+b.dataset.j]=k;$();sh.remove();T(h9t('put'))})}
document.addEventListener('pointerdown',e=>{const t=e.target.closest&&e.target.closest('.h9tabs button');if(!t)return;clearTimeout(t._lp);const x0=e.clientX;t._lp=setTimeout(()=>{bd8lpF=Date.now();try{navigator.vibrate&&navigator.vibrate(12)}catch{}h9menu(t.dataset.k)},500);
 const cl=ev=>{if(ev.type==='pointermove'&&Math.abs(ev.clientX-x0)<10)return;clearTimeout(t._lp);['pointerup','pointercancel','pointermove'].forEach(n=>document.removeEventListener(n,cl,!0))};['pointerup','pointercancel','pointermove'].forEach(n=>document.addEventListener(n,cl,!0))},{passive:!0});
document.addEventListener('click',e=>{if(Date.now()-bd8lpF<700&&e.target.closest&&e.target.closest('.h9tabs button')){e.stopPropagation();e.preventDefault()}},!0);
/* gentle suggestion: only on the home screen, once per tab, never on its own */
function h9sug(){try{if(!g.h9sugOn||!m.logged||m.route!=='home'||document.querySelector('.bd8sv,.h9sg'))return;const c=bd8C();const cnt=g.h9cnt||{},seen=g.h9seen||(g.h9seen=[]);const k=Object.keys(cnt).filter(q=>cnt[q]>=6&&!seen.includes(q)&&!(c.slots||[]).includes(q)&&!x_().includes(q)).sort((a,b)=>cnt[b]-cnt[a])[0];if(!k)return;
 const d=document.createElement('div');d.className='bd8sv h9sg';d.innerHTML=`<span class="tx"><small>✦ ${i(h9t(h9of(k)[0]||'day'))}</small><b style="white-space:normal">${i(h9t('sug',{n:h9lab(k)}))}</b></span><button type="button" class="op">${i(h9t('yes'))}</button><button type="button" class="cl" aria-label="${i(h9t('no'))}">×</button>`;document.body.appendChild(d);
 const done=()=>{seen.push(k);$();d.remove()};d.querySelector('.op').onclick=()=>{done();h9where(k)};d.querySelector('.cl').onclick=done}catch{}}
/* search in “All sections” also finds the old names */
bd9item=(f=>function(k,ed){let h=f.apply(this,arguments);const id=h9id(k);if(id){const extra=h9mem(id).map(h9lab).join(' ').toLowerCase();h=h.replace(/data-n="([^"]*)"/,(m0,a)=>`data-n="${a} ${i(extra)}"`)}return h})(bd9item);
/* first start: every hub visible */
function h9mig(){try{if(g.h9mig)return;const s2=Array.isArray(g.secQ)?g.secQ:(g.secQ=[]);H9X.forEach(h=>{const q='h9'+h[0];s2.includes(q)||s2.push(q)});
 const c=bd8C();[c.cfg].concat((c.saved||[]).map(q=>q.cfg)).forEach(cf=>{if(cf){delete cf.tk;delete cf.tkx}});if(Array.isArray(c.orb)){c.orbM=0;delete c.orb}g.h9mig=1;$()}catch{}}
h9mig();
v=(f=>function(){const r=f.apply(this,arguments);try{h9tabs();setTimeout(h9sug,1200)}catch{}return r})(v);
{const st=document.createElement('style');st.textContent=`
.h9tabs{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin:0 0 12px;padding:2px 2px 4px;-webkit-overflow-scrolling:touch;flex:none}.h9tabs::-webkit-scrollbar{display:none}
.h9tabs button{flex:none;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:14.5px;padding:8px 14px;border-radius:999px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
.h9tabs button.on{background:var(--gold,#C99A3E);color:#15120b;border-color:transparent;font-weight:600}
.h9hub{display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);line-height:1;margin-bottom:2px}
.h9mn{display:flex;flex-direction:column;gap:8px}.h9mn button{display:flex;align-items:center;gap:12px;height:52px;padding:0 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:15.5px;cursor:pointer;text-align:left}.h9mn button.gold{border-color:var(--gold,#C99A3E);color:var(--gold,#C99A3E)}
.h9mn svg.bi{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.bd8psheet .bd8pg svg.bi{width:24px;height:24px;fill:none;stroke:var(--gold,#C99A3E);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
`;document.head.appendChild(st)}
