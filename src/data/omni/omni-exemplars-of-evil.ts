/**
 * Omni sweep Wave 2 (2026-11-02): Exemplars of Evil — the book
 * has no equipment or magic item chapter; its eight villain
 * chapters equip their villains, minions, and lairs entirely
 * with standard DMG/SRD gear and mundane treasure (gems and
 * art objects), none of it new. The single item stat block in
 * the whole book is the planar trestle, a minor artifact from
 * Chapter 7: Valbryn Morlydd (printed p. 112), and it was not
 * in the catalog — it is built below. CANON FLAG for the
 * parent report: this artifact's whole function is forcing
 * open a portal to another plane, in a campaign where planar
 * travel is severed; it is cataloged here per the sweep's
 * rule that artifacts are recorded, with the conflict noted
 * rather than the record suppressed. Prices are as printed
 * (artifacts carry no market price); the summary is the
 * mechanical effect in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const EOE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "planar-trestle",
    "name": "Planar Trestle",
    "category": "artifact",
    "cost": "—",
    "summary": "A minor artifact assembled from esoteric objects unique to the plane on which it was created; once the components are interlocked in their one correct arrangement, the trestle cannot be physically sundered or harmed by any type of energy. When a planar trestle is brought into contact with a portal to another plane, whether sealed or inactive, the portal is forced open permanently and the artifact is destroyed. Strong conjuration (calling), CL 20th; weight 5 lb.",
    "source": "Exemplars of Evil — Chapter 7: Valbryn Morlydd, p. 112",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const EOE_EQUIPMENT_OMNI: EquipmentItem[] = [];
