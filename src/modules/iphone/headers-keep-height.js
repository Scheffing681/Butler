/* ===== v273 Headers keep their height =====
   On long screens (Книги, Здоровье …) the screen column squeezed the header to 48 px, so the tabs slid over the
   title («Кн…», «Зд…»). The header and the tabs now never shrink, on every screen. */
Hooks.css('headers-keep-height',`
.screen > .sub-hdr{flex:0 0 auto!important}
.screen > .h9tabs{flex:0 0 auto!important;position:relative;z-index:1}
`);
/* the small section name over the title is hidden when it says the same («ЗДОРОВЬЕ / Здоровье») */
Hooks.on('render',()=>{try{const s=document.querySelector('.screen > .sub-hdr .h9hub'),h=s&&s.parentElement.querySelector('h2');if(s&&h)s.style.display=s.textContent.trim().toLowerCase()===h.textContent.trim().toLowerCase()?"none":""}catch(e){Hooks.err('hk1hub',e)}});
