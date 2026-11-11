import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Alchemy & Herbalists (Bastion Press, d20) prestige classes:
// the three alchemist classes of Saragun's Alcheminary
// (Chapter 2, printed pp. 16-19) and the two classes of
// Tarasta's School (Chapter 4, printed pp. 28-29), transcribed
// in full — progression tables included — from Shaun's own
// scanned copy (read visually, 2026-11-04; the class tables
// were re-checked against 250-DPI renders).
//
// HIT DIE: the book's class write-ups print no Hit Die line
// for any of these classes (verified in the Requirements /
// Class Skills / Class Features sections of all five). The
// "d4" recorded here is an editorial placeholder matching the
// classes' half-BAB, full-casting chassis, NOT a book value —
// flagged in the extraction report for a ruling before this
// pack is merged.
//
// All four 10-level classes share the book's printed chassis:
// BAB +0,+1,+1,+2,+2,+3,+3,+4,+4,+5; Fort and Ref
// +0,+0,+1,+1,+2,+2,+3,+3,+4,+4; Will
// +2,+3,+3,+4,+4,+5,+5,+6,+6,+7; 4 + Int skill points. The
// Tarastan Apothecary is a 5-level class with its own small
// spell list and a spells-known/spells-per-day table (the
// paired numbers on Table 5 are known/per day, per its text).
// The book is 3.0-era (Alchemy skill, Animal Empathy,
// Wilderness Lore, Pick Pocket); skill names are transcribed
// as printed. Summaries are short mechanical paraphrases in
// our own words; no book prose is reproduced.

