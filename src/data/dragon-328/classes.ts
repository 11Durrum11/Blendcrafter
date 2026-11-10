// Dragon Magazine #328 (Feb 2005) variant classes — integrated in
// the Dragon Magazine treatment program (issue #328 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-328/
// (MANIFEST.md / SCREENING.md / reference.md).
// Two Class Acts variants: the Storm Druid (Richard Farrese, p. 87)
// — a full variant druid on the druid chassis (timeless body prints
// at 14th level in this article, staged as printed) — and the
// Domain Paladin (Cristo Yanez, p. 90) — the article's "Paladin
// Domains" optional rule staged as a variant class on the paladin
// chassis (gives up turn undead, printed "at 3rd level," staged as
// printed; gains one paladin domain's granted power, no domain
// spells). Records: levels 1-10 progression rows on the parent
// chassis, features carrying their true levels.
// Feature descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced.

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
const SRC_STORM = "Dragon Magazine #328 — Class Acts: The Storm Druid (Richard Farrese), p. 87";
const SRC_PALADIN = "Dragon Magazine #328 — Class Acts: Paladin Domains (Cristo Yanez), p. 90";

const DRUID_PROGRESSION = [
  { level: 1, bab: 0, fort: 2, ref: 0, will: 2 },
  { level: 2, bab: 1, fort: 3, ref: 0, will: 3 },
  { level: 3, bab: 2, fort: 3, ref: 1, will: 3 },
  { level: 4, bab: 3, fort: 4, ref: 1, will: 4 },
  { level: 5, bab: 3, fort: 4, ref: 1, will: 4 },
  { level: 6, bab: 4, fort: 5, ref: 2, will: 5 },
  { level: 7, bab: 5, fort: 5, ref: 2, will: 5 },
  { level: 8, bab: 6, fort: 6, ref: 2, will: 6 },
  { level: 9, bab: 6, fort: 6, ref: 3, will: 6 },
  { level: 10, bab: 7, fort: 7, ref: 3, will: 7 },
];

const DRUID_SKILLS = [
  "Concentration",
  "Craft",
  "Diplomacy",
  "Handle Animal",
  "Heal",
  "Knowledge (nature)",
  "Listen",
  "Profession",
  "Ride",
  "Spellcraft",
  "Spot",
  "Survival",
  "Swim",
];

const PALADIN_PROGRESSION = [
  { level: 1, bab: 1, fort: 2, ref: 0, will: 0 },
  { level: 2, bab: 2, fort: 3, ref: 0, will: 0 },
  { level: 3, bab: 3, fort: 3, ref: 1, will: 1 },
  { level: 4, bab: 4, fort: 4, ref: 1, will: 1 },
  { level: 5, bab: 5, fort: 4, ref: 1, will: 1 },
  { level: 6, bab: 6, fort: 5, ref: 2, will: 2 },
  { level: 7, bab: 7, fort: 5, ref: 2, will: 2 },
  { level: 8, bab: 8, fort: 6, ref: 2, will: 2 },
  { level: 9, bab: 9, fort: 6, ref: 3, will: 3 },
  { level: 10, bab: 10, fort: 7, ref: 3, will: 3 },
];

const PALADIN_SKILLS = [
  "Concentration",
  "Craft",
  "Diplomacy",
  "Handle Animal",
  "Heal",
  "Knowledge (nobility and royalty)",
  "Knowledge (religion)",
  "Profession",
  "Ride",
  "Sense Motive",
];

