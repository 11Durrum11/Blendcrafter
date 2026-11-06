import type { RaceDefinition } from "@/engine/types";

// Drow of the Underdark (WotC, D&D 3.5) — the Drow
// Racial Traits block, Chapter 1: All About the Drow
// (printed p. 36), transcribed from Shaun's own copy.
// The id carries the "-dotu" suffix because the
// catalog already has a "drow" race record (from
// Races of Eberron); this book's printing is the
// Monster Manual-style drow (level adjustment +2,
// spell resistance 11 + class level, favored class
// wizard for males / cleric for females). See
// MANIFEST.md's shadowing list: at integration the
// existing catalog record is kept and this record is
// the duplicate candidate.
//
// The book's other drow-kind entry, the Szarkai
// (Albino Drow), Chapter 5 (pp. 118-120), prints NO
// separate racial statistics: "Szarkai have identical
// game statistics to ordinary drow" (p. 120). No
// separate record is created for it; it is covered in
// reference.md and classified in SCREENING.md under
// this record's bucket. The Appendix's Drow Racial
// Class (pp. 221-222) is a monster-class progression,
// not a race, and is written up in reference.md
// following the Planar Handbook pack's monster-class
// precedent. Summaries are short mechanical
// paraphrases in our own words; no book prose is
// reproduced.

const DOTU = "Drow of the Underdark";
const DOTU_PATH = "library-staging/books/drow-of-the-underdark.pdf";
const CH1 = `${DOTU} — Chapter 1: All About the Drow`;

export const DOTU_RACES: RaceDefinition[] = [
  {
    id: "drow-dotu",
    name: "Drow",
    ruleset: "core",
    source: `${CH1} (p. 36)`,
    sourceUrl: DOTU_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Elf"],
    abilityModifiers: { dex: 2, con: -2, int: 2, cha: 2 },
    favoredClass: "Wizard (male) or Cleric (female)",
    levelAdjustment: 2,
    skillBonuses: { listen: 2, search: 2, spot: 2 },
    traits: [
      {
        key: "drow-dotu-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 120 feet.",
        category: "special-quality",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
      {
        key: "drow-dotu-immunity-to-sleep",
        name: "Immunity to Sleep",
        description: "Immunity to sleep spells, and a +2 racial bonus on Will saves against spells, spell-like abilities, and enchantment effects of other sorts.",
        category: "special-quality",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
      {
        key: "drow-dotu-spell-resistance",
        name: "Spell Resistance",
        description: "Spell resistance equal to 11 + class level.",
        category: "special-quality",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
      {
        key: "drow-dotu-spell-like-abilities",
        name: "Spell-Like Abilities",
        description: "Once per day: dancing lights, darkness, and faerie fire. Caster level equals the drow's class level.",
        category: "special-quality",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
      {
        key: "drow-dotu-weapon-proficiency",
        name: "Weapon Proficiency",
        description: "A drow is automatically proficient with the hand crossbow, the rapier, and the short sword.",
        category: "trait",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
      {
        key: "drow-dotu-keen-senses",
        name: "Keen Senses",
        description: "+2 racial bonus on Listen, Search, and Spot checks. A drow who merely passes within 5 feet of a secret or concealed door is entitled to a Search check to notice it as if she were actively looking for it.",
        category: "trait",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
      {
        key: "drow-dotu-languages",
        name: "Languages",
        description: "Automatic Languages: Common, Elven, Undercommon. Bonus Languages: Abyssal, Aquan, Draconic, Drow Sign Language, Gnome, Goblin.",
        category: "trait",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
      {
        key: "drow-dotu-light-blindness",
        name: "Light Blindness",
        description: "Abrupt exposure to bright light (such as sunlight or a daylight spell) blinds drow for 1 round. In addition, they take a -1 circumstance penalty on attack rolls, saves, and checks when in bright light.",
        category: "special-quality",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
      {
        key: "drow-dotu-challenge-rating",
        name: "Challenge Rating",
        description: "As printed with the racial traits: drow with levels in NPC classes have a CR equal to their character level; drow with levels in PC classes have a CR equal to their character level +1.",
        category: "trait",
        source: CH1,
        sourceUrl: DOTU_PATH,
      },
    ],
  },
];
