import type { TemplateDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #314 pack (library-staging/packs/dragon-magazine/issue-314)
// The issue's one template: Fire-Souled, from "The Brotherhood of the
// Burning Heart" (by Clifford Horowitz, pp. 18–25). Transcribed from
// the magazine text on archive.org (DragonMagazine314_djvu.txt).
// Descriptions are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.
//
// Shape notes: the template's only type change is gaining the fire
// subtype, carried as the single patch below. "Same as base creature
// +1" challenge rating and "same as base creature +3" level adjustment
// map to crModifier 1 and levelAdjustment 3. The Charisma increase is
// the template's only ability modifier. The Leadership bonus feat and
// the +2 leadership-score rider (if the feat is already possessed)
// ride in a feature — see MANIFEST.md. The article's sample
// fire-souled ettin is written up in reference.md.

const DM314 = "Dragon Magazine #314";
const DM314_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt";

export const DRAGON_314_TEMPLATES: TemplateDefinition[] = [
  {
    id: "fire-souled",
    name: "Fire-Souled",
    ruleset: "core",
    timing: "acquired",
    summary: "A creature consumed by passion: it gains the fire subtype, Charisma +4, a haste spell-like ability, an inspiring presence, immunity to stunning and dazing, and overwhelming passion — a touch that can strip a foe of a Charisma-based special attack or a spell. Applies to any creature with Intelligence 3 or more. Challenge Rating: same as base creature +1. Level Adjustment: same as base creature +3.",
    source: DM314,
    sourceUrl: DM314_PATH,
    crModifier: 1,
    levelAdjustment: 3,
    prerequisites: [
      { note: "Acquired template; can be added to any creature with an Intelligence score of 3 or more." },
    ],
    abilityModifiers: { cha: 4 },
    patches: [
      { op: "add-subtype", value: "Fire", note: "The fire-souled creature gains the fire subtype." },
    ],
    features: [
      {
        key: "fire-souled-overwhelming-passion",
        name: "Overwhelming Passion (Su)",
        description: "As a free action, the fire-souled creature can deliver this attack with a successful melee or melee touch attack. The target must make a Will save (DC 10 + 1/2 the fire-souled creature's racial Hit Dice + its Charisma modifier) or lose one special attack with a Charisma-based save DC, chosen by the fire-souled creature from abilities it has seen the target use. If the target casts spells as a bard or sorcerer or has several spell-like abilities, the attack instead blocks access to a single spell. Access is lost for a number of rounds equal to the fire-souled creature's Charisma bonus (minimum 1). Usable once per day per 2 Hit Dice (minimum once per day). This is a mind-affecting effect.",
        category: "special-attack",
        source: DM314,
        sourceUrl: DM314_PATH,
        dcFormula: "10 + 1/2 racial HD + Cha",
      },
      {
        key: "fire-souled-haste",
        name: "Haste (Sp)",
        description: "Once per day, as a standard action, the fire-souled creature can use haste as the spell, at a caster level equal to its racial Hit Dice.",
        category: "special-quality",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "fire-souled-inspiring",
        name: "Inspiring (Su)",
        description: "While the fire-souled creature is conscious, its allies within 10 feet gain a +1 morale bonus on attack rolls and skill checks and a +2 morale bonus on saving throws against charm and fear effects. This is a mind-affecting effect.",
        category: "special-quality",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "fire-souled-unshakable",
        name: "Unshakable (Ex)",
        description: "The fire-souled creature is immune to stunning and dazing effects.",
        category: "special-quality",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "fire-souled-leadership",
        name: "Leadership",
        description: "The fire-souled creature gains Leadership as a bonus feat. If it already possesses the Leadership feat, it instead gains a +2 bonus to its leadership score.",
        category: "feat",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
    ],
  },
];
