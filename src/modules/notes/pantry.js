/* Pantry and leftovers: what is at home, in g / ml / pieces.
   Fills itself from the shopping list (the rest of a pack when an item is ticked as bought), is taken off the next recipe list,
   is used up when a recipe is cooked, and suggests recipes from what is left. Data: g.pantry=[{id,n,k,v,d,src}], on the phone only. */
const pzS={
 title:['Кладовая','Vorrat','Pantry','Spiżarnia','Kiler','Garde-manger','Despensa'],
 card:['🧺 Кладовая','🧺 Vorrat','🧺 Pantry','🧺 Spiżarnia','🧺 Kiler','🧺 Garde-manger','🧺 Despensa'],
 cardN:['продуктов дома: %n','Vorräte: %n','items at home: %n','w domu: %n','evde: %n','à la maison : %n','en casa: %n'],
 cardE:['остатки и запасы','Reste und Vorräte','leftovers and stock','resztki i zapasy','artanlar ve stok','restes et réserves','sobras y reservas'],
 hint:['Остатки после покупок попадают сюда сами. Butler не положит их в следующий список и спишет, когда вы готовите по рецепту.','Reste aus Packungen landen hier von selbst. Butler zieht sie von der nächsten Liste ab und bucht sie aus, wenn Sie nach Rezept kochen.','Leftovers from packs land here by themselves. Butler takes them off the next list and uses them up when you cook a recipe.','Resztki z opakowań trafiają tu same. Butler odejmie je z kolejnej listy i zużyje, gdy gotujesz z przepisu.','Paketlerden artanlar buraya kendiliğinden gelir. Butler bunları sonraki listeden düşer ve tarifle pişirdiğinizde kullanır.','Les restes des paquets arrivent ici tout seuls. Butler les retire de la liste suivante et les utilise quand vous cuisinez.','Las sobras de los envases llegan aquí solas. Butler las quita de la próxima lista y las gasta al cocinar una receta.'],
 addPh:['Что есть дома? Например «500 g Mehl»','Was ist da? z. B. „500 g Mehl“','What is at home? e.g. “500 g flour”','Co jest w domu? np. „500 g mąki”','Evde ne var? örn. “500 g un”','Qu’y a-t-il ? ex. « 500 g farine »','¿Qué hay en casa? p. ej. «500 g harina»'],
 empty:['Пока пусто. Добавьте, что есть дома, или купите что-нибудь по списку.','Noch leer. Tragen Sie ein, was da ist, oder kaufen Sie nach Liste ein.','Empty so far. Add what you have, or shop by the list.','Na razie pusto. Dodaj, co masz, albo zrób zakupy z listy.','Henüz boş. Evdekileri ekleyin ya da listeyle alışveriş yapın.','Vide pour l’instant. Ajoutez ce que vous avez ou faites vos courses.','Vacío por ahora. Añada lo que tiene o compre con la lista.'],
 cook:['Что приготовить из того, что есть','Was sich daraus kochen lässt','What to cook from what you have','Co ugotować z tego, co jest','Eldekilerle ne pişirilir','Que cuisiner avec ce qu’il y a','Qué cocinar con lo que hay'],
 have:['есть %a из %b: %l','vorhanden %a von %b: %l','have %a of %b: %l','jest %a z %b: %l','%b içinden %a var: %l','%a sur %b : %l','hay %a de %b: %l'],
 noCook:['Пока не нашлось рецептов с этими продуктами.','Noch kein Rezept mit diesen Zutaten.','No recipe with these items yet.','Brak przepisów z tymi produktami.','Bu ürünlerle tarif bulunamadı.','Pas encore de recette avec ces produits.','Aún no hay recetas con estos productos.'],
 left:['остаток','Rest','leftover','resztka','artan','reste','sobra'],
 atHome:['дома: %v','zu Hause: %v','at home: %v','w domu: %v','evde: %v','à la maison : %v','en casa: %v'],
 used:['Кладовая обновлена: списано %n','Vorrat aktualisiert: %n ausgebucht','Pantry updated: %n used','Spiżarnia zaktualizowana: zużyto %n','Kiler güncellendi: %n kullanıldı','Garde-manger mis à jour : %n utilisés','Despensa actualizada: %n usados'],
 bad:['Напишите количество и продукт, например «2 Eier» или «1 l Milch».','Bitte Menge und Produkt, z. B. „2 Eier“ oder „1 l Milch“.','Please give amount and item, e.g. “2 eggs” or “1 l milk”.','Podaj ilość i produkt, np. „2 jajka” lub „1 l mleka”.','Miktar ve ürün yazın, örn. “2 yumurta”.','Indiquez quantité et produit, ex. « 2 œufs ».','Indique cantidad y producto, p. ej. «2 huevos».']};
