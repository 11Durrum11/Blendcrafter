# Blendcrafter — Rebuild Notes (2026-10-25)

Project location: `~/workspace/blendcrafter-rebuild/`
Status: **builds clean, type-checks clean, serves, resolver smoke-tested.**
Local working copy only — not deployed, not pushed to GitHub.

## Verification results

- `npm install` — completed clean (exit 0) using the recovered `bundle/package.json` unchanged.
- `npm run check` (`tsc`, strict) — **0 errors.**
- `npm run build` (`vite build`) — **succeeded**: 1,721 modules transformed;
  `dist/index.html` 1.65 kB, JS bundle 636 kB (169 kB gzip), CSS 35.8 kB.
  (One benign warning: chunk > 500 kB — expected with the full data packs in one bundle.)
- Serving check — `vite preview` on port 5000: `GET /` → HTTP 200, correct
  `<title>Blendcrafter — Template Blending Character Builder for d20 3.5 SRD</title>`,
  `#root` present, JS bundle served HTTP 200 (637,585 bytes). Server stopped after the check.
- Resolver smoke test (run via tsx against the real modules, then deleted):
  Human Fighter 5 + Half-Dragon (Red) + Vampire + Toughness:
  type Undead; STR 29 (15+8+6); CON removed (null); CHA 14; **natural armor +10**
  (Half-Dragon "improves by +4" + Vampire "improves by +6" compound, per README);
  AC 24 / touch 14 / flat-footed 20; HP 39 (d12s as undead, max at 1st level, +3 Toughness);
  BAB +5; CR 9; LA +11; ECL 16; **zero validation errors** (the classic combo is legal
  because prerequisites check the ORIGINAL base type). Reversed order (Vampire before
  Half-Dragon) correctly produces a "must be applied before" ordering error.
  Ghost on an Elf: STR removed, fly speed 30 ft granted. Vampire's +8 racial Listen
  bonus flows into the skill total. Skill-point math verified (48 total / 12 spent).

## Recovered verbatim (copied, unmodified)

- `src/App.tsx`, all of `src/components/` (steps, audit-trail, character-repository,
  entity-detail-dialog, house-rules-toggle, ogl-footer, logo, product-identity-badge,
  ruleset-toggle, full `ui/` kit) — 32 component files.
- `src/data/classes.ts` (legacy 4-class pack), `src/data/core/{classes,equipment,feats,magic-items,new-base-classes}`.
- Root docs: `index.html`, `package.json`, `README.md`, `OGL.txt`, `SRD_ATTRIBUTION.md`,
  `LICENSE`, `components.json`, `.gitignore`.

### One recovered file was itself broken (logged touch)

- `src/data/core/new-equipment.json` arrived **truncated** (invalid JSON — unterminated
  string at char 93,109; the archive truncation cut it mid-entry). The copy in this
  rebuild was salvaged by parsing entry-by-entry: **217 complete equipment records
  recovered**; only the final, partial entry was dropped. The decoded originals under
  `~/workspace/blendcrafter-decoded/` were not modified.

## Reconstructed (file by file)

### Scaffolding
- `vite.config.ts` — Vite 5 + React plugin, `@` → `src` alias, dev/preview port 5000 (README quick-start).
- `tsconfig.json` — strict, bundler resolution, `@/*` paths, `resolveJsonModule` (for the equipment JSON pack).
- `tailwind.config.ts` — shadcn "new-york" theme per `components.json` (neutral base), CSS-variable colors
  including a `card-border` color the recovered components reference, Fraunces (display) / General Sans / JetBrains Mono fonts.
- `postcss.config.js`, `src/index.css` — light parchment + dark slate/amber palettes (dark is default, per README),
  plus the `hover-elevate` / `active-elevate-2` overlay utilities the recovered components use.
- `src/main.tsx` — React root; applies the default `dark` class. `src/assets/favicon.svg` — mark derived from logo.tsx geometry.

### Engine (`src/engine/`) — entirely missing upstream, rebuilt to README spec
- `types.ts` — full type system (AbilityKey/CreatureType/Modifier/Patch/…, CharacterBuild, ResolvedCharacter, audit/validation types).
- `stacking.ts` — typed-bonus resolver: same-type bonuses take the best, dodge/circumstance/untyped and
  "improve"-mode bonuses always compound, penalties always stack; suppressed bonuses appear in the audit trail.
