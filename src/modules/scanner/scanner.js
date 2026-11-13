/* ===== Document scanner — one module (was updates v238, v239, v240, v241, v243, v244, v247) =====
   camera → corners → straighten and clean → pages → text, PDF, the card of what the butler understood; the scanner's home page;
   the scanner on the sign-in screen. Sections below keep their original update notes. */
/* v238: document scanner — finds the sheet, straightens it, flattens bent edges, removes crease shadows; everything stays on the phone */
try{
const SC={t:['Сканер','Scanner','Scanner','Skaner','Tarayıcı','Scanner','Escáner'],
 look:['Наведите камеру на лист','Kamera auf das Blatt richten','Point the camera at the sheet','Skieruj aparat na kartkę','Kamerayı sayfaya tutun','Visez la feuille','Apunta a la hoja'],
 found:['Лист найден · держите телефон ровно…','Blatt erkannt · Telefon ruhig halten …','Sheet found · hold still…','Kartka znaleziona · trzymaj nieruchomo…','Sayfa bulundu · sabit tutun…','Feuille trouvée · ne bougez pas…','Hoja encontrada · no te muevas…'],
 auto:['Авто','Auto','Auto','Auto','Oto','Auto','Auto'],
 edges:['Края листа','Blattränder','Sheet edges','Krawędzie','Sayfa kenarları','Bords','Bordes'],
 drag:['Потяните угол, если рамка легла неточно','Ecke ziehen, falls der Rahmen nicht passt','Drag a corner if the frame is off','Przeciągnij róg, jeśli ramka nie pasuje','Çerçeve kaymışsa köşeyi sürükleyin','Tirez un coin si le cadre est décalé','Arrastra una esquina si el marco no encaja'],
 flat:['Выровнять →','Begradigen →','Straighten →','Wyprostuj →','Düzelt →','Redresser →','Enderezar →'],
 done:['Готово','Fertig','Done','Gotowe','Hazır','Terminé','Listo'],
 was:['Было','Vorher','Before','Przed','Önce','Avant','Antes'],now:['Стало','Nachher','After','Po','Sonra','Après','Después'],
 note:['Выровнено · изгибы и тени складок убраны','Begradigt · Wölbungen und Knickschatten entfernt','Straightened · bends and crease shadows removed','Wyprostowano · zagięcia i cienie usunięte','Düzeltildi · kıvrım ve gölgeler kaldırıldı','Redressé · plis et ombres retirés','Enderezado · curvas y sombras eliminadas'],
 doc:['Документ','Dokument','Document','Dokument','Belge','Document','Documento'],col:['Цвет','Farbe','Colour','Kolor','Renk','Couleur','Color'],orig:['Оригинал','Original','Original','Oryginał','Orijinal','Original','Original'],
 save:['Сохранить','Speichern','Save','Zapisz','Kaydet','Enregistrer','Guardar'],
 pages:['%n стр.','%n S.','%n p.','%n str.','%n sf.','%n p.','%n pág.'],
 priv:['🔒 Обработка только на этом телефоне','🔒 Verarbeitung nur auf diesem Telefon','🔒 Processed only on this phone','🔒 Przetwarzanie tylko na tym telefonie','🔒 Yalnızca bu telefonda işlenir','🔒 Traité uniquement sur ce téléphone','🔒 Procesado solo en este teléfono'],
 noCam:['Камера недоступна. Разрешите камеру для приложения в настройках iPhone — или снимите обычной камерой.','Kamera nicht verfügbar. Kamera in den iPhone-Einstellungen erlauben – oder normale Kamera nutzen.','Camera unavailable. Allow the camera in iPhone settings — or use the normal camera.','Aparat niedostępny. Zezwól w ustawieniach — lub użyj zwykłego aparatu.','Kamera kullanılamıyor. Ayarlardan izin verin — ya da normal kamerayı kullanın.','Caméra indisponible. Autorisez-la dans les réglages — ou utilisez l’appareil photo normal.','Cámara no disponible. Permítela en ajustes — o usa la cámara normal.'],
 native:['Обычная камера','Normale Kamera','Normal camera','Zwykły aparat','Normal kamera','Appareil normal','Cámara normal'],
 gal:['Из галереи','Aus Fotos','From photos','Z galerii','Galeriden','Depuis Photos','Desde fotos'],
 work:['Выравниваю…','Wird begradigt …','Straightening…','Prostuję…','Düzeltiliyor…','Redressement…','Enderezando…'],
 retake:['Переснять','Neu aufnehmen','Retake','Ponów','Yeniden çek','Reprendre','Repetir'],
 rot:['Повернуть','Drehen','Rotate','Obróć','Döndür','Pivoter','Girar'],
 add:['Ещё страница','Weitere Seite','Add page','Kolejna strona','Sayfa ekle','Ajouter une page','Otra página'],
 fix:['Края','Ränder','Edges','Krawędzie','Kenarlar','Bords','Bordes'],
 nat:['Камера iPhone','iPhone-Kamera','iPhone camera','Aparat iPhone','iPhone kamerası','Appareil iPhone','Cámara iPhone'],
 lowQ:['Текст читается плохо — для лучшего результата снимайте «Камерой iPhone», ровно и при хорошем свете.','Text schwer lesbar – besser mit der „iPhone-Kamera“, gerade und bei gutem Licht aufnehmen.','The text is hard to read — use “iPhone camera”, straight and in good light, for a better result.','Tekst słabo czytelny — użyj „Aparatu iPhone” przy dobrym świetle.','Metin zor okunuyor — “iPhone kamerası” ile iyi ışıkta çekin.','Texte peu lisible — utilisez « Appareil iPhone », bien droit et bien éclairé.','Texto poco legible — usa «Cámara iPhone», recto y con buena luz.'],
 smOff:['Лист уже ровный — разглаживать нечего','Blatt ist schon glatt','The sheet is already flat','Kartka jest już równa','Sayfa zaten düz','La feuille est déjà plane','La hoja ya está lisa'],
 files:['Файлы','Dateien','Files','Pliki','Dosyalar','Fichiers','Archivos'],
 next:['Дальше ›','Weiter ›','Next ›','Dalej ›','İleri ›','Suivant ›','Siguiente ›'],
 cardT:['Что это за документ','Was ist das?','What is it','Co to jest','Bu ne','Qu’est-ce que c’est','Qué es'],
 und:['Батлер понял','Der Butler hat erkannt','The butler understood','Kamerdyner rozpoznał','Uşak anladı','Le majordome a compris','El mayordomo entendió'],
 undQ:['Батлер не уверен — проверьте','Nicht sicher – bitte prüfen','Not sure — please check','Nie jestem pewien — sprawdź','Emin değil — kontrol edin','Pas sûr — vérifiez','No está seguro — revisa'],
 fTitle:['Название','Name','Name','Nazwa','Ad','Nom','Nombre'],fFolder:['Папка','Ordner','Folder','Folder','Klasör','Dossier','Carpeta'],fType:['Вид','Art','Type','Rodzaj','Tür','Type','Tipo'],
 refund:['Возврат','Erstattung','Refund','Zwrot','İade','Remboursement','Devolución'],pay:['К оплате','Zu zahlen','To pay','Do zapłaty','Ödenecek','À payer','A pagar'],
 due:['Срок','Frist','Deadline','Termin','Son tarih','Échéance','Plazo'],duePay:['Оплатить до','Zahlbar bis','Pay by','Zapłać do','Son ödeme','Payer avant','Pagar antes de'],dueObj:['≈ Срок обжалования','≈ Einspruchsfrist','≈ Objection deadline','≈ Termin odwołania','≈ İtiraz süresi','≈ Délai de recours','≈ Plazo de recurso'],
 dueObjS:['месяц после получения письма (≈ дата письма + 4 дня) — проверьте по письму','ein Monat ab Bekanntgabe (≈ Briefdatum + 4 Tage) – bitte im Brief prüfen','one month after receipt (≈ letter date + 4 days) — check the letter','miesiąc od doręczenia — sprawdź w piśmie','tebliğden bir ay sonra — mektuptan kontrol edin','un mois après réception — vérifiez la lettre','un mes tras la recepción — revisa la carta'],
 remind:['Напомнить','Erinnern','Remind me','Przypomnij','Hatırlat','Me rappeler','Recordarme'],remindS:['задача в «Мой день» на этот срок','Aufgabe in „Mein Tag“ zu dieser Frist','a task in “My day” for this date','zadanie w „Mój dzień”','“Günüm”de görev','une tâche dans « Ma journée »','una tarea en «Mi día»'],
 cardChk:['Всё заполнено по тексту письма — проверьте цифры и даты перед сохранением.','Alles aus dem Brieftext übernommen – Zahlen und Daten vor dem Speichern prüfen.','Filled from the letter’s text — check numbers and dates before saving.','Wypełniono z tekstu — sprawdź liczby i daty.','Metinden dolduruldu — sayıları ve tarihleri kontrol edin.','Rempli d’après le texte — vérifiez chiffres et dates.','Rellenado del texto — revisa cifras y fechas.'],
 saveOne:['Сохранить этот','Diesen speichern','Save this one','Zapisz ten','Bunu kaydet','Enregistrer celui-ci','Guardar este'],
 savedTo:['Сохранено в «%f» ✓','Gespeichert in „%f“ ✓','Saved to “%f” ✓','Zapisano w „%f” ✓','“%f” klasörüne kaydedildi ✓','Enregistré dans « %f » ✓','Guardado en «%f» ✓'],
 taskObj:['Обжалование: проверить срок','Einspruch: Frist prüfen','Objection: check the deadline','Odwołanie: sprawdź termin','İtiraz: süreyi kontrol et','Recours : vérifier le délai','Recurso: revisar el plazo'],taskPay:['Оплатить','Bezahlen','Pay','Zapłacić','Öde','Payer','Pagar'],taskDue:['Срок','Frist','Deadline','Termin','Son tarih','Échéance','Plazo'],
 inbox:['Входящие','Eingang','Inbox','Skrzynka','Gelen','Arrivées','Entrada'],pp:['стр.','S.','p.','str.','sf.','p.','pág.'],check:['проверьте','prüfen','check','sprawdź','kontrol','vérifier','revisar'],
 saved:['сохранено','gespeichert','saved','zapisano','kaydedildi','enregistré','guardado'],waitT:['в очереди','wartet','waiting','czeka','sırada','en attente','en cola'],
 impErr:['Файл не удалось открыть','Datei konnte nicht geöffnet werden','The file could not be opened','Nie udało się otworzyć pliku','Dosya açılamadı','Impossible d’ouvrir le fichier','No se pudo abrir el archivo'],
 saveAll:['Сохранить все (%n)','Alle speichern (%n)','Save all (%n)','Zapisz wszystkie (%n)','Hepsini kaydet (%n)','Tout enregistrer (%n)','Guardar todos (%n)'],
 savedN:['Сохранено документов: %n ✓','Dokumente gespeichert: %n ✓','Documents saved: %n ✓','Zapisano dokumentów: %n ✓','Kaydedilen belge: %n ✓','Documents enregistrés : %n ✓','Documentos guardados: %n ✓'],
 k_doc:['Документ','Dokument','Document','Dokument','Belge','Document','Documento'],k_book:['Книга','Buch','Book','Książka','Kitap','Livre','Libro'],k_id:['Удостоверение','Ausweis','ID card','Dowód','Kimlik','Pièce d’identité','Documento ID'],k_bcard:['Визитка','Visitenkarte','Business card','Wizytówka','Kartvizit','Carte de visite','Tarjeta'],k_board:['Доска','Tafel','Board','Tablica','Tahta','Tableau','Pizarra'],
 kh_doc:['письма, договоры','Briefe, Verträge','letters, contracts','listy, umowy','mektuplar, sözleşmeler','lettres, contrats','cartas, contratos'],kh_book:['разворот станет двумя страницами','Doppelseite wird zu zwei Seiten','a spread becomes two pages','rozkładówka → dwie strony','çift sayfa → iki sayfa','une double page → deux pages','una doble página → dos páginas'],
 kh_id:['сначала лицевая сторона','zuerst die Vorderseite','front side first','najpierw przód','önce ön yüz','d’abord le recto','primero el anverso'],kh_bcard:['сразу в контакты','direkt in die Kontakte','straight to contacts','prosto do kontaktów','doğrudan kişilere','directement dans les contacts','directo a contactos'],kh_board:['доска или записка','Tafel oder Notiz','whiteboard or note','tablica lub notatka','tahta veya not','tableau ou note','pizarra o nota'],
 idBack:['Теперь обратная сторона','Jetzt die Rückseite','Now the back side','Teraz tył','Şimdi arka yüz','Maintenant le verso','Ahora el reverso'],
 erase:['Ластик','Radierer','Eraser','Gumka','Silgi','Gomme','Borrador'],eraseH:['Проведите по пятну, пометке или пальцу на краю — станет белым. ↶ — отменить.','Über Fleck, Notiz oder Finger am Rand wischen – wird weiß. ↶ – rückgängig.','Rub over a stain, mark or finger at the edge — it turns white. ↶ — undo.','Przeciągnij po plamie — zrobi się biało. ↶ — cofnij.','Lekenin üzerinden geçin — beyaz olur. ↶ — geri al.','Passez sur la tache — elle devient blanche. ↶ — annuler.','Pasa sobre la mancha — queda blanca. ↶ — deshacer.'],
 sign:['Подпись','Unterschrift','Signature','Podpis','İmza','Signature','Firma'],signNew:['Новая подпись','Neue Unterschrift','New signature','Nowy podpis','Yeni imza','Nouvelle signature','Nueva firma'],
 signH:['Распишитесь пальцем. Подпись хранится только на этом телефоне.','Mit dem Finger unterschreiben. Die Unterschrift bleibt nur auf diesem Telefon.','Sign with your finger. The signature stays on this phone only.','Podpisz się palcem. Podpis zostaje tylko na tym telefonie.','Parmağınızla imzalayın. İmza yalnızca bu telefonda kalır.','Signez du doigt. La signature reste sur ce téléphone.','Firma con el dedo. La firma queda solo en este teléfono.'],
 signP:['Коснитесь места, где нужна подпись · тяните, чтобы сдвинуть','Tippen, wo die Unterschrift hin soll · ziehen zum Verschieben','Tap where the signature goes · drag to move','Dotknij miejsca podpisu · przeciągnij, aby przesunąć','İmzanın yerine dokunun · taşımak için sürükleyin','Touchez l’endroit de la signature · glissez pour déplacer','Toca donde va la firma · arrastra para mover'],
 pdfN:['Обычный','Normal','Normal','Zwykły','Normal','Normal','Normal'],pdfNs:['лучшее качество, для печати','beste Qualität, zum Drucken','best quality, for printing','najlepsza jakość, do druku','en iyi kalite, baskı için','meilleure qualité, impression','mejor calidad, para imprimir'],
 pdfS:['Сжатый для почты','Klein für E-Mail','Small for e-mail','Mały do e-maila','E-posta için küçük','Léger pour e-mail','Ligero para correo'],pdfSs:['меньше размер, текст читается','kleiner, Text bleibt lesbar','smaller, text stays readable','mniejszy, tekst czytelny','daha küçük, metin okunur','plus petit, texte lisible','más pequeño, texto legible'],
 cancel:['Отмена','Abbrechen','Cancel','Anuluj','İptal','Annuler','Cancelar'],
 cFirst:['Имя','Vorname','First name','Imię','Ad','Prénom','Nombre'],cLast:['Фамилия','Nachname','Last name','Nazwisko','Soyad','Nom','Apellido'],cCo:['Фирма','Firma','Company','Firma','Şirket','Entreprise','Empresa'],cRole:['Должность','Position','Position','Stanowisko','Pozisyon','Fonction','Cargo'],
 cPh:['Телефон','Telefon','Phone','Telefon','Telefon','Téléphone','Teléfono'],cPh2:['Телефон 2','Telefon 2','Phone 2','Telefon 2','Telefon 2','Téléphone 2','Teléfono 2'],cMail:['E-mail','E-Mail','E-mail','E-mail','E-posta','E-mail','Correo'],cWeb:['Сайт','Website','Website','Strona','Web sitesi','Site','Web'],cAddr:['Адрес','Adresse','Address','Adres','Adres','Adresse','Dirección'],
 cChk:['Прочитано с визитки — проверьте имя и номера.','Von der Karte gelesen – Name und Nummern prüfen.','Read from the card — check the name and numbers.','Odczytano — sprawdź imię i numery.','Karttan okundu — ad ve numaraları kontrol edin.','Lu sur la carte — vérifiez nom et numéros.','Leído de la tarjeta — revisa nombre y números.'],
 cVcf:['Отправить как контакт (vCard)','Als Kontakt teilen (vCard)','Share as contact (vCard)','Udostępnij jako kontakt','Kişi olarak paylaş','Partager comme contact','Compartir como contacto'],cSave:['Сохранить в «Люди»','In „Menschen“ speichern','Save to “People”','Zapisz w „Ludzie”','“Kişiler”e kaydet','Enregistrer dans « Personnes »','Guardar en «Personas»'],
 cOk:['Контакт сохранён ✓','Kontakt gespeichert ✓','Contact saved ✓','Zapisano kontakt ✓','Kişi kaydedildi ✓','Contact enregistré ✓','Contacto guardado ✓'],cNone:['Не найдено ни имени, ни фирмы — впишите хотя бы одно','Weder Name noch Firma erkannt – bitte eintragen','No name or company found — please enter one','Nie znaleziono imienia ani firmy','Ad veya şirket bulunamadı','Ni nom ni entreprise trouvés','No se encontró nombre ni empresa'],
 hShot:['Снять документ','Dokument aufnehmen','Scan a document','Zeskanuj dokument','Belge tara','Numériser','Escanear'],hShotS:['камера сама найдёт лист','die Kamera findet das Blatt','the camera finds the sheet','aparat sam znajdzie kartkę','kamera sayfayı bulur','l’appareil trouve la feuille','la cámara encuentra la hoja'],
 hFind:['Найти в тексте всех документов','In allen Dokumenten suchen','Search the text of all documents','Szukaj w tekście dokumentów','Tüm belgelerde ara','Chercher dans tous les documents','Buscar en todos los documentos'],
 hRecent:['Последние','Zuletzt','Recent','Ostatnie','Son','Récents','Recientes'],hFound:['Найдено','Gefunden','Found','Znaleziono','Bulunan','Trouvé','Encontrado'],
 hEmpty:['Здесь появятся ваши сканы','Hier erscheinen Ihre Scans','Your scans will appear here','Tu pojawią się skany','Taramalarınız burada görünecek','Vos scans apparaîtront ici','Aquí aparecerán tus escaneos'],noRes:['Ничего не найдено','Nichts gefunden','Nothing found','Nic nie znaleziono','Bulunamadı','Rien trouvé','Nada encontrado'],
 lockOk:['Сохранено ✓ — после входа Батлер разложит по местам','Gespeichert ✓ – nach der Anmeldung sortiert der Butler','Saved ✓ — the butler sorts it after sign-in','Zapisano ✓ — po zalogowaniu kamerdyner posortuje','Kaydedildi ✓ — girişten sonra uşak düzenler','Enregistré ✓ — trié après la connexion','Guardado ✓ — se ordena al iniciar sesión'],
 pgN:['Страница %n','Seite %n','Page %n','Strona %n','Sayfa %n','Page %n','Página %n'],
 ready:['Готово','Fertig','Done','Gotowe','Tamam','Terminé','Listo'],
 pgOk:['Страница %n ✓ — снимайте следующую','Seite %n ✓ – nächste aufnehmen','Page %n ✓ — take the next one','Strona %n ✓ — kolejna','Sayfa %n ✓ — sıradaki','Page %n ✓ — la suivante','Página %n ✓ — la siguiente'],
 docT:['Документ','Dokument','Document','Dokument','Belge','Document','Documento'],
 nameP:['Название, например «Finanzamt · Bescheid 2025»','Name, z. B. „Finanzamt · Bescheid 2025“','Name, e.g. “Tax office · notice 2025”','Nazwa, np. „Urząd skarbowy 2025”','Ad, ör. “Vergi dairesi 2025”','Nom, p. ex. « Impôts 2025 »','Nombre, p. ej. «Hacienda 2025»'],
 tipM:['Нажмите страницу — править · держите и тащите — поменять порядок','Seite antippen – bearbeiten · halten und ziehen – Reihenfolge','Tap a page to edit · hold and drag to reorder','Dotknij — edytuj · przytrzymaj i przeciągnij — kolejność','Dokun — düzenle · basılı tut ve sürükle — sıra','Touchez pour modifier · maintenez et glissez pour l’ordre','Toca para editar · mantén y arrastra para ordenar'],
 tip1:['Нажмите страницу, чтобы поправить','Seite antippen zum Bearbeiten','Tap the page to edit','Dotknij strony, aby edytować','Düzenlemek için dokunun','Touchez la page pour modifier','Toca la página para editar'],
 txt:['Текст','Text','Text','Tekst','Metin','Texte','Texto'],
 share:['PDF · поделиться','PDF · teilen','PDF · share','PDF · udostępnij','PDF · paylaş','PDF · partager','PDF · compartir'],
 saveDoc:['Сохранить в «Документы»','In „Dokumente“ speichern','Save to “Documents”','Zapisz w „Dokumentach”','“Belgeler”e kaydet','Enregistrer dans « Documents »','Guardar en «Documentos»'],
 closeQ:['Закрыть сканер? Снятые страницы не сохранятся.','Scanner schließen? Die Seiten werden nicht gespeichert.','Close the scanner? The pages will not be saved.','Zamknąć skaner? Strony nie zostaną zapisane.','Tarayıcı kapatılsın mı? Sayfalar kaydedilmez.','Fermer le scanner ? Les pages ne seront pas enregistrées.','¿Cerrar el escáner? Las páginas no se guardarán.'],
 ocrT:['Распознаю текст','Text wird erkannt','Reading the text','Rozpoznaję tekst','Metin okunuyor','Lecture du texte','Leyendo el texto'],
 pgOf:['Страница %a из %b…','Seite %a von %b …','Page %a of %b…','Strona %a z %b…','Sayfa %a / %b…','Page %a sur %b…','Página %a de %b…'],
 ocrS:['Немецкий и язык приложения · только на этом телефоне','Deutsch und App-Sprache · nur auf diesem Telefon','German and the app language · on this phone only','Niemiecki i język aplikacji · tylko na tym telefonie','Almanca ve uygulama dili · yalnızca bu telefonda','Allemand et langue de l’app · sur ce téléphone','Alemán y el idioma de la app · solo en este teléfono'],
 stop:['Остановить','Stoppen','Stop','Zatrzymaj','Durdur','Arrêter','Detener'],
 allP:['Все страницы','Alle Seiten','All pages','Wszystkie strony','Tüm sayfalar','Toutes les pages','Todas las páginas'],
 noTxt:['Текст не найден','Kein Text gefunden','No text found','Nie znaleziono tekstu','Metin bulunamadı','Aucun texte trouvé','No se encontró texto'],
 chk:['Цифры и суммы выделены — сверьте их со сканом. Текст можно поправить прямо здесь.','Zahlen und Beträge sind markiert – bitte mit dem Scan vergleichen. Text hier direkt korrigierbar.','Numbers and amounts are highlighted — check them against the scan. You can edit the text here.','Liczby i kwoty są wyróżnione — sprawdź je ze skanem.','Sayılar ve tutarlar işaretli — taramayla karşılaştırın.','Chiffres et montants surlignés — vérifiez-les avec le scan.','Cifras e importes resaltados — compruébalos con el escaneo.'],
 copy:['Копировать','Kopieren','Copy','Kopiuj','Kopyala','Copier','Copiar'],
 sendT:['Отправить текстом','Als Text senden','Send as text','Wyślij jako tekst','Metin olarak gönder','Envoyer en texte','Enviar como texto'],
 toNote:['В заметки','Zu Notizen','To notes','Do notatek','Notlara','Vers les notes','A notas'],
 copied:['Скопировано ✓','Kopiert ✓','Copied ✓','Skopiowano ✓','Kopyalandı ✓','Copié ✓','Copiado ✓'],
 noted:['Сохранено в заметках ✓','In Notizen gespeichert ✓','Saved to notes ✓','Zapisano w notatkach ✓','Notlara kaydedildi ✓','Enregistré dans les notes ✓','Guardado en notas ✓'],
 ocrErr:['Не удалось распознать текст на этом устройстве','Text konnte auf diesem Gerät nicht erkannt werden','Could not read the text on this device','Nie udało się rozpoznać tekstu','Metin bu cihazda okunamadı','Impossible de lire le texte sur cet appareil','No se pudo leer el texto en este dispositivo'],
 sm:['Разгладить','Glätten','Smooth','Wygładź','Düzleştir','Lisser','Alisar'],
 smS:['для помятых листов · выпрямить строки','für zerknitterte Blätter · Zeilen begradigen','for crumpled sheets · straighten the lines','dla pogniecionych kartek · prostuje wiersze','buruşuk sayfalar için · satırları düzeltir','pour feuilles froissées · lignes droites','para hojas arrugadas · endereza las líneas'],
 noteS:['Выровнено · строки выпрямлены · складки убраны','Begradigt · Zeilen geglättet · Knicke entfernt','Straightened · lines smoothed · creases removed','Wyprostowano · wiersze wygładzone','Düzeltildi · satırlar düzleştirildi','Redressé · lignes lissées · plis retirés','Enderezado · líneas alisadas · pliegues quitados'],
 del:['Удалить','Löschen','Delete','Usuń','Sil','Supprimer','Eliminar'],
 noteO:['Оригинал · фото без обработки — для чистого листа выберите «Документ»','Original · unbearbeitetes Foto – für ein sauberes Blatt „Dokument“ wählen','Original · untouched photo — choose “Document” for a clean sheet','Oryginał · zdjęcie bez obróbki — wybierz „Dokument”','Orijinal · işlenmemiş fotoğraf — temiz sayfa için “Belge”yi seçin','Original · photo non traitée — choisissez « Document »','Original · foto sin procesar — elige «Documento»'],
 arc:['Все документы','Alle Dokumente','All documents','Wszystkie dokumenty','Tüm belgeler','Tous les documents','Todos los documentos'],
 qscan:['📄 Сканировать документ','📄 Dokument scannen','📄 Scan a document','📄 Skanuj dokument','📄 Belge tara','📄 Scanner un document','📄 Escanear documento'],
 dept:['Сканер','Scanner','Scanner','Skaner','Tarayıcı','Scanner','Escáner'],deptS:['скан · файлы · удостоверение · визитка','Scan · Dateien · Ausweis · Visitenkarte','scan · files · ID · business card','skan · pliki · dowód · wizytówka','tarama · dosyalar · kimlik · kartvizit','scan · fichiers · pièce d’identité · carte','escaneo · archivos · ID · tarjeta'],
 none:['Лист не найден — рамка на весь снимок, поправьте углы','Kein Blatt erkannt – Rahmen auf ganzes Bild, Ecken anpassen','No sheet found — frame covers the whole photo, adjust the corners','Nie znaleziono kartki — popraw rogi','Sayfa bulunamadı — köşeleri ayarlayın','Aucune feuille — ajustez les coins','No se encontró hoja — ajusta las esquinas']};
const sct=(k,o)=>{let t=cv5n(SC[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};

/* ---------- image maths ---------- */
const scLum=(d,n)=>{const L=new Float32Array(n);for(let p=0,j=0;p<n;p++,j+=4)L[p]=.299*d[j]+.587*d[j+1]+.114*d[j+2];return L};
function scBox(a,w,h,r){if(r<1)return a;const t=new Float32Array(a.length),o=new Float32Array(a.length),n=2*r+1;
 for(let y=0;y<h;y++){let s=0;const row=y*w;for(let x=-r;x<=r;x++)s+=a[row+Math.min(w-1,Math.max(0,x))];for(let x=0;x<w;x++){t[row+x]=s/n;s+=a[row+Math.min(w-1,x+r+1)]-a[row+Math.max(0,x-r)]}}
 for(let x=0;x<w;x++){let s=0;for(let y=-r;y<=r;y++)s+=t[Math.min(h-1,Math.max(0,y))*w+x];for(let y=0;y<h;y++){o[y*w+x]=s/n;s+=t[Math.min(h-1,y+r+1)*w+x]-t[Math.max(0,y-r)*w+x]}}return o}
function scOtsu(a){const H=new Float64Array(256);let mn=1e9,mx=-1e9;for(const v of a){if(v<mn)mn=v;if(v>mx)mx=v}const k=255/Math.max(1e-6,mx-mn);for(const v of a)H[Math.min(255,Math.max(0,((v-mn)*k)|0))]++;
 const N=a.length;let sum=0;for(let i2=0;i2<256;i2++)sum+=i2*H[i2];let sB=0,wB=0,best=0,th=128;for(let t=0;t<256;t++){wB+=H[t];if(!wB)continue;const wF=N-wB;if(!wF)break;sB+=t*H[t];const mB=sB/wB,mF=(sum-sB)/wF,b=wB*wF*(mB-mF)*(mB-mF);if(b>best){best=b;th=t}}return mn+th/k}
function scHull(P){P.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);const cr=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);const lo=[],up=[];
 for(const p of P){while(lo.length>=2&&cr(lo[lo.length-2],lo[lo.length-1],p)<=0)lo.pop();lo.push(p)}for(let k=P.length-1;k>=0;k--){const p=P[k];while(up.length>=2&&cr(up[up.length-2],up[up.length-1],p)<=0)up.pop();up.push(p)}up.pop();lo.pop();return lo.concat(up)}
const scArea=q=>{let s=0;for(let k=0;k<q.length;k++){const a=q[k],b=q[(k+1)%q.length];s+=a[0]*b[1]-b[0]*a[1]}return Math.abs(s)/2};
function scBestQuad(h){let H=h;if(H.length>28){const st=H.length/28;H=Array.from({length:28},(_,k)=>h[Math.floor(k*st)])}const n=H.length;if(n<4)return null;let best=0,bq=null;
 for(let a=0;a<n;a++)for(let b=a+1;b<n;b++)for(let c=b+1;c<n;c++)for(let d=c+1;d<n;d++){const q=[H[a],H[b],H[c],H[d]],A=scArea(q);if(A>best){best=A;bq=q}}return bq}
function scOrder(q){const c=[q.reduce((s,p)=>s+p[0],0)/4,q.reduce((s,p)=>s+p[1],0)/4];const s=q.slice().sort((a,b)=>Math.atan2(a[1]-c[1],a[0]-c[0])-Math.atan2(b[1]-c[1],b[0]-c[0]));
 let k=0,m=1e18;s.forEach((p,j)=>{const v=p[0]+p[1];if(v<m){m=v;k=j}});return[0,1,2,3].map(j=>s[(k+j)%4])}/* tl,tr,br,bl */
/* finds the paper: bright and colourless against the table; returns corners (0..1) and the mask for edge curves */
function scSeg(src,sw,sh,side){const k=side/Math.max(sw,sh),w=Math.max(8,Math.round(sw*k)),h=Math.max(8,Math.round(sh*k));const cv=document.createElement('canvas');cv.width=w;cv.height=h;const x=cv.getContext('2d',{willReadFrequently:!0});x.drawImage(src,0,0,w,h);
 const d=x.getImageData(0,0,w,h).data,n=w*h,S=new Float32Array(n);for(let p=0,j=0;p<n;p++,j+=4){const r=d[j],g2=d[j+1],b=d[j+2],mx=Math.max(r,g2,b),mn=Math.min(r,g2,b);S[p]=(.299*r+.587*g2+.114*b)-1.1*(mx-mn)}
 const B=scBox(S,w,h,Math.max(1,Math.round(side/160))),th=scOtsu(B),M=new Uint8Array(n);for(let p=0;p<n;p++)M[p]=B[p]>th?1:0;
 const lab=new Int32Array(n).fill(-1);let bestA=0,bestId=-1;const stack=new Int32Array(n);
 for(let p0=0;p0<n;p0++){if(!M[p0]||lab[p0]>=0)continue;let sp=0,a=0;stack[sp++]=p0;lab[p0]=p0;while(sp){const p=stack[--sp];a++;const px=p%w,py=(p-px)/w;
  if(px>0&&M[p-1]&&lab[p-1]<0){lab[p-1]=p0;stack[sp++]=p-1}if(px<w-1&&M[p+1]&&lab[p+1]<0){lab[p+1]=p0;stack[sp++]=p+1}if(py>0&&M[p-w]&&lab[p-w]<0){lab[p-w]=p0;stack[sp++]=p-w}if(py<h-1&&M[p+w]&&lab[p+w]<0){lab[p+w]=p0;stack[sp++]=p+w}}
  if(a>bestA){bestA=a;bestId=p0}}
 if(bestA<n*.1||bestA>n*.985)return null;const mask=new Uint8Array(n);const P=[];
 for(let y=0;y<h;y++){let l=-1,r=-1;for(let x2=0;x2<w;x2++){if(lab[y*w+x2]===bestId){mask[y*w+x2]=1;if(l<0)l=x2;r=x2}}if(l>=0){P.push([l,y]);P.push([r+1,y])}}
 const hull=scHull(P);const q=scBestQuad(hull);if(!q)return null;const qa=scArea(q);if(qa<n*.1)return null;
 /* fill holes (text) inside the hull so the edge search only sees the real border */
 let mnx=w,mny=h,mxx=0,mxy=0;for(const p of P){if(p[0]<mnx)mnx=p[0];if(p[0]>mxx)mxx=p[0];if(p[1]<mny)mny=p[1];if(p[1]>mxy)mxy=p[1]}const inside=mnx>w*.012&&mny>h*.012&&mxx<w*.988&&mxy<h*.988;
 return{q:scOrder(q).map(p=>[p[0]/w,p[1]/h]),mask,mw:w,mh:h,fill:qa/n,clean:inside&&qa/bestA>.9&&qa/bestA<1.12}}
/* v239: edge finder — works also for white paper on a light table: looks for the four long straight borders of the sheet */
function scEdges(src,sw,sh,side){const k=side/Math.max(sw,sh),w=Math.max(8,Math.round(sw*k)),h=Math.max(8,Math.round(sh*k));const cv=document.createElement('canvas');cv.width=w;cv.height=h;const x=cv.getContext('2d',{willReadFrequently:!0});x.drawImage(src,0,0,w,h);
 const d=x.getImageData(0,0,w,h).data,n=w*h;let L=scLum(d,n);L=scBox(scBox(L,w,h,1),w,h,1);const M=new Float32Array(n),A=new Float32Array(n);
 for(let y=1;y<h-1;y++)for(let x2=1;x2<w-1;x2++){const p=y*w+x2;const gx=(L[p-w+1]+2*L[p+1]+L[p+w+1])-(L[p-w-1]+2*L[p-1]+L[p+w-1]),gy=(L[p+w-1]+2*L[p+w]+L[p+w+1])-(L[p-w-1]+2*L[p-w]+L[p-w+1]);M[p]=Math.hypot(gx,gy);A[p]=Math.atan2(gy,gx)}
 const srt=Float32Array.from(M).sort();const thr=Math.max(8,srt[Math.floor(n*.8)]);
 const NT=180,diag=Math.ceil(Math.hypot(w,h)),NR=2*diag+1,acc=new Float32Array(NT*NR),CS=new Float32Array(NT),SN=new Float32Array(NT);for(let t=0;t<NT;t++){CS[t]=Math.cos(t*Math.PI/NT);SN[t]=Math.sin(t*Math.PI/NT)}
 for(let y=2;y<h-2;y++)for(let x2=2;x2<w-2;x2++){const p=y*w+x2,m=M[p];if(m<thr)continue;let a=A[p];if(a<0)a+=Math.PI;const t0=Math.round(a/Math.PI*NT);const wt=Math.min(m,thr*4);
  for(let dt=-5;dt<=5;dt++){const t=((t0+dt)%NT+NT)%NT;const r=Math.round(x2*CS[t]+y*SN[t])+diag;acc[t*NR+r]+=wt}}
 const peaks=[];for(let t=0;t<NT;t++)for(let r=0;r<NR;r++){const v=acc[t*NR+r];if(v<thr*8)continue;let mx=!0;for(let dt=-4;dt<=4&&mx;dt++)for(let dr=-6;dr<=6;dr++){if(!dt&&!dr)continue;const tt=t+dt,rr=r+dr;let T2=tt,R2=rr;if(tt<0){T2=tt+NT;R2=2*diag-rr}else if(tt>=NT){T2=tt-NT;R2=2*diag-rr}if(R2<0||R2>=NR)continue;if(acc[T2*NR+R2]>v){mx=!1;break}}if(mx)peaks.push([v,t,r-diag])}
 peaks.sort((a,b)=>b[0]-a[0]);const V=[],Hh=[];for(const[v,t,r]of peaks){const th=t*Math.PI/NT,isV=Math.abs(Math.cos(th))>Math.abs(Math.sin(th)),G=isV?V:Hh;if(G.length<14)G.push({c:Math.cos(th),s:Math.sin(th),r});if(V.length>=14&&Hh.length>=14)break}
 const X=(a,b)=>{const den=a.c*b.s-a.s*b.c;if(Math.abs(den)<1e-6)return null;return[(a.r*b.s-b.r*a.s)/den,(a.c*b.r-b.c*a.r)/den]};
 const sup=(P,Q)=>{const len=Math.hypot(Q[0]-P[0],Q[1]-P[1]);if(len<8)return 0;const nx=-(Q[1]-P[1])/len,ny=(Q[0]-P[0])/len;let ok=0,N=48;for(let j=0;j<N;j++){const t=(j+.5)/N;let best=0;for(let o=-2;o<=2;o++){const xx=Math.round(P[0]+(Q[0]-P[0])*t+nx*o),yy=Math.round(P[1]+(Q[1]-P[1])*t+ny*o);if(xx<1||yy<1||xx>=w-1||yy>=h-1)continue;const pp=yy*w+xx;if(M[pp]>=thr*.4){const al=Math.abs(Math.cos(A[pp])*nx+Math.sin(A[pp])*ny);if(al>.85)best=1}}ok+=best}return ok/N};
 const score=q=>{const o=scOrder(q);const ar=scArea(o)/n;if(ar<.12||ar>.995)return null;for(const p of o)if(p[0]<-w*.03||p[1]<-h*.03||p[0]>w*1.03||p[1]>h*1.03)return null;
  for(let j=0;j<4;j++){const a=o[j],b=o[(j+1)%4],c=o[(j+2)%4];const cr=(b[0]-a[0])*(c[1]-b[1])-(b[1]-a[1])*(c[0]-b[0]);if(cr<=0)return null;const v1=[a[0]-b[0],a[1]-b[1]],v2=[c[0]-b[0],c[1]-b[1]];const cs=(v1[0]*v2[0]+v1[1]*v2[1])/Math.hypot(...v1)/Math.hypot(...v2);if(Math.abs(cs)>.5)return null}
  const S=[0,1,2,3].map(j=>sup(o[j],o[(j+1)%4]));const mn=Math.min(...S),me=S.reduce((a,b)=>a+b)/4;if(mn<.35)return null;
  const cx=(o[0][0]+o[1][0]+o[2][0]+o[3][0])/4,cy=(o[0][1]+o[1][1]+o[2][1]+o[3][1])/4,smp=[];for(let a=0;a<=10;a++)for(let b=0;b<=10;b++){const u=.15+.7*a/10,v=.15+.7*b/10;const xx=Math.round((1-u)*(1-v)*o[0][0]+u*(1-v)*o[1][0]+u*v*o[2][0]+(1-u)*v*o[3][0]),yy=Math.round((1-u)*(1-v)*o[0][1]+u*(1-v)*o[1][1]+u*v*o[2][1]+(1-u)*v*o[3][1]);if(xx>=0&&yy>=0&&xx<w&&yy<h)smp.push(L[yy*w+xx])}smp.sort((a,b)=>a-b);const pb=smp[Math.floor(smp.length*.8)]||1;
  let bf=1;for(let j=0;j<4;j++){const P=o[j],Q=o[(j+1)%4],len=Math.hypot(Q[0]-P[0],Q[1]-P[1]);let nx=-(Q[1]-P[1])/len,ny=(Q[0]-P[0])/len;if(nx*(cx-(P[0]+Q[0])/2)+ny*(cy-(P[1]+Q[1])/2)<0){nx=-nx;ny=-ny}const B=[],O=[];for(let t=.1;t<=.9;t+=.04)for(let off=4;off<=8;off+=2){const bx=P[0]+(Q[0]-P[0])*t,by=P[1]+(Q[1]-P[1])*t;let xx=Math.round(bx+nx*off),yy=Math.round(by+ny*off);if(xx>=0&&yy>=0&&xx<w&&yy<h)B.push(L[yy*w+xx]);xx=Math.round(bx-nx*off);yy=Math.round(by-ny*off);if(xx>=0&&yy>=0&&xx<w&&yy<h)O.push(L[yy*w+xx])}B.sort((a,b)=>a-b);O.sort((a,b)=>a-b);const iv=B[Math.floor(B.length*.7)]||0,r=iv/pb;bf*=Math.max(.08,Math.min(1,(r-.8)/.1));}
  return{o,sc:(mn*.6+me*.4)*Math.pow(ar,.6)*bf,mn,me,bf}};
 let best=null;for(let a=0;a<V.length;a++)for(let b=a+1;b<V.length;b++)for(let c=0;c<Hh.length;c++)for(let e=c+1;e<Hh.length;e++){const q=[X(V[a],Hh[c]),X(V[b],Hh[c]),X(V[b],Hh[e]),X(V[a],Hh[e])];if(q.some(z=>!z))continue;const r=score(q);if(r&&(!best||r.sc>best.sc))best=r}
 return{best,score,w,h,V,Hh,X,M,A,thr,L}}
function scDetect(src,sw,sh,side){let seg=null,ed=null;try{seg=scSeg(src,sw,sh,side)}catch{}try{ed=scEdges(src,sw,sh,Math.min(side,420))}catch{}
 let segS=null;if(seg&&ed){const q=seg.q.map(p=>[p[0]*ed.w,p[1]*ed.h]);segS=ed.score(q)}
 if(seg&&seg.clean){seg.conf=Math.max(.6,segS?segS.mn:.6);return seg}
 const e=ed&&ed.best;if(e&&(!segS||e.sc>segS.sc*1.08)){/* the segmented mask only helps with bent edges when it agrees with the found borders */
  let agree=!1;if(seg){const qs=scOrder(seg.q.map(p=>[p[0]*ed.w,p[1]*ed.h]));agree=qs.every((p,j)=>Math.hypot(p[0]-e.o[j][0],p[1]-e.o[j][1])<Math.max(ed.w,ed.h)*.03)}
  return{q:e.o.map(p=>[p[0]/ed.w,p[1]/ed.h]),mask:agree?seg.mask:null,mw:agree?seg.mw:0,mh:agree?seg.mh:0,fill:scArea(e.o)/(ed.w*ed.h),conf:e.mn}}
 if(seg){seg.conf=segS?segS.mn:.3;return seg}return null}
/* v240: the user puts the corners roughly — the butler then snaps each side to the real paper border nearby and follows a bent border */
function scRefine(src,q){let E=null;try{E=scEdges(src,src.width,src.height,640)}catch{}if(!E)return{q,E:null};const k=E.w/src.width;const Q=q.map(p=>[p[0]*k,p[1]*k]);const diag=Math.hypot(E.w,E.h),lines=E.V.concat(E.Hh);
 const side=j=>{const P=Q[j],R=Q[(j+1)%4];const dx=R[0]-P[0],dy=R[1]-P[1],len=Math.hypot(dx,dy);let best=null,bs=0;
  for(const l of lines){/* line: x·c + y·s = r ; direction (−s, c) */const cosA=Math.abs((-l.s*dx+l.c*dy)/len);if(cosA<Math.cos(8*Math.PI/180))continue;const d1=Math.abs(P[0]*l.c+P[1]*l.s-l.r),d2=Math.abs(R[0]*l.c+R[1]*l.s-l.r);if(Math.max(d1,d2)>diag*.022)continue;
   let sup=0,s0=0,s1=0,N=40;for(let t=0;t<N;t++){const u=(t+.5)/N,x0=P[0]+dx*u,y0=P[1]+dy*u,dd=x0*l.c+y0*l.s-l.r;let hit=0;for(let o=-1;o<=1&&!hit;o++){const xx=Math.round(x0-dd*l.c+l.c*o),yy=Math.round(y0-dd*l.s+l.s*o);if(xx<1||yy<1||xx>=E.w-1||yy>=E.h-1)continue;const pp=yy*E.w+xx;if(E.M[pp]>=E.thr*.4&&Math.abs(Math.cos(E.A[pp])*l.c+Math.sin(E.A[pp])*l.s)>.85)hit=1}sup+=hit;if(u<.25)s0+=hit;if(u>.75)s1+=hit}
   if(s0<N*.25*.5||s1<N*.25*.5)continue;
   if(sup/N<=.35)continue;/* paper on the inner side, something darker on the outer side — not a printed line or a fold */
   const cx=(Q[0][0]+Q[1][0]+Q[2][0]+Q[3][0])/4,cy=(Q[0][1]+Q[1][1]+Q[2][1]+Q[3][1])/4;let nx=l.c,ny=l.s;const mxp=(P[0]+R[0])/2,myp=(P[1]+R[1])/2;if(nx*(cx-mxp)+ny*(cy-myp)<0){nx=-nx;ny=-ny}
   const I=[],O=[];for(let t=.1;t<=.9;t+=.05){const x0=P[0]+dx*t,y0=P[1]+dy*t,dd=x0*l.c+y0*l.s-l.r,bx=x0-dd*l.c,by=y0-dd*l.s;for(let off=3;off<=6;off+=1.5){let xx=Math.round(bx+nx*off),yy=Math.round(by+ny*off);if(xx>=0&&yy>=0&&xx<E.w&&yy<E.h)I.push(E.L[yy*E.w+xx]);xx=Math.round(bx-nx*off);yy=Math.round(by-ny*off);if(xx>=0&&yy>=0&&xx<E.w&&yy<E.h)O.push(E.L[yy*E.w+xx])}}
   if(O.length>4&&I.length>4){I.sort((a,b)=>a-b);O.sort((a,b)=>a-b);const iv=I[Math.floor(I.length*.7)],ov=O[Math.floor(O.length*.7)];if(Math.abs(iv-ov)/Math.max(1,iv)<.015)continue}
   const sc=sup/N-(d1+d2)/2/(diag*.022)*.7;if(sc>bs){bs=sc;best=l}}return best};
 const L4=[0,1,2,3].map(side);let out=Q.map((p,j)=>{const a=L4[(j+3)%4],b=L4[j];if(!a||!b)return p;const x=E.X(a,b);if(!x||Math.hypot(x[0]-p[0],x[1]-p[1])>diag*.028)return p;return x});
 /* keep a snapped corner only if the two sheet edges at it really get better */
 const segS=(P,R)=>{const dx=R[0]-P[0],dy=R[1]-P[1],len=Math.hypot(dx,dy);if(len<6)return 0;const nx=-dy/len,ny=dx/len;let ok=0,N=40;for(let t=0;t<N;t++){const u=(t+.5)/N;let hit=0;for(let o=-1.5;o<=1.5&&!hit;o+=.75){const xx=Math.round(P[0]+dx*u+nx*o),yy=Math.round(P[1]+dy*u+ny*o);if(xx<1||yy<1||xx>=E.w-1||yy>=E.h-1)continue;const pp=yy*E.w+xx;if(E.M[pp]>=E.thr*.4&&Math.abs(Math.cos(E.A[pp])*nx+Math.sin(E.A[pp])*ny)>.85)hit=1}ok+=hit}return ok/N};
 out=out.map((p,j)=>{if(p===Q[j])return p;const pr=out[(j+3)%4],nx2=out[(j+1)%4];const before=segS(pr,Q[j])+segS(Q[j],nx2),after=segS(pr,p)+segS(p,nx2);return after>before+.05?p:Q[j]});
 return{q:out.map(p=>[p[0]/k,p[1]/k]),E,k}}
/* bent borders from the edge picture (when the sheet is not a clean bright blob) */
function scBendsE(E,k,q){if(!E)return null;const Q=q.map(p=>[p[0]*k,p[1]*k]);const cx=(Q[0][0]+Q[1][0]+Q[2][0]+Q[3][0])/4,cy=(Q[0][1]+Q[1][1]+Q[2][1]+Q[3][1])/4,N=25,out=[];
 for(let s2=0;s2<4;s2++){const A=Q[s2],B=Q[(s2+1)%4],L=Math.hypot(B[0]-A[0],B[1]-A[1]);let nx=-(B[1]-A[1])/L,ny=(B[0]-A[0])/L;if(nx*((A[0]+B[0])/2-cx)+ny*((A[1]+B[1])/2-cy)<0){nx=-nx;ny=-ny}
  const R=Math.max(3,L*.045),raw=[];for(let j=0;j<N;j++){const t=j/(N-1),px=A[0]+(B[0]-A[0])*t,py=A[1]+(B[1]-A[1])*t;let bo=null,bm=E.thr*.5;for(let o=-R;o<=R;o+=.5){const xx=Math.round(px+nx*o),yy=Math.round(py+ny*o);if(xx<1||yy<1||xx>=E.w-1||yy>=E.h-1)continue;const pp=yy*E.w+xx,m=E.M[pp];if(m>bm&&Math.abs(Math.cos(E.A[pp])*nx+Math.sin(E.A[pp])*ny)>.8){bm=m;bo=o}}raw.push(bo)}
  const good=raw.filter(v=>v!==null).length;if(good<N*.75){out.push({nx,ny,o:new Float32Array(N)});continue}
  const f=raw.map(v=>v===null?0:v);const med=f.map((_,j)=>{const w=f.slice(Math.max(0,j-2),j+3).sort((a,b)=>a-b);return w[w.length>>1]});
  const a0=med[0],a1=med[N-1];const o=new Float32Array(N);let mx=0,jump=0;for(let j=0;j<N;j++){o[j]=(med[j]-(a0+(a1-a0)*j/(N-1)))/k;mx=Math.max(mx,Math.abs(o[j]));if(j&&Math.abs(med[j]-med[j-1])>R*.35)jump++}
  if(jump>2||mx*k<L*.006)o.fill(0);out.push({nx,ny,o})}return out}
/* square → quad homography (Heckbert) */
function scHomo(q){const[x0,y0]=q[0],[x1,y1]=q[1],[x2,y2]=q[2],[x3,y3]=q[3];const dx1=x1-x2,dx2=x3-x2,dy1=y1-y2,dy2=y3-y2,sx=x0-x1+x2-x3,sy=y0-y1+y2-y3;let g3=0,h3=0;
 if(Math.abs(sx)>1e-9||Math.abs(sy)>1e-9){const den=dx1*dy2-dx2*dy1;g3=(sx*dy2-dx2*sy)/den;h3=(dx1*sy-sx*dy1)/den}
 const a=x1-x0+g3*x1,b=x3-x0+h3*x3,c=x0,d=y1-y0+g3*y1,e=y3-y0+h3*y3,f=y0;return(u,v)=>{const z=g3*u+h3*v+1;return[(a*u+b*v+c)/z,(d*u+e*v+f)/z]}}
/* how far each real sheet edge bends away from the straight line between its corners (pixels of the full image, along the outward normal) */
function scBends(det,q,W,H){if(!det||!det.mask)return null;const{mask,mw,mh}=det;const at=(x,y)=>{const xi=Math.round(x*mw/W),yi=Math.round(y*mh/H);return xi>=0&&yi>=0&&xi<mw&&yi<mh&&mask[yi*mw+xi]};
 const cx=(q[0][0]+q[1][0]+q[2][0]+q[3][0])/4,cy=(q[0][1]+q[1][1]+q[2][1]+q[3][1])/4,N=25,out=[];
 for(let s=0;s<4;s++){const A=q[s],Bp=q[(s+1)%4];const L=Math.hypot(Bp[0]-A[0],Bp[1]-A[1]);let nx=-(Bp[1]-A[1])/L,ny=(Bp[0]-A[0])/L;const mxp=(A[0]+Bp[0])/2,myp=(A[1]+Bp[1])/2;if(nx*(mxp-cx)+ny*(myp-cy)<0){nx=-nx;ny=-ny}
  const R=L*.06,step=Math.max(1,Math.max(W,H)/Math.max(mw,mh)/2),off=[];let good=0;
  for(let k=0;k<N;k++){const t=k/(N-1),px=A[0]+(Bp[0]-A[0])*t,py=A[1]+(Bp[1]-A[1])*t;let last=null;for(let o=-R;o<=R;o+=step){if(at(px+nx*o,py+ny*o))last=o}off.push(last);if(last!==null&&Math.abs(last)<R*.98)good++}
  if(good<N*.7){out.push({nx,ny,o:new Float32Array(N)});continue}
  for(let k=0;k<N;k++)if(off[k]===null)off[k]=0;const sm=off.map((_,k)=>{let s2=0,c=0;for(let j=-2;j<=2;j++){const v2=off[k+j];if(v2!==undefined){s2+=v2;c++}}return s2/c});
  const a0=sm[0],a1=sm[N-1];const o=new Float32Array(N);let mx=0;for(let k=0;k<N;k++){o[k]=sm[k]-(a0+(a1-a0)*k/(N-1));mx=Math.max(mx,Math.abs(o[k]))}
  if(mx<L*.006)o.fill(0);else{const cap=L*.05;for(let k=0;k<N;k++)o[k]=Math.max(-cap,Math.min(cap,o[k]))}out.push({nx,ny,o})}return out}
function scWarp(img,q,bends){const W0=img.width,H0=img.height;const dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);let w=Math.max(dist(q[0],q[1]),dist(q[3],q[2])),h=Math.max(dist(q[0],q[3]),dist(q[1],q[2]));
 {const r=w/h;for(const t of [1/Math.SQRT2,Math.SQRT2,8.5/11,11/8.5]){if(Math.abs(r-t)/t<.08){if(t<1)h=w/t;else w=h*t;break}}}const s=Math.min(1.25,2400/Math.max(w,h));w=Math.round(w*s);h=Math.round(h*s);const Hm=(()=>{const c0=[(q[0][0]+q[1][0]+q[2][0]+q[3][0])/4,(q[0][1]+q[1][1]+q[2][1]+q[3][1])/4];return scHomo(q.map(p=>[p[0]+(c0[0]-p[0])*.006,p[1]+(c0[1]-p[1])*.006]))})();
 const sc=document.createElement('canvas');sc.width=W0;sc.height=H0;const sx=sc.getContext('2d',{willReadFrequently:!0});sx.drawImage(img,0,0);const S=sx.getImageData(0,0,W0,H0).data;
 const N=25,ev=(o,t)=>{if(!o)return 0;const f=t*(N-1),i0=Math.floor(f),i1=Math.min(N-1,i0+1);return o[i0]+(o[i1]-o[i0])*(f-i0)};
 const map=(u,v)=>{let[x,y]=Hm(u,v);if(bends){const T=bends[0],Rr=bends[1],Bb=bends[2],Ll=bends[3];const t=ev(T.o,u),r=ev(Rr.o,v),b=ev(Bb.o,1-u),l=ev(Ll.o,1-v);
   x+=(1-v)*t*T.nx+u*r*Rr.nx+v*b*Bb.nx+(1-u)*l*Ll.nx;y+=(1-v)*t*T.ny+u*r*Rr.ny+v*b*Bb.ny+(1-u)*l*Ll.ny}return[x,y]};
 const G=16,gw=Math.ceil(w/G)+1,gh=Math.ceil(h/G)+1,GX=new Float32Array(gw*gh),GY=new Float32Array(gw*gh);for(let j=0;j<gh;j++)for(let i2=0;i2<gw;i2++){const p=map(Math.min(1,i2*G/w),Math.min(1,j*G/h));GX[j*gw+i2]=p[0];GY[j*gw+i2]=p[1]}
 const oc=document.createElement('canvas');oc.width=w;oc.height=h;const ox=oc.getContext('2d');const O=ox.createImageData(w,h),D=O.data;
 for(let y=0;y<h;y++){const gj=Math.min(gh-2,Math.floor(y/G)),fy=y/G-gj;for(let x=0;x<w;x++){const gi=Math.min(gw-2,Math.floor(x/G)),fx=x/G-gi,k0=gj*gw+gi;
  const X=(GX[k0]*(1-fx)+GX[k0+1]*fx)*(1-fy)+(GX[k0+gw]*(1-fx)+GX[k0+gw+1]*fx)*fy,Y=(GY[k0]*(1-fx)+GY[k0+1]*fx)*(1-fy)+(GY[k0+gw]*(1-fx)+GY[k0+gw+1]*fx)*fy;
  const xi=Math.max(0,Math.min(W0-2,Math.floor(X))),yi=Math.max(0,Math.min(H0-2,Math.floor(Y))),ax=Math.max(0,Math.min(1,X-xi)),ay=Math.max(0,Math.min(1,Y-yi));const p=(yi*W0+xi)*4,p2=p+W0*4,o=(y*w+x)*4;
  for(let c=0;c<3;c++)D[o+c]=(S[p+c]*(1-ax)+S[p+4+c]*ax)*(1-ay)+(S[p2+c]*(1-ax)+S[p2+4+c]*ax)*ay;D[o+3]=255}}
 ox.putImageData(O,0,0);return oc}
