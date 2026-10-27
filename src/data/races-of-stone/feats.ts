/**
 * Races of Stone feat data pack: all sixty-nine feats of
 * Chapter 6 of Races of Stone (Wizards of the Coast), as listed
 * in Table 6–1: Feats (pp. 134–135). Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Stone.pdf
 *
 * Prerequisites and benefit summaries are the feat table's own,
 * condensed in house style. The book's feat groupings map to the
 * app's categories as follows: General feats are "general"
 * (or "combat" where the table marks them as fighter bonus
 * feats, superscript 1 in the table), Racial feats are
 * "race-specific", Craft Rune Circle is "item-creation", and the
 * Bardic Music, Divine, Psionic, Weapon Style, and Wild groups —
 * which have no dedicated app category — are "general" or
 * "combat" (weapon styles) with the book's grouping named in the
 * record's special field.
 */
import type { FeatDefinition } from "@/engine/types";

const ROS = "Races of Stone";
const ROS_PATH = "/A POC PC related/5.Splat/Races of series/Races of Stone.pdf";
const T61 = `${ROS} — Chapter 6: Character Options, Table 6–1: Feats (pp. 134–135)`;

export const RACES_OF_STONE_FEATS: FeatDefinition[] = [
  // ---- General feats ----
  { id: "earth-sense", name: "Earth Sense", category: "general", ruleset: "core", prerequisites: ["Con 13", "Wis 13"], benefitSummary: "Sense creatures within 20 feet that are touching the ground.", source: T61, sourceUrl: ROS_PATH },
  { id: "earth-adept", name: "Earth Adept", category: "general", ruleset: "core", prerequisites: ["Earth Sense"], benefitSummary: "+1 bonus on damage rolls if you and your foe are touching the ground.", source: T61, sourceUrl: ROS_PATH },
  { id: "earth-master", name: "Earth Master", category: "general", ruleset: "core", prerequisites: ["Earth Adept", "Earth Sense"], benefitSummary: "+1 bonus on attack rolls if you and your foe are touching the ground.", source: T61, sourceUrl: ROS_PATH },
  { id: "earth-spell", name: "Earth Spell", category: "metamagic", ruleset: "core", prerequisites: ["Earth Sense", "Heighten Spell"], benefitSummary: "A heightened spell is treated as a higher-level spell and cast at a higher caster level.", source: T61, sourceUrl: ROS_PATH },
  { id: "stone-rage", name: "Stone Rage", category: "general", ruleset: "core", prerequisites: ["Earth Sense", "rage ability"], benefitSummary: "Gain +1 to natural armor while you rage.", source: T61, sourceUrl: ROS_PATH },
  { id: "exotic-armor-proficiency", name: "Exotic Armor Proficiency", category: "combat", ruleset: "core", prerequisites: ["Armor Proficiency of the appropriate sort"], benefitSummary: "Gain proficiency with a specific exotic armor.", special: "You can gain this feat multiple times; each time it applies to a new type of exotic armor. A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "exotic-shield-proficiency", name: "Exotic Shield Proficiency", category: "combat", ruleset: "core", prerequisites: ["Shield Proficiency", "base attack bonus +1"], benefitSummary: "Gain proficiency with a specific exotic shield.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "goad-ros", name: "Goad", category: "combat", ruleset: "core", prerequisites: ["Cha 13", "base attack bonus +1"], benefitSummary: "Cause an enemy to make melee attacks only against you.", special: "A fighter may select this feat as a bonus feat. (Id namespaced: \"goad\" is already an equipment item in the core new-equipment data.)", source: T61, sourceUrl: ROS_PATH },
  { id: "heavy-armor-optimization", name: "Heavy Armor Optimization", category: "combat", ruleset: "core", prerequisites: ["Armor Proficiency (heavy)", "base attack bonus +4"], benefitSummary: "Reduce your heavy armor's armor check penalty by 1 and increase its armor bonus by 1.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "greater-heavy-armor-optimization", name: "Greater Heavy Armor Optimization", category: "combat", ruleset: "core", prerequisites: ["Armor Proficiency (heavy)", "Heavy Armor Optimization", "base attack bonus +8"], benefitSummary: "Reduce your heavy armor's armor check penalty by 2 and increase its armor bonus by 1.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "improved-weapon-familiarity", name: "Improved Weapon Familiarity", category: "combat", ruleset: "core", prerequisites: ["base attack bonus +1"], benefitSummary: "Your race's racial weapons are treated as martial weapons rather than exotic weapons.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "knockback", name: "Knockback", category: "combat", ruleset: "core", prerequisites: ["Improved Bull Rush", "Power Attack", "size Large or larger"], benefitSummary: "Push foes backward with your blows.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "mountain-warrior", name: "Mountain Warrior", category: "combat", ruleset: "core", prerequisites: ["Survival 5 ranks", "base attack bonus +3"], benefitSummary: "Gain +1 bonus on melee damage, +1 bonus on ranged attacks when you hold the higher ground, negate an opponent's higher-ground bonus, and gain a +2 bonus on Balance checks on slopes.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "rampaging-bull-rush", name: "Rampaging Bull Rush", category: "general", ruleset: "core", prerequisites: ["Improved Bull Rush", "size Large or larger", "rage class feature"], benefitSummary: "Knock a foe prone as part of a raging bull rush.", source: T61, sourceUrl: ROS_PATH },
  { id: "reckless-rage", name: "Reckless Rage", category: "general", ruleset: "core", prerequisites: ["Con 13", "rage ability"], benefitSummary: "While raging, take an additional –2 penalty to AC and gain an additional +2 to Strength and Constitution.", source: T61, sourceUrl: ROS_PATH },
  { id: "rock-hurling", name: "Rock Hurling", category: "combat", ruleset: "core", prerequisites: ["Str 19", "size Large or larger"], benefitSummary: "Hurl rocks as a giant can.", source: T61, sourceUrl: ROS_PATH },
  { id: "improved-rock-hurling", name: "Improved Rock Hurling", category: "combat", ruleset: "core", prerequisites: ["Str 23", "Rock Hurling", "size Large or larger"], benefitSummary: "Throw rocks farther and more accurately.", source: T61, sourceUrl: ROS_PATH },
  { id: "fling-ally", name: "Fling Ally", category: "combat", ruleset: "core", prerequisites: ["Rock Hurling"], benefitSummary: "Throw a friend into another square.", source: T61, sourceUrl: ROS_PATH },
  { id: "fling-enemy", name: "Fling Enemy", category: "combat", ruleset: "core", prerequisites: ["Rock Hurling"], benefitSummary: "Throw an enemy you are grappling.", source: T61, sourceUrl: ROS_PATH },
  { id: "shielded-casting", name: "Shielded Casting", category: "general", ruleset: "core", prerequisites: ["Concentration 5 ranks", "Combat Casting", "Shield Proficiency"], benefitSummary: "You do not provoke attacks of opportunity when you cast spells with a shield ready.", source: T61, sourceUrl: ROS_PATH },
  { id: "shielded-manifesting", name: "Shielded Manifesting", category: "general", ruleset: "core", prerequisites: ["Concentration 5 ranks", "Combat Manifesting", "Shield Proficiency"], benefitSummary: "You do not provoke attacks of opportunity when you manifest powers with a shield ready.", source: T61, sourceUrl: ROS_PATH },
  { id: "steady-concentration", name: "Steady Concentration", category: "general", ruleset: "core", prerequisites: ["Concentration 8 ranks"], benefitSummary: "Always take 10 on Concentration checks.", source: T61, sourceUrl: ROS_PATH },
  { id: "steady-mountaineer", name: "Steady Mountaineer", category: "general", ruleset: "core", prerequisites: ["Goliath, or Climb 8 ranks and Jump 8 ranks"], benefitSummary: "Always take 10 on Climb and Jump checks.", source: T61, sourceUrl: ROS_PATH },
  { id: "tunnel-fighting", name: "Tunnel Fighting", category: "combat", ruleset: "core", prerequisites: ["base attack bonus +1"], benefitSummary: "No penalty on attacks or to Armor Class when squeezing.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "stoneback", name: "Stoneback", category: "combat", ruleset: "core", prerequisites: ["Shield Proficiency", "Tunnel Fighting"], benefitSummary: "Prevent flanks when a wall shields one side.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "tunnel-riding", name: "Tunnel Riding", category: "combat", ruleset: "core", prerequisites: ["Mounted Combat", "Tunnel Fighting"], benefitSummary: "You and your mount take no penalty on attacks or to Armor Class when squeezing.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },

  // ---- Racial feats ----
  { id: "ancestral-knowledge", name: "Ancestral Knowledge", category: "race-specific", ruleset: "core", prerequisites: ["Dwarf", "Wis 15"], benefitSummary: "Make untrained Knowledge checks and use your Wisdom modifier for them.", source: T61, sourceUrl: ROS_PATH },
  { id: "auspicious-marking", name: "Auspicious Marking", category: "race-specific", ruleset: "core", prerequisites: ["Goliath"], benefitSummary: "Gain a +2 bonus on Charisma checks against goliaths and reroll stabilization checks.", source: T61, sourceUrl: ROS_PATH },
  { id: "markings-of-the-blessed", name: "Markings of the Blessed", category: "race-specific", ruleset: "core", prerequisites: ["Goliath", "Auspicious Marking"], benefitSummary: "Choose the higher of two saving throw rolls.", source: T61, sourceUrl: ROS_PATH },
  { id: "markings-of-the-hunter", name: "Markings of the Hunter", category: "race-specific", ruleset: "core", prerequisites: ["Goliath", "Auspicious Marking"], benefitSummary: "Choose the higher of two initiative checks.", source: T61, sourceUrl: ROS_PATH },
  { id: "markings-of-the-magi", name: "Markings of the Magi", category: "race-specific", ruleset: "core", prerequisites: ["Goliath", "Auspicious Marking"], benefitSummary: "Choose the higher of two caster level checks.", source: T61, sourceUrl: ROS_PATH },
  { id: "markings-of-the-maker", name: "Markings of the Maker", category: "race-specific", ruleset: "core", prerequisites: ["Goliath", "Auspicious Marking"], benefitSummary: "Choose the higher of two skill checks.", source: T61, sourceUrl: ROS_PATH },
  { id: "markings-of-the-warrior", name: "Markings of the Warrior", category: "race-specific", ruleset: "core", prerequisites: ["Goliath", "Auspicious Marking"], benefitSummary: "Choose the higher of two attack rolls.", source: T61, sourceUrl: ROS_PATH },
  { id: "battle-hardened", name: "Battle Hardened", category: "race-specific", ruleset: "core", prerequisites: ["Dwarf", "base attack bonus +4"], benefitSummary: "Gain a +4 bonus on saves against fear and a +2 bonus on initiative.", source: T61, sourceUrl: ROS_PATH },
  { id: "burrow-friend", name: "Burrow Friend", category: "race-specific", ruleset: "core", prerequisites: ["Gnome", "Cha 13"], benefitSummary: "Gain a +2 bonus on Handle Animal and wild empathy checks with burrowing animals.", source: T61, sourceUrl: ROS_PATH },
  { id: "clan-prestige", name: "Clan Prestige", category: "race-specific", ruleset: "core", prerequisites: ["Dwarf", "Cha 13"], benefitSummary: "Gain a +4 bonus on Charisma checks against members of the same clan.", source: T61, sourceUrl: ROS_PATH },
  { id: "dwarven-armor-proficiency", name: "Dwarven Armor Proficiency", category: "race-specific", ruleset: "core", prerequisites: ["Dwarf", "Armor Proficiency (heavy)"], benefitSummary: "Gain proficiency with dwarf exotic armors.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "earth-fist", name: "Earth Fist", category: "race-specific", ruleset: "core", prerequisites: ["Dwarf, gnome, or goliath", "Earth Sense", "Improved Unarmed Strike"], benefitSummary: "Your unarmed attacks are treated as cold iron while you touch solid ground.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "extra-silence", name: "Extra Silence", category: "race-specific", ruleset: "core", prerequisites: ["Whisper gnome"], benefitSummary: "Use your racial silence ability 3/day plus your Charisma bonus.", source: T61, sourceUrl: ROS_PATH },
  { id: "gnome-foe-killer", name: "Gnome Foe Killer", category: "race-specific", ruleset: "core", prerequisites: ["Gnome"], benefitSummary: "Gain a +2 bonus on weapon damage rolls against kobolds and goblinoids.", source: T61, sourceUrl: ROS_PATH },
  { id: "heavy-lithoderms", name: "Heavy Lithoderms", category: "race-specific", ruleset: "core", prerequisites: ["Goliath"], benefitSummary: "Your natural armor increases by 1.", source: T61, sourceUrl: ROS_PATH },
  { id: "moradins-smile", name: "Moradin's Smile", category: "race-specific", ruleset: "core", prerequisites: ["Dwarf"], benefitSummary: "Gain a +2 bonus on all Charisma-based skill checks.", source: T61, sourceUrl: ROS_PATH },
  { id: "natural-trickster", name: "Natural Trickster", category: "race-specific", ruleset: "core", prerequisites: ["Gnome", "Cha 13"], benefitSummary: "Gain a 1st-level illusion spell as a spell-like ability.", source: T61, sourceUrl: ROS_PATH },
  { id: "piercing-sight", name: "Piercing Sight", category: "race-specific", ruleset: "core", prerequisites: ["Gnome"], benefitSummary: "Gain a +4 bonus on saves to disbelieve illusions.", source: T61, sourceUrl: ROS_PATH },
  { id: "silencing-strike", name: "Silencing Strike", category: "race-specific", ruleset: "core", prerequisites: ["sneak attack ability", "whisper gnome"], benefitSummary: "Silence the target of your sneak attack.", source: T61, sourceUrl: ROS_PATH },
  { id: "titan-fighting", name: "Titan Fighting", category: "race-specific", ruleset: "core", prerequisites: ["Dodge", "racial dodge bonus against giants"], benefitSummary: "Apply your racial dodge bonus to Armor Class when dodging larger opponents.", special: "A fighter may select this feat as a bonus feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "trivial-knowledge", name: "Trivial Knowledge", category: "race-specific", ruleset: "core", prerequisites: ["Gnome", "Int 13"], benefitSummary: "Choose the higher of two Knowledge or bardic knowledge checks.", source: T61, sourceUrl: ROS_PATH },

  // ---- Bardic music feats (app category "general"; book grouping in special) ----
  { id: "enchanting-song", name: "Enchanting Song", category: "general", ruleset: "core", prerequisites: ["Perform (any) 5 ranks", "Spell Focus (enchantment)", "bardic music"], benefitSummary: "Spend bardic music to increase an enchantment spell's caster level and DC by 1.", special: "Bardic music feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "inspire-spellpower", name: "Inspire Spellpower", category: "general", ruleset: "core", prerequisites: ["Perform (any) 8 ranks", "bardic music"], benefitSummary: "New song increases allies' caster level by 1.", special: "Bardic music feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "metamagic-song", name: "Metamagic Song", category: "metamagic", ruleset: "core", prerequisites: ["Any two metamagic feats", "bardic music"], benefitSummary: "Spend bardic music to apply metamagic to spells.", special: "Bardic music feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "misleading-song", name: "Misleading Song", category: "general", ruleset: "core", prerequisites: ["Perform (any) 5 ranks", "Spell Focus (illusion)", "bardic music"], benefitSummary: "Spend bardic music to increase an illusion spell's caster level and DC by 1.", special: "Bardic music feat.", source: T61, sourceUrl: ROS_PATH },

  // ---- Divine feats ----
  { id: "earths-warding", name: "Earth's Warding", category: "general", ruleset: "core", prerequisites: ["Earth Sense", "ability to rebuke earth creatures"], benefitSummary: "Spend a rebuke attempt to increase your natural armor by 2.", special: "Divine feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "divine-damage-reduction", name: "Divine Damage Reduction", category: "general", ruleset: "core", prerequisites: ["Earth Sense", "Earth's Warding"], benefitSummary: "Spend a rebuke attempt to gain damage reduction 2/adamantine.", special: "Divine feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "divine-spellshield", name: "Divine Spellshield", category: "general", ruleset: "core", prerequisites: ["Ability to rebuke earth creatures", "racial bonus on saves against spells"], benefitSummary: "Spend a rebuke attempt to grant a +2 bonus on saves against spells to your allies.", special: "Divine feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "pierce-the-darkness", name: "Pierce the Darkness", category: "general", ruleset: "core", prerequisites: ["Ability to turn undead", "darkvision"], benefitSummary: "Spend a turn attempt to double your darkvision range.", special: "Divine feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "roots-of-the-mountain", name: "Roots of the Mountain", category: "general", ruleset: "core", prerequisites: ["Ability to rebuke earth creatures", "stability racial trait"], benefitSummary: "Spend a rebuke attempt to make yourself immovable.", special: "Divine feat.", source: T61, sourceUrl: ROS_PATH },

  // ---- Item creation feats ----
  { id: "craft-rune-circle", name: "Craft Rune Circle", category: "item-creation", ruleset: "core", prerequisites: ["Caster level 5th"], benefitSummary: "Create rune circles.", source: T61, sourceUrl: ROS_PATH },

  // ---- Psionic feats ----
  { id: "deep-vision", name: "Deep Vision", category: "general", ruleset: "core", prerequisites: ["Darkvision"], benefitSummary: "Your darkvision range increases while you are psionically focused.", special: "Psionic feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "deflective-armor", name: "Deflective Armor", category: "general", ruleset: "core", prerequisites: ["Heavy Armor Optimization"], benefitSummary: "Your armor protects against touch attacks while you are psionically focused.", special: "Psionic feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "earth-power", name: "Earth Power", category: "general", ruleset: "core", prerequisites: ["Earth Sense"], benefitSummary: "Pay 1 less power point to manifest a power while you stand on stone or earth.", special: "Psionic feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "focused-shield", name: "Focused Shield", category: "general", ruleset: "core", prerequisites: ["Shield Proficiency"], benefitSummary: "+1 to your shield bonus while you are psionically focused.", special: "Psionic feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "invest-armor", name: "Invest Armor", category: "general", ruleset: "core", prerequisites: ["Proficient with armor"], benefitSummary: "Expend your psionic focus to increase your armor bonus by 3.", special: "Psionic feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "energize-armor", name: "Energize Armor", category: "general", ruleset: "core", prerequisites: ["Invest Armor"], benefitSummary: "Psychic energy grants you resistance 10 against the next energy attack.", special: "Psionic feat.", source: T61, sourceUrl: ROS_PATH },

  // ---- Weapon style feats ----
  { id: "axespike", name: "Axespike", category: "combat", ruleset: "core", prerequisites: ["Armor Proficiency (heavy)", "Weapon Focus (armor spikes)"], benefitSummary: "Make a secondary attack with your armor spikes as part of a full attack.", special: "Weapon style feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "shielded-axe", name: "Shielded Axe", category: "combat", ruleset: "core", prerequisites: ["Shield Proficiency", "Two-Weapon Fighting", "Weapon Focus (dwarven waraxe, handaxe)"], benefitSummary: "Retain your buckler's shield bonus when making a full attack with a waraxe and handaxe.", special: "Weapon style feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "spellrazor", name: "Spellrazor", category: "combat", ruleset: "core", prerequisites: ["Concentration 5 ranks", "Combat Casting", "Exotic Weapon Proficiency (gnome quickrazor)", "Two-Weapon Fighting"], benefitSummary: "Make an off-hand attack with a quickrazor when casting a touch attack spell.", special: "Weapon style feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "turtle-dart", name: "Turtle Dart", category: "combat", ruleset: "core", prerequisites: ["Exotic Armor Proficiency (battle plate or mountain plate)", "Exotic Shield Proficiency (extreme shield) or Tower Shield Proficiency", "Weapon Focus (short sword)"], benefitSummary: "Do not provoke attacks of opportunity for moving from any creature that you attack with your short sword in the same round.", special: "Weapon style feat.", source: T61, sourceUrl: ROS_PATH },

  // ---- Wild feats ----
  { id: "stone-form", name: "Stone Form", category: "general", ruleset: "core", prerequisites: ["Con 13", "wild shape class feature"], benefitSummary: "Wild shape into a stony form.", special: "Wild feat.", source: T61, sourceUrl: ROS_PATH },
  { id: "powerful-wild-shape", name: "Powerful Wild Shape", category: "general", ruleset: "core", prerequisites: ["Powerful build racial trait", "wild shape ability"], benefitSummary: "Retain powerful build while wild shaped.", special: "Wild feat.", source: T61, sourceUrl: ROS_PATH },
];
