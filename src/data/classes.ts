/**
 * SRD core class data pack (levels 1-10): base attack bonus progression,
 * save progression, skill points, and class skills.
 * Sources:
 *   Fighter — https://www.d20srd.org/srd/classes/fighter.htm
 *   Wizard  — https://www.d20srd.org/srd/classes/wizard.htm
 *   Rogue   — https://www.d20srd.org/srd/classes/rogue.htm
 *   Cleric  — https://www.d20srd.org/srd/classes/cleric.htm
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function buildRows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL_BAB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const THREE_QUARTER_BAB = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF_BAB = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD_SAVE = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR_SAVE = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

export const CLASSES: Record<string, ClassDefinition> = {
  fighter: {
    id: "fighter",
    name: "Fighter",
    source: "d20SRD — Classes: Fighter",
    sourceUrl: "https://www.d20srd.org/srd/classes/fighter.htm",
    ruleset: "core",
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: buildRows(FULL_BAB, GOOD_SAVE, POOR_SAVE, POOR_SAVE),
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Ride", "Swim"],
  },
  wizard: {
    id: "wizard",
    name: "Wizard",
    source: "d20SRD — Classes: Wizard",
    sourceUrl: "https://www.d20srd.org/srd/classes/wizard.htm",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: buildRows(HALF_BAB, POOR_SAVE, POOR_SAVE, GOOD_SAVE),
    classSkills: [
      "Concentration",
      "Craft",
      "Decipher Script",
      "Knowledge (all)",
      "Profession",
      "Spellcraft",
    ],
  },
  rogue: {
    id: "rogue",
    name: "Rogue",
    source: "d20SRD — Classes: Rogue",
    sourceUrl: "https://www.d20srd.org/srd/classes/rogue.htm",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: buildRows(THREE_QUARTER_BAB, POOR_SAVE, GOOD_SAVE, POOR_SAVE),
    classSkills: [
      "Appraise",
      "Balance",
      "Bluff",
      "Climb",
      "Craft",
      "Decipher Script",
      "Disable Device",
      "Disguise",
      "Escape Artist",
      "Forgery",
      "Gather Information",
      "Hide",
      "Intimidate",
      "Jump",
      "Listen",
      "Move Silently",
      "Open Lock",
      "Perform",
      "Profession",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot",
      "Swim",
      "Tumble",
      "Use Magic Device",
      "Use Rope",
    ],
  },
  cleric: {
    id: "cleric",
    name: "Cleric",
    source: "d20SRD — Classes: Cleric",
    sourceUrl: "https://www.d20srd.org/srd/classes/cleric.htm",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: buildRows(THREE_QUARTER_BAB, GOOD_SAVE, POOR_SAVE, GOOD_SAVE),
    classSkills: [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Profession",
      "Spellcraft",
    ],
  },
};
