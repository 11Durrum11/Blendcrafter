# Blendcrafter — d20 SRD 3.5 Template Blending Character Builder

**Blendcrafter** is an open-source, client-side-only character calculator for
the d20 System Reference Document (SRD), version 3.5. Its standout feature is
**template blending** — combining a base race with multiple monster templates
(e.g. Half-Dragon + Vampire), class levels, and feats into one composite
character, with correct SRD stacking and derivation rules applied in order.

> Blendcrafter is not affiliated with, endorsed by, or sponsored by Wizards of
> the Coast. It uses only game mechanics released as Open Game Content under the
> Open Game License 1.0a. See [OGL.txt](./OGL.txt) and
> [SRD_ATTRIBUTION.md](./SRD_ATTRIBUTION.md).

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5000
npm run build     # production build → dist/
```

---

## Features

| Feature | Detail |
|---|---|
| Base races | Human, Elf, Dwarf, Halfling (core) plus dozens more across Eberron and Iron Kingdoms when enabled — full ability adjustments, size, speed, and traits |
| Classes & prestige classes | Core Fighter/Wizard/Rogue/Cleric plus the full SRD core roster, Eberron, Iron Kingdoms, and Sorcery & Steam-inspired classes; prestige classes are chosen alongside base classes in the Class Levels step |
| Skills | Full SRD skill list plus Sorcery & Steam skills — ranks capped by class-skill status (level+3 vs half that, cross-class) with a live skill-points-remaining counter |
| Feats | Full SRD feat list plus Eberron/Iron Kingdoms/Sorcery & Steam feats — free-text prerequisites shown with a soft "not verified" warning badge rather than a hard block; feats with clean numeric effects (e.g. Toughness) feed the resolver automatically |
| Equipment & magic items | Weapons, armor, shields, gear, and magic items across all four rule sets; equipped armor/shield items with an AC bonus flow straight into the Armor Class total |
| Rule Sets toggle | Core/SRD content is always on; Eberron, Iron Kingdoms, and Sorcery & Steam are opt-in via the header control, and every picker filters to the enabled sets. Non-core entries carry a "Product Identity" badge explaining that they're an independent mechanical index, not reproduced text |
| Template blending | Apply any ordered combination of Half-Dragon, Vampire, Ghost, Lycanthrope (Werewolf), plus additional templates from the optional rule sets |
| SRD ordering rule | Inherited templates (Half-Dragon, Lycanthrope) are locked before acquired (Vampire, Ghost) |
| Prerequisite validation | Each template's "base creature" requirements are checked against the original race type |
| Natural armor stacking | Template "improves by +N" entries always compound (Half-Dragon +4 + Vampire +6 = +10) |
| Typed bonus stacking | Same-type non-dodge/circumstance bonuses don't stack; dodge/circumstance/untyped always stack — this is the same mechanism equipment AC bonuses and feat modifiers now flow through |
| Audit trails | Every derived stat (ability scores, AC, BAB, saves, HP, CR, LA, ECL, skill totals, skill points, feat slots) expands to show its full step-by-step derivation |
| Export / Import | Characters saved as plain JSON files; no server, no cookies, no localStorage required |
| Dark/light theme | Toggle with the sun/moon button; dark slate + parchment/amber by default |

---

## Architecture

```
src/
├── engine/           # Pure TypeScript rules engine
│   ├── types.ts      # Full type system (AbilityKey, CreatureType, Modifier, Patch, …)
│   ├── stacking.ts   # Typed-bonus stacking resolver (same type = best applies; dodge/circumstance stack)
│   ├── prerequisites.ts  # Template prerequisite + ordering checks
│   ├── dice.ts       # Die-size stepping (d6→d8→d10→d12) and average-roll helpers
│   ├── progression.ts # BAB and base save progression tables
│   └── resolver.ts   # 8-phase character resolver → ResolvedCharacter + audit trail
├── data/
│   ├── races.ts, classes.ts, templates.ts   # Original 4-entry legacy core packs
│   ├── core/          # Full SRD core roster: races, classes, skills, feats, prestige-classes, templates, equipment, magic-items
│   ├── eberron/        # Optional: races, classes, prestige-classes, feats, templates, equipment, magic-items
│   ├── iron_kingdoms/  # Optional: races, classes, prestige-classes, feats, templates, equipment, magic-items
│   ├── sorcery_steam/  # Optional: classes, prestige-classes, skills, feats, templates, equipment, magic-items
│   └── index.ts        # ALL_RACES / ALL_CLASSES / ALL_TEMPLATES / ALL_SKILLS / ALL_FEATS / ALL_PRESTIGE_CLASSES / ALL_EQUIPMENT / ALL_MAGIC_ITEMS aggregate exports
├── components/
│   ├── audit-trail.tsx           # Expandable derived-stat component with source citations
│   ├── logo.tsx                  # Inline SVG dragon-scale logo
│   ├── ogl-footer.tsx            # About / OGL attribution dialog
│   ├── ruleset-toggle.tsx        # Header "Rule Sets" popover — toggles Eberron/Iron Kingdoms/Sorcery & Steam
│   ├── product-identity-badge.tsx # Badge + tooltip shown on any non-core entry in a picker
│   └── steps/
│       ├── step-race.tsx        # Step 1: race picker + ability score assignment
│       ├── step-classes.tsx     # Step 2: class level selection + prestige classes
│       ├── step-skills.tsx      # Step 3: skill rank allocation
│       ├── step-templates.tsx   # Step 4: ordered template chip list + live validation
│       ├── step-feats.tsx       # Step 5: feat selection with soft prerequisite warnings
│       ├── step-equipment.tsx   # Step 6: equipment + magic item inventory
│       └── step-sheet.tsx       # Step 7: computed character sheet
├── lib/
│   ├── use-character-build.ts  # Central React state hook wrapping the resolver
│   └── character-io.ts         # Export/import helpers (Blob + FileReader, no localStorage)
└── pages/
    └── builder.tsx   # Main SPA page: header, tabs, steps, navigation
