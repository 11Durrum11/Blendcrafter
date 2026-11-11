// Dragon Magazine #340 (February 2006) — spell draft: 8 spells.
// SIX spells of the Twilight Codex — "Spellcraft" (Greg Marks),
// pp. 72-75: guiding star, lunacy, moonbridge, motes of moonlight,
// sever ties of the moon, shooting star.
// TWO spells from "Eye of the Night: The Moon and Its Role in D&D"
// (Craig Campbell), "Magic of the Moon," p. 57: moon's change and
// silvered weapon.
// Typed SpellDefinition in the house shape of recent packs: targetOrArea
// carries the printed Target/Area/Effect text without a label; material
// components ride in `note`.
// Every header was verified against rendered page images (magazine
// pp. 57, 73-75); the image governs over the OCR stream — it confirms
// shooting star's 2d6 fire damage, moonbridge's printed [Good, Light]
// descriptors, and that guiding star prints no Saving Throw or Spell
// Resistance lines at all (recorded as None/No).
// NOT STAGED: detect emotions (Emotion domain, 1st level) and detect
// night creature (referenced by the paladin of light substitution
// level, "see Sun Spells") — their full texts stand on magazine
// pp. 49-50, which are MISSING from the archive.org scan (the scan
// jumps from p. 48 to p. 51). They are digested from their printed
// one-line descriptions in reference.md and flagged in MANIFEST.md /
// SCREENING.md; they stage only if a complete scan surfaces.
// ID NOTE: silvered weapon carries the id "silvered-weapon-340" — the
// live spells barrel already holds a different "silvered-weapon" (the
// Book of Exalted Deeds paladin spell); the two are distinct spells that
// share a name, and the issue-suffixed id follows the house precedent
// (cf. issue #331's fauchard-331 / duom-331).
// APOC screening: none of the eight summons, calls, or opens a plane.
// Several require the visible sun/moon/stars the Fog of Life denies —
// staged as printed and flagged in SCREENING.md, never rewritten.

import type { SpellDefinition } from "@/engine/types";

