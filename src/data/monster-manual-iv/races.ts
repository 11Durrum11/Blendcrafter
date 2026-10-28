import type { RaceDefinition } from "@/engine/types";

// Monster Manual IV race: the Varag, the book's one creature
// given a full player-character presentation — a "For Player
// Characters: The Varag Racial Class" section (pp. 170–171)
// with a complete printed Varag Base Traits list, a racial
// class progression that adds the rest of the package, and a
// printed level adjustment (+2) in its "Varags with Class
// Levels" section (p. 170). The totals below are the full
// package (base traits plus the racial class's printed
// increases): ability modifiers +4 Str (base +2, +2 at 5th
// racial level), +4 Dex (+2 at 2nd and 4th), +2 Con (3rd),
// –4 Int; natural armor +3 (+1 at 1st, +2 at 3rd, +3 at 5th);
// scent 30 feet (full scent at 4th); Move Silently racial
// bonus +8 (base +4, improved +4 at 3rd); Run and Spring
// Attack as bonus feats. Printed quirk, recorded as printed:
// the base traits give a varag's base land speed as 40 feet,
// while the monster stat block (p. 168) lists 60 feet — the
// base traits govern here, per the trait-list precedent.
// The book's spawn of Tiamat and its other ECL-listed
// creatures print only a favored class and a level adjustment
// in "with class levels" sidebars, with no trait list, and
// are not converted. Short mechanical summaries in our own
// words, cited to book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Monster Manual 4.pdf

const MM4 = "Monster Manual IV";
const MM4_PATH = "/A POC PC related/4.Core books/monster manuals/Monster Manual 4.pdf";

export const MONSTER_MANUAL_IV_RACES: RaceDefinition[] = [
  {
    id: "varag",
    name: "Varag",
    ruleset: "core",
    source: `${MM4} — Varag (pp. 168–171)`,
    sourceUrl: MM4_PATH,
    size: "Medium",
    baseSpeed: 40,
    type: "Humanoid",
    subtypes: ["Goblinoid"],
    abilityModifiers: { str: 4, dex: 4, con: 2, int: -4 },
    favoredClass: "scout",
    levelAdjustment: 2,
    racialHitDice: 3,
    hitDie: "d8",
    naturalArmor: 3,
    skillBonuses: { "move-silently": 8, survival: 4 },
    traits: [
      {
        key: "varag-racial-hit-dice",
        name: "Racial Hit Dice",
        description:
          "A varag begins with three levels of humanoid (3d8 Hit Dice), gained through the book's varag racial class: the first racial Hit Die provides skill points equal to (2 + Int modifier, minimum 1) × 4, and the second and third Hit Dice (at 2nd and 4th racial level) provide 2 + Int modifier each; its racial class skills are Jump, Move Silently, and Survival. A varag has darkvision out to 60 feet and the scent ability (30 feet). (Printed quirk: the Varag Base Traits list a base land speed of 40 feet, recorded here, while the varag monster stat block lists 60 feet.)",
        category: "special-quality",
        source: `${MM4} — Varag (pp. 170–171)`,
        sourceUrl: MM4_PATH,
      },
      {
        key: "varag-traits",
        name: "Varag Traits",
        description:
          "A varag gains Run (2nd racial level) and Spring Attack (5th racial level) as bonus feats. At 5th racial level a varag can always choose to take 10 on Move Silently checks, even if rushed or threatened. Its +8 racial bonus on Move Silently checks and +4 racial bonus on Survival checks when tracking by scent are recorded above. Varags are proficient with all martial weapons. Automatic language: Goblin; bonus languages: Common, Draconic, Dwarven, Infernal, Giant, Orc.",
        category: "special-quality",
        source: `${MM4} — Varag (pp. 168–171)`,
        sourceUrl: MM4_PATH,
      },
    ],
  },
];
