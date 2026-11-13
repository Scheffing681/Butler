/* v195: notes rebuilt (delete, undo, select, filter, autosave editor) and quick input as the single inbox */
const nz5LG=['ru','de','en','pl','tr','fr','es'];
const nz5S={
sel:['Выбрать','Auswählen','Select','Wybierz','Seç','Choisir','Elegir'],
cancel:['Отмена','Abbrechen','Cancel','Anuluj','İptal','Annuler','Cancelar'],
ph:['Новая заметка …','Neue Notiz …','New note …','Nowa notatka …','Yeni not …','Nouvelle note …','Nueva nota …'],
all:['Все','Alle','All','Wszystkie','Tümü','Toutes','Todas'],
f_text:['Текст','Text','Text','Tekst','Metin','Texte','Texto'],
f_list:['Списки','Listen','Lists','Listy','Listeler','Listes','Listas'],
f_meet:['Встречи','Gespräche','Meetings','Spotkania','Görüşmeler','Rencontres','Reuniones'],
f_idea:['Идеи','Ideen','Ideas','Pomysły','Fikirler','Idées','Ideas'],
f_diary:['Дневник','Tagebuch','Diary','Dziennik','Günlük','Journal','Diario'],
pinned:['Закреплённые','Angeheftet','Pinned','Przypięte','Sabitlenenler','Épinglées','Fijadas'],
today:['Сегодня','Heute','Today','Dziś','Bugün','Aujourd’hui','Hoy'],
yest:['Вчера','Gestern','Yesterday','Wczoraj','Dün','Hier','Ayer'],
tasksT:['дела на сегодня','heute zu tun','to do today','zadania na dziś','bugünkü işler','à faire aujourd’hui','tareas de hoy'],
routT:['распорядок','Tagesablauf','routine','plan dnia','günlük düzen','routine','rutina'],
projT:['проекты','Projekte','projects','projekty','projeler','projets','proyectos'],
goalT:['цели','Ziele','goals','cele','hedefler','objectifs','metas'],
done:['Готово','Fertig','Done','Gotowe','Bitti','Terminé','Listo'],
del:['Удалить','Löschen','Delete','Usuń','Sil','Supprimer','Eliminar'],
deleted1:['Заметка удалена','Notiz gelöscht','Note deleted','Notatka usunięta','Not silindi','Note supprimée','Nota eliminada'],
deletedN:['Удалено заметок: %n','%n Notizen gelöscht','%n notes deleted','Usunięto notatek: %n','%n not silindi','%n notes supprimées','%n notas eliminadas'],
undo:['Вернуть','Rückgängig','Undo','Cofnij','Geri al','Rétablir','Deshacer'],
open:['Открыть и изменить','Öffnen und bearbeiten','Open and edit','Otwórz i edytuj','Aç ve düzenle','Ouvrir et modifier','Abrir y editar'],
pin:['Закрепить','Anheften','Pin','Przypnij','Sabitle','Épingler','Fijar'],
unpin:['Открепить','Lösen','Unpin','Odepnij','Sabitlemeyi kaldır','Détacher','Desfijar'],
toTask:['Сделать делом','Als Aufgabe','Make a task','Zrób zadanie','Göreve çevir','En faire une tâche','Convertir en tarea'],
color:['Цвет','Farbe','Colour','Kolor','Renk','Couleur','Color'],
copy:['Копировать текст','Text kopieren','Copy text','Kopiuj tekst','Metni kopyala','Copier le texte','Copiar texto'],
copied:['Скопировано ✓','Kopiert ✓','Copied ✓','Skopiowano ✓','Kopyalandı ✓','Copié ✓','Copiado ✓'],
dict:['Диктовать','Diktieren','Dictate','Dyktuj','Dikte et','Dicter','Dictar'],
title:['Название','Titel','Title','Tytuł','Başlık','Titre','Título'],
textPh:['Текст заметки …','Notiztext …','Note text …','Treść notatki …','Not metni …','Texte de la note …','Texto de la nota …'],
item:['+ пункт','+ Punkt','+ item','+ punkt','+ madde','+ élément','+ elemento'],
created:['Создано','Erstellt','Created','Utworzono','Oluşturuldu','Créée','Creada'],
changed:['изменено','geändert','edited','zmieniono','değiştirildi','modifiée','modificada'],
savedA:['сохранено ✓','gespeichert ✓','saved ✓','zapisano ✓','kaydedildi ✓','enregistré ✓','guardado ✓'],
auto:['сохраняется само','speichert automatisch','saves by itself','zapisuje się samo','kendiliğinden kaydedilir','enregistrement automatique','se guarda solo'],
when:['Когда сделать?','Bis wann?','When?','Na kiedy?','Ne zaman?','Pour quand ?','¿Para cuándo?'],
tomorrow:['Завтра','Morgen','Tomorrow','Jutro','Yarın','Demain','Mañana'],
nodue:['Без срока','Ohne Termin','No date','Bez terminu','Tarihsiz','Sans date','Sin fecha'],
other:['Другой день','Anderer Tag','Another day','Inny dzień','Başka gün','Autre jour','Otro día'],
linked:['связано с делом','mit Aufgabe verknüpft','linked to a task','powiązane z zadaniem','göreve bağlı','liée à une tâche','vinculada a una tarea'],
ofDone:['%a из %b готово','%a von %b erledigt','%a of %b done','%a z %b gotowe','%a / %b tamam','%a sur %b faits','%a de %b hechos'],
empty:['Заметок пока нет. Напишите первую в поле сверху.','Noch keine Notizen. Schreiben Sie die erste oben ins Feld.','No notes yet. Write the first one in the field above.','Nie ma jeszcze notatek. Napisz pierwszą w polu powyżej.','Henüz not yok. İlkini yukarıdaki alana yazın.','Pas encore de notes. Écrivez la première dans le champ ci-dessus.','Aún no hay notas. Escriba la primera en el campo de arriba.'],
none:['Здесь пусто','Hier ist nichts','Nothing here','Tu nic nie ma','Burada bir şey yok','Rien ici','Nada aquí'],
delSel:['Удалить выбранные (%n)','Auswahl löschen (%n)','Delete selected (%n)','Usuń zaznaczone (%n)','Seçilenleri sil (%n)','Supprimer la sélection (%n)','Eliminar selección (%n)'],
pick:['Отметьте заметки','Notizen markieren','Tick the notes','Zaznacz notatki','Notları işaretleyin','Cochez les notes','Marque las notas'],
qPh:['Напишите или скажите что угодно: дело, встречу, покупку, расход, мысль …','Schreiben oder sagen Sie irgendetwas: Aufgabe, Termin, Einkauf, Ausgabe, Gedanke …','Write or say anything: a task, an appointment, shopping, an expense, a thought …','Napisz lub powiedz cokolwiek: zadanie, spotkanie, zakupy, wydatek, myśl …','Herhangi bir şey yazın veya söyleyin: görev, randevu, alışveriş, harcama, düşünce …','Écrivez ou dites n’importe quoi : tâche, rendez-vous, achat, dépense, idée …','Escriba o diga cualquier cosa: tarea, cita, compra, gasto, idea …'],
voice:['Голос','Stimme','Voice','Głos','Ses','Voix','Voz'],
photo:['Фото','Foto','Photo','Zdjęcie','Fotoğraf','Photo','Foto'],
file:['Файл','Datei','File','Plik','Dosya','Fichier','Archivo'],
und:['Я понял так','So habe ich es verstanden','Here is how I understood it','Tak to zrozumiałem','Şöyle anladım','Voici ce que j’ai compris','Así lo he entendido'],
k_task:['Дело','Aufgabe','Task','Zadanie','Görev','Tâche','Tarea'],
k_event:['Событие','Termin','Event','Wydarzenie','Etkinlik','Événement','Evento'],
k_note:['Заметка','Notiz','Note','Notatka','Not','Note','Nota'],
k_exp:['Расход','Ausgabe','Expense','Wydatek','Harcama','Dépense','Gasto'],
k_shop:['Покупка','Einkauf','Shopping','Zakupy','Alışveriş','Achat','Compra'],
k_doc:['Документ','Dokument','Document','Dokument','Belge','Document','Documento'],
what:['Что','Was','What','Co','Ne','Quoi','Qué'],
whenL:['Когда','Wann','When','Kiedy','Ne zaman','Quand','Cuándo'],
where:['Куда','Wohin','Where to','Dokąd','Nereye','Où','Dónde'],
sum:['Сумма','Betrag','Amount','Kwota','Tutar','Montant','Importe'],
cat:['Категория','Kategorie','Category','Kategoria','Kategori','Catégorie','Categoría'],
w_task:['Дела','Aufgaben','Tasks','Zadania','Görevler','Tâches','Tareas'],
w_event:['Календарь','Kalender','Calendar','Kalendarz','Takvim','Calendrier','Calendario'],
w_note:['Заметки','Notizen','Notes','Notatki','Notlar','Notes','Notas'],
w_exp:['Финансы','Finanzen','Finances','Finanse','Finans','Finances','Finanzas'],
w_shop:['Список покупок','Einkaufsliste','Shopping list','Lista zakupów','Alışveriş listesi','Liste de courses','Lista de la compra'],
w_doc:['Документы','Dokumente','Documents','Dokumenty','Belgeler','Documents','Documentos'],
save:['Сохранить','Speichern','Save','Zapisz','Kaydet','Enregistrer','Guardar'],
next:['Дальше','Weiter','Next','Dalej','İleri','Suivant','Siguiente'],
later:['Не сейчас — во «Входящие»','Nicht jetzt – in den Eingang','Not now — to Inbox','Nie teraz — do skrzynki','Şimdi değil — Gelen kutusuna','Pas maintenant — dans la boîte de réception','Ahora no — a la bandeja de entrada'],
inbox:['Входящие','Eingang','Inbox','Skrzynka','Gelen kutusu','Boîte de réception','Bandeja de entrada'],
inboxS:['Записано, но ещё не разобрано. Нажмите на запись, чтобы разложить.','Notiert, aber noch nicht einsortiert. Tippen Sie auf einen Eintrag, um ihn einzuordnen.','Written down but not sorted yet. Tap an entry to sort it.','Zapisane, ale jeszcze nieuporządkowane. Dotknij wpisu, aby go przypisać.','Yazıldı ama henüz düzenlenmedi. Düzenlemek için bir kayda dokunun.','Noté mais pas encore classé. Touchez une entrée pour la classer.','Anotado pero aún sin ordenar. Toque una entrada para ordenarla.'],
toInbox:['Во «Входящих» ✓','Im Eingang ✓','In Inbox ✓','W skrzynce ✓','Gelen kutusunda ✓','Dans la boîte ✓','En la bandeja ✓'],
okSaved:['Сохранено: %w ✓','Gespeichert: %w ✓','Saved: %w ✓','Zapisano: %w ✓','Kaydedildi: %w ✓','Enregistré : %w ✓','Guardado: %w ✓'],
ex:['Примеры — нажмите, чтобы попробовать','Beispiele – zum Ausprobieren antippen','Examples — tap to try','Przykłady — dotknij, aby wypróbować','Örnekler — denemek için dokunun','Exemples — touchez pour essayer','Ejemplos — toque para probar'],
tplDoc:['Документ по шаблону','Dokument nach Vorlage','Document from template','Dokument z szablonu','Şablondan belge','Document depuis un modèle','Documento desde plantilla'],
rules:['Без ИИ я понимаю простые фразы. Проверьте и поправьте одним нажатием.','Ohne KI verstehe ich einfache Sätze. Bitte prüfen und mit einem Tipp korrigieren.','Without AI I understand simple phrases. Check and correct with one tap.','Bez AI rozumiem proste zdania. Sprawdź i popraw jednym dotknięciem.','Yapay zekâ olmadan basit cümleleri anlarım. Kontrol edin, tek dokunuşla düzeltin.','Sans IA, je comprends les phrases simples. Vérifiez et corrigez d’un geste.','Sin IA entiendo frases sencillas. Revise y corrija con un toque.'],
needText:['Сначала напишите или скажите что-нибудь','Bitte zuerst etwas schreiben oder sagen','Write or say something first','Najpierw coś napisz lub powiedz','Önce bir şey yazın veya söyleyin','Écrivez ou dites d’abord quelque chose','Primero escriba o diga algo'],
needSum:['Укажите сумму','Bitte Betrag angeben','Enter the amount','Podaj kwotę','Tutarı girin','Indiquez le montant','Indique el importe'],
back:['Назад','Zurück','Back','Wstecz','Geri','Retour','Atrás']
};
const nz5EX=[['Купить молоко и хлеб','12,50 кафе','В субботу в 18 ужин у мамы'],['Milch und Brot kaufen','12,50 Café','Am Samstag um 18 Abendessen bei Mama'],['Buy milk and bread','12.50 café','On Saturday at 18 dinner with mum'],['Kupić mleko i chleb','12,50 kawiarnia','W sobotę o 18 kolacja u mamy'],['Süt ve ekmek al','12,50 kafe','Cumartesi saat 18 annemde yemek'],['Acheter du lait et du pain','12,50 café','Samedi à 18 dîner chez maman'],['Comprar leche y pan','12,50 café','El sábado a las 18 cena con mamá']];
const nz5i=()=>{const k=nz5LG.indexOf(g.lang);return k<0?2:k};
const nz5t=(k,o)=>{let s=(nz5S[k]||[])[nz5i()]||k;if(o)for(const p in o)s=s.replace('%'+p,o[p]);return s};
const nz5F=['text','list','meet','idea','diary'];
const nz5low=()=>{try{return he()}catch{return undefined}};
function nz5date(ts,withTime){const d=new Date(ts||Date.now()),t=new Date;const d0=x(d),t0=x(t);const y=new Date(t);y.setDate(y.getDate()-1);
 const hm=Gs(d.getHours())+':'+Gs(d.getMinutes());
 if(d0===t0)return nz5t('today')+(withTime?', '+hm:'');if(d0===x(y))return nz5t('yest')+(withTime?', '+hm:'');
 const o={day:'numeric',month:'short'};if(d.getFullYear()!==t.getFullYear())o.year='numeric';return d.toLocaleDateString(nz5low(),o)}
