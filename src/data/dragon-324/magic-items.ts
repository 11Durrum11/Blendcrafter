// Dragon #324 — magic items, staged 2026-11-09.
// Part 1: "The Magic Shop: Power at a Price" by Robert J. Hahn
// (pp. 74-77) — potent items with drawback prices; every stat line
// page-image verified (OCR garbled three names — image governs:
// Heironeous's Mercy, Shadahkar's Swift Wind, Agustinius's Folly —
// and read the Fool's Plate's enhancement as "+ J"; it is a +1
// buckler).
// Part 2: the seven sample runes from "Silicon Sorcery: Gothic II"
// (pp. 22-29), printed as usable items via the Etch Rune feat (see
// feats-draft.ts). Print flag: the Rune of Cure Serious Wounds lists
// cure moderate wounds as its prerequisite although its name and
// price (3rd-level spell × CL 5 × 75 gp = 1,125 gp) say cure serious
// wounds — staged as printed, flagged in the MANIFEST. The Common
// Runes price table (about a hundred existing spells) is
// reference.md material.

import type { MagicItemDefinition } from "@/engine/types";

const SRCMS = "Dragon Magazine #324 — The Magic Shop (Robert J. Hahn)";
const SRCSS = "Dragon Magazine #324 — Silicon Sorcery: Gothic II";
const URL = "https://archive.org/details/DragonMagazine260_201801";

function M(o: Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "category" | "cost" | "summary">): MagicItemDefinition {
  return { source: SRCMS, sourceUrl: URL, ruleset: "core", ...o } as MagicItemDefinition;
}

