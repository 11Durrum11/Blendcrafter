/**
 * Races of Eberron race data pack: the races of Chapter 5, "Other
 * Races of Eberron," that are presented as character races and are
 * not already in the app — drow, goblin, hobgoblin, bugbear, and
 * orc. Built 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Eberron.pdf
 *
 * All records carry ruleset "eberron": this book belongs under the
 * Eberron toggle, like the Eberron Campaign Setting pack.
 *
 * Chapters 1–4 update the four Eberron Campaign Setting races
 * (warforged, shifter, changeling, kalashtar). Those races already
 * have records from the Campaign Setting pack, and the Races of
 * Eberron trait lists were checked against them and match in
 * substance (same ability modifiers, skill bonuses, and signature
 * traits), so no duplicates are added here — the existing records
 * stand. The rest of Chapter 5 gives cultural treatments of Player's
 * Handbook races (dwarves, the elves of Aerenal/Khorvaire/Valenar,
 * gnomes, half-elves, half-orcs, and halflings), which the core
 * records already cover, following the Races of Stone / Races of
 * the Wild precedent. The Inspired (pp. 100–102) are deliberately
 * NOT converted: the book states "Inspired are not intended for use
 * as player characters."
 *
 * Chapter 5 does not reprint full trait lists for these races; it
 * presents them as Eberron character races with their standard
 * traits (the drow entry, for example, works through the sample
 * drow scout's "drow traits" and spell resistance 14 at 3rd level,
 * i.e. 11 + class level, and the goblinoid section states the
 * hobgoblin and bugbear level adjustments outright). Trait values
 * below are the standard ones the book's text and stat blocks use.
 * Page numbers are the book's printed pages (this PDF's printed
 * page is its PDF page minus one).
 */
import type { RaceDefinition } from "@/engine/types";

const ROE = "Races of Eberron";
const ROE_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf";
const CH5 = `${ROE} — Chapter 5: Other Races of Eberron`;

