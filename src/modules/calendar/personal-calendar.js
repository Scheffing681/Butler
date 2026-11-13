/* ===== Personal calendar: computations, screens, setup — one module (was updates v199) ===== */
/* v199: personal calendar — computations (faiths, state holidays, sky) */
const cv5LG=['ru','de','en','pl','tr','fr','es'];
const cv5i=()=>{const k=cv5LG.indexOf(g.lang);return k<0?2:k};
const cv5n=a=>Array.isArray(a)?(a[cv5i()]||a[2]||a[0]):String(a||'');
const cv5C=()=>{const c=g.cv5&&typeof g.cv5==='object'?g.cv5:(g.cv5={});c.show=c.show||{};return c};
const cv5on=k=>{const c=cv5C();return c.show[k]!==!1};
const cv5RD=d=>Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5)+719163;
const cv5D=rd=>{const t=new Date((rd-719163)*864e5);return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())};
const cv5add=(d,n)=>new Date(d.getFullYear(),d.getMonth(),d.getDate()+n);
function cv5orthEaster(y){const a=y%4,b=y%7,c=y%19,d=(19*c+15)%30,e=(2*a+4*b-d+34)%7,mo=Math.floor((d+e+114)/31),da=(d+e+114)%31+1;return cv5add(new Date(y,mo-1,da),y>=2100?14:13)}
const cv5WE=y=>Nq(y);
/* ---------- Orthodox ---------- */
const cv5OF=[
[1,6,'F',['Рождественский сочельник','Heiliger Abend (orthodox)','Christmas Eve (Orthodox)','Wigilia (prawosławna)','Noel Arifesi (Ortodoks)','Veille de Noël (orthodoxe)','Nochebuena (ortodoxa)'],1],
[1,7,'H',['Рождество Христово','Geburt Christi (Weihnachten)','Nativity of Christ','Boże Narodzenie','İsa’nın Doğuşu (Noel)','Nativité du Christ','Natividad de Cristo']],
[1,14,'F',['Обрезание Господне · свт. Василий Великий','Beschneidung des Herrn · Hl. Basilius der Große','Circumcision of the Lord · St Basil the Great','Obrzezanie Pańskie · św. Bazyli Wielki','Rab’bin Sünneti · Büyük Aziz Basil','Circoncision du Seigneur · saint Basile le Grand','Circuncisión del Señor · san Basilio el Grande']],
[1,18,'F',['Крещенский сочельник','Vorabend der Theophanie','Theophany Eve','Wigilia Objawienia Pańskiego','Epifani Arifesi','Veille de la Théophanie','Víspera de la Teofanía'],1],
[1,19,'H',['Крещение Господне (Богоявление)','Taufe des Herrn (Theophanie)','Theophany (Baptism of the Lord)','Chrzest Pański (Objawienie)','Rab’bin Vaftizi (Epifani)','Théophanie (Baptême du Seigneur)','Teofanía (Bautismo del Señor)']],
[1,25,'G',['Мц. Татиана','Hl. Märtyrerin Tatiana','St Tatiana the Martyr','Św. męczennica Tatiana','Şehit Azize Tatiana','Sainte Tatiana, martyre','Santa Tatiana, mártir']],
[2,15,'H',['Сретение Господне','Darstellung des Herrn (Begegnung)','Meeting of the Lord','Spotkanie Pańskie','Rab’bin Tapınağa Takdimi','Rencontre du Seigneur','Presentación del Señor']],
[4,7,'H',['Благовещение Пресвятой Богородицы','Verkündigung an die Gottesgebärerin','Annunciation','Zwiastowanie Bogurodzicy','Meryem’e Müjde','Annonciation','Anunciación']],
[5,6,'G',['Вмч. Георгий Победоносец','Hl. Großmärtyrer Georg','St George the Great Martyr','Św. Jerzy Zwycięzca','Büyük Şehit Aziz Yorgi','Saint Georges le Victorieux','San Jorge el Victorioso']],
[5,22,'G',['Свт. Николай Чудотворец (перенесение мощей)','Hl. Nikolaus (Übertragung der Reliquien)','St Nicholas (translation of relics)','Św. Mikołaj (przeniesienie relikwii)','Aziz Nikolaos (rölikerin nakli)','Saint Nicolas (translation des reliques)','San Nicolás (traslado de reliquias)']],
[7,7,'F',['Рождество Иоанна Предтечи','Geburt Johannes des Täufers','Nativity of St John the Baptist','Narodzenie św. Jana Chrzciciela','Vaftizci Yahya’nın Doğuşu','Nativité de saint Jean-Baptiste','Natividad de san Juan Bautista']],
[7,12,'F',['Апостолы Пётр и Павел','Hll. Apostel Petrus und Paulus','Sts Peter and Paul','Św. Apostołowie Piotr i Paweł','Havariler Petrus ve Pavlus','Saints Pierre et Paul','San Pedro y san Pablo']],
[7,28,'G',['Равноап. князь Владимир','Hl. Großfürst Wladimir','St Vladimir, Equal to the Apostles','Św. książę Włodzimierz','Aziz Knez Vladimir','Saint Vladimir','San Vladimiro']],
[8,1,'G',['Прп. Серафим Саровский','Hl. Seraphim von Sarow','St Seraphim of Sarov','Św. Serafin z Sarowa','Sarovlu Aziz Serafim','Saint Séraphin de Sarov','San Serafín de Sarov']],
[8,2,'G',['Пророк Илия','Hl. Prophet Elias','Prophet Elijah','Prorok Eliasz','İlyas Peygamber','Prophète Élie','Profeta Elías']],
[8,14,'F',['Медовый Спас · начало Успенского поста','Honig-Erlöserfest · Beginn des Entschlafensfastens','Honey Feast of the Saviour · Dormition Fast begins','Miodowe Święto Zbawiciela · początek postu','Bal Kurtarıcı Bayramı · oruç başlıyor','Fête du miel · début du jeûne','Fiesta de la miel · comienza el ayuno']],
[8,19,'H',['Преображение Господне','Verklärung des Herrn','Transfiguration','Przemienienie Pańskie','İsa’nın Başkalaşımı','Transfiguration','Transfiguración']],
[8,28,'H',['Успение Пресвятой Богородицы','Entschlafen der Gottesgebärerin','Dormition of the Theotokos','Zaśnięcie Bogurodzicy','Meryem’in Uyuyuşu','Dormition de la Mère de Dieu','Dormición de la Madre de Dios']],
[9,11,'F',['Усекновение главы Иоанна Предтечи','Enthauptung Johannes des Täufers','Beheading of St John the Baptist','Ścięcie św. Jana Chrzciciela','Vaftizci Yahya’nın Başının Kesilmesi','Décollation de saint Jean-Baptiste','Degollación de san Juan Bautista'],1],
[9,21,'H',['Рождество Пресвятой Богородицы','Geburt der Gottesgebärerin','Nativity of the Theotokos','Narodzenie Bogurodzicy','Meryem’in Doğuşu','Nativité de la Mère de Dieu','Natividad de la Madre de Dios']],
[9,27,'H',['Воздвижение Креста Господня','Kreuzerhöhung','Exaltation of the Cross','Podwyższenie Krzyża','Haç’ın Yüceltilmesi','Exaltation de la Croix','Exaltación de la Cruz'],1],
[10,8,'G',['Прп. Сергий Радонежский','Hl. Sergius von Radonesch','St Sergius of Radonezh','Św. Sergiusz z Radoneża','Radonejli Aziz Sergiy','Saint Serge de Radonège','San Sergio de Rádonezh']],
[10,9,'G',['Ап. Иоанн Богослов','Hl. Apostel Johannes der Theologe','St John the Theologian','Św. Jan Teolog','Havari Yuhanna','Saint Jean le Théologien','San Juan el Teólogo']],
[10,14,'F',['Покров Пресвятой Богородицы','Schutz der Gottesgebärerin (Pokrow)','Protection of the Theotokos','Opieka Bogurodzicy (Pokrow)','Meryem’in Himayesi','Protection de la Mère de Dieu','Protección de la Madre de Dios']],
[11,8,'G',['Вмч. Димитрий Солунский','Hl. Demetrios von Thessaloniki','St Demetrius of Thessaloniki','Św. Dymitr Sołuński','Selanikli Aziz Dimitrios','Saint Démétrios de Thessalonique','San Demetrio de Tesalónica']],
[11,10,'G',['Свт. Димитрий Ростовский · мц. Параскева Пятница','Hl. Dimitri von Rostow · Hl. Paraskeva','St Demetrius of Rostov · St Paraskeva','Św. Dymitr Rostowski · św. Paraskewa','Rostovlu Aziz Dimitri · Azize Paraskevi','Saint Dimitri de Rostov · sainte Parascève','San Demetrio de Rostov · santa Parasceva']],
[11,21,'G',['Собор Архистратига Михаила','Synaxis des Erzengels Michael','Synaxis of Archangel Michael','Sobór Archanioła Michała','Başmelek Mikail Toplantısı','Synaxe de l’archange Michel','Sinaxis del arcángel Miguel']],
[12,4,'H',['Введение во храм Пресвятой Богородицы','Einführung der Gottesgebärerin in den Tempel','Entry of the Theotokos into the Temple','Wprowadzenie Bogurodzicy do świątyni','Meryem’in Tapınağa Girişi','Entrée de la Mère de Dieu au Temple','Presentación de la Madre de Dios en el Templo']],
[12,7,'G',['Вмц. Екатерина','Hl. Großmärtyrerin Katharina','St Catherine the Great Martyr','Św. Katarzyna','Azize Katerina','Sainte Catherine','Santa Catalina']],
[12,17,'G',['Вмц. Варвара','Hl. Großmärtyrerin Barbara','St Barbara the Great Martyr','Św. Barbara','Azize Barbara','Sainte Barbe','Santa Bárbara']],
[12,19,'G',['Свт. Николай Чудотворец','Hl. Nikolaus der Wundertäter','St Nicholas the Wonderworker','Św. Mikołaj Cudotwórca','Mucizeler Yaratan Aziz Nikolaos','Saint Nicolas le Thaumaturge','San Nicolás el Taumaturgo']]];
const cv5OM=[
[-70,'G',['Неделя о мытаре и фарисее','Sonntag vom Zöllner und Pharisäer','Sunday of the Publican and Pharisee','Niedziela o celniku i faryzeuszu','Vergici ve Ferisi Pazarı','Dimanche du publicain et du pharisien','Domingo del publicano y el fariseo']],
[-57,'G',['Вселенская родительская суббота','Allgemeiner Totengedenk-Samstag','Meatfare Saturday of the Departed','Sobota zaduszna','Ölüleri Anma Cumartesisi','Samedi des défunts','Sábado de difuntos']],
[-49,'F',['Прощёное воскресенье','Sonntag der Vergebung','Forgiveness Sunday','Niedziela przebaczenia','Bağışlama Pazarı','Dimanche du pardon','Domingo del perdón']],
[-48,'F',['Чистый понедельник — начало Великого поста','Reiner Montag – Beginn der Großen Fastenzeit','Clean Monday – Great Lent begins','Czysty Poniedziałek – początek Wielkiego Postu','Temiz Pazartesi – Büyük Perhiz başlar','Lundi pur – début du Grand Carême','Lunes limpio – comienza la Gran Cuaresma'],1],
[-7,'H',['Вход Господень в Иерусалим (Вербное воскресенье)','Einzug in Jerusalem (Palmsonntag)','Entry into Jerusalem (Palm Sunday)','Wjazd do Jerozolimy (Niedziela Palmowa)','Kudüs’e Giriş (Palm Pazarı)','Entrée à Jérusalem (Rameaux)','Entrada en Jerusalén (Domingo de Ramos)']],
[-3,'F',['Великий четверг','Großer Donnerstag','Holy Thursday','Wielki Czwartek','Kutsal Perşembe','Jeudi saint','Jueves Santo']],
[-2,'F',['Великая пятница','Großer Freitag','Holy Friday','Wielki Piątek','Kutsal Cuma','Vendredi saint','Viernes Santo'],1],
[-1,'F',['Великая суббота','Großer Samstag','Holy Saturday','Wielka Sobota','Kutsal Cumartesi','Samedi saint','Sábado Santo']],
[0,'H',['Пасха — Светлое Христово Воскресение','Ostern – Auferstehung Christi','Pascha – Resurrection of Christ','Pascha – Zmartwychwstanie','Paskalya – Diriliş','Pâques – Résurrection du Christ','Pascua – Resurrección de Cristo']],
[9,'G',['Радоница — поминовение усопших','Radoniza – Totengedenken','Radonitsa – remembrance of the departed','Radunica – wspomnienie zmarłych','Radonitsa – ölüleri anma','Radonitsa – mémoire des défunts','Radonitsa – conmemoración de difuntos']],
[39,'H',['Вознесение Господне','Christi Himmelfahrt','Ascension of the Lord','Wniebowstąpienie Pańskie','Göğe Yükseliş','Ascension du Seigneur','Ascensión del Señor']],
[48,'G',['Троицкая родительская суббота','Totengedenk-Samstag vor Pfingsten','Saturday of the Departed before Pentecost','Sobota zaduszna przed Pięćdziesiątnicą','Pentekost öncesi anma cumartesisi','Samedi des défunts avant la Pentecôte','Sábado de difuntos antes de Pentecostés']],
[49,'H',['День Святой Троицы (Пятидесятница)','Pfingsten – Dreifaltigkeit','Pentecost – Holy Trinity','Pięćdziesiątnica – Trójca Święta','Pentekost – Kutsal Üçlü','Pentecôte – Sainte Trinité','Pentecostés – Santísima Trinidad']],
[50,'F',['День Святого Духа','Pfingstmontag – Tag des Heiligen Geistes','Day of the Holy Spirit','Dzień Ducha Świętego','Kutsal Ruh Günü','Lundi du Saint-Esprit','Día del Espíritu Santo']],
[56,'G',['Неделя всех святых','Sonntag aller Heiligen','Sunday of All Saints','Niedziela Wszystkich Świętych','Tüm Azizler Pazarı','Dimanche de tous les saints','Domingo de todos los santos']]];
const cv5FN={
gl:['Великий пост','Große Fastenzeit','Great Lent','Wielki Post','Büyük Perhiz','Grand Carême','Gran Cuaresma'],
pt:['Петров пост','Apostelfasten','Apostles’ Fast','Post Apostolski','Havariler Orucu','Jeûne des Apôtres','Ayuno de los Apóstoles'],
dm:['Успенский пост','Entschlafensfasten','Dormition Fast','Post Zaśnięcia','Meryem’in Uyuyuşu Orucu','Jeûne de la Dormition','Ayuno de la Dormición'],
nt:['Рождественский пост','Weihnachtsfasten','Nativity Fast','Post Bożonarodzeniowy','Noel Orucu','Jeûne de la Nativité','Ayuno de Navidad'],
ms:['Масленица (сырная седмица)','Butterwoche (Maslenitsa)','Cheesefare Week (Maslenitsa)','Tydzień serowy (Maslenica)','Peynir Haftası (Maslenitsa)','Semaine des laitages (Maslenitsa)','Semana de los lácteos (Maslenitsa)'],
wd:['Постный день','Fasttag','Fast day','Dzień postny','Oruç günü','Jour de jeûne','Día de ayuno'],
lc:['Великий пост','Fastenzeit','Lent','Wielki Post','Büyük Perhiz','Carême','Cuaresma'],
av:['Адвент','Advent','Advent','Adwent','Advent','Avent','Adviento'],
ps:['Страстное время (семь недель без …)','Passionszeit (7 Wochen ohne)','Passiontide (seven weeks without …)','Okres pasyjny','Çile Dönemi','Temps de la Passion','Tiempo de Pasión'],
rm:['Рамадан','Ramadan','Ramadan','Ramadan','Ramazan','Ramadan','Ramadán']};
function cv5orth(y){const E=cv5orthEaster(y),o={},put=(d,r,t,f)=>{const k=x(d);(o[k]=o[k]||[]).push({r,t,fast:!!f})};
 cv5OF.forEach(([mo,da,r,t,f])=>put(new Date(y,mo-1,da),r,t,f));cv5OM.forEach(([n,r,t,f])=>put(cv5add(E,n),r,t,f));return o}
