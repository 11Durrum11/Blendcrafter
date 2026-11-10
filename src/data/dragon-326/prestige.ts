// Dragon Magazine #326 (Dec 2004) prestige class — integrated in
// the Dragon Magazine treatment program (issue #326 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-326/
// (MANIFEST.md / SCREENING.md / reference.md).
// The SHAPER OF FORM (Gaining Prestige, Monte Cook, pp. 82-84):
// 10 levels, d6, half BAB, Fortitude and Will good — prerequisites,
// class skills, and the full progression image-verified against
// the class table (p. 84); the Hit Die d6 is image-verified from
// the p. 82 badge (the OCR stream drops it). Feature descriptions
// are faithful mechanical paraphrases in our own words; no
// magazine prose is reproduced.

import type { PrestigeClassDefinition } from "@/engine/types";
import type {
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
  key?: string;
  name: string;
  category?: string;
  source?: string;
  sourceUrl?: string;
  description: string;
  level?: number;
}

interface RawClassLike {
  id: string;
  name: string;
  role?: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression?: string;
  goodSaves?: string[];
  requirements?: { label: string; value: string }[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  prerequisites?: string[];
  length?: number;
  features: RawFeature[];
}


function deriveBab(rows: ClassLevelProgressionRow[]): string {
  const last = rows[rows.length - 1];
  if (!last) return "half";
  if (last.bab >= last.level) return "full";
  if (last.bab >= Math.floor((last.level * 3) / 4)) return "three-quarter";
  return "half";
}

function deriveSaves(rows: ClassLevelProgressionRow[]): string[] {
  const good = (v: number, lvl: number) => v >= 2 + Math.floor(lvl / 2) - 1;
  const out: string[] = [];
  const last = rows[rows.length - 1];
  if (!last) return out;
  if (good(last.fort, last.level)) out.push("fort");
  if (good(last.ref, last.level)) out.push("ref");
  if (good(last.will, last.level)) out.push("will");
  return out;
}

const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const RAW: RawClassLike[] = [{
    id: "shaper-of-form",
    name: "Shaper of Form",
    ruleset: "core",
    source: "Dragon Magazine #326 — Gaining Prestige: The Shaper of Form (Monte Cook), pp. 82-84",
    sourceUrl: SRC_URL,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    prerequisites: [
      "Skills: Craft (alchemy) 5 ranks, Craft (any other craft skill) 8 ranks, Knowledge (arcana) 5 ranks",
      "Feats: Great Fortitude, Spell Focus (transmutation)",
      "Spells: Ability to cast six spells from the school of transmutation",
      "Special: The character must have been contacted by the spirits of form, mysterious beings from beyond the normal ken of mortals",
    ],
    progression: [
      { level: 1, bab: 0, fort: 2, ref: 0, will: 2 },
      { level: 2, bab: 1, fort: 3, ref: 0, will: 3 },
      { level: 3, bab: 1, fort: 3, ref: 1, will: 3 },
      { level: 4, bab: 2, fort: 4, ref: 1, will: 4 },
      { level: 5, bab: 2, fort: 4, ref: 1, will: 4 },
      { level: 6, bab: 3, fort: 5, ref: 2, will: 5 },
      { level: 7, bab: 3, fort: 5, ref: 2, will: 5 },
      { level: 8, bab: 4, fort: 6, ref: 2, will: 6 },
      { level: 9, bab: 4, fort: 6, ref: 3, will: 6 },
      { level: 10, bab: 5, fort: 7, ref: 3, will: 7 },
    ],
    classSkills: [
      "Appraise",
      "Concentration",
      "Craft",
      "Disable Device",
      "Escape Artist",
      "Heal",
      "Knowledge (arcana)",
      "Profession",
      "Spellcraft",
    ],
    features: [
      {
        name: "Basics",
        description:
          "Hit Die d6. Weapon and Armor Proficiency: shapers of form gain no proficiency with any weapon or armor. Class skills: Appraise, Concentration, Craft, Disable Device, Escape Artist, Heal, Knowledge (arcana), Profession, and Spellcraft. Spells: when a shaper of form gains her 1st level, and every odd level after that (plus 10th level), she gains new spells per day as if she had also gained a level in whatever spellcasting class she belonged to before she added the prestige class — she adds the shaper of form level to that class's level to determine spells per day, spells known, and caster level, but gains no other benefit that class would have granted (such as an improved chance of controlling or rebuking undead, or metamagic or item creation feats). If she had more than one spellcasting class before becoming a shaper of form, she must decide to which class she adds each such level for spellcasting purposes.",
        level: 1,
      },
      {
        name: "Like Begets Like (Su)",
        description:
          "Once per day per three class levels, the shaper of form can change one nonmagic object of her size or smaller into a similar object of the same size. Similar items have the same or nearly the same shape and a weight within 50% of each other, and must share a material in their construction that constitutes at least half of their form (a scimitar can become a longsword; a dagger cannot become a short sword, which weighs twice as much; leather armor can become studded leather but not a chain shirt). Overall improvements can be made, but the value of the item cannot increase by more than double its original worth. The change is permanent and cannot be dispelled or otherwise removed by any means short of a wish or miracle. Using this ability requires a full-round action, and the shaper of form must touch the item; an item in another creature's possession gets a Fortitude save (DC 10 + shaper of form level) to resist the effect.",
        level: 1,
      },
      {
        name: "Modify Self (Ex)",
        description:
          "At 1st level and every three levels thereafter (at 4th, 7th, and 10th level), the shaper of form can gain one effect from the following list, achieved by applying shaping magic to her own body; the effect is permanent, and the same ability may be chosen more than once, its effects stacking with themselves. These effects cannot be removed by any means short of a wish or miracle, and each use of one of those spells removes only a single effect. Prowess: a +1 inherent bonus to a physical ability score (Strength, Constitution, or Dexterity). Quickness: +10 feet added to her base land speed. Renaissance: she changes race, gender, or general physical appearance — she cannot change type, no ability score adjustments occur as a result of the change, and she cannot choose to become a member of a race with a level adjustment. Resilience: a +1 natural armor bonus. Toughness: +10 hit points.",
        level: 1,
      },
      {
        name: "Fortify Item (Su)",
        description:
          "At 2nd level, a shaper of form can increase the hardness of a single object of her size or smaller by 1 with a touch. She can do this once per day. The change is permanent, an object can receive the benefit of this ability only once, and the effect cannot be removed by any means short of a wish or miracle.",
        level: 2,
      },
      {
        name: "Polymorph (Sp)",
        description:
          "At 2nd level, the shaper of form can cast polymorph once per day as a spell-like ability. At 3rd level, she can cast polymorph twice per day.",
        level: 2,
      },
      {
        name: "Resist Shaping (Ex)",
        description:
          "At 4th level, the shaper of form gains a +2 inherent bonus on saves against transmutation magic (bonus type as printed).",
        level: 4,
      },
      {
        name: "Like Begets Like (Magic Items)",
        description:
          "At 5th level, the shaper of form can use like begets like on magic items. The magical qualities of the item do not change (a +1 flaming longsword reshaped into a warhammer becomes a +1 flaming warhammer), the value of the finished item cannot exceed the value of the original, and the change lasts for only 24 hours.",
        level: 5,
      },
      {
        name: "As Above, So Below (Su)",
        description:
          "Once per day at 6th level, the shaper of form can temporarily alter any non-living object of her size or smaller, changing it into another object of her size or smaller that she can touch once per day (for example, transforming a rock at her feet into a greatsword like the one an oncoming foe wields). The finished item can have a value no greater than 1,000 gp per level of the shaper of form. Magic qualities can be duplicated as well, as long as she can identify them with a successful Spellcraft check. The change lasts for 1 round per class level and cannot be removed before its duration expires by any means short of a wish or miracle. This effect requires a full-round action, and she must touch the item to be changed in order to affect it.",
        level: 6,
      },
      {
        name: "Like Begets Like (Larger Objects)",
        description:
          "At 8th level, the shaper of form can use like begets like on any object up to three sizes larger than herself.",
        level: 8,
      },
      {
        name: "Polymorph Any Object (Sp)",
        description:
          "At 9th level, the shaper of form can cast polymorph any object once per day as a spell-like ability.",
        level: 9,
      },
      {
        name: "Disable (Sp)",
        description:
          "At 10th level, the shaper of form gains the ability to ruin an item once every other day. She can create a Mordenkainen's disjunction effect to completely remove all magical abilities from a single item, or disintegrate (as the spell) any nonmagical, nonliving object. Neither use of this ability allows a saving throw, although artifacts can only be affected as described under Mordenkainen's disjunction.",
        level: 10,
      },
    ],
  },];

export const DRAGON_326_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as PrestigeClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: (c.babProgression ?? deriveBab(c.progression)) as PrestigeClassDefinition["babProgression"],
  goodSaves: (c.goodSaves ?? deriveSaves(c.progression)) as PrestigeClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  prerequisites: c.prerequisites ?? (c.requirements ?? []).map((r) => `${r.label}: ${r.value}`),
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
