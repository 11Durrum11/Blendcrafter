// Dragon Magazine #348 classes — integrated in the Dragon
// Magazine treatment program (issue #348 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-348/
// (MANIFEST.md / SCREENING.md / reference.md).
// Variant classes staged as printed: Arcane Reabsorption (hexblade/sorcerer/wizard), Focus Caster (x3), Marshal of Battle.
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
const SRC_FAMILIAR = "Dragon Magazine #348 — Class Acts: Unfamiliar Territory (Christopher Hantzmon and Mike McArtor), pp. 87-89";
const SRC_MARSHAL = "Dragon Magazine #348 — Class Acts: Marshal of Battle (Stefan Happ), pp. 91-92";

const HEXBLADE_PROGRESSION = [
  { level: 1, bab: 1, fort: 0, ref: 0, will: 2 },
  { level: 2, bab: 2, fort: 0, ref: 0, will: 3 },
  { level: 3, bab: 3, fort: 1, ref: 1, will: 3 },
  { level: 4, bab: 4, fort: 1, ref: 1, will: 4 },
  { level: 5, bab: 5, fort: 1, ref: 1, will: 4 },
  { level: 6, bab: 6, fort: 2, ref: 2, will: 5 },
  { level: 7, bab: 7, fort: 2, ref: 2, will: 5 },
  { level: 8, bab: 8, fort: 2, ref: 2, will: 6 },
  { level: 9, bab: 9, fort: 3, ref: 3, will: 6 },
  { level: 10, bab: 10, fort: 3, ref: 3, will: 7 },
];
const HEXBLADE_SKILLS = ["Ride", "Concentration", "Craft", "Knowledge (arcana)", "Spellcraft", "Profession", "Bluff", "Diplomacy", "Intimidate"];

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
const SORCERER_SKILLS = ["Bluff", "Concentration", "Craft", "Knowledge (arcana)", "Profession", "Spellcraft"];

