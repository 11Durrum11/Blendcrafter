// Dragon Magazine #346 classes — integrated in the Dragon
// Magazine treatment program (issue #346 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-346/
// (MANIFEST.md / SCREENING.md / reference.md).
// Two scout variants (Light Cavalry, Sniper) and the six Sacred Path monk variants, staged as printed with the precedent flag and the drawn-not-granted note riding per the pack SCREENING.
// Records carry levels 1-10 progression rows on the class chassis
// with features at their true levels (prestige classes derive
// BAB/saves from their printed tables). Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

import type {
  ClassDefinition,
  ClassLevelProgressionRow,
  FeatureDefinition,
} from "@/engine/types";

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  level: number | undefined,
  source: string,
  sourceUrl: string,
): F {
  const base: F = {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl,
  };
  return level ? { ...base, levelsNeeded: level } : base;
}

interface RawFeature {
  name: string;
  description: string;
  level?: number;
}

interface RawClass {
  id: string;
  name: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression: string;
  goodSaves: string[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  features: RawFeature[];
}







const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";
const SRC_SCOUT = "Dragon Magazine #346 — Class Acts: Scout Feat and Options (Stefan Happ, with Paul Leach), pp. 86-87";
const SRC_SACRED = "Dragon Magazine #346 — Class Acts: Sacred Enforcers (Scott Fitzgerald Gray), pp. 90-91";

const SCOUT_PROGRESSION = [
  { level: 1, bab: 0, fort: 0, ref: 2, will: 0 },
  { level: 2, bab: 1, fort: 0, ref: 3, will: 0 },
  { level: 3, bab: 2, fort: 1, ref: 3, will: 1 },
  { level: 4, bab: 3, fort: 1, ref: 4, will: 1 },
  { level: 5, bab: 3, fort: 1, ref: 4, will: 1 },
  { level: 6, bab: 4, fort: 2, ref: 5, will: 2 },
  { level: 7, bab: 5, fort: 2, ref: 5, will: 2 },
  { level: 8, bab: 6, fort: 2, ref: 6, will: 2 },
  { level: 9, bab: 6, fort: 3, ref: 6, will: 3 },
  { level: 10, bab: 7, fort: 3, ref: 7, will: 3 },
];

// Scout class skills as the live scout record carries them, plus Disable
// Device: the article's own sidebar (p. 87, image-verified) prints the
// errata note that Disable Device is a class skill for scouts. See
// SCREENING.md §4.
const SCOUT_SKILLS = [
  "Balance",
  "Climb",
  "Craft",
  "Disable Device",
  "Escape Artist",
  "Hide",
  "Jump",
  "Knowledge (dungeoneering)",
  "Knowledge (geography)",
  "Knowledge (nature)",
  "Listen",
  "Move Silently",
  "Ride",
  "Search",
  "Sense Motive",
  "Speak Language",
  "Spot",
  "Survival",
  "Swim",
  "Tumble",
  "Use Rope",
];

const MONK_PROGRESSION = [
  { level: 1, bab: 0, fort: 2, ref: 2, will: 2 },
  { level: 2, bab: 1, fort: 3, ref: 3, will: 3 },
  { level: 3, bab: 2, fort: 3, ref: 3, will: 3 },
  { level: 4, bab: 3, fort: 4, ref: 4, will: 4 },
  { level: 5, bab: 3, fort: 4, ref: 4, will: 4 },
  { level: 6, bab: 4, fort: 5, ref: 5, will: 5 },
  { level: 7, bab: 5, fort: 5, ref: 5, will: 5 },
  { level: 8, bab: 6, fort: 6, ref: 6, will: 6 },
  { level: 9, bab: 6, fort: 6, ref: 6, will: 6 },
  { level: 10, bab: 7, fort: 7, ref: 7, will: 7 },
];

const MONK_SKILLS = [
  "Balance",
  "Climb",
  "Concentration",
  "Craft",
  "Diplomacy",
  "Escape Artist",
  "Hide",
  "Jump",
  "Knowledge (arcana)",
  "Knowledge (religion)",
  "Listen",
  "Move Silently",
  "Perform",
  "Profession",
  "Sense Motive",
  "Spot",
  "Swim",
  "Tumble",
];

// Retained scout features shared by both scout variant records (wording
// follows the live scout record's summaries of the Complete Adventurer
// features, trimmed to the shared chassis).
const SCOUT_CORE = [
  {
    name: "Trapfinding (Ex)",
    description:
      "As the scout class feature of the same name: the scout can use the Search skill to locate traps with a DC higher than 20 (including magical traps) and can use Disable Device to bypass a trap or disarm magic traps.",
    level: 1,
  },
  {
    name: "Battle Fortitude (Ex)",
    description:
      "As the scout class feature of the same name: a +1 competence bonus on Fortitude saves and initiative checks, increasing to +2 at 11th level and +3 at 20th level, lost while wearing medium or heavy armor or carrying a medium or heavy load.",
    level: 2,
  },
  {
    name: "Uncanny Dodge (Ex)",
    description:
      "As the scout class feature of the same name: the scout retains her Dexterity bonus to Armor Class even when flat-footed or struck by an invisible attacker, improving to improved uncanny dodge at higher scout levels as the base class.",
    level: 2,
  },
  {
    name: "Trackless Step (Ex)",
    description:
      "As the scout class feature of the same name: the scout leaves no trail in natural surroundings and cannot be tracked (she may choose to leave a trail if so desired).",
    level: 3,
  },
  {
    name: "Bonus Feat",
    description:
      "As the scout class feature of the same name: at 4th level and every four levels thereafter (8th, 12th, 16th, 20th), the scout gains a bonus feat from the scout bonus-feat list, meeting all prerequisites. The six new scout feats in the same Class Acts column (Acrobatic Skirmisher, Improved Acrobatic Skirmisher, Mounted Fighting, Passive Reconnoiter, Ranged Skirmisher, Scout the Path) are all selectable as scout bonus feats as printed.",
    level: 4,
  },
  {
    name: "Evasion (Ex)",
    description:
      "As the scout class feature of the same name: if exposed to any effect that normally allows a Reflex save for half damage, the scout takes no damage on a successful save, provided she wears light armor or no armor and carries no more than a light load.",
    level: 5,
  },
  {
    name: "Flawless Step (Ex)",
    description:
      "As the scout class feature of the same name: the scout can move through difficult terrain at her normal speed without taking damage or suffering other impairments, though magically manipulated terrain still affects her normally.",
    level: 6,
  },
  {
    name: "Blindsense (Ex)",
    description:
      "As the scout class feature of the same name: the scout gains blindsense out to 30 feet, improving to blindsight at 20th level as the base class.",
    level: 10,
  },
];

// Retained monk features shared by all six Sacred Path records.
const MONK_CORE = [
  {
    name: "Flurry of Blows (Ex)",
    description:
      "As the monk class feature of the same name, including greater flurry at 11th level — modified at 6th level by this path's bonus ability where the ability says so (see the path feature below).",
    level: 1,
  },
  {
    name: "Unarmed Strike",
    description:
      "As the monk class feature of the same name: the monk's unarmed attacks deal the unarmed damage of a monk of her level, may deal lethal or nonlethal damage at no penalty, and are treated as both manufactured and natural weapons for the purpose of spells and effects that enhance or improve weapons.",
    level: 1,
  },
  {
    name: "Evasion (Ex)",
    description:
      "As the monk class feature of the same name: if exposed to any effect that normally allows a Reflex save for half damage, the monk takes no damage on a successful save. Evasion can be used only if she is wearing light armor or no armor. A sacred enforcer who selects the Sacred Strike variant class feature (below) does not gain improved evasion, but keeps evasion.",
    level: 2,
  },
  {
    name: "Fast Movement (Ex)",
    description:
      "As the monk class feature of the same name: the monk gains an enhancement bonus to her land speed, as shown for a monk of her level, provided she is wearing no armor, not carrying a shield, and carrying no more than a light load.",
    level: 3,
  },
  {
    name: "Still Mind (Ex)",
    description:
      "As the monk class feature of the same name: a +2 bonus on saving throws against spells and effects from the school of enchantment. A sacred enforcer who selects the Unwavering Dedication variant class feature (below) does not gain still mind.",
    level: 3,
  },
  {
    name: "Ki Strike (Su)",
    description:
      "As the monk class feature of the same name: the monk's unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction at 4th level, as lawful weapons at 10th level, and as adamantine weapons at 16th level. A sacred enforcer who selects the Sacred Strike variant class feature (below) does not gain ki strike (magic) or any later improvements to it.",
    level: 4,
  },
  {
    name: "Slow Fall (Ex)",
    description:
      "As the monk class feature of the same name: the monk takes damage from a fall as if it were shorter by the distance shown for a monk of her level, provided she is within arm's reach of a wall.",
    level: 4,
  },
  {
    name: "Purity of Body (Ex)",
    description:
      "As the monk class feature of the same name: the monk gains immunity to all diseases except supernatural and magical diseases.",
    level: 5,
  },
  {
    name: "Wholeness of Body (Su)",
    description:
      "As the monk class feature of the same name: the monk can heal her own wounds, restoring a number of hit points per day equal to twice her monk level, divided as she chooses among multiple uses. A sacred enforcer who selects the Wholeness of Others variant class feature (below) does not gain wholeness of body.",
    level: 7,
  },
  {
    name: "Improved Evasion (Ex)",
    description:
      "As the monk class feature of the same name: the monk takes no damage on a successful Reflex save against an effect that allows a save for half damage, and takes only half damage even on a failed save. Not gained by a sacred enforcer who selected Sacred Strike.",
    level: 9,
  },
  {
    name: "Diamond Body (Su)",
    description:
      "As the monk class feature of the same name: the monk gains immunity to all poisons.",
    level: 11,
  },
  {
    name: "Diamond Soul (Ex)",
    description:
      "As the monk class feature of the same name: the monk gains spell resistance equal to her monk level + 10.",
    level: 13,
  },
  {
    name: "Timeless Body (Ex)",
    description:
      "As the monk class feature of the same name: the monk no longer takes penalties to her ability scores for aging and cannot be magically aged, though aging bonuses still accrue and she still dies of old age when her time is up.",
    level: 17,
  },
  {
    name: "Tongue of the Sun and Moon (Ex)",
    description:
      "As the monk class feature of the same name: the monk can speak with any living creature.",
    level: 17,
  },
  {
    name: "Perfect Self (Su)",
    description:
      "As the monk class feature of the same name: the monk becomes a magical creature, treated as an outsider (a native outsider) for the purpose of spells and magical effects, and gains damage reduction 10/magic.",
    level: 20,
  },
];

// The article's three sacred-enforcer variant class features, shared by
// all six paths; the Sacred Strike text is built per path because its
// sworn-enemies line differs by deity.
function sacredStrike(enemies: string) {
  return {
    name: "Sacred Strike (Optional Variant Feature)",
    description:
      "Optional variant class feature (Player's Handbook II shape), available to a sacred enforcer of this path at 4th level. Replaces: ki strike (magic) (and any later improvements to that class feature) and improved evasion. Benefit: when you attack with your deity's favored weapon, you may make a special smite attack against the sworn enemies of your faith a number of times per day equal to 1 + your Wisdom modifier (minimum once per day): add your Charisma bonus (if any) to the attack roll and deal 1 extra point of damage per monk level. If you smite a creature that is not an enemy of your faith, the smite has no effect and that use is spent. Sworn enemies for this path: " +
      enemies +
      ". At 10th level, the sacred strike also stuns an enemy of your faith for 1 round (Will save negates, DC 10 + 1/2 your monk level + your Wisdom modifier). At 16th level, it stuns as at 10th and also blinds the enemy for 1d8 rounds (no save for the blindness effect). Creatures immune to critical hits are immune to the stunning and blinding effects.",
    level: 4,
  };
}

const UNWAVERING = {
  name: "Unwavering Dedication (Optional Variant Feature)",
  description:
    "Optional variant class feature (Player's Handbook II shape), available to a sacred enforcer of this path at 3rd level. Replaces: still mind. Benefit: you can ignore the multiclass restrictions of the monk for some classes — taking levels in cleric, paladin, or blackguard (depending on your alignment) does not prevent you from taking monk levels; if you take levels in any other class, you lose your ability to progress as a monk as usual. Taking levels in monk does not prevent you from advancing as a paladin.",
  level: 3,
};

const WHOLENESS_OTHERS = {
  name: "Wholeness of Others (Optional Variant Feature)",
  description:
    "Optional variant class feature (Player's Handbook II shape), available to a sacred enforcer of this path at 7th level. Replaces: wholeness of body. Benefit: you can heal the wounds of others with a touch, healing a number of hit points of damage equal to twice your current class level each day, spread out among several uses and recipients as you choose. Each use is a standard action. You may not heal yourself with this ability. (Lost by an ex-sacred enforcer; see the Basics feature.)",
  level: 7,
};

function sacredPath(seed: {
  id: string;
  name: string;
  deity: string;
  basics: string;
  skillBonus: string;
  feat1: string;
  feat2: string;
  feat6: string;
  abilityName: string;
  ability: string;
  enemies: string;
}) {
  return {
    id: seed.id,
    name: seed.name,
    ruleset: "core",
    source: SRC_SACRED,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: MONK_PROGRESSION,
    classSkills: MONK_SKILLS,
    features: [
      { name: seed.name + " Basics", description: seed.basics, level: 1 },
      {
        name: "Sacred Path Fighting Style",
        description:
          "A sacred enforcer's training departs from a standard monk's training (the fighting-style chassis of Unearthed Arcana, p. 52). In exchange for the freedom to choose her bonus feats, a monk who takes this style gains a +2 bonus on a specific skill at 1st level (" +
          seed.skillBonus +
          ") and fixed bonus feats at 1st (" +
          seed.feat1 +
          "), 2nd (" +
          seed.feat2 +
          "), and 6th (" +
          seed.feat6 +
          ") level; at 6th level she can gain an additional ability if she meets its prerequisites (she must meet the prerequisites at 6th level to gain the ability). She need not have any of the prerequisites normally required for the style's feats to select them. A monk must have the same alignment as her deity in order to follow her deity's sacred path.",
        level: 1,
      },
      ...MONK_CORE,
      UNWAVERING,
      sacredStrike(seed.enemies),
      { name: seed.abilityName, description: seed.ability, level: 6 },
      WHOLENESS_OTHERS,
    ],
  };
}

const SACRED_BASICS_TAIL =
  " Weapon and Armor Proficiency: as the monk (proficient with club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling; not proficient with any armor or shields; AC bonus and fast movement are lost when wearing armor, carrying a shield, or carrying a medium or heavy load). Ex-Sacred Enforcers: a sacred enforcer who becomes nonlawful or abandons her deity cannot gain further levels in this class; she loses her sacred strike and wholeness of others abilities, and retains all other class abilities. Key abilities: Wisdom, Dexterity, and Strength. ⚠️ APOC SCREENING (see the pack's SCREENING.md §1): staged with a flag for Shaun's ruling under the mixed monk-variant precedent, and the patron-deity framing is subject to APOC's drawn-not-granted power note — the mechanics are carried as printed.";

const RAW: RawClass[] = [
  {
    id: "light-cavalry-scout",
    name: "Light Cavalry (Scout Variant)",
    ruleset: "core",
    source: SRC_SCOUT,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: SCOUT_PROGRESSION,
    classSkills: SCOUT_SKILLS,
    features: [
      {
        name: "Light Cavalry Scout Basics",
        description:
          "A variant class feature for the scout (Complete Adventurer), chosen with the DM's permission in the manner of the variant class features of Player's Handbook II. Light cavalry scouts are the vanguard of large military forces — reconnoitering the path ahead, marking traps for sappers, securing campsites, and riding picket. The variant trades some of the scout's speed and stealth for a specially bonded mount, and transfers some of the scout's abilities to the mount. Unless a feature below says otherwise, the light cavalry scout advances as a scout of the same level (same Hit Die, base attack bonus, saving throws, skill points, and class skills — including Disable Device, per the errata note printed with the article). Weapon and armor proficiencies: as the scout (all simple weapons plus the handaxe, throwing axe, short sword, and shortbow; light armor, but not shields). Key abilities: Dexterity, Strength, Constitution, and Wisdom.",
        level: 1,
      },
      {
        name: "Skirmish (Ex)",
        description:
          "As the scout class feature of the same name: +1d6 extra damage on all attacks made during any round in which the scout moves at least 10 feet (only on her own turn), increasing to +2d6 at 5th level, +3d6 at 9th, +4d6 at 13th, and +5d6 at 17th; from 3rd level a +1 dodge bonus to Armor Class during such rounds, increasing as the base scout. It applies only against living creatures with a discernible anatomy, ranged skirmish only within 30 feet, and is lost in medium or heavy armor or with a medium or heavy load.",
        level: 1,
      },
      ...SCOUT_CORE,
      {
        name: "Special Mount (Ex)",
        description:
          "The light cavalry variant class feature. Level: 5th. Replaces: fast movement (normally gained at 3rd level and improved at 11th level), camouflage (normally gained at 8th level), hide in plain sight (normally gained at 14th level), and free movement (normally gained at 18th level) — the scout does not gain those features. Benefit: at 5th level, the scout gains a special mount as a paladin of her scout level, with a few minor changes. The mount must be fast, and most are relatively small members of their species (that is, without advancement via Hit Dice). The mount gives up share spells (normally gained when its master is 5th level) and command creatures of its kind (normally gained when its master is 11th level); in exchange, the mount gains fast movement (+10 feet at 5th level and +20 feet at 11th level), trackless step (as the scout ability, at 11th level), and free movement (as the scout ability, at 15th level).",
        level: 5,
      },
    ],
  },
  {
    id: "sniper-scout",
    name: "Sniper (Scout Variant)",
    ruleset: "core",
    source: SRC_SCOUT,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: SCOUT_PROGRESSION,
    classSkills: SCOUT_SKILLS,
    features: [
      {
        name: "Sniper Scout Basics",
        description:
          "A variant class feature for the scout (Complete Adventurer), chosen with the DM's permission in the manner of the variant class features of Player's Handbook II. The sniper does not specialize in close-quarters skirmishing but stalks her targets from afar, preferring a precise, potentially lethal shot from the most extreme reaches her weapon allows while remaining well hidden; she gives up extra damage in melee and a bonus to Armor Class to gain that extra damage from a distance. Unless a feature below says otherwise, the sniper scout advances as a scout of the same level (same Hit Die, base attack bonus, saving throws, skill points, and class skills — including Disable Device, per the errata note printed with the article). Weapon and armor proficiencies: as the scout (all simple weapons plus the handaxe, throwing axe, short sword, and shortbow; light armor, but not shields). Key abilities: Dexterity, Strength, Constitution, and Wisdom.",
        level: 1,
      },
      {
        name: "Precise Shot (Ex)",
        description:
          "The sniper variant class feature. Level: 1st. Replaces: the skirmish ability (normally gained at 1st level) and fast movement (normally gained at 3rd level and improved at 11th level) — the scout does not gain those features. Benefit: at 1st level, the sniper gains the ability to make precise shots at long range. As a full-round action she can make a precise shot against a target farther than 60 feet away; she cannot move (even a 5-foot step) in the round she takes the shot. If she hits, she deals an extra 1d6 points of damage. The extra damage applies only to attacks made with a missile weapon, such as a bow or crossbow, and increases by 1d6 for every four levels gained above 1st (2d6 at 5th, 3d6 at 9th, 4d6 at 13th, and 5d6 at 17th level). The extra damage only applies against living creatures with a discernible anatomy — undead, constructs, oozes, plants, incorporeal creatures, and creatures immune to extra damage from critical hits are not vulnerable to it. The sniper must be able to see the target well enough to pick a vital spot: if it has any form of cover or concealment she cannot use this ability against it.",
        level: 1,
      },
      ...SCOUT_CORE,
      {
        name: "Camouflage (Ex)",
        description:
          "As the scout class feature of the same name: the scout can use the Hide skill in any sort of natural terrain, even if the terrain doesn't grant cover or concealment.",
        level: 8,
      },
      {
        name: "Hide in Plain Sight (Ex)",
        description:
          "As the scout class feature of the same name: while in any sort of natural terrain, the scout can use the Hide skill even while being observed.",
        level: 14,
      },
      {
        name: "Free Movement (Ex)",
        description:
          "As the scout class feature of the same name: the scout has a continuous freedom of movement effect, as the spell, lost in medium or heavy armor or with a medium or heavy load.",
        level: 18,
      },
    ],
  },
  sacredPath({
    id: "sacred-path-heironeous",
    name: "Sacred Path of Heironeous (Monk Variant)",
    deity: "Heironeous",
    basics:
      "A sacred enforcer monk of Heironeous, god of valor — untiring in faith and relentless in hunting down those who oppose it. Sacred enforcers are the covert monastic defenders and faithful spies a lawful church turns to when clerics and paladins cannot operate inconspicuously. This record is a variant monk following the sacred path fighting style of Heironeous: same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills as the monk, with the style's fixed bonus feats and 6th-level bonus ability in place of the monk's freedom to choose bonus feats. A monk must have the same alignment as her deity (lawful good) to follow this path." +
      SACRED_BASICS_TAIL,
    skillBonus: "Diplomacy",
    feat1: "Endurance",
    feat2: "Negotiator",
    feat6: "Weapon Specialization (longsword)",
    abilityName: "Longsword Flurry (6th-Level Bonus Ability)",
    ability:
      "The sacred path of Heironeous's 6th-level bonus ability: when making a flurry of blows attack, you may use a longsword as a monk special weapon. Prerequisites (which must be met at 6th level to gain this ability): Diplomacy 4 ranks, proficient with the longsword.",
    enemies: "all evil creatures",
  }),
  sacredPath({
    id: "sacred-path-hextor",
    name: "Sacred Path of Hextor (Monk Variant)",
    deity: "Hextor",
    basics:
      "A sacred enforcer monk of Hextor, god of tyranny, whose ruthlessness frightens even the faithful. Sacred enforcers are the covert monastic defenders and faithful spies a lawful church turns to when clerics and paladins cannot operate inconspicuously. This record is a variant monk following the sacred path fighting style of Hextor: same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills as the monk, with the style's fixed bonus feats and 6th-level bonus ability in place of the monk's freedom to choose bonus feats. A monk must have the same alignment as her deity (lawful evil) to follow this path." +
      SACRED_BASICS_TAIL,
    skillBonus: "Intimidate",
    feat1: "Endurance",
    feat2: "Persuasive",
    feat6: "Weapon Specialization (flail)",
    abilityName: "Flail Flurry (6th-Level Bonus Ability)",
    ability:
      "The sacred path of Hextor's 6th-level bonus ability: when making a flurry of blows attack, you may use a flail as a monk special weapon. Prerequisites (which must be met at 6th level to gain this ability): Intimidate 4 ranks, proficient with the flail.",
    enemies: "all good creatures",
  }),
  sacredPath({
    id: "sacred-path-moradin",
    name: "Sacred Path of Moradin (Monk Variant)",
    deity: "Moradin",
    basics:
      "A sacred enforcer monk of Moradin — so strong is faith in dwarven culture that most of the few dwarven monks follow the sacred enforcer path. Only dwarves may follow the sacred path of Moradin. Sacred enforcers are the covert monastic defenders and faithful spies a lawful church turns to when clerics and paladins cannot operate inconspicuously. This record is a variant monk following the sacred path fighting style of Moradin: same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills as the monk, with the style's fixed bonus feats and 6th-level bonus ability in place of the monk's freedom to choose bonus feats. A monk must have the same alignment as her deity (lawful good) to follow this path." +
      SACRED_BASICS_TAIL,
    skillBonus: "Balance",
    feat1: "Improved Sunder",
    feat2: "Cleave",
    feat6: "Diehard",
    abilityName: "Warhammer Sunder (6th-Level Bonus Ability)",
    ability:
      "The sacred path of Moradin's 6th-level bonus ability: when you make a sunder attack with a warhammer, you deal extra damage equal to half your monk level. Prerequisites (which must be met at 6th level to gain this ability): Balance 9 ranks, proficient with the warhammer.",
    enemies: "all evil creatures",
  }),
  sacredPath({
    id: "sacred-path-st-cuthbert",
    name: "Sacred Path of St. Cuthbert (Monk Variant)",
    deity: "St. Cuthbert",
    basics:
      "A sacred enforcer monk of St. Cuthbert, dedicated to swift and decisive retribution. Sacred enforcers are the covert monastic defenders and faithful spies a lawful church turns to when clerics and paladins cannot operate inconspicuously. This record is a variant monk following the sacred path fighting style of St. Cuthbert: same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills as the monk, with the style's fixed bonus feats and 6th-level bonus ability in place of the monk's freedom to choose bonus feats. A monk must have the same alignment as her deity (lawful neutral) to follow this path." +
      SACRED_BASICS_TAIL,
    skillBonus: "Survival",
    feat1: "Track",
    feat2: "Alertness",
    feat6: "Power Attack",
    abilityName: "Mark of Retribution (6th-Level Bonus Ability)",
    ability:
      "The sacred path of St. Cuthbert's 6th-level bonus ability: whenever you roll a natural 20 on an attack roll (regardless of whether the attack eventually becomes a critical hit), you strike a blow with such precision that it leaves a small mark on your target. A target bearing this mark takes a -1 penalty on saving throws and a -1 penalty to its Armor Class for a number of rounds equal to one-half your monk level. Prerequisites (which must be met at 6th level to gain this ability): Survival 4 ranks, Spot 9 ranks.",
    enemies: "all chaotic creatures",
  }),
  sacredPath({
    id: "sacred-path-wee-jas",
    name: "Sacred Path of Wee Jas (Monk Variant)",
    deity: "Wee Jas",
    basics:
      "A sacred enforcer monk of Wee Jas, goddess of death and magic, who frequently utilizes the latter portfolio to bring about the former. Sacred enforcers are the covert monastic defenders and faithful spies a lawful church turns to when clerics and paladins cannot operate inconspicuously. This record is a variant monk following the sacred path fighting style of Wee Jas: same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills as the monk, with the style's fixed bonus feats and 6th-level bonus ability in place of the monk's freedom to choose bonus feats. A monk must have the same alignment as her deity (lawful neutral) to follow this path." +
      SACRED_BASICS_TAIL,
    skillBonus: "Use Magic Device",
    feat1: "Improved Initiative",
    feat2: "Skill Focus (Use Magic Device)",
    feat6: "Blind-Fight",
    abilityName: "Arcane Knack (6th-Level Bonus Ability)",
    ability:
      "The sacred path of Wee Jas's 6th-level bonus ability: you gain a bonus on Use Magic Device checks equal to one-half your monk level. Prerequisites (which must be met at 6th level to gain this ability): Use Magic Device 4 ranks, Knowledge (religion) 9 ranks.",
    enemies: "all chaotic creatures",
  }),
  sacredPath({
    id: "sacred-path-yondalla",
    name: "Sacred Path of Yondalla (Monk Variant)",
    deity: "Yondalla",
    basics:
      "A sacred enforcer monk of Yondalla, whose role as protector sees her sacred enforcers serving as roaming wardens among halfling communities. Only halflings may follow the sacred path of Yondalla. Sacred enforcers are the covert monastic defenders and faithful spies a lawful church turns to when clerics and paladins cannot operate inconspicuously. This record is a variant monk following the sacred path fighting style of Yondalla: same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills as the monk, with the style's fixed bonus feats and 6th-level bonus ability in place of the monk's freedom to choose bonus feats. A monk must have the same alignment as her deity (lawful good) to follow this path." +
      SACRED_BASICS_TAIL,
    skillBonus: "Jump",
    feat1: "Improved Initiative",
    feat2: "Weapon Finesse",
    feat6: "Mobility",
    abilityName: "Flurry Warding (6th-Level Bonus Ability)",
    ability:
      "The sacred path of Yondalla's 6th-level bonus ability: whenever you attack with a flurry of blows you gain a +1 bonus on all saving throws until the beginning of your next turn. Prerequisites (which must be met at 6th level to gain this ability): Jump 9 ranks, Dodge.",
    enemies: "all evil creatures",
  }),
];

export const DRAGON_346_CLASSES: ClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as ClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: c.babProgression as ClassDefinition["babProgression"],
  goodSaves: c.goodSaves as ClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
