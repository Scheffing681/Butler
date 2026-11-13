/* ===== v264 One search, and «Вернуть» after deleting =====
   Search also finds incoming letters, projects and assets (Hooks 'search').
   Any record deleted from tasks, notes, letters, events, contacts, money, projects or assets can be brought back
   for 8 seconds with «Вернуть». Off switch: g.un1off. */
const os1L={ru:{sMail:'Письма (входящие)',sProj:'Проекты',sAss:'Активы'},de:{sMail:'Eingegangene Briefe',sProj:'Projekte',sAss:'Vermögen'},en:{sMail:'Incoming letters',sProj:'Projects',sAss:'Assets'}};
try{Object.keys(TD9T).forEach(l=>Object.assign(TD9T[l],os1L[l]||os1L.en))}catch{}
Hooks.on('search',(G,q)=>{const e=td9low(q).trim();if(e.length<2)return;const has=(...a)=>td9low(a.filter(Boolean).join(' ')).includes(e),add=(k,rows)=>{if(rows.length)G.push({k,rows:rows.slice(0,8)})};
 try{add('sMail',(g.mail||[]).filter(l=>has(l.from,l.ref,l.text,l.amount)).map(l=>({ic:'mail',t:l.from||td9('sMail'),s:[l.due?td9dl(l.due):'',l.amount||''].filter(Boolean).join(' · '),act:`data-act="lk1open" data-id="${i(l.id)}"`})))}catch(x){}
 try{add('sProj',(g.projects||[]).filter(p=>has(p.name,p.note,p.goal)).map(p=>({ic:'fld',t:p.name||'—',s:'',act:`data-act="os1proj" data-id="${i(p.id)}"`})))}catch(x){}
 try{add('sAss',(U().assets||[]).filter(a=>has(a.name,a.note,a.kind)).map(a=>({ic:'star',t:a.name||'—',s:'',act:'data-act="go" data-to="assets"'})))}catch(x){}
 return G});
Hooks.act('os1proj',e=>{m.pid=e.id;R('project',e.id)});

/* ----- undo ----- */
const un1Txt={ru:['Удалено','Вернуть'],de:['Gelöscht','Zurückholen'],en:['Deleted','Undo'],pl:['Usunięto','Cofnij'],tr:['Silindi','Geri al'],fr:['Supprimé','Annuler'],es:['Eliminado','Deshacer']};
const un1Lists=()=>{let F=null;try{F=U()}catch{}return[['tasks',()=>g.tasks],['notes',()=>g.notes],['mail',()=>g.mail],['events',()=>g.events],['contacts',()=>g.contacts],['projects',()=>g.projects],['tx',()=>F&&F.tx],['bills',()=>F&&F.bills],['assets',()=>F&&F.assets],['debts',()=>F&&F.debts]]};
let un1Snap=null,un1G=null,un1Busy=!1;
function un1Take(){const s={};un1Lists().forEach(([k,f])=>{const a=f();if(Array.isArray(a))s[k]=new Map(a.filter(x=>x&&x.id!=null).map((x,n)=>[x.id,[x,n]]))});un1Snap=s;un1G=g}
function un1Check(){if(un1Busy||g.un1off||!m.logged)return un1Take();if(!un1Snap||un1G!==g)return un1Take();const gone=[];
 un1Lists().forEach(([k,f])=>{const a=f(),old=un1Snap[k];if(!Array.isArray(a)||!old)return;const now=new Set(a.map(x=>x&&x.id));old.forEach(([x,n],id)=>{if(!now.has(id))gone.push({k,f,x,n})})});
 un1Take();if(gone.length&&gone.length<=20)un1Show(gone)}
function un1Show(gone){document.querySelectorAll('.un1').forEach(x=>x.remove());const t=un1Txt[g.lang]||un1Txt.en,d=document.createElement('div');d.className='un1';
 d.innerHTML=`<span>${i(t[0])}${gone.length>1?' · '+gone.length:''}</span><button type="button">${i(t[1])}</button>`;document.body.appendChild(d);const tm=setTimeout(()=>d.remove(),8000);
 d.querySelector('button').onclick=()=>{clearTimeout(tm);d.remove();un1Busy=!0;try{gone.sort((a,b)=>a.n-b.n).forEach(({f,x,n})=>{const a=f();if(Array.isArray(a)&&!a.some(y=>y&&y.id===x.id))a.splice(Math.min(n,a.length),0,x)});$();v()}catch(e){Hooks.err('un1',e)}finally{un1Busy=!1;un1Take()}}}
Hooks.on('save',()=>{try{un1Check()}catch(e){Hooks.err('un1check',e)}});
setTimeout(()=>{try{un1Take()}catch{}},800);
Hooks.css('undo','.un1{position:fixed;left:16px;right:16px;bottom:calc(env(safe-area-inset-bottom,0px) + 104px);z-index:99990;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px 12px 18px;border-radius:18px;background:rgba(28,26,22,.96);border:1px solid rgba(217,185,110,.4);color:#F3EBDD;font-size:15px;box-shadow:0 10px 30px rgba(0,0,0,.45)}.un1 button{border:0;border-radius:12px;padding:9px 16px;background:#D9B96E;color:#1a1408;font-weight:600;font-size:15px}');
/* notes without text (photo, voice, drawing) broke the old search: give them an empty text */
const os1fix=()=>{try{(g.notes||[]).forEach(n=>{if(n&&typeof n.text!=='string')n.text=''})}catch{}};
Hooks.on('route',r=>{if(r==='search')os1fix()});Hooks.on('save',os1fix);os1fix();
