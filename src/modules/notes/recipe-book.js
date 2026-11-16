/* ===== v288 Recipe book · «Готовлю» · recipes → shopping list (Butler Shopping, stage 1) =====
   - Book (route rcb): search, sections, own recipes + Butler's ready recipes (from Sport → Nutrition), ticks.
   - Recipe (rcv): photo, portions «− 4 +» (all amounts scale), time, ingredients, steps, note, favourite.
   - Editor (rce): by hand, ingredients as a line «500 g Mehl, 3 Eier»; or paste/dictate the whole text.
   - «Готовлю» (rck): full screen, ingredients with ticks, then one big step at a time, timers from the text
     («20 Minuten»), the screen stays on.
   - «В список покупок»: ticked recipes × portions → one merged list (g+kg, ml+l, pieces), basics such as salt
     or water unticked («дома есть?»), into the same shopping list; each item remembers its dishes.
   Data: g.recipes (synced text). A dish photo stays on this phone only (localStorage), small. */
const rcS={
 book:['Книга рецептов','Rezeptbuch','Recipe book','Książka przepisów','Tarif defteri','Livre de recettes','Libro de recetas'],
 tile:['Рецепты','Rezepte','Recipes','Przepisy','Tarifler','Recettes','Recetas'],
 find:['Найти рецепт','Rezept suchen','Find a recipe','Szukaj przepisu','Tarif ara','Chercher une recette','Buscar receta'],
 all:['Все','Alle','All','Wszystkie','Tümü','Tous','Todas'],fav:['★ Избранное','★ Favoriten','★ Favourites','★ Ulubione','★ Favoriler','★ Favoris','★ Favoritos'],
 c_soup:['Супы','Suppen','Soups','Zupy','Çorbalar','Soupes','Sopas'],c_meat:['Мясо и рыба','Fleisch & Fisch','Meat & fish','Mięso i ryby','Et ve balık','Viande & poisson','Carne y pescado'],
 c_side:['Гарниры','Beilagen','Sides','Dodatki','Garnitürler','Accompagnements','Guarniciones'],c_salad:['Салаты','Salate','Salads','Sałatki','Salatalar','Salades','Ensaladas'],
 c_bake:['Выпечка','Backen','Baking','Wypieki','Hamur işleri','Pâtisserie','Repostería'],c_dessert:['Десерты','Desserts','Desserts','Desery','Tatlılar','Desserts','Postres'],
 c_break:['Завтраки','Frühstück','Breakfast','Śniadania','Kahvaltı','Petit-déjeuner','Desayunos'],c_other:['Другое','Sonstiges','Other','Inne','Diğer','Autre','Otros'],
 c_butler:['Рецепты Butler','Butler-Rezepte','Butler recipes','Przepisy Butlera','Butler tarifleri','Recettes Butler','Recetas Butler'],
 nw:['＋ Новый рецепт','＋ Neues Rezept','＋ New recipe','＋ Nowy przepis','＋ Yeni tarif','＋ Nouvelle recette','＋ Nueva receta'],
 empty:['Здесь будут ваши рецепты. Добавьте первый или посмотрите рецепты Butler.','Hier stehen Ihre Rezepte. Legen Sie das erste an oder schauen Sie in die Butler-Rezepte.','Your recipes will be here. Add the first one or look at Butler’s recipes.','Tu będą Twoje przepisy. Dodaj pierwszy lub zobacz przepisy Butlera.','Tarifleriniz burada olacak. İlkini ekleyin ya da Butler tariflerine bakın.','Vos recettes seront ici. Ajoutez la première ou voyez les recettes Butler.','Aquí estarán sus recetas. Añada la primera o mire las de Butler.'],
 none:['Ничего не найдено.','Nichts gefunden.','Nothing found.','Nic nie znaleziono.','Bulunamadı.','Rien trouvé.','Nada encontrado.'],
 por:['Порции','Portionen','Servings','Porcje','Porsiyon','Portions','Raciones'],porN:['%n порц.','%n Port.','%n serv.','%n porc.','%n porsiyon','%n port.','%n rac.'],
 min:['%n мин','%n Min.','%n min','%n min','%n dk','%n min','%n min'],
 ing:['Ингредиенты','Zutaten','Ingredients','Składniki','Malzemeler','Ingrédients','Ingredientes'],steps:['Приготовление','Zubereitung','Method','Przygotowanie','Hazırlanışı','Préparation','Preparación'],
 note:['Заметки','Notizen','Notes','Notatki','Notlar','Notes','Notas'],
 cook:['👨‍🍳 Готовлю','👨‍🍳 Jetzt kochen','👨‍🍳 Cook now','👨‍🍳 Gotuję','👨‍🍳 Pişiriyorum','👨‍🍳 Je cuisine','👨‍🍳 Cocinar'],
 toList:['🛒 В список покупок','🛒 Auf die Einkaufsliste','🛒 To shopping list','🛒 Do listy zakupów','🛒 Alışveriş listesine','🛒 Dans la liste de courses','🛒 A la lista de compras'],
 toListN:['🛒 В список покупок (%n)','🛒 Auf die Einkaufsliste (%n)','🛒 To shopping list (%n)','🛒 Do listy zakupów (%n)','🛒 Alışveriş listesine (%n)','🛒 Dans la liste (%n)','🛒 A la lista (%n)'],
 edit:['Изменить','Bearbeiten','Edit','Edytuj','Düzenle','Modifier','Editar'],del:['Удалить рецепт','Rezept löschen','Delete recipe','Usuń przepis','Tarifi sil','Supprimer la recette','Eliminar receta'],
 delQ:['Удалить рецепт «%t»?','Rezept «%t» löschen?','Delete recipe “%t”?','Usunąć przepis „%t”?','“%t” silinsin mi?','Supprimer « %t » ?','¿Eliminar «%t»?'],
 copy:['Сохранить себе и изменить','Als eigenes speichern und ändern','Save as mine and edit','Zapisz jako swój i edytuj','Kendime kaydet ve düzenle','Enregistrer comme mienne','Guardar como mía y editar'],
 name:['Название','Name','Name','Nazwa','Ad','Nom','Nombre'],cat:['Раздел','Kategorie','Section','Dział','Bölüm','Rubrique','Sección'],time:['Время, мин','Zeit, Min.','Time, min','Czas, min','Süre, dk','Temps, min','Tiempo, min'],
 ingH:['По одному в строке или через запятую: «500 g Mehl, 3 Eier, 200 ml Milch»','Eine pro Zeile oder mit Komma: «500 g Mehl, 3 Eier, 200 ml Milch»','One per line or with commas: “500 g flour, 3 eggs, 200 ml milk”','Jeden w linii lub po przecinku: „500 g mąki, 3 jajka”','Satır başına bir tane ya da virgülle: «500 g un, 3 yumurta»','Un par ligne ou avec des virgules : « 500 g farine, 3 œufs »','Uno por línea o con comas: «500 g harina, 3 huevos»'],
 stepH:['Каждый шаг с новой строки','Jeder Schritt in einer neuen Zeile','Each step on a new line','Każdy krok w nowej linii','Her adım yeni satırda','Chaque étape sur une ligne','Cada paso en una línea'],
 paste:['Вставить текст рецепта целиком','Ganzen Rezepttext einfügen','Paste the whole recipe text','Wklej cały tekst przepisu','Tüm tarif metnini yapıştır','Coller tout le texte','Pegar el texto completo'],
 pasteH:['Вставьте или продиктуйте рецепт — Butler разложит его на название, ингредиенты и шаги. Потом проверьте.','Rezept einfügen oder diktieren – Butler teilt es in Name, Zutaten und Schritte. Danach bitte prüfen.','Paste or dictate a recipe – Butler splits it into name, ingredients and steps. Then check it.','Wklej lub podyktuj przepis – Butler podzieli go na nazwę, składniki i kroki. Potem sprawdź.','Tarifi yapıştırın ya da dikte edin – Butler ad, malzeme ve adımlara ayırır. Sonra kontrol edin.','Collez ou dictez une recette – Butler la découpe en nom, ingrédients et étapes. Vérifiez ensuite.','Pegue o dicte una receta: Butler la divide en nombre, ingredientes y pasos. Luego revísela.'],
 parse:['Разобрать','Aufteilen','Split it','Rozdziel','Ayır','Découper','Dividir'],
 photo:['📷 Фото блюда','📷 Foto vom Gericht','📷 Dish photo','📷 Zdjęcie dania','📷 Yemek fotoğrafı','📷 Photo du plat','📷 Foto del plato'],
 photoN:['Фото хранится только на этом телефоне.','Das Foto bleibt nur auf diesem Telefon.','The photo stays on this phone only.','Zdjęcie zostaje tylko na tym telefonie.','Fotoğraf yalnızca bu telefonda kalır.','La photo reste sur ce téléphone.','La foto se queda solo en este teléfono.'],
 save:['Сохранить','Speichern','Save','Zapisz','Kaydet','Enregistrer','Guardar'],saved:['Рецепт сохранён','Rezept gespeichert','Recipe saved','Przepis zapisany','Tarif kaydedildi','Recette enregistrée','Receta guardada'],
 needName:['Укажите название и хотя бы один ингредиент.','Bitte Name und mindestens eine Zutat angeben.','Enter a name and at least one ingredient.','Podaj nazwę i co najmniej jeden składnik.','Ad ve en az bir malzeme girin.','Indiquez un nom et au moins un ingrédient.','Indique un nombre y al menos un ingrediente.'],
 listT:['В список покупок','Auf die Einkaufsliste','To the shopping list','Do listy zakupów','Alışveriş listesine','Dans la liste de courses','A la lista de compras'],
 cost:['≈ Стоимость блюда','≈ Kosten des Gerichts','≈ Cost of the dish','≈ Koszt dania','≈ Yemeğin maliyeti','≈ Coût du plat','≈ Coste del plato'],
 perPor:['на порцию','pro Portion','per portion','na porcję','porsiyon başı','par portion','por ración'],
 costHave:['цены есть у %a из %b продуктов · считается только то, что уходит в блюдо','Preise für %a von %b Zutaten · gezählt wird nur, was ins Gericht geht','prices for %a of %b ingredients · only what goes into the dish is counted','ceny dla %a z %b składników · liczy się tylko to, co idzie do dania','%b malzemeden %a için fiyat · yalnızca yemeğe girenler sayılır','prix pour %a sur %b ingrédients · seul ce qui entre dans le plat compte','precios de %a de %b ingredientes · solo cuenta lo que va al plato'],
 costShop:['по магазину: %s','Geschäft: %s','shop: %s','sklep: %s','mağaza: %s','magasin : %s','tienda: %s'],
 home:['дома есть?','zu Hause?','at home?','w domu?','evde var mı?','à la maison ?','¿en casa?'],
 listH:['Снимите галочку с того, что уже есть дома.','Haken weg bei allem, was Sie schon zu Hause haben.','Untick what you already have at home.','Odznacz to, co masz już w domu.','Evde olanların işaretini kaldırın.','Décochez ce que vous avez déjà.','Desmarque lo que ya tiene en casa.'],
 added:['В список добавлено: %n','%n Artikel auf der Liste','%n items added to the list','Dodano do listy: %n','Listeye eklendi: %n','%n articles ajoutés','%n artículos añadidos'],
 for:['для: %t','für: %t','for: %t','do: %t','için: %t','pour : %t','para: %t'],
 stepN:['Шаг %a из %b','Schritt %a von %b','Step %a of %b','Krok %a z %b','Adım %a / %b','Étape %a sur %b','Paso %a de %b'],
 start:['Начать готовить ›','Los geht’s ›','Start cooking ›','Zaczynamy ›','Başla ›','Commencer ›','Empezar ›'],
 next:['Дальше ›','Weiter ›','Next ›','Dalej ›','İleri ›','Suivant ›','Siguiente ›'],prev:['‹ Назад','‹ Zurück','‹ Back','‹ Wstecz','‹ Geri','‹ Retour','‹ Atrás'],
 fin:['Готово! Приятного аппетита','Fertig! Guten Appetit','Done! Enjoy your meal','Gotowe! Smacznego','Bitti! Afiyet olsun','Terminé ! Bon appétit','¡Listo! Buen provecho'],
 timer:['⏱ Таймер %n мин','⏱ Timer %n Min.','⏱ Timer %n min','⏱ Minutnik %n min','⏱ Zamanlayıcı %n dk','⏱ Minuteur %n min','⏱ Temporizador %n min'],
 ring:['⏰ Время вышло: %t','⏰ Zeit ist um: %t','⏰ Time is up: %t','⏰ Czas minął: %t','⏰ Süre doldu: %t','⏰ Temps écoulé : %t','⏰ Se acabó el tiempo: %t'],
 noSteps:['Шагов нет — только ингредиенты.','Keine Schritte – nur Zutaten.','No steps – ingredients only.','Brak kroków – tylko składniki.','Adım yok – yalnızca malzemeler.','Pas d’étapes – seulement les ingrédients.','Sin pasos: solo ingredientes.'],
 ofButler:['Готовый рецепт Butler · 1 порция','Butler-Rezept · 1 Portion','Butler recipe · 1 serving','Przepis Butlera · 1 porcja','Butler tarifi · 1 porsiyon','Recette Butler · 1 portion','Receta Butler · 1 ración']};
