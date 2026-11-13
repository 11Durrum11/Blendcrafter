// Dragon Magazine #335 (Sep 2005) variant classes — integrated in
// the Dragon Magazine treatment program (issue #335 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-335/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Chaos Monk and the Totem Druid: variant classes staged as
// printed and image-verified. The Chaos Monk carries both relevant
// precedents on its record per the pack SCREENING (the monk-variant
// line from #331/#346-era passes); both Waterdeep features are
// digested in full in the pack reference (Bastion canon).
// Records: levels 1-10 progression rows on the class chassis,
// features carrying their true levels.
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
const SRC_MONK = "Dragon Magazine #335 — Class Acts: Chaos Monks (Tim Hitchcock), p. 89";
const SRC_DRUID = "Dragon Magazine #335 — Class Acts: Totem Druids (Wil Upchurch), p. 87";

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

const RAW: RawClass[] = [
  {
    id: "chaos-monk",
    name: "Chaos Monk",
    ruleset: "core",
    source: SRC_MONK,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: MONK_PROGRESSION,
    classSkills: MONK_SKILLS,
    features: [
      {
        name: "Chaos Monk Basics",
        description:
          "The chaos monk is a variant monk whose adepts supplicate chance and anarchy, holding that ki is an unbridled energy more potent when untamed. Unless otherwise noted, a chaos monk advances in the same manner as a monk — same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills. A character who elects to take a level of monk or chaos monk may not later take levels in the other class; this prevents the character from gaining the benefits of a 1st-level monk twice. Prerequisite: any chaotic alignment (this replaces the monk's lawful alignment requirement). The column prints a caution that the chaos monk is an optional rule that might seriously alter a game, and that a DM should be comfortable with the concept before allowing it into his campaign. Weapon and Armor Proficiency: as the monk (proficient with club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling; not proficient with any armor or shields; AC bonus and fast movement are lost when wearing armor, carrying a shield, or carrying a medium or heavy load). In place of flurry of blows the chaos monk gains flailing strike; in place of wholeness of body, purity of body, diamond body, abundant step, and tongue of the sun and moon she gains erratic advance, displacing stance, and freedom of thought; her ki strike turns chaotic rather than lawful; and perfect self becomes anarchic self. All other monk features advance as for a monk of the same level unless a feature below says otherwise. ⚠️ STAGED WITH A SCREENING FLAG — see the pack's SCREENING.md §1 (monk-variant precedent is mixed: the #310 monk variants shipped and stay; the Sidewinder Monk of #331 was pulled after staging, v20.119). Key abilities: Wisdom, Dexterity, and Strength.",
        level: 1,
      },
      {
        name: "Bonus Feat",
        description:
          "As the monk class feature of the same name: at 1st, 2nd, and 6th level the chaos monk gains a bonus feat from the monk's bonus feat list, without needing to meet the feat's prerequisites. The column does not differentiate the chaos monk's bonus-feat list from the monk's.",
        level: 1,
      },
      {
        name: "Flailing Strike (Ex)",
        description:
          "The chaos monk practices her martial art with reckless abandon. When she makes a flailing strike, she rolls the die shown on the chaos monk chart for her level to determine how many extra attacks she can make (minimum 0): 1d4-1 at 1st through 4th level, 1d4 at 5th through 9th, 1d6-1 at 10th through 14th, and 1d6 at 15th level and above. Regardless of the number of attacks rolled, she takes a penalty on all of them: -2 at 1st level, decreasing to -1 at 5th level, and disappearing at 9th level. Using a flailing strike requires a full-round action and can only be made as part of an unarmed attack or with special monk weapons. At 11th level this becomes greater flailing, the analogue of the monk's greater flurry of blows. This ability replaces flurry of blows.",
        level: 1,
      },
      {
        name: "Unarmed Strike",
        description:
          "As the monk class feature of the same name: the chaos monk's unarmed attacks deal the unarmed damage of a monk of her level, may deal lethal or nonlethal damage at no penalty, and are treated as both manufactured and natural weapons for the purpose of spells and effects that enhance or improve weapons.",
        level: 1,
      },
      {
        name: "Evasion (Ex)",
        description:
          "As the monk class feature of the same name: if exposed to any effect that normally allows a Reflex save for half damage, the chaos monk takes no damage on a successful save. Evasion can be used only if she is wearing light armor or no armor.",
        level: 2,
      },
      {
        name: "Fast Movement (Ex)",
        description:
          "As the monk class feature of the same name: the chaos monk gains an enhancement bonus to her land speed, as shown for a monk of her level, provided she is wearing no armor, not carrying a shield, and carrying no more than a light load.",
        level: 3,
      },
      {
        name: "Still Mind (Ex)",
        description:
          "As the monk class feature of the same name: the chaos monk gains a +2 bonus on saving throws against spells and effects from the school of enchantment.",
        level: 3,
      },
      {
        name: "Ki Strike (Su)",
        description:
          "As the monk class feature of the same name, except that the chaos monk's unarmed attacks are treated as chaotic weapons at 10th level in place of lawful weapons: they are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction at 4th level, as chaotic weapons at 10th level, and as adamantine weapons at 16th level.",
        level: 4,
      },
      {
        name: "Slow Fall (Ex)",
        description:
          "As the monk class feature of the same name: when within arm's reach of a wall, the chaos monk can use it to slow her descent, taking damage as if the fall were shorter — 20 feet shorter at 4th level, 30 feet at 6th, 40 feet at 8th, 50 feet at 10th, 60 feet at 12th, 70 feet at 14th, 80 feet at 16th, and 90 feet at 18th; at 20th level she can slow her fall from any distance.",
        level: 4,
      },
      {
        name: "Erratic Advance (Ex)",
        description:
          "At 5th level, a chaos monk can attempt to daze an opponent with a wild and erratic rush. As part of a charge, she can activate this ability, forcing her opponent to make a Will save (DC 10 + her chaos monk class level) or be dazed for 1 round. She can use this ability a number of times per day equal to her Wisdom modifier (minimum once per day).",
        level: 5,
      },
      {
        name: "Displacing Stance (Sp)",
        description:
          "Beginning at 7th level, the chaos monk's movements become so wild and unpredictable that she can partially displace herself for a number of rounds per day equal to half her chaos monk class level (these rounds need not be consecutive). This grants her a 20% chance that an attacker misses because of the displacing stance. At 12th level the miss chance increases to 50%. Entering the stance requires a standard action.",
        level: 7,
      },
      {
        name: "Improved Evasion (Ex)",
        description:
          "As the monk class feature of the same name: the chaos monk takes no damage on a successful Reflex save against an effect that allows a save for half damage, and takes only half damage even on a failed save.",
        level: 9,
      },
      {
        name: "Freedom of Thought (Su)",
        description:
          "At 11th level the chaos monk's thought processes become so anarchic that once per day, should she fail a Will save against a mind-affecting effect, she may immediately reroll her save (with the same modifiers to the roll). She must take the result of the second roll, even if it is worse.",
        level: 11,
      },
      {
        name: "Diamond Soul (Ex)",
        description:
          "As the monk class feature of the same name: the chaos monk gains spell resistance equal to her chaos monk level + 10.",
        level: 13,
      },
      {
        name: "Quivering Palm (Su)",
        description:
          "As the monk class feature of the same name: once per week the chaos monk can set up vibrations within the body of another creature that she can later end at will, killing the creature if it fails a Fortitude save (DC 10 + 1/2 her chaos monk level + her Wisdom modifier), as the monk ability in all respects.",
        level: 15,
      },
      {
        name: "Timeless Body (Ex)",
        description:
          "As the monk class feature of the same name: the chaos monk no longer takes penalties to her ability scores for aging and cannot be magically aged, though aging bonuses still accrue and she still dies of old age when her time is up.",
        level: 17,
      },
      {
        name: "Empty Body (Su)",
        description:
          "As the monk class feature of the same name: the chaos monk can assume an ethereal state for 1 round per chaos monk level per day, as the ethereal jaunt spell, and can end the effect early.",
        level: 19,
      },
      {
        name: "Anarchic Self (Su)",
        description:
          "At 20th level the chaos monk perfects herself in the image of chaos: as the monk's perfect self, except the monk gains the chaotic subtype (instead of the lawful subtype) — she becomes a magical creature, treated as an outsider (a native outsider) for the purpose of spells and magical effects, and gains damage reduction 10/magic.",
        level: 20,
      },
    ],
  },
  {
    id: "totem-druid",
    name: "Totem Druid",
    ruleset: "core",
    source: SRC_DRUID,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: DRUID_PROGRESSION,
    classSkills: DRUID_SKILLS,
    features: [
      {
        name: "Totem Druid Basics",
        description:
          "The totem druid is a variant druid from a tribe with strong ties to a single animal spirit, the tribe's totem; the animal's spirit guards the tribe and advises its elders and chieftains. Unless otherwise noted, a totem druid advances in the same manner as a druid — same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills. When a character elects to take a level of druid or totem druid, she may not later take levels in the other class. Weapon and Armor Proficiency: as the druid. Spellcasting: as the druid — the totem druid casts divine spells drawn from the druid spell list exactly as a druid of her level, including the druid's alignment and oath restrictions. In place of the druid's wild shape progression (with its plant, elemental, and size forms), the totem druid's totem shape lets her take only the form of her one totem animal — but it begins at 1st level, gains dire and planar forms, and her animal companion is bound to the same animal and advances faster. She also gains Natural Spell as a bonus feat at 2nd level and totem speech at 8th level; a thousand faces is delayed to 19th level. ⚠️ APOC NOTE: the planar totem forms apply the celestial or fiendish template under severed-planar canon — staged as printed and flagged in the pack's SCREENING.md. Key abilities: Wisdom, Dexterity, and Constitution.",
        level: 1,
      },
      {
        name: "Totem Animal",
        description:
          "At 1st level, a totem druid must choose one of the following animals to bind her spirit to: ape, bear, eagle, horse, shark, snake, tiger, or wolf. This choice fixes the only animal form her totem shape can take and the only animal (or its dire form) she can choose as her animal companion.",
        level: 1,
      },
      {
        name: "Totem Animal Companion (Ex)",
        description:
          "The totem druid can only choose her totem animal (or its dire form) as her animal companion. Her animal companion gains special abilities as if the totem druid was two levels higher, and she counts as two levels higher for purposes of determining whether or not she can choose a dire companion as her alternative animal companion. Of the animals in the column, the dire eagle becomes available at 4th level, the dire horse at 7th level, and the dire snake at 10th level.",
        level: 1,
      },
      {
        name: "Nature Sense (Ex)",
        description:
          "As the druid class feature of the same name: the totem druid gains a +2 bonus on Knowledge (nature) and Survival checks.",
        level: 1,
      },
      {
        name: "Wild Empathy (Ex)",
        description:
          "As the druid class feature of the same name: the totem druid can improve the attitude of an animal, rolling 1d20 + her totem druid level + her Charisma modifier, as a Diplomacy check made to improve a person's attitude.",
        level: 1,
      },
      {
        name: "Totem Shape (Su)",
        description:
          "Totem shape uses the same rules as the druid's wild shape, although the totem druid can only take the form of her totem animal. She gains the ability to change into this shape once per day at 1st level, twice per day at 3rd, three times per day at 5th, four times per day at 7th, five times per day at 11th, six times per day at 14th, seven times per day at 17th, and eight times per day at 20th. Starting at 6th level she can also choose to take the dire form of her totem animal once per day (the dire form is in addition to her normal usage); this increases to twice per day at 12th level and three times per day at 18th. Beginning at 10th level (planar), she can choose to change into a celestial or fiendish form of her totem animal: good druids using the planar totem shape form gain the celestial template and evil druids gain the fiendish template; neutral druids must choose which template to apply upon reaching 8th level (as printed, although planar totem shape itself arrives at 10th) and cannot change their choice after that. At 16th level (dire planar), she gains the ability to apply her planar template to her dire form.",
        level: 1,
      },
      {
        name: "Natural Spell",
        description:
          "At 2nd level the totem druid gains Natural Spell as a bonus feat, allowing her to cast spells while in her totem shape form. (The column grants the feat at 2nd level, far earlier than a standard druid could use it before gaining wild shape; because totem shape begins at 1st level, the feat is usable as soon as it is gained.)",
        level: 2,
      },
      {
        name: "Woodland Stride (Ex)",
        description:
          "As the druid class feature of the same name: the totem druid may move through any sort of undergrowth at her normal speed and without taking damage or suffering any other impairment, though magically manipulated or enchanted undergrowth still affects her.",
        level: 2,
      },
      {
        name: "Trackless Step (Ex)",
        description:
          "As the druid class feature of the same name: the totem druid leaves no trail in natural surroundings and cannot be tracked, though she may leave a trail if she so chooses.",
        level: 3,
      },
      {
        name: "Resist Nature's Lure (Ex)",
        description:
          "As the druid class feature of the same name: the totem druid gains a +4 bonus on saving throws against the spell-like abilities of fey.",
        level: 4,
      },
      {
        name: "Totem Speech (Ex)",
        description:
          "Starting at 8th level, the totem druid can speak any language she knows while in animal form, and she can speak with her totem animals as with the speak with animals spell.",
        level: 8,
      },
      {
        name: "Venom Immunity (Ex)",
        description:
          "As the druid class feature of the same name: the totem druid gains immunity to all poisons.",
        level: 9,
      },
      {
        name: "Timeless Body (Ex)",
        description:
          "As the druid class feature of the same name: the totem druid no longer takes penalties to her ability scores for aging and cannot be magically aged, though aging bonuses still accrue and she still dies of old age when her time is up.",
        level: 15,
      },
      {
        name: "A Thousand Faces (Su)",
        description:
          "As the druid class feature of the same name — the totem druid can change her appearance at will, as with the alter self spell — but gained at 19th level rather than the druid's 13th, displaced by the totem shape progression (the printed table's 13th-level row is blank, as printed).",
        level: 19,
      },
    ],
  },
];

export const DRAGON_335_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
