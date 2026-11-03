/**
 * Omni Sweep — Complete Scoundrel (2026-11-02).
 *
 * Complete Scoundrel's Chapter 5 "Scoundrel Equipment" was
 * enumerated in full: hidden spaces (a cost-multiplier rule, not
 * standalone items), Table 5-2 surprise weapons, Table 5-3
 * alchemical items, Table 5-4 poisons, and the Table 5-5 magic
 * items — all already in the catalog under the same name at the
 * same price. The one genuinely new content is Table 5-6 "Living
 * Items" (book p. 118): nonmagical equipment built from living
 * creatures, built here as equipment records. Summaries are
 * mechanical effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const CSc_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const CSc_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "green-air-bramble",
    "name": "Green Air Bramble",
    "category": "gear",
    "cost": "80 gp",
    "weight": "—",
    "notes": "Living item: a hardy creeping vine; a 3-foot length carried visibly (for example wrapped around a staff) grants a +2 bonus on Fortitude saves against inhaled poisons and airborne sickening or nauseating effects. Its berries yellow and its leaves brown on exposure to poison, warning of toxins; once exposed to poison the vine dies. Lasts indefinitely if planted in moist soil 6 hours per week.",
    "source": "Complete Scoundrel — Chapter 5: Scoundrel Equipment, p. 118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gut-mites",
    "name": "Gut Mites",
    "category": "gear",
    "cost": "50 gp",
    "weight": "1 lb.",
    "notes": "Living item: a flask of parasitic grubs harvested from giant monsters. Opened inside the stomach of a creature that swallowed you whole, the grubs force the creature to vomit up its stomach's contents (Fortitude DC 20 negates, instead sickening it for 1d4 minutes) and disable its swallow whole ability for 1d4 minutes. Single use; creatures immune to extra damage from critical hits are unaffected.",
    "source": "Complete Scoundrel — Chapter 5: Scoundrel Equipment, pp. 118-119",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "jabberweed",
    "name": "Jabberweed",
    "category": "gear",
    "cost": "60 gp",
    "weight": "1 lb.",
    "notes": "Living item: a many-holed root that whispers constantly once unwrapped and exposed to air (audible out to 100 feet on a DC 15 Listen check). All creatures within 100 feet take a -4 penalty on other Listen checks. Reusable while it lives — about 1 week after removal from its home plane, extendable with weekly DC 18 Knowledge (nature) checks.",
    "source": "Complete Scoundrel — Chapter 5: Scoundrel Equipment, p. 119",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "planar-mote",
    "name": "Planar Mote",
    "category": "gear",
    "cost": "300 gp",
    "weight": "—",
    "notes": "Living item (nonmagical): a tiny creature native to an Outer Plane that emits a moderate alignment aura of its home plane. While carried in closest contact, alignment-detection reads the mote's alignment instead of yours whenever the mote's aura is stronger than yours. Fades away 1 week + 1d6 days after leaving its native plane; flies 10 feet with perfect maneuverability and must be contained.",
    "source": "Complete Scoundrel — Chapter 5: Scoundrel Equipment, p. 119",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "planar-mote-greater",
    "name": "Planar Mote, Greater",
    "category": "gear",
    "cost": "600 gp",
    "weight": "1 lb.",
    "notes": "Living item (nonmagical): functions as a planar mote, except that it sheds a strong alignment aura of its home plane and lasts 1 month + 2d6 days after removal from that plane.",
    "source": "Complete Scoundrel — Chapter 5: Scoundrel Equipment, p. 120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rust-monster-wand",
    "name": "Rust Monster Wand",
    "category": "gear",
    "cost": "160 gp",
    "weight": "2 lb.",
    "notes": "Living item (nonmagical, despite the name): a glass tube holding about a dozen rust monster larvae whose antennae reach through a latticed cap. Run across metal, the larvae rust through a Large weapon or suit of armor (or similar object) in 1 minute, a Medium one in 9 rounds, or a Small one in 6 rounds. The larvae survive about 2 months if aired daily and fed the equivalent of five coins of metal per day.",
    "source": "Complete Scoundrel — Chapter 5: Scoundrel Equipment, p. 120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "torch-bug-paste",
    "name": "Torch Bug Paste",
    "category": "gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "Living item: one bladder of luminescent slime from a torch bug's abdomen. Applied to a surface (a full-round action per 5-foot square, up to a 10-foot-square area) it glows like a torch for 1 hour. Can instead be thrown as a splash weapon (ranged touch, 10-foot range increment) that coats the target and adjacent creatures as a nonmagical faerie fire effect for 1 hour; washes off with water as a full-round action.",
    "source": "Complete Scoundrel — Chapter 5: Scoundrel Equipment, p. 120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "torch-bug-tube",
    "name": "Torch Bug Tube",
    "category": "gear",
    "cost": "30 gp",
    "weight": "1 lb.",
    "notes": "Living item: a sealed glass cylinder holding a single adult torch bug. Shaking the tube (a move action) makes the bug glow like a torch for 3 minutes; the light works underwater and is nonmagical. The bug can glow up to 1 hour per day and must be fed daily and given fresh air (by unscrewing the end) once per day or it weakens and dies.",
    "source": "Complete Scoundrel — Chapter 5: Scoundrel Equipment, p. 120",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
