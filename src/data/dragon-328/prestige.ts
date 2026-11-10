// Dragon Magazine #328 (Feb 2005) prestige classes — integrated in
// the Dragon Magazine treatment program (issue #328 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-328/
// (MANIFEST.md / SCREENING.md / reference.md).
// Five classes: the four Paragons of the Kindred (Anna Serfass,
// pp. 22-31) — patron-deity prestige classes for Garl Glittergold,
// Yondalla, Moradin, and Corellon Larethian — and the Force Missile
// Mage (Gaining Prestige, Joshua Yang, pp. 50-53). Every header,
// requirement, and table row was verified against rendered page
// images; the image governs over OCR (the Chimeric Champion's class
// skills carry NO Hide; the Mystic Keeper's Sacred Force draws only
// on the Chaos, Good, Protection, and War domains).
// ⚠️ APOC FLAG (SCREENING.md): the Paragons are patron-deity
// classes; in APOC the gods are trapped outside the crystal sphere
// and power is drawn, not granted. They integrate as printed;
// disposition is Shaun's call.
// Feature descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced.

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
const SRC_PARAGONS = "Dragon Magazine #328 — Paragons of the Kindred (Anna Serfass), pp. 22-31";
const SRC_FMM = "Dragon Magazine #328 — Gaining Prestige: Force Missile Mage (Joshua Yang), pp. 50-53";