export const RACES_OF_EBERRON_RACES: RaceDefinition[] = [
  {
    id: "drow",
    name: "Drow",
    ruleset: "eberron",
    source: `${CH5} — Elf, Drow (pp. 76–79; sample drow scout, pp. 77–78)`,
    sourceUrl: ROE_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Elf"],
    abilityModifiers: { dex: 2, con: -2, int: 2, cha: 2 },
    favoredClass: "Wizard",
    levelAdjustment: 2,
    skillBonuses: { listen: 2, search: 2, spot: 2 },
    traits: [
      {
        key: "drow-darkvision",
        name: "Darkvision 120 Feet",
        description:
          "A drow can see in the dark up to 120 feet — the longer darkvision range the book's drow entry calls out as making them at their best underground.",
        category: "special-quality",
        source: `${CH5} — Drow (pp. 77–78)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "drow-spell-resistance",
        name: "Spell Resistance",
        description:
          "Spell resistance equal to 11 + class level (the book's 3rd-level sample drow scout has spell resistance 14).",
        category: "special-quality",
        source: `${CH5} — Drow Scout (p. 78)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "drow-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "1/day each: dancing lights, darkness, and faerie fire (caster level equals the drow's character level).",
        category: "special-attack",
        source: `${CH5} — Drow Scout (p. 78)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "drow-traits",
        name: "Drow Traits",
        description:
          "Immunity to magic sleep effects and a +2 racial saving throw bonus against enchantment spells or effects, plus a +2 bonus on Will saves against spells and spell-like abilities (the sample scout's Will save is noted as +3 against spells and spell-like abilities). Weapon proficiency with the hand crossbow, rapier, and short sword. +2 racial bonus on Listen, Search, and Spot checks (included in this race's skill bonuses), and a drow who merely passes within 5 feet of a secret or concealed door is entitled to a Search check as if actively looking. Favored class: wizard for males, cleric for females (the record lists wizard).",
        category: "trait",
        source: `${CH5} — Drow Traits (pp. 77–78)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "drow-light-blindness",
        name: "Light Blindness",
        description:
          "Abrupt exposure to bright light (such as sunlight or a daylight spell) blinds a drow for 1 round; on subsequent rounds she is dazzled as long as she remains in the affected area.",
        category: "trait",
        source: `${CH5} — Drow Scout (p. 78)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "goblin",
    name: "Goblin",
    ruleset: "eberron",
    source: `${CH5} — Goblinoids (pp. 85–88)`,
    sourceUrl: ROE_PATH,
    size: "Small",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Goblinoid"],
    abilityModifiers: { str: -2, dex: 2, cha: -2 },
    favoredClass: "Rogue",
    levelAdjustment: 0,
    skillBonuses: { "move-silently": 4, ride: 4 },
    traits: [
      {
        key: "goblin-darkvision",
        name: "Darkvision",
        description: "Goblins can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${CH5} — Goblinoids (pp. 85–88)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "goblin-skills",
        name: "Goblin Skills",
        description:
          "+4 racial bonus on Move Silently and Ride checks (included in this race's skill bonuses). Goblins are fast for their size, with a base land speed of 30 feet despite being Small.",
        category: "trait",
        source: `${CH5} — Goblinoids (pp. 85–88)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "hobgoblin",
    name: "Hobgoblin",
    ruleset: "eberron",
    source: `${CH5} — Goblinoids (pp. 85–88; level adjustment stated in text)`,
    sourceUrl: ROE_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Goblinoid"],
    abilityModifiers: { dex: 2, con: 2 },
    favoredClass: "Fighter",
    levelAdjustment: 1,
    skillBonuses: { "move-silently": 4 },
    traits: [
      {
        key: "hobgoblin-darkvision",
        name: "Darkvision",
        description: "Hobgoblins can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${CH5} — Goblinoids (pp. 85–88)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "hobgoblin-skills",
        name: "Hobgoblin Skills",
        description:
          "+4 racial bonus on Move Silently checks (included in this race's skill bonuses). The book states the hobgoblin's +1 level adjustment outright in the goblinoid section.",
        category: "trait",
        source: `${CH5} — Goblinoids (pp. 85–88)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "bugbear",
    name: "Bugbear",
    ruleset: "eberron",
    source: `${CH5} — Goblinoids (pp. 85–88; racial Hit Dice and level adjustment stated in text)`,
    sourceUrl: ROE_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Goblinoid"],
    abilityModifiers: { str: 4, dex: 2, con: 2, cha: -2 },
    naturalArmor: 3,
    favoredClass: "Rogue",
    levelAdjustment: 1,
    racialHitDice: 3,
    skillBonuses: { "move-silently": 4 },
    traits: [
      {
        key: "bugbear-racial-hit-dice",
        name: "Racial Hit Dice",
        description:
          "A bugbear begins with 3 racial Hit Dice (3d8), which provide a base attack bonus of +2, base saves of Fort +1, Ref +3, Will +1, one feat, and the racial class skills Climb, Hide, Listen, Move Silently, Search, and Spot, as stated in the book's goblinoid section.",
        category: "trait",
        source: `${CH5} — Goblinoids (pp. 85–88)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "bugbear-senses",
        name: "Darkvision and Scent",
        description:
          "Bugbears can see in the dark up to 60 feet and have the scent special quality.",
        category: "special-quality",
        source: `${CH5} — Goblinoids (pp. 85–88)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "bugbear-natural-armor",
        name: "Natural Armor",
        description:
          "A bugbear's thick hide grants a +3 natural armor bonus (included in this race's natural armor), and it receives a +4 racial bonus on Move Silently checks (included in this race's skill bonuses).",
        category: "trait",
        source: `${CH5} — Goblinoids (pp. 85–88)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "orc",
    name: "Orc",
    ruleset: "eberron",
    source: `${CH5} — Orcs (pp. 102–103)`,
    sourceUrl: ROE_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Orc"],
    abilityModifiers: { str: 4, int: -2, wis: -2, cha: -2 },
    favoredClass: "Barbarian",
    levelAdjustment: 0,
    traits: [
      {
        key: "orc-darkvision",
        name: "Darkvision",
        description: "Orcs can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${CH5} — Orcs (pp. 102–103)`,
        sourceUrl: ROE_PATH,
      },
      {
        key: "orc-light-sensitivity",
        name: "Light Sensitivity",
        description:
          "Orcs are dazzled in bright sunlight or within the radius of a daylight spell. In Eberron, the book presents orcs as the druidic Gatekeepers and peoples of the Shadow Marches — swamp-dwellers tied to the fight against the daelkyr.",
        category: "trait",
        source: `${CH5} — Orcs (pp. 102–103)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
];
