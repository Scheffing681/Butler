/* Next version in all three places at once (sw.js cache name, index.html ?v=, app.js NT) — so they can never drift apart again.
   node tests/bump.js            → 257 → 258, today's date
   node tests/bump.js 300        → set an exact number */
const fs=require('fs'),path=require('path'),R=path.resolve(__dirname,'..');
const rd=f=>fs.readFileSync(path.join(R,f),'utf8'),wr=(f,s)=>fs.writeFileSync(path.join(R,f),s);
let sw=rd('sw.js'),ix=rd('index.html'),ap=rd('app.js');
const cur=+sw.match(/butler-v(\d+)/)[1],next=process.argv[2]?+process.argv[2]:cur+1;
const d=new Date(),date=`${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`;
sw=sw.replace(/butler-v\d+/g,'butler-v'+next).replace(/v=\d+/g,'v='+next);
ix=ix.replace(/(app\.(?:js|css)\?v=)\d+/g,'$1'+next);
if(!/const NT="\d+ · [\d.]+"/.test(ap))throw new Error('NT not found in app.js');
ap=ap.replace(/const NT="\d+ · [\d.]+"/,`const NT="${next} · ${date}"`);
wr('sw.js',sw);wr('index.html',ix);wr('app.js',ap);console.log(`version ${cur} → ${next} · ${date}`);