const rct=(k,o)=>{let t=cv5n(rcS[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const RC_CATS=['soup','meat','side','salad','bake','dessert','break','other'];
const RC_BASIC=/^(?:(?:etwas|немного|some|trochę)\s+)?(salz|соль|salt|sól|tuz|sel|sal|pfeffer|schwarzer pfeffer|перец|чёрный перец|черный перец|pepper|black pepper|pieprz|biber|poivre|pimienta|wasser|вода|water|woda|su|eau|agua|öl|olivenöl|rapsöl|sonnenblumenöl|масло растительное|растительное масло|оливковое масло|подсолнечное масло|oil|olive oil|olej|oliwa|yağ|zeytinyağı|huile|huile d'olive|aceite|aceite de oliva|salz und pfeffer|соль и перец|salt and pepper)$/i;
const rcList=()=>Array.isArray(g.recipes)?g.recipes:(g.recipes=[]);
/* ---- amounts: parse, scale, merge, show ---- */
const RC_U={g:['g',1],gr:['g',1],gramm:['g',1],г:['g',1],гр:['g',1],kg:['g',1000],кг:['g',1000],mg:['g',0.001],ml:['ml',1],мл:['ml',1],l:['ml',1000],л:['ml',1000],ltr:['ml',1000],dl:['ml',100],cl:['ml',10],
 st:['pc',1],'st.':['pc',1],stk:['pc',1],'stk.':['pc',1],stück:['pc',1],шт:['pc',1],'шт.':['pc',1],pc:['pc',1],pcs:['pc',1],piece:['pc',1],pieces:['pc',1],szt:['pc',1],'szt.':['pc',1],adet:['pc',1],pièce:['pc',1],pieza:['pc',1]};
const RC_FR={'½':0.5,'¼':0.25,'¾':0.75,'⅓':1/3,'⅔':2/3};
function rcIng(line){let s=String(line||'').replace(/^[\s\-–•*·]+/,'').trim();if(!s)return null;let a=null,u='';
 const m0=s.match(/^(\d+\s?[½¼¾⅓⅔]|\d+(?:[.,]\d+)?(?:\s?[-–]\s?\d+(?:[.,]\d+)?)?|\d+\/\d+|[½¼¾⅓⅔])\s*/);if(m0){const t=m0[1].replace(/\s/g,'');if(/^\d+[½¼¾⅓⅔]$/.test(t))a=+t.slice(0,-1)+RC_FR[t.slice(-1)];else if(RC_FR[t])a=RC_FR[t];else if(t.includes('/')){const[p,q]=t.split('/');a=+p/+q}else a=parseFloat(t.split(/[-–]/).pop().replace(',','.'));s=s.slice(m0[0].length)}
 const m1=s.match(/^([A-Za-zÄÖÜäöüßА-Яа-яЁё]+\.?)(?:\s+|$)/);if(m1){const k=m1[1].toLowerCase();if(RC_U[k]||RC_U[k.replace(/\.$/,'')]||/^(el|tl|prise|prisen|pck|pck\.|päckchen|pkg|bund|dose|dosen|becher|tasse|tassen|cup|cups|tbsp|tsp|zehe|zehen|scheibe|scheiben|ст\.?л\.?|ч\.?л\.?|щепотка|щепотки|пучок|зубчик|зубчика|банка|стакан|łyżka|łyżki|łyżeczka|szczypta|kaşık|tutam|c\.à\.s|cuillère|pincée|cucharada|cucharadita|pizca)$/i.test(k)){u=m1[1];s=s.slice(m1[0].length)}}
 s=s.replace(/^(von|of|de|du|des|del)\s+/i,'').trim();if(!s)return null;return{a:a!=null&&isFinite(a)?Math.round(a*1000)/1000:null,u,n:s.charAt(0).toUpperCase()+s.slice(1)}}
const rcIngs=txt=>String(txt||'').split(/\n|,(?![^(]*\))(?!\d)/).map(rcIng).filter(Boolean);
const rcBase=x=>{const k=String(x.u||'').toLowerCase();const r=RC_U[k]||RC_U[k.replace(/\.$/,'')];if(x.a==null)return{k:'?',v:null};if(r)return{k:r[0],v:x.a*r[1]};if(!x.u)return{k:'pc',v:x.a};return{k:'u:'+k.replace(/\.$/,''),v:x.a,u:x.u}};
const rcNum=n=>{const r=n>=100?Math.round(n):n>=10?Math.round(n*10)/10:Math.round(n*100)/100;return String(r).replace('.',g.lang==='en'?'.':',')};
const rcShow=(k,v,u)=>{if(v==null)return'';if(k==='g')return v>=1000?rcNum(v/1000)+' kg':rcNum(v)+' g';if(k==='ml')return v>=1000?rcNum(v/1000)+' l':rcNum(v)+' ml';if(k==='pc'){const n=Math.ceil(v*2)/2;return rcNum(n)+' '+cv5n(['шт.','Stk.','pcs','szt.','adet','pc','ud.'])}return rcNum(v)+' '+(u||k.slice(2))};
const rcAmt=(x,f)=>{if(x.a==null)return x.u||'';const b=rcBase({a:x.a*f,u:x.u});return rcShow(b.k,b.v,x.u)};
/* ---- Butler's ready recipes (Sport → Nutrition) as read-only book entries ---- */
function rcButler(){try{return UN.map(e=>({id:'b:'+e[0],t:Gn(e[2]),cat:'butler',por:1,time:0,ing:e[1].map(([p,gr])=>{const P=Rh(p);return{a:gr,u:'g',n:P?P.name:p}}),steps:[],src:'butler'}))}catch{return[]}}
const rcGet=id=>String(id||'').startsWith('b:')?rcButler().find(r=>r.id===id):rcList().find(r=>r.id===id);
const rcPhoto=id=>{try{return localStorage.getItem('bh-rph-'+id)||''}catch{return''}};
const rcPorOf=r=>Math.max(1,(m.rcPor||{})[r.id]||r.por||1);
/* ---- screens ---- */
const rcHdr=(t,right)=>`<div class="sub-hdr"><button class="iconbtn" data-act="rzbback" aria-label="back">${_('back')}</button><div class="ttl"><h2>${i(t)}</h2></div>${right||'<span></span>'}</div>`;
function rcBook(){const q=(m.rcQ||'').trim().toLowerCase(),c=m.rcC||'all',sel=m.rcSel||(m.rcSel={});const own=rcList(),bt=rcButler();
 let L=c==='butler'?bt:c==='fav'?own.filter(r=>r.fav):c==='all'?own:own.filter(r=>(r.cat||'other')===c);if(q)L=(c==='all'?own.concat(bt):L).filter(r=>r.t.toLowerCase().includes(q)||(r.ing||[]).some(x=>x.n.toLowerCase().includes(q)));
 const used=new Set(own.map(r=>r.cat||'other'));const chips=[['all',rct('all')],['fav',rct('fav')]].concat(RC_CATS.filter(k=>used.has(k)).map(k=>[k,rct('c_'+k)])).concat([['butler',rct('c_butler')]]);
 const nSel=Object.keys(sel).filter(k=>sel[k]).length;
 const card=r=>{const ph=rcPhoto(r.id);return`<div class="rzbcard${sel[r.id]?' on':''}"><button type="button" class="rzbck" data-act="rzbsel" data-id="${i(r.id)}" aria-label="✓">${sel[r.id]?'✓':''}</button><button type="button" class="rzbbody" data-act="rzbopen" data-id="${i(r.id)}">${ph?`<img src="${ph}" alt="">`:`<span class="rzbph">${r.src==='butler'?'🥗':'🍲'}</span>`}<span class="rzbt"><b>${i(r.t)}</b><small>${i(rct('porN',{n:r.por||1}))}${r.time?' · '+i(rct('min',{n:r.time})):''} · ${(r.ing||[]).length} ${i(rct('ing').toLowerCase())}</small></span>${r.fav?'<em>★</em>':''}</button></div>`};
 return`<div class="screen rzbv0">${rcHdr(rct('book'),`<button class="iconbtn" data-act="rzbnew" aria-label="+">＋</button>`)}
 <input class="field rzbq" type="search" placeholder="🔍 ${i(rct('find'))}" value="${i(m.rcQ||'')}" data-rcq="1">
 <div class="rzbchips">${chips.map(([k,t])=>`<button type="button" class="${c===k?'on':''}" data-act="rzbcat" data-k="${k}">${i(t)}</button>`).join('')}</div>
 ${L.length?`<div class="rzblist">${L.map(card).join('')}</div>`:`<p class="rzbnone">${i(q?rct('none'):rct('empty'))}</p>`}
 <button type="button" class="rzbnew" data-act="rzbnew">${i(rct('nw'))}</button>
 ${nSel?`<div class="rzbbar"><button type="button" data-act="rzbtolist">${i(rct('toListN',{n:nSel}))}</button></div>`:''}</div>`}
/* what the dish costs: share of each pack actually used; basics (salt, oil, water) left out */
function rcCost(r,f){if(typeof e2price!=='function')return null;let sum=0,have=0,all=0;(r.ing||[]).forEach(x=>{if(RC_BASIC.test(String(x.n||'').trim()))return;all++;const b=rcBase({a:x.a==null?null:x.a*f,u:x.u});let p=null;try{p=e2price({t:x.n,rq:b.v!=null&&/^(g|ml|pc)$/.test(b.k)?{k:b.k,v:b.v}:null})}catch{}if(!p)return;
 let c=null;if(p.pk&&b.v!=null&&p.pk.k===b.k)c=p.p*b.v/p.pk.v;else if(!p.pk&&b.k==='pc'&&b.v!=null)c=p.p*b.v;if(c==null)return;sum+=c;have++});return all?{sum:Math.round(sum),have,all}:null}
function rcView(){const r=rcGet(m.rcId);if(!r)return rcBook();const por=rcPorOf(r),f=por/(r.por||1),ph=rcPhoto(r.id);
 return`<div class="screen rzbv0 rzbview">${rcHdr(r.t,r.src==='butler'?'<span></span>':`<button class="iconbtn rzbstar${r.fav?' on':''}" data-act="rzbfav" aria-label="★">${r.fav?'★':'☆'}</button>`)}
 ${ph?`<img class="rzbimg" src="${ph}" alt="">`:''}
 <p class="rzbmeta">${r.src==='butler'?i(rct('ofButler')):i(rct('c_'+(r.cat||'other')))}${r.time?' · ⏱ '+i(rct('min',{n:r.time})):''}</p>
 <div class="rzbpor"><span>${i(rct('por'))}</span><button type="button" data-act="rzbpor" data-d="-1">−</button><b>${por}</b><button type="button" data-act="rzbpor" data-d="1">+</button></div>
 <div class="rzbacts"><button type="button" class="rzbbig" data-act="rzbcook">${i(rct('cook'))}</button><button type="button" class="rzbbig2" data-act="rzbonelist">${i(rct('toList'))}</button></div>
 <h3 class="rzbh">${i(rct('ing'))}</h3><ul class="rzbing">${(r.ing||[]).map(x=>`<li><b>${i(rcAmt(x,f))}</b><span>${i(x.n)}</span></li>`).join('')}</ul>
 ${(()=>{const C=rcCost(r,f);if(!C||!C.have)return'';return`<div class="rzbcost"><div><span>${i(rct('cost'))}</span><b>${i(e2money(C.sum))}</b></div><div><span>${i(rct('perPor'))}</span><b>${i(e2money(Math.round(C.sum/por)))}</b></div><small>${i(rct('costHave',{a:C.have,b:C.all}))}${m.k43shop?' · '+i(rct('costShop',{s:m.k43shop})):''}</small></div>`})()}
 ${(r.steps||[]).length?`<h3 class="rzbh">${i(rct('steps'))}</h3><ol class="rzbsteps">${r.steps.map(s=>`<li>${i(s)}</li>`).join('')}</ol>`:''}
 ${r.note?`<h3 class="rzbh">${i(rct('note'))}</h3><p class="rzbnote">${i(r.note)}</p>`:''}
 ${r.src==='butler'?`<button type="button" class="rzblink" data-act="rzbcopy">${i(rct('copy'))}</button>`:`<div class="rzbfoot"><button type="button" class="rzblink" data-act="rzbedit">✎ ${i(rct('edit'))}</button><button type="button" class="rzblink red" data-act="rzbdel">${i(rct('del'))}</button></div>`}</div>`}
function rcEdit(){const d=m.rcDraft||(m.rcDraft={t:'',cat:'other',por:4,time:'',ingTxt:'',stepTxt:'',note:''});const ph=d.photo!=null?d.photo:(d.id?rcPhoto(d.id):'');
 return`<div class="screen rzbv0 rzbedit">${rcHdr(d.id?rct('edit'):rct('nw').replace(/^＋\s*/,''))}
 <details class="rzbpaste"${d.id?'':' open'}><summary>✦ ${i(rct('paste'))}</summary><p class="fdsmall">${i(rct('pasteH'))}</p><textarea class="field" rows="6" data-rcf="paste">${i(m.rcPaste||'')}</textarea><button type="button" class="st32btn2" data-act="rzbparse">${i(rct('parse'))}</button></details>
 <label class="rzbf"><span>${i(rct('name'))}</span><input class="field" value="${i(d.t)}" data-rcf="t"></label>
 <div class="rzbrow3"><label class="rzbf"><span>${i(rct('cat'))}</span><select class="field" data-rcf="cat">${RC_CATS.map(k=>`<option value="${k}"${d.cat===k?' selected':''}>${i(rct('c_'+k))}</option>`).join('')}</select></label>
 <label class="rzbf"><span>${i(rct('por'))}</span><input class="field" type="number" inputmode="numeric" min="1" max="50" value="${i(d.por)}" data-rcf="por"></label><label class="rzbf"><span>${i(rct('time'))}</span><input class="field" type="number" inputmode="numeric" min="0" value="${i(d.time)}" data-rcf="time"></label></div>
 <label class="rzbf"><span>${i(rct('ing'))}</span><small>${i(rct('ingH'))}</small><textarea class="field" rows="7" data-rcf="ingTxt">${i(d.ingTxt)}</textarea></label>
 <label class="rzbf"><span>${i(rct('steps'))}</span><small>${i(rct('stepH'))}</small><textarea class="field" rows="7" data-rcf="stepTxt">${i(d.stepTxt)}</textarea></label>
 <label class="rzbf"><span>${i(rct('note'))}</span><textarea class="field" rows="2" data-rcf="note">${i(d.note)}</textarea></label>
 <div class="rzbphoto">${ph?`<img src="${ph}" alt="">`:''}<label class="st32btn2">${i(rct('photo'))}<input type="file" accept="image/*" hidden data-rcphoto="1"></label><small>${i(rct('photoN'))}</small></div>
 <button type="button" class="rzbbig" data-act="rzbsave">${i(rct('save'))}</button></div>`}
function rcCook(){const r=rcGet(m.rcId);if(!r)return rcBook();const K=m.rcK||(m.rcK={step:-1,done:{}}),por=rcPorOf(r),f=por/(r.por||1),S=r.steps||[],T=m.rcTm;
 const top=`<div class="rzbkt"><button type="button" class="rzbkx" data-act="rzbback" aria-label="×">✕</button><b>${i(r.t)}</b><span>${i(rct('porN',{n:por}))}</span></div>${T?`<div class="rzbtm" data-rctm="1">⏱ <b>--:--</b> <small>${i(T.l)}</small> <button type="button" data-act="rzbtmx">✕</button></div>`:''}`;
 if(K.step<0)return`<div class="screen rzbk">${top}<h3 class="rzbh">${i(rct('ing'))}</h3><ul class="rzbkin">${(r.ing||[]).map((x,j)=>`<li class="${K.done[j]?'d':''}" data-act="rzbkdone" data-j="${j}"><i>${K.done[j]?'✓':''}</i><b>${i(rcAmt(x,f))}</b><span>${i(x.n)}</span></li>`).join('')}</ul>
  <div class="rzbknav"><span></span><button type="button" class="rzbbig" data-act="rzbstep" data-d="1">${i(S.length?rct('start'):rct('fin'))}</button></div></div>`;
 if(K.step>=S.length)return`<div class="screen rzbk">${top}<div class="rzbkfin">🍽<p>${i(rct('fin'))}</p></div><div class="rzbknav"><button type="button" class="rzbbig2" data-act="rzbstep" data-d="-1">${i(rct('prev'))}</button><button type="button" class="rzbbig" data-act="rzbback">✓</button></div></div>`;
 const st=S[K.step],tm=(st.match(/(\d+)\s*(?:-\s*\d+\s*)?(?:min\.?|minuten|minutes|minute|минут[аы]?|мин\.?|dk|dakika|minut[y]?|minutos?)(?![A-Za-zА-Яа-яЁё])/i)||[])[1];
 return`<div class="screen rzbk">${top}<p class="rzbkn">${i(rct('stepN',{a:K.step+1,b:S.length}))}</p><div class="rzbkst" data-rcsw="1">${i(st)}</div>
  ${tm?`<button type="button" class="rzbbig2" data-act="rzbtm" data-n="${tm}">${i(rct('timer',{n:tm}))}</button>`:''}
  <div class="rzbknav"><button type="button" class="rzbbig2" data-act="rzbstep" data-d="-1">${i(rct('prev'))}</button><button type="button" class="rzbbig" data-act="rzbstep" data-d="1">${i(K.step===S.length-1?'✓':rct('next'))}</button></div></div>`}
['rcb','rcv','rce','rck'].forEach(r=>{Te.includes(r)||Te.push(r)});
(Hooks.h.screen=Hooks.h.screen||[]).unshift(()=>{try{if(m.route==='rcb')return rcBook();if(m.route==='rcv')return rcView();if(m.route==='rce')return rcEdit();if(m.route==='rck')return rcCook()}catch(e){Hooks.err('rcscreen',e)}});
const rcRe=()=>{try{k3keep(()=>v())}catch{try{v()}catch{}}};
/* back: cooking → recipe → book → where the book was opened from */
function rcBack(){const r=m.route;if(r==='rck'){rcWake(!1);R('rcv',void 0,!0);return}if(r==='rce'){const d=m.rcDraft;m.rcDraft=null;if(d&&d.id&&rcGet(d.id)){m.rcId=d.id;R('rcv',void 0,!0)}else R('rcb',void 0,!0);return}
 if(r==='rcv'){R('rcb',void 0,!0);return}const to=m.rcFrom||'kblist';m.rcFrom='';if(to==='sx'){R('sxnut',void 0,!0);return}R(to==='home'?'home':to,void 0,!0)}
Hooks.act('rzbback',rcBack);
window.addEventListener('click',e=>{try{if(!/^rc[bvek]$/.test(m.route||''))return;const b=e.target.closest&&e.target.closest('.screen > .sub-hdr > button:first-child');if(!b)return;e.preventDefault();e.stopImmediatePropagation();rcBack()}catch{}},!0);
Hooks.act('rzbbook',()=>{m.rcFrom=m.route==='kblist'?'kblist':m.route==='sxnut'?'sx':m.route||'kblist';R('rcb')});
Hooks.act('rzbcat',e=>{m.rcC=e.k;rcRe()});
Hooks.act('rzbsel',e=>{const s=m.rcSel||(m.rcSel={});s[e.id]=!s[e.id];rcRe()});
Hooks.act('rzbopen',e=>{m.rcId=e.id;R('rcv')});
Hooks.act('rzbfav',()=>{const r=rcGet(m.rcId);if(r&&r.src!=='butler'){r.fav=!r.fav;$();rcRe()}});
Hooks.act('rzbpor',e=>{const r=rcGet(m.rcId);if(!r)return;const P=m.rcPor||(m.rcPor={});P[r.id]=Math.max(1,Math.min(50,rcPorOf(r)+(+e.d||0)));rcRe()});
Hooks.act('rzbnew',()=>{m.rcDraft=null;m.rcPaste='';R('rce')});
const rcToDraft=r=>({id:r.src==='butler'?'':r.id,t:r.t,cat:r.cat==='butler'?'other':(r.cat||'other'),por:r.por||1,time:r.time||'',ingTxt:(r.ing||[]).map(x=>[x.a!=null?rcNum(x.a):'',x.u,x.n].filter(Boolean).join(' ')).join('\n'),stepTxt:(r.steps||[]).join('\n'),note:r.note||''});
Hooks.act('rzbedit',()=>{const r=rcGet(m.rcId);if(!r)return;m.rcDraft=rcToDraft(r);R('rce')});
Hooks.act('rzbcopy',()=>{const r=rcGet(m.rcId);if(!r)return;m.rcDraft=rcToDraft(r);m.rcDraft.id='';R('rce')});
Hooks.act('rzbdel',()=>{const r=rcGet(m.rcId);if(!r||r.src==='butler')return;if(!confirm(rct('delQ',{t:r.t})))return;g.recipes=rcList().filter(x=>x.id!==r.id);try{localStorage.removeItem('bh-rph-'+r.id)}catch{}$();R('rcb',void 0,!0)});
/* whole recipe text → name, portions, time, ingredients, steps */
function rcParseText(txt){const L=String(txt||'').split(/\n/).map(s=>s.trim()).filter(Boolean),d={t:'',por:'',time:'',ing:[],steps:[]};let mode='';
 const ingH=/^(zutaten|ингредиенты|продукты|ingredients|składniki|malzemeler|ingrédients|ingredientes)(?=$|[\s:(])/i,stH=/^(zubereitung|приготовление|способ приготовления|preparation|method|directions|instructions|przygotowanie|hazırlanışı|préparation|preparación)(?=$|[\s:(])/i;
 L.forEach((s,k)=>{const pm=s.match(/(?:für|на|for|dla|için|pour|para)\s+(\d+)\s*(?:personen|portionen|порци|человек|persons?|people|servings?|porcj|osób|kişi|porsiyon|personnes|portions|personas|raciones)/i)||s.match(/(?:portionen|порции|servings|porcje|porsiyon|portions|raciones)\s*:?\s*(\d+)/i);if(pm&&!d.por)d.por=+pm[1];
  const tm=s.match(/(\d+)\s*(?:min|мин)/i),tl=tm&&/^(?:[^\d]{0,30})(zeit|время|time|czas|süre|temps|tiempo)/i.test(s)&&s.length<40;if(tl){if(!d.time)d.time=+tm[1];return}
  if(ingH.test(s)){mode='i';return}if(stH.test(s)){mode='s';return}
  if(!d.t&&k===0&&!/^\d/.test(s)&&s.length<70){d.t=s;return}
  const numbered=/^\d+\s?[.)]\s+\S/.test(s),x=numbered?null:rcIng(s),looksIng=/^[\-–•*·]?\s*(\d|[½¼¾])/.test(s)&&s.length<70&&x;
  if((mode==='i'||(!mode&&looksIng))&&x&&s.length<80&&!(mode==='s')){d.ing.push(x);return}
  if(pm)return;const st=s.replace(/^(\d+\s?[.)]|schritt\s*\d+:?|шаг\s*\d+:?|step\s*\d+:?)\s*/i,'');if(st)d.steps.push(st)});return d}
Hooks.act('rzbparse',()=>{const P=rcParseText(m.rcPaste),d=m.rcDraft||(m.rcDraft={t:'',cat:'other',por:4,time:'',ingTxt:'',stepTxt:'',note:''});if(P.t){d.t=P.t;const w=P.t.toLowerCase();const G=[['bake',/торт|пирог|кекс|печень|хлеб|булоч|kuchen|torte|cake|brot|keks|muffin|pie|ciasto|kek|gâteau|tarta|bizcocho/],['soup',/суп|борщ|щи|солянк|бульон|suppe|soup|zupa|çorba|soupe|sopa/],['salad',/салат|salat|salad|sałat|salata|salade|ensalada/],['dessert',/десерт|пудинг|мусс|dessert|pudding|deser|tatlı|postre/],['break',/завтрак|каша|омлет|сырник|блин|frühstück|porridge|omelett|breakfast|śniadan|kahvaltı|petit-déj|desayuno/],['meat',/мяс|котлет|куриц|говяд|свин|рыб|fleisch|hähnchen|schnitzel|fisch|meat|chicken|beef|fish|mięs|kurczak|et |tavuk|viande|poulet|carne|pollo|pescado/],['side',/гарнир|пюре|рис|картоф|макарон|beilage|reis|kartoffel|nudel|pasta|side|ziemniak|pilav|accompagnement|guarnición/]];const h=G.find(([,re])=>re.test(w));if(h&&(!d.cat||d.cat==='other'))d.cat=h[0]}if(P.por)d.por=P.por;if(P.time)d.time=P.time;
 if(P.ing.length)d.ingTxt=P.ing.map(x=>[x.a!=null?rcNum(x.a):'',x.u,x.n].filter(Boolean).join(' ')).join('\n');if(P.steps.length)d.stepTxt=P.steps.join('\n');rcRe()});
Hooks.act('rzbsave',()=>{const d=m.rcDraft;if(!d)return;const ing=rcIngs(d.ingTxt);if(!String(d.t).trim()||!ing.length){T(rct('needName'));return}
 const rec={id:d.id||V(),t:String(d.t).trim().slice(0,80),cat:d.cat||'other',por:Math.max(1,parseInt(d.por,10)||1),time:parseInt(d.time,10)||0,ing,steps:String(d.stepTxt||'').split(/\n/).map(s=>s.replace(/^\d+[.)]\s*/,'').trim()).filter(Boolean),note:String(d.note||'').trim(),d:Date.now()};
 const L=rcList(),ex=L.find(x=>x.id===rec.id);if(ex){rec.fav=ex.fav;Object.assign(ex,rec)}else L.unshift(rec);
 if(d.photo){try{localStorage.setItem('bh-rph-'+rec.id,d.photo)}catch{}}$();m.rcDraft=null;m.rcId=rec.id;T(rct('saved'));R('rcv')});
document.addEventListener('input',e=>{const t=e.target;if(!t||!t.dataset)return;if(t.dataset.rcq){m.rcQ=t.value;clearTimeout(rcRe.t);rcRe.t=setTimeout(()=>{rcRe();const el=document.querySelector('[data-rcq]');if(el){el.focus();el.setSelectionRange(el.value.length,el.value.length)}},250)}
 const f=t.dataset.rcf;if(f){if(f==='paste')m.rcPaste=t.value;else{const d=m.rcDraft||(m.rcDraft={t:'',cat:'other',por:4,time:'',ingTxt:'',stepTxt:'',note:''});d[f]=t.value}}},!0);
document.addEventListener('change',async e=>{const t=e.target;if(!t||!t.dataset||!t.dataset.rcphoto)return;const f=t.files&&t.files[0];if(!f)return;try{const b=await createImageBitmap(f),k=Math.min(1,640/Math.max(b.width,b.height)),c=document.createElement('canvas');c.width=Math.round(b.width*k);c.height=Math.round(b.height*k);c.getContext('2d').drawImage(b,0,0,c.width,c.height);const d=m.rcDraft||(m.rcDraft={});d.photo=c.toDataURL('image/jpeg',0.72);rcRe()}catch(er){Hooks.err('rcphoto',er)}},!0);
/* ---- recipes → shopping list ---- */
function rcMerge(picks){const M=new Map();picks.forEach(({r,por})=>{const f=por/(r.por||1);(r.ing||[]).forEach(x=>{const b=rcBase({a:x.a==null?null:x.a*f,u:x.u}),key=x.n.toLowerCase().replace(/\s+/g,' ').trim()+'|'+b.k;
  const o=M.get(key)||{n:x.n,k:b.k,v:0,u:b.u||x.u,from:new Set(),on:!RC_BASIC.test(x.n.trim())};if(b.v!=null)o.v+=b.v;o.from.add(r.t);M.set(key,o)})});return[...M.values()]}
function rcListSheet(picks){const items=rcMerge(picks);const sh=H(rct('listT'),'<div class="rzbls"></div>',()=>{}),box=sh.querySelector('.rzbls');
 const draw=()=>{box.innerHTML=`<p class="fdsmall">${i(rct('listH'))}</p>${picks.length>1||1?`<div class="rzblsp">${picks.map((p,j)=>`<div><span>${i(p.r.t)}</span><button type="button" data-pp="${j}" data-d="-1">−</button><b>${p.por}</b><button type="button" data-pp="${j}" data-d="1">+</button></div>`).join('')}</div>`:''}
  <div class="rzblsi">${items.map((o,j)=>`<button type="button" class="${o.on?'on':''}" data-ii="${j}"><i>${o.on?'✓':''}</i><span>${i(o.n)}${!o.on&&RC_BASIC.test(o.n.trim())?` <small>${i(rct('home'))}</small>`:''}</span><b>${i(rcShow(o.k,o.v||null,o.u))}</b></button>`).join('')}</div>
  <button type="button" class="rzbbig" data-go>${i(rct('toListN',{n:items.filter(o=>o.on).length}))}</button>`;
  box.querySelectorAll('[data-pp]').forEach(b=>b.onclick=()=>{const p=picks[+b.dataset.pp];p.por=Math.max(1,Math.min(50,p.por+(+b.dataset.d)));const keep=new Map(items.map(o=>[o.n.toLowerCase()+'|'+o.k,o.on]));items.splice(0,items.length,...rcMerge(picks));items.forEach(o=>{const k=o.n.toLowerCase()+'|'+o.k;if(keep.has(k))o.on=keep.get(k)});draw()});
  box.querySelectorAll('[data-ii]').forEach(b=>b.onclick=()=>{const o=items[+b.dataset.ii];o.on=!o.on;draw()});
  box.querySelector('[data-go]').onclick=()=>{const L=Yl(1);let n=0;items.filter(o=>o.on).forEach(o=>{const from=[...o.from];let ex=(L.items||[]).find(x=>!x.d&&(x.t.toLowerCase()===o.n.toLowerCase()||(typeof e2match==='function'&&e2match(x.t,o.n))));
   if(ex){if(ex.rq&&ex.rq.k===o.k&&o.v){ex.rq.v+=o.v;ex.q=rcShow(o.k,ex.rq.v,o.u)}else if(!ex.q&&o.v){ex.rq={k:o.k,v:o.v};ex.q=rcShow(o.k,o.v,o.u)}ex.from=[...new Set((ex.from||[]).concat(from))].slice(0,6)}
   else{const it={t:o.n,d:!1,q:o.v?rcShow(o.k,o.v,o.u):'',from};if(o.v)it.rq={k:o.k,v:o.v};L.items.push(it)}n++});
   $();sh.remove();m.rcSel={};T(rct('added',{n}));R('kblist')}};draw()}
Hooks.act('rzbtolist',()=>{const s=m.rcSel||{};const picks=Object.keys(s).filter(k=>s[k]).map(id=>rcGet(id)).filter(Boolean).map(r=>({r,por:rcPorOf(r)}));if(picks.length)rcListSheet(picks)});
Hooks.act('rzbonelist',()=>{const r=rcGet(m.rcId);if(r)rcListSheet([{r,por:rcPorOf(r)}])});
/* ---- cooking mode: steps, timers, screen stays on ---- */
let rcLock=null;async function rcWake(on){try{if(on){if(!rcLock&&navigator.wakeLock)rcLock=await navigator.wakeLock.request('screen')}else if(rcLock){await rcLock.release();rcLock=null}}catch{rcLock=null}}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&m.route==='rck'){rcLock=null;rcWake(!0)}});
Hooks.act('rzbcook',()=>{m.rcK={step:-1,done:{}};R('rck');rcWake(!0)});
Hooks.act('rzbstep',e=>{const r=rcGet(m.rcId),K=m.rcK||(m.rcK={step:-1,done:{}});const n=(r&&r.steps||[]).length;K.step=Math.max(-1,Math.min(n,K.step+(+e.d||0)));if(n===0&&+e.d>0)K.step=0;rcRe();try{window.scrollTo(0,0)}catch{}});
Hooks.act('rzbkdone',e=>{const K=m.rcK||(m.rcK={step:-1,done:{}});K.done[e.j]=!K.done[e.j];rcRe()});
Hooks.act('rzbtm',e=>{const r=rcGet(m.rcId);m.rcTm={end:Date.now()+(+e.n||1)*60000,l:(r?r.t+' · ':'')+rct('stepN',{a:(m.rcK||{}).step+1,b:(r&&r.steps||[]).length})};rcRe()});
Hooks.act('rzbtmx',()=>{m.rcTm=null;rcRe()});
setInterval(()=>{try{const T2=m.rcTm;if(!T2)return;const left=Math.max(0,Math.round((T2.end-Date.now())/1000));const el=document.querySelector('[data-rctm] b');if(el)el.textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0');
 if(left<=0){m.rcTm=null;try{navigator.vibrate&&navigator.vibrate([300,150,300,150,300])}catch{}try{const A=new(window.AudioContext||window.webkitAudioContext)(),o=A.createOscillator(),gn=A.createGain();o.frequency.value=880;o.connect(gn);gn.connect(A.destination);gn.gain.value=0.15;o.start();setTimeout(()=>{o.stop();A.close()},900)}catch{}T(rct('ring',{t:T2.l}));rcRe()}}catch{}},1000);
