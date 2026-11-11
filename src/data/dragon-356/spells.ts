// Dragon Magazine #356 (June 2007) — spell draft: 2 spells.
// "Core Beliefs: Hextor" (Sean K. Reynolds), pp. 48-49 — the article's
// NEW DIVINE SPELLS section prints exactly two spells. (The program
// survey estimated "feats ~4" for this article; the article prints no
// feats at all — see MANIFEST.md survey corrections.)
// Both headers verified against rendered page images (magazine
// pp. 48-49); the image governs over the archive.org OCR stream — it
// confirms battlearms' Evocation school and full header, and the
// second spell's printed name (Hextor's Fiery Eyes; the OCR stream
// garbles it as "Maxtor's Fiery Eyes").
// Both printed headers are abbreviated: battlearms prints no Saving
// Throw / Spell Resistance lines (personal spell; carried as
// None / No with the omission disclosed on the record), and Hextor's
// fiery eyes prints only Level / Components / Targets / Duration,
// functioning "like command" — the command-derived lines are carried
// and disclosed on the record.
// APOC screening: neither spell summons, calls, teleports, or opens a
// plane. Hextor is a god outside the sealed crystal sphere; in APOC
// divine power is drawn, not granted — the spells stage as mechanics
// with that note on each record. See SCREENING.md.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #356 — Core Beliefs: Hextor (Sean K. Reynolds), pp. 48-49";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const HEXTOR_NOTE =
  "One of the two new divine spells of the Hextor faith. APOC note: Hextor is a deity outside the sealed crystal sphere; in APOC divine power is drawn, not granted — the spell stages as mechanics, its deity framing is reference (see the pack's reference.md).";

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

export const DRAGON_356_SPELLS: SpellDefinition[] = [
  C({
    id: "battlearms",
    name: "Battlearms",
    levels: { Cleric: 4, Blackguard: 4 },
    components: "V, S, DF",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level",
    savingThrow: "None",
    spellResistance: "No",
    note:
      "The printed header lists no Saving Throw or Spell Resistance lines (a personal spell); carried as None / No. " +
      HEXTOR_NOTE,
    summary:
      "Calling upon the power of Hextor, you imbue yourself with skill in combat and create extra arms. Your base attack bonus becomes equal to your character level (which might give you additional attacks), you gain 1 temporary hit point per caster level, and you grow a pair of extra arms from your torso. You may use these extra arms to make unarmed strikes or wield weapons. If you use these extra limbs to attack, attacks with your primary hand are at -6 and the three other hands are at -10; if you have the Two-Weapon Fighting feat, the penalty on attacks with all of your hands drops to -4. At 12th level, you grow an additional pair of arms. These extra arms cannot cast spells, and you cannot cast a spell and make an attack with these arms in the same round. On the round you cast this spell, each new arm may draw one of your weapons as a free action; on any later round you must use a move action to equip weapons in one or more of your extra hands. The arms are a neutral gray color and barely human; they cannot hold any items other than weapons, help climb or swim, or engage in any activity other than combat.",
  }),
  C({
    id: "hextors-fiery-eyes",
    name: "Hextor's Fiery Eyes",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Evil", "Language-Dependent", "Mind-Affecting"],
    levels: { Cleric: 5, Blackguard: 4 },
    components: "V, DF",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature each round",
    duration: "1 round/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    note:
      "The printed header is abbreviated — it lists only Level, Components, Targets, and Duration; Casting Time, Range, Saving Throw, and Spell Resistance are carried from command, which the spell text says it functions like. " +
      HEXTOR_NOTE,
    summary:
      "This spell functions like command, except you may affect one creature per round as a swift action and the activities continue beyond 1 round. At the start of each commanded creature's turn after the first, it gets another Will save to attempt to break free from the spell. You do not have to give each creature the same command (on the first round you can command a creature to approach, on the second round force a creature to fall prone, yet another to flee on the third round, and so on). The duration of the effect of this spell is limited by the overall spell duration, not by when an individual was affected: for example, if the spell has a 9-round duration and you affect a target on round 8, it only obeys for 1 round, at which point the spell ends and the compulsion no longer affects it. When you cast this spell your face distorts into a hideous gray visage with bulging red-rimmed eyes.",
  }),
];
