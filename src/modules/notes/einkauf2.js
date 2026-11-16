/* ===== v286 Einkauf 2.0, stage 1: prices in the list, offers, favourites, the plan with savings =====
   On the shopping list («Einkauf»):
   - four tiles under the quick buttons: Магазины · Акции · Чек · План;
   - «Избранное» next to «Из продуктов» and «Как в прошлый раз»;
   - every row shows its price on the right: a current offer (−30 %, old price struck through, new price bold),
     else the last price from your receipts, else the price you typed («+ цена»);
   - under the list: «План закупки» — estimated total, without offers, savings, and how many items have a price.
   Offers (g.shopOff) are entered by hand for now (shop, product, price, old price, valid until) and vanish
   after their last day. Prospect scanning comes in the next step. Nothing is taken from shop websites.
   Replaces the price block of v281. */
const e2S={
 fav:['Избранное','Favoriten','Favourites','Ulubione','Favoriler','Favoris','Favoritos'],
 shops:['Магазины','Geschäfte','Shops','Sklepy','Mağazalar','Magasins','Tiendas'],off:['Акции','Angebote','Offers','Promocje','Fırsatlar','Promos','Ofertas'],
 chk:['Чек','Beleg','Receipt','Paragon','Fiş','Ticket','Ticket'],plan:['План','Plan','Plan','Plan','Plan','Plan','Plan'],
 act:['Акции учтены','Angebote aktiv','Offers on','Promocje aktywne','Fırsatlar aktif','Promos actives','Ofertas activas'],
 offOn:['%n акций на товары из вашего списка','%n Angebote für Ihre Liste','%n offers for your list','%n promocji na Twoją listę','Listeniz için %n fırsat','%n promos pour votre liste','%n ofertas para su lista'],
 pack:['Упаковка','Packung','Pack size','Opakowanie','Paket','Conditionnement','Envase'],packH:['например 1 kg, 500 g, 10 шт.','z. B. 1 kg, 500 g, 10 Stk.','e.g. 1 kg, 500 g, 10 pcs','np. 1 kg, 500 g, 10 szt.','örn. 1 kg, 500 g, 10 adet','ex. 1 kg, 500 g, 10 pièces','p. ej. 1 kg, 500 g, 10 uds.'],
 left:['останется %v','übrig %v','%v left over','zostanie %v','%v artar','reste %v','sobra %v'],
 apx:['≈ где размер упаковки неизвестен','≈ wo die Packungsgröße fehlt','≈ where the pack size is unknown','≈ gdzie brak wielkości opakowania','≈ paket boyutu bilinmeyenlerde','≈ là où le conditionnement manque','≈ donde falta el tamaño del envase'],
 cmp:['Сравнить магазины','Geschäfte vergleichen','Compare shops','Porównaj sklepy','Mağazaları karşılaştır','Comparer les magasins','Comparar tiendas'],
 cmpH:['Тот же список в каждом магазине, по его акциям и вашим чекам. Нажмите магазин, чтобы считать по нему.','Dieselbe Liste in jedem Geschäft, nach seinen Angeboten und Ihren Belegen. Tippen Sie ein Geschäft an, um danach zu rechnen.','The same list in each shop, by its offers and your receipts. Tap a shop to price by it.','Ta sama lista w każdym sklepie, wg jego promocji i Twoich paragonów. Dotknij sklepu, by liczyć według niego.','Aynı liste her mağazada, fırsatlarına ve fişlerinize göre. Ona göre hesaplamak için mağazaya dokunun.','La même liste dans chaque magasin, selon ses promos et vos tickets. Touchez un magasin pour calculer avec lui.','La misma lista en cada tienda, según sus ofertas y sus tickets. Toque una tienda para calcular con ella.'],
 anyShop:['Лучшие цены везде','Beste Preise überall','Best prices anywhere','Najlepsze ceny wszędzie','Her yerde en iyi fiyat','Meilleurs prix partout','Mejores precios en todas'],
 inShop:['Цены по магазину: %s','Preise für: %s','Prices for: %s','Ceny dla: %s','Fiyatlar: %s','Prix pour : %s','Precios de: %s'],
 planT:['План закупки','Einkaufsplan','Shopping plan','Plan zakupów','Alışveriş planı','Plan d’achat','Plan de compra'],
 est:['Примерная сумма','Geschätzte Summe','Estimated total','Szacowana suma','Tahmini toplam','Total estimé','Total estimado'],
 orig:['без акций','ohne Angebote','without offers','bez promocji','fırsatsız','sans promos','sin ofertas'],
 save:['экономия','Ersparnis','saving','oszczędność','tasarruf','économie','ahorro'],
 have:['цены есть у %a из %b','Preise für %a von %b','prices for %a of %b','ceny dla %a z %b','%b üründen %a fiyatlı','prix pour %a sur %b','precios de %a de %b'],
 noPr:['Цен пока нет. Добавьте акцию, сфотографируйте чек или нажмите «+ цена» у товара.','Noch keine Preise. Angebot eintragen, Beleg fotografieren oder bei einem Artikel «+ Preis» tippen.','No prices yet. Add an offer, photograph a receipt or tap “+ price” on an item.','Brak cen. Dodaj promocję, zrób zdjęcie paragonu lub dotknij „+ cena”.','Henüz fiyat yok. Fırsat ekleyin, fiş çekin veya üründe “+ fiyat”a dokunun.','Pas encore de prix. Ajoutez une promo, photographiez un ticket ou touchez « + prix ».','Aún no hay precios. Añada una oferta, fotografíe un ticket o toque «+ precio».'],
 addP:['+ цена','+ Preis','+ price','+ cena','+ fiyat','+ prix','+ precio'],
 priceQ:['Цена «%t»','Preis für «%t»','Price of “%t”','Cena „%t”','“%t” fiyatı','Prix de « %t »','Precio de «%t»'],
 rec:['из чека','vom Beleg','from receipt','z paragonu','fişten','du ticket','del ticket'],
 offT:['Акции магазинов','Angebote der Geschäfte','Shop offers','Promocje sklepów','Mağaza fırsatları','Promos des magasins','Ofertas de tiendas'],
 offNone:['Действующих акций нет.','Keine aktuellen Angebote.','No current offers.','Brak aktualnych promocji.','Güncel fırsat yok.','Aucune promo en cours.','No hay ofertas vigentes.'],
 offAdd:['Добавить акцию','Angebot hinzufügen','Add offer','Dodaj promocję','Fırsat ekle','Ajouter une promo','Añadir oferta'],
 shop:['Магазин','Geschäft','Shop','Sklep','Mağaza','Magasin','Tienda'],prod:['Товар','Artikel','Item','Produkt','Ürün','Article','Artículo'],
 newP:['Цена по акции','Angebotspreis','Offer price','Cena promocyjna','Fırsat fiyatı','Prix promo','Precio de oferta'],oldP:['Обычная цена (если есть)','Normalpreis (falls bekannt)','Usual price (if known)','Zwykła cena (jeśli znana)','Normal fiyat (biliniyorsa)','Prix habituel (si connu)','Precio normal (si se sabe)'],
 until:['Действует до','Gültig bis','Valid until','Ważne do','Geçerlilik','Valable jusqu’au','Válido hasta'],
 ok:['Сохранить','Speichern','Save','Zapisz','Kaydet','Enregistrer','Guardar'],del:['Удалить','Löschen','Delete','Usuń','Sil','Supprimer','Eliminar'],
 need:['Укажите товар и цену.','Bitte Artikel und Preis angeben.','Enter an item and a price.','Podaj produkt i cenę.','Ürün ve fiyat girin.','Indiquez l’article et le prix.','Indique artículo y precio.'],
 saved:['Акция сохранена','Angebot gespeichert','Offer saved','Promocja zapisana','Fırsat kaydedildi','Promo enregistrée','Oferta guardada'],
 till:['до %d','bis %d','until %d','do %d','%d tarihine kadar','jusqu’au %d','hasta %d'],
 favT:['Избранное','Favoriten','Favourites','Ulubione','Favoriler','Favoris','Favoritos'],
 favH:['Нажмите товар, чтобы добавить его в список. ☆ — убрать из избранного.','Tippen Sie einen Artikel an, um ihn auf die Liste zu setzen. ☆ – aus den Favoriten entfernen.','Tap an item to put it on the list. ☆ removes it from favourites.','Dotknij produktu, aby dodać go do listy. ☆ – usuń z ulubionych.','Listeye eklemek için ürüne dokunun. ☆ favorilerden çıkarır.','Touchez un article pour l’ajouter à la liste. ☆ le retire des favoris.','Toque un artículo para añadirlo a la lista. ☆ lo quita de favoritos.'],
 favAdd:['Отметить из списка','Aus der Liste markieren','Mark from the list','Zaznacz z listy','Listeden işaretle','Marquer depuis la liste','Marcar de la lista'],
 favNone:['Пока пусто. Отметьте звёздочкой товары, которые покупаете всегда.','Noch leer. Markieren Sie Artikel, die Sie immer kaufen, mit einem Stern.','Empty for now. Star the items you always buy.','Na razie pusto. Oznacz gwiazdką produkty kupowane zawsze.','Şimdilik boş. Hep aldığınız ürünleri yıldızlayın.','Vide pour l’instant. Étoilez les articles achetés toujours.','Vacío por ahora. Marque con estrella lo que compra siempre.'],
 added:['Добавлено: %t','Hinzugefügt: %t','Added: %t','Dodano: %t','Eklendi: %t','Ajouté : %t','Añadido: %t']};
