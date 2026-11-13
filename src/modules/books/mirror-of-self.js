/* ===== v271 «Зеркало себя» — free writing, analysis only on request =====
   A card in «Развитие → Книги». Seven sections + «Просто писать». A note is never changed by the app.
   «Разобрать» opens a separate page; every finding carries a quote from the note, the date and «почему».
   «Не про меня» removes a finding from the portrait. Portrait = versions with «было / стало». Plan → tasks / goals.
   Privacy: kept in its own phone storage (localStorage «bh-mirror»), not in the synced data, not in search.
   Basic analysis runs on the phone; the deep one only when «Дворецкий на связи» and after a question.
   Crisis words → no analysis, a calm page with the helpline. Not therapy, not a diagnosis. */
const MIR_KEY='bh-mirror';
const mirS={
 title:['Зеркало себя','Spiegel meiner Selbst','Mirror of Myself'],
 card:['Узнай себя по своим словам','Erkenne dich an deinen Worten','Know yourself by your own words'],
 free:['Просто писать','Einfach schreiben','Just write'],
 write:['Написать','Schreiben','Write'],
 recent:['Последние записи','Letzte Einträge','Recent entries'],
 none:['Здесь появятся ваши записи. Пишите всё, что приходит в голову: исправлять ничего не нужно.','Hier erscheinen Ihre Einträge. Schreiben Sie alles, was Ihnen einfällt – nichts muss korrigiert werden.','Your entries will appear here. Write whatever comes to mind – nothing needs correcting.'],
 notTher:['Инструмент самопознания, не диагноз и не замена психолога.','Ein Werkzeug der Selbsterkenntnis, keine Diagnose und kein Ersatz für Therapie.','A tool for self-knowledge, not a diagnosis and not a substitute for therapy.'],
 ph:['Пишите как есть — без порядка и без исправлений…','Schreiben Sie, wie es kommt – ohne Ordnung, ohne Korrektur …','Write as it comes – no order, no corrections…'],
 other:['Другой вопрос','Andere Frage','Another question'],
 save:['Сохранить','Speichern','Save'],
 seal:['Запечатать на','Versiegeln für','Seal for'],
 d1:['сутки','1 Tag','1 day'],d3:['3 дня','3 Tage','3 days'],d7:['неделю','1 Woche','1 week'],
 mic:['Говорить','Sprechen','Speak'],micStop:['Стоп','Stopp','Stop'],micNo:['Голосовой ввод на этом устройстве недоступен','Spracheingabe ist hier nicht verfügbar','Voice input is not available here'],
 empty:['Запись пустая','Der Eintrag ist leer','The entry is empty'],
 saved:['Сохранено. Разбор — только когда вы сами захотите.','Gespeichert. Eine Auswertung gibt es nur, wenn Sie es möchten.','Saved. Analysis only when you want it.'],
 sealed:['Запечатано до %d','Versiegelt bis %d','Sealed until %d'],
 sealHint:['Пауза помогает посмотреть на свои слова со стороны.','Abstand hilft, die eigenen Worte von außen zu sehen.','A pause helps you see your own words from outside.'],
 openEarly:['Открыть раньше','Früher öffnen','Open early'],sure:['Точно открыть сейчас?','Wirklich jetzt öffnen?','Open it now?'],
 analyse:['Разобрать','Auswerten','Analyse'],
 withAll:['С учётом других записей','Mit anderen Einträgen','Include other entries'],
 deep:['Глубокий разбор (Дворецкий)','Tiefe Auswertung (Butler)','Deep analysis (Butler)'],
 deepAsk:['Отправить эту запись Дворецкому на разбор? Запись уйдёт на сервер ИИ только для этого разбора.','Diesen Eintrag dem Butler zur Auswertung senden? Er geht nur dafür an den KI-Server.','Send this entry to the Butler for analysis? It goes to the AI server only for this.'],
 send:['Отправить','Senden','Send'],cancel:['Отмена','Abbrechen','Cancel'],
 deepOff:['Глубокий разбор доступен, когда «Дворецкий на связи». Сейчас — базовый, на телефоне.','Die tiefe Auswertung gibt es, wenn der Butler verbunden ist. Jetzt: die Basis, auf dem Telefon.','Deep analysis needs the Butler connected. Now: the basic one, on the phone.'],
 busy:['Дворецкий читает…','Der Butler liest …','The Butler is reading…'],
 aTitle:['Разбор этой записи','Auswertung dieses Eintrags','Analysis of this entry'],
 aBase:['Базовый разбор · на телефоне','Basis-Auswertung · auf dem Telefon','Basic analysis · on the phone'],
 aAi:['Глубокий разбор · Дворецкий','Tiefe Auswertung · Butler','Deep analysis · Butler'],
 aNone:['В этой записи пока не за что зацепиться — и это нормально. Пишите дальше.','In diesem Eintrag gibt es noch nichts aufzugreifen – das ist in Ordnung. Schreiben Sie weiter.','Nothing to pick up in this entry yet – that is fine. Keep writing.'],
 why:['Почему отмечено','Warum markiert','Why it was noted'],
 mine:['Про меня','Trifft zu','That’s me'],notMine:['Не про меня','Trifft nicht zu','Not me'],
 rejected:['Отклонено — не попадёт в портрет','Abgelehnt – kommt nicht ins Porträt','Rejected – stays out of the portrait'],
 undo:['Вернуть','Zurück','Undo'],
 qs:['Вопросы, чтобы подумать дальше','Fragen zum Weiterdenken','Questions to think on'],
 answer:['Ответить записью','Als Eintrag antworten','Answer with an entry'],
 again:['Разобрать снова','Neu auswerten','Analyse again'],
 history:['Прошлые разборы: %n','Frühere Auswertungen: %n','Earlier analyses: %n'],
 original:['Запись','Eintrag','Entry'],
 por:['Моё понимание себя','Mein Verständnis von mir','My understanding of myself'],
 porMake:['Собрать портрет','Porträt erstellen','Build the portrait'],
 porNone:['Портрет собирается из разборов. Разберите хотя бы одну запись.','Das Porträt entsteht aus Auswertungen. Werten Sie mindestens einen Eintrag aus.','The portrait is built from analyses. Analyse at least one entry.'],
 porOf:['Версия от %d','Version vom %d','Version of %d'],
 cmp:['Было / стало','Vorher / nachher','Before / after'],
 cNew:['Появилось','Neu','New'],cGone:['Ушло','Weg','Gone'],cStay:['Осталось','Geblieben','Stayed'],
 cmpNone:['Для сравнения нужно две версии портрета.','Zum Vergleich braucht es zwei Versionen.','Two versions are needed to compare.'],
 inN:['в %n зап.','in %n Eintr.','in %n entries'],
 toPlan:['В план','In den Plan','To the plan'],inPlan:['В плане ✓','Im Plan ✓','In the plan ✓'],
 plan:['План','Plan','Plan'],
 planNone:['Добавьте пункт из портрета кнопкой «В план».','Fügen Sie einen Punkt aus dem Porträt mit «In den Plan» hinzu.','Add an item from the portrait with «To the plan».'],
 pWhat:['Что я хочу изменить','Was ich ändern will','What I want to change'],pWhy:['Почему это важно','Warum es wichtig ist','Why it matters'],
 pStart:['С чего начать','Womit anfangen','Where to start'],pSteps:['Какие действия','Welche Schritte','Which actions'],pHow:['Как увижу изменения','Woran ich es merke','How I will see change'],
 toTask:['В задачи','Zu Aufgaben','To tasks'],toGoal:['В цели','Zu Zielen','To goals'],
 tAdded:['Добавлено в задачи','Zu Aufgaben hinzugefügt','Added to tasks'],gAdded:['Добавлено в цели','Zu Zielen hinzugefügt','Added to goals'],
 needStart:['Сначала напишите, с чего начать','Schreiben Sie zuerst, womit Sie anfangen','First write where to start'],
 del:['Удалить','Löschen','Delete'],delSure:['Точно удалить?','Wirklich löschen?','Really delete?'],
 remOn:['Напомнить собрать портрет через 3 месяца','In 3 Monaten an ein neues Porträt erinnern','Remind me to rebuild the portrait in 3 months'],
 remDue:['Прошло 3 месяца — можно собрать новый портрет и сравнить.','3 Monate sind vorbei – Zeit für ein neues Porträt.','3 months have passed – time for a new portrait.'],
 lockOn:['Открывать по Face ID','Mit Face ID öffnen','Open with Face ID'],
 lockNeed:['Сначала включите Face ID в профиле','Erst Face ID im Profil einschalten','Turn on Face ID in your profile first'],
 locked:['«Зеркало себя» закрыто','«Spiegel» ist geschlossen','The Mirror is locked'],
 unlock:['Открыть по Face ID','Mit Face ID öffnen','Open with Face ID'],unlockNo:['Не получилось. Попробуйте ещё раз.','Hat nicht geklappt. Bitte erneut.','Did not work. Try again.'],
 settings:['Настройки и данные','Einstellungen und Daten','Settings and data'],
 export:['Выгрузить всё в текст','Alles als Text exportieren','Export everything as text'],
 wipe:['Удалить всё «Зеркало»','Den ganzen Spiegel löschen','Delete the whole Mirror'],wiped:['Всё удалено','Alles gelöscht','Everything deleted'],
 private:['Записи хранятся только на этом телефоне и не попадают в общий поиск и облачную копию. Выгружайте их сами, если нужна копия.','Einträge bleiben nur auf diesem Telefon, nicht in Suche oder Cloud-Kopie. Exportieren Sie selbst, wenn Sie eine Kopie möchten.','Entries stay on this phone only, not in search or the cloud copy. Export them yourself if you want a copy.'],
 crisisT:['Вам сейчас тяжело','Es ist gerade schwer','This is a hard moment'],
 crisis:['В этой записи есть слова о том, чтобы причинить себе вред или не жить. Разбор здесь не нужен — нужен живой человек. Позвоните, это бесплатно и круглосуточно:','In diesem Eintrag stehen Worte darüber, sich etwas anzutun oder nicht mehr leben zu wollen. Hier braucht es keine Auswertung, sondern einen Menschen. Kostenlos und rund um die Uhr:','This entry has words about hurting yourself or not wanting to live. It does not need analysis – it needs a person. Free, day and night:'],
 crisis2:['Если опасность прямо сейчас — звоните 112.','Bei akuter Gefahr: 112.','If you are in danger right now, call 112.'],
 crisisMsg:['Написать близкому','Einer nahen Person schreiben','Message someone close'],
 crisisTxt:['Мне сейчас тяжело. Можешь позвонить или прийти?','Mir geht es gerade schlecht. Kannst du anrufen oder vorbeikommen?','I am having a hard time. Can you call or come over?'],
 notes:['Записи','Einträge','Entries']};
