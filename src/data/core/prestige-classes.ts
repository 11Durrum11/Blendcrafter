/**
 * Core SRD prestige classes. Prerequisites are free text (shown in the UI and
 * soft-checked only), matching how the recovered step-classes component
 * consumes them. Progression rows follow each class's SRD table, capped at
 * the class's maximum level.
 * Source: https://www.d20srd.org/srd/prestigeClasses/prestigeClasses.htm
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const U = "https://www.d20srd.org/srd/prestigeClasses/";

export const CORE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "arcane-trickster",
    name: "Arcane Trickster",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Arcane Trickster",
    sourceUrl: `${U}arcaneTrickster.htm`,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF, P, G, G),
    classSkills: ["Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Gather Information", "Hide", "Jump", "Knowledge (all)", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Spellcraft", "Spot", "Swim", "Tumble", "Use Rope"],
    prerequisites: ["Alignment: Any nonlawful", "Skills: Decipher Script 7 ranks, Disable Device 7 ranks, Escape Artist 7 ranks, Knowledge (arcana) 4 ranks", "Spells: Ability to cast mage hand and at least one arcane spell of 3rd level or higher", "Special: Sneak attack +2d6"],
  },
  {
    id: "archmage",
    name: "Archmage",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Archmage",
    sourceUrl: `${U}archmage.htm`,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF.slice(0, 5), P.slice(0, 5), P.slice(0, 5), G.slice(0, 5)),
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Profession", "Search", "Spellcraft"],
    prerequisites: ["Skills: Knowledge (arcana) 15 ranks, Spellcraft 15 ranks", "Feats: Skill Focus (Spellcraft), Spell Focus in two schools", "Spells: Ability to cast 7th-level arcane spells, knowledge of at least five 5th-level spells in at least two schools"],
  },
  {
    id: "assassin",
    name: "Assassin",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Assassin",
    sourceUrl: `${U}assassin.htm`,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Swim", "Tumble", "Use Rope"],
    prerequisites: ["Alignment: Any evil", "Skills: Disguise 4 ranks, Hide 8 ranks, Move Silently 8 ranks", "Special: The character must kill someone for no other reason than to join the assassins"],
  },
  {
    id: "dragon-disciple",
    name: "Dragon Disciple",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Dragon Disciple",
    sourceUrl: `${U}dragonDisciple.htm`,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Escape Artist", "Gather Information", "Knowledge (all)", "Listen", "Profession", "Search", "Spellcraft", "Spot"],
    prerequisites: ["Race: Any nondragon", "Skills: Knowledge (arcana) 8 ranks", "Languages: Draconic", "Spells: Ability to cast arcane spells without preparation", "Special: The player chooses a dragon variety for the disciple"],
  },
  {
    id: "eldritch-knight",
    name: "Eldritch Knight",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Eldritch Knight",
    sourceUrl: `${U}eldritchKnight.htm`,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Jump", "Knowledge (all)", "Profession", "Ride", "Sense Motive", "Spellcraft", "Swim"],
    prerequisites: ["Weapon Proficiency: Must be proficient with all martial weapons", "Spells: Able to cast 3rd-level arcane spells"],
  },
  {
    id: "loremaster",
    name: "Loremaster",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Loremaster",
    sourceUrl: `${U}loremaster.htm`,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Appraise", "Concentration", "Craft", "Decipher Script", "Gather Information", "Handle Animal", "Heal", "Knowledge (all)", "Perform", "Profession", "Spellcraft", "Use Magic Device"],
    prerequisites: ["Skills: Knowledge (any two) 10 ranks each", "Feats: Any three metamagic or item creation feats, plus Skill Focus (Knowledge)", "Spells: Able to cast seven different divination spells, one of which must be 3rd level or higher"],
  },
  {
    id: "mystic-theurge",
    name: "Mystic Theurge",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Mystic Theurge",
    sourceUrl: `${U}mysticTheurge.htm`,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: ["Skills: Knowledge (arcana) 6 ranks, Knowledge (religion) 6 ranks", "Spells: Able to cast 2nd-level divine spells and 2nd-level arcane spells"],
  },
  {
    id: "shadowdancer",
    name: "Shadowdancer",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Shadowdancer",
    sourceUrl: `${U}shadowdancer.htm`,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Balance", "Bluff", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Gather Information", "Hide", "Jump", "Listen", "Move Silently", "Perform", "Profession", "Search", "Sleight of Hand", "Spot", "Tumble", "Use Magic Device", "Use Rope"],
    prerequisites: ["Skills: Hide 10 ranks, Move Silently 8 ranks, Perform (dance) 5 ranks", "Feats: Combat Reflexes, Dodge, Mobility"],
  },
];
