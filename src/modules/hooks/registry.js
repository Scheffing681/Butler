/* ===== Butler hooks — the one connection point for new code (clean-up step 4) =====
   New behaviour is plugged in here instead of wrapping app functions again:
     Hooks.on('screen',  (html, route) => html)   change the HTML of the screen being drawn
     Hooks.on('profile', html => html)            change the profile screen
     Hooks.on('signin',  html => html)            change the sign-in screen
     Hooks.on('route',   (route, args) => false)  before going to a screen; return false to stop
     Hooks.on('render',  () => {})                after every redraw
     Hooks.on('save',    () => {})                after the data is saved
     Hooks.on('file',    (ok, name, data) => {})  after a file was handed to the phone (ok = really saved)
     Hooks.act('name', fn)                        a button action (data-act="name"); a name that exists needs {replace:true}
     Hooks.css('id', '...css...')                 one style sheet per id
   A handler that throws is skipped and written to Hooks.errors (kept on the phone, newest 50).
   hooks/install.js — the last module — connects these to the app once. */
const Hooks={h:{},errors:[],
 on(k,fn){(this.h[k]=this.h[k]||[]).push(fn);return fn},
 run(k,val,...a){const L2=this.h[k];if(!L2)return val;for(const fn of L2){try{const r=fn(val,...a);if(r!==undefined)val=r}catch(e){this.err(k,e)}}return val},
 ask(k,...a){const L2=this.h[k];if(!L2)return!0;for(const fn of L2){try{if(fn(...a)===!1)return!1}catch(e){this.err(k,e)}}return!0},
 err(k,e){try{this.errors.push({k,m:String(e&&e.message||e).slice(0,200),t:Date.now(),v:typeof NT!=='undefined'?String(NT).split(' ')[0]:''});if(this.errors.length>50)this.errors.shift();localStorage.setItem('bh-errors',JSON.stringify(this.errors))}catch{}},
 act(name,fn,o){if(typeof L[name]==='function'&&!L[name].__bh&&!(o&&o.replace))this.err('act','name taken: '+name);fn.__bh=1;L[name]=fn;return fn},
 css(id,text){try{let s=document.getElementById('bh-'+id);if(!s){s=document.createElement('style');s.id='bh-'+id;document.head.appendChild(s)}s.textContent=text}catch(e){this.err('css',e)}}};
try{Hooks.errors=JSON.parse(localStorage.getItem('bh-errors')||'[]')}catch{}
