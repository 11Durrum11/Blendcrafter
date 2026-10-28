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

# Addendum 2026-10-27 — Homebrew homebrew pack + body-modification index

Requested by Shaun in the "D&D 3.5 implants and attachments" side chat:
fold in BOTH (a) the grafts/symbionts/warforged-components list compiled
2026-10-25 and (b) his wild magic chart, then archive that chat.

## What was added

- **New ruleset tag `homebrew`** (`src/engine/types.ts` Ruleset union;
  label "Homebrew" + toggle entry in
  `src/components/ruleset-toggle.tsx`). Shaun's own setting content is
  opt-in like the other non-core packs.
- **`src/data/homebrew/templates.ts`** — Steampunk-Augmented Undead as a
  real `TemplateDefinition`, merged into `ALL_TEMPLATES` so it appears
  in the template picker when the Homebrew ruleset is enabled.
  Source: Shaun's own "HOMEBREW VALLEY WILD-MAGIC SURGE TABLE (D&D
  3.5).docx" (Google Drive, modified 2026-10-06). Modeled per the core
  template pack: add-subtype Construct patch (type stays Undead; HD /
  BAB / saves not recalculated), natural armor +4 as an "improve"
  modifier, Str +4 / Dex -2, CR +1, prerequisite corporeal Undead.
  The -5 ft speed penalty is a trait feature (no relative-speed patch
  exists in the resolver); levelAdjustment 0 (the document gives none;
  it is written for NPC/monster thralls). Features: Piston Slam, Steam
  Charge, Boiler Explosion, Alchemical Fortification, Vulnerability to
  Electricity, Heavy Plating.
- **`src/data/homebrew/tables.ts`** — the document's three random
  tables as a new `RandomTableDefinition` data type, exported as
  `ALL_RANDOM_TABLES`: Homebrew surge table (d20, 8 bands),
  Marketplace Chaos (d10, 10 entries), Defilement Zone surge table
  (d100, entries strictly 1-100 from the document's cleaned second
  pass). Effect text condensed to one line per entry in house style;
  full prose remains in Shaun's source document. No table-roller UI
  exists in the app, so — per the precedent of shipping data ahead of
  pickers — the tables are data-only exports for now.
- **`src/data/body-modifications.ts`** — new `BodyModificationDefinition`
  index type; 165 records from the 2026-10-25 compiled list
  (~/workspace/your_files/dnd-35-grafts-symbionts-components-list.md):
  123 grafts (14 families: Aboleth 8, Beholder 6, Fiendish 17, Illithid
  15, Maug 6, Undead 14 + 3 Forgotten Realms, Yuan-ti 5, Silthilar 9,
  Draconic 10, Deathless 5, Elemental 13, Plant 7, Construct 5),
  21 symbionts (Cerebral 3, Fiendish 3, Undead 1, Daelkyr 14),
  21 warforged components (6 core + 15 expanded, with attached/embedded
  installation and prices where published). Exported as
  `ALL_BODY_MODIFICATIONS`. INDEX ONLY, deliberately: records carry
  name, family, price where the list recorded one, and a book
  citation — full mechanics were not reproduced or invented, because
  the core books for most of this content (Fiend Folio, Lords of
  Madness, Libris Mortis, Magic of Eberron) are not in Shaun's
  library. Eberron-book families are tagged "eberron"; generic 3.5
  families are tagged "core". There is no picker/step for body
  modifications yet; adding one is a UI build for another day.

## Verification

- `npx tsc --noEmit`: 0 errors.
- `npm run build`: succeeded (pre-existing >500 kB chunk-size warning
  only).
- Data smoke test (tsx against the real modules, script deleted after
  the run): **22/22 passed** — family/kind counts (123/21/21 = 165),
  every record cited, d100 rolls exactly 1..100, template fields
  (ruleset, CR, ability modifiers, subtype patch, natural-armor
  modifier, Undead prerequisite, 6 features) all as modeled.
- NOT pushed to GitHub and NOT deployed in this pass (the earlier
  packs were pushed 2026-10-27 as commit a89ba425; this addendum is
  local until Shaun says push).

# Addendum 2026-10-27 — Batch 1 of the "all original books" program: Races of Stone + Races of the Wild

Shaun's instruction (2026-10-27): "Add all the different books that
were in the original." Batch 1 covers the two generic "Races of"
supplements from his Dropbox library. Both books are official
D&D 3.5 supplements, not separate settings, so — by the decision
recorded before this build — their records carry
`ruleset: "core"` (the original app's own data cited these books
under its core data; the only ruleset toggles remain eberron /
iron_kingdoms / sorcery_steam / homebrew). No Ruleset type,
toggle, engine, component, or recovered file was modified: new
files only, plus the barrel `src/data/index.ts`, plus this
addendum.

## What was added (all NEW files)

- **`src/data/races-of-stone/races.ts`** — 6 races: Goliath
  (traits p. 56), Chaos Gnome (pp. 87–88), Dream Dwarf
  (pp. 88–89), Feral Gargun (pp. 91–92), Stonechild (pp. 93–94),
  Whisper Gnome (pp. 95–96).
- **`src/data/races-of-stone/prestige-classes.ts`** — all 15
  Chapter 5 prestige classes: Battlesmith (p. 97), Blade Bravo
  (p. 99), Cragtop Archer (p. 101), Dawncaller (p. 103),
  Deepwarden (p. 105), Divine Prankster (p. 107), Earth Dreamer
  (p. 110), Goliath Liberator (p. 112), Iron Mind (p. 114),
  Peregrine Runner (p. 116), Runesmith (p. 118), Shadowcraft
  Mage (p. 120), Stoneblessed (p. 122), Stonedeath Assassin
  (p. 124), Stonespeaker Guardian (p. 127). Progressions are the
  printed tables (Table 5-1 through 5-15).
- **`src/data/races-of-stone/feats.ts`** — all 69 feats of
  Table 6–1 (pp. 134–135): 26 general, 21 racial, 4 bardic
  music, 5 divine, 1 item creation (Craft Rune Circle),
  6 psionic, 4 weapon style, 2 wild.
- **`src/data/races-of-the-wild/races.ts`** — 5 races: Raptoran
  (traits p. 68), Catfolk (p. 93), Centaur (p. 95), Gnoll
  (summary p. 102), Killoren (p. 103).
- **`src/data/races-of-the-wild/prestige-classes.ts`** — all 8
  Chapter 5 prestige classes: Arcane Hierophant (p. 108),
  Champion of Corellon Larethian (p. 113), Luckstealer (p. 118),
  Ruathar (p. 122), Skypledged (p. 126), Stormtalon (p. 131),
  Whisperknife (p. 135), Wildrunner (p. 139). Progressions are
  the printed tables (Table 5-1 through 5-8).
- **`src/data/races-of-the-wild/feats.ts`** — all 31 feats of
  Table 6–1 (pp. 148–149): 27 general + 4 tactical.
- **`src/data/index.ts`** — the six new collections are merged
  into ALL_RACES / ALL_PRESTIGE_CLASSES / ALL_FEATS and
  re-exported. No new skills, templates, or base classes: neither
  book contains any that fit those types (see omissions).

## Sources — every new entry cites its book and page in its `source` field

- Races of Stone: `/A POC PC related/5.Splat/Races of
  series/Races of Stone.pdf` (8,162,629 bytes, full text layer;
  PDF page = printed page throughout, verified against folios
  and the TOC).
- Races of the Wild: `/A POC PC related/5.Splat/Races of
  series/Races of the Wild.pdf` (23,243,664 bytes, full text
  layer). **This PDF is a two-page-spread scan**: after the front
  matter, most PDF pages contain a full two-page spread and are
  duplicated in pairs, so PDF page index does NOT equal printed
  page in Chapter 4 onward. All citations are the book's printed
  folios, read from the page footers (e.g. catfolk traits on
  printed p. 93, centaur on p. 95, gnoll summary on p. 102,
  killoren traits on p. 103). Plain `pdftotext -layout` also
  interleaves the four columns of a spread; `pdftotext -raw`
  and column crops read them cleanly.

## Judgment calls and deliberate omissions (plain notes)

- **Standard races not duplicated.** RoS Chapters 1–2 (dwarves,
  gnomes) and RotW Chapters 1–2 (elves, halflings) describe the
  Player's Handbook races with no new variants; the core SRD
  records already cover them.
- **Monster classes not converted.** RoS Tables 4–4/4–5 (feral
  gargun, stonechild) and the RotW centaur and gnoll monster
  classes spread a race over several levels; the app has no
  mechanism for that, so the race records carry the full adult
  traits + racial Hit Dice + level adjustment (feral gargun
  2 RHD/LA +2, stonechild 2 RHD/LA +4, centaur 4 RHD/LA +2,
  gnoll 2 RHD/LA +1). For the gnoll, the printed trait summary
  lists only the monster class's *starting* adjustments
  (+2 Str, –2 Int, –2 Cha); the record uses the full-grown
  totals the class builds to (+4 Str, +2 Con, –2 Int, –2 Cha,
  matching the Monster Manual gnoll).
- **Centaur ability adjustments follow the book, not the
  Monster Manual**: RotW's printed traits give +8 Str, +4 Dex,
  +4 Con, –2 Int, +2 Wis and NO Charisma adjustment (the MM
  centaur has –2 Cha; the book omits it, so the record does).
- **Goliaths get no darkvision trait**, although monstrous
  humanoids normally have it: the book's trait list omits it,
  and the dawncaller prestige class granting "darkvision 60 ft."
  at 1st level confirms the omission is deliberate.
- **Raptoran and killoren ability adjustments are empty** — both
  books print none (raptoran flight instead scales with Hit
  Dice: glide from 1st, true flight at 5 HD, unlimited at
  10 HD; modeled as trait text, since the app has no
  HD-triggered movement mechanism).
- **Dream dwarf and whisper gnome level adjustment +0** — no
  LA line is printed for either (contrast chaos gnome +1,
  printed immediately before the dream dwarf section).
- **Conditional racial skill bonuses are trait text, not
  `skillBonuses`**: dream dwarf Search (+2, stonework only) and
  Diplomacy (+2, earth subtype only) follow the core dwarf
  record's precedent. Unconditional bonuses (goliath Sense
  Motive, chaos gnome Listen, whisper gnome Hide/Move
  Silently/Listen/Spot, raptoran Climb/Spot/Jump, catfolk
  Listen/Move Silently, killoren Handle Animal/Survival) are
  modeled in `skillBonuses` and flow into resolved totals
  (verified in the smoke test).
- **No new skills.** Both books' Chapter 6 skills sections
  present new *uses* for Player's Handbook skills only (RoS
  p. 129 says so in terms); no SkillDefinition was created for
  either book, so there is no `skills.ts` in either pack.
- **No templates or base classes** — neither book contains any.
- **Racial substitution levels not converted** (RoS Ch. 6 and
  RotW pp. 154–162): no app mechanism exists for them.
- **Chapter 7+ material not converted**: equipment, magic
  items, spells, psionic powers, rune circles as items, and
  campaign/creature chapters are outside the Batch 1 type list
  (Race/Template/Class/PrestigeClass/Feat/Skill).
- **Feat category mapping**: the app has no bardic-music,
  divine, psionic, weapon-style, wild, or tactical categories;
  those feats are filed as "general" (weapon styles and
  tactical feats as "combat") with the book's grouping named in
  the record's `special` field. Fighter-bonus-feat eligibility
  (superscript 1 in RoS Table 6–1) is likewise noted in
  `special`.
- **Goad feat id is `goad-ros`**: the bare id `goad` already
  belongs to a weapon in `src/data/core/new-equipment.json`.
  Collections dedupe separately so it would not have clashed,
  but a unique id avoids cross-collection ambiguity; the reason
  is recorded in the feat's `special` field.
- **Prestige class feature text is one summary entry per
  class**, following the Sorcery & Steam pattern, and only
  states mechanics read from the printed table or feature text;
  where a table entry's mechanics were not read in full, the
  summary gives the feature's name and level only rather than
  inventing an effect. Tactical feats' benefits likewise read
  "See the feat description", exactly as RotW Table 6–1 prints
  them.
- **Iron Mind manifesting advancement** (levels 2–5 and 7–10,
  per its printed table) and **Luckstealer spellcasting
  advancement** (levels 2–6, 8, 9) are irregular, so they are
  stated in the prerequisites text, following the S&S pattern
  for spellcasting-advancement notes. Arcane Hierophant's dual
  +1 arcane AND +1 divine advancement is stated the same way.
- **Stoneblessed class skills list only the base skills**
  (Climb, Craft, Jump, Profession); the bond-specific added
  skills are described in the stonebond feature summary (the
  class's skills genuinely depend on a player choice the data
  model cannot branch on).

## Verification

- `npm run check` (tsc strict): 0 errors.
- `npm run build`: succeeded — dist JS 873.16 kB (gzip
  221.86 kB), up from 733.7 kB before this batch; only the
  pre-existing >500 kB chunk-size warning.
- `vite preview` on port 5000: HTTP 200, title "Blendcrafter —
  Template Blending Character Builder for d20 3.5 SRD"; new
  names (Whisper Gnome, Stonechild, Arcane Hierophant, Dallah
  Thaun's Luck, Stonedeath Assassin, Killoren) confirmed present
  in the built bundle; server stopped afterward.
- Resolver smoke test (tsx against the real modules, script
  deleted after the run): **60/60 passed**. Collection
  invariants: counts (6/5 races, 15/8 prestige classes, 69/31
  feats = 134 records), every record cited with its Dropbox
  source path, all ruleset "core", all ids present in the ALL_*
  aggregates, no id collisions with the 831 pre-existing ids.
  End-to-end builds: Goliath Barbarian 5 (Str 19/Dex 11/Con 16
  after racial mods, LA 1, ECL 6, Sense Motive 6 = 3 ranks + 1
  Wis + 2 racial); Whisper Gnome Rogue 3 (Hide/Move Silently
  totals include the +4 racial bonuses, Listen 2 from the racial
  bonus alone, ECL 3); Stonechild Fighter 2 (Str/Con 18, 2 RHD,
  ECL 8, +4 natural armor in AC); Dwarf Fighter 5/Battlesmith 2
  (BAB 7); Raptoran Cleric 5 (no ability mods, Jump 13 = 2 + 1 +
  10 racial, ECL 5); Centaur Ranger 2 (Str 18/Dex 16/Wis 13,
  6 total HD, ECL 8, Large, speed 50); Gnoll Barbarian 1
  (Str 18, ECL 4); Killoren Druid 4 (Handle Animal 6 and
  Survival 6 including +2 racial each, Fey type); Elf Wizard
  3/Druid 3/Arcane Hierophant 2 (BAB 4). Zero validation errors
  on every build that expected none.
- NOT pushed to GitHub and NOT deployed in this pass — the
  parent agent verifies, pushes (which auto-deploys via the
  Pages workflow), and reports.

# Addendum 2026-10-27 — Batch 1.5 of the "everything" program: Shaun's uploaded documents (firearms, alchemy, prosthetics)

Shaun uploaded three documents on 2026-10-27 and directed they be
brought in with everything else. All records carry ruleset
"sorcery_steam" (equipment/magic) or "homebrew" (prosthetics; see
below), cite the document in `source`, and carry the uploaded file
path in `sourceUrl`. NOT pushed or deployed in this pass.

## What was added

- **`src/data/sorcery-steam/firearms-equipment.ts`** — 45
  EquipmentItem records from `workspace/user/files/fire_arms.docx`
  (the document's tables carry Pathfinder Ultimate Combat stats,
  source tag "UC"): 19 firearms (9 one-handed + 10 two-handed,
  full printed stat lines), 17 ammunition/gear rows (5 alchemical
  cartridges, black powder dose/keg, bullets incl. adamantine and
  silver, gunsmith's kit, metal cartridge, pellets, powder horn),
  and the document's 9 tail items (musket ball, flechette,
  quickshot musket ball, thunderball, Krakling Spear, Dwarven
  Thunderhammer, Cannon, Ship's Cannon, Dragon Ballista).
- **`src/data/sorcery-steam/alchemical-equipment.ts`** — 155
  EquipmentItem records from
  `workspace/user/files/Alchemical_stuff.docx`: 152 rows of the
  document's eight tables (156 rows in all: Reagents 15, Oils
  and Flammables 5 of 6, Tools/Devices/Kits 10, Misc. Substances
  77 of 80, Balms/Medicines/Tonics 17, Hunting Aids 4, Herbs and
  Plants 15, Special Equipment 9) plus 3 items that appear only in the
  document's descriptions with prices (Dark wood, Oil stink,
  Censer Celestial), each marked as description-only in its
  notes. Each record keeps the row's Craft DC, price, weight, and
  source tag (CRB/APG/UE/AA/ARG/AM/DHB/DDR/KoG/AnA/PSFG/PCS/SoS/
  PoIS/RotRLPG) verbatim.
- **`src/data/sorcery-steam/firearm-magic-items.ts`** — 13
  MagicItemDefinition records from the firearms document's magic
  sections: Dry Load ammunition ability, Burrowing Bullet,
  Tracer Bullet, Lucky / Lucky Greater / Reliable / Reliable
  Greater firearm abilities, and the 6 wondrous items (Amulet of
  Bullet Protection, Dry Load Powder Horn, Far-Reaching Sight,
  Figurine of Wondrous Power (Slate Spider), Oil of Silence, See
  Invisibility Sight).
- **`src/data/body-modifications.ts`** — 18 records appended
  (ids `prosthetic-*`; index total 165 → 183) from
  `workspace/user/files/AI_imagined_steampunk_prothetics.docx`:
  families "Steampunk prosthetics" (9) and "Arcane prosthetics"
  (9), each with the document's market price in `cost` and its
  craft cost/XP/caster level/prerequisites folded into the
  summary.
- **`src/data/index.ts`** — the three new packs are merged into
  ALL_EQUIPMENT (+200) and ALL_MAGIC_ITEMS (+13) and re-exported.

## Judgment calls and deliberate omissions (plain notes)

- **Firearm stats live in `notes`.** EquipmentItem has no
  weapon-stat structure; following the core pack's convention
  (damage in notes), each firearm's full printed line — damage
  by size, crit, range increment, misfire with its radius,
  capacity, damage type — is transcribed into notes, scatter
  weapons getting the document's scatter-quality summary
  appended. Siege engines are category "weapon" (weight "—";
  the document prints none) with crew, loading, and space in
  notes. The gunsmith's kit is category "tool" and the three
  labs in the alchemical file are "tool" as well, matching the
  core pack's kits; all other alchemical rows are "gear".
- **Duplicate rows skipped (2):** Alchemist's fire (1 flask)
  and Acid (1 flask) duplicate existing core records
  (`alchemist-s-fire`, `acid-flask`) at identical statistics
  (20 gp / 1 lb.; 10 gp / 1 lb.), so they were not re-added
  under the Sorcery & Steam tag.
- **Unknown rows omitted (2):** Spell scorch and Spider Sac
  have price and weight literally "?? gp" / "?? lb." in the
  document; no faithful record can be made. The document's
  Thurible (descriptions only) likewise has no price or weight
  anywhere in the document and was omitted.
- **Blank/odd cells transcribed, not repaired:** Gel,
  phosphorescent and Powder, insomnia have blank Craft DCs
  (noted as blank); Paste, bone and Paste, shrieking have DC
  "?"; Silver sheen (price "+750 gp", DC "see text") and Healy
  myrrh (DC "see text", no source tag) are kept as printed.
  Poppy tears is priced 20 gp in the table but 15 gp in its
  description; the table value was used.
- **Black powder appears twice, deliberately:** the firearms
  document's "Black powder (dose)" (10 gp) and the alchemical
  document's reagent "Powder, Black" (10 gp) are separate rows
  of separate documents; both are kept under distinct ids.
- **Magic-item categories:** the four firearm weapon abilities
  use the core pack's "armor-or-weapon-special-ability"
  category, priced as printed ("+1 bonus" / "+3 bonus"); Dry
  Load is filed with them (it is an ability, not an item) with
  its ammunition-only scope stated in the summary; the two
  specific magic bullets form an "ammunition" category; the
  document's own "Wondrous Items" section maps to "wondrous".
  Aura/CL are folded into summaries. No `modifiers` were
  modeled — none of these effects map onto the resolver's
  modifier targets honestly (they act on misfire/grit/AC-vs-
  firearms, which the engine does not track).
- **Prosthetics kind:** BodyModificationKind is "graft" |
  "symbiont" | "warforged-component" — there is no "prosthetic"
  kind and the engine types were off-limits for this batch.
  The prosthetics are filed under kind "graft" (the source
  document itself frames 3.5 prosthetics under the graft rules
  and the Graft Flesh feat), with the filing stated in every
  record's `source`. If a "prosthetic" kind is ever wanted,
  it is a one-word union addition in src/engine/types.ts plus
  re-tagging these 18 records.
- **Prosthetics ruleset "homebrew":** the 165 published-book
  index records tag by book origin ("core" / "eberron"); the
  prosthetics are Shaun's own homebrew curation, so they take
  the homebrew tag "homebrew" rather than masquerading as a
  published "core" family. (This is a tag-only choice; the
  index merges into no picker.)
- **No house-rule, toggle-default, engine, or component file
  was touched** — new data files, the body-modifications data
  file, the barrel, and these notes only.

## Verification

- `npm run check` (tsc strict): 0 errors.
- `npm run build`: succeeded — dist JS 975,274 bytes, up from
  873.16 kB before this batch; only the pre-existing >500 kB
  chunk-size warning.
- `vite preview` on port 5000: HTTP 200, title "Blendcrafter —
  Template Blending Character Builder for d20 3.5 SRD"; new
  names (Pepperbox, Clockwork Piston Arm, Lucky Firearm,
  Alchemical cartridge, Steam-Vented Grapple Leg, Thunderstone)
  confirmed present in the built bundle; server stopped
  afterward.
- Resolver smoke test (tsx against the real modules, script
  deleted after the run): **33/33 passed**. Collection
  invariants: pack sizes 45 / 155 / 13; ALL_EQUIPMENT grew by
  exactly 200 and ALL_MAGIC_ITEMS by exactly 13 with every new
  id present; body-mod index 165 → 183 with exactly 18
  `prosthetic-*` records (9 Steampunk + 9 Arcane, all
  homebrew/graft, all with cost and summary); no duplicate ids
  inside any ALL_* collection and no new id colliding with any
  of the 965 pre-existing ids or across collections; spot
  transcriptions verified (pistol stat line, blunderbuss
  scatter note, cannon crew); the omitted "??" rows are absent
  and Alchemist's Fire still appears exactly once. End-to-end:
  a Human Fighter 1 carrying a pistol, paper cartridges, and an
  oil of silence resolved with zero validation errors and all
  three inventory items resolved.
- NOT pushed to GitHub and NOT deployed in this pass — the
  parent agent verifies, pushes (which auto-deploys via the
  Pages workflow), and reports.

# Addendum 2026-10-27 — Batch 2 of the "everything" program: Complete Warrior + Complete Adventurer

Batch 2 of the program Shaun set on 2026-10-27 ("add all the
different books that were in the original... bring in everything
and sort it right"). Sources are Shaun's own PDFs in his durrum1
Dropbox, folder `/A POC PC related/5.Splat/Complete sereies/`
(the folder's spelling is the book's own): `D&D 3.5 - Complete
Warrior.pdf` (56.1 MB) and `D&D 3.5 - Complete Adventurer.pdf`
(20.5 MB). Both books are generic official D&D 3.5 supplements,
so every record carries ruleset "core". Every record cites book
+ printed page in `source` and the Dropbox path in `sourceUrl`.
Short mechanical summaries in our own words throughout; no book
text reproduced beyond short mechanical facts. NOT pushed or
deployed in this pass — the parent agent pushes.

## What was added (all NEW files)

- **`src/data/complete-warrior/prestige-classes.ts`** — 36
  prestige classes, every one in the book's Chapter 2, with
  progressions read from the printed Tables 2-2…2-37: Bear
  Warrior, Bladesinger, Cavalier, Dark Hunter (5 levels),
  Darkwood Stalker, Dervish, Drunken Master, Exotic Weapon
  Master (3 levels), Eye of Gruumsh, Frenzied Berserker, Gnome
  Giant-Slayer, Halfling Outrider, Hulking Hurler (3 levels),
  Hunter of the Dead, Invisible Blade (5 levels), Justiciar,
  Kensai, Knight of the Chalice, Knight Protector, Master
  Thrower (5 levels), Master of the Unseen Hand (5 levels),
  Mindspy (5 levels), Nature's Warrior (5 levels), Occult Slayer
  (5 levels), Order of the Bow Initiate, Purple Dragon Knight
  (5 levels), Rage Mage, Ravager, Reaping Mauler (5 levels),
  Ronin, Spellsword, Stonelord, Tattooed Monk, Thayan Knight
  (5 levels), War Chanter, Warshaper (5 levels).
- **`src/data/complete-warrior/feats.ts`** — 81 feats from
  Chapter 3: 57 general feats from Table 3-1 (pp. 94–95;
  descriptions pp. 96–107), 6 divine feats from Table 3-2
  (p. 108), 8 tactical feats from Table 3-3 (p. 110), and 10
  weapon style feats from Table 3-4 (p. 113). General: Arcane
  Strike, Arterial Strike, Axiomatic Strike, Clever Wrestling,
  Close-Quarters Fighting, Dash, Defensive Strike, Defensive
  Throw, Destructive Rage, Earth's Embrace, Eagle Claw Attack,
  Extend Rage, Extra Rage, Extra Smiting, Extra Stunning, Eyes
  in the Back of Your Head, Faster Healing, Favored Power
  Attack, Fists of Iron, Fleet of Foot, Flying Kick, Freezing
  the Lifeblood, Greater Resiliency, Greater Two-Weapon Defense,
  Hamstring, Hold the Line, Improved Buckler Defense, Improved
  Combat Expertise, Improved Familiar, Improved Favored Enemy,
  Improved Mounted Archery, Improved Rapid Shot, Improved
  Toughness, Improved Two-Weapon Defense, Instantaneous Rage,
  Intimidating Rage, Karmic Strike, Kiai Shout, Greater Kiai
  Shout, Monkey Grip, Pain Touch, Phalanx Fighting, Pin Shield,
  Power Critical, Prone Attack, Ranged Disarm, Ranged Pin,
  Ranged Sunder, Rapid Stunning, Roundabout Kick,
  Sharp-Shooting, Shield Charge, Shield Slam, Swarmfighting,
  Throw Anything, Weakening Touch, Zen Archery. Divine: Divine
  Cleansing, Divine Resistance, Divine Might, Divine Shield,
  Divine Vigor, Sacred Vengeance. Tactical: Cavalry Charger,
  Combat Brute, Elusive Target, Formation Expert, Giantbane,
  Raptor School, Shock Trooper, Sun School. Style: Anvil of
  Thunder, Bear Fang, Crescent Moon, Hammer's Edge, High Sword
  Low Axe, Lightning Mace, Net and Trident, Quick Staff,
  Spinning Halberd, Three Mountains.
- **`src/data/complete-adventurer/prestige-classes.ts`** — 26
  prestige classes, every one in the book's Chapter 2, verified
  class-by-class against its printed block and table: Animal
  Lord, Beastmaster, Bloodhound, Daggerspell Mage, Daggerspell
  Shaper, Dread Pirate, Dungeon Delver, Exemplar, Fochlucan
  Lyrist, Ghost-Faced Killer, Highland Stalker, Maester, Master
  of Many Forms, Nightsong Enforcer, Nightsong Infiltrator,
  Ollam, Shadowbane Inquisitor, Shadowbane Stalker, Shadowmind,
  Spymaster, Streetfighter, Tempest, Thief-Acrobat, Vigilante,
  Virtuoso, Wild Plains Outrider.
- **`src/data/complete-adventurer/feats.ts`** — 52 feats from
  Table 3-2 (pp. 104–105; descriptions pp. 105–119): 44 general
  feats plus the table's 3 bardic music feats (Chant of
  Fortitude, Ironskin Chant, Lyric Spell) and 6 wild feats
  (Blindsense, Climb Like an Ape, Cougar's Vision, Hawk's
  Vision, Savage Grapple, Scent) — the app has no bardic/wild
  feat categories, so those carry category "general" with the
  grouping named in `special`, following the house pattern.
  Feats the table marks as fighter bonus feats carry category
  "combat" (Brutal Throw, Power Throw, Combat Intuition, Dual
  Strike, Improved Diversion, Oversized Two-Weapon Fighting).
- **`src/data/index.ts`** — both packs merged into
  ALL_PRESTIGE_CLASSES (+62) and ALL_FEATS (+133) and
  re-exported; barrel header comment extended for Batch 2.

## Base classes — all six already existed; verified, not duplicated

Both books' base classes were already present in the recovered
core data (`src/data/core/new-base-classes.ts`, sourced from the
crystalkeep fan index with progressions capped at 10 rows per
app convention), so none were re-added. Each was verified
against its printed class block:

- **Ninja (CAdv p. 7) — verified match:** d6, 6+Int, Ref good
  only, three-quarter BAB; all 20 printed class skills match.
- **Samurai (CW pp. 8–10) — fully verified:** d10, 2+Int, full
  BAB, Fort good only; skills and specials match the printed
  Table 1-3 and text.
- **Swashbuckler (CW pp. 11–12) — fully verified:** d10, 4+Int,
  full BAB, Fort good only; all 12 skills and specials match.
- **Hexblade (CW p. 5) — TWO discrepancies in the recovered
  record:** (1) the record gives a good Fortitude save, but the
  book prints Fortitude poor (Will good only); (2) the record's
  `source` wrongly cites "Complete Arcane, p. 5" — the Hexblade
  is Complete Warrior p. 5. Skills, d10, 2+Int, and the
  any-nongood alignment match.
- **Scout (CAdv p. 11) — skill-list discrepancy:** the book's
  20 class skills include Speak Language and Survival; the
  recovered record instead lists Disable Device and Spellcraft
  and lacks those two. Hit die (d8), 8+Int, and Ref good match.
- **Spellthief (CAdv p. 15) — skill-list discrepancy:** the
  book's 22 class skills include Appraise, Concentration, Speak
  Language, and Spellcraft; the recovered record lacks those
  four and instead lists Sense Motive. Hit die (d6), 6+Int, and
  Will good match.

Per the batch constraints the recovered files were NOT
modified; the three discrepancy reports above are the record of
what differs. Fixing them is a separate, deliberate edit to the
recovered data whenever Shaun wants it.

