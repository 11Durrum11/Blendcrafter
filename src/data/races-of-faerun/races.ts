/**
 * Races of Faerun race data pack: the races the book presents
 * with complete standalone racial trait lists — the orcs of
 * Chapter 5, the fey'ri and tanarukk of Chapter 8, and the
 * minor races of Chapter 9. Built 2026-10-27 from the copy in
 * Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Faerun.pdf
 *
 * Races of Faerun is a Forgotten Realms book, but the app's
 * sorting scheme has no Faerun toggle, so these records carry
 * ruleset "core" (see the Batch 7 addendum in REBUILD-NOTES.md).
 * The book is a 3.0-era work (first printing March 2003) written
 * against the then-upcoming 3.5 revision; entries are recorded
 * in the app's 3.5 conventions where they differ.
 *
 * Most of the book's subrace entries do NOT print standalone
 * trait lists: they either state a delta on the Player's
 * Handbook race ("all the dwarven racial traits in the Player's
 * Handbook, except as follows"), refer the reader to the
 * Forgotten Realms Campaign Setting, or print no mechanics at
 * all. Per the established delta precedent (Tundra Halfling,
 * Batch 4), those subraces are documented in the addendum, not
 * converted. Only the complete standalone lists below became
 * records. The source PDF is an image-only scan; all values
 * were extracted by OCR of the page images, with ambiguous
 * values settled against the page images directly (lizardfolk
 * natural armor, orog resistances).
 *
 * Printed quirks kept as printed: gray orcs get scent but no
 * darkvision in this book's list; the aarakocra entry prints no
 * racial Hit Dice (its level adjustment note counts class
 * levels + 2 only), so none are recorded.
 */
import type { RaceDefinition } from "@/engine/types";

const ROF = "Races of Faerun";
const ROF_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf";

