/**
 * Body-modification reference index: grafts (implants), symbionts
 * (parasitic organisms), and warforged components (attachments) for
 * D&D 3.5 — the three "bolt something living or built onto a body"
 * systems.
 *
 * Folded in 2026-10-27 at Shaun's direction from the named-item list
 * compiled 2026-10-25 (sourceUrl on every record). The rebuild's house
 * rules for this pack, following the earlier packs' precedent:
 * - Records are an INDEX: name, family, published price where the list
 *   recorded one, and a book citation. Full mechanics are NOT
 *   reproduced or invented — they live in the cited books, several of
 *   which (Fiend Folio, Lords of Madness, Libris Mortis, Magic of
 *   Eberron) are not in Shaun's Dropbox library.
 * - System rules worth restating once, from the compiled list:
 *   grafts are not sentient and do not radiate magic once complete,
 *   and are ruined if removed; any illithid graft imposes -4 on Will
 *   saves vs. mind-affecting/psionics; Magic of Eberron grafts cap a
 *   creature at 5 grafts total, all of the same kind, max 1 per body
 *   portion, each at a permanent HP/ability sacrifice; symbionts are
 *   sentient with an Ego score and can try to dominate their host;
 *   almost any normal magic item can also be made as an attached or
 *   embedded warforged component.
 * - Ruleset tags: Eberron-book families are tagged "eberron"; the
 *   generic 3.5 families (Fiend Folio, Lords of Madness, Libris
 *   Mortis, Races of the Dragon, Serpent Kingdoms) are tagged "core"
 *   in the same spirit as the core pack's generic SRD-adjacent index.
 * - Extended 2026-10-27 (Batch 1.5) with 18 prosthetics from
 *   Shaun's uploaded AI-imagined prosthetics document (ids prefixed
 *   "prosthetic-"): 9 "Steampunk prosthetics" and 9 "Arcane
 *   prosthetics". The BodyModificationKind union has no
 *   "prosthetic" value, so they are filed under kind "graft" (the
 *   document itself frames prosthetics under the graft rules) with
 *   the filing stated in each record's source; as Shaun's homebrew
 *   curation they carry ruleset "dessarin", unlike the published-
 *   book records above. Summaries carry the document's market
 *   price (also in cost), craft cost/XP, caster level, and
 *   prerequisites. See REBUILD-NOTES.md Batch 1.5 addendum.
 */
import type { BodyModificationDefinition } from "@/engine/types";

