// Dragon Magazine #335 (September 2005) — spell draft: 4 spells.
// "Spellcraft: Songsabers of Waterdeep" (Mike Mearls and the Dragon
// staff), pp. 74-77 — the article prints FIVE spells (the program
// survey estimated ~6); four stage here and one goes to reference:
//  - Harmonic Void is an identical reprint of the live Complete
//    Scoundrel record (p. 99) — same header and mechanics — so it
//    digests in reference.md as a reprint note and does not stage.
//  - Animate Instrument DOES differ from the live Complete Scoundrel
//    record: the magazine prints its school as ABJURATION where the
//    book prints Transmutation (verified on the rendered page image,
//    magazine p. 74; the image governs). It therefore stages as a
//    -335 variant beside the book record, per the standing dedupe
//    rule for genuinely different printings — flagged in SCREENING.md.
// Typed SpellDefinition in the house shape of recent packs:
// targetOrArea carries the printed Target/Area/Effect text without a
// label.
// APOC screening: none of the four summons, calls, teleports, or opens
// a plane. Ever Armed is a conjuration (creation) spell that creates
// mundane armament in the caster's hands — under APOC's dead
// extra-dimensional magic it is staged as printed and flagged in
// SCREENING.md (creation effects are Shaun's standing call, cf. the
// Aquatic Fey Bloodline restriction note in feats-draft.ts). Its
// header prints "Resistance: Yes" (spell resistance applies) —
// unusual for a creation spell, carried as printed. Loresong's header
// prints no Saving Throw or Spell Resistance lines at all; the record
// carries the standard None/No for a Personal spell with the omission
// noted. See SCREENING.md.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #335 — Spellcraft: Songsabers of Waterdeep (Mike Mearls and the Dragon staff), pp. 74-77";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Transmutation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "One creature touched",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_335_SPELLS: SpellDefinition[] = [
  C({
    id: "ever-armed",
    name: "Ever Armed",
    school: "Conjuration",
    subschool: "Creation",
    levels: { Bard: 3 },
    range: "0 ft.",
    targetOrArea: "Rapier and dueling cloak",
    spellResistance: "Yes",
    note: "The created dueling cloak is the nonmagical item detailed in the article's Dueling Cloaks sidebar (see the pack's equipment-draft.ts). The header prints spell resistance as applying (\"Resistance: Yes\") — unusual for a creation spell; carried as printed. APOC: a conjuration (creation) effect under dead extra-dimensional magic — staged as printed, flagged in SCREENING.md.",
    summary:
      "Upon casting this spell a well-balanced +1 rapier and brightly colored dueling cloak (see the Dueling Cloaks sidebar) appear in your hands. For the duration of the spell you can use these armaments as normal equipment. The rapier created by this spell gains a +1 enhancement bonus for every three caster levels you possess above 7th, up to a maximum of +5 (thus, a 7th-level caster would call a +1 rapier into existence, while a 10th-level caster would summon a +2 rapier). The dueling cloak gains no additional enhancement bonus. Casting this spell does not grant you proficiency with either of these items if you do not already possess it. The rapier appears in your main hand and the dueling cloak in your off hand. If either item leaves your possession, it vanishes. At the end of the spell's duration both the rapier and the cloak vanish.",
  }),
  C({
    id: "loresong",
    name: "Loresong",
    school: "Divination",
    levels: { Bard: 1, "Sorcerer/Wizard": 1 },
    castingTime: "1 minute",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level",
    note: "The magazine header prints no Saving Throw or Spell Resistance lines; the record carries the standard None/No for a Personal spell. One of the New Spells of the Songsabers (article sidebar, p. 76).",
    summary:
      "You gain temporary mastery in a skill, even one that you have never studied before. When you complete this spell, select a single skill (other than Speak Language). You gain a +4 competence bonus on all checks with it, with an additional +1 bonus for every 2 caster levels, and you may use it untrained.",
  }),
  C({
    id: "tune-of-the-dancing-weapon",
    name: "Tune of the Dancing Weapon",
    levels: { Bard: 2, "Sorcerer/Wizard": 2 },
    targetOrArea: "Weapon touched",
    duration: "4 rounds",
    savingThrow: "Will negates (harmless, object)",
    spellResistance: "Yes (harmless, object)",
    summary:
      "You imbue a single weapon with the dancing special ability (described on page 224 of the Dungeon Master's Guide) for the duration of this spell. The affected weapon immediately begins attacking on its own. After 4 rounds, the weapon drops, as normal for the dancing special ability.",
  })];
