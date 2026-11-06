import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Cityscape (WotC, D&D 3.5) Chapter 3 prestige classes,
// transcribed in full — progression tables included —
// from Shaun's own copy: Ebonmar Infiltrator (pp. 79–84,
// Table 3–1), Crimson Scourge (pp. 92–96, Table 3–3),
// and Urban Savant (pp. 100–105, Table 3–4). 3.5-native:
// no conversion. Every progression table was verified
// visually against the rendered printed page (the
// pdftotext layer happens to carry these three tables
// cleanly, and the renders confirmed them cell for
// cell, including the Ebonmar infiltrator's Spells per
// Day columns and the Urban Savant's Spellcasting
// column). Spell-list data for the one class with its
// own list (Ebonmar infiltrator) is folded into the
// Spells feature, following the Planar Handbook
// Fatemaker precedent. Summaries are short mechanical
// paraphrases in our own words; no book prose is
// reproduced.
// Two printing quirks are recorded as printed: the
// Ebonmar infiltrator's Spells feature text says
// casting starts "at 2nd level," while Table 3–1
// grants 0 1st-level spells per day at 1st level (the
// feature text itself then explains the 1st-level
// case), and Table 3–1's header misprints the class
// name as "Infilitrator."

const CS = "Cityscape";
const CS1_PATH = "library-staging/books/cityscape-part1.pdf";
const CS2_PATH = "library-staging/books/cityscape-part2.pdf";
const EBONMAR = `${CS} — Ebonmar Infiltrator`;
const SCOURGE = `${CS} — Crimson Scourge`;
const SAVANT = `${CS} — Urban Savant`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string, source: string, sourceUrl: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const ebonmar = mk("ebonmar-infiltrator", EBONMAR, CS1_PATH);
const scourge = mk("crimson-scourge", SCOURGE, CS1_PATH);
const savant = mk("urban-savant", SAVANT, CS2_PATH);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