function cv5orthPer(y){const E=cv5orthEaster(y),P=[];const p=(a,b,k,strict)=>{if(a<=b)P.push({a,b,k,t:cv5FN[k],fast:strict})};
 p(cv5add(E,-55),cv5add(E,-49),'ms',0);p(cv5add(E,-48),cv5add(E,-1),'gl',1);p(cv5add(E,57),new Date(y,6,11),'pt',1);p(new Date(y,7,14),new Date(y,7,27),'dm',1);p(new Date(y,10,28),new Date(y+1,0,6),'nt',1);p(new Date(y-1,10,28),new Date(y,0,6),'nt',1);return P}
function cv5orthWeek(d){const w=d.getDay();if(w!==3&&w!==5)return!1;const y=d.getFullYear(),E=cv5orthEaster(y),k=x(d);const off=Math.round((d-E)/864e5);
 if(k>=x(new Date(y,0,7))&&k<=x(new Date(y,0,17)))return!1;if(off>=-69&&off<=-64)return!1;if(off>=-55&&off<=-50)return!1;if(off>=1&&off<=6)return!1;if(off>=50&&off<=55)return!1;return!0}
/* ---------- Protestant ---------- */
const cv5PF=[
[[1,6],'F',['Богоявление (Эпифания)','Epiphanias','Epiphany','Epifania','Epifani','Épiphanie','Epifanía']],
[['E',-46],'G',['Пепельная среда — начало Страстного времени','Aschermittwoch – Beginn der Passionszeit','Ash Wednesday – Passiontide begins','Środa Popielcowa','Kül Çarşambası','Mercredi des Cendres','Miércoles de Ceniza']],
[['E',-7],'F',['Вербное воскресенье','Palmsonntag','Palm Sunday','Niedziela Palmowa','Palm Pazarı','Dimanche des Rameaux','Domingo de Ramos']],
[['E',-3],'F',['Великий четверг','Gründonnerstag','Maundy Thursday','Wielki Czwartek','Kutsal Perşembe','Jeudi saint','Jueves Santo']],
[['E',-2],'H',['Страстная пятница','Karfreitag','Good Friday','Wielki Piątek','Kutsal Cuma','Vendredi saint','Viernes Santo']],
[['E',0],'H',['Пасха — Воскресение Христово','Ostersonntag','Easter Sunday','Wielkanoc','Paskalya','Pâques','Domingo de Resurrección']],
[['E',1],'F',['Пасхальный понедельник','Ostermontag','Easter Monday','Poniedziałek Wielkanocny','Paskalya Pazartesi','Lundi de Pâques','Lunes de Pascua']],
[['E',39],'H',['Вознесение Христово','Christi Himmelfahrt','Ascension Day','Wniebowstąpienie','Göğe Yükseliş','Ascension','Ascensión']],
[['E',49],'H',['Пятидесятница','Pfingstsonntag','Pentecost','Zielone Świątki','Pentekost','Pentecôte','Pentecostés']],
[['E',50],'F',['Духов день','Pfingstmontag','Whit Monday','Poniedziałek Zielonych Świątek','Pentekost Pazartesi','Lundi de Pentecôte','Lunes de Pentecostés']],
[['E',56],'F',['Троица (Тринитатис)','Trinitatis','Trinity Sunday','Niedziela Trójcy Świętej','Teslis Pazarı','Dimanche de la Trinité','Domingo de la Trinidad']],
[['S',9,1],'F',['Праздник урожая','Erntedankfest','Harvest Thanksgiving','Święto Dziękczynienia za plony','Hasat Şükran Bayramı','Fête des récoltes','Acción de Gracias por la cosecha']],
[[10,31],'H',['День Реформации','Reformationstag','Reformation Day','Dzień Reformacji','Reform Günü','Fête de la Réformation','Día de la Reforma']],
[['W',10,16],'F',['День покаяния и молитвы','Buß- und Bettag','Day of Repentance and Prayer','Dzień Pokuty i Modlitwy','Tövbe ve Dua Günü','Jour de repentance et de prière','Día de Penitencia y Oración']],
[['S',10,20],'F',['Воскресенье вечности — поминовение усопших','Ewigkeitssonntag (Totensonntag)','Eternity Sunday (Sunday of the Dead)','Niedziela Wieczności','Ebediyet Pazarı','Dimanche de l’éternité','Domingo de la Eternidad']],
[['S',10,27],'F',['1-е воскресенье Адвента','1. Advent','First Sunday of Advent','1. niedziela Adwentu','Advent’in 1. Pazarı','1er dimanche de l’Avent','Primer domingo de Adviento']],
[['S',11,4],'F',['2-е воскресенье Адвента','2. Advent','Second Sunday of Advent','2. niedziela Adwentu','Advent’in 2. Pazarı','2e dimanche de l’Avent','Segundo domingo de Adviento']],
[['S',11,11],'F',['3-е воскресенье Адвента','3. Advent','Third Sunday of Advent','3. niedziela Adwentu','Advent’in 3. Pazarı','3e dimanche de l’Avent','Tercer domingo de Adviento']],
[['S',11,18],'F',['4-е воскресенье Адвента','4. Advent','Fourth Sunday of Advent','4. niedziela Adwentu','Advent’in 4. Pazarı','4e dimanche de l’Avent','Cuarto domingo de Adviento']],
[[12,24],'F',['Сочельник','Heiligabend','Christmas Eve','Wigilia','Noel Arifesi','Veille de Noël','Nochebuena']],
[[12,25],'H',['Рождество Христово','1. Weihnachtstag','Christmas Day','Boże Narodzenie','Noel','Noël','Navidad']],
[[12,26],'F',['Второй день Рождества','2. Weihnachtstag','Second Day of Christmas','Drugi dzień Bożego Narodzenia','Noel’in ikinci günü','Deuxième jour de Noël','Segundo día de Navidad']]];
/* rule: [m,d] fixed · ['E',n] western Easter · ['O',n] orthodox Easter · ['S',m0,d] first Sunday on/after · ['W',m0,d] first Wednesday on/after */
function cv5rule(r,y){if(typeof r[0]==='number')return new Date(y,r[0]-1,r[1]);if(r[0]==='E')return cv5add(cv5WE(y),r[1]);if(r[0]==='O')return cv5add(cv5orthEaster(y),r[1]);const wd=r[0]==='S'?0:3,d=new Date(y,r[1],r[2]);return cv5add(d,(wd-d.getDay()+7)%7)}
function cv5prot(y){const o={};cv5PF.forEach(([ru,r,t])=>{const k=x(cv5rule(ru,y));(o[k]=o[k]||[]).push({r,t})});return o}
function cv5adventStart(y){const d=new Date(y,10,27);return cv5add(d,(7-d.getDay())%7)}
function cv5westPer(y,prot){const E=cv5WE(y),P=[];P.push({a:cv5add(E,-46),b:cv5add(E,-1),k:prot?'ps':'lc',t:cv5FN[prot?'ps':'lc'],fast:0});P.push({a:cv5adventStart(y),b:new Date(y,11,24),k:'av',t:cv5FN.av,fast:0});return P}
/* ---------- Islamic (tabular, with community shift) ---------- */
const cv5IE=227015;
const cv5fromI=(y,m,d)=>cv5IE-1+(y-1)*354+Math.floor((3+11*y)/30)+29*(m-1)+Math.floor(m/2)+d;
function cv5toI(rd){const y=Math.floor((30*(rd-cv5IE)+10646)/10631),pr=rd-cv5fromI(y,1,1),m=Math.min(12,Math.floor((11*pr+330)/325)),d=rd-cv5fromI(y,m,1)+1;return{y,m,d}}
const cv5hadj=()=>{const a=+cv5C().hadj||0;return Math.max(-2,Math.min(2,a))};
const cv5hij=d=>cv5toI(cv5RD(d)-cv5hadj());
const cv5IM={ru:['Мухаррам','Сафар','Раби аль-авваль','Раби ас-сани','Джумада аль-уля','Джумада ас-сани','Раджаб','Шаабан','Рамадан','Шавваль','Зуль-каада','Зуль-хиджа'],tr:['Muharrem','Safer','Rebiülevvel','Rebiülahir','Cemaziyelevvel','Cemaziyelahir','Recep','Şaban','Ramazan','Şevval','Zilkade','Zilhicce'],x:['Muharram','Safar','Rabi’ al-awwal','Rabi’ al-thani','Jumada al-ula','Jumada al-akhira','Rajab','Sha’ban','Ramadan','Shawwal','Dhu al-Qa’da','Dhu al-Hijja']};
const cv5IFx=[
[1,1,'F',['Исламский Новый год','Islamisches Neujahr','Islamic New Year','Nowy Rok islamski','Hicri Yılbaşı','Nouvel An islamique','Año Nuevo islámico']],
[1,10,'F',['День Ашура','Aschura','Ashura','Aszura','Aşure Günü','Achoura','Ashura']],
[3,12,'G',['Мавлид — день рождения Пророка','Mawlid – Geburtstag des Propheten','Mawlid – the Prophet’s birthday','Maulid – urodziny Proroka','Mevlid Kandili','Mawlid – naissance du Prophète','Mawlid – nacimiento del Profeta'],'s'],
[3,17,'G',['Мавлид — день рождения Пророка','Mawlid – Geburtstag des Propheten','Mawlid – the Prophet’s birthday','Maulid – urodziny Proroka','Mevlid','Mawlid – naissance du Prophète','Mawlid – nacimiento del Profeta'],'h'],
[7,27,'G',['Ночь Исра и Мирадж','Nacht der Himmelfahrt (Isra und Miradsch)','Isra and Mi’raj','Noc Isra i Miradż','Miraç Kandili','Nuit d’Isra et Mi’raj','Noche de Isra y Miraj']],
[8,15,'G',['Ночь Бараат','Nacht der Vergebung (Laylat al-Bara’a)','Laylat al-Bara’a','Noc Bara’a','Berat Kandili','Nuit du pardon (Laylat al-Bara’a)','Noche del perdón (Laylat al-Bara’a)']],
[9,1,'H',['Начало Рамадана','Beginn des Ramadan','Ramadan begins','Początek Ramadanu','Ramazan başlangıcı','Début du Ramadan','Comienzo del Ramadán']],
[9,27,'F',['Ночь Предопределения (Ляйлят аль-Кадр)','Nacht der Bestimmung (Laylat al-Qadr)','Laylat al-Qadr','Noc Przeznaczenia','Kadir Gecesi','Nuit du Destin','Noche del Destino']],
[10,1,'H',['Ураза-байрам (Ид аль-Фитр)','Fest des Fastenbrechens (Eid al-Fitr)','Eid al-Fitr','Id al-Fitr','Ramazan Bayramı','Aïd al-Fitr','Eid al-Fitr']],
[10,2,'F',['Ураза-байрам · 2-й день','Eid al-Fitr · 2. Tag','Eid al-Fitr · day 2','Id al-Fitr · 2. dzień','Ramazan Bayramı · 2. gün','Aïd al-Fitr · 2e jour','Eid al-Fitr · 2.º día']],
[10,3,'F',['Ураза-байрам · 3-й день','Eid al-Fitr · 3. Tag','Eid al-Fitr · day 3','Id al-Fitr · 3. dzień','Ramazan Bayramı · 3. gün','Aïd al-Fitr · 3e jour','Eid al-Fitr · 3.er día']],
[12,9,'F',['День Арафа','Tag von Arafat','Day of Arafah','Dzień Arafat','Arefe Günü','Jour d’Arafat','Día de Arafat']],
[12,10,'H',['Курбан-байрам (Ид аль-Адха)','Opferfest (Eid al-Adha)','Eid al-Adha','Id al-Adha','Kurban Bayramı','Aïd al-Adha','Eid al-Adha']],
[12,11,'F',['Курбан-байрам · 2-й день','Opferfest · 2. Tag','Eid al-Adha · day 2','Id al-Adha · 2. dzień','Kurban Bayramı · 2. gün','Aïd al-Adha · 2e jour','Eid al-Adha · 2.º día']],
[12,12,'F',['Курбан-байрам · 3-й день','Opferfest · 3. Tag','Eid al-Adha · day 3','Id al-Adha · 3. dzień','Kurban Bayramı · 3. gün','Aïd al-Adha · 3e jour','Eid al-Adha · 3.er día']],
[12,13,'F',['Курбан-байрам · 4-й день','Opferfest · 4. Tag','Eid al-Adha · day 4','Id al-Adha · 4. dzień','Kurban Bayramı · 4. gün','Aïd al-Adha · 4e jour','Eid al-Adha · 4.º día']],
[12,18,'G',['Праздник Гадир Хумм','Ghadir-Chumm-Fest','Eid al-Ghadir','Święto Ghadir','Gadir-i Hum Bayramı','Aïd al-Ghadir','Eid al-Ghadir'],'h']];
function cv5isl(y){const o={},sh=cv5C().isl==='shia'?'h':'s',a=cv5hadj();const y0=cv5toI(cv5RD(new Date(y,0,1))).y;
 for(let hy=y0-1;hy<=y0+1;hy++)cv5IFx.forEach(([mo,da,r,t,only])=>{if(only&&only!==sh)return;const d=cv5D(cv5fromI(hy,mo,da)+a);if(d.getFullYear()!==y)return;const k=x(d);(o[k]=o[k]||[]).push({r,t,ap:1})});return o}
