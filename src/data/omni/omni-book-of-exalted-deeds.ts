/**
 * Omni sweep (2026-11-02): Book of Exalted Deeds — Chapter 3's
 * exalted equipment (printed pp. 33-38) and Chapter 6's magic items
 * (pp. 112-120). Most of this book was already cataloged by its own
 * pack: the nonlethal weapons, the good spell components, all 6
 * armor and 7 weapon special abilities, the specific armors and
 * weapons (filed as equipment), the rings, staffs, and the tabled
 * wondrous items. The remaining gaps were two nonmagical exalted
 * substances in Chapter 3 and the book's five artifacts in Chapter 6
 * (the Cup and Talisman of Al'Akbar and the three-piece Regalia of
 * Good). Three Chapter 6 items — the ring of vengeance, retributive
 * amulet, and shackles of silence — were reprinted in the Magic Item
 * Compendium and already exist in the catalog under that source, so
 * they are skipped here; the amulet and shackles carry different
 * prices in the two books (see the omni-sweep report). Not built:
 * the ravages and afflictions of Chapter 3 (poison-like effects, not
 * purchasable items), the relics of pp. 36-37 (the book states they
 * cannot be manufactured, bought, or sold; their prices are
 * treasure-assignment equivalents only), and the special-material
 * price modifiers of p. 38 (aurorum, frystalline, serren, Solarian
 * truesteel, Ysgardian heartwire — modifiers, not standalone items).
 * Prices are the printed market prices; summaries and notes are
 * mechanical effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const BOED_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "cup-of-al-akbar",
    "name": "Cup of Al'Akbar",
    "category": "artifact",
    "cost": "—",
    "summary": "A hammered-gold chalice that turns ordinary water into a potion of cure light wounds (1d8+1) seven times per day; the water must be drunk directly from the cup. It can also cast bless once per day at 20th level. A nongood keeper suffers 1 point of permanent Constitution drain per day, restorable only by wish or miracle, and at Constitution 0 dies and becomes a deathless guardian bound to the cup.",
    "source": "Book of Exalted Deeds — Chapter 6: Magic Items, pp. 112–120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "talisman-of-al-akbar",
    "name": "Talisman of Al'Akbar",
    "category": "artifact",
    "cost": "—",
    "summary": "A platinum eight-pointed star on a gold chain; the wearer can use remove disease at will and remove curse once per day. A nongood keeper suffers the same daily permanent Constitution drain as the Cup of Al'Akbar, cumulative with the cup's drain, and holding the cup while wearing the talisman allows resurrection three times per week through a 10-minute ritual with a vial of holy water, on nonevil creatures only and ignoring the usual material component cost.",
    "source": "Book of Exalted Deeds — Chapter 6: Magic Items, pp. 112–120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "crown-of-good",
    "name": "Crown of Good",
    "category": "artifact",
    "cost": "—",
    "summary": "The mithral coronet of the Regalia of Good. A good wearer's head is haloed in light; the crown grants immunity to electricity, a +4 enhancement bonus to Wisdom, a +4 deflection bonus to Armor Class, and spell resistance 20, plus guidance at will, heroes' feast, sending, and greater status each three times per day, and globe of invulnerability once per day, all at 20th level. The wearer cannot speak lies.",
    "source": "Book of Exalted Deeds — Chapter 6: Magic Items, pp. 112–120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "scepter-of-good",
    "name": "Scepter of Good",
    "category": "artifact",
    "cost": "—",
    "summary": "The mithral rod of the Regalia of Good. Held by a good character, it grants a +4 enhancement bonus to Charisma and immunity to mind-affecting spells and effects, commands obedience as a rod of rulership with no use limit, and can cast holy smite (DC 19) and searing light (DC 18) each three times per day at 20th level. Its wielder becomes increasingly unable to refuse pleas for help.",
    "source": "Book of Exalted Deeds — Chapter 6: Magic Items, pp. 112–120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "orb-of-good",
    "name": "Orb of Good",
    "category": "artifact",
    "cost": "—",
    "summary": "A crystal sphere in a mithral laurel cage, of the Regalia of Good. A good wielder turns or destroys undead as a 15th-level cleric, gains a +4 enhancement bonus to Intelligence, can scry as a crystal ball with detect thoughts added, and can cast heal by touch once per day as a 20th-level cleric.",
    "source": "Book of Exalted Deeds — Chapter 6: Magic Items, pp. 112–120",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const BOED_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "moonblood",
    "name": "Moonblood",
    "category": "gear",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "Celestial warpaint, priced per application. Proper application takes 1 hour and a DC 22 Craft (painting) check, and a failed check wastes the application; correctly applied runes grant a +2 sacred bonus to Armor Class for 1 day and are then absorbed harmlessly. An evil creature touching moonblood takes 1d6 points of damage.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, pp. 33–38",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "storm-tears",
    "name": "Storm Tears",
    "category": "gear",
    "cost": "750 gp",
    "weight": "—",
    "notes": "A vial of milky rain gathered in the Upper Planes; nonmagical. A vial duplicates the effects of the heart's ease spell.",
    "source": "Book of Exalted Deeds — Chapter 3: Exalted Equipment, pp. 33–38",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
