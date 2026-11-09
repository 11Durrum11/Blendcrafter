// Dragon Magazine #311 (Sep 2003) variant classes — integrated in the
// Dragon Magazine treatment program (issue #311 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-311/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's ten spellcaster variant classes: six specialist clerics
// from the Clerics article (pp. 46–53) and four variant druids from the
// Druids article (pp. 54–62). Sources: the Dragon #311 magazine text on
// archive.org (DragonMagazine311_djvu.txt), cross-checked against the
// variant-class sections of the cleric and druid pages at
// srd.dndtools.org. Where the OCR-garbled magazine tables conflicted
// with the dndtools transcription, the transcription governs (see
// MANIFEST.md). Feature descriptions are faithful mechanical
// paraphrases in our own words; no magazine prose is reproduced.
// Records mirror the issue-310 draft shape: plain objects, levels 1–10
// progression rows, features carrying their true levels (to 20).
//
// Shared cleric-variant rules (all six, from the article's shaded box):
// levels count as cleric levels for spellcasting, feat, and prestige
// class qualification; the choice between core cleric and a variant is
// made at the character's first cleric level and the character may not
// later multiclass into the core cleric class or another variant; the
// variants share the cleric's aura and opposed-alignment casting
// restrictions, and alignment must be within one step of the deity's.
// Except for the evangelist, they prepare Wisdom-based divine spells
// from the cleric list with the cleric's spells per day but with NO
// domain spell slot, NO spontaneous cure/inflict conversion, NO
// domains, and NO turn undead.
//
// Shared druid-variant rules (all four): same alignment restrictions
// and spell progression as the druid; a feature the variant's table and
// text do not list is not gained; levels count as druid levels for
// spellcasting, feat, and prestige class qualification; the choice is
// made at the first druid level and cannot later be changed, and the
// character may not later multiclass into the core druid or a variant.

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
    "id": "ancestral-speaker",
    "name": "Ancestral Speaker",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/cleric.html",
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
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (history)",
      "Knowledge (local)",
      "Knowledge (religion)",
      "Perform",
      "Profession",
      "Sense Motive",
      "Spellcraft"
    ],
    "features": [
      { "name": "Ancestral Speaker Basics", "description": "A cleric variant (see the shared specialist-cleric rules for this article): no domains, no domain spell slot, no spontaneous cure or inflict conversion, and no turn undead. Key abilities: Wisdom (spellcasting) and Charisma. Weapon and armor proficiencies: all simple weapons, light and medium armor, and shields (except tower shields). In addition to the class skills listed, the ancestral speaker chooses any two cross-class skills, which are class skills for him." },
      { "name": "Spells", "description": "The ancestral speaker prepares Wisdom-based divine spells from the cleric spell list, with the cleric's spells per day, but has no domain spell slot. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier.", "level": 1 },
      { "name": "Ancestral Communion (Ex)", "description": "Once per day, the ancestral speaker can request a skill bonus from his ancestors: he gains a competence bonus equal to his Charisma modifier + his class level on one skill, which he may use even if untrained in that skill; the bonus lasts 1 + his Charisma bonus rounds. He gains an additional use per day at 5th level and every five levels thereafter. At 9th level, he may instead use one daily use to ask questions of his ancestors as with a commune spell cast by a cleric of his class level, once per day.", "level": 1 },
      { "name": "Holy Presence (Ex)", "description": "The ancestral speaker is his own holy symbol: he can cast spells with a divine focus component without needing a separate holy symbol.", "level": 1 },
      { "name": "Death Talker (Ex)", "description": "The ancestral speaker gains a +2 bonus on Diplomacy, Bluff, Intimidate, and Sense Motive checks made against undead. This bonus increases by +2 at 8th level and every four levels thereafter.", "level": 4 },
      { "name": "Improved Resurrection (Ex)", "description": "Anyone the ancestral speaker brings back from the dead with raise dead, resurrection, or a similar spell is restored to the three-quarter experience point mark of her previous level instead of the halfway mark.", "level": 9 }
    ]
  },
  {
    "id": "arcane-disciple-311",
    "name": "Arcane Disciple",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/cleric.html",
    "hitDie": "d6",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Profession",
      "Spellcraft",
      "Use Magic Device"
    ],
    "features": [
      { "name": "Arcane Disciple Basics", "description": "A cleric variant (see the shared specialist-cleric rules for this article): no domains, no domain spell slot, no spontaneous cure or inflict conversion, and no turn undead. Key abilities: Wisdom (spellcasting) and Intelligence. Weapon and armor proficiencies: all simple weapons, light and medium armor, and shields (except tower shields)." },
      { "name": "Spells", "description": "The arcane disciple prepares Wisdom-based divine spells from the cleric spell list, with the cleric's spells per day, but has no domain spell slot. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + her Wisdom modifier.", "level": 1 },
      { "name": "Arcane to Divine (Ex)", "description": "At each level, the arcane disciple chooses one arcane spell from the bard or sorcerer/wizard spell list whose level is at least one lower than the highest-level divine spell she can cast, and adds it to her cleric spell list as a divine spell. In addition, all spells of the Magic domain are on her cleric spell list.", "level": 1 },
      { "name": "Bonus Feats", "description": "The arcane disciple gains a bonus feat at 1st level, at 5th level, and every five levels thereafter. Each bonus feat must be a metamagic feat or an item creation feat for which she meets the prerequisites.", "level": 1 }
    ]
  },
  {
    "id": "aspirant",
    "name": "Aspirant",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/cleric.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Profession",
      "Spellcraft"
    ],
    "features": [
      { "name": "Aspirant Basics", "description": "A cleric variant (see the shared specialist-cleric rules for this article): no domains, no domain spell slot, no spontaneous cure or inflict conversion, and no turn undead. Key abilities: Wisdom (spellcasting) and Charisma. Weapon and armor proficiencies: all simple weapons, all types of armor, and shields (except tower shields)." },
      { "name": "Spells", "description": "The aspirant prepares Wisdom-based divine spells from the cleric spell list, with the cleric's spells per day, but has no domain spell slot. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier.", "level": 1 },
      { "name": "Spontaneous Casting", "description": "Once per day, the aspirant can lose a prepared cleric spell to cast any other cleric spell of equal or lower level. He gains an additional use per day at 4th level (2/day), 8th level (3/day), 12th level (4/day), and 16th level (5/day).", "level": 1 },
      { "name": "Shield of the Divine (Ex)", "description": "The aspirant gains a +1 bonus to Armor Class at 1st level, which increases by +1 at 5th level and every five levels thereafter. The bonus applies even when the aspirant is flat-footed or helpless.", "level": 1 },
      { "name": "Divine Counterspell (Sp)", "description": "The aspirant can counterspell another spellcaster's divine spell without expending a spell of his own, as long as he is able to cast spells of that spell's level. He must ready an action to counterspell and does not need to identify the spell being cast. Attempting to counterspell a spell that is not divine does not use up a daily use, though the readied action is lost. He can use this ability a number of times per day equal to 3 + his Charisma modifier.", "level": 3 },
      { "name": "Perfect Self", "description": "At 20th level, the aspirant gains the perfect self ability, exactly as the monk ability of the same name: he becomes a magical creature, is treated as an outsider for spells and magical effects, and gains damage reduction 10/magic.", "level": 20 }
    ]
  },
  {
    "id": "benevolent",
    "name": "Benevolent",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/cleric.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (arcana)",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Profession",
      "Spellcraft"
    ],
    "features": [
      { "name": "Benevolent Basics", "description": "A cleric variant (see the shared specialist-cleric rules for this article): no domains, no domain spell slot, no spontaneous cure or inflict conversion, and no turn undead. Key abilities: Wisdom (spellcasting) and Charisma. Weapon and armor proficiencies: all simple weapons, all types of armor, and shields (including tower shields)." },
      { "name": "Spells", "description": "The benevolent prepares Wisdom-based divine spells from the cleric spell list, with the cleric's spells per day, but has no domain spell slot. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier.", "level": 1 },
      { "name": "Spontaneous Casting (Ex)", "description": "The benevolent can lose a prepared spell of equal or higher level to cast one of the following aid spells instead: 0-level — cure minor wounds, guidance, resistance; 1st — bless, cure light wounds, sanctuary; 2nd — aid, cure moderate wounds, shield other; 3rd — cure serious wounds, prayer, remove curse; 4th — cure critical wounds, restoration, spell immunity; 5th — atonement, mass cure light wounds; 6th — mass cure moderate wounds, heal; 7th — greater restoration, mass cure serious wounds; 8th — mass cure critical wounds; 9th — mass heal.", "level": 1 },
      { "name": "Luck of the Gods (Sp)", "description": "Once per day, the benevolent can grant an ally divine luck for 24 hours: within that time, the recipient may reroll any single die roll (as the Luck domain granted power) and may add a luck bonus equal to the benevolent's Charisma bonus to any single roll; both benefits may be applied to the same roll. The benevolent cannot use this ability on himself, the target must be within one alignment step of the benevolent's deity, and the ability does not stack with itself. He gains an additional use per day at 8th, 12th, 16th, and 20th level.", "level": 4 }
    ]
  },
  {
    "id": "crusader-311",
    "name": "Crusader",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/cleric.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Handle Animal",
      "Heal",
      "Intimidate",
      "Knowledge (arcana)",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Profession",
      "Ride",
      "Spellcraft"
    ],
    "features": [
      { "name": "Crusader Basics", "description": "A cleric variant (see the shared specialist-cleric rules for this article): no domains, no domain spell slot, no spontaneous cure or inflict conversion, and no turn undead. Key abilities: Wisdom (spellcasting), Charisma, and Strength. Weapon and armor proficiencies: all simple weapons, all types of armor, shields (including tower shields), and one martial weapon of her choice." },
      { "name": "Spells", "description": "The crusader prepares Wisdom-based divine spells from the cleric spell list, with the cleric's spells per day, but has no domain spell slot. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + her Wisdom modifier.", "level": 1 },
      { "name": "Deific Foe (Ex)", "description": "At 1st level and every five levels thereafter, the crusader chooses a deity opposed to her own god as a deific foe. She gains a +4 morale bonus on attack rolls and damage rolls against worshipers of the chosen deity.", "level": 1 },
      { "name": "Turn Foe's Followers (Su)", "description": "The crusader can turn or destroy worshipers of her deific foe exactly as a cleric turns undead, a number of times per day equal to 3 + her Charisma modifier. If she has 5 or more ranks in Knowledge (religion), she gains a +2 bonus on these turning checks.", "level": 1 },
      { "name": "Bonus Feats", "description": "The crusader gains a bonus feat at 3rd level and every five levels thereafter. Bonus feats are chosen from the fighter bonus feat list, except that Weapon Specialization and Greater Weapon Specialization are removed from the list and Combat Casting is added to it.", "level": 3 },
      { "name": "Smite (Su)", "description": "Once per day, the crusader may smite a foe who does not worship her deity and shares neither the deity's alignment nor the crusader's alignment: she adds her Charisma bonus to the attack roll and deals +1 damage per crusader level. Smiting a creature that does not qualify has no effect but still uses up the attempt for the day. She gains an additional daily use at 10th, 15th, and 20th level.", "level": 5 }
    ]
  },
  {
    "id": "evangelist-311",
    "name": "Evangelist",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/cleric.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Gather Information",
      "Heal",
      "Knowledge (local)",
      "Knowledge (religion)",
      "Profession",
      "Spellcraft"
    ],
    "features": [
      { "name": "Evangelist Basics", "description": "A cleric variant (see the shared specialist-cleric rules for this article), and the exception to them: the evangelist casts spontaneously and gains domains, as described in his features below. He has no turn undead. Key abilities: Wisdom (spellcasting) and Charisma. Weapon and armor proficiencies: all simple weapons, light and medium armor, and shields (except tower shields)." },
      { "name": "Spells", "description": "The evangelist casts divine spells from the cleric spell list spontaneously, as a sorcerer casts arcane spells, using his Wisdom as the spellcasting ability: he uses the evangelist spells-per-day and spells-known tables printed with the class instead of the cleric's (at 1st level, for example, 5 0-level and 3 1st-level spells per day, and 4 0-level and 2 1st-level spells known before domain spells are added). He cannot learn a new divine spell in place of a domain spell known.", "level": 1 },
      { "name": "Domains", "description": "At 1st level, the evangelist chooses two domains: he gains both granted powers and adds all of the domains' spells to his spells known at the appropriate levels, although he still cannot cast a spell until he is of a high enough level. He does not gain the cleric's domain spell slots. He gains one additional domain — its granted power and its spells added to his spells known — at 5th, 10th, 15th, and 20th level.", "level": 1 }
    ]
  },
  {
    "id": "metal-master",
    "name": "Metal Master",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/druid.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Heal",
      "Knowledge (architecture and engineering)",
      "Knowledge (dungeoneering)",
      "Knowledge (nature)",
      "Listen",
      "Profession",
      "Spellcraft",
      "Spot",
      "Survival",
      "Swim"
    ],
    "features": [
      { "name": "Metal Master Basics", "description": "A druid variant (see the shared variant-druid rules for this article): the metal master has no animal companion, no wild shape, and none of the druid's other nature features — only the features listed here. Unlike other druids she is not barred from metal: she is proficient with all simple and martial melee weapons made primarily of metal, with all armor, and with shields (including tower shields). She knows Terran, the language of earth creatures, as a free language learned at 1st level, and Druidic is among her bonus language options. Key abilities: Wisdom (spellcasting), Strength, and Constitution." },
      { "name": "Spells", "description": "The metal master casts divine spells drawn from the druid spell list and follows the druid's spell progression, preparing spells in advance; her alignment restricts her from casting spells opposed to her own or her deity's alignment, as a druid. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; the saving throw DC is 10 + the spell's level + her Wisdom modifier.", "level": 1 },
      { "name": "Spontaneous Casting", "description": "The metal master can lose a prepared spell to cast one of the following spells of equal or lower level instead: chill metal, heat metal, rusting grasp, ironwood, transmute metal to wood, or repel metal or stone.", "level": 1 },
      { "name": "Mine Sense (Ex)", "description": "The metal master gains a +2 bonus on Knowledge (dungeoneering) and Knowledge (architecture and engineering) checks.", "level": 1 },
      { "name": "Metal Sense (Ex)", "description": "The metal master gains a +2 bonus on Craft (armorsmithing), Craft (blacksmithing), and Craft (weaponsmithing) checks.", "level": 3 },
      { "name": "Damage Reduction (Su)", "description": "The metal master's body takes on the qualities of metal. At 6th level she gains damage reduction 1/bludgeoning, rising to 2/bludgeoning at 8th level, 3/bludgeoning at 10th, 4/bludgeoning at 12th, and 5/bludgeoning at 14th. At 16th level the bludgeoning reduction is replaced by damage reduction 5/cold iron, silver, or adamantine; at 18th level it improves to 5/silver or adamantine; and at 20th level it becomes damage reduction 5/adamantine.", "level": 6 },
      { "name": "Major Creation (Sp)", "description": "Once per day, the metal master can cast major creation as a caster of a level equal to her metal master level. She can only create objects made of metal with this spell.", "level": 11 },
      { "name": "Timeless Body (Ex)", "description": "The metal master no longer takes ability score penalties for aging and cannot be magically aged. Penalties already incurred remain in place; bonuses still accrue, and she still dies of old age when her time is up.", "level": 15 },
      { "name": "Iron Body (Sp)", "description": "Once per day, the metal master can cast iron body as a caster of a level equal to her metal master level.", "level": 19 }
    ]
  },
  {
    "id": "wild-reaper",
    "name": "Wild Reaper",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/druid.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Intimidate",
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
      { "name": "Wild Reaper Basics", "description": "A druid variant (see the shared variant-druid rules for this article). Weapon and armor proficiencies: club, battleaxe, dagger, dart, kama, nunchaku, quarterstaff, scythe, sickle, sling, and throwing axe, and all natural attacks of any form she assumes; light and medium armor but never metal armor (padded, leather, or hide, or wooden armor made steel-like by ironwood), and shields (except tower shields) of wood only. Wearing metal armor or carrying a metal shield leaves her unable to cast druid spells or use her supernatural or spell-like class abilities while doing so and for 24 hours thereafter. Key abilities: Wisdom (spellcasting) and Charisma." },
      { "name": "Spells", "description": "The wild reaper casts divine spells drawn from the druid spell list and follows the druid's spell progression, preparing spells in advance; her alignment restricts her from casting spells opposed to her own or her deity's alignment, as a druid. Her bonus language options and Druidic are as the druid's. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; the saving throw DC is 10 + the spell's level + her Wisdom modifier.", "level": 1 },
      { "name": "Animal Companion (Ex)", "description": "As the druid ability of the same name, except that the wild reaper's animal companion must be a carnivorous or omnivorous animal that feeds on carrion.", "level": 1 },
      { "name": "Nature Sense (Ex)", "description": "As the druid ability of the same name: a +2 bonus on Knowledge (nature) and Survival checks.", "level": 1 },
      { "name": "Woodland Stride (Ex)", "description": "As the druid ability of the same name: the wild reaper may move through natural undergrowth at her normal speed without damage or impairment; magically manipulated undergrowth still affects her.", "level": 2 },
      { "name": "Spontaneous Casting", "description": "The wild reaper can lose a prepared spell to cast any summon nature's ally spell of the same level or lower. In addition, she can substitute a prepared spell with soften earth and stone, warp wood, diminish plants, poison, blight, rusting grasp, transmute rock to mud, antilife shell, or finger of death, so long as the substituted spell is of equal or lower level than the spell lost.", "level": 3 },
      { "name": "Resist Nature's Lure (Ex)", "description": "As the druid ability of the same name: a +4 bonus on saving throws against the spell-like abilities of fey.", "level": 4 },
      { "name": "Wild Shape (Su)", "description": "As the druid's wild shape, except that the wild reaper's forms are limited to carnivorous or omnivorous animals that feed on carrion, and the ability functions like the polymorph spell as described in the class text. She gains it once per day at 5th level, with further daily uses at 6th (2/day), 7th (3/day), 10th (4/day), 14th (5/day), and 18th level (6/day); Large forms at 8th level, Tiny forms at 11th, and Huge forms at 15th. The new form's Hit Dice cannot exceed her wild reaper level.", "level": 5 },
      { "name": "Disease Immunity (Ex)", "description": "The wild reaper gains immunity to all diseases, including supernatural infections such as mummy rot and lycanthropy.", "level": 9 },
      { "name": "Turn Undead (Su)", "description": "The wild reaper can turn undead as a cleric of two levels lower would, a number of times per day equal to 3 + her Charisma modifier. She does not need a holy symbol to turn undead.", "level": 12 },
      { "name": "Resist Death's Lure (Ex)", "description": "The wild reaper gains a +4 bonus on saving throws against level drain and death effects.", "level": 13 },
      { "name": "Fast Healing (Su)", "description": "The wild reaper heals 1 hit point of damage per round. At 20th level this improves to fast healing 3.", "level": 16 },
      { "name": "Ability Damage Healing (Su)", "description": "The wild reaper heals 1 point of ability damage to all damaged ability scores each round, so long as she has at least 1 point of Constitution. At 20th level this ability heals 2 points to all ability scores each round.", "level": 17 },
      { "name": "Timeless Body (Ex)", "description": "The wild reaper no longer takes ability score penalties for aging and cannot be magically aged. Penalties already incurred remain in place; bonuses still accrue, and she still dies of old age when her time is up.", "level": 19 }
    ]
  },
  {
    "id": "wind-walker",
    "name": "Wind Walker",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/druid.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
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
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 7, "will": 7 }
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
      { "name": "Wind Walker Basics", "description": "A druid variant (see the shared variant-druid rules for this article). Note the unusual saving throws: the wind walker's Fortitude save is poor, while Reflex and Will are good. Weapon and armor proficiencies: club, dagger, dart, javelin, quarterstaff, scimitar, shortbow, composite shortbow, sling, and spear, and all natural attacks of any form he assumes; light armor only and never metal armor (padded, leather, or hide, or wooden armor made steel-like by ironwood), and shields (except tower shields) of wood only. Wearing metal armor or carrying a metal shield leaves him unable to cast druid spells or use his supernatural or spell-like class abilities while doing so and for 24 hours thereafter. He knows Auran, the language of air creatures, as a free language learned at 1st level, and Druidic is among his bonus language options. Key abilities: Wisdom (spellcasting) and Dexterity." },
      { "name": "Spells", "description": "The wind walker casts divine spells drawn from the druid spell list and follows the druid's spell progression, preparing spells in advance; his alignment restricts him from casting spells opposed to his own or his deity's alignment, as a druid. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; the saving throw DC is 10 + the spell's level + his Wisdom modifier.", "level": 1 },
      { "name": "Spontaneous Casting", "description": "The wind walker can lose a prepared spell to cast any summon nature's ally spell or any druid spell with the air descriptor of the same level or lower. If he uses this ability to cast a summon nature's ally spell, the summoned ally must have the ability to fly.", "level": 1 },
      { "name": "Aerial Companion (Ex)", "description": "The wind walker may begin play with a flying animal companion chosen from the eagle, hawk, or owl, advancing as a druid's animal companion does. At higher levels he may instead select an alternative aerial companion, applying the indicated adjustment to his wind walker level for the companion's characteristics: at 4th level, a dire bat or hippogriff (level -3); at 7th, a giant eagle, giant owl, or juvenile arrowhawk (level -6); at 10th, a griffon or adult arrowhawk (level -9); at 13th, a dragonne (level -12); and at 16th, an elder arrowhawk (level -15). Releasing or replacing a companion requires a ceremony of 24 uninterrupted hours of prayer.", "level": 1 },
      { "name": "Aerial Empathy (Ex)", "description": "The wind walker can improve the attitude of a magical beast or animal with the air subtype or the ability to fly, functioning as a Diplomacy check to improve a person's attitude: he rolls 1d20 and adds his wind walker level and Charisma modifier. He and the creature must be within 30 feet of each other and able to study each other; influencing a creature generally takes 1 minute.", "level": 1 },
      { "name": "Zephyr Spellcasting (Ex)", "description": "The wind walker casts druid spells with the air descriptor as though his caster level were 1 level higher, and adds +1 to the DCs of all such spells.", "level": 1 },
      { "name": "Feather Fall (Sp)", "description": "The wind walker can cast feather fall as a caster of a level equal to his wind walker level, once per day at 2nd level, twice per day at 5th level, and three times per day at 8th level.", "level": 2 },
      { "name": "Whispering Wind (Sp)", "description": "The wind walker can cast whispering wind as a caster of a level equal to his wind walker level, once per day at 3rd level, twice per day at 7th level, and three times per day at 11th level.", "level": 3 },
      { "name": "Air Mastery (Ex)", "description": "Airborne creatures take a -1 penalty on attack and damage rolls against the wind walker.", "level": 4 },
      { "name": "Friend of the Winds (Su)", "description": "The wind walker counts as two size categories larger when determining the effects severe wind has on him (see the wind effects table in the Dungeon Master's Guide).", "level": 6 },
      { "name": "Fly (Sp)", "description": "The wind walker can cast fly as a caster of a level equal to his wind walker level, once per day at 7th level, twice per day at 10th level, and three times per day at 13th level.", "level": 7 },
      { "name": "Air Spell Immunity (Su)", "description": "The wind walker is immune to spells with the air descriptor, as though the spell failed to penetrate spell resistance. He may suppress this immunity for a specific effect he wishes to benefit from (such as wind walk) with a standard action; reactivating it is also a standard action.", "level": 9 },
      { "name": "Air Domain", "description": "At 12th level, the wind walker receives the granted power of the Air domain. At 14th level, he gains access to the Air domain's spells just like a cleric: he may prepare and cast the domain spell listed for each spell level once per day, so long as he is of a level high enough to cast spells of that level. He cannot use his spontaneous casting ability with these spells.", "level": 12 },
      { "name": "Timeless Body (Ex)", "description": "The wind walker no longer takes ability score penalties for aging and cannot be magically aged. Penalties already incurred remain in place; bonuses still accrue, and he still dies of old age when his time is up.", "level": 15 },
      { "name": "Elemental Shape (Su)", "description": "The wind walker can take the form of a Small, Medium, or Large air elemental once per day, functioning like the polymorph spell as described in the class text: the effect lasts 1 hour per wind walker level or until he changes back, changing form is a standard action, the new form's Hit Dice cannot exceed his wind walker level, and he gains the elemental's extraordinary, supernatural, and spell-like abilities and feats while retaining his own creature type. He can use this ability twice per day at 18th level and three times per day at 20th level, and at 20th level he may also change into a Huge elemental.", "level": 16 }
    ]
  },
  {
    "id": "winter-warden",
    "name": "Winter Warden",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/druid.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Balance",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Knowledge (geography)",
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
      { "name": "Winter Warden Basics", "description": "A druid variant (see the shared variant-druid rules for this article). The winter warden has the same weapon and armor proficiencies and restrictions as the druid. Key abilities: Wisdom (spellcasting) and Dexterity." },
      { "name": "Spells", "description": "The winter warden casts divine spells drawn from the druid spell list and follows the druid's spell progression, preparing spells in advance; his alignment restricts him from casting spells opposed to his own or his deity's alignment, as a druid. His bonus language options and Druidic are as the druid's. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; the saving throw DC is 10 + the spell's level + his Wisdom modifier.", "level": 1 },
      { "name": "Animal Companion (Ex)", "description": "As the druid ability of the same name.", "level": 1 },
      { "name": "Cold Casting (Ex)", "description": "The winter warden casts all spells (including spell-like abilities) with the cold descriptor as though his caster level were 1 level higher, and adds +1 to the DCs of all such spells.", "level": 1 },
      { "name": "Nature Sense (Ex)", "description": "As the druid ability of the same name: a +2 bonus on Knowledge (nature) and Survival checks.", "level": 1 },
      { "name": "Wild Empathy (Ex)", "description": "As the druid ability of the same name, except that the winter warden does not suffer the usual penalty when using this ability on a magical beast of the cold subtype.", "level": 1 },
      { "name": "Ray of Frost (Sp)", "description": "Ray of frost is added to the winter warden's spell list as a 0-level spell. He can prepare and cast it as part of his normal allotment of druid spells.", "level": 2 },
      { "name": "Drift Stride (Su)", "description": "The winter warden can move across the top of snow without stepping into it or being impeded in his progress over a snowy area, similar to the effects of a water walk spell. Snow enchanted or magically manipulated to impede movement still affects him.", "level": 3 },
      { "name": "Trackless Step (Ex)", "description": "As the druid ability of the same name: the winter warden leaves no trail in natural surroundings and cannot be tracked, though he may choose to leave a trail.", "level": 4 },
      { "name": "Ice Stride (Su)", "description": "The winter warden can move across ice without stepping onto it or being impeded in his progress over an icy area, similar to the effects of a water walk spell: he does not take two squares of movement to enter an icy area, and Balance, Tumble, or Climb DCs in the area are not increased for him. This ability does not protect him from the cold of the ice or from the negative effects of long contact. Ice enchanted or magically manipulated to impede movement still affects him.", "level": 5 },
      { "name": "Wild Shape (Su)", "description": "As the druid's wild shape, except that it begins at 6th level (once per day) and the ability functions like the polymorph spell as described in the class text; his forms are usually creatures of arctic climes. Further daily uses at 7th (2/day), 8th (3/day), 11th (4/day), 14th (5/day), and 19th level (6/day); Large forms at 10th level and Huge forms at 16th. The new form's Hit Dice cannot exceed his winter warden level.", "level": 6 },
      { "name": "Resistance to Cold (Ex)", "description": "The winter warden gains resistance to cold 5. This increases to resistance 10 at 12th level and resistance 20 at 15th level.", "level": 9 },
      { "name": "Wall of Ice (Sp)", "description": "Once per day, the winter warden can cast wall of ice as a caster of a level equal to his winter warden level.", "level": 13 },
      { "name": "Otiluke's Freezing Sphere (Sp)", "description": "Once per day, the winter warden can cast Otiluke's freezing sphere as a caster of a level equal to his winter warden level.", "level": 17 },
      { "name": "Immunity to Cold (Ex)", "description": "The winter warden is immune to cold damage.", "level": 18 },
      { "name": "Polar Ray (Sp)", "description": "Once per day, the winter warden can cast polar ray as a caster of a level equal to his winter warden level.", "level": 20 }
    ]
  }
];

export const DRAGON_311_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