function cv5islPer(y){const P=[],a=cv5hadj(),y0=cv5toI(cv5RD(new Date(y,0,1))).y;for(let hy=y0-1;hy<=y0+1;hy++){const s=cv5D(cv5fromI(hy,9,1)+a),e=cv5D(cv5fromI(hy,10,1)+a-1);P.push({a:s,b:e,k:'rm',t:cv5FN.rm,fast:1,ap:1})}return P}
/* ---------- Hebrew calendar (Dershowitz–Reingold) ---------- */
const cv5HE=-1373427;
const cv5hl=y=>(7*y+1)%19<7;
function cv5hel(y){const me=Math.floor((235*y-234)/19),pe=12084+13753*me,d=29*me+Math.floor(pe/25920);return(3*(d+1))%7<3?d+1:d}
function cv5hyc(y){const a=cv5hel(y-1),b=cv5hel(y),c=cv5hel(y+1);return c-b===356?2:b-a===382?1:0}
const cv5hny=y=>cv5HE+cv5hel(y)+cv5hyc(y);
const cv5hdy=y=>cv5hny(y+1)-cv5hny(y);
function cv5hld(m,y){if([2,4,6,10,13].includes(m))return 29;if(m===12&&!cv5hl(y))return 29;const n=cv5hdy(y);if(m===8&&n%10!==5)return 29;if(m===9&&n%10===3)return 29;return 30}
const cv5hlm=y=>cv5hl(y)?13:12;
function cv5fromH(y,m,d){let r=cv5hny(y)+d-1;if(m<7){for(let k=7;k<=cv5hlm(y);k++)r+=cv5hld(k,y);for(let k=1;k<m;k++)r+=cv5hld(k,y)}else for(let k=7;k<m;k++)r+=cv5hld(k,y);return r}
function cv5toH(rd){let y=Math.floor((rd-cv5HE)/(35975351/98496))-1;while(cv5hny(y+1)<=rd)y++;let m=rd<cv5fromH(y,1,1)?7:1;while(rd>cv5fromH(y,m,cv5hld(m,y)))m++;return{y,m,d:rd-cv5fromH(y,m,1)+1}}
const cv5HM={ru:['Нисан','Ияр','Сиван','Тамуз','Ав','Элул','Тишрей','Хешван','Кислев','Тевет','Шват','Адар','Адар II'],de:['Nissan','Ijar','Siwan','Tammus','Aw','Elul','Tischri','Cheschwan','Kislew','Tewet','Schwat','Adar','Adar II'],x:['Nisan','Iyar','Sivan','Tammuz','Av','Elul','Tishrei','Cheshvan','Kislev','Tevet','Shevat','Adar','Adar II']};
const cv5JN={
rh:['Рош ха-Шана','Rosch ha-Schana','Rosh Hashanah','Rosz ha-Szana','Roş Aşana','Roch Hachana','Rosh Hashaná'],
ged:['Пост Гедальи','Fasten Gedalja','Fast of Gedaliah','Post Gedaliasza','Gedalya Orucu','Jeûne de Guedalia','Ayuno de Guedalías'],
yk:['Йом-Кипур','Jom Kippur','Yom Kippur','Jom Kipur','Yom Kipur','Yom Kippour','Yom Kipur'],
suk:['Суккот','Sukkot','Sukkot','Sukot','Sukot','Souccot','Sucot'],
hr:['Хошана Раба','Hoschana Rabba','Hoshana Rabbah','Hoszana Raba','Hoşana Raba','Hochaana Rabba','Hoshaná Rabá'],
sa:['Шмини Ацерет','Schmini Azeret','Shemini Atzeret','Szemini Aceret','Şemini Atzeret','Chemini Atseret','Shminí Atzéret'],
st:['Симхат Тора','Simchat Tora','Simchat Torah','Simchat Tora','Simhat Tora','Simhat Torah','Simjat Torá'],
han:['Ханука','Chanukka','Hanukkah','Chanuka','Hanuka','Hanoucca','Janucá'],
tev:['Пост 10 Тевета','Fasten am 10. Tewet','Fast of 10 Tevet','Post 10 Tewet','10 Tevet Orucu','Jeûne du 10 Tevet','Ayuno del 10 de Tevet'],
tub:['Ту би-Шват','Tu biSchwat','Tu BiShvat','Tu bi-Szwat','Tu BiŞvat','Tou Bichvat','Tu Bishvat'],
est:['Пост Эстер','Fasten Esther','Fast of Esther','Post Estery','Ester Orucu','Jeûne d’Esther','Ayuno de Ester'],
pur:['Пурим','Purim','Purim','Purim','Purim','Pourim','Purim'],
pes:['Песах','Pessach','Passover (Pesach)','Pesach','Pesah','Pessa’h','Pésaj'],
lag:['Лаг ба-Омер','Lag baOmer','Lag BaOmer','Lag ba-Omer','Lag BaOmer','Lag Baomer','Lag Baomer'],
shv:['Шавуот','Schawuot','Shavuot','Szawuot','Şavuot','Chavouot','Shavuot'],
tam:['Пост 17 Тамуза','Fasten am 17. Tammus','Fast of 17 Tammuz','Post 17 Tamuz','17 Tamuz Orucu','Jeûne du 17 Tamouz','Ayuno del 17 de Tamuz'],
av:['Тиша бе-Ав','Tischa beAw','Tisha B’Av','Tisza be-Aw','Tişa BeAv','Tisha Beav','Tishá BeAv'],
sh:['Шаббат','Schabbat','Shabbat','Szabat','Şabat','Chabbat','Shabat']};
function cv5jewY(hy){const L=[],put=(m,d,k,r,f,n)=>L.push({rd:cv5fromH(hy,m,d),k,r,fast:!!f,n}),satShift=(m,d)=>{const rd=cv5fromH(hy,m,d);return cv5D(rd).getDay()===6?1:0};
 put(7,1,'rh','H',0,1);put(7,2,'rh','H',0,2);put(7,3+satShift(7,3),'ged','G',1);put(7,10,'yk','H',1);
 put(7,15,'suk','H',0,1);put(7,16,'suk','H',0,2);for(let k=17;k<=20;k++)put(7,k,'suk','F',0,k-14);put(7,21,'hr','F');put(7,22,'sa','H');put(7,23,'st','H');
 const h1=cv5fromH(hy,9,25);for(let k=0;k<8;k++)L.push({rd:h1+k,k:'han',r:'F',n:k+1});
 put(10,10,'tev','G',1);put(11,15,'tub','G');const am=cv5hl(hy)?13:12;{let rd=cv5fromH(hy,am,13);if(cv5D(rd).getDay()===6)rd-=2;L.push({rd,k:'est',r:'G',fast:!0})}put(am,14,'pur','F');
 put(1,15,'pes','H',0,1);put(1,16,'pes','H',0,2);for(let k=17;k<=20;k++)put(1,k,'pes','F',0,k-14);put(1,21,'pes','H',0,7);put(1,22,'pes','H',0,8);
 put(2,18,'lag','G');put(3,6,'shv','H',0,1);put(3,7,'shv','H',0,2);put(4,17+satShift(4,17),'tam','G',1);put(5,9+satShift(5,9),'av','F',1);return L}
const cv5JC={};
function cv5jew(y){if(cv5JC[y])return cv5JC[y];const o={},hy=y+3760;[hy,hy+1].forEach(h=>cv5jewY(h).forEach(e=>{const d=cv5D(e.rd);if(d.getFullYear()!==y)return;const k=x(d);(o[k]=o[k]||[]).push({r:e.r,t:e.n?cv5JN[e.k].map((s,j)=>s+' · '+['день','Tag','day','dzień','gün','jour','día'][j]+' '+e.n):cv5JN[e.k],fast:e.fast,jk:e.k})}));return cv5JC[y]=o}
/* ---------- State holidays ---------- */
const cv5SN={
ny:['Новый год','Neujahr','New Year’s Day','Nowy Rok','Yılbaşı','Jour de l’an','Año Nuevo'],
nyh:['Новогодние каникулы','Neujahrsferien','New Year holidays','Ferie noworoczne','Yılbaşı tatili','Congés du Nouvel An','Vacaciones de Año Nuevo'],
xo:['Рождество Христово','Orthodoxes Weihnachten','Orthodox Christmas','Prawosławne Boże Narodzenie','Ortodoks Noeli','Noël orthodoxe','Navidad ortodoxa'],
def:['День защитника Отечества','Tag des Verteidigers des Vaterlandes','Defender of the Fatherland Day','Dzień Obrońcy Ojczyzny','Anavatan Savunucuları Günü','Jour du défenseur de la patrie','Día del Defensor de la Patria'],
wom:['Международный женский день','Internationaler Frauentag','International Women’s Day','Dzień Kobiet','Dünya Kadınlar Günü','Journée internationale des femmes','Día Internacional de la Mujer'],
may:['День труда','Tag der Arbeit','Labour Day','Święto Pracy','Emek ve Dayanışma Günü','Fête du Travail','Día del Trabajo'],
vic:['День Победы','Tag des Sieges','Victory Day','Dzień Zwycięstwa','Zafer Günü','Jour de la Victoire','Día de la Victoria'],
rus:['День России','Russlandtag','Russia Day','Dzień Rosji','Rusya Günü','Jour de la Russie','Día de Rusia'],
uni:['День народного единства','Tag der Einheit des Volkes','Unity Day','Dzień Jedności Narodowej','Ulusal Birlik Günü','Jour de l’unité nationale','Día de la Unidad Nacional'],
gf:['Страстная пятница','Karfreitag','Good Friday','Wielki Piątek','Kutsal Cuma','Vendredi saint','Viernes Santo'],
es:['Пасха','Ostersonntag','Easter Sunday','Wielkanoc','Paskalya','Pâques','Domingo de Pascua'],
em:['Пасхальный понедельник','Ostermontag','Easter Monday','Poniedziałek Wielkanocny','Paskalya Pazartesi','Lundi de Pâques','Lunes de Pascua'],
asc:['Вознесение','Christi Himmelfahrt','Ascension Day','Wniebowstąpienie','Göğe Yükseliş','Ascension','Ascensión'],
pen:['Троица (Пятидесятница)','Pfingstsonntag','Pentecost','Zielone Świątki','Pentekost','Pentecôte','Pentecostés'],
wm:['Духов день','Pfingstmontag','Whit Monday','Poniedziałek Zielonych Świątek','Pentekost Pazartesi','Lundi de Pentecôte','Lunes de Pentecostés'],
cc:['Праздник Тела и Крови Христовых','Fronleichnam','Corpus Christi','Boże Ciało','Kutsal Beden Bayramı','Fête-Dieu','Corpus Christi'],
deu:['День германского единства','Tag der Deutschen Einheit','German Unity Day','Dzień Jedności Niemiec','Alman Birliği Günü','Jour de l’unité allemande','Día de la Unidad Alemana'],
x24:['Сочельник','Heiligabend','Christmas Eve','Wigilia','Noel Arifesi','Réveillon de Noël','Nochebuena'],
x25:['Рождество','1. Weihnachtstag','Christmas Day','Boże Narodzenie','Noel','Noël','Navidad'],
x26:['Второй день Рождества','2. Weihnachtstag','Second Day of Christmas','Drugi dzień Bożego Narodzenia','Noel’in ikinci günü','Saint-Étienne','San Esteban'],
epi:['Богоявление (Три короля)','Heilige Drei Könige','Epiphany','Trzech Króli','Epifani','Épiphanie','Epifanía (Reyes)'],
pl3:['День Конституции 3 мая','Tag der Verfassung vom 3. Mai','Constitution Day (3 May)','Święto Konstytucji 3 Maja','3 Mayıs Anayasa Günü','Fête de la Constitution du 3 mai','Día de la Constitución del 3 de mayo'],
ass:['Успение Богородицы','Mariä Himmelfahrt','Assumption Day','Wniebowzięcie NMP','Meryem’in Göğe Kabulü','Assomption','Asunción'],
all:['День всех святых','Allerheiligen','All Saints’ Day','Wszystkich Świętych','Azizler Günü','Toussaint','Todos los Santos'],
pli:['День независимости','Unabhängigkeitstag','Independence Day','Narodowe Święto Niepodległości','Bağımsızlık Günü','Fête de l’indépendance','Día de la Independencia'],
arm:['Перемирие 1918 года','Waffenstillstand 1918','Armistice Day','Rozejm 1918','1918 Ateşkesi','Armistice 1918','Armisticio de 1918'],
fr8:['День Победы 1945','Tag des Sieges 1945','Victory in Europe Day','Dzień Zwycięstwa 1945','1945 Zafer Günü','Victoire 1945','Día de la Victoria 1945'],
bas:['Национальный праздник Франции','Französischer Nationalfeiertag','Bastille Day','Święto Narodowe Francji','Fransa Ulusal Günü','Fête nationale','Fiesta Nacional de Francia'],
his:['Национальный праздник Испании','Spanischer Nationalfeiertag','Spain’s National Day','Święto Narodowe Hiszpanii','İspanya Ulusal Günü','Fête nationale espagnole','Fiesta Nacional de España'],
esc:['День Конституции','Tag der Verfassung','Constitution Day','Dzień Konstytucji','Anayasa Günü','Jour de la Constitution','Día de la Constitución'],
imm:['Непорочное зачатие','Mariä Empfängnis','Immaculate Conception','Niepokalane Poczęcie','Lekesiz Gebelik','Immaculée Conception','Inmaculada Concepción'],
t23:['День национального суверенитета и детей','Tag der nationalen Souveränität und des Kindes','National Sovereignty and Children’s Day','Święto Suwerenności Narodowej i Dziecka','Ulusal Egemenlik ve Çocuk Bayramı','Fête de la souveraineté nationale et des enfants','Día de la Soberanía Nacional y del Niño'],
t19:['День памяти Ататюрка, молодёжи и спорта','Gedenktag an Atatürk, Tag der Jugend und des Sports','Commemoration of Atatürk, Youth and Sports Day','Dzień Pamięci Atatürka, Młodzieży i Sportu','Atatürk’ü Anma, Gençlik ve Spor Bayramı','Commémoration d’Atatürk, de la jeunesse et des sports','Conmemoración de Atatürk, Juventud y Deportes'],
t15:['День демократии и национального единства','Tag der Demokratie und der nationalen Einheit','Democracy and National Unity Day','Dzień Demokracji i Jedności Narodowej','Demokrasi ve Millî Birlik Günü','Jour de la démocratie et de l’unité nationale','Día de la Democracia y la Unidad Nacional'],
t30:['День Победы (30 августа)','Siegestag (30. August)','Victory Day (30 August)','Dzień Zwycięstwa (30 sierpnia)','Zafer Bayramı','Jour de la Victoire (30 août)','Día de la Victoria (30 de agosto)'],
t29:['День Республики','Tag der Republik','Republic Day','Święto Republiki','Cumhuriyet Bayramı','Fête de la République','Día de la República'],
tra:['Рамазан-байрам','Ramadanfest (Ramazan Bayramı)','Ramadan Feast','Święto Ramadanu','Ramazan Bayramı','Fête de la fin du Ramadan','Fiesta del fin del Ramadán'],
tku:['Курбан-байрам','Opferfest (Kurban Bayramı)','Feast of Sacrifice','Święto Ofiarowania','Kurban Bayramı','Fête du Sacrifice','Fiesta del Sacrificio'],
eo:['Пасха (православная)','Orthodoxes Ostern','Orthodox Easter','Prawosławna Wielkanoc','Ortodoks Paskalyası','Pâques orthodoxes','Pascua ortodoxa'],
to:['Троица (православная)','Orthodoxes Pfingsten','Orthodox Pentecost','Prawosławna Pięćdziesiątnica','Ortodoks Pentekostu','Pentecôte orthodoxe','Pentecostés ortodoxa'],
uar:['День памяти и победы над нацизмом','Tag der Erinnerung und des Sieges über den Nationalsozialismus','Day of Remembrance and Victory over Nazism','Dzień Pamięci i Zwycięstwa nad nazizmem','Nazizme Karşı Anma ve Zafer Günü','Jour du souvenir et de la victoire sur le nazisme','Día del Recuerdo y la Victoria sobre el Nazismo'],
uac:['День Конституции Украины','Verfassungstag der Ukraine','Constitution Day of Ukraine','Dzień Konstytucji Ukrainy','Ukrayna Anayasa Günü','Jour de la Constitution ukrainienne','Día de la Constitución de Ucrania'],
uas:['День украинской государственности','Tag der ukrainischen Staatlichkeit','Ukrainian Statehood Day','Dzień Państwowości Ukrainy','Ukrayna Devletlik Günü','Jour de l’État ukrainien','Día de la Estatalidad Ucraniana'],
uai:['День независимости Украины','Unabhängigkeitstag der Ukraine','Independence Day of Ukraine','Dzień Niepodległości Ukrainy','Ukrayna Bağımsızlık Günü','Fête de l’indépendance de l’Ukraine','Día de la Independencia de Ucrania'],
uad:['День защитников и защитниц Украины','Tag der Verteidiger der Ukraine','Defenders Day of Ukraine','Dzień Obrońców Ukrainy','Ukrayna Savunucuları Günü','Jour des défenseurs de l’Ukraine','Día de los Defensores de Ucrania']};
const cv5SH={
de:[[[1,1],'ny'],[['E',-2],'gf'],[['E',1],'em'],[[5,1],'may'],[['E',39],'asc'],[['E',50],'wm'],[[10,3],'deu'],[[12,25],'x25'],[[12,26],'x26']],
ru:[[[1,1],'ny'],[[1,2],'nyh'],[[1,3],'nyh'],[[1,4],'nyh'],[[1,5],'nyh'],[[1,6],'nyh'],[[1,7],'xo'],[[1,8],'nyh'],[[2,23],'def'],[[3,8],'wom'],[[5,1],'may'],[[5,9],'vic'],[[6,12],'rus'],[[11,4],'uni']],
ua:[[[1,1],'ny'],[[3,8],'wom'],[['O',0],'eo'],[[5,1],'may'],[[5,8],'uar'],[['O',49],'to'],[[6,28],'uac'],[[7,15],'uas'],[[8,24],'uai'],[[10,1],'uad'],[[12,25],'x25']],
pl:[[[1,1],'ny'],[[1,6],'epi'],[['E',0],'es'],[['E',1],'em'],[[5,1],'may'],[[5,3],'pl3'],[['E',49],'pen'],[['E',60],'cc'],[[8,15],'ass'],[[11,1],'all'],[[11,11],'pli'],[[12,24],'x24',2025],[[12,25],'x25'],[[12,26],'x26']],
tr:[[[1,1],'ny'],[[4,23],'t23'],[[5,1],'may'],[[5,19],'t19'],[[7,15],'t15'],[[8,30],'t30'],[[10,29],'t29']],
fr:[[[1,1],'ny'],[['E',1],'em'],[[5,1],'may'],[[5,8],'fr8'],[['E',39],'asc'],[['E',50],'wm'],[[7,14],'bas'],[[8,15],'ass'],[[11,1],'all'],[[11,11],'arm'],[[12,25],'x25']],
es:[[[1,1],'ny'],[[1,6],'epi'],[['E',-2],'gf'],[[5,1],'may'],[[8,15],'ass'],[[10,12],'his'],[[11,1],'all'],[[12,6],'esc'],[[12,8],'imm'],[[12,25],'x25']]};
const cv5ctry=()=>{const c=cv5C();if(c.ctry)return c.ctry;try{const e=nc.find(q=>q[0]===(g.city||'frankfurt'));if(e)return e[4]}catch{}return({ru:'ru',de:'de',pl:'pl',tr:'tr',fr:'fr',es:'es'})[g.lang]||'de'};
const cv5SC={};
function cv5state(y){const ct=cv5ctry(),key=ct+y;if(cv5SC[key])return cv5SC[key];const o={},L=cv5SH[ct]||[];
 L.forEach(([r,k,from])=>{if(from&&y<from)return;const d=cv5rule(r,y),kk=x(d);(o[kk]=o[kk]||[]).push({r:'S',t:cv5SN[k]})});
 if(ct==='tr'){const y0=cv5toI(cv5RD(new Date(y,0,1))).y;for(let hy=y0-1;hy<=y0+1;hy++){[[10,1,3,'tra'],[12,10,4,'tku']].forEach(([mo,da,n,k])=>{for(let j=0;j<n;j++){const d=cv5D(cv5fromI(hy,mo,da)+j);if(d.getFullYear()!==y)continue;const kk=x(d);(o[kk]=o[kk]||[]).push({r:'S',t:cv5SN[k].map(s=>s+(j?' · '+(j+1):'')),ap:1})}})}}
 return cv5SC[key]=o}
