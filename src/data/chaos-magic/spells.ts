import type { SpellDefinition } from "@/engine/types";

// Chaos Magic: Wild Sorcery (Encyclopaedia Arcane,
// Mongoose Publishing, 2001) — the Chaos Magic chapter,
// printed pp. 18-31, transcribed from Shaun's own
// scanned copy (read visually; the scan is image-only),
// 2026-11-04. This is a 3.0-era book: entries are
// transcribed as printed, including 3.0 forms such as
// partial actions and move equivalent actions.
//
// Chaos magic has NO fixed spell list: a chaos mage
// builds each spell at casting time from one effect
// element plus area, range, duration and saving throw
// elements, then makes a Casting check (1d20 + chaos
// mage level + Cha modifier) against the total Casting
// DC. Following the Magic of Incarnum soulmeld
// precedent, the system's six effect elements are
// modeled here as spell records under school "Chaos
// Magic": the `levels` map names the Chaos Mage list
// at level 1 as a filing placeholder (chaos spells
// have no spell levels; the Casting DC in each summary
// governs), and each element's printed stat block
// (Casting DC / Save / Spell Resistance / Continued
// Concentration) is carried in the summary and the
// savingThrow / spellResistance fields. All chaos
// magic spells have a casting time of a standard
// action, provoke attacks of opportunity, and have
// both verbal and somatic components (p. 29); range,
// area and duration are set by the elements chosen at
// casting (defaults: personal range, single subject,
// instantaneous — no chaos magic spell may be
// permanent). The chapter's two worked sample spells
// (Ambush Tap, Push Wave) follow the elements; their
// printed figures conflict with the element tables
// and the book's Summary Sheet (inside front cover),
// and the discrepancy is flagged in their summaries
// rather than silently resolved. The full system —
// element DC tables, casting strain, backlash and
// the Paths of Chaos — is digested in the draft
// report. Summaries are short mechanical paraphrases
// in our own words; no book prose is reproduced.

const CM = "Chaos Magic: Wild Sorcery";
const CM_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Encyclopaedia Arcane/Chaos Magic - Wild Sorcery.pdf";
const CH = `${CM} — Chaos Magic`;

const SAVE_DC = "save DC 10 + caster's Cha modifier + 1/2 caster level";
const RANGE_BY_ELEMENT = "By range element (personal by default)";
const AREA_BY_ELEMENT = "By area element (single subject by default)";
const DURATION_BY_ELEMENT = "By duration element (instantaneous by default; no chaos magic spell may be permanent)";
const ELEMENT_NOTE =
  "Chaos magic effect element — a building block the chaos mage combines with area, range, duration and saving throw elements to craft a spell at casting time, not a fixed spell. Chaos spells have no spell level; the level shown is a filing placeholder and the base Casting DC in the summary governs.";

