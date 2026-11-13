/* ===== v262 No twin sections =====
   «Контакты» and «Мои контакты» opened the same screen → one tile (the old one stays if it still holds its own entries).
   Two «Здоровье» tiles → one: the health hub; «Моё состояние» opens from it («Мой организм») and goes back to it.
   Документы get the Scanner at the top, so a scan starts where documents live. Off switch: g.tw1off. */
const tw1On=()=>!g.tw1off;
Hooks.on('section',k=>{if(!tw1On())return;
 if(k==='c:contacts'){try{if(!((nt('contacts')||{}).items||[]).length)return!1}catch{}}
 if(k==='q:body'){try{if(nt('health')&&!nt('health').hidden)return!1}catch{}}});
Hooks.on('screen',(html,route)=>{if(!tw1On())return;
 if(route==='body'&&nt('health'))return html.replace(/data-act="go" data-to="[^"]*"/,'data-act="tw1health"');
 if(route==='archive'&&!html.includes('tw1scan')){const t={ru:'Сфотографировать документ — ровно и чисто',de:'Dokument fotografieren — gerade und sauber',en:'Photograph a document — straight and clean'}[g.lang]||'';
  return html.replace(/(<div class="sub-hdr">[\s\S]*?<\/button><\/div>)/,`$1<button type="button" class="dcrow tw1scan" data-act="tw1scan"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10"/></svg><span class="dct"><b>${i(Yn('sc9'))}</b><small>${i(t)}</small></span><svg class="i chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>`)}});
Hooks.act('tw1health',()=>R('cat','health'));
Hooks.act('tw1scan',()=>{try{scHome()}catch(e){Hooks.err('tw1scan',e)}});
Hooks.css('no-twins','.tw1scan{margin:4px 16px 14px;width:calc(100% - 32px);border:1px solid rgba(217,185,110,.35)}.tw1scan>.i:first-child{color:#D9B96E}');
