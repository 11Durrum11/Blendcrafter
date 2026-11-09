import type { RaceDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #315 pack (library-staging/packs/dragon-magazine/issue-315)
// The issue's one race: the Tortle, from the Red Steel article
// (pp. 68–73), where the full player-character racial traits block is
// printed. Transcribed from the magazine text on archive.org
// (DragonMagazine315_djvu.txt). Trait descriptions are faithful
// mechanical paraphrases in our own words; no magazine prose is
// reproduced.
//
// The tortle pantheon table, the rakasta and lupin mentions (named in
// the article but given no statistics), and the Savage Coast firearm
// note are in reference.md.

const DM315 = "Dragon Magazine #315";
const DM315_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt";

export const DRAGON_315_RACES: RaceDefinition[] = [
  {
    id: "tortle",
    name: "Tortle",
    ruleset: "core",
    source: DM315,
    sourceUrl: DM315_PATH,
    size: "Medium",
    baseSpeed: 20,
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: { dex: -2, con: 2, wis: 2, cha: -2 },
    favoredClass: "Cleric",
    levelAdjustment: 0,
    naturalArmor: 3,
    skillBonuses: { swim: 8 },
    traits: [
      {
        key: "tortle-speed",
        name: "Speed",
        description: "A tortle's base land speed is 20 feet, and it has a swim speed of 10 feet.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tortle-low-light-vision",
        name: "Low-Light Vision",
        description: "A tortle can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination, retaining the ability to distinguish color and detail.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tortle-natural-armor",
        name: "Natural Armor",
        description: "A tortle's shell provides a +3 natural armor bonus.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tortle-swim",
        name: "Swim",
        description: "A tortle gains a +8 racial bonus on Swim checks to perform a special action or avoid a hazard, can always take 10 on Swim checks even if distracted or endangered, and can use the run action while swimming in a straight line.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tortle-endurance",
        name: "Endurance",
        description: "A tortle gains Endurance as a racial bonus feat.",
        category: "feat",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tortle-languages",
        name: "Languages",
        description: "Automatic Languages: Common and Tortle. Bonus Languages: Aquan, Elven, Sylvan. Favored Class: Cleric.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
    ],
  },
];
