/* ===== v281 «Финансовая книга» in the owner's design =====
   The book (the former cover, opened from the Butler Finance home) now starts with:
   an own drawing, Месяц · Квартал · Год with ‹ period ›, three cards Доходы · Расходы · Остаток,
   «План на …» — the four Kakeibo baskets plus Накопления, each with a bar «spent of limit» (tap to set a limit),
   and the button «Добавить расход / закупку». Limits are per month (×3 for a quarter, ×12 for a year), kept in g.fin.plan2.
   The older pills and the basket strip are hidden here because the plan shows the same numbers. */
const f3S={
 tag:['Kakebo — осознанные деньги','Kakebo – bewusst mit Geld','Kakebo – mindful money','Kakebo – świadome pieniądze','Kakebo – bilinçli para','Kakebo – l’argent en conscience','Kakebo: dinero consciente'],
 m:['Месяц','Monat','Month','Miesiąc','Ay','Mois','Mes'],q:['Квартал','Quartal','Quarter','Kwartał','Çeyrek','Trimestre','Trimestre'],y:['Год','Jahr','Year','Rok','Yıl','Année','Año'],
 inc:['Доходы','Einnahmen','Income','Przychody','Gelir','Revenus','Ingresos'],exp:['Расходы','Ausgaben','Spending','Wydatki','Gider','Dépenses','Gastos'],rest:['Остаток','Rest','Left','Zostaje','Kalan','Reste','Resto'],
 planM:['План на месяц','Monatsplan','Plan for the month','Plan na miesiąc','Aylık plan','Plan du mois','Plan del mes'],planQ:['План на квартал','Quartalsplan','Plan for the quarter','Plan na kwartał','Çeyrek planı','Plan du trimestre','Plan del trimestre'],planY:['План на год','Jahresplan','Plan for the year','Plan na rok','Yıllık plan','Plan de l’année','Plan del año'],
 need:['Нужное','Notwendiges','Needs','Potrzeby','İhtiyaç','Nécessaire','Necesario'],want:['Желания','Wünsche','Wants','Zachcianki','İstekler','Envies','Deseos'],cult:['Культура','Kultur','Culture','Kultura','Kültür','Culture','Cultura'],extra:['Неожиданное','Unerwartetes','Unexpected','Nieoczekiwane','Beklenmedik','Imprévu','Imprevistos'],
 save:['Накопления','Sparen','Savings','Oszczędności','Birikim','Épargne','Ahorro'],
 set:['задать лимит','Limit setzen','set a limit','ustaw limit','limit belirle','fixer une limite','fijar límite'],
 lim:['Лимит в месяц','Limit pro Monat','Limit per month','Limit miesięczny','Aylık limit','Limite par mois','Límite al mes'],goal:['Цель в месяц','Ziel pro Monat','Target per month','Cel miesięczny','Aylık hedef','Objectif par mois','Meta al mes'],
 ok:['Готово','Fertig','Done','Gotowe','Tamam','OK','Listo'],
 add:['Добавить расход / закупку','Ausgabe / Einkauf hinzufügen','Add expense / purchase','Dodaj wydatek / zakup','Harcama / alışveriş ekle','Ajouter dépense / achat','Añadir gasto / compra'],
 more:['Ещё: деньги на 30 дней, советы, ближайшие дни','Mehr: Geld für 30 Tage, Tipps, nächste Tage','More: money for 30 days, tips, coming days','Więcej: pieniądze na 30 dni, porady, najbliższe dni','Daha fazla: 30 günlük para, ipuçları, yakın günler','Plus : argent sur 30 jours, conseils, jours à venir','Más: dinero a 30 días, consejos, próximos días'],
 saveT:['остаток периода','Rest des Zeitraums','what is left in the period','reszta okresu','dönem kalanı','reste de la période','resto del periodo']};
