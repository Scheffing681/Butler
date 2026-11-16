/* ===== v280 Finance home «Butler Finance» — the owner's design =====
   One front page for money: an ask bar with a microphone («Что вы хотите сделать?»), nine tiles
   (Кредит · Инвестиции · Сбережения · Сравнение · Бюджет · Недвижимость · Налоги · Финансовый прогноз ·
   Планировщик целей) and the card «Финансовая книга» that opens the household book (the former cover).
   v283: structure from the design, look of Butler (theme colours, dark and light).
   The ask bar only opens and pre-fills a screen — it never saves by itself. Phrases are parsed on the phone.
   New: a small capital-gains tax calculator (Germany) behind «Налоги».
   Old look: book settings → «Прежний вид главной» (g.fin2off). Data (g.fin) is untouched. */
const f2S={
 sub:['Ваш личный финансовый ассистент','Ihr persönlicher Finanzassistent','Your personal finance assistant','Twój osobisty asystent finansowy','Kişisel finans asistanınız','Votre assistant financier personnel','Su asistente financiero personal'],
 ask:['Что вы хотите сделать?','Was möchten Sie tun?','What would you like to do?','Co chcesz zrobić?','Ne yapmak istersiniz?','Que voulez-vous faire ?','¿Qué desea hacer?'],
 loan:['Кредит','Kredit','Loan','Kredyt','Kredi','Crédit','Préstamo'],inv:['Инвестиции','Investieren','Investing','Inwestycje','Yatırım','Placements','Inversiones'],
 sav:['Сбережения','Sparen','Savings','Oszczędności','Birikim','Épargne','Ahorros'],cmp:['Сравнение','Vergleich','Compare','Porównanie','Karşılaştır','Comparer','Comparar'],
 bud:['Бюджет','Budget','Budget','Budżet','Bütçe','Budget','Presupuesto'],home:['Недвижимость','Immobilien','Property','Nieruchomości','Gayrimenkul','Immobilier','Inmuebles'],
 tax:['Налоги','Steuern','Taxes','Podatki','Vergiler','Impôts','Impuestos'],fc:['Финансовый прогноз','Finanzprognose','Financial forecast','Prognoza finansowa','Finansal öngörü','Prévision financière','Previsión financiera'],
 goals:['Планировщик целей','Zielplaner','Goal planner','Planer celów','Hedef planlayıcı','Planificateur d’objectifs','Planificador de metas'],
 book:['Финансовая книга','Finanzbuch','Finance book','Księga finansów','Finans defteri','Livre de comptes','Libro financiero'],
 bookT:['Умный учёт расходов и закупок (Kakebo)','Ausgaben und Einkäufe im Blick (Kakebo)','Smart tracking of spending and shopping (Kakebo)','Wydatki i zakupy pod kontrolą (Kakebo)','Harcama ve alışveriş takibi (Kakebo)','Suivi des dépenses et des courses (Kakebo)','Control de gastos y compras (Kakebo)'],
 say:['Говорите…','Sprechen Sie…','Speak…','Mów…','Konuşun…','Parlez…','Hable…'],
 noMic:['Голос на этом устройстве недоступен. Напечатайте или продиктуйте с клавиатуры.','Sprache ist auf diesem Gerät nicht verfügbar. Bitte tippen oder per Tastatur diktieren.','Voice is not available on this device. Type or dictate from the keyboard.','Głos jest niedostępny na tym urządzeniu. Wpisz lub podyktuj z klawiatury.','Bu cihazda ses kullanılamıyor. Yazın veya klavyeden dikte edin.','La voix n’est pas disponible sur cet appareil. Tapez ou dictez au clavier.','La voz no está disponible en este dispositivo. Escriba o dicte con el teclado.'],
 what:['Не понял. Выберите:','Nicht verstanden. Bitte wählen:','Not understood. Choose:','Nie rozumiem. Wybierz:','Anlaşılmadı. Seçin:','Pas compris. Choisissez :','No entendido. Elija:'],
 rec:['Записать расход','Ausgabe erfassen','Record expense','Zapisz wydatek','Harcama kaydet','Noter une dépense','Anotar gasto'],ana:['Анализ расходов','Ausgabenanalyse','Spending analysis','Analiza wydatków','Harcama analizi','Analyse des dépenses','Análisis de gastos'],
 shop:['Список покупок','Einkaufsliste','Shopping list','Lista zakupów','Alışveriş listesi','Liste de courses','Lista de compras'],
 old:['Прежний вид главной','Frühere Startansicht','Previous home view','Poprzedni widok','Önceki ana görünüm','Ancienne vue d’accueil','Vista de inicio anterior'],
 oldT:['Вернуть прежнюю обложку «Финансов» вместо главной с плитками.','Früheres Deckblatt statt der Startseite mit Kacheln.','Bring back the former cover instead of the tile home.','Przywróć dawną okładkę zamiast strony z kafelkami.','Kutucuklu ana sayfa yerine eski kapak.','Revenir à l’ancienne couverture au lieu de l’accueil à tuiles.','Volver a la portada anterior en lugar del inicio con mosaicos.'],
 taxT:['Налог с прибыли (Германия)','Steuer auf Kursgewinne (Deutschland)','Capital gains tax (Germany)','Podatek od zysków (Niemcy)','Kazanç vergisi (Almanya)','Impôt sur les plus-values (Allemagne)','Impuesto sobre ganancias (Alemania)'],
 gain:['Прибыль за год','Gewinn im Jahr','Gain in the year','Zysk w roku','Yıllık kazanç','Gain de l’année','Ganancia del año'],
 used:['Уже использовано из 1 000 €','Vom Freibetrag schon genutzt','Allowance already used','Wykorzystana kwota wolna','Kullanılan muafiyet','Abattement déjà utilisé','Exención ya utilizada'],
 tStock:['Налог: акции, облигации','Steuer: Aktien, Anleihen','Tax: shares, bonds','Podatek: akcje, obligacje','Vergi: hisse, tahvil','Impôt : actions, obligations','Impuesto: acciones, bonos'],
 tEtf:['Налог: акционный ETF (30 % не облагается)','Steuer: Aktien-ETF (30 % Teilfreistellung)','Tax: equity ETF (30% exempt)','Podatek: ETF akcyjny (30% zwolnione)','Vergi: hisse ETF’i (%30 muaf)','Impôt : ETF actions (30 % exonérés)','Impuesto: ETF de acciones (30 % exento)'],
 net:['Остаётся после налога (акции)','Bleibt nach Steuer (Aktien)','Left after tax (shares)','Zostaje po podatku (akcje)','Vergi sonrası kalan (hisse)','Reste après impôt (actions)','Queda tras impuestos (acciones)'],
 tAs:['26,375 % с надбавкой солидарности, без церковного налога; необлагаемая сумма 1 000 € на человека в год. Расчёт, а не налоговая консультация.','26,375 % inkl. Soli, ohne Kirchensteuer; Sparer-Pauschbetrag 1.000 € pro Person und Jahr. Berechnung, keine Steuerberatung.','26.375% incl. solidarity surcharge, no church tax; allowance €1,000 per person a year. A calculation, not tax advice.','26,375% z dodatkiem solidarnościowym, bez podatku kościelnego; kwota wolna 1000 € na osobę rocznie. Obliczenie, nie doradztwo podatkowe.','Dayanışma payı dahil %26,375, kilise vergisi hariç; kişi başı yıllık 1.000 € muafiyet. Hesaplamadır, vergi danışmanlığı değildir.','26,375 % avec contribution de solidarité, sans impôt d’Église ; abattement de 1 000 € par personne et par an. Un calcul, pas un conseil fiscal.','26,375 % con recargo de solidaridad, sin impuesto eclesiástico; exención de 1000 € por persona y año. Un cálculo, no asesoría fiscal.']};
