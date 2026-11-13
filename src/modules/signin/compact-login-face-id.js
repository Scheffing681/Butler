/* v221: compact login with Face ID next to the password; icon picker shows the 9 sections first */
const H11S={fidNo:['Сначала войдите паролем, затем включите Face ID в профиле — потом вход будет одним взглядом.','Erst mit Passwort anmelden und Face ID im Profil einschalten — danach reicht ein Blick.','Sign in with your password first, then turn on Face ID in your profile — after that a glance is enough.','Najpierw zaloguj się hasłem, potem włącz Face ID w profilu — dalej wystarczy spojrzenie.','Önce şifreyle girin, sonra profilden Face ID’yi açın — sonra bir bakış yeter.','Connectez-vous d’abord avec le mot de passe, puis activez Face ID dans le profil — ensuite un regard suffit.','Primero entra con la contraseña y activa Face ID en el perfil; después basta una mirada.'],
 what:['Что поставить из «%n»?','Was aus „%n“ setzen?','What to place from “%n”?','Co wstawić z „%n”?','“%n” içinden ne konsun?','Que placer depuis « %n » ?','¿Qué poner de «%n»?'],
 tap:['Нажмите раздел — поставить целиком или выбрать одну вкладку','Bereich antippen — ganz setzen oder einen Reiter wählen','Tap a section — place it whole or pick one tab','Dotknij działu — wstaw cały lub wybierz jedną kartę','Bir bölüme dokunun — tamamını koyun ya da bir sekme seçin','Touchez une section — en entier ou un seul onglet','Toca una sección: entera o una sola pestaña'],
 inside:['%n внутри','%n darin','%n inside','%n w środku','içinde %n','%n dedans','%n dentro']};
