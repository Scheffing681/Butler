/* v196: manager of affairs — repeat, steps, promises and waiting, automatic deadlines, "now", weekly review, history, life chains */
const ax5S={
now:['Что делать сейчас','Was jetzt tun','What to do now','Co zrobić teraz','Şimdi ne yapmalı','Que faire maintenant','Qué hacer ahora'],
nowS:['Самое важное на эту минуту — сверху','Das Wichtigste für diesen Moment steht oben','The most important thing right now is on top','Najważniejsze na tę chwilę jest u góry','Şu an en önemlisi en üstte','Le plus important à cet instant est en haut','Lo más importante ahora está arriba'],
top:['Сделайте сейчас','Jetzt erledigen','Do now','Zrób teraz','Şimdi yap','À faire maintenant','Hacer ahora'],
free:['Срочного нет. Можно заняться тем, что важно, но не горит.','Nichts Dringendes. Zeit für das Wichtige ohne Eile.','Nothing urgent. Time for what matters but is not burning.','Nic pilnego. Czas na to, co ważne, ale nie pali się.','Acil bir şey yok. Önemli ama acele olmayan işlere zaman.','Rien d’urgent. Du temps pour l’important sans urgence.','Nada urgente. Tiempo para lo importante sin prisa.'],
over:['просрочено','überfällig','overdue','po terminie','gecikmiş','en retard','atrasado'],
today:['сегодня','heute','today','dziś','bugün','aujourd’hui','hoy'],
prom:['Я обещал','Ich habe versprochen','I promised','Obiecałem','Söz verdim','J’ai promis','Prometí'],
wait:['Жду ответа','Ich warte auf Antwort','Waiting for a reply','Czekam na odpowiedź','Yanıt bekliyorum','J’attends une réponse','Espero respuesta'],
waitD:['жду %n дн.','warte seit %n T.','waiting %n d','czekam %n dni','%n gündür bekliyorum','j’attends depuis %n j','espero %n d'],
got:['Получил ✓','Erhalten ✓','Received ✓','Otrzymałem ✓','Aldım ✓','Reçu ✓','Recibido ✓'],
dl:['Сроки на 30 дней','Fristen in 30 Tagen','Deadlines in 30 days','Terminy na 30 dni','30 günlük süreler','Échéances sur 30 jours','Plazos en 30 días'],
dlDoc:['документ','Dokument','document','dokument','belge','document','documento'],
dlBill:['платёж','Zahlung','payment','płatność','ödeme','paiement','pago'],
dlProj:['проект','Projekt','project','projekt','proje','projet','proyecto'],
inD:['через %n дн.','in %n T.','in %n d','za %n dni','%n gün sonra','dans %n j','en %n d'],
inbox:['Входящие','Eingang','Inbox','Skrzynka','Gelen kutusu','Boîte de réception','Bandeja de entrada'],
inboxS:['не разобрано: %n','nicht einsortiert: %n','not sorted: %n','nieuporządkowane: %n','düzenlenmemiş: %n','non classé : %n','sin ordenar: %n'],
week:['Обзор недели','Wochenrückblick','Weekly review','Przegląd tygodnia','Haftalık gözden geçirme','Revue de la semaine','Revisión semanal'],
weekS:['Раз в неделю: что сделано, что зависло, что впереди','Einmal pro Woche: was erledigt ist, was hängt, was kommt','Once a week: what is done, what is stuck, what is ahead','Raz w tygodniu: co zrobione, co utknęło, co przed nami','Haftada bir: ne yapıldı, ne takıldı, ne var','Une fois par semaine : fait, bloqué, à venir','Una vez por semana: lo hecho, lo atascado, lo que viene'],
weekLast:['Последний обзор: %d','Letzter Rückblick: %d','Last review: %d','Ostatni przegląd: %d','Son gözden geçirme: %d','Dernière revue : %d','Última revisión: %d'],
weekDue:['Пора сделать обзор недели','Zeit für den Wochenrückblick','Time for the weekly review','Czas na przegląd tygodnia','Haftalık gözden geçirme zamanı','C’est le moment de la revue hebdomadaire','Toca la revisión semanal'],
wDone:['Сделано за 7 дней','In 7 Tagen erledigt','Done in 7 days','Zrobione w 7 dni','7 günde yapılanlar','Fait en 7 jours','Hecho en 7 días'],
wOver:['Просрочено — решите судьбу','Überfällig – bitte entscheiden','Overdue — decide','Po terminie — zdecyduj','Gecikmiş — karar verin','En retard — décidez','Atrasado — decida'],
wNo:['Без срока','Ohne Termin','No date','Bez terminu','Tarihsiz','Sans date','Sin fecha'],
wAhead:['Впереди 7 дней','Die nächsten 7 Tage','The next 7 days','Najbliższe 7 dni','Önümüzdeki 7 gün','Les 7 prochains jours','Los próximos 7 días'],
wEnd:['Обзор завершён ✓','Rückblick abgeschlossen ✓','Review finished ✓','Przegląd zakończony ✓','Gözden geçirme bitti ✓','Revue terminée ✓','Revisión terminada ✓'],
tom:['→ завтра','→ morgen','→ tomorrow','→ jutro','→ yarın','→ demain','→ mañana'],
nothing:['Пусто — хорошо','Leer – gut so','Empty — good','Pusto — dobrze','Boş — güzel','Vide — tant mieux','Vacío — bien'],
chains:['Жизненные цепочки','Lebensabläufe','Life chains','Łańcuchy spraw','Yaşam zincirleri','Chaînes de vie','Cadenas de vida'],
chainsS:['Большое дело — готовым списком шагов. Создаётся проект, шаги можно менять.','Ein großes Vorhaben als fertige Schrittliste. Es entsteht ein Projekt, die Schritte lassen sich ändern.','A big matter as a ready list of steps. A project is created; steps can be changed.','Duża sprawa jako gotowa lista kroków. Powstaje projekt, kroki można zmieniać.','Büyük bir iş hazır adım listesiyle. Bir proje oluşur, adımlar değiştirilebilir.','Une grande affaire en liste d’étapes prête. Un projet est créé, les étapes sont modifiables.','Un asunto grande como lista de pasos. Se crea un proyecto; los pasos se pueden cambiar.'],
chDate:['К какому дню (необязательно)','Bis wann (optional)','By which day (optional)','Na kiedy (opcjonalnie)','Hangi güne kadar (isteğe bağlı)','Pour quel jour (facultatif)','Para qué día (opcional)'],
chMake:['Создать проект','Projekt anlegen','Create project','Utwórz projekt','Proje oluştur','Créer le projet','Crear proyecto'],
steps:['шагов: %n','%n Schritte','%n steps','kroków: %n','%n adım','%n étapes','%n pasos'],
hist:['История по человеку','Verlauf zu einer Person','History by person','Historia osoby','Kişiye göre geçmiş','Historique par personne','Historial por persona'],
histPh:['Имя …','Name …','Name …','Imię …','İsim …','Nom …','Nombre …'],
histS:['Заметки, встречи, дела и события, где упомянут этот человек','Notizen, Gespräche, Aufgaben und Termine, in denen die Person vorkommt','Notes, meetings, tasks and events mentioning this person','Notatki, spotkania, zadania i wydarzenia z tą osobą','Bu kişinin geçtiği notlar, görüşmeler, görevler ve etkinlikler','Notes, rencontres, tâches et événements mentionnant cette personne','Notas, reuniones, tareas y eventos donde aparece esta persona'],
histNo:['Пока ничего не записано','Noch nichts notiert','Nothing recorded yet','Nic jeszcze nie zapisano','Henüz kayıt yok','Rien de noté pour l’instant','Aún no hay nada anotado'],
rep:['Повтор','Wiederholung','Repeat','Powtarzanie','Tekrar','Répétition','Repetición'],
r_:['не повторять','nicht wiederholen','do not repeat','nie powtarzać','tekrarlama','ne pas répéter','no repetir'],
r_d:['каждый день','täglich','every day','codziennie','her gün','chaque jour','cada día'],
r_w:['каждую неделю','wöchentlich','every week','co tydzień','her hafta','chaque semaine','cada semana'],
r_m:['каждый месяц','monatlich','every month','co miesiąc','her ay','chaque mois','cada mes'],
r_y:['каждый год','jährlich','every year','co rok','her yıl','chaque année','cada año'],
knd:['Что это','Art','Kind','Rodzaj','Tür','Type','Tipo'],
k_:['моё дело','meine Aufgabe','my task','moje zadanie','kendi işim','ma tâche','mi tarea'],
k_p:['я обещал','ich habe versprochen','I promised','obiecałem','söz verdim','j’ai promis','prometí'],
k_w:['жду ответа','ich warte auf Antwort','waiting for a reply','czekam na odpowiedź','yanıt bekliyorum','j’attends une réponse','espero respuesta'],
who:['Кто (человек)','Wer (Person)','Who (person)','Kto (osoba)','Kim (kişi)','Qui (personne)','Quién (persona)'],
sub:['Шаги','Schritte','Steps','Kroki','Adımlar','Étapes','Pasos'],
subPh:['Новый шаг …','Neuer Schritt …','New step …','Nowy krok …','Yeni adım …','Nouvelle étape …','Nuevo paso …'],
auto:['Сроки из документов сами становятся делами','Fristen aus Dokumenten werden automatisch zu Aufgaben','Deadlines from documents become tasks automatically','Terminy z dokumentów same stają się zadaniami','Belgelerdeki süreler kendiliğinden göreve dönüşür','Les échéances des documents deviennent des tâches automatiquement','Los plazos de los documentos se convierten en tareas solos'],
autoT:['Срок: %t','Frist: %t','Deadline: %t','Termin: %t','Süre: %t','Échéance : %t','Plazo: %t'],
nextMade:['Следующий раз: %d','Nächstes Mal: %d','Next time: %d','Następnym razem: %d','Bir sonraki: %d','Prochaine fois : %d','Próxima vez: %d'],
home:['Что делать сейчас','Was jetzt tun','What to do now','Co zrobić teraz','Şimdi ne yapmalı','Que faire maintenant','Qué hacer ahora'],
openT:['Дела','Aufgaben','Tasks','Zadania','Görevler','Tâches','Tareas'],
noteL:['заметка','Notiz','note','notatka','not','note','nota'],
evL:['событие','Termin','event','wydarzenie','etkinlik','événement','evento'],
taskL:['дело','Aufgabe','task','zadanie','görev','tâche','tarea'],
doneL:['сделано','erledigt','done','zrobione','yapıldı','fait','hecho']
};
const ax5CH=[
['🏠',['Переезд','Umzug','Moving home','Przeprowadzka','Taşınma','Déménagement','Mudanza'],[
['Расторгнуть старый договор аренды','Alten Mietvertrag kündigen','Give notice on the old lease','Wypowiedzieć starą umowę najmu','Eski kira sözleşmesini feshet','Résilier l’ancien bail','Rescindir el contrato de alquiler antiguo'],
['Подписать новый договор','Neuen Mietvertrag unterschreiben','Sign the new lease','Podpisać nową umowę','Yeni sözleşmeyi imzala','Signer le nouveau bail','Firmar el nuevo contrato'],
['Заказать перевозку','Umzugswagen oder Firma buchen','Book the movers','Zamówić transport','Nakliye ayarla','Réserver le déménagement','Reservar la mudanza'],
['Перевести свет, интернет, страховки','Strom, Internet, Versicherungen ummelden','Transfer electricity, internet, insurance','Przenieść prąd, internet, ubezpieczenia','Elektrik, internet ve sigortaları taşı','Transférer électricité, internet, assurances','Trasladar luz, internet y seguros'],
['Зарегистрироваться по новому адресу','Wohnsitz ummelden','Register the new address','Zameldować się pod nowym adresem','Yeni adrese kayıt yaptır','Déclarer la nouvelle adresse','Registrar el nuevo domicilio'],
['Сообщить адрес банку и работодателю','Bank und Arbeitgeber informieren','Tell the bank and employer','Podać adres bankowi i pracodawcy','Bankaya ve işverene bildir','Informer la banque et l’employeur','Avisar al banco y al empleador'],
['Сдать старую квартиру, вернуть залог','Alte Wohnung übergeben, Kaution zurückfordern','Hand over the old flat, get the deposit back','Zdać stare mieszkanie, odzyskać kaucję','Eski evi teslim et, depozitoyu geri al','Rendre l’ancien logement, récupérer la caution','Entregar el piso antiguo y recuperar la fianza']]],
['🚗',['Покупка машины','Autokauf','Buying a car','Zakup samochodu','Araba alımı','Achat d’une voiture','Compra de coche'],[
['Определить бюджет','Budget festlegen','Set the budget','Ustalić budżet','Bütçeyi belirle','Fixer le budget','Fijar el presupuesto'],
['Выбрать и осмотреть машину','Auto auswählen und besichtigen','Choose and inspect the car','Wybrać i obejrzeć auto','Arabayı seç ve incele','Choisir et examiner la voiture','Elegir y revisar el coche'],
['Договор купли-продажи','Kaufvertrag abschließen','Sign the purchase contract','Umowa kupna','Satış sözleşmesi','Contrat de vente','Contrato de compraventa'],
['Оформить страховку','Versicherung abschließen','Take out insurance','Wykupić ubezpieczenie','Sigorta yaptır','Souscrire l’assurance','Contratar el seguro'],
['Поставить на учёт','Auto zulassen','Register the car','Zarejestrować auto','Aracı tescil ettir','Immatriculer la voiture','Matricular el coche'],
['Сохранить документы в «Документах»','Unterlagen unter „Dokumente“ ablegen','Save the papers in “Documents”','Zapisać dokumenty w „Dokumentach”','Belgeleri “Belgeler”e kaydet','Ranger les papiers dans « Documents »','Guardar los papeles en «Documentos»']]],
['✈️',['Отпуск','Urlaub','Holiday','Urlop','Tatil','Vacances','Vacaciones'],[
['Выбрать даты и согласовать отпуск','Termine festlegen und Urlaub beantragen','Pick dates and request leave','Wybrać terminy i zgłosić urlop','Tarihleri seç ve izin al','Choisir les dates et poser les congés','Elegir fechas y pedir las vacaciones'],
['Купить билеты','Tickets buchen','Book tickets','Kupić bilety','Biletleri al','Réserver les billets','Comprar los billetes'],
['Забронировать жильё','Unterkunft buchen','Book accommodation','Zarezerwować nocleg','Konaklama ayarla','Réserver le logement','Reservar alojamiento'],
['Проверить паспорт и страховку','Pass und Versicherung prüfen','Check passport and insurance','Sprawdzić paszport i ubezpieczenie','Pasaport ve sigortayı kontrol et','Vérifier passeport et assurance','Revisar pasaporte y seguro'],
['Собрать вещи по списку','Nach Liste packen','Pack by the list','Spakować się według listy','Listeye göre bavul hazırla','Faire les valises selon la liste','Hacer la maleta según la lista'],
['Дом: цветы, почта, ключи','Zuhause: Blumen, Post, Schlüssel','Home: plants, post, keys','Dom: kwiaty, poczta, klucze','Ev: çiçekler, posta, anahtarlar','Maison : plantes, courrier, clés','Casa: plantas, correo, llaves']]],
['💼',['Новая работа','Neuer Job','New job','Nowa praca','Yeni iş','Nouvel emploi','Nuevo trabajo'],[
['Обновить резюме','Lebenslauf aktualisieren','Update the CV','Zaktualizować CV','Özgeçmişi güncelle','Mettre à jour le CV','Actualizar el currículum'],
['Отправить заявки','Bewerbungen verschicken','Send applications','Wysłać aplikacje','Başvuruları gönder','Envoyer les candidatures','Enviar candidaturas'],
['Собеседования','Vorstellungsgespräche','Interviews','Rozmowy kwalifikacyjne','Mülakatlar','Entretiens','Entrevistas'],
['Подписать договор','Arbeitsvertrag unterschreiben','Sign the contract','Podpisać umowę','Sözleşmeyi imzala','Signer le contrat','Firmar el contrato'],
['Уволиться со старого места','Alte Stelle kündigen','Resign from the old job','Złożyć wypowiedzenie','Eski işten ayrıl','Démissionner de l’ancien poste','Dejar el trabajo anterior'],
['Передать документы работодателю','Unterlagen beim Arbeitgeber abgeben','Hand documents to the employer','Przekazać dokumenty pracodawcy','Belgeleri işverene teslim et','Remettre les documents à l’employeur','Entregar los documentos al empleador']]]];
const ax5t=(k,o)=>{let s=(ax5S[k]||[])[nz5i()]||k;if(o)for(const p in o)s=s.replace('%'+p,o[p]);return s};
const ax5days=(a,b)=>Math.round((se(b)-se(a))/864e5);
const ax5d=d=>{try{return se(d).toLocaleDateString(nz5low(),{day:'numeric',month:'short'})}catch{return d}};
/* reliability: the lists the manager works with must always be lists */
try{['tasks','notes','projects','goals','events'].forEach(k=>{Array.isArray(g[k])||(g[k]=[])});Array.isArray(g.inbox)||(g.inbox=[]);g.ax5src=g.ax5src||{}}catch{}
/* repeat: a finished repeating task makes the next one */
function ax5next(due,rep){const t0=ga(0);let d=se(due||t0),n=0;do{if(rep==='d')d.setDate(d.getDate()+1);else if(rep==='w')d.setDate(d.getDate()+7);else if(rep==='m')d.setMonth(d.getMonth()+1);else d.setFullYear(d.getFullYear()+1);n++}while(x(d)<=t0&&n<800);return x(d)}
function ax5recur(){let made=null;(g.tasks||[]).slice().forEach(t=>{if(t.done&&t.rep&&!t.repN){t.repN=1;const nx={id:V(),t:t.t,due:ax5next(t.due,t.rep),time:t.time||'',prio:t.prio||2,proj:t.proj||'',done:!1,rep:t.rep,knd:t.knd||'',who:t.who||'',c:Date.now()};if(t.sub&&t.sub.length)nx.sub=t.sub.map(s=>({t:s.t,d:!1}));g.tasks.push(nx);made=nx}});if(made){$();try{T(ax5t('nextMade',{d:ax5d(made.due)}))}catch{}}return!!made}
/* automatic deadlines from documents */
function ax5dls(days){const t0=ga(0),lim=ga(days||30),o=[];
 try{Ke().items.forEach(d=>{if(d.type==='old20'||!d.end||!/^\d{4}-\d\d-\d\d$/.test(d.end))return;if(d.end<t0||d.end>lim)return;let name=d.title||'';if(!name&&d.type==='ins')try{name=pc(d)}catch{}o.push({k:'doc',id:d.id,ins:d.type==='ins',d:d.end,t:name||ax5t('dlDoc')})})}catch{}
 try{(U().bills||[]).forEach(b=>{if(b.done||!b.next||b.next>lim)return;o.push({k:'bill',id:b.id,d:b.next,t:b.name,am:b})})}catch{}
 try{(g.projects||[]).forEach(p=>{if(!p.deadline||p.deadline>lim)return;let st=null;try{st=Dn(p)}catch{}if(st&&st.k==='done')return;o.push({k:'proj',id:p.id,d:p.deadline,t:p.name})})}catch{}
 return o.sort((a,b)=>a.d.localeCompare(b.d))}
