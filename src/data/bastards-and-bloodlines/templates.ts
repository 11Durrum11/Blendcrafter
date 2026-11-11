/**
 * Bastards and Bloodlines: A Guidebook to Half-Breeds
 * Green Ronin Publishing, ©2003. d20 System, 3.0-era.
 *
 * Chapter Three templates (printed pp. 65–83), transcribed from Shaun's own
 * scanned copy (read visually; the scan is image-only), 2026-11-04.
 *
 * Feature descriptions are concise mechanical restatements in our own
 * words — numbers, dice and DCs are exact as printed; the book's flavor
 * prose is not copied. 3.0-isms (e.g. damage reduction "10/+1", DR
 * "5/silver" on the half-titan table, shapechanger as a type) are
 * transcribed as printed and flagged in notes-templates.md.
 *
 * Modeling notes:
 * - "Half-elementals" is printed as FOUR separate templates (p. 78:
 *   "Four separate templates are presented below"), so there are four
 *   records (air / earth / fire / water), not one record with forms.
 * - Where CR or LA is printed as a tier, formula or percentage rather
 *   than a flat number, the record carries the lowest/base printed
 *   value (or 0 where no flat value exists) and the full printed rule
 *   is restated in the summary/features. See notes-templates.md.
 */
import type { TemplateDefinition } from "@/engine/types";

const BB_PATH =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Bastards And Bloodlines A Guidebook To Half Breeds.pdf";

