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
 *
 * Also merged 2026-10-27 (Batch 7 of the "all original books"
 * program): the last two Races series books — Races of Destiny
 * and Races of Faerun. Both carry ruleset "core" (Races of
 * Faerun is a Forgotten Realms book, but the app's sorting
 * scheme has no Faerun toggle; it is also a 3.0-era book,
 * recorded in the app's 3.5 conventions). Races of Destiny adds
 * 10 races, 7 prestige classes, and 35 feats. Races of Faerun
 * adds 11 races, 2 templates, 9 prestige classes, and 78 feats: most of its subrace
 * entries print no standalone trait list (they state deltas on
 * the Player's Handbook races, refer to the Forgotten Realms
 * Campaign Setting, or print no mechanics), and per the
 * established delta precedent those are documented in the
 * REBUILD-NOTES.md Batch 7 addendum rather than converted; its
 * aasimar and tiefling are duplicates of the Races of Destiny
 * records, its goblin, hobgoblin, bugbear, and centaur
 * duplicate earlier packs, its lycanthrope template duplicates
 * the core record, and four of its feats duplicate earlier
 * records (one more, Staggering Strike, is a different feat
 * from Complete Adventurer's and is kept under a suffixed id).
 * Neither book adds a base class or a new skill.
 *
 * Also merged 2026-10-28 (Batch 8a of the "all original books"
 * program): the first half of the sourcebooks shelf — Tome of
 * Battle, Expanded Psionics Handbook, Unearthed Arcana, and
 * Tome of Magic, all ruleset "core". Tome of Battle adds 3
 * base classes (Crusader, Swordsage, Warblade), 1 skill
 * (Martial Lore), 8 prestige classes, and 38 feats; its
 * maneuvers and stances are a system the app does not model.
 * Expanded Psionics adds 9 races, 4 base classes (Psion,
 * Psychic Warrior, Soulknife, Wilder — none of the four was
 * in the recovered data), 4 skills (Autohypnosis, Knowledge
 * (psionics), Psicraft, Use Psionic Device), 9 prestige
 * classes, and 84 feats (one duplicate skipped: Open Minded,
 * already in from Complete Adventurer); its powers are not
 * modeled. Unearthed Arcana adds only its 17 Spelltouched
 * feats — the book is a variant-systems toolbox, and its
 * bloodlines (37), racial paragon classes (11), traits (35),
 * flaws (13), weapon-group feats, generic and prestige-class
 * conversions, and gestalt rules are documented as omitted
 * systems in the REBUILD-NOTES.md Batch 8a addendum rather
 * than forced into app types. Tome of Magic adds 3 base
 * classes (Binder, Shadowcaster, Truenamer), 1 skill
 * (Truespeak), 15 prestige classes, and 56 feats; its
 * vestiges, mysteries, and utterances are not modeled. The
 * Tome of Magic PDF is image-only, so that pack was built
 * from OCR with ambiguous table cells settled against page
 * images. See the REBUILD-NOTES.md Batch 8a addendum for the
 * per-book counts and name lists, the base-class
 * verification results, the duplicates skipped, and the
 * judgment calls.
 *
 * Also merged 2026-10-28 (Batch 8b of the "all original books"
 * program): the second half of the sourcebooks shelf — Weapons
 * of Legacy, Heroes of Battle, Dragon Magic, Ghostwalk, Book of
 * Vile Darkness, and Exemplars of Evil, all ruleset "core".
 * Weapons of Legacy adds 1 prestige class (Legacy Champion)
 * and 11 feats; its 49 legacy items, legacy rituals, and
 * founding-legacies ability menus are a system the app does
 * not model. Heroes of Battle adds 4 prestige classes and 17
 * feats; its 15 teamwork benefits and commander ratings/auras
 * are not modeled. Dragon Magic adds 1 base class (the
 * Dragonfire Adept — checked and not in the recovered data),
 * 7 prestige classes, and 35 feats (Draconic Heritage skipped:
 * the book's printing is a reprint of the Complete Arcane
 * feat); its invocations, breath effects, and 9 delta subraces
 * are not modeled. Ghostwalk adds 2 base classes (Eidolon,
 * Eidoloncer — neither in the recovered data), 4 prestige
 * classes, 69 feats, and 1 template (the Ghostwalk ghost);
 * its Manifest setting material is not modeled. Book of Vile
 * Darkness adds 2 races (Vashar, Jerren), 17 prestige classes,
 * and 26 feats (Corrupt Spell and Ur-Priest skipped: both are
 * in from Complete Divine). Exemplars of Evil adds 16 feats
 * (Evil Brand skipped: the same feat is in from Book of Vile
 * Darkness); its 9 alternative class features are not modeled.
 * Ghostwalk and Book of Vile Darkness are 3.0-era books,
 * recorded in 3.5 conventions, with Ghostwalk's official 3.5
 * update applied where it speaks. See the REBUILD-NOTES.md
 * Batch 8b addendum for the per-book counts and name lists,
 * the base-class verification results, the duplicates
 * skipped, and the judgment calls.
 *
 * Also merged 2026-10-28 (Batch 9 of the "all original books"
 * program): the monster books — Monster Manual III, IV, and
 * V, Fiendish Codex I (Abyssal Heritor feats only) and II, and
 * the two Iron Kingdoms Monsternomicons (ruleset
 * "iron_kingdoms"; the rest "core"). Monster Manual II yields
 * no records: it never prints a level adjustment. Monster
 * Manual III adds 18 races, 3 templates, and 3 feats (the
 * Eberron races Changeling, Shifter, and Warforged skipped as
 * duplicates). Monster Manual IV adds 1 race (Varag — the
 * trait list's 40 ft speed is followed over the stat block's
 * 60 ft), 1 template, and 10 feats. Monster Manual V adds 1
 * race (Jaebrin), 7 templates (the six god-blooded templates
 * and the Xorvintaal Exarch), and 7 feats. Fiendish Codex I
 * adds its 13 Abyssal Heritor feats (feat text followed over
 * Table 4-1 where they conflict). Fiendish Codex II adds 1
 * race (Hellbred), 27 feats, and 4 prestige classes; its
 * Divine Justice is a different feat from the Player's
 * Handbook II feat of the same name, recorded as
 * divine-justice-fc2 with cross-notes both ways.
 * Monsternomicon vol. 2 adds 1 race (Efaarit), 2 templates, 2
 * base classes printed as full 20-level classes in that book
 * (Mortitheurge, Paingiver), 1 skill (Profession (torturer)),
 * and 1 prestige class (Extoller). Monsternomicon vol. 1 adds
 * 1 feat (Stronghammer Smith) and 3 prestige classes
 * (Adventuring Scholar, Bone Grinder, Monster Hunter); its
 * Playable Races appendix's five peoples (Gobber, Bogrin,
 * Trollkin, Ogrun, Nyss) duplicate the Iron Kingdoms pack's
 * records for the same races and were skipped, and its
 * dwarves, elves, and half-elves are PH-delta
 * presentations, not converted. Both
 * Monsternomicons are 3.0-era texts recorded in 3.5
 * conventions. See the REBUILD-NOTES.md Batch 9 addendum for
 * the per-book counts and name lists, the duplicates skipped,
 * the omissions with counts, and the judgment calls.
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
import { RACES_OF_DESTINY_RACES } from "./races-of-destiny/races";
import { RACES_OF_DESTINY_PRESTIGE_CLASSES } from "./races-of-destiny/prestige-classes";
import { RACES_OF_DESTINY_FEATS } from "./races-of-destiny/feats";
import { RACES_OF_FAERUN_RACES } from "./races-of-faerun/races";
import { RACES_OF_FAERUN_TEMPLATES } from "./races-of-faerun/templates";
import { RACES_OF_FAERUN_PRESTIGE_CLASSES } from "./races-of-faerun/prestige-classes";
import { RACES_OF_FAERUN_FEATS } from "./races-of-faerun/feats";
import { TOME_OF_BATTLE_CLASSES } from "./tome-of-battle/classes";
import { TOME_OF_BATTLE_SKILLS } from "./tome-of-battle/skills";
import { TOME_OF_BATTLE_PRESTIGE_CLASSES } from "./tome-of-battle/prestige-classes";
import { TOME_OF_BATTLE_FEATS } from "./tome-of-battle/feats";
import { EXPANDED_PSIONICS_RACES } from "./expanded-psionics/races";
import { EXPANDED_PSIONICS_CLASSES } from "./expanded-psionics/classes";
import { EXPANDED_PSIONICS_SKILLS } from "./expanded-psionics/skills";
import { EXPANDED_PSIONICS_PRESTIGE_CLASSES } from "./expanded-psionics/prestige-classes";
import { EXPANDED_PSIONICS_FEATS } from "./expanded-psionics/feats";
import { UNEARTHED_ARCANA_FEATS } from "./unearthed-arcana/feats";
import { TOME_OF_MAGIC_CLASSES } from "./tome-of-magic/classes";
import { TOME_OF_MAGIC_SKILLS } from "./tome-of-magic/skills";
import { TOME_OF_MAGIC_PRESTIGE_CLASSES } from "./tome-of-magic/prestige-classes";
import { TOME_OF_MAGIC_FEATS } from "./tome-of-magic/feats";
import { WEAPONS_OF_LEGACY_FEATS } from "./weapons-of-legacy/feats";
import { WEAPONS_OF_LEGACY_PRESTIGE_CLASSES } from "./weapons-of-legacy/prestige-classes";
import { HEROES_OF_BATTLE_FEATS } from "./heroes-of-battle/feats";
import { HEROES_OF_BATTLE_PRESTIGE_CLASSES } from "./heroes-of-battle/prestige-classes";
import { DRAGON_MAGIC_CLASSES } from "./dragon-magic/classes";
import { DRAGON_MAGIC_PRESTIGE_CLASSES } from "./dragon-magic/prestige-classes";
import { DRAGON_MAGIC_FEATS } from "./dragon-magic/feats";
import { GHOSTWALK_CLASSES } from "./ghostwalk/classes";
import { GHOSTWALK_PRESTIGE_CLASSES } from "./ghostwalk/prestige-classes";
import { GHOSTWALK_FEATS } from "./ghostwalk/feats";
import { GHOSTWALK_TEMPLATES } from "./ghostwalk/templates";
import { BOOK_OF_VILE_DARKNESS_RACES } from "./book-of-vile-darkness/races";
import { BOOK_OF_VILE_DARKNESS_FEATS } from "./book-of-vile-darkness/feats";
import { BOOK_OF_VILE_DARKNESS_PRESTIGE_CLASSES } from "./book-of-vile-darkness/prestige-classes";
import { EXEMPLARS_OF_EVIL_FEATS } from "./exemplars-of-evil/feats";
import { MONSTER_MANUAL_III_RACES } from "./monster-manual-iii/races";
import { MONSTER_MANUAL_III_TEMPLATES } from "./monster-manual-iii/templates";
import { MONSTER_MANUAL_III_FEATS } from "./monster-manual-iii/feats";
import { MONSTER_MANUAL_IV_RACES } from "./monster-manual-iv/races";
import { MONSTER_MANUAL_IV_TEMPLATES } from "./monster-manual-iv/templates";
import { MONSTER_MANUAL_V_RACES } from "./monster-manual-v/races";
import { MONSTER_MANUAL_V_TEMPLATES } from "./monster-manual-v/templates";
import { MONSTER_MANUAL_V_FEATS } from "./monster-manual-v/feats";
import { MONSTER_MANUAL_IV_FEATS } from "./monster-manual-iv/feats";
import { FIENDISH_CODEX_I_FEATS } from "./fiendish-codex-i/feats";
import { FIENDISH_CODEX_II_RACES } from "./fiendish-codex-ii/races";
import { FIENDISH_CODEX_II_FEATS } from "./fiendish-codex-ii/feats";
import { FIENDISH_CODEX_II_PRESTIGE_CLASSES } from "./fiendish-codex-ii/prestige-classes";
import { MONSTERNOMICON_RACES } from "./monsternomicon/races";
import { MONSTERNOMICON_MN1_FEATS } from "./monsternomicon/mn1-feats";
import { MONSTERNOMICON_MN1_PRESTIGE_CLASSES } from "./monsternomicon/mn1-prestige-classes";
import { MONSTERNOMICON_TEMPLATES } from "./monsternomicon/templates";
import { MONSTERNOMICON_CLASSES } from "./monsternomicon/classes";
import { MONSTERNOMICON_SKILLS } from "./monsternomicon/skills";
import { MONSTERNOMICON_PRESTIGE_CLASSES } from "./monsternomicon/prestige-classes";
import { LIBER_MECHANIKA_CLASSES } from "./liber-mechanika/classes";
import { LIBER_MECHANIKA_PRESTIGE_CLASSES } from "./liber-mechanika/prestige-classes";
import { LIBER_MECHANIKA_FEATS } from "./liber-mechanika/feats";
import { LIBER_MECHANIKA_EQUIPMENT } from "./liber-mechanika/equipment";
import { LOCK_AND_LOAD_EQUIPMENT } from "./lock-and-load/equipment";
import { LOCK_AND_LOAD_MAGIC_ITEMS } from "./lock-and-load/magic-items";
import { MAGIC_ITEM_COMPENDIUM_ARMOR_PROPERTIES } from "./magic-item-compendium/armor-properties";
import { MAGIC_ITEM_COMPENDIUM_WEAPON_PROPERTIES } from "./magic-item-compendium/weapon-properties";
import { MAGIC_ITEM_COMPENDIUM_AUGMENT_CRYSTALS } from "./magic-item-compendium/augment-crystals";
import { MAGIC_ITEM_COMPENDIUM_SPECIFIC_ARMOR } from "./magic-item-compendium/specific-armor";
import { MAGIC_ITEM_COMPENDIUM_SPECIFIC_WEAPONS } from "./magic-item-compendium/specific-weapons";
import { MAGIC_ITEM_COMPENDIUM_CLOTHING } from "./magic-item-compendium/clothing";
import { MAGIC_ITEM_COMPENDIUM_TOOLS } from "./magic-item-compendium/tools";
import { MAGIC_ITEM_COMPENDIUM_ITEM_SETS } from "./magic-item-compendium/item-sets";

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

export const ALL_RACES: RaceDefinition[] = dedupeById([...RACES, ...EBERRON_RACES, ...IRON_KINGDOMS_RACES, ...RACES_OF_STONE_RACES, ...RACES_OF_THE_WILD_RACES, ...FROSTBURN_RACES, ...SANDSTORM_RACES, ...RACES_OF_THE_DRAGON_RACES, ...RACES_OF_EBERRON_RACES, ...COMPLETE_PSIONIC_RACES, ...RACES_OF_DESTINY_RACES, ...RACES_OF_FAERUN_RACES, ...EXPANDED_PSIONICS_RACES, ...BOOK_OF_VILE_DARKNESS_RACES, ...MONSTER_MANUAL_III_RACES, ...MONSTER_MANUAL_IV_RACES, ...MONSTER_MANUAL_V_RACES, ...FIENDISH_CODEX_II_RACES, ...MONSTERNOMICON_RACES]);

export const ALL_CLASSES: ClassDefinition[] = dedupeById([
  ...Object.values(LEGACY_CLASSES),
  ...CORE_CLASSES,
  ...NEW_BASE_CLASSES,
  ...SORCERY_STEAM_CLASSES,
  ...COMPLETE_ARCANE_CLASSES,
  ...COMPLETE_DIVINE_CLASSES,
  ...MINIATURES_HANDBOOK_CLASSES,
  ...COMPLETE_PSIONIC_CLASSES,
  ...TOME_OF_BATTLE_CLASSES,
  ...EXPANDED_PSIONICS_CLASSES,
  ...TOME_OF_MAGIC_CLASSES,
  ...GHOSTWALK_CLASSES,
  ...DRAGON_MAGIC_CLASSES,
  ...MONSTERNOMICON_CLASSES,
  ...LIBER_MECHANIKA_CLASSES,
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
  ...RACES_OF_DESTINY_PRESTIGE_CLASSES,
  ...RACES_OF_FAERUN_PRESTIGE_CLASSES,
  ...TOME_OF_BATTLE_PRESTIGE_CLASSES,
  ...EXPANDED_PSIONICS_PRESTIGE_CLASSES,
  ...TOME_OF_MAGIC_PRESTIGE_CLASSES,
  ...WEAPONS_OF_LEGACY_PRESTIGE_CLASSES,
  ...HEROES_OF_BATTLE_PRESTIGE_CLASSES,
  ...DRAGON_MAGIC_PRESTIGE_CLASSES,
  ...GHOSTWALK_PRESTIGE_CLASSES,
  ...BOOK_OF_VILE_DARKNESS_PRESTIGE_CLASSES,
  ...FIENDISH_CODEX_II_PRESTIGE_CLASSES,
  ...MONSTERNOMICON_PRESTIGE_CLASSES,
  ...MONSTERNOMICON_MN1_PRESTIGE_CLASSES,
  ...LIBER_MECHANIKA_PRESTIGE_CLASSES,
]);

export const ALL_TEMPLATES: TemplateDefinition[] = dedupeById([...TEMPLATES, ...DESSARIN_TEMPLATES, ...BOOK_OF_EXALTED_DEEDS_TEMPLATES, ...SANDSTORM_TEMPLATES, ...RACES_OF_THE_DRAGON_TEMPLATES, ...RACES_OF_FAERUN_TEMPLATES, ...GHOSTWALK_TEMPLATES, ...MONSTER_MANUAL_III_TEMPLATES, ...MONSTER_MANUAL_IV_TEMPLATES, ...MONSTER_MANUAL_V_TEMPLATES, ...MONSTERNOMICON_TEMPLATES]);

export const ALL_RANDOM_TABLES: RandomTableDefinition[] = dedupeById([...DESSARIN_TABLES]);

export const ALL_BODY_MODIFICATIONS: BodyModificationDefinition[] = dedupeById([...BODY_MODIFICATIONS]);

export const ALL_SKILLS: SkillDefinition[] = dedupeById([...CORE_SKILLS, ...SORCERY_STEAM_SKILLS, ...TOME_OF_BATTLE_SKILLS, ...EXPANDED_PSIONICS_SKILLS, ...TOME_OF_MAGIC_SKILLS, ...MONSTERNOMICON_SKILLS]);

export const ALL_FEATS: FeatDefinition[] = dedupeById([...CORE_FEATS, ...EBERRON_FEATS, ...IRON_KINGDOMS_FEATS, ...SORCERY_STEAM_FEATS, ...RACES_OF_STONE_FEATS, ...RACES_OF_THE_WILD_FEATS, ...COMPLETE_ADVENTURER_FEATS, ...COMPLETE_WARRIOR_FEATS, ...COMPLETE_ARCANE_FEATS, ...COMPLETE_DIVINE_FEATS, ...BOOK_OF_EXALTED_DEEDS_FEATS, ...FROSTBURN_FEATS, ...SANDSTORM_FEATS, ...MINIATURES_HANDBOOK_FEATS, ...PLAYERS_HANDBOOK_II_FEATS, ...RACES_OF_THE_DRAGON_FEATS, ...RACES_OF_EBERRON_FEATS, ...COMPLETE_CHAMPION_FEATS, ...COMPLETE_MAGE_FEATS, ...COMPLETE_PSIONIC_FEATS, ...COMPLETE_SCOUNDREL_FEATS, ...RACES_OF_DESTINY_FEATS, ...RACES_OF_FAERUN_FEATS, ...TOME_OF_BATTLE_FEATS, ...EXPANDED_PSIONICS_FEATS, ...UNEARTHED_ARCANA_FEATS, ...TOME_OF_MAGIC_FEATS, ...WEAPONS_OF_LEGACY_FEATS, ...HEROES_OF_BATTLE_FEATS, ...DRAGON_MAGIC_FEATS, ...GHOSTWALK_FEATS, ...BOOK_OF_VILE_DARKNESS_FEATS, ...EXEMPLARS_OF_EVIL_FEATS, ...MONSTER_MANUAL_III_FEATS, ...MONSTER_MANUAL_IV_FEATS, ...FIENDISH_CODEX_I_FEATS, ...FIENDISH_CODEX_II_FEATS, ...MONSTER_MANUAL_V_FEATS, ...MONSTERNOMICON_MN1_FEATS, ...LIBER_MECHANIKA_FEATS]);

export const ALL_EQUIPMENT: EquipmentItem[] = dedupeById([...CORE_EQUIPMENT, ...NEW_EQUIPMENT, ...SORCERY_STEAM_FIREARM_EQUIPMENT, ...SORCERY_STEAM_ALCHEMICAL_EQUIPMENT, ...LIBER_MECHANIKA_EQUIPMENT, ...LOCK_AND_LOAD_EQUIPMENT, ...MAGIC_ITEM_COMPENDIUM_SPECIFIC_ARMOR, ...MAGIC_ITEM_COMPENDIUM_SPECIFIC_WEAPONS]);

export const ALL_MAGIC_ITEMS: MagicItemDefinition[] = dedupeById([...CORE_MAGIC_ITEMS, ...SORCERY_STEAM_FIREARM_MAGIC_ITEMS, ...LOCK_AND_LOAD_MAGIC_ITEMS, ...MAGIC_ITEM_COMPENDIUM_ARMOR_PROPERTIES, ...MAGIC_ITEM_COMPENDIUM_WEAPON_PROPERTIES, ...MAGIC_ITEM_COMPENDIUM_AUGMENT_CRYSTALS, ...MAGIC_ITEM_COMPENDIUM_CLOTHING, ...MAGIC_ITEM_COMPENDIUM_TOOLS, ...MAGIC_ITEM_COMPENDIUM_ITEM_SETS]);

export { RACES, TEMPLATES, LEGACY_CLASSES, CORE_CLASSES, NEW_BASE_CLASSES, CORE_PRESTIGE_CLASSES, CORE_SKILLS, CORE_FEATS, CORE_EQUIPMENT, NEW_EQUIPMENT, CORE_MAGIC_ITEMS, EBERRON_RACES, EBERRON_PRESTIGE_CLASSES, EBERRON_FEATS, IRON_KINGDOMS_RACES, IRON_KINGDOMS_FEATS, SORCERY_STEAM_CLASSES, SORCERY_STEAM_PRESTIGE_CLASSES, SORCERY_STEAM_SKILLS, SORCERY_STEAM_FEATS, SORCERY_STEAM_FIREARM_EQUIPMENT, SORCERY_STEAM_ALCHEMICAL_EQUIPMENT, SORCERY_STEAM_FIREARM_MAGIC_ITEMS, DESSARIN_TEMPLATES, DESSARIN_TABLES, BODY_MODIFICATIONS, RACES_OF_STONE_RACES, RACES_OF_STONE_PRESTIGE_CLASSES, RACES_OF_STONE_FEATS, RACES_OF_THE_WILD_RACES, RACES_OF_THE_WILD_PRESTIGE_CLASSES, RACES_OF_THE_WILD_FEATS, COMPLETE_ADVENTURER_PRESTIGE_CLASSES, COMPLETE_ADVENTURER_FEATS, COMPLETE_WARRIOR_PRESTIGE_CLASSES, COMPLETE_WARRIOR_FEATS, COMPLETE_ARCANE_CLASSES, COMPLETE_ARCANE_PRESTIGE_CLASSES, COMPLETE_ARCANE_FEATS, COMPLETE_DIVINE_CLASSES, COMPLETE_DIVINE_PRESTIGE_CLASSES, COMPLETE_DIVINE_FEATS, BOOK_OF_EXALTED_DEEDS_PRESTIGE_CLASSES, BOOK_OF_EXALTED_DEEDS_FEATS, BOOK_OF_EXALTED_DEEDS_TEMPLATES, FROSTBURN_RACES, FROSTBURN_PRESTIGE_CLASSES, FROSTBURN_FEATS, SANDSTORM_RACES, SANDSTORM_PRESTIGE_CLASSES, SANDSTORM_FEATS, SANDSTORM_TEMPLATES, MINIATURES_HANDBOOK_CLASSES, MINIATURES_HANDBOOK_PRESTIGE_CLASSES, MINIATURES_HANDBOOK_FEATS, PLAYERS_HANDBOOK_II_FEATS, RACES_OF_THE_DRAGON_RACES, RACES_OF_THE_DRAGON_TEMPLATES, RACES_OF_THE_DRAGON_PRESTIGE_CLASSES, RACES_OF_THE_DRAGON_FEATS, RACES_OF_EBERRON_RACES, RACES_OF_EBERRON_PRESTIGE_CLASSES, RACES_OF_EBERRON_FEATS, COMPLETE_CHAMPION_PRESTIGE_CLASSES, COMPLETE_CHAMPION_FEATS, COMPLETE_MAGE_PRESTIGE_CLASSES, COMPLETE_MAGE_FEATS, COMPLETE_PSIONIC_CLASSES, COMPLETE_PSIONIC_PRESTIGE_CLASSES, COMPLETE_PSIONIC_FEATS, COMPLETE_PSIONIC_RACES, COMPLETE_SCOUNDREL_PRESTIGE_CLASSES, COMPLETE_SCOUNDREL_FEATS, RACES_OF_DESTINY_RACES, RACES_OF_DESTINY_PRESTIGE_CLASSES, RACES_OF_DESTINY_FEATS, RACES_OF_FAERUN_RACES, RACES_OF_FAERUN_TEMPLATES, RACES_OF_FAERUN_PRESTIGE_CLASSES, RACES_OF_FAERUN_FEATS, TOME_OF_BATTLE_CLASSES, TOME_OF_BATTLE_SKILLS, TOME_OF_BATTLE_PRESTIGE_CLASSES, TOME_OF_BATTLE_FEATS, EXPANDED_PSIONICS_RACES, EXPANDED_PSIONICS_CLASSES, EXPANDED_PSIONICS_SKILLS, EXPANDED_PSIONICS_PRESTIGE_CLASSES, EXPANDED_PSIONICS_FEATS, UNEARTHED_ARCANA_FEATS, TOME_OF_MAGIC_CLASSES, TOME_OF_MAGIC_SKILLS, TOME_OF_MAGIC_PRESTIGE_CLASSES, TOME_OF_MAGIC_FEATS, WEAPONS_OF_LEGACY_FEATS, WEAPONS_OF_LEGACY_PRESTIGE_CLASSES, HEROES_OF_BATTLE_FEATS, HEROES_OF_BATTLE_PRESTIGE_CLASSES, DRAGON_MAGIC_CLASSES, DRAGON_MAGIC_PRESTIGE_CLASSES, DRAGON_MAGIC_FEATS, GHOSTWALK_CLASSES, GHOSTWALK_PRESTIGE_CLASSES, GHOSTWALK_FEATS, GHOSTWALK_TEMPLATES, BOOK_OF_VILE_DARKNESS_RACES, BOOK_OF_VILE_DARKNESS_FEATS, BOOK_OF_VILE_DARKNESS_PRESTIGE_CLASSES, EXEMPLARS_OF_EVIL_FEATS, MONSTER_MANUAL_III_RACES, MONSTER_MANUAL_III_TEMPLATES, MONSTER_MANUAL_III_FEATS, MONSTER_MANUAL_IV_RACES, MONSTER_MANUAL_IV_TEMPLATES, MONSTER_MANUAL_IV_FEATS, MONSTER_MANUAL_V_RACES, MONSTER_MANUAL_V_TEMPLATES, MONSTER_MANUAL_V_FEATS, FIENDISH_CODEX_I_FEATS, FIENDISH_CODEX_II_RACES, FIENDISH_CODEX_II_FEATS, FIENDISH_CODEX_II_PRESTIGE_CLASSES, MONSTERNOMICON_RACES, MONSTERNOMICON_TEMPLATES, MONSTERNOMICON_CLASSES, MONSTERNOMICON_SKILLS, MONSTERNOMICON_PRESTIGE_CLASSES, MONSTERNOMICON_MN1_FEATS, MONSTERNOMICON_MN1_PRESTIGE_CLASSES, LIBER_MECHANIKA_CLASSES, LIBER_MECHANIKA_PRESTIGE_CLASSES, LIBER_MECHANIKA_FEATS, LIBER_MECHANIKA_EQUIPMENT, LOCK_AND_LOAD_EQUIPMENT, LOCK_AND_LOAD_MAGIC_ITEMS, MAGIC_ITEM_COMPENDIUM_ARMOR_PROPERTIES, MAGIC_ITEM_COMPENDIUM_WEAPON_PROPERTIES, MAGIC_ITEM_COMPENDIUM_AUGMENT_CRYSTALS, MAGIC_ITEM_COMPENDIUM_SPECIFIC_ARMOR, MAGIC_ITEM_COMPENDIUM_SPECIFIC_WEAPONS, MAGIC_ITEM_COMPENDIUM_CLOTHING, MAGIC_ITEM_COMPENDIUM_TOOLS, MAGIC_ITEM_COMPENDIUM_ITEM_SETS };
