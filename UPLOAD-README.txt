Horadric Odds gear, planner and D2 bitmap-heading update

Copy these into the root of the GitHub Pages repository:
- index.html (replace the current file)
- d2-font.js (place beside index.html)
- images/ (merge this folder into the repository)
- templates/ (include the license and source template attribution)

The Build planner's “Export to character save” offers exact supported save versions. D2R v105 can create a fresh offline character from the selected build phase. D2R v97–104, Lord of Destruction 1.14d and Classic 1.14d apply the build to an imported save of the selected version. Class, level, base stats, hard-point skills, supported named gear, weapon swaps, charms and supported Act II mercenary equipment are included. Ambiguous alternatives or unmapped item names stop the export with an explanation instead of being silently omitted. Generated output is checked by parsing it back before it is offered for download. Unsupported classes, versions, skills or gear show an error and keep the import path available. Save files are handled locally and never uploaded.

The Gear tab uses matching inventory-sized panels, with the mercenary on the left and character inventory on the right. The I/II tabs on either hand switch both weapon and off-hand sets together. Add alternate items in the Weapon swap and Off-hand swap gear slots. Item art is centered in its in-game box, and charms fill the 10x4 inventory grid without overlap.

The planner's skill tree and character stats sheet use the same panel width as the inventory. The skill and character panels sit side by side. Skill plus buttons appear beside skills that can receive points, and remaining skill points appear in the tree footer.

The player character and skill sheets use larger, crisp CSS text for readability. D2 bitmap lettering remains on the inventory weapon tabs and mercenary inventory labels. It uses a canvas renderer with the 16px glyph atlas and spacing data; it is not an installable WOFF font. Atlas source: Harrogath D2 Font Generator by LAZ (https://tools.harrogath.com/d2font.html).

The player stats panel updates skill damage from the selected build phase, including hard-point synergies and +skills. Attack damage uses the selected phase's attack skill when available. Stamina is calculated from class, level, vitality and planned +Vitality. Defense is shown as a calculated range when the planned armor's base or item defense has random rolls; temporary skill buffs are not included.

The stats and mercenary sheets use the supplied D2R panel assets. Item artwork source: https://lootcube.net/en/base-items. Inventory background source: https://i.dimentio.dev/d2r/ui/panel/inventory/background.png. Diablo II: Resurrected artwork and game data belong to Blizzard Entertainment. Horadric Odds does not own or claim rights to the artwork and is not affiliated with Blizzard or LootCube.
