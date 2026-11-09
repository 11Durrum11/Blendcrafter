import type { RaceDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #317 pack (library-staging/packs/dragon-magazine/issue-317)
// The issue's five races:
//   * "Countdown to Eberron" (pp. 16–21): the SHIFTER, printed as an
//     Eberron Campaign Setting preview. The catalog already holds the
//     published ECS shifter (src/data/eberron/races.ts, id "shifter").
//     The preview DIFFERS from the published race: its shifting
//     characteristics are a different, six-item list (Armored, Biter,
//     Climber, Render, Runner, Tracker) in place of the book's ten
//     shifter traits, and its feat support is written against those
//     characteristics. Per the program's different-source precedent
//     (issue-314's synad-314), the magazine version stages suffixed
//     -317 and both records stand. Ruleset "eberron"; Eberron lore is
//     stripped — mechanics only.
//   * "Xenophilia" by Dean Poisso (pp. 22–29): four new PC races —
//     adu'ja, gruwaar, golmoid, and t'kel. None exists in the catalog
//     under any spelling (grep of src/data, both id styles, 2026-11-09).
//     Ruleset "core".
//
// Transcribed from the magazine text on archive.org
// (DragonMagazine317_djvu.txt); the adu'ja traits block and the
// shifter feat sidebar were read off the printed page images. Trait
// descriptions are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced. The races' prose, aging tables,
// and height/weight tables are in reference.md. See MANIFEST.md for
// the per-record adjudications (shifter type line, t'kel languages).

const DM317 = "Dragon Magazine #317";
const DM317_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt";

export const DRAGON_317_RACES: RaceDefinition[] = [
  {
    id: "adujas",
    name: "Adu'ja",
    ruleset: "core",
    source: DM317,
    sourceUrl: DM317_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Plant",
    subtypes: [],
    abilityModifiers: { str: -2, wis: 2, cha: 2 },
    favoredClass: "Druid",
    levelAdjustment: 2,
    skillBonuses: { diplomacy: 4, perform: 4, bluff: -4, "sense-motive": -4, survival: 4 },
    traits: [
      {
        key: "adujas-plant-traits",
        name: "Plant Traits",
        description: "As a creature of the plant type, an adu'ja is immune to mind-affecting effects, poison, sleep effects, paralysis, polymorph, and stunning, and is not subject to critical hits. Adu'jas do not need to sleep, but spellcasters must still rest for 8 hours to regain spells. They can still be affected by spells and effects that specifically affect plant creatures.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "adujas-woodland-stride",
        name: "Woodland Stride (Ex)",
        description: "An adu'ja may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed and without taking damage or suffering other impairment, as the 2nd-level druid ability. Magically manipulated plants still affect her normally.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "adujas-photosynthesis",
        name: "Photosynthesis (Ex)",
        description: "An adu'ja needs only one-quarter the normal rations of a creature of her size if she receives at least 4 hours of direct sunlight per day. Otherwise she eats normally.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "adujas-photoregeneration",
        name: "Photoregeneration (Ex)",
        description: "An adu'ja resting in sunlight with at least 1 gallon of water heals 2 hit points per level per day. While active she heals at the normal rate, and in darkness she also heals normally. She can regrow a severed limb (except her head) in about one month of rest or light activity, or half that time with complete bed rest.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "adujas-skills",
        name: "Skills",
        description: "+4 racial bonus on Diplomacy and Perform checks; −4 penalty on Bluff and Sense Motive checks; +4 racial bonus on Survival checks, and Survival is always a class skill for an adu'ja (the bonuses and penalty are included in this race's skill bonuses).",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "adujas-low-light-vision",
        name: "Low-Light Vision",
        description: "An adu'ja can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination, retaining the ability to distinguish color and detail.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "adujas-fire-vulnerability",
        name: "Vulnerability to Fire",
        description: "An adu'ja takes half again as much (+50%) damage from fire, regardless of whether a saving throw is allowed or what its result is.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "adujas-spell-like-abilities",
        name: "Spell-Like Abilities",
        description: "1/day — speak with plants, as a 1st-level caster.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "adujas-languages",
        name: "Languages",
        description: "Automatic Languages: Adu'ja, Elven, Sylvan. Bonus Languages: Common, Draconic, Gnome, Halfling. Favored Class: Druid. Level Adjustment: +2.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
    ],
  },
  {
    id: "gruwaar",
    name: "Gruwaar",
    ruleset: "core",
    source: DM317,
    sourceUrl: DM317_PATH,
    size: "Small",
    baseSpeed: 20,
    type: "Fey",
    subtypes: [],
    abilityModifiers: { str: -2, dex: 2, wis: -2, cha: 2 },
    favoredClass: "Rogue",
    levelAdjustment: 0,
    skillBonuses: { hide: 2, "move-silently": 2, "sleight-of-hand": 2 },
    traits: [
      {
        key: "gruwaar-speed",
        name: "Speed",
        description: "A gruwaar's base land speed is 20 feet. On all fours, a gruwaar wearing light or no armor, carrying a light load or no load, and with its hands empty has a base land speed of 30 feet.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "gruwaar-darkvision",
        name: "Darkvision",
        description: "A gruwaar can see in the dark up to 60 feet. (As printed; darkvision is atypical for the fey type — see MANIFEST.md.)",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "gruwaar-skills",
        name: "Skills",
        description: "+2 racial bonus on Hide, Move Silently, and Sleight of Hand checks (included in this race's skill bonuses).",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "gruwaar-claws",
        name: "Claws",
        description: "A gruwaar has two claw attacks that deal 1d3 points of damage plus its Strength modifier.",
        category: "special-attack",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "gruwaar-spell-like-abilities",
        name: "Spell-Like Abilities",
        description: "1/day — disguise self, as a 1st-level caster.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "gruwaar-languages",
        name: "Languages",
        description: "Automatic Languages: Common, Sylvan, Undercommon. Bonus Languages: Abyssal, Dwarven, Elven, Gnome, Terran. Favored Class: Rogue.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
    ],
  },
  {
    id: "golmoid",
    name: "Golmoid",
    ruleset: "core",
    source: DM317,
    sourceUrl: DM317_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: { str: 2, dex: -4, con: 2, int: -2 },
    favoredClass: "Fighter",
    levelAdjustment: 1,
    naturalArmor: 2,
    traits: [
      {
        key: "golmoid-speed",
        name: "Speed",
        description: "A golmoid's base land speed is 30 feet. A golmoid's speed is never reduced by wearing medium or heavy armor or by carrying a medium or heavy load.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "golmoid-natural-armor",
        name: "Natural Armor",
        description: "A golmoid's stony hide provides a +2 natural armor bonus.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "golmoid-craft",
        name: "Craft Bonus",
        description: "+2 racial bonus on all Craft checks.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "golmoid-enchantment-resistance",
        name: "Enchantment Resistance",
        description: "+4 racial bonus on saving throws against enchantment spells and effects.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "golmoid-endurance",
        name: "Endurance",
        description: "A golmoid gains Endurance as a bonus feat at 1st level.",
        category: "feat",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "golmoid-languages",
        name: "Languages",
        description: "Automatic Languages: Common, Gnome. Bonus Languages: Dwarven, Halfling, Terran. Favored Class: Fighter. Level Adjustment: +1.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
    ],
  },
  {
    id: "tkel",
    name: "T'kel",
    ruleset: "core",
    source: DM317,
    sourceUrl: DM317_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { dex: 2, int: -2 },
    favoredClass: "Monk",
    levelAdjustment: 0,
    skillBonuses: { swim: 8 },
    traits: [
      {
        key: "tkel-swim",
        name: "Swim",
        description: "A t'kel has a swim speed of 20 feet. A t'kel gains a +8 racial bonus on Swim checks to perform a special action or avoid a hazard, can always take 10 on Swim checks even if distracted or endangered, and can use the run action while swimming in a straight line.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "tkel-darkvision",
        name: "Darkvision",
        description: "A t'kel can see in the dark up to 60 feet.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "tkel-claws",
        name: "Claws",
        description: "A t'kel has two claw attacks that deal 1d4 points of damage plus its Strength modifier.",
        category: "special-attack",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "tkel-languages",
        name: "Languages",
        description: "Automatic Languages: Draconic. Bonus Languages: Common, Elven, Sylvan. Favored Class: Monk. (The printed traits block has no languages line; these are taken from the article's prose, which states that t'kels speak Draconic and that many have learned Common, Elven, and Sylvan — see MANIFEST.md.)",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
    ],
  },
  {
    id: "shifter-317",
    name: "Shifter (Dragon #317 preview)",
    ruleset: "eberron",
    source: DM317,
    sourceUrl: DM317_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Shapechanger"],
    abilityModifiers: { dex: 2, int: -2, cha: -2 },
    favoredClass: "Ranger",
    levelAdjustment: 0,
    skillBonuses: { balance: 2, climb: 2, jump: 2 },
    traits: [
      {
        key: "shifter-317-shifting",
        name: "Shifting (Su)",
        description: "Once per day, as a free action, a shifter taps his lycanthropic heritage for a burst of physical power lasting 3 + his Constitution modifier rounds. At 1st level he chooses one lycanthrope characteristic (see below), which manifests while he shifts and grants a +2 bonus to one physical ability score. Every shifter feat he takes extends shifting by 1 round; every two shifter feats grant one additional use per day. Shifting is supernatural: although derived from lycanthropy, it is neither an affliction nor a curse, is not transmitted by bite or claw attacks, and cannot be cured.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "shifter-317-characteristics",
        name: "Lycanthrope Characteristics",
        description: "The preview's characteristic list replaces the published shifter traits. Armored: +2 Constitution and +2 natural armor while shifted. Biter: +2 Strength and a bite attack dealing 1d6 damage + 1 per 4 character levels (maximum one bite attack per round; usable as a secondary attack at a −5 penalty alongside a weapon). Climber: +2 Dexterity and a climb speed of 20 feet while shifted. Render: +2 Strength and two claw attacks dealing 1d4 damage + 1 per 4 character levels. Runner: +2 Dexterity and +10 feet to base speed while shifted. Tracker: +2 Constitution and the scent ability while shifted (full scent rules as printed); when not shifted, a Tracker shifter gains a +2 bonus on Survival checks.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "shifter-317-low-light-vision",
        name: "Low-Light Vision",
        description: "A shifter can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination, retaining the ability to distinguish color and detail.",
        category: "special-quality",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "shifter-317-athletic",
        name: "Athletic Grace",
        description: "+2 racial bonus on Balance, Climb, and Jump checks (included in this race's skill bonuses).",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
      {
        key: "shifter-317-languages",
        name: "Languages",
        description: "Automatic Languages: Common. Bonus Languages: Elven, Gnome, Halfling, Sylvan. Favored Class: Ranger.",
        category: "trait",
        source: DM317,
        sourceUrl: DM317_PATH,
      },
    ],
  },
];