```

### Resolver phases (src/engine/resolver.ts)

The resolver follows the 8-phase pipeline from the SRD:

1. **Normalize base creature** — race type, size, speed, racial traits
2. **Validate template order** — inherited before acquired (SRD ordering rule)
3. **Apply structural patches** — type/subtype changes, size changes, hit-die upgrades, speed modifications
4. **Apply modifiers** — ability score deltas (add/set/-9999 remove), typed AC bonuses, turn resistance
5. **Merge features** — special attacks, special qualities, feats, traits deduplicated by stable key
6. **Derive statistics** — ability modifiers, HP (average roll × die faces × dice count), AC components, BAB, saves, CR, LA, ECL
7. **LA buyoff ledger** — optional Unearthed Arcana variant: 5 × LA XP penalty reduction per bought-off level
8. **Audit trail** — every step records {source, sourceUrl, target, operation, resultingValue, note}

### Template blending and stacking

**Ordering rule:** SRD specifies inherited templates (those the base creature is born with, e.g.
Half-Dragon, Lycanthrope) must be applied before acquired templates (Vampire, Ghost). Blendcrafter
enforces this with a visual error banner and chip-level ordering controls.

**Prerequisite scope:** SRD template prerequisites like "humanoid or monstrous humanoid base
creature only" (Vampire) refer to the *original base creature's type* — not the intermediate type
after an earlier inherited template mutates it. This means Half-Dragon (→ Dragon type) followed by
Vampire is a legal, classic combination: Vampire's prerequisite sees Human → Humanoid, not the
post-Half-Dragon Dragon type.

Source: [d20srd.org/srd/monsters/vampire.htm](https://www.d20srd.org/srd/monsters/vampire.htm),
[d20srd.org/srd/improvingMonsters.htm](https://www.d20srd.org/srd/improvingMonsters.htm)

**Natural armor stacking:** SRD template wording says natural armor "improves by +N", not "grants a
+N natural armor bonus", so multiple templates compound. Half-Dragon (+4) + Vampire (+6) = +10 total
natural armor. This is modeled as `mode: "improve"`, `stackingPolicy: "always_stack"` in the data
pack so the resolver sums them before the normal typed-bonus deduplication step.

Source: [d20srd.org/srd/monsters/halfDragon.htm](https://www.d20srd.org/srd/monsters/halfDragon.htm),
[d20srd.org/srd/monsters/vampire.htm](https://www.d20srd.org/srd/monsters/vampire.htm)

**Known simplifications:**
- Half-Dragon CR minimum of 3 is noted but not enforced as a floor in the resolver; the flat +2 CR
  modifier is applied instead.
- Lycanthrope CR modifier (+3 flat) simplifies the SRD table that varies +2–+6 based on the animal
  form's HD.
- Ghost LA is 0 per SRD (recommended not as PC, but no numeric LA penalty).

---

## SRD Data Sources

Each data entry includes a `source` field with the d20srd.org URL it was derived from:

| Data | Source |
|---|---|
| Races | [d20srd.org/srd/races/](https://www.d20srd.org/srd/races/humans.htm) |
| Fighter | [d20srd.org/srd/classes/fighter.htm](https://www.d20srd.org/srd/classes/fighter.htm) |
| Wizard | [d20srd.org/srd/classes/wizard.htm](https://www.d20srd.org/srd/classes/wizard.htm) |
| Rogue | [d20srd.org/srd/classes/rogue.htm](https://www.d20srd.org/srd/classes/rogue.htm) |
| Cleric | [d20srd.org/srd/classes/cleric.htm](https://www.d20srd.org/srd/classes/cleric.htm) |
| Half-Dragon | [d20srd.org/srd/monsters/halfDragon.htm](https://www.d20srd.org/srd/monsters/halfDragon.htm) |
| Vampire | [d20srd.org/srd/monsters/vampire.htm](https://www.d20srd.org/srd/monsters/vampire.htm) |
| Ghost | [d20srd.org/srd/monsters/ghost.htm](https://www.d20srd.org/srd/monsters/ghost.htm) |
| Lycanthrope | [d20srd.org/srd/monsters/lycanthrope.htm](https://www.d20srd.org/srd/monsters/lycanthrope.htm) |
| Improving Monsters | [d20srd.org/srd/improvingMonsters.htm](https://www.d20srd.org/srd/improvingMonsters.htm) |
| Monsters as Races / ECL | [d20srd.org/srd/monstersAsRaces.htm](https://www.d20srd.org/srd/monstersAsRaces.htm) |
| LA Buyoff | [d20srd.org/srd/variant/races/reducingLevelAdjustments.htm](https://www.d20srd.org/srd/variant/races/reducingLevelAdjustments.htm) |
| OGL | [d20srd.org/ogl.htm](https://www.d20srd.org/ogl.htm) |

Research credits: the initial SRD rules analysis and TypeScript data model design that drove the
template stacking strategy is preserved in `dnd35_character_builder_research.md` (project root).

---

## Content sourcing & licensing

Core/SRD content (always on) is Open Game Content from the d20 SRD, used under the Open Game
License 1.0a — see [SRD_ATTRIBUTION.md](./SRD_ATTRIBUTION.md).

Three **optional, off-by-default** rule sets are toggled from the "Rule Sets" header control.
Each is an independent mechanical-reference index we compiled ourselves (numbers, tags, one-line
summaries) — not reproduced sourcebook prose — in the same spirit as fan reference tools like
PCGen or dndtools.net. Setting names and other Product Identity remain the property of their
publishers; Blendcrafter is not endorsed by or affiliated with them.

| Rule set | Reference used |
|---|---|
| Eberron | [PCGen Eberron data pack](https://github.com/BahamutDragon/pcgen/tree/master/data/35e/wizards_of_the_coast/campaign_settings/eberron) |
| Iron Kingdoms | [ENWorld: Iron Kingdoms Character Guide table of contents](https://www.enworld.org/threads/privateer-press-iron-kingdoms-character-guide-table-of-contents-posted.82934/), [Iron Kingdoms character classes reference PDF](https://www.revolutionsf.com/iveymojo/CharacterClasses.pdf) |
| Sorcery & Steam-inspired set | [PCGen Sorcery and Steam data pack](https://github.com/PCGen/pcgen/tree/master/data/3e/fantasy_flight_games/legends_and_lairs/sorcery_and_steam) |

Full reasoning and per-category attribution: [SRD_ATTRIBUTION.md](./SRD_ATTRIBUTION.md#optional-rule-sets-eberron-iron-kingdoms-sorcery--steam).

---

## License

**Original code** (all TypeScript/TSX/CSS in `src/`, configuration files) is MIT licensed.
See [LICENSE](./LICENSE).

**Game rules content** (ability adjustments, class progressions, template stat blocks) is Open Game
Content used under the Open Game License Version 1.0a.
See [OGL.txt](./OGL.txt) and [SRD_ATTRIBUTION.md](./SRD_ATTRIBUTION.md).


## Saved Character Repository

Blendcrafter now includes a browser-local Character Repository backed by IndexedDB.

- **Save** creates a persistent saved-character entry.
- **Characters** opens the repository with search, load, update, and delete controls.
- **Update** overwrites the currently loaded repository entry with the current build.
- Saved characters survive page reloads and browser restarts on the same browser profile.
- The repository is separate from JSON Export/Import, so JSON files remain available for portable backups and sharing.
