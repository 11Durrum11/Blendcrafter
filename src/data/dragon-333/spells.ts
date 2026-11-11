// Dragon Magazine #333 (July 2005) — spell draft: 6 records.
// FIVE from "Spellcraft: Visions of Fear" (Peter M. Ball),
// pp. 70-73 — the recovered folio of Phade Evanshad, master of
// fear magic: glimpse of fear, Phade's fearsome aspect, vision of
// fear, inescapable swarm, sphere of terror. ONE from "The Relics
// of Faerûn" (George Swan), p. 54 — hand of Torm, the spell the
// Trueword Buckler relic casts, printed with the article.
// Every header line (school, level, components, casting time,
// range, target/area, duration, saves, SR) was verified against
// rendered page images (magazine pp. 71, 72, 73); the image governs
// over the OCR stream — it confirms inescapable swarm's close
// range as printed ("25 ft. + 5 ft./level", a nonstandard line,
// staged as printed) and that inescapable swarm carries NO
// descriptor brackets as printed.
// 3.5-STANDARD NOTE (Shaun's standing order): hand of Torm first
// appeared in Magic of Faerûn (a 3.0 book); the magazine reprint
// staged here is the later restatement (divine-focus component,
// Fortitude negates, alignment descriptors of the caster's patron)
// and is 3.5-form as printed — the conversion note is carried in
// MANIFEST.md / SCREENING.md, not blended into the record.
// APOC check on vision of fear: the spell moves nothing and
// contacts nothing — it grants the caster knowledge usable as
// first-hand knowledge for scrying and "studied carefully"
// familiarity for teleport (both core-mechanic references), the
// same posture as core divinations. Checked and cleared in
// SCREENING.md. Sphere of terror's darkness is ordinary spell
// darkness (shadowy illumination), not planar. Descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

import type { SpellDefinition } from "@/engine/types";

