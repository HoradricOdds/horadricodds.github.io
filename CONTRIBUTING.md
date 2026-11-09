# Contributing to Horadric Odds

Thanks for helping! Bug reports, wrong numbers, translation fixes and ideas are all welcome.

## Reporting a problem

The quickest way is the **Something wrong? Report it** link at the bottom of every page. It opens a new issue with the version, tab, settings, language and (in the planner) your build code already filled in. Just add what happened and what you expected.

Or [open an issue](https://github.com/HoradricOdds/horadricodds.github.io/issues/new/choose) and pick a form:

- **Bug report:** something doesn't work, looks broken or shows an error.
- **Wrong odds or numbers:** a drop chance, experience figure, breakpoint, resistance, damage or other number that doesn't match the game.
- **Translation fix:** wording that's wrong, unclear or doesn't match the game in Español, Português, Deutsch, 한국어 or 简体中文.
- **Idea:** a new feature or an improvement.

Before opening one, please search the [existing issues](https://github.com/HoradricOdds/horadricodds.github.io/issues) in case it's already reported.

### What helps

- The version at the bottom of the page (it tells us which copy you were using).
- The item, build code or area, and your settings (difficulty, players, magic find, level).
- What you expected, and where that number comes from: an in-game screenshot is best.
- For phone or layout problems, a screenshot and your browser.

Please don't post anything private. Save files (.d2s, .d2i) can include your character names, so only attach one if you're happy for it to be public.

## Translations

Item, rune, runeword, skill, monster, area and class names come from the game's own translations, so if one of those looks wrong it's probably what the game says. Everything else was translated for Horadric Odds and checked against the game's terms. If something reads badly, use the **Translation fix** form with the English text, the current text and what you'd write instead. Native speakers are very welcome.

## Code changes

The site is a single `index.html` with no build step needed to run it, plus `sw.js`, `manifest.webmanifest`, the icons and the `i18n/` language files. To try a change, serve the folder locally (for example `python -m http.server`) and open it in a browser.

- Open an issue first for anything bigger than a small fix, so we can agree on the approach.
- Keep pull requests small and focused, and describe how you tested them (desktop and phone if the layout changes).
- Game data comes from the game's files. Please say where any new numbers come from.
- Don't add trackers, ads, accounts or anything that sends people's data elsewhere. Everything stays in the visitor's browser.
- Don't copy guides or text from other sites; link to them.
- By contributing you agree your work is released under the project's [MIT License](LICENSE).

## Conduct and contact

Everyone taking part is expected to follow the [code of conduct](CODE_OF_CONDUCT.md). For anything that shouldn't be public, including takedown requests, email **HoradricOdds@hotmail.com**.