/* even paper: divide by the paper's own brightness (estimated without the text), so creases, shadows and uneven light vanish */
function scClean(cv,mode,strong){if(mode==='orig')return cv;const w=cv.width,h=cv.height;const x=cv.getContext('2d',{willReadFrequently:!0});const I=x.getImageData(0,0,w,h),d=I.data,n=w*h;
 const f=Math.max(8,Math.round(Math.max(w,h)/(strong?85:110))),bw=Math.ceil(w/f),bh=Math.ceil(h/f);const chans=mode==='doc'?1:3;const BG=[];
 for(let c=0;c<chans;c++){let b=new Float32Array(bw*bh);for(let by=0;by<bh;by++)for(let bx=0;bx<bw;bx++){let m=0;for(let y=by*f;y<Math.min(h,by*f+f);y+=2)for(let x2=bx*f;x2<Math.min(w,bx*f+f);x2+=2){const j=(y*w+x2)*4;const v=chans===1?(.299*d[j]+.587*d[j+1]+.114*d[j+2]):d[j+c];if(v>m)m=v}b[by*bw+bx]=m}
  for(let it=0;it<4;it++){const t=new Float32Array(b.length);for(let y=0;y<bh;y++)for(let x2=0;x2<bw;x2++){let m=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const yy=Math.min(bh-1,Math.max(0,y+dy)),xx=Math.min(bw-1,Math.max(0,x2+dx));if(b[yy*bw+xx]>m)m=b[yy*bw+xx]}t[y*bw+x2]=m}b=t}
  b=scBox(scBox(b,bw,bh,2),bw,bh,2);BG.push(b)}
 const bgAt=(b,x2,y)=>{const fx=Math.min(bw-1.001,Math.max(0,x2/f-.5)),fy=Math.min(bh-1.001,Math.max(0,y/f-.5)),i0=Math.floor(fx),j0=Math.floor(fy),ax=fx-i0,ay=fy-j0,k=j0*bw+i0;return(b[k]*(1-ax)+b[k+1]*ax)*(1-ay)+(b[k+bw]*(1-ax)+b[k+bw+1]*ax)*ay};
 for(let y=0;y<h;y++)for(let x2=0;x2<w;x2++){const j=(y*w+x2)*4;
  if(mode==='doc'){const L=.299*d[j]+.587*d[j+1]+.114*d[j+2];let v=L/Math.max(40,bgAt(BG[0],x2,y));v=strong?(v-.3)/(.75-.3):(v-.32)/(.8-.32);v=v<0?0:v>1?1:v;v=v*v*(3-2*v);const o=255*Math.pow(v,1.15);d[j]=d[j+1]=d[j+2]=o}
  else{for(let c=0;c<3;c++){let v=d[j+c]/Math.max(40,bgAt(BG[c],x2,y));v=strong?(v-.06)/(.84-.06):(v-.06)/(.88-.06);v=v<0?0:v>1?1:v;d[j+c]=255*Math.pow(v,1.08)}}}
 const oc=document.createElement('canvas');oc.width=w;oc.height=h;oc.getContext('2d').putImageData(I,0,0);
 if(mode==='doc'){/* light unsharp mask for crisp print */const o2=oc.getContext('2d',{willReadFrequently:!0}),J=o2.getImageData(0,0,w,h),e=J.data;const Lm=new Float32Array(n);for(let p=0;p<n;p++)Lm[p]=e[p*4];const Bl=scBox(Lm,w,h,1);for(let p=0;p<n;p++){const v=Math.max(0,Math.min(255,Lm[p]+.6*(Lm[p]-Bl[p])));e[p*4]=e[p*4+1]=e[p*4+2]=v}o2.putImageData(J,0,0)}
 return scEdgeWhite(oc)}