/* swipe between steps */
{let sx=null;document.addEventListener('touchstart',e=>{if(m.route==='rck'&&e.touches[0])sx=e.touches[0].clientX},{passive:!0});document.addEventListener('touchend',e=>{if(m.route!=='rck'||sx==null)return;const dx=(e.changedTouches[0]||{}).clientX-sx;sx=null;if(Math.abs(dx)>70){const b=document.querySelector(`[data-act=rzbstep][data-d="${dx<0?1:-1}"]`);b&&b.click()}},{passive:!0})}
Hooks.on('render',()=>{try{document.documentElement.classList.toggle('rzbkon',m.route==='rck')}catch{}});
/* ---- entry points: a tile on the shopping list, a link in Nutrition → Recipes; dishes on list rows ---- */
Hooks.on('render',()=>{try{if(m.route==='kblist'){const t=document.querySelector('.screen.k43 .e2tiles');if(t&&!t.querySelector('[data-act=rzbbook]')){t.insertAdjacentHTML('afterbegin',`<button type="button" data-act="rzbbook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11M9 8h6"/></svg><span>${i(rct('tile'))}</span></button>`);t.classList.add('e2t5')}
  const L=Yl().items||[];document.querySelectorAll('.screen.k43 .k4r').forEach(r=>{const k=+((r.querySelector('[data-i]')||{}).dataset||{}).i,x=L[k];if(!x||!x.from||!x.from.length||r.querySelector('.rzbfrom'))return;const n=r.querySelector('.n');n&&n.insertAdjacentHTML('beforeend',`<small class="rzbfrom">${i(rct('for',{t:x.from.join(', ')}))}</small>`)})}
 if(m.route==='sxnut'&&m.sxT==='rec'){const sc=document.querySelector('.screen.sxv');if(sc&&!sc.querySelector('.rzbin')){const tabs=sc.querySelector('.dcitabs');tabs&&tabs.insertAdjacentHTML('afterend',`<button type="button" class="rzbin" data-act="rzbbook">📖 ${i(rct('book'))} ›</button>`)}}}catch(e){Hooks.err('rcentry',e)}});
