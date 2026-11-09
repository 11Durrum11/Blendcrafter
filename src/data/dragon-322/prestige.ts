// Dragon Magazine #322 (Aug 2004) prestige classes — integrated in
// the Dragon Magazine treatment program (issue #322 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-322/
// (MANIFEST.md / SCREENING.md / reference.md).
//   * SHADOW APOSTLE, from "Lord of Darkness" (pp. 62–69) — the
//     chosen of Erebus, god of darkness (the article's own Shar
//     adaptation is noted in the pack reference; the deity block and
//     monsters went to reference).
//   * DEATHSTALKER OF BHAAL (pp. 92–96) — the dead god's assassins;
//     its death attack DC really is printed as 10 + double class
//     level + Charisma modifier, and the bloodlust DC (16 + Wis
//     modifier) was recovered from the page image after the OCR
//     dropped it. Tables verified against the printed page images.
// Feature descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced.

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
    "id": "shadow-apostle",
    "name": "Shadow Apostle",
    "ruleset": "core",
    "source": "Dragon Magazine #322 — Lord of Darkness",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine322_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "prerequisites": [
      "Alignment: Any non-good",
      "Patron Deity: Erebus",
      "Skills: Hide 4 ranks, Spellcraft 8 ranks",
      "Spells: Ability to cast 3rd-level arcane or divine spells, including at least three spells with the darkness descriptor or the shadow subschool descriptor"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 1, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 2, "fort": 1, "ref": 1, "will": 4 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Hide",
      "Knowledge (arcana)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Move Silently",
      "Profession",
      "Sense Motive",
      "Spellcraft"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Shadow apostles gain no additional proficiency with any weapon or armor. Spells Per Day/Spells Known: every level of shadow apostle grants new spells per day (and spells known, if applicable) as if the character had also gained a level in a spellcasting class he belonged to before adding the prestige class (+1 level of existing spellcasting class at every shadow apostle level); he does not gain any other benefit a character of that class would have gained. If the character had more than one spellcasting class before becoming a shadow apostle, he must decide to which class he adds each level of shadow apostle for purposes of spells per day and spells known."
      },
      {
        "name": "Dark Spell Focus — 1st level",
        "description": "At 1st level, the shadow apostle casts spells with the darkness descriptor or of the shadow subschool as if he had the Spell Focus feat applying to those spells: add +1 to the Difficulty Class for all saving throws against spells with the darkness descriptor or of the shadow subschool."
      },
      {
        "name": "Summon Darkness Pseudo-Elemental (Su) — 1st level",
        "description": "Once per day, a shadow apostle can summon a darkness pseudo-elemental (see reference.md for the monster). The pseudo-elemental obeys all of the shadow apostle's commands to the best of its ability for a number of hours equal to the character's shadow apostle level. At 1st level he summons one Small darkness pseudo-elemental; at 3rd level a Medium one; at 5th level a Large one."
      },
      {
        "name": "Low-Light Vision (Su) — 2nd level",
        "description": "At 2nd level, a shadow apostle gains low-light vision, allowing him to see twice as far as a human in starlight, moonlight, torchlight, or similar conditions of poor illumination. If the character already has low-light vision, this ability grants him no additional benefit."
      },
      {
        "name": "Shadow Resistance (Ex) — 2nd level",
        "description": "By 2nd level, the shadow apostle gains a bonus equal to his shadow apostle level on all saving throws made to resist the effects of spells with the darkness descriptor or from the shadow subschool."
      },
      {
        "name": "Darkvision (Su) — 3rd level",
        "description": "At 3rd level, a shadow apostle gains darkvision up to 60 feet. Darkvision is black and white only, but is otherwise like normal sight, and allows the character to function with no light at all. Shadow apostles that already have darkvision at the same or a farther range gain no benefit from this ability."
      },
      {
        "name": "Shadow Blend (Su) — 4th level",
        "description": "By 4th level, whenever a shadow apostle is within an area of shadowy illumination, his form blurs slightly into the surrounding darkness, granting him total concealment. Darkvision foils this concealment unless the shadowy illumination is from a magical or supernatural source, such as the darkness spell. True seeing also negates the benefit of this ability."
      }
    ]
  },
  {
    "id": "deathstalker-of-bhaal",
    "name": "Deathstalker of Bhaal",
    "ruleset": "faerun",
    "source": "Dragon Magazine #322 — Deathstalker of Bhaal",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine322_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "will"
    ],
    "prerequisites": [
      "Patron Deity: Bhaal",
      "Alignment: Lawful evil",
      "Skills: Hide 5 ranks, Move Silently 5 ranks, Survival 2 ranks",
      "Feat: Quick Draw",
      "Spells: Ability to cast 3rd-level divine spells; clerics must have access to the Death or Destruction domain",
      "Special: Must have murdered at least sixteen sentient creatures, using sixteen different weapons or methods"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 1, "will": 4 }
    ],
    "classSkills": [
      "Bluff",
      "Climb",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Gather Information",
      "Heal",
      "Hide",
      "Intimidate",
      "Knowledge (religion)",
      "Listen",
      "Move Silently",
      "Sense Motive",
      "Spellcraft",
      "Spot",
      "Survival",
      "Use Rope"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Deathstalkers are proficient with all simple weapons and with light and medium armor. Spells Per Day: at 1st, 3rd, and 5th level, the deathstalker gains new spells per day as if he had also gained a level in a divine spellcasting class he belonged to before adding the prestige class (+1 level of existing class); he does not gain any other benefit a character of that class would have gained (increased turning abilities, animal companions, and so on). If the character had more than one divine spellcasting class before becoming a deathstalker, he must decide to which class he adds each deathstalker level for purposes of spells per day. Dogma: deathstalkers are required to deal death once in every tenday in the heart of the night; if imprisonment or other constraining circumstances make this impossible, they must kill twice for each murder missed. An ex-deathstalker who grossly violates the dogma of Bhaal loses all spells and class features and cannot gain levels as a deathstalker until he atones."
      },
      {
        "name": "Death Attack (Ex) — 1st level",
        "description": "Starting at 1st level, if the deathstalker studies his victim for 3 rounds and then makes a sneak attack with a melee weapon that successfully deals damage, the sneak attack has the additional effect of possibly either paralyzing or killing the target (deathstalker's choice). While studying the victim, the deathstalker can undertake other actions as long as his attention stays focused on the target and the target does not detect the deathstalker or recognize him as an enemy. If the victim of such an attack fails her Fortitude saving throw (DC 10 + double the deathstalker's level + the deathstalker's Charisma modifier) against the kill effect, she dies. If the saving throw fails against the paralysis effect, the victim's mind and body become enervated, rendering her completely helpless and unable to act for 1d6 rounds plus 2 rounds per deathstalker level. If the victim's saving throw succeeds, the attack is just a normal sneak attack. Once the deathstalker has completed the 3 rounds of study, he must make the death attack within the next 3 rounds; if he does not launch the attack within 3 rounds of completing the study, 3 new rounds of study are required before he can attempt another death attack."
      },
      {
        "name": "Sneak Attack (Ex) — 2nd level",
        "description": "Upon taking the 2nd level of this class, a character gains the ability to make sneak attacks as a rogue. The bonus damage is +1d6 at 2nd level and +2d6 at 4th level. If the deathstalker gets a sneak attack bonus from another source (such as rogue levels), the bonuses to damage stack."
      },
      {
        "name": "Bloodlust (Sp) — 3rd level",
        "description": "At 3rd level, once per day a deathstalker can evoke and direct the hatred of a living creature within 30 feet. The target must succeed at a Will save (DC 16 + the deathstalker's Wisdom modifier) to resist this effect; those that fail are affected as if by the spell rage (see page 268 of the Player's Handbook) and must attack another creature within 30 feet of the deathstalker's choosing. The affected creature will do all it can to kill the target of its hatred. This effect lasts for 1 round per deathstalker level. This is a mind-affecting compulsion effect."
      },
      {
        "name": "Last Breath of Bhaal (Su) — 5th level",
        "description": "Deathstalkers who die after attaining 5th level are affected by the last breath residual in their dead god's last gasp: a deathstalker slain in the service of Bhaal is affected as if by the spell raise dead, as cast by a 12th-level cleric. This ability takes effect 1 hour after the deathstalker is killed, as long as the body has remained intact during that time. During that hour, the body shows no sign of life or that magic is affecting the corpse. As per raise dead, the deathstalker immediately loses 1 level."
      }
    ]
  }
];

export const DRAGON_322_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
