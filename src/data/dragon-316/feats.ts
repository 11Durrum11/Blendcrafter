import type { FeatDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #316 pack (library-staging/packs/dragon-magazine/issue-316)
// The issue's nine staged feats:
//   * "Expanded Psionics Preview" (Bruce R. Cordell, pp. 78–81):
//     all eight of the article's psionic feats are staged —
//     Greater Ghost Attack, Instinctive Consummator, Instinctive
//     Dispatcher, Phrenic Blast, Phrenic Leech, Psionic Feedback,
//     and Psymbiot, plus Ghost Attack itself, staged 2026-11-11 at
//     Shaun's order (see the adjudication note below).
//   * "Countdown to Eberron" (pp. 86–91), Sample Eberron Feats
//     sidebar: Dragon Rage and Flensing Strike. The sidebar's other
//     two feats (Action Boost, Haunting Melody) are NOT staged —
//     both are already in the catalog from the Eberron Campaign
//     Setting, where the sidebar itself says they come from (see
//     MANIFEST.md and reference.md).
//
// GHOST ATTACK ADJUDICATION (see MANIFEST.md): the article states
// plainly that none of its feats are taken from the Expanded
// Psionics Handbook "except for Ghost Attack," which is printed as
// an excerpt of the forthcoming book to showcase Greater Ghost
// Attack. The catalog already holds the published XPH record
// (id "ghost-attack", src/data/expanded-psionics/feats.ts) — whose
// final text differs from this preview (the book changed the feat to
// a double miss-chance roll). The preview was originally held out of
// the pack on that basis; at Shaun's order (2026-11-11) the preview
// version IS staged as "ghost-attack-316" under the different-source
// precedent, and both records stand.
//
// XPH/COMPLETE PSIONIC OVERLAP (see MANIFEST.md): Instinctive
// Consummator, Phrenic Leech, and Psymbiot were later republished
// in Complete Psionic with different prerequisites and (for
// Psymbiot) a different range; the Complete Psionic records already
// in the catalog are different feats under the same names. Per the
// program's different-source precedent (issue-314's synad-314),
// the Dragon versions stage suffixed -316 and both records stand.
//
// Category conventions follow the catalog's Expanded Psionics file:
// printed [Psionic] feats ship as "general" with the designator in
// the special line; printed [Metapsionic] feats ship as "metamagic"
// with the designator in the special line. The Eberron feats print
// [General] and ship as "general", ruleset "eberron"; their
// Eberron-specific prerequisite (Dragon Rage's Argonnessen region
// of origin) is setting lore and is not carried — see MANIFEST.md.
//
// Transcribed from the magazine text on archive.org
// (DragonMagazine316_djvu.txt); feat texts cross-checked against
// the printed page images. Benefit summaries are faithful
// mechanical paraphrases in our own words; no magazine prose is
// reproduced.

const DM316 = "Dragon Magazine #316";
const DM316_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine316_djvu.txt";

export const DRAGON_316_FEATS: FeatDefinition[] = [
  // ---- Expanded Psionics Preview (pp. 78–81) ----
  {
    id: "ghost-attack-316",
    name: "Ghost Attack",
    category: "general",
    ruleset: "core",
    prerequisites: ["Base attack bonus +3"],
    benefitSummary: "While psionically focused, when you make a successful critical hit with a melee or ranged attack, the attack is treated as if made with a ghost touch weapon for the purpose of affecting incorporeal creatures (no miss chance). (Dragon #316 preview printing, staged at Shaun's order 2026-11-11; the published Expanded Psionics Handbook feat of the same name in the catalog is a different record — the book changed the feat to a double miss-chance roll on any attack — see MANIFEST.md.)",
    special: "Psionic feat.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  {
    id: "greater-ghost-attack",
    name: "Greater Ghost Attack",
    category: "general",
    ruleset: "core",
    prerequisites: ["Base attack bonus +3", "Ghost Attack"],
    benefitSummary: "Every successful melee or ranged attack you make is treated as if made with a ghost touch weapon for the purpose of affecting incorporeal creatures — you are not subject to the normal miss chance for an incorporeal target, on any hit rather than only on critical hits. You must expend your psionic focus to use this feat.",
    special: "Psionic feat.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  {
    id: "instinctive-consummator-316",
    name: "Instinctive Consummator",
    category: "general",
    ruleset: "core",
    prerequisites: ["Base attack bonus +3", "Instinctive Dispatcher"],
    benefitSummary: "Whenever you threaten a living foe with a critical hit on a melee attack, you can choose to confirm the critical hit automatically, without the confirmation roll. You must expend your psionic focus to use this feat. (Dragon #316 printing; the Complete Psionic feat of the same name in the catalog is a different record with different prerequisites — see MANIFEST.md.)",
    special: "Psionic feat.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  {
    id: "instinctive-dispatcher",
    name: "Instinctive Dispatcher",
    category: "general",
    ruleset: "core",
    prerequisites: ["Base attack bonus +3"],
    benefitSummary: "Once per round, when you reduce a living foe to negative hit points through any means, you can perform a coup de grace against that foe as a free action that does not provoke an attack of opportunity. You must expend your psionic focus to use this feat, and you must have a free action available at the time.",
    special: "Psionic feat.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  {
    id: "phrenic-blast",
    name: "Phrenic Blast",
    category: "metamagic",
    ruleset: "core",
    prerequisites: [],
    benefitSummary: "When you deal damage with a phrenic blasting power to any creature that is subject to mind-affecting effects, the target is also stunned for 1 round. Using this feat increases the power point cost of the power by 2 (maximum cost equals your manifester level). You must expend your psionic focus to use this feat.",
    special: "Metapsionic feat.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  {
    id: "phrenic-leech-316",
    name: "Phrenic Leech",
    category: "metamagic",
    ruleset: "core",
    prerequisites: [],
    benefitSummary: "When you deal damage with a phrenic leeching power to any creature that possesses power points and is subject to mind-affecting effects, the target also loses 1d6 power points, and you gain 1 power point from the drain (points drained beyond your maximum are lost). Using this feat increases the power point cost of the power by 4 (maximum cost equals your manifester level). You must expend your psionic focus to use this feat. (Dragon #316 printing; the Complete Psionic feat of the same name in the catalog is a different record — see MANIFEST.md.)",
    special: "Metapsionic feat.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  {
    id: "psionic-feedback",
    name: "Psionic Feedback",
    category: "general",
    ruleset: "core",
    prerequisites: ["Knowledge (psionics) 8 ranks", "Psymbiot"],
    benefitSummary: "Whenever at least one psionic creature within 30 feet of you successfully saves against a psionic power (whether manifested by you or not), you transform the wasted energy of that power into a +4 insight bonus to your Intelligence, Wisdom, or Charisma score (your choice), lasting 1 full round. You gain no benefit from personally succeeding on a saving throw against a psionic power. You must maintain your psionic focus to use this feat.",
    special: "Psionic feat.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  {
    id: "psymbiot-316",
    name: "Psymbiot",
    category: "general",
    ruleset: "core",
    prerequisites: ["Knowledge (psionics) 8 ranks"],
    benefitSummary: "Whenever at least one psionic creature stands within 30 feet of you with an unobstructed line of sight between you, its unconscious psionic aura empowers you: you gain a +2 enhancement bonus on all ability checks, skill checks, and saving throws. You must maintain your psionic focus to use this feat. (Dragon #316 printing; the Complete Psionic feat of the same name in the catalog is a different record with a 10-foot range — see MANIFEST.md.)",
    special: "Psionic feat.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  // ---- Countdown to Eberron: Sample Eberron Feats (p. 91) ----
  {
    id: "dragon-rage",
    name: "Dragon Rage",
    category: "general",
    ruleset: "eberron",
    prerequisites: ["Base attack bonus +4", "Dragon Totem", "Ability to rage or frenzy"],
    benefitSummary: "When you enter a rage or frenzy, your natural armor improves by +2, and for the duration of the rage you gain resistance 10 to the energy type associated with your dragon totem (a total of resistance 15 while raging, stacking with the resistance granted by the Dragon Totem feat). Eberron preview feat; the magazine's region-of-origin prerequisite (Argonnessen) is setting lore and is not carried — see MANIFEST.md.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
  {
    id: "flensing-strike",
    name: "Flensing Strike",
    category: "general",
    ruleset: "eberron",
    prerequisites: ["Exotic Weapon Proficiency (kama)", "Weapon Focus (kama)"],
    benefitSummary: "Using flensing strike is a full attack action. A living, corporeal foe damaged by your attack with a kama must make a Fortitude save (DC 10 + 1/2 your character level + your Wisdom modifier; the DC increases by 1 if you are wielding two kamas, and the target adds its natural armor bonus, if any, to the save) or be wracked with pain, taking a -4 penalty on attack rolls, saves, and checks for 1 minute. Constructs, oozes, plants, undead, incorporeal creatures, creatures immune to critical hits, and creatures immune to pain are not susceptible.",
    special: "An evil monk may select Flensing Strike as a bonus feat at 6th level if she meets all the prerequisites.",
    source: DM316,
    sourceUrl: DM316_PATH,
  },
];