## Judgment calls and deliberate omissions (plain notes)

- **Printed quirks kept as printed** (each noted in its
  record): Fochlucan Lyrist has full BAB exactly as its Table
  2-10 prints (a known book quirk) with dual +1 arcane/+1 divine
  casting every level; Spymaster is a 7-level class, as its
  Table 2-21 ends at 7th (confirmed on the page image); Exemplar
  is three-quarter BAB and its class skills are literally all
  skills, so the record lists every SRD skill with a note;
  Master of the Unseen Hand has a full BAB progression as
  printed despite its d4 Hit Die; Dervish's Fortitude column is
  poor, verified from the table image after OCR ambiguity.
- **Animal Lord id:** the CAdv prestige class is
  `animal-lord-cadv`, distinct from the unrelated Sorcery &
  Steam base class `animal-lord`. CAdv's two wild feats whose
  names collide with SRD abilities are `blindsense-wild` and
  `scent-wild`.
- **Duplicates skipped (4):** CAdv's Goad (already in the
  dataset as Races of Stone's `goad-ros`) and Improved Flight
  (already present from Races of the Wild); CW's Flick of the
  Wrist (already present from Races of the Wild) and Improved
  Weapon Familiarity (already present from Races of Stone).
- **"Knowledge" with no specialty:** Justiciar, Stonelord, and
  Tattooed Monk print their Knowledge class skill with no
  specialty specified; the records enter it as printed, with a
  note. Spellsword prints the same bare "Knowledge"; its record
  enters Knowledge (arcana), matching the class's own
  requirement, with a note.
- **Invisible Blade** lists the 3.0-era skill Innuendo among its
  class skills, exactly as printed, and — also as printed — has
  no base attack bonus requirement (only skill ranks, feats,
  and the rite-of-passage combat). Both are noted in the record.
- **Setting-flavored classes:** Purple Dragon Knight (Cormyr)
  and Thayan Knight (Red Wizards of Thay) are Forgotten Realms
  classes that Complete Warrior itself reprints as part of the
  book; following the batch's sorting rule (official supplement
  → "core") they carry ruleset "core", with their setting ties
  kept verbatim in their prerequisites.
- **Skills: none new in either book.** Complete Adventurer adds
  new uses for existing skills only; Complete Warrior's Chapter
  3 covers feat selection and skill uses only. No templates or
  races appear in either book.
- **Out of scope, deliberately omitted:** both books' spells,
  the equipment and magic-item chapters of both books, and
  Complete Adventurer's organizations chapter and Complete
  Warrior's Chapter 4 warfare material (missions, epic
  progressions, exotic-weapon equipment). The equipment/magic
  chapters are future equipment-shelf material for a later
  batch. Complete Warrior's Chapter 1 variant paladin/ranger
  are variants of core classes, not new base classes.
- **Extraction method:** the Complete Adventurer PDF has a text
  layer but is scanned as mixed single pages and two-page
  spreads; every class was verified against its own printed
  block rather than trusting the raw flow. The Complete Warrior
  PDF is scanned images only (no text layer), so it was read by
  OCR (RapidOCR) at 200 dpi with progressions taken from the
  printed tables; every ambiguous cell (save columns, skill
  points, short tables) was settled against the page image.

## Verification

- `npm run check` (tsc): 0 errors. `npm run build`: succeeds.
- `vite preview` on port 5000: HTTP 200, title "Blendcrafter —
  Template Blending Character Builder for d20 3.5 SRD"; server
  stopped afterward.
- Resolver smoke test (esbuild bundle of a temporary script
  against the real modules, script deleted after the run): all
  assertions passed. Rogue 5 / Daggerspell Mage 5 (Complete
  Adventurer): zero validation errors, BAB 6, Fort 3 / Ref 10 /
  Will 5, Hide total 10 (8 ranks + Dex). Fighter 6 / Dervish 4
  (Complete Warrior): zero validation errors, BAB 10, Fort 7 /
  Ref 8 / Will 6, Tumble total 9 (7 ranks + Dex).
- Id-collision check: ALL_PRESTIGE_CLASSES, ALL_FEATS,
  ALL_CLASSES, and ALL_SKILLS ids are unique across the whole
  dataset, and all 62 new prestige classes and 133 new feats are
  present exactly once in their aggregates. Dataset totals after
  Batch 2: ALL_PRESTIGE_CLASSES 116, ALL_FEATS 420.
- NOT pushed to GitHub and NOT deployed in this pass — the
  parent agent verifies, pushes (which auto-deploys via the
  Pages workflow), and reports.

# Addendum 2026-10-27 — Batch 3 of the "everything" program: Complete Arcane + Complete Divine + Book of Exalted Deeds

Batch 3 of the program Shaun set on 2026-10-27 ("add all the
different books that were in the original... bring in everything
and sort it right"). Sources are Shaun's own PDFs in his durrum1
Dropbox: `/A POC PC related/5.Splat/Complete sereies/D&D 3.5 -
Complete Arcane.pdf` (6.4 MB) and `D&D 3.5 - Complete Divine.pdf`
(49.6 MB) — the folder's spelling is the library's own — and
`/A POC PC related/5.Splat/Book of Exalted Deeds.pdf` (5.1 MB).
All three books are generic official D&D 3.5 supplements, so
every record carries ruleset "core". Every record cites book +
printed page in `source` and the Dropbox path in `sourceUrl`.
Short mechanical summaries in our own words throughout; no book
text reproduced beyond short mechanical facts. NOT pushed or
deployed in this pass — the parent agent pushes.

## What was added (all NEW files)

- **`src/data/complete-arcane/classes.ts`** — 1 base class:
  Wu Jen (see the base-class section below).
- **`src/data/complete-arcane/prestige-classes.ts`** — 19
  prestige classes, every one in the book's Chapter 2, with
  progressions read from the printed Tables 2-2…2-22: Acolyte
  of the Skin, Alienist, Argent Savant, Blood Magus, Effigy
  Master, Elemental Savant, Enlightened Fist, Fatespinner,
  Geometer, Green Star Adept, Initiate of the Sevenfold Veil,
  Mage of the Arcane Order, Master Transmogrifist, Mindbender,
  Seeker of the Song, Sublime Chord, Suel Arcanamach, Wayfarer
  Guide, Wild Mage.
- **`src/data/complete-arcane/feats.ts`** — 64 feats, all of
  Table 3-1 (pp. 74-75): Arcane Defense, Arcane Mastery, Arcane
  Preparation, Battle Caster, Communicator, Double Wand
  Wielder, Extra Edge, Extra Invocation, Extra Slot, Extra
  Spell, Extra Spell Secret, Guardian Spirit, Heighten
  Spell-Like Ability, Innate Spell, Insightful, Mage Slayer,
  Maximize Spell-Like Ability, Necropolis Born, Night Haunt,
  Obtain Familiar, Pierce Magical Concealment, Pierce Magical
  Protection, Practiced Spellcaster, Ranged Spell
  Specialization, Reckless Wand Wielder, Soul of the North,
  Spell Hand, Touch Spell Specialization, Wandstrike, Draconic
  Breath, Draconic Claw, Draconic Flight, Draconic Heritage,
  Draconic Legacy, Draconic Power, Draconic Presence, Draconic
  Resistance, Draconic Skin, Craft Contingent Spell (item
  creation), and the metamagic feats Black Lore of Moil, Born
  of the Three Thunders, Chain Spell, Cooperative Spell, Delay
  Spell, Energy Admixture, Energy Substitution, Explosive
  Spell, Fortify Spell, Lord of the Uttercold, Nonlethal
  Substitution, Persistent Spell, Repeat Spell, Sanctum Spell,
  Sculpt Spell, Split Ray, Sudden Empower, Sudden Extend,
  Sudden Maximize, Sudden Quicken, Sudden Silent, Sudden Still,
  Sudden Widen, Transdimensional Spell, Twin Spell.
- **`src/data/complete-divine/classes.ts`** — 1 base class:
  Shugenja (see below).
- **`src/data/complete-divine/prestige-classes.ts`** — 24
  prestige classes, every one in the book's Chapter 2, with
  progressions read from the printed Tables 2-2…2-25: Black
  Flame Zealot, Blighter, Church Inquisitor, Consecrated
  Harrier, Contemplative, Divine Crusader, Divine Oracle,
  Entropomancer, Evangelist (5 levels), Geomancer, Holy
  Liberator, Hospitaler, Pious Templar, Radiant Servant of
  Pelor, Rainbow Servant, Sacred Exorcist, Sacred Fist, Seeker
  of the Misty Isle, Shining Blade of Heironeous, Stormlord,
  Temple Raider of Olidammara, Ur-Priest, Void Disciple,
  Warpriest.
- **`src/data/complete-divine/feats.ts`** — 37 feats from
  Table 3-1 (p. 78): Arcane Disciple, Augment Healing, Domain
  Focus, Empower Turning, Improved Smiting, Quicken Turning,
  Spell Focus (Chaos, Evil, Good, Law), Spontaneous Healer,
  Spontaneous Summoner, Spontaneous Wounder; the divine feats
  Disciple of the Sun, Divine Metamagic, Divine Spell Power,
  Glorious Weapons, Domain Spontaneity, Elemental Smiting,
  Elemental Healing, Profane Boost, Sacred Boost, Sacred
  Healing, True Believer; the item-creation feat Sanctify
  Relic; the metamagic feats Corrupt Spell, Rapid Spell, Reach
  Spell; and the wild feats Boar's Ferocity, Cheetah's Speed,
  Eagle's Wings, Elephant's Hide, Extra Wild Shape, Fast Wild
  Shape, Grizzly's Claws, Lion's Pounce, Oaken Resilience,
  Serpent's Venom, Swim Like a Fish, Wolverine's Rage. Divine
  and wild feats are recorded with category "general" and their
  power source noted in `special` (house pattern for grouped
  feats).
- **`src/data/book-of-exalted-deeds/prestige-classes.ts`** — 22
  prestige classes, every one in the book's Chapter 5, with
  progressions read from the printed Tables 5-1…5-23: Anointed
  Knight, Apostle of Peace, Beloved of Valarian, Celestial
  Mystic, Champion of Gwynharwyf, Defender of Sealtiel,
  Emissary of Barachiel, Exalted Arcanist (5 levels), Fist of
  Raziel, Initiate of Pistis Sophia, Lion of Talisid, Prophet
  of Erathaol, Risen Martyr, Sentinel of Bharrai, Skylord,
  Slayer of Domiel, Stalker of Kharash, Swanmay, Sword of
  Righteousness (3 levels), Troubadour of Stars, Vassal of
  Bahamut, Wonderworker (3 levels).
- **`src/data/book-of-exalted-deeds/feats.ts`** — 51 feats from
  Table 4-1 (pp. 40-41): Ancestral Relic, Consecrate Spell-Like
  Ability, Purify Spell-Like Ability, Resounding Blow, Spell
  Focus (Good), Subduing Strike; the exalted feats Animal
  Friend, Celestial Familiar, Celestial Mount, Consecrate Spell
  Trigger, Exalted Companion, Exalted Smite, Exalted Spell
  Resistance, Exalted Turning, Exalted Wild Shape, Favored of
  the Companions, Fist of the Heavens, Gift of Faith, Gift of
  Grace, Hands of a Healer, Holy Subdual, Intuitive Attack,
  Knight of Stars, Nemesis, Nimbus of Light, Holy Radiance,
  Stigmata, Nymph's Kiss, Purify Spell Trigger, Quell the
  Profane, Ranged Smite Evil, Righteous Wrath, Sacred Strike,
  Sacred Vow, Vow of Abstinence, Vow of Chastity, Vow of
  Nonviolence, Vow of Peace, Vow of Obedience, Vow of Poverty,
  Vow of Purity, Sanctify Ki Strike, Holy Ki Strike, Sanctify
  Martial Strike, Sanctify Natural Attack, Sanctify Weapon,
  Servant of the Heavens, Touch of Golden Ice, Words of
  Creation; and the metamagic feats Consecrate Spell and
  Purify Spell. Exalted feats are recorded with category
  "general" and the exalted/good-alignment note in `special`
  (house pattern).
- **`src/data/book-of-exalted-deeds/templates.ts`** — 2
  templates from Chapter 8: Saint (acquired, CR +2, LA +2) and
  Sanctified Creature (acquired, CR +1, LA +2).
- **`src/data/index.ts`** (modified, as in every batch): the
  nine new collections are imported, merged into ALL_CLASSES,
  ALL_PRESTIGE_CLASSES, ALL_TEMPLATES, and ALL_FEATS (deduped
  by id, first pack wins), and re-exported; barrel header
  comment extended for Batch 3.

## Base classes — four already existed; verified, not duplicated; two were missing and are added

- **Warlock (CA p. 5) — verified with ONE discrepancy:** the
  printed progression (Table 1-1, p. 8) matches the recovered
  record exactly — d6, 2+Int, three-quarter BAB, Will good
  only — but the book's class skills are 13 and include
  Knowledge (religion); the recovered record lists 12 skills
  and omits Knowledge (religion).
- **Warmage (CA p. 10) — fully verified:** Table 1-2 (p. 11)
  rows match; d6, 2+Int, half BAB, Will good; the book's seven
  class skills match the recovered record exactly.
- **Wu Jen (CA pp. 14-16) — was NOT present anywhere in the
  dataset; ADDED** in `complete-arcane/classes.ts`: d4, 2+Int,
  half BAB, Will good only, progression from printed Table 1-3,
  class skills Concentration / Craft / Knowledge (all) /
  Profession / Spellcraft.
- **Favored Soul (CD p. 6) — verified with ONE discrepancy:**
  the printed Table 1-1 progression matches the recovered
  record exactly (three-quarter BAB, all three saves good),
  as do d8 and 2+Int — but the book lists 9 class skills; the
  recovered record lists 10, including Knowledge (religion),
  which the book does not list.
- **Spirit Shaman (CD p. 14) — verified with ONE discrepancy:**
  the printed Table 1-5 progression matches the recovered
  record exactly (three-quarter BAB, Fort and Will good), as
  do d8 and 4+Int — but the book lists 16 class skills; the
  recovered record lists 17, including Knowledge (arcana),
  which the book does not list.
- **Shugenja (CD pp. 10-13) — was NOT present anywhere in the
  dataset; ADDED** in `complete-divine/classes.ts`: d6, 4+Int,
  half BAB, Will good only (Fort and Ref poor), progression
  from printed Table 1-3, class skills Concentration / Craft /
  Diplomacy / Heal / Knowledge (all skills, taken
  individually) / Profession / Spellcraft; Charisma-based
  spontaneous divine casting with element focus and sense
  elements.

Per the batch constraints the recovered files were NOT
modified; the three discrepancy reports above are the record
of what differs. Fixing them is a separate, deliberate edit
to the recovered data whenever Shaun wants it.

## Judgment calls and deliberate omissions (plain notes)

- **Duplicates skipped (dedupe is by id, first pack wins; the
  skips below were removed at the file level so nothing is
  silently shadowed):** Book of Exalted Deeds' Nonlethal
  Substitution duplicates the Complete Arcane record.
  Complete Divine's Consecrate Spell duplicates the Book of
  Exalted Deeds record. Complete Divine's Practiced
  Spellcaster and Transdimensional Spell are also printed in
  Complete Arcane's Table 3-1 and are kept from that book.
- **Complete Arcane templates — none added:** the book's
  Chapter 6 templates (Effigy, Pseudonatural, Spellstitched)
  are monster templates with no level adjustment for
  characters (LA — or CR-only), so none is playable.
- **Book of Exalted Deeds' Sacred Watcher template —
  deliberately omitted:** it is playable on paper (CR +2,
  LA +5, pp. 183-184), but it changes the creature's type to
  "deathless," which the app's creature-type list cannot
  represent; it is left out rather than mis-modeled.
- **Printed quirks kept as printed** (each noted in its
  record): Complete Arcane's Blood Magus prints Fortitude
  good / Will poor, Mindbender prints Fortitude and Will
  good, Suel Arcanamach prints Fortitude poor with Reflex and
  Will good, and Wild Mage prints Reflex as its only good
  save. Complete Divine's Rainbow Servant table grants +1
  arcane spellcasting level only at levels 2, 3, 5, 6, 8, and
  9 (the well-known table-versus-text conflict; the table is
  kept). Sacred Fist gains no spellcasting level at 4th and
  8th, and Seeker of the Misty Isle none at 5th and 10th, as
  their tables print. The book's own list of tables prints
  the Warpriest table as a second "Table 2-24."
- **Void Disciple is a thirteen-level class in the book;**
  levels 1-10 are recorded per this dataset's level-cap
  convention, with the remaining levels noted in the record.
- **Risen Martyr's printed table begins with a level-0 row**
  (spiritual body); levels 1-10 are modeled and the level-0
  step is described in the record.
- **3.0 holdovers in printed skill lists:** Sentinel of
  Bharrai's list prints "Alchemy," exclusive-skill tags, and
  "Read/Write Language" — mapped to 3.5 skills (Craft
  (alchemy); Read/Write Language folded into Speak Language)
  and noted in the record. Geomancer's list prints Scry, a
  skill removed in 3.5; it is kept as printed and noted.
- **New skills: none in any of the three books** — none of
  them introduces a skill that fits the app's skill list.
  Book of Exalted Deeds' Words of Creation is a feat, not a
  skill, and is recorded as one.
- **Out of scope, deliberately omitted:** all three books'
  spells (including BoED sanctified spells), the equipment
  and magic-item chapters of all three books (including
  Complete Divine's relics and staffs), monsters (including
  BoED Chapter 8 creatures beyond the two playable
  templates), organizations, and variant rules (Complete
  Divine's faith feats and faith points, variant turning
  rules, and epic material; BoED's ravages and afflictions
  are referenced by feats but not modeled as systems). The
  equipment/magic chapters are future equipment-shelf
  material for a later batch.
- **Extraction method:** the Complete Arcane and Book of
  Exalted Deeds PDFs have text layers with PDF page = printed
  page, verified against the indd/qxd folio stamps. The
  Complete Divine PDF is scanned images only (no text layer),
  so all 204 pages were rendered at 200 dpi and read by OCR
  (RapidOCR); progressions were taken from the printed
  tables, and ambiguous cells (save columns, skill points,
  short tables such as the Evangelist's five levels and the
  Void Disciple's thirteen) were settled against the page
  images.

## Verification

- `npm run check` (tsc): 0 errors. `npm run build`: succeeds.
- `vite preview`: HTTP 200; server stopped afterward.
- Resolver smoke test (esbuild bundle of a temporary script
  against the real modules, script deleted after the run):
  three builds, one per book, all with zero validation errors
  and zero warnings. Wu Jen 3 / Mindbender 2 (Complete
  Arcane): BAB 2, ECL 5. Shugenja 4 / Sacred Exorcist 2
  (Complete Divine): BAB 3, ECL 6. Fighter 6 / Fist of Raziel
  2 with the Saint template (Book of Exalted Deeds): BAB 8,
  ECL 10, type Outsider with the Native subtype applied by
  the template's patches.
- Id-collision check: before this batch the aggregates held
  ALL_CLASSES 34, ALL_PRESTIGE_CLASSES 116, ALL_TEMPLATES 5,
  ALL_FEATS 420; a pre-merge scan found zero collisions
  between the new packs' ids and the existing aggregates and
  zero duplicates within any new pack. After the merge:
  ALL_CLASSES 36 (+2), ALL_PRESTIGE_CLASSES 181 (+65),
  ALL_TEMPLATES 7 (+2), ALL_FEATS 572 (+152) — every new
  record present exactly once.
- NOT pushed to GitHub and NOT deployed in this pass — the
  parent agent verifies, pushes (which auto-deploys via the
  Pages workflow), and reports.

# Addendum 2026-10-27 — Batch 4 of the "everything" program: Frostburn + Sandstorm + Miniatures Handbook

Batch 4 of the program Shaun set on 2026-10-27 ("add all the
different books that were in the original... bring in everything
and sort it right"). Sources are Shaun's own PDFs in his durrum1
Dropbox: `/A POC PC related/5.Splat/Frostburn.pdf` (7.8 MB),
`/A POC PC related/5.Splat/Sandstorm.pdf` (24.7 MB), and
`/A POC DM related/Desktop/Sourcebooks/Miniatures
Handbook.pdf` (7.2 MB). All three books are generic official
D&D 3.5 supplements, so every record carries ruleset "core".
Every record cites book + printed page in `source` and the
Dropbox path in `sourceUrl`. Short mechanical summaries in our
own words throughout; no book text reproduced beyond short
mechanical facts. NOT pushed or deployed in this pass — the
parent agent pushes.

## What was added (all NEW files)

- **`src/data/frostburn/races.ts`** — 5 races: Neanderthal,
  Uldra (Chapter 2), and Frost Folk, Glacier Dwarf, and Snow
  Goblin (Chapter 6 "as characters" sections, which print
  complete standalone trait lists).
- **`src/data/frostburn/prestige-classes.ts`** — 10 prestige
  classes, every one in the book's Chapter 3, with
  progressions read from the printed Tables 3–2…3–11: Cloud
  Anchorite, Cryokineticist, Disciple of Thrym, Frost Mage,
  Frostrager, Knight of the Iron Glacier, Primeval, Rimefire
  Witch, Stormsinger, Winterhaunt of Iborighu.
- **`src/data/frostburn/feats.ts`** — 32 feats, all of
  Table 2–7 (p. 46): Altitude Adaptation, Arctic Priest,
  Beckon the Frozen, Chosen of Iborighu, Cold Endurance,
  Cold Focus, Cold Spell Specialization, Craft Skull
  Talisman, Faith in the Frost, Frostfell Prodigy, Frozen
  Berserker, Frozen Magic, Frozen Wild Shape, Greater Cold
  Focus, Icy Calling, Ice Harmonics, Improved Cold Endurance,
  Improved Frosty Touch, Mark of Hleid, Mountaineer, Piercing
  Cold, Primeval Wild Shape, Primitive Caster, Sea Legs,
  Smite Fiery Foe, Snowcasting, Snowrunner, Snowflake
  Wardance, Storm Magic, Sugliin Mastery, Winter's Champion,
  Winter's Mount.
- **`src/data/sandstorm/races.ts`** — 2 races: Asherati,
  Bhuka (Chapter 2).
- **`src/data/sandstorm/prestige-classes.ts`** — 6 prestige
  classes, every one in the book's Chapter 3, with
  progressions read from the printed Tables 3–2…3–7: Ashworm
  Dragoon, Lord of Tides, Sand Shaper, Scion of Tem-Et-Nu,
  Scorpion Heritor, Walker in the Waste.
- **`src/data/sandstorm/feats.ts`** — 24 feats, all of
  Chapter 2 (printed pp. 49–53): Blazing Berserker, Blessed
  by Tem-Et-Nu, Drift Magic, Eagle's Fury, Fiery Spell, Heat
  Endurance, Improved Heat Endurance, Judged by Aurifar,
  Light of Aurifar, Pharaoh's Fist, Priest of the Waste,
  Rattlesnake Strike, Sand Camouflage, Sand Dancer, Sand
  Snare, Sand Spinner, Sandskimmer, Scorpion's Grasp,
  Scorpion's Instincts, Scorpion's Resolve, Scorpion's Sense,
  Searing Spell, Serpent Fang, Touchstone.
- **`src/data/sandstorm/templates.ts`** — 3 templates:
  Half-Janni (CR +1, LA +3), Dry Lich (CR +3, LA +5),
  Dustform Creature (CR +2, LA +2), following the
  Book of Exalted Deeds / core template record pattern
  (top-level ability modifiers, structural patches, natural
  armor as an "improve" modifier).
- **`src/data/miniatures-handbook/classes.ts`** — 1 base
  class: Healer (see the base-class section below).
- **`src/data/miniatures-handbook/prestige-classes.ts`** —
  7 prestige classes, every one in the book's Chapter 1, with
  progressions read from the printed Tables 1–7…1–13: Bonded
  Summoner, Dragon Samurai, Havoc Mage, Skullclan Hunter,
  Tactical Soldier, War Hulk, Warchief.
- **`src/data/miniatures-handbook/feats.ts`** — 20 feats
  (see the duplicates note below): Battlefield Inspiration,
  Deft Opportunist, Distracting Attack, Double Hit, Energy
  Affinity, Extra Domain Spell, Foe Specialist, Greater
  Powerful Charge, Hurling Charge, Improved Shieldmate,
  Martial Throw, Mounted Casting, Powerful Charge, Pushback,
  Reckless Charge, Second Wind, Shieldmate, Sidestep,
  Sudden Energy Affinity.
- **`src/data/index.ts`** (modified, as permitted) — barrel
  header note plus imports, ALL_* merges, and re-exports for
  all ten new pack files.

## Base classes — three already existed; verified against the Miniatures Handbook originals; one was missing and is added

Miniatures Handbook is the original printing of Favored Soul
(p. 5), Healer (p. 8), Marshal (p. 11), and Warmage (p. 14);
Frostburn and Sandstorm have no base classes. The recovered
records (fan-index sourced, in `src/data/core/new-base-classes.ts`)
were compared field by field against the printed tables.
Recovered records were NOT modified.

- **Favored Soul — record MATCHES the Miniatures Handbook
  original** (Table 1–2, p. 6): d8, 2 + Int, three-quarter
  BAB, all three saves good (rows identical for levels 1–10),
  and the same nine class skills (Concentration, Craft,
  Diplomacy, Heal, Jump, Knowledge (arcana), Profession,
  Sense Motive, Spellcraft). The record cites the Complete
  Divine reprint (p. 6), whose content is the same. No
  discrepancy.
- **Warmage — record MATCHES the Miniatures Handbook
  original** (Table 1–6, p. 15): d6, 2 + Int, half BAB, Will
  good only, and the same seven class skills (Concentration,
  Craft, Intimidate, Knowledge (arcana), Knowledge (history),
  Profession, Spellcraft). The record cites the Complete
  Arcane reprint (p. 10). No discrepancy.
- **Marshal — record DISAGREES with the book in two ways**
  (Table 1–5, p. 12; class text p. 11). Reported, not fixed:
  1. **Base attack bonus.** The record has
     `babProgression: "full"` with rows +1…+10. The printed
     table is three-quarter: +0, +1, +2, +3, +3, +4, +5,
     +6/+1, +6/+1, +7/+2 for levels 1–10.
  2. **Class skills.** The book lists thirteen: Bluff,
     Diplomacy, Handle Animal, Intimidate, Knowledge (all),
     Listen, Perform, Ride, Sense Motive, Speak Language,
     Spot, Survival, Swim. The record lists twelve: it
     includes **Profession**, which the book does not list,
     and omits **Speak Language** and **Survival**, which
     the book does list.
  The record's d8, 4 + Int skill points, and Fort/Will good
  saves do match the book.
- **Healer — NO recovered record exists.** This batch's
  premise said all four Miniatures Handbook classes had
  recovered records; that is wrong for the Healer (a search
  of `src/data/` finds no Healer record anywhere). Following
  the Batch 3 precedent for the missing Wu Jen and Shugenja,
  the Healer is ADDED as a new base-class record in
  `src/data/miniatures-handbook/classes.ts`: d8, 4 + Int,
  half BAB, Fortitude and Will good, eleven class skills,
  progression rows from Table 1–4 (p. 9). Printed quirk kept
  and noted in the record: her spell save DCs are
  Charisma-based while her casting is Wisdom-based.

## Judgment calls and deliberate omissions (plain notes)

- **Miniatures Handbook feat duplicates — 12 of 32 skipped.**
  The Complete books reprinted a dozen of this book's feats,
  and the earlier batches' records stand (dedupe is by id,
  first pack wins, so these are recorded as skips rather than
  shadow records): Goad (= Races of Stone `goad-ros`),
  Mage Slayer, Sudden Empower, Sudden Extend, Sudden
  Maximize, Sudden Quicken, Sudden Silent, Sudden Still,
  Sudden Widen (= Complete Arcane), Danger Sense, Deft
  Opportunist (= Complete Adventurer), Dash (= Complete
  Warrior). Sudden Energy Affinity was NOT reprinted by
  Complete Arcane and is included. The feat-pack header in
  `miniatures-handbook/feats.ts` lists all twelve.
- **Sandstorm's Light of Aurifar / Pharaoh's Fist heading
  swap.** The book prints the stunning-fist text under the
  "Light of Aurifar" heading (its own Special line names
  Pharaoh's Fist) and the turn-undead immolation text
  without its heading. The records follow each feat's
  mechanics and internal naming, and the swap is noted in
  the feat-pack header.
- **Frostburn variant races not converted.** The tundra
  halfling (p. 36) is printed only as a delta on the PHB
  halfling ("same racial traits ... but with the following
  exceptions"), not a standalone trait list, so it is not
  converted; glacier dwarf and snow goblin ARE converted
  because their "as characters" sections print complete
  trait lists. Snow goblin's +1 natural armor is taken from
  its stat block (the trait list does not restate it) and is
  flagged in the record. Frostburn's Chapter 2 treatments of
  the PHB races describe the core races and are not
  duplicated; the Catfolk in Miniatures Handbook Ch. 3 is
  already in the dataset from Races of the Wild and is not
  duplicated.
- **Crucian (Miniatures Handbook, p. 59) not converted.**
  The entry is a monster stat block with Level Adjustment
  +2 and 3 racial Hit Dice but no "Crucians as Characters"
  trait list; deriving racial traits would mean inventing
  values, so it is omitted and noted here.
- **Frostfell Ghost (Frostburn, pp. 132–133) not converted
  as a separate template.** "Creating a Frostfell Ghost" is
  the Monster Manual ghost template (already in the core
  data) plus optional frostfell powers (chill ray, coldfire
  radiance, frigid touch; optional cold immunity or spell
  resistance); the sample's LA +5 equals the standard
  ghost's. Ice Beast (LA "—") is not playable. Sandstorm's
  remaining Chapter 6 "as characters" entries are monsters
  and cohorts, not templates.
- **War Hulk's zero BAB.** Table 1–12 prints +0 base attack
  bonus at every level (the class trades BAB for +2 Strength
  per level). The record carries the printed rows; the
  `babProgression` label is nominal ("half", the closest of
  the app's three kinds) and the record's feature text says
  so plainly.
- **Printed quirks kept as printed and noted in the
  records:** Cloud Anchorite's requirements list "Improved
  Unarmed Combat" (the feat is Improved Unarmed Strike);
  Knight of the Iron Glacier's skill list prints "Craft
  (Wis)"; Cryokineticist's requirement names the power
  "energy emanation" (the Expanded Psionics Handbook list
  calls it energy burst); Frostburn's fighter text misprints
  Sugliin Mastery as "Sugliin Master" (the feat's own name
  is used). Knowledge (psionics) and Psicraft in the
  Cryokineticist's skill list are Expanded Psionics Handbook
  skill names kept as printed strings, as in earlier packs.
- **New skills: none in any of the three books** — none of
  them introduces a skill that fits the app's skill list.
- **Out of scope, deliberately omitted:** all three books'
  spells, equipment and magic-item chapters, monsters beyond
  the playable race/template entries above, environmental
  and hazard rules (Frostburn's frostfell hazards, Sandstorm's
  waste hazards and touchstone sites as a system — the
  Touchstone feat itself is included), and Miniatures
  Handbook's skirmish and mass-battle rules (Chapters 2, 5,
  and 6). The equipment/magic chapters are future
  equipment-shelf material for a later batch.
- **Extraction method:** Frostburn and Miniatures Handbook
  have full text layers (Frostburn PDF page = printed page;
  Miniatures Handbook PDF page = printed page, verified
  against the qxd folio stamps). Sandstorm's printed page is
  the PDF page minus one (indd stamps), and its PDF pages
  138–165 (printed 137–164, most of Chapter 6) are
  image-only: the Dry Lich and Dustform Creature template
  pages were rendered at 200 dpi and read by OCR (RapidOCR),
  with the template values (ability modifiers, CR, LA)
  checked against the page images.

## Verification

- `npm run check` (tsc): 0 errors. `npm run build`: succeeds.
- `vite preview`: HTTP 200; server stopped afterward.
- Resolver smoke test (esbuild bundle of a temporary script
  against the real modules, script deleted after the run):
  four builds, one per book plus one extra for the
  templates, all with zero validation errors and zero
  warnings. Uldra Wizard 5 / Frost Mage 3 (Frostburn): BAB 3,
  ECL 9. Bhuka Druid 6 / Lord of Tides 4 (Sandstorm): BAB 7,
  ECL 10. Asherati Cleric 8 / Walker in the Waste 2 with the
  Dry Lich template (Sandstorm): BAB 7, ECL 15, type Undead
  applied by the template's patch. Human Healer 6 / Tactical
  Soldier 2 (Miniatures Handbook): BAB 5, ECL 8.
- Id-collision check: before this batch the aggregates held
  ALL_RACES 30, ALL_CLASSES 36, ALL_PRESTIGE_CLASSES 181,
  ALL_TEMPLATES 7, ALL_FEATS 572, ALL_SKILLS 55; a pre-merge
  scan of the new packs' ids found no collisions except the
  twelve Miniatures Handbook duplicate feats documented
  above, which were removed from the pack before merging.
  After the merge: ALL_RACES 37 (+7), ALL_CLASSES 37 (+1),
  ALL_PRESTIGE_CLASSES 204 (+23), ALL_TEMPLATES 10 (+3),
  ALL_FEATS 648 (+76), ALL_SKILLS 55 (+0) — every new record
  present exactly once.
- NOT pushed to GitHub and NOT deployed in this pass — the
  parent agent verifies, pushes (which auto-deploys via the
  Pages workflow), and reports.


# Addendum 2026-10-27 — Batch 5 of the "everything" program: Player's Handbook II + Races of the Dragon + Races of Eberron (+ Fiendish Codex I templates check)

Batch 5 of the program Shaun set on 2026-10-27 ("add all the
books"), built the same day. Three new packs —
`src/data/players-handbook-ii/`, `src/data/races-of-the-dragon/`,
`src/data/races-of-eberron/` — merged into `src/data/index.ts`
behind the existing id dedupe. Player's Handbook II and Races
of the Dragon records carry ruleset "core" (both are core
supplements); Races of Eberron records carry ruleset "eberron"
(the book belongs under the Eberron toggle, like the Eberron
Campaign Setting pack). Fiendish Codex I was checked for a
playable template and has none, so no `fiendish-codex-i/` pack
exists (details below). Sources are the copies in Shaun's
durrum1 Dropbox library:
`/A POC PC related/4.Core books/Player's Handbook II.pdf`,
`/A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf`,
`/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf`,
and `/A POC PC related/4.core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf`.
Printed page numbers are used throughout: Races of the Dragon
printed page = PDF page; Races of Eberron and Player's Handbook
II printed page = PDF page − 1 (both verified against the
folios). The Player's Handbook II PDF is an image-only scan —
all 224 pages were rendered and read directly from the page
images (RapidOCR output was kept only as a cross-check).

## Player's Handbook II (`src/data/players-handbook-ii/feats.ts`)

**105 feats, no classes, no prestige classes.** The book
contains NO prestige classes — confirmed from its table of
contents (Chapter 1 is the four base classes, Chapter 2 is
expanded options for existing classes, and no prestige class
appears anywhere in the book). Its four base classes already
exist in the recovered core data, so — following the Wu Jen /
Shugenja / Healer precedent in reverse — no `classes.ts` was
created; the classes were instead verified against the printed
tables (below).

The 105 feats are all of Chapter 3: the 69 general feats of
Table 3–1 (pp. 72–73) — Acrobatic Strike, Arcane Flourish,
Arcane Accompaniment, Arcane Thesis, Arcane Toughness, Arcane
Consumption, Armor Specialization, Battle Dancer, Bonded
Familiar, Bounding Assault, Rapid Blitz, Brutal Strike, Combat
Acrobat, Combat Familiar, Lurking Familiar, Combat Tactician,
Cometary Collision, Companion Spellbond, Crossbow Sniper,
Cunning Evasion, Dampen Spell, Deadeye Shot, Defensive Sweep,
Elven Spell Lore, Fade into Violence, Fiery Fist, Fiery Ki
Defense, Ki Blast, Flay, Grenadier, Hindering Opportunist,
Stalwart Defense, Indomitable Soul, Intimidating Strike,
Keen-Eared Scout, Leap of the Heavens, Lunging Strike, Mad
Foam Rager, Master Manipulator, Melee Evasion, Melee Weapon
Mastery, Crushing Strike, Driving Attack, Slashing Flurry,
Weapon Supremacy, Overwhelming Assault, Penetrating Shot,
Ranged Weapon Mastery, Robilar's Gambit, Shield Specialization,
Active Shield Defense, Agile Shield Fighter, Shield Sling,
Shield Ward, Short Haft, Spectral Skirmisher, Spell-Linked
Familiar, Steadfast Determination, Telling Blow, Trophy
Collector, Tumbling Feint, Two-Weapon Pounce, Two-Weapon Rend,
Vatic Gaze, Versatile Unarmed Strike, Vexing Flanker, Adaptable
Flanker, Wanderer's Diplomacy, Water Splitting Stone — plus
Ritual Blessing and Ritual Blood Bonds (ceremony, Table 3–2,
p. 87); Combat Focus, Combat Stability, Combat Defense, Combat
Vigor, Combat Awareness, and Combat Strike (combat form, Table
3–3, p. 87); Divine Armor, Divine Fortune, Divine Justice,
Divine Ward, Profane Aura, Sacred Healing, Sacred Purification,
and Sacred Radiance (divine, Table 3–4, p. 89); Celestial
Sorcerer Heritage, Celestial Sorcerer Aura, Celestial Sorcerer
Lance, Celestial Sorcerer Wings, Celestial Sorcerer Lore,
Infernal Sorcerer Heritage, Infernal Sorcerer Eyes, Infernal
Sorcerer Howl, and Infernal Sorcerer Resistance (heritage,
Table 3–5, p. 90); Blistering Spell, Earthbound Spell, Flash
Frost Spell, Imbued Summoning, and Smiting Spell (metamagic,
Table 3–6, p. 92); and Blood-Spiked Charger, Combat Cloak
Expert, Combat Panache, Einhander, Mad Alchemist, and Shadow
Striker (tactical, Table 3–7, p. 92).

### Base-class verification (recovered records NOT modified)

All four classes were checked line by line against the printed
Chapter 1 tables and class-skill lists. All four source
citations in the recovered records are the correct starting
pages (Beguiler p. 6, Dragon Shaman p. 11, Duskblade p. 19,
Knight p. 24), and hit dice, skill points, BAB, saves, and all
ten recorded progression rows match the printed tables for all
four classes. Three discrepancies were found, all in class
skills; they are reported here precisely and deliberately NOT
fixed (the records are recovered data):

- **Beguiler** (Table 1–1, printed p. 7): the printed
  class-skill list has 29 skills and includes Speak Language;
  the recovered record lists 28 — it omits Speak Language.
- **Duskblade** (Table 1–3, printed p. 21): the printed list
  has 10 skills and includes Decipher Script; the recovered
  record lists 9 — it omits Decipher Script.
- **Dragon Shaman** (Table 1–2, printed p. 12): a modeling
  discrepancy. The book's fixed class-skill list is only 5
  skills — Climb, Craft, Intimidate, Knowledge (nature),
  Search — "plus others depending on the chosen totem dragon."
  The recovered record lists 14 fixed skills: the 5 universal
  ones plus 9 that are actually totem-granted (Bluff, Disguise,
  Gather Information, Hide, Jump, Move Silently, Spellcraft,
  Survival, Swim), and it omits Appraise and Heal, which are
  also totem skills (Red and Gold respectively). Totem table
  (printed p. 13): Black — Hide, Move Silently, Swim; Blue —
  Bluff, Hide, Spellcraft; Brass — Bluff, Gather Information,
  Survival; Bronze — Disguise, Survival, Swim; Copper — Bluff,
  Hide, Jump; Gold — Disguise, Heal, Swim; Green — Bluff, Hide,
  Move Silently; Red — Appraise, Bluff, Jump; Silver — Bluff,
  Disguise, Jump; White — Hide, Move Silently, Swim. Net
  effect: the record treats most totem skills as always-on
  class skills regardless of the chosen totem.
- **Knight** (Table 1–4, printed p. 26): the recovered record
  is completely correct — d12, 2+Int, full BAB, Fort/Ref poor,
  Will good, all rows, and all 7 class skills.

### Printed quirks and id collisions (PHB II)

- Table 3–1 prints Acrobatic Strike's benefit as "+6 on next
  attack," but the feat text (p. 71) grants +4. The record
  follows the feat text; the table value is noted in the
  record and the pack header.
- Two of this book's feats collide by id with genuinely
  different feats of the same name already in the aggregates,
  so this book's records carry suffixed ids and both printings
  coexist (each record's summary notes the other): **Grenadier**
  is id `grenadier-phb2` (+1 attack/damage with splash weapons,
  no prerequisites) because Sorcery & Steam's Grenadier (id
  `grenadier`, Precise Shot prerequisite, grenades/alchemical
  weapons) is a different feat — note that Mad Alchemist's
  "Grenadier" prerequisite in this book means this book's
  Grenadier. **Sacred Healing** is id `sacred-healing-phb2`
  because Complete Divine's Sacred Healing (id
  `sacred-healing`, a fast-healing aura) predates it; this
  book's reprint (swift action, +5 Heal and +2 per die on
  healing spells) has entirely different mechanics, and Sacred
  Purification's prerequisite refers to this book's version.

### Not converted from PHB II (shelf material)

Chapter 2's alternate class features (no app mechanism for
swapping class features), Chapter 4 spells, Chapter 5 identity
material, Chapter 6 teamwork benefits, Chapter 7 affiliations,
Chapter 8 rebuilding rules, and the Appendix. Equipment
noticed along the way (e.g. the Twilight armor special ability,
printed p. 21) is likewise shelf material.

## Races of the Dragon (`src/data/races-of-the-dragon/`)

**2 races** (`races.ts`): Spellscale (traits p. 23; +2 Cha,
−2 Con, Humanoid (Dragonblood), Blood Quickening meditations
per the p. 25 sidebar) and Kobold (traits p. 39, favored class
p. 40; −4 Str, +2 Dex, −2 Con, Small, natural armor +1,
darkvision 60 ft., light sensitivity). The kobold's +2 racial
bonuses to Craft (trapmaking) and Profession (miner) are
carried in the trait text, not `skillBonuses`, because the
app's skill list has no trapmaking/miner subskills and the
bonuses must not generalize to all Craft/Profession checks;
only the +2 Search bonus is in `skillBonuses`. The kobold web
enhancement is NOT used — book only, per instructions.

**2 templates** (`templates.ts`): Dragonborn of Bahamut
(pp. 8–10) and Draconic Creature (p. 74). Judgment call:
dragonborn is modeled as an **acquired template**, not a race —
the Rite of Rebirth transforms an existing character, and the
app's template + forms model fits it the way it fits the
half-dragon. One record with three forms for the draconic
aspects: `heart` (breath weapon), `mind` (senses/immunities),
`wings` (glide/flight). It keeps the original race's type,
subtypes (adding Dragonblood), size, speed, racial HD, and LA
per the Mechanics of Rebirth sidebar (p. 10); documented
limitation: the book strips the base race's other racial
traits, which the app cannot do — the template summary says
so, and the removed traits must be honored by hand. Draconic
Creature is the printed inherited template (LA +1, CR +1,
natural armor +1 via an "improve" modifier, claw attacks,
Str/Con/Cha +2); the note that a dragon devotee gains it
without the LA is in the record.

**5 prestige classes** (`prestige-classes.ts`): Disciple of
the Eye (p. 75), Dracolexi (p. 79), Dragon Devotee (p. 84),
Dragonheart Mage (p. 88), Singer of Concordance (p. 91).
Printed quirks kept as printed and noted per record: Dragon
Devotee's Hit Die is **d6** (Table 5–4 header, verified against
the p. 85 page image — most devotee-style classes are d8, but
the book prints d6), and Disciple of the Eye has all three
saves good (Table 5–2).

**25 feats** (`feats.ts`, Table 6–3, p. 99): Accelerate
Metamagic, Dragon Breath, Dragon Tail, Dragon Trainer, Dragon
Wings, Dragonwrought, Extraordinary Trapsmith, Heavyweight
Wings, Improved Dragon Wings, Kobold Endurance, Kobold Foe
Strike, Practical Metamagic, Reinforced Wings, Versatile
Spellcaster, Wyrmgrafter, Entangling Exhalation, Exhaled
Barrier, Exhaled Immunity, Extra Exhalation, Furious Inhalation
(breath channeling), Draconic Arcane Grace, Draconic
Persuasion, Draconic Toughness (draconic), Spell Rehearsal,
and Wing Expert (tactical). **Nine duplicates skipped** — the
book reprints draconic feats that Complete Arcane already
records, and the earlier records win the dedupe: Draconic
Breath, Draconic Claw, Draconic Flight, Draconic Heritage,
Draconic Legacy, Draconic Power, Draconic Presence, Draconic
Resistance, Draconic Skin. Not converted: the book's spells,
equipment and dragon grafts (Wyrmgrafter's record notes grafts
are equipment), monster content, and racial substitution
levels (no app mechanism).

## Races of Eberron (`src/data/races-of-eberron/`)

**5 races** (`races.ts`), all ruleset "eberron": Drow
(pp. 76–79; +2 Dex, −2 Con, +2 Int, +2 Cha, darkvision 120 ft.,
spell resistance 11 + class level, light blindness, LA +2),
Goblin (pp. 85–88), Hobgoblin (LA +1 as stated in the book),
Bugbear (3 racial HD d8 with the printed BAB/saves, natural
armor +3, scent, LA +1 as stated), and Orc (pp. 102–103,
presented as the Shadow Marches / Gatekeeper orcs). Chapter 5
("Other Races") reprints no full trait lists, so values are
the standard ones the book's own text and stat blocks use
(e.g. the sample drow scout's spell resistance works out to
11 + class level). Judgment calls: the **Inspired are
deliberately excluded** — the book states verbatim "Inspired
are not intended for use as player characters" (printed
p. 100) — and the Player's Handbook races' cultural sections
are not converted (Races of Stone / Races of the Wild
precedent). Chapters 1–4's updates to the four Eberron
Campaign Setting races were compared against the existing ECS
records and match in substance (ability modifiers, skill
bonuses, favored classes) — no duplicates added, no records
modified. One nuance worth recording: this book words the
kalashtar +2 Disguise bonus as applying only "to impersonate a
human," while the existing ECS record applies it
unconditionally — an existing modeling choice, left as is.

