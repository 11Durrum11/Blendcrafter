/**
 * Omni sweep Wave 2 (2026-11-02): Sword and Fist (3.0) —
 * Chapter 5: Tools of the Trade. Nearly all of Table 5-1's exotic
 * weapons were already cataloged through Arms and Equipment Guide
 * at identical prices (including the manti and the mighty whips);
 * only the whip dagger family is new. The tumbling bolt is a
 * price conflict and is skipped: Arms and Equipment Guide's
 * catalog record says 5 gp, this book prints 50 gp. All seven of
 * the chapter's weapon special abilities (arrow catching,
 * dancing, ki focus, merciful, seeking, sure striking, vicious)
 * are already cataloged from Arms and Equipment Guide at the same
 * bonus values. Also skipped as already cataloged at the same
 * price: shatterspike (SRD), ki straps (Magic Item Compendium),
 * the amulet of mighty fists line (SRD), and the flaming fists
 * potion (Magic Item Compendium's elixir of flaming fists,
 * 300 gp). The ring's name follows the book's own appended
 * errata ("ring of shocking blows"). The eight buildings are
 * filed as gear, following the catalog's treatment of Goods and
 * Gear's castle entries.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const SNF_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "snf-bow-of-true-arrows",
    "name": "Bow of True Arrows",
    "category": "weapon",
    "cost": "4,000 gp",
    "summary": "A magic bow whose shots are guided true, letting the wielder loose an unerring arrow at her target.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-shuriken-of-tremendous-shock",
    "name": "Shuriken of Tremendous Shock",
    "category": "weapon",
    "cost": "31,000 gp",
    "summary": "A magic shuriken wreathed in lightning that delivers a powerful electrical shock to whatever it strikes.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-potion-of-false-life",
    "name": "Potion of False Life",
    "category": "potion",
    "cost": "300 gp",
    "summary": "The drinker gains temporary hit points, as the false life spell.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-ring-of-mage-armor",
    "name": "Ring of Mage Armor",
    "category": "ring",
    "cost": "12,000 gp",
    "summary": "A ring that continuously sheathes the wearer in a mage armor effect, a +4 armor bonus to AC.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-ring-of-shocking-blows",
    "name": "Ring of Shocking Blows",
    "category": "ring",
    "cost": "13,000 gp",
    "summary": "A ring that wreathes the wearer's unarmed strikes in electricity, adding electrical damage to her punches and blows.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-headband-of-ferocity",
    "name": "Headband of Ferocity",
    "category": "wondrous-head",
    "cost": "2,000 gp",
    "summary": "A headband that lets the wearer keep fighting for a short time after being reduced below 0 hit points.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-sandals-of-the-tigers-leap",
    "name": "Sandals of the Tiger's Leap",
    "category": "wondrous-feet",
    "cost": "3,500 gp",
    "summary": "Sandals that greatly improve the wearer's leaping, doubling the distance of her jumps.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-vest-of-false-life",
    "name": "Vest of False Life",
    "category": "wondrous-torso",
    "cost": "12,000 gp",
    "summary": "A vest that grants the wearer temporary hit points each day, as the false life spell.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-gloves-of-fearsome-grip",
    "name": "Gloves of Fearsome Grip",
    "category": "wondrous-hands",
    "cost": "15,000 gp",
    "summary": "Gloves granting a powerful, unbreakable grip, aiding the wearer's climbs and grapples.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-belt-of-mighty-prowess",
    "name": "Belt of Mighty Prowess",
    "category": "wondrous-waist",
    "cost": "108,000 gp",
    "summary": "A belt that enhances the wearer's Strength, Dexterity, and Constitution together.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-headband-of-perfect-excellence",
    "name": "Headband of Perfect Excellence",
    "category": "wondrous-head",
    "cost": "180,000 gp",
    "summary": "A headband that enhances all six of the wearer's ability scores.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-3, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
];

export const SNF_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "snf-whip-dagger",
    "name": "Whip Dagger",
    "category": "weapon",
    "cost": "25 gp",
    "weight": "3 lb.",
    "notes": "A whip tipped with a dagger-like weight that deals lethal damage, unlike an ordinary whip.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-1, pp. 70–71",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-mighty-whip-dagger-1",
    "name": "Mighty Whip Dagger (+1 Str Bonus)",
    "category": "weapon",
    "cost": "225 gp",
    "weight": "4 lb.",
    "notes": "A whip dagger built for a stronger wielder, letting her add up to +1 of her Strength bonus to its damage.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-1, pp. 70–71",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-mighty-whip-dagger-2",
    "name": "Mighty Whip Dagger (+2 Str Bonus)",
    "category": "weapon",
    "cost": "325 gp",
    "weight": "5 lb.",
    "notes": "A whip dagger built for a stronger wielder, letting her add up to +2 of her Strength bonus to its damage.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-1, pp. 70–71",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-mighty-whip-dagger-3",
    "name": "Mighty Whip Dagger (+3 Str Bonus)",
    "category": "weapon",
    "cost": "425 gp",
    "weight": "6 lb.",
    "notes": "A whip dagger built for a stronger wielder, letting her add up to +3 of her Strength bonus to its damage.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-1, pp. 70–71",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-mighty-whip-dagger-4",
    "name": "Mighty Whip Dagger (+4 Str Bonus)",
    "category": "weapon",
    "cost": "525 gp",
    "weight": "7 lb.",
    "notes": "A whip dagger built for a stronger wielder, letting her add up to +4 of her Strength bonus to its damage.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, Table 5-1, pp. 70–71",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-two-person-chariot",
    "name": "Two-Person Chariot",
    "category": "gear",
    "cost": "300 gp",
    "weight": "300 lb.",
    "notes": "A light two-person war chariot. Adding bladed scythes to its sides costs an extra 100 gp.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-halfling-war-wagon",
    "name": "Halfling War-Wagon",
    "category": "gear",
    "cost": "5,000 gp",
    "weight": "—",
    "notes": "An armored, horse-drawn halfling wagon built as a mobile fighting platform. The book prints no weight.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-border-tower",
    "name": "Border Tower",
    "category": "gear",
    "cost": "50,000 gp",
    "weight": "—",
    "notes": "A complete stone border watchtower, finished and fitted out as described in the book's building plan.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-elven-canopy-tower",
    "name": "Elven Canopy Tower",
    "category": "gear",
    "cost": "75,000 gp",
    "weight": "—",
    "notes": "A complete tower built into the canopy of great trees, in the elven style, as described in the book's building plan.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-lighthouse-keep",
    "name": "Lighthouse Keep",
    "category": "gear",
    "cost": "150,000 gp",
    "weight": "—",
    "notes": "A complete fortified keep built around a working lighthouse, as described in the book's building plan.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-gnome-bridge-keep",
    "name": "Gnome Bridge Keep",
    "category": "gear",
    "cost": "220,000 gp",
    "weight": "—",
    "notes": "A complete keep spanning a river as a fortified bridge, in the gnomish style, as described in the book's building plan.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-bailey-castle",
    "name": "Bailey Castle",
    "category": "gear",
    "cost": "500,000 gp",
    "weight": "—",
    "notes": "A complete castle with bailey, curtain walls, and keep, as described in the book's building plan.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-dwarven-plateau-castle",
    "name": "Dwarven Plateau Castle",
    "category": "gear",
    "cost": "700,000 gp",
    "weight": "—",
    "notes": "A complete dwarven stronghold castle built into a plateau, as described in the book's building plan.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-monks-temple",
    "name": "Monks' Temple",
    "category": "gear",
    "cost": "50,000 gp",
    "weight": "—",
    "notes": "A complete monastery temple complex for an order of monks, as described in the book's building plan.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "snf-gladiatorial-arena",
    "name": "Gladiatorial Arena",
    "category": "gear",
    "cost": "800,000 gp",
    "weight": "—",
    "notes": "A complete gladiatorial arena with seating, pens, and fittings, as described in the book's building plan.",
    "source": "Sword and Fist — Chapter 5: Tools of the Trade, pp. 77–81",
    "sourceUrl": "",
    "ruleset": "core"
  },
];
