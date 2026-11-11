// Dragon Magazine #339 classes — integrated in the Dragon
// Magazine treatment program (issue #339 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-339/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Sidhe Scholar, a druid variant class, staged as printed.
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
const SRC = "Dragon Magazine #339 — Class Acts: The Sidhe Scholar (Stephanie Vergamini), pp. 90-91";

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

const SIDHE_SKILLS = [
  "Concentration",
  "Craft",
  "Diplomacy",
  "Handle Animal",
  "Heal",
  "Knowledge (arcana)",
  "Knowledge (geography)",
  "Knowledge (history)",
  "Knowledge (nature)",
  "Listen",
  "Profession",
  "Ride",
  "Spellcraft",
  "Spot",
  "Survival",
  "Swim",
];

const RAW: RawClass[] = [
  {
    id: "sidhe-scholar",
    name: "Sidhe Scholar",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: DRUID_PROGRESSION,
    classSkills: SIDHE_SKILLS,
    features: [
      {
        name: "Sidhe Scholar Basics",
        description:
          "The sidhe scholar is a variant druid: an erudite supplicant adopted and taught by the refined, aristocratic fey of the Seelie and Unseelie courts, who relearns the forgotten ancient druidic traditions from written accounts and fey tutors rather than from the wild's calling. Unless otherwise noted, a sidhe scholar advances in the same manner as a druid (same base attack bonus, saving throw bonuses, skill points, and spellcasting). A character who elects to take a level of druid or sidhe scholar may not later take levels in the other class. Hit Die: d6 (changed from the druid's d8). Class Skills: in addition to the class skills of the standard druid, the sidhe scholar also has Knowledge (arcana) as a class skill. Weapon and Armor Proficiency: the sidhe scholar is only proficient with simple weapons, light armor, and shields (except tower shields), regardless of material composition — a narrower list than the druid's. The printed table does not grant woodland stride, trackless step, or resist nature's lure; in their place the sidhe scholar gains intelligentsia, the wild one, blessing of the fey, sylvan gifts, otherworldly shifting, dark moon's secret, and sylvan craft, as detailed below. All other druid features (nature sense, spells, wild shape and its size/elemental progressions, venom immunity, a thousand faces, timeless body) advance as for a druid of the same level. Key abilities: Wisdom, Intelligence, and Charisma.",
        level: 1,
      },
      {
        name: "Intelligentsia (Ex)",
        description:
          "At 1st level, the sidhe scholar gains Skill Focus (Knowledge [nature]) as a bonus feat, reflecting the time she spends in research and her larger base of knowledge compared with other druids.",
        level: 1,
      },
      {
        name: "Nature Sense (Ex)",
        description:
          "As the druid class feature of the same name: a +2 bonus on Knowledge (nature) and Survival checks.",
        level: 1,
      },
      {
        name: "Wild One (Ex)",
        description:
          "The sidhe scholar's animal companion is a little more powerful than a standard druid's companion. Thanks to the favor of the fey, the companion has a bit of sylvan blood in it: it begins with +1 hit point per Hit Die, +2 Dexterity, and +2 Charisma, and is exceptionally fit, sleek, and graceful. Unfortunately, this wild blood makes the animal especially suspicious of humanoids: the animal always has an initial attitude of \"unfriendly\" around humanoids who aren't its master (to whom it is as loyal as any other animal companion), although other druids or rangers can increase the animal companion's attitude to \"neutral\" using the wild empathy ability. In addition, the animal refuses to enter a humanoid settlement larger than a thorp. The animal does not leave the druid completely, however, and lurks on the outskirts of the settlement until the druid rejoins it in the wilds.",
        level: 1,
      },
      {
        name: "Blessing of the Fey (Su)",
        description:
          "At 2nd level, the fey bestow their gifts upon their willing supplicant, granting her a +2 bonus on Knowledge (arcana) and Survival checks.",
        level: 2,
      },
      {
        name: "Sylvan Gifts (Su)",
        description:
          "Beginning at 4th level, the fey visit the sidhe scholar every night in her dreams, imparting her with magical secrets. The sidhe scholar gains bonus spells as if her Wisdom score were 2 higher than it really is. This does not affect the DCs of her spells.",
        level: 4,
      },
      {
        name: "Otherworldly Shifting (Su)",
        description:
          "The sidhe scholar's wild shape forms vary greatly in appearance: in her wild shape form (whatever it might be), the sidhe scholar appears alien and strangely beautiful — her form's pelt or plumage is brightly and unusually colored, with angular features, sharply pointed ears, and almond-shaped faintly glowing eyes adding to the form's alien appearance. Even though she has a set number of forms she can take, her forms never appear the same way twice: every time she uses her wild shape ability, her form has some new random element, although it always tends toward being slightly smaller and leaner than a typical example of the animal's kind.",
        level: 5,
      },
      {
        name: "Wild Shape",
        description:
          "As the druid class feature of the same name, on the printed schedule: wild shape 1/day at 5th level, 2/day at 6th, 3/day at 7th, 4/day at 10th, 5/day at 14th, and 6/day at 18th; wild shape (Large) at 8th level, (Tiny) at 11th, and (Huge) at 15th; wild shape (elemental 1/day) at 16th level and (elemental 3/day) at 18th. All wild shape forms take the alien appearance described under Otherworldly Shifting.",
        level: 5,
      },
      {
        name: "Dark Moon's Secret (Su)",
        description:
          "Few fey are inherently evil, but even the most good-aligned sylvan creature possesses a wicked sense of humor, to say nothing of an inhuman mind and set of abilities; the sidhe scholar can only muster a pale imitation of a fey's true abilities, and most fey find dark humor in watching the \"foolish mortal\" metaphorically stumble about in an attempt to mimic their innate magical powers. Some are so amused that they decide to add more kindling to the fire, bestowing alien powers upon the druid perhaps best left unknown: at 6th level, the sidhe scholar adds the Evil domain spell list to her druid spell list.",
        level: 6,
      },
      {
        name: "Venom Immunity (Ex)",
        description:
          "As the druid class feature of the same name: immunity to all poisons.",
        level: 9,
      },
      {
        name: "Sylvan Craft (Su)",
        description:
          "If a promising pupil, the sidhe scholar learns from her faerie tutors the arts of item creation: at 12th level, the sidhe scholar gains Craft Staff as a bonus feat. The staffs she creates are abstractly beautiful, asymmetrical, ornate, and utterly alien in appearance. In the heat of creation the sidhe scholar ignores all else, snatching only enough scraps of food and sleep to stay alive; this allows her to create a staff in half the normal amount of time.",
        level: 12,
      },
      {
        name: "A Thousand Faces (Su)",
        description:
          "As the druid class feature of the same name: the sidhe scholar can change her appearance at will, as if using the disguise self spell, although it affects her body and lasts as long as she wills it.",
        level: 13,
      },
      {
        name: "Timeless Body (Ex)",
        description:
          "As the druid class feature of the same name: the sidhe scholar no longer takes penalties to her ability scores for aging and cannot be magically aged, though aging bonuses still accrue and she still dies of old age when her time is up.",
        level: 15,
      },
    ],
  },
];

export const DRAGON_339_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
