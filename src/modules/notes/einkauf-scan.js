/* ===== v287 Einkauf 2.0, stage 2: scan a shop prospect =====
   On the shopping list: the card «Prospekt scannen & Angebote übernehmen».
   Photo (camera or gallery) → text recognition on the phone (the same engine as receipts, sparse-text mode,
   contrast boost) → «Erkannte Angebote»: each with a tick, name, −%, old and new price, all editable →
   shop (recognised from the page or chosen) and «gültig bis» → «In Einkaufsplan übernehmen».
   The offers then price the list (einkauf2.js). Optionally the ticked products go onto the list too.
   The photo is never stored or sent anywhere. Nothing is saved without the button. */
const esS={
 card:['Сканировать проспект и взять акции','Prospekt scannen & Angebote übernehmen','Scan a prospect & take the offers','Skanuj gazetkę i weź promocje','Broşürü tara, fırsatları al','Scanner un prospectus et prendre les promos','Escanear folleto y tomar ofertas'],
 cardS:['Цены и скидки сами попадут в план закупки.','Preise und Rabatte automatisch in den Einkaufsplan.','Prices and discounts go straight into the shopping plan.','Ceny i rabaty trafią prosto do planu zakupów.','Fiyatlar ve indirimler doğrudan alışveriş planına.','Prix et remises directement dans le plan d’achat.','Precios y descuentos directo al plan de compra.'],
 title:['Скан проспекта / акции','Prospekt / Angebot scannen','Scan prospect / offer','Skan gazetki / promocji','Broşür / fırsat tara','Scanner prospectus / promo','Escanear folleto / oferta'],
 cam:['📷 Сфотографировать','📷 Fotografieren','📷 Take a photo','📷 Zrób zdjęcie','📷 Fotoğraf çek','📷 Photographier','📷 Hacer foto'],
 gal:['Из галереи','Aus der Galerie','From gallery','Z galerii','Galeriden','Depuis la galerie','De la galería'],
 tip:['Лучше всего: одна страница или её часть, ровно, при хорошем свете. Фото остаётся на телефоне и не сохраняется.','Am besten: eine Seite oder ein Ausschnitt, gerade, bei gutem Licht. Das Foto bleibt auf dem Telefon und wird nicht gespeichert.','Best: one page or part of it, straight, in good light. The photo stays on the phone and is not stored.','Najlepiej: jedna strona lub jej część, prosto, w dobrym świetle. Zdjęcie zostaje na telefonie i nie jest zapisywane.','En iyisi: tek sayfa ya da bir kısmı, düz, iyi ışıkta. Fotoğraf telefonda kalır, kaydedilmez.','Idéal : une page ou une partie, bien droite, avec une bonne lumière. La photo reste sur le téléphone et n’est pas enregistrée.','Mejor: una página o parte, recta y con buena luz. La foto se queda en el teléfono y no se guarda.'],
 read:['Распознаю… %p %','Erkenne… %p %','Reading… %p %','Rozpoznaję… %p %','Okunuyor… %p %','Lecture… %p %','Leyendo… %p %'],
 found:['Найденные акции (%n)','Erkannte Angebote (%n)','Recognised offers (%n)','Rozpoznane promocje (%n)','Bulunan fırsatlar (%n)','Promos reconnues (%n)','Ofertas reconocidas (%n)'],
 none:['Цены на фото не нашлись. Попробуйте снять ближе и ровнее или добавьте акцию вручную.','Keine Preise erkannt. Bitte näher und gerader fotografieren oder das Angebot von Hand eintragen.','No prices found. Try closer and straighter, or add the offer by hand.','Nie znaleziono cen. Zrób zdjęcie bliżej i prościej lub dodaj promocję ręcznie.','Fiyat bulunamadı. Daha yakından ve düz çekin ya da elle ekleyin.','Aucun prix trouvé. Rapprochez-vous, cadrez droit ou ajoutez la promo à la main.','No se encontraron precios. Acérquese y enderece la foto, o añádala a mano.'],
 check:['Проверьте строки: распознавание может ошибаться. Нажмите на название или цену, чтобы исправить.','Bitte prüfen: die Erkennung kann sich irren. Name oder Preis antippen zum Ändern.','Please check: recognition can be wrong. Tap a name or price to fix it.','Sprawdź: rozpoznawanie może się mylić. Dotknij nazwy lub ceny, aby poprawić.','Kontrol edin: tanıma hata yapabilir. Düzeltmek için ada veya fiyata dokunun.','Vérifiez : la reconnaissance peut se tromper. Touchez un nom ou un prix pour corriger.','Revise: el reconocimiento puede fallar. Toque nombre o precio para corregir.'],
 shop:['Магазин','Geschäft','Shop','Sklep','Mağaza','Magasin','Tienda'],until:['Действует до','Gültig bis','Valid until','Ważne do','Geçerlilik','Valable jusqu’au','Válido hasta'],
 toList:['Добавить отмеченные товары в список','Angehakte Artikel auch auf die Liste','Also put ticked items on the list','Dodaj zaznaczone też do listy','İşaretlileri listeye de ekle','Ajouter aussi les articles cochés à la liste','Añadir también los marcados a la lista'],
 take:['✓ В план закупки','✓ In Einkaufsplan übernehmen','✓ Take into shopping plan','✓ Do planu zakupów','✓ Alışveriş planına al','✓ Dans le plan d’achat','✓ Al plan de compra'],
 again:['Другое фото','Anderes Foto','Another photo','Inne zdjęcie','Başka fotoğraf','Autre photo','Otra foto'],
 done:['Взято акций: %n','%n Angebote übernommen','%n offers taken','Dodano promocji: %n','%n fırsat alındı','%n promos ajoutées','%n ofertas añadidas'],
 fail:['Распознавание не запустилось. Проверьте место на телефоне и попробуйте ещё раз.','Erkennung konnte nicht starten. Bitte Speicher prüfen und erneut versuchen.','Recognition could not start. Check free space and try again.','Rozpoznawanie nie ruszyło. Sprawdź pamięć i spróbuj ponownie.','Tanıma başlamadı. Alanı kontrol edip tekrar deneyin.','La reconnaissance n’a pas démarré. Vérifiez l’espace et réessayez.','El reconocimiento no arrancó. Revise el espacio e inténtelo de nuevo.'],
 add:['+ строка','+ Zeile','+ row','+ wiersz','+ satır','+ ligne','+ fila']};
