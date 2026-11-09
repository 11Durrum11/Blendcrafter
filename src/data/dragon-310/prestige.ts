// Dragon Magazine #310 (Aug 2003) prestige classes — the issue's five,
// all from the Rogues article (pp. 66+): Branch Dancer, Mole, Magic
// Filcher, Jobber, Stoneface. Each is a 5-level prestige class;
// progression tables give all five levels.
// Extracted in the Dragon Magazine treatment program (issue #310 pass).
// Staging pack: ~/workspace/library-staging/packs/dragon-magazine/issue-310/
// — MANIFEST.md carries the Mole adjudications (its dndtools page is
// truncated; feature text recovered from the realmshelps.net transcription
// and a quoted passage of the printed text; the magazine + dndtools table
// governs over realmshelps' conflicting numbers), SCREENING.md the APOC
// flags. Sources: srd.dndtools.org prestige pages cross-checked against
// the Dragon #310 magazine text on archive.org. Feature text is a
// faithful mechanical paraphrase in our own words.

import type {
  ClassLevelProgressionRow,
  FeatureDefinition,
  PrestigeClassDefinition,
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

interface RawPrestige {
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
  prerequisites: string[];
  features: RawFeature[];
}

const RAW: RawPrestige[] = [
  {
    "id": "branch-dancer",
    "name": "Branch Dancer",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/branchDancer.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": [
      "ref"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 0, "ref": 2, "will": 0 },
      { "level": 2, "bab": 2, "fort": 0, "ref": 3, "will": 0 },
      { "level": 3, "bab": 3, "fort": 1, "ref": 3, "will": 1 },
      { "level": 4, "bab": 4, "fort": 1, "ref": 4, "will": 1 },
      { "level": 5, "bab": 5, "fort": 1, "ref": 4, "will": 1 }
    ],
    "classSkills": [
      "Balance",
      "Climb",
      "Craft",
      "Hide",
      "Jump",
      "Knowledge (nature)",
      "Listen",
      "Move Silently",
      "Spot",
      "Survival"
    ],
    "prerequisites": [
      "Alignment: Any non-evil",
      "Skills: Balance 5 ranks, Climb 5 ranks, Knowledge (nature) 5 ranks",
      "Feats: Track",
      "Special: The character must have performed a great act of heroism in defense of a forest and received a treant's blessing, then must train for three months under another branch dancer"
    ],
    "features": [
      { "name": "Branch Dancer Basics", "description": "Key abilities: Dexterity, Wisdom, and Strength. Weapon and armor proficiencies: all simple weapons and all bows, light armor, and no shields." },
      { "name": "Branch Fighting (Ex)", "description": "Within 5 feet of a living tree, the branch dancer can use a tree as if she had the Exotic Weapon Proficiency feat for it: she can strike foes with its branches, dealing 1d8 points of bludgeoning damage, or wield a branch as a double weapon dealing 1d8 damage with each end. She can also use the tree as cover.", "level": 1 },
      { "name": "Speak to Trees (Sp)", "description": "Twice per day, the branch dancer may speak with trees, as the speak with plants spell limited to trees, for up to 1 minute.", "level": 2 },
      { "name": "Instant Fletching (Su)", "description": "The branch dancer can draw arrows directly from the surface of a tree as a free action, as though pulling them from a quiver; each group of 20 arrows drawn ages the tree by 1 year. At 4th level, arrows drawn this way are +1 arrows.", "level": 2 },
      { "name": "Moss Foot (Sp)", "description": "Twice per day, the branch dancer may use spider climb, as the spell cast by a 10th-level sorcerer, moving at her full speed; while using this ability she gains a +5 circumstance bonus on Move Silently checks on trees. Moss foot works on any wooden object, not only living trees.", "level": 3 },
      { "name": "Skill Mastery (Ex)", "description": "The branch dancer can take 10 on Climb, Balance, Jump, Move Silently, and Survival checks even when stress and distractions would normally prevent her from doing so.", "level": 3 },
      { "name": "Improved Branch Fighting (Ex)", "description": "The branch dancer's tree weapon improves: a branch now deals 1d10 points of bludgeoning or piercing damage (or 1d10 with each end as a double weapon), and strikes as a +1 weapon for the purpose of overcoming damage reduction.", "level": 4 },
      { "name": "Tree Stride (Sp)", "description": "Twice per day, the branch dancer may use tree stride, as the spell cast by a 9th-level druid.", "level": 5 }
    ]
  },
  {
    "id": "mole",
    "name": "Mole",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/mole.html",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 1 }
    ],
    "classSkills": [
      "Appraise",
      "Climb",
      "Concentration",
      "Hide",
      "Jump",
      "Knowledge (architecture and engineering)",
      "Knowledge (dungeoneering)",
      "Listen",
      "Move Silently",
      "Profession",
      "Search",
      "Survival"
    ],
    "prerequisites": [
      "Base Attack Bonus: +3",
      "Skills: Appraise 2 ranks, Hide 3 ranks, Profession (miner) 1 rank, Search 3 ranks",
      "Special: Must have worked in a mine for at least 1 year or lived underground for at least 5 years"
    ],
    "features": [
      { "name": "Mole Basics", "description": "Key abilities: Strength, Dexterity, and Constitution. Weapon and armor proficiencies: simple weapons and picks; light and medium armor, but not shields." },
      { "name": "Burrow (Ex)", "description": "As long as the mole has two hands free, he can burrow at a speed of 5 feet. He can burrow through dirt, but not rock. He may use this ability to create a hiding place out in the open, even aboveground, as long as he can dig into the dirt as a move action. At 3rd level, the mole's burrow speed increases to 10 feet.", "level": 1 },
      { "name": "Sneak Attack", "description": "The mole gains the sneak attack ability at 1st level if he does not already have it, exactly like the rogue's sneak attack ability: +1d6 damage initially, rising to +2d6 at 3rd level and +3d6 at 5th level. If the mole gets a sneak attack bonus from another source (such as rogue levels), the bonuses to damage stack.", "level": 1 },
      { "name": "Meld into Stone (Sp)", "description": "At 2nd level, the mole gains the ability to conceal himself within a block of stone: once per day, he may act as though under the effect of a meld into stone spell cast by a 12th-level cleric. At 4th level, he may use this ability 3 times per day.", "level": 2 },
      { "name": "Stone Sight (Su)", "description": "At 2nd level, the mole gains the ability to see through stone: he may see through 1 inch of stone for each level of mole he has. Among other benefits, stone sight allows a mole to see outside the rock when he is melded into stone.", "level": 2 },
      { "name": "Stone Shape (Sp)", "description": "At 4th level, stone becomes a malleable surface for the mole: once per day, he can cast the stone shape spell as a 10th-level cleric.", "level": 4 },
      { "name": "Improved Burrow (Su)", "description": "By 5th level, the mole is so attuned to earth that it moves willingly for him: he can burrow at a speed of 20 feet, and can burrow through rock or other hard minerals at half speed.", "level": 5 }
    ]
  },
  {
    "id": "jobber",
    "name": "Jobber",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/jobber.html",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 4 }
    ],
    "classSkills": [
      "Appraise",
      "Bluff",
      "Climb",
      "Decipher Script",
      "Diplomacy",
      "Disguise",
      "Escape Artist",
      "Forgery",
      "Gather Information",
      "Hide",
      "Jump",
      "Listen",
      "Move Silently",
      "Open Lock",
      "Perform",
      "Profession",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot",
      "Tumble",
      "Use Rope"
    ],
    "prerequisites": [
      "Race: Halfling",
      "Base Attack Bonus: +3",
      "Skills: Appraise 4 ranks, Diplomacy 6 ranks, Gather Information 4 ranks",
      "Feats: Alertness",
      "Special: Must be literate; must be chosen by a community of halflings to serve as a jobber; must willingly accept a mark of justice spell that triggers if the jobber ever acts against the best interests of her halfling community"
    ],
    "features": [
      { "name": "Jobber Basics", "description": "Key abilities: Charisma, Dexterity, and Wisdom. Weapon and armor proficiencies: all simple and martial weapons, light armor, medium armor, and shields (except tower shields). A jobber serves a nomadic halfling community as its scout and negotiator, bound by the mark of justice she accepted when chosen: thereafter she may never act against the best interests of her community, including abandoning her duties or holding back money for personal gain; when the mark activates, any halfling within 60 feet of her feels uneasy, and an NPC halfling's attitude toward her will never rise above indifferent as long as the mark remains." },
      { "name": "Favored Mark (Ex)", "description": "At 1st level, the jobber selects a humanoid race (dwarf, elf, goblinoid, human, and so on) as a favored mark: from her study of the race and training in persuading its members, she gains a +2 bonus on Appraise, Bluff, Diplomacy, Gather Information, and Sense Motive checks when using these skills in negotiation with creatures of this type. At 3rd and 5th levels she may select an additional favored mark, and at each such interval the bonus against any one favored mark (including the one just selected, if she wishes) increases by 2.", "level": 1 },
      { "name": "Friendly Smile (Ex)", "description": "When attempting to alter an NPC's attitude, the jobber gains a +5 competence bonus on Diplomacy checks.", "level": 1 },
      { "name": "Sneak Attack", "description": "At 2nd level the jobber gains the sneak attack ability, exactly like the rogue's: +1d6 damage, rising to +2d6 at 4th level. If she already has the sneak attack ability from a previous class, the damage bonuses stack.", "level": 2 },
      { "name": "Hide in Plain Sight (Ex)", "description": "While in any sort of natural terrain, a jobber of 2nd level or higher can use the Hide skill even while being observed.", "level": 2 },
      { "name": "Fast Friend (Ex)", "description": "At 2nd level, the jobber picks up the lay of the land very quickly: she may make a Gather Information check after only 1 hour of socializing rather than the normal 1d4+1 hours, and she may retry a failed check 3 times in the same evening without drawing attention or suspicion.", "level": 2 },
      { "name": "Detect Wealth (Sp)", "description": "Once per day at 3rd level, the jobber can detect the presence and approximate amount of the greatest concentration of wealth in an area. This is a specific kind of divination, similar to a locate object spell cast by a 5th-level wizard, with the following exceptions: the area of effect has a radius of a quarter mile, the duration is one minute, and the ability detects the greatest single source of wealth within the area. If a source of wealth is diffused over an area (such as a flock of sheep or a vein of precious ore), the jobber only gets a sense of direction until she reaches its approximate geographical center. Wealth is measured in more than coins, and while the jobber determines where a valuable object is, she does not necessarily know why something is valuable or how to dispose of the wealth. This ability is blocked by even a thin sheet of lead; polymorph any object fools this ability.", "level": 3 },
      { "name": "Seal the Deal (Sp)", "description": "At 4th level, the jobber gains the ability to enforce her deals. After she negotiates an opportunity and terms, and those terms are committed to paper, she ends the negotiations with a handshake (or shaking the appropriate appendage of her new business partner), and the handshake magically binds the partner to the terms of the deal: if the partner ever breaks the deal for any reason — willingly or not — he is affected as if the jobber had cast a bestow curse spell on him. The jobber chooses what will befall the deal breaker when the deal is closed. Revealing the use of this ability is at the jobber's discretion.", "level": 4 }
    ]
  },
  {
    "id": "magic-filcher",
    "name": "Magic Filcher",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/magicFilcher.html",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 4 }
    ],
    "classSkills": [
      "Appraise",
      "Balance",
      "Bluff",
      "Climb",
      "Concentration",
      "Craft (alchemy)",
      "Decipher Script",
      "Disable Device",
      "Escape Artist",
      "Hide",
      "Jump",
      "Knowledge (arcana)",
      "Listen",
      "Move Silently",
      "Open Lock",
      "Search",
      "Sleight of Hand",
      "Spellcraft",
      "Spot",
      "Swim",
      "Tumble",
      "Use Magic Device",
      "Use Rope"
    ],
    "prerequisites": [
      "Skills: Disable Device 10 ranks, Knowledge (arcana) 8 ranks, Spellcraft 5 ranks, Use Magic Device 5 ranks",
      "Spellcasting: Must be able to cast arcane spells"
    ],
    "features": [
      { "name": "Magic Filcher Basics", "description": "Key abilities: Intelligence, Dexterity, and Charisma. Weapon and armor proficiencies: a magic filcher gains no new weapon or armor proficiencies." },
      { "name": "Spellcasting", "description": "At 1st, 3rd, and 5th levels, the magic filcher gains new spells per day as if he had also gained a level in a spellcasting class he belonged to before he added the prestige class; he does not gain any other benefit a character of that class would have gained. If he had more than one spellcasting class before becoming a magic filcher, he must decide to which class he adds each such level when he gains the magic filcher level.", "level": 1 },
      { "name": "Detect Magic (Sp)", "description": "At 1st level, the magic filcher may act as though under the effects of a detect magic spell cast by a sorcerer of a level equal to the magic filcher's class level. He may use this ability 3 times per day.", "level": 1 },
      { "name": "Wizard Mimic (Ex)", "description": "At 2nd level, the magic filcher knows how to think like a wizard: he gains a +5 bonus on Use Magic Device checks when attempting to emulate an ability score, emulate a class feature, or activate blindly, when these checks pertain to items with arcane spells or wizard-specific class features.", "level": 2 },
      { "name": "Dispel Magic (Sp)", "description": "Once per day at 3rd level, the magic filcher may cast the dispel magic spell as a 10th-level sorcerer.", "level": 3 },
      { "name": "Magical Certainty (Ex)", "description": "At 4th level, the magic filcher has a pretty good idea of how magic works: he can take 10 on Use Magic Device checks, and he never suffers damage from mishaps, either with the Use Magic Device skill or from attempting to use a scroll of higher caster level than he possesses. Mishaps might still occur, but the magic filcher is never harmed by them.", "level": 4 },
      { "name": "Read Aura (Su)", "description": "By 5th level, the magic filcher has spent so much time studying magic items that their auras become visible to him: as long as he has his sight, he can, at will, detect the presence or absence of magical auras within his field of vision and the location of each aura. To gain more information he must use the detect magic spell or ability — but if he does, he may begin the study as if he had already used the ability for 2 rounds, beginning at the 3rd round of effectiveness. Among more obvious benefits, this ability grants a +5 bonus on Disable Device checks when attempting to disarm or bypass magical traps.", "level": 5 }
    ]
  },
  {
    "id": "stoneface",
    "name": "Stoneface",
    "ruleset": "core",
    "source": "Dragon Magazine #310",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/stoneface.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 8,
    "babProgression": "three-quarter",
    "goodSaves": [
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 4 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Gather Information",
      "Hide",
      "Knowledge (all)",
      "Listen",
      "Move Silently",
      "Open Lock",
      "Perform",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot"
    ],
    "prerequisites": [
      "Alignment: Any nonlawful",
      "Skills: Bluff 8 ranks, Concentration 3 ranks",
      "Feats: Persuasive, Skill Focus (Knowledge [any])"
    ],
    "features": [
      { "name": "Stoneface Basics", "description": "Key abilities: Charisma, Intelligence, and Wisdom. Weapon and armor proficiencies: all simple and martial weapons, all armor, and shields (except tower shields). Heavy armor and shields are seldom useful to a stoneface, but the proficiency allows her to pretend to be a competent fighter if necessary." },
      { "name": "Convicted Mind (Ex)", "description": "At 1st level, the stoneface's rigorous mental training grants her a +2 bonus on saving throws against enchantment spells and effects.", "level": 1 },
      { "name": "Investigator (Ex)", "description": "At 1st level, the stoneface gains the Investigator feat for free, gaining a +2 bonus on all Gather Information and Search checks.", "level": 1 },
      { "name": "Honest Countenance (Sp)", "description": "At 2nd level, the stoneface can redirect attempted detection spells as though she were acting under the effects of a misdirection spell cast by a 5th-level sorcerer. She may use this ability once per day per stoneface level.", "level": 2 },
      { "name": "Persuasive (Ex)", "description": "At 2nd level, the stoneface gains the Persuasive feat for free, gaining a +2 bonus on all Bluff and Intimidate checks.", "level": 2 },
      { "name": "Resolute Mind (Ex)", "description": "At 3rd level, the stoneface's training grants her a +2 bonus on saving throws against mind-affecting spells and effects. This stacks with her convicted mind ability, giving her a +4 bonus on saving throws against spells and effects that are both enchantment and mind-affecting.", "level": 3 },
      { "name": "Guiltless Aura (Su)", "description": "At 4th level, the stoneface is so skilled at masking her intentions that she acts at all times as if under the effects of a misdirection spell cast by a 10th-level sorcerer. In addition, she instantly knows when she is the subject of a divination attempt (whether by spell or item) and what type of divination effect it is, although not its origin; when alerted, she chooses the person or item within range that she wishes the diviner to detect.", "level": 4 },
      { "name": "Utterly Disavow (Sp)", "description": "At 5th level, the stoneface's training allows her to evade detection from divination spells and magic items that can determine locations, such as crystal balls: once per day, she may act as though under the effects of a nondetection spell cast by a 12th-level sorcerer.", "level": 5 }
    ]
  }
];

export const DRAGON_310_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as PrestigeClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: c.babProgression as PrestigeClassDefinition["babProgression"],
  goodSaves: c.goodSaves as PrestigeClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  prerequisites: c.prerequisites,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
