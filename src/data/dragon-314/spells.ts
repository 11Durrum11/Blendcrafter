import type { SpellDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #314 pack (library-staging/packs/dragon-magazine/issue-314)
// The issue's twenty-five spells, from four articles:
//   * "The Brotherhood of the Burning Heart" (pp. 18–25): distract,
//     heartfire, raging flame, slow burn.
//   * "Dust to Dust" (pp. 26–32): earthen grace, mountain stance,
//     stonemantle, tremor.
//   * "Master of the Four Winds" (pp. 33–42), the Air Spells section:
//     cyclonic blast, eye of the hurricane, capricious zephyr,
//     updraft, downdraft, stolen breath.
//   * "Guardians of the Deepest Seas" (pp. 43–47): airbubble, blood
//     to water, body harmonic, deep breath, extract water elemental,
//     nixie's grace, raise from the deep, rogue wave, submerge ship,
//     tsunami, wall of water.
// Transcribed from the magazine text on archive.org
// (DragonMagazine314_djvu.txt), cross-checked against the Spell
// Compendium reprints where they exist (the catalog's own Spell
// Compendium records) and the Crystal Keep 3.5 spell index.
// Summaries and descriptions are mechanical paraphrases in our own
// words; stat lines are the magazine's own.
//
// Collisions (see MANIFEST.md): twenty-two of these spells were
// reprinted in the Spell Compendium. Under Shaun's 2026-11-12
// no-old-versions order, the Spell Compendium printings are the
// catalog's standing records and the magazine versions came out.
// Stonemantle, airbubble, and rogue wave have no other catalog
// record and stand as this pack's spells.

const DM314 = "Dragon Magazine #314";
const DM314_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt";

export const DRAGON_314_SPELLS: SpellDefinition[] = [
  {
    id: "stonemantle",
    name: "Stonemantle",
    ruleset: "core",
    school: "Transmutation",
    descriptors: ["Earth"],
    levels: { "Cleric": 2, "Druid": 1, "Sorcerer/Wizard": 2 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One Tiny object per caster level (see text)",
    duration: "10 min./level",
    savingThrow: "Will negates (harmless, object)",
    spellResistance: "No",
    summary: "The target object's hardness becomes 8 and it gains 15 hit points per inch of thickness, and the DC to break it increases by +5.",
    description: "Larger objects count against the limit by size: a Small object counts as 2 Tiny objects, Medium as 4, Large as 8, Huge as 16, Gargantuan as 32, and Colossal as 64. If the object's own hardness or hit points per inch are better, use those instead; the break DC increases only if the spell increased the object's hardness. The object's surface takes on a faint, dull gray tint. Material component: a small amount of powdered marble.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "airbubble",
    name: "Airbubble",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Air"],
    levels: { "Cleric": 1, "Sorcerer/Wizard": 1 },
    components: "S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 minute/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary: "A small globe of breathable air forms around your head while you are completely immersed in liquid.",
    description: "The airbubble provides breathable air for the duration. It offers no protection against airborne toxins or poisons, or magical clouds such as stinking cloud or cloudkill. If another creature attempts to breathe the air of your airbubble, it may do so for 1 round, but on the following round the spell prematurely ends. The magazine prints no Saving Throw or Spell Resistance line for this spell; both fields are carried as not printed rather than filled in.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "nixies-grace-314",
    name: "Nixie's Grace",
    ruleset: "core",
    school: "Transmutation",
    descriptors: ["Water"],
    levels: { "Bard": 6 },
    components: "V, S, F",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "10 minutes/level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "You gain a swim speed of 30 feet, can breathe underwater, and gain low-light vision, damage reduction 5/cold iron, +2 Dexterity and Wisdom, and +4 Charisma.",
    description: "The ability bonuses are enhancement bonuses. Focus: a lock of nixie's hair, freely given to you by the nixie.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "rogue-wave",
    name: "Rogue Wave",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Water"],
    levels: { "Cleric": 4, "Druid": 3, "Sorcerer/Wizard": 4 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "10-ft.-long, 20-ft.-wide, 10-ft.-high wave of water",
    duration: "Instantaneous",
    savingThrow: "Fortitude partial (object)",
    spellResistance: "No",
    summary: "A wave of water travels 60 feet, dealing 1d6 bludgeoning damage per two caster levels (maximum 10d6) to everything in its path.",
    description: "The wave starts at any point you select within range and moves in a direction you choose; a Fortitude save halves the damage, and a Large or smaller creature that fails its save is knocked prone. The wave is halted by anything that would block line of effect (unless it destroys the blocker); if only part of the wave is blocked, the rest continues. On a body of water large enough to contain the wave for its whole travel, creatures struck take a −4 penalty on their saves, and the wave's width increases to 40 feet and its travel to 120 feet while it remains in contact with the water; a wave that travels onto land immediately shrinks to its land size and speed, and vanishes if it has already traveled more than 60 feet when it reaches dry land. The wave also vanishes if it moves beyond the spell's range.",
    source: DM314,
    sourceUrl: DM314_PATH,
  }];
