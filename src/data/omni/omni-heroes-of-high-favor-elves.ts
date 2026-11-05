/**
 * SUPERSEDED (2026-11-05): the omni-sweep equipment records for
 * Heroes of High Favor: Elves (the 10 masterwork components) are
 * replaced by the full-book pack at src/data/high-favor-elves/,
 * extracted from the book itself and verified against the
 * printed pages — the same 10 components in fuller records,
 * alongside the book's feats, prestige classes, and skill.
 * These arrays stay empty so the barrel imports remain valid;
 * one record per thing.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const HOFE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const HOFE_EQUIPMENT_OMNI: EquipmentItem[] = [];