/* v247: what is left of the table, a shadow or a finger along the very border of the sheet turns white — only inside a narrow band at the border, so text and frames stay */
function scEdgeWhite(cv){try{const W=cv.width,H=cv.height,k=Math.min(1,640/Math.max(W,H)),w=Math.max(8,Math.round(W*k)),h=Math.max(8,Math.round(H*k));const sc=document.createElement('canvas');sc.width=w;sc.height=h;const sx=sc.getContext('2d',{willReadFrequently:!0});sx.drawImage(cv,0,0,w,h);const d=sx.getImageData(0,0,w,h).data,n=w*h;
 const band=Math.max(3,Math.round(Math.min(w,h)*.035)),ok=new Uint8Array(n);for(let y=0,p=0;y<h;y++)for(let x=0;x<w;x++,p++){if(x>=band&&y>=band&&x<w-band&&y<h-band)continue;const j=p*4;if(.299*d[j]+.587*d[j+1]+.114*d[j+2]<165)ok[p]=1}
 const seen=new Uint8Array(n),st=[];const push=p=>{if(ok[p]&&!seen[p]){seen[p]=1;st.push(p)}};for(let x=0;x<w;x++){push(x);push((h-1)*w+x)}for(let y=0;y<h;y++){push(y*w);push(y*w+w-1)}
 let cnt=0;while(st.length){const p=st.pop();cnt++;const x=p%w,y=(p-x)/w;if(x>0)push(p-1);if(x<w-1)push(p+1);if(y>0)push(p-w);if(y<h-1)push(p+w)}
 if(!cnt||cnt>n*.12)return cv;const X=cv.getContext('2d');X.fillStyle='#fff';const u=1/k;for(let y=0,p=0;y<h;y++)for(let x=0;x<w;x++,p++)if(seen[p])X.fillRect(Math.floor((x-1.5)*u),Math.floor((y-1.5)*u),Math.ceil(4*u),Math.ceil(4*u));return cv}catch(e){return cv}}
function scRot(cv){const o=document.createElement('canvas');o.width=cv.height;o.height=cv.width;const x=o.getContext('2d');x.translate(o.width,0);x.rotate(Math.PI/2);x.drawImage(cv,0,0);return o}

/* ---------- the scanner window ---------- */
const scIco={x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>',
 bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>',rot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>'};
/* ---------- v241: smoothing of crumpled pages — straightens wavy text lines ---------- */
/* how straight the text lines are: sharp horizontal profiles in every block = straight lines */
function scStraight(ink,w,h){const C=8,Rr=8,cw=w/C,rh=h/Rr,out=[];for(let r=0;r<Rr;r++)for(let c=0;c<C;c++){const x0=Math.floor(c*cw),x1=Math.floor((c+1)*cw),y0=Math.floor(r*rh),y1=Math.floor((r+1)*rh);let s2=0,t=0;for(let y=y0;y<y1;y++){let v=0;for(let x=x0;x<x1;x++)v+=ink[y*w+x];s2+=v*v;t+=v}out.push(t>cw*rh*.01?s2/(t*(x1-x0)):-1)}return out}
function scInk(cv,k){const w=Math.max(8,Math.round(cv.width*k)),h=Math.max(8,Math.round(cv.height*k));const sc=document.createElement('canvas');sc.width=w;sc.height=h;const sx=sc.getContext('2d',{willReadFrequently:!0});sx.drawImage(cv,0,0,w,h);const d=sx.getImageData(0,0,w,h).data,n=w*h;const L=scLum(d,n),Bg=scBox(scBox(L,w,h,Math.round(w/40)),w,h,Math.round(w/40));const ink=new Float32Array(n);for(let p=0;p<n;p++)ink[p]=L[p]/Math.max(30,Bg[p])<.75?1:0;return{ink,w,h}}
function scSmooth(cv){try{const r=scSmoothN(cv);if(r)return r}catch(e){}return scSmoothOld(cv)}
/* v247: «Разгладить» anew — follows every printed line and every table rule across the sheet, measures how each one tilts at each place, and pulls the page so that all of them run level. Checked after the work: kept only when the lines really became straighter. */
function scLineSl(ink,w,h){const vr=Math.max(14,Math.round(w*.03)),rx=Math.max(4,Math.round(w*.02)),n=w*h,a=new Uint8Array(n);for(let p=0;p<n;p++)a[p]=ink[p]>0?1:0;
 for(let x=0;x<w;x++){let y=0;while(y<h){if(!a[y*w+x]){y++;continue}let e=y;while(e<h&&a[e*w+x])e++;if(e-y>vr)for(let q=y;q<e;q++)a[q*w+x]=0;y=e}}
 const m=new Uint8Array(n);for(let y=0;y<h;y++){const r=y*w;let s=0;for(let x=0;x<Math.min(w,rx+1);x++)s+=a[r+x];for(let x=0;x<w;x++){m[r+x]=s>0?1:0;const ad=x+rx+1,rm=x-rx;if(ad<w)s+=a[r+ad];if(rm>=0)s-=a[r+rm]}}
 const seen=new Uint8Array(n),st=new Int32Array(n),out=[],win=Math.max(24,Math.round(w*.09)),step=Math.max(6,Math.round(win/3)),cnt=new Float32Array(w),sy=new Float32Array(w);
 for(let p0=0;p0<n;p0++){if(!m[p0]||seen[p0])continue;let sp=0,x0=w,x1=0,tot=0;const px=[];st[sp++]=p0;seen[p0]=1;while(sp){const p=st[--sp];px.push(p);tot++;const x=p%w,y=(p-x)/w;if(x<x0)x0=x;if(x>x1)x1=x;
   if(x>0&&m[p-1]&&!seen[p-1]){seen[p-1]=1;st[sp++]=p-1}if(x<w-1&&m[p+1]&&!seen[p+1]){seen[p+1]=1;st[sp++]=p+1}if(y>0&&m[p-w]&&!seen[p-w]){seen[p-w]=1;st[sp++]=p-w}if(y<h-1&&m[p+w]&&!seen[p+w]){seen[p+w]=1;st[sp++]=p+w}}
  if(x1-x0<win+2*rx)continue;for(let x=x0;x<=x1;x++){cnt[x]=0;sy[x]=0}for(const p of px){const x=p%w;cnt[x]++;sy[x]+=(p-x)/w}
  const th=[];for(let x=x0;x<=x1;x++)if(cnt[x])th.push(cnt[x]);th.sort((u,v)=>u-v);const tm=th[th.length>>1]||0;if(!tm||tm>h*.035)continue;
  const A=x0+rx,B=x1-rx;for(let s=A;s+win<=B;s+=step){let N=0,sx=0,syy=0,sxx=0,sxy=0;for(let x=s;x<s+win;x++){const c=cnt[x];if(c<tm*.5||c>tm*1.7)continue;const yv=sy[x]/c;N++;sx+=x;syy+=yv;sxx+=x*x;sxy+=x*yv}
   if(N<win*.7)continue;const den=N*sxx-sx*sx;if(Math.abs(den)<1e-6)continue;const sl=(N*sxy-sx*syy)/den,ic=(syy-sl*sx)/N;let rs=0;for(let x=s;x<s+win;x++){const c=cnt[x];if(c<tm*.5||c>tm*1.7)continue;const e=sy[x]/c-(sl*x+ic);rs+=e*e}
   if(Math.sqrt(rs/N)>Math.max(1.6,tm*.35)||Math.abs(sl)>.16)continue;out.push([s+win/2,syy/N,sl,N])}}
 return out}
function scSlField(sl,w,h,GX,GY){const S=new Float32Array(GX*GY),Wt=new Float32Array(GX*GY);for(const[x,y,a,wt]of sl){const i2=Math.min(GX-1,Math.max(0,Math.floor(x/w*GX))),j=Math.min(GY-1,Math.max(0,Math.floor(y/h*GY)));S[j*GX+i2]+=a*wt;Wt[j*GX+i2]+=wt}
 const has=new Uint8Array(GX*GY);for(let q=0;q<S.length;q++)if(Wt[q]>0){S[q]/=Wt[q];has[q]=1}
 const nb=[[0,1],[0,-1],[1,0],[-1,0]];for(let it=0;it<GX+GY;it++){let left=0;for(let q=0;q<S.length;q++){if(has[q])continue;const r=Math.floor(q/GX),c=q%GX;let s2=0,n2=0;for(const[dr,dc]of nb){const rr=r+dr,cc=c+dc;if(rr<0||cc<0||rr>=GY||cc>=GX)continue;if(has[rr*GX+cc]===1){s2+=S[rr*GX+cc];n2++}}if(n2){S[q]=s2/n2;has[q]=2}else left++}for(let q=0;q<S.length;q++)if(has[q]===2)has[q]=1;if(!left)break}
 for(let it=0;it<2;it++){const T2=S.slice();for(let r=0;r<GY;r++)for(let c=0;c<GX;c++){let s2=T2[r*GX+c]*2,n2=2;for(const[dr,dc]of nb){const rr=r+dr,cc=c+dc;if(rr<0||cc<0||rr>=GY||cc>=GX)continue;s2+=T2[rr*GX+cc];n2++}S[r*GX+c]=s2/n2}}
 /* tilt → shift: add the tilt up along each row, the row keeps its place on average */
 const D=new Float32Array(GX*GY),cw=w/GX;for(let r=0;r<GY;r++){let acc=0,mean=0;D[r*GX]=0;for(let c=1;c<GX;c++){acc+=(S[r*GX+c-1]+S[r*GX+c])/2*cw;D[r*GX+c]=acc;mean+=acc}mean/=GX;for(let c=0;c<GX;c++)D[r*GX+c]-=mean}
 {const T2=D.slice();for(let r=0;r<GY;r++)for(let c=0;c<GX;c++){const u=T2[Math.max(0,r-1)*GX+c],d2=T2[Math.min(GY-1,r+1)*GX+c];D[r*GX+c]=(u+2*T2[r*GX+c]+d2)/4}}
 return D}
