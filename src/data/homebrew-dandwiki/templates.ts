/**
 * Homebrew pack — D&D Wiki templates from Shaun's "CURRENT LIST
 * OF IN USE SRD WIKI LINKS" document (2026-11-02). Ruleset
 * "homebrew"; sourceUrl is the exact URL as written in the
 * document (Twisted Creature is linked twice in the document —
 * one record here). Short own-words mechanical summaries.
 *
 * Modeling notes:
 * - Twisted Creature sets both its CR and LA "decided by the
 *   DM" (variable); the schema requires numbers, so both are
 *   recorded as 0 with the variability stated in the summary —
 *   the random mutation tables live in the features.
 * - Half-Forged's adaptations combine freely (any number at
 *   once), which the single-choice template forms cannot
 *   express, so the adaptation menu is carried in features on
 *   the base record (baseline −2 Cha applies to every
 *   half-forged creature).
 * - Half-Celestial Template Class is a level-based template
 *   class (4 levels taken in place of ordinary level
 *   advancement) that spreads the SRD half-celestial template's
 *   benefits out. It is modeled as a TemplateDefinition with a
 *   distinct id (the SRD record "half-celestial" is untouched),
 *   the full four-level ability totals (identical to the SRD
 *   template's), LA +4 (the template class is 4 levels, equal
 *   to the SRD template's LA), and crModifier 2 — the middle
 *   step of its HD-scaled CR at 4th template-class level
 *   (HD 6 or less +1, HD 6–10 +2, HD 11+ +3), mirroring the SRD
 *   record's own convention. The four levels are laid out in
 *   the features.
 */
import type { TemplateDefinition } from "@/engine/types";

const TWISTED = "D&D Wiki — Twisted Creature (3.5e Template)";
const TWISTED_URL = "http://www.dandwiki.com/wiki/Twisted_Creature_(3.5e_Template)";
const HALF_FORGED = "D&D Wiki — Half-Forged (3.5e Template)";
const HALF_FORGED_URL = "http://www.dandwiki.com/wiki/Half-Forged_(3.5e_Template)";
const HALF_CELESTIAL_TC = "D&D Wiki — Half-Celestial Template Class (3.5e Template)";
const HALF_CELESTIAL_TC_URL = "https://www.dandwiki.com/wiki/Half-Celestial_Template_Class_(3.5e_Template)";

