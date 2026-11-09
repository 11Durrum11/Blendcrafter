import type { FeatDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #317 pack (library-staging/packs/dragon-magazine/issue-317)
// The issue's eight staged feats:
//   * "Countdown to Eberron" (p. 17, magazine p. 18 on the page
//     image): two of the sidebar's four shifter feats — EXTRA
//     LYCANTHROPE CHARACTERISTIC and GREAT REND. The other two are
//     NOT staged: Shifter Defense and Healing Factor are identical
//     in prerequisites and effect to records the catalog already
//     holds (Shifter Defense from Monster Manual III's shifter
//     entry, Healing Factor from the Eberron Campaign Setting), so
//     staging -317 duplicates would add nothing; both preview texts
//     are written up in reference.md (see MANIFEST.md).
//   * "Truenames and Fetishes" by Philip M. Greeley (pp. 38–43):
//     TRUENAME [General]. The feat's prerequisite (Spellcraft 11
//     ranks) was verified on the printed page image. The full
//     truename/fetish system the feat unlocks is a variant rule set
//     and is written up in full in reference.md.
//   * "Faiths of Faerûn: The Red Knight" (pp. 80–83): the five feats
//     taught at the Red War College — HARD TO FOOL, IMPROVED
//     LEADERSHIP, LADY'S GAMBIT, NOBLE WARRIOR, PIKE HEDGE — all
//     [General] as printed, ruleset "faerun". (The ledger listed
//     this article as reference-only; it in fact prints five feats
//     and two spells in full. The spells are in spells-draft.ts; the
//     article's lore is in reference.md. See MANIFEST.md.)
// The XPH preview's OVERCHANNEL feat (p. 88) is NOT staged: it is
// identical to the catalog's Expanded Psionics Handbook record
// (id "overchannel"); it is written up in reference.md.
// None of the eight staged ids collides with the catalog (grep of
// src/data, both id styles, 2026-11-09). Benefit summaries are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

const DM317 = "Dragon Magazine #317";
const DM317_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt";

export const DRAGON_317_FEATS: FeatDefinition[] = [
  {
    id: "extra-lycanthrope-characteristic",
    name: "Extra Lycanthrope Characteristic",
    category: "race-specific",
    prerequisites: ["Shifter", "two other shifter feats"],
    benefitSummary: "While shifting, you can manifest a second lycanthrope characteristic (chosen from the shifter-317 characteristic list) in addition to your first. You gain all of the second characteristic's benefits except its temporary ability-score bonus.",
    special: "[Shifter] feat. Written against the Dragon #317 preview shifter (id \"shifter-317\"), whose characteristics differ from the published shifter traits; distinct from Races of Eberron's Extra Shifter Trait.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "eberron",
  },
  {
    id: "great-rend",
    name: "Great Rend",
    category: "race-specific",
    prerequisites: ["Shifter", "Render characteristic", "base attack bonus +4"],
    benefitSummary: "If you hit with both of your claw attacks in a round, you deal additional damage equal to 1d4 + one-half your Strength modifier.",
    special: "[Shifter] feat. Requires the Render lycanthrope characteristic of the Dragon #317 preview shifter (id \"shifter-317\").",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "eberron",
  },
  {
    id: "truename",
    name: "Truename",
    category: "general",
    prerequisites: ["Spellcraft 11 ranks", "a fetish object (see the truename rules in this pack's reference.md)"],
    benefitSummary: "You acquire a truename — a secret magic name, established by an 8-hour ritual costing rare materials worth 5,000 gp and 200 XP per Hit Die you possess, bound to a personal fetish object you own and carry. While using your truename you double the appropriate ability modifier for the save DCs of spells you cast and add it to your caster level for overcoming spell resistance and for dispel checks; the full rules (changing a truename, how truenames are learned, fetish loss and destruction, and the system's interactions with other spells) are in this pack's reference.md.",
    special: "You may have only one truename at a time. You must speak your truename aloud to gain its benefits; the feat's full system is a variant rule set written up in reference.md.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "hard-to-fool",
    name: "Hard to Fool",
    category: "general",
    prerequisites: [],
    benefitSummary: "You gain a +2 bonus on Will saves against illusions and a +2 bonus on Sense Motive checks.",
    special: "One of the five feats taught at the Red War College to holy strategists of the Red Knight.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "faerun",
  },
  {
    id: "improved-leadership",
    name: "Improved Leadership",
    category: "general",
    prerequisites: ["Charisma 15", "Leadership"],
    benefitSummary: "You gain a +2 bonus to your Leadership score.",
    special: "One of the five feats taught at the Red War College to holy strategists of the Red Knight.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "faerun",
  },
  {
    id: "ladys-gambit",
    name: "Lady's Gambit",
    category: "general",
    prerequisites: ["Base attack bonus +6", "Iron Will", "Power Attack"],
    benefitSummary: "You may sacrifice a number of hit points (maximum sacrifice equals your character level), taking them from your current hit point total as if you had lost them to damage. For every two hit points so sacrificed, you gain a +1 bonus on attack and damage rolls for 1 round. Hit points sacrificed in this manner may be regained in the same way that hit points lost to damage can.",
    special: "Using this feat is a free action, but you may use it only once per round on your turn. One of the five feats taught at the Red War College to holy strategists of the Red Knight.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "faerun",
  },
  {
    id: "noble-warrior",
    name: "Noble Warrior",
    category: "general",
    prerequisites: [],
    benefitSummary: "You gain a +2 competence bonus on Knowledge (history) and Knowledge (nobility and royalty) checks.",
    special: "One of the five feats taught at the Red War College to holy strategists of the Red Knight.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "faerun",
  },
  {
    id: "pike-hedge",
    name: "Pike Hedge",
    category: "general",
    prerequisites: ["Base attack bonus +2", "Combat Reflexes", "Hold the Line"],
    benefitSummary: "When readying an action to receive a charge, you deal double damage with any melee weapon, or triple damage with a spear, halberd, or any other polearm that normally deals double damage when set to receive a charge.",
    special: "A fighter may select Pike Hedge as one of his fighter bonus feats. Hold the Line is from Sword and Fist. One of the five feats taught at the Red War College to holy strategists of the Red Knight.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "faerun",
  },
];
