/* ===== v277 «Прогноз», stage 1 =====
   - A chart by year in every calculation (three scenario lines + «вложено самим»), tap a year to read it.
   - Numbers in the language's format (0,2 % not 0.2 %); tax written in words.
   - Every field says where its number comes from: «из Финансов» or «пример — измените»; the main fields first,
     the rest under «Допущения»; the first three detail rows always visible.
   - «Сравнить решения» answers three questions: cheaper / faster / safer.
   - Laboratory: 10 investment directions with the same fields (swings, liquidity, German tax, a bad year),
     a simulator per direction and a side-by-side comparison of up to three.
   Returns in the lab are Butler's calculation assumptions, clearly labelled — not history and not a forecast.
   Market data (quotes, real history) comes in stage 2. */
const p1S={
 fin:['из Финансов','aus Finanzen','from Finance','z Finansów','Finans verisi','de Finances','de Finanzas'],
 ex:['пример — измените','Beispiel – ändern','example – change','przykład – zmień','örnek – değiştirin','exemple – modifiez','ejemplo: cámbielo'],
 noFin:['Внесите доходы, расходы и счета в «Финансы» — тогда здесь будут ваши цифры.','Tragen Sie Einnahmen, Ausgaben und Konten in «Finanzen» ein – dann stehen hier Ihre Zahlen.','Add income, expenses and accounts in Finance – then your own numbers appear here.','Dodaj dochody, wydatki i konta w Finansach – wtedy pojawią się tu Twoje liczby.','Finans bölümüne gelir, gider ve hesap ekleyin – burada kendi rakamlarınız görünür.','Ajoutez revenus, dépenses et comptes dans Finances – vos chiffres apparaîtront ici.','Añada ingresos, gastos y cuentas en Finanzas: aquí aparecerán sus cifras.'],
 assum:['Допущения','Annahmen','Assumptions','Założenia','Varsayımlar','Hypothèses','Supuestos'],
 more:['Ещё','Mehr','More','Więcej','Daha fazla','Plus','Más'],
 year:['Год','Jahr','Year','Rok','Yıl','Année','Año'],
 tap:['Нажмите на график, чтобы увидеть год','Tippen Sie in die Grafik für ein Jahr','Tap the chart to see a year','Dotknij wykresu, aby zobaczyć rok','Bir yılı görmek için grafiğe dokunun','Touchez le graphique pour voir une année','Toque el gráfico para ver un año'],
 paid:['вложено самим','selbst eingezahlt','paid in yourself','wpłacone','yatırılan','versé','aportado'],
 bal:['остаток долга','Restschuld','balance','saldo','kalan borç','capital restant','saldo'],
 before:['было','vorher','before','przed','önce','avant','antes'],after:['стало','nachher','after','po','sonra','après','después'],
 value:['сумма','Betrag','value','wartość','değer','valeur','valor'],power:['покупательная сила','Kaufkraft','purchasing power','siła nabywcza','satın alma gücü','pouvoir d’achat','poder adquisitivo'],
 wBuy:['если купить','bei Kauf','if buying','przy zakupie','satın alırsanız','si achat','si compra'],wRent:['если снимать и вкладывать','Miete + Anlage','rent + invest','najem + inwestycja','kira + yatırım','location + placement','alquiler + inversión'],
 cau:['осторожный','vorsichtig','cautious','ostrożny','temkinli','prudent','prudente'],base:['базовый','Basis','base','bazowy','temel','de base','base'],good:['хороший','gut','good','dobry','iyi','favorable','bueno'],
 extra:['доп. расходы','Mehrkosten','extra cost','dodatkowy koszt','ek maliyet','surcoût','coste extra'],noExtra:['без доп. расходов','ohne Mehrkosten','no extra cost','bez dodatkowych kosztów','ek maliyet yok','sans surcoût','sin coste extra'],
 res:['Итог','Ergebnis','Result','Wynik','Sonuç','Résultat','Resultado'],
 cheaper:['Дешевле','Günstiger','Cheaper','Taniej','Daha ucuz','Moins cher','Más barato'],faster:['Быстрее','Schneller','Faster','Szybciej','Daha hızlı','Plus rapide','Más rápido'],safer:['Безопаснее','Sicherer','Safer','Bezpieczniej','Daha güvenli','Plus sûr','Más seguro'],
 now:['сразу','sofort','right away','od razu','hemen','tout de suite','enseguida'],inMo:['через %n мес.','in %n Mon.','in %n mo','za %n mies.','%n ay sonra','dans %n mois','en %n meses'],
 noDebt:['без долга','ohne Schulden','no debt','bez długu','borçsuz','sans dette','sin deuda'],reserve:['останется запас','Reserve bleibt','reserve stays','zostaje rezerwa','yedek kalır','la réserve reste','queda reserva'],
 tax:['налог на доход','Steuer auf Erträge','tax on gains','podatek od zysków','kazanç vergisi','impôt sur les gains','impuesto sobre ganancias'],
 lab:['Лаборатория','Labor','Lab','Laboratorium','Laboratuvar','Laboratoire','Laboratorio'],
 labSub:['10 направлений: сравните и просчитайте','10 Richtungen: vergleichen und rechnen','10 directions: compare and calculate','10 kierunków: porównaj i policz','10 alan: karşılaştırın ve hesaplayın','10 pistes : comparez et calculez','10 opciones: compare y calcule'],
 labNote:['Доходности и «плохой год» — допущения Butler для расчёта, не история и не прогноз. Меняйте их под себя. Настоящие исторические данные появятся с подключением котировок.','Renditen und «schlechtes Jahr» sind Rechenannahmen von Butler, keine Historie und keine Prognose. Echte Kursdaten kommen mit der Kursanbindung.','Returns and the “bad year” are Butler’s calculation assumptions – not history and not a forecast. Real price history comes with market data.','Stopy zwrotu i „zły rok” to założenia Butlera – nie historia ani prognoza. Prawdziwe dane przyjdą z notowaniami.','Getiriler ve “kötü yıl” Butler’ın hesap varsayımlarıdır – geçmiş ya da tahmin değildir. Gerçek veriler fiyat bağlantısıyla gelecek.','Rendements et « mauvaise année » sont des hypothèses de calcul de Butler – ni historique ni prévision. Les vraies données viendront avec les cours.','Rentabilidades y «mal año» son supuestos de cálculo de Butler: no son historia ni previsión. Los datos reales llegarán con las cotizaciones.'],
 swings:['Колебания','Schwankung','Swings','Wahania','Dalgalanma','Variations','Oscilaciones'],liq:['Ликвидность','Liquidität','Liquidity','Płynność','Likidite','Liquidité','Liquidez'],
 taxDE:['Налог в Германии','Steuer in Deutschland','Tax in Germany','Podatek w Niemczech','Almanya’da vergi','Impôt en Allemagne','Impuesto en Alemania'],
 bad:['Плохой год (допущение)','Schlechtes Jahr (Annahme)','Bad year (assumption)','Zły rok (założenie)','Kötü yıl (varsayım)','Mauvaise année (hypothèse)','Mal año (supuesto)'],
 calc:['Просчитать моё вложение','Meine Anlage berechnen','Calculate my investment','Policz moją inwestycję','Yatırımımı hesapla','Calculer mon placement','Calcular mi inversión'],
 pick3:['Отметьте до 3 направлений, чтобы сравнить','Bis zu 3 Richtungen markieren zum Vergleichen','Tick up to 3 directions to compare','Zaznacz do 3 kierunków, aby porównać','Karşılaştırmak için en fazla 3 alan işaretleyin','Cochez jusqu’à 3 pistes pour comparer','Marque hasta 3 opciones para comparar'],
 cmpHead:['Если вкладывать %m в месяц %y лет','Bei %m monatlich über %y Jahre','Investing %m a month for %y years','Wpłacając %m miesięcznie przez %y lat','Ayda %m, %y yıl boyunca','En versant %m par mois pendant %y ans','Invirtiendo %m al mes durante %y años'],
 trade:['Что чем платится','Was womit bezahlt wird','The trade-off','Co za co','Neyin karşılığında ne','Le prix à payer','Qué se paga con qué'],
 tradeT:['«%a» в базовом сценарии даёт больше, но в плохой год может упасть сильнее: до −%w %.','«%a» bringt im Basisszenario mehr, kann im schlechten Jahr aber stärker fallen: bis −%w %.','“%a” gives more in the base case but can fall harder in a bad year: up to −%w%.','„%a” daje więcej w scenariuszu bazowym, ale w złym roku może spaść mocniej: do −%w%.','“%a” temel senaryoda daha çok getirir ama kötü yılda daha sert düşebilir: −%w%’e kadar.','« %a » rapporte plus dans le scénario de base mais peut chuter davantage : jusqu’à −%w %.','«%a» da más en el escenario base, pero en un mal año puede caer más: hasta −%w %.'],
 lv:[['спокойные','ruhig','calm','spokojne','sakin','calmes','tranquilas'],['умеренные','mäßig','moderate','umiarkowane','orta','modérées','moderadas'],['сильные','stark','strong','silne','güçlü','fortes','fuertes'],['очень сильные','sehr stark','very strong','bardzo silne','çok güçlü','très fortes','muy fuertes']]};
