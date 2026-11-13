/* ===== v278 «Прогноз», stage 3: practice portfolio and capital risks =====
   - Practice portfolio («Учебный портфель»): your own play capital, buy and sell the lab directions with a
     1 € broker fee, every trade marked «учебно». Prices are a practice market (a random walk built from each
     direction's assumptions), clearly labelled — real quotes replace them in stage 2. Time can be fast-forwarded
     by a month or a year, so the effect of a decision is visible today.
   - Decision journal: why you bought and what you expected; after 3 months Butler shows whether it came true.
   - Risk check («Риски капитала») for your real capital from Финансы or for the practice portfolio:
     concentration, crises like 2008 / 2020 / 2022 (rounded index falls, in euro), liquidity, inflation, dollar.
   Nothing here says «buy» or «sell»: it shows facts, assumptions and consequences. */
const p3S={
 vp:['Учебный портфель','Übungsdepot','Practice portfolio','Portfel treningowy','Deneme portföyü','Portefeuille d’entraînement','Cartera de práctica'],
 risk:['Риски капитала','Risiko-Check','Risk check','Kontrola ryzyka','Risk kontrolü','Contrôle des risques','Control de riesgos'],
 play:['Учебно — настоящие деньги не двигаются. Цены учебного рынка рассчитаны из допущений Лаборатории, это не настоящие котировки (они появятся с подключением рыночных данных).','Übung – es wird kein echtes Geld bewegt. Die Kurse des Übungsmarkts sind aus den Annahmen des Labors berechnet, keine echten Kurse (die kommen mit den Marktdaten).','Practice – no real money moves. Practice-market prices are calculated from the Lab’s assumptions, not real quotes (those come with market data).','Ćwiczenie – prawdziwe pieniądze się nie ruszają. Ceny rynku treningowego wyliczono z założeń Laboratorium, to nie prawdziwe notowania (pojawią się z danymi rynkowymi).','Deneme – gerçek para hareket etmez. Deneme piyasası fiyatları Laboratuvar varsayımlarından hesaplanır, gerçek fiyat değildir (piyasa verisiyle gelecek).','Entraînement – aucun argent réel ne bouge. Les prix du marché d’entraînement viennent des hypothèses du Laboratoire, pas de vraies cotations (elles viendront avec les données de marché).','Práctica: no se mueve dinero real. Los precios del mercado de práctica salen de los supuestos del Laboratorio, no son cotizaciones reales (llegarán con los datos de mercado).'],
 tag:['учебно','Übung','practice','ćwiczenie','deneme','entraînement','práctica'],
 startQ:['С какой суммы начать?','Mit welchem Betrag starten?','How much to start with?','Od jakiej kwoty zacząć?','Hangi tutarla başlayalım?','Avec quel montant commencer ?','¿Con cuánto empezar?'],
 startT:['Это игровые деньги. Начните с суммы, похожей на ваши настоящие сбережения, — так опыт будет ближе к жизни.','Das ist Spielgeld. Nehmen Sie einen Betrag ähnlich Ihren echten Ersparnissen – dann ist die Erfahrung lebensnah.','This is play money. Pick an amount close to your real savings – the experience will be closer to life.','To pieniądze do gry. Wybierz kwotę zbliżoną do prawdziwych oszczędności – doświadczenie będzie bliższe życiu.','Bu oyun parası. Gerçek birikiminize yakın bir tutar seçin – deneyim hayata daha yakın olur.','C’est de l’argent fictif. Choisissez un montant proche de votre vraie épargne – l’expérience sera plus réaliste.','Es dinero de juego. Elija una cantidad parecida a sus ahorros reales: la experiencia será más realista.'],
 other:['Другая сумма','Anderer Betrag','Other amount','Inna kwota','Başka tutar','Autre montant','Otra cantidad'],
 start:['Начать','Starten','Start','Zacznij','Başla','Commencer','Empezar'],
 total:['Стоимость портфеля','Depotwert','Portfolio value','Wartość portfela','Portföy değeri','Valeur du portefeuille','Valor de la cartera'],
 since:['с начала','seit Start','since start','od startu','başlangıçtan beri','depuis le début','desde el inicio'],
 cash:['Свободные деньги','Verrechnungskonto','Cash','Gotówka','Nakit','Liquidités','Efectivo'],
 day:['День','Tag','Day','Dzień','Gün','Jour','Día'],mon:['Мес.','Mon.','Mo','Mies.','Ay','Mois','Mes'],
 ffw:['Перемотать время','Zeit vorspulen','Fast-forward time','Przewiń czas','Zamanı ileri sar','Avancer le temps','Adelantar el tiempo'],
 m1:['+1 месяц','+1 Monat','+1 month','+1 miesiąc','+1 ay','+1 mois','+1 mes'],y1:['+1 год','+1 Jahr','+1 year','+1 rok','+1 yıl','+1 an','+1 año'],
 buy:['Купить','Kaufen','Buy','Kup','Al','Acheter','Comprar'],sell:['Продать','Verkaufen','Sell','Sprzedaj','Sat','Vendre','Vender'],
 pos:['Позиции','Positionen','Positions','Pozycje','Pozisyonlar','Positions','Posiciones'],none:['Пока ничего не куплено.','Noch nichts gekauft.','Nothing bought yet.','Jeszcze nic nie kupiono.','Henüz bir şey alınmadı.','Rien d’acheté pour l’instant.','Aún no se ha comprado nada.'],
 amt:['Сумма','Betrag','Amount','Kwota','Tutar','Montant','Importe'],all:['Всё','Alles','All','Wszystko','Tümü','Tout','Todo'],
 fee:['Комиссия брокера 1 € за сделку','Ordergebühr 1 € pro Trade','Broker fee 1 € per trade','Prowizja 1 € za transakcję','İşlem başına 1 € komisyon','Frais de courtage 1 € par ordre','Comisión de 1 € por operación'],
 why:['Почему? (для дневника)','Warum? (fürs Tagebuch)','Why? (for the journal)','Dlaczego? (do dziennika)','Neden? (günlük için)','Pourquoi ? (pour le journal)','¿Por qué? (para el diario)'],
 expQ:['Чего вы ждёте?','Was erwarten Sie?','What do you expect?','Czego oczekujesz?','Ne bekliyorsunuz?','Qu’attendez-vous ?','¿Qué espera?'],
 eUp:['вырастет','steigt','it rises','wzrośnie','yükselir','ça monte','subirá'],eSafe:['защитит от падений','schützt vor Verlusten','protects from falls','ochroni przed spadkami','düşüşten korur','protège des baisses','protegerá de caídas'],eTry:['просто попробовать','nur ausprobieren','just trying','tylko próbuję','sadece deniyorum','juste essayer','solo probar'],
 ok:['Подтвердить','Bestätigen','Confirm','Potwierdź','Onayla','Confirmer','Confirmar'],cancel:['Отмена','Abbrechen','Cancel','Anuluj','İptal','Annuler','Cancelar'],
 noCash:['Не хватает свободных денег в портфеле.','Nicht genug Guthaben im Depot.','Not enough cash in the portfolio.','Za mało gotówki w portfelu.','Portföyde yeterli nakit yok.','Pas assez de liquidités.','No hay suficiente efectivo.'],
 done:['Сделка записана (учебно)','Trade gebucht (Übung)','Trade recorded (practice)','Transakcja zapisana (ćwiczenie)','İşlem kaydedildi (deneme)','Ordre enregistré (entraînement)','Operación registrada (práctica)'],
 jr:['Дневник решений','Entscheidungstagebuch','Decision journal','Dziennik decyzji','Karar günlüğü','Journal des décisions','Diario de decisiones'],
 jrT:['Через 3 месяца после покупки Butler покажет, сбылось ли ожидание.','3 Monate nach dem Kauf zeigt Butler, ob die Erwartung eingetreten ist.','3 months after a purchase Butler shows whether the expectation came true.','3 miesiące po zakupie Butler pokaże, czy oczekiwanie się spełniło.','Alımdan 3 ay sonra Butler beklentinin gerçekleşip gerçekleşmediğini gösterir.','3 mois après l’achat, Butler montre si l’attente s’est réalisée.','3 meses después de la compra Butler muestra si se cumplió la expectativa.'],
 wait:['ждём ещё %n дн.','noch %n Tage','%n more days','jeszcze %n dni','%n gün daha','encore %n jours','faltan %n días'],
 yes:['сбылось','eingetreten','came true','spełniło się','gerçekleşti','réalisé','se cumplió'],no:['не сбылось','nicht eingetreten','did not come true','nie spełniło się','gerçekleşmedi','pas réalisé','no se cumplió'],
 vsW:['мировой индекс за то же время','Weltindex im selben Zeitraum','world index over the same time','indeks światowy w tym czasie','aynı dönemde dünya endeksi','indice mondial sur la période','índice mundial en el mismo periodo'],
 taxL:['налог при продаже сейчас ≈','Steuer bei Verkauf jetzt ≈','tax if sold now ≈','podatek przy sprzedaży teraz ≈','şimdi satılırsa vergi ≈','impôt si vente maintenant ≈','impuesto si vende ahora ≈'],
 reset:['Начать заново','Neu beginnen','Start over','Zacznij od nowa','Baştan başla','Recommencer','Empezar de nuevo'],
 resetQ:['Стереть учебный портфель и дневник?','Übungsdepot und Tagebuch löschen?','Erase the practice portfolio and journal?','Usunąć portfel treningowy i dziennik?','Deneme portföyü ve günlük silinsin mi?','Effacer le portefeuille et le journal ?','¿Borrar la cartera de práctica y el diario?'],
 toRisk:['Проверить риски портфеля','Risiken des Depots prüfen','Check portfolio risks','Sprawdź ryzyka portfela','Portföy risklerini kontrol et','Vérifier les risques','Revisar riesgos de la cartera'],
 mine:['Мой капитал','Mein Vermögen','My capital','Mój kapitał','Varlığım','Mon patrimoine','Mi patrimonio'],
 comp:['Из чего состоит','Zusammensetzung','What it consists of','Z czego się składa','Neyden oluşuyor','Composition','Composición'],
 guess:['Направление определено по названию — нажмите, чтобы поменять.','Richtung nach dem Namen erkannt – tippen zum Ändern.','Direction guessed from the name – tap to change.','Kierunek rozpoznany po nazwie – dotknij, aby zmienić.','Alan isme göre tahmin edildi – değiştirmek için dokunun.','Piste devinée d’après le nom – touchez pour changer.','Opción deducida del nombre: toque para cambiarla.'],
 empty:['В «Финансах» пока нет счетов и имущества — нечего проверять. Внесите их или проверьте учебный портфель.','In «Finanzen» gibt es noch keine Konten und Vermögenswerte. Tragen Sie sie ein oder prüfen Sie das Übungsdepot.','Finance has no accounts or assets yet. Add them or check the practice portfolio.','W Finansach nie ma jeszcze kont ani majątku. Dodaj je lub sprawdź portfel treningowy.','Finans’ta henüz hesap veya varlık yok. Ekleyin ya da deneme portföyünü kontrol edin.','Finances ne contient encore ni comptes ni biens. Ajoutez-les ou vérifiez le portefeuille d’entraînement.','Finanzas aún no tiene cuentas ni bienes. Añádalos o revise la cartera de práctica.'],
 conc:['Концентрация','Klumpenrisiko','Concentration','Koncentracja','Yoğunlaşma','Concentration','Concentración'],
 concT:['%p % вложений — в одном направлении: %a','%p % der Anlagen in einer Richtung: %a','%p% of investments in one direction: %a','%p% inwestycji w jednym kierunku: %a','Yatırımların %%p’i tek alanda: %a','%p % des placements dans une seule piste : %a','%p % de las inversiones en una sola opción: %a'],
 concOk:['Вложения распределены: самая крупная доля — %p %.','Anlagen gestreut: größter Anteil %p %.','Investments spread: largest share %p%.','Inwestycje rozproszone: największy udział %p%.','Yatırımlar dağıtılmış: en büyük pay %%p.','Placements répartis : plus grande part %p %.','Inversiones repartidas: mayor parte %p %.'],
 noInv:['Вложений нет — только деньги на счетах.','Keine Anlagen – nur Kontoguthaben.','No investments – only money in accounts.','Brak inwestycji – tylko pieniądze na kontach.','Yatırım yok – sadece hesaplardaki para.','Aucun placement – seulement de l’argent sur les comptes.','Sin inversiones: solo dinero en cuentas.'],
 crisis:['Если повторится кризис','Wenn sich eine Krise wiederholt','If a crisis repeats','Jeśli kryzys się powtórzy','Bir kriz tekrarlanırsa','Si une crise se répète','Si se repite una crisis'],
 c08:['2008 — финансовый кризис','2008 – Finanzkrise','2008 – financial crisis','2008 – kryzys finansowy','2008 – finans krizi','2008 – crise financière','2008: crisis financiera'],
 c20:['2020 — пандемия','2020 – Pandemie','2020 – pandemic','2020 – pandemia','2020 – pandemi','2020 – pandémie','2020: pandemia'],
 c22:['2022 — рост ставок','2022 – Zinswende','2022 – rate rises','2022 – wzrost stóp','2022 – faiz artışı','2022 – hausse des taux','2022: subida de tipos'],
 recov:['мировой индекс восстанавливался ≈ %n мес.','Weltindex brauchte ≈ %n Mon. zur Erholung','world index took ≈ %n mo to recover','indeks światowy odrabiał ≈ %n mies.','dünya endeksi ≈ %n ayda toparlandı','l’indice mondial a mis ≈ %n mois à se redresser','el índice mundial tardó ≈ %n meses en recuperarse'],
 ofCap:['капитала','des Vermögens','of capital','kapitału','varlığın','du patrimoine','del patrimonio'],
 noHist:['без исторических данных: %v (не учтено)','ohne historische Daten: %v (nicht berücksichtigt)','no historical data: %v (not counted)','bez danych historycznych: %v (nie uwzględniono)','tarihsel veri yok: %v (hesaba katılmadı)','sans données historiques : %v (non compté)','sin datos históricos: %v (no incluido)'],
 crSrc:['Падения — округлённые, по крупным индексам, в евро, от пика до дна. Точные значения появятся с историей цен (этап «Рынок»).','Rückgänge gerundet, große Indizes, in Euro, vom Hoch bis zum Tief. Genaue Werte kommen mit der Kurshistorie (Stufe «Markt»).','Falls rounded, major indices, in euro, peak to trough. Exact values come with price history (stage “Market”).','Spadki zaokrąglone, główne indeksy, w euro, od szczytu do dołka. Dokładne wartości pojawią się z historią cen (etap „Rynek”).','Düşüşler yuvarlanmış, büyük endeksler, euro bazında, zirveden dibe. Kesin değerler fiyat geçmişiyle gelecek (“Piyasa” aşaması).','Baisses arrondies, grands indices, en euros, du sommet au creux. Les valeurs exactes viendront avec l’historique des prix (étape « Marché »).','Caídas redondeadas, grandes índices, en euros, de máximo a mínimo. Los valores exactos llegarán con el historial de precios (etapa «Mercado»).'],
 liq:['Как быстро можно получить деньги','Wie schnell verfügbar','How fast you can get the money','Jak szybko dostępne','Paraya ne kadar hızlı ulaşılır','Disponibilité','Rapidez para disponer del dinero'],
 lW:['за неделю','in einer Woche','within a week','w tydzień','bir haftada','en une semaine','en una semana'],lM:['за месяц','in einem Monat','within a month','w miesiąc','bir ayda','en un mois','en un mes'],lL:['дольше (недвижимость, бизнес, прочее)','länger (Immobilien, Firma, Sonstiges)','longer (property, business, other)','dłużej (nieruchomości, firma, inne)','daha uzun (gayrimenkul, işletme, diğer)','plus long (immobilier, entreprise, autre)','más tiempo (inmuebles, negocio, otros)'],
 infl:['Инфляция','Inflation','Inflation','Inflacja','Enflasyon','Inflation','Inflación'],
 inflT:['%v лежат без дохода. При инфляции 2 % (допущение) они теряют ≈ %l покупательной силы в год.','%v liegen ohne Ertrag. Bei 2 % Inflation (Annahme) verlieren sie ≈ %l Kaufkraft pro Jahr.','%v earn nothing. At 2% inflation (assumption) they lose ≈ %l of purchasing power a year.','%v nie przynosi dochodu. Przy inflacji 2% (założenie) traci ≈ %l siły nabywczej rocznie.','%v getirisiz duruyor. %2 enflasyonda (varsayım) yılda ≈ %l satın alma gücü kaybeder.','%v ne rapportent rien. Avec 2 % d’inflation (hypothèse), ils perdent ≈ %l de pouvoir d’achat par an.','%v no generan nada. Con un 2 % de inflación (supuesto) pierden ≈ %l de poder adquisitivo al año.'],
 cur:['Валютный риск','Währungsrisiko','Currency risk','Ryzyko walutowe','Kur riski','Risque de change','Riesgo de divisa'],
 curT:['≈ %v (%p %) зависят от доллара. Если доллар подешевеет на 10 %, в евро это ≈ −%l.','≈ %v (%p %) hängen am Dollar. Fällt der Dollar um 10 %, sind das in Euro ≈ −%l.','≈ %v (%p%) depend on the dollar. If the dollar falls 10%, that is ≈ −%l in euro.','≈ %v (%p%) zależy od dolara. Jeśli dolar stanieje o 10%, to w euro ≈ −%l.','≈ %v (%%p) dolara bağlı. Dolar %10 düşerse euro olarak ≈ −%l.','≈ %v (%p %) dépendent du dollar. Si le dollar baisse de 10 %, cela fait ≈ −%l en euros.','≈ %v (%p %) dependen del dólar. Si el dólar cae un 10 %, son ≈ −%l en euros.'],
 curN:['Доля в долларах — оценка по направлению (например, мировой ETF ≈ 70 % в долларах).','Dollaranteil geschätzt nach Richtung (z. B. Welt-ETF ≈ 70 % in Dollar).','Dollar share estimated by direction (e.g. world ETF ≈ 70% in dollars).','Udział dolara oszacowany wg kierunku (np. ETF światowy ≈ 70% w dolarach).','Dolar payı alana göre tahmin (ör. dünya ETF’i ≈ %70 dolar).','Part en dollars estimée par piste (ex. ETF monde ≈ 70 % en dollars).','Parte en dólares estimada por opción (p. ej., ETF mundial ≈ 70 % en dólares).'],
 k_cash:['Деньги и вклады','Geld und Tagesgeld','Cash and deposits','Gotówka i lokaty','Nakit ve mevduat','Liquidités et dépôts','Efectivo y depósitos'],
 k_home:['Недвижимость (своя)','Immobilie (eigene)','Property (own)','Nieruchomość (własna)','Gayrimenkul (kendi)','Immobilier (propre)','Inmueble (propio)'],
 k_other:['Прочее имущество','Sonstiges','Other assets','Inne mienie','Diğer varlıklar','Autres biens','Otros bienes']};