export const RACES_OF_FAERUN_RACES: RaceDefinition[] = [
  {
    id: "gray-orc",
    name: "Gray Orc",
    ruleset: "core",
    source: `${ROF} — Chapter 5: Half-Orcs and Orcs, Gray Orc (p. 66)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 40,
    type: "Humanoid",
    subtypes: ["Orc"],
    abilityModifiers: { str: 2, int: -2, wis: 2, cha: -2 },
    favoredClass: "cleric",
    levelAdjustment: 1,
    traits: [
      {
        key: "gray-orc-weapon-proficiency",
        name: "Weapon Proficiency",
        description:
          "Gray orcs are proficient with the greataxe and longbow, training with weapons from childhood.",
        category: "trait",
        source: `${ROF} — Gray Orc racial traits (p. 66)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "gray-orc-light-sensitivity",
        name: "Light Sensitivity",
        description:
          "Gray orcs suffer a –1 penalty on attack rolls in bright sunlight or within the radius of a daylight spell.",
        category: "trait",
        source: `${ROF} — Gray Orc racial traits (p. 66)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "gray-orc-scent",
        name: "Scent",
        description:
          "Gray orcs have the scent ability. This book's trait list gives them scent but no darkvision; recorded as printed.",
        category: "special-quality",
        source: `${ROF} — Gray Orc racial traits (p. 66)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "gray-orc-blood",
        name: "Orc Blood",
        description:
          "For all special abilities and effects, a gray orc is considered an orc, including using or creating orc weapons and magic items with racially specific orc powers.",
        category: "trait",
        source: `${ROF} — Gray Orc racial traits (p. 66)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "gray-orc-languages",
        name: "Languages",
        description:
          "Automatic languages: Common, Orc. Bonus languages: Draconic, Giant, Goblin.",
        category: "trait",
        source: `${ROF} — Gray Orc racial traits (p. 66)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "mountain-orc",
    name: "Mountain Orc",
    ruleset: "core",
    source: `${ROF} — Chapter 5: Half-Orcs and Orcs, Mountain Orc (p. 70)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Orc"],
    abilityModifiers: { str: 4, int: -2, wis: -2, cha: -2 },
    favoredClass: "barbarian",
    levelAdjustment: 0,
    traits: [
      {
        key: "mountain-orc-darkvision",
        name: "Darkvision",
        description: "Mountain orcs can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${ROF} — Mountain Orc racial traits (p. 70)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "mountain-orc-weapon-proficiency",
        name: "Weapon Proficiency",
        description:
          "Mountain orcs are proficient with the greataxe and javelin, training with weapons from childhood.",
        category: "trait",
        source: `${ROF} — Mountain Orc racial traits (p. 70)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "mountain-orc-light-sensitivity",
        name: "Light Sensitivity",
        description:
          "Mountain orcs suffer a –1 penalty on attack rolls in bright sunlight or within the radius of a daylight spell.",
        category: "trait",
        source: `${ROF} — Mountain Orc racial traits (p. 70)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "mountain-orc-blood",
        name: "Orc Blood",
        description:
          "For all special abilities and effects, a mountain orc is considered an orc, including using or creating orc weapons and magic items with racially specific orc powers.",
        category: "trait",
        source: `${ROF} — Mountain Orc racial traits (p. 70)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "mountain-orc-languages",
        name: "Languages",
        description:
          "Automatic languages: Common, Orc. Bonus languages: Draconic, Dwarven, Giant, Goblin.",
        category: "trait",
        source: `${ROF} — Mountain Orc racial traits (p. 70)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "orog",
    name: "Orog",
    ruleset: "core",
    source: `${ROF} — Chapter 5: Half-Orcs and Orcs, Orog (p. 72)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Orc"],
    abilityModifiers: { str: 6, dex: -2, wis: -2, cha: 2 },
    favoredClass: "fighter",
    levelAdjustment: 2,
    naturalArmor: 2,
    traits: [
      {
        key: "orog-darkvision",
        name: "Darkvision",
        description: "Orogs can see in the dark up to 120 feet.",
        category: "special-quality",
        source: `${ROF} — Orog racial traits (p. 72)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "orog-weapon-proficiency",
        name: "Weapon Proficiency",
        description:
          "Orogs are proficient with the greatsword and throwing axe; all orogs train with some sort of martial weapon from a very young age.",
        category: "trait",
        source: `${ROF} — Orog racial traits (p. 72)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "orog-forge-skills",
        name: "Forge Skills",
        description:
          "+2 racial bonus on Craft (armorsmithing) and Craft (weaponsmithing) checks. The bonus applies only to those two Craft specialties, so it is recorded here rather than in the general skill bonuses.",
        category: "trait",
        source: `${ROF} — Orog racial traits (p. 72)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "orog-light-blindness",
        name: "Light Blindness",
        description:
          "Abrupt exposure to bright light (such as sunlight or a daylight spell) blinds an orog for 1 round. In addition, orogs suffer a –1 circumstance penalty on all attack rolls, saves, and checks while operating in bright light.",
        category: "trait",
        source: `${ROF} — Orog racial traits (p. 72)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "orog-resistances",
        name: "Resistances",
        description:
          "Orogs have fire resistance 5 and cold resistance 5; they are inured to extremes of temperature.",
        category: "special-quality",
        source: `${ROF} — Orog racial traits (p. 72)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "orog-blood",
        name: "Orc Blood",
        description:
          "For all special abilities and effects, an orog is considered an orc, including using or creating orc weapons and magic items with racially specific orc powers.",
        category: "trait",
        source: `${ROF} — Orog racial traits (p. 72)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "orog-languages",
        name: "Languages",
        description:
          "Automatic languages: Orc, Undercommon. Bonus languages: Common, Dwarven, Elven, Goblin, Giant.",
        category: "trait",
        source: `${ROF} — Orog racial traits (p. 72)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "feyri",
    name: "Fey'ri",
    ruleset: "core",
    source: `${ROF} — Chapter 8: Planetouched, Fey'ri (pp. 118–120)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Native", "Elf"],
    abilityModifiers: { dex: 2, int: 2, con: -2 },
    favoredClass: "sorcerer",
    levelAdjustment: 2,
    skillBonuses: { bluff: 2, hide: 2, listen: 2, search: 2, spot: 2 },
    traits: [
      {
        key: "feyri-vision",
        name: "Darkvision and Low-Light Vision",
        description:
          "Fey'ri can see in the dark up to 60 feet, and have low-light vision (twice as far as a human in conditions of poor illumination, retaining the ability to distinguish color and detail).",
        category: "special-quality",
        source: `${ROF} — Fey'ri racial traits (pp. 119–120)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "feyri-flight",
        name: "Wings",
        description:
          "In their winged form, fey'ri may fly at a speed of 40 feet with poor maneuverability. Their land speed is 30 feet.",
        category: "special-quality",
        source: `${ROF} — Fey'ri racial traits (pp. 119–120)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "feyri-elven-immunities",
        name: "Elven Immunities",
        description:
          "Fey'ri are immune to magic sleep spells and effects, and gain a +2 racial bonus on Will saves against enchantment spells and effects.",
        category: "special-quality",
        source: `${ROF} — Fey'ri racial traits (pp. 119–120)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "feyri-alter-self",
        name: "Alter Self",
        description:
          "Fey'ri can use alter self at will to assume any humanoid form, and can remain in that form indefinitely (spell-like ability).",
        category: "special-quality",
        source: `${ROF} — Fey'ri racial traits (pp. 119–120)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "feyri-demonic-abilities",
        name: "Demonic Abilities",
        description:
          "Every fey'ri has four special abilities drawn from the following list: charm person (Sp) 1/day, clairaudience/clairvoyance (Sp) 1/day, damage reduction 10/+1, darkness (Sp) 1/day, detect thoughts (Sp) 1/day, dimension door (Sp) 1/day, enervation (Sp) 1/day, fire resistance 10, suggestion (Sp) 1/day, +2 racial bonus on saves against electricity, or +2 racial bonus on saves against poison. Spell-like abilities use the fey'ri's character level and Charisma-based DCs. A fey'ri can have only one of the three asterisked abilities in the book (damage reduction, dimension door, enervation), and a fey'ri with one of them has a level adjustment of +3 instead of +2.",
        category: "special-quality",
        source: `${ROF} — Fey'ri racial traits (pp. 119–120)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "feyri-elven-blood",
        name: "Elven Blood",
        description:
          "For all special abilities and effects, a fey'ri is considered an elf, including using or creating elven weapons and magic items with racially specific elven powers. Fey'ri are native outsiders.",
        category: "trait",
        source: `${ROF} — Fey'ri racial traits (pp. 119–120)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "feyri-languages",
        name: "Languages",
        description:
          "The fey'ri trait list does not print a languages line. The entry text describes fey'ri as relying on knowledge of the Abyssal tongue when dealing with fiends they summon, and they are of sun elf stock; assign languages accordingly.",
        category: "trait",
        source: `${ROF} — Fey'ri (pp. 118–120)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "tanarukk",
    name: "Tanarukk",
    ruleset: "core",
    source: `${ROF} — Chapter 8: Planetouched, Tanarukk (pp. 123–124)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 20,
    type: "Outsider",
    subtypes: ["Native", "Orc"],
    abilityModifiers: { str: 4, dex: 2, wis: -2, cha: -4 },
    favoredClass: "barbarian",
    levelAdjustment: 3,
    racialHitDice: 5,
    hitDie: "d8",
    naturalArmor: 4,
    traits: [
      {
        key: "tanarukk-darkvision",
        name: "Darkvision",
        description: "Tanarukks can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tanarukk-fire-resistance",
        name: "Fire Resistance",
        description: "Tanarukks have fire resistance 10.",
        category: "special-quality",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tanarukk-spell-resistance",
        name: "Spell Resistance",
        description:
          "A tanarukk has spell resistance of 14 + class level, as printed.",
        category: "special-quality",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tanarukk-weapon-proficiency",
        name: "Weapon Proficiency",
        description: "Tanarukks are proficient with all martial weapons.",
        category: "trait",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tanarukk-bite",
        name: "Bite",
        description:
          "A tanarukk may use his bite as a natural weapon, dealing 1d6 points of damage. He can attack with a weapon at his normal attack bonus and make a bite attack as a secondary attack (–5 penalty on the attack roll and half Strength bonus on the damage roll).",
        category: "special-attack",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tanarukk-control-flame",
        name: "Control Flame",
        description:
          "Once per day, a tanarukk can cause a nonmagical fire within 10 feet to diminish to the level of coals or flare to the brightness of daylight and double the normal radius of illumination, as a 5th-level sorcerer. The ability does not change the fire's heat output or fuel consumption and lasts 1 minute (spell-like ability).",
        category: "special-quality",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tanarukk-outsider-traits",
        name: "Outsider Hit Dice",
        description:
          "A tanarukk's 5d8 outsider Hit Dice provide base attack bonus +5 and base saves of Fort +4, Ref +4, and Will +4, skill points equal to (8 + Int modifier) × 8 with class skills Hide, Intimidate, Listen, Search, and Spot, and two feats (a typical tanarukk chooses Alertness and Weapon Focus [battleaxe]). Tanarukks are native outsiders.",
        category: "trait",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tanarukk-orc-blood",
        name: "Orc Blood",
        description:
          "For all special abilities and effects, a tanarukk is considered an orc, including using or creating orc weapons and magic items with racially specific orc powers.",
        category: "trait",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tanarukk-languages",
        name: "Languages",
        description:
          "Automatic languages: Abyssal, Orc, home region. Bonus languages: by region.",
        category: "trait",
        source: `${ROF} — Tanarukk racial traits (pp. 123–124)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "aarakocra",
    name: "Aarakocra",
    ruleset: "core",
    source: `${ROF} — Chapter 9: Minor Races, Aarakocra (pp. 130–131)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 20,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: -2, dex: 4 },
    favoredClass: "fighter",
    levelAdjustment: 2,
    naturalArmor: 1,
    skillBonuses: { listen: 2, spot: 2 },
    traits: [
      {
        key: "aarakocra-flight",
        name: "Flight",
        description:
          "Aarakocras have a fly speed of 90 feet with average maneuverability. Their land speed is 20 feet.",
        category: "special-quality",
        source: `${ROF} — Aarakocra racial traits (p. 131)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "aarakocra-natural-attacks",
        name: "Natural Attacks",
        description:
          "A flying aarakocra can attack with 2 talons, dealing 1d4 points of damage each, or use a weapon in his talons. An aarakocra on the ground can wield weapons in his wing-claws at his base attack bonus and attack with his bite as a secondary attack (–5 penalty on the attack roll and half Strength bonus on the damage roll), dealing 1d3 points of damage.",
        category: "special-attack",
        source: `${ROF} — Aarakocra racial traits (p. 131)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "aarakocra-skills",
        name: "Racial Skill Bonuses",
        description:
          "+2 racial bonus on Craft (any one), Knowledge (nature), Listen, and Spot checks. The Listen and Spot bonuses are in the record's skill bonuses; the Craft and Knowledge bonuses are specialty-specific and recorded here.",
        category: "trait",
        source: `${ROF} — Aarakocra racial traits (p. 131)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "aarakocra-weapon-proficiency",
        name: "Weapon Proficiency",
        description: "Aarakocras are proficient with the javelin.",
        category: "trait",
        source: `${ROF} — Aarakocra racial traits (p. 131)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "aarakocra-claustrophobic",
        name: "Claustrophobic",
        description:
          "Aarakocras suffer a –4 circumstance penalty on all attack rolls and skill checks when in an enclosed area.",
        category: "trait",
        source: `${ROF} — Aarakocra racial traits (p. 131)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "aarakocra-languages",
        name: "Languages",
        description:
          "Automatic languages: Common, Auran, home region. Bonus languages: Draconic, Elven, Orc, Sylvan. This book's entry prints no racial Hit Dice for aarakocra characters — the level adjustment note counts class levels + 2 only — so none are recorded.",
        category: "trait",
        source: `${ROF} — Aarakocra (pp. 130–131)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "dekanter-goblin",
    name: "Dekanter Goblin",
    ruleset: "core",
    source: `${ROF} — Chapter 9: Minor Races, Goblinoids (p. 137)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 20,
    type: "Monstrous Humanoid",
    subtypes: ["Goblinoid"],
    abilityModifiers: { str: 6, dex: 2, con: 4, int: 2, wis: 2, cha: -2 },
    favoredClass: "barbarian",
    levelAdjustment: 4,
    racialHitDice: 2,
    hitDie: "d8",
    naturalArmor: 4,
    traits: [
      {
        key: "dekanter-goblin-darkvision",
        name: "Darkvision",
        description: "Dekanter goblins can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${ROF} — Dekanter Goblin racial traits (p. 137)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "dekanter-goblin-fast-healing",
        name: "Fast Healing",
        description: "Dekanter goblins have fast healing 3.",
        category: "special-quality",
        source: `${ROF} — Dekanter Goblin racial traits (p. 137)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "dekanter-goblin-cold-resistance",
        name: "Cold Resistance",
        description: "Dekanter goblins have cold resistance 5.",
        category: "special-quality",
        source: `${ROF} — Dekanter Goblin racial traits (p. 137)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "dekanter-goblin-natural-attacks",
        name: "Natural Attacks",
        description:
          "A Dekanter goblin can attack with his horn and 2 claws. The horn deals 1d6 points of damage plus the character's Strength bonus, with ×3 damage on a critical hit. The claws are secondary attacks (–5 penalty on attack rolls, half Strength bonus on damage) dealing 1d4 points of damage. The character can attack with a weapon at his normal attack bonus and make a horn or single claw attack as a secondary attack.",
        category: "special-attack",
        source: `${ROF} — Dekanter Goblin racial traits (p. 137)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "dekanter-goblin-hit-dice",
        name: "Monstrous Humanoid Hit Dice",
        description:
          "A Dekanter goblin's 2d8 monstrous humanoid Hit Dice provide base attack bonus +2 and base saves of Fort +0, Ref +3, and Will +3, skill points equal to (2 + Int modifier, minimum 1) × 5 with class skills Climb, Intimidate, Jump, Listen, Sense Motive, and Spot, and one feat (a typical Dekanter goblin chooses Power Attack). Dekanter goblins are proficient with all simple weapons.",
        category: "trait",
        source: `${ROF} — Dekanter Goblin racial traits (p. 137)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "dekanter-goblin-languages",
        name: "Languages",
        description:
          "Automatic languages: Goblin, Undercommon, Common. Bonus languages: by region.",
        category: "trait",
        source: `${ROF} — Dekanter Goblin racial traits (p. 137)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "kir-lanan",
    name: "Kir-Lanan",
    ruleset: "core",
    source: `${ROF} — Chapter 9: Minor Races, Kir-Lanan (pp. 139–140)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: 4, dex: 2, wis: -2 },
    favoredClass: "fighter",
    levelAdjustment: 4,
    racialHitDice: 4,
    hitDie: "d8",
    naturalArmor: 3,
    skillBonuses: { hide: 4 },
    traits: [
      {
        key: "kir-lanan-flight",
        name: "Flight",
        description:
          "Kir-lanans have a fly speed of 90 feet with good maneuverability. Their land speed is 30 feet.",
        category: "special-quality",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "kir-lanan-darkvision",
        name: "Darkvision",
        description: "Kir-lanans can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "kir-lanan-claws",
        name: "Claws",
        description:
          "A kir-lanan can attack with 2 claws, dealing 1d4 points of damage each. She can attack with a one-handed weapon at her normal attack bonus and make a claw attack as a secondary attack (–5 penalty on the attack roll, half Strength bonus on the damage roll). Kir-lanans are proficient with all simple weapons and light armor.",
        category: "special-attack",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "kir-lanan-negative-energy-touch",
        name: "Negative Energy Touch",
        description:
          "Three times per day, a kir-lanan can use a touch attack similar to the chill touch spell: a successful melee touch attack deals 2d6 points of damage and 1 point of temporary Strength damage (Fortitude save DC 12 + Cha modifier negates the Strength damage). The kir-lanan heals the same number of points of damage as she deals with this attack, up to her normal maximum hit points. She can use this power with a claw attack, but does not regain hit points for the claw damage (supernatural ability).",
        category: "special-attack",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "kir-lanan-ray-of-enfeeblement",
        name: "Ray of Enfeeblement",
        description:
          "Three times per day, a kir-lanan can use ray of enfeeblement as if the spell had been cast by a 4th-level sorcerer (spell-like ability).",
        category: "special-quality",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "kir-lanan-rebuke-undead",
        name: "Rebuke Undead",
        description:
          "A kir-lanan can rebuke or command undead three times per day as an evil cleric with as many levels as the kir-lanan has Hit Dice (supernatural ability). Kir-lanan spellcasters can only manipulate arcane, never divine, magic.",
        category: "special-quality",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "kir-lanan-positive-energy",
        name: "Harmed by Positive Energy",
        description:
          "A kir-lanan suffers damage from cure wounds spells, holy water, and blessed weapons just as undead do, and is healed by negative energy (inflict wounds spells) instead. Since kir-lanans don't have souls, they can only be brought back from the dead with a wish or miracle spell, just like an outsider.",
        category: "trait",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "kir-lanan-hit-dice",
        name: "Monstrous Humanoid Hit Dice",
        description:
          "A kir-lanan's 4d8 monstrous humanoid Hit Dice provide base attack bonus +4 and base saves of Fort +1, Ref +4, and Will +4, skill points equal to (2 + Int modifier, minimum 1) × 7 with class skills Escape Artist, Hide, Listen, Move Silently, Spot, and Use Magic Device, and 2 feats (a typical kir-lanan chooses Flyby Attack and Weapon Focus [claw]).",
        category: "trait",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "kir-lanan-languages",
        name: "Languages",
        description:
          "Automatic languages: Kir-Lanan, Common. Bonus languages: by region.",
        category: "trait",
        source: `${ROF} — Kir-Lanan racial traits (pp. 139–140)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "lizardfolk",
    name: "Lizardfolk",
    ruleset: "core",
    source: `${ROF} — Chapter 9: Minor Races, Lizardfolk (p. 141)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Reptilian"],
    abilityModifiers: { str: 2, con: 2, int: -2 },
    favoredClass: "druid",
    levelAdjustment: 1,
    racialHitDice: 2,
    hitDie: "d8",
    naturalArmor: 5,
    skillBonuses: { balance: 4, jump: 4, swim: 4 },
    traits: [
      {
        key: "lizardfolk-darkvision",
        name: "Darkvision",
        description: "Lizardfolk can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${ROF} — Lizardfolk racial traits (p. 141)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "lizardfolk-natural-attacks",
        name: "Natural Attacks",
        description:
          "A lizardfolk can attack with 2 claws and a bite. The claws deal 1d4 points of damage, and the bite is a secondary attack (–5 penalty on the attack roll, half Strength bonus on the damage roll) that deals 1d4 points of damage. A lizardfolk can attack with a weapon at his normal attack bonus and make either a bite or a claw attack as a secondary attack.",
        category: "special-attack",
        source: `${ROF} — Lizardfolk racial traits (p. 141)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "lizardfolk-hold-breath",
        name: "Hold Breath",
        description:
          "A lizardfolk can hold his breath for a number of rounds equal to 4 × his Constitution score before he is at risk of drowning.",
        category: "special-quality",
        source: `${ROF} — Lizardfolk racial traits (p. 141)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "lizardfolk-proficiency",
        name: "Weapon Proficiency",
        description:
          "Lizardfolk are proficient with all simple weapons, shields, and barbed darts.",
        category: "trait",
        source: `${ROF} — Lizardfolk racial traits (p. 141)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "lizardfolk-hit-dice",
        name: "Humanoid Hit Dice",
        description:
          "A lizardfolk's 2d8 humanoid Hit Dice provide base attack bonus +1 and base saves of Fort +0, Ref +3, and Will +0, skill points equal to (2 + Int modifier, minimum 1) × 5 with class skills Balance, Jump, and Swim, and one feat (a typical lizardfolk chooses Multiattack).",
        category: "trait",
        source: `${ROF} — Lizardfolk racial traits (p. 141)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "lizardfolk-languages",
        name: "Languages",
        description:
          "Automatic languages: Draconic, home region. Bonus languages: Common, by region.",
        category: "trait",
        source: `${ROF} — Lizardfolk racial traits (p. 141)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "wemic",
    name: "Wemic",
    ruleset: "core",
    source: `${ROF} — Chapter 9: Minor Races, Wemic (pp. 149–150)`,
    sourceUrl: ROF_PATH,
    size: "Large",
    baseSpeed: 40,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: 8, dex: 2, con: 2, cha: -2 },
    favoredClass: "barbarian",
    levelAdjustment: 3,
    racialHitDice: 5,
    hitDie: "d8",
    naturalArmor: 4,
    skillBonuses: { jump: 8 },
    traits: [
      {
        key: "wemic-size",
        name: "Large Size",
        description:
          "As Large creatures, wemics suffer a –1 size penalty on attack rolls and AC and a –4 size penalty on Hide checks, but can use larger weapons and have lifting and carrying limits twice those of Medium-size characters. A wemic's facing is 10 feet and its reach is 5 feet (a Large long creature).",
        category: "trait",
        source: `${ROF} — Wemic racial traits (pp. 149–150)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "wemic-darkvision",
        name: "Darkvision",
        description: "Wemics can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${ROF} — Wemic racial traits (pp. 149–150)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "wemic-claws",
        name: "Claws",
        description:
          "Wemics can make 2 claw attacks, dealing 1d6 points of damage each. A wemic can attack with a one-handed weapon at his normal attack bonus and make a claw attack as a secondary attack (–5 penalty on the attack roll, half Strength bonus on the damage roll). Wemics are proficient with all simple weapons and shields.",
        category: "special-attack",
        source: `${ROF} — Wemic racial traits (pp. 149–150)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "wemic-hit-dice",
        name: "Monstrous Humanoid Hit Dice",
        description:
          "A wemic's 5d8 monstrous humanoid Hit Dice provide base attack bonus +5 and base saves of Fort +1, Ref +4, and Will +4, skill points equal to (2 + Int modifier, minimum 1) × 8 with class skills Hide, Jump, Listen, Move Silently, Spot, and Survival, and 2 feats (a typical wemic chooses Alertness and Great Fortitude).",
        category: "trait",
        source: `${ROF} — Wemic racial traits (pp. 149–150)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "wemic-languages",
        name: "Languages",
        description:
          "Automatic languages: Sylvan, Common. Bonus languages: by region.",
        category: "trait",
        source: `${ROF} — Wemic racial traits (pp. 149–150)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "yuan-ti-pureblood",
    name: "Yuan-ti Pureblood",
    ruleset: "core",
    source: `${ROF} — Chapter 9: Minor Races, Yuan-ti (pp. 152–153)`,
    sourceUrl: ROF_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { dex: 2, int: 4, wis: 4, cha: 4 },
    favoredClass: "ranger",
    levelAdjustment: 5,
    racialHitDice: 6,
    hitDie: "d8",
    naturalArmor: 1,
    traits: [
      {
        key: "yuan-ti-pureblood-darkvision",
        name: "Darkvision",
        description: "Yuan-ti purebloods can see in the dark up to 60 feet.",
        category: "special-quality",
        source: `${ROF} — Yuan-ti Pureblood racial traits (pp. 152–153)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "yuan-ti-pureblood-spell-resistance",
        name: "Spell Resistance",
        description:
          "A yuan-ti pureblood has spell resistance of 16 + class level, as printed.",
        category: "special-quality",
        source: `${ROF} — Yuan-ti Pureblood racial traits (pp. 152–153)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "yuan-ti-pureblood-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "1/day each — animal trance, cause fear, deeper darkness, entangle, neutralize poison, suggestion, and baleful polymorph, as if cast by an 8th-level sorcerer (save DC 10 + Cha modifier + spell level).",
        category: "special-quality",
        source: `${ROF} — Yuan-ti Pureblood racial traits (pp. 152–153)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "yuan-ti-pureblood-psionics",
        name: "Psionics",
        description:
          "A yuan-ti pureblood can produce the following effects at will (spell-like abilities): detect poison (as the spell cast by a 6th-level sorcerer); alternate form — assume the form of a Tiny to Large viper, like a polymorph spell cast by an 8th-level sorcerer, except the yuan-ti does not regain hit points for changing forms and can only assume viper forms; chameleon power — change coloration to match her surroundings, gaining a +8 circumstance bonus on Hide checks; produce acid — exude acid dealing 1d6 points of damage to anything she touches (the acid is inert once it leaves her body); and aversion — target one person within 30 feet, who must succeed at a Will save (DC 17) or gain an aversion to snakes for 10 minutes, as an antipathy spell cast by a 16th-level sorcerer.",
        category: "special-quality",
        source: `${ROF} — Yuan-ti Pureblood racial traits (pp. 152–153)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "yuan-ti-pureblood-hit-dice",
        name: "Monstrous Humanoid Hit Dice",
        description:
          "A pureblood's 6d8 monstrous humanoid Hit Dice provide base attack bonus +6 and base saves of Fort +2, Ref +5, and Will +5, skill points equal to (2 + Int modifier) × 9 with class skills Concentration, Craft, Knowledge, Disguise, Hide, Listen, and Spot, and 3 feats (a typical pureblood chooses Dodge, Expertise, and Improved Initiative). Yuan-ti gain Alertness and Blind-Fight as bonus feats. Purebloods are proficient with all simple weapons, the scimitar, and the longbow, and with light armor and shields.",
        category: "trait",
        source: `${ROF} — Yuan-ti Pureblood racial traits (pp. 152–153)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "yuan-ti-pureblood-languages",
        name: "Languages",
        description:
          "Automatic languages: Common, Yuan-Ti, home region. Bonus languages: by region, plus Abyssal and Draconic.",
        category: "trait",
        source: `${ROF} — Yuan-ti Pureblood racial traits (pp. 152–153)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
];
