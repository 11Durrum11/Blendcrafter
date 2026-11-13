// Dragon Magazine #339 (January 2006) — race draft: 3 races.
// "Races of Spelljammer" (Joshua Cole), pp. 26-31 — three PC races in
// full "as characters" form: the GIFF, the INSECTARE, and the SCRO.
// Typed RaceDefinition in the house shape of recent packs (issue-328
// precedent): traits via the t() helper, racial skill bonuses in
// skillBonuses with conditionality spelled out in the trait text.
// Every trait block was verified against rendered page images (magazine
// pp. 27, 29, 31); the image governs over the OCR stream.
//
// OVERLAP CHECK (required by the brief — itemized in SCREENING.md §2):
// the live catalog holds two Spelljammer-pack races named Giff and Scro,
// both converted in-house from AD&D 2e sources. The #339 printings are
// WotC's official 3.5 presentations and differ mechanically on nearly
// every line (size, racial Hit Dice, ability modifiers, level adjustment,
// favored class, signature traits), so per the same-name/both-live
// precedent they stage beside the conversions under -339 ids. The
// Insectare has no live record under any spelling and stages plain.

import type { RaceDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #339 — Races of Spelljammer (Joshua Cole), pp. 26-31";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function t(key: string, name: string, description: string) {
  return { key, name, description, category: "trait" as const, source: SRC, sourceUrl: SRC_URL };
}