const mirT=(k,o)=>{let t=cv5n(mirS[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
/* the seven sections, each with a few soft questions */
const MIR_SEC=[
 [['Просто писать','Einfach schreiben','Just write'],[['Что сейчас у вас в голове?','Was geht Ihnen gerade durch den Kopf?','What is on your mind right now?'],['Что вы чувствуете в эту минуту?','Was fühlen Sie in diesem Moment?','What do you feel this minute?']]],
 [['Кто я на самом деле?','Wer bin ich wirklich?','Who am I really?'],[['Как бы вас описал человек, который знает вас лучше всех?','Wie würde Sie jemand beschreiben, der Sie am besten kennt?','How would the person who knows you best describe you?'],['Что для вас важнее всего — и почему?','Was ist Ihnen am wichtigsten – und warum?','What matters most to you – and why?'],['В чём вы сильны, а в чём слабы?','Worin sind Sie stark, worin schwach?','Where are you strong, where weak?']]],
 [['Моё прошлое','Meine Vergangenheit','My past'],[['Какое событие вы вспоминаете чаще других?','An welches Ereignis denken Sie am häufigsten?','Which event do you recall most often?'],['Что вы взяли из своей семьи — и что не хотели бы брать?','Was haben Sie aus Ihrer Familie mitgenommen – und was nicht gewollt?','What did you take from your family – and what would you rather not have?'],['Какое решение изменило вашу жизнь?','Welche Entscheidung hat Ihr Leben verändert?','Which decision changed your life?']]],
 [['Мой внутренний мир','Meine innere Welt','My inner world'],[['Что вы никому не говорили, но хотели бы сказать?','Was haben Sie niemandem gesagt, würden es aber gern?','What have you never told anyone but would like to?'],['Чего вы боитесь больше всего?','Wovor haben Sie am meisten Angst?','What do you fear most?'],['Между чем и чем вы сейчас разрываетесь?','Zwischen was und was sind Sie hin- und hergerissen?','What are you torn between right now?']]],
 [['Моё мышление','Mein Denken','My thinking'],[['Какая мысль возвращается к вам снова и снова?','Welcher Gedanke kommt immer wieder?','Which thought keeps coming back?'],['Как вы приняли последнее важное решение?','Wie haben Sie Ihre letzte wichtige Entscheidung getroffen?','How did you make your last big decision?'],['Когда вы поступаете вопреки своим желаниям?','Wann handeln Sie gegen Ihre eigenen Wünsche?','When do you act against your own wishes?']]],
 [['Моя жизнь сегодня','Mein Leben heute','My life today'],[['Что сегодня забрало больше всего сил — и что дало их?','Was hat heute am meisten Kraft gekostet – und was hat sie gegeben?','What drained you most today – and what gave you energy?'],['Чем вы довольны в своей жизни, а чем нет?','Womit sind Sie zufrieden, womit nicht?','What are you content with, and what not?'],['Какая привычка вам мешает?','Welche Gewohnheit stört Sie?','Which habit gets in your way?']]],
 [['Чего я действительно хочу?','Was will ich wirklich?','What do I really want?'],[['Если бы никто не узнал и не осудил, чем бы вы занялись?','Wenn niemand es erführe oder urteilte – was würden Sie tun?','If no one knew or judged, what would you do?'],['Какое желание вы давно откладываете?','Welchen Wunsch schieben Sie lange auf?','Which wish have you long put off?'],['Какая жизнь сделала бы вас счастливым?','Welches Leben würde Sie glücklich machen?','What life would make you happy?']]],
 [['Каким я хочу стать?','Wer will ich werden?','Who do I want to become?'],[['Как проходит обычный день вас через пять лет?','Wie sieht ein normaler Tag von Ihnen in fünf Jahren aus?','What is an ordinary day of yours in five years?'],['От какой привычки вы хотите отказаться?','Von welcher Gewohnheit wollen Sie sich trennen?','Which habit do you want to give up?'],['Какое качество вы хотите в себе развить?','Welche Eigenschaft wollen Sie entwickeln?','Which quality do you want to grow?']]]];
/* ---------- storage: its own key, never in the synced data ---------- */
let mirD=null;
function mirLoad(){if(mirD)return mirD;try{mirD=JSON.parse(localStorage.getItem(MIR_KEY)||'null')}catch{mirD=null}if(!mirD||typeof mirD!=='object')mirD={};
 ['notes','por','plan'].forEach(k=>{if(!Array.isArray(mirD[k]))mirD[k]=[]});if(!mirD.rej||typeof mirD.rej!=='object')mirD.rej={};return mirD}
function mirSave(){try{localStorage.setItem(MIR_KEY,JSON.stringify(mirD||{}))}catch(e){Hooks.err('mirSave',e)}}
const mirId=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const mirNote=id=>mirLoad().notes.find(n=>n.id===id);
const mirDate=ts=>{try{return new Date(ts).toLocaleDateString(ac[g.lang]||'ru-RU',{day:'numeric',month:'long'})}catch{return''}};
const mirDT=ts=>{try{return new Date(ts).toLocaleString(ac[g.lang]||'ru-RU',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'})}catch{return''}};
const mirSealed=n=>n&&n.seal&&n.seal>Date.now();
/* ---------- basic analysis on the phone ---------- */
const MIR_CRISIS=/(не\s+хочу\s+(больше\s+)?жить|покончить\s+с\s+собой|убить\s+себя|суицид|самоубийств|порезать\s+себя|причинить\s+себе\s+вред|лучше\s+бы\s+меня\s+не\s+было|хочу\s+умереть|kill\s+myself|suicid|end\s+my\s+life|want\s+to\s+die|umbringen|nicht\s+mehr\s+leben|selbstmord|sterben\s+will)/i;
const MIR_STOP=new Set('который которая которые потому сейчас очень может можно будет всегда никогда просто когда тогда этого этому чтобы через после перед между только опять снова почему сегодня вообще где-то какой какая какие такой такая такие самое самый своей своих своим себя себе меня мне тебе нужно надо хочу хотел хотела могу должен должна была были было есть нету ничего никто всего всех всем потом сразу даже ещё лучше хуже больше меньше немного много очень наверное кажется думаю знаю нибудь diese dieser dieses wieder immer nicht nichts schon sehr warum wenn dann aber oder heute einfach eigentlich vielleicht about there their would could should really because always never something nothing today maybe think'.split(' '));
const MIR_EMO=[
 [['страх','Angst','fear'],/(боюсь|страх|страшн|тревог|пугает|пугаюсь|волнуюсь|паник|angst|sorge|fürcht|afraid|fear|anxious|worr)/i],
 [['грусть','Traurigkeit','sadness'],/(грустн|печал|тоск|одинок|плачу|плакал|пусто|traurig|einsam|sad|lonely|cry)/i],
 [['злость','Wut','anger'],/(злюсь|злость|злит|бесит|раздраж|обид|ненавиж|wütend|ärger|wut|angry|annoy|hate)/i],
 [['радость','Freude','joy'],/(рад[аоуыь]?\b|счаст|радост|люблю|нравит|вдохнов|freu|glück|liebe|happy|joy|love)/i],
 [['усталость','Erschöpfung','tiredness'],/(устал|нет\s+сил|вымот|выгор|müde|erschöpft|tired|exhausted)/i],
 [['стыд и вина','Scham und Schuld','shame and guilt'],/(стыд|винова|вина\b|позор|schäm|schuld|ashamed|guilt)/i]];
const MIR_ABS=/(^|[^а-яёa-zäöü])(всегда|никогда|никто|ничего\s+не|все\s+вокруг|постоянно|immer|niemals|nie\b|niemand|always|never|nobody|everyone)(?=[^а-яёa-zäöü]|$)/i;
const MIR_MUST=/(^|[^а-яёa-zäöü])(должен|должна|обязан|обязана|надо|нужно|нельзя|muss|müsste|sollte|must|should|have\s+to)(?=[^а-яёa-zäöü]|$)/i;
const MIR_CONF=/(хочу|хотел|хотела|хотелось|мечтаю|möchte|will\s|wünsche|want)[^.!?\n]{0,90}?(,\s*но|\sно\s|однако|а\s+потом|aber|but|yet)/i;
const MIR_SELF=/(я\s+(не\s+могу|не\s+умею|ничего\s+не\s+стою|неудачни|глуп|слаб|ленив|никчём|хуже\s+всех)|ich\s+(kann\s+(das\s+)?nicht|bin\s+(dumm|faul|schwach|nichts\s+wert))|i\s+(can.?t|am\s+(stupid|lazy|weak|worthless)))/i;
function mirSent(t){return String(t||'').replace(/\s+/g,' ').split(/(?<=[.!?…])\s+|\n+/).map(x=>x.trim()).filter(x=>x.length>2)}
const mirCut=s=>s.length>220?s.slice(0,217)+'…':s;
function mirStem(w){w=w.toLowerCase().replace(/ё/g,'е');return w.length>7?w.slice(0,6):w.length>5?w.slice(0,5):w}
function mirBase(note,all){const out=[];const src=all?mirLoad().notes.filter(n=>!mirSealed(n)||n.id===note.id):[note];
 const S=src.flatMap(n=>mirSent(n.t).map(s=>({nid:n.id,ts:n.ts,s})));const here=S.filter(x=>x.nid===note.id);
 const add=(type,key,title,why,ask,hits)=>{if(!hits.length)return;const uniq=[];hits.forEach(h=>{if(!uniq.some(u=>u.s===h.s))uniq.push(h)});out.push({type,key:type+':'+key,title,why,ask,q:uniq.slice(0,3).map(h=>({nid:h.nid,ts:h.ts,s:mirCut(h.s)}))})};
 /* repeated themes */
 const cnt={},word={};S.forEach(x=>{(x.s.toLowerCase().match(/[а-яёa-zäöüß]{5,}/g)||[]).forEach(w=>{if(MIR_STOP.has(w)||MIR_EMO.some(e=>e[1].test(w)))return;const k=mirStem(w);cnt[k]=(cnt[k]||0)+1;word[k]=word[k]||w})});
 Object.keys(cnt).filter(k=>cnt[k]>=(all?3:2)&&here.some(x=>mirStem2(x.s).includes(k))).sort((a,b)=>cnt[b]-cnt[a]).slice(0,3).forEach(k=>{
  const w=word[k];add('theme',k,cv5n([`Похоже, тема «${w}» для вас сейчас важна. Так ли это?`,`Das Thema «${w}» scheint Ihnen gerade wichtig. Stimmt das?`,`The theme “${w}” seems important to you now. Is it?`]),
   cv5n([`Слово повторяется ${all?'в ваших записях':'в этой записи'}: ${cnt[k]}.`,`Das Wort wiederholt sich: ${cnt[k]}.`,`The word repeats: ${cnt[k]}.`]),
   cv5n([`Что для вас стоит за словом «${w}»?`,`Was steht für Sie hinter «${w}»?`,`What lies behind “${w}” for you?`]),S.filter(x=>mirStem2(x.s).includes(k)))});
 /* feelings */
 MIR_EMO.map(([nm,re])=>[nm,S.filter(x=>re.test(x.s))]).filter(e=>e[1].length&&e[1].some(x=>x.nid===note.id)).sort((a,b)=>b[1].length-a[1].length).slice(0,2).forEach(([nm,h])=>{const n=cv5n(nm);
  add('emo',nm[2],cv5n([`Звучит чувство «${n}». С чем оно связано?`,`Es klingt das Gefühl «${n}» an. Womit hängt es zusammen?`,`The feeling “${n}” comes through. What is it tied to?`]),
   cv5n([`Фраз с этим чувством: ${h.length}.`,`Sätze mit diesem Gefühl: ${h.length}.`,`Sentences with this feeling: ${h.length}.`]),cv5n([`Когда вы чувствовали «${n}» в последний раз — что было перед этим?`,`Wann zuletzt – und was war davor?`,`When did you last feel it – and what came before?`]),h)});
 const rule=(type,re,title,why,ask)=>{const h=here.filter(x=>re.test(x.s));add(type,type,title,why,ask,h)};
 rule('conf',MIR_CONF,cv5n(['Желание и препятствие стоят в одной фразе. Что на самом деле останавливает?','Wunsch und Hindernis stehen in einem Satz. Was hält Sie wirklich auf?','A wish and an obstacle share one sentence. What really stops you?']),cv5n(['Фраза вида «хочу…, но…».','Ein Satz der Form «ich möchte …, aber …».','A sentence like “I want…, but…”.']),cv5n(['Что случится, если убрать «но»?','Was wäre ohne das «aber»?','What happens if you drop the “but”?']));
 rule('must',MIR_MUST,cv5n(['Здесь звучит внутреннее правило «должен». Чьё оно — ваше или чьё-то?','Hier klingt eine innere Regel «ich muss». Wessen Regel ist das?','An inner rule “I must” comes through. Whose rule is it?']),cv5n(['Слова «должен / надо / нельзя».','Wörter wie «muss / soll».','Words like “must / should”.']),cv5n(['Что будет, если этого не делать?','Was passiert, wenn Sie es nicht tun?','What happens if you don’t?']));
 rule('abs',MIR_ABS,cv5n(['Здесь звучит «всегда» или «никогда». Всегда ли это так на самом деле?','Hier steht «immer» oder «nie». Ist es wirklich immer so?','“Always” or “never” here. Is it really always so?']),cv5n(['Слова-абсолюты часто прячут убеждение, которое стоит проверить.','Absolute Wörter verbergen oft eine Überzeugung, die man prüfen kann.','Absolute words often hide a belief worth checking.']),cv5n(['Вспомните хотя бы один случай, когда было иначе.','Erinnern Sie sich an ein Mal, als es anders war.','Recall one time it was different.']));
 rule('self',MIR_SELF,cv5n(['Здесь вы строго говорите о себе. Сказали бы вы так другу?','Hier sprechen Sie streng über sich. Würden Sie das einem Freund sagen?','You speak harshly of yourself here. Would you say it to a friend?']),cv5n(['Фраза вида «я не могу / я плохой».','Ein Satz wie «ich kann nicht / ich bin schlecht».','A sentence like “I can’t / I am bad”.']),cv5n(['Как бы это звучало, если сказать мягче, но честно?','Wie klänge es milder, aber ehrlich?','How would it sound gentler but honest?']));
 const ord=['conf','self','must','abs','emo','theme'];return out.sort((a,b)=>ord.indexOf(a.type)-ord.indexOf(b.type)).slice(0,6)}
function mirStem2(s){return(s.toLowerCase().match(/[а-яёa-zäöüß]{5,}/g)||[]).map(mirStem)}
function mirQs(note,items){const q=items.map(x=>x.ask).filter(Boolean).slice(0,2);const sec=MIR_SEC[note.sec||0];const extra=sec[1].map(cv5n).find(x=>!q.includes(x)&&x!==note.ask);if(extra)q.push(extra);return q.slice(0,3)}
/* ---------- deep analysis through the Butler, quotes checked against the note ---------- */
async function mirDeep(note){const fn=sn&&sn.fn;if(!fn)throw new Error('off');
 const lang=cv5n(['русском','Deutsch','English']);
 const prompt=`You help a person understand themselves from their own free writing. Answer in ${lang}. Rules: never diagnose; phrase every finding as a gentle question; every finding MUST quote exact words copied from the text (an exact substring, 3-25 words); no quote, no finding; at most 6 findings. Look for repeated themes, feelings, conflicts between wishes and actions, beliefs that drive decisions, assumptions worth checking. Reply ONLY with JSON: {"items":[{"title":"question-shaped finding","quote":"exact substring","why":"why it was noted, one sentence","ask":"one question to think on"}]}\n\nTEXT:\n${note.t}`;
 const {text}=await fn([{role:'user',content:prompt}],{modelTier:'quick',cache:!1});
 const j=JSON.parse(String(text||'').replace(/^[^{]*/,'').replace(/[^}]*$/,''));const norm=s=>String(s||'').replace(/\s+/g,' ').trim();const body=norm(note.t);
 return(j.items||[]).filter(x=>x&&x.title&&x.quote&&body.includes(norm(x.quote))).slice(0,6).map((x,k)=>({type:'ai',key:'ai:'+norm(x.title).toLowerCase().slice(0,40),title:norm(x.title),why:norm(x.why),ask:norm(x.ask),q:[{nid:note.id,ts:note.ts,s:mirCut(norm(x.quote))}]}))}
function mirRun(note,mode,items){note.an=Array.isArray(note.an)?note.an:[];note.an.push({ts:Date.now(),mode,items,qs:mirQs(note,items)});mirSave()}
/* ---------- portrait ---------- */
const MIR_POR=[['theme',['Что для меня сейчас важно','Was mir gerade wichtig ist','What matters to me now']],['emo',['Что я чувствую чаще всего','Was ich am häufigsten fühle','What I feel most often']],['must',['Какие правила мной управляют','Welche Regeln mich lenken','Which rules steer me']],['abs',['Убеждения, которые стоит проверить','Überzeugungen zum Prüfen','Beliefs worth checking']],['conf',['Внутренние противоречия','Innere Widersprüche','Inner contradictions']],['self',['Как я говорю с собой','Wie ich mit mir spreche','How I talk to myself']],['ai',['Что заметил Дворецкий','Was der Butler bemerkt hat','What the Butler noticed']],['want',['Чего я хочу и каким хочу стать','Was ich will und wer ich werden will','What I want and who I want to become']]];
function mirPortrait(){const D=mirLoad(),sec={};
 D.notes.forEach(n=>{const a=(n.an||[]).slice(-1)[0];if(a)a.items.forEach(x=>{if(D.rej[x.key])return;const t=x.type==='ai'?'ai':x.type;const L2=sec[t]=sec[t]||[];let e=L2.find(y=>y.key===x.key);if(!e){e={key:x.key,title:x.title,nids:[],q:x.q[0]};L2.push(e)}if(!e.nids.includes(n.id))e.nids.push(n.id)});
  if((n.sec===6||n.sec===7)&&!mirSealed(n)){const s=mirSent(n.t)[0];if(s){(sec.want=sec.want||[]).push({key:'want:'+n.id,title:mirCut(s),nids:[n.id]})}}});
 Object.values(sec).forEach(L2=>L2.sort((a,b)=>b.nids.length-a.nids.length));return sec}
/* ---------- screens ---------- */
const mirHdr=(t,back,right)=>`<div class="sub-hdr"><button class="iconbtn" data-act="go" data-to="${back}" aria-label="back">${_('back')}</button><div class="ttl"><h2>${i(t)}</h2></div>${right||'<span></span>'}</div>`;
const MIR_IC='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="10" rx="6.5" ry="7.5"/><path d="M12 17.5V21M8.5 21h7M9.2 7.2c.8-1 1.8-1.5 2.8-1.6"/></svg>';
function mirQuote(q){return`<blockquote class="mirq"><p>«${i(q.s)}»</p><small>${i(mirDate(q.ts))}</small></blockquote>`}
function mirHome(){const D=mirLoad(),cnt=k=>D.notes.filter(n=>(n.sec||0)===k).length,due=D.rem&&Date.now()>D.rem;
 const sec=MIR_SEC.map((s,k)=>`<button type="button" class="mirsec${k?'':' free'}" data-act="mirnew" data-sec="${k}"><b>${i(cv5n(s[0]))}</b>${cnt(k)?`<small>${cnt(k)}</small>`:''}</button>`).join('');
 const rec=D.notes.slice().sort((a,b)=>b.ts-a.ts).slice(0,8).map(n=>`<button type="button" class="mirrow" data-act="miropen" data-id="${n.id}"><span><b>${i(cv5n(MIR_SEC[n.sec||0][0]))}</b><small>${i(mirDT(n.ts))}${(n.an||[]).length?' · ✓':''}</small></span><em>${mirSealed(n)?'✉ '+i(mirT('sealed',{d:mirDate(n.seal)})):i(mirCut(n.t).slice(0,90))}</em></button>`).join('');
 return`<div class="screen mir">${mirHdr(mirT('title'),'cat',`<button class="iconbtn" data-act="mirset" aria-label="${i(mirT('settings'))}">${_('dots')||'⋯'}</button>`)}
 <p class="mirsl">${i(mirT('card'))}</p>
 ${due?`<button type="button" class="mirdue" data-act="mirpor">${i(mirT('remDue'))}</button>`:''}
 <div class="mirsecs">${sec}</div>
 <div class="mirtwo"><button type="button" class="pin hbcard" data-act="mirpor"><span class="txt"><span class="t">${i(mirT('por'))}</span><span class="s">${i(mirT('porMake'))}</span></span>${_('chev','chev')}</button><button type="button" class="pin hbcard" data-act="go" data-to="mirl"><span class="txt"><span class="t">${i(mirT('plan'))}</span><span class="s">${D.plan.length||''}</span></span>${_('chev','chev')}</button></div>
 <h3 class="mirh">${i(mirT('recent'))}</h3>${rec||`<p class="mirempty">${i(mirT('none'))}</p>`}
 <p class="mirnote">${i(mirT('notTher'))}</p></div>`}
function mirWrite(){const sec=m.mirSec||0,S=MIR_SEC[sec],qs=S[1].map(cv5n),ask=m.mirAsk||qs[(m.mirQ||0)%qs.length];
 return`<div class="screen mir mirw">${mirHdr(cv5n(S[0]),'mir')}
 <div class="mirask"><span>${i(ask)}</span><button type="button" data-act="mirq">${i(mirT('other'))}</button></div>
 <textarea id="mirta" class="mirta" placeholder="${i(mirT('ph'))}" spellcheck="false" autocapitalize="sentences">${i(m.mirDraft||'')}</textarea>
 <div class="mirbar"><button type="button" class="mirmic${m.mirRec?' on':''}" data-act="mirmic">${i(m.mirRec?mirT('micStop'):'🎙 '+mirT('mic'))}</button><button type="button" class="dcadd gold mirsave" data-act="mirsave">${i(mirT('save'))}</button></div>
 <div class="mirseal"><span>${i(mirT('seal'))}</span><button type="button" data-act="mirsave" data-d="1">${i(mirT('d1'))}</button><button type="button" data-act="mirsave" data-d="3">${i(mirT('d3'))}</button><button type="button" data-act="mirsave" data-d="7">${i(mirT('d7'))}</button></div>
 <p class="mirnote">${i(mirT('sealHint'))}</p></div>`}
function mirView(){const n=mirNote(m.mirId);if(!n)return mirHome();const S=MIR_SEC[n.sec||0];
 if(mirSealed(n))return`<div class="screen mir">${mirHdr(cv5n(S[0]),'mir')}<div class="mirenv"><div class="ic">✉</div><b>${i(mirT('sealed',{d:mirDT(n.seal)}))}</b><p>${i(mirT('sealHint'))}</p><button type="button" class="btn" data-act="mirearly" data-id="${n.id}">${i(m.mirSure===n.id?mirT('sure'):mirT('openEarly'))}</button></div></div>`;
 const ai=!!(sn&&sn.fn);
 return`<div class="screen mir">${mirHdr(cv5n(S[0]),'mir',`<button class="iconbtn" data-act="mirdel" data-id="${n.id}" aria-label="${i(mirT('del'))}">${_('trash')}</button>`)}
 <small class="mirdt">${i(mirDT(n.ts))}</small>${n.ask?`<p class="mirask0">${i(n.ask)}</p>`:''}<div class="mirtext">${i(n.t).replace(/\n/g,'<br>')}</div>
 ${m.mirSure===n.id?`<button type="button" class="mirdanger" data-act="mirdel" data-id="${n.id}">${i(mirT('delSure'))}</button>`:''}
 <div class="miracts"><button type="button" class="dcadd gold" data-act="mirana" data-id="${n.id}">${i(mirT('analyse'))}</button>
 <label class="mirchk"><input type="checkbox" id="mirall" ${m.mirAll?'checked':''}> ${i(mirT('withAll'))}</label>
 <button type="button" class="btn mirdeep${ai?'':' off'}" data-act="mirdeep" data-id="${n.id}">${i(mirT('deep'))}</button>${ai?'':`<small class="mirnote">${i(mirT('deepOff'))}</small>`}
 ${(n.an||[]).length?`<button type="button" class="mirlink" data-act="mirshow" data-id="${n.id}">${i(mirT('history',{n:n.an.length}))} ›</button>`:''}</div></div>`}
function mirAnalysis(){const n=mirNote(m.mirId);if(!n)return mirHome();const D=mirLoad();
 if(m.mirCrisis===n.id)return`<div class="screen mir">${mirHdr(mirT('crisisT'),'mirn')}<div class="mircr"><p>${i(mirT('crisis'))}</p><a class="dcadd gold" href="tel:08001110111">☎ 0800 111 0 111 · TelefonSeelsorge</a><a class="btn" href="tel:08001110222">☎ 0800 111 0 222</a><p>${i(mirT('crisis2'))}</p><a class="btn" href="sms:?&body=${encodeURIComponent(mirT('crisisTxt'))}">${i(mirT('crisisMsg'))}</a></div></div>`;
 const A=n.an||[];const k=Math.min(A.length-1,m.mirAn==null?A.length-1:m.mirAn),a=A[k];if(!a)return mirView();
 const items=a.items.map(x=>{const rj=!!D.rej[x.key];return`<div class="mirit${rj?' rj':''}"><b>${i(x.title)}</b>${x.q.map(mirQuote).join('')}<p class="mirwhy"><span>${i(mirT('why'))}:</span> ${i(x.why||'')}</p>
  <div class="mirvote">${rj?`<small>${i(mirT('rejected'))}</small><button type="button" data-act="mirrej" data-k="${i(x.key)}">${i(mirT('undo'))}</button>`:`<button type="button" class="${D.ok&&D.ok[x.key]?'on':''}" data-act="mirok" data-k="${i(x.key)}">${i(mirT('mine'))}</button><button type="button" data-act="mirrej" data-k="${i(x.key)}">${i(mirT('notMine'))}</button>`}</div></div>`}).join('');
 const hist=A.length>1?`<div class="mirhist">${A.map((b,j)=>`<button type="button" class="${j===k?'on':''}" data-act="mirpick" data-j="${j}">${i(mirDate(b.ts))}${b.mode==='ai'?' · AI':''}</button>`).join('')}</div>`:'';
 return`<div class="screen mir">${mirHdr(mirT('aTitle'),'mirn')}<small class="mirdt">${i(a.mode==='ai'?mirT('aAi'):mirT('aBase'))} · ${i(mirDT(a.ts))}</small>${hist}
 ${items||`<p class="mirempty">${i(mirT('aNone'))}</p>`}
 ${a.qs&&a.qs.length?`<h3 class="mirh">${i(mirT('qs'))}</h3>${a.qs.map(q=>`<button type="button" class="mirqa" data-act="miransw" data-q="${i(q)}"><span>${i(q)}</span><small>${i(mirT('answer'))} ›</small></button>`).join('')}`:''}
 <details class="miror"><summary>${i(mirT('original'))}</summary><div class="mirtext">${i(n.t).replace(/\n/g,'<br>')}</div></details>
 <button type="button" class="btn" data-act="mirana" data-id="${n.id}">${i(mirT('again'))}</button><p class="mirnote">${i(mirT('notTher'))}</p></div>`}
function mirPorScreen(){const D=mirLoad(),P=D.por,k=m.mirPv==null?P.length-1:m.mirPv,p=P[k];
 const inPlan=key=>D.plan.some(x=>x.key===key);
 const body=p?MIR_POR.filter(([t])=>p.sec[t]&&p.sec[t].length).map(([t,nm])=>`<h3 class="mirh">${i(cv5n(nm))}</h3>${p.sec[t].slice(0,6).map(x=>`<div class="mirpi"><span>${i(x.title)}</span><small>${i(mirT('inN',{n:x.nids.length}))}</small><div class="mirpb">${x.nids.slice(0,3).map(id=>mirNote(id)?`<button type="button" data-act="miropen" data-id="${id}">${i(mirDate(mirNote(id).ts))}</button>`:'').join('')}<button type="button" class="${inPlan(x.key)?'on':''}" data-act="mirtoplan" data-k="${i(x.key)}" data-t="${i(x.title)}" data-n="${i(x.nids.join(','))}">${i(inPlan(x.key)?mirT('inPlan'):mirT('toPlan'))}</button></div></div>`).join('')}`).join(''):`<p class="mirempty">${i(mirT('porNone'))}</p>`;
 const vers=P.length>1?`<div class="mirhist">${P.map((v2,j)=>`<button type="button" class="${j===k?'on':''}" data-act="mirpv" data-j="${j}">${i(mirDate(v2.ts))}</button>`).join('')}</div>`:'';
 let cmp='';if(m.mirCmp){if(P.length<2)cmp=`<p class="mirempty">${i(mirT('cmpNone'))}</p>`;else{const tl=v2=>{const s=new Map;Object.values(v2.sec).flat().forEach(x=>s.set(x.key,x.title));return s};const a=tl(P[Math.max(0,k-1)]),b=tl(P[k===0?1:k]);
  const col=(nm,L2)=>`<h3 class="mirh">${i(nm)} · ${L2.length}</h3>${L2.map(t=>`<p class="mircmp">${i(t)}</p>`).join('')||'<p class="mircmp">—</p>'}`;
  cmp=`<div class="mircmpw">${col(mirT('cNew'),[...b].filter(([x])=>!a.has(x)).map(e=>e[1]))}${col(mirT('cGone'),[...a].filter(([x])=>!b.has(x)).map(e=>e[1]))}${col(mirT('cStay'),[...b].filter(([x])=>a.has(x)).map(e=>e[1]))}</div>`}}
 return`<div class="screen mir">${mirHdr(mirT('por'),'mir')}${p?`<small class="mirdt">${i(mirT('porOf',{d:mirDT(p.ts)}))}</small>`:''}${vers}
 <div class="miracts mirrw"><button type="button" class="dcadd gold" data-act="mirpormake">${i(mirT('porMake'))}</button><button type="button" class="btn${m.mirCmp?' on':''}" data-act="mircmp">${i(mirT('cmp'))}</button></div>
 ${cmp}${m.mirCmp?'':body}
 <label class="mirchk"><input type="checkbox" data-mirrem ${D.rem?'checked':''}> ${i(mirT('remOn'))}</label><p class="mirnote">${i(mirT('notTher'))}</p></div>`}
function mirPlanScreen(){const D=mirLoad();const f=(x,k,lab)=>`<label class="mirpf"><span>${i(mirT(lab))}</span><textarea data-mirpl="${x.id}" data-f="${k}" rows="2">${i(x[k]||'')}</textarea></label>`;
 const body=D.plan.map(x=>`<div class="mirit">${f(x,'what','pWhat')}<div class="mirpf"><span>${i(mirT('pWhy'))}</span><div class="mirpb">${(x.nids||[]).map(id=>mirNote(id)?`<button type="button" data-act="miropen" data-id="${id}">${i(mirDate(mirNote(id).ts))}</button>`:'').join('')}</div></div>${f(x,'why','pWhy')}${f(x,'start','pStart')}${f(x,'steps','pSteps')}${f(x,'how','pHow')}
  <div class="mirvote"><button type="button" data-act="mirtask" data-id="${x.id}">${i(mirT('toTask'))}</button><button type="button" data-act="mirgoal" data-id="${x.id}">${i(mirT('toGoal'))}</button><button type="button" data-act="mirpdel" data-id="${x.id}">${i(m.mirSure===x.id?mirT('delSure'):mirT('del'))}</button></div></div>`).join('');
 return`<div class="screen mir">${mirHdr(mirT('plan'),'mir')}${body||`<p class="mirempty">${i(mirT('planNone'))}</p>`}</div>`}
function mirLock(){return`<div class="screen mir">${mirHdr(mirT('title'),'cat')}<div class="mirenv"><div class="ic">🔒</div><b>${i(mirT('locked'))}</b><button type="button" class="dcadd gold" data-act="mirunlock">${i(mirT('unlock'))}</button></div></div>`}
const MIR_R=['mir','mirw','mirn','mira','mirp','mirl'];MIR_R.forEach(r=>{Te.includes(r)||Te.push(r)});
function mirScreen(r){const D=mirLoad();if(D.lock&&!m.mirOK)return mirLock();
 return r==='mirw'?mirWrite():r==='mirn'?mirView():r==='mira'?mirAnalysis():r==='mirp'?mirPorScreen():r==='mirl'?mirPlanScreen():mirHome()}
/* first in line, so no later hook mistakes it for an unknown route */
(Hooks.h.screen=Hooks.h.screen||[]).unshift((html,route)=>{if(MIR_R.includes(m.route)){if(m.route!=='mirw')mirMicStop();return mirScreen(m.route)}});
Hooks.on('route',r=>{if(r==='cat'&&m.cat==='books'){m.mirSure=null}if(!MIR_R.includes(r))mirMicStop()});
/* the card in «Книги», right after «Книга моей жизни» */
function mirCard(){try{if(m.route!=='cat'||m.cat!=='books')return;const sc=document.querySelector('.screen');if(!sc||sc.querySelector('.mirpin'))return;
 const at=sc.querySelector('.lbpin')||sc.querySelector('.libpin');const box=at?null:sc.querySelector('.list');if(!at&&!box)return;
 const t=document.createElement('template');t.innerHTML=`<button class="pin hbcard mirpin" data-act="go" data-to="mir"><span class="u1ic">${MIR_IC}</span><span class="txt"><span class="t">${i(mirT('title'))}</span><span class="s">${i(mirT('card'))}</span></span>${_('chev','chev')}</button>`;
 at?at.after(t.content.firstChild):box.prepend(t.content.firstChild)}catch(e){Hooks.err('mirCard',e)}}
Hooks.on('render',mirCard);
/* back inside the Mirror follows its own order: entry → home → Книги */
const MIR_UP={mirw:'mir',mirn:'mir',mira:'mirn',mirp:'mir',mirl:'mir'};
window.addEventListener('click',e=>{try{if(!m.logged||m.sheet||!MIR_R.includes(m.route))return;const b=e.target&&e.target.closest&&e.target.closest('.screen > .sub-hdr > button:first-child');if(!b)return;
 e.preventDefault();e.stopImmediatePropagation();mirMicStop();const up=MIR_UP[m.route];const h=m.hist||[];
 if(up){while(h.length&&MIR_R.includes(h[h.length-1].route)&&h[h.length-1].route!==up)h.pop();if(h.length&&h[h.length-1].route===up)h.pop();return R(up,void 0,!0)}
 while(h.length&&(MIR_R.includes(h[h.length-1].route)||h[h.length-1].route==='cat'&&h[h.length-1].cat==='books'))h.pop();return R('cat','books',!0)}catch(er){Hooks.err('mirback',er)}},!0);
/* ---------- voice ---------- */
let mirRecog=null;
function mirMicStop(){if(mirRecog){try{mirRecog.stop()}catch{}mirRecog=null}m.mirRec=0}
function mirMic(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){T(mirT('micNo'));return}if(mirRecog){mirMicStop();v();return}
 const ta=document.getElementById('mirta');const base=(ta?ta.value:m.mirDraft||'').replace(/\s*$/,'');let fin='';
 try{const r=new SR();mirRecog=r;r.lang=ac[g.lang]||'ru-RU';r.continuous=!0;r.interimResults=!0;
  r.onresult=e=>{let tmp='';for(let k=e.resultIndex;k<e.results.length;k++){const t=e.results[k][0].transcript;e.results[k].isFinal?fin+=t+' ':tmp+=t}const val=(base?base+' ':'')+fin+tmp;m.mirDraft=val;const t2=document.getElementById('mirta');if(t2)t2.value=val};
  r.onend=()=>{if(mirRecog===r){mirRecog=null;m.mirRec=0;if(m.route==='mirw')v()}};r.onerror=()=>{};r.start();m.mirRec=1;v()}catch{mirRecog=null;T(mirT('micNo'))}}
document.addEventListener('input',e=>{const t=e.target;if(!t)return;if(t.id==='mirta'){m.mirDraft=t.value;return}
 if(t.dataset&&t.dataset.mirpl){const x=mirLoad().plan.find(p=>p.id===t.dataset.mirpl);if(x){x[t.dataset.f]=t.value;mirSave()}}},!0);
document.addEventListener('change',e=>{const t=e.target;if(!t)return;if(t.id==='mirall')m.mirAll=t.checked;if(t.dataset&&t.dataset.mirrem!==undefined){const D=mirLoad();D.rem=t.checked?Date.now()+90*864e5:0;mirSave()}},!0);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){m.mirOK=0;mirMicStop()}});
/* ---------- actions ---------- */
const mirRe=()=>{try{k3keep(()=>v())}catch{v()}};
Hooks.act('mirnew',e=>{m.mirSec=+e.sec||0;m.mirQ=0;m.mirAsk='';m.mirDraft='';R('mirw')});
Hooks.act('mirq',()=>{m.mirQ=(m.mirQ||0)+1;m.mirAsk='';const ta=document.getElementById('mirta');if(ta)m.mirDraft=ta.value;mirRe()});
Hooks.act('mirmic',()=>mirMic());
Hooks.act('mirsave',e=>{mirMicStop();const ta=document.getElementById('mirta');const t=String(ta?ta.value:m.mirDraft||'').trim();if(!t){T(mirT('empty'));return}
 const S=MIR_SEC[m.mirSec||0][1].map(cv5n),D=mirLoad(),d=+e.d||0;const n={id:mirId(),sec:m.mirSec||0,t,ts:Date.now(),ask:m.mirAsk||S[(m.mirQ||0)%S.length],seal:d?Date.now()+d*864e5:0,an:[]};
 D.notes.push(n);mirSave();m.mirDraft='';m.mirAsk='';m.mirId=n.id;T(d?mirT('sealed',{d:mirDT(n.seal)}):mirT('saved'));R('mirn')});
Hooks.act('miropen',e=>{m.mirId=e.id;m.mirSure=null;R('mirn')});
Hooks.act('mirearly',e=>{if(m.mirSure!==e.id){m.mirSure=e.id;mirRe();return}const n=mirNote(e.id);if(n){n.seal=0;mirSave()}m.mirSure=null;mirRe()});
Hooks.act('mirdel',e=>{if(m.mirSure!==e.id){m.mirSure=e.id;mirRe();return}const D=mirLoad();D.notes=D.notes.filter(n=>n.id!==e.id);mirSave();m.mirSure=null;R('mir')});
Hooks.act('mirana',e=>{const n=mirNote(e.id);if(!n)return;m.mirId=n.id;m.mirAn=null;if(MIR_CRISIS.test(n.t)){m.mirCrisis=n.id;R('mira');return}m.mirCrisis=null;mirRun(n,'base',mirBase(n,!!m.mirAll));R('mira')});
Hooks.act('mirdeep',e=>{const n=mirNote(e.id);if(!n)return;if(!(sn&&sn.fn)){T(mirT('deepOff'));return}if(MIR_CRISIS.test(n.t)){m.mirId=n.id;m.mirCrisis=n.id;R('mira');return}
 H(mirT('deep'),`<p class="fchow">${i(mirT('deepAsk'))}</p><div class="miracts mirrw"><button type="button" class="dcadd gold" data-mirgo="1">${i(mirT('send'))}</button><button type="button" class="btn" data-mircl="1">${i(mirT('cancel'))}</button></div>`,sh=>{sh.addEventListener('click',async ev=>{
  if(ev.target.closest('[data-mircl]')){sh.remove();return}if(!ev.target.closest('[data-mirgo]'))return;sh.remove();T(mirT('busy'));
  try{const items=await mirDeep(n);mirRun(n,'ai',items);m.mirId=n.id;m.mirAn=null;m.mirCrisis=null;R('mira')}catch(er){Hooks.err('mirdeep',er);T(mirT('deepOff'))}})})});
Hooks.act('mirshow',e=>{m.mirId=e.id;m.mirAn=null;m.mirCrisis=null;R('mira')});
Hooks.act('mirpick',e=>{m.mirAn=+e.j;mirRe()});
Hooks.act('mirrej',e=>{const D=mirLoad();if(D.rej[e.k])delete D.rej[e.k];else{D.rej[e.k]=Date.now();if(D.ok)delete D.ok[e.k]}mirSave();mirRe()});
Hooks.act('mirok',e=>{const D=mirLoad();D.ok=D.ok||{};D.ok[e.k]?delete D.ok[e.k]:D.ok[e.k]=Date.now();mirSave();mirRe()});
Hooks.act('miransw',e=>{const n=mirNote(m.mirId);m.mirSec=n?n.sec||0:0;m.mirQ=0;m.mirDraft='';m.mirAsk=e.q;R('mirw')});
Hooks.act('mirpor',()=>{m.mirPv=null;m.mirCmp=0;R('mirp')});
Hooks.act('mirpormake',()=>{const D=mirLoad();const sec=mirPortrait();if(!Object.keys(sec).length){T(mirT('porNone'));return}D.por.push({ts:Date.now(),sec});if(D.rem)D.rem=Date.now()+90*864e5;mirSave();m.mirPv=null;mirRe()});
Hooks.act('mirpv',e=>{m.mirPv=+e.j;mirRe()});
Hooks.act('mircmp',()=>{m.mirCmp=m.mirCmp?0:1;mirRe()});
Hooks.act('mirtoplan',e=>{const D=mirLoad();if(D.plan.some(x=>x.key===e.k)){R('mirl');return}D.plan.push({id:mirId(),key:e.k,what:e.t,nids:String(e.n||'').split(',').filter(Boolean),why:'',start:'',steps:'',how:''});mirSave();mirRe()});
Hooks.act('mirpdel',e=>{if(m.mirSure!==e.id){m.mirSure=e.id;mirRe();return}const D=mirLoad();D.plan=D.plan.filter(x=>x.id!==e.id);mirSave();m.mirSure=null;mirRe()});
Hooks.act('mirtask',e=>{const x=mirLoad().plan.find(p=>p.id===e.id);if(!x)return;const t=String(x.start||'').trim();if(!t){T(mirT('needStart'));return}g.tasks=Array.isArray(g.tasks)?g.tasks:[];g.tasks.push({id:V(),t,due:'',prio:2,proj:'',done:!1});$();T(mirT('tAdded'))});
Hooks.act('mirgoal',e=>{const x=mirLoad().plan.find(p=>p.id===e.id);if(!x)return;const t=String(x.what||'').trim();if(!t)return;g.goals=Array.isArray(g.goals)?g.goals:[];g.goals.push({id:V(),name:t.slice(0,120),per:3,log:[]});$();T(mirT('gAdded'))});
Hooks.act('mirunlock',async()=>{try{if(!g.waId)throw 0;const c=await navigator.credentials.get({publicKey:{challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:'public-key',id:NZ(g.waId)}],userVerification:'required',timeout:6e4,rpId:location.hostname}});if(c){m.mirOK=1;mirRe();return}}catch{}T(mirT('unlockNo'))});
Hooks.act('mirset',()=>{const D=mirLoad();H(mirT('settings'),`<p class="fchow">${i(mirT('private'))}</p>
 <label class="mirchk"><input type="checkbox" data-mirlock ${D.lock?'checked':''}> ${i(mirT('lockOn'))}</label>
 <div class="miracts"><button type="button" class="btn" data-mirexp="1">${i(mirT('export'))}</button><button type="button" class="btn mirdanger" data-mirwipe="1">${i(mirT('wipe'))}</button></div><p class="mirnote">${i(mirT('notTher'))}</p>`,sh=>{
 sh.addEventListener('change',ev=>{const c=ev.target.closest('[data-mirlock]');if(!c)return;if(c.checked&&!g.waId){c.checked=!1;T(mirT('lockNeed'));return}D.lock=c.checked?1:0;m.mirOK=1;mirSave()});
 sh.addEventListener('click',ev=>{if(ev.target.closest('[data-mirexp]'))mirExport();const w=ev.target.closest('[data-mirwipe]');if(w){if(!w.dataset.sure){w.dataset.sure=1;w.textContent=mirT('delSure');return}mirD={};mirSave();mirD=null;sh.remove();T(mirT('wiped'));R('mir')}})})});
