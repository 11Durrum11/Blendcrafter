/**
 * Races of Stone prestige classes: all fifteen from Chapter 5 of
 * Races of Stone (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Stone.pdf
 * Progression tables are the book's printed tables. Prerequisites
 * are free text (shown in the UI, soft-checked only), matching
 * the other packs. The book is a 3.5 source, so no skill-name
 * mapping was needed.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const G5 = [2, 3, 3, 4, 4]; // good save, 5 levels
const P5 = [0, 0, 1, 1, 1]; // poor save, 5 levels
const FULL5 = [1, 2, 3, 4, 5];
const TQ5 = [0, 1, 2, 3, 3];
const HALF5 = [0, 1, 1, 2, 2];
const G3 = [2, 3, 3]; // good save, 3 levels
const P3 = [0, 0, 1]; // poor save, 3 levels
const TQ3 = [0, 1, 2];

const ROS = "Races of Stone";
const ROS_PATH = "/A POC PC related/5.Splat/Races of series/Races of Stone.pdf";
const CH5 = `${ROS} — Chapter 5: Prestige Classes`;

export const RACES_OF_STONE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "battlesmith",
    name: "Battlesmith",
    ruleset: "core",
    source: `${CH5} — Battlesmith (p. 97)`,
    sourceUrl: ROS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: ["Appraise", "Concentration", "Craft", "Intimidate", "Knowledge (religion)"],
    prerequisites: [
      "Race: Dwarf",
      "Base Attack Bonus: +5",
      "Skills: Craft (armorsmithing) or Craft (weaponsmithing) 10 ranks",
      "Feats: Armor Proficiency (heavy), Endurance, Weapon Focus (warhammer)",
      "Special: Must have created a dwarvencraft weapon and used it in battle",
    ],
    features: [
      {
        key: "battlesmith-forge-secrets",
        name: "Forge Secrets",
        description:
          "1st: one with the hammer (add your Wisdom bonus to damage with a warhammer you crafted yourself) and secrets of the forge (Craft Magic Arms and Armor as a bonus feat; multiply your battlesmith level by 3 for the effective caster level when crafting arms and armor). 2nd: flesh of my flesh +1 (sacred bonus to AC while wearing heavy armor you crafted yourself). 3rd: forged in fire (ignore fatigue and exhaustion for a number of hours equal to your class level). 4th: flesh of my flesh +2. 5th: tempered in blood (once per day, Fortitude save DC 10 + damage dealt against a single melee blow to take only half damage).",
        category: "trait",
        source: `${CH5} — Battlesmith (pp. 97–98)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "blade-bravo",
    name: "Blade Bravo",
    ruleset: "core",
    source: `${CH5} — Blade Bravo (p. 99)`,
    sourceUrl: ROS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: ["Balance", "Bluff", "Climb", "Concentration", "Escape Artist", "Intimidate", "Jump", "Perform", "Sense Motive", "Tumble"],
    prerequisites: [
      "Race: Gnome",
      "Base Attack Bonus: +5",
      "Skills: Bluff 4 ranks",
      "Feats: Combat Expertise, Weapon Finesse, Weapon Focus (rapier)",
    ],
    features: [
      {
        key: "blade-bravo-dueling",
        name: "Dueling Arts",
        description:
          "1st: flourish (add your class level to Bluff checks when feinting) and Goad as a bonus feat (save DC +2 with 5 or more ranks in Bluff). 2nd: mobile fighting (+1 dodge bonus to AC in any round you move at least 5 feet). 3rd, 6th, 9th: bonus dueling or combat feat from the class list. 4th: melee sneak attack +1d6 (8th: +2d6; melee only, against foes denied Dexterity or flanked). 5th: size advantage (+2 dodge bonus to AC per size category of difference against larger foes). 7th: small but deadly (+4 to confirm critical hits with melee weapons against larger creatures). 10th: lethal riposte (an opponent who misses you with a melee attack provokes an attack of opportunity, once per round, against which he loses his Dexterity bonus to AC). All benefits apply only in light armor or no armor.",
        category: "trait",
        source: `${CH5} — Blade Bravo (pp. 99–100)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "cragtop-archer",
    name: "Cragtop Archer",
    ruleset: "core",
    source: `${CH5} — Cragtop Archer (p. 101)`,
    sourceUrl: ROS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: ["Balance", "Climb", "Craft", "Hide", "Jump", "Knowledge (nature)", "Profession", "Ride", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +6",
      "Skills: Climb 10 ranks, Spot 5 ranks, Survival 5 ranks",
      "Feats: Far Shot, Mountain Warrior",
    ],
    features: [
      {
        key: "cragtop-archer-shots",
        name: "Mountain Shots",
        description:
          "1st: adept climber and farsight (half the normal penalties on Spot checks for distance and on ranged attacks per range increment). 2nd: strike from above. 3rd: arcing shot. 4th: horizon shot. 5th: mountain skin.",
        category: "trait",
        source: `${CH5} — Cragtop Archer (pp. 101–102)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "dawncaller",
    name: "Dawncaller",
    ruleset: "core",
    source: `${CH5} — Dawncaller (p. 103)`,
    sourceUrl: ROS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: ["Balance", "Climb", "Craft", "Hide", "Jump", "Listen", "Move Silently", "Perform", "Sense Motive", "Spot", "Survival"],
    prerequisites: [
      "Race: Goliath",
      "Skills: Perform (sing) 8 ranks, Spot 4 ranks, Listen 4 ranks",
      "Special: Bardic music ability",
    ],
    features: [
      {
        key: "dawncaller-songs",
        name: "Tribal Songs",
        description:
          "1st: bardic music and darkvision 60 feet. 2nd: inspire courage. 4th: inspire stamina (with 12 or more ranks in Perform (sing), allies within 30 feet who hear the song ignore fatigue and exhaustion while it lasts and for 1 minute per class level after). 6th: song of warding (with 14 or more ranks in Perform (sing), a 5-minute song creates an antipathy effect lasting 2 hours per class level). 8th: inspire fury (with 16 or more ranks in Perform (sing), allies within 30 feet can enter a barbarian-like rage). 10th: song of the mountain.",
        category: "trait",
        source: `${CH5} — Dawncaller (pp. 103–104)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "deepwarden",
    name: "Deepwarden",
    ruleset: "core",
    source: `${CH5} — Deepwarden (p. 105)`,
    sourceUrl: ROS_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Decipher Script", "Escape Artist", "Handle Animal", "Heal", "Hide", "Jump", "Knowledge (dungeoneering)", "Knowledge (geography)", "Listen", "Move Silently", "Search", "Speak Language", "Spot", "Survival", "Swim", "Use Rope"],
    prerequisites: [
      "Race: Dwarf",
      "Base Attack Bonus: +5",
      "Skills: Climb 5 ranks, Heal 5 ranks, Jump 5 ranks, Knowledge (dungeoneering) 5 ranks, Survival 5 ranks",
      "Feats: Endurance",
    ],
    features: [
      {
        key: "deepwarden-underground",
        name: "Warden of the Deep",
        description:
          "1st: track and trap sense +1. 2nd: stone warden (add your Constitution bonus to AC instead of your Dexterity bonus). 3rd: animal messenger. 4th: trap sense +2 and uncanny dodge. 5th: stubborn mind (if you fail a save against an enchantment effect, retry once 1 round later at the same DC). 6th: sending. 7th: swift tracker and trap sense +3. 8th: improved uncanny dodge. 9th: greater animal messenger. 10th: trap sense +4.",
        category: "trait",
        source: `${CH5} — Deepwarden (pp. 105–106)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "divine-prankster",
    name: "Divine Prankster",
    ruleset: "core",
    source: `${CH5} — Divine Prankster (p. 107)`,
    sourceUrl: ROS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF, P, G, G),
    classSkills: ["Bluff", "Concentration", "Diplomacy", "Escape Artist", "Forgery", "Gather Information", "Heal", "Hide", "Knowledge (religion)", "Listen", "Perform", "Search", "Sense Motive", "Sleight of Hand", "Spot"],
    prerequisites: [
      "Race: Gnome",
      "Skills: Bluff 8 ranks, Perform (comedy) 8 ranks, Sleight of Hand 8 ranks",
      "Spells: Able to cast 2nd-level divine spells",
      "Special: Must be a worshiper of Garl Glittergold",
      "Special: Spells per day advance as +1 level of an existing spellcasting class at every level",
    ],
    features: [
      {
        key: "divine-prankster-comedy",
        name: "Comedic Performance",
        description:
          "1st: comedic performance and inspire courage. 2nd: infuse figment (spend a turn or rebuke attempt to raise the Will save DC to disbelieve one of your illusion (figment) spells by 10). 3rd: disguise spell (somatic). 5th: enrage enemies (with 13 or more ranks in Perform (comedy), creatures within 90 feet who can see or hear you must save or be enraged; one target per three class levels). 7th: zigzag. 9th: disguise spell (verbal). 10th: killing joke (with 18 or more ranks in Perform (comedy), three rounds of performance force a target who hears and understands you to die unless it succeeds on a Will save, DC 10 + your divine prankster level + your Charisma modifier).",
        category: "trait",
        source: `${CH5} — Divine Prankster (pp. 107–109)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "earth-dreamer",
    name: "Earth Dreamer",
    ruleset: "core",
    source: `${CH5} — Earth Dreamer (p. 110)`,
    sourceUrl: ROS_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF5, G5, P5, G5),
    classSkills: ["Concentration", "Craft", "Heal", "Knowledge (dungeoneering)", "Knowledge (nature)", "Listen", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (nature) 5 ranks, Spellcraft 10 ranks",
      "Feats: Earth Sense",
      "Special: Able to cast 1st-level spells",
      "Special: Spells per day advance as +1 level of an existing spellcasting class at every level",
    ],
    features: [
      {
        key: "earth-dreamer-earth-sense",
        name: "Earth Attunement",
        description:
          "1st: earth friend. 2nd: earth dream (once per day, a 10-minute dream-divination, usable only for questions connected to mountains or within 50 miles of a mountain; 76% chance of a correct, cryptic answer). 3rd: lesser tremorsense (tremorsense 10 feet; your Earth Sense feat still functions beyond that range). 4th: earth sight (see through stone, dirt, or almost any earth except metal out to 30 feet, for a number of rounds equal to 3 + your Constitution modifier). 5th: earth glide (move through earth like an earth elemental, without leaving a tunnel).",
        category: "trait",
        source: `${CH5} — Earth Dreamer (pp. 110–111)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "goliath-liberator",
    name: "Goliath Liberator",
    ruleset: "core",
    source: `${CH5} — Goliath Liberator (p. 112)`,
    sourceUrl: ROS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: ["Climb", "Craft", "Heal", "Hide", "Jump", "Listen", "Move Silently", "Search", "Spot", "Survival", "Use Rope"],
    prerequisites: [
      "Race: Goliath",
      "Base Attack Bonus: +7",
      "Skills: Hide 5 ranks, Move Silently 5 ranks",
      "Feats: Track",
      "Special: Must have participated in the successful rescue of captives held by giants, or must have been imprisoned by giants and escaped",
    ],
    features: [
      {
        key: "goliath-liberator-anti-giant",
        name: "Anti-Giant Hunter",
        description:
          "1st: favored enemy (giants) +2. 2nd: avoid thrown weapons. 3rd: improved trip. 4th: avoid reach. 5th: favored enemy (giants) +4.",
        category: "trait",
        source: `${CH5} — Goliath Liberator (pp. 112–113)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "iron-mind",
    name: "Iron Mind",
    ruleset: "core",
    source: `${CH5} — Iron Mind (p. 114)`,
    sourceUrl: ROS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Jump", "Knowledge (psionics)", "Profession", "Psicraft", "Sense Motive", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +3",
      "Skills: Concentration 8 ranks",
      "Feats: Armor Proficiency (heavy), Invest Armor, Iron Will",
      "Powers: Able to manifest one 1st-level psionic power",
      "Special: Powers advance as +1 level of an existing manifesting class at levels 2–5 and 7–10 (not at 1st or 6th)",
    ],
    features: [
      {
        key: "iron-mind-armored-will",
        name: "Armored Mind",
        description:
          "1st: armored mind 1/day. 2nd: damage reduction 1/—. 3rd: mind over body 1/day (as an immediate action, use your Will save modifier in place of your Fortitude or Reflex save modifier; the save is still treated as a Fortitude or Reflex save). 4th: armored mind 2/day. 5th: damage reduction 2/— and mettle of will. 6th: mind over body 2/day. 7th: armored mind 3/day. 8th: damage reduction 3/— and lend resolve (an ally can use your Will save modifier for a saving throw, decided before the ally rolls). 9th: mind over body 3/day. 10th: armored mind 4/day and barbed mind (any time you succeed on a Will save against a mind-affecting effect, the creature that caused the save takes 1d6 points of nonlethal damage and 1 point of Wisdom damage; this applies only while you wear heavy armor). Damage reduction improves by 1 every three levels above 2nd (to 2/— at 5th and 3/— at 8th).",
        category: "trait",
        source: `${CH5} — Iron Mind (pp. 114–115)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "peregrine-runner",
    name: "Peregrine Runner",
    ruleset: "core",
    source: `${CH5} — Peregrine Runner (p. 116)`,
    sourceUrl: ROS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Diplomacy", "Gather Information", "Hide", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Profession", "Search", "Sense Motive", "Speak Language", "Spot", "Swim", "Tumble", "Use Rope"],
    prerequisites: [
      "Race: Goliath",
      "Base Attack Bonus: +4",
      "Skills: Climb 9 ranks, Diplomacy 4 ranks, Handle Animal 4 ranks, Jump 9 ranks",
      "Feats: Endurance, Run",
    ],
    features: [
      {
        key: "peregrine-runner-messenger",
        name: "Tribal Messenger",
        description:
          "1st: mountain stride and peregrine companion. 2nd: skirmish +1d6. 3rd: great stamina and slow fall 20 feet. 4th: climb speed 20 feet and skirmish +1/+1d6. 5th: fast movement (your land speed is faster than the norm for your race by 10 feet, in no armor or light armor and not carrying a medium or heavy load) and slow fall 30 feet. 6th: skirmish +1/+2d6. 7th: slow fall 40 feet. 8th: climb speed 40 feet and skirmish +2/+2d6. 9th: inexhaustible stamina and slow fall 50 feet. 10th: skirmish +2/+3d6.",
        category: "trait",
        source: `${CH5} — Peregrine Runner (pp. 116–117)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "runesmith",
    name: "Runesmith",
    ruleset: "core",
    source: `${CH5} — Runesmith (p. 118)`,
    sourceUrl: ROS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF5, G5, P5, G5),
    classSkills: ["Appraise", "Concentration", "Craft", "Decipher Script", "Knowledge (arcana)", "Spellcraft"],
    prerequisites: [
      "Race: Dwarf",
      "Skills: Concentration 5 ranks, Craft (stoneworking) 8 ranks",
      "Feats: Armor Proficiency (heavy), Scribe Scroll",
      "Spells: Able to cast 1st-level arcane spells",
      "Special: Spells per day advance as +1 level of an existing arcane spellcasting class at every level",
    ],
    features: [
      {
        key: "runesmith-rune-magic",
        name: "Rune Magic",
        description:
          "1st: rune magic (prepare arcane spells in rune form, replacing somatic components with runes so armor causes no arcane spell failure). 2nd: stonecraft expertise (bonus equal to your class level on Appraise and Craft checks related to stone objects). 3rd: share runes (prepare a limited number of your rune-form spells so another creature can cast them, at +2 spell levels, using your caster level; up to your Constitution modifier per day). 5th: permanent rune (inscribe one chosen spell as a permanent rune on your flesh, usable twice per day as a spell-like ability, at the cost of a permanently sacrificed spell slot one level higher).",
        category: "trait",
        source: `${CH5} — Runesmith (pp. 118–119)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "shadowcraft-mage",
    name: "Shadowcraft Mage",
    ruleset: "core",
    source: `${CH5} — Shadowcraft Mage (p. 120)`,
    sourceUrl: ROS_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Bluff", "Concentration", "Disguise", "Hide", "Knowledge (arcana)", "Move Silently", "Perform", "Search", "Spellcraft"],
    prerequisites: [
      "Race: Gnome",
      "Skills: Bluff 4 ranks, Hide 4 ranks",
      "Feats: Spell Focus (illusion)",
      "Spells: Able to cast at least three illusion spells",
      "Special: Spells per day advance as +1 level of an existing spellcasting class at every level",
    ],
    features: [
      {
        key: "shadowcraft-mage-shadows",
        name: "Shadow Illusions",
        description:
          "1st: cloak of shadow (while it is active you can make Hide checks as if you had concealment, and attacks against you have a miss chance that grows with level, to a maximum of 40% at 5th level; it does not function in daylight and counts as a 3rd-level darkness effect). 2nd: silent illusion (all illusion spells you cast no longer require a verbal component, at no change to level or casting time). 3rd: shadow illusion. 4th: extended illusion. 5th: powerful shadow magic.",
        category: "trait",
        source: `${CH5} — Shadowcraft Mage (pp. 120–121)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "stoneblessed",
    name: "Stoneblessed",
    ruleset: "core",
    source: `${CH5} — Stoneblessed (p. 122)`,
    sourceUrl: ROS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ3, G3, P3, P3),
    classSkills: ["Climb", "Craft", "Jump", "Profession"],
    prerequisites: [
      "Creature Type: Giant, humanoid, or monstrous humanoid",
      "Skills: Appraise 2 ranks, Craft (stoneworking) 5 ranks",
      "Special: Must be able to speak Dwarven, Gnome, or Goliath (matching the chosen race), as well as Terran",
      "Special: Must be invited to become a stoneblessed by a member of the chosen race, usually after living with that race for several years or completing a great task for it",
    ],
    features: [
      {
        key: "stoneblessed-bond",
        name: "Stonebond",
        description:
          "1st: stonebond (choose one race of stone to bond with — dwarf, gnome, or goliath — gaining additional class skills based on the chosen race; a goliath-bonded stoneblessed gains a +2 bonus on Sense Motive checks and can engage in accelerated climbing without the –5 penalty). 2nd: racial battle technique (+4 dodge bonus to Armor Class against monsters of the giant type, plus a +1 bonus on attack rolls based on the bond: dwarf-bonded against orcs and goblinoids, gnome-bonded against kobolds and goblinoids, goliath-bonded against giants). 3rd: stoneborn (a permanent +2 increase to Constitution, and for all effects related to race you are considered a member of the race you bonded with — including vulnerability to effects that affect that race).",
        category: "trait",
        source: `${CH5} — Stoneblessed (pp. 122–123)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "stonedeath-assassin",
    name: "Stonedeath Assassin",
    ruleset: "core",
    source: `${CH5} — Stonedeath Assassin (p. 124)`,
    sourceUrl: ROS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ5, P5, G5, P5),
    classSkills: ["Balance", "Climb", "Decipher Script", "Disable Device", "Escape Artist", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Open Lock", "Search", "Spot", "Survival", "Tumble", "Use Rope"],
    prerequisites: [
      "Creature Type: Goblinoid subtype",
      "Base Attack Bonus: +3",
      "Skills: Hide 8 ranks, Move Silently 8 ranks",
    ],
    features: [
      {
        key: "stonedeath-assassin-stone",
        name: "Stone Assassin",
        description:
          "1st: meld into stone and trapfinding (find, disarm, or bypass traps with a DC higher than 20, using Search to find and Disable Device to disarm magic traps at DC 25 + the level of the spell used to create the trap). 2nd: sneak attack +1d6 and stoneskulk. 3rd: corrupt stone. 4th: sneak attack +2d6. 5th: stonedeath strike.",
        category: "trait",
        source: `${CH5} — Stonedeath Assassin (pp. 124–126)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
  {
    id: "stonespeaker-guardian",
    name: "Stonespeaker Guardian",
    ruleset: "core",
    source: `${CH5} — Stonespeaker Guardian (p. 127)`,
    sourceUrl: ROS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ5, G5, P5, G5),
    classSkills: ["Appraise", "Climb", "Craft", "Intimidate", "Knowledge (nature)", "Knowledge (religion)", "Listen", "Search", "Spot", "Survival"],
    prerequisites: [
      "Race: Feral gargun or goliath",
      "Skills: Knowledge (nature) 6 ranks, Survival 8 ranks",
      "Feats: Endurance, Stone Form",
      "Special: Wild shape ability",
      "Special: Spells per day advance as +1 level of an existing divine spellcasting class at every level",
    ],
    features: [
      {
        key: "stonespeaker-guardian-stone-form",
        name: "Guardian of Stone",
        description:
          "1st: stony hide. 2nd: wild shape +1/day. 3rd: stoneslam attack (the slam attacks of a stonespeaker guardian under the effect of the Stone Form feat deal damage as if she were one size category larger — a Medium guardian deals 2d6 instead of 1d8). 4th: fortification (when a critical hit or sneak attack is scored on you, a 50% chance it is negated and damage is rolled normally) and wild shape +1/day. 5th: earth glide (while under the effect of the Stone Form feat, glide through stone, dirt, or almost any earth except metal at half speed, leaving no tunnel or hole) and Earth Master as a bonus feat (see Chapter 6).",
        category: "trait",
        source: `${CH5} — Stonespeaker Guardian (pp. 127–128)`,
        sourceUrl: ROS_PATH,
      },
    ],
  },
];