/* ---------- Sky ---------- */
const cv5AN={
e0:['Весеннее равноденствие','Frühlings-Tagundnachtgleiche','Spring equinox','Równonoc wiosenna','İlkbahar ekinoksu','Équinoxe de printemps','Equinoccio de primavera'],
s0:['Летнее солнцестояние','Sommersonnenwende','Summer solstice','Przesilenie letnie','Yaz gündönümü','Solstice d’été','Solsticio de verano'],
e1:['Осеннее равноденствие','Herbst-Tagundnachtgleiche','Autumn equinox','Równonoc jesienna','Sonbahar ekinoksu','Équinoxe d’automne','Equinoccio de otoño'],
s1:['Зимнее солнцестояние','Wintersonnenwende','Winter solstice','Przesilenie zimowe','Kış gündönümü','Solstice d’hiver','Solsticio de invierno'],
nm:['Новолуние','Neumond','New moon','Nów','Yeni ay','Nouvelle lune','Luna nueva'],
fm:['Полнолуние','Vollmond','Full moon','Pełnia','Dolunay','Pleine lune','Luna llena'],
met:['Метеорный поток %n — пик','Meteorstrom %n – Maximum','%n meteor shower – peak','Rój %n – maksimum','%n meteor yağmuru – zirve','Pluie des %n – pic','Lluvia de las %n – máximo'],
sT:['Полное солнечное затмение','Totale Sonnenfinsternis','Total solar eclipse','Całkowite zaćmienie Słońca','Tam güneş tutulması','Éclipse totale de Soleil','Eclipse total de Sol'],
sA:['Кольцеобразное солнечное затмение','Ringförmige Sonnenfinsternis','Annular solar eclipse','Obrączkowe zaćmienie Słońca','Halkalı güneş tutulması','Éclipse annulaire de Soleil','Eclipse anular de Sol'],
lT:['Полное лунное затмение','Totale Mondfinsternis','Total lunar eclipse','Całkowite zaćmienie Księżyca','Tam ay tutulması','Éclipse totale de Lune','Eclipse total de Luna'],
lP:['Частное лунное затмение','Partielle Mondfinsternis','Partial lunar eclipse','Częściowe zaćmienie Księżyca','Parçalı ay tutulması','Éclipse partielle de Lune','Eclipse parcial de Luna'],
lN:['Полутеневое лунное затмение','Halbschatten-Mondfinsternis','Penumbral lunar eclipse','Półcieniowe zaćmienie Księżyca','Yarı gölgeli ay tutulması','Éclipse pénombrale de Lune','Eclipse penumbral de Luna'],
vis:['видно не везде','nicht überall sichtbar','not visible everywhere','widoczne nie wszędzie','her yerden görünmez','visible pas partout','no visible en todas partes']};
const cv5MET=[[1,3,['Квадрантиды','Quadrantiden','Quadrantid','Kwadrantydy','Kuadrantid','Quadrantides','Cuadrántidas']],[4,22,['Лириды','Lyriden','Lyrid','Lirydy','Lirid','Lyrides','Líridas']],[5,6,['Эта-Аквариды','Eta-Aquariiden','Eta Aquariid','Eta Akwarydy','Eta Akuarid','Êta Aquarides','Eta Acuáridas']],[8,12,['Персеиды','Perseiden','Perseid','Perseidy','Perseid','Perséides','Perseidas']],[10,21,['Ориониды','Orioniden','Orionid','Orionidy','Orionid','Orionides','Oriónidas']],[11,17,['Леониды','Leoniden','Leonid','Leonidy','Leonid','Léonides','Leónidas']],[12,14,['Геминиды','Geminiden','Geminid','Geminidy','Geminid','Géminides','Gemínidas']]];
const cv5ECL=[['2026-02-17','sA'],['2026-03-03','lT'],['2026-08-12','sT'],['2026-08-28','lP'],['2027-02-06','sA'],['2027-02-20','lN'],['2027-07-18','lN'],['2027-08-02','sT'],['2027-08-17','lN'],['2028-01-12','lP'],['2028-01-26','sA'],['2028-07-06','lP'],['2028-07-22','sT'],['2028-12-31','lT']];
function cv5seasons(y){const Y=(y-2000)/1000,J=[2451623.80984+365242.37404*Y+.05169*Y*Y-.00411*Y**3-.00057*Y**4,2451716.56767+365241.62603*Y+.00325*Y*Y+.00888*Y**3-.0003*Y**4,2451810.21715+365242.01767*Y-.11575*Y*Y+.00337*Y**3+.00078*Y**4,2451900.05952+365242.74049*Y-.06223*Y*Y-.00823*Y**3+.00032*Y**4];return J.map(j=>new Date((j-2440587.5)*864e5))}
const cv5AC={};
function cv5sky(y){const lat=(cv5city()||[0,50])[1],key=y+(lat<0?'s':'n');if(cv5AC[key])return cv5AC[key];const o={},put=(d,t,k)=>{const kk=x(d);(o[kk]=o[kk]||[]).push({r:'A',t,k})};
 const S=cv5seasons(y),nm=lat<0?['e1','s1','e0','s0']:['e0','s0','e1','s1'];S.forEach((d,j)=>put(d,cv5AN[nm[j]],'sea'));
 try{Cx(new Date(y,0,1),new Date(y+1,0,1)).forEach(q=>put(q.d,cv5AN[q.full?'fm':'nm'],q.full?'fm':'nm'))}catch{}
 cv5MET.forEach(([mo,da,n])=>put(new Date(y,mo-1,da),cv5AN.met.map((s,j)=>s.replace('%n',n[j])),'met'));
 cv5ECL.forEach(([d,k])=>{if(+d.slice(0,4)===y)put(se(d),cv5AN[k].map((s,j)=>s+' · '+cv5AN.vis[j]),'ecl')});return cv5AC[key]=o}
/* ---------- place, sun, prayer ---------- */
function cv5city(){try{return nc.find(q=>q[0]===(g.city||'frankfurt'))||nc[0]}catch{return null}}
const cv5tm=(d,tz)=>{if(!d||isNaN(d))return'';try{return d.toLocaleTimeString(he(),{hour:'2-digit',minute:'2-digit',timeZone:tz})}catch{return Gs(d.getHours())+':'+Gs(d.getMinutes())}};
function cv5sun(d){const c=cv5city();if(!c)return null;try{const r=pg(new Date(d.getFullYear(),d.getMonth(),d.getDate(),12),c[1],c[2]);return r?{rise:r.rise,set:r.set,tz:c[5]}:{polar:1,tz:c[5]}}catch{return null}}
const cv5METH={mwl:[18,17,0,0],isna:[15,15,0,0],egypt:[19.5,17.5,0,0],umm:[18.5,0,90,0],diyanet:[18,17,0,0],jafari:[16,14,0,4]};
function cv5pray(d){const c=cv5city();if(!c)return null;const C=cv5C(),mt=cv5METH[C.meth]?C.meth:(C.isl==='shia'?'jafari':cv5ctry()==='tr'?'diyanet':'mwl'),M=cv5METH[mt],asf=C.asr==='h'?2:1;
 const R=Math.PI/180,lat=c[1],lng=c[2],jd0=Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5+2440587.5-lng/360;
 const sp=t=>{const D=jd0+t-2451545,g0=(357.529+.98560028*D)*R,q=280.459+.98564736*D,L=(q+1.915*Math.sin(g0)+.02*Math.sin(2*g0))*R,e=(23.439-36e-8*D)*R,RA=Math.atan2(Math.cos(e)*Math.sin(L),Math.cos(L))/R/15,dec=Math.asin(Math.sin(e)*Math.sin(L));let eq=q/15-((RA%24)+24)%24;eq=((eq+12)%24+24)%24-12;return{dec,eq}};
 const noon=t=>12-sp(t/24).eq;const T=(ang,t)=>{const{dec}=sp(t/24);const v=(-Math.sin(ang*R)-Math.sin(dec)*Math.sin(lat*R))/(Math.cos(dec)*Math.cos(lat*R));return v<-1||v>1?NaN:Math.acos(v)/R/15};
 const asrA=t=>{const{dec}=sp(t/24);return-Math.atan(1/(asf+Math.tan(Math.abs(lat*R-dec))))/R};
 const nn=noon(12),rise=nn-T(.833,6),set=nn+T(.833,18);let fajr=nn-T(M[0],5),isha=M[2]?set+M[2]/60:nn+T(M[1],18),magh=M[3]?nn+T(M[3],18):set,asr=nn+T(asrA(15),15);
 const night=24-(set-rise);if(!(rise-fajr<=night*M[0]/60))fajr=rise-night*M[0]/60;if(!M[2]&&!(isha-set<=night*M[1]/60))isha=set+night*M[1]/60;
 const U=h=>isNaN(h)?null:new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())+(h-lng/15)*36e5);
 const dh=mt==='diyanet'?6/60:1/60;return{tz:c[5],meth:mt,t:[['fajr',U(fajr)],['sun',U(rise)],['dhuhr',U(nn+dh)],['asr',U(asr)],['maghrib',U(magh+(mt==='diyanet'?7/60:0))],['isha',U(isha)]]}}
function cv5shab(d){const c=cv5city();if(!c)return null;const w=d.getDay();if(w!==5&&w!==6)return null;const s=cv5sun(d);if(!s||!s.set)return null;const mins=+cv5C().cnd||18;
 if(w===5)return{k:'c',at:new Date(s.set-mins*6e4),tz:s.tz};const R=Math.PI/180,lat=c[1];/* nightfall: sun 8.5° below horizon ≈ sunset + extra */
 const dec=Math.asin(Math.sin(23.44*R)*Math.sin((((d-new Date(d.getFullYear(),2,20))/864e5)*360/365.24)*R)),h=a=>{const v=(-Math.sin(a*R)-Math.sin(dec)*Math.sin(lat*R))/(Math.cos(dec)*Math.cos(lat*R));return v<-1||v>1?NaN:Math.acos(v)/R/15};
 const extra=(h(8.5)-h(.833))*60;return{k:'h',at:new Date(+s.set+(isNaN(extra)?50:extra)*6e4),tz:s.tz}}
/* ---------- faith for a day ---------- */
const cv5$m=$m;
const cv5Y={};
function cv5yr(fn,y,f){const k=f+y;return cv5Y[k]||(cv5Y[k]=fn(y))}
function cv5faith(d){const c=cv5C(),f=c.done?c.faith:'legacy',y=d.getFullYear(),k=x(d);let L=[];
 if(f==='legacy')return cv5$m(d).map(o=>({r:o.r,n:o.n}));
 if(f==='chr'){if(c.conf==='cath')L=cv5$m(d).map(o=>({r:o.r,n:o.n,fast:!1}));else if(c.conf==='prot')L=(cv5yr(cv5prot,y,'p')[k]||[]).slice();else{L=(cv5yr(cv5orth,y,'o')[k]||[]).slice();if(cv5on('fast')&&c.wfast!==!1&&cv5orthWeek(d)&&!cv5pers(d).some(p=>p.fast))L.push({r:'W',t:cv5FN.wd,fast:!0})}}
 else if(f==='isl')L=(cv5yr(cv5isl,y,'i'+cv5hadj()+(c.isl||''))[k]||[]).slice();
 else if(f==='jud')L=(cv5jew(y)[k]||[]).slice();
 if(!cv5on('saints'))L=L.filter(o=>o.r!=='G');if(!cv5on('fast'))L=L.filter(o=>o.r!=='W');return L}
function cv5pers(d){const c=cv5C(),f=c.done?c.faith:'',y=d.getFullYear(),k=x(d);if(!cv5on('fast'))return[];let P=[];
 if(f==='chr')P=c.conf==='orth'?cv5orthPer(y):cv5westPer(y,c.conf==='prot');else if(f==='isl')P=cv5islPer(y);return P.filter(p=>k>=x(p.a)&&k<=x(p.b))}
const cv5ti=o=>o.t?cv5n(o.t):(()=>{try{return By(o)}catch{return''}})();
$m=function(d){const c=cv5C();if(!c.done)return cv5$m(d);if(!cv5on('faith'))return[];try{return cv5faith(d).filter(o=>o.r!=='W').map(o=>o.n?{r:o.r==='G'?'G':o.r,n:o.n}:{r:o.r==='G'?'G':o.r,n:[o.t[1],o.t[0],cv5n(o.t)]})}catch{return[]}};