export const CHAOS_MAGIC_SPELLS: SpellDefinition[] = [
  {
    id: "raw-damage-effect",
    name: "Raw Damage Effect",
    ruleset: "core",
    school: "Chaos Magic",
    descriptors: [],
    levels: { "Chaos Mage": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: RANGE_BY_ELEMENT,
    targetOrArea: AREA_BY_ELEMENT,
    duration: "Instantaneous (damage effects may only ever be instantaneous in duration)",
    savingThrow: `Fortitude halves (${SAVE_DC})`,
    spellResistance: "Yes",
    summary: "Casting DC 10. Effect element: the most straightforward of all effects, a rush of violent energy directed at one or more targets — 1d8 points of damage per caster level, though a chaos mage may intentionally cast with less dice. The chaos mage player is free to choose whether his newly created spell deals electricity, fire, cold, acid or force damage, and damage spells of this type generate vivid visual effects unique to each caster. Continued Concentration: No.",
    note: ELEMENT_NOTE,
    source: `${CH} — Raw Damage Effect, pp. 19-20`,
    sourceUrl: CM_PATH,
  },
  {
    id: "persistent-damage-effect",
    name: "Persistent Damage Effect",
    ruleset: "core",
    school: "Chaos Magic",
    descriptors: [],
    levels: { "Chaos Mage": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: RANGE_BY_ELEMENT,
    targetOrArea: AREA_BY_ELEMENT,
    duration: "Instantaneous (damage effects may only ever be instantaneous in duration; this effect continues over rounds until its damage pool is dealt)",
    savingThrow: `Fortitude halves (${SAVE_DC})`,
    spellResistance: "Yes",
    summary: "Casting DC 5. Effect element: rather than expend all its damage in a single blast, the spell gradually increases the damage it causes until it reaches full potential, drawing on a total of 1d8 points of damage per caster level (a chaos mage may intentionally cast with less dice). On the round the spell is cast the target suffers 1d8 points of damage, increasing by 1d8 on each subsequent round until all of the available damage has been dealt. Continued Concentration: Yes.",
    note: ELEMENT_NOTE,
    source: `${CH} — Persistent Damage Effect, pp. 19-20`,
    sourceUrl: CM_PATH,
  },
  {
    id: "degrading-damage-effect",
    name: "Degrading Damage Effect",
    ruleset: "core",
    school: "Chaos Magic",
    descriptors: [],
    levels: { "Chaos Mage": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: RANGE_BY_ELEMENT,
    targetOrArea: AREA_BY_ELEMENT,
    duration: "Instantaneous (damage effects may only ever be instantaneous in duration; this effect continues over rounds until its damage pool is dealt)",
    savingThrow: `Fortitude halves (${SAVE_DC})`,
    spellResistance: "Yes",
    summary: "Casting DC 10. Effect element: an initial blast of magic that continues to damage the target over several rounds, from a total of 1d8 points of damage per caster level (a chaos mage may intentionally cast with less dice). On the first round the spell causes one half of its total dice of damage, rounding down; the damage caused in the following round is equal to one die less than that caused on the initial round, and subsequent rounds further reduce the damage by one more die until no damage dice remain. No spell using this effect element may cause more than a total of 30d8 damage. Continued Concentration: Yes.",
    note: ELEMENT_NOTE,
    source: `${CH} — Degrading Damage Effect, p. 20`,
    sourceUrl: CM_PATH,
  },
  {
    id: "materialisation-effect",
    name: "Materialisation Effect",
    ruleset: "core",
    school: "Chaos Magic",
    descriptors: [],
    levels: { "Chaos Mage": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: RANGE_BY_ELEMENT,
    targetOrArea: AREA_BY_ELEMENT,
    duration: "By duration element (instantaneous by default — a duration element must be included or a created object disappears as soon as it appears)",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Effect element: fashion solid items from the fluid body of primal chaos. All such objects appear unnatural, are roughly as strong as bronze with the same density, can appear anywhere within the spell's range, radiate a magical aura for the purposes of detect magic spells, but have no additional inherent magical properties; the objects created must have enough space to allow for their materialisation. Grades — Negligible (Casting DC 5): a single item of up to one ounce in weight per level of the caster, or alternatively a quiet noise or very dim light equivalent to a candle. Minor (Casting DC 10): a single item of up to 1 pound in weight per level of the caster. Moderate (Casting DC 15): one or more items with a maximum combined weight of two pounds per level of the caster; alternatively, loud and complex sounds and speech may be created, as well as spectral lights in a variety of colours with the equivalent brightness of a daylight spell. Major (Casting DC 20): one or more items with a maximum combined weight of five pounds per level of the caster, which may also be imbued with the sounds and/or light described under the moderate level of effect. Chaos Construct (Casting DC 20-30; Continued Concentration: Yes): an animated materialisation with a simple intellect that follows orders, crafted from primal chaos and appearing as a humanoid covered in swirling patterns of energy; it coalesces anywhere within the spell's range already aware of its first command. Chaos Construct (Su): all chaos constructs are able to obey a single, simple command at a time and can receive mental commands as long as it and its caster are within 100 ft. of one another; they are immune to mind-influencing effects, poison, and disease, and unaffected by critical hits, nonlethal damage, ability damage, energy drain, and death from massive damage; they are considered outsiders and share their caster's alignment, and their saves are as the caster's. Minor Chaos Construct (DC 20): Hit Dice 1d4 per caster level, Initiative +1 (Dex), Speed 20 ft., AC 10 + 1/4 caster level, Slam +1/4 caster level (1d4-1), Space/Reach 2 1/2 ft. by 2 1/2 ft. / 2 1/2 ft., Str 8, Dex 12, Con -, Int -, Wis 1, Cha 1. Moderate Chaos Construct (DC 25): Hit Dice 1d8 per caster level, Speed 30 ft., AC 10 + 1/2 caster level, Slam +1/2 caster level + 2 (1d6+2), Space/Reach 5 ft. by 5 ft. / 5 ft., Str 14, Dex 12, Con -, Int -, Wis 1, Cha 1. Major Chaos Construct (DC 30): Hit Dice 1d12 per caster level, Speed 30 ft., AC 10 + caster level, Slam + caster level + 3 (1d8+3), Space/Reach 5 ft. by 5 ft. / 5 ft., Str 16, Dex 12, Con -, Int -, Wis 1, Cha 1. Round all fractions down. Continued Concentration: No (Chaos Construct: Yes).",
    note: ELEMENT_NOTE,
    source: `${CH} — Materialisation Effect, pp. 21-22`,
    sourceUrl: CM_PATH,
  },
  {
    id: "movement-effect",
    name: "Movement Effect",
    ruleset: "core",
    school: "Chaos Magic",
    descriptors: [],
    levels: { "Chaos Mage": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: RANGE_BY_ELEMENT,
    targetOrArea: AREA_BY_ELEMENT,
    duration: DURATION_BY_ELEMENT,
    savingThrow: `Will negates (${SAVE_DC})`,
    spellResistance: "Yes",
    summary: "Effect element: move himself and others quickly through space and time, or even across different planes of existence — or speed up allies and slow down opponents. It is safer for the chaos mage to move only himself, for when transporting others he places them at risk of damage due to exposure to primal chaos (see Chaos Movement, below). Grades (all Save: Will negates; Spell Resistance: Yes; Continued Concentration: No) — Minor (Casting DC 15): the maximum distance it is possible for any affected subject to travel is 20 ft. + 5 ft. per 2 caster levels; instead of magical movement, the chaos mage may instead use this level of effect to give the spell's subject an additional move action in the round following the casting of the spell, or deprive the subject of its next move action. Moderate (Casting DC 20): maximum distance 100 ft. + 10 ft. per caster level; or give the subject an additional standard action in the round following the casting, or deprive the subject of its next standard action. Major (Casting DC 25): maximum distance 400 ft. + 40 ft. per caster level; or give the subject an additional standard action in the round following the casting, or deprive the subject of its next standard action. Extreme (Casting DC 30): maximum distance 1 mile + 1 mile per caster level — the caster must be familiar with the area to which they are teleporting, or the spell will automatically fail; or give the subject an additional full round action in the round following the casting, or deprive the subject of its next full round action. Universal (Casting DC 35): the caster may move himself and other subjects between the planes of existence; each casting may only move a subject to a plane of existence 'next to' their current location; there is a +5 insight bonus applied to the Casting DC when moving to or from a chaotically-aligned plane, but a -5 penalty when moving to or from a lawfully-aligned plane. Chaos Movement: anyone, except for a chaos mage, affected by a chaos magic spell with a movement effect must make a Fortitude save at DC 10 or suffer 1d8 points of nonlethal damage due to close proximity with the raw forces of chaos.",
    note: ELEMENT_NOTE,
    source: `${CH} — Movement Effect, pp. 22-23`,
    sourceUrl: CM_PATH,
  },
  {
    id: "transformation-effect",
    name: "Transformation Effect",
    ruleset: "core",
    school: "Chaos Magic",
    descriptors: [],
    levels: { "Chaos Mage": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: RANGE_BY_ELEMENT,
    targetOrArea: AREA_BY_ELEMENT,
    duration: DURATION_BY_ELEMENT,
    savingThrow: `Will negates (${SAVE_DC})`,
    spellResistance: "Yes",
    summary: "Effect element: create complex and radical changes in subjects, physical or mental — lead to gold, flesh to stone, and man to beast are all examples. The total amount of material that may be transformed in any way (whether physically or mentally) is equal to 20 pounds per level of the caster, and in every case the exact bonuses and penalties may be specified by the caster, though the maximum adjustment possible is +1 per two caster levels. Grades (all Save: Will negates; Spell Resistance: Yes; Continued Concentration: No) — Negligible (Casting DC 5): clean or repair minor damage to an object (tears in cloth, chips in wood or metal, stains and spots); grant a subject an enhancement bonus to one type of saving throw (chosen by the chaos mage at the time of casting) for the duration of the spell; alter the appearance of a subject, providing an enhancement bonus to any Disguise checks; create or erase writing (one sentence per caster level) by transforming the patterns on a surface. Minor (Casting DC 10): grant an enhancement bonus or penalty to a subject's saving throws, Armour Class or attack or damage rolls; apply an enhancement bonus or penalty to one ability score of a subject; blind, stun, or deafen a subject; render a subject invisible — an attack or other action that draws attention to the subject will end the spell immediately; change the material of one object into another, similar type — for example, paper to cloth or steel to stone. Moderate (Casting DC 15): cause a solid object to become ethereal and able to move through other solid objects; transform one magical effect upon a subject into a harmless enchantment that dissipates immediately; increase or decrease the size of a subject by 10% per level of the caster, up to a maximum of 50%; convert the state of non-living matter — for example, water to steam or stone to sand. Total (Casting DC 20): convert raw materials to become finished, crafted objects (a sturdy stick of wood and a bar of iron into a hammer, for example); convert non-living matter in the spell's area of effect into harmless, light-based energy; grant a subject an entirely new form, complete with special abilities such as flight; dispel any and all illusions within the area of effect to transform it back to its natural state; convert non-living materials from one type to a dissimilar type — for example, water to steel or wood to fire; transform the direction of gravity in an area of effect; increase the size of a target by up to 100% or decrease it by 90%; grant a subject improved invisibility. Chaotic Reconstruction (Casting DC 30): items are transformed into pure chaos that may be refashioned under the control of the spellcaster — weight may be increased or decreased by up to 10% per level of the chaos mage, uniquely beneficial features can be added, and the composition of the object can be changed in utterly unnatural ways; at the moment of transformation the chaotic energies flare in a 20 ft. radius, causing 1d8 damage for every 20 pounds transformed, up to a total of 10d8, and no creature with Hit Dice greater than the current level of the caster may be affected by chaotic reconstruction. All modifiers are rounded down; creatures affected may move between size classes, as defined in Core Rulebook III, and suffer Armour Class and Base Attack Bonus modifiers in the process (the book's Chaotic Reconstruction table gives Height/Length, Weight, Strength and Hit Point modifiers for size changes from -90% to +100%). A target can only expand to fill the limits of its environment, and will only reduce until it meets the resistance of objects it contains.",
    note: ELEMENT_NOTE,
    source: `${CH} — Transformation Effect, pp. 24-26`,
    sourceUrl: CM_PATH,
  },
  {
    id: "ambush-tap",
    name: "Ambush Tap",
    ruleset: "core",
    school: "Chaos Magic",
    descriptors: [],
    levels: { "Chaos Mage": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "One subject touched",
    duration: "Instantaneous",
    savingThrow: `Will negates (${SAVE_DC}; movement effect element)`,
    spellResistance: "Yes",
    summary: "Sample spell (printed pp. 30-31), designed using the system in the Chaos Magic chapter: a minor movement effect element with target area of effect and touch range, at a total Casting DC of 10 as printed. The chaos mage uses a movement spell to simply place an ally where they need to be — moving a rogue into position to launch a sneak attack, the movement across the intervening space not causing him to generate attacks of opportunity — with a minimum movement of 25 feet as printed. The downside is that the moved subject may suffer damage from his chaos-induced travel (Chaos Movement: Fortitude save at DC 10 or 1d8 points of nonlethal damage for anyone other than a chaos mage). Print discrepancy, recorded not resolved: the sample's figures conflict with the Movement effect table (p. 22) and the book's Summary Sheet, which give the minor movement grade a Casting DC of 15 and a maximum distance of 20 ft. + 5 ft. per 2 caster levels; those tables govern the system.",
    note: "One of the book's two worked sample spells (pp. 30-31). Chaos spells have no spell level; the level shown is a filing placeholder and the Casting DC in the summary governs.",
    source: `${CH} — Sample Spells: Ambush Tap, pp. 30-31`,
    sourceUrl: CM_PATH,
  },
  {
    id: "push-wave",
    name: "Push Wave",
    ruleset: "core",
    school: "Chaos Magic",
    descriptors: [],
    levels: { "Chaos Mage": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "Burst centred on the point touched (enemies only)",
    duration: "Instantaneous",
    savingThrow: `Will negates (${SAVE_DC}; movement effect element)`,
    spellResistance: "Yes",
    summary: "Sample spell (printed p. 31), designed using the system in the Chaos Magic chapter: a minor movement effect element (base Casting DC 5 as printed) with a burst area centred on the caster (DC +5) enhanced to affect enemies only (DC +5), delivered with the touch range element — the chaos mage touches the ground at his feet and the spell radiates out from the point touched (DC +0) — for a total Casting DC of 15 as printed. The spell is designed to give the chaos mage a little room to breathe when a swarm of enemies attack: it pushes back all enemies in the area, moving them away from the caster (25 ft. + 5 ft. per caster level as printed), and as an added bonus anyone that is not a chaos mage will suffer nonlethal damage after being affected by the spell (Chaos Movement: Fortitude save at DC 10 or 1d8 points of nonlethal damage). Enemies who make their Will save are not moved. Print discrepancy, recorded not resolved: the sample's base DC of 5 and its movement distance conflict with the Movement effect table (p. 22) and the book's Summary Sheet, which give the minor movement grade a Casting DC of 15 and a maximum distance of 20 ft. + 5 ft. per 2 caster levels; those tables govern the system.",
    note: "One of the book's two worked sample spells (p. 31). Chaos spells have no spell level; the level shown is a filing placeholder and the Casting DC in the summary governs.",
    source: `${CH} — Sample Spells: Push Wave, p. 31`,
    sourceUrl: CM_PATH,
  },
];
