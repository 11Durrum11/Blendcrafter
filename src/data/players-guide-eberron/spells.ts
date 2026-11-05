import type { SpellDefinition } from "@/engine/types";

// Player's Guide to Eberron (Wizards of the Coast, 2006) —
// spells. The book prints only four new spells: create
// spirit idol (p. 21, the Aereni deathless rite), unity
// wine (p. 73, a Talenta halfling rite), and price of
// loyalty and sentinel's watch (p. 149, in the villainous
// organizations chapter). The same page also prints two
// psionic powers — blade of light and dissonant touch —
// which are NOT built here: the app does not model psionic
// powers (the Expanded Psionics pack precedent); both are
// documented in full in the extraction report instead.
// Transcribed from Shaun's own copy (text-extracted,
// 2026-11-05). Summaries are short mechanical paraphrases
// in our own words; no book prose is reproduced.

const PG = "Player's Guide to Eberron";
const PG_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Player's Guide to Eberron.pdf";

export const PLAYERS_GUIDE_TO_EBERRON_SPELLS: SpellDefinition[] = [
  {
    id: "create-spirit-idol",
    name: "Create Spirit Idol",
    ruleset: "eberron",
    school: "Necromancy",
    descriptors: [],
    levels: { Cleric: 4 },
    components: "V, S, M, XP",
    castingTime: "1 hour",
    range: "Touch",
    targetOrArea: "Corpse touched",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Binds a willing spirit to its corpse, preventing its passage to Dolurrh and preserving body and spirit. A speak with dead spell cast by a caster whose alignment matches the spirit's awakens the idol to consciousness for 1 minute per caster level of the speak with dead effect (replacing that spell's normal effect): the spirit perceives its surroundings and can speak any languages it knew in life, answering typically briefly, cryptically, and repetitively, but never intentionally falsely. Because body and spirit are preserved, the idol can later be restored to life by raise dead or similar magic even after the usual time limit. Destroying or dismembering the body breaks the effect and the soul passes on to Dolurrh. Material component: a clay pot of grave dirt and another of pure water. XP cost: 100 XP.",
    source: `${PG}, p. 21`,
    sourceUrl: PG_PATH,
  },
  {
    id: "unity-wine",
    name: "Unity Wine",
    ruleset: "eberron",
    school: "Transmutation",
    descriptors: [],
    levels: { Cleric: 1 },
    components: "V, S, DF",
    castingTime: "1 minute",
    range: "Touch",
    targetOrArea: "One pint of wine in a touched container",
    duration: "1 hour/level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary: "Enchants a pint of wine so that up to four living creatures who drink from it (drinking takes at least a standard action) gain a +1 morale bonus on skill checks for the duration.",
    source: `${PG}, p. 73`,
    sourceUrl: PG_PATH,
  },
  {
    id: "price-of-loyalty",
    name: "Price of Loyalty",
    ruleset: "eberron",
    school: "Enchantment",
    subschool: "Charm",
    descriptors: ["Mind-Affecting"],
    levels: { Sorcerer: 2, Wizard: 2 },
    components: "F",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "One humanoid",
    duration: "1 hour/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary: "The effects of this spell are identical to charm person, with three differences: its range is limited to touch; the target must accept your offer of a platinum piece (the spell's focus) for the spell to take effect; and the enchantment is completely subtle — the spell requires no gestures or incantations and shows no sign of magic, so the target never knows a spell was cast whether or not he succeeds on his saving throw. The effect can still be discerned by detect magic and similar spells. Focus: one platinum piece.",
    source: `${PG}, p. 149`,
    sourceUrl: PG_PATH,
  },
  {
    id: "sentinels-watch",
    name: "Sentinel's Watch",
    ruleset: "eberron",
    school: "Divination",
    descriptors: [],
    levels: { Sorcerer: 2, Wizard: 2 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "One humanoid",
    duration: "1 hour/level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes",
    summary: "Wards the subject against deception: the subject receives a +5 competence bonus on Spot checks to penetrate any form of disguise or illusion, on Sense Motive checks made to oppose Bluff checks, and on Will saves to resist enchantment or illusion effects. If the subject bears the Mark of Sentinel or the Mark of Detection, these bonuses increase to +6. Material component: a piece of quartz, which is touched to the eyes of the subject.",
    source: `${PG}, p. 149`,
    sourceUrl: PG_PATH,
  },
];
