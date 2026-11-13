/* ===== Light kits Pearl and Ivory — one module (was updates v197–v198) ===== */
/* v197: two light kits — Pearl (dark sun dial) and Ivory (roman dial with laurels) */
{const N={zhem:['Жемчуг','Perle','Pearl','Perła','İnci','Perle','Perla'],slon:['Слоновая кость','Elfenbein','Ivory','Kość słoniowa','Fildişi','Ivoire','Marfil']};
 ['zhem','slon'].forEach(id=>{if(!hm.includes(id))hm.push(id);dQ[id]='cl';GX9L.forEach((l,j)=>{if(rl[l])rl[l]['c_'+id]=N[id][j]})});
 const K={ru:'Светлые · ',de:'Hell · ',en:'Light · ',pl:'Jasne · ',tr:'Açık · ',fr:'Clair · ',es:'Claro · '};try{GX9L.forEach((l,j)=>{if(VP[l])['zhem','slon'].forEach(id=>{VP[l][id]=K[l]+N[id][j]})})}catch(e){}}
GX9P.zhem={d:{bg:'#F2EEE8',card:'#FBF8F3',icon:'#1E1B18',btn:'#1B1815',clockA:'#1E1B18',clockB:'#C99A3E',butler:'#C99A3E',glow:1},n:{bg:'#12100E',card:'#1E1B18',icon:'#E2B866',btn:'#3A2F1C',clockA:'#F3EEE4',clockB:'#E2B866',butler:'#E2B866',glow:1}};
GX9P.slon={d:{bg:'#F6EEDF',card:'#FCF6EA',icon:'#3A2A1A',btn:'#4A3A2A',clockA:'#2B2016',clockB:'#B8924E',butler:'#B8924E',glow:1},n:{bg:'#1A140E',card:'#261D14',icon:'#D8B777',btn:'#5A4630',clockA:'#F3E9D6',clockB:'#D8B777',butler:'#D8B777',glow:1}};
['zhem','slon'].forEach(k=>{lo[k]=Object.assign({gx:k},GX9P[k].d)});
gm.push(['zhem','gold','zhem',''],['slon','gold','slon','']);
function cl6fleur(q,x,y,s,col){q.save();q.translate(x,y);q.scale(s,s);q.fillStyle=col;
 q.beginPath();q.moveTo(0,-30);q.bezierCurveTo(11,-16,10,2,0,16);q.bezierCurveTo(-10,2,-11,-16,0,-30);q.fill();
 [-1,1].forEach(d=>{q.beginPath();q.moveTo(d*3,12);q.bezierCurveTo(d*6,-6,d*24,-16,d*25,-2);q.bezierCurveTo(d*26,8,d*16,10,d*15,3);q.bezierCurveTo(d*13,8,d*10,12,d*3,12);q.fill()});
 q.fillRect(-13,13,26,5);q.beginPath();q.moveTo(-4,19);q.lineTo(0,32);q.lineTo(4,19);q.closePath();q.fill();[-1,1].forEach(d=>{q.beginPath();q.moveTo(d*5,19);q.quadraticCurveTo(d*13,22,d*11,29);q.quadraticCurveTo(d*8,24,d*5,24);q.closePath();q.fill()});q.restore()}