Hooks.css('recipe-book',`
.screen.rzbv0{display:flex;flex-direction:column;gap:12px}.screen.rzbv0>*{flex-shrink:0}
.rzbq{font-size:16px}.rzbchips{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}.rzbchips::-webkit-scrollbar{display:none}
.rzbchips button{flex:0 0 auto;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:14px;padding:7px 14px;border-radius:999px;cursor:pointer;white-space:nowrap}.rzbchips button.on{background:var(--gold);color:#17130b;border-color:transparent}
.rzblist{display:flex;flex-direction:column;gap:10px}.rzbcard{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--line);border-radius:18px;background:var(--surface)}.rzbcard.on{border-color:var(--gold);background:var(--gold-soft)}
.rzbck{width:30px;height:30px;flex:0 0 auto;border-radius:9px;border:1.5px solid var(--gold);background:transparent;color:#17130b;font-size:16px;cursor:pointer}.rzbcard.on .rzbck{background:var(--gold)}
.rzbbody{flex:1;min-width:0;display:flex;align-items:center;gap:12px;border:0;background:transparent;color:var(--ink);font:inherit;text-align:left;cursor:pointer;padding:0}
.rzbbody img,.rzbph{width:58px;height:58px;border-radius:14px;object-fit:cover;flex:0 0 auto}.rzbph{display:flex;align-items:center;justify-content:center;background:var(--field);font-size:28px}
.rzbt{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}.rzbt b{font-size:16px;font-weight:600}.rzbt small{font-size:13px;color:var(--muted)}.rzbbody em{font-style:normal;color:var(--gold)}
.rzbnone{color:var(--muted);text-align:center;padding:20px 8px}
.rzbnew{border:1.5px dashed var(--gold);background:transparent;color:var(--gold);font:inherit;font-size:15px;padding:14px;border-radius:16px;cursor:pointer}
.rzbbar{position:sticky;bottom:calc(84px + env(safe-area-inset-bottom));z-index:5}.rzbbar button,.rzbbig{width:100%;text-align:center;border:0;border-radius:999px;padding:15px;font:inherit;font-size:16px;font-weight:600;color:#17130b;background:linear-gradient(180deg,color-mix(in srgb,var(--gold) 75%,#fff),var(--gold));cursor:pointer;box-shadow:0 6px 16px rgba(0,0,0,.18)}
.rzbbig2{width:100%;text-align:center;border:1.5px solid var(--gold);border-radius:999px;padding:14px;font:inherit;font-size:16px;color:var(--ink);background:var(--surface);cursor:pointer}
.rzbimg{width:100%;max-height:260px;object-fit:cover;border-radius:20px}.rzbmeta{margin:0;color:var(--muted);font-size:14px}
.rzbpor{display:flex;align-items:center;gap:12px;padding:10px 14px;border:1px solid var(--line);border-radius:16px;background:var(--surface)}.rzbpor span{flex:1;font-size:15px}.rzbpor b{min-width:28px;text-align:center;font-size:20px;font-family:-apple-system,system-ui,sans-serif}
.rzbpor button,.rzblsp button{width:38px;height:38px;border-radius:50%;border:1px solid var(--gold);background:transparent;color:var(--ink);font-size:20px;cursor:pointer}
.rzbacts{display:grid;grid-template-columns:1fr;gap:8px}
.rzbh{margin:8px 0 0;font-size:17px;font-weight:600;font-family:inherit;letter-spacing:0;text-transform:none}
.rzbcost{margin:14px 0 4px;padding:14px 16px;border:1px solid var(--gold);border-radius:18px;background:var(--gold-soft)}.rzbcost div{display:flex;justify-content:space-between;align-items:baseline;padding:3px 0}.rzbcost b{font-size:18px;font-family:-apple-system,system-ui,sans-serif}.rzbcost div+div b{font-size:15px}.rzbcost small{display:block;margin-top:6px;color:var(--muted);font-size:12.5px;line-height:1.35}
.rzbing{list-style:none;margin:0;padding:0}.rzbing li{display:grid;grid-template-columns:96px 1fr;gap:12px;padding:9px 0;border-top:1px solid var(--line);font-size:16px}.rzbing li:first-child{border-top:0}.rzbing b{font-weight:600;font-family:-apple-system,system-ui,sans-serif;font-size:15px;text-align:right;color:var(--gold)}
.rzbsteps{margin:0;padding-left:22px;display:flex;flex-direction:column;gap:10px}.rzbsteps li{font-size:16px;line-height:1.5}.rzbnote{margin:0;font-size:15px;line-height:1.5;color:var(--muted)}
.rzbfoot{display:flex;justify-content:space-between}.rzblink{border:0;background:transparent;color:var(--gold);font:inherit;font-size:15px;padding:8px 0;cursor:pointer;text-align:left}.rzblink.red{color:#c0563f}
.rzbf{display:flex;flex-direction:column;gap:4px;font-size:14px;color:var(--muted)}.rzbf small{font-size:12.5px}.rzbf textarea,.rzbf input,.rzbf select{font-size:16px}.rzbrow3{display:grid;grid-template-columns:1.4fr .8fr .8fr;gap:8px}
.rzbpaste{border:1px solid var(--line);border-radius:16px;padding:10px 14px;background:var(--surface)}.rzbpaste summary{cursor:pointer;color:var(--gold);font-size:15px}.rzbpaste textarea{width:100%;margin:6px 0 8px;font-size:15px}
.rzbphoto{display:flex;flex-direction:column;gap:6px;align-items:flex-start}.rzbphoto img{width:120px;height:90px;object-fit:cover;border-radius:12px}.rzbphoto small{color:var(--muted);font-size:12.5px}
.rzbls .rzblsp{display:flex;flex-direction:column;gap:6px;margin:10px 0}.rzblsp div{display:flex;align-items:center;gap:10px}.rzblsp span{flex:1;font-size:15px}.rzblsp b{min-width:24px;text-align:center}
.rzblsi{display:flex;flex-direction:column;margin:8px 0 14px}.rzblsi button{display:grid;grid-template-columns:28px 1fr auto;gap:10px;align-items:center;border:0;border-top:1px solid var(--line);background:transparent;color:var(--ink);font:inherit;font-size:15px;text-align:left;padding:10px 0;cursor:pointer}
.rzblsi i{width:24px;height:24px;border-radius:7px;border:1.5px solid var(--gold);font-style:normal;display:flex;align-items:center;justify-content:center;color:#17130b;font-size:14px}.rzblsi button.on i{background:var(--gold)}.rzblsi button:not(.on){opacity:.6}.rzblsi small{color:var(--muted);font-size:12px}.rzblsi b{font-family:-apple-system,system-ui,sans-serif;font-weight:600}
.e2tiles.e2t5{grid-template-columns:repeat(5,1fr);gap:6px}.e2tiles.e2t5 button{font-size:12px;padding:10px 2px}.e2tiles.e2t5 svg{width:24px;height:24px}
.rzbfrom{display:block;font-size:12px;color:var(--muted);font-family:-apple-system,system-ui,sans-serif}
.rzbin{border:1px solid var(--gold);background:var(--gold-soft);color:var(--ink);font:inherit;font-size:15px;padding:12px 16px;border-radius:16px;margin:10px 0;cursor:pointer;text-align:left;width:100%}
html.rzbkon .nav{display:none!important}
.screen.rzbk{display:flex;flex-direction:column;gap:14px;min-height:100vh;padding-bottom:calc(24px + env(safe-area-inset-bottom))}.screen.rzbk>*{flex-shrink:0}
.rzbkt{display:flex;align-items:center;gap:12px;padding-top:6px}.rzbkt b{flex:1;font-size:18px;font-weight:600}.rzbkt span{color:var(--muted);font-size:14px}.rzbkx{width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--surface);color:var(--ink);font-size:18px;cursor:pointer}
.rzbtm{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:16px;background:var(--gold-soft);border:1px solid var(--gold)}.rzbtm b{font-size:24px;font-family:-apple-system,system-ui,sans-serif;font-variant-numeric:tabular-nums}.rzbtm small{flex:1;color:var(--muted);font-size:13px}.rzbtm button{border:0;background:transparent;color:var(--ink);font-size:18px;cursor:pointer}
.rzbkin{list-style:none;margin:0;padding:0}.rzbkin li{display:grid;grid-template-columns:34px 110px 1fr;gap:12px;align-items:center;padding:14px 0;border-top:1px solid var(--line);font-size:20px;cursor:pointer}.rzbkin li.d{opacity:.45}.rzbkin li.d span{text-decoration:line-through}
.rzbkin i{width:30px;height:30px;border-radius:9px;border:2px solid var(--gold);font-style:normal;display:flex;align-items:center;justify-content:center;color:#17130b}.rzbkin li.d i{background:var(--gold)}.rzbkin b{font-weight:600;color:var(--gold);font-family:-apple-system,system-ui,sans-serif;text-align:right}
.rzbkn{margin:8px 0 0;color:var(--gold);font-size:15px;letter-spacing:.04em}.rzbkst{font-size:26px;line-height:1.45;flex:1 0 auto!important;padding:6px 0 12px}
.rzbknav{display:grid;grid-template-columns:1fr 1.4fr;gap:10px;margin-top:auto}.rzbkfin{display:flex;flex-direction:column;align-items:center;gap:12px;padding:60px 0;font-size:60px}.rzbkfin p{font-size:22px;margin:0}
`);
