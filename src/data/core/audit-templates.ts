/**
 * Core Books Audit (2026-10-28): MM templates missing from the recovered
 * core data. The recovered src/data/templates.ts holds Half-Dragon,
 * Vampire, Ghost, and Lycanthrope; these are the other printed SRD
 * templates that the app's template model can express. Skeleton and
 * Zombie are deliberately NOT here: the SRD prints Level Adjustment —
 * for both (they are not playable templates), and their mechanics
 * (dropping/ doubling Hit Dice, ability scores set to —/1, losing all
 * feats and skills) exceed the app's additive patch/modifier model —
 * see the audit addendum in REBUILD-NOTES.md.
 *
 * Numbers follow the template-model convention used for Spellwarped:
 * where the SRD scales Challenge Rating by Hit Dice, crModifier
 * records the middle step and the full schedule is in the summary.
 */
import type { TemplateDefinition } from "@/engine/types";

const M = "https://www.d20srd.org/srd/monsters/";

export const CORE_AUDIT_TEMPLATES: TemplateDefinition[] = [
  {
    id: "celestial",
    name: "Celestial Creature",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature touched by the Upper Planes: gains smite evil, darkvision, spell resistance, and damage reduction and energy resistances that grow with its Hit Dice. CR by Hit Dice: 3 HD or less +0, 4-7 HD +1, 8+ HD +2 (middle step recorded).",
    source: "d20SRD — Monsters: Celestial Creature",
    sourceUrl: `${M}celestialCreature.htm`,
    crModifier: 1,
    levelAdjustment: 2,
    prerequisites: [
      {
        note: "The base creature's Intelligence must be at least 3. Animals and vermin with this template become magical beasts.",
      },
    ],
    patches: [],
    features: [
      {
        key: "celestial-smite-evil",
        name: "Smite Evil",
        description:
          "Once per day, a celestial creature can make a normal melee attack to deal extra damage equal to its Hit Dice (maximum +20) against an evil foe.",
        category: "special-attack",
        source: "d20SRD — Monsters: Celestial Creature",
        sourceUrl: `${M}celestialCreature.htm`,
      },
      {
        key: "celestial-qualities",
        name: "Celestial Qualities",
        description:
          "Darkvision 60 ft. Spell resistance equal to Hit Dice + 5 (maximum 25). Damage reduction and energy resistances scale with Hit Dice — 3 HD or less: resistance 5 to acid, cold, and electricity, no damage reduction; 4-7 HD: resistance 5, DR 5/magic; 8-11 HD: resistance 10, DR 5/magic; 12+ HD: resistance 10, DR 10/magic.",
        category: "special-quality",
        source: "d20SRD — Monsters: Celestial Creature",
        sourceUrl: `${M}celestialCreature.htm`,
      },
    ],
  },
  {
    id: "fiendish",
    name: "Fiendish Creature",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature touched by the Lower Planes: gains smite good, darkvision, spell resistance, and damage reduction and energy resistances that grow with its Hit Dice. CR by Hit Dice: 3 HD or less +0, 4-7 HD +1, 8+ HD +2 (middle step recorded).",
    source: "d20SRD — Monsters: Fiendish Creature",
    sourceUrl: `${M}fiendishCreature.htm`,
    crModifier: 1,
    levelAdjustment: 2,
    prerequisites: [
      {
        note: "The base creature's Intelligence must be at least 3. Animals and vermin with this template become magical beasts.",
      },
    ],
    patches: [],
    features: [
      {
        key: "fiendish-smite-good",
        name: "Smite Good",
        description:
          "Once per day, a fiendish creature can make a normal melee attack to deal extra damage equal to its Hit Dice (maximum +20) against a good foe.",
        category: "special-attack",
        source: "d20SRD — Monsters: Fiendish Creature",
        sourceUrl: `${M}fiendishCreature.htm`,
      },
      {
        key: "fiendish-qualities",
        name: "Fiendish Qualities",
        description:
          "Darkvision 60 ft. Spell resistance equal to Hit Dice + 5 (maximum 25). Damage reduction and energy resistances scale with Hit Dice — 3 HD or less: resistance 5 to cold and fire, no damage reduction; 4-7 HD: resistance 5, DR 5/magic; 8-11 HD: resistance 10, DR 5/magic; 12+ HD: resistance 10, DR 10/magic.",
        category: "special-quality",
        source: "d20SRD — Monsters: Fiendish Creature",
        sourceUrl: `${M}fiendishCreature.htm`,
      },
    ],
  },
  {
    id: "half-celestial",
    name: "Half-Celestial",
    ruleset: "core",
    timing: "inherited",
    summary:
      "The offspring of a celestial and a mortal creature: type becomes Outsider, gains feathered wings, spell-like abilities by Hit Dice, and broad resistances. CR by Hit Dice: 5 HD or less +1, 6-10 HD +2, 11+ HD +3 (middle step recorded).",
    source: "d20SRD — Monsters: Half-Celestial",
    sourceUrl: `${M}halfCelestial.htm`,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        note: "Half-Celestial can be added to any living, corporeal creature with an Intelligence score of 4 or more and a nonevil alignment. A half-celestial's alignment is always good.",
      },
    ],
    abilityModifiers: { str: 4, dex: 2, con: 4, int: 2, wis: 4, cha: 4 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to Outsider; the creature is treated as a native outsider for effects keyed to creature type." },
    ],
    modifiers: [
      {
        id: "half-celestial-natural-armor",
        source: "Half-Celestial",
        sourceUrl: `${M}halfCelestial.htm`,
        target: "ac.natural",
        value: 1,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +1.",
      },
    ],
    features: [
      {
        key: "half-celestial-flight",
        name: "Wings and Flight",
        description:
          "The half-celestial has feathered wings and can fly at twice the base creature's land speed, with good maneuverability.",
        category: "special-quality",
        source: "d20SRD — Monsters: Half-Celestial",
        sourceUrl: `${M}halfCelestial.htm`,
      },
      {
        key: "half-celestial-daylight-smite",
        name: "Daylight and Smite Evil",
        description:
          "A half-celestial can use a daylight effect (as the spell) at will. Once per day it can smite evil: a normal melee attack deals extra damage equal to its Hit Dice (maximum +20) against an evil foe.",
        category: "special-attack",
        source: "d20SRD — Monsters: Half-Celestial",
        sourceUrl: `${M}halfCelestial.htm`,
      },
      {
        key: "half-celestial-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "By Hit Dice (caster level = Hit Dice, Charisma-based DCs): 1-2 HD: protection from evil 3/day, bless; 3-4: aid, detect evil; 5-6: cure serious wounds, neutralize poison; 7-8: holy smite, remove disease; 9-10: dispel evil; 11-12: holy word; 13-14: holy aura 3/day, hallow; 15-16: mass charm monster; 17-18: summon monster IX (celestials only); 19-20: resurrection.",
        category: "special-attack",
        source: "d20SRD — Monsters: Half-Celestial",
        sourceUrl: `${M}halfCelestial.htm`,
      },
      {
        key: "half-celestial-qualities",
        name: "Half-Celestial Qualities",
        description:
          "Darkvision 60 ft. Immunity to disease; +4 racial bonus on Fortitude saves against poison. Resistance 10 to acid, cold, and electricity. Damage reduction 5/magic (11 HD or less) or 10/magic (12+ HD); natural weapons count as magic for overcoming damage reduction. Spell resistance equal to Hit Dice + 10 (maximum 35).",
        category: "special-quality",
        source: "d20SRD — Monsters: Half-Celestial",
        sourceUrl: `${M}halfCelestial.htm`,
      },
    ],
  },
  {
    id: "half-fiend",
    name: "Half-Fiend",
    ruleset: "core",
    timing: "inherited",
    summary:
      "The offspring of a fiend and a mortal creature: type becomes Outsider, gains batlike wings, claws and a bite, spell-like abilities by Hit Dice, and broad resistances. CR by Hit Dice: 4 HD or less +1, 5-10 HD +2, 11+ HD +3 (middle step recorded).",
    source: "d20SRD — Monsters: Half-Fiend",
    sourceUrl: `${M}halfFiend.htm`,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        note: "Half-Fiend can be added to any living, corporeal creature with an Intelligence score of 4 or more and a nongood alignment. A half-fiend's alignment is always evil.",
      },
    ],
    abilityModifiers: { str: 4, dex: 4, con: 2, int: 4, cha: 2 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to Outsider; the creature is treated as a native outsider for effects keyed to creature type." },
    ],
    modifiers: [
      {
        id: "half-fiend-natural-armor",
        source: "Half-Fiend",
        sourceUrl: `${M}halfFiend.htm`,
        target: "ac.natural",
        value: 1,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +1.",
      },
    ],
    features: [
      {
        key: "half-fiend-natural-weapons",
        name: "Claws, Bite, and Wings",
        description:
          "Gains two claw attacks and a bite attack sized by the creature (Medium: claw 1d4, bite 1d6; damage scales with size per the SRD table), and batlike wings granting a fly speed equal to the base creature's land speed, with average maneuverability.",
        category: "special-attack",
        source: "d20SRD — Monsters: Half-Fiend",
        sourceUrl: `${M}halfFiend.htm`,
      },
      {
        key: "half-fiend-smite-good",
        name: "Smite Good",
        description:
          "Once per day, a half-fiend can make a normal melee attack to deal extra damage equal to its Hit Dice (maximum +20) against a good foe.",
        category: "special-attack",
        source: "d20SRD — Monsters: Half-Fiend",
        sourceUrl: `${M}halfFiend.htm`,
      },
      {
        key: "half-fiend-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "By Hit Dice (caster level = Hit Dice, Charisma-based DCs; requires Intelligence or Wisdom 8 or higher; abilities are cumulative, 1/day unless noted): 1-2 HD: darkness 3/day; 3-4: desecrate; 5-6: unholy blight; 7-8: poison 3/day; 9-10: contagion; 11-12: blasphemy; 13-14: unholy aura 3/day, unhallow; 15-16: horrid wilting; 17-18: summon monster IX (fiends only); 19-20: destruction.",
        category: "special-attack",
        source: "d20SRD — Monsters: Half-Fiend",
        sourceUrl: `${M}halfFiend.htm`,
      },
      {
        key: "half-fiend-qualities",
        name: "Half-Fiend Qualities",
        description:
          "Darkvision 60 ft. Immunity to poison. Resistance 10 to acid, cold, electricity, and fire. Damage reduction 5/magic (11 HD or less) or 10/magic (12+ HD). Spell resistance equal to Hit Dice + 10 (maximum 35).",
        category: "special-quality",
        source: "d20SRD — Monsters: Half-Fiend",
        sourceUrl: `${M}halfFiend.htm`,
      },
    ],
  },
  {
    id: "lich",
    name: "Lich",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A spellcaster who has cheated death through a phylactery: type becomes Undead, all Hit Dice become d12s, and the lich gains a fear aura, a paralyzing touch, and formidable defenses. The printed natural armor rule ('+5 or the base creature's natural armor, whichever is better') cannot be expressed as an additive modifier, so it is carried in the features text instead.",
    source: "d20SRD — Monsters: Lich",
    sourceUrl: `${M}lich.htm`,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid"],
        note: "Lich can only be applied to a humanoid. The would-be lich must be able to cast spells with a caster level of 11th or higher and must craft a phylactery (requires Craft Wondrous Item; 120,000 gp).",
      },
    ],
    abilityModifiers: { int: 2, wis: 2, cha: 2, con: null },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to Undead; the creature uses d12 hit dice and has no Constitution score." },
      { op: "increase-hit-dice", amount: 0, note: "All current and future Hit Dice become d12s." },
    ],
    modifiers: [
      {
        id: "lich-turn-resistance",
        source: "Lich",
        sourceUrl: `${M}lich.htm`,
        target: "turn-resistance",
        value: 4,
        mode: "add",
        bonusType: "untyped",
        note: "Turn resistance +4.",
      },
      ...(["hide", "listen", "move-silently", "search", "sense-motive", "spot"] as const).map(
        (skill) =>
          ({
            id: `lich-skill-${skill}`,
            source: "Lich",
            sourceUrl: `${M}lich.htm`,
            target: `skill.${skill}`,
            value: 8,
            mode: "add",
            bonusType: "racial",
            note: "Liches gain a +8 racial bonus on Hide, Listen, Move Silently, Search, Sense Motive, and Spot checks.",
          }) as const
      ),
    ],
    features: [
      {
        key: "lich-natural-armor",
        name: "Natural Armor",
        description:
          "A lich's natural armor bonus increases to +5, or keeps the base creature's natural armor bonus, whichever is better. (Not applied as a modifier: 'whichever is better' is not an additive improvement the resolver can express.)",
        category: "special-quality",
        source: "d20SRD — Monsters: Lich",
        sourceUrl: `${M}lich.htm`,
      },
      {
        key: "lich-fear-aura",
        name: "Fear Aura",
        description:
          "Creatures of less than 5 HD within 60 feet that see the lich must succeed on a Will save or be affected as though by a fear spell from a sorcerer of the lich's level.",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Cha modifier",
        source: "d20SRD — Monsters: Lich",
        sourceUrl: `${M}lich.htm`,
      },
      {
        key: "lich-paralyzing-touch",
        name: "Paralyzing Touch",
        description:
          "A creature touched by the lich must succeed on a Fortitude save or be permanently paralyzed; remove paralysis or a similar spell can free it. The touch also deals 1d8+5 points of negative energy damage (no save).",
        category: "special-attack",
        dcFormula: "10 + 1/2 HD + Cha modifier",
        source: "d20SRD — Monsters: Lich",
        sourceUrl: `${M}lich.htm`,
      },
      {
        key: "lich-defenses",
        name: "Lich Defenses and Phylactery",
        description:
          "Damage reduction 15/bludgeoning and magic. Immunity to cold, electricity, polymorph (though the lich can cast polymorph spells on itself), and all mind-affecting attacks. A destroyed lich re-forms at its phylactery in 1d10 days unless the phylactery (a Tiny magic item with 40 hp, hardness 20, break DC 40) is also destroyed. Bludgeoning weapons and magical attacks deal normal damage to the lich's body.",
        category: "special-quality",
        source: "d20SRD — Monsters: Lich",
        sourceUrl: `${M}lich.htm`,
      },
    ],
  },
];
