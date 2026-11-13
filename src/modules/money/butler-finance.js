/* ===== v274 Butler Finance — «что будет, если…» inside «Финансы» =====
   A card on the Finance front page opens the Decision centre: health score, quick paths (Купить / Накопить /
   Кредит / Инвестировать), goals forecast, recent calculations. Calculators: loan, mortgage, early repayment,
   deposit, save to a date, inflation, ETF savings plan, rent or buy, and «Сравнить решения» (cash / credit /
   save / credit + invest). Stress test with five situations. Every calculation saves itself with versions and
   can be compared side by side. Simple voice / typed phrases open a filled calculator.
   Numbers come from the user's own Finance data (income, expenses, accounts, debts, assets). Formulas run on
   the phone. Forecasts are scenarios, never promises; no advice on single securities.
   German tax figures (as of 2026, check before relying): Abgeltungsteuer + Soli 26.375 %, Sparerpauschbetrag
   1 000 € (single), Teilfreistellung 30 % for equity ETFs. Off switch: g.bfoff. */
const bfS={
 title:['Butler Finance','Butler Finance','Butler Finance'],
 card:['Что будет, если… — расчёты, сравнение решений, стресс-тест','Was wäre, wenn … – Rechner, Vergleich, Stresstest','What if… – calculators, decisions, stress test'],
 centre:['Центр решений','Entscheidungszentrale','Decision centre'],
 health:['Финансовое здоровье','Finanzielle Gesundheit','Financial health'],
 noData:['Для оценки нужны доходы и расходы хотя бы за 1 месяц в «Финансах».','Für die Bewertung braucht es Einnahmen und Ausgaben für mindestens 1 Monat.','The score needs income and expenses for at least 1 month in Finance.'],
 bestStep:['Больше всего баллов даст:','Die meisten Punkte bringt:','Most points come from:'],
 buy:['Купить','Kaufen','Buy'],save:['Накопить','Sparen','Save'],credit:['Кредит','Kredit','Loan'],invest:['Инвестировать','Investieren','Invest'],
 tools:['Все расчёты','Alle Rechner','All calculators'],recent:['Последние расчёты','Letzte Berechnungen','Recent calculations'],
 history:['История расчётов','Verlauf','History'],goals:['Цели — прогноз','Ziele – Prognose','Goals – forecast'],
 stress:['Стресс-тест','Stresstest','Stress test'],
 ask:['Спросите: «кредит 20 000 под 5 % на 5 лет»','Fragen: «Kredit 20 000 zu 5 % für 5 Jahre»','Ask: “loan 20,000 at 5% for 5 years”'],
 notUnd:['Не понял фразу. Примеры: «кредит 20 000 под 5 % на 5 лет», «250 в месяц 15 лет», «откладывать 10 лет 50 000».','Nicht verstanden. Beispiele: «Kredit 20 000 zu 5 % 5 Jahre», «250 im Monat 15 Jahre».','Not understood. Examples: “loan 20000 at 5% 5 years”, “250 a month 15 years”.'],
 more:['Подробнее','Details','Details'],less:['Скрыть','Weniger','Less'],
 assume:['Считаю при','Annahmen','Assumes'],
 scen:['Сценарии','Szenarien','Scenarios'],cau:['осторожный','vorsichtig','cautious'],base:['базовый','Basis','base'],good:['хороший','gut','good'],
 notAdvice:['Сценарии на основе ваших допущений, не обещание дохода и не инвестиционный совет.','Szenarien aus Ihren Annahmen – kein Ertragsversprechen und keine Anlageberatung.','Scenarios from your assumptions – not a promise and not investment advice.'],
 star:['В избранное','Favorit','Favourite'],rename:['Переименовать','Umbenennen','Rename'],note:['Заметка','Notiz','Note'],
 versions:['Версии: %n','Versionen: %n','Versions: %n'],compare:['Сравнить выбранные','Ausgewählte vergleichen','Compare selected'],
 pick:['Отметьте 2–3 расчёта','2–3 Berechnungen markieren','Tick 2–3 calculations'],
 del:['Удалить','Löschen','Delete'],sure:['Точно?','Sicher?','Sure?'],
 none:['Расчётов пока нет. Они сохраняются сами.','Noch keine Berechnungen. Sie speichern sich selbst.','No calculations yet. They save themselves.'],
 fromFin:['из ваших «Финансов»','aus Ihren Finanzen','from your Finance'],
 mInc:['мес. дохода','Monatseinkommen','months of income'],
 months:['мес.','Mon.','mo'],years:['лет','Jahre','yrs'],
 ok:['Готово','Fertig','Done'],name:['Название','Name','Name'],
 toDebt:['Записать как долг в «Капитал»','Als Schuld im Kapital speichern','Save as a debt in Capital'],debtAdded:['Долг добавлен в «Капитал»','Schuld hinzugefügt','Debt added'],
 runway:['продержитесь','reicht für','lasts'],safe:['запаса хватает','Reserve reicht','reserve holds'],
 noGoals:['Целей пока нет — их можно завести в «Финансы → Цели».','Noch keine Ziele.','No goals yet.']};
