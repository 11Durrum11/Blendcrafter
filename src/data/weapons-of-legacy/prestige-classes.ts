import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

// Weapons of Legacy prestige class: the Legacy Champion of Chapter 2
// (pp. 19–22, Table 2–1: The Legacy Champion, p. 20). Short mechanical
// summaries in our own words, cited to book + page. The class's signature
// system — legacy items and their ability menus (Chapter 4: Founding
// Legacies) — is a system this app does not model; it is summarized as
// text on the record and documented in the Batch 8b addendum.
// Source PDF: /a poc dm related/desktop/Sourcebooks/Weapons Of Legacy.pdf

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

const WOL = "Weapons of Legacy";
const WOL_PATH = "/a poc dm related/desktop/Sourcebooks/Weapons Of Legacy.pdf";
const CH2 = `${WOL} — Chapter 2: Heroes of Legacy`;

export const WEAPONS_OF_LEGACY_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "legacy-champion",
    name: "Legacy Champion",
    ruleset: "core",
    source: `${CH2} — Legacy Champion (p. 19)`,
    sourceUrl: WOL_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Concentration", "Decipher Script", "Gather Information", "Knowledge (history)", "Use Magic Device"],
    prerequisites: [
      "Skills: Knowledge (history) 5 ranks",
      "Feats: Least Legacy",
      "Special: Must possess a legacy item; character level 10th",
    ],
    features: [
      {
        key: "legacy-champion-features",
        name: "Legacy Champion Features",
        category: "trait",
        description:
          "A devotee of one particular item of legacy who unlocks and customizes its abilities beyond normal reach. At every level except 1st and 7th, his existing class features advance as if he had gained a level in a previous class (spells per day and known, turning, bonus feats, monk abilities, sneak attack, and so on — but not Hit Dice, attack progression, skill points, or saves). Class skills are the five listed plus the existing class skills from all his classes. Reduced ritual cost: after learning the lesser legacy ritual for his item he performs it without paying its gp cost (personal costs still apply), and at 7th level the same applies to the greater ritual. Bond of lore adds his class level as an insight bonus on Knowledge (history) checks concerning his item. Replace legacy ability (2nd, least; 5th, lesser; 10th, greater) permanently swaps one of the item's abilities for another of the same grade from the founding-legacies menus. Extra legacy ability use grants one extra daily use of a chosen least ability at 3rd level, a lesser ability at 6th, and a greater ability at 9th (a lower-grade ability may be chosen instead). Bonus legacy feat at 4th and 8th level, chosen from the legacy feats of Chapter 2. Legacy items and their ability menus are a system this app does not model.",
        source: `${CH2} — Legacy Champion (pp. 19–22; Table 2–1: The Legacy Champion, p. 20)`,
        sourceUrl: WOL_PATH,
      },
    ],
  },
];
