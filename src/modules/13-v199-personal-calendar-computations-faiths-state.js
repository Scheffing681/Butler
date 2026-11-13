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
