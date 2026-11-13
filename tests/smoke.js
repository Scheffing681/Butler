/* Butler smoke test — run before every release:  node tests/smoke.js
   Serves a copy of the app (with a line that exposes its internals to the test), drives it in Chrome
   at iPhone size and fails loudly on anything that broke. Nothing here ships to users. */
const fs=require('fs'),path=require('path'),http=require('http'),os=require('os');
const ROOT=path.resolve(__dirname,'..');
const PW=process.env.PLAYWRIGHT||'/opt/npm-tools/node_modules/playwright';
const CHROME=process.env.CHROME||'/usr/bin/google-chrome';
const {chromium}=require(PW);

/* ---------- a private copy of the app with a test hook ---------- */
const TMP=fs.mkdtempSync(path.join(os.tmpdir(),'butler-smoke-'));
const copy=(s,d)=>{for(const n of fs.readdirSync(s)){if(n==='.git'||n==='tests')continue;const a=path.join(s,n),b=path.join(d,n);fs.statSync(a).isDirectory()?(fs.mkdirSync(b),copy(a,b)):fs.copyFileSync(a,b)}};
copy(ROOT,TMP);
{const f=path.join(TMP,'app.js');let s=fs.readFileSync(f,'utf8');const end='v(),Sq()})();',i=s.trimEnd().lastIndexOf(end);
 if(i<0)throw new Error('app.js end marker not found');
 s=s.slice(0,i)+'try{window.__T={L,g:()=>g,m:()=>m,R:(...a)=>R(...a),v:()=>v(),save:()=>$(),x:()=>x_(),h9go:k=>h9go(k),hh:()=>hh(),vt,Ic,bd8C,BD8T,NT,Hooks,sc:{scDetect,scWarp,scClean,scSmooth,scHome}}}catch(e){}\n'+s.slice(i);fs.writeFileSync(f,s)}