try{if(location.port==='8766')window.__cv5={cv5orthEaster,cv5jew,cv5isl,cv5toH,cv5hij,cv5pray,cv5state,cv5sky,cv5orth,cv5prot,cv5C,cv5faith,cv5pers,cv5shab,cv5seasons,cv5fromH}}catch{}
/* v199: personal calendar — screens and setup */
const cv5T={
title:['Календарь','Kalender','Calendar','Kalendarz','Takvim','Calendrier','Calendario'],
v_day:['День','Tag','Day','Dzień','Gün','Jour','Día'],v_week:['Неделя','Woche','Week','Tydzień','Hafta','Semaine','Semana'],v_month:['Месяц','Monat','Month','Miesiąc','Ay','Mois','Mes'],v_year:['Год','Jahr','Year','Rok','Yıl','Année','Año'],v_list:['Список','Liste','List','Lista','Liste','Liste','Lista'],
today:['Сегодня','Heute','Today','Dziś','Bugün','Aujourd’hui','Hoy'],tomorrow:['Завтра','Morgen','Tomorrow','Jutro','Yarın','Demain','Mañana'],
step:['Шаг %a из %b','Schritt %a von %b','Step %a of %b','Krok %a z %b','Adım %a / %b','Étape %a sur %b','Paso %a de %b'],
next:['Далее','Weiter','Next','Dalej','İleri','Suivant','Siguiente'],back:['Назад','Zurück','Back','Wstecz','Geri','Retour','Atrás'],
s1:['Регион','Region','Region','Region','Bölge','Région','Región'],
s1s:['Страна нужна для государственных праздников, город — для восхода, заката и времени молитв.','Das Land bestimmt die Feiertage, die Stadt Sonnenauf- und -untergang und Gebetszeiten.','The country sets the public holidays, the city sets sunrise, sunset and prayer times.','Kraj określa święta państwowe, miasto — wschód, zachód i godziny modlitw.','Ülke resmî tatilleri, şehir gün doğumu, gün batımı ve namaz vakitlerini belirler.','Le pays définit les jours fériés, la ville le lever, le coucher et les heures de prière.','El país fija los festivos; la ciudad, la salida y puesta del sol y las horas de oración.'],
country:['Страна','Land','Country','Kraj','Ülke','Pays','País'],city:['Город','Stadt','City','Miasto','Şehir','Ville','Ciudad'],
langL:['Язык приложения меняется в профиле.','Die App-Sprache ändern Sie im Profil.','The app language is changed in the profile.','Język aplikacji zmienisz w profilu.','Uygulama dili profilden değiştirilir.','La langue de l’application se change dans le profil.','El idioma de la aplicación se cambia en el perfil.'],
noHol:['Государственных праздников этой страны у меня пока нет — всё остальное работает.','Für dieses Land habe ich noch keine Feiertage – alles andere funktioniert.','I don’t have this country’s public holidays yet — everything else works.','Nie mam jeszcze świąt tego kraju — reszta działa.','Bu ülkenin resmî tatilleri henüz yok — gerisi çalışıyor.','Je n’ai pas encore les jours fériés de ce pays — le reste fonctionne.','Aún no tengo los festivos de este país; lo demás funciona.'],
s2:['Ваша вера и традиция','Ihr Glaube und Ihre Tradition','Your faith and tradition','Twoja wiara i tradycja','İnancınız ve geleneğiniz','Votre foi et votre tradition','Su fe y su tradición'],
s2s:['Календарь покажет только её праздники и посты. Других вер Вы не увидите.','Der Kalender zeigt nur ihre Feste und Fastenzeiten – keine anderen Religionen.','The calendar shows only its feasts and fasts — no other religions.','Kalendarz pokaże tylko jej święta i posty — żadnych innych religii.','Takvim yalnızca onun bayramlarını ve oruçlarını gösterir — başka din yok.','Le calendrier n’affiche que ses fêtes et jeûnes — aucune autre religion.','El calendario solo muestra sus fiestas y ayunos, ninguna otra religión.'],
f_none:['Без религии','Ohne Religion','No religion','Bez religii','Dinsiz','Sans religion','Sin religión'],f_noneS:['праздники страны, Луна, Солнце','Feiertage, Mond, Sonne','public holidays, Moon, Sun','święta, Księżyc, Słońce','resmî tatiller, Ay, Güneş','jours fériés, Lune, Soleil','festivos, Luna, Sol'],
f_chr:['Христианство','Christentum','Christianity','Chrześcijaństwo','Hristiyanlık','Christianisme','Cristianismo'],f_chrS:['праздники, посты, святые','Feste, Fastenzeiten, Heilige','feasts, fasts, saints','święta, posty, święci','bayramlar, oruçlar, azizler','fêtes, jeûnes, saints','fiestas, ayunos, santos'],
f_isl:['Ислам','Islam','Islam','Islam','İslam','Islam','Islam'],f_islS:['намаз, Рамадан, хиджра','Gebetszeiten, Ramadan, Hidschra','prayer times, Ramadan, Hijri','modlitwy, Ramadan, hidżra','namaz vakitleri, Ramazan, Hicrî takvim','prières, Ramadan, hégire','oraciones, Ramadán, hégira'],
f_jud:['Иудаизм','Judentum','Judaism','Judaizm','Yahudilik','Judaïsme','Judaísmo'],f_judS:['Шаббат, праздники, еврейский календарь','Schabbat, Feiertage, jüdischer Kalender','Shabbat, holidays, Hebrew calendar','Szabat, święta, kalendarz żydowski','Şabat, bayramlar, İbrani takvimi','Chabbat, fêtes, calendrier hébraïque','Shabat, fiestas, calendario hebreo'],
dir:['Направление','Richtung','Tradition','Wyznanie','Mezhep','Confession','Confesión'],
c_orth:['Православие','Orthodox','Orthodox','Prawosławie','Ortodoks','Orthodoxe','Ortodoxa'],c_cath:['Католицизм','Katholisch','Catholic','Katolicyzm','Katolik','Catholique','Católica'],c_prot:['Протестантизм','Evangelisch','Protestant','Protestantyzm','Protestan','Protestante','Protestante'],
i_sun:['Суннизм','Sunnitisch','Sunni','Sunnizm','Sünni','Sunnite','Suní'],i_shia:['Шиизм','Schiitisch','Shia','Szyizm','Şii','Chiite','Chií'],
s3:['Что показывать','Was angezeigt wird','What to show','Co pokazywać','Neler gösterilsin','Ce qui s’affiche','Qué mostrar'],
o_hol:['Государственные праздники','Gesetzliche Feiertage','Public holidays','Święta państwowe','Resmî tatiller','Jours fériés','Festivos oficiales'],
o_faith:['Праздники моей веры','Feste meines Glaubens','Feasts of my faith','Święta mojej wiary','İnancımın bayramları','Fêtes de ma foi','Fiestas de mi fe'],
o_fast:['Посты','Fastenzeiten','Fasts','Posty','Oruçlar','Jeûnes','Ayunos'],
o_saints:['Дни памяти святых','Gedenktage der Heiligen','Saints’ days','Wspomnienia świętych','Azizleri anma günleri','Fêtes des saints','Días de los santos'],
o_pray:['Время намаза','Gebetszeiten','Prayer times','Godziny modlitw','Namaz vakitleri','Heures de prière','Horas de oración'],
o_shab:['Шаббат: свечи и авдала','Schabbat: Kerzen und Hawdala','Shabbat: candles and havdalah','Szabat: świece i hawdala','Şabat: mumlar ve havdala','Chabbat : bougies et havdala','Shabat: velas y havdalá'],
o_moon:['Луна: фазы и лунные сутки','Mond: Phasen und Mondtag','Moon: phases and lunar day','Księżyc: fazy i doba księżycowa','Ay: evreler ve ay günü','Lune : phases et jour lunaire','Luna: fases y día lunar'],
o_sun:['Солнце: восход, закат, долгота дня','Sonne: Auf- und Untergang, Tageslänge','Sun: sunrise, sunset, day length','Słońce: wschód, zachód, długość dnia','Güneş: doğuş, batış, gün uzunluğu','Soleil : lever, coucher, durée du jour','Sol: salida, puesta, duración del día'],
o_astro:['Небо: равноденствия, затмения, метеоры','Himmel: Tagundnachtgleichen, Finsternisse, Meteore','Sky: equinoxes, eclipses, meteors','Niebo: równonoce, zaćmienia, meteory','Gökyüzü: ekinokslar, tutulmalar, meteorlar','Ciel : équinoxes, éclipses, météores','Cielo: equinoccios, eclipses, meteoros'],
s4:['Личные настройки','Persönliche Einstellungen','Personal settings','Ustawienia osobiste','Kişisel ayarlar','Réglages personnels','Ajustes personales'],
meth:['Метод расчёта намаза','Berechnungsmethode','Calculation method','Metoda obliczeń','Hesaplama yöntemi','Méthode de calcul','Método de cálculo'],
asr:['Время аср','Asr-Zeit','Asr time','Pora asr','İkindi vakti','Heure d’asr','Hora del asr'],
asrS:['шафиитский, маликитский, ханбалитский','schafiitisch, malikitisch, hanbalitisch','Shafi’i, Maliki, Hanbali','szafi’icki, malikicki, hanbalicki','Şafii, Maliki, Hanbeli','chaféite, malékite, hanbalite','shafi’í, malikí, hanbalí'],asrH:['ханафитский','hanafitisch','Hanafi','hanaficki','Hanefi','hanafite','hanafí'],
hadj:['Сдвиг календаря хиджры','Verschiebung des Hidschra-Kalenders','Hijri calendar shift','Przesunięcie kalendarza hidżry','Hicrî takvim kaydırma','Décalage du calendrier hégirien','Ajuste del calendario de la hégira'],
hadjS:['Если в Вашей общине месяц начался на день раньше или позже','Falls der Monat in Ihrer Gemeinde einen Tag früher oder später begann','If the month began a day earlier or later in your community','Jeśli w Twojej wspólnocie miesiąc zaczął się dzień wcześniej lub później','Cemaatinizde ay bir gün önce ya da sonra başladıysa','Si le mois a commencé un jour plus tôt ou plus tard dans votre communauté','Si en su comunidad el mes empezó un día antes o después'],
wfast:['Постные среда и пятница','Fasttage Mittwoch und Freitag','Wednesday and Friday fasts','Post w środy i piątki','Çarşamba ve cuma oruçları','Jeûne du mercredi et du vendredi','Ayuno de miércoles y viernes'],
cnd:['Свечи Шаббата — за сколько минут до заката','Schabbatkerzen – Minuten vor Sonnenuntergang','Shabbat candles — minutes before sunset','Świece szabatowe — minut przed zachodem','Şabat mumları — gün batımından kaç dakika önce','Bougies du Chabbat — minutes avant le coucher','Velas de Shabat: minutos antes de la puesta'],
mine:['Мои праздники','Meine Festtage','My own days','Moje święta','Benim günlerim','Mes fêtes','Mis fiestas'],
mineS:['Свои даты, которые повторяются каждый год: кнопка «+» в календаре, галочка «каждый год».','Eigene jährliche Daten: „+“ im Kalender, Häkchen „jedes Jahr“.','Your own yearly dates: “+” in the calendar, tick “every year”.','Własne coroczne daty: „+” w kalendarzu, zaznacz „co roku”.','Kendi yıllık tarihleriniz: takvimde “+”, “her yıl” işareti.','Vos dates annuelles : « + » dans le calendrier, cochez « chaque année ».','Sus fechas anuales: «+» en el calendario, marque «cada año».'],
addMine:['Добавить свой праздник','Eigenen Festtag eintragen','Add my own day','Dodaj własne święto','Kendi günümü ekle','Ajouter ma fête','Añadir mi fiesta'],
s5:['Ваш календарь готов','Ihr Kalender ist bereit','Your calendar is ready','Twój kalendarz jest gotowy','Takviminiz hazır','Votre calendrier est prêt','Su calendario está listo'],
goCal:['Перейти в календарь','Zum Kalender','Open the calendar','Przejdź do kalendarza','Takvime git','Aller au calendrier','Ir al calendario'],
priv:['🔒 Ваш выбор хранится только на этом телефоне','🔒 Ihre Auswahl bleibt nur auf diesem Telefon','🔒 Your choice is stored only on this phone','🔒 Twój wybór zostaje tylko na tym telefonie','🔒 Seçiminiz yalnızca bu telefonda saklanır','🔒 Votre choix reste uniquement sur ce téléphone','🔒 Su elección se guarda solo en este teléfono'],
sett:['Настройки календаря','Kalendereinstellungen','Calendar settings','Ustawienia kalendarza','Takvim ayarları','Réglages du calendrier','Ajustes del calendario'],
search:['Поиск','Suche','Search','Szukaj','Ara','Recherche','Buscar'],
rise:['Восход','Sonnenaufgang','Sunrise','Wschód','Gün doğumu','Lever','Salida del sol'],set:['Закат','Sonnenuntergang','Sunset','Zachód','Gün batımı','Coucher','Puesta del sol'],
dayL:['день','Tag','day','dzień','gün','jour','día'],lday:['лунные сутки','Mondtag','lunar day','doba księżyc.','ay günü','jour lunaire','día lunar'],
polar:['полярный день или ночь','Polartag oder -nacht','polar day or night','dzień lub noc polarna','kutup günü/gecesi','jour ou nuit polaire','día o noche polar'],
inD:['через %n дн.','in %n T.','in %n d','za %n dni','%n gün sonra','dans %n j','en %n d'],
going:['идёт · день %a из %b','läuft · Tag %a von %b','under way · day %a of %b','trwa · dzień %a z %b','sürüyor · %a. gün / %b','en cours · jour %a sur %b','en curso · día %a de %b'],
nextF:['Ближайший праздник','Nächstes Fest','Next feast','Najbliższe święto','Sıradaki bayram','Prochaine fête','Próxima fiesta'],
nothing:['Записей нет','Keine Einträge','No entries','Brak wpisów','Kayıt yok','Aucune entrée','Sin entradas'],
more:['ещё %n','noch %n','%n more','jeszcze %n','%n daha','encore %n','%n más'],
allDay:['весь день','ganztägig','all day','cały dzień','tüm gün','toute la journée','todo el día'],
task:['дело','Aufgabe','task','zadanie','görev','tâche','tarea'],bill:['счёт','Rechnung','bill','rachunek','fatura','facture','factura'],
fastDay:['пост','Fasten','fast','post','oruç','jeûne','ayuno'],stateH:['государственный праздник','gesetzlicher Feiertag','public holiday','święto państwowe','resmî tatil','jour férié','festivo oficial'],
r_H:['великий праздник','Hochfest','great feast','wielkie święto','büyük bayram','grande fête','gran fiesta'],r_F:['праздник','Fest','feast','święto','bayram','fête','fiesta'],r_G:['память','Gedenktag','memorial','wspomnienie','anma','mémoire','memoria'],r_A:['небо','Himmel','sky','niebo','gökyüzü','ciel','cielo'],
pr:['намаз','Gebet','prayer','modlitwa','namaz','prière','oración'],
p_fajr:['Фаджр','Fadschr','Fajr','Fadżr','İmsak','Fajr','Fajr'],p_sun:['Восход','Sonnenaufgang','Sunrise','Wschód','Güneş','Lever du soleil','Salida del sol'],p_dhuhr:['Зухр','Dhuhr','Dhuhr','Zuhr','Öğle','Dhouhr','Dhuhr'],p_asr:['Аср','Asr','Asr','Asr','İkindi','Asr','Asr'],p_maghrib:['Магриб','Maghrib','Maghrib','Maghrib','Akşam','Maghrib','Magrib'],p_isha:['Иша','Ischa','Isha','Isza','Yatsı','Icha','Isha'],
sahur:['сухур до этого времени','Sahur bis jetzt','suhur ends','sahur do tej pory','sahur bitişi','fin du suhour','fin del suhur'],iftar:['ифтар','Iftar','iftar','iftar','iftar','iftar','iftar'],
candle:['Зажигание свечей Шаббата','Schabbatkerzen anzünden','Shabbat candle lighting','Zapalenie świec szabatowych','Şabat mumlarının yakılması','Allumage des bougies du Chabbat','Encendido de velas de Shabat'],
havd:['Авдала — исход Шаббата','Hawdala – Ende des Schabbat','Havdalah — Shabbat ends','Hawdala — koniec szabatu','Havdala — Şabat’ın sonu','Havdala — fin du Chabbat','Havdalá: fin del Shabat'],
approx:['≈ дата по наблюдению Луны может отличаться на день','≈ nach Mondsichtung kann das Datum um einen Tag abweichen','≈ by moon sighting the date may differ by a day','≈ według obserwacji Księżyca data może się różnić o dzień','≈ hilal gözlemine göre tarih bir gün farklı olabilir','≈ selon l’observation de la lune, la date peut varier d’un jour','≈ según la observación de la luna, la fecha puede variar un día'],
cPray:['«%t» в %a пересекается с намазом %p в %b.','„%t“ um %a überschneidet sich mit %p um %b.','“%t” at %a overlaps %p at %b.','„%t” o %a koliduje z %p o %b.','“%t” (%a), %p vaktiyle (%b) çakışıyor.','« %t » à %a chevauche %p à %b.','«%t» a las %a coincide con %p a las %b.'],
cShab:['«%t» приходится на Шаббат.','„%t“ fällt auf den Schabbat.','“%t” falls on Shabbat.','„%t” wypada w szabat.','“%t” Şabat’a denk geliyor.','« %t » tombe pendant le Chabbat.','«%t» cae en Shabat.'],
cFast:['«%t» — в этот день %f.','„%t“ – an diesem Tag: %f.','“%t” — that day is %f.','„%t” — tego dnia: %f.','“%t” — o gün: %f.','« %t » — ce jour-là : %f.','«%t»: ese día es %f.'],
keep:['Оставить','Behalten','Keep','Zostaw','Kalsın','Garder','Mantener'],edit:['Изменить','Ändern','Edit','Zmień','Değiştir','Modifier','Cambiar'],
lF:['Вера','Glaube','Faith','Wiara','İnanç','Foi','Fe'],lS:['Праздники','Feiertage','Holidays','Święta','Tatiller','Fériés','Festivos'],lP:['Мои','Meine','Mine','Moje','Benim','Les miens','Míos'],lM:['Луна, небо','Mond, Himmel','Moon, sky','Księżyc, niebo','Ay, gökyüzü','Lune, ciel','Luna, cielo'],lB:['Счета','Rechnungen','Bills','Rachunki','Faturalar','Factures','Facturas'],
uaN:['Во время военного положения праздничные дни не переносятся.','Während des Kriegsrechts werden Feiertage nicht verschoben.','Under martial law, holidays are not moved to working days.','W czasie stanu wojennego święta nie są przenoszone.','Sıkıyönetim süresince tatiller kaydırılmaz.','Sous la loi martiale, les jours fériés ne sont pas reportés.','Bajo la ley marcial, los festivos no se trasladan.'],
trN:['Даты байрамов рассчитаны заранее (≈), точные объявляет Диянет.','Bayram-Daten sind vorausberechnet (≈); verbindlich ist die Diyanet.','Bayram dates are pre-calculated (≈); Diyanet announces the exact ones.','Daty bajramów obliczono z góry (≈); dokładne ogłasza Diyanet.','Bayram tarihleri önceden hesaplandı (≈); kesin tarihleri Diyanet açıklar.','Dates des fêtes calculées à l’avance (≈) ; la Diyanet annonce les dates exactes.','Fechas calculadas de antemano (≈); la Diyanet anuncia las exactas.'],
deN:['Показаны праздники по всей Германии; дни отдельных земель — в разделе «Законы».','Bundesweite Feiertage; Feiertage einzelner Länder finden Sie unter „Gesetze“.','Nationwide holidays; state-only days are in “Laws”.','Święta ogólnoniemieckie; święta krajów związkowych — w „Prawie”.','Almanya geneli tatiller; eyalet tatilleri “Yasalar” bölümünde.','Jours fériés nationaux ; ceux des Länder sont dans « Lois ».','Festivos nacionales; los de cada estado están en «Leyes».'],
ready:['Готово','Fertig','Done','Gotowe','Tamam','Terminé','Listo'],
m_mwl:['Всемирная исламская лига','Islamische Weltliga','Muslim World League','Liga Świata Islamskiego','Dünya İslam Birliği','Ligue islamique mondiale','Liga Mundial Islámica'],m_isna:['ISNA (Северная Америка)','ISNA (Nordamerika)','ISNA (North America)','ISNA (Ameryka Płn.)','ISNA (Kuzey Amerika)','ISNA (Amérique du Nord)','ISNA (Norteamérica)'],m_egypt:['Египетское управление','Ägyptische Behörde','Egyptian Authority','Egipski urząd','Mısır Kurumu','Autorité égyptienne','Autoridad egipcia'],m_umm:['Умм аль-Кура (Мекка)','Umm al-Qura (Mekka)','Umm al-Qura (Makkah)','Umm al-Kura (Mekka)','Ümmü’l-Kurâ (Mekke)','Umm al-Qura (La Mecque)','Umm al-Qura (La Meca)'],m_diyanet:['Диянет (Турция) ≈','Diyanet (Türkei) ≈','Diyanet (Türkiye) ≈','Diyanet (Turcja) ≈','Diyanet ≈','Diyanet (Turquie) ≈','Diyanet (Turquía) ≈'],m_jafari:['Джафари (шииты)','Dschafari (schiitisch)','Jafari (Shia)','Dżafari (szyici)','Caferî (Şii)','Jafari (chiite)','Yafarí (chií)'],
auto:['по умолчанию','automatisch','automatic','automatycznie','otomatik','automatique','automático'],
on:['вкл.','an','on','wł.','açık','activé','activado']};
const cvt=(k,o)=>{let s=cv5n(cv5T[k]||[k]);if(o)for(const p in o)s=s.split('%'+p).join(o[p]);return s};
const cv5COL={r:'#B3362E',y:'#D9A43A',b:'#4F7FD9',gr:'#3E9A62',v:'#8a6bc9'};
const cv5wd=(d,o)=>{try{return d.toLocaleDateString(he(),o)}catch{return x(d)}};
const cv5min=(d,c)=>{try{const t=Ky(c||cv5city(),d);return t.getHours()*60+t.getMinutes()}catch{return d.getHours()*60+d.getMinutes()}};
const cv5hm=s=>{const m2=/^(\d\d):(\d\d)/.exec(s||'');return m2?+m2[1]*60+ +m2[2]:null};
function cv5items(d,full){const k=x(d),y=d.getFullYear(),c=cv5C(),o=[],city=cv5city();
 if(cv5on('faith'))cv5faith(d).forEach(q=>o.push({tm:'',col:q.r==='W'?'r':'r',t:cv5ti(q),s:(q.r==='W'?'':cvt('r_'+(q.r==='H'||q.r==='F'||q.r==='G'?q.r:'F')))+(q.fast&&q.r!=='W'?' · '+cvt('fastDay'):'')+(q.ap?' · ≈':''),fast:!!q.fast,w:q.r==='W',r:q.r}));
 cv5pers(d).forEach(p=>{const n=Math.round((d-p.a)/864e5)+1,N=Math.round((p.b-p.a)/864e5)+1;o.push({tm:'',col:'r',t:cv5n(p.t),s:cvt('going',{a:n,b:N})+(p.ap?' · ≈':''),per:1,fast:!!p.fast,first:n===1})});
 if(cv5on('hol'))(cv5state(y)[k]||[]).forEach(q=>o.push({tm:'',col:'y',t:cv5n(q.t),s:cvt('stateH')+(q.ap?' · ≈':''),st:1}));
 (cv5sky(y)[k]||[]).forEach(q=>{if((q.k==='nm'||q.k==='fm')?cv5on('moon'):cv5on('astro'))o.push({tm:'',col:'gr',t:cv5n(q.t),s:cvt('r_A'),sky:1})});
 try{dl(d).forEach(e=>o.push({tm:e.time||'',col:'b',t:e.title,s:Sa('ty_'+e.type)+(()=>{const a=ec(e,y);return a?' · '+a:''})(),act:'evedit',id:e.id,ev:1}))}catch{}
 (g.tasks||[]).forEach(t=>{if(!t.done&&t.due===k)o.push({tm:t.time||'',col:'b',t:t.t,s:cvt('task'),act:'tedit',id:t.id,ev:1})});
 try{(U().bills||[]).forEach(b=>{if(!b.done&&b.next===k)o.push({tm:'',col:'v',t:b.name,s:cvt('bill'),go:'fin'})})}catch{}
 if(full){const tz=city&&city[5];
  if(cv5on('sun')){const s=cv5sun(d);if(s&&s.rise){o.push({tm:cv5tm(s.rise,tz),mn:cv5min(s.rise),col:'y',t:'☀ '+cvt('rise'),sm:1});o.push({tm:cv5tm(s.set,tz),mn:cv5min(s.set),col:'y',t:'☾ '+cvt('set'),sm:1})}}
  if(c.done&&c.faith==='isl'&&cv5on('pray')){const P=cv5pray(d),ram=cv5pers(d).some(p=>p.k==='rm');P&&P.t.forEach(([kk,dt])=>{if(kk==='sun'||!dt)return;o.push({tm:cv5tm(dt,P.tz),mn:cv5min(dt),col:'gr',t:cvt('p_'+kk),s:cvt('pr')+(ram&&kk==='fajr'?' · '+cvt('sahur'):ram&&kk==='maghrib'?' · '+cvt('iftar'):''),pray:kk,at:dt})})}
  if(c.done&&c.faith==='jud'&&cv5on('shab')){const s=cv5shab(d);s&&o.push({tm:cv5tm(s.at,s.tz),mn:cv5min(s.at),col:'r',t:cvt(s.k==='c'?'candle':'havd'),s:cv5n(cv5JN.sh),shab:s})}}
 o.forEach(q=>{if(q.mn==null)q.mn=q.tm?cv5hm(q.tm):-1});return o.sort((a,b)=>a.mn-b.mn)}
