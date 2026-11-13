/* Which modules touch the same things? Used before moving a module past others: an empty overlap means the order does not matter.
   node tests/overlap.js 17 24      → what modules 17 and 24 (by line in src/order.txt, or a name like scanner) share
   node tests/overlap.js            → every pair that shares something */
const acorn=require(process.env.ACORN||'/opt/npm-tools/node_modules/acorn'),walk=require(process.env.ACORN_WALK||'/opt/npm-tools/node_modules/acorn-walk');
const fs=require('fs'),path=require('path'),D=path.join(__dirname,'..','src','modules');
const files=fs.readFileSync(path.join(__dirname,'..','src','order.txt'),'utf8').split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('#'));
function facts(f){const s=fs.readFileSync(path.join(D,f),'utf8');const F={assign:new Set(),lprop:new Set(),ev:new Set(),css:new Set()};
 let ast;try{ast=acorn.parse('(async function(){'+s+'\n})',{ecmaVersion:'latest'})}catch(e){F.err=e.message;return F}
 walk.fullAncestor(ast,(n,_,anc)=>{const inFn=anc.slice(3,-1).some(x=>/Function/.test(x.type));
  if(n.type==='AssignmentExpression'&&!inFn){if(n.left.type==='Identifier')F.assign.add(n.left.name);
   if(n.left.type==='MemberExpression'&&n.left.object.type==='Identifier'&&n.left.object.name==='L'&&!n.left.computed)F.lprop.add(n.left.property.name)}
  if(n.type==='CallExpression'&&n.callee.type==='MemberExpression'&&n.callee.object.name==='Object'&&n.callee.property.name==='assign'&&n.arguments[0]&&n.arguments[0].name==='L'&&n.arguments[1]&&n.arguments[1].type==='ObjectExpression')
   for(const p of n.arguments[1].properties)if(p.key)F.lprop.add(p.key.name||p.key.value);
  if(!inFn&&n.type==='CallExpression'&&n.callee.type==='MemberExpression'&&n.callee.property.name==='addEventListener'&&n.arguments[0]&&n.arguments[0].type==='Literal'){const tgt=n.callee.object.type==='Identifier'?n.callee.object.name:'?';F.ev.add(tgt+':'+n.arguments[0].value)}});
 /* class names that appear in CSS rules inside the module */
 for(const m of s.matchAll(/(?:^|[}\s,>~+(])\.([a-zA-Z][\w-]*)[^{};]*\{/g))F.css.add(m[1]);
 return F}
const all=Object.fromEntries(files.map((f,i)=>[String(i+1).padStart(2,'0')+':'+f.replace(/\.js$/,''),{f,...facts(f)}]));
const key=a=>Object.keys(all).find(k=>k===a||k.startsWith(String(a).padStart(2,'0')+':')||k.endsWith(':'+a)||k.includes(a));
const inter=(a,b)=>[...a].filter(x=>b.has(x));
function share(a,b){const A=all[key(a)],B=all[key(b)];return{assign:inter(A.assign,B.assign),lprop:inter(A.lprop,B.lprop),ev:inter(A.ev,B.ev).filter(e=>!/:(input|change|keydown)$/.test(e)),css:inter(A.css,B.css)}}
const show=(a,b)=>{const s=share(a,b),n=Object.values(s).reduce((k,x)=>k+x.length,0);if(n)console.log(`${a} × ${b}: `+Object.entries(s).filter(([k,v])=>v.length).map(([k,v])=>k+' '+v.slice(0,12).join(',')).join(' | '));return n};
const args=process.argv.slice(2);
if(args.length>=2){for(const b of args.slice(1))show(args[0],b)}else{const ks=Object.keys(all);for(let i=0;i<ks.length;i++)for(let j=i+1;j<ks.length;j++)show(ks[i],ks[j])}
if(Object.values(all).some(x=>x.err))console.log('parse errors:',Object.values(all).filter(x=>x.err).map(x=>x.f+' '+x.err));
module.exports={all,share};