const p1t=(k,o)=>{let t=cv5n(p1S[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const p1dec=s=>String(s).replace(/(\d)\.(\d)/g,'$1'+(g.lang==='en'?'.':',')+'$2');
/* ---------- the ten directions (assumptions, editable in the simulator) ---------- */
const P1TAX={etf:['26,4 % с прибыли, 30 % прибыли без налога (Teilfreistellung)','26,4 % auf Gewinne, 30 % steuerfrei (Teilfreistellung)','26.4% on gains, 30% tax-free (Teilfreistellung)','26,4% od zysku, 30% zwolnione (Teilfreistellung)','kazancın %26,4’ü, %30’u vergisiz (Teilfreistellung)','26,4 % sur les gains, 30 % exonérés (Teilfreistellung)','26,4 % sobre ganancias, 30 % exento (Teilfreistellung)'],
 stock:['26,4 % с прибыли (Abgeltungsteuer)','26,4 % auf Gewinne (Abgeltungsteuer)','26.4% on gains (Abgeltungsteuer)','26,4% od zysku (Abgeltungsteuer)','kazancın %26,4’ü (Abgeltungsteuer)','26,4 % sur les gains (Abgeltungsteuer)','26,4 % sobre ganancias (Abgeltungsteuer)'],
 bond:['26,4 % с процентов и прибыли','26,4 % auf Zinsen und Gewinne','26.4% on interest and gains','26,4% od odsetek i zysków','faiz ve kazancın %26,4’ü','26,4 % sur intérêts et gains','26,4 % sobre intereses y ganancias'],
 year1:['после 1 года владения — без налога (§ 23 EStG)','nach 1 Jahr Haltedauer steuerfrei (§ 23 EStG)','tax-free after holding 1 year (§ 23 EStG)','po 1 roku posiadania – bez podatku (§ 23 EStG)','1 yıl tutunca vergisiz (§ 23 EStG)','exonéré après 1 an de détention (§ 23 EStG)','exento tras 1 año (§ 23 EStG)'],
 biz:['подоходный и промысловый налог — отдельно','Einkommen- und Gewerbesteuer – gesondert','income and trade tax – separately','podatek dochodowy i lokalny – osobno','gelir ve ticaret vergisi – ayrıca','impôt sur le revenu et taxe professionnelle – à part','IRPF e impuesto comercial – aparte']};
const P1LQ={days:['1–3 дня','1–3 Tage','1–3 days','1–3 dni','1–3 gün','1–3 jours','1–3 días'],always:['в любое время','jederzeit','any time','w każdej chwili','her an','à tout moment','en cualquier momento'],weeks:['дни — недели','Tage – Wochen','days – weeks','dni – tygodnie','gün – hafta','jours – semaines','días – semanas'],slow:['месяцы — годы','Monate – Jahre','months – years','miesiące – lata','ay – yıl','mois – années','meses – años']};
const P1C=[
 {k:'stock',ic:'📊',t:['Фондовый рынок: отдельные акции','Aktien: Einzeltitel','Stock market: single shares','Rynek akcji: pojedyncze spółki','Hisse: tek tek','Actions individuelles','Acciones individuales'],r:[0,6,10],bad:60,lv:3,lq:'days',tx:'stock',ter:0},
 {k:'crypto',ic:'🪙',t:['Криптовалюты','Kryptowährungen','Crypto','Kryptowaluty','Kripto paralar','Cryptomonnaies','Criptomonedas'],r:[-10,5,20],bad:75,lv:3,lq:'always',tx:'year1',ter:.5},
 {k:'etf',ic:'🌍',t:['ETF и фонды (мировой индекс)','ETF und Fonds (Welt)','ETFs and funds (world index)','ETF i fundusze (świat)','ETF ve fonlar (dünya)','ETF et fonds (monde)','ETF y fondos (mundial)'],r:[3,6,8],bad:35,lv:2,lq:'days',tx:'etf',ter:.2},
 {k:'bond',ic:'📜',t:['Облигации','Anleihen','Bonds','Obligacje','Tahviller','Obligations','Bonos'],r:[1,2.5,4],bad:15,lv:1,lq:'days',tx:'bond',ter:.15},
 {k:'gold',ic:'🥇',t:['Драгоценные металлы','Edelmetalle','Precious metals','Metale szlachetne','Değerli metaller','Métaux précieux','Metales preciosos'],r:[0,3,6],bad:30,lv:2,lq:'days',tx:'year1',ter:.3},
 {k:'reit',ic:'🏢',t:['Недвижимость (фонды)','Immobilien (Fonds)','Real estate (funds)','Nieruchomości (fundusze)','Gayrimenkul (fon)','Immobilier (fonds)','Inmobiliario (fondos)'],r:[1,4,7],bad:40,lv:2,lq:'days',tx:'stock',ter:.4},
 {k:'energy',ic:'⚡',t:['Энергетика','Energie','Energy','Energetyka','Enerji','Énergie','Energía'],r:[0,4,8],bad:45,lv:3,lq:'days',tx:'etf',ter:.35},
 {k:'tech',ic:'🤖',t:['Технологии и ИИ','Technologie und KI','Technology and AI','Technologie i AI','Teknoloji ve YZ','Technologie et IA','Tecnología e IA'],r:[2,7,11],bad:50,lv:3,lq:'days',tx:'etf',ter:.35},
 {k:'industry',ic:'🏭',t:['Промышленность','Industrie','Industry','Przemysł','Sanayi','Industrie','Industria'],r:[1,5,8],bad:40,lv:2,lq:'days',tx:'etf',ter:.35},
 {k:'biz',ic:'🧰',t:['Собственный бизнес','Eigenes Unternehmen','Own business','Własny biznes','Kendi işiniz','Propre entreprise','Negocio propio'],r:[-20,5,15],bad:100,lv:3,lq:'slow',tx:'biz',ter:0}];
const p1cls=k=>P1C.find(x=>x.k===k)||P1C[2];
function p1net(cl,start,monthly,rate,years){const gross=bfGrow(start,monthly,rate,years,cl.ter),paid=start+monthly*years*12,gain=Math.max(0,gross-paid);let tax=0;
 if(cl.tx==='etf')tax=Math.max(0,gain*(1-BF_TFS)-BF_FREE)*BF_TAX;else if(cl.tx==='stock'||cl.tx==='bond')tax=Math.max(0,gain-BF_FREE)*BF_TAX;else if(cl.tx==='year1')tax=years>=1?0:gain*.42;return{gross,paid,net:gross-tax,tax}}
/* ---------- the simulator per direction ---------- */
BF_K.inv={t:['Вложение по направлению','Anlage nach Richtung','Investment by direction','Inwestycja wg kierunku','Alana göre yatırım','Placement par piste','Inversión por opción'],ic:'🧪',mf:3,
 f:c=>{const cl=p1cls(m.bfP&&m.bfP.cls);return[bfF('monthly',['В месяц','Monatlich','Monthly','Miesięcznie','Aylık','Par mois','Mensual'],0,5000,10,c.free?Math.min(500,Math.round(c.free/2/10)*10):200,'€',c.months?'fin':'ex'),bfF('years',['Лет','Jahre','Years','Lata','Yıl','Ans','Años'],1,40,1,10,''),bfF('start',['Сейчас','Startbetrag','Start','Na start','Başlangıç','Départ','Inicial'],0,500000,100,0,'€'),
  bfF('rate',['Базовая доходность, % (допущение)','Basisrendite, % (Annahme)','Base return, % (assumption)','Bazowy zwrot, % (założenie)','Temel getiri, % (varsayım)','Rendement de base, % (hypothèse)','Rentabilidad base, % (supuesto)'],-20,25,.5,cl.r[1],'%'),bfF('bad',['Плохой год, −% (допущение)','Schlechtes Jahr, −% (Annahme)','Bad year, −% (assumption)','Zły rok, −% (założenie)','Kötü yıl, −% (varsayım)','Mauvaise année, −% (hypothèse)','Mal año, −% (supuesto)'],0,100,5,cl.bad,'%')]},
 run:(p,c)=>{const cl=p1cls(p.cls),d=p.rate-cl.r[1];const S=cl.r.map(r2=>p1net(cl,p.start,p.monthly,r2+d,p.years));const b=S[1],loss=b.gross*p.bad/100;
  return{main:[cv5n(cl.t)+' · '+cv5n([`через ${p.years} лет (базовый)`,`nach ${p.years} J. (Basis)`,`after ${p.years} yrs (base)`,`po ${p.years} latach (bazowy)`,`${p.years} yıl sonra (temel)`,`après ${p.years} ans (base)`,`tras ${p.years} años (base)`]),bfM(b.net)],scen:S.map(x=>x.net),
   rows:[[cv5n(['Вложите','Eingezahlt','Paid in','Wpłacisz','Yatırılan','Versé','Aportado']),bfM(b.paid)],[p1t('bad'),'−'+bfM(loss)+(c.inc?` · ${bfN(loss/c.inc)} ${bft('mInc')}`:'')],[p1t('taxDE'),cv5n(P1TAX[cl.tx])],[p1t('liq'),cv5n(P1LQ[cl.lq])],[cv5n(['Налог ≈','Steuer ≈','Tax ≈','Podatek ≈','Vergi ≈','Impôt ≈','Impuesto ≈']),bfM(b.tax)]],
   risk:cl.lv>=3?'r':cl.lv===2?'y':'g',assume:`${bfN(cl.r[0]+d,1)} / ${bfN(p.rate,1)} / ${bfN(cl.r[2]+d,1)} %, ${cv5n(['комиссия','Kosten','costs','koszty','maliyet','frais','costes'])} ${bfN(cl.ter,2)} %`}},
 ser:(p,c)=>{const cl=p1cls(p.cls),d=p.rate-cl.r[1],Y=[...Array(p.years+1).keys()];return{x:Y,L:[...cl.r.map((r2,j)=>({n:p1t(['cau','base','good'][j]),k:['q','b','g'][j],v:Y.map(y=>p1net(cl,p.start,p.monthly,r2+d,y).net)})),{n:p1t('paid'),k:'p',v:Y.map(y=>p.start+p.monthly*12*y)}]}}};
/* ---------- series for the charts ---------- */
const p1Y=n=>[...Array(Math.max(1,Math.round(n))+1).keys()];
const p1Bal=(P,rate,pay,years,yearly,extraM)=>{const out=[P];let b2=P;const r=rate/1200;for(let k=1;k<=years*12;k++){b2=Math.max(0,b2*(1+r)-pay-(extraM||0));if(yearly&&k%12===0)b2=Math.max(0,b2-yearly);if(k%12===0)out.push(b2)}return out};
BF_K.loan.ser=p=>{const pay=bfAnn(p.amt+p.fee,p.rate,p.years*12);const v2=p1Bal(p.amt+p.fee,p.rate,pay,p.years);return{x:p1Y(p.years),L:[{n:p1t('bal'),k:'b',v:v2}]}};
BF_K.mort.ser=p=>{const nk=p.price*p.nk/100,loan=Math.max(0,p.price+nk-p.own),pay=loan*(p.rate+p.tilg)/1200;const a=bfAmort(loan,p.rate,pay,0,1200,p.sonder);const yrs=Math.min(45,Math.ceil(a.months/12));return{x:p1Y(yrs),L:[{n:p1t('bal'),k:'b',v:p1Bal(loan,p.rate,pay,yrs,p.sonder)}],mark:p.fix}};
BF_K.early.ser=p=>{const a=bfAmort(p.bal,p.rate,p.pay,0);if(a.months>1200)return null;const yrs=Math.ceil(a.months/12);return{x:p1Y(yrs),L:[{n:p1t('before'),k:'q',v:p1Bal(p.bal,p.rate,p.pay,yrs)},{n:p1t('after'),k:'b',v:p1Bal(Math.max(0,p.bal-p.once),p.rate,p.pay,yrs,0,p.extra)}]}};
BF_K.dep.ser=p=>{const Y=p1Y(p.years);return{x:Y,L:[{n:p1t('value'),k:'b',v:Y.map(y=>bfGrow(p.start,p.monthly,p.rate,y))},{n:p1t('power'),k:'q',v:Y.map(y=>bfGrow(p.start,p.monthly,p.rate,y)/Math.pow(1+p.infl/100,y))},{n:p1t('paid'),k:'p',v:Y.map(y=>p.start+p.monthly*12*y)}]}};
BF_K.target.ser=p=>{const n=p.years*12,r=p.rate/1200,need=Math.max(0,p.goal-p.start*Math.pow(1+r,n)),m2=r?need*r/(Math.pow(1+r,n)-1):need/n;const Y=p1Y(p.years);return{x:Y,L:[{n:p1t('value'),k:'b',v:Y.map(y=>bfGrow(p.start,m2,p.rate,y))},{n:p1t('paid'),k:'p',v:Y.map(y=>p.start+m2*12*y)}]}};
BF_K.infl.ser=p=>{const Y=p1Y(20);return{x:Y,L:[{n:p1t('power'),k:'b',v:Y.map(y=>p.amt/Math.pow(1+p.infl/100,y))}]}};
BF_K.etf.ser=p=>{const Y=p1Y(p.years);return{x:Y,L:[...[p.rate-3,p.rate,p.rate+2].map((r2,j)=>({n:p1t(['cau','base','good'][j]),k:['q','b','g'][j],v:Y.map(y=>bfEtfNet(p.start,p.monthly,Math.max(-2,r2),y,p.ter).net)})),{n:p1t('paid'),k:'p',v:Y.map(y=>p.start+p.monthly*12*y)}]}};
BF_K.rent.ser=p=>{const nk=p.price*.1,loan=Math.max(0,p.price+nk-p.own),pay=loan*(p.rate+2)/1200,upkeep=p.price*.01/12,r=p.ret/1200;const bal=p1Bal(loan,p.rate,pay,p.years);let inv=p.own,rent=p.rent;const vb=[p.price-loan],vr=[p.own];
 const am=bfAmort(loan,p.rate,pay,0).months;for(let k=0;k<p.years*12;k++){const left=k<am;inv=inv*(1+r)+Math.max(0,(left?pay:0)+upkeep-rent);if(k%12===11){rent*=1.02;const y=(k+1)/12;vb.push(p.price*Math.pow(1+p.grow/100,y)-(bal[y]||0));vr.push(inv)}}
 return{x:p1Y(p.years),L:[{n:p1t('wBuy'),k:'b',v:vb},{n:p1t('wRent'),k:'g',v:vr}]}};
/* field sources and main fields */
BF_K.loan.mf=3;BF_K.mort.mf=4;BF_K.early.mf=3;BF_K.dep.mf=3;BF_K.target.mf=3;BF_K.infl.mf=2;BF_K.etf.mf=3;BF_K.rent.mf=4;BF_K.decide.mf=3;
{const tag=(k,ids,cond)=>{const f0=BF_K[k].f;BF_K[k].f=c=>f0(c).map(x=>ids.includes(x.id)?Object.assign(x,{src:cond(c)?'fin':'ex'}):x)};
 tag('decide',['cash'],c=>c.liquid>0);tag('decide',['free'],c=>c.months>0);tag('mort',['own'],c=>c.liquid>0);tag('dep',['start'],c=>c.liquid>0);tag('early',['bal','rate','pay'],c=>c.debts.length>0)}
/* the decision answers three questions */
{const r0=BF_K.decide.run;BF_K.decide.run=(p,c)=>{const r=r0(p,c);try{const P=r.paths,ok=P.filter(x=>x.cost!=null);if(!ok.length)return r;
 const cheap=ok.filter(x=>x.k!=='inv').sort((a,b)=>a.cost-b.cost)[0]||ok[0];const fast=ok.filter(x=>x.wait!=null).sort((a,b)=>a.wait-b.wait||(a.k==='cash'?-1:1))[0];
 const safe=(P[0].cost!=null&&P[0].risk==='g')?P[0]:(P[2].cost!=null?P[2]:P[1]);
 const w=x=>x.wait?p1t('inMo',{n:x.wait}):p1t('now');
 r.trio=[[p1t('cheaper'),cheap.t,cheap.cost>0?p1t('extra')+' '+bfM(cheap.cost):p1t('noExtra')],[p1t('faster'),fast?fast.t:'—',fast?w(fast):''],[p1t('safer'),safe.t,safe.k==='cash'?p1t('reserve'):p1t('noDebt')]];r.main=[p1t('res'),''];r.summary=''}catch(e){Hooks.err('p1trio',e)}return r}}
/* ---------- chart ---------- */
const P1COL={b:'var(--gold,#C99A3E)',g:'#3f9d5a',q:'color-mix(in srgb,var(--ink) 45%,transparent)',p:'color-mix(in srgb,var(--ink) 35%,transparent)'};
function p1Chart(S){if(!S||!S.L||!S.L.length||S.x.length<2)return'';const W=340,H=170,l=48,r=8,t=10,b=22;const all=S.L.flatMap(x=>x.v).filter(isFinite);let lo=Math.min(0,...all),hi=Math.max(...all);if(hi===lo)hi=lo+1;
 const X=j=>l+(W-l-r)*j/(S.x.length-1),Y=v=>t+(H-t-b)*(1-(v-lo)/(hi-lo));const short=v=>{const a=Math.abs(v);return(v<0?'−':'')+(a>=1e6?bfN(a/1e6,1)+' M':a>=1e3?bfN(a/1e3,0)+' k':bfN(a,0))};
 const step=Math.max(1,Math.ceil((S.x.length-1)/5));const ticks=S.x.filter((_,j)=>j%step===0||j===S.x.length-1);
 const lines=S.L.map(L2=>`<path d="${L2.v.map((v,j)=>(j?'L':'M')+X(j).toFixed(1)+' '+Y(v).toFixed(1)).join('')}" fill="none" stroke="${P1COL[L2.k]||P1COL.b}" stroke-width="${L2.k==='b'?2.4:1.6}" ${L2.k==='p'?'stroke-dasharray="4 3"':''}/>`).join('');
 const mark=S.mark&&S.mark<S.x.length?`<line x1="${X(S.mark)}" x2="${X(S.mark)}" y1="${t}" y2="${H-b}" stroke="${P1COL.p}" stroke-dasharray="2 3"/>`:'';
 const data=i(JSON.stringify({u:S.u,x:S.x,L:S.L.map(L2=>({n:L2.n,v:L2.v.map(v=>Math.round(v))}))}));
 return`<div class="p1ch" data-p1="${data}"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><line x1="${l}" x2="${W-r}" y1="${Y(0)}" y2="${Y(0)}" stroke="${P1COL.p}"/>${mark}${lines}<text x="${l-6}" y="${t+8}" text-anchor="end" font-size="10" fill="currentColor" opacity=".6">${short(hi)}</text><text x="${l-6}" y="${H-b}" text-anchor="end" font-size="10" fill="currentColor" opacity=".6">${short(lo)}</text>${ticks.map(y=>`<text x="${X(S.x.indexOf(y))}" y="${H-6}" text-anchor="middle" font-size="10" fill="currentColor" opacity=".6">${y}</text>`).join('')}<line class="p1cur" x1="0" x2="0" y1="${t}" y2="${H-b}" stroke="currentColor" opacity="0"/></svg>
 <div class="p1lg">${S.L.map(L2=>`<span><i style="background:${P1COL[L2.k]||P1COL.b}"></i>${i(L2.n)}</span>`).join('')}</div><div class="p1rd">${i(p1t('tap'))}</div></div>`}
function p1Read(el,ev){try{const D=JSON.parse(el.dataset.p1),sv=el.querySelector('svg'),R2=sv.getBoundingClientRect();const fx=(ev.clientX-R2.left)/R2.width*340;const j=Math.max(0,Math.min(D.x.length-1,Math.round((fx-48)/(340-56)*(D.x.length-1))));
 const cur=sv.querySelector('.p1cur'),xx=48+(340-56)*j/(D.x.length-1);cur.setAttribute('x1',xx);cur.setAttribute('x2',xx);cur.setAttribute('opacity','.35');
 el.querySelector('.p1rd').textContent=(D.u!=null?D.u:p1t('year')+' ')+D.x[j]+': '+D.L.map(L2=>L2.n+' '+bfM(L2.v[j])).join(' · ')}catch{}}
document.addEventListener('pointerdown',e=>{const el=e.target.closest&&e.target.closest('.p1ch');if(el)p1Read(el,e)},{passive:!0});
document.addEventListener('pointermove',e=>{if(!e.buttons&&e.pointerType!=='mouse')return;const el=e.target.closest&&e.target.closest('.p1ch');if(el)p1Read(el,e)},{passive:!0});
/* ---------- result and calculator screens (replace the first versions) ---------- */
bfRes=function(k,p){const c=bfCtx(),D=BF_K[k],r=D.run(p,c);const rows=(r.rows||[]).filter(Boolean);
 const scen=r.scen?`<div class="bfscen">${r.scen.map((x,j)=>`<span class="${j===1?'on':''}"><small>${i(p1t(['cau','base','good'][j]))}</small><b>${i(bfM(x))}</b></span>`).join('')}</div>`:'';
 const paths=r.paths?`<div class="bfpaths">${r.paths.map(x=>`<div class="bfpath">${bfDot(x.risk)}<b>${i(x.t)}</b><span>${i(x.v)}</span></div>`).join('')}</div>`:'';
 const trio=r.trio?`<div class="p1trio">${r.trio.map(([a,b2,c2])=>`<div><small>${i(a)}</small><b>${i(b2)}</b><em>${i(c2)}</em></div>`).join('')}</div>`:'';
 let chart='';try{chart=D.ser?p1Chart(D.ser(p,c)):''}catch(e){Hooks.err('p1chart',e)}
 const top=rows.slice(0,3),rest=rows.slice(3);const row=([a,b2])=>`<div class="bfr"><span>${i(a)}</span><b>${i(b2)}</b></div>`;
 return`<div class="bfmain${r.txt?' txt':''}">${bfDot(r.risk)}<small>${i(r.main[0])}</small>${r.main[1]?`<b>${i(r.main[1])}</b>`:''}${trio}${r.summary?`<p>${i(r.summary)}</p>`:''}</div>${scen}${chart}${paths}
 ${top.length?`<div class="p1rows">${top.map(row).join('')}${rest.length?`<details${m.bfOpenDet?' open':''}><summary>${i(p1t('more'))}</summary>${rest.map(row).join('')}</details>`:''}</div>`:''}
 ${r.assume?`<p class="bfas">${i(bft('assume'))}: ${i(p1dec(r.assume))}</p>`:''}${r.debt?`<button type="button" class="bflink" data-act="bfdebt">${i(bft('toDebt'))}</button>`:''}`};
bfCalc=function(){const k=BF_K[m.bfK]?m.bfK:'loan',D=BF_K[k],c=bfCtx(),f=D.f(c);const p=m.bfP=Object.assign(Object.fromEntries(f.map(x=>[x.id,x.def])),m.bfP||{});
 const e=m.bfId&&bfC().hist.find(x=>x.id===m.bfId);const mf=D.mf||3;
 const fld=x=>`<label class="bff"><span>${i(cv5n(x.l))}${x.src?` <small class="p1src ${x.src}">${i(p1t(x.src))}</small>`:''}</span><span class="bfin"><input type="range" min="${x.min}" max="${x.max}" step="${x.step}" value="${p[x.id]}" data-bff="${x.id}"><input type="number" inputmode="decimal" min="${x.min}" step="${x.step}" value="${p[x.id]}" data-bfn="${x.id}"><em>${i(x.unit||'')}</em></span></label>`;
 const head=f.slice(0,mf),tail=f.slice(mf);const noFin=f.some(x=>x.src==='ex');
 return`<div class="screen bf bfc">${bfHdr(cv5n(D.t),m.bfBack||'bf',e?`<button class="iconbtn" data-act="bfmeta" aria-label="${i(bft('rename'))}">${_('dots')||'⋯'}</button>`:'<span></span>')}
 ${e?`<small class="bfnote">${i(e.name)}${e.v.length>1?' · '+i(bft('versions',{n:e.v.length})):''}${e.note?' · '+i(e.note):''}</small>`:''}
 <div id="bfres">${bfRes(k,p)}</div>${noFin?`<p class="bfnote">${i(p1t('noFin'))}</p>`:''}
 <div class="bffs">${head.map(fld).join('')}${tail.length?`<details class="p1as"><summary>${i(p1t('assum'))}</summary>${tail.map(fld).join('')}</details>`:''}</div><p class="bfnote">${i(k==='inv'?p1t('labNote'):bft('notAdvice'))}</p></div>`};
/* ---------- laboratory ---------- */
function p1Lab(){const sel=m.p1Sel||[],mo=m.p1M||200,yr=m.p1Y||10,c=bfCtx();
 const cards=P1C.map(cl=>`<div class="p1card${sel.includes(cl.k)?' on':''}"><button type="button" class="p1pick" data-act="p1sel" data-k="${cl.k}" aria-label="✓">${sel.includes(cl.k)?'✓':''}</button><button type="button" class="p1body" data-act="p1open" data-k="${cl.k}"><b>${cl.ic} ${i(cv5n(cl.t))}</b>
  <span>${i(p1t('swings'))}: ${i(cv5n(p1S.lv[cl.lv]))} · ${i(p1t('liq'))}: ${i(cv5n(P1LQ[cl.lq]))}</span><span>${i(p1t('bad'))}: −${cl.bad} % · ${i(p1t('taxDE'))}: ${i(cv5n(P1TAX[cl.tx]))}</span><em>${i(p1t('calc'))} ›</em></button></div>`).join('');
 let cmp='';if(sel.length>=2){const C=sel.map(p1cls);const R=C.map(cl=>({cl,res:cl.r.map(r2=>p1net(cl,0,mo,r2,yr).net)}));const best=R.slice().sort((a,b)=>b.res[1]-a.res[1])[0];const calm=R.slice().sort((a,b)=>a.cl.bad-b.cl.bad)[0];
  const S={x:p1Y(yr),L:C.map((cl,j)=>({n:cv5n(cl.t),k:['b','g','q'][j],v:p1Y(yr).map(y=>p1net(cl,0,mo,cl.r[1],y).net)})).concat([{n:p1t('paid'),k:'p',v:p1Y(yr).map(y=>mo*12*y)}])};
  cmp=`<h3 class="bfh">${i(p1t('cmpHead',{m:bfM(mo),y:yr}))}</h3>${p1Chart(S)}<div class="bfcmp" style="--n:${C.length}"><div class="bfch"><span></span>${C.map(cl=>`<b>${cl.ic} ${i(cv5n(cl.t))}</b>`).join('')}</div>
  ${[['cau',0],['base',1],['good',2]].map(([nm,j])=>`<div class="bfch"><span>${i(p1t(nm))}</span>${R.map(x=>`<em>${i(bfM(x.res[j]))}</em>`).join('')}</div>`).join('')}
  <div class="bfch"><span>${i(p1t('bad'))}</span>${R.map(x=>`<em>−${x.cl.bad} %</em>`).join('')}</div><div class="bfch"><span>${i(p1t('swings'))}</span>${R.map(x=>`<em>${i(cv5n(p1S.lv[x.cl.lv]))}</em>`).join('')}</div>
  <div class="bfch"><span>${i(p1t('liq'))}</span>${R.map(x=>`<em>${i(cv5n(P1LQ[x.cl.lq]))}</em>`).join('')}</div><div class="bfch"><span>${i(p1t('taxDE'))}</span>${R.map(x=>`<em>${i(cv5n(P1TAX[x.cl.tx]))}</em>`).join('')}</div></div>
  ${best.cl.k!==calm.cl.k?`<p class="bfas"><b>${i(p1t('trade'))}:</b> ${i(p1t('tradeT',{a:cv5n(best.cl.t),w:best.cl.bad}))}</p>`:''}`}
 return`<div class="screen bf">${bfHdr(p1t('lab'),'bf')}<p class="bfnote">${i(p1t('labNote'))}</p>
 <div class="bffs p1lab"><label class="bff"><span>${i(cv5n(['В месяц','Monatlich','Monthly','Miesięcznie','Aylık','Par mois','Mensual']))}</span><span class="bfin"><input type="number" inputmode="decimal" value="${mo}" data-p1m="1"><em>€</em></span></label><label class="bff"><span>${i(cv5n(['Лет','Jahre','Years','Lata','Yıl','Ans','Años']))}</span><span class="bfin"><input type="number" inputmode="numeric" value="${yr}" data-p1y="1"><em></em></span></label></div>
 ${cmp}<p class="bfnote">${i(p1t('pick3'))}</p><div class="p1cards">${cards}</div></div>`}
Te.includes('bfx')||Te.push('bfx');BF_R.push('bfx');
(Hooks.h.screen=Hooks.h.screen||[]).unshift(()=>{if(m.route==='bfx'&&!g.bfoff){try{return p1Lab()}catch(e){Hooks.err('p1lab',e)}}});
Hooks.act('p1sel',e=>{let s=m.p1Sel||[];s=s.includes(e.k)?s.filter(x=>x!==e.k):[...s,e.k].slice(-3);m.p1Sel=s;try{k3keep(()=>v())}catch{v()}});
Hooks.act('p1open',e=>bfOpen('inv',{cls:e.k}));
document.addEventListener('change',e=>{const t=e.target;if(!t||!t.dataset||m.route!=='bfx')return;const n=parseFloat(String(t.value).replace(',','.'));if(isNaN(n))return;if(t.dataset.p1m)m.p1M=Math.max(0,Math.min(100000,n));if(t.dataset.p1y)m.p1Y=Math.max(1,Math.min(50,Math.round(n)));try{k3keep(()=>v())}catch{v()}},!0);
/* the lab in the decision centre: a tile next to the calculators */
BF_K.lab={t:p1S.lab,ic:'🧪'};BF_ORDER.splice(1,0,'lab');
Hooks.act('bfopen',e=>{if(e.k==='lab'){R('bfx');return}bfOpen(e.k)},{replace:!0});
Hooks.css('prognoz-stage1',`
.screen.bf>*{flex-shrink:0}
.p1ch{padding:10px 12px;border-radius:16px;border:1px solid var(--line);background:var(--surface);color:var(--ink);touch-action:pan-y}.p1ch svg{width:100%;height:170px;display:block}
.p1lg{display:flex;flex-wrap:wrap;gap:4px 12px;margin-top:6px;font-size:12.5px;color:var(--muted)}.p1lg span{display:flex;align-items:center;gap:6px}.p1lg i{width:14px;height:3px;border-radius:2px;display:inline-block}
.p1rd{margin-top:6px;font-size:13px;line-height:1.35;color:var(--ink);min-height:18px}
.p1trio{display:grid;gap:8px;margin-top:6px}.p1trio div{display:grid;grid-template-columns:96px 1fr;gap:2px 10px;align-items:baseline}.p1trio small{grid-row:span 2;color:var(--muted);font-size:13px}.bfmain .p1trio b{font-size:16.5px;font-weight:600;line-height:1.25}.p1trio em{font-style:normal;color:var(--muted);font-size:13px}
.p1rows{border-radius:14px;border:1px solid var(--line);background:var(--surface);padding:2px 14px}.p1rows>.bfr:first-child{border-top:0}.p1rows summary{cursor:pointer;padding:10px 0;color:var(--gold,#C99A3E);border-top:1px solid var(--line)}
.p1src{font-size:11.5px;padding:2px 7px;border-radius:999px;margin-left:4px;white-space:nowrap}.p1src.fin{background:color-mix(in srgb,#3f9d5a 18%,transparent);color:inherit}.p1src.ex{background:color-mix(in srgb,var(--ink) 8%,transparent)}
.p1as summary{cursor:pointer;color:var(--gold,#C99A3E);padding:4px 0}.p1as[open]{display:flex;flex-direction:column;gap:12px}
.p1cards{display:flex;flex-direction:column;gap:8px}.p1card{display:flex;gap:10px;align-items:stretch;border-radius:16px;border:1px solid var(--line);background:var(--surface);padding:8px}.p1card.on{border-color:var(--gold,#C99A3E)}
.p1pick{flex:none;width:34px;border-radius:10px;border:1px solid var(--line);background:transparent;color:var(--ink);font:inherit;font-size:18px;cursor:pointer}.p1card.on .p1pick{background:var(--gold,#C99A3E);color:#15120b;border-color:transparent}
.p1body{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px;border:0;background:none;color:var(--ink);font:inherit;text-align:left;cursor:pointer;padding:4px}.p1body b{font-weight:500;font-size:15.5px}.p1body span{font-size:12.8px;color:var(--muted);line-height:1.35}.p1body em{font-style:normal;color:var(--gold,#C99A3E);font-size:13.5px}
.p1lab{flex-direction:row}.p1lab .bff{flex:1}.p1lab input[type=number]{width:100%}
`);
