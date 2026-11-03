/**
 * Omni sweep Wave 2 (2026-11-02): Masters of the Wild (3.0) —
 * Chapter 3: Tools of the Trade (Table 3-1 weapons, Table 3-2
 * magic items, descriptions pp. 27-33). Skipped as already
 * cataloged: the ankus and blowgun needles (Goods and Gear, same
 * prices), the wilding clasp (Magic Item Compendium, 4,000 gp),
 * and the hunting weapon ability (Magic Item Compendium, +1
 * bonus). This chapter reprints two Defenders of the Faith items
 * word for word — the aquatic armor abilities and equerry's
 * armor, at identical prices; they are built once, in the
 * Defenders of the Faith pack. Price conflicts skipped (see the
 * report): the blowgun (this book 1 gp; Goods and Gear's record
 * 2 gp) and the greater blowgun and its darts (reprinted in
 * Complete Warrior under inverted names at 15 gp and 1 gp). The
 * infusion price table (Table 3-3) prices a per-spell item type
 * by spell level rather than listing unique items; it is
 * transcribed in the report rather than built as records.
 * Chapter 4's animals are companions found or befriended through
 * class features, not priced goods, and no animal price list
 * appears anywhere in the book.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const MOTW_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "motw-ease",
    "name": "Ease",
    "category": "armor-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor special ability: the armor fits so well that its armor check penalty is eased and it can be donned and removed quickly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-wild",
    "name": "Wild",
    "category": "armor-special-ability",
    "cost": "+3 bonus",
    "summary": "Armor special ability: the armor's protection carries over when the wearer wild shapes, instead of being lost as the armor melds into the new form.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-exhausting",
    "name": "Exhausting",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon special ability: a creature struck by the weapon must save or be fatigued by the blow; a critical hit can leave the victim exhausted.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-opposable",
    "name": "Opposable",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon special ability: the weapon's grip can be used by creatures without ordinary hands, such as an animal companion wielding it in a paw or tail.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-arrow-of-cure-light-wounds",
    "name": "Arrow of Cure Light Wounds",
    "category": "ammunition",
    "cost": "107 gp",
    "summary": "A magic arrow that heals instead of harms, delivering a cure light wounds effect to the creature it strikes and dealing no damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-arrow-of-cure-moderate-wounds",
    "name": "Arrow of Cure Moderate Wounds",
    "category": "ammunition",
    "cost": "607 gp",
    "summary": "A magic arrow that heals instead of harms, delivering a cure moderate wounds effect to the creature it strikes and dealing no damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-arrow-of-cure-serious-wounds",
    "name": "Arrow of Cure Serious Wounds",
    "category": "ammunition",
    "cost": "1,507 gp",
    "summary": "A magic arrow that heals instead of harms, delivering a cure serious wounds effect to the creature it strikes and dealing no damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-arrow-of-cure-critical-wounds",
    "name": "Arrow of Cure Critical Wounds",
    "category": "ammunition",
    "cost": "2,807 gp",
    "summary": "A magic arrow that heals instead of harms, delivering a cure critical wounds effect to the creature it strikes and dealing no damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-berserker-blade-1",
    "name": "Berserker Blade (+1)",
    "category": "weapon",
    "cost": "6,335 gp",
    "summary": "A +1 axe that drives its wielder into a berserker's fighting fury in battle.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-berserker-blade-2",
    "name": "Berserker Blade (+2)",
    "category": "weapon",
    "cost": "15,335 gp",
    "summary": "A +2 axe that drives its wielder into a berserker's fighting fury in battle.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-gray-ironwood-suit",
    "name": "Gray Ironwood Suit",
    "category": "armor",
    "cost": "137,650 gp",
    "summary": "A suit of plate armor made from gray-finished ironwood instead of steel, so that a druid can wear it without breaking her oath against metal armor.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-potion-of-animal-logic",
    "name": "Potion of Animal Logic",
    "category": "potion",
    "cost": "150 gp",
    "summary": "A potion that sharpens the drinker's instincts to an animal's keenness for a time.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-potion-of-natural-clarity",
    "name": "Potion of Natural Clarity",
    "category": "potion",
    "cost": "150 gp",
    "summary": "A potion that clears the drinker's mind, steadying her thoughts and senses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-potion-of-unerring-direction",
    "name": "Potion of Unerring Direction",
    "category": "potion",
    "cost": "150 gp",
    "summary": "A potion that lets the drinker unerringly sense the direction of a chosen destination.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-boots-of-endurance",
    "name": "Boots of Endurance",
    "category": "wondrous-feet",
    "cost": "16,000 gp",
    "summary": "Boots that let the wearer keep traveling without tiring, marching and forcing the pace far beyond ordinary limits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-collar-of-cleverness-1-trick",
    "name": "Collar of Cleverness (1 Trick)",
    "category": "wondrous-slotless",
    "cost": "700 gp",
    "summary": "A collar that makes the animal wearing it cleverer, letting it learn and remember 1 additional trick.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-collar-of-cleverness-2-tricks",
    "name": "Collar of Cleverness (2 Tricks)",
    "category": "wondrous-slotless",
    "cost": "1,400 gp",
    "summary": "A collar that makes the animal wearing it cleverer, letting it learn and remember 2 additional tricks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-collar-of-cleverness-3-tricks",
    "name": "Collar of Cleverness (3 Tricks)",
    "category": "wondrous-slotless",
    "cost": "2,100 gp",
    "summary": "A collar that makes the animal wearing it cleverer, letting it learn and remember 3 additional tricks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-collar-of-resistance-1",
    "name": "Collar of Resistance +1",
    "category": "wondrous-slotless",
    "cost": "490 gp",
    "summary": "A collar granting the animal wearing it a +1 resistance bonus on all saving throws.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-collar-of-resistance-2",
    "name": "Collar of Resistance +2",
    "category": "wondrous-slotless",
    "cost": "1,960 gp",
    "summary": "A collar granting the animal wearing it a +2 resistance bonus on all saving throws.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-collar-of-resistance-3",
    "name": "Collar of Resistance +3",
    "category": "wondrous-slotless",
    "cost": "4,410 gp",
    "summary": "A collar granting the animal wearing it a +3 resistance bonus on all saving throws.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-collar-of-resistance-4",
    "name": "Collar of Resistance +4",
    "category": "wondrous-slotless",
    "cost": "7,840 gp",
    "summary": "A collar granting the animal wearing it a +4 resistance bonus on all saving throws.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-collar-of-resistance-5",
    "name": "Collar of Resistance +5",
    "category": "wondrous-slotless",
    "cost": "12,250 gp",
    "summary": "A collar granting the animal wearing it a +5 resistance bonus on all saving throws.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-goggles-of-following",
    "name": "Goggles of Following",
    "category": "wondrous-face",
    "cost": "2,000 gp",
    "summary": "Goggles that sharpen the wearer's eye for sign, aiding her in following tracks and trails.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-helm-of-bonding",
    "name": "Helm of Bonding",
    "category": "wondrous-head",
    "cost": "7,200 gp",
    "summary": "A helm that strengthens the link between the wearer and her animal companion, aiding their cooperation.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-necklace-of-favored-enemy-detection",
    "name": "Necklace of Favored Enemy Detection",
    "category": "wondrous-throat",
    "cost": "34,000 gp",
    "summary": "A necklace that alerts a ranger when one of her favored enemies comes near.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-0-level",
    "name": "Standing Stone (0-Level)",
    "category": "wondrous-slotless",
    "cost": "10,676 gp",
    "summary": "A carved standing stone imbued with a 0-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-1st-level",
    "name": "Standing Stone (1st-Level)",
    "category": "wondrous-slotless",
    "cost": "10,850 gp",
    "summary": "A carved standing stone imbued with a 1st-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-2nd-level",
    "name": "Standing Stone (2nd-Level)",
    "category": "wondrous-slotless",
    "cost": "12,600 gp",
    "summary": "A carved standing stone imbued with a 2nd-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-3rd-level",
    "name": "Standing Stone (3rd-Level)",
    "category": "wondrous-slotless",
    "cost": "15,750 gp",
    "summary": "A carved standing stone imbued with a 3rd-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-4th-level",
    "name": "Standing Stone (4th-Level)",
    "category": "wondrous-slotless",
    "cost": "20,300 gp",
    "summary": "A carved standing stone imbued with a 4th-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-5th-level",
    "name": "Standing Stone (5th-Level)",
    "category": "wondrous-slotless",
    "cost": "26,250 gp",
    "summary": "A carved standing stone imbued with a 5th-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-6th-level",
    "name": "Standing Stone (6th-Level)",
    "category": "wondrous-slotless",
    "cost": "33,600 gp",
    "summary": "A carved standing stone imbued with a 6th-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-7th-level",
    "name": "Standing Stone (7th-Level)",
    "category": "wondrous-slotless",
    "cost": "42,350 gp",
    "summary": "A carved standing stone imbued with a 7th-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-8th-level",
    "name": "Standing Stone (8th-Level)",
    "category": "wondrous-slotless",
    "cost": "49,700 gp",
    "summary": "A carved standing stone imbued with an 8th-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-standing-stone-9th-level",
    "name": "Standing Stone (9th-Level)",
    "category": "wondrous-slotless",
    "cost": "57,750 gp",
    "summary": "A carved standing stone imbued with a 9th-level druid spell whose effect it sustains in the area around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-torc-of-animal-speech",
    "name": "Torc of Animal Speech",
    "category": "wondrous-throat",
    "cost": "12,000 gp",
    "summary": "A torc that lets the wearer speak with animals at will.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-2, p. 28",
    "sourceUrl": "",
    "ruleset": "core"
  },
];

export const MOTW_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "motw-winch-crossbow",
    "name": "Winch Crossbow",
    "category": "weapon",
    "cost": "75 gp",
    "weight": "10 lb.",
    "notes": "A crossbow fitted with a winch for spanning it and for hauling on lines attached to its bolts.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-1, p. 26",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-winch-crossbow-bolts-10",
    "name": "Winch Crossbow Bolts (10)",
    "category": "ammunition",
    "cost": "5 gp",
    "weight": "1/2 lb.",
    "notes": "Ten heavy bolts made for a winch crossbow.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-1, p. 26",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-nagaika",
    "name": "Nagaika",
    "category": "weapon",
    "cost": "25 gp",
    "weight": "4 lb.",
    "notes": "A stout braided whip, favored by steppe riders, that deals lethal damage and can be used to trip or disarm.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-1, p. 26",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-mighty-nagaika-1",
    "name": "Mighty Nagaika (+1 Str Bonus)",
    "category": "weapon",
    "cost": "225 gp",
    "weight": "5 lb.",
    "notes": "A nagaika built for a stronger wielder, letting her add up to +1 of her Strength bonus to its damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-1, p. 26",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-mighty-nagaika-2",
    "name": "Mighty Nagaika (+2 Str Bonus)",
    "category": "weapon",
    "cost": "325 gp",
    "weight": "6 lb.",
    "notes": "A nagaika built for a stronger wielder, letting her add up to +2 of her Strength bonus to its damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-1, p. 26",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-mighty-nagaika-3",
    "name": "Mighty Nagaika (+3 Str Bonus)",
    "category": "weapon",
    "cost": "425 gp",
    "weight": "7 lb.",
    "notes": "A nagaika built for a stronger wielder, letting her add up to +3 of her Strength bonus to its damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-1, p. 26",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-mighty-nagaika-4",
    "name": "Mighty Nagaika (+4 Str Bonus)",
    "category": "weapon",
    "cost": "525 gp",
    "weight": "8 lb.",
    "notes": "A nagaika built for a stronger wielder, letting her add up to +4 of her Strength bonus to its damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-1, p. 26",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "motw-caber",
    "name": "Caber",
    "category": "weapon",
    "cost": "10 gp",
    "weight": "100 lb.",
    "notes": "A massive tapered pole thrown end over end; a solid hit can knock creatures sprawling.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade, Table 3-1, p. 26",
    "sourceUrl": "",
    "ruleset": "core"
  },
];
