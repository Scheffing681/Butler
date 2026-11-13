/* v192: own background colour for the clock (style builder) */
{const T={ru:'Фон часов',de:'Hintergrund der Uhr',en:'Clock background',pl:'Tło zegara',tr:'Saat arka planı',fr:'Fond de l’horloge',es:'Fondo del reloj'};Object.keys(T).forEach(l=>{if(fh[l])fh[l].clockF=T[l]})}
function ck8apply(){try{const f=g.ds&&g.ds.clockF;if(f){Zn.style.setProperty('--clkF',f);Zn.style.setProperty('--clkF2',Za(f,10));Zn.dataset.clkf='1'}else{delete Zn.dataset.clkf}}catch(e){}}
Ws=(f=>function(){const r=f.apply(this,arguments);ck8apply();return r})(Ws);ck8apply();
{const st=document.createElement('style');st.textContent=`html[data-clkf] .st17h .st17clk .skyi{background:radial-gradient(80% 45% at 50% 22%,rgba(214,176,96,.10),transparent 70%) padding-box,linear-gradient(var(--clkF2),var(--clkF)) padding-box,linear-gradient(145deg,#E2B962 0%,#8C7A3E 35%,#1F9E59 62%,#2FBF6A 78%,#D9B460 100%) border-box!important}`;document.head.appendChild(st)}
