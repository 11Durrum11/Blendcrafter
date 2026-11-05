import type { FeatDefinition } from "@/engine/types";

// Relics (Alderac Entertainment Group, ©2003, d20
// System, 3.0-era) — the eight feats the book prints
// inside its artifact entries and their Legends,
// transcribed from Shaun's own scanned copy (read
// visually; the scan is image-only), 2026-11-04. The
// book has no feats chapter: each feat appears in the
// entry of the relic it belongs to, most of them in the
// entry's Legend, and several gate the use of that
// relic. Categories follow the types the book prints:
// feats printed (General) or [General] are "general";
// Nr'duk's Bull Rush, printed (General, Fighter), and
// Thunderfist, printed as a "(New Feat)" with no type,
// are attack techniques and are filed as "combat".
// Summaries are short mechanical paraphrases in our
// own words; no book prose is reproduced.

const REL = "Relics";
const REL_PATH = "/A POC DM related/New folder/Relics.pdf";

export const RELICS_FEATS: FeatDefinition[] = [
  {
    id: "metabolize-magic-potion",
    name: "Metabolize Magic Potion",
    category: "general",
    prerequisites: ["Con 17+", "Alchemy 5+", "Base Fortitude save +8 or higher"],
    benefitSummary: "Your body adapts to a particular magical potion, allowing you to manifest the potion's effects as a supernatural ability: your body learns to produce the chosen potion, magically generating it in your bloodstream, and once per day, as a standard action, you may use this ability, which has exactly the same effects as drinking the potion normally. A character with this feat suffers no ill effects from the blood of Geros.",
    modifiers: [],
    special: "To take this feat, the character must drink one dose of the chosen potion every day for six consecutive days before drinking three on the seventh day and taking the feat. You may take this feat multiple times, each time for a different potion.",
    source: `${REL}, p. 13`,
    sourceUrl: REL_PATH,
    ruleset: "core",
  },
  {
    id: "thunderfist",
    name: "Thunderfist",
    category: "combat",
    prerequisites: ["Str 13+", "Dex 13+", "Wis 13+", "Improved Unarmed Strike", "Lightning Reflexes", "Stunning Fist", "Base attack bonus +10 or higher"],
    benefitSummary: "Declare that you are using the feat before you make your attack roll: a foe damaged by your unarmed attack must make a Fortitude saving throw (DC 10 + one-half your level + Str modifier), in addition to dealing damage normally; if the defender fails his saving throw, he is stunned and deafened for 1d4 rounds. You can attempt a Thunderfist attack once per day for every five levels you have attained and no more than once per round.",
    modifiers: [],
    source: `${REL}, p. 44`,
    sourceUrl: REL_PATH,
    ruleset: "core",
  },
  {
    id: "lucid-dreamer",
    name: "Lucid Dreamer",
    category: "general",
    prerequisites: ["Wisdom 15+"],
    benefitSummary: "Your dreams are vivid and memorable, and you are in as much control of yourself while dreaming as you are while awake: when you dream, you remain in control of yourself and are aware that you are dreaming, and while dreaming you may think, learn, fight, converse, make decisions, explore, and interact with the dream world just as you would while awake. Only characters with the Lucid Dreamer feat may use the Heart of Dreams.",
    modifiers: [],
    source: `${REL}, p. 50`,
    sourceUrl: REL_PATH,
    ruleset: "core",
  },
  {
    id: "improved-scrying",
    name: "Improved Scrying",
    category: "general",
    prerequisites: ["Int 13+", "Wis 13+", "12 or more ranks in Scry", "Skill Focus (scry)"],
    benefitSummary: "You have great control over the magic sensors used in scrying: you can accurately view concealed items and objects within containers, and can move the focus of the sensor from the initial target to another target in the same location, allowing you to view multiple scenes with a single spell. The DC to spot your scrying sensors is 10 + your ranks in Scrying skill. Before the Mirror of the World can be mastered, the character must learn this feat. (Printed as a (General) feat.)",
    modifiers: [],
    source: `${REL}, p. 70`,
    sourceUrl: REL_PATH,
    ruleset: "core",
  },
  {
    id: "nrduks-bull-rush",
    name: "Nr'duk's Bull Rush",
    category: "combat",
    prerequisites: ["Str 17+", "Improved Bull Rush", "Power Attack", "Base Attack Bonus +6 or higher"],
    benefitSummary: "When making a bull rush attack, you do not provoke an attack of opportunity from the defender, and the chance of any other attack of opportunity missing and hitting the wrong target rises to 50%. If you beat the defender and move with him, you may make a normal unarmed attack, employ a light weapon to make a single attack at your highest base attack bonus, or attack with your headgear if you are wearing Nr'duk's Helm or a similar helm. (Printed as a (General, Fighter) feat.)",
    modifiers: [],
    source: `${REL}, p. 76`,
    sourceUrl: REL_PATH,
    ruleset: "core",
  },
  {
    id: "toggle-metamagic",
    name: "Toggle Metamagic",
    category: "general",
    prerequisites: ["Any metamagic feat", "5 ranks in Spellcraft"],
    benefitSummary: "You can choose not to apply the enhanced effects of a spell prepared with a metamagic feat: if you prepare a spell with a metamagic feat, you have the option to drop the effects of the metamagic when casting the spell, and dropping the metamagic feat does not reduce the level of the spell. To use any of the Rod of High Arcana's powers besides those that mimic spells, one must possess this feat. (Printed as a (General) feat.)",
    modifiers: [],
    source: `${REL}, p. 90`,
    sourceUrl: REL_PATH,
    ruleset: "core",
  },
  {
    id: "sword-punch",
    name: "Sword Punch",
    category: "general",
    prerequisites: ["Str 15+", "Combat Reflexes", "Power Attack", "Weapon Focus (bastard sword)", "Weapon Specialization (bastard sword)"],
    benefitSummary: "When wielding a bastard sword, you shove your blade deep into an opponent on a critical hit; by keeping the blade buried in your foe, you automatically inflict damage each round thereafter unless your opponent makes an opposed Strength check, and success causes the victim normal damage as the blade is pulled out. The victim is considered entangled as per a net when skewered by the blade. You may take no other actions aside from holding the blade in place in order to keep the victim skewered; if you break your hold, your blade comes free without dealing any additional damage. (Printed as a (General) feat.)",
    modifiers: [],
    source: `${REL}, p. 91`,
    sourceUrl: REL_PATH,
    ruleset: "core",
  },
  {
    id: "fae-binder",
    name: "Fae Binder",
    category: "general",
    prerequisites: ["Cha 13+", "Wis 13+", "Knowledge (fey) 8 ranks", "Speak Language (sylvan)", "Iron Will", "Skill Focus (bluff)"],
    benefitSummary: "You gain a +2 competence bonus to all saves against spell and spell-like effects used by fey creatures, which increases to a +4 competence bonus against fey spells and spell-like effects of the enchantment or illusion schools. You can also attempt to temporarily bind a fey creature to your will, using a combination of riddles, clever wordplay, and flattery to trick it into swearing an oath of service: spend a minimum of 10 + the fey's Charisma bonus minus your Charisma bonus in rounds (minimum 1 round) in uninterrupted conversation with the target — a binding cannot be attempted in an area of great distraction or imminent danger — then make a Bluff skill check opposed by the fey's Sense Motive skill check; success means that you have bound the fey, and it must perform a single task for you as per the spell lesser geas. You may not use this ability against fey whose HD or CR are greater than your total level, and you may only command one fey per month with this feat. Before a wearer can use any of the Sidhe Cloak's powers, he must possess this feat. (Printed as a [General] feat.)",
    modifiers: [],
    source: `${REL}, p. 99`,
    sourceUrl: REL_PATH,
    ruleset: "core",
  },
];