const bft=(k,o)=>{let t=cv5n(bfS[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const BF_TAX=.26375,BF_FREE=1000,BF_TFS=.3;
const bfCur=()=>{try{return U().cur||'EUR'}catch{return'EUR'}};
const bfM=x=>{try{return B(Math.round((+x||0)*100),bfCur())}catch{return Math.round(x)+' €'}};
const bfN=(x,d)=>{try{return new Intl.NumberFormat(he(),{maximumFractionDigits:d==null?1:d}).format(x)}catch{return String(Math.round(x*10)/10)}};
const bfC=()=>{const c=g.bf&&typeof g.bf==='object'?g.bf:(g.bf={});if(!Array.isArray(c.hist))c.hist=[];return c};
/* ---------- the user's own numbers ---------- */
function bfCtx(){const o={inc:0,exp:0,months:0,liquid:0,inv:0,debts:[],debtPay:0,assets:0};try{const F=U(),now=new Date();const key=d=>String(d||'').slice(0,7);
 const mk=k=>{const d=new Date(now.getFullYear(),now.getMonth()-k,1);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')};
 const M=[1,2,3].map(mk);let inc=0,exp=0;const seen=new Set;
 F.tx.forEach(t=>{if(t.status==='expected'||t.status==='cancelled')return;const k=key(t.date);if(!M.includes(k))return;const a=Oa(t.amt,t.cur);if(a==null)return;if(t.kind==='income'){inc+=a;seen.add(k)}else if(t.kind==='expense'){exp+=a;seen.add(k)}else if(t.kind==='refund')exp-=a});
 if(!seen.size){const k=mk(0);F.tx.forEach(t=>{if(key(t.date)!==k||t.status==='expected'||t.status==='cancelled')return;const a=Oa(t.amt,t.cur);if(a==null)return;if(t.kind==='income')inc+=a;else if(t.kind==='expense')exp+=a});if(inc||exp)seen.add(k)}
 o.months=seen.size;if(o.months){o.inc=inc/100/o.months;o.exp=exp/100/o.months}
 const X=Xo();o.liquid=(X.all||0)/100;
 F.assets.forEach(a=>{const v2=Oa(a.value,a.cur);if(v2==null)return;o.assets+=v2/100;if(a.type==='inv'||/aktie|etf|fonds|акци|фонд|инвест|crypto|крипт|depot/i.test(a.name||''))o.inv+=v2/100;if(a.type==='save')o.liquid+=v2/100});
 o.debts=F.debts.map(d=>({name:d.name||'',bal:(Oa(d.bal,d.cur)||0)/100,rate:+d.rate||0,monthly:(Oa(d.monthly,d.cur)||0)/100,home:/ипотек|жиль|hypothek|baufin|immobil|mortgage|haus|wohnung/i.test(d.name||'')})).filter(d=>d.bal>0);
 o.debtPay=o.debts.reduce((s,d)=>s+d.monthly,0)}catch(e){Hooks.err('bfCtx',e)}o.free=Math.max(0,o.inc-o.exp);return o}
/* ---------- math ---------- */
const bfAnn=(P,ratePct,n)=>{const r=ratePct/1200;return n<=0?0:r?P*r/(1-Math.pow(1+r,-n)):P/n};
function bfAmort(P,ratePct,pay,extraM,months,yearlyExtra){let bal=P,int=0,k=0;const r=ratePct/1200;while(bal>0.005&&k<(months||1200)){const i2=bal*r;int+=i2;bal=bal+i2-pay-(extraM||0);k++;if(yearlyExtra&&k%12===0)bal-=yearlyExtra;if(pay+(extraM||0)<=i2&&!yearlyExtra){k=1201;break}}return{months:k,interest:int,rest:Math.max(0,bal)}}
function bfGrow(start,monthly,ratePct,years,ter){const r=(ratePct-(ter||0))/1200;let v2=start;for(let k=0;k<years*12;k++)v2=v2*(1+r)+monthly;return v2}
function bfEtfNet(start,monthly,ratePct,years,ter){const gross=bfGrow(start,monthly,ratePct,years,ter),paid=start+monthly*years*12,gain=Math.max(0,gross-paid);const taxable=Math.max(0,gain*(1-BF_TFS)-BF_FREE);return{gross,paid,gain,tax:taxable*BF_TAX,net:gross-taxable*BF_TAX}}
/* ---------- calculators ---------- */
const bfF=(id,l,min,max,step,def,unit)=>({id,l,min,max,step,def,unit});
const BF_K={
 loan:{t:['Кредит','Kredit','Loan'],ic:'💶',f:c=>[bfF('amt',['Сумма','Betrag','Amount'],500,100000,500,20000,'€'),bfF('rate',['Ставка, % годовых','Zins, % p.a.','Rate, % p.a.'],0,20,.1,6.9,'%'),bfF('years',['Срок, лет','Laufzeit, Jahre','Years'],1,10,1,5,''),bfF('fee',['Страховка/комиссия','Versicherung/Gebühr','Insurance/fee'],0,5000,50,0,'€')],
  run:(p,c)=>{const n=p.years*12,pay=bfAnn(p.amt+p.fee,p.rate,n),total=pay*n,over=total-p.amt;return{main:[cv5n(['Платёж в месяц','Rate im Monat','Monthly payment']),bfM(pay)],
   rows:[[cv5n(['Всего выплатите','Gesamt','Total paid']),bfM(total)],[cv5n(['Переплата','Mehrkosten','Overpayment']),bfM(over)+(c.inc?` · ${bfN(over/c.inc)} ${bft('mInc')}`:'')],c.inc?[cv5n(['Доля в доходе','Anteil am Einkommen','Share of income']),bfN(pay/c.inc*100,0)+' %']:null],
   risk:c.inc?(pay/c.inc>.35?'r':pay/c.inc>.2?'y':'g'):'',assume:`${p.rate} %, ${p.years} ${bft('years')}`,debt:{name:cv5n(['Кредит','Kredit','Loan'])+' '+bfM(p.amt),bal:p.amt,rate:p.rate,monthly:pay}}}},
 mort:{t:['Ипотека','Baufinanzierung','Mortgage'],ic:'🏠',f:c=>[bfF('price',['Цена жилья','Kaufpreis','Price'],50000,1500000,5000,350000,'€'),bfF('nk',['Доп. расходы покупки, %','Kaufnebenkosten, %','Purchase costs, %'],0,15,.5,10,'%'),bfF('own',['Свои деньги','Eigenkapital','Own capital'],0,800000,5000,Math.round(Math.max(0,c.liquid)/5000)*5000||70000,'€'),bfF('rate',['Ставка, %','Zins, %','Rate, %'],0,10,.05,3.6,'%'),bfF('tilg',['Погашение в год, %','Tilgung, %','Repayment, %'],1,6,.25,2,'%'),bfF('fix',['Фиксация ставки, лет','Zinsbindung, Jahre','Fixed years'],5,30,1,10,''),bfF('sonder',['Досрочно в год','Sondertilgung/Jahr','Extra per year'],0,50000,500,0,'€')],
  run:(p,c)=>{const nk=p.price*p.nk/100,loan=Math.max(0,p.price+nk-p.own),pay=loan*(p.rate+p.tilg)/1200;const a=bfAmort(loan,p.rate,pay,0,p.fix*12,p.sonder);const full=bfAmort(loan,p.rate,pay,0,1200,p.sonder);
   const rest=a.rest;const an=[p.rate-1,p.rate+1,p.rate+2].map(r2=>Math.max(.5,r2));return{main:[cv5n(['Платёж в месяц','Monatsrate','Monthly payment']),bfM(pay)],
   rows:[[cv5n(['Кредит','Darlehen','Loan']),bfM(loan)],[cv5n(['Доп. расходы','Nebenkosten','Purchase costs']),bfM(nk)],[cv5n([`Остаток через ${p.fix} лет`,`Restschuld nach ${p.fix} J.`,`Balance after ${p.fix} yrs`]),bfM(rest)],[cv5n(['Проценты за фиксацию','Zinsen in der Bindung','Interest in fixed period']),bfM(a.interest)],[cv5n(['Полностью выплатите за','Komplett getilgt in','Paid off in']),bfN(full.months/12)+' '+bft('years')],
    ...an.map(r2=>[cv5n([`Дальше при ${bfN(r2,2)} %`,`Anschluss bei ${bfN(r2,2)} %`,`Then at ${bfN(r2,2)} %`]),bfM(bfAnn(rest,r2,Math.max(12,full.months-p.fix*12)))+' / '+bft('months')]),c.inc?[cv5n(['Доля в доходе','Anteil am Einkommen','Share of income']),bfN(pay/c.inc*100,0)+' %']:null],
   risk:c.inc?(pay/c.inc>.4?'r':pay/c.inc>.3?'y':'g'):'',assume:`${p.rate} %, Tilgung ${p.tilg} %, ${p.fix} ${bft('years')}`,debt:{name:cv5n(['Ипотека','Baufinanzierung','Mortgage']),bal:loan,rate:p.rate,monthly:pay}}}},
 early:{t:['Досрочное погашение','Sondertilgung','Early repayment'],ic:'⏩',f:c=>{const d=c.debts[0]||{};return[bfF('bal',['Остаток долга','Restschuld','Balance'],500,800000,500,Math.round(d.bal||15000),'€'),bfF('rate',['Ставка, %','Zins, %','Rate, %'],0,20,.1,d.rate||6,'%'),bfF('pay',['Платёж в месяц','Monatsrate','Monthly payment'],10,10000,10,Math.round(d.monthly||350),'€'),bfF('once',['Один раз сейчас','Einmalig jetzt','One-off now'],0,100000,100,2000,'€'),bfF('extra',['Дополнительно в месяц','Zusätzlich im Monat','Extra per month'],0,3000,10,0,'€')]},
  run:(p,c)=>{const a=bfAmort(p.bal,p.rate,p.pay,0),b=bfAmort(Math.max(0,p.bal-p.once),p.rate,p.pay,p.extra);if(a.months>1200)return{main:[cv5n(['Платёж меньше процентов','Rate deckt Zinsen nicht','Payment below interest']),'—'],rows:[],risk:'r'};
   return{main:[cv5n(['Экономия на процентах','Zinsersparnis','Interest saved']),bfM(a.interest-b.interest)],rows:[[cv5n(['Закроете раньше на','Früher fertig um','Done earlier by']),(a.months-b.months)+' '+bft('months')],[cv5n(['Было: срок','Vorher: Laufzeit','Before: term']),a.months+' '+bft('months')],[cv5n(['Стало: срок','Nachher: Laufzeit','After: term']),b.months+' '+bft('months')]],risk:'g',assume:`${p.rate} %`}}},
 dep:{t:['Вклад и сложный процент','Tagesgeld/Festgeld','Deposit'],ic:'🏦',f:c=>[bfF('start',['Сейчас','Startbetrag','Start'],0,500000,500,Math.round(Math.max(0,c.liquid)/500)*500||5000,'€'),bfF('monthly',['В месяц','Monatlich','Monthly'],0,5000,10,100,'€'),bfF('rate',['Ставка, %','Zins, %','Rate, %'],0,8,.05,2.5,'%'),bfF('years',['Лет','Jahre','Years'],1,40,1,10,''),bfF('infl',['Инфляция, %','Inflation, %','Inflation, %'],0,10,.1,2,'%')],
  run:(p,c)=>{const v2=bfGrow(p.start,p.monthly,p.rate,p.years),paid=p.start+p.monthly*p.years*12,int=v2-paid,tax=Math.max(0,int-BF_FREE*p.years)*BF_TAX,net=v2-tax,real=net/Math.pow(1+p.infl/100,p.years);
   return{main:[cv5n([`Через ${p.years} лет`,`Nach ${p.years} Jahren`,`After ${p.years} yrs`]),bfM(net)],rows:[[cv5n(['Вложите','Eingezahlt','Paid in']),bfM(paid)],[cv5n(['Проценты','Zinsen','Interest']),bfM(int)],[cv5n(['Налог ≈','Steuer ≈','Tax ≈']),bfM(tax)],[cv5n(['В сегодняшних деньгах','In heutiger Kaufkraft','In today’s money']),bfM(real)]],risk:'g',assume:`${p.rate} %, ${cv5n(['инфляция','Inflation','inflation'])} ${p.infl} %, Sparerpauschbetrag ${BF_FREE} €`}}},
 target:{t:['Накопить к дате','Sparziel','Save to a date'],ic:'🎯',f:c=>[bfF('goal',['Цель','Ziel','Goal'],500,500000,500,50000,'€'),bfF('years',['Через лет','In Jahren','In years'],1,40,1,10,''),bfF('start',['Уже есть','Schon vorhanden','Already have'],0,500000,500,0,'€'),bfF('rate',['Доходность, %','Rendite, %','Return, %'],0,10,.1,2.5,'%')],
  run:(p,c)=>{const n=p.years*12,r=p.rate/1200,fvStart=p.start*Math.pow(1+r,n),need=Math.max(0,p.goal-fvStart),m2=r?need*r/(Math.pow(1+r,n)-1):need/n;
   return{main:[cv5n(['Откладывать в месяц','Monatlich sparen','Save per month']),bfM(m2)],rows:[[cv5n(['Вложите сами','Selbst eingezahlt','You pay in']),bfM(m2*n+p.start)],[cv5n(['Даст доходность','Ertrag','Return adds']),bfM(p.goal-m2*n-p.start)],c.free?[cv5n(['Ваш свободный остаток','Ihr freier Betrag','Your free money']),bfM(c.free)+' / '+bft('months')]:null],
   risk:c.free?(m2>c.free?'r':m2>c.free*.7?'y':'g'):'',assume:`${p.rate} %`}}},
 infl:{t:['Инфляция','Inflation','Inflation'],ic:'📉',f:c=>[bfF('amt',['Сумма','Betrag','Amount'],100,500000,100,10000,'€'),bfF('infl',['Инфляция, %','Inflation, %','Inflation, %'],0,12,.1,2.5,'%')],
  run:p=>({main:[cv5n(['Через 10 лет стоит как','In 10 Jahren so viel wert wie','In 10 years worth']),bfM(p.amt/Math.pow(1+p.infl/100,10))],rows:[5,15,20].map(y=>[cv5n([`Через ${y} лет`,`Nach ${y} Jahren`,`After ${y} yrs`]),bfM(p.amt/Math.pow(1+p.infl/100,y))]),risk:'',assume:`${p.infl} % ${cv5n(['в год','pro Jahr','a year'])}`})},
 etf:{t:['ETF-Sparplan','ETF-Sparplan','ETF savings plan'],ic:'📈',f:c=>[bfF('monthly',['В месяц','Monatlich','Monthly'],10,5000,10,250,'€'),bfF('years',['Лет','Jahre','Years'],1,45,1,15,''),bfF('start',['Сейчас','Startbetrag','Start'],0,500000,500,0,'€'),bfF('rate',['Базовая доходность, %','Basis-Rendite, %','Base return, %'],0,12,.1,6,'%'),bfF('ter',['Комиссия фонда (TER), %','TER, %','Fund fee (TER), %'],0,1.5,.01,.2,'%')],
  run:(p,c)=>{const S=[p.rate-3,p.rate,p.rate+2].map(r2=>bfEtfNet(p.start,p.monthly,Math.max(-2,r2),p.years,p.ter));const b=S[1];
   return{main:[cv5n([`Через ${p.years} лет (базовый)`,`Nach ${p.years} J. (Basis)`,`After ${p.years} yrs (base)`]),bfM(b.net)],
    scen:S.map(x=>x.net),rows:[[cv5n(['Вложите','Eingezahlt','Paid in']),bfM(b.paid)],[cv5n(['Налог при продаже ≈','Steuer beim Verkauf ≈','Tax on sale ≈']),bfM(b.tax)],[cv5n(['Худший год (−30 %) на пике','Schlechtes Jahr (−30 %) am Ende','Bad year (−30%) at the end']),'−'+bfM(b.gross*.3)]],risk:'y',assume:`${bfN(p.rate-3)} / ${bfN(p.rate)} / ${bfN(p.rate+2)} %, TER ${p.ter} %, Teilfreistellung 30 %, ${BF_TAX*100} %`}}},
 rent:{t:['Аренда или покупка','Mieten oder kaufen','Rent or buy'],ic:'🔑',f:c=>[bfF('price',['Цена жилья','Kaufpreis','Price'],50000,1500000,5000,350000,'€'),bfF('rent',['Аренда в месяц (холодная)','Kaltmiete','Rent per month'],200,5000,10,1100,'€'),bfF('own',['Свои деньги','Eigenkapital','Own capital'],0,800000,5000,70000,'€'),bfF('rate',['Ставка, %','Zins, %','Rate, %'],0,10,.05,3.6,'%'),bfF('years',['Горизонт, лет','Horizont, Jahre','Horizon, years'],5,40,1,20,''),bfF('grow',['Рост цены жилья, %','Wertsteigerung, %','Price growth, %'],-3,6,.1,1.5,'%'),bfF('ret',['Доходность вложений, %','Rendite Anlage, %','Investment return, %'],0,10,.1,5,'%')],
  run:(p,c)=>{const nk=p.price*.1,loan=Math.max(0,p.price+nk-p.own),pay=loan*(p.rate+2)/1200,n=p.years*12;const a=bfAmort(loan,p.rate,pay,0,n);const upkeep=p.price*.01/12;
   const buyWorth=p.price*Math.pow(1+p.grow/100,p.years)-a.rest;
   let inv=p.own,rent=p.rent;const r=p.ret/1200;for(let k=0;k<n;k++){const diff=(k<a.months?pay:0)+upkeep-rent;inv=inv*(1+r)+Math.max(0,diff);if(k%12===11)rent*=1.02}
   const win=buyWorth>inv;return{txt:1,main:[cv5n([`Через ${p.years} лет выгоднее`,`Nach ${p.years} J. besser`,`After ${p.years} yrs better`]),win?cv5n(['купить','kaufen','buy']):cv5n(['снимать','mieten','rent'])],
   rows:[[cv5n(['Состояние, если купить','Vermögen bei Kauf','Wealth if buying']),bfM(buyWorth)],[cv5n(['Состояние, если снимать и вкладывать','Vermögen bei Miete + Anlage','Wealth if renting + investing']),bfM(inv)],[cv5n(['Разница','Differenz','Difference']),bfM(Math.abs(buyWorth-inv))]],risk:'',assume:`${cv5n(['доп. расходы 10 %, уход 1 %/год, аренда +2 %/год','Nebenkosten 10 %, Instandhaltung 1 %/J., Miete +2 %/J.','costs 10%, upkeep 1%/yr, rent +2%/yr'])}`}}},
 decide:{t:['Сравнить решения','Entscheidungen vergleichen','Compare decisions'],ic:'⚖️',f:c=>[bfF('price',['Цена покупки','Kaufpreis','Price'],200,200000,100,15000,'€'),bfF('cash',['Свободные сбережения','Freie Ersparnisse','Free savings'],0,500000,100,Math.round(Math.max(0,c.liquid)/100)*100,'€'),bfF('free',['Можете откладывать в месяц','Monatlich frei','Free per month'],0,10000,10,Math.round(c.free/10)*10||300,'€'),bfF('rate',['Ставка кредита, %','Kreditzins, %','Loan rate, %'],0,20,.1,6.9,'%'),bfF('years',['Срок кредита, лет','Laufzeit, Jahre','Loan years'],1,10,1,4,''),bfF('ret',['Доходность вложений, %','Rendite, %','Investment return, %'],0,10,.1,5,'%'),bfF('pgrow',['Рост цены в год, %','Preissteigerung, %','Price growth, %'],-5,10,.5,2,'%')],
  run:(p,c)=>{const n=p.years*12,exp=c.exp||p.free*3||1500;const pay=bfAnn(p.price,p.rate,n),over=pay*n-p.price;
   const left=p.cash-p.price;
   let have=p.cash,price=p.price,mo=0;while(have<price&&mo<600){have+=p.free;price*=1+p.pgrow/1200;mo++}const saveCost=price-p.price;
   const invS=[p.ret-3,p.ret,p.ret+2].map(r2=>bfGrow(Math.min(p.cash,p.price),0,Math.max(-2,r2),p.years)-Math.min(p.cash,p.price)-over);
   const paths=[
    {k:'cash',t:cv5n(['Купить сейчас на свои','Jetzt bar kaufen','Buy now with savings']),v:p.cash>=p.price?cv5n([`останется ${bfM(left)} — это ${bfN(left/exp)} мес. жизни`,`übrig ${bfM(left)} = ${bfN(left/exp)} Monate`,`left ${bfM(left)} = ${bfN(left/exp)} months`]):cv5n(['не хватает '+bfM(-left),'es fehlen '+bfM(-left),'short by '+bfM(-left)]),cost:p.cash>=p.price?0:null,risk:p.cash<p.price?'r':left<exp*3?'y':'g'},
    {k:'credit',t:cv5n(['Взять кредит','Kredit','Take a loan']),v:cv5n([`${bfM(pay)} в месяц, переплата ${bfM(over)}`,`${bfM(pay)}/Monat, Mehrkosten ${bfM(over)}`,`${bfM(pay)}/month, overpay ${bfM(over)}`])+(c.inc?` · ${bfN(pay/c.inc*100,0)} %`:''),cost:over,risk:c.inc&&pay/c.inc>.2?'y':'g'},
    {k:'save',t:cv5n(['Накопить и купить позже','Ansparen und später kaufen','Save and buy later']),v:mo>=600?cv5n(['при этой сумме не накопить','so nicht erreichbar','not reachable']):mo===0?cv5n(['деньги уже есть','Geld ist da','money is there']):cv5n([`через ${mo} мес., цена вырастет на ${bfM(saveCost)}`,`in ${mo} Monaten, Preis +${bfM(saveCost)}`,`in ${mo} months, price +${bfM(saveCost)}`]),cost:mo>=600?null:saveCost,risk:mo>=600?'r':'g'},
    {k:'inv',t:cv5n(['Кредит, а свои деньги вложить','Kredit + eigenes Geld anlegen','Loan + invest your money']),v:p.cash<=0?cv5n(['нет сбережений для вложения','keine Ersparnisse','no savings to invest']):cv5n([`итог: ${bfM(invS[0])} / ${bfM(invS[1])} / ${bfM(invS[2])}`,`Ergebnis: ${bfM(invS[0])} / ${bfM(invS[1])} / ${bfM(invS[2])}`,`result: ${bfM(invS[0])} / ${bfM(invS[1])} / ${bfM(invS[2])}`]),cost:p.cash>0?-invS[1]:null,risk:'y'}];
   const ok=paths.filter(x=>x.cost!=null&&x.k!=='inv').sort((a2,b2)=>a2.cost-b2.cost);const best=ok[0];const invWin=p.cash>0&&best&&-invS[1]<best.cost;
   return{txt:1,main:[cv5n(['Дешевле всего','Am günstigsten','Cheapest']),best?best.t:'—'],paths,rows:[],risk:'',summary:best?''+(best.k==='save'&&mo?cv5n([`Но покупка будет через ${mo} мес.`,`Aber erst in ${mo} Monaten.`,`But only in ${mo} months.`]):'')+(invWin?cv5n([' Вариант «кредит + вложить» в базовом сценарии выходит ещё дешевле, но зависит от рынка.',' «Kredit + anlegen» wäre im Basisszenario günstiger, hängt aber vom Markt ab.',' “Loan + invest” is cheaper in the base case but depends on the market.']):''):'',assume:`${p.rate} %, ${cv5n(['доходность','Rendite','return'])} ${bfN(p.ret-3)}/${bfN(p.ret)}/${bfN(p.ret+2)} %, ${cv5n(['рост цены','Preis','price'])} ${p.pgrow} %`}}}};
const BF_ORDER=['decide','loan','mort','early','dep','target','etf','infl','rent'];
/* ---------- health and stress ---------- */
function bfStress(c){const exp=c.exp||1,base=c.inc-c.exp;const liq=c.liquid;const run=def=>def<=0?Infinity:liq/def;
 const varRate=c.debts.filter(d=>!d.home||true).reduce((s,d)=>s+d.bal*.02/12,0);
 const L2=[
  [cv5n(['Доход ниже на 20 %','Einkommen −20 %','Income −20%']),run(c.exp-c.inc*.8)],
  [cv5n(['Доход ниже на 50 %','Einkommen −50 %','Income −50%']),run(c.exp-c.inc*.5)],
  [cv5n(['Дохода нет 3 месяца','3 Monate kein Einkommen','No income for 3 months']),liq>=exp*3?Infinity:liq/exp],
  [cv5n(['Ставки выше на 2 п.п.','Zinsen +2 Prozentpunkte','Rates +2 points']),run(c.exp+varRate-c.inc)],
  [cv5n(['Инвестиции −30 %','Anlagen −30 %','Investments −30%']),c.inv?(base>=0?Infinity:liq/(-base)):Infinity,c.inv*.3],
  [cv5n(['Неожиданный расход 3 000 €','Unerwartet 3 000 €','Surprise expense 3,000']),liq-3000>=exp*3?Infinity:Math.max(0,liq-3000)/exp]];
 return L2.map(([t,mo,loss])=>({t,mo,loss,col:mo>=6?'g':mo>=3?'y':'r'}))}
function bfHealth(c){if(!c.months||!c.inc)return null;const parts=[];const st=bfStress(c);
 const cush=c.exp?c.liquid/c.exp:0;parts.push({k:'cush',t:cv5n(['Подушка','Reserve','Cushion']),w:30,s:Math.min(1,cush/6),val:bfN(cush)+' '+bft('months'),tip:cv5n([`Довести подушку до 6 мес. расходов: ещё ${bfM(Math.max(0,c.exp*6-c.liquid))}`,`Reserve auf 6 Monate: noch ${bfM(Math.max(0,c.exp*6-c.liquid))}`,`Cushion to 6 months: ${bfM(Math.max(0,c.exp*6-c.liquid))} more`])});
 const home=c.debts.some(d=>d.home),dti=c.debtPay/c.inc,lim=home?.35:.2;parts.push({k:'dti',t:cv5n(['Долговая нагрузка','Schuldenquote','Debt load']),w:25,s:dti<=lim?1:Math.max(0,1-(dti-lim)/lim),val:bfN(dti*100,0)+' %',tip:cv5n(['Снизить платежи по долгам (досрочное погашение, рефинансирование)','Raten senken (Sondertilgung, Umschuldung)','Lower debt payments (early repayment, refinance)'])});
 const sr=(c.inc-c.exp)/c.inc;parts.push({k:'save',t:cv5n(['Норма сбережений','Sparquote','Savings rate']),w:20,s:Math.max(0,Math.min(1,sr/.15)),val:bfN(sr*100,0)+' %',tip:cv5n([`Откладывать 15 % дохода: ${bfM(c.inc*.15)} в месяц`,`15 % sparen: ${bfM(c.inc*.15)}/Monat`,`Save 15%: ${bfM(c.inc*.15)}/month`])});
 const dear=c.debts.filter(d=>d.rate>8);parts.push({k:'dear',t:cv5n(['Дорогие долги','Teure Schulden','Expensive debt']),w:15,s:dear.length?0:1,val:dear.length?dear.map(d=>d.name||'').join(', ')||String(dear.length):cv5n(['нет','keine','none']),tip:cv5n(['Сначала гасить долги дороже 8 %','Zuerst Schulden über 8 % tilgen','Pay off debts above 8% first'])});
 const gr=st.filter(x=>x.col==='g').length;parts.push({k:'stress',t:cv5n(['Устойчивость к стрессу','Stressfestigkeit','Stress resistance']),w:10,s:gr/st.length,val:gr+' / '+st.length,tip:cv5n(['Пройти стресс-тест и закрыть красные пункты','Stresstest: rote Punkte schließen','Fix the red items in the stress test'])});
 const score=Math.round(parts.reduce((s,p)=>s+p.w*p.s,0));const best=parts.slice().sort((a,b)=>b.w*(1-b.s)-a.w*(1-a.s))[0];return{score,parts,best,st}}
/* ---------- history ---------- */
function bfAuto(k,p){const H2=bfC().hist,R2=BF_K[k].run(p,bfCtx());let e=m.bfId&&H2.find(x=>x.id===m.bfId);const stamp=Date.now();
 if(!e){e={id:V(),k,name:cv5n(BF_K[k].t)+' · '+bfAutoName(k,p),star:0,note:'',ts:stamp,v:[]};H2.unshift(e);m.bfId=e.id;m.bfNewV=1}
 if(m.bfNewV||!e.v.length){e.v.push({ts:stamp,p:{...p},main:R2.main[1]});m.bfNewV=0}else{const L2=e.v[e.v.length-1];L2.p={...p};L2.main=R2.main[1];L2.ts=stamp}
 if(!e.renamed)e.name=cv5n(BF_K[k].t)+' · '+bfAutoName(k,p);e.ts=stamp;bfC().hist=H2.slice(0,200);$()}
function bfAutoName(k,p){if(p.amt)return bfM(p.amt)+(p.rate!=null?' · '+p.rate+' %':'')+(p.years?' · '+p.years+' '+bft('years'):'');if(p.price)return bfM(p.price);if(p.goal)return bfM(p.goal)+' · '+p.years+' '+bft('years');if(p.monthly)return bfM(p.monthly)+'/'+bft('months')+' · '+p.years+' '+bft('years');if(p.bal)return bfM(p.bal);if(p.start)return bfM(p.start);return''}
/* ---------- voice / typed phrases ---------- */
const BF_W={'один':1,'одна':1,'два':2,'две':2,'три':3,'четыре':4,'пять':5,'шесть':6,'семь':7,'восемь':8,'девять':9,'десять':10,'пятнадцать':15,'двадцать':20,'тридцать':30};
function bfNum(s){s=String(s).replace(/ /g,' ');Object.keys(BF_W).forEach(w=>{s=s.replace(new RegExp('(^|\\s)'+w+'(?=\\s|$)','gi'),' '+BF_W[w])});s=s.replace(/(\d)[\s.](?=\d{3}\b)/g,'$1').replace(/(\d+(?:[.,]\d+)?)\s*(тыс\w*|k|tsd|tausend)\b/gi,(a,n)=>String(parseFloat(n.replace(',','.'))*1000));return s}
function bfParse(q){const s=bfNum(q.toLowerCase());const nums=(s.match(/\d+(?:[.,]\d+)?/g)||[]).map(x=>parseFloat(x.replace(',','.')));const pct=(s.match(/(\d+(?:[.,]\d+)?)\s*(%|процент|prozent|percent)/)||[])[1];const yrs=(s.match(/(\d+)\s*(год|лет|года|jahr|year)/)||[])[1];
 if(/доход\s+упад|einkommen\s+sink|income\s+drop|стресс/.test(s))return{route:'bfh'};
 if(/ипотек|baufin|mortgage/.test(s))return{k:'mort',p:{price:nums.find(n=>n>=10000)}};
 if(/сравни|vergleich|compare|купить.*или|наличн/.test(s))return{k:'decide',p:{price:nums.find(n=>n>=100)}};
 if(/кредит|kredit|loan|займ/.test(s))return{k:'loan',p:{amt:nums.find(n=>n>=100),rate:pct&&parseFloat(pct.replace(',','.')),years:yrs&&+yrs}};
 if(/откладыв|накопи|sparziel|save up|иметь/.test(s))return{k:'target',p:{years:yrs&&+yrs,goal:nums.filter(n=>n>=100).pop()}};
 if(/инфляц|inflation/.test(s))return{k:'infl',p:{amt:nums.find(n=>n>=100)}};
 if(/(в месяц|ежемесяч|monatlich|a month|per month).*|инвест|etf|sparplan/.test(s))return{k:'etf',p:{monthly:nums.find(n=>n>=10&&n!==+yrs),years:yrs&&+yrs}};
 return null}
function bfAsk(q){const r=bfParse(q||'');if(!r){T(bft('notUnd'));return}if(r.route){R(r.route);return}const p={};Object.entries(r.p||{}).forEach(([a,b])=>{if(b!=null&&!isNaN(b))p[a]=b});bfOpen(r.k,p)}
/* ---------- screens ---------- */
const bfHdr=(t,back,right)=>`<div class="sub-hdr"><button class="iconbtn" data-act="go" data-to="${back}" aria-label="back">${_('back')}</button><div class="ttl"><h2>${i(t)}</h2></div>${right||'<span></span>'}</div>`;
const bfDot=c=>c?`<i class="bfdot ${c}"></i>`:'';
function bfCentre(){const c=bfCtx(),h=bfHealth(c),H2=bfC().hist;const F=U();
 const hp=h?`<button type="button" class="bfhs" data-act="go" data-to="bfh"><span class="bfsc ${h.score>=70?'g':h.score>=45?'y':'r'}"><b>${h.score}</b><small>/100</small></span><span class="bftx"><b>${i(bft('health'))}</b><small>${i(bft('bestStep'))} ${i(h.best.tip)}</small></span>${_('chev','chev')}</button>`:`<div class="bfhs off"><span class="bftx"><b>${i(bft('health'))}</b><small>${i(bft('noData'))}</small></span></div>`;
 const quick=[['buy','decide'],['save','target'],['credit','loan'],['invest','etf']].map(([l,k])=>`<button type="button" class="bfq" data-act="bfopen" data-k="${k}"><span>${BF_K[k].ic}</span>${i(bft(l))}</button>`).join('');
 const goals=(F.goals||[]).slice(0,3).map(gl=>{const left=Math.max(0,(gl.target-(gl.saved||0))/100),mo=(gl.monthly||0)/100||c.free;const n=mo>0?Math.ceil(left/mo):null;let when='—';if(n!=null){const d=new Date();d.setMonth(d.getMonth()+n);when=d.toLocaleDateString(he(),{month:'long',year:'numeric'})}
  let late='';if(gl.deadline&&n!=null){const dl=new Date(gl.deadline),d=new Date();d.setMonth(d.getMonth()+n);const diff=Math.round((d-dl)/2.6e9);late=diff>0?cv5n([` · позже на ${diff} мес.`,` · ${diff} Mon. später`,` · ${diff} mo late`]):cv5n([' · в срок',' · pünktlich',' · on time'])}
  return`<div class="bfgl"><b>${i(gl.name||'')}</b><small>${i(bfM((gl.saved||0)/100))} / ${i(bfM(gl.target/100))} · ${i(when)}${i(late)}</small><i style="--p:${Math.min(100,Math.round((gl.saved||0)/gl.target*100))}%"></i></div>`}).join('');
 const rec=H2.slice(0,5).map(e=>`<button type="button" class="bfrow" data-act="bfload" data-id="${e.id}"><span>${BF_K[e.k]?BF_K[e.k].ic:''} ${i(e.name)}${e.star?' ★':''}</span><b>${i((e.v[e.v.length-1]||{}).main||'')}</b></button>`).join('');
 return`<div class="screen bf">${bfHdr(bft('centre'),'cat')}
 <form class="bfask" data-bfask="1"><input id="bfq" type="text" autocomplete="off" placeholder="${i(bft('ask'))}"><button type="button" class="bfmic" data-act="bfmic" aria-label="mic">🎙</button></form>
 ${hp}<div class="bfqg">${quick}</div>
 <h3 class="bfh">${i(bft('tools'))}</h3><div class="bftools">${BF_ORDER.map(k=>`<button type="button" data-act="bfopen" data-k="${k}"><span>${BF_K[k].ic}</span>${i(cv5n(BF_K[k].t))}</button>`).join('')}<button type="button" data-act="go" data-to="bfh"><span>🧯</span>${i(bft('stress'))}</button></div>
 <h3 class="bfh">${i(bft('goals'))}</h3>${goals||`<p class="bfnote">${i(bft('noGoals'))}</p>`}
 <h3 class="bfh">${i(bft('recent'))} <button type="button" class="bflink" data-act="go" data-to="bfl">${i(bft('history'))} ›</button></h3>${rec||`<p class="bfnote">${i(bft('none'))}</p>`}
 <p class="bfnote">${i(bft('notAdvice'))}</p></div>`}
function bfRes(k,p){const c=bfCtx(),r=BF_K[k].run(p,c);const rows=(r.rows||[]).filter(Boolean);
 const scen=r.scen?`<div class="bfscen">${r.scen.map((x,j)=>`<span class="${j===1?'on':''}"><small>${i(bft(['cau','base','good'][j]))}</small><b>${i(bfM(x))}</b></span>`).join('')}</div>`:'';
 const paths=r.paths?`<div class="bfpaths">${r.paths.map(x=>`<div class="bfpath">${bfDot(x.risk)}<b>${i(x.t)}</b><span>${i(x.v)}</span></div>`).join('')}</div>`:'';
 return`<div class="bfmain${r.txt?' txt':''}">${bfDot(r.risk)}<small>${i(r.main[0])}</small><b>${i(r.main[1])}</b>${r.summary?`<p>${i(r.summary)}</p>`:''}</div>${scen}${paths}
 ${rows.length?`<details class="bfdet"${m.bfOpenDet?' open':''}><summary>${i(bft('more'))}</summary>${rows.map(([a,b])=>`<div class="bfr"><span>${i(a)}</span><b>${i(b)}</b></div>`).join('')}</details>`:''}
 ${r.assume?`<p class="bfas">${i(bft('assume'))}: ${i(r.assume)}</p>`:''}${r.debt?`<button type="button" class="bflink" data-act="bfdebt">${i(bft('toDebt'))}</button>`:''}`}
function bfCalc(){const k=BF_K[m.bfK]?m.bfK:'loan',D=BF_K[k],c=bfCtx(),f=D.f(c);const p=m.bfP=Object.assign(Object.fromEntries(f.map(x=>[x.id,x.def])),m.bfP||{});
 const e=m.bfId&&bfC().hist.find(x=>x.id===m.bfId);
 const fields=f.map(x=>`<label class="bff"><span>${i(cv5n(x.l))}</span><span class="bfin"><input type="range" min="${x.min}" max="${x.max}" step="${x.step}" value="${p[x.id]}" data-bff="${x.id}"><input type="number" inputmode="decimal" min="${x.min}" step="${x.step}" value="${p[x.id]}" data-bfn="${x.id}"><em>${i(x.unit||'')}</em></span></label>`).join('');
 return`<div class="screen bf bfc">${bfHdr(cv5n(D.t),m.bfBack||'bf',e?`<button class="iconbtn" data-act="bfmeta" aria-label="${i(bft('rename'))}">${_('dots')||'⋯'}</button>`:'<span></span>')}
 ${e?`<small class="bfnote">${i(e.name)}${e.v.length>1?' · '+i(bft('versions',{n:e.v.length})):''}${e.note?' · '+i(e.note):''}</small>`:''}
 <div id="bfres">${bfRes(k,p)}</div><div class="bffs">${fields}</div><p class="bfnote">${i(bft('notAdvice'))}</p></div>`}
function bfHealthScreen(){const c=bfCtx(),h=bfHealth(c),st=bfStress(c);
 const top=h?`<div class="bfmain"><small>${i(bft('health'))}</small><b>${h.score} / 100</b><p>${i(bft('bestStep'))} ${i(h.best.tip)}</p></div>
 ${h.parts.map(p=>`<div class="bfpart"><span>${i(p.t)} <small>${i(p.val)}</small></span><i style="--p:${Math.round(p.s*100)}%"></i><em>${Math.round(p.w*p.s)} / ${p.w}</em></div>`).join('')}`:`<p class="bfnote">${i(bft('noData'))}</p>`;
 const ctx=`<p class="bfas">${i(bft('fromFin'))}: ${cv5n(['доход','Einkommen','income'])} ${i(bfM(c.inc))} · ${cv5n(['расходы','Ausgaben','expenses'])} ${i(bfM(c.exp))} · ${cv5n(['свободные деньги','frei verfügbar','liquid'])} ${i(bfM(c.liquid))} · ${cv5n(['платежи по долгам','Raten','debt payments'])} ${i(bfM(c.debtPay))}</p>`;
 const stress=`<h3 class="bfh">${i(bft('stress'))}</h3>${st.map(x=>`<div class="bfpath">${bfDot(x.col)}<b>${i(x.t)}</b><span>${x.mo===Infinity?i(bft('safe')):i(bft('runway'))+' '+i(bfN(x.mo))+' '+i(bft('months'))}${x.loss?' · −'+i(bfM(x.loss)):''}</span></div>`).join('')}`;
 return`<div class="screen bf">${bfHdr(bft('health'),'bf')}${top}${ctx}${c.months?stress:''}<p class="bfnote">${i(cv5n(['Веса: подушка 30, долги 25, сбережения 20, дорогие долги 15, стресс 10. Зелёный — 6 мес. и больше, жёлтый — 3–6, красный — меньше 3.','Gewichte: Reserve 30, Schulden 25, Sparen 20, teure Schulden 15, Stress 10.','Weights: cushion 30, debt 25, savings 20, expensive debt 15, stress 10.']))}</p></div>`}
function bfHist(){const H2=bfC().hist,sel=m.bfSel||[];
 const rows=H2.map(e=>`<div class="bfhi"><label><input type="checkbox" data-bfsel="${e.id}" ${sel.includes(e.id)?'checked':''}></label><button type="button" class="bfrow" data-act="bfload" data-id="${e.id}"><span>${BF_K[e.k]?BF_K[e.k].ic:''} ${i(e.name)}${e.star?' ★':''}<small>${i(new Date(e.ts).toLocaleDateString(he()))}${e.v.length>1?' · '+i(bft('versions',{n:e.v.length})):''}</small></span><b>${i((e.v[e.v.length-1]||{}).main||'')}</b></button></div>`).join('');
 let cmp='';if(sel.length>=2){const E=sel.map(id=>H2.find(x=>x.id===id)).filter(Boolean);const keys=[...new Set(E.flatMap(e=>Object.keys((e.v[e.v.length-1]||{}).p||{})))];
  cmp=`<div class="bfcmp" style="--n:${E.length}"><div class="bfch"><span></span>${E.map(e=>`<b>${i(e.name)}</b>`).join('')}</div><div class="bfch"><span>${i(cv5n(['Итог','Ergebnis','Result']))}</span>${E.map(e=>`<b>${i((e.v[e.v.length-1]||{}).main||'')}</b>`).join('')}</div>${keys.map(k2=>`<div class="bfch"><span>${i(k2)}</span>${E.map(e=>`<em>${i(String(((e.v[e.v.length-1]||{}).p||{})[k2]??'—'))}</em>`).join('')}</div>`).join('')}</div>`}
 return`<div class="screen bf">${bfHdr(bft('history'),'bf')}${H2.length?`<p class="bfnote">${i(bft('pick'))}</p>`:''}${cmp}${rows||`<p class="bfnote">${i(bft('none'))}</p>`}</div>`}
const BF_R=['bf','bfc','bfh','bfl'];BF_R.forEach(r=>{Te.includes(r)||Te.push(r)});
(Hooks.h.screen=Hooks.h.screen||[]).unshift(()=>{if(!BF_R.includes(m.route)||g.bfoff)return;try{return m.route==='bfc'?bfCalc():m.route==='bfh'?bfHealthScreen():m.route==='bfl'?bfHist():bfCentre()}catch(e){Hooks.err('bfscreen',e)}});
/* back inside Butler Finance: calculator → centre → Финансы */
window.addEventListener('click',e=>{try{if(!m.logged||m.sheet||!BF_R.includes(m.route))return;const b=e.target&&e.target.closest&&e.target.closest('.screen > .sub-hdr > button:first-child');if(!b)return;e.preventDefault();e.stopImmediatePropagation();
 const h=m.hist||[];if(m.route!=='bf'){const up=m.route==='bfc'?(m.bfBack||'bf'):'bf';while(h.length&&BF_R.includes(h[h.length-1].route)&&h[h.length-1].route!==up)h.pop();if(h.length&&h[h.length-1].route===up)h.pop();return R(up,void 0,!0)}
 while(h.length&&(BF_R.includes(h[h.length-1].route)||h[h.length-1].route==='cat'&&h[h.length-1].cat==='bank'))h.pop();return R('cat','bank',!0)}catch(er){Hooks.err('bfback',er)}},!0);
/* v275: easy to find — its own tab in «Деньги» (next to Финансы and Аналитика) and the card always shows */
try{const L0={ru:'Butler Finance',de:'Butler Finance',en:'Butler Finance',pl:'Butler Finance',tr:'Butler Finance',fr:'Butler Finance',es:'Butler Finance'};for(const l in L0)if(tg[l])tg[l].bf=L0[l];
 const hub=H9X.find(h=>h[0]==='money');if(hub&&!hub[1].includes('q:bf'))hub[1].splice(1,0,'q:bf');BD8K['q:bf']='chart'}catch(e){Hooks.err('bftab',e)}
/* the card on the Finance front page */
Hooks.on('render',()=>{try{if(g.bfoff)return;const sc=document.querySelector('.screen.kbcover')||(m.route==='cat'&&m.cat==='bank'?document.querySelector('.screen'):null)||(m.route==='fin'?document.querySelector('.screen'):null);if(!sc||sc.querySelector('.bfcard'))return;const at=sc.querySelector('.st36m')||sc.querySelector('.st36ch')||sc.querySelector('.h9tabs')||sc.querySelector('.st32top')||sc.firstElementChild;if(!at)return;
 const t=document.createElement('template');t.innerHTML=`<button type="button" class="pin hbcard bfcard" data-act="go" data-to="bf"><span class="u1ic"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M6 16V9M10 16V5M14 16v-6M18 16V7"/></svg></span><span class="txt"><span class="t">${i(bft('title'))}</span><span class="s">${i(bft('card'))}</span></span>${_('chev','chev')}</button>`;at.after(t.content.firstChild)}catch(e){Hooks.err('bfcard',e)}});
/* ---------- live inputs ---------- */
let bfT=0;
function bfOpen(k,p,id){m.bfK=k;m.bfP=p?{...p}:null;m.bfId=id||null;m.bfNewV=id?1:0;m.bfBack=m.route==='bfl'?'bfl':'bf';R('bfc');if(p&&!id&&Object.keys(p).length)setTimeout(()=>{try{bfAuto(m.bfK,m.bfP)}catch(e){Hooks.err('bfauto',e)}},50)}
function bfLive(id,val){const f=BF_K[m.bfK].f(bfCtx()).find(x=>x.id===id);if(!f)return;let v2=parseFloat(String(val).replace(',','.'));if(isNaN(v2))return;v2=Math.max(f.min,Math.min(f.max*10,v2));m.bfP[id]=v2;
 document.querySelectorAll(`[data-bff="${id}"],[data-bfn="${id}"]`).forEach(x=>{if(x!==document.activeElement)x.value=v2});const det=document.querySelector('#bfres details');m.bfOpenDet=!!(det&&det.open);
 const box=document.getElementById('bfres');if(box)box.innerHTML=bfRes(m.bfK,m.bfP);clearTimeout(bfT);bfT=setTimeout(()=>{try{bfAuto(m.bfK,m.bfP)}catch(e){Hooks.err('bfauto',e)}},700)}
document.addEventListener('input',e=>{const t=e.target;if(!t||!t.dataset||m.route!=='bfc')return;const id=t.dataset.bff||t.dataset.bfn;if(id)bfLive(id,t.value)},!0);
document.addEventListener('change',e=>{const t=e.target;if(!t||!t.dataset||!t.dataset.bfsel)return;let s=m.bfSel||[];s=t.checked?[...s.filter(x=>x!==t.dataset.bfsel),t.dataset.bfsel].slice(-3):s.filter(x=>x!==t.dataset.bfsel);m.bfSel=s;try{k3keep(()=>v())}catch{v()}},!0);
document.addEventListener('submit',e=>{const f=e.target;if(!f||!f.dataset||!f.dataset.bfask)return;e.preventDefault();e.stopImmediatePropagation();bfAsk(f.querySelector('input').value)},!0);
let bfRec=null;
Hooks.act('bfmic',()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){const q=document.getElementById('bfq');q&&q.focus();return}if(bfRec){try{bfRec.stop()}catch{}bfRec=null;return}
 try{const r=new SR();bfRec=r;r.lang=ac[g.lang]||'ru-RU';r.interimResults=!1;r.onresult=ev=>{const t=ev.results[0][0].transcript;const q=document.getElementById('bfq');if(q)q.value=t;bfAsk(t)};r.onend=()=>{bfRec=null};r.start();T('🎙 …')}catch{bfRec=null}});
Hooks.act('bfopen',e=>bfOpen(e.k));
Hooks.act('bfload',e=>{const x=bfC().hist.find(h=>h.id===e.id);if(!x||!BF_K[x.k])return;bfOpen(x.k,(x.v[x.v.length-1]||{}).p,x.id)});
Hooks.act('bfdebt',()=>{try{const r=BF_K[m.bfK].run(m.bfP,bfCtx());if(!r.debt)return;const F=U();F.debts.push({id:V(),name:r.debt.name,orig:Math.round(r.debt.bal*100),bal:Math.round(r.debt.bal*100),rate:r.debt.rate,monthly:Math.round(r.debt.monthly*100),next:'',end:'',acc:'',cur:F.cur,auto:!1});$();T(bft('debtAdded'))}catch(er){Hooks.err('bfdebt',er)}});
Hooks.act('bfmeta',()=>{const x=bfC().hist.find(h=>h.id===m.bfId);if(!x)return;H(bft('rename'),`<label class="bff"><span>${i(bft('name'))}</span><input class="field" data-bfnm value="${i(x.name)}"></label><label class="bff"><span>${i(bft('note'))}</span><input class="field" data-bfnt value="${i(x.note||'')}"></label>
 <label class="mirchk"><input type="checkbox" data-bfst ${x.star?'checked':''}> ★ ${i(bft('star'))}</label><div class="bfbtns"><button type="button" class="dcadd gold" data-bfok="1">${i(bft('ok'))}</button><button type="button" class="btn" data-bfdel="1">${i(bft('del'))}</button></div>
 ${x.v.length>1?`<h3 class="bfh">${i(bft('versions',{n:x.v.length}))}</h3>${x.v.slice().reverse().map((vv,j)=>`<button type="button" class="bfrow" data-bfv="${x.v.length-1-j}"><span>${i(new Date(vv.ts).toLocaleString(he()))}</span><b>${i(vv.main||'')}</b></button>`).join('')}`:''}`,sh=>{
 sh.addEventListener('click',ev=>{const t=ev.target;if(t.closest('[data-bfok]')){const n2=sh.querySelector('[data-bfnm]').value.trim();if(n2&&n2!==x.name){x.name=n2;x.renamed=1}x.note=sh.querySelector('[data-bfnt]').value.trim();x.star=sh.querySelector('[data-bfst]').checked?1:0;$();sh.remove();try{k3keep(()=>v())}catch{v()}}
  const d=t.closest('[data-bfdel]');if(d){if(!d.dataset.s){d.dataset.s=1;d.textContent=bft('sure');return}bfC().hist=bfC().hist.filter(h=>h.id!==x.id);$();sh.remove();m.bfId=null;R('bf')}
  const vb=t.closest('[data-bfv]');if(vb){const vv=x.v[+vb.dataset.bfv];if(vv){m.bfP={...vv.p};m.bfNewV=1;sh.remove();try{k3keep(()=>v())}catch{v()}}}})})});
Hooks.css('butler-finance',`
.screen.bf{gap:12px}.bf .bfh{display:flex;justify-content:space-between;align-items:center;margin:10px 2px 0;font:inherit;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.bfask{display:flex;gap:8px;align-items:center;height:48px;padding:0 6px 0 14px;border-radius:24px;border:1px solid color-mix(in srgb,var(--gold,#C99A3E) 45%,var(--line));background:var(--surface)}.bfask input{flex:1;min-width:0;border:0!important;background:transparent!important;color:var(--ink);font:inherit;font-size:15.5px;outline:none;padding:0!important;box-shadow:none!important}
.bfmic{flex:none;width:38px;height:38px;border-radius:50%;border:1px solid var(--line);background:transparent;font-size:17px;cursor:pointer}
.bfhs{display:flex;align-items:center;gap:14px;width:100%;padding:14px;border-radius:18px;border:1px solid color-mix(in srgb,var(--gold,#C99A3E) 45%,var(--line));background:var(--surface);color:var(--ink);font:inherit;text-align:left;cursor:pointer;box-sizing:border-box}.bfhs.off{cursor:default}
.bfsc{flex:none;width:64px;height:64px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px solid}.bfsc b{font-size:22px;line-height:1}.bfsc small{font-size:11px;color:var(--muted)}.bfsc.g{border-color:#3f9d5a}.bfsc.y{border-color:#c98a2e}.bfsc.r{border-color:#c0453a}
.bftx{flex:1;display:flex;flex-direction:column;gap:4px}.bftx b{font-weight:500;font-size:16px}.bftx small{color:var(--muted);font-size:13.5px;line-height:1.35}
.bfqg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.bfq{display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 4px;border-radius:16px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:13px;cursor:pointer}.bfq span{font-size:22px}
.bftools{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.bftools button{display:flex;align-items:center;gap:10px;padding:12px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:14px;text-align:left;cursor:pointer;line-height:1.25}.bftools span{font-size:18px;flex:none}
.bfgl{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface)}.bfgl b{font-weight:500}.bfgl small{color:var(--muted);font-size:13px}.bfgl i,.bfpart i{display:block;height:6px;border-radius:3px;background:color-mix(in srgb,var(--ink) 10%,transparent);position:relative;overflow:hidden}.bfgl i::after,.bfpart i::after{content:'';position:absolute;inset:0 auto 0 0;width:var(--p);background:var(--gold,#C99A3E);border-radius:3px}
.bfrow{display:flex;justify-content:space-between;align-items:center;gap:10px;width:100%;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;text-align:left;cursor:pointer;box-sizing:border-box}.bfrow span{display:flex;flex-direction:column;gap:2px;min-width:0;font-size:14.5px}.bfrow small{color:var(--muted);font-size:12.5px}.bfrow b{flex:none;font-weight:600;font-size:14.5px}
.bfnote{color:var(--muted);font-size:12.5px;line-height:1.4;margin:4px 2px}.bflink{border:0;background:none;color:var(--gold,#C99A3E);font:inherit;font-size:14px;text-transform:none;letter-spacing:0;cursor:pointer;padding:4px 0;text-align:left}
.bfmain{position:relative;display:flex;flex-direction:column;gap:4px;padding:16px;border-radius:18px;border:1px solid color-mix(in srgb,var(--gold,#C99A3E) 45%,var(--line));background:var(--surface)}.bfmain small{color:var(--muted);font-size:13.5px}.bfmain b{font-size:30px;font-weight:600;line-height:1.15}.bfmain p{margin:4px 0 0;line-height:1.4}.bfmain.txt b{font-size:23px}
.bfdot{display:inline-block;width:12px;height:12px;border-radius:50%;flex:none}.bfmain .bfdot{position:absolute;top:16px;right:16px}.bfdot.g{background:#3f9d5a}.bfdot.y{background:#d9a13a}.bfdot.r{background:#c0453a}
.bfscen{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.bfscen span{display:flex;flex-direction:column;gap:2px;padding:10px;border-radius:12px;border:1px solid var(--line);background:var(--surface);text-align:center}.bfscen span.on{border-color:var(--gold,#C99A3E)}.bfscen small{color:var(--muted);font-size:12px}.bfscen b{font-size:14.5px}
.bfpaths{display:flex;flex-direction:column;gap:8px}.bfpath{display:grid;grid-template-columns:14px 1fr;gap:4px 10px;align-items:center;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface)}.bfpath b{font-weight:500}.bfpath span{grid-column:2;color:var(--muted);font-size:13.5px;line-height:1.35}
.bfdet{border-radius:14px;border:1px solid var(--line);background:var(--surface);padding:4px 14px}.bfdet summary{cursor:pointer;padding:10px 0;color:var(--gold,#C99A3E)}.bfr{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-top:1px solid var(--line);font-size:14.5px}.bfr span{color:var(--muted)}.bfr b{font-weight:500;text-align:right}
.bfas{margin:0 2px;color:var(--muted);font-size:12.5px;line-height:1.4}
.bffs{display:flex;flex-direction:column;gap:12px;padding:14px;border-radius:18px;border:1px solid var(--line);background:var(--surface)}.bff{display:flex;flex-direction:column;gap:6px;font-size:13.5px;color:var(--muted)}.bfin{display:flex;align-items:center;gap:10px}.bfin input[type=range]{flex:1;min-width:0;accent-color:var(--gold,#C99A3E)}.bfin input[type=number]{width:96px;flex:none;padding:8px 10px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font:inherit;font-size:16px;text-align:right}.bfin em{width:14px;font-style:normal;color:var(--muted)}
.bfpart{display:grid;grid-template-columns:1fr auto;gap:6px 10px;padding:10px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface)}.bfpart span{font-size:14.5px}.bfpart small{color:var(--muted)}.bfpart i{grid-column:1/-1}.bfpart em{grid-row:1;grid-column:2;font-style:normal;color:var(--muted);font-size:13px}
.bfhi{display:flex;align-items:center;gap:10px}.bfhi label{flex:none}.bfhi input{width:20px;height:20px;accent-color:var(--gold,#C99A3E)}.bfhi .bfrow{flex:1;min-width:0}
.bfcmp{overflow-x:auto;border-radius:14px;border:1px solid var(--gold,#C99A3E);background:var(--surface);padding:6px 12px}.bfch{display:grid;grid-template-columns:110px repeat(var(--n),minmax(110px,1fr));gap:8px;padding:8px 0;border-top:1px solid var(--line);font-size:13.5px}.bfch:first-child{border-top:0}.bfch span{color:var(--muted)}.bfch b{font-weight:600}.bfch em{font-style:normal}
.bfbtns{display:flex;gap:10px;margin:12px 0}.bfbtns>*{flex:1}
`);
