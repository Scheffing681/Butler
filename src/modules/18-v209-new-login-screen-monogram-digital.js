/* v209: new login screen — monogram, digital clock in a golden ring, password field with eye, gold enter button */
const lg9S={open:['Войти','Anmelden','Sign in','Zaloguj','Giriş','Se connecter','Entrar'],
ph:['Ваш пароль','Ihr Passwort','Your password','Twoje hasło','Şifreniz','Votre mot de passe','Su contraseña'],
phN:['Придумайте пароль','Neues Passwort festlegen','Create a password','Utwórz hasło','Şifre oluşturun','Créez un mot de passe','Cree una contraseña'],
show:['Показать пароль','Passwort zeigen','Show password','Pokaż hasło','Şifreyi göster','Afficher le mot de passe','Mostrar contraseña'],
setpw:['Установить пароль','Passwort festlegen','Set a password','Ustaw hasło','Şifre belirle','Définir un mot de passe','Establecer contraseña']};
const lg9t=k=>cv5n(lg9S[k]);
const LG9I={cal:'<rect x="4" y="5.5" width="18" height="16" rx="3"/><path d="M4 11h18M9 3.5v4M17 3.5v4"/>',chk:'<rect x="4" y="5" width="17" height="17" rx="3.5"/><path d="M9 13.5l3.2 3.2L22 6.5"/>',lay:'<path d="M13 4l9 4.5-9 4.5-9-4.5z"/><path d="M4 13.5l9 4.5 9-4.5M4 17.5l9 4.5 9-4.5"/>',bars:'<path d="M6 21v-4M11 21v-7M16 21V10M21 21V5"/>',
lock:'<rect x="5.5" y="11" width="15" height="11" rx="3"/><path d="M9 11V8a4 4 0 0 1 8 0v3"/><circle cx="13" cy="16.5" r="1.3" fill="currentColor"/>',eye:'<path d="M2.5 13S6.5 6 13 6s10.5 7 10.5 7-4 7-10.5 7S2.5 13 2.5 13z"/><circle cx="13" cy="13" r="3.2"/>',
arr:'<path d="M4 13h17M15 7l6 6-6 6"/>',globe:'<circle cx="13" cy="13" r="9.5"/><path d="M3.5 13h19M13 3.5c3 3 3 16 0 19M13 3.5c-3 3-3 16 0 19"/>',down:'<path d="M7 10l6 6 6-6"/>',face:'<path d="M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9M17 4h2.5A2.5 2.5 0 0 1 22 6.5V9M22 17v2.5a2.5 2.5 0 0 1-2.5 2.5H17M9 22H6.5A2.5 2.5 0 0 1 4 19.5V17"/><path d="M9.5 10v1.5M16.5 10v1.5M13 10v4.5h-1M10 17.5c1.8 1.4 4.2 1.4 6 0"/>'};
const lg9i=n=>`<svg class="lg9ic" viewBox="0 0 26 26" aria-hidden="true">${LG9I[n]||''}</svg>`;
function lg9now(){const d=new Date;let dt='';try{dt=Fi(d.toLocaleDateString(he(),{weekday:'short',day:'numeric',month:'long'}))}catch{}return{t:Gs(d.getHours())+':'+Gs(d.getMinutes()),d:dt}}
Yf=(f=>function(){const src=f.apply(this,arguments);try{
 const T0=document.createElement('template');T0.innerHTML=src;const lg=T0.content.querySelector('.login');if(!lg)return src;
 const form=lg.querySelector('form.pwform'),pwb=lg.querySelector('button[data-act="pw"]'),face=lg.querySelector('button.lbtn.light'),lang=lg.querySelector('.langsel'),copy=lg.querySelector('.tbcopy'),q=lg.querySelector('.quote');
 const N=lg9now();let quote='';try{quote=K('q1')}catch{}if(!quote&&q)quote=q.textContent;
 let mid='';
 if(form){const inp=form.querySelector('input[name="pw"]'),lab=form.querySelector('label'),err=form.querySelector('.err'),fg=form.querySelector('.st4forgot'),wait=[...form.querySelectorAll('p.err')].filter(p=>p!==err);
  const isNew=!g.pw;inp.setAttribute('placeholder',isNew?lg9t('phN'):lg9t('ph'));inp.className='lg9in';if(lab){lab.className='lg9sr'}
  const box=`<div class="lg9f">${lg9i('lock')}${inp.outerHTML}<button type="button" class="lg9eye" data-act="lg9eye" aria-label="${i(lg9t('show'))}">${lg9i('eye')}</button></div>`;
  mid=`<form class="pwform lg9form" data-form="login">${lab?lab.outerHTML:''}${box}${err?`<p class="err lg9err">${err.innerHTML}</p>`:''}${wait.map(w=>`<p class="err lg9err">${w.innerHTML}</p>`).join('')}<button class="lg9go" type="submit"><span>${i(lg9t('open'))}</span>${lg9i('arr')}</button>${face?`<button type="button" class="lg9alt" data-act="${face.dataset.act}">${lg9i('face')}<span>${i(face.textContent.trim())}</span></button>`:''}${fg?`<button type="button" class="lg9fg" data-act="st4forgot">${i(fg.textContent.trim())}</button>`:''}</form>`}
 else{mid=`<button type="button" class="lg9go" data-act="${face?face.dataset.act:'face'}"><span>${i(lg9t('open'))}</span>${lg9i('arr')}</button>${pwb?`<button type="button" class="lg9fg" data-act="pw">${i(lg9t('setpw'))}</button>`:''}`}
 const out=`<div class="login lg9"><div class="lg9glow" aria-hidden="true"><i class="lg9arc"></i></div>
  <div class="lg9top"><svg class="lg9mono" viewBox="0 0 80 100" role="img" aria-label="Silentium"><defs><linearGradient id="lg9g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3DCA8"/><stop offset=".55" stop-color="#C9A062"/><stop offset="1" stop-color="#7C6138"/></linearGradient></defs><rect x="2" y="2" width="76" height="96" rx="38" fill="rgba(255,255,255,.02)" stroke="url(#lg9g)" stroke-width="1.6"/><text x="40" y="70" text-anchor="middle" font-family="'Cormorant Garamond',Georgia,serif" font-size="66" fill="#F5F1E8">S</text><circle cx="36.5" cy="60" r="3" fill="#F5F1E8"/></svg>
   <p class="lg9n">THE SILENTIUM’S</p><p class="lg9b"><i></i><span>BUTLER</span><i></i></p></div>
  <div class="lg9clk"><div class="lg9ring" aria-hidden="true"></div><b class="lg9time">${N.t}</b><span class="lg9date">${i(N.d)}</span></div>
  <div class="lg9ics" aria-hidden="true">${['cal','chk','lay','bars'].map(n=>`<span>${lg9i(n)}</span>`).join('')}</div>
  ${quote?`<p class="lg9q">«${i(String(quote).replace(/^[«"“„]+|[»"”]+$/g,''))}»</p>`:''}
  <div class="lg9mid">${mid}</div>
  ${lang?`<button type="button" class="lg9lang" data-act="sheet" data-s="lang">${lg9i('globe')}<span>${i(lang.textContent.trim())}</span>${lg9i('down')}</button>`:''}
  ${copy?`<p class="lg9copy">${copy.innerHTML}</p>`:''}</div>`;
 lg.remove();return out+T0.innerHTML}catch(e){return src}})(Yf);
