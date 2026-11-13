/* ===== v270 Real Earth colours =====
   The travel globe and map were dark green all over. Now: blue sea, green land, white ice (Antarctica, Greenland),
   light borders; visited countries stay gold, dreams keep the dashed gold line. Off switch: g.re1off.
   The drawing lives in the compressed core (CH), so only its colours are swapped; if the core changes and a colour
   is not found, the old drawing stays untouched. */
function re1land(id,sel){if(g.re1off)return sel?'#3c6a57':'#1f3d31';if(id==='ATA'||id==='GRL')return sel?'#ffffff':'#e6edf1';return sel?'#a3c97f':'#7aa95b'}
try{const src=String(CH),SW=[
 ['k.fillStyle="#0c2219"','k.fillStyle=g.re1off?"#0c2219":"#4a90c2"'],
 ['ue.addColorStop(0,"#1d4536"),ue.addColorStop(1,"#07140f")','ue.addColorStop(0,g.re1off?"#1d4536":"#6fb3e0"),ue.addColorStop(1,g.re1off?"#07140f":"#1d5a8c")'],
 ['k.strokeStyle="rgba(201,164,92,.10)"','k.strokeStyle=g.re1off?"rgba(201,164,92,.10)":"rgba(255,255,255,.16)"'],
 ['G?"#3c6a57":"#1f3d31"','re1land(ue.id,G)'],
 ['X?"#8a6d33":"rgba(201,164,92,.38)"','X?"#8a6d33":g.re1off?"rgba(201,164,92,.38)":"rgba(255,255,255,.6)"']];
 if(SW.every(([a])=>src.split(a).length===2)){let s=src;SW.forEach(([a,b])=>{s=s.replace(a,b)});CH=eval('('+s+')')}
 else Hooks.err('re1','globe colours not found')}catch(e){Hooks.err('re1',e)}
