The blank D2R v105 character seed is derived from the d2r-horadric-tools template. The upstream seed contains nine zero spacer bytes between stats and skills; this copy removes that spacer and is rebuilt by the save editor writer so it can round-trip through the editor:
https://github.com/crabsmadethis/d2r-horadric-tools/blob/main/d2r_chargen/data/template.d2s

The upstream repository is MIT licensed. Its license is included as LICENSE-d2r-horadric-tools.txt. The seed is used locally as a valid save-structure starting point; the build planner fills in the selected class, level, stats and skills.
