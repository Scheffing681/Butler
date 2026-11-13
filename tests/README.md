# Checks before a release

0. Edit `src/`, then `node build.js` (builds `app.js`).
1. `node tests/bump.js` — next version number in `sw.js`, `index.html` and `app.js` together.
2. `node tests/smoke.js` — opens the app in Chrome at iPhone size and checks: sign-in, matching version numbers,
   no update banner loop, every screen and all sections open (never the old home), buttons have actions,
   copy → restore → «Вернуть как было», folders by drag and drop, and no errors in the app.
   Exit code 0 = ready to publish. `VERBOSE=1` lists every check.

Nothing in this folder is used by the app itself.