const pzt=(k,o)=>{let t=cv5n(pzS[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const pzList=()=>Array.isArray(g.pantry)?g.pantry:(g.pantry=[]);
const pzNorm=s=>String(s||'').toLowerCase().replace(/\([^)]*\)/g,' ').replace(/\d+(?:[.,]\d+)?\s?(kg|g|ml|l|stk\.?|st\.)(?![a-zа-я])/g,' ').replace(/[^a-zа-яёäöüßąćęłńóśźżçğıöşüéèêàâîôûñ0-9 ]/gi,' ').replace(/\s+/g,' ').trim();
function pzSame(a,b){a=pzNorm(a);b=pzNorm(b);if(!a||!b)return!1;if(a===b)return!0;const W=s=>s.split(' ').filter(w=>w.length>=3);const A=W(a),B=W(b);if(!A.length||!B.length)return!1;
 const hit=(x,y)=>x===y||(x.length>=4&&y.length>=4&&(x.startsWith(y.slice(0,Math.max(4,y.length-2)))||y.startsWith(x.slice(0,Math.max(4,x.length-2)))));return A.some(x=>B.some(y=>hit(x,y)))}
const pzFind=(n,k)=>pzList().filter(p=>(!k||p.k===k)&&pzSame(p.n,n));
function pzAdd(n,k,v,src){if(!(v>0))return null;const L=pzList(),ex=L.find(p=>p.k===k&&pzNorm(p.n)===pzNorm(n));if(ex){ex.v+=v;ex.d=Date.now();return ex}const e={id:V(),n:String(n).trim().slice(0,60),k,v,d:Date.now(),src:src||'own'};L.unshift(e);return e}
const pzShow=p=>typeof rcShow==='function'?rcShow(p.k,p.v):String(Math.round(p.v))+' '+p.k;
/* recipe list: what is at home is taken off the amounts (and unticked when it covers everything) */
function pzApply(items){if(!pzList().length)return items;items.forEach(o=>{if(o.v==null||!(o.v>0)||o.k==null)return;const P=pzFind(o.n,o.k);if(!P.length)return;const have=P.reduce((s,p)=>s+p.v,0);o.pz=pzt('atHome',{v:rcShow(o.k,have)});if(have>=o.v-1e-6){o.on=!1;o.pzAll=1}else o.v=o.v-have});return items}
/* cooking finished: take the used amounts out of the pantry */
function pzUse(r,f){const L=pzList();if(!L.length)return 0;let n=0;(r.ing||[]).forEach(x=>{if(RC_BASIC.test(String(x.n||'').trim())||x.a==null)return;const b=rcBase({a:x.a*f,u:x.u});if(b.v==null)return;let need=b.v;pzFind(x.n,b.k).forEach(p=>{if(need<=0)return;const t=Math.min(p.v,need);p.v-=t;need-=t;n++})});
 g.pantry=L.filter(p=>p.v>(p.k==='pc'?0.01:0.5));return n}
/* shopping list: an item ticked as bought leaves the rest of its pack in the pantry; unticking takes it back */
function pzFromList(){if(typeof e2price!=='function')return;let ch=!1;try{const L=Yl(1);(L.items||[]).forEach(x=>{if(x.d&&!x.pz){x.pz='-';ch=!0;try{const p=e2price(x);if(!p)return;const c=e2cost(x,p);if(c.pk&&c.left>0.5){const e=pzAdd(x.t,c.pk.k,c.left,'list');if(e){x.pz=e.id;x.pzv=c.left}}}catch{}}
 else if(!x.d&&x.pz){if(x.pz!=='-'){const P=pzList(),e=P.find(p=>p.id===x.pz);if(e){e.v-=x.pzv||0;if(e.v<=0.5)g.pantry=P.filter(p=>p!==e)}}delete x.pz;delete x.pzv;ch=!0}});if(ch)$()}catch(e){Hooks.err('pzlist',e)}}
Hooks.on('render',()=>{if(m.route==='kblist')pzFromList()});
document.addEventListener('click',()=>{if(m.route==='kblist')setTimeout(pzFromList,120)},!0);
/* screen */
function pzRecipes(){const L=pzList();if(!L.length)return[];const all=rcList().concat(rcButler());return all.map(r=>{const I=(r.ing||[]).filter(x=>!RC_BASIC.test(String(x.n||'').trim()));const hit=I.filter(x=>pzFind(x.n).length);return{r,hit,all:I.length}}).filter(o=>o.hit.length&&o.all).sort((a,b)=>b.hit.length/b.all-a.hit.length/a.all||b.hit.length-a.hit.length).slice(0,6)}
function pzScreen(){const L=pzList(),S=pzRecipes();
 return`<div class="screen rzbv0 pzw">${rcHdr(pzt('title'))}
 <p class="pzhint">${i(pzt('hint'))}</p>
 <div class="pzadd"><input class="field" data-pzin placeholder="${i(pzt('addPh'))}" enterkeyhint="done"><button type="button" data-act="pzadd" aria-label="+">＋</button></div>
 ${L.length?`<div class="pzl">${L.map(p=>`<div class="pzr"><span><b>${i(p.n)}</b>${p.src==='list'?`<small>${i(pzt('left'))}</small>`:''}</span><span class="mpp"><button type="button" data-act="pzst" data-id="${p.id}" data-d="-1">−</button><b>${i(pzShow(p))}</b><button type="button" data-act="pzst" data-id="${p.id}" data-d="1">+</button></span><button type="button" class="mpx" data-act="pzdel" data-id="${p.id}" aria-label="×">×</button></div>`).join('')}</div>`:`<p class="rzbnone">${i(pzt('empty'))}</p>`}
 ${L.length?`<h3 class="rzbh">${i(pzt('cook'))}</h3>${S.length?`<div class="mppk">${S.map(o=>`<button type="button" data-act="pzopen" data-id="${i(o.r.id)}"><b>${i(o.r.t)}</b><small>${i(pzt('have',{a:o.hit.length,b:o.all,l:o.hit.map(x=>x.n).slice(0,4).join(', ')}))}</small></button>`).join('')}</div>`:`<p class="rzbnone">${i(pzt('noCook'))}</p>`}`:''}</div>`}
function pzBookCard(){const n=pzList().length;return`<button type="button" class="mpcard" data-act="pzgo"><b>${i(pzt('card'))}</b><small>${i(n?pzt('cardN',{n}):pzt('cardE'))}</small><span>›</span></button>`}
const pzRe=()=>{try{k3keep(()=>v())}catch{try{v()}catch{}}};
Hooks.act('pzgo',()=>R('rcp'));
Hooks.act('pzadd',()=>{const el=document.querySelector('[data-pzin]'),s=el&&el.value.trim();if(!s)return;const x=rcIng(s);const b=x&&x.a!=null?rcBase(x):null;if(!x||!b||b.v==null||!/^(g|ml|pc)$/.test(b.k)){T(pzt('bad'));return}pzAdd(x.n,b.k,b.v,'own');$();pzRe();setTimeout(()=>{const n=document.querySelector('[data-pzin]');n&&n.focus()},50)});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target&&e.target.dataset&&e.target.dataset.pzin!=null){e.preventDefault();const b=document.querySelector('[data-act=pzadd]');b&&b.click()}});
Hooks.act('pzst',e=>{const p=pzList().find(x=>x.id===e.id);if(!p)return;const st=p.k==='pc'?1:p.v>=1000?100:p.v>=200?50:10;p.v=Math.max(0,p.v+(+e.d||0)*st);if(p.v<=0)g.pantry=pzList().filter(x=>x!==p);$();pzRe()});
Hooks.act('pzdel',e=>{g.pantry=pzList().filter(x=>x.id!==e.id);$();pzRe()});
Hooks.act('pzopen',e=>{m.rcId=e.id;m.rcvFrom='rcp';R('rcv')});
['rcp'].forEach(r=>{Te.includes(r)||Te.push(r)});
(Hooks.h.screen=Hooks.h.screen||[]).unshift(()=>{try{if(m.route==='rcp')return pzScreen()}catch(e){Hooks.err('pzscreen',e)}});
Hooks.css('pantry',`
.mpcards{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 12px}.mpcards .mpcard{margin:0;padding:13px 34px 13px 14px!important}.mpcards .mpcard b{font-size:15px}.mpcards .mpcard small{font-size:12.5px;line-height:1.3}.mpcards .mpcard>span{right:12px}
.pzhint{color:var(--muted);font-size:13.5px;line-height:1.4;margin:0 0 12px}
.pzadd{display:flex;gap:8px;margin-bottom:14px}.pzadd .field{flex:1;min-width:0}.pzadd button{flex:none;display:flex;align-items:center;justify-content:center;padding:0 0 3px;width:52px;border-radius:14px;border:0;background:var(--gold);color:#1a1712;font-size:24px;cursor:pointer}
.pzl{display:flex;flex-direction:column;border:1px solid var(--line);border-radius:18px;background:var(--surface);padding:4px 14px}
.pzr{display:flex;align-items:center;gap:8px;padding:10px 0}.pzr+.pzr{border-top:1px solid var(--line)}.pzr>span:first-child{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}.pzr>span:first-child b{font-weight:500;font-size:15.5px}.pzr>span:first-child small{color:var(--ok,#2E7D4F);font-size:12px}
.pzr .mpp b{min-width:64px;font-size:14px}
.rzblsi small.pz{color:var(--ok,#2E7D4F)}
`);