let ax5at=0;
function ax5auto(){if(g.ax5auto===!1)return;const now=Date.now();if(now-ax5at<6e4)return;ax5at=now;let ch=!1;const t0=ga(0);g.ax5src=g.ax5src||{};
 ax5dls(30).filter(q=>q.k==='doc').forEach(q=>{const key='doc:'+q.id+':'+q.d;if(g.ax5src[key])return;g.ax5src[key]=1;const w=se(q.d);w.setDate(w.getDate()-7);let due=x(w);if(due<t0)due=t0;g.tasks.push({id:V(),t:ax5t('autoT',{t:q.t})+' — '+ax5d(q.d),due,prio:1,proj:'',done:!1,src:key,doc:q.id,c:now});ch=!0});
 if(ch)$()}
/* task sheet: repeat, kind, person, steps */
const ax5M0=M0;
M0=function(){let h=ax5M0.apply(this,arguments);try{const e=m.sheet;if(e&&e.k==='task'&&typeof h==='string'&&h.includes('data-form="task"')){const t=e.id?g.tasks.find(n=>n.id===e.id)||{}:{knd:e.knd||''};
 const sel=(nm,cur,opts)=>`<select class="field" name="${nm}">${opts.map(([a,b])=>`<option value="${a}" ${String(cur||'')===a?'selected':''}>${i(b)}</option>`).join('')}</select>`;
 const names=[...new Set([...(()=>{try{return(Va()||[]).map(u=>[u.first,u.last].filter(Boolean).join(' '))}catch{return[]}})(),...(g.tasks||[]).map(q=>q.who),...(g.notes||[]).map(q=>q.who)].filter(Boolean))].slice(0,120);
 const subs=(t.sub||[]).map((s,j)=>`<div class="ax5sr ${s.d?'d':''}"><button type="button" class="st29cb ${s.d?'on':''}" data-act="ax5sub" data-id="${t.id}" data-i="${j}">${s.d?_('check'):''}</button><span>${i(s.t)}</span><button type="button" class="st27x" data-act="ax5subx" data-id="${t.id}" data-i="${j}" aria-label="x">×</button></div>`).join('');
 const add=`<label>${i(ax5t('rep'))}${sel('rep',t.rep,[['',ax5t('r_')],['d',ax5t('r_d')],['w',ax5t('r_w')],['m',ax5t('r_m')],['y',ax5t('r_y')]])}</label><label>${i(ax5t('knd'))}${sel('knd',t.knd,[['',ax5t('k_')],['p',ax5t('k_p')],['w',ax5t('k_w')]])}</label><label>${i(ax5t('who'))}<input class="field" name="who" value="${i(t.who||'')}" list="ax5pl" maxlength="60" autocomplete="off"></label><datalist id="ax5pl">${names.map(n=>`<option value="${i(n)}">`).join('')}</datalist><div class="ax5subs"><span>${i(ax5t('sub'))}</span>${subs}<input class="field" name="subnew" placeholder="${i(ax5t('subPh'))}" maxlength="120" autocomplete="off"></div>`;
 let ins=h.indexOf('name="proj"');ins=ins>0?h.indexOf('</label>',ins):-1;ins=ins>0?ins+8:h.lastIndexOf('</form>');h=h.slice(0,ins)+add+h.slice(ins)}}catch{}return h};
