# Changelog

All notable changes to Horadric Odds, newest first.

## 8 November 2026

### New: languages
- The whole site can be read in **Español, Português (BR), Deutsch, 한국어 and 简体中文**: pick one from the menu at the top right. The first visit follows your browser's language.
- Item, rune, runeword, skill and monster names come from the game's own translations, so they match what you see in D2R. Spanish uses the Latin American names.
- Reign of the Warlock skills and items missing from the translated game files, Portuguese area names and Chinese area names are Horadric Odds' own translations.

### New: build cards, immunities and merc stats
- **Share as image** (Share & Library): a picture of the build with its skills, stats, gear, breakpoints, Hell resistances, merc and immunities, ready to copy or download, plus a button to copy the share link.
- **Immunities** card (Skills & Stats): the Hell areas with monsters immune to the damage your build uses, picked from your skills and changeable. Counts Conviction from Infinity and Sunder charms. Monster data comes from the game's monster and level tables.
- The **Mercenary panel** now shows its life, Strength, Dexterity, damage, defense and resistances at your level with its gear, laid out like the game. Checked against an exported character in D2R: life, Strength, Dexterity, defense (within 0.3%) and three of four resistances match.

### Gear and inventory
- New gear menu: click an empty equipment slot to pick from the items that fit there, with search by name or nickname.
- Hovering an item in the gear menu (or moving through it with the arrow keys) previews how it would change your skills, cast rate, resistances and damage.
- Runewords: the menu suggests the best base and lets you choose the base, socket count and ethereal.
- Charms and rares: Small, Large and Grand Charms (and rares) can have your own stats, and the stats count toward your totals.
- Equipment, merc gear and the inventory work like the game: click to pick an item up and click to put it down; right-click to change or remove it.
- Gear can be stored in the inventory. Charms there count toward your totals.
- The inventory keeps its layout when items are removed or moved.
- To add to the inventory, right-click an empty space or use **+ Add to inventory**. A plain click on an empty space does nothing.
- Ethereal items are half transparent, as in the game.
- New pictures for Grand Charms, Hellfire Torch and Annihilus. Magic charms named with affixes now show their picture too.

- New **Mercenary** menu at the top of the Equipment panel: any act and aura (Act 2 auras in every difficulty, and the Act 5 Frenzy Barbarian). It sets the merc's aura, is read from imported saves and is used when exporting. Starter builds use an Act 2 Might merc.

### Requirements
- Gear only counts toward your totals once its required level, Strength and Dexterity are met. Your other gear's bonuses count; an item's own bonuses don't.
- Required levels include the base item's (for example, Monarch needs level 54).
- Requirements show in item tooltips, in red when they aren't met.
- Items you plan to wear but can't use yet are tinted red on the paper doll.
- The leveling guide lists each item at the level you can really wear it, and says when a build can never wear it.
- Str/Dex checks cover the whole time an item is worn, so a later respec that drops below a requirement is flagged.

### Starter builds
- Every starter build now uses just enough Strength and Dexterity for its gear, with gear placed at the levels it can be worn.
- Casters put the rest into Vitality.
- Sorceresses get Spirit in a Crystal Sword at level 25, and the Monarch once they have the Strength.
- The merc's leveling Insight now goes in a Bill (level 25) instead of a Thresher (level 53).

### Export Build and the save editor
- **Export Build** is its own planner tab, next to Import save.
- New tick boxes for quests, acts and difficulties, on Export Build and on a new Quests tab in the save editor. Exports start with what a character of that level has usually finished.
- Imported characters with rares and magic charms now export, and rares keep their names.
- Gear the character can't use yet is still put on the exported character; the game shows it red.
- Fixed: export failed when any item had custom stats.
- Imported characters show their gear at the character's level, so the planner no longer warns about requirements the character already meets.
- Exported names drop "(imported)" and keep whole words ("Blizzard Sorceress" becomes "Blizzard" instead of "BlizzardSorcere").
- Export Build exports the final phase by default, with an **Export at** menu to pick another (it used to take whichever phase you were editing, so the default build exported at level 30).
- Magic charms keep their names on export ("Beryl Small Charm of Good Luck" instead of a plain Small Charm).
- The exported mercenary is hired from the difficulty a character of that level is in: Normal below level 20, Nightmare to 44, then Hell.
- If a save is already open in the editor, you're offered to close it and export the build.

