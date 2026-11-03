/**
 * Omni sweep wave 2 (2026-11-02): Noble Steeds: The d20 Guide to
 * Horses & Mounts (Avalanche Press). Built: Table 6-1's purchase
 * prices — fifteen breeds (horses, ponies, camel, elephant, and
 * the legendary aughisky, gryphon and pegasus) in typical,
 * purebred and exceptional grades, 41 animal records; and
 * Chapter 7's tack table entries not already in the catalog
 * (plate barding, camel tack, caparison, racing chariot, war
 * saddle, Pegasus saddle, stirrups, spurs) plus the chapter's
 * named magic items for steeds. Already in the catalog at the
 * same prices and so skipped: leather, chainmail and splint
 * barding, riding saddle, and bit and bridle (from Goods and
 * Gear). NOT built: Table 7-3's enchanted-barding enhancement
 * adders and price multipliers (random-generation pricing rules,
 * not standalone items); the flaming horseshoes entry (10,000 gp)
 * whose name and opening lines are lost in this extraction's
 * two-column interleave; and the Iron Horse / Terra Cotta Steed
 * constructs, which carry creation costs, not market prices.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const STEED_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "caparison-of-the-sun",
    "name": "Caparison of the Sun",
    "category": "wondrous-slotless",
    "cost": "3,000 gp",
    "summary": "A magnificent golden caparison that fits any steed without hampering wing movement. While it is worn, both steed and rider gain a +2 bonus to Charisma from its beauty, and its markings alter automatically to display the rider's house colors and heraldry (or plain liquid-looking gold if the rider has none). Caster level 10th.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: New Magic Items, pp. 61–63",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "earring-of-the-keen-whisper",
    "name": "Earring of the Keen Whisper",
    "category": "wondrous-slotless",
    "cost": "6,000 gp",
    "summary": "A cuff earring, first made by a Mongol tribe, that snaps gently onto a horse's ear. While the horse wears it, the horse can understand normal speech, making commands far easier to give even without tack; it grants no extra intelligence. Caster level 6th.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: New Magic Items, pp. 61–63",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "golden-bridle",
    "name": "Golden Bridle",
    "category": "wondrous-slotless",
    "cost": "5,000 gp",
    "summary": "A magical bridle that tames even the most wild and untamable steed once placed on its head: the beast becomes passive and gentle and will bear a rider, but loses its ability to fight and cannot serve as a war-steed. When the bridle is removed the animal becomes completely wild again. Caster level 10th.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: New Magic Items, pp. 61–63",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "golden-cuffs",
    "name": "Golden Cuffs",
    "category": "wondrous-slotless",
    "cost": "15,000 gp",
    "summary": "A set of four golden cuffs placed around a horse's hooves; on a command word they merge with the hooves as golden stockings rising to the knees. Any horse wearing them can complete a journey of any length in only a single day's ride. Another command word removes them. Caster level 15th.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: New Magic Items, pp. 61–63",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "horseshoes-of-solid-ground",
    "name": "Horseshoes of Solid Ground",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "Horseshoes shod onto a horse or other hoofed steed; their magic lasts one year and a day. While worn, no shifting terrain affects the steed, which can run fluidly across the most treacherous ground, including bodies of water, as if it were solid land. Caster level 7th.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: New Magic Items, pp. 61–63",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mane-and-tail-ribbons",
    "name": "Mane and Tail Ribbons",
    "category": "wondrous-slotless",
    "cost": "15,000 gp",
    "summary": "Beautiful ribbons sold in a box of 20 assorted, each usable once like a charge: woven into a steed's mane or tail, a ribbon grants its benefit for 24 hours, then fades and is spent. Ribbon types: Speed (+10 ft. base speed), Balance (+3 magical bonus on Ride checks), Protection (+1 AC), Assault (+2 magical bonus on attack and damage rolls), and Masking (steed and rider appear as a bland common horse and peasant, gear hidden). Only one ribbon may be braided into a steed at a time. Caster level 12th.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: New Magic Items, pp. 61–63",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "saddle-of-occum",
    "name": "Saddle of Occum",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A saddle that makes the horse wearing it almost unnoticeable to anyone but its owner: unless the horse is obviously in use (being ridden), viewers and animals ignore it completely, and even in use no one marks or remembers its coloration, breed or other characteristics. Caster level 10th.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: New Magic Items, pp. 61–63",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const STEED_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "arabian-typical",
    "name": "Arabian (Typical)",
    "category": "animal",
    "cost": "350 gp",
    "weight": "—",
    "notes": "A typical specimen of the Arabian, a light horse breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "arabian-purebred",
    "name": "Arabian (Purebred)",
    "category": "animal",
    "cost": "500 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Arabian, a light horse breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "arabian-exceptional",
    "name": "Arabian (Exceptional)",
    "category": "animal",
    "cost": "1,000 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Arabian, a light horse breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ariegeois-typical",
    "name": "Ariegeois (Typical)",
    "category": "animal",
    "cost": "35 gp",
    "weight": "—",
    "notes": "A typical specimen of the Ariegeois, a pony breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ariegeois-purebred",
    "name": "Ariegeois (Purebred)",
    "category": "animal",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Ariegeois, a pony breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ariegeois-exceptional",
    "name": "Ariegeois (Exceptional)",
    "category": "animal",
    "cost": "200 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Ariegeois, a pony breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "barb-typical",
    "name": "Barb (Typical)",
    "category": "animal",
    "cost": "75 gp",
    "weight": "—",
    "notes": "A typical specimen of the Barb, a light horse breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "barb-purebred",
    "name": "Barb (Purebred)",
    "category": "animal",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Barb, a light horse breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "barb-exceptional",
    "name": "Barb (Exceptional)",
    "category": "animal",
    "cost": "300 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Barb, a light horse breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "brabant-typical",
    "name": "Brabant (Typical)",
    "category": "animal",
    "cost": "400 gp",
    "weight": "—",
    "notes": "A typical specimen of the Brabant, a heavy horse breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "brabant-purebred",
    "name": "Brabant (Purebred)",
    "category": "animal",
    "cost": "1,000 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Brabant, a heavy horse breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "brabant-exceptional",
    "name": "Brabant (Exceptional)",
    "category": "animal",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Brabant, a heavy horse breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "breton-typical",
    "name": "Breton (Typical)",
    "category": "animal",
    "cost": "300 gp",
    "weight": "—",
    "notes": "A typical specimen of the Breton, a heavy horse breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "breton-purebred",
    "name": "Breton (Purebred)",
    "category": "animal",
    "cost": "800 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Breton, a heavy horse breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "breton-exceptional",
    "name": "Breton (Exceptional)",
    "category": "animal",
    "cost": "1,000 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Breton, a heavy horse breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "camel-typical",
    "name": "Camel (Typical)",
    "category": "animal",
    "cost": "40 gp",
    "weight": "—",
    "notes": "A typical specimen of the Camel, a beast of burden breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "camel-purebred",
    "name": "Camel (Purebred)",
    "category": "animal",
    "cost": "80 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Camel, a beast of burden breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "camel-exceptional",
    "name": "Camel (Exceptional)",
    "category": "animal",
    "cost": "120 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Camel, a beast of burden breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elephant-typical",
    "name": "Elephant (Typical)",
    "category": "animal",
    "cost": "8,000 gp",
    "weight": "—",
    "notes": "A typical specimen of the Elephant, a beast of burden breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elephant-exceptional",
    "name": "Elephant (Exceptional)",
    "category": "animal",
    "cost": "12,000 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Elephant, a beast of burden breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "norwegian-fjord-typical",
    "name": "Norwegian Fjord (Typical)",
    "category": "animal",
    "cost": "40 gp",
    "weight": "—",
    "notes": "A typical specimen of the Norwegian Fjord, a pony breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "norwegian-fjord-purebred",
    "name": "Norwegian Fjord (Purebred)",
    "category": "animal",
    "cost": "60 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Norwegian Fjord, a pony breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "norwegian-fjord-exceptional",
    "name": "Norwegian Fjord (Exceptional)",
    "category": "animal",
    "cost": "200 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Norwegian Fjord, a pony breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "percheron-typical",
    "name": "Percheron (Typical)",
    "category": "animal",
    "cost": "300 gp",
    "weight": "—",
    "notes": "A typical specimen of the Percheron, a heavy horse breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "percheron-purebred",
    "name": "Percheron (Purebred)",
    "category": "animal",
    "cost": "850 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Percheron, a heavy horse breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "percheron-exceptional",
    "name": "Percheron (Exceptional)",
    "category": "animal",
    "cost": "1,200 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Percheron, a heavy horse breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shetland-typical",
    "name": "Shetland (Typical)",
    "category": "animal",
    "cost": "30 gp",
    "weight": "—",
    "notes": "A typical specimen of the Shetland, a pony breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shetland-purebred",
    "name": "Shetland (Purebred)",
    "category": "animal",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Shetland, a pony breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shetland-exceptional",
    "name": "Shetland (Exceptional)",
    "category": "animal",
    "cost": "150 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Shetland, a pony breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shire-typical",
    "name": "Shire (Typical)",
    "category": "animal",
    "cost": "450 gp",
    "weight": "—",
    "notes": "A typical specimen of the Shire, a heavy horse breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shire-purebred",
    "name": "Shire (Purebred)",
    "category": "animal",
    "cost": "1,200 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Shire, a heavy horse breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shire-exceptional",
    "name": "Shire (Exceptional)",
    "category": "animal",
    "cost": "1,800 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Shire, a heavy horse breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spanish-andalusian-typical",
    "name": "Spanish Andalusian (Typical)",
    "category": "animal",
    "cost": "525 gp",
    "weight": "—",
    "notes": "A typical specimen of the Spanish Andalusian, a light horse breed, at the breed's average purchase price from Table 6-1.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spanish-andalusian-purebred",
    "name": "Spanish Andalusian (Purebred)",
    "category": "animal",
    "cost": "1,400 gp",
    "weight": "—",
    "notes": "A purebred specimen of the Spanish Andalusian, a light horse breed, at the breed's average purchase price from Table 6-1. A purebred gains +2 Charisma for its beauty and perfect structure over a typical specimen.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spanish-andalusian-exceptional",
    "name": "Spanish Andalusian (Exceptional)",
    "category": "animal",
    "cost": "1,800 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Spanish Andalusian, a light horse breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "aughisky-typical",
    "name": "Aughisky (Typical)",
    "category": "animal",
    "cost": "3,000 gp",
    "weight": "—",
    "notes": "A typical specimen of the Aughisky, a legendary steed breed, at the breed's average purchase price from Table 6-1. This creature cannot be purchased at market; the listed price is the amount for which it can be sold.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "aughisky-exceptional",
    "name": "Aughisky (Exceptional)",
    "category": "animal",
    "cost": "10,000 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Aughisky, a legendary steed breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points. This creature cannot be purchased at market; the listed price is the amount for which it can be sold.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gryphon-typical",
    "name": "Gryphon (Typical)",
    "category": "animal",
    "cost": "9,000 gp",
    "weight": "—",
    "notes": "A typical specimen of the Gryphon, a legendary steed breed, at the breed's average purchase price from Table 6-1. This creature cannot be purchased at market; the listed price is the amount for which it can be sold.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gryphon-exceptional",
    "name": "Gryphon (Exceptional)",
    "category": "animal",
    "cost": "25,000 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Gryphon, a legendary steed breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points. This creature cannot be purchased at market; the listed price is the amount for which it can be sold.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pegasus-typical",
    "name": "Pegasus (Typical)",
    "category": "animal",
    "cost": "4,000 gp",
    "weight": "—",
    "notes": "A typical specimen of the Pegasus, a legendary steed breed, at the breed's average purchase price from Table 6-1. This creature cannot be purchased at market; the listed price is the amount for which it can be sold.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pegasus-exceptional",
    "name": "Pegasus (Exceptional)",
    "category": "animal",
    "cost": "12,000 gp",
    "weight": "—",
    "notes": "A exceptional specimen of the Pegasus, a legendary steed breed, at the breed's average purchase price from Table 6-1. An exceptional steed gains the purebred's +2 Charisma and rolls d10 instead of d8 for Hit Points. This creature cannot be purchased at market; the listed price is the amount for which it can be sold.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Table 6-1: Purchase Prices, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "barding-plate-mail",
    "name": "Barding, Plate Mail",
    "category": "armor",
    "cost": "2,500 gp",
    "weight": "200 lb.",
    "notes": "Full plate barding for a steed: +7 armor bonus, maximum Dexterity bonus +0, and the steed's speed is reduced (60 ft. to 40 ft.); a mount in plate barding may only triple its speed when running instead of quadrupling it. Flying creatures cannot wear barding.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: Tack and Barding, p. 60",
    "sourceUrl": "",
    "ruleset": "core",
    "acBonus": 7
  },
  {
    "id": "camel-tack",
    "name": "Camel Tack",
    "category": "gear",
    "cost": "15 gp",
    "weight": "16 lb.",
    "notes": "A rassan: the harness, reins, saddle and strapping made for a camel's dromedary back, using a nose peg (khezam) and a single rein instead of a horse's bit and bridle.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: Tack and Barding, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "caparison-mundane",
    "name": "Caparison",
    "category": "gear",
    "cost": "15 gp",
    "weight": "7 lb.",
    "notes": "A large ornate cloth covering for a knight's horse, worn beneath the saddle and displaying the rider's heraldic patterns for identification on the tournament field and in battle.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: Tack and Barding, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "chariot-racing",
    "name": "Chariot, Racing",
    "category": "gear",
    "cost": "30 gp",
    "weight": "75 lb.",
    "notes": "A small, light Roman-style racing chariot made of wood, built to be as light as possible; the charioteer basically balances on the axle as he drives.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: Tack and Barding, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "saddle-war",
    "name": "Saddle, War",
    "category": "gear",
    "cost": "25 gp",
    "weight": "35 lb.",
    "notes": "A war saddle built to keep an armored rider seated against the impact of a lance charge and the press of mounted combat.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: Tack and Barding, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "saddle-pegasus",
    "name": "Saddle, Pegasus",
    "category": "gear",
    "cost": "60 gp",
    "weight": "20 lb.",
    "notes": "A saddle shaped for winged mounts so it does not impede the wings at the shoulder, with a strap that buckles across the rider's upper thighs to keep him safe through aerial maneuvers. It grants a +2 circumstance bonus on Ride checks but imposes a -2 penalty on the rider's attack rolls. Made to fit gryphons, pegasi and other winged creatures.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: Tack and Barding, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stirrups",
    "name": "Stirrups",
    "category": "gear",
    "cost": "2 gp",
    "weight": "2 lb.",
    "notes": "A pair of riding stirrups, essential for balance atop a horse when swinging a sword or thrusting a lance, and for mounting safely.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: Tack and Barding, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spurs",
    "name": "Spurs",
    "category": "gear",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "A pair of spurs with long necks and small sharp rowels that reach the horse's flanks when the rider kicks his heels; also a status symbol of knighthood.",
    "source": "Noble Steeds: The d20 Guide to Horses & Mounts — Chapter 7: Tack and Barding, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