export const DRAGON_339_RACES: RaceDefinition[] = [
  {
    id: "giff-339",
    name: "Giff",
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: 8, con: 4, int: -2, wis: -4 },
    favoredClass: "Fighter",
    levelAdjustment: 3,
    racialHitDice: 2,
    hitDie: "d8",
    skillBonuses: { craft: 2, intimidate: 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "giff-339-ability-scores",
        "Ability Scores",
        "+8 Strength, +4 Constitution, −2 Intelligence, −4 Wisdom. A giff begins play with two levels of monstrous humanoid, which provide 2d8 Hit Dice, a +2 base attack bonus, and base saving throw bonuses of +0 Fortitude, +3 Reflex, and +3 Will. A giff's monstrous humanoid levels give it skill points equal to 5 × (2 + Int modifier, minimum 1) and its racial class skills are Climb, Craft, Intimidate, Jump, Listen, and Spot. A giff's monstrous humanoid levels also grant it one feat.",
      ),
      t(
        "giff-339-medium",
        "Medium",
        "As Medium creatures, giff have no special bonuses or penalties due to their size. Giff base land speed is 30 feet.",
      ),
      t(
        "giff-339-powerful-build",
        "Powerful Build (Ex)",
        "The physical stature of the giff allows them to function in many ways as if they were one size category larger: whenever a giff is subject to a size modifier or special size modifier for an opposed check (such as during grapple checks, bull rush attempts, and trip attempts), the giff is treated as one size larger if doing so is advantageous to it; a giff is also considered one size larger when determining whether a creature's special attacks based on size (such as improved grab or swallow whole) can affect it; and a giff can use weapons designed for a creature one size larger without penalty, although its space and reach remain those of a creature of its actual size. The benefits of this racial trait stack with the effects of powers, abilities, and spells that change the subject's size category.",
      ),
      t(
        "giff-339-explosive-weapon-proficiency",
        "Explosive Weapon Proficiency",
        "Giff receive the Exotic Weapon Proficiency (firearms) feat for free. In addition, a giff naturally grasps the proper methods of alchemy, gaining a +2 racial bonus on Craft (alchemy) checks when dealing with smoke powder, and a giff never needs to make a Craft (alchemy) check to create smoke powder. (APOC note: firearms are simple weapons in APOC; the feat-level familiarity is carried as printed.)",
      ),
      t(
        "giff-339-fearless-mercenaries",
        "Fearless Mercenaries",
        "Giff are immune to fear effects. Known for their fearlessness, many scholars speculate that giff are magically or psionically inert as a side effect of their battle prowess, although giff keep their own counsel on this mystery.",
      ),
      t(
        "giff-339-skills",
        "Racial Skill Bonuses",
        "Giff gain a +2 racial bonus on Craft (any two) checks and on Intimidate checks (carried in skillBonuses as Craft +2 and Intimidate +2): giff make excellent laborers, crafters, and engineers despite their brutish manner.",
      ),
      t(
        "giff-339-languages",
        "Languages",
        "Automatic languages: Common, Giff. Bonus languages: Draconic, Dwarven, Elven, Goblin, Orc, Terran. Beyond these, most giff also make a point of learning the languages of those who employ them.",
      ),
      t(
        "giff-339-favored-class",
        "Favored Class: Fighter",
        "A multiclass giff's fighter class doesn't count when determining whether he takes an experience point penalty for multiclassing. Level Adjustment: +3.",
      ),
    ],
  },
  {
    id: "insectare",
    name: "Insectare",
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: { dex: 2, con: -2, int: 2, cha: 2 },
    favoredClass: "Sorcerer",
    levelAdjustment: 1,
    naturalArmor: 2,
    skillBonuses: { bluff: 2, disguise: 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "insectare-type-note",
        "Type (adjudicated)",
        "The article prints no type line for the insectare. Staged as Humanoid: the race is presented as an ordinary LA +1 PC race with no racial Hit Dice and no monstrous traits beyond its natural armor and antennae; the article describes the insectare as humanoids whose ancestry appears equal parts elven and insectoid. Flagged in SCREENING.md §2 as an extraction adjudication.",
      ),
      t(
        "insectare-ability-scores",
        "Ability Scores",
        "+2 Dexterity, −2 Constitution, +2 Intelligence, +2 Charisma: insectare suffer from few weaknesses and pride themselves on their quickness of mind and body, and their intense personalities overpower most other beings.",
      ),
      t(
        "insectare-medium",
        "Medium",
        "As Medium creatures, insectare have no special bonuses or penalties due to their size. Insectare base land speed is 30 feet.",
      ),
      t(
        "insectare-darkvision",
        "Darkvision",
        "Darkvision out to 60 feet. Darkvision is black and white only, but it is otherwise just like normal sight, and insectare can function just fine with no light at all.",
      ),
      t(
        "insectare-antenna-rake",
        "Natural Weapons (Antenna Rake)",
        "An insectare can make two attacks with his antennae each round, treating them as an off-hand weapon (with all the associated penalties). These attacks deal 1d3 points of slashing damage plus one-half the insectare's Strength bonus. An insectare can instead attack with only a single antenna as an attack action at his normal bonus.",
      ),
      t(
        "insectare-natural-armor",
        "Natural Armor",
        "Natural armor +2 (carried in naturalArmor): the chitin plates on an insectare's body grant him superior natural defenses.",
      ),
      t(
        "insectare-skills",
        "Racial Skill Bonuses",
        "+2 racial bonus on Bluff and Disguise checks (carried in skillBonuses): insectare possess a talent for deception and take great pains to keep their nature hidden.",
      ),
      t(
        "insectare-elven-blood",
        "Elven Blood",
        "For all effects related to race, an insectare is considered an elf.",
      ),
      t(
        "insectare-languages",
        "Languages",
        "Automatic languages: Common and Insectare. Bonus languages: Any. Insectare actively learn the languages of those they hope to subvert and dominate.",
      ),
      t(
        "insectare-favored-class",
        "Favored Class: Sorcerer",
        "Favored Class: Sorcerer — insectare cast spells naturally, drawing power from their arcane ancestry; they constantly seek new spells, which are somehow absorbed into future bloodlines and eventually learned by other insectare. (The article's footnote adds: if Complete Adventurer is available in your campaign, the insectare's favored class is spellthief instead.) Level Adjustment: +1.",
      ),
    ],
  },
  {
    id: "scro-339",
    name: "Scro",
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Orc"],
    abilityModifiers: { str: 4, dex: 2, con: 2 },
    favoredClass: "Monk",
    levelAdjustment: 2,
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "scro-339-ability-scores",
        "Ability Scores",
        "+4 Strength, +2 Dexterity, +2 Constitution: scro possess the best traits of orcs and hobgoblins with few of the drawbacks.",
      ),
      t(
        "scro-339-medium",
        "Medium",
        "As Medium creatures, scro have no special bonuses or penalties due to their size. (The printed trait block gives no base speed line; staged at 30 feet, the standard for a Medium humanoid — noted in the pack MANIFEST.)",
      ),
      t(
        "scro-339-darkvision",
        "Darkvision",
        "Scro can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise just like normal sight, and scro can function just fine with no light at all.",
      ),
      t(
        "scro-339-orc-blood",
        "Orc Blood",
        "For all effects related to race, scro are considered orcs: scro, for example, are just as vulnerable to special effects that affect orcs as their ancestors are, and they can use magic items that are usable only by orcs.",
      ),
      t(
        "scro-339-elf-hatred",
        "Hatred of Elves",
        "+1 racial bonus on attack rolls against elves (including drow): from the day they're born, scro learn to hate elves and how to fight them. (APOC note: drow do not exist in APOC; the bonus stands against elves as printed.)",
      ),
      t(
        "scro-339-languages",
        "Languages",
        "Automatic languages: Common and Scro. Bonus languages: Dwarven, Elven, Giff, Goblin, and Orc. The scro learn the languages they need to perform their duties.",
      ),
      t(
        "scro-339-favored-class",
        "Favored Class: Monk",
        "A multiclass scro's monk class does not count when determining whether he takes an XP penalty for multiclassing. Scro believe in iron self-discipline and practice unarmed combat extensively; most scro, however, are multiclass monk/fighters. Level Adjustment: +2.",
      ),
    ],
  },
];
