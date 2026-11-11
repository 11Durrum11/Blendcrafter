// Dragon Magazine #329 (Mar 2005) variant class — integrated in
// the Dragon Magazine treatment program (issue #329 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-329/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Gnome Paladin (Class Acts: Daydream Believers, Alvin Neo,
// p. 94): the paladin chassis with the printed "Tweaking the Rules"
// box applied — Knowledge (nobility and royalty) swapped for
// Perform (comedy) in the class skill list, and the dire badger
// special mount carried in the Special Mount feature. Records:
// levels 1-10 progression rows on the paladin chassis, features
// carrying their true levels.
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
const SRC = "Dragon Magazine #329 — Class Acts: Daydream Believers (Alvin Neo), p. 94";

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

// Paladin class skills with the article's swap applied: Knowledge (nobility
// and royalty) is replaced by Perform (comedy).
const GNOME_PALADIN_SKILLS = [
  "Concentration",
  "Craft",
  "Diplomacy",
  "Handle Animal",
  "Heal",
  "Knowledge (religion)",
  "Perform (comedy)",
  "Profession",
  "Ride",
  "Sense Motive",
];

const RAW: RawClass[] = [
  {
    id: "gnome-paladin",
    name: "Gnome Paladin",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: PALADIN_PROGRESSION,
    classSkills: GNOME_PALADIN_SKILLS,
    features: [
      {
        name: "Gnome Paladin Basics",
        description:
          "A gnome paladin is a standard paladin played as a gnome, with the two racial tweaks from the article's 'Tweaking the Rules' box: her class skills replace Knowledge (nobility and royalty) with Perform (comedy), and at 5th level she may summon a dire badger as her special mount (see Special Mount). In all other respects — Hit Die, base attack bonus, saving throws, skill points, spellcasting, code of conduct, and class features — she is identical to a standard paladin. Key abilities: Charisma, Strength, and Wisdom, as a standard paladin.",
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
        description: "A paladin can use detect evil at will, as the spell.",
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
        name: "Turn Undead (Su)",
        description:
          "A paladin can turn undead as a cleric three levels lower, a number of times per day equal to 3 + her Charisma modifier.",
        level: 4,
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
          "Once per day as a full-round action, a paladin can call a special mount to her side from the celestial realms; the mount stays for 2 hours per paladin level, can be dismissed at will, and gains additional Hit Dice, abilities, and an empathic link as the paladin advances, exactly as a standard paladin's special mount. Gnome paladin tweak (as printed): a 5th-level gnome paladin may summon a dire badger as a special mount; it gains special abilities at the same rate as a standard special mount. The article also names the black bear, boar, dire eagle, dire toad, dire weasel, and wolverine as other mounts gnome paladins might call.",
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

export const DRAGON_329_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