const SRC_FEAR = "Dragon Magazine #333 — Spellcraft: Visions of Fear (Peter M. Ball), pp. 70-73";
const SRC_RELICS = "Dragon Magazine #333 — The Relics of Faerûn: Gifts From The Gods (George Swan), p. 54";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary" | "description">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Evocation",
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC_FEAR,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_333_SPELLS: SpellDefinition[] = [
  C({
    id: "glimpse-of-fear",
    name: "Glimpse of Fear",
    school: "Illusion",
    subschool: "Phantasm",
    descriptors: ["Fear", "Mind-Affecting"],
    levels: { Bard: 1, Cleric: 1, "Sorcerer/Wizard": 1 },
    range: "Close (25 ft. + 5 ft./level)",
    targetOrArea: "One living creature",
    duration: "1 round/level; see text",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "A flash of horror causes the target to become shaken.",
    description:
      "You plunge the subject directly into a waking nightmare, immersing it in a world of fear for a brief instant. The change happens so fast that many creatures do not consciously sense it at all, but a failed Will save registers long enough to leave the subject shaken for 1 round per caster level. In addition, a target that fails the Will save to resist this spell also takes a -4 penalty on all Will saves made to resist spells with the fear descriptor for the duration. Sightless creatures and creatures that are immune to fear effects are not affected by this spell.",
  }),
  C({
    id: "phades-fearsome-aspect",
    name: "Phade's Fearsome Aspect",
    school: "Illusion",
    subschool: "Glamer",
    levels: { Bard: 2, Cleric: 2, "Sorcerer/Wizard": 2 },
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "1 minute/level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "The target gains a +5 bonus on Intimidate checks and can demoralize as a swift action.",
    description:
      "The target's facial features take on the aspect of a threatening creature seemingly birthed from the Abyss: the subject's eyes seem to change to glowing slits, its skin darkens and grows scales, and horns and sharp teeth appear to jut from its face. The change has no effect on the target's physical abilities, but it does bestow a +5 bonus on Intimidate checks and allows the target to make an attempt to demoralize opponents as a swift action. Neither the caster nor the target of this spell has control over the specific features of the illusion, and it cannot be used to create a specific disguise; regardless, the horrific nature of the form masks your appearance and grants you a +10 bonus on Disguise checks. A creature that physically interacts with the features of a Phade's fearsome aspect gets a Will save to recognize it as an illusion.",
  }),
  C({
    id: "vision-of-fear",
    name: "Vision of Fear",
    school: "Divination",
    levels: { Bard: 3, Cleric: 3, "Sorcerer/Wizard": 2 },
    castingTime: "1 round",
    range: "60 ft.",
    targetOrArea: "One creature",
    duration: "Instantaneous/24 hours; see text",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "You gain knowledge of the target's greatest or most recent fear.",
    description:
      "You get a sudden vision of either the target's greatest fear or its most recent source of fear, be it a situation, location, item, type of creature, or individual; you choose which fear to gain knowledge of. The image is drawn directly from the subject's subconscious and is accompanied by a burst of vivid details strong enough that, for 24 hours, you are treated as having first-hand knowledge of it for the purposes of scrying and having studied it carefully for the purposes of teleporting; after that time the memory fades to second-hand knowledge (viewed once). If you choose the target's greatest fear, your intimate understanding imposes a -2 penalty on the target's Will saves to resist any of your spells with the fear descriptor for the next 24 hours. The spell has no effect on targets with an Intelligence lower than 3 or on creatures immune to fear. If the creature's most recent fear was due to a fear effect from a spell or spell-like ability, you immediately identify the fear as a magical compulsion (and not a true personal fear).",
  }),
  C({
    id: "inescapable-swarm",
    name: "Inescapable Swarm",
    school: "Illusion",
    subschool: "Figment",
    levels: { Bard: 5, "Sorcerer/Wizard": 4 },
    components: "V, S, M",
    range: "Close (25 ft. + 5 ft./level)",
    targetOrArea: "One creature/level, no two of which can be more than 30 feet apart",
    duration: "Concentration, up to 1 round/level",
    savingThrow: "Will disbelief, then Fortitude partial; see text",
    spellResistance: "Yes",
    note: "Material Component: A handful of cobwebs wrapped between the fingers.",
    summary:
      "Targets feel as though they are covered by an invisible swarm of insects.",
    description:
      "This spell causes the targets to feel as though thousands of spiders, ants, locusts, and other insects were crawling over their flesh, exactly as if they were caught in the heart of a swarm. The targets first get a Will save to recognize the sensations as unreal; targets that fail this save become shaken. In addition, those that become shaken due to this spell's effects must make an additional Fortitude save; targets that fail this Fortitude save are overwhelmed by the inescapable barrage of grotesque sensations, causing them to become nauseated.",
  }),
  C({
    id: "sphere-of-terror",
    name: "Sphere of Terror",
    school: "Illusion",
    subschool: "Shadow",
    descriptors: ["Darkness", "Fear", "Mind-Affecting"],
    levels: { "Sorcerer/Wizard": 4 },
    components: "V, S, M",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "30-ft.-radius hemisphere",
    duration: "1 round/level",
    savingThrow: "Will disbelief, then Fortitude half",
    spellResistance: "Yes",
    note: "Material Component: A claw or talon and a blindfold.",
    summary:
      "Creates 30-ft. radius of supernatural shadow filled with deadly shadowy illusions.",
    description:
      "This spell creates a globe filled with flickering shadows, similar to the spell darkness, causing a 30-foot radius to fill with shadowy illumination. All creatures in the area gain concealment (20% miss chance); even creatures that can normally see in such conditions (such as those with darkvision or low-light vision) have a miss chance in an area shrouded in magical darkness. Normal lights (torches, candles, lanterns, and so forth) are incapable of brightening the area, as are spells with the light descriptor of lower level, such as daylight; higher level light spells are not affected. This spell counters or dispels any light spell of equal or lower level. Those creatures surrounded by the shadows that fail their Will save are shaken, unnerved by the shrieking and constant movement, and are attacked by the phantasmal creatures they fleetingly perceive, wracked by ghostly stabs and bites from behind: the sphere makes one attack every round against every creature within it that has failed its Will save, dealing 1d6 points of damage. These attacks persist for as long as the creature remains within the sphere.",
  }),
  C({
    id: "hand-of-torm",
    name: "Hand of Torm",
    school: "Abjuration",
    descriptors: ["Good", "Lawful"],
    levels: { Cleric: 4, Paladin: 4 },
    components: "V, S, DF",
    castingTime: "1 minute",
    range: "10 ft.",
    targetOrArea: "10-ft.-radius emanation centered on you",
    duration: "1 hour/level",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    source: SRC_RELICS,
    summary:
      "Immobile ward barring all but the faithful of your patron deity.",
    description:
      "When you cast this spell, an invisible, immobile barrier of force springs into existence around you, permeable only to worshipers of your patron deity and those bearing holy symbols of your deity. Anyone else attempting to pass through the barrier must make a successful Fortitude saving throw or be stunned for 1 round. The barrier does not hinder creatures attempting to exit its area. The spell is named after the patron deity of the caster — a cleric of Ilmater casts hand of Ilmater — and its descriptors are the alignment descriptors of the patron deity (good and lawful as printed for Torm).",
  }),
];
