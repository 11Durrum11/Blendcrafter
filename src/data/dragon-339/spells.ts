// Dragon Magazine #339 (January 2006) — spell draft: 5 spells.
// "Spellcraft: Heinfroth's Manual of Methods" (Phil Greeley), pp. 76-78 —
// the five insanity-treatment spells of the Masque of the Red Death
// asylum manual: Depression, Lobotomize, Shock Treatment, Submersion
// Treatment, and Transfusion. Typed SpellDefinition in the house shape
// of recent packs: targetOrArea carries the printed Target/Area/Effect
// text without a label; material components ride in `note`.
// Every header was verified against rendered page images (magazine
// pp. 77-78); the image governs over the OCR stream. APOC screening: the
// Gothic Earth / Masque of the Red Death framing is lore, stripped — the
// mechanics stage clean; none of the five summons, calls, teleports, or
// opens a plane (see SCREENING.md §3). Print tension carried as printed:
// transfusion's header duration ("Instantaneous and 10 minutes/level")
// sits beside body text stating the penalty and bonus last 1 minute per
// level — see MANIFEST.md.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #339 — Spellcraft: Heinfroth's Manual of Methods (Phil Greeley), pp. 76-78";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const MANUAL_NOTE =
  "One of the spells of Heinfroth's Manual of Methods, an asylum treatment manual from the Masque of the Red Death setting; the manual itself (market value 2,500 gp) and its Gothic-horror framing are digested in the pack's reference.md.";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Evocation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_339_SPELLS: SpellDefinition[] = [
  C({
    id: "depression",
    name: "Depression",
    school: "Necromancy",
    levels: { Bard: 3, "Sorcerer/Wizard": 3 },
    range: "20 ft.",
    targetOrArea: "20-ft.-radius burst centered on you",
    duration: "1 round/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    note: MANUAL_NOTE,
    summary:
      "Waves of weakness emanate from you, crippling your enemies both mentally and physically. All opponents within the area must save or become fatigued and take a penalty on their Will saves equal to −1 per 3 caster levels (maximum −5). Fatigue caused by this spell lasts for 1 round per caster level. This spell does not cause creatures that are already fatigued during its duration to become exhausted.",
  }),
  C({
    id: "lobotomize",
    name: "Lobotomize",
    school: "Transmutation",
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, M",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "1 minute/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    note: "Material component: a small metal hammer and an iron spike. " + MANUAL_NOTE,
    summary:
      "You cause a creature to forget how to use a specific ability. Upon casting this spell, choose a specific spell level of 4th level or lower, weapon proficiency, or two skills; any creature you successfully touch with a melee touch attack has some aspect of that trait lobotomized. If you choose a target's proficiency with weapons to be lobotomized, the target is treated as being nonproficient with all weapons, taking a −4 penalty on attack rolls it makes with any weapon (a target does not lose its proficiency with natural weapons). If you choose to lobotomize a spell level, the target loses all spell slots or prepared spells of that level for the duration (for example, a sorcerer with four 3rd-level spell slots loses access to all four slots, while a wizard in the same case would be unable to cast any prepared 3rd-level spells); at the end of the spell, any lobotomized spells or spell slots return. If you choose to lobotomize skills, pick two skills: for the duration, the target is treated as if it had 0 ranks in these two skills; if a lobotomized skill can be used untrained, the target can still make a skill check and add the bonus from its relevant ability score, but if a lobotomized skill cannot be used untrained, the target cannot make use of that skill. Lobotomize in no way informs you of what spells, feats, or skills a target possesses; if you attempt to lobotomize a spell level the target does not possess, the spell has no effect, and the spell has only partial effect if you try to lobotomize a skill the target does not possess, affecting only skills it actually has. This spell does not affect creatures without minds, such as many constructs, oozes, plants, numerous undead, or similar creatures.",
  }),
  C({
    id: "shock-treatment",
    name: "Shock Treatment",
    descriptors: ["Electricity"],
    levels: { "Sorcerer/Wizard": 2 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature",
    savingThrow: "Fortitude partial",
    spellResistance: "Yes",
    note: MANUAL_NOTE,
    summary:
      "You create a short stroke of electricity that arcs from your hand to the target creature. This bolt of electricity deals 1d6 points of electricity damage. In addition, the target must make a Fortitude save or be stunned for 1 round per 3 caster levels (maximum 5 rounds). Creatures with any immunity or resistance to electricity are immune to the stun effect.",
  }),
  C({
    id: "submersion-treatment",
    name: "Submersion Treatment",
    levels: { Druid: 7, "Sorcerer/Wizard": 7 },
    components: "V, S, M",
    targetOrArea: "One creature",
    duration: "1 round/level",
    savingThrow: "Reflex negates",
    spellResistance: "Yes",
    note: "Material component: a drop of water and a drop of blood. " + MANUAL_NOTE,
    summary:
      "You create a column of freezing, swirling water that engulfs your target. The subject is paralyzed by the water's powerful grip and takes 1d6 points of cold damage every round; however, the target gains a +6 bonus to AC as the liquid sheath protects it. While surrounded by water, if the subject is alive and cannot breathe water, it can hold its breath for 2 rounds per point of Constitution but must make a Constitution check (DC +1 per previous success) each round thereafter to continue doing so; failure on any such check (or voluntary resumption of breathing) causes the subject to fall unconscious (0 hp), on the next round the subject drops to −1 hit points and is dying, and on the third round it suffocates (see Drowning, DMG p. 304). A character outside the water column may attempt to help the subject: as a full-round action, a rescuer adjacent to the pillar of liquid may make a Strength check with a DC equal to the spell's initial saving throw to pull the subject free, which ends the spell.",
  }),
  C({
    id: "transfusion",
    name: "Transfusion",
    school: "Necromancy",
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, M",
    castingTime: "1 minute",
    range: "Touch",
    targetOrArea: "Living creature touched",
    duration: "Instantaneous and 10 minutes/level; see text",
    savingThrow: "None",
    spellResistance: "No",
    note: "Material component: a syringe. Print tension carried as printed: the header duration reads \"Instantaneous and 10 minutes/level; see text,\" while the body text states both the penalty and the bonus last for 1 minute per level — see the pack MANIFEST. " + MANUAL_NOTE,
    summary:
      "Through a minute-long ritual, you siphon a specific ability score from a creature. Upon casting this spell on a target, choose one ability score: the target takes a penalty to the chosen ability score equal to 1d6 +1 per 3 caster levels (maximum 1d6+5), and the target's affected ability score cannot drop below 1. You then gain a bonus to the chosen ability score equal to half the penalty imposed upon the target (rounded down). Both the penalty and the bonus incurred by this spell last for 1 minute per level (the header's printed duration reads \"Instantaneous and 10 minutes/level; see text\" — carried as printed, see the pack MANIFEST). If you attempt to use this spell to affect an ability score the target does not have (such as trying to drain the Constitution of an undead creature), the target suffers no ill effects, but you still roll to see how much of a penalty it would have taken if it had the ability; instead of the target taking this penalty, you take 5 points of damage for every point of that penalty. You must maintain contact with the target for the entire casting time; if you break contact for any reason the spell ends and you gain no benefit. Casting this spell most often requires the target to be unconscious, restrained in some manner, or willing.",
  }),
];
