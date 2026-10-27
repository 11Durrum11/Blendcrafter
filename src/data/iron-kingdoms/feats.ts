/**
 * Iron Kingdoms feat data pack: the Iron Kingdoms Character Guide's
 * unique General and Racial feats (Chapter 5). Built 2026-10-26 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/1.D&D 3rd ed.-Iron Kingdoms-Character Guide (Rules Sourcebook).pdf
 * The Character Guide PDF is a scanned-image book; prerequisites and
 * benefits below were read from the printed feat table and feat text
 * (book pp. 135–147). A few feats in the book duplicate existing core
 * feats under the same name (e.g. Improved Initiative, Skill Focus);
 * those were not converted — see REBUILD-NOTES.md.
 */
import type { FeatDefinition } from "@/engine/types";

const IKCG = "Iron Kingdoms Character Guide";
const IKCG_PATH =
  "/A POC PC related/1.D&D 3rd ed.-Iron Kingdoms-Character Guide (Rules Sourcebook).pdf";
const CH5 = `${IKCG} — Chapter 5: Feats`;

export const IRON_KINGDOMS_FEATS: FeatDefinition[] = [
  {
    id: "accurate",
    name: "Accurate",
    category: "general",
    prerequisites: ["Point-Blank Shot"],
    benefitSummary: "Your ranged attacks are much more deadly within a certain range.",
    modifiers: [],
    source: `${CH5}: Accurate`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "backstabber",
    name: "Backstabber",
    category: "general",
    prerequisites: ["Dexterity 13"],
    benefitSummary: "You deal extra damage with your attacks against foes who are flat-footed.",
    modifiers: [],
    source: `${CH5}: Backstabber`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "bayonet-charge",
    name: "Bayonet Charge",
    category: "general",
    prerequisites: ["Base attack bonus +2"],
    benefitSummary: "When you charge with your bayonet or spear fixed, you deal double damage.",
    modifiers: [],
    source: `${CH5}: Bayonet Charge`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "enhanced-strength",
    name: "Enhanced Strength",
    category: "general",
    prerequisites: ["Strength 13", "Power Attack"],
    benefitSummary: "Increase your Strength by 2 points for 10 rounds.",
    modifiers: [],
    source: `${CH5}: Enhanced Strength`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
    special: "This feat can be used a number of times per day equal to your Strength modifier (minimum 1).",
  },
  {
    id: "famous",
    name: "Famous",
    category: "general",
    prerequisites: ["Level 6th or higher", "Charisma 15"],
    benefitSummary: "Your reputation grows as you progress through your career.",
    modifiers: [],
    source: `${CH5}: Famous`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
    special:
      "Your character is now known by a name closely tied to his trade, motive, or organization — for example 'the Betrayer' or 'the Wretched'.",
  },
  {
    id: "fearless",
    name: "Fearless",
    category: "general",
    prerequisites: [],
    benefitSummary: "You gain a +2 morale bonus to saves against fear effects.",
    modifiers: [],
    source: `${CH5}: Fearless`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "feigned-opening",
    name: "Feigned Opening",
    category: "general",
    prerequisites: ["Perceptive"],
    benefitSummary:
      "You may make a Bluff skill check to sacrifice your armor class but allow you to make one immediate attack of opportunity against your foe the next time he attacks you.",
    modifiers: [],
    source: `${CH5}: Feigned Opening`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "find-weakness",
    name: "Find Weakness",
    category: "general",
    prerequisites: ["Intelligence 13", "Spot 5 ranks"],
    benefitSummary: "You may use your keen senses and intellect to locate vulnerabilities in your enemies' defenses.",
    modifiers: [],
    source: `${CH5}: Find Weakness`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "great-cleave",
    name: "Great Cleave",
    category: "general",
    prerequisites: ["Strength 13", "Cleave", "Power Attack", "Base attack bonus +4"],
    benefitSummary: "This feat works like Cleave, except that there is no limit to the number of times you can use it per round.",
    modifiers: [],
    source: `${CH5}: Great Cleave`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "guarded",
    name: "Guarded",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "You gain a +1 shield bonus to AC when used in conjunction with a dueling weapon in your main hand and no weapon in your off hand.",
    modifiers: [],
    source: `${CH5}: Guarded`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "iron-will-alternate",
    name: "Iron Will (Alternate)",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "You gain a +2 bonus on all Will saving throws, provided you do not wear medium or heavy armor and your encumbrance is not greater than light.",
    modifiers: [],
    source: `${CH5}: Iron Will: Alternate`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
    special:
      "Do not mistake this feat for the general feat Iron Will; it may be treated as a prerequisite, however, when another feat or prestige class requires Iron Will or an Iron Will-based ability. You cannot take both this feat and Iron Will.",
  },
  {
    id: "keen-senses",
    name: "Keen Senses",
    category: "race-specific",
    prerequisites: ["Nyss"],
    benefitSummary: "Your sense of smell becomes highly sensitive.",
    modifiers: [],
    source: `${CH5}: Keen Senses`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "link",
    name: "Link",
    category: "general",
    prerequisites: ["Ability to cast 1st-level arcane spells"],
    benefitSummary:
      "You gain the ability to link magic items to your own spellcasting — a technique particularly useful to artificers or mechaniks who cannot use magic items created by other spellcasters without invoking this feat.",
    modifiers: [],
    source: `${CH5}: Link`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "perceptive",
    name: "Perceptive",
    category: "general",
    prerequisites: ["Wisdom 13"],
    benefitSummary: "You gain a +2 circumstance bonus on Listen, Sense Motive, and Spot checks.",
    modifiers: [],
    source: `${CH5}: Perceptive`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "poison-use",
    name: "Poison Use",
    category: "general",
    prerequisites: [],
    benefitSummary: "You can apply and use poison without a chance of exposing yourself to its effects or poisoning yourself.",
    modifiers: [],
    source: `${CH5}: Poison Use`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "prioritizing-target",
    name: "Prioritizing Target",
    category: "general",
    prerequisites: ["Intelligence 13"],
    benefitSummary:
      "You know how to prioritize your targets in battle, and your companions know to take advantage of this: your analysis of your enemy allows them to make a presumably stronger attack, ignoring Armor Class.",
    modifiers: [],
    source: `${CH5}: Prioritizing Target`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "rallying-cry",
    name: "Rallying Cry",
    category: "general",
    prerequisites: ["Charisma 13"],
    benefitSummary:
      "You can issue a rallying cry to bolster your allies who have been hit by targets of new opportunities, bolstering their morale and Unit Cohesion.",
    modifiers: [],
    source: `${CH5}: Rallying Cry`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "recognize-weapon",
    name: "Recognize Weapon",
    category: "general",
    prerequisites: ["Base attack bonus +2"],
    benefitSummary:
      "You have a chance to recognize the make of a particular firearm or light artillery piece, giving you insight into its range and possible maintenance issues.",
    modifiers: [],
    source: `${CH5}: Recognize Weapon`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "sacrifice-accuracy",
    name: "Sacrifice Accuracy",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "When attacking with a ranged weapon, you may sacrifice accuracy to take an attack of opportunity against a nearby foe between turns.",
    modifiers: [],
    source: `${CH5}: Sacrifice Accuracy`,
    sourceUrl: IKCG_PATH,
    ruleset: "iron_kingdoms",
  },
];
