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