const f3t=k=>cv5n(f3S[k]);
const F3ART=`<svg class="f3art" viewBox="0 0 340 110" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><defs><linearGradient id="f3sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--gold-soft)"/><stop offset="1" style="stop-color:var(--surface)"/></linearGradient></defs>
<rect width="340" height="110" fill="url(#f3sky)"/><circle cx="170" cy="44" r="19" style="fill:var(--gold)" opacity=".75"/>
<path d="M92 110l60-58c5-5 11-5 16 0l22 21 14-11c5-4 10-4 15 1l49 47z" style="fill:var(--gold)" opacity=".32"/><path d="M143 62l9-9c5-5 11-5 16 0l10 10-8 4-8-6-7 6z" fill="#fff" opacity=".8"/>
<path d="M0 110V88c40-13 80-11 120 0s90 11 130-2 60-9 90-2v26z" style="fill:var(--gold)" opacity=".45"/><path d="M0 110v-9c50-11 110-7 170 0s120 6 170-4v13z" style="fill:var(--gold)" opacity=".7"/>
<g style="fill:var(--ink)" opacity=".4"><path d="M44 96l9-21 9 21zM47 85l6-14 6 14z"/><path d="M276 92l8-19 8 19zM279 82l5-12 5 12z"/><path d="M300 98l7-16 7 16z"/></g>
<g><rect x="228" y="82" width="20" height="13" style="fill:var(--surface)"/><path d="M224 83l14-10 14 10z" style="fill:var(--gold)"/><rect x="236" y="88" width="5" height="7" style="fill:var(--ink)" opacity=".5"/></g>
<g style="fill:var(--gold)" opacity=".55"><circle cx="26" cy="36" r="5"/><circle cx="36" cy="28" r="6"/><circle cx="18" cy="26" r="4"/><circle cx="312" cy="32" r="5"/><circle cx="322" cy="42" r="4"/></g><path d="M0 46c12-4 22-8 34-16M340 50c-10-3-16-8-24-16" style="stroke:var(--ink)" stroke-opacity=".35" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const f3Range=()=>{const p=m.f3p||'m',o=m.f3o||0,n=new Date();let a,b,lab;
 if(p==='y'){const yy=n.getFullYear()+o;a=new Date(yy,0,1);b=new Date(yy+1,0,1);lab=String(yy)}
 else if(p==='q'){const q0=Math.floor(n.getMonth()/3)+o,a0=new Date(n.getFullYear(),q0*3,1);a=a0;b=new Date(a0.getFullYear(),a0.getMonth()+3,1);lab='Q'+(Math.floor(a0.getMonth()/3)+1)+' '+a0.getFullYear()}
 else{a=new Date(n.getFullYear(),n.getMonth()+o,1);b=new Date(a.getFullYear(),a.getMonth()+1,1);lab=a.toLocaleDateString(he(),{month:'long',year:'numeric'});lab=lab.charAt(0).toUpperCase()+lab.slice(1)}
 return{r:[x(a),x(b)],lab,k:p==='y'?12:p==='q'?3:1}};
function f3Block(){const R0=f3Range(),S=us(R0.r),F=U(),P=F.plan2||{},p=m.f3p||'m',rest=S.inc-S.exp;
 const row=(k,spent)=>{const lim=(+P[k]||0)*100*R0.k,over=lim>0&&(k==='save'?!1:spent>lim),pct=lim>0?Math.min(100,Math.round(Math.max(0,spent)/lim*100)):0;
  if(m.f3ed===k)return`<div class="f3row ed"><label><span>${i(f3t(k))} · ${i(f3t(k==='save'?'goal':'lim'))}</span><span class="f3in"><input type="number" inputmode="decimal" min="0" value="${P[k]||''}" data-f3lim="${k}"><em>${i(F.cur||'')}</em></span></label><button type="button" class="btn primary" data-act="f3ok">${i(f3t('ok'))}</button></div>`;
  return`<button type="button" class="f3row${over?' over':''}" data-act="f3ed" data-k="${k}"><span class="f3l">${i(f3t(k))}${k==='save'?` <small>${i(f3t('saveT'))}</small>`:''}</span><b>${i(B(Math.max(0,spent)))}${lim>0?` <small>/ ${i(B(lim))}</small>`:` <small class="f3set">${i(f3t('set'))}</small>`}</b><span class="f3bar"><i style="width:${pct}%"></i></span></button>`};
 return`<div class="f3" data-f3="1">${F3ART}<p class="f3tag">${i(f3t('tag'))}</p>
 <div class="f3seg">${['m','q','y'].map(k=>`<button type="button" class="${p===k?'on':''}" data-act="f3p" data-k="${k}">${i(f3t(k))}</button>`).join('')}</div>
 <div class="f3nav"><button type="button" data-act="f3o" data-d="-1" aria-label="prev">‹</button><b>${i(R0.lab)}</b><button type="button" data-act="f3o" data-d="1" aria-label="next"${(m.f3o||0)>=0?' disabled':''}>›</button></div>
 <div class="f3tri"><div class="inc"><small>${i(f3t('inc'))}</small><b>${i(B(S.inc))}</b></div><div class="exp"><small>${i(f3t('exp'))}</small><b>${i(B(S.exp))}</b></div><div class="rest${rest<0?' neg':''}"><small>${i(f3t('rest'))}</small><b>${i(B(rest))}</b></div></div>
 <h3 class="f3h">${i(f3t(p==='y'?'planY':p==='q'?'planQ':'planM'))}</h3>
 <div class="f3plan">${['need','want','cult','extra'].map(k=>row(k,S.byP[k]||0)).join('')}${row('save',rest)}</div>
 <button type="button" class="f3add" data-act="kbnew" data-k="expense">＋ ${i(f3t('add'))}</button></div>`}
Hooks.on('render',()=>{try{if(g.fin2off||m.route!=='cat'||m.cat!=='bank'||m.f2v!=='book')return;const sc=document.querySelector('.screen.kbcover');if(!sc||sc.querySelector('[data-f3]'))return;sc.classList.add('f3on');
 const d=document.createElement('div');d.innerHTML=f3Block();const el=d.firstElementChild,after=sc.querySelector('.h9tabs')||sc.querySelector('.st32top');if(after&&after.parentNode===sc)sc.insertBefore(el,after.nextSibling);else sc.insertBefore(el,sc.firstChild);
 const more=document.createElement('details');more.className='f3more';more.open=!!m.f3more;more.innerHTML=`<summary>${i(f3t('more'))} ▾</summary>`;
 more.addEventListener('toggle',()=>{m.f3more=more.open});
 [...sc.children].filter(c=>c.matches('.st36top,.st36e,.st36m,.kbq,.st28s,.kbnote')).forEach(c=>more.appendChild(c));if(more.children.length>1)sc.appendChild(more);
 if(m.f3ed){const inp=sc.querySelector('[data-f3lim]');inp&&inp.focus()}}catch(e){Hooks.err('f3book',e)}});
const f3Re=()=>{try{k3keep(()=>v())}catch{try{v()}catch{}}};
Hooks.act('f3p',e=>{m.f3p=e.k;m.f3o=0;m.f3ed='';f3Re()});
Hooks.act('f3o',e=>{m.f3o=Math.min(0,(m.f3o||0)+(+e.d||0));f3Re()});
Hooks.act('f3ed',e=>{m.f3ed=e.k;f3Re()});
Hooks.act('f3ok',()=>{const inp=document.querySelector('[data-f3lim]');if(inp){const F=U();F.plan2=F.plan2||{};const n=parseFloat(String(inp.value).replace(',','.'));if(n>0)F.plan2[inp.dataset.f3lim]=Math.round(n*100)/100;else delete F.plan2[inp.dataset.f3lim];$()}m.f3ed='';f3Re()});
document.addEventListener('keydown',e=>{const t=e.target;if(e.key==='Enter'&&t&&t.dataset&&t.dataset.f3lim){e.preventDefault();const b=document.querySelector('[data-act=f3ok]');b&&b.click()}},!0);
Hooks.css('finance-book',`
.kbcover.f3on .st36ch,.kbcover.f3on .st36k,.kbcover.f3on .st36bar,.kbcover.f3on .st36lg,.kbcover.f3on .bfcard{display:none!important}
.f3{display:flex;flex-direction:column;gap:12px;flex-shrink:0}
.f3art{width:100%;height:104px;border-radius:18px;display:block;border:1px solid var(--line)}.f3tag{margin:-4px 0 0;text-align:center;color:var(--muted);font-size:14px}
.f3seg{display:flex;background:var(--field);border-radius:999px;padding:3px}.f3seg button{flex:1;border:0;background:transparent;font:inherit;font-size:15px;padding:8px;border-radius:999px;color:var(--ink);cursor:pointer}.f3seg button.on{background:var(--gold);color:#17130b}
.f3nav{display:flex;align-items:center;justify-content:space-between;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:4px}.f3nav b{font-weight:600;font-size:17px}.f3nav button{width:38px;height:38px;border:0;background:transparent;font-size:22px;color:var(--ink);cursor:pointer;border-radius:50%}.f3nav button:disabled{opacity:.25}
.f3tri{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.f3tri>div{display:flex;flex-direction:column;gap:4px;padding:10px;border-radius:14px;background:var(--surface);border:1px solid var(--line);min-width:0}.f3tri small{font-size:12.5px;color:var(--muted)}
.f3tri b,.f3row b,.f3r b,.f2num{font-family:-apple-system,'SF Pro Text','Helvetica Neue',system-ui,sans-serif;font-variant-numeric:tabular-nums;letter-spacing:-.01em}
.f3tri b{font-size:17px;font-weight:600;overflow-wrap:anywhere}.f3tri .inc b{color:var(--ok,#2E7D4F)}.f3tri .exp b,.f3tri .rest.neg b{color:#c0563f}.f3tri .rest b{color:var(--gold)}
.f3h{margin:6px 0 0;font-size:17px;font-weight:600;font-family:inherit;letter-spacing:0;text-transform:none}
.f3plan{display:flex;flex-direction:column;gap:2px}
.f3row{display:grid;grid-template-columns:1fr auto;gap:6px 10px;align-items:baseline;width:100%;border:0;background:transparent;font:inherit;color:var(--ink);text-align:left;padding:8px 2px;cursor:pointer}
.f3row .f3l{font-size:15.5px}.f3row .f3l small{color:var(--muted);font-size:12.5px}.f3row b{font-weight:600;font-size:15px;white-space:nowrap}.f3row b small{font-weight:400;color:var(--muted);font-size:13px}.f3row .f3set{color:var(--gold);text-decoration:underline;font-family:inherit}
.f3bar{grid-column:1/-1;height:6px;border-radius:3px;background:var(--field);overflow:hidden}.f3bar i{display:block;height:100%;border-radius:3px;background:var(--gold)}.f3row.over .f3bar i{background:#c0563f}.f3row.over b{color:#c0563f}
.f3row.ed{align-items:end;cursor:default;background:var(--surface);border:1px solid var(--gold);border-radius:14px;padding:10px}.f3row.ed label{display:flex;flex-direction:column;gap:4px;font-size:13px;color:var(--muted)}
.f3in{display:flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:10px;padding:6px 10px;background:var(--field)}.f3in input{flex:1;min-width:0;border:0;outline:none;background:transparent;font:inherit;font-size:16px;color:var(--ink)}.f3in em{font-style:normal;color:var(--muted)}
.f3add{border:0;border-radius:999px;padding:14px;font:inherit;font-size:16px;font-weight:600;color:#17130b;background:linear-gradient(180deg,color-mix(in srgb,var(--gold) 75%,#fff),var(--gold));cursor:pointer}
.f3more{flex-shrink:0;margin-top:6px;border-top:1px solid var(--line);padding-top:6px}.f3more>summary{list-style:none;cursor:pointer;padding:10px 2px;color:var(--gold);font-size:15px}.f3more>summary::-webkit-details-marker{display:none}.f3more[open]>summary{margin-bottom:8px}.f3more>*:not(summary){margin-bottom:12px}
`);
/* ---- shopping list: prices and a budget («План закупки») ---- */
const f3L={plan:['План закупки','Einkaufsplan','Shopping plan','Plan zakupów','Alışveriş planı','Plan d’achat','Plan de compra'],bud:['Бюджет','Budget','Budget','Budżet','Bütçe','Budget','Presupuesto'],sum:['Сумма','Summe','Total','Suma','Toplam','Total','Suma'],rest:['Остаток','Rest','Left','Zostaje','Kalan','Reste','Resto'],
 price:['цена','Preis','price','cena','fiyat','prix','precio'],hint:['Впишите цены — Butler посчитает сумму и остаток.','Preise eintragen – Butler rechnet Summe und Rest.','Enter prices – Butler adds them up and shows what is left.','Wpisz ceny – Butler policzy sumę i resztę.','Fiyatları girin – Butler toplamı ve kalanı hesaplar.','Saisissez les prix – Butler calcule le total et le reste.','Escriba los precios: Butler calcula la suma y el resto.']};
const f3l=k=>cv5n(f3L[k]);
const f3Note=()=>{try{return(g.notes||[]).find(n=>n&&n.k==='list'&&n.shop&&Array.isArray(n.items))}catch{return null}};
const f3Num=x=>{const n=parseFloat(String(x==null?'':x).replace(',','.'));return n>0?Math.round(n*100)/100:0};
const f3Tot=N=>{const sum=N.items.reduce((a,it)=>a+(+it.p||0),0),bud=+N.bud||0;return{sum,bud,rest:bud-sum}};
const f3Sums=N=>{const t=f3Tot(N),c=U().cur;return`<div class="f3r"><span>${i(f3l('sum'))}</span><b>${i(B(Math.round(t.sum*100),c))}</b></div>${t.bud?`<div class="f3r tot${t.rest<0?' neg':''}"><span>${i(f3l('rest'))}</span><b>${i(B(Math.round(t.rest*100),c))}</b></div>`:''}`};
Hooks.on('render',()=>{try{if(g.fin2off||m.route!=='kblist')return;const sc=document.querySelector('.screen.k43');const N=f3Note();if(!sc||!N||!N.items.length||sc.querySelector('.f3shop'))return;const cur=U().cur||'';
 const d=document.createElement('div');d.className='f3shop';d.innerHTML=`<h3>${i(f3l('plan'))}</h3>${N.items.map((it,j)=>`<label class="f3it${it.d?' done':''}"><span>${i(it.t)}</span><span class="f3in"><input type="number" inputmode="decimal" min="0" step="0.01" placeholder="${i(f3l('price'))}" value="${it.p||''}" data-f3pr="${j}"><em>${i(cur)}</em></span></label>`).join('')}
 <label class="f3it bud"><span>${i(f3l('bud'))}</span><span class="f3in"><input type="number" inputmode="decimal" min="0" value="${N.bud||''}" data-f3bud="1"><em>${i(cur)}</em></span></label><div class="f3sums">${f3Sums(N)}</div><p>${i(f3l('hint'))}</p>`;
 const bar=sc.querySelector('.k4bar');sc.insertBefore(d,bar||null)}catch(e){Hooks.err('f3shop',e)}});
document.addEventListener('input',e=>{try{const t=e.target;if(!t||!t.dataset)return;const N=f3Note();if(!N)return;if(t.dataset.f3pr!=null&&t.dataset.f3pr!==''){const it=N.items[+t.dataset.f3pr];if(!it)return;const n=f3Num(t.value);if(n)it.p=n;else delete it.p}else if(t.dataset.f3bud){const n=f3Num(t.value);if(n)N.bud=n;else delete N.bud}else return;
 const s=document.querySelector('.f3sums');if(s)s.innerHTML=f3Sums(N);clearTimeout(f3Note.t);f3Note.t=setTimeout(()=>{try{$()}catch{}},600)}catch(x){Hooks.err('f3pr',x)}},!0);
Hooks.css('finance-shop',`
.f3shop{display:flex;flex-direction:column;gap:8px;margin:14px 0;padding:14px;border-radius:18px;background:var(--surface);border:1px solid var(--line);color:var(--ink)}
.f3shop h3{margin:0;font-size:17px;font-weight:600;font-family:inherit;letter-spacing:0;text-transform:none}.f3shop p{margin:0;font-size:13px;color:var(--muted)}
.f3it{display:grid;grid-template-columns:1fr 130px;gap:10px;align-items:center;font-size:15px}.f3it.done>span:first-child{text-decoration:line-through;color:var(--muted)}.f3it.bud{margin-top:6px;padding-top:10px;border-top:1px solid var(--line);font-weight:600}
.f3r{display:flex;justify-content:space-between;font-size:15px;padding:3px 0}.f3r.tot b{font-size:19px;color:var(--gold)}.f3r.tot.neg b{color:#c0563f}
`);
/* ---- goals: «Рекомендация Butler» — plain arithmetic on the goal's own monthly amount ---- */
const f3G={rec:['Рекомендация Butler','Butler-Hinweis','Butler’s note','Wskazówka Butlera','Butler’ın notu','Conseil de Butler','Consejo de Butler'],
 t:['Если откладывать %m в месяц, цель «%g» будет достигнута через %d.','Wenn Sie %m im Monat zurücklegen, ist das Ziel «%g» in %d erreicht.','If you put aside %m a month, the goal “%g” is reached in %d.','Odkładając %m miesięcznie, cel „%g” osiągniesz za %d.','Ayda %m ayırırsanız «%g» hedefine %d sonra ulaşılır.','En mettant %m de côté par mois, l’objectif « %g » est atteint dans %d.','Si aparta %m al mes, la meta «%g» se alcanza en %d.'],
 none:['Укажите у цели взнос в месяц — и Butler покажет, когда она будет достигнута.','Tragen Sie beim Ziel eine Monatsrate ein – Butler zeigt, wann es erreicht ist.','Give the goal a monthly amount and Butler shows when it is reached.','Podaj miesięczną wpłatę – Butler pokaże, kiedy cel zostanie osiągnięty.','Hedefe aylık tutar girin; Butler ne zaman ulaşılacağını gösterir.','Indiquez un versement mensuel – Butler montre quand l’objectif sera atteint.','Indique un aporte mensual y Butler mostrará cuándo se alcanza.'],
 y:['г.','J.','y','l.','y','a','a'],mo:['мес.','Mon.','mo','mies.','ay','mois','meses'],
 fine:['Без учёта процентов и роста цен.','Ohne Zinsen und Preissteigerung.','Without interest or price rises.','Bez odsetek i wzrostu cen.','Faiz ve fiyat artışı hariç.','Hors intérêts et hausse des prix.','Sin intereses ni subida de precios.']};
Hooks.on('render',()=>{try{if(g.fin2off||m.route!=='kbgoals')return;const sc=document.querySelector('.screen.kbv');if(!sc||sc.querySelector('.f3rec')||!sc.querySelector('.kbgoal'))return;
 const G=(U().goals||[]).filter(x=>x&&!x.done&&(x.target||0)>(x.saved||0));if(!G.length)return;const W=G.filter(x=>x.monthly>0).map(x=>({x,n:Math.ceil((x.target-(x.saved||0))/x.monthly)})).sort((a,b)=>a.n-b.n)[0];let txt;
 if(W){const yy=Math.floor(W.n/12),mm=W.n%12,d=[yy?yy+' '+cv5n(f3G.y):'',mm?mm+' '+cv5n(f3G.mo):''].filter(Boolean).join(' ');txt=cv5n(f3G.t).replace('%m',B(W.x.monthly,W.x.cur)).replace('%g',W.x.name||'').replace('%d',d).replace('..','.')+' '+cv5n(f3G.fine)}else txt=cv5n(f3G.none);
 const d=document.createElement('div');d.className='f3rec';d.innerHTML=`<b>${i(cv5n(f3G.rec))}</b><p>${i(txt)}</p>`;sc.appendChild(d)}catch(e){Hooks.err('f3rec',e)}});
Hooks.css('finance-goals',`
.f3rec{flex-shrink:0;margin-top:12px;padding:14px 16px;border-radius:18px;background:linear-gradient(135deg,var(--gold-soft),var(--surface));border:1px solid var(--line);color:var(--ink)}.f3rec b{font-weight:600;font-size:16px}.f3rec p{margin:6px 0 0;font-size:15px;line-height:1.45}
`);
