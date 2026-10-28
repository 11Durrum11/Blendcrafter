import type { RaceDefinition } from "../../engine/types";

// Expanded Psionics Handbook playable races (Chapter 1, "Psionic Races", the "as
// characters" trait blocks). Short mechanical summaries in our own words, cited
// to book + page. Psionic powers and psi-like abilities are a system the app
// does not model; the traits are recorded as text.
// Source PDF: /a poc dm related/desktop/Sourcebooks/Expanded Psionics Handbook (ocr,bookmarked,WE).pdf

const XPH = "Expanded Psionics Handbook";
const XPH_PATH =
  "/a poc dm related/desktop/Sourcebooks/Expanded Psionics Handbook (ocr,bookmarked,WE).pdf";

export const EXPANDED_PSIONICS_RACES: RaceDefinition[] = [
  {
    id: "dromite",
    name: "Dromite",
    ruleset: "core",
    size: "Small",
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: -2, wis: -2, cha: 2 },
    racialHitDice: 0,
    levelAdjustment: 1,
    baseSpeed: 20,
    naturalArmor: 3,
    skillBonuses: { spot: 2 },
    traits: [
      {
        key: "dromite-chitin",
        name: "Chitin",
        category: "special-quality",
        description:
          "Insectoid chitin grants a +3 natural armor bonus (already included above) and energy resistance 5 against one energy type chosen at character creation — cold, electricity, fire, or sonic — matching the dromite's caste.",
        source: `${XPH}, p. 7`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "dromite-psi-like",
        name: "Psi-Like Ability",
        category: "special-quality",
        description:
          "1/day — energy ray, dealing only the energy type that matches the dromite's chitin (see above). Manifester level equals the dromite's Hit Dice; the save DC is Charisma-based. Psionic powers are not modeled by this app; recorded as text.",
        source: `${XPH}, p. 7`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "dromite-naturally-psionic",
        name: "Naturally Psionic",
        category: "special-quality",
        description:
          "Dromites gain 1 bonus power point at 1st level. This does not grant the ability to manifest powers by itself.",
        source: `${XPH}, p. 7`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "dromite-scent",
        name: "Scent",
        category: "special-quality",
        description:
          "Dromites have the scent ability. Their compound eyes also grant a +2 racial bonus on Spot checks.",
        source: `${XPH}, p. 7`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "dromite-bonus-feat",
        name: "Bonus Feat",
        category: "feat",
        description:
          "Dromites gain Blind-Fight as a bonus feat.",
        source: `${XPH}, p. 7`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "wilder",
    source: `${XPH}, p. 7`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "duergar-psionic",
    name: "Duergar (Psionic)",
    ruleset: "core",
    size: "Medium",
    type: "Humanoid",
    subtypes: ["Dwarf"],
    abilityModifiers: { con: 2, cha: -4 },
    racialHitDice: 0,
    levelAdjustment: 1,
    baseSpeed: 20,
    naturalArmor: 0,
    skillBonuses: { "move-silently": 4, listen: 1, spot: 1 },
    traits: [
      {
        key: "duergar-psionic-psi-like",
        name: "Psi-Like Abilities",
        category: "special-quality",
        description:
          "1/day — expansion and invisibility (self only), as the powers manifested by a manifester of the duergar's character level (minimum 3rd). Psionic powers are not modeled by this app; recorded as text.",
        source: `${XPH}, pp. 8–9`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "duergar-psionic-naturally-psionic",
        name: "Naturally Psionic",
        category: "special-quality",
        description:
          "Duergar gain 3 bonus power points at 1st level. This does not grant the ability to manifest powers by itself.",
        source: `${XPH}, pp. 8–9`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "duergar-immunities",
        name: "Immunities",
        category: "special-quality",
        description:
          "Immunity to paralysis, phantasms, and poison, and a +2 racial bonus on saving throws against all powers, spells, and spell-like abilities.",
        source: `${XPH}, pp. 8–9`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "duergar-dwarven-traits",
        name: "Dwarven Traits",
        category: "special-quality",
        description:
          "Stability (+4 against bull rush and trip attempts while standing on the ground), stonecunning, +1 racial bonus on attack rolls against orcs and goblinoids, +4 dodge bonus to AC against giants, and a +2 racial bonus on Appraise and Craft checks related to stone or metal items. Speed is not reduced by armor or a heavy load. Duergar suffer light sensitivity: dazzled in bright sunlight or within a daylight spell.",
        source: `${XPH}, pp. 8–9`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "duergar-psionic-darkvision",
        name: "Darkvision",
        category: "special-quality",
        description:
          "Darkvision 120 ft.",
        source: `${XPH}, pp. 8–9`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "fighter",
    source: `${XPH}, pp. 8–9`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "elan",
    name: "Elan",
    ruleset: "core",
    size: "Medium",
    type: "Aberration",
    subtypes: [],
    abilityModifiers: { cha: -2 },
    racialHitDice: 0,
    levelAdjustment: 0,
    baseSpeed: 30,
    naturalArmor: 0,
    skillBonuses: {},
    traits: [
      {
        key: "elan-no-darkvision",
        name: "No Darkvision",
        category: "special-quality",
        description:
          "Unlike most aberrations, elans have no darkvision — an exception printed in their trait block.",
        source: `${XPH}, pp. 9–10`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "elan-naturally-psionic",
        name: "Naturally Psionic",
        category: "special-quality",
        description:
          "Elans gain 2 bonus power points at 1st level. This does not grant the ability to manifest powers by itself.",
        source: `${XPH}, pp. 9–10`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "elan-resistance-resilience",
        name: "Resistance and Resilience (Su)",
        category: "special-quality",
        description:
          "Resistance: as an immediate action, an elan can spend 1 power point to gain a +4 racial bonus on saving throws until her next action. Resilience: when an elan takes damage, she can spend power points to reduce the damage dealt by 2 hit points per power point spent (immediate action, usable once per attack; usable even if already reduced to 0 or fewer hit points).",
        source: `${XPH}, pp. 9–10`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "elan-repletion",
        name: "Repletion (Su)",
        category: "special-quality",
        description:
          "An elan can sustain herself without food or water for 24 hours by spending 1 power point.",
        source: `${XPH}, pp. 9–10`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "psion",
    source: `${XPH}, pp. 9–10`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "githyanki",
    name: "Githyanki",
    ruleset: "core",
    size: "Medium",
    type: "Humanoid",
    subtypes: ["Extraplanar"],
    abilityModifiers: { dex: 2, con: 2, wis: -2 },
    racialHitDice: 0,
    levelAdjustment: 2,
    baseSpeed: 30,
    naturalArmor: 0,
    skillBonuses: {},
    traits: [
      {
        key: "githyanki-psi-like",
        name: "Psi-Like Abilities",
        category: "special-quality",
        description:
          "By character level — 1st: far hand at will and psionic daze 3/day; 3rd: concealing amorpha 3/day; 6th: psionic dimension door 3/day; 9th: telekinetic thrust 3/day and psionic plane shift 1/day. Manifester level equals 1/2 the githyanki's Hit Dice; save DCs are Charisma-based. Psionic powers are not modeled by this app; recorded as text.",
        source: `${XPH}, pp. 10–11`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "githyanki-power-resistance",
        name: "Power Resistance",
        category: "special-quality",
        description:
          "A githyanki has power resistance equal to her Hit Dice + 5.",
        source: `${XPH}, pp. 10–11`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "githyanki-naturally-psionic",
        name: "Naturally Psionic",
        category: "special-quality",
        description:
          "Githyanki gain 3 bonus power points at 1st level. This does not grant the ability to manifest powers by itself.",
        source: `${XPH}, pp. 10–11`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "githyanki-darkvision",
        name: "Darkvision",
        category: "special-quality",
        description:
          "Darkvision 60 ft.",
        source: `${XPH}, pp. 10–11`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "fighter",
    source: `${XPH}, pp. 10–11`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "githzerai",
    name: "Githzerai",
    ruleset: "core",
    size: "Medium",
    type: "Humanoid",
    subtypes: ["Extraplanar"],
    abilityModifiers: { dex: 6, int: -2, wis: 2 },
    racialHitDice: 0,
    levelAdjustment: 2,
    baseSpeed: 30,
    naturalArmor: 0,
    skillBonuses: {},
    traits: [
      {
        key: "githzerai-psi-like",
        name: "Psi-Like Abilities",
        category: "special-quality",
        description:
          "3/day — inertial armor, psionic daze, catfall, and concussion; a githzerai of 11th level or higher can also use psionic plane shift 1/day. Manifester level equals 1/2 the githzerai's Hit Dice; save DCs are Charisma-based. Psionic powers are not modeled by this app; recorded as text.",
        source: `${XPH}, p. 11`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "githzerai-power-resistance",
        name: "Power Resistance",
        category: "special-quality",
        description:
          "A githzerai has power resistance equal to her Hit Dice + 5.",
        source: `${XPH}, p. 11`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "githzerai-naturally-psionic",
        name: "Naturally Psionic",
        category: "special-quality",
        description:
          "Githzerai gain 2 bonus power points at 1st level. This does not grant the ability to manifest powers by itself.",
        source: `${XPH}, p. 11`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "githzerai-darkvision",
        name: "Darkvision",
        category: "special-quality",
        description:
          "Darkvision 60 ft.",
        source: `${XPH}, p. 11`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "monk",
    source: `${XPH}, p. 11`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "half-giant",
    name: "Half-Giant",
    ruleset: "core",
    size: "Medium",
    type: "Giant",
    subtypes: [],
    abilityModifiers: { str: 2, con: 2, dex: -2 },
    racialHitDice: 0,
    levelAdjustment: 1,
    baseSpeed: 30,
    naturalArmor: 0,
    skillBonuses: {},
    traits: [
      {
        key: "half-giant-powerful-build",
        name: "Powerful Build",
        category: "special-quality",
        description:
          "A half-giant functions in many ways as if one size category larger: he is treated as Large for opposed checks that benefit from a size modifier (grapple, bull rush, trip), can use weapons designed for Large creatures without penalty, and counts as Large or Medium, whichever is more advantageous, for special attacks based on size (such as improved grab or swallow whole).",
        source: `${XPH}, pp. 12–13`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "half-giant-fire-acclimated",
        name: "Fire Acclimated",
        category: "special-quality",
        description:
          "+2 racial bonus on saving throws against all fire spells and effects. Half-giants also have low-light vision.",
        source: `${XPH}, pp. 12–13`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "half-giant-psi-like",
        name: "Psi-Like Ability",
        category: "special-quality",
        description:
          "1/day — stomp. Manifester level equals 1/2 the half-giant's Hit Dice; the save DC is Charisma-based. Half-giants are also naturally psionic (2 bonus power points at 1st level). Psionic powers are not modeled by this app; recorded as text.",
        source: `${XPH}, pp. 12–13`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "psychic-warrior",
    source: `${XPH}, pp. 12–13`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "maenad",
    name: "Maenad",
    ruleset: "core",
    size: "Medium",
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: {},
    racialHitDice: 0,
    levelAdjustment: 0,
    baseSpeed: 30,
    naturalArmor: 0,
    skillBonuses: {},
    traits: [
      {
        key: "maenad-no-ability-adjustment",
        name: "No Ability Adjustment",
        category: "special-quality",
        description:
          "As printed, maenads have no racial ability score adjustments — their trait block lists none.",
        source: `${XPH}, pp. 13–14`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "maenad-psi-like",
        name: "Psi-Like Ability",
        category: "special-quality",
        description:
          "1/day — energy ray (sonic damage only), accompanied by a tremendous scream of rage. Manifester level equals 1/2 the maenad's Hit Dice; the save DC is Charisma-based. Maenads are also naturally psionic (2 bonus power points at 1st level). Psionic powers are not modeled by this app; recorded as text.",
        source: `${XPH}, pp. 13–14`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "maenad-outburst",
        name: "Outburst (Ex)",
        category: "special-quality",
        description:
          "Once per day for up to 4 rounds, a maenad can submerge her personality in a sea of anger: she takes a −2 penalty to Intelligence and Wisdom but gains a +2 bonus to Strength. This is not a rage and gives none of a barbarian rage's benefits or drawbacks.",
        source: `${XPH}, pp. 13–14`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "wilder",
    source: `${XPH}, pp. 13–14`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "thri-kreen",
    name: "Thri-Kreen",
    ruleset: "core",
    size: "Medium",
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: 2, dex: 4, int: -2, wis: 2, cha: -4 },
    racialHitDice: 2,
    hitDie: "d8",
    levelAdjustment: 2,
    baseSpeed: 40,
    naturalArmor: 3,
    skillBonuses: { jump: 30, hide: 4 },
    traits: [
      {
        key: "thri-kreen-racial-hit-dice",
        name: "Racial Hit Dice",
        category: "special-quality",
        description:
          "A thri-kreen begins with two levels of monstrous humanoid (2d8 Hit Dice, base attack bonus +2, Fort +0, Ref +3, Will +3), which provide 5 × (2 + Int modifier) skill points (class skills Balance, Climb, Hide, Jump, Listen, and Spot), one feat, and proficiency with the gythka and chatkcha. A thri-kreen character also gains the Deflect Arrows feat as a bonus feat.",
        source: `${XPH}, pp. 14–15`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "thri-kreen-multiple-limbs",
        name: "Multiple Limbs",
        category: "special-quality",
        description:
          "Four arms allow a thri-kreen to take the Multiweapon Fighting and Multiattack feats. Natural weapons: four claws (1d4) and a bite (1d4). The bite is poisonous once per day (Fort DC 11 + Con modifier; initial damage 1d6 Dexterity, secondary damage paralysis for 2d6 minutes).",
        source: `${XPH}, pp. 14–15`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "thri-kreen-traits",
        name: "Thri-Kreen Traits",
        category: "special-quality",
        description:
          "Immunity to magic sleep effects, +3 natural armor bonus (already included above), a +30 racial bonus on Jump checks from powerful hind legs, and a +4 racial bonus on Hide checks in sandy or arid settings. Thri-kreen do not sleep and need only 2 hours of rest per night; they cannot wear armor designed for humanoids.",
        source: `${XPH}, pp. 14–15`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "thri-kreen-psi-like",
        name: "Psi-Like Abilities",
        category: "special-quality",
        description:
          "3/day — chameleon and know direction; 1/day — psionic displacement and metaphysical claw. Manifester level equals 1/2 the thri-kreen's Hit Dice; save DCs are Charisma-based. Thri-kreen are also naturally psionic (1 bonus power point at 1st level). Psionic powers are not modeled by this app; recorded as text.",
        source: `${XPH}, pp. 14–15`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "thri-kreen-darkvision",
        name: "Darkvision",
        category: "special-quality",
        description:
          "Darkvision 60 ft.",
        source: `${XPH}, pp. 14–15`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "thri-kreen-bonus-feat",
        name: "Bonus Feat",
        category: "feat",
        description:
          "Thri-Kreens gain Deflect Arrows as a bonus feat.",
        source: `${XPH}, pp. 14–15`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "ranger",
    source: `${XPH}, pp. 14–15`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "xeph",
    name: "Xeph",
    ruleset: "core",
    size: "Medium",
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: { dex: 2, str: -2 },
    racialHitDice: 0,
    levelAdjustment: 0,
    baseSpeed: 30,
    naturalArmor: 0,
    skillBonuses: {},
    traits: [
      {
        key: "xeph-burst",
        name: "Burst (Su)",
        category: "special-quality",
        description:
          "Three times per day, a xeph can put on a burst of speed: a competence bonus to base speed of +10 feet, plus 10 feet per four character levels beyond 1st, to a maximum of +30 feet at 9th level. A burst lasts 3 rounds.",
        source: `${XPH}, pp. 15–16`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "xeph-resistance",
        name: "Innate Resistance",
        category: "special-quality",
        description:
          "+1 racial bonus on saving throws against powers, spells, and spell-like effects. Xephs are also naturally psionic (1 bonus power point at 1st level).",
        source: `${XPH}, pp. 15–16`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "xeph-darkvision",
        name: "Darkvision",
        category: "special-quality",
        description:
          "Darkvision 60 ft.",
        source: `${XPH}, pp. 15–16`,
        sourceUrl: XPH_PATH,
      },
    ],
    favoredClass: "soulknife",
    source: `${XPH}, pp. 15–16`,
    sourceUrl: XPH_PATH,
  },
];