function cv5conf(d,items){const c=cv5C();if(!c.done||x(d)<ga(0))return[];const out=[],dis=g.dismiss||{},k=x(d);
 const evs=items.filter(q=>q.ev);const fast=items.find(q=>q.fast&&!q.w&&(!q.per||q.first));
 if(c.faith==='isl'){const pr=items.filter(q=>q.pray);evs.forEach(e=>{const t=cv5hm(e.tm);if(t==null)return;const p=pr.find(q=>q.mn>=t-10&&q.mn<=t+60);if(p)out.push({id:e.id,act:e.act,key:'cv5c:'+e.id+':'+k,t:cvt('cPray',{t:e.t,a:e.tm,p:p.t,b:p.tm})})})}
 else if(c.faith==='jud'){const sh=items.find(q=>q.shab);if(sh)evs.forEach(e=>{const t=cv5hm(e.tm);if(sh.shab.k==='c'&&t!=null&&t<sh.mn)return;if(sh.shab.k==='h'&&t!=null&&t>sh.mn)return;out.push({id:e.id,act:e.act,key:'cv5c:'+e.id+':'+k,t:cvt('cShab',{t:e.t})})})}
 if(fast&&c.faith!=='isl')evs.filter(e=>e.act==='evedit').forEach(e=>out.push({id:e.id,act:e.act,key:'cv5c:'+e.id+':'+k,t:cvt('cFast',{t:e.t,f:fast.t})}));
 return out.filter(q=>!dis[q.key])}
function cv5hero(d){const c=cv5C();if(!c.done||c.faith==='none'||!cv5on('faith'))return'';let h='';const cur=cv5pers(d)[0];
 if(cur){const n=Math.round((d-cur.a)/864e5)+1,N=Math.round((cur.b-cur.a)/864e5)+1;h=`<small>${i(cvt('going',{a:n,b:N}))}</small><h3>${i(cv5n(cur.t))}</h3><p>${i(cv5wd(cur.a,{day:'numeric',month:'long'}))} — ${i(cv5wd(cur.b,{day:'numeric',month:'long'}))}${cur.ap?' · ≈':''}</p><div class="cv5bar"><i style="width:${Math.round(n/N*100)}%"></i></div>`}
 else{for(let j=1;j<=60;j++){const dd=cv5add(d,j),p=cv5pers(dd).find(q=>Math.round((dd-q.a)/864e5)===0);if(p){const N=Math.round((p.b-p.a)/864e5)+1;h=`<small>${i(cvt('inD',{n:j}))}</small><h3>${i(cv5n(p.t))}</h3><p>${i(cv5wd(p.a,{day:'numeric',month:'long'}))} — ${i(cv5wd(p.b,{day:'numeric',month:'long'}))}${p.ap?' · '+i(cvt('approx')):''}</p>`;break}}}
 let nf='';for(let j=0;j<=150;j++){const dd=cv5add(d,j),f=cv5faith(dd).find(q=>q.r==='H');if(f){nf=`<p class="cv5nf">${i(cvt('nextF'))}: <b>${i(cv5ti(f))}</b> — ${i(cv5wd(dd,{day:'numeric',month:'long'}))}${j?' · '+i(cvt('inD',{n:j})):' · '+i(cvt('today'))}${f.ap?' ≈':''}</p>`;break}}
 if(!h&&!nf)return'';return`<div class="cv5hero">${h||''}${nf}</div>`}
function cv5astro(d){const c=cv5city(),tz=c&&c[5];let h='';if(cv5on('sun')){const s=cv5sun(d);if(s&&s.rise){const mn=Math.round((s.set-s.rise)/6e4);h+=`<div><b>${i(cv5tm(s.rise,tz))}</b>${i(cvt('rise'))}</div><div><b>${i(cv5tm(s.set,tz))}</b>${i(cvt('set'))}</div><div><b>${Math.floor(mn/60)}:${Gs(mn%60)}</b>${i(cvt('dayL'))}</div>`}else if(s)h+=`<div><b>—</b>${i(cvt('polar'))}</div>`}
 if(cv5on('moon')){try{const mm=mg(new Date(d.getFullYear(),d.getMonth(),d.getDate(),12));let ld=Math.floor(mm.p*29.53)+1;try{const noon=new Date(d.getFullYear(),d.getMonth(),d.getDate(),12),nw=Cx(new Date(noon-40*864e5),noon).filter(q=>!q.full).pop();if(nw)ld=Math.floor((noon-nw.d)/864e5)+1}catch{}h+=`<div><b class="cv5mo">${hg(mm.p)} ${ld}</b>${i(cvt('lday'))}</div>`}catch{}}
 return h?`<div class="cv5card cv5astro">${h}</div>`:''}
function cv5altDate(d){const c=cv5C();if(!c.done)return'';if(c.faith==='isl'){const h=cv5hij(d),L=g.lang==='ru'?cv5IM.ru:g.lang==='tr'?cv5IM.tr:cv5IM.x;return`${h.d} ${L[h.m-1]} ${h.y} ≈`}
 if(c.faith==='jud'){const h=cv5toH(cv5RD(d)),L=g.lang==='ru'?cv5HM.ru:g.lang==='de'?cv5HM.de:cv5HM.x;let mn=L[h.m-1];if(h.m===12&&cv5hl(h.y))mn=mn+' I';return`${h.d} ${mn} ${h.y}`}return''}
function cv5prow(d){const c=cv5C();if(!c.done||c.faith!=='isl'||!cv5on('pray'))return'';const P=cv5pray(d);if(!P)return'';const now=new Date,isT=x(d)===ga(0);let nx=-1;if(isT)nx=P.t.findIndex(([k,t])=>k!=='sun'&&t&&t>now);
 return`<div class="cv5card cv5pr">${P.t.map(([k,t],j)=>k==='sun'?'':`<div class="${j===nx?'on':''}"><b>${i(cv5tm(t,P.tz))}</b>${i(cvt('p_'+k))}</div>`).join('')}</div>`}
const cv5row=q=>{const a=q.act?`data-act="${q.act}" data-id="${i(q.id)}"`:q.go?`data-act="go" data-to="${q.go}"`:'';return`<${a?'button type="button"':'div'} class="cv5rb ${q.sm?'sm':''}" ${a}><span class="tm">${q.tm?i(q.tm):'<em>'+i(cvt('allDay'))+'</em>'}</span><i class="ln" style="background:${cv5COL[q.col]}"></i><span class="tx"><b>${i(q.t)}</b>${q.s?`<small>${i(q.s)}</small>`:''}</span></${a?'button':'div'}>`};
function cv5dayV(d){const it=cv5items(d,!0),cf=cv5conf(d,it),alt=cv5altDate(d);
 return`${alt?`<p class="cv5alt">${i(alt)}</p>`:''}${cv5prow(d)}${cv5hero(d)}${cv5astro(d)}
 <div class="cv5card cv5rib">${it.length?it.map(cv5row).join(''):`<p class="empty">${i(cvt('nothing'))}</p>`}</div>
 ${cf.map(q=>`<div class="cv5card cv5but"><span class="ic">♛</span><div><p>${i(q.t)}</p><div class="a"><button type="button" data-act="cv5keep" data-k="${i(q.key)}">${i(cvt('keep'))}</button><button type="button" class="g" data-act="${q.act}" data-id="${i(q.id)}">${i(cvt('edit'))}</button></div></div></div>`).join('')}
 <button type="button" class="cv5add" data-act="evnew" data-k="${x(d)}">＋ ${i(Sa('addEv'))}</button>`}
function cv5dots(d){const k=x(d),y=d.getFullYear(),o=[];const f=cv5on('faith')?cv5faith(d).filter(q=>!q.w):[];if(f.length||cv5pers(d).some(p=>p.a&&x(p.a)===k))o.push('r');if(cv5on('hol')&&(cv5state(y)[k]||[]).length)o.push('y');
 let mine=0;try{mine=dl(d).length}catch{}if(mine||(g.tasks||[]).some(t=>!t.done&&t.due===k))o.push('b');if((cv5sky(y)[k]||[]).some(q=>(q.k==='nm'||q.k==='fm')?cv5on('moon'):cv5on('astro')))o.push('gr');try{if((U().bills||[]).some(b=>!b.done&&b.next===k))o.push('v')}catch{}
 return{o,red:d.getDay()===0||f.some(q=>q.r==='H')||(cv5on('hol')&&(cv5state(y)[k]||[]).length>0),fast:cv5on('fast')&&(cv5faith(d).some(q=>q.fast&&!q.w)||cv5pers(d).some(p=>p.fast))}}