- `prerequisites.ts` — `checkPrerequisites(def, ctx)` against the ORIGINAL base type + `checkTemplateOrdering`
  (inherited before acquired; messages contain "must be applied before", which the recovered step filters on).
- `dice.ts` — die parsing, die-size ladder stepping, average rolls.
- `progression.ts` — BAB/save formulas + per-class row lookup against the packs' explicit tables.
- `house-rules.ts` — `HOUSE_RULE_DEFS` catalog (cross-class double cost, cross-class half cap, LA buyoff;
  defaults = RAW) consumed by the recovered header toggle.
- `personality.ts` — `DEFAULT_PERSONALITY` + deterministic `generatePersonality(build, resolved, profile)`
  producing the full 16-section profile the recovered step renders, driven by mechanics + weighted inputs.
- `resolver.ts` — the 8-phase resolver: normalize → validate → patches → modifiers → merge features →
  derive (abilities, HD/HP, BAB, saves, AC with touch/flat-footed, skills, skill points, feat slots,
  CR/LA/ECL) → LA buyoff ledger → audit trails on every derived value.

### Lib (`src/lib/`, `src/hooks/`)
- `utils.ts` — standard `cn()` (clsx + tailwind-merge).
- `use-toast.ts` — standard shadcn toast store/hook matching the recovered Toaster's contract.
- `character-repository.ts` — async SavedCharacter store backed by **IndexedDB** (per README; the task's
  localStorage alternative was not needed). `saveCharacter(build, existingId?)`, `listSavedCharacters`, `deleteSavedCharacter`.
- `entity-descriptions.ts` — `EntityDetail` + describe* builders for race/class/prestige/skill/feat/equipment/magic-item/ability.
- `use-character-build.ts` — central build state hook + `STANDARD_ARRAY` (15/14/13/12/10/8) + `createDefaultBuild`/`normalizeBuild`.
- `character-io.ts` — JSON export (Blob download) / import (FileReader) per README architecture.

### Pages (`src/pages/`)
- `builder.tsx` — header (logo, name field, Rule Sets / House Rules toggles, repository, export/import,
  new, theme toggle), tabbed 8-step wizard wired route `/step/:step`, prev/next navigation, OGL footer,
  live ECL/CR/HP/AC summary strip.
- `not-found.tsx` — 404 card with a route home.

### Data (rebuilt from the d20 SRD 3.5, OGC, d20srd.org citations)
- `src/data/races.ts` — the 7 core races (Human, Elf, Dwarf, Halfling, Gnome, Half-Elf, Half-Orc) with SRD
  ability adjustments, size/speed/type/subtypes, favored classes, skill bonuses, and trait features.
  Halfling stat block cross-checked against published 3.5 SRD text during the rebuild.
- `src/data/templates.ts` — Half-Dragon (5 dragon-variety forms), Vampire, Ghost, Lycanthrope
  (5 animal forms with animal HD + physical adjustments), modeled as patches + typed modifiers.
- `src/data/core/skills.ts` — the full SRD skill list (46 entries) with key abilities / trained-only / ACP flags.
- `src/data/core/prestige-classes.ts` — 8 core prestige classes with free-text prerequisites.
- `src/data/index.ts` — the `@/data` barrel: ALL_RACES / ALL_CLASSES / ALL_TEMPLATES / ALL_SKILLS /
  ALL_FEATS / ALL_PRESTIGE_CLASSES / ALL_EQUIPMENT / ALL_MAGIC_ITEMS aggregates, deduped by id.

## Interfaces that had to be guessed (and how they were pinned)

The recovered components were the contract wherever they touched a missing module; guesses
remain only where nothing recovered constrained the shape:

- **ResolvedCharacter field layout** — fully pinned by `step-sheet.tsx` / step components
  (`ac.components` as a record of `{value}`, `levelAdjustment.current`, `skillPoints.spent/total`,
  `featSlots.used/total`, per-stat `audit` arrays, etc.).
- **TemplateDefinition.patches: Patch[] is REQUIRED** — pinned by `step-templates.tsx` calling
  `def.patches.find(...)` unguarded. (Two recovered files initially failed type-check against my
  first-draft types; both were fixed by correcting MY types — `patches` required, and
  `PersonalityWeights` as a type alias rather than an interface for the `Object.fromEntries`
  cast in step-personality — never by editing recovered code.)