L.lg9eye=function(){const p=document.getElementById('pwin');if(!p)return;p.type=p.type==='password'?'text':'password';const b=document.querySelector('.lg9eye');b&&b.classList.toggle('on',p.type==='text')};
function lg9fit(){const el=document.querySelector('.login.lg9');if(!el)return;el.style.zoom='';el.style.height='';el.style.bottom='';const H0=el.clientHeight||window.innerHeight;if(el.scrollHeight<=H0+1)return;let lo=.62,hi=1;const set=z=>{el.style.zoom=z;el.style.bottom='auto';el.style.height=(H0/z)+'px'};for(let k=0;k<7;k++){const z=(lo+hi)/2;set(z);if(el.scrollHeight>el.clientHeight+1)hi=z;else lo=z}set(lo)}
function lg9page(on){const R2=document.documentElement;R2.classList.toggle('lg9on',on);const mt=document.querySelector('meta[name="theme-color"]');if(mt){if(on){if(mt.dataset.lg9==null)mt.dataset.lg9=mt.content;if(mt.content!=='#07090C')mt.content='#07090C'}else if(mt.dataset.lg9!=null){mt.content=mt.dataset.lg9;delete mt.dataset.lg9;try{bd8edge()}catch{}}}}
v=(f=>function(){const r=f.apply(this,arguments);try{const on=!!document.querySelector('.login.lg9');lg9page(on);if(on){lg9fit();if(!lg9fit.d){lg9fit.d=1;requestAnimationFrame(lg9fit);setTimeout(lg9fit,400);setTimeout(lg9fit,1200)}}}catch{}return r})(v);
window.addEventListener('resize',()=>{try{lg9fit()}catch{}});window.addEventListener('orientationchange',()=>setTimeout(()=>{try{lg9fit()}catch{}},300));document.addEventListener('visibilitychange',()=>{if(!document.hidden)setTimeout(()=>{try{lg9fit()}catch{}},200)});
setInterval(()=>{try{const e=document.querySelector('.lg9time');if(!e)return;const N=lg9now();if(e.textContent!==N.t)e.textContent=N.t;const d=document.querySelector('.lg9date');d&&d.textContent!==N.d&&(d.textContent=N.d)}catch{}},5e3);
{const st=document.createElement('style');st.textContent=`
html.lg9on,html.lg9on body,html.lg9on .app{background:#07090C!important;background-image:none!important}
html.lg9on .sheet-wrap .sheet{background:#11141A!important;color:#F2EDE3!important;box-shadow:0 -1px 0 rgba(201,160,98,.5)!important}html.lg9on .sheet-wrap .sheet button{background:#171B22!important;color:#F2EDE3!important;border-color:#2A2E36!important}html.lg9on .sheet-wrap .sheet h2,html.lg9on .sheet-wrap .sheet h3{color:#F2EDE3!important}
.login.lg9{position:fixed!important;left:0;right:0;top:0;bottom:0;z-index:10;width:100%;display:flex!important;flex-direction:column;align-items:center;justify-content:space-between!important;gap:0!important;height:100%;max-height:none!important;padding:calc(env(safe-area-inset-top,0px) + 30px) 24px calc(env(safe-area-inset-bottom,0px) + 22px)!important;background:radial-gradient(60% 22% at 50% 36%,rgba(201,160,98,.10),transparent 70%),linear-gradient(#0E1218,#0A0D12 60%,#07090C)!important;color:#F5F1E8;font-family:Jost,system-ui,sans-serif;overflow:hidden;box-sizing:border-box;text-align:center}
.lg9>*{position:relative;z-index:1;flex:none}.lg9glow{position:absolute!important;inset:0;z-index:0!important;pointer-events:none;overflow:hidden;background:radial-gradient(40% 14% at 50% 100%,rgba(240,200,130,.18),transparent 70%)}
.lg9top{display:flex;flex-direction:column;align-items:center}.lg9mono{width:66px;height:84px;filter:drop-shadow(0 0 14px rgba(201,160,98,.22))}
.lg9n{margin:16px 0 0;font-weight:300;font-size:22px;letter-spacing:.3em;padding-left:.3em;color:#F5F1E8;white-space:nowrap}
.lg9b{display:flex;align-items:center;gap:16px;margin:8px 0 0;font-weight:300;font-size:16px;letter-spacing:.55em;color:#E9E3D6}.lg9b span{padding-left:.55em}.lg9b i{display:block;width:40px;height:1px;background:linear-gradient(90deg,transparent,#C9A062)}.lg9b i:last-child{background:linear-gradient(90deg,#C9A062,transparent)}
.lg9clk{position:relative;width:200px;height:170px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:6px}
.lg9ring{position:absolute;left:0;top:0;width:200px;height:200px;border-radius:50%;border-top:1.5px solid rgba(240,205,140,.95);border-left:1px solid rgba(201,160,98,.35);border-right:1px solid rgba(201,160,98,.35);border-bottom:0;box-shadow:0 -10px 24px -10px rgba(245,205,130,.55),inset 0 12px 24px -14px rgba(245,205,130,.35);-webkit-mask:linear-gradient(#000 55%,transparent 88%);mask:linear-gradient(#000 55%,transparent 88%)}
.lg9time{display:block;font-weight:300;font-size:54px;line-height:1;letter-spacing:.01em;color:#FAF7F0;font-variant-numeric:tabular-nums;margin-top:22px}.lg9date{display:block;margin-top:8px;font-size:15px;color:#E6E0D4}
.lg9ics{display:flex;gap:18px}.lg9ics span{width:40px;height:38px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.03);display:grid;place-items:center;color:#E9E3D6}
.lg9ic{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;flex:none}
.lg9q{margin:0;font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:21px;color:#F2EDE3}
.lg9mid{width:100%;max-width:360px}.lg9form{display:flex;flex-direction:column;gap:12px;margin:0;width:100%}
.lg9sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.lg9f{display:flex;align-items:center;gap:10px;height:46px;padding:0 6px 0 18px;border-radius:23px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.025);color:#F5F1E8}.lg9f:focus-within{border-color:rgba(226,185,98,.7)}
.lg9in{flex:1;min-width:0;height:100%;border:0!important;background:transparent!important;color:#F5F1E8!important;font:inherit;font-size:16px!important;outline:none;padding:0 6px!important;box-shadow:none!important;margin:0!important}.lg9in::placeholder{color:#8E8C88}
.lg9eye{width:40px;height:40px;border-radius:50%;border:0;background:transparent;color:#E9E3D6;display:grid;place-items:center;cursor:pointer;padding:0}.lg9eye.on{color:#E2B962}
.lg9go{display:flex!important;align-items:center;justify-content:center;position:relative;width:100%;height:48px;border-radius:24px;border:0;background:linear-gradient(90deg,#F6E3BE,#E2C595 55%,#C9A46E)!important;color:#15120D!important;font:inherit;font-size:19px;font-weight:500;cursor:pointer;box-shadow:0 8px 22px rgba(201,160,98,.18);padding:0}.lg9go svg{position:absolute;right:22px;width:22px;height:22px;stroke-width:1.8}
.lg9alt{display:flex;align-items:center;justify-content:center;gap:10px;height:42px;border-radius:21px;border:1px solid rgba(226,185,98,.4);background:transparent;color:#F0EBE0;font:inherit;font-size:15px;cursor:pointer}
.lg9fg{display:block;margin:2px auto 0;border:0;background:none;color:#EFEAE0;font:inherit;font-size:15px;text-decoration:underline;text-underline-offset:4px;text-decoration-color:rgba(226,185,98,.7);cursor:pointer;padding:4px}
.lg9err{margin:0;color:#F08E7E!important;font-size:14px}
.lg9lang{display:flex;align-items:center;gap:14px;height:38px;padding:0 16px;border-radius:19px;border:1px solid rgba(201,160,98,.45);background:transparent;color:#F0EBE0;font:inherit;font-size:16px;cursor:pointer;min-width:160px;justify-content:space-between}.lg9lang span{flex:1}
.lg9copy{margin:0;font-size:11.5px;color:#9A968E;letter-spacing:.02em}
.lg9arc{display:block;position:absolute!important;left:-30%;right:-30%;bottom:-92px;height:120px;border-radius:50%;border-top:1.5px solid rgba(245,210,150,.85);box-shadow:0 -10px 30px -12px rgba(245,205,130,.6);z-index:0!important;pointer-events:none}
`;document.head.appendChild(st)}
