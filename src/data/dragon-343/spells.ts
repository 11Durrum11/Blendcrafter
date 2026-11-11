// Dragon Magazine #343 (May 2006) — spell draft: 5 spells staged of 6
// printed. "Spellcraft: The Magic of Kyuss" (Jesse Decker), pp. 76-80.
// All six spells are gated on the Wormbound Spellcaster feat (p. 76) or
// on having the wormspawn subtype; the feat adds them to the caster's
// spell list at the levels printed in the feat and in each spell's level
// line ("Kyuss 2" etc. — Kyuss's own list, not a standard class list).
// The level key is therefore carried as "Kyuss": it does NOT resolve
// against CASTING_PROFILES listNames (a known, flagged integration
// matter — see SCREENING.md; the audit reports it openly).
// HELD TO REFERENCE: extrude wormswarm (Kyuss 7) is printed as
// Conjuration (Summoning) and its text reads "You summon a swarm of
// Kyuss worms" — summoning does not work in APOC. Full text in
// reference.md; the disposition and the counter-reading are itemized in
// SCREENING.md.
// APOC dispositions for the staged five (reasoned spell by spell in
// SCREENING.md): none summons, calls, binds, or travels the planes. The
// worm within creates a spawn of Kyuss from a slain in-world host — an
// in-world creation effect on a living creature/corpse, not planar
// summoning — and stages per the issue-specific brief.
// VERIFICATION BASIS: the archive.org OCR stream, cross-read against a
// second independent OCR stream of the issue where the two overlap.
// No rendered page image was consulted in this session; header risks
// (servant of the green corruption's malformed school line, consume the
// parasite's unprinted save/SR lines, the worm within's garbled range)
// are carried conservatively and listed in MANIFEST.md.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #343 — Spellcraft: The Magic of Kyuss (Jesse Decker), pp. 76-80";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const KYUSS_NOTE =
  "A spell of Kyuss: available only to a caster with the Wormbound Spellcaster feat (or the wormspawn subtype), which adds it to the caster's spell list at the level given here.";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Necromancy",
    descriptors: ["Evil"],
    levels: {},
    components: "V, S, F",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One living creature",
    duration: "Instantaneous",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_343_SPELLS: SpellDefinition[] = [
  C({
    id: "path-of-worms",
    name: "Path of Worms",
    school: "Divination",
    levels: { Kyuss: 2 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 hour/level or until discharged",
    savingThrow: "Will negates (see text)",
    spellResistance: "Yes (see text)",
    note: "Focus: the Kyuss worm hosted in the caster's body. " + KYUSS_NOTE,
    summary:
      "The worm shows you a glimpse of the path of the Age of Worms. Once during the spell's duration, as an immediate action taken before the roll is made (or before an attack roll against you, for Armor Class), you can gain a +6 insight bonus on a single attack roll, opposed ability or skill check, or saving throw, or to your AC against a single attack (even while flat-footed). When you use this benefit, the spell discharges, and living creatures within 20 feet catch a maddening glimpse of the Age of Worms: each must succeed at a Will save or be stunned for 1 round (a mind-affecting effect; spell resistance applies to this discharge).",
  }),
  C({
    id: "consume-the-parasite",
    name: "Consume the Parasite",
    levels: { Kyuss: 3 },
    components: "V, S, M",
    castingTime: "1 swift action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    note: "Material component: the Kyuss worm hosted in the caster's body (a caster with the wormspawn subtype instead requires a live Kyuss worm). " + KYUSS_NOTE,
    summary:
      "You consume the Kyuss worm hosted within you and draw power from it for the spell's duration: you regain 3 hit points per caster level (hit points beyond your maximum become temporary hit points), gain a +4 enhancement bonus to Strength and Dexterity, and cast other spells at +2 caster level with a +2 bonus to their save DCs. Consuming the worm ends the benefits of the Wormbound Spellcaster feat until you bind a new worm with that feat's ritual.",
  }),
  C({
    id: "the-worm-within",
    name: "The Worm Within",
    levels: { Kyuss: 3 },
    components: "V, S, M",
    note: KYUSS_NOTE,
    summary:
      "You create a Kyuss worm burrowing within the target. The worm deals 1 point of damage per round for 1d4+1 rounds as it burrows, then reaches the brain and deals 1d2 points of Intelligence damage per round until the worm is destroyed or the host is slain. The worm is destroyed by a dispel evil, heal, remove curse, or remove disease spell; a DC 20 Heal check can also extract and destroy it. If the host is slain by the worm, a Small, Medium, or Large host rises as a spawn of Kyuss in 1d6+4 rounds; a Tiny or smaller host putrefies, and a Huge or larger host becomes a normal zombie of the appropriate size. You have no control over any undead so created.",
  }),
  C({
    id: "mindworms",
    name: "Mindworms",
    school: "Conjuration",
    levels: { Kyuss: 4 },
    savingThrow: "Will partial",
    note: "Focus: the Kyuss worm hosted in the caster's body. " + KYUSS_NOTE,
    summary:
      "Incorporeal green worms fly from you through the target's mind. The target takes 1d6 points of Wisdom damage and loses three spell levels' worth of prepared spells or spell slots (the target chooses the combination; only spells of 1st level or higher are lost, and spell-like abilities are unaffected). The lost spells may be arcane or divine. A successful Will save halves the Wisdom damage and negates the spell drain. If you successfully drain three spells, you gain spell energy you may use once within 1 hour: recall a previously cast prepared spell of 3rd level or lower; gain an extra spell slot of 3rd level or lower (for a spontaneous caster, an extra use of a known spell of 3rd level or lower); or spontaneously apply one metamagic feat you possess to a spell as you cast it.",
  }),
  C({
    id: "servant-of-the-green-corruption",
    name: "Servant of the Green Corruption",
    levels: { Kyuss: 5 },
    duration: "1 minute/level",
    savingThrow: "Will negates",
    descriptors: ["Evil", "Mind-Affecting"],
    note: "Focus: the Kyuss worm hosted in the caster's body. " + KYUSS_NOTE + " The printed school line reads \"Necromancy (Mind-Affecting) [Evil]\" in the OCR stream — a malformed header ((Mind-Affecting) is a descriptor, not a subschool, and the effect is a bolstering one); the record carries school Necromancy with the Mind-Affecting descriptor and the header is flagged for an image check at integration — see SCREENING.md.",
    summary:
      "You anoint a living creature as a servant of Kyuss. The target gains a +4 insight bonus on attack rolls and Armor Class and a +20-foot enhancement bonus to speed for the duration. The favor carries a price: the target takes a -10 penalty on all saving throws against spells that require a Kyuss worm as a component and against effects originating from creatures with the wormspawn subtype. A successful Will save negates both the benefit and the penalty.",
  }),
];
