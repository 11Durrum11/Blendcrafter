// Dragon Magazine #315 (Jan 2004) prestige classes — integrated in the
// Dragon Magazine treatment program (issue #315 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-315/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's ten prestige classes:
//   * Silverhair Knight, from the Forgotten Realms article (by James
//     Jacobs, pp. 28–31) — ruleset "faerun".
//   * Companion of the Dead and Shark Cultist, from the Taladas
//     article (by James Jacobs, pp. 38–41). Taladas is a Dragonlance
//     continent, but neither class carries Dragonlance-specific
//     mechanics (no kender, no Solamnic knights, no Krynn deities);
//     they stage as generic mechanics under the Dragonlance rule's
//     generic-mechanics clause — see MANIFEST.md for the judgment
//     call, flagged prominently.
//   * Harmonium Peacekeeper and Anarchomancer, from the Planescape
//     article "Exiled Factions" (by David Noonan, pp. 44–49).
//   * Omatu Master, from the Blackmoor article (by Ari Marmell,
//     pp. 84–87).
//   * Eagle Knight and Jaguar Knight, from the Maztica article (by
//     David Schwartz, pp. 94–99).
//   * Luminaire, from the Masque of the Red Death article (by James
//     Wyatt, pp. 100–101).
//   * Boge of Nomog-Geaya, from the Sundered Empire article
//     (pp. 102–105).
// Sources: the Dragon #315 magazine text on archive.org
// (DragonMagazine315_djvu.txt), cross-checked against the dndtools
// and realmshelps.net transcriptions of these classes; every place a
// transcription corrected or resolved the magazine OCR is flagged in
// MANIFEST.md. Records mirror the issue-313 prestige draft shape:
// plain objects with a prerequisites array, features led by a
// "Basics" feature. Feature descriptions are faithful mechanical
// paraphrases in our own words; no magazine prose is reproduced.

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
    "id": "silverhair-knight",
    "name": "Silverhair Knight",
    "ruleset": "faerun",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort",
      "will"
    ],
    "prerequisites": [
      "Base attack bonus +6",
      "Alignment: Chaotic good",
      "Skills: Bluff 8 ranks, Diplomacy 8 ranks, Knowledge (religion) 8 ranks, Sense Motive 8 ranks",
      "Feats: Combat Expertise, Skill Focus (Diplomacy), Weapon Focus (any sword)",
      "Spells: Ability to cast 2nd-level divine spells",
      "Patron: Eilistraee",
      "Special: Must never have slain or caused the death of a drow (a knight who has must receive an atonement from a cleric of Eilistraee and complete a quest on the church's behalf before qualifying)"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 4 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Diplomacy",
      "Disguise",
      "Gather Information",
      "Heal",
      "Hide",
      "Intimidate",
      "Knowledge (history)",
      "Knowledge (local)",
      "Knowledge (religion)",
      "Listen",
      "Move Silently",
      "Perform",
      "Sense Motive",
      "Spot"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d6. Skill points 2 + Int modifier per level. A silverhair knight gains no new weapon or armor proficiencies. Silverhair knights are agents of Eilistraee dedicated to redeeming drow rather than killing them; the class's abilities revolve around subduing, sparing, and converting drow (see SCREENING.md for the APOC flag on this premise)."
      },
      {
        "name": "Spellcasting",
        "description": "At 1st, 3rd, and 5th level, a silverhair knight gains new spells per day and spells known as if she had also gained a level in a divine spellcasting class she belonged to before taking this class (no other benefits of that class).",
        "level": 1
      },
      {
        "name": "Awaken Sins (Su)",
        "description": "A silverhair knight can cast awaken sin once per day, twice per day at 3rd level, and three times per day at 5th level. Drow suffer a −2 penalty on saving throws against this effect.",
        "level": 1
      },
      {
        "name": "Merciful Edge (Ex)",
        "description": "When wielding a sword for which she has the Weapon Focus feat, a silverhair knight takes no −4 penalty on attack rolls for dealing nonlethal damage.",
        "level": 1
      },
      {
        "name": "Blade of Compassion (Ex)",
        "description": "When a silverhair knight strikes to subdue with a sword for which she has the Weapon Focus feat, she deals an extra 1d6 points of nonlethal damage (2d6 at 4th level). This damage stacks with nonlethal sneak attack damage. She cannot use this ability while wielding an off-hand weapon or a shield. Sneak attack restrictions apply (the target must be denied its Dexterity bonus or flanked, and creatures immune to sneak attacks, lacking a discernible anatomy, or unable to take nonlethal damage are unaffected).",
        "level": 2
      },
      {
        "name": "Voice of Serenity (Su)",
        "description": "A silverhair knight gains a +2 sacred bonus on Bluff and Diplomacy checks, and a +1 sacred bonus to the save DCs of enchantment spells she casts that have verbal components.",
        "level": 3
      },
      {
        "name": "Consume Sins (Su)",
        "description": "Once per week, a silverhair knight can attempt to consume a target's sins in a ritual requiring unbroken physical contact for a number of minutes equal to the target's Hit Dice; the target must be conscious but need not be willing (once per minute the knight can make a Bluff check opposed by the target's Sense Motive to disguise what she is doing). The target takes 10d6 points of nonlethal damage and must make a Will save (DC 10 + silverhair knight level + her Charisma modifier; drow take a −2 penalty) or have its alignment shifted to neutral. If the target succeeds, the knight gains negative levels equal to half the target's Hit Dice + the target's Charisma modifier; if this reduces her to 0 or fewer levels she dies and rises within 24 hours as a ghost of the target's alignment, and otherwise she falls into a coma for 24 hours, after which the negative levels are treated as normal for purposes of Fortitude saves to remove them. Removing those negative levels with restoration frees the consumed sins instead: the target gains a profane bonus equal to the number of negated levels on skill checks, attack rolls, and Will saves for 24 hours. If the target's alignment shifts, the knight gains a +4 sacred bonus to Charisma and a sacred bonus to her caster level for [Good] spells, lasting a number of hours equal to half the target's Hit Dice + the target's Charisma modifier. Consume sins is a mind-affecting and fear effect. A given target can be subjected to it only once per year.",
        "level": 5
      },
      {
        "name": "Ex-Silverhair Knights",
        "description": "A silverhair knight who willingly causes the death of a drow must receive an atonement from a cleric of Eilistraee within 24 hours or lose all silverhair knight class abilities until she does so and completes a quest on the church's behalf."
      }
    ]
  },
  {
    "id": "companion-of-the-dead",
    "name": "Companion of the Dead",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d12",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort",
      "will"
    ],
    "prerequisites": [
      "Race: Gnome",
      "Skills: Intimidate 10 ranks, Knowledge (history) 5 ranks",
      "Feats: Armor Proficiency (heavy), Diehard, Endurance, Power Attack, Toughness, Weapon Focus (any melee weapon)",
      "Special: Must sever all ties with family and friends and forsake all personal wealth and possessions, except armor, melee weapons, and magic items that augment melee combat"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Climb",
      "Concentration",
      "Intimidate",
      "Jump",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Survival"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d12. Skill points 2 + Int modifier per level. A companion of the dead is proficient with all simple and martial melee weapons. He forsakes ranged combat: making any ranged attack (including thrown weapons and spells with a ranged touch attack) imposes a −4 penalty on his attack rolls, skill checks, and Will saves for 24 hours. Companions are gnome warriors of Taladas who embrace death; see MANIFEST.md for the Taladas staging judgment call."
      },
      {
        "name": "Death's Vow",
        "description": "On taking his first level, a companion of the dead swears a vow to embrace death and sever himself from the living. Breaking the vow (including by making a ranged attack; see Basics) imposes a −4 penalty on his attack rolls, skill checks, and Will saves for 24 hours.",
        "level": 1
      },
      {
        "name": "No Fear (Ex)",
        "description": "A companion of the dead is immune to fear effects.",
        "level": 1
      },
      {
        "name": "Death's Visage (Ex)",
        "description": "While wearing skull face paint, a companion of the dead gains a competence bonus equal to his class level on Intimidate checks.",
        "level": 2
      },
      {
        "name": "Deathrage (Su)",
        "description": "Once per day (twice per day at 6th level, three times per day at 9th), as a free action in a round in which he slays an enemy with a melee attack, a companion of the dead can enter a deathrage: he gains a +2 bonus to Strength, a +2 bonus to Dexterity, and 1d6 temporary hit points per class level. The deathrage lasts 1 minute; temporary hit points gained from it are lost first when he takes damage.",
        "level": 3
      },
      {
        "name": "No Sleep (Ex)",
        "description": "A companion of the dead needs no sleep and is immune to magical sleep effects. To prepare spells he needs only 1 hour of meditation, study, or prayer (he can still prepare spells only once per day).",
        "level": 4
      },
      {
        "name": "Dead Mind (Ex)",
        "description": "A companion of the dead is immune to all mind-affecting effects, including beneficial morale effects.",
        "level": 5
      },
      {
        "name": "No Pain (Ex)",
        "description": "A companion of the dead is immune to pain-based effects, fatigue, exhaustion, and stunning.",
        "level": 7
      },
      {
        "name": "Death Ward (Su)",
        "description": "A companion of the dead is immune to death effects, energy drain, and negative energy effects, as the death ward spell.",
        "level": 8
      },
      {
        "name": "Dead Body (Su)",
        "description": "A companion of the dead takes no extra damage from sneak attacks or critical hits, and is immune to poison and disease. He can still be harmed by nonlethal damage and ability damage.",
        "level": 10
      }
    ]
  },
  {
    "id": "shark-cultist",
    "name": "Shark Cultist",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": [
      "will"
    ],
    "prerequisites": [
      "Alignment: Chaotic evil, chaotic neutral, or neutral evil",
      "Skills: Craft (leatherworking) 1 rank, Knowledge (nature) 5 ranks, Swim 8 ranks",
      "Feats: Exotic Weapon Proficiency (sharktooth gauntlet), Skill Focus (Swim)",
      "Special: Must slay a shark of at least Large size in single combat and create a war-helmet and sharktooth gauntlets from its body"
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
      "Disguise",
      "Gather Information",
      "Handle Animal",
      "Hide",
      "Intimidate",
      "Knowledge (nature)",
      "Knowledge (religion)",
      "Move Silently",
      "Profession",
      "Swim"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Skill points 4 + Int modifier per level. A shark cultist gains no new weapon proficiencies; she is proficient with light armor. Shark cultists are Taladas devotees of the shark; see MANIFEST.md for the Taladas staging judgment call."
      },
      {
        "name": "Hold Breath (Ex)",
        "description": "A shark cultist can hold her breath for a number of rounds equal to 4 × her Constitution score.",
        "level": 1
      },
      {
        "name": "Divine Spellcasting",
        "description": "At 2nd, 4th, 6th, 8th, and 10th level, a shark cultist gains new spells per day and spells known as if she had also gained a level in a divine spellcasting class she belonged to before taking this class (arcane spellcasting classes do not benefit; no other benefits of that class are gained).",
        "level": 2
      },
      {
        "name": "Weapon Focus",
        "description": "A shark cultist gains Weapon Focus (sharktooth gauntlet) and Weapon Focus (bite) as bonus feats. The bite feat applies only when she has a natural bite attack.",
        "level": 2
      },
      {
        "name": "Sharkshape (Su)",
        "description": "Once per day, a shark cultist can transform into a Medium or Large shark, functioning as a druid of the cultist's character level using wild shape. At 6th level she can use this ability twice per day and assume forms up to Huge size; at 9th level she can use it three times per day and can assume the form of a dire shark.",
        "level": 3
      },
      {
        "name": "Bloodscent (Ex)",
        "description": "A shark cultist gains the scent special quality against wounded living creatures (those that bleed or lose a similar vital fluid), in and out of water, and a +4 competence bonus on Survival checks to track wounded creatures.",
        "level": 4
      },
      {
        "name": "Weapon Specialization",
        "description": "A shark cultist gains Weapon Specialization (sharktooth gauntlet) and Weapon Specialization (bite) as bonus feats, even if she would not normally qualify for them.",
        "level": 5
      },
      {
        "name": "Take to the Water (Ex)",
        "description": "A shark cultist gains a swim speed equal to her land speed, a +8 racial bonus on Swim checks, the ability to always take 10 on Swim checks, and the ability to run while swimming in a straight line.",
        "level": 7
      },
      {
        "name": "Improved Critical",
        "description": "A shark cultist gains Improved Critical (sharktooth gauntlet) and Improved Critical (bite) as bonus feats, even if she would not normally qualify for them.",
        "level": 8
      },
      {
        "name": "Blood Frenzy (Su)",
        "description": "After wounding a creature with her sharktooth gauntlets or a bite attack, a shark cultist can enter a blood frenzy as a free action, functioning as the haste spell for 3 rounds. She can use this ability a number of times per day equal to her Constitution bonus (minimum 1).",
        "level": 10
      }
    ]
  },
  {
    "id": "harmonium-peacekeeper",
    "name": "Harmonium Peacekeeper",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort",
      "will"
    ],
    "prerequisites": [
      "Base attack bonus +6",
      "Alignment: Any lawful",
      "Skills: Knowledge (religion) 5 ranks, Ride 5 ranks",
      "Feats: Mounted Combat"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 4 }
    ],
    "classSkills": [
      "Craft",
      "Handle Animal",
      "Heal",
      "Intimidate",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Profession",
      "Ride",
      "Sense Motive"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d10. Skill points 2 + Int modifier per level. A Harmonium peacekeeper is proficient with all martial weapons, all armor, and shields (including tower shields). Peacekeepers are mounted enforcers of the Harmonium faction; the class's mount and planar- travel abilities are flagged in SCREENING.md (planar travel is severed in APOC)."
      },
      {
        "name": "Special Mount",
        "description": "A Harmonium peacekeeper gains a special mount equivalent to a 5th-level paladin's special mount; peacekeeper levels stack with paladin levels for this purpose. When not in use, the mount grazes near the Harmonium's castle on Arcadia.",
        "level": 1
      },
      {
        "name": "Smite Chaos (Su)",
        "description": "Once per day (twice per day at 4th level), a Harmonium peacekeeper may attempt to smite chaos with one normal melee attack: he adds his Charisma bonus to the attack roll and deals 2 extra points of damage per peacekeeper level against a chaotic creature. If the target is not chaotic, the smite has no effect and the use is wasted. Smite chaos and smite evil can be used on the same attack and their bonuses stack.",
        "level": 2
      },
      {
        "name": "Calm Emotions (Sp)",
        "description": "Once per day, a Harmonium peacekeeper can use calm emotions as a spell-like ability, at a caster level equal to his character level. The save DC is Charisma-based.",
        "level": 2
      },
      {
        "name": "Planar Steed (Su)",
        "description": "When dismissing his special mount, a Harmonium peacekeeper may return to Arcadia with it, along with one willing creature per class level. Once per day while on Arcadia, he can plane shift himself, his mount, and one willing creature per class level to the first layer of any nonevil plane.",
        "level": 3
      },
      {
        "name": "Universal Harmony (Sp)",
        "description": "Once per day, a Harmonium peacekeeper can use geas/quest as a spell-like ability on a living creature; the command cannot involve violent, chaotic, or evil acts. The Fortitude save to avoid the sickened condition is Charisma-based.",
        "level": 5
      }
    ]
  },
  {
    "id": "anarchomancer",
    "name": "Anarchomancer",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d4",
    "skillPointsPerLevel": 4,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "prerequisites": [
      "Alignment: Any chaotic",
      "Skills: Disguise 6 ranks, Bluff 6 ranks",
      "Feats: Greater Spell Focus (illusion) or Greater Spell Focus (enchantment)",
      "Spells: Ability to cast at least one arcane illusion spell from 1st to 5th level, and ability to cast polymorph"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 1, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 4, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 4, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 5, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Disguise",
      "Escape Artist",
      "Gather Information",
      "Hide",
      "Knowledge (all skills, taken individually)",
      "Move Silently",
      "Profession",
      "Sense Motive",
      "Sleight of Hand",
      "Speak Language",
      "Spellcraft",
      "Use Magic Device"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d4. Skill points 4 + Int modifier per level. An anarchomancer gains no proficiency with any weapon or armor. At every level except 1st, 5th, and 9th, she gains new spells per day and spells known as if she had also gained a level in an arcane spellcasting class she belonged to before taking this class (no other benefits of that class). Anarchomancers are Revolutionary League infiltrators; their planar-organization context is in reference.md and SCREENING.md."
      },
      {
        "name": "Ritual of the Dark Infiltrator (Su)",
        "description": "By undertaking a daylong ritual (costing 1,000 gp and 1,000 XP, during which the anarchomancer must remain undisturbed for 24 hours), the anarchomancer transforms into a completely different character — different race, class, and abilities — constructed as a cohort appropriate to her base Leadership score (no reputation, familiar, or other Leadership modifiers apply). The second character retains the anarchomancer's memories, motivations, and goals but can use only its own spells and abilities; nothing short of a wish or miracle reveals the character's former life. The anarchomancer gains levels according to her anarchomancer character level even if the second character is of lower level. As a full-round action, she can return to her original form, shedding the assumed body in a burst of eldritch power.",
        "level": 1
      },
      {
        "name": "Ritual of the Stilled Tongue (Su)",
        "description": "By casting a spell and then touching a helpless foe, the anarchomancer compels silence about a specified topic (a sentence or two, chosen when the touch is made). If the subject breaks the stricture, the spell she cast takes effect as if triggered by a contingency spell — the ritual works with any spell. The ritual cannot be dispelled; break enchantment, limited wish, or remove curse removes it but triggers the spell, while miracle or wish removes both the stricture and the spell.",
        "level": 5
      },
      {
        "name": "Ritual of the Mob Unleashed (Su)",
        "description": "By undertaking an hour-long ritual, the anarchomancer creates 2d12 confusion effects (15-foot bursts) at random locations within 1 mile; none land in areas devoid of creatures or within 500 feet of the anarchomancer. The effects last as long as the ritual continues. She can repeat the ritual as often as she likes, adding 2d12 more effects for each additional hour while maintaining the earlier ones.",
        "level": 9
      }
    ]
  }
