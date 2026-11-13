# Butler source

`app.js` is **built** from this folder — edit here, then run `node build.js`, never edit `app.js` by hand.

- `00-core.js` — the compressed base of the app (no original sources exist). Do not edit; new behaviour goes into modules.
- `modules/<topic>/` — every later update as readable code, grouped by topic.
- `order.txt` — the load order. Order matters (later modules wrap earlier ones):
  before moving a line, `node tests/overlap.js <a> <b>` must show no shared functions, listeners or styles.
- `99-end.js` — closes the app.

## Topics

| Folder | What is inside |
| --- | --- |
| `clocks/` | thirty more clocks; day-night map, sky and time, background, Galaxy, classic kits; light kits; clock faces |
| `seal/` | seal and signature |
| `today/` | «?» tour, Today, search across everything, Butler commands |
| `notes/` | notes and quick input |
| `affairs/` | manager of affairs: repeat, steps, promises, weekly review |
| `calendar/` | personal calendar: faiths, holidays, sky, setup |
| `home/` | own bottom bar and layout, home on one screen, builder and templates, folded templates |
| `signin/` | sign-in screen, Face ID, bottom pill, one «+» button |
| `sections/` | all sections, 9 sections, folders as on the iPhone, guard against unknown routes |
| `brand/` | brand design and the living sign |
| `iphone/` | screen edges, polish and back, app-mode bottom |
| `saved/` | saved entries stay visible |
| `scanner/` | the document scanner |
| `kits/` | ready-made style sets (hidden) |
| `backup/` | data protection, safety copy, restore the latest copy |
