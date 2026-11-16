/* Menu for the week: recipes laid out on days, one shopping list and an estimated cost for the whole week.
   Data: g.mealPlan = {'YYYY-MM-DD': [{id, por}]}, kept on the phone; days older than 60 days are dropped. */
const mpS={
 title:['Меню на неделю','Wochenplan','Weekly menu','Menu na tydzień','Haftalık menü','Menu de la semaine','Menú semanal'],
 card:['🗓 Меню на неделю','🗓 Wochenplan','🗓 Weekly menu','🗓 Menu na tydzień','🗓 Haftalık menü','🗓 Menu de la semaine','🗓 Menú semanal'],
 cardN:['запланировано блюд: %n','geplante Gerichte: %n','dishes planned: %n','zaplanowane dania: %n','planlanan yemek: %n','plats prévus : %n','platos planeados: %n'],
 cardE:['разложите рецепты по дням — список покупок соберётся сам','Rezepte auf Tage verteilen — die Einkaufsliste entsteht von selbst','put recipes on days — the shopping list builds itself','rozłóż przepisy na dni — lista zakupów zrobi się sama','tarifleri günlere dağıtın — alışveriş listesi kendiliğinden oluşur','répartissez les recettes sur les jours — la liste se fait toute seule','reparta las recetas por días — la lista se hace sola'],
 add:['＋ блюдо','＋ Gericht','＋ dish','＋ danie','＋ yemek','＋ plat','＋ plato'],
 pick:['Что приготовить?','Was kochen?','What to cook?','Co ugotować?','Ne pişirelim?','Que cuisiner ?','¿Qué cocinar?'],
 find:['Найти рецепт','Rezept suchen','Find a recipe','Szukaj przepisu','Tarif ara','Chercher une recette','Buscar receta'],
 mine:['Мои рецепты','Meine Rezepte','My recipes','Moje przepisy','Tariflerim','Mes recettes','Mis recetas'],
 butler:['Рецепты Butler','Butler-Rezepte','Butler recipes','Przepisy Butlera','Butler tarifleri','Recettes Butler','Recetas de Butler'],
 none:['Пока нет рецептов. Добавьте их в книге рецептов.','Noch keine Rezepte. Legen Sie sie im Rezeptbuch an.','No recipes yet. Add them in the recipe book.','Brak przepisów. Dodaj je w książce przepisów.','Henüz tarif yok. Tarif defterine ekleyin.','Pas encore de recettes. Ajoutez-les dans le livre.','Aún no hay recetas. Añádalas en el recetario.'],
 por:['порц.','Port.','serv.','porc.','pors.','parts','rac.'],
 list:['Список на неделю','Einkaufsliste für die Woche','Shopping list for the week','Lista na tydzień','Haftalık liste','Liste de la semaine','Lista de la semana'],
 dishes:['блюд: %n','Gerichte: %n','dishes: %n','dań: %n','yemek: %n','plats : %n','platos: %n'],
 cost:['≈ неделя %v','≈ Woche %v','≈ week %v','≈ tydzień %v','≈ hafta %v','≈ semaine %v','≈ semana %v'],
 empty:['Пусто','Leer','Empty','Pusto','Boş','Vide','Vacío'],
 toMenu:['🗓 В меню','🗓 In den Wochenplan','🗓 Add to menu','🗓 Do menu','🗓 Menüye ekle','🗓 Au menu','🗓 Al menú'],
 whichDay:['На какой день?','An welchem Tag?','Which day?','Na który dzień?','Hangi gün?','Quel jour ?','¿Qué día?'],
 added:['Добавлено: %d','Eingeplant: %d','Planned: %d','Dodano: %d','Eklendi: %d','Prévu : %d','Añadido: %d'],
 today:['сегодня','heute','today','dziś','bugün','aujourd’hui','hoy'],
 clear:['Очистить неделю','Woche leeren','Clear week','Wyczyść tydzień','Haftayı temizle','Vider la semaine','Vaciar semana'],
 clearQ:['Убрать все блюда этой недели?','Alle Gerichte dieser Woche entfernen?','Remove all dishes of this week?','Usunąć wszystkie dania z tego tygodnia?','Bu haftanın tüm yemekleri kaldırılsın mı?','Retirer tous les plats de cette semaine ?','¿Quitar todos los platos de esta semana?'],
 note:['Стоимость считается по акциям и вашим чекам, только то, что уходит в блюда.','Kosten nach Angeboten und Ihren Belegen, nur was in die Gerichte geht.','Cost from offers and your receipts, only what goes into the dishes.','Koszt wg promocji i paragonów, tylko to, co idzie do dań.','Maliyet fırsatlara ve fişlerinize göre, yalnızca yemeğe girenler.','Coût selon les promos et vos tickets, seulement ce qui entre dans les plats.','Coste según ofertas y sus tickets, solo lo que va a los platos.']};