Rt.task=(f=>function(e){const sid=m.sheet&&m.sheet.id,kd=m.sheet&&m.sheet.knd;const r=f.apply(this,arguments);try{const t=sid?g.tasks.find(n=>n.id===sid):g.tasks[g.tasks.length-1];if(t){t.rep=String(e.get('rep')||'');t.knd=String(e.get('knd')||kd||'');t.who=String(e.get('who')||'').trim();const sn=String(e.get('subnew')||'').trim();if(sn){t.sub=t.sub||[];t.sub.push({t:sn,d:!1})}if(!t.c)t.c=Date.now();if(t.rep)delete t.repN;$();v()}}catch{}return r})(Rt.task);
if(Rt.qtask)Rt.qtask=(f=>function(){const n=g.tasks.length;const r=f.apply(this,arguments);try{if(g.tasks.length>n){g.tasks[g.tasks.length-1].c=Date.now();$()}}catch{}return r})(Rt.qtask);
const ax5ng=ng;
ng=function(e){let h=ax5ng.apply(this,arguments);try{const b=[];if(e.rep)b.push('🔁 '+ax5t('r_'+e.rep));if(e.knd==='p')b.push('🤝 '+ax5t('k_p'));if(e.knd==='w')b.push('⏳ '+ax5t('k_w'));if(e.who)b.push('👤 '+e.who);if(e.sub&&e.sub.length)b.push('☑ '+e.sub.filter(s=>s.d).length+'/'+e.sub.length);if(e.note)b.push('📝');if(e.src)b.push('⚙');if(b.length)h=h.replace('</span></button></div>',`</span><span class="tm ax5bd">${i(b.join(' · '))}</span></button></div>`)}catch{}return h};
/* the "now" screen */
function ax5pick(){const t0=ga(0),now=new Date,hm=Gs(now.getHours())+':'+Gs(now.getMinutes());return(g.tasks||[]).filter(t=>!t.done&&t.knd!=='w').map(t=>{let s=0;if(t.due&&t.due<t0)s=300+Math.min(60,ax5days(t.due,t0));else if(t.due===t0)s=200+(t.time?(t.time<=hm?40:20):0);else if(!t.due)s=20;else{const d=ax5days(t0,t.due);s=d<=2?80-d*10:0}if(t.prio===1)s+=50;if(t.prio===3)s-=15;if(t.knd==='p')s+=30;if(t.src)s+=10;return{t,s}}).filter(q=>q.s>=60).sort((a,b)=>b.s-a.s||(a.t.time||'99').localeCompare(b.t.time||'99')).slice(0,3).map(q=>q.t)}
function ax5row(t,extra){const t0=ga(0);const meta=[];if(t.due)meta.push(t.due<t0?`<i class="late">${i(ax5t('over'))} · ${i(ax5d(t.due))}</i>`:t.due===t0?i(ax5t('today')):i(ax5d(t.due)));if(t.time)meta.push(i(t.time));if(t.who)meta.push('👤 '+i(t.who));if(t.rep)meta.push('🔁');if(t.sub&&t.sub.length)meta.push('☑ '+t.sub.filter(s=>s.d).length+'/'+t.sub.length);
 return`<div class="ax5r"><button type="button" class="st29cb" data-act="ax5done" data-id="${t.id}" aria-label="✓"></button><button type="button" class="ax5tx" data-act="tedit" data-id="${t.id}"><b>${t.prio===1?'⭐ ':''}${i(t.t)}</b><small>${meta.join(' · ')}</small></button>${extra||''}</div>`}
