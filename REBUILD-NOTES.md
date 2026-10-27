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

# Addendum 2026-10-27 — Dessarin homebrew pack + body-modification index

Requested by Shaun in the "D&D 3.5 implants and attachments" side chat:
fold in BOTH (a) the grafts/symbionts/warforged-components list compiled
2026-10-25 and (b) his wild magic chart, then archive that chat.

## What was added

- **New ruleset tag `dessarin`** (`src/engine/types.ts` Ruleset union;
  label "Dessarin Valley (Homebrew)" + toggle entry in
  `src/components/ruleset-toggle.tsx`). Shaun's own setting content is
  opt-in like the other non-core packs.
- **`src/data/dessarin/templates.ts`** — Steampunk-Augmented Undead as a
  real `TemplateDefinition`, merged into `ALL_TEMPLATES` so it appears
  in the template picker when the Dessarin ruleset is enabled.
  Source: Shaun's own "DESSARIN VALLEY WILD-MAGIC SURGE TABLE (D&D
  3.5).docx" (Google Drive, modified 2026-10-06). Modeled per the core
  template pack: add-subtype Construct patch (type stays Undead; HD /
  BAB / saves not recalculated), natural armor +4 as an "improve"
  modifier, Str +4 / Dex -2, CR +1, prerequisite corporeal Undead.
  The -5 ft speed penalty is a trait feature (no relative-speed patch
  exists in the resolver); levelAdjustment 0 (the document gives none;
  it is written for NPC/monster thralls). Features: Piston Slam, Steam
  Charge, Boiler Explosion, Alchemical Fortification, Vulnerability to
  Electricity, Heavy Plating.
- **`src/data/dessarin/tables.ts`** — the document's three random
  tables as a new `RandomTableDefinition` data type, exported as
  `ALL_RANDOM_TABLES`: Dessarin Valley surge table (d20, 8 bands),
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
iron_kingdoms / sorcery_steam / dessarin). No Ruleset type,
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
"sorcery_steam" (equipment/magic) or "dessarin" (prosthetics; see
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
- **Prosthetics ruleset "dessarin":** the 165 published-book
  index records tag by book origin ("core" / "eberron"); the
  prosthetics are Shaun's own homebrew curation, so they take
  the homebrew tag "dessarin" rather than masquerading as a
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
  dessarin/graft, all with cost and summary); no duplicate ids
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
