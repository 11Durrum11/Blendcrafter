import type { RaceDefinition } from "@/engine/types";

// Monster Manual V race: the Jaebrin, the book's one race with
// a full "Jaebrins as Characters" trait list (p. 93) — the
// book's table of contents files it under "For Player
// Characters: Race". The book's other ECL-listed creatures
// (arcadian avenger, banshrae, elemental magi, ethereal
// defiler, greenspawn zealot, shaedling, ushemoi, the kuo-toa
// and hobgoblin class variants, and the rest) print only a
// favored class and a level adjustment in "with class levels"
// sidebars, with no trait list, and are not converted. Short
// mechanical summaries in our own words, cited to book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Monster Manual 5.pdf

const MM5 = "Monster Manual V";
const MM5_PATH = "/A POC PC related/4.Core books/monster manuals/Monster Manual 5.pdf";

export const MONSTER_MANUAL_V_RACES: RaceDefinition[] = [
  {
    id: "jaebrin",
    name: "Jaebrin",
    ruleset: "core",
    source: `${MM5} — Jaebrin (pp. 92–93)`,
    sourceUrl: MM5_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Fey",
    subtypes: [],
    abilityModifiers: { str: -2, cha: 2 },
    favoredClass: "beguiler",
    levelAdjustment: 1,
    skillBonuses: { appraise: 2, bluff: 2, perform: 2, diplomacy: 2, spellcraft: 4 },
    traits: [
      {
        key: "jaebrin-traits",
        name: "Jaebrin Traits",
        description:
          "Jaebrins possess the following racial traits: fey type (they are not subject to spells or effects that affect only humanoids), low-light vision, a +1 luck bonus to AC, and immunity to enchantment spells and effects. A jaebrin gains a +1 racial bonus on the saving throw DCs of enchantment spells it casts. Jaebrins treat Spellcraft as a class skill and are considered trained in it even if they have no ranks; the +4 racial bonus on Spellcraft checks recorded above applies only to checks involving enchantment spells and effects. Like humanoids, jaebrins gain their Hit Dice from the class or classes they choose to pursue. Automatic languages: Common, Sylvan; bonus languages: Draconic, Elven, Goblin, Gnome, Halfling.",
        category: "special-quality",
        source: `${MM5} — Jaebrin (p. 93)`,
        sourceUrl: MM5_PATH,
      },
      {
        key: "jaebrin-will-sapper",
        name: "Will Sapper (Ex) and Feign Enchantment (Su)",
        description:
          "Natural attack: bite (1d3). Will sapper: any creature damaged by a jaebrin's bite must succeed on a Will save (DC 10 + 1/2 the jaebrin's class level + its Con modifier) or take a –4 penalty on Will saves for 1 minute; the effects of multiple bites don't stack. Feign enchantment: a jaebrin absorbs the energy of enchantment effects used on it, learning the intended effect, and can pretend to be affected — fooling even detect magic, arcane sight, and similar effects, since the absorbed energy shows in its aura for the effect's duration or until dismissed; only a viewer who wins an opposed Sense Motive check against the jaebrin's Bluff check can discern that the jaebrin is not enchanted.",
        category: "special-attack",
        source: `${MM5} — Jaebrin (pp. 92–93)`,
        sourceUrl: MM5_PATH,
      },
    ],
  },
];
