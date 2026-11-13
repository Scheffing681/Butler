/* v236: iPhone app mode — the page canvas reaches the real bottom of the screen again, so no white band and nothing cut off below.
   v237: steady — the value is measured once and kept; focusing a field or opening the keyboard no longer flips it (that made the screen jump) */
try{
 let g236=-1,vh236=0;
 function h236(){try{const R=document.documentElement;const st=matchMedia('(display-mode: standalone)').matches||navigator.standalone;const port=innerHeight>innerWidth;const vv=window.visualViewport;
  if(vv&&vv.height<innerHeight-120)return;/* keyboard open: keep everything exactly as it is */
  let gap=0;if(st&&port&&screen&&screen.height)gap=Math.max(0,Math.min(90,screen.height-innerHeight));
  if(gap===g236&&innerHeight===vh236)return;g236=gap;vh236=innerHeight;
  R.style.setProperty('--h236gap',gap+'px');R.style.setProperty('--h236vh',innerHeight+'px');R.classList.toggle('h236',gap>0)}catch{}}
 v=(f=>function(){const r=f.apply(this,arguments);try{h236()}catch{}return r})(v);
 ['resize','orientationchange','pageshow'].forEach(n=>addEventListener(n,()=>setTimeout(h236,140)));
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)setTimeout(h236,120)});h236();
 const st=document.createElement('style');st.textContent=`
html.h236{min-height:calc(var(--h236vh,100%) + var(--h236gap,0px))!important;overflow:hidden!important}
html.h236 body{height:var(--h236vh,100%)!important;overflow:hidden!important}
html.h236 body::after{content:"";position:fixed;left:0;right:0;top:var(--h236vh,100%);height:calc(var(--h236gap,0px) + 40px);background:var(--h10bot,var(--bg));z-index:0;pointer-events:none}
html.h236 .login.lg9.h11L,html.h236.lg234x .login.lg9.h11L{bottom:calc(-1*var(--h236gap,0px))!important;height:auto!important}
html.lg234x:not(.h236) .login.lg9.h11L{bottom:0!important}
`;document.head.appendChild(st)}catch(e){}
