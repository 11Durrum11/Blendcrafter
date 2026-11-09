// Dragon Paladins — the 11 paladin variant base classes that complete the
// set of 12 alignment paladins alongside the core Paladin: Dragon Magazine
// #310 "Champions of the Divine" (James Jacobs) — Sentinel (NG), Avenger
// (CG), Enforcer (LN), Incarnate (N), Anarch (CN); Dragon Magazine #312
// "Reavers of the Divine" — Anti-Paladin (CE), Despot (LE), Corrupter (NE);
// Unearthed Arcana — Paladin of Freedom (CG), Paladin of Tyranny (LE),
// Paladin of Slaughter (CE). Ordered by Shaun 2026-11-09 ("build all 12
// into Blendcrafter", "bring him up to 3.5"): every record is built on the
// full 3.5 paladin chassis (d10, full BAB, 2 + Int skills); the good save
// varies by class (Fort / Will / Ref) exactly as each class's own table
// prints it. Extracted from srd.dndtools.org (all 11 classes are hosted on
// its paladin page), cross-checked against the Dragon #310 magazine text
// on archive.org; the three dndtools transcription errors found (2nd-level
// good Will saves for Avenger/Enforcer/Despot, Sentinel's Dispel Evil
// cadence, Avenger's Slippery Mind wording) were corrected from print and
// are documented in the staging pack's MANIFEST.md
// (workspace/library-staging/packs/dragon-paladins/), which also holds the
// APOC screening (SCREENING.md) and the full per-class spell lists
// (reference.md). Progressions cover levels 1-10, as the builder models
// base classes to level 10. The Incarnate's id is "incarnate-310" — the
// plain id "incarnate" belongs to the Magic of Incarnum class of the same
// name; both records live, per the catalog's same-name precedent.
// Feature text is a faithful mechanical
// condensation in our own words; no magazine prose is reproduced.
// Records below are the extracted data; the export at the bottom adapts
// them to the catalog's ClassDefinition shape (feature keys, categories,
// and per-feature sources stamped from each record's own source).