**8 prestige classes** (`prestige-classes.ts`): Atavist
(p. 133), Cabinet Trickster (p. 138), Moonspeaker (p. 143),
Quori Nightmare (p. 148), Reachrunner (p. 153), Recaster
(p. 157), Reforged (p. 161), Spellcarved Soldier (p. 166).
Moonspeaker is a 12-level class as printed; per the app's
10-row cap (Void Disciple precedent), levels 1–10 are recorded
and levels 11–12 are noted in the feature text. Expanded
Psionics Handbook skills the book lists (Autohypnosis,
Knowledge (psionics), Psicraft) are named in class-skill lists
even though the app's skill list has no records for them; no
skill records were added.

**62 feats** (`feats.ts`, Table 6–1, printed pp. 105–106):
Aerenal Beastmaster, Ancestral Guidance, Bladebearer of the
Valenar, Boomerang Daze, Boomerang Ricochet, Call of the
Undying, Darguun Mauler, Daylight Adaptation, Dinosaur Hunter,
Dinosaur Wrangler, Drow Skirmisher, Heroic Metamagic, Master
Linguist, Mror Stalwart, Mutable Body, Path of Shadows, Persona
Immersion, Quick Change, Racial Emulation, Relic Hunter,
Shadow Marches Warmonger, Shaped Splash, Ship Savvy, Soulblade
Warrior, Stable Footing, Talenta Warrior, White Scorpion
Strike; the psionic feats Gestalt Anchor, Shield of Thought,
Spiritual Force, Strength of Two; the shifter feats Cliffwalk
Elite, Dreamsight Elite, Extra Shifter Trait, Gorebrute Elite,
Longstride Elite, Longtooth Elite, Razorclaw Elite, Reactive
Shifting, Shifter Agility, Shifter Ferocity, Shifter
Instincts, Shifter Savagery, Shifter Stamina, Swiftwing Elite,
Truedive Elite, Wildhunt Elite; the tactical feats
Battleshifter Training, Brute Fighting, Dancing with Shadows,
Disturbing Visage, Kalashtar Thoughtshifter, Ragewild Fighting
(maneuver names taken from the feat texts, pp. 116–118); and
the warforged feats Cold Iron Tracery, Construct Lock,
Improved Resiliency, Ironwood Body, Jaws of Death, Second
Slam, Silver Tracery, Spiked Body, Unarmored Body. **Two
duplicates skipped**: Adamantine Body and Mithral Body, which
the Eberron Campaign Setting pack already records. Not
converted: equipment, infusions, and racial substitution
levels (no app mechanism).

## Fiendish Codex I — templates check: NONE

Fiendish Codex I: Hordes of the Abyss prints **no
character-playable template**: the text contains no "Level
Adjustment" entries and no "Creating a …" template section,
and its contents are demons, demon lords, and Abyssal lore.
The half-fiend is only *referenced* (e.g. Aldinach's Egg,
printed p. 115) and appears in NPC stat blocks; the template
itself is a Monster Manual template and is not printed here.
No `src/data/fiendish-codex-i/` files were created. Out of the
assigned scope but worth noting as future material: the book
does print Abyssal Heritor and vile feats (Chapter 4,
pp. 82–87), which a later batch could add as feats.

## Verification

- `npm run check` (tsc): 0 errors. `npm run build`: succeeds.
- `vite preview`: HTTP 200; server stopped afterward.
- Resolver smoke test (esbuild bundle of a temporary script
  against the real modules, script deleted after the run):
  seven builds, covering all three books, all with zero
  validation errors. Human Duskblade 5 / Knight 3 with PHB II
  feats; Spellscale Sorcerer 4 / Dragonheart Mage 2; Human
  Fighter 6 with the Dragonborn of Bahamut template (wings
  form — Humanoid, subtypes Human/Dragonblood); Kobold Rogue 3
  with the Draconic Creature template; Drow Ranger 3 (LA +2
  race); Warforged Fighter 6 / Spellcarved Soldier 2; Kalashtar
  Psion 5 / Atavist 3. (Three builds also carried a
  feat-count warning because the test builds deliberately took
  one feat more than their slots allowed — a test artifact, not
  a data problem.)
- Id-collision check: before this batch the aggregates held
  ALL_RACES 37, ALL_CLASSES 37, ALL_PRESTIGE_CLASSES 204,
  ALL_TEMPLATES 10, ALL_FEATS 648, ALL_SKILLS 55. A post-merge
  scan found that two PHB II feats initially collided with
  genuinely different same-name feats (Grenadier vs Sorcery &
  Steam, Sacred Healing vs Complete Divine); they were given
  suffixed ids as documented above rather than dropped, so no
  new record was lost to the dedupe. After the merge:
  ALL_RACES 44 (+7), ALL_CLASSES 37 (+0),
  ALL_PRESTIGE_CLASSES 217 (+13), ALL_TEMPLATES 12 (+2),
  ALL_FEATS 840 (+192), ALL_SKILLS 55 (+0) — every new record
  present exactly once, no internal duplicates in any new pack.
- NOT pushed to GitHub and NOT deployed in this pass — the
  parent agent verifies, pushes (which auto-deploys via the
  Pages workflow), and reports.

---

# Batch 6 addendum (2026-10-27): Complete Champion, Complete Mage, Complete Psionic, Complete Scoundrel

Merged into the barrel (`src/data/index.ts`) 2026-10-27 as
Batch 6 of the "all original books" program: the four remaining
Complete books. All four are generic D&D 3.5 supplements, so
every record carries ruleset "core". Sources are the copies in
Shaun's durrum1 Dropbox library, folder
`/A POC PC related/5.Splat/Complete sereies/` (the folder's
spelling is the library's own):
`D&D 3.5 - Complete Champion.pdf`,
`D&D 3.5 - Complete Mage.pdf`,
`D&D 3.5 - Complete Psionic.pdf`,
`D&D 3.5 - Complete Scoundrel.pdf`.
Printed page numbers are used throughout: Complete Champion,
Complete Mage, and Complete Scoundrel printed page = PDF page
(verified against the folios); Complete Psionic printed page =
PDF page − 1. The Complete Psionic PDF is an image-only scan —
all 159 pages were rendered and read by OCR of the page images,
with ambiguous table cells settled against the page images
directly. Only new data files plus the barrel were touched
(and one cross-note appended to a Races of Eberron feat record,
documented below); Shaun's locked house rules and settings
were not touched — a post-build check confirmed the default
build still starts with all five rulesets enabled and
`crossClassSkillDoubleCost: false`, `crossClassSkillHalfCap:
true`, `levelAdjustmentBuyoff: false`.

## Complete Champion (`src/data/complete-champion/`)

- 11 prestige classes (Chapter 2): Fist of the Forest,
  Forest Reeve, Holt Warden, Mythic Exemplar, Ordained
  Champion, Paragnostic Apostle, Paragnostic Initiate,
  Sanctified One, Shadowspy, Shadowstriker, Squire of Legend.
- 42 feats (Table 2-1, descriptions pp. 54–64): Air Devotion,
  Animal Devotion, Awesome Smite, Battle Blessing, Bestial
  Charge, Chaos Devotion, Charnel Miasma, Death Devotion,
  Destruction Devotion, Earth Devotion, Elemental Essence,
  Evil Devotion, Fire Devotion, Fragile Construct, Good
  Devotion, Great and Small, Healing Devotion, Holy Potency,
  Holy Warrior, Imbued Healing, Knowledge Devotion, Law
  Devotion, Luck Devotion, Magic Devotion, Mitigate
  Suffering, Plant Devotion, Protection Devotion, Protective
  Ward, Retrieve Spell, Spiritual Counter, Spontaneous
  Domains, Strength Devotion, Sun Devotion, Swift Call,
  Swift Wild Shape, Touch of Healing, Travel Devotion,
  Trickery Devotion, Umbral Shroud, Venom's Gift, War
  Devotion, Water Devotion. The 22 Devotion feats are one feat
  each, keyed to their domain as printed.
- No base classes, no races, no templates, no new skills
  (verified against the book's contents).
- Printed quirks kept as printed: Mythic Exemplar's table
  has no good save; Sanctified One's table has all three
  saves good. Shadowstriker's Reflex save (poor, per Table
  2-11) was settled against the printed page image after a
  garbled text-layer read.

## Complete Mage (`src/data/complete-mage/`)

- 11 prestige classes (Chapter 3): Abjurant Champion,
  Eldritch Disciple, Eldritch Theurge, Enlightened Spirit,
  Holy Scourge, Lyric Thaumaturge, Master Specialist,
  Nightmare Spinner, Ultimate Magus, Unseen Seer, Wild Soul.
- 65 feats (Table 2-1, descriptions pp. 37–48): Acidic
  Splatter, Alacritous Cogitation, Aquatic Breath,
  Battlecaster Defense, Battlecaster Offense, Blade of
  Force, Borne Aloft, Captivating Melody, Clap of Thunder,
  Cloudy Conjuration, Clutch of Earth, Dazzling Illusion,
  Defending Spirit, Delay Potion, Dimensional Jaunt,
  Dimensional Reach, Drowning Glance, Elemental Adept,
  Energy Abjuration, Energy Gestalt, Face-Changer, Favored
  Magic Foe, Fearsome Necromancy, Fey Heritage, Fey Legacy,
  Fey Power, Fey Presence, Fey Skin, Fiendish Heritage,
  Fiendish Legacy, Fiendish Power, Fiendish Presence,
  Fiendish Resistance, Fiery Burst, Hasty Spirit, Hurricane
  Breath, Insightful Divination, Invisible Needle, Magic
  Device Attunement, Magic Disruption, Magic Sensitive,
  Master of Undeath, Melodic Casting, Metamagic School
  Focus, Metamagic Spell Trigger, Metamagic Vigor, Minor
  Shapeshift, Mystic Backlash, Piercing Evocation, Ranged
  Recall, Rapid Metamagic, Residual Magic, Retributive
  Spell, Shadow Veil, Sickening Grasp, Somatic Weaponry,
  Storm Bolt, Summon Elemental, Sunlight Eyes, Touch of
  Distraction, Toughening Transmutation, Unsettling
  Enchantment, Vengeful Spirit, Wind-Guided Arrows,
  Winter's Blast.
- No base classes (the book's table of contents confirms
  none), no races, no templates, no new skills.
- Printed quirk kept as printed: Wild Soul's Hit Die is d4
  as printed on its table (verified against the page image).

## Complete Psionic (`src/data/complete-psionic/`)

- 3 base classes ADDED (Chapter 1) — all three were verified
  ABSENT from the recovered core data before being added,
  following the Wu Jen / Shugenja / Healer precedent; each is
  recorded with levels 1–10 progression rows per the app's
  per-class level-cap convention, and their manifesting is
  described in prose in the class feature entry (powers, like
  spells, are not modeled): Ardent (d6, 2+Int, three-quarter
  BAB, Will good; Wisdom-based manifesting from mantles),
  Divine Mind (d10, 2+Int, three-quarter BAB, Fort and Will
  good; psychic aura; manifester level = class level − 4),
  Lurk (d6, 4+Int, three-quarter BAB, Ref and Will good;
  lurk augments and psionic sneak attack). The book's one
  table-vs-text quirk is recorded in the Ardent record: its
  class skill list prints "Knowledge" unqualified, recorded
  as "Knowledge (all)" following the Wu Jen precedent.
- 8 prestige classes (Chapter 2): Anarchic Initiate, Ebon
  Saint, Ectopic Adept, Flayerspawn Psychic, Illumine Soul,
  Soulbow, Storm Disciple, Zerth Cenobite. Flayerspawn
  Psychic's manifesting advancement (+1 at 2nd, 4th, 5th,
  7th, 9th, 10th only) was settled against a cropped page
  image of Table 2-4.
- 95 feats net-new: Chapter 3's Table 3-1 Psionic Feats
  (40), Table 3-2 Psionic Racial Feats (28), Table 3-3
  General Feats (4), Table 3-4 Host Feats (8), Table 3-5
  Illithid Heritage Feats (9), Table 3-6 Metapsionic Feats
  (7), plus Chapter 6's five epic psionic feats (Improved
  Overchannel, Automatic Quicken Power, Epic Power
  Penetration, Epic Psionic Endowment, Improved Combat
  Manifestation). Ectopic Form's eight forms are choices
  within the one feat, not separate feats. Full list:
  Dazzling Energy, Dire Flail Mind Blade, Dire Stun, Don
  Mantle, Dwarven Urgosh Mind Blade, Ectopic Form, Elemental
  Envoy, Envoy Cognizance, Enervation Endurance, Enhanced
  Beneficence, Euphoric Reduction, Focused Perception,
  Focused Skill User, Instinctive Consummator, Extra Lurk
  Augment, Lurk Augment Ranged, Lurk Master, Mantle Focus,
  Mental Juggernaut, Mind Cleave, Mind Empowerment, Mind
  Strike Focused, Mind Strike Swift, Orc Double Axe Mind
  Blade, Postpone Enervation, Practiced Manifester,
  Privileged Energy, Psymbiot, Skin of the Construct,
  Stygian Archon, Tap Mantle, Extra Aura, Two-Bladed Mind
  Blade, Volatile Escalation, Volatile Leech, Dromite Ray,
  Dromite Barrier, Duergar Expansion, Duergar Invisibility,
  Elan Repletion Enhanced, Elan Resilience Enhanced, Elan
  Resistance Enhanced, Elan Retainment, Githyanki Charm,
  Githyanki Control, Githyanki Dismissal, Githyanki
  Ectoform, Githzerai Burst, Githzerai Feedback, Githzerai
  Knock, Githzerai Link, Half-Giant Stomp, Half-Giant
  Thunderer, Maenad Fury, Maenad Scream, Maenad Scream
  Deafening, Synad Multitask Enhanced, Thri-Kreen Carapace,
  Thri-Kreen Claw, Thri-Kreen Displacement, Thri-Kreen
  Poison, Xeph Burst Extra, Xeph Celerity, Dorje Mastery,
  Dual Dorje, Hostile Mind Improved, Psionic Mastery,
  Aggressive Mind, Antagonist, Defensive Shell, Host Focus,
  Pacifist, Spiritual Force (host feat — see below),
  Telepathic Affinity, Illithid Heritage, Illithid Blast,
  Illithid Compulsion, Illithid Enthusiast, Illithid
  Grapple, Illithid Extraction, Illithid Legacy, Illithid
  Legacy Greater, Illithid Skin, Knockdown Power, Linked
  Power, Metapower, Paraelemental Power, Phrenic Leech,
  Stygian Power, Transdimensional Power, Improved
  Overchannel, Automatic Quicken Power, Epic Power
  Penetration, Epic Psionic Endowment, Improved Combat
  Manifestation.