const RAW: RawClassLike[] = [
  {
    id: "chimeric-champion-of-garl-glittergold",
    name: "Chimeric Champion of Garl Glittergold",
    ruleset: "core",
    source: SRC_PARAGONS,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    prerequisites: [
      "Race: Gnome",
      "Patron Deity: Garl Glittergold",
      "Base Will Save: +5",
      "Skills: Craft (alchemy) 3 ranks, Knowledge (arcana) 10 ranks",
      "Feats: Brew Potion, Scribe Scroll",
      "Spells: Able to cast 3rd-level or higher divine spells",
    ],
    progression: [
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
    ],
    classSkills: [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (religion)",
      "Profession",
      "Spellcraft",
    ],
    features: [
      {
        name: "Chimeric Champion of Garl Glittergold Basics",
        description:
          "Weapon and armor proficiency: chimeric champions gain no new proficiency with any weapon or armor. Spells per day: at every level, a chimeric champion gains new spells per day (and spells known, if applicable) as if she had also gained a level in a divine spellcasting class she belonged to before adding the prestige class; she gains no other benefit of that class (improved turning or rebuking, improved animal companion, and so on). With more than one divine spellcasting class, she chooses which class each chimeric champion level advances.",
        level: 1,
      },
      {
        name: "Sense Illusion (Ex)",
        description:
          "A chimeric champion is extraordinarily sensitive to illusion magic: she is entitled to an immediate Will save merely by coming within 10 feet of any illusion (figment) spell or effect that allows a saving throw, without studying or interacting with it. If she fails this save, she receives another save when studying or interacting with the figment, as normal.",
        level: 1,
      },
      {
        name: "Scribe Illusion (Su)",
        description:
          "A chimeric champion can create scrolls as if she had access to all arcane spells from the illusion school. A spell scribed this way can be of a spell level up to one level lower than the maximum divine spell level she can cast. She does not have to prepare the spell to scribe the scroll; instead, she must leave one spell slot of the appropriate level open when scribing a scroll not on her spell list, and she must still provide all normal material components or focuses. Any scroll made this way is usable by the chimeric champion as if the spell were on her spell list.",
        level: 1,
      },
      {
        name: "Brew Illusion (Su)",
        description:
          "Beginning at 3rd level, a chimeric champion can create potions as if she had access to all arcane spells from the illusion school. A potion brewed this way can be of a spell level up to one level lower than the maximum divine spell level she can cast. She does not have to prepare the spell to brew the potion; instead, she must leave one spell slot of the appropriate level open when brewing a potion not on her spell list, and she must still provide all normal material components or focuses.",
        level: 3,
      },
      {
        name: "Boon of Illusion (Sp)",
        description:
          "Starting at 5th level, the chimeric champion can cast an arcane illusion spell once per day as a spell-like ability, without using any of her existing spell slots: upon reaching 5th level she selects one 1st-level arcane illusion spell, and the choice cannot later be changed. At 7th level she selects an additional 1st-level arcane illusion spell and one 2nd-level arcane illusion spell as spell-like abilities; at 9th level she chooses an additional 2nd-level arcane illusion spell and one 3rd-level arcane illusion spell. Each of these spell-like abilities is usable once per day, is cast as if by a caster of the champion's character level, and has a save DC of 10 + the champion's class level + her Charisma modifier.",
        level: 5,
      },
      {
        name: "Imbue Illusion (Su)",
        description:
          "Beginning at 9th level, a chimeric champion can create magic items of any type for which she has the appropriate item creation feat that require arcane spells from the illusion school: she can create an item that requires a spell up to one level lower than the maximum divine spell level she can cast, provided she meets all the item's other requirements. Any item made this way that requires spell trigger activation is usable by the chimeric champion as if the spell were on her spell list.",
        level: 9,
      },
      {
        name: "Shadow Axe of Glittergold (Sp)",
        description:
          "At 10th level, the chimeric champion can summon a glowing, floating battleaxe to fight for her twice per day as a standard action; the axe remains in existence for 10 rounds once summoned. The axe acts as a Mordenkainen's sword spell, except that it takes the shape of a battleaxe composed of pure force: its attack bonus equals the champion's caster level plus her Wisdom modifier, with the +3 enhancement bonus described in the Mordenkainen's sword spell, and it deals 4d6+3 points of force damage with a threat range of 20 and a critical multiplier of x3. The shadow axe is a shadow effect rather than a true force effect: a creature struck by the battleaxe can make a Will save (DC 10 + the champion's class level + her Wisdom modifier) to disbelieve the effect, and a successful save means the target takes only half damage from the axe's attack.",
        level: 10,
      },
    ],
  },
  {
    id: "itinerant-warder-of-yondalla",
    name: "Itinerant Warder of Yondalla",
    ruleset: "core",
    source: SRC_PARAGONS,
    sourceUrl: SRC_URL,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    prerequisites: [
      "Race: Halfling",
      "Patron Deity: Yondalla",
      "Base Will Save: +5",
      "Skills: Diplomacy 10 ranks, Tumble 4 ranks",
      "Feats: Dodge, Mobility",
      "Spells: Able to cast divine spells",
    ],
    progression: [
      { level: 1, bab: 0, fort: 0, ref: 2, will: 2 },
      { level: 2, bab: 1, fort: 0, ref: 3, will: 3 },
      { level: 3, bab: 2, fort: 1, ref: 3, will: 3 },
      { level: 4, bab: 3, fort: 1, ref: 4, will: 4 },
      { level: 5, bab: 3, fort: 1, ref: 4, will: 4 },
      { level: 6, bab: 4, fort: 2, ref: 5, will: 5 },
      { level: 7, bab: 5, fort: 2, ref: 5, will: 5 },
      { level: 8, bab: 6, fort: 2, ref: 6, will: 6 },
      { level: 9, bab: 6, fort: 3, ref: 6, will: 6 },
      { level: 10, bab: 7, fort: 3, ref: 7, will: 7 },
    ],
    classSkills: [
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Hide",
      "Knowledge (local)",
      "Knowledge (religion)",
      "Listen",
      "Move Silently",
      "Perform",
      "Profession",
      "Sense Motive",
      "Spellcraft",
      "Spot",
      "Tumble",
    ],
    features: [
      {
        name: "Itinerant Warder of Yondalla Basics",
        description:
          "Weapon and armor proficiency: itinerant warders gain no new proficiency with any weapon or armor. Spells per day: at 2nd level, and every even level thereafter, an itinerant warder gains new spells per day as if she had also gained a level in a divine spellcasting class she belonged to before adding the prestige class; she gains no other benefit of that class (improved turning or rebuking, improved animal companions, and so on). She adds half her itinerant warder level to the level of her divine spellcasting class to determine spells per day and caster level; with more than one divine spellcasting class, she chooses which class each even-numbered level advances.",
        level: 1,
      },
      {
        name: "Comforts of Home (Su)",
        description:
          "An itinerant warder can sense the location of the nearest nourishment consisting of berries, fruit, mushrooms, and small game animals within 1 mile. In the wilderness, she knows in which direction food or water lies and whether it is safe to eat or drink; in towns and cities, she can find safe taverns that have good food. Using either of these abilities takes 10 minutes. In addition, she can automatically sense if food or drink within 10 feet is dangerous, although she does not learn specifically why the food is dangerous: she must be able to see and smell the food for this ability to work (for example, she can tell that a stew would be harmful if eaten, but cannot say whether the meat is rotten or the food has been poisoned).",
        level: 1,
      },
      {
        name: "Evasion (Ex)",
        description:
          "If an itinerant warder makes a successful Reflex save against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can only be used if the itinerant warder is wearing light armor or no armor; a helpless itinerant warder does not gain the benefits of evasion.",
        level: 1,
      },
      {
        name: "Uncanny Dodge (Ex)",
        description:
          "At 2nd level, an itinerant warder gains the ability to react to danger before her senses would normally allow her to do so: she retains her Dexterity bonus to AC (if any) even if she is caught flat-footed or struck by an invisible attacker, although she still loses her Dexterity bonus to AC if immobilized. If the itinerant warder already has uncanny dodge from a different class, she automatically gains improved uncanny dodge instead.",
        level: 2,
      },
      {
        name: "Cast the First Stone (Ex)",
        description:
          "Beginning at 3rd level, an itinerant warder gains further ability to react to danger before her senses would normally allow it: any time she is able to act in the surprise round, she gains a +4 bonus on her initiative roll.",
        level: 3,
      },
      {
        name: "Luck of the Draw (Ex)",
        description:
          "At 4th level, an itinerant warder gains the ability to affect her own and others' luck: once per day, as a free action, the itinerant warder or one of her allies may reroll one roll that character just made, before the DM declares whether the roll results in success or failure. The character must take the result of the second roll, even if it is worse than the original. The itinerant warder chooses when this ability is used and may choose to do so even when it is not her turn.",
        level: 4,
      },
      {
        name: "Stand Firm (Ex)",
        description:
          "Beginning at 5th level, an itinerant warder has gained such a self-confident, do-or-die attitude that she inspires her allies: all allies within 20 feet gain a +2 morale bonus on saving throws against fear effects.",
        level: 5,
      },
      {
        name: "Opportunity Knocks (Ex)",
        description:
          "At 6th level, an itinerant warder gains the ability to react to openings in combat: once per round she can make a ranged attack against an opponent that has just been struck for damage in melee by another character. This attack counts as an attack of opportunity for that round, and she cannot use this ability more than once per round, even if she has the Combat Reflexes feat.",
        level: 6,
      },
      {
        name: "Party Dynamics (Ex)",
        description:
          "By 7th level, an itinerant warder has gained such familiarity with her party that she has a preternatural sense for her allies' movements: she counts as flanking when both she and an ally are threatening the same creature, no matter their position. She cannot focus on the actions of more than one ally at a time and can only flank one creature using this ability. The itinerant warder must have fought with an ally in at least ten battles to use this ability with that character.",
        level: 7,
      },
      {
        name: "Inconspicuous Aura (Su)",
        description:
          "At 8th level, an itinerant warder can make herself look so small and helpless that her opponents ignore her in favor of other targets: this ability functions exactly like the sanctuary spell cast by a spellcaster of the itinerant warder's class level, with a Will save DC of 10 + 1/2 the itinerant warder's class level + her Charisma bonus. The itinerant warder can use this ability three times per day as a free action.",
        level: 8,
      },
      {
        name: "Defensive Roll (Ex)",
        description:
          "Beginning at 9th level, an itinerant warder can roll with a potentially lethal blow to take less damage from it than she otherwise would. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), she can attempt to roll with the damage: she must make a Reflex save (DC equal to the damage dealt), and if the save succeeds she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll — if she is denied her Dexterity bonus to AC, she cannot use this ability.",
        level: 9,
      },
      {
        name: "Spell Throwing (Su)",
        description:
          "At 10th level, an itinerant warder takes the halfling mastery of throwing weapons to an extreme: she gains the ability to 'throw' any spell with a range of touch, using touch spells on targets up to 30 feet away. If the spell requires a melee touch attack, the itinerant warder must make a ranged touch attack instead. Failing the touch attack does not mean the itinerant warder still holds the spell's charge; the spell is considered spent whether or not the ranged touch attack succeeds.",
        level: 10,
      },
    ],
  },
  {
    id: "justice-hammer-of-moradin",
    name: "Justice Hammer of Moradin",
    ruleset: "core",
    source: SRC_PARAGONS,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    prerequisites: [
      "Race: Dwarf",
      "Patron Deity: Moradin",
      "Base Attack Bonus: +5",
      "Skills: Concentration 5 ranks, Knowledge (local) 3 ranks",
      "Feats: Iron Will, Power Attack",
      "Spells: Able to cast divine spells",
    ],
    progression: [
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
    ],
    classSkills: [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (religion)",
      "Profession",
      "Spellcraft",
    ],
    features: [
      {
        name: "Justice Hammer of Moradin Basics",
        description:
          "Spells per day: at every even-numbered level (2nd, 4th, 6th, 8th, and 10th), a justice hammer gains new spells per day as if he had also gained a level in a divine spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class. He adds half his justice hammer level to the level of his divine spellcasting class to determine spells per day and caster level; with more than one divine spellcasting class, he chooses which class each even-numbered level advances. Deputized justice hammers recite all the laws of their kindred in an oath-swearing ceremony and are given the great book of Moradin's law as a badge of office.",
        level: 1,
      },
      {
        name: "Mark of War (Ex)",
        description:
          "A justice hammer gains access to the War domain: he gains the granted power associated with the domain and can choose the listed spells as domain spells.",
        level: 1,
      },
      {
        name: "Runic Hammer (Su)",
        description:
          "Whenever a justice hammer wields a warhammer, it becomes charged with divine power and the weapon glows with a holy rune of fire: whenever he strikes with it, the weapon deals an extra 1d4 points of fire damage in addition to any other magic bonuses the weapon might have. At 5th level this bonus damage increases to 1d6 points, and at 8th level it increases to 1d8 points. This ability functions only while the justice hammer is wielding a warhammer and does not function on a warhammer with the flaming or flaming burst abilities.",
        level: 1,
      },
      {
        name: "Disdain Magic (Ex)",
        description:
          "Beginning at 3rd level, a justice hammer may reroll one saving throw that he just made against a spell or spell-like effect, before the DM declares whether the roll results in success or failure; the justice hammer must take the result of the second roll, even if it is worse than the original. This ability can be used once per day at 3rd level and twice per day at 7th level and beyond.",
        level: 3,
      },
      {
        name: "Metal Fatigue (Su)",
        description:
          "At 5th level, a justice hammer gains the ability to detect weaknesses in stone and metal objects: whenever the justice hammer attacks a metal or stone object or makes a sunder attempt against a metal or stone weapon, he treats the hardness of the object or weapon he is attempting to break as one-half normal. Only the justice hammer gains the benefit of this ability; other creatures that attempt to break or sunder the same object in the same round treat the object as having normal hardness. This ability works against both magic and nonmagic items; against magic items, apply any enhancement bonus to the item's hardness after halving its base hardness.",
        level: 5,
      },
      {
        name: "Discern Lies (Sp)",
        description:
          "Beginning at 7th level, a justice hammer can sense lies at will as the discern lies spell cast by a spellcaster of the justice hammer's class level. Targets of this ability receive a Will save (DC 10 + the justice hammer's class level + the justice hammer's Charisma modifier).",
        level: 7,
      },
      {
        name: "Matter of Justice (Su)",
        description:
          "At 9th level, a justice hammer can, as a standard action, project an aura of implacable justice that unsettles his enemies: all opponents within 20 feet of the justice hammer must make a Will save (DC 10 + the justice hammer's class level + the justice hammer's Charisma modifier) or be shaken for 2d4 rounds. Those who succeed are immune to the justice hammer's matter of justice effect for 1 day. Matter of justice is a mind-affecting fear effect and is usable twice per day.",
        level: 9,
      },
      {
        name: "Soul Rune (Sp)",
        description:
          "At 10th level, a justice hammer can inscribe a rune of justice in the air once per day as a standard action. The rune appears as a tracery of fire in front of the justice hammer, which flies with great accuracy toward its target; the justice hammer must succeed at a ranged touch attack to hit his target, and this attack ignores cover. If the touch attack is successful, the soul rune deals 10d6 points of damage and paralyzes the opponent for 1d4 rounds (no saving throw). Creatures immune to paralysis still take the damage. The soul rune has a range of 100 feet + 10 feet per character level.",
        level: 10,
      },
    ],
  },
  {
    id: "mystic-keeper-of-corellon-larethian",
    name: "Mystic Keeper of Corellon Larethian",
    ruleset: "core",
    source: SRC_PARAGONS,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    prerequisites: [
      "Race: Elf or half-elf",
      "Patron Deity: Corellon Larethian",
      "Base Attack Bonus: +5",
      "Skills: Concentration 10 ranks, Perform (dance) 2 ranks",
      "Feats: Still Spell, Weapon Finesse",
      "Spells: Able to cast divine spells",
    ],
    progression: [
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
    ],
    classSkills: [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (religion)",
      "Perform",
      "Profession",
      "Spellcraft",
    ],
    features: [
      {
        name: "Mystic Keeper of Corellon Larethian Basics",
        description:
          "Spells per day: at every even-numbered level (2nd, 4th, 6th, 8th, and 10th), a mystic keeper gains new spells per day as if he had also gained a level in a divine spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class (improved turning or rebuking, improved animal companions, and so on). He adds half his mystic keeper level to the level of his divine spellcasting class to determine spells per day and caster level; with more than one divine spellcasting class, he chooses which class each even-numbered level advances.",
        level: 1,
      },
      {
        name: "Sacred Arcana",
        description:
          "Upon adopting the mystic keeper class, the character gains access to the Magic domain: the mystic keeper gains the granted power associated with the domain and can choose spells in that domain as his daily domain spells. A character with the Magic domain can use spell completion and spell trigger items as a wizard of one-half his divine caster level.",
        level: 1,
      },
      {
        name: "Intuition (Ex)",
        description:
          "While wielding a longsword, a mystic keeper gains preternatural defensive skills in combat: at 2nd level he gains a +1 dodge bonus to Armor Class, which increases to +2 at 6th level and to +3 at 10th level. The mystic keeper loses this dodge bonus when fighting in heavy armor, and a condition that causes him to lose his Dexterity bonus to Armor Class also makes him lose this dodge bonus.",
        level: 2,
      },
      {
        name: "Divine Instrument (Su)",
        description:
          "Beginning at 3rd level, a mystic keeper can imbue his longsword with any prepared spell of 1st level or lower that specifies a target other than 'you'; when the mystic keeper reaches 7th level, the imbued spell can be 3rd level or lower. The spell must be cast normally, which provokes an attack of opportunity. Imbuing a weapon requires the expenditure of the spell's normal material components or XP costs, and the longsword must be in hand to be imbued. A weapon imbued with a spell can hold the charge for up to 1 hour, after which time it dissipates harmlessly. Any time the mystic keeper deals damage with the imbued weapon, he can immediately expend the spell on the struck creature as a free action (an exception to the general rule that casting a spell from an item takes at least as long as casting the spell normally). The target receives a saving throw and benefits from spell resistance normally (if applicable), and the spell affects only the creature struck, even if it could target multiple creatures. If the attack misses, the spell cannot be discharged. A sword cannot hold more than one spell at a time in this manner, and this ability cannot be used on a sword with the spell storing ability. This ability can be used a number of times per day equal to one-half the mystic keeper's class level.",
        level: 3,
      },
      {
        name: "Protective Ward (Su)",
        description:
          "At 4th level, a mystic keeper can generate a protective ward for 1 hour, as the granted power of the Protection domain, adding his divine spellcaster levels to his mystic keeper level to determine the resistance bonus. If the mystic keeper already has this granted power, he adds his mystic keeper levels as stated above and can use this ability one extra time per day. At 8th level, a mystic keeper can use this ability an additional two times per day (three times per day in total).",
        level: 4,
      },
      {
        name: "Sacred Force",
        description:
          "At 5th level, a mystic keeper chooses one divine spell of 4th level or lower from one of Corellon Larethian's domains (Chaos, Good, Protection, and War). This becomes a spell-like ability that he can use once per day in addition to his normal spells. The mystic keeper does not use any components when casting the spell, although a spell that costs XP still does so, and a spell with a costly material component instead costs him 5 times that amount in XP. This spell cannot be changed once chosen.",
        level: 5,
      },
      {
        name: "Spell Reflection (Su)",
        description:
          "At 9th level, a mystic keeper can reflect spells with his deity's favored weapon: once per day as a standard action, when the mystic keeper is wielding a longsword, he can reflect a spell back at the caster. This works much the same as spell turning, but the mystic keeper can reflect only one spell, regardless of its level. The mystic keeper must choose the spell to be reflected before the spell's effect is resolved and before he makes a saving throw against the spell, should one be required. If he attempts to reflect a spell that cannot be reflected (an effect or area spell, or one with a range of touch), the attempt is ignored. If the spell is reflected back at a caster who also has a spell turning effect, the spell once again rebounds to the mystic keeper, who is then affected by the spell normally.",
        level: 9,
      },
    ],
  },
  {
    id: "force-missile-mage",
    name: "Force Missile Mage",
    ruleset: "core",
    source: SRC_FMM,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    prerequisites: [
      "Skills: Concentration 9 ranks, Spellcraft 9 ranks",
      "Feat: Combat Casting",
      "Spells: Ability to cast magic missile once per day",
    ],
    progression: [
      { level: 1, bab: 0, fort: 0, ref: 0, will: 2 },
      { level: 2, bab: 1, fort: 0, ref: 0, will: 3 },
      { level: 3, bab: 1, fort: 1, ref: 1, will: 3 },
      { level: 4, bab: 2, fort: 1, ref: 1, will: 4 },
      { level: 5, bab: 2, fort: 1, ref: 1, will: 4 },
    ],
    classSkills: [
      "Concentration",
      "Craft",
      "Knowledge (arcana)",
      "Profession",
      "Spellcraft",
      "Spot",
    ],
    features: [
      {
        name: "Force Missile Mage Basics",
        description:
          "Weapon and armor proficiency: force missile mages gain no new weapon or armor proficiencies. Spells per day/spells known: at each level after 1st, the force missile mage gains new spells per day (and spells known, if applicable) as if she had also gained a level in a spellcasting class she belonged to before she added the prestige class; she gains no other benefit of that class. With levels in more than one spellcasting class, she chooses which class each force missile mage level advances.",
        level: 1,
      },
      {
        name: "Bonus Missile",
        description:
          "At 1st level, a force missile mage gains increased mastery over her spell of choice: every time she casts magic missile, an additional missile is created, even if this extra missile exceeds the normal maximum of five missiles that the spell normally allows. At 5th level, the force missile mage benefits from an additional bonus missile, so that a high-level force missile mage can create up to seven missiles with a single casting of magic missile.",
        level: 1,
      },
      {
        name: "Still Missile (Ex)",
        description:
          "All of the force missile mage's magic missile spells do not have a somatic component: she casts magic missile as if using the Still Spell feat, but without an increase in spell level.",
        level: 1,
      },
      {
        name: "Energy Missile (Ex)",
        description:
          "Starting at 2nd level, a force missile mage may add either the acid, cold, electricity, or fire descriptor to any magic missile she casts. The type of energy added to the spell is chosen at the time of casting, and she can choose a different type of energy each time she casts magic missile; the altered descriptor affects all missiles created by a single casting of magic missile. Although still a force spell, any magic missile altered in this way deals additional damage against vulnerable creatures and less damage against creatures with related resistances and immunities.",
        level: 2,
      },
      {
        name: "Swift Shield (Sp)",
        description:
          "A 2nd-level force missile mage can cast shield once per day as an immediate action. This spell is cast in addition to the force missile mage's usual number of spells per day and at the force missile mage's highest caster level. (Immediate actions — a swift measure taken outside the normal turn order — are introduced in this issue; see reference.md.)",
        level: 2,
      },
      {
        name: "Overpowering Missile",
        description:
          "At 3rd level, the force missile mage's magic missile spells become especially potent, breaking through spell resistance more readily than normal: she gains a +2 bonus on caster level checks to overcome a creature's spell resistance with the spell magic missile, applying only to magic missile spells she casts. In addition, a force missile mage's magic missiles penetrate shield spells and brooches of shielding as if they didn't offer protection from the spell.",
        level: 3,
      },
      {
        name: "Reflective Shield (Sp)",
        description:
          "At 4th level, a force missile mage becomes immune to the spell magic missile: for the purposes of being affected by magic missile, she is constantly treated as being under the effect of the spell spell turning, thus reflecting offensive magic missiles back at their caster. If that caster is protected by the shield spell or a brooch of shielding, these reflected magic missiles are negated. Missiles reflected back against a caster who also has spell turning in effect require the force missile mage to roll on the spell turning mishap chart (Player's Handbook, page 283).",
        level: 4,
      },
    ],
  },
];

export const DRAGON_328_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
