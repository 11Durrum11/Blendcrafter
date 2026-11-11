import type {
  ClassLevelProgressionRow,
  FeatureDefinition,
  PrestigeClassDefinition,
} from "@/engine/types";

// Way of the Rogue — Chapter One of Traps & Treachery
// (Fantasy Flight Games, Legends & Lairs, 2001; the chapter
// identification is from the chapter's contents — Shaun's scan
// is the chapter alone, printed pp. 5-56, with no credits page).
// Prestige Classes, printed pp. 20-31: the section introduction
// (p. 20) promises "four new prestige classes." Transcribed
// from Shaun's own scanned copy (image-only; pages read
// visually, 2026-11-04; progression tables and the Trapmaster
// pages verified against a 250-DPI re-render). Summaries are
// short mechanical paraphrases in our own words; no book prose
// is reproduced. 3.0-era terminology is kept as printed.
//
// Id notes: "guildmaster" and "trapmaster" were already taken
// by Quintessential Rogue feats, so those two classes carry a
// wotr- prefix.
//
// Trapmaster Hit Die: the book prints NO Hit Die line for the
// Trapmaster anywhere in its entry (checked pp. 29-31 at 250
// DPI — the entry goes from flavor text straight to
// Requirements). The d6 below is supplied by analogy with the
// chapter's other rogue prestige classes and is an editorial
// supply, not a transcription.

const WOTR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/d20_dungeons_and_dragons_Way Of The Rogue.pdf";
const PC = "Way of the Rogue — Prestige Classes";

function rows(
  bab: number[],
  fort: number[],
  ref: number[],
  will: number[]
): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({
    level: i + 1,
    bab: b,
    fort: fort[i],
    ref: ref[i],
    will: will[i],
  }));
}

const HALF = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const GOOD = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const DC_REF = [1, 1, 2, 2, 3, 3, 4, 5, 5, 5];

function mk(source: string) {
  return function f(name: string, description: string): FeatureDefinition {
    const prefix = source
      .split("— ")
      .slice(1)
      .join("— ")
      .split(" (")[0]
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
    return {
      key:
        prefix +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: WOTR_PATH,
    };
  };
}

const fd = mk(`${PC} — Discreet Companion (pp. 20-23)`);
const fg = mk(`${PC} — Guildmaster (pp. 23-26)`);
const fr = mk(`${PC} — Roofrunner (pp. 26-29)`);
const ft = mk(`${PC} — Trapmaster (pp. 29-31)`);