const SRC_CODEX = "Dragon Magazine #340 — Spellcraft: The Twilight Codex (Greg Marks), pp. 72-75";
const SRC_MOON = "Dragon Magazine #340 — Eye of the Night: The Moon and Its Role in D&D (Craig Campbell), p. 57";
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
    source: SRC_CODEX,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_340_SPELLS: SpellDefinition[] = [
  // ---- Spellcraft: The Twilight Codex (6) ----
  C({
    id: "guiding-star",
    name: "Guiding Star",
    school: "Divination",
    levels: { Druid: 1, "Sorcerer/Wizard": 1 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 minute/level",
    summary:
      "This spell calls an insubstantial mote of starlight, which descends from the sky and orbits around your head. The guiding star sheds light equal to a candle and can be commanded to lead you toward any place you've previously visited. Once ordered to find a location, the guiding star stops orbiting and points like a compass in the direction of the location named. The star makes no adjustments for barriers or obstructions, hovering inches from you in the direction of the location it seeks. The guiding star merely orbits your head if not commanded to proceed to a location, if you have never been to the desired location, or if the location named is not on the same plane of existence. (As printed, the spell has no Saving Throw or Spell Resistance lines.)",
  }),
  C({
    id: "lunacy",
    name: "Lunacy",
    school: "Enchantment (Compulsion)",
    descriptors: ["Mind-Affecting"],
    levels: { Druid: 6, "Sorcerer/Wizard": 6 },
    components: "V, S, M",
    targetOrArea: "One living creature",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "You curse the target with a form of madness tied to a moon. On the night of a full moon, a target affected by this spell is unable to independently determine what to do in a manner similar to the confusion spell. Roll once on the following chart each time the target is affected by the full moon (a time occurring once a month as determined by the DM); the target behaves accordingly for that entire night whether he can see the moon or not. d%: 01-5 act normally; 6-15 delusion (spends the night talking to inanimate objects, refusing to move); 16-25 fixation (moves to a random location within sight and refuses to move from that spot); 26-35 flee (moves in a random direction at top speed all night); 36-50 schizophrenia (alignment changes to its opposite; neutral creatures roll randomly); 51-65 catatonia (passes out and cannot be awakened by any means); 66-75 rage (randomly destroys unattended objects within sight); 76-85 murderous (attacks the nearest creature); 86-95 suicidal (once an hour, Will save or attempt to kill himself in the quickest way possible; if armed, attacks himself as a full-round action, automatically hitting and dealing damage as a critical hit); 96-100 blackout (the DM takes control of the victim for the duration of the night). Upon casting this spell, you must designate a task that will end the spell. The task cannot force the victim to commit suicide, although it might be extremely dangerous for the victim. Upon being affected, the victim immediately knows how to lift the curse. Only the completion of this task or a break enchantment, miracle, or wish spell can end the spell's effect.",
    note: "Material component: three drops of blood from a natural lycanthrope.",
  }),
  C({
    id: "moonbridge",
    name: "Moonbridge",
    school: "Transmutation",
    descriptors: ["Good", "Light"],
    levels: { Cleric: 3, Druid: 3 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Bridge, 5 ft. wide and up to 10 ft./level long",
    duration: "1 round/level (D)",
    summary:
      "This spell transforms a shaft of moonlight, whether naturally occurring or magically created (such as by the spell motes of moonlight), into a translucent bridge capable of supporting you and creatures of good alignment. Creatures of neutral alignment can also walk upon a moonbridge as long as they stay in direct contact with you (losing contact with you causes them to fall). Evil creatures find moonbridges as insubstantial as moonlight. In areas bathed in moonlight with no distinctive shafts of light, such as in a moonlit field or other open area exposed to the moon (determined by the DM), the caster can create a moonbridge from any location within range. A moonbridge is always 5 feet wide and must be at least 20 feet long, although you can extend it to a length of up to 10 feet per caster level. This bridge can run in any horizontal direction or be angled in a gentle slope equal to 1/4th of the bridge's length (rounded down to the nearest 5-foot increment), as long as the entire length of the moonbridge is bathed in moonlight without interruption.",
    note: "Material component: a vial of pure water bathed in the light of the full moon for at least 6 hours.",
  }),
  C({
    id: "motes-of-moonlight",
    name: "Motes of Moonlight",
    descriptors: ["Light"],
    levels: { Cleric: 1, Druid: 1 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Beam of light",
    duration: "1 hour/level (D)",
    summary:
      "This spell creates a beam of silvery light in any direction you point. The beam extends from your position to a point within range that you have line of sight to. The light illuminates a 5-foot-wide line with bright illumination, while the area within 5 feet of the beam is considered to be in shadowy illumination. Once cast, the beam hangs in place for the duration of the spell, even if you move. You can dismiss the light at any time but cannot move it once cast.",
  }),
  C({
    id: "sever-ties-of-the-moon",
    name: "Sever Ties of the Moon",
    school: "Transmutation",
    levels: { Cleric: 3, Druid: 3, "Sorcerer/Wizard": 3 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One lycanthrope",
    duration: "1 minute/level (D)",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "You sever a lycanthrope's tie to the moon, giving it increased control over its shape but weakening it in its non-humanoid forms. While under the effects of this spell the target lycanthrope gains a +10 bonus on all attempts to Control Shape (see the Control Shape skill, Monster Manual) but, for the duration of the spell, becomes fatigued while in its hybrid or animal form. If the target is fatigued by this spell, changing to its humanoid form removes that condition, although the fatigue returns if it retakes either its hybrid or animal form. This spell does not cause creatures that are already fatigued to become exhausted. (The magazine text calls Control Shape a feat on page 303 of the Monster Manual; in the 3.5 Monster Manual it is a skill — staged at 3.5 standard, original noted here.)",
  }),
  C({
    id: "shooting-star",
    name: "Shooting Star",
    descriptors: ["Fire"],
    levels: { Druid: 3, "Sorcerer/Wizard": 2 },
    components: "V, S, M",
    targetOrArea: "One or more shooting stars",
    savingThrow: "Reflex half",
    spellResistance: "Yes",
    summary:
      "You call down stars from the sky to strike your enemies. When this spell is cast, one or more burning rocks fall from the heavens, each precisely striking those you have targeted. Each target must make a Reflex save or take 2d6 points of fire damage. In addition, creatures of size Large or smaller who fail this save are knocked prone. Those who succeed at this save remain standing and take only half of the fire damage. You can call down one shooting star for every three levels beyond 3rd (to a maximum of six at 18th level). Additional shooting stars may be directed at separate targets within the range of the spell, no two of which may be more than 30 feet apart. A target can only be affected once per casting of this spell. This spell does not function indoors, underground, or in any other place the sky is not visible.",
    note: "Material component: a chunk of white rock and a small glass lens.",
  }),
  // ---- Eye of the Night: Magic of the Moon (2) ----
  C({
    id: "moons-change",
    name: "Moon's Change",
    school: "Transmutation",
    levels: { Druid: 3, "Sorcerer/Wizard": 3 },
    components: "V, S, M",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "1 round/level",
    savingThrow: "Will negates",
    source: SRC_MOON,
    summary:
      "The touched creature's physical abilities wax and wane like the moon: it gains an enhancement bonus to Strength, Dexterity, and Constitution that builds and ebbs over the spell's duration. The bonus is +2 in the first round, +4 in the second round, and +6 in each subsequent round until the spell's final two rounds, when it falls back to +4 in the second-to-last round and +2 in the last round.",
    note: "Material component: one drop of blood of a monster with the shapechanger subtype.",
  }),
  C({
    id: "silvered-weapon-340",
    name: "Silvered Weapon",
    school: "Transmutation",
    levels: { Cleric: 1, Ranger: 1, "Sorcerer/Wizard": 1 },
    components: "V, S, DF",
    range: "Touch",
    targetOrArea: "Weapon touched",
    duration: "1 min./level",
    savingThrow: "Will negates (harmless, object)",
    spellResistance: "Yes (harmless, object)",
    source: SRC_MOON,
    summary:
      "The weapon touched counts as silver for the purpose of overcoming damage reduction, and deals an extra 1d4 points of damage to creatures with the shapechanger subtype. Silvered weapon cannot be cast on a natural weapon.",
  }),
];
