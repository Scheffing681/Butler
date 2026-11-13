# Butler source

`app.js` is **built** from this folder — edit here, then run `node build.js`, never edit `app.js` by hand.

- `00-core.js` — the compressed base of the app (no original sources exist). Do not edit; new behaviour goes into modules.
- `modules/` — every later update as readable code, in load order (name order = load order).
- `99-end.js` — closes the app.

## Modules by topic

| Topic | Modules |
| --- | --- |
| Clocks, faces, looks | 01, 04, 05, 06, 07, 08, 11, 12, 22 |
| Seal and signature | 02 |
| Tour, Today, search, Butler commands | 03 |
| Notes and quick input | 09 |
| Manager of affairs (repeat, steps, review) | 10 |
| Personal calendar | 13, 14 |
| Home layout, builder, templates | 15, 16, 17, 24, 39 |
| Sign-in screen | 18, 26, 28, 29, 43 |
| Sections and folders | 19, 40, 42 |
| Brand, living sign | 20, 21 |
| iPhone screen edges, polish, back | 23, 27, 30 |
| Saved entries visible | 25 |
| Document scanner | 31-scanner.js (merged) |
| Ready-made style sets (hidden) | 36, 38 |
| Backup and data protection | 41, 44 |

Step 3 of the clean-up merges each topic into one module.
