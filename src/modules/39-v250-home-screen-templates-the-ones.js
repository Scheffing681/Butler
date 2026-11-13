/* v250: home-screen templates — the ones that only differed in colour are folded into one (the colour is chosen apart in «Расположение и цвет»);
   every template left gets the brand header, quick actions with the scanner, the goal as a ring and gold accents. Old ids still open (BD8OLD). */
try{
 const DROP={premD:'premL',eleg:'klar',warm:'klar',natur:'klar',goldn:'klar3',berg:'woche',fokus:'cockpit',teal:'cockpit',sunrise:'cockpit'};
 const OLD=BD8T.filter(t=>DROP[t[0]]);for(let j=BD8T.length-1;j>=0;j--)if(DROP[BD8T[j][0]])BD8T.splice(j,1);
 const NM={klar:['Плитки','Kacheln','Tiles','Kafelki','Kutucuklar','Tuiles','Mosaicos'],klar3:['Сетка 3×3','Raster 3×3','Grid 3×3','Siatka 3×3','Izgara 3×3','Grille 3×3','Cuadrícula 3×3'],cockpit:['Кокпит','Cockpit','Cockpit','Kokpit','Kokpit','Cockpit','Cabina']};
 BD8T.forEach(t=>{const id=t[0],c=t[2];if(NM[id])t[1]=NM[id];c.goal='ring';c.ico='acc';c.deco=1;c.tl=1;delete c.crown;
  if(id!=='safe'&&id!=='assist'&&!c.blocks.includes('acts')){const b=c.blocks.filter(k=>k!=='goal');c.blocks=b.concat(c.blocks.includes('goal')?['goal','acts']:['acts'])}
  if(id==='klar'){c.n=4}if(id==='klar3'){c.n=6}if(id==='woche'){c.blocks=['greet','week','today','tiles','acts'];c.n=6}if(id==='cockpit'){c.cols=4;c.n=4}if(id==='plan'){c.n=4}});
 window.BD8OLD=OLD;
 /* a chosen template that was folded keeps its colour and moves to the template it joined */
 try{const c=bd8C();if(c&&c.cfg&&DROP[c.cfg.t]){const k=DROP[c.cfg.t],t=BD8T.find(q=>q[0]===k);if(t){const pal=c.cfg.pal;Object.assign(c.cfg,JSON.parse(JSON.stringify(t[2])),{t:k,pal});$()}}}catch{}
 /* the Butler sign — the same living ring as on the sign-in screen — on every template */
 bd8home=(f=>function(c,th){let h=f.apply(this,arguments);try{if(!c||c.gold)return h;const dk=bd8dark(bd8pal(c)),B=th?'span':'button',sign=hl9sign('head').replace(/data-light="[01]"/,`data-light="${dk?0:1}"`);
  if(c.orbit)h=h.replace('<b class="o">Der Butler</b><span class="o"><i></i>VON SILENTIUM<i></i></span>','<b>The Silentium’s</b><span><i></i>BUTLER<i></i></span>');
  if(!c.brand){const dot=(()=>{try{return!th&&ax5pick().length?'<i class="dot"></i>':''}catch{return''}})();
   h=h.replace(/<div class="bd8k bd8top">[\s\S]*?data-act="ly7bell"[\s\S]*?<\/(?:button|span)><\/div>/,`<div class="bd8k bd8top br9top"><${B} class="br9sq" data-act="go" data-to="bd9all" aria-label="${i(bd9t('title'))}">${br9i('grid')}</${B}>${sign}<span class="br9rt"><${B} class="br9bl" data-act="ly7bell" aria-label="${i(Yn('report'))}">${br9i('bell')}${dot}</${B}><${B} class="br9tg" data-act="go" data-to="bd8" aria-label="${i(bd8s('title'))}">${bd8i('tune')}</${B}></span></div>`)}}catch{}return h})(bd8home);
 const st=document.createElement('style');st.textContent=`
.bd8ttl.bd8br{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;align-self:center;justify-self:center;width:150px;height:46px;max-height:46px;padding:0;color:var(--k);box-sizing:border-box}
.bd8h .bd8br~*{}.bd8h{--gd:#B8913F}.bd8h.dk{--gd:#E5C987}
.bd8h.ic-acc .bd8t svg.bi,.bd8h.ic-acc .bd8st svg.bi,.bd8h.ic-acc .bd8a svg.bi,.bd8h.ic-acc .bd8go>svg.bi,.bd8h.ic-acc .bd8li svg.bi{color:var(--gd)!important}
.bd8ttl.bd8br .rg{display:block;position:absolute;inset:0;border-radius:50%;padding:2px;background:conic-gradient(from 200deg,#E5C987,#7BE0A0,#59C9E8,#7A6CF0,#E05FC4,#F0A35A,#E5C987);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.85;filter:drop-shadow(0 0 5px rgba(229,201,135,.35))}
.bd8ttl.bd8br strong{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:17px;line-height:1;white-space:nowrap;font-style:normal}
.bd8ttl.bd8br .bl{display:flex;align-items:center;gap:6px;margin-top:3px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:8.5px;letter-spacing:.42em;padding-left:.42em;color:var(--m)}
.bd8ttl.bd8br .bl u{display:block;width:16px;height:1px;background:currentColor;opacity:.7}
`;document.head.appendChild(st);
}catch(e){}
