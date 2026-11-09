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
    id: "burrowing-bonds-317",
    name: "Burrowing Bonds",
    ruleset: "core",
    school: "Metacreativity (psionic power)",
    subschool: "Creation",
    descriptors: [],
    levels: { "Shaper": 4 },
    components: "Display: Auditory and material",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One Medium or smaller creature",
    duration: "1 round/level (D)",
    savingThrow: "Reflex negates",
    spellResistance: "No",
    summary: "Power Points: 7. A long, slender, malleable shaft of crystal entwines the target, piercing its flesh: 3d6 points of damage when it first entwines, and 1d6 points of damage every round thereafter. Augment: for every 2 additional power points, the save DC increases by 1, or the power can affect a target one size category larger, or the continuous damage increases by 1d6 (any or all three).",
    description: "A long, slender, malleable shaft of crystal entwines your target in its loops, piercing the target's flesh and holding the target bound. The crystalline bond deals 3d6 points of damage when it first entwines and pierces the target's flesh, and 1d6 points of damage every round thereafter as it continues to writhe and burrow, tightening its grasp. A target caught by the burrowing bonds may attempt purely mental actions, such as manifesting a psionic power, but the bonds' burrowing nature requires that a manifester make a Concentration check (DC 20 + half the continuous damage last dealt) for each power attempted. Cutting or damaging the bonds can free a victim; the crystal has hardness 12 and 30 hit points. Teleportation and other forms of travel may displace the target, but the bonds remain with the target, tightening and burrowing (and dealing damage each round). The bonds are not affected by dispel psionics or dismiss ectoplasm. Augment: you can augment this power in one, two, or all three of the following ways — 1. For every 2 additional power points you spend, this power's save DC increases by 1. 2. For every 2 additional power points you spend, this power can affect a target one size category larger. 3. For every 2 additional power points you spend, the continuous damage (after the initial round) increases by 1d6 points.",
    note: "Differs from the Complete Psionic version in the catalog, which adds break-loose rules (Strength/Escape Artist checks, crystal AC) the magazine version does not have.",
    source: DM317,
    sourceUrl: DM317_PATH,
  },
  {
    id: "crystalstorm-317",
    name: "Crystalstorm",
    ruleset: "core",
    school: "Metacreativity (psionic power)",
    subschool: "Creation",
    descriptors: [],
    levels: { "Psion/Wilder": 3 },
    components: "Display: Material",
    castingTime: "1 standard action",
    range: "15 ft.",
    targetOrArea: "Ray",
    duration: "Instantaneous",
    savingThrow: "Fortitude partial; see text",
    spellResistance: "No",
    summary: "Power Points: 5. Thousands of razor-sharp crystal shards shoot forth in a thick ray from your hand (ranged touch attack), dealing 3d4 points of slashing damage and causing the target to gush blood, dealing an additional 1d4 points of Constitution damage on a failed Fortitude saving throw. Augment: for every additional 2 power points you spend, the damage increases by 1d4 points, plus 1d4 additional points of Constitution damage (on a failed Fortitude save).",
    description: "Thousands of razor-sharp crystal shards shoot forth in a thick ray from your hand. These crystals are supernaturally sharp and lacerate flesh. You must succeed at a ranged touch attack with the ray to deal damage to a target. The ray deals 3d4 points of slashing damage and causes the target to gush blood, dealing an additional 1d4 points of Constitution damage on a failed Fortitude saving throw. Augment: For every additional 2 power points you spend, this power's damage increases by 1d4 points, plus 1d4 additional points of Constitution damage (on a failed Fortitude saving throw).",
    note: "Differs from the Complete Psionic version in the catalog (Psion/Wilder 2, 3 power points, Close range, 2d4 damage, different augment).",
    source: DM317,
    sourceUrl: DM317_PATH,
  },
  {
    id: "energy-lance-317",
    name: "Energy Lance",
    ruleset: "core",
    school: "Psychokinesis (psionic power)",
    descriptors: [],
    levels: { "Psion/Wilder": 3 },
    components: "Display: Auditory and visual",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature or object",
    duration: "Instantaneous",
    savingThrow: "Fortitude half (object); see text",
    spellResistance: "Yes",
    summary: "Power Points: 5. You choose cold, electricity, fire, or sonic energy and release a focused lance of intense energy of the chosen type at a target, dealing 5d6 points of damage, with a type-specific rider on a failed Fortitude save (cold: target gives up its next move action; electricity: −2 on all Wisdom-based checks and skills for 1 round; fire: −2 on all attack rolls and Reflex saves for 1 round; sonic: −1 point of damage per die, ignores an object's hardness, no save for the hardness effect). Augment: for every additional power point you spend, the damage increases by 1d6.",
    description: "Upon manifesting this power, you choose cold, electricity, fire, or sonic energy. You release a focused lance of intense energy of the chosen type at a target, dealing 5d6 points of damage. If your primary discipline is psychokinesis, you have already selected a preferred energy type. Cold: the target is chilled and its joints stiffened; if it fails its Fortitude save, it must give up its next move action. Electricity: the target is jolted and disoriented; if it fails its Fortitude save, it takes a −2 modifier on all Wisdom-based checks and skills for 1 round. Fire: the target is scorched with pain; if it fails its Fortitude save, it takes a −2 modifier on all attack rolls and Reflex saves for 1 round. Sonic: the lance deals one less point of damage per die but ignores an object's hardness (this happens automatically; no Fortitude save allowed). This power's subtype is the same as the type of energy you manifest. Augment: For every additional power point you spend, this power's damage increases by one die (d6).",
    note: "Descriptor: see text. Differs from the Complete Psionic version in the catalog (Display, the electricity and sonic riders, and the augment rate — 1d6 per 2 power points there).",
    source: DM317,
    sourceUrl: DM317_PATH,
  },
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
    note: "An entirely different power from the Complete Psionic version in the catalog (Nomad 5, 9 power points, extends ongoing durations) despite sharing the name.",
    source: DM317,
    sourceUrl: DM317_PATH,
  },
];
