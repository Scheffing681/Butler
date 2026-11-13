/* ===== v261 One finance section =====
   «Финансовая книга» and «Финансы» always kept the same money (g.fin). Now there is one door, called «Финансы»:
   the book is the front page; the old Finance screen is its inner room (Покупка · Капитал · Развитие) without the
   repeated overview; «Мои активы» is reached from Капитал. Nothing in the data changes.
   Old look: book settings → «Прежний вид» (g.fin1off). */
const fin1Name={ru:'Финансы',de:'Finanzen',en:'Finance',pl:'Finanse',tr:'Finans',fr:'Finances',es:'Finanzas'};
const fin1Old={};
const fin1On=()=>!g.fin1off;
function fin1Names(){try{Object.keys(fin1Name).forEach(l=>{
 if(Yr[l]){if(!(l in fin1Old))fin1Old[l]=Yr[l].title;Yr[l].title=fin1On()?fin1Name[l]:fin1Old[l]}
 if(hs[l])hs[l].cat_kb=Yr[l]?Yr[l].title:fin1Name[l]})}catch(e){Hooks.err('fin1names',e)}}
fin1Names();
Hooks.on('section',k=>{if(fin1On()&&(k==='q:fin'||k==='q:assets'))return!1});
Hooks.on('route',r=>{if(fin1On()&&r==='fin'&&(!m.ftab||m.ftab==='ov'))m.ftab='cap'});
Hooks.on('screen',(html,route)=>{if(!fin1On())return;
 if(route==='fin'){
  html=html.replace(/<button type="button" class="dcrow kbfinl"[\s\S]*?<\/button>/,'')
   .replace(/<button class="chip[^"]*" data-act="ftab" data-v="ov"[^>]*>[\s\S]*?<\/button>/,'')
   .replace('data-act="go" data-to="home"','data-act="kbhome"');
  const on=html.match(/<button class="chip on" data-act="ftab"[^>]*>([^<]*)<\/button>/);
  if(on)html=html.replace(/<div class="ttl"><h2>[^<]*<\/h2>/,'<div class="ttl"><h2>'+on[1]+'</h2>');
  return html}
 if(route==='assets')return html.replace('data-act="go" data-to="home"','data-act="fin1cap"');
 if(route==='kbset')return html.replace(/<\/div>\s*$/,fin1Row()+'</div>')});
Hooks.on('screen',(html,route)=>{if(route==='kbset'&&!fin1On())return html.replace(/<\/div>\s*$/,fin1Row()+'</div>')});
function fin1Row(){const t={ru:['Один раздел «Финансы»','Книга и Финансы как одно целое. Выключите, чтобы вернуть прежний вид: два раздела.'],de:['Ein Bereich «Finanzen»','Buch und Finanzen als ein Ganzes. Ausschalten = alte Ansicht mit zwei Bereichen.'],en:['One «Finance» section','Book and Finance as one. Turn off to get the old look with two sections.']}[g.lang]||null;
 const x=t||['Один раздел «Финансы»','Выключите, чтобы вернуть прежний вид.'];
 return`<button type="button" class="dcrow fin1row" data-act="fin1t"><span class="dct"><b>${x[0]}</b><small>${x[1]}</small></span><span class="fin1sw${fin1On()?' on':''}"><i></i></span></button>`}
Hooks.act('fin1t',()=>{g.fin1off=fin1On()?1:0;fin1Names();$();v()});
Hooks.act('fin1cap',()=>{m.ftab='cap';R('fin')});
Hooks.css("one-finance",`.fin1row{margin:18px 16px 30px;width:calc(100% - 32px);background:rgba(255,255,255,.05);border:1px solid rgba(217,185,110,.25);border-radius:18px;padding:14px 16px;display:flex;align-items:center;gap:12px;text-align:left;color:inherit}.fin1sw{flex:none;width:46px;height:28px;border-radius:14px;background:rgba(255,255,255,.14);position:relative;transition:.2s}.fin1sw i{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:.2s}.fin1sw.on{background:#D9B96E}.fin1sw.on i{left:21px}`);
