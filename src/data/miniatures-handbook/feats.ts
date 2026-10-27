/**
 * Miniatures Handbook feat data pack: the feats of Chapter 1 of
 * Miniatures Handbook (Wizards of the Coast), as listed in
 * Table 1–14: Feats (p. 26), with descriptions on pp. 25–28.
 * Built 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC DM related/Desktop/Sourcebooks/Miniatures Handbook.pdf
 *
 * Twenty of the table's thirty-two feats are new records.
 * Twelve are skipped as duplicates of records already in the
 * dataset — the Complete books reprinted a dozen of this
 * book's feats, and the earlier batches' records stand:
 * Goad (already in from Races of Stone as id "goad-ros";
 * Complete Adventurer's Goad was skipped on the same basis
 * in Batch 2), Mage Slayer, Sudden Empower, Sudden Extend,
 * Sudden Maximize, Sudden Quicken, Sudden Silent, Sudden
 * Still, and Sudden Widen (all already in from Complete
 * Arcane, Batch 3), Danger Sense and Deft Opportunist
 * (Complete Adventurer, Batch 2), and Dash (Complete
 * Warrior, Batch 2). Sudden Energy Affinity is NOT a
 * duplicate: Complete Arcane did not reprint it, so it is
 * included below.
 *
 * Prerequisites and benefit summaries are the feat table's own,
 * condensed in house style and checked against the printed
 * descriptions. Feats whose descriptions name them as fighter
 * bonus feats are category "combat" with the fighter note in
 * the record's special field, following the house pattern. The
 * sudden metamagic feats (pp. 25, 28) apply their metamagic
 * effect once per day with no level increase and no special
 * preparation, as the book's sudden metamagic introduction
 * describes.
 */
import type { FeatDefinition } from "@/engine/types";

const MH = "Miniatures Handbook";
const MH_PATH = "/A POC DM related/Desktop/Sourcebooks/Miniatures Handbook.pdf";
const T114 = `${MH} — Chapter 1: Characters, Table 1–14: Feats (p. 26)`;
const FIGHTER = "A fighter may select this feat as one of his fighter bonus feats.";