function nz5txt(n){const a=[];if(n.title)a.push(n.title);if(n.who)a.push(n.who);if(n.said)a.push(n.said);if(n.next)a.push('→ '+n.next);
 if(n.text&&_5(n)!=='list'&&_5(n)!=='meet')a.push(n.text);(n.items||[]).forEach(t=>a.push((t.d?'☑ ':'☐ ')+t.t));(n.good||[]).filter(Boolean).forEach(t=>a.push('✦ '+t));return a.join('\n')}
function nz5card(n,sel){const k=_5(n),ic=H_[k];let ttl='',body='',meta=[nz5date(n.u||n.d,x(new Date(n.u||n.d))===x(new Date))];
 const items=n.items||[],dn=items.filter(c=>c.d).length;
 const itemsH=items.slice(0,4).map((c,j)=>`<button type="button" class="st29li ${c.d?'d':''}" data-act="st29ck" data-id="${n.id}" data-i="${j}"><i>${c.d?_('check'):''}</i>${i(c.t)}</button>`).join('');
 if(k==='list'){ttl=n.title||ua('t_list');body=itemsH}
 else if(k==='meet'){ttl=n.who||ua('t_meet');body=`${n.said?i(String(n.said).slice(0,110)):''}${n.next?`<span class="nz5nx"><i>${i(ua('nextS'))}:</i> ${i(n.next)}</span>`:''}`}
 else if(k==='diary'){ttl=nz5date(n.d);meta=[];body=`${n.mood?`<span class="st29md">${w5[n.mood-1]}</span> `:''}${(n.good||[]).filter(Boolean).slice(0,3).map(c=>`<span class="st29g">✦ ${i(c)}</span>`).join('')}${n.text?`<span class="nz5nx">${i(String(n.text).slice(0,90))}</span>`:''}`}
 else{const r=String(n.text||'');const tags=(r.match(/#[\p{L}\d_]+/gu)||[]).slice(0,3);const clean=r.replace(/#[\p{L}\d_]+/gu,'').trim();
  ttl=n.title||'';if(!ttl){const fl=clean.split('\n')[0];ttl=fl.slice(0,60);body=i(clean.slice(fl.length).trim().slice(0,150))}else body=i(clean.slice(0,150));
  body+=itemsH;tags.forEach(t=>meta.push(`<i>${i(t)}</i>`))}
 if(items.length)meta.push(nz5t('ofDone',{a:dn,b:items.length}));
 if(n.task){const t=(g.tasks||[]).find(q=>q.id===n.task);if(t)meta.push(nz5t('linked')+' '+(t.done?'☑':'☐'))}
 const col=['r','y','g','b'].includes(n.col)?n.col:'';const on=sel&&m.nz5pk&&m.nz5pk[n.id];
 return`<div class="nz5w" data-id="${n.id}"><div class="nz5n ${col} ${n.pin?'pn':''} ${on?'pk':''}" data-act="${sel?'nz5pick':'st29open'}" data-id="${n.id}">${sel?`<span class="nz5ck">${on?_('check'):''}</span>`:''}<b>${ic} ${n.pin?'📌 ':''}${i(ttl)}</b>${body?`<div class="nz5b">${body}</div>`:''}<small>${meta.join(' · ')}</small>${sel?'':`<button type="button" class="nz5m" data-act="nz5m" data-id="${n.id}" aria-label="menu">⋯</button>`}</div>${sel?'':`<button type="button" class="nz5d" data-act="nz5del" data-id="${n.id}">${_('trash')}<span>${i(nz5t('del'))}</span></button>`}</div>`}
function nz5mini(){const t0=x(new Date);const tk=(g.tasks||[]).filter(l=>!l.done&&(!l.due||l.due<=t0)).length;let rt='—';try{const now=new Date,mm=now.getHours()*60+now.getMinutes();const r=(Ly(now)||[]).filter(p=>SP(p.time)!=null).sort((a,b)=>SP(a.time)-SP(b.time));const nx=r.find(p=>SP(p.time)>mm)||r[0];if(nx)rt=nx.time}catch{}
 const pj=(g.projects||[]).length,gl=(g.goals||[]).length;
 return`<div class="nz5mini"><button type="button" data-act="go" data-to="tasks"><b>${tk}</b>${i(nz5t('tasksT'))} ›</button><button type="button" data-act="go" data-to="routine"><b>${i(rt)}</b>${i(nz5t('routT'))} ›</button>${pj?`<button type="button" data-act="go" data-to="projects"><b>${pj}</b>${i(nz5t('projT'))} ›</button>`:`<button type="button" data-act="pnew"><b>＋</b>${i(nz5t('projT'))}</button>`}${gl?`<button type="button" data-act="go" data-to="goals"><b>${gl}</b>${i(nz5t('goalT'))} ›</button>`:''}</div>`}
G_=function(){m.st29t='note';const q=(m.st29q||'').trim().toLowerCase(),sel=!!m.nz5sel,f=nz5F.includes(m.nz5f)?m.nz5f:'all';
 const allN=um();let a=allN.slice();
 if(q)a=a.filter(n=>JSON.stringify([n.text,n.title,n.who,n.said,n.next,n.items,n.good]).toLowerCase().includes(q));
 const cnt={all:a.length};nz5F.forEach(k=>cnt[k]=a.filter(n=>_5(n)===k).length);
 if(f!=='all')a=a.filter(n=>_5(n)===f);
 a.sort((p,r)=>(r.d||0)-(p.d||0));
 const lim=m.st29all?a.length:40,shown=a.slice(0,lim),pins=shown.filter(n=>n.pin),rest=shown.filter(n=>!n.pin);
 let list='';if(pins.length)list+=`<div class="st29sec"><b>${i(nz5t('pinned'))}</b></div>`+pins.map(n=>nz5card(n,sel)).join('');
 let cur='';rest.forEach(n=>{const d=new Date(n.d||Date.now()),key=d.getFullYear()+'-'+d.getMonth();if(key!==cur){cur=key;const o={month:'long'};if(d.getFullYear()!==new Date().getFullYear())o.year='numeric';list+=`<div class="st29sec"><b>${i(Fi(d.toLocaleDateString(nz5low(),o)))}</b></div>`}list+=nz5card(n,sel)});
 if(!shown.length)list=`<p class="st29e nz5e">${i(q?ua('nothing'):allN.length?nz5t('none'):nz5t('empty'))}</p>`;
 if(a.length>lim)list+=`<button type="button" class="btn sm st29mo" data-act="st29all">${i(z(ua('more'),{n:a.length-lim}))}</button>`;
 const np=sel?Object.keys(m.nz5pk||{}).length:0;
 const tp=[['text','t_text'],['list','t_list'],['meet','t_meet'],['idea','t_idea'],['diary','t_diary']];
 return`<div class="screen st29 nz5">
  <div class="sub-hdr"><button class="iconbtn" data-act="go" data-to="home" aria-label="back">${_('back')}</button><div class="ttl"><h2>${i(ua('title'))}</h2></div><button class="iconbtn" data-act="st29s" aria-label="${i(ua('search'))}">${_('search')}</button></div>
  ${m.st29so?`<input class="field st29q" id="st29q" placeholder="${i(ua('search'))}" value="${i(m.st29q||'')}" autocomplete="off">`:''}
  <form class="st29in" data-form="st29add" autocomplete="off"><input class="field" id="st29i" name="t" placeholder="${i(nz5t('ph'))}"><button type="button" class="st29mic" data-act="st29mic" aria-label="mic">${_('mic')}</button><button type="submit" class="st29go" aria-label="ok">${_('plus')}</button></form>
  ${q?'':nz5mini()}
  ${q?jJ(q)+TJ(q):''}
  <div class="nz5fl">${[['all',nz5t('all')]].concat(nz5F.map(k=>[k,H_[k]+' '+nz5t('f_'+k)])).map(([k,l])=>`<button type="button" class="${f===k?'on':''}" data-act="nz5f" data-v="${k}">${i(l)}${cnt[k]?` <small>${cnt[k]}</small>`:''}</button>`).join('')}</div>
  ${allN.length?`<div class="nz5sb"><span>${i(sel?nz5t('pick'):'')}</span>${sel?`<button type="button" class="btn sm dzdel" data-act="nz5delsel" ${np?'':'disabled'}>${_('trash')} ${i(nz5t('delSel',{n:np}))}</button>`:''}<button type="button" class="linkbtn" data-act="nz5sel">${i(sel?nz5t('cancel'):nz5t('sel'))}</button></div>`:''}
  <div class="nz5list">${list}</div>
  ${q||sel?'':`<div class="st29sec"><b>${i(ua('tpl'))}</b></div><div class="st29tp">${tp.map(([k,s])=>`<button type="button" data-act="st29new" data-v="${k}"><b>${H_[k]}</b>${i(ua(s))}</button>`).join('')}</div>`}</div>`};
/* delete with undo */
let nz5last=null,nz5ut=0;
function nz5undoBar(nn){document.querySelectorAll('.nz5undo').forEach(e=>e.remove());const b=document.createElement('div');b.className='nz5undo';b.innerHTML=`<span>${i(nn===1?nz5t('deleted1'):nz5t('deletedN',{n:nn}))}</span><button type="button" data-u>${i(nz5t('undo'))}</button><button type="button" data-c aria-label="x">×</button>`;document.body.appendChild(b);clearTimeout(nz5ut);nz5ut=setTimeout(()=>b.remove(),7000);
 b.querySelector('[data-c]').onclick=()=>b.remove();b.querySelector('[data-u]').onclick=()=>{if(nz5last){const l=um();nz5last.slice().sort((p,r)=>p.at-r.at).forEach(o=>l.splice(Math.min(o.at,l.length),0,o.n));nz5last=null;$();nz5re()}b.remove()}}
function nz5re(){try{k3keep(()=>v())}catch{v()}}
function nz5del(ids){const l=um();const rm=[];l.forEach((n,at)=>{if(ids.includes(n.id))rm.push({n,at})});if(!rm.length)return;g.notes=l.filter(n=>!ids.includes(n.id));nz5last=rm;$();nz5re();nz5undoBar(rm.length)}
function nz5first(n){return String(n.title||n.next||String(n.text||'').split('\n')[0]||n.who||ua('t_'+_5(n))).replace(/#[\p{L}\d_]+/gu,'').trim().slice(0,90)}
function nz5task(n,after){const t0=ga(0),t1=ga(1);const sh=H('☑ '+nz5t('toTask'),`<p class="fdsmall">${i(nz5first(n))}</p><p class="nz5wh">${i(nz5t('when'))}</p><div class="nz5two"><button type="button" class="btn" data-keep="1" data-d="${t0}">${i(nz5t('today'))}</button><button type="button" class="btn" data-keep="1" data-d="${t1}">${i(nz5t('tomorrow'))}</button></div><label class="kbl"><span>${i(nz5t('other'))}</span><input class="field" type="date" data-od min="${t0}"></label><button type="button" class="dcadd gold" data-keep="1" data-go="1" style="display:none">${i(nz5t('save'))}</button><button type="button" class="btn" data-keep="1" data-d="" style="width:100%">${i(nz5t('nodue'))}</button>`,()=>{});
 const mk=due=>{const id=V();g.tasks.push({id,t:nz5first(n)+(_5(n)==='meet'&&n.who&&n.next?' · '+n.who:''),due:due||'',prio:2,proj:'',done:!1,note:n.id});n.task=id;if(_5(n)==='meet')n.nt=1;$();sh.remove();T(ua('taskOk'));after?after():nz5re()};
 sh.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>mk(b.dataset.d));const od=sh.querySelector('[data-od]'),go=sh.querySelector('[data-go]');od.onchange=()=>{go.style.display=od.value?'':'none'};go.onclick=()=>od.value&&mk(od.value)}
function nz5copy(n){const t=nz5txt(n);try{navigator.clipboard.writeText(t).then(()=>T(nz5t('copied')),()=>{})}catch{}}
const nz5COL=[['','#1f3d2c'],['g','#2FBF6A'],['y','#E9B44C'],['r','#F0655A'],['b','#5B8DEF']];
const nz5sw=cur=>`<div class="nz5cols">${nz5COL.map(([k,c])=>`<button type="button" data-keep="1" data-col="${k}" class="${(cur||'')===k?'on':''}" style="background:${c}" aria-label="${k||'none'}"></button>`).join('')}</div>`;
function nz5menu(id){const n=um().find(q=>q.id===id);if(!n)return;const sh=H(H_[_5(n)]+' '+nz5first(n).slice(0,40),`<div class="nz5mn"><button type="button" data-keep="1" data-a="open">✎ <span>${i(nz5t('open'))}</span></button><button type="button" data-keep="1" data-a="pin">📌 <span>${i(n.pin?nz5t('unpin'):nz5t('pin'))}</span></button><button type="button" data-keep="1" data-a="task">☑ <span>${i(nz5t('toTask'))}</span></button><button type="button" data-keep="1" data-a="copy">⧉ <span>${i(nz5t('copy'))}</span></button><div class="nz5mc"><span>🎨 ${i(nz5t('color'))}</span>${nz5sw(n.col)}</div><button type="button" data-keep="1" data-a="del" class="r">${_('trash')} <span>${i(nz5t('del'))}</span></button></div>`,()=>{});
 sh.querySelectorAll('[data-col]').forEach(b=>b.onclick=()=>{n.col=b.dataset.col;$();sh.remove();nz5re()});
 sh.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const a=b.dataset.a;sh.remove();if(a==='open')nz5edit(id);else if(a==='pin'){n.pin=!n.pin;$();nz5re()}else if(a==='task')nz5task(n);else if(a==='copy')nz5copy(n);else if(a==='del')nz5del([id])})}
/* editor */
function nz5edit(id,kind){const list=um();let n=id&&list.find(q=>q.id===id);const k=n?_5(n):(H_[kind]?kind:'text');
 if(!n&&k==='diary'){const d0=x(new Date),u=list.find(p=>p.k==='diary'&&x(new Date(p.d))===d0);if(u)return nz5edit(u.id)}
 let isNew=!n,st=0,colOpen=!1,dirty=!1;const o=n||{k,d:Date.now(),text:'',items:[],good:['','','']};o.items=o.items||[];
 document.querySelectorAll('.nz5ed').forEach(e=>e.remove());const el=document.createElement('div');el.className='nz5ed';
 const itemsH=()=>o.items.map((d,u)=>`<div class="nz5it ${d.d?'d':''}"><button type="button" class="st29cb ${d.d?'on':''}" data-ck="${u}">${d.d?_('check'):''}</button><input class="field" data-it="${u}" value="${i(d.t)}"><button type="button" class="st27x" data-rm="${u}" aria-label="x">×</button></div>`).join('')+`<div class="nz5it nw"><span class="st29cb"></span><input class="field" data-new placeholder="${i(nz5t('item'))}" enterkeyhint="done"></div>`;
 const body=()=>{let h='';
  if(k==='meet')h=`<input class="nz5ti" data-f="who" value="${i(o.who||'')}" placeholder="${i(ua('who'))}" list="nz5pl"><datalist id="nz5pl">${(()=>{try{return(Va()||[]).slice(0,80).map(u=>`<option value="${i([u.first,u.last].filter(Boolean).join(' '))}">`).join('')}catch{return''}})()}</datalist><label class="kbl"><span>${i(ua('said'))}</span><textarea class="field nz5tx" rows="4" data-f="said">${i(o.said||'')}</textarea></label><label class="kbl"><span>${i(ua('nextS'))}</span><input class="field" data-f="next" value="${i(o.next||'')}"></label>`;
  else if(k==='diary')h=`<div class="nz5ti nz5st">${i(nz5date(o.d))}</div><div class="kbl"><span>${i(ua('mood'))}</span></div><div class="st29mds">${w5.map((u,p)=>`<button type="button" class="${o.mood===p+1?'on':''}" data-mood="${p+1}">${u}</button>`).join('')}</div><div class="kbl"><span>${i(ua('good'))}</span></div>${[0,1,2].map(u=>`<input class="field st29gi" data-g="${u}" value="${i((o.good||[])[u]||'')}" placeholder="✦">`).join('')}<label class="kbl"><span>${i(ua('thoughts'))}</span><textarea class="field nz5tx" rows="4" data-f="text">${i(o.text||'')}</textarea></label>`;
  else h=`<input class="nz5ti" data-f="title" value="${i(o.title||'')}" placeholder="${i(k==='list'?ua('t_list'):nz5t('title'))}" maxlength="120">${k==='list'?'':`<textarea class="nz5tx nz5pl" data-f="text" rows="5" placeholder="${i(nz5t('textPh'))}">${i(o.text||'')}</textarea>`}<div class="nz5its">${itemsH()}</div>`;
  return h};
 const foot=()=>`${isNew?i(nz5t('auto')):i(nz5t('created'))+' '+i(nz5date(o.d).toLowerCase())}${o.u?' · '+i(nz5t('changed'))+' '+i(nz5date(o.u,!0).toLowerCase()):''}${st?' · '+i(nz5t('savedA')):''}`;
 const bar=()=>`<button type="button" data-b="back" aria-label="${i(nz5t('back'))}">${_('back')}</button><em>${H_[k]} ${i(ua('t_'+k))}</em><button type="button" data-b="pin" class="${o.pin?'on':''}" aria-label="pin">📌</button><button type="button" data-b="col" class="${colOpen?'on':''}" aria-label="color">🎨</button><button type="button" data-b="del" class="r" aria-label="${i(nz5t('del'))}">${_('trash')}</button><button type="button" data-b="ok" class="ok">${i(nz5t('done'))}</button>`;
 el.innerHTML=`<div class="nz5bar">${bar()}</div><div class="nz5col" hidden>${nz5sw(o.col)}</div><div class="nz5body">${body()}</div><div class="nz5acts"><button type="button" data-x2="task">☑ ${i(nz5t('toTask'))}</button><button type="button" data-x2="dict">🎙 ${i(nz5t('dict'))}</button><button type="button" data-x2="copy">⧉ ${i(nz5t('copy'))}</button></div><div class="nz5ft">${foot()}</div>`;
 document.body.appendChild(el);
 const $b=el.querySelector('.nz5body'),$f=el.querySelector('.nz5ft'),$bar=el.querySelector('.nz5bar'),$col=el.querySelector('.nz5col');
 const grow=()=>el.querySelectorAll('textarea').forEach(t=>{t.style.height='auto';t.style.height=Math.max(t.scrollHeight+2,64)+'px'});
 const sync=()=>{el.querySelectorAll('[data-f]').forEach(b=>{if(b.tagName!=='DIV')o[b.dataset.f]=b.value});el.querySelectorAll('[data-it]').forEach(b=>{const q=o.items[+b.dataset.it];q&&(q.t=b.value)});el.querySelectorAll('[data-g]').forEach(b=>{o.good=o.good||[];o.good[+b.dataset.g]=b.value.trim()})};
 const has=()=>!!(String(o.title||'').trim()||String(o.text||'').trim()||String(o.who||'').trim()||String(o.said||'').trim()||String(o.next||'').trim()||o.items.length||o.mood||(o.good||[]).some(Boolean));
 let tm=0;const commit=()=>{if(!has())return!1;o.text=String(o.text||'');if(k==='list')o.text=[o.title,...o.items.map(S=>S.t)].filter(Boolean).join(', ');if(k==='meet')o.text=[o.who,o.said,o.next].filter(Boolean).join(' — ');if(isNew){o.id=V();list.unshift(o);isNew=!1}if(dirty)o.u=Date.now();$();st=1;$f.innerHTML=foot();return!0};
 const touch=()=>{dirty=!0;st=0;clearTimeout(tm);tm=setTimeout(commit,600)};
 const close=()=>{sync();clearTimeout(tm);const ok=dirty?commit():has();el.remove();if(!ok&&!isNew&&o.id){nz5del([o.id]);return}nz5re()};
 const reItems=focusNew=>{const c=el.querySelector('.nz5its');if(!c)return;c.innerHTML=itemsH();if(focusNew){const q=c.querySelector('[data-new]');q&&q.focus()}};
 const addItem=inp=>{const val=inp.value.trim();if(!val)return!1;inp.value='';sync();o.items.push({t:val,d:!1});touch();reItems(!0);return!0};
 el.addEventListener('input',e=>{if(e.target.matches('[data-new]'))return;sync();touch();if(e.target.tagName==='TEXTAREA')grow()});
 el.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('[data-new]')){e.preventDefault();addItem(e.target)}else if(e.key==='Enter'&&e.target.matches('[data-it]')){e.preventDefault();const q=el.querySelector('[data-new]');q&&q.focus()}});
 el.addEventListener('focusout',e=>{if(e.target.matches&&e.target.matches('[data-new]')&&e.target.value.trim()){const val=e.target.value.trim();sync();o.items.push({t:val,d:!1});touch();setTimeout(()=>{if(el.isConnected&&!el.querySelector('[data-new]:focus'))reItems(!1)},50);e.target.value=''}});
 el.addEventListener('click',e=>{const t=e.target.closest('button');if(!t||!el.contains(t))return;
  if(t.dataset.ck!=null){sync();const q=o.items[+t.dataset.ck];q.d=!q.d;touch();reItems(!1);return}
  if(t.dataset.rm!=null){sync();o.items.splice(+t.dataset.rm,1);touch();reItems(!1);return}
  if(t.dataset.mood){sync();o.mood=+t.dataset.mood;touch();$b.querySelectorAll('[data-mood]').forEach(b=>b.classList.toggle('on',b===t));return}
  if(t.dataset.col!=null){o.col=t.dataset.col;touch();$col.innerHTML=nz5sw(o.col);return}
  const b=t.dataset.b,x2=t.dataset.x2;
  if(b==='back'||b==='ok'){close();return}
  if(b==='pin'){o.pin=!o.pin;touch();t.classList.toggle('on',!!o.pin);return}
  if(b==='col'){colOpen=!colOpen;$col.hidden=!colOpen;t.classList.toggle('on',colOpen);return}
  if(b==='del'){clearTimeout(tm);el.remove();if(!isNew&&o.id)nz5del([o.id]);else nz5re();return}
  if(x2==='copy'){sync();nz5copy(o);return}
  if(x2==='task'){sync();if(!has()){const q=el.querySelector('.nz5ti,textarea');q&&q.focus();return}dirty=!0;commit();nz5task(o,()=>{$f.innerHTML=foot()});return}
  if(x2==='dict'){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){T(Z('micNo'));$f.textContent=Z('micNo');return}try{const r=new SR;r.lang=he();r.interimResults=!1;t.classList.add('on');r.onend=()=>t.classList.remove('on');r.onresult=ev=>{const s=ev.results[0][0].transcript,ta=el.querySelector('textarea')||el.querySelector('[data-new]');if(!ta)return;if(ta.matches('[data-new]')){ta.value=s;addItem(ta)}else{ta.value=(ta.value?ta.value+' ':'')+s;sync();touch();grow()}};r.start()}catch{T(Z('micNo'))}}
 });
 grow();if(isNew)setTimeout(()=>{const q=el.querySelector(k==='list'?'[data-new]':k==='text'||k==='idea'?'textarea':'.nz5ti,input');q&&q.focus()},120)}
