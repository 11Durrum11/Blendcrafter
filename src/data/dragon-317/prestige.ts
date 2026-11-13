// Dragon Magazine #317 (Mar 2004) prestige classes — integrated in
// the Dragon Magazine treatment program (issue #317 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-317/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's five prestige classes, as plain-object records
// mirroring the issue-315 prestige draft shape: a prerequisites
// array, features led by a "Basics" feature, full printed-length
// progression.
//   * "Body of Knowledge" by Andrew M. Scott (pp. 50–57): the
//     OSTEOMANCER, FLUX ADEPT, and CEREBREX — three 10-level classes
//     built on mastery of bone, body, and brain. Their advancement
//     tables were lost in the magazine OCR; every value below was
//     read off the printed page images (magazine pp. 51, 54, 56) and
//     each table resolves to a standard 3.5 progression: Osteomancer
//     d8, half BAB, poor Fortitude, good Reflex and Will; Flux Adept
//     d6, three-quarter BAB, good Fortitude and Will, poor Reflex;
//     Cerebrex d4, half BAB, good Will only, 8 + Int skill points as
//     printed. The article's framing fiction is in reference.md.
//   * "The Ranger Knight of Furyondy" by Charles Dunwoody
//     (pp. 68–69), a Greyhawk class — ruleset "core" per the
//     issue-315 Greyhawk precedent. Advancement table fully legible
//     in the magazine text and verified on the page image: d10, full
//     BAB, good Fortitude and Reflex.
//   * "Battleguard of Tempus" by Thomas M. Costa (pp. 76–79), from
//     "Soldier-Saints of the Lord of Battle" — ruleset "faerun".
//     d10 (badge on the printed page), full BAB, good Fortitude
//     only; the advancement table was OCR-read and cross-checked for
//     internal consistency (standard sequences throughout). The
//     article's new Army domain is in reference.md (domains have no
//     catalog record shape; issue-312 precedent) — its two new
//     spells are staged in spells-draft.ts.
// Feature descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced. See MANIFEST.md for
// the 3.5 conversion applied to the osteomancer's skill list (the
// magazine prints the 3.0 Scry skill).

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
    "id": "osteomancer",
    "name": "Osteomancer",
    "ruleset": "core",
    "source": "Dragon Magazine #317",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "ref",
      "will"
    ],
    "prerequisites": [
      "Spellcasting: Ability to cast at least five transmutation spells, one of which must be 3rd-level or higher",
      "Skills: Heal 4 ranks, Knowledge (arcana) 4 ranks, Knowledge (nature) 4 ranks",
      "Feat: Toughness"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 3 },
      { "level": 3, "bab": 1, "fort": 1, "ref": 3, "will": 3 },
      { "level": 4, "bab": 2, "fort": 1, "ref": 4, "will": 4 },
      { "level": 5, "bab": 2, "fort": 1, "ref": 4, "will": 4 },
      { "level": 6, "bab": 3, "fort": 2, "ref": 5, "will": 5 },
      { "level": 7, "bab": 3, "fort": 2, "ref": 5, "will": 5 },
      { "level": 8, "bab": 4, "fort": 2, "ref": 6, "will": 6 },
      { "level": 9, "bab": 4, "fort": 3, "ref": 6, "will": 6 },
      { "level": 10, "bab": 5, "fort": 3, "ref": 7, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Disguise",
      "Heal",
      "Intimidate",
      "Knowledge (all)",
      "Spellcraft",
      "Use Magic Device"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Weapon and armor proficiencies are as printed in the article's class-features text. Spellcasting: at every even-numbered osteomancer level (2nd, 4th, 6th, 8th, and 10th), the character gains new spells per day (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class."
      },
      {
        "name": "Boneless (Su)",
        "description": "At will, as a full-round action, an osteomancer can dissolve or restore his own skeleton. While boneless he moves 10 feet by muscular control and may not run; he can fit through spaces, but never through an opening smaller than 6 inches in diameter, and must take care to protect his organs. While boneless he is considered prone, cannot use a shield, loses his Dexterity bonus to Armor Class, and cannot attack or cast spells with verbal, somatic, material, or focus components (spells prepared with Silent Spell, Still Spell, or Eschew Materials are excepted).",
        "level": 1
      },
      {
        "name": "Immunity to Disease (Ex)",
        "description": "An osteomancer is immune to disease, including supernatural and magical diseases.",
        "level": 1
      },
      {
        "name": "Skeletal Shift (Ex)",
        "description": "At 2nd level, as a standard action, at will, an osteomancer can shift the bone structure of his limbs and face (including his teeth) to appear as a different person, gaining a +3 bonus on Disguise checks.",
        "level": 2
      },
      {
        "name": "Bone Spurs (Su)",
        "description": "At 3rd level, as a free action, at will, an osteomancer can cause portions of his skeleton to protrude through his skin, suffering no damage or disability from doing so. Protruding bones act as armor spikes and spiked gauntlets with the strength of steel. He is automatically proficient with weapons forged from his own skeleton, but not with normal weapons of the same type. As natural weapons, his bone spurs cannot be sundered.",
        "level": 3
      },
      {
        "name": "Unnerve (Su)",
        "description": "At 3rd level, an osteomancer can sculpt his protruding bone into terrifying shapes. A creature within 30 feet that attempts to strike or otherwise directly attack the osteomancer (even with a targeted spell) must make a Will save (DC 10 + osteomancer level + his Charisma modifier); a creature that succeeds is unaffected and immune to that osteomancer's unnerve for 24 hours, while a creature that fails takes a −2 penalty on every attack roll against the osteomancer for 24 hours. A creature makes only one save against a given osteomancer's unnerve per 24-hour period. This is a mind-affecting fear effect.",
        "level": 3
      },
      {
        "name": "Enlarge/Reduce (Sp)",
        "description": "At 4th level, once per day, an osteomancer can cast enlarge person and reduce person on himself, as a sorcerer of his osteomancer class level.",
        "level": 4
      },
      {
        "name": "Iron Bones (Su)",
        "description": "At 4th level, an osteomancer's bone spurs act as cold iron weapons for the purpose of overcoming damage reduction.",
        "level": 4
      },
      {
        "name": "Seize the Core (Su)",
        "description": "At 5th level, once per day, an osteomancer can affect up to one creature per osteomancer level within 60 feet, no two of which can be more than 30 feet apart. Each subject must make a Fortitude save (DC 10 + osteomancer level + his Charisma modifier) or be held immobile as though paralyzed. Creatures without skeletons (such as oozes) are unaffected; corporeal undead are subject to this effect. A winged creature cannot flap its wings and falls; a swimmer cannot swim and might drown. Creatures immune to paralysis are not immune to this effect.",
        "level": 5
      },
      {
        "name": "Silver Bones (Su)",
        "description": "At 5th level, an osteomancer's bone spurs act as both silver and cold iron for the purpose of overcoming damage reduction.",
        "level": 5
      },
      {
        "name": "Aligned Bones (Su)",
        "description": "At 6th level, an osteomancer's bone spurs take on any non-neutral alignment the character has (chaotic, evil, good, or lawful) for the purpose of overcoming damage reduction. A wholly neutral osteomancer must choose one alignment component for his bones, which cannot later be changed.",
        "level": 6
      },
      {
        "name": "Adamantine Bones (Su)",
        "description": "At 7th level, an osteomancer's bone spurs act as adamantine, cold iron, and silver weapons for the purpose of overcoming damage reduction.",
        "level": 7
      },
      {
        "name": "Sap Life (Su)",
        "description": "At 8th level, as a touch attack, an osteomancer can deal 2d4 points of Strength damage to a living creature with a skeleton unless the target makes a Fortitude save (DC 10 + osteomancer level + his Charisma modifier). He can use this ability a number of times per day equal to 1 + his Charisma modifier (minimum 1).",
        "level": 8
      },
      {
        "name": "Wield the Core (Su)",
        "description": "At 9th level, three times per day, an osteomancer can telepathically control the physical actions of any creature with a skeleton within 30 feet; a Fortitude save (DC 10 + osteomancer level + his Charisma modifier) negates the effect. On a failed save he controls the subject's bone structure — its movement only, not its mind: he cannot make it speak, but he can clench its jaws shut to prevent verbal-component spells or command words. The effect lasts 1 minute per osteomancer level. Obviously self-destructive commands (walking off a cliff, jumping into lava) end the effect, but commanding the creature to face an obviously superior foe does not. Once control is established, its range is unlimited as long as the osteomancer has line of effect to the subject. Corporeal undead are subject to this effect.",
        "level": 9
      },
      {
        "name": "Osteophage (Su)",
        "description": "At 10th level, once per day, an osteomancer can cause a target's skeleton to liquefy, killing the target instantly on a failed Fortitude save (DC 15 + his Charisma modifier — as printed, this DC is not level-based). A successful save still deals 10d6 points of damage.",
        "level": 10
      }
    ]
  },
  {
    "id": "flux-adept",
    "name": "Flux Adept",
    "ruleset": "core",
    "source": "Dragon Magazine #317",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "prerequisites": [
      "Spellcasting: Ability to cast 2nd-level spells",
      "Skills: Heal 5 ranks, Knowledge (arcana) 7 ranks",
      "Feats: At least one metamagic feat, Endurance, Great Fortitude"
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
      "Bluff",
      "Climb",
      "Craft",
      "Escape Artist",
      "Heal",
      "Hide",
      "Jump",
      "Knowledge (any)",
      "Move Silently",
      "Sense Motive",
      "Spellcraft",
      "Swim",
      "Tumble",
      "Use Magic Device"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d6. Weapon and armor proficiencies are as printed in the article's class-features text. Spellcasting: at every odd-numbered flux adept level (1st, 3rd, 5th, 7th, and 9th), the character gains new spells per day (and spells known, if applicable) as if she had also gained a level in a spellcasting class she belonged to before adding the prestige class; she gains no other benefit of that class."
      },
      {
        "name": "Grace Through Will (Ex)",
        "description": "A flux adept adds half her flux adept level to all Balance, Climb, Escape Artist, and Tumble checks.",
        "level": 1
      },
      {
        "name": "Pheromonic Control (Ex)",
        "description": "At 2nd level, three times per day, a flux adept can create an effect functioning like eagle's splendor, as cast by a sorcerer of her flux adept class level. She additionally gains a +2 bonus on any Charisma-based skill check made against a creature with the scent ability.",
        "level": 2
      },
      {
        "name": "Thermoregulation (Su)",
        "description": "At 2nd level, a flux adept can, at will, vary her skin and blood to cope with temperature extremes, even magical ones, gaining a +2 bonus on all saves against fire or cold effects and on Fortitude saves made in cold or very hot conditions. At 7th level the bonus rises to +4 and she is immune to the effects of cold and hot conditions.",
        "level": 2
      },
      {
        "name": "Iron Stomach (Su)",
        "description": "At 3rd level, a flux adept can draw nutrients out of literally any substance — bark, grass, stone, gold, even ash. She gains no benefit from substances that are actively poisonous, but becomes immune to all ingested poisons.",
        "level": 3
      },
      {
        "name": "Bitter Tides (Ex)",
        "description": "At 4th level, a number of times per day equal to 3 + her Constitution modifier (minimum 1), a flux adept can either spit a single concentrated bolus of acidic saliva — a ranged touch attack with a range increment of 10 feet dealing 3d6 points of acid damage — or sweat acid for 10 minutes, dealing 1 point of acid damage per round to any object she touches and wishes to affect; for each minute she touches an item, her acidic sweat ignores 1 point of the object's hardness.",
        "level": 4
      },
      {
        "name": "Feign Death (Ex)",
        "description": "At 5th level, as a standard action, a flux adept can enter a deep trance resembling death — requiring no food, water, or even air — for up to 24 hours, showing all physical signs of death. On entering the trance she designates up to three triggers that will awaken her prematurely; a trigger can only be an event that somehow affects her (being touched, slapped, or damaged), never one based on time of day, and cannot depend on her perceiving her surroundings (such as hearing a sound). Awakening takes a full round. If no trigger fires she remains in the trance the full 24 hours. On awakening she must make a Fortitude save (DC 15 + the number of previous feign death trances she has entered in the past month) or take 1d6 points of Constitution damage.",
        "level": 5
      },
      {
        "name": "Taste of Truth (Ex)",
        "description": "At 6th level, against living creatures, a flux adept adds her flux adept class level to all Bluff and Sense Motive checks, reading emotions via hormonal secretions. Conditions that would prevent a creature from using the scent ability prevent this ability from functioning.",
        "level": 6
      },
      {
        "name": "Haste (Ex)",
        "description": "At 7th level, twice per day as a free action, a flux adept can act as if under a haste spell, as cast by a sorcerer of her flux adept class level.",
        "level": 7
      },
      {
        "name": "Boiling Blood (Ex)",
        "description": "At 8th level, a flux adept's hands become oversized claws granting two claw attacks dealing 1d4 points of damage plus her Strength modifier. Combined with bitter tides, each claw attack deals +1 point of acid damage. She can maintain the effect for up to 1 round per level, activated as a free action, a number of times per day equal to 1 + her Constitution modifier (minimum 1).",
        "level": 8
      },
      {
        "name": "Polyhaemia (Su)",
        "description": "At 9th level, a flux adept can resynthesize in her own blood a potion she has consumed in the last 24 hours; once synthesized it immediately affects her as if she had just drunk it. This requires a Craft (alchemy) check with a DC equal to 10 + 1/25 of the potion's market price (the article's example: a potion of blur, market price 300 gp, requires DC 22). She can use this ability 1 + her Constitution modifier times per day (minimum 1); a failed check still consumes a use. Each use is a full-round action that provokes attacks of opportunity.",
        "level": 9
      },
      {
        "name": "Regeneration 1 (Ex)",
        "description": "At 10th level, a flux adept gains regeneration 1. Cold, electricity, fire, and sonic damage deal normal damage to her. She can regrow a lost limb or body part in 4d6 days, but cannot reattach a severed member by holding it to the stump. (The regrowth dice were read from the printed page image; the magazine OCR garbles them — see MANIFEST.md.)",
        "level": 10
      }
    ]
  },
  {
    "id": "cerebrex",
    "name": "Cerebrex",
    "ruleset": "core",
    "source": "Dragon Magazine #317",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt",
    "hitDie": "d4",
    "skillPointsPerLevel": 8,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "prerequisites": [
      "Spellcasting: Ability to cast 3rd-level arcane spells",
      "Skills: Concentration 8 ranks, Craft (alchemy) 4 ranks, Knowledge (arcana) 8 ranks, Spellcraft 8 ranks"
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
      "Appraise",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Disable Device",
      "Forgery",
      "Heal",
      "Knowledge (all)",
      "Listen",
      "Profession",
      "Search",
      "Speak Language",
      "Spellcraft",
      "Spot",
      "Use Magic Device"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d4. Weapon and armor proficiencies are as printed in the article's class-features text (the cerebrex gains no additional proficiency with any weapon or armor). Spellcasting: at each even-numbered cerebrex level (2nd, 4th, 6th, 8th, and 10th), the character gains new spells per day (and spells known, if applicable) as if she had also gained a level in a spellcasting class she belonged to before adding the prestige class; she gains no other benefit of that class."
      },
      {
        "name": "Enigma's Bane (Ex)",
        "description": "A cerebrex gains a circumstance bonus equal to her cerebrex level on any Intelligence checks or Intelligence-based skill checks made to solve a puzzle, enigma, code, or riddle.",
        "level": 1
      },
      {
        "name": "Scent (Su)",
        "description": "At 2nd level, a cerebrex gains the scent ability (see page 314 of the Monster Manual).",
        "level": 2
      },
      {
        "name": "Aggression Mastery (Su)",
        "description": "At 3rd level, once per day as a standard action, by touch (which provokes an attack of opportunity), a cerebrex can either cause herself or another creature to enter a rage (as a barbarian — non-barbarians rage as a 1st-level barbarian, barbarians rage as normal) or force a barbarian out of a rage. An unwilling target may make a Will save (DC 10 + one-half her cerebrex level + her Charisma bonus) to negate the effect.",
        "level": 3
      },
      {
        "name": "Symphony of Nerves (Su)",
        "description": "At 4th level, once per day as a free action, a cerebrex gains an enhancement bonus to Dexterity equal to one-half her cerebrex level, lasting 1 round per cerebrex level.",
        "level": 4
      },
      {
        "name": "Blindsense (Ex)",
        "description": "At 5th level, a cerebrex gains blindsense to a range of 30 feet (see page 306 of the Monster Manual).",
        "level": 5
      },
      {
        "name": "Telepathic Immunity (Su)",
        "description": "At 5th level, a cerebrex is immune to all forms of telepathy and mind reading. She may suppress and reactivate this immunity at will as a free action.",
        "level": 5
      },
      {
        "name": "Eidetic Memory (Ex)",
        "description": "At 6th level, a cerebrex has perfect recall of events in all five senses, and gains a competence bonus equal to half her cerebrex level on all Intelligence checks and Intelligence-based skill checks.",
        "level": 6
      },
      {
        "name": "Clairaudience/Clairvoyance (Sp)",
        "description": "At 7th level, by concentrating for 1 minute, a cerebrex can perceive an unseen area as per the clairaudience/clairvoyance spell, as cast by a sorcerer of her cerebrex class level.",
        "level": 7
      },
      {
        "name": "Blindsight (Ex)",
        "description": "At 8th level, a cerebrex gains blindsight to a range of 60 feet (see page 306 of the Monster Manual).",
        "level": 8
      },
      {
        "name": "Twist the Neural Skein (Su)",
        "description": "At 9th level, twice per day as a standard action, a cerebrex can watch a known spellcaster and attempt to guess a spell that caster still has memorized: she makes a Spellcraft check (DC 15 + the spell's level + the opponent's Intelligence modifier), and the amount by which the check exceeds the DC determines the highest level of spell she can guess. She learns one randomly determined memorized spell of the appropriate level (or lower), and may check again for a different spell; multiple uses never show the same spell twice, and show a spell of the same name multiple times only if it is memorized more than once. She may then attempt to overload the caster's memory, making a discerned spell inaccessible as if cast: this requires a successful touch attack, after which both make opposed Will saves — if the cerebrex wins, the spell is lost; if the opponent wins, the spell is retained but she may try again (including another attempt that round if she can make more than one attack). This ability has no effect on spellcasters who do not prepare spells (such as bards and sorcerers).",
        "level": 9
      },
      {
        "name": "Neural Glimpse (Su)",
        "description": "At 10th level, once per day for a number of rounds equal to her cerebrex class level, a cerebrex can fix her attention on a number of humanoids or monstrous humanoids within 30 feet equal to her Intelligence modifier (minimum 1). In combat this grants her an insight bonus equal to her Intelligence modifier to her Armor Class against attacks by those creatures; outside combat, an insight bonus equal to her Intelligence modifier (minimum 1) on Bluff, Diplomacy, Intimidate, and Sense Motive checks.",
        "level": 10
      },
      {
        "name": "Inscrutable Mind (Su)",
        "description": "At 10th level, a cerebrex gains a +4 bonus on all saves against mind-affecting, fear, and sleep effects, and whenever she makes a saving throw against an illusion she gains a circumstance bonus equal to her Intelligence bonus.",
        "level": 10
      }
    ]
  },
  {
    "id": "ranger-knight-of-furyondy",
    "name": "Ranger Knight of Furyondy",
    "ruleset": "core",
    "source": "Dragon Magazine #317",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt",
    "hitDie": "d10",
    "skillPointsPerLevel": 6,
    "babProgression": "full",
    "goodSaves": [
      "fort",
      "ref"
    ],
    "prerequisites": [
      "Alignment: Any good",
      "Base attack bonus +5",
      "Skills: Handle Animal 4 ranks, Hide 2 ranks, Move Silently 2 ranks, Ride 8 ranks",
      "Feats: Mounted Combat, Track, Trample, Two-Weapon Fighting",
      "Special: Must be invited to join the ranger knights (an invitation usually offered only once)"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 2, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 3, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 3, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 4, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 4, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 5, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 5, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 6, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 6, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 7, "will": 3 }
    ],
    "classSkills": [
      "Bluff",
      "Climb",
      "Craft",
      "Disguise",
      "Gather Information",
      "Handle Animal",
      "Heal",
      "Hide",
      "Intimidate",
      "Jump",
      "Knowledge (dungeoneering)",
      "Knowledge (geography)",
      "Knowledge (local)",
      "Knowledge (nature)",
      "Listen",
      "Move Silently",
      "Ride",
      "Search",
      "Sense Motive",
      "Spot",
      "Survival",
      "Swim",
      "Tumble",
      "Use Rope"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d10. A ranger knight gains no proficiency with any weapon or armor. Membership is by invitation only: a character must be invited to join the ranger knights of Furyondy (Greyhawk) before taking levels in this class."
      },
      {
        "name": "Mounted Track (Ex)",
        "description": "A ranger knight can track while mounted on her special mount without additional penalty, using the mount's speed when determining penalties for moving faster than half speed.",
        "level": 1
      },
      {
        "name": "Special Mount (Ex)",
        "description": "A ranger knight gains a special mount as a 6th-level paladin; her ranger knight class levels count as paladin levels, with 1st level counting as 6th (a 10th-level ranger knight's mount gains abilities as though she were a 15th-level paladin). The standard mount is a light warhorse for a Medium knight, or a wolf trained to take a rider into combat for a Small knight. If she already has a special mount, she does not gain another; her ranger knight levels stack with the previous class's levels for determining the mount's abilities.",
        "level": 1
      },
      {
        "name": "Favored Enemy (Ex)",
        "description": "At 2nd, 6th, and 10th level, a ranger knight gains a favored enemy exactly as the ranger class feature; her levels stack with other classes that provide favored enemies. On gaining each new favored enemy she also increases the bonus against any one favored enemy (including the one just selected) by +2.",
        "level": 2
      },
      {
        "name": "Saddle Strike (Ex)",
        "description": "At 2nd level, a ranger knight can attack with two weapons without having to make a Ride check to guide her mount with her knees; her mount can attack as well if she makes a DC 5 Ride check.",
        "level": 2
      },
      {
        "name": "Two Fight as One (Ex)",
        "description": "At 3rd level, a ranger knight can fight with her mount without the need for a Ride check. Any dodge bonuses to Armor Class the ranger knight has also apply to her mount.",
        "level": 3
      },
      {
        "name": "Silent Hoof (Ex)",
        "description": "At 4th level, if her mount is wearing light barding or no barding, a ranger knight can use her own Move Silently skill checks in place of her mount's when riding it.",
        "level": 4
      },
      {
        "name": "Bonus Feat",
        "description": "At 4th, 7th, and 10th level, a ranger knight gains a bonus feat chosen from the following list, for which she must qualify: Animal Affinity, Athletic, Improved Two-Weapon Fighting, Greater Two-Weapon Fighting, Mounted Archery, Quick Draw, Ride-By Attack, Self-Sufficient, Spirited Charge, Stealthy, Two-Weapon Defense.",
        "level": 4
      },
      {
        "name": "Horse Archer (Ex)",
        "description": "At 5th level, a ranger knight's penalties for mounted ranged attacks are halved. If she has the Mounted Archery feat, the penalties are halved again (to −1 if the mount takes a double move, or −2 if the mount is running).",
        "level": 5
      },
      {
        "name": "Double Stomp (Ex)",
        "description": "At 6th level, if her mount is wearing light barding or no barding and she uses the Trample feat successfully, her mount may make two attacks instead of one.",
        "level": 6
      },
      {
        "name": "Ranger Lord (Ex)",
        "description": "At 7th level, a ranger knight can wear medium armor and use any abilities that require light or no armor so long as she uses the ability while mounted. Her special mount suffers no discomfort from wearing light barding and can sleep in it without suffering fatigue.",
        "level": 7
      },
      {
        "name": "Great Trample (Ex)",
        "description": "At 8th level, as Double Stomp, except that her mount may make a full attack instead, each attack at a −2 penalty. The mount still gains the standard +4 bonus on attack rolls against prone targets.",
        "level": 8
      },
      {
        "name": "Overwhelming Charge (Ex)",
        "description": "At 9th level, when mounted on her special mount and charging, a ranger knight does not suffer the −2 Armor Class penalty for charging (her mount still does). If she wields two melee weapons she can attack once with each, instead of making a single attack when her mount moves more than 5 feet. If the charge is combined with the Spirited Charge feat, both melee weapons deal double damage. This ability cannot be used with reach weapons (such as a lance).",
        "level": 9
      }
    ]
  },
  {
    "id": "battleguard-of-tempus",
    "name": "Battleguard of Tempus",
    "ruleset": "faerun",
    "source": "Dragon Magazine #317",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "prerequisites": [
      "Patron: Tempus",
      "Alignment: Any nonlawful",
      "Base attack bonus +4",
      "Skills: Craft (armorsmithing) 5 ranks, Craft (weaponsmithing) 5 ranks, Handle Animal 3 ranks, Ride 3 ranks",
      "Feats: Combat Casting, Leadership, Weapon Focus (any)",
      "Spells: Ability to cast 2nd-level divine spells; clerics must have access to the War domain",
      "Special: Must have been in at least five battles, and on the winning side of at least three battles involving fifty or more combatants"
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
      "Knowledge (history)",
      "Knowledge (religion)",
      "Ride",
      "Spellcraft",
      "Survival"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d10. A battleguard is proficient with all simple and martial weapons, and with all types of armor and shields; battleguards prefer axes and swords and the best armor they can afford. Spellcasting: at every even-numbered battleguard level (2nd, 4th, 6th, 8th, and 10th), the character gains new spells per day as if he had also gained a level in a divine spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class (such as an improved chance of turning undead). Ex-battleguards: a battleguard who grossly violates the dogma of Tempus loses all spells and class features and cannot gain further battleguard levels until he atones."
      },
      {
        "name": "Army Domain",
        "description": "At 1st level, a battleguard gains access to the Army domain: he receives the domain's granted power, and if a cleric, may choose from the domain's spell list when choosing domain spells each day. (The Army domain — granted power and spell list — is written up in full in reference.md; its two new spells, easy march and lighten load, are staged in spells-draft.ts.)",
        "level": 1
      },
      {
        "name": "Arms Lore (Ex)",
        "description": "At 1st level, a battleguard develops a wealth of knowledge about weapons and armor (including shields, helmets, and gauntlets). This ability works exactly like the bardic knowledge ability of the bard class, but only as to facts relating to arms and armor; the knowledge check bonus equals his battleguard level + his Intelligence modifier. If he has bard levels (or levels in another class with a similar ability, such as loremaster), his battleguard levels and his levels in the other appropriate class stack for the purposes of using bardic knowledge in matters involving armor and weapons.",
        "level": 1
      },
      {
        "name": "Weapon of Choice (Ex)",
        "description": "At 1st level, the battleguard must choose a weapon with which he has the Weapon Focus feat, and consecrate it to Tempus in a lengthy ceremony of meditation and fasting that takes a tenday. Should his weapon of choice be lost, stolen, or destroyed, he must reconsecrate another weapon. A ranged weapon cannot be chosen as a weapon of choice.",
        "level": 1
      },
      {
        "name": "Enchant Weapon (Su)",
        "description": "At 2nd level, a battleguard can temporarily enhance his weapon of choice to achieve a specific effect, once per day for 1 minute per level. He can choose any special ability (including an enhancement bonus) with a +1 equivalent market price modifier. The effect ends if the weapon leaves his grasp. This ability improves at 6th level and 10th level, allowing him to choose weapon special abilities equivalent to a +2 or +3 modifier respectively.",
        "level": 2
      },
      {
        "name": "Battleforger (Ex)",
        "description": "From 3rd level, a battleguard receives a +2 competence bonus on all Craft (armorsmithing) and Craft (weaponsmithing) checks.",
        "level": 3
      },
      {
        "name": "Identify Arms (Sp)",
        "description": "At 5th level, a battleguard can determine the single most basic function of any weapon or piece of armor, as per the identify spell, a number of times per day equal to his Charisma bonus (minimum 1 per day).",
        "level": 5
      },
      {
        "name": "Diehard (Ex)",
        "description": "At 7th level, a battleguard gains the Diehard feat as a bonus feat, regardless of whether or not he meets its prerequisites.",
        "level": 7
      },
      {
        "name": "Analyze Arms Dweomer (Sp)",
        "description": "At 9th level, a battleguard can discern the magical properties of any piece of armor (including shields, helms, and gauntlets) or weapon, as per the analyze dweomer spell, a number of times per day equal to his Charisma bonus (minimum 1 per day).",
        "level": 9
      }
    ]
  }
];

export const DRAGON_317_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
