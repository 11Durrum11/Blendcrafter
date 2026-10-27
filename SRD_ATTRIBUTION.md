# SRD Attribution

Blendcrafter is an independent, open-source character calculator for the d20
System Reference Document (SRD), version 3.5. It is **not affiliated with,
endorsed by, or sponsored by Wizards of the Coast**. Blendcrafter does not use
any Wizards of the Coast product names, trademarks, or proprietary Product
Identity (including the trademarked terms "Dungeons & Dragons" and "D&D") —
only rules content released as Open Game Content under the Open Game License.

## What is Open Game Content here

All game rule mechanics implemented in this project — ability score
adjustments, saving-throw and base-attack-bonus progressions, hit-die
progressions, skill points, monster template statistics (Half-Dragon, Vampire,
Ghost, Lycanthrope), size and type-change rules, and the CR/Level Adjustment
math — are Open Game Content drawn from the System Reference Document,
published at [d20srd.org](https://www.d20srd.org/), and are used under the
terms of the Open Game License Version 1.0a (full text in
[`OGL.txt`](./OGL.txt)).

Per-entry citations are embedded directly in the data packs
(`src/data/races.ts`, `src/data/classes.ts`, `src/data/templates.ts`) as a
`source` URL field on every race, class, and template record, and are surfaced
in the app's character sheet audit trail next to each derived value.

| Content | Source |
|---|---|
| Human, Elf, Dwarf, Halfling racial traits | [d20srd.org/srd/races/humans.htm](https://www.d20srd.org/srd/races/humans.htm) and sibling pages (`elves.htm`, `dwarves.htm`, `halflings.htm`) |
| Fighter class table | [d20srd.org/srd/classes/fighter.htm](https://www.d20srd.org/srd/classes/fighter.htm) |
| Wizard class table | [d20srd.org/srd/classes/wizard.htm](https://www.d20srd.org/srd/classes/wizard.htm) |
| Rogue class table | [d20srd.org/srd/classes/rogue.htm](https://www.d20srd.org/srd/classes/rogue.htm) |
| Cleric class table | [d20srd.org/srd/classes/cleric.htm](https://www.d20srd.org/srd/classes/cleric.htm) |
| Half-Dragon template | [d20srd.org/srd/monsters/halfDragon.htm](https://www.d20srd.org/srd/monsters/halfDragon.htm) |
| Vampire template | [d20srd.org/srd/monsters/vampire.htm](https://www.d20srd.org/srd/monsters/vampire.htm) |
| Ghost template | [d20srd.org/srd/monsters/ghost.htm](https://www.d20srd.org/srd/monsters/ghost.htm) |
| Lycanthrope (Werewolf) template | [d20srd.org/srd/monsters/lycanthrope.htm](https://www.d20srd.org/srd/monsters/lycanthrope.htm) |
| General template stacking / "improves by" rules | [d20srd.org/srd/improvingMonsters.htm](https://www.d20srd.org/srd/improvingMonsters.htm) |
| Ability modifiers, BAB, saves, base rules | [d20srd.org/srd/theBasics.htm](https://www.d20srd.org/srd/theBasics.htm) |
| Monsters as PC races / Effective Character Level | [d20srd.org/srd/monstersAsRaces.htm](https://www.d20srd.org/srd/monstersAsRaces.htm) |
| Level Adjustment buyoff (Unearthed Arcana variant) | [d20srd.org/srd/variant/races/reducingLevelAdjustments.htm](https://www.d20srd.org/srd/variant/races/reducingLevelAdjustments.htm) |

## Open Game License 1.0a — Section 15 Copyright Notice

```
Open Game License v 1.0a Copyright 2000, Wizards of the Coast, Inc.

System Reference Document Copyright 2000-2003, Wizards of the Coast, Inc.;
Authors Jonathan Tweet, Monte Cook, Skip Williams, Rich Baker, Andy Collins,
David Noonan, Rich Redman, Bruce R. Cordell, John D. Rateliff, Thomas Reid,
James Wyatt, based on original material by E. Gary Gygax and Dave Arneson.
```

Full license text: [d20srd.org/ogl.htm](https://www.d20srd.org/ogl.htm) and
reproduced verbatim in [`OGL.txt`](./OGL.txt) in this repository.

## What is NOT Open Game Content

Blendcrafter's original source code (TypeScript, React components, CSS, build
configuration), UI/UX design, the "Blendcrafter" name, and its dragon-scale
logo are original works of this project, licensed separately under the MIT
License (see [`LICENSE`](./LICENSE)). They are not Open Game Content and are
not covered by the OGL.

Blendcrafter does not reproduce, reference, or use any Wizards of the Coast
Product Identity: no proper-noun character names, no setting names, no cover
art, no trade dress, and no use of the trademarked terms "Dungeons & Dragons"
or "D&D" anywhere in the product name, UI copy, or source code.

## Optional rule sets: Eberron, Iron Kingdoms, Sorcery & Steam

Blendcrafter also ships three **optional, off-by-default** content sets, toggled from the
"Rule Sets" control in the app header: Eberron, Iron Kingdoms, and a Sorcery & Steam-inspired
steam-fantasy set. These are **independent mechanical-reference indexes** that we compiled
ourselves — short numeric/mechanical summaries (ability score adjustments, hit dice, base
attack/save progressions, bonus values, one-line benefit or trait text) in the same spirit as
long-standing fan reference tools such as PCGen or dndtools.net. No narrative prose, art, or
verbatim stat-block text from any sourcebook is reproduced here.

Setting names ("Eberron", "Iron Kingdoms"), character/race/class names specific to those
settings, and any other Product Identity remain the property of their respective rights
holders — Wizards of the Coast for Eberron, and Privateer Press for Iron Kingdoms and the
Sorcery & Steam-inspired content. Blendcrafter is **not endorsed by, affiliated with, or
sponsored by** Wizards of the Coast or Privateer Press.

| Content set | Reference used |
|---|---|
| Eberron (races, classes, prestige classes, feats, templates, equipment, magic items) | [PCGen Eberron data pack](https://github.com/BahamutDragon/pcgen/tree/master/data/35e/wizards_of_the_coast/campaign_settings/eberron) |
| Iron Kingdoms (races, classes, prestige classes, feats, templates, equipment, magic items) | [ENWorld: Iron Kingdoms Character Guide table of contents](https://www.enworld.org/threads/privateer-press-iron-kingdoms-character-guide-table-of-contents-posted.82934/), [Iron Kingdoms character classes reference PDF](https://www.revolutionsf.com/iveymojo/CharacterClasses.pdf) |
| Sorcery & Steam-inspired steam-fantasy set (classes, prestige classes, skills, feats, templates, equipment, magic items) | [PCGen Sorcery and Steam data pack](https://github.com/PCGen/pcgen/tree/master/data/3e/fantasy_flight_games/legends_and_lairs/sorcery_and_steam) |

Per-entry `sourceUrl` fields are embedded in every record under `src/data/eberron/`,
`src/data/iron_kingdoms/`, and `src/data/sorcery_steam/`, and surface as citation links in the
same audit-trail UI used for core SRD content.
