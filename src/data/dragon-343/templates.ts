// Dragon Magazine #343 (May 2006) — template draft: 1 record.
// "Creature Collection V" (cover title; the article's internal header
// reads "Creature Catalog V"): the LIVING WALL (Sean K Reynolds),
// pp. 48-50. The feature's other eleven entries are monsters — the
// catalog has no monsters barrel, so they digest in full in
// reference.md; the living wall is a template and stages here. The full
// monster-article digest of the living wall (origin lore, the three
// sample creatures, the EL 10 combined encounter) is also in
// reference.md.
// OCR RISK: the template's second page (p. 50) is rotated/inverted in
// the OCR stream; the special-qualities text was decoded conservatively
// from that stream and the legibility flags ride in the feature texts
// below and in MANIFEST.md. CR modifier: the decoded text reads "same
// as the base creature +1" and two of three samples agree (manticore
// CR 5 -> 6; 7th-level elf sorcerer CR 7 -> 8); the third sample (a
// 4th-level human warrior printed at CR 4) is consistent if the warrior
// counts as CR 3 before the template — carried as +1 and flagged. No
// level adjustment is printed in the legible text; LA is carried as 0
// with the flag, per pack precedent for unprinted LA.
// APOC: the living wall is undead — the campaign's undead house rules
// (maximized hit points; +4 to withstand turning and control, re-rolled
// every round) apply on top of the record in play, as with every undead
// record; published lines stay as printed. The article's Ravenloft
// spontaneous-origin framing is setting lore for a non-FR setting and
// is not carried; the wall is an unclaimed wild undead in APOC terms.
// See SCREENING.md.

import type { TemplateDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #343 — Creature Collection V: Living Wall (Sean K Reynolds), pp. 48-50";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

export const DRAGON_343_TEMPLATES: TemplateDefinition[] = [
  {
    id: "living-wall",
    name: "Living Wall",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A wall made of the dead: an acquired template that turns a corporeal creature into an immobile undead section of wall. The creature's type becomes undead, its size becomes Medium, it loses all movement (speed 0 ft.), its Hit Dice become d12s, it gains a slam attack and the power to absorb helpless creatures into itself — the absorbed become part of the wall, and eligible victims become living wall creatures in their own right. Challenge rating is the base creature's +1; no level adjustment is printed.",
    source: SRC,
    sourceUrl: SRC_URL,
    crModifier: 1,
    levelAdjustment: 0,
    prerequisites: [
      {
        note: "Living wall is an acquired template that can be added to any Small, Medium, or Large corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, outsider, or vermin with at least 4 Hit Dice. A creature becomes a living wall by being absorbed by an existing living wall creature (see the Absorb feature); the article also presents walls as spontaneously arising horrors (origin lore digested in reference.md).",
      },
    ],
    abilityModifiers: { str: 4, dex: null, con: null },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to undead. Do not recalculate base attack bonus, saves, or skill points from the new type." },
      { op: "set-size", value: "Medium", note: "Size changes to Medium (a 5-foot section of wall). The creature retains its reach but loses the other benefits and penalties of its former size." },
      { op: "set-speed", value: 0, note: "Speed becomes 0 ft.; the creature loses all other modes of movement and cannot move from its place in the wall." },
    ],
    features: [
      {
        key: "living-wall-form",
        name: "Wall Form",
        description:
          "The creature's Hit Dice change to d12s. It loses all Dexterity-derived modifiers to Armor Class; its natural armor bonus becomes +5 or the base creature's natural armor bonus, whichever is greater. It retains the base creature's attacks and gains a slam attack (1d6 damage) if it has no better natural weapon. It gains a +4 racial bonus on Listen and Spot checks. The creature has no Dexterity or Constitution score.",
        category: "trait",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "living-wall-absorb",
        name: "Absorb (Su)",
        description:
          "On its turn, a living wall creature can attempt to absorb a helpless or pinned opponent of Large size or smaller into the wall, with an opposed grapple check. An absorbed creature is helpless, cannot breathe, and begins to suffocate; if the creature is eligible to become a living wall (Small, Medium, or Large, corporeal, of a listed type, with at least 4 Hit Dice), it becomes a living wall creature in a new 5-foot section of the wall adjacent to the absorbing creature. A creature that is not eligible (smaller than Small, or fewer than 4 Hit Dice) is merely absorbed, and its absorption heals the wall a number of hit points equal to one-half the absorbed creature's normal hit point total, applied to the most damaged section of the wall. Half of any damage dealt to a living wall creature is also dealt to the creatures absorbed within it. A trapped creature is freed if the living wall creature absorbing it is destroyed.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "living-wall-amalgam",
        name: "Amalgam",
        description:
          "Sections of a single living wall — creatures bound into one continuous wall — are treated as one creature for some purposes (such as turning), yet each section separately makes saving throws and is separately affected by area effects; the sections can act independently but share the wall's goals.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "living-wall-hidden",
        name: "Hidden",
        description:
          "An illusion makes a living wall appear to be a normal wall of its surroundings; creatures adjacent to the wall can see through the illusion to the horror within.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "living-wall-immovable",
        name: "Immovable",
        description:
          "A living wall creature cannot be moved from its place. Passwall-type effects do not open a usable bypass through a square containing a living wall creature. (Decoded from the rotated second page of the template; wording is partially legible in the OCR stream — see MANIFEST.md.)",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "living-wall-improved-grab",
        name: "Improved Grab (Ex)",
        description:
          "If a living wall creature hits with a natural attack (such as a claw or bite), it may start a grapple as a free action without provoking an attack of opportunity. Each creature in a wall grapples individually, and being part of a grapple imposes no penalties on the other creatures in the same wall.",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "living-wall-many-arms",
        name: "Many Arms",
        description:
          "A living wall creature has numerous limbs reaching from the wall; the wall's many arms assist its grapple attempts. (This quality's text is partially legible in the OCR stream — the decoded sense is that the creature's many limbs aid it in grappling; the precise figures, including a +4 circumstance bonus on grapple checks read from the template's skills passage, are flagged in MANIFEST.md.)",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "living-wall-sickening-wounds",
        name: "Sickening Wounds (Su)",
        description:
          "The wounds a living wall creature deals fester horribly: a creature damaged by a living wall creature must succeed at a Fortitude save (the sample creatures print DC 14) or be nauseated for a number of rounds as the wound sickens it. (The rounds figure is not legible in the OCR stream — flagged in MANIFEST.md.)",
        category: "special-attack",
        source: SRC,
        sourceUrl: SRC_URL,
      },
      {
        key: "living-wall-undead-traits",
        name: "Undead Traits",
        description:
          "The creature has undead traits: no Constitution score, darkvision, immunity to mind-affecting effects, poison, sleep, paralysis, stunning, disease, and death effects, and the rest of the standard undead trait package.",
        category: "special-quality",
        source: SRC,
        sourceUrl: SRC_URL,
      },
    ],
  },
];