function cl6crown(q,x,y,s,col){q.save();q.translate(x,y);q.scale(s,s);q.strokeStyle=col;q.lineWidth=3;q.lineJoin='round';q.beginPath();q.moveTo(-26,16);q.lineTo(-30,-10);q.lineTo(-13,4);q.lineTo(0,-18);q.lineTo(13,4);q.lineTo(30,-10);q.lineTo(26,16);q.closePath();q.stroke();q.restore()}
GX9D.zhem=(cv,date,now,big)=>{const q=cl5frame(cv,748,748),cx=374,cy=392,R=318,{se}=cl5ang(date),day=gx9day();
 const gl=q.createRadialGradient(cx+150,cy-190,10,cx,cy,R+34);gl.addColorStop(0,'rgba(240,190,90,.55)');gl.addColorStop(.75,'rgba(240,190,90,.08)');gl.addColorStop(1,'rgba(240,190,90,0)');q.fillStyle=gl;q.beginPath();q.arc(cx,cy,R+34,0,7);q.fill();
 const sh=q.createRadialGradient(cx,cy+26,R*.8,cx,cy+26,R*1.1);sh.addColorStop(0,'rgba(60,45,20,.28)');sh.addColorStop(1,'rgba(60,45,20,0)');q.fillStyle=sh;q.beginPath();q.arc(cx,cy+26,R*1.1,0,7);q.fill();
 q.fillStyle=cl5brass(q,cx-R,cy-R,cx+R,cy+R);q.beginPath();q.arc(cx,cy,R,0,7);q.fill();
 const fc=q.createRadialGradient(cx,cy-80,30,cx,cy,R);fc.addColorStop(0,'#3a342e');fc.addColorStop(.6,'#1a1714');fc.addColorStop(1,'#0b0a09');q.fillStyle=fc;q.beginPath();q.arc(cx,cy,R-7,0,7);q.fill();
 q.save();q.beginPath();q.arc(cx,cy,R-9,0,7);q.clip();
 let f=.5;try{const d=Q5();f=typeof d.f==='number'?d.f:-1}catch(e){}const hz=cy+150,up=f>=0?Math.sin(Math.max(0,Math.min(1,f))*Math.PI):0,sy=hz-8-up*70,sx=cx;
 if(day||f>=0){const sg=q.createRadialGradient(sx,sy,0,sx,sy,190);sg.addColorStop(0,'rgba(255,214,130,.95)');sg.addColorStop(.12,'rgba(255,190,90,.7)');sg.addColorStop(.5,'rgba(230,150,50,.18)');sg.addColorStop(1,'rgba(230,150,50,0)');q.fillStyle=sg;q.fillRect(cx-R,cy-R,2*R,2*R);q.fillStyle='#ffe9b8';q.beginPath();q.arc(sx,sy,30,0,7);q.fill()}
 else{q.fillStyle='#e9e6de';q.beginPath();q.arc(cx+70,hz-90,22,0,7);q.fill();q.fillStyle='#1a1714';q.beginPath();q.arc(cx+80,hz-96,20,0,7);q.fill();const mg=q.createRadialGradient(cx,hz,0,cx,hz,200);mg.addColorStop(0,'rgba(200,170,110,.18)');mg.addColorStop(1,'rgba(200,170,110,0)');q.fillStyle=mg;q.fillRect(cx-R,cy-R,2*R,2*R)}
 const mt=(pts,col)=>{q.fillStyle=col;q.beginPath();q.moveTo(cx-R,cy+R);pts.forEach(p=>q.lineTo(cx+p[0],hz+p[1]));q.lineTo(cx+R,cy+R);q.closePath();q.fill()};
 mt([[-R,-10],[-230,-46],[-150,-14],[-70,-40],[0,-6],[90,-34],[170,-8],[250,-42],[R,-12]],'rgba(70,56,40,.9)');mt([[-R,24],[-240,6],[-140,30],[-40,10],[60,34],[160,12],[260,32],[R,14]],'#1c1814');mt([[-R,60],[-200,44],[-80,66],[40,48],[180,70],[R,52]],'#0d0b0a');q.restore();
 for(let k=0;k<12;k++){const a=k/12*2*Math.PI,mj=k%3===0,r1=R-22,r2=R-(mj?70:50);q.strokeStyle=mj?'#f0c66e':'rgba(255,255,255,.75)';q.lineWidth=mj?5:2.4;q.lineCap='round';q.beginPath();q.moveTo(cx+Math.sin(a)*r1,cy-Math.cos(a)*r1);q.lineTo(cx+Math.sin(a)*r2,cy-Math.cos(a)*r2);q.stroke()}
 q.strokeStyle='rgba(255,255,255,.22)';q.lineWidth=1.5;q.beginPath();q.arc(cx,cy,R-18,0,7);q.stroke();
 const sa=se/60*2*Math.PI;q.fillStyle='#ffd98a';q.beginPath();q.arc(cx+Math.sin(sa)*(R-18),cy-Math.cos(sa)*(R-18),5.5,0,7);q.fill();
 q.textAlign='center';q.textBaseline='middle';q.fillStyle='#fbf7ee';q.font=`500 ${big?112:150}px 'Cormorant Garamond',Georgia,serif`;q.fillText(Gs(date.getHours())+':'+Gs(date.getMinutes()),cx,cy-(big?98:20));
 if(big){let dt='';try{dt=Fi(date.toLocaleDateString(he(),{weekday:'short',day:'numeric',month:'long'}))}catch(e){}q.font="400 34px 'Cormorant Garamond',Georgia,serif";q.fillStyle='rgba(251,247,238,.85)';q.fillText(dt,cx,cy-22)}
 cl6crown(q,cx,34,1.05,'#c99a3e')};
