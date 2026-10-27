/**
 * Frostburn feat data pack: all thirty-two feats of Chapter 2 of
 * Frostburn (Wizards of the Coast), as listed in Table 2–7: New
 * Feats (p. 46), with descriptions on pp. 45–50. Built 2026-10-27
 * from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Frostburn.pdf
 *
 * Prerequisites and benefit summaries are the feat table's own,
 * condensed in house style. Feats the table marks with
 * superscript 1 (fighter bonus feats) are category "combat" with
 * the fighter note in the record's special field, following the
 * house pattern. The book's Ch. 2 fighter discussion misprints
 * Sugliin Mastery as "Sugliin Master"; the feat's own name is
 * used here.
 */
import type { FeatDefinition } from "@/engine/types";

const FB = "Frostburn";
const FB_PATH = "/A POC PC related/5.Splat/Frostburn.pdf";
const T27 = `${FB} — Chapter 2: Races, Classes, and Feats, Table 2–7: New Feats (p. 46)`;
const FIGHTER = "A fighter may select this feat as one of his fighter bonus feats.";

export const FROSTBURN_FEATS: FeatDefinition[] = [
  // ---- General feats ----
  { id: "altitude-adaptation", name: "Altitude Adaptation", category: "general", ruleset: "core", prerequisites: ["base Fortitude save bonus +2"], benefitSummary: "+4 bonus on Fortitude saves to avoid altitude sickness, and you are less susceptible to altitude sickness.", source: T27, sourceUrl: FB_PATH },
  { id: "arctic-priest", name: "Arctic Priest", category: "general", ruleset: "core", prerequisites: ["Cold domain or Winter domain"], benefitSummary: "You can swap out prepared spells for a specialized list of cold spells, as a cleric swaps spells for cure spells.", source: T27, sourceUrl: FB_PATH },
  { id: "beckon-the-frozen", name: "Beckon the Frozen", category: "general", ruleset: "core", prerequisites: ["Augment Summoning", "Spell Focus (conjuration)"], benefitSummary: "Creatures you summon gain the cold subtype and +1d6 cold damage on their attacks.", source: T27, sourceUrl: FB_PATH },
  { id: "chosen-of-iborighu", name: "Chosen of Iborighu", category: "general", ruleset: "core", prerequisites: ["patron deity Iborighu"], benefitSummary: "Cleric is your favored class, and you gain a cold damage gaze attack 1/day.", source: T27, sourceUrl: FB_PATH },
  { id: "cold-endurance", name: "Cold Endurance", category: "combat", ruleset: "core", prerequisites: ["base Fortitude save bonus +2"], benefitSummary: "+2 bonus on saves against cold, and you can exist comfortably in cold environments.", special: FIGHTER, source: T27, sourceUrl: FB_PATH },
  { id: "improved-cold-endurance", name: "Improved Cold Endurance", category: "combat", ruleset: "core", prerequisites: ["base Fortitude save bonus +6", "Cold Endurance"], benefitSummary: "You gain resistance to cold 5.", special: FIGHTER, source: T27, sourceUrl: FB_PATH },
  { id: "cold-focus", name: "Cold Focus", category: "general", ruleset: "core", prerequisites: [], benefitSummary: "+1 bonus to the save DCs of your cold spells.", source: T27, sourceUrl: FB_PATH },
  { id: "greater-cold-focus", name: "Greater Cold Focus", category: "general", ruleset: "core", prerequisites: ["Cold Focus"], benefitSummary: "A further +1 bonus to the save DCs of your cold spells (stacks with Cold Focus).", source: T27, sourceUrl: FB_PATH },
  { id: "faith-in-the-frost", name: "Faith in the Frost", category: "general", ruleset: "core", prerequisites: ["ability to turn or rebuke creatures", "Cold domain or Winter domain"], benefitSummary: "Creatures you successfully turn or rebuke take cold damage.", source: T27, sourceUrl: FB_PATH },
  { id: "frozen-berserker", name: "Frozen Berserker", category: "combat", ruleset: "core", prerequisites: ["barbarian rage ability"], benefitSummary: "You gain the cold subtype while raging.", special: FIGHTER, source: T27, sourceUrl: FB_PATH },
  { id: "frozen-wild-shape", name: "Frozen Wild Shape", category: "general", ruleset: "core", prerequisites: ["base Fortitude save bonus +6", "wild shape ability"], benefitSummary: "You can use wild shape to assume the form of cold magical beasts.", source: T27, sourceUrl: FB_PATH },
  { id: "ice-harmonics", name: "Ice Harmonics", category: "general", ruleset: "core", prerequisites: ["bardic music ability", "Perform (sing) 6 ranks"], benefitSummary: "You can shatter ice with your voice using bardic music.", source: T27, sourceUrl: FB_PATH },
  { id: "improved-frosty-touch", name: "Improved Frosty Touch", category: "combat", ruleset: "core", prerequisites: ["uldra race"], benefitSummary: "Your frosty touch ability deals 2 points of cold damage instead of 1.", special: FIGHTER, source: T27, sourceUrl: FB_PATH },
  { id: "mark-of-hleid", name: "Mark of Hleid", category: "general", ruleset: "core", prerequisites: ["patron deity Hleid"], benefitSummary: "Cleric is your favored class; you gain a +2 sacred bonus to AC against evil cold creatures and immunity to rimefire.", source: T27, sourceUrl: FB_PATH },
  { id: "mountaineer", name: "Mountaineer", category: "general", ruleset: "core", prerequisites: [], benefitSummary: "+2 bonus on Climb and Survival checks.", source: T27, sourceUrl: FB_PATH },
  { id: "primeval-wild-shape", name: "Primeval Wild Shape", category: "general", ruleset: "core", prerequisites: ["wild shape ability"], benefitSummary: "Your wild shape form gains +2 Strength, a +2 bonus to natural armor, and resistance to cold 10, but the form lasts only 1 round per level.", source: T27, sourceUrl: FB_PATH },
  { id: "primitive-caster", name: "Primitive Caster", category: "general", ruleset: "core", prerequisites: [], benefitSummary: "You can add primitive material components to a spell to raise its effective level.", source: T27, sourceUrl: FB_PATH },
  { id: "sea-legs", name: "Sea Legs", category: "combat", ruleset: "core", prerequisites: [], benefitSummary: "+2 bonus on Balance and Tumble checks and a +1 bonus on initiative checks while aboard a ship.", special: FIGHTER, source: T27, sourceUrl: FB_PATH },
  { id: "smite-fiery-foe", name: "Smite Fiery Foe", category: "general", ruleset: "core", prerequisites: ["smite ability"], benefitSummary: "Your smite adds your Charisma modifier on the attack roll and your character level to damage against creatures with the fire subtype.", source: T27, sourceUrl: FB_PATH },
  { id: "snowcasting", name: "Snowcasting", category: "general", ruleset: "core", prerequisites: ["Con 13"], benefitSummary: "By using snow as an extra material component, you add the cold descriptor to a spell you cast.", source: T27, sourceUrl: FB_PATH },
  { id: "frozen-magic", name: "Frozen Magic", category: "general", ruleset: "core", prerequisites: ["Con 13", "Snowcasting"], benefitSummary: "Your cold spells are cast at a higher caster level in cold weather.", source: T27, sourceUrl: FB_PATH },
  { id: "icy-calling", name: "Icy Calling", category: "general", ruleset: "core", prerequisites: ["Con 13", "Snowcasting"], benefitSummary: "Frostfell creatures you summon are stronger in cold weather.", source: T27, sourceUrl: FB_PATH },
  { id: "cold-spell-specialization", name: "Cold Spell Specialization", category: "general", ruleset: "core", prerequisites: ["Con 13", "Snowcasting", "Frozen Magic"], benefitSummary: "Your cold spells deal +1 or +2 damage per die in cold weather.", source: T27, sourceUrl: FB_PATH },
  { id: "frostfell-prodigy", name: "Frostfell Prodigy", category: "general", ruleset: "core", prerequisites: ["Con 13", "Snowcasting", "Frozen Magic", "Cold Focus"], benefitSummary: "You gain additional bonus spells in cold weather.", source: T27, sourceUrl: FB_PATH },
  { id: "snowrunner", name: "Snowrunner", category: "general", ruleset: "core", prerequisites: ["woodland stride ability"], benefitSummary: "You can move through snow at full speed and gain a +5 competence bonus on Balance checks on ice.", source: T27, sourceUrl: FB_PATH },
  { id: "snowflake-wardance", name: "Snowflake Wardance", category: "general", ruleset: "core", prerequisites: ["bardic music ability", "Perform (dance) 6 ranks"], benefitSummary: "Using bardic music, you add your Charisma modifier to attack rolls with one-handed slashing melee weapons.", source: T27, sourceUrl: FB_PATH },
  { id: "storm-magic", name: "Storm Magic", category: "general", ruleset: "core", prerequisites: [], benefitSummary: "All your spells are cast at caster level +1 during storms.", source: T27, sourceUrl: FB_PATH },
  { id: "sugliin-mastery", name: "Sugliin Mastery", category: "combat", ruleset: "core", prerequisites: ["base attack bonus +5", "Exotic Weapon Proficiency (sugliin)"], benefitSummary: "Attacks you make with a sugliin are a standard action instead of a full-round action.", special: FIGHTER, source: T27, sourceUrl: FB_PATH },
  { id: "winters-champion", name: "Winter's Champion", category: "general", ruleset: "core", prerequisites: ["paladin level 1st"], benefitSummary: "You gain additional frostfell spells on your paladin spell list.", source: T27, sourceUrl: FB_PATH },
  { id: "winters-mount", name: "Winter's Mount", category: "general", ruleset: "core", prerequisites: ["special mount ability"], benefitSummary: "Your special mount gains the cold subtype and a +2 bonus to Constitution.", source: T27, sourceUrl: FB_PATH },
  // ---- Item creation feats ----
  { id: "craft-skull-talisman", name: "Craft Skull Talisman", category: "item-creation", ruleset: "core", prerequisites: ["caster level 6th"], benefitSummary: "You can create magic skull talismans (single-use cold magic items carved on skulls).", source: T27, sourceUrl: FB_PATH },
  // ---- Metamagic feats ----
  { id: "piercing-cold", name: "Piercing Cold", category: "metamagic", ruleset: "core", prerequisites: [], benefitSummary: "Your cold spells can damage creatures resistant or immune to cold; a piercing cold spell uses a spell slot one level higher than the spell's actual level.", source: T27, sourceUrl: FB_PATH },
];
