/**
 * Core Books Audit (2026-10-28): PHB / MM feats and the one SRD skill
 * missing from the recovered core data. A name-diff of the full PHB
 * feat list plus the 13 SRD monster feats against ALL_FEATS found
 * exactly four missing feats; a skills diff found the SRD skill list
 * otherwise complete (the app's Craft/Knowledge/Perform/Profession
 * specialty split covers it) except Control Shape, which is printed
 * only in the SRD lycanthrope entry.
 */
import type { FeatDefinition, SkillDefinition } from "@/engine/types";

const F = "https://www.d20srd.org/srd/feats.htm";

export const CORE_AUDIT_FEATS: FeatDefinition[] = [
  {
    id: "augment-summoning",
    name: "Augment Summoning",
    category: "general",
    prerequisites: ["Spell Focus (conjuration)"],
    benefitSummary:
      "Each creature you conjure with any summon spell gains a +4 enhancement bonus to Strength and Constitution for the duration of the spell that summoned it.",
    source: "d20SRD — Feats: Augment Summoning (Player's Handbook)",
    sourceUrl: F,
    ruleset: "core",
  },
  {
    id: "improved-counterspell",
    name: "Improved Counterspell",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell, instead of needing the exact spell (or a general-purpose counterspell such as dispel magic).",
    source: "d20SRD — Feats: Improved Counterspell (Player's Handbook)",
    sourceUrl: F,
    ruleset: "core",
  },
  {
    id: "improved-shield-bash",
    name: "Improved Shield Bash",
    category: "general",
    prerequisites: ["Shield Proficiency"],
    benefitSummary:
      "When you perform a shield bash, you may still apply the shield's shield bonus to your Armor Class.",
    special: "A fighter may select Improved Shield Bash as one of his fighter bonus feats.",
    source: "d20SRD — Feats: Improved Shield Bash (Player's Handbook)",
    sourceUrl: F,
    ruleset: "core",
  },
  {
    id: "multiweapon-fighting",
    name: "Multiweapon Fighting",
    category: "general",
    prerequisites: ["Dex 13", "Three or more hands"],
    benefitSummary:
      "Penalties for fighting with multiple weapons are reduced by 2 with the primary hand and by 6 with every off hand.",
    special:
      "This feat replaces the Two-Weapon Fighting feat for creatures with more than two arms. Without it, a creature fighting with three or more weapons takes the normal multiweapon penalties (-6 primary hand, -10 off hands).",
    source: "d20SRD — Monster Feats: Multiweapon Fighting (Monster Manual)",
    sourceUrl: "https://www.d20srd.org/srd/monsterFeats.htm",
    ruleset: "core",
  },
];

export const CORE_AUDIT_SKILLS: SkillDefinition[] = [
  {
    id: "control-shape",
    name: "Control Shape",
    keyAbility: "wis",
    trainedOnly: false,
    ruleset: "core",
    source: "d20SRD — Monsters: Lycanthrope (skill printed in the lycanthrope entry)",
    sourceUrl: "https://www.d20srd.org/srd/monsters/lycanthrope.htm",
    description:
      "The skill an afflicted lycanthrope uses to master its shapechanging: resisting an involuntary change (for example under a full moon), changing to animal or hybrid form voluntarily, and returning to its natural form. An afflicted lycanthrope that is unaware of its condition may use Control Shape untrained; once aware, it becomes a class skill for the character. Natural lycanthropes change shape at will and do not need this skill.",
  },
];
