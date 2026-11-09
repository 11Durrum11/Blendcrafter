import type { FeatDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #314 pack (library-staging/packs/dragon-magazine/issue-314)
// The issue's eleven feats, from three articles:
//   * "The Brotherhood of the Burning Heart" (pp. 18–25): Burning
//     Focus, Radiant Spell, Flash Casting.
//   * "Dust to Dust" (pp. 26–32): Earthcraft, Earth Focus, Friend of
//     Earth.
//   * "Guardians of the Deepest Seas" (pp. 43–47), the Darkwater
//     Feats section: Flotation, Flow With the Current, Pressure
//     Resistance, Sea Legs, Water Focus.
// Transcribed from the magazine text on archive.org
// (DragonMagazine314_djvu.txt). Benefit summaries are short
// mechanical paraphrases in our own words; no magazine prose is
// reproduced.
//
// Category note: Radiant Spell is printed as a [Metamagic] feat and
// the catalog's FeatCategory union includes "metamagic", so it ships
// under its printed type. The other ten are printed [General] and
// ship as "general".
//
// Collision (see MANIFEST.md): Sea Legs collides with the Frostburn
// feat of the same name already in the catalog and is suffixed -314;
// both records live. Pressure Resistance's prerequisite feat Deep
// Diver is NOT defined anywhere in this issue — see MANIFEST.md.

const DM314 = "Dragon Magazine #314";
const DM314_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt";

export const DRAGON_314_FEATS: FeatDefinition[] = [
  {
    id: "burning-focus",
    name: "Burning Focus",
    category: "general",
    ruleset: "core",
    prerequisites: ["Cha 13", "Greater Spell Penetration", "Spell Penetration"],
    benefitSummary: "Choose one creature whose spell resistance you failed to overcome with a caster level check in the last round. Your next caster level check against that creature gains a morale bonus of +1 per failed check so far against it (maximum +10). You can focus on only one creature at a time; the bonus stacks with Spell Penetration and Greater Spell Penetration, and is lost if more than 1 minute passes before you cast another spell at the creature requiring a caster level check, when you succeed on such a check, or when you cast a spell that doesn't affect the chosen creature.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "radiant-spell",
    name: "Radiant Spell",
    category: "metamagic",
    ruleset: "core",
    prerequisites: ["Cha 15", "Ability to cast a spell with the fire descriptor"],
    benefitSummary: "This feat modifies only spells with the fire descriptor that deal damage. Each time a creature is damaged by a radiant spell, it must make a Will save at the spell's save DC (or the DC the spell would have, if it normally allows none) or be blinded for 1 round per level of the spell (before this feat's adjustment). A creature that succeeds on the save is dazzled for 1 round instead.",
    special: "A radiant spell uses up a spell slot two levels higher than the spell's actual level.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "flash-casting",
    name: "Flash Casting",
    category: "general",
    ruleset: "core",
    prerequisites: ["Cha 13", "Ability to cast a spell with the fire or light descriptor"],
    benefitSummary: "A fiery nimbus surrounds you when you cast spells with the fire or light descriptor. For 1 round after you cast such a spell, creatures attempting to attack you take a −2 penalty on their attack rolls. Attackers must be able to see you; creatures with blindsight or that cannot see are immune to this effect.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "earthcraft",
    name: "Earthcraft",
    category: "general",
    ruleset: "core",
    prerequisites: [],
    benefitSummary: "You gain a +2 bonus on all Knowledge (architecture and engineering) checks and Knowledge (dungeoneering) checks.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "earth-focus",
    name: "Earth Focus",
    category: "general",
    ruleset: "core",
    prerequisites: [],
    benefitSummary: "The save DC of any spell you cast with the earth descriptor increases by +1. For such a spell that allows no saving throw, your effective caster level for that spell increases by +1 instead. This benefit stacks with similar benefits, such as Spell Focus.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "friend-of-earth",
    name: "Friend of Earth",
    category: "general",
    ruleset: "core",
    prerequisites: ["Devotee of elemental earth: member of the Earthborn or a similar earth-focused sect or organization"],
    benefitSummary: "You gain a +4 bonus on Charisma-based checks made to influence earth creatures (creatures of elemental earth, creatures with the earth subtype, and stone constructs with Intelligence scores). You gain a +2 bonus on Charisma-based checks made to influence creatures associated with earth and stone but lacking the earth subtype (such as dwarves).",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "flotation",
    name: "Flotation",
    category: "general",
    ruleset: "core",
    prerequisites: ["Skill Focus (Swim)", "Swim 4 ranks"],
    benefitSummary: "You can float on the surface of calm water as a free action. While floating you are considered prone and cannot move for that round, but you may otherwise attack, cast spells, or take other actions as if you were lying on solid ground. You can even sleep while floating by using this feat.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "flow-with-the-current",
    name: "Flow With the Current",
    category: "general",
    ruleset: "core",
    prerequisites: ["Flotation", "Skill Focus (Swim)", "Swim 4 ranks"],
    benefitSummary: "As long as you are swimming, you gain a +2 bonus on initiative checks and a +2 bonus on Reflex saving throws.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "pressure-resistance",
    name: "Pressure Resistance",
    category: "general",
    ruleset: "core",
    prerequisites: ["Deep Diver", "Endurance", "Skill Focus (Swim)", "Swim 4 ranks"],
    benefitSummary: "Once you successfully make a Fortitude save to resist damage caused by water pressure, you no longer need to make Fortitude saves against pressure damage at that depth. If your depth changes by 100 feet, you must begin making new Fortitude saves as normal until you succeed again.",
    special: "Normal: Without this feat, a character deep underwater must make a Fortitude save (DC 15 + 1 per previous save) once every minute to avoid damage from water pressure (DMG p. 304).",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "sea-legs-314",
    name: "Sea Legs",
    category: "general",
    ruleset: "core",
    prerequisites: [],
    benefitSummary: "As long as you are on a ship floating in the water, you gain a +2 bonus on Balance, Climb, Jump, and Tumble checks.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
  {
    id: "water-focus",
    name: "Water Focus",
    category: "general",
    ruleset: "core",
    prerequisites: [],
    benefitSummary: "Spells you cast with the water descriptor gain a +1 bonus to their save DCs (this stacks with Spell Focus). You also gain a +1 bonus on all saving throws against spells with the water descriptor.",
    source: DM314,
    sourceUrl: DM314_PATH,
  },
];
