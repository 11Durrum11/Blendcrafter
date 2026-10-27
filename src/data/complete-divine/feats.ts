import type { FeatDefinition } from "@/engine/types";

// Complete Divine (ruleset "core").
// Source (Shaun's PDF): D&D 3.5 - Complete Divine.pdf, Dropbox:
// /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf
// The PDF is a scan with no text layer; this data comes from OCR of the
// printed pages.
//
// Feats from Chapter 3: Supplemental Rules. All feats are listed in
// Table 3-1 (p. 78) with descriptions on pp. 79-86.
// House style: short mechanical summaries written for this dataset; the
// book's text is not reproduced. Divine feats are powered by turning
// attempts and wild feats by wild shape, as described in the chapter
// introduction; both are recorded with category "general" and the
// grouping noted in `special`.
// Three Table 3-1 feats are omitted as duplicates of feats already in
// the dataset from other books: Consecrate Spell (Book of Exalted
// Deeds, this batch), and Practiced Spellcaster and Transdimensional
// Spell (both also printed in Complete Arcane's Table 3-1 and kept
// from that book in this batch).

const BOOK = "Complete Divine";
const CH3 = `${BOOK} — Chapter 3: Supplemental Rules`;
const CD_PATH =
  "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf";
const T31 = `${CH3}, Table 3-1: Feats (p. 78)`;
const DIVINE =
  "Divine feat: powered by expending turn/rebuke undead attempts (see the Chapter 3 introduction, p. 77).";
const WILD =
  "Wild feat: powered by expending a wild shape use (see the Chapter 3 introduction, p. 77).";

type F = FeatDefinition;
const G = "general" as const;
const M = "metamagic" as const;
const IC = "item-creation" as const;