import type {
  ClassDefinition,
  ClassLevelProgressionRow,
  FeatureDefinition,
} from "@/engine/types";

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
    "id": "sentinel",
    "name": "Sentinel",
    "ruleset": "core",
    "source": "Dragon Magazine #310 — Champions of the Divine",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html#sentinel",
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
      "Concentration",
      "Craft",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Listen",
      "Profession",
      "Search",
      "Sense Motive",
      "Spot",
      "Survival"
    ],
    "features": [
      { "name": "Sentinel Basics", "description": "Alignment: neutral good. A sentinel adheres to a strict code of conduct: he must protect the natural order of the Material Plane from being influenced or tainted by the forces of the evil Outer Planes, journey into cities only when absolutely necessary, avoid travel to other planes except in the most dire need, and provide assistance to any non-outsider who becomes lost or endangered while in the wilderness (as long as the victim honors the sanctity of the wilderness). A sentinel who willfully commits an evil act loses all sentinel spells and abilities until he atones. Key abilities: Charisma (his divine grace, smite evil, and turn outsider), Strength, and Wisdom (his spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Good (Ex)", "description": "The power of a sentinel's aura of good (see the detect good spell) is equal to his sentinel level, just like the aura of a cleric of a good deity.", "level": 1 },
      { "name": "Detect Evil (Sp)", "description": "At will, a sentinel can use detect evil, as the spell.", "level": 1 },
      { "name": "Smite Evil (Su)", "description": "Once per day, a sentinel may attempt to smite evil with one normal melee attack: he adds his Charisma bonus (if any) to his attack roll and deals 1 extra point of damage per sentinel level. A sentinel's smite targets all evil creatures. If he accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day. He gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "A sentinel gains a bonus equal to his Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Resist Fiendish Lure (Su)", "description": "A sentinel gains a +4 sacred bonus on all saving throws against mind-affecting attacks of evil outsiders.", "level": 2 },
      { "name": "Aura of Courage (Su)", "description": "A sentinel is immune to fear (magical or otherwise), and each ally within 10 feet of him gains a +4 morale bonus on saving throws against fear effects; this ability functions only while the sentinel is conscious.", "level": 3 },
      { "name": "Celestial Fortitude (Su)", "description": "A sentinel gains a +2 sacred bonus on all Fortitude saving throws against effects from evil outsiders and evil spells. Additionally, if he makes a successful Fortitude saving throw against an effect from an evil spell or evil outsider that normally deals half damage or partial effects on a successful save, he instead takes no damage and suffers no partial effects.", "level": 3 },
      { "name": "Turn Outsider (Su)", "description": "A sentinel can turn or destroy outsiders by channeling energy, a number of times per day equal to 3 + his Charisma modifier. He turns outsiders as a cleric of three levels lower would turn undead.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, a sentinel casts divine spells prepared ahead of time from the sentinel spell list (his own list, distinct from the paladin's); his caster level is one-half his sentinel level. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Celestial Minion (Sp)", "description": "Once per day as a standard action, a sentinel can summon a Medium or smaller celestial animal (an animal with the celestial creature template). This celestial minion carries the same responsibilities as a paladin's special mount and gains the same bonuses to its HD, natural armor, Strength, Intelligence, and other special abilities that a paladin's special mount gains as the sentinel increases in level. Unlike the paladin's special mount, the celestial minion remains for only 1 hour per sentinel level before returning to the Outer Plane from whence it came.", "level": 5 },
      { "name": "Dispel Evil (Sp)", "description": "A sentinel can use dispel evil, as the spell, once per week; he gains an additional weekly use at 12th level and every four levels thereafter (2/week at 12th, 3/week at 16th, 4/week at 20th).", "level": 8 }
    ]
  },
  {
    "id": "avenger",
    "name": "Avenger",
    "ruleset": "core",
    "source": "Dragon Magazine #310 — Champions of the Divine",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 2, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 3, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 4, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 5, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 6, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 7, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 8, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 9, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 10, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Hide",
      "Intimidate",
      "Knowledge (local)",
      "Knowledge (religion)",
      "Move Silently",
      "Sense Motive"
    ],
    "features": [
      { "name": "Avenger Basics", "description": "Alignment: chaotic good. An avenger adheres to a strict code of conduct: she must temper her vengeance so that the punishment fits the crime (killing is a last resort, reserved only for the truly evil and despicable), aid and assist anyone who asks for help (within reason), and never join an organized association, order, or group. An avenger who willfully commits an evil act, or who willingly allies with a lawful government or affiliated agency, loses all avenger spells and abilities until she atones. Key abilities: Charisma (her divine grace, smite law, lay on hands, and turning), Strength, and Wisdom (her spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Chaos", "description": "The power of an avenger's aura of chaos (see the detect chaos spell) is equal to her avenger level.", "level": 1 },
      { "name": "Detect Law (Sp)", "description": "At will, an avenger can use detect law, as the spell.", "level": 1 },
      { "name": "Smite Law (Su)", "description": "Once per day, an avenger may attempt to smite law with one normal melee attack: she adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per avenger level. An avenger's smite targets creatures with a lawful alignment. If she accidentally smites a creature that is not lawful, the smite has no effect, but the ability is still used up for that day. She gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "An avenger gains a bonus equal to her Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Lay on Hands (Su)", "description": "Each day, an avenger can heal a total number of hit points equal to her avenger level x her Charisma bonus; she may divide this healing among multiple recipients, and using lay on hands is a standard action. An avenger must have a Charisma score of 12 or higher to use this ability at all. Alternatively, she can expend points from the same pool to deal damage to a single undead creature with a successful melee touch attack, dealing 1 point of damage per point of the pool she expends (no saving throw).", "level": 2 },
      { "name": "Aura of Courage (Su)", "description": "An avenger is immune to fear (magical or otherwise), and each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects; this ability functions only while the avenger is conscious.", "level": 3 },
      { "name": "Slippery Mind (Ex)", "description": "An avenger's mind fights much harder against magical control than most other minds. If an avenger is affected by an enchantment spell or effect and fails her saving throw, she can attempt the saving throw again 1 round later to break free of the effect. Failing this second saving throw does not grant the avenger further saving throws against the enchantment.", "level": 3 },
      { "name": "Turn Undead (Su)", "description": "An avenger can turn undead as a cleric of three levels lower would, a number of times per day equal to 3 + her Charisma modifier.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, an avenger casts divine spells prepared ahead of time from the avenger spell list (her own list, distinct from the paladin's); her caster level is one-half her avenger level. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + her Wisdom modifier. She prepares her spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Animal Minion (Su)", "description": "An avenger gains an animal minion that can serve as a scout, a combatant, or a guardian; most avengers select some form of bird as their minion. The animal minion must be equal in size or smaller than the avenger, since minions are never used as mounts. The animal minion is otherwise treated as a paladin's special mount in all ways, including the additional abilities gained as the avenger gains levels and the repercussions if the minion is lost.", "level": 5 },
      { "name": "Break Enchantment (Sp)", "description": "An avenger can cast break enchantment, as the spell, once per week; she gains an additional weekly use at 9th level and every three levels thereafter (2/week at 9th, 3/week at 12th, 4/week at 15th, 5/week at 18th).", "level": 6 }
    ]
  },
  {
    "id": "enforcer",
    "name": "Enforcer",
    "ruleset": "core",
    "source": "Dragon Magazine #310 — Champions of the Divine",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 2, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 3, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 4, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 5, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 6, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 7, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 8, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 9, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 10, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Gather Information",
      "Intimidate",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Profession",
      "Search",
      "Sense Motive"
    ],
    "features": [
      { "name": "Enforcer Basics", "description": "Alignment: lawful neutral. An enforcer adheres to a strict code of conduct: he must uphold and enforce the laws of the church and the land at all times, even when those laws prevent him from fully accomplishing a personal goal, and he is bound to serve both his divine patron and his worldly liege (whose patron deity must be the same as his own). He may not accept a position of leadership that would leave him with no liege above him, except in an emergency and then for no more than 24 hours; if he believes his liege is not acting in their deity's best interests, he may act against his liege only if he can expose the liege's heresy within 24 hours. An enforcer who willfully commits a chaotic act (such as breaking a vow or contract or betraying an ally) loses all enforcer spells and abilities until he atones. Key abilities: Charisma (his divine grace, smite chaos, and rebuking), Strength, and Wisdom (his spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Law", "description": "The power of an enforcer's aura of law (see the detect law spell) is equal to his enforcer level.", "level": 1 },
      { "name": "Detect Chaos (Sp)", "description": "At will, an enforcer can use detect chaos, as the spell.", "level": 1 },
      { "name": "Smite Chaos (Su)", "description": "Once per day, an enforcer may attempt to smite chaos with one normal melee attack: he adds his Charisma bonus (if any) to his attack roll and deals 1 extra point of damage per enforcer level. An enforcer's smite targets creatures with a chaotic alignment. If he accidentally smites a creature that is not chaotic, the smite has no effect, but the ability is still used up for that day. He gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "An enforcer gains a bonus equal to his Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Subdue (Ex)", "description": "An enforcer has learned how to efficiently inflict nonlethal damage with weapons. He does not suffer the standard -4 penalty to attack rolls when he attacks to inflict nonlethal damage with a weapon that normally deals lethal damage, as long as he is proficient with the weapon being used. In addition, when an enforcer attacks to inflict nonlethal damage with a weapon specifically designed to deal nonlethal damage (such as a sap or whip), he gains a +2 bonus to weapon damage rolls.", "level": 2 },
      { "name": "Aura of Courage (Su)", "description": "An enforcer is immune to fear (magical or otherwise), and each ally within 10 feet of him gains a +4 morale bonus on saving throws against fear effects; this ability functions only while the enforcer is conscious.", "level": 3 },
      { "name": "Suggestion (Sp)", "description": "An enforcer can cast suggestion, as the spell, once per day at a caster level equal to his enforcer level. He gains an additional daily use at 8th level and every five levels thereafter (2/day at 8th, 3/day at 13th, 4/day at 18th).", "level": 3 },
      { "name": "Rebuke Undead (Su)", "description": "An enforcer can rebuke or command undead as an evil cleric of three levels lower would, a number of times per day equal to 3 + his Charisma modifier. Enforcers are expected to use commanded undead to further the cause of law and generally don't keep commanded undead under their control for more than 24 hours.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, an enforcer casts divine spells prepared ahead of time from the enforcer spell list (his own list, distinct from the paladin's); his caster level is one-half his enforcer level. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Leadership (Ex)", "description": "An enforcer gains the Leadership feat as a bonus feat. He gains a +1 bonus to his Leadership score, although the maximum number and level of his followers and cohorts remains standard.", "level": 5 },
      { "name": "Dominate Person (Sp)", "description": "An enforcer can cast dominate person, as the spell, once per week, at a caster level equal to his enforcer level; he gains an additional weekly use at 11th level and every four levels thereafter (2/week at 11th, 3/week at 15th, 4/week at 19th).", "level": 7 }
    ]
  },
  {
    "id": "incarnate-310",
    "name": "Incarnate",
    "ruleset": "core",
    "source": "Dragon Magazine #310 — Champions of the Divine",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
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
      "Concentration",
      "Craft",
      "Diplomacy",
      "Knowledge (nature)",
      "Knowledge (religion)",
      "Listen",
      "Profession",
      "Search",
      "Spot",
      "Survival"
    ],
    "features": [
      { "name": "Incarnate Basics", "description": "Alignment: neutral. An incarnate serves no patron deity; her divine spells and abilities come through her unwavering devotion to Balance, and she fights to restore the balance whenever one force grows too powerful in a region. An incarnate who willfully commits an act that endangers the natural balance of the world loses all incarnate spells and abilities until she atones. She avoids travel to other planes (except the Elemental Planes to which she has an affinity) except in the most dire need, prefers peaceful solutions, and never knowingly associates with creatures of an alignment subtype. Key abilities: Charisma (her divine grace, smite extremist, elemental burst, and rebuking outsiders), Strength, and Wisdom (her spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Detect Imbalance (Sp)", "description": "An incarnate is sensitive to the presence of creatures with alignment subtypes, because of how unbalancing such creatures can be. This ability functions as the detect undead spell, except that it detects creatures with an alignment subtype rather than undead. It does not determine the creature's alignment or subtype, just its presence.", "level": 1 },
      { "name": "Elemental Affinity (Ex)", "description": "The elemental planes are closer to an incarnate's mind than the Outer Planes, and she has a particular affinity to two elements, either air and earth or fire and water; she must select one of these pairings upon taking her first incarnate level. Each element is associated with a form of energy: air with electricity, earth with acid, fire with fire, and water with cold.", "level": 1 },
      { "name": "Smite Extremist (Su)", "description": "Once per day, an incarnate may attempt to smite an extremist with one normal melee attack: she adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per incarnate level. An incarnate's smite targets creatures of the following alignments: lawful good, lawful evil, chaotic good, and chaotic evil; when she makes a smite attack, she must decide which alignment she is smiting. If she accidentally smites a creature of none of those alignments, the smite has no effect, but the ability is still used up for that day. She gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "An incarnate gains a bonus equal to her Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Elemental Burst (Su)", "description": "An incarnate with a Charisma score of 12 or higher can create a burst of energy appropriate to her elemental affinity, as a standard action. She directs this burst at any target within 60 feet as a ranged touch attack. A successful hit deals 1d4 points of damage plus the incarnate's Charisma modifier of each of the incarnate's two associated energy types (for example, an incarnate with Charisma 13 associated with fire and water deals 1d4+1 points of fire damage and 1d4+1 points of cold damage). The incarnate can generate a number of elemental bursts in a day equal to her Charisma bonus.", "level": 2 },
      { "name": "Aura of Courage (Su)", "description": "An incarnate is immune to fear (magical or otherwise), and each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects; this ability functions only while the incarnate is conscious.", "level": 3 },
      { "name": "Energy Resistance (Ex)", "description": "An incarnate gains energy resistance 5 to the types of energy associated with her elemental affinity.", "level": 3 },
      { "name": "Rebuke Outsider (Su)", "description": "An incarnate can rebuke or command outsiders, a number of times per day equal to 3 + her Charisma modifier; she turns outsiders as a cleric of three levels lower would turn undead. She can use this ability only while she is on the Material Plane.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, an incarnate casts divine spells prepared ahead of time from the incarnate spell list (her own list, distinct from the paladin's); her caster level is one-half her incarnate level. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + her Wisdom modifier. She prepares her spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Elemental Minion (Sp)", "description": "Once per day as a standard action, an incarnate can summon a Medium elemental (air, earth, fire, or water) of one of the types she is associated with due to her elemental affinity. This elemental minion carries the same responsibilities as a paladin's special mount and gains the same bonuses to its HD, natural armor, Strength, Intelligence, and other special abilities that a paladin's special mount gains as the incarnate increases in level. Unlike the paladin's special mount, the elemental minion remains for only 1 hour per incarnate level before returning to the elemental plane from whence it came.", "level": 5 },
      { "name": "Commune with Nature (Sp)", "description": "An incarnate can commune with nature, as the spell, once per week; she gains an additional weekly use at 12th level and every four levels thereafter (2/week at 12th, 3/week at 16th, 4/week at 20th).", "level": 8 }
    ]
  },
  {
    "id": "anarch",
    "name": "Anarch",
    "ruleset": "core",
    "source": "Dragon Magazine #310 — Champions of the Divine",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "ref"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 0, "ref": 2, "will": 0 },
      { "level": 2, "bab": 2, "fort": 0, "ref": 3, "will": 0 },
      { "level": 3, "bab": 3, "fort": 1, "ref": 3, "will": 1 },
      { "level": 4, "bab": 4, "fort": 1, "ref": 4, "will": 1 },
      { "level": 5, "bab": 5, "fort": 1, "ref": 4, "will": 1 },
      { "level": 6, "bab": 6, "fort": 2, "ref": 5, "will": 2 },
      { "level": 7, "bab": 7, "fort": 2, "ref": 5, "will": 2 },
      { "level": 8, "bab": 8, "fort": 2, "ref": 6, "will": 2 },
      { "level": 9, "bab": 9, "fort": 3, "ref": 6, "will": 3 },
      { "level": 10, "bab": 10, "fort": 3, "ref": 7, "will": 3 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Disable Device",
      "Intimidate",
      "Knowledge (architecture and engineering)",
      "Knowledge (religion)",
      "Profession",
      "Sense Motive",
      "Survival"
    ],
    "features": [
      { "name": "Anarch Basics", "description": "Alignment: chaotic neutral. An anarch's code is little more than a lack of one: he loses all anarch spells and abilities if he ever willingly commits a blatantly lawful act (such as abiding by an oath, fulfilling a contract, or joining an organization such as a brotherhood or fellowship); as long as he continues to cause chaos and foment disrespect for law in others, his status as an anarch is secure. He never knowingly associates with lawful characters. Key abilities: Charisma (his divine grace, smite law, destructive strike, and turning constructs), Strength, and Wisdom (his spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Chaos", "description": "The power of an anarch's aura of chaos (see the detect chaos spell) is equal to his anarch level.", "level": 1 },
      { "name": "Detect Law (Sp)", "description": "At will, an anarch can use detect law, as the spell.", "level": 1 },
      { "name": "Smite Law (Su)", "description": "Once per day, an anarch may attempt to smite law with one normal melee attack: he adds his Charisma bonus (if any) to his attack roll and deals 1 extra point of damage per anarch level. An anarch's smite targets lawful creatures. If he accidentally smites a creature that is not lawful, the smite has no effect, but the ability is still used up for that day. He gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "An anarch gains a bonus equal to his Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Destructive Strike (Su)", "description": "An anarch can inflict critical hit damage (but not sneak attack damage) on an object or construct with a melee attack, a number of times per day equal to his Charisma modifier. The anarch makes the decision to use this ability after a critical hit is rolled but before the roll to confirm is made; if he fails to confirm the critical hit, that use of destructive strike is wasted.", "level": 2 },
      { "name": "Aura of Courage (Su)", "description": "An anarch is immune to fear (magical or otherwise), and each ally within 10 feet of him gains a +4 morale bonus on saving throws against fear effects; this ability functions only while the anarch is conscious.", "level": 3 },
      { "name": "Slippery Mind (Ex)", "description": "An anarch's mind fights much harder against magical control than most other minds. If an anarch is affected by an enchantment spell or effect and fails his saving throw, he can attempt the saving throw again 1 round later to break free of the effect. Failing this second saving throw does not grant the anarch further saving throws against the enchantment.", "level": 3 },
      { "name": "Turn Construct (Su)", "description": "An anarch can turn or destroy constructs, a number of times per day equal to 3 + his Charisma modifier. He turns constructs as a cleric of three levels lower would turn undead.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, an anarch casts divine spells prepared ahead of time from the anarch spell list (his own list, distinct from the paladin's); his caster level is one-half his anarch level. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Special Mount (Sp)", "description": "Once per day as a full-round action, an anarch can call a special mount to his side, exactly as a paladin does - usually a heavy warhorse (or a warpony for a Small anarch). The mount is a magical beast with unusual strength and intelligence, which serves the anarch willingly and well for 2 hours per anarch level (he can dismiss it at any time). Its abilities improve as the anarch gains levels: in the 5th-7th level band it has an empathic link (out to 1 mile), improved evasion, share spells, and share saving throws; in the 8th-10th band it gains improved speed (+10 feet to its movement modes); in the 11th-14th band it can command creatures of its kind once per day; and in the 15th-20th band it gains spell resistance equal to the anarch's level + 5. If the mount dies, the anarch may not summon another one for thirty days (or until he gains an anarch level, whichever comes first), and during the thirty days immediately following its death he takes a -1 penalty on attack and damage rolls.", "level": 5 },
      { "name": "Dispel Law (Sp)", "description": "An anarch can use dispel law, as the spell, once per week, at a caster level equal to his anarch level; he gains an additional weekly use at 12th level and every four levels thereafter (2/week at 12th, 3/week at 16th, 4/week at 20th).", "level": 8 }
    ]
  },
  {
    "id": "anti-paladin",
    "name": "Anti-Paladin",
    "ruleset": "core",
    "source": "Dragon Magazine #312 — Reavers of the Divine",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
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
      "Concentration",
      "Hide",
      "Intimidate",
      "Jump",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Ride",
      "Survival"
    ],
    "features": [
      { "name": "Anti-Paladin Basics", "description": "Alignment: chaotic evil. An anti-paladin must work at all times to undermine the works of civilization and good peoples, and must never offer mercy or grant quarter unless he betrays his word within the next hour. He cannot join an organization, but he can perform services for others as long as the services are for pay and ultimately lead to chaos and devastation. An anti-paladin who willfully commits a good act loses all anti-paladin spells and abilities. Key abilities: Charisma (his divine grace, smite good, and turning or rebuking outsiders), Strength, and Wisdom (his spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Evil", "description": "The power of an anti-paladin's aura of evil (see the detect evil spell) is equal to his anti-paladin level.", "level": 1 },
      { "name": "Detect Good (Sp)", "description": "At will, an anti-paladin can use detect good, as the spell.", "level": 1 },
      { "name": "Smite Good (Su)", "description": "Once per day, an anti-paladin may attempt to smite good with one normal melee attack: he adds his Charisma bonus (if any) to his attack roll and deals 1 extra point of damage per anti-paladin level. An anti-paladin's smite targets creatures of a good alignment. If he accidentally smites a creature that is not good, the smite has no effect, but the ability is still used up for that day. He gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "An anti-paladin gains a bonus equal to his Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Slaughter the Weak (Ex)", "description": "An anti-paladin gains a +2 morale bonus on attack and damage rolls with melee weapons when he attacks any creature that has fewer Hit Dice than he does. Dying creatures who have fewer Hit Dice than the anti-paladin suffer a -2 penalty on saving throws against death knell spells cast by the anti-paladin.", "level": 2 },
      { "name": "Aura of Fear (Su)", "description": "Each enemy within 10 feet of an anti-paladin suffers a -4 morale penalty on saving throws against fear effects. The anti-paladin is deadened to the emotion of fear, and is immune to all fear effects. This ability functions while the anti-paladin is conscious, but not if he is unconscious or dead, and the anti-paladin can suppress or activate this aura as a free action.", "level": 3 },
      { "name": "Death Knell (Sp)", "description": "An anti-paladin can cast death knell, as the spell, once per day at 3rd level, at a caster level equal to his anti-paladin level. He gains an additional daily use at 8th level and every five levels thereafter (2/day at 8th, 3/day at 13th, 4/day at 18th).", "level": 3 },
      { "name": "Turn or Rebuke Outsider (Su)", "description": "An anti-paladin can turn or destroy good outsiders by channeling energy; he can instead rebuke or command evil outsiders with a use of this ability if he chooses. He may use this ability a number of times per day equal to 3 + his Charisma modifier, and he turns or rebukes outsiders as a cleric of three levels lower would turn undead.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, an anti-paladin casts divine spells prepared ahead of time from the anti-paladin spell list (his own list, distinct from the paladin's); his caster level is one-half his anti-paladin level. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Fiendish Mount (Sp)", "description": "An anti-paladin gains a fiendish mount at 5th level. This ability functions just like the special mount ability of the paladin class, except that an anti-paladin's special mount always has the fiendish template, and it remains for 1 hour per anti-paladin level once called.", "level": 5 },
      { "name": "Contagion (Sp)", "description": "An anti-paladin can cast contagion, as the spell, once per week, at a caster level equal to his anti-paladin level; he gains an additional weekly use at 9th level and every three levels thereafter (2/week at 9th, 3/week at 12th, 4/week at 15th, 5/week at 18th).", "level": 6 }
    ]
  },
  {
    "id": "despot",
    "name": "Despot",
    "ruleset": "core",
    "source": "Dragon Magazine #312 — Reavers of the Divine",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 2, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 3, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 4, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 5, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 6, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 7, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 8, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 9, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 10, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Intimidate",
      "Knowledge (nobility and royalty)",
      "Knowledge (religion)",
      "Profession",
      "Search",
      "Sense Motive"
    ],
    "features": [
      { "name": "Despot Basics", "description": "Alignment: lawful evil. A despot adheres to a rigid code of warped honor: she must at all times work to expand and grow her domain, protect and defend her subjects and allies from harm from other forces, and not overburden her subjects so that they cannot support her; she is allowed to abuse her sovereignty in any way she sees fit to further her own personal strength and glory. A despot who willfully commits a chaotic act (such as breaking a vow or contract or betraying an ally) loses all despot spells and abilities. Key abilities: Charisma (her divine grace, smite chaos, and oppression), Strength, and Wisdom (her spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Law", "description": "The power of a despot's aura of law (see the detect law spell) is equal to her despot level.", "level": 1 },
      { "name": "Detect Chaos (Sp)", "description": "At will, a despot can use detect chaos, as the spell.", "level": 1 },
      { "name": "Smite Chaos (Su)", "description": "Once per day, a despot may attempt to smite chaos with one normal melee attack: she adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per despot level. A despot's smite targets creatures with a chaotic alignment. If she accidentally smites a creature that is not chaotic, the smite has no effect, but the ability is still used up for that day. She gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "A despot gains a bonus equal to her Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Slippery Mind (Ex)", "description": "A despot's mind fights much harder against magical control than most other minds. If a despot is affected by an enchantment spell or effect and fails her saving throw, she can attempt the saving throw again 1 round later to break free of the effect. Failing this second saving throw does not grant the despot further saving throws against the enchantment.", "level": 2 },
      { "name": "Aura of Fear (Su)", "description": "Each enemy within 10 feet of a despot suffers a -4 morale penalty on saving throws against fear effects. The despot is deadened to the emotion of fear, and is immune to all fear effects. This ability functions while the despot is conscious, but not if she is unconscious or dead, and the despot can suppress or activate this aura as a free action.", "level": 3 },
      { "name": "Indomitable Will (Su)", "description": "A despot's mind has become an unassailable fortress of ego: she is completely immune to all spells of the charm subschool.", "level": 3 },
      { "name": "Oppression (Su)", "description": "A despot can oppress other living creatures by speaking to them and channeling negative energy into the power of her voice; this is a language-dependent, mind-affecting ability. When a despot tries to oppress, she makes a turning check (1d20 + her Charisma modifier) as if she were a cleric of three levels lower turning undead. The result of the check indicates how many targets within 60 feet (who must be able to understand the despot's words) are potentially affected, and the turning damage indicates the total Hit Dice of targets affected. Creatures with chaotic alignments are affected first, and creatures with lawful alignments are affected last; within the alignment spectrum, closer creatures are affected first. A target that is oppressed becomes sickened with guilt and depression (-2 penalty on all attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks) for 1 minute. If the despot has twice as many levels (or more) than any creature that is oppressed, that creature is instead nauseated (able to take only a single move action each turn) for 1 minute. A despot can use this ability a number of times per day equal to 3 + her Charisma modifier.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, a despot casts divine spells prepared ahead of time from the despot spell list (her own list, distinct from the paladin's); her caster level is one-half her despot level. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + her Wisdom modifier. She prepares her spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Leadership (Ex)", "description": "A despot gains the Leadership feat as a bonus feat. Despots gain a +1 bonus to their Leadership score.", "level": 5 },
      { "name": "Mark of Justice (Sp)", "description": "A despot can cast mark of justice, as the spell, once per week; she gains an additional weekly use at 11th level and every four levels thereafter (2/week at 11th, 3/week at 15th, 4/week at 19th).", "level": 7 }
    ]
  },
  {
    "id": "corrupter",
    "name": "Corrupter",
    "ruleset": "core",
    "source": "Dragon Magazine #312 — Reavers of the Divine",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "ref"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 0, "ref": 2, "will": 0 },
      { "level": 2, "bab": 2, "fort": 0, "ref": 3, "will": 0 },
      { "level": 3, "bab": 3, "fort": 1, "ref": 3, "will": 1 },
      { "level": 4, "bab": 4, "fort": 1, "ref": 4, "will": 1 },
      { "level": 5, "bab": 5, "fort": 1, "ref": 4, "will": 1 },
      { "level": 6, "bab": 6, "fort": 2, "ref": 5, "will": 2 },
      { "level": 7, "bab": 7, "fort": 2, "ref": 5, "will": 2 },
      { "level": 8, "bab": 8, "fort": 2, "ref": 6, "will": 2 },
      { "level": 9, "bab": 9, "fort": 3, "ref": 6, "will": 3 },
      { "level": 10, "bab": 10, "fort": 3, "ref": 7, "will": 3 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Hide",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Sense Motive"
    ],
    "features": [
      { "name": "Corrupter Basics", "description": "Alignment: neutral evil. A corrupter must strive to corrupt and taint all faiths apart from his own, with a special focus on good faiths, and must strive to remain hidden, although the methods by which he undermines other faiths are left to his own discretion; he is allowed to make whatever vows or declarations are required to maintain his deception, as long as he spends at least an hour each day in private prayer to his deity. A corrupter who willfully commits a good act, or an act that exposes his faith to an opposing religion and results in his detriment, loses all corrupter spells and abilities. Key abilities: Charisma (his divine grace, smite heathen, and intercession), Strength, and Wisdom (his spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Evil", "description": "The power of a corrupter's aura of evil (see the detect evil spell) is equal to his corrupter level.", "level": 1 },
      { "name": "Detect Good (Sp)", "description": "At will, a corrupter can use detect good, as the spell.", "level": 1 },
      { "name": "Smite Heathen (Su)", "description": "Once per day, a corrupter may attempt to smite a heathen with one normal melee attack: he adds his Charisma bonus (if any) to his attack roll and deals 1 extra point of damage per corrupter level. A corrupter's smite targets all creatures with the ability (including potential ability, such as a paladin or ranger who has not yet reached a level that allows spellcasting) to cast divine spells, with the exception of worshipers of his own faith. If he accidentally smites a creature that is not a valid target, the smite has no effect, but the ability is still used up for that day. He gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "A corrupter gains a bonus equal to his Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Hidden Faith (Su)", "description": "A corrupter's faith in his deity becomes hidden. He gains a +4 profane bonus on all Bluff, Disguise, and Forgery checks to maintain this deception, and any magical attempt to discern his actual faith fails unless the caster makes a successful level check (DC 10 + the corrupter's class level).", "level": 2 },
      { "name": "Aura of Fear (Su)", "description": "Each enemy within 10 feet of a corrupter suffers a -4 morale penalty on saving throws against fear effects. The corrupter is deadened to the emotion of fear, and is immune to all fear effects. This ability functions while the corrupter is conscious, but not if he is unconscious or dead, and the corrupter can suppress or activate this aura as a free action.", "level": 3 },
      { "name": "Disguise Self (Sp)", "description": "A corrupter can cast disguise self, as the spell, a number of times per day equal to his Charisma bonus (minimum of once per day), at a caster level equal to his corrupter level.", "level": 3 },
      { "name": "Intercession (Su)", "description": "A corrupter gains the supernatural ability to cut divine spellcasters off from their source of power. To do so, the corrupter makes a turning check as a cleric of three levels lower would: the result indicates the highest-level divine spellcaster the corrupter can cut off from her connection to her deity, and the turning damage result indicates the maximum total Hit Dice of divine spellcasters within 60 feet that the ability can affect. The corrupter's intercession affects the closest divine spellcasters it can affect first. Affected divine spellcasters cannot cast divine spells for 1 minute, unless the corrupter has twice as many corrupter levels as the creature has divine spellcaster levels, in which case the divine spellcaster loses the ability to cast divine spells for 24 hours. If the corrupter attacks an affected divine spellcaster in any way, or the affected spellcaster receives an atonement spell, the divine spellcaster is freed from this effect; the corrupter's allies and other creatures can attack the divine spellcaster without breaking the effect. The corrupter may use this ability a number of times per day equal to 3 + his Charisma modifier.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, a corrupter casts divine spells prepared ahead of time from the corrupter spell list (his own list, distinct from the paladin's); his caster level is one-half his corrupter level. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Fiendish Familiar (Su)", "description": "A corrupter gains the Improved Familiar feat as a bonus feat, even if he normally couldn't qualify for the feat's prerequisites. His new familiar must be an imp or a quasit, and it benefits from the standard rules for familiars. The corrupter's class level counts as the 'master class level' for the purposes of determining what benefits the familiar gains.", "level": 6 },
      { "name": "Fallen Soul (Sp)", "description": "A corrupter can cast fallen soul, as the spell, once per week; he gains an additional weekly use at 12th level and every four levels thereafter (2/week at 12th, 3/week at 16th, 4/week at 20th). Fallen soul is a new spell printed in Dragon Magazine #312.", "level": 8 }
    ]
  },
  {
    "id": "paladin-of-freedom",
    "name": "Paladin of Freedom",
    "ruleset": "core",
    "source": "Unearthed Arcana",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
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
      "Concentration",
      "Craft",
      "Handle Animal",
      "Heal",
      "Knowledge (nobility and royalty)",
      "Knowledge (religion)",
      "Profession",
      "Ride",
      "Sense Motive"
    ],
    "features": [
      { "name": "Paladin of Freedom Basics", "description": "Alignment: chaotic good. A paladin of freedom is a variant paladin dedicated to liberty and free thought, and has all the standard paladin class features except as noted in this record. His code requires that he respect individual liberty, help those in need (provided they do not use the help for lawful or evil ends), and punish those who threaten or curtail personal liberty; he may not willingly commit an evil act, and he will not knowingly associate with evil characters (except on some sort of undercover mission) or continue an association that requires him to offend his moral code. A paladin of freedom who willfully commits an evil act or grossly violates his code loses all class spells and abilities until he atones. Key abilities: Charisma (his divine grace, smite evil, lay on hands, and turning), Strength, and Wisdom (his spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Good (Ex)", "description": "The power of a paladin of freedom's aura of good (see the detect good spell) is equal to his paladin of freedom level.", "level": 1 },
      { "name": "Detect Evil (Sp)", "description": "At will, a paladin of freedom can use detect evil, as the spell.", "level": 1 },
      { "name": "Smite Evil (Su)", "description": "Once per day, a paladin of freedom may attempt to smite evil with one normal melee attack: he adds his Charisma bonus (if any) to his attack roll and deals 1 extra point of damage per paladin of freedom level. If he accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day. He gains additional uses per day at 5th level and every five levels thereafter (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "A paladin of freedom gains a bonus equal to his Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Lay on Hands (Su)", "description": "Each day, a paladin of freedom can heal a total number of hit points equal to his paladin of freedom level x his Charisma bonus; he may divide this healing among multiple recipients, and using lay on hands is a standard action. A paladin of freedom must have a Charisma score of 12 or higher to use this ability at all. Alternatively, he can expend points from the same pool to deal damage to a single undead creature with a successful melee touch attack, dealing 1 point of damage per point of the pool he expends (no saving throw).", "level": 2 },
      { "name": "Aura of Resolve (Su)", "description": "A paladin of freedom is immune to compulsion effects. Each ally within 10 feet of him gains a +4 morale bonus on saving throws against compulsion effects. This ability otherwise functions identically to the paladin's aura of courage class feature. (This feature replaces aura of courage.)", "level": 3 },
      { "name": "Divine Health (Ex)", "description": "A paladin of freedom gains immunity to all diseases, including supernatural and magical diseases.", "level": 3 },
      { "name": "Turn Undead (Su)", "description": "A paladin of freedom can turn undead as a cleric of three levels lower would, a number of times per day equal to 3 + his Charisma modifier.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, a paladin of freedom casts divine spells prepared ahead of time from the paladin spell list, with the changes noted here; his caster level is one-half his paladin of freedom level. Remove the following spells from the paladin's spell list: death ward, discern lies, dispel chaos, magic circle against chaos, and protection from chaos. Add the following spells to the paladin's spell list: protection from law (1st level), magic circle against law and remove curse (3rd level), and dispel law and freedom of movement (4th level). To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Special Mount (Sp)", "description": "Once per day as a full-round action, a paladin of freedom can call a special mount to his side from the celestial realms where it resides - usually a heavy warhorse (or a warpony for a Small paladin of freedom). The mount is a magical beast with unusual strength and intelligence, which serves him willingly and well for 2 hours per paladin of freedom level (he can dismiss it at any time). Its abilities improve as he gains levels: in the 5th-7th level band it has an empathic link (out to 1 mile), improved evasion, share spells, and share saving throws; in the 8th-10th band it gains improved speed (+10 feet to its movement modes); in the 11th-14th band it can command creatures of its kind once per day; and in the 15th-20th band it gains spell resistance equal to his level + 5. If the mount dies, he may not summon another one for thirty days (or until he gains a paladin of freedom level, whichever comes first), and during the thirty days immediately following its death he takes a -1 penalty on attack and damage rolls.", "level": 5 },
      { "name": "Remove Disease (Sp)", "description": "A paladin of freedom can produce a remove disease effect, as the spell, once per week; he gains an additional weekly use at 9th level and every three levels thereafter (2/week at 9th, 3/week at 12th, 4/week at 15th, 5/week at 18th).", "level": 6 }
    ]
  },
  {
    "id": "paladin-of-tyranny",
    "name": "Paladin of Tyranny",
    "ruleset": "core",
    "source": "Unearthed Arcana",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
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
      { "name": "Paladin of Tyranny Basics", "description": "Alignment: lawful evil. A paladin of tyranny is a variant paladin bent on dominating those weaker than he, and has all the standard paladin class features except as noted in this record. His code requires that he respect authority figures as long as they have the strength to rule over the weak, act with discipline (not engaging in random slaughter, keeping firm control over those beneath his station, and so forth), help only those who help him maintain or improve his status, and punish those who challenge authority (unless, of course, such challengers prove more worthy to hold that authority). A paladin of tyranny who willfully commits a good act loses all class spells and abilities. Key abilities: Charisma (his divine grace, smite good, deadly touch, and rebuking), Strength, and Wisdom (his spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Evil (Ex)", "description": "The power of a paladin of tyranny's aura of evil (see the detect evil spell) is equal to his paladin of tyranny level, just as with the aura of a cleric of an evil deity.", "level": 1 },
      { "name": "Detect Good (Sp)", "description": "At will, a paladin of tyranny can use detect good, as the spell.", "level": 1 },
      { "name": "Smite Good (Su)", "description": "Once per day, a paladin of tyranny may attempt to smite good with one normal melee attack. This ability is otherwise identical to the standard paladin's ability to smite evil, including increased daily uses as the paladin of tyranny gains class levels (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "A paladin of tyranny gains a bonus equal to his Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Deadly Touch (Su)", "description": "A paladin of tyranny can cause wounds with a successful touch attack. Each day he can deal a total number of hit points of damage equal to his paladin of tyranny level x his Charisma bonus. An opponent subjected to this attack can make a Will save (DC 10 + 1/2 paladin of tyranny level + his Charisma modifier) to halve the damage dealt. Alternatively, he can use any or all of this power to cure damage to undead creatures, just as an inflict wounds spell does. This power otherwise functions identically to the paladin's lay on hands ability. (This feature replaces lay on hands.)", "level": 2 },
      { "name": "Aura of Despair (Su)", "description": "A paladin of tyranny radiates a malign aura that causes enemies within 10 feet of him to take a -2 penalty on all saving throws. This ability otherwise functions identically to the paladin's aura of courage class feature. (This feature replaces aura of courage.)", "level": 3 },
      { "name": "Divine Health (Ex)", "description": "A paladin of tyranny gains immunity to all diseases, including supernatural and magical diseases.", "level": 3 },
      { "name": "Rebuke Undead (Su)", "description": "A paladin of tyranny rebukes undead rather than turning undead: he rebukes or commands undead as a cleric of three levels lower would, a number of times per day equal to 3 + his Charisma modifier.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, a paladin of tyranny casts divine spells prepared ahead of time from the paladin of tyranny spell list, which replaces the standard paladin spell list entirely; his caster level is one-half his paladin of tyranny level. To prepare or cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + his Wisdom modifier. He prepares his spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Special Mount (Sp)", "description": "Once per day as a full-round action, a paladin of tyranny can call a fiendish special mount to his side from the lower planes where it resides - usually a heavy warhorse (or a warpony for a Small paladin of tyranny). The mount is a magical beast with unusual strength and intelligence, which serves him willingly and well for 2 hours per paladin of tyranny level (he can dismiss it at any time). Its abilities improve as he gains levels: in the 5th-7th level band it has an empathic link (out to 1 mile), improved evasion, share spells, and share saving throws; in the 8th-10th band it gains improved speed (+10 feet to its movement modes); in the 11th-14th band it can command creatures of its kind once per day; and in the 15th-20th band it gains spell resistance equal to his level + 5. If the mount dies, he may not summon another one for thirty days (or until he gains a paladin of tyranny level, whichever comes first), and during the thirty days immediately following its death he takes a -1 penalty on attack and damage rolls.", "level": 5 },
      { "name": "Cause Disease (Sp)", "description": "A paladin of tyranny can inflict disease with his touch (as the contagion spell) a number of times per week equal to the number of times a standard paladin of his level would normally be able to remove disease (1/week at 6th, 2/week at 9th, 3/week at 12th, 4/week at 15th, 5/week at 18th). (This feature replaces remove disease.)", "level": 6 }
    ]
  },
  {
    "id": "paladin-of-slaughter",
    "name": "Paladin of Slaughter",
    "ruleset": "core",
    "source": "Unearthed Arcana",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/baseCore/paladin.html",
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
      "Concentration",
      "Craft",
      "Handle Animal",
      "Heal",
      "Intimidate",
      "Knowledge (nobility and royalty)",
      "Knowledge (religion)",
      "Profession",
      "Ride",
      "Sense Motive"
    ],
    "features": [
      { "name": "Paladin of Slaughter Basics", "description": "Alignment: chaotic evil. A paladin of slaughter is a variant paladin who is a brutal champion of chaos and evil, and has all the standard paladin class features except as noted in this record. Her code requires that she disrespect all authority figures who have not proven their physical superiority to her, refuse help to those in need, and sow destruction and death at all opportunities. A paladin of slaughter who willfully commits a good act loses all class spells and abilities. Key abilities: Charisma (her divine grace, smite good, deadly touch, and rebuking), Strength, and Wisdom (her spells, from 4th level). Weapon and armor proficiencies: all simple and martial weapons, all armor (light, medium, and heavy), and shields (except tower shields)." },
      { "name": "Aura of Evil (Ex)", "description": "The power of a paladin of slaughter's aura of evil (see the detect evil spell) is equal to her paladin of slaughter level, just as with the aura of a cleric of an evil deity.", "level": 1 },
      { "name": "Detect Good (Sp)", "description": "At will, a paladin of slaughter can use detect good, as the spell.", "level": 1 },
      { "name": "Smite Good (Su)", "description": "Once per day, a paladin of slaughter may attempt to smite good with one normal melee attack. This ability is otherwise identical to the standard paladin's ability to smite evil, including increased daily uses as the paladin of slaughter gains class levels (2/day at 5th, 3/day at 10th, 4/day at 15th, 5/day at 20th).", "level": 1 },
      { "name": "Divine Grace (Su)", "description": "A paladin of slaughter gains a bonus equal to her Charisma bonus (if positive) on all saving throws.", "level": 2 },
      { "name": "Deadly Touch (Su)", "description": "A paladin of slaughter can cause wounds with a successful touch attack. Each day she can deal a total number of hit points of damage equal to her paladin of slaughter level x her Charisma bonus. An opponent subjected to this attack can make a Will save (DC 10 + 1/2 paladin of slaughter level + her Charisma modifier) to halve the damage dealt. Alternatively, she can use any or all of this power to cure damage to undead creatures, just as an inflict wounds spell does. This power otherwise functions identically to the paladin's lay on hands ability. (This feature replaces lay on hands.)", "level": 2 },
      { "name": "Debilitating Aura (Su)", "description": "A paladin of slaughter radiates a malign aura that causes enemies within 10 feet of her to take a -1 penalty to Armor Class. This ability otherwise functions identically to the paladin's aura of courage class feature. (This feature replaces aura of courage.)", "level": 3 },
      { "name": "Divine Health (Ex)", "description": "A paladin of slaughter gains immunity to all diseases, including supernatural and magical diseases.", "level": 3 },
      { "name": "Rebuke Undead (Su)", "description": "A paladin of slaughter rebukes undead rather than turning undead: she rebukes or commands undead as a cleric of three levels lower would, a number of times per day equal to 3 + her Charisma modifier.", "level": 4 },
      { "name": "Spells", "description": "Beginning at 4th level, a paladin of slaughter casts divine spells prepared ahead of time from the paladin of slaughter spell list, which replaces the standard paladin spell list entirely; her caster level is one-half her paladin of slaughter level. To prepare or cast a spell she needs a Wisdom score of at least 10 + the spell's level; bonus spells per day come from high Wisdom, and the saving throw DC is 10 + the spell's level + her Wisdom modifier. She prepares her spells by praying and meditating for 1 hour after 8 hours of rest.", "level": 4 },
      { "name": "Special Mount (Sp)", "description": "Once per day as a full-round action, a paladin of slaughter can call a fiendish special mount to her side from the lower planes where it resides - usually a heavy warhorse (or a warpony for a Small paladin of slaughter). The mount is a magical beast with unusual strength and intelligence, which serves her willingly and well for 2 hours per paladin of slaughter level (she can dismiss it at any time). Its abilities improve as she gains levels: in the 5th-7th level band it has an empathic link (out to 1 mile), improved evasion, share spells, and share saving throws; in the 8th-10th band it gains improved speed (+10 feet to its movement modes); in the 11th-14th band it can command creatures of its kind once per day; and in the 15th-20th band it gains spell resistance equal to her level + 5. If the mount dies, she may not summon another one for thirty days (or until she gains a paladin of slaughter level, whichever comes first), and during the thirty days immediately following its death she takes a -1 penalty on attack and damage rolls.", "level": 5 },
      { "name": "Cause Disease (Sp)", "description": "A paladin of slaughter can inflict disease with her touch (as the contagion spell) a number of times per week equal to the number of times a standard paladin of her level would normally be able to remove disease (1/week at 6th, 2/week at 9th, 3/week at 12th, 4/week at 15th, 5/week at 18th). (This feature replaces remove disease.)", "level": 6 }
    ]
  }
];

export const DRAGON_PALADINS_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