export const DRAGON_324_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "heironeouss-mercy",
    name: "Heironeous's Mercy",
    category: "wondrous",
    cost: "30,000 gp",
    summary: "Pale gray gloves, 1 lb.: deathwatch at will and death knell 3 times per day; once per day, transfer up to 20 hit points of wounds from a touched injured creature to yourself. Faint necromancy; CL 5th; Craft Wondrous Item, death knell, deathwatch.",
  }),
  M({
    id: "ring-of-the-mystical-elite",
    name: "Ring of the Mystical Elite",
    category: "ring",
    cost: "306,000 gp",
    summary: "After 24 hours worn, grants bonus spells (prepared or known as normal, metamagic allowed) whose combined spell levels equal your caster level, drawn from any spell list level you can cast. On donning, one school of magic is randomly forbidden to you (d8: 1 Abjuration, 2 Conjuration, 3 Divination, 4 Enchantment, 5 Evocation, 6 Illusion, 7 Necromancy, 8 Transmutation; reroll if already denied that school); the school stays forbidden until the ring is removed for 24 hours. Strong universal; CL 17th; Forge Ring, wish.",
  }),
  M({
    id: "lesser-ring-of-the-mystical-elite",
    name: "Lesser Ring of the Mystical Elite",
    category: "ring",
    cost: "182,000 gp",
    summary: "As a ring of the mystical elite, except the bonus spells' combined levels cannot exceed half your highest caster level, and the forbidden school blocks only its spells of 4th level and higher. Strong universal; CL 13th; Forge Ring, limited wish.",
  }),
  M({
    id: "skin-of-kaletor",
    name: "The Skin of Kaletor",
    category: "wondrous",
    cost: "12,000 gp",
    summary: "A shaggy bearskin cloak with the bear's head as a hood, 10 lb., reeking of rot: −6 penalty on all Charisma-based skill checks and wild empathy checks. A druid wearer uses wild shape as if four levels higher; a non-druid wearer can use wild shape once per day as a 4th-level druid. Faint transmutation; CL 4th; Craft Wondrous Item, creator must be a druid.",
  }),
  M({
    id: "fools-plate",
    name: "The Fool's Plate",
    category: "armor",
    cost: "7,200 gp",
    summary: "A +1 buckler, 3 lb., that looks like an ordinary silver platter with a mirrored finish. Anyone who attacks the wielder must make a DC 10 Will save or be dazed (as the daze spell); the wielder can also cast hypnotic pattern once per day. Whenever either effect is invoked, the user must make the same saving throw as his target or be affected by the same effect. Faint illusion; CL 3rd; Craft Magic Arms and Armor, daze, hypnotic pattern.",
  }),
  M({
    id: "shadahkars-swift-wind",
    name: "Shadahkar's Swift Wind",
    category: "wondrous",
    cost: "8,350 gp",
    summary: "Leopard-skin sandals, 1 lb.: +10 feet to base movement rate and access to the Endurance and Run feats, but the wearer is jittery and off balance, taking a −2 penalty to Dexterity. Faint transmutation; CL 1st; Craft Wondrous Item, expeditious retreat.",
  }),
  M({
    id: "mantle-of-the-winter-witch",
    name: "Mantle of the Winter Witch",
    category: "wondrous",
    cost: "17,000 gp",
    summary: "A warm fur cloak, 2 lb.: cold resistance 10 and +1 damage per die on any spell you cast with the cold descriptor — but you gain vulnerability to fire, taking half again (+50%) as much fire damage regardless of saving throws. Moderate evocation; CL 9th; Craft Wondrous Item, cone of cold, resist energy.",
  }),
  M({
    id: "agustiniuss-folly",
    name: "Agustinius's Folly",
    category: "armor",
    cost: "6,000 gp",
    summary: "+2 banded mail, 35 lb., granting inspire courage once per day as an 8th-level bard: a full-round inspiring speech starts it, and it lasts while you keep speaking (a free action) plus 5 rounds. The magic is unstable — 10% of the time it fails and panics all affected creatures for 10 rounds instead. Moderate enchantment; CL 8th; Craft Magic Arms and Armor, creator must be a bard.",
  }),
  M({
    id: "mask-of-fury",
    name: "Mask of Fury",
    category: "wondrous",
    cost: "12,000 gp",
    summary: "A half mask of stained oak, 2 lb., granting rage (as the barbarian ability) twice per day. Activation requires smearing the mask with your own blood — a standard action causing 3 points of damage — unless you have been wounded within the last hour, in which case activation is a free action with no further blood loss. Faint enchantment; CL 5th; Craft Wondrous Item, rage.",
  }),
  M({
    id: "hammer-of-skill",
    name: "Hammer of Skill",
    category: "weapon",
    cost: "18,000 gp",
    summary: "A crude +2 thundering cold iron warhammer, 5 lb., with a kind of semi-intelligence: each failed attack roll gives the hammer a cumulative −1 penalty on its next attack roll but a cumulative +1 circumstance bonus on its next damage roll; if the wielder fails ten attack rolls in a row, the hammer abandons him and can never be wielded by him again. It resets for each new wielder but always remembers a past wielder's performance. Moderate necromancy; CL 6th; Craft Magic Arms and Armor, blindness/deafness.",
  }),
  // ---- Sample runes (Silicon Sorcery: Gothic II) ----
  M({
    id: "rune-of-banishment",
    name: "Rune of Banishment",
    category: "wondrous",
    cost: "4,950 gp",
    summary: "A silver plaque carved with holy images and a saint spearing a demonic serpent; a single-use rune holding banishment (see the Etch Rune feat for rune use). Moderate abjuration; CL 11th; Etch Rune, banishment.",
    source: SRCSS,
  }),
  M({
    id: "rune-of-cure-serious-wounds",
    name: "Rune of Cure Serious Wounds",
    category: "wondrous",
    cost: "1,125 gp",
    summary: "A smooth wooden disk hanging on a worn leather cord, painted with a three-pronged drop of blood; a single-use rune holding cure serious wounds (see the Etch Rune feat for rune use). Faint conjuration; CL 5th; Etch Rune, cure moderate wounds (prerequisite as printed; see the pack MANIFEST).",
    source: SRCSS,
  }),
  M({
    id: "rune-of-dispel-magic",
    name: "Rune of Dispel Magic",
    category: "wondrous",
    cost: "1,125 gp",
    summary: "A broken mirror whose shattered frame is arranged into a starburst pattern; a single-use rune holding dispel magic (see the Etch Rune feat for rune use). Faint abjuration; CL 5th; Etch Rune, dispel magic.",
    source: SRCSS,
  }),
  M({
    id: "rune-of-enervation",
    name: "Rune of Enervation",
    category: "wondrous",
    cost: "2,100 gp",
    summary: "A mark singed into a yellowed wolf's skull; a single-use rune holding enervation (see the Etch Rune feat for rune use). Moderate necromancy; CL 7th; Etch Rune, enervation.",
    source: SRCSS,
  }),
  M({
    id: "rune-of-magic-missile",
    name: "Rune of Magic Missile",
    category: "wondrous",
    cost: "75 gp",
    summary: "An egg-shaped blue-gray stone etched with a winged dart; a single-use rune holding magic missile (see the Etch Rune feat for rune use). Faint divination (as printed); CL 1st; Etch Rune, magic missile.",
    source: SRCSS,
  }),
  M({
    id: "rune-of-telekinesis",
    name: "Rune of Telekinesis",
    category: "wondrous",
    cost: "3,375 gp",
    summary: "A foot-wide square of yellow cloth bearing a black handprint in its center; a single-use rune holding telekinesis (see the Etch Rune feat for rune use). Moderate evocation; CL 9th; Etch Rune, telekinesis.",
    source: SRCSS,
  }),
  M({
    id: "rune-of-true-strike",
    name: "Rune of True Strike",
    category: "wondrous",
    cost: "75 gp",
    summary: "A curve of scrap iron scored with countless gashes; a single-use rune holding true strike (see the Etch Rune feat for rune use). Faint divination; CL 1st; Etch Rune, true strike.",
    source: SRCSS,
  }),
];
