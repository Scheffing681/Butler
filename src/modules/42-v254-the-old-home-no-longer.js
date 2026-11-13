/* v254: the old home no longer jumps in. «Быстрый ввод» opened a route that does not exist, and every unknown route fell back to
   the old home; now «Быстрый ввод» opens its sheet, and an unknown route shows the chosen home design */
try{
 h9go=(f=>function(k){if(k==='q:qin'){try{L.st20()}catch{}return}return f.apply(this,arguments)})(h9go);
 Mt=(f=>function(){const out=f.apply(this,arguments);try{if(!m.logged||m.bd8raw||m.ly6e||m.route==='home')return out;const c=bd8C();if(c.on&&c.cfg&&typeof out==='string'&&out.indexOf('<div class="screen home2"')===0){m.route='home';return`<div class="screen bd8s">${bd8home(c.cfg)}</div>`}}catch{}return out})(Mt);
}catch(e){}
