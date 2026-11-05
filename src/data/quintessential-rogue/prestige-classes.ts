import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// The Quintessential Rogue (Michael Mearls, ©2002 Mongoose
// Publishing, Collector's Series) prestige classes, from
// "The Prestige Rogue" chapter, printed pp. 21-33,
// transcribed in full — progression tables included — from
// Shaun's own scanned copy (read visually, 2026-11-04).
// This is a d20 3.0-era book: prerequisites, skill names
// and terminology are transcribed AS PRINTED (3.0 skills
// such as Pick Pocket, Innuendo, Intuit Direction,
// Wilderness Lore, Read Lips and Alchemy stay as printed;
// British spellings such as Armour are kept), and nothing
// is modernised to 3.5. Printing quirks are recorded as
// printed, not silently resolved: the Deep Tracker's 5th
// level feature is "Dark Sense" in its table but headed
// "Darksense" in its text; the Commando's class-skill list
// keys Listen to (Dex); the Crusading Footpad's
// class-skill list keys Knowledge (religion) and
// Profession to (Wis) and marks Decipher Script, Read
// Lips and Use Magic Device as exclusive skills; the
// Shadowy Avenger's prerequisite feat is printed
// "Improved Unarmed Fighting"; and the Tomb Raider's
// prerequisite feat is printed "Skill Focus (knowledge)".
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const QR = "The Quintessential Rogue";
const QR_PATH = "/A POC PC related/5.Splat/Quintessential series/The Quintessential Rogue.pdf";
const AOC = `${QR} — Agent of the Crown`;
const COM = `${QR} — Commando`;
const CFP = `${QR} — Crusading Footpad`;
const DTR = `${QR} — Deep Tracker`;
const EXE = `${QR} — Executioner`;
const SAV = `${QR} — Shadowy Avenger`;
const TBR = `${QR} — Tomb Raider`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key:
        source.split("— ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-") +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: QR_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fa = mk(AOC);
const fc = mk(COM);
const ff = mk(CFP);
const fd = mk(DTR);
const fe = mk(EXE);
const fs = mk(SAV);
const ft = mk(TBR);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const TQ5 = [0, 1, 2, 3, 3];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const FULL5 = [1, 2, 3, 4, 5];
const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GOOD5 = [2, 3, 3, 4, 4];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR5 = [0, 0, 1, 1, 1];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

