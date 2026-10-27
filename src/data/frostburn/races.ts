/**
 * Frostburn race data pack: the playable races of Frostburn
 * (Wizards of the Coast) — neanderthal, uldra, frost folk, glacier
 * dwarf, and snow goblin. Built 2026-10-27 from the copy in
 * Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Frostburn.pdf
 *
 * Frostburn is a generic D&D 3.5 supplement, not a separate
 * setting, so these records carry ruleset "core".
 *
 * Neanderthal and uldra are the Chapter 2 races. Frost folk,
 * glacier dwarves, and snow goblins are Chapter 6 monsters whose
 * "as characters" sections print complete, standalone racial
 * trait lists, so they are converted the same way. The tundra
 * halfling (p. 36) is NOT converted: the book prints it only as
 * a delta on the Player's Handbook halfling ("same racial traits
 * ... but with the following exceptions"), not as a standalone
 * trait list. The book's Chapter 2 treatments of the other PHB
 * races likewise describe the core races and are not duplicated.
 */
import type { RaceDefinition } from "@/engine/types";

const FB = "Frostburn";
const FB_PATH = "/A POC PC related/5.Splat/Frostburn.pdf";
const CH2 = `${FB} — Chapter 2: Races, Classes, and Feats`;
const CH6 = `${FB} — Chapter 6: Monsters of the Frostfell`;

