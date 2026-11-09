// Dragon Magazine #313 (Nov 2003) prestige classes — integrated in the
// Dragon Magazine treatment program (issue #313 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-313/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's three prestige classes:
//   * Mind Mage, from "Brain Power: Illithids" (by Clifford
//     Horowitz, pp. 46–53) — a dual-caster prestige class blending
//     arcane spellcasting and psionic manifesting through the
//     psi-spell feats.
//   * Ocular Master and Unholy Abomination, from "Eye Wares:
//     Beholders" (pp. 54–59) — monster prestige classes for
//     beholders and aberrations.
// Sources: the Dragon #313 magazine text on archive.org
// (DragonMagazine313_djvu.txt), cross-checked against the dndtools
// transcriptions of all three classes and the realmshelps.net
// transcription of the Mind Mage, which supplied the Hit Die lines
// and three-quarter BAB the magazine OCR dropped (see MANIFEST.md).
// Records mirror the issue-312 prestige draft shape, with a
// prerequisites array in the catalog's prestige-class convention.
// Features are plain objects ({ name, description, level? }) for the
// integration step, each led by a "Basics" feature. Feature
// descriptions are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.
//
// ADJUDICATION (flagged in MANIFEST.md): the magazine OCR of the
// Mind Mage advancement table appears to place Focus of Discipline
// at 5th level and Twin Wells at 7th, but the magazine's own
// feature texts ("Twin Wells: By 5th level…", "Focus of Discipline:
// By 7th level…"), the dndtools table, and realmshelps all agree it
// is the other way around. The feature texts govern: Twin Wells at
// 5th, Focus of Discipline at 7th.

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
    "id": "mind-mage",
    "name": "Mind Mage",
    "ruleset": "core",
    "source": "Dragon Magazine #313",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine313_djvu.txt",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "prerequisites": [
      "Feats: Any two psi-spell feats",
      "Spells: Ability to cast 3rd-level or higher arcane spells",
      "Psionic Powers: Ability to manifest 2nd-level or higher powers",
      "Special: Must have received training in mind magic, or have acquired comprehensive texts from which to learn its secrets"
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
      "Concentration",
      "Craft",
      "Knowledge (all)",
      "Psicraft",
      "Spellcraft",
      "Autohypnosis"
    ],
    "features": [
      {
        "name": "Basics",
        "level": 1,
        "description": "The mind mage blends arcane spellcasting with psionic manifesting, powering each discipline with the other's energy through the psi-spell feats. Most mind mages are illithids. Advancement: at levels 1, 3, 5, 6, 7, 8, 9, and 10 the mind mage gains new spells per day (and spells known, if applicable) as if he had also gained a level in an arcane spellcasting class he belonged to before adding the prestige class; at levels 2, 4, 5, 6, 7, 8, 9, and 10 he gains power points per day and discovers new powers as if he had also gained a level in a manifesting class he belonged to before adding the prestige class. He does not gain any other benefit of those classes. In addition to the class skills listed, any two skills drawn from the class skill list of a psionic class in which he has levels (not otherwise on this list) are always class skills for him, chosen as described in the article. Class skills: Concentration, Craft, Knowledge (all skills, taken individually), Psicraft, Spellcraft, Autohypnosis. Weapon and armor proficiencies: none gained."
      },
      {
        "name": "Psionic Components (Ex)",
        "level": 1,
        "description": "When casting a spell, the mind mage can substitute power points for the spell's verbal and somatic components, and for material components worth 1 gp or less, at a cost of 2 power points per spell level for each component replaced. He decides whether to use this ability when casting; it requires no additional action."
      },
      {
        "name": "Compensation (Ex)",
        "level": 2,
        "description": "When the mind mage uses a metamagic or metapsionic feat that would raise an effect's spell level or power point cost, he can pay across disciplines. Every 3 power points he spends on a spell modified by a metamagic feat offsets the spell-level increase by one level. Every spell level he spends on a power modified by a metapsionic feat reduces its additional power point cost by 2. He may use this ability as often as he likes but must pay the appropriate points or levels. It cannot be used in conjunction with psi-spell feats, and it cannot reduce a cost below the cost of the original effect."
      },
      {
        "name": "Psionic Reinforcement",
        "level": 3,
        "description": "While the mind mage's power point reserve is 5 or greater, the save DCs of his spells that allow a saving throw increase by +1. See also the improved version gained at 9th level."
      },
      {
        "name": "Force Touch (Su)",
        "level": 4,
        "description": "The mind mage can deliver a touch-attack spell through a force power he knows (concussion, detonation, greater concussion, lesser concussion, mass concussion, or true concussion — power names as printed). The power has its normal effect in addition to the spell's. If the power affects multiple targets, the mind mage chooses one within his line of sight and effect to receive the touch spell; force powers that deal no damage cannot deliver spells this way. He must still make a ranged touch attack against the target, and the target gets spell resistance checks against both the spell and the power. The spell still requires its somatic components unless they are offset through Psionic Components."
      },
      {
        "name": "Twin Wells (Su)",
        "level": 5,
        "description": "Once per day, as a full-round action that provokes attacks of opportunity, the mind mage adds all his mind mage levels to either his psionic class or his arcane class for the purpose of determining caster level or manifester level. This does not change the spells he can cast or his power point pool. The effect lasts 24 hours and cannot be ended early."
      },
      {
        "name": "Magical Reinforcement (Su)",
        "level": 6,
        "description": "Once per day per mind mage level, the mind mage can increase the effective level of a power he manifests by one, as through the Heighten Power feat, at no additional power point cost. The increase is chosen when the power is manifested and stacks with Heighten Power (Heighten Power can be applied normally after this ability adds its free level)."
      },
      {
        "name": "Focus of Discipline (Ex)",
        "level": 7,
        "description": "When casting a spell, the mind mage can lower its effective spell level (and the slot it uses) by spending 8 power points per level of reduction, to a minimum of 1st level. When manifesting a power, he can reduce its power point cost by 2 points per spell level he expends. Unlike Compensation, this ability lowers the spell's base level and the power's base cost, so the lowered value governs dispelling, save DCs, and counterspell identification."
      },
      {
        "name": "Painful Premonition (Su)",
        "level": 8,
        "description": "When augmenting a damage-producing effect, the mind mage inflicts a premonition of the coming pain. The target makes a Will save as though against a 6th-level telepathic power: success negates the premonition entirely; failure imposes a −2 penalty on the target's saving throw (if any) against the incoming effect and deals nonlethal damage equal to the damage the incoming effect deals (and any portion of that damage the target escapes — through evasion or energy resistance, for example — negates an equivalent portion of the nonlethal damage). Mindless creatures, creatures immune to mind-affecting effects, and creatures with no discernible anatomy are immune. The mind mage can use this ability a number of times per day equal to the ability modifier controlling his primary discipline (the highest ability modifier if he has no primary discipline)."
      },
      {
        "name": "Psionic Reinforcement (Improved)",
        "level": 9,
        "description": "The mind mage's spell save DC increase (see 3rd level) improves to +2 while his power point reserve is 10 or more. At a reserve of 5 to 9 points, the increase remains +1."
      },
      {
        "name": "Twin Wells Same Source (Ex)",
        "level": 10,
        "description": "This ability replaces Twin Wells. Once per day, as a full-round action that provokes attacks of opportunity, the mind mage adds his full mind mage level to both his magical and psionic class levels for the purposes of determining caster level and manifester level, and adds together the key ability modifiers of his psionic powers and his spellcasting (doubling the modifier if the same score governs both) when using any psi-spell ability. The effect lasts 24 hours."
      }
    ]
  },
  {
    "id": "ocular-master",
    "name": "Ocular Master",
    "ruleset": "core",
    "source": "Dragon Magazine #313",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine313_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": [
      "will"
    ],
    "prerequisites": [
      "Race: Beholder",
      "Knowledge (arcana): 8 ranks",
      "Feat: Versatile Tyrant"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 1, "will": 4 }
    ],
    "classSkills": [
      "Concentration",
      "Decipher Script",
      "Knowledge (arcana)",
      "Spellcraft"
    ],
    "features": [
      {
        "name": "Basics",
        "level": 1,
        "description": "A monster prestige class for beholders who fuse their eye rays into new, deadlier combinations. Class skills: Concentration, Decipher Script, Knowledge (arcana), Spellcraft. Weapon and armor proficiencies: none gained."
      },
      {
        "name": "Save DC Increase",
        "level": 1,
        "description": "At 1st, 3rd, and 5th level, the save DCs of the ocular master's eye rays increase: +1 at 1st, +2 at 3rd, and +3 at 5th. This increase also applies to Eye of Madness, Wandering Eye, and Ocular Hammer."
      },
      {
        "name": "Eye of Madness (Su)",
        "level": 1,
        "description": "The ocular master combines its charm monster and fear eye rays on a single target with a ranged touch attack. The target must make a Will save (DC 10 + one-half the beholder's racial Hit Dice + its Charisma modifier + its save DC increase bonus) or suffer an insanity effect (as the spell). Even on a successful save, the target is shaken for 1d10 rounds. Eye of Madness counts as one ray for the limit on eye rays directed into a 90-degree arc, and the beholder cannot use the charm monster or fear rays normally in the same round."
      },
      {
        "name": "Agile Aim (Ex)",
        "level": 2,
        "description": "The ocular master gains a +2 competence bonus on ranged touch attack rolls for all its eye ray attacks, including its combined-ray abilities."
      },
      {
        "name": "Wandering Eye (Su)",
        "level": 3,
        "description": "The ocular master combines its slow and telekinesis eye rays on a single target with a ranged touch attack. The target is affected as by a maze spell, with no saving throw allowed. Wandering Eye counts as one ray for the limit on eye rays directed into a 90-degree arc, and the beholder cannot use the slow or telekinesis rays normally in the same round."
      },
      {
        "name": "Power Blast (Ex)",
        "level": 4,
        "description": "The save DC of each of the ocular master's eye ray attacks increases by +1. This increase also applies to Wandering Eye, Eye of Madness, and Ocular Hammer, and stacks with the Save DC Increase ability."
      },
      {
        "name": "Ocular Hammer (Su)",
        "level": 5,
        "description": "Twice per day, the ocular master can combine three of its eye rays in a single 90-degree arc against one target; one of the rays must be the disintegrate eye. With a ranged touch attack, the target must make a Fortitude save (DC 10 + one-half the beholder's racial Hit Dice + its Charisma modifier + its save DC increase bonus) or be affected by an empowered disintegrate ray; on a failed save the creature still takes the lesser damage of the disintegrate spell (empowered), and a creature reduced to 0 hit points or fewer is entirely disintegrated, though its equipment is unaffected. Using Ocular Hammer replaces the three rays' individual effects for that round; other eyestalks pointing into different arcs can act normally."
      }
    ]
  },
  {
    "id": "unholy-abomination",
    "name": "Unholy Abomination",
    "ruleset": "core",
    "source": "Dragon Magazine #313",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine313_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "prerequisites": [
      "Type: Aberration",
      "Knowledge (religion): 8 ranks",
      "Feat: Power Surge",
      "Special: Ability to use a supernatural attack at least three times per day"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 1, "fort": 1, "ref": 1, "will": 3 }
    ],
    "classSkills": [
      "Concentration",
      "Knowledge (arcana)",
      "Knowledge (religion)",
      "Spellcraft",
      "Heal"
    ],
    "features": [
      {
        "name": "Basics",
        "level": 1,
        "description": "A monster prestige class for aberrations touched by dark powers, whose very presence blights the good. Class skills: Concentration, Knowledge (arcana), Knowledge (religion), Spellcraft, Heal. Weapon and armor proficiencies: none gained."
      },
      {
        "name": "Unholy Blessing (Su)",
        "level": 1,
        "description": "The unholy abomination gains a +1 innate bonus on all attacks, checks, and saves."
      },
      {
        "name": "Dark Miracle (Su)",
        "level": 2,
        "description": "Three times per day, as a standard action, the unholy abomination emits an inky-black ray of negative energy that injures good creatures. The ranged touch attack has a range of 60 feet; a struck target gains two negative levels. The DC to remove one of the negative levels is 10 + the abomination's class level + its Charisma modifier."
      },
      {
        "name": "Blasphemous Visage (Ex)",
        "level": 3,
        "description": "This horrifying aura is always active and cannot be suppressed. Every creature within 60 feet of the unholy abomination must make a Will save (DC 13 + its Charisma modifier) or take a −2 penalty on attack rolls and saves while within range and line of sight, and for 1d4 rounds thereafter; this is a mind-affecting fear effect. Any creature adjacent to the abomination must make a Fortitude save (DC 13 + its Constitution modifier) or take 1d4 points of Strength damage from its stench, saving again each round it remains adjacent until it succeeds or collapses. A creature that succeeds at either save is immune to that effect for 24 hours."
      }
    ]
  }
];

export const DRAGON_313_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