export const CITYSCAPE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "ebonmar-infiltrator",
    name: "Ebonmar Infiltrator",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise",
      "Escape Artist", "Forgery", "Gather Information", "Hide", "Jump", "Knowledge (nobility and royalty)",
      "Listen", "Move Silently", "Open Lock", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Tumble",
      "Use Rope",
    ],
    prerequisites: [
      "Skills: Decipher Script 4 ranks, Hide 8 ranks, Move Silently 8 ranks, Search 4 ranks, Sense Motive 4 ranks",
      "Feats: Any two of the following: Alertness, Deceitful, Investigator, Negotiator, and Stealthy",
      "Special: Must be a member of House Ebonmar",
    ],
    features: [
      ebonmar(
        "Weapon and Armor Proficiency",
        "You gain no proficiency with any weapons or armor. If you are proficient with light armor, you can cast infiltrator spells while wearing light armor without incurring the normal chance for arcane spell failure; medium or heavy armor or a shield incurs the normal chance, and a multiclass infiltrator still incurs arcane spell failure for arcane spells gained from other classes.",
        undefined
      ),
      ebonmar(
        "Spells",
        "You prepare and cast a small number of arcane spells from the Ebonmar infiltrator list, just as a wizard does. (The feature text says this begins at 2nd level, but Table 3–1 grants 0 1st-level spells per day at 1st level and the text itself addresses that case; the table governs.) Spells per day by level (1st/2nd/3rd/4th): 1st 0/—/—/—; 2nd 1/—/—/—; 3rd 2/0/—/—; 4th 3/1/—/—; 5th 3/2/0/—; 6th 3/3/1/—; 7th 3/3/2/0; 8th 3/3/3/1; 9th 3/3/3/2; 10th 3/3/3/3. A dash means the level is not yet available; a 0 means only bonus spells for a high Intelligence. Casting requires Intelligence of at least 10 + the spell's level, bonus spells are based on Intelligence, and save DCs are 10 + spell level + your Intelligence modifier. Spell list — 1st: comprehend languages, detect chaos, detect evil, detect good, detect law, detect magic, detect secret doors, detect weaponry (new in this book), disguise self, expeditious retreat, ghost sound, jump, obscuring mist, secret weapon (new in this book). 2nd: cat's grace, darkness, detect thoughts, fox's cunning, illusory script, invisibility, knock, owl's wisdom, pass without trace, spider climb, undetectable alignment. 3rd: arcane sight, darkvision, deeper darkness, locate object, misdirection, nondetection, see invisibility, secret page, tongues. 4th: arcane eye, clairaudience/clairvoyance, detect scrying, dimension door, freedom of movement, greater invisibility, locate creature, modify memory, scrying.",
        1
      ),
      ebonmar(
        "Piercing Insight",
        "You gain a +1 bonus on Search, Sense Motive, and Spot checks. The bonus increases by +1 for every three levels past 1st: +2 at 4th level, +3 at 7th level, and +4 at 10th level.",
        1
      ),
      ebonmar(
        "Speed Reader",
        "You can read a single page of text as a full-round action. This applies even to text read with comprehend languages or through the Decipher Script spell.",
        1
      ),
      ebonmar(
        "Sneak Attack",
        "As the rogue ability of the same name. The extra damage is +1d6 at 2nd level, +2d6 at 5th level, and +3d6 at 8th level, and stacks with sneak attack damage from other sources such as rogue levels.",
        2
      ),
      ebonmar(
        "Combat Anticipation",
        "You gain a +1 dodge bonus to Armor Class and a +1 bonus on Reflex saves and initiative checks, increasing to +2 at 6th level. The bonuses to AC and Reflex saves apply only against humanoids, monstrous humanoids, and giants — other creatures are too anatomically different to anticipate — and the ability functions only when you wear light or no armor.",
        3
      ),
      ebonmar(
        "Uncanny Dodge",
        "You cannot be caught flat-footed, as the barbarian ability of the same name. If you already have uncanny dodge from another source, you instead gain improved uncanny dodge at this level.",
        4
      ),
      ebonmar(
        "Hide in Plain Sight",
        "You can use the Hide skill in natural terrain even while being observed, as the ranger ability of the same name.",
        8
      ),
      ebonmar(
        "Hyper-Awareness",
        "Supernatural attunement of your senses: you gain darkvision out to 30 feet and blindsense out to 5 feet.",
        9
      ),
      ebonmar(
        "Shadow in the Night",
        "Once per day, as a spell-like ability, you can become ethereal for up to 1 round plus a number of additional rounds equal to your Intelligence modifier. This otherwise functions as the spell ethereal jaunt.",
        10
      ),
    ],
    source: `${CS} — Chapter 3: Politics and Power (pp. 79-84)`,
    sourceUrl: CS1_PATH,
  },
  {
    id: "crimson-scourge",
    name: "Crimson Scourge",
    ruleset: "core",
    hitDie: "d10",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL10, GOOD10, GOOD10, POOR10),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft (trapmaking)", "Diplomacy", "Disable Device", "Disguise",
      "Escape Artist", "Gather Information", "Handle Animal", "Hide", "Intimidate", "Jump",
      "Knowledge (local)", "Listen", "Move Silently", "Ride", "Search", "Sense Motive", "Spot", "Survival",
      "Swim", "Use Rope",
    ],
    prerequisites: [
      "Alignment: Any nongood",
      "Base Attack Bonus: +4",
      "Base Save Bonus: Base Fortitude save +3",
      "Skills: Gather Information 4 ranks, Handle Animal 8 ranks, Heal 1 rank, Intimidate 3 ranks",
      "Feats: Urban Tracking",
    ],
    features: [
      scourge(
        "Weapon and Armor Proficiency",
        "You are proficient with all simple and martial weapons, with light and medium armor, and with shields (but not tower shields). In addition, you can select one of the following as a free weapon proficiency: bolas, net, or whip.",
        undefined
      ),
      scourge(
        "Kid Gloves",
        "You can manipulate the wounds you inflict, dealing more or less harm as the situation demands: you can deal nonlethal damage with weapons that normally deal lethal damage, or lethal damage with weapons that normally deal nonlethal damage — both without the usual -4 penalty on the attack roll.",
        1
      ),
      scourge(
        "Special Dispensation",
        "While operating in any area where bounty hunting is acceptable, a slavers guild has any presence, or you enjoy the patronage of an influential figure, you gain the benefit of the Special Dispensation feat (Chapter 2, p. 63), even if you do not meet its prerequisites.",
        1
      ),
      scourge(
        "Swift Tracker",
        "You can make a Gather Information check when using Urban Tracking every half-hour without taking the usual -5 penalty.",
        2
      ),
      scourge(
        "Painful Strike",
        "When you make a melee attack that deals nonlethal damage against an unarmed opponent, you deal extra nonlethal damage: +1d6 at 3rd level, +2d6 at 6th level, and +3d6 at 9th level. The ability does not function if the opponent holds a weapon of any sort in either hand or if your attack deals lethal damage; unarmed foes with the Improved Unarmed Strike feat still count as unarmed. It never applies to ranged attacks, the extra damage is not multiplied on a critical hit, and creatures not subject to nonlethal damage — as well as constructs, oozes, plants, and incorporeal creatures — are unaffected.",
        3
      ),
      scourge(
        "Immovable Heart",
        "You gain a +2 competence bonus to resist enchantment spells and fear effects.",
        4
      ),
      scourge(
        "Improved Disarm",
        "You gain Improved Disarm as a bonus feat, even if you do not meet its prerequisites.",
        5
      ),
      scourge(
        "Threaten",
        "When you use Intimidate to demoralize an opponent, you gain three advantages: you can attempt it as a move action rather than a standard action; a successful attempt leaves the target shaken for a number of rounds equal to your unmodified Strength modifier (minimum 1 round); and you gain a +2 bonus on the Intimidate check to demoralize.",
        7
      ),
      scourge(
        "Deadened Hide",
        "You become immune to nonlethal damage and to spells or effects that inflict or manipulate pain (DM's discretion).",
        8
      ),
      scourge(
        "Smell of Blood",
        "You gain the scent ability and a +3 insight bonus on initiative checks.",
        10
      ),
    ],
    source: `${CS} — Chapter 3: Politics and Power (pp. 92-96)`,
    sourceUrl: CS1_PATH,
  },
  {
    id: "urban-savant",
    name: "Urban Savant",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Balance", "Bluff", "Climb", "Concentration", "Decipher Script", "Diplomacy", "Gather Information",
      "Hide", "Knowledge (all skills, taken individually)", "Listen", "Move Silently", "Profession", "Search",
      "Sense Motive", "Speak Language", "Spellcraft", "Spot", "Tumble", "Use Magic Device",
    ],
    prerequisites: [
      "Skills: 8 ranks in any one, and 2 ranks in each of the other two, of the following skills: Knowledge (dungeoneering), Knowledge (local), and Knowledge (nature)",
      "Feats: Favored (League of Eyes or a similar organization)",
      "Special: Bardic knowledge class ability (at the DM's discretion, this can be replaced by Knowledge [history] 2 ranks)",
      "Special: Must be a member in good standing of the League of Eyes or a similar organization",
    ],
    features: [
      savant(
        "Weapon and Armor Proficiency",
        "You gain no proficiency with any weapons or armor. You can cast arcane spells while wearing light armor without incurring the normal chance of arcane spell failure, provided you are proficient with light armor; medium or heavy armor or a shield incurs the normal chance for spells with somatic components.",
        undefined
      ),
      savant(
        "Spellcasting",
        "At every level except 10th, you gain new spells per day (and spells known, if applicable) and an increased caster level as if you had also gained a level in an arcane spellcasting class you belonged to before taking this class; you gain no other benefits of that class. If you had more than one arcane spellcasting class, you choose which one each level advances. If you had no arcane spellcasting class levels before, this feature confers no benefit.",
        1
      ),
      savant(
        "Urban Savvy (Strengths)",
        "Your urban savvy draws on your familiarity with the city's traditional threats — aberrations, animals, humanoids, monstrous humanoids, oozes, and vermin (the DM can adjust this list). To use any urban savvy ability, succeed on an appropriate DC 15 Knowledge check as a move action: you must be within 60 feet of the target and aware of its presence (line of sight is not required), you cannot take 10 or take 20, the check cannot be retried, and each variety can be invoked only once against a given target or group of like creatures; allies benefit if you can communicate with them at the time. Strengths: you learn the target's general combat capabilities — for humanoids, its base attack bonus, Armor Class, and combat-related feats; for nonhumanoids, those plus its special attacks or options.",
        1
      ),
      savant(
        "Urban Empathy",
        "You can use your knowledge to improve the attitude of animals, humanoids, and monstrous humanoids encountered in urban environments (at the DM's discretion, some aberrations as well). For humanoids and monstrous humanoids, you may substitute the appropriate Knowledge check (local) for a Diplomacy check to influence starting attitudes — or make the usual Diplomacy check if you prefer. For aberrations, the substitution at the DM's option is a Knowledge (dungeoneering) check. For animals, the ability functions like a druid's wild empathy, adding your urban savant level to the check, or you may attempt a Knowledge (nature) check instead if it is likely to do better.",
        2
      ),
      savant(
        "Continuing Education",
        "You gain a +1 insight bonus on Knowledge (dungeoneering), Knowledge (local), and Knowledge (nature) checks, and on all bardic knowledge checks. The bonus increases to +2 at 6th level and +3 at 9th level.",
        3
      ),
      savant(
        "Urban Savvy (Weaknesses)",
        "Using urban savvy as described under Urban Savvy (Strengths), you learn a foe's weakness in combat: for humanoids, its Hit Dice, damage reduction (including the means to overcome it), and saving throws; for nonhumanoids, those plus any special weaknesses it has.",
        4
      ),
      savant(
        "Eyes of the City (Low-Light Vision)",
        "You gain low-light vision, seeing twice as far and as clearly as a human in shadowy conditions. If you already have low-light vision, it improves to let you see three times as far as a normal human in shadowy illumination.",
        5
      ),
      savant(
        "Urban Savvy (Methods)",
        "Using urban savvy as described under Urban Savvy (Strengths), your knowledge of your foes' methods directs attacks more effectively: you and your allies gain a +1d6 bonus on weapon damage rolls against the target for 1 minute. If you succeed on the check by 10 or more, the bonus is +2d6; by 20 or more, +3d6.",
        7
      ),
      savant(
        "Eyes of the City (Pierce Deception)",
        "While in an urban environment, you can try to see through anything disguising a creature's or object's true appearance with a DC 20 Knowledge (arcana) check. Success tells you whether or not its true appearance has been clouded (but not by what means or what it truly looks like); success by 10 or more tells you the means (the Disguise skill, magic, a natural shapechanging ability, or the like), and if the deception is magical you can attempt a Spellcraft check (DC 20 + spell level) to determine the spell used.",
        8
      ),
      savant(
        "Urban Savvy (True Nature)",
        "Using urban savvy as described under Urban Savvy (Strengths), you grasp a target creature's true nature: you and all allies within 60 feet gain a mystic barrier that acts in all respects (including duration) as a protection from chaos/evil/good/law spell, granting a +2 deflection bonus to AC and a +2 resistance bonus on saves against the target's abilities. The protection works regardless of the creature's true alignment (even neutral); if you succeed on the check by 10 or more, the bonuses rise to +3, and by 20 or more, to +4. Your caster level for this ability is your urban savant level, and its effects do not stack with any actual protection or magic circle spells in effect.",
        10
      ),
    ],
    source: `${CS} — Chapter 3: Politics and Power (pp. 100-105)`,
    sourceUrl: CS2_PATH,
  },
];