const mpt=(k,o)=>{let t=cv5n(mpS[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const mpKey=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const mpPlan=()=>{const P=g.mealPlan&&typeof g.mealPlan==='object'?g.mealPlan:(g.mealPlan={});return P};
function mpTidy(){const P=mpPlan(),lim=mpKey(new Date(Date.now()-60*864e5));let ch=!1;for(const k in P){if(k<lim||!Array.isArray(P[k])||!P[k].length){delete P[k];ch=!0}}return ch}
function mpWeek(off){const t=new Date();t.setHours(12,0,0,0);const wd=(t.getDay()+6)%7;const a=new Date(t.getTime()-(wd-7*(off||0))*864e5);return Array.from({length:7},(_,k)=>new Date(a.getTime()+k*864e5))}
const mpDay=(d,o)=>{try{return d.toLocaleDateString(he(),o||{weekday:'short',day:'numeric',month:'numeric'})}catch{return mpKey(d)}};
function mpEntries(days){const P=mpPlan(),out=[];days.forEach(d=>(P[mpKey(d)]||[]).forEach(e=>{const r=rcGet(e.id);if(r)out.push({r,por:Math.max(1,e.por||r.por||1)})}));return out}
function mpCost(E){let sum=0,ok=0;E.forEach(({r,por})=>{try{const C=rcCost(r,por/(r.por||1));if(C&&C.have){sum+=C.sum;ok++}}catch{}});return ok?{sum,ok}:null}
function mpScreen(){if(mpTidy())$();const days=mpWeek(m.mpW||0),P=mpPlan(),today=mpKey(new Date()),E=mpEntries(days),C=mpCost(E);
 const rng=mpDay(days[0],{day:'numeric',month:'short'})+' – '+mpDay(days[6],{day:'numeric',month:'short'});
 return`<div class="screen rzbv0 mpw">${rcHdr(mpt('title'),E.length?`<button class="iconbtn" data-act="mpclear" aria-label="clear">🗑</button>`:'<span></span>')}
 <div class="mpnav"><button type="button" data-act="mpwk" data-d="-1" aria-label="‹">‹</button><b>${i(rng)}</b><button type="button" data-act="mpwk" data-d="1" aria-label="›">›</button></div>
 <div class="mpdays">${days.map(d=>{const k=mpKey(d),L=P[k]||[];return`<div class="mpday${k===today?' now':''}"><div class="mphd"><b>${i(mpDay(d))}</b>${k===today?`<em>${i(mpt('today'))}</em>`:''}</div>
  ${L.map((e,j)=>{const r=rcGet(e.id);if(!r)return'';return`<div class="mpe"><button type="button" class="mpn" data-act="mpopen" data-id="${i(r.id)}">${i(r.t)}</button><span class="mpp"><button type="button" data-act="mppor" data-k="${k}" data-j="${j}" data-d="-1">−</button><b>${Math.max(1,e.por||1)}</b><button type="button" data-act="mppor" data-k="${k}" data-j="${j}" data-d="1">+</button><small>${i(mpt('por'))}</small></span><button type="button" class="mpx" data-act="mpdel" data-k="${k}" data-j="${j}" aria-label="×">×</button></div>`}).join('')}
  <button type="button" class="mpadd" data-act="mpadd" data-k="${k}">${i(mpt('add'))}</button></div>`}).join('')}</div>
 ${E.length?`<p class="mpnote">${i(mpt('note'))}</p><div class="rzbbar mpbar"><button type="button" data-act="mplist"><span>${i(mpt('list'))}</span><small>${i(mpt('dishes',{n:E.length}))}${C?' · '+i(mpt('cost',{v:e2money(C.sum)})):''}</small></button></div>`:''}</div>`}
const mpRe=()=>{try{k3keep(()=>v())}catch{try{v()}catch{}}};
function mpPick(k){const own=rcList(),bt=rcButler();const sh=H(mpt('pick'),`<div class="mppk"><input class="field" type="search" placeholder="🔍 ${i(mpt('find'))}" data-mpq><div data-mpl></div></div>`,()=>{}),box=sh.querySelector('[data-mpl]'),q=sh.querySelector('[data-mpq]');
 const row=r=>`<button type="button" data-id="${i(r.id)}"><b>${i(r.t)}</b><small>${r.por?i(r.por+' '+mpt('por')):''}${r.time?' · ⏱ '+r.time+' min':''}</small></button>`;
 const draw=()=>{const s=q.value.trim().toLowerCase(),f=r=>!s||r.t.toLowerCase().includes(s)||(r.ing||[]).some(x=>String(x.n).toLowerCase().includes(s));const a=own.filter(f),b=bt.filter(f);
  box.innerHTML=(a.length?`<h4>${i(mpt('mine'))}</h4>${a.map(row).join('')}`:own.length?'':`<p class="fdsmall">${i(mpt('none'))}</p>`)+(b.length?`<h4>${i(mpt('butler'))}</h4>${b.map(row).join('')}`:'');
  box.querySelectorAll('[data-id]').forEach(el=>el.onclick=()=>{const r=rcGet(el.dataset.id);if(!r)return;const P=mpPlan();(P[k]=P[k]||[]).push({id:r.id,por:rcPorOf(r)});$();sh.remove();mpRe()})};
 q.oninput=draw;draw()}
Hooks.act('mpgo',()=>{m.mpFrom=m.route;R('rcw')});
Hooks.act('mpwk',e=>{m.mpW=(m.mpW||0)+(+e.d||0);mpRe()});
Hooks.act('mpadd',e=>mpPick(e.k));
Hooks.act('mpdel',e=>{const P=mpPlan(),L=P[e.k];if(!L)return;L.splice(+e.j,1);if(!L.length)delete P[e.k];$();mpRe()});
Hooks.act('mppor',e=>{const L=mpPlan()[e.k],x=L&&L[+e.j];if(!x)return;x.por=Math.max(1,Math.min(50,(x.por||1)+(+e.d||0)));$();mpRe()});
Hooks.act('mpopen',e=>{m.rcId=e.id;m.rcvFrom='rcw';R('rcv')});
Hooks.act('mpclear',()=>{if(!confirm(mpt('clearQ')))return;const P=mpPlan();mpWeek(m.mpW||0).forEach(d=>delete P[mpKey(d)]);$();mpRe()});
Hooks.act('mplist',()=>{const E=mpEntries(mpWeek(m.mpW||0));if(E.length)rcListSheet(E.map(x=>({r:x.r,por:x.por})))});
/* from a recipe: put it on one of the next 7 days */
Hooks.act('mptomenu',()=>{const r=rcGet(m.rcId);if(!r)return;const t=new Date();t.setHours(12,0,0,0);const days=Array.from({length:7},(_,k)=>new Date(t.getTime()+k*864e5)),P=mpPlan();
 const sh=H(mpt('whichDay'),`<div class="mppk mpdays2">${days.map((d,k)=>{const L=(P[mpKey(d)]||[]).map(e=>rcGet(e.id)).filter(Boolean);return`<button type="button" data-k="${mpKey(d)}"><b>${i(mpDay(d,{weekday:'long',day:'numeric',month:'numeric'}))}${k===0?' · '+i(mpt('today')):''}</b><small>${L.length?i(L.map(x=>x.t).join(', ')):i(mpt('empty'))}</small></button>`}).join('')}</div>`,()=>{});
 sh.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{(P[b.dataset.k]=P[b.dataset.k]||[]).push({id:r.id,por:rcPorOf(r)});$();sh.remove();T(mpt('added',{d:mpDay(new Date(b.dataset.k+'T12:00'),{weekday:'long'})}))})});
['rcw'].forEach(r=>{Te.includes(r)||Te.push(r)});
(Hooks.h.screen=Hooks.h.screen||[]).unshift(()=>{try{if(m.route==='rcw')return mpScreen()}catch(e){Hooks.err('mpscreen',e)}});
/* book: a card at the top (called from the recipe book screen) */
function mpBookCard(){let n=0;try{n=mpEntries(mpWeek(0)).length}catch{}return`<button type="button" class="mpcard" data-act="mpgo"><b>${i(mpt('card'))}</b><small>${i(n?mpt('cardN',{n}):mpt('cardE'))}</small><span>›</span></button>`}
Hooks.on('route',()=>{try{if(m.route==='rcb')m.rcvFrom=''}catch{}});
Hooks.css('mealplan',`
.mpcard{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:3px;width:100%;padding-right:40px!important;margin:0 0 12px;padding:14px 16px;border:1px solid var(--gold);border-radius:18px;background:var(--gold-soft);color:var(--ink);font:inherit;text-align:left;cursor:pointer}
.mpcard b{font-size:16px;font-weight:600;display:flex;align-items:center;gap:6px}.mpcard>span{position:absolute;right:16px;top:50%;transform:translateY(-50%);color:var(--gold);font-size:26px;line-height:1}.mpcard small{color:var(--muted);font-size:13px}
.mptm{display:block;margin:4px auto 0}
.mpnav{display:flex;align-items:center;justify-content:space-between;margin:2px 0 12px}.mpnav b{font-weight:600}.mpnav button{display:flex;align-items:center;justify-content:center;padding:0 0 3px;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--surface);color:var(--gold);font-size:24px;line-height:1;cursor:pointer}
.mpw{padding-bottom:110px!important}
.mpdays{display:flex;flex-direction:column;gap:10px}
.mpday{padding:12px 14px;border:1px solid var(--line);border-radius:18px;background:var(--surface)}.mpday.now{border-color:var(--gold)}
.mphd{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}.mphd b{text-transform:capitalize;font-weight:600}.mphd em{font-style:normal;color:var(--gold);font-size:13px}
.mpe{display:flex;align-items:center;gap:8px;padding:7px 0;border-top:1px solid var(--line)}
.mpn{flex:1;min-width:0;text-align:left;border:0;background:none;color:var(--ink);font:inherit;font-size:15.5px;padding:0;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mpp{display:flex;align-items:center;gap:4px}.mpp button{display:flex;align-items:center;justify-content:center;padding:0 0 2px;width:28px;height:28px;border-radius:50%;border:1px solid var(--line);background:transparent;color:var(--gold);font-size:16px;line-height:1;cursor:pointer}.mpp b{min-width:18px;text-align:center;font-family:-apple-system,system-ui,sans-serif}.mpp small{color:var(--muted);font-size:12px}
.mpx{border:0;background:none;color:var(--muted);font-size:20px;width:28px;cursor:pointer}
.mpadd{margin-top:6px;border:0;background:none;color:var(--gold);font:inherit;font-size:14.5px;padding:4px 0;cursor:pointer}
.mpnote{color:var(--muted);font-size:12.5px;text-align:center;margin:12px 4px 0}
.mpbar button{display:flex;flex-direction:column;align-items:center;gap:2px}.mpbar small{font-size:12.5px;opacity:.8}
.mppk{display:flex;flex-direction:column;gap:8px}.mppk h4{margin:10px 0 2px;color:var(--muted);font-size:12px;letter-spacing:.08em;text-transform:uppercase;font-weight:500}
.mppk button{display:flex;flex-direction:column;gap:2px;padding:11px 14px;border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink);font:inherit;text-align:left;cursor:pointer}.mppk button small{color:var(--muted);font-size:12.5px}
.mpdays2 b{text-transform:capitalize}
`);
