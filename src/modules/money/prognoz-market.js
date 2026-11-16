/* ===== v279 «Прогноз», stage 2: «Рынок» — real closing prices through the owner's Butler relay =====
   - The data key lives only in the relay (Cloudflare). The app stores the relay address and the owner's PIN
     on this device only (localStorage, never in the synced state).
   - Search, asset card (last close with its date, one-year chart, change, deepest fall, how much it swings),
     «what if I had saved monthly», watchlist. Every figure names its source and date.
   - No key / no PIN / no data → the screen says so; nothing is invented. Facts only, no «buy» or «sell». */
const mkS={
 mk:['Рынок','Markt','Market','Rynek','Piyasa','Marché','Mercado'],
 off:['Рыночные данные не подключены. Нужны адрес вашего сервера Butler и ваш PIN. Ключ поставщика данных хранится только на сервере.','Marktdaten sind nicht verbunden. Nötig sind die Adresse Ihres Butler-Servers und Ihre PIN. Der Datenschlüssel liegt nur auf dem Server.','Market data is not connected. You need your Butler server address and your PIN. The data key stays on the server only.','Dane rynkowe nie są podłączone. Potrzebny jest adres serwera Butler i PIN. Klucz danych jest tylko na serwerze.','Piyasa verisi bağlı değil. Butler sunucu adresiniz ve PIN’iniz gerekli. Veri anahtarı yalnızca sunucuda durur.','Les données de marché ne sont pas connectées. Il faut l’adresse de votre serveur Butler et votre PIN. La clé reste sur le serveur.','Los datos de mercado no están conectados. Hace falta la dirección de su servidor Butler y su PIN. La clave queda solo en el servidor.'],
 url:['Адрес сервера','Serveradresse','Server address','Adres serwera','Sunucu adresi','Adresse du serveur','Dirección del servidor'],
 pin:['PIN','PIN','PIN','PIN','PIN','PIN','PIN'],
 conn:['Подключить','Verbinden','Connect','Połącz','Bağlan','Connecter','Conectar'],
 eNet:['Сервер не отвечает. Проверьте адрес и интернет.','Server antwortet nicht. Adresse und Internet prüfen.','Server does not answer. Check the address and the internet.','Serwer nie odpowiada. Sprawdź adres i internet.','Sunucu yanıt vermiyor. Adresi ve interneti kontrol edin.','Le serveur ne répond pas. Vérifiez l’adresse et Internet.','El servidor no responde. Revise la dirección e Internet.'],
 eKey:['Сервер работает, но ключ данных и PIN в Cloudflare ещё не вписаны.','Server läuft, aber Datenschlüssel und PIN sind in Cloudflare noch nicht eingetragen.','Server works, but the data key and PIN are not yet set in Cloudflare.','Serwer działa, ale klucz danych i PIN nie są jeszcze wpisane w Cloudflare.','Sunucu çalışıyor, ancak veri anahtarı ve PIN Cloudflare’a henüz girilmemiş.','Le serveur fonctionne, mais la clé et le PIN ne sont pas encore dans Cloudflare.','El servidor funciona, pero la clave y el PIN aún no están en Cloudflare.'],
 ePin:['PIN не подходит.','PIN stimmt nicht.','Wrong PIN.','Błędny PIN.','PIN yanlış.','PIN incorrect.','PIN incorrecto.'],
 eData:['Нет данных по этой бумаге (возможно, биржа не входит в тариф или дневной лимит исчерпан).','Keine Daten zu diesem Wert (evtl. Börse nicht im Tarif oder Tageslimit erreicht).','No data for this security (the exchange may not be in the plan, or the daily limit is used up).','Brak danych dla tego waloru (giełda poza taryfą lub wyczerpany limit dzienny).','Bu kıymet için veri yok (borsa tarifede olmayabilir veya günlük limit dolmuş olabilir).','Pas de données pour ce titre (bourse hors forfait ou limite du jour atteinte).','Sin datos de este valor (bolsa fuera del plan o límite diario agotado).'],
 q:['Название, тикер или ISIN','Name, Kürzel oder ISIN','Name, ticker or ISIN','Nazwa, ticker lub ISIN','Ad, sembol veya ISIN','Nom, symbole ou ISIN','Nombre, símbolo o ISIN'],
 find:['Найти','Suchen','Search','Szukaj','Ara','Chercher','Buscar'],
 nores:['Ничего не найдено.','Nichts gefunden.','Nothing found.','Nic nie znaleziono.','Bir şey bulunamadı.','Rien trouvé.','Nada encontrado.'],
 load:['Загружаю…','Lade…','Loading…','Ładuję…','Yükleniyor…','Chargement…','Cargando…'],
 watch:['Наблюдение','Watchlist','Watchlist','Obserwowane','İzleme listesi','Liste de suivi','Seguimiento'],
 add:['В наблюдение','Beobachten','Watch','Obserwuj','İzle','Suivre','Seguir'],del:['Убрать из наблюдения','Nicht mehr beobachten','Stop watching','Przestań obserwować','İzlemeyi bırak','Ne plus suivre','Dejar de seguir'],
 back:['‹ К поиску','‹ Zur Suche','‹ Back to search','‹ Do wyszukiwania','‹ Aramaya dön','‹ Retour à la recherche','‹ Volver a la búsqueda'],
 close:['Цена закрытия','Schlusskurs','Closing price','Cena zamknięcia','Kapanış fiyatı','Cours de clôture','Precio de cierre'],
 prev:['к предыдущему дню','zum Vortag','vs previous day','do poprzedniego dnia','önceki güne göre','vs veille','frente al día anterior'],
 src:['Источник: EODHD, цены закрытия, не в реальном времени. Загружено','Quelle: EODHD, Schlusskurse, nicht in Echtzeit. Geladen','Source: EODHD, closing prices, not real time. Loaded','Źródło: EODHD, ceny zamknięcia, nie w czasie rzeczywistym. Pobrano','Kaynak: EODHD, kapanış fiyatları, gerçek zamanlı değil. Yüklendi','Source : EODHD, cours de clôture, pas en temps réel. Chargé','Fuente: EODHD, precios de cierre, no en tiempo real. Cargado'],
 per:['За период %a — %b','Zeitraum %a – %b','Period %a – %b','Okres %a – %b','Dönem %a – %b','Période %a – %b','Periodo %a – %b'],
 chg:['Изменение (с дивидендами)','Veränderung (mit Dividenden)','Change (incl. dividends)','Zmiana (z dywidendami)','Değişim (temettü dahil)','Variation (dividendes inclus)','Variación (con dividendos)'],
 dd:['Самое глубокое падение от пика','Tiefster Rückgang vom Hoch','Deepest fall from a peak','Najgłębszy spadek od szczytu','Zirveden en derin düşüş','Plus forte baisse depuis un sommet','Mayor caída desde un máximo'],
 vol:['Насколько скачет','Wie stark es schwankt','How much it swings','Jak mocno się waha','Ne kadar oynak','Amplitude des variations','Cuánto oscila'],
 v1:['спокойно','ruhig','calm','spokojnie','sakin','calme','tranquilo'],v2:['умеренно','mäßig','moderate','umiarkowanie','orta','modéré','moderado'],v3:['сильно','stark','strongly','mocno','sert','fort','fuerte'],
 wi:['Что было бы, если…','Was wäre gewesen, wenn…','What if…','Co by było, gdyby…','Ya şöyle olsaydı…','Et si…','¿Y si…?'],
 wiM:['Откладывать в месяц','Monatlich sparen','Save per month','Odkładać miesięcznie','Aylık birikim','Épargner par mois','Ahorrar al mes'],
 wiT:['%n взносов по %m = %i вложено. Сегодня это было бы %v (%p). В худший момент — %w к вложенному.','%n Raten zu %m = %i eingezahlt. Heute wären das %v (%p). Am schlechtesten Punkt: %w zum Eingezahlten.','%n payments of %m = %i paid in. Today that would be %v (%p). At the worst point: %w vs paid in.','%n wpłat po %m = %i wpłacono. Dziś byłoby to %v (%p). W najgorszym momencie: %w do wpłat.','%n taksit × %m = %i yatırıldı. Bugün %v olurdu (%p). En kötü anda: yatırılana göre %w.','%n versements de %m = %i versés. Aujourd’hui cela ferait %v (%p). Au pire moment : %w par rapport aux versements.','%n aportes de %m = %i aportado. Hoy serían %v (%p). En el peor momento: %w frente a lo aportado.'],
 past:['Прошлое — не прогноз. Это факты о ценах, а не совет покупать или продавать.','Vergangenheit ist keine Prognose. Das sind Kursfakten, keine Kauf- oder Verkaufsempfehlung.','The past is not a forecast. These are price facts, not advice to buy or sell.','Przeszłość to nie prognoza. To fakty o cenach, nie porada kupna lub sprzedaży.','Geçmiş, tahmin değildir. Bunlar fiyat gerçekleridir; al-sat tavsiyesi değildir.','Le passé n’est pas une prévision. Ce sont des faits de prix, pas un conseil d’achat ou de vente.','El pasado no es un pronóstico. Son hechos de precios, no un consejo de compra o venta.'],
 disc:['Отключить рынок на этом устройстве','Markt auf diesem Gerät trennen','Disconnect market on this device','Odłącz rynek na tym urządzeniu','Bu cihazda piyasayı kes','Déconnecter le marché sur cet appareil','Desconectar el mercado en este dispositivo'],
 only:['Только для вас: лицензия на данные личная.','Nur für Sie: die Datenlizenz ist persönlich.','For you only: the data licence is personal.','Tylko dla Ciebie: licencja na dane jest osobista.','Yalnızca sizin için: veri lisansı kişiseldir.','Pour vous seul : la licence de données est personnelle.','Solo para usted: la licencia de datos es personal.']};
