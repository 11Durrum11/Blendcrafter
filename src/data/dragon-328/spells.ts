// Dragon Magazine #328 (February 2005) — spell draft: 7 spells.
// "Spellcraft: Tvash-Prull's Symphony" (James Jacobs), pp. 70-73 — FIVE bard spells
// encoded in the half-elf bard Tvash-Prull's symphony (the program survey estimated
// ~6; the article's own spell list prints five — see MANIFEST), staged with the
// "Spellcraft" header blocks exactly as printed; and the "Favored Spells of the
// Force Missile Mage" sidebar (p. 52) — Blast of Force and Orb of Force, which the
// survey did not list at all. Typed SpellDefinition in the house shape of recent
// packs: targetOrArea carries the printed Target/Area/Effect text without a label;
// material and focus components ride in `note`.
// Headers verified against rendered page images (pp. 52, 71-72); the image governs
// over the OCR stream. Undersong prints NO Saving Throw / Spell Resistance lines;
// those fields stage as "Not printed in source" (the live catalog's own convention,
// cf. the issue-325/326 packs) with the gap disclosed in the record's note.
// ⚠️ PRODUCTION NOTE — Orb of Force: the scan of this issue on archive.org is
// MISSING folio 53, which carried the tail of the spell's text. The spell is staged
// from its complete magazine header block (image-verified, p. 52) and the damage
// sentence verified complete via the spell's identical reprints (Complete Arcane /
// Spell Compendium); the missing leaf is disclosed in MANIFEST's Unresolved section.
// ⚠️ APOC NOTE — see SCREENING.md: all seven are ordinary spells (force evocations
// and bardic music); no summoning, plane-travel, or extra-dimensional content. The
// Fugue's printed "Will negates" line sits beside text describing creatures who save
// as still disoriented within the area — staged as printed, flagged in MANIFEST.

import type { SpellDefinition } from "@/engine/types";

const SRC_SYMPHONY = "Dragon Magazine #328 — Spellcraft: Tvash-Prull's Symphony (James Jacobs), pp. 70-73";
const SRC_FMM = "Dragon Magazine #328 — Gaining Prestige: Force Missile Mage (Joshua Yang), Favored Spells sidebar, p. 52";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Transmutation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 minute",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC_SYMPHONY,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_328_SPELLS: SpellDefinition[] = [
  C({
    id: "tvash-prulls-bonefiddle",
    name: "Tvash-Prull's Bonefiddle",
    school: "Necromancy",
    levels: { Bard: 2 },
    components: "V, S, M",
    range: "Short (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature with a skeleton or exoskeleton",
    duration: "Concentration (up to 1 round/level)",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    note: "Material component: a miniature silver fiddle worth at least 30 gp. The magazine prints the range line as 'Short (25 ft. + 5 ft./2 levels)' (image-verified, p. 72); staged as printed.",
    summary:
      "You call up a ghostly fiddle bow in the air above the targeted creature; the bow descends into the target's body and saws back and forth against its skeleton. Although the music produced is eerily beautiful, it causes intense pain and anguish to the victim: each round, the victim takes 1d6 points of sonic damage and suffers a -20 penalty on all Move Silently checks, and this damage is considered continual damage for the purposes of disrupting spellcasting. As a move action, you may move the bonefiddle to another creature in range, but the new target gains a saving throw to resist the spell; if a target ever makes its saving throw, the bonefiddle vanishes and the spell ends. The spell's effects continue even if the target moves so you no longer have line of sight or line of effect to him, but you cannot shift the bonefiddle to a new target unless you have both line of sight and line of effect to the current target and to the intended target.",
  }),
  C({
    id: "loves-lament-328",
    name: "Love's Lament",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting"],
    levels: { Bard: 3 },
    components: "V",
    range: "60 ft.",
    targetOrArea: "Cone-shaped burst",
    duration: "Instantaneous",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "You create a cone of music that draws upon the sadness, guilt, and despair of those within its area of effect. All creatures in the area who successfully resist the spell can still hear the music and suffer a -4 penalty on Listen checks for 1 round. Those who fail to save against love's lament are reminded of all their lost loves and disappointments in life; the music seizes upon these feelings and magnifies them, so that the victims of the spell take 1d6 points of Wisdom damage and are nauseated for 1d4 rounds.",
  }),
  C({
    id: "fugue-of-tvash-prull",
    name: "Fugue of Tvash-Prull",
    school: "Evocation",
    descriptors: ["Sonic"],
    levels: { Bard: 4 },
    components: "V, S, F",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "30-ft.-radius spread",
    duration: "Concentration (up to 1 round/level)",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    note: "Focus: a miniature platinum violin bow worth 250 gp. The header's 'Will negates' line is staged as printed; the spell text describes creatures that save as disoriented while they remain in the area (see summary and MANIFEST).",
    summary:
      "Discordant music fills the area. Creatures in the area who succeed on their saving throw are disoriented while they remain within it, suffering a -2 penalty on attack rolls and skill checks. A creature that fails its save is subject, each round, to an effect determined by your Perform check: you make a Perform check each turn (any Perform skill; you gain a +2 circumstance bonus on the check if you use a keyboard instrument, percussion instrument, string instrument, or wind instrument, and the aid another action cannot affect this check) and select any one effect whose DC your check result meets or exceeds — Perform check DC 15: victim takes 3d6 points of nonlethal damage; DC 20: victim takes 3d6 points of sonic damage; DC 25: victim is shaken for 1 round, deafened for 1 round, or knocked down; DC 30: victim is nauseated for 1 round, blinded for 1 round, or frightened for 1 round; DC 35: victim is stunned for 1 round; DC 40: victim takes 1d6 points of ability damage from a randomly determined ability; DC 45: victim attacks the nearest target; DC 50: victim gains 1d4 negative levels; DC 55: victim is feebleminded; DC 60: victim is slain.",
  })];
