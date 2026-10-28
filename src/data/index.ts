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
 *
 * Also merged 2026-10-27 (Batch 3 of the "all original books"
 * program): the Complete Arcane, Complete Divine, and Book of
 * Exalted Deeds packs. All three books are generic D&D 3.5
 * supplements whose records carry ruleset "core". Complete Arcane
 * adds the Wu Jen base class (Warlock and Warmage already existed
 * in the recovered core data), 19 prestige classes, and 64 feats;
 * Complete Divine adds the Shugenja base class (Favored Soul and
 * Spirit Shaman already existed), 24 prestige classes, and 37
 * feats; Book of Exalted Deeds adds 22 prestige classes, 51 feats,
 * and 2 templates (Saint and Sanctified Creature). See the
 * REBUILD-NOTES.md Batch 3 addendum for the base-class verification
 * results (including the discrepancies found) and the duplicates
 * skipped.
 *
 * Also merged 2026-10-27 (Batch 4 of the "all original books"
 * program): the Frostburn, Sandstorm, and Miniatures Handbook
 * packs. All three books are generic D&D 3.5 supplements whose
 * records carry ruleset "core". Frostburn adds 5 races, 10
 * prestige classes, and 32 feats; Sandstorm adds 2 races, 6
 * prestige classes, 24 feats, and 3 templates (Half-Janni, Dry
 * Lich, Dustform Creature); Miniatures Handbook adds the Healer
 * base class (which was missing from the recovered data), 7
 * prestige classes, and 20 feats (twelve of its thirty-two
 * feats duplicate records already in the dataset — reprints
 * the Complete books carried — and are skipped). See the REBUILD-NOTES.md
 * Batch 4 addendum for the base-class verification results
 * (including the Marshal discrepancies found) and the judgment
 * calls documented there.
 *
 * Also merged 2026-10-27 (Batch 5 of the "all original books"
 * program): the Player's Handbook II, Races of the Dragon, and
 * Races of Eberron packs. Player's Handbook II and Races of the
 * Dragon records carry ruleset "core"; Races of Eberron records
 * carry ruleset "eberron" (the book belongs under the Eberron
 * toggle, like the Eberron Campaign Setting pack). Player's
 * Handbook II adds 105 feats and no classes (its four base
 * classes — Beguiler, Dragon Shaman, Duskblade, Knight — already
 * existed in the recovered core data, and the book has no prestige
 * classes). Races of the Dragon adds 2 races (spellscale, kobold),
 * 2 templates (dragonborn of Bahamut, modeled as a template with
 * three draconic-aspect forms, and the draconic creature
 * template), 5 prestige classes, and 25 feats (nine draconic
 * feats duplicate Complete Arcane records and are skipped).
 * Races of Eberron adds 5 races (drow, goblin, hobgoblin,
 * bugbear, orc), 8 prestige classes, and 62 feats (Adamantine
 * Body and Mithral Body duplicate Eberron Campaign Setting
 * records and are skipped). Fiendish Codex I was checked for a
 * playable template and has none. See the REBUILD-NOTES.md
 * Batch 5 addendum for the base-class verification results
 * (including the discrepancies found), the duplicates skipped,
 * and the judgment calls documented there.
 *
 * Also merged 2026-10-27 (Batch 6 of the "all original books"
 * program): the four remaining Complete books — Complete
 * Champion, Complete Mage, Complete Psionic, and Complete
 * Scoundrel. All four are generic D&D 3.5 supplements whose
 * records carry ruleset "core". Complete Champion adds 11
 * prestige classes and 42 feats. Complete Mage adds 11 prestige
 * classes and 65 feats. Complete Psionic adds the book's three
 * base classes (Ardent, Divine Mind, Lurk — missing from the
 * recovered core data), 8 prestige classes, 95 feats (six of the
 * book's feat printings duplicate Races of Stone / Races of
 * Eberron records and are skipped; the book's host feat Spiritual
 * Force is a different feat from the Races of Eberron feat of the
 * same name and is kept under a suffixed id), and 1 race
 * (Synad). Complete Scoundrel adds 13 prestige classes and 55
 * feats (Improved Familiar duplicates the Complete Warrior
 * record and is skipped; the book's 42 skill tricks are a
 * separate mechanic, out of scope and documented in the notes).
 * None of the four books adds a template or a new skill. See the
 * REBUILD-NOTES.md Batch 6 addendum for the base-class
 * verification results (no discrepancies found in the three
 * Psionic classes — they are new records), the duplicates
 * skipped, and the judgment calls documented there.
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
import { COMPLETE_ARCANE_CLASSES } from "./complete-arcane/classes";
import { COMPLETE_ARCANE_PRESTIGE_CLASSES } from "./complete-arcane/prestige-classes";
import { COMPLETE_ARCANE_FEATS } from "./complete-arcane/feats";
import { COMPLETE_DIVINE_CLASSES } from "./complete-divine/classes";
import { COMPLETE_DIVINE_PRESTIGE_CLASSES } from "./complete-divine/prestige-classes";
import { COMPLETE_DIVINE_FEATS } from "./complete-divine/feats";
import { BOOK_OF_EXALTED_DEEDS_PRESTIGE_CLASSES } from "./book-of-exalted-deeds/prestige-classes";
import { BOOK_OF_EXALTED_DEEDS_FEATS } from "./book-of-exalted-deeds/feats";
import { BOOK_OF_EXALTED_DEEDS_TEMPLATES } from "./book-of-exalted-deeds/templates";
import { FROSTBURN_RACES } from "./frostburn/races";
import { FROSTBURN_PRESTIGE_CLASSES } from "./frostburn/prestige-classes";
import { FROSTBURN_FEATS } from "./frostburn/feats";
import { SANDSTORM_RACES } from "./sandstorm/races";
import { SANDSTORM_PRESTIGE_CLASSES } from "./sandstorm/prestige-classes";
import { SANDSTORM_FEATS } from "./sandstorm/feats";
import { SANDSTORM_TEMPLATES } from "./sandstorm/templates";
import { MINIATURES_HANDBOOK_CLASSES } from "./miniatures-handbook/classes";
import { MINIATURES_HANDBOOK_PRESTIGE_CLASSES } from "./miniatures-handbook/prestige-classes";
import { MINIATURES_HANDBOOK_FEATS } from "./miniatures-handbook/feats";
import { PLAYERS_HANDBOOK_II_FEATS } from "./players-handbook-ii/feats";
import { RACES_OF_THE_DRAGON_RACES } from "./races-of-the-dragon/races";
import { RACES_OF_THE_DRAGON_TEMPLATES } from "./races-of-the-dragon/templates";
import { RACES_OF_THE_DRAGON_PRESTIGE_CLASSES } from "./races-of-the-dragon/prestige-classes";
import { RACES_OF_THE_DRAGON_FEATS } from "./races-of-the-dragon/feats";
import { RACES_OF_EBERRON_RACES } from "./races-of-eberron/races";
import { RACES_OF_EBERRON_PRESTIGE_CLASSES } from "./races-of-eberron/prestige-classes";
import { RACES_OF_EBERRON_FEATS } from "./races-of-eberron/feats";
import { COMPLETE_CHAMPION_PRESTIGE_CLASSES } from "./complete-champion/prestige-classes";
import { COMPLETE_CHAMPION_FEATS } from "./complete-champion/feats";
import { COMPLETE_MAGE_PRESTIGE_CLASSES } from "./complete-mage/prestige-classes";
import { COMPLETE_MAGE_FEATS } from "./complete-mage/feats";
import { COMPLETE_PSIONIC_CLASSES } from "./complete-psionic/classes";
import { COMPLETE_PSIONIC_PRESTIGE_CLASSES } from "./complete-psionic/prestige-classes";
import { COMPLETE_PSIONIC_FEATS } from "./complete-psionic/feats";
import { COMPLETE_PSIONIC_RACES } from "./complete-psionic/races";
import { COMPLETE_SCOUNDREL_PRESTIGE_CLASSES } from "./complete-scoundrel/prestige-classes";
import { COMPLETE_SCOUNDREL_FEATS } from "./complete-scoundrel/feats";

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