- **HouseRules keys** — nothing recovered names them; chosen from the mechanics the step copy
  references (cross-class skill cost/cap) plus the README's LA-buyoff phase.
- **CharacterBuild field set** — assembled from every prop passed into the step components plus
  the repository/personality consumers; the builder page and hook are reconstructions, so this
  shape is internal and consistent by construction.
- **Ghost ability handling** — SRD ghosts lose Str and Con; modeled as `null` (removed) deltas.
- **Lycanthrope forms** — ability adjustments/animal HD apply as the creature's default (hybrid)
  state; per-form natural armor totals fold in the animal's own NA + the lycanthrope +2. Documented
  in the data file header. Ghost LA is 0 per README's stated simplification; Lycanthrope CR is the
  README's flat +3.
- **CR base value** — total Hit Dice (PC-style), templates add their modifiers; the Half-Dragon
  CR-minimum-3 is, per README, noted but not enforced.
- **HP derivation** — max die at first character level, floored average thereafter; undead
  templates convert all dice to d12s (SRD template wording).
- The optional Eberron / Iron Kingdoms / Sorcery & Steam data packs were never recovered and are
  NOT reconstructed — the toggles work, the pickers simply have no non-core entries yet. The
  barrel is structured so those packs can be dropped in later.

---

# Addendum 2026-10-26 — Eberron + Iron Kingdoms data packs built

Status: **built, verified, smoke-tested.** This addendum supersedes the closing
bullet of the 2026-10-25 notes ("the optional Eberron / Iron Kingdoms / Sorcery &
Steam data packs … are NOT reconstructed") for Eberron and Iron Kingdoms only.
Sorcery & Steam remains unbuilt (see below).

## What was added (all NEW data — no recovered/original files were modified
except the barrel `src/data/index.ts`, which now merges the packs)

- `src/data/eberron/races.ts` — 4 races
- `src/data/eberron/prestige-classes.ts` — 8 prestige classes
- `src/data/eberron/feats.ts` — 17 feats
- `src/data/iron-kingdoms/races.ts` — 8 races
- `src/data/iron-kingdoms/feats.ts` — 19 feats (18 net new; Great Cleave
  duplicates the core SRD feat id and dedupes to the core record)

Verification (2026-10-26): clean install from scratch (node_modules and
lockfile removed, `npm install` exit 0) → `npm run check` (tsc) **0 errors** →
`npm run build` succeeded → `vite preview` served HTTP 200 with the correct
title. Resolver smoke test (tsx against the real modules, script deleted after
the run): **all checks passed** — Warforged Fighter 3 + Adamantine Body
(Construct type, CON 16 / WIS 9 / CHA 8 after racial mods, BAB +3, zero
validation errors); Shifter Rogue 2 + Healing Factor (DEX 17, Climb total 5
with the +2 racial bonus flowing in); Ogrun Fighter 1 (Giant type, STR 19,
LA +1, 1 racial HD counted, ECL 3, natural armor +2 in AC, zero errors);
Changeling Rogue 1 (Bluff total 6 with racial bonus); Master Inquisitive and
Warforged Juggernaut progression tables spot-checked against the book.

## Sources — every new entry cites its book in its `source` field; the books
live in Shaun's Dropbox (durrum1 account) at:

- **Eberron Campaign Setting** —
  `/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf`
  - Races: Changeling (p. 13), Kalashtar (pp. 17–18), Shifter (pp. 19–20),
    Warforged (pp. 22–23) — Chapter 2.
  - Prestige classes: Dragonmark Heir (p. 74), Eldeen Ranger (p. 75),
    Exorcist of the Silver Flame (p. 77), Extreme Explorer (p. 79),
    Heir of Siberys (p. 81), Master Inquisitive (p. 82),
    Warforged Juggernaut (pp. 84–85), Weretouched Master (pp. 85–86) —
    Chapter 5; progression tables read from the printed tables.
  - Feats: Aberrant Dragonmark (p. 46), Action Boost (p. 47),
    Action Surge (p. 47), Adamantine Body (p. 50), Haunting Melody (p. 54),
    Heroic Spirit (p. 55), Investigate (p. 55), Least Dragonmark (p. 56),
    Lesser Dragonmark (p. 56), Mithral Body (p. 57), Favored in House,
    Greater Dragonmark, Research, Song of the Heart, Undead Empathy,
    Healing Factor, Spontaneous Casting — Chapter 3 (page given where the
    printed page was verified).
