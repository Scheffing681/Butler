/* ===== Butler hooks — connected once, as the outermost layer (see hooks/registry.js) ===== */
try{
 Mt=(f=>function(){return Hooks.run('screen',f.apply(this,arguments),m.route)})(Mt);
 It=(f=>function(){return Hooks.run('profile',f.apply(this,arguments))})(It);
 Yf=(f=>function(){return Hooks.run('signin',f.apply(this,arguments))})(Yf);
 R=(f=>function(){if(!Hooks.ask('route',arguments[0],arguments))return;return f.apply(this,arguments)})(R);
 v=(f=>function(){const r=f.apply(this,arguments);Hooks.run('render');return r})(v);
 $=(f=>function(){const r=f.apply(this,arguments);Hooks.run('save');return r})($);
 h9has=(f=>function(k){return f.apply(this,arguments)&&Hooks.ask('section',k)})(h9has);
 x_=(f=>function(){return(f.apply(this,arguments)||[]).filter(k=>Hooks.ask('section',k))})(x_);
 td9find=(f=>function(q){return Hooks.run('search',f.apply(this,arguments)||[],q)})(td9find);
 hl=(f=>async function(n,d){const ok=await f.apply(this,arguments);Hooks.run('file',ok,n,d);return ok})(hl);
}catch(e){try{Hooks.err('install',e)}catch{}}
/* the same 'screen' hook for inner screens (each on its own, so one failure cannot stop the others) */
{const scr=f=>function(){return Hooks.run('screen',f.apply(this,arguments),m.route)};
 try{H0=scr(H0)}catch(e){Hooks.err('install fin',e)}
 try{Sm=scr(Sm)}catch(e){Hooks.err('install tasks',e)}
 try{ad=scr(ad)}catch(e){Hooks.err('install projects',e)}
 try{Ki=scr(Ki)}catch(e){Hooks.err('install assets',e)}
 try{tp=scr(tp)}catch(e){Hooks.err('install body',e)}
 try{Ax=scr(Ax)}catch(e){Hooks.err('install archive',e)}
 try{K$=(f=>function(){return Hooks.run('greeting',f.apply(this,arguments))})(K$)}catch(e){Hooks.err('install greeting',e)}
 try{S0=scr(S0)}catch(e){Hooks.err('install chat',e)}
 try{Yj=scr(Yj)}catch(e){Hooks.err('install kbset',e)}}
