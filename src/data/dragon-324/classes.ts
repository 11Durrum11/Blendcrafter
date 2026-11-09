// Dragon Magazine #324 (Oct 2004) variant classes — integrated in
// the Dragon Magazine treatment program (issue #324 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-324/
// (MANIFEST.md / SCREENING.md / reference.md).
// The three Class Acts variants by Paul Leach: FILIDH (a wizard
// whose lore-keeping replaces some spellcraft), the WILD DEFENDER
// (a ranger variant), and the WILD MONK (a monk variant) — staged
// as class records in the issue-311 variant-class shape.
// Feature descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced.

import type { ClassDefinition } from "@/engine/types";
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
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  prerequisites?: string[];
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

const RAW: RawClassLike[] = [
{
  "id": "filidh",
  "name": "Filidh",
  "source": "Dragon Magazine #324 — Class Acts: Filidh (Paul Leach), pp. 89-90",
  "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
  "ruleset": "core",
  "role": "Variant wizard: a seer-sage who trades the familiar for bardic lore and unmatched divination.",
  "hitDie": "d4",
  "skillPointsPerLevel": 2,
  "classSkills": [
    "Concentration",
    "Craft",
    "Decipher Script",
    "Gather Information",
    "Intimidate",
    "Knowledge (all)",
    "Sense Motive",
    "Spellcraft",
    "Survival"
  ],
  "features": [
    {
      "key": "filidh-basics",
      "name": "Filidh Basics",
      "description": "A filidh advances as a wizard (d4 Hit Die, poor base attack bonus, good Will saves, 2 + Int modifier skill points per level) and prepares and casts arcane spells as a wizard. Taking a level of wizard prevents a character from taking filidh levels later, and taking a level of filidh prevents a character from taking wizard levels later. A filidh is proficient with the club, dagger, quarterstaff, and shortbow, but not with any type of armor or shield; armor of any type interferes with a filidh's arcane gestures, which can cause his spells with somatic components to fail. Class skills: Concentration, Craft, Decipher Script, Gather Information, Intimidate, Knowledge (all skills, taken individually), Sense Motive, Spellcraft, and Survival.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: Filidh (Paul Leach), pp. 89-90",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "filidh-knowledge",
      "name": "Filidh Knowledge",
      "description": "Beginning at 1st level, a filidh can recall legends and obscure lore. This functions as the bardic knowledge ability; filidh levels stack with levels in any other class that grants bardic knowledge for the purpose of this check.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: Filidh (Paul Leach), pp. 89-90",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "no-familiar",
      "name": "No Familiar",
      "description": "Unlike other wizards, a filidh doesn't rely on animal companions and cannot summon a familiar.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: Filidh (Paul Leach), pp. 89-90",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "greater-divining",
      "name": "Greater Divining",
      "description": "Filidh specialize in divination spells to the exclusion of almost all else, and their ability to uncover secrets is legendary. A filidh casts divination spells at +1 caster level at 5th level; the bonus increases to +2 at 10th level, +3 at 15th level, and +4 at 20th level.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: Filidh (Paul Leach), pp. 89-90",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 5
    }
  ],
  "progression": [
    { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
    { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
    { "level": 3, "bab": 1, "fort": 1, "ref": 1, "will": 3 },
    { "level": 4, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
    { "level": 5, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
    { "level": 6, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
    { "level": 7, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
    { "level": 8, "bab": 4, "fort": 2, "ref": 2, "will": 6 },
    { "level": 9, "bab": 4, "fort": 3, "ref": 3, "will": 6 },
    { "level": 10, "bab": 5, "fort": 3, "ref": 3, "will": 7 }
  ]
},
{
  "id": "wild-defender",
  "name": "Wild Defender",
  "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
  "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
  "ruleset": "core",
  "role": "Variant ranger: a druidic champion of the wild who trades the favored enemy and the bow for smiting and rebuking nature's foes.",
  "hitDie": "d8",
  "skillPointsPerLevel": 6,
  "classSkills": [
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
    "Use Rope"
  ],
  "features": [
    {
      "key": "wild-defender-basics",
      "name": "Wild Defender Basics",
      "description": "A wild defender advances as a ranger (d8 Hit Die, full base attack bonus, good Fortitude and Reflex saves, 6 + Int modifier skill points per level) and uses the ranger's class skill list (the article does not restate it). A wild defender must be of neutral good, lawful neutral, neutral, or chaotic neutral alignment. Taking a level of ranger prevents a character from taking wild defender levels later, and taking a level of wild defender prevents a character from taking ranger levels later. A wild defender does not gain the ranger's favored enemy, bonus feats, combat style, camouflage, or hide in plain sight abilities. A wild defender prepares and casts divine spells from the ranger spell list, casting spells from 1st level (unlike a standard ranger): spells per day by class level (1st/2nd/3rd/4th-level spells) — 1st: 0/—/—/—; 2nd: 0/—/—/—; 3rd: 1/—/—/—; 4th: 1/0/—/—; 5th: 1/0/—/—; 6th: 1/1/—/—; 7th: 2/1/0/—; 8th: 2/1/0/—; 9th: 2/1/1/—; 10th: 2/2/1/0; 11th: 3/2/1/0; 12th: 3/2/1/1; 13th: 3/2/2/1; 14th: 3/3/2/1; 15th: 4/3/2/1; 16th: 4/3/2/2; 17th: 4/3/3/2; 18th: 4/4/3/2; 19th: 5/4/3/3; 20th: 5/4/4/4. A dash means no spells of that level yet; a 0 means the wild defender gains only bonus spells of that level for a high Wisdom score.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "natural-lore",
      "name": "Natural Lore (Ex)",
      "description": "At 1st level, a wild defender gains a +2 bonus on Knowledge (nature) and Survival checks.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "wild-defender-smite-evil",
      "name": "Smite Evil (Su)",
      "description": "Once per day beginning at 1st level, a wild defender may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per wild defender level. If the wild defender accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day. She may use this ability twice per day at 5th level, three times per day at 10th, four times per day at 15th, and five times per day at 20th. Wild defender levels and paladin levels stack for the purpose of determining uses per day and damage.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "wild-empathy",
      "name": "Wild Empathy (Ex)",
      "description": "Beginning at 1st level, a wild defender can improve the attitude of an animal, as the druid ability of the same name.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "woodland-stride",
      "name": "Woodland Stride (Ex)",
      "description": "Starting at 2nd level, a wild defender may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed and without taking damage or suffering any other impairment, as the ranger ability of the same name. Areas that are enchanted or magically manipulated to impede motion still affect her.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 2
    },
    {
      "key": "trackless-step",
      "name": "Trackless Step (Ex)",
      "description": "Starting at 3rd level, a wild defender leaves no trail in natural surroundings and cannot be tracked, as the ranger ability of the same name. She may choose to leave a trail if so desired.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 3
    },
    {
      "key": "resist-natures-lure",
      "name": "Resist Nature's Lure (Ex)",
      "description": "Starting at 4th level, a wild defender gains a +4 bonus on saving throws against the spell-like abilities of fey.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 4
    },
    {
      "key": "animal-companion",
      "name": "Animal Companion (Ex)",
      "description": "At 5th level, a wild defender gains an animal companion, as the druid ability of the same name.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 5
    },
    {
      "key": "rebuke-nature",
      "name": "Rebuke Nature (Su)",
      "description": "At 6th level, a wild defender can rebuke creatures of nature as an evil cleric rebukes undead, rebuking but never commanding them. She functions as a cleric of three levels lower than her wild defender level for this purpose, and may attempt it a number of times per day equal to 3 + her Charisma modifier. At 6th level through 7th this applies only to creatures of the animal type; at 8th level it also applies to vermin; at 12th level it also applies to plants; at 14th level it also applies to fey; at 18th level it also applies to oozes; and at 20th level it also applies to elementals.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 6
    },
    {
      "key": "evasion",
      "name": "Evasion (Ex)",
      "description": "At 11th level, a wild defender gains evasion, as the ranger ability of the same name: if she makes a successful Reflex saving throw against an attack that normally deals half damage on a success, she instead takes no damage. Evasion can be used only if the wild defender is wearing light armor or no armor.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Defender (Paul Leach), p. 95",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 11
    }
  ],
  "progression": [
    { "level": 1, "bab": 1, "fort": 2, "ref": 2, "will": 0 },
    { "level": 2, "bab": 2, "fort": 3, "ref": 3, "will": 0 },
    { "level": 3, "bab": 3, "fort": 3, "ref": 3, "will": 1 },
    { "level": 4, "bab": 4, "fort": 4, "ref": 4, "will": 1 },
    { "level": 5, "bab": 5, "fort": 4, "ref": 4, "will": 1 },
    { "level": 6, "bab": 6, "fort": 5, "ref": 5, "will": 2 },
    { "level": 7, "bab": 7, "fort": 5, "ref": 5, "will": 2 },
    { "level": 8, "bab": 8, "fort": 6, "ref": 6, "will": 2 },
    { "level": 9, "bab": 9, "fort": 6, "ref": 6, "will": 3 },
    { "level": 10, "bab": 10, "fort": 7, "ref": 7, "will": 3 }
  ]
},
{
  "id": "wild-monk",
  "name": "Wild Monk",
  "source": "Dragon Magazine #324 — Class Acts: The Wild Monk (Paul Leach), p. 97",
  "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
  "ruleset": "core",
  "role": "Variant monk: an ascetic of the wild places who trades the monastery's later mysteries for the druid's wild shape.",
  "hitDie": "d8",
  "skillPointsPerLevel": 4,
  "classSkills": [
    "Balance",
    "Climb",
    "Concentration",
    "Craft",
    "Hide",
    "Jump",
    "Knowledge (nature)",
    "Listen",
    "Move Silently",
    "Profession",
    "Spot",
    "Survival",
    "Swim",
    "Tumble"
  ],
  "features": [
    {
      "key": "wild-monk-basics",
      "name": "Wild Monk Basics",
      "description": "A wild monk advances as a monk (d8 Hit Die, three-quarter base attack bonus, all three saving throws good, 4 + Int modifier skill points per level) and must be of lawful neutral alignment. Taking a level of monk prevents a character from taking wild monk levels later, and taking a level of wild monk prevents a character from taking monk levels later. A wild monk may freely multiclass with the druid class; if the wild monk chooses any other multiclass option, he may no longer advance as a wild monk. The class features shown on his advancement table replace the monk's bonus feats, still mind, slow fall, abundant step, quivering palm, and empty body, which do not appear on the wild monk's table; his other monk abilities (flurry of blows, unarmed strike, AC bonus, fast movement, ki strike, purity of body, wholeness of body, diamond body and soul, timeless body, tongue of the sun and moon, and perfect self) advance as a monk's. Class skills: Balance, Climb, Concentration, Craft, Hide, Jump, Knowledge (nature), Listen, Move Silently, Profession, Spot, Survival, Swim, and Tumble.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Monk (Paul Leach), p. 97",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "resist-natures-lure",
      "name": "Resist Nature's Lure (Ex)",
      "description": "At 3rd level, a wild monk gains a +4 bonus on saving throws against the spell-like abilities of fey.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Monk (Paul Leach), p. 97",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 3
    },
    {
      "key": "wild-shape",
      "name": "Wild Shape (Su)",
      "description": "At 6th level, a wild monk gains the ability to turn himself into any Small or Medium animal and back again once per day, exactly as the druid ability of the same name. He may use this ability twice per day at 8th level, three times per day at 10th, four times per day at 14th, five times per day at 18th, and six times per day at 20th. He may assume the form of a Large animal at 12th level, a Tiny animal at 15th, and a Huge animal at 16th. At 19th level he may also turn into a Small, Medium, or Large elemental once per day, and at 20th level twice per day. Wild monk wild shape uses and druid wild shape uses are tracked separately: a wild monk who is also a druid keeps two independent pools.",
      "category": "class",
      "source": "Dragon Magazine #324 — Class Acts: The Wild Monk (Paul Leach), p. 97",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 6
    }
  ],
  "progression": [
    { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
    { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
    { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
    { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
    { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
    { "level": 6, "bab": 4, "fort": 5, "ref": 5, "will": 5 },
    { "level": 7, "bab": 5, "fort": 5, "ref": 5, "will": 5 },
    { "level": 8, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
    { "level": 9, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
    { "level": 10, "bab": 7, "fort": 7, "ref": 7, "will": 7 }
  ]
}
];

export const DRAGON_324_CLASSES: ClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as ClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: (c.babProgression ?? deriveBab(c.progression)) as ClassDefinition["babProgression"],
  goodSaves: (c.goodSaves ?? deriveSaves(c.progression)) as ClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
