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
 * Folded in 2026-10-27 at Shaun's direction: the Homebrew
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
 * discrepancies found). Ninja and Samurai were later REMOVED from
 * the builder entirely at Shaun's direction (2026-11-02).
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
 *
 * Also merged 2026-10-28 (Batch 11b, the equipment sweep part 2):
 * equipment and magic-item chapters harvested from every book
 * built in Batches 1-10 whose gear chapters were skipped at the
 * time, as equipment.ts / magic-items.ts files added to the
 * existing pack folders — 623 equipment and 734 magic-item
 * records net-new after skipping reprints already in the data
 * (the Magic Item Compendium and the crystalkeep fan index had
 * already captured most splatbook items). See the
 * REBUILD-NOTES.md Batch 11b addendum for per-book counts,
 * duplicates skipped, omissions, and printed quirks.
 *
 * Also merged 2026-11-02 (the D&D Wiki "in use" list): the
 * homebrew-dandwiki pack built from Shaun's uploaded "CURRENT
 * LIST OF IN USE SRD WIKI LINKS" document. All records carry
 * ruleset "homebrew": 5 base classes, 1 race (the Dwelf, listed
 * under the document's PC CLASSES heading but a race), 3
 * templates, the vehicle pages and every item on the Mundane
 * Alchemical Items list as equipment, and the wiki Wild Magic
 * variant's two surge tables folded into ALL_RANDOM_TABLES.
 * Its reference indexes (Flaws, Traits, the Wild Magic /
 * Masterwork / Legal System variant rules, and the Homebrew
 * Feats portal) are exported as ALL_DANDWIKI_REFERENCE_INDEX —
 * a reference index, not a picker collection, on the
 * body-modifications precedent. The document's Mechanic class
 * page has been deleted from the wiki (not integrated), and
 * its 3.5e NPCs link is a stat-block category index (the app
 * has no NPC record type; not integrated).
 *
 * Also merged 2026-11-02 (Shaun's house-rules doc #4, "MISC
 * OTHER HOUSE RULES"): his Twisted template is appended to
 * HOMEBREW_TEMPLATES in the homebrew pack (a different template
 * from the D&D Wiki Twisted Creature), his house warforged is a
 * variant race in HOMEBREW_RACES (the Eberron record is
 * untouched), and the document's remaining rules — wizard
 * spellbook, money, divinity resistance, the walking-dead bite,
 * the releveled spells (reference only), demon portation
 * shunting, and the summoning rework with its full
 * allowed-spells table — are exported as ALL_HOUSE_RULES_INDEX
 * and ALL_SUMMONING_SPELL_LIST, reference indexes on the same
 * precedent.
 *
 * Also merged 2026-11-05 (the third-party shelf + psionics +
 * Spelljammer web integration): thirteen third-party books —
 * Bastards and Bloodlines, Alchemy & Herbalists, Heroes of
 * High Favor: Dwarves, Constructs: It Is Alive, Familiars:
 * Crouching Monkey Hidden Toad, Spells & Magic, The
 * Quintessential Dwarf, The Quintessential Rogue, Chaos
 * Magic: Wild Sorcery, Aasimar & Tiefling (its Tiefling race
 * HELD OUT — no tieflings in APOC, Shaun's canon), Way of
 * the Rogue (Traps & Treachery ch. 1; its one poison converted
 * to the catalog's Poisoncraft equipment filing), Relics,
 * and Forbidden Arcana: Performance Magic — plus the wider
 * Spelljammer line researched from the web (6 races, 81 more
 * ships across two passes, 12 helms, 17 spells). (The two Player's Guide to
 * Eberron psionic powers were already built into that book's
 * spells file when powers were first modeled.) The same merge
 * carries the ships-local sweep of Shaun's own files (67
 * records): his six homebrew spelljamming ships and their
 * shared systems, the Pirates! Table 4-1 sea ships (category
 * "ship") plus Sunken Dreams, A Dozen Sailing Ship
 * Enhancements, five classic helms from his fan helm
 * compilation, the Airship Saboteur prestige class, and two
 * random tables (Black Powder Misfires, 100 Ship Names) —
 * gathered by the Ships section (Section 5). Quintessential Dwarf equipment
 * is placed BEFORE the omni equipment arrays on purpose: its
 * 21 full records supersede the thin Ultimate Equipment
 * Guide stubs that share their ids (dedupe keeps the first).
 * Adjudications are recorded in REBUILD-NOTES.md.
 */
import type {
  BodyModificationDefinition,
  CastingProfile,
  ClassDefinition,
  EquipmentItem,
  FeatDefinition,
  FlawTraitDefinition,
  MagicItemDefinition,
  PrestigeClassDefinition,
  RaceDefinition,
  RandomTableDefinition,
  SkillDefinition,
  SpellDefinition,
  TemplateDefinition,
} from "@/engine/types";

import { CLASSES as LEGACY_CLASSES } from "./classes";
import { RACES } from "./races";
import { EBERRON_RACES } from "./eberron/races";
import { IRON_KINGDOMS_RACES } from "./iron-kingdoms/races";
import { SPELLJAMMER_RACES } from "./spelljammer/races";
import { SPELLJAMMER_SPELLS } from "./spelljammer/spells";
import { SPELLJAMMER_EQUIPMENT } from "./spelljammer/equipment";
import { SPELLJAMMER_MAGIC_ITEMS } from "./spelljammer/magic-items";
import { FIVE_FINGERS_FEATS } from "./five-fingers/feats";
import { FIVE_FINGERS_PRESTIGE_CLASSES } from "./five-fingers/prestige-classes";
import { HEROES_OF_HORROR_CLASSES } from "./heroes-of-horror/classes";
import { HEROES_OF_HORROR_PRESTIGE_CLASSES } from "./heroes-of-horror/prestige-classes";
import { HEROES_OF_HORROR_FEATS } from "./heroes-of-horror/feats";
import { HEROES_OF_HORROR_SPELLS } from "./heroes-of-horror/spells";
import { HEROES_OF_HORROR_MAGIC_ITEMS } from "./heroes-of-horror/magic-items";
import { HEROES_OF_HORROR_TEMPLATES } from "./heroes-of-horror/templates";
import { PLANAR_HANDBOOK_RACES } from "./planar-handbook/races";
import { PLANAR_HANDBOOK_TEMPLATES } from "./planar-handbook/templates";
import { PLANAR_HANDBOOK_FEATS } from "./planar-handbook/feats";
import { PLANAR_HANDBOOK_PRESTIGE_CLASSES } from "./planar-handbook/prestige-classes";
import { PLANAR_HANDBOOK_SPELLS } from "./planar-handbook/spells";
import { PLANAR_HANDBOOK_EQUIPMENT } from "./planar-handbook/equipment";
import { PLANAR_HANDBOOK_MAGIC_ITEMS } from "./planar-handbook/magic-items";
import { DUNGEONSCAPE_CLASSES } from "./dungeonscape/classes";
import { DRAGON_PALADINS_CLASSES } from "./dragon-paladins/classes";
import { DRAGON_310_CLASSES } from "./dragon-310/classes";
import { DRAGON_310_PRESTIGE } from "./dragon-310/prestige";
import { DRAGON_310_FEATS } from "./dragon-310/feats";
import { DRAGON_311_CLASSES } from "./dragon-311/classes";
import { DRAGON_311_PRESTIGE } from "./dragon-311/prestige";
import { DRAGON_311_FEATS } from "./dragon-311/feats";
import { DRAGON_312_CLASSES } from "./dragon-312/classes";
import { DRAGON_312_PRESTIGE } from "./dragon-312/prestige";
import { DRAGON_312_FEATS } from "./dragon-312/feats";
import { DRAGON_312_SPELLS } from "./dragon-312/spells";
import { DRAGON_312_EQUIPMENT } from "./dragon-312/equipment";
import { DRAGON_312_MAGIC_ITEMS } from "./dragon-312/magic-items";
import { DRAGON_313_RACES } from "./dragon-313/races";
import { DRAGON_313_TEMPLATES } from "./dragon-313/templates";
import { DRAGON_313_PRESTIGE } from "./dragon-313/prestige";
import { DRAGON_313_FEATS } from "./dragon-313/feats";
import { DRAGON_313_SPELLS } from "./dragon-313/spells";
import { DRAGON_313_MAGIC_ITEMS } from "./dragon-313/magic-items";
import { DRAGON_314_RACES } from "./dragon-314/races";
import { DRAGON_314_TEMPLATES } from "./dragon-314/templates";
import { DRAGON_314_PRESTIGE } from "./dragon-314/prestige";
import { DRAGON_314_FEATS } from "./dragon-314/feats";
import { DRAGON_314_SPELLS } from "./dragon-314/spells";
import { DRAGON_314_MAGIC_ITEMS } from "./dragon-314/magic-items";
import { DRAGON_315_CLASSES } from "./dragon-315/classes";
import { DRAGON_315_PRESTIGE } from "./dragon-315/prestige";
import { DRAGON_315_FEATS } from "./dragon-315/feats";
import { DRAGON_315_SPELLS } from "./dragon-315/spells";
import { DRAGON_315_TEMPLATES } from "./dragon-315/templates";
import { DRAGON_315_RACES } from "./dragon-315/races";
import { DRAGON_315_EQUIPMENT } from "./dragon-315/equipment";
import { DRAGON_315_MAGIC_ITEMS } from "./dragon-315/magic-items";
import { DRAGON_316_FEATS } from "./dragon-316/feats";
import { DRAGON_316_EQUIPMENT } from "./dragon-316/equipment";
import { DRAGON_316_MAGIC_ITEMS } from "./dragon-316/magic-items";
import { DRAGON_317_CLASSES } from "./dragon-317/classes";
import { DRAGON_317_PRESTIGE } from "./dragon-317/prestige";
import { DRAGON_317_RACES } from "./dragon-317/races";
import { DRAGON_317_FEATS } from "./dragon-317/feats";
import { DRAGON_317_SPELLS } from "./dragon-317/spells";
import { DRAGON_317_POWERS } from "./dragon-317/powers";
import { DRAGON_317_EQUIPMENT } from "./dragon-317/equipment";
import { BASTION_PRESTIGE } from "./bastion-reflavors/prestige";
import { BASTION_FEATS } from "./bastion-reflavors/feats";
import { BASTION_EQUIPMENT } from "./bastion-reflavors/equipment";
import { DRAGON_317_MAGIC_ITEMS } from "./dragon-317/magic-items";
import { DRAGON_318_FEATS } from "./dragon-318/feats";
import { DRAGON_318_SPELLS } from "./dragon-318/spells";
import { DRAGON_318_EQUIPMENT } from "./dragon-318/equipment";
import { DRAGON_318_MAGIC_ITEMS } from "./dragon-318/magic-items";
import { DUNGEONSCAPE_PRESTIGE_CLASSES } from "./dungeonscape/prestige-classes";
import { DUNGEONSCAPE_FEATS } from "./dungeonscape/feats";
import { DUNGEONSCAPE_EQUIPMENT } from "./dungeonscape/equipment";
import { DUNGEONSCAPE_MAGIC_ITEMS } from "./dungeonscape/magic-items";
import { CITYSCAPE_FEATS } from "./cityscape/feats";
import { CITYSCAPE_SPELLS } from "./cityscape/spells";
import { CITYSCAPE_PRESTIGE_CLASSES } from "./cityscape/prestige-classes";
import { CITYSCAPE_EQUIPMENT } from "./cityscape/equipment";
import { CITYSCAPE_MAGIC_ITEMS } from "./cityscape/magic-items";
import { DOTU_RACES } from "./drow-of-the-underdark/races";
import { DOTU_PRESTIGE_CLASSES } from "./drow-of-the-underdark/prestige-classes";
import { DOTU_FEATS } from "./drow-of-the-underdark/feats";
import { DOTU_SPELLS } from "./drow-of-the-underdark/spells";
import { DOTU_EQUIPMENT } from "./drow-of-the-underdark/equipment";
import { DOTU_MAGIC_ITEMS } from "./drow-of-the-underdark/magic-items";
import { RUM_MAGIC_ITEMS } from "./ruins-of-undermountain/magic-items";
import { RUM_SPELLS } from "./ruins-of-undermountain/spells";
import { DUNGEON_SURVIVAL_GUIDE_MAGIC_ITEMS } from "./dungeon-survival-guide/magic-items";
import { MAGIC_OF_INCARNUM_RACES } from "./magic-of-incarnum/races";
import { MAGIC_OF_INCARNUM_CLASSES } from "./magic-of-incarnum/classes";
import { MAGIC_OF_INCARNUM_PRESTIGE_CLASSES } from "./magic-of-incarnum/prestige-classes";
import { MAGIC_OF_INCARNUM_FEATS } from "./magic-of-incarnum/feats";
import { MAGIC_OF_INCARNUM_SPELLS } from "./magic-of-incarnum/spells";
import { MAGIC_OF_INCARNUM_MAGIC_ITEMS } from "./magic-of-incarnum/magic-items";
import { EXPLORERS_HANDBOOK_PRESTIGE_CLASSES } from "./explorers-handbook/prestige-classes";
import { EXPLORERS_HANDBOOK_SPELLS } from "./explorers-handbook/spells";
import { EXPLORERS_HANDBOOK_EQUIPMENT } from "./explorers-handbook/equipment";
import { EXPLORERS_HANDBOOK_MAGIC_ITEMS } from "./explorers-handbook/magic-items";
import { FIVE_NATIONS_PRESTIGE_CLASSES } from "./five-nations/prestige-classes";
import { FIVE_NATIONS_SPELLS } from "./five-nations/spells";
import { PLAYERS_GUIDE_TO_EBERRON_PRESTIGE_CLASSES } from "./players-guide-eberron/prestige-classes";
import { PLAYERS_GUIDE_TO_EBERRON_FEATS } from "./players-guide-eberron/feats";
import { PLAYERS_GUIDE_TO_EBERRON_SPELLS } from "./players-guide-eberron/spells";
import { PLAYERS_GUIDE_TO_EBERRON_EQUIPMENT } from "./players-guide-eberron/equipment";
import { PLAYERS_GUIDE_TO_EBERRON_MAGIC_ITEMS } from "./players-guide-eberron/magic-items";
import { SHARN_PRESTIGE_CLASSES } from "./sharn/prestige-classes";
import { SHARN_FEATS } from "./sharn/feats";
import { SHARN_SPELLS } from "./sharn/spells";
import { SHARN_EQUIPMENT } from "./sharn/equipment";
import { SHARN_MAGIC_ITEMS } from "./sharn/magic-items";
import { FORGE_OF_WAR_SPELLS } from "./forge-of-war/spells";
import { FORGE_OF_WAR_MAGIC_ITEMS } from "./forge-of-war/magic-items";
import { BASTARDS_RACES_A } from "./bastards-and-bloodlines/races-a";
import { BASTARDS_RACES_B } from "./bastards-and-bloodlines/races-b";
import { BASTARDS_TEMPLATES } from "./bastards-and-bloodlines/templates";
import { BASTARDS_FEATS } from "./bastards-and-bloodlines/feats";
import { BASTARDS_PRESTIGE_CLASSES } from "./bastards-and-bloodlines/prestige-classes";
import { BASTARDS_SPELLS } from "./bastards-and-bloodlines/spells";
import { BASTARDS_MAGIC_ITEMS } from "./bastards-and-bloodlines/magic-items";
import { ALCHEMY_HERBALISTS_FEATS } from "./alchemy-and-herbalists/feats";
import { ALCHEMY_HERBALISTS_PRESTIGE_CLASSES } from "./alchemy-and-herbalists/prestige-classes";
import { ALCHEMY_HERBALISTS_EQUIPMENT } from "./alchemy-and-herbalists/equipment";
import { ALCHEMY_HERBALISTS_MAGIC_ITEMS } from "./alchemy-and-herbalists/magic-items";
import { HOFD_FEATS } from "./high-favor-dwarves/feats";
import { HOFD_SKILLS } from "./high-favor-dwarves/skills";
import { HOFD_EQUIPMENT } from "./high-favor-dwarves/equipment";
import { HOFD_PRESTIGE_CLASSES } from "./high-favor-dwarves/prestige-classes";
import { HOFE_FEATS } from "./high-favor-elves/feats";
import { HOFE_SKILLS } from "./high-favor-elves/skills";
import { HOFE_EQUIPMENT } from "./high-favor-elves/equipment";
import { HOFE_PRESTIGE_CLASSES } from "./high-favor-elves/prestige-classes";
import { HOHO_FEATS } from "./high-favor-halforcs/feats";
import { HOHO_SKILLS } from "./high-favor-halforcs/skills";
import { HOHO_EQUIPMENT } from "./high-favor-halforcs/equipment";
import { HOHO_PRESTIGE_CLASSES } from "./high-favor-halforcs/prestige-classes";
import { CONSTRUCTS_FEATS } from "./constructs/feats";
import { CONSTRUCTS_FLAWS } from "./constructs/flaws";
import { CONSTRUCTS_TEMPLATES } from "./constructs/templates";
import { CONSTRUCTS_EQUIPMENT } from "./constructs/equipment";
import { FAMILIARS_SPELLS } from "./familiars/spells";
import { FAMILIARS_FEATS } from "./familiars/feats";
import { FAMILIARS_PRESTIGE_CLASSES } from "./familiars/prestige-classes";
import { FAMILIARS_RACES } from "./familiars/races";
import { SPELLS_AND_MAGIC_FEATS } from "./spells-and-magic/feats";
import { SPELLS_AND_MAGIC_PRESTIGE_CLASSES } from "./spells-and-magic/prestige-classes";
import { SPELLS_AND_MAGIC_SPELLS } from "./spells-and-magic/spells";
import { SPELLS_AND_MAGIC_MAGIC_ITEMS } from "./spells-and-magic/magic-items";
import { QUINTESSENTIAL_DWARF_PRESTIGE_CLASSES } from "./quintessential-dwarf/prestige-classes";
import { QUINTESSENTIAL_DWARF_FEATS } from "./quintessential-dwarf/feats";
import { QUINTESSENTIAL_DWARF_EQUIPMENT } from "./quintessential-dwarf/equipment";
import { QUINTESSENTIAL_DWARF_MAGIC_ITEMS } from "./quintessential-dwarf/magic-items";
import { QUINTESSENTIAL_DWARF_RACES } from "./quintessential-dwarf/races";
import { QUINTESSENTIAL_DWARF_SPELLS } from "./quintessential-dwarf/spells";
import { QUINTESSENTIAL_DWARF_SKILLS } from "./quintessential-dwarf/skills";
import { QUINTESSENTIAL_ROGUE_PRESTIGE_CLASSES } from "./quintessential-rogue/prestige-classes";
import { QUINTESSENTIAL_ROGUE_FEATS } from "./quintessential-rogue/feats";
import { QUINTESSENTIAL_ROGUE_EQUIPMENT } from "./quintessential-rogue/equipment";
import { QUINTESSENTIAL_ROGUE_MAGIC_ITEMS } from "./quintessential-rogue/magic-items";
import { QUINTESSENTIAL_ROGUE_POISONS, QUINTESSENTIAL_ROGUE_TRAP_DEVICES } from "./quintessential-rogue/poisons";
import { CHAOS_MAGIC_CLASSES } from "./chaos-magic/classes";
import { CHAOS_MAGIC_PRESTIGE_CLASSES } from "./chaos-magic/prestige-classes";
import { CHAOS_MAGIC_FEATS } from "./chaos-magic/feats";
import { CHAOS_MAGIC_SPELLS } from "./chaos-magic/spells";
import { CHAOS_MAGIC_MAGIC_ITEMS } from "./chaos-magic/magic-items";
import { AASIMAR_TIEFLING_RACES } from "./aasimar-tiefling/races";
import { AASIMAR_TIEFLING_FEATS } from "./aasimar-tiefling/feats";
import { AASIMAR_TIEFLING_PRESTIGE_CLASSES } from "./aasimar-tiefling/prestige-classes";
import { AASIMAR_TIEFLING_SPELLS } from "./aasimar-tiefling/spells";
import { AASIMAR_TIEFLING_MAGIC_ITEMS } from "./aasimar-tiefling/magic-items";
import { AASIMAR_TIEFLING_EQUIPMENT } from "./aasimar-tiefling/equipment";
import { WAY_OF_THE_ROGUE_FEATS } from "./way-of-the-rogue/feats";
import { WAY_OF_THE_ROGUE_PRESTIGE_CLASSES } from "./way-of-the-rogue/prestige-classes";
import { WAY_OF_THE_ROGUE_CLASSES } from "./way-of-the-rogue/classes";
import { WAY_OF_THE_ROGUE_SKILLS } from "./way-of-the-rogue/skills";
import { WAY_OF_THE_ROGUE_EQUIPMENT } from "./way-of-the-rogue/equipment";
import { WAY_OF_THE_ROGUE_POISONS } from "./way-of-the-rogue/poisons";
import { WAY_OF_THE_ROGUE_MAGIC_ITEMS } from "./way-of-the-rogue/magic-items";
import { WAY_OF_THE_ROGUE_SPELLS } from "./way-of-the-rogue/spells";
import { RELICS_MAGIC_ITEMS } from "./relics/magic-items";
import { RELICS_FEATS } from "./relics/feats";
import { RELICS_TEMPLATES } from "./relics/templates";
import { PERFORMANCE_MAGIC_SPELLS } from "./performance-magic/spells";
import { SPELLJAMMER_WEB_RACES } from "./spelljammer-web/races";
import { SPELLJAMMER_WEB_EQUIPMENT } from "./spelljammer-web/equipment";
import { SPELLJAMMER_WEB_MAGIC_ITEMS } from "./spelljammer-web/magic-items";
import { SPELLJAMMER_WEB_SPELLS } from "./spelljammer-web/spells";
import { SPELLJAMMER_WEB_SHIPS_PASS2 } from "./spelljammer-web/ships-pass2";
import { HOMEBREW_SHIPS, HOMEBREW_SHIP_SYSTEMS, HOMEBREW_SHIP_TABLES } from "./ships-local/ships-homebrew";
import { PIRATES_SHIPS } from "./ships-local/pirates-ships";
import { DOZEN_SAILING_MAGIC_ITEMS, DOZEN_SAILING_SPELLS, DOZEN_SAILING_FEATS } from "./ships-local/sailing-enhancements";
import { FAN_HELM_MAGIC_ITEMS, FAN_HELM_EQUIPMENT } from "./ships-local/helms-fan";
import { AIRSHIP_PRESTIGE_CLASSES } from "./ships-local/airships";
import { SHIP_NAME_TABLES } from "./ships-local/ship-names";
import { TEMPLATES } from "./templates";
import { CORE_CLASSES } from "./core/classes";
import { NEW_BASE_CLASSES } from "./core/new-base-classes";
import { CORE_PRESTIGE_CLASSES } from "./core/prestige-classes";
import { EBERRON_PRESTIGE_CLASSES } from "./eberron/prestige-classes";
import { EBERRON_CLASSES } from "./eberron/classes-ecs";
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
import { IRON_KINGDOMS_SKILLS } from "./iron-kingdoms/skills";
import { IRON_KINGDOMS_CLASSES } from "./iron-kingdoms/classes-ikcg";
import { IRON_KINGDOMS_CH2_FEATS } from "./iron-kingdoms/feats-ch2";
import { IRON_KINGDOMS_SPELLS } from "./iron-kingdoms/spells";
import { CORE_EQUIPMENT } from "./core/equipment";
import { CORE_MAGIC_ITEMS } from "./core/magic-items";
import NEW_EQUIPMENT_JSON from "./core/new-equipment.json";
import { HOMEBREW_TEMPLATES } from "./homebrew/templates";
import { HOMEBREW_EQUIPMENT } from "./homebrew/equipment";
import { HOMEBREW_TABLES } from "./homebrew/tables";
import { HOMEBREW_RACES } from "./homebrew/races";
import { HOUSE_RULE_ENTRIES, SUMMONING_SPELL_LIST } from "./homebrew/house-rules-index";
import { PILLS_POTIONS_FEATS, PILLS_POTIONS_TABLES, PILLS_POTIONS_HOUSE_RULES } from "./homebrew/pills-potions";
import type { HouseRuleEntry, SummoningSpellEntry } from "./homebrew/house-rules-index";
import { RULES_COMPENDIUM_TOPICS } from "./rules-compendium/topics";
import { RULES_COMPENDIUM_TOPICS_PART2 } from "./rules-compendium/topics-part2";
import type { RulesCompendiumTopic } from "./rules-compendium/topics";
import { DANDWIKI_CLASSES } from "./homebrew-dandwiki/classes";
import { DANDWIKI_RACES } from "./homebrew-dandwiki/races";
import { DANDWIKI_TEMPLATES } from "./homebrew-dandwiki/templates";
import { DANDWIKI_EQUIPMENT } from "./homebrew-dandwiki/equipment";
import { DANDWIKI_TABLES } from "./homebrew-dandwiki/tables";
import { ALL_DANDWIKI_REFERENCE_INDEX as DANDWIKI_REFERENCE_INDEX } from "./homebrew-dandwiki/reference-index";
import type { DandwikiReferenceEntry } from "./homebrew-dandwiki/reference-index";
import { FLAWS, TRAITS } from "./flaws-traits/index";
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
import { COMPLETE_PSIONIC_POWERS } from "./complete-psionic/powers";
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
import { EXPANDED_PSIONICS_POWERS } from "./expanded-psionics/powers";
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
import { MONSTERNOMICON_MN1_SKILLS } from "./monsternomicon/skills-mn1";
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
import { RACES_OF_STONE_EQUIPMENT } from "./races-of-stone/equipment";
import { RACES_OF_STONE_MAGIC_ITEMS } from "./races-of-stone/magic-items";
import { RACES_OF_THE_WILD_EQUIPMENT } from "./races-of-the-wild/equipment";
import { RACES_OF_THE_WILD_MAGIC_ITEMS } from "./races-of-the-wild/magic-items";
import { COMPLETE_WARRIOR_EQUIPMENT } from "./complete-warrior/equipment";
import { COMPLETE_ADVENTURER_EQUIPMENT } from "./complete-adventurer/equipment";
import { COMPLETE_ADVENTURER_MAGIC_ITEMS } from "./complete-adventurer/magic-items";
import { COMPLETE_ARCANE_EQUIPMENT } from "./complete-arcane/equipment";
import { COMPLETE_ARCANE_MAGIC_ITEMS } from "./complete-arcane/magic-items";
import { COMPLETE_DIVINE_MAGIC_ITEMS } from "./complete-divine/magic-items";
import { BOOK_OF_EXALTED_DEEDS_EQUIPMENT } from "./book-of-exalted-deeds/equipment";
import { BOOK_OF_EXALTED_DEEDS_MAGIC_ITEMS } from "./book-of-exalted-deeds/magic-items";
import { FROSTBURN_EQUIPMENT } from "./frostburn/equipment";
import { FROSTBURN_MAGIC_ITEMS } from "./frostburn/magic-items";
import { SANDSTORM_EQUIPMENT } from "./sandstorm/equipment";
import { SANDSTORM_MAGIC_ITEMS } from "./sandstorm/magic-items";
import { MINIATURES_HANDBOOK_EQUIPMENT } from "./miniatures-handbook/equipment";
import { MINIATURES_HANDBOOK_MAGIC_ITEMS } from "./miniatures-handbook/magic-items";
import { TOME_OF_BATTLE_MAGIC_ITEMS } from "./tome-of-battle/magic-items";
import { MONSTER_MANUAL_III_MAGIC_ITEMS } from "./monster-manual-iii/magic-items";
import { RACES_OF_THE_DRAGON_EQUIPMENT } from "./races-of-the-dragon/equipment";
import { RACES_OF_THE_DRAGON_MAGIC_ITEMS } from "./races-of-the-dragon/magic-items";
import { RACES_OF_EBERRON_MAGIC_ITEMS } from "./races-of-eberron/magic-items";
import { COMPLETE_CHAMPION_EQUIPMENT } from "./complete-champion/equipment";
import { COMPLETE_CHAMPION_MAGIC_ITEMS } from "./complete-champion/magic-items";
import { COMPLETE_MAGE_EQUIPMENT } from "./complete-mage/equipment";
import { COMPLETE_MAGE_MAGIC_ITEMS } from "./complete-mage/magic-items";
import { COMPLETE_PSIONIC_EQUIPMENT } from "./complete-psionic/equipment";
import { COMPLETE_PSIONIC_MAGIC_ITEMS } from "./complete-psionic/magic-items";
import { COMPLETE_SCOUNDREL_EQUIPMENT } from "./complete-scoundrel/equipment";
import { COMPLETE_SCOUNDREL_MAGIC_ITEMS } from "./complete-scoundrel/magic-items";
import { HEROES_OF_BATTLE_EQUIPMENT } from "./heroes-of-battle/equipment";
import { HEROES_OF_BATTLE_MAGIC_ITEMS } from "./heroes-of-battle/magic-items";
import { DRAGON_MAGIC_EQUIPMENT } from "./dragon-magic/equipment";
import { DRAGON_MAGIC_MAGIC_ITEMS } from "./dragon-magic/magic-items";
import { RACES_OF_FAERUN_EQUIPMENT } from "./races-of-faerun/equipment";
import { RACES_OF_FAERUN_MAGIC_ITEMS } from "./races-of-faerun/magic-items";
import { EBERRON_EQUIPMENT } from "./eberron/equipment";
import { EBERRON_MAGIC_ITEMS } from "./eberron/magic-items";
import { GHOSTWALK_EQUIPMENT } from "./ghostwalk/equipment";
import { GHOSTWALK_MAGIC_ITEMS } from "./ghostwalk/magic-items";
import { BOOK_OF_VILE_DARKNESS_EQUIPMENT } from "./book-of-vile-darkness/equipment";
import { BOOK_OF_VILE_DARKNESS_MAGIC_ITEMS } from "./book-of-vile-darkness/magic-items";
import { SORCERY_STEAM_EQUIPMENT } from "./sorcery-steam/equipment";
import { SORCERY_STEAM_MAGIC_ITEMS } from "./sorcery-steam/magic-items";
import { FIENDISH_CODEX_II_EQUIPMENT } from "./fiendish-codex-ii/equipment";
import { MONSTERNOMICON_EQUIPMENT } from "./monsternomicon/equipment";
import { MONSTERNOMICON_MAGIC_ITEMS } from "./monsternomicon/magic-items";
import { EXPANDED_PSIONICS_EQUIPMENT } from "./expanded-psionics/equipment";
import { EXPANDED_PSIONICS_MAGIC_ITEMS } from "./expanded-psionics/magic-items";
import { TOME_OF_MAGIC_EQUIPMENT } from "./tome-of-magic/equipment";
import { TOME_OF_MAGIC_MAGIC_ITEMS } from "./tome-of-magic/magic-items";
import { SRD_SPELLS } from "./spells/srd-spells";
import { SPELL_COMPENDIUM_SPELLS_A } from "./spells/spell-compendium-a";
import { SPELL_COMPENDIUM_SPELLS_B } from "./spells/spell-compendium-b";
import { SPELL_COMPENDIUM_SPELLS_C } from "./spells/spell-compendium-c";
import { SPELL_COMPENDIUM_SPELLS_D } from "./spells/spell-compendium-d";
import { BOOK_OF_EXALTED_DEEDS_SPELLS } from "./book-of-exalted-deeds/spells";
import { BOOK_OF_VILE_DARKNESS_SPELLS } from "./book-of-vile-darkness/spells";
import { FROSTBURN_SPELLS } from "./frostburn/spells";
import { SANDSTORM_SPELLS } from "./sandstorm/spells";
import { COMPLETE_ARCANE_SPELLS } from "./complete-arcane/spells";
import { COMPLETE_MAGE_SPELLS } from "./complete-mage/spells";
import { COMPLETE_CHAMPION_SPELLS } from "./complete-champion/spells";
import { COMPLETE_SCOUNDREL_SPELLS } from "./complete-scoundrel/spells";
import { COMPLETE_WARRIOR_SPELLS } from "./complete-warrior/spells";
import { COMPLETE_DIVINE_SPELLS } from "./complete-divine/spells";
import { GHOSTWALK_SPELLS } from "./ghostwalk/spells";
import { GHOSTWALK_WEB_ENHANCEMENT_SPELLS } from "./ghostwalk/spells-web-enhancement";
import { DRAGON_MAGIC_SPELLS } from "./dragon-magic/spells";
import { HEROES_OF_BATTLE_SPELLS } from "./heroes-of-battle/spells";
import { FIENDISH_CODEX_I_SPELLS } from "./fiendish-codex-i/spells";
import { FIENDISH_CODEX_II_SPELLS } from "./fiendish-codex-ii/spells";
import { SORCERY_AND_STEAM_SPELLS } from "./sorcery-steam/spells";
import { EBERRON_CAMPAIGN_SETTING_SPELLS } from "./eberron/spells";
import { RACES_OF_EBERRON_SPELLS } from "./races-of-eberron/spells";
import { PLAYERS_HANDBOOK_II_SPELLS } from "./players-handbook-ii/spells";
import { CASTING_PROFILES } from "./spells/casting-profiles";
import { CORE_AUDIT_RACES } from "./core/audit-races";
import { CORE_AUDIT_PRESTIGE_CLASSES } from "./core/audit-prestige-classes";
import { CORE_AUDIT_TEMPLATES } from "./core/audit-templates";
import { CORE_AUDIT_FEATS, CORE_AUDIT_SKILLS } from "./core/audit-feats-skills";
import { CORE_AUDIT_EQUIPMENT } from "./core/audit-equipment";
import { CORE_AUDIT_MAGIC_ITEMS } from "./core/audit-magic-items";
import { CORE_AUDIT_SPECIFIC_ITEMS } from "./core/audit-magic-items-specific";
import { CORE_AUDIT_POTIONS } from "./core/audit-magic-items-potions";
import { CORE_AUDIT_WONDROUS } from "./core/audit-magic-items-wondrous";
import { DMG_ARTIFACTS, DMG_SPECIFIC_WEAPONS_ARMOR, DMG_AMMUNITION } from "./core/audit-magic-items-artifacts-specifics";
import { MIC_SPECIFIC_ARMOR_SHIELDS, MIC_SPECIFIC_WEAPONS } from "./core/audit-magic-items-mic-specifics";
import { AEG_MAGIC_ITEMS_OMNI, AEG_EQUIPMENT_OMNI } from "./omni/omni-arms-and-equipment-guide";
import { BOED_MAGIC_ITEMS_OMNI, BOED_EQUIPMENT_OMNI } from "./omni/omni-book-of-exalted-deeds";
import { BOVD_MAGIC_ITEMS_OMNI, BOVD_EQUIPMENT_OMNI } from "./omni/omni-book-of-vile-darkness";
import { CAdv_MAGIC_ITEMS_OMNI, CAdv_EQUIPMENT_OMNI } from "./omni/omni-complete-adventurer";
import { CArc_MAGIC_ITEMS_OMNI, CArc_EQUIPMENT_OMNI } from "./omni/omni-complete-arcane";
import { CCh_MAGIC_ITEMS_OMNI, CCh_EQUIPMENT_OMNI } from "./omni/omni-complete-champion";
import { CDiv_MAGIC_ITEMS_OMNI, CDiv_EQUIPMENT_OMNI } from "./omni/omni-complete-divine";
import { CMag_MAGIC_ITEMS_OMNI, CMag_EQUIPMENT_OMNI } from "./omni/omni-complete-mage";
import { CSc_MAGIC_ITEMS_OMNI, CSc_EQUIPMENT_OMNI } from "./omni/omni-complete-scoundrel";
import { CW_MAGIC_ITEMS_OMNI, CW_EQUIPMENT_OMNI } from "./omni/omni-complete-warrior";
import { DMG2_MAGIC_ITEMS_OMNI, DMG2_EQUIPMENT_OMNI } from "./omni/omni-dmg-ii";
import { ECS_MAGIC_ITEMS_OMNI, ECS_EQUIPMENT_OMNI } from "./omni/omni-eberron-campaign-setting";
import { GW_MAGIC_ITEMS_OMNI, GW_EQUIPMENT_OMNI } from "./omni/omni-ghostwalk";
import { GG_MAGIC_ITEMS_OMNI, GG_EQUIPMENT_OMNI } from "./omni/omni-goods-and-gear";
import { MOE_MAGIC_ITEMS_OMNI, MOE_EQUIPMENT_OMNI } from "./omni/omni-magic-of-eberron";
import { MUE_MAGIC_ITEMS_OMNI, MUE_EQUIPMENT_OMNI } from "./omni/omni-more-ultimate-equipment";
import { UEG1_MAGIC_ITEMS_OMNI, UEG1_EQUIPMENT_OMNI } from "./omni/omni-ultimate-equipment-guide-1";
import { UEG2_MAGIC_ITEMS_OMNI, UEG2_EQUIPMENT_OMNI } from "./omni/omni-ultimate-equipment-guide-2";
import { FROST_MAGIC_ITEMS_OMNI, FROST_EQUIPMENT_OMNI } from "./omni/omni-frostburn";
import { SAND_MAGIC_ITEMS_OMNI, SAND_EQUIPMENT_OMNI } from "./omni/omni-sandstorm";
import { RWILD_MAGIC_ITEMS_OMNI, RWILD_EQUIPMENT_OMNI } from "./omni/omni-races-of-the-wild";
import { RSTONE_MAGIC_ITEMS_OMNI, RSTONE_EQUIPMENT_OMNI } from "./omni/omni-races-of-stone";
import { RDRAG_MAGIC_ITEMS_OMNI, RDRAG_EQUIPMENT_OMNI } from "./omni/omni-races-of-the-dragon";
import { RDEST_MAGIC_ITEMS_OMNI, RDEST_EQUIPMENT_OMNI } from "./omni/omni-races-of-destiny";
import { HOB_MAGIC_ITEMS_OMNI, HOB_EQUIPMENT_OMNI } from "./omni/omni-heroes-of-battle";
import { MINI_MAGIC_ITEMS_OMNI, MINI_EQUIPMENT_OMNI } from "./omni/omni-miniatures-handbook";
import { DMAG_MAGIC_ITEMS_OMNI, DMAG_EQUIPMENT_OMNI } from "./omni/omni-dragon-magic";
import { EOE_MAGIC_ITEMS_OMNI, EOE_EQUIPMENT_OMNI } from "./omni/omni-exemplars-of-evil";
import { XPH_MAGIC_ITEMS_OMNI, XPH_EQUIPMENT_OMNI } from "./omni/omni-expanded-psionics-handbook";
import { ELH_MAGIC_ITEMS_OMNI, ELH_EQUIPMENT_OMNI } from "./omni/omni-epic-level-handbook";
import { UA_MAGIC_ITEMS_OMNI, UA_EQUIPMENT_OMNI } from "./omni/omni-unearthed-arcana";
import { WOL_MAGIC_ITEMS_OMNI, WOL_EQUIPMENT_OMNI } from "./omni/omni-weapons-of-legacy";
import { DOTF_MAGIC_ITEMS_OMNI, DOTF_EQUIPMENT_OMNI } from "./omni/omni-defenders-of-the-faith";
import { SNS_MAGIC_ITEMS_OMNI, SNS_EQUIPMENT_OMNI } from "./omni/omni-song-and-silence";
import { SNF_MAGIC_ITEMS_OMNI, SNF_EQUIPMENT_OMNI } from "./omni/omni-sword-and-fist";
import { TNB_MAGIC_ITEMS_OMNI, TNB_EQUIPMENT_OMNI } from "./omni/omni-tome-and-blood";
import { MOTW_MAGIC_ITEMS_OMNI, MOTW_EQUIPMENT_OMNI } from "./omni/omni-masters-of-the-wild";
import { POISC_MAGIC_ITEMS_OMNI, POISC_EQUIPMENT_OMNI } from "./omni/omni-poisoncraft";
import { CURSE_MAGIC_ITEMS_OMNI, CURSE_EQUIPMENT_OMNI } from "./omni/omni-book-of-curses";
import { FARC_MAGIC_ITEMS_OMNI, FARC_EQUIPMENT_OMNI } from "./omni/omni-forbidden-arcana";
import { ALCH_MAGIC_ITEMS_OMNI, ALCH_EQUIPMENT_OMNI } from "./omni/omni-40-alchemical-items";
import { BOOZE_MAGIC_ITEMS_OMNI, BOOZE_EQUIPMENT_OMNI } from "./omni/omni-alcoholic-beverages";
import { GWB_MAGIC_ITEMS_OMNI, GWB_EQUIPMENT_OMNI } from "./omni/omni-gygax-world-builder";
import { GLF_MAGIC_ITEMS_OMNI, GLF_EQUIPMENT_OMNI } from "./omni/omni-gygax-living-fantasy";
import { GUILD_MAGIC_ITEMS_OMNI, GUILD_EQUIPMENT_OMNI } from "./omni/omni-guildcraft";
import { STEED_MAGIC_ITEMS_OMNI, STEED_EQUIPMENT_OMNI } from "./omni/omni-noble-steeds";
import { PIR_MAGIC_ITEMS_OMNI, PIR_EQUIPMENT_OMNI } from "./omni/omni-pirates";
import { AIR_MAGIC_ITEMS_OMNI, AIR_EQUIPMENT_OMNI } from "./omni/omni-airships";
import { SHIP_MAGIC_ITEMS_OMNI, SHIP_EQUIPMENT_OMNI } from "./omni/omni-ship-combat";
import { HELM_MAGIC_ITEMS_OMNI, HELM_EQUIPMENT_OMNI } from "./omni/omni-helms";
import { WOTR_MAGIC_ITEMS_OMNI, WOTR_EQUIPMENT_OMNI } from "./omni/omni-way-of-the-rogue";
import { QELF_MAGIC_ITEMS_OMNI, QELF_EQUIPMENT_OMNI } from "./omni/omni-quintessential-elf";
import { QKOB_MAGIC_ITEMS_OMNI, QKOB_EQUIPMENT_OMNI } from "./omni/omni-quintessential-kobold";
import { HOFE_MAGIC_ITEMS_OMNI, HOFE_EQUIPMENT_OMNI } from "./omni/omni-heroes-of-high-favor-elves";
import { SS_MAGIC_ITEMS_OMNI, SS_EQUIPMENT_OMNI } from "./omni/omni-sorcery-steam-sweep";
import { STW_MAGIC_ITEMS_OMNI, STW_EQUIPMENT_OMNI } from "./omni/omni-steamworks";
import { AESS_MAGIC_ITEMS_OMNI, AESS_EQUIPMENT_OMNI } from "./omni/omni-adventurer-essentials";
import { HOUSE_MAGIC_ITEMS_OMNI, HOUSE_EQUIPMENT_OMNI } from "./omni/omni-house-docs";
import { DMGR_MAGIC_ITEMS_OMNI, DMGR_EQUIPMENT_OMNI } from "./omni/omni-dmg-residuals";
import { XRES_MAGIC_ITEMS_OMNI, XRES_EQUIPMENT_OMNI } from "./omni/omni-crosscheck-residuals";
import { MATL_MAGIC_ITEMS_OMNI, MATL_EQUIPMENT_OMNI } from "./omni/omni-materials-residual";
import { INFU_MAGIC_ITEMS_OMNI, INFU_EQUIPMENT_OMNI } from "./omni/omni-motw-infusions";
import { HARR_MAGIC_ITEMS_OMNI, HARR_EQUIPMENT_OMNI } from "./omni/omni-house-arrows";
import { GENERATED_WANDS, GENERATED_SCROLLS } from "./core/generated-wands-scrolls";
import { CORE_AUDIT_SPELLS } from "./core/audit-spells";
import { RELOCATED_MAGIC_ITEMS, RELOCATED_MAGIC_ITEM_IDS } from "./relocated-magic-items";
import { RELOCATED_MAGIC_ITEMS_2, RELOCATED_MAGIC_ITEM_2_IDS } from "./relocated-magic-items-2";
import { EQUIPMENT_FROM_MAGIC, MAGIC_IDS_MOVED_TO_EQUIPMENT, SUPERSEDED_MAGIC_IDS, MAGIC_ID_RENAMES, MAGIC_CATEGORY_OVERRIDES, DUPLICATE_EQUIPMENT_IDS, HELMET_EQUIPMENT_IDS, ALCHEMICAL_GEAR_IDS } from "./barrel-overrides";

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

export const ALL_RACES: RaceDefinition[] = dedupeById([...RACES, ...EBERRON_RACES, ...IRON_KINGDOMS_RACES, ...RACES_OF_STONE_RACES, ...RACES_OF_THE_WILD_RACES, ...FROSTBURN_RACES, ...SANDSTORM_RACES, ...RACES_OF_THE_DRAGON_RACES, ...RACES_OF_EBERRON_RACES, ...COMPLETE_PSIONIC_RACES, ...RACES_OF_DESTINY_RACES, ...RACES_OF_FAERUN_RACES, ...EXPANDED_PSIONICS_RACES, ...BOOK_OF_VILE_DARKNESS_RACES, ...MONSTER_MANUAL_III_RACES, ...MONSTER_MANUAL_IV_RACES, ...MONSTER_MANUAL_V_RACES, ...FIENDISH_CODEX_II_RACES, ...MONSTERNOMICON_RACES, ...CORE_AUDIT_RACES, ...DANDWIKI_RACES, ...HOMEBREW_RACES, ...SPELLJAMMER_RACES, ...MAGIC_OF_INCARNUM_RACES, ...BASTARDS_RACES_A, ...BASTARDS_RACES_B, ...FAMILIARS_RACES, ...QUINTESSENTIAL_DWARF_RACES, ...AASIMAR_TIEFLING_RACES, ...SPELLJAMMER_WEB_RACES, ...PLANAR_HANDBOOK_RACES, ...DOTU_RACES, ...DRAGON_313_RACES, ...DRAGON_314_RACES, ...DRAGON_315_RACES, ...DRAGON_317_RACES]);

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
  ...IRON_KINGDOMS_CLASSES,
  ...DANDWIKI_CLASSES,
  ...EBERRON_CLASSES,
  ...HEROES_OF_HORROR_CLASSES,
  ...MAGIC_OF_INCARNUM_CLASSES,
  ...CHAOS_MAGIC_CLASSES,
  ...WAY_OF_THE_ROGUE_CLASSES,
  ...DUNGEONSCAPE_CLASSES,
  ...DRAGON_PALADINS_CLASSES,
  ...DRAGON_310_CLASSES,
  ...DRAGON_311_CLASSES,
  ...DRAGON_312_CLASSES,
  ...DRAGON_315_CLASSES,
  ...DRAGON_317_CLASSES,
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
  ...FIVE_FINGERS_PRESTIGE_CLASSES,
  ...CORE_AUDIT_PRESTIGE_CLASSES,
  ...HEROES_OF_HORROR_PRESTIGE_CLASSES,
  ...PLANAR_HANDBOOK_PRESTIGE_CLASSES,
  ...MAGIC_OF_INCARNUM_PRESTIGE_CLASSES,
  ...EXPLORERS_HANDBOOK_PRESTIGE_CLASSES,
  ...FIVE_NATIONS_PRESTIGE_CLASSES,
  ...PLAYERS_GUIDE_TO_EBERRON_PRESTIGE_CLASSES,
  ...SHARN_PRESTIGE_CLASSES,
  ...BASTARDS_PRESTIGE_CLASSES,
  ...ALCHEMY_HERBALISTS_PRESTIGE_CLASSES,
  ...HOFD_PRESTIGE_CLASSES,
  ...HOFE_PRESTIGE_CLASSES,
  ...HOHO_PRESTIGE_CLASSES,
  ...DUNGEONSCAPE_PRESTIGE_CLASSES,
  ...CITYSCAPE_PRESTIGE_CLASSES,
  ...FAMILIARS_PRESTIGE_CLASSES,
  ...SPELLS_AND_MAGIC_PRESTIGE_CLASSES,
  ...QUINTESSENTIAL_DWARF_PRESTIGE_CLASSES,
  ...QUINTESSENTIAL_ROGUE_PRESTIGE_CLASSES,
  ...CHAOS_MAGIC_PRESTIGE_CLASSES,
  ...AASIMAR_TIEFLING_PRESTIGE_CLASSES,
  ...WAY_OF_THE_ROGUE_PRESTIGE_CLASSES,
  ...AIRSHIP_PRESTIGE_CLASSES,
  ...DOTU_PRESTIGE_CLASSES,
  ...DRAGON_310_PRESTIGE,
  ...DRAGON_311_PRESTIGE,
  ...DRAGON_312_PRESTIGE,
  ...DRAGON_313_PRESTIGE,
  ...DRAGON_314_PRESTIGE,
  ...DRAGON_315_PRESTIGE,
  ...DRAGON_317_PRESTIGE,
  ...BASTION_PRESTIGE,
]);

export const ALL_TEMPLATES: TemplateDefinition[] = dedupeById([...TEMPLATES, ...HOMEBREW_TEMPLATES, ...BOOK_OF_EXALTED_DEEDS_TEMPLATES, ...SANDSTORM_TEMPLATES, ...RACES_OF_THE_DRAGON_TEMPLATES, ...RACES_OF_FAERUN_TEMPLATES, ...GHOSTWALK_TEMPLATES, ...MONSTER_MANUAL_III_TEMPLATES, ...MONSTER_MANUAL_IV_TEMPLATES, ...MONSTER_MANUAL_V_TEMPLATES, ...MONSTERNOMICON_TEMPLATES, ...CORE_AUDIT_TEMPLATES, ...DANDWIKI_TEMPLATES, ...HEROES_OF_HORROR_TEMPLATES, ...BASTARDS_TEMPLATES, ...CONSTRUCTS_TEMPLATES, ...RELICS_TEMPLATES, ...PLANAR_HANDBOOK_TEMPLATES, ...DRAGON_313_TEMPLATES, ...DRAGON_314_TEMPLATES, ...DRAGON_315_TEMPLATES]);

export const ALL_RANDOM_TABLES: RandomTableDefinition[] = dedupeById([...HOMEBREW_TABLES, ...DANDWIKI_TABLES, ...PILLS_POTIONS_TABLES, ...HOMEBREW_SHIP_TABLES, ...SHIP_NAME_TABLES]);

export const ALL_BODY_MODIFICATIONS: BodyModificationDefinition[] = dedupeById([...BODY_MODIFICATIONS]);

export const ALL_DANDWIKI_REFERENCE_INDEX: DandwikiReferenceEntry[] = dedupeById([...DANDWIKI_REFERENCE_INDEX]);

export const ALL_HOUSE_RULES_INDEX: HouseRuleEntry[] = dedupeById([...HOUSE_RULE_ENTRIES, ...PILLS_POTIONS_HOUSE_RULES]);

export const ALL_RULES_COMPENDIUM_TOPICS: RulesCompendiumTopic[] = dedupeById([...RULES_COMPENDIUM_TOPICS, ...RULES_COMPENDIUM_TOPICS_PART2]);

export const ALL_SUMMONING_SPELL_LIST: SummoningSpellEntry[] = dedupeById([...SUMMONING_SPELL_LIST]);

/**
 * Flaws & Traits pack (2026-11-02, Shaun's direction): the complete
 * Unearthed Arcana lists (13 flaws, 35 traits, full SRD text) plus a
 * dated snapshot of the D&D Wiki homebrew lists (116 flaws, 152
 * traits after name-dedupe against the SRD — the SRD version wins).
 * Feeds the Personality step's Flaws & Traits section; picks are
 * stored on PersonalityProfile.flawIds / traitIds.
 */
export const ALL_FLAWS: FlawTraitDefinition[] = dedupeById([...FLAWS, ...CONSTRUCTS_FLAWS]);
export const ALL_TRAITS: FlawTraitDefinition[] = dedupeById([...TRAITS]);
export { FLAWS, TRAITS };

export const ALL_SKILLS: SkillDefinition[] = dedupeById([...CORE_SKILLS, ...SORCERY_STEAM_SKILLS, ...TOME_OF_BATTLE_SKILLS, ...EXPANDED_PSIONICS_SKILLS, ...TOME_OF_MAGIC_SKILLS, ...MONSTERNOMICON_SKILLS, ...MONSTERNOMICON_MN1_SKILLS, ...IRON_KINGDOMS_SKILLS, ...CORE_AUDIT_SKILLS, ...HOFD_SKILLS, ...HOFE_SKILLS, ...HOHO_SKILLS, ...QUINTESSENTIAL_DWARF_SKILLS, ...WAY_OF_THE_ROGUE_SKILLS]);

export const ALL_FEATS: FeatDefinition[] = dedupeById([...CORE_FEATS, ...EBERRON_FEATS, ...IRON_KINGDOMS_FEATS, ...IRON_KINGDOMS_CH2_FEATS, ...SORCERY_STEAM_FEATS, ...RACES_OF_STONE_FEATS, ...RACES_OF_THE_WILD_FEATS, ...COMPLETE_ADVENTURER_FEATS, ...COMPLETE_WARRIOR_FEATS, ...COMPLETE_ARCANE_FEATS, ...COMPLETE_DIVINE_FEATS, ...BOOK_OF_EXALTED_DEEDS_FEATS, ...FROSTBURN_FEATS, ...SANDSTORM_FEATS, ...MINIATURES_HANDBOOK_FEATS, ...PLAYERS_HANDBOOK_II_FEATS, ...RACES_OF_THE_DRAGON_FEATS, ...RACES_OF_EBERRON_FEATS, ...COMPLETE_CHAMPION_FEATS, ...COMPLETE_MAGE_FEATS, ...COMPLETE_PSIONIC_FEATS, ...COMPLETE_SCOUNDREL_FEATS, ...RACES_OF_DESTINY_FEATS, ...RACES_OF_FAERUN_FEATS, ...TOME_OF_BATTLE_FEATS, ...EXPANDED_PSIONICS_FEATS, ...UNEARTHED_ARCANA_FEATS, ...TOME_OF_MAGIC_FEATS, ...WEAPONS_OF_LEGACY_FEATS, ...HEROES_OF_BATTLE_FEATS, ...DRAGON_MAGIC_FEATS, ...GHOSTWALK_FEATS, ...BOOK_OF_VILE_DARKNESS_FEATS, ...EXEMPLARS_OF_EVIL_FEATS, ...MONSTER_MANUAL_III_FEATS, ...MONSTER_MANUAL_IV_FEATS, ...FIENDISH_CODEX_I_FEATS, ...FIENDISH_CODEX_II_FEATS, ...MONSTER_MANUAL_V_FEATS, ...MONSTERNOMICON_MN1_FEATS, ...LIBER_MECHANIKA_FEATS, ...FIVE_FINGERS_FEATS, ...CORE_AUDIT_FEATS, ...PILLS_POTIONS_FEATS, ...HEROES_OF_HORROR_FEATS, ...MAGIC_OF_INCARNUM_FEATS, ...PLAYERS_GUIDE_TO_EBERRON_FEATS, ...SHARN_FEATS, ...BASTARDS_FEATS, ...ALCHEMY_HERBALISTS_FEATS, ...HOFD_FEATS, ...HOFE_FEATS, ...HOHO_FEATS, ...CONSTRUCTS_FEATS, ...FAMILIARS_FEATS, ...SPELLS_AND_MAGIC_FEATS, ...QUINTESSENTIAL_DWARF_FEATS, ...QUINTESSENTIAL_ROGUE_FEATS, ...CHAOS_MAGIC_FEATS, ...AASIMAR_TIEFLING_FEATS, ...WAY_OF_THE_ROGUE_FEATS, ...RELICS_FEATS, ...DOZEN_SAILING_FEATS, ...PLANAR_HANDBOOK_FEATS, ...DUNGEONSCAPE_FEATS, ...CITYSCAPE_FEATS, ...DOTU_FEATS, ...DRAGON_310_FEATS, ...DRAGON_311_FEATS, ...DRAGON_312_FEATS, ...DRAGON_313_FEATS, ...DRAGON_314_FEATS, ...DRAGON_315_FEATS, ...DRAGON_316_FEATS, ...DRAGON_317_FEATS, ...BASTION_FEATS, ...DRAGON_318_FEATS]);

// Specific magic items extracted into equipment packs during the
// book sweeps, relocated to the magic barrel (Shaun, 2026-11-03);
// see src/data/relocated-magic-items.ts for the full account.
const RELOCATED_MAGIC_ID_SET = new Set(RELOCATED_MAGIC_ITEM_IDS);

// Second purity sweep (Shaun, 2026-11-04): the magic/non-magic
// split lives between the two barrels — see
// src/data/relocated-magic-items-2.ts and
// src/data/barrel-overrides.ts. Equipment loses every relocated
// magic item and every duplicate whose fuller text lives in the
// magic barrel; the magic barrel loses the plainly non-magic
// records (converted back in EQUIPMENT_FROM_MAGIC), the superseded
// condensed bladed crossbow, and renames the Eberron wand sheath
// so it no longer collides with the mundane one. Helmets and
// alchemical substances get their category at barrel level.
const EQUIPMENT_REMOVED_ID_SET = new Set([...RELOCATED_MAGIC_ID_SET, ...RELOCATED_MAGIC_ITEM_2_IDS, ...DUPLICATE_EQUIPMENT_IDS]);
const MAGIC_REMOVED_ID_SET = new Set([...MAGIC_IDS_MOVED_TO_EQUIPMENT, ...SUPERSEDED_MAGIC_IDS]);
const HELMET_EQUIPMENT_ID_SET = new Set(HELMET_EQUIPMENT_IDS);
const ALCHEMICAL_GEAR_ID_SET = new Set(ALCHEMICAL_GEAR_IDS);

export const ALL_EQUIPMENT: EquipmentItem[] = dedupeById([...CORE_EQUIPMENT, ...NEW_EQUIPMENT, ...HOMEBREW_EQUIPMENT, ...SORCERY_STEAM_FIREARM_EQUIPMENT, ...SORCERY_STEAM_ALCHEMICAL_EQUIPMENT, ...LIBER_MECHANIKA_EQUIPMENT, ...LOCK_AND_LOAD_EQUIPMENT, ...MAGIC_ITEM_COMPENDIUM_SPECIFIC_ARMOR, ...MAGIC_ITEM_COMPENDIUM_SPECIFIC_WEAPONS, ...RACES_OF_STONE_EQUIPMENT, ...RACES_OF_THE_WILD_EQUIPMENT, ...COMPLETE_WARRIOR_EQUIPMENT, ...COMPLETE_ADVENTURER_EQUIPMENT, ...COMPLETE_ARCANE_EQUIPMENT, ...BOOK_OF_EXALTED_DEEDS_EQUIPMENT, ...FROSTBURN_EQUIPMENT, ...SANDSTORM_EQUIPMENT, ...MINIATURES_HANDBOOK_EQUIPMENT, ...RACES_OF_THE_DRAGON_EQUIPMENT, ...COMPLETE_CHAMPION_EQUIPMENT, ...COMPLETE_MAGE_EQUIPMENT, ...COMPLETE_PSIONIC_EQUIPMENT, ...COMPLETE_SCOUNDREL_EQUIPMENT, ...HEROES_OF_BATTLE_EQUIPMENT, ...DRAGON_MAGIC_EQUIPMENT, ...RACES_OF_FAERUN_EQUIPMENT, ...EBERRON_EQUIPMENT, ...GHOSTWALK_EQUIPMENT, ...BOOK_OF_VILE_DARKNESS_EQUIPMENT, ...SORCERY_STEAM_EQUIPMENT, ...FIENDISH_CODEX_II_EQUIPMENT, ...MONSTERNOMICON_EQUIPMENT, ...EXPANDED_PSIONICS_EQUIPMENT, ...TOME_OF_MAGIC_EQUIPMENT, ...CORE_AUDIT_EQUIPMENT, ...DANDWIKI_EQUIPMENT, ...QUINTESSENTIAL_DWARF_EQUIPMENT, ...AEG_EQUIPMENT_OMNI, ...BOED_EQUIPMENT_OMNI, ...BOVD_EQUIPMENT_OMNI, ...CAdv_EQUIPMENT_OMNI, ...CArc_EQUIPMENT_OMNI, ...CCh_EQUIPMENT_OMNI, ...CDiv_EQUIPMENT_OMNI, ...CMag_EQUIPMENT_OMNI, ...CSc_EQUIPMENT_OMNI, ...CW_EQUIPMENT_OMNI, ...DMG2_EQUIPMENT_OMNI, ...ECS_EQUIPMENT_OMNI, ...GW_EQUIPMENT_OMNI, ...GG_EQUIPMENT_OMNI, ...MOE_EQUIPMENT_OMNI, ...MUE_EQUIPMENT_OMNI, ...UEG1_EQUIPMENT_OMNI, ...UEG2_EQUIPMENT_OMNI, ...FROST_EQUIPMENT_OMNI, ...SAND_EQUIPMENT_OMNI, ...RWILD_EQUIPMENT_OMNI, ...RSTONE_EQUIPMENT_OMNI, ...RDRAG_EQUIPMENT_OMNI, ...RDEST_EQUIPMENT_OMNI, ...HOB_EQUIPMENT_OMNI, ...MINI_EQUIPMENT_OMNI, ...DMAG_EQUIPMENT_OMNI, ...EOE_EQUIPMENT_OMNI, ...XPH_EQUIPMENT_OMNI, ...ELH_EQUIPMENT_OMNI, ...UA_EQUIPMENT_OMNI, ...WOL_EQUIPMENT_OMNI, ...DOTF_EQUIPMENT_OMNI, ...SNS_EQUIPMENT_OMNI, ...SNF_EQUIPMENT_OMNI, ...TNB_EQUIPMENT_OMNI, ...MOTW_EQUIPMENT_OMNI, ...POISC_EQUIPMENT_OMNI, ...CURSE_EQUIPMENT_OMNI, ...FARC_EQUIPMENT_OMNI, ...ALCH_EQUIPMENT_OMNI, ...BOOZE_EQUIPMENT_OMNI, ...GWB_EQUIPMENT_OMNI, ...GLF_EQUIPMENT_OMNI, ...GUILD_EQUIPMENT_OMNI, ...STEED_EQUIPMENT_OMNI, ...PIR_EQUIPMENT_OMNI, ...AIR_EQUIPMENT_OMNI, ...SHIP_EQUIPMENT_OMNI, ...HELM_EQUIPMENT_OMNI, ...WOTR_EQUIPMENT_OMNI, ...QELF_EQUIPMENT_OMNI, ...QKOB_EQUIPMENT_OMNI, ...HOFE_EQUIPMENT_OMNI, ...SS_EQUIPMENT_OMNI, ...STW_EQUIPMENT_OMNI, ...AESS_EQUIPMENT_OMNI, ...HOUSE_EQUIPMENT_OMNI, ...DMGR_EQUIPMENT_OMNI, ...XRES_EQUIPMENT_OMNI, ...MATL_EQUIPMENT_OMNI, ...INFU_EQUIPMENT_OMNI, ...HARR_EQUIPMENT_OMNI, ...EQUIPMENT_FROM_MAGIC, ...SPELLJAMMER_EQUIPMENT, ...EXPLORERS_HANDBOOK_EQUIPMENT, ...PLAYERS_GUIDE_TO_EBERRON_EQUIPMENT, ...SHARN_EQUIPMENT, ...ALCHEMY_HERBALISTS_EQUIPMENT, ...HOFD_EQUIPMENT, ...HOFE_EQUIPMENT, ...HOHO_EQUIPMENT, ...CONSTRUCTS_EQUIPMENT, ...QUINTESSENTIAL_ROGUE_EQUIPMENT, ...QUINTESSENTIAL_ROGUE_POISONS, ...QUINTESSENTIAL_ROGUE_TRAP_DEVICES, ...WAY_OF_THE_ROGUE_EQUIPMENT, ...WAY_OF_THE_ROGUE_POISONS, ...AASIMAR_TIEFLING_EQUIPMENT, ...SPELLJAMMER_WEB_EQUIPMENT, ...SPELLJAMMER_WEB_SHIPS_PASS2, ...HOMEBREW_SHIPS, ...HOMEBREW_SHIP_SYSTEMS, ...PIRATES_SHIPS, ...FAN_HELM_EQUIPMENT, ...PLANAR_HANDBOOK_EQUIPMENT, ...DUNGEONSCAPE_EQUIPMENT, ...CITYSCAPE_EQUIPMENT, ...DOTU_EQUIPMENT, ...DRAGON_312_EQUIPMENT, ...DRAGON_315_EQUIPMENT, ...DRAGON_316_EQUIPMENT, ...DRAGON_317_EQUIPMENT, ...BASTION_EQUIPMENT, ...DRAGON_318_EQUIPMENT]).filter((item) => !EQUIPMENT_REMOVED_ID_SET.has(item.id)).map((item) => (HELMET_EQUIPMENT_ID_SET.has(item.id) ? { ...item, category: "helmet" } : ALCHEMICAL_GEAR_ID_SET.has(item.id) ? { ...item, category: "alchemical gear" } : item));

export const ALL_MAGIC_ITEMS: MagicItemDefinition[] = dedupeById([...RELOCATED_MAGIC_ITEMS, ...RELOCATED_MAGIC_ITEMS_2, ...CORE_MAGIC_ITEMS, ...SORCERY_STEAM_FIREARM_MAGIC_ITEMS, ...LOCK_AND_LOAD_MAGIC_ITEMS, ...MAGIC_ITEM_COMPENDIUM_ARMOR_PROPERTIES, ...MAGIC_ITEM_COMPENDIUM_WEAPON_PROPERTIES, ...MAGIC_ITEM_COMPENDIUM_AUGMENT_CRYSTALS, ...MAGIC_ITEM_COMPENDIUM_CLOTHING, ...MAGIC_ITEM_COMPENDIUM_TOOLS, ...MAGIC_ITEM_COMPENDIUM_ITEM_SETS, ...RACES_OF_STONE_MAGIC_ITEMS, ...RACES_OF_THE_WILD_MAGIC_ITEMS, ...COMPLETE_ADVENTURER_MAGIC_ITEMS, ...COMPLETE_ARCANE_MAGIC_ITEMS, ...COMPLETE_DIVINE_MAGIC_ITEMS, ...BOOK_OF_EXALTED_DEEDS_MAGIC_ITEMS, ...FROSTBURN_MAGIC_ITEMS, ...SANDSTORM_MAGIC_ITEMS, ...MINIATURES_HANDBOOK_MAGIC_ITEMS, ...TOME_OF_BATTLE_MAGIC_ITEMS, ...MONSTER_MANUAL_III_MAGIC_ITEMS, ...RACES_OF_THE_DRAGON_MAGIC_ITEMS, ...RACES_OF_EBERRON_MAGIC_ITEMS, ...COMPLETE_CHAMPION_MAGIC_ITEMS, ...COMPLETE_MAGE_MAGIC_ITEMS, ...COMPLETE_PSIONIC_MAGIC_ITEMS, ...COMPLETE_SCOUNDREL_MAGIC_ITEMS, ...HEROES_OF_BATTLE_MAGIC_ITEMS, ...DRAGON_MAGIC_MAGIC_ITEMS, ...RACES_OF_FAERUN_MAGIC_ITEMS, ...EBERRON_MAGIC_ITEMS, ...GHOSTWALK_MAGIC_ITEMS, ...BOOK_OF_VILE_DARKNESS_MAGIC_ITEMS, ...SORCERY_STEAM_MAGIC_ITEMS, ...MONSTERNOMICON_MAGIC_ITEMS, ...EXPANDED_PSIONICS_MAGIC_ITEMS, ...TOME_OF_MAGIC_MAGIC_ITEMS, ...CORE_AUDIT_MAGIC_ITEMS, ...CORE_AUDIT_SPECIFIC_ITEMS, ...CORE_AUDIT_POTIONS, ...CORE_AUDIT_WONDROUS, ...GENERATED_WANDS, ...GENERATED_SCROLLS, ...DMG_ARTIFACTS, ...DMG_SPECIFIC_WEAPONS_ARMOR, ...DMG_AMMUNITION, ...MIC_SPECIFIC_ARMOR_SHIELDS, ...MIC_SPECIFIC_WEAPONS, ...AEG_MAGIC_ITEMS_OMNI, ...BOED_MAGIC_ITEMS_OMNI, ...BOVD_MAGIC_ITEMS_OMNI, ...CAdv_MAGIC_ITEMS_OMNI, ...CArc_MAGIC_ITEMS_OMNI, ...CCh_MAGIC_ITEMS_OMNI, ...CDiv_MAGIC_ITEMS_OMNI, ...CMag_MAGIC_ITEMS_OMNI, ...CSc_MAGIC_ITEMS_OMNI, ...CW_MAGIC_ITEMS_OMNI, ...DMG2_MAGIC_ITEMS_OMNI, ...ECS_MAGIC_ITEMS_OMNI, ...GW_MAGIC_ITEMS_OMNI, ...GG_MAGIC_ITEMS_OMNI, ...MOE_MAGIC_ITEMS_OMNI, ...MUE_MAGIC_ITEMS_OMNI, ...UEG1_MAGIC_ITEMS_OMNI, ...UEG2_MAGIC_ITEMS_OMNI, ...FROST_MAGIC_ITEMS_OMNI, ...SAND_MAGIC_ITEMS_OMNI, ...RWILD_MAGIC_ITEMS_OMNI, ...RSTONE_MAGIC_ITEMS_OMNI, ...RDRAG_MAGIC_ITEMS_OMNI, ...RDEST_MAGIC_ITEMS_OMNI, ...HOB_MAGIC_ITEMS_OMNI, ...MINI_MAGIC_ITEMS_OMNI, ...DMAG_MAGIC_ITEMS_OMNI, ...EOE_MAGIC_ITEMS_OMNI, ...XPH_MAGIC_ITEMS_OMNI, ...ELH_MAGIC_ITEMS_OMNI, ...UA_MAGIC_ITEMS_OMNI, ...WOL_MAGIC_ITEMS_OMNI, ...DOTF_MAGIC_ITEMS_OMNI, ...SNS_MAGIC_ITEMS_OMNI, ...SNF_MAGIC_ITEMS_OMNI, ...TNB_MAGIC_ITEMS_OMNI, ...MOTW_MAGIC_ITEMS_OMNI, ...POISC_MAGIC_ITEMS_OMNI, ...CURSE_MAGIC_ITEMS_OMNI, ...FARC_MAGIC_ITEMS_OMNI, ...ALCH_MAGIC_ITEMS_OMNI, ...BOOZE_MAGIC_ITEMS_OMNI, ...GWB_MAGIC_ITEMS_OMNI, ...GLF_MAGIC_ITEMS_OMNI, ...GUILD_MAGIC_ITEMS_OMNI, ...STEED_MAGIC_ITEMS_OMNI, ...PIR_MAGIC_ITEMS_OMNI, ...AIR_MAGIC_ITEMS_OMNI, ...SHIP_MAGIC_ITEMS_OMNI, ...HELM_MAGIC_ITEMS_OMNI, ...WOTR_MAGIC_ITEMS_OMNI, ...QELF_MAGIC_ITEMS_OMNI, ...QKOB_MAGIC_ITEMS_OMNI, ...HOFE_MAGIC_ITEMS_OMNI, ...SS_MAGIC_ITEMS_OMNI, ...STW_MAGIC_ITEMS_OMNI, ...AESS_MAGIC_ITEMS_OMNI, ...HOUSE_MAGIC_ITEMS_OMNI, ...DMGR_MAGIC_ITEMS_OMNI, ...XRES_MAGIC_ITEMS_OMNI, ...MATL_MAGIC_ITEMS_OMNI, ...INFU_MAGIC_ITEMS_OMNI, ...HARR_MAGIC_ITEMS_OMNI, ...SPELLJAMMER_MAGIC_ITEMS, ...HEROES_OF_HORROR_MAGIC_ITEMS, ...MAGIC_OF_INCARNUM_MAGIC_ITEMS, ...EXPLORERS_HANDBOOK_MAGIC_ITEMS, ...PLAYERS_GUIDE_TO_EBERRON_MAGIC_ITEMS, ...SHARN_MAGIC_ITEMS, ...FORGE_OF_WAR_MAGIC_ITEMS, ...BASTARDS_MAGIC_ITEMS, ...ALCHEMY_HERBALISTS_MAGIC_ITEMS, ...SPELLS_AND_MAGIC_MAGIC_ITEMS, ...QUINTESSENTIAL_DWARF_MAGIC_ITEMS, ...QUINTESSENTIAL_ROGUE_MAGIC_ITEMS, ...CHAOS_MAGIC_MAGIC_ITEMS, ...AASIMAR_TIEFLING_MAGIC_ITEMS, ...WAY_OF_THE_ROGUE_MAGIC_ITEMS, ...RELICS_MAGIC_ITEMS, ...SPELLJAMMER_WEB_MAGIC_ITEMS, ...DOZEN_SAILING_MAGIC_ITEMS, ...FAN_HELM_MAGIC_ITEMS, ...PLANAR_HANDBOOK_MAGIC_ITEMS, ...DUNGEONSCAPE_MAGIC_ITEMS, ...CITYSCAPE_MAGIC_ITEMS, ...DUNGEON_SURVIVAL_GUIDE_MAGIC_ITEMS, ...DOTU_MAGIC_ITEMS, ...RUM_MAGIC_ITEMS, ...DRAGON_312_MAGIC_ITEMS, ...DRAGON_313_MAGIC_ITEMS, ...DRAGON_314_MAGIC_ITEMS, ...DRAGON_315_MAGIC_ITEMS, ...DRAGON_316_MAGIC_ITEMS, ...DRAGON_317_MAGIC_ITEMS, ...DRAGON_318_MAGIC_ITEMS]).filter((item) => !MAGIC_REMOVED_ID_SET.has(item.id)).map((item) => { const renamed = MAGIC_ID_RENAMES[item.id]; const recategorized = MAGIC_CATEGORY_OVERRIDES[item.id]; return renamed || recategorized ? { ...item, ...(renamed ? { id: renamed } : {}), ...(recategorized ? { category: recategorized } : {}) } : item; });

export { RACES, TEMPLATES, LEGACY_CLASSES, CORE_CLASSES, NEW_BASE_CLASSES, CORE_PRESTIGE_CLASSES, CORE_SKILLS, CORE_FEATS, CORE_EQUIPMENT, NEW_EQUIPMENT, CORE_MAGIC_ITEMS, EBERRON_RACES, EBERRON_PRESTIGE_CLASSES, EBERRON_CLASSES, EBERRON_FEATS, IRON_KINGDOMS_RACES, IRON_KINGDOMS_FEATS, IRON_KINGDOMS_SKILLS, IRON_KINGDOMS_CLASSES, IRON_KINGDOMS_CH2_FEATS, IRON_KINGDOMS_SPELLS, SORCERY_STEAM_CLASSES, SORCERY_STEAM_PRESTIGE_CLASSES, SORCERY_STEAM_SKILLS, SORCERY_STEAM_FEATS, SORCERY_STEAM_FIREARM_EQUIPMENT, SORCERY_STEAM_ALCHEMICAL_EQUIPMENT, SORCERY_STEAM_FIREARM_MAGIC_ITEMS, HOMEBREW_TEMPLATES, HOMEBREW_TABLES, HOMEBREW_RACES, HOMEBREW_EQUIPMENT, HOUSE_RULE_ENTRIES, SUMMONING_SPELL_LIST, BODY_MODIFICATIONS, DANDWIKI_CLASSES, DANDWIKI_RACES, DANDWIKI_TEMPLATES, DANDWIKI_EQUIPMENT, DANDWIKI_TABLES, RACES_OF_STONE_RACES, RACES_OF_STONE_PRESTIGE_CLASSES, RACES_OF_STONE_FEATS, RACES_OF_THE_WILD_RACES, RACES_OF_THE_WILD_PRESTIGE_CLASSES, RACES_OF_THE_WILD_FEATS, COMPLETE_ADVENTURER_PRESTIGE_CLASSES, COMPLETE_ADVENTURER_FEATS, COMPLETE_WARRIOR_PRESTIGE_CLASSES, COMPLETE_WARRIOR_FEATS, COMPLETE_ARCANE_CLASSES, COMPLETE_ARCANE_PRESTIGE_CLASSES, COMPLETE_ARCANE_FEATS, COMPLETE_DIVINE_CLASSES, COMPLETE_DIVINE_PRESTIGE_CLASSES, COMPLETE_DIVINE_FEATS, BOOK_OF_EXALTED_DEEDS_PRESTIGE_CLASSES, BOOK_OF_EXALTED_DEEDS_FEATS, BOOK_OF_EXALTED_DEEDS_TEMPLATES, FROSTBURN_RACES, FROSTBURN_PRESTIGE_CLASSES, FROSTBURN_FEATS, SANDSTORM_RACES, SANDSTORM_PRESTIGE_CLASSES, SANDSTORM_FEATS, SANDSTORM_TEMPLATES, MINIATURES_HANDBOOK_CLASSES, MINIATURES_HANDBOOK_PRESTIGE_CLASSES, MINIATURES_HANDBOOK_FEATS, PLAYERS_HANDBOOK_II_FEATS, PLAYERS_HANDBOOK_II_SPELLS, RACES_OF_THE_DRAGON_RACES, RACES_OF_THE_DRAGON_TEMPLATES, RACES_OF_THE_DRAGON_PRESTIGE_CLASSES, RACES_OF_THE_DRAGON_FEATS, RACES_OF_EBERRON_RACES, RACES_OF_EBERRON_PRESTIGE_CLASSES, RACES_OF_EBERRON_FEATS, COMPLETE_CHAMPION_PRESTIGE_CLASSES, COMPLETE_CHAMPION_FEATS, COMPLETE_MAGE_PRESTIGE_CLASSES, COMPLETE_MAGE_FEATS, COMPLETE_PSIONIC_CLASSES, COMPLETE_PSIONIC_PRESTIGE_CLASSES, COMPLETE_PSIONIC_FEATS, COMPLETE_PSIONIC_RACES, COMPLETE_SCOUNDREL_PRESTIGE_CLASSES, COMPLETE_SCOUNDREL_FEATS, RACES_OF_DESTINY_RACES, RACES_OF_DESTINY_PRESTIGE_CLASSES, RACES_OF_DESTINY_FEATS, RACES_OF_FAERUN_RACES, RACES_OF_FAERUN_TEMPLATES, RACES_OF_FAERUN_PRESTIGE_CLASSES, RACES_OF_FAERUN_FEATS, TOME_OF_BATTLE_CLASSES, TOME_OF_BATTLE_SKILLS, TOME_OF_BATTLE_PRESTIGE_CLASSES, TOME_OF_BATTLE_FEATS, EXPANDED_PSIONICS_RACES, EXPANDED_PSIONICS_CLASSES, EXPANDED_PSIONICS_SKILLS, EXPANDED_PSIONICS_PRESTIGE_CLASSES, EXPANDED_PSIONICS_FEATS, UNEARTHED_ARCANA_FEATS, TOME_OF_MAGIC_CLASSES, TOME_OF_MAGIC_SKILLS, TOME_OF_MAGIC_PRESTIGE_CLASSES, TOME_OF_MAGIC_FEATS, WEAPONS_OF_LEGACY_FEATS, WEAPONS_OF_LEGACY_PRESTIGE_CLASSES, HEROES_OF_BATTLE_FEATS, HEROES_OF_BATTLE_PRESTIGE_CLASSES, DRAGON_MAGIC_CLASSES, DRAGON_MAGIC_PRESTIGE_CLASSES, DRAGON_MAGIC_FEATS, GHOSTWALK_CLASSES, GHOSTWALK_PRESTIGE_CLASSES, GHOSTWALK_FEATS, GHOSTWALK_TEMPLATES, BOOK_OF_VILE_DARKNESS_RACES, BOOK_OF_VILE_DARKNESS_FEATS, BOOK_OF_VILE_DARKNESS_PRESTIGE_CLASSES, EXEMPLARS_OF_EVIL_FEATS, MONSTER_MANUAL_III_RACES, MONSTER_MANUAL_III_TEMPLATES, MONSTER_MANUAL_III_FEATS, MONSTER_MANUAL_IV_RACES, MONSTER_MANUAL_IV_TEMPLATES, MONSTER_MANUAL_IV_FEATS, MONSTER_MANUAL_V_RACES, MONSTER_MANUAL_V_TEMPLATES, MONSTER_MANUAL_V_FEATS, FIENDISH_CODEX_I_FEATS, FIENDISH_CODEX_II_RACES, FIENDISH_CODEX_II_FEATS, FIENDISH_CODEX_II_PRESTIGE_CLASSES, MONSTERNOMICON_RACES, MONSTERNOMICON_TEMPLATES, MONSTERNOMICON_CLASSES, MONSTERNOMICON_SKILLS, MONSTERNOMICON_MN1_SKILLS, MONSTERNOMICON_PRESTIGE_CLASSES, MONSTERNOMICON_MN1_FEATS, MONSTERNOMICON_MN1_PRESTIGE_CLASSES, LIBER_MECHANIKA_CLASSES, LIBER_MECHANIKA_PRESTIGE_CLASSES, LIBER_MECHANIKA_FEATS, LIBER_MECHANIKA_EQUIPMENT, FIVE_FINGERS_FEATS, FIVE_FINGERS_PRESTIGE_CLASSES, LOCK_AND_LOAD_EQUIPMENT, LOCK_AND_LOAD_MAGIC_ITEMS, MAGIC_ITEM_COMPENDIUM_ARMOR_PROPERTIES, MAGIC_ITEM_COMPENDIUM_WEAPON_PROPERTIES, MAGIC_ITEM_COMPENDIUM_AUGMENT_CRYSTALS, MAGIC_ITEM_COMPENDIUM_SPECIFIC_ARMOR, MAGIC_ITEM_COMPENDIUM_SPECIFIC_WEAPONS, MAGIC_ITEM_COMPENDIUM_CLOTHING, MAGIC_ITEM_COMPENDIUM_TOOLS, MAGIC_ITEM_COMPENDIUM_ITEM_SETS, RACES_OF_STONE_EQUIPMENT, RACES_OF_THE_WILD_EQUIPMENT, COMPLETE_WARRIOR_EQUIPMENT, COMPLETE_ADVENTURER_EQUIPMENT, COMPLETE_ARCANE_EQUIPMENT, BOOK_OF_EXALTED_DEEDS_EQUIPMENT, FROSTBURN_EQUIPMENT, SANDSTORM_EQUIPMENT, MINIATURES_HANDBOOK_EQUIPMENT, RACES_OF_THE_DRAGON_EQUIPMENT, COMPLETE_CHAMPION_EQUIPMENT, COMPLETE_MAGE_EQUIPMENT, COMPLETE_PSIONIC_EQUIPMENT, COMPLETE_SCOUNDREL_EQUIPMENT, HEROES_OF_BATTLE_EQUIPMENT, DRAGON_MAGIC_EQUIPMENT, RACES_OF_FAERUN_EQUIPMENT, EBERRON_EQUIPMENT, GHOSTWALK_EQUIPMENT, BOOK_OF_VILE_DARKNESS_EQUIPMENT, SORCERY_STEAM_EQUIPMENT, FIENDISH_CODEX_II_EQUIPMENT, MONSTERNOMICON_EQUIPMENT, EXPANDED_PSIONICS_EQUIPMENT, TOME_OF_MAGIC_EQUIPMENT, RACES_OF_STONE_MAGIC_ITEMS, RACES_OF_THE_WILD_MAGIC_ITEMS, COMPLETE_ADVENTURER_MAGIC_ITEMS, COMPLETE_ARCANE_MAGIC_ITEMS, COMPLETE_DIVINE_MAGIC_ITEMS, BOOK_OF_EXALTED_DEEDS_MAGIC_ITEMS, FROSTBURN_MAGIC_ITEMS, SANDSTORM_MAGIC_ITEMS, MINIATURES_HANDBOOK_MAGIC_ITEMS, TOME_OF_BATTLE_MAGIC_ITEMS, MONSTER_MANUAL_III_MAGIC_ITEMS, RACES_OF_THE_DRAGON_MAGIC_ITEMS, RACES_OF_EBERRON_MAGIC_ITEMS, COMPLETE_CHAMPION_MAGIC_ITEMS, COMPLETE_MAGE_MAGIC_ITEMS, COMPLETE_PSIONIC_MAGIC_ITEMS, COMPLETE_SCOUNDREL_MAGIC_ITEMS, HEROES_OF_BATTLE_MAGIC_ITEMS, DRAGON_MAGIC_MAGIC_ITEMS, RACES_OF_FAERUN_MAGIC_ITEMS, EBERRON_MAGIC_ITEMS, GHOSTWALK_MAGIC_ITEMS, BOOK_OF_VILE_DARKNESS_MAGIC_ITEMS, SORCERY_STEAM_MAGIC_ITEMS, MONSTERNOMICON_MAGIC_ITEMS, EXPANDED_PSIONICS_MAGIC_ITEMS, TOME_OF_MAGIC_MAGIC_ITEMS };

/**
 * Batch 12 (spells): ALL_SPELLS merges the SRD core list with Spell
 * Compendium (the backbone — where SC reprints a spell it governs and
 * the SRD record is omitted at generation time) plus per-book leftover
 * spell packs. Batch 12b adds the leftover per-book spell chapters
 * (BoED, BoVD, the Completes, Ghostwalk + its web enhancement,
 * Frostburn, Sandstorm, Dragon Magic, Heroes of Battle, both Fiendish
 * Codices, Sorcery & Steam, ECS, Races of Eberron), wired after the SC
 * files so SC keeps governing on any id collision. Deduped by id,
 * first pack wins. ALL_CASTING_PROFILES
 * carries the per-class spells-per-day / spells-known tables (levels
 * 1–10) keyed by base-class id. See REBUILD-NOTES.md Batch 12 addendum.
 */
export const ALL_SPELLS: SpellDefinition[] = dedupeById([...SRD_SPELLS, ...SPELL_COMPENDIUM_SPELLS_A, ...SPELL_COMPENDIUM_SPELLS_B, ...SPELL_COMPENDIUM_SPELLS_C, ...SPELL_COMPENDIUM_SPELLS_D, ...BOOK_OF_EXALTED_DEEDS_SPELLS, ...BOOK_OF_VILE_DARKNESS_SPELLS, ...FROSTBURN_SPELLS, ...SANDSTORM_SPELLS, ...COMPLETE_ARCANE_SPELLS, ...COMPLETE_MAGE_SPELLS, ...COMPLETE_CHAMPION_SPELLS, ...COMPLETE_SCOUNDREL_SPELLS, ...COMPLETE_WARRIOR_SPELLS, ...COMPLETE_DIVINE_SPELLS, ...GHOSTWALK_SPELLS, ...GHOSTWALK_WEB_ENHANCEMENT_SPELLS, ...DRAGON_MAGIC_SPELLS, ...HEROES_OF_BATTLE_SPELLS, ...FIENDISH_CODEX_I_SPELLS, ...FIENDISH_CODEX_II_SPELLS, ...SORCERY_AND_STEAM_SPELLS, ...EBERRON_CAMPAIGN_SETTING_SPELLS, ...RACES_OF_EBERRON_SPELLS, ...IRON_KINGDOMS_SPELLS, ...PLAYERS_HANDBOOK_II_SPELLS, ...CORE_AUDIT_SPELLS, ...SPELLJAMMER_SPELLS, ...HEROES_OF_HORROR_SPELLS, ...MAGIC_OF_INCARNUM_SPELLS, ...EXPLORERS_HANDBOOK_SPELLS, ...FIVE_NATIONS_SPELLS, ...PLAYERS_GUIDE_TO_EBERRON_SPELLS, ...SHARN_SPELLS, ...FORGE_OF_WAR_SPELLS, ...EXPANDED_PSIONICS_POWERS, ...COMPLETE_PSIONIC_POWERS, ...BASTARDS_SPELLS, ...FAMILIARS_SPELLS, ...SPELLS_AND_MAGIC_SPELLS, ...QUINTESSENTIAL_DWARF_SPELLS, ...CHAOS_MAGIC_SPELLS, ...AASIMAR_TIEFLING_SPELLS, ...WAY_OF_THE_ROGUE_SPELLS, ...PERFORMANCE_MAGIC_SPELLS, ...SPELLJAMMER_WEB_SPELLS, ...DOZEN_SAILING_SPELLS, ...PLANAR_HANDBOOK_SPELLS, ...CITYSCAPE_SPELLS, ...DOTU_SPELLS, ...RUM_SPELLS, ...DRAGON_312_SPELLS, ...DRAGON_313_SPELLS, ...DRAGON_314_SPELLS, ...DRAGON_315_SPELLS, ...DRAGON_317_SPELLS, ...DRAGON_317_POWERS, ...DRAGON_318_SPELLS]);
export const ALL_CASTING_PROFILES: CastingProfile[] = [...CASTING_PROFILES];
export const CASTING_PROFILES_BY_ID: Record<string, CastingProfile> = Object.fromEntries(ALL_CASTING_PROFILES.map((p) => [p.classId, p]));
export { CORE_AUDIT_RACES, CORE_AUDIT_PRESTIGE_CLASSES, CORE_AUDIT_TEMPLATES, CORE_AUDIT_FEATS, CORE_AUDIT_SKILLS, CORE_AUDIT_EQUIPMENT, CORE_AUDIT_MAGIC_ITEMS, CORE_AUDIT_SPECIFIC_ITEMS, CORE_AUDIT_POTIONS, CORE_AUDIT_WONDROUS, DMG_ARTIFACTS, DMG_SPECIFIC_WEAPONS_ARMOR, DMG_AMMUNITION, MIC_SPECIFIC_ARMOR_SHIELDS, MIC_SPECIFIC_WEAPONS, CORE_AUDIT_SPELLS };
export { AEG_MAGIC_ITEMS_OMNI, AEG_EQUIPMENT_OMNI, BOED_MAGIC_ITEMS_OMNI, BOED_EQUIPMENT_OMNI, BOVD_MAGIC_ITEMS_OMNI, BOVD_EQUIPMENT_OMNI, CAdv_MAGIC_ITEMS_OMNI, CAdv_EQUIPMENT_OMNI, CArc_MAGIC_ITEMS_OMNI, CArc_EQUIPMENT_OMNI, CCh_MAGIC_ITEMS_OMNI, CCh_EQUIPMENT_OMNI, CDiv_MAGIC_ITEMS_OMNI, CDiv_EQUIPMENT_OMNI, CMag_MAGIC_ITEMS_OMNI, CMag_EQUIPMENT_OMNI, CSc_MAGIC_ITEMS_OMNI, CSc_EQUIPMENT_OMNI, CW_MAGIC_ITEMS_OMNI, CW_EQUIPMENT_OMNI, DMG2_MAGIC_ITEMS_OMNI, DMG2_EQUIPMENT_OMNI, ECS_MAGIC_ITEMS_OMNI, ECS_EQUIPMENT_OMNI, GW_MAGIC_ITEMS_OMNI, GW_EQUIPMENT_OMNI, GG_MAGIC_ITEMS_OMNI, GG_EQUIPMENT_OMNI, MOE_MAGIC_ITEMS_OMNI, MOE_EQUIPMENT_OMNI, MUE_MAGIC_ITEMS_OMNI, MUE_EQUIPMENT_OMNI, UEG1_MAGIC_ITEMS_OMNI, UEG1_EQUIPMENT_OMNI, UEG2_MAGIC_ITEMS_OMNI, UEG2_EQUIPMENT_OMNI };
export { FROST_MAGIC_ITEMS_OMNI, FROST_EQUIPMENT_OMNI, SAND_MAGIC_ITEMS_OMNI, SAND_EQUIPMENT_OMNI, RWILD_MAGIC_ITEMS_OMNI, RWILD_EQUIPMENT_OMNI, RSTONE_MAGIC_ITEMS_OMNI, RSTONE_EQUIPMENT_OMNI, RDRAG_MAGIC_ITEMS_OMNI, RDRAG_EQUIPMENT_OMNI, RDEST_MAGIC_ITEMS_OMNI, RDEST_EQUIPMENT_OMNI, HOB_MAGIC_ITEMS_OMNI, HOB_EQUIPMENT_OMNI, MINI_MAGIC_ITEMS_OMNI, MINI_EQUIPMENT_OMNI, DMAG_MAGIC_ITEMS_OMNI, DMAG_EQUIPMENT_OMNI, EOE_MAGIC_ITEMS_OMNI, EOE_EQUIPMENT_OMNI, XPH_MAGIC_ITEMS_OMNI, XPH_EQUIPMENT_OMNI, ELH_MAGIC_ITEMS_OMNI, ELH_EQUIPMENT_OMNI, UA_MAGIC_ITEMS_OMNI, UA_EQUIPMENT_OMNI, WOL_MAGIC_ITEMS_OMNI, WOL_EQUIPMENT_OMNI, DOTF_MAGIC_ITEMS_OMNI, DOTF_EQUIPMENT_OMNI, SNS_MAGIC_ITEMS_OMNI, SNS_EQUIPMENT_OMNI, SNF_MAGIC_ITEMS_OMNI, SNF_EQUIPMENT_OMNI, TNB_MAGIC_ITEMS_OMNI, TNB_EQUIPMENT_OMNI, MOTW_MAGIC_ITEMS_OMNI, MOTW_EQUIPMENT_OMNI, POISC_MAGIC_ITEMS_OMNI, POISC_EQUIPMENT_OMNI, CURSE_MAGIC_ITEMS_OMNI, CURSE_EQUIPMENT_OMNI, FARC_MAGIC_ITEMS_OMNI, FARC_EQUIPMENT_OMNI, ALCH_MAGIC_ITEMS_OMNI, ALCH_EQUIPMENT_OMNI, BOOZE_MAGIC_ITEMS_OMNI, BOOZE_EQUIPMENT_OMNI, GWB_MAGIC_ITEMS_OMNI, GWB_EQUIPMENT_OMNI, GLF_MAGIC_ITEMS_OMNI, GLF_EQUIPMENT_OMNI, GUILD_MAGIC_ITEMS_OMNI, GUILD_EQUIPMENT_OMNI, STEED_MAGIC_ITEMS_OMNI, STEED_EQUIPMENT_OMNI, PIR_MAGIC_ITEMS_OMNI, PIR_EQUIPMENT_OMNI, AIR_MAGIC_ITEMS_OMNI, AIR_EQUIPMENT_OMNI, SHIP_MAGIC_ITEMS_OMNI, SHIP_EQUIPMENT_OMNI, HELM_MAGIC_ITEMS_OMNI, HELM_EQUIPMENT_OMNI, WOTR_MAGIC_ITEMS_OMNI, WOTR_EQUIPMENT_OMNI, QELF_MAGIC_ITEMS_OMNI, QELF_EQUIPMENT_OMNI, QKOB_MAGIC_ITEMS_OMNI, QKOB_EQUIPMENT_OMNI, HOFE_MAGIC_ITEMS_OMNI, HOFE_EQUIPMENT_OMNI, SS_MAGIC_ITEMS_OMNI, SS_EQUIPMENT_OMNI, STW_MAGIC_ITEMS_OMNI, STW_EQUIPMENT_OMNI, AESS_MAGIC_ITEMS_OMNI, AESS_EQUIPMENT_OMNI, HOUSE_MAGIC_ITEMS_OMNI, HOUSE_EQUIPMENT_OMNI };
export { DMGR_MAGIC_ITEMS_OMNI, DMGR_EQUIPMENT_OMNI, XRES_MAGIC_ITEMS_OMNI, XRES_EQUIPMENT_OMNI };
export { BASTARDS_RACES_A, BASTARDS_RACES_B, BASTARDS_TEMPLATES, BASTARDS_FEATS, BASTARDS_PRESTIGE_CLASSES, BASTARDS_SPELLS, BASTARDS_MAGIC_ITEMS, ALCHEMY_HERBALISTS_FEATS, ALCHEMY_HERBALISTS_PRESTIGE_CLASSES, ALCHEMY_HERBALISTS_EQUIPMENT, ALCHEMY_HERBALISTS_MAGIC_ITEMS, HOFD_FEATS, HOFD_SKILLS, HOFD_EQUIPMENT, HOFD_PRESTIGE_CLASSES, CONSTRUCTS_FEATS, CONSTRUCTS_FLAWS, CONSTRUCTS_TEMPLATES, CONSTRUCTS_EQUIPMENT, FAMILIARS_SPELLS, FAMILIARS_FEATS, FAMILIARS_PRESTIGE_CLASSES, FAMILIARS_RACES, SPELLS_AND_MAGIC_FEATS, SPELLS_AND_MAGIC_PRESTIGE_CLASSES, SPELLS_AND_MAGIC_SPELLS, SPELLS_AND_MAGIC_MAGIC_ITEMS, QUINTESSENTIAL_DWARF_PRESTIGE_CLASSES, QUINTESSENTIAL_DWARF_FEATS, QUINTESSENTIAL_DWARF_EQUIPMENT, QUINTESSENTIAL_DWARF_MAGIC_ITEMS, QUINTESSENTIAL_DWARF_RACES, QUINTESSENTIAL_DWARF_SPELLS, QUINTESSENTIAL_DWARF_SKILLS, QUINTESSENTIAL_ROGUE_PRESTIGE_CLASSES, QUINTESSENTIAL_ROGUE_FEATS, QUINTESSENTIAL_ROGUE_EQUIPMENT, QUINTESSENTIAL_ROGUE_MAGIC_ITEMS, QUINTESSENTIAL_ROGUE_POISONS, QUINTESSENTIAL_ROGUE_TRAP_DEVICES, CHAOS_MAGIC_CLASSES, CHAOS_MAGIC_PRESTIGE_CLASSES, CHAOS_MAGIC_FEATS, CHAOS_MAGIC_SPELLS, CHAOS_MAGIC_MAGIC_ITEMS, AASIMAR_TIEFLING_RACES, AASIMAR_TIEFLING_FEATS, AASIMAR_TIEFLING_PRESTIGE_CLASSES, AASIMAR_TIEFLING_SPELLS, AASIMAR_TIEFLING_MAGIC_ITEMS, AASIMAR_TIEFLING_EQUIPMENT, WAY_OF_THE_ROGUE_FEATS, WAY_OF_THE_ROGUE_PRESTIGE_CLASSES, WAY_OF_THE_ROGUE_CLASSES, WAY_OF_THE_ROGUE_SKILLS, WAY_OF_THE_ROGUE_EQUIPMENT, WAY_OF_THE_ROGUE_POISONS, WAY_OF_THE_ROGUE_MAGIC_ITEMS, WAY_OF_THE_ROGUE_SPELLS, RELICS_MAGIC_ITEMS, RELICS_FEATS, RELICS_TEMPLATES, PERFORMANCE_MAGIC_SPELLS, SPELLJAMMER_WEB_RACES, SPELLJAMMER_WEB_EQUIPMENT, SPELLJAMMER_WEB_MAGIC_ITEMS, SPELLJAMMER_WEB_SPELLS, SPELLJAMMER_WEB_SHIPS_PASS2, HOMEBREW_SHIPS, HOMEBREW_SHIP_SYSTEMS, HOMEBREW_SHIP_TABLES, PIRATES_SHIPS, DOZEN_SAILING_MAGIC_ITEMS, DOZEN_SAILING_SPELLS, DOZEN_SAILING_FEATS, FAN_HELM_MAGIC_ITEMS, FAN_HELM_EQUIPMENT, AIRSHIP_PRESTIGE_CLASSES, SHIP_NAME_TABLES };
export { MATL_MAGIC_ITEMS_OMNI, MATL_EQUIPMENT_OMNI, INFU_MAGIC_ITEMS_OMNI, INFU_EQUIPMENT_OMNI, HARR_MAGIC_ITEMS_OMNI, HARR_EQUIPMENT_OMNI };
export const SPELLS_BY_ID: Record<string, SpellDefinition> = Object.fromEntries(ALL_SPELLS.map((s) => [s.id, s]));
