// Dragon Magazine #351 classes — integrated in the Dragon
// Magazine treatment program (issue #351 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-351/
// (MANIFEST.md / SCREENING.md / reference.md).
// Variant class features staged as variant classes, flagged per the pack SCREENING: Blood of Eberron/Khyber/Siberys Sorcerer, Bane of the Clockwork Monk.
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
const SRC_DRAGONMARKS = "Dragon Magazine #351 — Dragonmarks: Sorcerers in Eberron (Keith Baker), pp. 76-79";
const SRC_CLOCKWORK = "Dragon Magazine #351 — Class Acts: The Clockwork Disciple (Stephanie Vergamini), pp. 92-93";

const SORCERER_PROGRESSION = [
  { level: 1, bab: 0, fort: 0, ref: 0, will: 2 },
  { level: 2, bab: 1, fort: 0, ref: 0, will: 3 },
  { level: 3, bab: 1, fort: 1, ref: 1, will: 3 },
  { level: 4, bab: 2, fort: 1, ref: 1, will: 4 },
  { level: 5, bab: 2, fort: 1, ref: 1, will: 4 },
  { level: 6, bab: 3, fort: 2, ref: 2, will: 5 },
  { level: 7, bab: 3, fort: 2, ref: 2, will: 5 },
  { level: 8, bab: 4, fort: 2, ref: 2, will: 6 },
  { level: 9, bab: 4, fort: 3, ref: 3, will: 6 },
  { level: 10, bab: 5, fort: 3, ref: 3, will: 7 },
];

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
    id: "blood-of-eberron-sorcerer",
    name: "Blood of Eberron Sorcerer",
    ruleset: "core",
    source: SRC_DRAGONMARKS,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: SORCERER_PROGRESSION,
    classSkills: [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (nature)",
      "Profession",
      "Spellcraft",
    ],
    features: [
      {
        name: "Blood of Eberron Sorcerer Basics",
        description:
          "A variant sorcerer whose innate magic is tied to the natural world. This is a 1st-level variant class feature, staged as a variant class on the sorcerer chassis (same Hit Die, base attack bonus, saving throws, skill points, and spellcasting as the sorcerer). Taking this variant replaces two parts of the base class: you do not gain the sorcerer's normal list of class skills (the Blood of Eberron list below applies instead), and you do not gain a familiar. In place of the familiar you gain an animal companion (see the Blood of Eberron feature). The Eberron cosmology framing printed with the variant is setting lore and is held in the pack's reference.md; only the mechanics stage here. Key ability: Charisma.",
        level: 1,
      },
      {
        name: "Blood of Eberron",
        description:
          "Your sorcerer class skills are: Concentration, Craft, Diplomacy, Handle Animal, Heal, Knowledge (arcana), Knowledge (nature), Profession, and Spellcraft. In addition, you gain an animal companion, as a druid of half your sorcerer level. Your druid, ranger, and sorcerer levels stack to determine the abilities of your animal companion. If you possess the Natural Spell feat, its benefits apply any time you are in the form of an animal, whether due to wild shape, polymorph, or other magical effects.",
        level: 1,
      },
    ],
  },
  {
    id: "blood-of-khyber-sorcerer",
    name: "Blood of Khyber Sorcerer",
    ruleset: "core",
    source: SRC_DRAGONMARKS,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: SORCERER_PROGRESSION,
    classSkills: [
      "Bluff",
      "Concentration",
      "Craft",
      "Intimidate",
      "Knowledge (arcana)",
      "Knowledge (dungeoneering)",
      "Profession",
      "Spellcraft",
    ],
    features: [
      {
        name: "Blood of Khyber Sorcerer Basics",
        description:
          "A variant sorcerer whose innate magic leans toward conjuration and transmutation at the expense of abjuration and divination. This is a 1st-level variant class feature, staged as a variant class on the sorcerer chassis (same Hit Die, base attack bonus, saving throws, skill points, and spellcasting as the sorcerer). Taking this variant replaces two parts of the base class: you do not gain the sorcerer's normal list of class skills (the Blood of Khyber list below applies instead), and you do not gain a familiar. The Eberron cosmology framing printed with the variant is setting lore and is held in the pack's reference.md; only the mechanics stage here. APOC note: summoning spells do not work under the sealed sphere, so the conjuration (summoning) half of the caster-level benefit is largely inert in APOC play — staged as printed and flagged in SCREENING.md. Key ability: Charisma.",
        level: 1,
      },
      {
        name: "Blood of Khyber",
        description:
          "Your sorcerer class skills are: Bluff, Concentration, Craft, Intimidate, Knowledge (arcana), Knowledge (dungeoneering), Profession, and Spellcraft. Your caster level increases by 1 whenever you cast spells from the schools of conjuration (summoning) or transmutation. You cannot summon any creature of good alignment. In addition, your caster level decreases by 1 (minimum caster level 1st) whenever you cast spells from the schools of abjuration or divination.",
        level: 1,
      },
    ],
  },
  {
    id: "blood-of-siberys-sorcerer",
    name: "Blood of Siberys Sorcerer",
    ruleset: "core",
    source: SRC_DRAGONMARKS,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: SORCERER_PROGRESSION,
    classSkills: [
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Knowledge (arcana)",
      "Knowledge (the planes)",
      "Profession",
      "Spellcraft",
    ],
    features: [
      {
        name: "Blood of Siberys Sorcerer Basics",
        description:
          "A variant sorcerer whose bond to raw arcane magic deepens the reservoir of spells his Charisma supports. This is a 1st-level variant class feature, staged as a variant class on the sorcerer chassis (same Hit Die, base attack bonus, saving throws, skill points, and spellcasting as the sorcerer). Taking this variant replaces two parts of the base class: you do not gain the sorcerer's normal list of class skills (the Blood of Siberys list below applies instead), and you do not gain a familiar. The Eberron cosmology framing printed with the variant is setting lore and is held in the pack's reference.md; only the mechanics stage here. Key ability: Charisma.",
        level: 1,
      },
      {
        name: "Blood of Siberys",
        description:
          "Your sorcerer class skills are: Bluff, Concentration, Craft, Diplomacy, Knowledge (arcana), Knowledge (the planes), Profession, and Spellcraft. In addition, you add +4 to your effective Charisma for purposes of determining bonus sorcerer spells and the maximum level of spell you can cast. For example, even if your natural Charisma is 14, you can still cast up to 8th-level sorcerer spells. This bonus does not affect saving throw DCs, skill rolls, or provide any of the other benefits dependent on Charisma.",
        level: 1,
      },
    ],
  },
  {
    id: "bane-of-the-clockwork-monk",
    name: "Bane of the Clockwork Monk",
    ruleset: "core",
    source: SRC_CLOCKWORK,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: MONK_PROGRESSION,
    classSkills: MONK_SKILLS,
    features: [
      {
        name: "Bane of the Clockwork Monk Basics",
        description:
          "A variant monk built around a single 3rd-level variant class feature, staged as a variant class on the monk chassis (same Hit Die, base attack bonus, saving throws, skill points, class skills, and features as the monk except as noted). At 3rd level the monk gains Bane of the Clockwork in place of two parts of the base class: he never gains slow fall, and he does not gain the monk's 6th-level bonus feat. The article's lost-civilization technomagic framing (the Clockwork Disciple material) is setting color; the article itself notes the material ports to other settings, and only the mechanics stage here. ⚠️ STAGED WITH FLAG — monk-variant precedents are mixed; see SCREENING.md §5. Key abilities: Wisdom, Dexterity, and Strength.",
        level: 1,
      },
      {
        name: "Bane of the Clockwork (Ex)",
        description:
          "At 3rd level, you can deal critical hit damage against constructs with your unarmed strikes; this does not apply to attacks made with monk special weapons. In addition, constructs are no longer immune to your Stunning Fist or quivering palm attacks. This feature replaces slow fall (which you never gain) and the monk's 6th-level bonus feat (which you do not gain).",
        level: 3,
      },
    ],
  },
];

export const DRAGON_351_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