GX9D.slon=(cv,date,now,big)=>{const q=cl5frame(cv,748,748),cx=374,cy=380,R=268,{HA,MA,SA}=cl5ang(date),day=gx9day();
 const leaf=(x,y,a,l,w)=>{q.save();q.translate(x,y);q.rotate(a);q.beginPath();q.moveTo(0,0);q.quadraticCurveTo(w,-l*.5,0,-l);q.quadraticCurveTo(-w,-l*.5,0,0);q.fill();q.restore()};
 [-1,1].forEach(sd=>{q.fillStyle=day?'rgba(196,160,104,.9)':'rgba(216,183,119,.75)';q.strokeStyle=q.fillStyle;q.lineWidth=3;const Rr=R+52;q.beginPath();q.arc(cx,cy,Rr,sd>0?-Math.PI*.36:Math.PI*.66,sd>0?Math.PI*.34:Math.PI*1.36);q.stroke();
  for(let k=0;k<9;k++){const t=k/8,a=(sd>0?-.36+t*.7:1.36-t*.7)*Math.PI,px=cx+Math.cos(a)*Rr,py=cy+Math.sin(a)*Rr,tg=a+(sd>0?-1:1)*Math.PI/2;leaf(px,py,tg+Math.PI/2+sd*.6,44,13);leaf(px,py,tg+Math.PI/2-sd*.75,40,12)}});
 const sh=q.createRadialGradient(cx,cy+22,R*.8,cx,cy+22,R*1.12);sh.addColorStop(0,'rgba(110,80,40,.3)');sh.addColorStop(1,'rgba(110,80,40,0)');q.fillStyle=sh;q.beginPath();q.arc(cx,cy+22,R*1.12,0,7);q.fill();
 q.fillStyle=cl5brass(q,cx-R,cy-R,cx+R,cy+R);q.beginPath();q.arc(cx,cy,R,0,7);q.fill();q.fillStyle='#fffaf0';q.beginPath();q.arc(cx,cy,R-12,0,7);q.fill();q.fillStyle=cl5brass(q,cx+R,cy+R,cx-R,cy-R);q.beginPath();q.arc(cx,cy,R-17,0,7);q.fill();
 const fc=q.createRadialGradient(cx-50,cy-70,20,cx,cy,R);fc.addColorStop(0,'#fffdf7');fc.addColorStop(1,'#f3e8d2');q.fillStyle=fc;q.beginPath();q.arc(cx,cy,R-22,0,7);q.fill();
 for(let k=0;k<12;k++){if(k%3===0)continue;const a=k/12*2*Math.PI,r1=R-44,r2=R-86;q.strokeStyle='#241a10';q.lineWidth=3;q.lineCap='butt';q.beginPath();q.moveTo(cx+Math.sin(a)*r1,cy-Math.cos(a)*r1);q.lineTo(cx+Math.sin(a)*r2,cy-Math.cos(a)*r2);q.stroke()}
 q.fillStyle='#1c140c';q.textAlign='center';q.textBaseline='middle';q.font="600 60px 'Cormorant Garamond',Georgia,serif";[['XII',0],['III',1],['VI',2],['IX',3]].forEach(([n,k])=>{const a=k/4*2*Math.PI;q.save();q.translate(cx+Math.sin(a)*(R-74),cy-Math.cos(a)*(R-74));q.rotate(k===1?Math.PI/2:k===3?-Math.PI/2:k===2?Math.PI:0);q.fillText(n,0,0);q.restore()});
 cl6fleur(q,cx,cy+92,1.25,'#3a2a18');
 const hd=(a,l,w)=>{q.save();q.translate(cx,cy);q.rotate(a);q.fillStyle='#14100b';q.beginPath();q.moveTo(-w*.45,24);q.lineTo(-w,-l*.55);q.quadraticCurveTo(-w*1.5,-l*.72,0,-l);q.quadraticCurveTo(w*1.5,-l*.72,w,-l*.55);q.lineTo(w*.45,24);q.closePath();q.fill();q.restore()};
 hd(HA,150,7);hd(MA,214,5);cl5hand(q,cx,cy,SA,222,2,'#b8924e',40);q.fillStyle='#14100b';q.beginPath();q.arc(cx,cy,13,0,7);q.fill();q.fillStyle=cl5brass(q,cx-6,cy-6,cx+6,cy+6);q.beginPath();q.arc(cx,cy,5.5,0,7);q.fill();
 cl6fleur(q,cx,34,.95,'#c9a05a')};