- 1 race (Chapter 6): Synad — aberration, Medium, 30 ft.,
  darkvision 60 ft., naturally psionic (3 bonus power
  points), threefold mind / collective / multitask traits,
  favored class Any, no ability modifiers and no level
  adjustment, all as printed. The chapter's Talaire humans
  of the Six Hidden Houses are NOT a separate race (they use
  the human record with a house-specific Wild Talent
  variant), and the chapter's racial classes are a separate
  leveling system the app does not model.
- No templates and no new skills.
- The Erudite (Chapter 6) is a variant psion presented as an
  option, not a new base class — not added, per the Wu Jen /
  variant-class precedent.

## Complete Scoundrel (`src/data/complete-scoundrel/`)

- 13 prestige classes (Chapter 2): Avenging Executioner,
  Battle Trickster, Cloaked Dancer, Combat Trapsmith,
  Fortune's Friend, Gray Guard, Magical Trickster,
  Malconvoker, Master of Masks, Mountebank, Psibond Agent,
  Spellwarp Sniper, Uncanny Trickster.
- 55 feats net-new (Table 3-1, descriptions pp. 73–82):
  Advantageous Avoidance, Better Lucky than Good, Dumb
  Luck, Fortuitous Strike, Good Karma, Healer's Luck, Lucky
  Break, Lucky Catch, Lucky Fingers, Lucky Start, Magical
  Fortune, Make Your Own Luck, Miser's Fortune, Psychic
  Luck, Sly Fortune, Survivor's Luck, Tempting Fate, Third
  Time's the Charm, Unbelievable Luck, Victor's Luck,
  Concussion Attack, Deafening Strike, Disemboweling
  Strike, Eldritch Erosion, Head Shot, Impeding Attack,
  Merciful Strike, Mind Drain, Persistent Attacker, Throat
  Punch, Chant of the Long Road, Chord of Distraction, Epic
  of the Lost King, Sound of Silence, Warning Shout,
  Ascetic Stalker, Cool Head, Daredevil Athlete, Daring
  Outlaw, Daring Warrior, Deadly Defense, Expanded Ki Pool,
  Enduring Ki, Freerunner, Improved Skirmish, Martial
  Stalker, Master Spellthief, Poison Expert, Poison Master,
  Psithief, Savvy Rogue, Sure Hand, Sweet Talker, Swift
  Ambusher, Swift Hunter.
- No base classes (confirmed), no races, no templates, no
  new skills.
- Table-vs-description conflicts, descriptions govern (both
  noted in the records): Eldritch Erosion's sneak attack
  cost (description 4d6, table 3d6) and Poison Expert's
  Craft (poisonmaking) prerequisite (description 4 ranks,
  table 8 ranks). Several of the book's description blocks
  print under neighboring feat headings in the column
  layout; each feat's benefit follows its own text (this
  affects Sly Fortune, Sound of Silence, Sweet Talker,
  Tempting Fate, and the Lucky Catch / Lucky Fingers pair,
  whose Table 3-1 benefit lines are scrambled).

## Base classes — verification results

- Complete Champion, Complete Mage, Complete Scoundrel:
  confirmed to contain NO base classes.
- Complete Psionic: Ardent, Divine Mind, and Lurk were all
  missing from the recovered data and are added as new
  records (above). Because they are new records, there are
  no recovered-record discrepancies to report for them.
- No recovered records were modified or duplicated in this
  batch, and no discrepancies in recovered records were
  found while cross-checking these four books.

## Duplicates skipped and the one same-name collision

- Complete Scoundrel: Improved Familiar — already in the
  dataset from Complete Warrior (the Scoundrel printing's
  own Special notes it reprints the DMG feat); skipped.
- Complete Psionic: six of the book's feat printings
  duplicate records already in the dataset and are skipped:
  Deep Vision, Focused Shield, Invest Armor, and Energize
  Armor (Races of Stone records, from Batch 1) and Gestalt
  Anchor and Strength of Two (Races of Eberron records,
  from Batch 5). Note for the parent: the Complete Psionic
  printing of Gestalt Anchor words the benefit slightly
  differently (the bonus applies to the feat-holder while
  within 60 feet of hosting allies; the Races of Eberron
  printing extends it to nearby kalashtar allies as well)
  and restates the prerequisite (any host feat or kalashtar,
  base Will save +3). It was treated as a reprint and
  skipped; the earlier record governs.
- Same name, DIFFERENT feat (Batch 5 precedent followed):
  Complete Psionic's host feat Spiritual Force (add Cha
  bonus to mind blade damage for 1 round) is not the Races
  of Eberron feat Spiritual Force (a kalashtar mind-blade
  feat: manifest the mind blade as a swift action, +2
  effective levels for enhancement). The Complete Psionic
  feat is kept under the suffixed id `spiritual-force-cp`,
  with cross-notes in both records (the Races of Eberron
  record's `special` gained the cross-note — the only edit
  to an earlier pack file in this batch).
- No other id collisions: a post-merge scan of all four
  aggregates found every Batch 6 record present exactly
  once (see Verification). One pre-existing internal
  duplicate in the older data (`great-cleave` appears in two
  pre-Batch-6 packs and is deduped by the barrel) predates
  this batch and was left alone.

## Judgment calls and deliberate omissions (shelf material)

- Complete Scoundrel's skill tricks (42: Interaction 6,
  Mental 7, Manipulation 12, Movement 17) are a separate
  mechanic bought with skill points — an omitted system,
  NOT modeled as feats or skills.
- Complete Champion: affiliations, domains-as-systems,
  organizations, and the book's spells are out of scope and
  not converted. (Domain feats themselves ARE converted —
  see above.)
- Complete Mage: spells, the book's magical locations,
  alchemical and magic items are out of scope.
- Complete Psionic: powers and mantles-as-a-system,
  psionic items, Chapter 5's constructs and creatures
  (including the ectopic-form astral construct stat blocks —
  the feat itself is converted), epic progressions of the
  Chapter 1 classes, and the daily-power-points variant are
  out of scope.
- Complete Scoundrel: equipment, poisons-as-items, and
  spells are out of scope.
- Feat categories: the app has no psionic / host / illithid
  / devotion / luck categories; those groupings are recorded
  in each feat's `special` text with the closest app
  category used (racial feats as "race-specific",
  metapsionic and Imbued Healing-style feats as "metamagic",
  tactical and ambush feats as "combat", the rest
  "general").

## Verification

- `npm run check` (tsc): 0 errors. `npm run build`:
  succeeds.
- `vite preview`: HTTP 200; server stopped afterward.
- Resolver smoke test (esbuild bundle of a temporary script
  against the real modules, script deleted after the run):
  four builds, one per book, all with zero validation
  errors — Human Cleric 5 / Ordained Champion 3 with
  Awesome Smite (Complete Champion); Human Wizard 5 /
  Master Specialist 3 with Retributive Spell (Complete
  Mage); Synad Ardent 5 / Storm Disciple 2 with Practiced
  Manifester (Complete Psionic — the build carried one
  feat-slot warning, a test artifact of the synthetic build,
  not a data problem); Human Rogue 5 / Fortune's Friend 2
  with Lucky Start (Complete Scoundrel).
- Id-collision check: before this batch the aggregates held
  ALL_RACES 44, ALL_CLASSES 37, ALL_PRESTIGE_CLASSES 217,
  ALL_TEMPLATES 12, ALL_FEATS 840, ALL_SKILLS 55. After the
  merge: ALL_RACES 45 (+1), ALL_CLASSES 40 (+3),
  ALL_PRESTIGE_CLASSES 260 (+43), ALL_TEMPLATES 12 (+0),
  ALL_FEATS 1097 (+257), ALL_SKILLS 55 (+0) — every new
  record present exactly once; the +257 feats reconcile as
  42 + 65 + 95 + 55 with the seven skips / suffix resolution
  documented above.
- NOT pushed to GitHub and NOT deployed in this pass — the
  parent agent verifies, pushes (which auto-deploys via the
  Pages workflow), and reports.

# Batch 7 addendum (2026-10-27): Races of Destiny, Races of Faerun

Merged into the barrel (`src/data/index.ts`) 2026-10-27 as
Batch 7 of the "all original books" program: the last two
books of the Races series. Both books carry ruleset "core".
Races of Faerun is a Forgotten Realms book, but the app's
sorting scheme has no Faerun toggle and no new rulesets are
created by data packs, so it is filed under "core" like the
other setting-neutral Races books. Races of Faerun is also a
3.0-era book (first printing March 2003, written against the
then-upcoming 3.5 revision); where 3.0 and 3.5 conventions
differ, its entries are recorded in the app's 3.5
conventions. Sources are the copies in Shaun's durrum1
Dropbox library, folder
`/A POC PC related/5.Splat/Races of series/`:
`Races of Destiny.pdf` and `Races of Faerun.pdf`. Printed
page = PDF page − 1 in both books (verified against the
folios). The Races of Destiny PDF has a full text layer. The
Races of Faerun PDF is an image-only scan — all 193 pages
were rendered and read by OCR of the page images, with
ambiguous table cells settled against the page images
directly. Only new data files plus the barrel were touched;
Shaun's locked house rules and settings were not touched —
a post-build check confirmed the default build still starts
with all five rulesets enabled and
`crossClassSkillDoubleCost: false`, `crossClassSkillHalfCap:
true`, `levelAdjustmentBuyoff: false`.

## Races of Destiny (`src/data/races-of-destiny/`)

- 10 races (Chapters 3 and 4): Illumian, Aasimar,
  Doppelganger, Half-Ogre, Mongrelfolk, Sea Kin, Sharakim,
  Skulk, Tiefling, Underfolk. Humans, half-elves, and
  half-orcs are covered by the book but already have core
  records and were not duplicated. The doppelganger and
  skulk "monster class" level progressions (Savage
  Species-style) are not modeled by the app and are noted
  in the race records instead.
- 7 prestige classes (Chapter 5): Chameleon, Loredelver,
  Menacing Brute, Outcast Champion, Scar Enforcer, Shadow
  Sentinel, Urban Soul.
- 35 feats (Table 6-1, p. 151; descriptions pp. 150–156):
  Able Learner, Bright Sigil, Channeled Rage, City Slicker,
  Complementary Insight, Diverse Background, Enhanced Power
  Sigils, Heroic Destiny, Protected Destiny, Fearless
  Destiny, Human Heritage, Improved Sigil (Aesh), Improved
  Sigil (Hoon), Improved Sigil (Krau), Improved Sigil
  (Naen), Improved Sigil (Uur), Improved Sigil (Vaul),
  Inside Connection, Menacing Demeanor, Resourceful Buyer,
  Smatterings, Sociable Personality, Subtle Sigil, Urban
  Stealth, Urban Tracking, Arcane Insight, Dread Tyranny,
  Eternal Strength, Far Horizons, Law Inviolate, Radiant
  Fire, Undying Fate, Whispered Secrets, Crowd Tactics,
  Roofwalker. The last eight of the general list are the
  book's [Initiate] feats (one per god of the racial
  pantheons); the app has no initiate category, so they are
  recorded as "general" with the grouping noted in each
  record's `special`, per the Complete Divine precedent.
  Crowd Tactics and Roofwalker are the book's two tactical
  feats, recorded as "combat".
- No base classes, no templates, no new skills (verified
  against the book's contents; Chapter 6's skills section
  presents new uses for existing skills only).
- Printed quirks kept as printed: the tiefling's trait list
  in this book (p. 108) does not print the Monster Manual
  energy resistances — the record follows the book as
  printed. (Races of Faerun prints no tiefling trait list
  at all, so this record is the dataset's only tiefling
  trait list.) The Chameleon's Table 5–2 gives all three
  saves poor; kept as printed. The Shadow Sentinel lists Weapon Focus under
  its "Skills" heading in the requirements block; it is
  recorded as a feat prerequisite and the placement is
  noted in the file header. Sea kin print no level
  adjustment line; recorded as +0. The illumian power
  sigils and all fifteen illumian words are summarized in
  the Illumian race record.
- Out of scope (shelf material): Chapter 6's spells, the
  city magic items and equipment, and the organizations
  and locations material.
## Races of Faerun (`src/data/races-of-faerun/`)

- 11 races — only subraces and creatures printed with a
  complete, standalone "as characters" trait list were
  converted: Gray Orc, Mountain Orc, Orog, Fey'ri,
  Tanarukk, Aarakocra, Dekanter Goblin, Kir-Lanan,
  Lizardfolk, Wemic, Yuan-ti Pureblood. Judgment calls of
  note: the fey'ri trait list prints no languages line, and
  the record says so rather than inventing one; the
  aarakocra entry prints no racial Hit Dice, so the record
  has none; the gray orc list does not print darkvision, so
  none is recorded.
- 2 templates: Shade (an acquired template for humanoids
  of at least 5th level; nearly all of its benefits apply
  only in shadow or darkness and are recorded as feature
  text, and neither template prints a Challenge Rating
  adjustment in this book's character presentation, so
  `crModifier` is 0 with that stated in the record) and
  Yuan-ti Tainted One.
- 9 prestige classes — the book body has no prestige-class
  chapter; all nine are in the appendix (Tables A-6 through
  A-14, pp. 178–189): Battlerager, Bladesinger,
  Breachgnome, Elven High Mage, Great Rift Skyguard, Orc
  Warlord, Spellsinger, Warrior Skald, Warsling Sniper.
  The runecaster named in the gray dwarf entry is not
  detailed in this book (narrative mentions only). The
  elven high mage is an epic prestige class: Table A-9
  prints no base attack or save columns, so its record
  follows the Epic Level Handbook epic attack/save bonus
  progressions the book defers to, with that noted in the
  record. This book's bladesinger is the 3.0-era original
  with its own spell list and spells-per-day table; the
  revised 3.5 bladesinger from Complete Warrior already in
  the dataset is a different record, so the Races of Faerun
  printing is kept alongside it as `bladesinger-rof` with a
  cross-reference in its spellcasting feature.
- 78 feats (Appendix: Feats, pp. 160–170): Aftersight,
  Ancestral Spirit, Animal Friends, Arachnid Rider, Arctic
  Adaptation, Azerblood, Batrider, Blood of the Warlord,
  Breathing Link, Calishite Elementalist, Caravanner,
  Celestial Bloodline, Chondathan Missionary,
  Close-Quarter Fighting, Deepening Darkness,
  Disentangler, Drow Eyes, Duergar Mindshaper, Eldritch
  Linguist, Elemental Bloodline, Enervative Healing, Eyes
  of Light, Fiendish Bloodline, Forest Gnome Phantasist,
  Genie Lore, Gift of Tongues, Gold Dwarf Dweomersmith,
  Grim Visage, Hammer Fist, Harem Trained, Headlong Rush,
  Healing Flames, Highborn Drow, Hin Wandermage, Improved
  Energy Resistance, Improved Levitation, Improved Low
  Blow, Improved Natural Armor, Infernal Bargainer, Iron
  Mind, Jotunbrud, Jungle Stamina, Landwalker, Light to
  Daylight, Lightbringer, Lolth's Blessing, Low Blow,
  Metallurgy, Might Makes Right, Nobody's Fool, Oral
  History, Outsider Wings, Plague Resistant, Planetouched
  Animal Affinity, Rapid Swimming, Reckless Offensive,
  Rock Gnome Trickster, Runesmith, Sacred Tattoo, Shadow
  Shield, Shadow Song, Shield Dwarf Warder, Skyrider,
  Southern Magician, Spell-Like Ability Focus, Spire
  Walking, Staggering Strike, Stoneblood, Stone Colossus,
  Stoneshaper, Stone Slide, Stonewalker Fist, Summon
  Earth Elemental, Svirfneblin Figment Master, Talfirian
  Song, Tattoo Magic, Theocrat, Water Adaptation. The
  book's [Fighter, general] tags are recorded as "combat"
  (fighter bonus feats), race-named prerequisites as
  "race-specific", Tattoo Magic as "item-creation", and
  the rest as "general"; the book's printed "Regions:"
  lines are carried in the prerequisites. Aftersight is
  easy to miss: it is printed at the end of the equipment
  pages (p. 160), before the appendix feats chapter
  heading. Calishite Elementalist prints no prerequisite
  or region line and is recorded with none, noted in the
  record.
- Same-name collision (Batch 5/6 precedent): this book's
  Staggering Strike (forgo sneak attack dice to stagger a
  target) is a different feat from Complete Adventurer's
  Staggering Strike, so it is recorded as
  `staggering-strike-rof`, with a cross-note added to the
  Complete Adventurer record's `special` and in the new
  record. Two feat ids coincide with Races of Stone
  prestige-class ids — `iron-mind` and `runesmith`; the
  aggregates are separate, so no dedupe interaction, but
  the coincidence is flagged here for the parent.
