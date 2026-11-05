import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Planar Handbook (WotC, D&D 3.5) Chapter 3 prestige
// classes, transcribed in full — progression tables
// included — from Shaun's own copy, 2026-11-05: Defiant
// (Athar, pp. 44-46), Doomlord (Doomguard, pp. 47-49),
// Fatemaker (the Fated, pp. 50-52), Visionary Seeker
// (Mind's Eye, pp. 53-54), Ardent Dilettante (Sensates,
// pp. 55-57), Cipher Adept (Transcendent Order,
// pp. 58-60), Chaotician (Xaositects, pp. 61-63; a
// 5-level class), Astral Dancer (pp. 63-64), and
// Elemental Warrior (pp. 65-66; a 5-level class).
// NOTE: the chapter's ninth class (Table 3–9) is the
// elemental warrior — no "planar champion" appears in
// this chapter (that class is from Manual of the
// Planes). 3.5-native: no conversion. Every progression
// table was verified visually against the printed page
// (the pdftotext layer scrambles the table columns).
// Spell-list data for the one class with its own list
// (Fatemaker) is folded into the Spellcasting feature,
// following the Five Fingers Malefactor precedent.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced. The ardent
// dilettante's class-skill entry is the book's "all
// skills are class skills," filed here as the full
// Player's Handbook skill list.

const PH = "Planar Handbook";
const PH_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Planes/Planar Handbook.pdf";
const DEF = `${PH} — Defiant`;
const DOOM = `${PH} — Doomlord`;
const FATE = `${PH} — Fatemaker`;
const VS = `${PH} — Visionary Seeker`;
const AD = `${PH} — Ardent Dilettante`;
const CIPHER = `${PH} — Cipher Adept`;
const CHAOS = `${PH} — Chaotician`;
const ASTRAL = `${PH} — Astral Dancer`;
const ELEM = `${PH} — Elemental Warrior`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string, source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: PH_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const def = mk("defiant", DEF);
const doom = mk("doomlord", DOOM);
const fate = mk("fatemaker", FATE);
const vs = mk("visionary-seeker", VS);
const ad = mk("ardent-dilettante", AD);
const cipher = mk("cipher-adept", CIPHER);
const chaos = mk("chaotician", CHAOS);
const astral = mk("astral-dancer", ASTRAL);
const elem = mk("elemental-warrior", ELEM);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const FULL5 = [1, 2, 3, 4, 5];
const TQ5 = [0, 1, 2, 3, 3];
const GOOD5 = [2, 3, 3, 4, 4];
const POOR5 = [0, 0, 1, 1, 1];

