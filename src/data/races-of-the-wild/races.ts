/**
 * Races of the Wild race data pack: the playable races of Races
 * of the Wild (Wizards of the Coast) — raptoran, catfolk,
 * centaur, gnoll, and killoren. Built 2026-10-27 from the copy in
 * Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of the Wild.pdf
 *
 * Races of the Wild is a generic D&D 3.5 supplement, not a
 * separate setting, so these records carry ruleset "core" (the
 * original app's own data cited this book under its core data).
 *
 * The book's elf and halfling chapters describe the Player's
 * Handbook races, which the core SRD records already cover; they
 * are not duplicated here. Gnoll and centaur are also presented
 * as monster classes that spread the race over several levels;
 * those progressions are not expressible in the app's race model,
 * so the records below carry the full-grown traits, racial Hit
 * Dice, and level adjustment. For the gnoll, the full-grown
 * adjustments are the monster class's totals (its starting +2
 * Strength, +2 Constitution at 2nd level, and +2 Strength at 3rd
 * level), which match the Monster Manual gnoll.
 *
 * Note: this PDF is a two-page-spread scan (its PDF pages after
 * the front matter duplicate spreads); all page citations below
 * are the book's printed folios, read from the page footers.
 */
import type { RaceDefinition } from "@/engine/types";

const ROTW = "Races of the Wild";
const ROTW_PATH = "/A POC PC related/5.Splat/Races of series/Races of the Wild.pdf";

