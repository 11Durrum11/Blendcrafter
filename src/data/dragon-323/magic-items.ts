// Dragon Magazine #323 (September 2004) — magic items.
// Six items stage, all from "The Magic Shop: Treasures of the
// Dwarven Holds" by Richard Farrese (pp. 86–89). Every price
// and caster level was verified against the page images
// (magazine pp. 87–89), which correct the OCR layer in four
// places: Gauntlets of Bashing are CL 9th (OCR 12th) and
// 45,800 gp (OCR 45,300); Mug of Clear-Headedness is 38,800 gp
// (OCR read 33,800); Ring of Spelunking is 37,000 gp (OCR read
// 47,000); Statuette of the All-Father is 2,000 gp (the OCR
// drops its price line entirely). The Ring of Spelunking's
// construction line genuinely reads Craft Wondrous Item as
// printed, and stages as printed.
//
// Each summary carries the printed slot, aura, caster level,
// construction prerequisites, and weight, per the house style.
//
// Summaries are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { MagicItemDefinition } from "@/engine/types";

const DM323 = "Dragon Magazine #323 — The Magic Shop: Treasures of the Dwarven Holds";
const URL323 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine323_djvu.txt";

export const DRAGON_323_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "armor-of-thror",
    name: "Armor of Thror",
    category: "armor",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "60,750 gp",
    summary:
      "A +2 heavy fortification half-plate forged long ago for Thror, then-king of the dwarves: when an enemy's melee attack would normally result in a critical hit or sneak attack, the armor retaliates, striking the attacking foe with a bolt of energy dealing 8d6 points of electricity damage (Reflex DC 14 half). Strong abjuration; CL 13th; Craft Magic Arms and Armor, lightning bolt; 50 lb.",
  },
  {
    id: "breastplate-of-hardiness",
    name: "Breastplate of Hardiness",
    category: "armor",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "43,350 gp",
    summary:
      "A +3 fire resistance breastplate: the wearer gains temporary hit points equal to his Constitution score, and any damage dealt to the wearer is subtracted from this temporary hit point pool first; the temporary hit points regenerate slowly over time (1 per hour), and the temporary hit points vanish should the wearer remove the armor. Strong abjuration; CL 9th; Craft Magic Arms and Armor, bear's endurance, resist energy; 30 lb.",
  },
  {
    id: "gauntlets-of-bashing",
    name: "Gauntlets of Bashing",
    category: "wondrous",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "45,800 gp",
    summary:
      "Three times per day as a free action, the wearer empowers his unarmed attacks so that they function as though he were a creature with the powerful fists ability — all his unarmed attacks during the following round deal 2d6 points of bludgeoning damage. Also, as a free action, the wearer can slam back any opponent that he has just damaged with this ability, as though he had bull rushed that opponent: for purposes of this bull rush attack, the wearer's size is considered Large and his effective Strength score equals 25. Moderate transmutation; CL 9th; Craft Wondrous Item, telekinesis; 4 lb.",
  },
  {
    id: "mug-of-clear-headedness",
    name: "Mug of Clear-Headedness",
    category: "wondrous",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "38,800 gp",
    summary:
      "This mug has an enchantment that ensures that all liquids poured into it are as affected by purify food and drink. Once per day, drinking the contents of the mug cures poisons and toxins as neutralize poison. Also, three times per day, someone drinking a full mug of liquid from it benefits from owl's wisdom. Moderate transmutation; CL 7th; Craft Wondrous Item, neutralize poison, owl's wisdom, purify food and drink; 1 lb.",
  },
  {
    id: "ring-of-spelunking",
    name: "Ring of Spelunking",
    category: "ring",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "37,000 gp",
    summary:
      "This illuminating ring is often given to young dwarven explorers: it grants the wearer a +10 competence bonus on Knowledge (dungeoneering) checks and doubles the range of the wearer's darkvision (if the wearer does not possess the darkvision ability, then the ring does not bestow any benefit), and three times per day the wearer can shrink in size as if affected by a reduce person spell. Faint transmutation; CL 3rd; Craft Wondrous Item (as printed in the magazine; not Forge Ring), darkvision, reduce person; weight —.",
  },
  {
    id: "statuette-of-the-all-father",
    name: "Statuette of the All-Father",
    category: "wondrous",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "2,000 gp",
    summary:
      "Once per day, a cleric of lawful good, neutral good, or lawful neutral alignment preparing spells may prepare Strength domain spells as if they were domain spells, and the cleric gains the Strength domain's granted power for that day. Faint abjuration; CL 3rd; Craft Wondrous Item, bull's strength; 5 lb.",
  },
];
