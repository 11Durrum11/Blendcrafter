/**
 * SRD core class data pack (levels 1-10): base attack bonus progression,
 * save progression, skill points, and class skills.
 * Sources:
 *   Fighter — https://www.d20srd.org/srd/classes/fighter.htm
 *   Wizard  — https://www.d20srd.org/srd/classes/wizard.htm
 *   Rogue   — https://www.d20srd.org/srd/classes/rogue.htm
 *   Cleric  — https://www.d20srd.org/srd/classes/cleric.htm
 */
import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

function buildRows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL_BAB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const THREE_QUARTER_BAB = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF_BAB = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD_SAVE = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR_SAVE = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  levelsNeeded: number | undefined,
  source: string,
  sourceUrl: string,
): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

export const CLASSES: Record<string, ClassDefinition> = {
  fighter: {
    id: "fighter",
    name: "Fighter",
    source: "d20SRD — Classes: Fighter",
    sourceUrl: "https://www.d20srd.org/srd/classes/fighter.htm",
    ruleset: "core",
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: buildRows(FULL_BAB, GOOD_SAVE, POOR_SAVE, POOR_SAVE),
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Ride", "Swim"],
    features: [
      f("Fighter Basics", "Alignment: any. Key abilities: Strength for melee (or Dexterity for ranged and finesse builds); Constitution and Dexterity aid survival. Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and all shields, including tower shields. The fighter's only class feature is his bonus feats (below) - his flexibility comes from the feats he chooses.", undefined, "d20SRD — Classes: Fighter", "https://www.d20srd.org/srd/classes/fighter.htm"),
      f("Bonus Feats", "At 1st level, and again at every even-numbered level (2nd, 4th, 6th, 8th, 10th, 12th, 14th, 16th, 18th, and 20th), a fighter gains a bonus feat from the fighter bonus feat list; he must still meet all of the feat's prerequisites. These bonus feats are in addition to the feats every character gains at 1st level and every three levels thereafter. (The selectable list is modeled in the Feats step.)", 1, "d20SRD — Classes: Fighter", "https://www.d20srd.org/srd/classes/fighter.htm"),
    ].map((x) => x as FeatureDefinition),
  },
  wizard: {
    id: "wizard",
    name: "Wizard",
    source: "d20SRD — Classes: Wizard",
    sourceUrl: "https://www.d20srd.org/srd/classes/wizard.htm",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: buildRows(HALF_BAB, POOR_SAVE, POOR_SAVE, GOOD_SAVE),
    classSkills: [
      "Concentration",
      "Craft",
      "Decipher Script",
      "Knowledge (all)",
      "Profession",
      "Spellcraft",
    ],
    features: [
      f("Wizard Basics", "Alignment: any. Key abilities: Intelligence determines the highest-level spells he can cast, his bonus spells per day, and his save DCs; Dexterity and Constitution aid survival. Weapon proficiencies: club, dagger, heavy crossbow, light crossbow, and quarterstaff; no armor and no shields (armor interferes with the somatic components of arcane spells). A wizard may substitute the Draconic language for any of his racial bonus languages.", undefined, "d20SRD — Classes: Wizard", "https://www.d20srd.org/srd/classes/wizard.htm"),
      f("Spells", "A wizard casts arcane spells prepared ahead of time from his spellbook (see Spellbooks, below), drawn from the sorcerer/wizard spell list. To learn, prepare, or cast a spell he needs an Intelligence score of at least 10 + the spell's level; bonus spells per day come from high Intelligence, and the saving throw DC against his spells is 10 + the spell's level + his Intelligence modifier. He prepares his spells after 8 hours of rest by studying his spellbook for 1 hour. School specialization (optional): a specialist gains one extra spell slot per spell level each day, which must be filled with a spell from his specialty school, and a +2 bonus on Spellcraft checks to learn spells of that school; in exchange he gives up two other schools (a diviner gives up only one), whose spells he can neither cast nor use from spell-trigger or spell-completion items - and Divination can never be given up.", 1, "d20SRD — Classes: Wizard", "https://www.d20srd.org/srd/classes/wizard.htm"),
      f("Summon Familiar", "A wizard can obtain a familiar: a magical beast that resembles a small animal and serves as his companion and servant. Summoning one takes 24 hours and uses up magical materials costing 100 gp. The familiar's abilities grow with the wizard's level (natural armor adjustment, increased Intelligence, alertness, improved evasion, share spells, empathic link, deliver touch spells, speak with master, and more at higher levels). If the familiar dies or is dismissed, the wizard must attempt a Fortitude save (DC 15): failure costs him 200 experience points per wizard level, success reduces the loss to half; a slain or dismissed familiar cannot be replaced for a year and a day.", 1, "d20SRD — Classes: Wizard", "https://www.d20srd.org/srd/classes/wizard.htm"),
      f("Scribe Scroll", "A wizard gains Scribe Scroll as a bonus feat at 1st level.", 1, "d20SRD — Classes: Wizard", "https://www.d20srd.org/srd/classes/wizard.htm"),
      f("Spellbooks", "A wizard must study his spellbook each day to prepare his spells; he cannot prepare a spell that is not recorded in it, except read magic, which he can prepare from memory. He begins play with a spellbook containing all 0-level wizard spells plus three 1st-level spells of his choice, plus one extra 1st-level spell for each point of Intelligence bonus. At each new wizard level, he adds two new spells of any spell level he can cast to his spellbook for free, and he can also copy spells found in other wizards' spellbooks or on scrolls, following the rules for writing a new spell into a spellbook.", 1, "d20SRD — Classes: Wizard", "https://www.d20srd.org/srd/classes/wizard.htm"),
      f("Bonus Feats", "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat, chosen from any metamagic feat, any item creation feat, or Spell Mastery (named in the class's bonus feat list; that feat itself is not modeled as a record in this app - see the wizard bonus-feat rule). (The selectable list is modeled in the Feats step.)", 5, "d20SRD — Classes: Wizard", "https://www.d20srd.org/srd/classes/wizard.htm"),
    ].map((x) => x as FeatureDefinition),
  },
  rogue: {
    id: "rogue",
    name: "Rogue",
    source: "d20SRD — Classes: Rogue",
    sourceUrl: "https://www.d20srd.org/srd/classes/rogue.htm",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: buildRows(THREE_QUARTER_BAB, POOR_SAVE, GOOD_SAVE, POOR_SAVE),
    classSkills: [
      "Appraise",
      "Balance",
      "Bluff",
      "Climb",
      "Craft",
      "Decipher Script",
      "Disable Device",
      "Disguise",
      "Escape Artist",
      "Forgery",
      "Gather Information",
      "Hide",
      "Intimidate",
      "Jump",
      "Listen",
      "Move Silently",
      "Open Lock",
      "Perform",
      "Profession",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot",
      "Swim",
      "Tumble",
      "Use Magic Device",
      "Use Rope",
    ],
    features: [
      f("Rogue Basics", "Alignment: any. Key abilities: Dexterity (many rogue skills and her defense), Intelligence (skill points), and Charisma (social skills). Weapon and armor proficiencies: all simple weapons, plus the hand crossbow, rapier, sap, shortbow, and short sword; light armor, but not shields.", undefined, "d20SRD — Classes: Rogue", "https://www.d20srd.org/srd/classes/rogue.htm"),
      f("Sneak Attack (Ex)", "A rogue deals +1d6 extra damage whenever her target is denied its Dexterity bonus to AC or is flanked by her; the extra damage rises by +1d6 at every odd level after 1st, to +10d6 at 19th level. A ranged sneak attack counts only if the target is within 30 feet. Sneak attack works only on living creatures with discernible anatomies - undead, constructs, oozes, plants, incorporeal creatures, and creatures immune to critical hits are immune - and the extra damage is not multiplied on a critical hit. With a sap or an unarmed strike, a rogue can deal nonlethal sneak attack damage instead of lethal damage.", 1, "d20SRD — Classes: Rogue", "https://www.d20srd.org/srd/classes/rogue.htm"),
      f("Trapfinding (Ex)", "A rogue can use the Search skill to locate traps with a DC higher than 20 (including magical traps) and can use Disable Device to bypass a trap or disarm magic traps - tasks that characters without trapfinding cannot attempt.", 1, "d20SRD — Classes: Rogue", "https://www.d20srd.org/srd/classes/rogue.htm"),
      f("Evasion (Ex)", "When exposed to any effect that normally allows a Reflex saving throw for half damage, a rogue takes no damage on a successful saving throw. Evasion can be used only in light armor or no armor, and not while the rogue is helpless.", 2, "d20SRD — Classes: Rogue", "https://www.d20srd.org/srd/classes/rogue.htm"),
      f("Trap Sense (Ex)", "A rogue gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps; the bonus rises by +1 every three levels after 3rd (+2 at 6th, +3 at 9th, +4 at 12th, +5 at 15th, +6 at 18th). Trap sense bonuses gained from multiple classes stack.", 3, "d20SRD — Classes: Rogue", "https://www.d20srd.org/srd/classes/rogue.htm"),
      f("Uncanny Dodge (Ex)", "A rogue retains her Dexterity bonus to AC even if she is caught flat-footed or struck by an invisible attacker (she still loses her Dexterity bonus if immobilized). If a rogue already has uncanny dodge from a different class, she automatically gains improved uncanny dodge (see below) instead.", 4, "d20SRD — Classes: Rogue", "https://www.d20srd.org/srd/classes/rogue.htm"),
      f("Improved Uncanny Dodge (Ex)", "A rogue can no longer be flanked: this defense denies another character the ability to sneak attack her by flanking her, unless the attacker has at least four more levels in a class granting sneak attack (such as rogue levels) than the rogue has. Levels from classes that grant uncanny dodge stack to determine whether it still applies; levels in classes that grant improved uncanny dodge stack for this defense.", 8, "d20SRD — Classes: Rogue", "https://www.d20srd.org/srd/classes/rogue.htm"),
      f("Special Abilities", "At 10th level, and again at 13th, 16th, and 19th level, a rogue chooses one special ability from the following list (each may be chosen only once, except that a bonus feat may be chosen in place of a special ability): Crippling Strike - a sneak attack also deals 2 points of Strength damage. Defensive Roll - once per day, when an attack would reduce her to 0 or fewer hit points, she may attempt a Reflex save (DC = the damage dealt) to take only half damage, provided she has her Dexterity bonus to AC against the attack. Improved Evasion - as evasion, but she takes only half damage on a failed Reflex save as well (still only in light armor or no armor, and not while helpless). Opportunist - once per round, she may make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. Skill Mastery - she selects a number of skills equal to 3 + her Intelligence modifier and can always take 10 on checks with them, even if stress or distractions would normally prevent it. Slippery Mind - if she fails a saving throw against an enchantment spell or effect, she can attempt the save again 1 round later at the same DC (one extra chance only).", 10, "d20SRD — Classes: Rogue", "https://www.d20srd.org/srd/classes/rogue.htm"),
    ].map((x) => x as FeatureDefinition),
  },
  cleric: {
    id: "cleric",
    name: "Cleric",
    source: "d20SRD — Classes: Cleric",
    sourceUrl: "https://www.d20srd.org/srd/classes/cleric.htm",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: buildRows(THREE_QUARTER_BAB, GOOD_SAVE, POOR_SAVE, GOOD_SAVE),
    classSkills: [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Profession",
      "Spellcraft",
    ],
    features: [
      f("Cleric Basics", "Alignment: within one step of his deity's alignment (and a cleric may not be true neutral unless his deity is also true neutral). Key abilities: Wisdom (spellcasting), Charisma (turning), and Strength and Constitution for combat. Weapon and armor proficiencies: all simple weapons, all armor (light, medium, and heavy), and shields (except tower shields). His bonus language options include Celestial, Abyssal, and Infernal, in addition to those normally allowed by his race. A cleric who grossly violates the code of conduct required by his god or who changes to a prohibited alignment loses all spells and class features (except armor and shield proficiencies and simple weapon proficiency) until he atones.", undefined, "d20SRD — Classes: Cleric", "https://www.d20srd.org/srd/classes/cleric.htm"),
      f("Aura (Ex)", "A cleric has a particularly powerful aura corresponding to his deity's alignment (see the detect evil, detect chaos, detect good, and detect law spells): the power of a cleric's aura is equal to his cleric level.", 1, "d20SRD — Classes: Cleric", "https://www.d20srd.org/srd/classes/cleric.htm"),
      f("Spells", "A cleric casts divine spells prepared ahead of time from the cleric spell list, plus one domain spell per spell level each day drawn from his chosen domains (see Deity and Domains, below). To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells at a specific time of day determined by his deity by praying and meditating for 1 hour after 8 hours of rest. A cleric may not prepare or cast a spell with an alignment descriptor (chaotic, evil, good, or lawful) that opposes his alignment or his deity's alignment.", 1, "d20SRD — Classes: Cleric", "https://www.d20srd.org/srd/classes/cleric.htm"),
      f("Deity and Domains", "A cleric chooses a deity and selects two domains from among those the deity offers. Each domain grants a granted power and a domain spell list with one spell per spell level, which he can prepare in his daily domain spell slot. Some domains also add class skills: Animal and Plant add Knowledge (nature); Knowledge adds all Knowledge skills as class skills; Travel adds Survival; Trickery adds Bluff, Disguise, and Hide. A cleric devoted to no particular deity instead selects two domains representing his spiritual inclinations and abilities, subject to the same alignment limits. A cleric of a deity with the War domain gains Martial Weapon Proficiency and Weapon Focus with his deity's favored weapon as bonus feats.", 1, "d20SRD — Classes: Cleric", "https://www.d20srd.org/srd/classes/cleric.htm"),
      f("Spontaneous Casting", "A good cleric (or a neutral cleric of a good deity) can channel stored spell energy into a cure spell of the same level - he loses a prepared spell and casts a cure spell of the same spell level instead. An evil cleric (or a neutral cleric of an evil deity) can likewise convert a prepared spell into an inflict spell of the same level. A neutral cleric of a neutral deity chooses at 1st level whether to convert spells to cure or to inflict spells, and that same choice determines whether he turns or rebukes undead (see below). A domain spell cannot be converted in this way.", 1, "d20SRD — Classes: Cleric", "https://www.d20srd.org/srd/classes/cleric.htm"),
      f("Turn or Rebuke Undead (Su)", "A good cleric turns or destroys undead; an evil cleric rebukes or commands them; a neutral cleric chooses once (the same choice as for spontaneous casting) whether he turns or rebukes. He can use this ability a number of times per day equal to 3 + his Charisma modifier. A turning check (1d20 + his Charisma modifier, read against the SRD turning table) determines the most powerful undead he can affect, and he makes a turning damage roll of 2d6 + his cleric level + his Charisma modifier for the total Hit Dice of undead affected; undead with turn resistance add it to their Hit Dice for these purposes. If he has 5 or more ranks in Knowledge (religion), he gains a +2 bonus on turning checks. He destroys turned undead of half his cleric level or fewer Hit Dice, and commands rebuked undead on the same basis, as detailed in the SRD.", 1, "d20SRD — Classes: Cleric", "https://www.d20srd.org/srd/classes/cleric.htm"),
    ].map((x) => x as FeatureDefinition),
  },
};
