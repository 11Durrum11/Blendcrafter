/**
 * Core SRD prestige classes. Prerequisites are free text (shown in the UI and
 * soft-checked only), matching how the recovered step-classes component
 * consumes them. Progression rows follow each class's SRD table, capped at
 * the class's maximum level.
 * Source: https://www.d20srd.org/srd/prestigeClasses/prestigeClasses.htm
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const U = "https://www.d20srd.org/srd/prestigeClasses/";

export const CORE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "arcane-trickster",
    name: "Arcane Trickster",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Arcane Trickster",
    sourceUrl: `${U}arcaneTrickster.htm`,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF, P, G, G),
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Gather Information", "Hide", "Jump", "Knowledge (all)", "Listen", "Move Silently", "Open Lock", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Speak Language", "Spellcraft", "Spot", "Swim", "Tumble", "Use Rope"],
    prerequisites: ["Alignment: Any nonlawful", "Skills: Decipher Script 7 ranks, Disable Device 7 ranks, Escape Artist 7 ranks, Knowledge (arcana) 4 ranks", "Spells: Ability to cast mage hand and at least one arcane spell of 3rd level or higher", "Special: Sneak attack +2d6"],
    features: [
      {
        key: "arcane-trickster-features",
        name: "Arcane Trickster Features",
        category: "trait",
        description:
          "Gains no new weapon or armor proficiencies. Advances one existing spellcasting class (+1 level for spells per day, and spells known where applicable) at every level. Ranged legerdemain (1st): perform Disable Device, Open Lock, or Sleight of Hand at a range of 30 feet, with the check DC increased by 5 and no taking 10, on an object of 5 pounds or less — 1/day, 2/day at 5th, 3/day at 9th. Sneak attack +1d6 at 2nd and every even level thereafter (to +5d6 at 10th), stacking with sneak attack from other sources. Impromptu sneak attack (3rd): once per day, declare one attack a sneak attack regardless of flanking or the target's Dexterity (a ranged use must be within 30 feet); 2/day at 7th.",
        source: "d20SRD — Prestige Classes: Arcane Trickster",
        sourceUrl: `${U}arcaneTrickster.htm`,
      },
    ],
  },
  {
    id: "archmage",
    name: "Archmage",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Archmage",
    sourceUrl: `${U}archmage.htm`,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF.slice(0, 5), P.slice(0, 5), P.slice(0, 5), G.slice(0, 5)),
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Profession", "Search", "Spellcraft"],
    prerequisites: ["Skills: Knowledge (arcana) 15 ranks, Spellcraft 15 ranks", "Feats: Skill Focus (Spellcraft), Spell Focus in two schools", "Spells: Ability to cast 7th-level arcane spells, knowledge of 5th-level or higher spells from at least five schools"],
    features: [
      {
        key: "archmage-features",
        name: "Archmage Features",
        category: "trait",
        description:
          "Gains no new weapon or armor proficiencies. Advances one existing arcane spellcasting class (+1 level for spells per day and spells known) at every level. At each level she instead gains one high arcana of her choice, permanently giving up one spell slot of at least the listed level (never a slot above the highest-level spell she can cast): arcane fire (9th-level slot) — expend a spell to fire a bolt of raw energy, a ranged touch attack at long range dealing 1d6 damage per archmage level plus 1d6 per level of the expended spell; arcane reach (7th) — deliver touch spells at 30 feet as ranged touch attacks, or 60 feet if chosen twice; mastery of counterspelling (7th) — her counterspells turn back on the caster as if by spell turning; mastery of elements (8th) — when casting, swap a spell's acid, cold, fire, electricity, or sonic descriptor for another of those energy types; mastery of shaping (6th) — carve 5-foot cubes out of burst, cone, cylinder, emanation, or spread spells, and shapeable spells gain a 5-foot minimum dimension; spell power (5th) — +1 effective caster level for level-dependent spell variables and caster level checks; spell-like ability (5th) — one known spell becomes a spell-like ability usable 2/day, more often if bought with a slot three or six levels higher.",
        source: "d20SRD — Prestige Classes: Archmage",
        sourceUrl: `${U}archmage.htm`,
      },
    ],
  },
  {
    id: "assassin",
    name: "Assassin",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Assassin",
    sourceUrl: `${U}assassin.htm`,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Open Lock", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Swim", "Tumble", "Use Rope"],
    prerequisites: ["Alignment: Any evil", "Skills: Disguise 4 ranks, Hide 8 ranks, Move Silently 8 ranks", "Special: The character must kill someone for no other reason than to join the assassins"],
    features: [
      {
        key: "assassin-features",
        name: "Assassin Features",
        category: "trait",
        description:
          "Proficient with crossbows (hand, light, and heavy), daggers, darts, rapiers, saps, shortbows, and short swords, and with light armor but not shields. Casts his own arcane spells from 1st level, Intelligence-based and cast as a bard does, with spells per day and spells known per the class tables (1st- through 4th-level spells from the assassin spell list); at 6th, 8th, and 10th level he may swap one known spell for another of the same level. Sneak attack +1d6 at 1st and every odd level thereafter (to +5d6 at 9th), stacking with sneak attack from other sources. Death attack (1st): after studying a victim for 3 rounds, a melee sneak attack that deals damage can kill the victim outright or paralyze her for 1d6 rounds plus 1 per class level (his choice) unless she makes a Fortitude save (DC 10 + class level + Int modifier); the attack must come within 3 rounds of finishing the study. Poison use (1st): never risks accidentally poisoning himself when applying poison to a blade. Save bonus against poison +1 at 2nd level, rising by +1 every two levels (to +5 at 10th). Uncanny dodge (2nd) and improved uncanny dodge (5th). Hide in plain sight (8th): use the Hide skill even while being observed, as long as he is within 10 feet of some shadow other than his own.",
        source: "d20SRD — Prestige Classes: Assassin",
        sourceUrl: `${U}assassin.htm`,
      },
    ],
  },
  {
    id: "dragon-disciple",
    name: "Dragon Disciple",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Dragon Disciple",
    sourceUrl: `${U}dragonDisciple.htm`,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Escape Artist", "Gather Information", "Knowledge (all)", "Listen", "Profession", "Search", "Speak Language", "Spellcraft", "Spot"],
    prerequisites: ["Race: Any nondragon", "Skills: Knowledge (arcana) 8 ranks", "Languages: Draconic", "Spells: Ability to cast arcane spells without preparation", "Special: The player chooses a dragon variety for the disciple"],
    features: [
      {
        key: "dragon-disciple-features",
        name: "Dragon Disciple Features",
        category: "trait",
        description:
          "Gains no new weapon or armor proficiencies. Bonus spells: one extra spell per day, as if from a high ability score, at 1st, 2nd, 4th, 5th, 6th, 8th, and 9th level, each assignable to any spell level he can already cast (decided when gained, then fixed). Natural armor increase +1 at 1st, +2 at 4th, and +3 at 7th (totals, improving any natural armor he already has). Claws and bite (2nd): natural attacks if he lacks them (Medium: bite 1d6, claws 1d4; sized by the disciple), the bite at his full base attack bonus and the claws at -5 (-2 with Multiattack). Ability boosts, gained as if through level advancement: Strength +2 (2nd), Strength +2 (4th), Constitution +2 (6th), Intelligence +2 (8th). Breath weapon (3rd) of his chosen dragon variety's energy type and shape (line or cone), usable 1/day: 2d8 damage, 4d8 at 7th, and 6d8 at 10th, save DC 10 + class level + Con modifier. Blindsense 30 feet (5th), increasing to 60 feet (10th). Wings (9th): fly at his land speed with average maneuverability. Dragon apotheosis (10th): he takes on the half-dragon template — a further +4 Strength and +2 Charisma, natural armor +4 total, low-light vision, darkvision 60 feet, immunity to sleep and paralysis effects, and immunity to his breath weapon's energy type.",
        source: "d20SRD — Prestige Classes: Dragon Disciple",
        sourceUrl: `${U}dragonDisciple.htm`,
      },
    ],
  },
  {
    id: "eldritch-knight",
    name: "Eldritch Knight",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Eldritch Knight",
    sourceUrl: `${U}eldritchKnight.htm`,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Jump", "Knowledge (arcana)", "Knowledge (nobility and royalty)", "Profession", "Ride", "Sense Motive", "Spellcraft", "Swim"],
    prerequisites: ["Weapon Proficiency: Must be proficient with all martial weapons", "Spells: Able to cast 3rd-level arcane spells"],
    features: [
      {
        key: "eldritch-knight-features",
        name: "Eldritch Knight Features",
        category: "trait",
        description:
          "Gains no new weapon or armor proficiencies. Bonus feat (1st): one feat from the fighter bonus feat list, for which she must meet all prerequisites (feats that require fighter levels, such as Weapon Specialization, still count only her actual fighter levels). Advances one existing arcane spellcasting class (+1 level for spells per day and caster level) at every level except 1st (2nd through 10th).",
        source: "d20SRD — Prestige Classes: Eldritch Knight",
        sourceUrl: `${U}eldritchKnight.htm`,
      },
    ],
  },
  {
    id: "loremaster",
    name: "Loremaster",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Loremaster",
    sourceUrl: `${U}loremaster.htm`,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Appraise", "Concentration", "Craft", "Decipher Script", "Gather Information", "Handle Animal", "Heal", "Knowledge (all)", "Perform", "Profession", "Speak Language", "Spellcraft", "Use Magic Device"],
    prerequisites: ["Skills: Knowledge (any two) 10 ranks each", "Feats: Any three metamagic or item creation feats, plus Skill Focus (Knowledge)", "Spells: Able to cast seven different divination spells, one of which must be 3rd level or higher"],
    features: [
      {
        key: "loremaster-features",
        name: "Loremaster Features",
        category: "trait",
        description:
          "Gains no new weapon or armor proficiencies. Advances one existing spellcasting class (+1 level for spells per day, spells known, and caster level) at every level. Secret (1st, and again at 3rd, 5th, 7th, and 9th): choose one secret from the loremaster secrets table, with the highest secret she can pick set by her loremaster level plus her Intelligence modifier, and never the same secret twice — options include instant mastery (4 ranks in a skill she has no ranks in), secret health (+3 hit points), secrets granting +2 on Will, Fortitude, or Reflex saves, weapon trick (+1 on attack rolls), dodge trick (+1 dodge bonus to AC), applicable knowledge (any one feat), and one bonus 1st- or 2nd-level spell slot. Lore (2nd): a bardic knowledge-style check (loremaster level + Int modifier) to know legends and information about topics. Bonus language at 4th and 8th level (any language of her choice). Greater lore (6th): identify the properties of magic items, as the identify spell. True lore (10th): once per day, gain the effect of a legend lore or analyze dweomer spell.",
        source: "d20SRD — Prestige Classes: Loremaster",
        sourceUrl: `${U}loremaster.htm`,
      },
    ],
  },
  {
    id: "mystic-theurge",
    name: "Mystic Theurge",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Mystic Theurge",
    sourceUrl: `${U}mysticTheurge.htm`,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (arcana)", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: ["Skills: Knowledge (arcana) 6 ranks, Knowledge (religion) 6 ranks", "Spells: Able to cast 2nd-level divine spells and 2nd-level arcane spells"],
    features: [
      {
        key: "mystic-theurge-features",
        name: "Mystic Theurge Features",
        category: "trait",
        description:
          "Gains no new weapon or armor proficiencies and no other class features: at every level he advances both one existing arcane spellcasting class and one existing divine spellcasting class, +1 level each for spells per day and caster level (chosen when the level is gained if he has more than one class of either kind).",
        source: "d20SRD — Prestige Classes: Mystic Theurge",
        sourceUrl: `${U}mysticTheurge.htm`,
      },
    ],
  },
  {
    id: "shadowdancer",
    name: "Shadowdancer",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Shadowdancer",
    sourceUrl: `${U}shadowdancer.htm`,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Balance", "Bluff", "Decipher Script", "Diplomacy", "Disguise", "Escape Artist", "Hide", "Jump", "Listen", "Move Silently", "Perform", "Profession", "Search", "Sleight of Hand", "Spot", "Tumble", "Use Rope"],
    prerequisites: ["Skills: Hide 10 ranks, Move Silently 8 ranks, Perform (dance) 5 ranks", "Feats: Combat Reflexes, Dodge, Mobility"],
    features: [
      {
        key: "shadowdancer-features",
        name: "Shadowdancer Features",
        category: "trait",
        description:
          "Proficient with the club, crossbows (hand, light, and heavy), dagger, dart, mace, morningstar, quarterstaff, rapier, sap, shortbow, and short sword, and with light armor but not shields. Hide in plain sight (Su, 1st): use the Hide skill even while being observed, as long as she is within 10 feet of some shadow other than her own. At 2nd level: evasion (Ex, in light armor or none), darkvision (Su, as the spell, permanently), and uncanny dodge (Ex); improved uncanny dodge (Ex) follows at 5th. Shadow illusion (Sp, 3rd): silent image once per day. Summon shadow (Su, 3rd): call an undead shadow companion whose alignment matches hers; it cannot create spawn and cannot be turned, rebuked, or commanded by anyone else, and it gains +2 Hit Dice at 6th and 9th level. If the shadow is destroyed or dismissed she must make a DC 15 Fortitude save or lose 200 XP per class level (100 XP on a success), and a lost shadow cannot be replaced for 30 days. Shadow jump (Su): travel between shadows as if by dimension door, up to 20 feet per day at 4th level, doubling every two levels (40 feet at 6th, 80 feet at 8th, 160 feet at 10th), split among jumps in 10-foot increments. Defensive roll (Ex, 5th): once per day, when damage would reduce her to 0 hit points or less, a Reflex save (DC equal to the damage dealt) halves the damage. Slippery mind (Ex, 7th): one round after failing a saving throw against an enchantment, she may retry the save once. Improved evasion (Ex, 10th): no damage on a successful Reflex save against attacks that allow one for half damage, and only half damage even on a failed save.",
        source: "d20SRD — Prestige Classes: Shadowdancer",
        sourceUrl: `${U}shadowdancer.htm`,
      },
    ],
  },
  {
    // Missing-content batch 2026-11-02: the Red Wizard is printed
    // only in the DMG (pp. 193–194) — a Forgotten Realms class that
    // is not part of the SRD, which is why the SRD-derived core pack
    // never had it. Table 6–15 read from the printed page.
    id: "red-wizard",
    name: "Red Wizard",
    ruleset: "core",
    source: "Dungeon Master's Guide — Prestige Classes: Red Wizard (pp. 193–194)",
    sourceUrl: "/A POC PC related/4.Core books/3.5 Dungeon Master's Guide.pdf",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Intimidate", "Knowledge (all)", "Profession", "Spellcraft"],
    prerequisites: ["Race: Human from Thay", "Alignment: Any nongood", "Skills: Spellcraft 8 ranks", "Feats: Tattoo Focus, plus a total of three metamagic feats or item creation feats", "Spells: Able to cast 3rd-level arcane spells"],
    features: [
      {
        key: "red-wizard-features",
        name: "Red Wizard Features",
        category: "trait",
        description:
          "Gains no new weapon or armor proficiencies. Spells per day: at every level he gains +1 level of an existing arcane spellcasting class for spells per day and spells known. Enhanced specialization (1st): on taking this class he must choose an additional prohibited school of magic beyond his specialist's normal prohibited schools, and he can never learn spells of the new prohibited school again. Specialist defense (1st): a bonus on saving throws against spells from his specialist school — +1 at 1st level, +2 at 3rd, +3 at 7th, and +4 at 9th. Spell power (2nd): with spells of his specialist school his effective caster level rises for determining level-dependent variables and for caster level checks — +1 at 2nd level, +2 at 4th, +3 at 6th, +4 at 8th, and +5 at 10th; this stacks with spell power from any other source. Bonus feat (5th): an item creation feat, a metamagic feat, or Spell Mastery. Circle leader (5th): he can lead a Red Wizard circle — participants must have the Tattoo Focus feat, up to five participants (all within 10 feet of the leader) join him in 1 hour of concentration, each expending one prepared spell; the total levels of the expended spells are the circle's bonus levels, which he can spend to raise his caster level by +1 per level (to a maximum caster level of 40th) or to apply Empower Spell, Maximize Spell, or Heighten Spell effects to his own prepared spells at a cost in bonus levels equal to the levels the feat would add; the benefits last 24 hours or until expended. Scribe tattoo (7th): he can bestow the Tattoo Focus feat on willing, qualified novices. Great circle leader (10th): his circle can include up to nine participants instead of five.",
        source: "Dungeon Master's Guide — Prestige Classes: Red Wizard (pp. 193–194)",
        sourceUrl: "/A POC PC related/4.Core books/3.5 Dungeon Master's Guide.pdf",
      },
    ],
  },
];