const AH = "Alchemy & Herbalists";

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(slug: string, source: string) {
  return function f(name: string, description: string, levelsNeeded?: number): F {
    return {
      key: slug + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: "",
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const BAB10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const MED10 = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
const WILL10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];

const PROFICIENCY =
  "Alchemists gain no proficiency in any armor or weapons. Note that armor check penalties for armor heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble.";
const SPELLS_FULL =
  "An alchemist continues to study magic at the same time he studies alchemy and gains a level in spellcasting knowledge with each level as an alchemist (+1 level to an existing spellcasting class at every level). He does not, however, gain any other benefits a character of that class would have gained (hit points, save bonuses, metamagic or item creation feats, and so on). If a character had more than one spellcasting class before she became an alchemist, she must decide which class adds her levels of alchemist for purposes of determining spells per day.";
const BONUS_FEAT_NOTE = "Bonus Item Creation feat (see Bonus Feats).";

const fb = mk("black-alchemist", `${AH}, p. 16`);
const fw = mk("white-alchemist", `${AH}, p. 17`);
const fr = mk("red-alchemist", `${AH}, p. 18`);
const fh = mk("tarastan-herbalist", `${AH}, p. 28`);
const fa = mk("tarastan-apothecary", `${AH}, p. 29`);

export const ALCHEMY_HERBALISTS_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "black-alchemist",
    name: "Black Alchemist",
    ruleset: "core",
    source: `${AH}, p. 16`,
    sourceUrl: "",
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(BAB10, MED10, MED10, WILL10),
    classSkills: [
      "Craft (alchemy)", "Appraise", "Concentration", "Craft", "Knowledge (geography, nature)",
      "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Alchemy 8 ranks",
      "Skills: Craft 4 ranks (any one of the following: Blacksmith, Carpentry, Gemcutting, Leatherworking, Pottery, Sculpture, Stonemasonry)",
      "Feats: Skill Focus (Alchemy)",
      "Abilities: Ability to cast 2nd-level spells of any kind",
      "Saves: Fortitude save +3",
    ],
    features: [
      fb("Weapon and Armor Proficiency", PROFICIENCY),
      fb("Spells per Day", SPELLS_FULL),
      fb("Bonus Feats", "At every even level, black alchemists gain a bonus Item Creation feat tied to their specialties (the feats named in the progression table). If the character does not meet the prerequisites for the feat, it cannot be used until they are met (a character may have knowledge of Create Alchana but cannot use it until she gains Craft Wondrous Item, etc.). These feats are in addition to the feat that a character of any class gets every three levels."),
      fb("Enhanced Illusions", "Enhanced Spellcraft: due to the black alchemist's deep understanding of matter and materials, illusory images of inanimate objects are more sharply defined and focused — saving throw DCs are at +5 versus an opponent's disbelief or saves.", 1),
      fb("Craft Chymicals", BONUS_FEAT_NOTE, 2),
      fb("Enhanced Transmutations", "Enhanced Spellcraft: due to the intensive knowledge on matter gained, the alchemist can boost the integrity of transmutations done via spells — saving throw DCs are at +5 for all transmutation spells cast by this alchemist, and spell resistances are at -5 against these spells as well.", 3),
      fb("Create Alchana", BONUS_FEAT_NOTE, 4),
      fb("Perfect Materials", BONUS_FEAT_NOTE, 6),
      fb("Create Greater Alchana", BONUS_FEAT_NOTE, 8),
      fb("Craft Magic Arms & Armor", BONUS_FEAT_NOTE, 10),
      fb("Stonecrafting", "Given the highly focused attention put to inanimate matter, the black alchemist can only create the following Alchana Stones using Create Greater Alchana: Alchemist's Stone, Mystic's Stone, Philosopher's Stone."),
    ],
  },
  {
    id: "white-alchemist",
    name: "White Alchemist",
    ruleset: "core",
    source: `${AH}, p. 17`,
    sourceUrl: "",
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(BAB10, MED10, MED10, WILL10),
    classSkills: [
      "Craft (alchemy)",  "Concentration", "Craft", "Handle Animal", "Heal",
      "Knowledge (geography, nature)", "Profession", "Sense Motive", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Alchemy 8 ranks",
      "Skills: Heal 4 ranks",
      "Skills: Profession (Apothecary) 8 ranks or Profession (Herbalist) 8 ranks",
      "Feats: Skill Focus (Alchemy)",
      "Abilities: Spellcaster level 3rd+",
      "Saves: +3 to Fortitude Saves",
    ],
    features: [
      fw("Weapon and Armor Proficiency", PROFICIENCY),
      fw("Spells per Day", SPELLS_FULL),
      fw("Bonus Feats", "At first level and at every odd level thereafter, white alchemists gain a bonus Item Creation feat tied to their specialties (the feats named in the progression table). If the character does not meet the prerequisites for the feat, it cannot be used until they are met. These feats are in addition to the feat that a character of any class gets every three levels, and the alchemist is not limited to the list given in the table when choosing those feats."),
      fw("Craft Toxins", BONUS_FEAT_NOTE, 1),
      fw("Brew Ingestibles", BONUS_FEAT_NOTE, 3),
      fw("Craft Powders & Dusts", BONUS_FEAT_NOTE, 5),
      fw("Craft Unguents", BONUS_FEAT_NOTE, 7),
      fw("Enhance Medicinals", "Medicinals: the white alchemist can boost the efficacy of any healing or curative substances, whether they are herbal, alchemical, or magical in nature (potions, herbal restoratives, use of the Heal skill & healer's kit, etc.), due to expanded knowledge of healing and the body. Enhance: the curative gains a +1 per die of effectiveness for hit point restoration, or it provides the victim a +1 bonus on an additional Fortitude save immediately.", 8),
      fw("Craft Wondrous Items", BONUS_FEAT_NOTE, 9),
      fw("Perfect Medicinals", "Medicinals: the curative operates at maximum efficiency and provides the best amount of healing or medicine it is designed to do (totally negate a poison, maximize a healing draught's effects, etc.).", 10),
      fw("Stonecrafting", "As white alchemists are focused on adapting, perfecting, and healing organic and living matter, they can only create the following Alchana Stones (after gaining Create Greater Alchana and its prerequisites): Alchemist's Stone, Healer's Stone."),
    ],
  },
  {
    id: "red-alchemist",
    name: "Red Alchemist",
    ruleset: "core",
    source: `${AH}, p. 18`,
    sourceUrl: "",
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(BAB10, MED10, MED10, WILL10),
    classSkills: [
      "Craft (alchemy)",  "Appraise", "Concentration", "Craft", "Handle Animal",
      "Knowledge (geography, nature)", "Profession", "Sense Motive", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Alchemy 8 ranks",
      "Skills: Profession (Brewer) 4 ranks",
      "Skills: Any one Craft skill 2 ranks",
      "Feats: Skill Focus (Alchemy)",
      "Abilities: Spellcaster level 3rd+",
      "Saves: +3 to Fortitude Saves",
    ],
    features: [
      fr("Weapon and Armor Proficiency", PROFICIENCY),
      fr("Spells per Day", SPELLS_FULL),
      fr("Bonus Feats", "At first level and at nearly every level thereafter, red alchemists gain a bonus Item Creation feat tied to their specialties (the feats named in the progression table; no feat is gained at 6th level). If the character does not meet the prerequisites for the feat, it cannot be used until they are met. These feats are in addition to the feat that a character of any class gets every three levels, and the alchemist is not limited to the list given in the table when choosing those feats."),
      fr("Craft Chymicals", BONUS_FEAT_NOTE, 1),
      fr("Craft Powders & Dusts", BONUS_FEAT_NOTE, 2),
      fr("Craft Toxins", BONUS_FEAT_NOTE, 3),
      fr("Brew Ingestibles", BONUS_FEAT_NOTE, 4),
      fr("Craft Unguents", BONUS_FEAT_NOTE, 5),
      fr("Craft Wondrous Items", BONUS_FEAT_NOTE, 7),
      fr("Create Alchana", BONUS_FEAT_NOTE, 8),
      fr("Perfect Materials", BONUS_FEAT_NOTE, 9),
      fr("Create Greater Alchana", BONUS_FEAT_NOTE, 10),
      fr("Item Creation Bonuses", "Red alchemists gain bonuses to add versus the DC of creating items once they have learned the alchemical methods for doing so; thus, after gaining Craft Chymicals at 1st level with its +3 bonus for creating such items, the bonus increases every other level. Red alchemists should use the bonus as noted on Table 3 rather than the standard +3 bonus of the feat itself. Bonuses by level (Brew Ingestibles / Craft Chymicals / Craft Powders & Dusts / Craft Toxins / Craft Unguents / Create Alchana): 1st +0/+3/+0/+0/+0/+0; 2nd +0/+3/+3/+0/+0/+0; 3rd +0/+4/+3/+3/+0/+0; 4th +3/+4/+4/+3/+0/+0; 5th +3/+5/+4/+4/+3/+0; 6th +4/+5/+4/+4/+3/+0; 7th +4/+6/+5/+5/+4/+0; 8th +5/+6/+6/+5/+4/+3; 9th +5/+7/+6/+6/+5/+3; 10th +6/+7/+7/+6/+5/+4. There are no applicable bonuses for using the Perfect Materials or Create Greater Alchana feats."),
      fr("Stonecrafting", "Red alchemists, as the alchemists who study every aspect of alchemy, are the only ones capable of creating all Five Alchana Stones if and when they gain the appropriate feats and knowledge: the Alchemist's Stone, the Mystic's Stone, the Healer's Stone, the Philosopher's Stone, and the Sorcerer's Stone."),
    ],
  },
  {
    id: "tarastan-herbalist",
    name: "Tarastan Herbalist",
    ruleset: "core",
    source: `${AH}, p. 28`,
    sourceUrl: "",
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(BAB10, MED10, MED10, WILL10),
    classSkills: [
      "Craft (alchemy)", "Appraise", "Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal",
      "Knowledge (geography, nature)", "Profession", "Spellcraft", "Swim", "Use Magic Device",
      "Survival",
    ],
    prerequisites: [
      "Skills: Profession (Herbalist) 8 ranks",
      "Feats: Skill Focus (Profession (Herbalist))",
      "Abilities: Nature Sense (druid ability)",
      "Abilities: Spellcaster level 3rd+",
      "Saves: +2 to Fortitude Save",
    ],
    features: [
      fh("Weapon and Armor Proficiency", "Herbalists gain no proficiency in any armor. Note that armor check penalties for armor heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble. They do gain proficiency with one weapon — the sickle."),
      fh("Spells per Day", "An herbalist continues to study magic at the same time he studies herbalism, as all Tarastan herbalists are spellcasters to some degree; however, he only gains an additional level of spellcasting mastery every even level gained as an herbalist. This essentially means he adds half the levels gained as an herbalist (rounding down) to the level of some other spellcasting class the character has, and then determines spells per day and caster level accordingly (+1 level to current spellcasting class at 2nd, 4th, 6th, 8th, and 10th level). He does not gain any other benefits a character of that class would have gained (hit points, save bonuses, metamagic or item creation feats, and so on)."),
      fh("Bonus Feats", "At first level and at every odd level thereafter, Tarastan herbalists gain a bonus Item Creation feat tied to their herbal specialties (the feats named in the progression table). Tarasta's school is quite explicit in teaching the feats in a specific order. An herbalist must still meet all prerequisites for a feat to use it. These feats are in addition to the feat that a character of any class gets every three levels, and the herbalist is not limited to the list given in the table when choosing those feats."),
      fh("Craft Toxins", BONUS_FEAT_NOTE, 1),
      fh("Craft Herbal Restoratives", BONUS_FEAT_NOTE, 3),
      fh("Bloomagic", "At 4th level, herbalists gain a unique ability to heal plants using spell energies. They can cast any 0th- or 1st-level spell but negate its normal effects or abilities in favor of using the energies to restore plant life. This is a lesser version of the Flourish Spell feat or ability, though unlike that ability, the bloomagic talent allows the herbalist to do any one of the following with said energies: restore preserved herbs or plants to their healthiest, freshest state; or heal any nonmagical damage to a plant that can be touched directly (a broken stalk, trampled leaves and body, stripped bark, etc.) and encompassed entirely by the herbalist's hands (equivalent to a mending spell).", 4),
      fh("Craft Powders & Dust", BONUS_FEAT_NOTE, 5),
      fh("Flourish Spell", "At 6th level, Tarastan herbalists gain the spell-like ability Flourish Spell, allowing them to use spell energies (either arcane or divine) to heal or affect the growth of plants. See Flourish Spell in Chapter 6 under the New Feats section for more details on this ability's use. The only difference between that feat and the herbalist ability is that Flourish Spell can be used twice a day at will.", 6),
      fh("Grow Swathe", BONUS_FEAT_NOTE, 7),
      fh("Create Erlcana", BONUS_FEAT_NOTE, 9),
    ],
  },
  {
    id: "tarastan-apothecary",
    name: "Tarastan Apothecary",
    ruleset: "core",
    source: `${AH}, p. 29`,
    sourceUrl: "",
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows([0, 1, 1, 2, 2], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1], [2, 3, 3, 4, 4]),
    classSkills: [
      "Craft (alchemy)", "Handle Animal", "Concentration", "Craft", "Diplomacy", "Handle Animal",
      "Heal", "Knowledge (geography, nature)", "Profession", "Sense Motive", "Spellcraft",
      "Use Magic Device", "Survival",
    ],
    prerequisites: [
      "Abilities: Wisdom 12 (minimum for casting limited spell repertoire)",
      "Skills: Heal 1 rank",
      "Skills: Profession (Herbalist) 4 ranks",
      "Skills: Profession (Apothecary) 8 ranks",
      "Saves: +3 to Fortitude Save",
    ],
    features: [
      fa("Weapon and Armor Proficiency", "Herbalists gain no proficiency in any armor or weapons. Note that armor check penalties for armor heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble."),
      fa("Spells", "An apothecary does not necessarily know magic before beginning this prestige class. She does gain some small knowledge of natural magics and learns some limited magics normally available to druids, but she uses them more in the manner of a sorcerer, not learning by memorization so much as learning and using by gut instinct and a close connection to the healing powers of nature. The spells noted on Table 5 are marked with two numbers divided by a slash: the first number is how many spells the apothecary knows from her potential spell list, and the second number is how many times per day she can actually cast any spells of that level. Spells known/per day by class level — 1st: 0-level 0, 1st 0, 2nd 0; 2nd: 2/1, 0, 0; 3rd: 3/1, 1/1, 0; 4th: 4/2, 2/1, 1/1; 5th: 5/3, 3/2, 2/1. Spell list — 0-level: create water, cure minor wounds, detect poison, purify food and drink, virtue; 1st-level: calm animals, cure light wounds, goodberry; 2nd-level: delay poison, lesser restoration. If a character had a spellcasting class before she became a Tarastan apothecary, she foregoes advancement in that class while she studies and walks the path of the apothecary."),
      fa("Bonus Feats", "At first level and at every level thereafter, Tarastan apothecaries gain a bonus feat tied to their talents (the feats named in the progression table; Tarasta's school is quite explicit in teaching the feats in a specific order), but an apothecary must still meet all feat prerequisites to use it. These feats are in addition to the feat that a character of any class gets every three levels, and the apothecary is not limited to the list given in the table when choosing those feats."),
      fa("Skill Focus (Profession: Apothecary)", BONUS_FEAT_NOTE, 1),
      fa("Craft Herbal Restoratives", BONUS_FEAT_NOTE, 2),
      fa("Bodily Awareness", BONUS_FEAT_NOTE, 3),
      fa("Diagnosis", BONUS_FEAT_NOTE, 4),
      fa("Craft Toxins", BONUS_FEAT_NOTE, 5),
      fa("Skill Restrictions", "Any skill points earned while learning this prestige class go first to Profession: Apothecary and then to Heal. Those two skills must be at the maximum allowed per level before skill points can be placed among other skills."),
    ],
  },
];