jP=function(e,a){return nz5edit(e,a)};
Object.assign(L,{nz5m(e){nz5menu(e.id)},nz5del(e){nz5del([e.id])},nz5f(e){m.nz5f=e.v;nz5re()},nz5sel(){m.nz5sel=!m.nz5sel;m.nz5pk={};nz5re()},nz5pick(e){m.nz5pk=m.nz5pk||{};m.nz5pk[e.id]?delete m.nz5pk[e.id]:m.nz5pk[e.id]=1;nz5re()},nz5delsel(){const ids=Object.keys(m.nz5pk||{});m.nz5sel=!1;m.nz5pk={};if(ids.length)nz5del(ids);else nz5re()}});
/* swipe left to reveal delete */
{let sw=null;const closeAll=ex=>document.querySelectorAll('.nz5w.sw').forEach(w=>{if(w!==ex){w.classList.remove('sw');const c=w.querySelector('.nz5n');c&&(c.style.transform='')}});
 document.addEventListener('touchstart',e=>{const w=e.target.closest&&e.target.closest('.nz5w');closeAll(w);if(!w||m.nz5sel||e.target.closest('.nz5d'))return;const t=e.touches[0];sw={w,c:w.querySelector('.nz5n'),x:t.clientX,y:t.clientY,on:!1,open:w.classList.contains('sw'),dx:0}},{passive:!0});
 document.addEventListener('touchmove',e=>{if(!sw)return;const t=e.touches[0],dx=t.clientX-sw.x,dy=t.clientY-sw.y;if(!sw.on){if(Math.abs(dy)>10&&Math.abs(dy)>Math.abs(dx)){sw=null;return}if(Math.abs(dx)<12)return;sw.on=!0;sw.c.style.transition='none'}sw.dx=Math.max(-104,Math.min(0,dx+(sw.open?-96:0)));sw.c.style.transform=`translateX(${sw.dx}px)`},{passive:!0});
 const end=()=>{if(!sw)return;const s=sw;sw=null;if(!s.on)return;s.c.style.transition='';s.c.style.transform='';s.w.classList.toggle('sw',s.dx<-48);s.w.dataset.sw=Date.now()};
 document.addEventListener('touchend',end,{passive:!0});document.addEventListener('touchcancel',end,{passive:!0});
 document.addEventListener('click',e=>{const w=e.target.closest&&e.target.closest('.nz5w');if(w&&w.dataset.sw&&Date.now()-w.dataset.sw<350&&!e.target.closest('.nz5d')){e.stopPropagation();e.preventDefault();return}if(w&&w.classList.contains('sw')&&!e.target.closest('.nz5d')){e.stopPropagation();e.preventDefault();closeAll()}},!0)}