function mirExport(){const D=mirLoad();const lines=[mirT('title'),''];D.notes.slice().sort((a,b)=>a.ts-b.ts).forEach(n=>{lines.push('— '+mirDT(n.ts)+' · '+cv5n(MIR_SEC[n.sec||0][0]));if(n.ask)lines.push('('+n.ask+')');lines.push(n.t,'');(n.an||[]).forEach(a=>{lines.push('  ['+mirT('aTitle')+' · '+mirDT(a.ts)+']');a.items.forEach(x=>{if(D.rej[x.key])return;lines.push('  • '+x.title);x.q.forEach(q=>lines.push('    «'+q.s+'»'))});lines.push('')})});
 D.plan.forEach(x=>lines.push(mirT('plan')+': '+x.what,'  '+mirT('pStart')+': '+(x.start||''),''));
 const txt=lines.join('\n'),name='zerkalo-sebya.txt';try{const f=new File([txt],name,{type:'text/plain'});if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:mirT('title')}).catch(()=>{});return}}catch{}
 try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'text/plain'}));a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)}catch(e){Hooks.err('mirexp',e)}}
Hooks.css('mirror-of-self',`
.screen.mir{gap:12px}.mir .mirsl{margin:-4px 2px 2px;color:var(--muted);font-style:italic}
.mirsecs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.mirsec{position:relative;min-height:74px;padding:12px;border-radius:16px;border:1px solid color-mix(in srgb,var(--gold,#C99A3E) 40%,var(--line));background:var(--surface);color:var(--ink);font:inherit;text-align:left;cursor:pointer;display:flex;align-items:flex-end}
.mirsec b{font-weight:500;font-size:15px;line-height:1.25;hyphens:none}.mirsec small{position:absolute;top:8px;right:10px;font-size:12px;color:var(--muted)}
.mirsec.free{grid-column:1/-1;min-height:56px;background:color-mix(in srgb,var(--gold,#C99A3E) 14%,var(--surface))}
.mirtwo{display:flex;flex-direction:column;gap:10px}.mirh{margin:10px 2px 0;font:inherit;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.mirrow{display:flex;flex-direction:column;gap:4px;width:100%;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;text-align:left;cursor:pointer}
.mirrow span{display:flex;justify-content:space-between;gap:8px}.mirrow b{font-weight:500;font-size:14px}.mirrow small{color:var(--muted);font-size:12.5px;flex:none}.mirrow em{font-style:normal;color:var(--muted);font-size:14px;line-height:1.35}
.mirempty{color:var(--muted);line-height:1.45;margin:4px 2px}.mirnote{color:var(--muted);font-size:12.5px;line-height:1.4;margin:6px 2px}
.mirdue{border:1px solid var(--gold,#C99A3E);background:color-mix(in srgb,var(--gold,#C99A3E) 14%,var(--surface));color:var(--ink);font:inherit;padding:12px;border-radius:14px;text-align:left;cursor:pointer}
.mirask{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;color:var(--muted);font-style:italic;line-height:1.4}.mirask button{flex:none;border:0;background:none;color:var(--gold,#C99A3E);font:inherit;font-style:normal;font-size:13.5px;cursor:pointer;padding:2px 0}
.mirta{width:100%;min-height:46vh;padding:14px;border-radius:16px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:17px;line-height:1.55;resize:vertical;box-sizing:border-box}
.mirbar{display:flex;gap:10px}.mirbar .mirsave{flex:1}.mirmic{flex:none;padding:0 16px;min-height:48px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;cursor:pointer}.mirmic.on{background:#b3261e;color:#fff;border-color:transparent}
.mirseal{display:flex;flex-wrap:wrap;align-items:center;gap:8px;color:var(--muted);font-size:14px}.mirseal button{border:1px solid var(--line);background:transparent;color:var(--ink);font:inherit;font-size:14px;padding:8px 12px;border-radius:999px;cursor:pointer}
.mirdt{color:var(--muted);font-size:12.5px}.mirask0{margin:0;color:var(--muted);font-style:italic}
.mirtext{padding:14px;border-radius:16px;border:1px solid var(--line);background:var(--surface);line-height:1.6;font-size:16px;white-space:normal;overflow-wrap:anywhere}
.miracts{display:flex;flex-direction:column;gap:10px}.miracts.mirrw{flex-direction:row;flex-wrap:wrap;background:none;border:0;padding:0}.miracts.mirrw>*{flex:1;min-width:0}.mirdeep.off{opacity:.55}
.mirchk{display:flex;align-items:center;gap:10px;font-size:14.5px;color:var(--ink)}.mirchk input{width:20px;height:20px;accent-color:var(--gold,#C99A3E)}
.mirlink{border:0;background:none;color:var(--gold,#C99A3E);font:inherit;font-size:14.5px;text-align:left;padding:4px 0;cursor:pointer}
.mirenv{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;padding:30px 14px}.mirenv .ic{font-size:44px}.mirenv p{color:var(--muted);margin:0}
.mirit{display:flex;flex-direction:column;gap:8px;padding:14px;border-radius:16px;border:1px solid var(--line);background:var(--surface)}.mirit>b{font-weight:500;font-size:16px;line-height:1.4}.mirit.rj{opacity:.55}
.mirq{margin:0;padding:8px 12px;border-left:3px solid var(--gold,#C99A3E);background:color-mix(in srgb,var(--gold,#C99A3E) 8%,transparent);border-radius:0 10px 10px 0}.mirq p{margin:0;font-style:italic;line-height:1.45}.mirq small{color:var(--muted);font-size:12px}
.mirwhy{margin:0;font-size:13.5px;color:var(--muted);line-height:1.4}.mirwhy span{color:var(--ink)}
.mirvote{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.mirvote button,.mirpb button,.mirhist button{border:1px solid var(--line);background:transparent;color:var(--ink);font:inherit;font-size:13.5px;padding:7px 12px;border-radius:999px;cursor:pointer}
.mirvote button.on,.mirpb button.on,.mirhist button.on{background:var(--gold,#C99A3E);color:#15120b;border-color:transparent}.mirvote small{color:var(--muted);font-size:12.5px}
.mirhist{display:flex;gap:6px;overflow-x:auto;padding-bottom:2px}.mirhist button{flex:none}
.mirqa{display:flex;flex-direction:column;gap:4px;width:100%;padding:12px 14px;border-radius:14px;border:1px dashed color-mix(in srgb,var(--gold,#C99A3E) 55%,var(--line));background:transparent;color:var(--ink);font:inherit;text-align:left;cursor:pointer}.mirqa small{color:var(--gold,#C99A3E)}
.miror summary{cursor:pointer;color:var(--muted);padding:6px 2px}
.mirpi{display:flex;flex-direction:column;gap:6px;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface)}.mirpi>small{color:var(--muted);font-size:12.5px}.mirpb{display:flex;flex-wrap:wrap;gap:6px}
.mircmpw{display:flex;flex-direction:column;gap:4px}.mircmp{margin:0;padding:8px 12px;border-radius:12px;background:var(--surface);border:1px solid var(--line)}
.mirpf{display:flex;flex-direction:column;gap:4px;font-size:13px;color:var(--muted)}.mirpf textarea{width:100%;box-sizing:border-box;padding:10px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font:inherit;font-size:15.5px;resize:vertical}
.mircr{display:flex;flex-direction:column;gap:12px;line-height:1.5}.mircr a{display:block;box-sizing:border-box;width:100%;text-align:center;text-decoration:none;padding:14px;border-radius:14px}
.mirdanger{color:#b3261e!important;border-color:color-mix(in srgb,#b3261e 50%,var(--line))!important;background:transparent;border:1px solid;padding:10px;border-radius:12px;font:inherit;cursor:pointer}
`);