export const RACES_OF_THE_WILD_RACES: RaceDefinition[] = [
  {
    id: "raptoran",
    name: "Raptoran",
    ruleset: "core",
    source: `${ROTW} — Chapter 3: Raptorans, Raptoran Racial Traits (p. 68)`,
    sourceUrl: ROTW_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Raptoran"],
    abilityModifiers: {},
    favoredClass: "Cleric",
    skillBonuses: { climb: 2, spot: 2, jump: 10 },
    traits: [
      {
        key: "raptoran-wing-aided-movement",
        name: "Wing-Aided Movement",
        description:
          "A raptoran's wings give her lift even before she can fly: a +10 racial bonus on Jump checks (included in this race's skill bonuses). Raptorans have no racial ability score adjustments.",
        category: "trait",
        source: `${ROTW} — Raptoran Racial Traits (p. 68)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "raptoran-gliding",
        name: "Gliding (Ex)",
        description:
          "A raptoran can use her wings to glide, negating damage from a fall of any height and allowing 20 feet of forward travel for every 5 feet of descent. She cannot glide while carrying a medium or heavy load, and if she becomes unconscious or helpless in midair, her wings unfurl and she descends in a corkscrew, taking only 1d6 points of falling damage regardless of distance.",
        category: "special-quality",
        source: `${ROTW} — Raptoran Racial Traits (p. 68)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "raptoran-flight",
        name: "Flight (Ex)",
        description:
          "At 5 Hit Dice, a raptoran can fly at a speed of 40 feet (average maneuverability). She can safely fly for a number of rounds equal to her Constitution modifier (minimum 1), can exert herself to fly up to twice as long before becoming fatigued, and is fatigued after more than 10 minutes of flight per day; she cannot fly while carrying a medium or heavy load or while fatigued or exhausted. At 10 Hit Dice she can fly indefinitely, as easily as walking. A flying raptoran can make a dive attack like a charge (minimum 30 feet of movement and 10 feet of descent; piercing weapon only; double damage on a hit).",
        category: "special-quality",
        source: `${ROTW} — Raptoran Racial Traits (p. 68)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "raptoran-pact-with-wind-lords",
        name: "Pact with Wind Lords",
        description:
          "Because of the raptorans' ancient bargain with powerful air elementals, raptoran spellcasters cast spells with the air descriptor at +1 caster level.",
        category: "special-quality",
        source: `${ROTW} — Raptoran Racial Traits (p. 68)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "raptoran-unerring-direction",
        name: "Unerring Direction",
        description:
          "Raptorans have an instinctive sense of which direction is north, even underground or otherwise unable to see the sky. This ability does not function beyond the Material Plane.",
        category: "special-quality",
        source: `${ROTW} — Raptoran Racial Traits (p. 68)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "raptoran-vision-and-weapons",
        name: "Low-Light Vision and Weapon Familiarity",
        description:
          "A raptoran can see twice as far as a human in conditions of poor illumination. Raptorans treat the footbow as a martial weapon rather than an exotic weapon. They also gain a +2 racial bonus on Climb and Spot checks (included in this race's skill bonuses).",
        category: "special-quality",
        source: `${ROTW} — Raptoran Racial Traits (p. 68)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "catfolk",
    name: "Catfolk",
    ruleset: "core",
    source: `${ROTW} — Chapter 4: Other Races, Catfolk Racial Traits (p. 93)`,
    sourceUrl: ROTW_PATH,
    size: "Medium",
    baseSpeed: 40,
    type: "Humanoid",
    subtypes: ["Catfolk"],
    abilityModifiers: { dex: 4, cha: 2 },
    favoredClass: "Ranger",
    levelAdjustment: 1,
    naturalArmor: 1,
    skillBonuses: { listen: 2, "move-silently": 2 },
    traits: [
      {
        key: "catfolk-low-light-vision",
        name: "Low-Light Vision",
        description: "Catfolk can see twice as far as a human in conditions of poor illumination.",
        category: "special-quality",
        source: `${ROTW} — Catfolk Racial Traits (p. 93)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "catfolk-natural-armor",
        name: "Natural Armor",
        description: "+1 natural armor bonus (included as this race's natural armor). Catfolk also gain a +2 racial bonus on Listen and Move Silently checks (included in this race's skill bonuses).",
        category: "special-quality",
        source: `${ROTW} — Catfolk Racial Traits (p. 93)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "centaur",
    name: "Centaur",
    ruleset: "core",
    source: `${ROTW} — Chapter 4: Other Races, Centaur Racial Traits (p. 95)`,
    sourceUrl: ROTW_PATH,
    size: "Large",
    baseSpeed: 50,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: 8, dex: 4, con: 4, int: -2, wis: 2 },
    favoredClass: "Ranger",
    levelAdjustment: 2,
    racialHitDice: 4,
    hitDie: "d8",
    naturalArmor: 3,
    traits: [
      {
        key: "centaur-large-size",
        name: "Large Size",
        description:
          "–1 penalty to Armor Class, –1 penalty on attack rolls, –4 penalty on Hide checks, +4 bonus on grapple checks; lifting and carrying limits are double those of Medium characters. A centaur's space is 10 feet and his reach is 5 feet.",
        category: "trait",
        source: `${ROTW} — Centaur Racial Traits (p. 95)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "centaur-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${ROTW} — Centaur Racial Traits (p. 95)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "centaur-racial-traits",
        name: "Racial Hit Dice",
        description:
          "A centaur begins with four levels of monstrous humanoid, which provide 4d8 Hit Dice, a base attack bonus of +4, and base saving throw bonuses of Fort +1, Ref +4, and Will +4. Those levels give skill points equal to 7 × (2 + Int modifier), with class skills Listen, Move Silently, Spot, and Survival, and grant two feats. His hide grants a +3 natural armor bonus (included as this race's natural armor).",
        category: "trait",
        source: `${ROTW} — Centaur Racial Traits (p. 95)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "centaur-hooves",
        name: "Hooves",
        description: "A centaur has two hoof attacks, usable as secondary natural weapons.",
        category: "special-attack",
        source: `${ROTW} — Centaur Monster Class: Class Features (p. 98)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "gnoll",
    name: "Gnoll",
    ruleset: "core",
    source: `${ROTW} — Chapter 4: Other Races, Gnolls as Characters (p. 102)`,
    sourceUrl: ROTW_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Gnoll"],
    abilityModifiers: { str: 4, con: 2, int: -2, cha: -2 },
    favoredClass: "Ranger",
    levelAdjustment: 1,
    racialHitDice: 2,
    hitDie: "d8",
    naturalArmor: 1,
    traits: [
      {
        key: "gnoll-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: `${ROTW} — Gnolls as Characters (p. 102)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "gnoll-racial-traits",
        name: "Racial Hit Dice",
        description:
          "A gnoll begins with two levels of humanoid, which provide 2d8 Hit Dice and skill points equal to 5 × (2 + Int modifier). The gnoll's racial class skills are Listen and Spot, and he gains one feat at 1st level. His hide grants a +1 natural armor bonus (included as this race's natural armor). Gnolls are proficient with light armor, shields, and simple and martial weapons.",
        category: "trait",
        source: `${ROTW} — Gnoll Monster Class: Class Features (p. 103)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "killoren",
    name: "Killoren",
    ruleset: "core",
    source: `${ROTW} — Chapter 4: Other Races, Killoren Racial Traits (p. 103)`,
    sourceUrl: ROTW_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Fey",
    subtypes: [],
    abilityModifiers: {},
    favoredClass: "Druid",
    skillBonuses: { "handle-animal": 2, survival: 2 },
    traits: [
      {
        key: "killoren-fey",
        name: "Fey",
        description:
          "Killoren are of the fey type and are therefore not affected by spells such as charm person and hold person. Unlike other fey, killoren gain Hit Dice only by acquiring levels in a character class. Killoren have no racial ability score adjustments.",
        category: "trait",
        source: `${ROTW} — Killoren Racial Traits (p. 103)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "killoren-resistances",
        name: "Low-Light Vision and Enchantment Resistance",
        description:
          "Killoren can see twice as far as a human in conditions of poor illumination. They are immune to magic sleep effects and gain a +2 racial bonus on saves against enchantment spells or effects. They also gain a +2 racial bonus on Handle Animal and Survival checks (included in this race's skill bonuses).",
        category: "special-quality",
        source: `${ROTW} — Killoren Racial Traits (p. 103)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "killoren-cold-iron-anathema",
        name: "Cold Iron Anathema (Su)",
        description:
          "Killoren have a difficult time wielding weapons made of cold iron: a –2 penalty on any attack roll made with a cold iron weapon, or a weapon made only partially of cold iron (such as a cold iron spear or a bow firing cold iron arrows).",
        category: "trait",
        source: `${ROTW} — Killoren Racial Traits (p. 103)`,
        sourceUrl: ROTW_PATH,
      },
      {
        key: "killoren-manifest-natures-might",
        name: "Manifest Nature's Might (Su)",
        description:
          "Each morning, after 10 minutes of meditation at sunrise, a killoren manifests one aspect of nature until the next morning. Aspect of the Ancient: a bonus on Knowledge (nature) checks equal to her Hit Dice, and an additional +2 on saves against enchantment (stacking with her racial bonus). Aspect of the Destroyer: once per hour, up to a number of times per day equal to her Charisma bonus (minimum 1), a smite attack adding her Charisma bonus to the attack roll and 1 point of damage per Hit Die, effective only against aberrations, constructs, humanoids, oozes, outsiders, and undead. Aspect of the Hunter: +2 racial bonus on Hide, Listen, Move Silently, and Spot checks, and a +2 racial bonus on initiative checks.",
        category: "special-quality",
        source: `${ROTW} — Killoren Racial Traits (p. 103)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
];
