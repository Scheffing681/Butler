/* ===== Sign-in screen: page to the bottom, one pill — one module (was updates v234–v235) ===== */
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
/* v235: sign-in bottom as one pill — eye | password | round arrow; Face ID inside when switched on; quick-drop «+» next to the language */
try{
 const FID235='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8V6a3 3 0 0 1 3-3h2M16 3h2a3 3 0 0 1 3 3v2M21 16v2a3 3 0 0 1-3 3h-2M8 21H6a3 3 0 0 1-3-3v-2"/><path d="M8.5 9v1.5M15.5 9v1.5M12 9v4.2h-1M9 16.2c1.8 1.4 4.2 1.4 6 0"/></svg>';
 const PLUS235='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
 Yf=(f=>function(){const src=f.apply(this,arguments);try{const T0=document.createElement('template');T0.innerHTML=src;const lg=T0.content.querySelector('.login.lg9');const fm=lg&&lg.querySelector('.lg9form');const fld=fm&&fm.querySelector('.lg9f');if(!fld||fld.classList.contains('h12p'))return src;
  fld.classList.add('h12p');const row=fld.closest('.h11row');const qc=row&&row.querySelector('[data-act="br9qc"]');if(row){row.parentNode.insertBefore(fld,row);row.remove()}
  const lock=fld.querySelector(':scope > svg');lock&&lock.remove();const eye=fld.querySelector('.lg9eye');if(eye){fld.insertBefore(eye,fld.firstChild);eye.insertAdjacentHTML('afterend','<i class="h12sep"></i>')}
  if(g.waId)fld.insertAdjacentHTML('beforeend',`<button type="button" class="h12fid" data-act="st4face" aria-label="Face ID">${FID235}</button>`);
  fm.querySelectorAll('.lg9alt[data-act="st4face"]').forEach(e=>e.remove());
  const go=fm.querySelector('.lg9go');if(go){go.classList.add('h12go');go.setAttribute('aria-label',(go.textContent||'').trim());go.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';fld.appendChild(go)}
  const sub=fm.querySelector('.h11sub');if(sub){const fg=sub.querySelector('.lg9fg');fg&&fg.insertAdjacentHTML('afterend','<i class="h12sep"></i>');if(qc&&!g.br9qcOff)sub.insertAdjacentHTML('beforeend',`<button type="button" class="h12plus" data-act="br9qc" aria-label="${i(qc.getAttribute('aria-label')||'+')}">${PLUS235}</button>`)}
  return T0.innerHTML}catch(e){return src}})(Yf);
 const st=document.createElement('style');st.textContent=`
.lg9f.h12p{display:flex!important;align-items:center;gap:12px;height:56px!important;min-height:0!important;padding:0 5px 0 14px!important;border-radius:28px!important;box-shadow:0 6px 18px rgba(30,60,40,.12)}
.lg9f.h12p .lg9eye{position:static!important;flex:none;margin:0!important;transform:none!important}
.lg9f.h12p input{flex:1;min-width:0;padding:0!important;margin:0!important;height:100%;background:none!important;border:0!important}
.h12sep{flex:none;display:block;width:1px;height:26px;background:currentColor;opacity:.2}
.h12fid{flex:none;width:34px;height:34px;padding:0;border:0;background:none;color:inherit;opacity:.8;display:flex;align-items:center;justify-content:center;cursor:pointer}.h12fid svg{width:24px;height:24px}
.lg9go.h12go{flex:none;width:46px!important;height:46px!important;min-height:0!important;padding:0!important;margin:0!important;border-radius:50%!important;display:flex!important;align-items:center;justify-content:center;position:static!important}
.lg9go.h12go svg{width:22px;height:22px;position:static!important}
.h12plus{flex:none;width:42px;height:42px;border-radius:50%;border:1.2px solid color-mix(in srgb,currentColor 70%,transparent);background:none;color:inherit;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer}.h12plus svg{width:24px;height:24px}
.h11sub{gap:14px!important}.h11sub .lg9fg{white-space:nowrap;flex:none}.h11sub .lg9lang{flex:1;justify-content:center}
.login.h11L .h11sub{margin-top:18px}
`;document.head.appendChild(st)}catch(e){}