SK7.zhem=['#3a342e','#12100e','#080706','#e2b866'];SK7.slon=['#4a3826','#1a140e','#0c0906','#d8b777'];
CL5BG.zhem={d:'radial-gradient(90% 45% at 50% 6%,#ffffff 0%,transparent 65%),radial-gradient(120% 30% at 50% 100%,rgba(214,186,140,.35) 0%,transparent 70%),linear-gradient(180deg,#f6f3ee,#ebe6de)',n:'radial-gradient(90% 45% at 50% 8%,#3a2f1c 0%,transparent 65%),linear-gradient(180deg,#171411,#0a0908)'};
CL5BG.slon={d:'radial-gradient(90% 45% at 50% 6%,#fffaf0 0%,transparent 65%),radial-gradient(100% 40% at 50% 100%,rgba(206,170,110,.22) 0%,transparent 70%),linear-gradient(180deg,#f9f2e4,#f0e4cf)',n:'radial-gradient(90% 45% at 50% 8%,#4a3826 0%,transparent 65%),linear-gradient(180deg,#201810,#0e0a07)'};
{const st=document.createElement('style');st.textContent=['zhem','slon'].map(k=>`html[data-gx="${k}-n"] body{background-image:${CL5BG[k].n}!important}html[data-gx="${k}-d"] body{background-image:${CL5BG[k].d}!important}`).join('\n')+`.skyi.st38w.gx9w:has(.gx9slot[data-gid=zhem]),.skyi.st38w.gx9w:has(.gx9slot[data-gid=slon]),.sk7clk.gx9w:has(.gx9slot[data-gid=zhem]),.sk7clk.gx9w:has(.gx9slot[data-gid=slon]){width:min(78vw,320px)!important}html[data-gx^="zhem"] body,html[data-gx^="slon"] body{background-size:auto!important}.gx9wrap:has(.gx9slot[data-gid=zhem]) .gx9t,.gx9wrap:has(.gx9slot[data-gid=zhem]) .gx9d,.gx9wrap:has(.gx9slot[data-gid=slon]) .gx9t,.gx9wrap:has(.gx9slot[data-gid=slon]) .gx9d{display:none}
html[data-gx="zhem-d"] .qtile,html[data-gx="slon-d"] .qtile,html[data-gx="zhem-d"] .td9card,html[data-gx="slon-d"] .td9card,html[data-gx="zhem-d"] .ax5home,html[data-gx="slon-d"] .ax5home{box-shadow:6px 8px 18px rgba(120,100,70,.22),-5px -5px 14px rgba(255,255,255,.9);border-color:rgba(255,255,255,.7)}`;document.head.appendChild(st)}
try{gx9tick()}catch(e){}
/* v198: light kits closer to the picture — weather and date beside the clock, butler on the centre button, landscape and motto */
const lk5S={motto:['Ваш цифровой мир. Ваш порядок. Ваше время.','Ihre digitale Welt. Ihre Ordnung. Ihre Zeit.','Your digital world. Your order. Your time.','Twój cyfrowy świat. Twój porządek. Twój czas.','Dijital dünyanız. Düzeniniz. Zamanınız.','Votre monde numérique. Votre ordre. Votre temps.','Su mundo digital. Su orden. Su tiempo.'],
wx:['Погода','Wetter','Weather','Pogoda','Hava','Météo','Tiempo']};
const lk5t=k=>(lk5S[k]||[])[nz5i()]||k;
const lk5on=()=>{try{return!!(g.ds&&(g.ds.gx==='zhem'||g.ds.gx==='slon'))}catch{return!1}};
const lk5SUN='<svg viewBox="0 0 48 40" aria-hidden="true"><g stroke="#E0A33A" stroke-width="2.2" stroke-linecap="round"><path d="M17 3v4M5 15h4M8.5 6.5l2.8 2.8M25.5 6.5l-2.8 2.8"/></g><circle cx="17" cy="16" r="6.5" fill="none" stroke="#E0A33A" stroke-width="2.2"/><path d="M15 33h22a7 7 0 0 0 0-14 9 9 0 0 0-17 2.5A5.8 5.8 0 0 0 15 33z" fill="var(--lk5wxf,#fff)" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>';
const lk5ICO={sun:'<svg viewBox="0 0 48 40" aria-hidden="true"><g stroke="#E0A33A" stroke-width="2.2" stroke-linecap="round"><path d="M24 3v5M24 32v5M7 20h5M36 20h5M12 8l3.5 3.5M32.5 28.5L36 32M36 8l-3.5 3.5M15.5 28.5L12 32"/></g><circle cx="24" cy="20" r="8" fill="none" stroke="#E0A33A" stroke-width="2.4"/></svg>',
 part:lk5SUN,
 cloud:'<svg viewBox="0 0 48 40" aria-hidden="true"><path d="M12 32h24a8 8 0 0 0 0-16 10 10 0 0 0-19 3A6.5 6.5 0 0 0 12 32z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>',
 rain:'<svg viewBox="0 0 48 40" aria-hidden="true"><path d="M12 25h24a8 8 0 0 0 0-16 10 10 0 0 0-19 3A6.5 6.5 0 0 0 12 25z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><g stroke="#5B8DEF" stroke-width="2.2" stroke-linecap="round"><path d="M17 30l-2 5M25 30l-2 5M33 30l-2 5"/></g></svg>',
 snow:'<svg viewBox="0 0 48 40" aria-hidden="true"><path d="M12 25h24a8 8 0 0 0 0-16 10 10 0 0 0-19 3A6.5 6.5 0 0 0 12 25z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><g fill="#8fb4e8"><circle cx="17" cy="33" r="2"/><circle cx="25" cy="35" r="2"/><circle cx="33" cy="33" r="2"/></g></svg>'};
