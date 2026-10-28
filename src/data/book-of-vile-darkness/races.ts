import type { RaceDefinition } from "@/engine/types";

// Book of Vile Darkness races: the two vile races of Chapter 1, each
// printed with a complete standalone racial trait list (Vasharans,
// p. 13; Jerren, p. 14) — not "identical to the base race except as
// noted" variants, so both are converted in full. Book of Vile Darkness
// is a 3.0-era book (2002); neither race prints a level adjustment, so
// both are LA +0 like the human and halfling they parallel. Short
// mechanical summaries in our own words, cited to book + page.
// Source PDF: /A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf

const BOVD = "Book of Vile Darkness";
const BOVD_PATH = "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf";
const CH1 = `${BOVD} — Chapter 1: The Nature of Evil`;

export const BOOK_OF_VILE_DARKNESS_RACES: RaceDefinition[] = [
  {
    id: "vashar",
    name: "Vashar",
    ruleset: "core",
    source: `${CH1} — Vashar (pp. 12–13)`,
    sourceUrl: BOVD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human"],
    abilityModifiers: {},
    favoredClass: "Any",
    levelAdjustment: 0,
    bonusFeatSlots: 1,
    bonusSkillPointsAtFirstLevel: 4,
    bonusSkillPointsPerLevel: 1,
    traits: [
      {
        key: "vashar-type",
        name: "Humanoid (Human)",
        description:
          "Vasharans are humanoid creatures with the human subtype — the gods' first, rejected attempt at humanity, a race evil to the core whose driving goal is deicide. A Vasharan's alignment is any evil.",
        category: "trait",
        source: `${CH1} — Vashar (pp. 12–13)`,
        sourceUrl: BOVD_PATH,
      },
      {
        key: "vashar-vile-feat",
        name: "Vile to the Core",
        description:
          "Because they are vile to the core, Vasharans each receive 1 extra vile feat at 1st level (see the vile feats in Chapter 4 of Book of Vile Darkness). This is the Vasharan's bonus feat slot, recorded above: unlike a human's free choice, the printed trait list restricts it to a vile feat.",
        category: "trait",
        source: `${CH1} — Vasharan Racial Traits (p. 13)`,
        sourceUrl: BOVD_PATH,
      },
      {
        key: "vashar-skill-points",
        name: "Versatile (Human Skill Points)",
        description:
          "A Vasharan receives 4 extra skill points at 1st level and 1 extra skill point at each additional level, like a human. (The printed trait list specifies that the 4 skill points at 1st level are added on as a bonus, not multiplied in.) Automatic language: Common. Bonus languages: any (other than secret languages such as Druidic). Favored class: any.",
        category: "trait",
        source: `${CH1} — Vasharan Racial Traits (p. 13)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "jerren",
    name: "Jerren",
    ruleset: "core",
    source: `${CH1} — Jerren (pp. 13–14)`,
    sourceUrl: BOVD_PATH,
    size: "Small",
    baseSpeed: 20,
    type: "Humanoid",
    subtypes: ["Halfling"],
    abilityModifiers: { dex: 2, str: -2 },
    favoredClass: "Rogue",
    levelAdjustment: 0,
    skillBonuses: { intimidate: 2, bluff: 2, "move-silently": 2, listen: 2 },
    traits: [
      {
        key: "jerren-type",
        name: "Humanoid (Halfling)",
        description:
          "Jerren are halflings who turned to corrupt magic and poison to survive a goblinoid war, and came out scary, untruthful, and sneaky. As Small creatures, they gain a +1 size bonus to Armor Class, a +1 size bonus on attack rolls, and a +4 size bonus on Hide checks, but must use smaller weapons and carry only three-quarters the load of a Medium character. (The Hide size bonus is part of the Small size entry and is not repeated in skillBonuses.)",
        category: "trait",
        source: `${CH1} — Jerren Racial Traits (p. 14)`,
        sourceUrl: BOVD_PATH,
      },
      {
        key: "jerren-skill-bonuses",
        name: "Scary, Untruthful, and Sneaky",
        description:
          "Jerren gain a +2 racial bonus on Intimidate, Bluff, and Move Silently checks (recorded in skillBonuses), a +2 racial bonus on Listen checks (also in skillBonuses), and a +1 racial bonus on attack rolls with a thrown weapon.",
        category: "trait",
        source: `${CH1} — Jerren Racial Traits (p. 14)`,
        sourceUrl: BOVD_PATH,
      },
      {
        key: "jerren-saving-throws",
        name: "Surprisingly Hard to Mishap",
        description:
          "Jerren gain a +1 racial bonus on all saving throws, plus a +2 morale bonus on saving throws against fear, which stacks with the +1 bonus on saving throws in general. Automatic languages: Common and Halfling. Bonus languages: Infernal, Abyssal, Goblin, and Orc. Favored class: Rogue.",
        category: "trait",
        source: `${CH1} — Jerren Racial Traits (p. 14)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
];