const scSlAt=(D,GX,GY,fx,fy)=>{fx=Math.min(GX-1.001,Math.max(0,fx-.5));fy=Math.min(GY-1.001,Math.max(0,fy-.5));const i0=Math.floor(fx),j0=Math.floor(fy),ax=fx-i0,ay=fy-j0,q=j0*GX+i0;return(D[q]*(1-ax)+D[q+1]*ax)*(1-ay)+(D[q+GX]*(1-ax)+D[q+GX+1]*ax)*ay};
const scSlM=sl=>{let s=0,t=0;for(const q of sl){s+=Math.abs(q[2])*q[3];t+=q[3]}return t?s/t:0};
/* returns the straightened sheet, the same sheet when it is straight already, or null when there are too few lines to follow */
function scSmoothN(cv){const W=cv.width,H=cv.height,k=Math.min(1,800/W),I=scInk(cv,k),w=I.w,h=I.h,GX=20,GY=Math.max(8,Math.round(20*h/w));
 let ink=I.ink,sl=scLineSl(ink,w,h);if(sl.length<8)return null;const M0=scSlM(sl);if(M0<.0035)return cv;
 const D=new Float32Array(GX*GY);let M1=M0;for(let pass=0;pass<3;pass++){const d=scSlField(sl,w,h,GX,GY);for(let q=0;q<D.length;q++)D[q]+=d[q];
  const nk=new Float32Array(w*h);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const yy=Math.round(y+scSlAt(D,GX,GY,x/w*GX,y/h*GY));nk[y*w+x]=yy>=0&&yy<h?I.ink[yy*w+x]:0}
  const s2=scLineSl(nk,w,h);if(s2.length<8)break;const m2=scSlM(s2);if(m2>=M1*.97){if(m2>M1)for(let q=0;q<D.length;q++)D[q]-=d[q];break}M1=m2;sl=s2;if(m2<.0025)break}
 if(M1>M0*.8)return cv;const cap=h*.05;let mx=0;for(let q=0;q<D.length;q++){D[q]=Math.max(-cap,Math.min(cap,D[q]));mx=Math.max(mx,Math.abs(D[q]))}if(mx<.6)return cv;
 const S=cv.getContext('2d',{willReadFrequently:!0}).getImageData(0,0,W,H).data,oc=document.createElement('canvas');oc.width=W;oc.height=H;const ox=oc.getContext('2d'),O=ox.createImageData(W,H),Dd=O.data,K=1/k;
 const col=new Float32Array(W);for(let y=0;y<H;y++){const fy=y/H*GY;if(!(y&7)||!y)for(let x=0;x<W;x++)col[x]=scSlAt(D,GX,GY,x/W*GX,fy)*K;
  for(let x=0;x<W;x++){const Y=Math.max(0,Math.min(H-1.001,y+col[x])),yi=Math.floor(Y),a2=Y-yi,p=(yi*W+x)*4,p2=p+W*4,o=(y*W+x)*4;Dd[o]=S[p]*(1-a2)+S[p2]*a2;Dd[o+1]=S[p+1]*(1-a2)+S[p2+1]*a2;Dd[o+2]=S[p+2]*(1-a2)+S[p2+2]*a2;Dd[o+3]=255}}
 ox.putImageData(O,0,0);return oc}
function scSmoothOld(cv){const r0=scSmooth0(cv);if(r0===cv)return cv;try{const k=Math.min(1,700/cv.width),A=scInk(cv,k),B=scInk(r0,k),a=scStraight(A.ink,A.w,A.h),b=scStraight(B.ink,B.w,B.h);let sa=0,sb=0,worse=0,n=0;for(let j=0;j<a.length;j++){if(a[j]<0||b[j]<0)continue;n++;sa+=a[j];sb+=b[j];if(b[j]<a[j]*.95)worse++}
 if(!n||sb<sa*1.04||worse>n*.2)return cv}catch{return cv}return r0}
function scSmooth0(cv){const W=cv.width,H=cv.height,k=Math.min(1,700/W),w=Math.max(8,Math.round(W*k)),h=Math.max(8,Math.round(H*k));
 const sc=document.createElement('canvas');sc.width=w;sc.height=h;const sx=sc.getContext('2d',{willReadFrequently:!0});sx.drawImage(cv,0,0,w,h);const d=sx.getImageData(0,0,w,h).data,n=w*h;
 const L=scLum(d,n),Bg=scBox(scBox(L,w,h,Math.round(w/40)),w,h,Math.round(w/40));const ink=new Float32Array(n);for(let p=0;p<n;p++){const v=L[p]/Math.max(30,Bg[p]);ink[p]=v<.75?1:0}
 const C=12,Rr=10,cw=w/C,rh=h/Rr,maxS=Math.round(h*.012);
 const prof=(c,r)=>{const x0=Math.floor(c*cw),x1=Math.floor((c+1)*cw),y0=Math.max(0,Math.floor((r-.5)*rh)),y1=Math.min(h,Math.floor((r+1.5)*rh)),P=new Float32Array(h);let tot=0;for(let y=y0;y<y1;y++){let s=0;for(let x=x0;x<x1;x++)s+=ink[y*w+x];P[y]=s;tot+=s}return{P,tot,y0,y1}};
 const ref=Math.floor(C/2),F=new Float32Array(C*Rr),has=new Uint8Array(C*Rr);
 for(let r=0;r<Rr;r++){const R0=prof(ref,r);if(R0.tot<cw*rh*.01)continue;has[r*C+ref]=1;
  /* line spacing from the profile itself: one step may never move more than a third of it (otherwise it could jump to the next line) */let per=0,pv=-1;{const mean=R0.tot/Math.max(1,R0.y1-R0.y0);for(let lag=6;lag<Math.min(80,(R0.y1-R0.y0)/2);lag++){let v=0;for(let y=R0.y0;y+lag<R0.y1;y++)v+=(R0.P[y]-mean)*(R0.P[y+lag]-mean);if(v>pv){pv=v;per=lag}}}const stepMax=per?Math.max(2,Math.floor(per/3)):maxS;
  for(const dir of[-1,1]){let prevP=R0.P,acc=0;for(let c=ref+dir;c>=0&&c<C;c+=dir){const Pc=prof(c,r);if(Pc.tot<cw*rh*.01)break;let best=0,bv=-1;
    for(let s=-stepMax;s<=stepMax;s++){let v=0;for(let y=R0.y0;y<R0.y1;y++){const yy=y+s;if(yy<0||yy>=h)continue;v+=prevP[y]*Pc.P[yy]}if(v>bv){bv=v;best=s}}
    if(Math.abs(best)>=stepMax)break;acc+=best;if(Math.abs(acc)>maxS*1.6)break;F[r*C+c]=acc;has[r*C+c]=1;
    /* the next comparison uses this column moved back onto the reference lines */const Q=new Float32Array(h);for(let y=0;y<h;y++){const yy=y+best;Q[y]=yy>=0&&yy<h?Pc.P[yy]:0}prevP=Q}}}
 /* cells without text take the value of their neighbours, then one gentle smoothing */
 for(let it=0;it<C+Rr;it++){let left=0;for(let q=0;q<C*Rr;q++){if(has[q])continue;const r=Math.floor(q/C),c=q%C;let s2=0,n2=0;for(const[dr,dc]of[[0,1],[0,-1],[1,0],[-1,0]]){const rr=r+dr,cc=c+dc;if(rr<0||cc<0||rr>=Rr||cc>=C)continue;const q2=rr*C+cc;if(has[q2]===1){s2+=F[q2];n2++}}if(n2){F[q]=s2/n2;has[q]=2}else left++}for(let q=0;q<C*Rr;q++)if(has[q]===2)has[q]=1;if(!left)break}
 {const T2=F.slice();for(let r=0;r<Rr;r++)for(let c=0;c<C;c++){let s2=T2[r*C+c]*2,n2=2;for(const[dr,dc]of[[0,1],[0,-1],[1,0],[-1,0]]){const rr=r+dr,cc=c+dc;if(rr<0||cc<0||rr>=Rr||cc>=C)continue;s2+=T2[rr*C+cc];n2++}F[r*C+c]=s2/n2}}
 let mx=0;for(const v of F)mx=Math.max(mx,Math.abs(v));if(mx<1)return cv;
 const S=cv.getContext('2d',{willReadFrequently:!0}).getImageData(0,0,W,H).data,oc=document.createElement('canvas');oc.width=W;oc.height=H;const ox=oc.getContext('2d'),O=ox.createImageData(W,H),D=O.data,K=1/k;
 for(let y=0;y<H;y++){const fy=Math.min(Rr-1.001,Math.max(0,y*k/rh-.5)),j0=Math.floor(fy),ay=fy-j0;for(let x=0;x<W;x++){const fx=Math.min(C-1.001,Math.max(0,x*k/cw-.5)),i0=Math.floor(fx),ax=fx-i0,q=j0*C+i0;
  const s=((F[q]*(1-ax)+F[q+1]*ax)*(1-ay)+(F[q+C]*(1-ax)+F[q+C+1]*ax)*ay)*K;const Y=Math.max(0,Math.min(H-1.001,y+s)),yi=Math.floor(Y),a2=Y-yi,p=(yi*W+x)*4,p2=p+W*4,o=(y*W+x)*4;for(let c=0;c<3;c++)D[o+c]=S[p+c]*(1-a2)+S[p2+c]*a2;D[o+3]=255}}
 ox.putImageData(O,0,0);return oc}

/* ---------- v241: text recognition on the phone (Tesseract, already in the app) ---------- */
const SCL={ru:'rus',en:'eng',pl:'pol',tr:'tur',fr:'fra',es:'spa'};
function scOcrImg(cv){let c=scClean(cv,'doc');if(c.width<2000){const k=2000/c.width,o=document.createElement('canvas');o.width=2000;o.height=Math.round(c.height*k);const x=o.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(c,0,0,o.width,o.height);c=o}return c}
async function scOcr(cvs,prog){const T3=await WY(),base=new URL('lib/ocr/',location.href).href,lang=['deu'].concat(SCL[g.lang]?[SCL[g.lang]]:[]).join('+');let done=0;
 const wk=await T3.createWorker(lang,1,{workerPath:base+'worker.min.js',corePath:base,langPath:base.replace(/\/$/,''),gzip:!1,cacheMethod:'none',workerBlobURL:!1,logger:c=>{try{c&&c.status==='recognizing text'&&prog&&prog((done+(c.progress||0))/cvs.length,done)}catch{}}});const out=[];try{await wk.setParameters({tessedit_pageseg_mode:'3'})}catch{}
 const good=t=>{const s2=String(t||'').trim();if(!s2)return!1;const al=(s2.match(/[0-9A-Za-zÀ-žА-яЁё]/g)||[]).length;return al/s2.replace(/\s/g,'').length>=.55};
 try{for(const cv0 of cvs){const cv=scOcrImg(cv0);const r=await wk.recognize(cv,{},{text:!0,blocks:!0});const dt=r&&r.data||{};let words=[],paras=[],cs=0,cn=0;
   if(dt.blocks)dt.blocks.forEach(b=>(b.paragraphs||[]).forEach(pa=>{const ls=[];(pa.lines||[]).forEach(li=>{cs+=li.confidence||0;cn++;if((li.confidence||0)>=45&&good(li.text)){ls.push(String(li.text).replace(/[ \t]{2,}/g,' ').trim());(li.words||[]).forEach(wd=>words.push(wd))}});if(ls.length)paras.push(ls.join('\n'))}));
   const text=paras.length?paras.join('\n\n'):(dt.text||'').trim();if(!dt.blocks&&dt.words)words=dt.words;
   out.push({text:text.replace(/\n{3,}/g,'\n\n').trim(),conf:cn?cs/cn:(dt.confidence||0),words:words.filter(wd=>wd&&wd.text&&wd.bbox&&wd.confidence>40).map(wd=>({t:wd.text,x:wd.bbox.x0/cv.width,y:wd.bbox.y0/cv.height,w:(wd.bbox.x1-wd.bbox.x0)/cv.width,h:(wd.bbox.y1-wd.bbox.y0)/cv.height}))});done++;prog&&prog(done/cvs.length,done)}}
 finally{try{await wk.terminate()}catch{}}return out}
/* ---------- v241: PDF A4 with an invisible text layer (search and copy) ---------- */
async function scPdf(imgs,ocr,title){const P=await QY(),doc=await P.PDFDocument.create();let font=null;try{font=await doc.embedFont(P.StandardFonts.Helvetica)}catch{}try{title&&doc.setTitle(title)}catch{}
 for(let k=0;k<imgs.length;k++){const im=imgs[k];const jpg=im.jpg||new Uint8Array(await (await new Promise(r=>im.cv.toBlob(r,'image/jpeg',im.q||.88))).arrayBuffer());const e=await doc.embedJpg(jpg);
  const land=e.width>e.height,PW=land?841.89:595.28,PH=land?595.28:841.89,s=Math.min(PW/e.width,PH/e.height),dw=e.width*s,dh=e.height*s,ox=(PW-dw)/2,oy=(PH-dh)/2;const pg=doc.addPage([PW,PH]);pg.drawImage(e,{x:ox,y:oy,width:dw,height:dh});
  const ws=ocr&&ocr[k]&&ocr[k].words;if(font&&ws)for(const wd of ws){const t=String(wd.t).replace(/[^\x20-\x7E\xA0-\xFF€]/g,'');if(!t.trim())continue;let fs=wd.h*dh*.9;try{const wdt=font.widthOfTextAtSize(t,1);if(wdt>0)fs=Math.min(fs*1.6,Math.max(2,wd.w*dw/wdt))}catch{}
   try{pg.drawText(t,{x:ox+wd.x*dw,y:oy+dh-(wd.y+wd.h)*dh+wd.h*dh*.15,size:fs,font,opacity:0})}catch{}}}
 const bytes=await doc.save();return new Blob([bytes],{type:'application/pdf'})}
async function scSharePdf(blob,name){const f=new File([blob],name,{type:'application/pdf'});try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:name});return}}catch(e){if(e&&e.name==='AbortError')return}try{await xu({blob,name})}catch{}}
const scNum=s=>i(s).replace(/(\d[\d.,/\-–]*\d|\d)/g,'<mark>$1</mark>');

/* ---------- v243: document assistant — understands the document from its text (on the phone) ---------- */
const SCM={januar:1,jan:1,februar:2,feb:2,'märz':3,maerz:3,'mär':3,april:4,apr:4,mai:5,juni:6,jun:6,juli:7,jul:7,august:8,aug:8,september:9,sep:9,sept:9,oktober:10,okt:10,november:11,nov:11,dezember:12,dez:12};
function scDates(t){const out=[];const re=/\b(\d{1,2})\.\s?(\d{1,2})\.\s?(20\d\d|19\d\d|\d\d)\b/g;let m2;while(m2=re.exec(t)){let y=+m2[3];if(y<100)y+=2000;const d=+m2[1],mo=+m2[2];if(d>=1&&d<=31&&mo>=1&&mo<=12)out.push({i:m2.index,d:`${y}-${String(mo).padStart(2,'0')}-${String(d).padStart(2,'0')}`})}
 const re2=/\b(\d{1,2})\.?\s+(januar|februar|märz|maerz|april|mai|juni|juli|august|september|oktober|november|dezember|jan|feb|mär|apr|jun|jul|aug|sept?|okt|nov|dez)\.?\s+(20\d\d)\b/gi;while(m2=re2.exec(t)){const mo=SCM[m2[2].toLowerCase()];if(mo)out.push({i:m2.index,d:`${m2[3]}-${String(mo).padStart(2,'0')}-${String(+m2[1]).padStart(2,'0')}`})}return out.sort((a,b)=>a.i-b.i)}
const scAmt=s=>{const m2=String(s).match(/(\d{1,3}(?:[.\s]\d{3})*|\d+),(\d{2})/);return m2?(m2[1].replace(/[.\s]/g,'')+'.'+m2[2]):''};
const scAddDays=(d,n)=>{const x2=new Date(d+'T12:00:00');x2.setDate(x2.getDate()+n);return x2.toISOString().slice(0,10)};
const scAddMonth=d=>{const x2=new Date(d+'T12:00:00'),day=x2.getDate();x2.setMonth(x2.getMonth()+1);if(x2.getDate()<day)x2.setDate(0);return x2.toISOString().slice(0,10)};
const SC_ORG=[/Finanzamt\s+[A-ZÄÖÜ][\wäöüß\-]+(?:\s+(?:am|an der|in der)\s+[A-ZÄÖÜ][\wäöüß\-]+)?/,/Finanzkasse\s+[A-ZÄÖÜ][\wäöüß\-]+/,/Jobcenter\s+[A-ZÄÖÜ][\wäöüß\-]+/,/Agentur f(?:ü|ue)r Arbeit\s*[A-ZÄÖÜ]?[\wäöüß\-]*/,/Deutsche Rentenversicherung[\wäöüß \-]{0,20}/,/Familienkasse\s*[\wäöüß\-]*/,/(?:AOK|IKK|BKK)[\wäöüß \-]{0,20}/,/Techniker Krankenkasse|Barmer|DAK[- ]Gesundheit|KKH|HEK/,/Landratsamt\s+[A-ZÄÖÜ][\wäöüß\-]+/,/Stadt\s+[A-ZÄÖÜ][\wäöüß\-]+/,/Ausländerbehörde[\wäöüß \-]{0,20}/,/Bürgeramt[\wäöüß \-]{0,20}/,/Sparkasse[\wäöüß \-]{0,24}/,/(?:Volksbank|Raiffeisenbank|Commerzbank|Deutsche Bank|Postbank|DKB|ING|N26|Comdirect|HypoVereinsbank|Targobank)\b/,/Telekom|Vodafone|Telefónica|O2|1&1|congstar/,/Stadtwerke\s+[A-ZÄÖÜ][\wäöüß\-]+|E\.ON|Vattenfall|EnBW|EWE/,/Allianz|HUK[- ]?Coburg|ERGO|AXA|Generali|DEVK|R\+V|Signal Iduna|Debeka|Gothaer|Zurich/,/Amtsgericht\s+[A-ZÄÖÜ][\wäöüß\-]+|Landgericht\s+[A-ZÄÖÜ][\wäöüß\-]+/,/Zulassungsstelle[\wäöüß \-]{0,20}|Kraftfahrt-Bundesamt/];
/* rules: [type, test] — the first that fits wins; the folder follows the type */
const SC_RULES=[['taxnote',/finanzamt|steuerbescheid|einkommensteuer|bescheid f(?:ü|ue)r 20\d\d|steuernummer/i],['bankst',/kontoauszug|kontostand|auszug nr/i],['loan',/darlehen|kreditvertrag|tilgung/i],
 ['invoice',/rechnung(?:snummer|s-?nr|sbetrag)?\b|invoice|zahlbar bis|f(?:ä|ae)llig am|mahnung/i],['receipt',/kassenbon|quittung|beleg-?nr|bar bezahlt/i],['warrantyd',/garantie(?:schein|karte)/i],
 ['hcard',/versichertenkarte|gesundheitskarte/i],['medical',/befund|arztbrief|diagnose|praxis|krankenhaus|klinikum|arbeitsunf(?:ä|ae)higkeit|rezept/i],['vaccine',/impfung|impfpass|impfausweis/i],
 ['license',/f(?:ü|ue)hrerschein/i],['vehicle',/zulassungsbescheinigung|fahrzeugschein|fahrzeugbrief|kfz-?steuer/i],['meldung',/meldebescheinigung|anmeldung.*wohnung/i],['residence',/aufenthaltstitel|aufenthaltserlaubnis|niederlassungserlaubnis/i],
 ['taxid',/steuerliche identifikationsnummer|steuer-?id/i],['social',/sozialversicherungsausweis|rentenversicherungsnummer/i],['passport',/reisepass/i],['id',/personalausweis/i],
 ['work',/arbeitsvertrag|arbeitgeber|lohnabrechnung|gehaltsabrechnung|entgeltabrechnung|k(?:ü|ue)ndigung des arbeits|arbeitszeugnis/i],['diploma',/zeugnis|diplom|bachelor|master of|abschluss/i],
 ['property',/mietvertrag|vermieter|nebenkosten|grundbuch|kaufvertrag.*(?:wohnung|grundst)/i],['birth',/geburtsurkunde/i],['marriage',/eheurkunde|heiratsurkunde/i],['poa',/vollmacht/i]];
function scClassify(text){const t=String(text||''),tl=t.toLowerCase(),lines=t.split(/\n/).map(s=>s.trim()).filter(Boolean);let type='cert';for(const[k,re]of SC_RULES)if(re.test(t)&&Ct[k]){type=k;break}
 let org='';for(const re of SC_ORG){const m2=t.match(re);if(m2){org=m2[0].replace(/\s+/g,' ').trim();break}}if(!org){const rx=(SC_RULES.find(q2=>q2[0]===type)||[])[1];const l0=lines.find(l=>/[A-Za-zÄÖÜäöüА-я]{3,}/.test(l)&&l.length<60&&!/^\d/.test(l)&&!(rx&&rx.test(l)));org=type==='cert'?(l0||''):''}
 const ds=scDates(t),today=x(new Date());const top=ds.filter(d=>d.d<=today);const letter=(top.find(d=>d.i<t.length*.35)||top[top.length-1]||{}).d||'';
 let num='';const sn=t.match(/\b\d{2,3}\/\d{3}\/\d{4,5}\b/);if(sn&&type==='taxnote')num=sn[0];
 if(!num){const m2=t.match(/(?:Rechnungs-?(?:nummer|nr\.?)|Rechnung\s*Nr\.?|Kundennummer|Vertragsnummer|Versicherungsnummer|Versichertennummer|Aktenzeichen|Az\.|Mitgliedsnummer|Kassenzeichen)\s*[:.#]?\s*([A-Z0-9][A-Z0-9\-\/. ]{3,24})/i);if(m2)num=m2[1].trim().replace(/[ .]+$/,'')}
 const yr=(t.match(/(?:f(?:ü|ue)r|Jahr|Kalenderjahr|Veranlagungszeitraum)\s+(20\d\d)/i)||[])[1]||'';
 let amt='',sign='';const amLine=lines.find(l=>/erstatt|guthaben/i.test(l)&&scAmt(l))||'';const payLine=lines.find(l=>/nachzahlung|zu zahlen|zahlbetrag|gesamtbetrag|rechnungsbetrag|endbetrag|gesamtsumme|summe|zahlbar/i.test(l)&&scAmt(l))||'';
 if(amLine){amt=scAmt(amLine);sign='+'}else if(payLine){amt=scAmt(payLine);sign='-'}
 let due='',dueK='';const dueM=t.match(/(?:zahlbar bis|f(?:ä|ae)llig (?:am|bis)|bis (?:sp(?:ä|ae)testens )?(?:zum )?|Frist[:\s]+)\s*(\d{1,2}\.\s?\d{1,2}\.\s?(?:20)?\d\d)/i);
 if(dueM){const dd=scDates(dueM[1]);if(dd[0]&&dd[0].d>=today){due=dd[0].d;dueK=type==='invoice'?'pay':'due'}}
 if(!due&&type==='taxnote'&&letter&&/einspruch/i.test(t)){/* «innerhalb eines Monats nach Bekanntgabe» — the letter counts as received 4 days after its date (since 2025) */const d2=scAddMonth(scAddDays(letter,4));if(d2>=today){due=d2;dueK='objection'}}
 const typeName=Ye('t_'+type),title=[org&&org.length<48?org:'',typeName+(yr?' '+yr:'')].filter(Boolean).join(' · ').slice(0,90);
 const grp=(Ct[type]||[])[2];let folder='';try{const F=Ke().folders.filter(f2=>!f2.sp);const hit=F.find(f2=>(Eg[f2.id]||[]).includes(grp));folder=(hit||F[0]||{}).id||''}catch{}
 const f={};const want=(Ct[type]||[])[1]||[];const put=(k,v)=>{if(v&&want.includes(k))f[k]=v};put('issuer',org);put('vendor',org);put('bank',org);put('inst',org);put('number',num);put('issued',letter);put('date',letter);put('year',yr);put('amount',amt);
 const sure=type!=='cert'&&!!org;return{type,folder,title,f,due,dueK,sign,amt,letter,num,org,sure,remind:!!due}}

/* ---------- v243: straighten an old scan that is already a flat page ---------- */
function scDeskew(cv){try{const k=Math.min(1,600/cv.width),A=scInk(cv,k),w=A.w,h=A.h;let best=0,bv=-1;
 for(let a=-5;a<=5.001;a+=.25){const tg=Math.tan(a*Math.PI/180),P=new Float32Array(h+2*Math.ceil(w*.1));const off=Math.ceil(w*.1);for(let y=0;y<h;y++)for(let x2=0;x2<w;x2+=2){if(!A.ink[y*w+x2])continue;const yy=Math.round(y+(x2-w/2)*tg)+off;if(yy>=0&&yy<P.length)P[yy]++}let v=0;for(const q of P)v+=q*q;if(v>bv){bv=v;best=a}}
 if(Math.abs(best)<.3)return cv;const r=best*Math.PI/180,o=document.createElement('canvas');o.width=cv.width;o.height=cv.height;const x=o.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,o.width,o.height);x.translate(o.width/2,o.height/2);x.rotate(r);x.drawImage(cv,-cv.width/2,-cv.height/2);return o}catch{return cv}}

/* ---------- v244: eraser strokes and signatures live on the page (normalised 0..1), drawn after cleaning ---------- */
let scSigImg=null;
function scMarks(pg){const o=pg.out;if(!o||(!(pg.erase||[]).length&&!(pg.sigs||[]).length))return;let c=o;if(o===pg.flat||o===pg.sm){c=document.createElement('canvas');c.width=o.width;c.height=o.height;c.getContext('2d').drawImage(o,0,0);pg.out=c}
 const x=c.getContext('2d'),W=c.width,H=c.height;x.save();x.lineCap='round';x.lineJoin='round';x.strokeStyle='#fff';x.fillStyle='#fff';
 for(const st of pg.erase||[]){x.lineWidth=st.r*W*2;x.beginPath();st.p.forEach((p,j)=>j?x.lineTo(p[0]*W,p[1]*H):x.moveTo(p[0]*W,p[1]*H));if(st.p.length===1){x.arc(st.p[0][0]*W,st.p[0][1]*H,st.r*W,0,7);x.fill()}else x.stroke()}x.restore();
 if((pg.sigs||[]).length&&g.scSig){if(!scSigImg||scSigImg.src!==g.scSig){scSigImg=new Image();scSigImg.src=g.scSig}const im=scSigImg;const draw=()=>{for(const s2 of pg.sigs){const w=s2.w*W,h=w*(im.naturalHeight/im.naturalWidth||.33);x.drawImage(im,s2.x*W-w/2,s2.y*H-h/2,w,h)}};if(im.complete&&im.naturalWidth)draw();else im.onload=()=>{draw()}}}
/* turning the page by 90° turns the marks with it */
function scRotMarks(pg){const r=([a,b])=>[1-b,a];(pg.erase||[]).forEach(st=>{st.p=st.p.map(r)});(pg.sigs||[]).forEach(s2=>{const q=r([s2.x,s2.y]);s2.x=q[0];s2.y=q[1]})}
/* ID card: front and back on one white A4 sheet at real size */
function scIdSheet(front,back){const W=2480,H=3508,cw=1012,o=document.createElement('canvas');o.width=W;o.height=H;const x=o.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,W,H);
 const put=(c,y)=>{if(!c)return;let w=cw,h=Math.round(cw*c.height/c.width);if(c.height>c.width){h=cw;w=Math.round(cw*c.width/c.height)}x.drawImage(c,(W-w)/2,y,w,h);x.strokeStyle='#ddd';x.lineWidth=2;x.strokeRect((W-w)/2,y,w,h)};put(front,520);put(back,1640);return o}
/* business card: name, firm, role, phones, e-mail, web, address from the text */
function scParseCard(text){const L=String(text||'').split(/\n/).map(s=>s.trim()).filter(Boolean);const r={first:'',last:'',company:'',role:'',phone:'',phone2:'',email:'',web:'',addr:''};
 const em=text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);if(em)r.email=em[0];const web=text.match(/\b(?:https?:\/\/)?(?:www\.)[\w-]+\.[\w.\/-]+/i);if(web)r.web=web[0];
 const ph=[...text.matchAll(/(?:\+|00)?\d[\d ()\/.\-]{6,}\d/g)].map(m2=>m2[0].replace(/[^\d+]/g,'').replace(/^00/,'+')).filter(p=>p.length>=7&&p.length<=16);r.phone=ph[0]||'';r.phone2=ph[1]||'';
 const ad=L.find(l=>/\b\d{5}\b\s+[A-ZÄÖÜ]/.test(l))||'';const st=L.find(l=>/(stra(ß|ss)e|str\.|weg|platz|allee|gasse)\s*\d/i.test(l))||'';r.addr=[...new Set([st,ad].filter(Boolean))].join(', ');
 const co=L.find(l=>/\b(GmbH|AG|KG|UG|e\.K\.|OHG|GbR|Ltd|Inc|LLC|S\.A\.|SE)\b/.test(l))||'';r.company=co;
 const roleRe=/(geschäftsführ|inhaber|manager|leiter|berater|director|ceo|cto|sales|vertrieb|ingenieur|engineer|consultant|anwalt|rechtsanwalt|steuerberater|arzt|dr\.|meister|assistent|referent|projekt)/i;const rl=L.find(l=>roleRe.test(l)&&l!==co)||'';r.role=rl;
 const nm=L.find(l=>l!==co&&l!==rl&&!/[@\d]/.test(l)&&/^[A-ZÄÖÜА-Я][\wäöüßа-я.\-']+(\s+[A-ZÄÖÜА-Я][\wäöüßа-я.\-']+){1,2}$/.test(l))||'';if(nm){const p=nm.replace(/^(Dr\.|Prof\.)\s*/,'').split(/\s+/);r.last=p.pop();r.first=p.join(' ')}
 if(!r.company){const c2=L.find(l=>l!==nm&&l!==rl&&!/[@]/.test(l)&&!/\d{4,}/.test(l)&&l.length<40);r.company=c2||''}return r}
