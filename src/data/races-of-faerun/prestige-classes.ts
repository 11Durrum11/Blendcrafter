/**
 * Races of Faerun prestige classes: all nine from the appendix
 * (Tables A-6 through A-14, printed pp. 178–189) of Races of
 * Faerun (Wizards of the Coast, 2003). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Faerun.pdf
 * The book body has no prestige-class chapter; the appendix
 * section (headed "These prestige classes are available to any
 * character in Faerun who meets all the requirements") prints
 * battlerager, bladesinger, breachgnome, elven high mage, Great
 * Rift skyguard, orc warlord, spellsinger, warrior skald, and
 * warsling sniper. The runecaster mentioned in the gray dwarf
 * entry is NOT detailed in this book (narrative mentions only).
 *
 * Printed quirks kept as printed: the spellsinger's spellsong
 * saving throw DC is printed as "Cha modifier + the
 * enchantment's level + 2" with no base 10; the skyguard's
 * hippogriff steed III grants damage reduction 5/+2 (3.0-style
 * notation); Table A-9 (elven high mage) prints no base attack
 * or save columns at all — the class is an epic prestige class
 * built on Epic Level Handbook material, so its progression
 * rows below follow the epic attack/save bonus progressions
 * (+1 per two levels) that the book defers to.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EPIC = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5]; // epic attack/save bonus progression
const G5 = [2, 3, 3, 4, 4];
const P5 = [0, 0, 1, 1, 1];
const FULL5 = [1, 2, 3, 4, 5];
const TQ5 = [0, 1, 2, 3, 3];
const FULL6 = [1, 2, 3, 4, 5, 6];
const G6 = [2, 3, 3, 4, 4, 5];
const P6 = [0, 0, 1, 1, 1, 2];

const ROF = "Races of Faerun";
const ROF_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf";
const APX = `${ROF} — Appendix: Prestige Classes`;

export const RACES_OF_FAERUN_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "battlerager",
    name: "Battlerager",
    ruleset: "core",
    source: `${APX} — Battlerager (pp. 178–179; Table A-6, p. 179)`,
    sourceUrl: ROF_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Knowledge (religion)", "Listen", "Perform", "Ride", "Survival", "Tumble"],
    prerequisites: [
      "Race: Dwarf",
      "Alignment: Any nonlawful",
      "Base Attack Bonus: +5",
      "Skills: Intimidate 8 ranks, Knowledge (religion) 2 ranks, Perform (singing, any other) 2 ranks",
      "Feats: Cleave, Endurance, Power Attack",
      "Special: Ability to rage",
    ],
    features: [
      {
        key: "battlerager-rage",
        name: "Rage (Ex), Gruff (Ex), Rock Gut (Ex)",
        description:
          "Rage: at 1st, 3rd, and 5th level you gain another daily use of barbarian rage (greater rages if you have greater rage). Gruff: −4 penalty on Charisma ability checks and Charisma-based skill checks except Intimidate, and a +2 bonus on Intimidate checks. Rock Gut (1st): your racial bonus on saves against poison increases from +2 to +4.",
        category: "trait",
        source: `${APX} — Battlerager (p. 179)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "battlerager-feats",
        name: "Bonus Feats and Natural Armor (Ex)",
        description:
          "2nd: Close-Quarter Fighting as a bonus feat, and Fearless — immune to fear and similar effects, plus a +2 insight bonus on saves against mind-affecting spells and effects. 3rd: Improved Unarmed Strike as a bonus feat. 4th: Great Cleave and Reckless Offensive as bonus feats. 5th: +2 natural armor bonus from scarred, corded flesh.",
        category: "trait",
        source: `${APX} — Battlerager (p. 179)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "bladesinger-rof",
    name: "Bladesinger",
    ruleset: "core",
    source: `${APX} — Bladesinger (pp. 179–180; Table A-7, p. 180)`,
    sourceUrl: ROF_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL, P, G, G),
    classSkills: ["Balance", "Concentration", "Craft", "Jump", "Knowledge (arcana)", "Perform", "Spellcraft", "Tumble"],
    prerequisites: [
      "Race: Elf or half-elf",
      "Base Attack Bonus: +5",
      "Skills: Concentration 4 ranks, Perform 3 ranks (dance, sing, any other), Tumble 3 ranks",
      "Feats: Combat Casting, Dodge, Expertise, Still Spell, Weapon Focus (longsword) or Weapon Focus (rapier)",
      "Spellcasting: Ability to cast 1st-level arcane spells",
    ],
    features: [
      {
        key: "bladesinger-bladesong",
        name: "Bladesong (Ex) and Song Abilities",
        description:
          "While wielding a longsword or rapier in one hand (and nothing in the other): Bladesong — a dodge bonus to AC equal to your Intelligence bonus. Lesser Spellsong (3rd): take 10 on Concentration checks to cast defensively. Song of Celerity (6th, Su): on a full attack, cast one bladesinger spell (or arcane spell with a casting time of 1 action or less) each round as a free action. Greater Spellsong (7th): ignore arcane spell failure in light armor. Song of Fury (10th): on a full attack, make one extra attack at your highest base attack bonus; all attacks that round take a −2 penalty (including attacks of opportunity for 1 round). Wearing medium or heavy armor suspends all song abilities. Bonus feats at 2nd, 5th, and 8th level from: any metamagic feat, Combat Reflexes, Improved Critical (longsword), Improved Disarm, Mobility, Quick Draw, Spring Attack, Whirlwind Attack.",
        category: "trait",
        source: `${APX} — Bladesinger (pp. 179–180)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "bladesinger-spellcasting",
        name: "Spells per Day (own list)",
        description:
          "This is the 3.0-era original of the class; the revised 3.5 bladesinger from Complete Warrior is a separate record (\"bladesinger\") in this dataset, and this printing is kept alongside it as \"bladesinger-rof\". The bladesinger casts from her own spell list, preparing spells from a spellbook as a wizard does (Intelligence-based; caster level equals bladesinger level; two free spells added to the spellbook at each of levels 1–9). Spells per day by class level (1st/2nd/3rd/4th): 1st 1/—/—/—; 2nd 2/0/—/—; 3rd 2/1/—/—; 4th 3/2/0/—; 5th 3/2/1/—; 6th 3/3/2/0; 7th 4/3/2/1; 8th 4/3/3/2; 9th 4/4/3/2; 10th 4/4/3/3. Spell list — 1st: expeditious retreat, mage armor, magic weapon, shield, true strike. 2nd: blur, bull's strength, cat's grace, mirror image, protection from arrows. 3rd: displacement, greater magic weapon, haste, keen edge. 4th: dimension door, fire shield, improved invisibility, stoneskin.",
        category: "trait",
        source: `${APX} — Bladesinger (p. 180)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "breachgnome",
    name: "Breachgnome",
    ruleset: "core",
    source: `${APX} — Breachgnome (pp. 181–182; Table A-8, p. 181)`,
    sourceUrl: ROF_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL5, P5, G5, P5),
    classSkills: ["Bluff", "Climb", "Concentration", "Craft", "Handle Animal", "Hide", "Jump", "Listen", "Spot", "Swim"],
    prerequisites: [
      "Race: Gnome",
      "Alignment: Any nonchaotic",
      "Base Attack Bonus: +5",
      "Skills: Listen 5 ranks, Spot 5 ranks",
      "Feats: Combat Reflexes, Dodge, Improved Initiative",
    ],
    features: [
      {
        key: "breachgnome-seal-the-breach",
        name: "Seal the Breach (Ex)",
        description:
          "1st: while adjacent to a solid object of at least Medium size (tree, wall, pillar), gain a +2 dodge bonus to AC (+4 total if two such objects are on opposite sides of you). 3rd (stability): +4 bonus on attacks of opportunity against a creature entering your square (including a bull rush), +4 to resist a bull rush, and +4 to avoid a trip attack made as part of an overrun or to trip someone in response. 5th (safeguard): +4 bonus on attacks of opportunity against creatures moving within or through your threatened area, and Tumble checks to pass through your square or threatened area add +10 to their DC.",
        category: "trait",
        source: `${APX} — Breachgnome (pp. 181–182)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "breachgnome-uncanny-dodge",
        name: "Uncanny Dodge (Ex) and Bonus Feats",
        description:
          "2nd: uncanny dodge (retain Dexterity bonus to AC when flat-footed or struck by an invisible attacker). 5th: improved uncanny dodge (cannot be flanked except by a rogue at least four levels higher; stacks with uncanny dodge from other classes). Bonus feats at 2nd and 4th level from: Ambidexterity, Blind-Fight, Expertise, Improved Critical*, Improved Disarm, Improved Trip, Improved Two-Weapon Fighting, Two-Weapon Fighting, Weapon Finesse*, Weapon Focus*, Whirlwind Attack (*may be taken more than once, for a different weapon each time).",
        category: "trait",
        source: `${APX} — Breachgnome (p. 182)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "elven-high-mage",
    name: "Elven High Mage",
    ruleset: "core",
    source: `${APX} — Elven High Mage (pp. 182–183; Table A-9, p. 182)`,
    sourceUrl: ROF_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: [],
    progression: rows(EPIC, EPIC, EPIC, EPIC),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Diplomacy", "Knowledge", "Profession", "Sense Motive", "Speak Language", "Spellcraft"],
    prerequisites: [
      "Race: Sun elf, moon elf, or wood elf",
      "Skills: Knowledge (arcana) 25 ranks, Spellcraft 25 ranks",
      "Feats: Epic Skill Focus (Knowledge (arcana)), Epic Skill Focus (Spellcraft)",
      "Spellcasting: Able to cast 9th-level arcane spells",
      "Special: Must survive scrutiny and meet with the approval of all existing elven high mages",
    ],
    features: [
      {
        key: "elven-high-mage-epic",
        name: "Epic Prestige Class — Spells per Day",
        description:
          "An epic prestige class built on Epic Level Handbook material (any elven high mage is by definition an epic-level character). Table A-9 prints no base attack or save columns; the progression rows in this record follow the epic attack and save bonus progressions (+1 per two levels). At 1st, 3rd, 5th, 7th, and 9th level you gain new spells per day (and spells known, if applicable) as if you had gained a level in a prior spellcasting class; if already an epic spellcaster, you gain only the benefit noted under that epic class's Spells entry.",
        category: "trait",
        source: `${APX} — Elven High Mage (pp. 182–183)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "elven-high-mage-seed-affinity",
        name: "Seed Affinity (Ex), Mythal Invention (Ex), Bonus Feats",
        description:
          "Seed Affinity (1st, 3rd, 6th, 8th): choose an epic spell seed; the base Spellcraft DC for epic spells created with that seed is 2 lower. Mythal Invention (2nd, 4th, 7th, 9th): develop a single epic spell for 75% of the normal development cost in gold, time, and XP; an unused benefit is lost when the feature is attained again. Bonus epic feats at 5th and 10th level (and every five levels thereafter) from the class list printed in the book (Augmented Alchemy, Automatic Quicken/Silent/Still Spell, epic item creation feats, Epic Spellcasting, Improved Metamagic, Multispell, and others).",
        category: "trait",
        source: `${APX} — Elven High Mage (p. 183)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "great-rift-skyguard",
    name: "Great Rift Skyguard",
    ruleset: "core",
    source: `${APX} — Great Rift Skyguard (pp. 183–184; Table A-10, p. 183)`,
    sourceUrl: ROF_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: ["Climb", "Craft", "Handle Animal", "Heal", "Intimidate", "Jump", "Profession", "Ride", "Spot"],
    prerequisites: [
      "Race: Gold dwarf",
      "Skills: Handle Animal 4 ranks, Jump 4 ranks, Ride 8 ranks",
      "Feats: Mounted Combat, Toughness",
    ],
    features: [
      {
        key: "skyguard-axes-from-the-sky",
        name: "Axes from the Sky, Drogue Maneuvers",
        description:
          "Proficient with martial weapons, light and medium armor, and shields. Axes from the Sky: as a standard action, leap from the saddle, fall straight down, and deploy a drogue wing just before attacking — a charge attack dealing double damage with an additional +1 attack bonus for higher ground; you take no falling damage and land scattered randomly in a square adjacent to the target. Fly-By Attack (4th): after such a leap and a single attack, fly up to 50 feet away (at 5 feet altitude) before landing, without provoking an attack of opportunity from the target. Drogue Charge (6th): from the ground with an undeployed drogue wing, charge up and over a foe — a normal charge with the +1 higher-ground bonus, landing on the far side, provoking no attack of opportunity from the target even if it has reach. Glide for Distance (9th): with the wing deployed, travel up to 15 feet horizontally per 5 feet fallen, with good maneuverability (cannot climb; may dive as steeply as wished). Skyguard Catapult (10th): as a full-round action, the hippogriff swoops and you leap from the saddle without deploying the wing, falling any vertical distance and traveling up to 50 feet horizontally; on a successful melee touch attack you deal falling-object damage (DMG Table 3-18) to the target and take half damage from the fall yourself; on a miss you fall prone in an adjacent square.",
        category: "trait",
        source: `${APX} — Great Rift Skyguard (pp. 183–184)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "skyguard-hippogriff-steed",
        name: "Hippogriff Steed (Su) and Skyhook",
        description:
          "You may have only one hippogriff steed at a time (a replacement must be trained for a month before the bonuses are conferred). Steed I (2nd): the hippogriff has 5 Hit Dice, natural armor +6, Strength 19, Intelligence 6, and a telepathic link with you out to one mile (including the familiar-like connection to items and places). Skyhook (2nd): while you are on the ground, raise your shield as a free action and the hippogriff swoops down, grabs the shield mid-move as if it had Flyby Attack, and corkscrews so you end up back in the saddle; you provoke no attacks of opportunity (the hippogriff might). Steed II (5th): 7 Hit Dice, natural armor +8, Strength 20, Intelligence 7, a Large magical beast, fly speed 110 feet (good). Steed III (8th): 9 Hit Dice, natural armor +10, Strength 21, Intelligence 8, spell resistance 20, and damage reduction 5/+2 (as printed). Bonus mounted combat feats at 3rd and 7th level (any feat of your choice that has Mounted Combat as a prerequisite).",
        category: "trait",
        source: `${APX} — Great Rift Skyguard (pp. 183–184)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "orc-warlord",
    name: "Orc Warlord",
    ruleset: "core",
    source: `${APX} — Orc Warlord (pp. 184–185; Table A-11, p. 184)`,
    sourceUrl: ROF_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL5, G5, P5, G5),
    classSkills: ["Bluff", "Craft", "Intimidate", "Jump", "Listen", "Ride", "Sense Motive", "Spot", "Survival"],
    prerequisites: [
      "Race: Orc or half-orc",
      "Base Attack Bonus: +5",
      "Alignment: Any nongood",
      "Skills: Intimidate 8 ranks, Ride 5 ranks, Survival 5 ranks",
      "Feats: Blood of the Warlord or Might Makes Right, Leadership",
      "Special: Barbarian rage ability",
    ],
    features: [
      {
        key: "orc-warlord-gather-horde",
        name: "Gather Horde (Ex)",
        description:
          "Multiply the number of followers allowed by your Leadership score (DMG Table 2-25) by 150% at 1st level and by 200% at 3rd level; the additional forces gained this way must be orcs.",
        category: "trait",
        source: `${APX} — Orc Warlord (p. 185)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "orc-warlord-inspire",
        name: "Inspire Courage (Su) and Final Rage (Ex)",
        description:
          "Inspire Courage (2nd): as the bardic ability of the same name — an inspirational speech (a full round of speaking to affect allies) grants affected allies a +2 morale bonus on saves against charm and fear and a +1 morale bonus on attack and weapon damage rolls, lasting while you speak and for 5 rounds after; you may fight while speaking but cannot cast spells or activate spell-completion or command-word items, and a raging warlord's rant of howls and curses still works. Final Rage (5th): as a free action, all allies within 10 feet (including you) immediately enter a rage — or a greater rage if able or already raging — even if they could not normally rage or have used up their daily rages; it lasts until your next turn, and the usual penalties for leaving a rage apply (fatigued, or exhausted if already fatigued).",
        category: "trait",
        source: `${APX} — Orc Warlord (pp. 184–185)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "spellsinger",
    name: "Spellsinger",
    ruleset: "core",
    source: `${APX} — Spellsinger (pp. 185–186; Table A-12, p. 186)`,
    sourceUrl: ROF_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ5, P5, G5, G5),
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disguise", "Gather Information", "Knowledge", "Perform", "Profession", "Speak Language", "Spellcraft", "Use Magic Device"],
    prerequisites: [
      "Race: At least one-eighth elven blood",
      "Skills: Knowledge (arcana) 8 ranks, Perform 8 ranks (any hand instrument, singing, and others)",
      "Spellcasting: Ability to cast 1st-level arcane spells without preparation",
    ],
    features: [
      {
        key: "spellsinger-spellsong",
        name: "Spellsong (Su) and Bardic Music",
        description:
          "Bardic music: spellsinger levels stack with bard levels (or another class with the same ability) for bardic music use. Spellsong: convert a prepared arcane spell (or an unprepared caster's spell slot) into an arcane enchantment spell of equal or lower level from your own spell list, cast spontaneously as a cleric converts to cure spells. All spellsongs require singing and playing an instrument, which replace the spell's normal verbal, somatic, material, and focus components (but not XP costs or expensive material components). As printed, the saving throw DC for a spellsong is your Charisma modifier + the enchantment's level + 2, with no base 10. Spellcasting advances +1 level of an existing arcane spellcasting class at every spellsinger level.",
        category: "trait",
        source: `${APX} — Spellsinger (pp. 185–186)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "spellsinger-compelling-song",
        name: "Compelling Song (Su), Improved Countersong (Su), Amplified Music (Su)",
        description:
          "Compelling Song: add your class level to all Perform checks when using bardic music, and to the DCs of your bardic music fascinate and suggestion abilities. Improved Countersong (3rd): +10 bonus on Perform checks when attempting to countersong. Amplified Music (5th): increase the range of most bardic music effects (countersong, fascinate, inspire courage, inspire greatness) by 5 feet times your class level; the increase is tripled for fascinate.",
        category: "trait",
        source: `${APX} — Spellsinger (p. 186)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "warrior-skald",
    name: "Warrior Skald",
    ruleset: "core",
    source: `${APX} — Warrior Skald (pp. 187–188; Table A-13, p. 187)`,
    sourceUrl: ROF_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: ["Bluff", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist", "Hide", "Jump", "Listen", "Move Silently", "Perform", "Profession", "Sense Motive", "Speak Language", "Swim"],
    prerequisites: [
      "Skills: Concentration 6 ranks, Perform 9 ranks (poetry, any others)",
      "Feats: Power Attack, Cleave",
    ],
    features: [
      {
        key: "warrior-skald-bardic-music",
        name: "Bardic Music",
        description:
          "Proficient with martial weapons, armor, and shields. At 1st level you gain the bardic music ability if you did not already have it, and all bardic music effects (countersong, fascinate, inspire competence, inspire courage, inspire greatness, suggestion) become available immediately, subject to their usual Perform requirements; all effects, including countersong, can be produced with poetry rather than music. Suggestion requires no daily use but the subject must first be fascinated; the other effects each cost one daily use. Your bard and warrior skald levels combine to determine daily uses of bardic music.",
        category: "trait",
        source: `${APX} — Warrior Skald (pp. 187–188)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "warrior-skald-words",
        name: "Words of Power (Su)",
        description:
          "Words of Rejuvenation (2nd): allies who hear you speak for a minute shake off fatigue (exhausted characters become merely fatigued); once per hour, language-dependent, one daily use of bardic music. Demoralize (3rd): opponents within 20 feet who hear your epic oratory for a full round must make a Will save (DC 10 + warrior skald levels + Cha bonus) or be shaken (−2 morale penalty on attacks, damage, and saves) while you recite and for 5 rounds thereafter; mind-affecting, language-dependent, one daily use. Marcher's Chant (5th): those within earshot can march or exert themselves 50% longer before making Constitution checks for a forced march, as long as you chant at least half the time. Inspire Heroism (6th; requires 15+ Perform ranks): one willing ally within 30 feet who hears a full round of poetry gains a +4 morale bonus on attack rolls, weapon damage rolls, and saving throws and a +4 dodge bonus to AC while you recite and for up to 5 rounds thereafter; one additional creature per three levels beyond 6th; one daily use. Words of Fear (7th): as demoralize, but opponents are frightened; three daily uses. Words of Panic (9th): as demoralize, but opponents are panicked; three daily uses. Words of Fury (10th; requires 19+ Perform ranks): enrage all willing allies within 20 feet exactly as barbarian rage, lasting while you perform; three daily uses of bardic music per round maintained.",
        category: "trait",
        source: `${APX} — Warrior Skald (pp. 187–188)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "warsling-sniper",
    name: "Warsling Sniper",
    ruleset: "core",
    source: `${APX} — Warsling Sniper (pp. 188–189; Table A-14, p. 188)`,
    sourceUrl: ROF_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL6, P6, G6, P6),
    classSkills: ["Climb", "Craft", "Hide", "Listen", "Move Silently", "Profession", "Sense Motive", "Spot"],
    prerequisites: [
      "Race: Halfling",
      "Base Attack Bonus: +5",
      "Skills: Craft (weaponsmith) 3 ranks, Hide 4 ranks, Spot 6 ranks",
      "Feats: Exotic Weapon Proficiency (halfling warsling), Exotic Weapon Proficiency (skiprock), Point Blank Shot, Precise Shot",
    ],
    features: [
      {
        key: "warsling-sniper-sneak-attack",
        name: "Warsling Sneak Attack (Ex)",
        description:
          "Your ranged sneak attack with the warsling deals +1d6 extra damage at 1st level, +2d6 at 3rd, and +3d6 at 5th, whenever the target would be denied his Dexterity bonus to AC; ranged attacks count only within 30 feet. Otherwise identical to the rogue's sneak attack, and it stacks with sneak attack from other classes.",
        category: "trait",
        source: `${APX} — Warsling Sniper (p. 189)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "warsling-sniper-vision",
        name: "Sniper's Vision (Ex), Improved Critical (Ex), Improved Ricochet (Ex)",
        description:
          "Sniper's Vision (2nd): +2 bonus on sling attacks against targets with some degree of cover (effectively reducing the cover benefit), and if you miss a target due to concealment you may reroll the miss chance percentile roll. (The book's text says \"skiprock sniper\" once in this entry — a printing slip for warsling sniper.) Improved Critical (4th): Improved Critical (halfling warsling) as a bonus feat. Improved Ricochet (6th): when you bounce a skiprock off one target to hit another, the second attack roll is made without the normal −2 penalty; once per round.",
        category: "trait",
        source: `${APX} — Warsling Sniper (p. 189)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
];
