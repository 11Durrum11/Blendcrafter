// Dragon #324 — "Exorcising Equipment: Items Every Undead Hunter
// Needs" by Robert J. Hahn (pp. 56-57), staged 2026-11-09. Prices and
// weights from the article's "New Undead-Hunting Equipment" table —
// page-image verified (the OCR garbled Blood Thickener's cost; the
// Holy or Unholy Candle is 75 gp, not the 25 gp the OCR read). The
// mummy mites' swarm stat block is monster material: full block in
// reference.md, mechanics summary in the item's notes.

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #324 — Exorcising Equipment (Robert J. Hahn)";
const URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC,
    sourceUrl: URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_324_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "blood-thickener",
    name: "Blood Thickener",
    cost: "75 gp",
    weight: "1 lb.",
    notes: "Alchemical substance. When ingested, the drinker's blood thickens and moves more slowly: a −2 penalty to Dexterity and a +2 alchemical bonus to Constitution for 12 hours. A dying character (reduced to between −1 and −9 hit points) loses 1 hit point every 2 rounds instead of every round. Creating one requires a DC 25 Craft (alchemy) check.",
  }),
  E({
    id: "book-of-prayers",
    name: "Book of Prayers",
    cost: "50 gp",
    weight: "3 lb.",
    notes: "An ornately illustrated, consecrated tome of prayers to a specific deity. A character who worships the book's deity may take a full-round action to read aloud from it and make a DC 10 Charisma check to aid a cleric of that deity in her attempt to turn undead, granting the cleric a +2 bonus on her turning check. A cleric can only be aided by one book user at a time. A non-member of the faith always fails the check. Creating one requires 1 rank of Knowledge (religion) and a DC 20 Craft (writing) check.",
  }),
  E({
    id: "holy-or-unholy-candle",
    name: "Holy or Unholy Candle",
    cost: "75 gp",
    weight: "—",
    notes: "Alchemically treated wax infused with spiritual incenses and soaked in holy or unholy water for three nights. The candle radiates light in a 5-foot radius (a holy candle sheds a pure yellow-white illumination; an unholy candle casts a flickering, deep purple glow) and burns for 1 hour. Clerics standing within the illumination of a holy candle gain a +2 bonus on their turning check result when attempting to turn or rebuke undead; within an unholy candle's light, clerics gain a +2 bonus on their turning check result when attempting to command or rebuke undead. A cleric can only be aided by one burning candle at a time. Creating one requires 1 rank of Knowledge (religion) and a DC 25 Craft (alchemy) check.",
  }),
  E({
    id: "holy-wafers",
    name: "Holy Wafers",
    cost: "2 sp (for 10)",
    weight: "—",
    notes: "Food created and sanctified in a religious ceremony, usually small, stylized bread wafers impressed with religious designs. Filling a vampire's mouth with holy wafers and cutting off its head effectively prevents it from returning to undeath. Food created by divine spells such as goodberry works in the same way. Holy wafers can be purchased at most temples and religious shrines.",
  }),
  E({
    id: "mummy-mites",
    name: "Mummy Mites",
    cost: "75 gp",
    weight: "1 lb.",
    notes: "A flask of desiccated, ant-sized insect eggs, treated as a thrown splash weapon. On a hit the flask breaks over the target 5-foot square. The eggs do not react to living creatures, but if they land within 5 feet of dead flesh they hatch immediately and the swarm attacks on the next round, feasting on any corpse or corporeal undead in the area to the exclusion of all else for 1 minute, after which the mites die. Living creatures sharing the swarm's space are distracted as normal for a swarm (mummy mite swarm: CR 1, Fine vermin (swarm), 2d8 HD — full stat block in the pack's reference.md).",
  }),
  E({
    id: "portable-pyre",
    name: "Portable Pyre",
    cost: "10 gp",
    weight: "15 lb.",
    notes: "A bundle of oil-soaked logs and tindertwigs. Unrolling the pyre over an empty 5-foot square is a standard action that provokes attacks of opportunity, after which the tindertwigs ignite it; with a full-round action (also provoking) it can instead be laid so it ignites only if exposed to fire. Creatures that enter or remain in a lit pyre's square take 1d6 points of fire damage each round. It burns for 10 minutes, can be extinguished with 10 gallons of water, cannot be reused, cannot be wielded as a weapon, and must be deployed on a flat surface. Creating one requires a DC 15 Craft (alchemy) check.",
  }),
  E({
    id: "reinforced-sheath",
    name: "Reinforced Sheath",
    cost: "10 gp",
    weight: "2 lb.",
    notes: "This unusual sheath turns a bladed slashing or piercing weapon into a bludgeoning weapon, allowing the wielded weapon to be used while the blade remains in the sheath, at a −2 penalty on attack rolls. A reinforced sheath can be made for practically any slashing or piercing weapon, but a magic weapon's properties do not convey through it; masterwork reinforced sheaths can be created and enhanced separately. Creating one requires a DC 25 Craft (weaponsmithing) check.",
  }),
];
