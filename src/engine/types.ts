/**
 * Blendcrafter engine type system.
 *
 * Reconstructed to satisfy the recovered components and data packs: every
 * data record carries `source` / `sourceUrl` citations, every derived number
 * on the character sheet carries an `AuditEntry[]` trail, and template
 * application is modeled as an ordered list of structural `Patch`es plus
 * typed `Modifier`s so the stacking resolver can apply SRD rules.
 */

export type AbilityKey = "str" | "dex" | "con" | "int" | "wis" | "cha";

export const ABILITY_KEYS: AbilityKey[] = ["str", "dex", "con", "int", "wis", "cha"];

export const ABILITY_LABEL: Record<AbilityKey, string> = {
  str: "Strength",
  dex: "Dexterity",
  con: "Constitution",
  int: "Intelligence",
  wis: "Wisdom",
  cha: "Charisma",
};

export type Ruleset = "core" | "eberron" | "iron_kingdoms" | "sorcery_steam" | "homebrew";

export type CreatureType =
  | "Aberration"
  | "Animal"
  | "Construct"
  | "Dragon"
  | "Elemental"
  | "Fey"
  | "Giant"
  | "Humanoid"
  | "Magical Beast"
  | "Monstrous Humanoid"
  | "Ooze"
  | "Outsider"
  | "Plant"
  | "Undead"
  | "Vermin";

export type Size =
  | "Fine"
  | "Diminutive"
  | "Tiny"
  | "Small"
  | "Medium"
  | "Large"
  | "Huge"
  | "Gargantuan"
  | "Colossal";

/**
 * Bonus types for the stacking resolver. Per SRD, bonuses of the same type
 * generally do not stack (the best applies), except dodge, circumstance, and
 * untyped bonuses, which always stack.
 */
export type BonusType =
  | "untyped"
  | "armor"
  | "shield"
  | "natural-armor"
  | "enhancement"
  | "deflection"
  | "dodge"
  | "circumstance"
  | "competence"
  | "insight"
  | "luck"
  | "morale"
  | "profane"
  | "sacred"
  | "resistance"
  | "racial"
  | "size"
  | "inherent";

export type ModifierMode =
  /** Add `value` to the target (subject to typed stacking). */
  | "add"
  /** Replace the target with `value`. */
  | "set"
  /** Remove the target entirely (e.g. undead lose Constitution). */
  | "remove"
  /**
   * "Improves by" semantics (SRD template wording for natural armor): always
   * compounds with other improvements instead of deduplicating by type.
   */
  | "improve";

export interface Modifier {
  id: string;
  /** Display name of whatever grants this modifier. */
  source: string;
  sourceUrl?: string;
  /** Dotted target key, e.g. "ac.natural", "save.fort", "skill.bluff", "hp.bonus". */
  target: string;
  value: number;
  mode: ModifierMode;
  bonusType: BonusType;
  /** "always_stack" bypasses same-type deduplication even outside improve mode. */
  stackingPolicy?: "default" | "always_stack";
  note?: string;
}

export type PatchOp =
  | "set-type"
  | "add-subtype"
  | "remove-subtype"
  | "set-size"
  /** Step every hit die up (positive amount) or down the die-size ladder. */
  | "increase-hit-dice"
  /** Set the base land speed (feet). */
  | "set-speed"
  /** Add a movement mode; `value` is the mode name, `amount` is feet. */
  | "add-speed";

export interface Patch {
  op: PatchOp;
  value?: string | number;
  amount?: number;
  note?: string;
}

export type FeatureCategory = "special-attack" | "special-quality" | "feat" | "trait";

export interface FeatureDefinition {
  /** Stable dedupe key used when merging features from race/templates/forms. */
  key: string;
  name: string;
  description: string;
  category: FeatureCategory;
  source: string;
  sourceUrl: string;
  dcFormula?: string;
}

/* ------------------------------------------------------------------ */
/* Data-pack definitions                                               */
/* ------------------------------------------------------------------ */

