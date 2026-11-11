// Dragon Magazine #349 (November 2006) — feat draft: 11 records.
//
//   "The Horde" (Edward Bonny, Brian Cortijo, Laszlo Koller), p. 58 —
//     two Forgotten Realms regional feats in a sidebar inside the
//     Winterkeep / Yaïmmunahar gazetteer text: Horse Nomad and
//     Raumathar Heritor. Ruleset "faerun". Both verified against the
//     rendered p. 58 image.
//     * Horse Nomad is staged as horse-nomad-349: its benefit is
//       identical to the same-named Kara-Tur [Ancestor] feat staged in
//       the issue-315 pack (proficiency with composite shortbow, light
//       lance, and scimitar, +3 on Ride checks), but the frame differs
//       — [Regional] for Faerûn humans (the Hordelands, Nimbral, the
//       Ride, or the Shaar), 1st level only, one regional feat — so the
//       two printings stand side by side. (The #315 printing is not in
//       the live feats barrel as of this pack's audit.)
//
//   "Demonomicon of Iggwilv: Dagon" (James Jacobs), p. 39 —
//     * Thrall to Demon, reprinted in a sidebar with the note "This
//       feat first appeared in Book of Vile Darkness." The #349
//       printing is the original BoVD text: once per day while
//       performing an evil act, +1 luck bonus on any one roll; may not
//       also take Disciple of Darkness. The live catalog record
//       (thrall-to-demon) is the Heroes of Horror printing, which
//       updates the benefit (brand the victim of a later sacrifice,
//       whose death then grants a +2 luck bonus); the two printings
//       stand side by side as thrall-to-demon-349 per the program's
//       pairs rule. Neither printing involves summoning or contacting
//       the patron — the benefit is a luck bonus — so the feat stages
//       under this issue's Dagon screening rule.
//
//   "Class Acts: Arcane — Psiotheurgy" (Tim Hitchcock), pp. 88–89 —
//     eight feats for mixing arcane spellcasting with psionics, all at
//     3.5 / Expanded Psionics Handbook standard as printed (2006; no
//     3.0 psionics conversion needed). Categories follow the printed
//     designators, carried at the head of each benefit summary per
//     house convention: Hypnotic Focus [General], Cannibalize Spell
//     [Psionic], Cerebremetamagic [Metapsionic], Chameleon Crafting
//     [Item Creation], Mystic Focus [Psionic], Mystic Stability
//     [Psionic], Psiomancer [Psionic], Psiotheurgist [Psionic].
//     ⚠️ Cannibalize Spell prints a fractional yield — power points
//     equal to 1.5 × the sacrificed spell's level — with no rounding
//     rule; staged as printed and flagged in SCREENING.md.
//     Psiotheurgist's school/discipline table includes Conjuration
//     (teleportation) ↔ Psychoportation; that is a caster/manifester
//     level link only — the feat grants no teleportation or planar
//     access and stages without an APOC change (noted in SCREENING.md).

import type { FeatDefinition } from "@/engine/types";

const SRC_HORDE = "Dragon Magazine #349 — The Horde (Edward Bonny, Brian Cortijo, Laszlo Koller), p. 58";
const SRC_DAGON = "Dragon Magazine #349 — Demonomicon of Iggwilv: Dagon (James Jacobs), p. 39";
const SRC_PSIOTHEURGY = "Dragon Magazine #349 — Class Acts: Arcane — Psiotheurgy (Tim Hitchcock), pp. 88-89";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_PSIOTHEURGY,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const REGIONAL_SPECIAL =
  "Special: You may select this feat only as a 1st-level character. You may only have one regional feat.";