function ax5now(){ax5auto();const t0=ga(0),top=ax5pick(),pr=(g.tasks||[]).filter(t=>!t.done&&t.knd==='p').sort((a,b)=>(a.due||'9999').localeCompare(b.due||'9999')),wt=(g.tasks||[]).filter(t=>!t.done&&t.knd==='w').sort((a,b)=>(a.c||0)-(b.c||0)),dl=ax5dls(30),nI=(g.inbox||[]).length;
 const ic={doc:'📄',bill:'€',proj:'📁'},lb={doc:ax5t('dlDoc'),bill:ax5t('dlBill'),proj:ax5t('dlProj')};
 const wk=g.ax5wk?ax5days(g.ax5wk,t0):99;
 let h=`<p class="td9date">${i(ax5t('nowS'))}</p><h3 class="section-t">${i(ax5t('top'))}</h3>${top.length?`<div class="ax5card gold">${top.map(t=>ax5row(t)).join('')}</div>`:`<p class="empty ax5e">${i(ax5t('free'))}</p>`}`;
 if(nI)h+=`<button type="button" class="ax5lnk" data-act="ax5inb"><b>📥 ${i(ax5t('inbox'))}</b><small>${i(ax5t('inboxS',{n:nI}))}</small><em>›</em></button>`;
 if(wk>=7)h+=`<button type="button" class="ax5lnk warn" data-act="go" data-to="ax5week"><b>🗓 ${i(ax5t('weekDue'))}</b><small>${i(g.ax5wk?ax5t('weekLast',{d:ax5d(g.ax5wk)}):ax5t('weekS'))}</small><em>›</em></button>`;
 h+=`<h3 class="section-t">🤝 ${i(ax5t('prom'))}<button type="button" class="ax5plus" data-act="ax5new" data-v="p" aria-label="+">＋</button></h3>${pr.length?`<div class="ax5card">${pr.map(t=>ax5row(t)).join('')}</div>`:`<p class="empty ax5e">${i(ax5t('nothing'))}</p>`}`;
 h+=`<h3 class="section-t">⏳ ${i(ax5t('wait'))}<button type="button" class="ax5plus" data-act="ax5new" data-v="w" aria-label="+">＋</button></h3>${wt.length?`<div class="ax5card">${wt.map(t=>{const n=t.c?Math.max(0,Math.floor((Date.now()-t.c)/864e5)):null;return`<div class="ax5r"><button type="button" class="ax5tx" data-act="tedit" data-id="${t.id}"><b>${i(t.t)}</b><small>${[t.who?'👤 '+i(t.who):'',n!=null?`<i class="${n>=7?'late':''}">${i(ax5t('waitD',{n}))}</i>`:''].filter(Boolean).join(' · ')}</small></button><button type="button" class="btn sm ax5got" data-act="ax5done" data-id="${t.id}">${i(ax5t('got'))}</button></div>`}).join('')}</div>`:`<p class="empty ax5e">${i(ax5t('nothing'))}</p>`}`;
 h+=`<h3 class="section-t">⏰ ${i(ax5t('dl'))}</h3>${dl.length?`<div class="ax5card">${dl.map(q=>{const n=ax5days(t0,q.d);const act=q.k==='doc'?`data-act="${q.ins?'insopen':'dzopen'}" data-id="${q.id}"`:q.k==='bill'?'data-act="go" data-to="fin"':`data-act="proj" data-id="${q.id}"`;return`<button type="button" class="ax5r ax5dl" ${act}><span class="ax5ic">${ic[q.k]}</span><span class="ax5tx"><b>${i(q.t)}</b><small>${i(lb[q.k])} · ${i(ax5d(q.d))}</small></span><em class="${n<=3?'late':''}">${n<0?i(ax5t('over')):n===0?i(ax5t('today')):i(ax5t('inD',{n}))}</em></button>`}).join('')}</div>`:`<p class="empty ax5e">${i(ax5t('nothing'))}</p>`}`;
 h+=`<label class="ax5tg"><input type="checkbox" data-ax5auto ${g.ax5auto===!1?'':'checked'}><span>${i(ax5t('auto'))}</span></label>`;
 h+=`<div class="ax5tiles"><button type="button" data-act="go" data-to="ax5week"><b>🗓</b>${i(ax5t('week'))}</button><button type="button" data-act="ax5chains"><b>🧩</b>${i(ax5t('chains'))}</button><button type="button" data-act="ax5hist"><b>👤</b>${i(ax5t('hist'))}</button><button type="button" data-act="st20"><b>⚡</b>${i(za('t').replace(/^⚡\s*/,''))}</button></div>`;
 return`<div class="screen td9v ax5v">${ys(ax5t('now'),'home')}${h}</div>`}