const MIME={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2','.ttf':'font/ttf'};
const srv=http.createServer((q,r)=>{const u=decodeURIComponent(q.url.split('?')[0]);const f=path.join(TMP,u==='/'?'index.html':u);if(!f.startsWith(TMP)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);return r.end()}r.writeHead(200,{'content-type':MIME[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)});

/* ---------- checks ---------- */
const results=[];let failed=0;
const check=(name,ok,detail)=>{results.push([ok?'PASS':'FAIL',name,detail||'']);if(!ok)failed++};
/* no new wrapper layers: new code plugs into Hooks (src/modules/hooks/registry.js); the number may only go down */
{const order=fs.readFileSync(path.join(ROOT,'src','order.txt'),'utf8').split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('#')&&!l.startsWith('hooks/'));
 let n=0;for(const f of order)n+=(fs.readFileSync(path.join(ROOT,'src','modules',f),'utf8').match(/(?<![\w$.])[A-Za-z_$][\w$]*(?:\.[\w$]+)?=\((?:f|e)=>(?:async )?function/g)||[]).length;
 const base=+fs.readFileSync(path.join(__dirname,'wrappers-baseline.txt'),'utf8').trim();check('no new wrapper layers (use Hooks)',n<=base,`${n} wrappers, limit ${base}`);
 if(n<base)fs.writeFileSync(path.join(__dirname,'wrappers-baseline.txt'),String(n)+'\n')}
/* app.js must be exactly what src/ builds — nobody edits app.js by hand */
{const {execFileSync}=require('child_process');let ok=true;try{execFileSync(process.execPath,[path.join(ROOT,'build.js'),'--check'],{stdio:'pipe'})}catch{ok=false}check('app.js is built from src/',ok,ok?'':'run node build.js')}

(async()=>{await new Promise(r=>srv.listen(0,r));const URL0=`http://localhost:${srv.address().port}/index.html`;
 const b=await chromium.launch({executablePath:CHROME,args:['--no-sandbox']});
 const ctx=await b.newContext({viewport:{width:393,height:852},locale:'ru-RU',serviceWorkers:'block',acceptDownloads:true});
 const p=await ctx.newPage();const errs=[];let where='start';
 p.on('pageerror',e=>errs.push(where+': '+e.message.slice(0,160)));
 p.on('console',m=>{if(m.type()==='error'&&!/Failed to load resource|ERR_|net::/.test(m.text()))errs.push(where+': console '+m.text().slice(0,160))});
 await p.addInitScript(()=>{navigator.canShare=()=>true;navigator.share=async()=>{}});
 const T=(fn,arg)=>p.evaluate(fn,arg);
 const login=async()=>{for(let k=0;k<12;k++){let ok=false;try{ok=await T(()=>!!(window.__T&&window.__T.m().logged))}catch{await p.waitForTimeout(1200);continue}if(ok)break;try{await T(()=>document.querySelector('[data-act=face]')?.click())}catch{}await p.waitForTimeout(1600)}await T(()=>document.querySelectorAll('#td9tour').forEach(t=>t.remove()))};
 const kind=()=>T(()=>document.querySelector('.screen.bd8s')?'design':document.querySelector('.screen.home2')?'old-home':'screen');

 await p.goto(URL0);await p.waitForTimeout(2000);
 await p.locator('input:visible').last().fill('Тест');await p.getByText('Начать',{exact:true}).click();await p.waitForTimeout(1000);await login();
 check('sign in',await T(()=>window.__T.m().logged));

 /* version numbers agree, so the «new version» banner cannot loop */
 const sw=fs.readFileSync(path.join(ROOT,'sw.js'),'utf8').match(/butler-v(\d+)/)[1],idx=fs.readFileSync(path.join(ROOT,'index.html'),'utf8').match(/app\.js\?v=(\d+)/)[1],nt=String(await T(()=>window.__T.NT)).split(' ')[0];
 check('version numbers agree (sw / index / app)',sw===idx&&idx===nt,`sw ${sw} · index ${idx} · app ${nt}`);
 await p.waitForTimeout(4500);check('no update banner on a fresh start',!(await T(()=>!!document.querySelector('.upbar'))));

 /* every screen and every section opens without errors and never falls back to the old home */
 const routes=['home','search','stats','profile','bd9all','bd8','style','ly6','goals','mycal','tasks','notes','pv','td9today'];
 for(const r of routes){where='route '+r;await T(r=>window.__T.R(r),r);await p.waitForTimeout(350);const k=await kind();if(r!=='home')check('screen '+r+' is not the old home',k!=='old-home',k)}
 await T(()=>window.__T.L.f12solo());await p.waitForTimeout(300);
 const keys=await T(()=>window.__T.x());check('sections listed',keys.length>=25,keys.length+' sections');
 for(const k of keys){where='section '+k;await T(k=>{window.__T.R('home');window.__T.h9go(k)},k);await p.waitForTimeout(300);
  const st=await T(()=>({old:!!document.querySelector('.screen.home2'),sc:!!document.querySelector('.sc9'),sheet:!!document.querySelector('.dtsheet')}));
  check('section '+k+' opens',!st.old||st.sc||st.sheet,st.old?'shows the old home':'');
  await T(()=>{document.querySelectorAll('.dtsheet').forEach(s=>s.remove());window.__T.R('home')});await p.waitForTimeout(150)}
 where='after sections';check('scanner window closes when the screen changes',!(await T(()=>!!document.querySelector('.sc9'))));
 await T(()=>window.__T.L.f12grp&&(window.confirm=()=>true,window.__T.L.f12grp()));

 /* buttons on every visible screen have an action behind them */
 const dead=await T(()=>{const L=window.__T.L,out=new Set();document.querySelectorAll('[data-act]').forEach(e=>{if(typeof L[e.dataset.act]!=='function')out.add(e.dataset.act)});return[...out]});
 check('home buttons all have an action',!dead.length,dead.join(', '));

 /* scanner: its home page has every kind, and the image pipeline turns a photo of a sheet into a clean page */
 where='scanner';await T(()=>window.__T.sc.scHome());await p.waitForTimeout(500);
 const kinds=await T(()=>[...document.querySelectorAll('.sc9home [data-a]')].map(b=>b.dataset.a));check('scanner home offers every kind',['cam','book','board','files','id','bcard','arc'].every(k=>kinds.includes(k)),kinds.join(','));
 await T(()=>window.__T.R('home'));
 const pipe=await T(()=>{try{const c=document.createElement('canvas');c.width=900;c.height=1200;const x=c.getContext('2d');x.fillStyle='#2a3a4a';x.fillRect(0,0,900,1200);x.save();x.translate(450,600);x.rotate(.06);x.fillStyle='#e8e4dc';x.fillRect(-330,-460,660,920);x.fillStyle='#222';x.font='22px serif';for(let k=0;k<26;k++)x.fillText('Der Bescheid ist nach § 165 AO teilweise vorläufig '+k,-300,-420+k*34);x.restore();
  const S=window.__T.sc,det=S.scDetect(c,900,1200,640);if(!det)return'no sheet found';const q=det.q.map(p=>[p[0]*900,p[1]*1200]);const flat=S.scWarp(c,q,null),sm=S.scSmooth(flat),out=S.scClean(sm,'doc',true);
  const d=out.getContext('2d').getImageData(0,0,out.width,out.height).data;let w=0;for(let k=0;k<d.length;k+=4*37)if(d[k]>235&&d[k+1]>235&&d[k+2]>235)w++;return{w:out.width,h:out.height,white:w/(d.length/(4*37))}}catch(e){return'error: '+e.message}});
 check('scanner turns a photo of a sheet into a clean page',typeof pipe==='object'&&pipe.white>.6&&pipe.h>pipe.w,JSON.stringify(pipe));
 /* make entries, back up, change, restore, bring back */
 where='data';
 await T(()=>{const g=window.__T.g();g.tasks=g.tasks||[];g.tasks.push({id:'smk1',t:'Смоук: задача',due:'',prio:2,proj:'',done:false});g.notes=g.notes||[];g.notes.push({id:'smk2',t:'Смоук: заметка',x:'текст',ts:Date.now()});window.__T.save()});
 await T(()=>window.__T.hh());await p.waitForTimeout(500);await T(()=>document.querySelector('.dtsheet [data-x=no]')?.click());await p.waitForTimeout(2500);
 check('a copy is made',!!(await T(()=>window.__T.g().bkLast)));
 await T(()=>{const g=window.__T.g();g.tasks=[{id:'smk3',t:'Смоук: после копии',due:'',prio:2,proj:'',done:false}];window.__T.save();window.__T.R('profile')});await p.waitForTimeout(600);
 const card=await T(()=>document.querySelector('.card.st53')?.innerText||'');check('«Защита данных» card is shown',/Защита данных/.test(card));
 await T(()=>document.querySelector('.card.st53 [data-act=bkrestore]').click());await p.waitForTimeout(800);
 const hasIn=await T(()=>!!document.querySelector('.dtsheet [data-x=in]'));check('restore offers the copy kept on the phone',hasIn);
 if(hasIn){await T(()=>document.querySelector('.dtsheet [data-x=in]').click());await p.waitForTimeout(800);
  await Promise.all([p.waitForEvent('load',{timeout:15000}).catch(()=>null),T(()=>document.querySelector('.dtsheet [data-x=go]')?.click())]);await p.waitForTimeout(2200);await login();
  const t=await T(()=>window.__T.g().tasks.map(x=>x.t));check('restore brings the copy back',t.includes('Смоук: задача')&&!t.includes('Смоук: после копии'),t.join(' | '));
  await T(()=>window.__T.R('profile'));await p.waitForTimeout(600);
  const undo=await T(()=>!!document.querySelector('[data-act=st53undo]'));check('«Вернуть как было» is offered after a restore',undo);
  if(undo){p.once('dialog',d=>d.accept());await Promise.all([p.waitForEvent('load',{timeout:15000}).catch(()=>null),T(()=>document.querySelector('[data-act=st53undo]').click())]);await p.waitForTimeout(2200);await login();
   const t2=await T(()=>window.__T.g().tasks.map(x=>x.t));check('«Вернуть как было» brings the data back',t2.includes('Смоук: после копии'),t2.join(' | '))}}

 /* folders: make one by dropping a section on another, then undo */
 where='folders';await T(()=>{window.__T.R('bd9all')});await p.waitForTimeout(500);await T(()=>document.querySelector('[data-act=bd9edit]')?.click());await p.waitForTimeout(500);
 await T(()=>window.__T.L.f12solo());await p.waitForTimeout(500);
 const tiles=p.locator('.screen.bd9 .bd9b[data-f12k]');const n0=await tiles.count();
 if(n0>3){const a=await tiles.nth(2).boundingBox(),c=await tiles.nth(0).boundingBox();await p.mouse.move(a.x+a.width/2,a.y+a.height/2);await p.mouse.down();await p.waitForTimeout(400);
  for(let s=1;s<=10;s++){await p.mouse.move(a.x+a.width/2+(c.x-a.x)*s/10,a.y+a.height/2+(c.y-a.y)*s/10);await p.waitForTimeout(25)}await p.mouse.up();await p.waitForTimeout(700)}
 const n1=await tiles.count();check('drag a section onto another makes a folder',n1===n0-1,`${n0} → ${n1}`);
 await T(()=>document.querySelector('[data-act=f12undo]')?.click());await p.waitForTimeout(600);check('undo takes the folder apart',(await tiles.count())===n0);
 await T(()=>{window.confirm=()=>true;window.__T.L.f12grp()});

 where='end';check('no errors in the app',!errs.length,errs.slice(0,8).join(' || '));
 const he=await T(()=>window.__T.Hooks.errors);check('no errors inside hooks',!he.length,JSON.stringify(he).slice(0,300));
 await b.close();srv.close();fs.rmSync(TMP,{recursive:true,force:true});
 const w=Math.max(...results.map(r=>r[1].length));for(const [s,n,d] of results)if(s==='FAIL'||process.env.VERBOSE)console.log(s,n.padEnd(w),d);
 console.log(`\n${results.length-failed} passed, ${failed} failed`);process.exit(failed?1:0)})().catch(e=>{console.error('SMOKE CRASHED',e);srv.close();process.exit(2)});
