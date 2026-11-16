/* ===== v285 Colours stay right after leaving and returning =====
   iPhone briefly switches the system light/dark setting while it takes the app-switcher snapshot.
   The core listens to that switch with the original theme function, which drops the colours that later
   modules add on top (tiles, backgrounds) — so some cards and tabs turned dark green until the next refresh.
   Now the full (current) theme function runs right after every such switch, too.
   Now the theme is re-applied whenever the app becomes visible again and whenever the system setting
   is different from the one the colours were last computed for. */
{let th9last=null;
 const th9apply=()=>{try{th9last=k0.matches;Ws();k3keep(()=>v())}catch(e){try{Hooks.err('th9',e)}catch{}}};
 const th9soon=()=>{setTimeout(th9apply,80);setTimeout(th9apply,600)};
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')th9soon()});
 try{k0.addEventListener('change',()=>{setTimeout(th9apply,0);setTimeout(th9apply,400)})}catch{}
 window.addEventListener('pageshow',th9soon);window.addEventListener('focus',th9soon);
 Hooks.on('route',()=>{try{if(th9last!==null&&th9last!==k0.matches){th9last=k0.matches;Ws()}else if(th9last===null)th9last=k0.matches}catch{}})}