function ax5week(){const t0=ga(0),wk=Date.now()-7*864e5,T0=g.tasks||[];const dn=T0.filter(t=>t.done&&t.doneAt&&t.doneAt>=wk).sort((a,b)=>b.doneAt-a.doneAt),ov=T0.filter(t=>!t.done&&t.due&&t.due<t0),nd=T0.filter(t=>!t.done&&!t.due&&!t.knd),wt=T0.filter(t=>!t.done&&t.knd==='w'&&t.c&&Date.now()-t.c>7*864e5),lim=ga(7),nI=(g.inbox||[]).length;
 const ah=[];T0.filter(t=>!t.done&&t.due&&t.due>=t0&&t.due<=lim).forEach(t=>ah.push({d:t.due,h:`☑ ${i(t.t)}`}));try{Qf(7).filter(n=>n.e).forEach(n=>ah.push({d:x(n.dt),h:`📅 ${i(n.e.title)}${n.e.time?' · '+i(n.e.time):''}`}))}catch{}ax5dls(7).forEach(q=>ah.push({d:q.d,h:`⏰ ${i(q.t)}`}));ah.sort((a,b)=>a.d.localeCompare(b.d));
 const sec=(n,t,body)=>`<h3 class="section-t"><span class="ax5num">${n}</span> ${i(t)}</h3>${body}`;const none=`<p class="empty ax5e">${i(ax5t('nothing'))}</p>`;
 let h=`<p class="td9date">${i(ax5t('weekS'))}</p>`;
 h+=sec(1,ax5t('wDone')+' · '+dn.length,dn.length?`<div class="ax5card">${dn.slice(0,8).map(t=>`<div class="ax5r dn"><span class="ax5ic">✓</span><span class="ax5tx"><b>${i(t.t)}</b></span></div>`).join('')}${dn.length>8?`<p class="st29e">+ ${dn.length-8}</p>`:''}</div>`:none);
 h+=sec(2,ax5t('inbox')+' · '+nI,nI?`<button type="button" class="ax5lnk" data-act="ax5inb"><b>📥 ${i(ax5t('inbox'))}</b><small>${i(ax5t('inboxS',{n:nI}))}</small><em>›</em></button>`:none);
 h+=sec(3,ax5t('wOver')+' · '+ov.length,ov.length?`<div class="ax5card">${ov.map(t=>ax5row(t,`<button type="button" class="btn sm ax5got" data-act="ax5tom" data-id="${t.id}">${i(ax5t('tom'))}</button>`)).join('')}</div>`:none);
 h+=sec(4,ax5t('wait')+' · '+wt.length,wt.length?`<div class="ax5card">${wt.map(t=>ax5row(t)).join('')}</div>`:none);
 h+=sec(5,ax5t('wAhead'),ah.length?`<div class="ax5card">${ah.map(q=>`<div class="ax5r"><span class="ax5dd">${i(ax5d(q.d))}</span><span class="ax5tx"><b>${q.h}</b></span></div>`).join('')}</div>`:none);
 h+=sec(6,ax5t('wNo')+' · '+nd.length,nd.length?`<div class="ax5card">${nd.slice(0,10).map(t=>ax5row(t,`<button type="button" class="btn sm ax5got" data-act="ax5tom" data-id="${t.id}">${i(ax5t('tom'))}</button>`)).join('')}</div>`:none);
 h+=`<button type="button" class="dcadd gold" data-act="ax5wend">${i(ax5t('wEnd'))}</button>${g.ax5wk?`<p class="st29e" style="text-align:center">${i(ax5t('weekLast',{d:ax5d(g.ax5wk)}))}</p>`:''}`;
 return`<div class="screen td9v ax5v">${ys(ax5t('week'),'ax5now')}${h}</div>`}
