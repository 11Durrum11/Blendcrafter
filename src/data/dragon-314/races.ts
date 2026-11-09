import type { RaceDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #314 pack (library-staging/packs/dragon-magazine/issue-314)
// The issue's one race: the Synad, from "Revised Psionics Preview #1:
// Psionics in 3.5" (by Bruce R. Cordell, pp. 64–69) — the preview's
// "entirely new psionic race," printed in the magazine ahead of the
// Expanded Psionics Handbook. Transcribed from the magazine text on
// archive.org (DragonMagazine314_djvu.txt).
//
// ADJUDICATION (see MANIFEST.md): the synad later shipped, revised, in
// Complete Psionic (2006) — notably NOT in the Expanded Psionics
// Handbook itself — and the catalog already carries that Complete
// Psionic version as id "synad". Per the different-source precedent,
// the magazine's original 2003 printing ships here as "synad-314" and
// both records live. The versions differ: the Complete Psionic
// revision ADDS darkvision 60 ft; the Dragon original has NO
// darkvision, and it lists Mental Obfuscation (+2 Will) as a
// standalone trait. The Dragon original also prints NO ability score
// adjustments and NO level adjustment; both are carried as printed
// (empty modifiers, level adjustment +0). Trait descriptions are
// faithful mechanical paraphrases in our own words; no magazine prose
// is reproduced. The synad's flavor sections (the threefold mind,
// physical description, relations, homelands) are in reference.md.

const DM314 = "Dragon Magazine #314";
const DM314_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt";

export const DRAGON_314_RACES: RaceDefinition[] = [
  {
    id: "synad-314",
    name: "Synad",
    ruleset: "core",
    source: DM314,
    sourceUrl: DM314_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Aberration",
    subtypes: [],
    abilityModifiers: {},
    favoredClass: "Any",
    levelAdjustment: 0,
    traits: [
      {
        key: "synad-314-aberration-type",
        name: "Aberration Type",
        description: "Synads are aberrations, not humanoids; they are not subject to spells or effects that affect only humanoids, such as charm person or dominate person.",
        category: "trait",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "synad-314-naturally-psionic",
        name: "Naturally Psionic",
        description: "Synads gain 3 bonus power points at 1st level — one each for the overmind, the collective, and the oracle. This does not grant the ability to manifest powers unless that ability is gained through another source, such as a psionic class.",
        category: "trait",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "synad-314-mental-obfuscation",
        name: "Mental Obfuscation (Su)",
        description: "The synad's combined, threefold mind grants it a +2 bonus on Will saving throws.",
        category: "special-quality",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "synad-314-oracle",
        name: "Oracle (Su)",
        description: "Once per day, the synad's oracle mind grants a precognitive edge: a floating +2 insight bonus the synad can apply to an initiative roll, an attack roll, or a saving throw. For an attack roll or saving throw, the synad can elect to apply the bonus after determining whether the unmodified roll would miss or fail.",
        category: "special-quality",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "synad-314-collective",
        name: "Collective (Su)",
        description: "The synad can spend one power point as a free action to gain a +2 bonus on any Knowledge or Psicraft check.",
        category: "special-quality",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "synad-314-multitask",
        name: "Multitask (Su)",
        description: "Once per day, the synad can spend one power point as a free action to gain a free standard action that can be used only for a purely mental action — a Knowledge, Psicraft, or other purely mental skill check, or manifesting a psionic power, but only if the character's normal actions that round do not also involve manifesting a power.",
        category: "special-quality",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
      {
        key: "synad-314-languages",
        name: "Languages",
        description: "Automatic Languages: Common and Synadic. Bonus Languages: Any (other than secret languages, such as Druidic). Favored Class: Any — when determining whether a multiclass synad takes an experience point penalty, his first chosen class does not count.",
        category: "trait",
        source: DM314,
        sourceUrl: DM314_PATH,
      },
    ],
  },
];