export const WAY_OF_THE_ROGUE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "discreet-companion",
    name: "Discreet Companion",
    ruleset: "core",
    source: `${PC} — Discreet Companion (pp. 20-23)`,
    sourceUrl: WOTR_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, POOR, DC_REF, GOOD),
    classSkills: [
      "Bluff", "Diplomacy", "Disguise", "Forgery", "Gather Information",
       "Intimidate", "Listen", "Mimic Voice", "Perform",
      "Profession",  "Search", "Sense Motive", "Spot",
      "Urban Lore",
    ],
    prerequisites: [
      "Alignment: Any non-lawful",
      "Skills: Gather Information 10 ranks, Bluff 6 ranks, Diplomacy 8 ranks, Bluff 4 ranks, Perform 4 ranks, Profession (escort) 5 ranks",
      "Feats: Alertness, Skill Focus (Gather Information)",
      "Special: The character must have an established career or sideline in companionship-for-pay and the Profession skill associated with it",
      "Special Restriction: Members of the order must never reveal that the order exists, and must not become emotionally involved with a current 'partner'; members who violate these tenets are eliminated",
    ],
    features: [
      fd("Secret", "At 1st level and every three levels thereafter (4th, 7th, 10th), the companion learns one very important secret. (The class prints no separate weapon/armor proficiency feature.)"),
      fd("Resist Charm", "At 2nd level, the companion adds her positive Charisma modifier to all Will saves against Enchantment (Charm) spells and effects."),
      fd("Charmtouch", "At 10th level, the companion can charm by touch: after 10 minutes of close physical contact with a target, the target is charmed, with the companion's extraordinary performance as the vehicle. Uses per day equal the companion's Charisma bonus; a target may resist with a Will save (DC 10 + the companion's Charisma bonus)."),
      fd("Bonus Class Ability", "At 1st, 5th, and 10th level the companion may select one of the following bonus class abilities; she may also select one in place of a feat whenever she would normally be entitled to a feat. The options are Talkingtouch, Truthtouch, Paintouch, Magekiss, Siren's Song, and Caress of the Lost Hour, each detailed in its own entry."),
      fd("Talkingtouch (Bonus Class Ability Option)", "Prerequisite: Bluff +4. The companion can communicate through touch alone, using orchestrated muscle motions and body language to form words against a person she is touching, as long as contact is maintained. A Spot check (DC 27) is required to notice the contact as unusual."),
      fd("Truthtouch (Bonus Class Ability Option)", "Prerequisite: Sense Motive +4. By touch, the companion can tell whether the person touched is lying; flesh-to-flesh contact is required. The base check DC is 10 + the target's Wisdom bonus for familiar races, modified (cumulative as applicable): casual contact +2, close contact +0, intimate/prolonged contact -2 to -4, unfamiliar humanoid +2, non-humanoid +4, undead +4, outsider +6."),
      fd("Paintouch (Bonus Class Ability Option)", "Prerequisite: Dex 15+. The companion's unarmed strikes deal an additional +1d6 nonlethal damage. This works only against humanoid creatures."),
      fd("Magekiss (Bonus Class Ability Option)", "Printed in brackets as a [Metamagic Feat], but presented only as one of this class's selectable bonus abilities. Through five or more rounds of maintained flesh-to-flesh contact with an unresisting target, the companion can cast a spell requiring a Will save directly into the target; no verbal or somatic components are needed once contact is complete. The save DC increases by the caster's Charisma bonus, and by a further +2 if the target is willing."),
      fd("Siren's Song (Bonus Class Ability Option)", "The companion adds her discreet companion class levels to her bard levels for the purposes of the Perform skill. (The entry text refers to this option as 'this feat.')"),
      fd("Caress of the Lost Hour (Bonus Class Ability Option)", "Prerequisites: Dex 15+, Cha 15+, and the charmtouch ability. The companion can erase a victim's memory of up to one continuous hour spent in her company; the target resists with a Will save (DC 20 + the companion's Charisma bonus). This is an extraordinary ability."),
    ],
  },
  {
    id: "wotr-guildmaster",
    name: "Guildmaster",
    ruleset: "core",
    source: `${PC} — Guildmaster (pp. 23-26)`,
    sourceUrl: WOTR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, POOR, POOR, GOOD),
    classSkills: [
      "Appraise", "Bluff", "Craft", "Diplomacy", "Disable Device",
      "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide",
       "Intimidate", "Survival",
      "Knowledge (home city)", "Knowledge (other guilds)",
      "Knowledge (local powerbases)", "Listen", "Move Silently",
      "Open Lock", "Perform", "Sleight of Hand", "Profession", 
      "Search", "Sense Motive", "Spot", "Swim", "Urban Lore", "Use Rope",
    ],
    prerequisites: [
      "Alignment: Any non-good (usually lawful evil or neutral evil)",
      "Base Attack Bonus: +3",
      "Skills: Gather Information 10 ranks, Diplomacy 8 ranks, Intimidate 8 ranks, Disguise 4 ranks, Bluff 5 ranks",
      "Feats: Leadership, Skill Focus (Intimidate)",
      "Special: Sneak attack or backstab ability",
    ],
    features: [
      fg("Weapon and Armor Proficiency", "Guildmasters are proficient with the crossbow (hand, light), dagger, dart, light mace, sap, and short sword. Medium guildmasters are also proficient with the club, heavy mace, morningstar, quarterstaff, and rapier. They are proficient with light armor but not shields. Armor check penalties for armor heavier than leather apply to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble."),
      fg("Guild Hall", "From 1st level, the guildmaster's guild hall serves as the base for his organization (see the class text for the role of the hall in play)."),
      fg("Favor", "At 1st, 5th, and 10th level, the guildmaster gains a favor — a significant service owed him that he can call in. Each favor can be used once; favors accumulate if unspent, but no more than one favor may be called in per week."),
      fg("Reputation", "The guildmaster's Reputation modifier rises with level: +1 at 2nd, +2 at 4th, +3 at 6th, +4 at 8th, +5 at 10th. Reputation adds to his Leadership score (see DMG p. 45)."),
      fg("Respectable Citizen", "At 3rd level, the guildmaster maintains a cover identity as a respectable citizen. He can effectively make two Gather Information checks per day — one in his own persona and one in his cover identity."),
      fg("Just the Man for the Job", "At 5th level, once per month the guildmaster can recruit a specific hireling for a single task at normal hiring rates. The hireling is specified by an ability or a possession, not by class, level, hit points, or base attack bonus; the hireling's level cannot exceed the level of the best cohort the guildmaster's Leadership score would allow. This is not a summoning, and it cannot locate a specific known individual."),
      fg("Sneak Attack", "+1d6 at 4th level and +2d6 at 8th level. This damage stacks with sneak attack damage from the rogue class."),
      fg("Special Restrictions", "A guildmaster must maintain a guild: if his living followers fall below five, he becomes an ex-guildmaster. He must spend at least two full days per week on guild administration; for each week missed, he loses his class abilities for two weeks. More than six missed weeks in a year, or more than four weeks spent out of town, means the guild is taken over and he becomes an ex-guildmaster until he establishes himself in a new city."),
      fg("Ex-Guildmasters", "An ex-guildmaster loses all class abilities and cannot gain further levels in the class. Each guild he loses costs him a permanent -1 Reputation."),
    ],
  },
  {
    id: "roofrunner",
    name: "Roofrunner",
    ruleset: "core",
    source: `${PC} — Roofrunner (pp. 26-29)`,
    sourceUrl: WOTR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, POOR, GOOD, POOR),
    classSkills: [
      "Balance", "Bluff", "Climb", "Diplomacy", "Disable Device",
      "Disguise", "Escape Artist", "Gather Information", "Hide",
       "Survival", "Jump", "Move Silently", "Open Lock",
      "Profession", "Search", "Sense Motive", "Swim", "Tumble",
      "Urban Lore", "Use Rope",
    ],
    prerequisites: [
      "Alignment: Any",
      "Skills: Urban Lore 8 ranks, Knowledge (home city) 10 ranks, Climb 5 ranks, Balance 5 ranks, Jump 5 ranks, Move Silently 5 ranks, Gather Information 5 ranks",
      "Special: The character must have lived in the same city for 80% of the past five years; that city is his home city, and his class abilities function only there",
      "Special Restrictions: If the roofrunner is away from his home city for more than a week, he loses his special abilities for a number of days equal to half the time away; six such absences in a year bar him from gaining new levels until a year has passed",
    ],
    features: [
      fr("Weapon and Armor Proficiency", "Roofrunners are proficient with light armor and bucklers, and with the crossbow (hand, light), dagger, dart, light mace, sap, and short sword. Medium roofrunners are also proficient with the club, heavy mace, morningstar, quarterstaff, and rapier."),
      fr("Roofrunning (Ex)", "From 1st level, the roofrunner can travel at full speed across rooftops and similar urban heights; gaps of more than 10 feet require a Jump check."),
      fr("Neverlost (Ex)", "From 1st level, in his home city the roofrunner can determine his exact location with an Survival check (DC 10), provided he can hear or smell the outside."),
      fr("Find the Way (Ex)", "Once per day at 2nd level (twice per day at 6th, three times per day at 10th), the roofrunner can find a door, passage, or tunnel within 20 feet by making a Knowledge (home city) check (DC 25), adding his roofrunner levels to his ranks for the check."),
      fr("Home Turf (Ex)", "In his home city, the roofrunner gains a circumstance bonus to AC: +1 at 2nd level, +2 at 4th, +3 at 6th, +4 at 8th, +5 at 10th. The bonus applies only while he is no more than lightly encumbered."),
      fr("Sense the City's Soul (Ex)", "At 3rd level, once per week the roofrunner can make an Urban Lore check (DC 25), adding his class levels, to learn the significant events happening in his city; success grants a +2 synergy bonus to follow-up Gather Information checks on those events. He can also predict the next day's weather with 100% accuracy unless a supernatural power is involved, with a -10% chance of accuracy per additional day predicted."),
      fr("Safehouse", "At 5th level, the roofrunner gains a safehouse: a hidden room or alcove of less than 100 square feet within his home city, findable only by magic or by another roofrunner."),
      fr("Turn the Tables (Ex)", "At 7th level, when pursued through the streets of his home city, if the roofrunner can break his pursuers' line of sight for one round he can get behind them and gain a surprise round against them. His knowledge of the city's byways is intuitive: he cannot make maps or give directions from it."),
    ],
  },
  {
    id: "wotr-trapmaster",
    name: "Trapmaster",
    ruleset: "core",
    source: `${PC} — Trapmaster (pp. 29-31)`,
    sourceUrl: WOTR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, [0, 1, 1, 1, 1, 2, 2, 2, 3, 3], GOOD, [0, 1, 1, 1, 1, 2, 2, 2, 3, 3]),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Decipher Script",
      "Diplomacy", "Disable Device", "Disguise", "Escape Artist",
      "Forgery", "Gather Information", "Hide",  "Intimidate",
      "Survival", "Jump", "Listen", "Move Silently", "Open Lock",
      "Sleight of Hand", "Profession",  "Search", "Sense Motive",
      "Spot", "Swim", "Tumble", "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Alignment: Any non-chaotic",
      "Skills: Craft (trapmaking) 6 ranks, Disable Device 10 ranks",
      "Feats: Mechanical Aptitude",
      "Special: There can be only one trapmaster in a single thieves' guild",
    ],
    features: [
      ft("Hit Die (Not Printed)", "The book prints no Hit Die line for the trapmaster. The d6 in this record is supplied by analogy with the chapter's other rogue prestige classes; treat it as unverified."),
      ft("Weapon and Armor Proficiency", "Trapmasters are proficient with all weapons normally allowed to the rogue class: the crossbow (hand, light), dagger (any type), dart, light mace, sap, shortbow (normal and composite), and short sword. Medium trapmasters are also proficient with the club, heavy crossbow, heavy mace, morningstar, quarterstaff, and rapier. They are proficient with light armor but not with shields. Armor check penalties for armor heavier than leather apply to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble."),
      ft("Sneak Attack", "+1d6 at 1st level, increasing by +1d6 every three levels thereafter (+2d6 at 4th, +3d6 at 7th, +4d6 at 10th). Ranged sneak attacks work only within 30 feet, and the extra damage is not multiplied on a critical hit."),
      ft("Trapsmithing", "From 1st level, the trapmaster can improvise traps from materials on hand, on his person, or scrounged from the surroundings. Building one requires a Craft (trapmaking) check against DC 10 + the trap's CR and takes 10 minutes x the trap's CR; retries are allowed. The maximum CR of an improvised trap equals the trapmaster's class level."),
      ft("Trap Sense", "From 3rd level, when the trapmaster approaches within 10 feet of a trap, the DM makes his Spot check against the trap's Search DC; on a success he becomes aware of the trap exactly as if he had searched for and found it."),
      ft("Trap Resistance (Ex)", "From 2nd level, the trapmaster gains a natural bonus on all saving throws to avoid or resist trap effects: +1 at 2nd level, +2 at 4th, +3 at 6th, +4 at 8th, and +5 at 10th ('and so on' as printed)."),
      ft("Spells", "Beginning at 1st level, a trapmaster gains the ability to cast a small number of arcane and divine spells. To cast a spell, he must have an Intelligence score of 10 + the spell's level. Bonus spells are based on Intelligence, and save DCs are 10 + spell level + his Intelligence modifier. A trapmaster prepares and casts spells just as a wizard does. Spells per day (1st/2nd/3rd level spells) — 1st: none; 2nd: none; 3rd: 0/-/-; 4th: 1/-/-; 5th: 1/0/-; 6th: 1/1/-; 7th: 1/1/0; 8th: 1/1/1; 9th: 2/1/1; 10th: 2/2/1. A '0' means bonus spells only. Spell list — 1st level: animate rope, detect secret doors, feather fall, invisible object, jump, spider climb. 2nd level: cat's grace, darkvision, daylight, invisibility, knock, protection from arrows. 3rd level: dispel magic, wind wall, fly, gaseous form, haste, water breathing."),
    ],
  },
];
