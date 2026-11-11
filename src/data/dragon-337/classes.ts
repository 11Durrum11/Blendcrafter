// Dragon Magazine #337 classes — integrated in the Dragon
// Magazine treatment program (issue #337 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-337/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Harbinger, a bard variant class, staged as printed and image-verified. Zuggtmoy and her material are reference-only in full.
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
const SRC = "Dragon Magazine #337 — Class Acts: Harbinger (Daniel Lawson), p. 93";

const BARD_PROGRESSION = [
  { level: 1, bab: 0, fort: 0, ref: 2, will: 2 },
  { level: 2, bab: 1, fort: 0, ref: 3, will: 3 },
  { level: 3, bab: 2, fort: 1, ref: 3, will: 3 },
  { level: 4, bab: 3, fort: 1, ref: 4, will: 4 },
  { level: 5, bab: 3, fort: 1, ref: 4, will: 4 },
  { level: 6, bab: 4, fort: 2, ref: 5, will: 5 },
  { level: 7, bab: 5, fort: 2, ref: 5, will: 5 },
  { level: 8, bab: 6, fort: 2, ref: 6, will: 6 },
  { level: 9, bab: 6, fort: 3, ref: 6, will: 6 },
  { level: 10, bab: 7, fort: 3, ref: 7, will: 7 },
];

const BARD_SKILLS = [
  "Appraise",
  "Balance",
  "Bluff",
  "Climb",
  "Concentration",
  "Craft",
  "Decipher Script",
  "Diplomacy",
  "Disguise",
  "Escape Artist",
  "Gather Information",
  "Hide",
  "Jump",
  "Knowledge (arcana)",
  "Knowledge (architecture and engineering)",
  "Knowledge (dungeoneering)",
  "Knowledge (geography)",
  "Knowledge (history)",
  "Knowledge (local)",
  "Knowledge (nature)",
  "Knowledge (nobility and royalty)",
  "Knowledge (religion)",
  "Knowledge (the planes)",
  "Listen",
  "Move Silently",
  "Perform",
  "Profession",
  "Sense Motive",
  "Sleight of Hand",
  "Speak Language",
  "Spellcraft",
  "Swim",
  "Tumble",
  "Use Magic Device",
];

const RAW: RawClass[] = [
  {
    id: "harbinger",
    name: "Harbinger",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: BARD_PROGRESSION,
    classSkills: BARD_SKILLS,
    features: [
      {
        name: "Harbinger Basics",
        description:
          "The harbinger is a variant bard who reverses the fundamental power of bardic music: where the standard bard brightens the world, the harbinger creates darkness and doubt, using music designed to destroy the morale of others and lead them to destruction, bringing out the worst fears and insecurities in those around him. Unless otherwise noted, a harbinger advances in the same manner as a bard — same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills. When a character elects to take a level of bard or harbinger, he may not later take levels in the other class; this prevents gaining the benefits of a 1st-level bard twice. Alignment: any nonlawful nongood. Weapon and armor proficiency, spellcasting, and bardic knowledge advance as for a bard of the same level; only the bardic music suite differs, as detailed below. Key abilities: Charisma, Dexterity, and Intelligence.",
        level: 1,
      },
      {
        name: "Bardic Music",
        description:
          "The harbinger's bardic music abilities differ from those of the standard bard (he gains instill fear, encourage failure, dishearten, dirge of binding, and drain prowess instead of the bard's music suite). Unless otherwise noted, a harbinger's bardic music abilities allow a Will save (DC 10 + 1/2 harbinger level + Charisma modifier). Uses per day and other general bardic music rules advance as for a bard of the same level.",
        level: 1,
      },
      {
        name: "Instill Fear (Su)",
        description:
          "A harbinger with 3 or more ranks in a Perform skill can use song or poetics to instill fear into his enemies, weakening them against fear and worsening their combat abilities. The harbinger must be able to see his targets and be seen or heard by them. The effect lasts for as long as the enemy hears the harbinger sing and for 5 rounds thereafter. An affected enemy takes a -1 penalty on saving throws against charm and fear effects and a -1 penalty on attack and weapon damage rolls. At 8th level, and every six harbinger levels thereafter, this penalty increases by 1 (-2 at 8th, -3 at 14th, and -4 at 20th). Instill fear is a mind-affecting fear effect.",
        level: 1,
      },
      {
        name: "Encourage Failure (Su)",
        description:
          "A harbinger of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to cause one enemy to fail at a task. The enemy must be within 30 feet and able to see and hear the harbinger; the harbinger must also be able to see the enemy. The affected target takes a -2 penalty on all rolls for 1 round. Encourage failure is a mind-affecting ability.",
        level: 3,
      },
      {
        name: "Dishearten (Su)",
        description:
          "A harbinger of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to dishearten a single enemy within 30 feet, causing the enemy to cower even against the weakest foe. For every three harbinger levels the character attains beyond 15th, he can dishearten one additional creature. To dishearten, a harbinger must sing and the enemy must hear the harbinger sing for a full round. A creature so affected takes a -4 penalty on saving throws and AC. The effect lasts for as long as the enemy hears the harbinger sing and for up to 5 rounds thereafter. Dishearten is a mind-affecting ability.",
        level: 9,
      },
      {
        name: "Dirge of Binding (Sp)",
        description:
          "A harbinger of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect that paralyzes one target. The effect lasts as long as the creature can hear the harbinger.",
        level: 12,
      },
      {
        name: "Drain Prowess (Su)",
        description:
          "A harbinger of 18th level or higher with 21 or more ranks in a Perform skill can use his music or poetics to drain prowess from up to four enemies within 30 feet, weakening their skills and fighting capabilities. For every three levels a harbinger attains beyond 18th, he can target one additional enemy with a single use of this ability. To be affected, the enemies must be able to hear the harbinger sing. The effect lasts for as long as the enemy hears the harbinger sing. A creature drained of prowess gains two negative levels; these negative levels remain as long as the target creature can hear the harbinger and never result in permanent level loss.",
        level: 18,
      },
    ],
  },
];

export const DRAGON_337_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
