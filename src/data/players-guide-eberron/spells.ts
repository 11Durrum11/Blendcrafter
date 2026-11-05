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
  // The book's two psionic powers (p. 149), built at the psionics
  // integration (2026-11-04) once the app modeled powers — they are
  // SpellDefinition records in the powers format: discipline as
  // school with the "(psionic power)" tag, Display in components,
  // power points in the summary. Blade of Light is Psychoportation
  // by the book's filing but never leaves the Material Plane, so it
  // stands under Shaun's boundary ruling.
  {
    id: "blade-of-light",
    name: "Blade of Light",
    ruleset: "eberron",
    school: "Psychoportation (psionic power)",
    descriptors: [],
    levels: { "Psychic Warrior": 4 },
    components: "Display: Material",
    castingTime: "1 swift action",
    range: "Touch",
    targetOrArea: "Weapon touched",
    duration: "1 round/level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Surrounds one weapon with a softly glowing energy field anathema to fiends: when the weapon strikes an evil extraplanar creature, it deals an extra 2d6 points of damage; against creatures possessed by outsiders (such as the Inspired), the extra damage is 2d6 points of nonlethal damage instead. Power Points: 7.",
    description: "The psychic warriors of the kalashtar, dedicated to battling the Dreaming Dark, developed this power to help in this struggle, but it's equally effective when dealing with creatures of Xoriat or demons from Shavarath. This power surrounds one weapon with a softly glowing energy field that is anathema to fiends. When the weapon strikes an evil extraplanar creature, it deals an extra 2d6 points of damage. This power has a weaker effect on creatures that are merely possessed by outsiders (such as the Inspired); in such cases, the weapon deals an extra 2d6 points of nonlethal damage.",
    source: `${PG}, p. 149`,
    sourceUrl: PG_PATH,
  },
  {
    id: "dissonant-touch",
    name: "Dissonant Touch",
    ruleset: "eberron",
    school: "Telepathy (psionic power)",
    descriptors: ["Mind-Affecting"],
    levels: { "Psychic Warrior": 2, Telepath: 2 },
    components: "Display: Visual",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "A successful melee touch attack makes the victim take a 1d6 penalty to either Strength or Dexterity (your choice, made before the attack); the score cannot drop below 0, and repeated uses apply only the greatest penalty. Power Points: 3. Augment: For every 2 additional power points you spend, the penalty increases by 1 point. If you spend an additional 6 power points, the penalty applies to both Strength and Dexterity.",
    description: "The assassins of the Dreaming Dark enjoy toying with their prey. This psionic attack disrupts the nervous system of the victim, causing intense weakness or disorientation for the duration of the effect. When you use dissonant touch, a successful melee touch attack causes your victim to take a penalty of 1d6 points to either Strength or Dexterity; you choose which before you make the attack. The affected ability score cannot be reduced below 0, and if you use this ability more than once on the same victim, only the greatest penalty is applied. Augment: For every 2 additional power points you spend, the penalty is increased by 1 point. If you spend an additional 6 power points, the penalty applies to both Strength and Dexterity.",
    source: `${PG}, p. 149`,
    sourceUrl: PG_PATH,
  },
];
