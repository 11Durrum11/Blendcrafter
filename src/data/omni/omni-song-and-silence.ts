/**
 * Omni sweep Wave 2 (2026-11-02): Song and Silence (3.0) —
 * Chapter 3's bard and rogue equipment (Tables 3-1 and 3-2) and
 * magic items (pp. 54-58). Already cataloged and skipped: the
 * barricade buckler, flute of the snake, and possum pouch (same
 * prices in later books). Seven of this chapter's wondrous items
 * were reprinted in Complete Adventurer or Magic Item Compendium
 * at LOWER prices and are skipped as conflicts (see the report):
 * vial of the last gasp, harp of the immortal maestro, lute of
 * the wandering minstrel, mandolin of the inspiring muse, strings
 * of spell storing, jumping caltrops, and spool of endless rope.
 * The bayonet is skipped: Sorcery & Steam's catalog record prices
 * it at 10 gp against this book's 5 gp. The two weighted sleeve
 * rows (Small and Medium) print identical price and weight, so
 * they are a single record. Chapter 3's many bardic instruments
 * described in prose carry no printed prices (a generic masterwork
 * instrument covers them), and Chapter 2's sample dungeon traps
 * are fixtures built in place, not purchasable goods; both are
 * enumerated in the report instead.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const SNS_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "sns-singing-sword",
    "name": "Singing Sword",
    "category": "weapon",
    "cost": "127,855 gp",
    "summary": "An intelligent +2 dancing longsword that sings in battle, its song heartening its wielder and her allies.",
    "source": "Song and Silence — Chapter 3, pp. 54–58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-breaker-bottle",
    "name": "Breaker Bottle",
    "category": "wondrous-slotless",
    "cost": "150 gp",
    "summary": "A bottle that, when smashed, releases a substance that loosens bonds and helps free a held prisoner.",
    "source": "Song and Silence — Chapter 3, pp. 54–58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-eyes-of-dark-aura",
    "name": "Eyes of Dark Aura",
    "category": "wondrous-face",
    "cost": "2,000 gp",
    "summary": "Glasses that let the wearer see the dark auras clinging to evil creatures and objects.",
    "source": "Song and Silence — Chapter 3, pp. 54–58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-horn-of-triumph",
    "name": "Horn of Triumph",
    "category": "wondrous-slotless",
    "cost": "35,380 gp",
    "summary": "A horn whose blast heartens allies in battle, strengthening their resolve against fear.",
    "source": "Song and Silence — Chapter 3, pp. 54–58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-nondescript-box",
    "name": "Nondescript Box",
    "category": "wondrous-slotless",
    "cost": "4,552 gp",
    "summary": "A box so utterly ordinary that searchers overlook both it and its contents.",
    "source": "Song and Silence — Chapter 3, pp. 54–58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-safe-box",
    "name": "Safe Box",
    "category": "wondrous-slotless",
    "cost": "77,500 gp",
    "summary": "A small strongbox protected by powerful wards, nearly impossible to open without its word of command.",
    "source": "Song and Silence — Chapter 3, pp. 54–58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-thief-catcher-hungry-book",
    "name": "Thief Catcher (Hungry Book)",
    "category": "wondrous-slotless",
    "cost": "32,250 gp",
    "summary": "A book-shaped trap that snaps shut on the hand of anyone who opens it without leave, holding the would-be thief fast.",
    "source": "Song and Silence — Chapter 3, pp. 54–58",
    "sourceUrl": "",
    "ruleset": "core"
  },
];

export const SNS_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "sns-grapple-firing-crossbow",
    "name": "Grapple-Firing Crossbow",
    "category": "weapon",
    "cost": "70 gp",
    "weight": "12 lb.",
    "notes": "A heavy crossbow fitted to fire grapple bolts tipped with climbing hooks.",
    "source": "Song and Silence — Chapter 3, Table 3-1, pp. 51–52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-grapple-bolts-10",
    "name": "Grapple Bolts (10)",
    "category": "ammunition",
    "cost": "200 gp",
    "weight": "8 lb.",
    "notes": "Ten bolts fitted with grappling heads, made for a grapple-firing crossbow.",
    "source": "Song and Silence — Chapter 3, Table 3-1, pp. 51–52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-garrote-cord",
    "name": "Garrote, Cord",
    "category": "weapon",
    "cost": "1 sp",
    "weight": "1/10 lb.",
    "notes": "A simple cord garrote.",
    "source": "Song and Silence — Chapter 3, Table 3-1, pp. 51–52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-garrote-locking",
    "name": "Garrote, Locking",
    "category": "weapon",
    "cost": "100 gp",
    "weight": "3 lb.",
    "notes": "A garrote with a locking ratchet that holds its grip once tightened.",
    "source": "Song and Silence — Chapter 3, Table 3-1, pp. 51–52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-garrote-wire",
    "name": "Garrote, Wire",
    "category": "weapon",
    "cost": "10 gp",
    "weight": "1 lb.",
    "notes": "A wire garrote.",
    "source": "Song and Silence — Chapter 3, Table 3-1, pp. 51–52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-weighted-sleeve",
    "name": "Weighted Sleeve",
    "category": "weapon",
    "cost": "5 sp",
    "weight": "2 1/2 lb.",
    "notes": "A sleeve weighted with shot, usable as an improvised striking weapon. The price buys the weights only; the book lists Small and Medium sizes at this same price and weight, differing only in damage.",
    "source": "Song and Silence — Chapter 3, Table 3-1, pp. 51–52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-covered-hand-crossbow",
    "name": "Covered Hand Crossbow",
    "category": "weapon",
    "cost": "125 gp",
    "weight": "4 lb.",
    "notes": "A hand crossbow built under a concealing cover so that it does not read as a weapon.",
    "source": "Song and Silence — Chapter 3, Table 3-1, pp. 51–52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-automated-footpad",
    "name": "Automated Footpad",
    "category": "tool",
    "cost": "30 gp",
    "weight": "1/2 lb.",
    "notes": "A small clockwork device that performs a simple repeated task, such as holding a lever or turning a key, freeing the thief's hands.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-double-sided-clothes",
    "name": "Double-Sided Clothes",
    "category": "gear",
    "cost": "50 gp",
    "weight": "8 lb.",
    "notes": "A reversible outfit, giving the wearer two different looks in one set of clothes.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-expandable-pole",
    "name": "Expandable Pole",
    "category": "tool",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "A telescoping pole that extends to 10 feet for probing ahead.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-gorget-plain",
    "name": "Gorget (Plain)",
    "category": "gear",
    "cost": "10 gp",
    "weight": "5 lb.",
    "notes": "A steel throat guard that protects the neck against garrotes and cutting attacks.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-gorget-spiked",
    "name": "Gorget (Spiked)",
    "category": "gear",
    "cost": "20 gp",
    "weight": "5 lb.",
    "notes": "A gorget studded with spikes that injure anyone who grabs the wearer's throat.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-leather-collar-plain",
    "name": "Leather Collar (Plain)",
    "category": "gear",
    "cost": "2 gp",
    "weight": "2-3 lb.",
    "notes": "A thick leather collar protecting the wearer's neck.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-leather-collar-decorated",
    "name": "Leather Collar (Decorated)",
    "category": "gear",
    "cost": "5 gp",
    "weight": "2-3 lb.",
    "notes": "A decorated thick leather collar protecting the wearer's neck.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-longreach-tongs",
    "name": "Longreach Tongs",
    "category": "tool",
    "cost": "20 gp",
    "weight": "5 lb.",
    "notes": "Long tongs for handling or retrieving items at a distance without touching them.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-long-spoon-thieves-tools",
    "name": "Long-Spoon Thieves' Tools",
    "category": "tool",
    "cost": "70 gp",
    "weight": "3 lb.",
    "notes": "Thieves' tools fitted with extended handles, letting the user work a lock or trap from farther away.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-mechanical-burglar-type-i",
    "name": "Mechanical Burglar (Type I)",
    "category": "tool",
    "cost": "2,000 gp",
    "weight": "3 lb.",
    "notes": "A clockwork device that attempts to pick a lock on its own; the Type I is the least capable model.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-mechanical-burglar-type-ii",
    "name": "Mechanical Burglar (Type II)",
    "category": "tool",
    "cost": "2,500 gp",
    "weight": "3 lb.",
    "notes": "A clockwork device that attempts to pick a lock on its own, more capable than the Type I.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-mechanical-burglar-type-iii",
    "name": "Mechanical Burglar (Type III)",
    "category": "tool",
    "cost": "3,000 gp",
    "weight": "3 lb.",
    "notes": "A clockwork device that attempts to pick a lock on its own, more capable than the Type II.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-mechanical-burglar-type-iv",
    "name": "Mechanical Burglar (Type IV)",
    "category": "tool",
    "cost": "4,000 gp",
    "weight": "3 lb.",
    "notes": "A clockwork device that attempts to pick a lock on its own; the Type IV is the most capable model.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-reverse-lock",
    "name": "Reverse Lock",
    "category": "tool",
    "cost": "100 gp",
    "weight": "1 lb.",
    "notes": "A portable lock that can be fitted to a door to bar it from the far side, delaying pursuit.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sns-waterproofing",
    "name": "Waterproofing",
    "category": "alchemical gear",
    "cost": "30 gp",
    "weight": "1 lb.",
    "notes": "A wax-and-oil compound that renders one treated item waterproof.",
    "source": "Song and Silence — Chapter 3, Table 3-2, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
];