const mkt=(k,o)=>{let t=cv5n(mkS[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const mkCfg=()=>{try{const c=JSON.parse(localStorage.getItem('bh-mk')||'null');return c&&c.url&&c.pin?c:null}catch{return null}};
const mkSt=()=>m.mk||(m.mk={});
const mkRe=()=>{try{k3keep(()=>v())}catch{try{v()}catch{}}};
async function mkGet(path,cfg){cfg=cfg||mkCfg();const r=await fetch(cfg.url.replace(/\/+$/,'')+path+(path.includes('?')?'&':'?')+'pin='+encodeURIComponent(cfg.pin));return r.json()}
const mkCacheGet=s=>{try{const c=JSON.parse(localStorage.getItem('bh-mkc')||'{}')[s];return c&&Date.now()-c.ts<20*36e5?c:null}catch{return null}};
const mkCachePut=(s,d)=>{try{const c=JSON.parse(localStorage.getItem('bh-mkc')||'{}');c[s]=d;const ks=Object.keys(c).sort((a,b)=>c[b].ts-c[a].ts);ks.slice(12).forEach(k=>delete c[k]);localStorage.setItem('bh-mkc',JSON.stringify(c))}catch{}};
const mkP=(x,cur)=>bfN(x,2)+(cur?' '+cur:'');
const mkPc=x=>(x>=0?'+':'−')+bfN(Math.abs(x),1)+' %';
const mkD=d=>{try{return new Date(d+'T12:00:00').toLocaleDateString(he(),{day:'numeric',month:'short',year:'numeric'})}catch{return d}};
/* facts from one series: all computed on the device from the loaded prices */
function mkFacts(D,monthly){const a=D.a,n=a.length;let peak=a[0],dd=0;for(const x of a){if(x>peak)peak=x;dd=Math.min(dd,x/peak-1)}
 let s=0,s2=0;for(let j=1;j<n;j++){const r=Math.log(a[j]/a[j-1]);s+=r;s2+=r*r}const k=Math.max(1,n-1),vol=Math.sqrt(Math.max(0,s2/k-(s/k)**2)*252)*100;
 let units=0,paid=0,cnt=0,worst=0,mo='';for(let j=0;j<n;j++){const ym=D.d[j].slice(0,7);if(ym!==mo){mo=ym;units+=monthly/a[j];paid+=monthly;cnt++}worst=Math.min(worst,units*a[j]/paid-1)}
 return{chg:(a[n-1]/a[0]-1)*100,dd:dd*100,vol,cnt,paid,val:units*a[n-1],worst:worst*100}}
function mkCard(){const st=mkSt(),A=st.card,D=st.data;const watch=(bfC().watch||[]).some(w=>w.s===A.s);
 let body;if(st.busy)body=`<p class="bfnote">${i(mkt('load'))}</p>`;else if(!D||D.error||!D.c||D.c.length<2)body=`<p class="bfnote">${i(st.err||mkt('eData'))}</p>`;
 else{const n=D.c.length,last=D.c[n-1],dp=(last/D.c[n-2]-1)*100,mon=Math.max(1,+st.wi||250),F=mkFacts(D,mon);const pts=Math.min(60,n),ix=[...Array(pts)].map((_,j)=>Math.round((n-1)*j/(pts-1)));
  const S={u:'',x:ix.map(j=>mkD(D.d[j])),L:[{n:mkt('close')+(A.cur?' · '+A.cur:''),k:'b',v:ix.map(j=>D.c[j])}]};const vw=F.vol<12?'v1':F.vol<25?'v2':'v3';
  body=`<div class="bfmain"><small>${i(mkt('close'))} · ${i(mkD(D.d[n-1]))}</small><b>${i(mkP(last,A.cur))}</b><p class="${dp>=0?'up':'dn'}">${mkPc(dp)} ${i(mkt('prev'))}</p></div>
  ${p1Chart(S)}
  <h3 class="bfh">${i(mkt('per',{a:mkD(D.d[0]),b:mkD(D.d[n-1])}))}</h3><div class="p1rows">
  <div class="bfr"><span>${i(mkt('chg'))}</span><b>${mkPc(F.chg)}</b></div><div class="bfr"><span>${i(mkt('dd'))}</span><b>${mkPc(F.dd)}</b></div><div class="bfr"><span>${i(mkt('vol'))}</span><b>${i(mkt(vw))} · ${bfN(F.vol,0)} %</b></div></div>
  <h3 class="bfh">${i(mkt('wi'))}</h3><div class="bffs"><label class="bff"><span>${i(mkt('wiM'))}</span><span class="bfin"><input type="number" inputmode="decimal" min="1" value="${mon}" data-mkwi="1"><em>${i(A.cur||'')}</em></span></label></div>
  <p class="bfas">${i(mkt('wiT',{n:F.cnt,m:mkP(mon,A.cur),i:mkP(F.paid,A.cur),v:mkP(F.val,A.cur),p:mkPc((F.val/F.paid-1)*100),w:mkPc(F.worst)}))}</p>
  <p class="bfnote">${i(mkt('src'))} ${i(new Date(D.ts).toLocaleString(he(),{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}))}. ${i(mkt('past'))}</p>`}
 return`<div class="screen bf">${bfHdr(mkt('mk'),'bf')}<button type="button" class="bflink mkbk" data-act="mkback">${i(mkt('back'))}</button>
 <div class="mkttl"><b>${i(A.name)}</b><small>${i(A.s)}${A.type?' · '+i(A.type):''}${A.isin?' · '+i(A.isin):''}</small></div>${body}
 <button type="button" class="bflink" data-act="mkwatch">${i(mkt(watch?'del':'add'))}</button></div>`}
function mkScreen(){const cfg=mkCfg(),st=mkSt();
 if(!cfg)return`<div class="screen bf">${bfHdr(mkt('mk'),'bf')}<p class="bfnote">${i(mkt('off'))}</p>
  <div class="bffs"><label class="bff"><span>${i(mkt('url'))}</span><input class="field" type="url" autocapitalize="off" autocomplete="off" placeholder="https://….workers.dev" value="${i(st.url||'')}" data-mkurl="1"></label>
  <label class="bff"><span>${i(mkt('pin'))}</span><input class="field" type="password" inputmode="numeric" autocomplete="off" value="${i(st.pin||'')}" data-mkpin="1"></label></div>
  ${st.err?`<p class="bfnote mkerr">${i(st.err)}</p>`:''}<button type="button" class="btn primary" data-act="mkconn"${st.busy?' disabled':''}>${i(st.busy?mkt('load'):mkt('conn'))}</button></div>`;
 if(st.card)return mkCard();
 const row=x=>`<button type="button" class="mkrow" data-act="mkopen" data-s="${i(x.s)}" data-n="${i(x.name)}" data-c="${i(x.cur||'')}" data-t="${i(x.type||'')}" data-i="${i(x.isin||'')}"><b>${i(x.name)}</b><small>${i(x.s)}${x.type?' · '+i(x.type):''}${x.cur?' · '+i(x.cur):''}</small></button>`;
 const W=bfC().watch||[];
 return`<div class="screen bf">${bfHdr(mkt('mk'),'bf')}
 <div class="mkq"><input class="field" type="search" autocapitalize="off" placeholder="${i(mkt('q'))}" value="${i(st.q||'')}" data-mkq="1"><button type="button" class="btn primary" data-act="mkfind">${i(mkt('find'))}</button></div>
 ${st.busy?`<p class="bfnote">${i(mkt('load'))}</p>`:st.err?`<p class="bfnote mkerr">${i(st.err)}</p>`:st.res?(st.res.length?st.res.map(row).join(''):`<p class="bfnote">${i(mkt('nores'))}</p>`):''}
 ${W.length?`<h3 class="bfh">${i(mkt('watch'))}</h3>${W.map(row).join('')}`:''}
 <p class="bfnote">${i(mkt('only'))} ${i(mkt('past'))}</p><button type="button" class="bflink p3rs" data-act="mkdisc">${i(mkt('disc'))}</button></div>`}
Te.includes('bfm')||Te.push('bfm');BF_R.push('bfm');
(Hooks.h.screen=Hooks.h.screen||[]).unshift(()=>{if(m.route==='bfm'&&!g.bfoff){try{return mkScreen()}catch(e){Hooks.err('mkscreen',e)}}});
const mkErr=r=>r&&r.error==='pin'?mkt('ePin'):r&&r.error==='nokey'?mkt('eKey'):mkt('eData');
Hooks.act('mkconn',async()=>{const st=mkSt();let url=String(st.url||'').trim(),pin=String(st.pin||'').trim();if(!url||!pin)return;if(!/^https:\/\//i.test(url))url='https://'+url.replace(/^\w+:\/\//,'');
 st.busy=1;st.err='';mkRe();try{const cfg={url,pin};const p=await(await fetch(url.replace(/\/+$/,'')+'/ping')).json();if(!p||!p.ok)throw 0;if(!p.mk)st.err=mkt('eKey');else{const c=await mkGet('/mk/check',cfg);if(c&&c.ok){localStorage.setItem('bh-mk',JSON.stringify(cfg));st.pin=''}else st.err=mkErr(c)}}catch{st.err=mkt('eNet')}st.busy=0;mkRe()});
Hooks.act('mkfind',async()=>{const st=mkSt(),q=String(st.q||'').trim();if(q.length<2)return;st.busy=1;st.err='';st.res=null;mkRe();try{const r=await mkGet('/mk/search?q='+encodeURIComponent(q));if(r&&r.list)st.res=r.list;else st.err=mkErr(r)}catch{st.err=mkt('eNet')}st.busy=0;mkRe()});
Hooks.act('mkopen',async e=>{const st=mkSt();st.card={s:e.s,name:e.n||e.s,cur:e.c||'',type:e.t||'',isin:e.i||''};st.data=mkCacheGet(e.s);st.err='';if(st.data){mkRe();return}st.busy=1;mkRe();
 try{const r=await mkGet('/mk/eod?s='+encodeURIComponent(e.s));if(r&&r.c&&r.c.length>1){st.data=r;mkCachePut(e.s,r)}else{st.data=null;st.err=mkErr(r)}}catch{st.err=mkt('eNet')}st.busy=0;mkRe()});
Hooks.act('mkback',()=>{const st=mkSt();st.card=null;st.data=null;st.err='';mkRe()});
Hooks.act('mkwatch',()=>{const st=mkSt(),A=st.card;if(!A)return;const c=bfC();c.watch=c.watch||[];const j=c.watch.findIndex(w=>w.s===A.s);if(j>=0)c.watch.splice(j,1);else c.watch.unshift(Object.assign({},A));c.watch=c.watch.slice(0,20);$();mkRe()});
Hooks.act('mkdisc',()=>{try{localStorage.removeItem('bh-mk');localStorage.removeItem('bh-mkc')}catch{}m.mk={};mkRe()});
document.addEventListener('input',e=>{const t=e.target;if(!t||!t.dataset)return;const st=mkSt();if(t.dataset.mkurl)st.url=t.value;if(t.dataset.mkpin)st.pin=t.value;if(t.dataset.mkq)st.q=t.value},!0);
document.addEventListener('change',e=>{const t=e.target;if(t&&t.dataset&&t.dataset.mkwi){const n=parseFloat(String(t.value).replace(',','.'));if(n>0){mkSt().wi=n;mkRe()}}},!0);
document.addEventListener('keydown',e=>{const t=e.target;if(e.key==='Enter'&&t&&t.dataset&&t.dataset.mkq){e.preventDefault();const b=document.querySelector('[data-act=mkfind]');b&&b.click()}},!0);
BF_K.market={t:mkS.mk,ic:'📈'};BF_ORDER.splice(BF_ORDER.indexOf('lab'),0,'market');
Hooks.act('bfopen',e=>{if(e.k==='market'){R('bfm');return}if(e.k==='lab'){R('bfx');return}if(e.k==='vp'){R('bfp');return}if(e.k==='risk'){m.p3Src='mine';m.p3RB='bf';R('bfr');return}bfOpen(e.k)},{replace:!0});
Hooks.css('prognoz-market',`
.mkq{display:flex;gap:8px}.mkq .field{flex:1;min-width:0}
.mkrow{display:flex;flex-direction:column;gap:2px;align-items:flex-start;text-align:left;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;padding:10px 14px;border-radius:14px;cursor:pointer}.mkrow b{font-weight:500}.mkrow small,.mkttl small{color:var(--muted);font-size:12.5px}
.mkttl{display:flex;flex-direction:column;gap:2px}.mkttl b{font-size:18px;font-weight:500}.mkbk{align-self:flex-start;padding:0}.mkerr{color:#c0563f}
`);