export const BASTARDS_TEMPLATES: TemplateDefinition[] = [
  {
    id: "half-beholder",
    name: "Half-Beholder",
    ruleset: "core",
    timing: "inherited",
    summary:
      "Offspring of beholder blood: type becomes Monstrous Humanoid (giants keep their type), natural armor improves by +6, gains a bite attack and 4–9 eyestalks with random spell-like eye rays. CR and LA rise with eyestalk count: CR +3/+4/+5 and LA +6/+7/+8 for 4 / 5–7 / 8–9 eyestalks; the record carries the 4-eyestalk base values.",
    source: "Bastards and Bloodlines, p. 65",
    sourceUrl: BB_PATH,
    crModifier: 3,
    levelAdjustment: 6,
    prerequisites: [
      {
        note: "Half-beholder can be added to any living, corporeal creature other than an outsider.",
      },
    ],
    abilityModifiers: { int: 4, wis: 2, cha: 2 },
    patches: [
      {
        op: "set-type",
        value: "Monstrous Humanoid",
        note: "Type changes to monstrous humanoid, unless the base creature is a giant, in which case its type does not change.",
      },
    ],
    modifiers: [
      {
        id: "half-beholder-natural-armor",
        source: "Half-Beholder",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 6,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +6.",
      },
      {
        id: "half-beholder-skill-spot",
        source: "Half-Beholder",
        sourceUrl: BB_PATH,
        target: "skill.spot",
        value: 4,
        mode: "add",
        bonusType: "racial",
        note: "All-around vision: +4 racial bonus on Spot and Search checks.",
      },
      {
        id: "half-beholder-skill-search",
        source: "Half-Beholder",
        sourceUrl: BB_PATH,
        target: "skill.search",
        value: 4,
        mode: "add",
        bonusType: "racial",
        note: "All-around vision: +4 racial bonus on Spot and Search checks.",
      },
    ],
    features: [
      {
        key: "half-beholder-bite",
        name: "Bite Attack",
        description:
          "Gains a bite attack (use the greater of this damage or the base creature's bite): Fine 1, Diminutive 1d3, Tiny 1d4, Small 1d6, Medium 2d3, Large 2d4, Huge 2d6, Gargantuan 2d8, Colossal 4d6.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 66",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-beholder-eye-rays",
        name: "Eye Rays (Su)",
        description:
          "Has 4–9 eyestalks; each can fire one magical ray per round, even while attacking physically or moving at full speed. Only three rays per round can be aimed into any one arc other than up. Each stalk's effect is determined randomly from: charm monster, charm person, fear (single target), finger of death (3d6+9 damage on a successful save), flesh to stone, inflict moderate wounds (2d8+9, Will half), sleep (single target, any Hit Dice), slow (single target), telekinesis (up to 225 pounds) — no more than two stalks share the same effect. Each effect works as the spell cast by a 9th-level sorcerer but follows the rules for a ray; range 100 feet.",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Con modifier",
        source: "Bastards and Bloodlines, p. 66",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-beholder-all-around-vision",
        name: "All-Around Vision (Ex)",
        description: "+4 racial bonus on Spot and Search checks, and the creature can't be flanked.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 66",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-beholder-darkvision",
        name: "Darkvision (Ex)",
        description: "Darkvision with a 60-foot range.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 66",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-beholder-float",
        name: "Float (Ex)",
        description: "Permanent feather fall effect with personal range, from the head's natural buoyancy.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 66",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-beholder-bonus-feats",
        name: "Bonus Feats",
        description: "Gains Improved Initiative and Shot on the Run as bonus feats. Printed CR by eyestalks: 4 eyestalks +3, 5–7 eyestalks +4, 8–9 eyestalks +5. Printed LA by eyestalks: 4 eyestalks +6, 5–7 eyestalks +7, 8–9 eyestalks +8.",
        category: "feat",
        source: "Bastards and Bloodlines, p. 66",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-creature-biped",
    name: "Half-Creature (Biped)",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A humanoid/monstrous humanoid base creature blended with one animal, beast, magical beast or vermin donor, walking upright: type becomes Monstrous Humanoid and the two creatures' attacks, special attacks, special qualities and abilities are merged by the printed averaging rules. No flat LA is printed — ECL is a rule of thumb (see the construction feature); CR is printed as \"HD + 2\".",
    source: "Bastards and Bloodlines, p. 67",
    sourceUrl: BB_PATH,
    crModifier: 2,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid", "Monstrous Humanoid"],
        note: "Half-creature (biped) can be added to any humanoid or monstrous humanoid; the characteristics of one specific animal, beast, magical beast, or vermin (the donor creature) are applied to the base creature.",
      },
    ],
    patches: [
      {
        op: "set-type",
        value: "Monstrous Humanoid",
        note: "Type changes to monstrous humanoid.",
      },
    ],
    features: [
      {
        key: "half-creature-biped-construction",
        name: "Half-Creature (Biped) Construction",
        description:
          "Size: choose the base creature's size, the donor's size, or a size between the two, with the normal size benefits/penalties and the reach of a tall creature of the new size (a Medium or smaller result loses any reach). Hit Dice change to d8; use the greater of the base or donor total Hit Dice and add 1 HD; class levels give hit points normally. Speed: use the better of the base or donor base speed, and retain any other movement mode either creature has. AC: use the greater natural armor bonus of base or donor. Attacks: retain all base attacks and gain all donor attacks; base attack bonus is that of a monstrous humanoid of its nonclass Hit Dice; where both have the same attack form, use the higher base damage (unless the attacks come from different features, e.g. gore from horns and gore from tusks, in which case both are kept). Attack damage scales up or down by size per the monster advancement rules if the result is larger or smaller than the creature the attack came from.",
        category: "trait",
        source: "Bastards and Bloodlines, p. 67",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-creature-biped-merged-abilities",
        name: "Merged Special Attacks, Qualities and Abilities",
        description:
          "Retains all special attacks and special qualities of the base creature and gains all of the donor creature's. Abilities: average the Strength, Dexterity, Constitution and Wisdom of base and donor, rounding up; use the base creature's Intelligence; Charisma is the higher of the two scores +2. Skills and feats are gained as a monstrous humanoid of its nonclass Hit Dice; all skills of both creatures are class skills, retaining racial bonuses. Treasure: use the better of base and donor in each category. Printed Challenge Rating: HD + 2. Printed Level Adjustment: none as a flat number — as a rule of thumb the ECL should be 2/3 of its total HD plus 1/2 the base or donor creature's CR (whichever is higher), rounded up, adjusted by the GM to match the final creature's power.",
        category: "trait",
        source: "Bastards and Bloodlines, p. 68",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-creature-quadruped",
    name: "Half-Creature (Quadruped)",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A humanoid/monstrous humanoid upper body on the lower body of one animal, beast, magical beast or vermin donor (centaur-style): type becomes Monstrous Humanoid, size and speed are the donor's, and the donor's Strength/Constitution and special abilities are merged in. No flat LA is printed — ECL is a rule of thumb (see the construction feature); CR is printed as \"HD + 2\".",
    source: "Bastards and Bloodlines, p. 69",
    sourceUrl: BB_PATH,
    crModifier: 2,
    levelAdjustment: 0,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid", "Monstrous Humanoid"],
        note: "Half-creature (quadruped) can be added to any humanoid or monstrous humanoid; the characteristics of one specific animal, beast, magical beast, or vermin (the donor creature) are applied to the base creature.",
      },
    ],
    patches: [
      {
        op: "set-type",
        value: "Monstrous Humanoid",
        note: "Type changes to monstrous humanoid (printed in quotes in the book).",
      },
    ],
    features: [
      {
        key: "half-creature-quadruped-construction",
        name: "Half-Creature (Quadruped) Construction",
        description:
          "Size: same as the donor creature. Hit Dice change to d8; use the greater of the base or donor total Hit Dice and add 1 HD; class levels give hit points normally. Speed: same as the donor creature; retain any other movement mode (such as flying) from either creature. AC: use the donor creature's natural armor bonus for the half-creature's AC; if the base creature has any natural armor, increase the half-creature's natural armor bonus by +1. Attacks: retain any bite or claw attacks of the base creature and any hand-held weapon attacks; gain the donor's attacks not relating to the head (excluding bite and gore and possibly slam); base attack bonus is that of a monstrous humanoid of its nonclass Hit Dice (the book's line says \"half-creature (biped)\" here, an apparent misprint). Where both have the same attack form, use the higher base damage. Attack damage scales by size per the monster advancement rules relative to the base creature.",
        category: "trait",
        source: "Bastards and Bloodlines, p. 69",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-creature-quadruped-merged-abilities",
        name: "Merged Special Attacks, Qualities and Abilities",
        description:
          "Retains all special attacks and special qualities of the base creature and gains all of the donor creature's (even head-related ones such as gazes and breath weapons). Abilities: use the donor's Strength and Constitution (+2 to each if the base creature's score is 12 or higher); use the base creature's Dexterity, Wisdom and Intelligence (+2 to Dexterity or Wisdom if the donor's score is 12 or better); Charisma is the higher of the two scores +2. Skills and feats are gained as a monstrous humanoid of its nonclass Hit Dice; all skills of both creatures are class skills, retaining racial bonuses. Treasure: use the better of base and donor in each category. Printed Challenge Rating: HD + 2. Printed Level Adjustment: none as a flat number — as a rule of thumb the ECL should be 2/3 of its Hit Dice plus 1/2 the base or donor creature's CR (whichever is higher), rounded up, adjusted by the GM to match the final creature's power.",
        category: "trait",
        source: "Bastards and Bloodlines, p. 69",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-doppelganger",
    name: "Half-Doppelganger",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A humanoid with doppelganger blood: type changes to shapechanger (a type in 3.0), Hit Dice change to d8, gains two slam attacks, alternate form twice per day, empathy, and immunity to sleep. CR is +2 if the base creature's CR is 5 or less, +1 if it is 6 or more; the record carries +2.",
    source: "Bastards and Bloodlines, p. 70",
    sourceUrl: BB_PATH,
    crModifier: 2,
    levelAdjustment: 3,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid"],
        note: "Half-doppelganger can be added to any humanoid.",
      },
    ],
    abilityModifiers: { con: 2, wis: 2, cha: 2 },
    patches: [
      {
        op: "set-type",
        value: "Shapechanger",
        note: "Type changes to shapechanger as printed (in 3.0 shapechanger was a creature type; in 3.5 it is a subtype). Hit Dice change to d8; class levels give hit points normally.",
      },
    ],
    modifiers: [
      ...(["bluff", "diplomacy", "sense-motive"] as const).map(
        (skill) =>
          ({
            id: `half-doppelganger-skill-${skill}`,
            source: "Half-Doppelganger",
            sourceUrl: BB_PATH,
            target: `skill.${skill}`,
            value: 4,
            mode: "add",
            bonusType: "racial",
            note: "+4 racial bonus on Bluff, Diplomacy, and Sense Motive checks; these skills are always class skills. (Natural armor is not modeled as a modifier: the book sets it to +2 or the base creature's natural armor, whichever is greater.)",
          }) as const
      ),
    ],
    features: [
      {
        key: "half-doppelganger-slam",
        name: "Slam Attacks",
        description:
          "Retains the base creature's natural attacks and gains two slam attacks (use the greater of this damage or the base creature's slam): Fine — (none), Diminutive 1, Tiny 1d3, Small 1d4, Medium 1d6, Large 1d8, Huge 1d10, Gargantuan 1d12, Colossal 2d8. Natural armor is +2 or the base creature's natural armor, whichever is greater.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 71",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-doppelganger-alternate-form",
        name: "Alternate Form (Su)",
        description:
          "Twice per day, can assume the shape of any humanoid of its own size or one size smaller; works like alter self cast by a 12th-level sorcerer. While using alternate form, gains a +10 circumstance bonus on Disguise checks.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 71",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-doppelganger-empathy",
        name: "Empathy (Su)",
        description:
          "By succeeding on a Will save (DC 15) as a free action, learns any character's or animal's current true attitude toward it (hostile, unfriendly, indifferent, or friendly).",
        category: "special-quality",
        dcFormula: "15",
        source: "Bastards and Bloodlines, p. 71",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-doppelganger-immunities",
        name: "Immunities (Ex)",
        description: "Immune to sleep effects. Gains Alertness as a bonus feat. Printed CR: base creature CR 5 or less +2, base creature CR 6 or more +1.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 71",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-medusa",
    name: "Half-Medusa",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A humanoid or monstrous humanoid with medusa blood and a mass of snake hair: natural armor improves by +1, gains a secondary snakes attack delivering Strength poison, and a stunning gaze.",
    source: "Bastards and Bloodlines, p. 72",
    sourceUrl: BB_PATH,
    crModifier: 2,
    levelAdjustment: 3,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid", "Monstrous Humanoid"],
        note: "Half-medusa can be added to any humanoid or monstrous humanoid; if the base creature is humanoid, its type changes to monstrous humanoid.",
      },
    ],
    abilityModifiers: { dex: 2, cha: 2 },
    patches: [
      {
        op: "set-type",
        value: "Monstrous Humanoid",
        note: "If the base creature is humanoid, its type changes to monstrous humanoid; a monstrous humanoid base creature keeps its type.",
      },
    ],
    modifiers: [
      {
        id: "half-medusa-natural-armor",
        source: "Half-Medusa",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 1,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +1.",
      },
    ],
    features: [
      {
        key: "half-medusa-snakes-poison",
        name: "Snakes and Poison (Ex)",
        description:
          "Gains a secondary snakes attack dealing 1d4 damage and delivering poison: Fortitude save negates; initial damage 1d4 temporary Strength, secondary damage 2d4 temporary Strength. Gains Weapon Finesse (snakes) as a bonus feat. If the base creature is humanoid, its skill points are determined as a monstrous humanoid of its nonclass Hit Dice and all its base skills are class skills.",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Con modifier",
        source: "Bastards and Bloodlines, p. 72",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-medusa-stunning-gaze",
        name: "Stunning Gaze (Su)",
        description: "Gaze attack: stun for 1d4 rounds, range 30 feet, Fortitude save negates.",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Cha modifier",
        source: "Bastards and Bloodlines, p. 72",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-rakshasa",
    name: "Half-Rakshasa",
    ruleset: "core",
    timing: "inherited",
    summary:
      "Offspring of a rakshasa and a mortal: type becomes Outsider, speed increases by 10 feet, natural armor improves by +3, gains bite and claw attacks, innate sorcerer spellcasting at half its character level, and alternate form once per day. CR is printed as \"increases by 25%\" rather than a flat number, so crModifier is 0 and the percentage rule is restated in the features.",
    source: "Bastards and Bloodlines, p. 73",
    sourceUrl: BB_PATH,
    crModifier: 0,
    levelAdjustment: 6,
    prerequisites: [
      {
        note: "Half-rakshasa can be added to any corporeal creature.",
      },
    ],
    abilityModifiers: { dex: 2, con: 2, int: 2, wis: 2, cha: 4 },
    patches: [
      {
        op: "set-type",
        value: "Outsider",
        note: "Type changes to outsider. Speed increases by 10 feet (no patch op models a speed increase; see the spellcasting feature). Skill points are gained as an outsider of its nonclass Hit Dice and all base-creature skills are class skills; feats are gained as an outsider or the base creature's total, whichever is greater.",
      },
    ],
    modifiers: [
      {
        id: "half-rakshasa-natural-armor",
        source: "Half-Rakshasa",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 3,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +3.",
      },
    ],
    features: [
      {
        key: "half-rakshasa-bite-claw",
        name: "Bite and Claw Attacks",
        description:
          "Retains the base creature's natural attacks and gains bite and claw attacks (use the greater of these values or the base creature's damage). Bite / claw by size — Fine 1 / —, Diminutive 1d2 / 1, Tiny 1d3 / 1d2, Small 1d4 / 1d3, Medium 1d6 / 1d4, Large 1d8 / 1d6, Huge 2d6 / 1d8, Gargantuan 2d8 / 2d6, Colossal 4d6 / 2d8.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 73",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-rakshasa-spells",
        name: "Spells",
        description:
          "A half-rakshasa with a Charisma score of at least 8 casts spells as a sorcerer whose level is equal to one-half the half-rakshasa's character level. Speed increases by 10 feet. Printed Challenge Rating: increases by 25%.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 73",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-rakshasa-alternate-form",
        name: "Alternate Form (Su)",
        description:
          "Once per day, can assume the shape of any humanoid of its own size or one size smaller; works like alter self cast by a 14th-level sorcerer. While using alternate form, gains a +10 circumstance bonus on Disguise checks.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 74",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-rakshasa-defenses",
        name: "Darkvision and Immunities (Ex)",
        description:
          "Darkvision with a range of 60 feet. Immune to poison, and has acid, cold, electricity, and fire resistance 20.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 74",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-titan",
    name: "Half-Titan",
    ruleset: "core",
    timing: "inherited",
    summary:
      "Offspring of a titan: type becomes Outsider, natural armor improves by +8, speed increases by 20 feet, gains Hit Dice-based spell-like abilities, cleric or wizard spellcasting at a level equal to its Hit Dice, and Hit Dice-based damage reduction and spell resistance (3.0 DR notation as printed).",
    source: "Bastards and Bloodlines, p. 74",
    sourceUrl: BB_PATH,
    crModifier: 5,
    levelAdjustment: 8,
    prerequisites: [
      {
        note: "Half-titan can be added to any corporeal creature.",
      },
    ],
    abilityModifiers: { str: 14, con: 6, int: 4, wis: 4, cha: 2 },
    patches: [
      {
        op: "set-type",
        value: "Outsider",
        note: "Type changes to outsider. Speed increases by 20 feet (no patch op models a speed increase; see the spell-like abilities feature). Skill points are gained as an outsider of its nonclass Hit Dice and all base-creature skills are class skills.",
      },
    ],
    modifiers: [
      {
        id: "half-titan-natural-armor",
        source: "Half-Titan",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 8,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +8.",
      },
    ],
    features: [
      {
        key: "half-titan-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "Gains spell-like abilities by Hit Dice, usable once per day unless noted, as the spells cast by a sorcerer of a level equal to its Hit Dice: 1–2 HD bless 3/day and charm person or animal; 3–4 HD cure light wounds 3/day and levitate; 5–6 HD invisibility and summon nature's ally II; 7–8 HD remove curse and remove fear; 9–10 HD holy smite; 11–12 HD hold monster; 13–14 HD commune with nature; 15–16 HD eyebite; 17–18 HD etherealness; 19+ HD fire storm. Gains Power Attack as a bonus feat.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 75",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-titan-spells",
        name: "Spells",
        description:
          "A half-titan with an Intelligence or Wisdom score of at least 12 can cast spells as either a cleric or a wizard (but not both) of a level equal to its Hit Dice.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 75",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-titan-dr-sr",
        name: "Damage Reduction and Spell Resistance",
        description:
          "Gains damage reduction and spell resistance by Hit Dice (use the base creature's DR or SR instead if better): 1–5 HD DR 5/silver, SR 12; 6–10 HD DR 5/magic, SR 17; 11–15 HD DR 10/magic, SR 21; 16+ HD DR 15/magic, SR 25.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 75",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-vampire",
    name: "Half-Vampire",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A living creature tainted by vampirism — not undead, and its type does not change: Hit Dice step up one die size, natural armor improves by +3, gains slam and bite attacks, charm person gaze, damage reduction 10/magic (converted from the printed 3.0 notation, 10/+1), fast healing 1, and one fixed weakness chosen at creation. CR is +3 if the base creature's CR is 3 or less, +2 if it is 4 or more; the record carries +3.",
    source: "Bastards and Bloodlines, p. 76",
    sourceUrl: BB_PATH,
    crModifier: 3,
    levelAdjustment: 5,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid", "Monstrous Humanoid"],
        note: "Half-vampire can be added to any humanoid or monstrous humanoid. It can also be applied to an undead creature to replace the vampire template in rare circumstances; in that case remove all the vampire template's changes before adding the half-vampire template.",
      },
    ],
    abilityModifiers: { str: 4, dex: 2, cha: 2 },
    patches: [
      {
        op: "increase-hit-dice",
        amount: 1,
        note: "Hit Dice increase one die size as printed: d4 to d6, d6 to d8, d8 to d10, d10 to d12, d12 unchanged. Class levels give hit points normally. The creature's type does not change.",
      },
    ],
    modifiers: [
      {
        id: "half-vampire-natural-armor",
        source: "Half-Vampire",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 3,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +3.",
      },
      ...(["bluff", "hide", "listen", "move-silently", "search", "sense-motive", "spot"] as const).map(
        (skill) =>
          ({
            id: `half-vampire-skill-${skill}`,
            source: "Half-Vampire",
            sourceUrl: BB_PATH,
            target: `skill.${skill}`,
            value: 4,
            mode: "add",
            bonusType: "racial",
            note: "+4 racial bonus on Bluff, Hide, Listen, Move Silently, Search, Sense Motive, and Spot checks; these skills are class skills for the half-vampire.",
          }) as const
      ),
    ],
    features: [
      {
        key: "half-vampire-slam-bite",
        name: "Slam and Bite Attacks",
        description:
          "Retains the base creature's natural attacks and gains a slam and a bite attack (use the greater of these values or the base creature's damage). Slam / bite by size — Fine — / 1d2, Diminutive 1 / 1d3, Tiny 1d2 / 1d4, Small 1d3 / 1d6, Medium 1d4 / 1d8, Large 1d6 / 1d10, Huge 1d8 / 2d6, Gargantuan 2d6 / 2d8, Colossal 2d8 / 4d6.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 76",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-vampire-charm-person",
        name: "Charm Person (Su)",
        description:
          "As a standard action, can attempt a gaze attack on one target (creatures merely looking at the half-vampire are not affected): the target must succeed on a Will save or be affected as though by charm person cast by a sorcerer whose level equals the half-vampire's Hit Dice.",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Cha modifier",
        source: "Bastards and Bloodlines, p. 76",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-vampire-defenses",
        name: "Vampiric Defenses (Su)",
        description:
          "Darkvision 60 feet (Ex). Damage reduction 10/magic (Su). Fast healing (Su) 1 hit point per round as long as it has at least 1 hit point; at 0 hit points or lower it cannot heal and takes the normal penalties, with a chance of bleeding to death. Cold and electricity resistance 10 (Su). Continuous spider climb (Su). Gains a +4 racial bonus on saves against ability damage, energy drain, and death effects. Gains Combat Reflexes, Dodge, and Improved Initiative as bonus feats.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 77",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-vampire-immunities",
        name: "Immunities (Su)",
        description:
          "Although not truly undead, a half-vampire is immune to poison, sleep, paralysis, stunning, disease, nonlethal damage, and death from massive damage, and has a 25% chance of negating a critical hit. It cannot be turned, and is immune to spells and magic effects that only affect the undead.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 77",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-vampire-weakness",
        name: "Half-Vampire Weakness",
        description:
          "Has one of the following weaknesses, determined when the half-vampire is created and never changed. Garlic Sensitivity: –1 penalty on all attack rolls, saving throws, and skill checks in the presence of garlic, and must succeed on a Bluff check (DC 30) every 10 minutes to conceal the discomfort. Sunlight Sensitivity: takes 1d4 points of damage per hour exposed to direct sunlight, and gains no benefit from fast healing in direct or indirect sunlight. Sensitive to Holy Objects: –1 penalty on all attack rolls, saving throws, and skill checks in the presence of a holy symbol or within a sanctified place, and must succeed on a Bluff check (DC 30) every 10 minutes to conceal the discomfort. Printed CR: base creature CR 3 or less +3, base creature CR 4 or more +2.",
        category: "trait",
        source: "Bastards and Bloodlines, p. 77",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-elemental-air",
    name: "Half-Elemental (Air)",
    ruleset: "core",
    timing: "inherited",
    summary:
      "One of four separate printed half-elemental templates: a corporeal creature with air-elemental energy. Type does not change, natural armor improves by +2, gains a fly speed of 30 feet (perfect), Hit Dice-based spell-like abilities, and druid or bard casting at half its Hit Dice. It may not cast spells with earth, iron, stone, or metal in the name.",
    source: "Bastards and Bloodlines, p. 78",
    sourceUrl: BB_PATH,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        note: "Half-elemental (air) can be added to any corporeal creature. The creature's type does not change.",
      },
    ],
    abilityModifiers: { dex: 4, con: 2 },
    patches: [
      {
        op: "add-speed",
        value: "fly",
        amount: 30,
        note: "Gains a natural fly speed of 30 feet with perfect maneuverability; a faster existing fly speed is retained and its maneuverability increases to perfect. Loses any natural burrow or swim speed.",
      },
    ],
    modifiers: [
      {
        id: "half-elemental-air-natural-armor",
        source: "Half-Elemental (Air)",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 2,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +2.",
      },
    ],
    features: [
      {
        key: "half-elemental-air-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "Gains spell-like abilities by Hit Dice, usable once per day, as the spells cast by a sorcerer of a level equal to its Hit Dice: 1–3 HD obscuring mist; 4–5 HD wind wall; 6–8 HD gaseous form; 9–10 HD air walk; 11–13 HD control winds; 14–15 HD chain lightning; 16–18 HD control weather; 19+ HD whirlwind.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 78",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-air-spells",
        name: "Spells",
        description:
          "With a Wisdom or Charisma score of at least 12, can cast spells as either a druid or a bard (but not both) of a level equal to one-half its Hit Dice. May not cast any spell with the words earth, iron, stone, or metal in the name, regardless of source. Skill points are as the base creature; all base-creature skills are class skills, as is Listen. Gains Flyby Attack as a bonus feat.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 78",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-air-mastery",
        name: "Air Mastery (Ex)",
        description: "Airborne creatures suffer a –1 penalty to attack and damage rolls against a half-elemental (air).",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 78",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-air-resilience",
        name: "Resilience (Ex)",
        description:
          "+4 racial bonus against poison, sleep, paralysis, and stunning. Has a 25% chance of ignoring the result of any critical hit or sneak attack, instead taking normal damage from such attacks.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 78",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-elemental-earth",
    name: "Half-Elemental (Earth)",
    ruleset: "core",
    timing: "inherited",
    summary:
      "One of four separate printed half-elemental templates: a corporeal creature without a natural winged fly speed, infused with earth-elemental energy. Type does not change, natural armor improves by +4, gains a burrow speed of 30 feet, Hit Dice-based spell-like abilities, and druid or cleric casting at half its Hit Dice. It may not cast spells with air, fly, fog, lightning, mist, weather, or wind in the name.",
    source: "Bastards and Bloodlines, p. 79",
    sourceUrl: BB_PATH,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        note: "Half-elemental (earth) can be added to any corporeal creature that doesn't have a natural fly speed as a result of wings. The creature's type does not change.",
      },
    ],
    abilityModifiers: { str: 4, con: 2 },
    patches: [
      {
        op: "add-speed",
        value: "burrow",
        amount: 30,
        note: "Gains a natural burrow speed of 30 feet; if it had a natural fly or swim rate greater than 30 feet, the burrow speed increases to match. Loses any natural fly or swim speed.",
      },
    ],
    modifiers: [
      {
        id: "half-elemental-earth-natural-armor",
        source: "Half-Elemental (Earth)",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 4,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +4.",
      },
    ],
    features: [
      {
        key: "half-elemental-earth-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "Gains spell-like abilities by Hit Dice, usable once per day, as the spells cast by a sorcerer of a level equal to its Hit Dice: 1–3 HD magic stone; 4–5 HD soften earth and stone; 6–8 HD stone shape; 9–10 HD spike stones; 11–13 HD wall of stone; 14–15 HD stoneskin; 16–18 HD earthquake; 19+ HD iron body.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 79",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-earth-spells",
        name: "Spells",
        description:
          "With a Wisdom score of at least 12, can cast spells as either a druid or a cleric (but not both) of a level equal to one-half its Hit Dice. May not cast any spell with the words air, fly, fog, lightning, mist, weather, or wind in the name, regardless of source. Skill points are as the base creature; all base-creature skills are class skills, as is Spot. Gains Power Attack as a bonus feat.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 79",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-earth-mastery",
        name: "Earth Mastery and Push (Ex)",
        description:
          "Earth Mastery: gains a +1 attack and damage bonus if both it and its foe touch the ground; suffers a –4 penalty to attack and damage if an opponent is airborne or waterborne (these modifiers are not included in the statistics block). Push: can start a bull rush maneuver without provoking an attack of opportunity, and the Earth Mastery combat modifiers also apply to its opposed Strength checks.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 80",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-earth-resilience",
        name: "Resilience (Ex)",
        description:
          "+4 racial bonus against poison, sleep, paralysis, and stunning. Has a 25% chance of ignoring the result of any critical hit or sneak attack, instead taking normal damage from such attacks.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 80",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-elemental-fire",
    name: "Half-Elemental (Fire)",
    ruleset: "core",
    timing: "inherited",
    summary:
      "One of four separate printed half-elemental templates: a corporeal creature infused with fire-elemental energy. Type does not change (but it gains the fire subtype and loses the cold subtype), natural armor improves by +1, its move rate becomes 50 feet, every melee attack deals +1d6 fire damage, and it gains Hit Dice-based spell-like abilities and sorcerer casting at half its Hit Dice. It may not cast [cold] descriptor spells.",
    source: "Bastards and Bloodlines, p. 80",
    sourceUrl: BB_PATH,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        note: "Half-elemental (fire) can be added to any corporeal creature. The creature's type does not change.",
      },
    ],
    abilityModifiers: { dex: 4, con: 2 },
    patches: [
      {
        op: "add-subtype",
        value: "Fire",
        note: "Gains the fire subtype (Ex): fire immunity and double damage from cold except on a successful save. If the base creature has the cold subtype, it is lost. Speed: gains a move rate of 50 feet — if a move rate is already 50 feet or greater, it increases by 10 feet for every 50 feet of its original rate; loses any swim rate (no patch op models this scaling increase, so it is recorded here and in the Fire Touch feature).",
      },
    ],
    modifiers: [
      {
        id: "half-elemental-fire-natural-armor",
        source: "Half-Elemental (Fire)",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 1,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +1.",
      },
    ],
    features: [
      {
        key: "half-elemental-fire-touch",
        name: "Fire Touch (Su)",
        description:
          "Any melee attack made by a half-elemental (fire) deals an additional 1d6 points of fire damage. Speed: gains a move rate of 50 feet; if any move rate is already 50 feet or greater, increase it by 10 feet for every 50 feet of its original move rate. Loses any swim rate.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 81",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-fire-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "Gains spell-like abilities by Hit Dice, usable once per day, as the spells cast by a sorcerer of a level equal to its Hit Dice: 1–3 HD burning hands; 4–5 HD produce flame; 6–8 HD fireball; 9–10 HD wall of fire; 11–13 HD fire shield; 14–15 HD fire seeds; 16–18 HD fire storm; 19+ HD incendiary cloud.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 81",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-fire-spells",
        name: "Spells",
        description:
          "With a Charisma score of at least 12, can cast spells as a sorcerer of a level equal to one-half its Hit Dice. May not cast any spell with the [cold] descriptor, regardless of source. Skill points are as the base creature; all base-creature skills are class skills, as is Spot. Gains Improved Initiative as a bonus feat.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 81",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-fire-resilience",
        name: "Fire Subtype and Resilience (Ex)",
        description:
          "Fire subtype: fire immunity, double damage from cold except on a successful save; a base creature's cold subtype is lost. Resilience: +4 racial bonus against poison, sleep, paralysis, and stunning, and a 25% chance of ignoring the result of any critical hit or sneak attack, instead taking normal damage from such attacks.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 81",
        sourceUrl: BB_PATH,
      },
    ],
  },
  {
    id: "half-elemental-water",
    name: "Half-Elemental (Water)",
    ruleset: "core",
    timing: "inherited",
    summary:
      "One of four separate printed half-elemental templates: a corporeal creature infused with water-elemental energy. Type does not change (but it loses the fire subtype), natural armor improves by +4, gains a swim speed of 40 feet, the drench ability, Hit Dice-based spell-like abilities, and wizard casting at half its Hit Dice. It may not cast [fire] descriptor spells.",
    source: "Bastards and Bloodlines, p. 82",
    sourceUrl: BB_PATH,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        note: "Half-elemental (water) can be added to any corporeal creature. The creature's type does not change.",
      },
    ],
    abilityModifiers: { str: 2, dex: 2, con: 2 },
    patches: [
      {
        op: "add-speed",
        value: "swim",
        amount: 40,
        note: "Gains a swim move rate of 40 feet. If the base creature has the fire subtype, it is lost (see the Water Mastery feature).",
      },
    ],
    modifiers: [
      {
        id: "half-elemental-water-natural-armor",
        source: "Half-Elemental (Water)",
        sourceUrl: BB_PATH,
        target: "ac.natural",
        value: 4,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +4.",
      },
    ],
    features: [
      {
        key: "half-elemental-water-drench",
        name: "Drench (Ex)",
        description:
          "Can extinguish mundane fires of up to bonfire size with a touch. Its touch affects magical fires as if casting a greater dispelling as a sorcerer of the half-elemental's level or Hit Dice.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 82",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-water-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "Gains spell-like abilities by Hit Dice, usable once per day, as the spells cast by a sorcerer of a level equal to its Hit Dice: 1–3 HD obscuring mist; 4–5 HD fog cloud; 6–8 HD water breathing; 9–10 HD control water; 11–13 HD ice storm; 14–15 HD cone of cold; 16–18 HD acid fog; 19+ HD horrid wilting.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 82",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-water-spells",
        name: "Spells",
        description:
          "With an Intelligence score of at least 12, can cast spells as a wizard of a level equal to one-half its Hit Dice. May not cast any spell with the [fire] descriptor, regardless of the spell's source. Skill points are as the base creature; all base-creature skills are class skills, as is Escape Artist. Gains Cleave as a bonus feat.",
        category: "special-attack",
        source: "Bastards and Bloodlines, p. 82",
        sourceUrl: BB_PATH,
      },
      {
        key: "half-elemental-water-mastery",
        name: "Water Mastery, Fire Evasion and Resilience (Ex)",
        description:
          "Water Mastery: if both the half-elemental and its opponent are in water, it gains a +1 bonus to all melee attack and damage rolls, and a +1 bonus to AC whenever it is in water. Fire Evasion: gains the evasion ability, usable even in heavy armor, but only against spells with the [fire] descriptor. Resilience: +4 racial bonus against poison, sleep, paralysis, and stunning, and a 25% chance of ignoring the result of any critical hit or sneak attack, instead taking normal damage from such attacks. If the base creature has the fire subtype, it is lost.",
        category: "special-quality",
        source: "Bastards and Bloodlines, p. 82",
        sourceUrl: BB_PATH,
      },
    ],
  },
];
