This is a simple indie racing game, made entirely by claude Opus 5.5
Ver 1 - Only one map - desert, city and alpine biome
Ver 1.1 - Added space and underwater biome
Ver 1.2 - Added deep cave map, Raptor Run, offline play and a records.json save file

## Play offline
Download the repo (Code → Download ZIP), unzip it, and open `index.html` in your browser.
Everything (game, sound, pixel font) is inside the files, so no internet connection is needed.
`raptor-run.html` is the bonus game and works the same way.

If the game is hosted (e.g. GitHub Pages), it can also be installed as an app and keeps working offline after the first visit.

## Records (`records.json`)
Your records are kept in `records.json`: overall best, best per map, your top 10 runs and lifetime totals.

- **Chrome / Edge:** on the title or game-over screen click **LINK RECORDS.JSON** and pick the `records.json`
  that came with the game. After that every run is saved to the file automatically. When you reopen the game,
  the first click or Enter press lets it resume saving (the browser asks for permission once per visit).
- **Firefox / Safari:** records are saved in the browser. Use **EXPORT RECORDS.JSON** to update the file and
  **IMPORT** to load one back in.

Importing or linking a file merges it with what's already stored, so a record is never lost.
