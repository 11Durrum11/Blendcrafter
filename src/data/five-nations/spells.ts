import type { SpellDefinition } from "@/engine/types";

// Five Nations (Eberron, Wizards of the Coast, 2005):
// the book prints exactly three new spells, all in the
// "Thrane Spells" section (pp. 154-155) — spells that
// first appeared in Thrane during the Last War, two of
// them restricted to servants of the Silver Flame.
// Transcribed from Shaun's own copy (text-extracted and
// checked against the printed page), 2026-11-05. The
// book prints no other new spells. Summaries are short
// mechanical paraphrases in our own words; no book prose
// is reproduced. Two transcription notes: the printed
// block for flamebound weapon gives no school line (a
// printing omission — its school is recorded as
// "Unspecified"), and the printed block for flamebound
// symbol omits the Saving Throw and Spell Resistance
// lines; those fields record the save the spell's own
// text specifies for the undead it damages.

const FN_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Five Nations.pdf";

export const FIVE_NATIONS_SPELLS: SpellDefinition[] = [
  {
    id: "flamebound-symbol",
    name: "Flamebound Symbol",
    ruleset: "eberron",
    school: "Transmutation",
    descriptors: [],
    levels: {
      "Cleric": 3,
      "Paladin": 3,
    "Paladin of Freedom": 3},
    components: "V, S, DF",
    castingTime: "1 swift action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round",
    savingThrow: "Fortitude half (see text)",
    spellResistance: "See text",
    summary: "Devised by clerics of the Silver Flame to dispose of Karrnathi undead legions. If you cast this spell before attempting to turn undead, your turn undead ability changes: instead of being turned or destroyed, all undead within 60 feet take 1d6 points of sacred damage per caster level. A successful Fortitude save (DC 10 + one-half your cleric or paladin level + your Wis modifier) reduces the damage by half. Undead destroyed by the damage are utterly consumed in silvery fire, leaving nothing behind except their possessions. Special: Only clerics and paladins of the Silver Flame can cast this spell.",
    source: "Five Nations, p. 154",
    sourceUrl: FN_PATH,
  },
  {
    id: "flamebound-weapon",
    name: "Flamebound Weapon",
    ruleset: "eberron",
    school: "Unspecified",
    descriptors: [],
    levels: {
      "Paladin": 1,
    "Paladin of Freedom": 1},
    components: "V, S",
    castingTime: "1 swift action",
    range: "Touch",
    targetOrArea: "Weapon touched",
    duration: "1 min./level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "You imbue a weapon you hold with the power of the Silver Flame. The weapon becomes sheathed in a silvery nimbus of light and deals an additional 1d6 points of sacred damage upon striking an evil creature. Special: Only paladins of the Silver Flame can cast this spell. (The book prints no school line for this spell.)",
    source: "Five Nations, p. 155",
    sourceUrl: FN_PATH,
  },
  {
    id: "whispering-flame",
    name: "Whispering Flame",
    ruleset: "eberron",
    school: "Divination",
    descriptors: [],
    levels: {
      "Cleric": 2,
      "Druid": 2,
    },
    components: "V, S, M, DF",
    castingTime: "1 standard action",
    range: "Touch; see text",
    targetOrArea: "Two candles",
    duration: "1 day/level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "This spell is placed on two candles, which the caster must hold at the time of casting. Anything spoken into the flame of one candle can be heard issuing from the flame of the other; the candles transmit and receive over any distance, provided they are both on the same plane of existence, and both candles must be lit for the transfer to occur. Although the effect can last for days, a whispering flame candle can burn only for a total of 8 hours before it melts away and loses its power. A single candle cannot have more than one whispering flame spell cast on it. Material component: two candles.",
    source: "Five Nations, p. 155",
    sourceUrl: FN_PATH,
  },
];