export const BODY_MODIFICATIONS: BodyModificationDefinition[] = [
  {
    "id": "aboleth-tentacle",
    "name": "Aboleth Tentacle",
    "kind": "graft",
    "family": "Aboleth grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "mucus-sheath",
    "name": "Mucus Sheath",
    "kind": "graft",
    "family": "Aboleth grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "skum-eyes",
    "name": "Skum Eyes",
    "kind": "graft",
    "family": "Aboleth grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "skum-tail",
    "name": "Skum Tail",
    "kind": "graft",
    "family": "Aboleth grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "amphibious-skin",
    "name": "Amphibious Skin",
    "kind": "graft",
    "family": "Aboleth grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "inksac",
    "name": "Inksac",
    "kind": "graft",
    "family": "Aboleth grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "mucus-projector",
    "name": "Mucus Projector",
    "kind": "graft",
    "family": "Aboleth grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "waterjet",
    "name": "Waterjet",
    "kind": "graft",
    "family": "Aboleth grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "crown-of-eyes",
    "name": "Crown of Eyes",
    "kind": "graft",
    "family": "Beholder grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness material",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "eye-stalk",
    "name": "Eye Stalk",
    "kind": "graft",
    "family": "Beholder grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness material",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "third-eye",
    "name": "Third Eye",
    "kind": "graft",
    "family": "Beholder grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness material",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "gazing-eye",
    "name": "Gazing Eye",
    "kind": "graft",
    "family": "Beholder grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness material",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "plated-skin",
    "name": "Plated Skin",
    "kind": "graft",
    "family": "Beholder grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness material",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "replacement-eye",
    "name": "Replacement Eye",
    "kind": "graft",
    "family": "Beholder grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness material",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "clawed-arm",
    "name": "Clawed Arm",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "flexible-arm",
    "name": "Flexible Arm",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "grappling-tentacle",
    "name": "Grappling Tentacle",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "long-arm",
    "name": "Long Arm",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "charming-eye",
    "name": "Charming Eye",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "fearsome-eye",
    "name": "Fearsome Eye",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "fiendish-ear",
    "name": "Fiendish Ear",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "fiendish-jaw",
    "name": "Fiendish Jaw",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "fast-leg",
    "name": "Fast Leg",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "springing-leg",
    "name": "Springing Leg",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "strong-leg",
    "name": "Strong Leg",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "trampling-leg",
    "name": "Trampling Leg",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "sting-tail",
    "name": "Sting Tail",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "whip-tail",
    "name": "Whip Tail",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "feathered-wings",
    "name": "Feathered Wings",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "membranous-wing",
    "name": "Membranous Wing",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "fiendish-skin",
    "name": "Fiendish Skin",
    "kind": "graft",
    "family": "Fiendish grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "antennae-graft",
    "name": "Antennae Graft",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "brainmate",
    "name": "Brainmate",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "climbing-legs",
    "name": "Climbing Legs",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "extracting-tentacle",
    "name": "Extracting Tentacle",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "grabbing-tentacle",
    "name": "Grabbing Tentacle",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "humanoid-skin",
    "name": "Humanoid Skin",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "goring-horn",
    "name": "Goring Horn",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "grasping-mandibles",
    "name": "Grasping Mandibles",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "hauling-back",
    "name": "Hauling Back",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "raking-tentacle",
    "name": "Raking Tentacle",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "rending-claw",
    "name": "Rending Claw",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "weapon-graft",
    "name": "Weapon Graft",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "burrowing-claws",
    "name": "Burrowing Claws",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "darksight-eyes",
    "name": "Darksight Eyes",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "mind-blast-relay",
    "name": "Mind Blast Relay",
    "kind": "graft",
    "family": "Illithid grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "locking-hand",
    "name": "Locking Hand",
    "kind": "graft",
    "family": "Maug grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "rollers",
    "name": "Rollers",
    "kind": "graft",
    "family": "Maug grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "shoving-arm",
    "name": "Shoving Arm",
    "kind": "graft",
    "family": "Maug grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "shudder-plate",
    "name": "Shudder Plate",
    "kind": "graft",
    "family": "Maug grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "spike-stones",
    "name": "Spike Stones",
    "kind": "graft",
    "family": "Maug grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "stone-spitter",
    "name": "Stone Spitter",
    "kind": "graft",
    "family": "Maug grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "bonemail",
    "name": "Bonemail",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "bodaks-eye",
    "name": "Bodak's Eye",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "enervating-arm",
    "name": "Enervating Arm",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "eye-of-flame",
    "name": "Eye of Flame",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "ghostly-arm",
    "name": "Ghostly Arm",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "mohrgs-tongue",
    "name": "Mohrg's Tongue",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "mummified-eye",
    "name": "Mummified Eye",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "mummified-hand",
    "name": "Mummified Hand",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "paralyzing-arm",
    "name": "Paralyzing Arm",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "skeletal-hand",
    "name": "Skeletal Hand",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "undead-skin",
    "name": "Undead Skin",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "vampiric-fangs",
    "name": "Vampiric Fangs",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "weakening-arm",
    "name": "Weakening Arm",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "zombie-arm",
    "name": "Zombie Arm",
    "kind": "graft",
    "family": "Undead grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Libris Mortis — Ch. 5",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "blazing-skeleton-claw",
    "name": "Blazing Skeleton Claw",
    "kind": "graft",
    "family": "Undead grafts (Forgotten Realms)",
    "ruleset": "core",
    "source": "Forgotten Realms compiled graft lists",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "lichs-brain",
    "name": "Lich's Brain",
    "kind": "graft",
    "family": "Undead grafts (Forgotten Realms)",
    "ruleset": "core",
    "source": "Forgotten Realms compiled graft lists",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "wights-claw",
    "name": "Wight's Claw",
    "kind": "graft",
    "family": "Undead grafts (Forgotten Realms)",
    "ruleset": "core",
    "source": "Forgotten Realms compiled graft lists",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "added-tail",
    "name": "Added Tail",
    "kind": "graft",
    "family": "Yuan-ti grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Serpent Kingdoms",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "6,000 gp"
  },
  {
    "id": "poison-fangs",
    "name": "Poison Fangs",
    "kind": "graft",
    "family": "Yuan-ti grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Serpent Kingdoms",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "8,000 gp"
  },
  {
    "id": "replacement-tail",
    "name": "Replacement Tail",
    "kind": "graft",
    "family": "Yuan-ti grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Serpent Kingdoms",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "12,000 gp"
  },
  {
    "id": "scaly-skin",
    "name": "Scaly Skin",
    "kind": "graft",
    "family": "Yuan-ti grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Serpent Kingdoms",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "36,000 gp"
  },
  {
    "id": "serpent-arm",
    "name": "Serpent Arm",
    "kind": "graft",
    "family": "Yuan-ti grafts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2; Serpent Kingdoms",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "chitin-plating",
    "name": "Chitin Plating",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "flexible-spine",
    "name": "Flexible Spine",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "extended-legs",
    "name": "Extended Legs",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "healing-blood",
    "name": "Healing Blood",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "rudimentary-eye-spots",
    "name": "Rudimentary Eye Spots",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "silthilar-bones",
    "name": "Silthilar Bones",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "silthilar-heart",
    "name": "Silthilar Heart",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "silthilar-muscles",
    "name": "Silthilar Muscles",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "silthilar-tendons",
    "name": "Silthilar Tendons",
    "kind": "graft",
    "family": "Silthilar grafts",
    "ruleset": "core",
    "source": "Lords of Madness — Ch. 9",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "dragonbone-legs",
    "name": "Dragonbone Legs",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "8,000 gp"
  },
  {
    "id": "gleaming-scales",
    "name": "Gleaming Scales",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "9,000 gp"
  },
  {
    "id": "glaring-eye",
    "name": "Glaring Eye",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "10,000 gp"
  },
  {
    "id": "dragonheart-presence",
    "name": "Dragonheart Presence",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "12,000 gp"
  },
  {
    "id": "frightful-crest",
    "name": "Frightful Crest",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "28,000 gp"
  },
  {
    "id": "smashing-tail",
    "name": "Smashing Tail",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "30,000 gp"
  },
  {
    "id": "taloned-arm",
    "name": "Taloned Arm",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "34,000 gp"
  },
  {
    "id": "metabolic-fire",
    "name": "Metabolic Fire",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "56,000 gp"
  },
  {
    "id": "resilient-scales",
    "name": "Resilient Scales",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "70,000 gp"
  },
  {
    "id": "buffeting-wings",
    "name": "Buffeting Wings",
    "kind": "graft",
    "family": "Draconic grafts",
    "ruleset": "core",
    "source": "Races of the Dragon — Ch. 8 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "100,000 gp"
  },
  {
    "id": "legs-of-the-undying-marcher",
    "name": "Legs of the Undying Marcher",
    "kind": "graft",
    "family": "Deathless grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "6,000 gp"
  },
  {
    "id": "arm-of-the-ancestor",
    "name": "Arm of the Ancestor",
    "kind": "graft",
    "family": "Deathless grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "8,500 gp"
  },
  {
    "id": "bone-plating",
    "name": "Bone Plating",
    "kind": "graft",
    "family": "Deathless grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "9,000 gp"
  },
  {
    "id": "deathless-visage",
    "name": "Deathless Visage",
    "kind": "graft",
    "family": "Deathless grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "32,000 gp"
  },
  {
    "id": "deathless-flesh",
    "name": "Deathless Flesh",
    "kind": "graft",
    "family": "Deathless grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "33,000 gp"
  },
  {
    "id": "stony-plating",
    "name": "Stony Plating",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "2,800 gp"
  },
  {
    "id": "tremor-graft",
    "name": "Tremor Graft",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "6,000 gp"
  },
  {
    "id": "dust-form",
    "name": "Dust Form",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "7,000 gp"
  },
  {
    "id": "scorching-gaze",
    "name": "Scorching Gaze",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "7,000 gp"
  },
  {
    "id": "oceanic-adaptation",
    "name": "Oceanic Adaptation",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "8,000 gp"
  },
  {
    "id": "breath-of-the-waves",
    "name": "Breath of the Waves",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "9,000 gp"
  },
  {
    "id": "aqueous-body",
    "name": "Aqueous Body",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "13,000 gp"
  },
  {
    "id": "buffeting-fists",
    "name": "Buffeting Fists",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "13,000 gp"
  },
  {
    "id": "hands-of-flame",
    "name": "Hands of Flame",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "13,000 gp"
  },
  {
    "id": "incendiary-skin",
    "name": "Incendiary Skin",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "17,000 gp"
  },
  {
    "id": "elemental-flesh",
    "name": "Elemental Flesh",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "31,000 gp"
  },
  {
    "id": "whirlwind-form",
    "name": "Whirlwind Form",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "58,000 gp"
  },
  {
    "id": "earth-glider",
    "name": "Earth Glider",
    "kind": "graft",
    "family": "Elemental grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "113,000 gp"
  },
  {
    "id": "treebark-carapace",
    "name": "Treebark Carapace",
    "kind": "graft",
    "family": "Plant grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "3,200 gp"
  },
  {
    "id": "perception-seed",
    "name": "Perception Seed",
    "kind": "graft",
    "family": "Plant grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "4,000 gp"
  },
  {
    "id": "grappling-vine",
    "name": "Grappling Vine",
    "kind": "graft",
    "family": "Plant grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "7,000 gp"
  },
  {
    "id": "root-legs",
    "name": "Root Legs",
    "kind": "graft",
    "family": "Plant grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "7,000 gp"
  },
  {
    "id": "fatigue-spores",
    "name": "Fatigue Spores",
    "kind": "graft",
    "family": "Plant grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "12,000 gp"
  },
  {
    "id": "darkwood-flesh",
    "name": "Darkwood Flesh",
    "kind": "graft",
    "family": "Plant grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "19,000 gp"
  },
  {
    "id": "healing-nodules",
    "name": "Healing Nodules",
    "kind": "graft",
    "family": "Plant grafts",
    "ruleset": "eberron",
    "source": "Magic of Eberron — Ch. 5 graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "21,000 gp"
  },
  {
    "id": "mighty-arms",
    "name": "Mighty Arms",
    "kind": "graft",
    "family": "Construct grafts",
    "ruleset": "eberron",
    "source": "Faiths of Eberron — construct graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "1,000 gp"
  },
  {
    "id": "heavy-legs",
    "name": "Heavy Legs",
    "kind": "graft",
    "family": "Construct grafts",
    "ruleset": "eberron",
    "source": "Faiths of Eberron — construct graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "6,000 gp"
  },
  {
    "id": "heart-of-steel",
    "name": "Heart of Steel",
    "kind": "graft",
    "family": "Construct grafts",
    "ruleset": "eberron",
    "source": "Faiths of Eberron — construct graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "9,000 gp"
  },
  {
    "id": "adamantine-skin",
    "name": "Adamantine Skin",
    "kind": "graft",
    "family": "Construct grafts",
    "ruleset": "eberron",
    "source": "Faiths of Eberron — construct graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "11,000 gp"
  },
  {
    "id": "wakeful-mind",
    "name": "Wakeful Mind",
    "kind": "graft",
    "family": "Construct grafts",
    "ruleset": "eberron",
    "source": "Faiths of Eberron — construct graft table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "14,000 gp"
  },
  {
    "id": "cerebral-hood",
    "name": "Cerebral Hood",
    "kind": "symbiont",
    "family": "Cerebral symbionts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "mind-leech",
    "name": "Mind Leech",
    "kind": "symbiont",
    "family": "Cerebral symbionts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "psionic-sinew",
    "name": "Psionic Sinew",
    "kind": "symbiont",
    "family": "Cerebral symbionts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "fiendish-familiar",
    "name": "Fiendish Familiar",
    "kind": "symbiont",
    "family": "Fiendish symbionts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "gutworm",
    "name": "Gutworm",
    "kind": "symbiont",
    "family": "Fiendish symbionts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "summary": "Abyssal tapeworm in the gut — Con boost, rage, poison neutralising."
  },
  {
    "id": "soul-tick",
    "name": "Soul Tick",
    "kind": "symbiont",
    "family": "Fiendish symbionts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "summary": "Baator blood-drinker — empowers Death/Evil spells, drains Con daily."
  },
  {
    "id": "ghostly-visage",
    "name": "Ghostly Visage",
    "kind": "symbiont",
    "family": "Undead symbionts",
    "ruleset": "core",
    "source": "Fiend Folio — Appendix 2",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "living-breastplate",
    "name": "Living Breastplate",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "tentacle-whip",
    "name": "Tentacle Whip",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "tongueworm",
    "name": "Tongueworm",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "25,000 gp"
  },
  {
    "id": "throwing-scarab",
    "name": "Throwing Scarab",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "1,000 gp"
  },
  {
    "id": "breed-leech",
    "name": "Breed Leech",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "2,000 gp",
    "summary": "The parasite that creates daelkyr half-bloods."
  },
  {
    "id": "crawling-gauntlet",
    "name": "Crawling Gauntlet",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "2,000 gp"
  },
  {
    "id": "stormstalk",
    "name": "Stormstalk",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "4,000 gp"
  },
  {
    "id": "winter-cyst",
    "name": "Winter Cyst",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "4,000 gp"
  },
  {
    "id": "shadow-sibling",
    "name": "Shadow Sibling",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "8,000 gp"
  },
  {
    "id": "spellwurm",
    "name": "Spellwurm",
    "kind": "symbiont",
    "family": "Daelkyr symbionts",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting; Magic of Eberron — Ch. 6 symbiont table",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "8,000 gp"
  },
  {
    "id": "belashyrras-beholder-crown",
    "name": "Belashyrra's Beholder Crown",
    "kind": "symbiont",
    "family": "Daelkyr symbionts (other Eberron)",
    "ruleset": "eberron",
    "source": "Eberron books / compiled symbiont lists",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "earworm",
    "name": "Earworm",
    "kind": "symbiont",
    "family": "Daelkyr symbionts (other Eberron)",
    "ruleset": "eberron",
    "source": "Eberron books / compiled symbiont lists",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "kyrzins-ooze",
    "name": "Kyrzin's Ooze",
    "kind": "symbiont",
    "family": "Daelkyr symbionts (other Eberron)",
    "ruleset": "eberron",
    "source": "Eberron books / compiled symbiont lists",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "living-gloves",
    "name": "Living Gloves",
    "kind": "symbiont",
    "family": "Daelkyr symbionts (other Eberron)",
    "ruleset": "eberron",
    "source": "Eberron books / compiled symbiont lists",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "armblade",
    "name": "Armblade",
    "kind": "warforged-component",
    "family": "Warforged components",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "2,300 gp",
    "installation": "attached"
  },
  {
    "id": "battlefist",
    "name": "Battlefist",
    "kind": "warforged-component",
    "family": "Warforged components",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "2,600 gp",
    "installation": "attached"
  },
  {
    "id": "armbow",
    "name": "Armbow",
    "kind": "warforged-component",
    "family": "Warforged components",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "20,000 gp",
    "installation": "attached"
  },
  {
    "id": "docent",
    "name": "Docent",
    "kind": "warforged-component",
    "family": "Warforged components",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "installation": "attached or embedded",
    "summary": "Intelligent component."
  },
  {
    "id": "final-messenger",
    "name": "Final Messenger",
    "kind": "warforged-component",
    "family": "Warforged components",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "installation": "embedded"
  },
  {
    "id": "wand-sheath",
    "name": "Wand Sheath",
    "kind": "warforged-component",
    "family": "Warforged components",
    "ruleset": "eberron",
    "source": "Eberron Campaign Setting",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "installation": "attached"
  },
  {
    "id": "finger-picks",
    "name": "Finger Picks",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "500 gp",
    "installation": "embedded"
  },
  {
    "id": "vanguard-treads",
    "name": "Vanguard Treads",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "3,000 gp",
    "installation": "embedded"
  },
  {
    "id": "traction-claws",
    "name": "Traction Claws",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "4,000 gp",
    "installation": "attached"
  },
  {
    "id": "essence-of-the-guard",
    "name": "Essence of the Guard",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "6,250 gp",
    "installation": "embedded"
  },
  {
    "id": "command-circlet",
    "name": "Command Circlet",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "12,500 gp",
    "installation": "attached"
  },
  {
    "id": "somatic-cables",
    "name": "Somatic Cables",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "16,200 gp",
    "installation": "embedded"
  },
  {
    "id": "tracker-mask",
    "name": "Tracker Mask",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "18,000 gp",
    "installation": "attached"
  },
  {
    "id": "monocle-of-the-ebon-hunter-lesser",
    "name": "Monocle of the Ebon Hunter, Lesser",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "18,000 gp",
    "installation": "embedded"
  },
  {
    "id": "essence-of-the-guard-improved",
    "name": "Essence of the Guard, Improved",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "25,000 gp",
    "installation": "embedded"
  },
  {
    "id": "projection-orb",
    "name": "Projection Orb",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "25,200 gp",
    "installation": "embedded"
  },
  {
    "id": "essence-of-the-scout",
    "name": "Essence of the Scout",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "essence-of-the-scout-improved",
    "name": "Essence of the Scout, Improved",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "essence-of-the-scout-greater",
    "name": "Essence of the Scout, Greater",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "essence-of-the-guard-greater",
    "name": "Essence of the Guard, Greater",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md",
    "cost": "56,250 gp",
    "installation": "embedded"
  },
  {
    "id": "spare-hand",
    "name": "Spare Hand",
    "kind": "warforged-component",
    "family": "Warforged components (expanded)",
    "ruleset": "eberron",
    "source": "Races of Eberron / Magic of Eberron / Forge of War / Explorer's Handbook",
    "sourceUrl": "workspace/your_files/dnd-35-grafts-symbionts-components-list.md"
  },
  {
    "id": "prosthetic-clockwork-piston-arm",
    "name": "Clockwork Piston Arm",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "8,000 gp",
    "summary": "Brass replacement arm driven by steam pistons: +2 or +4 inherent bonus on Strength checks made with that arm, −2 on Sleight of Hand from the jerky motion. Craft: 4,000 gp + 320 XP, CL 6th; Craft Wondrous Item, Bull's Strength, 5 ranks Craft (clockwork).",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-gondian-multi-tool-hand",
    "name": "Gondian Multi-Tool Hand",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "2,500 gp",
    "summary": "Replacement hand whose fingers fold back to reveal thieves' tools, a magnifying glass, a blowtorch, or a wrench; counts as masterwork tools for Disable Device and Open Lock. Craft: 1,250 gp + 100 XP, CL 3rd; Craft Wondrous Item, Fabricate or Fox's Cunning, masterwork thieves' tools.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-spring-loaded-dagger-forearm",
    "name": "Spring-Loaded Dagger Forearm",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "2,000 gp",
    "summary": "Forearm with a hidden spring blade; extending or retracting it is a free action, and it gives +4 on Sleight of Hand checks to conceal the weapon. Craft: 1,000 gp + 80 XP, CL 3rd; Craft Wondrous Item, Cat's Grace, handy dagger.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-pneumatic-shield-arm",
    "name": "Pneumatic Shield Arm",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "4,150 gp",
    "summary": "Forearm fitted with a folded segmented plate that snaps open as an immediate action to serve as a heavy shield (+2 AC); the hand is unusable while deployed. Craft: 2,075 gp + 166 XP, CL 5th; Craft Wondrous Item, Shield, heavy steel shield.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-piston-heel-pegleg",
    "name": "Piston-Heel Pegleg",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "2,000 gp",
    "summary": "Heavy brass pegleg with a compression spring: +10 competence bonus on a single Jump check, then a move action to reset the spring by hand. Craft: 1,000 gp + 80 XP, CL 3rd; Craft Wondrous Item, Jump, 5 ranks Craft (clockwork).",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-clockwork-braced-leg",
    "name": "Clockwork Braced Leg",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "5,000 gp",
    "summary": "Full leg of articulated steel rods and gears that locks instantly into place when the wearer stands still: +4 bonus to resist bull rush and trip attempts. Craft: 2,500 gp + 200 XP, CL 5th; Craft Wondrous Item, Bull's Strength, Enlarge Person.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-steam-vented-grapple-leg",
    "name": "Steam-Vented Grapple Leg",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "3,500 gp",
    "summary": "Prosthetic calf that fires its foot out on compressed air as a grappling hook attached to 50 ft. of steel cable, letting the wearer winch themselves up walls. Craft: 1,750 gp + 140 XP, CL 5th; Craft Wondrous Item, Telekinesis or Levitate, 50 ft. silk rope/wire.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-gondian-monocle-eye",
    "name": "Gondian Monocle Eye",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "4,000 gp",
    "summary": "Brass eye socket with rotating multi-layered lenses: +4 competence bonus on Search or Appraise checks, −2 on Spot checks beyond 30 ft. Craft: 2,000 gp + 160 XP, CL 3rd; Craft Wondrous Item, True Seeing or Fox's Cunning, spyglass lenses.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-acoustic-brass-ear",
    "name": "Acoustic Brass Ear",
    "kind": "graft",
    "family": "Steampunk prosthetics",
    "ruleset": "dessarin",
    "cost": "4,000 gp",
    "summary": "Brass funnel ear with a mechanical drum that filters wind noise: +2 bonus on Listen checks, but −2 on saving throws against sonic attacks. Craft: 2,000 gp + 160 XP, CL 3rd; Craft Wondrous Item, Clairaudience/Clairvoyance, brass trumpet.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-gilded-mage-hand",
    "name": "Gilded Mage-Hand",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "10,000 gp",
    "summary": "Solid gold or silver hand etched with runes tied to the Weave; works as a permanent Mage Hand — the wearer can detach it and float it up to 30 ft. away under mental control. Craft: 5,000 gp + 400 XP, CL 5th; Craft Wondrous Item or Graft Flesh, Mage Hand, Animate Objects.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-elemental-forge-arm",
    "name": "Elemental Forge-Arm",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "18,000 gp",
    "summary": "Volcanic obsidian arm bound with an imprisoned fire elemental: unarmed strikes deal +1d6 fire damage and the wearer gains fire resistance 5. Craft: 9,000 gp + 720 XP, CL 7th; Craft Wondrous Item or Graft Flesh, Produce Flame or Fire Shield, planar binding (fire).",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-alchemical-toxin-claw",
    "name": "Alchemical Toxin Claw",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "12,000 gp",
    "summary": "Green-veined glass and ceramic arm filled with shifting alchemical fluid: once per day, a touch attack replicating Ghoul Touch or Poison. Craft: 6,000 gp + 480 XP, CL 5th; Craft Wondrous Item or Graft Flesh, Ghoul Touch or Poison, 5 ranks Craft (alchemy).",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-living-wood-arm",
    "name": "Living Wood Arm",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "6,000 gp",
    "summary": "Arm grown from living treant or twilight-grove wood: behaves exactly like a real arm, heals itself naturally over time, and can cast Goodberry or Entangle once per day. Craft: 3,000 gp + 240 XP, CL 5th; Craft Wondrous Item or Graft Flesh, Plant Growth, Goodberry (druids can craft it).",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-gust-stride-greave",
    "name": "Gust-Stride Greave",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "11,000 gp",
    "summary": "Hollow translucent marble leg swirling with elemental air: the wearer's weight is halved and base land speed increases by +10 ft. Craft: 5,500 gp + 440 XP, CL 5th; Craft Wondrous Item or Graft Flesh, Expeditious Retreat, Feather Fall.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-shadow-stitched-leg",
    "name": "Shadow-Stitched Leg",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "20,000 gp",
    "summary": "Leg woven from raw shadow-stuff: makes no sound when touching the ground (+4 competence bonus on Move Silently) and allows a short Dimension Door between shadows once per day. Craft: 10,000 gp + 800 XP, CL 7th; Craft Wondrous Item or Graft Flesh, Dimension Door, Silence, Shadow Weave Magic feat.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-stonemeld-prosthetic",
    "name": "Stonemeld Prosthetic",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "8,000 gp",
    "summary": "Leg carved from solid granite that merges with the wearer's flesh: when standing on unworked stone, the wearer gains the dwarf's Stability trait and cannot be knocked prone. Craft: 4,000 gp + 320 XP, CL 5th; Craft Wondrous Item or Graft Flesh, Meld into Stone, solid granite block.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-magisters-sapphire-eye",
    "name": "Magister's Sapphire Eye",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "15,000 gp",
    "summary": "Flawless sapphire set into the eye socket, tapping the Weave to grant continuous Detect Magic or See Invisibility out to 60 ft. Craft: 7,500 gp + 600 XP, CL 3rd; Craft Wondrous Item or Graft Flesh, See Invisibility or Detect Magic, sapphire worth 1,000 gp.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  },
  {
    "id": "prosthetic-chitinous-tremor-ear",
    "name": "Chitinous Tremor-Ear",
    "kind": "graft",
    "family": "Arcane prosthetics",
    "ruleset": "dessarin",
    "cost": "12,000 gp",
    "summary": "Insectoid segmented internal ear adapted from Underdark monsters: tremorsense out to 30 ft., pinpointing creatures touching the ground, but normal spoken language comes through unclearly. Craft: 6,000 gp + 480 XP, CL 5th; Craft Wondrous Item or Graft Flesh feat, umber hulk or destrachan tissue.",
    "source": "AI_imagined_steampunk_prothetics.docx — Shaun Bradley's homebrew prosthetics document (a prosthetic; filed under kind \"graft\" — the body-modification type has no \"prosthetic\" kind)",
    "sourceUrl": "workspace/user/files/AI_imagined_steampunk_prothetics.docx"
  }
];
