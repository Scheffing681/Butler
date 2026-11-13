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
