/**
 * Omni sweep Wave 2 (2026-11-02): Exemplars of Evil — the book
 * has no equipment or magic item chapter; its eight villain
 * chapters equip their villains, minions, and lairs entirely
 * with standard DMG/SRD gear and mundane treasure (gems and
 * art objects), none of it new. The single item stat block in
 * the whole book was the planar trestle, a minor artifact from
 * Chapter 7: Valbryn Morlydd (printed p. 112).
 *
 * REMOVED 2026-11-02 (Wave 4): the Planar Trestle's whole
 * function is forcing open a portal to another plane, which
 * contradicts APOC Survival's standing canon (planar travel
 * severed). Flagged to Shaun in the sweep report; on
 * 2026-11-02 he delegated the decision ("Call it for number
 * one") and Durrum's call was removal. The record is deleted,
 * not disabled; restore it from git history (commit 94b2bb26ed)
 * if Shaun ever reverses the call.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const EOE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const EOE_EQUIPMENT_OMNI: EquipmentItem[] = [];