- **Iron Kingdoms Character Guide** (Privateer Press) —
  `/A POC PC related/1.D&D 3rd ed.-Iron Kingdoms-Character Guide (Rules Sourcebook).pdf`
  (scanned-image PDF, no text layer; every entry read from the printed page)
  - Races: Dwarf/Rhulfolk (p. 46), Gobber (p. 48), Bogrin (p. 48),
    Iosan/Elf (p. 50), Nyss/Winter Elf (p. 52), Ogrun (p. 54),
    Trollkin + Trollkin Sorcerer adjustments (p. 56).
  - Feats: Accurate, Backstabber, Bayonet Charge, Enhanced Strength, Famous,
    Fearless, Feigned Opening, Find Weakness, Great Cleave, Guarded,
    Iron Will (Alternate), Keen Senses, Link, Perceptive, Poison Use,
    Prioritizing Target, Rallying Cry, Recognize Weapon, Sacrifice Accuracy —
    Chapter 5 (book pp. 135–147), prerequisites/benefits from the feat table
    and feat text.

## Judgment calls and deliberate omissions (plain notes)

- **No templates were added for either ruleset.** Neither the Eberron Campaign
  Setting nor the Iron Kingdoms Character Guide presents a playable template;
  none were invented.
- **Iron Kingdoms has no prestige classes and no new base classes** in the
  Character Guide (it modifies the PHB classes), so the IK pack is races +
  feats only.
- **Iron Kingdoms human ethnicities were NOT converted** (Caspian/Sulese, Ryn,
  Thurian, Khard, Kossite, Scharde, Umbrean): the book presents them as
  optional ability-adjustment variants of the standard human, not separate
  races, and the app has no sub-race/variant mechanism. They remain
  representable with the core Human record plus the adjustments in the book.
- **Ogrun bonus Hit Die:** the book grants "+1 Hit Die at 1st level" without
  naming a die type; modeled as 1 racial Hit Die, d8 (the Giant type's Hit
  Die), consistent with this app's `size-creature-stat-reference`.
- **Rhulfolk conditional bonuses** (Appraise/Craft vs stone/metal, Search vs
  stonework) and the Ogrun Craft (metal working) scope are carried in trait
  text, not the unconditional `skillBonuses` map; unconditional racial skill
  bonuses (Gobber, Bogrin, Iosan, Nyss, Ogrun Intimidate, all Eberron races)
  are in `skillBonuses` and flow into resolved totals.
- **Warforged composite plating** is an armor bonus in the book, so it is a
  trait, not natural armor.
- **Kalashtar Disguise +2** applies only when impersonating a human (book
  text); it is included in `skillBonuses` with the condition stated in the
  Social Mastery trait.
- **Heir of Siberys class skills** are "any skill that is a class skill for
  one of your other classes" — not expressible as a fixed list, so
  `classSkills` is empty and the rule is stated in the prerequisites.
- Warforged Juggernaut's and Exorcist's printed BAB columns are the
  three-quarter / full progressions respectively, used as printed.
- A handful of Iron Kingdoms feats that duplicate core feats under the same
  name (e.g. Improved Initiative, Skill Focus variants) were not converted;
  the core records already cover them.

## Sorcery & Steam — intentionally left empty in this build

Per the build's scope, the Sorcery & Steam toggle still opens an empty
picker. Note for the record: a `Sorcery & Steam.pdf` does exist in the
Dropbox library (`/a poc dm related/Desktop/Sorcery & Steam.pdf` and
`/a poc dm related/desktop/Sourcebooks/Sorcery & Steam.pdf`), so this pack
can be built later from Shaun's own books the same way, if he wants it.

---

# Addendum 2026-10-27 — Sorcery & Steam data pack built

Status: **built, verified, smoke-tested.** With this pack, all three
optional ruleset packs (Eberron, Iron Kingdoms, Sorcery & Steam) are
now built; no ruleset toggle opens an empty picker anymore. This
addendum supersedes the closing note of the 2026-10-26 addendum
("the Sorcery & Steam toggle still opens an empty picker").