const lk5CAL='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
const lk5BUT='<svg class="lk5but" viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="lk5g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6DC98"/><stop offset="1" stop-color="#B8862E"/></linearGradient></defs><circle cx="24" cy="10" r="6" fill="none" stroke="url(#lk5g)" stroke-width="2"/><path d="M10 44l3-20 11 6 11-6 3 20z" fill="none" stroke="url(#lk5g)" stroke-width="2" stroke-linejoin="round"/><path d="M24 30v14M13 24l11 6 11-6" fill="none" stroke="url(#lk5g)" stroke-width="2" stroke-linejoin="round"/><path d="M18 20l6 3 6-3-1.5 5-4.5-2-4.5 2z" fill="url(#lk5g)"/><circle cx="24" cy="36" r="1.2" fill="url(#lk5g)"/><circle cx="24" cy="40" r="1.2" fill="url(#lk5g)"/></svg>';
const lk5HILL=`<svg class="lk5hill" viewBox="0 0 390 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 52 L40 34 L78 48 L120 22 L168 46 L210 30 L258 50 L300 26 L346 44 L390 32 V90 H0z" fill="var(--lk5h1)"/><path d="M0 66 L52 50 L104 64 L156 46 L214 66 L270 48 L330 64 L390 52 V90 H0z" fill="var(--lk5h2)"/><path d="M0 80 L70 66 L140 78 L210 64 L290 80 L390 68 V90 H0z" fill="var(--lk5h3)"/></svg>`;
function lk5wx(){try{const p=D3();if(!p||typeof p.lat!=='number')return null;const key=p.lat.toFixed(2)+','+p.lon.toFixed(2),c=m.wdWx&&m.wdWx[key];
 if(!c||(!c.d&&!c.p)||(c.d&&Date.now()-c.t>36e5)){if(!m.lk5wf||Date.now()-m.lk5wf>6e4){m.lk5wf=Date.now();P3(p.lat,p.lon).then(()=>{m.route==='home'&&lk5on()&&lk5paint()})}return c&&c.d?x3(c.d,ga(0),new Date().getHours()):null}
 return c.d?x3(c.d,ga(0),new Date().getHours()):null}catch{return null}}
