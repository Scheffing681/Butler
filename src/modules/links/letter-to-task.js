/* ===== v263 Links between sections: a letter with a deadline becomes a task =====
   Every open letter (g.mail) with a due date gets one task (task.ml = letter id). The task row shows ✉ — tap opens the letter.
   Letter answered/closed → its task is done; letter deleted → its open task goes too. Off switch: g.lk1off. */
const lk1T={ru:['Письмо','ответить или оплатить'],de:['Brief','beantworten oder bezahlen'],en:['Letter','reply or pay'],pl:['List','odpowiedzieć lub zapłacić'],tr:['Mektup','yanıtla veya öde'],fr:['Lettre','répondre ou payer'],es:['Carta','responder o pagar']};
let lk1busy=!1;
function lk1sync(){if(g.lk1off||lk1busy||!Array.isArray(g.tasks)||!Array.isArray(g.mail))return!1;let ch=!1;const today=x(new Date),t=lk1T[g.lang]||lk1T.en;
 for(const l of g.mail){if(!l||!l.due)continue;const tk=g.tasks.find(q=>q.ml===l.id);
  if(l.status==='open'){if(!tk&&l.due>=today){g.tasks.push({id:V(),t:`${t[0]}${l.from?' · '+l.from:''} — ${t[1]}`,due:l.due,time:'',prio:1,proj:'',done:!1,ml:l.id});ch=!0}
   else if(tk&&!tk.done&&tk.due!==l.due){tk.due=l.due;ch=!0}}
  else if(tk&&!tk.done){tk.done=!0;ch=!0}}
 const ids=new Set(g.mail.map(l=>l&&l.id));const n0=g.tasks.length;g.tasks=g.tasks.filter(q=>!q.ml||q.done||ids.has(q.ml));if(g.tasks.length!==n0)ch=!0;
 return ch}
Hooks.on('save',()=>{if(lk1busy)return;try{if(lk1sync()){lk1busy=!0;try{$()}finally{lk1busy=!1}}}catch(e){Hooks.err('lk1sync',e)}});
setTimeout(()=>{try{if(lk1sync()){$();m.logged&&v()}}catch(e){Hooks.err('lk1start',e)}},1500);
Hooks.on('screen',(html,route)=>{if(route!=='tasks'||g.lk1off)return;
 return html.replace(/<button class="body" data-act="tedit" data-id="([^"]+)">([\s\S]*?)<\/button><\/div>/g,(a,id,b)=>{const tk=g.tasks.find(q=>q.id===id);if(!tk||!tk.ml||!J1(tk.ml))return a;
  return`<button class="body" data-act="tedit" data-id="${id}">${b}</button><button type="button" class="lk1m" data-act="lk1open" data-id="${i(tk.ml)}" aria-label="✉">✉</button></div>`})});
Hooks.act('lk1open',e=>{try{xl(e.id)}catch(er){Hooks.err('lk1open',er)}});
Hooks.css('letter-to-task','.task .lk1m{flex:none;align-self:center;width:38px;height:38px;border-radius:12px;border:1px solid rgba(217,185,110,.35);background:transparent;color:#D9B96E;font-size:17px;margin-left:6px}');
