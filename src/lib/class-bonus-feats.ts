import type { FeatDefinition } from "@/engine/types";

/**
 * Class bonus-feat lists (Shaun, 2026-11-02: "Add the PHB fighter
 * bonus-feat list" and "make sure it's right for all the classes, not
 * just the fighter bonus feats").
 *
 * Every rule below is grounded in the class's own source book: either
 * an explicit feat list transcribed from the book (cited per rule), or
 * a feat-type rule exactly where the class text defines its bonus
 * feats by type (Wizard, Wu Jen, Psion, Shadowcaster, Mortitheurge).
 * Feat-type membership is read off the feat records' own printed
 * descriptors (the house style records [Psionic], [Metashadow],
 * [Ghost], and recitation feats in each record's `special` text).
 *
 * The Feats step renders one section per rule, in the order given
 * here, ahead of the category sections. A feat is listed in exactly
 * one section: the earliest matching rule wins, and any later rule
 * whose list is entirely claimed by earlier sections still shows its
 * heading as a pointer (see step-feats.tsx).
 */

const featText = (feat: FeatDefinition): string =>
  [feat.special ?? "", feat.benefitSummary, ...feat.prerequisites].join(" ");

/* ------------------------------------------------------------------ */
/* Feat-type predicates (from the records' printed descriptors)        */
/* ------------------------------------------------------------------ */

/** The feat's own record says a fighter may select it as a bonus feat. */
export function isFighterBonusFeatByText(feat: FeatDefinition): boolean {
  return /fighter bonus feat/i.test(featText(feat));
}

/** Printed [Psionic] feat (XPH / Complete Psionic / Races of Eberron style). */
export function isPsionicFeat(feat: FeatDefinition): boolean {
  const s = feat.special ?? "";
  return /^Psionic feat\b/.test(s) || /Printed as a \[Psionic\] feat/.test(s);
}

/** Printed metapsionic feat. */
export function isMetapsionicFeat(feat: FeatDefinition): boolean {
  return /Metapsionic feat/.test(feat.special ?? "");
}

/** Printed psionic item creation feat (a subset of the item-creation category). */
export function isPsionicItemCreationFeat(feat: FeatDefinition): boolean {
  return /^Psionic item creation feat/.test(feat.special ?? "");
}

/** Printed [Metashadow] feat (Tome of Magic). */
export function isMetashadowFeat(feat: FeatDefinition): boolean {
  return /^Metashadow feat/.test(feat.special ?? "");
}

/**
 * A true metamagic feat: the data files metapsionic, metashadow,
 * utterance, and epic psionic feats under the "metamagic" category
 * (per the metapsionic precedent), but no book counts those as
 * metamagic feats, so they are excluded here.
 */
export function isMetamagicFeat(feat: FeatDefinition): boolean {
  if (feat.category !== "metamagic") return false;
  if (isMetapsionicFeat(feat) || isMetashadowFeat(feat)) return false;
  if (/^Epic psionic feat/.test(feat.special ?? "")) return false;
  if (/utterance/i.test(feat.name)) return false;
  return true;
}

/** A true item creation feat (psionic item creation feats excluded). */
export function isItemCreationFeat(feat: FeatDefinition): boolean {
  return feat.category === "item-creation" && !isPsionicItemCreationFeat(feat);
}

/** Printed [Ghost] feat (Ghostwalk). */
export function isGhostFeat(feat: FeatDefinition): boolean {
  return /\[Ghost\] feat/.test(feat.special ?? "");
}

/** Printed recitation feat (Tome of Magic, p. 231). */
export function isRecitationFeat(feat: FeatDefinition): boolean {
  return /^Recitation feat/.test(feat.special ?? "");
}

/** The feat's own record says a monk may select it as a bonus feat. */
export function isMonkBonusFeatByText(feat: FeatDefinition): boolean {
  const t = featText(feat);
  return /monk (can|may) select/i.test(t) && /bonus feat/i.test(t);
}

/* ------------------------------------------------------------------ */
/* Transcribed book lists (feat ids; every id resolves to a record)    */
/* ------------------------------------------------------------------ */

/**
 * The PHB fighter bonus feat list — the feats designated as fighter
 * bonus feats in Player's Handbook Chapter 5 (Table 5–1, p. 90), as
 * listed in the SRD "Feats" chapter, "Fighter Bonus Feats".
 */
