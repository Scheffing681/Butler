/* ===== v268 One greeting everywhere =====
   Профиль → «Обращение и имя» → «Приветствие» (g.user.l1) replaces the time-of-day greeting in the Butler chat and the report too,
   the same way it does on the home screen. Empty field → «Доброе утро / Добрый день …» as before. */
const gr1=()=>{try{return String(g.user&&g.user.l1||'').trim().replace(/[,\s]+$/,'')}catch{return''}};
Hooks.on('screen',(html,route)=>{if(route!=='concierge')return;const w=gr1();if(!w)return;let t='';try{t=K('gt').split(',')[0]}catch{}if(!t)return;
 return html.replace(i(t)+', '+i(g.user.short||''),i(w)+', '+i(g.user.short||'')).replace(t+', '+(g.user.short||''),w+', '+(g.user.short||''))});
Hooks.on('greeting',str=>{const w=gr1();if(!w||typeof str!=='string')return;const p=str.indexOf(', ');return p>0&&p<30?w+str.slice(p):w+'.'});
