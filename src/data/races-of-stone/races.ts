/**
 * Races of Stone race data pack: the playable races of Races of
 * Stone (Wizards of the Coast) — goliath, chaos gnome, dream dwarf,
 * feral gargun, stonechild, and whisper gnome. Built 2026-10-27
 * from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Stone.pdf
 *
 * Races of Stone is a generic D&D 3.5 supplement, not a separate
 * setting, so these records carry ruleset "core" (the original
 * app's own data cited this book under its core data).
 *
 * The book's standard dwarf and gnome chapters describe the
 * Player's Handbook races, which the core SRD records already
 * cover; they are not duplicated here. Feral gargun and stonechild
 * are also presented in the book as monster classes (Tables 4–4
 * and 4–5) that spread the race over several levels; those
 * progressions are not expressible in the app's race model, so the
 * records below carry the full adult traits, racial Hit Dice, and
 * level adjustment, exactly as printed in each race's trait list.
 */
import type { RaceDefinition } from "@/engine/types";

const ROS = "Races of Stone";
const ROS_PATH = "/A POC PC related/5.Splat/Races of series/Races of Stone.pdf";

export const RACES_OF_STONE_RACES: RaceDefinition[] = [
  {
    id: "goliath",
    name: "Goliath",
    ruleset: "core",
    source: `${ROS} — Chapter 3: Goliaths, Goliath Racial Traits (p. 56)`,
    sourceUrl: ROS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: ["Goliath"],
    abilityModifiers: { str: 4, dex: -2, con: 2 },
    favoredClass: "Barbarian",
    levelAdjustment: 1,
    skillBonuses: { "sense-motive": 2 },
    traits: [
      {
        key: "goliath-powerful-build",
        name: "Powerful Build",
        description:
          "A goliath is treated as one size larger for opposed checks (such as grapple and bull rush), for size-based special attacks (such as improved grab and swallow whole), and for determining whether he can use a weapon sized for a larger creature. His space and reach remain those of a Medium creature.",
        category: "trait",
        source: `${ROS} — Goliath Racial Traits (p. 56)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "goliath-mountain-movement",
        name: "Mountain Movement",
        description:
          "A goliath can make standing long jumps and high jumps as if they were running jumps, and can engage in accelerated climbing without taking the –5 penalty on the Climb check.",
        category: "trait",
        source: `${ROS} — Goliath Racial Traits (p. 56)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "goliath-acclimated",
        name: "Acclimated",
        description:
          "Goliaths are automatically acclimated to life at high altitudes. They do not take the altitude penalties described in the Dungeon Master's Guide, and retain their acclimation at low elevation.",
        category: "special-quality",
        source: `${ROS} — Goliath Racial Traits (p. 56)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "goliath-keen-senses",
        name: "Keen Social Senses",
        description: "+2 racial bonus on Sense Motive checks (included in this race's skill bonuses).",
        category: "trait",
        source: `${ROS} — Goliath Racial Traits (p. 56)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "chaos-gnome",
    name: "Chaos Gnome",
    ruleset: "core",
    source: `${ROS} — Chapter 4: Other Races, Chaos Gnome Racial Traits (pp. 87–88)`,
    sourceUrl: ROS_PATH,
    size: "Small",
    baseSpeed: 20,
    type: "Humanoid",
    subtypes: ["Gnome"],
    abilityModifiers: { dex: 2, con: 2, cha: 2, str: -2 },
    favoredClass: "Sorcerer",
    levelAdjustment: 1,
    skillBonuses: { listen: 2 },
    traits: [
      {
        key: "chaos-gnome-low-light-vision",
        name: "Low-Light Vision",
        description: "A chaos gnome can see twice as far as a human in conditions of poor illumination.",
        category: "special-quality",
        source: `${ROS} — Chaos Gnome Racial Traits (p. 87)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "chaos-gnome-weapon-familiarity",
        name: "Weapon Familiarity",
        description: "Chaos gnomes treat gnome hooked hammers as martial weapons rather than exotic weapons.",
        category: "trait",
        source: `${ROS} — Chaos Gnome Racial Traits (p. 87)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "chaos-gnome-spell-power",
        name: "Spell Power",
        description: "+1 caster level for spells with the chaos descriptor.",
        category: "special-quality",
        source: `${ROS} — Chaos Gnome Racial Traits (p. 87)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "chaos-gnome-giant-dodge",
        name: "Giant Dodge",
        description: "+4 dodge bonus to Armor Class against monsters of the giant type.",
        category: "trait",
        source: `${ROS} — Chaos Gnome Racial Traits (p. 87)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "chaos-gnome-luck-of-chaos",
        name: "Luck of Chaos (Ex)",
        description:
          "Once per day, a chaos gnome can reroll any roll she has just made (an attack roll, a saving throw, a skill check, or any other roll). She must accept the result of the reroll, even if it is worse than the original.",
        category: "special-quality",
        source: `${ROS} — Chaos Gnome Racial Traits (pp. 87–88)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "chaos-gnome-confusion-immunity",
        name: "Confusion Immunity",
        description: "Chaos gnomes are immune to confusion effects. They also gain a +2 racial bonus on Listen checks (included in this race's skill bonuses).",
        category: "special-quality",
        source: `${ROS} — Chaos Gnome Racial Traits (p. 88)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "chaos-gnome-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "1/day — entropic shield. A chaos gnome with a Charisma of 10 or higher also has the following spell-like abilities: 1/day — daze, flare, prestidigitation. Caster level 1st.",
        category: "special-attack",
        source: `${ROS} — Chaos Gnome Racial Traits (p. 88)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "dream-dwarf",
    name: "Dream Dwarf",
    ruleset: "core",
    source: `${ROS} — Chapter 4: Other Races, Dream Dwarf Racial Traits (pp. 88–89)`,
    sourceUrl: ROS_PATH,
    size: "Medium",
    baseSpeed: 20,
    type: "Humanoid",
    subtypes: ["Dwarf"],
    abilityModifiers: { con: 2, dex: -2 },
    favoredClass: "Druid",
    traits: [
      {
        key: "dream-dwarf-darkvision",
        name: "Darkvision",
        description:
          "Darkvision out to 90 feet. A dream dwarf's base speed of 20 feet is never reduced by wearing medium or heavy armor or by carrying a medium or heavy load.",
        category: "special-quality",
        source: `${ROS} — Dream Dwarf Racial Traits (p. 88)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "dream-dwarf-stonecunning",
        name: "Stonecunning",
        description:
          "+2 racial bonus on Search checks to notice unusual stonework, such as sliding walls, stonework traps, new construction, unsafe stone surfaces, and shaky stone ceilings. A dream dwarf can use Search to find stonework traps as a rogue can, and can intuit depth underground as naturally as a human can sense which way is up.",
        category: "special-quality",
        source: `${ROS} — Dream Dwarf Racial Traits (pp. 88–89)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "dream-dwarf-weapon-familiarity",
        name: "Weapon Familiarity",
        description: "Dream dwarves treat dwarven waraxes and dwarven urgroshes as martial weapons rather than exotic weapons.",
        category: "trait",
        source: `${ROS} — Dream Dwarf Racial Traits (p. 89)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "dream-dwarf-stability",
        name: "Stability",
        description:
          "+4 bonus on ability checks made to resist being bull rushed or tripped when standing on the ground (but not when climbing, flying, riding, or otherwise not standing firmly on the ground).",
        category: "trait",
        source: `${ROS} — Dream Dwarf Racial Traits (p. 89)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "dream-dwarf-earth-diplomacy",
        name: "Earth Diplomacy",
        description:
          "+2 racial bonus on Diplomacy checks made with creatures of the earth subtype: dream dwarves get along well with earth elementals and similar creatures.",
        category: "trait",
        source: `${ROS} — Dream Dwarf Racial Traits (p. 89)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "dream-dwarf-dream-sight",
        name: "Dream Sight (Su)",
        description:
          "A dream dwarf sees ethereal creatures and objects as easily as he sees material ones, although ethereal objects appear translucent and indistinct. He can also see into the Ethereal Plane in the same way.",
        category: "special-quality",
        source: `${ROS} — Dream Dwarf Racial Traits (p. 89)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "dream-dwarf-spell-power",
        name: "Spell Power",
        description:
          "+1 effective caster level for divination spells and for spells with the earth descriptor, as long as the dream dwarf is in contact with the ground.",
        category: "special-quality",
        source: `${ROS} — Dream Dwarf Racial Traits (p. 89)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "feral-gargun",
    name: "Feral Gargun",
    ruleset: "core",
    source: `${ROS} — Chapter 4: Other Races, Feral Gargun Racial Traits (pp. 91–92)`,
    sourceUrl: ROS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: 4, dex: 2, con: 4, int: -2, cha: -2 },
    favoredClass: "Barbarian",
    levelAdjustment: 2,
    racialHitDice: 2,
    hitDie: "d8",
    naturalArmor: 2,
    traits: [
      {
        key: "feral-gargun-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${ROS} — Feral Gargun Racial Traits (p. 91)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "feral-gargun-powerful-build",
        name: "Powerful Build",
        description:
          "A feral gargun is treated as one size larger for opposed checks (such as grapple and bull rush), for size-based special attacks, and for determining whether he can use a weapon sized for a larger creature. His space and reach remain those of a Medium creature.",
        category: "trait",
        source: `${ROS} — Feral Gargun Racial Traits (p. 91)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "feral-gargun-natural-weapons",
        name: "Claws",
        description:
          "A feral gargun has two claw attacks that each deal 1d6 points of damage. He is proficient with simple weapons only, and with no armor or shields. His racial Hit Dice give him a +2 racial bonus on natural armor (included as this race's natural armor) and one racial feat.",
        category: "special-attack",
        source: `${ROS} — Feral Gargun Racial Traits (pp. 91–92)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "feral-gargun-mountain-movement",
        name: "Mountain Movement and Acclimated",
        description:
          "A feral gargun can make standing long jumps and high jumps as if they were running jumps, can engage in accelerated climbing without the –5 penalty, and is acclimated to high altitudes as a goliath is.",
        category: "trait",
        source: `${ROS} — Feral Gargun Racial Traits (p. 92)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "feral-gargun-cold-resistance",
        name: "Cold Resistance",
        description: "A feral gargun has cold resistance 5.",
        category: "special-quality",
        source: `${ROS} — Feral Gargun Racial Traits (p. 92)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "feral-gargun-goliath-blood",
        name: "Goliath Blood and Racial Skills",
        description:
          "For all effects related to race, a feral gargun is considered a goliath. His racial Hit Dice class skills are Climb, Hide, Jump, Listen, Search, Spot, and Survival.",
        category: "trait",
        source: `${ROS} — Feral Gargun Racial Traits (p. 92)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "stonechild",
    name: "Stonechild",
    ruleset: "core",
    source: `${ROS} — Chapter 4: Other Races, Stonechild Racial Traits (pp. 93–94)`,
    sourceUrl: ROS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Earth", "Extraplanar"],
    abilityModifiers: { str: 8, con: 8, int: 2, cha: -2 },
    favoredClass: "Fighter",
    levelAdjustment: 4,
    racialHitDice: 2,
    hitDie: "d8",
    naturalArmor: 4,
    traits: [
      {
        key: "stonechild-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${ROS} — Stonechild Racial Traits (p. 93)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "stonechild-proficiency",
        name: "Outsider Proficiency",
        description:
          "Stonechildren are proficient with all simple and martial weapons, with light and medium armor, and with shields (but not tower shields). Their racial Hit Dice give them one racial feat, plus Blind-Fight as a bonus feat.",
        category: "feat",
        source: `${ROS} — Stonechild Racial Traits (p. 93)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "stonechild-immunities",
        name: "Immunities and Natural Armor",
        description:
          "A stonechild is immune to acid and to poison. His rocky hide grants a +4 natural armor bonus (included as this race's natural armor).",
        category: "special-quality",
        source: `${ROS} — Stonechild Racial Traits (p. 93)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "stonechild-magic-stone",
        name: "Magic Stone (Sp)",
        description: "A stonechild can use magic stone three times per day, as a 3rd-level caster.",
        category: "special-attack",
        source: `${ROS} — Stonechild Racial Traits (p. 94)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "stonechild-racial-skills",
        name: "Racial Skills",
        description:
          "A stonechild's racial Hit Dice class skills are Appraise, Climb, Craft (stoneworking), Intimidate, Knowledge (history), Knowledge (the planes), Listen, Search, Spot, and Survival.",
        category: "trait",
        source: `${ROS} — Stonechild Racial Traits (p. 93)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "whisper-gnome",
    name: "Whisper Gnome",
    ruleset: "core",
    source: `${ROS} — Chapter 4: Other Races, Whisper Gnome Racial Traits (pp. 95–96)`,
    sourceUrl: ROS_PATH,
    size: "Small",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Gnome"],
    abilityModifiers: { dex: 2, con: 2, str: -2, cha: -2 },
    favoredClass: "Rogue",
    skillBonuses: { hide: 4, "move-silently": 4, listen: 2, spot: 2 },
    traits: [
      {
        key: "whisper-gnome-vision",
        name: "Low-Light Vision and Darkvision",
        description:
          "A whisper gnome can see twice as far as a human in conditions of poor illumination, and has darkvision out to 60 feet. His base land speed is 30 feet despite his Small size.",
        category: "special-quality",
        source: `${ROS} — Whisper Gnome Racial Traits (p. 96)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "whisper-gnome-weapon-familiarity",
        name: "Weapon Familiarity",
        description: "Whisper gnomes treat gnome hooked hammers as martial weapons rather than exotic weapons.",
        category: "trait",
        source: `${ROS} — Whisper Gnome Racial Traits (p. 96)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "whisper-gnome-combat-training",
        name: "Combat Training",
        description:
          "+1 racial bonus on attack rolls against kobolds and goblinoids, and a +4 dodge bonus to Armor Class against monsters of the giant type.",
        category: "trait",
        source: `${ROS} — Whisper Gnome Racial Traits (p. 96)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "whisper-gnome-stealth",
        name: "Stealthy",
        description:
          "+4 racial bonus on Hide and Move Silently checks and a +2 racial bonus on Listen and Spot checks (included in this race's skill bonuses).",
        category: "trait",
        source: `${ROS} — Whisper Gnome Racial Traits (p. 96)`,
        sourceUrl: ROS_PATH,
      },
      {
        key: "whisper-gnome-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "1/day — silence (must be centered on the whisper gnome's body). A whisper gnome with a Charisma of at least 10 also has: 1/day — ghost sound, mage hand, message. Caster level 1st; save DC 10 + the whisper gnome's Charisma modifier + spell level. The Extra Silence and Silencing Strike feats (Chapter 6) build on this racial silence ability.",
        category: "special-attack",
        source: `${ROS} — Whisper Gnome Racial Traits (p. 96)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
];