Mt=(f=>function(){if(m.route==='ax5now')return ax5now();if(m.route==='ax5week')return ax5week();return f.apply(this,arguments)})(Mt);
Te.includes('ax5now')||Te.push('ax5now');Te.includes('ax5week')||Te.push('ax5week');
function ax5chains(){const li=nz5i();const sh=H('🧩 '+ax5t('chains'),'',()=>{}),box=sh.querySelector('.dtscroll');
 const list=()=>{box.innerHTML=`<p class="fdsmall">${i(ax5t('chainsS'))}</p><div class="nz5mn">${ax5CH.map((c,j)=>`<button type="button" data-keep="1" data-c="${j}">${c[0]} <span>${i(c[1][li])}<small class="ax5cs">${i(ax5t('steps',{n:c[2].length}))}</small></span></button>`).join('')}</div>`;box.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>one(+b.dataset.c))};
 const one=j=>{const c=ax5CH[j];box.innerHTML=`<h3 class="ax5ch">${c[0]} ${i(c[1][li])}</h3><ol class="ax5ol">${c[2].map(s=>`<li>${i(s[li])}</li>`).join('')}</ol><label class="kbl"><span>${i(ax5t('chDate'))}</span><input class="field" type="date" data-dd min="${ga(0)}"></label><button type="button" class="dcadd gold" data-keep="1" data-mk>${i(ax5t('chMake'))}</button><button type="button" class="btn" data-keep="1" data-bk style="width:100%">‹ ${i(nz5t('back'))}</button>`;
  box.querySelector('[data-bk]').onclick=list;box.querySelector('[data-mk]').onclick=()=>{const p={id:V(),name:c[1][li],goal:'',start:ga(0),deadline:box.querySelector('[data-dd]').value||'',stages:c[2].map(s=>({id:V(),t:s[li],done:!1}))};g.projects.push(p);$();sh.remove();R('project',p.id)}};
 list()}