export const PHB_FIGHTER_BONUS_FEAT_IDS: readonly string[] = [
  "blind-fight", "combat-expertise", "improved-disarm", "improved-feint",
  "improved-trip", "whirlwind-attack", "combat-reflexes", "dodge",
  "mobility", "spring-attack", "exotic-weapon-proficiency",
  "improved-critical", "improved-initiative", "improved-shield-bash",
  "improved-unarmed-strike", "deflect-arrows", "improved-grapple",
  "snatch-arrows", "stunning-fist", "mounted-combat", "mounted-archery",
  "ride-by-attack", "spirited-charge", "trample", "point-blank-shot",
  "far-shot", "precise-shot", "rapid-shot", "manyshot", "shot-on-the-run",
  "improved-precise-shot", "power-attack", "cleave", "great-cleave",
  "improved-bull-rush", "improved-overrun", "improved-sunder",
  "quick-draw", "rapid-reload", "two-weapon-fighting",
  "two-weapon-defense", "improved-two-weapon-fighting",
  "greater-two-weapon-fighting", "weapon-finesse", "weapon-focus",
  "weapon-specialization", "greater-weapon-focus",
  "greater-weapon-specialization",
];

/**
 * Feats Player's Handbook II designates as fighter bonus feats in
 * their own Special lines (Chapter 3). Their data records are terse
 * fan-index summaries that omit the sentence, so — exactly like the
 * PHB list — the designation is transcribed from the book.
 */
export const PHB2_FIGHTER_BONUS_FEAT_IDS: readonly string[] = [
  "acrobatic-strike", "active-shield-defense", "adaptable-flanker",
  "agile-shield-fighter", "armor-specialization", "battle-dancer",
  "brutal-strike", "combat-acrobat", "combat-defense", "combat-focus",
  "combat-vigor", "crossbow-sniper", "deadeye-shot", "defensive-sweep",
  "fiery-fist", "fiery-ki-defense", "flay", "intimidating-strike",
  "ki-blast", "lunging-strike", "melee-evasion", "melee-weapon-mastery",
  "penetrating-shot", "ranged-weapon-mastery", "robilars-gambit",
  "shield-specialization", "shield-ward", "short-haft",
  "spectral-skirmisher", "tumbling-feint", "two-weapon-rend",
  "vexing-flanker", "water-splitting-stone", "blood-spiked-charger",
  "combat-cloak-expert", "einhander", "shadow-striker",
];

/**
 * The monk bonus feat list, Player's Handbook (Monk, "Bonus Feat"):
 * Improved Grapple or Stunning Fist at 1st level, Combat Reflexes or
 * Deflect Arrows at 2nd, Improved Disarm or Improved Trip at 6th.
 */
export const PHB_MONK_BONUS_FEAT_IDS: readonly string[] = [
  "improved-grapple", "stunning-fist", "combat-reflexes",
  "deflect-arrows", "improved-disarm", "improved-trip",
];

/**
 * Player's Handbook II feats whose Special lines also designate them
 * as monk bonus feats (each with its own conditions in the book:
 * Fiery Fist at 2nd level, Fiery Ki Defense and Ki Blast with the
 * Fiery Fist feat in hand, Water Splitting Stone at base attack
 * bonus +6 — the monk must have the Stunning Fist feat).
 */
export const PHB2_MONK_BONUS_FEAT_IDS: readonly string[] = [
  "fiery-fist", "fiery-ki-defense", "ki-blast", "water-splitting-stone",
];

/**
 * The knight bonus feat list, Player's Handbook II (Knight, "Bonus
 * Feat", gained at 5th, 10th, and 15th level). The book prints
 * "Weapon Focus (lance)" — the Weapon Focus feat, restricted to the
 * lance.
 */
export const KNIGHT_BONUS_FEAT_IDS: readonly string[] = [
  "animal-affinity", "diehard", "endurance", "great-fortitude",
  "iron-will", "quick-draw", "ride-by-attack", "spirited-charge",
  "trample", "weapon-focus",
];

/**
 * The scout bonus feat list, Complete Adventurer (Scout, "Bonus
 * Feats", at 4th level and every four levels thereafter).
 */