export const ALL_RACES: RaceDefinition[] = dedupeById([...RACES, ...EBERRON_RACES, ...IRON_KINGDOMS_RACES, ...RACES_OF_STONE_RACES, ...RACES_OF_THE_WILD_RACES, ...FROSTBURN_RACES, ...SANDSTORM_RACES, ...RACES_OF_THE_DRAGON_RACES, ...RACES_OF_EBERRON_RACES, ...COMPLETE_PSIONIC_RACES]);

export const ALL_CLASSES: ClassDefinition[] = dedupeById([
  ...Object.values(LEGACY_CLASSES),
  ...CORE_CLASSES,
  ...NEW_BASE_CLASSES,
  ...SORCERY_STEAM_CLASSES,
  ...COMPLETE_ARCANE_CLASSES,
  ...COMPLETE_DIVINE_CLASSES,
  ...MINIATURES_HANDBOOK_CLASSES,
  ...COMPLETE_PSIONIC_CLASSES,
]);

export const ALL_PRESTIGE_CLASSES: PrestigeClassDefinition[] = dedupeById([
  ...CORE_PRESTIGE_CLASSES,
  ...EBERRON_PRESTIGE_CLASSES,
  ...SORCERY_STEAM_PRESTIGE_CLASSES,
  ...RACES_OF_STONE_PRESTIGE_CLASSES,
  ...RACES_OF_THE_WILD_PRESTIGE_CLASSES,
  ...COMPLETE_ADVENTURER_PRESTIGE_CLASSES,
  ...COMPLETE_WARRIOR_PRESTIGE_CLASSES,
  ...COMPLETE_ARCANE_PRESTIGE_CLASSES,
  ...COMPLETE_DIVINE_PRESTIGE_CLASSES,
  ...BOOK_OF_EXALTED_DEEDS_PRESTIGE_CLASSES,
  ...FROSTBURN_PRESTIGE_CLASSES,
  ...SANDSTORM_PRESTIGE_CLASSES,
  ...MINIATURES_HANDBOOK_PRESTIGE_CLASSES,
  ...RACES_OF_THE_DRAGON_PRESTIGE_CLASSES,
  ...RACES_OF_EBERRON_PRESTIGE_CLASSES,
  ...COMPLETE_CHAMPION_PRESTIGE_CLASSES,
  ...COMPLETE_MAGE_PRESTIGE_CLASSES,
  ...COMPLETE_PSIONIC_PRESTIGE_CLASSES,
  ...COMPLETE_SCOUNDREL_PRESTIGE_CLASSES,
]);

