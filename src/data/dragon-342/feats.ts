// Dragon Magazine #342 (April 2006) — feat draft: 18 records.
// ONE feat from "Domain Power" (Jake Manley), pp. 21-25: Improved Power.
// FOURTEEN initiate feats from "The Power of Faith: Initiate Feats of
// the Core Deities" (John E. Ling, Jr. and the Dragon staff), pp. 49-56
// — the issue's largest record block, entirely missed by the program
// survey (which expected ~4 feats inside "Core Beliefs: Olidammara";
// that article prints no feats). ONE feat from "Beyond the Pale"
// (Rodney Thompson), pp. 26-31: Life Restorer, the gate feat of the
// raise-the-dead variant system (the variants themselves digest in
// reference.md; the feat stages with its context stated and is flagged
// in SCREENING.md). ONE feat from Class Acts "The Wild Hunt"
// (William L. Christensen), pp. 88-89: Frenzied Hunt. ONE feat from
// Class Acts "The Art of Kuji-In" (Kyle Stanley Hunter), pp. 84-85:
// Guerilla Trapsmith — printed [General] in that article's "Other Ninja
// Tricks" sidebar with NO ninja or ki prerequisite; it stages here with
// a prominent flag (the article's eight [Ki] feats do NOT stage — the
// standing oriental-material ruling — and digest in reference.md).
// All feat texts verified against rendered page images (magazine
// pp. 21, 51, 52, 89); the image governs over the OCR stream.

import type { FeatDefinition } from "@/engine/types";

const SRC_DOMAIN = "Dragon Magazine #342 — Domain Power (Jake Manley), pp. 21-25";
const SRC_FAITH = "Dragon Magazine #342 — The Power of Faith: Initiate Feats of the Core Deities (John E. Ling, Jr. and the Dragon staff), pp. 49-56";
const SRC_PALE = "Dragon Magazine #342 — Beyond the Pale (Rodney Thompson), pp. 26-31";
const SRC_HUNT = "Dragon Magazine #342 — Class Acts: The Wild Hunt (William L. Christensen), pp. 88-89";
const SRC_KUJI = "Dragon Magazine #342 — Class Acts: The Art of Kuji-In (Kyle Stanley Hunter), pp. 84-85";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_FAITH,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const INITIATE_FRAME =
  "Special: No character can have more than one initiate feat. The spells marked * are printed in the same article and staged in this pack's spells draft; unmarked spells are existing spells added to the list.";

