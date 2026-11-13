/* v223: polish — top bars lower, back works on every window (button, Esc, swipe from the left edge), quicker home and profile */
try{
 /* 1. Back closes the window that is open on top (note editor, first-run windows, photo views …) before it changes the screen */
 var ov223=function(){try{const vh=innerHeight;let top=null,tz=-1;
  for(const e of document.body.children){if(e.id==='app'||/^(SCRIPT|STYLE|LINK|DATALIST)$/.test(e.tagName))continue;if(e.matches('.bd8sv,.toast,.st4toast,.envstamp,.hlbusy,.upbar,.sw223'))continue;
   const cs=getComputedStyle(e);if(cs.position!=='fixed'||cs.display==='none'||cs.visibility==='hidden'||+cs.opacity===0||cs.pointerEvents==='none')continue;
   const r=e.getBoundingClientRect();if(r.height<vh*.5||r.width<innerWidth*.5)continue;const z=parseInt(cs.zIndex)||0;if(z>=tz){tz=z;top=e}}
  if(!top)return!1;
  const btns=[...top.querySelectorAll('button,[data-act],[role=button]')].filter(b=>{const r=b.getBoundingClientRect();return r.width>0&&r.height>0&&!b.disabled});
  const pick=btns.find(b=>b.dataset.b==='back')||btns.find(b=>/^(close|back|cancel|x)$/.test(b.dataset.act||''))||btns.find(b=>b.dataset.x)||
   btns.find(b=>/M15 5l-7 7 7 7/.test(b.innerHTML)&&!b.closest('.sxctl'))||btns.find(b=>/^[×✕]$/.test((b.textContent||'').trim()))||btns.find(b=>/M6 6l12 12/.test(b.innerHTML));
  if(!pick)return!1;pick.click();return!0}catch(e){return!1}};
 window.__ov223=ov223;
 const back223=()=>{try{if(ov223())return;if(!eg()&&m.logged&&m.route!=='home')R('home',void 0,!0)}catch(e){}};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!e.defaultPrevented&&!(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)))back223()});
 /* swipe from the left edge = back, like in other iPhone apps */
 (()=>{let s=null,ind=null;const MAX=90;
  const skip=t=>{if(!t||!t.closest)return!0;if(t.closest('[data-swipe],[data-wdswipe],#lbpaper,.lbnav,canvas,input[type=range],.st7full,.st5full,.sxcam,.fccam,.crov,.k43fs'))return!0;for(let e=t;e&&e!==document.body;e=e.parentElement){if(e.scrollLeft>0)return!0}return!1};
  document.addEventListener('touchstart',e=>{s=null;if(e.touches.length!==1)return;const p=e.touches[0];if(p.clientX>22||!m.logged||skip(e.target))return;s={x:p.clientX,y:p.clientY,t:Date.now(),on:!1}},{passive:!0,capture:!0});
  document.addEventListener('touchmove',e=>{if(!s)return;const p=e.touches[0],dx=p.clientX-s.x,dy=p.clientY-s.y;
   if(!s.on){if(Math.abs(dy)>14&&Math.abs(dy)>dx){s=null;return}if(dx>14&&Math.abs(dy)<dx*.6){s.on=!0;ind=document.createElement('div');ind.className='sw223';ind.innerHTML=_('back');document.body.appendChild(ind)}else return}
   const k=Math.min(1,dx/MAX);if(ind){ind.style.transform=`translate(${Math.min(dx,MAX)*.55-40}px,-50%)`;ind.style.opacity=String(.25+k*.75);ind.classList.toggle('go',dx>=MAX*.75)}},{passive:!0,capture:!0});
  const end=e=>{if(!s)return;const ok=s.on&&e.type==='touchend'&&e.changedTouches&&(e.changedTouches[0].clientX-s.x)>=MAX*.75;s=null;if(ind){const d=ind;ind=null;d.style.opacity='0';setTimeout(()=>d.remove(),160)}if(ok){try{navigator.vibrate&&navigator.vibrate(8)}catch{}back223()}};
  document.addEventListener('touchend',end,{capture:!0});document.addEventListener('touchcancel',end,{capture:!0})})();
}catch(e){}
try{
 /* 2. The «put it into quick access?» hint never stays on the sign-in screen or on other screens */
 v=(f=>function(){const r=f.apply(this,arguments);try{if(!m.logged||m.route!=='home')document.querySelectorAll('.h9sg').forEach(e=>e.remove())}catch{}return r})(v);
}catch(e){}
try{
 /* 3. Quicker: the sun and time figures are worked out once a minute, not dozens of times per tap */
 Q5=(f=>{let k='',r=null;return function(){let kk='';try{const d=new Date;kk=d.toDateString()+' '+d.getHours()+':'+d.getMinutes()+'|'+g.lang+'|'+JSON.stringify(sc())}catch{}
  if(!kk||kk!==k||!r){r=f.apply(this,arguments);k=kk;return r}return Object.assign({},r,{now:new Date})}})(Q5);
}catch(e){}
try{
 /* 4. Quicker home screen: the home layout is measured once and then reused while nothing on it changed */
 bd8lay=(f=>{const C=new Map();return function(el,c){if(!el)return f.apply(this,arguments);let k='';try{k=innerWidth+'x'+innerHeight+'|'+(document.fonts?document.fonts.status:'')+'|'+JSON.stringify(c)+'|'+el.className+'|'+el.innerHTML}catch{}
  const h=k&&C.get(k);if(h){if(el.innerHTML!==h[0])el.innerHTML=h[0];if((el.getAttribute('style')||'')!==h[1])el.setAttribute('style',h[1]);return}
  const r=f.apply(this,arguments);try{if(k){if(C.size>12)C.clear();C.set(k,[el.innerHTML,el.getAttribute('style')||''])}}catch{}return r}})(bd8lay);
}catch(e){}
try{
 /* 5. Finance book: «back» returns to the page you came from (categories, analysis …), not always to the start page */
 const kb0=L.kbhome;if(kb0)L.kbhome=function(){try{const h=m.hist||[],p=h[h.length-1];if(p&&p.route!==m.route&&/^kb(rec|rep|bud|cal|cats|goals|ana|set|plan|prod|list|shops|les|shop)$/.test(p.route)&&/^kb(rec|rep|bud|cal|cats|goals|ana|set|plan|prod|list|shops|les|shop)$/.test(m.route)){h.pop();m.kbDraft=null;m.kbEdit=null;R(p.route,void 0,!0);return}}catch{}return kb0.apply(this,arguments)};
}catch(e){}
try{
 /* 6. No section twice: an old section whose content already lives in one of the 9 big sections (Документы, Календарь …) is not listed again */
 x_=(f=>function(){const out=f.apply(this,arguments);if(h9raw||g.h9off)return out;try{const used=new Set(H9X.flatMap(h=>h[1]));return out.filter(k=>{if(!k.startsWith('c:'))return!0;const r=WZ(k.slice(2));return!(r&&used.has('q:'+r))})}catch{return out}})(x_);
}catch(e){}
try{
 /* 7. v226 calm sign: the living sign moves for a moment when a screen opens, then rests. It never draws while a finger is on the screen or the page scrolls, so taps are not held up */
 let hxUntil=0,hxT=2.2,hxLast=0,hxDown=!1,hxTouch=0,hxKey='',hxWait=0;
 const hxBusy=()=>hxDown||Date.now()-hxTouch<350;
 window.__hxBusy=hxBusy;
 ['touchstart','pointerdown'].forEach(n=>document.addEventListener(n,()=>{hxDown=!0},{passive:!0,capture:!0}));
 ['touchend','touchcancel','pointerup','pointercancel'].forEach(n=>document.addEventListener(n,()=>{hxDown=!1;hxTouch=Date.now()},{passive:!0,capture:!0}));
 document.addEventListener('scroll',()=>{hxTouch=Date.now()},{passive:!0,capture:!0});
 hl9frame=function(now){hl9raf=0;if(document.hidden)return;const cs=[...document.querySelectorAll('canvas.hl9cv')];if(!cs.length)return;
  const o=hl9C(),off=o.mo==='off'||hl9reduce,sp=o.mo==='calm'?.45:1,D=Date.now();
  const fresh=cs.some(c=>!c.__hx),sheet=cs.some(c=>c.closest('.dtsheet'));
  const key=(m.logged?'1':'0')+m.route;if(fresh&&key!==hxKey){hxKey=key;hxUntil=D+2600}
  const live=!off&&(sheet||D<hl9until||(D<hxUntil&&!hxBusy()));
  if(!live&&!fresh){if(!off&&D<hxUntil&&!hxWait)hxWait=setTimeout(()=>{hxWait=0;hl9kick()},400);return}
  if(live&&!fresh&&now-hxLast<32){hl9raf=requestAnimationFrame(hl9frame);return}
  if(live){hxT+=Math.min(.1,Math.max(0,(now-hxLast)/1000))*sp;if(D>hl9until)hl9T=.15;hl9E+=(hl9T-hl9E)*.1}
  hxLast=now;const t=off?2.2:hxT;
  cs.forEach(c=>{if(!live&&c.__hx)return;if(!hl9size(c))return;c.__hx=1;const ctx=c.getContext('2d'),st=c.dataset.st||o.st,hex=c.dataset.c||hl9hex(),light=c.dataset.light==='1';ctx.clearRect(0,0,c.width,c.height);try{hl9draw(ctx,hl9geo(c),st,t,hl9E,hl9rgb(hex),light)}catch{}});
  if(live)hl9raf=requestAnimationFrame(hl9frame)};
 v=(f=>function(){const r=f.apply(this,arguments);try{hl9kick();setTimeout(hl9kick,140)}catch{}return r})(v);
 new MutationObserver(()=>{try{if(document.querySelector('.dtsheet canvas.hl9cv'))hl9kick()}catch{}}).observe(document.body,{childList:!0});
 document.addEventListener('click',e=>{try{if(e.target.closest&&e.target.closest('.hl9,.hl9-login')){hxUntil=Date.now()+2600;hl9kick()}}catch{}},!0);
 /* the galaxy clock also waits while a finger is on the screen */
 gx9loop=(f=>function(now){if(hxBusy()||!document.querySelector('.gx9slot')){requestAnimationFrame(gx9loop);return}return f(now)})(gx9loop);
}catch(e){}
try{
 /* 8. v227 still sign: a quiet ring in many colours around the name — drawn once, it does not move or change colour, so it costs nothing */
 hl9S.s_ring=['Цветное кольцо','Farbring','Colour ring','Kolorowy pierścień','Renkli halka','Anneau coloré','Anillo de color'];
 if(!HL9ST.includes('ring'))HL9ST.unshift('ring');
 hl9draw=(f=>function(ctx,G,st,t,e,col,light){if(st!=='ring')return f.apply(this,arguments);
  const N=144,fn=(k,a)=>[G.cx+G.rx*k*Math.cos(a),G.cy+G.ry*k*Math.sin(a)];ctx.lineCap='butt';
  [[1.1,G.lw*5,.10,G.lw*12],[1,G.lw*1.7,.95,G.lw*7]].forEach(([k,lw,al0,blur])=>{ctx.lineWidth=lw;for(let j=0;j<N;j++){const a0=j/N*Math.PI*2,a1=(j+1.15)/N*Math.PI*2,p0=fn(k,a0),p1=fn(k,a1),al=al0*hl9band((p0[1]+p1[1])/2,G);if(al<.01)continue;
   const c=`hsla(${Math.round(j/N*360+200)%360},${light?72:85}%,${light?46:66}%,`;ctx.strokeStyle=c+al.toFixed(3)+')';ctx.shadowColor=c+Math.min(1,al*1.1).toFixed(3)+')';ctx.shadowBlur=blur;ctx.beginPath();ctx.moveTo(p0[0],p0[1]);ctx.lineTo(p1[0],p1[1]);ctx.stroke()}});ctx.shadowBlur=0})(hl9draw);
 if(!g.hl9r){const o=hl9C();o.st='ring';o.mo='off';g.hl9r=1;try{$()}catch{}}
 /* the colour buttons do nothing for the many-coloured ring, so they are dimmed there */
}catch(e){}
try{
 /* 9. the page itself can never slide down or stay shifted (green strip on top, bottom bar cut off) */
 const pg0=()=>{try{const ae=document.activeElement;if(ae&&(/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)||ae.isContentEditable))return;const R=document.documentElement,B=document.body;if(window.scrollY||R.scrollTop||B.scrollTop){window.scrollTo(0,0);R.scrollTop=0;B.scrollTop=0;try{window.__sp8shift&&window.__sp8shift()}catch{}}}catch{}};
 ['touchend','touchcancel','focusout','pageshow','resize'].forEach(n=>addEventListener(n,()=>setTimeout(pg0,280),{passive:!0,capture:!0}));
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)setTimeout(pg0,280)});
}catch(e){}
try{
 /* 10. v228 speed report: the phone itself measures how long every tap takes until the picture is ready (Profile → «Скорость приложения»). Nothing leaves the phone */
 const SPK='bt-speed';let sp8={t0:Date.now(),start:0,n:0,slow:0,sum:0,a:{},v:{},shift:0};
 try{const o=JSON.parse(localStorage.getItem(SPK)||'null');if(o&&o.a&&o.ver===NT)sp8=o}catch{}
 sp8.ver=NT;let sp8tm=0;const sp8save=()=>{clearTimeout(sp8tm);sp8tm=setTimeout(()=>{try{localStorage.setItem(SPK,JSON.stringify(sp8))}catch{}},3000)};
 const sp8add=(box,k,ms)=>{const q=box[k]||(box[k]={n:0,s:0,x:0});q.n++;q.s+=ms;if(ms>q.x)q.x=Math.round(ms);const ks=Object.keys(box);if(ks.length>140){ks.sort((a,b)=>box[a].x-box[b].x).slice(0,40).forEach(z=>delete box[z])}};
 if(!sp8.start)requestAnimationFrame(()=>setTimeout(()=>{sp8.start=Math.round(performance.now());sp8save()},0));
 document.addEventListener('click',e=>{try{const t0=performance.now(),el=e.target.closest&&e.target.closest('[data-act],button,a'),r0=m.route;if(!el||el.closest('.sp8sheet'))return;const act=el.dataset.act||el.dataset.b||el.className.split(' ')[0]||el.tagName;
  requestAnimationFrame(()=>setTimeout(()=>{const ms=performance.now()-t0;sp8.n++;sp8.sum+=ms;if(ms>100)sp8.slow++;sp8add(sp8.a,r0+(m.route!==r0?'→'+m.route:'')+' · '+act,ms);sp8save()},0))}catch{}},!0);
 v=(f=>function(){const t0=performance.now();const r=f.apply(this,arguments);try{sp8add(sp8.v,m.logged?m.route:'login',performance.now()-t0)}catch{}return r})(v);
 window.__sp8shift=()=>{sp8.shift=(sp8.shift||0)+1;sp8save()};
 const SP8={t:['Скорость приложения','App-Geschwindigkeit','App speed'],s:['Телефон сам меряет каждое нажатие','Das Telefon misst jeden Tipp selbst','The phone times every tap itself'],
  start:['Запуск','Start','Start-up'],taps:['Нажатий измерено','Gemessene Tipps','Taps measured'],avg:['в среднем','im Schnitt','on average'],slow:['медленных (дольше 0,1 с)','langsam (über 0,1 s)','slow (over 0.1 s)'],
  top:['Самые медленные нажатия','Langsamste Tipps','Slowest taps'],draw:['Самые тяжёлые экраны','Aufwendigste Seiten','Heaviest screens'],shift:['Экран съезжал и был возвращён','Seite verrutscht und zurückgesetzt','Page slid and was put back'],
  none:['Пока мало данных — попользуйтесь приложением пару минут и откройте снова.','Noch zu wenig Daten – bitte ein paar Minuten benutzen.','Not enough data yet — use the app for a couple of minutes.'],reset:['Начать измерение заново','Messung neu starten','Start measuring again'],hint:['Сделайте снимок этого окна и пришлите — по нему видно, где именно тормозит.','Bitte einen Screenshot dieses Fensters senden.','Send a screenshot of this window.'],x:['раз','×','×'],max:['макс.','max.','max']};
 const st8=k=>{const a=SP8[k];return a[{ru:0,de:1}[g.lang]??2]};
 L.sp8=function(){const ms=x=>Math.round(x)+' мс'.replace('мс',g.lang==='ru'?'мс':'ms');const rows=(box,n)=>Object.entries(box).filter(([k,q])=>q.x>=30).sort((a,b)=>b[1].x-a[1].x).slice(0,n).map(([k,q])=>`<div class="sp8r"><span>${i(k)}</span><b class="${q.x>250?'r':q.x>100?'y':''}">${ms(q.s/q.n)}</b><small>${st8('max')} ${ms(q.x)} · ${q.n} ${st8('x')}</small></div>`).join('');
  const body=()=>`<p class="sp8s">${i(st8('s'))} · v${i(String(NT).split(' ')[0])} · ${innerWidth}×${innerHeight}${(matchMedia('(display-mode: standalone)').matches||navigator.standalone)?' · app':''}</p>
  <div class="sp8g"><div><small>${i(st8('start'))}</small><b>${sp8.start?(sp8.start/1000).toFixed(1)+' s':'—'}</b></div><div><small>${i(st8('taps'))}</small><b>${sp8.n}</b></div><div><small>${i(st8('avg'))}</small><b>${sp8.n?ms(sp8.sum/sp8.n):'—'}</b></div><div><small>${i(st8('slow'))}</small><b class="${sp8.n&&sp8.slow/sp8.n>.15?'r':''}">${sp8.slow}</b></div></div>
  ${sp8.shift?`<p class="sp8w">⚠ ${i(st8('shift'))}: ${sp8.shift}</p>`:''}
  ${sp8.n<8?`<p class="sp8s">${i(st8('none'))}</p>`:`<h4 class="sp8h">${i(st8('top'))}</h4>${rows(sp8.a,10)||'<p class="sp8s">✓</p>'}<h4 class="sp8h">${i(st8('draw'))}</h4>${rows(sp8.v,6)||'<p class="sp8s">✓</p>'}<p class="sp8s">${i(st8('hint'))}</p>`}
  <button type="button" class="btn sm" data-sp8="reset">${i(st8('reset'))}</button>`;
  const sh=H(st8('t'),body(),()=>{});sh.classList.add('sp8sheet');const box=sh.querySelector('.dtscroll');box.addEventListener('click',e=>{if(e.target.closest('[data-sp8]')){sp8={t0:Date.now(),start:sp8.start,n:0,slow:0,sum:0,a:{},v:{},shift:0,ver:NT};sp8save();box.innerHTML=body()}})};
 v=(f=>function(){const r=f.apply(this,arguments);try{if(m.logged&&m.route==='profile'){const sc=document.querySelector('.screen');if(sc&&!sc.querySelector('.sp8row'))sc.insertAdjacentHTML('beforeend',`<button type="button" class="ly6row sp8row" data-act="sp8"><span class="tx"><b>⏱ ${i(st8('t'))}</b><small>${i(st8('s'))}</small></span><em>›</em></button>`)}}catch{}return r})(v);
}catch(e){}
try{
 /* 11. v229 home-screen app as smooth as Safari: the page edges are only rewritten when their colour really changes */
 let he0='';h10edge=function(){try{const R=document.documentElement,gap=parseFloat(getComputedStyle(R).getPropertyValue('--g9gap'))||0;
  const bot=(()=>{const L2=document.elementsFromPoint(innerWidth/2,innerHeight-2).filter(e=>!e.closest('.bd8sv,.toast'));return L2[0]&&g9col(L2[0],0)})()||getComputedStyle(document.body).backgroundColor;
  const key=innerHeight+'|'+gap+'|'+bot;if(key===he0)return;he0=key;
  R.style.setProperty('--h10vh',innerHeight+'px');R.classList.toggle('h10x',gap>0);R.style.setProperty('background-repeat','no-repeat','important');document.body.style.setProperty('background-repeat','no-repeat','important');
  if(bot){R.style.setProperty('background-color',bot,'important');document.body.style.setProperty('background-color',bot,'important');R.style.setProperty('--h10bot',bot)}}catch{}};
}catch(e){}
try{
 /* 12. v231 shopping list right on the sign-in screen: in the quick-drop window «Покупки» replaces «Фото» — open the list in the shop and tick things off */
 const S12={shop:['Покупки','Einkauf','Shopping','Zakupy','Alışveriş','Courses','Compras'],ph:['Добавить: молоко, хлеб…','Hinzufügen: Milch, Brot …','Add: milk, bread…','Dodaj: mleko, chleb…','Ekle: süt, ekmek…','Ajouter : lait, pain…','Añadir: leche, pan…'],
  empty:['Список пуст — добавьте, что нужно купить','Die Liste ist leer – fügen Sie etwas hinzu','The list is empty — add what you need','Lista jest pusta','Liste boş','La liste est vide','La lista está vacía'],
  left:['%n осталось купить','noch %n','%n left','zostało %n','%n kaldı','encore %n','quedan %n'],clr:['Убрать купленное','Erledigtes entfernen','Remove bought','Usuń kupione','Alınanları kaldır','Retirer les achats','Quitar lo comprado'],back:['← К записи','← Zur Notiz','← Back to note','← Do notatki','← Nota','← Note','← Nota'],full:['⛶ Открыть на весь экран','⛶ Vollbild','⛶ Full screen','⛶ Pełny ekran','⛶ Tam ekran','⛶ Plein écran','⛶ Pantalla completa'],awake:['Экран не гаснет, пока список открыт','Bildschirm bleibt an, solange die Liste offen ist','The screen stays on while the list is open','Ekran nie gaśnie','Ekran açık kalır','L’écran reste allumé','La pantalla no se apaga'],all:['Всё куплено ✓','Alles gekauft ✓','All bought ✓','Wszystko kupione ✓','Hepsi alındı ✓','Tout est acheté ✓','Todo comprado ✓']};
 const sL12=()=>{const o=Yl(1);o.items=o.items||[];return o};const t12=(k,o)=>{let t=cv5n(S12[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
 const full12=after=>{document.querySelectorAll('.sh12').forEach(e=>e.remove());const ov=document.createElement('div');ov.className='sh12';document.body.appendChild(ov);let wl=null;
  try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(w=>{wl=w}).catch(()=>{})}catch{}
  const rows=()=>{const L2=sL12().items,op=L2.map((x,j)=>[x,j]).filter(q=>!q[0].d),dn=L2.map((x,j)=>[x,j]).filter(q=>q[0].d);const row=([x,j])=>`<button type="button" class="sh12i${x.d?' d':''}" data-j="${j}"><i>${x.d?_('check'):''}</i><span>${i(x.t)}${x.q?` <small>${i(x.q)}</small>`:''}</span></button>`;
   ov.innerHTML=`<div class="sh12h"><div><b>${i(t12('shop'))}</b><small>${op.length?i(t12('left',{n:op.length})):i(t12('all'))}</small></div><button type="button" class="sh12x" aria-label="×">×</button></div><div class="sh12l">${op.map(row).join('')}${dn.length?`<div class="sh12d">${dn.map(row).join('')}</div>`:''}</div><p class="sh12n">☀ ${i(t12('awake'))}</p>`};
  const close=()=>{try{wl&&wl.release()}catch{}ov.remove();try{after&&after()}catch{}};
  ov.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.classList.contains('sh12x')){close();return}if(b.dataset.j!=null){const x=sL12().items[+b.dataset.j];if(x){x.d=!x.d;$();try{navigator.vibrate&&navigator.vibrate(10)}catch{}const sc=ov.querySelector('.sh12l').scrollTop;rows();ov.querySelector('.sh12l').scrollTop=sc}}});
  rows()};
 const qc0=L.br9qc;L.br9qc=function(){const r=qc0.apply(this,arguments);try{const sh=[...document.querySelectorAll('.br9sheet')].pop();if(!sh)return r;const ph=sh.querySelector('input[data-k="ph"]');const lab=ph&&ph.closest('label');if(!lab)return r;
  lab.outerHTML=`<button type="button" class="br9shop">${bd8i('cart','sm')}<span>${i(t12('shop'))}</span><em class="br9sn"></em></button>`;
  const box=sh.querySelector('.dtscroll'),main=[...box.children],cnt=()=>{const n=sL12().items.filter(x=>!x.d).length;const e=box.querySelector('.br9sn');e&&(e.textContent=n?String(n):'')};cnt();
  const view=document.createElement('div');view.className='br9sl';view.hidden=!0;box.appendChild(view);
  const draw=()=>{const L2=sL12().items,open=L2.map((x,j)=>[x,j]).filter(q=>!q[0].d),dn=L2.map((x,j)=>[x,j]).filter(q=>q[0].d);
   const row=([x,j])=>`<button type="button" class="br9si${x.d?' d':''}" data-j="${j}"><i>${x.d?_('check'):''}</i><span>${i(x.t)}${x.q?` <small>${i(x.q)}</small>`:''}</span></button>`;
   view.innerHTML=`<form class="br9sa"><input class="field" enterkeyhint="done" autocomplete="off" placeholder="${i(t12('ph'))}"><button type="submit" aria-label="+">${_('plus')}</button></form>
    <p class="br9sh">${open.length?i(t12('left',{n:open.length})):i(t12('empty'))}</p>${open.map(row).join('')}${dn.length?`<div class="br9sd">${dn.map(row).join('')}</div><button type="button" class="br9sc">${i(t12('clr'))}</button>`:''}
    <button type="button" class="br9sf">${i(t12('full'))}</button><button type="button" class="br9sb">${i(t12('back'))}</button>`};
  const show=on=>{main.forEach(e=>e.hidden=on);view.hidden=!on;if(on)draw();else cnt();const h=sh.querySelector('.dtshh b');h&&(h.textContent=on?t12('shop'):br9t('qc'))};
  box.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
   if(b.classList.contains('br9shop')){show(!0);return}
   if(b.classList.contains('br9sb')){show(!1);return}
   if(b.classList.contains('br9sf')){full12(draw);return}
   if(b.dataset.j!=null){const x=sL12().items[+b.dataset.j];if(x){x.d=!x.d;$();draw()}return}
   if(b.classList.contains('br9sc')){const L2=sL12();L2.items=L2.items.filter(x=>!x.d);$();draw();return}});
  box.addEventListener('submit',e=>{if(!e.target.closest('.br9sa'))return;e.preventDefault();const inp=e.target.querySelector('input');const parts=String(inp.value||'').split(/[,;\n]+/).map(q=>q.trim()).filter(Boolean);if(!parts.length)return;
   {const L2=sL12(),lw=q=>String(q).trim().toLowerCase();parts.forEach(t=>{const ex=L2.items.find(y=>lw(y.t)===lw(t));if(ex)ex.d=!1;else L2.items.push({t,d:!1,q:'',c:'other'})});$()}draw();const n=view.querySelector('input');n&&n.focus()});
 }catch(e){}return r};
}catch(e){}
{const st=document.createElement('style');st.id='v223';st.textContent=`
/* top bars sit a little lower, clear of the clock, signal and battery */
html .nz5ed{padding-top:calc(env(safe-area-inset-top,0px) + 22px)}
html .nz5bar{margin-bottom:14px}
html .st14in{padding-top:calc(env(safe-area-inset-top,0px) + 22px)}
html .k43fsh{padding-top:calc(env(safe-area-inset-top) + 20px)}
html .dvov{padding-top:calc(env(safe-area-inset-top,0px) + 14px)}
html .dzov{padding-top:calc(env(safe-area-inset-top,0px) + 14px)}
html .crov{padding-top:calc(env(safe-area-inset-top,0px) + 16px)}
html .sxcam{padding-top:env(safe-area-inset-top,0px)}
html .sxct{padding-top:calc(env(safe-area-inset-top,0px) + 18px)}
html .dtsheet{padding-top:calc(env(safe-area-inset-top,0px) + 18px)}
html .tbset{padding-top:calc(env(safe-area-inset-top,0px) + 22px)}
html .upbar{top:calc(env(safe-area-inset-top,0px) + 14px)}
html .st5fb{top:calc(env(safe-area-inset-top,0px) + 16px)}
html .st7top{top:calc(env(safe-area-inset-top,0px) + 16px)}
html #td9tour{padding-top:calc(env(safe-area-inset-top,0px) + 22px)}
/* × buttons: the cross sits exactly in the middle of its circle */
.st14h button,.bd8sv .cl,.st27x{display:grid!important;place-items:center;padding:0!important;line-height:1!important}
/* every tap answers at once: no double-tap zoom wait, a short press feedback */
button,a,[data-act],[role=button],label{touch-action:manipulation;-webkit-tap-highlight-color:transparent}
button:not(:disabled):active,[data-act]:active{opacity:.72;transition:opacity 0s}
/* sign-in screen: the clock at full size, in the calm centre between the sign and the buttons */
.login.h11L .br9clk{transform:none!important;margin:auto 0!important}
html.g9short .login.h11L .br9clk{margin:auto 0!important}
.login.h11L .br9clk .cf9btn .cf9ck,.login.h11L .br9clk .cf9btn .br9ck,.login.h11L .br9clk>.br9ck{width:min(62vw,240px,30vh)!important;height:min(62vw,240px,30vh)!important}
.login.h11L .lg9mid{margin-top:16px!important}
.login.h11L .br9clk{padding-top:12px}
/* quick drop: the Save button reads clearly in every colour */
.br9sheet .br9sv{color:var(--bg,#15120b)}
/* the old quick-drop tile under the clock is now the button next to the password */
.login.h11L .br9qc{display:none}
/* the page never rubber-bands as a whole; lists inside still scroll */
html,body{overscroll-behavior-y:none}
.sp8sheet .sp8s{margin:4px 0 10px;font-size:13.5px;color:var(--muted)}.sp8sheet .sp8w{margin:8px 0;font-size:14.5px;color:#C0562F}
.sp8g{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:6px 0 10px}.sp8g>div{padding:10px 12px;border-radius:14px;border:1px solid var(--line);background:var(--surface)}.sp8g small{display:block;font-size:12.5px;color:var(--muted)}.sp8g b{font-size:21px;font-weight:600}
.sp8h{margin:14px 0 6px;font-size:14px;font-weight:600}.sp8r{display:grid;grid-template-columns:1fr auto;gap:0 10px;padding:7px 0;border-bottom:1px solid var(--line);font-size:14px}.sp8r span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sp8r small{grid-column:1/-1;font-size:12px;color:var(--muted)}
.sp8sheet b.r{color:#D0482F}.sp8sheet b.y{color:#B8860B}.sp8sheet .btn{margin-top:14px}
/* swipe cards: the finger moves the card sideways, the page still scrolls up and down without waiting */
[data-swipe],[data-wdswipe]{touch-action:pan-y}
/* the Butler panel takes the colours of the chosen design (light, dark, green …) */
html #ibar,html .ibar{background:var(--surface,#171410)!important;color:var(--ink)!important;border:1px solid color-mix(in srgb,var(--gold) 55%,var(--line))!important;box-shadow:0 12px 34px rgba(0,0,0,.22)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}
html #ibar .sitbh,html #ibar .sitbh b,html #ibar .obex,html #ibar .ibmsg{color:var(--ink)!important}
html #ibar .sitbh b{color:var(--gold)!important}
html #ibar .sitbh button,html #ibar .mlchip,html #ibar .sitchips button,html #ibar .obex button,html #ibar .ibyes button{background:var(--bg)!important;color:var(--ink)!important;border:1px solid var(--line)!important;box-shadow:none!important}
html #ibar .mlchip{border-color:color-mix(in srgb,var(--gold) 50%,var(--line))!important;color:var(--gold)!important;font-weight:600}
html #ibar .ibmsg,html #ibar .ibmsg.ob{background:var(--bg)!important;border:1px solid var(--line)!important}
html #ibar .obhead{color:var(--gold)!important}
html #ibar .ibseal{background:var(--bg)!important;border:1px solid var(--gold)!important;color:var(--gold)!important}
html #ibar .ibb{background:var(--bg)!important;border:1px solid var(--line)!important;color:var(--gold)!important}
html #ibar .ibsend,html #ibar .ibyes button.on{background:var(--gold)!important;color:var(--bg)!important;border:0!important}
html #ibar.rec .ibmic{background:#B8423F!important;color:#fff!important;border-color:#B8423F!important}
html #ibar textarea,html #ibar input{background:var(--bg)!important;color:var(--ink)!important;border:1px solid var(--line)!important}
html #ibar textarea::placeholder,html #ibar input::placeholder{color:var(--muted)!important}
html #ibar .ibfoot,html #ibar .ibwhere{color:var(--muted)!important}
html #ibar .ibfoot button{color:var(--gold)!important}
html #ibar hr,html #ibar .sitbar{border-color:var(--line)!important}
/* the quick-access hint never covers the Butler panel */
html:has(#ibar) .h9sg{display:none!important}
/* shopping list in the quick-drop window */
.br9sheet .dtscroll>[hidden]{display:none!important}
.br9sheet .br9shop{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;height:70px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:13px;cursor:pointer;padding:0}
.br9sheet .br9shop svg,.br9sheet .br9shop svg *{color:var(--gold,#C99A3E);stroke:var(--gold,#C99A3E)!important;fill:none}
.br9sheet .br9shop svg{width:26px;height:26px}
.br9sheet .br9sn{position:absolute;top:6px;right:8px;min-width:20px;height:20px;padding:0 5px;border-radius:10px;background:var(--gold);color:var(--bg);font-style:normal;font-size:12px;line-height:20px;text-align:center}
.br9sheet .br9sn:empty{display:none}
.br9sl .br9sa{display:flex;gap:8px;margin:0 0 6px}.br9sl .br9sa input{flex:1;min-width:0;height:48px;font-size:16px}
.br9sl .br9sa button{flex:none;width:48px;height:48px;border-radius:50%;border:0;background:var(--gold);color:var(--bg);display:grid;place-items:center;cursor:pointer}.br9sl .br9sa svg{width:22px;height:22px}
.br9sl .br9sh{margin:6px 2px 8px;font-size:13.5px;color:var(--muted)}
.br9si{display:flex;align-items:center;gap:12px;width:100%;min-height:52px;padding:8px 4px;border:0;border-bottom:1px solid var(--line);background:transparent;color:var(--ink);font:inherit;font-size:17px;text-align:left;cursor:pointer}
.br9si i{flex:none;width:28px;height:28px;border-radius:8px;border:2px solid var(--gold);display:grid;place-items:center;color:var(--bg)}.br9si i svg{width:18px;height:18px}
.br9si.d i{background:var(--gold)}.br9si.d span{text-decoration:line-through;color:var(--muted)}.br9si small{color:var(--muted);font-size:14px}
.br9sd{margin-top:10px;opacity:.85}
.br9sc,.br9sb{display:block;width:100%;height:46px;margin-top:12px;border-radius:23px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font:inherit;font-size:15.5px;text-align:center;cursor:pointer}
/* the «put it into quick access?» hint is switched off */
.h9sg{display:none!important}
.br9sf{display:block;width:100%;height:50px;margin-top:12px;border-radius:25px;border:0;background:var(--gold);color:var(--bg);font:inherit;font-size:16.5px;font-weight:600;text-align:center;cursor:pointer}
/* full-screen shopping list */
.sh12{position:fixed;inset:0;z-index:500;display:flex;flex-direction:column;background:var(--bg,#0d0d0f);color:var(--ink);padding:calc(env(safe-area-inset-top,0px) + 14px) 18px calc(env(safe-area-inset-bottom,0px) + 10px);animation:dzfade .18s}
.sh12h{display:flex;align-items:center;justify-content:space-between;gap:12px;flex:none;padding-bottom:10px;border-bottom:1px solid var(--line)}
.sh12h b{display:block;font-size:30px;font-weight:600;color:var(--gold)}.sh12h small{display:block;font-size:16px;color:var(--muted);margin-top:2px}
.sh12x{flex:none;width:52px;height:52px;border-radius:50%;border:1px solid var(--line);background:var(--surface);color:var(--ink);font-size:30px;line-height:1;display:grid;place-items:center;padding:0;cursor:pointer}
.sh12l{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:4px 0}
.sh12i{display:flex;align-items:center;gap:18px;width:100%;min-height:76px;padding:10px 4px;border:0;border-bottom:1px solid var(--line);background:transparent;color:var(--ink);font:inherit;font-size:26px;text-align:left;cursor:pointer}
.sh12i i{flex:none;width:40px;height:40px;border-radius:11px;border:2.5px solid var(--gold);display:grid;place-items:center;color:var(--bg)}.sh12i i svg{width:26px;height:26px}
.sh12i.d i{background:var(--gold)}.sh12i.d span{text-decoration:line-through;color:var(--muted)}.sh12i small{font-size:19px;color:var(--muted)}
.sh12d{margin-top:14px;opacity:.75}.sh12d .sh12i{min-height:62px;font-size:21px}
.sh12n{flex:none;margin:8px 0 0;text-align:center;font-size:13px;color:var(--muted)}
/* swipe-back arrow */
.sw223{position:fixed;left:0;top:50%;z-index:100000;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:var(--surface,#1c1c1e);color:var(--ink,#fff);border:1px solid var(--line,rgba(255,255,255,.2));box-shadow:0 6px 18px rgba(0,0,0,.25);transform:translate(-40px,-50%);opacity:0;transition:opacity .15s,background .15s;pointer-events:none}
.sw223 svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.sw223.go{background:var(--gold,#C99A3E);color:#15120b;border-color:transparent}
`;document.head.appendChild(st)}