function ax5hist(pre){const sh=H('👤 '+ax5t('hist'),'',()=>{}),box=sh.querySelector('.dtscroll');
 const names=[...new Set([...(()=>{try{return(Va()||[]).map(u=>[u.first,u.last].filter(Boolean).join(' '))}catch{return[]}})(),...(g.tasks||[]).map(q=>q.who),...(g.notes||[]).map(q=>q.who)].filter(Boolean))];
 box.innerHTML=`<p class="fdsmall">${i(ax5t('histS'))}</p><input class="field" data-q placeholder="${i(ax5t('histPh'))}" list="ax5hl" value="${i(pre||'')}" autocomplete="off"><datalist id="ax5hl">${names.map(n=>`<option value="${i(n)}">`).join('')}</datalist><div class="qi5ks ax5nm">${names.slice(0,12).map(n=>`<button type="button" data-keep="1" data-n="${i(n)}">${i(n)}</button>`).join('')}</div><div class="ax5hl"></div>`;
 const out=box.querySelector('.ax5hl'),inp=box.querySelector('[data-q]');
 const draw=()=>{const q=inp.value.trim().toLowerCase();if(q.length<2){out.innerHTML='';return}const has=s=>String(s||'').toLowerCase().includes(q),rows=[];
  (g.notes||[]).forEach(n=>{if(has(n.who)||has(n.text)||has(n.title)||has(n.said)||has(n.next))rows.push({d:n.u||n.d||0,ic:H_[_5(n)]||'📝',l:ax5t('noteL'),t:n.who&&_5(n)==='meet'?[n.said,n.next?'→ '+n.next:''].filter(Boolean).join(' '):(n.title||String(n.text||'').slice(0,120)),a:`data-n1="${n.id}"`})});
  (g.tasks||[]).forEach(t=>{if(has(t.who)||has(t.t))rows.push({d:t.doneAt||t.c||(t.due?+se(t.due):0),ic:t.done?'✓':t.knd==='w'?'⏳':t.knd==='p'?'🤝':'☑',l:t.done?ax5t('doneL'):ax5t('taskL'),t:t.t,a:`data-t1="${t.id}"`})});
  (g.events||[]).forEach(e=>{if(has(e.title)||has(e.note))rows.push({d:e.date?+se(e.date):0,ic:'📅',l:ax5t('evL'),t:e.title,a:''})});
  rows.sort((a,b)=>b.d-a.d);out.innerHTML=rows.length?rows.slice(0,60).map(r=>`<button type="button" class="ax5hr" data-keep="1" ${r.a}><span class="ax5ic">${r.ic}</span><span class="ax5tx"><b>${i(r.t||'—')}</b><small>${i(r.l)}${r.d?' · '+i(nz5date(r.d)):''}</small></span></button>`).join(''):`<p class="st29e">${i(ax5t('histNo'))}</p>`;
  out.querySelectorAll('[data-n1]').forEach(b=>b.onclick=()=>{sh.remove();nz5edit(b.dataset.n1)});out.querySelectorAll('[data-t1]').forEach(b=>b.onclick=()=>{sh.remove();L.tedit({id:b.dataset.t1})})};
 inp.oninput=draw;box.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{inp.value=b.dataset.n;draw()});draw()}
Object.assign(L,{ax5done(e){const t=g.tasks.find(q=>q.id===e.id);if(!t)return;t.done=!0;t.doneAt=Date.now();$();ax5recur();nz5re()},ax5tom(e){const t=g.tasks.find(q=>q.id===e.id);if(!t)return;t.due=ga(1);$();nz5re()},ax5wend(){g.ax5wk=ga(0);$();T(ax5t('wEnd'));R('ax5now')},ax5inb(){const sh=L.st20();try{const b=sh&&sh.querySelector('[data-inb]');b&&b.click()}catch{}},ax5new(e){m.sheet={k:'task',due:'',knd:e.v},v();const q=document.getElementById('t-t');q&&q.focus()},ax5chains(){ax5chains()},ax5hist(e){ax5hist(e&&e.v)},
 ax5sub(e){const t=g.tasks.find(q=>q.id===e.id);if(!t||!t.sub||!t.sub[+e.i])return;t.sub[+e.i].d=!t.sub[+e.i].d;$();v()},ax5subx(e){const t=g.tasks.find(q=>q.id===e.id);if(!t||!t.sub)return;t.sub.splice(+e.i,1);$();v()}});