- Duplicates skipped (earlier records govern): the feats
  Improved Familiar (this book's entry only adds its
  Table A-5 familiar options, noted in the file header),
  Improved Flight (Races of the Wild; this book's
  prerequisite wording is slightly broader, noted),
  Primitive Caster (Frostburn), and Swarmfighting
  (Complete Warrior, identical in substance); the races
  Aasimar and Tiefling (Races of Destiny records govern —
  and in any case this book prints no trait lists for
  them), Goblin, Hobgoblin, and Bugbear (Races of Eberron
  records; this book's lists are identical in substance),
  Centaur (Races of the Wild record governs — flagged
  discrepancy, NOT fixed: this book prints the centaur at
  level adjustment +3 against Races of the Wild's +2), and
  the Lycanthrope template (the core SRD record governs —
  flagged discrepancy, NOT fixed: this book prints the
  full revised template at pp. 144–146 with level
  adjustment +1 afflicted / +2 natural plus animal Hit
  Dice, against the existing record's flat SRD +3/+3
  simplification).
- Documented, not converted (the Tundra Halfling / Crucian
  precedents): most of this book's subraces are printed
  only as deltas on another race, as a header referring to
  the Forgotten Realms Campaign Setting, or with no trait
  list at all. Dwarves — Arctic Dwarf (delta: +4 Str, −2
  Dex, +2 Con, −2 Cha, Small, immune to cold, favored
  class ranger, LA +2); Gold Dwarf (no delta block — the
  Player's Handbook dwarf unchanged); Gray Dwarf (no
  traits printed; header refers to the FRCS, LA +2);
  Shield Dwarf (no delta block — PHB unchanged); Urdunnir
  (delta: +4 racial bonus on saves against poison
  replacing the dwarf +2, stone walk, stone shape at will,
  shape metal, favored class expert, LA +4); Wild Dwarf
  (delta: Small, speed 20, handaxe and blowgun proficiency
  replacing weapon familiarity, poison use, fire
  resistance 5, +3 saves against poison, +4 against
  disease, no stonecunning or stone/metal Craft bonuses,
  favored class barbarian, LA +0). Elves — Aquatic Elf
  (delta: +2 Dex/−2 Int replacing +2 Dex/−2 Con,
  trident/longspear/net proficiency, swim 40, improved
  low-light vision, gills, favored class fighter, LA +1);
  Avariel (delta: +4 Dex, −2 Con, +2 Int, +2 Wis, +4 Spot
  replacing +2, +4 Jump, rapier-or-longsword and
  lasso/bolas proficiency, fly 50 ft (average), favored
  class cleric, LA +3); Drow (header only, refers to the
  FRCS, LA +2; already in the dataset from Races of
  Eberron); Moon Elf (no delta block — PHB elf); Sun Elf
  (no trait list or delta printed — mechanics in the
  FRCS); Wild Elf (block refers to the FRCS, changing only
  weapon proficiencies); Wood Elf (no block — FRCS).
  Gnomes — Deep Gnome (header only, FRCS, LA +3); Forest
  Gnome (delta: +1 racial bonus on attacks against
  kobolds, orcs, goblinoids, and reptilian humanoids, +4
  Hide [+8 in forests], pass without trace and speak with
  animals at will, self only, favored class illusionist,
  LA +1); Rock Gnome (the PHB gnome). Half-Elves — Common
  Half-Elf (the PHB record); Half-Aquatic Elf (delta: swim
  15, sea longing, LA +0); Half-Drow (presented as a delta
  — darkvision 60 ft and drow blood — not a full list).
  Half-Orc (the entry states the PHB half-orc features
  verbatim; the core record governs). Halflings —
  Ghostwise (no trait list printed in this book — the
  mechanics are in the FRCS; telepathy appears only in
  prose), Lightfoot (the PHB halfling), Strongheart (no
  trait list printed — FRCS mechanics). Planetouched —
  the air, earth, fire, and water genasi are header and
  narrative only (LA +1 each), with no trait lists printed
  in this book. The human ethnic groups of Chapter 7 are
  region entries (languages, regional feats, equipment)
  with no racial mechanics. Yuan-ti abominations,
  halfbloods, and broodguards are stated in the book to be
  unsuitable as player character races and were not
  converted.
- No base classes and no new skills (verified against the
  book's contents and appendix).
- Printed quirks kept as printed and noted in the records:
  the spellsinger's spellsong saving throw DC is printed
  as "Cha modifier + the enchantment's level + 2" with no
  base 10; the skyguard's hippogriff steed III grants
  damage reduction 5/+2 (3.0 notation); the sniper's
  vision entry says "skiprock sniper" once, a printing
  slip; the tanarukk's spell resistance is printed as
  "14 + class level".
- Out of scope (shelf material): the appendix spells
  (pp. 189–192), equipment and magic items (including the
  appendix's), the monsters of the appendix and the
  creature entries not presented as playable races,
  substitution and paragon material (none in this book),
  and the region/setting rules throughout.

## Verification

- `npm run check` (tsc): 0 errors. `npm run build`:
  succeeds.
- `vite preview`: HTTP 200; server stopped afterward.
- Resolver smoke test (esbuild bundle of a temporary
  script against the real modules, script deleted after
  the run): eight builds, all with zero validation
  errors — Illumian Wizard 5 / Loredelver 3 with Heroic
  Destiny and Skulk Rogue 4 (Races of Destiny); Gray Orc
  Cleric 5 with Oral History, Fey'ri Sorcerer 4 with
  Fiendish Bloodline, Lizardfolk Druid 3, Tanarukk
  Barbarian 2, Elf Wizard 5 / Bladesinger (RoF) 3 with
  Southern Magician, and Gray Orc Barbarian 4 / Orc
  Warlord 2 with Might Makes Right (Races of Faerun).
- Id-collision check: before this batch the aggregates
  held ALL_RACES 45, ALL_CLASSES 40, ALL_PRESTIGE_CLASSES
  260, ALL_TEMPLATES 12, ALL_FEATS 1097, ALL_SKILLS 55.
  After the merge: ALL_RACES 66 (+21), ALL_CLASSES 40
  (+0), ALL_PRESTIGE_CLASSES 276 (+16), ALL_TEMPLATES 14
  (+2), ALL_FEATS 1210 (+113), ALL_SKILLS 55 (+0) — every
  new record present exactly once, reconciling as Races
  of Destiny +10 races / +7 prestige classes / +35 feats
  and Races of Faerun +11 races / +2 templates / +9
  prestige classes / +78 feats, with the skips and the
  suffix resolution documented above.
- NOT pushed to GitHub and NOT deployed in this pass —
  the parent agent verifies, pushes (which auto-deploys
  via the Pages workflow), and reports.

# Batch 8a addendum (2026-10-28): Tome of Battle, Expanded Psionics Handbook, Unearthed Arcana, Tome of Magic

Merged into the barrel (`src/data/index.ts`) 2026-10-28 as
Batch 8a of the "all original books" program: the first
half of the sourcebooks shelf. All four books carry
ruleset "core". Sources are the copies in Shaun's durrum1
Dropbox library: Tome of Battle, Expanded Psionics
Handbook, and Unearthed Arcana from
`/a poc dm related/desktop/Sourcebooks/`; Tome of Magic
from `/A POC PC related/5.Splat/Tome of Magic.pdf`. The
first three PDFs have full text layers (Unearthed Arcana
is an OCR'd scan with a usable text layer). The Tome of
Magic PDF is image-only, so that pack was built from OCR
(RapidOCR) of rendered pages, with ambiguous table cells
settled against the page images directly. Page offsets:
Tome of Battle citations use the book's printed
pagination (printed folio = text-extraction split index
+ 1); Tome of Magic printed folio = PDF page − 1. Only
new data files plus the barrel were touched; Shaun's
locked house rules and settings were not touched — the
built bundle still contains the "LOCKED OFF by Shaun"
lock text, and no engine, component, house-rules, or
recovered data file was modified.

## Base-class verification (checked first, against the recovered data)

- Tome of Battle: Crusader, Swordsage, and Warblade were
  all MISSING from the recovered dataset — all three
  added as new base classes in the Tome of Battle pack.
- Expanded Psionics Handbook: Psion, Wilder, Psychic
  Warrior, and Soulknife were ALL missing. The parent
  brief believed a Psion record already existed — it
  does not; "Psion" appeared only as the kalashtar
  favored-class string. All four added in the Expanded
  Psionics pack. This corrects the brief's assumption.
- Tome of Magic: Binder, Shadowcaster, and Truenamer
  were all MISSING — all three added in the Tome of
  Magic pack.
- No discrepancies were found in recovered records for
  these books, because no overlapping records existed to
  disagree with. No recovered record was modified.

## Tome of Battle (`src/data/tome-of-battle/`)

- 3 base classes: Crusader (pp. 8–14), Swordsage
  (pp. 15–19), Warblade (pp. 20–26). Progressions and
  skill lists verified against the printed text
  (Crusader 10 class skills; Swordsage 20; Warblade 12,
  including Martial Lore and no Ride). Printed quirk
  noted on the Swordsage record: some printings read
  "×6 at 1st level" for the skill-point multiplier.
- 1 new skill: Martial Lore (p. 28).
- 8 prestige classes: Bloodclaw Master, Bloodstorm
  Blade, Deepstone Sentinel, Eternal Blade, Jade
  Phoenix Mage, Master of Nine, Ruby Knight Vindicator,
  Shadow Sun Ninja. All eight class-skill lists verified
  against the printed text.
- 38 feats: Adaptive Style, Avenging Strike, Blade
  Meditation, Desert Fire, Desert Wind Dodge, Devoted
  Bulwark, Evasive Reflexes, Extra Granted Maneuver,
  Extra Readied Maneuver, Falling Sun Attack, Ironheart
  Aura, Martial Stance, Martial Study, Rapid Assault,
  Shadow Blade, Shadow Trickster, Song of the White
  Raven, Snap Kick, Stone Power, Sudden Recovery,
  Superior Unarmed Strike, Tiger Blooded, Unnerving
  Calm, Vital Recovery, White Raven Defense, Divine
  Spirit [Divine], Scribe Martial Script [item
  creation], Instant Clarity and Psychic Renewal
  [Psionic], and the 9 tactical feats filed under the
  "combat" category: Clarion Commander, Distant
  Horizon, Faith Unswerving, Gloom Razor, Perfect
  Clarity of Mind and Body, Reaping Talons, Scorching
  Sirocco, Shards of Granite, Stormguard Warrior.
  Citation correction: Table 2–1 is printed on
  pp. 30–31. Printed table-vs-text conflicts documented
  on the records (the descriptions govern): White Raven
  Defense and Shadow Blade prerequisites print "stance"
  in the description vs "maneuver" in Table 2–1; Shadow
  Trickster's illusion DC bonus is +2 in the text vs +1
  in the table.
- No duplicates against existing feats.
- Omitted as unmodeled systems: maneuvers and stances
  (summarized in class feature text), martial scripts
  and discipline items, monsters.

## Expanded Psionics Handbook (`src/data/expanded-psionics/`)

- 9 races, from the Chapter 1 "as characters" trait
  blocks: Dromite (p. 7), Duergar (Psionic) (pp. 8–9;
  id `duergar-psionic` to sit alongside the existing
  duergar material), Elan (pp. 9–10; explicitly no
  darkvision as printed), Githyanki (pp. 10–11),
  Githzerai (p. 11), Half-Giant (pp. 12–13), Maenad
  (pp. 13–14; no ability modifiers as printed),
  Thri-Kreen (pp. 14–15; 2 racial HD, recorded with
  `hitDie: "d8"`), Xeph (pp. 15–16). Vision and racial
  bonus feats (Dromite: Blind-Fight; Thri-Kreen:
  Deflect Arrows) are recorded as traits, since the
  race type has no structured fields for them.
- 4 base classes: Psion (Table 2–3, p. 20), Psychic
  Warrior (Table 2–4, p. 25), Soulknife (Table 2–5,
  p. 27), Wilder (Table 2–6, p. 30). Printed quirk
  noted on the Soulknife record: Table 3–1 (p. 35)
  lists soulknife skill points as 2 + Int, contradicting
  the class entry's 4 + Int; the record follows the
  class entry.
- 4 new skills: Autohypnosis (p. 36), Knowledge
  (psionics) (pp. 35–38), Psicraft (p. 38), Use Psionic
  Device (p. 38). None existed in the aggregates.
- 9 prestige classes: Cerebremancer, Elocater, Fist of
  Zuoken, Illithid Slayer, Metamind, Psion Uncarnate,
  Pyrokineticist, Thrallherd, War Mind.
- 84 feats: 18 general (Antipsionic Magic, Autonomous,
  Chaotic Mind, Cloak Dance, Closed Mind, Deadly
  Precision, Force of Will, Greater Manyshot, Hostile
  Mind, Mental Resistance, Mind over Body, Psionic
  Affinity, Psionic Hole, Rapid Metabolism, Reckless
  Offense, Sidestep Charge, Stand Still, Wild Talent),
  40 psionic feats filed "general" with the [Psionic]
  descriptor noted (Aligned Attack, Boost Construct,
  Combat Manifestation, Expanded Knowledge, Focused
  Sunder, Ghost Attack, Inquisitor, Mental Leap,
  Metamorphic Transfer, Narrow Mind, Overchannel,
  Talented, Body Fuel, Power Penetration, Greater Power
  Penetration, Power Specialization, Greater Power
  Specialization, Psicrystal Affinity, Improved
  Psicrystal, Psicrystal Containment, Psionic Body,
  Psionic Dodge, Psionic Endowment, Greater Psionic
  Endowment, Psionic Fist, Greater Psionic Fist,
  Unavoidable Strike, Psionic Meditation, Psionic Shot,
  Greater Psionic Shot, Fell Shot, Return Shot, Psionic
  Talent, Psionic Weapon, Greater Psionic Weapon, Deep
  Impact, Speed of Thought, Psionic Charge, Up the
  Walls, Wounding Attack), 13 metapsionic feats filed
  "metamagic" per the Complete Psionic precedent
  (Burrowing Power, Chain Power, Delay Power, Empower
  Power, Enlarge Power, Extend Power, Maximize Power,
  Opportunity Power, Quicken Power, Split Psionic Ray,
  Twin Power, Unconditional Power, Widen Power), 7
  item-creation feats (Craft Cognizance Crystal, Craft
  Dorje, Craft Psicrown, Craft Psionic Arms and Armor,
  Craft Psionic Construct, Craft Universal Item, Scribe
  Tattoo), and 6 epic feats (Epic Expanded Knowledge,
  Epic Psionic Focus, Improved Manifestation, Improved
  Metapsionics, Power Knowledge, Psicrystal Power).
- Duplicates skipped: exactly one — Open Minded, already
  in the data from Complete Adventurer (p. 104); the
  XPH printing (p. 49) is identical in effect. Contrary
  to the expectation going in, the XPH and Complete
  Psionic feat lists are almost entirely disjoint;
  Complete Psionic's in-data feats are its own
  originals, not XPH reprints.
- All metapsionic power-point costs verified against
  page images (Burrowing +2, Chain +6, Delay +2,
  Empower +2, Enlarge +0 — a printed quirk, noted on
  the record — Extend +2, Maximize +4, Opportunity +6,
  Quicken +6, Split Psionic Ray +2, Twin +6,
  Unconditional Power +8, Widen +4). Unconditional Power
  and Craft Psicrown appear in the feat descriptions
  but not in the initial table pass and were caught on
  the description pass. Printed conflicts noted on the
  records: Psionic Charge's prerequisite is Dex 13 in
  its description (p. 50) vs Wis 13 in Table 3–4 (the
  record follows the description); Sidestep Charge is
  printed [Psionic] in its description but listed as
  general in Table 3–4 (filed general per the table).
- Omitted as unmodeled systems / out of scope: psionic
  powers, power points and powers known (summarized in
  class feature text), psionic items and monsters
  beyond the playable race entries, epic progressions
  beyond the six epic feats above.

## Unearthed Arcana (`src/data/unearthed-arcana/`)

- 17 feats — the book's only standard-format feats
  usable outside a variant system: the Spelltouched
  feats of Table 3–4 (pp. 92–94), filed "general" with
  the [Spelltouched] descriptor noted: Accurate Jaunt,
  Bladeproof Skin, Breadth of Knowledge, Conductivity,
  Controlled Immolation, Eyes to the Sky, False
  Pretenses, Ineluctable Echo, Life Leech, Live My
  Nightmare, Momentary Alteration, Naturalized Denizen,
  Omniscient Whispers, Photosynthetic Skin, Polar
  Chill, Residual Rebound, Stench of the Dead. Their
  prerequisites are spell-exposure text, as printed.
- Omitted systems, documented rather than forced into
  app types (the book is a variant-rules toolbox):
  bloodlines — 37 bloodline trait tables (a level-based
  system, not templates); racial paragon classes — 11
  three-level classes (Drow, Dwarf, Elf, Gnome,
  Half-Dragon, Half-Elf, Half-Orc, Halfling, Human,
  Orc, Tiefling); prestige-class conversions of the
  bard, paladin, and ranger; generic classes (Expert,
  Spellcaster, Warrior); character traits — 35 drawback
  entries; flaws — 13 (Feeble, Frail, Inattentive,
  Meager Fortitude, Murky-Eyed, Noncombatant, Pathetic,
  Poor Reflexes, Shaky, Slow, Unreactive, Vulnerable,
  Weak Will); the Weapon Group proficiency feats — 14
  (part of the weapon-groups variant; omitted on the
  same judgment call as the other variant systems,
  while the standalone Spelltouched feats were added);
  and the remaining variant rules (gestalt characters,
  fractional base bonuses, sanity, taint, and the
  rest).

## Tome of Magic (`src/data/tome-of-magic/`)

- 3 base classes: Binder (pp. 9–14; Table 1–1, p. 11),
  Shadowcaster (pp. 111–116; Table 2–1, p. 112),
  Truenamer (pp. 198–203; Table 3–2, p. 199).
- 1 new skill: Truespeak (Int, trained only, p. 195;
  description pp. 232–234).
- 15 prestige classes: Anima Mage, Knight of the Sacred
  Seal, Scion of Dantalion, Tenebrous Apostate, Witch
  Slayer (pact magic); Child of Night, Master of
  Shadow, Noctumancer, Shadowblade, Shadow Smith
  (shadow magic); Acolyte of the Ego, Bereft, Brimstone
  Speaker, Disciple of the Word, Fiendbinder (truename
  magic). Cells settled against page images where OCR
  was ambiguous: Tenebrous Apostate advances divine
  spellcasting at levels 2–5 only ("at each level
  beyond 1st", pp. 63–64); Acolyte of the Ego's table
  (p. 204) prints full BAB with Fortitude good and
  Reflex/Will poor, contrary to the OCR first pass.
- 56 feats: 19 pact magic feats (Bind Vestige, Bind
  Vestige Improved — printed "Bind Vestige, Improved" —
  Defense against the Supernatural, Empower
  Supernatural Ability, Enlarge Supernatural Ability,
  Expel Vestige, Extend Supernatural Ability, Favored
  Vestige, Favored Vestige Focus, Ignore Special
  Requirements, Improved Binding, Practiced Binder,
  Rapid Pact Making, Rapid Recovery, Skilled Pact
  Making, Sudden Ability Focus, Supernatural Crusader,
  Supernatural Opportunist, Widen Supernatural
  Ability); 17 shadow magic feats (Favored Mystery,
  Nocturnal Caster, Path Focus, Greater Path Focus,
  Shadow Cast, Shadow Familiar, Shadow Reflection,
  Shadow Vision, Unseen Arrow, and the 8 metashadow
  feats filed "metamagic" with the [Metashadow]
  descriptor noted: Empower Mystery, Enlarge Mystery,
  Extend Mystery, Line of Shadow, Maximize Mystery,
  Quicken Mystery, Reach Mystery, Still Mystery); 20
  truename feats (Empower Utterance, Enlarge Utterance,
  Extend Utterance, and Quicken Utterance filed
  "metamagic" as the utterance analogues of the
  metamagic feats; Focused Lexicon, Obscure Personal
  Truename, Personal Truename Backlash, Truename
  Rebuttal, Truename Research, Truename Training,
  Minor Utterance, Utterance of the Evolving Mind,
  Utterance of the Crafted Tool, Utterance of the
  Perfected Map, Utterance Focus; and the 5 recitation
  feats: Recitation of the Fortified State, Recitation
  of the Meditative State, Recitation of the Mindful
  State, Recitation of the Sanguine State, Recitation
  of the Vital State).
- Printed conflicts noted on the records (descriptions
  govern): Defense against the Supernatural grants a
  +2 insight bonus in its description vs +1 in Table
  1–8; Bind Vestige, Improved lets you bind as a
  5th-level binder with vestiges up to 3rd level in its
  description vs the table's "up to 5th level";
  Improved Binding's description adds Intimidate 4
  ranks to its prerequisites; the recitation feats'
  Truespeak prerequisite is 9 ranks in the descriptions
  (p. 231) vs 6 ranks in Table 3–11.
- Omitted as unmodeled systems: vestiges and pact
  augmentation detail, shadow mysteries and paths,
  truespeak utterances and the three lexicons, truename
  spells and monsters (summarized in class feature text
  where they define a class or prestige class).

## Judgment calls applying to the whole batch

- Prestige class prerequisites are recorded as free
  text in the app's `prerequisites` string list (the
  PrestigeClassDefinition contract used by every earlier
  pack), with spellcasting/manifesting/binding
  advancement stated in the same text or in feature
  descriptions.
- Class skill lists are recorded as display names
  (e.g. "Knowledge (arcana)"), matching the resolver's
  name-based class-skill matching and the Complete
  Psionic pack's convention; "Knowledge (all)" is used
  where a book prints Knowledge (all skills, taken
  individually).
- Divine, psionic-descriptor, and spelltouched feats
  without a dedicated app category are filed "general"
  with the printed descriptor noted in the record, per
  the Complete Psionic precedent; metapsionic,
  metashadow, and utterance-modifying feats are filed
  "metamagic" on the same precedent.

## Verification

- `npm run check` (tsc): 0 errors. `npm run build`:
  succeeds (bundle index-BLwe256e.js).
- `vite preview`: HTTP 200, serving the new bundle;
  server stopped afterward.
- Resolver smoke test (esbuild bundle of a temporary
  script against the real modules, script deleted after
  the run): ten builds, all with zero validation
  errors — Human Warblade 6 with Stormguard Warrior
  and Human Crusader 5 / Ruby Knight Vindicator 2 with
  Divine Spirit (Tome of Battle); Xeph Soulknife 5 with
  Wild Talent, Half-Giant Psychic Warrior 4 (ECL
  adjustment +1), Elan Psion 4, and Thri-Kreen Ranger 3
  (ECL adjustment +4: 2 racial HD + LA +2) (Expanded
  Psionics); Human Rogue 4 with Stench of the Dead
  (Unearthed Arcana); Human Binder 5 with Improved
  Binding, Human Shadowcaster 4 with Shadow Familiar,
  and Human Truenamer 4 with Truename Training (Tome
  of Magic).
- Id-collision check: before this batch the aggregates
  held ALL_RACES 66, ALL_CLASSES 40,
  ALL_PRESTIGE_CLASSES 276, ALL_TEMPLATES 14,
  ALL_FEATS 1210, ALL_SKILLS 55. After the merge:
  ALL_RACES 75 (+9), ALL_CLASSES 50 (+10),
  ALL_PRESTIGE_CLASSES 308 (+32), ALL_TEMPLATES 14
  (+0), ALL_FEATS 1405 (+195), ALL_SKILLS 61 (+6) —
  every new record present exactly once, no internal
  duplicates, reconciling as Tome of Battle +3 classes
  / +1 skill / +8 prestige classes / +38 feats,
  Expanded Psionics +9 races / +4 classes / +4 skills /
  +9 prestige classes / +84 feats, Unearthed Arcana
  +17 feats, and Tome of Magic +3 classes / +1 skill /
  +15 prestige classes / +56 feats, with the one
  duplicate skip (Open Minded) documented above.
- NOT pushed to GitHub and NOT deployed in this pass —
  the parent agent verifies, pushes (which auto-deploys
  via the Pages workflow), and reports.

# Batch 8b addendum (2026-10-28): Weapons of Legacy, Heroes of Battle, Dragon Magic, Ghostwalk, Book of Vile Darkness, Exemplars of Evil

Merged into the barrel (`src/data/index.ts`) 2026-10-28 as
Batch 8b of the "all original books" program: the second
half of the sourcebooks shelf. All six books carry
ruleset "core". Sources are the copies in Shaun's durrum1
Dropbox library: Weapons of Legacy
(`/a poc dm related/desktop/Sourcebooks/Weapons Of Legacy.pdf`),
Heroes of Battle
(`/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf`),
Dragon Magic
(`/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf`),
and Exemplars of Evil
(`/a poc dm related/desktop/Sourcebooks/Exemplars of Evil (oef, act, bm, hq) (WTC109287200).pdf`)
from the Sourcebooks folder; Ghostwalk
(`/A POC PC related/5.Splat/Ghostwalk.pdf`) and Book of
Vile Darkness
(`/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf`)
from the Splat folder. Printed-page offsets: Weapons of
Legacy and Heroes of Battle, PDF page = printed + 1; the
other four, PDF page = printed. Only new data files, the
barrel, this addendum, and three cross-note `special`
fields (see Ghostwalk below) were touched; Shaun's locked
house rules and settings were not touched — the built
bundle still contains the "LOCKED OFF by Shaun" lock
text, and no engine, component, house-rules, or recovered
data file was modified.

Ghostwalk and Book of Vile Darkness are 3.0-era books
(2003 and 2002). Following the Races of Faerun precedent,
their records are written in 3.5 conventions: Alchemy →
Craft (alchemy), Intuit Direction and Wilderness Lore →
Survival, Pick Pocket → Sleight of Hand, Innuendo dropped
(folded into Bluff), Scry dropped (folded into
Spellcraft), Read Lips dropped (folded into Spot),
Expertise → Combat Expertise. Ghostwalk's PDF appends
Wizards of the Coast's own official Ghostwalk 3.5 update
booklet, which WAS used (it supplies the Arboreal
Guardian's replacement class-skill list, the Bone
Collector's Craft (Alchemy) requirement, the Deathwarden
Chanter's Perform (sing) 1 rank, the Ghost Slayer feat
correction, Empower Turning's +1d6, and the sample
ghost's type line and LA +0). The Book of Vile Darkness
PDF appends a fan-compiled FAQ/errata gathering (Sage
Advice quotes) after the book proper; it is NOT book text
and was not used as a source.

## Base-class verification (checked first, against the recovered data)

- Dragon Magic: the Dragonfire Adept was MISSING from
  the recovered dataset — added as a new base class in
  the Dragon Magic pack. Its draconic invocations and
  breath effects (Chapter 3) are an unmodeled system,
  noted on the record.
- Ghostwalk: Eidolon and Eidoloncer were both MISSING —
  both added in the Ghostwalk pack. Both are ghost-only
  classes for the Manifest setting.
- Weapons of Legacy, Heroes of Battle, Book of Vile
  Darkness, and Exemplars of Evil present no base
  classes.
- No discrepancies were found in recovered records for
  these books, and no recovered record was modified.

## Weapons of Legacy — 1 prestige class, 11 feats

Prestige class (Chapter 2): Legacy Champion (HD d8, BAB
three-quarter, Will good, 4 skill points; +1 level of
existing class features at every level except 1st and
7th, as printed in Table 2–1).

Feats (Chapter 2, Table 2–1 pp. 14–15, descriptions
pp. 13–16; Epic Legacy p. 219): Least Legacy, Lesser
Legacy, Greater Legacy, Channel Legacy, Curative Legacy,
Empower Legacy, Legacy Focus, Master Legacy, Quicken
Legacy, Transfer Legacy, Epic Legacy.

Duplicates skipped: none as feats (the Monkey Grip
sidebar on p. 29 and a Zen Archery mention reference
Complete Warrior feats already in the data; they are not
Weapons of Legacy feats).

Omitted systems: the legacy-item system itself — 49
legacy items (Chapter 3), the legacy rituals, and the
founding-legacies ability menus — does not fit the app's
record types and is documented here rather than
converted, like skill tricks in Batch 6.

Quirk: the book prints two different tables as
"Table 2–1" — Table 2–1: Legacy Feats (pp. 14–15) and
Table 2–1: The Legacy Champion (p. 20). Both citations
are recorded as printed; the duplication is the book's
own.

## Heroes of Battle — 4 prestige classes, 17 feats

Prestige classes (Chapter 5): Combat Medic (5 levels, d6,
+1 eligible spellcasting at all 5 levels), Dread Commando
(5 levels, d8), Legendary Leader (5 levels, d8), War
Weaver (5 levels, d4, +1 arcane spellcasting at levels
2–5).

Feats (Table 5–1, p. 97; descriptions pp. 96–99):
Ballista Proficiency, Block Arrow, Coordinated Shot,
Courageous Rally, Expanded Aura of Courage, Expert Siege
Engineer, Guerrilla Scout, Guerrilla Warrior, Mounted
Mobility, Natural Leader, Ready Shot, Shield Wall,
Veteran Knowledge, and the leader feats Extra Followers,
Improved Cohort, Inspirational Leadership, Practiced
Cohort.

Duplicates skipped: Plunging Shot — the identical feat
(Dex 13, Point Blank Shot; +1d6 damage against a target
at least 30 feet lower) is already in the data from Races
of the Wild.

Omitted systems: the 15 teamwork benefits (pp. 117–127;
the 16th "Benefit:" block in that chapter is the format
template, not a benefit), the commander ratings and auras
system, and the Chapter 6 spells (out of scope).

Quirk: Table 5–2 prints the Combat Medic with a poor
Will save (Fort poor, Ref good, Will poor), unusual for a
healer class; the table governs and the quirk is noted on
the record.

## Dragon Magic — 1 base class, 7 prestige classes, 35 feats

Base class: Dragonfire Adept (p. 24; d8, BAB half, Fort
and Will good, 4 skill points; breath weapon and
draconic invocations — invocations and breath effects
are an unmodeled system, noted on the record).

Prestige classes (Chapter 2): Diamond Dragon (+1
manifesting at every level except 1st and 6th), Dragon
Descendant (monk stacking), Dragon Lord, Hand of the
Winged Masters, Pact-Bound Adept (5 levels, +1 arcane at
2nd, 3rd, 5th), Swift Wing (+1 divine at every level
except 1st and 5th), Wyrm Wizard (+1 arcane at every
level except 2nd, 4th, and 6th, traded for spell
research).

Feats (Table 1–1, pp. 18–19; descriptions pp. 15–22):
Armor of Scales, Heart of Dragons, Slayer of Dragons,
Words of Draconic Power (ceremony feats); Dragonfire
Channeling (divine); Black Dragon Lineage, Blue Dragon
Lineage, Brass Dragon Lineage, Bronze Dragon Lineage,
Copper Dragon Lineage, Gold Dragon Lineage, Green Dragon
Lineage, Red Dragon Lineage, Silver Dragon Lineage,
White Dragon Lineage, Draconic Armor, Draconic
Knowledge, Draconic Senses, Draconic Vigor, Dragonfire
Assault, Dragonfire Inspiration, Dragonfire Strike
(draconic); Double Draconic Aura, Draconic Aura,
Dragontouched (general); Initiate of Aasterinian,
Initiate of Astilabor, Initiate of Bahamut, Initiate of
Falazure, Initiate of Garyx, Initiate of Hlal, Initiate
of Io, Initiate of Lendys, Initiate of Tamara, Initiate
of Tiamat (initiate). Each initiate feat also adds spells
to the cleric spell list; spells are out of scope and the
addition is noted on the record rather than converted.

Duplicates skipped: Draconic Heritage — Table 1–1 lists
36 feats, but the book itself states its Draconic
Heritage is reproduced "with minor changes introduced in
Races of the Dragon" from Complete Arcane, and that
record is already in the data. Parent-verification note:
the reprint's benefit grants the dragonblood subtype,
which the Complete Arcane record's summary does not
mention; flagged here in case the parent wants to amend
that record (builders do not edit recovered data).

Omitted: the 9 Chapter 1 races (Silverbrow Humans,
Deepwyrm Drow and Half-Drow, Fireblood Dwarves,
Forestlord Elves, Glimmerskin Halflings, Stonehunter
Gnomes, Frostblood Orcs and Half-Orcs, Viletooth
Lizardfolk) are delta subraces printed as "identical to
the base race except as noted" — documented, not
converted, per the Tundra Halfling / Crucian precedent.
The Draconic Class Features alternate class features
(p. 11) are an unmodeled system, documented here.
Chapters 3–5 (spells, invocations, breath effects,
soulmelds, a vestige, dragon aspects, monsters, campaign
material) are out of scope.

## Ghostwalk — 2 base classes, 4 prestige classes, 69 feats, 1 template

Base classes: Eidolon (p. 16, Table 1–1; d8, BAB full,
Will good, 2 skill points, bonus [Ghost] feat at 1st and
every even level, free multiclassing) and Eidoloncer
(pp. 17–18, Table 1–2; d6, BAB half, Will good,
+1 spellcasting at every level, bonus [Ghost] feats at
1st, 5th, 10th, 15th, 20th). Eidolons and eidoloncers
gain no weapon, armor, or shield proficiency, as printed.

Prestige classes: Arboreal Guardian (+1 divine at even
levels; class skills are the official update's
replacement list), Bone Collector (6 levels; own
Wisdom-based divine spell list, prepared as a cleric),
Deathwarden Chanter (+1 divine at every level), Ghost
Slayer (5 levels).

Template: Ghost (Ghostwalk), id `ghost-ghostwalk`
(pp. 163–165) — CR +1 from the book; the book prints no
level adjustment, and LA +0 and the outsider (augmented
humanoid, extraplanar, incorporeal) type line are from
the official update's replacement sample ghost. It is a
different template from the Monster Manual ghost in the
core data (a Ghostwalk ghost is not undead) and is
cross-referenced in the new record only.

Feats (pp. 28–39): Agony Touch, Circle Magic, Control
Visage, Corpse Malevolence, Corrupt Arcane Studies,
Corrupting Touch, Dancing Blade, Divine Energy Focus,
Ectoplasm, Education, Empower Turning (`empower-turning-gw`),
Enervating Touch, Ethereal Sidestep, Expanded
Possession, Extra Favored Enemy, Fade, Foe Hunter,
Forceful Staff Style, Freezing Touch, Frightful Moan,
Frightful Presence, Full Manifestation, Ghost Flight,
Ghost Glide, Ghost Healing, Ghost Hand, Ghost Ride,
Ghost Smiting, Ghost-Touch Spell, Gift of Tongues
(`gift-of-tongues-gw`), Grand Malevolence, Greater
Witchlight, Green Bond, Haunting Appearance, Haunting
Voice, Heighten Turning, Horrific Appearance, Improved
Control Visage, Improved Deflection, Improved Ghost
Flight, Improved Poltergeist Hand, Improved Turn
Resistance, Incorporeal Form, Incorporeal Spell
Targeting, Incorporeal Target Fighting, Kihu-Sherem
Guardian, Malevolence, Militia, Minor Malevolence,
Nauseating Touch, Poltergeist Hand, Poltergeist Rage,
Power Lunge, Quicken Turning (`quicken-turning-gw`),
Rend Ghost, Resist Ghost, Saddleback, Sculpt Ghost Body,
Shape Ectoplasm, Sherem-Lar Sorcery, Sherezem-Lar
Sorcery, Shriveling Touch, Solid Visage, Survivor,
Temper Ectoplasm, Touch Attack Specialization, Twin
Sword Style, Wise to Your Ways, Witchlight. [Ghost]
feats carry their path descriptor (Corrupter, Dominator,
Haunt, Poltergeist, Shaper, Traveler) on the record.

Same-name, genuinely-different feats: Ghostwalk's
Empower Turning (–2 turning check for +1d6 turning
damage, as updated) and Quicken Turning (free-action
turning at a –4 penalty on check and damage) differ from
the Complete Divine feats of the same names, and its
Gift of Tongues (Tereppek regional) differs from the
Races of Faerun feat of the same name. Per the Batch 5
precedent, the Ghostwalk printings are recorded with
suffixed ids and cross-notes, and the matching note was
appended to the existing records' `special` fields in
`src/data/complete-divine/feats.ts` (Empower Turning,
Quicken Turning) and `src/data/races-of-faerun/feats.ts`
(Gift of Tongues) — the one permitted edit outside this
batch's pack files.

Duplicates skipped: Diehard (the official update itself
directs readers to the Player's Handbook version, which
is in the data), Natural Spell (already in the data),
Extra Slot (Complete Arcane's 3.5 reprint is in the data;
Ghostwalk's original fixes the slot's level at selection,
a nuance noted here), Extra Wild Shape and Fast Wild
Shape (Complete Divine reprints are in the data), and
the Yuan-Ti Tainted One template printing (duplicates
the Races of Faerun record from Batch 7).

Omitted: four Chapter 5 templates that do not fit a
playable template record — Bonesinger (CR +0, no LA
printed), Broodguard (no LA; near-mindless), Monstrous
Vampire (no LA printed; the Monster Manual vampire
widened to non-humanoids), Mumia (CR +1, LA —) — plus
the Manifest setting material (the Veil of Souls, the
Manifest Ward, life epiphanies as a campaign rule) and
Chapter 6 monsters. The Chapter 1 skills section adds
uses, not skills; Knowledge (ghost lore) is a Knowledge
specialty appearing in class-skill lists, not a new
SkillDefinition, so no skills were added.

Quirks: the Ghost Slayer's requirements cite a feat
"Ghost Fighting" that does not exist anywhere in the
book — the feat is Incorporeal Target Fighting, and the
official update corrects the reference; the record
follows the update. The book prints the Deathwarden
Chanter's requirement as "Perform (sing)" with no rank;
the update supplies 1 rank.

## Book of Vile Darkness — 2 races, 17 prestige classes, 26 feats

Races (Chapter 2): Vashar (pp. 12–13; Medium humanoid
(human), bonus vile feat at 1st level in place of the
human bonus feat, human skill points, favored class Any)
and Jerren (pp. 13–14; Small humanoid (halfling), +2 Dex
/ −2 Str, +2 racial on Intimidate, Bluff, Move Silently,
and Listen, +1 racial on all saving throws, +2 morale
against fear, +1 racial on thrown-weapon attacks,
favored class Rogue). The book prints no level
adjustment for either race; both are recorded at LA +0.

Prestige classes (Chapter 5, Tables 5–1 through 5–18):
Cancer Mage, Demonologist (own Charisma-based
spontaneous list), Diabolist (+1 spellcasting at every
level), Disciple of Asmodeus (+1 at 1st, 3rd, 5th, 7th,
9th), Disciple of Baalzebul, Disciple of Dispater,
Disciple of Mammon, Disciple of Mephistopheles,
Lifedrinker (vampire-only), Mortal Hunter (outsider-only;
own Charisma-based spontaneous list), Soul Eater,
Thrall of Demogorgon (bonus feat or +1 spellcasting at
1st, 4th, 7th, 10th), Thrall of Graz'zt (+1 at 1st, 3rd,
5th, 7th, 9th, 10th), Thrall of Juiblex, Thrall of Orcus
(bonus feat or +1 spellcasting at 1st, 4th, 7th, 10th),
Vermin Lord (+1 at 1st, 3rd, 5th, 7th, 9th, 10th),
Warrior of Darkness.

Feats (Table 4–1, p. 48; descriptions pp. 47–50): Boost
Spell-Like Ability, Boost Spell Resistance, Corrupt
Spell-Like Ability, Empower Spell-Like Ability, Malign
Spell Focus, Mortalbane, Poison Immunity, Quicken
Spell-Like Ability, Violate Spell-Like Ability, Violate
Spell (metamagic), and the vile feats Dark Speech,
Disciple of Darkness, Evil Brand, Lichloved, Sacrificial
Mastery, Thrall to Demon, Verminfriend, Vile Ki Strike,
Vile Martial Strike, Vile Natural Attack, Willing
Deformity, Deformity (Clawed Hands), Deformity (Eyes),
Deformity (Face), Deformity (Gaunt), Deformity (Obese).

Duplicates skipped: Corrupt Spell (Complete Divine's 3.5
reprint is in the data) and the Ur-Priest prestige class
(Complete Divine's 3.5 reprint is in the data and
governs).

Omitted: the Bone Creature and Corpse Creature templates
(pp. 184–185) — spell-created undead whose entries print
no level adjustment — plus the archfiend chapters,
demon/devil monster content, spells, and magic items
(out of scope / not character-playable).

Quirks: the Disciple of Asmodeus's feature text grants
+1 spellcasting at 1st, 3rd, 5th, 7th, and 9th level,
while Table 5–4 also prints +1 at 10th; the text governs
and the conflict is noted on the record. Tables 5–5 and
5–7 print nonstandard base attack progressions for the
Disciple of Baalzebul (+7 at 9th, +8 at 10th) and the
Disciple of Mammon (beginning at +1); both are recorded
exactly as printed, and several Chapter 5 tables print
good saves in all three columns (Disciples of Dispater
and Mephistopheles, Lifedrinker, Soul Eater, Thrall of
Juiblex) — recorded as written.

## Exemplars of Evil — 16 feats

Feats (Table 1–1, pp. 22–23; descriptions pp. 23–26):
Divine Denial, Embody Energy, Evasive Maneuvers,
Generous Sacrifice, Gruesome Finish, Maiming Strike,
Mask of Gentility, Proteus, Slippery Skin, Strength of
Conviction, Twist the Knife, Uncanny Forethought,
Blessing of the Godless [Ceremony, Vile], Fell Conspiracy
[Ceremony], Beloved of Demons [Vile], Hellsworn [Vile].

Duplicates skipped: Evil Brand — the identical feat is
in from Book of Vile Darkness in this same batch.

Omitted: the 9 alternative class features in Chapter 1
(Blasphemous Incantation, Celestial Slayer, Favored of
the Fiends, Feign Death, Inspire Hatred, Invisible Fist,
Mimic, Spontaneous Affliction, Unholy Fury) — an
unmodeled system, documented here; the 7 villain
write-ups (NPC material, not character-playable); and
the villainous spells (out of scope). The "Feats from
Other Sources" sidebar (p. 25) paraphrases other books'
feats for the villain stat blocks, in places inaccurately;
it was NOT converted — those feats stand as printed in
their own books.

## Verification (2026-10-28)

- `npm run check` (tsc): 0 errors.
- `npm run build`: succeeds (bundle
  `dist/assets/index-DPDFhRIH.js`, ~2,039 kB); the bundle
  still contains "LOCKED OFF by Shaun".
- Vite preview: HTTP 200 (server stopped after the
  check).
- Resolver smoke test: one build per book exercising its
  new records (Legacy Champion; Combat Medic; Dragonfire
  Adept; an Eidolon with the Ghostwalk ghost template;
  a Jerren Disciple of Dispater; a rogue with Exemplars
  of Evil feats) — 0 validation errors across all six.
- Barrel totals before → after: races 75 → 77 (+2),
  classes 50 → 53 (+3), prestige classes 308 → 341 (+33),
  templates 14 → 15 (+1), feats 1,405 → 1,579 (+174),
  skills 61 → 61, equipment 495 → 495, magic items
  76 → 76. No duplicate ids in any aggregate.
- NOT pushed to GitHub and NOT deployed in this pass —
  the parent agent verifies, pushes (which auto-deploys
  via the Pages workflow), and reports.

# Batch 9 addendum (2026-10-28): the monster books — Monster Manual II, III, IV, V; Fiendish Codex I & II; Monsternomicon vols. 1 & 2

Batch 9 of the "all original books" program: the monster
books. New packs: src/data/monster-manual-iii/,
src/data/monster-manual-iv/, src/data/monster-manual-v/,
src/data/fiendish-codex-i/, src/data/fiendish-codex-ii/,
and additions to src/data/monsternomicon/ (mn1-feats.ts,
mn1-prestige-classes.ts). Monster Manual II
yields no records and gets no folder. Sources are Shaun's
PDFs in the durrum1 Dropbox (monster manuals folder;
Monsternomicon vol. 1 came from the /transfer/DnD-3.5/
folder — the copy inside the monster-manuals folder is a
corrupt non-PDF). MM IV, MM V, and Monsternomicon vol. 1
are image-only scans and were read via OCR with page-image
verification of every table and ambiguous cell. Only
creatures the books present as playable were converted —
a printed "X Characters" section, a printed trait list, or
a printed level adjustment — and only templates with a
printed level adjustment; monster entries themselves are
never converted.

## Monster Manual II — 0 records

The book (3.0-era) prints no level adjustment anywhere:
no "X Characters" sections, no feat chapter, and its
introduction's one PC example (an avolakia with LA +5) is
intro prose, not a race entry, so it is not converted.
The appendix's 9 templates (Captured One, Chimeric
Creature, Death Knight, Half-Golem, Monster of Legend,
Spellstitched Creature, Tauric Creature, Titanic
Creature, Warbeast) print no LA and are omitted. The
~216 monster entries are omitted as monsters.

## Monster Manual III — 18 races, 3 templates, 3 feats

Races (each from its printed trait list): Armand,
Dracotaur, Flind, Forestkith Goblin, Goatfolk (Ibixian),
Harssaf, Kenku, Lumi, Nycter, Poison Dusk Lizardfolk,
Quaraphon, Sand Giant, Skullcrusher Ogre, Crystalline
Troll, Naztharune Rakshasa, Warforged Charger, Warforged
Scout, Witchknife.

Duplicates skipped: Changeling, Shifter, Warforged —
already in from the Eberron Campaign Setting pack.

Templates (all LA +3): Spellwarped, Voidmind, Woodling.
Omitted: Living Spell (LA —) and Bonedrinker (a created
undead creature, not a template; LA —).

Feats: Shifter Defense, Improved Fortification, Mithral
Fluidity. Duplicates skipped: Extra Shifter Trait,
Healing Factor, Shifter Instincts, Adamantine Body,
Mithral Body.

Judgment calls: Nycter's natural armor (+3) is taken
from its stat blocks because its trait list omits it;
Warforged Charger's LA (+4) comes from its stat block
and its favored class from its entry text; Quaraphon's
speed is 40 ft per its trait list (its sample stat block
says 50 ft — the trait list governs, noted on the
record); Crystalline Troll's –4 Intelligence is kept as
printed; Spellwarped's CR modifier is recorded as the
printed schedule's middle step (+1 for 4–10 HD; +0 for
3 HD or fewer, +2 for 11+) because the schema takes a
single number, with the schedule spelled out on the
record. The remaining monster entries are omitted as
monsters.

## Monster Manual IV — 1 race, 1 template, 10 feats

Race: Varag (pp. 168–171), the book's one full PC
presentation ("For Player Characters: The Varag Racial
Class"), totals combined from the printed Base Traits
list and the racial-class increments. Printed quirk
kept and noted on the record: the trait list gives base
land speed 40 ft while the monster stat block (p. 168)
lists 60 ft; 40 ft is recorded, following the trait
list.

Template: Lolth-Touched (LA +1). Omitted: Web Mummy —
its block prints "Level Adjustment: —".

Feats (Monster Feats appendix, pp. 202–203): Ability
Focus, Awesome Blow, Clinging Breath, Craft Construct,
Flyby Attack, Githyanki Battlecaster, Githyanki
Dragonrider, Improved Natural Attack, Lingering Breath,
Multiattack. Duplicates skipped: Improved Toughness,
Powerful Charge, Quicken Spell-Like Ability (already in
the dataset).

Omitted: every other ECL-listed creature (the spawn of
Tiamat and others, listed on p. 204) prints only a
favored class and an LA in a "with class levels"
sidebar — no trait list — so none is converted (no
deriving traits from stat blocks). The remaining
monster entries and sample encounters are omitted as
monsters.

## Monster Manual V — 1 race, 7 templates, 7 feats

Race: Jaebrin (pp. 92–93), from its printed "Jaebrins as
Characters" trait list. The book's other ECL-listed
creatures (arcadian avenger, banshrae, elemental magi,
ethereal defiler, greenspawn zealot, shaedling, ushemoi,
the kuo-toa and hobgoblin variants, and the rest of the
p. 4 list) print no trait lists and are omitted.

Templates: the six god-blooded templates (Gruumsh-,
Imix-, Kord-, Orcus-, Vecna-, and Yeenoghu-Blooded; all
CR +1, LA +1, sharing the printed Divine Endurance
frame — free-action DR 10/— until it has prevented 40
points total, after which the template's benefits are
lost, Vecna's Cloak of Mystery expressly excepted) and
the Xorvintaal Exarch (p. 47; CR +1, LA +2, with its own
"PCs as Exarchs" sidebar). Omitted: Phantom and Thoon
Thrall (both print "Level Adjustment: —", verified on
the pages) and the Xorvintaal Dragon template itself
(prints no level adjustment).

Feats: Hover, Snatch, Wingover (Monster Feats appendix,
pp. 204–205), Battle Magic Tactics (hobgoblin section,
p. 84), Kuo-Toan Monasticism and Mind-Shattering Strike
(kuo-toa monitor entry, p. 97), Sense Quintessence
(Thoon infiltrator entry, p. 110). Duplicates skipped:
the appendix's Ability Focus, Awesome Blow, Flyby
Attack, Improved Natural Attack, Improved Toughness,
Multiattack, Powerful Charge, and Quicken Spell-Like
Ability (recorded from Monster Manual IV in this same
batch); the appendix's Empower Spell-Like Ability
(already in from Book of Vile Darkness — the appendix
printing allows three uses per day where the older
printing allows two); and the entry feats Mage Slayer
(Complete Arcane), Daunting Presence, and Brutal Throw
(Complete Adventurer). The remaining monster entries
are omitted as monsters.

## Fiendish Codex I — 13 feats (Abyssal Heritor only)

Per the batch scope, only the Abyssal Heritor feats of
Chapter 4 (pp. 82–87) were taken: Chaotic Spell Recall,
Claws of the Beast, Cloak of the Obyrith, Demonic Skin,
Demonic Sneak Attack, Eyes of the Abyss, Heart of the
Nabassu, Keeper of Forbidden Lore, Otherworldly
Countenance, Poison Talons, Precognitive Visions,
Primordial Scion, Vestigial Wings — each with its
printed "Special" drawback. The feat text governs over
Table 4–1 where they conflict, noted on the records:
Eyes of the Abyss darkvision 30 ft (table: 60 ft);
Claws of the Beast +1 damage per two heritor feats
(table: per feat); Vestigial Wings +3 Jump per heritor
feat (table: +2); Primordial Scion +1d6 damage per
four heritor feats (table: per two). Out of scope and
not taken: the chapter's general feats (Demon Mastery,
Extract Demonic Essence, Ordered Chaos, Poison Healer)
and vile feats (Dark Speech, Demonic Conduit, Evil
Brand, Thrall to Demon, Abyss-Bound Soul, Blood War
Conscript), and the rest of the book.

## Fiendish Codex II — 1 race, 27 feats, 4 prestige classes

Race: Hellbred (pp. 77–78). Its ability modifiers are
granted by the printed Infernal Aspect choice rather
than by the race itself, so abilityModifiers is empty
and both aspects (Body and Spirit, with their scaling
benefits) are described in full in the traits; size and
speed come from the sample stat block, noted on the
record. LA +0; favored class paladin.

Feats (Table 3–1, pp. 81–85): Brand of the Nine Hells
and the nine layer Marks (Mark of Avernus, Mark of
Dis, Mark of Minauros, Mark of Phlegethos, Mark of
Stygia, Mark of Malbolge, Mark of Maladomini, Mark of
Cania, Mark of Nessus), Dilate Aura, Rapid
Regeneration, Supernatural Instincts, Undo Resistance,
Vengeful Surge; the six devil-touched feats (Devil's Aura,
Devil's Favor, Devil's Flesh, Devil's Sight, Devil's
Stamina, Devil's Tongue); the five [Divine] feats
(Divine Armor, Divine Fortune, Divine Justice, Divine
Resistance, Divine Ward); and one metamagic feat
(Disrupting Spell). The [Divine] feats are recorded
with category "general" because the feat schema has no
"divine" category (Complete Divine pack precedent),
each tagged "[Divine] feat." in its special field.
"Persistent Refusal" is spelled per the feat texts;
Table 3–1 misprints it "Persistant."

Name collision handled per the standing exception:
this book's Divine Justice is a genuinely different
feat from the Player's Handbook II Divine Justice
already in the dataset (spend a turn/rebuke attempt as
a swift action for +2d6 damage against evil outsiders
for 1 round plus shaken, versus marking an opponent
and returning his damage). It is recorded as
divine-justice-fc2 with a cross-note in its special
field, and the matching cross-note was appended to
the existing record's special field.

Prestige classes: Hellbreaker, Hellfire Warlock,
Hellreaver, Soulguard (the last advances spellcasting
only from 2nd level, as printed). The book's devils
are monsters and are omitted as such; the book prints
no templates.

## Monsternomicon vol. 2 — 1 race, 2 templates, 2 base classes, 1 skill, 1 prestige class

Race: Efaarit (entry p. 62, traits p. 63; 2d8 HD,
LA +1). Omitted: the Tharn Bloodtrackers (their stat
block prints LA +2 but no trait list exists anywhere
in the book — not derived from the stat block) and
the five Skorne ethnic variants (Kademesh, Kajar,
Kasortaan, Malzash, Sortaani — delta blocks against
a base Skorne race printed in neither volume).

Templates: Deathless (CR +3, LA +8) and Genzoul
(CR +2, LA +4). Omitted: Revenant (CR +2 printed but
no LA line in its "Creating a Revenant" block,
verified) and the Quickplates and Skorne Conditioning
systems (modification systems with no LA).

Base classes: Mortitheurge (pp. 226–231) and Paingiver
(pp. 222–225) are printed in this book as full 20-level
base classes and are recorded as printed (progression
rows capped at levels 1–10 per the app convention);
in the Iron Kingdoms Character Guide the mortitheurge
appears as a prestige class instead — noted here
because the two presentations differ. Paingiver skill
points are printed as "5 + Int modifier" and recorded
as printed.

Skill: Profession (Torturer) (p. 225), a full
standalone skill write-up in the Paingiver section.

Prestige class: Extoller (pp. 232–234; skill points
2 + Int per the printed text). The rest of the volume
is monsters and Skorne setting material, omitted as
such.

## Monsternomicon vol. 1 — 0 races, 1 feat, 3 prestige classes

Races: none added. The Playable Races appendix
(pp. 236–239) prints full trait lists for Gobber,
Bogrin (variant traits printed as additions to the
gobber list in the same appendix), Trollkin, Ogrun,
and Nyss — but all five duplicate records already in
the dataset from the Iron Kingdoms pack (the Iron
Kingdoms Character Guide presentation of the same
peoples, with identical ability modifiers), so they
are skipped as duplicates per the standing rule; the
Batch 9 conversion written for them was removed
again once the duplication was caught in the totals
check. One source difference is flagged in the
Discrepancies section below. The appendix's dwarves
and elves are presented only as differences from the
Player's Handbook races ("identical to those in the
PH, except where noted below"), and its half-elves
sidebar is the same — delta-only presentations with
no complete trait list, not converted.

Feat: Stronghammer Smith (ogrun racial feat, p. 239;
its 3.0-form prerequisites "Str 15+, Int 8+" are
recorded in modern form and noted on the record).

Prestige classes (appendix): Adventuring Scholar
(pp. 219–223), Bone Grinder (pp. 224–228), Monster
Hunter (pp. 229–233). All three progression tables
were verified against page images. Two printed
text/table conflicts are recorded as printed, with
the class-features text followed (this batch's
convention) and the conflict noted on the record:
Adventurer's Zeal (text: 3rd level; Table 1-1: 4th)
and the monster hunter's final improved-tracking
step (text: 10th level; Table 1-1: 9th). The classes'
3.0 skill names are recorded with their 3.5
equivalents (Alchemy = Craft (alchemy); Wilderness
Lore = Survival; Animal Empathy folded into Handle
Animal; Intuit Direction dropped in 3.5); the Iron
Kingdoms skills the book prints (Creature Lore, Lore,
Craft (bone grinding), Craft (dissection)) stand as
printed in prerequisites and class-skill lists.
Omitted: the Legend & Lore appendix's nine creature
variants (Alpha Hunter, Bloodthirsty, Crafty,
Deepdweller, Holy, Maligned, Stealthy, Tough, Urban —
monster variants, no LA printed anywhere in the
appendix, verified), Quickplates (construct
modifications, no LA), the monster-hunter gear and
traps (equipment, out of scope for this batch), the
Tomes of Lore (lore, not character content), and the
bestiary entries as monsters.

## Discrepancies in existing data (report-only)

One candidate, beyond the Fiendish Codex II /
Player's Handbook II Divine Justice name collision
handled above under the sanctioned cross-note
exception: level adjustments for three Iron Kingdoms
races. The existing Iron Kingdoms pack records (from
the Character Guide) give Gobber, Bogrin, and Nyss
each a level adjustment of +1. Monsternomicon
vol. 1's Playable Races appendix prints full trait
lists for all three with NO level adjustment line
(which in that appendix's presentation means LA +0 —
the same appendix expressly prints "Level Adjustment
+1" for Trollkin and Ogrun, matching the existing
records). The two books genuinely differ (vol. 1 is
the 2002 3.0 printing; the Character Guide records
stand as the dataset's source), so nothing was
changed; the parent may judge whether the existing
records should note the variant. One caution from the build:
the PHB II Divine Justice record shares its special
field's stock "[Divine] feat." text with seven other
records, so the cross-note edit was aimed with
full-line context and verified by reading the file
afterward; the parent may wish to eyeball
src/data/players-handbook-ii/feats.ts (the
divine-justice record) when reviewing.

## Verification (2026-10-28)

- `npm run check` (tsc): 0 errors.
- `npm run build`: succeeds (bundle
  `dist/assets/index-DKMURtUS.js`, ~2,191 kB); the bundle
  still contains "LOCKED OFF by Shaun".
- Vite preview: HTTP 200 (server stopped after the
  check).
- Resolver smoke test: one build per yielding book
  (a Warforged Scout with the Spellwarped template; a
  Varag with Lolth-Touched; an Abyssal Heritor feat
  build; a Hellbred Soulguard and a warlock/Hellfire
  Warlock; a Jaebrin beguiler with Orcus-Blooded and
  Xorvintaal Exarch templates; an Efaarit Mortitheurge
  with Extoller levels and a Genzoul template; an
  Efaarit Paingiver with Profession (torturer) ranks; a
  Trollkin fighter/Monster Hunter with Stronghammer
  Smith; a Nyss ranger/Adventuring Scholar) — 0
  validation errors, 0 warnings across all ten builds.
- Barrel totals before → after: races 77 → 99 (+22),
  classes 53 → 55 (+2), prestige classes 341 → 349
  (+8), templates 15 → 28 (+13), feats 1,579 → 1,640
  (+61), skills 61 → 62 (+1), equipment 495 → 495,
  magic items 76 → 76. No duplicate ids in any
  aggregate (the five Monsternomicon vol. 1 appendix
  races were caught by exactly this check — they
  duplicate the Iron Kingdoms pack's records and were
  removed again before this verification ran).
- NOT pushed to GitHub and NOT deployed in this pass —
  the parent agent verifies, pushes (which auto-deploys
  via the Pages workflow), and reports.
## Batch 10 — Iron Kingdoms remainder: Liber Mechanika, Lock & Load (2026-10-28)

All records ruleset "iron_kingdoms". Sources are Shaun's PDFs in the durrum1 Dropbox; every record cites book + page in `source` and the Dropbox path in `sourceUrl`. Five Fingers: Port of Deceit is NOT in the Dropbox library (title and filename searches returned nothing), so no five-fingers pack was created; the book is skipped, not substituted.

### Liber Mechanika (Privateer Press, 2005) — new pack `src/data/liber-mechanika/`
The Dropbox PDF (`/transfer/DnD-3.5/103250213-Iron-Kingdoms-Liber-Mechanika-by-Azamor.pdf`) is an image-only scan; text was recovered by OCR with page-image verification of every class/feat table and every equipment table used. Book page = PDF page − 1.

- **Base class (1):** Arcane Mechanik (pp. 9–12) — the Iron Kingdoms Character Guide's arcane mechanik was never in the dataset, so this is new, not a duplicate. Added: `arcane-mechanik`.
- **Prestige classes (4):** Field Mechanik (pp. 14–15), Ironhead (pp. 16–17), Preceptor of Cyriss (pp. 18–20), Mechanist (pp. 20–22).
- **Feats (15, pp. 22–26):** Calloused Hands, Craft Cerebral Matrix, Craft Cortex, Craft Cyriss-Tech, Craft Mechanikal Construct, Craft Mechanikal Prosthetic, Craft Steam Armor, Etch Rune Plate, Exotic Armor Proficiency (Steam Armor), Mechanikal Aptitude, Mechanikal Secrets, Mechanikal Specialty, Quick Fix, Rugged Mechanika, Union Steamo. The chapter presents itself as reprinting the IKCG's arcane-mechanik feats in revised form ("supersede the rules in the IKCG"), but none of the fifteen duplicates an existing record — the existing iron-kingdoms pack converted only IKCG Chapter 5 general/racial feats, and none of these fifteen is among them — so all fifteen are net-new and no cross-notes were needed. The book's [Society] feat type is filed under the app's "setting-specific" category.
- **Equipment (166):** Light and Heavy steam armor (Table 1–8) with their printed combat statistics in the notes; 8 steam armor rigs (Table 1–12); mechanikal arm and leg plus all 11 limb enhancements (Table 1–13); 8 mechanik melee weapons (Table 1–18) and 6 ranged-weapon/ammunition entries (Table 1–19); 23 adventuring gear items (Table 1–20); 58 alchemical supplies (Table 1–21 — Liber Mechanika prints no descriptions for these; the notes say so and point to the IKCG descriptions at pp. 304–313, per the table's own footnotes); 12 clothing items (Table 1–22); 26 tools, kits, and gaming items (Table 1–24); 10 trade goods (Table 1–25). Same-name/different-item collisions resolved with suffixed ids and the records left otherwise untouched: `potion-belt-lm` (IK 10 gp belt vs the 1 gp core SRD record), `gunsmiths-kit-lm`, `embalming-fluid-lm` (20 gp/pint vs the sorcery & steam document's 50 gp version), `spyglass-lm`, `acid-standard-lm`, `antitoxin-standard-lm`, `armored-apron-lm`, `alchemists-apron-lm`, `anvil-lm`, `trapmakers-kit-lm`.
- **Deliberately omitted (unmodeled systems / non-item content), with counts:** the steam-armor construction tables — critical-hit Table 1–9, armor enhancement tiers (Table 1–10, five tiers), power plant enhancements (Table 1–11, three named plants); the servitor subsystem (pp. 41–49): 2 servitor types in 4 size variants with full stat blocks (Manikin Small/Medium, Mite Tiny/Small), 3 servitor engines, 11 servitor enhancements, and the mechanikal familiar rules (Table 1–14); the firearm customization options (pp. 54–55): Balanced Multi-barreled, Bracer Pistol, Ghordson Breechlock, and Bullyboy ammunition; the industrial services price list (Table 1–23, 16 services — services, not items); all of Chapter 2, "The Foundry" (pp. 63–106) — the Ars Mechanika mechanika-construction system (Tables 2-1 through 2-15: warcaster armor, item design parameters, power sources, components, rune plates and conduits, damaged mechanika) including the Cyriss-tech subsystems (avatar clocks in 7 sizes, devotional engines, nexus accumulators in 4 sizes, stele clocks, nexus cores, vessels of Cyriss) and the Chapter 2 Cyriss servitor stat blocks (Monitor, Sentry, and others); all of Chapter 3, "Minds of Metal, Hearts of Fire" (pp. 107–125) — the steamjack customization system (Tables 3-1 through 3-7). No skill records: Liber Mechanika prints no skill write-ups (Jack Handling and Craft (mechanika) are used throughout but their rules live in the IKCG, which the book cites).
- **Printed quirks kept and noted on the records:** Arcane Mechanik Table 1–1's base attack bonus jumps from +3 at 5th level to +5 at 6th (image-verified; standard three-quarter progression would give +4), and the class's printed Reflex save is poor, not good. Mechanist Table 1–6 prints a nonstandard BAB sequence (0, 1, 2, 2, 3). Field Mechanik's class skill list prints "Spot (Int)". Preceptor of Cyriss's prerequisites print "Knowledge (arcane)" for Knowledge (arcana). Ironhead's feature is spelled "Full Metal Arm" in the book. The Arcantrik Torch's Fuse setting is 2d4 damage in Table 1–17 but 1d6 fire damage in the description text (p. 51) — both figures are recorded on the item. Steam armor enhancement Table 1–13 prints a −5% spell failure adjustment for Enhanced Dexterity and a 20% figure for Spikes, recorded as printed. Jansenov's Recognizer in Table 1–15 is the same enhancement described as Jansenov's Glyph Gate in the text (likewise Porter's Carriage / Porter's Scabbard); both servitor items are omitted with the servitor subsystem.

### Lock & Load: Iron Kingdoms Character Primer (Privateer Press, 2002) — new pack `src/data/lock-and-load/`
The Dropbox PDF (`/transfer/DnD-3.5/10936572-Privateer-Iron-Kingdoms-Lock-Load.pdf`) is likewise an image-only scan, recovered by OCR with page-image verification of every stat line converted. Lock & Load is a 3.0-era book (its cover states it requires the D&D Player's Handbook, Third Edition), so it is recorded in 3.5 conventions with its 3.0 format noted (Races of Faerun precedent): its weapons use the 3.0 stat-block format — proficiency, the weapon's own size category, and a single damage value for the weapon as sized — and the records keep the printed values and say so. As expected, the book overlaps the later Iron Kingdoms Character Guide heavily, and most of it was already in the dataset.

- **Equipment (32) and magic items (1)** — everything net-new is in the gear chapter (pp. 52–57): 16 named weapons (Chain (Light), Cleft Arrow, Cleft Greatsword, Cleft Spear, Collapsing Baton, Collapsing Staff, Cryxian Dirk, Folding Knife, Gaff, Gaff Spear, Katrena's Hook, Khardic Composite Shortbow, Mechanoflail (Light), Menoth's Sting, Nyss Claymore, Ogrun Warcleaver); 4 named Iron Kingdoms firearms (Military Pistol, Small Pistol, Long Rifle, Military Rifle — distinct items from the generic firearms already in the sorcery & steam pack, with their printed reload actions and Craft (small arms) DCs); 4 grenades (Explosive, Flash, Incendiary, Smoke — all priced "Military issue only", as printed); 4 basic firearm charges (Military Pistol, Small Pistol, Long Rifle, Military Rifle/Carbine); the Iron Mantle armor (armor bonus +2, worn by clerics of Cyriss, with its printed light-armor stacking rules); Collapsible Oar; Gobber Poncho; and the Inflatable Raft Pack. The Robe of Gobberkind (p. 57) is the one item the book itself labels a magic item, and is filed as one.
- **Duplicates skipped, named:** all ten of the book's non-human race entries are earlier printings of records already in the dataset — Rhulfolk dwarf, Iosan, Nyss, half-elf, goblin (the standard goblin, already in core), common gobber, bogrin, ogrun, trollkin, and the trollkin sorcerer variant printed inside the trollkin entry (the dataset's records follow the Iron Kingdoms Character Guide). The ogrun's racial feat Stronghammer Smith is already in the dataset from Monsternomicon vol. 1. Eleven gear items are identical to Liber Mechanika records and were skipped: Ammunition Bandolier, Field Glass, Flint Striker, Goggles, Holster, Holster (Wrist-Loader), Magnified Bull's-Eye Lantern, Mechanik's Boots, and Pocket Watch, plus the Armored Apron and Greatcoat (same garments — see the discrepancy note below), and the Hand-Pump (printed in Lock & Load only as part of the Inflatable Raft Pack, not separately priced; Liber Mechanika's standalone record covers it).
- **Deliberately omitted, with counts:** the eleven human ethnicities (Khard, Kossite, Skirov, Umbrean, Midlunder, Morridane, Thurian, Tordoran, Caspian/Sulese, Idrian, Scharde) — the existing iron-kingdoms pack deliberately did not convert the Character Guide's human ethnicities, and the same call is applied to their 3.0 predecessors here; the character-classes chapter (pp. 30–37), which adjusts the ten PHB classes for the setting rather than presenting new classes — its largest piece, the no-spells Iron Kingdoms ranger variant ("Scout", with Alertness at 1st level and bonus feats at 4th/8th/12th/16th/20th), is a variant class of the kind the app does not model (Unearthed Arcana precedent); the religion chapter (pp. 40–51), including the patronage benefits that grant existing core feats (Weapon Focus, Silent Spell, Dodge, Iron Will, Extra Turning) to patrons of the Ascendants and Scions — a setting system, not new feats; the double-barreled firearm modification (+150% of the base firearm's cost) and the shoddy/flawed firearm quality rules; bayonets, which are pictured in the gear chapter but never given statistics; the languages table (p. 58), character sheets, and the kingdom appendix; and the races sidebar (p. 6) assigning level adjustments to eight Monsternomicon races (Skorne +1, Satyxis +2, Farrow +4, Bog Trog +5, Dregg +5, Gatorman +6, Black Ogrun +9, Troll +12) — an LA alone, without a playable trait list in either book, is not a race record.
- **Printed quirks kept and noted on the records:** the Folding Knife's stat line prints a blank where its weight belongs; the Khardic Composite Shortbow's proficiency is printed "Simple"; Menoth's Sting deals a flat 1 damage; several items are priced only as "Military issue only", "Only available to cultists of Cyriss", or "Varies", recorded as printed.
- **Discrepancies in existing data (report-only, nothing changed):** (1) Lock & Load prints no level adjustment for the gobber, bogrin, or Nyss — corroborating Monsternomicon vol. 1's appendix (Batch 9) — while the dataset's records, following the Iron Kingdoms Character Guide, carry LA +1 for all three; the Character Guide remains the governing source. (2) Lock & Load prints full armor statistics for the Armored Apron (light armor: armor bonus +2, maximum Dex bonus +4, armor check penalty −2, arcane spell failure 15%, 20 lb, 30 gp) and a stacking +1 armor bonus for the Greatcoat (20 gp, 5 lb); the dataset's records for both garments come from Liber Mechanika's clothing table, which prints no armor statistics, so both records currently carry none.

### Totals after Batch 10
Races 99, base classes 56 (+1), prestige classes 353 (+4), templates 28, feats 1,655 (+15), skills 62, equipment 693 (+198: 166 Liber Mechanika + 32 Lock & Load), magic items 77 (+1).

### Verification (Batch 10)
- `npm run check` (tsc) passes with 0 errors.
- `npm run build` succeeds; the built bundle still contains the string "LOCKED OFF by Shaun" (the hard-locked cross-class house rule is untouched — no engine, component, or recovered data file was modified; new files are the liber-mechanika and lock-and-load packs, plus the barrel wiring and this addendum).
- Vite preview serves HTTP 200 (stopped after the check).
- Resolver smoke test (esbuild bundle of the real resolver over five character builds — one per Liber Mechanika class/prestige combination that yielded records, plus a Nyss ranger carrying Lock & Load weapons, armor, grenades, charges, and the Robe of Gobberkind): 0 validation errors on all five builds (one feat-slot warning on the arcane mechanik test build, which deliberately selects the class-granted Etch Rune Plate as a chosen feat — a test-build artifact, not a data error).
- Before/after aggregate dump of the real barrel: races 99→99, classes 55→56, prestige classes 349→353, templates 28→28, feats 1,640→1,655, skills 62→62, equipment 495→693, magic items 76→77. Aggregate growth equals the net-new records written exactly, and no aggregate contains a duplicate id.
- NOT pushed to GitHub and NOT deployed in this pass — the parent agent verifies, pushes (which auto-deploys via the Pages workflow), and reports.

## Batch 11a — Magic Item Compendium (2026-10-28)

### Magic Item Compendium (Wizards of the Coast, 2007) — new pack `src/data/magic-item-compendium/`
The Dropbox PDF (`/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf`) parses cleanly and carries an OCR text layer; extraction was font-aware (item headings, stat labels, and body fonts are distinct in this book) with a print-page map (print page = PDF page − 1). Thirty-six entries whose headings the OCR layer damaged were recovered by hand from their body text, with prices cross-checked against Appendix 1 and Cost to Create ×2. All 924 records are ruleset "core"; every record cites book + section + page in `source` and the Dropbox path in `sourceUrl`. Summaries are short mechanical restatements (cost, weight where the schema holds it, and the item's actual effect); the book's aura and caster level ride at the end of each magic item's summary in the house style.

- **Magic items (833):** armor properties (66) and weapon properties (115) filed as `armor-or-weapon-special-ability`, names suffixed "Armor Special Ability"/"Weapon Special Ability" per the core and Sorcery & Steam convention; synergy variants are separate records with the prerequisite noted, and synergy variants with no printed Property line claim no scope. Augment crystals (27 — 14 armor/shield, 13 weapon) filed under a new category `augment-crystal`, one record per book entry carrying all three grade prices and effects (the book's own structure). Clothing chapter (380) and Tools chapter (189) filed by DMG-style category (ring/rod/staff/wand by name or slot, else wondrous); the 32 runestaffs are in Tools as `staff` with attunement noted on each. Item-set pieces (56) filed as their own items with the set named in the summary; set membership was taken from each set's printed "Pieces and Abilities" table, not page ranges (the tables place Mask of Mastery and Helm of Wounding Sight in Armor of the Watching Master, across the page boundary the range method got wrong).
- **Equipment (91):** the book's specific armor and shields (25, incl. Bearskin Armor recovered by hand) and specific weapons (66) filed as equipment so equipped armor feeds sheet AC; all 25 specific armor/shield `acBonus` values hand-verified against the entry text (total including enhancement). Weapon statistics and effects ride in `notes`, per house convention.
- **Judgment calls (flagged for the parent):** augment crystals and runestaffs were both INCLUDED. Each crystal entry is a discrete priced item that fits the magic-item record shape cleanly, and each runestaff is a discrete named item with a full stat block (Chapter 4) that fits the existing `staff` category exactly. The systems around them (crystal attachment rules, runestaff attunement rules, item levels, custom item creation) are rules text and were omitted as systems, below.
- **Duplicates skipped:** none identical — MIC's SRD reprints are largely not in the dataset (core magic items are a representative set of 63), and every candidate was checked against the full barrel dump; exactly one name collision in the whole book. **Bladed Crossbow:** the existing record (`src/data/core/new-equipment.json`, Dragon Magazine #349) is a mundane 150 gp weapon; MIC's is a specific magic weapon (4,660 gp, +1 heavy crossbow/+1 battleaxe) — genuinely different, so the MIC record is `bladed-crossbow-mic` and a cross-note was appended to the existing record's notes (the sanctioned exception; no other existing data file was touched).
- **Deliberately omitted (unmodeled systems), with counts:** Chapter 6 rules (pp. 217–234) — item levels and the body-slot system as rules, custom item creation and pricing guidelines, and the treasure-generation method; Appendices 1–2 (pp. 235+) — the item-level/treasure tables (1,100+ table rows, not items); the 14 item sets' collection-benefit ladders as a system (all 56 set pieces ARE included as items; the worn-count benefits have no record type); runestaff attunement rules as rules text (the 32 runestaffs themselves are included).
- **Printed quirks kept and noted:** the Runestaff of Passage's aura is printed "Strong necromancy" (DC 24) despite its teleportation spells — recorded as printed. Death Ward's aura is printed with no school ("Moderate; (DC 18)") — recorded as printed. Skill Shard, greater is 300 gp in its entry stat block (Appendix 1's table says 200 gp; the entry governs). The Appendix 1 tables misspell "Desiccating" (two s's) and carry other merged-cell errors — entry stat blocks governed throughout. Energy Surge's synergy prerequisite is a list (corrosive, flaming, frost, or shock), recorded in full. The Choker of Life Protection's body text calls the item a "collar" — as printed. The set table lists "Barb of retribution" while the item's own entry heading is "Barbs of Retribution" — the heading governs the record name. The Eternal Wand's aura is printed "school of spell" (a placeholder in the book) — as printed.
- **Discrepancies in existing data (report-only, nothing changed):** none found beyond the Bladed Crossbow namesake above.

### Totals after Batch 11a
Races 99, base classes 56, prestige classes 353, templates 28, feats 1,655, skills 62, equipment 784 (+91), magic items 910 (+833).

### Verification (Batch 11a)
- `npm run check` (tsc) passes with 0 errors.
- `npm run build` succeeds; the built bundle still contains the string "LOCKED OFF by Shaun" (the hard-locked cross-class house rule is untouched — no engine, component, or recovered data file was modified; changes are the new magic-item-compendium pack, the barrel wiring, one cross-note in `src/data/core/new-equipment.json`, and this addendum).
- Vite preview serves HTTP 200 (stopped after the check).
- Resolver smoke test (esbuild bundle of the real resolver over two character builds: a fighter wearing MIC Bearskin Armor with an MIC specific weapon, an armor property, and two augment crystals in inventory; a wizard with an attuned MIC runestaff equipped, MIC set piece and wondrous items, and MIC Zombie Hide Armor in inventory): 0 validation errors and 0 warnings on both builds.
- Before/after aggregate dump of the real barrel: races 99→99, classes 56→56, prestige classes 353→353, templates 28→28, feats 1,655→1,655, skills 62→62, equipment 693→784, magic items 77→910. Aggregate growth equals the net-new records written exactly, and no aggregate contains a duplicate id.
- NOT pushed to GitHub and NOT deployed in this pass — the parent agent verifies, pushes (which auto-deploys via the Pages workflow), and reports.

## Feature addendum (parent, 2026-10-28): Prestige-class prerequisite gating
Shaun's order (2026-10-28): prestige classes grayed out and blocked off unless prerequisites are met. New engine module `src/engine/prestige-prerequisites.ts` evaluates the free-text prerequisites against the resolved build. Hard-checked families: BAB, base saves (recomputed from progression rows), skill ranks (incl. any-two/any-four forms, alternations, 3.0->3.5 skill aliases), named feats (incl. category counts and any-of lists, Combat Expertise alias), alignment, race/type/subtype, size, character/class level, ability scores. Spellcasting, class features, languages, proficiencies, deity/organization/story requirements evaluate as "special": the app models no casting/feature progression data, so each special entry carries a per-entry "I meet this requirement" certification checkbox persisted on the build (`prestigePrereqCertifications`); legacy saved builds load safely. Unmet classes render grayed with the Add control disabled and per-prereq met/unmet itemization in `step-classes.tsx`; `addPrestigeLevel` refuses gated adds; already-taken classes are never stripped — the resolver raises an error validation issue and further levels block. Coverage over the 353 prestige classes: 63 fully machine-checkable, 290 with at least one special entry (most often the spellcasting one — expected to convert to hard checks when the Batch 12 spell integration gives the app casting data). Scripted evaluator test: 33/33 checks pass (scratch ~/prcgate-work/test-gate.ts). Files: engine/prestige-prerequisites.ts (new), engine/types.ts, engine/resolver.ts, lib/use-character-build.ts, components/steps/step-classes.tsx, lib/entity-descriptions.ts, pages/builder.tsx (prop pass-through). Pushed jointly with Batch 11a.

## Batch 11b — Equipment sweep, part 2 (2026-10-28)

The equipment/magic-item chapters of every book built in Batches 1–10 were skipped at the time; Shaun caught this on 2026-10-27 and ordered the sweep. This batch goes back through all 37 in-scope books and converts what fits the existing `EquipmentItem` / `MagicItemDefinition` record types. New files only: `equipment.ts` / `magic-items.ts` added to the existing pack folders (25 equipment files, 27 magic-item files), merged into `ALL_EQUIPMENT` / `ALL_MAGIC_ITEMS` in the barrel. Rulesets follow each book (Eberron books "eberron", Sorcery & Steam "sorcery_steam", Monsternomicon "iron_kingdoms", everything else "core"). Specific magic armor/weapons are filed as equipment so armor feeds sheet AC (MIC convention). Iron Kingdoms books were already done in Batch 10 and are excluded; Weapons of Legacy items stay omitted (Batch 8b decision). Duplication was heavy, as expected — the Magic Item Compendium (Batch 11a) and the crystalkeep fan index in `src/data/core/new-equipment.json` had already captured most splatbook items, and every candidate was checked against the full barrel dump (name, comma-inverted alias, and id) before inclusion.

### Per-book results (net-new records; E = equipment, M = magic items)

- **Races of Stone — 20 E, 5 M.** Ch. 7 mundane gear (great crossbow, extreme shield, alchemical items, saddles, hearthfire lantern), 4 ancestor weapons as equipment, 5 magic forges as wondrous items (immobility noted; priced at 1/4 portable cost per the book). Skipped 26 as fan-index duplicates. Omitted: 8 sample rune circles + the rune-circle creation system; 7 priced mounts in Table 7–5 (creatures); dwarvencraft quality (a crafting grade, not an item).
- **Races of the Wild — 23 E, 3 M.** Ch. 7: special arrows, footbow, skiprock, war sling, material armors, elven gear; magic abilities Blurstrike, Hideaway, Woodwalk. Skipped 28 E + 3 M as duplicates. Omitted: elvencraft bow quality (+300 gp modification, not an item).
- **Complete Warrior — 6 E, 0 M.** The book has no gear chapter beyond Table 4–6 (new exotic weapons): 6 of 19 weapons were net-new (greater blowgun, blowgun darts, barbed bolas, boomerang, greatbow, composite greatbow); 13 already in the dataset. Omitted: improvised-weapons rules, Fantasy Warfare systems, guardian familiars (creatures).
- **Complete Adventurer — 41 E, 31 M.** Ch. 4 alchemical items, capsule/retainer items, tools/kits, 5 specific weapons; 3 armor/weapon abilities, a ring, 8 spell potions/oils, 20 wondrous items. Skipped 8 E + 13 M (fan index / MIC). Omitted: scroll/wand price tables for the book's new spells (Batch 12 territory); the musical-instruments section (no discrete prices).
- **Complete Arcane — 2 E, 58 M.** Ch. 5: 2 specific armor/shield items as equipment; 7 spellbook enhancements, 6 armor/weapon abilities, 2 rings, 18 rods (5 Rod of Fury tiers, Rod of Interference, 12 metamagic rods), 10 staffs, vests of resistance, ~20 wondrous items. Skipped 1 E + 16 M as MIC reprints. Omitted: starmetal (special material, cost modifier only). Quirk kept: the Staff of Ethereal Action's creation line lists plane shift though its usable spells are blink and ethereal jaunt (noted in the record).
- **Complete Divine — 0 E, 25 M.** Ch. 4 relics and staffs. MIC reprinted essentially all relics: all 20 specific relic weapons/armor/shields and 25 relic wondrous/rod items skipped as duplicates. Net-new: Gauntlet of the Talon, Robe of Ebonsilk, and all 23 staffs. Quirks kept: the lesser alignment staffs' entries print 28,266 gp against the table's 28,366 gp (entry used, noted); Vaporous Menace entry 40,094 gp vs table 36,094 gp (entry used, noted); Table 4–1 names "Pipes of Amorous Revelry" but the entry is "Pipes of Frenzied Revelry" (entry name used; the item itself was a MIC duplicate and skipped).
- **Book of Exalted Deeds — 39 E, 29 M.** Ch. 3 + Ch. 6: nonlethal weapons, ravages, good spell components, specific armors/weapons, intelligent items, redeemed items; 13 armor/weapon abilities, a ring, 3 staffs, wondrous items. Skipped 3 E + 4 M. Omitted: ~7 unpriced relic artifacts, 5 afflictions, 5 major artifacts, the Redeemed Unholy Weapon transformation rule. Quirk kept: Dart of the Phoenix priced 99,400 gp plus 5 sp, as printed.
- **Frostburn — 35 E, 4 M.** Poisons (Table 1–8), weapons, cold-weather gear, alchemical items, vehicles; 4 vehicle augmentations as magic. Omitted: ~35 frostfell traps (trap market prices); 3 special materials (cost modifiers).
- **Sandstorm — 45 E, 42 M.** Ch. 4 weapons/armor/gear/special substances/vehicles; Ch. 5 magic incl. 6 armor/weapon abilities, rings, rod, 4 staffs, ~27 wondrous items, 3 intelligent Dance Masks. Skipped 3 E + 7 M. Quirks kept: Ring of Sandstriding entry 5,000 gp vs Table 5–1's 10,000 gp (entry used, noted); Bottle of Endless Sand entry 21,600 gp vs table 16,200 gp (entry used, noted). Omitted: 5 priced mounts (creatures); kheferu special material.
- **Miniatures Handbook — 5 E, 21 M.** Ch. 2 magic items. Skipped 1 E + 27 M as MIC reprints. Its Deadly Precision is a genuinely different ability from the MIC/Complete Adventurer version (+2 bonus for +2d6, vs +1 for +1d6): kept as `deadly-precision-mh`, with a cross-note appended to the MIC record's summary (the sanctioned exception; no other existing record touched).
- **Player's Handbook II — 0, 0.** No gear chapter; the book's only item-shaped printing (the Twilight armor ability) is a reprint already captured from Book of Exalted Deeds.
- **Races of Destiny — 0, 0.** No gear/magic-item chapter; prices in the book are NPC possessions and treasure values.
- **Tome of Battle — 0 E, 29 M.** The Magic Items chapter: Aptitude and Martial Discipline weapon abilities plus the 9 maneuver-granting items in 3 tiers each. Omitted: martial scripts (formula-priced consumables); the nine legacy swords (Weapons of Legacy decision).
- **Monster Manual III — 0 E, 1 M.** Redcap's Tooth (wondrous, 1,000 gp). All other price hits are golem construction costs and a trap price.
- **Monster Manual IV — 0, 0. Monster Manual V — 0, 0.** No item chapters and no priced items.
- **Unearthed Arcana — 0, 0.** Price hits are variant-rule tables only; no genuinely item-shaped content (variant rules not forced into item records).
- **Races of the Dragon — 7 E, 19 M.** Ch. 8 items and abilities. Quirk kept: Spellflinging Spear entry 21,300 gp vs Table 8–2's 21,302 gp (entry used, noted). Omitted: 10 draconic grafts (already in the body-modifications index); ~10 installed kobold lair traps; chitin and colored-metal materials (cost modifiers).
- **Races of Eberron — 0 E, 15 M** (ruleset "eberron"). Ch. 8 universal items; its weapons all duplicated the fan index. Omitted: warforged components (pp. 175–177, excluded per brief — they live in the body-modifications index); the artifact-components section was not harvested.
- **Complete Champion — 50 E, 23 M.** Zero duplicates. 22 power components, 21 special holy symbols, 7 specific armor/shield/weapons as equipment; 16 wondrous items, 4 Domain Staffs, and others as magic. Item-set membership noted in summaries; collection-benefit ladders not modeled (consistent with Batch 11a).
- **Complete Mage — 15 E, 42 M.** 5 alchemical items + 10 optional material components as equipment; 7 rings, 13 rods, 8 staffs, 14 wondrous items as magic. Quirk kept: Rod of Spell Channeling (normal) entry 32,500 gp vs Table 5–2's 32,000 gp (entry used, noted in the module).
- **Complete Psionic — 7 E, 30 M.** 7 specific psionic weapons as equipment; 2 psicrowns, 6 crystal masks, 4 psychoactive skins, 12 stacked psionatrices, 4 psionic bands, 6 universal items as magic. Skipped 8 as MIC duplicates. Omitted: Psionic Locations as Treasure (abilities granted by places, not items).
- **Complete Scoundrel — 28 E, 9 M.** Ch. 5: 9 surprise weapons, 11 alchemical items, 8 poisons as equipment; 9 wondrous/rod items as magic. Omitted: 8 hidden spaces (priced modifications to host items); 8 living items (creatures). Note: Table 5–3 lists "Liquid light" but the entry name Liquid Sunlight governs.
- **Heroes of Battle — 41 E, 32 M.** Siege engines and ammunition, camouflage netting, Armor of Transport, 15 specific siege weapons/ammunition as equipment; 14 armor/shield/weapon/siege abilities, heraldic crests, 2 rods, wondrous items, 7 standards as magic. Skipped 11 as MIC duplicates. Quirk kept: Dragonshot Catapult — the entry prices it as +10,000 gp added to a catapult while Table 6–5 lists 10,000 gp (both noted).
- **Dragon Magic — 3 E, 35 M.** Zero duplicates. 3 specific items as equipment; 13 draconic magic items + 22 dweomered dragon scales as magic. Omitted: Wyrmbane Helm (a legacy item; Weapons of Legacy decision).
- **Races of Faerun — 46 E, 16 M.** Appendix weapons/armor/gear/special items + specific magic items; Cooling and Warming armor abilities' resistance values (5) and several prices were settled by viewing rendered pages where the Batch 7 OCR dropped numerals (e.g., Scimitar of the Sirocco is 9,530 gp). Skipped 8 as duplicates. Omitted: the magic tattoo system (a creation system keyed to a feat, formula-priced); Spike Shooter (+25 gp weapon modification); special materials.
- **Eberron Campaign Setting — 26 E, 50 M** (ruleset "eberron"). Ch. 6 + Ch. 10: exotic weapons, leafweave armor, alchemical substances, tools/kits, documents/papers, soarwood and elemental vessels as equipment; dragonmark focus items, channeling rods, greater dragonshard items, 9 quori embedded shards, 4 Eberron shard items, 9 Khyber bound-elemental properties, traditional items as magic. Judgment call: the quori embedded shards are included as wondrous items (discrete priced items; implantation in a kalashtar/Inspired body noted in each summary) rather than excluded with the grafts. Quirks kept: the Houseward's creator line says Mark of Sentinel though the item enhances Mark of Warding (noted); the Inquisitive Goggles' creator line says Mark of Making though the item serves the Mark of Finding (noted). Omitted: warforged components incl. docents (body-modifications index); unpriced artifact components and Dhakaani artifacts; Conductor Stone (entry prints no price); special materials (cost modifiers); mounts and services.
- **Ghostwalk — 22 E, 49 M.** Ch. 1: 2 specific armors + 19 specific weapons/ammunition + ectoplasmic stabilizer as equipment; 15 armor/weapon abilities, a potion, a ring, 4 staffs, 30 wondrous items as magic. Its Death Ward armor ability (+2, ghost-touch-style protection) differs from MIC's Death Ward (+1) and is kept as `death-ward-armor-gw`; its Merciful printing is kept as `merciful-gw`. Skipped 3 as MIC duplicates. Omitted: scroll/wand price tables for the book's new spells (Batch 12); 2 minor artifacts; slaying-arrow variants (pointer to DMG prices); ectoplasmic equipment as a priced property.
- **Book of Vile Darkness — 96 E, 38 M.** Torture and execution devices, alchemical items, 10 drugs, 34 poisons, 21 evil spell components, 4 specific armors, 9 specific weapons as equipment; 11 armor/weapon abilities, 5 rings, 3 rods, 3 staffs, 19 wondrous items as magic. Skipped 2 rods as fan-index duplicates. Omitted: 7 example equipment traps; 4 psychic poisons + Psychic Poison Oil (unpriced delivery system tied to a spell); 7 unpriced minor artifacts.
- **Exemplars of Evil — 0, 0.** No gear chapter; no priced items in the full text.
- **Fiendish Codex I — 0, 0.** No item content at all (the book's player content was feats in Batch 9 and spells for Batch 12).
- **Fiendish Codex II — 3 E, 0 M.** The Forged Papers sidebar's three forged letters of transit (2,000 / 8,000 / 16,000 gp). Everything else priced in the book is planar-ally bribe tables (services, not items).
- **Monsternomicon vols. 1+2 — 3 E, 2 M** (ruleset "iron_kingdoms"). Vol. 1 monster-hunter gear (net launcher, slip dagger, launching flares); vol. 2's Helm of the Hunt and Duskwolf Cloak. Skipped 4 items (Trapmaker's Kit, Sleep Gas, Tearjerker, Hot Grease) already harvested from Liber Mechanika in Batch 10. Omitted: vol. 1's hunter traps (CR-rated constructions built in place, no item prices); the trained ferret (a creature).
- **Sorcery & Steam — 56 E, 1 M** (ruleset "sorcery_steam"). The book's own Ch. 4 firearms (19, a different set from Shaun's Batch 1.5 DOCX firearms — verified against the existing names; zero duplicates), bullets, bayonet; 6 steamcraft armor base suits + 17 steamcraft armor options; the Painjector as equipment; 11 steamcraft vehicles; the Hypnotist's Watch as the lone magic item. Omitted: alchemical gunpowders (per-charge ammunition additives, prices not in extractable table form); cannon/siege material already covered by the Batch 1.5 DOCX set; steamcraft device creation rules.
- **Expanded Psionics Handbook — 1 E, 71 M.** Ch. 7: the Githyanki Silver Sword as equipment; 13 armor abilities, 6 shield abilities, 20 weapon abilities, 10 psicrowns, 7 crystal anchors, the Crystal Mask of Insightful Detection, 6 psionatrixes, the tiered Shard, the Skin of Proteus, the Third Eye View, the Torcs of Free Will and Leech Freedom, 2 crawling tattoos, and the cursed Reverse Capacitor as magic. Skipped 33 as duplicates of Complete Psionic pack / fan-index records (incl. the tiered cognizance crystal, amulet of catapsi, 4 boots, 5 of the 6 crystal masks, the ring of self-sufficiency, 10 of the 11 psychoactive skins, 10 of the 11 third eyes, the torc of power preservation). Omitted: dorjes, power stones, and psionic tattoos (formula-priced systems); psionic artifacts; generic curse descriptions.
- **Tome of Magic — 3 E, 54 M.** Built from OCR of the image-only PDF, with the Amulet of the Silver Tongue's numbers verified against the rendered page. The 3 priced shadow silk armors as equipment (the material's rules ride in their notes). Magic: 4 pact items (Chime of Suppression, Implements of Binding, Soul Lens, Seal of the Spirit), all 32 Teeth of Dahlver-Nar as individual wondrous items, the Vestige Phylactery, 8 metashadow rods, the Shadow Striking weapon ability, 5 shadow wondrous items + greater Shroud of Night, the Ring of Nullification, and the Amulet of the Silver Tongue. Omitted: the shadow staff pricing table and truename potion/scroll/wand rules (formula systems; Batch 12 territory where applicable); the Book of True Binds and Tome of Truenaming (unpriced artifacts).

### Same-name, different-item records (suffixed ids + cross-notes, per house rule)
- `deadly-precision-mh` (Miniatures Handbook) vs the MIC Deadly Precision — cross-note appended to the MIC record's summary (the one pre-existing record modified in this batch, under the sanctioned exception).
- `collar-of-obedience-mh` (Miniatures Handbook cursed band) vs `collar-of-obedience` (Complete Adventurer animal collar) — cross-notes in both summaries.
- `staff-of-skulls-gw` (Ghostwalk: circle of doom) vs `staff-of-skulls` (Complete Arcane: mass inflict light wounds) — cross-notes in both summaries.
- `death-ward-armor-gw` and `merciful-gw` (Ghostwalk printings differing from existing records).

### Discrepancies in existing data (report-only, nothing changed)
- None beyond the same-name cases above. (Two apparent shortfalls during verification — emitted-vs-aggregate deltas — were traced to the collar-of-obedience and staff-of-skulls id collisions between new modules and resolved with the suffix treatment; final aggregate growth equals records written exactly.)

### Totals after Batch 11b
Races 99, base classes 56, prestige classes 353, templates 28, feats 1,655, skills 62, equipment 1,407 (+623), magic items 1,644 (+734).

### Verification (Batch 11b)
- `npm run check` (tsc) passes with 0 errors.
- `npm run build` succeeds; the built bundle still contains both "LOCKED OFF by Shaun" (hard-locked cross-class house rule untouched) and "I meet this requirement" (prestige-gating UI untouched). No engine, component, lib, page, or house-rules file was modified; changes are the 52 new pack files, the barrel wiring, one cross-note in the MIC weapon-properties file plus cross-notes inside new records, and this addendum.
- Vite preview serves HTTP 200 (stopped after the check).
- Resolver smoke test (esbuild bundle of the real resolver over two character builds equipping new 11b items: a fighter in Shadowsilk Leather Armor with a Githyanki Silver Sword, Amulet of the Silver Tongue, and a Tooth of Dahlver-Nar; a binder with a Chime of Suppression, Implements of Binding, an Eberron Circle of Sound, and Heroes of Battle's Armor of Transport): 0 validation errors on both builds; equipped armor acBonus values feed sheet AC (+2 and +7 respectively).
- Before/after aggregate dump of the real barrel: races 99→99, classes 56→56, prestige classes 353→353, templates 28→28, feats 1,655→1,655, skills 62→62, equipment 784→1,407, magic items 910→1,644. Aggregate growth equals the net-new records written exactly, and no aggregate contains a duplicate id.
- NOT pushed to GitHub and NOT deployed in this pass — the parent agent verifies, pushes (which auto-deploys via the Pages workflow), and reports.

## Batch 12 — Spells: full builder integration (2026-10-28)

The app previously had no spell data type, no casting progression data, and no spell selection. Batch 12 builds the whole vertical: schema, spell data (SRD + Spell Compendium), casting profiles for 18 base classes, build-state persistence, resolver validation, a Spells builder step, and a prestige-gating upgrade that hard-checks spellcasting prerequisites.

### Schema and new files
- `src/engine/types.ts`: added `SpellDefinition` (id, name, ruleset, school, optional subschool, descriptors, `levels` keyed by printed spell-list name — class lists and domain names — components, castingTime, range, targetOrArea, duration, savingThrow, spellResistance, own-words summary, source book+page, sourceUrl, optional provenance `note`) and `CastingProfile` (classId, listName, kind prepared-arcane/prepared-divine/spontaneous, keyAbility, spellsPerDay rows for class levels 1–10 with `null` = cannot cast and `0` = bonus-spells-only, optional spellsKnown rows, optional `knowsEntireList`, optional `allowedSchools`).
- New data pack `src/data/spells/`: `srd-spells.ts` (588 records), `spell-compendium-a/b/c/d.ts` (251/251/251/248 = 1,001 records), `casting-profiles.ts` (18 profiles). Barrel (`src/data/index.ts`) gains `ALL_SPELLS` (dedupe by id, first pack wins), `ALL_CASTING_PROFILES`, `SPELLS_BY_ID`, `CASTING_PROFILES_BY_ID`.
- `src/lib/use-character-build.ts`: build state gains `selectedSpells` (record of classId → spell ids), defaulted empty in `createDefaultBuild` and `normalizeBuild` so legacy saved builds load safely; new `toggleSpell` mutator. House-rule normalization and ruleset defaults untouched.
- New engine module `src/engine/spells.ts` (casting type derivation, PHB bonus-spell table, per-day/known row access capped at class level 10, list membership incl. the Spellthief school restriction, `validateSelectedSpells`, `castingFacts`, `canCastNamedSpell`). The resolver calls `validateSelectedSpells` after `resolvedCharacter` is built and pushes its issues into `validation`.
- New UI `src/components/steps/step-spells.tsx`, wired into `src/pages/builder.tsx` as a "Spells" step shown only when the build has at least one class with a casting profile.

### Spell data — per source
- **SRD core spells: 588 kept** (ruleset "core", cited to d20srd.org spell pages). Authored from the SRD and then verified line-by-line against the d20srd class and domain spell-list pages (sorcerer/wizard, cleric, druid, bard, paladin, ranger, cleric domains): 12 level/assignment fixes applied (e.g. Animal Messenger is Ranger 1/Bard 2; Snare is Ranger 2; Wind Wall is Ranger 2 and Air domain 2) and 10 missing spells added at that pass. A later systematic name-set diff against the full PHB list caught 74 further transcription losses from the original authoring pass (e.g. Mage Armor, Acid Arrow, Planar Binding line, Mage's Disjunction line); 67 were restored with SRD-verified stat blocks, 5 were already present under apostrophe variants, and 1 (Owl's Insight) turned out to be reprinted in Spell Compendium and was dropped in SC's favor. "Magnificent Mansion" was renamed to the SRD's "Mage's Magnificent Mansion".
- **Spell Compendium: 1,001 records** (ruleset "core"), parsed from Shaun's Dropbox PDF with a font/layout-aware extractor (Pterra-dactyl titles, 3-column reading order, sequential stat-block label matching), then resolved: 87 abbreviated entries ("functions like X", Mass/Greater/Lesser/Swift/Legion's variants) inherited their missing stat fields from their base spells; the spell-lists chapter supplied levels for entries whose blocks omit them (Sarcophagus of Stone = Cleric 6; Iron Bones = Cleric 4, Sorcerer/Wizard 4; Planar Tolerance = Cleric 4, Druid 4, Ranger 4, Sorcerer/Wizard 5). 174 SC spells genuinely print no Saving Throw / Spell Resistance lines (spot-verified on the page, e.g. Acid Sheath p. 7) and a handful omit single other fields; those fields record "Not printed in source" — never invented. Every record carries an own-words summary and the printed page as its citation.
- **Governed-skip count: 1** (Owl's Insight — SC reprints it, SC governs). Contrary to the initial expectation, Spell Compendium does not reprint the PHB spell list itself: a 55-name probe of core spells (Fireball, Magic Missile, Cure Light Wounds, Wish, Teleport, Heal…) found none of them in SC's descriptions chapter, so the SRD pack carries the full core list and SC is almost purely additive. Renamed PHB spells in SC (e.g. Irresistible Dance for Otto's Irresistible Dance) are separate records under their SC names.

### Casting profiles (18)
Wizard, Sorcerer, Cleric, Druid, Bard, Paladin, Ranger, Adept (core tables from d20srd; Druid uses the Cleric table and Ranger the Paladin table, as printed), plus splat classes verified against their own books' tables: Warmage, Wu Jen, Spellthief (with its printed school restriction: Abjuration, Divination, Enchantment, Illusion, Transmutation only), Beguiler, Duskblade, Favored Soul, Spirit Shaman (spells-known enforced as its Spells Retrieved per Day), Shugenja (known stored as printed totals — order + favored element + other; composition not enforced), Hexblade, Healer. Beguiler and Warmage are `knowsEntireList`. Wizard and Wu Jen have no spells-known cap by the rules (spellbook classes) — the brief's wizard known-count check does not exist as a rule and is not enforced. Duskblade spells-known is formulaic (2 + Int bonus at 1st, +1 per level) and is not table-enforced; list + level access still is. No profiles for Shadowcaster, Binder, Truenamer, Warlock, Dragonfire Adept (mysteries/pact magic/invocations are not spells) or for profiled-in-name-only classes whose own book tables were not verified (e.g. Sorcery & Steam / Iron Kingdoms casters).

### Validation actually enforced (error severity, via the resolver)
Selection for a class not in the build; selection for a taken class with no casting profile; unknown spell id; spell not on the class's list; Spellthief school restriction; spell level the class level cannot cast yet (per-day cell null, and key ability below 10 + spell level); spontaneous spells-known cap per spell level; prepared-divine per-day preparation cap per spell level (base slots + ability bonus spells). Prepared-arcane (spellbook) classes have no count cap, per the rules. Not modeled (documented, never faked): prestige-class "+1 spellcasting level" advancement (PrC records carry no casting data — casting facts derive from base-class levels only), specialist-wizard bonus slots, domain slots, and other slot add-ons.

### UI behavior
The Spells step appears only for builds with a profiled casting class. Per class: a card showing list name, casting kind, key ability, and selected counts; spells grouped by spell level with per-level caps labeled "known" / "prepared per day" / "in spellbook"; each spell shows school (+subschool), summary, casting time/range/duration, and its source; search box and "Selected only" switch; only spell levels the class can currently cast are offered; spells whose ruleset is toggled off are not offered; over-limit picks are disabled in the UI itself, not merely flagged after the fact.

### Gating upgrade (Phase 5)
`src/engine/prestige-prerequisites.ts` now hard-evaluates the spellcasting families that were previously special/certify: "able to cast Nth-level arcane/divine spells" (incl. prepared/spontaneous modes and "cast arcane spells without preparation"), "arcane/divine caster level Nth", "prepare and cast at least one Nth-level spell from the X school", and named spells ("able to cast teleport", "dismissal or dispel evil", "zone of truth as a divine spell") checked against the build's classes and actual selected spells. Still special: descriptor/school counting ("at least three illusion spells"), domain access ("have access to the Sun domain"), and spell-like-ability alternatives. Census on an empty build: **126 casting fragments now hard-evaluate** (previously special), and fully-checkable prestige classes rose **91 → 93 of 353**.
- Gating suite (`~/prcgate-work/test-gate.ts`): exactly 3 failures, all in the Mystic Theurge section and all expected consequences of the conversion — the "Spells:" entry is no longer special, so it is no longer listed as a pending certification, and it no longer becomes selectable via certification. The section-4 test build (default Wisdom 10) is genuinely **unmet**: a Wisdom-10 cleric cannot cast 2nd-level divine spells, so the new hard check is correct by the rules. With Wisdom 14 the same build hard-evaluates to met and is selectable with no certification (proven in the Batch 12 suite). The parent should update those three test expectations; the test file was not edited in this batch. No other gating behavior regressed.

### Per-book spell chapters — STOPPED, stated plainly (staging per the brief)
SRD + Spell Compendium + all five phases are complete and verified. The per-book leftover chapters were inventoried but **not** built:
- **Book of Exalted Deeds** — parsed 117 spell entries from the descriptions chapter; only ~7 are already in ALL_SPELLS, leaving **~110 leftover spells** (incl. the sanctified spells) not yet in the app.
- **Book of Vile Darkness** — parsed 107 entries (descriptions chapter, D–Z; the A–C stretch was outside the parsed page range); ~7 already present, **~100+ leftovers** (incl. the corrupt spells) not yet in the app.
- Reason for stopping: the 3.0-era layout defeats the clean-parse quality bar the SC data met (hyphen-split class names in Level lines, stat-block bleed into following entries, chapters interleaved with non-spell headings in the same title font). Shipping that data unreviewed would put noisy records in the app; the leftover name lists are preserved in `~/batch12-work/boed-parsed.json` / `bovd-parsed.json` for the follow-up batch.
- Not yet inventoried at all: Ghostwalk, Frostburn, Sandstorm, the Complete-series leftovers, Dragon Magic, Heroes of Battle Ch. 6, Eberron Campaign Setting + Races of Eberron, Sorcery & Steam, Fiendish Codex I + II. (SC reprinted most splat spells, so several of these are expected to be small or zero — unverified, not assumed.) Tome of Magic and Expanded Psionics Handbook are excluded by design (mysteries and psionic powers are not spells), as ordered.

### Totals after Batch 12
Races 99, base classes 56, prestige classes 353, templates 28, feats 1,655, skills 62, equipment 1,407, magic items 1,644 — all unchanged. **Spells 0 → 1,589** (588 SRD + 1,001 Spell Compendium). **Casting profiles 0 → 18.**

### Verification (Batch 12)
- `npm run check` (tsc) passes with 0 errors. `npm run build` succeeds; the built bundle still contains both "LOCKED OFF by Shaun" and "I meet this requirement". Vite preview serves HTTP 200 (stopped after the check).
- Untouched, per the hard constraints: `src/engine/house-rules.ts`, `src/components/house-rules-toggle.tsx`, `src/components/ruleset-toggle.tsx`, the house-rule normalization and ruleset defaults in `src/lib/use-character-build.ts` (build state was extended only), and every pre-existing data file (changes are the new `src/data/spells/` pack, the barrel wiring, the types/lib/engine/component/page additions described above, and this addendum).
- Batch 12 scripted suite (`~/batch12-work/test-batch12.ts`, esbuild bundle of the real engine): 16/16 pass — legal wizard picks pass; off-list pick errors; too-high-level pick errors; sorcerer over-known errors and at-cap passes; cleric preparation cap (incl. Wisdom bonus) errors and at-cap passes; Spellthief school restriction errors; Mystic Theurge hard-met at Wisdom 14 and selectable with no certification; Wayfarer Guide's "able to cast teleport" met only when Teleport is actually selected; resolver smoke on two full builds with spells selected (cleric 6; wizard 5 / cleric 5) with 0 errors.
- Gating suite re-run: only the 3 expected Mystic Theurge expectation changes (above); everything else passes.
- Aggregate dump of the real barrel: no duplicate ids in any aggregate (casting profiles keyed uniquely by classId, 18/18).
- NOT pushed to GitHub and NOT deployed in this pass — the parent agent verifies, pushes (which auto-deploys via the Pages workflow), and reports.

## Batch 12b addendum (2026-10-28) — per-book leftover spell chapters

The follow-up batch the Batch 12 addendum staged. DATA-ONLY: every record uses the existing `SpellDefinition` type; the only pre-existing file touched is the barrel (`src/data/index.ts` — 19 new imports, ALL_SPELLS extended after the Spell Compendium files so SC keeps governing on any id collision). New files: one `spells.ts` per book inside its existing pack folder, plus `ghostwalk/spells-web-enhancement.ts`. Nothing else in the tree changed.

Method: the Batch 12 preserved parses for BoED/BoVD were re-derived and completed (BoVD A–C range parsed here), and every other chapter was parsed from the library PDFs with a line/font-based parser; every shipped record was verified against its book's own text, with page-image checks wherever the text layer was ambiguous. Complete Divine, Complete Warrior, and Fiendish Codex II have image-only PDFs: they were OCR'd (RapidOCR), name-diffed against ALL_SPELLS, and every shipped block was verified against a rendered page image. **Dropped as unverifiable: 0 records in the entire batch** — every unverifiable candidate was resolved by verification, an SC-governed skip, or a variant (below).

### Per-book accounting (parsed = good spell entries in the chapter; present = already in ALL_SPELLS, skipped; shipped = new records)

| Book | Parsed | Present | Shipped | Notes |
|---|---|---|---|---|
| Book of Exalted Deeds | 121 | 8 | 113 | Incl. 30 sanctified spells |
| Book of Vile Darkness | 141 | 10 | 131 | Incl. 19 corrupt spells; fan FAQ appended to the PDF ignored |
| Frostburn | 101 | 5 | 96 | |
| Sandstorm | 67 | 3 | 64 | Psychic Scimitar (psionic power) and 2 epic spells excluded by design |
| Complete Arcane | 140 | 89 | 51 | Skips incl. the rename below |
| Complete Mage | 97 | 2 | 95 | |
| Complete Champion | 47 | 0 | 47 | |
| Complete Scoundrel | 28 | 2 | 26 | |
| Complete Adventurer | 69 | 69 | 0 | Verified zero — SC reprinted the whole chapter |
| Complete Warrior | 7 descriptions | 6 | 1 | OCR; only Hound of Doom is new |
| Complete Divine | 118 descriptions | 116 | 2 | OCR; Bane Bow and Blink, Improved |
| Ghostwalk | 64 | 19 | 45 | |
| Ghostwalk Web Enhancement | 5 | 0 | 5 | Official enhancement appended to the library PDF; separate export |
| Dragon Magic | 42 spells (of 100 chapter entries) | 0 | 42 | Remaining entries are invocations/breath feats — excluded by design |
| Heroes of Battle | 23 | 0 | 23 | Ch. 6 |
| Fiendish Codex I | 21 | 8 | 13 | Skips incl. 5 BoVD reprints (below) |
| Fiendish Codex II | 21 | 1 | 20 | OCR; Devil's Eye skip + 3 variants (below) |
| Sorcery & Steam | 42 | 0 | 42 | Ruleset `sorcery_steam` |
| Eberron Campaign Setting | 51 | 9 | 14 | 28 dropped by design: the book's INFUSIONS section (27 artificer infusions + Detoxify) is not spells |
| Races of Eberron | 38 | 2 | 36 | Ruleset `eberron` |

**Shipped total: 866. ALL_SPELLS 1,589 → 2,455.**

### Decisions and precedents applied
- **Spell Compendium governs reprints** (skip, counted as present). Notable: **Divine Sacrifice** (BoED) — SC reprints it with a school change (Necromancy → Evocation) and an added Blackguard 1 list assignment; treated as an SC-governed reprint-with-revision and skipped, so the BoED-only Champion of Gwynharwyf 1 assignment is not carried.
- **Rename-skip:** Complete Arcane's "Otiluke's Greater Dispelling Screen" is SC's "Dispelling Screen, Greater" — skipped as already present under the SC name.
- **Materially different same-name versions ship as suffixed variants with cross-notes in BOTH records** (the sanctioned cross-note edits are in this batch's own BoVD file, regenerated with the notes configured): `demoncall-fc1` (FC I: no material component, 1 swift action vs BoVD's 1 action), `hellfire-fc2` and `hellfire-storm-fc2` (FC II: larger area/different damage model vs BoVD), `devils-ego-fc2` (FC II: +4 profane bonus, 1 swift action vs BoVD's 1d4+1 enhancement), `status-greater-hob` (Heroes of Battle's Status, Greater is a *different spell* from ECS's Community-domain Status, Greater — different lists, casting time, range, and targets; both ship).
- **Straight reprints in later books skipped** (formatting-only 3.0→3.5 cleanup does not make a variant): FC I's Befoul, Demon Wings, Demonflesh, Despoil, Pox, Fiendish Clarity, Morality Undone (all BoVD spells; Morality Undone's removal of the BoVD-only Mortal Hunter list and Despoil's added Corruption 9 assignment in FC I are not carried), and FC II's Devil's Eye (FC II changes its school Divination → Transmutation and makes the duration dismissible; the effect is unchanged, so the BoVD record governs, per the Divine Sacrifice precedent).
- **Abbreviated entries** ("As X, except…") inherit their unprinted stat-block fields from the named base spell, with a provenance note on the record — same-book bases where the book provides them (Bane of Chaos/Good/Law ← Bane of Evil; the Construct/Humanoid Essence and Natural Weapon Augmentation chains; Abyssal Frenzy, Mass), SRD/SC bases otherwise (Ghostwalk's "or Ghost" variants, Glyph of Turning, Raise Ghost, Repel Ectoplasm; True Seeing, Mass; Shield of Faith, Legion's).
- **"Not printed in source"**: spells whose blocks genuinely print no Saving Throw / Spell Resistance lines (verified per book — the pattern is self-only spells in the 3.5 books and much of 3.0-era BoVD, where ~36 spells print no ST/SR lines at all) carry that string for the missing field, per the Batch 12 precedent. BoVD's 3.0-style casting times ("1 action") are kept as printed.
- **Level sources:** all levels come from each spell's own stat block except Fiendish Codex II's Investiture of the Spined Devil, whose Sorcerer/Wizard 2 assignment was garbled in the OCR of its block and was confirmed from the book's class spell lists (pp. 99–100); FC II levels were otherwise cross-checked between stat blocks and lists throughout.
- **Sanctified and Corrupt spells** are transcribed faithfully with their universal list levels (`Sanctified` / `Corrupt`). No casting profile carries those list names — by the books, any good prepared caster may take sanctified spells and any caster may take corrupt spells — so selecting one currently produces the resolver's list-membership error, the same status as other non-profile list names (Demonologist, Deathless, Feast, etc.). The records are complete and searchable; modeling the universal lists is an engine decision for a future batch, not data.

### Totals after Batch 12b
Races 99, base classes 56, prestige classes 353, templates 28, feats 1,655, skills 62, equipment 1,407, magic items 1,644 — all unchanged. **Spells 1,589 → 2,455** (+866). Casting profiles unchanged at 18.

### Verification (Batch 12b)
- `npm run check` (tsc) passes with 0 errors. `npm run build` succeeds; the built bundle contains "LOCKED OFF by Shaun" and "I meet this requirement" plus the new spell data. Vite preview serves HTTP 200 (stopped after the check).
- Scripted suite (`~/batch12b-work/verify-12b.ts`, esbuild bundle of the real barrel + engine): ALL CHECKS PASSED — ALL_SPELLS is exactly 2,455; no duplicate ids in ALL_SPELLS or any other aggregate (races/classes/PrCs/templates/skills/feats/equipment/magic items re-verified); all five variant pairs present with cross-notes in both records; resolver smoke: a cleric selecting BoED spells and a wizard selecting BoVD spells from their own class lists resolve with 0 errors; a cleric selecting a sanctified spell and a wizard selecting a corrupt spell each produce exactly the one expected list-membership error and no other issue (see the model note above).
- Untouched, per the hard constraints: house-rules files, the settings lock, engine files, components, and every pre-existing data file except the barrel (and this addendum). Batch 12's spell files were not edited; the cross-notes live in this batch's own BoVD records.
- NOT pushed to GitHub and NOT deployed in this pass — the parent agent verifies, pushes in chunks, live-verifies, and reports.

## Rename addendum — 2026-10-28 (homebrew ruleset)

At Shaun's direction, the homebrew ruleset no longer carries its original name: that name is a person's name, and Shaun does not want the reminder. The ruleset is now labeled simply "Homebrew", its id is "homebrew", and its data pack lives at src/data/homebrew/. Every occurrence in the app — toggle label, record ids, source citations, defaults — was renamed; source citations now read "Shaun Bradley — Homebrew Wild-Magic Surge Table (D&D 3.5)" (the underlying Drive document link is unchanged). Content is otherwise untouched: the Steampunk-Augmented Undead template, the 3 wild-magic tables, and the body-modifications index all remain, under the homebrew toggle. Saved builds carrying the pre-rename ruleset id migrate automatically in normalizeBuild (the old id is compared in pieces so the name itself no longer ships in the bundle). The planned further homebrew sweep was cancelled at Shaun's direction the same day.


## Core Books Audit addendum — 2026-10-28

The recovered core data (PHB/DMG/MM) had never been audited against the core books themselves. This pass inventoried every builder record type held under ruleset "core" against the SRD (d20srd.org — the practical completeness checklist for all three books), filled the clean gaps with NEW files only, and reported the rest. New files, all under `src/data/core/`, wired through the barrel only: `audit-prestige-classes.ts`, `audit-races.ts`, `audit-templates.ts`, `audit-feats-skills.ts`, `audit-equipment.ts`, `audit-magic-items.ts`, `audit-magic-items-specific.ts`, `audit-magic-items-potions.ts`, `audit-magic-items-wondrous.ts`, `audit-spells.ts`. No recovered/existing data file was edited.

### Filled (clean gaps: SRD-printed, modelable without distortion)

- **Prestige classes +7 (353 → 360):** the DMG classes absent from the recovered set — Arcane Archer, Blackguard, Duelist, Dwarven Defender, Hierophant, Horizon Walker, Thaumaturgist. Blackguard's own divine spell list and spells/day ride in its features summary (the app models PrC casting advancement as text). Follow-ups for a future batch, NOT done here: a Blackguard casting profile (would require list levels on ~25 existing spell records — an edit to recovered spell files), and the Blackguard spell *corrupt weapon* (named only in the SRD Blackguard list; d20srd.org prints no spell entry for it — its full text is a Book of Vile Darkness printing).
- **Races +15 (99 → 114):** MM races with printed character-traits sections — Minotaur, Ogre, Pixie, Satyr, Troll, Rakshasa, Svirfneblin, Duergar (MM printing; the XPH psionic printing was already present), Forest Gnome, Deep Dwarf, Grimlock, Azer, Troglodyte, Gargoyle, Ogre Mage. Racial Hit Dice modeled as the Centaur/Bugbear records model them. Troll darkvision: the SRD stat block prints 90 ft. while its characters section prints 60 ft.; the record follows the characters section and notes the discrepancy. Pixie's +6 LA variant (with irresistible dance) is noted in its record.
- **Templates +5 (28 → 33):** Celestial, Fiendish, Half-Celestial, Half-Fiend, Lich. HD-scaled CR follows the Spellwarped precedent (middle step in `crModifier`, full schedule in the summary). The Lich's "+5 natural armor or the base creature's, whichever is better" cannot be an additive modifier, so it is carried as feature text (same treatment as relative fly speeds elsewhere).
- **Feats +4 (1,655 → 1,659):** Augment Summoning, Improved Counterspell, Improved Shield Bash, Multiweapon Fighting — the complete PHB + SRD monster-feat gap (verified by name-diff).
- **Skills +1 (62 → 63):** Control Shape (Wis), printed only in the SRD lycanthrope entry.
- **Equipment +79 (1,407 → 1,486):** the missing SRD weapons-table rows (Heavy Flail, both Repeating Crossbows, Shuriken, Net, Bolas, and plain Arrows/Crossbow Bolts/Sling Bullets), Armor Spikes and Shield Spikes, and the goods-and-services tables (~50 gear items, 4 special substances, 15 tools/kits). One intended row (Holly and Mistletoe) was dropped at wiring time: the id already existed via Shaun's compiled alchemical document. NOT filled, by scope: clothing, food/drink/lodging, mounts, transport, and services tables (price lists, not builder items), and the special materials (adamantine, mithral, cold iron, darkwood, dragonhide, alchemical silver — SRD rules text, not standalone items; the DMG's worked examples are already present via the crystalkeep fan index).
- **Magic items +484 (1,644 → 2,128):** the DMG lists beyond the recovered "representative" set (the Magic Item Compendium does not reprint DMG items): 40 rings (incl. Protection +2/+3/+4/+5), 31 rods (incl. the missing metamagic rods), 5 staffs, 46 specific armor/shields/weapons, 87 potions and oils, and 275 wondrous items (verified against the SRD tables by a normalization pass — the app previously held e.g. only Type I of the Bag of Holding and Necklace of Fireballs and only the 1st-level Pearl of Power). NOT filled: cursed items and artifacts (DM hazards / unique epic items, not builder records). Known SRD inconsistency preserved and flagged in the record: the Assassin's Dagger table price is 10,302 gp while the SRD description text on the same page says 18,302 gp.
- **Spells +9 (2,455 → 2,464):** SRD stragglers the Batch 12 name-diff missed — Call Lightning, Call Lightning Storm, Antiplant Shell, Forceful Hand, Forbiddance, Animate Plants, Animal Shapes, Antipathy, Cloak of Chaos. (Two apparent extra misses, "Heal, Mass" and "Fire Storm", are present under the app's naming conventions.)
- **Verified complete, no gap:** base classes (all 11 PHB + 5 NPC classes), and the SRD skills list apart from Control Shape (the app's Craft/Knowledge/Perform/Profession specialty split covers the 36 SRD skills).

### Report-only (not filled, with reasons)

- **Skeleton and Zombie templates:** the SRD prints Level Adjustment — for both (not playable templates), and their mechanics (dropping or doubling Hit Dice, Intelligence to —, Charisma to 1, losing all feats/skills) exceed the app's additive patch/modifier template model.
- **Eight MM races** print a level adjustment but NO character-traits section (Merfolk LA +1, Locathah +1, Sahuagin +2/+3, Grig +3, Nixie +3, Ettin +5, Harpy +3, Derro —/+2-if-sane): their ability adjustments would have to be derived from stat blocks, a judgment call. Medusa prints LA — and is not a character race. Mountain Dwarf has no distinct printed mechanics in the SRD.
- **Lycanthrope (the queued Batch 7 question) — recovered record NOT edited.** As printed (SRD/MM), the template is both inherited (natural) and acquired (afflicted); LA is +2 (afflicted) / +3 (natural) plus the animal's Hit Dice as racial HD; CR scales with animal HD (1–2 HD +2; 3–5 +3; 6–10 +4; 11–20 +5; 21+ +6). The recovered record uses flat LA +3 / flat CR +3 — the flat CR matches only its wereboar form (wolf 2 HD should be +2, rat 1 HD +2, bear 6 HD +4, tiger 6 HD +4). Per-form CR IS expressible today (`TemplateForm.crModifier`/`levelAdjustment` exist); the afflicted/natural LA split is not a per-animal-form axis and is not expressible without two records or engine support. Also as printed: the curse of lycanthropy is a flat DC 15 Fortitude save; natural armor +2 applies in ALL forms (the record grants NA only inside its forms); +2 Wisdom applies in all forms; every lycanthrope gains Iron Will as a bonus feat (the template model has no bonus-feat mechanism — text-note precedent exists); DR is 5/silver (afflicted) or 10/silver (natural), in animal/hybrid form only (the record's text covers the natural case only); a sixth printed common form, the dire wereboar (7 animal HD), is absent from the record's closed five-form set; and the printed three-state shapechange (humanoid/hybrid/animal, with the humanoid state carrying only +2 Wis, +2 NA, senses, and Iron Will) is resolved by the app to a single hybrid default. A third printing (Races of Faerun) gives LA +1/+2. Recommendation: leave the record as the documented simplification it already declares itself to be, or schedule a dedicated lycanthrope rebuild; do not patch it piecemeal.

### Suspected errors in existing core records (reported, NOT fixed — recovered files)

1. **Lycanthrope, curse DC:** the record's `dcFormula` is "10 + 1/2 HD + Con modifier"; the SRD prints a flat DC 15 Fortitude save (d20srd.org/srd/monsters/lycanthrope.htm).
2. **Vampire, energy drain:** the record's feature text says the slam deals "1 level"; the SRD prints TWO negative levels (d20srd.org/srd/monsters/vampire.htm).
3. **Ghost, level adjustment:** the record has `levelAdjustment: 0`; the SRD prints +5 (d20srd.org/srd/monsters/ghost.htm).
4. **Ghost, eligible base types:** the record's `allowedBaseTypes` omits Plant and its note lists plants among types that cannot become ghosts; the SRD explicitly includes plant among the eligible types (and requires Charisma 6+).
5. **Ghost, special attacks:** the record says "one special attack per 3 HD"; the SRD prints "one to three other special attacks" with no HD formula.
6. **Ghost, skill bonuses:** the record has no skill modifiers; the SRD grants +8 racial bonuses on Hide, Listen, Search, and Spot.
7. **Staff of Fire, cost:** the record says 18,950 gp; the SRD staffs table says 28,500 gp (d20srd.org/srd/magicItems/staffs.htm).
- Sampling otherwise passed: Barbarian progression, Loremaster (record matches the SRD entry line for line apart from omitting Speak Language from its class skills), Blind-Fight, Combat Casting, Longsword, Full Plate (+8 / 1,500 gp), Ring of Protection +1 (2,000 gp), legacy Dwarf and Gnome traits, and the Vampire record apart from item 2 above (its numbers, LA +8 / CR +2, turn resistance, and skill bonuses all check out).

### Structurally unmodelable core content (documented omissions)

- Template bonus feats in general (Vampire's five bonus feats, Lycanthrope's Iron Will): no template bonus-feat mechanism exists; text notes only.
- "Whichever is better" natural armor (Lich) and relative fly speeds (Half-Fiend's "equal to land speed" is text; Half-Celestial's 2x is text).
- Rakshasa racial spellcasting (casts as a 7th-level sorcerer, stacking): the app does not model racial casting; noted in the record.
- Blackguard spellcasting advancement as data (list levels + a casting profile) and Sanctified/Corrupt-style universal lists (Batch 12b note) remain engine decisions.
- Named-spell prestige prerequisites (e.g. Thaumaturgist's *lesser planar ally*) fall to the certification bucket in the gating engine — verified in the smoke test below; this matches the engine's documented limits.

### Totals after the Core Books Audit
Races 99 → **114**, prestige classes 353 → **360**, templates 28 → **33**, feats 1,655 → **1,659**, skills 62 → **63**, equipment 1,407 → **1,486**, magic items 1,644 → **2,128**, spells 2,455 → **2,464**. Base classes 56, casting profiles 18, body modifications 183, random tables 3 — unchanged.

### Verification (Core Books Audit)
- `npm run check` (tsc) passes with 0 errors. `npm run build` succeeds; the built bundle contains "LOCKED OFF by Shaun" and "I meet this requirement" plus spot-checked new records (Thaumaturgist, Svirfneblin, Ring of Three Wishes, Call Lightning Storm, Potion of Cure Serious Wounds). Vite preview serves HTTP 200 (stopped after the check).
- Scripted suite (`~/core-audit-work/verify.ts` + `smoke.ts`, esbuild bundles of the real barrel + engine): every aggregate re-counted before/after; NO duplicate ids in any aggregate; every audit record confirmed present in its aggregate and confirmed not to collide with any pre-audit id. Resolver smoke test 14/14 PASS: Minotaur race resolution applies its +8 Str audit entry; Blackguard gating evaluates BAB/skills/feats/alignment as met on a qualifying build and its Special entry certifies to selectable; Thaumaturgist's feat entry evaluates met and its named-spell entry certifies; a Lich template applies with no validation errors; a druid selecting the new Call Lightning / Antiplant Shell with Control Shape ranks and Augment Summoning resolves clean (and the engine correctly rejected Antiplant Shell for a 5th-level druid before the test was corrected to 7th — the new record's list level is live); Horizon Walker levels taken on a qualifying build produce no prestige validation error.
- One mid-build correction worth recording: the Half-Fiend spell-like-ability table was initially drafted from memory, caught in self-review, and rewritten from the SRD page before verification; the Half-Celestial record was likewise re-checked against its SRD page (Daylight and Smite Evil features added; an unprinted low-light vision claim removed).
- Untouched, per the hard constraints: house-rules files, the settings lock, engine files, components, `use-character-build.ts`, and every pre-existing data file except the barrel (and this addendum).
- NOT pushed to GitHub and NOT deployed in this pass — the parent agent verifies, pushes in chunks, live-verifies, and reports.

**Parent fixes after the core audit (2026-10-28, Merlin — each verified against d20srd.org directly before editing):** the audit's seven suspected errors in recovered records were all confirmed, and three more staff prices fell out of checking the flagged block in full. Fixed in src/data/templates.ts: Lycanthrope curse dcFormula was a scaling formula — the SRD prints a flat DC 15 (formula now "15", description states DC 15); Vampire slam text said 1 negative level — SRD prints two; Ghost levelAdjustment 0 → +5; Ghost eligible types wrongly listed Vermin and excluded plants — SRD list swaps in Plant and requires Cha 6+ (note rewritten); Ghost "one special attack per 3 HD" → "one to three"; Ghost gained its missing +8 racial modifiers on Hide/Listen/Search/Spot (modeled on the Vampire record's pattern). Fixed in src/data/core/magic-items.ts: Staff of Fire 18,950 → 28,500 gp; Staff of Healing 29,600 → 27,750 gp; Staff of Frost 41,400 → 56,250 gp; Staff of Power 211,750 → 211,000 gp (all per the SRD staffs table). The Lycanthrope template's structural simplification (flat LA/CR, no afflicted/natural split, missing dire wereboar form) is left as its summary declares — a dedicated rebuild is Shaun's call, per the audit's recommendation.

## Feature addendum — 2026-10-28: race picker split + toggle inheritance (Shaun's orders, built by Merlin directly)

Two app-behavior changes Shaun ordered after the "everything" program closed:

1. **Race picker split** (`src/lib/race-groups.ts`, `src/components/steps/step-race.tsx`): the Base Race step now renders "Playable Character Races" (78) first and "Monster Races" (36) under their own heading. The split follows where each book presents the race — Monster Manual entries and SRD monster pages are monster races; race chapters, campaign settings and class books are playable. `MONSTER_RACE_IDS` is the explicit id list (incl. `duergar-mm`; the psionic `duergar` from the XPH stays playable, as do `warforged`/`warforged-scout`'s inverse: Warforged playable, Warforged Scout/Charger monster). Nothing is hidden or locked — monster races remain selectable, with their per-race enable switches intact. Shaun previewed this exact split as a mockup and approved it ("make that happen") before it was built.

2. **Toggle inheritance** (`src/lib/toggle-prefs.ts`, `src/lib/use-character-build.ts`): Shaun's standing rule — "All toggles that I have off stay off until I turn them back on" — extended by his follow-up: new characters INHERIT his toggle state. Whenever he flips a ruleset or house-rule toggle, the resulting state is saved to localStorage (`blendcrafter:toggle-prefs`); `createDefaultBuild()` starts new characters from it. First-run (no prefs yet) keeps the 2026-10-27 default of all rulesets on. One-time seed: the first character he opens via setBuild defines the initial prefs, so the offs in his existing saved characters are what new characters inherit; after that only his own toggle actions update the prefs. Sanitization: unknown ruleset ids dropped, "core" always present, and cross-class double-cost can never be stored on (his permanent lock). Storage failure (private mode) degrades to per-build toggles only.

Verification: tsc clean; scripted suite (`~/race-split-work/verify-changes.ts`) 16/16 — partition covers all 114 races disjointly (78+36), inheritance round-trips, sanitize + lock behavior confirmed against the real modules.

## Feature addendum — 2026-10-28: turned-off races segregated (Shaun's order)

In the Base Race step, each race group (Playable Character Races / Monster Races) now renders its turned-on races first; turned-off races (per-race enable switch off, `disabledRaceIds`) sink below them under a "Turned off" subheading within the same group. Rendering order only — no data or behavior changes: turned-off tiles keep their switch, so turning one back on moves it back up immediately. The "Turned off" subheading appears only when the group has at least one turned-off race. Implemented as `renderRaceSection` in `src/components/steps/step-race.tsx`.

## Feature addendum — 2026-10-28: "My Way" ability-score dice grid (Shaun's method)

Shaun's own rolling method, added as a third mode in the Ability Scores card, next to Standard Array and Point Buy — the button is labeled **"My Way"** (his words: "Call the button my way. Next to standard array."). Method: roll 4d6, drop the lowest, 36 times into a 6×6 grid; then pick any row, any column, or either diagonal (14 lines). The picked line fills the base ability scores in line order (Str, Dex, Con, Int, Wis, Cha) via the existing `onAllAbilitiesChange`, and the scores stay adjustable in the normal inputs afterwards. Line buttons show each line's total so lines can be compared before picking; the picked line highlights in the grid; hovering a cell shows its four dice. The grid itself is component state (a dice tray, not character data) — re-rolling is one click and the chosen scores persist in the build as usual. Pure helpers `rollDiceCell` / `rollDiceGrid` / `diceLines` live in `src/components/steps/step-race.tsx` and are exported for testing. Verification: tsc clean; scripted suite (`~/race-split-work/verify-myway.ts`) 12/12 against the real module — line math on a known 1–36 grid (rows, columns, both diagonals exact) and 500 live rolls (every value 3–18 and equal to the best-3-of-4 sum).