const p3t=(k,o)=>{let t=cv5n(p3S[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
/* ---------- risk classes: the ten lab directions plus cash, own property and other ---------- */
const P3X={cash:{k:'cash',ic:'💶',t:p3S.k_cash,lq:'always'},home:{k:'home',ic:'🏠',t:p3S.k_home,lq:'slow'},other:{k:'other',ic:'📦',t:p3S.k_other,lq:'slow'}};
const p3cl=k=>P3X[k]||P1C.find(x=>x.k===k)||P3X.other;
/* rounded peak-to-trough falls in euro of broad indices (approximate, labelled on screen); null = no data */
const P3CR=[{k:'c08',rec:55,d:{stock:-55,etf:-50,tech:-50,energy:-55,industry:-60,reit:-70,bond:5,gold:-25,crypto:null,biz:null,cash:0,home:null,other:null}},
 {k:'c20',rec:6,d:{stock:-35,etf:-34,tech:-30,energy:-55,industry:-38,reit:-42,bond:-5,gold:-12,crypto:-50,biz:null,cash:0,home:null,other:null}},
 {k:'c22',rec:24,d:{stock:-20,etf:-17,tech:-33,energy:15,industry:-20,reit:-30,bond:-17,gold:-8,crypto:-75,biz:null,cash:0,home:null,other:null}}];
const P3USD={stock:.5,etf:.7,tech:.8,energy:.5,industry:.4,reit:.6,bond:.3,gold:1,crypto:1,biz:0,cash:0,home:0,other:0};
const P3VOL={stock:30,crypto:65,etf:16,bond:6,gold:15,reit:20,energy:25,tech:26,industry:20};
const P3TR=P1C.filter(x=>x.k!=='biz');
/* ---------- the practice market: a reproducible random walk per direction ---------- */
const p3hash=s=>{let h=2166136261;for(const ch of String(s))h=Math.imul(h^ch.charCodeAt(0),16777619);return h>>>0};
const p3rng=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
let p3Cache={};
function p3Px(k,day){const P=p3P();const key=P.seed+':'+k;let c=p3Cache[key];if(!c){const cl=p3cl(k),mu=(cl.r?cl.r[1]:0)/100,sg=(P3VOL[k]||10)/100;c=p3Cache[key]={a:[100],rnd:p3rng(p3hash(key)),mu,sg}}
 day=Math.max(0,Math.min(36500,Math.floor(day)));while(c.a.length<=day){const u1=c.rnd()||1e-9,u2=c.rnd();const z=Math.sqrt(-2*Math.log(u1))*Math.cos(2*Math.PI*u2);c.a.push(c.a[c.a.length-1]*Math.exp((c.mu-c.sg*c.sg/2)/365+c.sg/Math.sqrt(365)*z))}return c.a[day]}
const p3P=()=>{const c=bfC();if(!c.vp||typeof c.vp!=='object')c.vp={};const P=c.vp;if(!Array.isArray(P.tr))P.tr=[];return P};
const p3Day=()=>{const P=p3P();if(!P.t0)return 0;const d=Math.floor((Date.now()-P.t0)/864e5)+(P.skip||0);return Math.max(d,...P.tr.map(t=>t.d),0)};
function p3State(day){const P=p3P();const s={cash:P.start||0,u:{},cost:{}};P.tr.forEach(t=>{if(t.d>day)return;if(t.side==='b'){s.cash-=t.eur;s.u[t.k]=(s.u[t.k]||0)+t.units;s.cost[t.k]=(s.cost[t.k]||0)+t.eur}else{const had=s.u[t.k]||0;const f=had?t.units/had:0;s.cost[t.k]=(s.cost[t.k]||0)*(1-f);s.u[t.k]=had-t.units;s.cash+=t.eur}});
 for(const k in s.u)if(s.u[k]<1e-9){delete s.u[k];delete s.cost[k]}let inv=0;for(const k in s.u)inv+=s.u[k]*p3Px(k,day);s.inv=inv;s.total=s.cash+inv;return s}
/* ---------- portfolio screen ---------- */
function p3Vp(){const P=p3P();
 if(!P.start){const amts=[1000,5000,10000,25000];const sel=m.p3St||10000;
  return`<div class="screen bf">${bfHdr(p3t('vp'),'bf')}<p class="bfnote">${i(p3t('play'))}</p><div class="bfmain txt"><small>${i(p3t('startQ'))}</small><p>${i(p3t('startT'))}</p></div>
  <div class="p3chips">${amts.map(a=>`<button type="button" class="${sel===a?'on':''}" data-act="p3st" data-v="${a}">${i(bfM(a))}</button>`).join('')}</div>
  <div class="bffs"><label class="bff"><span>${i(p3t('other'))}</span><span class="bfin"><input type="number" inputmode="decimal" min="100" value="${sel}" data-p3st="1"><em>€</em></span></label></div>
  <button type="button" class="btn primary p3go" data-act="p3begin">${i(p3t('start'))}</button></div>`}
 const day=p3Day(),s=p3State(day),gain=s.total-P.start,pct=P.start?gain/P.start*100:0;
 const n=Math.min(60,Math.max(2,day+1)),useM=day>90;const xs=[...Array(n)].map((_,j)=>Math.round(day*j/(n-1)));
 const S={u:(useM?p3t('mon'):p3t('day'))+' ',x:xs.map(d=>String(useM?Math.round(d/30.4):d)),L:[{n:p3t('total'),k:'b',v:xs.map(d=>p3State(d).total)},{n:p3t('since'),k:'p',v:xs.map(()=>P.start)}]};
 const pos=Object.keys(s.u).map(k=>{const cl=p3cl(k),val=s.u[k]*p3Px(k,day),cost=s.cost[k]||0,g2=val-cost,tax=g2>0?Math.max(0,(cl.tx==='etf'?g2*(1-BF_TFS):g2)-BF_FREE)*BF_TAX:0;
  return`<div class="p3pos"><div><b>${cl.ic} ${i(cv5n(cl.t))}</b><small>${i(bfM(cost))} → ${i(bfM(val))}${tax>1?' · '+i(p3t('taxL'))+' '+i(bfM(tax)):''}</small></div><em class="${g2>=0?'up':'dn'}">${g2>=0?'+':'−'}${i(bfN(Math.abs(cost?g2/cost*100:0),1))} %</em><button type="button" class="bflink" data-act="p3trade" data-k="${k}" data-s="s">${i(p3t('sell'))}</button></div>`}).join('');
 const sh=s.total>0?Object.keys(s.u).map(k=>[k,s.u[k]*p3Px(k,day)]).concat([['cash',s.cash]]):[];
 const bar=sh.length?`<div class="p3bar">${sh.filter(x=>x[1]>0).map(([k,v2],j)=>`<i style="flex:${v2.toFixed(2)};background:${P3BC[j%P3BC.length]}" title="${i(cv5n(p3cl(k).t))}"></i>`).join('')}</div><div class="p1lg">${sh.filter(x=>x[1]>0).map(([k,v2],j)=>`<span><i style="background:${P3BC[j%P3BC.length]}"></i>${i(cv5n(p3cl(k).t))} ${bfN(v2/s.total*100,0)} %</span>`).join('')}</div>`:'';
 return`<div class="screen bf">${bfHdr(p3t('vp'),'bf')}
 <div class="bfmain"><small>${i(p3t('total'))} · ${i(p3t('day'))} ${day} <span class="p3tag">${i(p3t('tag'))}</span></small><b>${i(bfM(s.total))}</b><p class="${gain>=0?'up':'dn'}">${gain>=0?'+':'−'}${i(bfM(Math.abs(gain)))} (${gain>=0?'+':'−'}${i(bfN(Math.abs(pct),1))} %) ${i(p3t('since'))} · ${i(p3t('cash'))} ${i(bfM(s.cash))}</p></div>
 ${day>0?p1Chart(S):''}${bar}
 <div class="p3ffw"><span>${i(p3t('ffw'))}</span><button type="button" data-act="p3ff" data-n="30">${i(p3t('m1'))}</button><button type="button" data-act="p3ff" data-n="365">${i(p3t('y1'))}</button></div>
 ${p3Trade()}
 <h3 class="bfh">${i(p3t('pos'))}</h3>${pos||`<p class="bfnote">${i(p3t('none'))}</p>`}
 <h3 class="bfh">${i(p3t('buy'))}</h3><div class="p3buy">${P3TR.map(cl=>`<button type="button" data-act="p3trade" data-k="${cl.k}" data-s="b"><span>${cl.ic}</span>${i(cv5n(cl.t))}<small>${i(bfN(p3Px(cl.k,day),2))}</small></button>`).join('')}</div>
 <h3 class="bfh">${i(p3t('jr'))}</h3>${p3Journal(day)}
 <button type="button" class="bflink" data-act="p3risk">${i(p3t('toRisk'))} ›</button>
 <p class="bfnote">${i(p3t('play'))} ${i(p3t('fee'))}.</p><button type="button" class="bflink p3rs" data-act="p3reset">${i(p3t('reset'))}</button></div>`}
const P3BC=['var(--gold,#C99A3E)','#3f9d5a','#4a7fb5','#b5674a','#8a6bb5','#5aa8a0','#c2a24a','#9a9a9a','#b54a7f','#6b8a3f'];
function p3Trade(){const T2=m.p3T;if(!T2)return'';const day=p3Day(),s=p3State(day),cl=p3cl(T2.k),px=p3Px(T2.k,day),buy=T2.s==='b';const max=buy?Math.max(0,s.cash):(s.u[T2.k]||0)*px;
 const ex=[['up','eUp'],['safe','eSafe'],['try','eTry']].map(([x,l])=>`<button type="button" class="${(m.p3E||'')===x?'on':''}" data-act="p3exp" data-x="${x}">${i(p3t(l))}</button>`).join('');
 return`<div class="p3tr"><b>${i(p3t(buy?'buy':'sell'))}: ${cl.ic} ${i(cv5n(cl.t))}</b><small>${i(bfN(px,2))} · max ${i(bfM(max))}</small>
 <label class="bff"><span>${i(p3t('amt'))}</span><span class="bfin"><input type="number" inputmode="decimal" min="2" value="${i(m.p3A||'')}" data-p3a="1"><em>€</em></span></label>
 <button type="button" class="bflink" data-act="p3max">${i(p3t('all'))}</button>
 ${buy?`<small>${i(p3t('expQ'))}</small><div class="p3chips">${ex}</div><input class="field" type="text" maxlength="140" placeholder="${i(p3t('why'))}" value="${i(m.p3W||'')}" data-p3w="1">`:''}
 <small>${i(p3t('fee'))}</small><div class="btns"><button type="button" class="btn" data-act="p3x">${i(p3t('cancel'))}</button><button type="button" class="btn primary" data-act="p3do">${i(p3t('ok'))}</button></div></div>`}
function p3Journal(day){const P=p3P();const B=P.tr.filter(t=>t.side==='b'&&(t.why||t.ex)).slice(-12).reverse();if(!B.length)return`<p class="bfnote">${i(p3t('jrT'))}</p>`;
 return B.map(t=>{const cl=p3cl(t.k),age=day-t.d;let res;if(age<90)res=`<em>${i(p3t('wait',{n:90-age}))}</em>`;else{const ch=(p3Px(t.k,day)/t.px-1)*100,w=(p3Px('etf',day)/p3Px('etf',t.d)-1)*100;
  const ok=t.ex==='up'?ch>0:t.ex==='safe'?ch>=w||ch>=0:null;res=`<em class="${ch>=0?'up':'dn'}">${ch>=0?'+':'−'}${bfN(Math.abs(ch),1)} %${ok==null?'':' · '+(ok?'✓ '+p3t('yes'):'✗ '+p3t('no'))}</em><small>${i(p3t('vsW'))}: ${w>=0?'+':'−'}${bfN(Math.abs(w),1)} %</small>`}
  return`<div class="p3j"><b>${cl.ic} ${i(cv5n(cl.t))} · ${i(p3t('day'))} ${t.d} · ${i(bfM(t.eur))}</b>${t.ex?`<small>${i(p3t('expQ'))} ${i(p3t({up:'eUp',safe:'eSafe',try:'eTry'}[t.ex]))}</small>`:''}${t.why?`<small>«${i(t.why)}»</small>`:''}${res}</div>`}).join('')+`<p class="bfnote">${i(p3t('jrT'))}</p>`}
/* ---------- risk check ---------- */
function p3Guess(a){const n=String((a.name||'')+' '+(a.note||'')).toLowerCase();if(/bitcoin|crypto|krypto|крипт|ethereum|btc|eth\b/.test(n))return'crypto';if(/gold|золот|silber|серебр|silver|xetra-gold/.test(n))return'gold';
 if(/tech|nasdaq|ai\b|ки\b|технол/.test(n))return'tech';if(/etf|msci|fonds|фонд|index|индекс|ftse|stoxx/.test(n))return'etf';if(/reit|immobilienfonds/.test(n))return'reit';if(/energ|энерг/.test(n))return'energy';
 const t=a.type||'';if(t==='bonds'||/anleih|облигац|bond/.test(n))return'bond';if(t==='deposit'||t==='savings'||t==='cash'||/festgeld|tagesgeld|вклад|депозит/.test(n))return'cash';if(t==='property'||t==='house')return'home';if(t==='business')return'biz';if(t==='stocks'||t==='inv'||/akti|акци|stock|share|depot/.test(n))return'stock';return'other'}
function p3Mine(){const out=[];try{const F=U(),X=Xo(),ov=bfC().acls||{};const liq=(X.all||0)/100;if(liq>0)out.push({id:'_acc',name:cv5n(['Счета','Konten','Accounts','Konta','Hesaplar','Comptes','Cuentas']),k:'cash',v:liq,fix:1});
  (F.assets||[]).forEach(a=>{const v2=Oa(a.value,a.cur);if(v2==null||v2<=0)return;const g2=p3Guess(a);out.push({id:a.id,name:a.name||'—',k:ov[a.id]||g2,v:v2/100})})}catch(e){Hooks.err('p3mine',e)}return out}
function p3Vpos(){const day=p3Day(),s=p3State(day),out=Object.keys(s.u).map(k=>({id:'vp_'+k,name:cv5n(p3cl(k).t),k,v:s.u[k]*p3Px(k,day),fix:1}));if(s.cash>0)out.push({id:'vp_cash',name:p3t('cash'),k:'cash',v:s.cash,fix:1});return out}
function p3Risk(){const src=m.p3Src||'mine',L=src==='vp'?p3Vpos():p3Mine(),tot=L.reduce((a,x)=>a+x.v,0);
 const tabs=`<div class="p3chips p3src">${[['mine','mine'],['vp','vp']].map(([x,l])=>`<button type="button" class="${src===x?'on':''}" data-act="p3src" data-x="${x}">${i(p3t(l))}</button>`).join('')}</div>`;
 if(!tot)return`<div class="screen bf">${bfHdr(p3t('risk'),m.p3RB||'bf')}${tabs}<p class="bfnote">${i(src==='vp'?p3t('none'):p3t('empty'))}</p></div>`;
 const pc=x=>bfN(x/tot*100,0)+' %';const by={};L.forEach(x=>{by[x.k]=(by[x.k]||0)+x.v});
 const opts=k=>['cash',...P1C.map(c=>c.k),'home','other'].map(c=>`<option value="${c}"${c===k?' selected':''}>${i(cv5n(p3cl(c).t))}</option>`).join('');
 const list=L.map(x=>`<div class="p3pos"><div><b>${i(x.name)}</b>${x.fix?`<small>${p3cl(x.k).ic} ${i(cv5n(p3cl(x.k).t))}</small>`:`<select class="p3sel" data-p3cls="${i(x.id)}">${opts(x.k)}</select>`}</div><em>${i(bfM(x.v))}</em><small class="p3pc">${pc(x.v)}</small></div>`).join('');
 const invK=Object.keys(by).filter(k=>k!=='cash'),invT=invK.reduce((a,k)=>a+by[k],0);let conc;
 if(!invT)conc=`<p>${i(p3t('noInv'))}</p>`;else{const top=invK.sort((a,b)=>by[b]-by[a])[0],p=by[top]/invT*100;conc=`<div class="bfpath">${bfDot(p>60?'r':p>40?'y':'g')}<b>${i(p>40?p3t('concT',{p:bfN(p,0),a:cv5n(p3cl(top).t)}):p3t('concOk',{p:bfN(p,0)}))}</b></div>`}
 const cr=P3CR.map(C=>{let loss=0,miss=0;L.forEach(x=>{const d=C.d[x.k];if(d==null)miss+=x.v;else loss+=x.v*d/100});
  return`<div class="bfpath">${bfDot(loss>=0?'g':-loss/tot>.25?'r':-loss/tot>.1?'y':'g')}<b>${i(p3t(C.k))}</b><span>${loss<0?'−':'+'}${i(bfM(Math.abs(loss)))} (${loss<0?'−':'+'}${bfN(Math.abs(loss)/tot*100,0)} % ${i(p3t('ofCap'))}) · ${i(p3t('recov',{n:C.rec}))}${miss?'<br>'+i(p3t('noHist',{v:bfM(miss)})):''}</span></div>`}).join('');
 let w=0,mo=0,lo=0;L.forEach(x=>{const q=p3cl(x.k).lq;if(q==='always'||q==='days')w+=x.v;else if(q==='weeks')mo+=x.v;else lo+=x.v});
 const lq=[[p3t('lW'),w],[p3t('lM'),mo],[p3t('lL'),lo]].map(([a,b])=>`<div class="bfr"><span>${i(a)}</span><b>${i(bfM(b))} · ${pc(b)}</b></div>`).join('');
 const cash=by.cash||0,usd=L.reduce((a,x)=>a+x.v*(P3USD[x.k]||0),0);
 return`<div class="screen bf">${bfHdr(p3t('risk'),m.p3RB||'bf')}${tabs}
 <div class="bfmain"><small>${i(src==='vp'?p3t('vp'):p3t('mine'))}</small><b>${i(bfM(tot))}</b></div>
 <h3 class="bfh">${i(p3t('comp'))}</h3><div class="p1rows">${list}</div>${src==='mine'&&L.some(x=>!x.fix)?`<p class="bfnote">${i(p3t('guess'))}</p>`:''}
 <h3 class="bfh">${i(p3t('conc'))}</h3>${conc}
 <h3 class="bfh">${i(p3t('crisis'))}</h3>${cr}<p class="bfnote">${i(p3t('crSrc'))}</p>
 <h3 class="bfh">${i(p3t('liq'))}</h3><div class="p1rows">${lq}</div>
 <h3 class="bfh">${i(p3t('infl'))}</h3><p class="bfas">${i(p3t('inflT',{v:bfM(cash),l:bfM(cash*.02)}))}</p>
 <h3 class="bfh">${i(p3t('cur'))}</h3><p class="bfas">${i(p3t('curT',{v:bfM(usd),p:bfN(usd/tot*100,0),l:bfM(usd*.1)}))}</p><p class="bfnote">${i(p3t('curN'))}</p>
 <p class="bfnote">${i(bft('notAdvice'))}</p></div>`}
/* ---------- routes, actions, inputs ---------- */
['bfp','bfr'].forEach(r=>{Te.includes(r)||Te.push(r);BF_R.push(r)});
(Hooks.h.screen=Hooks.h.screen||[]).unshift(()=>{if((m.route==='bfp'||m.route==='bfr')&&!g.bfoff){try{return m.route==='bfp'?p3Vp():p3Risk()}catch(e){Hooks.err('p3screen',e)}}});
const p3v=()=>{try{k3keep(()=>v())}catch{v()}};
Hooks.act('p3st',e=>{m.p3St=+e.v;p3v()});
Hooks.act('p3begin',()=>{const P=p3P();P.start=Math.max(100,Math.min(1e7,+m.p3St||10000));P.cash=P.start;P.t0=Date.now();P.skip=0;P.seed=V();P.tr=[];p3Cache={};$();p3v()});
Hooks.act('p3ff',e=>{const P=p3P();P.skip=(P.skip||0)+(+e.n||30);$();p3v()});
Hooks.act('p3trade',e=>{m.p3T={k:e.k,s:e.s};m.p3A='';m.p3W='';m.p3E='';p3v();setTimeout(()=>{const el=document.querySelector('.p3tr');if(el)el.scrollIntoView({block:'center',behavior:'smooth'})},60)});
Hooks.act('p3x',()=>{m.p3T=null;p3v()});
Hooks.act('p3exp',e=>{m.p3E=m.p3E===e.x?'':e.x;p3v()});
Hooks.act('p3max',()=>{const T2=m.p3T;if(!T2)return;const day=p3Day(),s=p3State(day);m.p3A=String(Math.floor((T2.s==='b'?s.cash:(s.u[T2.k]||0)*p3Px(T2.k,day))*100)/100);p3v()});
Hooks.act('p3do',()=>{const T2=m.p3T;if(!T2)return;const P=p3P(),day=p3Day(),s=p3State(day),px=p3Px(T2.k,day),eur=parseFloat(String(m.p3A||'').replace(',','.'));if(!(eur>1)){T(p3t('amt')+'?');return}
 if(T2.s==='b'){if(eur>s.cash+.005){T(p3t('noCash'));return}P.tr.push({id:V(),d:day,k:T2.k,side:'b',eur,units:(eur-1)/px,px,fee:1,why:String(m.p3W||'').trim().slice(0,140),ex:m.p3E||''})}
 else{const have=(s.u[T2.k]||0)*px;const val=Math.min(eur,have);const units=val>=have-.05?s.u[T2.k]:val/px;P.tr.push({id:V(),d:day,k:T2.k,side:'s',eur:units*px-1,units,px,fee:1})}
 m.p3T=null;$();T(p3t('done'));p3v()});
Hooks.act('p3reset',()=>{if(!confirm(p3t('resetQ')))return;bfC().vp={};p3Cache={};m.p3T=null;$();p3v()});
Hooks.act('p3risk',()=>{m.p3Src='vp';m.p3RB=m.route;R('bfr')});
Hooks.act('p3src',e=>{m.p3Src=e.x;p3v()});
document.addEventListener('input',e=>{const t=e.target;if(!t||!t.dataset)return;if(t.dataset.p3a)m.p3A=t.value;if(t.dataset.p3w)m.p3W=t.value;if(t.dataset.p3st){const n=parseFloat(String(t.value).replace(',','.'));if(n>0)m.p3St=n}},!0);
document.addEventListener('change',e=>{const t=e.target;if(!t||!t.dataset||!t.dataset.p3cls)return;const c=bfC();c.acls=c.acls||{};c.acls[t.dataset.p3cls]=t.value;$();p3v()},!0);
/* tiles in the decision centre, right after the laboratory; and a link from the stress test */
BF_K.vp={t:p3S.vp,ic:'🎮'};BF_K.risk={t:p3S.risk,ic:'🛡️'};BF_ORDER.splice(BF_ORDER.indexOf('lab')+1,0,'vp','risk');
Hooks.act('bfopen',e=>{if(e.k==='lab'){R('bfx');return}if(e.k==='vp'){R('bfp');return}if(e.k==='risk'){m.p3Src='mine';m.p3RB='bf';R('bfr');return}bfOpen(e.k)},{replace:!0});
Hooks.on('render',()=>{try{if(m.route!=='bfh'||g.bfoff)return;const sc=document.querySelector('.screen.bf');if(!sc||sc.querySelector('.p3link'))return;const b=document.createElement('button');b.type='button';b.className='bflink p3link';b.dataset.act='bfopen';b.dataset.k='risk';b.textContent=p3t('risk')+' ›';const n=sc.querySelector('.bfnote:last-child');sc.insertBefore(b,n||null)}catch(e){Hooks.err('p3link',e)}});
Hooks.css('prognoz-stage3',`
.p3chips{display:flex;flex-wrap:wrap;gap:8px}.p3chips button{border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:14px;padding:8px 14px;border-radius:999px;cursor:pointer}.p3chips button.on{background:var(--gold,#C99A3E);color:#15120b;border-color:transparent}
.p3go{align-self:stretch}.p3tag{font-size:11px;padding:1px 7px;border-radius:999px;background:color-mix(in srgb,var(--gold,#C99A3E) 22%,transparent);color:var(--ink);margin-left:4px}
.bfmain p.up,.p3pos em.up,.p3j em.up{color:#3f9d5a}.bfmain p.dn,.p3pos em.dn,.p3j em.dn{color:#c0563f}
.p3bar{display:flex;height:12px;border-radius:6px;overflow:hidden;gap:2px}.p3bar i{display:block;min-width:3px}
.p3ffw{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:13.5px;color:var(--muted)}.p3ffw span{flex:1 1 100%}.p3ffw button{flex:1;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;padding:9px;border-radius:12px;cursor:pointer}
.p3pos{display:grid;grid-template-columns:1fr auto;gap:2px 10px;align-items:center;padding:10px 0;border-top:1px solid var(--line)}.p1rows>.p3pos:first-child{border-top:0}.p3pos>div{display:flex;flex-direction:column;gap:2px;min-width:0}.p3pos b{font-weight:500}.p3pos small{color:var(--muted);font-size:12.5px}.p3pos em{font-style:normal;font-weight:600;text-align:right}.p3pos .bflink{grid-column:1/-1;justify-self:start;padding:0}.p3pos .p3pc{grid-column:2;text-align:right}
.screen.bf>.p3pos{border-radius:14px;border:1px solid var(--line);background:var(--surface);padding:10px 14px}
.p3buy{display:grid;grid-template-columns:1fr 1fr;gap:8px}.p3buy button{display:flex;flex-direction:column;align-items:flex-start;gap:2px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:13.5px;text-align:left;padding:10px;border-radius:14px;cursor:pointer}.p3buy span{font-size:18px}.p3buy small{color:var(--muted);font-size:12px}
.p3tr{display:flex;flex-direction:column;gap:8px;padding:14px;border-radius:16px;border:1.5px solid var(--gold,#C99A3E);background:var(--surface)}.p3tr>small{color:var(--muted);font-size:12.5px}.p3tr .bflink{align-self:flex-start;padding:0}.p3tr .btns{display:flex;gap:8px}.p3tr .btns .btn{flex:1}
.p3j{display:flex;flex-direction:column;gap:2px;padding:10px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface)}.p3j b{font-weight:500;font-size:14px}.p3j small{color:var(--muted);font-size:12.5px}.p3j em{font-style:normal;font-weight:600}
.p3sel{font:inherit;font-size:12.5px;color:var(--ink);background:transparent;border:1px solid var(--line);border-radius:8px;padding:3px 6px;max-width:100%}
.p3rs{opacity:.7}.p3src{margin-top:2px}
`);
