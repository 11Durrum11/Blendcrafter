import type { RaceDefinition } from "@/engine/types";

// Familiars: Crouching Monkey, Hidden Toad (Encyclopaedia
// Arcane, Mongoose Publishing, MGP 1017, ©2003) — the
// Familiar Creatures chapter, printed pp. 59–61: eleven new
// creatures "not detailed in the Core Rulebook III", printed
// as 3.0-format familiar stat blocks, transcribed from
// Shaun's own scanned copy (read visually, 2026-11-04). The
// PDF is image-only; printed page = PDF page − 2 throughout.
//
// RECORD-TYPE CHOICE (see familiars-draft.md): the engine has
// no creature/monster record type, so these are filed as
// RaceDefinition records — the engine's only creature-shaped
// type, and the same treatment the Monster Manual packs give
// creatures. Ability modifiers are derived from the printed
// scores by the standard conversion (even score −10, odd
// score −11); the full printed stat block (absolute scores,
// AC, attacks, saves, face/reach, skills) is preserved in
// each record's first trait so nothing is lost. Two fields
// are deliberately NOT set: Intelligence (every entry prints
// "Int is determined by the familiar's path of infusion") and
// racial Hit Dice (every entry prints "Hit Dice: as
// determined by the familiar's path of infusion"), so no
// invented values appear. The listed skills are the
// creature's printed skill TOTALS in 3.0 form (including the
// 3.0 skill Intuit Direction), not racial bonuses, so
// skillBonuses is left unset except where a genuine racial
// bonus is printed, and even those are conditional — they
// are recorded in the trait text rather than the numeric
// field. Headings print in inverted index order ("ANT,
// HARVESTER"); record names use natural order and the
// printed heading is quoted in each stat-block trait.
// One printing inconsistency is flagged, not silently
// resolved: the Raccoon entry's type line reads "Fine
// Magical Beast", but every number in the entry (AC +2 size,
// face 2½ ft.) is Tiny — it is recorded as Tiny with the
// discrepancy noted in its traits.
// Source PDF: /A POC PC related/2.Alchemy & steampunk flavored material/Familiars. Crouching Monkey, Hidden Toad.pdf

const FAM = "Familiars: Crouching Monkey, Hidden Toad";
const FAM_URL =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Familiars. Crouching Monkey, Hidden Toad.pdf";

const PATH_NOTE =
  "Hit Dice and Intelligence are not printed as fixed values: both are determined by the familiar's path of infusion (Hit Dice use the master's character level for HD-related effects; hit points, attacks, saves and skills follow the path rules in The Infusion, pp. 19–32). The familiar uses the printed skills or its master's skills, whichever are better.";

