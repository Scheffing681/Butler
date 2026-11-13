/* Builds app.js from src/: 00-core.js (the compressed base, never edited by hand), then the modules in the order of src/order.txt,
   then 99-end.js. Edit the modules, never app.js:   node build.js        (node build.js --check  only compares) */
const fs=require('fs'),path=require('path'),S=path.join(__dirname,'src');
const mods=fs.readFileSync(path.join(S,'order.txt'),'utf8').split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('#'));
{const listed=new Set(mods),walkd=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walkd(path.join(d,e.name)):[path.relative(path.join(S,'modules'),path.join(d,e.name))]);const loose=walkd(path.join(S,'modules')).filter(f=>f.endsWith('.js')&&!listed.has(f));if(loose.length){console.error('not in src/order.txt: '+loose.join(', '));process.exit(1)}}
const out=[fs.readFileSync(path.join(S,'00-core.js'),'utf8'),...mods.map(f=>fs.readFileSync(path.join(S,'modules',f),'utf8')),fs.readFileSync(path.join(S,'99-end.js'),'utf8')].join('');
const target=path.join(__dirname,'app.js');
if(process.argv.includes('--check')){const same=fs.existsSync(target)&&fs.readFileSync(target,'utf8')===out;console.log(same?'app.js is up to date':'app.js differs from src/ — run node build.js');process.exit(same?0:1)}
fs.writeFileSync(target,out);console.log(`app.js built: core + ${mods.length} modules, ${(out.length/1048576).toFixed(2)} MB`);