function lk5icon(w){if(!w)return lk5ICO.part;if(w.snow)return lk5ICO.snow;if(w.rain)return lk5ICO.rain;if(w.code<=1)return lk5ICO.sun;if(w.code<=3)return lk5ICO.part;return lk5ICO.cloud}
function lk5paint(){const clk=document.querySelector('.screen > section.sky .st38clk');if(!clk)return;const on=lk5on()&&m.route==='home';
 clk.querySelectorAll('.lk5side').forEach(e=>e.remove());const sky=clk.closest('section.sky');document.querySelectorAll('.lk5foot').forEach(e=>e.remove());
 if(!on){sky&&sky.classList.remove('lk5');return}
 sky.classList.add('lk5');const w=lk5wx(),d=new Date();let wd='',dm='';try{wd=Fi(d.toLocaleDateString(he(),{weekday:'short'})).replace('.','');dm=d.toLocaleDateString(he(),{day:'numeric',month:(typeof ly7on==='function'&&ly7on())?'short':'long'})}catch{}
 clk.insertAdjacentHTML('afterbegin',`<div class="lk5side l"><span class="lk5ic">${lk5icon(w)}</span><b>${w?w.air+' °C':'—'}</b></div>`);
 clk.insertAdjacentHTML('beforeend',`<button type="button" class="lk5side r" data-act="go" data-to="mycal">${g.ds.gx==='zhem'?`<span class="lk5ic s">${lk5CAL}</span>`:''}<b>${i(wd)}</b><small>${i(dm)}</small></button>`);
 const sc=document.querySelector('.screen');if(sc&&sc.querySelector('section.sky.lk5')){const ht=sc.querySelector(':scope > p.hint.msdz');const H2=`${g.ds.gx==='zhem'?`<div class="lk5foot">${lk5HILL}</div>`:''}`,F2='<div class="lk5foot e"><span class="lk5fl">⚜</span></div>';if(ht){ht.insertAdjacentHTML('beforebegin',H2);ht.insertAdjacentHTML('afterend',F2)}else sc.insertAdjacentHTML('beforeend',H2+`<div class="lk5foot e"><p>${i(lk5t('motto'))}</p><span class="lk5fl">⚜</span></div>`)}}
