// Dragon Magazine #312 (Oct 2003) prestige classes — integrated in the
// Dragon Magazine treatment program (issue #312 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-312/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's three prestige classes, all from the Assassins article
// (pp. 40–46): Oppressor, Poisoner, Replacement Killer. Each is a
// 10-level prestige class; progression tables give all ten levels.
// Sources: the Dragon #312 magazine text on archive.org
// (DragonMagazine312_djvu.txt), cross-checked against the
// realmshelps.net transcriptions of the three classes, which
// supplied the Hit Die lines the magazine OCR dropped and confirm
// the requirements and class skills (see MANIFEST.md; realmshelps
// mislabels the issue as #313 in its footers — a site error, not
// followed). Records mirror the issue-311 prestige draft shape,
// with a prerequisites array in the catalog's prestige-class
// convention. Features are plain objects ({ name, description,
// level? }) for the integration step. Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.
//
// Two figures rest on weaker evidence and are flagged in
// MANIFEST.md: the Poisoner's skill points per level (the magazine
// OCR of the line is ambiguous between 3 and 4; 4 is used) and the
// Poison Touch Effects table (reconstructed from the partially
// legible magazine table; the save DC column and damage dice should
// be verified against print before integration).

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
    "id": "oppressor",
    "name": "Oppressor",
    "ruleset": "core",
    "source": "Dragon Magazine #312",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "prerequisites": [
      "Alignment: any evil",
      "Base attack bonus +5",
      "Intimidate 8 ranks",
      "Feats: Improved Grapple, Improved Unarmed Strike, Persuasive",
      "Sneak attack +1d6",
      "Special: The candidate must have killed someone in public and be a known killer in at least one region"
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
      "Craft",
      "Gather Information",
      "Intimidate",
      "Jump",
      "Listen",
      "Search",
      "Sense Motive",
      "Spot",
      "Swim",
      "Use Rope"
    ],
    "features": [
      { "name": "Oppressor Basics", "description": "An assassin variant who kills in public and rules the witnesses through fear. Key abilities: Strength and Charisma. Weapon and armor proficiencies: the oppressor gains no new proficiencies with weapons or armor." },
      { "name": "Keep Awake (Ex)", "description": "When the oppressor deals enough damage to drop a foe below 0 hit points, he may instead leave the foe at exactly 0 hit points. When he deals enough nonlethal damage to render a foe unconscious, he may instead leave the foe staggered.", "level": 1 },
      { "name": "Sneak Attack", "description": "As the rogue ability: +1d6 damage at 1st level, increasing to +2d6 at 4th level, +3d6 at 7th level, and +4d6 at 10th level. The bonus stacks with sneak attack damage from other classes.", "level": 1 },
      { "name": "Brutal Grappler (Ex)", "description": "When the oppressor deals unarmed damage in a grapple, he may add his sneak attack damage to it if the foe is vulnerable to sneak attacks. All damage dealt this way is nonlethal.", "level": 2 },
      { "name": "Intimidating Edict (Su)", "description": "Once per day, after the oppressor uses keep awake on a victim in full view of bystanders with Intelligence 3 or higher, he may issue an edict to all witnesses present, as a mass suggestion effect (caster level equals his character level) compelling one course of action. The save DC is 16 + his Charisma modifier, or 18 + his Charisma modifier if the victim was a leader or respected figure among the witnesses. A creature can be subject to only one edict at a time.", "level": 3 },
      { "name": "Greater Intimidation (Ex)", "description": "The oppressor can use Intimidate to change a target's behavior in only 5 rounds instead of the usual time, and he can demoralize an opponent as a move action.", "level": 5 },
      { "name": "Infamy (Ex)", "description": "Where the oppressor's reputation is known, he takes a -2 penalty on Diplomacy and Gather Information checks but gains a +2 bonus on Intimidate checks against those who know his reputation.", "level": 5 },
      { "name": "Bonus Feat", "description": "The oppressor gains a bonus feat chosen from the fighter bonus feat list, for which he meets the prerequisites. He gains another such bonus feat at 9th level.", "level": 6 },
      { "name": "Intimidating Presence (Su)", "description": "Any creature with Intelligence 3 or higher that attempts to harm the oppressor must make a Will save (DC 10 + oppressor level + Charisma modifier) or be shaken for 1 round. A creature that succeeds is immune to that oppressor's intimidating presence for 1 day.", "level": 8 }
    ]
  },
  {
    "id": "poisoner",
    "name": "Poisoner",
    "ruleset": "core",
    "source": "Dragon Magazine #312",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "ref"
    ],
    "prerequisites": [
      "Alignment: any evil",
      "Bluff 5 ranks",
      "Craft (poisonmaking) 8 ranks",
      "Sleight of Hand 8 ranks",
      "Feat: Exotic Weapon Proficiency (blowgun)",
      "Special: The character must have used poison to kill a specific person"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 0 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 0 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 1 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 1 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 1 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 5, "will": 2 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 5, "will": 2 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 6, "will": 2 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 6, "will": 3 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 7, "will": 3 }
    ],
    "classSkills": [
      "Balance",
      "Bluff",
      "Climb",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Gather Information",
      "Hide",
      "Intimidate",
      "Jump",
      "Listen",
      "Move Silently",
      "Open Lock",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot",
      "Swim",
      "Tumble",
      "Use Rope"
    ],
    "features": [
      { "name": "Poisoner Basics", "description": "An assassin variant who has made poison itself her weapon — brewing it, generating it from her own body, and eventually delivering it with a breath or a glance. Key abilities: Dexterity and Constitution. Weapon and armor proficiencies: the poisoner gains no new proficiencies with weapons or armor. Skill points per level rest on a partially legible magazine line (see MANIFEST.md)." },
      { "name": "Detect Poison (Sp)", "description": "The poisoner can use detect poison at will as a spell-like ability.", "level": 1 },
      { "name": "Poison Touch (Ex)", "description": "The poisoner can spontaneously generate a single dose of poison from her body by concentrating for 3 rounds without strenuous activity (she may move and converse, but not fight, cast spells, or use magic items). The dose remains viable for 3 rounds and is delivered by a melee touch attack as a contact poison; a missed attack does not ruin it. Before she begins generating, she chooses the poison's primary and secondary effects from the Poison Touch Effects table, picking any effect available at her level or lower from any column for each; all damage is temporary ability damage unless noted. Table (poisoner level: Strength or Dexterity damage / Constitution damage / Intelligence, Wisdom, or Charisma damage / save DC): 1st–2nd: 1d2 / — / 1 / 15; 3rd–4th: 1d3 / 1 / 1d2 / 16; 5th–6th: 1d4 / 1d2 / 1d3 / 18; 7th–8th: 1d6 / 1d3 / 1d4 / 19; 9th–10th: 2d4 / 1d4 / 1d6 / 20. The table is reconstructed from a partially legible magazine printing — see MANIFEST.md.", "level": 1 },
      { "name": "Poison Use", "description": "The poisoner is trained in the use of poison and never risks accidentally poisoning herself when applying it to a blade.", "level": 1 },
      { "name": "Sneak Attack", "description": "As the rogue ability: +1d6 damage at 1st level, increasing by +1d6 every other level (3rd, 5th, 7th, and 9th) to +5d6. The bonus stacks with sneak attack damage from other classes.", "level": 1 },
      { "name": "Save Bonus against Poison (Ex)", "description": "The poisoner gains a +2 bonus on saving throws against poison, rising to +4 at 4th level, +6 at 6th level, and +8 at 8th level. At 10th level she gains full poison immunity instead (see Poison Immunity).", "level": 2 },
      { "name": "Blowgun Mastery (Ex)", "description": "The poisoner gains a +1 bonus on attack rolls with blowguns, and the blowgun's range increment is doubled for her.", "level": 2 },
      { "name": "Poisoner's Art (Ex)", "description": "The poisoner can modify poisons she creates, choosing the modification when the poison is made. Delay Onset (2nd level): the poison's initial saving throw can be delayed by up to 1 minute per poisoner level; a poison so modified costs 1.5 times as much to create. Fast Acting I (4th level): the poison's secondary damage occurs after 5 rounds instead of 1 minute; cost multiplied by 2. Fast Acting II (8th level): the secondary damage occurs on the following round; cost multiplied by 4.", "level": 2 },
      { "name": "Quick Hands", "description": "The poisoner gains a +4 bonus on Sleight of Hand checks made to plant poison on a target without being noticed.", "level": 3 },
      { "name": "Poisonous Sneak Attack", "description": "Poisons the poisoner delivers with a sneak attack have their save DC increased by +2.", "level": 4 },
      { "name": "Poison Breath (Ex)", "description": "The poisoner can deliver her poison touch to a foe within 5 feet by breathing on it; the poison counts as an inhaled poison for this delivery.", "level": 6 },
      { "name": "Poison Gaze (Su)", "description": "As a standard action, the poisoner can lock eyes with a target within 30 feet and cause the target's own body to generate her poison (chosen from the Poison Touch Effects table as usual); the poison counts as ingested. The target may resist the gaze itself with a Fortitude save (DC 10 + poisoner level + her Constitution modifier); if the gaze takes hold, the poison's normal saving throw still applies to its effects.", "level": 10 },
      { "name": "Poison Immunity (Ex)", "description": "The poisoner becomes immune to all poisons, superseding her save bonus against poison.", "level": 10 }
    ]
  },
  {
    "id": "replacement-killer",
    "name": "Replacement Killer",
    "ruleset": "core",
    "source": "Dragon Magazine #312",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 8,
    "babProgression": "three-quarter",
    "goodSaves": [
      "ref"
    ],
    "prerequisites": [
      "Alignment: any evil",
      "Bluff 8 ranks",
      "Diplomacy 5 ranks",
      "Disguise 8 ranks",
      "Knowledge (nobility and royalty) 3 ranks",
      "Sense Motive 5 ranks",
      "Feats: Deceitful, Skill Focus (Disguise)"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 0 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 0 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 1 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 1 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 1 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 5, "will": 2 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 5, "will": 2 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 6, "will": 2 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 6, "will": 3 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 7, "will": 3 }
    ],
    "classSkills": [
      "Balance",
      "Bluff",
      "Climb",
      "Craft",
      "Diplomacy",
      "Disable Device",
      "Disguise",
      "Escape Artist",
      "Forgery",
      "Gather Information",
      "Hide",
      "Intimidate",
      "Jump",
      "Knowledge (local)",
      "Knowledge (nobility and royalty)",
      "Listen",
      "Move Silently",
      "Open Lock",
      "Profession",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot",
      "Swim",
      "Tumble",
      "Use Rope"
    ],
    "features": [
      { "name": "Replacement Killer Basics", "description": "An assassin variant who murders his target and then takes the victim's place, wreaking havoc with the dead man's authority before the truth comes out. By Will Upchurch. Key abilities: Intelligence and Charisma. Weapon and armor proficiencies: the replacement killer gains no new proficiencies with weapons or armor." },
      { "name": "Death Attack", "description": "As the assassin ability: after studying a victim for 3 rounds, the replacement killer may make a sneak attack that kills the victim outright or paralyzes it for 1d6 rounds + 1 round per replacement killer level, at his choice. The victim may resist with a Fortitude save (DC 10 + replacement killer level + his Intelligence modifier).", "level": 1 },
      { "name": "Poison Use", "description": "The replacement killer is trained in the use of poison and never risks accidentally poisoning himself when applying it to a blade.", "level": 1 },
      { "name": "Sneak Attack", "description": "As the rogue ability: +1d6 damage at 1st level, increasing by +1d6 every other level (3rd, 5th, 7th, and 9th) to +5d6. The bonus stacks with sneak attack damage from other classes.", "level": 1 },
      { "name": "Greater Paralyzing Attack (Ex)", "description": "The DC of the replacement killer's death attack increases by +1 when he chooses the paralysis option. This bonus rises to +2 at 4th level, +3 at 6th level, +4 at 8th level, and +5 at 10th level.", "level": 2 },
      { "name": "Uncanny Dodge (Ex)", "description": "As the rogue ability: the replacement killer retains his Dexterity bonus to AC (if any) even when flat-footed or struck by an invisible attacker.", "level": 2 },
      { "name": "Disguise Self (Sp)", "description": "The replacement killer can cast disguise self three times per day, with a caster level equal to his character level.", "level": 3 },
      { "name": "Inconspicuous Disguise (Ex)", "description": "Suspicious observers do not get automatic Spot checks to notice any disguise the replacement killer wears; he is too practiced at adopting a persona to arouse suspicion in any but the most interested parties.", "level": 4 },
      { "name": "Improved Uncanny Dodge (Ex)", "description": "As the rogue ability: the replacement killer can no longer be flanked except by a rogue (or similar character) of at least four levels higher than his replacement killer level.", "level": 5 },
      { "name": "Undetectable Alignment (Su)", "description": "The replacement killer can make his alignment undetectable at will, as the undetectable alignment spell, toggling the effect as a free action.", "level": 6 },
      { "name": "Greater Invisibility (Sp)", "description": "The replacement killer can cast greater invisibility once per day.", "level": 7 },
      { "name": "Improved Inconspicuous Disguise (Ex)", "description": "Contact with people who know the individual the replacement killer is impersonating does not automatically provoke an opposed check, and such viewers take a -4 penalty on their Spot checks against his disguise.", "level": 8 },
      { "name": "Modify Memory (Sp)", "description": "The replacement killer can cast modify memory twice per day.", "level": 9 }
    ]
  }
];

export const DRAGON_312_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