const f2t=k=>cv5n(f2S[k]);
const f2On=()=>!g.fin2off;
/* own line icons */
const f2I={loan:'<path d="M4 11l8-6 8 6v8H4z"/><path d="M12 19v-5"/>',inv:'<ellipse cx="14" cy="7" rx="5" ry="2.2"/><path d="M9 7v4c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2V7"/><ellipse cx="9" cy="15" rx="5" ry="2.2"/><path d="M4 15v3c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2v-3"/>',
 sav:'<path d="M5 20v-5M10 20v-9M15 20V8M20 20V4"/>',cmp:'<path d="M12 4v16M6 20h12M5 8h14"/><path d="M5 8l-2.5 6h5zM19 8l-2.5 6h5z"/>',bud:'<rect x="4" y="7" width="16" height="12" rx="2.5"/><path d="M4 10h16M16 14.5h1.5M7 7V5.5h9"/>',
 home:'<rect x="4" y="9" width="7" height="11"/><rect x="11" y="4" width="9" height="16"/><path d="M14 8h3M14 12h3M14 16h3M6.5 13h2M6.5 16.5h2"/>',tax:'<path d="M7 3h8l3 3v15H7z"/><path d="M10 9h5M10 13h2M14 14l-3 4M11 14.2v.1M14 17.8v.1"/>',
 fc:'<path d="M4 20h16M6 17v-4M10 17v-6M14 17v-3M18 17v-8"/><path d="M5 9l5-4 4 3 5-5"/>',goals:'<circle cx="12" cy="13" r="7"/><circle cx="12" cy="13" r="3"/><path d="M12 13l7-8M19 5v3M19 5h-3"/>',
 book:'<path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5z"/><path d="M12 6v13M6.5 9h3M6.5 12h3M14.5 9h3M14.5 12h3"/>',
 mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"/>',spark:'<path d="M11 4l1.6 4.4L17 10l-4.4 1.6L11 16l-1.6-4.4L5 10l4.4-1.6zM18 15l.7 1.8 1.8.7-1.8.7L18 20l-.7-1.8-1.8-.7 1.8-.7z"/>'};
const f2ic=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f2I[k]}</svg>`;
const F2T=[['loan','bf:loan'],['inv','bf:lab'],['sav','bf:dep'],['cmp','bf:decide'],['bud','kbbud'],['home','bf:rent'],['tax','bf:tax'],['fc','bfhome'],['goals','kbgoals']];
function f2Home(){const ch=m.f2ch;
 return`<div class="screen fin2"><div class="sub-hdr"><button class="iconbtn" data-act="go" data-to="home" aria-label="back">${_('back')}</button><div class="ttl"><h2>Butler Finance</h2><small>${i(f2t('sub'))}</small></div><button class="iconbtn" data-act="kbgo" data-to="kbset" aria-label="settings">${_('gear')}</button></div>
 <form class="f2ask" data-f2form="1"><span class="f2sp">${f2ic('spark')}</span><input type="text" enterkeyhint="go" autocomplete="off" placeholder="${i(m.f2rec?f2t('say'):f2t('ask'))}" value="${i(m.f2q||'')}" data-f2q="1"><button type="button" class="f2mic${m.f2rec?' on':''}" data-act="f2mic" aria-label="mic">${f2ic('mic')}</button></form>
 ${ch?`<div class="f2ch"><small>${i(f2t('what'))}</small><div>${[['rec','rec'],['loan','bf:loan'],['ana','kbana'],['shop','shop']].map(([l,t])=>`<button type="button" data-act="f2go" data-to="${t}">${i(f2t(l))}</button>`).join('')}</div></div>`:''}
 <div class="f2grid">${F2T.map(([k,t])=>`<button type="button" data-act="f2go" data-to="${t}">${f2ic(k)}<span>${i(f2t(k))}</span></button>`).join('')}</div>
 <button type="button" class="f2book" data-act="f2book">${f2ic('book')}<span><b>${i(f2t('book'))}</b><small>${i(f2t('bookT'))}</small></span><em>›</em></button></div>`}
const f2act=(a,e)=>{try{if(typeof L[a]==='function')L[a](e||{});else R(a)}catch(x){Hooks.err('f2act',x)}};
function f2Go(to,p){m.f2ch=0;m.f2up='';if(to.startsWith('bf:')){const k=to.slice(3);if(k==='lab'){m.f2up='bfx';R('bfx');return}m.f2up='bfc';bfOpen(k,p||null);return}
 if(to==='bfhome'){R('bf');return}if(to==='rec'){f2act('kbnew',{k:'expense'});return}
 if(to==='shop'){const b=['st37buy','kbshop'].find(a=>typeof L[a]==='function');if(b)f2act(b);else R('kbshop');return}
 f2act(to)}
/* ---- the ask bar: phrases → a screen with fields filled in; nothing is saved here ---- */
function f2Ask(q){q=String(q||'').trim();if(!q)return;const s=q.toLowerCase(),nums=(s.replace(/(\d)[\s.](?=\d{3}\b)/g,'$1').match(/\d+(?:[.,]\d+)?/g)||[]).map(x=>parseFloat(x.replace(',','.')));
 const has=r=>r.test(s);m.f2q='';
 if(nums.length&&has(/потрат|заплат|купил|ausgegeben|bezahlt|gezahlt|gekauft|spent|paid|bought|wyda|zapłac|harcad|ödedi|dépens|payé|gast[éeo]|pagu?[éeo]/)){const note=(q.match(/(?:\sв\s|\sbei\s|\sat\s|\sw\s|\schez\s|\sen\s)(.+)$/i)||[])[1]||'';f2Go('rec');f2Fill(nums[0],note.trim());return}
 if(has(/кредит|kredit|loan|kredyt|kredi|crédit|préstamo/)){const p={};if(nums[0]>=100)p.amt=nums[0];const y=nums.find((n,j)=>j>0&&n<=40)||(nums[0]<100?nums[0]:0);if(y)p.years=y;f2Go('bf:loan',Object.keys(p).length?p:null);return}
 if(has(/сколько|анализ|wie ?viel|analys|how much|ile |analiz|ne kadar|combien|cu[aá]nto|an[aá]lisis/)){f2Go('kbana');return}
 if(has(/список|купить|einkauf|kaufen|shopping|to buy|buy |zakup|kupi|alışveriş|courses|acheter|compra/)){const it=(q.match(/(?:купить|kaufen|einkaufen|buy|kupić|kupic|satın al|acheter|comprar)\s+(.+)$/i)||[])[1]||'';f2Go('shop');if(it)f2Items(it.replace(/\s+(?:и|und|and|i|ve|et|y)\s+/gi,', '));return}
 if(has(/цел|ziel|goal|cel\b|cele|hedef|objectif|objetivo|meta/)){f2Go('kbgoals');return}
 if(has(/бюджет|budget|budżet|bütçe|presupuesto/)){f2Go('kbbud');return}
 if(has(/инвест|invest|anlage|etf|акци|aktie|inwest|yatırım|placement|inversi/)){f2Go('bf:lab');return}
 if(has(/налог|steuer|tax|podat|vergi|impôt|impuesto/)){f2Go('bf:tax');return}
 if(has(/прогноз|prognos|forecast|öngörü|prévision|previsi/)){f2Go('bfhome');return}
 m.f2ch=1;m.f2q=q;f2Re()}
function f2Fill(amount,note){let n=0;const tick=()=>{try{const sc=document.querySelector('.screen');const a=sc&&sc.querySelector('input[inputmode="decimal"],input[type="number"]');if(a&&m.route==='kbnew'){const set=(el,val)=>{el.value=val;el.dispatchEvent(new Event('input',{bubbles:!0}));el.dispatchEvent(new Event('change',{bubbles:!0}))};set(a,amount.toFixed(2).replace('.',g.lang==='en'?'.':','));
   if(note){const t=[...sc.querySelectorAll('input[type="text"],textarea')].filter(x=>x!==a)[0];t&&set(t,note)}return}}catch(e){Hooks.err('f2fill',e)}if(++n<12)setTimeout(tick,120)};setTimeout(tick,150)}
function f2Items(txt){let n=0;const tick=()=>{try{const el=document.getElementById('k43in'),bt=document.querySelector('[data-act=k43add]');if(el&&bt&&m.route==='kblist'){el.value=txt;el.dispatchEvent(new Event('input',{bubbles:!0}));bt.click();return}}catch(e){Hooks.err('f2items',e)}if(++n<12)setTimeout(tick,120)};setTimeout(tick,150)}
const f2Re=()=>{try{k3keep(()=>v())}catch{try{v()}catch{}}};
let f2SR=null;
Hooks.act('f2mic',()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(m.f2rec&&f2SR){try{f2SR.stop()}catch{}return}
 if(!SR){T(f2t('noMic'));const el=document.querySelector('[data-f2q]');el&&el.focus();return}
 try{const r=f2SR=new SR();r.lang=(typeof ac!=='undefined'&&ac[g.lang])||g.lang||'de-DE';r.interimResults=!1;r.maxAlternatives=1;let got='';
  r.onresult=e=>{try{got=e.results[0][0].transcript}catch{}};r.onerror=()=>{m.f2rec=0;f2Re();T(f2t('noMic'))};r.onend=()=>{m.f2rec=0;f2SR=null;if(got)f2Ask(got);else f2Re()};m.f2rec=1;f2Re();r.start()}catch(e){m.f2rec=0;T(f2t('noMic'));f2Re()}});
Hooks.act('f2go',e=>f2Go(e.to));
Hooks.act('f2book',()=>{m.f2v='book';f2Re();try{window.scrollTo(0,0)}catch{}});
Hooks.act('f2home',()=>{m.f2v='';if(m.route==='cat'&&m.cat==='bank')f2Re();else{m.cat='bank';R('cat','bank')}});
document.addEventListener('input',e=>{const t=e.target;if(t&&t.dataset&&t.dataset.f2q)m.f2q=t.value},!0);
document.addEventListener('submit',e=>{const t=e.target;if(t&&t.dataset&&t.dataset.f2form){e.preventDefault();f2Ask(m.f2q)}},!0);
/* home instead of the cover; the cover becomes «Финансовая книга» with a way back */
Hooks.on('render',()=>{try{if(!f2On()||m.route!=='cat'||m.cat!=='bank')return;const sc=document.querySelector('.screen');if(!sc)return;
 if(m.f2v==='book'){const bk=sc.querySelector('[data-act="go"][data-to="home"]');if(bk){bk.dataset.act='f2home';delete bk.dataset.to}return}
 if(sc.classList.contains('fin2'))return;const q=document.activeElement&&document.activeElement.dataset&&document.activeElement.dataset.f2q;sc.outerHTML=f2Home();if(q){const el=document.querySelector('[data-f2q]');el&&el.focus()}}catch(e){Hooks.err('f2home',e)}});
Hooks.on('route',r=>{if(r==='home')m.f2v='';if(r==='bf'||!/^bf/.test(r||''))m.f2up=''});
document.addEventListener('click',e=>{try{if(!f2On())return;const b=e.target.closest&&e.target.closest('.screen.bf > .sub-hdr > button:first-child');if(b&&m.route==='bf'){e.preventDefault();e.stopPropagation();m.f2v='';m.cat='bank';R('cat','bank')}}catch{}},!0);
/* settings row: back to the former look */
Hooks.on('screen',(html,route)=>{if(route!=='kbset'||typeof html!=='string')return;return html.replace(/<\/div>\s*$/,`<button type="button" class="dcrow" data-act="f2old"><span><b>${i(f2t('old'))}</b><small>${i(f2t('oldT'))}</small></span><em>${g.fin2off?'✓':''}</em></button></div>`)});
Hooks.act('f2old',()=>{g.fin2off=g.fin2off?0:1;$();f2Re()});
/* «Налоги»: capital gains tax, Germany */
BF_K.tax={t:f2S.taxT,ic:'🧾',f:c=>[bfF('gain',f2S.gain,0,100000,100,3000,'€'),bfF('used',f2S.used,0,1000,50,0,'€')],
 run:p=>{const free=Math.max(0,BF_FREE-Math.min(BF_FREE,p.used||0)),st=Math.max(0,p.gain-free)*BF_TAX,et=Math.max(0,p.gain*(1-BF_TFS)-free)*BF_TAX;
  return{main:[f2t('tStock'),bfM(st)],rows:[[f2t('tEtf'),bfM(et)],[f2t('net'),bfM(p.gain-st)]],risk:'',assume:f2t('tAs')}}};
BF_ORDER.push('tax');
Hooks.css('finance-home',`
.screen.fin2{display:flex;flex-direction:column;gap:14px}.screen.fin2>*{flex-shrink:0}
.screen.fin2 .sub-hdr .ttl{display:flex;flex-direction:column;align-items:center}.screen.fin2 .sub-hdr small{font-size:13px;color:var(--muted)}
.f2ask{display:flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:6px 6px 6px 14px;box-shadow:0 4px 14px rgba(0,0,0,.06)}
.f2ask input{flex:1;min-width:0;border:0;background:transparent;font:inherit;font-size:16px;color:var(--ink);outline:none}.f2ask input::placeholder{color:var(--muted)}
.f2sp{color:var(--gold);display:flex}.f2sp svg{width:22px;height:22px}
.f2mic{width:44px;height:44px;border-radius:50%;border:0;background:linear-gradient(180deg,color-mix(in srgb,var(--gold) 75%,#fff),var(--gold));color:#17130b;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 10px color-mix(in srgb,var(--gold) 40%,transparent)}.f2mic svg{width:22px;height:22px}.f2mic.on{animation:f2p 1s infinite}
@keyframes f2p{50%{box-shadow:0 0 0 10px color-mix(in srgb,var(--gold) 30%,transparent)}}
.f2grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.f2grid button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;min-height:92px;padding:12px 6px;background:var(--surface);border:1px solid var(--line);border-radius:18px;font:inherit;font-size:14px;line-height:1.2;color:var(--ink);text-align:center;cursor:pointer;overflow-wrap:anywhere}
.f2grid svg{width:30px;height:30px;color:var(--gold)}.f2grid button:active,.f2book:active{transform:scale(.98)}
.f2book{display:flex;align-items:center;gap:14px;padding:16px;background:linear-gradient(135deg,var(--gold-soft),var(--surface));border:1.5px solid var(--gold);border-radius:18px;font:inherit;color:var(--ink);text-align:left;cursor:pointer}
.f2book svg{width:40px;height:40px;color:var(--gold);flex:0 0 auto}.f2book span{flex:1;display:flex;flex-direction:column;gap:2px}.f2book b{font-size:17px;font-weight:600}.f2book small{color:var(--muted);font-size:13.5px}.f2book em{font-style:normal;font-size:22px}
.f2ch{display:flex;flex-direction:column;gap:8px}.f2ch small{color:var(--muted)}.f2ch div{display:flex;flex-wrap:wrap;gap:8px}.f2ch button{border:1px solid var(--gold);background:var(--surface);color:var(--ink);font:inherit;font-size:14px;padding:8px 14px;border-radius:999px;cursor:pointer}
`);
