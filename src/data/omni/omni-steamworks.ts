/**
 * Omni sweep wave 2 (2026-11-02): Steamworks (12 to Midnight) — this
 * book's items are NONMAGICAL technology, but its technological
 * armor, shield, and weapon special abilities and its named general
 * items are filed in the magic array, where special abilities and
 * wondrous-type items live in this dataset; mundane gear is in the
 * equipment array. All records use ruleset "sorcery_steam".
 * Built: the Chapter 8 mundane gear (p. 137), the technological
 * special abilities, the ten named gizmos (multi-device, 20-charge
 * items priced like staffs and filed under that category; save DCs
 * use the wielder's own statistics), the named general items of
 * Table 8-16, and the two special materials (filed as equipment,
 * following the wave 1 precedent for special materials). NOT built:
 * Chapter 4's roughly 200 devices — they are spell-equivalent class
 * features priced with a "Cost to Build," not market items — nor
 * Chapter 3's metadevice components, nor the generic widget, kit,
 * and schematic device containers, which are priced by device level
 * like wand and scroll tables rather than being unique items
 * (reference prices: widget 187 gp 5 sp at 0 level to 10,500 gp at
 * 4th level; kit and schematic 12 gp 5 sp to 3,825 gp). The Chapter 8
 * table's formula-priced "Device, Nth-level" activation rows are
 * services, not items. One name was already in the catalog and is
 * skipped: "Explosive" (the catalog's +2 bonus record matches this
 * book's price). General-item prices are taken from the item
 * descriptions, which govern over Table 8-16's garbled price column;
 * three items disagree with that column and are flagged in their
 * summaries and the report (goggles of evaluation, gravitational
 * boots, spring boots). Table 8-16 calls the neural amplifier the
 * "neural inducer"; the description heading is used. Flat-cost
 * abilities print a leading "+" in the book, dropped here as a
 * pricing convention. Prices are as printed; summaries and notes
 * are mechanical effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const STW_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "fortification-light",
    "name": "Fortification, Light",
    "category": "armor-special-ability",
    "cost": "+1 bonus",
    "summary": "Technological armor or shield ability: a 25% chance to negate critical hits and sneak attacks against the wearer.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "fortification-moderate",
    "name": "Fortification, Moderate",
    "category": "armor-special-ability",
    "cost": "+3 bonus",
    "summary": "Technological armor or shield ability: a 75% chance to negate critical hits and sneak attacks against the wearer.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "fortification-heavy",
    "name": "Fortification, Heavy",
    "category": "armor-special-ability",
    "cost": "+5 bonus",
    "summary": "Technological armor or shield ability: a 100% chance to negate critical hits and sneak attacks against the wearer.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "vacuum-resistance",
    "name": "Vacuum Resistance",
    "category": "armor-special-ability",
    "cost": "+2 bonus",
    "summary": "Technological armor or shield ability: the wearer gets a second saving throw against vacuum effects.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "acid-resistance-stw",
    "name": "Acid Resistance",
    "category": "armor-special-ability",
    "cost": "18,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 10 points of acid damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "acid-resistance-improved-stw",
    "name": "Acid Resistance, Improved",
    "category": "armor-special-ability",
    "cost": "42,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 20 points of acid damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "acid-resistance-advanced",
    "name": "Acid Resistance, Advanced",
    "category": "armor-special-ability",
    "cost": "66,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 30 points of acid damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "electricity-resistance-stw",
    "name": "Electricity Resistance",
    "category": "armor-special-ability",
    "cost": "18,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 10 points of electricity damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "electricity-resistance-improved-stw",
    "name": "Electricity Resistance, Improved",
    "category": "armor-special-ability",
    "cost": "42,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 20 points of electricity damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "electricity-resistance-advanced",
    "name": "Electricity Resistance, Advanced",
    "category": "armor-special-ability",
    "cost": "66,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 30 points of electricity damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "magnetic-resistance",
    "name": "Magnetic Resistance",
    "category": "armor-special-ability",
    "cost": "18,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 10 points of magnetic damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "magnetic-resistance-improved",
    "name": "Magnetic Resistance, Improved",
    "category": "armor-special-ability",
    "cost": "42,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 20 points of magnetic damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "magnetic-resistance-advanced",
    "name": "Magnetic Resistance, Advanced",
    "category": "armor-special-ability",
    "cost": "66,000 gp",
    "summary": "Technological armor or shield ability: absorbs the first 30 points of magnetic damage from each attack.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "cloaking-stw",
    "name": "Cloaking",
    "category": "armor-special-ability",
    "cost": "+3 bonus",
    "summary": "Technological armor ability (armor only): cloaks the wearer and their gear as a cloak generator, twice per day.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "jamming",
    "name": "Jamming",
    "category": "armor-special-ability",
    "cost": "24,000 gp",
    "summary": "Technological armor or shield ability: grants a +3 chemical bonus on Will saves against mind-affecting and compulsion effects.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "oscillating",
    "name": "Oscillating",
    "category": "shield-special-ability",
    "cost": "+5 bonus",
    "summary": "Technological shield ability (shield only): reflects a device effect back at its activator once per day.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "acidic-stw",
    "name": "Acidic",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Technological weapon ability: while active, the weapon deals an extra +1d6 acid damage.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "acidic-burst",
    "name": "Acidic Burst",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Technological weapon ability: as acidic, plus an extra 1d10 acid damage on a critical hit (2d10 at ×3, 3d10 at ×4).",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "arc-stw",
    "name": "Arc",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Technological weapon ability: the weapon deals an extra +1d6 electricity damage.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "arc-burst",
    "name": "Arc Burst",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Technological weapon ability: as arc, plus an extra 1d10 electricity damage on a critical hit (2d10 at ×3, 3d10 at ×4).",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "chained-stw",
    "name": "Chained",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Technological weapon ability for melee slashing weapons: doubles the weapon's threat range; does not stack with other threat-range doublers.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "disrupting-stw",
    "name": "Disrupting",
    "category": "weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Technological weapon ability: delivers targeted disruption like an electromagnet against technological targets.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "etheric",
    "name": "Etheric",
    "category": "weapon-special-ability",
    "cost": "+4 bonus",
    "summary": "Technological weapon ability: the weapon strikes ethereal creatures normally.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "magnetic-stw",
    "name": "Magnetic",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Technological weapon ability: the weapon deals an extra +1d6 magnetic damage.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "magnetic-burst",
    "name": "Magnetic Burst",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Technological weapon ability: as magnetic, plus extra magnetic damage on a critical hit, scaling with the critical multiplier.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "oxidizing",
    "name": "Oxidizing",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Technological weapon ability: deals an extra +2d6 damage against metallic objects and creatures.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "vacuum-stw",
    "name": "Vacuum",
    "category": "weapon-special-ability",
    "cost": "+4 bonus",
    "summary": "Technological weapon ability: a struck creature must make a Fortitude save (DC 10 + the weapon's enhancement bonus) or fall unconscious from suffocation.",
    "source": "Steamworks — Technological Special Abilities",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "cloaks-gizmo",
    "name": "Cloaks Gizmo",
    "category": "staff",
    "cost": "12,600 gp",
    "summary": "A 20-charge technological gizmo combining a cloak generator, a decloaker, and an improved cloak generator; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "control-gizmo",
    "name": "Control Gizmo",
    "category": "staff",
    "cost": "89,250 gp",
    "summary": "A 20-charge technological gizmo combining a mind control helm, a psychogenic probe, and an improved universal remote; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "destruction-gizmo",
    "name": "Destruction Gizmo",
    "category": "staff",
    "cost": "94,500 gp",
    "summary": "A 20-charge technological gizmo combining a death ray, a flamethrower, and a solar array; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "disruption-gizmo",
    "name": "Disruption Gizmo",
    "category": "staff",
    "cost": "66,300 gp",
    "summary": "A 20-charge technological gizmo combining an electromagnet, an electromagnetic storm inducer, and a magnetic oscillator; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "gravitational-gizmo",
    "name": "Gravitational Gizmo",
    "category": "staff",
    "cost": "52,650 gp",
    "summary": "A 20-charge technological gizmo combining an antigravity inducer, a gravity inducer, a levitator, and a gravity inverter; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "magnetism-gizmo",
    "name": "Magnetism Gizmo",
    "category": "staff",
    "cost": "16,800 gp",
    "summary": "A 20-charge technological gizmo combining a magnetic barrier, a magnetic disruptor, and a magnetic glove; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "protection-gizmo",
    "name": "Protection Gizmo",
    "category": "staff",
    "cost": "36,300 gp",
    "summary": "A 20-charge technological gizmo combining an improved exoskeleton and an instant fortress; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "temporal-gizmo",
    "name": "Temporal Gizmo",
    "category": "staff",
    "cost": "41,250 gp",
    "summary": "A 20-charge technological gizmo combining a phase shifter, a temporal dampener, a flux capacitor, and a temporal accelerator; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "trapsmithing-gizmo",
    "name": "Trapsmithing Gizmo",
    "category": "staff",
    "cost": "57,850 gp",
    "summary": "A 20-charge technological gizmo combining an instant prison and trap kits III, V, and VII; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "travel-gizmo",
    "name": "Travel Gizmo",
    "category": "staff",
    "cost": "27,000 gp",
    "summary": "A 20-charge technological gizmo combining an improved ornithopter and a routefinder; save DCs use the wielder's own statistics.",
    "source": "Steamworks — Gizmos",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  }
  ,
  {
    "id": "belt-of-gadgetry-type-i",
    "name": "Belt of Gadgetry, Type I",
    "category": "wondrous-waist",
    "cost": "1,000 gp",
    "summary": "A technological belt holding 2 belt-slot devices ready for use.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "belt-of-gadgetry-type-ii",
    "name": "Belt of Gadgetry, Type II",
    "category": "wondrous-waist",
    "cost": "4,000 gp",
    "summary": "A technological belt holding 4 belt-slot devices ready for use.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "belt-of-gadgetry-type-iii",
    "name": "Belt of Gadgetry, Type III",
    "category": "wondrous-waist",
    "cost": "9,000 gp",
    "summary": "A technological belt holding 6 belt-slot devices ready for use.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "boots-of-reaction",
    "name": "Boots of Reaction",
    "category": "wondrous-feet",
    "cost": "25,000 gp",
    "summary": "Technological boots granting the wearer evasion, or improved evasion if the wearer already has evasion.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "catseye-goggles",
    "name": "Catseye Goggles",
    "category": "wondrous-face",
    "cost": "12,000 gp",
    "summary": "Technological goggles that let the wearer see cloaked creatures normally.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "catskin-2",
    "name": "Catskin +2",
    "category": "wondrous-body",
    "cost": "4,000 gp",
    "summary": "A technological suit granting a +2 enhancement bonus to Dexterity.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "catskin-4",
    "name": "Catskin +4",
    "category": "wondrous-body",
    "cost": "16,000 gp",
    "summary": "A technological suit granting a +4 enhancement bonus to Dexterity.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "catskin-6",
    "name": "Catskin +6",
    "category": "wondrous-body",
    "cost": "36,000 gp",
    "summary": "A technological suit granting a +6 enhancement bonus to Dexterity.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "floatation-boots",
    "name": "Floatation Boots",
    "category": "wondrous-feet",
    "cost": "90,000 gp",
    "summary": "Technological boots that let the wearer float 1 ft. above any surface while moving at full speed.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-the-architect",
    "name": "Goggles of the Architect",
    "category": "wondrous-face",
    "cost": "4,000 gp",
    "summary": "Technological goggles granting stonecunning as a dwarf (+4 instead if the wearer already has it).",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-clarity",
    "name": "Goggles of Clarity",
    "category": "wondrous-face",
    "cost": "75,000 gp",
    "summary": "Technological goggles that let the wearer see through darkness, pinpoint creatures under blur or displacement, and see through illusions — but not through solid objects, fog, or mundane disguise.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-discernment-type-i",
    "name": "Goggles of Discernment, Type I",
    "category": "wondrous-face",
    "cost": "4,000 gp",
    "summary": "Technological goggles granting +1d6 sneak attack damage against flat-footed targets; this does not stack with other sneak attack.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-discernment-type-ii",
    "name": "Goggles of Discernment, Type II",
    "category": "wondrous-face",
    "cost": "16,000 gp",
    "summary": "Technological goggles granting +2d6 sneak attack damage against flat-footed targets; this does not stack with other sneak attack.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-discernment-type-iii",
    "name": "Goggles of Discernment, Type III",
    "category": "wondrous-face",
    "cost": "36,000 gp",
    "summary": "Technological goggles granting +3d6 sneak attack damage against flat-footed targets; this does not stack with other sneak attack.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-echolocation-lesser",
    "name": "Goggles of Echolocation, Lesser",
    "category": "wondrous-face",
    "cost": "12,000 gp",
    "summary": "Technological goggles granting blindsense out to 20 ft.; they do not function in magical silence.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-echolocation",
    "name": "Goggles of Echolocation",
    "category": "wondrous-face",
    "cost": "18,000 gp",
    "summary": "Technological goggles granting blindsight out to 20 ft.; they do not function in magical silence.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-echolocation-greater",
    "name": "Goggles of Echolocation, Greater",
    "category": "wondrous-face",
    "cost": "24,000 gp",
    "summary": "Technological goggles granting blindsight out to 40 ft.; they do not function in magical silence.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-evaluation",
    "name": "Goggles of Evaluation",
    "category": "wondrous-face",
    "cost": "2,000 gp",
    "summary": "Technological goggles granting the wearer the Evaluate ability. (Table 8-16's price column suggests 1,000 gp; the item description's 2,000 gp governs.)",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-examination",
    "name": "Goggles of Examination",
    "category": "wondrous-face",
    "cost": "1,600 gp",
    "summary": "Technological goggles granting a +4 competence bonus on Spot checks.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-the-ghost",
    "name": "Goggles of the Ghost",
    "category": "wondrous-face",
    "cost": "56,000 gp",
    "summary": "Technological goggles that let the wearer see into the ethereal plane out to 60 ft.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "goggles-of-x-ray-vision",
    "name": "Goggles of X-Ray Vision",
    "category": "wondrous-face",
    "cost": "25,000 gp",
    "summary": "Technological goggles granting vision through 1 ft. of stone, 1 inch of common metal, or 3 ft. of wood or dirt; lead blocks the vision.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "gravitational-boots",
    "name": "Gravitational Boots",
    "category": "wondrous-feet",
    "cost": "20,000 gp",
    "summary": "Technological boots making the wearer unaffected by gravity-changing effects. (Table 8-16 lists 60,000 gp; the item description's 20,000 gp governs.)",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "harm-prevention-belt",
    "name": "Harm Prevention Belt",
    "category": "wondrous-waist",
    "cost": "50,000 gp",
    "summary": "A technological belt granting damage reduction 4/— for 5 minutes, usable three times per day.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "hydraulic-gauntlets-2",
    "name": "Hydraulic Gauntlets +2",
    "category": "wondrous-hands",
    "cost": "4,000 gp",
    "summary": "Technological gauntlets granting a +2 enhancement bonus to Strength.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "hydraulic-gauntlets-4",
    "name": "Hydraulic Gauntlets +4",
    "category": "wondrous-hands",
    "cost": "16,000 gp",
    "summary": "Technological gauntlets granting a +4 enhancement bonus to Strength.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "hydraulic-gauntlets-6",
    "name": "Hydraulic Gauntlets +6",
    "category": "wondrous-hands",
    "cost": "36,000 gp",
    "summary": "Technological gauntlets granting a +6 enhancement bonus to Strength.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "manual-of-armaments",
    "name": "Manual of Armaments",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A technological manual: consulting it adds a +1 enhancement bonus to the DC of devices the reader constructs from the armaments field.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "manual-of-chemistry",
    "name": "Manual of Chemistry",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A technological manual: consulting it adds a +1 enhancement bonus to the DC of devices the reader constructs from the chemistry field.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "manual-of-energy",
    "name": "Manual of Energy",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A technological manual: consulting it adds a +1 enhancement bonus to the DC of devices the reader constructs from the energy field.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "manual-of-mechanics",
    "name": "Manual of Mechanics",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "A technological manual: consulting it adds a +1 enhancement bonus to the DC of devices the reader constructs from the mechanics field.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "neural-amplifier-2",
    "name": "Neural Amplifier +2",
    "category": "wondrous-head",
    "cost": "4,000 gp",
    "summary": "A technological headpiece granting a +2 enhancement bonus to Intelligence. (Table 8-16 calls this item the 'neural inducer'.)",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "neural-amplifier-4",
    "name": "Neural Amplifier +4",
    "category": "wondrous-head",
    "cost": "16,000 gp",
    "summary": "A technological headpiece granting a +4 enhancement bonus to Intelligence. (Table 8-16 calls this item the 'neural inducer'.)",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "neural-amplifier-6",
    "name": "Neural Amplifier +6",
    "category": "wondrous-head",
    "cost": "36,000 gp",
    "summary": "A technological headpiece granting a +6 enhancement bonus to Intelligence. (Table 8-16 calls this item the 'neural inducer'.)",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "nightvision-goggles",
    "name": "Nightvision Goggles",
    "category": "wondrous-face",
    "cost": "12,000 gp",
    "summary": "Technological goggles granting darkvision out to 60 ft.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-cube-1",
    "name": "Puzzle Cube +1",
    "category": "wondrous-slotless",
    "cost": "27,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +1 inherent bonus to Dexterity, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-cube-2",
    "name": "Puzzle Cube +2",
    "category": "wondrous-slotless",
    "cost": "55,000 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +2 inherent bonus to Dexterity, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-cube-3",
    "name": "Puzzle Cube +3",
    "category": "wondrous-slotless",
    "cost": "82,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +3 inherent bonus to Dexterity, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-cube-4",
    "name": "Puzzle Cube +4",
    "category": "wondrous-slotless",
    "cost": "110,000 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +4 inherent bonus to Dexterity, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-cube-5",
    "name": "Puzzle Cube +5",
    "category": "wondrous-slotless",
    "cost": "137,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +5 inherent bonus to Dexterity, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-pyramid-1",
    "name": "Puzzle Pyramid +1",
    "category": "wondrous-slotless",
    "cost": "27,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +1 inherent bonus to Wisdom, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-pyramid-2",
    "name": "Puzzle Pyramid +2",
    "category": "wondrous-slotless",
    "cost": "55,000 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +2 inherent bonus to Wisdom, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-pyramid-3",
    "name": "Puzzle Pyramid +3",
    "category": "wondrous-slotless",
    "cost": "82,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +3 inherent bonus to Wisdom, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-pyramid-4",
    "name": "Puzzle Pyramid +4",
    "category": "wondrous-slotless",
    "cost": "110,000 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +4 inherent bonus to Wisdom, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-pyramid-5",
    "name": "Puzzle Pyramid +5",
    "category": "wondrous-slotless",
    "cost": "137,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +5 inherent bonus to Wisdom, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-sphere-1",
    "name": "Puzzle Sphere +1",
    "category": "wondrous-slotless",
    "cost": "27,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +1 inherent bonus to Intelligence, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-sphere-2",
    "name": "Puzzle Sphere +2",
    "category": "wondrous-slotless",
    "cost": "55,000 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +2 inherent bonus to Intelligence, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-sphere-3",
    "name": "Puzzle Sphere +3",
    "category": "wondrous-slotless",
    "cost": "82,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +3 inherent bonus to Intelligence, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-sphere-4",
    "name": "Puzzle Sphere +4",
    "category": "wondrous-slotless",
    "cost": "110,000 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +4 inherent bonus to Intelligence, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "puzzle-sphere-5",
    "name": "Puzzle Sphere +5",
    "category": "wondrous-slotless",
    "cost": "137,500 gp",
    "summary": "A technological puzzle: completing it (48 hours of work over six days) grants a +5 inherent bonus to Intelligence, after which the puzzle resets.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tools-of-the-trapsmith-1",
    "name": "Tools of the Trapsmith +1",
    "category": "wondrous-slotless",
    "cost": "100 gp",
    "summary": "Technological tools granting a +1 competence bonus on Disable Device checks against traps.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tools-of-the-trapsmith-2",
    "name": "Tools of the Trapsmith +2",
    "category": "wondrous-slotless",
    "cost": "400 gp",
    "summary": "Technological tools granting a +2 competence bonus on Disable Device checks against traps.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tools-of-the-trapsmith-3",
    "name": "Tools of the Trapsmith +3",
    "category": "wondrous-slotless",
    "cost": "900 gp",
    "summary": "Technological tools granting a +3 competence bonus on Disable Device checks against traps.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tools-of-the-trapsmith-4",
    "name": "Tools of the Trapsmith +4",
    "category": "wondrous-slotless",
    "cost": "1,600 gp",
    "summary": "Technological tools granting a +4 competence bonus on Disable Device checks against traps.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tools-of-the-trapsmith-5",
    "name": "Tools of the Trapsmith +5",
    "category": "wondrous-slotless",
    "cost": "2,500 gp",
    "summary": "Technological tools granting a +5 competence bonus on Disable Device checks against traps.",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "spring-boots",
    "name": "Spring Boots",
    "category": "wondrous-feet",
    "cost": "4,000 gp",
    "summary": "Technological boots granting a +10 enhancement bonus to the wearer's movement rate. (Table 8-16's price column suggests 8,000 gp; the item description's 4,000 gp governs.)",
    "source": "Steamworks — Chapter 8 (General Items), Table 8-16",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  }
];

export const STW_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "spanner",
    "name": "Spanner",
    "category": "weapon",
    "cost": "10 gp",
    "weight": "1 lb.",
    "notes": "A wrench usable as a weapon: 1d4 damage (1d6 for larger sizes), critical ×2, bludgeoning.",
    "source": "Steamworks — Chapter 8 (Equipment), p. 137",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "spanner-combat",
    "name": "Spanner, Combat",
    "category": "weapon",
    "cost": "15 gp",
    "weight": "2 lb.",
    "notes": "A reinforced spanner made for fighting: 1d6 damage (1d8 for larger sizes), critical ×2, bludgeoning.",
    "source": "Steamworks — Chapter 8 (Equipment), p. 137",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "device-construction-kit",
    "name": "Device Construction Kit",
    "category": "tool",
    "cost": "10 gp",
    "weight": "3 lb.",
    "notes": "The kit required to construct and recharge technological devices.",
    "source": "Steamworks — Chapter 8 (Equipment), p. 137",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "repair-kit",
    "name": "Repair Kit",
    "category": "tool",
    "cost": "5 gp",
    "weight": "2 lb.",
    "notes": "Repair tools; without a kit, Repair checks take a −2 penalty and devices cannot be repaired at all.",
    "source": "Steamworks — Chapter 8 (Equipment), p. 137",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "repair-kit-masterwork",
    "name": "Repair Kit, Masterwork",
    "category": "tool",
    "cost": "100 gp",
    "weight": "4 lb.",
    "notes": "Grants a +2 equipment bonus on Repair checks.",
    "source": "Steamworks — Chapter 8 (Equipment), p. 137",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tinkers-outfit",
    "name": "Tinker's Outfit",
    "category": "gear",
    "cost": "8 gp",
    "weight": "5 lb.",
    "notes": "A tinker-technician's working outfit and tool harness.",
    "source": "Steamworks — Chapter 8 (Equipment), p. 137",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "orichalcum",
    "name": "Orichalcum",
    "category": "gear",
    "cost": "Light armor +1,000 gp; medium armor +4,000 gp; heavy armor +9,000 gp; shield +1,000 gp; other items +500 gp/lb",
    "weight": "—",
    "notes": "Special material, priced as printed adders: orichalcum armor counts one category lighter, with arcane spell failure reduced by 10%, maximum Dexterity bonus increased by 2, armor check penalty reduced by 3 (minimum 0), and half the normal weight. Hardness 18, 25 hit points per inch of thickness.",
    "source": "Steamworks — Special Materials",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "titanium",
    "name": "Titanium",
    "category": "gear",
    "cost": "Ammunition +60 gp; light armor +5,000 gp; medium armor +10,000 gp; heavy armor +15,000 gp; weapon +3,000 gp; shield +2,000 gp; device +500 gp/lb",
    "weight": "—",
    "notes": "Special material, priced as printed adders: titanium weapons ignore hardness below 20 when sundering or attacking objects; titanium armor grants damage reduction 1/— (light), 2/— (medium), or 3/— (heavy); items are always masterwork. Hardness 25, 30 hit points per inch of thickness.",
    "source": "Steamworks — Special Materials",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  }
];
