// Dragon Magazine #350 (December 2006) — spell draft: 8 spells.
// THREE divine spells from "Core Beliefs: Wee Jas" (Sean K
// Reynolds), pp. 19-33: glamour costume and the lesser and greater
// globes of radiant invulnerability. ⚠️ SURVEY CORRECTION: the
// survey counted Wee Jas feats at 0 and looked for feats; the
// article's record yield is these three spells (there are no feats).
// FIVE chronomancy spells from "Spellcraft: Chronomancy"
// (Christopher Wissel), pp. 76-79, the spells of the Chronocorsa
// spellbook: aging touch, skillful moment, temporal jolt, temporal
// repair, time shield. ⚠️ SURVEY CORRECTION: the survey estimated
// ~6 chronomancy spells; the article prints five.
// Typed SpellDefinition in the house shape of recent packs:
// targetOrArea carries the printed Target/Area/Effect text without
// a label; material components ride in `note`; spell text in
// `summary` as a faithful mechanical paraphrase in our own words.
// CHRONOMANCY SCREENING (brief item 2 — see SCREENING.md §2): none
// of the five moves a creature through time bodily or reaches
// another time or plane bodily; the effectively-planar-travel set
// is EMPTY and that is stated on the record. Time shield and
// temporal repair stage as printed.
// WEE JAS SCREENING (brief item 3 — see SCREENING.md §3): Wee Jas
// is a Greyhawk goddess; in APOC the gods are outside the sealed
// sphere and power is drawn, not granted. The spells stage as
// mechanics; the goddess lore digests in reference.md. The
// article's customized summon monster list and herald material
// screen to reference (summoning does not work in APOC).

import type { SpellDefinition } from "@/engine/types";

