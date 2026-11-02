/**
 * Additional SRD base and NPC classes. Progression rows cover levels 1–10, matching the existing engine data pack.
 */
import type { ClassDefinition, FeatureDefinition } from "@/engine/types";

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

export const CORE_CLASSES: ClassDefinition[] = [
  {
    "id": "barbarian",
    "name": "Barbarian",
    "ruleset": "core",
    "source": "d20SRD — Classes: Barbarian",
    "sourceUrl": "https://www.d20srd.org/srd/classes/barbarian.htm",
    "hitDie": "d12",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 1,
        "fort": 2,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 2,
        "fort": 3,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 3,
        "fort": 3,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 4,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 5,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 6,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 7,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 8,
        "fort": 6,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 9,
        "fort": 6,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 10,
        "fort": 7,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Handle Animal",
      "Intimidate",
      "Jump",
      "Listen",
      "Ride",
      "Survival",
      "Swim"
    ],
    "features": [
      f("Barbarian Basics", "Alignment: any nonlawful - a barbarian who becomes lawful loses the ability to rage and cannot gain more levels as a barbarian until he atones (he retains all other benefits of the class). Key abilities: Strength and Constitution (combat and rage) and Dexterity (defense). Weapon and armor proficiencies: all simple and martial weapons, light and medium armor, and shields (except tower shields).", undefined, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Fast Movement (Ex)", "A barbarian's land speed is faster than the norm for his race by +10 feet, as long as he is wearing no armor, light armor, or medium armor and carrying no more than a medium load.", 1, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Illiteracy", "A barbarian does not know how to read and write. He may spend 2 skill points to gain the ability to read and write all the languages he is able to speak. A character who takes a level in any class other than barbarian gains literacy automatically; a literate character who takes a barbarian level does not lose literacy.", 1, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Rage (Ex)", "Once per encounter, and only on his own turn, a barbarian can enter a rage: his Strength and Constitution each rise by +4, he gains a +2 morale bonus on Will saves, and he takes a -2 penalty to Armor Class. The rage lasts for a number of rounds equal to 3 + his (newly improved) Constitution modifier. The increased Constitution grants him 2 temporary hit points per Hit Die, which are lost first when damage is taken and disappear when the rage ends. While raging, he cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, any abilities that require patience or concentration, spells, or command word, spell trigger, or spell completion magic items, and he cannot use the Combat Expertise feat, item creation feats, or metamagic feats. When his rage ends, he is fatigued (-2 Strength, -2 Dexterity, cannot charge or run) for the duration of the current encounter. He can use this ability once per day at 1st level, gaining an additional daily use every four levels after (2/day at 4th, 3/day at 8th, 4/day at 12th, 5/day at 16th, 6/day at 20th).", 1, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Uncanny Dodge (Ex)", "A barbarian retains his Dexterity bonus to AC even if he is caught flat-footed or struck by an invisible attacker (he still loses his Dexterity bonus if immobilized). If a barbarian already has uncanny dodge from a different class, he automatically gains improved uncanny dodge (see below) instead.", 2, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Trap Sense (Ex)", "A barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps; the bonus rises by +1 every three levels after 3rd (+2 at 6th, +3 at 9th, +4 at 12th, +5 at 15th, +6 at 18th). Trap sense bonuses gained from multiple classes stack.", 3, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Improved Uncanny Dodge (Ex)", "A barbarian can no longer be flanked: this defense denies another character the ability to sneak attack him by flanking him, unless the attacker has at least four more levels in a class granting sneak attack (such as rogue levels) than the barbarian has levels in classes granting uncanny dodge.", 5, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Damage Reduction (Ex)", "A barbarian gains damage reduction 1/-: each time he is struck, damage from weapons and natural attacks (but not energy damage) is reduced by that amount. The reduction rises to 2/- at 10th level, 3/- at 13th, 4/- at 16th, and 5/- at 19th.", 7, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Greater Rage (Ex)", "A barbarian's rage bonuses improve: while raging, his Strength and Constitution bonuses rise to +6 and his morale bonus on Will saves rises to +3 (the -2 penalty to AC remains).", 11, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Indomitable Will (Ex)", "While raging, a barbarian gains a +4 bonus on Will saving throws to resist enchantment spells and effects; this bonus stacks with all other modifiers, including the morale bonus granted by his rage.", 14, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Tireless Rage (Ex)", "A barbarian no longer becomes fatigued at the end of his rage.", 17, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
      f("Mighty Rage (Ex)", "A barbarian's rage bonuses improve to their peak: while raging, his Strength and Constitution bonuses rise to +8 and his morale bonus on Will saves rises to +4 (the -2 penalty to AC remains).", 20, "d20SRD — Classes: Barbarian", "https://www.d20srd.org/srd/classes/barbarian.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "bard",
    "name": "Bard",
    "ruleset": "core",
    "source": "d20SRD — Classes: Bard",
    "sourceUrl": "https://www.d20srd.org/srd/classes/bard.htm",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "ref",
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 2,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 3,
        "will": 3
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 1,
        "ref": 3,
        "will": 3
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 1,
        "ref": 4,
        "will": 4
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 1,
        "ref": 4,
        "will": 4
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 2,
        "ref": 5,
        "will": 5
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 2,
        "ref": 5,
        "will": 5
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 2,
        "ref": 6,
        "will": 6
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 3,
        "ref": 6,
        "will": 6
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 3,
        "ref": 7,
        "will": 7
      }
    ],
    "classSkills": [
      "Appraise",
      "Balance",
      "Bluff",
      "Climb",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Disguise",
      "Escape Artist",
      "Gather Information",
      "Hide",
      "Knowledge (all)",
      "Listen",
      "Move Silently",
      "Perform",
      "Profession",
      "Sense Motive",
      "Sleight of Hand",
      "Spellcraft",
      "Swim",
      "Tumble",
      "Use Magic Device"
    ],
    "features": [
      f("Bard Basics", "Alignment: any nonlawful - a bard who becomes lawful cannot progress in levels as a bard until he atones (he retains all bard abilities). Key abilities: Charisma (spells and bardic music), Dexterity, and Intelligence. Weapon and armor proficiencies: all simple weapons, plus the longsword, rapier, sap, short sword, shortbow, and whip; light armor and shields (except tower shields). A bard can cast bard spells while wearing light armor without incurring the normal arcane spell failure chance; wearing medium or heavy armor or using a shield imposes the normal failure chance, as do spells gained from other classes.", undefined, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Spells", "A bard casts arcane spells spontaneously - he need not prepare them ahead of time - from the bard spell list. To learn or cast a spell he needs a Charisma score of at least 10 + the spell's level; bonus spells per day come from high Charisma, and the saving throw DC is 10 + the spell's level + his Charisma modifier. He begins play knowing four 0-level spells, and learns additional spells as he gains levels per the SRD bard spells-known table. Upon reaching 5th level, and at every three bard levels after that, he can choose to learn a new spell in place of one he already knows; the new spell's level must be the same as the one exchanged, and it must be at least two levels lower than the highest-level bard spell he can cast. Every bard spell has a verbal component (singing, reciting, or playing an instrument), so he cannot cast a bard spell while silenced.", 1, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Bardic Knowledge (Ex)", "A bard may make a special bardic knowledge check (1d20 + his bard level + his Intelligence modifier) to see whether he knows some relevant information about local notable people, legendary items, or noteworthy places: DC 10 for common knowledge, DC 20 for uncommon, DC 25 for obscure, and DC 30 for extremely obscure information. He gains a +2 bonus on this check if he has 5 or more ranks in Knowledge (history). A bard cannot take 10 or take 20 on a bardic knowledge check, and a failed check for a given topic cannot be retried.", 1, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Bardic Music (Su)", "Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (including himself, if desired). While these abilities are primarily used with vocal performance, bardic music effects that require an instrument instead use that instrument's performance. Starting a bardic music effect is a standard action (some effects require concentration to maintain), and while performing, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by command word. Each bardic music effect requires a minimum number of ranks in a Perform skill and is described in its own entry below, at the level where it is gained.", 1, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Countersong (Su)", "Requires 3 or more ranks in Perform. While a bard sings or plays (for up to 10 rounds), each creature within 30 feet that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its own saving throw against that attack, if the Perform result is higher. Creatures already under such an effect gain a new saving throw opportunity against it each round of the countersong (using the Perform check result), though the effect's duration is not rerolled or extended. Countersong has no effect against attacks that do not allow saves.", 1, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Fascinate (Sp)", "Requires 3 or more ranks in Perform. A bard's performance can cause one creature within 90 feet who can see and hear him to become fascinated with him, plus one additional creature for every three bard levels beyond 1st (two creatures at 4th, three at 7th, and so on). Each target must make a Will saving throw (DC = the bard's Perform check result); on a failure, the creature sits quietly and listens to the performance for as long as the bard continues it, up to a maximum of 1 round per bard level, taking a -4 penalty on skill checks made as reactions (such as Listen and Spot checks). Any potential threat to the target allows a new saving throw, and any obvious threat automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.", 1, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Inspire Courage (Su)", "Requires 3 or more ranks in Perform. Allied creatures (including the bard himself) who hear the performance gain a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. The bonus rises to +2 at 8th level, +3 at 14th, and +4 at 20th. The effect lasts for as long as the allies hear the performance and for 5 rounds thereafter. Inspire courage is a mind-affecting ability.", 1, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Inspire Competence (Su)", "Requires 6 or more ranks in Perform. An ally within 30 feet who can see and hear the bard gains a +2 competence bonus on skill checks with one particular skill (chosen by the bard when he uses the ability), for as long as the bard concentrates on the performance, up to a maximum of 2 minutes. A bard cannot inspire competence in himself, and certain uses of this ability (such as with the Open Lock skill) may simply not work, at the DM's determination.", 3, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Suggestion (Sp)", "Requires 9 or more ranks in Perform. A bard can make a suggestion (as the suggestion spell) to a creature that he has already fascinated; the target must make a Will saving throw (DC 10 + one-half the bard's level + his Charisma modifier) or act on the suggestion. Using this ability does not expend one of his daily uses of bardic music and does not break his concentration on the fascinate effect. A bard cannot use suggestion on a creature that he is not currently fascinating.", 6, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Inspire Greatness (Su)", "Requires 12 or more ranks in Perform. A bard can inspire greatness in himself or in a single willing ally within 30 feet who can see and hear him: the inspired creature gains 2 bonus Hit Dice (d10s) that grant temporary hit points (apply the creature's Constitution modifier to these bonus Hit Dice as usual), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saving throws. (The bonus Hit Dice count as regular Hit Dice for determining the effects of spells and abilities based on Hit Dice, such as sleep.) The effect lasts as long as the target hears the performance and for 5 rounds thereafter. A bard can target one additional ally for every three levels he attains beyond 9th (two allies at 12th, three at 15th, four at 18th), and he can always target himself in place of an ally. Inspire greatness is a mind-affecting ability.", 9, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Song of Freedom (Sp)", "Requires 15 or more ranks in Perform. After concentrating on his performance uninterrupted for 1 full minute, a bard can target a single creature within 30 feet, duplicating a break enchantment effect upon that target (caster level equal to his bard level). A bard cannot use song of freedom on himself.", 12, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Inspire Heroics (Su)", "Requires 18 or more ranks in Perform. A bard can inspire heroics in himself or in a single willing ally within 30 feet who can see and hear him: the inspired creature gains a +4 morale bonus on saving throws and a +4 dodge bonus to Armor Class. The effect lasts as long as the target hears the performance and for 5 rounds thereafter. A bard can target one additional ally for every three levels he attains beyond 15th (two allies at 18th), and he can always target himself in place of an ally. Inspire heroics is a mind-affecting ability.", 15, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
      f("Mass Suggestion (Sp)", "Requires 21 or more ranks in Perform. A bard can make a suggestion (as the suggestion spell, and as his suggestion ability) to any number of creatures he has already fascinated; each target must make a Will saving throw (DC 10 + one-half the bard's level + his Charisma modifier). Using this ability does not expend a daily use of bardic music and does not break his concentration on the fascinate effect.", 18, "d20SRD — Classes: Bard", "https://www.d20srd.org/srd/classes/bard.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "druid",
    "name": "Druid",
    "ruleset": "core",
    "source": "d20SRD — Classes: Druid",
    "sourceUrl": "https://www.d20srd.org/srd/classes/druid.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 2,
        "ref": 0,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 3,
        "ref": 0,
        "will": 3
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 3,
        "ref": 1,
        "will": 3
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 4,
        "ref": 1,
        "will": 4
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 4,
        "ref": 1,
        "will": 4
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 5,
        "ref": 2,
        "will": 5
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 5,
        "ref": 2,
        "will": 5
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 6,
        "ref": 2,
        "will": 6
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 6,
        "ref": 3,
        "will": 6
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 7,
        "ref": 3,
        "will": 7
      }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Knowledge (nature)",
      "Listen",
      "Profession",
      "Ride",
      "Spellcraft",
      "Spot",
      "Survival",
      "Swim"
    ],
    "features": [
      f("Druid Basics", "Alignment: must be neutral good, lawful neutral, true neutral, chaotic neutral, or neutral evil - a druid who changes to a prohibited alignment or ceases to revere nature loses all druid spells and abilities until she atones. Key abilities: Wisdom (spellcasting), Dexterity, and Constitution. Weapon proficiencies: club, dagger, dart, quarterstaff, scimitar, sickle, shortspear, sling, and spear, plus the natural weapon attacks of any animal form she assumes with wild shape. Armor: light and medium armor, but a druid is prohibited from wearing metal armor; she may use shields only if they are made of wood. A druid who wears prohibited armor or carries a prohibited shield is unable to cast druid spells or to use any of her supernatural or spell-like class abilities while doing so and for 24 hours thereafter. Her bonus language options include Sylvan, the language of woodland creatures; Druidic, a secret language, is taught to all druids free at 1st level, and a druid is forbidden from teaching it to nondruids.", undefined, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Spells", "A druid casts divine spells prepared ahead of time from the druid spell list. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + her Wisdom modifier. She prepares her spells by meditating and praying for 1 hour after 8 hours of rest. A druid cannot cast a spell with an alignment descriptor opposed to her own alignment or to her deity's alignment (if she has one).", 1, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Spontaneous Casting", "A druid can channel stored spell energy into summoning spells that she hasn't prepared ahead of time: she can lose a prepared spell to cast a summon nature's ally spell of the same spell level or lower instead (the converted spell's energy becomes the summoning spell, exactly as if she had prepared it).", 1, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Animal Companion (Ex)", "A druid begins play with an animal companion chosen from the 1st-level list (badger, camel, dire rat, dog, riding dog, eagle, hawk, light or heavy horse, owl, pony, Small or Medium viper snake, or wolf; campaigns set in aquatic environments may instead allow a porpoise, a Medium shark, or a squid). The companion advances as the druid gains levels per the animal companion table: it has an empathic link with the druid and shares her spells from the start, and gains bonus Hit Dice, natural armor adjustments, Strength and Dexterity adjustments, additional tricks, evasion (at the 3rd-5th level band), devotion (6th-8th), multiattack (9th-11th), and improved evasion (15th-17th). From 4th level, a druid may instead select a companion from the alternative lists (such as an ape, black bear, crocodile, leopard, or deinonychus), counting her druid level as reduced by the amount shown for that list when determining the companion's abilities. If the companion dies or is released, the druid may gain a new one after 24 uninterrupted hours of prayer in an environment where an eligible companion could be found.", 1, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Nature Sense (Ex)", "A druid gains a +2 bonus on Knowledge (nature) and Survival checks.", 1, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Wild Empathy (Ex)", "A druid can improve the attitude of an animal much as a Diplomacy check improves a person's attitude: she rolls 1d20 + her druid level + her Charisma modifier, studying the animal for 1 minute under normal conditions (they must be within 30 feet of one another). A typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly. She can also use this ability on a magical beast with an Intelligence score of 1 or 2, but she takes a -4 penalty on the check.", 1, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Woodland Stride (Ex)", "A druid may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed and without taking damage or suffering any other impairment; however, thorns, briars, and overgrown areas that have been magically manipulated to impede motion still affect her.", 2, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Trackless Step (Ex)", "A druid leaves no trail in natural surroundings and cannot be tracked, unless she chooses to leave a trail.", 3, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Resist Nature's Lure (Ex)", "A druid gains a +4 bonus on saving throws against the spell-like abilities of fey.", 4, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Wild Shape (Su)", "A druid can turn herself into a Small or Medium animal and back again once per day, for up to 1 hour per druid level or until she changes back. The new form's Hit Dice cannot exceed her druid level; she gains the form's physical ability scores, natural armor bonus, natural weapon and mundane movement capabilities, and extraordinary special attacks, while keeping her own mind, hit points (modified as the SRD describes), and extraordinary and supernatural abilities of her normal form; changing form restores lost hit points as if she had rested for a night. She gains additional daily uses at 6th (2/day), 7th (3/day), 10th (4/day), 14th (5/day), and 18th (6/day). The available forms grow: Large animals at 8th level, Tiny animals at 11th, plant creatures (subject to the plant type's traits as the SRD describes) at 12th, and Huge animals at 15th. At 16th level she can also use wild shape to become a Small, Medium, or Large elemental once per day (these uses are in addition to her regular wild shape uses, and she gains the elemental's extraordinary, supernatural, and spell-like abilities); elemental uses rise to 2/day at 18th and 3/day at 20th, and at 20th level she can also become a Huge elemental.", 5, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Venom Immunity (Ex)", "From 9th level, a druid is immune to all poisons: poison of any kind deals her no damage and inflicts no other effect on her.", 9, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("A Thousand Faces (Su)", "At will, a druid can change her appearance as if using a disguise self spell, except that the change is a physical alteration of her actual features rather than an illusion; it affects her body but not her possessions, and it cannot change her creature type. She can use this ability only while in her normal form.", 13, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
      f("Timeless Body (Ex)", "A druid no longer takes ability score penalties for aging and cannot be magically aged; bonuses she has accrued from aging still apply, and she still dies of old age when her time is up.", 15, "d20SRD — Classes: Druid", "https://www.d20srd.org/srd/classes/druid.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "monk",
    "name": "Monk",
    "ruleset": "core",
    "source": "d20SRD — Classes: Monk",
    "sourceUrl": "https://www.d20srd.org/srd/classes/monk.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 3,
        "ref": 3,
        "will": 3
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 3,
        "ref": 3,
        "will": 3
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 4,
        "ref": 4,
        "will": 4
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 4,
        "ref": 4,
        "will": 4
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 5,
        "ref": 5,
        "will": 5
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 5,
        "ref": 5,
        "will": 5
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 6,
        "ref": 6,
        "will": 6
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 6,
        "ref": 6,
        "will": 6
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 7,
        "ref": 7,
        "will": 7
      }
    ],
    "classSkills": [
      "Balance",
      "Climb",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Escape Artist",
      "Hide",
      "Jump",
      "Knowledge (arcana)",
      "Knowledge (religion)",
      "Listen",
      "Move Silently",
      "Perform",
      "Profession",
      "Sense Motive",
      "Spot",
      "Swim",
      "Tumble"
    ],
    "features": [
      f("Monk Basics", "Alignment: any lawful - a monk who becomes nonlawful cannot gain new levels as a monk (she retains all monk abilities). Key abilities: Wisdom (Armor Class and several abilities), Strength, Dexterity, and Constitution. Weapon proficiencies: club, light crossbow, heavy crossbow, dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. A monk is not proficient with any armor or shields; a monk who wears armor, uses a shield, or carries a medium or heavy load loses her AC bonus, her fast movement, and her flurry of blows abilities.", undefined, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("AC Bonus (Ex)", "When unarmored and unencumbered, a monk adds her Wisdom bonus (if any) to her Armor Class; this bonus also applies against touch attacks and while she is flat-footed. In addition, her AC improves by +1 at 5th level, +2 at 10th, +3 at 15th, and +4 at 20th. These bonuses are lost when she is immobilized or helpless, wears any armor, carries a shield, or carries a medium or heavy load.", 1, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Flurry of Blows (Ex)", "When unarmored, a monk may strike with a flurry of blows at her full base attack bonus: she gains one extra attack per round at her highest base attack bonus, but she and every other attack she makes that round take a -2 penalty; the penalty decreases to -1 at 5th level and disappears entirely at 9th. She may attack only with unarmed strikes or with special monk weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham), and she can use either her unarmed strike damage or a monk weapon's damage. At 11th level (greater flurry), she gains a second extra attack at her full base attack bonus.", 1, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Unarmed Strike", "A monk gains Improved Unarmed Strike as a bonus feat at 1st level. Her unarmed attacks deal more damage than a normal person's would: 1d6 for a Medium monk, increasing to 1d8 at 4th level, 1d10 at 8th, 2d6 at 12th, 2d8 at 16th, and 2d10 at 20th (Small and Large monks use the values on the SRD monk table). Her unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either type, and she can deal lethal or nonlethal damage with it at no penalty. Her unarmed attacks count as armed attacks (she does not provoke attacks of opportunity when attacking unarmed).", 1, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Bonus Feat", "At 1st level, a monk may select either Improved Grapple or Stunning Fist as a bonus feat; at 2nd level, either Combat Reflexes or Deflect Arrows; and at 6th level, either Improved Disarm or Improved Trip. She need not meet the prerequisites of the bonus feat she selects. A monk who selects Stunning Fist may attempt a stunning attack a number of times per day equal to her monk level (in addition to the feat's normal daily allowance for other characters). (The selectable options are modeled in the Feats step.)", 1, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Evasion (Ex)", "When exposed to any effect that normally allows a Reflex saving throw for half damage, a monk takes no damage on a successful saving throw. Evasion can be used only in light armor or no armor, and not while the monk is helpless.", 2, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Fast Movement (Ex)", "When wearing no armor and carrying no more than a light load, a monk's speed gains an enhancement bonus of +10 feet; the bonus increases to +20 feet at 6th level, +30 at 9th, +40 at 12th, +50 at 15th, and +60 at 18th.", 3, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Still Mind (Ex)", "A monk gains a +2 bonus on saving throws against enchantment spells and effects.", 3, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Ki Strike (Su)", "A monk's unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. At 10th level, her unarmed attacks are also treated as lawful weapons for that purpose, and at 16th level they are treated as adamantine weapons as well.", 4, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Slow Fall (Ex)", "When within arm's reach of a wall, a monk can use the wall to slow her descent, treating a fall as 20 feet shorter than it actually is for the purpose of fall damage. The reduction increases to 30 feet at 6th level, 40 at 8th, 50 at 10th, 60 at 12th, 70 at 14th, 80 at 16th, and 90 at 18th; at 20th level she can slow a fall of any distance in this way.", 4, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Purity of Body (Ex)", "A monk gains immunity to all diseases except for supernatural and magical diseases (such as mummy rot and lycanthropy).", 5, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Wholeness of Body (Su)", "A monk can heal her own wounds: each day she can cure up to twice her monk level in hit points, and she can spread this healing out among several uses, healing herself only.", 7, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Improved Evasion (Ex)", "A monk's evasion improves: she takes no damage on a successful Reflex saving throw against an attack that allows a save for half damage, and she takes only half damage on a failed save. Improved evasion can be used only in light armor or no armor, and not while the monk is helpless.", 9, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Diamond Body (Su)", "A monk gains immunity to poisons of all kinds.", 11, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Abundant Step (Su)", "Once per day, a monk can slip magically between spaces as if using a dimension door spell, with a caster level equal to one-half her monk level (rounded down).", 12, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Diamond Soul (Ex)", "A monk gains spell resistance equal to her current monk level + 10.", 13, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Quivering Palm (Su)", "Once per week, a monk can set up potentially lethal vibrations within the body of a creature she strikes with an unarmed attack (she must announce her intent to use this ability before making the attack roll). If the attack deals damage but does not kill the creature outright, the vibrations take hold: at any point within a number of days equal to her monk level thereafter, the monk can will the creature to die, and the creature must then make a Fortitude saving throw (DC 10 + one-half her monk level + her Wisdom modifier) or die. A monk can have only one quivering palm in effect at a time; using the ability again ends any previous use. Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be affected.", 15, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Timeless Body (Ex)", "A monk no longer takes ability score penalties for aging and cannot be magically aged; bonuses she has accrued from aging still apply, and she still dies of old age when her time is up.", 17, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Tongue of the Sun and Moon (Ex)", "A monk can speak with any living creature.", 17, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Empty Body (Su)", "A monk can assume an ethereal state for a total of up to her monk level in rounds per day; she may divide this time among multiple uses. While ethereal she is treated as incorporeal in the manner described for the etherealness effect (see the SRD): she can move through solid objects, her attacks ignore armor bonuses, and only force effects, ghost touch weapons, and certain abjurations can affect her on the Material Plane.", 19, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
      f("Perfect Self (Su)", "A monk becomes a magical creature: she is forevermore treated as an outsider for the purpose of spells and magical effects (and gains damage reduction 10/magic). Unlike other outsiders, she can still be brought back from the dead as if she were a member of her previous creature type.", 20, "d20SRD — Classes: Monk", "https://www.d20srd.org/srd/classes/monk.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "paladin",
    "name": "Paladin",
    "ruleset": "core",
    "source": "d20SRD — Classes: Paladin",
    "sourceUrl": "https://www.d20srd.org/srd/classes/paladin.htm",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 1,
        "fort": 2,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 2,
        "fort": 3,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 3,
        "fort": 3,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 4,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 5,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 6,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 7,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 8,
        "fort": 6,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 9,
        "fort": 6,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 10,
        "fort": 7,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Knowledge (nobility and royalty)",
      "Knowledge (religion)",
      "Profession",
      "Ride",
      "Sense Motive"
    ],
    "features": [
      f("Paladin Basics", "Alignment: lawful good. A paladin adheres to a strict code of conduct: she must respect legitimate authority, act with honor (not lying, cheating, or using poison), help those in need (provided they do not use that help for evil or chaotic ends), and punish those who harm or threaten innocents; she may not willingly commit an evil act, and she will not knowingly associate with evil characters or continue an association that requires her to offend her moral code. A paladin who willfully commits an evil act or grossly violates her code loses all paladin spells and abilities until she atones. Key abilities: Charisma (her divine grace, smite evil, lay on hands, and turning), Strength, and Wisdom (her spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields).", undefined, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Aura of Good (Ex)", "A paladin's aura of good (see the detect good spell) is equal in power to her paladin level.", 1, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Detect Evil (Sp)", "A paladin can use detect evil at will, as the spell.", 1, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Smite Evil (Su)", "Once per day, a paladin may attempt to smite evil with one normal melee attack: she adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If she accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day. She gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", 1, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Divine Grace (Su)", "A paladin gains a bonus equal to her Charisma bonus (if positive) on all saving throws.", 2, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Lay on Hands (Su)", "Each day, a paladin can heal a total number of hit points equal to her paladin level x her Charisma bonus (for example, a 5th-level paladin with Charisma 16 can heal 15 points per day); she may divide this healing among multiple recipients, and using lay on hands is a standard action. A paladin must have a Charisma score of 12 or higher to use this ability at all. Alternatively, she can expend points from the same pool to deal damage to a single undead creature with a successful melee touch attack, dealing 1 point of damage per point of the pool she expends (no saving throw).", 2, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Aura of Courage (Su)", "A paladin is immune to fear (magical or otherwise), and each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects; this ability functions only while the paladin is conscious.", 3, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Divine Health (Ex)", "A paladin gains immunity to all diseases, including supernatural and magical diseases.", 3, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Turn Undead (Su)", "A paladin can turn undead as a cleric of three levels lower would, a number of times per day equal to 3 + her Charisma modifier.", 4, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Spells", "Beginning at 4th level, a paladin casts divine spells prepared ahead of time from the paladin spell list; her caster level is one-half her paladin level. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + her Wisdom modifier. She prepares her spells by praying and meditating for 1 hour after 8 hours of rest.", 4, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Special Mount (Sp)", "Once per day as a full-round action, a paladin can call a special mount to her side from the celestial realms where it resides - usually a heavy warhorse (or a warpony for a Small paladin). The mount is a magical beast with unusual strength and intelligence, which serves the paladin willingly and well for 2 hours per paladin level (she can dismiss it at any time). Its abilities improve as the paladin gains levels: in the 5th-7th level band it has an empathic link (out to 1 mile), improved evasion, share spells, and share saving throws; in the 8th-10th band it gains improved speed (+10 feet to its movement modes); in the 11th-14th band it can command creatures of its kind once per day; and in the 15th-20th band it gains spell resistance equal to the paladin's level + 5. If the mount dies, the paladin may not summon another one for thirty days (or until she gains a paladin level, whichever comes first), and during the thirty days immediately following its death she takes a -1 penalty on attack and damage rolls.", 5, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
      f("Remove Disease (Sp)", "A paladin can produce a remove disease effect, as the spell, once per week; she gains an additional weekly use at 9th level and every three levels thereafter (2/week at 9th, 3/week at 12th, 4/week at 15th, 5/week at 18th).", 6, "d20SRD — Classes: Paladin", "https://www.d20srd.org/srd/classes/paladin.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "ranger",
    "name": "Ranger",
    "ruleset": "core",
    "source": "d20SRD — Classes: Ranger",
    "sourceUrl": "https://www.d20srd.org/srd/classes/ranger.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 6,
    "babProgression": "full",
    "goodSaves": [
      "fort",
      "ref"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 1,
        "fort": 2,
        "ref": 2,
        "will": 0
      },
      {
        "level": 2,
        "bab": 2,
        "fort": 3,
        "ref": 3,
        "will": 0
      },
      {
        "level": 3,
        "bab": 3,
        "fort": 3,
        "ref": 3,
        "will": 1
      },
      {
        "level": 4,
        "bab": 4,
        "fort": 4,
        "ref": 4,
        "will": 1
      },
      {
        "level": 5,
        "bab": 5,
        "fort": 4,
        "ref": 4,
        "will": 1
      },
      {
        "level": 6,
        "bab": 6,
        "fort": 5,
        "ref": 5,
        "will": 2
      },
      {
        "level": 7,
        "bab": 7,
        "fort": 5,
        "ref": 5,
        "will": 2
      },
      {
        "level": 8,
        "bab": 8,
        "fort": 6,
        "ref": 6,
        "will": 2
      },
      {
        "level": 9,
        "bab": 9,
        "fort": 6,
        "ref": 6,
        "will": 3
      },
      {
        "level": 10,
        "bab": 10,
        "fort": 7,
        "ref": 7,
        "will": 3
      }
    ],
    "classSkills": [
      "Climb",
      "Concentration",
      "Craft",
      "Handle Animal",
      "Heal",
      "Hide",
      "Jump",
      "Knowledge (dungeoneering)",
      "Knowledge (geography)",
      "Knowledge (nature)",
      "Listen",
      "Move Silently",
      "Profession",
      "Ride",
      "Search",
      "Spot",
      "Survival",
      "Swim",
      "Use Rope"
    ],
    "features": [
      f("Ranger Basics", "Alignment: any. Key abilities: Dexterity (light armor, ranged and finesse combat), Strength, and Wisdom (his spells, from 4th level, and several skills). Weapon and armor proficiencies: all simple and martial weapons, light armor, and shields (except tower shields).", undefined, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Favored Enemy (Ex)", "A ranger selects a type of creature from the SRD favored enemy table (such as animals, dragons, goblinoids, or undead, or a subtype of humanoid or outsider) as a favored enemy: against such creatures he gains a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks and on weapon damage rolls. At 5th level and every five levels thereafter (10th, 15th, and 20th), he selects an additional favored enemy and at the same time increases the bonus against any one favored enemy (including the one just selected) by +2. If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype. If a specific creature falls into more than one favored category, only the higher damage bonus applies, and the damage bonus does not apply against creatures immune to critical hits.", 1, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Track", "A ranger gains Track as a bonus feat, letting him follow the trails of creatures across most kinds of terrain by making Survival checks, as described for that feat.", 1, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Wild Empathy (Ex)", "A ranger can improve the attitude of an animal much as a Diplomacy check improves a person's attitude: he rolls 1d20 + his ranger level + his Charisma modifier. To use wild empathy, the ranger and the animal must be within 30 feet of one another under normal conditions and study each other for 1 minute. He can also use this ability on a magical beast with an Intelligence score of 1 or 2, but he takes a -4 penalty on the check.", 1, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Combat Style (Ex)", "A ranger chooses one of two combat styles to pursue: archery, in which case he is treated as having the Rapid Shot feat; or two-weapon combat, in which case he is treated as having the Two-Weapon Fighting feat. He does not need to meet the feats' prerequisites, but he gains the benefit only while wearing light armor or no armor, and he loses it if he wears medium or heavy armor.", 2, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Endurance", "A ranger gains Endurance as a bonus feat.", 3, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Animal Companion (Ex)", "A ranger gains an animal companion as described under the druid class feature, except that for the companion's advancement his effective druid level is equal to one-half his ranger level.", 4, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Spells", "Beginning at 4th level, a ranger casts divine spells prepared ahead of time from the ranger spell list; his caster level is one-half his ranger level. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by meditating and praying for 1 hour after 8 hours of rest.", 4, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Improved Combat Style (Ex)", "A ranger's combat style improves: if he chose archery at 2nd level, he is treated as having the Manyshot feat; if he chose two-weapon combat, he is treated as having the Improved Two-Weapon Fighting feat. As with combat style, he need not meet the prerequisites, and the benefit applies only while wearing light armor or no armor.", 6, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Woodland Stride (Ex)", "A ranger may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment; terrain that has been magically manipulated to impede motion still affects him.", 7, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Swift Tracker (Ex)", "A ranger can move at his normal speed while following tracks without taking the normal -5 penalty on his Survival check, and he can move at up to double speed while tracking at a -10 penalty instead of the usual -20.", 8, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Evasion (Ex)", "When exposed to any effect that normally allows a Reflex saving throw for half damage, a ranger takes no damage on a successful saving throw. Evasion can be used only in light armor or no armor.", 9, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Combat Style Mastery (Ex)", "A ranger's combat style reaches its final form: if he chose archery, he is treated as having the Improved Precise Shot feat; if he chose two-weapon combat, he is treated as having the Greater Two-Weapon Fighting feat. As with combat style, he need not meet the prerequisites, and the benefit applies only while wearing light armor or no armor.", 11, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Camouflage (Ex)", "A ranger can use the Hide skill in any sort of natural terrain, even if the terrain does not grant cover or concealment.", 13, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
      f("Hide in Plain Sight (Ex)", "While in any sort of natural terrain, a ranger can use the Hide skill even while being observed.", 17, "d20SRD — Classes: Ranger", "https://www.d20srd.org/srd/classes/ranger.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "sorcerer",
    "name": "Sorcerer",
    "ruleset": "core",
    "source": "d20SRD — Classes: Sorcerer",
    "sourceUrl": "https://www.d20srd.org/srd/classes/sorcererWizard.htm",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 3
      },
      {
        "level": 3,
        "bab": 1,
        "fort": 1,
        "ref": 1,
        "will": 3
      },
      {
        "level": 4,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 5,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 6,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 7,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 8,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 6
      },
      {
        "level": 9,
        "bab": 4,
        "fort": 3,
        "ref": 3,
        "will": 6
      },
      {
        "level": 10,
        "bab": 5,
        "fort": 3,
        "ref": 3,
        "will": 7
      }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Knowledge (arcana)",
      "Profession",
      "Spellcraft"
    ],
    "features": [
      f("Sorcerer Basics", "Alignment: any. Key abilities: Charisma determines the highest-level spells he can cast, his bonus spells per day, and his save DCs; Dexterity and Constitution aid survival. Weapon proficiencies: all simple weapons; no armor and no shields (armor interferes with the somatic components of arcane spells, imposing a chance of arcane spell failure).", undefined, "d20SRD — Classes: Sorcerer", "https://www.d20srd.org/srd/classes/sorcererWizard.htm"),
      f("Spells", "A sorcerer casts arcane spells spontaneously - he need not prepare them ahead of time - from the sorcerer/wizard spell list. To learn or cast a spell he needs a Charisma score of at least 10 + the spell's level; bonus spells per day come from high Charisma, and the saving throw DC is 10 + the spell's level + his Charisma modifier. His spells known are strictly limited by the SRD sorcerer spells-known table: he begins play knowing four 0-level spells and two 1st-level spells, and learns more as he gains sorcerer levels. Upon reaching 4th level, and at every even-numbered sorcerer level after that, he can choose to learn a new spell in place of one he already knows: he loses the old spell in exchange for the new one, the new spell's level must be the same as the exchanged spell's, and it must be at least two levels lower than the highest-level sorcerer spell he can cast. Because he casts spontaneously, applying a metamagic feat to a spell increases its casting time as described in the SRD.", 1, "d20SRD — Classes: Sorcerer", "https://www.d20srd.org/srd/classes/sorcererWizard.htm"),
      f("Summon Familiar", "A sorcerer can obtain a familiar exactly as a wizard can (see that class's feature): summoning takes 24 hours and 100 gp of magical materials; if the familiar dies or is dismissed, the sorcerer must attempt a Fortitude save (DC 15) or lose 200 experience points per sorcerer level (half that on a success), and a slain or dismissed familiar cannot be replaced for a year and a day. If the sorcerer also has wizard levels, those levels stack with his sorcerer levels for determining the familiar's abilities.", 1, "d20SRD — Classes: Sorcerer", "https://www.d20srd.org/srd/classes/sorcererWizard.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "adept",
    "name": "Adept",
    "ruleset": "core",
    "source": "d20SRD — Classes: Adept",
    "sourceUrl": "https://www.d20srd.org/srd/npcClasses/adept.htm",
    "hitDie": "d6",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 3
      },
      {
        "level": 3,
        "bab": 1,
        "fort": 1,
        "ref": 1,
        "will": 3
      },
      {
        "level": 4,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 5,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 6,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 7,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 8,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 6
      },
      {
        "level": 9,
        "bab": 4,
        "fort": 3,
        "ref": 3,
        "will": 6
      },
      {
        "level": 10,
        "bab": 5,
        "fort": 3,
        "ref": 3,
        "will": 7
      }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Handle Animal",
      "Heal",
      "Knowledge (all)",
      "Profession",
      "Spellcraft",
      "Survival"
    ],
    "features": [
      f("Adept Basics", "Alignment: any. Weapon proficiencies: all simple weapons; an adept is not proficient with any armor or shields. Adepts are the minor spellcasters of small communities - hedge wizards, wise women, shamans, and temple functionaries - combining a little divine magic with practical skills.", undefined, "d20SRD — Classes: Adept", "https://www.d20srd.org/srd/npcClasses/adept.htm"),
      f("Spells", "An adept casts divine spells prepared ahead of time from the adept spell list. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by praying and meditating for 1 hour after 8 hours of rest. Like a cleric, an adept uses a divine focus (a holy symbol) when casting spells that require one, but unlike a cleric he cannot spontaneously convert prepared spells into cure or inflict spells.", 1, "d20SRD — Classes: Adept", "https://www.d20srd.org/srd/npcClasses/adept.htm"),
      f("Summon Familiar", "Beginning at 2nd level, an adept can obtain a familiar exactly as a sorcerer or wizard can (see those classes' features).", 2, "d20SRD — Classes: Adept", "https://www.d20srd.org/srd/npcClasses/adept.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "aristocrat",
    "name": "Aristocrat",
    "ruleset": "core",
    "source": "d20SRD — Classes: Aristocrat",
    "sourceUrl": "https://www.d20srd.org/srd/npcClasses/aristocrat.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 3
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 3
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 2,
        "ref": 2,
        "will": 6
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 3,
        "ref": 3,
        "will": 6
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 3,
        "ref": 3,
        "will": 7
      }
    ],
    "classSkills": [
      "Appraise",
      "Bluff",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Gather Information",
      "Handle Animal",
      "Knowledge (all)",
      "Listen",
      "Perform",
      "Profession",
      "Ride",
      "Sense Motive",
      "Speak Language",
      "Spot",
      "Swim"
    ],
    "features": [
      f("Aristocrat Basics", "Alignment: any. Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and all shields, including tower shields. Aristocrats are the products of wealthy or noble upbringings - landed gentry, courtiers, and their kin. The class has no class features beyond its proficiencies, its broad class skill list, and the wealth and education of its upbringing.", undefined, "d20SRD — Classes: Aristocrat", "https://www.d20srd.org/srd/npcClasses/aristocrat.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "commoner",
    "name": "Commoner",
    "ruleset": "core",
    "source": "d20SRD — Classes: Commoner",
    "sourceUrl": "https://www.d20srd.org/srd/npcClasses/commoner.htm",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 1,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 4,
        "fort": 3,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 5,
        "fort": 3,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Handle Animal",
      "Jump",
      "Listen",
      "Profession",
      "Ride",
      "Spot",
      "Swim",
      "Use Rope"
    ],
    "features": [
      f("Commoner Basics", "Alignment: any. Weapon proficiency: a commoner is proficient with one simple weapon of his choice; he is not proficient with any armor or shields. Commoners are the ordinary folk of the world - farmers, laborers, servants, and tradespeople. The class has no other class features.", undefined, "d20SRD — Classes: Commoner", "https://www.d20srd.org/srd/npcClasses/commoner.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "expert",
    "name": "Expert",
    "ruleset": "core",
    "source": "d20SRD — Classes: Expert",
    "sourceUrl": "https://www.d20srd.org/srd/npcClasses/expert.htm",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 3,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 3,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Appraise",
      "Craft",
      "Diplomacy",
      "Disable Device",
      "Disguise",
      "Escape Artist",
      "Gather Information",
      "Knowledge (all)",
      "Profession",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot",
      "Use Magic Device"
    ],
    "features": [
      f("Expert Basics", "Alignment: any. Weapon and armor proficiencies: all simple weapons and light armor, but not shields. When an expert character is created, he chooses any ten skills to be his class skills (the ones recorded on this record are the typical selection). Experts are skilled specialists - scholars, artisans, guides, and professionals. The class has no other class features.", undefined, "d20SRD — Classes: Expert", "https://www.d20srd.org/srd/npcClasses/expert.htm"),
    ].map((x) => x as FeatureDefinition)
  },
  {
    "id": "warrior",
    "name": "Warrior",
    "ruleset": "core",
    "source": "d20SRD — Classes: Warrior",
    "sourceUrl": "https://www.d20srd.org/srd/npcClasses/warrior.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 1,
        "fort": 2,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 2,
        "fort": 3,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 3,
        "fort": 3,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 4,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 5,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 6,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 7,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 8,
        "fort": 6,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 9,
        "fort": 6,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 10,
        "fort": 7,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Handle Animal",
      "Intimidate",
      "Jump",
      "Profession",
      "Ride",
      "Swim"
    ],
    "features": [
      f("Warrior Basics", "Alignment: any. Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and all shields, including tower shields. Warriors are soldiers, town guards, mercenaries, and militia - trained fighters without the fighter's broad feat training. The class has no other class features.", undefined, "d20SRD — Classes: Warrior", "https://www.d20srd.org/srd/npcClasses/warrior.htm"),
    ].map((x) => x as FeatureDefinition)
  }
];