export const DRAGON_342_FEATS: FeatDefinition[] = [
  // ---- Domain Power (1) ----
  F({
    id: "improved-power",
    name: "Improved Power",
    source: SRC_DOMAIN,
    prerequisites: ["Granted power of the same domain as the selected improved granted power"],
    benefitSummary:
      "[General.] Through long devotion and hours of study you have unlocked one of the improved granted powers of that domain. Benefit: You may use the improved granted power of the chosen domain (the 21 improved powers are digested in full in this pack's reference.md — cleric domains have no catalog barrel). Special: You can gain this feat multiple times; its effects do not stack — each time you take it, it applies to a new domain.",
  }),
  // ---- Beyond the Pale (1) ----
  F({
    id: "life-restorer",
    name: "Life Restorer",
    source: SRC_PALE,
    prerequisites: ["Ability to cast divine spells"],
    benefitSummary:
      "[General.] Benefit: You may prepare and cast conjuration (healing) spells that return life to the dead (raise dead and its relatives). Printed as the gate feat of the 'Keepers of the Dead' variant in 'Beyond the Pale,' an article of optional rules restricting who may raise the dead; the variant system digests in this pack's reference.md and the staging is flagged in SCREENING.md. In a campaign not using those variants this feat has no separate effect.",
  }),
  // ---- The Power of Faith: initiate feats (14) ----
  F({
    id: "initiate-of-boccob",
    name: "Initiate of Boccob",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Boccob"],
    benefitSummary:
      "[Initiate.] Your strong faith in Boccob grants you special powers. Benefit: You can make all Knowledge checks untrained, and you cast all divination spells at +1 caster level (this stacks with the bonus provided by the Knowledge domain's granted power). In addition, you may add the following spells to one of your divine spell lists: 1st — memory jar*; 2nd — identify; 4th — research aid*. Special: Identify also appears on the Magic domain spell list; with this feat you can cast it as a regular cleric spell, not just as a domain spell. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-ehlonna",
    name: "Initiate of Ehlonna",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Ehlonna"],
    benefitSummary:
      "[Initiate.] Your strong faith in Ehlonna grants you special powers. Benefit: Once per day you may cast pass without trace upon yourself as a spell-like ability. In addition, add Handle Animal and Survival to the skill list of one of your divine spellcasting classes. In addition, you may add the following spells to one of your divine spell lists: 1st — longstrider; 3rd — snare; 4th — commune with nature; 8th — animal shapes. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-erythnul",
    name: "Initiate of Erythnul",
    prerequisites: ["Ability to cast 4th-level divine spells", "Patron deity Erythnul"],
    benefitSummary:
      "[Initiate.] Your strong faith in Erythnul grants you special powers. Benefit: Any time you kill a creature with a critical hit you gain the benefits of the spell death knell. This effect does not function if the critical hit is made as part of a coup de grace; the creature must be reduced to -10 hp with the critical hit, not merely rendered unconscious. In addition, you may add the following spells to one of your divine spell lists: 2nd — cause fear, greater*; 5th — Erythnul's slaughter*; 6th — rage, mass*. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-fharlanghn",
    name: "Initiate of Fharlanghn",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Fharlanghn"],
    benefitSummary:
      "[Initiate.] Your strong faith in Fharlanghn grants you special powers. Benefit: Your base land speed increases by +10 feet. In addition, you may add the following spells to one of your divine spell lists: 1st — alarm; 1st — expeditious retreat; 4th — dimension door; 7th — phase door. (APOC: dimension door and phase door are teleportation/extra-dimensional effects — the feat stages as printed; see SCREENING.md.) " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-heironeous",
    name: "Initiate of Heironeous",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Heironeous"],
    benefitSummary:
      "[Initiate.] Your strong faith in Heironeous grants you special powers. Benefit: When fighting with a longsword, you deal an extra 1d4 points of damage against evil targets; if the target possesses an aura of evil or is an evil-aligned outsider you instead deal 1d6 extra points of damage. In addition, you may add the following spells to one of your divine spell lists: 2nd — mark of justice, lesser*; 3rd — bless, greater*; 4th — righteousness of Heironeous*. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-hextor",
    name: "Initiate of Hextor",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Hextor"],
    benefitSummary:
      "[Initiate.] Your strong faith in Hextor grants you special powers. Benefit: When fighting with a flail, you deal an extra 1d4 points of damage against good targets; if the target possesses an aura of good or is a good-aligned outsider you instead deal 1d6 extra points of damage. In addition, you may add the following spells to one of your divine spell lists: 2nd — scare; 4th — bane, greater*; 4th — wrath of Hextor*. (Print conflict: the feat table lists bane, greater at 4th level; the spell's own block prints Initiate of Hextor 3 — the spell block governs the spell record; see MANIFEST.md.) " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-kord",
    name: "Initiate of Kord",
    prerequisites: ["Ability to cast 2nd-level divine spells", "Patron deity Kord"],
    benefitSummary:
      "[Initiate.] Your strong faith in Kord grants you special powers. Benefit: You get a +4 size modifier on bull rush, disarm, grapple, overrun, sunder, and trip attempts. In addition, you may add the following spells to one of your divine spell lists: 1st — Kord's power surge*; 2nd — Kord's greeting*; 4th — champion of Kord*. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-nerull",
    name: "Initiate of Nerull",
    prerequisites: ["Ability to cast 4th-level divine spells", "Patron deity Nerull"],
    benefitSummary:
      "[Initiate.] Your strong faith in Nerull grants you special powers. Benefit: When using your Death domain granted power, you may roll d8s instead of d6s to determine the damage. In addition, you may add the following spells to one of your divine spell lists: 2nd — cause fear, greater*; 3rd — Nerull's scythe*; 9th — wail of the banshee. Special: Wail of the banshee also appears on the Death domain spell list; with this feat you can cast it as a regular cleric spell, not just as a domain spell. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-obad-hai",
    name: "Initiate of Obad-Hai",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Obad-Hai"],
    benefitSummary:
      "[Initiate.] Your strong faith in Obad-Hai grants you special powers. Benefit: You can 'lose' a prepared spell to spontaneously cast any summon nature's ally spell of the same level or lower, just as a druid, in addition to cure spells. In addition, you may add the following spells to one of your divine spell lists: 1st — summer breezes*; 2nd — spontaneous combustion* (the spell's own block prints Initiate of Obad-Hai 3 — the spell block governs; see MANIFEST.md); 3rd — quicksand*; 5th — waves of destruction*. (APOC: the spontaneous-conversion benefit works through summon nature's ally, and summoning does not work in APOC — the feat stages as printed and is flagged in SCREENING.md.) " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-olidammara",
    name: "Initiate of Olidammara",
    prerequisites: ["Ability to cast 2nd-level divine spells", "Patron deity Olidammara"],
    benefitSummary:
      "[Initiate.] Your strong faith in Olidammara grants you special powers. Benefit: Add Gather Information, Sleight of Hand, and Tumble to the skill list of one of your divine spellcasting classes. In addition, you may add the following spells to one of your divine spell lists (they appear in 'Core Beliefs: Olidammara' on page 32 of this issue): festival feast*, Olidammara's bard spell*, Olidammara's carapace*. (Print conflict: this feat's table lists the three spells at 1st, 2nd, and 3rd level; their own blocks in 'Core Beliefs: Olidammara' print them as cleric 2, 4, and 5 — the spell blocks govern the spell records; see MANIFEST.md.) " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-pelor",
    name: "Initiate of Pelor",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Pelor"],
    benefitSummary:
      "[Initiate.] Your strong faith in Pelor grants you special powers. Benefit: You receive a +2 sacred bonus on turning checks and turning damage rolls. In addition, you may add the following spells to one of your divine spell lists: 1st — true turning*; 3rd — bless, greater*; 4th — immolate the wicked*. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-st-cuthbert",
    name: "Initiate of St. Cuthbert",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity St. Cuthbert"],
    benefitSummary:
      "[Initiate.] Your strong faith in St. Cuthbert grants you special powers. Benefit: You can generate the protective ward granted by the Protection domain ability once per day per four cleric levels. In addition, you may add the following spells to one of your divine spell lists: 2nd — mark of justice, lesser*; 3rd — retributive strike*; 7th — spell turning. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-vecna",
    name: "Initiate of Vecna",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Vecna"],
    benefitSummary:
      "[Initiate.] Your strong faith in Vecna grants you special powers. Benefit: You can use scrolls, wands, and other devices with spell completion or spell trigger activation as a wizard of your cleric level; for the purpose of using a scroll or other magic device, if you are also a wizard, actual wizard levels and these effective wizard levels stack. In addition, you may add the following spells to one of your divine spell lists: 3rd — Vecna's courier* (the spell's own block prints Initiate of Vecna 4 — the spell block governs; see MANIFEST.md); 4th — arcane eye; 6th — eyebite. " +
      INITIATE_FRAME,
  }),
  F({
    id: "initiate-of-wee-jas",
    name: "Initiate of Wee Jas",
    prerequisites: ["Ability to cast 3rd-level divine spells", "Patron deity Wee Jas"],
    benefitSummary:
      "[Initiate.] Your strong faith in Wee Jas grants you special powers. Benefit: You can, as a standard action, spend one of your turning attempts to release a wave of energy in a 20-foot radius. If you channel positive energy, this wave deals 1d6 points of damage per two cleric levels you possess to undead creatures (a successful Will save halves this damage, DC = 10 + 1/2 your cleric level + your Charisma modifier). If you channel negative energy, this wave cures undead creatures of the same amount; hit points cured in excess of a creature's normal hit point total are lost. In addition, you may add the following spells to one of your divine spell lists: 2nd — disguise undead (its full block is printed in the same article; the spell is already in the catalog from the Spell Compendium — the #342 printing adds this initiate access, carried here rather than as a duplicate spell record; see MANIFEST.md); 5th — magic jar; 6th — circle of death. " +
      INITIATE_FRAME,
  }),
  // ---- The Wild Hunt (1) ----
  F({
    id: "frenzied-hunt",
    name: "Frenzied Hunt",
    source: SRC_HUNT,
    prerequisites: [
      "Base attack bonus +6",
      "Ability to turn or rebuke undead",
      "Must have either witnessed the Wild Hunt taking place or have been hunted by the Master of the Hunt's followers",
    ],
    benefitSummary:
      "[General.] You can channel the divine to send yourself into a powerful but dangerous alternative state of being. Benefit: You can spend a turn or rebuke attempt as a free action to enter into a wild state of frenzy. Your base attack bonus becomes equal to your character level (which might grant you extra attacks), you gain a +4 enhancement bonus to Dexterity, and a +4 enhancement bonus on all Listen and Spot checks. Due to the focused bloodlust of the frenzy you can only use physical attacks, favoring ranged (or thrown) attacks when possible; you cannot cast spells or take any other action that requires concentration as long as the frenzy lasts. While frenzied you seek only to kill prey: you consider any non-allied creatures within your line of sight as prey, and once a creature you designate as prey falls you stop attacking it and move on to another creature, though you can always differentiate between friend and foe. If you down all available prey before the frenzy ends you immediately begin a hunt, searching for more prey, going to any length to find another suitable creature to hunt even if it means risking life and limb. To determine the number of rounds the frenzy lasts, roll a turning check (1d20 + Cha modifier) and consult Table 8-9: Turning Undead on page 159 of the Player's Handbook; the duration equals the maximum Hit Dice of undead you could affect with that turning check. You may attempt to end the frenzy early by succeeding at a Will save (DC 15 + rounds remaining of the frenzy), once per round. At the end of the frenzy you lose all of its benefits and become fatigued for a number of minutes equal to the number of rounds you spent in the frenzied state.",
  }),
  // ---- The Art of Kuji-In sidebar (1) — FLAGGED, see SCREENING.md ----
  F({
    id: "guerilla-trapsmith",
    name: "Guerilla Trapsmith",
    source: SRC_KUJI,
    benefitSummary:
      "[General.] Benefit: You get a +2 bonus on all Craft (trapmaking) checks, and the DCs to find and remove traps you construct increase by +2. In addition, you can assemble a basic trap (one with a CR of 1/2) in just 5 rounds instead of 1 minute. Printed in the 'Other Ninja Tricks' sidebar of the ninja article 'The Art of Kuji-In' but carrying no ninja, ki, or class prerequisite of any kind; staged as a generic trapmaking feat with a flag in SCREENING.md.",
  }),
];
