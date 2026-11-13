/* v234: sign-in screen — the page reaches the very bottom of the iPhone screen; password, «Войти», forgot/language sit low with calm space under them */
try{
 function lg234(){try{const el=document.querySelector('.login.lg9');const R=document.documentElement;if(!el){R.classList.remove('lg234x');return}
  const st=matchMedia('(display-mode: standalone)').matches||navigator.standalone;const port=innerHeight>innerWidth;const ae=document.activeElement;const typing=ae&&/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName);
  let gap=0;if(st&&port&&!typing&&screen&&screen.height)gap=Math.max(0,Math.min(90,screen.height-innerHeight));
  R.style.setProperty('--lg234gap',gap+'px');R.classList.toggle('lg234x',gap>0)}catch{}}
 v=(f=>function(){const r=f.apply(this,arguments);try{lg234();requestAnimationFrame(lg234)}catch{}return r})(v);
 ['resize','orientationchange','pageshow','focusin','focusout'].forEach(n=>addEventListener(n,()=>setTimeout(lg234,60)));
 const st=document.createElement('style');st.textContent=`
.login.lg9.h11L{padding-bottom:calc(env(safe-area-inset-bottom,0px) + 14px)!important}
html.lg234x .login.lg9.h11L{bottom:calc(-1*var(--lg234gap,0px))!important;height:auto!important}
.login.h11L .lg9mid{margin-top:auto!important;width:100%}
.login.h11L .br9clk{margin:auto 0!important}
.login.h11L .h11sub{margin-top:16px}
.login.h11L .lg9copy{margin-top:14px!important;margin-bottom:0!important}
`;document.head.appendChild(st)}catch(e){}
