/**
 * Omni sweep (2026-11-02): Ghostwalk — Chapter 1's equipment
 * (printed pp. 42-45, Tables 1-8 through 1-13) and the magic item
 * chapter's remaining entries (pp. 62-73). Most of Ghostwalk was
 * already cataloged by the book's own pack: all 7 armor abilities,
 * all 8 weapon abilities, the staffs, the ring of manifesting, the
 * oil of animate dead, all 28 tabled wondrous items, and the specific
 * armors and weapons (filed as equipment). What remained unbuilt was
 * the mundane/alchemical equipment of the Manifest Ward and two
 * artifacts. Three magic items from this chapter — the bone ring,
 * enemy spirit pouch, and mithral bells — were reprinted in the
 * Magic Item Compendium and already exist in the catalog under that
 * source, so they are skipped here (the bone ring's price differs:
 * Ghostwalk 36,000 gp vs. MIC 20,000 gp; see the omni-sweep report).
 * Not built: body housing and host services (services, not items),
 * the "ectoplasmic equipment" pricing modifier (not a standalone
 * item), and wraithweed (the book prints no market price for it).
 * The chapter's scroll and wand tables list standard-priced
 * scrolls/wands of Ghostwalk spells, not unique items. Prices are
 * the printed market prices; summaries and notes are mechanical
 * effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const GW_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "the-seven-crowns",
    "name": "The Seven Crowns",
    "category": "artifact",
    "cost": "—",
    "summary": "A set of crowns, each of which simultaneously functions as a belt of giant strength +4, an amulet of health +4, a ring of minor elemental resistance (fire), a ring of protection +5, and a major circlet of blasting. Rumors credit each individual crown with further powers of its own.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Magic Items), pp. 62–73",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "starfire",
    "name": "Starfire",
    "category": "artifact",
    "cost": "—",
    "summary": "A +5 holy keen mighty cleaving defending adamantine longsword of elven make. The wielder can invoke daylight on the blade at will, and when the sword strikes an object or creature it rings a note that can leave the target dazed unless it saves.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Magic Items), pp. 62–73",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const GW_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "bola-flail",
    "name": "Bola Flail",
    "category": "weapon",
    "cost": "5 gp",
    "weight": "4 lb.",
    "notes": "Exotic ranged weapon dealing 1d6 points of bludgeoning damage (critical ×2) with a 10 ft. range increment. It grants a +2 bonus on opposed disarm rolls, can be used to trip, and can make ranged trip or grapple attempts against Small or Medium creatures.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thurkasian-breastplate",
    "name": "Thurkasian Breastplate",
    "category": "armor",
    "cost": "250 gp",
    "weight": "30 lb.",
    "notes": "Masterwork-quality regional breastplate: +5 armor bonus, maximum Dexterity bonus +3, armor check penalty –4, 25% arcane spell failure chance, speed 20 ft./15 ft. Donning it hastily or removing it takes a full-round action and donning it properly takes 3 minutes; otherwise it works as a standard breastplate.",
    "acBonus": 5,
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "desk-clock",
    "name": "Desk Clock",
    "category": "gear",
    "cost": "25 gp",
    "weight": "8 lb.",
    "notes": "A spring-, gear-, and weight-driven clock that must be wound daily. It keeps time accurately to within a few minutes per day, and less accurately if it is moved or not kept upright.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tereppekian-paper",
    "name": "Tereppekian Paper (sheet)",
    "category": "gear",
    "cost": "1 sp",
    "weight": "—",
    "notes": "A single sheet of fine Tereppekian paper, about four times the size of a spellbook page.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tereppekian-blank-book",
    "name": "Tereppekian Blank Book",
    "category": "gear",
    "cost": "3 gp",
    "weight": "3 lb.",
    "notes": "A book of 25 folded Tereppekian sheets, giving 100 blank pages, with a soft leather cover.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tereppekian-spellbook",
    "name": "Tereppekian Spellbook",
    "category": "gear",
    "cost": "10 gp",
    "weight": "3 lb.",
    "notes": "A spellbook made with extra-thick Tereppekian paper and a stiff leather cover; otherwise it functions as a normal spellbook.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thurkasian-horse-heavy",
    "name": "Thurkasian Horse, Heavy",
    "category": "gear",
    "cost": "300 gp",
    "weight": "—",
    "notes": "A heavy horse of the Thurkasian breed, which applies +2 Strength and +2 Constitution (with the derived adjustments) to the standard heavy horse statistics from the Monster Manual.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thurkasian-warhorse-heavy",
    "name": "Thurkasian Warhorse, Heavy",
    "category": "gear",
    "cost": "400 gp",
    "weight": "—",
    "notes": "A heavy warhorse of the Thurkasian breed, which applies +2 Strength and +2 Constitution (with the derived adjustments) to the standard heavy warhorse statistics from the Monster Manual.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "soul-venom",
    "name": "Soul Venom",
    "category": "alchemical gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "A poison harmless to living creatures. Against manifested ghosts it acts as Large monstrous scorpion venom: injury, Fortitude DC 18, initial and secondary damage 1d6 Strength.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cretchwater-oil",
    "name": "Cretchwater Oil",
    "category": "alchemical gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "Against living creatures this oil acts as Small monstrous centipede poison (injury, Fortitude DC 11, 1d2 Dexterity initial and secondary). Against ghosts it acts as greenblood oil (injury, Fortitude DC 13, 1 Constitution initial and 1d2 Constitution secondary).",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dark-ectoplasm",
    "name": "Dark Ectoplasm",
    "category": "alchemical gear",
    "cost": "700 gp",
    "weight": "—",
    "notes": "A poison that affects only ghosts: injury, Fortitude DC 18, initial and secondary damage 1d6 Charisma.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "raw-ectoplasm",
    "name": "Raw Ectoplasm",
    "category": "alchemical gear",
    "cost": "1 cp",
    "weight": "1 lb.",
    "notes": "Unprocessed ectoplasm, either slippery or sticky. It decays to nothing in 10 minutes unless it is stabilized.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ghost-disguise-kit",
    "name": "Ghost Disguise Kit",
    "category": "tool",
    "cost": "100 gp",
    "weight": "8 lb.",
    "notes": "A disguise kit whose materials are alchemically matched to ghostly transparency and coloration; it can disguise a living creature as a ghost at a –10 penalty on the Disguise check. A version sized for Small creatures weighs one-quarter as much.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shellcraft-manikin",
    "name": "Shellcraft Manikin",
    "category": "gear",
    "cost": "250 gp",
    "weight": "40–80 lb.",
    "notes": "A metal-and-wood humanoid dummy that an incorporeal creature can enter as a standard action and operate like a possessed body, letting a ghost carry material objects outside the Manifest Ward. While inhabited it imposes maximum Dexterity bonus +2 and an armor check penalty of –5 unless the operator is proficient with medium armor; hardness 7, 50 hit points for a Medium manikin or 35 for a Small one.",
    "source": "Ghostwalk — Chapter 1: All About Ghosts (Equipment), pp. 42–45",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
