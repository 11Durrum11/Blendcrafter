// Dragon Magazine #326 (December 2004) — template draft: the four half-elemental
// templates from "Winning Races: Half-Elemental Classes" (Jonathan Drain), pp. 86-89.
// TEMPLATE + REFERENCE SPLIT (decided at extraction, documented in SCREENING.md): the
// article presents each half-elemental as a 3-level "monster class" progression of the
// Manual of the Planes half-elemental template (3.5-updated in the article's sidebar:
// skills and feats as the base creature, the relevant elemental subtype, no other
// special qualities, level adjustment +3). Each kind stages as ONE TemplateDefinition
// carrying the COMPLETED template (ability totals across the progression, CR +2 at
// completion, LA +3), with the full level-by-level monster-class progression —
// including each spell-like ability's minimum half-elemental level and required
// character level — carried verbatim-in-paraphrase in the record's features, so no
// printed mechanic is lost. The article's framing rules (ECL/LA explainer, how
// template levels work) are digested in reference.md. All four progression tables and
// all four spell-like ability tables were verified against rendered page images
// (pp. 87-89) — the image governs over the OCR stream. Descriptions are faithful
// mechanical paraphrases in our own words; no magazine prose is reproduced.

import type { TemplateDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #326 — Winning Races: Half-Elemental Classes (Jonathan Drain), pp. 86-89";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const PREREQ_NOTE =
  "Any corporeal creature with an Intelligence score of 4 or more can take levels in a half-elemental monster class (the template's levels, taken like a prestige class, grant no Hit Dice, base attack bonus, base save bonuses, skill points, feats, or ability score increases; each level raises the creature's ECL by +1 and does not count as a class level). Template is the Manual of the Planes half-elemental template as 3.5-updated by this article: the half-elemental gains skills and feats as the base creature, gains the relevant elemental subtype, and has a level adjustment of +3.";

export const DRAGON_326_TEMPLATES: TemplateDefinition[] = [
  {
    id: "half-air-elemental",
    name: "Half-Air Elemental",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature touched by the Elemental Plane of Air, quick of body and mind: over the three-level monster-class progression its type becomes outsider (native), it gains Dexterity +2, Intelligence +2, Wisdom +2, Charisma +2, and Constitution +2 in total, a +1 natural armor bonus, spell-like abilities gated by character level (from obscuring mist up to plane shift), and at completion the air subtype, flying at its base land speed with perfect maneuverability. Challenge rating rises to +2 at completion; level adjustment +3.",
    source: SRC,
    sourceUrl: SRC_URL,
    crModifier: 2,
    levelAdjustment: 3,
    prerequisites: [{ note: PREREQ_NOTE }],
    abilityModifiers: { dex: 2, int: 2, wis: 2, cha: 2, con: 2 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider (native) at 1st level. Half-elemental creatures are not extraplanar and can be raised and resurrected normally; creatures that were already outsiders or elementals do not have their types changed." },
      { op: "add-subtype", value: "Native", note: "Gains the native subtype as an outsider (native) at 1st level." },
      { op: "add-subtype", value: "Air", note: "Gains the air subtype at 3rd level, completing the transformation." },
      { op: "add-speed", value: "Fly", note: "With the air subtype at 3rd level, the character can fly at his base land speed with perfect maneuverability; the speed equals the base creature's land speed rather than a fixed figure." },
    ],
    features: [
      {
        key: "half-air-elemental-progression",
        name: "Monster Class Progression",
        description:
          "The template is taken one level at a time as a monster class. Level 1 (CR +0): Dex +2, outsider type, spell-like abilities. Level 2 (CR +1): Int +2, Cha +2, natural armor +1, spell-like abilities. Level 3 (CR +2): Con +2, Wis +2, air subtype, spell-like abilities. The ability score changes are racial bonuses that stack with existing racial bonuses, including those gained from previous half-elemental levels. The natural armor bonus stacks with any existing natural armor, but not with spells or magic items that provide a natural armor bonus.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "half-air-elemental-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "Each ability is usable once per day, using the character's Hit Dice as the caster level; the character must have the prerequisite half-elemental level and character level listed. Save DCs are Charisma-based (10 + spell level + Charisma modifier). Minimum level 1 / character level 1: obscuring mist. 1 / 3: wind wall. 1 / 5: gaseous form. 2 / 7: air walk. 2 / 9: control winds. 2 / 11: chain lightning. 3 / 13: control weather. 3 / 15: whirlwind. 3 / 17: elemental swarm (cast as an air spell only). 3 / 19: plane shift.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "half-air-elemental-air-subtype",
        name: "Air Subtype (Ex)",
        description:
          "At 3rd level the character fully transforms into a half-air elemental and gains the air subtype, granting him the ability to fly at his base land speed with perfect maneuverability.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  },
  {
    id: "half-earth-elemental",
    name: "Half-Earth Elemental",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature touched by the Elemental Plane of Earth, tough and burly and slow to anger: over the three-level monster-class progression its type becomes outsider (native), it gains Strength +4, Constitution +4, and Dexterity −2 in total, natural armor improving by +1 at 1st level and a further +3 at 2nd, spell-like abilities gated by character level (from magic stone up to plane shift), and at completion the earth subtype. Challenge rating rises to +2 at completion; level adjustment +3.",
    source: SRC,
    sourceUrl: SRC_URL,
    crModifier: 2,
    levelAdjustment: 3,
    prerequisites: [{ note: PREREQ_NOTE }],
    abilityModifiers: { str: 4, con: 4, dex: -2 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider (native) at 1st level. Half-elemental creatures are not extraplanar and can be raised and resurrected normally; creatures that were already outsiders or elementals do not have their types changed." },
      { op: "add-subtype", value: "Native", note: "Gains the native subtype as an outsider (native) at 1st level." },
      { op: "add-subtype", value: "Earth", note: "Gains the earth subtype at 3rd level, completing the transformation." },
    ],
    features: [
      {
        key: "half-earth-elemental-progression",
        name: "Monster Class Progression",
        description:
          "The template is taken one level at a time as a monster class. Level 1 (CR +0): Str +2, natural armor +1, outsider type, spell-like abilities. Level 2 (CR +1): Con +2, natural armor +3, spell-like abilities. Level 3 (CR +2): Str +2, Con +2, Dex −2, earth subtype, spell-like abilities. The ability score changes are racial bonuses (or, for the penalty, a permanent change that cannot be removed by any spell or effect) that stack with any existing racial bonuses; bonuses granted at different levels stack. The natural armor bonuses stack with any existing natural armor, including that granted by previous half-earth elemental levels, but not with spells or magic items that provide a natural armor bonus.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "half-earth-elemental-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "A half-earth elemental with either an Intelligence or Wisdom score of at least 8 gains these abilities, each usable once per day using the character's Hit Dice as the caster level; the character must have the prerequisite half-elemental level and character level listed. Save DCs are Charisma-based (10 + spell level + Charisma modifier). Minimum level 1 / character level 1: magic stone. 1 / 3: soften earth and stone. 1 / 5: stone shape. 2 / 7: spike stones. 2 / 9: wall of stone. 2 / 11: stoneskin. 3 / 13: earthquake. 3 / 15: iron body. 3 / 17: elemental swarm (cast as an earth spell only). 3 / 19: plane shift.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "half-earth-elemental-earth-subtype",
        name: "Earth Subtype (Ex)",
        description:
          "At 3rd level the character fully transforms into a half-earth elemental and gains the earth subtype.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  },
  {
    id: "half-fire-elemental",
    name: "Half-Fire Elemental",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature touched by the Elemental Plane of Fire, passionate and unpredictable: over the three-level monster-class progression its type becomes outsider (native), it gains Dexterity +4, Intelligence +2, and Charisma +2 in total, a +1 natural armor bonus, fire resistance rising from 10 to 15 before the fire subtype grants outright immunity at completion, and spell-like abilities gated by character level (from burning hands up to plane shift). Challenge rating rises to +2 at completion; level adjustment +3.",
    source: SRC,
    sourceUrl: SRC_URL,
    crModifier: 2,
    levelAdjustment: 3,
    prerequisites: [{ note: PREREQ_NOTE }],
    abilityModifiers: { dex: 4, int: 2, cha: 2 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider (native) at 1st level. Half-elemental creatures are not extraplanar and can be raised and resurrected normally; creatures that were already outsiders or elementals do not have their types changed." },
      { op: "add-subtype", value: "Native", note: "Gains the native subtype as an outsider (native) at 1st level." },
      { op: "add-subtype", value: "Fire", note: "Gains the fire subtype at 3rd level, completing the transformation: immunity to fire, but half-again as much (+50%) damage from cold." },
    ],
    features: [
      {
        key: "half-fire-elemental-progression",
        name: "Monster Class Progression",
        description:
          "The template is taken one level at a time as a monster class. Level 1 (CR +0): Dex +2, fire resistance 10, outsider type, spell-like abilities. Level 2 (CR +1): Int +2, natural armor +1, fire resistance 15, spell-like abilities. Level 3 (CR +2): Dex +2, Cha +2, fire subtype, spell-like abilities. The ability score increases are racial bonuses that stack with any existing racial bonuses, including those gained from previous half-elemental levels. The natural armor bonus stacks with any existing natural armor, but not with spells or magic items that provide a natural armor bonus.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "half-fire-elemental-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "A half-fire elemental with either an Intelligence or Wisdom score of at least 8 gains these abilities, each usable once per day using the character level as the caster level (this article's fire entry says \"character level\" where the other three entries say Hit Dice — staged as printed; see MANIFEST). The character must have the prerequisite half-elemental level and character level listed. Save DCs are Charisma-based (10 + spell level + Charisma modifier). Minimum level 1 / character level 1: burning hands. 1 / 3: produce flame. 1 / 5: flaming sphere. 2 / 7: wall of fire. 2 / 9: fire shield. 2 / 11: fire seeds. 3 / 13: firestorm. 3 / 15: incendiary cloud. 3 / 17: elemental swarm (cast as a fire spell only). 3 / 19: plane shift.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "half-fire-elemental-fire-subtype",
        name: "Fire Subtype (Ex)",
        description:
          "At 3rd level the character fully transforms into a half-fire elemental and gains the fire subtype, granting him immunity to fire, but he takes half-again as much (+50%) damage from cold. The fire resistance granted at 1st and 2nd level (10, then 15) is superseded by this immunity.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  },
  {
    id: "half-water-elemental",
    name: "Half-Water Elemental",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature touched by the Elemental Plane of Water, flexible and graceful: over the three-level monster-class progression its type becomes outsider (native), it gains Wisdom +2, Charisma +2, Strength +2, Constitution +2, and Intelligence +2 in total, a +1 natural armor bonus, spell-like abilities gated by character level (from obscuring mist up to plane shift), and at completion the water subtype, a swim speed equal to its base land speed, and the ability to breathe underwater. Challenge rating rises to +2 at completion; level adjustment +3.",
    source: SRC,
    sourceUrl: SRC_URL,
    crModifier: 2,
    levelAdjustment: 3,
    prerequisites: [{ note: PREREQ_NOTE }],
    abilityModifiers: { wis: 2, cha: 2, str: 2, con: 2, int: 2 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider (native) at 1st level. Half-elemental creatures are not extraplanar and can be raised and resurrected normally; creatures that were already outsiders or elementals do not have their types changed." },
      { op: "add-subtype", value: "Native", note: "Gains the native subtype as an outsider (native) at 1st level." },
      { op: "add-subtype", value: "Water", note: "Gains the water subtype at 3rd level, completing the transformation." },
    ],
    features: [
      {
        key: "half-water-elemental-progression",
        name: "Monster Class Progression",
        description:
          "The template is taken one level at a time as a monster class. Level 1 (CR +0): Wis +2, Cha +2, outsider type, spell-like abilities. Level 2 (CR +1): Str +2, natural armor +1, spell-like abilities. Level 3 (CR +2): Con +2, Int +2, water subtype, spell-like abilities. The ability score increases are racial bonuses that stack with any existing racial bonuses, including those gained from previous half-elemental levels. The natural armor bonus stacks with any existing natural armor, but not with spells or magic items that provide a natural armor bonus.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "half-water-elemental-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "A half-water elemental with either an Intelligence or Wisdom score of at least 8 gains these abilities, each usable once per day using the character's Hit Dice as the caster level; the character must have the prerequisite half-water elemental level and character level listed (the printed text says \"half-air elemental level\" in this entry — a print error, staged corrected; see MANIFEST). Save DCs are Charisma-based (10 + spell level + Charisma modifier). Minimum level 1 / character level 1: obscuring mist. 1 / 3: fog cloud. 1 / 5: water breathing. 2 / 7: control water. 2 / 9: ice storm. 2 / 11: cone of cold. 3 / 13: acid fog. 3 / 15: horrid wilting. 3 / 17: elemental swarm (cast as a water spell only). 3 / 19: plane shift.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "half-water-elemental-water-subtype",
        name: "Water Subtype (Ex)",
        description:
          "At 3rd level the character fully transforms into a half-water elemental and gains the water subtype, a swim speed equal to her base land speed, and the ability to breathe normally underwater.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  },
];
