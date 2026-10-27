/**
 * Book of Exalted Deeds templates: the two playable templates from
 * Chapter 8 of Book of Exalted Deeds (Wizards of the Coast). Built
 * 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Book of Exalted Deeds.pdf
 *
 * The chapter's third template, Sacred Watcher (pp. 183-184; CR +2,
 * LA +5), is deliberately omitted: it changes the creature's type to
 * "deathless," which the app's creature-type list cannot represent, so
 * it is left out rather than mis-modeled. See the Batch 3 addendum in
 * REBUILD-NOTES.md.
 */
import type { TemplateDefinition } from "@/engine/types";

const BOED = "Book of Exalted Deeds";
const BOED_PATH = "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf";
const CH8 = `${BOED} — Chapter 8: Monsters`;

export const BOOK_OF_EXALTED_DEEDS_TEMPLATES: TemplateDefinition[] = [
  {
    id: "saint",
    name: "Saint",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A living exemplar of good, sanctified: type becomes Outsider (native), gains holy power and holy touch, spell-like abilities, damage reduction and fast healing that scale with Hit Dice, immunities, a protective aura, and tongues.",
    source: `${CH8} — Saint (pp. 184–186)`,
    sourceUrl: BOED_PATH,
    crModifier: 2,
    levelAdjustment: 2,
    prerequisites: [
      {
        note: "Saint is an acquired template that can be added to any living creature of good alignment that is not an outsider or an elemental. Becoming a saint also requires a lifetime of exalted deeds and a major sacrifice, as described under Sainthood in Chapter 2.",
      },
    ],
    abilityModifiers: { con: 2, wis: 2, cha: 4 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to Outsider; the creature gains outsider traits." },
      { op: "add-subtype", value: "Native", note: "Gains the native subtype." },
    ],
    features: [
      {
        key: "saint-ac",
        name: "Saintly Insight",
        description: "A saint gains an insight bonus to Armor Class equal to her Wisdom bonus.",
        category: "special-quality",
        source: `${CH8} — Saint (p. 185)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-holy-power",
        name: "Holy Power (Su)",
        description: "The save DCs of all the saint's special attacks — including spells, spell-like, supernatural, and extraordinary abilities — increase by +2.",
        category: "special-attack",
        source: `${CH8} — Saint (p. 185)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-holy-touch",
        name: "Holy Touch (Su)",
        description: "The saint's melee attacks with any weapon (or unarmed) deal an additional 1d6 points of holy damage against evil creatures, and 1d8 points against evil undead and evil outsiders. Any evil creature that strikes the saint with a natural weapon takes holy damage as if hit by the saint's attack.",
        category: "special-attack",
        source: `${CH8} — Saint (p. 185)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-spell-like-abilities",
        name: "Saint Spell-Like Abilities",
        description: "At will — guidance, resistance, virtue, and bless. Caster level equals the saint's Hit Dice total; save DCs are Charisma-based.",
        category: "special-attack",
        source: `${CH8} — Saint (p. 185)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-damage-reduction",
        name: "Saint Damage Reduction (Ex)",
        description: "Damage reduction by Hit Dice: 1-3 HD none, 4-7 HD 5/magic, 8-11 HD 5/evil, 12+ HD 10/evil. If the base creature already has damage reduction, use the better value.",
        category: "special-quality",
        source: `${CH8} — Saint (pp. 185–186)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-fast-healing",
        name: "Saint Fast Healing (Ex)",
        description: "Each round, the saint heals damage equal to half her Hit Dice (including character levels), to a maximum of 10 points. If the base creature already has fast healing, use the better value.",
        category: "special-quality",
        source: `${CH8} — Saint (p. 186)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-immunities-resistances",
        name: "Saint Immunities and Resistances (Ex)",
        description: "Immune to acid, cold, electricity, and petrification. Resistance to fire 10, and a +4 racial bonus on Fortitude saves against poison.",
        category: "special-quality",
        source: `${CH8} — Saint (p. 186)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-keen-vision",
        name: "Keen Vision (Ex)",
        description: "Low-light vision and darkvision out to 60 feet.",
        category: "special-quality",
        source: `${CH8} — Saint (p. 186)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-protective-aura",
        name: "Protective Aura (Su)",
        description: "As a free action, the saint can surround herself with a nimbus of light with a radius of 20 feet, acting as a double-strength magic circle against evil and as a lesser globe of invulnerability, both as cast by a cleric of level equal to the saint's Hit Dice.",
        category: "special-quality",
        source: `${CH8} — Saint (p. 186)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "saint-tongues",
        name: "Tongues (Su)",
        description: "The saint can speak with any creature that has a language, as though using a tongues spell cast by a 14th-level cleric. This ability is always active.",
        category: "special-quality",
        source: `${CH8} — Saint (p. 186)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "sanctified-creature",
    name: "Sanctified Creature",
    ruleset: "core",
    timing: "acquired",
    summary:
      "An evil creature redeemed by the sanctify the wicked spell: it keeps its type, loses its inherently evil supernatural and spell-like abilities, and gains a light ray, an aura of menace, a permanent magic circle against evil, and tongues. Alignment becomes good.",
    source: `${CH8} — Sanctified Creature (pp. 186–187)`,
    sourceUrl: BOED_PATH,
    crModifier: 1,
    levelAdjustment: 2,
    prerequisites: [
      {
        note: "Sanctified creature is an acquired template that can be added to any evil creature except for outsiders with the evil subtype, typically through the sanctify the wicked spell. The creature's alignment becomes always good (its chaos/law axis does not change), and it loses all benefits of the template if it reverts to evil.",
      },
    ],
    patches: [],
    features: [
      {
        key: "sanctified-light-ray",
        name: "Light Ray (Su)",
        description: "Once per round as a standard action, the sanctified creature can fire a ray of searing light from its eyes: a ranged touch attack with a maximum range of 60 feet, dealing 1d6 points of damage per 2 Hit Dice (maximum 10d6) against evil creatures. It has no harmful effect on nonevil creatures.",
        category: "special-attack",
        source: `${CH8} — Sanctified Creature (pp. 186–187)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "sanctified-weapons",
        name: "Sanctified Weapons",
        description: "The sanctified creature's natural weapons, and any weapons it wields, are considered good-aligned for the purpose of overcoming damage reduction.",
        category: "special-quality",
        source: `${CH8} — Sanctified Creature (p. 186)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "sanctified-loss",
        name: "Loss of Evil Powers",
        description: "The sanctified creature loses all of its preexisting supernatural and spell-like abilities, but retains its extraordinary abilities. Damage reduction that could be bypassed with good weapons is instead bypassed by evil weapons. It loses any vile feats it possessed, with no replacement; if it has the good subtype, it gains access to exalted feats.",
        category: "special-quality",
        source: `${CH8} — Sanctified Creature (p. 187)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "sanctified-aura-of-menace",
        name: "Aura of Menace (Su)",
        description: "A righteous aura surrounds the sanctified creature: any hostile creature within 20 feet must make a Will save (DC 10 + 1/2 the sanctified creature's Hit Dice + its Charisma modifier) or take a -2 penalty on attacks, AC, and saves for one day or until it successfully hits the sanctified creature. A creature that resists or breaks the effect cannot be affected again by that sanctified creature's aura for one day.",
        category: "special-quality",
        source: `${CH8} — Sanctified Creature (p. 187)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "sanctified-magic-circle",
        name: "Magic Circle against Evil (Su)",
        description: "A magic circle against evil effect always surrounds the sanctified creature, as the spell (caster level equals the sanctified creature's Hit Dice, maximum 14th).",
        category: "special-quality",
        source: `${CH8} — Sanctified Creature (p. 187)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "sanctified-tongues",
        name: "Tongues (Su)",
        description: "The sanctified creature can speak with any creature that has a language, as though using a tongues spell (caster level equals its Hit Dice, maximum 14th). This ability is always active.",
        category: "special-quality",
        source: `${CH8} — Sanctified Creature (p. 187)`,
        sourceUrl: BOED_PATH,
      },
      {
        key: "sanctified-good-subtype",
        name: "Good Subtype",
        description: "The sanctified creature retains its creature type; outsiders gain the good subtype.",
        category: "special-quality",
        source: `${CH8} — Sanctified Creature (p. 187)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
];
