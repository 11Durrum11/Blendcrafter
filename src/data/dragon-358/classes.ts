// Dragon Magazine #358 classes — integrated in the Dragon
// Magazine treatment program (issue #358 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-358/
// (MANIFEST.md / SCREENING.md / reference.md).
// Two monk-variant classes (Franciscan Friar, Knight Hospitaller) staged with the monk-precedent flag per the pack SCREENING; the Buddhist Monk is lift-ready in reference and the Shinto Monk is reference-only under the oriental ruling.
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
const SRC = "Dragon Magazine #358 — Class Acts: Beyond Kung-Fu (Jonathan Vespa), pp. 84-85";

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

// Retained monk features shared by both staged style records (the
// fighting style replaces only the monk's bonus-feat choices).
const MONK_CORE = [
  {
    name: "Flurry of Blows (Ex)",
    description:
      "As the monk class feature of the same name, including greater flurry at 11th level.",
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
      "As the monk class feature of the same name: if exposed to any effect that normally allows a Reflex save for half damage, the monk takes no damage on a successful save. Evasion can be used only if she is wearing light armor or no armor.",
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
      "As the monk class feature of the same name: a +2 bonus on saving throws against spells and effects from the school of enchantment.",
    level: 3,
  },
  {
    name: "Ki Strike (Su)",
    description:
      "As the monk class feature of the same name: the monk's unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction at 4th level, as lawful weapons at 10th level, and as adamantine weapons at 16th level.",
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
      "As the monk class feature of the same name: the monk can heal her own wounds, restoring a number of hit points per day equal to twice her monk level, divided as she chooses among multiple uses.",
    level: 7,
  },
  {
    name: "Improved Evasion (Ex)",
    description:
      "As the monk class feature of the same name: the monk takes no damage on a successful Reflex save against an effect that allows a save for half damage, and takes only half damage even on a failed save.",
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

const PROFICIENCY_NOTE =
  " Weapon and Armor Proficiency: as the monk (proficient with club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling; not proficient with any armor or shields; AC bonus and fast movement are lost when wearing armor, carrying a shield, or carrying a medium or heavy load). Key abilities: Wisdom, Dexterity, and Strength. ⚠️ STAGED WITH A SCREENING FLAG — see the pack's SCREENING.md §1 (monk-variant precedent is mixed: the #310 monk variants shipped and stay; the Sidewinder Monk of #331 was pulled after staging, v20.119; the Chaos Monk of #335 and the Sacred Path monks of #346 were staged with this same flag).";

const RAW: RawClass[] = [
  {
    id: "franciscan-friar",
    name: "Franciscan Friar (Monk Variant)",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: MONK_PROGRESSION,
    classSkills: MONK_SKILLS,
    features: [
      {
        name: "Franciscan Friar Basics",
        description:
          "A variant monk following the Franciscan friar fighting style of the Unearthed Arcana (p. 52) variant fighting styles, as printed in \"Beyond Kung-Fu\": the friars of the order founded by St. Francis of Assisi, mendicant wandering teachers and healers who live alongside the poor under vows of poverty, humility, and chastity. Unless otherwise noted, a Franciscan friar advances in the same manner as a monk — same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills — with the style's fixed bonus feats and 6th-level bonus ability in place of the monk's freedom to choose bonus feats. Because the style uses an exalted feat (Vow of Chastity, marked with an asterisk in the article and summarized in its Exalted Feats sidebar from the Book of Exalted Deeds), a monk must be lawful good to take this fighting style." +
          PROFICIENCY_NOTE,
        level: 1,
      },
      {
        name: "Franciscan Friar Fighting Style",
        description:
          "The fighting-style package (Unearthed Arcana, p. 52 chassis): in exchange for the freedom to choose his bonus feats, a monk who follows this style gains a +2 bonus on Heal checks at 1st level and fixed bonus feats at 1st level (Self-Sufficient), 2nd level (Vow of Chastity, an exalted feat from the Book of Exalted Deeds — the article's sidebar summarizes it: abstain from sexual contact to gain a +4 perfection bonus on Will saves against charm and phantasm spells and effects), and 6th level (Diehard). He need not have any of the prerequisites normally required for these feats to select them. At 6th level he can gain the style's additional bonus ability if he meets its prerequisites at 6th level (he must meet them at 6th level or else he sacrifices the ability).",
        level: 1,
      },
      ...MONK_CORE,
      {
        name: "Healing Secrets (6th-Level Bonus Ability)",
        description:
          "The Franciscan friar style's 6th-level bonus ability: your work with the poor and the suffering has taught you many secrets of healing. You gain the ability to cast cure light wounds, purify food and drink, and remove disease once each per day as spell-like abilities (caster level equals half your monk level). Prerequisites (which must be met at 6th level to gain this ability): Heal 4 ranks, Survival 4 ranks.",
        level: 6,
      },
    ],
  },
  {
    id: "knight-hospitaller",
    name: "Knight Hospitaller (Monk Variant)",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: MONK_PROGRESSION,
    classSkills: MONK_SKILLS,
    features: [
      {
        name: "Knight Hospitaller Basics",
        description:
          "A variant monk following the Knight Hospitaller fighting style of the Unearthed Arcana (p. 52) variant fighting styles, as printed in \"Beyond Kung-Fu\": the Knights of the Hospital of St. Joseph of Jerusalem, a monastic brotherhood of warrior-priests founded to aid and protect pilgrims in the Holy Land, who became an elite fighting force of the crusades. A Knight Hospitaller adventures to protect others or some sacred and honored site. Unless otherwise noted, a Knight Hospitaller advances in the same manner as a monk — same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills — with the style's fixed bonus feats and 6th-level bonus ability in place of the monk's freedom to choose bonus feats. This style uses no exalted feat, and the article prints no alignment requirement for it beyond the monk's own." +
          PROFICIENCY_NOTE,
        level: 1,
      },
      {
        name: "Knight Hospitaller Fighting Style",
        description:
          "The fighting-style package (Unearthed Arcana, p. 52 chassis): in exchange for the freedom to choose his bonus feats, a monk who follows this style gains a +2 bonus on Spot checks at 1st level and fixed bonus feats at 1st level (Weapon Focus, with any weapon), 2nd level (Combat Expertise), and 6th level (Weapon Specialization, with the same weapon chosen for Weapon Focus). He need not have any of the prerequisites normally required for these feats to select them — including, as printed, the fighter-level prerequisite Weapon Specialization normally carries. At 6th level he can gain the style's additional bonus ability if he meets its prerequisites at 6th level (he must meet them at 6th level or else he sacrifices the ability).",
        level: 1,
      },
      ...MONK_CORE,
      {
        name: "Protective Expertise (6th-Level Bonus Ability)",
        description:
          "The Knight Hospitaller style's 6th-level bonus ability: you are skilled at protecting others. If you use Combat Expertise, the bonus you gain also applies to one adjacent ally of your choice who is not using Combat Expertise. Prerequisites (which must be met at 6th level to gain this ability): Spot 9 ranks, Combat Reflexes.",
        level: 6,
      },
    ],
  },
];

export const DRAGON_358_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
