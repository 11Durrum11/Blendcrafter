import type { TemplateDefinition } from "@/engine/types";

// Simulacrum templates from Encyclopaedia Arcane – Constructs:
// It Is Alive (Mongoose Publishing, ©2002, MGP 1004), "The
// Artisan's Craft" chapter. In this book's construction system
// a simulacrum is a construct built in the image of a base
// creature, and these five entries are printed in full classic
// template format ("'X' is a template that can be added to…"),
// so they are built as TemplateDefinition records. The book is
// 3.0-era: notations are kept as printed (damage reduction
// 10/+3, "subdual damage", cleric saves, the 3.0 "beast"
// creature type) and are not silently modernised. Source:
// Shaun's own copy, read page by page from his scan (printed
// page = PDF page − 2). Summaries and feature texts are short
// mechanical paraphrases written for this dataset; the book's
// prose is not reproduced.
//
// Modeling notes:
// - Ability lines print a mix of adjustments (Str +1) and set
//   scores (Int 10). Adjustments and Constitution removal are
//   modeled in abilityModifiers; set scores are carried in the
//   feature text, since a delta cannot express them.
// - "Hit Dice: Change to d10" is recorded as an
//   increase-hit-dice patch with an explanatory note, following
//   the Heroes of Horror pack's precedent for die changes.
// - The book prints no level adjustment for these templates
//   (they are applied when a caster constructs a simulacrum,
//   not taken by player characters), so levelAdjustment is 0
//   with the restriction stated in each summary.

const CONSTRUCTS = "Constructs: It Is Alive";
const CONSTRUCTS_PDF =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Constructs. It Is Alive.pdf";
const CONSTRUCT_QUALITIES =
  "Construct qualities (as printed): immune to mind-influencing effects, poison, disease, and similar effects; not subject to critical hits, nonlethal damage, ability damage, energy drain or death from massive damage. Saves change to the saves of a cleric of the same level as the creature has Hit Dice. The construct has no skills and no feats of its own, but construct feats can be purchased with CPs during its creation. Like all simulacra, it cannot disobey its master.";