const h11t=(k,o)=>{let t=cv5n(H11S[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const H11FID='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8V6a3 3 0 0 1 3-3h2M16 3h2a3 3 0 0 1 3 3v2M21 16v2a3 3 0 0 1-3 3h-2M8 21H6a3 3 0 0 1-3-3v-2"/><path d="M8.5 9v1.5M15.5 9v1.5M12 9v4.2h-1M9 16.2c1.8 1.4 4.2 1.4 6 0"/></svg>';
/* ---------- login ---------- */
Yf=(f=>function(){const src=f.apply(this,arguments);try{const T0=document.createElement('template');T0.innerHTML=src;const lg=T0.content.querySelector('.login.lg9');if(!lg)return src;
 lg.classList.add('h11L');const fm=lg.querySelector('.lg9form'),fld=fm&&fm.querySelector('.lg9f');
 if(fld&&!fm.querySelector('.h11row')){const row=document.createElement('div');row.className='h11row';fld.parentNode.insertBefore(row,fld);row.appendChild(fld);row.insertAdjacentHTML('beforeend',g.br9qcOff?`<button type="button" class="h11fid" data-act="h11fid" aria-label="Face ID">${H11FID}</button>`:`<button type="button" class="h11fid h11qc" data-act="br9qc" aria-label="${i(br9t('qc'))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"/><path d="M14 3.5v5h5M12 11.5v6M9 14.5h6"/></svg></button>`)}
 fm&&fm.querySelectorAll('.lg9alt[data-act="st4face"]').forEach(e=>e.remove());
 const fg=fm&&fm.querySelector('.lg9fg'),lang=lg.querySelector('.lg9lang');if(fg&&lang){const sub=document.createElement('div');sub.className='h11sub';fg.parentNode.insertBefore(sub,fg);sub.appendChild(fg);sub.appendChild(lang)}
 return T0.innerHTML}catch(e){return src}})(Yf);
L.h11fid=function(){try{if(g.waId&&L.st4face)return L.st4face()}catch{}T(h11t('fidNo'))};
/* ---------- picker: 9 sections first, a section opens its tabs ---------- */
bd8pick=(f=>function(kind,j){const r=f.apply(this,arguments);if(kind==='a')return r;try{const sh=[...document.querySelectorAll('.bd8psheet')].pop();const pg=sh&&sh.querySelector('.bd8pg');if(!pg)return r;
 const btns=[...pg.querySelectorAll(':scope > button[data-q]')];const hubs=btns.filter(b=>h9id(b.dataset.q));if(!hubs.length)return r;
 const mem=new Set;hubs.forEach(b=>h9mem(h9id(b.dataset.q)).forEach(q=>mem.add(q)));
 pg.classList.add('h11');hubs.slice().reverse().forEach(b=>pg.prepend(b));
 hubs.forEach(b=>{const n=h9mem(h9id(b.dataset.q)).length;b.classList.add('h11h');let s=b.querySelector('small');if(!s){s=document.createElement('small');b.appendChild(s)}if(!/✓/.test(s.textContent))s.textContent=h11t('inside',{n})});
 btns.forEach(b=>{if(mem.has(b.dataset.q))b.classList.add('h11m')});
 const hint=document.createElement('p');hint.className='h11hint';hint.textContent=h11t('tap');pg.after(hint);
 const close=()=>{pg.querySelectorAll('.h11p').forEach(e=>e.remove());pg.querySelectorAll('.h11h.sel').forEach(e=>e.classList.remove('sel'))};
 pg.addEventListener('click',ev=>{const b=ev.target.closest('button.h11h');if(!b||pg.classList.contains('srch'))return;ev.stopPropagation();ev.preventDefault();const was=b.classList.contains('sel');close();if(was)return;b.classList.add('sel');
  const id=h9id(b.dataset.q),M=h9mem(id);const kids=[...pg.children].filter(e=>e.offsetParent!==null);const idx=kids.indexOf(b),cols=(getComputedStyle(pg).gridTemplateColumns.split(' ').length)||3;const endEl=kids[Math.min(kids.length-1,Math.ceil((idx+1)/cols)*cols-1)];
  const p=document.createElement('div');p.className='h11p';const chip=(q,t,cls)=>{const u=b.closest('.bd8pg').querySelector(`button.h11m[data-q="${CSS.escape(q)}"]`);const mark=u&&u.querySelector('small')&&/✓/.test(u.querySelector('small').textContent)?' ✓':'';return`<button type="button" class="${cls||''}" data-q="${i(q)}">${i(t)}${mark}</button>`};
  p.innerHTML=`<p>${i(h11t('what',{n:b.querySelector('span')?b.querySelector('span').textContent:''}))}</p><div class="ch">${chip(b.dataset.q,h9t('whole'),'all')}${M.map(q=>{let t='';try{t=bd8sinfo(q).t}catch{}return t?chip(q,t):''}).join('')}</div>`;
  endEl.after(p);try{p.scrollIntoView({block:'nearest',behavior:'smooth'})}catch{}},!0);
 const inp=sh.querySelector('.bd8psr input');inp&&inp.addEventListener('input',()=>{const on=!!inp.value.trim();pg.classList.toggle('srch',on);if(on)close();hint.hidden=on});
 }catch(e){}return r})(bd8pick);
{const st=document.createElement('style');st.textContent=`
.login.h11L .hl9-login{transform:scale(.82);transform-origin:50% 0;margin-bottom:-28px!important}
.login.h11L .br9clk{transform:scale(.8);transform-origin:50% 0;margin-bottom:-44px!important}
.login.h11L .lg9mid{margin-top:auto!important}
.login.h11L .lg9copy{margin-top:12px!important}
.login.h11L .br9clk{margin-top:54px!important}
html.g9short .login.h11L .br9clk{margin-top:70px!important}
.h11row{display:flex;gap:10px;align-items:stretch}.h11row .lg9f{flex:1;min-width:0}
.h11fid{flex:none;width:56px;min-height:52px;border-radius:999px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:inherit;background:var(--lg9fbg,rgba(127,127,127,.08));border:1px solid color-mix(in srgb,var(--gold,#C99A3E) 45%,transparent);padding:0}
.h11fid svg{width:28px;height:28px}
.h11sub{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px;padding:0 6px}
.h11sub .lg9fg,.h11sub .lg9lang{margin:0!important;position:static!important;width:auto!important;transform:none!important}
.bd8pg.h11{grid-template-columns:repeat(3,minmax(0,1fr))}
.bd8pg.h11 button.h11m{display:none}.bd8pg.h11.srch button.h11m:not([hidden]){display:flex}
.bd8pg.h11 button.h11h.sel{border:2px solid var(--gold,#2E6B3C);background:var(--bg)}
.h11p{grid-column:1/-1;padding:12px;border-radius:16px;border:1px solid var(--line);background:var(--bg)}
.h11p p{margin:0 0 8px;font-size:13px;opacity:.65}
.h11p .ch{display:flex;flex-wrap:wrap;gap:6px}
.bd8pg .h11p .ch button{min-height:0;flex-direction:row;padding:8px 13px;border-radius:999px;font-size:14px;width:auto}
.bd8pg .h11p .ch button.all{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.h11hint{margin:12px 0 0;font-size:13px;opacity:.6;text-align:center}
`;document.head.appendChild(st)}