export const FAMILIARS_RACES: RaceDefinition[] = [
  {
    id: "harvester-ant",
    name: "Harvester Ant",
    ruleset: "core",
    source: `${FAM}, p. 59`,
    sourceUrl: FAM_URL,
    size: "Fine",
    baseSpeed: 5,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -10, dex: 2, cha: -8 },
    traits: [
      {
        key: "harvester-ant-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "Printed as 'ANT, HARVESTER', a Fine Magical Beast. Abilities: Str 1, Dex 13, Con 10, Wis 10, Cha 2 (Intelligence by path of infusion). Initiative +1 (Dex). Speed 5 ft., climb 5 ft. Armour Class 19 (+8 size, +1 Dex). Attacks: bite +3 melee; Damage: bite 1. Face/Reach: ½ ft. by ½ ft./0 ft. Saves: Fort +2, Ref +1, Will +2. Skills: Climb +5*, Listen +4, Spot +4, or master's skills (*harvester ants use their Dexterity modifier for Climb checks). " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 59`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "honey-bee",
    name: "Honey Bee",
    ruleset: "core",
    source: `${FAM}, p. 59`,
    sourceUrl: FAM_URL,
    size: "Fine",
    baseSpeed: 10,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -10, dex: 2, cha: -8 },
    traits: [
      {
        key: "honey-bee-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "Printed as 'BEE, HONEY', a Fine Magical Beast. Abilities: Str 1, Dex 13, Con 10, Wis 10, Cha 2 (Intelligence by path of infusion). Initiative +1 (Dex). Speed 10 ft., fly 40 ft. (good). Armour Class 19 (+8 size, +1 Dex). Attacks: sting +3 melee; Damage: sting 1. Face/Reach: ½ ft. by ½ ft./0 ft. Saves: Fort +2, Ref +1, Will +2. Skills: Intuit Direction +2 (a 3.0 skill), Listen +4, Spot +4, or master's skills. " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 59`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "scarab-beetle",
    name: "Scarab Beetle",
    ruleset: "core",
    source: `${FAM}, p. 59`,
    sourceUrl: FAM_URL,
    size: "Fine",
    baseSpeed: 5,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -8, cha: -8 },
    traits: [
      {
        key: "scarab-beetle-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "Printed as 'BEETLE, SCARAB', a Fine Magical Beast. Abilities: Str 2, Dex 11, Con 10, Wis 10, Cha 2 (Intelligence by path of infusion). Initiative +0. Speed 5 ft., climb 5 ft., fly 10 ft. (average). Armour Class 18 (+8 size). Attacks: none printed (—); Damage: none printed (—). Face/Reach: ½ ft. by ½ ft./0 ft. Saves: Fort +2, Ref +0, Will +2. Skills: Listen +4, Spot +4, or master's skills. " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 59`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "kiwi",
    name: "Kiwi",
    ruleset: "core",
    source: `${FAM}, p. 59`,
    sourceUrl: FAM_URL,
    size: "Tiny",
    baseSpeed: 20,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -10, dex: 4, wis: 2, cha: -6 },
    traits: [
      {
        key: "kiwi-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "A Tiny Magical Beast. Abilities: Str 1, Dex 15, Con 10, Wis 12, Cha 5 (Intelligence by path of infusion). Initiative +2 (Dex). Speed 20 ft. Armour Class 14 (+2 size, +2 Dex). Attacks: bite −3 melee; Damage: bite 1d3−5. Face/Reach: 2½ ft. by 2½ ft./0 ft. Saves: Fort +2, Ref +4, Will +1. Skills: Survival +5, Listen +5, Spot +5, or master's skills; kiwis gain a +8 racial bonus to Survival checks when tracking by scent. " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 59`,
        sourceUrl: FAM_URL,
      },
      {
        key: "kiwi-scent",
        name: "Scent",
        description: "The kiwi has the scent special quality.",
        category: "special-quality",
        source: `${FAM}, p. 59`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "mongoose",
    name: "Mongoose",
    ruleset: "core",
    source: `${FAM}, pp. 59–60`,
    sourceUrl: FAM_URL,
    size: "Tiny",
    baseSpeed: 20,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -8, dex: 2, con: 4, cha: -6 },
    traits: [
      {
        key: "mongoose-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "A Tiny Magical Beast. Abilities: Str 3, Dex 12, Con 15, Wis 10, Cha 5 (Intelligence by path of infusion). Initiative +2 (Dex). Speed 20 ft. Armour Class 14 (+2 size, +2 Dex). Attacks: bite −2 melee; Damage: bite 1d3−4. Face/Reach: 2½ ft. by 2½ ft./0 ft. Saves: Fort +4, Ref +2, Will +1. Skills: Survival +5, Listen +5, Spot +5, or master's skills; mongooses gain a +8 racial bonus to Survival checks when tracking by scent. " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, pp. 59–60`,
        sourceUrl: FAM_URL,
      },
      {
        key: "mongoose-scent",
        name: "Scent",
        description: "The mongoose has the scent special quality.",
        category: "special-quality",
        source: `${FAM}, p. 59`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "spider-monkey",
    name: "Spider Monkey",
    ruleset: "core",
    source: `${FAM}, p. 60`,
    sourceUrl: FAM_URL,
    size: "Tiny",
    baseSpeed: 30,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -8, dex: 8, wis: 2, cha: -6 },
    traits: [
      {
        key: "spider-monkey-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "Printed as 'MONKEY, SPIDER', a Tiny Magical Beast. Abilities: Str 3, Dex 18, Con 10, Wis 12, Cha 5 (Intelligence by path of infusion). Initiative +4 (Dex). Speed 30 ft., climb 30 ft. Armour Class 16 (+2 size, +4 Dex). Attacks: bite +6 melee; Damage: bite 1d3−4. Face/Reach: 2½ ft. by 2½ ft./0 ft. Saves: Fort +2, Ref +6, Will +1. Skills: Balance +12, Climb +15, Hide +15, Listen +4, Spot +4, or master's skills; monkeys use their Dexterity modifier for Climb checks and receive a +8 racial bonus to Balance checks. Feats: Weapon Finesse (bite). " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 60`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "otter-familiar",
    name: "Otter",
    ruleset: "core",
    source: `${FAM}, p. 60`,
    sourceUrl: FAM_URL,
    size: "Tiny",
    baseSpeed: 20,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -8, dex: 4, wis: 2, cha: -6 },
    traits: [
      {
        key: "otter-familiar-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "A Tiny Magical Beast. Abilities: Str 3, Dex 15, Con 10, Wis 12, Cha 5 (Intelligence by path of infusion). Initiative +2 (Dex). Speed 20 ft., swim 40 ft. Armour Class 14 (+2 size, +2 Dex). Attacks: bite −2 melee; Damage: bite 1d3−4. Face/Reach: 2½ ft. by 2½ ft./0 ft. Saves: Fort +2, Ref +4, Will +1. Skills: Survival +5, Listen +5, Spot +5, or master's skills; otters gain a +8 racial bonus to Survival checks when tracking by scent, and retain this ability underwater. (Record id is otter-familiar because the bare id \"otter\" is already used in the catalog by a Goods and Gear purchasable animal.) " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 60`,
        sourceUrl: FAM_URL,
      },
      {
        key: "otter-familiar-scent",
        name: "Scent",
        description: "The otter has the scent special quality.",
        category: "special-quality",
        source: `${FAM}, p. 60`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "penguin",
    name: "Penguin",
    ruleset: "core",
    source: `${FAM}, p. 60`,
    sourceUrl: FAM_URL,
    size: "Tiny",
    baseSpeed: 20,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -8, dex: 4, wis: 2, cha: -6 },
    traits: [
      {
        key: "penguin-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "A Tiny Magical Beast. Abilities: Str 2, Dex 15, Con 10, Wis 12, Cha 5 (Intelligence by path of infusion). Initiative +2 (Dex). Speed 20 ft., swim 30 ft. Armour Class 14 (+2 size, +2 Dex). Attacks: bite −2 melee; Damage: bite 1d3−4. Face/Reach: 2½ ft. by 2½ ft./0 ft. Saves: Fort +2, Ref +4, Will +1. Skills: Hide +6, Listen +5, Spot +5, or master's skills; penguins receive a +8 racial bonus to Hide checks while underwater due to their countershaded coloration. " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 60`,
        sourceUrl: FAM_URL,
      },
      {
        key: "penguin-tobogganing",
        name: "Tobogganing",
        description: "A penguin can move twice as fast over ice by sliding on its belly.",
        category: "special-quality",
        source: `${FAM}, p. 60`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "praying-mantis",
    name: "Praying Mantis",
    ruleset: "core",
    source: `${FAM}, p. 61`,
    sourceUrl: FAM_URL,
    size: "Diminutive",
    baseSpeed: 10,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -10, dex: 4, cha: -8 },
    naturalArmor: 1,
    traits: [
      {
        key: "praying-mantis-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "A Diminutive Magical Beast (the book's bonding catalogue also lists a 'Praying Mantis, Giant', but this chapter prints only the Diminutive creature's stat block). Abilities: Str 1, Dex 15, Con 10, Wis 10, Cha 2 (Intelligence by path of infusion). Initiative +2 (Dex). Speed 10 ft., fly 40 ft. (average). Armour Class 17 (+4 size, +2 Dex, +1 natural). Attacks: claw +6 melee; Damage: claw 1. Face/Reach: 1 ft. by 1 ft./0 ft. Saves: Fort +2, Ref +2, Will +2. Skills: Hide +10*, Listen +4, Spot +4, or master's skills; praying mantises gain a +8 racial bonus to Hide checks made in areas with foliage. Feats: Weapon Finesse (claw). " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 61`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "raccoon",
    name: "Raccoon",
    ruleset: "core",
    source: `${FAM}, p. 61`,
    sourceUrl: FAM_URL,
    size: "Tiny",
    baseSpeed: 30,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -8, dex: 8, wis: 2, cha: -6 },
    traits: [
      {
        key: "raccoon-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "Printed size discrepancy: this entry's type line reads 'Fine Magical Beast', but every number in the entry is Tiny — Armour Class 16 (+2 size, +4 Dex) and Face/Reach 2½ ft. — and it is recorded as Tiny on the strength of its own numbers. Abilities: Str 3, Dex 18, Con 10, Wis 12, Cha 5 (Intelligence by path of infusion). Initiative +4 (Dex). Speed 30 ft., climb 30 ft. Attacks: bite +0 melee; Damage: bite 1d3−4. Saves: Fort +2, Ref +6, Will +1. Skills: Balance +12, Climb +15, Hide +15, Listen +4, Spot +4, or master's skills; raccoons use their Dexterity modifier for Climb checks and receive a +8 racial bonus to Balance checks. " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 61`,
        sourceUrl: FAM_URL,
      },
      {
        key: "raccoon-scent",
        name: "Scent",
        description: "The raccoon has the scent special quality.",
        category: "special-quality",
        source: `${FAM}, p. 61`,
        sourceUrl: FAM_URL,
      },
    ],
  },
  {
    id: "yellow-jacket-wasp",
    name: "Yellow Jacket Wasp",
    ruleset: "core",
    source: `${FAM}, p. 61`,
    sourceUrl: FAM_URL,
    size: "Fine",
    baseSpeed: 10,
    type: "Magical Beast",
    subtypes: [],
    abilityModifiers: { str: -10, dex: 2, cha: -8 },
    traits: [
      {
        key: "yellow-jacket-wasp-stat-block",
        name: "Familiar Stat Block (as printed)",
        description:
          "Printed as 'WASP, YELLOW JACKET', a Fine Magical Beast. Abilities: Str 1, Dex 13, Con 10, Wis 10, Cha 2 (Intelligence by path of infusion). Initiative +1 (Dex). Speed 10 ft., fly 40 ft. (good). Armour Class 19 (+8 size, +1 Dex). Attacks: sting +3 melee; Damage: sting 1. Face/Reach: ½ ft. by ½ ft./0 ft. Saves: Fort +2, Ref +1, Will +2. Skills: Listen +4, Spot +4, or master's skills. " +
          PATH_NOTE,
        category: "trait",
        source: `${FAM}, p. 61`,
        sourceUrl: FAM_URL,
      },
    ],
  },
];