/* ---------- quick input: one field for everything ---------- */
const qi5K=['task','event','note','exp','shop','doc'],qi5IC={task:'☑',event:'📅',note:'📝',exp:'💶',shop:'🛒',doc:'📄'};
const qi5RX={
 shopA:/^\s*(?:надо\s+|нужно\s+)?(?:купить|купи|докупить|buy|get|kupić|kup|acheter|achète|acheté|comprar|compra|satın\s+al)\s+(.+)$/i,
 shopZ:/^\s*(.+?)\s+(?:kaufen|einkaufen|besorgen|satın\s+al|al)\s*$/i,
 verb:/(?:^|\s)(позвон\S*|напис\S*|оплат\S*|заплат\S*|отправ\S*|сдела\S*|забр\S*|запис\S*|напомн\S*|провер\S*|подготов\S*|отнес\S*|верн\S*|почин\S*|убра\S*|anrufen|bezahlen|zahlen|schicken|senden|erledigen|abholen|erinner\S*|prüfen|reparieren|kündigen|call|pay|send|remind|check|fix|pick\s+up|zadzwoni\S*|zapłaci\S*|wyśl\S*|przypomnij|odebra\S*|ara|öde|gönder|hatırlat|appeler|payer|envoyer|rappel\S*|llamar|pagar|enviar|recordar|recuérd\S*)(?=\s|$)/i,
 ev:/(встреч\S*|ужин\S*|обед\S*|завтрак\S*|приём\S*|врач\S*|стоматолог\S*|парикмахер\S*|концерт\S*|театр\S*|termin\S*|treffen|abendessen|mittagessen|arzt\S*|zahnarzt|friseur|konzert|meeting|appointment|dinner|lunch|doctor|dentist|spotkani\S*|kolacj\S*|obiad\S*|lekarz\S*|wizyt\S*|toplantı\S*|randevu\S*|yemek\S*|doktor\S*|rendez-vous|réunion|dîner|déjeuner|médecin|cita|reunión|cena|almuerzo|médico)/i,
 prom:/^(?:я\s+)?(?:пообещал[аи]?|обещал[аи]?)\s+|^(?:ich\s+habe\s+)?versprochen[:,]?\s+|^(?:i\s+)?promised\s+(?:to\s+)?|^obiecał[ae]m\s+|^söz\s+verdim[:,]?\s+|^j[’']ai\s+promis\s+(?:de\s+)?|^promet[ií]\s+/i,
 wait:/^(?:я\s+)?жду\s+(?:ответ[а]?\s+)?|^(?:ich\s+)?warte\s+auf\s+|^waiting\s+(?:for\s+)?|^czekam\s+na\s+|^bekliyorum[:,]?\s+|^j[’']attends\s+|^espero\s+/i,
 bd:/(день\s+рожд\S*|др\s|geburtstag|birthday|urodzin\S*|doğum\s+günü|anniversaire|cumpleaños)/i,
 doc:/(договор\S*|полис\S*|сч[её]т\S*|справк\S*|паспорт\S*|квитанци\S*|vertrag\S*|rechnung\S*|police|ausweis|bescheid\S*|contract|invoice|policy|passport|umow\S*|faktur\S*|polis\S*|sözleşme\S*|fatura\S*|contrat|facture|contrato|factura)/i,
 cur:/(?:^|\s)(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|eur\S*|евро|руб\S*|₽|zł|pln|tl|₺|\$|usd|долл\S*|lira\S*)(?=\s|$|[.,;])/i,
 dec:/(?:^|\s)(\d{1,6}),(\d{2})(?=\s|$)/,
 dot:/(?:^|\s)(\d{1,6})\.(\d{2})(?=\s|$)/};
function qi5parse(raw){const t=String(raw||'').replace(/\s+/g,' ').trim();const r={k:'note',t,due:'',time:'',amt:'',items:[],et:'event'};if(!t)return r;
 let rest=t,amt='';let mm=t.match(qi5RX.cur);if(mm){amt=mm[1];rest=t.replace(mm[0],' ')}else if(mm=t.match(qi5RX.dec)){amt=mm[1]+','+mm[2];rest=t.replace(mm[0],' ')}else if((mm=t.match(qi5RX.dot))&&(+mm[2]>12||+mm[1]>31)){amt=mm[1]+','+mm[2];rest=t.replace(mm[0],' ')}
 if(amt){r.k='exp';r.amt=amt.replace('.',',');r.t=rest.replace(/\s+/g,' ').replace(/^[\s,.;:—–-]+|[\s,.;:—–-]+$/g,'');r.due=ga(0);return r}
 mm=t.match(qi5RX.shopA)||t.match(qi5RX.shopZ);if(mm){r.k='shop';r.items=mm[1].split(/\s*(?:,|;|\s(?:и|und|and|i|ve|et|y)\s)\s*/i).map(s=>s.replace(/^(?:du|de la|des|de l’|de l'|d’|d')\s*/i,'').trim()).filter(Boolean).slice(0,20);r.t=r.items.join(', ');return r}
 let w={due:'',time:'',rest:t};try{w=td9when(t)}catch{}
 if(!w.time){const m2=(' '+w.rest+' ').match(/\s(\d{1,2})[:.](\d{2})\s/);if(m2&&+m2[1]<24&&+m2[2]<60){w.time=Gs(+m2[1])+':'+m2[2];w.rest=(' '+w.rest+' ').replace(m2[0],' ').trim()}}
 r.due=w.due;r.time=w.time;const clean=Fi((w.rest||t).replace(/\s(?:до|к|bis|by|until|do|avant|antes de|hasta)\s*$/i,'').replace(/^[\s,.;:—–-]+|[\s,.;:—–-]+$/g,''))||t;
 if(qi5RX.bd.test(t)){r.k='event';r.et='birthday';r.t=clean;if(!r.due)r.due=ga(0);return r}
 {const pm=clean.match(qi5RX.prom),wm=clean.match(qi5RX.wait);if(pm||wm){r.k='task';r.knd=pm?'p':'w';r.t=Fi(clean.replace(pm?qi5RX.prom:qi5RX.wait,'').trim())||clean;return r}}
 if(qi5RX.verb.test(' '+t)){r.k='task';r.t=clean;return r}
 if((w.due&&w.time)||(qi5RX.ev.test(t)&&(w.due||w.time))){r.k='event';r.t=clean;if(!r.due)r.due=ga(0);return r}
 if(w.due){r.k='task';r.t=clean;return r}
 if(qi5RX.doc.test(t)){r.k='doc';return r}
 return r}
const qi5in=()=>(Array.isArray(g.inbox)||(g.inbox=[]),g.inbox);
function qi5cats(){try{return $o.map(a=>[a[0],gi('expense',a[0])])}catch{return[]}}
function qi5cat(t){try{const lt=String(t).toLowerCase();const hit=$o.find(a=>a[3]&&new RegExp(a[3],'i').test(lt));if(hit)return hit[0];return yu('expense',t)[0]}catch{return''}}
const qi5old=L.st20;
function qi5open(pre){let S={txt:pre&&pre.t||'',from:pre&&pre.id||'',man:!1,p:null,view:'main'};S.p=qi5parse(S.txt);
 const sh=H(za('t'),'',()=>{}),box=sh.querySelector('.dtscroll');
 new MutationObserver((p,h)=>{sh.isConnected||(h.disconnect(),v())}).observe(document.body,{childList:!0});
 const dstr=d=>{if(!d)return'';const n=d===ga(0)?nz5t('today'):d===ga(1)?nz5t('tomorrow'):'';try{return n||se(d).toLocaleDateString(nz5low(),{weekday:'short',day:'numeric',month:'short'})}catch{return d}};
 const card=()=>{const p=S.p,k=p.k;if(!S.txt.trim())return`<p class="fdsmall qi5ex">${i(nz5t('ex'))}:</p><div class="qi5exs">${nz5EX[nz5i()].map((e,j)=>`<button type="button" data-ex="${j}">${i(e)}</button>`).join('')}</div>`;
  let rows='';
  if(k==='task'||k==='event')rows=`<label class="qi5r"><span>${i(nz5t('what'))}</span><input class="field" data-p="t" value="${i(p.t)}"></label><div class="qi5r"><span>${i(nz5t('whenL'))}</span><div class="qi5dt"><input class="field" type="date" data-p="due" value="${i(p.due||'')}"><input class="field" type="time" data-p="time" value="${i(p.time||'')}"></div></div>${p.due?`<p class="qi5hint">${i(dstr(p.due))}${p.time?', '+i(p.time):''}</p>`:''}`;
  else if(k==='exp')rows=`<div class="qi5r"><span>${i(nz5t('sum'))}</span><input class="field" data-p="amt" inputmode="decimal" value="${i(p.amt||'')}"></div><label class="qi5r"><span>${i(nz5t('what'))}</span><input class="field" data-p="t" value="${i(p.t)}"></label>${(()=>{const cs=qi5cats();if(!cs.length)return'';const cur=p.cat||(p.cat=qi5cat(p.t));return`<label class="qi5r"><span>${i(nz5t('cat'))}</span><select class="field" data-p="cat">${cs.map(([a,b])=>`<option value="${i(a)}" ${a===cur?'selected':''}>${i(b)}</option>`).join('')}</select></label>`})()}`;
  else if(k==='shop')rows=`<label class="qi5r"><span>${i(nz5t('what'))}</span><input class="field" data-p="t" value="${i(p.items.length?p.items.join(', '):p.t)}"></label>`;
  else rows=`<p class="qi5note">${i(p.t)}</p>`;
  return`<div class="qi5und"><small>${i(nz5t('und'))}</small><h3>${qi5IC[k]} ${i(nz5t('k_'+k))}${k==='task'&&p.knd?` · ${p.knd==='p'?'🤝':'⏳'} ${i(ax5t(p.knd==='p'?'k_p':'k_w'))}`:''}</h3>${rows}<p class="qi5wh"><span>${i(nz5t('where'))}</span><b>${i(nz5t('w_'+k))} ›</b></p></div><div class="qi5ks">${qi5K.map(q=>`<button type="button" class="${q===k?'on':''}" data-k="${q}">${qi5IC[q]} ${i(nz5t('k_'+q))}</button>`).join('')}</div><button type="button" class="dcadd gold" data-save="1">${i(k==='doc'?nz5t('next'):nz5t('save'))}</button><button type="button" class="btn qi5lt" data-later="1">${i(nz5t('later'))}</button><p class="fdsmall qi5rl">${i(nz5t('rules'))}</p>`};
 const main=()=>{const nI=qi5in().length;box.innerHTML=`<textarea class="field qi5tx" rows="3" maxlength="600" placeholder="${i(nz5t('qPh'))}">${i(S.txt)}</textarea><div class="qi5three"><button type="button" data-mic="1"><b>🎙</b>${i(nz5t('voice'))}</button><button type="button" data-sc1="1"><b><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#D9B96E" stroke-width="1.6" stroke-linecap="round"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10"/></svg></b>${i(Yn('sc9'))}</button><button type="button" data-ph="1"><b>📎</b>${i(nz5t('file'))}</button></div><div class="qi5card">${card()}</div><div class="qi5bot">${nI?`<button type="button" class="linkbtn" data-inb="1">📥 ${i(nz5t('inbox'))} (${nI})</button>`:'<span></span>'}<button type="button" class="linkbtn" data-tpl="1">📄 ${i(nz5t('tplDoc'))}</button></div>`;
  const ta=box.querySelector('.qi5tx');let tm=0;ta.oninput=()=>{S.txt=ta.value;clearTimeout(tm);tm=setTimeout(()=>{const keep=S.man?S.p.k:null;S.p=qi5parse(S.txt);if(keep){S.p.k=keep;if(keep==='shop'&&!S.p.items.length)S.p.items=[S.p.t]}reCard()},280)};
  box.querySelector('[data-mic]').onclick=e=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition,b=e.currentTarget;if(!SR){T(Z('micNo'));return}try{const r=new SR;r.lang=he();r.interimResults=!1;b.classList.add('on');r.onend=()=>b.classList.remove('on');r.onresult=ev=>{ta.value=(ta.value?ta.value+' ':'')+ev.results[0][0].transcript;ta.oninput()};r.start()}catch{T(Z('micNo'))}};
  {const sc=box.querySelector('[data-sc1]');sc&&(sc.onclick=()=>{sh.remove();try{scHome()}catch{}})}
  box.querySelectorAll('[data-ph]').forEach(b=>b.onclick=()=>{const j=+b.dataset.ph,txt=S.txt;sh.remove();qi5old();const o2=document.querySelector('.dtsheet');if(!o2)return;const ph=o2.querySelector('.st20ph');if(ph&&txt){ph.value=txt;ph.dispatchEvent(new Event('input'))}const inp=o2.querySelectorAll('input[data-q]')[j];inp&&inp.click()});
  box.querySelector('[data-tpl]').onclick=()=>{sh.remove();qi5old();const o2=document.querySelector('.dtsheet [data-tpl]');o2&&o2.click()};
  const ib=box.querySelector('[data-inb]');ib&&(ib.onclick=()=>inbox());
  bind();if(!S.txt)setTimeout(()=>{sh.isConnected&&ta.focus()},150)};
 const reCard=()=>{const c=box.querySelector('.qi5card');if(c){c.innerHTML=card();bind()}};
 const rd=()=>{box.querySelectorAll('.qi5card [data-p]').forEach(f=>{const key=f.dataset.p;S.p[key]=f.value.trim();if(key==='t'&&S.p.k==='shop')S.p.items=f.value.split(/\s*[,;]\s*/).map(s=>s.trim()).filter(Boolean)})};
 const bind=()=>{const c=box.querySelector('.qi5card');if(!c)return;
  c.querySelectorAll('[data-ex]').forEach(b=>b.onclick=()=>{const ta=box.querySelector('.qi5tx');ta.value=nz5EX[nz5i()][+b.dataset.ex];S.txt=ta.value;S.man=!1;S.p=qi5parse(S.txt);reCard()});
  c.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{rd();const k=b.dataset.k,p=S.p;S.man=!0;p.k=k;if(k==='shop'&&!p.items.length)p.items=[p.t];if((k==='event')&&!p.due)p.due=ga(0);if(k==='exp'&&!p.due)p.due=ga(0);if(k==='note'||k==='doc')p.t=S.txt.trim();reCard()});
  c.querySelectorAll('[data-p]').forEach(f=>f.onchange=()=>{rd();if(f.dataset.p==='due'||f.dataset.p==='time')reCard()});
  const sv=c.querySelector('[data-save]');sv&&(sv.onclick=()=>{rd();save()});const lt=c.querySelector('[data-later]');lt&&(lt.onclick=()=>{const t=S.txt.trim();if(!t)return;if(S.from){const it=qi5in().find(q=>q.id===S.from);it?it.t=t:qi5in().unshift({id:V(),t,d:Date.now()})}else qi5in().unshift({id:V(),t,d:Date.now()});$();T(nz5t('toInbox'));S={txt:'',from:'',man:!1,p:qi5parse(''),view:'main'};main()})};
 const fin=k=>{if(S.from){g.inbox=qi5in().filter(q=>q.id!==S.from)}$();T(nz5t('okSaved',{w:nz5t('w_'+k)}));S={txt:'',from:'',man:!1,p:qi5parse(''),view:'main'};main()};
 const save=()=>{const p=S.p,k=p.k,t=String(p.t||S.txt).trim();if(!S.txt.trim()){T(nz5t('needText'));return}
  if(k==='task'){g.tasks.push({id:V(),t:t.slice(0,200),due:/^\d{4}-\d\d-\d\d$/.test(p.due||'')?p.due:'',time:/^\d\d:\d\d$/.test(p.time||'')?p.time:'',prio:2,proj:'',done:!1,knd:p.knd||'',c:Date.now()});fin(k)}
  else if(k==='event'){fu({title:t.slice(0,200),date:/^\d{4}-\d\d-\d\d$/.test(p.due||'')?p.due:ga(0),type:p.et==='birthday'?'birthday':'event',yearly:p.et==='birthday',time:/^\d\d:\d\d$/.test(p.time||'')?p.time:''});fin(k)}
  else if(k==='note'){um().unshift({id:V(),k:'text',text:S.txt.trim(),d:Date.now()});fin(k)}
  else if(k==='shop'){const it=(p.items.length?p.items:[t]).map(q=>({t:Fi(q)}));try{k3add(it)}catch{}fin(k)}
  else if(k==='exp'){let n=null;try{n=aa(String(p.amt||''))}catch{}if(!n||n<=0){T(nz5t('needSum'));const f=box.querySelector('[data-p=amt]');f&&f.focus();return}
   try{const F=U(),acc=F.accounts.find(l=>l.type!=='savings')||F.accounts[0]||{id:'',cur:F.cur};const cat=p.cat||qi5cat(t)||yu('expense','')[0];F.tx.push({id:V(),kind:'expense',amt:n,cur:acc.cur,date:ga(0),time:'',cat,payee:t.slice(0,60),acc:acc.id,need:'var',status:'done',repeat:!1,note:''});So('quick expense')}catch{T('—');return}fin(k)}
  else if(k==='doc'){const txt=S.txt.trim(),from=S.from;sh.remove();if(from){g.inbox=qi5in().filter(q=>q.id!==from);$()}qi5old();const o2=document.querySelector('.dtsheet');if(!o2)return;const ph=o2.querySelector('.st20ph');if(ph){ph.value=txt;ph.dispatchEvent(new Event('input'));const go=o2.querySelector('[data-go]');go&&go.click()}}};
 const inbox=()=>{const L2=qi5in();box.innerHTML=`<p class="fdsmall">${i(nz5t('inboxS'))}</p><div class="qi5inb">${L2.map(q=>`<div class="qi5ir"><button type="button" data-o="${q.id}"><b>${i(q.t)}</b><small>${i(nz5date(q.d,!0))}</small></button><button type="button" class="st27x" data-rm="${q.id}" aria-label="${i(nz5t('del'))}">×</button></div>`).join('')||`<p class="st29e">${i(nz5t('none'))}</p>`}</div><button type="button" class="btn" data-bk="1" style="width:100%">‹ ${i(nz5t('back'))}</button>`;
  box.querySelector('[data-bk]').onclick=()=>main();
  box.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{const q=L2.find(z2=>z2.id===b.dataset.o);if(!q)return;S={txt:q.t,from:q.id,man:!1,p:qi5parse(q.t),view:'main'};main()});
  box.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{g.inbox=qi5in().filter(z2=>z2.id!==b.dataset.rm);$();inbox()})};
 main();return sh}
