/* v255: sign-in screen — one button instead of two. The separate ⌗ scanner is gone; inside «+» the «Документ» tile opens the real scanner */
try{
 Yf=(f=>function(){const src=f.apply(this,arguments);try{return src.replace(/<button type="button" class="h12plus sc9lockb"[\s\S]*?<\/button>/,'')}catch{return src}})(Yf);
 L.br9qc=(f=>function(){const r=f.apply(this,arguments);try{setTimeout(()=>{const inp=document.querySelector('.dtsheet input[data-k="doc"]');const lb=inp&&inp.closest('label');if(!lb||lb.__s55)return;lb.__s55=1;
   lb.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const sh=lb.closest('.dtsheet');sh&&sh.remove();try{scLockScan()}catch{}},!0)},0)}catch{}return r})(L.br9qc);
}catch(e){}
