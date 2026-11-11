// Dragon Magazine #349 prestige class — integrated in the Dragon
// Magazine treatment program (issue #349 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-349/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Thrall of Dagon, staged as printed except its Contact Dagon feature, which is held out to the pack reference (divergence from the #329 precedent, disclosed in the pack SCREENING).
// Records carry levels 1-10 progression rows on the class chassis
// with features at their true levels (prestige classes derive
// BAB/saves from their printed tables). Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

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

const RAW: RawClassLike[] = [
  {
    id: "thrall-of-dagon",
    name: "Thrall of Dagon",
    source: "Dragon Magazine #349 — Demonomicon of Iggwilv: Dagon, pp. 36-39",
    sourceUrl: SRC_URL,
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    classSkills: [
      "Appraise",
      "Bluff",
      "Concentration",
      "Craft",
      "Disguise",
      "Intimidate",
      "Knowledge (nature)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Perform",
      "Profession",
      "Survival",
      "Swim",
    ],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Skills: Knowledge (religion) 4 ranks, Knowledge (the planes) 4 ranks, Perform (sing) 4 ranks, Swim 8 ranks",
      "Special: Must be able to cast 2nd-level spells",
      "Special: Must have successfully contacted a powerful evil aquatic creature and sacrificed an intelligent creature in its name",
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
    features: [
      {
        name: "Thrall of Dagon Basics",
        level: 1,
        description:
          "Hit Die d6. A secretive, sinister spellcaster bound to Dagon, Prince of the Darkened Depths: thralls serve as intermediaries between the surface world and the aquatic depths, voicing Dagon's will to his followers under the sea or orchestrating the corruption of coastal communities. Bards qualify most easily; sorcerers and clerics are also common (a cleric thrall must take Dagon as patron deity if he has not already). An ex-druid who has become chaotic evil loses her druid powers on entering this class but regains her spellcasting at 2nd level, and regains her animal companion then only if it is aquatic. Screening note: the class's printed 8th-level feature, Contact Dagon, is held in reference.md for this pack (see SCREENING.md); the 8th level as staged advances spellcasting only.",
      },
      {
        name: "Spells per Day",
        level: 1,
        description:
          "At every level except 1st and 6th, a thrall of Dagon gains new spells per day (and spells known, if applicable) as if she had also gained a level in a spellcasting class she belonged to before adding the prestige class. She does not gain any other benefit that class would have given (improved chance of turning or destroying undead, metamagic or item creation feats, and so on). If the thrall had more than one spellcasting class before becoming a thrall of Dagon, she must decide to which class to add each level for the purpose of determining spells per day.",
      },
      {
        name: "Sea Longing (Ex)",
        level: 1,
        description:
          "A thrall of Dagon is bound physically to the sea. After spending one week away from the shore of the ocean (or of a body of water connected to the ocean; rivers do not count), she must make a Fortitude save each day (DC 15, +1 for each previous check) or take 1d6 points of Wisdom damage. Returning to a shoreline ends the effect; the Wisdom damage heals normally.",
      },
      {
        name: "Song of Dagon (Su)",
        level: 1,
        description:
          "Once per day (twice per day at 3rd level, three times at 5th, four times at 7th, five times at 9th), while near a body of water large enough to support aquatic life, a thrall of Dagon can sing as a standard action. All creatures within 60 feet must succeed on a Will save (DC 10 + thrall of Dagon level + Charisma modifier) or become fascinated. A fascinated creature moves toward the water and wades in, continuing out into the water for as long as the fascination lasts (a number of rounds equal to the thrall's level); a creature without a swim speed or the ability to breathe water receives no special protection and can drown. A fascinated creature never attacks the thrall or her submerged allies. The effect ends for all creatures if the thrall is attacked by any creature in range, and a thrall can stop singing after the first round.",
      },
      {
        name: "First Invocation (Su)",
        level: 2,
        description:
          "A thrall of Dagon performs an eight-hour ritual at a natural body of water, beginning at moonrise and ending at sunrise (in the depths of the ocean it may be performed at any time). The ritual requires the sacrifice of valuables worth at least 1,000 gp and of one intelligent creature of at least Tiny size, delivered by coup de grace at the ritual's end with no saving throw, and the thrall must inflict 1d4 points of Constitution damage on herself during the rite (this damage may not be magically healed first, though it may heal naturally afterward). At dawn the thrall's body deforms — bulging eyes, patches of scales or slick skin — and she gains a +4 competence bonus on Swim checks and a swim speed of 10 feet (or +10 feet to an existing swim speed).",
      },
      {
        name: "Voice of Rapture (Su)",
        level: 4,
        description:
          "After speaking to a listener for one minute, a thrall of Dagon can attempt to charm that listener: the listener must succeed on a Will save (DC 10 + thrall of Dagon level + Charisma modifier) or be charmed, as the charm monster spell. This ability can be used a number of times per day equal to the thrall's Charisma modifier. It is a sonic, language-dependent, mind-affecting effect, and the listener must be within 30 feet.",
      },
      {
        name: "Second Invocation (Su)",
        level: 6,
        description:
          "The second invocation is a grimmer rite: eight hours performed on the open sea out of sight of any land, involving nonstop chants invoking Dagon's name, self-mutilation by allowing sharks and other aquatic predators to chew at the thrall's body, and the sacrifice of at least seven intelligent good-aligned creatures to those predators. At its end the thrall deforms further — bulbous, watery eyes, gills along the neck, patches of scales — gaining darkvision out to 60 feet (existing darkvision instead increases by 60 feet), the ability to breathe water as well as air, and a +2 increase to her natural armor bonus.",
      },
      {
        name: "Third Invocation (Su)",
        level: 10,
        description:
          "At 10th level the thrall may perform the final invocation to the Prince of the Darkened Depths: an eight-hour ritual on the open sea out of sight of any land, with nonstop chants invoking Dagon's name, self-mutilation by aquatic predators, and the sacrifice of at least seven intelligent good-aligned creatures. The thrall's body deforms fully into a horrific amalgam of fish, mollusk, and her former shape. She gains a +2 bonus to Strength and Constitution, the aquatic subtype (the magazine prints 'the aquatic template'), the amphibious extraordinary quality, and a tentacle attack as a natural weapon that replaces none of her existing limbs or natural attacks. Tentacle damage by size: Fine —, Diminutive 1, Tiny 1, Small 1d3, Medium 1d4, Large 1d6, Huge 1d8, Gargantuan 2d6, Colossal 2d8. If the thrall hits with the tentacle, she may immediately attempt to grapple the target without provoking an attack of opportunity (improved grab).",
      },
    ],
  },
];

export const DRAGON_349_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
