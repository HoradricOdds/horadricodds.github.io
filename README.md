# Horadric Odds

**A free Diablo II: Resurrected drop calculator and build planner.**
No ads, no sign-up, works on PC and phone.

👉 **Open it: [horadricodds.github.io](https://horadricodds.github.io/)**

![Horadric Odds](preview.png)

## What it does

### Drop odds
- Search any unique, set item, rune, runeword or base. Player nicknames like "shako" work.
- See every monster and area that drops it, and your chance per kill for your difficulty, player count and magic find.
- Search by the stats you want, look up any monster's loot, or work out gambling odds.
- Includes terror zones, Find Item and first-kill quest drops.

### Build planner
- Skill trees for all eight classes, including Warlock. Damage, synergies and mana cost update as you spend points.
- Breakpoints worked out from your gear: cast speed, hit recovery, block and attack frames.
- Resistances per difficulty, Str/Dex requirement checks, and a gear plan that shows where to farm each item.
- A level-by-level leveling guide with a checklist to tick off while you play.
- Side-by-side build comparison.
- Share builds as links or build codes.

### Experience
- Enter your level and see how much experience, how many kills and how many full clears it takes to reach your next level or a goal level.
- Areas are ranked by experience per full clear or per kill for your difficulty, players, party and experience bonuses. Tap one to see what to kill there.
- Terror zone experience, boss kill experience and a suggested route to your goal level.

## Reporting problems

- **Bugs and ideas:** [open an issue](https://github.com/HoradricOdds/horadricodds.github.io/issues).
- **Anything else, including takedown requests:** HoradricOdds@hotmail.com

When reporting wrong odds or numbers, it helps to include the item or build, the settings you used (difficulty, players, magic find, level), and what you expected.

## Credits

- **Game data:** items, drop tables, skill trees and skill formulas come from the game files via [blizzhackers/d2data](https://github.com/blizzhackers/d2data) (MIT License, © 2020 blizzhackers).
- **Attack frames:** animation frame data and timing rules follow [Warren1001's IAS Calculator](https://github.com/Warren1001/IAS_Calculator) (animation tables dumped by RuffnecKk).
- **Breakpoints:** cast, hit-recovery and block tables from [d2runewizard](https://d2runewizard.com/breakpoints), with the Warlock tables checked against [AOEAH](https://www.aoeah.com/news/4399--d2r-warlock-fcr-ias-fhr-fbr-breakpoints--calculation).
- **Builds:** the starter builds are written for Horadric Odds from the game data and common community knowledge. For full guides, see [Maxroll](https://maxroll.gg/d2/category/guides) and [Icy Veins](https://www.icy-veins.com/d2/); each build links to them.
- **Prices:** the optional price links open [Traderie](https://traderie.com/diablo2resurrected)'s own pages. Horadric Odds doesn't collect or store Traderie data.

Horadric Odds is free and fan-made. It isn't affiliated with or endorsed by Blizzard Entertainment, Maxroll, IGN, Icy Veins or Traderie. Diablo II: Resurrected and its game data belong to Blizzard Entertainment.

## How it's built

The whole site is a single `index.html` file with no server. Odds are calculated in your browser from the game's own tables. Saved builds and settings stay in your browser.