const est=(k,o)=>{let t=cv5n(esS[k]);if(o)for(const q in o)t=t.split('%'+q).join(o[q]);return t};
const ES_CHAINS=['REWE','Lidl','Aldi Süd','Aldi Nord','Aldi','Edeka','Netto','Penny','Kaufland','Norma','Globus','Marktkauf','dm','Rossmann','Müller','Tegut','Famila','Real','Hit','Combi','Nahkauf','Denns','Alnatura','Metro'];
/* ---- text → offers. Works on lines with positions when the engine gives them, else on plain lines ---- */
const ES_PRICE=/(?:^|[^\d,.])(\d{1,3})\s?[,.]\s?(\d{2})(?![\d]|\.\d)|(?:^|\s)-?[.,](\d{2})(?![\d])|(?:^|\s)(\d{1,3})[.,]-(?!\d)/g;
function esPrices(t){const out=[];let mm;ES_PRICE.lastIndex=0;while((mm=ES_PRICE.exec(t))){let v=mm[1]!=null?+(mm[1]+'.'+mm[2]):mm[3]!=null?+('0.'+mm[3]):+mm[4];if(v>0&&v<1000)out.push(Math.round(v*100))}return out}
const ES_SKIP=/^(angebot|angebote|diese woche|aktion|neu|nur|je|stück|stk|packung|pack|kg|g|ml|l|liter|gramm|preis|statt|uvp|bisher|ab|bis|gültig|woche|markt|dein markt|sparen|spare|rabatt|mit app|app|coupon|sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag|aus der region|deutschland|klasse|herkunft)$/i;
function esName(s){let n=String(s||'').replace(ES_PRICE,' ').replace(/-?\d{1,2}\s?%/g,' ').replace(/\b(statt|uvp|bisher|nur|je|ab|aktion|angebot)\b/gi,' ').replace(/[€*|_~"“”„»«]/g,' ').replace(/\s+/g,' ').trim();
 n=n.replace(/^[^A-Za-zÄÖÜäöüßА-Яа-яЁё]+/,'').replace(/[^A-Za-zÄÖÜäöüßА-Яа-яЁё0-9).]+$/,'');return n.length>=3&&/[A-Za-zÄÖÜäöüßА-Яа-яЁё]{3}/.test(n)&&!ES_SKIP.test(n)&&!ES_CHAINS.some(c=>c.toLowerCase()===n.toLowerCase())?n.slice(0,48):''}
const ES_OLD=/\b(statt|uvp|bisher|vorher|sonst|regulär)\b/i,ES_UNIT=/^(?:ca\.?\s*)?(?:[\di]+[.,]?\d*\s?(?:x\s?\d+\s?)?(?:g|kg|ml|l|ltr|stk\.?|stück|st\.?|er|pack|packung|rollen|tabs|wl)\b.*|je\s.*|\d+er.*)$/i;
function esParse(text,lines){
 const L=(lines&&lines.length?lines.map(l=>({t:String(l.text||'').trim(),b:l.bbox})):String(text||'').split(/\n+/).map((t,k)=>({t:t.trim(),b:{x0:0,x1:1000,y0:k*40,y1:k*40+30}}))).filter(l=>l.t&&l.b&&!/gültig|valid|bis\s+\w*\.?,?\s*\d{1,2}\.\d{1,2}/i.test(l.t));
 L.forEach(l=>{l.t=l.t.replace(/\b(\d{1,3}0)\s?9\b/g,'$1 g').replace(/^i(?=\s?kg\b)/i,'1');l.h=Math.max(8,l.b.y1-l.b.y0);l.cx=(l.b.x0+l.b.x1)/2;l.cy=(l.b.y0+l.b.y1)/2;l.ps=esPrices(l.t);l.old=l.ps.length&&ES_OLD.test(l.t);l.pc=!l.ps.length?+((l.t.match(/^-?\s?(\d{1,2})\s?%$/)||[])[1]||0):0;l.unit=!l.ps.length&&ES_UNIT.test(l.t.replace(/^i(?=\s?kg)/i,'1'));l.nm=l.ps.length||l.unit||l.pc?'':esName(l.t);l.inl=l.ps.length&&!l.old?esName(l.t):''});
 const P=L.filter(l=>l.ps.length&&!l.old),O=L.filter(l=>l.old),U=L.filter(l=>l.unit),PC=L.filter(l=>l.pc>0&&l.pc<90);let N=L.filter(l=>l.nm);
 /* a smaller line right under a name («in Scheiben, 400 g») belongs to that name */
 N.slice().sort((a,b)=>a.b.y0-b.b.y0).forEach(n2=>{const up=N.find(n1=>n1!==n2&&!n1.sub&&n2.b.y0>=n1.b.y1-4&&n2.b.y0-n1.b.y1<n1.h*1.3&&Math.abs(n2.b.x0-n1.b.x0)<n1.h*1.6&&n2.h<n1.h*0.85);if(up){up.sub=n2.t;n2.drop=1}});N=N.filter(n=>!n.drop);
 const gap=(a,b)=>Math.max(0,b.b.x0-a.b.x1,a.b.x0-b.b.x1);
 const pairs=[];P.forEach(p=>{if(p.inl)return;N.forEach(n=>{if(n.b.y0>p.b.y1)return;const dy=Math.max(0,p.b.y0-n.b.y1),dx=gap(n,p);const sc=dy+dx*1.2+(n.b.x0>p.b.x1?400:0);if(sc<Math.max(500,p.h*10))pairs.push([sc,p,n])})});
 pairs.sort((a,b)=>a[0]-b[0]);const pn=new Map(),usedN=new Set();pairs.forEach(([,p,n])=>{if(pn.has(p)||usedN.has(n))return;pn.set(p,n);usedN.add(n)});
 /* «statt 2,99» sits under its own name, in the same column: tie it to that name, not to the nearest price */
 const oldOf=new Map();O.forEach(o=>{const n=N.filter(n=>o.b.y0>=n.b.y0&&Math.abs(o.b.x0-n.b.x0)<Math.max(60,n.h*2.5)&&o.b.y0-n.b.y1<n.h*9).sort((a,b)=>b.b.y0-a.b.y0)[0];if(n&&!oldOf.has(n))oldOf.set(n,o)});
 const res=[];P.forEach(p=>{let name=p.inl,n=pn.get(p);if(!name&&n)name=n.nm;if(!name)return;
  if(n&&n.sub){const um=n.sub.match(/\b\d+[.,]?\d*\s?(?:g|kg|ml|l|stk\.?|stück)\b/i);if(um&&!name.toLowerCase().includes(um[0].toLowerCase()))name+=' ('+um[0]+')'}
  if(n&&!n.sub){const u=U.filter(u=>u.b.y0>=n.b.y1-4&&u.b.y0-n.b.y1<n.h*2.2&&Math.abs(u.b.x0-n.b.x0)<n.h*2).sort((a,b)=>a.b.y0-b.b.y0)[0];if(u){const ut=u.t.replace(/^i(?=\s?kg)/i,'1');if(!name.toLowerCase().includes(ut.toLowerCase()))name+=' ('+ut+')'}}
  let pr=p.ps.length>1?Math.min(...p.ps):p.ps[0],old=p.ps.length>1?Math.max(...p.ps):0;
  if(!old&&n&&oldOf.has(n)){const v=Math.max(...oldOf.get(n).ps);if(v>pr)old=v}
  if(!old&&!N.some(m2=>oldOf.has(m2))){const o=O.map(o=>[Math.hypot(o.cx-p.cx,o.cy-p.cy),o]).filter(([d,o])=>P.every(q=>q===p||Math.hypot(o.cx-q.cx,o.cy-q.cy)>=d)).sort((a,b)=>a[0]-b[0])[0];if(o&&o[0]<p.h*12){const v=Math.max(...o[1].ps);if(v>pr)old=v}}
  let pc=(p.t.match(/-\s?(\d{1,2})\s?%/)||[])[1];if(!old&&!pc){/* a «-30%» badge right above its price, overlapping it sideways */const q=PC.filter(o=>o.b.y1<=p.b.y0+p.h*0.5&&Math.min(o.b.x1,p.b.x1)-Math.max(o.b.x0,p.b.x0)>0).map(o=>[p.b.y0-o.b.y1,o]).filter(([dd])=>dd<p.h*4).sort((a,b)=>a[0]-b[0])[0];if(q)pc=q[1].pc}
  if(!old&&pc&&+pc>0&&+pc<90)old=Math.round(pr/(1-pc/100));if(old&&old<=pr)old=0;
  if(!res.some(r=>r.t.toLowerCase()===name.toLowerCase()&&r.p===pr))res.push({t:name.slice(0,48),p:pr,old,on:!0,y:p.b.y0,x:p.b.x0})});
 return res.sort((a,b)=>Math.round(a.y/80)-Math.round(b.y/80)||a.x-b.x).slice(0,40).map(({y,x,...r})=>r)}
function esShop(text){const t=String(text||'').toLowerCase();const c=ES_CHAINS.find(x=>new RegExp('(^|[^a-zäöü])'+x.toLowerCase().replace(/ /g,'\\s?')+'($|[^a-zäöü])').test(t));return c?c.replace(/ (Süd|Nord)$/,''):''}
function esUntil(text){const t=String(text||'');const re=k=>new RegExp(k+'\\s*(?:[A-Za-zÄÖÜäöü]+\\.?,?\\s*)?(\\d{1,2})\\.(\\d{1,2})\\.?(\\d{2,4})?','i');const mm=t.match(re('\\bbis'))||t.match(re('gültig[^0-9]{0,20}'));const now=new Date();
 if(mm){let y=mm[3]?+mm[3]:now.getFullYear();if(y<100)y+=2000;const d=new Date(y,+mm[2]-1,+mm[1],12);if(!isNaN(d)&&d>=new Date(now.getTime()-864e5)&&d<new Date(now.getTime()+60*864e5))return d.toISOString().slice(0,10)}
 const d=new Date(now);d.setDate(d.getDate()+((6-d.getDay()+7)%7||7));return d.toISOString().slice(0,10)}
/* ---- recognition: contrast-boosted canvas, sparse text, lines with positions ---- */
async function esImage(file){const bmp=await createImageBitmap(file),k=Math.min(1,2400/Math.max(bmp.width,bmp.height)),c=document.createElement('canvas');c.width=Math.round(bmp.width*k);c.height=Math.round(bmp.height*k);
 const x=c.getContext('2d');x.drawImage(bmp,0,0,c.width,c.height);try{bmp.close()}catch{}const im=x.getImageData(0,0,c.width,c.height),d=im.data;const badges=esBadges(im);let lo=255,hi=0;const gr=new Uint8ClampedArray(d.length/4);
 for(let j=0,q=0;j<d.length;j+=4,q++){const v=0.299*d[j]+0.587*d[j+1]+0.114*d[j+2];gr[q]=v;if(v<lo)lo=v;if(v>hi)hi=v}const sp=Math.max(1,hi-lo);
 for(let j=0,q=0;j<d.length;j+=4,q++){const v=(gr[q]-lo)*255/sp;d[j]=d[j+1]=d[j+2]=v}x.putImageData(im,0,0);
 /* a second, inverted copy: white prices on red or dark badges become dark text on light */
 const c2=document.createElement('canvas');c2.width=c.width;c2.height=c.height;const x2=c2.getContext('2d'),im2=x2.createImageData(c.width,c.height),d2=im2.data;for(let j=0;j<d.length;j+=4){const v=255-d[j];d2[j]=d2[j+1]=d2[j+2]=v;d2[j+3]=255}x2.putImageData(im2,0,0);return{imgs:[c,c2],badges}}
/* price badges with light text on a coloured box (red, blue, green): found on a coarse grid, cut out and turned
   into dark text on white, then read one by one — page reading treats such boxes as pictures and skips them */
function esBadges(im){const W=im.width,Hh=im.height,d=im.data,S=8,gw=Math.ceil(W/S),gh=Math.ceil(Hh/S),grid=new Uint8Array(gw*gh);
 for(let gy=0;gy<gh;gy++)for(let gx=0;gx<gw;gx++){let n=0,c=0;for(let yy=gy*S;yy<Math.min(Hh,gy*S+S);yy+=2)for(let xx=gx*S;xx<Math.min(W,gx*S+S);xx+=2){const j=(yy*W+xx)*4,r=d[j],g2=d[j+1],b=d[j+2],mx=Math.max(r,g2,b),mn=Math.min(r,g2,b);n++;
   if(mx>60&&(mx-mn)/mx>0.45&&(0.299*r+0.587*g2+0.114*b)<175)c++}grid[gy*gw+gx]=c/n>0.45?1:0}
 const seen=new Uint8Array(gw*gh),out=[];for(let k=0;k<gw*gh;k++){if(!grid[k]||seen[k])continue;let x0=1e9,y0=1e9,x1=0,y1=0,cnt=0;const st=[k];seen[k]=1;
  while(st.length){const q=st.pop(),qx=q%gw,qy=(q/gw)|0;cnt++;if(qx<x0)x0=qx;if(qx>x1)x1=qx;if(qy<y0)y0=qy;if(qy>y1)y1=qy;[q-1,q+1,q-gw,q+gw].forEach(n=>{if(n<0||n>=gw*gh||seen[n]||!grid[n])return;if(Math.abs((n%gw)-qx)>1)return;seen[n]=1;st.push(n)})}
  const bw=(x1-x0+1)*S,bh=(y1-y0+1)*S,area=bw*bh;if(area<W*Hh*0.002||area>W*Hh*0.12||bw/bh>6||bh/bw>2.5||cnt<area/(S*S)*0.4)continue;
  const pad=12,X0=x0*S+S,Y0=y0*S+S,iw=Math.max(8,bw-2*S),ih=Math.max(8,bh-2*S),cv=document.createElement('canvas');cv.width=iw+2*pad;cv.height=ih+2*pad;const cx=cv.getContext('2d'),o=cx.createImageData(cv.width,cv.height),od=o.data;od.fill(255);
  for(let yy=0;yy<ih;yy++)for(let xx=0;xx<iw;xx++){const sx=Math.min(W-1,X0+xx),sy=Math.min(Hh-1,Y0+yy),j=(sy*W+sx)*4,r=d[j],g2=d[j+1],b=d[j+2],mx=Math.max(r,g2,b),mn=Math.min(r,g2,b),k2=((yy+pad)*cv.width+xx+pad)*4;const ink=mn>170&&mx-mn<70;od[k2]=od[k2+1]=od[k2+2]=ink?0:255}
  cx.putImageData(o,0,0);out.push({cv,b:{x0:X0,y0:Y0,x1:X0+iw,y1:Y0+ih}})}
 return out.slice(0,30)}

const esLinesOf=D=>{let lines=D&&D.lines||[];if(!lines.length&&D&&D.blocks)D.blocks.forEach(b=>(b.paragraphs||[]).forEach(p=>(p.lines||[]).forEach(l=>lines.push(l))));return lines.filter(l=>l&&l.bbox&&String(l.text||'').trim()&&(l.confidence==null||l.confidence>35))};
async function esRecognize(file,prog){const TS=await WY(),base=new URL('lib/ocr/',location.href).href;let pass=0;const w=await TS.createWorker('deu'+(g.lang==='ru'?'+rus':''),1,{workerPath:base+'worker.min.js',corePath:base,langPath:base.replace(/\/$/,''),gzip:!1,cacheMethod:'none',workerBlobURL:!1,logger:c=>{try{if(c&&c.status==='recognizing text'&&prog)prog((pass+(c.progress||0))/2)}catch{}}});
 try{try{await w.setParameters({tessedit_pageseg_mode:'11',preserve_interword_spaces:'1'})}catch{}const E=await esImage(file),imgs=E.imgs;let text='',lines=[];
  for(const img of imgs){let r;try{r=await w.recognize(img,{},{text:!0,blocks:!0})}catch{r=await w.recognize(img)}const D=r&&r.data||{};text+='\n'+(D.text||'');
   esLinesOf(D).forEach(l=>{const b=l.bbox;const dup=lines.some(o=>{const ob=o.bbox,ix=Math.max(0,Math.min(b.x1,ob.x1)-Math.max(b.x0,ob.x0)),iy=Math.max(0,Math.min(b.y1,ob.y1)-Math.max(b.y0,ob.y0));return ix*iy>0.5*Math.min((b.x1-b.x0)*(b.y1-b.y0),(ob.x1-ob.x0)*(ob.y1-ob.y0))});if(!dup)lines.push(l)});pass++}
  try{await w.setParameters({tessedit_pageseg_mode:'6'})}catch{}for(const B of E.badges){try{const r=await w.recognize(B.cv);let t=String(r&&r.data&&r.data.text||'').replace(/\s+/g,' ').trim();const pc=(t.match(/-\s?(\d{1,2})\s?%/)||[])[1];
   /* badge digits without a separator: «109» = 1,09 · «„79» / «-.79» = 0,79 */const t1=t.replace(/[|\\]/g,'').trim();if(/^\d{3,4}$/.test(t1))t=t1.slice(0,-2)+','+t1.slice(-2);else if(/^[^\d]{0,2}[-.,„'"]\s?(\d{2})$/.test(t1))t='0,'+t1.slice(-2);
   if(pc&&!esPrices(t).length){lines.push({text:'-'+pc+'%',bbox:B.b});continue}if(t&&esPrices(t).length){const dup=lines.findIndex(o=>{const ob=o.bbox;return Math.max(0,Math.min(B.b.x1,ob.x1)-Math.max(B.b.x0,ob.x0))*Math.max(0,Math.min(B.b.y1,ob.y1)-Math.max(B.b.y0,ob.y0))>0});if(dup>=0&&!esPrices(lines[dup].text).length)lines.splice(dup,1);if(dup<0||!esPrices(lines[dup]&&lines[dup].text||'').length)lines.push({text:t,bbox:B.b});text+='\n'+t}}catch{}}
  return{text,lines}}finally{try{await w.terminate()}catch{}}}
/* ---- the sheet ---- */
function esSheet(){const st={url:'',busy:0,pct:0,items:null,shop:m.k43shop||'',until:'',toList:!1,err:''};const sh=H(est('title'),'<div class="esbox"></div>',()=>{try{st.url&&URL.revokeObjectURL(st.url)}catch{}}),box=sh.querySelector('.esbox');
 const money=c=>e2money(c),shops=(()=>{try{return fy().map(s=>s.name).filter(Boolean)}catch{return[]}})();
 const draw=()=>{const I=st.items;box.innerHTML=`${st.url?`<div class="esimg"><img src="${st.url}" alt=""><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i>${st.busy?`<span class="esp">${i(est('read',{p:Math.round(st.pct*100)}))}</span>`:''}</div>`:`<p class="fdsmall">${i(est('tip'))}</p>`}
  ${st.busy?'':`<div class="esbtns"><label class="dcadd gold">${i(st.url?est('again'):est('cam'))}<input type="file" accept="image/*" capture="environment" hidden data-f></label><label class="st32btn2">${i(est('gal'))}<input type="file" accept="image/*" hidden data-f></label></div>`}
  ${st.err?`<p class="fdsmall eserr">${i(st.err)}</p>`:''}
  ${I?(I.length?`<h4>✦ ${i(est('found',{n:I.length}))}</h4><p class="fdsmall">${i(est('check'))}</p><div class="eslist">${I.map((o,j)=>{const pc=o.old>o.p?Math.round((1-o.p/o.old)*100):0;return`<div class="esrow${o.on?'':' off'}"><button type="button" class="esck" data-ck="${j}" aria-label="✓">${o.on?'✓':''}</button><input class="esn" value="${i(o.t)}" data-n="${j}"><span class="espc">${pc?`−${pc}%`:''}</span><input class="eso" type="number" inputmode="decimal" step="0.01" placeholder="—" value="${o.old?(o.old/100).toFixed(2):''}" data-o="${j}"><input class="esv" type="number" inputmode="decimal" step="0.01" value="${(o.p/100).toFixed(2)}" data-v="${j}"></div>`}).join('')}</div><button type="button" class="esplus" data-plus>${i(est('add'))}</button>
   <div class="e2f"><label><span>${i(est('shop'))}</span><input type="text" list="esshops" value="${i(st.shop)}" data-s></label><datalist id="esshops">${[...new Set(ES_CHAINS.filter(c=>!/ (Süd|Nord)$/.test(c)).concat(shops))].map(s=>`<option value="${i(s)}">`).join('')}</datalist><label><span>${i(est('until'))}</span><input type="date" value="${i(st.until)}" data-u></label>
   <label class="estl"><input type="checkbox" data-tl${st.toList?' checked':''}> ${i(est('toList'))}</label></div><button type="button" class="estake" data-take>${i(est('take'))}</button>`:`<p class="fdsmall">${i(est('none'))}</p>`):''}`;wire()};
 const wire=()=>{box.querySelectorAll('[data-f]').forEach(a=>a.onchange=async()=>{const f=a.files&&a.files[0];if(!f)return;try{st.url&&URL.revokeObjectURL(st.url)}catch{}st.url=URL.createObjectURL(f);st.busy=1;st.pct=0;st.items=null;st.err='';draw();
   let last=0;try{const R=await esRecognize(f,p=>{st.pct=p;const now=Date.now();if(now-last>300){last=now;const e=box.querySelector('.esp');if(e)e.textContent=est('read',{p:Math.round(p*100)})}});st.items=esParse(R.text,R.lines);st.shop=st.shop||esShop(R.text);st.until=esUntil(R.text)}catch(er){st.err=est('fail');try{Hooks.err('esocr',er)}catch{}}st.busy=0;draw()});
  box.querySelectorAll('[data-ck]').forEach(b=>b.onclick=()=>{const o=st.items[+b.dataset.ck];o.on=!o.on;draw()});
  box.querySelectorAll('[data-n]').forEach(n=>n.oninput=()=>{st.items[+n.dataset.n].t=n.value});
  box.querySelectorAll('[data-v]').forEach(n=>n.onchange=()=>{const v=e2num(n.value);if(v)st.items[+n.dataset.v].p=v;draw()});
  box.querySelectorAll('[data-o]').forEach(n=>n.onchange=()=>{st.items[+n.dataset.o].old=e2num(n.value);draw()});
  const s=box.querySelector('[data-s]');if(s)s.oninput=()=>{st.shop=s.value};const u=box.querySelector('[data-u]');if(u)u.onchange=()=>{st.until=u.value};const tl=box.querySelector('[data-tl]');if(tl)tl.onchange=()=>{st.toList=tl.checked};
  const pl=box.querySelector('[data-plus]');if(pl)pl.onclick=()=>{st.items.push({t:'',p:100,old:0,on:!0});draw();const ns=box.querySelectorAll('.esn');ns[ns.length-1]&&ns[ns.length-1].focus()};
  const tk=box.querySelector('[data-take]');if(tk)tk.onclick=()=>{const take=st.items.filter(o=>o.on&&String(o.t).trim()&&o.p>0);if(!take.length){sh.remove();return}
   const A=Array.isArray(g.shopOff)?g.shopOff:(g.shopOff=[]);take.forEach(o=>{const t=String(o.t).trim();const ex=A.find(x=>e2low(x.t)===e2low(t)&&e2low(x.shop)===e2low(st.shop));const rec={id:ex?ex.id:V(),shop:st.shop.trim(),t,p:o.p,old:o.old>o.p?o.old:0,until:st.until||'',d:Date.now(),src:'scan'};if(ex)Object.assign(ex,rec);else A.push(rec)});
   if(st.toList){const Ls=Yl(1);take.forEach(o=>{const t=String(o.t).replace(/\s*\(.*?\)\s*/g,' ').replace(/\b\d+\s?(?:g|kg|ml|l|stk\.?|stück|er)\b/gi,'').trim();if(!t)return;const ex=(Ls.items||[]).find(x=>e2match(x.t,t));if(ex)ex.d=!1;else Ls.items.push({t,d:!1,q:''})})}
   $();T(est('done',{n:take.length}));sh.remove();try{k3keep(()=>v())}catch{v()}}};draw()}
Hooks.act('esscan',()=>esSheet());
Hooks.on('render',()=>{try{if(m.route!=='kblist')return;const sc=document.querySelector('.screen.k43');if(!sc||sc.querySelector('.escard'))return;const t=sc.querySelector('.e2tiles');if(!t)return;
 t.insertAdjacentHTML('afterend',`<button type="button" class="escard" data-act="esscan"><span class="esfl" aria-hidden="true"><i></i><i></i></span><span class="est"><b>${i(est('card'))}</b><small>${i(est('cardS'))}</small></span><span class="esgo" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10"/></svg></span></button>`)}catch(e){Hooks.err('escard',e)}});
Hooks.css('einkauf-scan',`
.escard{display:flex;align-items:center;gap:14px;width:100%;margin:12px 0 4px;padding:14px;border:1px solid var(--line);border-radius:18px;background:linear-gradient(135deg,var(--gold-soft),var(--surface));color:var(--ink);font:inherit;text-align:left;cursor:pointer}
.esfl{position:relative;width:54px;height:62px;flex:0 0 auto}.esfl i{position:absolute;width:40px;height:54px;border-radius:6px;border:1.5px solid var(--gold);background:var(--surface)}.esfl i:first-child{left:0;top:6px;transform:rotate(-8deg)}.esfl i:last-child{left:12px;top:0;transform:rotate(6deg);background:linear-gradient(180deg,#c0563f 0 28%,var(--surface) 28%)}
.est{flex:1;display:flex;flex-direction:column;gap:3px}.est b{font-size:16px;font-weight:600;line-height:1.25}.est small{font-size:13px;color:var(--muted)}
.esgo{width:50px;height:50px;border-radius:50%;flex:0 0 auto;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,color-mix(in srgb,var(--gold) 75%,#fff),var(--gold));color:#17130b}.esgo svg{width:26px;height:26px}
.esimg{position:relative;border-radius:16px;overflow:hidden;background:var(--field);margin-bottom:12px;max-height:46vh;display:flex;justify-content:center}.esimg img{max-width:100%;max-height:46vh;object-fit:contain;display:block}
.esimg i{position:absolute;width:28px;height:28px;border:3px solid #fff;filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))}.esimg .c1{left:10px;top:10px;border-right:0;border-bottom:0;border-radius:8px 0 0 0}.esimg .c2{right:10px;top:10px;border-left:0;border-bottom:0;border-radius:0 8px 0 0}.esimg .c3{left:10px;bottom:10px;border-right:0;border-top:0;border-radius:0 0 0 8px}.esimg .c4{right:10px;bottom:10px;border-left:0;border-top:0;border-radius:0 0 8px 0}
.esp{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);padding:6px 14px;border-radius:999px;background:rgba(0,0,0,.65);color:#fff;font-size:14px}
.esbtns{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}.eserr{color:#c0563f}
.esbox h4{margin:14px 0 4px;font-size:16px;font-weight:600}
.eslist{display:flex;flex-direction:column;margin:8px 0}.esrow{display:grid;grid-template-columns:30px 1fr auto 62px 66px;gap:6px;align-items:center;padding:8px 0;border-top:1px solid var(--line)}.esrow.off{opacity:.45}
.esck{width:26px;height:26px;border-radius:7px;border:1.5px solid var(--gold);background:var(--surface);color:var(--gold);font-size:15px;line-height:1;padding:0;cursor:pointer}.esrow:not(.off) .esck{background:var(--gold);color:#17130b}
.esrow input{min-width:0;font:inherit;font-size:15px;color:var(--ink);background:transparent;border:0;border-bottom:1px dashed var(--line);padding:4px 2px;outline:none}.esrow input:focus{border-bottom-color:var(--gold)}
.esrow .eso,.esrow .esv{text-align:right;font-family:-apple-system,'SF Pro Text',system-ui,sans-serif;font-variant-numeric:tabular-nums}.esrow .eso{color:var(--muted);text-decoration:line-through;font-size:13px}.esrow .esv{font-weight:600}
.espc{font-size:11px;font-weight:600;color:#fff;background:#c0563f;border-radius:8px;padding:1px 5px}.espc:empty{display:none}
.esplus{border:0;background:transparent;color:var(--gold);font:inherit;font-size:14px;padding:4px 0 10px;cursor:pointer}
.estl{flex-direction:row!important;align-items:center;gap:8px!important;font-size:14px!important;color:var(--ink)!important}
.estake{width:100%;margin-top:14px;border:0;border-radius:999px;padding:15px;font:inherit;font-size:16px;font-weight:600;color:#17130b;background:linear-gradient(180deg,color-mix(in srgb,var(--gold) 75%,#fff),var(--gold));cursor:pointer}
`);