const RAW: RawClass[] = [
  {
    id: "storm-druid",
    name: "Storm Druid",
    ruleset: "core",
    source: SRC_STORM,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: DRUID_PROGRESSION,
    classSkills: DRUID_SKILLS,
    features: [
      {
        name: "Storm Druid Basics",
        description:
          "A storm druid is a variant druid: unless otherwise noted she advances in the same manner as a regular druid (same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills), and she keeps the druid's spellcasting. When a character elects to take a level of druid or storm druid, she may not later take levels in the other class, preventing the character from gaining the benefits of a 1st-level druid twice. Storm druids are almost universally chaotic neutral. She retains nature sense (1st level), resist nature's lure (4th level), venom immunity (9th level), a thousand faces (13th level), and timeless body (14th level as printed in this article), and loses all other druid class abilities, including wild shape and acquiring an animal companion.",
        level: 1,
      },
      {
        name: "Spells",
        description:
          "A storm druid casts divine spells, prepared ahead of time from the druid spell list, exactly as a druid does; her spellcasting ability is Wisdom.",
        level: 1,
      },
      {
        name: "Spontaneous Casting",
        description:
          "Unlike typical druids, the storm druid does not channel stored spell energy into summon nature's ally spells. Instead, she can 'lose' a prepared spell (of equal or higher level) to cast a spell from the following list, provided she can cast spells of the appropriate level: 1st — obscuring mist; 2nd — gust of wind; 3rd — call lightning; 4th — air walk; 5th — call lightning storm; 6th — chain lightning; 7th — control weather; 8th — whirlwind; 9th — storm of vengeance.",
        level: 1,
      },
      {
        name: "Nature Sense (Ex)",
        description:
          "Retained from the druid: a storm druid gains a +2 bonus on Knowledge (nature) and Survival checks.",
        level: 1,
      },
      {
        name: "Deafness Immunity (Su)",
        description:
          "At 1st level, the storm druid becomes totally immune to deafness, magical or otherwise.",
        level: 1,
      },
      {
        name: "Frightful Presence (Ex)",
        description:
          "A storm druid of 2nd level or higher can unsettle animals with her mere presence: the ability takes effect whenever the druid attacks or charges, and animals within a radius of 30 feet are subject to the effect if they have fewer HD than the druid. A potentially affected animal that succeeds on a Will save (DC 10 + 1/2 druid level + the druid's Charisma modifier) remains immune to that druid's frightful presence for 24 hours; on a failed save, the animal becomes shaken for 4d6 rounds. Animal companions and familiars of the storm druid's allies ignore her frightful presence. At 8th level, the storm druid's frightful presence also affects magical beasts, fey, and vermin; at 16th level, it affects creatures of all types.",
        level: 2,
      },
      {
        name: "Thunder Strike (Su)",
        description:
          "Once per day, a storm druid of 2nd level or higher can discharge a powerful electrical jolt that also creates a thunderclap with a successful melee attack; she must declare her intent to use this ability before she makes her attack. If successful, she deals an additional 1d6 points of electricity damage and forces her opponent to make a Fortitude save (DC 10 + 1/2 storm druid level + her Constitution modifier) or become deafened for 3d6 rounds. A failed attack still consumes one use of this ability. She can use this ability once per day at 2nd level, and one additional time per day at 6th, 11th, 15th, and 20th level, and it cannot be used more than once per round. At 11th level the electrical damage increases to 2d6; at 15th level the deafness caused by this ability is permanent; at 20th level the electrical damage increases to 4d6.",
        level: 2,
      },
      {
        name: "Wind Sense (Ex)",
        description:
          "The storm druid learns to read air currents and instinctively reacts to slight shifts in the wind, such as those created by a moving object or spell effect: at 3rd level she gains a +1 insight bonus on all Reflex saving throws, increasing to +2 at 9th level and +3 at 15th level.",
        level: 3,
      },
      {
        name: "Resist Nature's Lure (Ex)",
        description:
          "Retained from the druid: a storm druid gains a +4 bonus on saving throws against the spell-like abilities of fey.",
        level: 4,
      },
      {
        name: "Electricity Resistance (Su)",
        description:
          "At 5th level, the storm druid gains resistance to electricity 5. This resistance increases by 5 for every 5 additional storm druid levels (resistance 10 at 10th level, 15 at 15th, and 20 at 20th).",
        level: 5,
      },
      {
        name: "Venom Immunity (Ex)",
        description:
          "Retained from the druid: a storm druid is immune to all poisons.",
        level: 9,
      },
      {
        name: "Improved Initiative",
        description:
          "At 12th level, the storm druid gains the Improved Initiative feat.",
        level: 12,
      },
      {
        name: "A Thousand Faces (Su)",
        description:
          "Retained from the druid: at will, a storm druid can change her appearance as if using a disguise self spell, except that the change is a physical (transmutation) alteration rather than an illusion.",
        level: 13,
      },
      {
        name: "Timeless Body (Ex)",
        description:
          "Retained from the druid, at the level printed in this article (14th; the standard druid gains timeless body at 15th level — see MANIFEST): a storm druid no longer takes ability score penalties for aging and cannot be magically aged, although bonuses still accrue and she dies of old age when her time is up.",
        level: 14,
      },
    ],
  },
  {
    id: "domain-paladin",
    name: "Domain Paladin",
    ruleset: "core",
    source: SRC_PALADIN,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: PALADIN_PROGRESSION,
    classSkills: PALADIN_SKILLS,
    features: [
      {
        name: "Domain Paladin Basics",
        description:
          "A domain paladin is a standard paladin under the 'Paladin Domains' optional rule, identical in Hit Die, base attack bonus, saving throws, skill points, class skills, code of conduct, and class features except for one change: in order to select a paladin domain, the paladin gives up her ability to turn undead — the article describes the exchange as happening at 3rd level (a standard paladin gains turn undead at 4th; staged as printed, see MANIFEST) — and selects a domain from the list of paladin domains instead (see the Paladin Domain feature). The domain chosen must belong to the deity worshipped by the paladin. Paladin domains do not provide a list of bonus spells as do cleric domains, but they all feature an associated special ability based on the corresponding cleric domain. Key abilities: Charisma, Strength, and Wisdom, as a standard paladin.",
        level: 1,
      },
      {
        name: "Aura of Good (Ex)",
        description:
          "A paladin's aura of good (see the detect good spell) is equal in power to her paladin level.",
        level: 1,
      },
      {
        name: "Detect Evil (Sp)",
        description:
          "A paladin can use detect evil at will, as the spell.",
        level: 1,
      },
      {
        name: "Smite Evil (Su)",
        description:
          "Once per day, a paladin may attempt to smite evil with one normal melee attack: she adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If she accidentally smites a creature that is not evil, the smite has no effect but is still used up for that day. She gains an additional use per day at 5th level and every five levels thereafter.",
        level: 1,
      },
      {
        name: "Divine Grace (Su)",
        description:
          "A paladin gains a bonus equal to her Charisma bonus (if positive) on all saving throws.",
        level: 2,
      },
      {
        name: "Lay on Hands (Su)",
        description:
          "Each day, a paladin can heal wounds (her own or those of others) by touch, healing a total number of hit points equal to her paladin level x her Charisma bonus; she may divide the healing among multiple recipients and need not use it all at once. Alternatively, she can use all or part of this power to deal damage to undead creatures with a melee touch attack.",
        level: 2,
      },
      {
        name: "Aura of Courage (Su)",
        description:
          "A paladin is immune to fear (magical or otherwise), and each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects.",
        level: 3,
      },
      {
        name: "Divine Health (Ex)",
        description:
          "A paladin gains immunity to all diseases, including supernatural and magical diseases.",
        level: 3,
      },
      {
        name: "Paladin Domain",
        description:
          "In place of turn undead, the paladin selects one paladin domain belonging to her deity and gains its special ability. While only Chaos and Evil are banned, paladins rarely select domains other than the ones listed here. DEATH: You may use a special death ward effect as a standard action, giving you or a good-aligned creature you touch a bonus on all saves against death effects; this saving throw bonus equals your paladin level -2 and lasts for 1 minute. This granted power may be used a total number of times per day equal to 3 + your Charisma modifier. It is a supernatural ability. KNOWLEDGE: You gain a special divine inspiration power: you may make a special divine inspiration check that functions exactly as a bard's bardic knowledge class ability, except that it is a supernatural ability. Your divine inspiration bonus is equal to your paladin level + your Charisma modifier, and it is usable a number of times per day equal to 1 + your Charisma modifier. LUCK: Once per day as an extraordinary ability, you may reroll one roll you have just made before the DM declares whether the roll results in success or failure; you must take the result of the second roll, even if it is worse than the first one. MAGIC: You may use scrolls, wands, and other devices with spell completion or spell trigger activation as a wizard of half your paladin level; any actual wizard levels you have stack with the effective wizard levels gained from this ability. Knowledge (arcana) and Spellcraft are class skills for you. PROTECTION: You can generate a protective ward as a supernatural ability, granting you or someone you touch a resistance bonus equal to your paladin level -2 on the recipient's next saving throw. Activating this power is a standard action; the protective ward is an abjuration effect with a duration of 1 hour, and it is usable once per day. STRENGTH: You can perform a feat of strength as a supernatural ability: you gain an enhancement bonus to your Strength score equal to your paladin level -2. Activating this power is a free action, it lasts 1 round, and it is usable once per day. WAR: You may invoke a special true warrior power as a supernatural ability, allowing you to bypass the damage reduction of any evil-aligned creature. Invoking the true warrior ability is a free action, but it must be activated before rolling your attack; its effects last for 1 round, and you can invoke it once per day.",
        level: 3,
      },
      {
        name: "Spells",
        description:
          "Beginning at 4th level, a paladin casts divine spells prepared ahead of time from the paladin spell list; her caster level is one-half her paladin level, and Wisdom is her spellcasting ability.",
        level: 4,
      },
      {
        name: "Special Mount (Sp)",
        description:
          "Once per day as a full-round action, a paladin can call a special mount to her side from the celestial realms; the mount (typically a heavy warhorse) stays for 2 hours per paladin level, can be dismissed at will, and gains additional Hit Dice, abilities, and an empathic link as the paladin advances, exactly as a standard paladin's special mount.",
        level: 5,
      },
      {
        name: "Remove Disease (Sp)",
        description:
          "A paladin can produce a remove disease effect, as the spell, once per week; she gains an additional weekly use every three levels after 6th.",
        level: 6,
      },
    ],
  },
];

export const DRAGON_328_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
