// Dragon Magazine #322 (August 2004) — feats.
// One feat stages: DARKNESS FAMILIAR [General], from the "New
// Feat" sidebar in "Lord of Darkness" (p. 67). Verified against
// the page image: the familiar table's required arcane
// spellcaster levels are cloaker 14th, dark creeper 10th,
// darkenbeast 12th, darkness pseudo-elemental (small) 7th, night
// hunter bat 5th, sinister bat 8th, shadow 9th, shadow asp 6th,
// shadow mastiff 14th, and wraith 14th (creatures marked * are
// from Monsters of Faerûn, ** from the Fiend Folio).
// The benefit summary is a faithful mechanical paraphrase in our
// own words; no magazine prose is reproduced.

import type { FeatDefinition } from "@/engine/types";

const DM322 = "Dragon Magazine #322 — Lord of Darkness";
const URL322 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine322_djvu.txt";

export const DRAGON_322_FEATS: FeatDefinition[] = [
  {
    id: "darkness-familiar",
    name: "Darkness Familiar",
    category: "general",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    prerequisites: [
      "Ability to acquire a new familiar",
      "Compatible alignment",
    ],
    benefitSummary:
      "So long as you are able to acquire a new familiar, you may choose a shadow creature from the following nonstandard list as your new familiar: cloaker (arcane spellcaster level 14th), dark creeper (10th), darkenbeast (12th), darkness pseudo-elemental, small (7th), night hunter bat (5th), sinister bat (8th), shadow (9th), shadow asp (6th), shadow mastiff (14th), wraith (14th). You may choose a familiar with an alignment up to one step away on each of the alignment axes (lawful through chaotic, good through evil). The darkness familiar is magically linked to its master just like a normal familiar, and uses the basic statistics for a creature of its kind as given in the noted book, with these exceptions: Hit Points — one-half the master's total or the familiar's normal total, whichever is higher; Attacks — use the master's base attack bonus or the familiar's base attack bonus, whichever is better, and damage equals that of a normal creature of its kind; Special Attacks — the familiar has all the special attacks of its kind; Special Qualities — the familiar has all the special qualities of its kind.",
  },
];
