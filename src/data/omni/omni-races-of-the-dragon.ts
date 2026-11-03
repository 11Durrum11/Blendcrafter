/**
 * Omni sweep Wave 2 (2026-11-02): Races of the Dragon — Chapter 8:
 * Equipment (printed pp. 121–132). Everything else in this chapter
 * was already cataloged at identical prices: the six special
 * substances and items of Table 8–1 (bitterleaf oil, the three
 * ditherbombs, the fire beetle lamp, sundark goggles) and all
 * twenty wondrous items of Table 8–2 plus the spellflinging spear
 * (in ALL_EQUIPMENT). The only purchasable content missing was the
 * book's ten draconic grafts, built here following the Magic of
 * Eberron graft model: grafts are not magic items, do not radiate
 * an aura, and occupy no item slot, but they have market prices and
 * are filed as wondrous-slotless. Not built: chitin armor and
 * colored metal (special materials / cost modifiers with no
 * standalone priced items). Prices are the printed prices from
 * the Draconic Grafts table; summaries are in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const RDRAG_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "buffeting-wings",
    "name": "Buffeting Wings",
    "category": "wondrous-slotless",
    "cost": "100,000 gp",
    "summary": "Draconic graft (sacrifice 8 hp and –2 Dexterity): membranous draconic wings grown from the recipient's body grant a fly speed equal to the recipient's base land speed with average maneuverability. The recipient cannot carry aloft more than a light load.",
    "source": "Races of the Dragon — Chapter 8: Equipment, pp. 127–128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragonbone-legs",
    "name": "Dragonbone Legs",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "Draconic graft (legs; sacrifice 4 hp): powerful draconic leg bones grafted into the recipient's legs grant a +4 bonus on Climb, Jump, and Swim checks. The graft is internal, so the recipient's appearance is unchanged.",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gleaming-scales",
    "name": "Gleaming Scales",
    "category": "wondrous-slotless",
    "cost": "9,000 gp",
    "summary": "Draconic graft (skin): strong, gleaming dragon scales grown over the recipient's torso and limbs improve the recipient's natural armor bonus to AC by 1, stacking with enhancement bonuses to natural armor. The graft also grants resistance 5 to the energy type the donor dragon was immune or resistant to (or increases existing resistance to that energy by 5).",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 129",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "glaring-eye",
    "name": "Glaring Eye",
    "category": "wondrous-slotless",
    "cost": "10,000 gp",
    "summary": "Draconic graft (head; sacrifice 4 hp): a dragon's eye grown into the recipient's own grants blindsense out to 30 feet, a +2 bonus on Search and Spot checks, and immunity to magic sleep effects. The grafted eye has a slitted pupil and no lid, and cannot close.",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragonheart-presence",
    "name": "Dragonheart Presence",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "Draconic graft (flesh; sacrifice 4 hp): a bit of a dragon's heart tissue grafted into the recipient's chest grants immunity to paralysis effects and to the frightful presence of dragonkind, plus a +2 bonus on Bluff, Diplomacy, Gather Information, and Intimidate checks involving creatures with the dragonblood subtype.",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frightful-crest",
    "name": "Frightful Crest",
    "category": "wondrous-slotless",
    "cost": "28,000 gp",
    "summary": "Draconic graft (head; sacrifice 6 hp): a portion of the donor dragon's crest, spikes, or horns grants an aura of fear similar to a dragon's frightful presence. Whenever the recipient attacks or charges, each living nondragon enemy within 30 feet must succeed on a Will save (DC 10 + 1/2 the recipient's HD + the recipient's Charisma modifier) or become panicked; a successful save renders the creature immune for 24 hours.",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "smashing-tail",
    "name": "Smashing Tail",
    "category": "wondrous-slotless",
    "cost": "30,000 gp",
    "summary": "Draconic graft (legs; sacrifice 4 hp): the recipient sprouts a muscular, scaled tail usable as a secondary slam attack that deals damage as a dragon one size category larger than the recipient (1d8 for a Medium creature), adding 1-1/2 times the recipient's Strength bonus to damage. The tail also grants a +2 bonus on Balance and Swim checks. The recipient must be Medium size or larger.",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 130",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "taloned-arm",
    "name": "Taloned Arm",
    "category": "wondrous-slotless",
    "cost": "34,000 gp",
    "summary": "Draconic graft (arms; sacrifice 2 hp): one of the recipient's arms is sheathed in dragon flesh with sharp, curved claws, granting a secondary claw attack that deals damage as a dragon of the recipient's size (1d6 for a Medium creature). On a full attack, the claw can be used in addition to the recipient's other attacks.",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 130",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metabolic-fire",
    "name": "Metabolic Fire",
    "category": "wondrous-slotless",
    "cost": "56,000 gp",
    "summary": "Draconic graft (flesh): the recipient gains a breath weapon usable once every 1d4 rounds, in the form (line or cone) and energy type of the donor dragon's breath. It deals 6d8 points of damage, with a Reflex save (DC 10 + 1/2 the recipient's HD + the recipient's Constitution modifier) for half; a cone is 30 feet long and a line is 60 feet long. The recipient must first have at least one other draconic graft.",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 129",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "resilient-scales",
    "name": "Resilient Scales",
    "category": "wondrous-slotless",
    "cost": "70,000 gp",
    "summary": "Draconic graft (skin; sacrifice 6 hp): scales grown from a living dragon with immunity to an energy type grant the recipient resistance to that energy type. If the recipient has at least one other draconic graft, resilient scales counts as two grafts for the purpose of the damage reduction granted by multiple draconic grafts.",
    "source": "Races of the Dragon — Chapter 8: Equipment, p. 130",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const RDRAG_EQUIPMENT_OMNI: EquipmentItem[] = [];