export const SCOUT_BONUS_FEAT_IDS: readonly string[] = [
  "acrobatic", "agile", "alertness", "athletic", "blind-fight",
  "brachiation", "combat-expertise", "danger-sense", "dodge",
  "endurance", "far-shot", "great-fortitude", "hear-the-unseen",
  "improved-initiative", "improved-swimming", "iron-will",
  "lightning-reflexes", "mobility", "point-blank-shot", "precise-shot",
  "quick-draw", "quick-reconnoiter", "rapid-reload", "shot-on-the-run",
  "skill-focus", "spring-attack", "track",
];

/**
 * The hexblade bonus feat list, Complete Warrior (Hexblade, "Bonus
 * Feat", at 5th level and every five levels thereafter). The book
 * restricts Spell Focus and Greater Spell Focus to the enchantment,
 * necromancy, and transmutation schools.
 */
export const HEXBLADE_BONUS_FEAT_IDS: readonly string[] = [
  "combat-casting", "greater-spell-focus", "greater-spell-penetration",
  "spell-focus", "spell-penetration",
];

/**
 * The warblade bonus feat list, Tome of Battle, p. 22 ("Bonus Feat
 * List", gained at 5th level and every four levels thereafter). The
 * book prints "Ironheart"; the feat itself is Ironheart Aura
 * (Chapter 2), the only feat of that name in the book.
 */
export const WARBLADE_BONUS_FEAT_IDS: readonly string[] = [
  "acrobatic", "agile", "athletic", "blade-meditation", "blind-fight",
  "combat-reflexes", "diehard", "endurance", "great-fortitude",
  "improved-initiative", "iron-will", "ironheart-aura",
  "lightning-reflexes", "quick-draw", "run", "stone-power",
  "tiger-blooded", "unnerving-calm", "white-raven-defense",
];

/**
 * The binder bonus feat list, Tome of Magic (Binder, "Bonus Feats",
 * at 4th, 11th, and 18th level): eight named feats plus "the feats
 * presented in this chapter" — the pact magic feats of Chapter 1
 * (Table 1–8, p. 72).
 */
export const BINDER_NAMED_FEAT_IDS: readonly string[] = [
  "armor-proficiency-medium", "armor-proficiency-heavy", "diligent",
  "investigator", "martial-weapon-proficiency", "negotiator",
  "persuasive", "shield-proficiency",
];

export const PACT_FEAT_IDS: readonly string[] = [
  "bind-vestige", "bind-vestige-improved",
  "defense-against-the-supernatural", "empower-supernatural-ability",
  "enlarge-supernatural-ability", "expel-vestige",
  "extend-supernatural-ability", "favored-vestige",
  "favored-vestige-focus", "ignore-special-requirements",
  "improved-binding", "practiced-binder", "rapid-pact-making",
  "rapid-recovery", "skilled-pact-making", "sudden-ability-focus",
  "supernatural-crusader", "supernatural-opportunist",
  "widen-supernatural-ability",
];

/**
 * The shadowcaster's named bonus feats, Tome of Magic (Shadowcaster,
 * "Bonus Feats") — on top of any metamagic feat and any metashadow
 * feat, per the class text.
 */
export const SHADOWCASTER_NAMED_FEAT_IDS: readonly string[] = [
  "favored-mystery", "greater-path-focus", "nocturnal-caster",
  "path-focus", "shadow-vision",
];

/**
 * The musketeer bonus feat list, Sorcery & Steam (Musketeer, "Bonus
 * Feat", at 5th level and every three levels thereafter), printed as
 * prerequisite chains. The book's "Expertise" is the Combat Expertise
 * feat, and its "Grenadier" is this book's own Grenadier feat. The
 * book also lists Ambidexterity, a 3.0 feat with no record in the
 * data (folded into Two-Weapon Fighting in 3.5), so it is not here.
 */