const SRC_WEEJAS = "Dragon Magazine #350 — Core Beliefs: Wee Jas (Sean K Reynolds), pp. 19-33";
const SRC_CHRONO = "Dragon Magazine #350 — Spellcraft: Chronomancy (Christopher Wissel), pp. 76-79";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

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
    source: SRC_CHRONO,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_350_SPELLS: SpellDefinition[] = [
  C({
    id: "glamour-costume",
    name: "Glamour Costume",
    school: "Illusion",
    subschool: "Glamer",
    levels: { Cleric: 1, "Sorcerer/Wizard": 1 },
    source: SRC_WEEJAS,
    range: "Personal",
    targetOrArea: "You",
    duration: "1 hour/level (D)",
    summary:
      "You change the appearance of your clothing — including your weapons, armor, and other equipment — and make superficial changes to your own features, such as makeup, hair color, beauty marks, and signs of aging. The effect works like disguise self, except that it can only alter your outfit and surface features: you remain recognizable as yourself, so the glamer cannot create a true disguise or change one kind of clothing into another kind, though ragged traveler's gear could be made to look like a beautiful gown or cleric's vestments. Once per hour, as a standard action, you can change your appearance again within the same limits; each such change reduces the spell's remaining duration by 1 hour.",
  }),
  C({
    id: "globe-of-radiant-invulnerability-lesser",
    name: "Globe of Radiant Invulnerability, Lesser",
    school: "Abjuration",
    descriptors: ["Light"],
    levels: { Cleric: 5 },
    source: SRC_WEEJAS,
    components: "V, S, M",
    range: "10 ft.",
    targetOrArea: "10-ft.-radius spherical emanation, centered on you",
    duration: "1 round/level (D)",
    savingThrow: "None or Reflex partial (see text)",
    spellResistance: "No or Yes (see text)",
    summary:
      "An immobile, faintly shimmering spherical barrier of radiant energy springs into existence around you and functions as lesser globe of invulnerability, with two additions. Once per round as a free action, you can set the globe's radiance anywhere from a candle's glow to torchlight to the brightness of a daylight spell, or back to the faint shimmer. As a standard action, you can detonate the globe in a burst of searing radiance out to 20 feet, destroying the globe and ending the spell: creatures in the burst are blinded and take 3d6 points of damage (doubled against creatures harmed by sunlight), with a Reflex save negating the blindness and halving the damage; spell resistance applies to this radiance but not to the globe itself. Undead caught within the globe when it detonates take 1d6 points of damage per caster level (maximum 10d6), Reflex save for half; fungi, molds, oozes, and slimes are treated as undead for this purpose.",
  }),
  C({
    id: "globe-of-radiant-invulnerability-greater",
    name: "Globe of Radiant Invulnerability, Greater",
    school: "Abjuration",
    descriptors: ["Light"],
    levels: { Cleric: 7 },
    source: SRC_WEEJAS,
    components: "V, S, M",
    range: "10 ft.",
    targetOrArea: "10-ft.-radius spherical emanation, centered on you",
    duration: "1 round/level (D)",
    savingThrow: "None or Reflex partial (see text)",
    spellResistance: "No or Yes (see text)",
    summary:
      "This spell functions as globe of radiant invulnerability, lesser, except that the barrier works as greater globe of invulnerability, and the searing radiance of the detonation deals 6d6 points of damage (doubled against creatures harmed by sunlight). Undead caught within the globe at the detonation take 1d6 points of damage per caster level (maximum 15d6), Reflex save for half, and fungi, molds, oozes, and slimes are treated as undead for this purpose.",
  }),
  C({
    id: "aging-touch",
    name: "Aging Touch",
    school: "Necromancy",
    levels: { "Sorcerer/Wizard": 3 },
    components: "V, S, M",
    range: "Touch",
    targetOrArea: "Living creature touched",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    note: "Material component: a pinch of dust.",
    summary:
      "Your touch temporarily ages the target by one full age category (a young creature becomes middle-aged, middle-aged becomes old, old becomes venerable; a creature with no stated age is treated as young) and deals 1 point of damage to the target's Strength, Dexterity, and Constitution. The damage stacks across multiple applications — a creature struck three times has aged three categories and taken 3 points of damage to each of the three abilities — and the target's appearance ages with it (wrinkled skin, white hair, a stoop), granting a cumulative +2 bonus on Disguise checks that fades by -2 per day as the effect wears off. The target gains none of the benefits of growing older. A target already venerable cannot age further and instead takes 5d6 points of damage from each additional touch. The ability damage heals normally, at 1 point per day for each affected ability.",
  }),
  C({
    id: "skillful-moment",
    name: "Skillful Moment",
    school: "Divination",
    levels: { Bard: 1, "Sorcerer/Wizard": 1 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round",
    summary:
      "You seize a moment of perfect clarity about a single skill, chosen when you cast the spell. On the round immediately after casting, you may take 20 on one check with the chosen skill as a single standard action. The benefit applies only to that skill and only to a check made in the round immediately following the casting; if the check is not made in that round, the benefit is lost.",
  }),
  C({
    id: "temporal-jolt",
    name: "Temporal Jolt",
    school: "Evocation",
    levels: { "Sorcerer/Wizard": 4 },
    targetOrArea: "Ray",
    savingThrow: "None",
    spellResistance: "Yes",
    summary:
      "A ray of accelerated time strikes the target on a successful ranged touch attack, dealing 1d6 points of damage per three caster levels (maximum 5d6) as the victim's body ages and decays in a heartbeat. The jolt also speeds decay and corrosion in what the target carries: nonmagical armor worn by the target permanently loses 1d6 points of its armor bonus (up to the maximum the armor provides; armor reduced to a +0 bonus is destroyed), and nonmagical weapons and held items are instantly destroyed. Items inside backpacks, pouches, and other containers are unaffected, and magic items are unaffected entirely.",
  }),
  C({
    id: "temporal-repair",
    name: "Temporal Repair",
    school: "Abjuration",
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, M",
    range: "50 ft.",
    targetOrArea: "50-ft.-radius sphere centered on you",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "No",
    note: "Material component: a handful of seeds and rust (component line partially legible in the scan; see MANIFEST).",
    summary:
      "You cement the flow of time within the area, sealing it against temporal tampering. Time-altering spells of a lower level than temporal repair cannot affect creatures inside the area, and a creature that enters the area under a multi-round time effect (such as temporal jolt or time shield) has that effect dispelled. When a higher-level time spell (such as time stop) would affect a creature in the area, make an opposed caster level check: if you succeed, the spell is dispelled; if you fail, it functions normally. Exactly which spells count as time-altering is the DM's call — typically time stop, all the spells of the Chronocorsa, and any spell with \"time\" in its name.",
  }),
  C({
    id: "time-shield",
    name: "Time Shield",
    school: "Abjuration",
    levels: { Bard: 4, "Sorcerer/Wizard": 4 },
    range: "30 ft.",
    targetOrArea: "30-ft.-radius sphere centered on you",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "Time runs hot inside the bubble you create: spells and spell effects within it are consumed at twice their normal rate, losing 2 rounds of duration for every round (or partial round) spent inside. Spells cast outside the bubble that subsequently enter it are affected the same way. Only durations measured in rounds or minutes are affected; the treatment of durations measured in hours, days, or longer is left to the DM. One time shield cannot affect another time shield.",
  }),
];
