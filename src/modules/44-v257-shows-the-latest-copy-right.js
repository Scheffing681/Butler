/* v257: «Восстановить из копии» shows the latest copy right away. Every copy saved to Files is also kept on this phone (the newest one only);
   the iPhone does not let an app look into Files by itself, so a copy from another place is still picked with «Выбрать файл» */
try{
 const S57={t:['Восстановить из копии','Aus Sicherung wiederherstellen','Restore from a copy','Przywróć z kopii','Yedekten geri yükle','Restaurer une copie','Restaurar una copia'],
  here:['Последняя копия на этом телефоне','Letzte Sicherung auf diesem Telefon','Latest copy on this phone','Ostatnia kopia na tym telefonie','Bu telefondaki son yedek','Dernière copie sur ce téléphone','Última copia en este teléfono'],
  lock:['с паролем','mit Passwort','with a password','z hasłem','parolalı','avec mot de passe','con contraseña'],
  go:['Восстановить эту копию','Diese Sicherung wiederherstellen','Restore this copy','Przywróć tę kopię','Bu yedeği geri yükle','Restaurer cette copie','Restaurar esta copia'],
  file:['Выбрать файл копии в «Файлах»…','Sicherungsdatei in «Dateien» wählen …','Pick a copy file in Files…','Wybierz plik kopii w «Plikach»…','«Dosyalar»dan yedek seç…','Choisir un fichier dans «Fichiers»…','Elegir un archivo en «Archivos»…'],
  fileS:['Для копии с другого телефона или более старой. Она называется silentium-дата.json.','Für eine Sicherung von einem anderen Telefon oder eine ältere. Name: silentium-Datum.json.','For a copy from another phone or an older one. It is called silentium-date.json.','Dla kopii z innego telefonu lub starszej. Nazwa: silentium-data.json.','Başka telefondan ya da daha eski bir yedek için. Adı: silentium-tarih.json.','Pour une copie d’un autre téléphone ou plus ancienne. Nom : silentium-date.json.','Para una copia de otro teléfono o más antigua. Nombre: silentium-fecha.json.']};
 const s57=k=>cv5n(S57[k]);
 const db57=()=>new Promise(res=>{try{const r=indexedDB.open('silentium-core',1);r.onupgradeneeded=()=>r.result.createObjectStore('kv');r.onsuccess=()=>res(r.result);r.onerror=()=>res(null);r.onblocked=()=>res(null)}catch{res(null)}});
 const kv57=async(mode,fn)=>{const d=await db57();if(!d)return null;return new Promise(res=>{try{const tx=d.transaction('kv',mode),r=fn(tx.objectStore('kv'));tx.oncomplete=()=>res(r&&r.result);tx.onerror=tx.onabort=()=>res(null)}catch{res(null)}})};
 /* every copy that really reached Files is kept here as well */
 hl=(f=>async function(a,data){const ok=await f.apply(this,arguments);try{if(ok!==!1&&/^silentium-.*\.json$/.test(a)&&typeof data==='string'){let enc=!1;try{enc=!!JSON.parse(data)['silentium-enc']}catch{}await kv57('readwrite',s=>s.put({ts:Date.now(),name:a,enc,size:data.length,data},'K'))}}catch{}return ok})(hl);
 /* run the app's own restore with a file it did not have to ask for */
 const run57=file=>{const orig=document.createElement;document.createElement=function(t){const el=orig.apply(document,arguments);if(String(t).toLowerCase()==='input'){document.createElement=orig;el.click=()=>{try{Object.defineProperty(el,'files',{value:[file],configurable:!0})}catch{}el.onchange&&el.onchange()}}return el};try{Oz()}finally{document.createElement=orig}};
 const when57=ts=>{try{return new Date(ts).toLocaleString(he(),{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'})}catch{return''}};
 L.bkrestore=async function(){const k=await kv57('readonly',s=>s.get('K'));if(!k||!k.data){Oz();return}
  const mb=k.size>=1048576?(k.size/1048576).toFixed(1):(Math.max(1,Math.round(k.size/1024))+' K').replace(' K',' KB').replace(/ KB$/,'\u00a0KB');
  H(s57('t'),`<div class="r57c"><small>${i(s57('here'))}</small><b>${i(when57(k.ts))}</b><span>${i(k.name)} · ${String(mb).includes('KB')?mb:mb+' MB'}${k.enc?' · 🔒 '+i(s57('lock')):''}</span><button type="button" class="dcadd gold" data-x="in">${i(s57('go'))}</button></div><button type="button" class="btn r57f" data-x="file">${i(s57('file'))}</button><p class="fdsmall">${i(s57('fileS'))}</p>`,sh=>{
   sh.querySelector('[data-x=in]').onclick=()=>{sh.remove();run57(new File([k.data],k.name,{type:'application/json'}))};
   sh.querySelector('[data-x=file]').onclick=()=>{sh.remove();Oz()}})};
 const st=document.createElement('style');st.textContent=`.r57c{display:flex;flex-direction:column;gap:6px;padding:14px;border:1px solid var(--line);border-radius:16px;background:var(--surface);margin-bottom:12px}.r57c small{color:var(--muted);font-size:13px}.r57c b{font-size:18px;font-weight:600}.r57c span{color:var(--muted);font-size:13.5px;margin-bottom:6px;word-break:break-all}.r57f{width:100%}`;document.head.appendChild(st);
}catch(e){}
