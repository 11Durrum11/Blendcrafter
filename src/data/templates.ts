/**
 * Core SRD template data pack: Half-Dragon, Vampire, Ghost, Lycanthrope.
 * Every record carries its d20srd.org `source` citation, per SRD_ATTRIBUTION.md.
 *
 * Modeling notes (matching the resolver design in README.md):
 * - Type changes are structural `patches` (op "set-type"), applied in list order.
 * - Natural armor is worded "improves by +N" in the SRD, so those modifiers use
 *   mode "improve": they compound instead of deduplicating by bonus type.
 * - Prerequisites are checked against the ORIGINAL base creature's type.
 * - Lycanthrope ability adjustments and animal hit dice live on the chosen
 *   form; the resolver applies the selected form as the creature's default
 *   (hybrid) state — a documented simplification of the three-form rules.
 */
import type { TemplateDefinition } from "@/engine/types";

const SRD_MONSTERS = "https://www.d20srd.org/srd/monsters/";

export const TEMPLATES: TemplateDefinition[] = [
  {
    id: "half-dragon",
    name: "Half-Dragon",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature born of draconic heritage: type becomes Dragon, natural armor improves by +4, gains a breath weapon and energy immunity based on its dragon variety.",
    source: "d20SRD — Monsters: Half-Dragon",
    sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
    crModifier: 2,
    levelAdjustment: 3,
    prerequisites: [
      {
        note: "Half-dragon can be applied to any living, corporeal creature.",
      },
    ],
    abilityModifiers: { str: 8, con: 2, int: 2, cha: 2 },
    patches: [
      { op: "set-type", value: "Dragon", note: "Type changes to Dragon; the creature gains dragon traits." },
      { op: "increase-hit-dice", amount: 1, note: "Hit Dice increase by one die size (racial HD and class levels per SRD are unchanged for class dice; racial dice step up)." },
    ],
    modifiers: [
      {
        id: "half-dragon-natural-armor",
        source: "Half-Dragon",
        sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
        target: "ac.natural",
        value: 4,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +4.",
      },
    ],
    features: [
      {
        key: "half-dragon-senses",
        name: "Draconic Senses",
        description: "Low-light vision and darkvision out to 60 feet.",
        category: "special-quality",
        source: "d20SRD — Monsters: Half-Dragon",
        sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
      },
      {
        key: "half-dragon-immunities",
        name: "Draconic Immunities",
        description: "Immunity to sleep and paralysis effects, plus immunity to one energy type determined by the dragon variety.",
        category: "special-quality",
        source: "d20SRD — Monsters: Half-Dragon",
        sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
      },
      {
        key: "half-dragon-natural-weapons",
        name: "Claws and Bite",
        description: "Gains two claw attacks and a bite attack sized by the creature (if the base creature did not already have them).",
        category: "special-attack",
        source: "d20SRD — Monsters: Half-Dragon",
        sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
      },
    ],
    forms: [
      {
        id: "black",
        name: "Black Dragon",
        description: "Line of acid breath weapon; immunity to acid.",
        features: [
          {
            key: "half-dragon-breath",
            name: "Breath Weapon (Acid)",
            description: "Line of acid, damage sized by the creature's size (2d6 to 6d6), usable once per day.",
            category: "special-attack",
            dcFormula: "10 + 1/2 racial HD + Con modifier",
            source: "d20SRD — Monsters: Half-Dragon",
            sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
          },
        ],
      },
      {
        id: "blue",
        name: "Blue Dragon",
        description: "Line of lightning breath weapon; immunity to electricity.",
        features: [
          {
            key: "half-dragon-breath",
            name: "Breath Weapon (Lightning)",
            description: "Line of lightning, damage sized by the creature's size (2d6 to 6d6), usable once per day.",
            category: "special-attack",
            dcFormula: "10 + 1/2 racial HD + Con modifier",
            source: "d20SRD — Monsters: Half-Dragon",
            sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
          },
        ],
      },
      {
        id: "green",
        name: "Green Dragon",
        description: "Cone of corrosive (acid) gas breath weapon; immunity to acid.",
        features: [
          {
            key: "half-dragon-breath",
            name: "Breath Weapon (Acid)",
            description: "Cone of corrosive gas, damage sized by the creature's size (2d6 to 6d6), usable once per day.",
            category: "special-attack",
            dcFormula: "10 + 1/2 racial HD + Con modifier",
            source: "d20SRD — Monsters: Half-Dragon",
            sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
          },
        ],
      },
      {
        id: "red",
        name: "Red Dragon",
        description: "Cone of fire breath weapon; immunity to fire.",
        features: [
          {
            key: "half-dragon-breath",
            name: "Breath Weapon (Fire)",
            description: "Cone of fire, damage sized by the creature's size (2d6 to 6d6), usable once per day.",
            category: "special-attack",
            dcFormula: "10 + 1/2 racial HD + Con modifier",
            source: "d20SRD — Monsters: Half-Dragon",
            sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
          },
        ],
      },
      {
        id: "white",
        name: "White Dragon",
        description: "Cone of cold breath weapon; immunity to cold.",
        features: [
          {
            key: "half-dragon-breath",
            name: "Breath Weapon (Cold)",
            description: "Cone of cold, damage sized by the creature's size (2d6 to 6d6), usable once per day.",
            category: "special-attack",
            dcFormula: "10 + 1/2 racial HD + Con modifier",
            source: "d20SRD — Monsters: Half-Dragon",
            sourceUrl: `${SRD_MONSTERS}halfDragon.htm`,
          },
        ],
      },
    ],
  },
  {
    id: "vampire",
    name: "Vampire",
    ruleset: "core",
    timing: "acquired",
    summary:
      "An undead predator: type becomes Undead, natural armor improves by +6, gains fast healing, damage reduction, energy drain, and a host of supernatural powers — and weaknesses.",
    source: "d20SRD — Monsters: Vampire",
    sourceUrl: `${SRD_MONSTERS}vampire.htm`,
    crModifier: 2,
    levelAdjustment: 8,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid", "Monstrous Humanoid"],
        note: "Vampire can only be applied to a humanoid or monstrous humanoid base creature.",
      },
    ],
    abilityModifiers: { str: 6, dex: 4, int: 2, wis: 2, cha: 4, con: null },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to Undead (augmented base type); the creature uses d12 hit dice and has no Constitution score." },
      { op: "increase-hit-dice", amount: 0, note: "All current and future Hit Dice become d12s." },
    ],
    modifiers: [
      {
        id: "vampire-natural-armor",
        source: "Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
        target: "ac.natural",
        value: 6,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +6.",
      },
      {
        id: "vampire-turn-resistance",
        source: "Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
        target: "turn-resistance",
        value: 4,
        mode: "add",
        bonusType: "untyped",
        note: "Turn resistance +4.",
      },
      ...(["bluff", "hide", "listen", "move-silently", "search", "sense-motive", "spot"] as const).map(
        (skill) =>
          ({
            id: `vampire-skill-${skill}`,
            source: "Vampire",
            sourceUrl: `${SRD_MONSTERS}vampire.htm`,
            target: `skill.${skill}`,
            value: 8,
            mode: "add",
            bonusType: "racial",
            note: "Vampires gain a +8 racial bonus on Bluff, Hide, Listen, Move Silently, Search, Sense Motive, and Spot checks.",
          }) as const
      ),
    ],
    features: [
      {
        key: "vampire-slam",
        name: "Slam Attack / Energy Drain",
        description: "A vampire's slam attack deals two negative levels in addition to damage (each removable by a Fortitude save after 24 hours).",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Cha modifier",
        source: "d20SRD — Monsters: Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
      },
      {
        key: "vampire-blood-drain",
        name: "Blood Drain",
        description: "A vampire can suck blood from a grappled victim, dealing 1d4 points of Constitution drain each round it maintains the pin.",
        category: "special-attack",
        source: "d20SRD — Monsters: Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
      },
      {
        key: "vampire-dominate",
        name: "Dominate",
        description: "A vampire can crush a humanoid opponent's will with a glance (dominate person effect, Will negates).",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Cha modifier",
        source: "d20SRD — Monsters: Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
      },
      {
        key: "vampire-children-of-the-night",
        name: "Children of the Night",
        description: "Once per day, a vampire can call forth a pack of rats, bats, or wolves to serve it.",
        category: "special-attack",
        source: "d20SRD — Monsters: Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
      },
      {
        key: "vampire-create-spawn",
        name: "Create Spawn",
        description: "A humanoid or monstrous humanoid slain by a vampire's energy drain or blood drain rises as a vampire spawn under its creator's control.",
        category: "special-attack",
        source: "d20SRD — Monsters: Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
      },
      {
        key: "vampire-defenses",
        name: "Vampiric Defenses",
        description: "Damage reduction 10/silver and magic; resistance to cold 10 and electricity 10; fast healing 5; gaseous form and alternate form (dire bat or wolf) at will.",
        category: "special-quality",
        source: "d20SRD — Monsters: Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
      },
      {
        key: "vampire-spider-climb",
        name: "Spider Climb",
        description: "A vampire can climb sheer surfaces as though with a spider climb spell.",
        category: "special-quality",
        source: "d20SRD — Monsters: Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
      },
      {
        key: "vampire-weaknesses",
        name: "Vampire Weaknesses",
        description: "Cannot tolerate garlic or mirrors, cannot enter a home uninvited, is destroyed by direct sunlight exposure, recoils from holy symbols, and is helpless without its coffin.",
        category: "special-quality",
        source: "d20SRD — Monsters: Vampire",
        sourceUrl: `${SRD_MONSTERS}vampire.htm`,
      },
    ],
  },
  {
    id: "ghost",
    name: "Ghost",
    ruleset: "core",
    timing: "acquired",
    summary:
      "The undead spirit of a dead creature: type becomes Undead (Incorporeal), loses Strength and Constitution, gains manifestation, rejuvenation, and one or more ghostly special attacks.",
    source: "d20SRD — Monsters: Ghost",
    sourceUrl: `${SRD_MONSTERS}ghost.htm`,
    crModifier: 2,
    levelAdjustment: 5,
    prerequisites: [
      {
        allowedBaseTypes: ["Aberration", "Animal", "Dragon", "Giant", "Humanoid", "Magical Beast", "Monstrous Humanoid", "Plant"],
        note: "Ghost can be applied to an aberration, animal, dragon, giant, humanoid, magical beast, monstrous humanoid, or plant; the base creature must have a Charisma score of at least 6.",
      },
    ],
    abilityModifiers: { cha: 4, str: null, con: null },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to Undead; the creature uses d12 hit dice and has no Constitution score." },
      { op: "add-subtype", value: "Incorporeal", note: "Gains the incorporeal subtype: no physical body, no Strength score, uses Dexterity for melee and Charisma for deflection AC." },
      { op: "add-speed", value: "fly", amount: 30, note: "A manifested ghost gains a fly speed of 30 feet (perfect maneuverability) if the base creature could not already fly." },
    ],
    modifiers: [
      {
        id: "ghost-turn-resistance",
        source: "Ghost",
        sourceUrl: `${SRD_MONSTERS}ghost.htm`,
        target: "turn-resistance",
        value: 4,
        mode: "add",
        bonusType: "untyped",
        note: "Turn resistance +4.",
      },
      ...(["hide", "listen", "search", "spot"] as const).map(
        (skill) =>
          ({
            id: `ghost-skill-${skill}`,
            source: "Ghost",
            sourceUrl: `${SRD_MONSTERS}ghost.htm`,
            target: `skill.${skill}`,
            value: 8,
            mode: "add",
            bonusType: "racial",
            note: "Ghosts gain a +8 racial bonus on Hide, Listen, Search, and Spot checks.",
          }) as const
      ),
    ],
    features: [
      {
        key: "ghost-manifestation",
        name: "Manifestation",
        description: "A ghost dwells on the Ethereal Plane and can manifest partially into the Material Plane, becoming incorporeal and visible.",
        category: "special-quality",
        source: "d20SRD — Monsters: Ghost",
        sourceUrl: `${SRD_MONSTERS}ghost.htm`,
      },
      {
        key: "ghost-rejuvenation",
        name: "Rejuvenation",
        description: "A destroyed ghost restores itself in 2d4 days unless the condition that keeps it bound is resolved.",
        category: "special-quality",
        source: "d20SRD — Monsters: Ghost",
        sourceUrl: `${SRD_MONSTERS}ghost.htm`,
      },
      {
        key: "ghost-special-attacks",
        name: "Ghostly Special Attacks",
        description: "Gain one to three special attacks (chosen when the template is applied): corrupting gaze, corrupting touch, draining touch, frightful moan, horrific appearance, malevolence, or telekinesis.",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Cha modifier",
        source: "d20SRD — Monsters: Ghost",
        sourceUrl: `${SRD_MONSTERS}ghost.htm`,
      },
    ],
  },
  {
    id: "lycanthrope",
    name: "Lycanthrope",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A shapechanger cursed (or born) with an animal form: gains the animal's hit dice and physical ability adjustments in hybrid/animal form, damage reduction overcome by silver, scent, and the curse of lycanthropy. CR uses the SRD's flat +3 simplification.",
    source: "d20SRD — Monsters: Lycanthrope",
    sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
    crModifier: 3,
    levelAdjustment: 3,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid", "Giant"],
        note: "Lycanthrope can only be applied to a humanoid or giant base creature roughly within one size category of the animal form.",
      },
    ],
    patches: [
      { op: "add-subtype", value: "Shapechanger", note: "Gains the shapechanger subtype." },
    ],
    features: [
      {
        key: "lycanthrope-alternate-form",
        name: "Alternate Form",
        description: "Can assume the form of the chosen animal, or a bipedal hybrid form. Ability adjustments and animal hit dice are modeled for the hybrid/animal state.",
        category: "special-quality",
        source: "d20SRD — Monsters: Lycanthrope",
        sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
      },
      {
        key: "lycanthrope-dr",
        name: "Damage Reduction",
        description: "In animal or hybrid form: damage reduction 10/silver (natural lycanthrope).",
        category: "special-quality",
        source: "d20SRD — Monsters: Lycanthrope",
        sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
      },
      {
        key: "lycanthrope-curse",
        name: "Curse of Lycanthropy",
        description: "Any humanoid or giant hit by the lycanthrope's bite attack in animal or hybrid form must succeed on a DC 15 Fortitude save or contract lycanthropy.",
        category: "special-attack",
        dcFormula: "15",
        source: "d20SRD — Monsters: Lycanthrope",
        sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
      },
      {
        key: "lycanthrope-senses",
        name: "Scent and Low-Light Vision",
        description: "Gains the scent special quality and low-light vision in all forms.",
        category: "special-quality",
        source: "d20SRD — Monsters: Lycanthrope",
        sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
      },
    ],
    forms: [
      {
        id: "werewolf",
        name: "Werewolf (Wolf)",
        description: "Wolf form: 2 animal HD; +2 Str, +4 Dex, +4 Con, +2 Wis; natural armor improves by +4 total in animal/hybrid form.",
        hitDiceIncrease: 2,
        abilityModifiers: { str: 2, dex: 4, con: 4, wis: 2 },
        modifiers: [
          {
            id: "werewolf-natural-armor",
            source: "Lycanthrope (Wolf)",
            sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
            target: "ac.natural",
            value: 4,
            mode: "improve",
            bonusType: "natural-armor",
            note: "Wolf's natural armor (+2) plus the lycanthrope's +2 in animal/hybrid form.",
          },
        ],
      },
      {
        id: "werebear",
        name: "Werebear (Brown Bear)",
        description: "Brown bear form: 6 animal HD; +16 Str, +2 Dex, +8 Con, +2 Wis; natural armor improves by +7 total in animal/hybrid form.",
        hitDiceIncrease: 6,
        abilityModifiers: { str: 16, dex: 2, con: 8, wis: 2 },
        modifiers: [
          {
            id: "werebear-natural-armor",
            source: "Lycanthrope (Brown Bear)",
            sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
            target: "ac.natural",
            value: 7,
            mode: "improve",
            bonusType: "natural-armor",
            note: "Brown bear's natural armor (+5) plus the lycanthrope's +2 in animal/hybrid form.",
          },
        ],
      },
      {
        id: "wereboar",
        name: "Wereboar (Boar)",
        description: "Boar form: 3 animal HD; +4 Str, +6 Con, +2 Wis; natural armor improves by +6 total in animal/hybrid form.",
        hitDiceIncrease: 3,
        abilityModifiers: { str: 4, con: 6, wis: 2 },
        modifiers: [
          {
            id: "wereboar-natural-armor",
            source: "Lycanthrope (Boar)",
            sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
            target: "ac.natural",
            value: 6,
            mode: "improve",
            bonusType: "natural-armor",
            note: "Boar's natural armor (+4) plus the lycanthrope's +2 in animal/hybrid form.",
          },
        ],
      },
      {
        id: "wererat",
        name: "Wererat (Dire Rat)",
        description: "Dire rat form: 1 animal HD; +6 Dex, +2 Con, +2 Wis; natural armor improves by +3 total in animal/hybrid form.",
        hitDiceIncrease: 1,
        abilityModifiers: { dex: 6, con: 2, wis: 2 },
        modifiers: [
          {
            id: "wererat-natural-armor",
            source: "Lycanthrope (Dire Rat)",
            sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
            target: "ac.natural",
            value: 3,
            mode: "improve",
            bonusType: "natural-armor",
            note: "Dire rat's natural armor (+1) plus the lycanthrope's +2 in animal/hybrid form.",
          },
        ],
      },
      {
        id: "weretiger",
        name: "Weretiger (Tiger)",
        description: "Tiger form: 6 animal HD; +12 Str, +4 Dex, +6 Con, +2 Wis; natural armor improves by +5 total in animal/hybrid form.",
        hitDiceIncrease: 6,
        abilityModifiers: { str: 12, dex: 4, con: 6, wis: 2 },
        modifiers: [
          {
            id: "weretiger-natural-armor",
            source: "Lycanthrope (Tiger)",
            sourceUrl: `${SRD_MONSTERS}lycanthrope.htm`,
            target: "ac.natural",
            value: 5,
            mode: "improve",
            bonusType: "natural-armor",
            note: "Tiger's natural armor (+3) plus the lycanthrope's +2 in animal/hybrid form.",
          },
        ],
      },
    ],
  },
];
