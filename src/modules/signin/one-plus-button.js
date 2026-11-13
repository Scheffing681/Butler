/* v255: sign-in screen — one button instead of two. The separate ⌗ scanner is gone; inside «+» the «Документ» tile opens the real scanner
   (v260: on hooks) */
Hooks.on('signin',html=>html.replace(/<button type="button" class="h12plus sc9lockb"[\s\S]*?<\/button>/,''));
document.addEventListener('click',e=>{const lb=e.target.closest&&e.target.closest('.dtsheet label');if(!lb||!lb.querySelector('input[data-k="doc"]'))return;const sh=lb.closest('.dtsheet');if(!sh||!sh.querySelector('.br9ta'))return;
 e.preventDefault();e.stopPropagation();sh.remove();try{scLockScan()}catch(x){Hooks.err('signin-scan',x)}},!0);