function cv5dows(){return[...Array(7)].map((q,j)=>cv5wd(new Date(2024,0,1+j),{weekday:'short'}).replace('.',''))}
function cv5monthV(){const y=m.cy,mo=m.cm,f=new Date(y,mo,1),off=(f.getDay()+6)%7,n=new Date(y,mo+1,0).getDate(),cells=Math.ceil((off+n)/7)*7,t0=ga(0);let h=cv5dows().map((s,j)=>`<span class="h ${j===6?'s':''}">${i(s)}</span>`).join('');
 for(let j=0;j<cells;j++){const d=new Date(y,mo,1-off+j),k=x(d),D=cv5dots(d);h+=`<button type="button" class="${d.getMonth()!==mo?'o':''} ${D.red?'s':''} ${k===t0?'t':''} ${k===m.cd?'sel':''} ${D.fast?'fs':''}" data-act="cv5pick" data-k="${k}"><span>${d.getDate()}</span><p class="dots">${D.o.slice(0,4).map(c=>`<i style="background:${cv5COL[c]}"></i>`).join('')}</p></button>`}
 const sel=se(m.cd),it=cv5items(sel,!1);
 return`<div class="cv5card"><div class="cv5grid">${h}</div><div class="cv5lg">${[['r','lF'],['y','lS'],['b','lP'],['gr','lM'],['v','lB']].map(([c,l])=>`<span><i style="background:${cv5COL[c]}"></i>${i(cvt(l))}</span>`).join('')}</div></div>
 <h3 class="cv5sec"><span>${i(Fi(cv5wd(sel,{weekday:'long',day:'numeric',month:'long'})))}</span><button type="button" class="linkbtn" data-act="cv5view" data-v="day">${i(cvt('v_day'))} ›</button></h3>
 <div class="cv5card cv5rib">${it.length?it.map(cv5row).join(''):`<p class="empty">${i(cvt('nothing'))}</p>`}</div><button type="button" class="cv5add" data-act="evnew" data-k="${m.cd}">＋ ${i(Sa('addEv'))}</button>`}
function cv5weekV(){const s=se(m.cd),st=cv5add(s,-((s.getDay()+6)%7)),t0=ga(0);let h='';for(let j=0;j<7;j++){const d=cv5add(st,j),k=x(d),it=cv5items(d,!1),D=cv5dots(d);
  h+=`<button type="button" class="cv5wk ${k===t0?'t':''}" data-act="cv5pick" data-k="${k}" data-to="day"><span class="dd ${D.red?'s':''}"><b>${d.getDate()}</b>${i(cv5wd(d,{weekday:'short'}))}</span><span class="wl">${it.length?it.slice(0,4).map(q=>`<span><i style="background:${cv5COL[q.col]}"></i>${q.tm?`<em>${i(q.tm)}</em> `:''}${i(q.t)}</span>`).join('')+(it.length>4?`<small>${i(cvt('more',{n:it.length-4}))}</small>`:''):`<small>—</small>`}</span></button>`}
 return`<div class="cv5card cv5wks">${h}</div>`}
function cv5yearV(){const y=m.cy,t0=ga(0);let h='';for(let mo=0;mo<12;mo++){const f=new Date(y,mo,1),off=(f.getDay()+6)%7,n=new Date(y,mo+1,0).getDate();let c='';for(let j=0;j<off;j++)c+='<i></i>';
  for(let dd=1;dd<=n;dd++){const d=new Date(y,mo,dd),k=x(d),fa=cv5on('faith')?cv5faith(d).some(q=>q.r==='H'):!1,st=cv5on('hol')&&(cv5state(y)[k]||[]).length>0;c+=`<i class="${fa?'f':''} ${st?'y':''} ${k===t0?'t':''}">${dd}</i>`}
  h+=`<button type="button" class="cv5ym" data-act="cv5month" data-m="${mo}"><b>${i(Fi(cv5wd(f,{month:'long'})))}</b><span>${c}</span></button>`}
 return`<div class="cv5yg">${h}</div><div class="cv5lg"><span><i style="background:${cv5COL.r}"></i>${i(cvt('r_H'))}</span><span><i style="background:${cv5COL.y}"></i>${i(cvt('stateH'))}</span></div>`}
function cv5listV(){const t=new Date;let h='',n=0;for(let j=0;j<=90&&n<80;j++){const d=cv5add(new Date(t.getFullYear(),t.getMonth(),t.getDate()),j),it=cv5items(d,!1);if(!it.length)continue;n+=it.length;
  h+=`<h3 class="cv5sec"><span>${i(j===0?cvt('today'):j===1?cvt('tomorrow'):Fi(cv5wd(d,{weekday:'short',day:'numeric',month:'long'})))}</span><small>${j>1?i(cvt('inD',{n:j})):''}</small></h3><div class="cv5card cv5rib">${it.map(cv5row).join('')}</div>`}
 return h||`<p class="empty">${i(cvt('nothing'))}</p>`}
function cv5title(v0){const d=se(m.cd);if(v0==='day')return Fi(cv5wd(d,{weekday:'long',day:'numeric',month:'long'}));if(v0==='week'){const st=cv5add(d,-((d.getDay()+6)%7)),en=cv5add(st,6);return`${st.getDate()}${st.getMonth()!==en.getMonth()?' '+cv5wd(st,{month:'short'}):''} – ${cv5wd(en,{day:'numeric',month:'long'})}`}
 if(v0==='year')return String(m.cy);if(v0==='list')return cvt('v_list');return Fi(cv5wd(new Date(m.cy,m.cm,1),{month:'long',year:'numeric'}))}
function cv5screen(){const c=cv5C();if(!c.done)return cv5setup();const v0=['day','week','month','year','list'].includes(m.cv5v)?m.cv5v:'month';if(!m.cd)m.cd=ga(0);if(m.cy==null){const d=se(m.cd);m.cy=d.getFullYear();m.cm=d.getMonth()}
 const body=v0==='day'?cv5dayV(se(m.cd)):v0==='week'?cv5weekV():v0==='year'?cv5yearV():v0==='list'?cv5listV():cv5monthV();
 const ct=cv5ctry(),note=cv5on('hol')?(ct==='ua'?cvt('uaN'):ct==='tr'?cvt('trN'):ct==='de'&&v0==='month'?cvt('deN'):''):'';
 return`<div class="screen cv5s"><div class="sub-hdr"><button class="iconbtn" data-act="go" data-to="home" aria-label="back">${_('back')}</button><div class="ttl"><h2>${i(cvt('title'))}</h2></div><span class="cv5hb"><button class="iconbtn" data-act="go" data-to="search" aria-label="${i(cvt('search'))}">${_('search')}</button><button class="iconbtn" data-act="cv5set" aria-label="${i(cvt('sett'))}">${_('gear')}</button></span></div>
 <div class="cv5seg">${['day','week','month','year','list'].map(k=>`<button type="button" class="${k===v0?'on':''}" data-act="cv5view" data-v="${k}">${i(cvt('v_'+k))}</button>`).join('')}</div>
 ${v0==='list'?'':`<div class="cv5nav"><button type="button" class="iconbtn" data-act="cv5nav" data-d="-1" aria-label="‹">${_('back')}</button><b>${i(cv5title(v0))}</b><button type="button" class="iconbtn" data-act="cv5nav" data-d="1" aria-label="›">${_('chev')}</button></div>`}
 ${x(se(m.cd))!==ga(0)||v0==='year'?`<div class="cv5tb"><button type="button" class="chip" data-act="cv5today">${i(cvt('today'))}</button></div>`:''}
 ${body}${note?`<p class="cv5note">${i(note)}</p>`:''}</div>`}
/* ---------- setup wizard ---------- */
function cv5setup(){const c=cv5C(),st=Math.max(1,Math.min(5,+m.cv5st||1)),N=5,dots=[...Array(N)].map((q,j)=>`<i class="${j<st?'on':''}"></i>`).join('');let h='';
 const opt=(on,act,v,t,s,ic,extra)=>`<button type="button" class="cv5op ${on?'on':''}" data-act="${act}" data-v="${v}"><i class="rd"></i><span>${i(t)}${s?`<small>${i(s)}</small>`:''}</span>${ic?`<em>${ic}</em>`:''}</button>${extra||''}`;
 const tg=(k,t)=>`<button type="button" class="cv5tg ${cv5on(k)?'on':''}" data-act="cv5tog" data-v="${k}"><span>${i(t)}</span><i>${cv5on(k)?_('check'):''}</i></button>`;
 if(st===1){const ct=cv5ctry(),cs=[...new Set(nc.map(q=>q[4]))],city=cv5city();h=`<h2 class="cv5wt">${i(cvt('s1'))}</h2><p class="cv5ws">${i(cvt('s1s'))}</p>
  <label class="cv5lb">${i(cvt('country'))}<select class="field" data-cv5="ctry">${cs.map(q=>`<option value="${q}" ${q===ct?'selected':''}>${i(Nx(q))}</option>`).join('')}</select></label>
  <label class="cv5lb">${i(cvt('city'))}<select class="field" data-cv5="city">${nc.filter(q=>q[4]===ct).map(q=>`<option value="${q[0]}" ${city&&q[0]===city[0]?'selected':''}>${i(ic(q))}</option>`).join('')}</select></label>
  ${cv5SH[ct]?'':`<p class="cv5ws">${i(cvt('noHol'))}</p>`}<p class="cv5ws sm">${i(cvt('langL'))}</p>`}
 else if(st===2){const f=c.faith||'none';h=`<h2 class="cv5wt">${i(cvt('s2'))}</h2><p class="cv5ws">${i(cvt('s2s'))}</p>
  ${opt(f==='none','cv5faith','none',cvt('f_none'),cvt('f_noneS'),'○')}
  ${opt(f==='chr','cv5faith','chr',cvt('f_chr'),cvt('f_chrS'),'✝',f==='chr'?`<div class="cv5sub"><p>${i(cvt('dir'))}</p><div class="cv5chips">${['orth','cath','prot'].map(q=>`<button type="button" class="${(c.conf||'orth')===q?'on':''}" data-act="cv5conf" data-v="${q}">${i(cvt('c_'+q))}</button>`).join('')}</div></div>`:'')}
  ${opt(f==='isl','cv5faith','isl',cvt('f_isl'),cvt('f_islS'),'☪',f==='isl'?`<div class="cv5sub"><p>${i(cvt('dir'))}</p><div class="cv5chips">${['sunni','shia'].map(q=>`<button type="button" class="${(c.isl||'sunni')===q?'on':''}" data-act="cv5isl" data-v="${q}">${i(cvt(q==='sunni'?'i_sun':'i_shia'))}</button>`).join('')}</div></div>`:'')}
  ${opt(f==='jud','cv5faith','jud',cvt('f_jud'),cvt('f_judS'),'✡')}`}
 else if(st===3){const f=c.faith||'none';h=`<h2 class="cv5wt">${i(cvt('s3'))}</h2><div class="cv5tgs">${tg('hol',cvt('o_hol'))}${f!=='none'?tg('faith',cvt('o_faith')):''}${f==='chr'||f==='isl'?tg('fast',cvt('o_fast')):''}${f==='chr'&&c.conf!=='prot'?tg('saints',cvt('o_saints')):''}${f==='isl'?tg('pray',cvt('o_pray')):''}${f==='jud'?tg('shab',cvt('o_shab')):''}${tg('moon',cvt('o_moon'))}${tg('sun',cvt('o_sun'))}${tg('astro',cvt('o_astro'))}</div>`}
 else if(st===4){const f=c.faith||'none';let p='';
  if(f==='isl'){const mt=cv5METH[c.meth]?c.meth:'';p+=`<label class="cv5lb">${i(cvt('meth'))}<select class="field" data-cv5="meth"><option value="">${i(cvt('auto'))}</option>${Object.keys(cv5METH).map(q=>`<option value="${q}" ${mt===q?'selected':''}>${i(cvt('m_'+q))}</option>`).join('')}</select></label>
   <label class="cv5lb">${i(cvt('asr'))}<select class="field" data-cv5="asr"><option value="">${i(cvt('auto'))}</option><option value="s" ${c.asr==='s'?'selected':''}>${i(cvt('asrS'))}</option><option value="h" ${c.asr==='h'?'selected':''}>${i(cvt('asrH'))}</option></select></label>
   <label class="cv5lb">${i(cvt('hadj'))}<select class="field" data-cv5="hadj">${[-1,0,1].map(q=>`<option value="${q}" ${(+c.hadj||0)===q?'selected':''}>${q>0?'+':''}${q}</option>`).join('')}</select><small>${i(cvt('hadjS'))}</small></label>`}
  if(f==='chr'&&(c.conf||'orth')==='orth')p+=`<button type="button" class="cv5tg ${c.wfast!==!1?'on':''}" data-act="cv5wf"><span>${i(cvt('wfast'))}</span><i>${c.wfast!==!1?_('check'):''}</i></button>`;
  if(f==='jud')p+=`<label class="cv5lb">${i(cvt('cnd'))}<select class="field" data-cv5="cnd">${[18,20,30,40].map(q=>`<option value="${q}" ${(+c.cnd||18)===q?'selected':''}>${q}</option>`).join('')}</select></label>`;
  h=`<h2 class="cv5wt">${i(cvt('s4'))}</h2>${p}<div class="cv5sub"><p><b>★ ${i(cvt('mine'))}</b></p><p>${i(cvt('mineS'))}</p><button type="button" class="btn sm" data-act="evnew" data-k="${ga(0)}">＋ ${i(cvt('addMine'))}</button></div>`}
 else{const f=c.faith||'none',L=[];const ct=cv5ctry();L.push(Nx(ct)+(cv5city()?' · '+ic(cv5city()):''));L.push(f==='none'?cvt('f_none'):f==='chr'?cvt('f_chr')+' · '+cvt('c_'+(c.conf||'orth')):f==='isl'?cvt('f_isl')+' · '+cvt(c.isl==='shia'?'i_shia':'i_sun'):cvt('f_jud'));
  ['hol','faith','fast','saints','pray','shab','moon','sun','astro'].forEach(k=>{if(!cv5on(k))return;if(k==='faith'&&f==='none')return;if(k==='fast'&&!(f==='chr'||f==='isl'))return;if(k==='saints'&&!(f==='chr'&&c.conf!=='prot'))return;if(k==='pray'&&f!=='isl')return;if(k==='shab'&&f!=='jud')return;L.push(cvt('o_'+k))});
  h=`<div class="cv5ok">✓</div><h2 class="cv5wt">${i(cvt('s5'))}</h2><div class="cv5sum">${L.map(s=>`<p><i>✓</i>${i(s)}</p>`).join('')}</div>`}
 return`<div class="screen cv5s cv5w"><div class="sub-hdr"><button class="iconbtn" data-act="${c.done?'cv5close':'go'}" data-to="home" aria-label="back">${_('back')}</button><div class="ttl"><h2>${i(cvt('sett'))}</h2></div></div>
 <p class="cv5stp">${i(cvt('step',{a:st,b:N}))}</p><div class="cv5dots">${dots}</div>${h}<p class="cv5priv">${i(cvt('priv'))}</p>
 <div class="cv5btns">${st>1?`<button type="button" class="btn" data-act="cv5step" data-d="-1">${i(cvt('back'))}</button>`:''}${st<N?`<button type="button" class="btn primary cv5g" data-act="cv5step" data-d="1">${i(cvt('next'))}</button>`:`<button type="button" class="btn primary cv5g" data-act="cv5fin">${i(cvt('goCal'))}</button>`}</div></div>`}
