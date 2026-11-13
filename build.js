/* Builds app.js from src/: 00-core.js (the compressed base, never edited by hand), then every file in src/modules in name order,
   then 99-end.js. Edit the modules, never app.js:   node build.js        (node build.js --check  only compares) */
const fs=require('fs'),path=require('path'),S=path.join(__dirname,'src');
const mods=fs.readdirSync(path.join(S,'modules')).filter(f=>f.endsWith('.js')).sort();
const out=[fs.readFileSync(path.join(S,'00-core.js'),'utf8'),...mods.map(f=>fs.readFileSync(path.join(S,'modules',f),'utf8')),fs.readFileSync(path.join(S,'99-end.js'),'utf8')].join('');
const target=path.join(__dirname,'app.js');
if(process.argv.includes('--check')){const same=fs.existsSync(target)&&fs.readFileSync(target,'utf8')===out;console.log(same?'app.js is up to date':'app.js differs from src/ — run node build.js');process.exit(same?0:1)}
fs.writeFileSync(target,out);console.log(`app.js built: core + ${mods.length} modules, ${(out.length/1048576).toFixed(2)} MB`);
