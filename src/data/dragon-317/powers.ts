import type { SpellDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #317 pack (library-staging/packs/dragon-magazine/issue-317)
// The issue's four psionic powers, from "Expanded Psionics Preview
// #3: Psionic Power" by Bruce R. Cordell (p. 88). The article states
// explicitly that none of the powers printed in it is taken from the
// Expanded Psionics Handbook — they are unique to the article. All
// four were later republished in Complete Psionic, and the catalog
// holds the Complete Psionic records; in every case the book version
// DIFFERS materially from the magazine version (see MANIFEST.md for
// the per-power diffs), so per the different-source precedent the
// magazine versions stage suffixed -317 and both records stand. The
// article's fifth game item, the Overchannel feat, IS the XPH feat
// and is identical to the catalog's XPH record — held, and written
// up in reference.md.
//
// Powers are modeled as SpellDefinition records exactly as the
// catalog models them (Expanded Psionics Handbook powers.ts
// precedent): the "school" is the power's discipline with a
// "(psionic power)" tag, the printed subschool rides in the
// subschool field, Display rides in components, Manifesting Time in
// castingTime, and Power Resistance in spellResistance. Power
// Points and Augment text ride in the summary and description.
// Level keys use the book's own list names ("Psion/Wilder" and the
// discipline lists). Summaries are faithful mechanical paraphrases
// in our own words; no magazine prose is reproduced.

const DM317 = "Dragon Magazine #317";
const DM317_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt";

export const DRAGON_317_POWERS: SpellDefinition[] = [
{
    id: "temporal-reiteration-317",
    name: "Temporal Reiteration",
    ruleset: "core",
    school: "Psychoportation (psionic power)",
    descriptors: [],
    levels: { "Nomad": 8 },
    components: "Display: Visual",
    castingTime: "1 free action",
    range: "Personal",
    targetOrArea: "You",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Power Points: 15, XP cost 1,000 XP. Your condition reverts to what it was on your last full round of activity, minus the XP and power points used to manifest this power. Manifesting is a free action, counts toward the normal limit of one quickened power per round, and cannot be done when it isn't your turn.",
    description: "Your condition reverts to what it was on your last full round of activity, minus the XP and power points used to manifest this power. This requires that you have a clear record of your hit points, power points, charges, and other pertinent condition information regarding your character. Manifesting the power is a free action, like manifesting a quickened power, and it counts toward the normal limit of one quickened power per round. You cannot manifest this power when it isn't your turn. XP Cost: 1,000 XP.",
    source: DM317,
    sourceUrl: DM317_PATH,
  }
];
