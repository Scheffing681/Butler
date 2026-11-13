/* v201: home on one screen — main blocks fit without scrolling, extras below */
const ly7S={one:['Главная на одном экране','Startseite auf einem Bildschirm','Home on one screen','Strona główna na jednym ekranie','Ana sayfa tek ekranda','Accueil sur un seul écran','Inicio en una pantalla'],
oneS:['Экран стоит неподвижно: часы, быстрый доступ и разделы видны сразу. Карточки и советы — в «Что делать сейчас».','Der Bildschirm steht still: Uhr, Schnellzugriff und Bereiche sofort sichtbar. Karten und Hinweise unter „Was jetzt tun“.','The screen stays still: clock, quick access and sections at once. Cards and tips are in “What to do now”.','Ekran stoi w miejscu: zegar, szybki dostęp i działy od razu. Karty i wskazówki — w „Co zrobić teraz”.','Ekran sabit durur: saat, hızlı erişim ve bölümler hemen görünür. Kartlar ve ipuçları “Şimdi ne yapmalı” içinde.','L’écran reste fixe : horloge, accès rapide et rubriques d’un coup. Cartes et conseils dans « Que faire maintenant ».','La pantalla queda fija: reloj, acceso rápido y secciones a la vista. Tarjetas y consejos en «Qué hacer ahora».'],
more:['Ещё…','Mehr …','More …','Więcej…','Daha…','Plus…','Más…'],
tour:['Знакомство с приложением','Einführung in die App','Tour of the app','Wprowadzenie do aplikacji','Uygulama tanıtımı','Découverte de l’application','Presentación de la aplicación'],
all:['Все %n ›','Alle %n ›','All %n ›','Wszystkie %n ›','Tümü %n ›','Toutes %n ›','Todas %n ›'],
open:['Открыть всё ›','Alles öffnen ›','Open all ›','Otwórz wszystko ›','Hepsini aç ›','Tout ouvrir ›','Abrir todo ›'],
msgs:['Сообщения: %n','Mitteilungen: %n','Messages: %n','Wiadomości: %n','Mesajlar: %n','Messages : %n','Mensajes: %n'],
waits:['Жду ответа: %n','Warte auf Antwort: %n','Waiting for reply: %n','Czekam na odpowiedź: %n','Yanıt bekleniyor: %n','En attente de réponse : %n','Esperando respuesta: %n'],
calm:['Срочного нет — можно спокойно заниматься своими делами.','Nichts Dringendes – alles in Ruhe.','Nothing urgent — all calm.','Nic pilnego — spokojnie.','Acil bir şey yok — her şey sakin.','Rien d’urgent — tout est calme.','Nada urgente: todo en calma.'],
msg:['Сообщения и советы','Mitteilungen und Hinweise','Messages and tips','Wiadomości i wskazówki','Mesajlar ve ipuçları','Messages et conseils','Mensajes y consejos']};
const ly7t=(k,o)=>{let t=cv5n(ly7S[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const ly7on=()=>g.ly7!==!1;
let ly7tm1=0,ly7tm2=0;
function ly7fit(){const sc=document.querySelector('.screen.home2');const root=document.documentElement;if(!sc||!ly7on()||m.route!=='home'||m.ly6e){root.classList.remove('ly7');return}root.classList.add('ly7');
 /* nothing below the sections: cards go into "What to do now", hills and motto leave the home screen */
 const ag=sc.querySelector(':scope > .agrid'),sky=sc.querySelector(':scope > section.sky'),first=sc.querySelector(':scope > .shead');let nC=0;
 if(first){let el=sky?sky.nextElementSibling:sc.firstElementChild;while(el&&el!==first){const nx=el.nextElementSibling;if(!el.classList.contains('ax5home')){nC++;el.remove()}el=nx}}
 sc.querySelectorAll(':scope > .ly7x').forEach(e2=>{nC++;e2.remove()});
 if(ag){let el=ag.nextElementSibling;while(el){const nx=el.nextElementSibling;el.remove();el=nx}}
 if(sc.dataset.ly7c==null)sc.dataset.ly7c=nC;else nC=+sc.dataset.ly7c;
 sc.querySelectorAll(':scope > .ax5home').forEach(e2=>e2.remove());
 const q=sc.querySelector('.st38top .td9q, .st38top [data-act="td9help"]')||sc.querySelector('.st38top .ly7bell');if(q){let n=0;try{n=ax5pick().length+((g.tasks||[]).filter(t=>!t.done&&t.knd==='w'&&t.c&&Date.now()-t.c>7*864e5).length)}catch{}n+=nC+((g.inbox||[]).length?1:0);q.className='iconbtn gold st17gr ly7bell';q.dataset.act='ly7bell';q.setAttribute('aria-label',ax5t('now'));q.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>'+(n?`<b class="ly7bd">${n}</b>`:'')}
 const nav=document.querySelector('nav.nav'),navTop=nav?nav.getBoundingClientRect().top:window.innerHeight;
 sc.classList.add('ly7q6');sc.querySelectorAll('.qgrid .qtile').forEach((t,j)=>{t.style.display=j<6?'':'none'});{const ls=[...sc.querySelectorAll('.qgrid .qtile>span:not(.qcnt):not(.soon-b):not(.ic3m):not(.ly6x)')].filter(l=>l.parentElement.style.display!=='none');let mn=13;ls.forEach(l=>{l.style.removeProperty('font-size');let f=13;l.style.setProperty('font-size',f+'px','important');const tw=()=>{const r=document.createRange();r.selectNodeContents(l);return r.getBoundingClientRect().width};while(f>7.9&&tw()>l.clientWidth-2){f-=.3;l.style.setProperty('font-size',f.toFixed(1)+'px','important')}mn=Math.min(mn,f)});ls.forEach(l=>l.style.setProperty('font-size',mn.toFixed(1)+'px','important'))}
 const all=ag?[...ag.querySelectorAll(':scope > .arow')]:[];all.forEach((r,j)=>r.style.display=j<8?'':'none');const rows=all.slice(0,8);
 const hd=[...sc.querySelectorAll(':scope > .shead')][1];if(hd){const lk=hd.querySelector('.slink[data-to="areas"]');if(lk&&all.length>8){lk.innerHTML=i(ly7t('all',{n:all.length}));lk.classList.add('ly7all')}}const mo=ag&&ag.querySelector(':scope > .ly7more');mo&&mo.remove();
 if(!sky||!ag){return}const lim=()=>navTop-30,fits=z=>{sky.style.zoom=z.toFixed(3);return ag.getBoundingClientRect().bottom<=lim()+1};
 const best=()=>{if(fits(1))return 1;if(!fits(.45))return .45;let lo2=.45,hi=1;for(let n=0;n<10;n++){const md=(lo2+hi)/2;if(fits(md))lo2=md;else hi=md}fits(lo2);return lo2};
 sc.style.setProperty('--ly7sp','0px');let z=best();if(!fits(z)&&rows.length>3){ag.insertAdjacentHTML('beforeend',`<button class="arow ly7more" data-act="go" data-to="areas"><span class="ic">${_('chev')}</span><span class="an">${i(ly7t('more'))}</span></button>`);let k=rows.length-1;while(k>2&&!fits(.45)){rows[k].style.display='none';k--}z=best()}sc.dataset.ly7k=z.toFixed(2);if(z>=1){const L=lim()-ag.getBoundingClientRect().bottom;if(L>8){let sp=Math.min(16,L/6);sc.style.setProperty('--ly7sp',sp.toFixed(1)+'px');while(sp>0&&ag.getBoundingClientRect().bottom>lim()+1){sp-=1;sc.style.setProperty('--ly7sp',sp.toFixed(1)+'px')}}}}
function ly7cards(){const sc=document.querySelector('.screen.ax5v');if(!sc||sc.querySelector('.ly7cards'))return;const r0=m.route;let h='';try{m.route='home';h=Mt()}catch{}m.route=r0;if(!h)return;const d=document.createElement('div');d.innerHTML=h;const hs=d.querySelector('.screen.home2');if(!hs)return;const sky=hs.querySelector(':scope > section.sky'),first=hs.querySelector(':scope > .shead');const out=[];let el=sky?sky.nextElementSibling:hs.firstElementChild;while(el&&el!==first){const nx=el.nextElementSibling;if(!el.classList.contains('ax5home'))out.push(el);el=nx}if(!out.length)return;const w=document.createElement('div');w.className='ly7cards';w.innerHTML=`<h3 class="section-t">✉ ${i(ly7t('msg'))}</h3>`;out.forEach(e2=>w.appendChild(e2));const at=sc.querySelector('.td9date');(at||sc.firstElementChild).after(w)}
v=(f=>function(){const r=f.apply(this,arguments);try{if(m.route==='home'){const sc=document.querySelector('.screen.home2');if(sc&&ly7on()&&!m.ly6e){sc.scrollTop=0}requestAnimationFrame(ly7fit);clearTimeout(ly7tm1);clearTimeout(ly7tm2);ly7tm1=setTimeout(ly7fit,350);ly7tm2=setTimeout(ly7fit,1300)}else document.documentElement.classList.remove('ly7');
 if(m.route==='ax5now'&&ly7on())ly7cards();
 if(m.route!=='home')document.querySelectorAll('.ly7pop').forEach(e=>e.remove());
 if(m.route==='profile'&&ly7on()){const s3=document.querySelector('.screen');if(s3&&!s3.querySelector('.ly7tour')){const at=s3.querySelector('.ly6row')||s3.querySelector('.card.prof');at&&at.insertAdjacentHTML('afterend',`<button type="button" class="ly6row ly7tour" data-act="td9help"><span class="ic">?</span><span class="tx"><b>${i(ly7t('tour'))}</b></span><em>›</em></button>`)}}
 if(m.route==='ly6'){const s2=document.querySelector('.screen.ly6');const at=s2&&s2.querySelector('#ly6nav');if(at&&!s2.querySelector('.ly7tg'))at.insertAdjacentHTML('beforebegin',`<h3 class="ly6h">▣ ${i(ly7t('one'))}</h3><button type="button" class="cv5tg ly7tg ${ly7on()?'on':''}" data-act="ly7tog"><span>${i(ly7t('oneS'))}</span><i>${ly7on()?_('check'):''}</i></button>`)}}catch{}return r})(v);
function ly7pop(){document.querySelectorAll('.ly7pop').forEach(e=>e.remove());const top=(()=>{try{return ax5pick()}catch{return[]}})(),t0=ga(0);const wt=(g.tasks||[]).filter(t=>!t.done&&t.knd==='w');const sc=document.querySelector('.screen.home2');const nC=sc?+(sc.dataset.ly7c||0):0;
 const rows=top.map(t=>`<button type="button" data-id="${t.id}" data-t="1"><span>${t.prio===1?'⭐':'☑'}</span><span>${i(t.t)}${t.due?` · <em>${i(t.due<t0?ax5t('over'):t.due===t0?ax5t('today'):ax5d(t.due))}${t.time?' '+i(t.time):''}</em>`:''}</span></button>`).join('')+(wt.length?`<button type="button" data-go="1"><span>⏳</span><span>${i(ly7t('waits',{n:wt.length}))}</span></button>`:'')+(nC?`<button type="button" data-go="1"><span>✉</span><span>${i(ly7t('msgs',{n:nC}))}</span></button>`:'')+((g.inbox||[]).length?`<button type="button" data-inb="1"><span>📥</span><span>${i(ax5t('inbox'))} · ${(g.inbox||[]).length}</span></button>`:'');
 const el=document.createElement('div');el.className='ly7pop';el.innerHTML=`<h4>${i(ax5t('now'))}</h4>${rows||`<p>${i(ly7t('calm'))}</p>`}<button type="button" class="ly7go" data-go="1">${i(ly7t('open'))}</button>`;document.body.appendChild(el);
 const close=()=>{el.remove();document.removeEventListener('pointerdown',out,!0)};const out=e=>{if(!el.contains(e.target)&&!(e.target.closest&&e.target.closest('.ly7bell')))close()};setTimeout(()=>document.addEventListener('pointerdown',out,!0),0);
 el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{close();R('ax5now')});el.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{close();L.tedit({id:b.dataset.id})});el.querySelectorAll('[data-inb]').forEach(b=>b.onclick=()=>{close();L.ax5inb()})}
L.ly7bell=function(){if(document.querySelector('.ly7pop')){document.querySelectorAll('.ly7pop').forEach(e=>e.remove());return}ly7pop()};
L.ly7tog=function(){g.ly7=!ly7on();$();try{k3keep(()=>v())}catch{v()}};
window.addEventListener('resize',()=>{if(m.route==='home')requestAnimationFrame(ly7fit)});
{const st=document.createElement('style');st.textContent=`
.ly7tg{width:calc(100% - 32px);margin:0 16px 6px}
html.ly7 .home2>section.sky{min-height:0!important;padding-bottom:2px!important;margin-bottom:calc(2px + var(--ly7sp,0px))!important;padding-top:calc(var(--ly7sp,0px) / 2)!important}
html.ly7 .home2 .st17ttl{padding-bottom:6px!important}html.ly7 .home2 .st17ttl::after{display:none}
html.ly7 .home2>.ax5home{margin:4px 16px 2px;padding:7px 14px}html.ly7 .home2>.ax5home b{font-size:15px}
html.ly7 .home2>.shead{margin-top:calc(6px + var(--ly7sp,0px))!important;margin-bottom:calc(4px + var(--ly7sp,0px) / 3)!important;min-height:0}html.ly7 .home2>.shead h3{font-size:19px!important}
html.ly7 .home2 .qgrid{gap:6px!important}
html.ly7 .home2 .qgrid.ic3g .qtile,html.ly7 .home2 .qgrid .qtile{min-height:64px!important;padding:2px 2px 4px!important;border-radius:12px}
html.ly7 .home2 .qgrid .ic3s.q{width:36px;height:36px;margin:1px 0 2px}html.ly7 .home2 .qgrid .qtile svg{width:26px;height:26px}html.ly7 .home2 .qgrid .qtile svg.st31,html.ly7 .home2 .qgrid .qtile .ic3i{width:42px!important;height:42px!important;margin:1px 0 3px!important}html.ly7 .home2 .agrid .arow>.ic{width:30px!important;height:30px!important;flex:none}html.ly7 .home2 .agrid .arow>.ic svg.st31,html.ly7 .home2 .agrid .arow>.ic svg{width:30px!important;height:30px!important}
html.ly7 .home2 .qgrid.ic3g .qtile>span:not(.qcnt):not(.soon-b):not(.ic3m),html.ly7 .home2 .qgrid .qtile>span:not(.qcnt):not(.soon-b):not(.ic3m){font-size:11.5px!important;line-height:1.1}
html.ly7 .home2 .agrid{gap:6px!important}
html.ly7 .home2 .agrid.ic3g .arow.ic3,html.ly7 .home2 .agrid .arow{min-height:40px!important;padding-top:2px!important;padding-bottom:2px!important}
html.ly7 .home2 .agrid .ic3s.a{width:32px;height:32px}html.ly7 .home2 .agrid .arow .an{font-size:14px!important}
html.ly7 .home2.ly7a3 .agrid{grid-template-columns:repeat(3,minmax(0,1fr))!important}
html.ly7 .home2.ly7a3 .agrid .arow{position:relative;gap:4px!important;padding-left:3px!important;padding-right:4px!important}
html.ly7 .home2.ly7a3 .agrid .ic3s.a{width:28px;height:28px}html.ly7 .home2.ly7a3 .agrid .arow .ic svg{width:20px;height:20px}
html.ly7 .home2.ly7a3 .agrid .arow .an{font-size:12.5px!important;line-height:1.1;-webkit-hyphens:auto;hyphens:auto}
html.ly7 .home2.ly7a3 .agrid .arow .badge{position:absolute;top:2px;right:3px;min-width:17px;height:17px;font-size:10.5px;padding:0 4px}
html.ly7 .screen.home2{overflow:hidden!important;overscroll-behavior:none}
html.ly7 body{overflow:hidden;overscroll-behavior:none}
.ax5home .ly7m{font-style:normal;min-width:24px;height:24px;padding:0 8px;border-radius:999px;background:transparent!important;border:1px solid var(--gold,#D9B96E);color:var(--ink)!important;font-size:12.5px;display:grid;place-items:center}
.ly7more{justify-content:center}
html.ly7 .home2.ly7q6 .qgrid,html.ly7 .home2.ly7q6 .qgrid.ic3g{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:calc(6px + var(--ly7sp,0px) / 2) 8px!important}
html.ly7 .home2.ly7q6 .qgrid .qtile{background:none!important;border:0!important;box-shadow:none!important;min-height:0!important;padding:0!important;gap:4px!important;justify-content:flex-start!important}
html.ly7 .home2.ly7q6 .qgrid .qtile svg.st31,html.ly7 .home2.ly7q6 .qgrid .qtile .ic3i,html.ly7 .home2.ly7q6 .qgrid .ic3s.q{width:calc(48px + var(--ly7sp,0px) / 2)!important;height:calc(48px + var(--ly7sp,0px) / 2)!important;margin:0 auto!important}
html.ly7 .home2.ly7q6 .qgrid .qtile>span:not(.qcnt):not(.soon-b):not(.ic3m):not(.ly6x){display:block!important;width:100%;line-height:1.2;white-space:nowrap;overflow:visible;text-align:center;letter-spacing:-.01em}html.ly7 .home2.ly7q6 .qgrid .qtile{overflow:visible!important}
html.ly7[data-gx^="zhem"] .home2.ly7q6>section.sky.lk5 .st38clk .skyi.st38w.gx9w,html.ly7[data-gx^="slon"] .home2.ly7q6>section.sky.lk5 .st38clk .skyi.st38w.gx9w{width:min(50vw,204px)!important}
html.ly7 .home2.ly7q6 .qgrid .qtile .qcnt{top:-4px;right:calc(50% - 36px)}
html.ly7 .home2.ly7q6 .agrid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px!important}
html.ly7 .home2.ly7q6 .agrid .arow{min-height:calc(44px + var(--ly7sp,0px) / 2)!important}
.ly7all{font-size:13.5px;margin-left:14px}
html.ly7 .home2 .shead{align-items:baseline}html.ly7 .home2 .shead .sbtns{display:flex;align-items:baseline;gap:0}
html.ly7 .home2 .st38top{padding:0 14px!important;height:48px!important}
html.ly7 .home2 .st38top .st17av,html.ly7 .home2 .st38top .ly7bell{width:42px!important;height:42px!important;font-size:17px!important;margin:0!important;transform:none!important}
html.ly7 .home2 .lk5side{box-sizing:border-box!important;width:84px!important;height:94px!important;min-height:0!important;padding:6px 4px!important;gap:4px!important;border-radius:18px!important;justify-content:center}
html.ly7 .home2 .lk5side.l{left:14px!important}html.ly7 .home2 .lk5side.r{right:14px!important}
html.ly7 .home2 .lk5side .lk5ic{width:42px;height:34px}html.ly7 .home2 .lk5side .lk5ic.s{width:24px;height:24px}
html.ly7 .home2 .lk5side b{font-size:22px!important;line-height:1}html.ly7 .home2 .lk5side small{font-size:14px!important;line-height:1.1;white-space:nowrap}
@media (hover:none){html.ly7 .home2 .arow:hover,html.ly7 .home2 .qtile:hover{border-color:var(--tile-line,var(--line))!important;filter:none!important}}
html.ly7 .home2 .agrid .arow{border-color:var(--tile-line,var(--line))}
.home2 .st38top .ly7bell{position:relative;width:40px!important;height:40px!important;border-radius:50%!important;border:1.5px solid var(--gold,#C99A3E)!important;display:grid!important;place-items:center;padding:0!important;color:var(--gold,#C99A3E)!important;background:transparent}.ly7bell svg{width:20px;height:20px}.ly7bd{position:absolute;top:-4px;right:-3px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:#E2B962;color:#141414;font:600 11.5px/19px Arial,sans-serif;text-align:center}
.ly7pop{position:fixed;top:calc(env(safe-area-inset-top,0px) + 58px);right:14px;width:min(320px,calc(100vw - 28px));z-index:80;background:var(--surface,#171410);border:1px solid color-mix(in srgb,var(--gold,#C99A3E) 55%,var(--line));border-radius:18px;padding:12px;box-shadow:0 18px 40px rgba(0,0,0,.55);color:var(--ink)}
.ly7pop h4{font-family:var(--display);font-size:21px;font-weight:600;margin:0 2px 6px}.ly7pop>p{font-size:14px;color:var(--muted);margin:4px 2px 8px}
.ly7pop>button:not(.ly7go){display:flex;gap:8px;width:100%;padding:9px 2px;border:0;border-top:1px solid color-mix(in srgb,var(--line) 60%,transparent);background:transparent;color:var(--ink);font:inherit;font-size:14.5px;text-align:left;cursor:pointer}.ly7pop>button:nth-of-type(1){border-top:0}.ly7pop em{font-style:normal;color:var(--gold,#C99A3E)}
.ly7go{display:block;width:100%;margin-top:8px;border:0;border-radius:12px;padding:10px;background:var(--gold,#C99A3E);color:#141414;font:inherit;font-weight:600;font-size:15px;cursor:pointer}.ly7more .an{color:var(--gold,#C99A3E)}
.ly7cards{margin:0 0 8px}.ly7cards>*:not(h3){margin-left:16px;margin-right:16px}
`;document.head.appendChild(st)}
