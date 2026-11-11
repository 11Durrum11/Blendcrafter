// Dragon Magazine #347 classes — integrated in the Dragon
// Magazine treatment program (issue #347 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-347/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Lost Ones variant class features staged as variant class records per the #338 precedent, adaptation flagged in the pack SCREENING.
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
const SRC = "Dragon Magazine #347 — Class Acts: Lost Ones (Andrea Paulinski), pp. 90-91";

const TQ_GOOD_FORT_WILL = [
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

const FULL_GOOD_FORT = [
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

const FULL_GOOD_FORT_REF = [
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

const CLERIC_SKILLS = [
  "Concentration",
  "Craft",
  "Diplomacy",
  "Heal",
  "Knowledge (arcana)",
  "Knowledge (history)",
  "Knowledge (religion)",
  "Knowledge (the planes)",
  "Profession",
  "Spellcraft",
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
  "Spot",
  "Survival",
  "Swim",
  "Use Rope",
];

const LOST_ONE_FRAME =
  "This record stages a printed variant class feature (Player's Handbook II style) as a variant record on the parent class chassis, following the issue-338 precedent for optional-rule pieces — the column prints no progression table of its own. The column's frame: a \"lost one\" is a divine character whose faith has been shaken by tragedy, who wanders seeking answers and comes to worship a more ideal version of his deity; a lost one's alignment cannot match his deity's, nor be diametrically opposed to it, and a truly lost character loses all class features of his divine spellcasting classes until he returns to his deity's good graces (usually requiring a quest, never merely an atonement spell). Variant class features list the lowest level at which they may be taken; a character who loses his faith after passing that level can gain the feature through the retraining option (Player's Handbook II, p. 192), chosen during level advancement, and the PHB II divine conversion rules (p. 193) govern willingly changing deity instead. All parent-class features not named in the replacement below advance exactly as for the parent class.";

const RAW: RawClass[] = [
  {
    id: "domain-focus",
    name: "Domain Focus (Cleric)",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: TQ_GOOD_FORT_WILL,
    classSkills: CLERIC_SKILLS,
    features: [
      {
        name: "Domain Focus (Cleric) Basics",
        description:
          "A variant class feature for the cleric, from \"Lost Ones\": when a cleric loses his way and sees only the \"pure\" version of his deity, he focuses on a single aspect of his deity to the exclusion of all others. Level: 1st. Replaces: if you select this class feature, you lose the ability to spontaneously convert prepared spells into cure or inflict spells; you also lose access to one of your domains, and all spells on that domain spell list are permanently removed from all your spell lists. " +
          LOST_ONE_FRAME,
        level: 1,
      },
      {
        name: "Domain Focus",
        description:
          "You gain many of the benefits of your remaining domain as if you had taken it twice. You gain double the benefit from your remaining domain's granted power, if applicable: if the granted power has a limited number of uses per day, you may use it twice as many times per day; if it offers a bonus, the bonus is doubled. If the granted power has limited uses and also grants a bonus (such as the granted power of the Destruction domain), you must choose which to double — the number of times per day you can use it, or the bonus — you do not gain both. The number of uses per day that doubles does not count additional uses based on ability scores: for example, domain granted powers that grant the ability to turn or rebuke elemental creatures grant that ability a number of times per day equal to 6 + your Charisma modifier, not 6 + double your Charisma modifier.",
        level: 1,
      },
    ],
  },
  {
    id: "focused-animal",
    name: "Focused Animal (Druid)",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: TQ_GOOD_FORT_WILL,
    classSkills: DRUID_SKILLS,
    features: [
      {
        name: "Focused Animal (Druid) Basics",
        description:
          "A variant class feature for the druid, from \"Lost Ones\": when a druid no longer reveres the entirety of nature, he sometimes learns to communicate with his closest ally, his animal companion. Level: 1st. Replaces: if you select this class feature, you do not gain trackless step, wild shape, or woodland stride. " +
          LOST_ONE_FRAME,
        level: 1,
      },
      {
        name: "Focused Animal",
        description:
          "You gain the effects of a continuous speak with animals spell, but you may only use it to speak with your animal companion. In addition, for the purpose of determining your animal companion's bonus Hit Dice, natural armor adjustment, Strength and Dexterity adjustment, bonus tricks, and special abilities, you are treated as a druid two levels higher than you actually are. This does not allow you to gain a more powerful alternative animal companion at an earlier level (see page 36 of the Player's Handbook).",
        level: 1,
      },
    ],
  },
  {
    id: "power-of-the-self",
    name: "Power of the Self (Paladin)",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: FULL_GOOD_FORT,
    classSkills: PALADIN_SKILLS,
    features: [
      {
        name: "Power of the Self (Paladin) Basics",
        description:
          "A variant class feature for the paladin, from \"Lost Ones\": paladins are hardest hit by becoming lost ones — they lose the strict rigidity of their knightly nature and must adapt to a life where their personal skills are more important than their divine gifts. Level: 4th. Replaces: if you select this class feature, you do not gain divine grace, divine health, or your special mount; if you have already gained one or more of these abilities before becoming a lost one, you immediately lose access to them upon becoming a lost one. " +
          LOST_ONE_FRAME,
        level: 1,
      },
      {
        name: "Bonus Feats",
        description:
          "At 4th level and every four levels thereafter (8th, 12th, 16th, and 20th), you gain a fighter bonus feat, just as if you had taken levels in fighter. This is the benefit of the Power of the Self variant class feature.",
        level: 4,
      },
    ],
  },
  {
    id: "solitary-hunting",
    name: "Solitary Hunting (Ranger)",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: FULL_GOOD_FORT_REF,
    classSkills: RANGER_SKILLS,
    features: [
      {
        name: "Solitary Hunting (Ranger) Basics",
        description:
          "A variant class feature for the ranger, from \"Lost Ones\": a ranger who loses his faith also loses his most obvious blessing of nature, his animal companion; in return, he becomes even more self-reliant. Level: 1st. Replaces: if you select this class feature, you do not gain your animal companion; if you already have an animal companion, it abandons you immediately. " +
          LOST_ONE_FRAME,
        level: 1,
      },
      {
        name: "Solitary Hunting",
        description:
          "Your favored enemy bonus also applies to your attack rolls (in addition to its normal applications to weapon damage rolls and to Bluff, Listen, Sense Motive, Spot, and Survival checks against your favored enemies). This is the benefit of the Solitary Hunting variant class feature.",
        level: 1,
      },
    ],
  },
];

export const DRAGON_347_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