export const DANDWIKI_TEMPLATES: TemplateDefinition[] = [
  {
    id: "twisted-creature",
    name: "Twisted Creature",
    ruleset: "homebrew",
    timing: "acquired",
    summary:
      "A creature randomly warped by mutation: type changes to aberration, and its size, speed, natural armor, limbs, ability scores, skills, feats, and alignment are all re-rolled on the template's percentage tables. CR and level adjustment are both decided by the DM (variable — recorded as 0 here); the tables in the features govern what a given twisted creature becomes.",
    source: TWISTED,
    sourceUrl: TWISTED_URL,
    crModifier: 0,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: ["Animal", "Dragon", "Fey", "Giant", "Humanoid", "Magical Beast", "Monstrous Humanoid", "Outsider", "Plant", "Vermin"],
        note: "Twisted Creature can be applied to any corporeal animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, outsider with the native subtype, plant, or vermin (and to living constructs in campaigns that use them). It cannot be applied to undead.",
      },
    ],
    patches: [
      { op: "set-type", value: "Aberration", note: "Type changes to aberration. Hit Dice do not change, and base attack bonuses, saves, and skill points are not recalculated for any size change." },
    ],
    features: [
      {
        key: "twisted-size-change",
        name: "Size Change",
        description: "The creature has a 25% chance to grow one size category, a 25% chance to shrink one size category, and a 50% chance to stay the same size. BAB, saves, and skill points are not recalculated.",
        category: "trait",
        source: TWISTED,
        sourceUrl: TWISTED_URL,
      },
      {
        key: "twisted-speed-change",
        name: "Speed Change",
        description: "Each movement mode independently rolls for change: 92% no change, and small chances of +5, +10, −5, or −10 feet. Gaining a movement mode the creature lacks grants that mode; a gained fly speed has poor maneuverability and comes with 1d3+1 wings.",
        category: "trait",
        source: TWISTED,
        sourceUrl: TWISTED_URL,
      },
      {
        key: "twisted-natural-armor",
        name: "Natural Armor Change",
        description: "Natural armor: 60% no change, and a 10% chance each of +2, +1, −1, or −2 (minimum 0).",
        category: "trait",
        source: TWISTED,
        sourceUrl: TWISTED_URL,
      },
      {
        key: "twisted-limbs",
        name: "Extra Limbs",
        description: "The creature may grow extra limbs (69% chance of none; otherwise 1–5). Each limb is randomly an arm, leg, tail, tentacle, or amorphous growth, and each type has its own chances of bearing a claw, slam, or tentacle natural weapon. Natural weapon damage by size: Fine 1, Diminutive 1d2, Tiny 1d3, Small 1d4, Medium 1d6, Large 1d8, Huge 2d6, Gargantuan 3d6, Colossal 4d6.",
        category: "special-attack",
        source: TWISTED,
        sourceUrl: TWISTED_URL,
      },
      {
        key: "twisted-ability-change",
        name: "Ability Score Change",
        description: "Each ability score independently: 1% chance it becomes a nonability, 33% unchanged, 33% reduced by 1d5, 33% increased by 1d5. An existing nonability has a 1% chance to become a score of 1d5. Special attacks and special qualities do not change.",
        category: "trait",
        source: TWISTED,
        sourceUrl: TWISTED_URL,
      },
      {
        key: "twisted-skill-feat-change",
        name: "Skill and Feat Changes",
        description: "A skill tied to a changed ability score has a 25% chance to gain a 1d5 racial bonus and a 25% chance to take a 1d5 racial penalty. Feats the creature no longer qualifies for are removed; every other feat has a 2% chance of being removed, and every feat the creature qualifies for has a 2% chance of being gained.",
        category: "trait",
        source: TWISTED,
        sourceUrl: TWISTED_URL,
      },
      {
        key: "twisted-alignment-change",
        name: "Alignment Change",
        description: "Alignment is re-rolled on 1d12, with the creature's base alignment weighted across 4 of the 12 numbers.",
        category: "trait",
        source: TWISTED,
        sourceUrl: TWISTED_URL,
      },
    ],
  },
  {
    id: "half-forged",
    name: "Half-Forged",
    ruleset: "homebrew",
    timing: "acquired",
    summary:
      "A humanoid rebuilt with construct parts after losing a limb or a similar need: type changes to living construct and it gains some mix of adaptations (Full, Head, Torso, Arm, Leg — any number combined). Level adjustment +0. CR +1 for a Full Adaptation only, otherwise +0 (recorded as 0; see the adaptation features).",
    source: HALF_FORGED,
    sourceUrl: HALF_FORGED_URL,
    crModifier: 0,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid"],
        note: "Half-Forged can be applied to humanoids only; it is gained in life, typically after the loss of a limb or a similar need. Size does not change.",
      },
    ],
    abilityModifiers: { cha: -2 },
    patches: [
      { op: "set-type", value: "Construct", note: "Type changes to living construct (the creature keeps its Constitution score and the other living-construct traits described in the features)." },
    ],
    features: [
      {
        key: "half-forged-adaptations",
        name: "Adaptations",
        description: "The creature gains some number of adaptations, which may be combined freely: Full, Head, Torso (half or full), Arm, and Leg. Ability bonuses by adaptation (in addition to the −2 Charisma baseline): Full +2 Strength, +2 Dexterity, +2 Constitution; Torso +2 Constitution; Arm +2 Dexterity; Leg +2 Strength.",
        category: "trait",
        source: HALF_FORGED,
        sourceUrl: HALF_FORGED_URL,
      },
      {
        key: "half-forged-speed-armor",
        name: "Speed and Natural Armor",
        description: "Speed increases by +10 feet with two Leg Adaptations or a Full Adaptation. Natural armor: a Full Adaptation or a full Torso Adaptation grants +2; a half Torso Adaptation grants +1. A creature with a Full Adaptation may also take warforged feats.",
        category: "trait",
        source: HALF_FORGED,
        sourceUrl: HALF_FORGED_URL,
      },
      {
        key: "half-forged-slam",
        name: "Slam Attack",
        description: "With an Arm Adaptation or a Full Adaptation, the creature gains a slam attack dealing 1d4 damage.",
        category: "special-attack",
        source: HALF_FORGED,
        sourceUrl: HALF_FORGED_URL,
      },
      {
        key: "half-forged-fortification",
        name: "Light Fortification",
        description: "The creature has light fortification: a 25% chance to negate a critical hit or sneak attack.",
        category: "special-quality",
        source: HALF_FORGED,
        sourceUrl: HALF_FORGED_URL,
      },
      {
        key: "half-forged-adaptation-saves",
        name: "Adaptation Save Bonuses",
        description: "By adaptation: Full — +2 on saves against energy drain; Head — +2 on saves against mind-affecting effects and darkvision 90 feet; half Torso — +2 on saves against poison; full Torso — +2 on saves against disease; Leg — +2 on saves against fatigue and exhaustion.",
        category: "special-quality",
        source: HALF_FORGED,
        sourceUrl: HALF_FORGED_URL,
      },
      {
        key: "half-forged-living-construct",
        name: "Living Construct Vulnerabilities and Healing",
        description: "Spells and effects that affect constructs also affect the half-forged creature, and metal-affecting spells such as rusting grasp and heat metal deal it +2d6 damage. Healing: a Full Adaptation heals at half the normal rate from rest and cure spells but at the full rate from repair spells; partial adaptations heal fully from rest and cure spells but at half rate from repair spells.",
        category: "trait",
        source: HALF_FORGED,
        sourceUrl: HALF_FORGED_URL,
      },
    ],
  },
  {
    id: "half-celestial-template-class",
    name: "Half-Celestial (Template Class)",
    ruleset: "homebrew",
    timing: "inherited",
    summary:
      "The half-celestial template taken as a 4-level template class, in place of ordinary level advancement, spreading the template's benefits across the four levels; the full totals (Str +4, Dex +2, Con +4, Int +2, Wis +4, Cha +4) are identical to the SRD half-celestial template. Level adjustment recorded as +4 (the class is four levels). CR at 4th template-class level scales with Hit Dice — HD 6 or less +1, HD 6–10 +2, HD 11+ +3 — with crModifier 2 recorded as the middle step (the SRD record's convention) and lower template-class levels scaling down per the page's table.",
    source: HALF_CELESTIAL_TC,
    sourceUrl: HALF_CELESTIAL_TC_URL,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        note: "The template class is usually inherited (sometimes acquired). The creature's alignment is always good (any). Advancement is by character class; the four template-class levels are taken in place of ordinary level advancement.",
      },
    ],
    abilityModifiers: { str: 4, dex: 2, con: 4, int: 2, wis: 4, cha: 4 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to Outsider (native)." },
    ],
    modifiers: [
      {
        id: "half-celestial-tc-natural-armor",
        source: "Half-Celestial (Template Class)",
        sourceUrl: HALF_CELESTIAL_TC_URL,
        target: "ac.natural",
        value: 1,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +1 (gained at 1st template-class level).",
      },
    ],
    features: [
      {
        key: "half-celestial-tc-levels",
        name: "Template Class Levels",
        description: "1st level: Str +2, Cha +2; Outsider (native) type; darkvision 30 feet (improving to 60 feet at 3rd level — the page's table prints 60 feet); natural armor +1; daylight; spell-like abilities I. 2nd level: Con +2, Dex +2, Int +2; poison resistance; energy resistance 5; spell resistance; spell-like abilities II. 3rd level: Str +2, Wis +2; damage reduction; disease immunity; spell-like abilities III; smite evil (the feature text places smite evil at 3rd level; the table lists it at 1st — the feature text is followed). 4th level: Con +2, Cha +2, Wis +2; energy resistance 10; greater spell resistance; wings; spell-like abilities IV.",
        category: "trait",
        source: HALF_CELESTIAL_TC,
        sourceUrl: HALF_CELESTIAL_TC_URL,
      },
      {
        key: "half-celestial-tc-sla",
        name: "Spell-Like Abilities",
        description: "By minimum Hit Dice and template-class level (TC), caster level equal to Hit Dice, save DCs Charisma-based, each 1/day unless noted: Bless (HD 1, TC1); Protection from evil 3/day (HD 2, TC2); Detect evil (HD 3, TC3); Aid (HD 4, TC4); Neutralize poison (HD 5, TC1); Cure serious wounds (HD 6, TC2); Remove disease (HD 7, TC3); Holy smite (HD 8, TC4); Dispel evil (HD 9, TC1); Holy word (HD 11, TC2); Hallow (HD 13, TC3); Holy aura 3/day (HD 13, TC4); Mass charm monster (HD 15, TC1); Summon monster IX (celestials only) (HD 17, TC3); Resurrection (HD 19, TC4).",
        category: "special-attack",
        source: HALF_CELESTIAL_TC,
        sourceUrl: HALF_CELESTIAL_TC_URL,
      },
      {
        key: "half-celestial-tc-defenses",
        name: "Resistances, Immunity, and Damage Reduction",
        description: "From 2nd template-class level: a +4 racial bonus on Fortitude saves against poison and energy resistance 5 against acid, cold, and electricity (rising to 10 at 4th level). From 3rd level: immunity to disease, and damage reduction 5/magic (creatures of 11 HD or less) or 10/magic (12 HD or more); the creature's natural weapons count as magic weapons for overcoming damage reduction.",
        category: "special-quality",
        source: HALF_CELESTIAL_TC,
        sourceUrl: HALF_CELESTIAL_TC_URL,
      },
      {
        key: "half-celestial-tc-sr-daylight",
        name: "Spell Resistance and Daylight",
        description: "Spell resistance begins at 2nd template-class level equal to Hit Dice (maximum 20) and rises at 4th level to Hit Dice + 10 (maximum 35). Daylight is usable 1/day per 5 Hit Dice from 1st level, and at will at 4th level.",
        category: "special-quality",
        source: HALF_CELESTIAL_TC,
        sourceUrl: HALF_CELESTIAL_TC_URL,
      },
      {
        key: "half-celestial-tc-wings-skills",
        name: "Wings and Skills",
        description: "At 4th template-class level the creature grows feathered wings and can fly at twice its base land speed with good maneuverability. The template class grants outsider skill points — (8 + Intelligence modifier) × (Hit Dice + 3) — and the base creature's skills are treated as class skills.",
        category: "special-quality",
        source: HALF_CELESTIAL_TC,
        sourceUrl: HALF_CELESTIAL_TC_URL,
      },
    ],
  },
];