export interface RaceDefinition {
  id: string;
  name: string;
  ruleset: Ruleset;
  source: string;
  sourceUrl: string;
  size: Size;
  baseSpeed: number;
  type: CreatureType;
  subtypes: string[];
  abilityModifiers: Partial<Record<AbilityKey, number>>;
  favoredClass?: string;
  levelAdjustment?: number;
  /** Racial hit dice (most PC races have none). */
  racialHitDice?: number;
  /** Die expression for racial hit dice, e.g. "d8". */
  hitDie?: string;
  /** Natural armor bonus the base creature has before templates. */
  naturalArmor?: number;
  /** Skill bonuses granted by the race, keyed by skill id. */
  skillBonuses?: Record<string, number>;
  /** Extra feat slots (e.g. the human bonus feat). */
  bonusFeatSlots?: number;
  /** Extra skill points (e.g. human: 4 at 1st level, +1 per level after). */
  bonusSkillPointsAtFirstLevel?: number;
  bonusSkillPointsPerLevel?: number;
  traits: FeatureDefinition[];
}

export interface ClassLevelProgressionRow {
  level: number;
  bab: number;
  fort: number;
  ref: number;
  will: number;
}

export type BabProgressionKind = "full" | "three-quarter" | "half";
export type SaveKey = "fort" | "ref" | "will";

