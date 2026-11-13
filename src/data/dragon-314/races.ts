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

export const DRAGON_314_RACES: RaceDefinition[] = [];