export const ALL_TEMPLATES: TemplateDefinition[] = dedupeById([...TEMPLATES, ...DESSARIN_TEMPLATES, ...BOOK_OF_EXALTED_DEEDS_TEMPLATES, ...SANDSTORM_TEMPLATES, ...RACES_OF_THE_DRAGON_TEMPLATES]);

export const ALL_RANDOM_TABLES: RandomTableDefinition[] = dedupeById([...DESSARIN_TABLES]);

export const ALL_BODY_MODIFICATIONS: BodyModificationDefinition[] = dedupeById([...BODY_MODIFICATIONS]);

export const ALL_SKILLS: SkillDefinition[] = dedupeById([...CORE_SKILLS, ...SORCERY_STEAM_SKILLS]);

export const ALL_FEATS: FeatDefinition[] = dedupeById([...CORE_FEATS, ...EBERRON_FEATS, ...IRON_KINGDOMS_FEATS, ...SORCERY_STEAM_FEATS, ...RACES_OF_STONE_FEATS, ...RACES_OF_THE_WILD_FEATS, ...COMPLETE_ADVENTURER_FEATS, ...COMPLETE_WARRIOR_FEATS, ...COMPLETE_ARCANE_FEATS, ...COMPLETE_DIVINE_FEATS, ...BOOK_OF_EXALTED_DEEDS_FEATS, ...FROSTBURN_FEATS, ...SANDSTORM_FEATS, ...MINIATURES_HANDBOOK_FEATS, ...PLAYERS_HANDBOOK_II_FEATS, ...RACES_OF_THE_DRAGON_FEATS, ...RACES_OF_EBERRON_FEATS, ...COMPLETE_CHAMPION_FEATS, ...COMPLETE_MAGE_FEATS, ...COMPLETE_PSIONIC_FEATS, ...COMPLETE_SCOUNDREL_FEATS]);

