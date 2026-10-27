/**
 * Sandstorm prestige classes: all six from Chapter 3 of
 * Sandstorm (Wizards of the Coast). Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Sandstorm.pdf
 * Progression tables are the book's printed tables (Tables 3–2…
 * 3–7). Prerequisites are free text (shown in the UI,
 * soft-checked only), matching the other packs; Sandstorm prints
 * them as "Entry Requirements." Spellcasting advancement is
 * stated in each class's feature summary, following the house
 * pattern. Page citations are the book's printed page numbers;
 * in this PDF the printed page is the PDF page minus one.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const SS = "Sandstorm";
const SS_PATH = "/A POC PC related/5.Splat/Sandstorm.pdf";
const CH3 = `${SS} — Chapter 3: Prestige Classes`;

export const SANDSTORM_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "ashworm-dragoon",
    name: "Ashworm Dragoon",
    ruleset: "core",
    source: `${CH3} — Ashworm Dragoon (p. 66)`,
    sourceUrl: SS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Profession", "Ride", "Spot"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Handle Animal 4 ranks, Ride 8 ranks",
      "Feats: Mounted Combat, Ride-By Attack",
      "Special: Must have ridden an ashworm",
    ],
    features: [
      {
        key: "ashworm-dragoon-features",
        name: "Ashworm Dragoon Features",
        category: "trait",
        description:
          "A cavalier of the waste bonded to an ashworm mount, gaining a saddle bonus on Ride checks with it (1st). Bonus feats at 2nd and 9th, heightened sting (3rd), relentless shield (4th), stamp into the sand (5th), sand rider (6th), full mounted attack (7th), spirited worm (8th), and earth rider at 10th. This class does not advance spellcasting.",
        source: `${CH3} — Ashworm Dragoon (pp. 66–69)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "lord-of-tides",
    name: "Lord of Tides",
    ruleset: "core",
    source: `${CH3} — Lord of Tides (p. 71)`,
    sourceUrl: SS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Knowledge (geography)", "Knowledge (nature)", "Knowledge (the planes)", "Listen", "Profession", "Search", "Survival"],
    prerequisites: [
      "Skills: Survival 8 ranks",
      "Feats: Scorpion's Resolve",
      "Spells: Able to cast 2nd-level divine spells",
      "Special: Must complete an initiation ritual and return with a relic, as described in the class entry",
    ],
    features: [
      {
        key: "lord-of-tides-features",
        name: "Lord of Tides Features",
        category: "trait",
        description:
          "A divine master of the hidden waters beneath the waste. Locate potable water and Heat Endurance as a bonus feat at 1st (Improved Heat Endurance instead if he already has Heat Endurance), release the water within 1/day (2nd; 2/day at 4th, 3/day at 7th, 4/day at 10th), burrow 5 ft. through earth (3rd), summon elemental (6th), summon elder elemental (8th), elemental jaunt (9th), and elemental portal (10th). Spellcasting advances +1 level of an existing spellcasting class at levels 2–10 (not at 1st).",
        source: `${CH3} — Lord of Tides (pp. 71–74)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "sand-shaper",
    name: "Sand Shaper",
    ruleset: "core",
    source: `${CH3} — Sand Shaper (p. 77)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Intimidate", "Jump", "Knowledge (nature)", "Listen", "Profession", "Ride", "Search", "Sense Motive", "Spellcraft", "Spot", "Survival"],
    prerequisites: [
      "Alignment: Any neutral",
      "Skills: Knowledge (nature) 4 ranks, Survival 4 ranks",
      "Feats: Touchstone (City of the Dead)",
      "Spells or Spell-Like Abilities: Arcane caster level 5th",
    ],
    features: [
      {
        key: "sand-shaper-features",
        name: "Sand Shaper Features",
        category: "trait",
        description:
          "An arcane caster who sculpts the waste itself. Desert insight, dust magic (a list of desert spells added to his spells known at each class level), and sand shape at 1st; sandform (2nd), sand stride (3rd), improved sand shape (4th), improved dust magic 3/day (5th; 4/day at 7th), desert slumber (7th), greater dust magic 5/day (9th), and desert shroud (10th). Spellcasting advances +1 level of an existing arcane spellcasting class at levels 2–8 and 10 (not at 1st or 9th).",
        source: `${CH3} — Sand Shaper (pp. 77–81)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "scion-of-tem-et-nu",
    name: "Scion of Tem-Et-Nu",
    ruleset: "core",
    source: `${CH3} — Scion of Tem-Et-Nu (p. 82)`,
    sourceUrl: SS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Gather Information", "Handle Animal", "Heal", "Knowledge (nature)", "Knowledge (religion)", "Profession", "Ride", "Sense Motive", "Survival", "Swim"],
    prerequisites: [
      "Alignment: Lawful good or lawful neutral",
      "Base Attack Bonus: +5",
      "Skills: Diplomacy 8 ranks, Swim 4 ranks",
      "Special: Must be blessed by Tem-Et-Nu in a ritual held in one of her temples",
    ],
    features: [
      {
        key: "scion-of-tem-et-nu-features",
        name: "Scion of Tem-Et-Nu Features",
        category: "trait",
        description:
          "A champion of the river goddess Tem-Et-Nu. Buoyancy and river mastery (1st), river's vigor 1/day (2nd; 2/day at 6th), river walk and the river's life is mine (3rd), smite evil 1/day (4th; 2/day at 8th), divine power 1/day (5th; 2/day at 10th), control water (6th), restoring immersion (7th), and divert river (9th). Spellcasting advances +1 level of an existing spellcasting class at levels 2, 4, 6, 8, and 10.",
        source: `${CH3} — Scion of Tem-Et-Nu (pp. 82–85)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "scorpion-heritor",
    name: "Scorpion Heritor",
    ruleset: "core",
    source: `${CH3} — Scorpion Heritor (p. 86)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ, G, P, P),
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump", "Knowledge (local)", "Knowledge (nature)", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Survival", "Swim", "Tumble", "Use Magic Device", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +3",
      "Skills: Hide 8 ranks, Knowledge (nature) 4 ranks, Survival 4 ranks",
      "Feats: Scorpion's Resolve",
      "Special: Must have survived the venomous sting of a monstrous scorpion",
    ],
    features: [
      {
        key: "scorpion-heritor-features",
        name: "Scorpion Heritor Features",
        category: "trait",
        description:
          "A stealthy heir to the scorpion's gifts. Scorpion's Instincts as a bonus feat (1st), sneak attack +1d6 (2nd, increasing by +1d6 every even level to +5d6 at 10th), scorpion form (3rd), envenom blade and immunity to scorpion venom (5th), Scorpion's Sense as a bonus feat (7th), and tail of the scorpion (9th). This class does not advance spellcasting.",
        source: `${CH3} — Scorpion Heritor (pp. 86–89)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "walker-in-the-waste",
    name: "Walker in the Waste",
    ruleset: "core",
    source: `${CH3} — Walker in the Waste (p. 90)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft (alchemy)", "Decipher Script", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (geography)", "Knowledge (nature)", "Profession", "Spellcraft", "Survival"],
    prerequisites: [
      "Alignment: Any nongood",
      "Feats: Heat Endurance",
      "Spells: Able to cast at least three spells of the Sand or Thirst domain as divine spells",
    ],
    features: [
      {
        key: "walker-in-the-waste-features",
        name: "Walker in the Waste Features",
        category: "trait",
        description:
          "A divine pariah who carries the waste's desiccation with him — and, at 10th level, undergoes the Sere Rite to become a dry lich (see the Sandstorm template pack). Desiccating touch 1d6 and Improved Heat Endurance as a bonus feat (1st; the touch damage rises to 2d6 at 3rd, 3d6 at 5th, 4d6 at 7th, and 5d6 at 9th), the wasting (2nd), local drought (3rd), withered toughness (4th), pillar of salt (5th), create sand golem (6th), create salt mummy (8th), greater drought (9th), and dry lich (10th). Spellcasting advances +1 level of an existing spellcasting class at levels 1–9 (not at 10th).",
        source: `${CH3} — Walker in the Waste (pp. 90–94)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
];
