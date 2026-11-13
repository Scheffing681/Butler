/* ===== Butler hooks — connected once, as the outermost layer (see hooks/registry.js) ===== */
try{
 Mt=(f=>function(){return Hooks.run('screen',f.apply(this,arguments),m.route)})(Mt);
 It=(f=>function(){return Hooks.run('profile',f.apply(this,arguments))})(It);
 Yf=(f=>function(){return Hooks.run('signin',f.apply(this,arguments))})(Yf);
 R=(f=>function(){if(!Hooks.ask('route',arguments[0],arguments))return;return f.apply(this,arguments)})(R);
 v=(f=>function(){const r=f.apply(this,arguments);Hooks.run('render');return r})(v);
 $=(f=>function(){const r=f.apply(this,arguments);Hooks.run('save');return r})($);
 hl=(f=>async function(n,d){const ok=await f.apply(this,arguments);Hooks.run('file',ok,n,d);return ok})(hl);
}catch(e){try{Hooks.err('install',e)}catch{}}