## What was added (all NEW data — no recovered/original files were
modified except the barrel `src/data/index.ts`, which now merges
the pack into ALL_CLASSES / ALL_PRESTIGE_CLASSES / ALL_SKILLS /
ALL_FEATS and the export list)

- `src/data/sorcery-steam/classes.ts` — 3 base classes
- `src/data/sorcery-steam/prestige-classes.ts` — 15 prestige classes
- `src/data/sorcery-steam/feats.ts` — 47 feats
- `src/data/sorcery-steam/skills.ts` — 9 skills
- No races and no templates: the book contains none (see omissions).

Verification (2026-10-27): install was incremental (the verified
node_modules from the 2026-10-26 clean install was reused; no
dependency changes) → `npm run check` (tsc) **0 errors** →
`npm run build` succeeded (1,730 modules transformed; JS bundle
731.83 kB / 191.19 kB gzip, CSS 35.77 kB; the usual benign
chunk-size warning) → `vite preview` on port 5000 served HTTP 200
with the correct title, `#root` present, and the JS bundle served
HTTP 200 (server stopped after the check). Resolver smoke test
(tsx against the real modules, script deleted after the run):
**all 20 checks passed** — pack presence (3 classes, 15 prestige
classes, 9 skills, 47 feats in the aggregates); a Human Musketeer 3 /
Pilot 2 with Drive 8 ranks and the Pilot feat resolved with zero
validation errors, Drive counted as a class skill at total 11
(8 ranks + 3 Dex), Munitions total 7, BAB +4, Fort +2 / Ref +9 /
Will +1, 5 total Hit Dice, ECL 5; and a Human Artificer 5 resolved
with zero errors, BAB +2, Fort +4 and Will +4 (from the book's
printed, nonstandard Artificer rows), and Use Steamcraft Device
total 11 (8 ranks + 3 Int).

## Sources — every new entry cites its book and page in its `source`
field; the book lives in Shaun's Dropbox (durrum1 account) at:

- **Sorcery & Steam** (Fantasy Flight Games, Legends & Lairs) —
  `/A POC DM related/Desktop/Sorcery & Steam.pdf`
  (3,633,179 bytes, 178 pages; downloaded via the Dropbox connector
  for this build. The PDF has a full text layer, so all entries were
  read with `pdftotext` — no OCR was needed, unlike the Iron
  Kingdoms Character Guide. Page numbers below are the book's
  printed page numbers.)
  - Base classes (Chapter 2): Animal Lord (pp. 37–39), Artificer
    (pp. 41–43), Musketeer (pp. 44–46) — the chapter's only three
    new classes; the rest of the chapter is steampunk guidance for
    the core classes.
  - Prestige classes (Chapter 2): Arcane Airman (p. 47), Arcane
    Performer (p. 51), Brawler (p. 53), Demolitionist (p. 56),
    Detective (p. 59), Game Hunter (p. 62), Gun Glyph (p. 65),
    Hypnotist (p. 69), Noble Bodyguard (p. 72), Physician (p. 75),
    Pilot (p. 79), Rocket Ace (p. 82), Steamcraft Mage (p. 85),
    Street Runner (p. 89), Watchman (p. 93) — progression tables
    read from the printed tables, requirements and class skills
    from each class's Game Rule Information block.
  - Skills (Chapter 3): Drive (pp. 100–101), Munitions
    (pp. 101–102), Use Steamcraft Device (p. 102); the new
    Knowledge areas — steamcraft, clockworks, firearms (p. 99) —
    and Knowledge (engine programming) (p. 99); Profession
    (detective) and Profession (profiler) (p. 100).
  - Feats (Chapter 3): 31 general feats — Pilot and Armor
    Proficiency (Steamcraft Armor), Brew Injection, Combat
    Climbing (all p. 102); Combat Reload, Craft Clockworks, Craft
    Steamworks, Duelist, Explosives Expert, Grenadier, Hypnotist,
    Improved Parry (all p. 103); Jinx, Licensed Practitioner, Mad
    Bomber, Main-Gauche, Master Hypnotist, Ultimate Hypnotist,
    Mechanical Aptitude, Mechanical Genius (all p. 104); Parry,
    Physician, Rapid Reload, Reload on the Run, Riposte, Slip the
    Attack (all p. 105); Swing-By Attack, Trick Shot, Two Guns
    Blazing, Warrior Mechanist, Weapons of Opportunity (all
    p. 106) — plus 16 heritage feats: Child Prodigy, Science
    Prodigy, Musical Prodigy, Feral Child, Feral Athleticism,
    Feral Voice (all p. 107); Feral Senses, Groomed for Nobility,
    Noble Bearing, Noble Mien, Industrial Upbringing, Industrial
    Know-How, Industrial Master, Street Urchin (all p. 108);
    Street Scamp, Street Rat (both p. 109).

