// Dragon Magazine #331 (May 2005) variant class — integrated in
// the Dragon Magazine treatment program (issue #331 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-331/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Sidewinder Monk (Class Acts): a PHB-monk variant — feat
// swaps, a Bluff bonus, sneak attack, and a fang bite on the monk
// chassis, with no Oriental Adventures mechanics; its order is a
// desert rattlesnake deception cabal, not a real-world martial
// art. Staged with the ruling question flagged in SCREENING.md
// (cf. the Monk Styles hold in #330); its full printed table is
// transcribed in the pack reference so a pull is one step.
// Records: levels 1-10 progression rows on the monk chassis,
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
const SRC = "Dragon Magazine #331 — Class Acts: The Sidewinder Monk (Richard Farrese), p. 89";

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

const RAW: RawClass[] = [
  {
    id: "sidewinder-monk",
    name: "Sidewinder Monk",
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
        name: "Sidewinder Monk Basics",
        description:
          "The sidewinder monk is a variant monk: a member of a small monastic order whose adepts imitate the deceptive attitudes of the sidewinder, the desert rattlesnake from which they take their name. Unless otherwise noted, a sidewinder monk advances in the same manner as a monk — same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills. A character who elects to take a level of monk or sidewinder monk may not later take levels in the other class. Weapon and Armor Proficiency: as the monk (proficient with club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling; not proficient with any armor or shields; AC bonus and fast movement are lost when wearing armor, carrying a shield, or carrying a medium or heavy load). In place of the monk's still mind, slow fall, purity of body, abundant step, quivering palm, and empty body, the sidewinder monk gains a deceptive bonus-feat list, silver tongue, earthbound, sneak attack, fangs, and intimidating stance, as detailed below. All other monk features advance as for a monk of the same level unless a feature below says otherwise. Key abilities: Wisdom, Dexterity, and Charisma.",
        level: 1,
      },
      {
        name: "Bonus Feat",
        description:
          "At 1st level, a sidewinder monk may select either Persuasive or Stealthy as a bonus feat. At 2nd level, she may take either Improved Feint or Mobility as a bonus feat. At 6th level, she may choose either Improved Disarm or Improved Trip as a bonus feat. She need not have any of the prerequisites normally required for these feats to select them. This replaces the standard monk bonus-feat list.",
        level: 1,
      },
      {
        name: "Flurry of Blows (Ex)",
        description:
          "As the monk class feature of the same name, including greater flurry at 11th level. A sidewinder monk using her fangs ability in a flurry of blows takes a -2 penalty on the bite attack and on all other flurry attacks that round (see Fangs).",
        level: 1,
      },
      {
        name: "Unarmed Strike",
        description:
          "As the monk class feature of the same name: the sidewinder monk's unarmed attacks deal the unarmed damage of a monk of her level, may deal lethal or nonlethal damage at no penalty, and are treated as both manufactured and natural weapons for the purpose of spells and effects that enhance or improve weapons.",
        level: 1,
      },
      {
        name: "Silver Tongue (Ex)",
        description:
          "From 2nd level, the sidewinder monk masters deception — false promises, empty threats, and personal magnetism. She gains a +1 competence bonus on all Bluff checks. This bonus increases by +1 at 4th level and at every even-numbered level thereafter (+2 at 4th, +3 at 6th, +4 at 8th, and so on, to +10 at 20th level).",
        level: 2,
      },
      {
        name: "Evasion (Ex)",
        description:
          "As the monk class feature of the same name: if exposed to any effect that normally allows a Reflex save for half damage, the sidewinder monk takes no damage on a successful save. Evasion can be used only if she is wearing light armor or no armor.",
        level: 2,
      },
      {
        name: "Fast Movement (Ex)",
        description:
          "As the monk class feature of the same name: the sidewinder monk gains an enhancement bonus to her land speed, as shown for a monk of her level, provided she is wearing no armor, not carrying a shield, and carrying no more than a light load.",
        level: 3,
      },
      {
        name: "Sneak Attack (Ex)",
        description:
          "At 3rd level, the sidewinder monk gains the ability to sneak attack, as the rogue ability: whenever her target would be denied its Dexterity bonus to AC (whether or not it has one), or whenever she flanks her target, her attack deals extra damage — +1d6 at 3rd level, increasing by +1d6 every three levels thereafter (+2d6 at 6th, +3d6 at 9th, +4d6 at 12th, +5d6 at 15th, and +6d6 at 18th). Ranged sneak attacks count only if the target is within 30 feet, the extra damage is of the same type as the weapon's, and creatures immune to critical hits are not vulnerable to it, as the rogue ability in all respects.",
        level: 3,
      },
      {
        name: "Earthbound (Ex)",
        description:
          "The sidewinder monk develops an innate connection with the earth, granting her a +4 competence bonus on opposed Strength checks made to resist bull rush or overrun attempts.",
        level: 4,
      },
      {
        name: "Fangs (Su)",
        description:
          "At 4th level, a sidewinder monk can grow fangs and gain a bite attack that deals 1d4 points of piercing damage (1d3 for Small sidewinder monks). She can grow her fangs once per day at 4th level and one additional time per day for every four levels thereafter (2/day at 8th, 3/day at 12th, 4/day at 16th, and 5/day at 20th). The fangs remain for a number of rounds equal to 1 + her Constitution bonus (minimum once [1 round]). This attack is made at her highest attack bonus. If the bite is made as part of a flurry of blows, the bite attack and all other flurry attacks suffer a -2 penalty. At 15th level, once per day, she may use her bite attack to instantly slay a living creature: the target must make a Fortitude save (DC 10 + 1/2 her sidewinder monk level + her Constitution modifier) or die. This is a poison attack.",
        level: 4,
      },
      {
        name: "Ki Strike (Su)",
        description:
          "As the monk class feature of the same name: the sidewinder monk's unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction at 5th level, as lawful weapons at 10th level, and as adamantine weapons at 16th level.",
        level: 5,
      },
      {
        name: "Wholeness of Body (Su)",
        description:
          "As the monk class feature of the same name: the sidewinder monk can heal her own wounds, restoring a number of hit points per day equal to twice her sidewinder monk level, divided as she chooses among multiple uses.",
        level: 7,
      },
      {
        name: "Intimidating Stance (Ex)",
        description:
          "By imitating the attitude and demeanor of a sidewinder, the sidewinder monk gains a +4 competence bonus on all Intimidate checks. This bonus improves to +6 while she is using her fangs ability.",
        level: 8,
      },
      {
        name: "Improved Evasion (Ex)",
        description:
          "As the monk class feature of the same name: the sidewinder monk takes no damage on a successful Reflex save against an effect that allows a save for half damage, and takes only half damage even on a failed save.",
        level: 9,
      },
      {
        name: "Diamond Body (Su)",
        description:
          "As the monk class feature of the same name: the sidewinder monk gains immunity to all poisons.",
        level: 11,
      },
      {
        name: "Diamond Soul (Ex)",
        description:
          "As the monk class feature of the same name: the sidewinder monk gains spell resistance equal to her sidewinder monk level + 10.",
        level: 13,
      },
      {
        name: "Timeless Body (Ex)",
        description:
          "As the monk class feature of the same name: the sidewinder monk no longer takes penalties to her ability scores for aging and cannot be magically aged, though aging bonuses still accrue and she still dies of old age when her time is up.",
        level: 17,
      },
      {
        name: "Tongue of the Sun and Moon (Ex)",
        description:
          "As the monk class feature of the same name: the sidewinder monk can speak with any living creature.",
        level: 17,
      },
      {
        name: "Perfect Self (Su)",
        description:
          "As the monk class feature of the same name: the sidewinder monk becomes a magical creature, treated as an outsider (a native outsider) for the purpose of spells and magical effects, and gains damage reduction 10/magic.",
        level: 20,
      },
    ],
  },
];

export const DRAGON_331_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