### Other
- My builds: a **Copy code** button on each saved build, and **Copy all as one code** to move or share your whole library; paste it into Import to add the builds.
- New **Merchants** odds next to Gambling: your chance of a chosen merchant selling an item with the stats you want.
- Base items show their best magic rolls and the uniques and set items made from them.
- The skill tree opens on the tab with points, and each tab shows its point total.
- The character sheet counts planned gear and charms.
- The merc panel uses the same font as the character sheet.
- The Gear tab no longer scrolls sideways on phones.
- First load is about 15–20% faster.
- "About & credits" is now at the bottom of every tab.
- How to use, What's new and the README are updated for all of the above.

## 6–7 November 2026
- Game-style character sheet, skill trees and paper doll using D2R artwork.
- The art now uses WebP files, about a quarter of the size.
- Stat buttons: Ctrl-click changes a stat by 5 and Shift-click by 10. New "Keep unspent" option for stat points.
- Merc gear shows item tooltips.
- Save editor styling, and a Tools button in How to use.
- Phones: the planner's tab row fades at the edge that has more tabs.

## 5 November 2026: public release
- Released at [horadricodds.github.io](https://horadricodds.github.io/).
  - Works offline and can be installed like an app.
  - "Something wrong?" report link and a project email.
  - Version label at the bottom of the page.
- **Tools** tab:
  - Holy Grail tracker, rune helper with cube steps, and run tracker.
  - Farm planner, roll checker, sockets & affixes helper and cube recipes.
  - Backup & restore.
- **Save editor** for offline characters (D2R, Lord of Destruction 1.14d and Classic 1.14d):
  - Change level, stats, skills and gold, and move, copy or delete items.
  - Add uniques, sets, runewords, runes, gems, and magic or rare items.
- **Import save:** open an offline character's build in the planner, fill your Grail and count your runes. Shared stash (.d2i) supported.
- **Experience** tab: experience, kills and clears to your next level or a goal level, best areas, terror zones and a leveling route.
- Tooltips:
  - Hover or tap any item for its stats.
  - Skill tooltips show damage at your level and the next, synergies, masteries and damage with your planned weapon.
- Starter builds written for Horadric Odds, linking to the full Maxroll and Icy Veins guides.
- **How to use** tab, with links straight to any tab (#planner, #experience, #grail and others).
- Optional diablo2.io price links, with permission from diablo2.io.
- Phone layout: one skill tree at a time, and long notes fold.

## 2–4 November 2026
- **Build planner** added to Horadric Odds:
  - Skills, stats, respec phases, a gear plan and a level-by-level leveling guide with a checklist.
  - Item data from the game files, with requirement warnings and custom stats for rares and charms.
  - Breakpoints for cast speed, hit recovery and block, plus attack speed from the game's animation frames.
  - Resistances per difficulty, block, and merc auras.
  - Compare tab: two builds side by side.
  - Farm suggestions for each gear goal, with odds buttons for runes and items.
  - Build codes for sharing, and a build library.
- The planner and Drop odds share magic find, Find Item and character level.

## Before November 2026
- **Drop odds** calculator: your chance per kill for any unique, set item, rune, runeword or base, from the game's drop tables.
- Search by item, by stats or by monster, and gambling odds.
- Supports terror zones, Find Item, first-kill quest drops, players and party size, and magic find.
- Game versions: D2R Reign of the Warlock, D2R before the expansion, and Lord of Destruction 1.14d.
