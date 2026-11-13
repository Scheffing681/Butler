/* v217: screen edges always match what is on screen (iPhone gaps), iOS short-viewport fix, three hand-less clock faces */
function g9col(el,top){let k=0;while(el&&k++<30){let cs;try{cs=getComputedStyle(el)}catch{break}
 const bi=cs.backgroundImage;if(bi&&bi!=='none'){const m=(bi.match(/rgba?\([^)]*\)|#[0-9a-fA-F]{3,8}\b/g)||[]).filter(c=>{const a=c.match(/rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);return!a||+a[1]>=.9});if(m.length)return top?m[0]:m[m.length-1]}
 const c=cs.backgroundColor;if(c&&c!=='transparent'){const a=c.match(/rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);if(!a||+a[1]>=.9)return c}
 if(el===document.documentElement)break;el=el.parentElement}return null}
let g9last='';
function g9edges(){try{if(document.hidden)return;const R=document.documentElement,W=innerWidth/2,H=innerHeight;
 const pick=y=>{const L=document.elementsFromPoint(W,y).filter(e=>!e.closest('.bd8sv,.toast,.st4toast'));return L[0]||document.body};
 const top=g9col(pick(2),1)||g9col(document.querySelector('.screen'),1),bot=g9col(pick(H-2),0)||top;if(!top)return;
 const key=top+'|'+bot;if(key===g9last)return;g9last=key;const bg=`linear-gradient(${top} 0 50%,${bot} 50% 100%)`;
 R.style.setProperty('background',bg,'important');document.body.style.setProperty('background',bg,'important');
 const mt=document.querySelector('meta[name="theme-color"]');mt&&mt.content!==top&&(mt.content=top)}catch{}}
function g9gap(){try{const st=matchMedia('(display-mode: standalone)').matches||navigator.standalone;const port=innerHeight>innerWidth;const ae=document.activeElement;const typing=ae&&/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)||ae&&ae.isContentEditable;
 let gap=0;if(g.g9gapOn&&st&&port&&!typing&&screen&&screen.height){gap=Math.max(0,Math.min(90,screen.height-innerHeight))}document.documentElement.style.setProperty('--g9gap',gap+'px');document.documentElement.classList.toggle('g9short',gap>0)}catch{}}
v=(f=>function(){const r=f.apply(this,arguments);try{requestAnimationFrame(()=>{g9gap();g9edges()})}catch{}return r})(v);
['resize','orientationchange','pageshow','focusin','focusout'].forEach(n=>addEventListener(n,()=>setTimeout(()=>{g9gap();g9last='';g9edges()},250)));
document.addEventListener('visibilitychange',()=>{if(!document.hidden)setTimeout(()=>{g9gap();g9last='';g9edges()},300)});
setInterval(()=>{g9edges()},700);
try{new MutationObserver(()=>{requestAnimationFrame(g9edges)}).observe(document.body,{childList:!0})}catch{}
/* clock faces without hands: only the glowing centre ring, the arcs show seconds and minutes */
Object.assign(cf9S,{glass0:['Стекло · кольцо','Glas · Ring','Glass · ring','Szkło · pierścień','Cam · halka','Verre · anneau','Cristal · anillo'],obs0:['Обсидиан · кольцо','Obsidian · Ring','Obsidian · ring','Obsydian · pierścień','Obsidyen · halka','Obsidienne · anneau','Obsidiana · anillo'],radar0:['Радар · кольцо','Radar · Ring','Radar · ring','Radar · pierścień','Radar · halka','Radar · anneau','Radar · anillo']});
['glass0','obs0','radar0'].forEach((id,j)=>{if(!CF9.includes(id))CF9.splice(4+j*2,0,id)});
let cf9noH=0;
cf9hands=(f=>function(d,o){if(!cf9noH)return f.apply(this,arguments);const c=o.cc||o.hc;return`<circle cx="100" cy="100" r="15" fill="none" stroke="${c}" stroke-width="3.4" filter="url(#${o.id}g)"/>`})(cf9hands);
cf9face=(f=>function(id,d){if(typeof id==='string'&&/0$/.test(id)&&CF9.includes(id)){cf9noH=1;try{return f.call(this,id.slice(0,-1),d)}finally{cf9noH=0}}return f.apply(this,arguments)})(cf9face);
{const st=document.createElement('style');st.textContent=`
html.g9short .nz5ed,html.g9short .login.lg9{bottom:calc(-1*var(--g9gap,0px))!important;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px + var(--g9gap,0px))!important}
html.g9short .login.lg9{height:auto!important}
.nz5acts{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;overflow:visible!important}.nz5acts button{min-width:0!important;white-space:normal;line-height:1.15;padding-left:6px!important;padding-right:6px!important;font-size:14px!important;text-align:center!important;justify-content:center}
`;document.head.appendChild(st)}