export interface ClassDefinition {
  id: string;
  name: string;
  ruleset: Ruleset;
  source: string;
  sourceUrl: string;
  /** Die expression, e.g. "d10". */
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression: BabProgressionKind;
  goodSaves: SaveKey[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  features?: FeatureDefinition[];
}

export interface PrestigeClassDefinition extends ClassDefinition {
  /**
   * Free-text prerequisites, hard-enforced by the prestige-prerequisite
   * evaluator (src/engine/prestige-prerequisites.ts): requirements it can
   * machine-check (BAB, base saves, skill ranks, named feats, race/type,
   * alignment, character level) gate the class, and the rest must be
   * player-certified (see CharacterBuild.prestigePrereqCertifications).
   */
  prerequisites: string[];
}

export interface SkillDefinition {
  id: string;
  name: string;
  keyAbility: AbilityKey;
  trainedOnly?: boolean;
  armorCheckPenalty?: boolean;
  ruleset: Ruleset;
  source: string;
  sourceUrl: string;
  description?: string;
}

export type FeatCategory =
  | "general"
  | "item-creation"
  | "metamagic"
  | "race-specific"
  | "setting-specific"
  | "combat";

export interface FeatDefinition {
  id: string;
  name: string;
  category: FeatCategory;
  /** Free-text prerequisites; flagged softly in the UI, never hard-enforced. */
  prerequisites: string[];
  benefitSummary: string;
  /** Modeled numeric effects the resolver can apply automatically. */
  modifiers?: Modifier[];
  source: string;
  sourceUrl: string;
  ruleset: Ruleset;
  special?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  cost: string;
  weight: string;
  notes: string;
  /** Armor or shield bonus granted while equipped. */
  acBonus?: number;
  source: string;
  sourceUrl: string;
  ruleset: Ruleset;
}

export interface MagicItemDefinition {
  id: string;
  name: string;
  category: string;
  cost: string;
  summary: string;
  source: string;
  sourceUrl: string;
  ruleset: Ruleset;
  modifiers?: Modifier[];
}

/* ------------------------------------------------------------------ */
/* Spells (Batch 12: full builder integration)                         */
/* ------------------------------------------------------------------ */

/**
 * One spell as printed in its source book. `levels` maps a spell-list
 * name exactly as the source prints it ("Sorcerer/Wizard", "Cleric",
 * "Bard", domain names such as "Spell", ...) to the spell's level on
 * that list. Fields the source does not print (Spell Compendium omits
 * the Saving Throw / Spell Resistance lines for some spells, and
 * abbreviates "functions like X" entries) say so rather than inventing
 * a value.
 */
export interface SpellDefinition {
  id: string;
  name: string;
  ruleset: Ruleset;
  school: string;
  subschool?: string;
  descriptors: string[];
  levels: Record<string, number>;
  components: string;
  castingTime: string;
  range: string;
  /** Target, area, or effect line as printed (whichever the spell has). */
  targetOrArea: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;
  /** Short mechanical gist in our own words — never book text. */
  summary: string;
  /** Optional provenance note (e.g. abbreviated "functions like" entries). */
  note?: string;
  source: string;
  sourceUrl: string;
}

export type CastingKind = "prepared-arcane" | "prepared-divine" | "spontaneous";

/**
 * Spellcasting data for one base class, levels 1–10 (the app's class-row
 * convention). Rows are indexed by class level - 1; each row is indexed
 * by spell level 0–9. A `null` cell means the class cannot cast spells
 * of that level at all yet; a `0` cell means "bonus spells only".
 * `spellsKnown` is present for spontaneous classes (and classes with a
 * fixed known list); a `null` cell there means "no numeric cap" (e.g.
 * warmage/beguiler know their whole list — see `knowsEntireList`).
 * Prepared classes learn their whole list, so they carry no
 * spellsKnown table; a wizard's spellbook has no rules cap either.
 */
export interface CastingProfile {
  classId: string;
  /** The key used in SpellDefinition.levels for this class's list. */
  listName: string;
  kind: CastingKind;
  keyAbility: AbilityKey;
  spellsPerDay: (number | null)[][];
  spellsKnown?: (number | null)[][];
  knowsEntireList?: boolean;
  /** School restriction on the class list (spellthief). */
  allowedSchools?: string[];
  note?: string;
  source: string;
  sourceUrl: string;
}

/* ------------------------------------------------------------------ */
/* Body modifications: grafts, symbionts, warforged components         */
/* ------------------------------------------------------------------ */

/**
 * The three D&D 3.5 "implant" systems, which are NOT ordinary items:
 * - graft: harvested/grown body parts fused onto a creature. Not sentient,
 *   not magical once complete, ruined if removed; each family needs its
 *   own grafter feat.
 * - symbiont: a living, sentient organism that attaches to a host, with
 *   an Ego score and telepathy; it can attempt to dominate its host.
 * - warforged component: a magic item built into a warforged body —
 *   "attached" components sit on the surface and use a slot, "embedded"
 *   components sit inside the body, hidden or retractable.
 *
 * These records are a named-item reference index (name, family, price
 * where published, source citation), folded in 2026-10-27 from the list
 * compiled in ~/workspace/your_files/dnd-35-grafts-symbionts-components-list.md.
 * Full mechanics live in the cited books; nothing here invents them.
 */
export type BodyModificationKind = "graft" | "symbiont" | "warforged-component";

export interface BodyModificationDefinition {
  id: string;
  name: string;
  kind: BodyModificationKind;
  /** Family within the kind, e.g. "Aboleth grafts", "Daelkyr symbionts". */
  family: string;
  ruleset: Ruleset;
  /** Published price, where the source list recorded one. */
  cost?: string;
  /** For warforged components: "attached" or "embedded" (some are either). */
  installation?: string;
  /** Short factual note, only where the compiled list stated one. */
  summary?: string;
  source: string;
  sourceUrl: string;
}

/* ------------------------------------------------------------------ */
/* Random tables (setting reference data)                              */
/* ------------------------------------------------------------------ */

export interface RandomTableEntry {
  /** Die result or band, e.g. "1", "2-4", "20". */
  roll: string;
  title: string;
  effect: string;
}

export interface RandomTableDefinition {
  id: string;
  name: string;
  ruleset: Ruleset;
  /** Die expression rolled on the table, e.g. "d20", "d100". */
  die: string;
  source: string;
  sourceUrl: string;
  entries: RandomTableEntry[];
}

/* ------------------------------------------------------------------ */
/* Templates                                                           */
/* ------------------------------------------------------------------ */

export type TemplateTiming = "inherited" | "acquired";

export interface TemplatePrerequisite {
  /** If present, the ORIGINAL base creature's type must be one of these. */
  allowedBaseTypes?: CreatureType[];
  note: string;
}

export interface TemplateForm {
  id: string;
  name: string;
  description?: string;
  abilityModifiers?: Partial<Record<AbilityKey, number | null>>;
  modifiers?: Modifier[];
  patches?: Patch[];
  features?: FeatureDefinition[];
  crModifier?: number;
  levelAdjustment?: number;
  /** Extra racial hit dice granted by this form (e.g. lycanthrope animal HD). */
  hitDiceIncrease?: number;
}

export interface TemplateDefinition {
  id: string;
  name: string;
  ruleset: Ruleset;
  timing: TemplateTiming;
  summary: string;
  source: string;
  sourceUrl: string;
  crModifier: number;
  levelAdjustment: number;
  prerequisites?: TemplatePrerequisite[];
  /** Ability deltas; a `null` value removes the ability score entirely. */
  abilityModifiers?: Partial<Record<AbilityKey, number | null>>;
  modifiers?: Modifier[];
  patches: Patch[];
  features?: FeatureDefinition[];
  /** Optional variants (dragon variety, lycanthrope animal form, …). */
  forms?: TemplateForm[];
}

/* ------------------------------------------------------------------ */
/* Build (user input)                                                  */
/* ------------------------------------------------------------------ */

export interface AppliedTemplateChoice {
  templateId: string;
  formId?: string;
}

export interface ClassLevelChoice {
  classId: string;
  levels: number;
}

export interface InventoryEntry {
  /** Unique per inventory row (multiple copies of one item are allowed). */
  id: string;
  kind: "equipment" | "magic-item";
  itemId: string;
  equipped: boolean;
}

export interface HouseRules {
  /** RAW: a rank in a cross-class skill costs 2 skill points. */
  crossClassSkillDoubleCost: boolean;
  /** RAW: cross-class max ranks are half the class-skill cap. */
  crossClassSkillHalfCap: boolean;
  /** Unearthed Arcana variant: buy off level adjustment with XP as you level. */
  levelAdjustmentBuyoff: boolean;
  /** Superior Skill Synergy (Misfit Studios): synergy benefits at 5/10/15/20 ranks instead of only +2 at 5. */
  superiorSynergy: boolean;
}

export type PersonalityWeights = {
  race: number;
  class: number;
  level: number;
  alignment: number;
  age: number;
  background: number;
  socialStanding: number;
  wealth: number;
  family: number;
  religion: number;
  faction: number;
  reputation: number;
  abilities: number;
  feats: number;
  specialAbilities: number;
  enemies: number;
  allies: number;
  trauma: number;
  goals: number;
  secrets: number;
  circumstances: number;
};

export interface GeneratedPersonality {
  temperament: string;
  corePersonality: string;
  lifeHistory: string;
  values: string;
  motivations: string[];
  fears: string[];
  moralOutlook: string;
  socialBehavior: string;
  reputationInterpretation: string;
  relationships: string;
  currentPressure: string;
  mannerisms: string[];
  voice: string;
  combatPsychology: string;
  contradictions: string[];
  adventureHooks: string[];
}

export interface PersonalityProfile {
  age: number;
  alignment: string;
  background: string;
  familyStatus: string;
  socialStanding: number;
  wealth: number;
  personalReputation: number;
  publicReputation: number;
  religion: string;
  factionGuild: string;
  occupation: string;
  allies: string;
  enemies: string;
  trauma: string;
  goals: string;
  secrets: string;
  circumstances: string;
  weights: PersonalityWeights;
  /** Last generated profile snapshot, if the user pressed Generate. */
  generated?: GeneratedPersonality;
}

export interface CharacterBuild {
  name: string;
  raceId: string;
  baseAbilityScores: Record<AbilityKey, number>;
  classLevels: ClassLevelChoice[];
  prestigeClassLevels: ClassLevelChoice[];
  templates: AppliedTemplateChoice[];
  skillRanks: Record<string, number>;
  featIds: string[];
  /**
   * Player certifications for prestige-class prerequisites the evaluator
   * cannot machine-check: prestige class id -> the exact prerequisite
   * entry texts the player has confirmed they meet. A prestige class with
   * uncertified "special" prerequisites cannot be taken.
   */
  prestigePrereqCertifications: Record<string, string[]>;
  /**
   * Selected spell ids per casting class id (Batch 12). For spontaneous
   * classes these are spells known; for prepared classes, the spells
   * prepared / in the spellbook. Missing key = no selections. Legacy
   * saved builds predate the field and load with no selections.
   */
  selectedSpells: Record<string, string[]>;
  inventory: InventoryEntry[];
  enabledRulesets: Ruleset[];
  houseRules: HouseRules;
  disabledRaceIds: string[];
  disabledClassIds: string[];
  disabledSkillIds: string[];
  disabledFeatIds: string[];
  disabledAbilities: AbilityKey[];
  personality: PersonalityProfile;
}

/* ------------------------------------------------------------------ */
/* Resolver output                                                     */
/* ------------------------------------------------------------------ */

export interface AuditEntry {
  source: string;
  sourceUrl?: string;
  /** Dotted key of the derived value this entry contributed to. */
  target: string;
  operation: string;
  resultingValue: string | number;
  note?: string;
}

export interface ValidationIssue {
  severity: "error" | "warning";
  message: string;
  templateId?: string;
}

export interface ResolvedAbility {
  total: number | null;
  modifier: number | null;
  audit: AuditEntry[];
}

export interface ResolvedValue {
  total: number;
  audit: AuditEntry[];
}

export interface ResolvedSkill {
  id: string;
  name: string;
  ranks: number;
  total: number;
  isClassSkill: boolean;
  maxRanks: number;
  rankCost: number;
  audit: AuditEntry[];
  /** Superior Synergy: conditional bonuses and special benefits that attach to this skill (house rule). */
  synergyNotes?: string[];
}

export interface ResolvedInventoryItem {
  entry: InventoryEntry;
  name: string;
  category: string;
  summary: string;
  source: string;
  sourceUrl: string;
}

export interface ResolvedCharacter {
  build: CharacterBuild;
  race: RaceDefinition;
  size: Size;
  type: CreatureType;
  subtypes: string[];
  /** Movement modes in feet, keyed by mode ("base", "fly", …). */
  speed: Record<string, number>;
  abilityScores: Record<AbilityKey, ResolvedAbility>;
  ac: {
    total: number;
    touch: number;
    flatFooted: number;
    components: Record<string, { value: number }>;
    audit: AuditEntry[];
  };
  bab: ResolvedValue;
  saves: Record<SaveKey, ResolvedValue>;
  hp: ResolvedValue;
  cr: { value: number; audit: AuditEntry[] };
  levelAdjustment: { base: number; boughtOff: number; current: number; audit: AuditEntry[] };
  ecl: { value: number; audit: AuditEntry[] };
  totalHitDice: number;
  classHitDice: number;
  racialHitDice: number;
  features: FeatureDefinition[];
  appliedTemplates: TemplateDefinition[];
  selectedFeats: FeatDefinition[];
  skills: ResolvedSkill[];
  /** Superior Synergy benefits whose target is not a skill total (wild empathy, familiars, …). Empty unless the house rule is on. */
  synergyNotes: string[];
  skillPoints: { total: number; spent: number; audit: AuditEntry[] };
  featSlots: { total: number; used: number; audit: AuditEntry[] };
  inventory: ResolvedInventoryItem[];
  validation: ValidationIssue[];
}