function scVcf(c){const esc=s=>String(s||'').replace(/([,;\\])/g,'\\$1');return['BEGIN:VCARD','VERSION:3.0',`N:${esc(c.last)};${esc(c.first)};;;`,`FN:${esc([c.first,c.last].filter(Boolean).join(' ')||c.company)}`,c.company?`ORG:${esc(c.company)}`:'',c.role?`TITLE:${esc(c.role)}`:'',c.phone?`TEL;TYPE=WORK,VOICE:${c.phone}`:'',c.phone2?`TEL;TYPE=CELL:${c.phone2}`:'',c.email?`EMAIL;TYPE=WORK:${c.email}`:'',c.web?`URL:${c.web}`:'',c.addr?`ADR;TYPE=WORK:;;${esc(c.addr)};;;;`:'','END:VCARD'].filter(Boolean).join('\r\n')}

/* ---------- the scanner window ---------- */
function scOpen(opt){const multi=!!opt.multi;let kind=opt.kind||(['doc','book','id','bcard','board'].includes(g.scKind)&&!(opt.lock&&!['doc','book','id'].includes(g.scKind))?g.scKind:'doc'),idFront=null,card=null,items=null,ci=-1,retake=-1,stream=null,raf=0,timer=0,mode=g.scMode==='col'?'col':'doc',autoOn=g.scAuto!==!1,stable=0,lastQ=null,pages=[],cur=null,busy=!1,closed=!1,title='',ocr=null,ocrBusy=!1;
 const ov=document.createElement('div');ov.className='sc9';document.body.appendChild(ov);document.documentElement.classList.add('sc9on');
 const stop=()=>{cancelAnimationFrame(raf);clearTimeout(timer);if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}};
 const close=()=>{if(closed)return;closed=!0;stop();ov.remove();document.documentElement.classList.remove('sc9on')};
 const stamp=()=>{const d=new Date();return`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${String(d.getHours()).padStart(2,'0')}${String(d.getMinutes()).padStart(2,'0')}`};
 const render=pg=>{let f=pg.flat;if(pg.smooth){if(!pg.sm)pg.sm=scSmooth(pg.flat);f=pg.sm}for(let k=0;k<pg.rot;k++)f=scRot(f);pg.out=scClean(f,pg.mode,pg.smooth);scMarks(pg);ocr=null;card=null};
 const finish=async()=>{if(busy)return;busy=!0;const files=[];const nm='scan-'+stamp();
  for(let k=0;k<pages.length;k++){const cv=pages[k].out;const blob=await new Promise(r=>cv.toBlob(r,'image/jpeg',.88));if(blob)files.push(new File([blob],`${nm}${pages.length>1?'-'+(k+1):''}.jpg`,{type:'image/jpeg',lastModified:Date.now()}))}
  const extra={title:title.trim(),ocr};close();opt.done(files,extra)};
 const pdfName=()=>Ii(title.trim()||sct('t')+' '+stamp())+'.pdf';
 /* --- 1. camera --- */
 const camView=()=>{ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="x" aria-label="×">${scIco.x}</button><b>${i(sct('t'))}</b><button type="button" class="sc9b sc9tor" data-a="tor" hidden>${scIco.bolt}</button></div>
  <div class="sc9cam"><video playsinline muted autoplay></video><svg class="sc9q"><polygon/></svg><p class="sc9hint">${idFront?`<b>${i(sct('idBack'))}</b>`:kind!=='doc'?`<b>${i(sct('k_'+kind))}</b> · ${i(sct('kh_'+kind))}`:`${pages.length?`<b>${i(sct('pgN',{n:pages.length+1}))}</b> · `:''}${i(sct('look'))}`}</p></div>
  <div class="sc9bar"><div class="sc9modes">${(opt.lock?['doc','book','id']:['doc','book','id','bcard','board']).map(k=>`<button type="button" data-kd="${k}" class="${kind===k?'on':''}">${i(sct('k_'+k))}</button>`).join('')}<button type="button" class="sc9au ${autoOn?'on':''}" data-a="auto">${i(sct('auto'))} ${autoOn?'✓':'–'}</button></div>
  <div class="sc9row"><button type="button" class="sc9th" data-a="pg">${pages.length?`<img alt=""><span>${pages.length}</span>`:''}</button><button type="button" class="sc9shut" data-a="shot" aria-label="●"><i></i></button>${pages.length?`<button type="button" class="sc9ok" data-a="pg">${i(sct('ready'))} ›</button>`:'<span class="sc9ok sc9okx"></span>'}</div>
  <div class="sc9alt"><button type="button" class="sc9gal" data-a="nat">📷 <span>${i(sct('nat'))}</span></button><button type="button" class="sc9gal" data-a="gal">${scIco.img}<span>${i(sct('gal'))}</span></button>${opt.card?`<button type="button" class="sc9gal" data-a="files">📂 <span>${i(sct('files'))}</span></button>`:''}</div><input type="file" accept="image/*" hidden class="sc9gi"><input type="file" accept="image/*" capture="environment" hidden class="sc9gi sc9ni"><input type="file" accept="application/pdf,image/*" multiple hidden class="sc9fi"></div>`;
  if(pages.length){const im=ov.querySelector('.sc9th img');im.src=pages[pages.length-1].out.toDataURL('image/jpeg',.5)}
  const vid=ov.querySelector('video'),svg=ov.querySelector('.sc9q'),poly=svg.querySelector('polygon'),hint=ov.querySelector('.sc9hint');const pre=pages.length?`<b>${i(sct('pgN',{n:pages.length+1}))}</b> · `:'';
  const start=async()=>{try{if(!stream)stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:'environment'},width:{ideal:4032},height:{ideal:3024}}});if(closed){stop();return}vid.srcObject=stream;await vid.play().catch(()=>{});
    try{const tr=stream.getVideoTracks()[0],cp=tr.getCapabilities&&tr.getCapabilities();if(cp&&cp.torch)ov.querySelector('.sc9tor').hidden=!1}catch{}loop()}catch(e){noCam()}};
  const fit=()=>{const r=vid.getBoundingClientRect(),vw=vid.videoWidth,vh=vid.videoHeight;const s=Math.max(r.width/vw,r.height/vh);return{s,ox:(r.width-vw*s)/2,oy:(r.height-vh*s)/2,w:r.width,h:r.height}};
  const loop=()=>{if(closed||!vid.videoWidth){raf=requestAnimationFrame(loop);return}
   timer=setTimeout(()=>{if(closed)return;let det=null;try{det=scDetect(vid,vid.videoWidth,vid.videoHeight,200)}catch{}const F=fit();svg.setAttribute('width',F.w);svg.setAttribute('height',F.h);
    if(det&&det.fill>.12){const q=det.q.map(p=>[p[0]*vid.videoWidth,p[1]*vid.videoHeight]);const mv=lastQ?Math.max(...q.map((p,k)=>Math.hypot(p[0]-lastQ[k][0],p[1]-lastQ[k][1])))/Math.max(vid.videoWidth,vid.videoHeight):1;
     lastQ=lastQ?q.map((p,k)=>[lastQ[k][0]*.45+p[0]*.55,lastQ[k][1]*.45+p[1]*.55]):q;stable=mv<.012?stable+1:0;
     poly.setAttribute('points',lastQ.map(p=>`${p[0]*F.s+F.ox},${p[1]*F.s+F.oy}`).join(' '));svg.classList.add('on');svg.classList.toggle('ok',stable>2);hint.innerHTML=pre+`<b>${i(sct('found').split('·')[0].trim())}</b> · ${i((sct('found').split('·')[1]||'').trim())}`;
     if(autoOn&&stable>=6&&!busy){shot();return}}
    else{stable=0;lastQ=null;svg.classList.remove('on','ok');hint.innerHTML=pre+i(sct('look'))}raf=requestAnimationFrame(loop)},170)};
  const shot=()=>{if(busy||!vid.videoWidth)return;busy=!0;const c=document.createElement('canvas');c.width=vid.videoWidth;c.height=vid.videoHeight;c.getContext('2d').drawImage(vid,0,0);ov.classList.add('sc9flash');setTimeout(()=>ov.classList.remove('sc9flash'),180);
   cancelAnimationFrame(raf);clearTimeout(timer);setTimeout(()=>{busy=!1;fromImage(c,-1)},30)};
  ov.onclick=e=>{const b=e.target.closest('[data-a],[data-m],[data-kd]');if(!b)return;const a=b.dataset.a;
   if(b.dataset.kd){if(idFront)return;kind=b.dataset.kd;g.scKind=kind;$();ov.querySelectorAll('.sc9modes [data-kd]').forEach(x2=>x2.classList.toggle('on',x2===b));const h2=ov.querySelector('.sc9hint');h2&&(h2.innerHTML=`<b>${i(sct('k_'+kind))}</b> · ${i(sct('kh_'+kind))}`);return}
   if(b.dataset.m){mode=b.dataset.m;g.scMode=mode;$();ov.querySelectorAll('.sc9modes [data-m]').forEach(x2=>x2.classList.toggle('on',x2===b));return}
   if(a==='x'){if(pages.length){stop();docView()}else close();return}if(a==='shot')shot();if(a==='auto'){autoOn=!autoOn;g.scAuto=autoOn;$();b.classList.toggle('on',autoOn);b.textContent=`${sct('auto')} ${autoOn?'✓':'–'}`}
   if(a==='pg'&&pages.length){stop();docView()}
   if(a==='tor'){try{const tr=stream.getVideoTracks()[0];const on=!b.classList.contains('on');tr.applyConstraints({advanced:[{torch:on}]});b.classList.toggle('on',on)}catch{}}
   if(a==='gal')ov.querySelector('.sc9gi').click();if(a==='nat')ov.querySelector('.sc9ni').click();if(a==='files')ov.querySelector('.sc9fi').click()};
  {const fi=ov.querySelector('.sc9fi');fi&&fi.addEventListener('change',()=>{const L2=[...fi.files||[]];fi.value='';if(L2.length){cancelAnimationFrame(raf);clearTimeout(timer);stop();importFiles(L2)}})}
  ov.querySelectorAll('.sc9gi').forEach(inp=>inp.addEventListener('change',e=>{const f=e.target.files&&e.target.files[0];if(!f)return;loadFile(f,c=>{cancelAnimationFrame(raf);clearTimeout(timer);fromImage(c,-1)})}));
  start()};
 const loadFile=(f,cb)=>{const u=URL.createObjectURL(f);const im=new Image();im.onload=()=>{const c=document.createElement('canvas');const k=Math.min(1,4032/Math.max(im.naturalWidth,im.naturalHeight));c.width=Math.round(im.naturalWidth*k);c.height=Math.round(im.naturalHeight*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);cb(c)};im.onerror=()=>URL.revokeObjectURL(u);im.src=u};
 const noCam=()=>{stop();ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="x">${scIco.x}</button><b>${i(sct('t'))}</b><span class="sc9b" style="visibility:hidden"></span></div><div class="sc9err"><p>${i(sct('noCam'))}</p><button type="button" class="sc9gold" data-a="nat">${i(sct('native'))}</button><button type="button" class="sc9ghost" data-a="gal">${i(sct('gal'))}</button><input type="file" accept="image/*" hidden class="sc9gi"><input type="file" accept="image/*" capture="environment" hidden class="sc9gi sc9ni"></div>`;
  ov.onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;if(b.dataset.a==='x'){if(pages.length)docView();else close()}if(b.dataset.a==='nat'){if(opt.native&&!pages.length){close();opt.native()}else ov.querySelector('.sc9ni').click()}if(b.dataset.a==='gal')ov.querySelector('.sc9gi').click()};
  ov.querySelectorAll('.sc9gi').forEach(inp=>inp.addEventListener('change',e=>{const f=e.target.files&&e.target.files[0];if(f)loadFile(f,c=>fromImage(c,-1))}))};
 /* --- 2. corners --- */
 const fromImage=(c,rep)=>{stop();if(rep===-1&&retake>=0){rep=retake;retake=-1}let det=null;try{det=scDetect(c,c.width,c.height,520)}catch{}const W=c.width,H=c.height;let q,found=!0;
  if(det)q=det.q.map(p=>[p[0]*W,p[1]*H]);else{found=!1;q=[[W*.04,H*.04],[W*.96,H*.04],[W*.96,H*.96],[W*.04,H*.96]]}
  cur={src:c,det,q:q.map(p=>p.slice()),q0:q.map(p=>p.slice()),rep};editView(found)};
 const editView=found=>{const c=cur.src;ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="back">${scIco.back}</button><b>${i(sct('edges'))}</b><button type="button" class="sc9b" data-a="reset">${scIco.rot}</button></div>
  <div class="sc9ed"><canvas class="sc9ec"></canvas><svg class="sc9es"><polygon/>${[0,1,2,3].map(k=>`<circle data-k="${k}" r="15"/>`).join('')}</svg><canvas class="sc9lens" width="200" height="200" hidden></canvas></div>
  <p class="sc9cap">${i(found?sct('drag'):sct('none'))}</p><button type="button" class="sc9gold sc9go" data-a="flat">${i(sct('flat'))}</button>`;
  const box=ov.querySelector('.sc9ed'),ec=ov.querySelector('.sc9ec'),es=ov.querySelector('.sc9es'),lens=ov.querySelector('.sc9lens');
  const r=box.getBoundingClientRect(),s=Math.min(r.width/c.width,r.height/c.height),dw=Math.round(c.width*s),dh=Math.round(c.height*s),ox=Math.round((r.width-dw)/2),oy=Math.round((r.height-dh)/2);
  ec.width=dw*2;ec.height=dh*2;ec.style.cssText=`left:${ox}px;top:${oy}px;width:${dw}px;height:${dh}px`;ec.getContext('2d').drawImage(c,0,0,dw*2,dh*2);es.setAttribute('width',r.width);es.setAttribute('height',r.height);
  const paint=()=>{es.querySelector('polygon').setAttribute('points',cur.q.map(p=>`${p[0]*s+ox},${p[1]*s+oy}`).join(' '));es.querySelectorAll('circle').forEach(ci=>{const p=cur.q[+ci.dataset.k];ci.setAttribute('cx',p[0]*s+ox);ci.setAttribute('cy',p[1]*s+oy)})};paint();
  let drag=-1;const lx=lens.getContext('2d');
  const showLens=(k)=>{const p=cur.q[k];lens.hidden=!1;const Z=2.6,R=100/Z;lx.clearRect(0,0,200,200);lx.save();lx.beginPath();lx.arc(100,100,100,0,7);lx.clip();lx.fillStyle='#000';lx.fillRect(0,0,200,200);lx.drawImage(c,p[0]-R/s,p[1]-R/s,2*R/s,2*R/s,0,0,200,200);lx.restore();lx.strokeStyle='#E5C987';lx.lineWidth=3;lx.beginPath();lx.arc(100,100,6,0,7);lx.stroke();
   const px=p[0]*s+ox,py=p[1]*s+oy;lens.style.left=Math.max(4,Math.min(r.width-104,px-50))+'px';lens.style.top=(py>140?py-130:py+40)+'px'};
  es.addEventListener('pointerdown',e=>{const t=e.target.closest('circle');let k=t?+t.dataset.k:-1;if(k<0){const b0=es.getBoundingClientRect();let best=1e9;cur.q.forEach((p,j)=>{const d2=Math.hypot(p[0]*s+ox-(e.clientX-b0.left),p[1]*s+oy-(e.clientY-b0.top));if(d2<best&&d2<44){best=d2;k=j}})}if(k<0)return;drag=k;es.setPointerCapture(e.pointerId);e.preventDefault();showLens(k)});
  es.addEventListener('pointermove',e=>{if(drag<0)return;const b0=es.getBoundingClientRect();cur.q[drag]=[Math.max(0,Math.min(c.width,(e.clientX-b0.left-ox)/s)),Math.max(0,Math.min(c.height,(e.clientY-b0.top-oy)/s))];paint();showLens(drag)});
  const up=()=>{drag=-1;lens.hidden=!0};es.addEventListener('pointerup',up);es.addEventListener('pointercancel',up);
  ov.onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;if(a==='back'){const rp=cur.rep;cur=null;rp>=0?pageView(rp):pages.length&&!multi?docView():camView()}if(a==='reset'){cur.q=cur.q0.map(p=>p.slice());paint()}if(a==='flat')process()}};
 /* --- 3. straighten + clean --- */
 const process=()=>{ov.insertAdjacentHTML('beforeend',`<div class="sc9busy"><i></i><span>${i(sct('work'))}</span></div>`);setTimeout(()=>{try{const moved=cur.q.some((p,k)=>Math.hypot(p[0]-cur.q0[k][0],p[1]-cur.q0[k][1])>4);
   const rf=cur.det&&cur.det.mask&&!moved?{q:scOrder(cur.q),E:null,k:1}:scRefine(cur.src,scOrder(cur.q));const q=scOrder(rf.q);let bends=cur.det&&cur.det.mask?scBends(cur.det,q,cur.src.width,cur.src.height):null;if(!bends)bends=scBendsE(rf.E,rf.k,q);const flat=scWarp(cur.src,q,bends);
   const old=cur.rep>=0?pages[cur.rep]:null;const rep=cur.rep;const mk=fl=>{const pg={flat:fl,rot:0,mode:old?old.mode:(kind==='board'?'col':kind==='id'?'col':mode),smooth:old?old.smooth:(kind==='doc'||kind==='book')&&g.scSmooth!==!1,before:cur.src,q,det:cur.det,q0:cur.q0,kind};render(pg);return pg};
   if(rep<0&&kind==='bcard'){const pg=mk(flat);cur=null;bcardView(pg);return}
   if(rep<0&&kind==='id'){if(!idFront){idFront=flat;cur=null;T(sct('idBack'));camView();return}const comp=scIdSheet(idFront,flat);idFront=null;const pg=mk(comp);pg.mode='col';render(pg);pages.push(pg);cur=null;multi?(T(sct('pgOk',{n:pages.length})),camView()):docView();return}
   if(rep<0&&kind==='book'&&flat.width>flat.height*1.05){const hw=Math.floor(flat.width/2);const halves=[0,1].map(s2=>{const c2=document.createElement('canvas');c2.width=hw;c2.height=flat.height;c2.getContext('2d').drawImage(flat,s2*hw,0,hw,flat.height,0,0,hw,flat.height);return c2});halves.forEach(h2=>pages.push(mk(h2)));cur=null;multi?(T(sct('pgOk',{n:pages.length})),camView()):docView();return}
   const pg=mk(flat);if(rep>=0)pages[rep]=pg;else pages.push(pg);cur=null;
   if(rep>=0)pageView(rep);else if(multi){T(sct('pgOk',{n:pages.length}));camView()}else docView()}catch(e){const bz=ov.querySelector('.sc9busy');bz&&bz.remove();T(String(e&&e.message||e))}},40)};
 /* --- 4. one page --- */
 const pageView=k=>{const pg=pages[k];if(!pg)return docView();const noteT=()=>pg.mode==='orig'?sct('noteO'):pg.smooth?sct('noteS'):sct('note');const bef=document.createElement('canvas');{const c=pg.before,s=300/Math.max(c.width,c.height);bef.width=c.width*s;bef.height=c.height*s;const x=bef.getContext('2d');x.drawImage(c,0,0,bef.width,bef.height);x.strokeStyle='#E5C987';x.lineWidth=2;x.beginPath();pg.q.forEach((p,j)=>x[j?'lineTo':'moveTo'](p[0]*s,p[1]*s));x.closePath();x.stroke()}
  ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="back">${scIco.back}</button><b>${i(sct('pgN',{n:k+1}))}</b><button type="button" class="sc9b" data-a="ok">✓</button></div>
  <div class="sc9cmp"><div><small>${i(sct('was'))}</small><img class="sc9bf" alt=""></div><div><small>${i(sct('now'))}</small><img class="sc9af" alt=""></div></div>
  <p class="sc9note">${i(noteT())}</p>
  <div class="sc9seg">${['doc','col','orig'].map(m2=>`<button type="button" data-m="${m2}" class="${pg.mode===m2?'on':''}">${i(sct(m2))}</button>`).join('')}</div>
  <button type="button" class="sc9tg" data-a="smooth" role="switch" aria-checked="${pg.smooth?'true':'false'}"><span><b>${i(sct('sm'))}</b><small>${i(sct('smS'))}</small></span><i class="${pg.smooth?'on':''}"></i></button>
  <div class="sc9tools sc9t6"><button type="button" data-a="fix"><b>⌗</b>${i(sct('fix'))}</button><button type="button" data-a="rot"><b>⟳</b>${i(sct('rot'))}</button><button type="button" data-a="erase"><b>◌</b>${i(sct('erase'))}</button><button type="button" data-a="sign"><b>✍︎</b>${i(sct('sign'))}</button><button type="button" data-a="re"><b>↺</b>${i(sct('retake'))}</button><button type="button" data-a="del"><b>🗑</b>${i(sct('del'))}</button></div>
  <button type="button" class="sc9gold sc9go" data-a="ok">${i(sct('ready'))}</button>`;
  ov.querySelector('.sc9bf').src=bef.toDataURL('image/jpeg',.7);const paintA=()=>{ov.querySelector('.sc9af').src=pg.out.toDataURL('image/jpeg',.7)};paintA();
  const busyDo=fn=>{ov.insertAdjacentHTML('beforeend',`<div class="sc9busy"><i></i><span>${i(sct('work'))}</span></div>`);setTimeout(()=>{try{fn()}finally{const bz=ov.querySelector('.sc9busy');bz&&bz.remove()}},40)};
  ov.onclick=e=>{const b=e.target.closest('[data-a],[data-m]');if(!b||busy)return;
   if(b.dataset.m){pg.mode=b.dataset.m;if(pg.mode!=='orig'){mode=pg.mode;g.scMode=mode;$()}/* «Оригинал» is a one-page choice, never the default */busyDo(()=>{render(pg);ov.querySelectorAll('.sc9seg button').forEach(x2=>x2.classList.toggle('on',x2===b));ov.querySelector('.sc9note').textContent=noteT();paintA()});return}
   const a=b.dataset.a;
   if(a==='smooth'){pg.smooth=!pg.smooth;g.scSmooth=pg.smooth;if(pg.smooth&&pg.mode==='orig'){/* smoothing an untouched photo shows nothing — switch to the clean document */pg.mode=mode;ov.querySelectorAll('.sc9seg button').forEach(x2=>x2.classList.toggle('on',x2.dataset.m===pg.mode))}$();busyDo(()=>{render(pg);if(pg.smooth&&pg.sm===pg.flat)T(sct('smOff'));b.setAttribute('aria-checked',pg.smooth?'true':'false');b.querySelector('i').classList.toggle('on',pg.smooth);ov.querySelector('.sc9note').textContent=noteT();paintA()});return}
   if(a==='fix'){cur={src:pg.before,det:pg.det,q:pg.q.map(p=>p.slice()),q0:pg.q0.map(p=>p.slice()),rep:k};editView(!0);return}
   if(a==='rot'){pg.rot=(pg.rot+1)%4;scRotMarks(pg);busyDo(()=>{render(pg);paintA()});return}
   if(a==='erase'){eraseView(k);return}
   if(a==='sign'){g.scSig?signPlace(k):signPad(()=>signPlace(k),()=>pageView(k));return}
   if(a==='re'){cur=null;retake=k;camView();return}
   if(a==='del'){pages.splice(k,1);ocr=null;pages.length?docView():camView();return}
   if(a==='back'||a==='ok')docView()}};
 /* --- 5. the document: all pages, order, name, PDF, text --- */
 const docView=()=>{stop();retake=-1;const n=pages.length;
  ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="cam" aria-label="+">${scIco.back}</button><b>${i(sct('docT'))}</b><button type="button" class="sc9b" data-a="x" aria-label="×">${scIco.x}</button></div>
  <label class="sc9name">📄 <input type="text" maxlength="100" placeholder="${i(sct('nameP'))}" value="${i(title)}"></label>
  <div class="sc9grid">${pages.map((p,k)=>`<div class="sc9cell" data-p="${k}"><img alt=""><button type="button" class="sc9rm" data-a="rm" data-k="${k}" aria-label="×">✕</button><em>${k+1}</em></div>`).join('')}${multi||!n?`<button type="button" class="sc9add" data-a="cam" aria-label="${i(sct('add'))}">+</button>`:''}</div>
  <p class="sc9tip">${i(n>1?sct('tipM'):sct('tip1'))}</p>
  <div class="sc9info"><div><b>${i(sct('pages',{n}))}</b>PDF · A4</div><button type="button" data-a="txt"><b>${ocr?'✓':'Aa'}</b>${i(sct('txt'))}</button><button type="button" data-a="pdf"><b>⇪</b>${i(sct('share'))}</button></div>
  <button type="button" class="sc9gold sc9go" data-a="save">${i(opt.card?sct('next'):(opt.saveLabel||sct('saveDoc')))}</button><p class="sc9priv">${i(sct('priv'))}</p>`;
  ov.querySelectorAll('.sc9cell img').forEach((im,k)=>{im.src=pages[k].out.toDataURL('image/jpeg',.45)});
  const inp=ov.querySelector('.sc9name input');inp.addEventListener('input',()=>{title=inp.value});
  /* hold and drag to change the order */const grid=ov.querySelector('.sc9grid');let dragEl=null,dragK=-1,lpT=0,sx0=0,sy0=0,moved=!1;
  grid.addEventListener('pointerdown',e=>{const c=e.target.closest('.sc9cell');if(!c||e.target.closest('.sc9rm'))return;sx0=e.clientX;sy0=e.clientY;moved=!1;const k=+c.dataset.p;clearTimeout(lpT);lpT=setTimeout(()=>{dragEl=c;dragK=k;c.classList.add('drag');try{grid.setPointerCapture(e.pointerId)}catch{}navigator.vibrate&&navigator.vibrate(10)},280)});
  grid.addEventListener('pointermove',e=>{if(!dragEl){if(Math.hypot(e.clientX-sx0,e.clientY-sy0)>8){clearTimeout(lpT);moved=!0}return}e.preventDefault();dragEl.style.transform=`translate(${e.clientX-sx0}px,${e.clientY-sy0}px) scale(1.06) rotate(-3deg)`});
  const end=e=>{clearTimeout(lpT);if(!dragEl){const c=e.target.closest&&e.target.closest('.sc9cell');if(c&&!moved&&e.type==='pointerup'&&!e.target.closest('.sc9rm'))pageView(+c.dataset.p);return}
   const cells=[...grid.querySelectorAll('.sc9cell')];let best=dragK,bd=1e9;cells.forEach((c,k)=>{if(c===dragEl)return;const r=c.getBoundingClientRect(),d=Math.hypot(r.left+r.width/2-e.clientX,r.top+r.height/2-e.clientY);if(d<bd){bd=d;best=k}});const r0=dragEl.getBoundingClientRect();const d0=Math.hypot(r0.left+r0.width/2-e.clientX,r0.top+r0.height/2-e.clientY);
   dragEl.classList.remove('drag');dragEl.style.transform='';const from=dragK;dragEl=null;dragK=-1;if(best!==from&&bd<Math.max(70,d0)){const[p]=pages.splice(from,1);pages.splice(best,0,p);ocr=null;docView()}};
  grid.addEventListener('pointerup',end);grid.addEventListener('pointercancel',end);
  ov.onclick=async e=>{const b=e.target.closest('[data-a]');if(!b||busy)return;const a=b.dataset.a;
   if(a==='rm'){e.stopPropagation();pages.splice(+b.dataset.k,1);ocr=null;docView();return}
   if(a==='cam'){if(!multi&&pages.length){return}camView();return}
   if(a==='x'){if(items){keepItem();inboxView();return}if(!pages.length||confirmClose())close();return}
   if(a==='save'){if(!pages.length)return;if(opt.card){ensureOcr(cardView,docView)}else finish();return}
   if(a==='pdf'){if(!pages.length)return;pdfChoose();return}
   if(a==='txt'){if(!pages.length)return;textView();return}}};
 const confirmClose=()=>{try{return window.confirm(sct('closeQ'))}catch{return!0}};
 /* --- 6. text --- */
 const textView=()=>ensureOcr(textShow,docView);
 const ensureOcr=async(next,back)=>{if(ocr)return next();if(ocrBusy)return;ocrBusy=!0;ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="stop">${scIco.back}</button><b>${i(sct('ocrT'))}</b><span class="sc9b" style="visibility:hidden"></span></div>
   <div class="sc9ocr"><div class="sc9ops">${pages.map((p,k)=>`<img data-k="${k}" alt="">`).join('')}</div><div class="sc9bar2"><i style="width:0"></i></div><p class="sc9opt">${i(sct('pgOf',{a:1,b:pages.length}))}</p><p class="sc9ops2">${i(sct('ocrS'))}</p><pre class="sc9live"></pre></div>
   <button type="button" class="sc9ghost sc9stop" data-a="stop">${i(sct('stop'))}</button>`;
   ov.querySelectorAll('.sc9ops img').forEach((im,k)=>{im.src=pages[k].out.toDataURL('image/jpeg',.35)});let stopped=!1;
   ov.onclick=e=>{const b=e.target.closest('[data-a]');if(b&&b.dataset.a==='stop'){stopped=!0;ocrBusy=!1;back()}};
   try{const res=await scOcr(pages.map(p=>{let f=p.smooth&&p.sm?p.sm:p.flat;for(let k=0;k<p.rot;k++)f=scRot(f);return f}),(f,dn)=>{if(stopped)return;const bar=ov.querySelector('.sc9bar2 i');bar&&(bar.style.width=Math.round(f*100)+'%');const t=ov.querySelector('.sc9opt');t&&(t.textContent=sct('pgOf',{a:Math.min(pages.length,dn+1),b:pages.length}));ov.querySelectorAll('.sc9ops img').forEach((im,k)=>{im.className=k<dn?'ok':k===dn?'now':''})});
    ocrBusy=!1;if(stopped)return;ocr=res}catch(err){ocrBusy=!1;if(stopped)return;T(sct('ocrErr'));ocr=pages.map(()=>({text:'',words:[],conf:0}))}next()};
 const textShow=()=>{if(!ocr)return;let tab=-1;const txt=()=>tab<0?ocr.map(o=>o.text).join('\n\n'):(ocr[tab]||{}).text||'';
  const paint=()=>{ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="back">${scIco.back}</button><b>${i(sct('txt'))}</b><span class="sc9b" style="visibility:hidden"></span></div>
   ${ocr.length>1?`<div class="sc9tabs"><button type="button" data-t="-1" class="${tab<0?'on':''}">${i(sct('allP'))}</button>${ocr.map((_,k)=>`<button type="button" data-t="${k}" class="${tab===k?'on':''}">${k+1}</button>`).join('')}</div>`:''}
   <div class="sc9txt" contenteditable="true" spellcheck="false">${scNum(txt()).replace(/\n/g,'<br>')||`<em>${i(sct('noTxt'))}</em>`}</div>
   <p class="sc9warn">⚠︎ ${i(sct('chk'))}${ocr.some(o=>o.conf&&o.conf<70)?' '+i(sct('lowQ')):''}</p>
   <div class="sc9acts"><button type="button" data-a="copy"><b>⧉</b>${i(sct('copy'))}</button><button type="button" data-a="send"><b>⇪</b>${i(sct('sendT'))}</button><button type="button" data-a="note"><b>✎</b>${i(sct('toNote'))}</button></div>
   <button type="button" class="sc9gold sc9go" data-a="back">${i(sct('ready'))}</button>`;
   const ed=ov.querySelector('.sc9txt');ed.addEventListener('input',()=>{const v=ed.innerText.replace(/ /g,' ');if(tab<0){const parts=v.split(/\n{2,}/);if(ocr.length===1)ocr[0].text=v;else if(parts.length===ocr.length)parts.forEach((p,k)=>ocr[k].text=p);else{ocr[0].text=v;for(let k=1;k<ocr.length;k++)ocr[k].text=''}}else ocr[tab].text=v});
   ov.onclick=async e=>{const tb=e.target.closest('[data-t]');if(tb){tab=+tb.dataset.t;paint();return}const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,v=ed.innerText.trim();
    if(a==='back'){docView();return}
    if(a==='copy'){try{await navigator.clipboard.writeText(v);T(sct('copied'))}catch{try{const r=document.createRange();r.selectNodeContents(ed);const s2=getSelection();s2.removeAllRanges();s2.addRange(r);document.execCommand('copy');T(sct('copied'))}catch{}}return}
    if(a==='send'){try{if(navigator.share){await navigator.share({text:v,title:title.trim()||undefined});return}}catch(err){if(err&&err.name==='AbortError')return}try{await navigator.clipboard.writeText(v);T(sct('copied'))}catch{}return}
    if(a==='note'){try{g.notes=g.notes||[];g.notes.unshift({id:V(),title:(title.trim()||sct('t')).slice(0,80),text:v,ts:Date.now()});$();T(sct('noted'))}catch(err){T(String(err&&err.message||err))}return}}};
  paint()};
 /* --- 7. the card: what the butler understood --- */
 const types=fid=>{const gs=Eg[fid]||gd.map(q2=>q2[0]);return gd.filter(q2=>gs.includes(q2[0])).flatMap(q2=>q2[1].map(t2=>t2[0])).filter(k2=>k2!=='free')};
 const cardView=()=>{if(!card){card=scClassify(ocr.map(o=>o.text).join('\n\n'));if(opt.folder&&Vs(opt.folder)){card.folder=opt.folder;const T6=types(opt.folder);if(!T6.includes(card.type))card.type=T6.includes('cert')?'cert':T6[0]||'cert'}}if(!title.trim())title=card.title;const F=Ke().folders.filter(f2=>!f2.sp);
  const paint=()=>{const T4=types(card.folder);if(!T4.includes(card.type))T4.unshift(card.type);const want=(Ct[card.type]||[])[1]||[];
   ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="back">${scIco.back}</button><b>${i(sct('cardT'))}</b>${items?`<span class="sc9cnt">${ci+1}/${items.length}</span>`:'<span class="sc9b" style="visibility:hidden"></span>'}</div>
   <div class="sc9card">
    <div class="sc9und ${card.sure?'':'warn'}"><span>${(Ct[card.type]||['📄'])[0]}</span><div><b>${i(card.sure?sct('und'):sct('undQ'))}</b><small>${i([Ye('t_'+card.type),card.org].filter(Boolean).join(' · '))}</small></div></div>
    <label class="sc9f"><span>${i(sct('fTitle'))}</span><input data-k="title" value="${i(title)}" maxlength="100"></label>
    <div class="sc9f2"><label class="sc9f"><span>${i(sct('fFolder'))}</span><select data-k="folder">${F.map(f2=>`<option value="${i(f2.id)}" ${f2.id===card.folder?'selected':''}>${i(Ri(f2))}</option>`).join('')}</select></label>
    <label class="sc9f"><span>${i(sct('fType'))}</span><select data-k="type">${T4.map(k2=>`<option value="${k2}" ${k2===card.type?'selected':''}>${(Ct[k2]||[''])[0]} ${i(Ye('t_'+k2))}</option>`).join('')}</select></label></div>
    ${want.map(fk=>{const ty=Eu[fk]||'text';if(ty.startsWith('sel:'))return'';return`<label class="sc9f"><span>${i(Ye(fk))}</span><input data-f="${fk}" ${ty==='date'?'type="date"':ty==='money'||ty==='num'?'inputmode="decimal"':''} value="${i(card.f[fk]||'')}"></label>`}).join('')}
    ${card.amt&&!want.includes('amount')?`<p class="sc9amt">${i(card.sign==='+'?sct('refund'):sct('pay'))}: <b>${i(card.amt.replace('.',','))} €</b></p>`:''}
    <div class="sc9due ${card.due?'':'off'}"><label class="sc9f"><span>${i(card.dueK==='objection'?sct('dueObj'):card.dueK==='pay'?sct('duePay'):sct('due'))}</span><input type="date" data-k="due" value="${i(card.due||'')}"></label>
     <button type="button" class="sc9tg sc9tgs" data-a="remind" role="switch" aria-checked="${card.remind?'true':'false'}"><span><b>${i(sct('remind'))}</b><small>${i(card.dueK==='objection'?sct('dueObjS'):sct('remindS'))}</small></span><i class="${card.remind?'on':''}"></i></button></div>
    <p class="sc9warn">⚠︎ ${i(sct('cardChk'))}</p>
   </div>
   <button type="button" class="sc9gold sc9go" data-a="saveA">${i(items?sct('saveOne'):sct('save'))}</button>`;
   ov.querySelectorAll('.sc9card input,.sc9card select').forEach(el=>el.addEventListener(el.tagName==='SELECT'?'change':'input',()=>{const k2=el.dataset.k,fk=el.dataset.f;
    if(fk){card.f[fk]=el.value;return}if(k2==='title'){title=el.value;return}if(k2==='due'){card.due=el.value;card.remind=!!el.value&&card.remind;return}
    if(k2==='folder'){card.folder=el.value;const T5=types(card.folder);if(!T5.includes(card.type))card.type=T5.includes('cert')?'cert':T5[0]||'cert';refill();paint();return}
    if(k2==='type'){card.type=el.value;refill();paint()}}));
   ov.onclick=async e=>{const b=e.target.closest('[data-a]');if(!b||busy)return;const a=b.dataset.a;
    if(a==='back'){items?(keepItem(),inboxView()):docView();return}
    if(a==='remind'){card.remind=!card.remind&&!!card.due;b.setAttribute('aria-checked',card.remind?'true':'false');b.querySelector('i').classList.toggle('on',card.remind);return}
    if(a==='saveA'){b.disabled=!0;busy=!0;try{const d=await saveArchive({pages,title,ocr,card});busy=!1;if(items){items[ci].saved=d&&d.id;items[ci].pages=[];inboxView()}else{close();if(d){m.bdid=d.id;R('bdoc')}}}catch(err){busy=!1;T(String(err&&err.message||err));b.disabled=!1}}}};
  const refill=()=>{const want=(Ct[card.type]||[])[1]||[];Object.keys(card.f).forEach(q2=>{if(!want.includes(q2))delete card.f[q2]});const src={issuer:card.org,vendor:card.org,bank:card.org,inst:card.org,number:card.num,issued:card.letter,date:card.letter};want.forEach(q2=>{if(!card.f[q2]&&src[q2])card.f[q2]=src[q2]})};
  paint()};
 const saveArchive=async it=>{const files=[];const nm='scan-'+stamp();for(let k=0;k<it.pages.length;k++){const blob=await new Promise(r=>it.pages[k].out.toBlob(r,'image/jpeg',.88));if(blob)files.push(new File([blob],`${nm}-${k+1}.jpg`,{type:'image/jpeg'}))}
  const c=it.card||{};const n=gt({id:V(),title:(it.title||'').trim().slice(0,100)||c.title||sct('t'),kind:'other',party:c.org||'',start:'',end:'',notice:'',note:'',files:[],pages:[],ts:Date.now()});
  n.folder=c.folder||(Ke().folders.find(f2=>!f2.sp)||{}).id;n.date=c.letter||x(new Date());if(c.type&&Ct[c.type]){n.dtype=c.type;n.who='me';n.f=Object.assign({},c.f||{})}
  Ke().items.push(n);$();await xo(n,files,'orig','');const txt=(it.ocr||[]).map(o=>o.text).join('\n\n').trim();if(txt){Fa.text[n.id]=txt;await Km(n.id)}
  if(it.ocr&&it.ocr.length===n.pages.length)try{await ao('dwords',n.id,{p:it.ocr.map(o=>o.words)})}catch{}
  if(c.remind&&c.due)try{g.tasks=g.tasks||[];g.tasks.push({id:V(),t:(c.dueK==='objection'?sct('taskObj'):c.dueK==='pay'?sct('taskPay'):sct('taskDue'))+': '+n.title,due:c.due,time:'',prio:1,proj:'',done:!1})}catch{}
  n.ts=Date.now();$();T(sct('savedTo',{f:Ri(Vs(n.folder)||{})}));return n};
 /* --- 8. many files: the inbox --- */
 const keepItem=()=>{if(items&&ci>=0&&items[ci]&&!items[ci].saved)Object.assign(items[ci],{pages,title,ocr,card})};
 const openItem=k=>{ci=k;const it=items[k];pages=it.pages;title=it.title||'';ocr=it.ocr;card=it.card;cardView()};
 const toCanvas=f=>new Promise(res=>loadFile(f,res));
 const pageFrom=(c,photo)=>{let det=null;if(photo)try{det=scDetect(c,c.width,c.height,520)}catch{}const W=c.width,H=c.height,full=[[0,0],[W,0],[W,H],[0,H]];let pg;
  if(det&&det.conf>=.5&&det.fill<.92){const q=scOrder(det.q.map(p=>[p[0]*W,p[1]*H]));const bends=det.mask?scBends(det,q,W,H):null;pg={flat:scWarp(c,q,bends),before:c,q,det,q0:q.map(p=>p.slice())}}
  else pg={flat:scDeskew(c),before:c,q:full,det:null,q0:full.map(p=>p.slice())};Object.assign(pg,{rot:0,mode:'doc',smooth:!1});render(pg);return pg};
 const pagesOf=async f=>{const out=[];if(/pdf/i.test(f.type)||/\.pdf$/i.test(f.name)){const bl=await b1(f);for(const b2 of bl){const c=await toCanvas(new File([b2],'p.jpg',{type:'image/jpeg'}));out.push(pageFrom(c,!1))}}else{const c=await toCanvas(f);out.push(pageFrom(c,!0))}return out};
 const importFiles=async L2=>{if(L2.length===1&&!/pdf/i.test(L2[0].type)&&!/\.pdf$/i.test(L2[0].name)){loadFile(L2[0],c=>fromImage(c,-1));return}
  if(L2.length===1){ov.insertAdjacentHTML('beforeend',`<div class="sc9busy"><i></i><span>${i(sct('work'))}</span></div>`);try{const ps=await pagesOf(L2[0]);if(!ps.length)throw 0;pages=pages.concat(ps);if(!title)title=L2[0].name.replace(/\.[^.]+$/,'');docView()}catch(err){T(sct('impErr'));const bz=ov.querySelector('.sc9busy');bz&&bz.remove()}return}
  items=L2.map(f=>({f,name:f.name.replace(/\.[^.]+$/,''),pages:[],title:'',ocr:null,card:null,st:'wait'}));pages=[];inboxView();
  for(const it of items){if(closed)return;it.st='work';inboxView(!0);try{it.pages=await pagesOf(it.f);if(!it.pages.length)throw 0;const res=await scOcr(it.pages.map(p=>p.flat));it.ocr=res;it.card=scClassify(res.map(o=>o.text).join('\n\n'));it.title=it.card.title||it.name;it.st='ok'}catch(err){it.st='err'}inboxView(!0)}};
 const inboxView=soft=>{if(!items)return;if(soft&&!ov.querySelector('.sc9inbox'))return;const done=items.filter(q2=>q2.st==='ok'||q2.st==='err').length,left=items.filter(q2=>q2.st==='ok'&&!q2.saved).length;
  ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="x">${scIco.x}</button><b>${i(sct('inbox'))}</b><span class="sc9cnt">${done}/${items.length}</span></div>
  <div class="sc9inbox">${items.map((it,k)=>`<button type="button" class="sc9it ${it.saved?'saved':''}" data-k="${k}" ${it.st!=='ok'||it.saved?'disabled':''}><span class="th">${it.pages[0]?'<img alt="">':it.st==='work'?'<i class="sp"></i>':it.st==='err'?'⚠︎':'…'}</span><span class="tx"><b>${i(it.title||it.name)}</b><small>${it.saved?'✓ '+i(sct('saved')):it.st==='ok'?i([(Ct[it.card.type]||[''])[0]+' '+Ye('t_'+it.card.type),Ri(Vs(it.card.folder)||{}),it.pages.length+' '+sct('pp')].join(' · '))+(it.card.sure?'':' · <em>'+i(sct('check'))+'</em>'):it.st==='err'?i(sct('impErr')):it.st==='work'?i(sct('work')):i(sct('waitT'))}</small></span>${it.st==='ok'&&!it.saved?'<em class="chev">›</em>':''}</button>`).join('')}</div>
  <button type="button" class="sc9gold sc9go" data-a="all" ${left?'':'disabled'}>${i(sct('saveAll',{n:left}))}</button><p class="sc9priv">${i(sct('priv'))}</p>`;
  ov.querySelectorAll('.sc9it').forEach(b2=>{const it=items[+b2.dataset.k],im=b2.querySelector('img');if(im&&it.pages[0])im.src=it.pages[0].out.toDataURL('image/jpeg',.35)});
  ov.onclick=async e=>{const b=e.target.closest('[data-a],[data-k]');if(!b||busy)return;if(b.dataset.k!=null){openItem(+b.dataset.k);return}const a=b.dataset.a;
   if(a==='x'){if(!left||confirmClose()){items=null;close()}return}
   if(a==='all'){b.disabled=!0;busy=!0;let n2=0,lastF='';for(const it of items){if(it.st!=='ok'||it.saved)continue;try{const d=await saveArchive(it);it.saved=d.id;it.pages=[];n2++;lastF=d.folder}catch{}}busy=!1;T(sct('savedN',{n:n2}));items=null;close();if(lastF){m.arcf=lastF;R('arcf')}}}};
 /* --- 9. business card → contact --- */
 const bcardView=async pg=>{ov.innerHTML=`<div class="sc9top"><span class="sc9b" style="visibility:hidden"></span><b>${i(sct('k_bcard'))}</b><span class="sc9b" style="visibility:hidden"></span></div><div class="sc9busy" style="position:relative;flex:1;background:none"><i></i><span>${i(sct('ocrT'))}</span></div>`;
  let txt='';try{const r=await scOcr([pg.flat]);txt=r[0]&&r[0].text||''}catch{}const c=scParseCard(txt);
  const F=[['first','cFirst'],['last','cLast'],['company','cCo'],['role','cRole'],['phone','cPh'],['phone2','cPh2'],['email','cMail'],['web','cWeb'],['addr','cAddr']];
  ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="back">${scIco.back}</button><b>${i(sct('k_bcard'))}</b><span class="sc9b" style="visibility:hidden"></span></div>
  <div class="sc9card"><div class="sc9bc"><img alt=""></div>${F.map(([k2,l])=>`<label class="sc9f"><span>${i(sct(l))}</span><input data-c="${k2}" value="${i(c[k2])}" ${/phone/.test(k2)?'inputmode="tel"':k2==='email'?'inputmode="email"':''}></label>`).join('')}<p class="sc9warn">⚠︎ ${i(sct('cChk'))}</p></div>
  <div class="sc9acts2"><button type="button" class="sc9ghost" data-a="vcf">⇪ ${i(sct('cVcf'))}</button></div>
  <button type="button" class="sc9gold sc9go" data-a="saveC">${i(sct('cSave'))}</button>`;
  ov.querySelector('.sc9bc img').src=pg.out.toDataURL('image/jpeg',.6);ov.querySelectorAll('[data-c]').forEach(el=>el.addEventListener('input',()=>{c[el.dataset.c]=el.value.trim()}));
  ov.onclick=async e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;if(a==='back'){camView();return}
   if(a==='vcf'){const f2=new File([scVcf(c)],(([c.first,c.last].join(' ').trim()||c.company||'contact').replace(/[^\wäöüÄÖÜß -]/g,''))+'.vcf',{type:'text/vcard'});try{if(navigator.canShare&&navigator.canShare({files:[f2]})){await navigator.share({files:[f2]});return}}catch(err){if(err&&err.name==='AbortError')return}try{const u=URL.createObjectURL(f2);const a2=document.createElement('a');a2.href=u;a2.download=f2.name;document.body.appendChild(a2);a2.click();setTimeout(()=>{URL.revokeObjectURL(u);a2.remove()},4000)}catch{}return}
   if(a==='saveC'){if(!c.first&&!c.last&&!c.company){T(sct('cNone'));return}try{g.contacts=g.contacts||[];const ph=[c.phone,c.phone2].filter(Boolean);g.contacts.push({id:V(),v2:1,first:c.first,last:c.last,name:[c.first,c.last].filter(Boolean).join(' ')||c.company,company:c.company,role:c.role,phone:ph[0]||'',phones2:ph.slice(1).map(v2=>({t:'mobile',v:v2})),email:c.email,web:c.web,addr:c.addr,cat:'work',imp:'n',status:'active',notes:[],hist:[],files:[],c:Date.now()});$();T(sct('cOk'));close()}catch(err){T(String(err&&err.message||err))}}}};
 /* --- 10. eraser --- */
 const eraseView=k=>{const pg=pages[k];const base=pg.out;ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="back">${scIco.back}</button><b>${i(sct('erase'))}</b><button type="button" class="sc9b" data-a="undo">↶</button></div>
  <div class="sc9ed"><canvas class="sc9ec"></canvas></div><div class="sc9sz">${[.012,.025,.045].map((r,j)=>`<button type="button" data-r="${r}" class="${j===1?'on':''}"><i style="width:${8+j*8}px;height:${8+j*8}px"></i></button>`).join('')}</div>
  <p class="sc9cap">${i(sct('eraseH'))}</p><button type="button" class="sc9gold sc9go" data-a="ok">${i(sct('ready'))}</button>`;
  const box=ov.querySelector('.sc9ed'),cv=ov.querySelector('.sc9ec'),rb=box.getBoundingClientRect(),s=Math.min(rb.width/base.width,rb.height/base.height),dw=Math.round(base.width*s),dh=Math.round(base.height*s);
  cv.width=dw*2;cv.height=dh*2;cv.style.cssText=`left:${Math.round((rb.width-dw)/2)}px;top:${Math.round((rb.height-dh)/2)}px;width:${dw}px;height:${dh}px;touch-action:none`;const x=cv.getContext('2d');
  pg.erase=pg.erase||[];let rad=.025,curS=null;const paint=()=>{x.drawImage(pg.out,0,0,cv.width,cv.height)};paint();
  const pt=e=>{const r=cv.getBoundingClientRect();return[Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))]};
  const dot=(p,q)=>{x.save();x.strokeStyle='#fff';x.fillStyle='#fff';x.lineCap='round';x.lineWidth=rad*cv.width*2;x.beginPath();if(q){x.moveTo(q[0]*cv.width,q[1]*cv.height);x.lineTo(p[0]*cv.width,p[1]*cv.height);x.stroke()}else{x.arc(p[0]*cv.width,p[1]*cv.height,rad*cv.width,0,7);x.fill()}x.restore()};
  cv.addEventListener('pointerdown',e=>{e.preventDefault();cv.setPointerCapture(e.pointerId);const p=pt(e);curS={r:rad,p:[p]};dot(p)});
  cv.addEventListener('pointermove',e=>{if(!curS)return;const p=pt(e),q=curS.p[curS.p.length-1];if(Math.hypot(p[0]-q[0],p[1]-q[1])<.003)return;curS.p.push(p);dot(p,q)});
  const up=()=>{if(curS){pg.erase.push(curS);curS=null;scMarks(pg);ocr=null}};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  ov.onclick=e=>{const sz=e.target.closest('[data-r]');if(sz){rad=+sz.dataset.r;ov.querySelectorAll('.sc9sz button').forEach(b2=>b2.classList.toggle('on',b2===sz));return}const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;
   if(a==='undo'){pg.erase.pop();render(pg);paint();return}if(a==='back'||a==='ok')pageView(k)}};
 /* --- 11. signature: draw once, then place with a tap --- */
 const signPad=(next,back)=>{ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="back">${scIco.back}</button><b>${i(sct('signNew'))}</b><button type="button" class="sc9b" data-a="clr">↺</button></div>
  <div class="sc9pad"><canvas width="1200" height="420"></canvas><i></i></div><p class="sc9cap">${i(sct('signH'))}</p><button type="button" class="sc9gold sc9go" data-a="ok">${i(sct('ready'))}</button>`;
  const cv=ov.querySelector('.sc9pad canvas'),x=cv.getContext('2d');x.lineCap='round';x.lineJoin='round';x.strokeStyle='#14306e';let last=null,drawn=!1,lastT=0,lw=11;
  const pt=e=>{const r=cv.getBoundingClientRect();return[(e.clientX-r.left)*cv.width/r.width,(e.clientY-r.top)*cv.height/r.height]};
  cv.addEventListener('pointerdown',e=>{e.preventDefault();cv.setPointerCapture(e.pointerId);last=pt(e);lastT=performance.now()});
  cv.addEventListener('pointermove',e=>{if(!last)return;const p=pt(e),t=performance.now(),v=Math.hypot(p[0]-last[0],p[1]-last[1])/Math.max(1,t-lastT);lw=lw*.7+Math.max(7,Math.min(16,15-v*3))*.3;x.lineWidth=lw;x.beginPath();x.moveTo(...last);x.lineTo(...p);x.stroke();last=p;lastT=t;drawn=!0});
  const up=()=>{last=null};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  ov.onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;if(a==='back'){back();return}if(a==='clr'){x.clearRect(0,0,cv.width,cv.height);drawn=!1;return}
   if(a==='ok'){if(!drawn){back();return}/* trim the empty border */const d=x.getImageData(0,0,cv.width,cv.height).data;let x0=cv.width,y0=cv.height,x1=0,y1=0;for(let y=0;y<cv.height;y+=2)for(let x2=0;x2<cv.width;x2+=2){if(d[(y*cv.width+x2)*4+3]>20){if(x2<x0)x0=x2;if(x2>x1)x1=x2;if(y<y0)y0=y;if(y>y1)y1=y}}
    const pad=12,w=Math.max(10,x1-x0+pad*2),h=Math.max(10,y1-y0+pad*2),o=document.createElement('canvas');o.width=w;o.height=h;o.getContext('2d').drawImage(cv,x0-pad,y0-pad,w,h,0,0,w,h);g.scSig=o.toDataURL('image/png');scSigImg=null;$();next()}}};
 const signPlace=k=>{const pg=pages[k];ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="back">${scIco.back}</button><b>${i(sct('sign'))}</b><button type="button" class="sc9b" data-a="undo">↶</button></div>
  <div class="sc9ed"><canvas class="sc9ec"></canvas></div><p class="sc9cap">${i(sct('signP'))}</p><div class="sc9acts2"><button type="button" class="sc9ghost" data-a="new">✍︎ ${i(sct('signNew'))}</button></div><button type="button" class="sc9gold sc9go" data-a="ok">${i(sct('ready'))}</button>`;
  const box=ov.querySelector('.sc9ed'),cv=ov.querySelector('.sc9ec'),rb=box.getBoundingClientRect(),s=Math.min(rb.width/pg.out.width,rb.height/pg.out.height),dw=Math.round(pg.out.width*s),dh=Math.round(pg.out.height*s);
  cv.width=dw*2;cv.height=dh*2;cv.style.cssText=`left:${Math.round((rb.width-dw)/2)}px;top:${Math.round((rb.height-dh)/2)}px;width:${dw}px;height:${dh}px;touch-action:none`;const x=cv.getContext('2d');pg.sigs=pg.sigs||[];
  const paint=()=>{x.drawImage(pg.out,0,0,cv.width,cv.height)};const redo=()=>{render(pg);setTimeout(paint,60)};paint();let drag=null;
  cv.addEventListener('pointerdown',e=>{e.preventDefault();cv.setPointerCapture(e.pointerId);const r=cv.getBoundingClientRect(),p=[(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height];const hit=pg.sigs.findIndex(s2=>Math.abs(s2.x-p[0])<s2.w/2&&Math.abs(s2.y-p[1])<.05);
   if(hit>=0)drag=hit;else{pg.sigs.push({x:p[0],y:p[1],w:.32});drag=pg.sigs.length-1;redo()}});
  cv.addEventListener('pointermove',e=>{if(drag==null)return;const r=cv.getBoundingClientRect();pg.sigs[drag].x=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));pg.sigs[drag].y=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))});
  const up=()=>{if(drag!=null){drag=null;redo()}};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  ov.onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;if(a==='undo'){pg.sigs.pop();redo();return}if(a==='new'){signPad(()=>signPlace(k),()=>signPlace(k));return}if(a==='back'||a==='ok'){ocr=null;pageView(k)}}};
 /* --- 12. PDF: normal or small for e-mail --- */
 const pdfChoose=()=>{const sh=document.createElement('div');sh.className='sc9pick';sh.innerHTML=`<div><b>PDF</b><button type="button" data-q="n">📄 ${i(sct('pdfN'))}<small>${i(sct('pdfNs'))}</small></button><button type="button" data-q="s">✉︎ ${i(sct('pdfS'))}<small>${i(sct('pdfSs'))}</small></button><button type="button" data-q="x" class="cx">${i(sct('cancel'))}</button></div>`;ov.appendChild(sh);
  sh.onclick=async e=>{const b=e.target.closest('[data-q]');if(!b&&e.target!==sh)return;sh.remove();if(!b||b.dataset.q==='x')return;const small=b.dataset.q==='s';ov.insertAdjacentHTML('beforeend',`<div class="sc9busy"><i></i><span>PDF…</span></div>`);
   try{const imgs=pages.map(p=>{if(!small)return{cv:p.out};const k2=Math.min(1,1500/Math.max(p.out.width,p.out.height)),c=document.createElement('canvas');c.width=Math.round(p.out.width*k2);c.height=Math.round(p.out.height*k2);c.getContext('2d').drawImage(p.out,0,0,c.width,c.height);return{cv:c,q:.6}});
    const blob=await scPdf(imgs,ocr,title.trim());T('PDF · '+(blob.size/1048576).toFixed(1).replace('.',',')+' MB');await scSharePdf(blob,pdfName())}catch(err){T(String(err&&err.message||err))}finally{const bz=ov.querySelector('.sc9busy');bz&&bz.remove()}}};
 if(opt.image)fromImage(opt.image,-1);else if(opt.startFiles){setTimeout(()=>{camView();setTimeout(()=>{const fi=ov.querySelector('.sc9fi');fi&&fi.click()},50)},0)}else camView();return{close}}

/* ---------- every document camera in the app opens the scanner ---------- */
const SC_SEL='.dzin[data-m="scan"],.insscanin,[data-asscan],[data-pjscan],[data-mlf],input[data-k="doc"],.bkscanf';
function scWants(inp){try{if(!inp||inp.tagName!=='INPUT'||inp.type!=='file'||inp.__scSkip)return!1;if(!inp.hasAttribute('capture'))return!1;if(!/image/.test(inp.accept||''))return!1;
 if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia))return!1;return inp.matches(SC_SEL)||!!inp.closest('.st7acts,.st9acts,.st33in,.st12f,.st20in')}catch{return!1}}
/* after the pages land in a document: its name, its text (search) and the word positions (PDF text layer) */
async function scAfterDoc(extra){try{if(!extra)return;const d=typeof qe==='function'&&m.bdid?qe(m.bdid):null;if(!d)return;if(extra.title)d.title=extra.title.slice(0,100);
 if(extra.ocr){const t=extra.ocr.map(o=>o.text).join('\n\n').trim();if(t){Fa.text[d.id]=(Fa.text[d.id]?Fa.text[d.id]+'\n\n':'')+t;await Km(d.id)}try{await ao('dwords',d.id,{p:extra.ocr.map(o=>o.words)})}catch{}}d.ts=Date.now();$();if(m.route==='bdoc')v()}catch{}}
document.addEventListener('click',e=>{const inp=e.target;if(!scWants(inp))return;e.preventDefault();e.stopImmediatePropagation();const isDoc=inp.matches('.dzin');
 if(isDoc&&!inp.dataset.arc&&!inp.dataset.d&&inp.closest('.dzacts')){scHome();return}
 if(isDoc&&inp.dataset.arc&&!inp.dataset.d){scOpen({multi:!0,card:!0,folder:inp.dataset.arc,done:()=>{}});return}
 scOpen({multi:inp.multiple||isDoc,saveLabel:isDoc?'':sct('save'),native:()=>{inp.__scSkip=1;try{inp.click()}finally{setTimeout(()=>{inp.__scSkip=0},800)}},
  done:(files,extra)=>{if(!files.length)return;try{const dt=new DataTransfer();(inp.multiple||isDoc?files:files.slice(0,1)).forEach(f=>dt.items.add(f));inp.files=dt.files;inp.dispatchEvent(new Event('input',{bubbles:!0}));inp.dispatchEvent(new Event('change',{bubbles:!0}));
   if(isDoc&&extra&&!inp.dataset.d)setTimeout(()=>scAfterDoc(extra),0)}catch(err){T(String(err&&err.message||err))}}})},!0);
/* the scanner on its own (quick access): a new document in «Документы» */
function scStandalone(){scOpen({multi:!0,card:!0,done:(files,extra)=>{if(!files.length)return;try{const inp=document.createElement('input');inp.type='file';inp.multiple=!0;inp.className='dzin';inp.dataset.m='scan';const dt=new DataTransfer();files.forEach(f=>dt.items.add(f));inp.files=dt.files;
  const p=sr(inp);setTimeout(()=>scAfterDoc(extra),0);Promise.resolve(p).then(()=>scAfterDoc(extra&&{title:extra.title})).catch(()=>{})}catch(err){T(String(err&&err.message||err))}}})}
L.sc9open=scStandalone;
/* ---------- v244: the scanner's own home page ---------- */
function scHome(){document.querySelectorAll('.sc9home').forEach(e=>e.remove());const ov=document.createElement('div');ov.className='sc9 sc9home';document.body.appendChild(ov);document.documentElement.classList.add('sc9on');
 const close=()=>{ov.remove();if(!document.querySelector('.sc9'))document.documentElement.classList.remove('sc9on')};let q='';
 const all=()=>{let A=[];try{A=A.concat(Ke().items.filter(d=>!d.type))}catch{}try{A=A.concat(oa().docs)}catch{}return A.filter(d=>d&&d.id).sort((a,b)=>(b.ts||0)-(a.ts||0))};
 const tag=d=>{try{const t=(g.tasks||[]).find(t2=>!t2.done&&t2.due&&String(t2.t||'').includes(d.title||'@@'));if(t)return'⏰ '+t.due.slice(8,10)+'.'+t.due.slice(5,7)}catch{}return''};
 const sub=d=>{const k=d.dtype&&Ct[d.dtype]?Ct[d.dtype][0]+' '+Ye('t_'+d.dtype):(d.folder?Ri(Vs(d.folder)||{}):'');const n=(d.pages||[]).length;return[k,n?n+' '+sct('pp'):''].filter(Boolean).join(' · ')};
 const row=(d,ex)=>`<button type="button" class="sc9it" data-id="${i(d.id)}"><span class="th">${(d.pages||[])[0]?`<img data-dzimg="${i(d.pages[0].id)}" data-doc="${i(d.id)}" alt="">`:'📄'}</span><span class="tx"><b>${i(d.title||'—')}</b><small>${i(sub(d))}</small>${ex?`<small class="ex">${i(ex)}</small>`:''}</span>${tag(d)?`<em class="tg">${i(tag(d))}</em>`:''}</button>`;
 const list=()=>{const L2=all();if(!q.trim())return L2.slice(0,8).map(d=>row(d)).join('')||`<p class="sc9empty">${i(sct('hEmpty'))}</p>`;const r=L2.map(d=>[d,tI(d,q.trim().toLowerCase())]).filter(x2=>x2[1].ok);return r.map(([d,o])=>row(d,o.ex)).join('')||`<p class="sc9empty">${i(sct('noRes'))}</p>`};
 const paintList=()=>{const el=ov.querySelector('.sc9hl');el.innerHTML=list();try{Sg()}catch{}};
 ov.innerHTML=`<div class="sc9top"><button type="button" class="sc9b" data-a="x">${scIco.back}</button><b>${i(sct('t'))}</b><span class="sc9b" style="visibility:hidden"></span></div>
 <div class="sc9hs"><button type="button" class="sc9big" data-a="cam"><span class="sh"><i><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M3 12h18"/></svg></i></span><span><b>${i(sct('hShot'))}</b><small>${i(sct('hShotS'))}</small></span></button>
 <div class="sc9r3"><button type="button" data-a="book"><b>📖</b>${i(sct('k_book'))}</button><button type="button" data-a="board"><b>🖼</b>${i(sct('k_board'))}</button><button type="button" data-a="files"><b>📂</b>${i(sct('files'))}</button><button type="button" data-a="id"><b>🪪</b>${i(sct('k_id'))}</button><button type="button" data-a="bcard"><b>📇</b>${i(sct('k_bcard'))}</button><button type="button" data-a="arc"><b>🗂</b>${i(sct('arc'))}</button></div>
 <label class="sc9srch">🔍 <input type="search" placeholder="${i(sct('hFind'))}" autocomplete="off"></label>
 <h4 class="sc9h4">${i(sct('hRecent'))}</h4><div class="sc9hl"></div></div>`;
 paintList();const inp=ov.querySelector('.sc9srch input');let tq=0;inp.addEventListener('input',()=>{q=inp.value;clearTimeout(tq);tq=setTimeout(async()=>{if(q.trim().length>=2){try{await Au()}catch{}}ov.querySelector('.sc9h4').textContent=q.trim()?sct('hFound'):sct('hRecent');paintList()},220)});
 ov.onclick=e=>{const it=e.target.closest('[data-id]');if(it){close();m.bdid=it.dataset.id;R('bdoc');return}const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;
  if(a==='x'){close();return}if(a==='cam'){close();scOpen({multi:!0,card:!0,kind:'doc',done:()=>{}});return}if(a==='files'){close();scOpen({multi:!0,card:!0,startFiles:!0,done:()=>{}});return}
  if(a==='id'){close();scOpen({multi:!0,card:!0,kind:'id',done:()=>{}});return}if(a==='book'||a==='board'){close();scOpen({multi:!0,card:!0,kind:a,done:()=>{}});return}if(a==='arc'){close();try{L.cat({id:'archive'})}catch{}return}if(a==='bcard'){close();scOpen({multi:!1,card:!1,kind:'bcard',done:()=>{}});return}}}
/* ---------- v244: ⌗ on the sign-in screen — scan without signing in; pages wait in the quick-drop queue until sign-in ---------- */
function scLockScan(){scOpen({multi:!0,lock:!0,saveLabel:sct('save'),done:async files=>{if(!files.length)return;try{const rec={id:V(),t:'',f:[],at:Date.now()};for(const f of files){const key='bq'+V()+V();await vt.put(key,f);rec.f.push({key,k:'doc',n:f.name,ty:f.type,s:f.size})}br9Q().push(rec);$();T(sct('lockOk'))}catch(err){T(String(err&&err.message||err))}}})}
L.sc9lock=scLockScan;
Yf=(f=>function(){const src=f.apply(this,arguments);try{if(g.br9qcOff||!/h12plus/.test(src)||/sc9lockb/.test(src))return src;return src.replace(/(<button type="button" class="h12plus")/,`<button type="button" class="h12plus sc9lockb" data-act="sc9lock" aria-label="${i(sct('t'))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M4 12h16"/></svg></button>$1`)}catch{return src}})(Yf);

window.__scOpen=scOpen;


{const st=document.createElement('style');st.textContent=`
.sc9{position:fixed;inset:0;z-index:2147483000;background:#0b0b0c;color:#F1E9D6;font-family:inherit;display:flex;flex-direction:column;-webkit-user-select:none;user-select:none;touch-action:none}
html.sc9on,html.sc9on body{overflow:hidden!important}
.sc9 button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent}
.sc9top{flex:none;display:flex;align-items:center;justify-content:space-between;padding:calc(env(safe-area-inset-top,0px) + 10px) 16px 10px}
.sc9top b{font-weight:500;font-size:17px}
.sc9b{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.12)!important;display:grid!important;place-items:center;padding:0}.sc9b svg{width:20px;height:20px}.sc9b.on{background:#E5C987!important;color:#16140f}
.sc9cam{position:relative;flex:1;min-height:0;overflow:hidden;background:#000}
.sc9cam video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.sc9q{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .2s}.sc9q.on{opacity:1}
.sc9q polygon{fill:rgba(229,201,135,.14);stroke:#E5C987;stroke-width:3;stroke-linejoin:round;transition:all .15s linear}.sc9q.ok polygon{fill:rgba(229,201,135,.26);stroke-width:4}
.sc9hint{position:absolute;top:12px;left:50%;transform:translateX(-50%);margin:0;background:rgba(0,0,0,.55);padding:7px 14px;border-radius:999px;font-size:14px;white-space:nowrap;max-width:92%;overflow:hidden;text-overflow:ellipsis}.sc9hint b{color:#E5C987;font-weight:500}
.sc9bar{flex:none;padding:12px 0 calc(env(safe-area-inset-bottom,0px) + 12px);display:flex;flex-direction:column;align-items:center;gap:12px}
.sc9modes{display:flex;gap:18px}.sc9modes button{font-size:13px!important;letter-spacing:.06em;text-transform:uppercase;opacity:.7;padding:4px}.sc9modes button.on{color:#E5C987;opacity:1}
.sc9row{display:flex;align-items:center;justify-content:space-between;width:min(330px,88vw)}
.sc9th{width:48px;height:60px;border-radius:6px;position:relative;padding:0}.sc9th img{width:100%;height:100%;object-fit:cover;border-radius:6px;background:#fff}.sc9th span{position:absolute;top:-8px;right:-8px;background:#C9A25E;color:#16140f;font-size:12px;width:20px;height:20px;border-radius:50%;display:grid;place-items:center}
.sc9shut{width:76px;height:76px;border-radius:50%;border:4px solid #F1E9D6!important;display:grid!important;place-items:center;padding:0}.sc9shut i{width:60px;height:60px;border-radius:50%;background:#F1E9D6;transition:transform .1s}.sc9shut:active i{transform:scale(.9)}
.sc9auto{width:48px;font-size:13px!important;line-height:1.3;opacity:.6}.sc9auto.on{color:#E5C987;opacity:1}
.sc9alt{display:flex;gap:22px}.sc9fix{font-size:13px!important;color:#E5C987!important;text-decoration:underline;text-underline-offset:3px;padding:0 2px}
.sc9gal{display:flex;align-items:center;gap:8px;font-size:14px!important;opacity:.8}.sc9gal svg{width:18px;height:18px}
.sc9flash::after{content:"";position:fixed;inset:0;background:#fff;opacity:.7;pointer-events:none}
.sc9ed{position:relative;flex:1;min-height:0;margin:0 12px;touch-action:none}
.sc9ec{position:absolute}.sc9es{position:absolute;inset:0;touch-action:none}
.sc9es polygon{fill:rgba(229,201,135,.14);stroke:#E5C987;stroke-width:3;stroke-linejoin:round}
.sc9es circle{fill:#0b0b0c;stroke:#E5C987;stroke-width:3}
.sc9lens{position:absolute;width:100px;height:100px;border-radius:50%;border:3px solid #E5C987;box-shadow:0 6px 18px rgba(0,0,0,.6);pointer-events:none}
.sc9cap{flex:none;text-align:center;margin:12px 16px 10px;font-size:14px;opacity:.8}
.sc9gold{display:flex;align-items:center;justify-content:center;text-align:center;padding:0 16px;height:56px;border-radius:28px!important;background:linear-gradient(90deg,#E9D29A,#B48A45)!important;color:#16140f!important;font-size:18px!important;font-weight:500}
.sc9go{flex:none;align-self:stretch;margin:0 20px calc(env(safe-area-inset-bottom,0px) + 14px)}
.sc9ghost{display:block;height:50px;border-radius:25px!important;border:1px solid rgba(241,233,214,.35)!important;font-size:16px!important;width:100%;margin-top:10px}
.sc9err{flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 28px;text-align:center}.sc9err p{font-size:16px;line-height:1.45;opacity:.85;margin:0 0 22px}.sc9err .sc9gold{width:100%}
.sc9cmp{flex:1;min-height:0;display:flex;gap:12px;padding:0 16px}.sc9cmp>div{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;gap:6px}.sc9cmp small{font-size:13px;opacity:.8}
.sc9cmp img{flex:1;min-height:0;width:100%;object-fit:contain;border-radius:4px}
.sc9note{flex:none;text-align:center;font-size:13px;opacity:.7;margin:10px 16px}
.sc9seg{flex:none;display:flex;margin:0 20px;background:rgba(255,255,255,.08);border-radius:12px;padding:3px}.sc9seg button{flex:1;padding:9px;border-radius:9px;font-size:14px!important}.sc9seg button.on{background:#F1E9D6!important;color:#16140f!important}
.sc9pages{flex:none;display:flex;gap:10px;align-items:center;margin:14px 20px;min-height:76px;overflow-x:auto}.sc9pages img{width:56px;height:76px;object-fit:cover;background:#fff;border-radius:4px;flex:none}
.sc9add{width:56px;height:76px;border:1.5px dashed rgba(241,233,214,.5)!important;border-radius:4px;font-size:24px!important;flex:none}.sc9pages small{margin-left:auto;font-size:13px;opacity:.7;flex:none}
.sc9priv{flex:none;text-align:center;font-size:12px;opacity:.55;margin:-6px 0 calc(env(safe-area-inset-bottom,0px) + 8px)}
.sc9busy{position:absolute;inset:0;background:rgba(0,0,0,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font-size:15px}.sc9busy i{width:36px;height:36px;border-radius:50%;border:3px solid rgba(229,201,135,.3);border-top-color:#E5C987;animation:sc9sp 1s linear infinite}
@keyframes sc9sp{to{transform:rotate(360deg)}}
.sc9modes{flex-wrap:nowrap;overflow-x:auto;max-width:100vw;padding:0 12px;scrollbar-width:none;justify-content:flex-start}.sc9modes::-webkit-scrollbar{display:none}.sc9modes button{flex:none}
.sc9modes [data-kd]{font-size:12.5px!important;letter-spacing:.05em;text-transform:uppercase;opacity:.75;padding:4px}.sc9modes [data-kd].on{color:#E5C987;opacity:1}
.sc9t6{flex-wrap:wrap;gap:4px 0}.sc9t6 button{flex:0 0 33.3%}
.sc9sz{flex:none;display:flex;justify-content:center;gap:14px;margin-top:10px}.sc9sz button{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.08)!important;display:grid!important;place-items:center}.sc9sz button.on{box-shadow:inset 0 0 0 2px #E5C987}.sc9sz i{border-radius:50%;background:#F1E9D6;display:block}
.sc9pad{position:relative;flex:1;min-height:0;margin:10px 20px;display:flex;align-items:center}.sc9pad canvas{width:100%;aspect-ratio:1200/420;background:#fff;border-radius:14px;touch-action:none}.sc9pad i{position:absolute;left:8%;right:8%;top:calc(50% + 34px);border-top:1.5px dashed #b8b0a0;pointer-events:none}
.sc9acts2{flex:none;margin:0 20px 10px}.sc9acts2 .sc9ghost{margin-top:0}
.sc9pick{position:absolute;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:flex-end;z-index:5}.sc9pick>div{width:100%;background:#17150f;border-radius:22px 22px 0 0;padding:18px 20px calc(env(safe-area-inset-bottom,0px) + 18px);display:flex;flex-direction:column;gap:10px}
.sc9pick b{font-weight:500;font-size:17px;text-align:center}.sc9pick button{padding:14px!important;border-radius:14px!important;background:rgba(255,255,255,.07)!important;text-align:left;font-size:16px!important}.sc9pick small{display:block;font-size:12.5px;opacity:.6;margin-top:3px}.sc9pick .cx{text-align:center;background:none!important}
.sc9bc{display:flex;justify-content:center;margin-bottom:12px}.sc9bc img{max-width:80%;max-height:150px;border-radius:8px;background:#fff}
.sc9hs{flex:1;min-height:0;overflow-y:auto;padding:4px 20px calc(env(safe-area-inset-bottom,0px) + 16px);touch-action:pan-y}
.sc9big{display:flex;align-items:center;gap:18px;width:100%;height:140px;border-radius:24px!important;background:radial-gradient(120% 120% at 30% 20%,#3a3122,#16130e)!important;border:1px solid rgba(229,201,135,.35)!important;padding:0 22px!important;text-align:left}
.sc9big .sh{flex:none;width:76px;height:76px;border-radius:50%;border:4px solid #F1E9D6;display:grid;place-items:center}.sc9big .sh i{width:60px;height:60px;border-radius:50%;background:#F1E9D6;display:grid;place-items:center;color:#16140f;font-size:26px;font-style:normal}
.sc9big b{display:block;font-size:21px;font-weight:500}.sc9big small{font-size:13px;opacity:.7}
.sc9r3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0}.sc9r3 button{border-radius:16px!important;background:rgba(255,255,255,.07)!important;padding:12px 4px!important;font-size:13.5px!important;display:flex;flex-direction:column;align-items:center;gap:4px}.sc9r3 b{font-size:20px;font-weight:400}
.sc9srch{display:flex;align-items:center;gap:10px;height:46px;border-radius:23px;background:rgba(255,255,255,.08);padding:0 16px}.sc9srch input{flex:1;min-width:0;background:none;border:0;color:inherit;font:inherit;font-size:16px;outline:none;-webkit-user-select:text;user-select:text}
.sc9h4{margin:18px 0 10px;font-size:12.5px;letter-spacing:.06em;text-transform:uppercase;opacity:.6;font-weight:500}
.sc9hl .sc9it{margin-bottom:9px}.sc9hl .sc9it .tg{margin-left:auto;font-style:normal;font-size:11.5px;padding:4px 8px;border-radius:999px;background:rgba(229,201,135,.15);color:#E5C987;white-space:nowrap}.sc9hl .ex{opacity:.85!important;font-style:italic}
.sc9empty{text-align:center;opacity:.6;font-size:14px;margin:20px 0}
.login .h11sub{gap:10px!important;padding:0 2px!important}.login .h11sub .h12plus{width:40px;height:40px}.login .h11sub .h12plus svg{width:21px;height:21px}.login .h11sub .lg9lang{min-width:0;overflow:hidden}.login .h11sub .lg9lang span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.login .h11sub .sc9lockb{margin-right:-4px}

.sc9card{flex:1;min-height:0;overflow-y:auto;padding:4px 20px 14px;touch-action:pan-y;-webkit-user-select:text;user-select:text}
.sc9und{display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:14px;background:rgba(229,201,135,.12);border:1px solid rgba(229,201,135,.35);margin-bottom:12px}.sc9und>span{font-size:26px}.sc9und b{display:block;font-weight:500;color:#E5C987}.sc9und small{font-size:13.5px;opacity:.85}.sc9und.warn{background:rgba(224,99,111,.1);border-color:rgba(224,99,111,.4)}.sc9und.warn b{color:#F0A0A8}
.sc9f{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;min-width:0}.sc9f span{font-size:12.5px;opacity:.65}.sc9f input,.sc9f select{height:44px;border-radius:12px;border:1px solid rgba(241,233,214,.18);background:rgba(255,255,255,.06);color:inherit;font:inherit;font-size:16px;padding:0 12px;width:100%;box-sizing:border-box;-webkit-appearance:none;appearance:none;color-scheme:dark}
.sc9f select option{color:#111;background:#fff}
.sc9f2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.sc9amt{margin:0 0 10px;font-size:15px}.sc9amt b{color:#E5C987;font-weight:500}
.sc9due{padding:10px 12px 2px;border-radius:14px;background:rgba(255,255,255,.04);margin:4px 0 10px}.sc9due.off .sc9tgs{opacity:.5}
.sc9tgs{margin:0 0 10px!important;width:100%}
.sc9cnt{min-width:38px;text-align:right;font-size:14px;opacity:.75}
.sc9inbox{flex:1;min-height:0;overflow-y:auto;padding:4px 20px;touch-action:pan-y}
.sc9it{display:flex;align-items:center;gap:12px;width:100%;padding:10px!important;border-radius:14px!important;background:rgba(255,255,255,.06)!important;margin-bottom:10px;text-align:left}.sc9it:disabled{opacity:.75}.sc9it.saved{opacity:.5}
.sc9it .th{flex:none;width:46px;height:64px;border-radius:4px;background:rgba(255,255,255,.08);display:grid;place-items:center;overflow:hidden}.sc9it .th img{width:100%;height:100%;object-fit:cover;background:#fff}.sc9it .th .sp{width:22px;height:22px;border-radius:50%;border:3px solid rgba(229,201,135,.3);border-top-color:#E5C987;animation:sc9sp 1s linear infinite}
.sc9it .tx{flex:1;min-width:0}.sc9it b{display:block;font-weight:500;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc9it small{display:block;font-size:12.5px;opacity:.7;margin-top:3px}.sc9it small em{color:#F0A0A8;font-style:normal}.sc9it .chev{font-style:normal;font-size:22px;opacity:.6}
.sc9go:disabled{opacity:.45}

.sc9au{font-size:13px!important;letter-spacing:.06em;text-transform:uppercase;opacity:.55;padding:4px}.sc9au.on{color:#E5C987;opacity:1}
.sc9ok{min-width:84px;height:40px;border-radius:20px!important;background:linear-gradient(90deg,#E9D29A,#B48A45)!important;color:#16140f!important;font-size:15px!important;font-weight:500;padding:0 14px}.sc9okx{background:none!important;visibility:hidden}
.sc9tg{flex:none;display:flex;align-items:center;justify-content:space-between;margin:12px 20px 0;padding:12px 14px!important;border-radius:14px!important;background:rgba(255,255,255,.07)!important;text-align:left}
.sc9tg b{display:block;font-weight:500;font-size:16px}.sc9tg small{font-size:12.5px;opacity:.65}.sc9tg i{flex:none;width:52px;height:31px;border-radius:16px;background:rgba(255,255,255,.2);position:relative;transition:background .2s}.sc9tg i:after{content:"";position:absolute;left:3px;top:3px;width:25px;height:25px;border-radius:50%;background:#fff;transition:left .2s}.sc9tg i.on{background:#C9A25E}.sc9tg i.on:after{left:24px}
.sc9tools{flex:none;display:flex;justify-content:space-around;margin:14px 12px}.sc9tools button{font-size:13px!important;opacity:.85;display:flex;flex-direction:column;align-items:center;gap:3px;padding:4px 6px}.sc9tools b{font-size:20px;font-weight:400}
.sc9name{flex:none;display:flex;align-items:center;gap:10px;margin:4px 20px 0;padding:0 14px;border-radius:14px;background:rgba(255,255,255,.07);height:50px}.sc9name input{flex:1;min-width:0;background:none;border:0;color:inherit;font:inherit;font-size:16px;outline:none;-webkit-user-select:text;user-select:text}
.sc9grid{flex:1;min-height:0;overflow-y:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:22px 12px;padding:16px 20px 22px;align-content:start;touch-action:pan-y}
.sc9cell{position:relative;touch-action:none}.sc9cell img{width:100%;aspect-ratio:1/1.414;object-fit:cover;background:#fff;border-radius:3px;display:block;box-shadow:0 2px 8px rgba(0,0,0,.4)}
.sc9cell em{position:absolute;bottom:-18px;left:0;right:0;text-align:center;font-style:normal;font-size:12px;opacity:.7}
.sc9cell.drag{z-index:5;transition:none}.sc9cell.drag img{box-shadow:0 10px 26px rgba(0,0,0,.6),0 0 0 2px #E5C987}
.sc9rm{position:absolute;top:-8px;right:-8px;width:24px;height:24px;border-radius:50%;background:#2a2620!important;border:1px solid rgba(241,233,214,.3)!important;font-size:11px!important;display:grid!important;place-items:center;padding:0}
.sc9grid .sc9add{width:100%;height:auto;aspect-ratio:1/1.414}
.sc9tip{flex:none;text-align:center;font-size:12.5px;opacity:.6;margin:0 20px 10px}
.sc9info{flex:none;display:flex;gap:10px;margin:0 20px 12px}.sc9info>*{flex:1;padding:10px 6px;border-radius:14px;background:rgba(255,255,255,.07)!important;text-align:center;font-size:13px!important;line-height:1.3}.sc9info b{display:block;font-weight:500;color:#E5C987;font-size:15px}
.sc9ocr{flex:1;min-height:0;display:flex;flex-direction:column;padding:6px 20px}.sc9ops{display:flex;gap:10px;justify-content:center;margin-bottom:18px;flex-wrap:wrap}.sc9ops img{width:52px;height:74px;object-fit:cover;background:#fff;border-radius:3px;opacity:.45}.sc9ops img.ok{opacity:1;box-shadow:0 0 0 2px #2E6B3C}.sc9ops img.now{opacity:1;box-shadow:0 0 0 2px #E5C987}
.sc9bar2{height:6px;border-radius:3px;background:rgba(255,255,255,.12);overflow:hidden}.sc9bar2 i{display:block;height:100%;background:linear-gradient(90deg,#E9D29A,#B48A45);transition:width .3s}
.sc9opt{text-align:center;margin:12px 0 2px;font-size:16px}.sc9ops2{text-align:center;font-size:13px;opacity:.6;margin:0}
.sc9stop{flex:none;margin:0 20px calc(env(safe-area-inset-bottom,0px) + 14px);width:auto!important}
.sc9tabs{flex:none;display:flex;gap:6px;margin:4px 20px 10px;overflow-x:auto}.sc9tabs button{padding:7px 12px!important;border-radius:999px!important;background:rgba(255,255,255,.08)!important;font-size:13px!important;flex:none}.sc9tabs button.on{background:#F1E9D6!important;color:#16140f!important}
.sc9txt{flex:1;min-height:0;overflow-y:auto;margin:0 20px;border-radius:14px;background:#F6F2E8;color:#1a1a1a;padding:16px;font-size:15px;line-height:1.5;-webkit-user-select:text;user-select:text;outline:none;touch-action:pan-y;white-space:normal}
.sc9txt mark{background:#FFE7A8;border-radius:3px;padding:0 1px;color:inherit}
.sc9warn{flex:none;font-size:12.5px;opacity:.7;margin:10px 20px}
.sc9acts{flex:none;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 20px 12px}.sc9acts button{padding:11px 4px!important;border-radius:14px!important;background:rgba(255,255,255,.08)!important;font-size:13px!important;display:flex;flex-direction:column;align-items:center;gap:4px}.sc9acts b{font-size:19px;font-weight:400}

`;document.head.appendChild(st)}
}catch(e){}

try{
 Gm=(f=>async function(e){try{const W=await fl('dwords',e.id);if(W&&W.p&&!(e.files||[]).some(s2=>!/^image\//.test(s2.type))){const a=await N$(e);if(a.length&&a.length===W.p.length){T(Me('building'));const blob=await scPdf(a.map(x2=>({jpg:x2._jpg})),W.p.map(w=>({words:w})),e.title);return{blob,name:Ii(e.title||'Dokument')+'.pdf'}}}}catch{}return f.apply(this,arguments)})(Gm);
 L.dzocr=async function(e,btn){const d=qe(m.bdid);if(!d||!(d.pages||[]).length){T(Me('ocrNone'));return}const sp=btn&&btn.querySelector('span');btn&&(btn.disabled=!0,btn.classList.add('busy'));const old=sp&&sp.textContent;
  try{const cvs=[];for(const p of d.pages){const u=await Ds(p);if(!u)continue;const im=new Image();im.src=u;await im.decode();const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;c.getContext('2d').drawImage(im,0,0);cvs.push(c)}
   const res=await scOcr(cvs,(f2)=>{sp&&(sp.textContent=Math.round(f2*100)+' %')});const t=res.map(o=>o.text).join('\n\n').trim();Fa.text[d.id]=t;const ta=document.getElementById('dztext');ta&&(ta.value=t,ta.dispatchEvent(new Event('input',{bubbles:!0})));await Km(d.id);
   if(res.length===d.pages.length)try{await ao('dwords',d.id,{p:res.map(o=>o.words)})}catch{}T(t?Me('saved'):sct('noTxt'))}
  catch(err){T(sct('ocrErr'))}finally{btn&&(btn.disabled=!1,btn.classList.remove('busy'));sp&&old&&(sp.textContent=old)}};
 B$=(f=>function(b,mode){if(b&&/^scan-\d/.test(b.name||''))mode='orig';return f.call(this,b,mode)})(B$);/* pages from the scanner are already clean — no second filter */
 const SC9N=['Сканер','Scanner','Scanner','Skaner','Tarayıcı','Scanner','Escáner'];
 Yn=(f=>function(e){if(e==='sc9')return cv5n(SC9N);return f.apply(this,arguments)})(Yn);
 Ps=(f=>function(e){if(e==='sc9')return'cam';return f.apply(this,arguments)})(Ps);
 Qc=(f=>function(e){if(e==='sc9')return 0;return f.apply(this,arguments)})(Qc);
 R=(f=>function(e,a,t){if(e==='sc9'){scHome();return}return f.apply(this,arguments)})(R);
 try{const hd=H9X.find(h=>h[0]==='docs');if(hd&&!hd[1].includes('q:sc9'))hd[1].push('q:sc9')}catch{}
 try{if(Array.isArray(At)&&!At.includes('sc9'))At.push('sc9')}catch{}
}catch(e){}
/* v247: the scanner is one department — «Документы» › Сканер (its own sign), «Документ» on the home screen and the quick-input button all open it; the plain «Фото» action is gone.
   A new scan always starts as a clean white «Документ»; «Оригинал» is only kept for the page where it was chosen. */
try{
 const SC247='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M3 12h18"/><path d="M8 8.5h8M8 15.5h5" opacity=".55"/></svg>';
 const T247={t:['Сканер','Scanner','Scanner','Skaner','Tarayıcı','Scanner','Escáner'],s:['скан · файлы · удостоверение · визитка','Scan · Dateien · Ausweis · Visitenkarte','scan · files · ID · business card','skan · pliki · dowód · wizytówka','tarama · dosyalar · kimlik · kartvizit','scan · fichiers · pièce d’identité · carte','escaneo · archivos · ID · tarjeta']};
 const dz247=()=>{try{document.querySelectorAll('.dzacts .dzin[data-m="scan"]').forEach(inp=>{const lab=inp.closest('label');if(!lab||lab.dataset.s247)return;lab.dataset.s247='1';lab.classList.add('sc247');const ic=lab.querySelector('.dzbi');ic&&(ic.innerHTML=SC247);
   if(!inp.dataset.arc&&!inp.dataset.d){const b=lab.querySelector('b'),sm=lab.querySelector('small');b&&(b.textContent=cv5n(T247.t));sm&&(sm.textContent=cv5n(T247.s))}})}catch{}};
 v=(f=>function(){const r=f.apply(this,arguments);try{dz247()}catch{}return r})(v);
 try{if(g.scMode==='orig'){g.scMode='doc';$()}}catch{}
 const st=document.createElement('style');st.textContent=`
.dzacts .dzbig.sc247 .dzbi{color:var(--gold,#C99A3E)}.dzacts .dzbig.sc247 .dzbi svg{width:28px;height:28px;stroke:currentColor;fill:none}
.dzacts .dzbig.sc247{border-color:color-mix(in srgb,var(--gold,#C99A3E) 55%,var(--line,rgba(128,128,128,.3)))}
.bd8ac .rw{grid-template-columns:none!important;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}
`;document.head.appendChild(st)}catch(e){}
