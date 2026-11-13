/* ===== Data protection: card, safety copy, restore the latest copy — one module (was updates v253, v257) ===== */
/* v253: data protection — a «Защита данных» card in the profile (storage status, last copy, copy / restore),
   a safety copy of the current data before every restore (with «Вернуть как было»), the scanner window closes when the screen changes */
try{
 const P53={t:['Защита данных','Datenschutz','Data protection','Ochrona danych','Veri koruması','Protection des données','Protección de datos'],
  st:['Хранилище','Speicher','Storage','Pamięć','Depolama','Stockage','Almacenamiento'],
  stOk:['защищено — iPhone не сотрёт данные','geschützt – das iPhone löscht die Daten nicht','protected — the iPhone will not erase the data','chroniona — iPhone nie usunie danych','korumalı — iPhone verileri silmez','protégé — l’iPhone n’effacera pas les données','protegido — el iPhone no borrará los datos'],
  stNo:['iPhone пока не подтвердил защиту — делайте копии','iPhone hat den Schutz noch nicht bestätigt – bitte Sicherungen erstellen','the iPhone has not confirmed protection yet — keep making copies','iPhone jeszcze nie potwierdził ochrony — rób kopie','iPhone korumayı henüz onaylamadı — yedek alın','l’iPhone n’a pas encore confirmé — faites des copies','el iPhone aún no lo ha confirmado — haga copias'],
  stWait:['проверяю…','prüfe …','checking…','sprawdzam…','denetleniyor…','vérification…','comprobando…'],
  last:['Последняя копия','Letzte Sicherung','Last copy','Ostatnia kopia','Son yedek','Dernière copie','Última copia'],
  never:['ещё не было','noch keine','none yet','jeszcze nie było','henüz yok','aucune','ninguna aún'],
  old:['%n дн. назад — пора сделать новую','vor %n Tagen – Zeit für eine neue','%n days ago — time for a new one','%n dni temu — czas na nową','%n gün önce — yenisinin zamanı','il y a %n jours — à refaire','hace %n días — haga otra'],
  inc:['В копии все записи, фото и документы. С паролем она шифруется (AES-256), и без пароля её не открыть.','Die Sicherung enthält alle Einträge, Fotos und Dokumente. Mit Passwort wird sie verschlüsselt (AES-256).','The copy holds every entry, photo and document. With a password it is encrypted (AES-256).','Kopia zawiera wszystkie wpisy, zdjęcia i dokumenty. Z hasłem jest szyfrowana (AES-256).','Yedek tüm kayıtları, fotoğrafları ve belgeleri içerir. Parolayla şifrelenir (AES-256).','La copie contient toutes les entrées, photos et documents. Avec un mot de passe, elle est chiffrée (AES-256).','La copia incluye todas las entradas, fotos y documentos. Con contraseña se cifra (AES-256).'],
  mk:['🗝 Сделать копию','🗝 Sicherung erstellen','🗝 Make a copy','🗝 Zrób kopię','🗝 Yedek al','🗝 Faire une copie','🗝 Hacer copia'],
  rs:['Восстановить из копии','Aus Sicherung wiederherstellen','Restore from a copy','Przywróć z kopii','Yedekten geri yükle','Restaurer une copie','Restaurar una copia'],
  undo:['↶ Вернуть данные, как были до восстановления (%d)','↶ Daten wie vor der Wiederherstellung (%d)','↶ Bring back the data as it was before the restore (%d)','↶ Przywróć dane sprzed przywracania (%d)','↶ Geri yüklemeden önceki verilere dön (%d)','↶ Revenir aux données d’avant la restauration (%d)','↶ Volver a los datos de antes de restaurar (%d)'],
  undoQ:['Вернуть данные, какими они были до восстановления копии? Данные из копии будут заменены.','Daten wie vor der Wiederherstellung zurückholen? Die Daten aus der Sicherung werden ersetzt.','Bring back the data as it was before the restore? The data from the copy will be replaced.','Przywrócić dane sprzed przywracania? Dane z kopii zostaną zastąpione.','Geri yüklemeden önceki veriler dönsün mü? Yedekteki veriler değişir.','Revenir aux données d’avant la restauration ? Les données de la copie seront remplacées.','¿Volver a los datos de antes de restaurar? Los datos de la copia se sustituirán.'],
  safe:['Текущие данные сохранены отдельно — их можно вернуть в Профиле','Aktuelle Daten wurden gesichert – im Profil zurückholbar','Current data saved aside — you can bring it back in Profile','Bieżące dane zapisane osobno — można je przywrócić w profilu','Mevcut veriler ayrıca saklandı — Profilden geri alınabilir','Données actuelles mises de côté — récupérables dans le profil','Datos actuales guardados aparte — recupérelos en el perfil'],
  back:['Данные возвращены','Daten zurückgeholt','Data brought back','Dane przywrócone','Veriler geri alındı','Données récupérées','Datos recuperados']};
 const p53=(k,o)=>{let t=cv5n(P53[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
 /* the phone's large database, the same one index.html mirrors every save into */
 const db53=()=>new Promise(res=>{try{const r=indexedDB.open('silentium-core',1);r.onupgradeneeded=()=>r.result.createObjectStore('kv');r.onsuccess=()=>res(r.result);r.onerror=()=>res(null);r.onblocked=()=>res(null)}catch{res(null)}});
 const kv53=async(mode,fn)=>{const d=await db53();if(!d)return null;return new Promise(res=>{try{const tx=d.transaction('kv',mode),st=tx.objectStore('kv'),r=fn(st);tx.oncomplete=()=>res(r&&r.result);tx.onerror=tx.onabort=()=>res(null)}catch{res(null)}})};
 let pre53=null;const load53=async()=>{const v=await kv53('readonly',s=>s.get('B'));pre53=v&&v.json?{ts:v.ts}:null};
 let per53=null;const chk53=async()=>{try{if(typeof window.__persist==='boolean')per53=window.__persist;else if(navigator.storage&&navigator.storage.persisted)per53=await navigator.storage.persisted()}catch{per53=!1}};
 const date53=ts=>{try{return new Date(ts).toLocaleDateString(he(),{day:'numeric',month:'long',year:'numeric'})}catch{return''}};
 const card53=()=>{const last=+g.bkLast||0,days=last?Math.floor((Date.now()-last)/864e5):-1;
  const lastT=!last?p53('never'):days>14?p53('old',{n:days}):date53(last),warn=!last||days>14;
  return`<section class="card st53"><h3>${i(p53('t'))}</h3>
  <div class="st53r"><span>${i(p53('st'))}</span><b class="${per53===!0?'ok':per53===!1?'wn':''}">${per53===!0?'✓ ':''}${i(per53===null?p53('stWait'):per53?p53('stOk'):p53('stNo'))}</b></div>
  <div class="st53r"><span>${i(p53('last'))}</span><b class="${warn?'wn':'ok'}">${i(lastT)}</b></div>
  <p class="st53n">${i(p53('inc'))}</p>
  <div class="st53b"><button type="button" class="dcadd gold" data-act="st53bk">${i(p53('mk'))}</button><button type="button" class="btn" data-act="bkrestore">${i(p53('rs'))}</button></div>
  ${pre53?`<button type="button" class="trlink st53u" data-act="st53undo">${i(p53('undo',{d:date53(pre53.ts)}))}</button>`:''}</section>`};
 It=(f=>function(){const a=f.apply(this,arguments);try{const t='<p class="appver">',n=a.indexOf(t);if(n<0||a.includes('class="card st53"'))return a;return a.slice(0,n)+card53()+a.slice(n)}catch{return a}})(It);
 L.st53bk=()=>{try{hh()}catch{}};
 L.st53undo=async()=>{if(!confirm(p53('undoQ')))return;const v=await kv53('readonly',s=>s.get('B'));if(!v||!v.json)return;let o=null;try{o=JSON.parse(v.json)}catch{}if(!o)return;Object.keys(g).forEach(k=>delete g[k]);Object.assign(g,o);$();await kv53('readwrite',s=>s.delete('B'));pre53=null;T(p53('back'));setTimeout(()=>location.reload(),600)};
 /* before «Восстановить» does anything, the data on this phone is put aside; only then the restore runs */
 document.addEventListener('click',async e=>{const b=e.target.closest&&e.target.closest('.dtsheet [data-x="go"]');if(!b||b.__p53)return;const sh=b.closest('.dtsheet');const h=sh&&sh.querySelector('h2,h3,.dttitle,.dthd');const ttl=sh?sh.innerText:'';if(!ttl.includes(C('bkRestT')))return;
  e.preventDefault();e.stopImmediatePropagation();b.disabled=!0;try{await kv53('readwrite',s=>s.put({ts:Date.now(),json:JSON.stringify(g)},'B'))}catch{}try{sessionStorage.setItem('p53safe',String(+g.bkLast||1))}catch{}b.disabled=!1;b.__p53=1;b.click()},!0);
 try{const k=sessionStorage.getItem('p53safe');if(k){sessionStorage.removeItem('p53safe');/* the date of the newest copy survives the restore */const was=+k||0;if(was>(+g.bkLast||0)){g.bkLast=was;$()}setTimeout(()=>T(p53('safe')),2600)}}catch{}
 /* the scanner window closes (and the camera stops) when the app moves to another screen */
 const sc53=()=>{document.querySelectorAll('.sc9').forEach(ov=>{try{ov.querySelectorAll('video').forEach(vd=>{const s=vd.srcObject;s&&s.getTracks&&s.getTracks().forEach(t=>t.stop());vd.srcObject=null})}catch{}ov.remove()});document.documentElement.classList.remove('sc9on')};
 R=(f=>function(){try{if(document.querySelector('.sc9'))sc53()}catch{}return f.apply(this,arguments)})(R);
 Promise.all([load53(),chk53()]).then(()=>{try{if(m.route==='profile')v()}catch{}});
 const st=document.createElement('style');st.textContent=`
.card.st53{display:flex;flex-direction:column;gap:10px;margin:14px 0}.st53 h3{margin:0;font-family:var(--display);font-weight:500;font-size:21px}
.st53r{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-size:15px}.st53r span{color:var(--muted);flex:none}.st53r b{font-weight:500;text-align:right}.st53r b.ok{color:var(--good,#3f9d5a)}.st53r b.wn{color:var(--warn,#c98a2e)}
.st53n{margin:0;font-size:13px;color:var(--muted);line-height:1.4}.st53b{display:flex;flex-direction:column;gap:8px}.st53b .btn{width:100%}.st53u{align-self:flex-start;text-align:left}
`;document.head.appendChild(st);
}catch(e){}
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