/* routing and actions */
Xf=function(){return m.cv5w?cv5setupWrap():cv5screen()};
function cv5setupWrap(){return cv5setup()}
const cv5re=()=>{try{k3keep(()=>v())}catch{v()}};
Object.assign(L,{cv5view(e){m.cv5v=e.v;v()},cv5pick(e){m.cd=e.k;const d=se(e.k);m.cy=d.getFullYear();m.cm=d.getMonth();if(e.to)m.cv5v=e.to;cv5re()},
 cv5nav(e){const n=+e.d,v0=m.cv5v||'month',d=se(m.cd||ga(0));if(v0==='day'){const z2=cv5add(d,n);m.cd=x(z2)}else if(v0==='week'){m.cd=x(cv5add(d,7*n))}else if(v0==='year'){m.cy+=n;m.cd=x(new Date(m.cy,d.getMonth(),Math.min(d.getDate(),28)))}else{let mo=m.cm+n,y=m.cy;if(mo<0){mo=11;y--}if(mo>11){mo=0;y++}m.cm=mo;m.cy=y;m.cd=x(new Date(y,mo,Math.min(d.getDate(),new Date(y,mo+1,0).getDate())));v();return}const z3=se(m.cd);m.cy=z3.getFullYear();m.cm=z3.getMonth();v()},
 cv5today(){const t=new Date;m.cd=x(t);m.cy=t.getFullYear();m.cm=t.getMonth();v()},cv5month(e){m.cm=+e.m;m.cd=x(new Date(m.cy,+e.m,1));m.cv5v='month';v()},
 cv5keep(e){g.dismiss=g.dismiss||{};g.dismiss[e.k]=1;$();cv5re()},
 cv5set(){m.cv5w=1;m.cv5st=1;v()},cv5close(){m.cv5w=0;v()},cv5step(e){m.cv5st=Math.max(1,Math.min(5,(+m.cv5st||1)+ +e.d));v();const sc=document.querySelector('.screen');sc&&(sc.scrollTop=0)},
 cv5fin(){const c=cv5C();c.done=1;c.faith=c.faith||'none';if(c.faith==='chr')c.conf=c.conf||'orth';if(c.faith==='isl')c.isl=c.isl||'sunni';Object.keys(cv5Y).forEach(k=>delete cv5Y[k]);Object.keys(cv5SC).forEach(k=>delete cv5SC[k]);$();m.cv5w=0;m.cv5v=m.cv5v||'day';m.cd=ga(0);const t=new Date;m.cy=t.getFullYear();m.cm=t.getMonth();v()},
 cv5faith(e){const c=cv5C();c.faith=e.v;$();cv5re()},cv5conf(e){cv5C().conf=e.v;Object.keys(cv5Y).forEach(k=>delete cv5Y[k]);$();cv5re()},cv5isl(e){cv5C().isl=e.v;Object.keys(cv5Y).forEach(k=>delete cv5Y[k]);$();cv5re()},
 cv5tog(e){const c=cv5C();c.show[e.v]=!cv5on(e.v);$();cv5re()},cv5wf(){const c=cv5C();c.wfast=c.wfast===!1;$();cv5re()}});
document.addEventListener('change',e=>{const t=e.target;if(!t||!t.dataset||!t.dataset.cv5)return;const c=cv5C(),k=t.dataset.cv5;
 if(k==='ctry'){c.ctry=t.value;const first=nc.find(q=>q[4]===t.value);if(first)g.city=first[0]}else if(k==='city')g.city=t.value;else if(k==='hadj'||k==='cnd')c[k]=+t.value;else c[k]=t.value;
 Object.keys(cv5Y).forEach(q=>delete cv5Y[q]);Object.keys(cv5SC).forEach(q=>delete cv5SC[q]);Object.keys(cv5AC).forEach(q=>delete cv5AC[q]);$();cv5re()});
/* first open shows the setup; nav: calendar instead of search, search on top of home */
v=(f=>function(){const r=f.apply(this,arguments);try{if(m.route==='home'&&m.logged){const inNav=!!document.querySelector('nav.nav [data-k="search"]');const top=document.querySelector('.screen > section.sky .st38top, .screen > section.sky .st17top, .screen .sky .st38top');const ex=top&&top.querySelector('.cv5srch');if(inNav){ex&&ex.remove()}else if(top&&!ex){const b=document.createElement('button');b.className='iconbtn gold cv5srch';b.dataset.act='go';b.dataset.to='search';b.setAttribute('aria-label',cvt('search'));b.innerHTML=_('search');const last=top.lastElementChild;last?top.insertBefore(b,last):top.appendChild(b)}}}catch{}return r})(v);
{const st=document.createElement('style');st.textContent=`
.cv5s{--cvc:var(--surface,#fbf9f5)}
.cv5seg{display:flex;margin:0 16px 10px;padding:3px;border-radius:14px;background:color-mix(in srgb,var(--ink) 8%,transparent)}.cv5seg button{flex:1;min-width:0;text-align:center;border:0;background:transparent;color:var(--ink);font:inherit;font-size:13.5px;padding:8px 0;border-radius:11px;cursor:pointer;opacity:.75}.cv5seg button.on{background:#1E1B18;color:#F0D9A0;opacity:1}html[data-gx$="-n"] .cv5seg button.on{background:#E9CF94;color:#141414}
.cv5hb{display:flex;gap:4px;align-items:center}
.cv5nav{display:flex;align-items:center;justify-content:space-between;margin:0 10px 6px}.cv5nav b{font-family:var(--display);font-size:22px;font-weight:600;text-align:center;flex:1}
.cv5tb{display:flex;justify-content:center;margin:0 0 8px}
.cv5card{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:10px 12px;margin:0 16px 10px}
.cv5grid{display:grid;grid-template-columns:repeat(7,1fr);text-align:center}.cv5grid .h{font-size:12px;color:var(--muted);padding:2px 0 6px}.cv5grid .h.s{color:#B3362E}
.cv5grid button{position:relative;text-align:center;border:0;background:transparent;color:var(--ink);font:inherit;font-size:15.5px;height:44px;padding:5px 0 0;cursor:pointer;border-radius:12px}.cv5grid button.o{opacity:.35}.cv5grid button.s>span{color:#C0453B;font-weight:600}
.cv5grid button.t>span{display:inline-grid;place-items:center;width:30px;height:30px;margin-top:-4px;border-radius:50%;background:#1E1B18;color:#F0D9A0!important}.cv5grid button.sel{background:color-mix(in srgb,var(--gold,#C99A3E) 18%,transparent)}.cv5grid button.fs:after{content:'';position:absolute;left:30%;right:30%;top:2px;height:2px;border-radius:2px;background:color-mix(in srgb,#B3362E 45%,transparent)}
.cv5grid .dots{position:absolute;left:0;right:0;bottom:4px;display:flex;justify-content:center;gap:3px;margin:0}.cv5grid .dots i,.cv5lg i,.cv5wk .wl i{display:inline-block;width:6px;height:6px;border-radius:50%}
.cv5lg{display:flex;flex-wrap:wrap;gap:6px 12px;justify-content:center;font-size:11.5px;color:var(--muted);margin:6px 0 0}.cv5lg span{display:flex;align-items:center;gap:4px}
.cv5sec{display:flex;justify-content:space-between;align-items:baseline;margin:12px 20px 6px;font-family:var(--display);font-size:20px;font-weight:600}.cv5sec small{font-family:inherit;font-size:12.5px;color:var(--muted);font-weight:400}
.cv5rib{padding:2px 12px}.cv5rb{display:flex;gap:10px;align-items:flex-start;width:100%;padding:8px 0;border:0;border-top:1px solid color-mix(in srgb,var(--line) 60%,transparent);background:transparent;color:var(--ink);font:inherit;text-align:left}.cv5rb:first-child{border-top:0}button.cv5rb{cursor:pointer}
.cv5rb .tm{flex:none;width:52px;font-size:13.5px;color:var(--muted);padding-top:1px}.cv5rb .tm em{font-style:normal;font-size:11.5px}.cv5rb .ln{flex:none;width:3px;align-self:stretch;border-radius:2px}.cv5rb .tx{flex:1;min-width:0}.cv5rb .tx b{display:block;font-weight:500;font-size:15px;overflow-wrap:anywhere}.cv5rb .tx small{display:block;font-size:12.5px;color:var(--muted)}.cv5rb.sm .tx b{font-weight:400;font-size:14px;color:var(--muted)}
.cv5hero{margin:0 16px 10px;border-radius:20px;padding:14px;background:linear-gradient(135deg,#1E1B18,#3a2f20);color:#F3EEE4}.cv5hero small{font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:#E9CF94}.cv5hero h3{font-family:var(--display);font-size:25px;font-weight:600;margin:2px 0;color:#F3EEE4}.cv5hero p{font-size:13.5px;color:#d8cfbf;margin:0}.cv5hero .cv5nf{margin-top:8px;font-size:13px}.cv5hero .cv5nf b{color:#F0D9A0;font-weight:500}
.cv5bar{height:7px;border-radius:4px;background:rgba(255,255,255,.14);margin:9px 0 2px;overflow:hidden}.cv5bar i{display:block;height:100%;background:linear-gradient(90deg,#B8862E,#F0D9A0);border-radius:4px}
.cv5astro{display:flex;padding:10px 4px;text-align:center}.cv5astro div{flex:1;font-size:11.5px;color:var(--muted)}.cv5astro div+div{border-left:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.cv5astro b{display:block;font-family:var(--display);font-size:19px;font-weight:600;color:var(--ink)}.cv5astro b.cv5mo{display:flex;align-items:center;gap:4px;justify-content:center}.cv5mo svg{width:18px;height:18px}
.cv5pr{display:flex;padding:6px}.cv5pr div{flex:1;text-align:center;font-size:11.5px;color:var(--muted);padding:6px 0;border-radius:12px}.cv5pr b{display:block;font-family:var(--display);font-size:18px;font-weight:600;color:var(--ink)}.cv5pr div.on{background:color-mix(in srgb,var(--gold,#C99A3E) 18%,transparent);color:var(--gold,#B8862E)}
.cv5alt{margin:-2px 20px 8px;text-align:right;font-size:13px;color:var(--muted)}
.cv5but{display:flex;gap:10px;border-color:color-mix(in srgb,var(--gold) 50%,var(--line));background:color-mix(in srgb,var(--gold) 7%,var(--surface))}.cv5but .ic{flex:none;width:34px;height:34px;border-radius:50%;background:#1E1B18;color:#F0D9A0;display:grid;place-items:center;font-size:16px}.cv5but p{margin:0;font-size:14px;line-height:1.38}.cv5but .a{display:flex;gap:8px;margin-top:8px}.cv5but .a button{border:1px solid var(--line);background:transparent;color:var(--ink);font:inherit;font-size:13.5px;padding:7px 12px;border-radius:10px;cursor:pointer}.cv5but .a button.g{background:#1E1B18;color:#F0D9A0;border-color:#1E1B18}html[data-gx$="-n"] .cv5but .a button.g{background:#E9CF94;color:#141414}
.cv5add{display:block;width:calc(100% - 32px);margin:2px 16px 12px;border:1px dashed color-mix(in srgb,var(--gold) 45%,var(--line));background:transparent;color:var(--ink);font:inherit;font-size:15px;padding:11px;border-radius:14px;cursor:pointer}
.cv5wks{padding:2px 12px}.cv5wk{display:flex;gap:12px;width:100%;padding:9px 0;border:0;border-top:1px solid color-mix(in srgb,var(--line) 60%,transparent);background:transparent;color:var(--ink);font:inherit;text-align:left;cursor:pointer}.cv5wk:first-child{border-top:0}.cv5wk .dd{flex:none;width:46px;text-align:center;font-size:12px;color:var(--muted)}.cv5wk .dd b{display:block;font-family:var(--display);font-size:24px;font-weight:600;color:var(--ink);line-height:1}.cv5wk .dd.s b{color:#C0453B}.cv5wk.t .dd b{color:var(--gold,#B8862E)}
.cv5wk .wl{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px;font-size:14px}.cv5wk .wl span{display:flex;align-items:center;gap:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cv5wk .wl em{font-style:normal;color:var(--muted);font-size:12.5px}.cv5wk .wl small{color:var(--muted);font-size:12px}
.cv5yg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:0 16px 8px}.cv5ym{border:1px solid var(--line);border-radius:16px;background:var(--surface);color:var(--ink);font:inherit;padding:8px;cursor:pointer;text-align:left}.cv5ym b{display:block;font-family:var(--display);font-size:17px;font-weight:600;margin:0 0 4px 2px}.cv5ym span{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;font-size:9.5px;text-align:center;color:var(--muted)}.cv5ym i{font-style:normal;padding:2px 0;border-radius:4px}.cv5ym i.f{background:color-mix(in srgb,#B3362E 22%,transparent);color:var(--ink)}.cv5ym i.y{background:color-mix(in srgb,#D9A43A 28%,transparent);color:var(--ink)}.cv5ym i.t{outline:1.5px solid var(--ink)}
.cv5note{margin:4px 22px 16px;font-size:12.5px;color:var(--muted);text-align:center}
.cv5w .cv5stp{text-align:center;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:4px 0}.cv5dots{display:flex;gap:6px;justify-content:center;margin:0 0 12px}.cv5dots i{width:26px;height:4px;border-radius:2px;background:color-mix(in srgb,var(--ink) 15%,transparent)}.cv5dots i.on{background:var(--gold,#B8862E)}
.cv5wt{font-family:var(--display);font-size:30px;font-weight:600;text-align:center;margin:0 16px 6px;line-height:1.1}.cv5ws{font-size:14px;color:var(--muted);text-align:center;margin:0 22px 14px}.cv5ws.sm{font-size:12.5px}
.cv5op{display:flex;align-items:center;gap:12px;width:calc(100% - 32px);margin:0 16px 8px;padding:13px 14px;border-radius:18px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:16px;text-align:left;cursor:pointer}.cv5op .rd{width:22px;height:22px;border-radius:50%;border:2px solid color-mix(in srgb,var(--ink) 30%,transparent);flex:none}.cv5op.on{border-color:var(--gold,#C99A3E);box-shadow:0 0 0 1px var(--gold,#C99A3E) inset}.cv5op.on .rd{border:7px solid var(--gold,#B8862E)}.cv5op span{flex:1}.cv5op small{display:block;font-size:12px;color:var(--muted)}.cv5op em{font-style:normal;font-size:22px;width:30px;text-align:center;color:var(--gold,#B8862E)}
.cv5sub{margin:0 16px 10px;padding:10px 12px;border-radius:16px;background:color-mix(in srgb,var(--ink) 6%,transparent)}.cv5sub p{font-size:13px;color:var(--muted);margin:0 0 7px}.cv5sub p b{color:var(--ink);font-weight:500}
.cv5chips{display:flex;gap:6px;flex-wrap:wrap}.cv5chips button{border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:14px;padding:7px 12px;border-radius:12px;cursor:pointer}.cv5chips button.on{background:#1E1B18;color:#F0D9A0;border-color:#1E1B18}
.cv5tgs{margin:0 16px}.cv5tg{display:flex;align-items:center;gap:10px;width:100%;margin:0 0 8px;padding:12px 14px;border-radius:16px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:15px;text-align:left;cursor:pointer}.cv5w .cv5tg{width:calc(100% - 32px);margin-left:16px}.cv5tgs .cv5tg{width:100%;margin-left:0}.cv5tg span{flex:1}.cv5tg i{width:24px;height:24px;border-radius:7px;border:2px solid color-mix(in srgb,var(--ink) 25%,transparent);display:grid;place-items:center;color:#141414}.cv5tg.on i{background:var(--gold,#C99A3E);border-color:var(--gold,#C99A3E)}.cv5tg i svg{width:15px;height:15px}
.cv5lb{display:block;margin:0 16px 12px;font-size:13.5px;color:var(--muted)}.cv5lb .field{display:block;width:100%;margin-top:4px;color:var(--ink)}.cv5lb small{display:block;margin-top:4px;font-size:12px}
.cv5ok{width:56px;height:56px;margin:4px auto 8px;border-radius:50%;background:var(--gold,#C99A3E);color:#141414;display:grid;place-items:center;font-size:28px}
.cv5sum{margin:0 16px}.cv5sum p{display:flex;gap:10px;align-items:center;padding:9px 12px;margin:0 0 6px;border-radius:14px;background:var(--surface);border:1px solid var(--line);font-size:15px}.cv5sum p i{font-style:normal;color:#3E9A62;font-weight:700}
.cv5srch{margin-left:auto!important;margin-right:8px}.cv5priv{text-align:center;font-size:12px;color:var(--muted);margin:14px 20px 8px}
.cv5btns{display:flex;gap:10px;margin:4px 16px 30px}.cv5btns .btn{flex:1;padding:14px;font-size:16px}.cv5btns .cv5g{flex:2}
`;document.head.appendChild(st)}
