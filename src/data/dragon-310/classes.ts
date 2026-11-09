// Dragon Magazine #310 (Aug 2003) variant base classes: the 12 specialist
// fighter variants from "Variant Fighter Classes for Your Game" by Clifford
// Horowitz, and the 6 monk variants from the issue's Monks article. (The
// paladin article, "Champions of the Divine," shipped separately via the
// dragon-paladins pack as Blendcrafter v20.88.)
// Extracted in the Dragon Magazine treatment program (issue #310 pass).
// Staging pack: ~/workspace/library-staging/packs/dragon-magazine/issue-310/
// — MANIFEST.md (provenance, chassis checks, editorial decisions and
// corrections), SCREENING.md (APOC flags), reference.md (the 8 monk
// fighting styles and the 2 rogue special abilities — no catalog
// mechanism). Sources: the Dragon #310 magazine text on archive.org
// (primary) cross-checked against srd.dndtools.org. Each variant is built
// on its parent class's 3.5 chassis with the printed swaps applied;
// progressions cover levels 1-10, as the builder models base classes.
// Feature text is a faithful mechanical paraphrase in our own words.
// Id notes: the Kensai and the Knight carry -310 ids (kensai-310,
// knight-310) — the plain ids belong to the Complete Warrior prestige
// class and the Player's Handbook II class; both same-name records live.

import type {
  ClassDefinition,
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
  name: string;
  description: string;
  level?: number;
}