L.st20=function(a){if(a&&a.doc)return qi5old.apply(this,arguments);return qi5open(a&&a.t?a:null)};
{const st=document.createElement('style');st.textContent=`
.nz5mini{display:flex;gap:8px;margin:0 0 12px}.nz5mini button{flex:1;min-width:0;text-align:left;border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--muted);font:inherit;font-size:12px;line-height:1.25;padding:8px 10px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nz5mini b{display:block;font-family:var(--display);font-size:20px;font-weight:600;color:var(--ink)}
.nz5fl{display:flex;gap:6px;margin:0 0 10px;overflow-x:auto;scrollbar-width:none;align-items:center}.nz5fl::-webkit-scrollbar{display:none}.nz5fl button{flex:none;border:1px solid var(--line);border-radius:999px;background:transparent;color:var(--ink);font:inherit;font-size:13.5px;padding:6px 11px;cursor:pointer;white-space:nowrap}.nz5fl button small{color:var(--muted);font-size:11.5px}.nz5fl button.on{border-color:var(--gold,#E3C27E);background:color-mix(in srgb,var(--gold) 15%,transparent);color:var(--gold,#E3C27E)}
.nz5sb{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 2px 6px;min-height:24px;font-size:13.5px;color:var(--muted)}.nz5sb span{flex:1}.nz5sb .linkbtn{font-size:14px;flex:none}.nz5sb .btn{flex:none;display:inline-flex;align-items:center;gap:6px;font-size:14.5px;padding:9px 14px}.nz5sb .btn svg{width:16px;height:16px}.nz5sb .btn[disabled]{opacity:.45}
.nz5w{position:relative;margin:0 0 9px;border-radius:18px;overflow:hidden}
.nz5n{position:relative;z-index:1;border:1px solid var(--line);border-radius:18px;background:var(--surface);padding:11px 46px 10px 14px;font-size:14.5px;line-height:1.38;cursor:pointer;transition:transform .18s;min-width:0}
.nz5w.sw .nz5n{transform:translateX(-96px)}
.nz5n>b{display:block;font-size:16px;font-weight:600;margin:0 0 2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.nz5b{color:color-mix(in srgb,var(--ink) 80%,var(--muted));overflow-wrap:anywhere;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}.nz5b .st29li{font-size:14px}
.nz5nx{display:block}.nz5nx i{font-style:normal;color:var(--gold,#E3C27E)}
.nz5n>small{display:block;margin-top:6px;font-size:12px;color:var(--muted)}.nz5n>small i{font-style:normal;color:var(--gold,#E3C27E)}
.nz5n.pn{border-color:color-mix(in srgb,var(--gold) 55%,var(--line))}.nz5n.r{border-left:4px solid #F0655A}.nz5n.y{border-left:4px solid #E9B44C}.nz5n.g{border-left:4px solid #2FBF6A}.nz5n.b{border-left:4px solid #5B8DEF}
.nz5m{position:absolute;right:4px;top:4px;width:42px;height:42px;border:0;border-radius:50%;background:transparent;color:var(--gold,#E3C27E);font-size:24px;line-height:1;cursor:pointer}
.nz5d{position:absolute;right:0;top:0;bottom:0;width:88px;border:0;border-radius:16px;background:#8a2a24;color:#fff;font:inherit;font-size:12.5px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;cursor:pointer;visibility:hidden}.nz5w.sw .nz5d,.nz5w:has(.nz5n[style*="translate"]) .nz5d{visibility:visible}.nz5d svg{width:20px;height:20px}
.nz5n:has(.nz5ck){padding-left:48px}.nz5ck{position:absolute;left:12px;top:12px;width:24px;height:24px;border-radius:50%;border:1.5px solid var(--gold,#E3C27E);display:grid;place-items:center;color:#0A1712}.nz5n.pk .nz5ck{background:var(--gold,#E3C27E)}.nz5ck svg{width:15px;height:15px}.nz5n.pk{border-color:var(--gold,#E3C27E)}
.nz5e{padding:18px 4px}
.nz5undo{position:fixed;left:14px;right:14px;bottom:calc(env(safe-area-inset-bottom,0px) + 104px);z-index:120;display:flex;align-items:center;gap:6px;background:#1b1b1b;color:#f0e7d2;border:1px solid #6b5a2e;border-radius:14px;padding:6px 6px 6px 14px;font-size:14.5px;box-shadow:0 10px 30px rgba(0,0,0,.5);max-width:520px;margin:0 auto}.nz5undo span{flex:1}.nz5undo button{border:0;background:transparent;color:#E3C27E;font:inherit;font-weight:600;padding:9px 10px;cursor:pointer}.nz5undo [data-c]{color:#9a917e;font-size:20px;font-weight:400}
.nz5mn{display:flex;flex-direction:column}.nz5mn>button{display:flex;align-items:center;gap:12px;border:0;border-top:1px solid color-mix(in srgb,var(--line) 60%,transparent);background:transparent;color:var(--ink);font:inherit;font-size:16.5px;padding:14px 4px;text-align:left;cursor:pointer}.nz5mn>button:first-child{border-top:0}.nz5mn>button.r{color:#FF8B7E}.nz5mn svg{width:18px;height:18px}
.nz5mc{display:flex;align-items:center;justify-content:space-between;gap:10px;border-top:1px solid color-mix(in srgb,var(--line) 60%,transparent);padding:10px 4px;font-size:16.5px}
.nz5cols{display:flex;gap:10px}.nz5cols button{width:30px;height:30px;border-radius:50%;border:2px solid transparent;cursor:pointer;padding:0}.nz5cols button.on{border-color:var(--ink,#fff);box-shadow:0 0 0 2px var(--bg,#0b1611) inset}
.nz5wh{margin:10px 0 8px;font-size:15px}.nz5two{display:flex;gap:8px;margin:0 0 12px}
.nz5ed{position:fixed;inset:0;z-index:90;background:var(--bg,#0b1611);color:var(--ink);display:flex;flex-direction:column;padding:calc(env(safe-area-inset-top,0px) + 10px) 16px calc(env(safe-area-inset-bottom,0px) + 10px);animation:dzfade .18s}
.nz5bar{display:flex;align-items:center;gap:8px;flex:none;margin:0 0 10px}.nz5bar em{flex:1;min-width:0;font-style:normal;font-size:13px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.nz5bar button{flex:none;width:42px;height:42px;border-radius:50%;border:1px solid var(--line);background:var(--surface);color:var(--ink);font-size:17px;display:grid;place-items:center;cursor:pointer;padding:0}.nz5bar button svg{width:20px;height:20px}.nz5bar button.on{border-color:var(--gold,#E3C27E);background:color-mix(in srgb,var(--gold) 18%,transparent)}.nz5bar button.r{border-color:color-mix(in srgb,#F0655A 60%,var(--line));color:#FF8B7E}
.nz5bar button.ok{width:auto;padding:0 16px;border-radius:999px;border:0;background:linear-gradient(180deg,#E9CB8A,#C9A55E);color:#141414;font:inherit;font-size:15px;font-weight:600}
.nz5col{flex:none;margin:0 0 10px}.nz5col[hidden]{display:none}
.nz5body{flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-bottom:10px}
.nz5ti{display:block;width:100%;border:0;border-bottom:1px solid color-mix(in srgb,var(--line) 70%,transparent);background:transparent;color:var(--ink);font-family:var(--display);font-size:28px;font-weight:600;padding:4px 0 8px;margin:0 0 10px;outline:0}.nz5ti::placeholder{color:var(--muted);opacity:.7}.nz5st{border:0}
.nz5tx.nz5pl{display:block;width:100%;border:0;background:transparent;color:var(--ink);font:inherit;font-size:17px;line-height:1.5;padding:0;margin:0 0 10px;outline:0;resize:none;min-height:64px}
.nz5it{display:flex;align-items:center;gap:8px;margin:0 0 6px}.nz5it .field{flex:1;min-width:0;min-height:0;padding:9px 10px}.nz5it.d .field{color:var(--muted);text-decoration:line-through}.nz5it.nw .st29cb{border-style:dashed;opacity:.6}.nz5it.nw .field{border-style:dashed}
.nz5acts{flex:none;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:8px 0 6px}.nz5acts::-webkit-scrollbar{display:none}.nz5acts button{flex:none;border:1px solid var(--line);border-radius:12px;background:var(--surface);color:var(--ink);font:inherit;font-size:14px;padding:9px 12px;cursor:pointer;white-space:nowrap}.nz5acts button.on{border-color:#FF8B7E;color:#FF8B7E}
.nz5ft{flex:none;text-align:center;font-size:12px;color:var(--muted);min-height:16px}
.qi5tx{min-height:84px;font-size:17px;border-color:color-mix(in srgb,var(--gold) 45%,var(--line))}
.qi5three{display:flex;gap:8px;margin:8px 0 12px}.qi5three button{flex:1;border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink);font:inherit;font-size:13.5px;padding:9px 4px;cursor:pointer;text-align:center}.qi5three b{display:block;font-size:21px;font-weight:400}.qi5three button.on{border-color:#FF8B7E;color:#FF8B7E}
.qi5und{border:1px solid color-mix(in srgb,var(--gold) 45%,var(--line));border-radius:18px;padding:12px 14px;background:color-mix(in srgb,var(--gold) 6%,var(--surface))}.qi5und>small{font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}.qi5und h3{font-family:var(--display);font-weight:600;font-size:24px;margin:2px 0 8px;color:var(--ink)}
.qi5r{display:flex;align-items:center;gap:10px;padding:5px 0;border-top:1px solid color-mix(in srgb,var(--line) 55%,transparent)}.qi5r>span{flex:none;width:76px;font-size:13.5px;color:var(--muted)}.qi5r .field{flex:1;min-width:0;min-height:0;padding:8px 10px;font-size:15.5px}.qi5dt{flex:1;display:flex;gap:6px;min-width:0}.qi5dt .field:last-child{flex:.7}
.qi5hint{margin:2px 0 4px 86px;font-size:13.5px;color:var(--gold,#E3C27E)}.qi5note{margin:0 0 6px;font-size:15.5px;overflow-wrap:anywhere}
.qi5wh{display:flex;justify-content:space-between;margin:4px 0 0;padding-top:8px;border-top:1px solid color-mix(in srgb,var(--line) 55%,transparent);font-size:14px}.qi5wh span{color:var(--muted)}.qi5wh b{font-weight:500;color:var(--gold,#E3C27E)}
.qi5ks{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}.qi5ks button{border:1px solid var(--line);border-radius:999px;background:transparent;color:var(--ink);font:inherit;font-size:13.5px;padding:6px 11px;cursor:pointer}.qi5ks button.on{border-color:var(--gold,#E3C27E);background:color-mix(in srgb,var(--gold) 15%,transparent);color:var(--gold,#E3C27E)}
.qi5lt{display:block;width:100%;font-size:15px;margin:0 0 8px}.qi5rl{margin:4px 0 0}
.qi5exs{display:flex;flex-direction:column;gap:6px}.qi5exs button{text-align:left;border:1px dashed color-mix(in srgb,var(--gold) 35%,var(--line));border-radius:12px;background:transparent;color:var(--ink);font:inherit;font-size:15px;padding:10px 12px;cursor:pointer}
.qi5bot{display:flex;justify-content:space-between;gap:10px;margin:14px 0 4px}.qi5bot .linkbtn{font-size:14px}
.qi5ir{display:flex;align-items:center;gap:6px;border-top:1px solid color-mix(in srgb,var(--line) 55%,transparent)}.qi5ir:first-child{border-top:0}.qi5ir>button:first-child{flex:1;min-width:0;text-align:left;border:0;background:transparent;color:var(--ink);font:inherit;padding:11px 2px;cursor:pointer}.qi5ir b{display:block;font-weight:500;font-size:15.5px;overflow-wrap:anywhere}.qi5ir small{color:var(--muted);font-size:12px}.qi5inb{margin:0 0 12px}
`;document.head.appendChild(st)}
