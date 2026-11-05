Horadric Odds gear, planner and D2 bitmap-heading update

Copy these into the root of the GitHub Pages repository:
- index.html (replace the current file)
- d2-font.js (place beside index.html)
- images/ (merge this folder into the repository)

The Gear tab uses matching inventory-sized panels, with the mercenary on the left and character inventory on the right. The I/II tabs on either hand switch both weapon and off-hand sets together. Add alternate items in the Weapon swap and Off-hand swap gear slots. Item art is centered in its in-game box, and charms fill the 10x4 inventory grid without overlap.

The planner's skill tree and character stats sheet use the same panel width as the inventory. The skill and character panels sit side by side. Skill plus buttons appear beside skills that can receive points, and remaining skill points appear in the tree footer.

The D2 bitmap lettering is limited to the player skills, player stats, player inventory tabs and mercenary inventory panels. It uses a canvas renderer with the 16px glyph atlas and spacing data; it is not an installable WOFF font. Atlas source: Harrogath D2 Font Generator by LAZ (https://tools.harrogath.com/d2font.html).

The player stats panel updates skill damage from the selected build phase, including hard-point synergies and +skills. Attack damage uses the selected phase's attack skill when available. Stamina is calculated from class, level, vitality and planned +Vitality. Defense is shown as a calculated range when the planned armor's base or item defense has random rolls; temporary skill buffs are not included.

The stats and mercenary sheets use the supplied D2R panel assets. Item artwork source: https://lootcube.net/en/base-items. Inventory background source: https://i.dimentio.dev/d2r/ui/panel/inventory/background.png. Diablo II: Resurrected artwork and game data belong to Blizzard Entertainment. Horadric Odds does not own or claim rights to the artwork and is not affiliated with Blizzard or LootCube.
