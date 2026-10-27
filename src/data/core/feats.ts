/**
 * A focused Core/SRD feat catalog; numeric modifiers are modeled only where the engine can resolve them directly.
 */
import type { FeatDefinition } from "@/engine/types";

export const CORE_FEATS: FeatDefinition[] = [
  {
    "id": "acrobatic",
    "name": "Acrobatic",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Jump and Tumble checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "agile",
    "name": "Agile",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Balance and Escape Artist checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "alertness",
    "name": "Alertness",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Listen and Spot checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "animal-affinity",
    "name": "Animal Affinity",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Handle Animal and Ride checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "athletic",
    "name": "Athletic",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Climb and Swim checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "deceitful",
    "name": "Deceitful",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Disguise and Forgery checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "deft-hands",
    "name": "Deft Hands",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Sleight of Hand and Use Rope checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "diligent",
    "name": "Diligent",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Appraise and Decipher Script checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "investigator",
    "name": "Investigator",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Gather Information and Search checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "magical-aptitude",
    "name": "Magical Aptitude",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Spellcraft and Use Magic Device checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "negotiator",
    "name": "Negotiator",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Diplomacy and Sense Motive checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "nimble-fingers",
    "name": "Nimble Fingers",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Disable Device and Open Lock checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "persuasive",
    "name": "Persuasive",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Bluff and Intimidate checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "self-sufficient",
    "name": "Self-Sufficient",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Heal and Survival checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "stealthy",
    "name": "Stealthy",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Hide and Move Silently checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "great-fortitude",
    "name": "Great Fortitude",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Fortitude saves.",
    "modifiers": [
      {
        "id": "great-fortitude",
        "source": "Great Fortitude",
        "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
        "target": "save.fort",
        "value": 2,
        "mode": "add",
        "bonusType": "untyped"
      }
    ],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "iron-will",
    "name": "Iron Will",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Will saves.",
    "modifiers": [
      {
        "id": "iron-will",
        "source": "Iron Will",
        "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
        "target": "save.will",
        "value": 2,
        "mode": "add",
        "bonusType": "untyped"
      }
    ],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "lightning-reflexes",
    "name": "Lightning Reflexes",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +2 bonus on Reflex saves.",
    "modifiers": [
      {
        "id": "lightning-reflexes",
        "source": "Lightning Reflexes",
        "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
        "target": "save.ref",
        "value": 2,
        "mode": "add",
        "bonusType": "untyped"
      }
    ],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-initiative",
    "name": "Improved Initiative",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +4 bonus on initiative checks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "toughness",
    "name": "Toughness",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain +3 hit points.",
    "modifiers": [
      {
        "id": "toughness-hp",
        "source": "Toughness",
        "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
        "target": "hp.bonus",
        "value": 3,
        "mode": "add",
        "bonusType": "untyped",
        "note": "Toughness grants +3 hit points."
      }
    ],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "run",
    "name": "Run",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Run at five times normal speed and retain Dexterity bonus to AC while running.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "endurance",
    "name": "Endurance",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +4 bonus on selected endurance-related checks and saves.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "diehard",
    "name": "Diehard",
    "category": "general",
    "prerequisites": [
      "Endurance"
    ],
    "benefitSummary": "Remain conscious while disabled and choose whether to act.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "leadership",
    "name": "Leadership",
    "category": "general",
    "prerequisites": [
      "Character level 6th"
    ],
    "benefitSummary": "Attract a cohort and followers, subject to campaign approval.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "track",
    "name": "Track",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Use Survival to follow tracks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "skill-focus",
    "name": "Skill Focus",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Choose one skill; gain a +3 bonus on checks with it.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "combat-casting",
    "name": "Combat Casting",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain a +4 bonus on Concentration checks made to cast defensively.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "blind-fight",
    "name": "Blind-Fight",
    "category": "combat",
    "prerequisites": [],
    "benefitSummary": "Reroll the miss chance from concealment and retain Dexterity bonus against invisible attackers.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "combat-reflexes",
    "name": "Combat Reflexes",
    "category": "combat",
    "prerequisites": [],
    "benefitSummary": "Make additional attacks of opportunity equal to Dexterity bonus.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "dodge",
    "name": "Dodge",
    "category": "combat",
    "prerequisites": [
      "Dex 13"
    ],
    "benefitSummary": "Choose an opponent; gain a +1 dodge bonus to AC against that opponent.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "mobility",
    "name": "Mobility",
    "category": "combat",
    "prerequisites": [
      "Dex 13",
      "Dodge"
    ],
    "benefitSummary": "Gain a +4 dodge bonus to AC against attacks of opportunity caused by movement.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "spring-attack",
    "name": "Spring Attack",
    "category": "combat",
    "prerequisites": [
      "Dex 13",
      "Dodge",
      "Mobility",
      "BAB +4"
    ],
    "benefitSummary": "Move both before and after one melee attack without provoking from that target.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "combat-expertise",
    "name": "Combat Expertise",
    "category": "combat",
    "prerequisites": [
      "Int 13"
    ],
    "benefitSummary": "Trade up to –5 attack bonus for an equal dodge bonus to AC.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "whirlwind-attack",
    "name": "Whirlwind Attack",
    "category": "combat",
    "prerequisites": [
      "Dex 13",
      "Int 13",
      "Combat Expertise",
      "Dodge",
      "Mobility",
      "Spring Attack",
      "BAB +4"
    ],
    "benefitSummary": "Make one melee attack at full bonus against each opponent within reach.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-unarmed-strike",
    "name": "Improved Unarmed Strike",
    "category": "combat",
    "prerequisites": [],
    "benefitSummary": "Deal lethal unarmed damage and do not provoke when attacking unarmed.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-grapple",
    "name": "Improved Grapple",
    "category": "combat",
    "prerequisites": [
      "Dex 13",
      "Improved Unarmed Strike"
    ],
    "benefitSummary": "Gain +4 on grapple checks and do not provoke when starting a grapple.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "deflect-arrows",
    "name": "Deflect Arrows",
    "category": "combat",
    "prerequisites": [
      "Dex 13",
      "Improved Unarmed Strike"
    ],
    "benefitSummary": "Deflect one ranged attack per round when a hand is free.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "snatch-arrows",
    "name": "Snatch Arrows",
    "category": "combat",
    "prerequisites": [
      "Dex 15",
      "Improved Unarmed Strike",
      "Deflect Arrows"
    ],
    "benefitSummary": "Catch a deflected ranged weapon or projectile.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "stunning-fist",
    "name": "Stunning Fist",
    "category": "combat",
    "prerequisites": [
      "Dex 13",
      "Wis 13",
      "Improved Unarmed Strike",
      "BAB +8"
    ],
    "benefitSummary": "Attempt a limited-use stunning attack with an unarmed strike.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "power-attack",
    "name": "Power Attack",
    "category": "combat",
    "prerequisites": [
      "Str 13"
    ],
    "benefitSummary": "Trade melee attack bonus for damage.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "cleave",
    "name": "Cleave",
    "category": "combat",
    "prerequisites": [
      "Str 13",
      "Power Attack"
    ],
    "benefitSummary": "Make an extra melee attack after dropping an opponent.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "great-cleave",
    "name": "Great Cleave",
    "category": "combat",
    "prerequisites": [
      "Str 13",
      "Power Attack",
      "Cleave",
      "BAB +4"
    ],
    "benefitSummary": "Continue cleaving while dropping opponents.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-bull-rush",
    "name": "Improved Bull Rush",
    "category": "combat",
    "prerequisites": [
      "Str 13",
      "Power Attack"
    ],
    "benefitSummary": "Gain +4 on bull-rush checks and do not provoke.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-overrun",
    "name": "Improved Overrun",
    "category": "combat",
    "prerequisites": [
      "Str 13",
      "Power Attack"
    ],
    "benefitSummary": "Gain +4 on overrun checks and do not provoke.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-sunder",
    "name": "Improved Sunder",
    "category": "combat",
    "prerequisites": [
      "Str 13",
      "Power Attack"
    ],
    "benefitSummary": "Gain +4 on sunder attempts and do not provoke.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-trip",
    "name": "Improved Trip",
    "category": "combat",
    "prerequisites": [
      "Int 13",
      "Combat Expertise"
    ],
    "benefitSummary": "Gain +4 on trip attempts and an immediate follow-up attack.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-disarm",
    "name": "Improved Disarm",
    "category": "combat",
    "prerequisites": [
      "Int 13",
      "Combat Expertise"
    ],
    "benefitSummary": "Gain +4 on disarm attempts and do not provoke.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-feint",
    "name": "Improved Feint",
    "category": "combat",
    "prerequisites": [
      "Int 13",
      "Combat Expertise"
    ],
    "benefitSummary": "Feint in combat as a move action.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "weapon-finesse",
    "name": "Weapon Finesse",
    "category": "combat",
    "prerequisites": [
      "BAB +1"
    ],
    "benefitSummary": "Use Dexterity instead of Strength on attack rolls with eligible light weapons.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "weapon-focus",
    "name": "Weapon Focus",
    "category": "combat",
    "prerequisites": [
      "Proficiency with selected weapon",
      "BAB +1"
    ],
    "benefitSummary": "Gain +1 on attack rolls with one weapon.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "weapon-specialization",
    "name": "Weapon Specialization",
    "category": "combat",
    "prerequisites": [
      "Fighter level 4th",
      "Weapon Focus with selected weapon"
    ],
    "benefitSummary": "Gain +2 on damage rolls with one weapon.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "greater-weapon-focus",
    "name": "Greater Weapon Focus",
    "category": "combat",
    "prerequisites": [
      "Fighter level 8th",
      "Weapon Focus with selected weapon"
    ],
    "benefitSummary": "Gain +1 on attack rolls with one weapon; stacks with Weapon Focus.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "greater-weapon-specialization",
    "name": "Greater Weapon Specialization",
    "category": "combat",
    "prerequisites": [
      "Fighter level 12th",
      "Weapon Specialization with selected weapon"
    ],
    "benefitSummary": "Gain +2 on damage rolls with one weapon; stacks with Weapon Specialization.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-critical",
    "name": "Improved Critical",
    "category": "combat",
    "prerequisites": [
      "Proficiency with selected weapon",
      "BAB +8"
    ],
    "benefitSummary": "Double the threat range of one weapon.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "quick-draw",
    "name": "Quick Draw",
    "category": "combat",
    "prerequisites": [
      "BAB +1"
    ],
    "benefitSummary": "Draw a weapon as a free action.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "point-blank-shot",
    "name": "Point Blank Shot",
    "category": "combat",
    "prerequisites": [],
    "benefitSummary": "Gain +1 on attack and damage rolls with ranged weapons within 30 feet.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "precise-shot",
    "name": "Precise Shot",
    "category": "combat",
    "prerequisites": [
      "Point Blank Shot"
    ],
    "benefitSummary": "Ignore the –4 penalty for firing into melee.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "rapid-shot",
    "name": "Rapid Shot",
    "category": "combat",
    "prerequisites": [
      "Dex 13",
      "Point Blank Shot"
    ],
    "benefitSummary": "Make one extra ranged attack at a –2 penalty on all ranged attacks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "manyshot",
    "name": "Manyshot",
    "category": "combat",
    "prerequisites": [
      "Dex 17",
      "Point Blank Shot",
      "Rapid Shot",
      "BAB +6"
    ],
    "benefitSummary": "Fire multiple arrows at one target as a standard action.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-precise-shot",
    "name": "Improved Precise Shot",
    "category": "combat",
    "prerequisites": [
      "Dex 19",
      "Point Blank Shot",
      "Precise Shot",
      "BAB +11"
    ],
    "benefitSummary": "Ignore most cover and concealment penalties with ranged attacks.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "far-shot",
    "name": "Far Shot",
    "category": "combat",
    "prerequisites": [
      "Point Blank Shot"
    ],
    "benefitSummary": "Double range increments for ranged weapons.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "shot-on-the-run",
    "name": "Shot on the Run",
    "category": "combat",
    "prerequisites": [
      "Dex 13",
      "Dodge",
      "Mobility",
      "Point Blank Shot",
      "BAB +4"
    ],
    "benefitSummary": "Move, make one ranged attack, and move again.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "two-weapon-fighting",
    "name": "Two-Weapon Fighting",
    "category": "combat",
    "prerequisites": [
      "Dex 15"
    ],
    "benefitSummary": "Reduce penalties for fighting with a weapon in each hand.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-two-weapon-fighting",
    "name": "Improved Two-Weapon Fighting",
    "category": "combat",
    "prerequisites": [
      "Dex 17",
      "Two-Weapon Fighting",
      "BAB +6"
    ],
    "benefitSummary": "Gain a second off-hand attack at –5.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "greater-two-weapon-fighting",
    "name": "Greater Two-Weapon Fighting",
    "category": "combat",
    "prerequisites": [
      "Dex 19",
      "Two-Weapon Fighting",
      "Improved Two-Weapon Fighting",
      "BAB +11"
    ],
    "benefitSummary": "Gain a third off-hand attack at –10.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "two-weapon-defense",
    "name": "Two-Weapon Defense",
    "category": "combat",
    "prerequisites": [
      "Dex 15",
      "Two-Weapon Fighting"
    ],
    "benefitSummary": "Gain a +1 shield bonus to AC while wielding two weapons.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "mounted-combat",
    "name": "Mounted Combat",
    "category": "combat",
    "prerequisites": [
      "Ride 1 rank"
    ],
    "benefitSummary": "Negate one hit on your mount each round with a Ride check.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "mounted-archery",
    "name": "Mounted Archery",
    "category": "combat",
    "prerequisites": [
      "Ride 1 rank",
      "Mounted Combat"
    ],
    "benefitSummary": "Halve penalties for ranged attacks while mounted.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "ride-by-attack",
    "name": "Ride-By Attack",
    "category": "combat",
    "prerequisites": [
      "Ride 1 rank",
      "Mounted Combat"
    ],
    "benefitSummary": "Move, make one melee attack while mounted, then continue moving.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "spirited-charge",
    "name": "Spirited Charge",
    "category": "combat",
    "prerequisites": [
      "Ride 1 rank",
      "Mounted Combat",
      "Ride-By Attack"
    ],
    "benefitSummary": "Deal double damage on a mounted charge (triple with a lance).",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "trample",
    "name": "Trample",
    "category": "combat",
    "prerequisites": [
      "Ride 1 rank",
      "Mounted Combat"
    ],
    "benefitSummary": "Overrun opponents with a mount and grant the mount a hoof attack.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "armor-proficiency-light",
    "name": "Armor Proficiency (Light)",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Wear light armor without the normal nonproficiency penalty.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "armor-proficiency-medium",
    "name": "Armor Proficiency (Medium)",
    "category": "general",
    "prerequisites": [
      "Armor Proficiency (Light)"
    ],
    "benefitSummary": "Wear medium armor without the normal nonproficiency penalty.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "armor-proficiency-heavy",
    "name": "Armor Proficiency (Heavy)",
    "category": "general",
    "prerequisites": [
      "Armor Proficiency (Light)",
      "Armor Proficiency (Medium)"
    ],
    "benefitSummary": "Wear heavy armor without the normal nonproficiency penalty.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "shield-proficiency",
    "name": "Shield Proficiency",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Use shields without the normal nonproficiency penalty.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "tower-shield-proficiency",
    "name": "Tower Shield Proficiency",
    "category": "general",
    "prerequisites": [
      "Shield Proficiency"
    ],
    "benefitSummary": "Use tower shields without the normal nonproficiency penalty.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "simple-weapon-proficiency",
    "name": "Simple Weapon Proficiency",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain proficiency with all simple weapons.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "martial-weapon-proficiency",
    "name": "Martial Weapon Proficiency",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain proficiency with one martial weapon.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "exotic-weapon-proficiency",
    "name": "Exotic Weapon Proficiency",
    "category": "general",
    "prerequisites": [
      "BAB +1"
    ],
    "benefitSummary": "Gain proficiency with one exotic weapon.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "brew-potion",
    "name": "Brew Potion",
    "category": "item-creation",
    "prerequisites": [
      "Caster level 3rd"
    ],
    "benefitSummary": "Create potions of spells you know.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "craft-magic-arms-and-armor",
    "name": "Craft Magic Arms and Armor",
    "category": "item-creation",
    "prerequisites": [
      "Caster level 5th"
    ],
    "benefitSummary": "Create magic weapons, armor, and shields.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "craft-rod",
    "name": "Craft Rod",
    "category": "item-creation",
    "prerequisites": [
      "Caster level 9th"
    ],
    "benefitSummary": "Create magic rods.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "craft-staff",
    "name": "Craft Staff",
    "category": "item-creation",
    "prerequisites": [
      "Caster level 12th"
    ],
    "benefitSummary": "Create magic staves.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "craft-wand",
    "name": "Craft Wand",
    "category": "item-creation",
    "prerequisites": [
      "Caster level 5th"
    ],
    "benefitSummary": "Create magic wands.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "craft-wondrous-item",
    "name": "Craft Wondrous Item",
    "category": "item-creation",
    "prerequisites": [
      "Caster level 3rd"
    ],
    "benefitSummary": "Create wondrous magic items.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "forge-ring",
    "name": "Forge Ring",
    "category": "item-creation",
    "prerequisites": [
      "Caster level 12th"
    ],
    "benefitSummary": "Create magic rings.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "scribe-scroll",
    "name": "Scribe Scroll",
    "category": "item-creation",
    "prerequisites": [
      "Caster level 1st"
    ],
    "benefitSummary": "Create scrolls of spells you know.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "empower-spell",
    "name": "Empower Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Increase variable numeric spell effects by one-half; spell level +2.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "enlarge-spell",
    "name": "Enlarge Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Double a spell’s range; spell level +1.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "extend-spell",
    "name": "Extend Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Double a spell’s duration; spell level +1.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "heighten-spell",
    "name": "Heighten Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Cast a spell as a higher-level spell by increasing its slot level.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "maximize-spell",
    "name": "Maximize Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Maximize variable numeric spell effects; spell level +3.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "quicken-spell",
    "name": "Quicken Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Cast one spell as a swift action; spell level +4.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "silent-spell",
    "name": "Silent Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Cast a spell without verbal components; spell level +1.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "still-spell",
    "name": "Still Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Cast a spell without somatic components; spell level +1.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "widen-spell",
    "name": "Widen Spell",
    "category": "metamagic",
    "prerequisites": [],
    "benefitSummary": "Double a spell’s area; spell level +3.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "eschew-materials",
    "name": "Eschew Materials",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Cast spells without material components costing 1 gp or less.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "spell-focus",
    "name": "Spell Focus",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Choose a school; gain +1 to the DC of its spells.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "greater-spell-focus",
    "name": "Greater Spell Focus",
    "category": "general",
    "prerequisites": [
      "Spell Focus in selected school"
    ],
    "benefitSummary": "Gain an additional +1 to the DC of spells from that school.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "spell-penetration",
    "name": "Spell Penetration",
    "category": "general",
    "prerequisites": [],
    "benefitSummary": "Gain +2 on caster-level checks to overcome spell resistance.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "greater-spell-penetration",
    "name": "Greater Spell Penetration",
    "category": "general",
    "prerequisites": [
      "Spell Penetration"
    ],
    "benefitSummary": "Gain an additional +2 on caster-level checks to overcome spell resistance.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "natural-spell",
    "name": "Natural Spell",
    "category": "general",
    "prerequisites": [
      "Wis 13",
      "Wild shape ability"
    ],
    "benefitSummary": "Cast spells while in a wild shape.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "extra-turning",
    "name": "Extra Turning",
    "category": "general",
    "prerequisites": [
      "Ability to turn or rebuke undead"
    ],
    "benefitSummary": "Turn or rebuke undead four additional times per day.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "improved-turning",
    "name": "Improved Turning",
    "category": "general",
    "prerequisites": [
      "Ability to turn or rebuke undead"
    ],
    "benefitSummary": "Turn or rebuke undead as though one level higher.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  },
  {
    "id": "rapid-reload",
    "name": "Rapid Reload",
    "category": "combat",
    "prerequisites": [
      "Weapon Proficiency with selected crossbow"
    ],
    "benefitSummary": "Reload the chosen crossbow more quickly.",
    "modifiers": [],
    "source": "d20SRD — Feats",
    "sourceUrl": "https://www.d20srd.org/srd/feats.htm",
    "ruleset": "core"
  }
];
