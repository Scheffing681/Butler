/* ===== v270 Back from «Покупки» =====
   «‹» on «Список · Магазины · Товары» did nothing: the list opens as «kbshop» but shows «kbshops», so the
   general back (core) stepped back to «kbshop», which opened «kbshops» again — a loop. And the household-book
   back went to Finance. Now «‹» on these screens returns to where you came from (home, Notes …).
   Inside Finance everything works as before. */
{const SH=/^kb(shop|shops|list|prod)$/,prev=L.kbhome;
 function sb1back(){const h=m.hist||[];while(h.length&&(SH.test(h[h.length-1].route)||h[h.length-1].route===m.route&&h[h.length-1].cat===m.cat))h.pop();
  const p=h.pop();m.kbDraft=null;m.kbEdit=null;m.st33p='';if(!p||p.route==='home')return R('home',void 0,!0);if(p.route==='cat'&&p.cat)return R('cat',p.cat,!0);return R(p.route,void 0,!0)}
 /* window capture runs before the core's document-level back, so the loop cannot start */
 window.addEventListener('click',e=>{try{if(!m.logged||m.sheet||!SH.test(m.route))return;const b=e.target&&e.target.closest&&e.target.closest('.screen > .sub-hdr > button:first-child');if(!b)return;
  if(m.route==='kbprod'&&m.st33p)return;/* inside one product: its own back returns to the products */
  e.preventDefault();e.stopImmediatePropagation();sb1back()}catch(er){Hooks.err('sb1click',er)}},!0);
 Hooks.act('kbhome',function(){try{if(SH.test(m.route))return sb1back()}catch(e){Hooks.err('sb1back',e)}return prev&&prev.apply(this,arguments)},{replace:!0})}
