/**
 * Omni sweep Wave 4 (2026-11-02): the eight price-less special
 * materials, built the Starmetal way.
 *
 * Rimefire Ice, Stygian Ice, Leafweave, Aurorum, Frystalline,
 * Serren Wood, Solarian Truesteel, and Ysgardian Heartwire print
 * NO price for the material itself in their books — only per-item
 * cost modifiers. The Wave 3 cross-check audit therefore skipped
 * them under its printed-price rule and recorded their modifier
 * figures in ~/workspace/omni-sweep/reports/crosscheck-residuals.md.
 * The catalog already carries the same kind of material as an
 * equipment record where the price is a modifier — Starmetal
 * (Complete Arcane, cost "+5,000 gp") and Pandemonic Silver
 * (Complete Warrior, cost by weapon size) — so, by the owner's
 * delegated call, these eight are recorded the same way: category
 * "gear", cost string carrying the printed modifier, weight "—".
 * Every figure below was verified against the book text on disk
 * (Frostburn Ch. 4; Races of the Wild Ch. 7; Book of Exalted Deeds
 * Ch. 3, pp. 37-38) before use.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const MATL_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const MATL_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "rimefire-ice",
    "name": "Rimefire Ice",
    "category": "gear",
    "cost": "+750 gp (weapon), +500 gp/lb. (other objects)",
    "weight": "—",
    "notes": "Special material: ice found only in icebergs inhabited by rimefire eidolons, making up roughly 5% of such an iceberg. It is bitterly cold to the touch, dealing 1 point of cold damage per round of contact to any creature without resistance or immunity to cold. It burns about as readily as wood, but its flames deal cold damage rather than fire, and applied heat does not melt it. Weapons made of rimefire ice glow with blue light, shedding illumination equal to a torch. Cost modifier as listed.",
    "source": "Frostburn — Chapter 4: Equipment, pp. 79-80",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stygian-ice",
    "name": "Stygian Ice",
    "category": "gear",
    "cost": "+6,000 gp (weapon), +2,000 gp/lb. (other objects)",
    "weight": "—",
    "notes": "Special material: black extraplanar ice from Stygia, the fifth layer of Hell, constantly crawling with a thin layer of pale blue mist. Contact deals 1d6 points of cold damage per round, and a creature damaged by that cold must make a DC 12 Will save or take 2 points of Wisdom damage as its memories freeze; if Wisdom reaches 0 the damage continues into Constitution, and a creature reduced to Constitution 0 rises as a wraith in 2d4 rounds. A stygian ice weapon deals an extra 1d6 points of cold damage on a hit but is fragile: each time it deals damage, the wielder must make a DC 15 Reflex save or the weapon takes the same amount of damage itself. Hardness 3, 5 hit points per inch of thickness; magical fire damage against it is not halved, and it takes 1 point of damage per hour in environments above 40 degrees. Cost modifier as listed.",
    "source": "Frostburn — Chapter 4: Equipment, p. 80",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "leafweave",
    "name": "Leafweave",
    "category": "gear",
    "cost": "+740 gp (armor)",
    "weight": "—",
    "notes": "Special material: dark leaves given an alchemical treatment that makes them as tough and flexible as leather, with considerably less weight. Leafweave armor has its arcane spell failure chance reduced by 5%, its maximum Dexterity bonus increased by 1, and its armor check penalty lessened by 2 compared to ordinary armor of the same sort; leafweave padded, leather, studded leather, and hide armors exist (studded leather versions typically use darkwood studs to stay druid-friendly). Creating leafweave armor requires a DC 25 Craft (alchemy) check in addition to the normal Craft (armorsmithing) checks. Hardness 2, 5 hit points per inch of thickness. The printed surcharge over ordinary armor is 740 gp, masterwork included. Cost modifier as listed.",
    "source": "Races of the Wild — Chapter 7: Equipment, p. 167",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "aurorum",
    "name": "Aurorum",
    "category": "gear",
    "cost": "+4,000 gp",
    "weight": "—",
    "notes": "Special material: a luminous steel from the Upper Planes that gleams with varying hues of pink and indigo. An aurorum weapon, shield, or suit of armor that has been sundered can be reformed by bringing its fragments together (a full-round action); the pieces bond quickly and seamlessly, restoring the item to its previous state. Aurorum has the same hit points per inch of thickness and hardness as regular steel. Cost modifier as listed.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, pp. 37-38",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frystalline",
    "name": "Frystalline",
    "category": "gear",
    "cost": "+2,000 gp",
    "weight": "—",
    "notes": "Special material: a mineral growing in the icy mountain caves of Eronia, the second layer of the Blessed Fields of Elysium; its resilient pale-gold crystals hold divine energy emanating from a god sleeping beneath the mountains. Any weapon made of frystalline is treated as good-aligned for the purpose of overcoming damage reduction. Frystalline has 15 hit points per inch of thickness and hardness 10. Cost modifier as listed.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, pp. 37-38",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "serren-wood",
    "name": "Serren Wood",
    "category": "gear",
    "cost": "+4,000 gp (one bow or 50 arrows or bolts)",
    "weight": "—",
    "notes": "Special material: wood from the serren trees of Arvandor, the uppermost layer of Arborea, which serve as vessels for nature spirits. Any branch that falls from a serren tree can be fashioned into a bow, arrow, or crossbow bolt imbued with a portion of the tree's spirit: serren bows, arrows, and bolts have the ghost touch special quality, although this property is not magical. Serren has the same hit points per inch of thickness and hardness as regular wood. Cost modifier as listed.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, pp. 37-38",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "solarian-truesteel",
    "name": "Solarian Truesteel",
    "category": "gear",
    "cost": "+1,000 gp",
    "weight": "—",
    "notes": "Special material: a fine iron mined on the fourth layer of the Seven Mounting Heavens of Celestia that needs no alloy and shines with a silvery gleam. When forged into a weapon, it gives the wielder a +1 bonus on the confirmation roll for a critical hit. Solarian truesteel has 25 hit points per inch of thickness and hardness 11. Cost modifier as listed.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, pp. 37-38",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ysgardian-heartwire",
    "name": "Ysgardian Heartwire",
    "category": "gear",
    "cost": "+1,500 gp (armor)",
    "weight": "—",
    "notes": "Special material: an incredibly fine, flexible metal found only in the deep mines of Nidavellir in the Heroic Domains of Ysgard. It is not suitable for making an entire suit of armor, but small sections of heartwire mail can be incorporated into chain shirts, chainmail, or heavy armor to reinforce vital areas, increasing the wearer's Armor Class by +2 solely for purposes of the roll to confirm a critical hit against the wearer. The heartwire is so fine and light that it does not increase the armor's weight. Cost modifier as listed.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, pp. 37-38",
    "sourceUrl": "",
    "ruleset": "core"
  },
];
