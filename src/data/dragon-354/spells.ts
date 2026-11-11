// Dragon Magazine #354 (April 2007) — spell draft: 4 spells.
// Three from "Core Beliefs: Heironeous" (Sean K. Reynolds), p. 30 —
// the god's granted spells, each printed as a short "functions like"
// entry: BOLT OF GLORY (Clr 3), MEERSALM SKIN (Clr 6), SHIELD OF
// HEIRONEOUS (Clr 2, Pal 2). Their header fields follow the spells
// they function like (searing light / stoneskin / shield); Meersalm
// Skin additionally prints its own components line and material
// component, verified on the page image.
// One from "Ancient PCs" (Hal Maclean), p. 54 — KISSED BY THE AGES
// (Sor/Wiz 9), the "Timeless Magic" sidebar spell, printed with a
// full header; its XP component is listed but NO XP cost amount is
// printed anywhere in the issue — carried as printed and disclosed
// in MANIFEST.md / SCREENING.md.
// Headers verified against rendered page images (magazine pp. 30-31,
// 54); the image governs over the OCR stream.
// APOC screening: none of the four summons, calls, teleports, or
// opens a plane. Bolt of glory's damage riders key off planar origin
// (inert under the severed-planar canon) — staged as printed, flagged
// in SCREENING.md. Spell texts are faithful paraphrases.

import type { SpellDefinition } from "@/engine/types";

const SRC_HEIRONEOUS = "Dragon Magazine #354 — Core Beliefs: Heironeous (Sean K. Reynolds), pp. 30-31";
const SRC_ANCIENT = "Dragon Magazine #354 — Ancient PCs: Timeless Magic (Hal Maclean), p. 54";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Evocation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC_HEIRONEOUS,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_354_SPELLS: SpellDefinition[] = [
  C({
    id: "bolt-of-glory-354",
    name: "Bolt of Glory",
    descriptors: ["Good"],
    levels: { Cleric: 3 },
    spellResistance: "Yes",
    note: "Printed with school and level lines only ('functions like searing light'); the remaining header fields follow searing light. NAME COLLISION: this is a different spell from the bolt of glory in the Book of Exalted Deeds (Clr 6) — staged under the suffixed id; see SCREENING.md. Its damage riders key off the target's planar origin, which is inert as a rider under APOC's severed-planar canon; the spell itself is a straightforward positive-energy ray and stages as printed.",
    summary:
      "This spell functions like searing light, except that instead of a blast of light it delivers raw positive energy that resembles a silver bolt of lightning. Creatures from evil-aligned Outer Planes or from the Negative Energy Plane take damage as if they were undead. Creatures from good-aligned Outer Planes or the Positive Energy Plane take no damage from the spell.",
  }),
  C({
    id: "meersalm-skin",
    name: "Meersalm Skin",
    school: "Abjuration",
    levels: { Cleric: 6 },
    components: "V, S, M",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "10 min./level (D)",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    note: "Material component: a vial of meersalm worth 250 gp (meersalm is the church of Heironeous's sacred embalming substance, digested in the pack's reference.md). Header fields beyond the printed components follow stoneskin, the spell it functions like.",
    summary:
      "This spell functions like stoneskin, except that if the spell absorbs all the damage dealt by a weapon, that weapon must make a Fortitude saving throw or take 3d6 points of damage itself. For the duration of the spell the target's skin takes on a metallic copper coloration.",
  }),
  C({
    id: "shield-of-heironeous",
    name: "Shield of Heironeous",
    school: "Abjuration",
    descriptors: ["Force"],
    levels: { Cleric: 2, Paladin: 2 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 min./level (D)",
    note: "Header fields follow shield, the spell it functions like; the article prints the spell's heading on p. 30 and its short text at the top of p. 31.",
    summary:
      "This spell functions like shield, except that instead of creating an invisible disk of force it creates a barely visible shield bearing the holy symbol of Heironeous. Neither the shield nor the symbol obscure vision in any way.",
  }),
  C({
    id: "kissed-by-the-ages",
    name: "Kissed by the Ages",
    school: "Necromancy",
    levels: { "Sorcerer/Wizard": 9 },
    components: "V, S, F, XP",
    castingTime: "1 hour",
    range: "Touch",
    targetOrArea: "Any living creature other than yourself",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    source: SRC_ANCIENT,
    note: "Focus: a magic item with a market price of at least 4,000 gp. PRINT OMISSION: the Components line lists an XP component, but no XP cost amount is printed anywhere in the spell's text — carried as printed, disclosed for Shaun in SCREENING.md; no amount has been invented. The endless special quality the spell grants is digested in full in the pack's reference.md.",
    summary:
      "With this spell you create a magical connection between a living creature and a small magic item, such as a ring or pendant. The item forever eliminates your recipient's aging — she gains the endless special quality (see the pack's reference.md) — as long as she wears or carries it. The item radiates a strong aura of necromancy and gains the resilience of the recipient; the link makes the object all but impossible to destroy by normal means, requiring deity intervention, contact with an artifact, or similarly unusual circumstances. If she ever loses the object or removes it, she begins to age again at the normal rate for her race and suffers a -1 penalty on saving throws — against death effects, a -2 penalty instead — until she again carries the object. Your recipient always knows the approximate location and direction of the object as long as they are both on the same plane.",
  }),
];
