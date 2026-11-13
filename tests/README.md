# Checks before a release

0. Edit `src/`, then `node build.js` (builds `app.js`).
1. `node tests/bump.js` — next version number in `sw.js`, `index.html` and `app.js` together.
2. `node tests/smoke.js` — opens the app in Chrome at iPhone size and checks: sign-in, matching version numbers,
   no update banner loop, every screen and all sections open (never the old home), buttons have actions,
   copy → restore → «Вернуть как было», folders by drag and drop, and no errors in the app.
   Exit code 0 = ready to publish. `VERBOSE=1` lists every check.

New behaviour goes through `Hooks` (`src/modules/hooks/registry.js`), not by wrapping app functions again:
the robot counts wrapper layers and fails if there are more than in `wrappers-baseline.txt` (the limit only goes down).
`node tests/overlap.js a b` shows what two modules share before one is moved in `src/order.txt`.

Nothing in this folder is used by the app itself.