,
  {
    "id": "omatu-master",
    "name": "Omatu Master",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "prerequisites": [
      "Race: Halfling",
      "Base attack bonus +4",
      "Skills: Perform (dance) 2 ranks",
      "Feats: Improved Trip, Improved Unarmed Strike, Skill Focus (Tumble), Stunning Fist",
      "Special: Must have fought at least one battle against a Medium or larger opponent using only unarmed strikes, and must take a solemn oath to protect the Docrae community, even unto death"
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
      "Escape Artist",
      "Hide",
      "Jump",
      "Knowledge (history)",
      "Knowledge (local)",
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
      {
        "name": "Basics",
        "description": "Hit Die d8. Skill points 4 + Int modifier per level. An omatu master is proficient with the club, dagger, dart, handaxe, javelin, kama, light flail, light hammer, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. She is not proficient with any armor or shields. Omatu is the martial art of the Docrae halflings of Blackmoor's Northern Marches; the Docrae lore is in reference.md."
      },
      {
        "name": "Assisted Trip (Ex)",
        "description": "When making a trip attack against an opponent of her size up to two sizes larger, an omatu master may use her Dexterity or Strength modifier (whichever is better) and gains a +4 competence bonus on the trip check.",
        "level": 1
      },
      {
        "name": "Mobility (Ex)",
        "description": "An omatu master gains Mobility as a bonus feat without needing to meet its prerequisites. If she already has the feat, or gains it later, its dodge bonus against attacks of opportunity rises to +6.",
        "level": 1
      },
      {
        "name": "Monk Abilities",
        "description": "An omatu master's flurry of blows, unarmed damage, AC bonus, and unarmored speed bonus are those of a monk of her omatu master level; these stack with monk levels for the same abilities.",
        "level": 1
      },
      {
        "name": "Ki Strike (Su)",
        "description": "An omatu master's unarmed attacks are treated as magic weapons for the purpose of overcoming damage reduction. At 3rd level they are also treated as silver, and at 7th level also as cold iron.",
        "level": 1
      },
      {
        "name": "Master of Chains (Ex)",
        "description": "An omatu master gains Exotic Weapon Proficiency (spiked chain) as a bonus feat. If she is already proficient with the spiked chain, she instead gains a +1 bonus on attack and damage rolls with all chains.",
        "level": 2
      },
      {
        "name": "Shoulder Throw (Ex)",
        "description": "With a readied unarmed strike against a charging opponent, or an attack of opportunity against a bull rushing opponent, an omatu master can make a melee touch attack followed by an opposed Tumble check using inverted size modifiers (Colossal −16, Gargantuan −12, Huge −8, Large −4, Medium +0, Small +4, Tiny +8, Diminutive +12, Fine +16; a quadruped defender adds +4). She cannot throw a creature more than two sizes larger than herself. On success, the foe takes her unarmed strike damage and lands prone in the square behind her along the line of its charge or bull rush (in front of her if that space is unavailable). If either roll fails, the foe completes its attack normally.",
        "level": 3
      },
      {
        "name": "Leverage Expert (Ex)",
        "description": "An omatu master gains a +4 bonus on disarm checks, grapple checks, and Escape Artist checks made to escape a grapple.",
        "level": 4
      },
      {
        "name": "Evasion (Ex)",
        "description": "An omatu master gains evasion; if she already has evasion from another class, she gains improved evasion instead. She gains no further benefit if she already has improved evasion.",
        "level": 5
      },
      {
        "name": "Acrobatic Strike (Ex)",
        "description": "As a standard action, an omatu master can feint in combat by substituting a Tumble check for the Bluff check. If the feint succeeds and her next attack is a stunning attack, the opponent takes a −4 penalty on its Fortitude save against the stun.",
        "level": 6
      },
      {
        "name": "Determined Defense (Ex)",
        "description": "Twice per day, an omatu master gains a +2 bonus to Strength, Dexterity, and Constitution and the benefit of the Diehard feat (no additional benefit if she already has it). The effect lasts a number of rounds equal to her Wisdom bonus (minimum 1); hit points gained from the increased Constitution disappear when the effect ends.",
        "level": 8
      },
      {
        "name": "Acrobatic Dodge (Ex)",
        "description": "Once per round, when an omatu master is successfully struck by an opponent at least one size larger than herself, she can make a Tumble check (DC equal to the opponent's attack roll) to avoid the attack; she must declare this after the hit but before damage or touch effects are determined. If she attacks that round or the next, she takes a −6 penalty on her attack rolls. She cannot use this ability when denied her Dexterity bonus to Armor Class or against a natural 20.",
        "level": 9
      },
      {
        "name": "Nerve Strike (Ex)",
        "description": "Once per day, an omatu master can declare a nerve strike before making an attack roll; she must be able to see and reach a vital spot, and creatures immune to critical hits are immune. If the attack deals damage, the subject must make a Fortitude save (DC 10 + omatu master level + her Wisdom modifier) or die; a successful save means the attack deals normal damage. A miss wastes the use.",
        "level": 10
      }
    ]
  },
  {
    "id": "eagle-knight",
    "name": "Eagle Knight",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d10",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "prerequisites": [
      "Alignment: Any nonevil",
      "Base attack bonus +5",
      "Skills: Perform (dance) 1 rank, Spot 1 rank, Survival 2 ranks",
      "Feats: Proficiency with composite shortbow, maca (longsword), shortbow, and shortspear",
      "Special: Must apprentice at a lodge and prove himself in battle"
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
      "Concentration",
      "Craft",
      "Handle Animal",
      "Intimidate",
      "Jump",
      "Knowledge (arcana)",
      "Perform",
      "Sense Motive",
      "Spellcraft",
      "Spot",
      "Survival",
      "Swim",
      "Use Rope"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d10. Skill points 4 + Int modifier per level. An eagle knight is proficient with all simple and martial weapons, light armor, hide armor, and all shields, and has the right to buy and wear eagle knight armor (see reference.md for Maztican armor rules). Eagle knights serve the temple of Qotal in Maztica."
      },
      {
        "name": "Pluma Spells (Sp)",
        "description": "At each eagle knight level, the character chooses one pluma spell, which he can use once per day as a spell-like ability; choosing the same spell again grants one additional use per day. His choices are limited by level: spells of 1st level or lower at levels 1–3, 2nd level or lower at levels 4–7, and 3rd level or lower at levels 8–10 (so a 8th-level knight has eight pluma spell-like abilities per day: one up to 3rd level, four up to 2nd, three of 1st). His caster level is equal to his eagle knight level, and save DCs are Wisdom-based. Pluma spell list — 1st: alarm, calm animals, delay poison, detect animals or plants, detect snares and pits, endure elements, expeditious retreat, faerie fire, feather fall, hypnotism, identify, mage armor, magic stone, magic weapon, message, obscuring mist, pass without trace, protection from evil, sanctuary, sleep, summon nature's ally I, true strike. 2nd: animal messenger, animal trance, blur, calm emotions, cat's grace, charm animal, charm person, daylight, gust of wind, hold animal, levitate, mirror image, obscure object, protection from arrows, resist energy, silence, speak with animals, spiritual weapon, summon nature's ally II, whispering wind. 3rd: clairaudience/clairvoyance, confusion, dispel magic, fly, gaseous form, greater magic weapon, haste, helping hand, keen edge, Leomund's tiny hut, magic vestment, protection from energy, scrying, slow, snare, speak with plants, summon nature's ally III, water walk.",
        "level": 1
      },
      {
        "name": "Eagle Form (Su)",
        "description": "While wearing eagle knight armor, an eagle knight can assume the form of an eagle, as the polymorph spell, once per day (twice per day at 3rd level, and one additional time per day every two levels thereafter: 5th, 7th, 9th). At 5th level he may instead choose the form of a giant eagle.",
        "level": 1
      },
      {
        "name": "Fast Movement (Ex)",
        "description": "An eagle knight's land speed is faster than normal by +10 feet when wearing no armor, light armor, or medium armor and carrying no more than a medium load. This stacks with fast movement from other classes.",
        "level": 2
      },
      {
        "name": "Eagle Eyes (Ex)",
        "description": "An eagle knight gains a +8 bonus on Spot checks.",
        "level": 4
      },
      {
        "name": "Spell Resistance",
        "description": "An eagle knight gains spell resistance equal to 10 + his Charisma modifier (15 + his Charisma modifier at 10th level). This does not stack with spell resistance from other sources; use the higher value.",
        "level": 6
      },
      {
        "name": "Swoop (Ex)",
        "description": "An eagle knight gains Spring Attack and Flyby Attack as bonus feats without needing to meet their prerequisites.",
        "level": 8
      }
    ]
  },
  {
    "id": "jaguar-knight",
    "name": "Jaguar Knight",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d10",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "prerequisites": [
      "Alignment: Any nongood",
      "Base attack bonus +5",
      "Skills: Perform (dance) 1 rank, Survival 3 ranks",
      "Feats: Proficiency with composite shortbow, maca (longsword), shortbow, and shortspear",
      "Special: Must apprentice at a lodge and prove herself in battle"
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
      "Concentration",
      "Craft",
      "Handle Animal",
      "Hide",
      "Intimidate",
      "Jump",
      "Knowledge (arcana)",
      "Move Silently",
      "Perform",
      "Spellcraft",
      "Survival",
      "Swim",
      "Use Rope"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d10. Skill points 4 + Int modifier per level. A jaguar knight is proficient with all simple and martial weapons, light armor, hide armor, and all shields, and has the right to buy and wear jaguar knight armor (see reference.md for Maztican armor rules). Jaguar knights serve the temple of Zaltec in Maztica."
      },
      {
        "name": "Hishna Spells (Sp)",
        "description": "At each jaguar knight level, the character chooses one hishna spell, which she can use once per day as a spell-like ability; choosing the same spell again grants one additional use per day. Her choices are limited by level: spells of 1st level or lower at levels 1–3, 2nd level or lower at levels 4–7, and 3rd level or lower at levels 8–10. Her caster level is equal to her jaguar knight level (the magazine text reads \"eagle knight class level\" here — a printing error; see MANIFEST.md), and save DCs are Wisdom-based. Hishna spell list — 1st: alarm, animate rope, calm animals, cause fear, deathwatch, detect animals or plants, detect snares and pits, disguise self, hypnotism, identify, magic fang, magic weapon, message, pass without trace, protection from good, silent image, spider climb, summon nature's ally I, true strike. 2nd: alter self, animal messenger, animal trance, barkskin, cat's grace, charm animal, charm person, bull's strength, darkness, hold animal, invisibility, minor image, mirror image, misdirection, scare, silence, speak with animals, spiritual weapon, summon nature's ally II, summon swarm, web. 3rd: bestow curse, charm monster, deeper darkness, dominate animal, displacement, fear, greater magic fang, greater magic weapon, haste, invisibility sphere, Leomund's tiny hut, magic vestment, major image, poison, scrying, sculpt sound, slow, snare, speak with plants, summon nature's ally III.",
        "level": 1
      },
      {
        "name": "Jaguar Form (Su)",
        "description": "While wearing jaguar knight armor, a jaguar knight can assume the form of a jaguar (use leopard statistics), as the polymorph spell, once per day (twice per day at 3rd level, and one additional time per day every two levels thereafter: 5th, 7th, 9th). At 5th level she may instead choose the form of a dire jaguar (use tiger statistics).",
        "level": 1
      },
      {
        "name": "Poison Use (Ex)",
        "description": "A jaguar knight is trained in the use of poison and never risks accidentally poisoning herself when applying poison to a blade.",
        "level": 2
      },
      {
        "name": "Cat Eyes (Ex)",
        "description": "A jaguar knight gains darkvision to a range of 60 feet and low-light vision.",
        "level": 4
      },
      {
        "name": "Spell Resistance",
        "description": "A jaguar knight gains spell resistance equal to 10 + her Charisma modifier (15 + her Charisma modifier at 10th level). This does not stack with spell resistance from other sources; use the higher value.",
        "level": 6
      },
      {
        "name": "Pounce (Ex)",
        "description": "A jaguar knight can make a full attack after a charge, even though she has moved.",
        "level": 8
      }
    ]
  },
  {
    "id": "luminaire",
    "name": "Luminaire",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "prerequisites": [
      "Alignment: Chaotic good",
      "Base attack bonus +3",
      "Skills: Diplomacy 4 ranks, Knowledge (any one) 7 ranks",
      "Feats: Combat Expertise",
      "Special: Must be a member of La Lumière"
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
      "Bluff",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Disguise",
      "Gather Information",
      "Hide",
      "Knowledge (all skills, taken individually)",
      "Listen",
      "Move Silently",
      "Profession",
      "Sense Motive",
      "Speak Language",
      "Spellcraft",
      "Spot",
      "Survival",
      "Use Magic Device"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Skill points 6 + Int modifier per level. A luminaire gains no proficiency with any weapons, armor, or shields. Luminaires are elite members of La Lumière, a qabal of the Masque of the Red Death setting (Gothic Earth); the qabal lore is in reference.md."
      },
      {
        "name": "Resist Influence (Ex)",
        "description": "A luminaire gains a +2 bonus on saving throws against charm, compulsion, and fear effects.",
        "level": 1
      },
      {
        "name": "Light of Reason (Ex)",
        "description": "Once per day (twice per day at 5th level, three times per day at 8th), for a number of rounds equal to her Charisma bonus (minimum 1), a luminaire adds her Intelligence bonus to attack rolls against evil supernatural creatures (including any evil creature with a spell-like or supernatural ability or the ability to cast spells). A successful hit deals additional damage: +1d6 at 2nd level, +2d6 at 5th, +3d6 at 8th.",
        "level": 2
      },
      {
        "name": "Inspire Bravery (Su)",
        "description": "Once per day (twice per day at 6th level, three times per day at 9th), a luminaire can inspire bravery in allies (including herself) who can hear her speak: a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls (bonuses rise to +2 at 6th level and +3 at 9th). The effect lasts while the ally hears her speak and for 5 rounds thereafter. Starting the effect is a standard action; continuing to speak is a free action each round, but while speaking she cannot cast spells or activate spell-completion or magic-word items. A deaf luminaire has a 20% chance to fail when attempting to use this ability (the attempt still counts). It is a language-dependent, mind-affecting ability.",
        "level": 3
      },
      {
        "name": "Favored Enemy (Ex)",
        "description": "At 4th level, a luminaire selects a favored enemy from: Aberration, Construct, Magical Beast, Monstrous Humanoid, Outsider (evil), Undead. She gains another favored enemy from the same list at 7th and 10th level. The ability otherwise functions exactly like the ranger's favored enemy, and stacks with favored enemies gained from other sources.",
        "level": 4
      },
      {
        "name": "Air of Enlightenment (Su)",
        "description": "If a luminaire makes a successful saving throw against a fear, charm, or compulsion effect, in the following round she can, as a standard action, grant a new saving throw with a +2 bonus to any allies within 30 feet who failed against the same effect and can hear and understand her. She can use this ability only once for each effect — the same ally cannot be granted more than one new save against the same effect.",
        "level": 10
      }
    ]
  },
  {
    "id": "boge-of-nomog-geaya",
    "name": "Boge of Nomog-Geaya",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "prerequisites": [
      "Race: Hobgoblin",
      "Feats: Leadership, Weapon Focus (longsword)",
      "Spells: Ability to cast 3rd-level divine spells"
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
      "Bluff",
      "Concentration",
      "Diplomacy",
      "Heal",
      "Intimidate",
      "Knowledge (arcana)",
      "Knowledge (the planes)",
      "Knowledge (religion)",
      "Perform",
      "Sense Motive",
      "Spellcraft"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Skill points 2 + Int modifier per level. A boge of Nomog-Geaya is proficient with all simple and martial weapons and with light, medium, and heavy armor (the article does not mention shields). At every level, he gains new spells per day and spells known as if he had also gained a level in a spellcasting class he belonged to before taking this class (no other benefits of that class). Boges are hobgoblin priest-generals of Nomog-Geaya in the Sundered Empire (Chainmail) setting; the setting lore is in reference.md."
      },
      {
        "name": "Master of Steel (Ex)",
        "description": "While fighting with a longsword and a handaxe together, a boge functions as if he had the Two-Weapon Fighting feat, without needing to meet its prerequisites.",
        "level": 1
      },
      {
        "name": "Bane (Su)",
        "description": "At 3rd level, a boge gains a bonus equal to his Charisma bonus (if any) on melee damage rolls against goblins. At 7th level, the same bonus applies on melee damage rolls against elves.",
        "level": 3
      },
      {
        "name": "Master of Fire (Su)",
        "description": "As a free action, a boge can imbue a longsword and handaxe he wields with the flaming burst weapon ability for up to 10 rounds per day (the rounds need not be consecutive and can be spent in increments as small as 1 round; ending the effect for one or both weapons is a free action). The effect ends if the weapon leaves his hand.",
        "level": 5
      },
      {
        "name": "Mantle of Authority (Su)",
        "description": "Three times per day, a boge can gain a +4 bonus to Wisdom and Charisma for a number of rounds equal to 3 + his newly improved Charisma modifier. For 1 minute afterward he is fatigued, and he cannot activate this ability while fatigued or exhausted.",
        "level": 10
      }
    ]
  }
];

export const DRAGON_315_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
