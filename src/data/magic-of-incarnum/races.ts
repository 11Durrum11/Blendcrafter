import type { RaceDefinition } from "@/engine/types";

// Magic of Incarnum (WotC, 2005) — Chapter 1: Races, printed
// pp. 7-17, transcribed from the pdftotext extraction of
// Shaun's own copy, 2026-11-05. The chapter details exactly
// four races: azurins, dusklings, rilkans, and skarns (the
// chapter's "Common Races and Incarnum" section, p. 18, adds
// no new race records). Racial traits are transcribed as
// printed — note that rilkans and skarns carry only the
// reptilian subtype as printed (no incarnum subtype), while
// azurins and dusklings have the incarnum subtype.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const MOI = "Magic of Incarnum";
const MOI_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Magic of Incarnum.pdf";

export const MAGIC_OF_INCARNUM_RACES: RaceDefinition[] = [
  {
    id: "azurin",
    name: "Azurin",
    ruleset: "core",
    source: `${MOI} — Azurins (pp. 7-9)`,
    sourceUrl: MOI_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human", "Incarnum"],
    abilityModifiers: {},
    favoredClass: "Soulborn",
    bonusFeatSlots: 1,
    traits: [
      {
        key: "azurin-bonus-feat",
        name: "Bonus Feat",
        description: "1 extra feat at 1st level, a human trait that azurins inherit from their parents.",
        category: "feat",
        source: `${MOI}, p. 8`,
        sourceUrl: MOI_PATH,
      },
      {
        key: "azurin-essentia-pool",
        name: "Essentia Pool",
        description: "An azurin's essentia pool is permanently increased by 1. If he doesn't have an essentia pool, this trait grants him one with a single point of essentia.",
        category: "special-quality",
        source: `${MOI}, p. 8`,
        sourceUrl: MOI_PATH,
      },
      {
        key: "azurin-alignment",
        name: "Extreme Alignment",
        description: "Azurins are never neutral — they favor the extreme alignments (lawful good, chaotic good, lawful evil, or chaotic evil) and strive to embody their alignment.",
        category: "trait",
        source: `${MOI}, p. 8`,
        sourceUrl: MOI_PATH,
      },
    ],
  },
  {
    id: "duskling",
    name: "Duskling",
    ruleset: "core",
    source: `${MOI} — Dusklings (pp. 10-12)`,
    sourceUrl: MOI_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Fey",
    subtypes: ["Extraplanar", "Incarnum"],
    abilityModifiers: { con: 2, int: -2 },
    favoredClass: "Totemist",
    traits: [
      {
        key: "duskling-low-light-vision",
        name: "Low-Light Vision",
        description: "Dusklings can see twice as far as humans in starlight, moonlight, torchlight, and similar conditions of poor illumination, retaining the ability to distinguish color and detail.",
        category: "special-quality",
        source: `${MOI}, p. 10`,
        sourceUrl: MOI_PATH,
      },
      {
        key: "duskling-incarnum-speed",
        name: "Incarnum Speed",
        description: "A duskling can invest essentia to improve her speed: for every point of essentia invested in this racial trait, the duskling's speed improves by 5 feet (enhancement bonus; applies only in light or no armor and carrying no more than a light load).",
        category: "special-quality",
        source: `${MOI}, p. 10`,
        sourceUrl: MOI_PATH,
      },
      {
        key: "duskling-essentia-pool",
        name: "Essentia Pool",
        description: "A duskling's essentia pool is permanently increased by 1. If she doesn't have an essentia pool, this trait grants her one with a single point of essentia.",
        category: "special-quality",
        source: `${MOI}, p. 10`,
        sourceUrl: MOI_PATH,
      },
    ],
  },
  {
    id: "rilkan",
    name: "Rilkan",
    ruleset: "core",
    source: `${MOI} — Rilkans (pp. 12-14)`,
    sourceUrl: MOI_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Reptilian"],
    abilityModifiers: { dex: 2, str: -2 },
    favoredClass: "Incarnate",
    skillBonuses: { bluff: 2, diplomacy: 2 },
    traits: [
      {
        key: "rilkan-racial-knowledge",
        name: "Racial Knowledge",
        description: "The rilkan race is linked through incarnum to the accumulated knowledge of their entire people. All Knowledge checks are treated as trained skill checks for rilkans, regardless of ranks. Rilkans also gain a competence bonus on all Knowledge checks and bardic knowledge checks: +1, plus an additional +1 for every two soulmelds the rilkan currently has shaped.",
        category: "special-quality",
        source: `${MOI}, p. 12`,
        sourceUrl: MOI_PATH,
      },
      {
        key: "rilkan-silver-tongue",
        name: "Silver Tongue",
        description: "+2 racial bonus on Bluff and Diplomacy checks: rilkans are talented at saying the right word at the right time.",
        category: "trait",
        source: `${MOI}, p. 12`,
        sourceUrl: MOI_PATH,
      },
      {
        key: "rilkan-racial-aid",
        name: "Racial Aid",
        description: "Because of the incarnum bond that knits together all rilkans, whenever a rilkan succeeds on an aid another action to assist another rilkan, she adds +3 to the ally's roll rather than +2.",
        category: "special-quality",
        source: `${MOI}, pp. 12-13`,
        sourceUrl: MOI_PATH,
      },
    ],
  },
  {
    id: "skarn",
    name: "Skarn",
    ruleset: "core",
    source: `${MOI} — Skarns (pp. 15-17)`,
    sourceUrl: MOI_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Reptilian"],
    abilityModifiers: { str: 2, dex: -2 },
    favoredClass: "Incarnate",
    skillBonuses: { intimidate: 2, climb: 2 },
    traits: [
      {
        key: "skarn-spines",
        name: "Natural Weapon (Spines)",
        description: "A skarn can make one attack with his arm spines each round, with his primary hand or his off-hand (normal off-hand penalties; off-hand adds only one-half Strength bonus to damage). The attack deals 1d6 piercing damage. A skarn can't attack with his spines and a weapon wielded by the same arm in the same round; if he makes a spine attack with an arm carrying a shield, he loses the shield's AC bonus until the start of his next turn. If the skarn has a soulmeld bound to his arms chakra, his spine attacks are treated as lawful-aligned for overcoming damage reduction.",
        category: "special-attack",
        source: `${MOI}, p. 15`,
        sourceUrl: MOI_PATH,
      },
      {
        key: "skarn-spine-display",
        name: "Spine Display",
        description: "+2 racial bonus on Intimidate and Climb checks: skarns use their spines to create a display of ferocity, and the same spines aid them when they climb.",
        category: "trait",
        source: `${MOI}, p. 15`,
        sourceUrl: MOI_PATH,
      },
    ],
  },
];
