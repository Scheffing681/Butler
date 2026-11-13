/* ===== v261 Projects live inside Tasks =====
   The separate «Проекты» tile is gone from the sections; Tasks gets a «Проекты» chip next to Все · Сегодня · Выполненные,
   and the Projects screen goes back to Tasks. Projects and their data are unchanged. */
Hooks.on('section',k=>{if(k==='q:projects')return!1});
Hooks.on('screen',(html,route)=>{
 if(route==='tasks')return html.replace(/(<div class="chips">[\s\S]*?data-act="tfilter"[\s\S]*?)(<\/div>)/,(a,b,c)=>b+`<button class="chip pj1chip" data-act="pj1go">${i(ee('projects'))}</button>`+c);
 if(route==="projects")return html.replace(/data-act="go" data-to="[^"]*"/,`data-act="pj1back"`)});
Hooks.act("pj1go",()=>R("projects"));Hooks.act("pj1back",()=>R("tasks"));
