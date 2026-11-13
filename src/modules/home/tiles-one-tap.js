/* ===== v269 Tiles: one word, one tap =====
   «Другие разделы» → «Ещё»; «Здоровье и спорт» → «Здоровье», «Дом и поездки» → «Места» (in nine-sections.js).
   The replace picker puts a section in one tap; the arrow › opens its tabs. A chosen section that was hidden
   (e.g. «Быстрый ввод») is shown, so it really appears on its tile instead of vanishing.
   Tile names stay on one line and shrink a little before they would be cut. */
try{const more={ru:'Ещё',de:'Mehr',en:'More',pl:'Więcej',tr:'Daha fazla',fr:'Plus',es:'Más'};for(const l in more)if(hs[l])hs[l].cat_more=more[l]}catch(e){Hooks.err('tt1more',e)}
function tt1show(q){if(typeof q!=='string'||zA(q))return;
 if(q.startsWith('c:')){const c=nt(q.slice(2));if(c)c.hidden=!1}
 else if(q.startsWith('q:')){g.secQ=Array.isArray(g.secQ)?g.secQ:[];const r=q.slice(2);if(!g.secQ.includes(r))g.secQ.push(r)}}
function tt1fit(){document.querySelectorAll('.screen .bd8t > span:not(.bd8coin):not(.bd8yk)').forEach(s=>{s.style.fontSize='';if(s.scrollWidth<=s.clientWidth+1)return;
 const f=parseFloat(getComputedStyle(s).fontSize)||12;let k=1;while(k>.76&&s.scrollWidth>s.clientWidth+1){k-=.06;s.style.fontSize=(f*k).toFixed(1)+'px'}})}
Hooks.on('render',()=>{try{requestAnimationFrame(tt1fit)}catch{}});
Hooks.css('tiles-one-tap',`
.bd8h .bd8t > span:not(.bd8coin):not(.bd8yk){display:block;white-space:nowrap;-webkit-line-clamp:unset;text-overflow:ellipsis;overflow:hidden}
.h11hint{hyphens:none;-webkit-hyphens:none}
.bd8pg.h11 button.us{opacity:1}
.bd8pg.h11 button.h11h{position:relative}
.bd8pg.h11 .h11more{position:absolute;top:2px;right:2px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:20px;line-height:1;border-radius:50%;color:var(--muted);cursor:pointer}
.bd8pg.h11 button.h11h.sel .h11more{transform:rotate(90deg);color:var(--ink)}
`);