export const FROSTBURN_RACES: RaceDefinition[] = [
  {
    id: "neanderthal",
    name: "Neanderthal",
    ruleset: "core",
    source: `${CH2} — Neanderthal Racial Traits (pp. 37–38)`,
    sourceUrl: FB_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human"],
    abilityModifiers: { str: 2, con: 2, dex: -2, int: -2 },
    favoredClass: "Barbarian",
    levelAdjustment: 0,
    skillBonuses: { listen: 2, spot: 2, survival: 2 },
    traits: [
      {
        key: "neanderthal-primitive-weapon-mastery",
        name: "Primitive Weapon Mastery (Ex)",
        description:
          "+1 racial bonus on attack rolls made with the following weapons: bolas, club, dart, greatclub, goad, harpoon, iuak, javelin, longspear, quarterstaff, ritiik, shortbow, shortspear, sling, spear, sugliin, throwing axe, and tigerskull club.",
        category: "trait",
        source: `${CH2} — Neanderthal Racial Traits (p. 37)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "neanderthal-keen-senses",
        name: "Keen Senses",
        description: "+2 racial bonus on Listen, Spot, and Survival checks (included in this race's skill bonuses).",
        category: "trait",
        source: `${CH2} — Neanderthal Racial Traits (p. 37)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "neanderthal-climate-tolerant",
        name: "Climate Tolerant (Ex)",
        description:
          "Neanderthals suffer little harm from environmental extremes of heat or cold: they do not have to make Fortitude saves in extreme environments between –20° and 140° F (severe cold to severe heat). This ability provides no protection from fire or cold damage, but it counts as the Cold Endurance feat for purposes of fulfilling prerequisites for other feats or prestige classes.",
        category: "special-quality",
        source: `${CH2} — Neanderthal Racial Traits (pp. 37–38)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "neanderthal-human-blood",
        name: "Human Blood",
        description:
          "For all effects related to race, a neanderthal is considered a human: he is as vulnerable to special effects that affect humans as humans are, and can use magic items that are only usable by humans.",
        category: "trait",
        source: `${CH2} — Neanderthal Racial Traits (p. 38)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "neanderthal-illiteracy",
        name: "Illiteracy",
        description:
          "Neanderthals do not automatically know how to read and write; a neanderthal must spend 2 skill points to gain the ability to read and write all languages he is able to speak. He does not automatically gain literacy when taking a nonbarbarian class, with the exception of the wizard class. Automatic languages: Common. Bonus languages: Dwarven, Giant, Orc.",
        category: "trait",
        source: `${CH2} — Neanderthal Racial Traits (p. 38)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "uldra",
    name: "Uldra",
    ruleset: "core",
    source: `${CH2} — Uldra Racial Traits (pp. 39–40)`,
    sourceUrl: FB_PATH,
    size: "Small",
    baseSpeed: 20,
    type: "Fey",
    subtypes: [],
    abilityModifiers: { str: -2, con: 2, wis: 2 },
    favoredClass: "Druid",
    levelAdjustment: 1,
    skillBonuses: { "knowledge-nature": 2 },
    traits: [
      {
        key: "uldra-darkvision",
        name: "Darkvision",
        description: "Uldras can see in the dark up to 120 feet. Darkvision is black and white only, but is otherwise like normal sight.",
        category: "special-quality",
        source: `${CH2} — Uldra Racial Traits (p. 39)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "uldra-low-light-vision",
        name: "Low-Light Vision",
        description: "An uldra can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination, retaining the ability to distinguish color and detail.",
        category: "special-quality",
        source: `${CH2} — Uldra Racial Traits (p. 39)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "uldra-nature-scholar",
        name: "Nature Scholar (Ex)",
        description:
          "Knowledge (nature) is always a class skill for uldras, and they gain a +2 racial bonus on all Knowledge (nature) checks (included in this race's skill bonuses). The Speak Language skill is likewise always a class skill for uldras, who are gifted linguists (bonus languages: all).",
        category: "trait",
        source: `${CH2} — Uldra Racial Traits (pp. 39–40)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "uldra-cold-resistance",
        name: "Cold Resistance (Ex)",
        description:
          "Uldras are completely at home in freezing environments and suffer no harm from being in a cold environment; an uldra's equipment is likewise protected. Against attacks that cause cold damage, an uldra possesses resistance to cold 5.",
        category: "special-quality",
        source: `${CH2} — Uldra Racial Traits (p. 40)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "uldra-frosty-touch",
        name: "Frosty Touch (Su)",
        description:
          "Uldras are supernaturally cold and can infuse their hands with cold energy as a free action. While their hands are frosty, their unarmed attacks deal an additional 1 point of cold damage, and any melee weapon an uldra wields deals an additional 1 point of cold damage on a successful hit while he continues to hold it. This damage does not stack with a magic weapon's own ability to deal cold damage.",
        category: "special-attack",
        source: `${CH2} — Uldra Racial Traits (p. 40)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "uldra-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "3/day — ray of frost; 1/day — speak with animals, touch of fatigue. Caster level equals the uldra's Hit Dice; the save DCs are Wisdom-based.",
        category: "special-attack",
        source: `${CH2} — Uldra Racial Traits (p. 40)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "uldra-fey-blood",
        name: "Fey Blood",
        description:
          "Uldras are fey, and as such are not subject to spells that specifically target humanoids, such as charm person or hold person; effects that affect fey affect uldras as well. They have no particular weakness against cold iron, though they find it uncomfortable to the touch. Automatic languages: Common and Sylvan.",
        category: "trait",
        source: `${CH2} — Uldra Racial Traits (p. 40)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "frost-folk",
    name: "Frost Folk",
    ruleset: "core",
    source: `${CH6} — Frost Folk as Player Characters (pp. 130–131)`,
    sourceUrl: FB_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: ["Cold"],
    abilityModifiers: { str: 4, dex: 2, con: 2, cha: -2 },
    favoredClass: "Barbarian",
    levelAdjustment: 1,
    racialHitDice: 4,
    hitDie: "d8",
    naturalArmor: 2,
    traits: [
      {
        key: "frost-folk-racial-hit-dice",
        name: "Racial Hit Dice and Skills",
        description:
          "A frost folk begins with four levels of monstrous humanoid (4d8 Hit Dice, base attack bonus +4, base saves Fort +1, Ref +4, Will +4), which give skill points equal to 7 × (2 + Int modifier) and two feats. Its racial class skills are Climb, Hide, Listen, Move Silently, Spot, and Survival. Frost folk have a +8 racial bonus on Hide checks in snow and ice terrain (conditional, so not included in this race's skill bonuses).",
        category: "trait",
        source: `${CH6} — Frost Folk as Player Characters (pp. 130–131)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "frost-folk-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${CH6} — Frost Folk as Player Characters (p. 130)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "frost-folk-ice-blast",
        name: "Ice Blast (Su)",
        description:
          "A frost folk can blast a 20-foot cone of cold from its eyes, dealing 2d6 points of cold damage (Reflex save for half; the save DC is Constitution-based). A frost folk must wait 1d4 rounds between ice blasts.",
        category: "special-attack",
        source: `${CH6} — Frost Folk as Player Characters (p. 131)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "frost-folk-snowsight",
        name: "Snowsight (Ex)",
        description: "A frost folk can see through snow, ice, and magical cold effects without penalty, including whiteout conditions.",
        category: "special-quality",
        source: `${CH6} — Frost Folk as Player Characters (p. 131)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "frost-folk-cold-subtype",
        name: "Cold Subtype",
        description:
          "Frost folk have the cold subtype: immunity to cold damage and vulnerability to fire (half again as much fire damage, +50%). They are proficient with the battleaxe and composite longbow, as well as all simple weapons, and with light armor and shields. Automatic languages: Common. Bonus languages: Auran, Draconic, Dwarven, Giant, Goblin, Orc.",
        category: "trait",
        source: `${CH6} — Frost Folk as Player Characters (p. 131)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "glacier-dwarf",
    name: "Glacier Dwarf",
    ruleset: "core",
    source: `${CH6} — Glacier Dwarves as Characters (pp. 122–123)`,
    sourceUrl: FB_PATH,
    size: "Medium",
    baseSpeed: 20,
    type: "Humanoid",
    subtypes: ["Dwarf"],
    abilityModifiers: { con: 2, cha: -2 },
    favoredClass: "Fighter",
    levelAdjustment: 0,
    traits: [
      {
        key: "glacier-dwarf-darkvision",
        name: "Darkvision",
        description:
          "Darkvision out to 60 feet. A glacier dwarf's base land speed is 20 feet, but he can move at this speed even when wearing medium or heavy armor or carrying a medium or heavy load.",
        category: "special-quality",
        source: `${CH6} — Glacier Dwarves as Characters (p. 122)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "glacier-dwarf-icecunning",
        name: "Icecunning",
        description:
          "Glacier dwarves gain a +2 racial bonus on Search checks to notice unusual construction or hazards in ice or snow. A glacier dwarf who merely comes within 10 feet of unusual construction or hazards in ice or snow can make a Search check as if actively searching, and can use Search to find ice or snow traps as a rogue can (conditional, so not included in this race's skill bonuses).",
        category: "trait",
        source: `${CH6} — Glacier Dwarves as Characters (p. 122)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "glacier-dwarf-weapon-familiarity",
        name: "Weapon Familiarity and Stability",
        description:
          "Glacier dwarves treat dwarven waraxes and dwarven urgroshes as martial weapons rather than exotic weapons. They are exceptionally stable on their feet: +4 bonus on ability checks to resist being bull rushed or tripped while standing on the ground.",
        category: "trait",
        source: `${CH6} — Glacier Dwarves as Characters (p. 122)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "glacier-dwarf-cold-tolerant",
        name: "Cold-Tolerant",
        description:
          "+2 racial bonus on saving throws against cold damage and cold effects. Glacier dwarves can exist comfortably in conditions from severe cold to hot. Unlike standard dwarves, glacier dwarves have no special resistance to poison; like them, they gain a +2 racial saving throw bonus against spells and spell-like effects.",
        category: "special-quality",
        source: `${CH6} — Glacier Dwarves as Characters (p. 123)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "glacier-dwarf-combat-training",
        name: "Combat Training and Skills",
        description:
          "+1 racial bonus on attack rolls against orcs (including half-orcs) and goblinoids, and a +4 dodge bonus to Armor Class against creatures of the giant type. +2 racial bonus on Appraise and Craft checks related to snow, ice, or special frostfell materials (conditional, so not included in this race's skill bonuses). Automatic languages: Common, Dwarven. Bonus languages: Giant, Gnome, Goblin, Orc, Terran, Undercommon.",
        category: "trait",
        source: `${CH6} — Glacier Dwarves as Characters (p. 123)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "snow-goblin",
    name: "Snow Goblin",
    ruleset: "core",
    source: `${CH6} — Snow Goblins as Characters (p. 137)`,
    sourceUrl: FB_PATH,
    size: "Small",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Goblinoid"],
    abilityModifiers: { dex: 2, int: -2, cha: -2 },
    favoredClass: "Fighter",
    levelAdjustment: 1,
    naturalArmor: 1,
    skillBonuses: { climb: 8, intimidate: 4, "move-silently": 4 },
    traits: [
      {
        key: "snow-goblin-climb",
        name: "Climb Speed",
        description:
          "Snow goblins have a climb speed of 20 feet and a +8 racial bonus on Climb checks (included in this race's skill bonuses), and can always choose to take 10 on Climb checks, even if rushed or threatened.",
        category: "special-quality",
        source: `${CH6} — Snow Goblins as Characters (p. 137)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "snow-goblin-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet. The +1 natural armor bonus in this record is taken from the snow goblin stat block (p. 136); the trait list does not restate it.",
        category: "special-quality",
        source: `${CH6} — Snow Goblins as Characters (p. 137)`,
        sourceUrl: FB_PATH,
      },
      {
        key: "snow-goblin-booming-voice",
        name: "Booming Voice (Ex)",
        description:
          "Snow goblins can be heard over great distances, and their powerful voices can be quite intimidating: +4 racial bonus on Intimidate checks, and a +4 racial bonus on Move Silently checks (both included in this race's skill bonuses). Automatic languages: Common, Goblin. Bonus languages: Draconic, Giant, Orc.",
        category: "trait",
        source: `${CH6} — Snow Goblins as Characters (p. 137)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
];
