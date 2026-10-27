import type { HouseRules } from "./types";

/**
 * House-rule catalog: the single source of truth for both the header toggle
 * UI and the resolver. Every flag defaults to RAW (Rules As Written); turning
 * one off swaps in the simplified/house-rule variant described.
 */

export interface HouseRuleDef {
  id: keyof HouseRules;
  label: string;
  description: string;
  category: string;
  defaultValue: boolean;
  /** Link to the SRD page that states the RAW rule. */
  ruleReference: string;
  /** When true, the toggle is permanently locked off in the UI and the engine. */
  lockedOff?: boolean;
}

export const HOUSE_RULE_DEFS: HouseRuleDef[] = [
  {
    id: "crossClassSkillDoubleCost",
    label: "Cross-class skills cost 2 points per rank",
    description:
      "LOCKED OFF by Shaun (2026-10-27) — every skill costs 1 point per rank, class or cross-class. The RAW rule (2 points per cross-class rank) stays off until Shaun asks to turn it on.",
    category: "Skills",
    // Shaun's standing choice (2026-10-27): OFF and keep off — cross-class
    // ranks cost 1 point in his games.
    defaultValue: false,
    lockedOff: true,
    ruleReference: "https://www.d20srd.org/srd/skills/skillsSummary.htm",
  },
  {
    id: "crossClassSkillHalfCap",
    label: "Cross-class rank cap is half the class cap",
    description:
      "RAW: max ranks in a cross-class skill are half the class-skill maximum (level + 3). Turn off to let cross-class skills reach the full cap.",
    category: "Skills",
    defaultValue: true,
    ruleReference: "https://www.d20srd.org/srd/skills/skillsSummary.htm",
  },
  {
    id: "levelAdjustmentBuyoff",
    label: "Level adjustment buyoff (Unearthed Arcana variant)",
    description:
      "Variant rule: characters can pay XP to buy off level adjustment — 1 point at class level 3 × current LA, then again every 3 × remaining LA levels. Off by default because it is a variant, not core RAW.",
    category: "Level Adjustment",
    defaultValue: false,
    ruleReference: "https://www.d20srd.org/srd/variant/races/reducingLevelAdjustments.htm",
  },
];

export const DEFAULT_HOUSE_RULES: HouseRules = {
  crossClassSkillDoubleCost: false,
  crossClassSkillHalfCap: true,
  levelAdjustmentBuyoff: false,
};
