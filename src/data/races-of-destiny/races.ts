/**
 * Races of Destiny race data pack: the playable races of Races of
 * Destiny (Wizards of the Coast) — the illumian (Chapter 3) and the
 * nine "other races of destiny" of Chapter 4, each presented with a
 * full racial trait list. Built 2026-10-27 from the copy in Shaun's
 * Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Destiny.pdf
 *
 * Races of Destiny is a generic D&D 3.5 supplement, not a separate
 * setting, so these records carry ruleset "core".
 *
 * Humans, half-elves, and half-orcs (Chapters 1–2) are covered by
 * the core data and are not duplicated. The doppelganger and skulk
 * monster classes of Chapter 4 are Savage Species-style leveling
 * systems the app does not model; the races themselves are recorded
 * here from their full racial trait lists (racial Hit Dice included
 * where printed). Tiefling note: this book's trait list (p. 108)
 * does not print the energy resistances the Monster Manual gives
 * the tiefling; the record follows this book as printed.
 */
import type { RaceDefinition } from "@/engine/types";

const ROD = "Races of Destiny";
const ROD_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of Destiny.pdf";
const CH3 = `${ROD} — Chapter 3: Illumians`;
const CH4 = `${ROD} — Chapter 4: Other Races of Destiny`;

export const RACES_OF_DESTINY_RACES: RaceDefinition[] = [
  {
    id: "illumian",
    name: "Illumian",
    ruleset: "core",
    source: `${CH3} — Illumian Racial Traits (pp. 53–55)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human"],
    abilityModifiers: {},
    favoredClass: "Any",
    levelAdjustment: 0,
    traits: [
      {
        key: "illumian-type",
        name: "Humanoid (Human)",
        description:
          "Illumians are humanoid creatures with the human subtype — the descendants of humans transformed by the Ritual of Words Made Flesh.",
        category: "trait",
        source: `${CH3} — Illumian Racial Traits (p. 53)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "illumian-luminous-sigils",
        name: "Luminous Sigils (Su)",
        description:
          "A ring of glowing Illumian sigils orbits the illumian's head, shedding light equal to a candle. She can douse them with a standard action (losing the benefits of her sigils and illumian words while they are dark) and restore them as a free action. The sigils persist through form changes unless the new form strips her supernatural abilities.",
        category: "special-quality",
        source: `${CH3} — Illumian Racial Traits (p. 53)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "illumian-glyphic-resonance",
        name: "Glyphic Resonance (Ex)",
        description:
          "Illumians interact strangely with symbol-based magic (spells with glyph, rune, sigil, or symbol in the name, such as explosive runes, glyph of warding, and the symbol spells). If the illumian's level is less than the spell's caster level, she takes a −4 racial penalty on saves against it; if her level equals or exceeds the caster level, she is immune to it.",
        category: "special-quality",
        source: `${CH3} — Illumian Racial Traits (pp. 53–54)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "illumian-power-sigils",
        name: "Power Sigils (Su)",
        description:
          "At 1st level the illumian chooses one brightly glowing power sigil, and gains a second, different one on attaining 2nd level in any class; each sigil's bonus is +1 with one sigil and +2 once she has two. Aesh (\"vigor\"): bonus on Strength checks and Strength-based skill checks. Hoon (\"life\"): bonus on Wisdom and Constitution checks and Wisdom- or Constitution-based skill checks. Krau (\"magic\"): bonus to caster level for all spells and spell-like abilities, up to her character level. Naen (\"mind\"): bonus on Intelligence checks and Intelligence-based skill checks. Uur (\"grace\"): bonus on Dexterity checks and Dexterity-based skill checks. Vaul (\"soul\"): bonus on Charisma checks and Charisma-based skill checks.",
        category: "special-quality",
        source: `${CH3} — Illumian Racial Traits (p. 54)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "illumian-words",
        name: "Illumian Words (Su)",
        description:
          "Each pair of power sigils forms an illumian word granting an extra ability. Aeshkrau: use Strength to determine bonus spells. Aeshuur: +2 dodge bonus to AC against a target you damage with a sneak attack or critical hit. Hoonkrau: spend turn/rebuke attempts to add 1d8 to a cure or inflict spell's effect (twice per day). Hoonvaul: expend a spell slot to boost turning checks and smite attacks (twice per day). Naenaesh: leave up to two slots unfilled to cast prepared spells as if Still Spell had been applied. Naenhoon: spend turn/rebuke attempts to apply a metamagic effect to a spell (twice per day). Naenkrau: leave up to two slots unfilled to raise the save DCs of your other spells of those levels by +1. Uurhoon: expend a slot for an insight bonus on Reflex saves and caster level checks (twice per day). Uurkrau: use Dexterity to determine bonus spells. Uurnaen: leave a low-level slot unfilled for an insight bonus on unarmed strike and sneak attack rolls. Vaulaesh: expend a slot for insight bonuses to AC and Weapon Focus weapon damage (twice per day). Vaulkrau: expend a slot for an insight bonus on your next saving throw (twice per day). Vaulnaen: expend a slot to spontaneously cast a prepared spell of the same level (twice per day). Vauluur: expend a slot to add 1d6 per spell level to unarmed strike and sneak attack damage (twice per day).",
        category: "special-quality",
        source: `${CH3} — Illumian Racial Traits (pp. 54–55)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "illumian-final-utterance",
        name: "Final Utterance (Ex)",
        description:
          "When an illumian dies, her body releases its stored language: for 1 round per Hit Die, anyone within earshot hears ululating Illumian syllables — usually gibberish, occasionally a prophetic phrase or a final curse — even if the body is destroyed.",
        category: "trait",
        source: `${CH3} — Illumian Racial Traits (p. 55)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "illumian-shadow-saves",
        name: "Shadow Heritage",
        description:
          "+2 racial bonus on saving throws against spells with the shadow descriptor, a legacy of the illumians' ties to the Plane of Shadow.",
        category: "trait",
        source: `${CH3} — Illumian Racial Traits (p. 55)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "illumian-superior-literacy",
        name: "Superior Literacy",
        description:
          "Illumians are always literate, regardless of class, and Speak Language is always a class skill for them.",
        category: "trait",
        source: `${CH3} — Illumian Racial Traits (p. 55)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "illumian-languages",
        name: "Languages",
        description:
          "Automatic Languages: Common and Illumian. Bonus Languages: Any (except secret languages, such as Druidic).",
        category: "trait",
        source: `${CH3} — Illumian Racial Traits (p. 55)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "aasimar",
    name: "Aasimar",
    ruleset: "core",
    source: `${CH4} — Aasimar Racial Traits (p. 93)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Native"],
    abilityModifiers: { wis: 2, cha: 2 },
    favoredClass: "Paladin",
    levelAdjustment: 1,
    skillBonuses: { listen: 2, spot: 2 },
    traits: [
      {
        key: "aasimar-type",
        name: "Outsider (Native)",
        description:
          "Aasimars are outsiders native to the Material Plane; unlike true outsiders, they need to eat and sleep.",
        category: "trait",
        source: `${CH4} — Aasimar Racial Traits (p. 93)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "aasimar-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${CH4} — Aasimar Racial Traits (p. 93)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "aasimar-daylight",
        name: "Daylight (Sp)",
        description:
          "Once per day, an aasimar can use daylight as a 1st-level caster or at her class level, whichever is higher.",
        category: "special-quality",
        source: `${CH4} — Aasimar Racial Traits (p. 93)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "aasimar-resistances",
        name: "Energy Resistance",
        description:
          "Aasimars have resistance to acid 5, cold 5, and electricity 5 from their celestial blood.",
        category: "special-quality",
        source: `${CH4} — Aasimar Racial Traits (p. 93)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "aasimar-languages",
        name: "Languages",
        description:
          "Automatic Languages: Common and Celestial. Bonus Languages: Draconic, Dwarven, Elven, Gnome, Halfling, and Sylvan.",
        category: "trait",
        source: `${CH4} — Aasimar Racial Traits (p. 93)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "doppelganger",
    name: "Doppelganger",
    ruleset: "core",
    source: `${CH4} — Doppelganger Racial Traits (pp. 95–96)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: ["Shapechanger"],
    abilityModifiers: { str: 2, dex: 2, con: 2, int: 2, wis: 4, cha: 2 },
    favoredClass: "Rogue",
    levelAdjustment: 4,
    racialHitDice: 4,
    hitDie: "d8",
    naturalArmor: 4,
    skillBonuses: { bluff: 4, disguise: 4 },
    traits: [
      {
        key: "doppelganger-racial-hit-dice",
        name: "Racial Hit Dice and Skills",
        description:
          "A doppelganger begins with four levels of monstrous humanoid (4d8 Hit Dice, base attack bonus +4, base saves Fort +1, Ref +4, Will +4), which give skill points equal to 7 × (2 + Int modifier) and two feats. Its racial class skills are Bluff, Diplomacy, Disguise, Intimidate, Listen, Sense Motive, and Spot. The book also offers a doppelganger monster class (pp. 95–96) that parcels these traits out over 8 levels; that leveling system is not modeled in this record.",
        category: "trait",
        source: `${CH4} — Doppelganger Racial Traits (p. 95)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "doppelganger-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${CH4} — Doppelganger Racial Traits (p. 95)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "doppelganger-detect-thoughts",
        name: "Detect Thoughts (Su)",
        description:
          "A doppelganger can use detect thoughts at will, as the spell (caster level 18th; Will DC 13 negates), and can suppress or resume the ability as a free action.",
        category: "special-quality",
        source: `${CH4} — Doppelganger Racial Traits (p. 96)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "doppelganger-change-shape",
        name: "Change Shape (Su)",
        description:
          "A doppelganger can assume the shape of any Small or Medium humanoid and remain in that form until it chooses a new one; in humanoid form it loses its natural attacks. The change cannot be dispelled, but the doppelganger reverts to its natural form when killed, and true seeing reveals its natural form. While using change shape it gains a further +10 circumstance bonus on Disguise checks, and another +4 circumstance bonus on Bluff and Disguise checks if it can read its target's mind.",
        category: "special-quality",
        source: `${CH4} — Doppelganger Racial Traits (p. 96)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "doppelganger-immunities",
        name: "Immunities",
        description: "A doppelganger is immune to sleep and charm effects.",
        category: "special-quality",
        source: `${CH4} — Doppelganger Racial Traits (p. 96)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "doppelganger-languages",
        name: "Languages",
        description:
          "Automatic Language: Common. Bonus Languages: Auran, Dwarven, Elven, Gnome, Halfling, Giant, and Terran.",
        category: "trait",
        source: `${CH4} — Doppelganger Racial Traits (p. 96)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "half-ogre",
    name: "Half-Ogre",
    ruleset: "core",
    source: `${CH4} — Half-Ogre Racial Traits (pp. 97–98)`,
    sourceUrl: ROD_PATH,
    size: "Large",
    baseSpeed: 30,
    type: "Giant",
    subtypes: [],
    abilityModifiers: { str: 6, dex: -2, con: 2, int: -2, cha: -2 },
    favoredClass: "Barbarian",
    levelAdjustment: 2,
    naturalArmor: 4,
    traits: [
      {
        key: "half-ogre-size",
        name: "Large Size",
        description:
          "As Large creatures, half-ogres take a −1 penalty to Armor Class and a −1 penalty on attack rolls, and have a reach of 10 feet.",
        category: "trait",
        source: `${CH4} — Half-Ogre Racial Traits (p. 97)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "half-ogre-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${CH4} — Half-Ogre Racial Traits (pp. 97–98)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "half-ogre-languages",
        name: "Languages",
        description:
          "Automatic Languages: Giant and Common. Bonus Languages: Draconic, Gnoll, Goblin, Orc, and Abyssal.",
        category: "trait",
        source: `${CH4} — Half-Ogre Racial Traits (p. 98)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "mongrelfolk",
    name: "Mongrelfolk",
    ruleset: "core",
    source: `${CH4} — Mongrelfolk Racial Traits (pp. 99–100)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human"],
    abilityModifiers: { con: 4, int: -2, cha: -4 },
    favoredClass: "Rogue",
    levelAdjustment: 0,
    skillBonuses: {
      appraise: 1,
      climb: 1,
      jump: 1,
      listen: 1,
      "move-silently": 1,
      search: 1,
      spot: 1,
      hide: 4,
      "sleight-of-hand": 4,
    },
    traits: [
      {
        key: "mongrelfolk-low-light-vision",
        name: "Low-Light Vision",
        description:
          "Mongrelfolk can see twice as far as a human in conditions of poor illumination, and retain the ability to distinguish color and detail under these conditions.",
        category: "special-quality",
        source: `${CH4} — Mongrelfolk Racial Traits (p. 99)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "mongrelfolk-emulate-race",
        name: "Emulate Race (Ex)",
        description:
          "A mongrelfolk can use magic items that function only for a user of a certain race, automatically emulating any humanoid race with no skill check (as the emulate race use of Use Magic Device). A mongrelfolk with the Use Magic Device skill gains a +4 racial bonus when emulating nonhumanoid races.",
        category: "special-quality",
        source: `${CH4} — Mongrelfolk Racial Traits (p. 99)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "mongrelfolk-sound-imitation",
        name: "Sound Imitation (Ex)",
        description:
          "A mongrelfolk can mimic any voice or sound she has heard; listeners must succeed on a DC 16 Will save to detect the ruse.",
        category: "special-quality",
        source: `${CH4} — Mongrelfolk Racial Traits (p. 100)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "mongrelfolk-diffuse-blood",
        name: "Diffuse Blood",
        description:
          "Mongrelfolk are immune to sleep spells and similar magical effects. They gain a +2 racial bonus on saves against any spell that targets or ignores a particular race, provided that race is part of their general ancestry (human, halfling, dwarf, elf, gnome, goblin, or orc), plus a +1 racial bonus on saves against enchantment and illusion spells or effects and a +1 racial bonus on saves against poison.",
        category: "trait",
        source: `${CH4} — Mongrelfolk Racial Traits (p. 100)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "mongrelfolk-languages",
        name: "Languages",
        description: "Automatic Language: Common. Bonus Languages: Any.",
        category: "trait",
        source: `${CH4} — Mongrelfolk Racial Traits (p. 100)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "sea-kin",
    name: "Sea Kin",
    ruleset: "core",
    source: `${CH4} — Sea Kin Racial Traits (p. 102)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human"],
    abilityModifiers: {},
    favoredClass: "Druid",
    levelAdjustment: 0,
    bonusSkillPointsAtFirstLevel: 4,
    bonusSkillPointsPerLevel: 1,
    skillBonuses: { "escape-artist": 2 },
    traits: [
      {
        key: "sea-kin-low-light-vision",
        name: "Low-Light Vision",
        description:
          "Sea kin can see twice as far as a human in conditions of poor illumination, and retain the ability to distinguish color and detail under these conditions.",
        category: "special-quality",
        source: `${CH4} — Sea Kin Racial Traits (p. 102)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sea-kin-swim",
        name: "Swim Speed",
        description:
          "Sea kin have a base swim speed of 30 feet, in addition to their 30-foot land speed.",
        category: "trait",
        source: `${CH4} — Sea Kin Racial Traits (p. 102)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sea-kin-hold-breath",
        name: "Hold Breath (Ex)",
        description:
          "A sea kin can hold his breath for a number of rounds equal to 8 × his Constitution score before he risks drowning.",
        category: "special-quality",
        source: `${CH4} — Sea Kin Racial Traits (p. 102)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sea-kin-weapon-familiarity",
        name: "Weapon Familiarity",
        description: "Sea kin treat tridents and nets as simple weapons.",
        category: "trait",
        source: `${CH4} — Sea Kin Racial Traits (p. 102)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sea-kin-water-dependency",
        name: "Water Dependency",
        description:
          "A sea kin must immerse his entire body in water at least once a week. After a week without immersion, he must make a Constitution check each day (DC 10 + 1 per additional day) or take 1 point of Constitution damage; immersion restores 1d4 points of that damage per hour spent in the water.",
        category: "trait",
        source: `${CH4} — Sea Kin Racial Traits (p. 102)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sea-kin-languages",
        name: "Languages",
        description:
          "Automatic Language: Common. Bonus Languages: Aquan, Elven, and Sahuagin.",
        category: "trait",
        source: `${CH4} — Sea Kin Racial Traits (p. 102)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "sharakim",
    name: "Sharakim",
    ruleset: "core",
    source: `${CH4} — Sharakim Racial Traits (pp. 104–105)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human"],
    abilityModifiers: { str: 2, dex: -2, int: 2, cha: -2 },
    favoredClass: "Wizard",
    levelAdjustment: 1,
    naturalArmor: 1,
    traits: [
      {
        key: "sharakim-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${CH4} — Sharakim Racial Traits (p. 104)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sharakim-shadow-affinity",
        name: "Shadow Affinity (Ex)",
        description:
          "In areas of darkness or shadowy illumination, a sharakim gains a +2 racial bonus on Hide, Move Silently, Search, and Spot checks (conditional, so not included in this race's skill bonuses).",
        category: "special-quality",
        source: `${CH4} — Sharakim Racial Traits (pp. 104–105)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sharakim-light-sensitivity",
        name: "Light Sensitivity (Ex)",
        description:
          "Sharakim take a −1 penalty on attack rolls in bright sunlight or within the radius of a daylight spell.",
        category: "trait",
        source: `${CH4} — Sharakim Racial Traits (p. 105)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sharakim-orc-hatred",
        name: "Orc Hatred",
        description:
          "+1 racial bonus on attack rolls against orcs (including half-orcs); sharakim despise orcs and train to fight them.",
        category: "trait",
        source: `${CH4} — Sharakim Racial Traits (p. 105)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "sharakim-languages",
        name: "Languages",
        description:
          "Automatic Language: Common. Bonus Languages: Dwarven, Elven, Gnome, and Orc.",
        category: "trait",
        source: `${CH4} — Sharakim Racial Traits (p. 105)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "skulk",
    name: "Skulk",
    ruleset: "core",
    source: `${CH4} — Skulk Racial Traits (p. 106)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human"],
    abilityModifiers: { dex: 4, wis: -2, cha: -4 },
    favoredClass: "Rogue",
    levelAdjustment: 1,
    racialHitDice: 2,
    hitDie: "d8",
    skillBonuses: { "move-silently": 8, hide: 15 },
    traits: [
      {
        key: "skulk-racial-hit-dice",
        name: "Racial Hit Dice and Skills",
        description:
          "A skulk begins with two levels of humanoid (2d8 Hit Dice, base attack bonus +1, base saves Fort +0, Ref +3, Will +0), which give skill points equal to 5 × (2 + Int modifier) and one feat. Its racial class skills are Hide and Move Silently. The book also offers a skulk monster class (pp. 105–106) that parcels these traits out over 3 levels; that leveling system is not modeled in this record.",
        category: "trait",
        source: `${CH4} — Skulk Racial Traits (p. 106)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "skulk-stealth",
        name: "Peerless Stealth",
        description:
          "A skulk's +8 racial bonus on Move Silently checks and +15 racial bonus on Hide checks (recorded in this race's skill bonuses) apply only when the skulk is wearing light armor or no armor.",
        category: "trait",
        source: `${CH4} — Skulk Racial Traits (p. 106)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "skulk-innate-nondetection",
        name: "Innate Nondetection (Su)",
        description:
          "Skulks are difficult to detect by divination spells (such as clairaudience/clairvoyance, locate creature, and the detect spells) and items such as a crystal ball: the divination's caster must succeed on a DC 20 caster level check.",
        category: "special-quality",
        source: `${CH4} — Skulk Racial Traits (p. 106)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "skulk-peerless-camouflage",
        name: "Peerless Camouflage (Ex)",
        description:
          "A skulk can move at full speed (and can even run) while hiding, taking no penalties on Hide checks due to movement.",
        category: "special-quality",
        source: `${CH4} — Skulk Racial Traits (p. 106)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "skulk-trackless-path",
        name: "Trackless Path (Ex)",
        description:
          "The DC of any Survival check to follow a skulk's trail is increased by 10.",
        category: "special-quality",
        source: `${CH4} — Skulk Racial Traits (p. 106)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "skulk-languages",
        name: "Languages",
        description:
          "Automatic Language: Common. Bonus Languages: Dwarven, Elven, Gnome, Goblin, Halfling, and Orc.",
        category: "trait",
        source: `${CH4} — Skulk Racial Traits (p. 106)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "tiefling",
    name: "Tiefling",
    ruleset: "core",
    source: `${CH4} — Tiefling Racial Traits (p. 108)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Native"],
    abilityModifiers: { dex: 2, int: 2, cha: -2 },
    favoredClass: "Rogue",
    levelAdjustment: 1,
    skillBonuses: { bluff: 2, hide: 2 },
    traits: [
      {
        key: "tiefling-type",
        name: "Outsider (Native)",
        description:
          "Tieflings are outsiders native to the Material Plane; unlike true outsiders, they need to eat and sleep.",
        category: "trait",
        source: `${CH4} — Tiefling Racial Traits (p. 108)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "tiefling-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${CH4} — Tiefling Racial Traits (p. 108)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "tiefling-darkness",
        name: "Darkness (Sp)",
        description:
          "Once per day, a tiefling can use darkness as a 1st-level caster or at her class level, whichever is higher.",
        category: "special-quality",
        source: `${CH4} — Tiefling Racial Traits (p. 108)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "tiefling-languages",
        name: "Languages",
        description:
          "Automatic Languages: Common and Infernal. Bonus Languages: Draconic, Dwarven, Elven, Gnome, Goblin, Halfling, and Orc.",
        category: "trait",
        source: `${CH4} — Tiefling Racial Traits (p. 108)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "underfolk",
    name: "Underfolk",
    ruleset: "core",
    source: `${CH4} — Underfolk Racial Traits (p. 110)`,
    sourceUrl: ROD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Human"],
    abilityModifiers: {},
    favoredClass: "Any",
    levelAdjustment: 0,
    bonusSkillPointsAtFirstLevel: 4,
    bonusSkillPointsPerLevel: 1,
    skillBonuses: { listen: 2 },
    traits: [
      {
        key: "underfolk-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${CH4} — Underfolk Racial Traits (p. 110)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "underfolk-weapon-familiarity",
        name: "Weapon Familiarity",
        description:
          "Underfolk treat light and heavy picks as simple weapons rather than martial weapons.",
        category: "trait",
        source: `${CH4} — Underfolk Racial Traits (p. 110)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "underfolk-camouflage",
        name: "Camouflage (Ex)",
        description:
          "Underfolk can change their skin coloration at will to mimic the surrounding terrain, gaining a +4 racial bonus on Hide checks, which increases to +10 in rocky terrain (a conditional bonus from this ability, so not included in this race's skill bonuses). The ability works even when viewed with darkvision, although true seeing negates the bonus.",
        category: "special-quality",
        source: `${CH4} — Underfolk Racial Traits (p. 110)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "underfolk-light-sensitivity",
        name: "Light Sensitivity (Ex)",
        description:
          "Underfolk are dazzled in bright sunlight or within the radius of a daylight spell.",
        category: "trait",
        source: `${CH4} — Underfolk Racial Traits (p. 110)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "underfolk-languages",
        name: "Languages",
        description:
          "Automatic Language: Common. Bonus Languages: Drow, Dwarven, Gnome, Goblin, and Orc.",
        category: "trait",
        source: `${CH4} — Underfolk Racial Traits (p. 110)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
];
