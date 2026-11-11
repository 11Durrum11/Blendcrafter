// Dragon Magazine #336 classes — integrated in the Dragon
// Magazine treatment program (issue #336 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-336/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Mystic Ranger variant class, staged as printed and image-verified.
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
const SRC = "Dragon Magazine #336 — Class Acts: Mystic Ranger (Erik Seligman), p. 105";

const RANGER_PROGRESSION = [
  { level: 1, bab: 1, fort: 2, ref: 2, will: 0 },
  { level: 2, bab: 2, fort: 3, ref: 3, will: 0 },
  { level: 3, bab: 3, fort: 3, ref: 3, will: 1 },
  { level: 4, bab: 4, fort: 4, ref: 4, will: 1 },
  { level: 5, bab: 5, fort: 4, ref: 4, will: 1 },
  { level: 6, bab: 6, fort: 5, ref: 5, will: 2 },
  { level: 7, bab: 7, fort: 5, ref: 5, will: 2 },
  { level: 8, bab: 8, fort: 6, ref: 6, will: 2 },
  { level: 9, bab: 9, fort: 6, ref: 6, will: 3 },
  { level: 10, bab: 10, fort: 7, ref: 7, will: 3 },
];

const RANGER_SKILLS = [
  "Climb",
  "Concentration",
  "Craft",
  "Handle Animal",
  "Heal",
  "Hide",
  "Jump",
  "Knowledge (dungeoneering)",
  "Knowledge (geography)",
  "Knowledge (nature)",
  "Listen",
  "Move Silently",
  "Profession",
  "Ride",
  "Search",
  "Spellcraft",
  "Spot",
  "Survival",
  "Swim",
  "Use Rope",
];

const RAW: RawClass[] = [
  {
    id: "mystic-ranger",
    name: "Mystic Ranger",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: RANGER_PROGRESSION,
    classSkills: RANGER_SKILLS,
    features: [
      {
        name: "Mystic Ranger Basics",
        description:
          "The mystic ranger is a variant ranger who spends more time in prayer and meditation and is well attuned to the spiritual side of his discipline: he gains spell abilities much sooner than a standard ranger and wields them more effectively, while his more combat-oriented abilities are weaker and learned later, and he gives up the animal companion entirely. Unless otherwise noted, a mystic ranger advances in the same manner as a ranger — same Hit Die, base attack bonus, saving throw bonuses, skill points, and so on. When a character elects to take a level of ranger or mystic ranger, he may not later take levels in the other class; this prevents a character from gaining the benefits of a 1st-level ranger twice. Alignment: any non-evil. Class Skills: the ranger's class skills, and Spellcraft is also a class skill for mystic rangers. Weapon and Armor Proficiency: a mystic ranger is proficient with all simple weapons, martial ranged weapons, and light armor; he is NOT proficient with martial melee weapons or shields. Spellcasting: the mystic ranger casts 1st- through 4th-level spells from the ranger spell list, plus a 0-level list (create water, cure minor wounds, flare, guidance, know direction, light, mending, purify food and drink, resistance, virtue) and a 5th-level list (awaken, baleful polymorph, cure critical wounds, control winds, summon nature's ally V, wall of thorns), with spells per day by level as printed in the article's table (0-level spells from 1st level; 1st-level spells from 2nd; 5th-level spells from 10th) — the full table is transcribed in the pack's reference.md. He gains Endurance and his combat style abilities later than the ranger (see the features below) and never gains an animal companion. Key abilities: Wisdom (spellcasting), Dexterity, and Strength.",
        level: 1,
      },
      {
        name: "Track",
        description:
          "As the ranger class feature of the same name: the mystic ranger gains Track as a bonus feat at 1st level.",
        level: 1,
      },
      {
        name: "Wild Empathy (Ex)",
        description:
          "As the ranger class feature of the same name: the mystic ranger can improve the attitude of an animal as a druid or ranger can, using his mystic ranger level plus his Charisma modifier for the check.",
        level: 1,
      },
      {
        name: "Favored Enemy (Ex)",
        description:
          "As the ranger class feature of the same name, but gained later and fewer times: the mystic ranger selects his 1st favored enemy at 2nd level, his 2nd at 8th level, his 3rd at 14th level, and his 4th at 20th level (four favored enemies in total, rather than the ranger's five).",
        level: 2,
      },
      {
        name: "Combat Style (Ex)",
        description:
          "As the ranger class feature of the same name (archery or two-weapon combat, with the associated bonus feats as for a ranger), but gained at 3rd level instead of 2nd.",
        level: 3,
      },
      {
        name: "Endurance",
        description:
          "As the ranger class feature of the same name: the mystic ranger gains Endurance as a bonus feat, but at 4th level instead of 3rd.",
        level: 4,
      },
      {
        name: "Woodland Stride (Ex)",
        description:
          "As the ranger class feature of the same name: the mystic ranger may move through any sort of undergrowth at his normal speed and without taking damage or suffering other impairment, at 7th level.",
        level: 7,
      },
      {
        name: "Improved Combat Style (Ex)",
        description:
          "As the ranger class feature of the same name: the mystic ranger's combat style improves at 7th level (instead of the ranger's 6th), gaining the next feat of his chosen style as a bonus feat.",
        level: 7,
      },
      {
        name: "Swift Tracker (Ex)",
        description:
          "As the ranger class feature of the same name: at 8th level the mystic ranger can move at his normal speed while following tracks without taking the normal -5 penalty, and at half his normal speed at a -10 penalty.",
        level: 8,
      },
      {
        name: "Evasion (Ex)",
        description:
          "As the ranger class feature of the same name: at 9th level, if the mystic ranger is exposed to any effect that normally allows a Reflex save for half damage, he takes no damage on a successful save; evasion can be used only in light armor or no armor.",
        level: 9,
      },
      {
        name: "Combat Style Mastery (Ex)",
        description:
          "As the ranger class feature of the same name: the mystic ranger's combat style reaches mastery at 12th level (instead of the ranger's 11th), gaining the final feat of his chosen style as a bonus feat.",
        level: 12,
      },
      {
        name: "Camouflage (Ex)",
        description:
          "As the ranger class feature of the same name: at 13th level the mystic ranger can use the Hide skill in any sort of natural terrain, even if the terrain doesn't grant cover or concealment.",
        level: 13,
      },
      {
        name: "Hide in Plain Sight (Ex)",
        description:
          "As the ranger class feature of the same name: at 17th level, while in any sort of natural terrain, the mystic ranger can use the Hide skill even while being observed.",
        level: 17,
      },
    ],
  },
];

export const DRAGON_336_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