v=(f=>function(){const r=f.apply(this,arguments);try{lk5paint();const mic=document.querySelector('nav.nav .mic');if(mic){const on=lk5on();const has=mic.querySelector('.lk5but');if(on&&!has){mic.classList.add('lk5m');mic.insertAdjacentHTML('afterbegin',lk5BUT)}else if(!on&&has){has.remove();mic.classList.remove('lk5m')}}}catch{}return r})(v);
{const st=document.createElement('style');st.textContent=`
section.sky.lk5 .st38clk{position:relative;display:flex;align-items:center;justify-content:center}
.lk5side{position:absolute;top:50%;transform:translateY(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:min(23vw,92px);min-height:86px;padding:8px 4px;border-radius:20px;color:var(--ink);font:inherit;text-align:center;border:0;background:transparent}
.lk5side.l{left:max(2px,calc(50% - 205px))}.lk5side.r{right:max(2px,calc(50% - 205px));cursor:pointer}
.lk5side b{font-family:var(--display,'Cormorant Garamond',serif);font-weight:500;font-size:24px;line-height:1.05;white-space:nowrap}.lk5side small{font-family:var(--display,'Cormorant Garamond',serif);font-size:15px;line-height:1.15;color:var(--ink);opacity:.85}
.lk5ic{display:block;width:46px;height:38px;color:var(--ink)}.lk5ic svg{width:100%;height:100%}.lk5ic.s{width:26px;height:26px;margin-bottom:2px}
html[data-gx^="zhem"] .lk5side{background:var(--surface,#fbf8f3);box-shadow:5px 7px 16px rgba(110,90,60,.18),-4px -4px 12px rgba(255,255,255,.85);border:1px solid rgba(255,255,255,.6)}
html[data-gx="zhem-n"] .lk5side,html[data-gx="slon-n"] .lk5side{box-shadow:0 8px 20px rgba(0,0,0,.45);border:1px solid rgba(226,184,102,.25)}
html[data-gx^="slon"] .lk5side{min-height:0}
html[data-gx^="zhem"] section.sky.lk5 .st38clk .skyi.st38w.gx9w,html[data-gx^="slon"] section.sky.lk5 .st38clk .skyi.st38w.gx9w{width:min(52vw,214px)!important}
@media (max-width:360px){.lk5side{width:72px}.lk5side b{font-size:20px}.lk5ic{width:38px;height:32px}}
.lk5foot{position:relative;margin:14px 0 0;padding:0;text-align:center;--lk5h1:rgba(150,135,115,.22);--lk5h2:rgba(150,135,115,.32);--lk5h3:rgba(150,135,115,.42)}
html[data-gx$="-n"] .lk5foot{--lk5h1:rgba(226,184,102,.08);--lk5h2:rgba(226,184,102,.12);--lk5h3:rgba(226,184,102,.16)}
.lk5hill{display:block;width:100%;height:70px}.lk5foot.e{margin:4px 0 0;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 104px)}html[data-gx^="zhem"] .screen>p.hint.msdz,html[data-gx^="slon"] .screen>p.hint.msdz{font-family:var(--display,'Cormorant Garamond',serif);font-style:italic;font-size:17px}
.lk5foot p{margin:0 16px;font-family:var(--display,'Cormorant Garamond',serif);font-style:italic;font-size:18px;color:var(--ink);opacity:.85}
.lk5fl{display:block;margin:8px auto 0;color:var(--gold,#C99A3E);font-size:18px;position:relative;width:240px}.lk5fl:before,.lk5fl:after{content:"";position:absolute;top:50%;width:96px;height:1px;background:linear-gradient(90deg,transparent,var(--gold,#C99A3E))}.lk5fl:before{left:0}.lk5fl:after{right:0;transform:scaleX(-1)}
nav.nav .mic.lk5m>svg.i{display:none}nav.nav .mic.lk5m .lk5but{width:34px;height:34px;display:block;margin:0 auto 1px}
`;document.head.appendChild(st)}
