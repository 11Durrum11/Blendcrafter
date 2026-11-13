// Dragon Magazine #322 (August 2004) — spells.
// Transcribed from the magazine text on archive.org
// (DragonMagazine322_djvu.txt) and verified against the page
// images (magazine pp. 67, 72–74), which govern wherever the OCR
// layer garbles numbers.
//
// Eleven spells stage:
//   * "Patterns of Shadow and Light" by Jason Nelson (pp. 70–74)
//     prints nine: CONE OF DIMNESS, EBON EYES, LIGHTWALL, LUCENT
//     LANCE, LUMINOUS GAZE, RADIANT ASSAULT, RAINBOW BEAM, RAINBOW
//     BLAST, and SHADOW PHASE. Eight of the nine were reprinted in
//     the Spell Compendium, and every reprint differs from the
//     magazine version (levels, class lists, or redesigned
//     effects — noted at the end of each summary). The catalog
//     already holds the Spell Compendium versions (fan-index
//     records in spells/spell-compendium-*.ts), so per the
//     issue-318/320 rule the magazine versions stage suffixed
//     -322 and both live. LIGHTWALL has no catalog record and
//     stages unsuffixed.
//   * The "Spells of Shadow" sidebar in "Lord of Darkness"
//     (p. 67) prints two more: SHADOW CURSE (no catalog record;
//     unsuffixed) and SHADOW SHIELD — suffixed -322 because the
//     plain id is already held by the Races of Faerûn regional
//     feat of the same name.
//
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

import type { SpellDefinition } from "@/engine/types";

const DM322_PATTERNS = "Dragon Magazine #322 — Patterns of Shadow and Light";
const DM322_SHADOW = "Dragon Magazine #322 — Spells of Shadow (Lord of Darkness)";
const URL322 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine322_djvu.txt";

export const DRAGON_322_SPELLS: SpellDefinition[] = [
  {
    id: "lightwall",
    name: "Lightwall",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Light"],
    levels: { Cleric: 4, "Sorcerer/Wizard": 4 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea:
      "Wall whose area is up to one 10-ft. square/level or a sphere or hemisphere with a radius of up to 1 ft./level",
    duration: "1 min./level (D)",
    savingThrow: "None",
    spellResistance: "Yes; see text",
    summary:
      "A wall of dazzling yellow-white light comes into being at any point within range. A lightwall sheds light equivalent to a daylight spell. The wall is opaque to all creatures except the caster, and so grants total concealment to any creature behind it; the caster can see through it without difficulty. A lightwall has no physical substance and does not otherwise hinder attacks, movement, or spells passing through it. A creature that passes through a lightwall becomes dazzled for the duration of the spell (a dazzled creature suffers a −1 penalty on attack rolls, Search checks, and Spot checks); spell resistance applies when passing through the wall, and sightless creatures and those already dazzled are not affected by passing through it. Lightwall counters or dispels any darkness spell of equal or lower level, and any darkness spell of equal or higher level counters or dispels it. Material component: a pinch of powdered sunstone.",
    source: DM322_PATTERNS,
    sourceUrl: URL322,
  },
  {
    id: "luminous-gaze-322",
    name: "Luminous Gaze",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Light"],
    levels: { "Sorcerer/Wizard": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level",
    savingThrow: "Fortitude negates; see text",
    spellResistance: "No",
    summary:
      "Your eyes glow with an unearthly radiance, granting you a dazzling gaze attack. The glow from your eyes provides light as per the light spell. Each creature within range of the light (20-foot diameter) must attempt a Fortitude saving throw each round at the beginning of its turn; failure indicates the creature is dazzled for the remainder of the spell's duration (a dazzled creature suffers a −1 penalty on attack rolls, Search checks, and Spot checks). In addition, you can concentrate your gaze upon a single creature within range as an attack action, forcing the target of the concentrated gaze to succeed at a Fortitude save or become dazzled for the remainder of the spell's duration.",
    source: DM322_PATTERNS,
    sourceUrl: URL322,
  },
  {
    id: "radiant-assault-322",
    name: "Radiant Assault",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Light"],
    levels: { Cleric: 7, "Sorcerer/Wizard": 7 },
    components: "V, S, F",
    castingTime: "1 standard action",
    range: "Long (400 ft. + 40 ft./level)",
    targetOrArea: "20-ft.-radius burst",
    duration: "Instantaneous",
    savingThrow: "Will partial",
    spellResistance: "Yes",
    summary:
      "A multitude of rainbow-colored beams erupts in every direction within the area. The kaleidoscopic burst inflicts 1d6 points of nonlethal damage per caster level (maximum 15d6) and dazes all creatures within the burst for 1d6 rounds; dazed creatures can take no actions but suffer no penalties when being attacked. Those who succeed at a Will save suffer only half the normal damage and are dazzled for 1d6 rounds instead (a dazzled creature suffers a −1 penalty on attack rolls, Search checks, and Spot checks). Undead within the area of effect suffer normal (lethal) damage rather than nonlethal damage and are automatically dazzled (never dazed) regardless of whether or not they succeed at their saving throw. Focus: an eye from any outsider with 4 or more Hit Dice.",
    source: DM322_PATTERNS,
    sourceUrl: URL322,
  },
  {
    id: "rainbow-blast-322",
    name: "Rainbow Blast",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Light"],
    levels: { "Sorcerer/Wizard": 3 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "120 ft.",
    targetOrArea: "120-ft. line",
    duration: "Instantaneous",
    savingThrow: "Reflex half",
    spellResistance: "Yes",
    summary:
      "A wide-spectrum blast of radiant energy composed of all five energy types. Rainbow blast deals 1d6 points of damage from each of the five energy types (acid, cold, electricity, fire, and sonic), for a total of 5d6 points of damage. Creatures apply energy resistance separately to each type of damage. Creatures within the area of effect who succeed at a Reflex save suffer only half damage. Material component: a small clear gem or crystal prism worth at least 50 gp.",
    source: DM322_PATTERNS,
    sourceUrl: URL322,
  },
  {
    id: "shadow-curse",
    name: "Shadow Curse",
    ruleset: "core",
    school: "Necromancy",
    descriptors: ["Darkness"],
    levels: { "Sorcerer/Wizard": 4 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "Permanent",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "The target's natural healing process is halted by an infusion of shadow essence: upon casting this spell, the next creature the caster touches is afflicted with the shadow curse. Those so cursed suffer no immediate noticeable effects from the spell but soon find they no longer heal as normal — creatures affected by this spell can only heal naturally or be affected by magic healing while in an area of bright illumination; spells that heal damage fail if cast upon the creature in an area of shadowy illumination or darkness, and natural healing does not occur while in such areas. This curse can be removed by the break enchantment or remove curse spells.",
    source: DM322_SHADOW,
    sourceUrl: URL322,
  },
  {
    id: "shadow-shield-322",
    name: "Shadow Shield",
    ruleset: "core",
    school: "Necromancy",
    descriptors: ["Darkness"],
    levels: { "Sorcerer/Wizard": 6 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level",
    savingThrow: "Will negates (see text)",
    spellResistance: "Yes (see text)",
    summary:
      "You are surrounded by a smoky wreath of flickering darkness that blinds any creature that attacks you in melee. Any creature that strikes you with a natural weapon, an unarmed attack, or a melee weapon deals normal damage, but must make a Will save or be blinded for a number of rounds equal to your caster level. If the attacker has spell resistance, it applies to this effect. Material component: a piece of black paper.",
    source: DM322_SHADOW,
    sourceUrl: URL322,
  }];