export const MUSKETEER_BONUS_FEAT_IDS: readonly string[] = [
  "alertness", "blind-fight", "combat-climbing", "swing-by-attack",
  "combat-reflexes", "combat-reload", "dodge", "mobility",
  "slip-the-attack", "spring-attack", "exotic-weapon-proficiency",
  "combat-expertise", "duelist", "improved-disarm", "improved-parry",
  "improved-trip", "parry", "riposte", "whirlwind-attack",
  "explosives-expert", "grenadier", "improved-critical",
  "improved-initiative", "lightning-reflexes", "point-blank-shot",
  "far-shot", "precise-shot", "rapid-shot", "shot-on-the-run",
  "quick-draw", "skill-focus", "trick-shot", "two-guns-blazing",
  "two-weapon-fighting", "improved-two-weapon-fighting", "main-gauche",
  "weapon-finesse", "weapon-focus", "weapons-of-opportunity",
];

/**
 * The arcane mechanik bonus feat list, Liber Mechanika (Arcane
 * Mechanik, "Bonus Feats", at 3rd, 6th, 9th, and 12th level). The
 * book also lists Craft Accumulator, which has no record in the
 * data, so it is not here.
 */
export const ARCANE_MECHANIK_BONUS_FEAT_IDS: readonly string[] = [
  "craft-cerebral-matrix", "craft-cortex", "craft-mechanikal-construct",
  "craft-mechanikal-prosthetic", "craft-wondrous-item",
  "mechanikal-specialty", "union-steamo",
];

/* ------------------------------------------------------------------ */
/* The class rules, in section order                                   */
/* ------------------------------------------------------------------ */

const idSet = (ids: readonly string[]): Set<string> => new Set(ids);
const inIds =
  (ids: readonly string[]): ((feat: FeatDefinition) => boolean) => {
    const set = idSet(ids);
    return (feat) => set.has(feat.id);
  };

/**
 * The full fighter bonus feat set: every feat designated as a fighter
 * bonus feat in its own record text, plus the PHB list, plus the
 * Player's Handbook II designations.
 */
export function isFighterBonusFeat(feat: FeatDefinition): boolean {
  return (
    isFighterBonusFeatByText(feat) ||
    inIds(PHB_FIGHTER_BONUS_FEAT_IDS)(feat) ||
    inIds(PHB2_FIGHTER_BONUS_FEAT_IDS)(feat)
  );
}

/**
 * The wizard bonus feat rule, Player's Handbook (Wizard, "Bonus
 * Feats"): a metamagic feat, an item creation feat, or Spell Mastery.
 * Spell Mastery is named by the rule but currently has no feat
 * record in the data; the name check picks it up if one is added.
 */
export function isWizardBonusFeat(feat: FeatDefinition): boolean {
  return (
    isMetamagicFeat(feat) ||
    isItemCreationFeat(feat) ||
    feat.name === "Spell Mastery"
  );
}

/** Iron Kingdoms Character Guide, p. 103: the fell caller chooses bonus
 * feats from the fighter list, except these three. */
export const FELL_CALLER_EXCLUDED_IDS: ReadonlySet<string> = new Set([
  "greater-weapon-focus",
  "weapon-specialization",
  "greater-weapon-specialization",
]);

export function isFellCallerBonusFeat(feat: FeatDefinition): boolean {
  return isFighterBonusFeat(feat) && !FELL_CALLER_EXCLUDED_IDS.has(feat.id);
}

/** Iron Kingdoms Character Guide, p. 109: the gun mage's printed bonus-feat
 * list, beyond "any metamagic feat". Parenthetical chain feats in the book's
 * list are included. Combat Loading and Improved Combat Loading are on the
 * printed list but have no feat records in the data. */
export const GUN_MAGE_BONUS_FEAT_IDS: readonly string[] = [
  "combat-casting",
  "dodge",
  "mobility",
  "improved-initiative",
  "point-blank-shot",
  "far-shot",
  "improved-precise-shot",
  "precise-shot",
  "rapid-shot",
  "shot-on-the-run",
  "quick-draw",
  "skill-focus",
  "spell-focus",
  "greater-spell-focus",
  "spell-penetration",
  "greater-spell-penetration",
  "weapon-focus",
];

const GUN_MAGE_BONUS_FEAT_ID_SET: ReadonlySet<string> = new Set(GUN_MAGE_BONUS_FEAT_IDS);

export function isGunMageBonusFeat(feat: FeatDefinition): boolean {
  return isMetamagicFeat(feat) || GUN_MAGE_BONUS_FEAT_ID_SET.has(feat.id);
}

