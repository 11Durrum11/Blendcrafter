// Dragon Magazine #318 (April 2004) — spells.
// Transcribed from the magazine text on archive.org
// (DragonMagazine318_djvu.txt).
//
// All eight records come from "Children of Ka" (lizardfolk and
// dinosaur material). Each was compared against its Spell
// Compendium reprint: every reprint differs from the magazine
// version (levels, effects, or both), so the magazine versions
// stage suffixed -318 where the base id is taken; Swamp Stride
// has no Spell Compendium record and stages unsuffixed.
// The Oriental Adventures Update's one fully printed spell,
// Honorable Weapon, is NOT staged — it is held to reference.md
// in full under Shaun's 2026-11-09 removal order (all Oriental
// Adventures / oriental-themed material out — see MANIFEST.md).
// Summaries are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { SpellDefinition } from "@/engine/types";

const DM318_KA = "Dragon Magazine #318 — Children of Ka";
const URL318 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine318_djvu.txt";

export const DRAGON_318_SPELLS: SpellDefinition[] = [
  {
    id: "charge-of-the-triceratops-318",
    name: "Charge of the Triceratops",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Druid: 4 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "1 round/level (D)",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "The subject grows a gore attack useable as a primary or secondary natural weapon dealing 1d8 points of damage; when making a charge attack, the gore attack deals 2d8 points of damage. If the subject already has natural armor, its natural armor bonus improves by +4 (an enhancement bonus); if not, it gains a +4 natural armor bonus. The subject also gains an enhancement bonus to Strength equal to its caster level for the purpose of determining its carrying capacity. The Charge of the Triceratops spell originally appeared in the Hollow World Campaign Setting boxed set. (The Spell Compendium version differs: Druid 3 / Ranger 3 with a different effect set, so the magazine version stages suffixed.)",
    source: DM318_KA,
    sourceUrl: URL318,
  },
  {
    id: "contagion-mass-318",
    name: "Contagion, Mass",
    ruleset: "core",
    school: "Necromancy",
    descriptors: ["Evil"],
    levels: { Cleric: 7, Druid: 7, "Sorcerer/Wizard": 8 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature/2 levels, no two of which can be more than 30 ft. apart",
    duration: "Instantaneous",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    summary:
      "Each subject contracts a disease selected from the contagion spell's table (blinding sickness, cackle fever, filth fever, mindfire, red ache, shakes, or slimery doom), which strikes immediately (no incubation period). The DC for the Fortitude save to resist the initial infection and to avoid taking damage on subsequent days equals the DC of this spell's saving throw. The Spell Compendium version (5th/5th/6th level) differs, so the magazine version stages suffixed.",
    source: DM318_KA,
    sourceUrl: URL318,
  },
  {
    id: "enrage-animal-318",
    name: "Enrage Animal",
    ruleset: "core",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting"],
    levels: { Druid: 1, Ranger: 2 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One animal",
    duration: "Concentration",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "You rouse an animal to fury: it gains a +2 morale bonus to Strength and Constitution, a +1 morale bonus on Will saves, and a −2 penalty to AC, attacking the nearest creature and fighting until dead or the spell ends. Unlike a barbarian's rage, the subject is not fatigued when the spell ends. An animal cannot be enraged while under a calm emotions effect. The Spell Compendium version (Ranger 1 only) differs, so the magazine version stages suffixed.",
    source: DM318_KA,
    sourceUrl: URL318,
  },
  {
    id: "sink-318",
    name: "Sink",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Cleric: 4, Druid: 4 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One vessel",
    duration: "Instantaneous",
    savingThrow: "Fortitude negates (object)",
    spellResistance: "Yes (object)",
    summary:
      "You point at a vessel within range and cause it to fill with water and start sinking; those aboard must make DC 25 Swim checks to rescue the boat, and if a check fails by 5 or more, the vessel sinks 30 feet. The Spell Compendium version (3rd level) differs, so the magazine version stages suffixed.",
    source: DM318_KA,
    sourceUrl: URL318,
  },
  {
    id: "swamp-lung-318",
    name: "Swamp Lung",
    ruleset: "core",
    school: "Necromancy",
    descriptors: [],
    levels: { Druid: 5 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    summary:
      "The creature targeted begins coughing violently for 1d6 rounds, becoming helpless, and is exposed to the filth fever disease in addition to the coughing. Material component: a bit of rotten plant material from a swamp. The Spell Compendium version of Swamp Lung (7th level, an area damage and sickening effect) is a different spell sharing the name, so the magazine version stages suffixed.",
    source: DM318_KA,
    sourceUrl: URL318,
  },
  {
    id: "swamp-stride",
    name: "Swamp Stride",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Teleportation",
    descriptors: [],
    levels: { Druid: 5, Ranger: 4 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level or until expended",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "As tree stride, but you travel through pools of water at least 1 foot deep rather than trees, to a maximum of 500 feet per jump. This spell is still considered rare in Ka's church and among other faiths and druids, though it is becoming more common. No Spell Compendium record exists for this spell, so it stages unsuffixed.",
    source: DM318_KA,
    sourceUrl: URL318,
  },
  {
    id: "swim-318",
    name: "Swim",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Druid: 3, Ranger: 3 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "1 hour/level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "The subject gains a swim speed equal to half its land speed and can move through water at that speed without making Swim checks, gains a +8 racial bonus on any Swim check to perform a special action or avoid a hazard, and can always choose to take 10 on a Swim check even if distracted or endangered; it can use the run action while swimming if it swims in a straight line. The subject need not make Swim checks to stay afloat or move around at less than its swim speed. The Spell Compendium version (Druid 2 / Sorcerer-Wizard 2, Medium range, 1 round casting time) differs, so the magazine version stages suffixed.",
    source: DM318_KA,
    sourceUrl: URL318,
  },
  {
    id: "swim-mass-318",
    name: "Swim, Mass",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Druid: 6 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature/2 levels, no two of which can be more than 30 ft. apart",
    duration: "1 hour/level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "This spell functions like swim, except as noted here. The Spell Compendium version (Druid 4) differs, so the magazine version stages suffixed.",
    source: DM318_KA,
    sourceUrl: URL318,
  },
];
