// Dragon Magazine #354 prestige class — integrated in the Dragon
// Magazine treatment program (issue #354 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-354/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Totemic Demonslayer, staged as printed. The issue's ninja ACFs are held in the pack reference in full (Shaun's standing ninja decline).
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
const SRC = "Dragon Magazine #354 — Savage Tidings: Totemic Demonslayer (Greg Vaughan), pp. 64-69";

const RAW: RawClassLike[] = [
  {
    id: "totemic-demonslayer",
    name: "Totemic Demonslayer",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    prerequisites: [
      "Alignment: Any nonevil",
      "Skills: Knowledge (nature) 8 ranks, Knowledge (the planes) 2 ranks, Survival 2 ranks",
      "Base Attack Bonus: +4",
      "Special: The recipient must undergo a ritual conducted by an Olman holy man and the Church of the Whirling Fury",
    ],
    progression: [
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
    ],
    classSkills: [
      "Climb",
      "Concentration",
      "Craft",
      "Handle Animal",
      "Hide",
      "Jump",
      "Knowledge (geography)",
      "Knowledge (nature)",
      "Knowledge (the planes)",
      "Listen",
      "Move Silently",
      "Spot",
      "Survival",
      "Swim",
    ],
    features: [
      {
        name: "Totemic Demonslayer Basics",
        description:
          "The totemic demonslayer is a wilderness warrior of the Olman people of the Isle of Dread, developed — with missionaries of the Church of the Whirling Fury — to combat fiendish incursions: an anti-demon specialist whose powers flow from ancestral totem spirits, embodied in magical tattoos he collects as he advances. Weapon and Armor Proficiency: the article prints no new proficiencies for the class. Spells: the totemic demonslayer casts a small number of divine spells from the class spell list (printed in the article and digested in the pack's reference.md). To cast a spell he must have a Wisdom score of at least 10 + the spell's level; bonus spells are based on Wisdom, and save DCs are 10 + spell level + his Wisdom modifier. He has access to the whole class list and prepares spells ahead of time just as a cleric does, though he cannot spontaneously cast cure or inflict spells. When he gets 0 spells per day of a given level he gains only the bonus spells for that level his Wisdom entitles him to. Spells per day by class level (1st/2nd/3rd/4th): 1st 0/—/—/—; 2nd 1/—/—/—; 3rd 1/0/—/—; 4th 1/1/—/—; 5th 1/1/0/—; 6th 1/1/1/—; 7th 2/1/1/0; 8th 2/1/1/1; 9th 2/2/1/1; 10th 2/2/2/1. (The sample demonslayer in the article casts as a caster of his class level.) Rangers, barbarians, and druids are the commonest entrants; fighters, monks, and even sorcerers are known. APOC note: the class spell list as printed includes summon nature's ally I-IV; summoning spells do not work in APOC — see SCREENING.md. Key abilities: Wisdom (spellcasting) and Strength.",
        level: 1,
      },
      {
        name: "Favored Enemy (Ex)",
        description:
          "At 1st level, the totemic demonslayer gains the favored enemy (evil outsider) ability just as if he were a ranger who had chosen evil outsiders as a favored enemy: a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against evil outsiders, and a +2 bonus on weapon damage rolls against such creatures. If he already has evil outsider as a favored enemy from another class, the bonuses stack with those from that class.",
        level: 1,
      },
      {
        name: "Lesser Totem Tattoo (Su)",
        description:
          "At 1st level, and again at 3rd and 5th level, the totemic demonslayer gains a lesser totem tattoo. Totem tattoos are supernatural abilities granted by his ancestral spirits: activating one is a swift action that does not provoke attacks of opportunity; each tattoo can be used once per day, though the same tattoo may be taken multiple times (at later tattoo gains) for additional daily uses. They can be dispelled (caster level equal to the demonslayer's level). When a tattoo is activated, a DC 15 Spot check notices a faint aura in the shape of the totem animal around him for 1 round, and the shape can be seen clearly by anyone using see invisibility; more than one tattoo can be in use at the same time. A tattoo choice can never be changed or erased, and a demonslayer can never have more tattoos than his level allows — additional attempted tattoos smudge in the tattooing and leave permanent scarring. If a tattoo is cut or burned off, or the limb bearing it is lost, the tattoo reappears at another location on his body within a few days, so he never loses the use of a tattoo's powers. Lesser tattoos (full text in the pack's reference.md): Allosaurus (improved grab on a natural-attack hit; on a hold, rake as a secondary weapon for 1d8 + Strength modifier; 3 rounds); Ape (after two successful melee hits on a single opponent in one round, rend automatically for 2d6 + twice his Strength modifier; activation is a swift action and may be declared after the hits; 3 rounds); Baboon (climb speed 30 feet, +8 racial bonus on Climb checks, may take 10 on Climb checks even if rushed or threatened; 10 rounds); Badger (rage identical to a 1st-level barbarian's: +4 Strength, +4 Constitution, +2 Will saves, -2 AC); Boar (ferocity — continue fighting without penalty while disabled or dying; 10 rounds); Crocodile (hold his breath for a number of rounds equal to 4 x his Constitution score before risking drowning; 1 hour); Deinonychus (pounce — make a full attack when charging, and if the allosaurus tattoo is also active gain its rake attacks on the pounce; 3 rounds); Dimetrodon (land speed +50 feet for 1 round, with a +2 dodge bonus to AC during that round); Sea Turtle (damage reduction 2/-; 5 rounds; does not stack with the ankylosaurus tattoo); Snake (improved grab on a natural-attack hit and a constrict attack with his arms and legs for 1d8 + twice his Strength modifier; 3 rounds).",
        level: 1,
      },
      {
        name: "Detect Demons (Sp)",
        description:
          "At 2nd level, the totemic demonslayer can detect outsiders with the evil subtype within 60 feet at will, as the spell detect evil. This ability does not, however, detect outsiders that are ethereal, have mind shielding, or are present only in the body of someone or something possessed by a demon (such as a fiend of possession, Fiend Folio).",
        level: 2,
      },
      {
        name: "Summon Spell Dampening (Su)",
        description:
          "At 4th level, once per day, the totemic demonslayer can create a dampening field in a 60-foot-radius emanation, lasting 10 rounds. Conjuration (summoning) and conjuration (calling) spells and spell-like abilities automatically fail within the field, although creatures summoned in from outside the field can enter it normally. Creatures summoned or called before the field is created are unaffected. At 7th level he can use this ability one additional time per day (2/day). APOC note: in APOC this ability is doubly at home — summoning and calling already do not work; the field is staged as printed, see SCREENING.md.",
        level: 4,
      },
      {
        name: "Improved Favored Enemy (Ex)",
        description:
          "At 5th level, the totemic demonslayer's training and techniques for battling evil outsiders are further honed, raising his favored enemy bonuses against evil outsiders to +4. These bonuses stack with any he has from other classes.",
        level: 5,
      },
      {
        name: "Resist Treachery (Su)",
        description:
          "As the totemic demonslayer increases in ability, he grows more inured to the wiles and craftiness of demons and their ilk. At 6th level he gains a +2 bonus on saving throws against enchantment spells or effects. This bonus increases to +4 at 8th level, and at 10th level he becomes immune to such effects altogether.",
        level: 6,
      },
      {
        name: "Greater Totem Tattoo (Su)",
        description:
          "At 7th level, and again at 9th and 10th level, the totemic demonslayer gains a greater totem tattoo (under the same tattoo rules as the lesser tattoos; greater tattoos cover large portions of his skin, making them nearly impossible to hide). At each greater-tattoo gain he may instead elect to gain two lesser totem tattoos in place of the greater one. Greater tattoos (full text in the pack's reference.md): Ankylosaurus (damage reduction 4/- for 5 rounds; does not stack with the sea turtle tattoo); Giant Wasp (coat all of his piercing and slashing weapons with a poison that functions as a ravage, as described in the Book of Exalted Deeds — it affects only evil creatures but penetrates the poison immunity of demons; injury, Fort DC 14, initial and secondary damage 1d6 Dexterity; the coating lasts for up to 3 rounds or until the weapon successfully strikes an opponent); Phanaton (glide for 10 minutes — negates falling damage and allows 20 feet of forward travel for every 5 feet of descent, effectively a fly speed of 20 feet while falling with average maneuverability; he cannot hover, cannot glide while carrying a medium or heavy load or while unconscious or helpless; unlike other tattoos this one can be activated as an immediate action); Rakasta (any natural weapons he has function as if composed of cold iron; 5 rounds); Triceratops (powerful charge — on a successful charge attack, deal an extra 4d6 points of damage + four times his Strength modifier as if from a natural weapon; activating it allows only one powerful charge before the effect wears off); Tyrannosaurus (gain a bite attack at his normal attack bonus as if using a secondary weapon, dealing 3d6 points of damage + three times his Strength modifier; 3 rounds); Whirlwind (fly with a speed of 60 feet and perfect maneuverability, and while the ability is in effect any critical threat he makes against an evil outsider is automatically confirmed; 1 minute).",
        level: 7,
      },
      {
        name: "Augmented Detect Demons (Sp)",
        description:
          "At 8th level, the totemic demonslayer's detect demons ability is honed to the point that it functions even against such outsiders as those that are ethereal, using mind shielding, or present only in the body of a possessed host; it also detects any creature under the control of an evil outsider through charm or dominate effects, although it does not determine the controlled creature's Hit Dice or the source of the controlling influence unless the demon itself is within range.",
        level: 8,
      },
      {
        name: "Greater Favored Enemy (Ex)",
        description:
          "Upon reaching 9th level, the totemic demonslayer's training and techniques for battling evil outsiders are so honed that his favored enemy bonuses against evil outsiders increase to +6. As before, these bonuses stack with any he has from other classes.",
        level: 9,
      },
    ],
  },
];

export const DRAGON_354_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