interface RawClass {
  id: string;
  name: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression: string;
  goodSaves: string[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  features: RawFeature[];
}

const RAW: RawClass[] = [
  {
    "id": "bodyguard",
    "name": "Bodyguard",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Diplomacy",
      "Gather Information",
      "Handle Animal",
      "Intimidate",
      "Listen",
      "Ride",
      "Search",
      "Sense Motive",
      "Spot"
    ],
    "features": [
      { "name": "Bodyguard Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Strength, Charisma, and Wisdom. Weapon and armor proficiencies: as the standard fighter — all simple and martial weapons, all armor (light, medium, and heavy), and shields (including tower shields)." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the bodyguard gains a bonus feat, which must be selected from the following list: Alertness, Animal Affinity, Blind-Fight, Combat Expertise, Combat Reflexes, Dodge, Great Fortitude, Improved Critical, Improved Disarm, Improved Initiative, Improved Shield Bash, Improved Trip, Investigator, Iron Will, Lightning Reflexes, Mobility, Negotiator, Persuasive, Power Attack, Quick Draw, Run, Spring Attack, Toughness, Weapon Focus, Weapon Specialization, Whirlwind Attack. She must still meet all prerequisites for a bonus feat. At any bonus-feat level she may instead choose one of this class's special abilities (Cover, Clear the Path).", "level": 1 },
      { "name": "Cover", "description": "Special ability, chosen in place of a bonus feat. The bodyguard can give an adjacent creature the benefit of her shield bonus to Armor Class, or of the dodge bonus provided by her use of the Combat Expertise feat, or both, as a free action; if she wishes, she may give her shield bonus to one adjacent creature and her Combat Expertise dodge bonus to a different adjacent creature. While she does this, she does not gain those benefits to her own AC. If a creature gaining protection moves more than 5 feet from the bodyguard, it immediately loses the defensive bonus. The shield or dodge bonus provided by the bodyguard stacks with such bonuses the protected character already has.", "level": 1 },
      { "name": "Clear the Path", "description": "Special ability, chosen in place of a bonus feat. The bodyguard gains the Cleave and Great Cleave feats, but they apply only while the bodyguard fights defensively, uses the Combat Expertise feat, or gives her shield bonus to another creature by using the Cover special ability.", "level": 1 }
    ]
  },
  {
    "id": "commander",
    "name": "Commander",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Intimidate",
      "Knowledge (architecture and engineering)",
      "Profession (siege engineer)",
      "Ride",
      "Sense Motive",
      "Spot"
    ],
    "features": [
      { "name": "Commander Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Charisma, Strength, and Wisdom. Weapon and armor proficiencies: as the standard fighter — all simple and martial weapons, all armor (light, medium, and heavy), and shields (including tower shields)." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the commander gains a bonus feat, which must be selected from the following list: Alertness, Animal Affinity, Cleave, Combat Reflexes, Dodge, Exotic Weapon Proficiency, Great Fortitude, Greater Weapon Focus, Improved Bull Rush, Improved Critical, Improved Initiative, Improved Overrun, Improved Shield Bash, Iron Will, Leadership, Mobility, Mounted Combat, Negotiator, Persuasive, Power Attack, Quick Draw, Spring Attack, Toughness, Trample, Weapon Focus, Whirlwind Attack. He must still meet all prerequisites for a bonus feat. At any bonus-feat level he may instead choose one of this class's special abilities (Helpful Hints, Rousing Speech).", "level": 1 },
      { "name": "Helpful Hints", "description": "Special ability, chosen in place of a bonus feat. By standing back and surveying a fight, the commander can shout quick directions to his comrades, pointing out openings and incoming attacks: he can use the aid another action from up to 60 feet away, giving an ally in melee combat with an opponent a +2 bonus to her next attack roll against that opponent, or a +2 bonus to AC against the next attack that opponent makes against her, so long as the attack comes before the commander's next turn. As normal for aid another, this takes a standard action and requires a successful attack roll against AC 10; in addition, the ally must be able to hear and understand the commander.", "level": 1 },
      { "name": "Rousing Speech", "description": "Special ability, chosen in place of a bonus feat; a commander cannot take this ability until 2nd level. As a full-round action that does not provoke an attack of opportunity, the commander delivers a stirring speech to his companions: if he succeeds at a Diplomacy check (DC 15), allies within 60 feet gain a +1 morale bonus to attacks for 1 round, plus 1 additional round for each point by which the check result exceeds the DC. The commander may use this ability once per day for every two commander class levels he has.", "level": 2 }
    ]
  },
  {
    "id": "corsair",
    "name": "Corsair",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Appraise",
      "Balance",
      "Climb",
      "Craft",
      "Jump",
      "Profession (sailor)",
      "Spot",
      "Swim",
      "Use Rope"
    ],
    "features": [
      { "name": "Corsair Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Dexterity, Strength, and Constitution. Weapon and armor proficiencies: all simple and martial weapons, light armor, and shields (except tower shields)." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the corsair gains a bonus feat, which must be selected from the following list: Acrobatic, Agile, Athletic, Cleave, Combat Expertise, Combat Reflexes, Dodge, Exotic Weapon Proficiency, Great Cleave, Great Fortitude, Greater Two-Weapon Fighting, Improved Bull Rush, Improved Critical, Improved Disarm, Improved Grapple, Improved Initiative, Improved Sunder, Improved Trip, Improved Two-Weapon Fighting, Improved Unarmed Strike, Power Attack, Quick Draw, Skill Focus (any class skill), Toughness, Two-Weapon Fighting, Two-Weapon Defense, Weapon Finesse, Weapon Focus, Weapon Specialization. She must still meet all prerequisites for a bonus feat. The corsair also gains one of this class's special abilities for free at 1st level and another at 2nd level, and at any bonus-feat level she may choose a special ability (Climb-Fighting, Rope Movement, Slow Fall, Swinging Bull Rush, Big Breath, Ocean Tangle) in place of a bonus feat.", "level": 1 },
      { "name": "Climb-Fighting", "description": "Special ability (free at 1st or 2nd level, or chosen in place of a bonus feat). The corsair is so used to fighting in the rigging of a ship that she is no longer considered flat-footed when climbing.", "level": 1 },
      { "name": "Rope Movement", "description": "Special ability (free at 1st or 2nd level, or chosen in place of a bonus feat). The corsair may use the Use Rope skill in place of Tumble when trying to move through threatened areas, provided there is rigging, rope, vine, or something else from which she can swing. As with Tumble, 5 or more ranks in Jump grant a +2 synergy bonus to Use Rope checks made to move past foes this way.", "level": 1 },
      { "name": "Slow Fall", "description": "Special ability (free at 1st or 2nd level, or chosen in place of a bonus feat). Whenever the corsair is within reach of a sail, tapestry, or similar item, she may use it to slow her fall, driving a bladed weapon through the cloth and riding it down; she can likewise use a rope or pole that fits in her hand. When using this ability, she treats the fall as 30 feet shorter than its actual distance for purposes of calculating damage. She may take this ability multiple times and the distance stacks each time, but she can only slow her fall for the length of the cloth or rope. She may additionally use the Jump and Tumble skills to treat the fall as a shorter distance if she wishes.", "level": 1 },
      { "name": "Swinging Bull Rush", "description": "Special ability (free at 1st or 2nd level, or chosen in place of a bonus feat). If the corsair can swing from something while making a bull rush attack, she can use the momentum to her benefit: for every 5 feet swung in the attack, she adds +1 to the opposed Strength check. If she wins the opposed check, she forces the opponent back an additional 5 feet, and she does not need to move with the opponent for those 5 feet. This attack still provokes an attack of opportunity unless the corsair has the Improved Bull Rush feat.", "level": 1 },
      { "name": "Big Breath", "description": "Special ability (free at 1st or 2nd level, or chosen in place of a bonus feat). The corsair has learned to control her need for air: when she must start making Constitution checks to avoid drowning, she only needs to make the check every other round. The check still increases by one each time it is made, so it rises at half the normal rate.", "level": 1 },
      { "name": "Ocean Tangle", "description": "Special ability (free at 1st or 2nd level, or chosen in place of a bonus feat). Whenever the corsair is in water deep enough to swim in, she can use a Swim check instead of a grapple check in any opposed grapple check.", "level": 1 }
    ]
  },
  {
    "id": "exoticist",
    "name": "Exoticist",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Intimidate",
      "Jump",
      "Swim",
      "Tumble"
    ],
    "features": [
      { "name": "Exoticist Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Strength or Dexterity, and Constitution. Weapon and armor proficiencies: simple weapons, all armor (heavy, medium, and light), and shields (including tower shields) — and, at 1st level, proficiency with four exotic weapons of her choice." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the exoticist gains a bonus feat, which must be selected from the following list: Blind-Fight, Cleave, Combat Expertise, Combat Reflexes, Dodge, Far Shot, Great Cleave, Greater Two-Weapon Fighting, Greater Weapon Focus, Greater Weapon Specialization, Improved Critical, Improved Disarm, Improved Feint, Improved Initiative, Improved Precise Shot, Improved Sunder, Improved Two-Weapon Fighting, Lightning Reflexes, Manyshot, Mobility, Point Blank Shot, Power Attack, Precise Shot, Quick Draw, Rapid Reload, Rapid Shot, Shot on the Run, Spring Attack, Two-Weapon Fighting, Two-Weapon Defense, Weapon Finesse, Weapon Focus, Weapon Specialization, Whirlwind Attack. Any bonus feat that applies to a specific kind of weapon must be applied to an exotic weapon the exoticist is proficient with. She must still meet all prerequisites for a bonus feat. At any bonus-feat level she may instead choose one of this class's special abilities (Dazzling Display, Exotic Attack, Strange Strike).", "level": 1 },
      { "name": "Dazzling Display", "description": "Special ability, chosen in place of a bonus feat; usable only while wielding an exotic weapon she is proficient with. By making a flamboyant display of her weapon, the exoticist hides her attack maneuvers and suddenly lashes out with an unexpected blow: she gains a +4 bonus to Bluff checks to feint in combat.", "level": 1 },
      { "name": "Exotic Attack", "description": "Special ability, chosen in place of a bonus feat; usable only while wielding an exotic weapon she is proficient with. The exoticist wields strange weapons strangely, and the unusual technique is harder to counter: she gains a +2 bonus to opposed trip attempts she initiates using her exotic weapon and to opposed disarm rolls.", "level": 1 },
      { "name": "Strange Strike", "description": "Special ability, chosen in place of a bonus feat; usable only while wielding an exotic weapon she is proficient with. The exoticist fully exploits her knowledge of exotic fighting styles: she gains a +1 competence bonus to all attack rolls if her opponent is not proficient with the weapon the exoticist wields.", "level": 1 }
    ]
  },
  {
    "id": "fencer",
    "name": "Fencer",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Bluff",
      "Diplomacy",
      "Gather Information",
      "Handle Animal",
      "Intimidate",
      "Ride",
      "Tumble"
    ],
    "features": [
      { "name": "Fencer Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Dexterity, Charisma, and Strength. Weapon and armor proficiencies: all simple and martial weapons, light armor, and the buckler." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the fencer gains a bonus feat, which must be selected from the following list: Acrobatic, Blind-Fight, Combat Expertise, Combat Reflexes, Dodge, Greater Two-Weapon Fighting, Greater Weapon Focus, Greater Weapon Specialization, Improved Critical, Improved Disarm, Improved Feint, Improved Initiative, Improved Two-Weapon Fighting, Lightning Reflexes, Mobility, Persuasive, Quick Draw, Shield Proficiency, Skill Focus (any class skill), Spring Attack, Two-Weapon Fighting, Two-Weapon Defense, Weapon Finesse, Weapon Focus, Weapon Specialization. He must still meet all prerequisites for a bonus feat. Starting at 4th level, he may instead choose one of this class's special abilities (Encouraging Blow, Denigrating Banter, Insurmountable Counter) in place of a bonus feat.", "level": 1 },
      { "name": "Encouraging Blow", "description": "Special ability, chosen in place of a bonus feat (available from 4th level). Whenever the fencer scores a threat against an opponent, regardless of whether it becomes a successful critical hit, he gains a +3 morale bonus to his Armor Class against that foe's attacks for a number of rounds equal to his Charisma bonus (minimum 1). If the threat becomes a critical hit, the morale bonus is doubled. This ability does not work against creatures with an Intelligence score lower than 3 or those immune to mind-influencing effects.", "level": 4 },
      { "name": "Denigrating Banter", "description": "Special ability, chosen in place of a bonus feat (available from 4th level). As a standard action, the fencer baits and taunts a foe: the fencer and the target make an opposed Charisma check, and if the target fails to equal the fencer's check, the target's base attack bonus is penalized by -2, with the penalty increasing by 1 for every 5 points by which the creature failed to equal the fencer's check. If the target's base attack bonus slips below the minimum required for any feat, special ability, or prestige class it possesses, it loses the use of it until its base attack bonus again meets the requirement, and a target whose base attack bonus falls below what is needed for multiple attacks on a full attack loses the appropriate number of attacks. The effect lasts a number of rounds equal to the fencer's Charisma bonus plus 1 (minimum 1); the effects of multiple denigrating banter attempts do not stack. This is a language-dependent, sonic, mind-affecting effect; creatures who cannot understand or hear the fencer are immune. A fencer may use this ability a number of times per day equal to 3 + his Charisma bonus.", "level": 4 },
      { "name": "Insurmountable Counter", "description": "Special ability, chosen in place of a bonus feat (available from 4th level). With a quick read of his opponent, the fencer identifies one of his foe's techniques and assumes a fighting posture that nullifies it: when attacked by a foe using Power Attack or Combat Expertise, the fencer gains a +2 dodge bonus to AC.", "level": 4 }
    ]
  },
  {
    "id": "horseman",
    "name": "Horseman",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Balance",
      "Craft",
      "Handle Animal",
      "Jump",
      "Ride",
      "Tumble"
    ],
    "features": [
      { "name": "Horseman Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Dexterity, Strength, and Charisma. Weapon and armor proficiencies: all simple and martial weapons, light armor, and shields (except tower shields)." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the horseman gains a bonus feat, which must be selected from the following list: Cleave, Combat Expertise, Combat Reflexes, Dodge, Exotic Weapon Proficiency, Great Cleave, Greater Weapon Focus, Greater Weapon Specialization, Improved Critical, Improved Initiative, Improved Sunder, Lightning Reflexes, Mobility, Mounted Archery, Mounted Combat, Power Attack, Ride-By Attack, Spirited Charge, Trample, Weapon Finesse, Weapon Focus, Weapon Specialization. He must still meet all prerequisites for a bonus feat. At any bonus-feat level he may instead choose one of this class's special abilities (Quick Turn, Share Shield, Spur, Steady Hand).", "level": 1 },
      { "name": "Quick Turn", "description": "Special ability, chosen in place of a bonus feat. When making a charge on a mount, the horseman may make a number of turns, each of not more than 90 degrees, equal to the mount's Dexterity modifier. He must succeed at a Ride check (DC 15) at each turn, or the charge becomes a double move and the mount cannot attack.", "level": 1 },
      { "name": "Share Shield", "description": "Special ability, chosen in place of a bonus feat. The horseman may share his shield bonus with his mount as a move action by making a successful Ride check (DC 15).", "level": 1 },
      { "name": "Spur", "description": "Special ability, chosen in place of a bonus feat. The horseman can urge his mount to greater speeds, adding 10 feet to the mount's base speed for one round. A mount can be spurred a number of times per day equal to its Constitution bonus.", "level": 1 },
      { "name": "Steady Hand", "description": "Special ability, chosen in place of a bonus feat. The horseman has developed such a sense of trust with his mount that he can help it overcome its primal fears and foreign influences: any time the mount must succeed at a Will save to overcome a mind-influencing effect, the horseman may make a Ride check (DC 10 + the effect's save DC); if successful, the check result counts as a successful Will save for the mount.", "level": 1 }
    ]
  },
  {
    "id": "knight-310",
    "name": "Knight",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Jump",
      "Ride"
    ],
    "features": [
      { "name": "Knight Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310) — this is the mounted fighter variant, not the Player's Handbook II base class of the same name. Levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Strength, Charisma, and Constitution. Weapon and armor proficiencies: all simple and martial weapons, all armor (heavy, medium, and light), and shields (except tower shields)." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the knight gains a bonus feat, which must be selected from the following list: Athletic, Cleave, Combat Reflexes, Exotic Weapon Proficiency, Great Cleave, Great Fortitude, Greater Weapon Focus, Greater Weapon Specialization, Improved Bull Rush, Improved Critical, Improved Overrun, Improved Sunder, Mobility, Mounted Combat, Negotiator, Power Attack, Ride-By Attack, Spirited Charge, Toughness, Trample, Weapon Focus, Weapon Specialization. He must still meet all prerequisites for a bonus feat. At any bonus-feat level he may instead choose one of this class's special abilities (Hard Charge, Jousting Charge, Staggered Gait, Vicious Mount).", "level": 1 },
      { "name": "Hard Charge", "description": "Special ability, chosen in place of a bonus feat. When the knight makes a mounted charge, both the knight's and the mount's attacks gain a +2 bonus to damage, so long as the mount has moved a distance equal to or greater than its speed.", "level": 1 },
      { "name": "Jousting Charge", "description": "Special ability, chosen in place of a bonus feat. If the knight has a heavy or light shield readied when making a mounted charge, he does not suffer the -2 penalty to his Armor Class for charging (his mount still does).", "level": 1 },
      { "name": "Staggered Gait", "description": "Special ability, chosen in place of a bonus feat; the knight must have the Trample feat to take this ability. If the knight successfully overruns an opponent using the Trample feat, his mount may take a -2 penalty to all its attack rolls for the round in order to gain a second hoof attack against the tripped opponent.", "level": 1 },
      { "name": "Vicious Mount", "description": "Special ability, chosen in place of a bonus feat. The knight works with his mount to make it especially potent when it attacks: the mount's attacks gain a +1 bonus to damage when the knight is riding the mount.", "level": 1 }
    ]
  },
  {
    "id": "pugilist",
    "name": "Pugilist",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Bluff",
      "Climb",
      "Intimidate",
      "Sense Motive",
      "Spot",
      "Swim"
    ],
    "features": [
      { "name": "Pugilist Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Strength, Constitution, and Dexterity. Weapon and armor proficiencies: all simple weapons and all armor (heavy, medium, and light). The pugilist gains the Improved Unarmed Strike and Endurance feats for free at 1st level, and her unarmed strikes deal 1d4 points of damage per strike (1d3 for a Small pugilist)." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the pugilist gains a bonus feat, which must be selected from the following list, and any bonus feat that applies to a specific kind of weapon must be applied to unarmed strike: Alertness, Athletic, Blind-Fight, Cleave, Combat Expertise, Combat Reflexes, Diehard, Dodge, Great Cleave, Great Fortitude, Greater Two-Weapon Fighting, Greater Weapon Focus, Greater Weapon Specialization, Improved Bull Rush, Improved Critical, Improved Disarm, Improved Feint, Improved Grapple, Improved Initiative, Improved Overrun, Improved Trip, Improved Two-Weapon Fighting, Mobility, Persuasive, Power Attack, Snatch Arrows, Spring Attack, Stunning Fist, Toughness, Two-Weapon Fighting, Weapon Finesse, Weapon Focus, Weapon Specialization, Whirlwind Attack. She must still meet all prerequisites for a bonus feat. At any bonus-feat level she may instead choose one of this class's special abilities (Combo, Heavy Hitting, Iron Jaw, Shake It Off).", "level": 1 },
      { "name": "Combo", "description": "Special ability, chosen in place of a bonus feat. The pugilist practices a series of blows designed to flow one after the other, each one setting up the next: when using a combo, she averages her first two unarmed strike attacks in a full attack and uses the resulting bonus for both strikes (a pugilist with a +10/+5 attack progression, for example, attacks at +7/+7 when using a combo). She can take this ability more than once, each time adding one more attack gained from a high base attack bonus to the combo.", "level": 1 },
      { "name": "Heavy Hitting", "description": "Special ability, chosen in place of a bonus feat; the pugilist cannot take this ability until 2nd level. Her unarmed strikes inflict an extra +2 nonlethal damage, even when she strikes to deal lethal damage. She can take this ability multiple times.", "level": 2 },
      { "name": "Iron Jaw", "description": "Special ability, chosen in place of a bonus feat. Whenever the pugilist suffers nonlethal damage, the damage is reduced by a number equal to her Constitution bonus. She also gains a +1 bonus to saves to resist any attack that would leave her stunned.", "level": 1 },
      { "name": "Shake It Off", "description": "Special ability, chosen in place of a bonus feat. The pugilist develops nonlethal damage only (that is, she shrugs off punishment that would stagger others) and reduces the duration of all stunning effects by 1 round, with a minimum of 1 round. She can take this ability multiple times; its effects stack.", "level": 1 }
    ]
  },
  {
    "id": "shield-bearer",
    "name": "Shield Bearer",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Intimidate",
      "Jump",
      "Ride"
    ],
    "features": [
      { "name": "Shield Bearer Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Strength, Constitution, and Dexterity. Weapon and armor proficiencies: all simple and martial weapons, all armor (heavy, medium, and light), and shields (including tower shields); in addition, shield bearers are proficient with armor spikes." },
      { "name": "Bonus Feats", "description": "The shield bearer must take the Improved Shield Bash feat as her first fighter bonus feat. She otherwise gains bonus feats as the normal fighter class does (at 1st level and every even level thereafter), but she must select them from the following list, and any bonus feat that applies to a specific kind of weapon must be applied to a type of shield for the purposes of making shield bash attacks: Blind-Fight, Cleave, Combat Expertise, Combat Reflexes, Diehard, Dodge, Endurance, Great Cleave, Great Fortitude, Greater Two-Weapon Fighting, Greater Weapon Focus, Greater Weapon Specialization, Improved Bull Rush, Improved Critical, Improved Disarm, Improved Feint, Improved Grapple, Improved Initiative, Improved Overrun, Improved Trip, Improved Two-Weapon Fighting, Mobility, Persuasive, Power Attack, Spring Attack, Stunning Fist, Toughness, Two-Weapon Fighting, Weapon Finesse, Weapon Focus, Weapon Specialization, Whirlwind Attack. She must still meet all prerequisites for a bonus feat. At any bonus-feat level she may instead choose one of this class's special abilities (Armored Gait, Armored Grace, Armor Optimization, Fortification, Shield Strike).", "level": 1 },
      { "name": "Armored Gait", "description": "Special ability, chosen in place of a bonus feat. The shield bearer chooses one type of armor, such as a breastplate, and treats that armor as one weight category lighter for determining speed penalties: medium armor so chosen does not hinder her speed, while heavy armor still reduces it but still allows her to run at four times her normal rate. This does not reduce the armor's weight category for the barbarian fast movement ability, ranger class abilities, or other abilities dependent on armor weight category. She may take this ability multiple times, but each time it applies to a new type of armor.", "level": 1 },
      { "name": "Armored Grace", "description": "Special ability, chosen in place of a bonus feat. The shield bearer chooses one type of armor, such as a breastplate, and increases the maximum Dexterity bonus of that armor by 1 when she wears it. She may take this ability multiple times, but each time it applies to a new type of armor.", "level": 1 },
      { "name": "Armor Optimization", "description": "Special ability, chosen in place of a bonus feat. The shield bearer chooses one type of armor, such as a breastplate, and gains a +1 bonus to the armor bonus of that armor when she wears it, having learned to twist and shift so as to take blows on the most protective parts of the armor; she loses this bonus whenever she is denied her Dexterity bonus to AC. She may take this ability multiple times, but each time it applies to a new type of armor.", "level": 1 },
      { "name": "Fortification", "description": "Special ability, chosen in place of a bonus feat. The shield bearer chooses one type of armor, such as a breastplate, and gains a +2 bonus to the armor bonus of that armor, but this bonus applies only when an opponent is rolling to confirm a critical hit against her. This armor bonus stacks with all other armor bonuses, including Armor Optimization. She may take this ability multiple times, but each time it applies to a new type of armor.", "level": 1 },
      { "name": "Shield Strike", "description": "Special ability, chosen in place of a bonus feat. The shield bearer can use her shield in place of an unarmed attack to perform special maneuvers: treat this ability as the Improved Unarmed Strike feat for purposes of taking other feats in the unarmed attack chain, such as Stunning Fist and Deflect Arrows — except that instead of having a free hand, the shield bearer must have her shield readied in order to use those feats.", "level": 1 }
    ]
  },
  {
    "id": "survivalist",
    "name": "Survivalist",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Balance",
      "Climb",
      "Craft",
      "Hide",
      "Jump",
      "Move Silently",
      "Survival",
      "Swim",
      "Use Rope"
    ],
    "features": [
      { "name": "Survivalist Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Strength, Dexterity, Constitution, and Wisdom. Weapon and armor proficiencies: all simple and martial weapons, light and medium armor, and shields (except tower shields). The survivalist variant has no special abilities in print — its distinction is its class skills, its armor training, and its restricted bonus feat list." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the survivalist gains a bonus feat, which must be selected from the following list: Blind-Fight, Combat Expertise, Combat Reflexes, Diehard, Dodge, Endurance, Far Shot, Great Fortitude, Greater Weapon Focus, Greater Weapon Specialization, Improved Bull Rush, Improved Critical, Improved Disarm, Improved Grapple, Improved Initiative, Improved Overrun, Improved Precise Shot, Improved Trip, Improved Unarmed Strike, Iron Will, Lightning Reflexes, Mobility, Point Blank Shot, Power Attack, Precise Shot, Run, Self-Sufficient, Shot on the Run, Skill Focus (any class skill), Spring Attack, Stealthy, Toughness, Track, Two-Weapon Fighting, Weapon Finesse, Weapon Focus, Weapon Specialization. He must still meet all prerequisites for a bonus feat.", "level": 1 }
    ]
  },
  {
    "id": "targetteer",
    "name": "Targetteer",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/fighter.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Hide",
      "Move Silently",
      "Profession",
      "Ride"
    ],
    "features": [
      { "name": "Targetteer Basics", "description": "Alignment: any. A specialist fighter variant (Dragon Magazine #310): levels in this class count as fighter levels for qualifying for feats such as Weapon Specialization and other game elements, and a character who takes this class cannot also take levels in the fighter class or in a different specialist fighter class. Key abilities: Dexterity, Strength, and Constitution. Weapon and armor proficiencies: all simple weapons, all ranged martial weapons, all armor (light, medium, and heavy), and the buckler. At 1st level he may also choose two exotic weapon proficiencies, but these must be ranged weapons." },
      { "name": "Bonus Feats", "description": "At 1st level and every even level thereafter (2nd, 4th, 6th, 8th, 10th, and on to 20th), the targetteer gains a bonus feat, which must be selected from the following list: Dodge, Exotic Weapon Proficiency, Far Shot, Greater Weapon Focus, Greater Weapon Specialization, Improved Critical, Improved Initiative, Improved Precise Shot, Improved Unarmed Strike, Lightning Reflexes, Manyshot, Martial Weapon Proficiency, Mobility, Point Blank Shot, Precise Shot, Rapid Reload, Rapid Shot, Run, Shot on the Run, Stealthy, Weapon Focus, Weapon Specialization. He must still meet all prerequisites for a bonus feat. At any bonus-feat level he may instead choose one of this class's special abilities (Arrow Swarm, Sniper, Vital Aim).", "level": 1 },
      { "name": "Arrow Swarm", "description": "Special ability, chosen in place of a bonus feat; the targetteer must have the Rapid Shot feat to take this ability. By taking a -5 penalty to all attack rolls for a round, the targetteer may make two additional ranged attacks at his highest attack bonus; he must be making a full attack to make use of Arrow Swarm.", "level": 1 },
      { "name": "Sniper", "description": "Special ability, chosen in place of a bonus feat. When using the full attack option, the targetteer can sacrifice attacks to gain deadly accuracy: for each attack from a full attack sacrificed, the threat range of the targetteer's weapon increases by 1 for the next attack (a weapon with a threat range of 19-20 that sacrifices one attack threatens on 18-20). The targetteer can sacrifice multiple attacks to further increase the threat range, but he cannot sacrifice all of his attacks from a full attack action.", "level": 1 },
      { "name": "Vital Aim", "description": "Special ability, chosen in place of a bonus feat. The targetteer may add his Dexterity modifier to his damage rolls with a ranged weapon attack instead of his Strength bonus. He cannot replace a Strength penalty to damage rolls with his Dexterity modifier unless his Dexterity modifier is also a penalty, and he cannot use his Dexterity modifier to replace his Strength modifier when attacking creatures immune to critical hits.", "level": 1 }
    ]
  },
  {
    "id": "holy-monk",
    "name": "Holy Monk",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/monk.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 7, "will": 7 }
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
      { "name": "Holy Monk Basics", "description": "Alignment: any lawful — a monk who becomes nonlawful cannot gain new levels as a monk (she retains all monk abilities). A monk variant (Dragon Magazine #310): the holy monk gives up the bonus feats a standard monk gains at 1st and 6th level, and in exchange gains the paladin's smite evil, aura of courage, and turn undead abilities. A holy monk may multiclass freely between the monk and paladin classes, and her monk levels stack with her paladin levels for determining her smite evil uses per day and her effective level for turning undead. Key abilities: Wisdom (Armor Class and several abilities), Strength, Dexterity, Constitution, and Charisma (smite evil and turning). Weapon proficiencies: club, light crossbow, heavy crossbow, dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. Not proficient with any armor or shields; a monk who wears armor, uses a shield, or carries a medium or heavy load loses her AC bonus, her fast movement, and her flurry of blows." },
      { "name": "AC Bonus (Ex)", "description": "When unarmored and unencumbered, she adds her Wisdom bonus (if any) to her AC; the bonus applies against touch attacks and while flat-footed. In addition, her AC improves by +1 at 5th level, +2 at 10th, +3 at 15th, and +4 at 20th. These bonuses are lost when she is immobilized or helpless, wears any armor, carries a shield, or carries a medium or heavy load.", "level": 1 },
      { "name": "Flurry of Blows (Ex)", "description": "When unarmored, she may make a flurry of blows: one extra attack at her full base attack bonus, but she and every other attack she makes that round take a -2 penalty; the penalty lessens to -1 at 5th level and disappears entirely at 9th. She may attack only with unarmed strikes or special monk weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham). At 11th level (greater flurry) she gains a second extra attack at her full base attack bonus.", "level": 1 },
      { "name": "Unarmed Strike", "description": "She gains Improved Unarmed Strike as a bonus feat. Her unarmed attacks deal 1d6 damage for a Medium monk, increasing to 1d8 at 4th level, 1d10 at 8th, 2d6 at 12th, 2d8 at 16th, and 2d10 at 20th; she may choose to deal lethal or nonlethal damage with no penalty on the attack roll.", "level": 1 },
      { "name": "Smite Evil (Su)", "description": "As the paladin ability: once per day, she may attempt to smite evil with one normal melee attack, adding her Charisma bonus (if any) to the attack roll and dealing 1 extra point of damage per monk level; against a creature that is not evil the smite has no effect, but the ability is still used up for the day. She gains additional uses per day at 5th level and every five levels thereafter, as a paladin does, and her monk levels stack with her paladin levels for determining her uses per day.", "level": 1 },
      { "name": "Evasion (Ex)", "description": "On a successful Reflex saving throw against an effect that normally allows a saving throw for half damage, she takes no damage instead. Evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 2 },
      { "name": "Bonus Feat", "description": "At 2nd level she may select either Combat Reflexes or Deflect Arrows as a bonus feat, without needing the prerequisites normally required. (The holy monk gives up the bonus feats a standard monk gains at 1st and 6th level.)", "level": 2 },
      { "name": "Fast Movement (Ex)", "description": "When wearing no armor and carrying no more than a light load, her speed gains an enhancement bonus of +10 feet; the bonus increases to +20 feet at 6th level, +30 at 9th, +40 at 12th, +50 at 15th, and +60 at 18th.", "level": 3 },
      { "name": "Still Mind (Ex)", "description": "She gains a +2 bonus on saving throws against enchantment spells and effects.", "level": 3 },
      { "name": "Aura of Courage (Su)", "description": "As the paladin ability: she is immune to fear (magical or otherwise), and each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects; this ability functions only while she is conscious.", "level": 3 },
      { "name": "Ki Strike (Su)", "description": "Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. At 10th level they are also treated as lawful weapons for that purpose, and at 16th level also as adamantine weapons (including for bypassing hardness).", "level": 4 },
      { "name": "Slow Fall (Ex)", "description": "When within arm's reach of a wall, she can use the wall to slow her descent, treating a fall as 20 feet shorter than it actually is for the purpose of fall damage. The reduction increases to 30 feet at 6th level and by a further 10 feet every two levels thereafter, until at 20th level she can fall any distance without harm beside a wall.", "level": 4 },
      { "name": "Turn Undead (Su)", "description": "As the paladin ability: she can turn undead as a cleric of three levels lower would, a number of times per day equal to 3 + her Charisma modifier; her monk levels stack with her paladin levels for her effective level for turning undead.", "level": 4 },
      { "name": "Purity of Body (Ex)", "description": "She gains immunity to all diseases except for supernatural and magical diseases (such as mummy rot and lycanthropy).", "level": 5 },
      { "name": "Wholeness of Body (Su)", "description": "She can heal her own wounds: each day she can cure up to twice her monk level in hit points, and she can spread this healing out among several uses; she can heal only herself.", "level": 7 },
      { "name": "Improved Evasion (Ex)", "description": "She takes no damage on a successful Reflex saving throw against an effect that allows a save for half damage, and only half damage on a failed save. Improved evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 9 },
      { "name": "Diamond Body (Su)", "description": "She gains immunity to poisons of all kinds.", "level": 11 },
      { "name": "Abundant Step (Su)", "description": "Once per day, she can slip magically between spaces as if using a dimension door spell, with a caster level equal to one-half her monk level (rounded down).", "level": 12 },
      { "name": "Diamond Soul (Ex)", "description": "She gains spell resistance equal to her current monk level + 10.", "level": 13 },
      { "name": "Quivering Palm (Su)", "description": "Once per week, she can set up potentially lethal vibrations within the body of a creature she strikes with an unarmed attack (she must announce her intent before making the attack roll). If the attack deals damage, she may thereafter will the vibrations to kill the victim at any time within 1 day per monk level unless it succeeds at a Fortitude save (DC 10 + one-half her monk level + her Wisdom modifier). She can have only one victim of this ability at a time.", "level": 15 },
      { "name": "Timeless Body (Ex)", "description": "She no longer takes ability score penalties for aging and cannot be magically aged; bonuses she has accrued from aging still apply, and she still dies of old age when her time is up.", "level": 17 },
      { "name": "Tongue of the Sun and Moon (Ex)", "description": "She can speak with any living creature.", "level": 17 },
      { "name": "Empty Body (Su)", "description": "She can assume an ethereal state for a total of up to her monk level in rounds per day, which she may divide among multiple uses; while ethereal she is treated as incorporeal.", "level": 19 },
      { "name": "Perfect Self (Su)", "description": "She becomes a magical creature: she is treated as an outsider for the purpose of spells and magical effects and gains damage reduction 10/magic. Unlike other outsiders, she can still be brought back from the dead as a member of her former creature type.", "level": 20 }
    ]
  },
  {
    "id": "hunter-monk",
    "name": "Hunter Monk",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/monk.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 7, "will": 7 }
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
      "Survival",
      "Swim",
      "Tumble"
    ],
    "features": [
      { "name": "Hunter Monk Basics", "description": "Alignment: any lawful — a monk who becomes nonlawful cannot gain new levels as a monk (she retains all monk abilities). A monk variant (Dragon Magazine #310): the hunter monk gives up the bonus feat a standard monk gains at 1st level and the slow fall ability, and in exchange gains the ranger's favored enemy and swift tracker abilities, plus Survival as a class skill. A hunter monk may multiclass freely between the monk and ranger classes, and her monk levels stack with her ranger levels for determining when new favored enemies are gained. Key abilities: Wisdom (Armor Class and several abilities), Strength, Dexterity, and Constitution. Weapon proficiencies: club, light crossbow, heavy crossbow, dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. Not proficient with any armor or shields; a monk who wears armor, uses a shield, or carries a medium or heavy load loses her AC bonus, her fast movement, and her flurry of blows." },
      { "name": "AC Bonus (Ex)", "description": "When unarmored and unencumbered, she adds her Wisdom bonus (if any) to her AC; the bonus applies against touch attacks and while flat-footed. In addition, her AC improves by +1 at 5th level, +2 at 10th, +3 at 15th, and +4 at 20th. These bonuses are lost when she is immobilized or helpless, wears any armor, carries a shield, or carries a medium or heavy load.", "level": 1 },
      { "name": "Flurry of Blows (Ex)", "description": "When unarmored, she may make a flurry of blows: one extra attack at her full base attack bonus, but she and every other attack she makes that round take a -2 penalty; the penalty lessens to -1 at 5th level and disappears entirely at 9th. She may attack only with unarmed strikes or special monk weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham). At 11th level (greater flurry) she gains a second extra attack at her full base attack bonus.", "level": 1 },
      { "name": "Unarmed Strike", "description": "She gains Improved Unarmed Strike as a bonus feat. Her unarmed attacks deal 1d6 damage for a Medium monk, increasing to 1d8 at 4th level, 1d10 at 8th, 2d6 at 12th, 2d8 at 16th, and 2d10 at 20th; she may choose to deal lethal or nonlethal damage with no penalty on the attack roll.", "level": 1 },
      { "name": "Favored Enemy (Ex)", "description": "As the ranger ability: she selects a type of creature (and subtype, where applicable) as a favored enemy, gaining a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks against creatures of that type and a +2 bonus on weapon damage rolls against them — with ranged weapons, only against targets within 30 feet, and creatures immune to critical hits are immune to the extra damage. At 5th level and every five levels thereafter she may select an additional favored enemy, and the bonus against any one favored enemy (including the one just selected, if she wishes) increases by 2, exactly as a ranger does; her monk levels stack with her ranger levels for determining when new favored enemies are gained.", "level": 1 },
      { "name": "Evasion (Ex)", "description": "On a successful Reflex saving throw against an effect that normally allows a saving throw for half damage, she takes no damage instead. Evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 2 },
      { "name": "Bonus Feat", "description": "At 2nd level she may select either Combat Reflexes or Deflect Arrows as a bonus feat, and at 6th level either Improved Disarm or Improved Trip, without needing the prerequisites normally required. (The hunter monk gives up the bonus feat a standard monk gains at 1st level.)", "level": 2 },
      { "name": "Fast Movement (Ex)", "description": "When wearing no armor and carrying no more than a light load, her speed gains an enhancement bonus of +10 feet; the bonus increases to +20 feet at 6th level, +30 at 9th, +40 at 12th, +50 at 15th, and +60 at 18th.", "level": 3 },
      { "name": "Still Mind (Ex)", "description": "She gains a +2 bonus on saving throws against enchantment spells and effects.", "level": 3 },
      { "name": "Ki Strike (Su)", "description": "Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. At 10th level they are also treated as lawful weapons for that purpose, and at 16th level also as adamantine weapons (including for bypassing hardness).", "level": 4 },
      { "name": "Purity of Body (Ex)", "description": "She gains immunity to all diseases except for supernatural and magical diseases (such as mummy rot and lycanthropy).", "level": 5 },
      { "name": "Wholeness of Body (Su)", "description": "She can heal her own wounds: each day she can cure up to twice her monk level in hit points, and she can spread this healing out among several uses; she can heal only herself.", "level": 7 },
      { "name": "Swift Tracker (Ex)", "description": "As the ranger ability: she can move at her normal speed while following tracks without taking the normal -5 penalty on the Survival check, and she takes only a -10 penalty (instead of -20) when moving at up to twice her normal speed while tracking.", "level": 8 },
      { "name": "Improved Evasion (Ex)", "description": "She takes no damage on a successful Reflex saving throw against an effect that allows a save for half damage, and only half damage on a failed save. Improved evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 9 },
      { "name": "Diamond Body (Su)", "description": "She gains immunity to poisons of all kinds.", "level": 11 },
      { "name": "Abundant Step (Su)", "description": "Once per day, she can slip magically between spaces as if using a dimension door spell, with a caster level equal to one-half her monk level (rounded down).", "level": 12 },
      { "name": "Diamond Soul (Ex)", "description": "She gains spell resistance equal to her current monk level + 10.", "level": 13 },
      { "name": "Quivering Palm (Su)", "description": "Once per week, she can set up potentially lethal vibrations within the body of a creature she strikes with an unarmed attack (she must announce her intent before making the attack roll). If the attack deals damage, she may thereafter will the vibrations to kill the victim at any time within 1 day per monk level unless it succeeds at a Fortitude save (DC 10 + one-half her monk level + her Wisdom modifier). She can have only one victim of this ability at a time.", "level": 15 },
      { "name": "Timeless Body (Ex)", "description": "She no longer takes ability score penalties for aging and cannot be magically aged; bonuses she has accrued from aging still apply, and she still dies of old age when her time is up.", "level": 17 },
      { "name": "Tongue of the Sun and Moon (Ex)", "description": "She can speak with any living creature.", "level": 17 },
      { "name": "Empty Body (Su)", "description": "She can assume an ethereal state for a total of up to her monk level in rounds per day, which she may divide among multiple uses; while ethereal she is treated as incorporeal.", "level": 19 },
      { "name": "Perfect Self (Su)", "description": "She becomes a magical creature: she is treated as an outsider for the purpose of spells and magical effects and gains damage reduction 10/magic. Unlike other outsiders, she can still be brought back from the dead as a member of her former creature type.", "level": 20 }
    ]
  },
  {
    "id": "martial-monk",
    "name": "Martial Monk",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/monk.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 3,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 7, "will": 7 }
    ],
    "classSkills": [
      "Balance",
      "Climb",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Escape Artist",
      "Hide",
      "Intimidate",
      "Jump",
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
      { "name": "Martial Monk Basics", "description": "Alignment: any lawful — a monk who becomes nonlawful cannot gain new levels as a monk (she retains all monk abilities). A monk variant (Dragon Magazine #310): the martial monk gives up one skill point per level (3 + Int modifier per level instead of 4, and so 4 fewer skill points at 1st level) and has no Knowledge skills as class skills; in exchange her monk bonus feats are chosen from the fighter bonus feat list, and Intimidate is a class skill for her. A martial monk may multiclass freely between the monk and fighter classes. Key abilities: Wisdom (Armor Class and several abilities), Strength, Dexterity, and Constitution. Weapon proficiencies: club, light crossbow, heavy crossbow, dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. Not proficient with any armor or shields; a monk who wears armor, uses a shield, or carries a medium or heavy load loses her AC bonus, her fast movement, and her flurry of blows." },
      { "name": "AC Bonus (Ex)", "description": "When unarmored and unencumbered, she adds her Wisdom bonus (if any) to her AC; the bonus applies against touch attacks and while flat-footed. In addition, her AC improves by +1 at 5th level, +2 at 10th, +3 at 15th, and +4 at 20th. These bonuses are lost when she is immobilized or helpless, wears any armor, carries a shield, or carries a medium or heavy load.", "level": 1 },
      { "name": "Flurry of Blows (Ex)", "description": "When unarmored, she may make a flurry of blows: one extra attack at her full base attack bonus, but she and every other attack she makes that round take a -2 penalty; the penalty lessens to -1 at 5th level and disappears entirely at 9th. She may attack only with unarmed strikes or special monk weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham). At 11th level (greater flurry) she gains a second extra attack at her full base attack bonus.", "level": 1 },
      { "name": "Unarmed Strike", "description": "She gains Improved Unarmed Strike as a bonus feat. Her unarmed attacks deal 1d6 damage for a Medium monk, increasing to 1d8 at 4th level, 1d10 at 8th, 2d6 at 12th, 2d8 at 16th, and 2d10 at 20th; she may choose to deal lethal or nonlethal damage with no penalty on the attack roll.", "level": 1 },
      { "name": "Bonus Feat", "description": "At 1st level, 2nd level, and 6th level, she gains a bonus feat chosen from the fighter bonus feat list (the feats noted as fighter bonus feats), instead of the pairs of options a standard monk chooses between at those levels.", "level": 1 },
      { "name": "Evasion (Ex)", "description": "On a successful Reflex saving throw against an effect that normally allows a saving throw for half damage, she takes no damage instead. Evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 2 },
      { "name": "Fast Movement (Ex)", "description": "When wearing no armor and carrying no more than a light load, her speed gains an enhancement bonus of +10 feet; the bonus increases to +20 feet at 6th level, +30 at 9th, +40 at 12th, +50 at 15th, and +60 at 18th.", "level": 3 },
      { "name": "Still Mind (Ex)", "description": "She gains a +2 bonus on saving throws against enchantment spells and effects.", "level": 3 },
      { "name": "Ki Strike (Su)", "description": "Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. At 10th level they are also treated as lawful weapons for that purpose, and at 16th level also as adamantine weapons (including for bypassing hardness).", "level": 4 },
      { "name": "Slow Fall (Ex)", "description": "When within arm's reach of a wall, she can use the wall to slow her descent, treating a fall as 20 feet shorter than it actually is for the purpose of fall damage. The reduction increases to 30 feet at 6th level and by a further 10 feet every two levels thereafter, until at 20th level she can fall any distance without harm beside a wall.", "level": 4 },
      { "name": "Purity of Body (Ex)", "description": "She gains immunity to all diseases except for supernatural and magical diseases (such as mummy rot and lycanthropy).", "level": 5 },
      { "name": "Wholeness of Body (Su)", "description": "She can heal her own wounds: each day she can cure up to twice her monk level in hit points, and she can spread this healing out among several uses; she can heal only herself.", "level": 7 },
      { "name": "Improved Evasion (Ex)", "description": "She takes no damage on a successful Reflex saving throw against an effect that allows a save for half damage, and only half damage on a failed save. Improved evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 9 },
      { "name": "Diamond Body (Su)", "description": "She gains immunity to poisons of all kinds.", "level": 11 },
      { "name": "Abundant Step (Su)", "description": "Once per day, she can slip magically between spaces as if using a dimension door spell, with a caster level equal to one-half her monk level (rounded down).", "level": 12 },
      { "name": "Diamond Soul (Ex)", "description": "She gains spell resistance equal to her current monk level + 10.", "level": 13 },
      { "name": "Quivering Palm (Su)", "description": "Once per week, she can set up potentially lethal vibrations within the body of a creature she strikes with an unarmed attack (she must announce her intent before making the attack roll). If the attack deals damage, she may thereafter will the vibrations to kill the victim at any time within 1 day per monk level unless it succeeds at a Fortitude save (DC 10 + one-half her monk level + her Wisdom modifier). She can have only one victim of this ability at a time.", "level": 15 },
      { "name": "Timeless Body (Ex)", "description": "She no longer takes ability score penalties for aging and cannot be magically aged; bonuses she has accrued from aging still apply, and she still dies of old age when her time is up.", "level": 17 },
      { "name": "Tongue of the Sun and Moon (Ex)", "description": "She can speak with any living creature.", "level": 17 },
      { "name": "Empty Body (Su)", "description": "She can assume an ethereal state for a total of up to her monk level in rounds per day, which she may divide among multiple uses; while ethereal she is treated as incorporeal.", "level": 19 },
      { "name": "Perfect Self (Su)", "description": "She becomes a magical creature: she is treated as an outsider for the purpose of spells and magical effects and gains damage reduction 10/magic. Unlike other outsiders, she can still be brought back from the dead as a member of her former creature type.", "level": 20 }
    ]
  },
  {
    "id": "raging-monk",
    "name": "Raging Monk",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/monk.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 7, "will": 7 }
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
      { "name": "Raging Monk Basics", "description": "Alignment: any lawful — a monk who becomes nonlawful cannot gain new levels as a monk (she retains all monk abilities). A monk variant (Dragon Magazine #310): the raging monk gives up flurry of blows, still mind, greater flurry, and quivering palm, and in exchange gains the barbarian's rage, greater rage, and mighty rage abilities. If a raging monk becomes chaotic and takes levels of barbarian, she retains her monk rage abilities and adds her monk levels to her barbarian levels for determining her rages per day and when she gains greater rage and mighty rage. Key abilities: Wisdom (Armor Class and several abilities), Strength, Dexterity, and Constitution. Weapon proficiencies: club, light crossbow, heavy crossbow, dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. Not proficient with any armor or shields; a monk who wears armor, uses a shield, or carries a medium or heavy load loses her AC bonus and her fast movement." },
      { "name": "AC Bonus (Ex)", "description": "When unarmored and unencumbered, she adds her Wisdom bonus (if any) to her AC; the bonus applies against touch attacks and while flat-footed. In addition, her AC improves by +1 at 5th level, +2 at 10th, +3 at 15th, and +4 at 20th. These bonuses are lost when she is immobilized or helpless, wears any armor, carries a shield, or carries a medium or heavy load.", "level": 1 },
      { "name": "Unarmed Strike", "description": "She gains Improved Unarmed Strike as a bonus feat. Her unarmed attacks deal 1d6 damage for a Medium monk, increasing to 1d8 at 4th level, 1d10 at 8th, 2d6 at 12th, 2d8 at 16th, and 2d10 at 20th; she may choose to deal lethal or nonlethal damage with no penalty on the attack roll.", "level": 1 },
      { "name": "Bonus Feat", "description": "At 1st level she may select either Improved Grapple or Stunning Fist as a bonus feat; at 2nd level, either Combat Reflexes or Deflect Arrows; and at 6th level, either Improved Disarm or Improved Trip. She need not meet the prerequisites normally required for these feats.", "level": 1 },
      { "name": "Rage (Ex)", "description": "As the barbarian ability: she can fly into a rage once per day (gaining one additional use per day at 4th level and every four levels thereafter). In a rage she temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but she takes a -2 penalty to Armor Class. The rage lasts for a number of rounds equal to 3 + her (newly improved) Constitution modifier, and she may end it prematurely. While raging, she cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration, nor can she cast spells or activate magic items by spell trigger, spell completion, or command word. At the end of the rage, she loses the rage modifiers and restrictions and becomes fatigued (-2 penalty to Strength, -2 penalty to Dexterity, unable to charge or run) for the duration of the current encounter.", "level": 1 },
      { "name": "Evasion (Ex)", "description": "On a successful Reflex saving throw against an effect that normally allows a saving throw for half damage, she takes no damage instead. Evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 2 },
      { "name": "Fast Movement (Ex)", "description": "When wearing no armor and carrying no more than a light load, her speed gains an enhancement bonus of +10 feet; the bonus increases to +20 feet at 6th level, +30 at 9th, +40 at 12th, +50 at 15th, and +60 at 18th.", "level": 3 },
      { "name": "Ki Strike (Su)", "description": "Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. At 10th level they are also treated as lawful weapons for that purpose, and at 16th level also as adamantine weapons (including for bypassing hardness).", "level": 4 },
      { "name": "Slow Fall (Ex)", "description": "When within arm's reach of a wall, she can use the wall to slow her descent, treating a fall as 20 feet shorter than it actually is for the purpose of fall damage. The reduction increases to 30 feet at 6th level and by a further 10 feet every two levels thereafter, until at 20th level she can fall any distance without harm beside a wall.", "level": 4 },
      { "name": "Purity of Body (Ex)", "description": "She gains immunity to all diseases except for supernatural and magical diseases (such as mummy rot and lycanthropy).", "level": 5 },
      { "name": "Wholeness of Body (Su)", "description": "She can heal her own wounds: each day she can cure up to twice her monk level in hit points, and she can spread this healing out among several uses; she can heal only herself.", "level": 7 },
      { "name": "Improved Evasion (Ex)", "description": "She takes no damage on a successful Reflex saving throw against an effect that allows a save for half damage, and only half damage on a failed save. Improved evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 9 },
      { "name": "Diamond Body (Su)", "description": "She gains immunity to poisons of all kinds.", "level": 11 },
      { "name": "Greater Rage (Ex)", "description": "As the barbarian ability: her rage bonuses rise to +6 Strength, +6 Constitution, and a +3 morale bonus on Will saves; the penalty to Armor Class remains -2.", "level": 11 },
      { "name": "Abundant Step (Su)", "description": "Once per day, she can slip magically between spaces as if using a dimension door spell, with a caster level equal to one-half her monk level (rounded down).", "level": 12 },
      { "name": "Diamond Soul (Ex)", "description": "She gains spell resistance equal to her current monk level + 10.", "level": 13 },
      { "name": "Timeless Body (Ex)", "description": "She no longer takes ability score penalties for aging and cannot be magically aged; bonuses she has accrued from aging still apply, and she still dies of old age when her time is up.", "level": 17 },
      { "name": "Tongue of the Sun and Moon (Ex)", "description": "She can speak with any living creature.", "level": 17 },
      { "name": "Empty Body (Su)", "description": "She can assume an ethereal state for a total of up to her monk level in rounds per day, which she may divide among multiple uses; while ethereal she is treated as incorporeal.", "level": 19 },
      { "name": "Mighty Rage (Ex)", "description": "As the barbarian ability: her rage bonuses rise to +8 Strength, +8 Constitution, and a +4 morale bonus on Will saves; the penalty to Armor Class remains -2.", "level": 20 },
      { "name": "Perfect Self (Su)", "description": "She becomes a magical creature: she is treated as an outsider for the purpose of spells and magical effects and gains damage reduction 10/magic. Unlike other outsiders, she can still be brought back from the dead as a member of her former creature type.", "level": 20 }
    ]
  },
  {
    "id": "steadfast-monk",
    "name": "Steadfast Monk",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/monk.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 7, "will": 7 }
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
      { "name": "Steadfast Monk Basics", "description": "Alignment: any lawful — a monk who becomes nonlawful cannot gain new levels as a monk (she retains all monk abilities). A monk variant (Dragon Magazine #310): the steadfast monk gives up the unarmored speed enhancement bonus (fast movement) and the scaling unarmored AC bonus — she retains the Wisdom bonus to AC when unarmored — and in exchange gains damage reduction, as a barbarian. Key abilities: Wisdom (Armor Class and several abilities), Strength, Dexterity, and Constitution. Weapon proficiencies: club, light crossbow, heavy crossbow, dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. Not proficient with any armor or shields; a monk who wears armor, uses a shield, or carries a medium or heavy load loses her AC bonus and her flurry of blows." },
      { "name": "AC Bonus (Ex)", "description": "When unarmored and unencumbered, she adds her Wisdom bonus (if any) to her AC; the bonus applies against touch attacks and while flat-footed. Unlike a standard monk, she does not gain the additional +1 bonus to AC at 5th level and every five levels thereafter. The Wisdom bonus is lost when she is immobilized or helpless, wears any armor, carries a shield, or carries a medium or heavy load.", "level": 1 },
      { "name": "Flurry of Blows (Ex)", "description": "When unarmored, she may make a flurry of blows: one extra attack at her full base attack bonus, but she and every other attack she makes that round take a -2 penalty; the penalty lessens to -1 at 5th level and disappears entirely at 9th. She may attack only with unarmed strikes or special monk weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham). At 11th level (greater flurry) she gains a second extra attack at her full base attack bonus.", "level": 1 },
      { "name": "Unarmed Strike", "description": "She gains Improved Unarmed Strike as a bonus feat. Her unarmed attacks deal 1d6 damage for a Medium monk, increasing to 1d8 at 4th level, 1d10 at 8th, 2d6 at 12th, 2d8 at 16th, and 2d10 at 20th; she may choose to deal lethal or nonlethal damage with no penalty on the attack roll.", "level": 1 },
      { "name": "Bonus Feat", "description": "At 1st level she may select either Improved Grapple or Stunning Fist as a bonus feat; at 2nd level, either Combat Reflexes or Deflect Arrows; and at 6th level, either Improved Disarm or Improved Trip. She need not meet the prerequisites normally required for these feats.", "level": 1 },
      { "name": "Evasion (Ex)", "description": "On a successful Reflex saving throw against an effect that normally allows a saving throw for half damage, she takes no damage instead. Evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 2 },
      { "name": "Still Mind (Ex)", "description": "She gains a +2 bonus on saving throws against enchantment spells and effects.", "level": 3 },
      { "name": "Ki Strike (Su)", "description": "Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. At 10th level they are also treated as lawful weapons for that purpose, and at 16th level also as adamantine weapons (including for bypassing hardness).", "level": 4 },
      { "name": "Slow Fall (Ex)", "description": "When within arm's reach of a wall, she can use the wall to slow her descent, treating a fall as 20 feet shorter than it actually is for the purpose of fall damage. The reduction increases to 30 feet at 6th level and by a further 10 feet every two levels thereafter, until at 20th level she can fall any distance without harm beside a wall.", "level": 4 },
      { "name": "Purity of Body (Ex)", "description": "She gains immunity to all diseases except for supernatural and magical diseases (such as mummy rot and lycanthropy).", "level": 5 },
      { "name": "Damage Reduction (Ex)", "description": "As the barbarian ability: she gains damage reduction 1/- — she subtracts 1 point from the damage she takes each time she is dealt damage from a weapon or natural attack. At 10th level, and every three monk levels thereafter (13th, 16th, and 19th), this damage reduction rises by 1 point, to a maximum of 5/- at 19th level. Damage reduction does not negate touch attacks, energy damage (such as from fire or acid), or energy-draining effects, and does not stack with damage reduction of the same kind from other sources unless the sources expressly stack.", "level": 7 },
      { "name": "Wholeness of Body (Su)", "description": "She can heal her own wounds: each day she can cure up to twice her monk level in hit points, and she can spread this healing out among several uses; she can heal only herself.", "level": 7 },
      { "name": "Improved Evasion (Ex)", "description": "She takes no damage on a successful Reflex saving throw against an effect that allows a save for half damage, and only half damage on a failed save. Improved evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 9 },
      { "name": "Diamond Body (Su)", "description": "She gains immunity to poisons of all kinds.", "level": 11 },
      { "name": "Abundant Step (Su)", "description": "Once per day, she can slip magically between spaces as if using a dimension door spell, with a caster level equal to one-half her monk level (rounded down).", "level": 12 },
      { "name": "Diamond Soul (Ex)", "description": "She gains spell resistance equal to her current monk level + 10.", "level": 13 },
      { "name": "Quivering Palm (Su)", "description": "Once per week, she can set up potentially lethal vibrations within the body of a creature she strikes with an unarmed attack (she must announce her intent before making the attack roll). If the attack deals damage, she may thereafter will the vibrations to kill the victim at any time within 1 day per monk level unless it succeeds at a Fortitude save (DC 10 + one-half her monk level + her Wisdom modifier). She can have only one victim of this ability at a time.", "level": 15 },
      { "name": "Timeless Body (Ex)", "description": "She no longer takes ability score penalties for aging and cannot be magically aged; bonuses she has accrued from aging still apply, and she still dies of old age when her time is up.", "level": 17 },
      { "name": "Tongue of the Sun and Moon (Ex)", "description": "She can speak with any living creature.", "level": 17 },
      { "name": "Empty Body (Su)", "description": "She can assume an ethereal state for a total of up to her monk level in rounds per day, which she may divide among multiple uses; while ethereal she is treated as incorporeal.", "level": 19 },
      { "name": "Perfect Self (Su)", "description": "She becomes a magical creature: she is treated as an outsider for the purpose of spells and magical effects and gains damage reduction 10/magic. Unlike other outsiders, she can still be brought back from the dead as a member of her former creature type.", "level": 20 }
    ]
  },
  {
    "id": "vigilant-monk",
    "name": "Vigilant Monk",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/monk.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 7, "will": 7 }
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
      { "name": "Vigilant Monk Basics", "description": "Alignment: any lawful — a monk who becomes nonlawful cannot gain new levels as a monk (she retains all monk abilities). A monk variant (Dragon Magazine #310): the vigilant monk gives up the bonus feats a standard monk gains at 2nd and 6th level, and the still mind ability, and in exchange gains detect chaos (as the paladin's detect evil ability), uncanny dodge, and improved uncanny dodge, as a barbarian. Key abilities: Wisdom (Armor Class and several abilities), Strength, Dexterity, and Constitution. Weapon proficiencies: club, light crossbow, heavy crossbow, dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. Not proficient with any armor or shields; a monk who wears armor, uses a shield, or carries a medium or heavy load loses her AC bonus, her fast movement, and her flurry of blows." },
      { "name": "AC Bonus (Ex)", "description": "When unarmored and unencumbered, she adds her Wisdom bonus (if any) to her AC; the bonus applies against touch attacks and while flat-footed. In addition, her AC improves by +1 at 5th level, +2 at 10th, +3 at 15th, and +4 at 20th. These bonuses are lost when she is immobilized or helpless, wears any armor, carries a shield, or carries a medium or heavy load.", "level": 1 },
      { "name": "Flurry of Blows (Ex)", "description": "When unarmored, she may make a flurry of blows: one extra attack at her full base attack bonus, but she and every other attack she makes that round take a -2 penalty; the penalty lessens to -1 at 5th level and disappears entirely at 9th. She may attack only with unarmed strikes or special monk weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham). At 11th level (greater flurry) she gains a second extra attack at her full base attack bonus.", "level": 1 },
      { "name": "Unarmed Strike", "description": "She gains Improved Unarmed Strike as a bonus feat. Her unarmed attacks deal 1d6 damage for a Medium monk, increasing to 1d8 at 4th level, 1d10 at 8th, 2d6 at 12th, 2d8 at 16th, and 2d10 at 20th; she may choose to deal lethal or nonlethal damage with no penalty on the attack roll.", "level": 1 },
      { "name": "Bonus Feat", "description": "At 1st level she may select either Improved Grapple or Stunning Fist as a bonus feat, without needing the prerequisites normally required. (The vigilant monk gives up the bonus feats a standard monk gains at 2nd and 6th level.)", "level": 1 },
      { "name": "Detect Chaos (Sp)", "description": "At will, she can use detect chaos, as the spell — the chaos counterpart of the paladin's detect evil ability.", "level": 1 },
      { "name": "Evasion (Ex)", "description": "On a successful Reflex saving throw against an effect that normally allows a saving throw for half damage, she takes no damage instead. Evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 2 },
      { "name": "Uncanny Dodge (Ex)", "description": "As the barbarian ability: she retains her Dexterity bonus to AC (if any) even if she is caught flat-footed or struck by an invisible attacker; she still loses her Dexterity bonus to AC if immobilized. If she already has uncanny dodge from another class, she automatically gains improved uncanny dodge instead.", "level": 2 },
      { "name": "Fast Movement (Ex)", "description": "When wearing no armor and carrying no more than a light load, her speed gains an enhancement bonus of +10 feet; the bonus increases to +20 feet at 6th level, +30 at 9th, +40 at 12th, +50 at 15th, and +60 at 18th.", "level": 3 },
      { "name": "Ki Strike (Su)", "description": "Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. At 10th level they are also treated as lawful weapons for that purpose, and at 16th level also as adamantine weapons (including for bypassing hardness).", "level": 4 },
      { "name": "Slow Fall (Ex)", "description": "When within arm's reach of a wall, she can use the wall to slow her descent, treating a fall as 20 feet shorter than it actually is for the purpose of fall damage. The reduction increases to 30 feet at 6th level and by a further 10 feet every two levels thereafter, until at 20th level she can fall any distance without harm beside a wall.", "level": 4 },
      { "name": "Purity of Body (Ex)", "description": "She gains immunity to all diseases except for supernatural and magical diseases (such as mummy rot and lycanthropy).", "level": 5 },
      { "name": "Improved Uncanny Dodge (Ex)", "description": "As the barbarian ability: she can no longer be flanked. This defense denies a rogue the ability to sneak attack her by flanking her, unless the attacker has at least four more rogue levels than the target's total levels in classes that grant improved uncanny dodge.", "level": 5 },
      { "name": "Wholeness of Body (Su)", "description": "She can heal her own wounds: each day she can cure up to twice her monk level in hit points, and she can spread this healing out among several uses; she can heal only herself.", "level": 7 },
      { "name": "Improved Evasion (Ex)", "description": "She takes no damage on a successful Reflex saving throw against an effect that allows a save for half damage, and only half damage on a failed save. Improved evasion can be used only in light armor or no armor, and not while she is helpless.", "level": 9 },
      { "name": "Diamond Body (Su)", "description": "She gains immunity to poisons of all kinds.", "level": 11 },
      { "name": "Abundant Step (Su)", "description": "Once per day, she can slip magically between spaces as if using a dimension door spell, with a caster level equal to one-half her monk level (rounded down).", "level": 12 },
      { "name": "Diamond Soul (Ex)", "description": "She gains spell resistance equal to her current monk level + 10.", "level": 13 },
      { "name": "Quivering Palm (Su)", "description": "Once per week, she can set up potentially lethal vibrations within the body of a creature she strikes with an unarmed attack (she must announce her intent before making the attack roll). If the attack deals damage, she may thereafter will the vibrations to kill the victim at any time within 1 day per monk level unless it succeeds at a Fortitude save (DC 10 + one-half her monk level + her Wisdom modifier). She can have only one victim of this ability at a time.", "level": 15 },
      { "name": "Timeless Body (Ex)", "description": "She no longer takes ability score penalties for aging and cannot be magically aged; bonuses she has accrued from aging still apply, and she still dies of old age when her time is up.", "level": 17 },
      { "name": "Tongue of the Sun and Moon (Ex)", "description": "She can speak with any living creature.", "level": 17 },
      { "name": "Empty Body (Su)", "description": "She can assume an ethereal state for a total of up to her monk level in rounds per day, which she may divide among multiple uses; while ethereal she is treated as incorporeal.", "level": 19 },
      { "name": "Perfect Self (Su)", "description": "She becomes a magical creature: she is treated as an outsider for the purpose of spells and magical effects and gains damage reduction 10/magic. Unlike other outsiders, she can still be brought back from the dead as a member of her former creature type.", "level": 20 }
    ]
  }
];

export const DRAGON_310_CLASSES: ClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as ClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: c.babProgression as ClassDefinition["babProgression"],
  goodSaves: c.goodSaves as ClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