const e2t=(k,o)=>{let t=cv5n(e2S[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const e2low=s=>String(s||'').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g,'').replace(/ß/g,'ss').replace(/[^a-zа-яё0-9 ]+/g,' ').replace(/\s+/g,' ').trim();
/* amounts are cents, like receipt prices (Kc formats cents in the user's currency) */
const e2money=a=>{try{return B(a)}catch{return(Math.round(a)/100).toFixed(2).replace('.',',')+' €'}};
const e2num=x=>{const n=parseFloat(String(x==null?'':x).replace(',','.'));return n>0?Math.round(n*100):0};
const e2today=()=>new Date().toISOString().slice(0,10);
const e2offers=()=>{const a=Array.isArray(g.shopOff)?g.shopOff:(g.shopOff=[]);const t=e2today(),old=new Date(Date.now()-30*864e5).toISOString().slice(0,10);
 const keep=a.filter(o=>!o.until||o.until>=old);if(keep.length!==a.length){g.shopOff=keep;try{$()}catch{}}return keep.filter(o=>!o.until||o.until>=t)};
/* «Eier» matches «Eier (10 Stk.)», «Bio-Eier», «eggs» does not — plain word match, no guessing */
const e2match=(item,off)=>{const a=e2low(item),b=e2low(off);if(!a||!b)return!1;if(a===b)return!0;const aw=a.split(' '),bw=b.split(' ');return aw.every(w=>w.length>2&&bw.some(x=>x===w||x.endsWith(w)||x.startsWith(w)))||bw.every(w=>w.length>2&&aw.some(x=>x===w))};
/* pack sizes and amounts in base units: g, ml, pc */
const E2U={g:['g',1],gr:['g',1],kg:['g',1000],г:['g',1],кг:['g',1000],ml:['ml',1],мл:['ml',1],l:['ml',1000],л:['ml',1000],ltr:['ml',1000],cl:['ml',10],dl:['ml',100],stk:['pc',1],'stk.':['pc',1],stück:['pc',1],st:['pc',1],'st.':['pc',1],er:['pc',1],шт:['pc',1],'шт.':['pc',1],pcs:['pc',1],szt:['pc',1],'szt.':['pc',1],adet:['pc',1]};
function e2pack(t){const s=String(t||'').toLowerCase();let m0=s.match(/(\d+)\s?x\s?(\d+(?:[.,]\d+)?)\s?(kg|g|gr|ml|l|ltr|cl|dl)(?![a-zа-я])/);if(m0){const u=E2U[m0[3]];return{k:u[0],v:+m0[1]*parseFloat(m0[2].replace(',','.'))*u[1]}}
 m0=s.match(/(\d+(?:[.,]\d+)?)\s?(kg|g|gr|ml|l|ltr|cl|dl|stk\.?|stück|st\.|er|шт\.?|кг|г|мл|л|szt\.?|adet)(?![a-zа-яäöü])/);if(!m0)return null;const u=E2U[m0[2]]||E2U[m0[2].replace(/\.$/,'')];if(!u)return null;const v=parseFloat(m0[1].replace(',','.'))*u[1];return v>0?{k:u[0],v}:null}
function e2need(x){if(x.rq&&x.rq.v>0)return{k:x.rq.k,v:x.rq.v};const q=String(x.q||'').trim();if(!q)return null;if(/^\d+$/.test(q))return{k:'pc',v:+q,cnt:1};return e2pack(q)}
function e2price(x,shop){const sel=shop!=null?shop:(m.k43shop||'');const offs=e2offers().filter(o=>e2match(x.t,o.t)&&(!sel||e2low(o.shop)===e2low(sel)));
 let rec=null;try{if(sel){const P=LP(x.t),st=P&&P.stores.find(z=>e2low(z.s)===e2low(sel));if(st)rec={p:st.last,s:st.s}}else{const r=Q_(x.t);if(r&&r.p)rec={p:r.p,s:r.s}}}catch{}
 if(offs.length){const o=offs.sort((p,q)=>p.p-q.p)[0];let old=o.old||0;if(!old&&rec&&rec.p>o.p)old=rec.p;return{p:o.p,old,src:'off',shop:o.shop,until:o.until,pk:o.pk||e2pack(o.t)}}
 if(rec)return{p:rec.p,src:'rec',shop:rec.s,pk:x.pk||null};
 if(x.p&&!sel)return{p:x.p,src:'own',pk:x.pk||null};if(x.p&&sel)return{p:x.p,src:'own',pk:x.pk||null};return null}
const e2qty=x=>{const n=parseInt(String(x.q||'').trim(),10);return /^\d+$/.test(String(x.q||'').trim())&&n>0&&n<100?n:1};
/* what the need costs: whole packs; how much is left over; price per kg / l */
function e2cost(x,p){const need=e2need(x),pk=p.pk;if(need&&pk&&pk.k===need.k){const n=Math.max(1,Math.ceil(need.v/pk.v-1e-9));return{n,cost:n*p.p,old:n*(p.old||p.p),left:n*pk.v-need.v,pk,need,unit:pk.k!=='pc'?Math.round(p.p/(pk.v/1000)):0,approx:!1}}
 const n=need&&need.cnt?Math.max(1,Math.round(need.v)):(need&&need.k==='pc'&&!pk?Math.max(1,Math.ceil(need.v)):1);return{n,cost:n*p.p,old:n*(p.old||p.p),left:0,pk,need,unit:pk&&pk.k!=='pc'?Math.round(p.p/(pk.v/1000)):0,approx:!!(need&&!need.cnt&&!(need.k==='pc'&&!pk))}}
const e2fmtQ=(k,v)=>k==='g'?(v>=1000?(Math.round(v/100)/10+'').replace('.',',')+' kg':Math.round(v)+' g'):k==='ml'?(v>=1000?(Math.round(v/100)/10+'').replace('.',',')+' l':Math.round(v)+' ml'):(Math.round(v*10)/10+'').replace('.',',')+' '+cv5n(['шт.','Stk.','pcs','szt.','adet','pc','ud.']);
function e2sum(shop){const L=Yl(),left=(L.items||[]).filter(x=>!x.d);let est=0,orig=0,have=0,approx=0;left.forEach(x=>{const p=e2price(x,shop);if(!p)return;have++;const c=e2cost(x,p);est+=c.cost;orig+=c.old;if(c.approx)approx++});return{est,orig,save:orig-est,have,all:left.length,approx}}
const E2I={shops:'<path d="M4 9l1.5-5h13L20 9M4 9h16v11H4zM4 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3"/>',off:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.4"/>',chk:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',plan:'<path d="M5 4h14v16H5z"/><path d="M8 9h8M8 13h8M8 17h5"/>'};
const e2ic=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${E2I[k]}</svg>`;
/* ---- decorate the list screen after each render ---- */
Hooks.on('render',()=>{try{if(m.route!=='kblist')return;const sc=document.querySelector('.screen.k43');if(!sc||sc.dataset.e2)return;sc.dataset.e2=1;const L=Yl();
 const mini=sc.querySelector('.k4mini');if(mini){mini.insertAdjacentHTML('beforeend',`<button type="button" data-act="e2fav">☆ ${i(e2t('fav'))}</button>`);
  mini.insertAdjacentHTML('afterend',`<div class="e2tiles"><button type="button" data-act="k43nav" data-to="kbshops">${e2ic('shops')}<span>${i(e2t('shops'))}</span></button><button type="button" data-act="e2off">${e2ic('off')}<span>${i(e2t('off'))}</span>${e2offers().length?`<em>${e2offers().length}</em>`:''}</button><button type="button" data-act="k43chk">${e2ic('chk')}<span>${i(e2t('chk'))}</span></button><button type="button" data-act="e2plan">${e2ic('plan')}<span>${i(e2t('plan'))}</span></button></div>`)}
 sc.querySelectorAll('.k4r').forEach(r=>{const b=r.querySelector('b'),k=+((r.querySelector('[data-i]')||{}).dataset||{}).i;const x=(L.items||[])[k];if(!b||!x)return;const p=e2price(x);
  if(!p){b.innerHTML=x.d?'':`<button type="button" class="e2add" data-act="e2pr" data-i="${k}">${i(e2t('addP'))}</button>`;return}
  const pct=p.old>p.p?Math.round((1-p.p/p.old)*100):0,c=e2cost(x,p);
  const note=[c.n>1?c.n+' × '+e2money(p.p):'',c.unit?e2money(c.unit)+(c.pk.k==='ml'?'/l':'/kg'):'',p.src==='off'&&!m.k43shop?p.shop:p.src==='rec'?e2t('rec'):''].filter(Boolean).join(' · ');
  b.innerHTML=`<span class="e2p" data-act="e2pr" data-i="${k}"><strong>${c.approx?'≈ ':''}${i(e2money(c.cost))}</strong>${pct?`<span class="e2l"><em>−${pct}%</em><s>${i(e2money(c.old))}</s></span>`:''}${note?`<small>${i(note)}</small>`:''}${c.left>0.0001?`<small class="e2left">${i(e2t('left',{v:e2fmtQ(c.pk.k,c.left)}))}</small>`:''}</span>`});
 const S=e2sum(),sub=sc.querySelector('.k4sub');if(sub&&S.est)sub.textContent=sub.textContent.split(' · ')[0]+' · ≈ '+e2money(S.est);
 const go=sc.querySelector('.k4go small');if(go)go.textContent=S.est?'≈ '+e2money(S.est):'';
 const shopCard=sc.querySelector('.k4shop');if(shopCard&&!m.k43shop){const cnt={};(L.items||[]).filter(x=>!x.d).forEach(x=>{const seen=new Set();e2offers().forEach(o=>{if(o.shop&&!seen.has(o.shop)&&e2match(x.t,o.t)){seen.add(o.shop);cnt[o.shop]=(cnt[o.shop]||0)+1}})});const best=Object.keys(cnt).sort((a,b)=>cnt[b]-cnt[a])[0];
  const b0=shopCard.querySelector('b'),s0=shopCard.querySelector('small');if(best&&b0&&s0&&/Kein|Нет|No shop|Brak|yok|Aucun|Ningún|Sin/i.test(b0.textContent)){b0.textContent=best;s0.textContent=e2t('offOn',{n:cnt[best]})}else if(!S.have&&/autoNo|keine Preise|No prices|Цен|prices yet/i.test(shopCard.textContent))shopCard.remove()}
 if(S.all){const pct=S.orig>0&&S.save>0.004?Math.round(S.save/S.orig*100):0;const card=document.createElement('div');card.className='e2plan';card.id='e2plan';
  const PR=(Yl().items||[]).filter(x=>!x.d).map(x=>[x,e2price(x)]).filter(z=>z[1]),act=PR.some(z=>z[1].src==='off');
  const lines=PR.map(([x,p])=>{const pc=p.old>p.p?Math.round((1-p.p/p.old)*100):0,c=e2cost(x,p);return`<div class="e2pl"><span>${i(x.t)}${c.n>1?` ×${c.n}`:''}</span>${pc?`<em>−${pc}%</em><s>${i(e2money(c.old))}</s>`:'<em class="no"></em><s></s>'}<b>${c.approx?'≈ ':''}${i(e2money(c.cost))}</b></div>`}).join('');
  card.innerHTML=S.have?`<div class="e2ph"><h3>${i(e2t('planT'))}</h3>${act?`<span class="e2act">🏷 ${i(e2t('act'))}</span>`:''}</div><div class="e2pls">${lines}</div><div class="e2tot"><span>${i(e2t('est'))}</span><b>${i(e2money(S.est))}</b></div>${pct?`<p>${i(e2t('orig'))}: <s>${i(e2money(S.orig))}</s> · ${i(e2t('save'))}: <em>${i(e2money(S.save))} (−${pct}%)</em></p>`:''}<small>${i(e2t('have',{a:S.have,b:S.all}))}${S.approx?' · '+i(e2t('apx')):''}</small>${m.k43shop?`<p class="e2in">${i(e2t('inShop',{s:m.k43shop}))}</p>`:''}<button type="button" class="e2cmp" data-act="e2cmp">⚖ ${i(e2t('cmp'))}</button>`:`<h3>${i(e2t('planT'))}</h3><small>${i(e2t('noPr'))}</small>`;
  const list=sc.querySelector('.k4list');if(list)list.insertAdjacentElement('afterend',card)}}catch(e){Hooks.err('e2list',e)}});
const e2Re=()=>{try{k3keep(()=>v())}catch{try{v()}catch{}}};
Hooks.act('e2plan',()=>{const c=document.getElementById('e2plan');if(c)c.scrollIntoView({behavior:'smooth',block:'center'})});
/* own price for one item */
Hooks.act('e2pr',e=>{const L=Yl(),x=(L.items||[])[+e.i];if(!x)return;const p=e2price(x);
 const sh=H(e2t('priceQ',{t:x.t}),`<div class="e2f"><label><span>${i(e2t('newP'))}</span><input type="number" inputmode="decimal" min="0" step="0.01" value="${x.p?x.p/100:(p&&p.src!=='off'?p.p/100:'')}" data-v></label><label><span>${i(e2t('pack'))}</span><input type="text" placeholder="${i(e2t('packH'))}" value="${i(x.pkT||'')}" data-k></label><button type="button" class="dcadd gold" data-ok>${i(e2t('ok'))}</button></div>`,()=>{});
 const inp=sh.querySelector('[data-v]');setTimeout(()=>inp&&inp.focus(),80);sh.querySelector('[data-ok]').onclick=()=>{const n=e2num(inp.value);if(n)x.p=n;else delete x.p;const kt=sh.querySelector('[data-k]').value.trim(),pk=e2pack(kt);if(pk){x.pk=pk;x.pkT=kt}else{delete x.pk;delete x.pkT}$();sh.remove();e2Re()}});
/* compare shops: the same list priced in each shop that has offers or receipt prices */
Hooks.act('e2cmp',()=>{const L=(Yl().items||[]).filter(x=>!x.d),shops=new Set();e2offers().forEach(o=>o.shop&&shops.add(o.shop));L.forEach(x=>{try{const P=LP(x.t);P&&P.stores.forEach(z=>shops.add(z.s))}catch{}});
 const rows=[...shops].map(s=>({s,...e2sum(s)})).filter(r=>r.have).sort((a,b)=>b.have-a.have||a.est-b.est),best=e2sum('');
 const sh=H(e2t('cmp'),`<div class="e2box"><p class="fdsmall">${i(e2t('cmpH'))}</p><div class="e2cm">${[{s:'',...best,all1:1}].concat(rows).map(r=>`<button type="button" class="${(m.k43shop||'')===r.s?'on':''}" data-s="${i(r.s)}"><span><b>${i(r.s||e2t('anyShop'))}</b><small>${i(e2t('have',{a:r.have,b:r.all}))}${r.save>0.4?' · '+i(e2t('save'))+' '+i(e2money(r.save)):''}</small></span><strong>${r.approx?'≈ ':''}${i(e2money(r.est))}</strong></button>`).join('')}</div></div>`,()=>{});
 sh.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{m.k43shop=b.dataset.s||'';sh.remove();e2Re()})});
/* offers: list, add, delete */
function e2offSheet(pre){const shops=(()=>{try{return fy().map(s=>s.name).filter(Boolean)}catch{return[]}})(),sel=m.k43shop||'';
 const draw=()=>{const O=e2offers();const by={};O.forEach(o=>{(by[o.shop||'—']=by[o.shop||'—']||[]).push(o)});
  return`<div class="e2o">${O.length?Object.keys(by).sort().map(s=>`<div class="e2os"><b>${i(s)}</b>${by[s].map(o=>`<div class="e2or"><span>${i(o.t)}${o.until?`<small>${i(e2t('till',{d:new Date(o.until+'T12:00').toLocaleDateString(he(),{day:'numeric',month:'short'})}))}</small>`:''}</span><span class="e2p">${o.old>o.p?`<em>−${Math.round((1-o.p/o.old)*100)}%</em><s>${i(e2money(o.old))}</s>`:''}<strong>${i(e2money(o.p))}</strong></span><button type="button" data-del="${i(o.id)}" aria-label="${i(e2t('del'))}">×</button></div>`).join('')}</div>`).join(''):`<p class="fdsmall">${i(e2t('offNone'))}</p>`}
  <h4>${i(e2t('offAdd'))}</h4><div class="e2f"><label><span>${i(e2t('shop'))}</span><input type="text" list="e2shops" value="${i(sel)}" data-s></label><datalist id="e2shops">${shops.map(s=>`<option value="${i(s)}">`).join('')}</datalist>
  <label><span>${i(e2t('prod'))}</span><input type="text" value="${i(pre||'')}" data-t></label><div class="e2two"><label><span>${i(e2t('newP'))}</span><input type="number" inputmode="decimal" min="0" step="0.01" data-p></label><label><span>${i(e2t('oldP'))}</span><input type="number" inputmode="decimal" min="0" step="0.01" data-o></label></div>
  <label><span>${i(e2t('until'))}</span><input type="date" min="${e2today()}" data-u></label><button type="button" class="dcadd gold" data-ok>${i(e2t('ok'))}</button></div></div>`};
 const sh=H(e2t('offT'),'<div class="e2box"></div>',()=>{}),box=sh.querySelector('.e2box');
 const wire=()=>{box.innerHTML=draw();box.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{g.shopOff=(g.shopOff||[]).filter(o=>o.id!==b.dataset.del);$();wire();e2Re()});
  box.querySelector('[data-ok]').onclick=()=>{const t=box.querySelector('[data-t]').value.trim(),p=e2num(box.querySelector('[data-p]').value),o=e2num(box.querySelector('[data-o]').value),s=box.querySelector('[data-s]').value.trim(),u=box.querySelector('[data-u]').value;
   if(!t||!p){T(e2t('need'));return}(g.shopOff=g.shopOff||[]).push({id:V(),shop:s,t,p,old:o>p?o:0,until:u||'',d:Date.now()});$();T(e2t('saved'));wire();e2Re()}};wire()}
Hooks.act('e2off',()=>e2offSheet(''));
/* favourites */
Hooks.act('e2fav',()=>{const F=()=>Array.isArray(g.shopFav)?g.shopFav:(g.shopFav=[]);const sh=H(e2t('favT'),'<div class="e2box"></div>',()=>{}),box=sh.querySelector('.e2box');
 const draw=()=>{const L=Yl(),inL=new Set((L.items||[]).filter(x=>!x.d).map(x=>e2low(x.t))),fv=F();const cand=(L.items||[]).map(x=>x.t).filter(t=>!fv.some(f=>e2low(f)===e2low(t)));
  box.innerHTML=`<p class="fdsmall">${i(e2t('favH'))}</p>${fv.length?`<div class="e2fv">${fv.map((t,j)=>`<span class="${inL.has(e2low(t))?'on':''}"><button type="button" data-a="${j}">${i(t)}</button><button type="button" class="st" data-r="${j}" aria-label="☆">★</button></span>`).join('')}</div>`:`<p class="fdsmall">${i(e2t('favNone'))}</p>`}
  ${cand.length?`<h4>${i(e2t('favAdd'))}</h4><div class="e2fv">${cand.map((t,j)=>`<span><button type="button" class="st" data-m="${j}">☆</button><button type="button" data-m="${j}">${i(t)}</button></span>`).join('')}</div>`:''}`;
  box.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const t=fv[+b.dataset.a];const L2=Yl();const ex=(L2.items||[]).find(x=>e2low(x.t)===e2low(t));if(ex&&!ex.d)L2.items.splice(L2.items.indexOf(ex),1);else if(ex)ex.d=!1;else L2.items.push({t,d:!1,q:''});$();draw();e2Re()});
  box.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{fv.splice(+b.dataset.r,1);$();draw()});
  box.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{const t=cand[+b.dataset.m];if(t&&!fv.includes(t))fv.push(t);$();draw()})};draw()});
Hooks.css('einkauf2',`
.e2tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:14px 0 4px}
.e2tiles button{position:relative;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;border:1px solid var(--line);border-radius:16px;background:var(--surface);color:var(--ink);font:inherit;font-size:13.5px;cursor:pointer}
.e2tiles svg{width:26px;height:26px;color:var(--gold)}.e2tiles em{position:absolute;top:6px;right:8px;left:auto;display:block;width:max-content;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--gold);color:#17130b;font-style:normal;font-size:11px;line-height:18px;text-align:center}
.k4r b{display:flex;justify-content:flex-end;min-width:0}
.e2p{display:inline-flex;flex-direction:column;align-items:flex-end;gap:2px;cursor:pointer;line-height:1.15;font-family:-apple-system,'SF Pro Text',system-ui,sans-serif;font-variant-numeric:tabular-nums}
.e2p em{font-style:normal;font-size:11px;font-weight:600;color:#fff;background:#c0563f;border-radius:8px;padding:1px 6px}.e2p s{font-size:12px;color:var(--muted);font-weight:400}.e2p strong{font-size:15px;font-weight:600;color:var(--ink)}
.e2l{display:inline-flex;align-items:baseline;gap:5px;white-space:nowrap}.e2p small{font-size:11px;font-weight:400;color:var(--muted)}.e2or .e2p{flex-direction:row;align-items:baseline;gap:6px}
.e2add{border:0;background:transparent;color:var(--gold);font:inherit;font-size:13px;font-weight:400;padding:4px 0;cursor:pointer;white-space:nowrap}
.e2plan{margin:16px 0;padding:14px 16px;border-radius:18px;border:1px solid var(--line);background:var(--surface);color:var(--ink)}
.e2left{color:var(--ok,#2E7D4F)!important}.e2cmp{width:100%;margin-top:12px;border:1px solid var(--gold);background:transparent;color:var(--ink);font:inherit;font-size:15px;padding:11px;border-radius:999px;cursor:pointer}.e2in{color:var(--gold)!important}
.e2cm{display:flex;flex-direction:column;gap:8px;margin-top:10px}.e2cm button{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--line);border-radius:16px;background:var(--surface);color:var(--ink);font:inherit;text-align:left;cursor:pointer}.e2cm button.on{border-color:var(--gold);background:var(--gold-soft)}.e2cm span{flex:1;display:flex;flex-direction:column;gap:2px}.e2cm small{color:var(--muted);font-size:12.5px}.e2cm strong{font-size:17px;font-family:-apple-system,system-ui,sans-serif}
.e2plan h3{margin:0 0 8px;font-size:17px;font-weight:600;font-family:inherit;letter-spacing:0;text-transform:none}
.e2ph{display:flex;align-items:center;justify-content:space-between;gap:8px}.e2ph h3{margin:0 0 8px}.e2act{font-size:12px;padding:4px 10px;border-radius:999px;background:var(--gold-soft);color:var(--ink);white-space:nowrap}
.e2pls{margin:4px 0 10px}.e2pl{display:grid;grid-template-columns:1fr auto auto 76px;gap:8px;align-items:baseline;padding:8px 0;border-top:1px solid var(--line);font-size:15px}.e2pl:first-child{border-top:0}
.e2pl em{font-style:normal;font-size:11px;font-weight:600;color:#fff;background:#c0563f;border-radius:8px;padding:1px 6px}.e2pl em.no{background:none;padding:0}.e2pl s{font-size:12.5px;color:var(--muted)}.e2pl b{text-align:right;font-weight:600;font-family:-apple-system,'SF Pro Text',system-ui,sans-serif;font-variant-numeric:tabular-nums}
.e2tot{padding-top:10px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:baseline}.e2tot span{font-size:15px}.e2tot b{font-size:22px;font-weight:600;color:var(--gold);font-family:-apple-system,'SF Pro Text',system-ui,sans-serif}
.e2plan p{margin:6px 0 0;font-size:14px;color:var(--muted)}.e2plan p em{font-style:normal;color:var(--ok,#2E7D4F);font-weight:600}.e2plan small{display:block;margin-top:6px;font-size:12.5px;color:var(--muted)}
.e2box h4{margin:16px 0 8px;font-size:15px;font-weight:600}
.e2f{display:flex;flex-direction:column;gap:10px}.e2f label{display:flex;flex-direction:column;gap:4px;font-size:13px;color:var(--muted)}
.e2f input{font:inherit;font-size:16px;color:var(--ink);background:var(--field);border:1px solid var(--line);border-radius:12px;padding:10px 12px;min-width:0}.e2two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.e2os{margin-bottom:12px}.e2os>b{display:block;font-size:14px;color:var(--gold);margin-bottom:4px}
.e2or{display:grid;grid-template-columns:1fr auto 32px;gap:8px;align-items:center;padding:8px 0;border-top:1px solid var(--line)}.e2or>span:first-child{display:flex;flex-direction:column;font-size:15px}.e2or small{font-size:12px;color:var(--muted)}
.e2or>button{border:0;background:transparent;color:var(--muted);font-size:20px;cursor:pointer}
.e2fv{display:flex;flex-wrap:wrap;gap:8px}.e2fv span{display:inline-flex;align-items:center;border:1px solid var(--line);border-radius:999px;background:var(--surface);overflow:hidden}.e2fv span.on{border-color:var(--gold);background:var(--gold-soft)}
.e2fv button{border:0;background:transparent;color:var(--ink);font:inherit;font-size:14px;padding:8px 10px;cursor:pointer}.e2fv .st{color:var(--gold);padding:8px 6px 8px 10px}.e2fv span>button:last-child.st{padding:8px 10px 8px 4px}
`);