export const PLANAR_HANDBOOK_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "defiant",
    name: "Defiant",
    ruleset: "core",
    source: `${DEF} (pp. 44-46)`,
    sourceUrl: PH_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Gather Information", "Intimidate",
      "Knowledge (the planes)", "Knowledge (religion)", "Listen",
      "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Base Will save +5",
      "Skills: Knowledge (the planes) 4 ranks",
      "Skills: Knowledge (religion) 8 ranks",
      "Special: cannot worship any deity or have one as a patron; any connection to a god, demigod, or other divine entity must be renounced before taking a level in this prestige class (a paladin or cleric of a specific god must first become an ex-paladin or ex-cleric, losing all spells and class features except armor and shield proficiencies and proficiency with simple weapons; this does not affect clerics who worship a cause or a nonpersonified source of divine magic)",
    ],
    features: [
      def("Spell Resistance (Su)", "Spell resistance equal to 15 + class level against all divine mind-affecting spells. He cannot voluntarily lower this spell resistance; it does not stack with other sources of spell resistance, and when targeted by a divine mind-affecting spell he uses his highest spell resistance value.", 1),
      def("Divine Resistance (Su)", "From 2nd level, he adds his Charisma modifier (if positive) to his saving throws against divine spells.", 2),
      def("Divine Damage Immunity (Su)", "At 3rd level, he gains immunity to damage from divine power, such as that dealt by a flame strike spell.", 3),
      def("Divine Cancellation (Ex)", "At 4th level, he can counterspell divine spells without casting a spell: he readies an action to counterspell as normal but need not identify the spell with Spellcraft. Treat the attempt as dispel magic used to counter, at a caster level of 5 + his defiant class level. Usable a number of times per day equal to 1 + his Charisma bonus (minimum 1).", 4),
      def("Aligned Strike (Su)", "From 5th level, with a touch he can align a weapon or natural weapon to a specific alignment (chaotic, evil, good, or lawful — even one opposing his own) for overcoming damage reduction. He may not use it on a weapon that already has an alignment. Usable once per day at 5th level and twice per day at 10th; each use lasts a number of minutes equal to his class level.", 5),
      def("Divine Prevention (Su)", "From 6th level, once per day as a standard action he can bestow temporary spell resistance (15 + class level) on a single target; it affects only the next divine spell targeted at the subject, even a beneficial one such as bless or cure light wounds, and fades if unused within 24 hours. An unwilling target requires a successful touch attack and may resist with a Will save (DC 10 + defiant class level + his Cha modifier).", 6),
      def("Nondetection (Su)", "At 7th level, he gains the continuous benefit of a nondetection spell as though cast by a sorcerer of a level equal to his defiant class level; the DC of any attempt to break through the effect is 15 + his class level. He can suppress or reestablish this ability as a free action.", 7),
      def("Divine Retribution (Su)", "At 8th level, when he successfully counters a divine spell with divine cancellation, he may cause the spell to rebound at its original caster instead of causing it to fail. This works only against divine spells that target the defiant, not area spells or spells targeting another creature.", 8),
      def("Divine Interference (Su)", "At 9th level, he generates a field that interferes with all divine spellcasting: any spellcaster within 30 feet must succeed on a Concentration check (DC 15 + defiant's class level + spell level) to cast a divine spell, or the spell fails and is lost. He cannot choose to suppress this ability.", 9),
      def("Divine Disavowal (Su)", "At 10th level, his spell resistance extends to cover all divine spells (15 + class level). He cannot voluntarily lower it; it does not stack with other sources of spell resistance, and when targeted by a divine spell he uses his highest spell resistance value.", 10),
      def("Fallen Clerics", "A cleric who worshiped a specific deity (as opposed to an alignment, cause, or philosophy) before taking a defiant level can immediately exchange up to nine of his cleric levels for an equal number of defiant levels; skill ranks stay the same, and later skill points use only his current class skill lists. He also gains cumulative extra benefits by cleric levels traded in: 1 or more — he can heal his own wounds as a supernatural ability, up to a total per day equal to his defiant class level × his Cha modifier, split among uses as he likes. 3 or more — three times per day as a supernatural ability, he gains a +4 enhancement bonus to Strength, Constitution, Wisdom, or Charisma for a number of minutes equal to his defiant class level. 5 or more — once per day, he can grant himself the ability to speak and understand the language of any intelligent creature for 1 hour, otherwise as the tongues spell. 7 or more — dismissal as a spell-like ability twice per day. 9 or more — plane shift as a spell-like ability three times per day.", undefined),
      def("Ex-Defiants", "A defiant who uses a deity's name as an oath or curse, uses a holy symbol or holy water for any purpose, reads or quotes from holy books, or is the willing subject of a spell cast by a divine spellcaster who claims to draw power from a specific deity loses all special abilities granted by this prestige class. He cannot gain further defiant levels until he atones (as the atonement spell, cast by an active Athar in the name of the Great Unknown).", undefined),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "doomlord",
    name: "Doomlord",
    ruleset: "core",
    source: `${DOOM} (pp. 47-49)`,
    sourceUrl: PH_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Climb", "Concentration", "Disable Device", "Jump",
      "Knowledge (architecture and engineering)", "Listen", "Spellcraft",
      "Spot", "Survival", "Swim",
    ],
    prerequisites: [
      "Base attack bonus +7",
      "Feats: Improved Sunder, Weapon Focus (any sword)",
      "Special: must sunder a weapon, scatter 500 gp into a crowd, and destroy a building; these acts must be witnessed or verified by a member of the Doomguard",
    ],
    features: [
      doom("Weapon and Armor Proficiency", "Doomlords gain proficiency with all martial weapons.", 1),
      doom("Spellcasting", "At each even-numbered doomlord level (2nd, 4th, 6th, 8th, 10th), he gains new spells per day and an increase in caster level (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before. He gains no other benefit of that class. With more than one prior spellcasting class, he chooses which class each such level advances.", 2),
      doom("Entropic Blow (Su)", "He can channel destructive energy into a melee attack: he adds his Charisma bonus to the attack roll and deals an extra 2 points of damage per doomlord level. The blow automatically ignores hardness and any damage reduction possessed by constructs or undead, regardless of the DR's source. It must be declared before the attack is made, and a miss wastes the use. Usable once per day at 1st level, twice per day at 5th, and three times per day at 10th, but no more than once per round.", 1),
      doom("Healing Resistance (Ex)", "As proof of his dedication to entropy, conjuration (healing) spells and effects used on a doomlord heal only half the normal amount of damage.", 1),
      doom("Bonus Feat", "At 2nd level, and again at 6th and 10th level, he gains a bonus feat from the following list: Cleave, Diehard, Endurance, Great Cleave, Improved Critical, Toughness. He must still meet the feat's prerequisites.", 2),
      doom("Destructive Expertise (Ex)", "From 2nd level, he adds half his class level as a bonus on Disable Device and Knowledge (architecture and engineering) checks made to take apart or disable traps and other objects.", 2),
      doom("Negative Adaptation (Ex)", "From 3rd level, he does not lose hit points or need to make Fortitude saves due to being in a negative-dominant environment.", 3),
      doom("Body or Soul (Ex)", "At 4th level and again at 8th level, he increases either his Constitution score or his Charisma score by 1. He need not choose the same ability score each time.", 4),
      doom("Unmaking Magic (Sp)", "At 7th level, he can use dispel magic three times per day, at a caster level equal to his class level. He may add his Charisma bonus (if any) to his dispel checks, and gains an additional +5 bonus when attempting to dispel a permanency spell.", 7),
      doom("Disintegrate (Sp)", "From 9th level, once per day as a full-round action he can use disintegrate as a sorcerer of a level equal to his character level. The save DC is 16 + his Cha modifier.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "fatemaker",
    name: "Fatemaker",
    ruleset: "core",
    source: `${FATE} (pp. 50-52)`,
    sourceUrl: PH_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft",
      "Decipher Script", "Diplomacy", "Disguise", "Escape Artist", "Forgery",
      "Gather Information", "Hide", "Jump",
      "Knowledge (all skills, taken individually)", "Listen", "Move Silently",
      "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand",
      "Speak Language", "Spellcraft", "Spot", "Swim", "Tumble",
      "Use Magic Device",
    ],
    prerequisites: [
      "Base attack bonus +4",
      "Skills: Bluff, Diplomacy, or Intimidate 8 ranks; 5 ranks each in the other two skills",
      "Feats: Skill Focus (Bluff), Skill Focus (Diplomacy), or Skill Focus (Intimidate)",
      "Alignment: any nonlawful",
    ],
    features: [
      fate("Weapon and Armor Proficiency", "Fatemakers are proficient with all simple weapons, plus the longsword, rapier, sap, short sword, shortbow, and whip. They are proficient with light armor and shields (except tower shields).", 1),
      fate("Spellcasting", "The fatemaker casts arcane spells spontaneously, just as a sorcerer does, from the fatemaker spell list. To cast a spell she must have a Charisma score of at least 10 + the spell's level; bonus spells are based on Charisma, and save DCs are 10 + spell level + her Cha modifier. A 0 on the table means bonus spells only. She can cast fatemaker spells in light armor without the normal arcane spell failure chance; medium or heavy armor or a shield imposes the normal chance, as does light armor for arcane spells from other classes. Upon reaching 6th level, and at every even level after (8th and 10th), she may swap one known spell for a new one of the same level, at least two levels below the highest-level fatemaker spell she can cast, chosen when she gains new spells known for that level. Spells per day (1st/2nd/3rd/4th): 1st: 0; 2nd: 1; 3rd: 2/0; 4th: 3/1; 5th: 3/2/0; 6th: 3/3/1; 7th: 3/3/2/0; 8th: 3/3/3/1; 9th: 3/3/3/2; 10th: 3/3/3/3. Spells known (1st/2nd/3rd/4th): 1st: 2*; 2nd: 3; 3rd: 3/2*; 4th: 4/3; 5th: 4/3/2*; 6th: 4/4/3; 7th: 4/4/3/2*; 8th: 4/4/4/3; 9th: 4/4/4/3; 10th: 4/4/4/4 (*provided she has a high enough Charisma score to have a bonus spell of this level). Fatemaker spell list — 1st: charm person, disguise self, expeditious retreat, jump, sanctuary, true strike. 2nd: bear's endurance, bull's strength, cat's grace, darkvision, daze monster, eagle's splendor, fox's cunning, invisibility, owl's wisdom, resist energy, spider climb. 3rd: haste, protection from energy, nondetection, suggestion, tongues. 4th: charm monster, neutralize poison, remove curse, restoration, stoneskin.", 1),
      fate("Take-Charge Appeal (Ex)", "She adds 1 point to her Charisma score at 1st level, and again at 5th and 10th level.", 1),
      fate("Confidence of the Fated (Su)", "From 2nd level, once per day she can add her class level as a morale bonus on any single attack roll, weapon damage roll, saving throw, or skill check. At 7th level and higher she can do this twice per day, but only once in any given round.", 2),
      fate("Sneak Attack (Ex)", "From 3rd level, she deals extra damage on a successful attack against a flat-footed or flanked target or one denied its Dexterity bonus: +1d6 at 3rd level, +2d6 at 6th, +3d6 at 9th. The extra damage also applies to ranged attacks against targets up to 30 feet away. Creatures with concealment, no discernible anatomy, or immunity to extra damage from critical hits are immune; she can deal nonlethal damage with a sneak attack only with a weapon designed for that purpose, such as a sap.", 3),
      fate("Aura of Confidence (Su)", "From 4th level, she grants a +1 morale bonus on attack rolls, saves, and skill checks to all adjacent allies (but not to herself), functioning only while she is conscious. At 8th level the bonus increases to +2.", 4),
      fate("Ego Manifestation (Sp)", "At 10th level, once per day her confidence and ego become physically manifest, as the righteous might spell (caster level equals her class level), except that she gains no damage reduction and instead gains a +4 bonus on Intimidate checks.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "visionary-seeker",
    name: "Visionary Seeker",
    ruleset: "core",
    source: `${VS} (pp. 53-54)`,
    sourceUrl: PH_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Concentration", "Craft",
      "Knowledge (all skills, taken individually)", "Profession",
      "Sense Motive", "Spellcraft", "Spot", "Survival",
    ],
    prerequisites: [
      "Skills: Knowledge (any single skill) 8 ranks or Survival 8 ranks",
      "Special: must be inducted by a member of the Mind's Eye",
    ],
    features: [
      vs("Spellcasting", "At each odd-numbered visionary seeker level (1st, 3rd, 5th, 7th, 9th), he gains new spells per day and an increase in caster level (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before. He gains no other benefit of that class. With more than one prior spellcasting class, he chooses which class each such level advances.", 1),
      vs("Divination Expertise (Ex)", "He adds his class level to his caster level when casting divination spells. This stacks with the caster-level gains from the spellcasting levels granted at every odd-numbered class level — for example, a 10th-level wizard/4th-level visionary seeker casts divinations as a 16th-level caster (10 wizard + 4 visionary seeker + 2 added spellcasting levels).", 1),
      vs("Spell Mimic (Sp)", "From 2nd level, once per day he can mimic any spell (arcane or divine) of a level no greater than his class level. He must have seen the spell cast within the previous 24 hours and must supply any material components or focus the spell requires; the casting time is as normal, he cannot apply metamagic effects even if the original casting had them, and his caster level for the spell equals his highest caster level in any class. At 6th level he can use this ability twice per day, and at 10th level three times per day.", 2),
      vs("Intuition (Ex)", "At 3rd level, he gains a +2 insight bonus on initiative checks and on Will saves against illusions. These bonuses increase to +4 at 7th level.", 3),
      vs("Bend Fate (Su)", "At 4th level, once per day he can add 1d6 to any d20 roll he makes. He must declare the use of this ability before rolling the d20.", 4),
      vs("Trick Fate (Su)", "At 8th level, once per day he can reroll one roll he has just made, before the DM declares whether the roll succeeds or fails. He must take the result of the reroll, even if it is worse than the original roll.", 8),
      vs("Moment of Prescience (Sp)", "At 10th level, once per day he can use moment of prescience as a spell-like ability. His caster level equals his highest caster level in any class.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "ardent-dilettante",
    name: "Ardent Dilettante",
    ruleset: "core",
    source: `${AD} (pp. 55-57)`,
    sourceUrl: PH_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["ref"],
    progression: rows(HALF10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft",
      "Decipher Script", "Diplomacy", "Disable Device", "Disguise",
      "Escape Artist", "Forgery", "Gather Information", "Handle Animal",
      "Heal", "Hide", "Intimidate", "Jump",
      "Knowledge (all skills, taken individually)", "Listen", "Move Silently",
      "Open Lock", "Perform", "Profession", "Ride", "Search", "Sense Motive",
      "Sleight of Hand", "Speak Language", "Spellcraft", "Spot", "Survival",
      "Swim", "Tumble", "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Skills: any skill 8 ranks, any other five skills 1 rank in each (to become a 1st-level ardent dilettante)",
      "Special: must recount five experiences, one for each of the different senses, at a festhall or sensorium run by the Society of Sensation (to become a 1st-level ardent dilettante)",
      "Skills: Perform (any single skill) 8 ranks, any other skill 5 ranks, any other five skills 1 rank in each (to become a 4th-level ardent dilettante)",
      "Special: proficiency with at least two martial weapons (to become a 4th-level ardent dilettante)",
      "Spellcasting: ability to cast 1st-level arcane or divine spells (to become a 4th-level ardent dilettante)",
      "Skills: Perform (any single skill) 8 ranks, any Strength-based skill 5 ranks, any Dexterity-based skill 5 ranks, any other three skills 1 rank in each (to become a 7th-level ardent dilettante)",
      "Special: proficiency with at least four martial weapons and one exotic weapon (to become a 7th-level ardent dilettante)",
      "Spellcasting: ability to cast 1st-level arcane spells and 1st-level divine spells (to become a 7th-level ardent dilettante)",
      "Special: must have visited three different planes (to become a 7th-level ardent dilettante)",
      "Skills: Perform (any single skill) 8 ranks, any Strength-based skill 5 ranks, any Dexterity-based skill 5 ranks, any Constitution-based skill 5 ranks, any Intelligence- or Wisdom-based skill 5 ranks (to become a 10th-level ardent dilettante)",
      "Special: proficiency with at least four martial weapons and one exotic weapon (to become a 10th-level ardent dilettante)",
      "Spellcasting: ability to cast 1st-level arcane spells and 1st-level divine spells (to become a 10th-level ardent dilettante)",
      "Special: must have visited six different planes (to become a 10th-level ardent dilettante)",
      "Special: must have died and returned to life or unlife (to become a 10th-level ardent dilettante)",
    ],
    features: [
      ad("Spellcasting", "At each ardent dilettante level after 1st (2nd through 10th), she gains new spells per day and an increase in caster level (and spells known, if applicable) as if she had also gained a level in a spellcasting class she belonged to before. She gains no other benefit of that class. With more than one prior spellcasting class, she chooses which class each such level advances.", 2),
      ad("Heightened Senses (Su)", "She gains a competence bonus on Listen, Search, Sense Motive, and Spot checks equal to 1 + one-half her class level.", 1),
      ad("Lore", "She may make a special lore check (1d20 + her ardent dilettante level + her Int modifier) to see whether she knows relevant information about a notable person, place, or thing, otherwise identical to the bardic knowledge ability. If she has a similar ability from another class (such as bard or loremaster), her ardent dilettante levels stack with those class levels for the check.", 1),
      ad("Enthrall (Sp)", "From 2nd level, she can recount one of her adventures or experiences, capturing an audience's attention as with an enthrall spell. Usable once per day for every two class levels she has; caster level equals her character level; save DC 12 + her Cha modifier.", 2),
      ad("Joie de Vivre (Sp)", "From 3rd level, her obvious pleasure in life influences those around her to feel the same way, as with a good hope spell. Usable once per day for every three class levels she has; caster level equals her character level; save DC 12 + her Cha modifier.", 3),
      ad("Bonus Feat", "At 4th level, and again at 7th and 10th level, she gains a bonus feat. She must meet the prerequisites of the feat she selects.", 4),
      ad("Sense Link (Sp)", "At 4th level, she can establish a link with another creature within 30 feet, gaining the benefit of a clairaudience/clairvoyance spell centered on that creature's position. Once the link is established, distance is not a factor, though it works only on the plane she and the target currently occupy. Caster level equals her ardent dilettante level; save DC 13 + her Cha modifier.", 4),
      ad("Scent (Ex)", "At 5th level, her sense of smell becomes so acute that she gains the scent special quality.", 5),
      ad("Seen It Before (Su)", "From 6th level, she can make a Will save to identify an illusion by perceiving it with any of her senses, even if the illusion provides sensory input for that sense. The DM makes this save in secret; if it fails, she gets no further save until she interacts with the illusion.", 6),
      ad("See It Again (Su)", "From 8th level, once per day, when targeted by or in the area of a spell effect, she can use her next action (if taken within 1 round of the casting) to duplicate the casting of that spell with all aspects identical — the same save DC, range, and duration as if the original caster had cast it. She automatically knows all relevant information about the spell (its name, effect, save DC, and so on).", 8),
      ad("Blindsense (Ex)", "At 9th level, her senses become so attuned to her surroundings that she gains blindsense out to 10 feet.", 9),
      ad("Death Holds No Mysteries (Su)", "At 10th level, when she is brought back from the dead by magic such as raise dead or resurrection, she does not lose a level.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "cipher-adept",
    name: "Cipher Adept",
    ruleset: "core",
    source: `${CIPHER} (pp. 58-60)`,
    sourceUrl: PH_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Balance", "Bluff", "Concentration", "Disable Device", "Escape Artist",
      "Handle Animal", "Hide", "Move Silently", "Ride", "Sense Motive",
      "Spot", "Survival", "Swim", "Tumble", "Use Magic Device",
    ],
    prerequisites: [
      "Alignment: neutral",
      "Skills: Balance 5 ranks",
      "Skills: Listen 10 ranks",
      "Skills: Survival 5 ranks",
      "Feats: Agile, Dodge, Improved Initiative",
    ],
    features: [
      cipher("Improved Unarmed Strike", "At 1st level, she gains Improved Unarmed Strike as a bonus feat.", 1),
      cipher("Strike the Weak Spot (Ex)", "As a standard action, she can attack an unattended object at its perceived weakest point. If she hits, she may attempt a Concentration check (DC 10 + the object's hardness); on a success, she ignores the object's hardness when calculating damage for this attack.", 1),
      cipher("Evasion (Ex)", "At 2nd level, if she is exposed to an effect that normally allows a Reflex saving throw for half damage, she takes no damage on a successful save. Evasion can be used only if she is wearing light armor or no armor.", 2),
      cipher("Combat Instinct (Ex)", "At 3rd level, she gains a +1 insight bonus to her Armor Class and on initiative checks. This bonus increases to +2 at 6th level and to +3 at 9th level.", 3),
      cipher("Bonus Feat", "At 4th level and again at 8th level, she gains a bonus feat from the following list, provided she meets its prerequisites: Acrobatic, Alertness, Animal Affinity, Combat Reflexes, Deft Hands, Improved Critical, Improved Disarm, Improved Sunder, Lightning Reflexes, Mobility, Nimble Fingers, Precise Shot, Self-Sufficient, Spring Attack.", 4),
      cipher("Combination Strike (Ex)", "At 5th level, if she confirms a critical hit on a melee attack, she may immediately attempt a disarm or sunder against the same opponent as a free action. The attempt provokes attacks of opportunity as normal unless she has the appropriate feat.", 5),
      cipher("Improved Evasion (Ex)", "At 7th level, she still takes no damage on a successful Reflex saving throw against attacks such as a dragon's breath weapon or a fireball, and henceforth takes only half damage on a failed save. A helpless cipher adept does not gain the benefit of improved evasion.", 7),
      cipher("Move Without Barriers (Su)", "At 10th level, she can step into the Ethereal Plane for short periods, becoming ethereal for a number of rounds per day equal to 1 + her Wis modifier (minimum 1); the rounds need not be consecutive. This otherwise functions as the ethereal jaunt spell.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "chaotician",
    name: "Chaotician",
    ruleset: "core",
    source: `${CHAOS} (pp. 61-63)`,
    sourceUrl: PH_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL5, POOR5, GOOD5, POOR5),
    classSkills: [
      "Bluff", "Craft", "Decipher Script", "Diplomacy", "Forgery",
      "Gather Information", "Intimidate",
      "Knowledge (all skills, taken individually)", "Search", "Sense Motive",
      "Spot", "Use Magic Device",
    ],
    prerequisites: [
      "Base attack bonus +4",
      "Base Fortitude save +2",
      "Base Reflex save +2",
      "Base Will save +2",
      "Alignment: any chaotic",
    ],
    features: [
      chaos("Weapon and Armor Proficiency", "Chaoticians are proficient with all simple and martial weapons, with all types of armor, and with shields.", 1),
      chaos("Chaotic Contagion (Su)", "He can attempt to infect a target with chaotic impulses: on a successful melee touch attack, the target takes a –2 penalty to Armor Class against the chaotician's attacks, a –2 penalty on saves against the chaotician's spells and abilities, and a –2 penalty on skill checks opposed by the chaotician. A successful Will save (DC 10 + chaotician class level + his Cha modifier) negates the effect and grants the target immunity to that chaotician's contagion for 24 hours. Otherwise the effect lasts 1 hour per class level. Usable a number of times per day equal to his class level.", 1),
      chaos("Scofflaw (Su)", "Divinations cast by lawful creatures have difficulty affecting him, functioning much like a nondetection spell but only against lawful creatures: such a creature must succeed on a caster level check against DC 15 + his chaotician class level + his Cha bonus (if any) to employ a divination against him. He can suppress or resume this ability as a free action.", 1),
      chaos("Anarchic Grace (Su)", "From 2nd level, once per day as a free action he can make his movements and posture unpredictable, giving attackers a 50% miss chance on all their attacks for a number of rounds equal to his class level; even true seeing and similar effects cannot offset this. When the effect ends, he becomes fatigued for 1 minute. At 4th level and higher he can use this ability twice per day.", 2),
      chaos("Babble (Su)", "From 3rd level, once per day he can generate a 10-foot-radius emanation that turns all sounds issuing from, entering, or passing through the area into garbled, unintelligible noise. Within the area verbal communication is impossible, spells with verbal components cannot be cast, scrolls and magic items requiring a verbal component do not function, spells and items that rely on sound do not function, and sonic damage has no effect.", 3),
      chaos("Clarity of Confusion (Su)", "From 3rd level, he gains a +2 insight bonus on saves against illusion (pattern) spells, enchantment (compulsion) spells, and spells with the lawful descriptor.", 3),
      chaos("Destiny's Arbiter (Su)", "At 5th level, once per day as a free action he can reroll one roll he has just made, or force another creature to reroll a result he does not like. He must use this ability immediately after the result of the roll is known; to force another creature to reroll he must be able to see it and it must be within 60 feet. Whether rerolling his own roll or forcing another's, the result of the second roll stands.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "astral-dancer",
    name: "Astral Dancer",
    ruleset: "core",
    source: `${ASTRAL} (pp. 63-64)`,
    sourceUrl: PH_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Balance", "Bluff", "Climb", "Escape Artist", "Hide", "Jump",
      "Knowledge (the planes)", "Listen", "Move Silently", "Profession",
      "Search", "Sleight of Hand", "Spot", "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Skills: Balance 8 ranks",
      "Skills: Jump 8 ranks",
      "Skills: Tumble 8 ranks",
      "Feats: Dodge, Mobility, Spring Attack",
    ],
    features: [
      astral("Relative Altitude (Ex)", "While on the Astral Plane (or any other plane or region without gravity), she is always considered to have higher ground over her opponent and gains a +1 bonus on melee attack rolls.", 1),
      astral("Evasion (Ex)", "From 2nd level, as the monk class feature, except that initially it is effective only while she is on a plane with no gravity. At 4th level and higher, she can use her evasion ability in all environments, regardless of gravity.", 2),
      astral("Improved Maneuverability (Ex)", "From 3rd level, her control over her movement in no-gravity situations improves: on a plane with the no-gravity trait (such as the Astral Plane), a double move drops her maneuverability to good (rather than average), and moving at four times her speed drops it to poor (rather than clumsy). At 9th level she retains perfect maneuverability even on a double move, and her maneuverability drops only to average when she moves at up to four times her speed.", 3),
      astral("Astral Dodge (Ex)", "At 5th level, she gains a +2 dodge bonus to Armor Class in a no-gravity environment (or +1 in an environment with gravity). At 10th level this increases to +4 in a no-gravity environment (or +2 with gravity).", 5),
      astral("Improved Evasion (Ex)", "From 6th level, as the monk class feature, except that initially it is effective only while she is on a plane with no gravity. At 8th level and higher, she can use her improved evasion ability in all environments, regardless of gravity.", 6),
      astral("Astral Agility (Ex)", "From 7th level, once per round as a move action, while in a no-gravity environment she can attempt to switch places with an adjacent creature of her size or smaller. The target resists with an opposed Intelligence check; the astral dancer adds her class level to her roll (a target that is also an astral dancer adds its class level as well). If she wins, she moves into the target's space and the target moves into her vacated space; this movement does not provoke attacks of opportunity.", 7),
      astral("Lightning Speed (Ex)", "At 10th level, her movement while on the Astral Plane (or a similar no-gravity environment) never provokes attacks of opportunity.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "elemental-warrior",
    name: "Elemental Warrior",
    ruleset: "core",
    source: `${ELEM} (pp. 65-66)`,
    sourceUrl: PH_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ5, GOOD5, POOR5, POOR5),
    classSkills: [
      "Climb", "Craft", "Handle Animal", "Intimidate", "Jump",
      "Knowledge (the planes)", "Ride", "Swim",
    ],
    prerequisites: [
      "Base attack bonus +7",
      "Skills: Knowledge (the planes) 5 ranks",
      "Special: must have traveled to at least one of the Elemental Planes",
    ],
    features: [
      elem("Elemental Affinity (Ex)", "At 1st level she selects one of the four elements (air, earth, fire, or water) as the one for which she has an affinity. She immediately gains the ability to speak (and, if literate, to read and write) the language associated with her element (Auran, Terran, Ignan, or Aquan, respectively), and gains resistance 10 to the associated energy type (electricity, acid, fire, or cold, respectively).", 1),
      elem("Elemental Manifestation (Su)", "From 2nd level, as a standard action she can cause her body to manifest aspects of her chosen element for 1 minute; usable a number of times per day equal to her class level and dismissible as a free action. Air: brisk winds whip around her and all ranged attacks against her have a 20% miss chance. Earth: her skin is partially sheathed in rocky hide and her natural armor bonus increases by 3. Fire: a sheath of flame envelops her and any opponent who lands a successful melee attack against her takes 1d6 points of fire damage (creatures wielding reach weapons do not take this damage). Water: she is coated in water and gains damage reduction 3/piercing.", 2),
      elem("Elemental Weapon (Su)", "From 3rd level, as a move action she can imbue any melee weapon she wields with the energy of her chosen element: the weapon deals an extra 2d6 points of energy damage of that type on each hit for 1 minute (dismissible as a free action). Usable a number of times per day equal to her class level. If the weapon already has a magical effect that lets it deal energy damage, that effect is suppressed for the duration.", 3),
      elem("Elemental Movement (Su)", "At 4th level she gains a special movement property based on her chosen element. Air: fly at a speed of 20 feet (perfect maneuverability), unusable in medium or heavy armor or with a medium or heavy load. Earth: burrow speed of 30 feet (or her base land speed, whichever is lower). Fire: her base land speed increases by 10 feet, stacking with all other speed increases, lost if she wears heavy armor or carries a heavy load. Water: swim speed of 30 feet (or her base land speed, whichever is lower), and she can breathe water. At 4th level, elemental warriors of all kinds also gain the ability to use plane shift once per day to reach their chosen Elemental Plane, or from that Elemental Plane to the Material Plane.", 4),
      elem("Elemental Burst Weapon (Su)", "At 5th level, her elemental weapon ability improves: the extra damage remains 2d6, but on a successful critical hit the weapon releases a burst of energy of the same type, for a total of 6d6 points. The additional damage is 4d6 points for a weapon with a ×2 critical multiplier, 6d6 for ×3, or 8d6 for ×4.", 5),
      elem("Elemental Strike (Su)", "At 5th level, once per day as a standard action she can deliver a devastating melee touch attack channeling her chosen element. No save is allowed against the damage, but a successful Fortitude save (DC 15 + her Con modifier) negates the secondary effect. Air: 10d6 points of bludgeoning damage from a sudden gust of wind, and the target is knocked prone (Fortitude negates the knockdown). Earth: 10d6 points of bludgeoning damage, and the target is pushed back 10 feet as if bull rushed (Fortitude negates the push). Fire: 10d6 points of fire damage, and the target catches on fire for 1d4 rounds (Fortitude negates catching on fire). Water: 10d6 points of damage as moisture is drawn from the target's body, and the target is nauseated for 1 round (Fortitude negates the nausea).", 5),
    ].map((x) => x as FeatureDefinition),
  },
];
