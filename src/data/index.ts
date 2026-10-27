/**
 * Aggregate data barrel: every picker in the app reads from these ALL_*
 * collections, which merge the legacy core packs (src/data/classes.ts,
 * src/data/races.ts, src/data/templates.ts) with the full core roster packs
 * (src/data/core/*). Records are deduplicated by id, first pack wins.
 *
 * The optional ruleset packs (Eberron / Iron Kingdoms / Sorcery &
 * Steam) were never recovered from the truncated GitHub archives;
 * they were rebuilt from Shaun's own books in 2026-10 (see
 * REBUILD-NOTES.md addenda) and are merged alongside the core packs.
 *
 * Folded in 2026-10-27 at Shaun's direction: the Dessarin Valley
 * homebrew pack (his own wild-magic document — a template merged into
 * ALL_TEMPLATES, its random tables exported as ALL_RANDOM_TABLES) and
 * the body-modification index (grafts / symbionts / warforged
 * components, exported as ALL_BODY_MODIFICATIONS; it is a reference
 * index, not a picker collection, so it merges nothing into the
 * existing ALL_* lists).
 *
 * Also merged 2026-10-27 (Batch 1 of the "all original books"
 * program): the Races of Stone and Races of the Wild packs. Both
 * books are generic D&D 3.5 supplements whose records carry
 * ruleset "core", so they merge into the ALL_* collections
 * alongside the core packs rather than behind a ruleset toggle.
 *
 * Also merged 2026-10-27 (Batch 1.5): Shaun's three uploaded
 * documents — the firearms compilation (fire_arms.docx) as
 * Sorcery & Steam equipment + firearm magic items, the alchemical
 * listing (Alchemical_stuff.docx) as Sorcery & Steam equipment,
 * and the AI-imagined steampunk prosthetics
 * (AI_imagined_steampunk_prothetics.docx) as 18 records appended
 * to the body-modification index in body-modifications.ts.
 *
 * Also merged 2026-10-27 (Batch 2 of the "all original books"
 * program): the Complete Warrior and Complete Adventurer packs.
 * Both books are generic D&D 3.5 supplements whose records carry
 * ruleset "core". Their six base classes (Hexblade, Samurai,
 * Swashbuckler; Ninja, Scout, Spellthief) already existed in the
 * recovered core data, so the packs add prestige classes and feats
 * only (see the REBUILD-NOTES.md Batch 2 addendum for the
 * verification of the recovered base classes, including the
 * discrepancies found).
 */
import type {
  BodyModificationDefinition,
  ClassDefinition,
  EquipmentItem,
  FeatDefinition,
  MagicItemDefinition,
  PrestigeClassDefinition,
  RaceDefinition,
  RandomTableDefinition,
  SkillDefinition,
  TemplateDefinition,
} from "@/engine/types";

import { CLASSES as LEGACY_CLASSES } from "./classes";
import { RACES } from "./races";
import { EBERRON_RACES } from "./eberron/races";
import { IRON_KINGDOMS_RACES } from "./iron-kingdoms/races";
import { TEMPLATES } from "./templates";
import { CORE_CLASSES } from "./core/classes";
import { NEW_BASE_CLASSES } from "./core/new-base-classes";
import { CORE_PRESTIGE_CLASSES } from "./core/prestige-classes";
import { EBERRON_PRESTIGE_CLASSES } from "./eberron/prestige-classes";
import { SORCERY_STEAM_CLASSES } from "./sorcery-steam/classes";
import { SORCERY_STEAM_PRESTIGE_CLASSES } from "./sorcery-steam/prestige-classes";
import { SORCERY_STEAM_SKILLS } from "./sorcery-steam/skills";
import { SORCERY_STEAM_FEATS } from "./sorcery-steam/feats";
import { SORCERY_STEAM_FIREARM_EQUIPMENT } from "./sorcery-steam/firearms-equipment";
import { SORCERY_STEAM_ALCHEMICAL_EQUIPMENT } from "./sorcery-steam/alchemical-equipment";
import { SORCERY_STEAM_FIREARM_MAGIC_ITEMS } from "./sorcery-steam/firearm-magic-items";
import { CORE_SKILLS } from "./core/skills";
import { CORE_FEATS } from "./core/feats";
import { EBERRON_FEATS } from "./eberron/feats";
import { IRON_KINGDOMS_FEATS } from "./iron-kingdoms/feats";
import { CORE_EQUIPMENT } from "./core/equipment";
import { CORE_MAGIC_ITEMS } from "./core/magic-items";
import NEW_EQUIPMENT_JSON from "./core/new-equipment.json";
import { DESSARIN_TEMPLATES } from "./dessarin/templates";
import { DESSARIN_TABLES } from "./dessarin/tables";
import { BODY_MODIFICATIONS } from "./body-modifications";
import { RACES_OF_STONE_RACES } from "./races-of-stone/races";
import { RACES_OF_STONE_PRESTIGE_CLASSES } from "./races-of-stone/prestige-classes";
import { RACES_OF_STONE_FEATS } from "./races-of-stone/feats";
import { RACES_OF_THE_WILD_RACES } from "./races-of-the-wild/races";
import { RACES_OF_THE_WILD_PRESTIGE_CLASSES } from "./races-of-the-wild/prestige-classes";
import { RACES_OF_THE_WILD_FEATS } from "./races-of-the-wild/feats";
import { COMPLETE_ADVENTURER_PRESTIGE_CLASSES } from "./complete-adventurer/prestige-classes";
import { COMPLETE_ADVENTURER_FEATS } from "./complete-adventurer/feats";
import { COMPLETE_WARRIOR_PRESTIGE_CLASSES } from "./complete-warrior/prestige-classes";
import { COMPLETE_WARRIOR_FEATS } from "./complete-warrior/feats";

