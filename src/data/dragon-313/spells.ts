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
    id: "empathy-313",
    name: "Empathy",
    ruleset: "core",
    school: "Divination",
    descriptors: ["Mind-Affecting"],
    levels: { "Bard": 1, "Sorcerer/Wizard": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One intelligent creature",
    duration: "1 min./level (D)",
    savingThrow: "Will negates",
    spellResistance: "No",
    summary: "Read a creature's emotions and their strength, gaining a +2 competence bonus on Charisma-based checks against it.",
    description: "You detect the target's emotions and the strength of those emotions (mild, moderate, or strong) — fear, hatred, love, anger, joy, despair, sorrow, desire, apathy, and so on. While you read its emotions, you gain a +2 competence bonus on all Charisma-based checks made against that creature.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "dispel-ward-313",
    name: "Dispel Ward",
    ruleset: "faerun",
    school: "Abjuration",
    descriptors: [],
    levels: { "Cleric": 2, "Sorcerer/Wizard": 2 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One warded object or area",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Dispel magic aimed only at wards: abjuration magic placed on objects or areas, with the dispel check capped at +5.",
    description: "This spell functions like dispel magic, except that it can be used only in the targeted or area version, it affects only abjuration magic placed upon objects or areas (such as arcane lock, explosive runes, fire trap, glyph of warding, and guards and wards), and the maximum bonus on the dispel level check is +5.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
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
  },
  {
    id: "sarcophagus-of-stone-313",
    name: "Sarcophagus of Stone",
    ruleset: "faerun",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Earth"],
    levels: { "Cleric": 6 },
    components: "V, S, M, DF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "1 Medium or smaller creature",
    duration: "Instantaneous",
    savingThrow: "Reflex negates",
    spellResistance: "No",
    summary: "Entomb a creature in an airtight stone coffin whose walls thicken with your caster level.",
    description: "You create an airtight stone coffin just large enough to hold the target. The stone is 1 inch thick per four caster levels, with hardness 8. The sarcophagus is sealed and impervious to air and gas; a creature trapped inside must hold its breath or suffocate (DMG p. 304), and creatures that do not need to breathe remain trapped regardless. Inside, the creature can attack the stone only with a natural weapon or a light melee weapon it was already wielding when trapped (it cannot draw or retrieve anything). A DC 26 Strength check breaks free; if allies break the sarcophagus from outside, any excess damage beyond what was needed to break it applies to the creature within. Material component: a fragment of a sarcophagus.",
    note: "Magazine printing: the stone's thickness scales with caster level (1 inch per four caster levels), which differs from the Spell Compendium reprint's fixed rule; the catalog's Spell Compendium record is a spell-list stub and both records live.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
];