export const CONSTRUCTS_TEMPLATES: TemplateDefinition[] = [
  {
    id: "homunculus",
    name: "Homunculus",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Simulacrum template: a strange little construct powered by its master's blood and will, used as a spy, messenger or scout, and telepathically connected to its creator. The base creature's type becomes construct and its Hit Dice change to d10; it retains the base creature's special attacks and also gains a poison attack, darkvision 60 ft and a construct's special qualities. The craftsman gains a +2 synergy bonus to his Craft check if he has at least 5 ranks in Alchemy. Construction: caster level 7th; special ability slots 1; skill check modifier +0; ritual time 1 week; spells required arcane eye, mirror image and mending; template CP Medium 1, Large 2 (added to the base creature CP cost); Body Rating: base creature (none) 10 gp per HD, vermin 1 per HD. The book prints no level adjustment for this template (it is applied when a caster builds a simulacrum, not taken by a player character), so 0 is recorded.",
    source: `${CONSTRUCTS}, pp. 37-38`,
    sourceUrl: CONSTRUCTS_PDF,
    crModifier: 1,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: ["Vermin"],
        note: "Base creature 'none' or vermin, as printed. A 'none' base is a body built from scratch: 2 HD, a flying speed of 50 feet with good manoeuvrability, a bite attack, Strength 8 and Dexterity 15 before the template's adjustments.",
      },
    ],
    abilityModifiers: { str: 1, con: null },
    patches: [
      { op: "set-type", value: "Construct" },
      {
        op: "increase-hit-dice",
        note: "Hit Dice: change to d10, as printed (a die-size set, not a step count — apply d10s directly). Base creature (none) has 2 HD.",
      },
    ],
    features: [
      {
        key: "homunculus-poison",
        name: "Poison (Ex)",
        description:
          "The homunculus retains all the special attacks of the base creature and also gains a poison attack if it did not have one already: bite, Fortitude save (DC 11); initial damage sleep for 1 minute, secondary damage sleep for another 5d6 minutes. A base creature (none) deals 1d4−1 hp damage with its bite, plus poison.",
        category: "special-attack",
        source: `${CONSTRUCTS}, pp. 37-38`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "homunculus-ability-scores",
        name: "Ability Scores",
        description:
          "Abilities as printed: Str +1, Con –, Int 10, Wis 12, Cha 7 (the Int, Wis and Cha figures are set scores, not adjustments). Base creatures (none) have a Strength score of 8 and a Dexterity score of 15.",
        category: "trait",
        source: `${CONSTRUCTS}, p. 38`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "homunculus-qualities",
        name: "Special Qualities",
        description:
          "The homunculus has all the special qualities of the base creature, plus darkvision with a range of 60 feet and a construct's special qualities. Additional special abilities can be purchased with CPs during the construct's creation if it has any free ability slot. " +
          CONSTRUCT_QUALITIES,
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 38`,
        sourceUrl: CONSTRUCTS_PDF,
      },
    ],
  },
  {
    id: "mockery",
    name: "Mockery",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Simulacrum template: a poor, crude copy of the base creature that loses all of the creature's characteristics in favour of increased toughness and durability. The base creature's type becomes construct and its Hit Dice change to d10; its speed becomes 20 feet, its natural armour is reduced by −1, it can only make one of its available attacks each round, and it loses all special attacks and special qualities — gaining instead darkvision 60 ft, damage reduction 10/magic (converted from the printed 3.0 notation, 10/+3) and a construct's special qualities. The craftsman gains a +2 synergy bonus to his Craft check if he has at least 5 ranks in Knowledge (nature). Construction: caster level 8th; special ability slots 0; skill check modifier +1; ritual time 2 weeks; spells required alter self, mending and stoneskin; template CP Medium 4, Large 8, Huge 16, Gargantuan 32, Colossal 64; Body Rating per HD: vermin 2, plant 1, animal 2, humanoid 1, monstrous humanoid 2, aberration 2. The book prints no level adjustment for this template, so 0 is recorded.",
    source: `${CONSTRUCTS}, pp. 38-39`,
    sourceUrl: CONSTRUCTS_PDF,
    crModifier: 1,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: [
          "Animal",
          "Humanoid",
          "Monstrous Humanoid",
          "Plant",
          "Vermin",
          "Aberration",
        ],
        note: "The template's own prose list names animal, humanoid, monstrous humanoid, plant and vermin; aberration is included here because the book's base-creature section and this template's own Body Rating table both include it (see the extraction report).",
      },
    ],
    abilityModifiers: { str: -1, dex: -4, con: null, int: null },
    patches: [
      { op: "set-type", value: "Construct" },
      {
        op: "increase-hit-dice",
        note: "Hit Dice: change to d10, as printed (a die-size set, not a step count — apply d10s directly).",
      },
      {
        op: "set-speed",
        amount: 20,
        note: "Speed: change to 20 feet per round, as printed.",
      },
    ],
    features: [
      {
        key: "mockery-toughness",
        name: "Crude Durability",
        description:
          "Natural armour is reduced by −1. A mockery loses all the special attacks and all the special qualities of the base creature, and cannot purchase any new special attack with CPs during its creation; it can only make one of its available attacks each round. It gains darkvision with a range of 60 feet and damage reduction 10/magic thanks to its rubbery skin and total lack of a normal anatomy (converted from the printed 3.0 notation, 10/+3).",
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 39`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "mockery-ability-scores",
        name: "Ability Scores",
        description:
          "Abilities as printed: Str −1, Dex −4, Con –, Int –, Wis 10, Cha 1 (the Wis and Cha figures are set scores, not adjustments).",
        category: "trait",
        source: `${CONSTRUCTS}, p. 39`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "mockery-qualities",
        name: "Special Qualities",
        description: CONSTRUCT_QUALITIES,
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 39`,
        sourceUrl: CONSTRUCTS_PDF,
      },
    ],
  },
  {
    id: "perversion",
    name: "Perversion",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Simulacrum template: a twisted version of the base creature, more deformed than a mockery, made of foul materials. The base creature's type becomes construct and its Hit Dice change to d10; its natural armour improves by +2, it retains only the base creature's extraordinary special attacks and qualities, and it gains darkvision 60 ft, the Acid Vomit and Foul Ichors special attacks and a construct's special qualities. The craftsman gains a +2 synergy bonus to his Craft check if he has at least 5 ranks in Knowledge (nature) or Alchemy. Construction: caster level 10th; special ability slots 1; skill check modifier +2; ritual time 2 weeks; spells required alter self, Melf's acid arrow and mending; template CP Medium 8, Large 12, Huge 24, Gargantuan 48, Colossal 96; Body Rating per HD: vermin 3, plant 2, animal 3, humanoid 2. The book prints no level adjustment for this template, so 0 is recorded.",
    source: `${CONSTRUCTS}, pp. 39-40`,
    sourceUrl: CONSTRUCTS_PDF,
    crModifier: 2,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: ["Animal", "Humanoid", "Plant", "Vermin"],
        note: "Base types as printed: animal, humanoid, plant and vermin.",
      },
    ],
    abilityModifiers: { str: 2, con: null },
    patches: [
      { op: "set-type", value: "Construct" },
      {
        op: "increase-hit-dice",
        note: "Hit Dice: change to d10, as printed (a die-size set, not a step count — apply d10s directly).",
      },
    ],
    features: [
      {
        key: "perversion-acid-vomit",
        name: "Acid Vomit (Ex)",
        description:
          "Every 1d4 rounds, a perversion can spew acid at an opponent 20 feet away; this is a ranged touch attack that deals damage depending on the size of the perversion — Fine 1d3, Diminutive 1d6, Tiny 2d6, Small 3d6, Medium 3d8, Large 5d6, Huge 5d8, Gargantuan 6d8, Colossal 6d10.",
        category: "special-attack",
        source: `${CONSTRUCTS}, p. 40`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "perversion-foul-ichors",
        name: "Foul Ichors (Ex)",
        description:
          "Whenever a slashing or piercing weapon successfully hits a perversion, the construct spurts some of its corrosive components at the attacker; the acid deals damage equal to the original attack's, but the attacker can roll Reflex (DC 17) to halve this.",
        category: "special-attack",
        source: `${CONSTRUCTS}, p. 40`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "perversion-ability-scores",
        name: "Ability Scores",
        description:
          "Abilities as printed: Str +2, Con –, Int 10, Wis 9, Cha 1 (the Int, Wis and Cha figures are set scores, not adjustments).",
        category: "trait",
        source: `${CONSTRUCTS}, p. 40`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "perversion-qualities",
        name: "Special Qualities",
        description:
          "A perversion has all the special qualities of the base creature that are extraordinary, plus darkvision with a range of 60 feet and a construct's special qualities. " +
          CONSTRUCT_QUALITIES,
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 40`,
        sourceUrl: CONSTRUCTS_PDF,
      },
    ],
  },
  {
    id: "mimeoi",
    name: "Mimeoi",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Simulacrum template: a perfect copy of the base creature, like the result of a clone spell except the body is not alive and has a will of its own — used as a decoy, infiltrator or spy in telepathic contact with its creator, fixed in the form it was built in. The base creature's type becomes construct and its Hit Dice change to d10; its natural armour improves by +1, it retains the base creature's extraordinary special attacks, gains darkvision 60 ft, the Mimic and Telepathic Link special qualities and a construct's special qualities. The craftsman gains a +2 synergy bonus to his Craft check if he has at least 5 ranks in Knowledge (nature). Construction: caster level 12th; special ability slots 2; skill check modifier +4; ritual time 1 week per base creature's HD; spells required alter self, arcane eye, detect thoughts and mending; template CP Medium 8, Large 12, Huge 24, Gargantuan 48, Colossal 96; Body Rating per HD: animal 2, beast 2, humanoid 2, monstrous humanoid 3, aberration 4. The book prints no level adjustment for this template, so 0 is recorded.",
    source: `${CONSTRUCTS}, pp. 40-41`,
    sourceUrl: CONSTRUCTS_PDF,
    crModifier: 3,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: [
          "Aberration",
          "Animal",
          "Magical Beast",
          "Humanoid",
          "Monstrous Humanoid",
        ],
        note: "Base types as printed: aberration, animal, beast, humanoid and monstrous humanoid. 'Beast' is the 3.0 creature type; it is recorded here as Magical Beast, its 3.5 successor.",
      },
    ],
    abilityModifiers: { con: null },
    patches: [
      { op: "set-type", value: "Construct" },
      {
        op: "increase-hit-dice",
        note: "Hit Dice: change to d10, as printed (a die-size set, not a step count — apply d10s directly).",
      },
    ],
    features: [
      {
        key: "mimeoi-mimic",
        name: "Mimic (Su)",
        description:
          "After spending three rounds studying the creature it is a copy of, or a specimen of the same species in the case of animals and beasts, the mimeoi can act exactly like that creature, gaining a +10 bonus to Bluff and Perform checks for an indeterminate duration, even when not possessing that skill.",
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 41`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "mimeoi-telepathic-link",
        name: "Telepathic Link (Su)",
        description:
          "The mimeoi's creator can look through the creature's eyes and send instructions telepathically by concentrating. The link cannot cross planar boundaries, but its range is otherwise unlimited.",
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 41`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "mimeoi-ability-scores",
        name: "Ability Scores",
        description:
          "Abilities as printed: Con –, Int 10, Wis 9, Cha 11 (the Int, Wis and Cha figures are set scores, not adjustments).",
        category: "trait",
        source: `${CONSTRUCTS}, p. 41`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "mimeoi-qualities",
        name: "Special Qualities",
        description:
          "A mimeoi has all the special qualities of the base creature, plus darkvision with a range of 60 feet and a construct's special qualities. " +
          CONSTRUCT_QUALITIES,
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 41`,
        sourceUrl: CONSTRUCTS_PDF,
      },
    ],
  },
  {
    id: "eidolon",
    name: "Eidolon",
    ruleset: "core",
    timing: "acquired",
    summary:
      "Simulacrum template: the pinnacle of arcane theory — the only construct to have what could pass for a soul, an improvement on the base creature: stronger, faster and more powerful, though it may demonstrate its own will. The base creature's type becomes construct; its Hit Dice change to d10 and increase by 4; all its speeds increase by 10 ft; its natural armour improves by +2; it gains one extra primary attack, darkvision 60 ft and a construct's special qualities, but has a limited lifespan. The craftsman gains a +2 synergy bonus to his Craft check if he has at least 5 ranks in Knowledge (nature). Construction: caster level 16th; special ability slots 4; skill check modifier +9; ritual time 1 month per base creature's HD; spells required geas/quest, limited wish and mending; template CP Medium 20, Large 24, Huge 48, Gargantuan 96, Colossal 192; Body Rating per HD: animal 3, humanoid 4. The book prints no level adjustment for this template, so 0 is recorded.",
    source: `${CONSTRUCTS}, p. 42`,
    sourceUrl: CONSTRUCTS_PDF,
    crModifier: 4,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: ["Animal", "Humanoid"],
        note: "Animal and humanoid base creatures only, as printed.",
      },
    ],
    abilityModifiers: { con: null },
    patches: [
      { op: "set-type", value: "Construct" },
      {
        op: "increase-hit-dice",
        note: "Hit Dice: change to d10 and increase HD by 4, as printed (the die-size change is recorded here; apply d10s directly and add the 4 Hit Dice).",
      },
    ],
    features: [
      {
        key: "eidolon-limited-lifespan",
        name: "Limited Lifespan (Ex)",
        description:
          "As a precaution by the creator, an eidolon only 'lives' for 1d4+4 years. After the eidolon 'dies', enacting the original ritual at one-quarter cost in XP and gold can reanimate it, but all the memories and personality it acquired are erased (roll again for Intelligence, Wisdom and Charisma increases).",
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 42`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "eidolon-ability-scores",
        name: "Ability Scores",
        description:
          "Abilities as printed: Str +1d8, Dex +1d8, Con –, Int 10+2d6, Wis 8+2d6, Cha 11+1d8 (dice-based increases and set scores, which flat modifiers cannot express). Eidolons can be 'programmed' with skills: they have their Intelligence score in skill points multiplied by 2, plus two more points per HD. Alignment: usually neutral — eidolons are the only constructs that can have any alignment, decided by the caster at the time of creation.",
        category: "trait",
        source: `${CONSTRUCTS}, p. 42`,
        sourceUrl: CONSTRUCTS_PDF,
      },
      {
        key: "eidolon-qualities",
        name: "Special Qualities",
        description:
          "An eidolon has all the special qualities of the base creature, plus darkvision with a range of 60 feet and a construct's special qualities. It retains all the base creature's extraordinary special attacks and loses any supernatural or spell-like ability. " +
          CONSTRUCT_QUALITIES,
        category: "special-quality",
        source: `${CONSTRUCTS}, p. 42`,
        sourceUrl: CONSTRUCTS_PDF,
      },
    ],
  },
];