export interface ClassBonusFeatRule {
  classId: string;
  className: string;
  sectionLabel: string;
  /** One-line source note shown under the section heading. */
  note: string;
  matches: (feat: FeatDefinition) => boolean;
}

export const CLASS_BONUS_FEAT_RULES: readonly ClassBonusFeatRule[] = [
  {
    classId: "fighter",
    className: "Fighter",
    sectionLabel: "Fighter Bonus Feats",
    note: "Feats designated as fighter bonus feats: the Player's Handbook list (Table 5–1), Player's Handbook II, and each feat's own text.",
    matches: isFighterBonusFeat,
  },
  {
    classId: "wizard",
    className: "Wizard",
    sectionLabel: "Wizard Bonus Feats",
    note: "Per the Wizard class, Player's Handbook: a metamagic feat, an item creation feat, or Spell Mastery. (The mortitheurge uses this same rule — see below.)",
    matches: isWizardBonusFeat,
  },
  {
    classId: "monk",
    className: "Monk",
    sectionLabel: "Monk Bonus Feats",
    note: "Per the Monk class, Player's Handbook (1st, 2nd, and 6th level lists), plus the monk designations in Player's Handbook II and each feat's own text. All the PHB monk choices and the Player's Handbook II monk feats are also fighter bonus feats, so they are listed under Fighter Bonus Feats above.",
    matches: (feat) =>
      inIds(PHB_MONK_BONUS_FEAT_IDS)(feat) ||
      inIds(PHB2_MONK_BONUS_FEAT_IDS)(feat) ||
      isMonkBonusFeatByText(feat),
  },
  {
    classId: "psion",
    className: "Psion",
    sectionLabel: "Psion Bonus Feats",
    note: "Per the Psion class, Expanded Psionics Handbook, p. 20: a psionic feat, a metapsionic feat, or a psionic item creation feat.",
    matches: (feat) =>
      isPsionicFeat(feat) ||
      isMetapsionicFeat(feat) ||
      isPsionicItemCreationFeat(feat),
  },
  {
    classId: "psychic-warrior",
    className: "Psychic Warrior",
    sectionLabel: "Psychic Warrior Bonus Feats",
    note: "Per the Psychic Warrior class, Expanded Psionics Handbook, p. 25: the fighter bonus feats or the psionic feats — both lists are shown in the sections above.",
    matches: (feat) => isFighterBonusFeat(feat) || isPsionicFeat(feat),
  },
  {
    classId: "fell-caller",
    className: "Fell Caller",
    sectionLabel: "Fell Caller Bonus Feats",
    note: "Per the Fell Caller class, Iron Kingdoms Character Guide, p. 103: bonus feats at 4th, 8th, 12th, 16th, and 20th level from the fighter bonus feat list, except Greater Weapon Focus, Weapon Specialization, and Greater Weapon Specialization — the fighter feats are listed under Fighter Bonus Feats above.",
    matches: isFellCallerBonusFeat,
  },
  {
    classId: "knight",
    className: "Knight",
    sectionLabel: "Knight Bonus Feats",
    note: "Per the Knight class list, Player's Handbook II (bonus feats at 5th, 10th, and 15th level; Weapon Focus is lance only).",
    matches: inIds(KNIGHT_BONUS_FEAT_IDS),
  },
  {
    classId: "scout",
    className: "Scout",
    sectionLabel: "Scout Bonus Feats",
    note: "Per the Scout class list, Complete Adventurer (bonus feats at 4th level and every four levels thereafter).",
    matches: inIds(SCOUT_BONUS_FEAT_IDS),
  },
  {
    classId: "hexblade",
    className: "Hexblade",
    sectionLabel: "Hexblade Bonus Feats",
    note: "Per the Hexblade class list, Complete Warrior (bonus feats at 5th level and every five levels thereafter; Spell Focus choices are limited to enchantment, necromancy, and transmutation).",
    matches: inIds(HEXBLADE_BONUS_FEAT_IDS),
  },
  {
    classId: "warblade",
    className: "Warblade",
    sectionLabel: "Warblade Bonus Feats",
    note: "Per the Warblade bonus feat list, Tome of Battle, p. 22 (bonus feats at 5th level and every four levels thereafter).",
    matches: inIds(WARBLADE_BONUS_FEAT_IDS),
  },
  {
    classId: "binder",
    className: "Binder",
    sectionLabel: "Binder Bonus Feats",
    note: "Per the Binder class, Tome of Magic (bonus feats at 4th, 11th, and 18th level): eight named feats plus the pact magic feats of Chapter 1.",
    matches: (feat) =>
      inIds(BINDER_NAMED_FEAT_IDS)(feat) || inIds(PACT_FEAT_IDS)(feat),
  },
  {
    classId: "shadowcaster",
    className: "Shadowcaster",
    sectionLabel: "Shadowcaster Bonus Feats",
    note: "Per the Shadowcaster class, Tome of Magic: any metamagic feat, any metashadow feat, Favored Mystery, Greater Path Focus, Nocturnal Caster, Path Focus, or Shadow Vision. (The plain metamagic feats are listed under Wizard Bonus Feats above.)",
    matches: (feat) =>
      isMetamagicFeat(feat) ||
      isMetashadowFeat(feat) ||
      inIds(SHADOWCASTER_NAMED_FEAT_IDS)(feat),
  },
  {
    classId: "truenamer",
    className: "Truenamer",
    sectionLabel: "Truenamer Bonus Feats",
    note: "Per the Truenamer class, Tome of Magic (bonus recitation feats at 9th and 15th level): the recitation feats, p. 231.",
    matches: isRecitationFeat,
  },
  {
    classId: "wu-jen",
    className: "Wu Jen",
    sectionLabel: "Wu Jen Bonus Feats",
    note: "Per the Wu Jen class, Complete Arcane: a bonus metamagic feat at 1st level — the metamagic feats are listed under Wizard Bonus Feats above.",
    matches: isMetamagicFeat,
  },
  {
    classId: "mortitheurge",
    className: "Mortitheurge",
    sectionLabel: "Mortitheurge Bonus Feats",
    note: "Per the Mortitheurge class, Monsternomicon vol. 2: a metamagic feat, an item creation feat, or Spell Mastery — the same list as the wizard's, shown under Wizard Bonus Feats above.",
    matches: isWizardBonusFeat,
  },
  {
    classId: "arcane-mechanik",
    className: "Arcane Mechanik",
    sectionLabel: "Arcane Mechanik Bonus Feats",
    note: "Per the Arcane Mechanik class list, Liber Mechanika (bonus feats at 3rd, 6th, 9th, and 12th level). The book also lists Craft Accumulator, which is not in the feat data; the five craft feats on the list are item creation feats, listed under Wizard Bonus Feats above.",
    matches: inIds(ARCANE_MECHANIK_BONUS_FEAT_IDS),
  },
  {
    classId: "musketeer",
    className: "Musketeer",
    sectionLabel: "Musketeer Bonus Feats",
    note: "Per the Musketeer class list, Sorcery & Steam (bonus feats at 5th level and every three levels thereafter). The book also lists Ambidexterity, a 3.0 feat folded into Two-Weapon Fighting in 3.5, which has no feat record.",
    matches: inIds(MUSKETEER_BONUS_FEAT_IDS),
  },
  {
    classId: "gun-mage",
    className: "Gun Mage",
    sectionLabel: "Gun Mage Bonus Feats",
    note: "Per the Gun Mage class list, Iron Kingdoms Character Guide, p. 109 (bonus feats at 5th level and every five levels thereafter): any metamagic feat (listed under Wizard Bonus Feats above), plus the printed list below. The book also lists Combat Loading and Improved Combat Loading, which have no feat records in the data.",
    matches: isGunMageBonusFeat,
  },
  {
    classId: "eidolon",
    className: "Eidolon",
    sectionLabel: "Eidolon Bonus Feats",
    note: "Per the Eidolon class, Ghostwalk: bonus feats must be feats with the [Ghost] descriptor. This is also the eidoloncer's bonus-feat list — see below.",
    matches: isGhostFeat,
  },
  {
    classId: "eidoloncer",
    className: "Eidoloncer",
    sectionLabel: "Eidoloncer Bonus Feats",
    note: "Per the Eidoloncer class, Ghostwalk: bonus feats must be feats with the [Ghost] descriptor — the same list as the eidolon's, shown in the Eidolon Bonus Feats section above.",
    matches: isGhostFeat,
  },
];
