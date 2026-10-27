/**
 * Miniatures Handbook prestige classes: all seven from Chapter 1
 * of Miniatures Handbook (Wizards of the Coast). Built
 * 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC DM related/Desktop/Sourcebooks/Miniatures Handbook.pdf
 * Progression tables are the book's printed tables (Tables 1–7…
 * 1–13). Prerequisites are free text (shown in the UI,
 * soft-checked only), matching the other packs. Spellcasting
 * advancement is stated in each class's feature summary,
 * following the house pattern.
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
const G5 = [2, 3, 3, 4, 4]; // good save, 5 levels
const P5 = [0, 0, 1, 1, 1]; // poor save, 5 levels
const TQ5 = [0, 1, 2, 3, 3];
const ZERO = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // war hulk: printed BAB never rises

const MH = "Miniatures Handbook";
const MH_PATH = "/A POC DM related/Desktop/Sourcebooks/Miniatures Handbook.pdf";
const CH1 = `${MH} — Chapter 1: Characters`;

export const MINIATURES_HANDBOOK_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "bonded-summoner",
    name: "Bonded Summoner",
    ruleset: "core",
    source: `${CH1} — Bonded Summoner (p. 16)`,
    sourceUrl: MH_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (the planes) 8 ranks, Speak Language (Aquan, Auran, Ignan, or Terran)",
      "Spells: Able to cast 2nd-level arcane spells",
      "Special: Must have a familiar",
    ],
    features: [
      {
        key: "bonded-summoner-features",
        name: "Bonded Summoner Features",
        category: "trait",
        description:
          "An arcane caster bonded to an elemental companion that grows with him: Medium (1st), Large (3rd), Huge (5th), greater (7th), and elder (9th), with familiar-style benefits scaled by his total arcane level. He gains resistance to his companion's energy type 5 (1st; 10 at 3rd, 15 at 5th, 20 at 7th, and full immunity at 9th), immunity to sleep (3rd), poison (5th), paralysis and stun (7th), cannot be flanked (9th), and at 10th gains elemental form, the elemental type, and immunity to critical hits. Spellcasting advances +1 level of an existing arcane spellcasting class at every even level (2nd, 4th, 6th, 8th, 10th).",
        source: `${CH1} — Bonded Summoner (pp. 16–18)`,
        sourceUrl: MH_PATH,
      },
    ],
  },
  {
    id: "dragon-samurai",
    name: "Dragon Samurai",
    ruleset: "core",
    source: `${CH1} — Dragon Samurai (p. 19)`,
    sourceUrl: MH_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Profession", "Ride", "Sense Motive", "Swim"],
    prerequisites: [
      "Alignment: Depends on the color of the dragon samurai's clan (see the class entry)",
      "Base Attack Bonus: +5",
      "Skills: Knowledge (arcana) 2 ranks",
      "Special: Must have no experience as a dragon samurai of a different clan",
    ],
    features: [
      {
        key: "dragon-samurai-features",
        name: "Dragon Samurai Features",
        category: "trait",
        description:
          "A warrior sworn to a dragon clan, gaining a breath weapon of the clan's energy type once per day (1d8 damage per class level, Reflex save DC 10 + class level + Con modifier) and resistance to that energy 5 (1st; 10 at 5th, 15 at 7th, 20 at 10th). Dragon friend (2nd: +4 on Charisma-based checks with dragons of his clan's color), immunity to dragon fear (3rd), elemental weapon +1d6 (4th; +2d6 at 9th), dragon ride (6th: +4 on Ride checks while riding a dragon), and Blind-Fight as a bonus feat (8th). This class does not advance spellcasting.",
        source: `${CH1} — Dragon Samurai (pp. 19–20)`,
        sourceUrl: MH_PATH,
      },
    ],
  },
  {
    id: "havoc-mage",
    name: "Havoc Mage",
    ruleset: "core",
    source: `${CH1} — Havoc Mage (p. 20)`,
    sourceUrl: MH_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ5, G5, P5, G5),
    classSkills: ["Climb", "Concentration", "Craft", "Handle Animal", "Intimidate", "Jump", "Knowledge (arcana)", "Ride", "Spellcraft", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Knowledge (arcana) 5 ranks",
      "Spells: Able to cast 2nd-level arcane spells",
    ],
    features: [
      {
        key: "havoc-mage-features",
        name: "Havoc Mage Features",
        category: "trait",
        description:
          "A five-level class for gishes: battlecast (1st) lets him attack and cast an arcane spell of up to 2nd level in the same full-round action, even with no free hand; the spell level cap rises to 4th at 3rd level and 8th at 5th. Spellcasting advances +1 level of an existing arcane spellcasting class at levels 2, 4, and 5.",
        source: `${CH1} — Havoc Mage (p. 20)`,
        sourceUrl: MH_PATH,
      },
    ],
  },
  {
    id: "skullclan-hunter",
    name: "Skullclan Hunter",
    ruleset: "core",
    source: `${CH1} — Skullclan Hunter (p. 21)`,
    sourceUrl: MH_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (religion)", "Listen", "Move Silently", "Open Lock", "Search", "Sense Motive", "Spot", "Swim", "Tumble"],
    prerequisites: [
      "Alignment: Any good",
      "Skills: Knowledge (religion) 8 ranks",
      "Special: Able to turn undead",
      "Special: Sneak attack +2d6",
    ],
    features: [
      {
        key: "skullclan-hunter-features",
        name: "Skullclan Hunter Features",
        category: "trait",
        description:
          "A rogue-cleric who eradicates undead. Track undead (1st: track undead using Knowledge (religion) in place of Survival), divine strike (2nd: his sneak attack dice, from any source, deal damage to undead as though making a sneak attack), immunity to undead fear (3rd), sneak attack +1d6 (3rd; +2d6 at 6th, +3d6 at 9th), immunity to disease and protection from evil (4th), sword of light (5th), immunity to paralysis (7th), immunity to ability drain and ability damage (8th), sword of darkness (9th), and immunity to energy drain (10th). This class does not advance spellcasting or turning.",
        source: `${CH1} — Skullclan Hunter (pp. 21–22)`,
        sourceUrl: MH_PATH,
      },
    ],
  },
  {
    id: "tactical-soldier",
    name: "Tactical Soldier",
    ruleset: "core",
    source: `${CH1} — Tactical Soldier (p. 22)`,
    sourceUrl: MH_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Ride", "Sense Motive", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Sense Motive 2 ranks",
      "Feats: Cleave, Combat Reflexes",
    ],
    features: [
      {
        key: "tactical-soldier-features",
        name: "Tactical Soldier Features",
        category: "trait",
        description:
          "A master of melee teamwork. Flanker (1st), sidestep (2nd), interpose (3rd), defensive shield (4th: adjacent allies gain a +2 dodge bonus to AC), offensive strike (5th: +4 on melee attack and damage rolls for 1 round, but attacks against her are automatic threats and her saves against spells automatically fail), delayed cleave (7th), unbalancing blow (8th), and reciprocal strike (10th: attack of opportunity against a foe that damages an ally, 3/day). This class does not advance spellcasting.",
        source: `${CH1} — Tactical Soldier (p. 22)`,
        sourceUrl: MH_PATH,
      },
    ],
  },
  {
    id: "war-hulk",
    name: "War Hulk",
    ruleset: "core",
    source: `${CH1} — War Hulk (p. 23)`,
    sourceUrl: MH_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort"],
    progression: rows(ZERO, G, P, P),
    classSkills: ["Climb", "Intimidate", "Jump"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Feats: Cleave",
      "Special: Must be Large size or larger",
    ],
    features: [
      {
        key: "war-hulk-features",
        name: "War Hulk Features",
        category: "trait",
        description:
          "A giant brute whose printed table grants NO base attack bonus at any level (the rows in this record are the printed ones; the babProgression label is nominal) — in exchange he gains an ability boost of +2 Strength at EVERY level (+20 total). No time to think (1st: he is considered to have 0 ranks in all Intelligence-, Wisdom-, and Charisma-based skills except Intimidate), great swing (2nd), mighty rock throwing (3rd: rocks deal 2d8, range increment 50 ft., using Strength on the attack roll), mighty swing (4th), sweeping boulder (6th), massive sweeping boulder (8th), Toughness as a bonus feat (8th, 9th, and 10th), and massive swing (10th).",
        source: `${CH1} — War Hulk (p. 23)`,
        sourceUrl: MH_PATH,
      },
    ],
  },
  {
    id: "warchief",
    name: "Warchief",
    ruleset: "core",
    source: `${CH1} — Warchief (p. 24)`,
    sourceUrl: MH_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Bluff", "Climb", "Craft", "Diplomacy", "Handle Animal", "Intimidate", "Jump", "Ride", "Sense Motive", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +3",
      "Special: Must have led a tribe in battle",
    ],
    features: [
      {
        key: "warchief-features",
        name: "Warchief Features",
        category: "trait",
        description:
          "A savage battle leader whose tribal frenzy lends Strength to his tribe: +2 (1st; +4 at 3rd, +6 at 5th, +8 at 7th, +10 at 9th). Ability boost +2 Charisma at 2nd, 6th, and 10th, and devoted bodyguards at 8th (once per round, a DC 15 Reflex save lets an adjacent tribe member take a hit meant for the warchief). This class does not advance spellcasting.",
        source: `${CH1} — Warchief (pp. 24–25)`,
        sourceUrl: MH_PATH,
      },
    ],
  },
];
