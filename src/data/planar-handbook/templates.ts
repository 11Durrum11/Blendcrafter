import type { TemplateDefinition } from "@/engine/types";

// Planar Handbook (WotC, D&D 3.5) templates — the four
// full "Creating a..." templates of Chapter 6, extracted
// 2026-11-05 from Shaun's own copy: Anarchic Creature
// (pp. 107–109), Axiomatic Creature (pp. 110–111),
// Entropic Creature (pp. 122–124), and Vivacious Creature
// (pp. 131–133). Notes on the numbers the app must store
// as single values:
// - All four templates print HD-scaled Challenge Rating
//   adjustments. crModifier records the FIRST step of each
//   scale and each summary carries the full scale:
//   Anarchic +0/+1/+2 (HD 3 or less / 4–7 / 8+), Axiomatic
//   +0/+1/+2 (same bands), Entropic +1/+2/+3 (HD 3 or
//   less / 4–7 / 8+), Vivacious +1/+2/+3 (same bands).
// - Axiomatic's level adjustment is printed as "as the base
//   creature +4" and Vivacious's as "same as the base
//   creature +5"; levelAdjustment records the printed
//   increment (+4 / +5), matching how the sample creatures'
//   totals work out. Anarchic prints a flat +5 and Entropic
//   a flat +2.
// - Anarchic and Axiomatic change type only conditionally
//   (animals and vermin become magical beasts); per the
//   pack convention for conditional type changes, no
//   set-type patch is applied and the change is stated in
//   the summary and a feature. Entropic's set-type to
//   outsider is applied, with its undead exception noted
//   on the patch. Vivacious's fly speed equals the base
//   creature's land speed, so its add-speed patch carries
//   no fixed amount, and its deflection bonus (Charisma
//   modifier or +1, whichever is higher) and loss of all
//   natural armor have no honest flat Modifier, so both
//   are carried in a feature instead of `modifiers`.
// - "Intelligence is at least 3" (all four templates) is a
//   floor, not a modifier, so it appears in the summaries
//   and features, not in abilityModifiers. Vivacious's
//   removal of the Strength score (incorporeal) IS modeled,
//   as str: null.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const PH = "Planar Handbook";
const PH_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Planes/Planar Handbook.pdf";
const AC = `${PH} — Creating an Anarchic Creature`;
const AX = `${PH} — Creating an Axiomatic Creature`;
const EN = `${PH} — Creating an Entropic Creature`;
const VI = `${PH} — Creating a Vivacious Creature`;

