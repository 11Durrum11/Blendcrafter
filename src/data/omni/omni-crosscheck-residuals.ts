/**
 * Omni sweep Wave 3 (2026-11-02): cross-check residual gap fill.
 * The fan-index cross-check (~/workspace/omni-sweep/reports/
 * index-crosscheck.md) named a handful of items still missing from
 * books the sweep had already processed. This file holds exactly the
 * residuals that could be verified in the book texts on disk with a
 * printed price. Everything else in scope was checked and documented
 * as not buildable in ~/workspace/omni-sweep/reports/
 * crosscheck-residuals.md:
 *  - The Book of Exalted Deeds artifact and the Book of Vile Darkness
 *    artifact have no item entry in their own books (BoED's artifact
 *    chapter holds only the Cup/Talisman of Al'Akbar and the Regalia
 *    of Good; BoVD gives the book lore only, no stats or price).
 *  - Acrola, Watchful Tooth of Ashardalon does not appear anywhere in
 *    the BoVD text (the index's BoVD attribution could not be
 *    confirmed; the Teeth of Dahlver-Nar are not a BoVD feature).
 *  - Sand Painting (Travelers' Oasis) was a cross-check false
 *    positive: it already exists in the catalog at the book's price.
 *  - Rimefire Ice, Stygian Ice, Leafweave, and the five BoED special
 *    materials (aurorum, frystalline, serren, Solarian truesteel,
 *    Ysgardian heartwire) print only item cost modifiers, no price
 *    for the material itself, so they are not built. Blue Ice does
 *    print a per-pound value for the raw material and is built.
 * Prices are the printed prices; summaries are in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const XRES_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "bleeding-statue",
    "name": "Bleeding Statue",
    "category": "wondrous-slotless",
    "cost": "55,000 gp",
    "summary": "A life-sized statue of a saint, found at a site tied to the saint's life. At most once a month (often only once a year) blood drips from the statue, yielding 1d4+1 doses; a taste of the blood acts as a greater restoration spell. The statue's site is under a constant hallow effect with an attached death ward. A relic: the book prints this figure as a market price equivalent for treasure assignment, since relics cannot be manufactured, bought, or sold.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, p. 36",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "executioners-axe",
    "name": "Executioner's Axe",
    "category": "weapon",
    "cost": "98,320 gp",
    "summary": "A greataxe relic that was used to execute a holy person; its blade is stained red with the saint's blood. It functions as a holy vorpal greataxe with no enhancement bonus, and a good wielder takes a -2 penalty on attack and damage rolls with it (evil wielders suffer the usual penalties of a holy weapon). A relic: the book prints this figure as a market price equivalent for treasure assignment, since relics cannot be manufactured, bought, or sold.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, pp. 36-37",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "recalling-chime",
    "name": "Recalling Chime",
    "category": "wondrous-slotless",
    "cost": "36,000 gp",
    "summary": "A variant of the truth chime (the index lists it as \"Recall Chime\") that works in reverse: instead of being ineffective against bearers of the Least Mark of Detection, it affects only them. When rung, all dragonmarked members of House Medani within 30 feet (up to six targets plus the wielder) are affected as if by word of recall, deposited in a reception room in the Warning Guild enclave in Wroat. Usable once every two days; the book prints a single price for the truth chime entry, which this variant shares.",
    "source": "Magic of Eberron — Chapter 5: Magic Items and Equipment, p. 114",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "thunderbolt-chime",
    "name": "Thunderbolt Chime",
    "category": "wondrous-slotless",
    "cost": "19,440 gp",
    "summary": "A variant of the blasting chime that releases a 120-foot line of electricity instead of sonic energy, dealing 6d6 points of electricity damage (Reflex DC 17 half). Against targets wearing metal armor, the check to overcome spell resistance is made as though the item's caster level were two higher. The book prints a single price for the blasting chime entry, which this variant shares.",
    "source": "Magic of Eberron — Chapter 5: Magic Items and Equipment, p. 112",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
];

export const XRES_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "blue-ice",
    "name": "Blue Ice",
    "category": "gear",
    "cost": "400 gp per pound",
    "weight": "—",
    "notes": "Dark blue ice mined from the depths of ancient glaciers; it can be forged like iron but items made from it weigh half as much. Slashing weapons of blue ice gain a +1 enhancement bonus on damage, and blue ice armor counts one category lighter (medium as light, heavy as medium) with armor check penalties lessened by 2, though wearers without cold resistance take a -1 penalty on Reflex saves and initiative. The book values raw blue ice at 400 gp per pound; finished items instead use printed cost modifiers (slashing weapon +500 gp; light armor or shield +750 gp; medium armor +3,000 gp; heavy armor +7,000 gp; other items +400 gp/lb.). Hardness 10, 20 hit points per inch of thickness.",
    "source": "Frostburn — Chapter 4: Equipment, pp. 79-80",
    "sourceUrl": "",
    "ruleset": "core"
  },
];