function dedupeById<T extends { id: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const item of items) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    out.push(item);
  }
  return out;
}

const NEW_EQUIPMENT = NEW_EQUIPMENT_JSON as unknown as EquipmentItem[];

export const ALL_RACES: RaceDefinition[] = dedupeById([...RACES, ...EBERRON_RACES, ...IRON_KINGDOMS_RACES, ...RACES_OF_STONE_RACES, ...RACES_OF_THE_WILD_RACES]);

export const ALL_CLASSES: ClassDefinition[] = dedupeById([
  ...Object.values(LEGACY_CLASSES),
  ...CORE_CLASSES,
  ...NEW_BASE_CLASSES,
  ...SORCERY_STEAM_CLASSES,
]);

export const ALL_PRESTIGE_CLASSES: PrestigeClassDefinition[] = dedupeById([
  ...CORE_PRESTIGE_CLASSES,
  ...EBERRON_PRESTIGE_CLASSES,
  ...SORCERY_STEAM_PRESTIGE_CLASSES,
  ...RACES_OF_STONE_PRESTIGE_CLASSES,
  ...RACES_OF_THE_WILD_PRESTIGE_CLASSES,
  ...COMPLETE_ADVENTURER_PRESTIGE_CLASSES,
  ...COMPLETE_WARRIOR_PRESTIGE_CLASSES,
]);

export const ALL_TEMPLATES: TemplateDefinition[] = dedupeById([...TEMPLATES, ...DESSARIN_TEMPLATES]);

export const ALL_RANDOM_TABLES: RandomTableDefinition[] = dedupeById([...DESSARIN_TABLES]);

export const ALL_BODY_MODIFICATIONS: BodyModificationDefinition[] = dedupeById([...BODY_MODIFICATIONS]);

export const ALL_SKILLS: SkillDefinition[] = dedupeById([...CORE_SKILLS, ...SORCERY_STEAM_SKILLS]);

export const ALL_FEATS: FeatDefinition[] = dedupeById([...CORE_FEATS, ...EBERRON_FEATS, ...IRON_KINGDOMS_FEATS, ...SORCERY_STEAM_FEATS, ...RACES_OF_STONE_FEATS, ...RACES_OF_THE_WILD_FEATS, ...COMPLETE_ADVENTURER_FEATS, ...COMPLETE_WARRIOR_FEATS]);

export const ALL_EQUIPMENT: EquipmentItem[] = dedupeById([...CORE_EQUIPMENT, ...NEW_EQUIPMENT, ...SORCERY_STEAM_FIREARM_EQUIPMENT, ...SORCERY_STEAM_ALCHEMICAL_EQUIPMENT]);

export const ALL_MAGIC_ITEMS: MagicItemDefinition[] = dedupeById([...CORE_MAGIC_ITEMS, ...SORCERY_STEAM_FIREARM_MAGIC_ITEMS]);

export { RACES, TEMPLATES, LEGACY_CLASSES, CORE_CLASSES, NEW_BASE_CLASSES, CORE_PRESTIGE_CLASSES, CORE_SKILLS, CORE_FEATS, CORE_EQUIPMENT, NEW_EQUIPMENT, CORE_MAGIC_ITEMS, EBERRON_RACES, EBERRON_PRESTIGE_CLASSES, EBERRON_FEATS, IRON_KINGDOMS_RACES, IRON_KINGDOMS_FEATS, SORCERY_STEAM_CLASSES, SORCERY_STEAM_PRESTIGE_CLASSES, SORCERY_STEAM_SKILLS, SORCERY_STEAM_FEATS, SORCERY_STEAM_FIREARM_EQUIPMENT, SORCERY_STEAM_ALCHEMICAL_EQUIPMENT, SORCERY_STEAM_FIREARM_MAGIC_ITEMS, DESSARIN_TEMPLATES, DESSARIN_TABLES, BODY_MODIFICATIONS, RACES_OF_STONE_RACES, RACES_OF_STONE_PRESTIGE_CLASSES, RACES_OF_STONE_FEATS, RACES_OF_THE_WILD_RACES, RACES_OF_THE_WILD_PRESTIGE_CLASSES, RACES_OF_THE_WILD_FEATS, COMPLETE_ADVENTURER_PRESTIGE_CLASSES, COMPLETE_ADVENTURER_FEATS, COMPLETE_WARRIOR_PRESTIGE_CLASSES, COMPLETE_WARRIOR_FEATS };