export const COMPLETE_DIVINE_FEATS: FeatDefinition[] = [
  // ---- Table 3-1: General feats (p. 78; descriptions pp. 79-80) ----
  { id: "arcane-disciple", name: "Arcane Disciple", category: G, ruleset: "core", prerequisites: ["Knowledge (religion) 4 ranks", "Spellcraft 4 ranks", "ability to cast arcane spells", "alignment matching your deity's"], benefitSummary: "Add the spells of one domain granted by your deity to your arcane class spell list; you learn and cast them as arcane spells (Wisdom-based save DCs), each no more than once per day.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "augment-healing", name: "Augment Healing", category: G, ruleset: "core", prerequisites: ["Heal 4 ranks"], benefitSummary: "Each conjuration (healing) spell you cast heals +2 hit points per spell level in addition to its normal effect.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "domain-focus", name: "Domain Focus", category: G, ruleset: "core", prerequisites: ["Access to the relevant domain"], benefitSummary: "Your caster level for the chosen domain's spells and granted power increases by +1.", special: "You can take this feat multiple times; each time it applies to a different domain.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "empower-turning", name: "Empower Turning", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead"], benefitSummary: "You turn or rebuke more undead than usual: after adding your cleric level and Charisma modifier to your turning damage roll, multiply the result by 1.5.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "improved-smiting", name: "Improved Smiting", category: G, ruleset: "core", prerequisites: ["Cha 13", "smite ability"], benefitSummary: "When you smite, your weapon gains your alignment for overcoming damage reduction, and you deal +1d6 damage on a successful smite attack.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "quicken-turning", name: "Quicken Turning", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead"], benefitSummary: "You can turn or rebuke undead as a free action (once per round), though it still counts against your daily uses.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "spell-focus-alignment", name: "Spell Focus (Chaos, Evil, Good, Law)", category: G, ruleset: "core", prerequisites: ["Alignment matching the chosen descriptor"], benefitSummary: "Choose an alignment descriptor (chaos, evil, good, or law): add +1 to the Difficulty Class for all saving throws against spells you cast with that descriptor.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "spontaneous-healer", name: "Spontaneous Healer", category: G, ruleset: "core", prerequisites: ["Knowledge (religion) 4 ranks", "nonevil alignment"], benefitSummary: "Swap out prepared spells for cure spells on your spell list, as a cleric's spontaneous casting; usable a number of times per day equal to your Wisdom modifier.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "spontaneous-summoner", name: "Spontaneous Summoner", category: G, ruleset: "core", prerequisites: ["Knowledge (nature) 4 ranks", "partly neutral alignment (NG, LN, N, CN, or NE)"], benefitSummary: "Swap out prepared spells for summon nature's ally spells, as a druid's spontaneous casting; usable a number of times per day equal to your Wisdom modifier.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "spontaneous-wounder", name: "Spontaneous Wounder", category: G, ruleset: "core", prerequisites: ["Knowledge (religion) 4 ranks", "nongood alignment"], benefitSummary: "Swap out prepared spells for inflict spells on your spell list, as an evil cleric's spontaneous casting; usable a number of times per day equal to your Wisdom modifier.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },

  // ---- Table 3-1: Divine feats (p. 78; descriptions pp. 80-82) ----
  { id: "disciple-of-the-sun", name: "Disciple of the Sun", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead", "good alignment"], benefitSummary: "Spend an extra turn attempt when turning undead to destroy the undead you would normally turn.", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "divine-metamagic", name: "Divine Metamagic", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead"], benefitSummary: "When you take this feat, choose a metamagic feat you know: spend turn/rebuke attempts (one plus one per level increase of the feat) to apply that metamagic feat to a spell without raising its level or casting time.", special: `You can take this feat multiple times; each time it applies to a different metamagic feat. ${DIVINE}`, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "divine-spell-power", name: "Divine Spell Power", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead", "able to cast 1st-level divine spells"], benefitSummary: "Spend a turn/rebuke attempt as a free action and roll a turning check (with a +3 bonus): treat the check result as a modifier to your caster level for the next divine spell you cast that round (see the feat's table).", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "glorious-weapons", name: "Glorious Weapons", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead"], benefitSummary: "Spend a turn/rebuke attempt to give all your allies' weapons within 60 feet your alignment for overcoming damage reduction, for 1 round.", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "domain-spontaneity", name: "Domain Spontaneity", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead"], benefitSummary: "Spend a turn/rebuke attempt to spontaneously cast a spell from one of your domains, losing a prepared spell of the same level.", special: "You can take this feat multiple times; each time it applies to a different domain. " + DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "elemental-smiting", name: "Elemental Smiting", category: G, ruleset: "core", prerequisites: ["Ability to turn creatures with an elemental subtype"], benefitSummary: "Once per round, spend a turn attempt as a free action when making a melee attack: if you hit a creature you could turn because of its elemental subtype, add your cleric level as a bonus on the damage roll.", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "elemental-healing", name: "Elemental Healing", category: G, ruleset: "core", prerequisites: ["Ability to rebuke creatures with an elemental subtype"], benefitSummary: "Spend a rebuke attempt as a standard action to send out a 60-foot burst of healing energy: all creatures with an elemental subtype that you could normally rebuke are healed of 1d8 points of damage per two cleric levels.", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "profane-boost", name: "Profane Boost", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead"], benefitSummary: "Spend a turn/rebuke attempt so that inflict spells cast within 60 feet of you during the next round are maximized.", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "sacred-boost", name: "Sacred Boost", category: G, ruleset: "core", prerequisites: ["Ability to turn or rebuke undead"], benefitSummary: "Spend a turn/rebuke attempt so that cure spells cast within 60 feet of you during the next round are maximized.", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "sacred-healing", name: "Sacred Healing", category: G, ruleset: "core", prerequisites: ["Heal 8 ranks", "ability to turn or rebuke undead"], benefitSummary: "As a full-round action, spend a turn/rebuke attempt to grant yourself and all allies within a 60-foot burst fast healing 3 for a number of rounds equal to 1 + your Charisma modifier.", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "true-believer", name: "True Believer", category: G, ruleset: "core", prerequisites: ["Worship one deity", "alignment within one step of your deity's"], benefitSummary: "Once per day, gain a +3 insight bonus on a single saving throw; the bonus must be applied before the roll is made. (This feat also unlocks the full power of relics of your faith; see Chapter 4.)", special: DIVINE, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },

  // ---- Table 3-1: Item creation feats (p. 78; description p. 82) ----
  { id: "sanctify-relic", name: "Sanctify Relic", category: IC, ruleset: "core", prerequisites: ["Any other item creation feat", "True Believer", "caster level 7th"], benefitSummary: "Create relics — magic items with a divine connection to your deity that function at full power only for worshipers of that deity (see the relics rules in Chapter 4).", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },

  // ---- Table 3-1: Metamagic feats (p. 78; descriptions pp. 82-83) ----
  { id: "corrupt-spell", name: "Corrupt Spell", category: M, ruleset: "core", prerequisites: ["Any evil alignment"], benefitSummary: "A corrupted spell gains the evil descriptor, and half its damage results from unholy power and is not subject to energy resistance. Uses a spell slot one level higher.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "rapid-spell", name: "Rapid Spell", category: M, ruleset: "core", prerequisites: [], benefitSummary: "A rapid spell is cast faster than normal: a spell with a casting time of 1 full round is cast as a standard action, and longer casting times are shortened (see the feat text). Uses a spell slot one level higher.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "reach-spell", name: "Reach Spell", category: M, ruleset: "core", prerequisites: [], benefitSummary: "A reach spell's touch becomes a ray with a range of 30 feet, requiring a ranged touch attack. Uses a spell slot two levels higher.", source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },

  // ---- Table 3-1: Wild feats (p. 78; descriptions pp. 83-86) ----
  { id: "boars-ferocity", name: "Boar's Ferocity", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to fight on while at negative hit points, as if under a ferocity effect, for the duration described in the feat text.", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "cheetahs-speed", name: "Cheetah's Speed", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to set your base land speed to 50 feet for 1 hour, and gain a sprint ability like a cheetah's (see the feat text).", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "eagles-wings", name: "Eagle's Wings", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to grow feathered wings and fly at a speed of 60 feet (average maneuverability) for 1 hour.", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "elephants-hide", name: "Elephant's Hide", category: G, ruleset: "core", prerequisites: ["Ability to wild shape into a Large creature"], benefitSummary: "Expend a wild shape use to gain a +7 natural armor bonus for 10 minutes.", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "extra-wild-shape", name: "Extra Wild Shape", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Gain two additional uses of wild shape per day; if you can use wild shape to become an elemental, you also gain one additional elemental wild shape use per day.", special: `You can take this feat multiple times; its effects stack. ${WILD}`, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "fast-wild-shape", name: "Fast Wild Shape", category: G, ruleset: "core", prerequisites: ["Dex 13", "Ability to use wild shape"], benefitSummary: "You can use wild shape as a move action rather than a standard action.", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "grizzlys-claws", name: "Grizzly's Claws", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to grow claws for 1 hour, usable in your own form or in a wild shape form without claws (damage by size, per the feat text).", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "lions-pounce", name: "Lion's Pounce", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to make a full attack at the end of a charge.", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "oaken-resilience", name: "Oaken Resilience", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to become plantlike for 10 minutes, gaining plant type immunities (mind-affecting effects, poison, sleep, paralysis, polymorph, stunning, and critical hits) as described in the feat text.", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "serpents-venom", name: "Serpent's Venom", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to gain a poisonous bite attack for 1 minute (damage and DC by size and Constitution, per the feat text).", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "swim-like-a-fish", name: "Swim Like a Fish", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to gain a swim speed of 40 feet and the ability to breathe underwater for 1 hour.", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
  { id: "wolverines-rage", name: "Wolverine's Rage", category: G, ruleset: "core", prerequisites: ["Ability to use wild shape"], benefitSummary: "Expend a wild shape use to enter a rage (as the barbarian ability) for 5 rounds.", special: WILD, source: `${BOOK}, p. 78 (${T31})`, sourceUrl: CD_PATH },
];