export const MINIATURES_HANDBOOK_FEATS: FeatDefinition[] = [
  // ---- General feats ----
  { id: "battlefield-inspiration", name: "Battlefield Inspiration", category: "general", ruleset: "core", prerequisites: ["Cha 13"], benefitSummary: "As a free action, you inspire courage in allies within 30 feet who can hear you: a +2 circumstance bonus on saving throws against fear effects.", special: "You may select this feat multiple times; its effects stack, and each time you take it the bonus increases by +2.", source: T114, sourceUrl: MH_PATH },
  { id: "daunting-presence", name: "Daunting Presence", category: "combat", ruleset: "core", prerequisites: ["Cha 13", "base attack bonus +1"], benefitSummary: "As a standard action, overawe an opponent within 30 feet with line of sight and an Intelligence score: if it fails a Will save (DC 10 + 1/2 your character level + your Cha modifier), it is shaken for 10 minutes. No effect on a creature already shaken.", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "distracting-attack", name: "Distracting Attack", category: "combat", ruleset: "core", prerequisites: ["base attack bonus +1"], benefitSummary: "When you make a melee attack against a creature, hit or miss, all other creatures gain a +1 circumstance bonus on attack rolls against that creature until the start of your next turn.", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "double-hit", name: "Double Hit", category: "general", ruleset: "core", prerequisites: ["Combat Reflexes", "Two-Weapon Fighting", "Improved Two-Weapon Fighting"], benefitSummary: "When making an attack of opportunity, you may also make an attack with your off hand against the same target; decide before your first attack roll.", source: T114, sourceUrl: MH_PATH },
  { id: "extra-domain-spell", name: "Extra Domain Spell", category: "general", ruleset: "core", prerequisites: ["Wis 15", "access to one domain spell"], benefitSummary: "Choose one domain spell you can cast; you may cast that spell one extra time each day. The choice cannot later be changed.", special: "You may take this feat multiple times; each time it applies to a different domain spell.", source: T114, sourceUrl: MH_PATH },
  { id: "foe-specialist", name: "Foe Specialist", category: "general", ruleset: "core", prerequisites: ["sneak attack +1d6", "base attack bonus +4"], benefitSummary: "Choose a creature type from the ranger favored enemies table (not construct, elemental, ooze, plant, or undead): you deal an extra 1d6 damage on successful sneak attacks against that type.", special: "You can gain this feat multiple times; its effects do not stack, and each time it applies to a new creature type.", source: T114, sourceUrl: MH_PATH },
  { id: "hurling-charge", name: "Hurling Charge", category: "combat", ruleset: "core", prerequisites: ["Quick Draw", "base attack bonus +6"], benefitSummary: "When you charge, you may also make a ranged attack with a thrown weapon you had in hand at the start of your turn, in addition to your melee attack; both attacks target the same opponent and gain the charge bonus, and you take the normal –2 AC penalty.", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "martial-throw", name: "Martial Throw", category: "combat", ruleset: "core", prerequisites: ["Dex 17", "Improved Unarmed Strike"], benefitSummary: "When you hit an adjacent opponent of your size or smaller with an unarmed strike, make a special grapple check using Dexterity instead of Strength; if you succeed, you switch positions with the foe without provoking attacks of opportunity. Usable once per round, and it works on willing allies (who take the unarmed damage).", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "mounted-casting", name: "Mounted Casting", category: "general", ruleset: "core", prerequisites: ["Ride 1 rank", "Mounted Combat"], benefitSummary: "You gain a +10 bonus on Concentration checks to cast spells while mounted.", source: T114, sourceUrl: MH_PATH },
  { id: "powerful-charge", name: "Powerful Charge", category: "combat", ruleset: "core", prerequisites: ["Medium size or larger", "base attack bonus +1"], benefitSummary: "When you charge and your melee attack hits, it deals extra damage by your size: 1d8 (Medium), 2d6 (Large), 3d6 (Huge), 4d6 (Gargantuan), 6d6 (Colossal). Not usable while mounted; extra damage applies to only one attack per round.", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "greater-powerful-charge", name: "Greater Powerful Charge", category: "combat", ruleset: "core", prerequisites: ["Medium size or larger", "Powerful Charge", "base attack bonus +4"], benefitSummary: "As Powerful Charge, but you are treated as one size category larger (for Colossal creatures the extra damage becomes 8d6).", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "pushback", name: "Pushback", category: "combat", ruleset: "core", prerequisites: ["Str 17", "Improved Bull Rush", "Power Attack"], benefitSummary: "When you hit an adjacent opponent of your size or smaller with a melee attack, you may immediately make a special bull rush attempt; on a success you push the opponent back 5 feet and move into its square. Usable once per round, and the movement provokes no attacks of opportunity.", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "reckless-charge", name: "Reckless Charge", category: "combat", ruleset: "core", prerequisites: ["base attack bonus +1"], benefitSummary: "When you charge, before rolling your attack you may take a –4 penalty to Armor Class until the start of your next turn to gain a +4 bonus on the attack roll (in place of the usual charge bonus).", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "second-wind", name: "Second Wind", category: "general", ruleset: "core", prerequisites: [], benefitSummary: "Once per day, as a free action, you heal yourself of a number of hit points equal to your Constitution modifier (minimum 1).", source: T114, sourceUrl: MH_PATH },
  { id: "shieldmate", name: "Shieldmate", category: "combat", ruleset: "core", prerequisites: ["base attack bonus +1"], benefitSummary: "While you use a shield you are proficient with, friendly creatures adjacent to you gain a +1 shield bonus to Armor Class (+2 with a tower shield), lost if they leave adjacency or you are grappled, stunned, paralyzed, or otherwise unable to act; it does not stack with other shield bonuses.", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "improved-shieldmate", name: "Improved Shieldmate", category: "combat", ruleset: "core", prerequisites: ["Shieldmate", "base attack bonus +4"], benefitSummary: "As Shieldmate, except the bonus is +2, or +3 if you are using a tower shield.", special: FIGHTER, source: T114, sourceUrl: MH_PATH },
  { id: "sidestep", name: "Sidestep", category: "general", ruleset: "core", prerequisites: ["Dex 15", "Tumble 8 ranks", "Dodge", "Mobility"], benefitSummary: "Once per round, when you make an attack of opportunity, you may take a 5-foot step after the attack; this step counts against neither your one 5-foot step per round nor your movement on your turn.", source: T114, sourceUrl: MH_PATH },
  // ---- Metamagic feats ----
  { id: "energy-affinity", name: "Energy Affinity", category: "metamagic", ruleset: "core", prerequisites: ["Knowledge (arcana) 5 ranks", "ability to cast at least one spell of each of the acid, cold, electricity, and fire energy types"], benefitSummary: "Choose acid, cold, electricity, or fire: you can modify any spell with an energy descriptor to use the chosen energy type instead. A modified spell uses a spell slot of the spell's normal level.", special: "You can gain this feat multiple times; each time it applies to a different type of energy.", source: T114, sourceUrl: MH_PATH },
  { id: "sudden-energy-affinity", name: "Sudden Energy Affinity", category: "metamagic", ruleset: "core", prerequisites: ["Energy Affinity"], benefitSummary: "Once per day, apply the Energy Affinity feat to a spell you cast without increasing its level or preparing it specially.", special: "You can gain this feat multiple times; each time it applies to a different type of energy.", source: T114, sourceUrl: MH_PATH },
  { id: "sudden-enlarge", name: "Sudden Enlarge", category: "metamagic", ruleset: "core", prerequisites: [], benefitSummary: "Once per day, apply the Enlarge Spell feat to a spell you cast without increasing its level or preparing it specially.", source: T114, sourceUrl: MH_PATH },
];