export const ALL_EQUIPMENT: EquipmentItem[] = dedupeById([...CORE_EQUIPMENT, ...NEW_EQUIPMENT, ...SORCERY_STEAM_FIREARM_EQUIPMENT, ...SORCERY_STEAM_ALCHEMICAL_EQUIPMENT]);

export const ALL_MAGIC_ITEMS: MagicItemDefinition[] = dedupeById([...CORE_MAGIC_ITEMS, ...SORCERY_STEAM_FIREARM_MAGIC_ITEMS]);

export { RACES, TEMPLATES, LEGACY_CLASSES, CORE_CLASSES, NEW_BASE_CLASSES, CORE_PRESTIGE_CLASSES, CORE_SKILLS, CORE_FEATS, CORE_EQUIPMENT, NEW_EQUIPMENT, CORE_MAGIC_ITEMS, EBERRON_RACES, EBERRON_PRESTIGE_CLASSES, EBERRON_FEATS, IRON_KINGDOMS_RACES, IRON_KINGDOMS_FEATS, SORCERY_STEAM_CLASSES, SORCERY_STEAM_PRESTIGE_CLASSES, SORCERY_STEAM_SKILLS, SORCERY_STEAM_FEATS, SORCERY_STEAM_FIREARM_EQUIPMENT, SORCERY_STEAM_ALCHEMICAL_EQUIPMENT, SORCERY_STEAM_FIREARM_MAGIC_ITEMS, DESSARIN_TEMPLATES, DESSARIN_TABLES, BODY_MODIFICATIONS, RACES_OF_STONE_RACES, RACES_OF_STONE_PRESTIGE_CLASSES, RACES_OF_STONE_FEATS, RACES_OF_THE_WILD_RACES, RACES_OF_THE_WILD_PRESTIGE_CLASSES, RACES_OF_THE_WILD_FEATS, COMPLETE_ADVENTURER_PRESTIGE_CLASSES, COMPLETE_ADVENTURER_FEATS, COMPLETE_WARRIOR_PRESTIGE_CLASSES, COMPLETE_WARRIOR_FEATS, COMPLETE_ARCANE_CLASSES, COMPLETE_ARCANE_PRESTIGE_CLASSES, COMPLETE_ARCANE_FEATS, COMPLETE_DIVINE_CLASSES, COMPLETE_DIVINE_PRESTIGE_CLASSES, COMPLETE_DIVINE_FEATS, BOOK_OF_EXALTED_DEEDS_PRESTIGE_CLASSES, BOOK_OF_EXALTED_DEEDS_FEATS, BOOK_OF_EXALTED_DEEDS_TEMPLATES, FROSTBURN_RACES, FROSTBURN_PRESTIGE_CLASSES, FROSTBURN_FEATS, SANDSTORM_RACES, SANDSTORM_PRESTIGE_CLASSES, SANDSTORM_FEATS, SANDSTORM_TEMPLATES, MINIATURES_HANDBOOK_CLASSES, MINIATURES_HANDBOOK_PRESTIGE_CLASSES, MINIATURES_HANDBOOK_FEATS, PLAYERS_HANDBOOK_II_FEATS, RACES_OF_THE_DRAGON_RACES, RACES_OF_THE_DRAGON_TEMPLATES, RACES_OF_THE_DRAGON_PRESTIGE_CLASSES, RACES_OF_THE_DRAGON_FEATS, RACES_OF_EBERRON_RACES, RACES_OF_EBERRON_PRESTIGE_CLASSES, RACES_OF_EBERRON_FEATS, COMPLETE_CHAMPION_PRESTIGE_CLASSES, COMPLETE_CHAMPION_FEATS, COMPLETE_MAGE_PRESTIGE_CLASSES, COMPLETE_MAGE_FEATS, COMPLETE_PSIONIC_CLASSES, COMPLETE_PSIONIC_PRESTIGE_CLASSES, COMPLETE_PSIONIC_FEATS, COMPLETE_PSIONIC_RACES, COMPLETE_SCOUNDREL_PRESTIGE_CLASSES, COMPLETE_SCOUNDREL_FEATS };