export const DRAGON_349_FEATS: FeatDefinition[] = [
  // ---- The Horde regional feats (p. 58) ----
  F({
    id: "horse-nomad-349",
    name: "Horse Nomad",
    ruleset: "faerun",
    source: SRC_HORDE,
    prerequisites: ["Human (the Hordelands, Nimbral, the Ride, or the Shaar)"],
    special: REGIONAL_SPECIAL,
    benefitSummary:
      "[Regional.] Raised in a culture that relies upon riding and shooting. Benefit: You gain proficiency with the composite shortbow, light lance, and scimitar. You also get a +3 bonus on all Ride checks. (Side-by-side printing: an [Ancestor] feat of the same name and benefit, for the Plain of Horses, is staged in the issue-315 pack.)",
  }),
  F({
    id: "raumathar-heritor",
    name: "Raumathar Heritor",
    ruleset: "faerun",
    source: SRC_HORDE,
    prerequisites: ["Human (the Hordelands, Lake of Mists, Rashemen, Thay)"],
    special: REGIONAL_SPECIAL,
    benefitSummary:
      "[Regional.] You are descended from the fiend-hating battlemages of the Raumathar Empire. Benefit: You gain a +2 bonus on Knowledge (the planes) checks and wizard becomes a favored class for you. In addition, three times per day, you can detect evil outsiders. This effect functions as per the spell detect undead, but detects evil outsiders rather than undead.",
  }),

  // ---- Demonomicon sidebar feat (p. 39) ----
  F({
    id: "thrall-to-demon-349",
    name: "Thrall to Demon",
    source: SRC_DAGON,
    benefitSummary:
      "[Vile.] You supplicate yourself to a demon prince in return for a small measure of power. Benefit: Once per day, while performing an evil act, you may call upon your demonic patron to add a +1 luck bonus on any one roll. Special: Once you take this feat, you may not take it again; you may not be a thrall to more than one demon. Nor may you take the Disciple of Darkness feat (a similar feat that binds you to an archdevil). This feat first appeared in Book of Vile Darkness. (Side-by-side printing: the live thrall-to-demon record carries the later Heroes of Horror version of this feat.)",
  }),

  // ---- Psiotheurgy (pp. 88–89) ----
  F({
    id: "hypnotic-focus",
    name: "Hypnotic Focus",
    benefitSummary:
      "[General.] You can train your mind to gain mastery over your body and unlock your mind's deepest capabilities. Benefit: Autohypnosis is always a class skill for you. As long as you do not have psionic focus (either because you expended it or because you lack the ability to gain it) you gain a +2 bonus on Autohypnosis checks.",
  }),
  F({
    id: "cannibalize-spell",
    name: "Cannibalize Spell",
    prerequisites: ["Ability to cast 1st-level spells", "Ability to manifest 1st-level powers"],
    benefitSummary:
      "[Psionic.] You are able to convert spell energy from one of your spellcasting classes into psionic energy. Benefit: You can sacrifice spell slots or prepared spells to gain additional power points. You gain a number of power points equal to 1.5 × the spell's level. You cannot sacrifice 0-level spells in this way. You can only sacrifice spells when you regain your daily allotment of power points. You cannot sacrifice a spell slot or prepared spell of a higher level than the highest-level power you can manifest. (Printed fractional yield — 1.5 × spell level — with no rounding rule given; see SCREENING.md.)",
  }),
  F({
    id: "cerebremetamagic",
    name: "Cerebremetamagic",
    category: "metamagic",
    prerequisites: ["Any metamagic feat"],
    benefitSummary:
      "[Metapsionic.] You can metamagic-ally enhance your spells with your mind. Benefit: Choose a metamagic feat you know. You can expend power points to create a prerequisite spell slot needed to prepare a spell modified by that metamagic feat. The power point cost equals double the needed spell slot's level (the level of the spell slot needed to prepare or spontaneously cast the desired spell with the desired metamagic feat applied). You also must devote a spell slot of the spell's normal level to this spell. You cannot enhance a spell in this way beyond the level of the highest-level spell you can cast. A sorcerer must spend a full-round action casting a cerebremetamagic spell.",
  }),
  F({
    id: "chameleon-crafting",
    name: "Chameleon Crafting",
    category: "item-creation",
    prerequisites: ["Any one item creation feat", "Ability to cast 1st-level spells", "Ability to manifest 1st-level powers"],
    benefitSummary:
      "[Item Creation.] You can craft magic items that can duplicate psionic powers, or psionic items that duplicate magic powers. Benefit: You can place any spell or power that you know into any items you create. The item crafted determines if the effect is magical or psionic. The XP cost for an item created with this feat equals 1.5 times the item's standard XP cost.",
  }),
  F({
    id: "mystic-focus",
    name: "Mystic Focus",
    prerequisites: ["Ability to cast 1st-level spells"],
    benefitSummary:
      "[Psionic.] You can tap your innate magical powers to create a reserve of mystic energy. Benefit: As a swift action, you may sacrifice a 1st-level spell slot or prepared spell to gain a virtual power point. This virtual power point allows you to gain psionic focus as a psionic character. You gain psionic focus automatically in this way and do not need to make a Concentration check. If you expend your psionic focus gained because of this feat, you also lose the virtual power point from your sacrificed spell and must sacrifice another 1st-level spell or spell slot to regain it. If you already have psionic focus from another source, sacrificing a spell slot or prepared spell to this feat grants you nothing.",
  }),
  F({
    id: "mystic-stability",
    name: "Mystic Stability",
    prerequisites: ["Ability to cast 1st-level spells", "Psychic enervation class ability"],
    benefitSummary:
      "[Psionic.] Your spells can safeguard you from the backlash of a wild surge. Benefit: Whenever you invoke a wild surge, you may immediately sacrifice a prepared spell or an available spell slot to reduce the chance of suffering psychic enervation by 5% per spell level. A cleric may not sacrifice a domain spell in this way.",
  }),
  F({
    id: "psiomancer",
    name: "Psiomancer",
    prerequisites: ["Ability to prepare spells", "Ability to cast 1st-level spells", "Ability to manifest 1st-level powers"],
    benefitSummary:
      "[Psionic.] You can convert psionic energy into arcane or divine energy. Benefit: You can spend power points to prepare an additional spell. You must expend a number of power points equal to (2 × the spell's level) + 1. You can only sacrifice power points when you prepare spells. You may only gain one additional spell per day using this feat. You cannot use power points to prepare a spell of a higher level than you could normally cast.",
  }),
  F({
    id: "psiotheurgist",
    name: "Psiotheurgist",
    prerequisites: ["Spell Focus in the appropriate school", "Ability to cast 1st-level spells", "Ability to manifest 1st-level powers"],
    benefitSummary:
      "[Psionic.] You possess a link connecting a school of magic with a psionic discipline. Benefit: Choose a school of magic (or subschool) from the following list. Whenever you cast a spell from the chosen school, your total caster level equals your caster level plus your manifester level. Whenever you manifest a power from the corresponding discipline, your total manifester level equals your caster level plus your manifester level. Conjuration (healing) — Psychometabolism; Conjuration (teleportation) — Psychoportation; Conjuration (all others) — Metacreativity; Divination — Clairsentience; Enchantment — Telepathy; Evocation — Psychokinesis; Illusion (shadow) — Metacreativity; Illusion (all others) — Telepathy; Transmutation (targeting creatures only) — Psychometabolism. This feat does not increase your spells per day or power points per day, nor does it grant you the ability to cast spells or manifest powers of a higher level than you can normally cast or manifest. Special: You may take Psiotheurgist multiple times. Each time you take the feat, it applies to a new school of magic.",
  }),
];
