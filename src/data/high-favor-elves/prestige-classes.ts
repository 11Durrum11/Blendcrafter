import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Heroes of High Favor: Elves (Bad Axe Games, 2002; second
// printing 2005) prestige classes, printed pp. 22-61,
// transcribed in full — progression tables included — from
// Shaun's own copy (the copy has a text layer; every
// progression table was verified against a page render,
// 2026-11-05). The chapter presents ten prestige classes,
// one for each iconic multiclass combination with the
// elves' favored class, wizard. This is a 3.0-era book:
// entries are transcribed as printed, including 3.0 skills
// that 3.5 later folded into other skills (Animal Empathy,
// Intuit Direction, Pick Pocket, Scry, Wilderness Lore)
// and 3.0 forms such as "spellcaster level" and partial
// actions (flagged in the manifest, not modernized).
// Ley lines and power nexuses are the Chapter 3 rules the
// ley runner and wayshepherd features refer back to; those
// rules are campaign material, not class records.
// One internal inconsistency is transcribed as printed in
// both places: the exemplar's Divine Arcana text says
// "beginning at 3rd level" while Table 7 lists the ability
// at 4th level (noted in the feature itself and in the
// manifest). Summaries are short mechanical paraphrases in
// our own words; no book prose is reproduced.

const HOFE = "Heroes of High Favor: Elves";
const HOFE_PATH = "/A POC DM related/Desktop/Sourcebooks/Heroes Of High Favor. Elves.pdf";
const LR = `${HOFE} — Ley Runner`;
const AN = `${HOFE} — Arcanologist`;
const GT = `${HOFE} — Grand Theurgist`;
const WS = `${HOFE} — Wayshepherd`;
const VW = `${HOFE} — Veteran Wizard`;
const SG = `${HOFE} — Seneschal of the Great Library`;
const EX = `${HOFE} — Exemplar`;
const SS = `${HOFE} — Spell-shikar`;
const AC = `${HOFE} — Anarcanist`;
const OS = `${HOFE} — Outcast Specialist`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string, source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: HOFE_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const flr = mk("ley-runner", LR);
const fan = mk("arcanologist", AN);
const fgt = mk("grand-theurgist", GT);
const fws = mk("wayshepherd", WS);
const fvw = mk("veteran-wizard", VW);
const fsg = mk("seneschal-of-the-great-library", SG);
const fex = mk("exemplar", EX);
const fss = mk("spell-shikar", SS);
const fac = mk("anarcanist", AC);
const fos = mk("outcast-specialist", OS);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

export const HOFE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "ley-runner",
    name: "Ley Runner",
    ruleset: "core",
    source: `${LR} (pp. 22-25)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ10, POOR10, GOOD10, GOOD10),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Handle Animal", "Hide", "Intimidate", "Survival", "Jump", "Knowledge (arcana)", "Listen", "Move Silently", "Spellcraft", "Spot", "Swim", "Tumble", ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Concentration 5 ranks",
      "Skills: Survival 5 ranks",
      "Skills: Knowledge (arcana) 8 ranks",
      "Skills: Knowledge (elves) 8 ranks",
      "Skills: Spellcraft 5 ranks",
      "Skills: Survival 5 ranks",
      "Feats: Endurance, Run",
      "Special: base movement 40 or better; ability to cast 2nd level arcane spells including bull's strength, cat's grace, and endurance",
    ],
    features: [
      flr("Ley Runner Proficiencies", "Wizard-barbarian prestige class — the elven ley runner, who attunes his wild emotions to the intersecting mystic ley lines and channels their eldritch might into himself. Proficient with all simple and martial weapons, with light armor, and shields.", undefined),
      flr("Spellcasting", "The ley runner continues to advance in spellcasting ability, albeit at a slower rate: add one-half his ley runner class level to his previous arcane spellcaster levels to determine spells per day, spells known, and spellcaster level. He does not gain any other ability a character of his previous class would have gained.", 1),
      flr("Ley Running (Su)", "A ley runner who is anchored to a ley line may run as a full-round action: provided he takes no other action other than movement, he can maintain his anchor while moving without requiring a skill check (see Chapter 3). His running speed while anchored is increased to 10x his normal movement rate. The ley runner may use this ability only when wearing light or no armor.", 1),
      flr("Ley Mastery", "Beginning at 2nd level, a ley runner who fails his Knowledge (arcana) check to anchor to a ley line may reroll his check. He must accept the result of the second roll.", 2),
      flr("Rage", "The ley runner can rage, as the barbarian ability of the same name (1/day at 2nd level, 2/day at 6th level, 3/day at 10th level). If the ley runner has the rage ability from a previous class, add his number of ley runner rages/day to his previous number of rages/day. The ley runner cannot anchor or maintain an anchor to a ley line while raging.", 2),
      flr("Celerity (Su)", "A ley runner who is anchored to a ley line may expend one of his daily rage attempts to activate his celerity ability instead of the usual barbarian rage: he gains +4 Dexterity, evasion, and an additional move action each round for a number of rounds equal to his caster level. This ability supersedes (does not stack with) haste or any other ability that grants additional actions. When the celerity expires, the character is fatigued in the same fashion as a barbarian rage; unlike a barbarian rage, celerity does not interfere with the ley runner's ability to concentrate, including using certain skills, casting spells, anchoring, or maintaining an anchor to a ley line. At 8th level the celerity ability improves, granting him +6 Dexterity, improved evasion, and an additional standard action each round. At 10th level the ley runner is no longer fatigued when his celerity expires. The ley runner may use this ability only when wearing light or no armor.", 2),
      flr("Uncanny Dodge", "At 3rd level the ley runner gains the uncanny dodge ability, as the barbarian ability of the same name. If he has this ability from a previous class, add his ley runner class levels to his previous class levels and determine his uncanny dodge ability on that basis. At 6th level, the ley runner's uncanny dodge ability improves such that he can no longer be flanked.", 3),
    ],
  },
  {
    id: "arcanologist",
    name: "Arcanologist",
    ruleset: "core",
    source: `${AN} (pp. 26-29)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF10, POOR10, GOOD10, GOOD10),
    classSkills: ["Craft (alchemy)", "Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Survival", "Jump", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (nature)", "Knowledge (all skills)", "Listen", "Move Silently", "Perform", "Sleight of Hand", "Profession",  "Search", "Sense Motive", "Speak Language", "Spellcraft", "Swim", "Tumble", "Use Magic Device"],
    prerequisites: [
      "Skills: Appraise 5 ranks",
      "Skills: Decipher Script 5 ranks",
      "Skills: Gather Information 5 ranks",
      "Skills: Knowledge (arcana) 9 ranks",
      "Skills: Speak Language (draconic)",
      "Skills: Spellcraft 9 ranks",
      "Skills: Use Magic Device 5 ranks",
      "Special: ability to cast 2nd level arcane spells",
    ],
    features: [
      fan("Arcanologist Proficiencies", "Wizard-bard prestige class — the arcanologist, who searches the great libraries for clues to deposits of forgotten arcana, seeks them out, and returns them to the safekeeping of the elven nations. The arcanologist gains no new proficiency with weapons or armor.", undefined),
      fan("Spellcasting", "The arcanologist advances in spellcasting ability as a bard: add her arcanologist class level to any previous bard levels and determine her spells per day and spells known on that basis. In addition, the arcanologist has some formal training and spends a great deal of time poring over lost and forgotten spellbooks: if she is capable of arcane spell preparation and maintains a personal spellbook for that purpose, she may prepare wizard/sorcerer spells from her spellbook into any of her available daily spell slots; wizard/sorcerer spells prepared in this way occupy a spell slot according to their level as wizard/sorcerer spells, but are otherwise cast as bard spells.", 1),
      fan("Bardic Knowledge", "The arcanologist continues to advance the bardic knowledge class ability of bards: add her arcanologist class level to any previous bard levels and determine her bardic knowledge bonus on that basis.", 1),
      fan("Magic Device Mastery", "The arcanologist is highly trained to discover the inner workings of magic items, to release and control their effects. Beginning at 2nd level the arcanologist may add her Intelligence modifier as an additional bonus to all Use Magic Device checks. In addition, if she has previously succeeded at a bardic knowledge check for the device in question, she receives a +2 circumstance bonus.", 2),
      fan("Bonus Spell", "The arcanologist slowly adds a few extra spells to her repertoire to further assist her in locating, identifying, or recovering magic items. At 2nd level and every other level thereafter (4th, 6th, 8th, 10th), the arcanologist receives a bonus spell to her list of bard spells known, including some spells that do not normally appear on her class spell list, chosen from the following list: detect poison, erase, identify, Nystul's magic aura, Nystul's undetectable aura, find traps, locate object, obscure object, contact other plane, analyze dweomer, legend lore.", 2),
      fan("Sense Magic (Sp)", "At 3rd level the arcanologist gains the spell-like ability to detect magic in an item simply by handling it and inspecting its aura. She may use this ability at will. The arcanologist must study the aura over several rounds, as listed in the spell description, in order to gain full knowledge of the item. She must also touch the item, potentially exposing herself to curses or any other ill-effects the item may carry.", 3),
      fan("Arcane Shadow (Su)", "The arcanologist often has to hide her activities from others, especially other spellcasters whose magic items she may be recovering. Beginning at 5th level, add the arcanologist's class level to the DC of any d20 check to scry her, her location, or an object in her possession.", 5),
      fan("Traps", "Beginning at 7th level the arcanologist is able to use her Search and Disable Device skills to find and remove traps as a rogue.", 7),
      fan("Spell Resistance", "At 10th level the arcanologist gains spell resistance equal to 20 + her Wisdom modifier.", 10),
    ],
  },
  {
    id: "grand-theurgist",
    name: "Grand Theurgist",
    ruleset: "core",
    source: `${GT} (pp. 30-33)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF10, GOOD10, POOR10, GOOD10),
    classSkills: ["Craft (alchemy)", "Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (all skills)", "Profession",  "Spellcraft"],
    prerequisites: [
      "Skills: Concentration 8 ranks",
      "Skills: Knowledge (arcana) 8 ranks",
      "Skills: Knowledge (elves) 8 ranks",
      "Skills: Knowledge (religion) 8 ranks",
      "Skills: Spellcraft 8 ranks",
      "Special: elven patron deity; access to Magic domain; ability to cast both arcane and divine spells of 2nd level or higher",
    ],
    features: [
      fgt("Grand Theurgist Proficiencies", "Wizard-cleric prestige class — the grand theurgist, an elven priest gifted at bending magic to intermingle with the strength of his faith. Proficient with all simple weapons, with light and medium armor, and with shields.", undefined),
      fgt("Spellcasting", "The grand theurgist continues to advance in spellcasting ability: he gains an additional caster level at each level, advancing in either arcane or divine spellcasting ability and combining with any arcane or divine spellcasting ability he may have from a previous class. He gains additional spells known and spells per day, but he does not gain any other ability a character of his previous class would have gained (turn undead, improved familiar, etc.). For example, a cleric 3/wizard 3 who gains a level as a grand theurgist might increase his cleric caster level to 4th, casting spells as a cleric 4/wizard 3; at his next grand theurgist level he could instead increase his wizard caster level to 4th.", 1),
      fgt("Turn Undead (Su)", "At 1st level, the grand theurgist gains the turn undead ability of a cleric: add +1 to his effective cleric level when turning undead. He may turn undead a number of times per day equal to 3 + his Cha modifier, unless he already has this ability, in which case he may turn undead an additional time each day. At 4th, 7th, and 10th level, his ability to turn undead improves by +1 effective level, and he gains one additional turning attempt per day.", 1),
      fgt("Divine Inspiration (Su)", "The grand theurgist may call upon the gods to enhance his spellcasting. As a free action, he can expend one of his daily turning attempts to increase his spellcasting ability for the current round: for all level-dependent effects of the next divine spell he casts, the grand theurgist may add his class levels to any previous divine caster levels he may have from other classes, and determine the effect of the spell based on the improved caster level. This increase in caster level only affects level-dependent effects of the spell being cast; it does not grant access to new spell levels. At 10th level the grand theurgist may use this ability when casting arcane spells, adding his class levels to any previous arcane caster levels and determining the effect of the spell based on the improved caster level.", 2),
      fgt("Extended Domain", "The grand theurgist may prepare any arcane spell he knows as a domain spell. Arcane spells prepared as domain spells are cast as a cleric, using his Wisdom attribute and his cleric caster level. As the source of these spells is divine, there is no chance for arcane spellcasting failure when casting these spells.", 2),
      fgt("Familiar", "The grand theurgist may call for a familiar. Beginning at 3rd level, the character adds half his grand theurgist class level (round down) to any previous master class levels and determines his familiar's special abilities according to PHB Table 3-19. At 6th level the grand theurgist's familiar is infused with divine power: the creature gains either the celestial or fiendish template (according to the alignment of the character).", 3),
      fgt("Bonus Feat", "The grand theurgist gains a bonus Metamagic, Item Creation, or Arcane feat (see Chapter 2) at 5th level and again at 9th level.", 5),
    ],
  },
  {
    id: "wayshepherd",
    name: "Wayshepherd",
    ruleset: "core",
    source: `${WS} (pp. 34-37)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: ["Craft (alchemy)",  "Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Survival", "Knowledge (arcana)", "Knowledge (nature)", "Profession",  "Spellcraft", "Swim", ],
    prerequisites: [
      "Skills: Handle Animal 5 ranks",
      "Skills: Craft (any) 5 ranks",
      "Skills: Knowledge (arcana) 8 ranks",
      "Skills: Knowledge (nature) 8 ranks",
      "Skills: Spellcraft 5 ranks",
      "Feats: Create Power Nexus; Favored Terrain (any); any two Arcane, Item Creation, or Metamagic feats",
      "Special: ability to cast 1st level arcane spells",
    ],
    features: [
      fws("Wayshepherd Proficiencies", "Wizard-druid prestige class — the wayshepherd, who retains an equal connection to both magic and nature and draws power from the natural world to augment both her druidic and eldritch spellcasting. The wayshepherd gains no new proficiency with armor or weapons.", undefined),
      fws("Spellcasting", "The wayshepherd continues to advance in spellcasting ability, though at a slightly reduced rate. At 1st level and each level marked “+1 spellcasting” in Table 4 (2nd, 4th, 5th, 7th, 8th, and 10th) the character gains a full arcane spellcaster level, including spells per day, spells known, and caster level. These levels stack with any previous arcane spellcaster levels, but she does not gain any other ability a character of her previous class would have gained.", 1),
      fws("Animal Companions", "The wayshepherd may be accompanied by animal companions, as a druid: she may add her wayshepherd class level to any previous druid levels to determine the maximum HD of her animal companions. The wayshepherd may designate one of her animal companions as her familiar (if she does not already have a familiar): add her wayshepherd class level to any previous master class level and determine the familiar's abilities according to PHB Table 3-19.", 1),
      fws("Home Nexus", "At 2nd level the wayshepherd may establish a home nexus by creating a power nexus within her favored terrain (see Chapter 3). She must act alone to craft and create the focal point and the nexus. Once created, the wayshepherd adds her class level to all nexus-related skill checks (anchoring, etc.) when using her home nexus. Although the wayshepherd may create additional power nexuses, she may only have one home nexus.", 2),
      fws("Nexus Guardians", "The wayshepherd can retain additional animal companions specifically to protect her home nexus: she may attract additional animal companions with total HD equal to the rating of the power nexus. These companions cannot leave the radius of effect of the power nexus. As long as they are within range, they do not need food, water, or sleep. Furthermore, while the wayshepherd is anchored to her home nexus, she may treat any of her nexus guardians as familiars, and gains the following abilities from the “Special” column as well: Alertness, share spells, empathic link, and touch. All range restrictions for these abilities apply as normal.", 3),
      fws("Arcane Guardians", "Beginning at 6th level, the character's nexus guardians begin to draw more power from the nexus: the animals gain natural armor and Intelligence as if they were familiars, according to PHB Table 3-19. Use the rating of the nexus to determine the master class level and the following abilities from the “Special” column: improved evasion, speak with master, speak with animals, spell resistance, and scry on familiar. If the nexus rating increases, so too will the guardians' abilities. At 10th level the range of alertness, share spells, and touch is extended to a radius of one mile per rating of the home nexus: if the wayshepherd is anchored to her home nexus, she could cast a Touch spell and designate any of her nexus guardians within range as the “toucher.”", 6),
      fws("Protector of the Wilds", "At 9th level, as long as she is travelling in her favored terrain, the wayshepherd is considered to be in her home territory; thus, she may always travel with the optimal complement of animal companions (i.e., twice her level in HD). If the character spends an extended time away from her favored terrain, the excess animal companions will start to wander away and desert her as normal, as indicated in the DMG.", 9),
    ],
  },
  {
    id: "veteran-wizard",
    name: "Veteran Wizard",
    ruleset: "core",
    source: `${VW} (pp. 38-41)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: ["Craft (alchemy)", "Climb", "Concentration", "Craft", "Handle Animal", "Jump", "Knowledge (arcana)", "Knowledge (all skills)", "Profession", "Ride",  "Spellcraft", "Swim"],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Concentration 5 ranks",
      "Skills: Knowledge (arcana) 5 ranks",
      "Skills: Knowledge (elves) 5 ranks",
      "Skills: Spellcraft 5 ranks",
      "Feats: Combat Casting, Weapon Focus (longsword or rapier), Weapon Focus (any bow)",
      "Special: ability to prepare 1st level arcane spells",
      "Note: if you are using the Favored Terrain feat from Chapter 2, you may select thematically appropriate weapons for your Weapon Focus prerequisites",
    ],
    features: [
      fvw("Veteran Wizard Proficiencies", "Wizard-fighter prestige class — the veteran wizard, who answers the call to arms with both sword and wand in the defense of the elven nations. Proficient with all simple and martial weapons, and with light and medium armor.", undefined),
      fvw("Spellcasting", "The veteran wizard continues to advance in spellcasting ability, albeit at a slower rate: add half his veteran wizard class levels to any previous arcane spellcasting class and determine his spells per day, spells known, and spellcaster level on that basis.", 1),
      fvw("Armor Mastery", "The veteran wizard is able to ignore the arcane spell failure penalty while wearing armor. At 1st level he gains the ability to cast 1st level arcane spells while wearing light armor, with no chance of arcane spell failure. At 4th level he gains the ability to cast up to 3rd level arcane spells in light armor. At 7th level he gains the ability to cast up to 3rd level arcane spells while wearing light or medium armor. At 10th level he gains the ability to cast up to 5th level spells while wearing light armor, up to 3rd level spells while wearing medium armor, or up to 1st level spells while wearing heavy armor. The veteran wizard cannot ignore the arcane spell failure for using shields.", 1),
      fvw("Girding Spell", "Beginning at 2nd level, the veteran wizard may choose the special Girding Spell feat exclusive to their class (see the Girding Spell feat in this book, printed with this class on p. 41).", 2),
      fvw("Bonus Feat", "At 2nd, 6th, and 10th levels, the veteran wizard gains a bonus feat. This feat must be a Metamagic feat, a bonus Fighter feat, an Arcane feat (see Chapter 2), or the veteran wizard's special feat Girding Spell.", 2),
      fvw("Weapon Specialization", "At 9th level the veteran wizard gains Weapon Specialization as a bonus feat. The weapon chosen must be the longsword, the rapier, or any bow. The character must meet the Weapon Focus prerequisite as normal. (Note: If you are using the Favored Terrain feat from Chapter 2, you may select thematically appropriate weapons for your bonus Weapon Specialization.)", 9),
    ],
  },
  {
    id: "seneschal-of-the-great-library",
    name: "Seneschal of the Great Library",
    ruleset: "core",
    source: `${SG} (pp. 42-45)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ10, GOOD10, GOOD10, GOOD10),
    classSkills: ["Craft (alchemy)", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Forgery", "Heal", "Hide", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (nature)", "Knowledge (all skills)", "Listen", "Move Silently", "Profession",  "Speak Language", "Spellcraft"],
    prerequisites: [
      "Base attack bonus +4",
      "Skills: Concentration 4 ranks",
      "Skills: Decipher Script 4 ranks",
      "Skills: Knowledge (arcana) 8 ranks",
      "Skills: Knowledge (elves) 8 ranks",
      "Skills: Spellcraft 4 ranks",
      "Feats: Improved Unarmed Strike, Scribe Scroll, Spell Mastery, Stunning Fist",
    ],
    features: [
      fsg("Seneschal Proficiencies", "Wizard-monk prestige class — the Seneschal of the Great Library, an empowered monk of the order that devotes its life to the preservation, protection, and expansion of the elves' grand collections of mystic and mundane lore. The seneschal does not gain any new proficiency with weapons or armor.", undefined),
      fsg("Spellcasting", "A Seneschal of the Great Library continues to advance in spellcasting ability, albeit at a slower rate: the character adds half his seneschal class levels to any previous arcane spellcaster levels to determine spells per day, spells known, and spellcaster level. He does not gain any other ability a character of his previous class would have gained.", 1),
      fsg("Spell Restrictions", "The seneschal is prohibited from casting any spell with an energy subtype (acid, fire, cold, electricity, sonic) unless the spell has a range of Touch. This prohibition extends to the use of any spell trigger or spell completion items (scrolls, wands, etc.).", 1),
      fsg("Monk Abilities", "The seneschal advances in the unarmed fighting techniques of the monk: add his seneschal class levels to any monk levels to determine unarmed BAB, damage, AC bonus, and unarmored speed (see PHB Table 3-10). He also gains a Wisdom bonus to AC. In addition, the seneschal may attack with a flurry of blows, as the monk ability of the same name.", 1),
      fsg("Arcane Memory", "The seneschal can commit scrolls to memory in order to hide them or protect them from loss: he can commit a number of scrolls to memory equal to his Intelligence modifier. This process 'erases' the scroll and transfers the magic to the seneschal. Thereafter, the seneschal can either cast the spell (thus 'erasing' it from memory) or scribe it back onto a scroll; scribing the spell back onto a scroll takes one day per spell. At 6th level and again at 10th level, the seneschal is able to commit one additional scroll to memory.", 2),
      fsg("Evasion", "At 2nd level the seneschal gains the evasion ability of the monk. At 8th level he gains improved evasion.", 2),
      fsg("Scroll Mastery", "The seneschal adds his class level to all caster level checks when activating spells from scrolls.", 2),
      fsg("Flurry Casting", "At 3rd level the seneschal may combine the casting of any Touch spell with a flurry of blows. Instead of gaining an additional attack, the seneschal may cast any Touch spell whose casting time is 1 action or less, as a free action. The character may then make his normal iterative attacks, though all attacks in the round suffer a -2 penalty as if he had used the flurry of blows action.", 3),
      fsg("Still Mind", "At 3rd level the seneschal gains the still mind ability of the monk.", 3),
      fsg("Bonus Feat", "At 4th, 6th, and 9th level, the seneschal gains a bonus feat chosen from the following list: Combat Casting, Deflect Arrows, Dodge, Expertise, Improved Trip, Weapon Finesse (unarmed), Weapon Focus (unarmed).", 4),
      fsg("Wholeness of Body", "At 5th level the seneschal gains the wholeness of body ability of the monk.", 5),
      fsg("Mind over Body", "At 7th level the seneschal no longer requires food, drink, or sleep. Note that he must still rest quietly for 8 hours in order to prepare arcane spells.", 7),
      fsg("Diamond Soul", "At 10th level the seneschal gains the diamond soul ability of the monk.", 10),
    ],
  },
  {
    id: "exemplar-elves",
    name: "Exemplar",
    ruleset: "core",
    source: `${EX} (pp. 46-49)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL10, GOOD10, POOR10, GOOD10),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (arcana)", "Knowledge (religion)", "Ride",  "Spellcraft"],
    prerequisites: [
      "Alignment: any good",
      "Base attack bonus +5",
      "Skills: Handle Animal 4 ranks",
      "Skills: Knowledge (arcana) 4 ranks",
      "Skills: Knowledge (elves) 4 ranks",
      "Skills: Knowledge (religion) 7 ranks",
      "Skills: Ride 7 ranks",
      "Feats: Mounted Combat, Spell Mastery",
    ],
    features: [
      fex("Exemplar Proficiencies", "Wizard-paladin prestige class — the exemplar, who must master the sword, the bow, and the arcane spell to prove himself worthy of defending the bodies, souls, and beliefs of his people. Proficient with all simple and martial weapons, with all armor, and shields.", undefined),
      fex("Spellcasting", "The exemplar casts spells as a paladin. Add his exemplar class levels to any previous paladin class levels and determine his spellcasting ability according to PHB Table 3-12. His caster level is equal to one-half the sum of his exemplar class levels and any previous paladin levels.", 1),
      fex("Granted Powers", "As an agent of the elven deities, the exemplar receives many of the same granted powers as a paladin. At 1st level the exemplar gains detect evil, lay on hands, and divine grace. At 2nd level he gains aura of courage and smite evil. His exemplar levels stack with any previous paladin levels for determining the effects of these abilities.", 1),
      fex("Aura of Vigilance", "At 2nd level the exemplar receives a +2 morale bonus to saves vs. mind-affecting enchantment spells. (This bonus stacks with his elven racial bonus.) In addition, the exemplar projects this aura to all allies within 10 feet, granting them the same bonus.", 2),
      fex("Special Mount", "The exemplar may call for a special mount, as the paladin ability of the same name. Add his exemplar class levels to any paladin levels and determine his mount's ability on that basis.", 2),
      fex("Arcane Healing (Su)", "The exemplar can convert arcane spells into divine healing, administered through his lay on hands ability. The target is healed an amount equal to the exemplar's Cha modifier multiplied by the level of the converted spell.", 3),
      fex("Detect Magic (Sp)", "At 3rd level the exemplar can detect magic as a spell-like ability.", 3),
      fex("Divine Arcana", "The exemplar is able to prepare arcane spells as divine spells: he may prepare any spell he has mastered through Spell Mastery as a divine spell. This takes the place of one of his daily paladin spell slots of the spell's normal level. Because the spell is granted by his patron deity and prepared as a divine spell, there is no chance of arcane spell failure when casting this spell while wearing armor. (Table 7 lists this ability at 4th level; the feature text says \"beginning at 3rd level.\" Both are transcribed as printed.)", 4),
      fex("Bonded Mount", "At 5th level, if the exemplar does not already have a familiar, he may bond his special mount as his familiar. Add the exemplar's class level to any previous master levels and determine his mount's additional abilities according to PHB Table 3-19. The abilities do not stack; where abilities granted are identical (natural armor, Intelligence, spell resistance, etc.) the information presented on the paladin's special mount table takes precedence over the information on the familiar table.", 5),
      fex("Aura of Glory (Su)", "At 7th level the exemplar can project an aura of glory once per day. The exemplar's countenance glows with a holy radiance, seemingly taking on the features of the elven gods themselves. Good creatures are unaffected by the aura of glory. All other creatures within 20 feet must make a Willpower saving throw (DC = 10 + exemplar class level + Cha modifier). Neutral creatures who fail this save are shaken for a number of rounds equal to the exemplar's Cha modifier. Evil creatures who fail this save are dazed for the same number of rounds. At 10th level the exemplar's ability improves: evil creatures are automatically stunned for 1 round even if they succeed at their saving throw, and if the saving throw is failed, evil creatures are panicked for a number of rounds equal to the exemplar's Cha modifier.", 7),
    ],
  },
  {
    id: "spell-shikar",
    name: "Spell-shikar",
    ruleset: "core",
    source: `${SS} (pp. 50-53)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ10, POOR10, GOOD10, GOOD10),
    classSkills: ["Craft (alchemy)", "Climb", "Concentration", "Heal", "Hide", "Survival", "Jump", "Knowledge (arcana)", "Knowledge (nature)", "Knowledge (the planes)", "Listen", "Move Silently", "Search", "Spellcraft", "Spot", "Swim", "Tumble", "Use Rope", ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Survival 6 ranks",
      "Skills: Knowledge (arcana) 6 ranks",
      "Skills: Knowledge (the planes) 6 ranks",
      "Skills: Spellcraft 6 ranks",
      "Skills: Spot 6 ranks",
      "Skills: Survival 6 ranks",
      "Feats: Alertness, Spell Penetration, Track",
      "Special: favored enemy (any outsider); must be able to prepare 1st level arcane spells",
    ],
    features: [
      fss("Spell-shikar Proficiencies", "Wizard-ranger prestige class — the spell-shikar, who alone keeps his people safe from the supernatural enemies (the ever-hateful drow, the illithid, and many evil outsiders) that prey upon the elves. Proficient with all simple and martial weapons, and with light armor.", undefined),
      fss("Spellcasting", "The spell-shikar continues to advance in spellcasting ability as a ranger. Add his spell-shikar class level to any previous ranger levels and determine his spells per day according to PHB Table 3-13. However, unlike a ranger (whose caster level is half his ranger level) the spell-shikar gains +1 caster level with each class level. Thus, a ranger 4 / spell-shikar 3 casts spells as a 5th level caster.", 1),
      fss("Favored Enemy", "The spell-shikar continues to advance his favored enemy ability. Add his spell-shikar class levels to any previous class levels granting the “favored enemy” ability and determine his bonus according to PHB Table 3-13.", 1),
      fss("Arcane Persecution", "Beginning at 2nd level, the spell-shikar adds his favored enemy bonus to the DC of all spells he casts against his favored enemies. This bonus applies only to spells directly targeted at a favored enemy (but not to area effect spells that merely happen to include a favored enemy). At 4th level the spell-shikar may strike opponents with damage reduction even if he does not have a magical weapon: for the purposes of bypassing DR, he treats any weapon he uses against his favored enemy as a magical weapon with a bonus equal to his favored enemy bonus. At 6th level his ability in this regard improves yet again: add his favored enemy bonus to his caster level check to bypass SR, again only for spells directly targeted at a favored enemy.", 2),
      fss("Resist Fell Magic", "Beginning at 5th level, the spell-shikar adds his favored enemy bonus to all saving throws against spells and spell-like abilities originating from a favored enemy.", 5),
      fss("Extra-Planar Tracking", "If the spell-shikar witnesses his favored enemy's escape via a teleportation or planar travel spell, he may immediately make a Spellcraft check to determine his quarry's plane of destination. If he pursues his prey to another plane within one round of its escape, he may make an Survival check to determine the general direction towards his prey. The GM sets the difficulty of the initial Spellcraft check and rolls in secret, informing the spell-shikar only of his success or failure (the book's guidance table: Same plane DC 15; Ethereal, Astral DC 20; Inner Plane DC 25; Outer Plane DC 30).", 7),
      fss("Counter Spell-like Ability", "The spell-shikar may counter the spell-like abilities of his favored enemies as if they were actually casting the spell in question. All other normal rules for counterspells apply.", 8),
      fss("Furious Persistence (Ex)", "Against any spell cast by a favored enemy, the spell-shikar gains spell resistance equal to 20 + his Wis modifier.", 10),
    ],
  },
  {
    id: "anarcanist",
    name: "Anarcanist",
    ruleset: "core",
    source: `${AC} (pp. 54-57)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ10, POOR10, GOOD10, GOOD10),
    classSkills: ["Bluff", "Climb", "Concentration", "Decipher Script", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Hide", "Survival", "Jump", "Knowledge (arcana)", "Listen", "Move Silently", "Open Lock", "Search", "Sense Motive", "Spellcraft", "Spot", "Use Magic Device"],
    prerequisites: [
      "Skills: Bluff 6 ranks",
      "Skills: Disable Device 6 ranks",
      "Skills: Hide 8 ranks",
      "Skills: Knowledge (arcana) 8 ranks",
      "Skills: Move Silently 8 ranks",
      "Skills: Search 6 ranks",
      "Skills: Spellcraft 6 ranks",
      "Feats: Dodge; any two of the following: Great Fortitude, Iron Will, Lightning Reflexes",
      "Special: sneak attack +1d6 or better; ability to cast 2nd level arcane spells",
    ],
    features: [
      fac("Anarcanist Proficiencies", "Wizard-rogue prestige class — the anarcanist, who will stop at nothing to keep arcane magic from the unworthy, taking by force or coercion what he cannot otherwise seize, and destroying what he cannot take. Proficient with all simple weapons.", undefined),
      fac("Spellcasting", "The anarcanist continues to advance in spellcasting ability, albeit at a slower rate: add half his anarcanist class levels to any previous arcane spellcaster levels and determine his caster level, spells per day, and spells known on that basis.", 1),
      fac("Sneak Attack", "At 1st, 4th, 7th, and 10th level, the anarcanist gains bonus sneak attack dice (+1d6 at 1st level, +2d6 total at 4th, +3d6 at 7th, +4d6 at 10th, per Table 9). These dice stack with any sneak attack dice he receives from any other class.", 1),
      fac("Evasion (Ex)", "At 2nd level the character gains evasion, as the rogue ability of the same name. At 8th level he gains improved evasion.", 2),
      fac("Uncanny Dodge", "The anarcanist gains the uncanny dodge ability. This stacks with any uncanny dodge ability he may have from another class. At 5th level his uncanny dodge improves such that he can no longer be flanked (Table 9).", 2),
      fac("Improved Dispelling", "The anarcanist adds his Intelligence modifier to all caster level checks for dispelling magic effects.", 3),
      fac("Hand Strike", "Before making a sneak attack, the anarcanist can forgo +2d6 of sneak attack damage to strike a stinging blow to the victim's hands. If the attack is successful, for the next 1d4 rounds the victim must make a Concentration check in order to cast any spell with a somatic component (DC = actual damage inflicted by strike + spell level). If the victim is suffering from any combination of hand strikes and/or throat strikes at the same time, he makes a single Concentration check but increases the DC by +5 for each hand or throat strike beyond the first.", 3),
      fac("Dodge Ray (Ex)", "If the anarcanist is struck with a ray, he may forgo his next standard action to attempt to dodge the ray: he may make a Reflex save against the ray attack and use the result of his saving throw as his AC; if the ray misses this new AC, the character successfully dodges. At 9th level he may use this ability with melee touch spells in addition to rays (Table 9: “Dodge touch”). The ability works only against touch spells; it has no effect on other forms of touch attacks. This ability may only be used if the character is wearing no armor.", 4),
      fac("Throat Strike", "As hand strike, but the effects apply to spells with a verbal component.", 6),
      fac("Spell Resistance", "The anarcanist gains spell resistance equal to 10 + anarcanist class level + Wisdom modifier.", 6),
      fac("Scour Spell (Su)", "The anarcanist may strike spellcasters so as to damage their ability to recall and cast prepared spells. Before making a sneak attack, the character may choose to forgo one or more sneak attack dice: on a successful attack, for every 1d6 of sneak attack dice the character forgoes, the victim loses 1 spell level from his prepared spells. The victim chooses which prepared spell(s) to lose. This ability has no effect on opponents who are immune to sneak attack or critical hits, upon spellcasters who do not prepare spells, or on spellcasters who currently have no spells prepared.", 10),
    ],
  },
  {
    id: "outcast-specialist",
    name: "Outcast Specialist",
    ruleset: "core",
    source: `${OS} (pp. 58-61)`,
    sourceUrl: HOFE_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: ["Craft (alchemy)", "Concentration", "Craft", "Knowledge (arcana)", "Profession",  "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 8 ranks",
      "Skills: Spellcraft 8 ranks",
      "Feats: Spell Mastery; Spell Focus (in the chosen specialty school)",
      "Special: ability to cast 2nd level arcane spells without preparation",
    ],
    features: [
      fos("Outcast Specialist Proficiencies", "Wizard-sorcerer prestige class — the outcast specialist, who has broken from the conventions of magic revered by his peers and instead follows the deviant path of his chosen school of specialty. The outcast specialist gains no new proficiency with weapons or armor.", undefined),
      fos("Spellcasting", "The outcast specialist continues to advance in spellcasting ability as a sorcerer: add his outcast specialist class level to any previous sorcerer levels to determine caster level, spells per day, and spells known.", 1),
      fos("Arcane Specialist", "At 1st level, the outcast specialist must specialize in a school of magic (according to his Spell Focus prerequisite). He abides by the same rules and restrictions as a specialist wizard, including the choice of opposition schools. He gains one extra spell slot per spell level per day from which he can cast any spell from the school chosen as his specialty. However, the outcast specialist suffers an additional restriction: at each new sorcerer or outcast specialist level, when he gains new spells known, he must select those spells from his specialty school; although he retains any knowledge of sorcerer spells known before his specialization, he forsakes further learning from all other schools. If the outcast specialist is already a specialist wizard, he may not choose a different specialty school, though he may choose the same specialty school. The outcast specialist may take advantage of the new specialist wizard rules presented in Chapter 3; however, if the GM requires specialists to choose the Greater School Specialization feat, the outcast specialist must have chosen this feat at his 1st character level; he may not choose this feat at his 1st outcast specialist class level.", 1),
      fos("Familiar", "The outcast specialist may call for a familiar (if he has not already done so). Add his outcast specialist class levels to his previous sorcerer levels and determine his familiar's abilities according to PHB Table 3-19. (Table 10 lists this ability at 2nd level.)", 2),
      fos("Bonus Spell", "At 2nd level and every other level thereafter (4th, 6th, 8th, 10th), the outcast specialist adds another spell to his list of spells known. This spell must be chosen from his specialty school.", 2),
      fos("Bonus Feat", "At 2nd, 6th, and 10th level, the outcast specialist gains a bonus Metamagic, Item Creation, or Arcane feat (see Chapter 2).", 2),
    ],
  },
];