export const QUINTESSENTIAL_ROGUE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "agent-of-the-crown",
    name: "Agent of the Crown",
    ruleset: "core",
    source: `${AOC} (pp. 21-23)`,
    sourceUrl: QR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ5, POOR5, GOOD5, POOR5),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Craft", "Decipher Script", "Diplomacy",
      "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information",
      "Hide", "Innuendo", "Intimidate", "Jump",
      "Knowledge (local history, nobility, royalty, or court protocol)", "Listen",
      "Move Silently", "Open Lock", "Perform", "Pick Pocket", "Profession",
      "Read Lips", "Ride", "Search", "Sense Motive", "Spot", "Tumble",
    ],
    prerequisites: [
      "Feats: Skill Focus (Diplomacy or Sense Motive)",
      "Skills: Diplomacy 8 ranks",
      "Skills: Knowledge (local history, nobility, royalty, or court protocol) 8 ranks",
      "Skills: Sense Motive 8 ranks",
      "Skills: Speak Language (two languages in addition to native language and/or common)",
      "Special: gain an officially recognised position within a government as an operative, typically by fulfilling an important mission for the throne or earning the court's trust",
    ],
    features: [
      fa("Agent of the Crown Proficiencies", "A spy, ambassador and combat operative for a crown or government — presents a friendly front in court but slips into vaults to collect dispatches, documents and treasures, and is equally at home among street criminals. The agent of the crown gains proficiency with the dagger, light mace, rapier and sap. He gains no proficiencies with armour or shields.", undefined),
      fa("Agent of the Crown", "From his association with his patron: he can demand food and shelter from the crown's official agents, such as the military or vassals; he may requisition mundane, alchemical or magical items of up to 100 gp in total value per month (at the Games Master's option he may demand more expensive items, depending on the state of the campaign and the agent's mission); and he may demand sanctuary from the crown's allied nations, so long as he does not abuse his host's hospitality and is not wanted in the host country for a crime.", 1),
      fa("Smooth Talker", "+2 competence bonus to all Bluff, Diplomacy, Intimidate and Sense Motive checks, and a +2 competence bonus to all Charisma checks.", 1),
      fa("Friends in Low Places", "The agent can always find someone to sell him illegal goods, such as poison or other controlled items, but must pay 1d4 times the listed price if the Games Master rules the item is particularly rare; the Games Master may always rule an item is simply unavailable in a given city or kingdom. He can also gather a group of brutes and thugs: once per week he may make a Gather Information roll and divide the result by five to determine the total levels of warriors and experts available to him; no single ally may have a higher level than the agent's levels in this prestige class. Recruits serve to the best of their ability for one week, then leave; the agent may make another check to recruit them again. These NPCs are not suicidal — they never agree to attack anyone, though they defend the agent and his friends, and a recruit reduced to half or fewer hit points in combat attempts to flee or surrender.", 2),
      fa("Social Chameleon", "+4 competence bonus to Bluff or Disguise checks made to convince someone that he belongs in a restricted area, is actually a member of a club, organisation or royal court, and so on. If his bluff succeeds, his victim believes the agent's claim until presented with evidence to the contrary.", 3),
      fa("Man of a 1,000 Faces", "The player creates four aliases for the agent (names, jobs, personality quirks and brief histories for the Games Master). The agent may spend an hour getting into character and is then considered to automatically pass all Disguise checks when masquerading as one of his aliases; he may use his agent and other class abilities while in disguise, utilising his alias's friends, contacts and reputed abilities rather than his own. Only close, personal friends, rivals and relatives of the agent have any chance of piercing the disguise, against whom the agent makes a Disguise check as normal with a +8 circumstance bonus. One alias may be of the opposite sex and another may be a different race, though the alias's race must be the same size as the agent's.", 4),
      fa("Charming Demeanour", "The agent may make a Diplomacy or Bluff check opposed by his target's Sense Motive check; if he beats his opponent's roll by 10 or more, the target is dazzled by the agent, comes to trust him, and acts as if successfully targeted by a charm person spell cast by the agent for a period of 3d6 minutes. He may only use this ability against creatures vulnerable to charm person, and only a number of times per day equal to his Charisma modifier.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "commando",
    name: "Commando",
    ruleset: "core",
    source: `${COM} (pp. 23-24)`,
    sourceUrl: QR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL5, GOOD5, GOOD5, POOR5),
    classSkills: [
      "Balance", "Climb", "Hide", "Intuit Direction", "Listen", "Move Silently",
      "Spot", "Wilderness Lore",
    ],
    prerequisites: [
      "Base attack bonus +4",
      "Feats: Point Blank Shot, Far Shot",
      "Skills: Hide 8 ranks",
      "Skills: Spot 4 ranks",
      "Special Ability: sneak attack for at least 1d6 damage",
    ],
    features: [
      fc("Commando Proficiencies", "A military rogue who hits enemies hard and fast before slipping away undetected, often operating behind enemy lines and living off the land. The commando gains proficiency with simple and martial weapons, shields and light and medium armour.", undefined),
      fc("Live Off the Land", "When using his Wilderness Lore skill to keep himself safe and fed in the wild, the commando gains a +2 competence bonus to his check. He does not gain this bonus when using his skill for any other reason, including finding food and shelter for others.", 1),
      fc("Silent Strike", "When attacking from hiding with a ranged weapon, the commando's opponents must make a Spot check to determine his location. For each attack the commando makes after his first, his opponents gain a +2 competence bonus to their Spot checks; this bonus accumulates for a particular foe until he discovers the commando's position.", 1),
      fc("Sneak Attack", "Functions exactly like the rogue class ability. The commando gains an additional 1d6 of sneak attack damage at levels two and four (+1d6 at 2nd, +2d6 total at 4th); this bonus damage stacks with that gained from other classes, such as rogue.", 2),
      fc("Prepare Ambush", "If the commando has an hour to prepare an ambush site, he may gain a +5 competence bonus when taking 20 with his Hide check. In addition, he may apply the result of this hide check to a number of allies totalling up to two times his level in the commando class.", 3),
      fc("Sniper", "The commando may use his Point Blank Shot feat at ranges of up to 60 ft.; that feat now grants him +2 to ranged attack rolls and damage, and he may now gain his sneak attack damage with ranged weapons from up to 60 ft. away from his target.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "crusading-footpad",
    name: "Crusading Footpad",
    ruleset: "core",
    source: `${CFP} (pp. 24-26)`,
    sourceUrl: QR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Climb", "Craft", "Decipher Script",
      "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery",
      "Gather Information", "Hide", "Innuendo", "Intimidate", "Intuit Direction",
      "Jump", "Knowledge (religion)", "Listen", "Move Silently", "Open Lock",
      "Perform", "Pick Pocket", "Profession", "Read Lips", "Search",
      "Sense Motive", "Spot", "Swim", "Tumble", "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Base attack bonus +4",
      "Divine Spellcasting: ability to cast 0-level or higher divine spells",
      "Feats: Dodge, Iron Will",
      "Skills: Knowledge (religion) 4 ranks",
      "Alignment: any good",
    ],
    features: [
      ff("Crusading Footpad Proficiencies", "The paladin of rogues — a burglar who steals from vile cults, foul necromancers and villainous nobles to hamper the cause of evil, often working with a church of a good-aligned cult and closely watched over by his patron deity. The crusading footpad gains no additional proficiencies with weapons or armour.", undefined),
      ff("Divine Companion", "At first level the crusading footpad receives a companion creature from his patron deity similar to a wizard's familiar, using all the rules for familiars with the following exceptions: the familiar does not gain the share spells, touch or scry on familiar abilities; in place of share spells, the familiar gains the crusading footpad's divine luck ability; in place of touch, the familiar gains the crusading footpad's detect evil ability; in place of scry on familiar it gains mask alignment. If the divine companion dies, the footpad suffers all the penalties a familiar's master must normally endure; a year after a footpad loses his familiar, he gains a new one from his patron deity.", 1),
      ff("Divine Luck", "The crusading footpad gains a +2 bonus to all saves.", 1),
      ff("Smite Undead", "Allows a crusading footpad to sneak attack undead creatures: +1d6 damage at 2nd level, rising by +1d6 at 4th, 6th, 8th and 10th level (+5d6 at 10th). The bonus damage from this ability does not stack with sneak attack abilities granted by other classes (for example, a 5th-level rogue/4th-level crusading footpad could sneak attack non-undead for +3d6 damage or sneak attack undead for +2d6 damage).", 2),
      ff("Detect Evil", "The crusading footpad can, at will, use detect evil as a spell-like ability, duplicating the effects of the detect evil spell.", 3),
      ff("Detect Undead", "The crusading footpad can, at will, use detect undead as a spell-like ability, duplicating the effects of the detect undead spell.", 3),
      ff("Mask Alignment", "At will, the footpad can choose to mask his alignment: for the purposes of spell effects he does not have an alignment, gains no benefits or drawbacks based on his alignment that a spell or other effect may grant him, and spells, triggers or anything else whose function is determined by its target's alignment simply do not function on a footpad using this ability (for example, he would not trigger a trap designed to fire in response to a good-aligned creature touching an altar). He may turn this ability on or off as a move-equivalent action; he may activate it up to three times per day, but may leave it functioning for as long as he wishes.", 5),
      ff("Divine Shield", "The crusading footpad gains a +4 divine bonus to saves and AC against traps.", 7),
      ff("Sense Guards and Wards", "The crusading footpad gains a +2 divine bonus to all Search and Disable Device checks.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "deep-tracker",
    name: "Deep Tracker",
    ruleset: "core",
    source: `${DTR} (pp. 26-28)`,
    sourceUrl: QR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ5, POOR5, GOOD5, POOR5),
    classSkills: [
      "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device",
      "Escape Artist", "Hide", "Intuit Direction", "Jump", "Knowledge (underearth)",
      "Listen", "Move Silently", "Profession", "Search", "Sense Motive", "Spot",
      "Swim", "Wilderness Lore",
    ],
    prerequisites: [
      "Feats: Alertness, Endurance, Track",
      "Skills: Speak Language (any two subterranean races)",
      "Skills: Wilderness Lore 6 ranks",
    ],
    features: [
      fd("Deep Tracker Proficiencies", "A scout, treasure hunter and guide to the underearth, common in dwarf and gnome communities, whose trove of monster lore and knowledge of underearth customs lets him talk his way past guardians and humanoid tribes. The deep tracker gains proficiency with light armour and all simple weapons. Note that armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Pick Pocket and Tumble.", undefined),
      fd("Monster Knowledge", "When encountering a creature for the first time, the deep tracker can attempt an Intelligence check (DC equal to 20 minus his level in this class) to determine if he has picked up any information about the creature; on a success he may learn one of the traits listed for his current level and all lower levels — Level 1: Alignment, Typical Number Appearing. Level 2: Challenge Rating, Favoured Class (if any). Level 3: One Special Attack, One Special Quality. Level 4: Armour Class, Hit Dice. Level 5: Any Two Traits Listed Above (at fifth level he learns any two traits).", 1),
      fd("Underearth Explorer", "The deep tracker gains a +2 competence bonus to Intuit Direction and Wilderness Lore checks made underground.", 1),
      fd("Pathfinder", "At second level, the deep tracker gains the ability to use his Intuit Direction to determine the shortest path to the surface world. On a successful Intuit Direction check (DC 25) the deep tracker gains a rough estimate of the distance and direction to the closest passage to the surface world.", 2),
      fd("Sneak Attack", "Deep trackers may sneak attack as per the rogue class. They gain +1d6 sneak attack damage at second and fourth level.", 2),
      fd("Emissary", "The deep tracker gains a +2 competence bonus to any Diplomacy and Sense Motive checks against humanoid races that live primarily deep beneath the earth.", 3),
      fd("Maze Sense", "The deep tracker can always tell if he doubled back down a passageway; in game terms, the GM should assume the deep tracker automatically draws an accurate map in his mind as he travels, allowing him to always successfully backtrack his route or recall passages not yet taken. The maze spell traps the deep tracker for only one round.", 4),
      fd("Dark Sense", "At fifth level the deep tracker gains darkvision with a range of 30 ft. If the deep tracker already had this special quality, he instead fights as if he possessed the Blind-Fight feat and has such keen hearing and kinetic sense that he can always operate as if he had vision out to 10 ft., even when under the effects of such spells as darkness or blindness or if blindfolded. (The class table prints this feature as \"Dark Sense\"; the class text heads it \"Darksense\" — recorded as printed.)", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "executioner",
    name: "Executioner",
    ruleset: "core",
    source: `${EXE} (pp. 28-30)`,
    sourceUrl: QR_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, GOOD5, POOR5, POOR5),
    classSkills: [
      "Concentration", "Disguise", "Escape Artist", "Heal",
    ],
    prerequisites: [
      "Base attack bonus +7",
      "Feats: Cleave, Power Attack, Sunder",
      "Skills: Intimidate 6 ranks",
      "Skills: Spot 6 ranks",
      "Alignment: any non-good",
    ],
    features: [
      fe("Executioner Proficiencies", "An elite shock troop of a thieves' guild or criminal cartel who deals in murder and scorns stealth and poison, relying on overwhelming force — the heavy, leaden sledgehammer to the assassin's poisoned stiletto. The executioner gains proficiency with light and medium armour, shields, and all simple and martial weapons. Note that armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Pick Pocket and Tumble.", undefined),
      fe("Executioner's Strike", "When using the full-attack action, the executioner may opt to make a Spot check before each strike he is entitled to as part of that action; the DC of this check equals his opponent's Armour Class. On a success, the executioner deals an extra 1d6 points of damage on a hit at first level, 2d6 at third level, and 3d6 at fifth level; if he fails this check, he gains no bonus damage and takes a -4 circumstance penalty to his attack. After using this ability he receives a -2 AC penalty until his next action. On a critical hit, do not multiply the bonus damage granted by this ability. The executioner may use this ability with missile weapons, but his target must be no more than 30 ft. away. In addition, an executioner gains the ability to sneak attack using the total bonus damage granted by this ability; when sneak attacking (and only when using sneak attack, never when using executioner's strike), the executioner stacks bonus damage granted from other classes with this damage.", 1),
      fe("Cold Blooded Killer", "Starting the round after dropping an opponent with a successful use of his Executioner's Strike ability, the executioner gains a +4 circumstance bonus to Intimidate checks. This bonus persists for five rounds.", 2),
      fe("Executioner's Song", "Once per round, the executioner may make a coup de grace attack as a free action that does not draw an attack of opportunity.", 4),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "shadowy-avenger",
    name: "Shadowy Avenger",
    ruleset: "core",
    source: `${SAV} (pp. 30-32)`,
    sourceUrl: QR_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Alchemy", "Climb", "Craft", "Disable Device", "Disguise",
      "Gather Information", "Hide", "Intimidate", "Jump", "Listen",
      "Move Silently", "Search", "Sense Motive", "Spot", "Swim", "Tumble",
      "Use Rope",
    ],
    prerequisites: [
      "Base attack bonus +4",
      "Feats: Alertness, Improved Unarmed Fighting, Toughness",
      "Skills: Alchemy 4 ranks",
      "Skills: Disguise 8 ranks",
      "Skills: Intimidate 8 ranks",
      "Skills: Sense Motive 8 ranks",
      "Alignment: any non-lawful",
      "Special: you must have lost a loved one to a criminal act",
    ],
    features: [
      fs("Shadowy Avenger Proficiencies", "A vigilante driven by a personal code of justice, usually grounded in a violent event, who stalks criminals in the parts of town the guard do not dare tread and excels at alchemy, producing gadgets and items to catch his enemies by surprise. The shadowy avenger is proficient in all simple and martial weapons and all light armour. Note that armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Pick Pocket and Tumble.", undefined),
      fs("Eye for Detail", "The shadowy avenger gains a +2 competence bonus to all Sense Motive checks.", 1),
      fs("Urban Ranger", "When in a city, the shadowy avenger gains a +2 competence bonus to all Climb, Hide, and Move Silently checks.", 1),
      fs("Scrounger", "When working in an urban setting, the shadowy avenger can use his Alchemy and Craft skill to produce alchemical items at half the normal price for raw materials.", 2),
      fs("Sneak Attack", "The shadowy avenger deals extra damage when he catches a foe off his guard, as per the rogue class's special ability: +1d6 at 2nd level, rising by +1d6 at 4th, 6th, 8th and 10th level (+5d6 at 10th). Bonus sneak attack damage gained from this class stacks with that granted by other classes.", 2),
      fs("Punish the Guilty", "In battle, the shadowy avenger may choose to enter a cold-blooded fury: he gains +2 to hit, +2 damage, and +10 ft. movement for a number of rounds equal to his shadowy avenger level. The shadowy avenger may use this ability once per day.", 3),
      fs("Fearsome Reputation", "The shadowy avenger gains a +2 competence bonus to all Intimidate checks. Furthermore, he gains a +2 competence bonus to Gather Information checks made in lower class, urban settings.", 5),
      fs("Alchemical Genius", "The shadowy avenger may produce elixirs that function exactly like potions: he may operate as if he had the Brew Potion feat, and he is assumed to have access to all bard spells of second level or lower for the purposes of determining whether he meets the prerequisites necessary to produce a potion. In addition, the shadowy avenger counts as a spellcaster of a level equal to his spellcasting levels (if any) plus his levels in this class.", 7),
      fs("Long Arm of the Law", "When the shadowy avenger has his enemy in a grapple, he can attempt to bind him with rope: the shadowy avenger must make a Use Rope check opposed by his opponent's choice of an Escape Artist, Dexterity or Strength check; if the shadowy avenger succeeds, his opponent is left hog-tied. The shadowy avenger may only use this ability against opponents who are his size category or smaller. Using this ability counts as a standard action.", 9),
      fs("Angel of Judgement", "At tenth level, the shadowy avenger gains immunity to all enchantments; charm person and similar spells that could throw him off his path simply have no effect against him.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "tomb-raider",
    name: "Tomb Raider",
    ruleset: "core",
    source: `${TBR} (pp. 32-33)`,
    sourceUrl: QR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ5, POOR5, GOOD5, POOR5),
    classSkills: [
      "Alchemy", "Appraise", "Balance", "Climb", "Craft", "Decipher Script",
      "Disable Device", "Escape Artist", "Gather Information", "Hide",
      "Intuit Direction", "Jump", "Knowledge", "Move Silently", "Open Lock",
      "Profession", "Ride", "Search", "Spellcraft", "Spot", "Swim", "Tumble",
      "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Ability Scores: Dexterity 15+",
      "Feats: Dodge, Lightning Reflexes, Mobility, Skill Focus (knowledge)",
      "Skills: Knowledge (any two different areas) 6 ranks each",
      "Skills: Tumble 10 ranks",
    ],
    features: [
      ft("Tomb Raider Proficiencies", "A scholar-adventurer who spurns the library to seek lost artefacts and first-hand knowledge of lost civilisations in the field, combining esoteric knowledge with a rogue's flexibility. The tomb raider gains proficiency with light armour and all simple weapons. Note that armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Pick Pocket and Tumble.", undefined),
      ft("Recognise Trap Design", "The tomb raider can use the Search skill to find traps as per the rogue class. In addition, he gains a +2 competence bonus on Search checks when looking for traps and on Disable Device checks made to disarm them.", 1),
      ft("Superior Knowledge", "At first, third and fifth level, the tomb raider may choose two particular sub-categories of the Knowledge skill that he does not yet have ranks in; he may now use those skills as if he was trained in them, even though he does not have ranks in the skills, and he gains his Intelligence modifier to these checks (normally, Knowledge skills cannot be used untrained). If the tomb raider later buys ranks in his chosen Knowledge skills, he gains two free ranks in the skill in addition to the skill points spent on it.", 1),
      ft("Mystic Knowledge", "The tomb raider gains a +2 competence bonus to all Use Magic Device skill checks.", 2),
      ft("Trap Sense", "When targeted by a trap, the tomb raider may add his Intelligence modifier to his Reflex save or to his Armour Class, as appropriate.", 2),
      ft("Identify Item", "If the tomb raider spends two hours a day for a week studying an item, he may identify the item's properties, as per the spell analyse dweomer. The tomb raider must have access to a library and spend eight uninterrupted hours per day testing the item and consulting his books; at the end of the week, the scholar uncovers 1d3 of the item's traits.", 3),
      ft("Superior Appraise", "The tomb raider must spend one minute inspecting the item and then make an Appraise check (DC 25); on a success, he can determine if the item is magical.", 4),
      ft("Rapid Dodge", "When using his Dodge feat, the scholar may declare that the Armour Class bonus granted by that feat applies to the next creature or person that attacks him. In addition, he gains a +2 dodge bonus to Armour Class, rather than the standard +1.", 4),
      ft("Magical Lore", "The tomb raider gains a +4 competence bonus when using Disable Device and Search to find and disarm magical traps.", 5),
    ].map((x) => x as FeatureDefinition),
  },
];