const WIZARD_PROGRESSION = [
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
const WIZARD_SKILLS = ["Concentration", "Craft", "Decipher Script", "Knowledge (all)", "Profession", "Spellcraft"];

const MARSHAL_PROGRESSION = [
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
// Live marshal skills plus Profession: the variant adds Profession
// (siege engineer) to the marshal's class skill list (p. 91); the live
// skill union carries the bare "Profession" skill, which is what the
// audit resolves against. See SCREENING.md.
const MARSHAL_SKILLS = ["Swim", "Ride", "Knowledge (all)", "Listen", "Sense Motive", "Spot", "Bluff", "Diplomacy", "Handle Animal", "Intimidate", "Perform", "Speak Language", "Survival", "Profession"];

const REABSORPTION =
  "Arcane Reabsorption (variant class feature). Replaces: the familiar class feature — a character who selects this feature does not gain a familiar. Benefit: whenever a targeted spell you cast fails to penetrate a creature's spell resistance or is countered by another spellcaster, and the spell has no effect at all, you may immediately attempt to reabsorb the arcane energy just spent, as an immediate action. Make a Spellcraft check (DC 20 + 3 per spell level): on a success you regain the spell as if it had never been cast (a spontaneous caster regains the spell slot). Whether the check succeeds or fails, attempting this taxes your body: you take 1 point of nonlethal damage per spell level you attempt to reabsorb, and this damage is internal, bypassing any damage reduction and resistances you possess.";

const FOCUS_CASTER =
  "Focus Caster (variant class feature). Replaces: the familiar class feature — a character who selects this feature does not gain a familiar. Benefit: instead of a familiar, you bind yourself to a masterwork item that acts as a focus for all your spells and enhances the spells of one school. Binding requires a ritual of 24 hours and reagents costing 100 gp, much as if you were summoning a familiar. When casting any spell you must hold, wield, or wear the focus item (as appropriate) in addition to providing the spell's normal components and foci — the focus is used in addition to the spell's normal components, not instead of them. You are automatically proficient with your own focus item (only that item, not other items of the same type). A specialist wizard may select only the focus appropriate to her specialty school. Bonuses from a focus item stack with similar bonuses from feats such as Spell Focus or Spell Penetration. Your focus item grows tougher as you advance: its hardness increases by one-half your caster level (to a maximum of double its normal hardness) and it gains additional hit points equal to your caster level (to a maximum of double its normal hit points), in addition to any increase from being made into a magic item. Enhancing your own focus item into a magic item (or upgrading it) costs you 10% less XP (the base cost is reduced by 10%; this stacks with other XP-cost reductions, such as the Legendary Artisan feat); another character enhancing it gains no such reduction. You may have only one focus item at a time; if it is destroyed you must bind yourself to another masterwork item, which cannot already be a magic item, though it may be made of special materials. School benefits (the item's typical form is given first): ABJURATION (bracers, buckler, or small shield): any nonpersonal abjuration spell you cast with one or more targets gains one additional target, affected for half the normal duration; at 7th level additional targets receive the full duration; at 15th level you may cast any personal abjuration spell as a touch spell. CONJURATION (gnarled quarterstaff or other polearm): the duration of any conjuration spell you cast increases by +1 round, including concentration spells, which also continue +1 extra round after you stop concentrating; at 7th level each of these bonuses increases by +2 rounds; at 15th level each increases by +3 rounds. DIVINATION (large crystal, loose or mounted, or ornate holy symbol): the caster level of any divination spell you cast increases by +1; at 7th level the duration of any divination spell you cast doubles; at 15th level you gain a bonus to resist divinations equal to 1 + your Intelligence modifier (minimum +1). ENCHANTMENT (ornate, typically nonfunctional clothing such as a sash or hair ribbon): the duration of any enchantment spell you cast increases by 1 round, including concentration spells, which also continue +1 extra round after you stop concentrating; at 7th level each bonus increases by +2 rounds; at 15th level the DC of your enchantment spells increases by +2. EVOCATION (bladed weapon such as a longsword or dagger): any evocation spell you cast deals +1 point of damage (a non-area spell with multiple targets deals the bonus damage to only one target of your choice); at 7th level your evocation spells ignore the first 5 points of any energy or elemental resistance (immunities unaffected); at 15th level, once per day, you may ignore a creature's immunity when you cast an evocation spell that affects it. ILLUSION (mask, shroud, cloak, or similar concealing clothing): the caster level of illusion spells you cast increases by +1; at 7th level, for every illusion spell you cast you gain a bonus on caster level checks to defeat spell resistance equal to half your caster level; at 15th level you may cast any personal illusion spell as a touch spell. NECROMANCY (flail, kama, sickle, scythe, or other harvest-derived weapon): the range of any necromancy spell you cast increases by +25%; at 7th level, any necromancy spell you cast that deals ability damage or ability drain, or directly assigns a penalty to an ability score, deals +1 point of ability damage or drain or increases the penalty by an additional -1; at 15th level, any living creature affected by a necromancy spell you cast that fails its Fortitude save against it also becomes fatigued. TRANSMUTATION (equipment or tools used to create something, such as thieves' tools, a musical instrument, or artisan's tools): any nonpersonal transmutation spell you cast with one or more targets gains one additional target, affected for half the normal duration; at 7th level additional targets receive the full duration; at 15th level, once per day, a transmutation spell you cast that grants a bonus to an ability score doubles that bonus.";

const RAW: RawClass[] = [
  {
    id: "hexblade-arcane-reabsorption",
    name: "Hexblade (Arcane Reabsorption)",
    ruleset: "core",
    source: SRC_FAMILIAR,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: HEXBLADE_PROGRESSION,
    classSkills: HEXBLADE_SKILLS,
    features: [
      {
        name: "Hexblade (Arcane Reabsorption) Basics",
        description:
          "A hexblade variant from \"Unfamiliar Territory\": the character gives up the familiar class feature (gained at 4th level for hexblades) and gains Arcane Reabsorption instead. In all other respects the character advances exactly as a standard hexblade — same Hit Die, base attack bonus, saving throws, skill points, class skills, spellcasting, and class features. Printed level: 4th for hexblades (the level at which the class would gain a familiar).",
        level: 4,
      },
      { name: "Arcane Reabsorption", description: REABSORPTION, level: 4 },
    ],
  },
  {
    id: "sorcerer-arcane-reabsorption",
    name: "Sorcerer (Arcane Reabsorption)",
    ruleset: "core",
    source: SRC_FAMILIAR,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: SORCERER_PROGRESSION,
    classSkills: SORCERER_SKILLS,
    features: [
      {
        name: "Sorcerer (Arcane Reabsorption) Basics",
        description:
          "A sorcerer variant from \"Unfamiliar Territory\": the character gives up the familiar class feature and gains Arcane Reabsorption instead. In all other respects the character advances exactly as a standard sorcerer — same Hit Die, base attack bonus, saving throws, skill points, class skills, spellcasting, and class features. Printed level: 1st.",
        level: 1,
      },
      { name: "Arcane Reabsorption", description: REABSORPTION, level: 1 },
    ],
  },
  {
    id: "wizard-arcane-reabsorption",
    name: "Wizard (Arcane Reabsorption)",
    ruleset: "core",
    source: SRC_FAMILIAR,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: WIZARD_PROGRESSION,
    classSkills: WIZARD_SKILLS,
    features: [
      {
        name: "Wizard (Arcane Reabsorption) Basics",
        description:
          "A wizard variant from \"Unfamiliar Territory\": the character gives up the familiar class feature and gains Arcane Reabsorption instead. In all other respects the character advances exactly as a standard wizard — same Hit Die, base attack bonus, saving throws, skill points, class skills, spellcasting, and class features. Printed level: 1st.",
        level: 1,
      },
      { name: "Arcane Reabsorption", description: REABSORPTION, level: 1 },
    ],
  },
  {
    id: "hexblade-focus-caster",
    name: "Hexblade (Focus Caster)",
    ruleset: "core",
    source: SRC_FAMILIAR,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: HEXBLADE_PROGRESSION,
    classSkills: HEXBLADE_SKILLS,
    features: [
      {
        name: "Hexblade (Focus Caster) Basics",
        description:
          "A hexblade variant from \"Unfamiliar Territory\": the character gives up the familiar class feature (gained at 4th level for hexblades) and gains Focus Caster instead, binding a masterwork item as the focus of his spellcasting. In all other respects the character advances exactly as a standard hexblade. Printed level: 4th for hexblades. APOC note: the Focus Caster conjuration benefit extends the duration of conjuration spells as printed; it does not restore summoning spells, which do not work in APOC — see SCREENING.md.",
        level: 4,
      },
      { name: "Focus Caster", description: FOCUS_CASTER, level: 4 },
    ],
  },
  {
    id: "sorcerer-focus-caster",
    name: "Sorcerer (Focus Caster)",
    ruleset: "core",
    source: SRC_FAMILIAR,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: SORCERER_PROGRESSION,
    classSkills: SORCERER_SKILLS,
    features: [
      {
        name: "Sorcerer (Focus Caster) Basics",
        description:
          "A sorcerer variant from \"Unfamiliar Territory\": the character gives up the familiar class feature and gains Focus Caster instead, binding a masterwork item as the focus of his spellcasting. In all other respects the character advances exactly as a standard sorcerer. Printed level: 1st. APOC note: see the hexblade Focus Caster record and SCREENING.md on the conjuration duration benefit.",
        level: 1,
      },
      { name: "Focus Caster", description: FOCUS_CASTER, level: 1 },
    ],
  },
  {
    id: "wizard-focus-caster",
    name: "Wizard (Focus Caster)",
    ruleset: "core",
    source: SRC_FAMILIAR,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: WIZARD_PROGRESSION,
    classSkills: WIZARD_SKILLS,
    features: [
      {
        name: "Wizard (Focus Caster) Basics",
        description:
          "A wizard variant from \"Unfamiliar Territory\": the character gives up the familiar class feature and gains Focus Caster instead, binding a masterwork item as the focus of her spellcasting; a specialist wizard may select only the focus appropriate to her specialty school. In all other respects the character advances exactly as a standard wizard. Printed level: 1st. APOC note: see the hexblade Focus Caster record and SCREENING.md on the conjuration duration benefit.",
        level: 1,
      },
      { name: "Focus Caster", description: FOCUS_CASTER, level: 1 },
    ],
  },
  {
    id: "marshal-of-battle",
    name: "Marshal of Battle (Marshal Variant)",
    ruleset: "core",
    source: SRC_MARSHAL,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: MARSHAL_PROGRESSION,
    classSkills: MARSHAL_SKILLS,
    features: [
      {
        name: "Marshal of Battle Basics",
        description:
          "An optional variant of the marshal (Miniatures Handbook) from \"Marshal of Battle,\" integrating the marshal with the commander auras of Heroes of Battle. The variant makes two changes to the standard marshal: Profession (siege engineer) is added to the marshal's class skill list (marshals often lead siege engine crews), and the marshal's minor/major aura system is replaced by the commander-aura rules below — the specification of minor aura or major aura from the marshal's original class description does not apply to this variant. In all other respects the character advances as a standard marshal. The variant's thirteen commander auras (Artful, Brawling, Cavalry, Charioteer, Guard, Guerilla, Hardy, Inspiring, Naval, Picket, Rampart, Siege, and Volley Commander) stage as feat-shaped records in the pack's feats draft; any character, marshal or commander, must meet an aura's prerequisites to gain it.",
        level: 1,
      },
      {
        name: "Auras (Ex) — Commander-Aura Variant",
        description:
          "Under this variant a marshal's auras use the Heroes of Battle commander-aura system (Heroes of Battle, pp. 75-76, applies except where this feature says otherwise), in which the marshal holds a significant advantage over nonmarshals: a nonmarshal commander can have only one aura at a time and its range is limited to 30 feet, while a marshal's auras affect all allies with an Intelligence score of 3 or higher within 60 feet. The marshal knows a number of auras equal to half his level, although he may project only one aura at a time, activating it as a swift action. Beginning at 7th level, a marshal may project two auras simultaneously. Beginning at 14th level, the marshal may project his auras up to 90 feet. At 20th level, the marshal may project auras 120 feet and may have up to three auras active. A marshal must meet all the prerequisites of an aura he wishes to learn. Allies must be able to hear and see the marshal to gain the effects of his auras, even if within range. Commander background (from the article's sidebar): any character with a rank higher than private (or its fantasy equivalent) has a commander rating; when a character gains rank 1 (corporal or its equivalent) he may select his first aura, and each time his rank improves he can replace his aura; a nonmarshal character can never have more than one aura. A commander aura typically has a range of 30 feet, and characters can benefit from more than one commander aura simultaneously, although commander aura benefits never stack.",
        level: 1,
      },
    ],
  },
];

export const DRAGON_348_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
