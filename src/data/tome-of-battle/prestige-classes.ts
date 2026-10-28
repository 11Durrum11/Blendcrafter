/**
 * Tome of Battle prestige classes: all eight from Chapter 5 of
 * Tome of Battle: The Book of Nine Swords (Wizards of the Coast).
 * Built 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /a poc dm related/desktop/Sourcebooks/Tome of Battle - The Book of Nine Swords (oef, act, bm, hq) (WTC953787200).pdf
 * The PDF has a full text layer; progression tables, class-skill
 * lists, and entry requirements were read from Tables 5–1
 * through 5–8 and the printed requirements blocks. Maneuver and
 * stance advancement is summarized in each class's feature text
 * (maneuvers are not modeled, as spells are not modeled for
 * spellcasters). Prerequisites are free text (shown in the UI,
 * soft-checked only), matching the other packs.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const G5 = [2, 3, 3, 4, 4]; // good save, 5 levels
const P5 = [0, 0, 1, 1, 1]; // poor save, 5 levels
const TQ5 = [0, 1, 2, 3, 3];

const TOB = "Tome of Battle: The Book of Nine Swords";
const TOB_PATH = "/a poc dm related/desktop/Sourcebooks/Tome of Battle - The Book of Nine Swords (oef, act, bm, hq) (WTC953787200).pdf";
const CH5 = `${TOB} — Chapter 5: Prestige Classes`;

export const TOME_OF_BATTLE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "bloodclaw-master",
    name: "Bloodclaw Master",
    ruleset: "core",
    source: `${CH5} — Bloodclaw Master (pp. 96–99)`,
    sourceUrl: TOB_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ5, G5, G5, P5),
    classSkills: ["Balance", "Climb", "Handle Animal", "Hide", "Jump", "Knowledge (nature)", "Listen", "Martial Lore", "Move Silently", "Spot", "Survival"],
    prerequisites: [
      "Skills: Jump 9 ranks",
      "Feats: Multiattack or Two-Weapon Fighting",
      "Martial Maneuvers: Must know three Tiger Claw maneuvers",
    ],
    features: [
      {
        key: "bloodclaw-master-features",
        name: "Bloodclaw Master Features",
        category: "trait",
        description:
          "A Tiger Claw adept who embraces his inner beast. Maneuvers known +1 at 1st, 3rd, and 5th level; maneuvers readied +1 at 3rd (Tiger Claw maneuvers; maneuvers are not modeled here). 1st: shifting 1/day (as the shifter ability, lasting Con modifier + class level rounds; 2/day at 3rd, 3/day at 5th) and claws of the beast (reduced two-weapon fighting penalties when attacking with two daggers or Tiger Claw weapons). 2nd: superior two-weapon fighting and tiger claw synergy (stance). 3rd: pouncing strike and low-light vision. 4th: tiger claw synergy (strike). 5th: rending claws and scent.",
        source: `${CH5} — Bloodclaw Master (pp. 96–99; Table 5–1)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "bloodstorm-blade",
    name: "Bloodstorm Blade",
    ruleset: "core",
    source: `${CH5} — Bloodstorm Blade (pp. 100–104)`,
    sourceUrl: TOB_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Balance", "Concentration", "Craft", "Intimidate", "Jump", "Martial Lore", "Spot", "Tumble"],
    prerequisites: [
      "Skills: Balance 8 ranks",
      "Feats: Point Blank Shot",
      "Martial Maneuvers: Must know one Iron Heart strike and one Iron Heart stance",
    ],
    features: [
      {
        key: "bloodstorm-blade-features",
        name: "Bloodstorm Blade Features",
        category: "trait",
        description:
          "A master of thrown weapons whose blades return to his hand. This class grants no new maneuvers known (see Chapter 5's advancing-martial-progression rules). 1st: returning attacks (weapons you throw gain the returning property), Throw Anything as a bonus feat, and weapon aptitude. 2nd: martial throw (use melee attack bonuses and abilities with thrown weapons) and thunderous throw (add your Strength bonus on thrown weapon attacks at range). Bonus fighter feat at 3rd, 6th, and 9th. 4th: lightning ricochet (a thrown weapon returns fast enough to attack again in the same round). 5th: blood wind ricochet (attack foes around corners and behind cover). 7th: eye of the storm. 8th: blood rain. 10th: blade storm (attack every foe in range with thrown weapons).",
        source: `${CH5} — Bloodstorm Blade (pp. 100–104; Table 5–2)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "deepstone-sentinel",
    name: "Deepstone Sentinel",
    ruleset: "core",
    source: `${CH5} — Deepstone Sentinel (pp. 105–108)`,
    sourceUrl: TOB_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ5, G5, P5, P5),
    classSkills: ["Balance", "Concentration", "Craft", "Intimidate", "Knowledge (dungeoneering)", "Listen", "Martial Lore", "Spot"],
    prerequisites: [
      "Race: Dwarf",
      "Base Attack Bonus: +10",
      "Skills: Balance 13 ranks",
      "Feats: Power Attack or Stone Power",
      "Martial Maneuvers: Must know at least two Stone Dragon maneuvers and one Stone Dragon stance",
    ],
    features: [
      {
        key: "deepstone-sentinel-features",
        name: "Deepstone Sentinel Features",
        category: "trait",
        description:
          "A dwarf defender bound to the Stone Dragon discipline and the living rock. Maneuvers known +1 at 1st, 3rd, and 5th level; maneuvers readied +1 at 3rd (Stone Dragon; maneuvers are not modeled here). 1st: mountain fortress stance (while in a Stone Dragon stance, the squares around you become difficult terrain for your enemies) and passwall as a spell-like ability once per day per class level. 2nd: crashing mountain juggernaut. 3rd: indomitable redoubt. 4th: stone curse and dragon's tooth (raise a pillar of stone from natural earth within 60 feet). 5th: awaken the stone dragon (a localized earthquake).",
        source: `${CH5} — Deepstone Sentinel (pp. 105–108; Table 5–3)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "eternal-blade",
    name: "Eternal Blade",
    ruleset: "core",
    source: `${CH5} — Eternal Blade (pp. 109–112)`,
    sourceUrl: TOB_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Concentration", "Diplomacy", "Handle Animal", "Intimidate", "Jump", "Martial Lore", "Ride", "Sense Motive", "Tumble"],
    prerequisites: [
      "Race: Elf",
      "Base Attack Bonus: +10",
      "Feats: Weapon Focus (any)",
      "Martial Maneuvers: Any two Devoted Spirit or Diamond Mind maneuvers",
    ],
    features: [
      {
        key: "eternal-blade-features",
        name: "Eternal Blade Features",
        category: "trait",
        description:
          "An elf warrior guided by the spirit of an ancient elf hero — his blade guide. Maneuvers known +1 at 1st, 3rd, 5th, 7th, and 9th level; maneuvers readied +1 at 3rd, 6th, and 9th; one additional stance known at 5th (Devoted Spirit or Diamond Mind; maneuvers are not modeled here). 1st: blade guide and eternal training 1/day (for one encounter, gain your Int bonus on attacks and damage against one creature type, or gain temporary use of one Devoted Spirit or Diamond Mind maneuver; additional uses at 3rd, 5th, 7th, and 9th). 2nd: guided strike (ignore miss chances from concealment when your guide directs you). 3rd: armored uncanny dodge. 4th: eternal knowledge (your guide makes Knowledge checks for you). 6th: defensive insight. 8th: tactical insight. 10th: island in time (take an extra full round of actions, 1/day).",
        source: `${CH5} — Eternal Blade (pp. 109–112; Table 5–4)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "jade-phoenix-mage",
    name: "Jade Phoenix Mage",
    ruleset: "core",
    source: `${CH5} — Jade Phoenix Mage (pp. 113–118)`,
    sourceUrl: TOB_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Concentration", "Diplomacy", "Handle Animal", "Intimidate", "Jump", "Martial Lore", "Ride", "Sense Motive", "Tumble"],
    prerequisites: [
      "Alignment: Any nonevil",
      "Skills: Concentration 9 ranks, Knowledge (arcana) 2 ranks, Knowledge (history) 2 ranks, Knowledge (religion) 2 ranks",
      "Martial Maneuvers: Must know at least two martial maneuvers, including one strike",
      "Martial Stances: Must know at least one martial stance",
      "Spells: Ability to cast 2nd-level arcane spells",
    ],
    features: [
      {
        key: "jade-phoenix-mage-features",
        name: "Jade Phoenix Mage Features",
        category: "trait",
        description:
          "A reincarnated arcane martial adept of the Jade Phoenix, blending spellcraft with the Desert Wind and Devoted Spirit disciplines. Spellcasting advances +1 level of an existing arcane spellcasting class at every level except 1st and 6th. Maneuvers known +1 at 1st, 3rd, 5th, 7th, and 9th level; maneuvers readied +1 at 3rd, 6th, and 9th; one additional stance known at 5th (maneuvers are not modeled here). 1st: arcane wrath (expend a spell slot to gain a bonus on a strike) and rite of waking (memory of past lives: +2 on Knowledge checks, usable untrained, and +2 on saves against death and fear effects). 2nd: mystic phoenix stance (trade a stance's benefit for +1 caster level, a dodge bonus, and optionally damage reduction from an expended spell slot). 4th: empowering strike. 6th: firebird stance and Jade Phoenix master. 8th: quickening strike. 10th: emerald immolation (a fiery explosion that leaves you unharmed and restores you).",
        source: `${CH5} — Jade Phoenix Mage (pp. 113–118; Table 5–5)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "master-of-nine",
    name: "Master of Nine",
    ruleset: "core",
    source: `${CH5} — Master of Nine (pp. 119–121)`,
    sourceUrl: TOB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, P5, P5, G5),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Hide", "Intimidate", "Jump", "Knowledge (history)", "Knowledge (local)", "Martial Lore", "Sense Motive", "Swim", "Tumble"],
    prerequisites: [
      "Skills: 10 ranks in four key discipline skills",
      "Feats: Adaptive Style, Blind-Fight, Dodge, Improved Initiative, Improved Unarmed Strike",
      "Martial Maneuvers: Must know at least one maneuver from six different disciplines",
    ],
    features: [
      {
        key: "master-of-nine-features",
        name: "Master of Nine Features",
        category: "trait",
        description:
          "The pinnacle of the Sublime Way: an adept who has unified all nine disciplines. Maneuvers known +2 at 1st, 3rd, and 5th level and +1 at 2nd and 4th (from any disciplines); maneuvers readied +1 at every level; one additional stance known at 2nd and 4th (maneuvers are not modeled here). 2nd: dual stance (use two stances at once for a number of rounds). 3rd: perfect form (bonuses when using maneuvers from many different disciplines). 4th: counter stance (change stances after a foe misses you). 5th: mastery of nine (add maneuvers' benefits across disciplines; the class's capstone).",
        source: `${CH5} — Master of Nine (pp. 119–121; Table 5–6)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "ruby-knight-vindicator",
    name: "Ruby Knight Vindicator",
    ruleset: "core",
    source: `${CH5} — Ruby Knight Vindicator (pp. 122–125)`,
    sourceUrl: TOB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL, P, P, G),
    classSkills: ["Balance", "Concentration", "Craft", "Diplomacy", "Heal", "Hide", "Intimidate", "Jump", "Knowledge (history)", "Knowledge (local)", "Knowledge (religion)", "Martial Lore", "Profession", "Ride", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Skills: Hide 4 ranks, Intimidate 4 ranks, Knowledge (religion) 8 ranks",
      "Martial Maneuvers: Must know at least one Devoted Spirit maneuver",
      "Martial Stances: Must know at least one Devoted Spirit stance",
      "Deity: Wee Jas",
      "Special: Ability to turn or rebuke undead",
    ],
    features: [
      {
        key: "ruby-knight-vindicator-features",
        name: "Ruby Knight Vindicator Features",
        category: "trait",
        description:
          "A stealthy divine crusader of Wee Jas, the Ruby Sorceress, serving her church on secret missions. Spellcasting advances +1 level of an existing divine spellcasting class at every level except 1st and 6th. Maneuvers known +1 at 2nd, 4th, 6th, 8th, and 10th level; maneuvers readied +1 at 5th and 9th; one additional stance known at 1st and 6th (Devoted Spirit; maneuvers are not modeled here). 2nd: divine recovery (expend a turn or rebuke attempt to recover an expended maneuver). 5th: armored stealth (no armor check penalty on Hide checks). 7th: divine impetus (expend a turn or rebuke attempt to gain an extra swift action). 9th: divine fury (spend a turn or rebuke attempt for +4 on a strike's attack roll and +1d10 damage). Multiclass note: a paladin who becomes a Ruby Knight vindicator can continue advancing as a paladin.",
        source: `${CH5} — Ruby Knight Vindicator (pp. 122–125; Table 5–7)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "shadow-sun-ninja",
    name: "Shadow Sun Ninja",
    ruleset: "core",
    source: `${CH5} — Shadow Sun Ninja (pp. 126–130)`,
    sourceUrl: TOB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist", "Hide", "Jump", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Listen", "Martial Lore", "Move Silently", "Perform", "Profession", "Sense Motive", "Spot", "Swim", "Tumble"],
    prerequisites: [
      "Alignment: Any good",
      "Base Attack Bonus: +3",
      "Skills: Hide 8 ranks",
      "Feats: Improved Unarmed Strike",
      "Martial Maneuvers: Must know one 2nd-level Setting Sun or Shadow Hand maneuver, one Setting Sun maneuver of any level, and one Shadow Hand maneuver of any level",
    ],
    features: [
      {
        key: "shadow-sun-ninja-features",
        name: "Shadow Sun Ninja Features",
        category: "trait",
        description:
          "A monk-like adept of the Setting Sun and Shadow Hand disciplines who walks the balance between darkness and light. Maneuvers known +1 at 1st, 3rd, 6th, and 9th level; maneuvers readied +1 at 5th and 10th; one additional stance known at 5th (maneuvers are not modeled here). Monk abilities: your levels stack with monk levels for AC bonus, unarmed damage, and speed. 1st: touch of the Shadow Sun (channel negative energy into a foe, then positive energy into an ally, alternating). 2nd: flame of the Shadow Sun (cold resistance that converts into a fire bolt). 4th: light within darkness (burst of blinding light after attacking from hiding). 5th: darkness within light. 7th: void of the Shadow Sun (halo of light that becomes a pulse of cold). 8th: child of shadow and light. 10th: balance of light and dark.",
        source: `${CH5} — Shadow Sun Ninja (pp. 126–130; Table 5–8)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
];