## Judgment calls and deliberate omissions (plain notes)

- **The book is a 3.0-era d20 sourcebook** (2003; it uses Animal
  Empathy, Wilderness Lore, Intuit Direction, Pick Pocket, Innuendo,
  Scry, and Read Lips), while this app is a 3.5 builder. Class-skill
  lists map the 3.0 names to their 3.5 equivalents: Alchemy →
  Craft (alchemy); Animal Empathy → Handle Animal; Wilderness Lore
  and Intuit Direction → Survival; Pick Pocket → Sleight of Hand;
  Innuendo → Bluff. Prerequisites and feat benefit text quote the
  book's own names where the name itself is the requirement.
- **Scry and Read Lips have no 3.5 skill equivalent** (Scry became a
  spell mechanic; Read Lips was dropped), so they are omitted from
  the Arcane Performer, Steamcraft Mage, Detective, and Street
  Runner class-skill lists, with the omission noted in each
  affected class's feature text.
- **No races were added.** Sorcery & Steam introduces no new
  playable races — its Chapter 2 opens with steampunk treatments of
  the core classes and races — so the race picker gains nothing
  from this ruleset rather than an invented race.
- **No templates were added.** The book presents no playable
  template; none were invented.
- **Base-class tables are printed to 20 levels in the book**; rows
  here cover levels 1–10, this app's per-class level cap convention
  (see src/data/core/new-base-classes.ts). The engine's fallback
  formulas cover anything above the shipped rows.
- **The Artificer's Fortitude column is nonstandard** in the book
  (+0, +1, +1, +2, +2, +3, +3, +4, +4, +5 over levels 1–10 — neither
  the good nor the poor progression); the printed rows are carried
  explicitly, and `goodSaves` lists only Will, the book's good save.
- **Name collisions handled by id, not by renaming entries:** the
  book has both a Hypnotist feat and a Hypnotist prestige class,
  and both a Physician feat and a Physician prestige class. The
  feats keep the plain ids (`hypnotist`, `physician`); the prestige
  classes carry `-prestige` id suffixes (`hypnotist-prestige`,
  `physician-prestige`). The aggregates are separate collections,
  so nothing dedupes or shadows.
- **The book's Rapid Reload is a different feat** from the core SRD
  Rapid Reload (firearms: matchlock/flintlock/percussion-cap reload
  times, vs. the SRD's chosen crossbow). It is included under the
  id `rapid-reload-firearms`, display name "Rapid Reload
  (Firearms)", so it does not dedupe into the core record and
  disappear — a deliberate divergence from the Iron Kingdoms Great
  Cleave handling, where the two records were mechanically the
  same feat.
- **Munitions' key ability is Dexterity** per the skill's own
  Chapter 3 definition; some class lists in Chapter 2 print it as
  Int (a book inconsistency). Skill records carry the Chapter 3
  ability; class-skill lists are names only, so nothing conflicts.
- **Chapter 3's new spells were NOT converted.** The app has no
  spell data type or spell picker, so the chapter's spell lists and
  new spells have nothing to attach to; adding them would require
  inventing an interface. Same for Chapter 4's equipment/firearms
  tables and Chapter 5's vehicles: the app's equipment records
  could hold individual items, but the firearms and vehicle rules
  themselves are not expressible in the current types, and no
  partial equipment conversion was attempted in this build.
- **Existing-skill new uses were not duplicated as skills** (Alchemy
  for gunpowder and refined coal, Appraise for social status,
  Disable Device against machines, Craft for clockworks /
  gunsmithing / steamcraft, and similar Chapter 3 sections): the
  core skill records already cover those skills, and the new uses
  are setting rules text, not new skills.
