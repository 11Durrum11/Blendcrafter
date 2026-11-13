import type { SpellDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #313 pack (library-staging/packs/dragon-magazine/issue-313)
// The issue's four spells:
//   * empathy, from the "New Spell" sidebar of "Strange Bedfellows"
//     (p. 93) — the spell the half-doppelganger and half-rakshasa
//     templates use as a spell-like ability.
//   * dispel ward, incarnation of Set, and sarcophagus of stone,
//     from "Faiths of Faerûn: Elder Serpents of Set" (Set's Spells).
//     These three carry ruleset "faerun" (the issue-312 convention
//     for the Faiths of Faerûn articles).
// Transcribed from the magazine text on archive.org
// (DragonMagazine313_djvu.txt). Summaries and descriptions are
// mechanical paraphrases in our own words; stat lines are the
// magazine's own.
//
// Collisions and adjudications (see MANIFEST.md):
//   * empathy collides with the Expanded Psionics Handbook power of
//     the same name in the catalog and is suffixed -313.
//   * dispel ward collides with the Spell Compendium's dispel ward
//     (Cleric 1 / Sorcerer/Wizard 1), a different printing of a
//     different-strength spell; the magazine's 2nd-level version
//     ships as dispel-ward-313 and both records live.
//   * sarcophagus of stone collides with the Spell Compendium's
//     record, which is a spell-list stub ("Not printed in source"
//     fields). The magazine printing is a full text whose stone
//     thickness scales with caster level, differing from the
//     reprint; it ships as sarcophagus-of-stone-313. Its level line
//     is garbled in the magazine OCR ("Or 6"); Cleric 6 is confirmed
//     by the Spell Compendium spell list.

const DM313 = "Dragon Magazine #313";
const DM313_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine313_djvu.txt";

export const DRAGON_313_SPELLS: SpellDefinition[] = [
  {
    id: "incarnation-of-set",
    name: "Incarnation of Set",
    ruleset: "faerun",
    school: "Transmutation",
    descriptors: [],
    levels: { "Cleric": 5 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Assume the form of an animal or vermin sacred to Set, gaining its physical scores and extraordinary attacks.",
    description: "This spell functions like alter self, except that you assume the form of any nonunique animal or vermin (Tiny to Huge) sacred to Set: bears (black and brown), boars, crocodiles, donkeys, hippopotami, hyenas (treat dire hyenas as dire wolves), jackals (treat as dogs), saluki (treat as riding dogs with Run instead of Alertness), snakes (constrictors and vipers), and monstrous scorpions, in normal, giant, and dire varieties. The form's Hit Dice may not exceed your caster level (or the subject's Hit Dice, if lower), to a maximum of 15 HD. You gain the form's type in place of your own, its Strength, Dexterity, and Constitution scores, and all its extraordinary special attacks (including a poisonous bite or sting) — but not its extraordinary special qualities or any supernatural or spell-like abilities. On changing you regain hit points as if you had rested for a night; changing back does not heal you again.",
    source: DM313,
    sourceUrl: DM313_PATH,
  }];