document.addEventListener('change',e=>{if(e.target&&e.target.matches&&e.target.matches('[data-ax5auto]')){g.ax5auto=e.target.checked;$();if(g.ax5auto){ax5at=0;ax5auto();nz5re()}}});
/* hooks: repeat after any way of finishing a task; entry on the home screen */
v=(f=>function(){try{ax5recur()}catch{}const r=f.apply(this,arguments);try{if(m.route==='home'&&m.logged){ax5auto();if(!document.querySelector('.ax5home')){const a=document.querySelector('.td9card')||document.querySelector('.screen > section.sky');if(a){const n=ax5pick().length,nI=(g.inbox||[]).length;a.insertAdjacentHTML('afterend',`<button type="button" class="ax5home" data-act="go" data-to="ax5now"><b>🧭 ${i(ax5t('home'))}</b><span>${n?`<i>${n}</i>`:''}${nI?`<i class="in">📥 ${nI}</i>`:''}<em>›</em></span></button>`)}}}}catch{}return r})(v);
{const st=document.createElement('style');st.textContent=`
.ax5home{display:flex;align-items:center;justify-content:space-between;gap:10px;width:calc(100% - 32px);margin:8px 16px 4px;text-align:left;border:1px solid color-mix(in srgb,var(--gold,#D9B96E) 45%,var(--line,rgba(217,185,110,.25)));background:var(--surface,rgba(255,255,255,.03));border-radius:16px;padding:12px 16px;color:inherit;font:inherit;cursor:pointer}.ax5home b{font-weight:500;font-size:16px}.ax5home span{display:flex;align-items:center;gap:8px}.ax5home i{font-style:normal;min-width:24px;height:24px;padding:0 7px;border-radius:999px;background:#D9B96E;color:#141414;font-size:13px;font-weight:600;display:grid;place-items:center}.ax5home i.in{background:transparent;border:1px solid var(--line);color:var(--ink)}.ax5home em{font-style:normal;color:var(--gold,#D9B96E);font-size:20px}
.ax5v .section-t{display:flex;align-items:center;gap:8px}.ax5plus{margin-left:auto;width:34px;height:34px;border-radius:50%;border:1px solid var(--line);background:var(--surface);color:var(--gold,#E3C27E);font-size:18px;cursor:pointer}
.ax5num{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:50%;background:color-mix(in srgb,var(--gold) 20%,transparent);color:var(--gold,#E3C27E);font-size:13px;font-family:inherit}
.ax5card{border:1px solid var(--line);border-radius:18px;background:var(--surface);padding:4px 12px;margin:0 16px 8px}.ax5card.gold{border-color:color-mix(in srgb,var(--gold) 55%,var(--line))}
.ax5r{display:flex;align-items:center;gap:10px;width:100%;padding:9px 0;border:0;border-top:1px solid color-mix(in srgb,var(--line) 55%,transparent);background:transparent;color:var(--ink);font:inherit;text-align:left}.ax5r:first-child{border-top:0}button.ax5r{cursor:pointer}
.ax5tx{flex:1;min-width:0;border:0;background:transparent;color:var(--ink);font:inherit;text-align:left;padding:0;cursor:pointer}.ax5tx b{display:block;font-weight:500;font-size:15.5px;overflow-wrap:anywhere}.ax5tx small{display:block;color:var(--muted);font-size:12.5px}.ax5r .late,.ax5tx .late{font-style:normal;color:#FF9A8A}.ax5tx i{font-style:normal}
.ax5r>em{flex:none;font-style:normal;font-size:12.5px;color:var(--muted);white-space:nowrap}.ax5ic{flex:none;width:24px;text-align:center;color:var(--gold,#E3C27E)}.ax5dd{flex:none;width:58px;font-size:12.5px;color:var(--gold,#E3C27E)}.ax5r.dn b{color:var(--muted)}
.ax5got{flex:none;font-size:13px!important;padding:7px 10px!important}
.ax5e{margin:0 16px 8px;padding:10px 4px;text-align:left}
.ax5lnk{display:flex;align-items:center;gap:10px;width:calc(100% - 32px);margin:8px 16px;border:1px solid var(--line);border-radius:16px;background:var(--surface);color:var(--ink);font:inherit;text-align:left;padding:11px 14px;cursor:pointer}.ax5lnk b{font-weight:500;font-size:15.5px}.ax5lnk small{flex:1;color:var(--muted);font-size:12.5px;text-align:right}.ax5lnk em{font-style:normal;color:var(--gold,#E3C27E);font-size:18px}.ax5lnk.warn{border-color:color-mix(in srgb,var(--gold) 55%,var(--line))}
.ax5tg{display:flex;align-items:center;gap:10px;margin:10px 18px;font-size:13.5px;color:var(--muted)}.ax5tg input{width:20px;height:20px;accent-color:var(--gold,#D9B96E);flex:none}
.ax5tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:12px 16px 24px}.ax5tiles button{border:1px solid var(--line);border-radius:16px;background:var(--surface);color:var(--ink);font:inherit;font-size:14px;line-height:1.25;padding:12px 8px;cursor:pointer;text-align:center}.ax5tiles b{display:block;font-size:22px;font-weight:400;margin-bottom:2px}
.ax5v .dcadd{width:calc(100% - 32px);margin:16px 16px 8px}
.ax5bd{display:block;margin-top:2px;opacity:.85}
.ax5subs{margin:4px 0 10px}.ax5subs>span{display:block;margin-bottom:4px}.ax5sr{display:flex;align-items:center;gap:8px;padding:5px 0}.ax5sr>span{flex:1;min-width:0;font-size:15.5px;overflow-wrap:anywhere}.ax5sr.d>span{color:var(--muted);text-decoration:line-through}
.ax5cs{display:block;color:var(--muted);font-size:12.5px}.ax5ch{font-family:var(--display);font-size:24px;font-weight:600;margin:0 0 8px}.ax5ol{margin:0 0 12px;padding-left:22px;font-size:15.5px;line-height:1.5}
.ax5nm{margin:8px 0}.ax5hr{display:flex;align-items:center;gap:10px;width:100%;padding:9px 0;border:0;border-top:1px solid color-mix(in srgb,var(--line) 55%,transparent);background:transparent;color:var(--ink);font:inherit;text-align:left;cursor:pointer}
`;document.head.appendChild(st)}