export const PLANAR_HANDBOOK_TEMPLATES: TemplateDefinition[] = [
  {
    id: "anarchic-creature",
    name: "Anarchic Creature",
    ruleset: "core",
    timing: "inherited",
    summary:
      "An inherited template for any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, ooze, plant, or vermin of nonlawful alignment, native to a plane of chaos. Type is unchanged except that animals and vermin become magical beasts; do not recalculate Hit Dice, BAB, saves, or skill points if type changes. It gains smite law, darkvision 60 feet, resistance 5 to acid, cold, electricity, fire, and sonic, immunity to polymorph and petrification, and fast healing and damage reduction by Hit Dice (HD 1–3: none; HD 4–7: fast healing 1; HD 8–11: fast healing 3; HD 12+: fast healing 5 and DR 5/magic). Intelligence is at least 3. Alignment: always chaotic (any). CR: HD 3 or less, as base creature; HD 4–7, +1; HD 8+, +2. Level adjustment +5.",
    source: `${AC} (pp. 108–109)`,
    sourceUrl: PH_PATH,
    crModifier: 0,
    levelAdjustment: 5,
    prerequisites: [
      {
        allowedBaseTypes: ["Aberration", "Animal", "Dragon", "Fey", "Giant", "Humanoid", "Magical Beast", "Monstrous Humanoid", "Ooze", "Plant", "Vermin"],
        note: "Can be added to any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, ooze, plant, or vermin of nonlawful alignment.",
      },
    ],
    patches: [
      { op: "add-subtype", value: "Extraplanar", note: "Anarchic creatures encountered on the Material Plane have the extraplanar subtype. Type is otherwise unchanged, except that animals and vermin become magical beasts (conditional change, not patched). Size is unchanged. Do not recalculate Hit Dice, base attack bonus, saves, or skill points if its type changes." },
    ],
    features: [
      {
        key: "anarchic-creature-smite-law",
        name: "Smite Law (Su)",
        description:
          "Once per day, can make a normal attack to deal extra damage equal to its Hit Dice (maximum 20 points) against a lawful opponent.",
        category: "special-attack",
        source: AC,
        sourceUrl: PH_PATH,
      },
      {
        key: "anarchic-creature-defenses",
        name: "Anarchic Defenses",
        description:
          "Darkvision out to 60 feet. Resistance to acid 5, cold 5, electricity 5, fire 5, and sonic 5. Immunity to polymorph and petrification. Fast healing and damage reduction by Hit Dice: HD 1–3, neither; HD 4–7, fast healing 1; HD 8–11, fast healing 3; HD 12 or more, fast healing 5 and damage reduction 5/magic. If the base creature already has one or more of these qualities, use the better value. If it gains damage reduction, its natural weapons are treated as magic weapons for overcoming damage reduction.",
        category: "special-quality",
        source: AC,
        sourceUrl: PH_PATH,
      },
      {
        key: "anarchic-creature-nature",
        name: "Anarchic Nature",
        description:
          "Retains all the base creature's special attacks and special qualities except as noted in this template. Abilities are as the base creature, but Intelligence is at least 3. Environment: any land and underground. Alignment: always chaotic (any).",
        category: "trait",
        source: AC,
        sourceUrl: PH_PATH,
      },
    ],
  },
  {
    id: "axiomatic-creature",
    name: "Axiomatic Creature",
    ruleset: "core",
    timing: "inherited",
    summary:
      "An inherited template for any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, ooze, plant, or vermin of nonchaotic alignment, native to a lawful plane. Type is unchanged except that animals and vermin become magical beasts; do not recalculate Hit Dice, BAB, saves, or skill points if type changes. It gains smite chaos, darkvision 60 feet, resistance 5 to cold, electricity, fire, and sonic (10 at 12 or more Hit Dice), spell resistance equal to Hit Dice + 5 (maximum 25), and linked minds with others of its kind. Intelligence is at least 3. Alignment: always lawful (any). CR: HD 3 or less, as base creature; HD 4–7, +1; HD 8+, +2. Level adjustment: as the base creature +4 (recorded as the +4 increment).",
    source: `${AX} (p. 111)`,
    sourceUrl: PH_PATH,
    crModifier: 0,
    levelAdjustment: 4,
    prerequisites: [
      {
        allowedBaseTypes: ["Aberration", "Animal", "Dragon", "Fey", "Giant", "Humanoid", "Magical Beast", "Monstrous Humanoid", "Ooze", "Plant", "Vermin"],
        note: "Can be added to any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, ooze, plant, or vermin of nonchaotic alignment.",
      },
    ],
    patches: [
      { op: "add-subtype", value: "Extraplanar", note: "Axiomatic creatures encountered on the Material Plane have the extraplanar subtype. Type is otherwise unchanged, except that animals and vermin become magical beasts (conditional change, not patched). Size is unchanged. Do not recalculate Hit Dice, base attack bonus, saves, or skill points if its type changes." },
    ],
    features: [
      {
        key: "axiomatic-creature-smite-chaos",
        name: "Smite Chaos (Su)",
        description:
          "Once per day, can make a normal attack to deal extra damage equal to its Hit Dice (maximum 20 points) against a chaotic opponent.",
        category: "special-attack",
        source: AX,
        sourceUrl: PH_PATH,
      },
      {
        key: "axiomatic-creature-defenses",
        name: "Axiomatic Defenses",
        description:
          "Darkvision out to 60 feet. Resistance to cold 5, electricity 5, fire 5, and sonic 5; if the creature has 12 or more Hit Dice, these resistances increase to 10. Spell resistance equal to the creature's Hit Dice + 5 (maximum 25). If the base creature already has one or more of these qualities, use the better value.",
        category: "special-quality",
        source: AX,
        sourceUrl: PH_PATH,
      },
      {
        key: "axiomatic-creature-linked-minds",
        name: "Linked Minds (Ex)",
        description:
          "Axiomatic creatures of the same kind within 300 feet of one another are in constant communication: if one is aware of a particular danger, they all are; if one in the group is not flat-footed, none of them are; and no axiomatic creature in the group is considered flanked unless all of them are.",
        category: "special-quality",
        source: AX,
        sourceUrl: PH_PATH,
      },
      {
        key: "axiomatic-creature-nature",
        name: "Axiomatic Nature",
        description:
          "Retains all the base creature's special attacks and special qualities except as noted in this template. Abilities are as the base creature, but Intelligence is at least 3. Environment: any lawful-aligned plane. Alignment: always lawful (any).",
        category: "trait",
        source: AX,
        sourceUrl: PH_PATH,
      },
    ],
  },
  {
    id: "entropic-creature",
    name: "Entropic Creature",
    ruleset: "core",
    timing: "inherited",
    summary:
      "An inherited template for any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, outsider, plant, undead, or vermin, adapted to the Negative Energy Plane. Unless the base creature was undead, its type changes to outsider (do not recalculate Hit Dice, BAB, or saves) and it gains the extraplanar subtype. It gains a negative energy ray, spell resistance 15 + HD (maximum 35) against positive-energy spells and effects, negative adaptation, a negative energy aura, outsider traits, and +4 turn resistance if undead. Constitution +2, Charisma +2; Intelligence is at least 3. CR: HD 3 or less, as base creature +1; HD 4–7, +2; HD 8+, +3. Level adjustment +2.",
    source: `${EN} (pp. 123–124)`,
    sourceUrl: PH_PATH,
    crModifier: 1,
    levelAdjustment: 2,
    prerequisites: [
      {
        allowedBaseTypes: ["Aberration", "Animal", "Dragon", "Fey", "Giant", "Humanoid", "Magical Beast", "Monstrous Humanoid", "Outsider", "Plant", "Undead", "Vermin"],
        note: "Can be added to any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, outsider, plant, undead, or vermin.",
      },
    ],
    abilityModifiers: { con: 2, cha: 2 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider, unless the base creature was undead (an undead base creature keeps its type). Do not recalculate the creature's Hit Dice, base attack bonus, or saves. Size is unchanged." },
      { op: "add-subtype", value: "Extraplanar", note: "The creature gains the extraplanar subtype." },
    ],
    features: [
      {
        key: "entropic-creature-negative-energy-ray",
        name: "Negative Energy Ray (Su)",
        description:
          "Once every 1d4 rounds, can fire a ray of negative energy (range 60 feet); on a successful ranged touch attack it deals negative energy damage equal to 1d4 + its Charisma modifier. This damages living creatures and heals undead.",
        category: "special-attack",
        source: EN,
        sourceUrl: PH_PATH,
      },
      {
        key: "entropic-creature-limited-spell-resistance",
        name: "Limited Spell Resistance (Positive Energy) (Ex)",
        description:
          "Spell resistance equal to 15 + Hit Dice (maximum 35) against any spell or spell-like ability that uses positive energy, including cure spells.",
        category: "special-quality",
        source: EN,
        sourceUrl: PH_PATH,
      },
      {
        key: "entropic-creature-negative-adaptation",
        name: "Negative Adaptation (Ex)",
        description:
          "Does not lose hit points or need to make Fortitude saves due to being in a negative-dominant environment.",
        category: "special-quality",
        source: EN,
        sourceUrl: PH_PATH,
      },
      {
        key: "entropic-creature-negative-energy-aura",
        name: "Negative Energy Aura (Su)",
        description:
          "Any living creature within 10 feet loses 1 hit point per round from the aura. Creatures immune to negative energy effects and other entropic creatures are unaffected. If conscious, the entropic creature can repress the aura as a standard action, but takes 1 point of Strength damage for each full minute the aura is inactive; the aura always functions while it is unconscious.",
        category: "special-quality",
        source: EN,
        sourceUrl: PH_PATH,
      },
      {
        key: "entropic-creature-outsider-traits",
        name: "Outsider Traits",
        description:
          "Cannot be raised, reincarnated, or resurrected (though a limited wish, wish, miracle, or true resurrection spell can restore life). Darkvision out to 60 feet. Environment: the Negative Energy Plane or as the base creature. Organization: solitary.",
        category: "special-quality",
        source: EN,
        sourceUrl: PH_PATH,
      },
      {
        key: "entropic-creature-turn-resistance",
        name: "Turn Resistance (Ex)",
        description: "An undead entropic creature has +4 turn resistance.",
        category: "special-quality",
        source: EN,
        sourceUrl: PH_PATH,
      },
    ],
  },
  {
    id: "vivacious-creature",
    name: "Vivacious Creature",
    ruleset: "core",
    timing: "inherited",
    summary:
      "An inherited template for any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, outsider, plant, or vermin, adapted to the Positive Energy Plane. Its type changes to outsider and it gains the incorporeal and extraplanar subtypes (do not recalculate Hit Dice, BAB, or saves); as an incorporeal creature it has no Strength score. It gains a fly speed equal to its base land speed (perfect maneuverability), loses all natural armor bonuses but gains a deflection bonus equal to its Charisma modifier or +1, whichever is higher, and gains a positive energy ray, fast healing 5, spell resistance 15 + HD (maximum 35) against negative-energy spells and effects, positive adaptation, a positive energy aura, and outsider traits. Constitution +2, Charisma +2; Intelligence is at least 3. CR: HD 3 or less, as base creature +1; HD 4–7, +2; HD 8+, +3. Level adjustment: same as the base creature +5 (recorded as the +5 increment). Treasure: none.",
    source: `${VI} (pp. 132–133)`,
    sourceUrl: PH_PATH,
    crModifier: 1,
    levelAdjustment: 5,
    prerequisites: [
      {
        allowedBaseTypes: ["Aberration", "Animal", "Dragon", "Fey", "Giant", "Humanoid", "Magical Beast", "Monstrous Humanoid", "Outsider", "Plant", "Vermin"],
        note: "Can be added to any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, outsider, plant, or vermin.",
      },
    ],
    abilityModifiers: { str: null, con: 2, cha: 2 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider. Do not recalculate the creature's Hit Dice, base attack bonus, or saves. Size is unchanged." },
      { op: "add-subtype", value: "Incorporeal", note: "The creature gains the incorporeal subtype." },
      { op: "add-subtype", value: "Extraplanar", note: "The creature gains the extraplanar subtype." },
      { op: "add-speed", value: "fly", note: "Gains a fly speed equal to its base land speed with perfect maneuverability (amount is the base creature's land speed, not a fixed number, so no fixed amount is recorded)." },
    ],
    features: [
      {
        key: "vivacious-creature-form",
        name: "Vivacious Form",
        description:
          "Loses all natural armor bonuses, but gains a deflection bonus equal to its Charisma modifier or +1, whichever is higher. Retains all the base creature's attacks and special attacks, although those relying on physical contact do not affect nonethereal creatures.",
        category: "special-quality",
        source: VI,
        sourceUrl: PH_PATH,
      },
      {
        key: "vivacious-creature-positive-energy-ray",
        name: "Positive Energy Ray (Su)",
        description:
          "Once every 1d4 rounds, can fire a positive energy ray (range 60 feet); on a successful ranged touch attack it infuses the target with positive energy equal to 1d4 + its Charisma modifier. This damages undead and heals living creatures; a creature healed past its full normal hit points must make Fortitude saves as if in a positive-dominant environment.",
        category: "special-attack",
        source: VI,
        sourceUrl: PH_PATH,
      },
      {
        key: "vivacious-creature-fast-healing",
        name: "Fast Healing (Ex)",
        description: "Regains hit points at a rate of 5 hit points per round.",
        category: "special-quality",
        source: VI,
        sourceUrl: PH_PATH,
      },
      {
        key: "vivacious-creature-limited-spell-resistance",
        name: "Limited Spell Resistance (Negative Energy) (Ex)",
        description:
          "Spell resistance equal to 15 + Hit Dice (maximum 35) against any spell or spell-like ability that uses negative energy, including inflict spells.",
        category: "special-quality",
        source: VI,
        sourceUrl: PH_PATH,
      },
      {
        key: "vivacious-creature-outsider-traits",
        name: "Outsider Traits",
        description:
          "Cannot be raised, reincarnated, or resurrected (though a limited wish, wish, miracle, or true resurrection spell can restore life). Darkvision out to 60 feet. Environment: the Positive Energy Plane. Organization: solitary.",
        category: "special-quality",
        source: VI,
        sourceUrl: PH_PATH,
      },
      {
        key: "vivacious-creature-positive-adaptation",
        name: "Positive Adaptation (Ex)",
        description:
          "Does not exceed its full normal hit points or need to make Fortitude saves due to being in a positive-dominant environment.",
        category: "special-quality",
        source: VI,
        sourceUrl: PH_PATH,
      },
      {
        key: "vivacious-creature-positive-energy-aura",
        name: "Positive Energy Aura (Su)",
        description:
          "Any living creature within 10 feet gains 1 hit point per round from the aura; a creature healed past its full normal hit points must make Fortitude saves as if in a positive-dominant environment. Creatures immune to positive energy effects and other vivacious creatures are unaffected. If conscious, the vivacious creature can suppress the aura as a standard action, but takes 1 point of Strength damage for each full minute the aura is inactive, as printed (the template also gives it no Strength score as an incorporeal creature); the aura always functions while it is unconscious.",
        category: "special-quality",
        source: VI,
        sourceUrl: PH_PATH,
      },
    ],
  },
];
