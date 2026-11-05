import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Player's Guide to Eberron (Wizards of the Coast, 2006)
// prestige classes — the book's three: Gatekeeper
// Mystagogue (pp. 88-91), High Elemental Binder
// (pp. 104-107), and Revenant Blade (pp. 142-145, 5
// levels). Transcribed from Shaun's own copy
// (text-extracted, 2026-11-05), progression tables and
// class features complete. The two ten-level classes
// advance an existing spellcasting class at every level
// beyond 1st, recorded as their Spellcasting feature.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const PG = "Player's Guide to Eberron";
const PG_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Player's Guide to Eberron.pdf";
const GM = `${PG} — Gatekeeper Mystagogue`;
const HEB = `${PG} — High Elemental Binder`;
const RB = `${PG} — Revenant Blade`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key:
        source.split("— ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-") +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: PG_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fg = mk(GM);
const fh = mk(HEB);
const fr = mk(RB);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

export const PLAYERS_GUIDE_TO_EBERRON_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "gatekeeper-mystagogue",
    name: "Gatekeeper Mystagogue",
    ruleset: "eberron",
    source: `${GM} (pp. 88-91)`,
    sourceUrl: PG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Diplomacy", "Escape Artist", "Handle Animal",
      "Knowledge (nature)", "Knowledge (the planes)", "Listen", "Ride",
      "Spellcraft", "Spot", "Survival", "Swim",
    ],
    prerequisites: [
      "Alignment: any non-evil",
      "Base attack bonus +4",
      "Skills: Knowledge (the planes) 8 ranks",
      "Feats: Gatekeeper Initiate, Repel Aberration",
      "Spellcasting: ability to cast 2nd-level divine spells",
      "Special: the character must have the rank of gatekeeper within the Gatekeeper sect",
    ],
    features: [
      fg("Gatekeeper Mystagogue Proficiencies", "A ranking member of the Gatekeeper druid sect who deepens the sect's bond with its animal companions and its byeshk weapons in the war against aberrations. The mystagogue gains proficiency with the light mace and the heavy mace at 1st level.", undefined),
      fg("Spellcasting", "At every level beyond 1st, the mystagogue gains new spells per day (and spells known, if applicable) as if she had also gained a level in a divine spellcasting class to which she belonged before adding the prestige class level. She does not, however, gain any other benefit a character of that class would have gained.", 2),
      fg("Animal Companion (Ex)", "The mystagogue's class levels stack with levels of any other classes that grant an animal companion for determining the companion's abilities; a mystagogue without an animal companion gains one at 1st level, with an effective druid level equal to her class level. The companion gains a +2 bonus on saves against aberrations' supernatural and spell-like abilities at 1st level; at 3rd level its natural weapons count as byeshk for overcoming damage reduction; at 6th level it gains slippery mind; and at 9th level, once per round when it hits an aberration the mystagogue has also hit with a melee attack that round, it deals an extra 2d6 points of damage.", 1),
      fg("Repel Aberration", "Gatekeeper mystagogue class levels stack with druid levels for the purpose of the Repel Aberration feat (Eberron Campaign Setting, p. 58), and the mystagogue gains one additional daily use of repel aberration per two class levels.", 1),
      fg("Invest Byeshk Weapon (Su)", "As a swift action, the mystagogue can spend one daily use of repel aberration to make a byeshk weapon overcome the damage reduction of any aberration for 1 round; an aberration struck by the weapon during that round is dazed for 1 round unless it succeeds on a Fortitude save (DC 10 + class level + Cha modifier).", 1),
      fg("Aberration Banemagic", "At 2nd level, the mystagogue gains Aberration Banemagic as a bonus feat.", 2),
      fg("Purifying Arc (Su)", "At 2nd level, as a swift action, the mystagogue can spend one daily use of repel aberration to create a line of purifying energy between herself and her animal companion (which must be within 20 feet); aberrations along the line take a -1 penalty on attack rolls and saving throws for 1 round, with no saving throw.", 2),
      fg("Venom Immunity (Ex)", "At 3rd level, the mystagogue becomes immune to poison.", 3),
      fg("Torturing Arc (Su)", "At 4th level, as a swift action, the mystagogue can spend one daily use of repel aberration to arc damaging energy between herself and her animal companion (within 20 feet): aberrations along the line take 2d6 points of damage and are nauseated for 1 round; a successful Fortitude save (DC 10 + class level + Cha modifier) negates the nausea.", 4),
      fg("Purge Aberrations (Su)", "At 5th level, as a standard action, the mystagogue can spend one daily use of repel aberration to deal 5d6 points of damage, plus 1d6 per class level, to all aberrations within a 30-foot burst; a successful Will save (DC 10 + class level + Cha modifier) halves the damage.", 5),
      fg("Slippery Mind (Ex)", "At 6th level, the mystagogue gains slippery mind, as the rogue ability of the same name.", 6),
      fg("Disrupting Arc (Su)", "At 7th level, as a swift action, the mystagogue can spend one daily use of repel aberration to arc disrupting energy between herself and her animal companion (within 20 feet): an aberration along the line can't manifest psionic powers or use psi-like abilities for 1 round unless it succeeds on a Fortitude save (DC 10 + class level + Cha modifier).", 7),
      fg("Temporary Seal (Su)", "At 8th level, as a standard action, the mystagogue can sacrifice any uncast divine spell to create an area like the dimensional seal spell (Eberron Campaign Setting, p. 272): choose a point within close range; the effect is a 20-foot-radius emanation lasting 2 rounds per level of the spell sacrificed, at a caster level equal to her highest divine caster level. Within the area, dimensional travel is impossible (as dimensional lock) and manifest zone effects are suppressed.", 8),
      fg("Wracking Arc (Su)", "At 10th level, as a swift action, the mystagogue can spend one daily use of repel aberration to arc wracking energy between herself and her animal companion (within 20 feet): an aberration along the line is stunned for 1 round unless it succeeds on a Fortitude save (DC 10 + class level + Cha modifier).", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "high-elemental-binder",
    name: "High Elemental Binder",
    ruleset: "eberron",
    source: `${HEB} (pp. 104-107)`,
    sourceUrl: PG_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Knowledge (arcana)", "Knowledge (the planes)",
      "Spellcraft", "Use Magic Device",
    ],
    prerequisites: [
      "Skills: Concentration 8 ranks",
      "Skills: Knowledge (arcana) 4 ranks",
      "Skills: Knowledge (the planes) 8 ranks",
      "Feats: Bind Elemental, Craft Wondrous Item",
      "Spellcasting: ability to cast 3rd-level spells or infusions",
    ],
    features: [
      fh("High Elemental Binder Proficiencies", "A master of elemental binding who keeps bound elementals as companions and can bind a nearby elemental directly into a weapon, a suit of armor, or her own body. The class text prints no additional weapon or armor proficiencies beyond those the character already has.", undefined),
      fh("Spellcasting", "At every level beyond 1st, the binder gains new spells per day (and spells known, if applicable) as if she had also gained a level in a spellcasting class to which she belonged before adding the prestige class level; this can explicitly advance artificer level for infusions. She does not, however, gain any other benefit a character of that class would have gained.", 2),
      fh("Elemental Companion (Sp)", "At 1st level, the binder gains the service of a loyal elemental companion of a kind she chooses (air, earth, fire, or water). The companion is Medium at 1st level, Large at 4th, and Huge at 8th, though it may appear in a smaller form down to a minimum of Small. She can summon it once per day as a full-round action; it appears in a space adjacent to her, remains for 2 hours per class level, and can be dismissed as a free action. The same creature is summoned each time, at full health, and any gear it carries stays behind when it disappears. The binder gains a second companion of a different kind at 3rd level, a third at 6th, and a fourth at 9th; no two companions can be of the same kind. This ability is equivalent to a 4th-level spell, at a caster level equal to the binder's highest caster level in any class.", 1),
      fh("Instant Bind (Su)", "From 2nd level, as a standard action (a swift action from 7th level) that does not provoke attacks of opportunity, the binder can bind a nearby elemental (within 30 feet) into a weapon, armor, or her own body. An unwilling elemental gets a Will save (DC 10 + class level + Cha modifier); success means the use is spent and that elemental can't be targeted by the binder's instant bind for 24 hours. A bind lasts a number of rounds equal to class level + Con modifier (minimum 1). Uses per day: 1 at 2nd level, 2 at 4th, 3 at 6th, 4 at 8th, 5 at 10th. Weapon bind (from 2nd): the weapon gains one property depending on the elemental's kind, as in the Eberron Campaign Setting, Chapter 10 — burning (fire), earthbound (earth), finesse (air), or waterborn (water); only one elemental can be bound into a weapon at a time, and the bind ends if the weapon is destroyed or leaves the binder's hands. Armor bind (from 5th): the armor gains burning (fire), stonemeld (earth), underwater action (water), or whirlwind (air); the bind ends if the armor is destroyed or removed. Body bind (10th): air grants a +4 dodge bonus to AC and a fly speed of 100 feet (perfect maneuverability); earth grants +4 on melee weapon damage rolls and +4 on checks to avoid being bull rushed, overrun, or tripped; fire grants +4 on initiative checks and Reflex saves and makes the binder's unarmed strikes and natural weapons deal an extra 2d6 points of fire damage; water grants temporary hit points equal to twice the binder's HD and a swim speed of 60 feet. When a bind ends, the elemental appears in a space adjacent to the binder (or the nearest open space) and can act immediately; time spent bound counts against any summoning duration on the elemental, which disappears immediately after the bind ends if that duration has elapsed.", 2),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "revenant-blade",
    name: "Revenant Blade",
    ruleset: "eberron",
    source: `${RB} (pp. 142-145)`,
    sourceUrl: PG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(
      [1, 2, 3, 4, 5],
      [0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [2, 3, 3, 4, 4],
    ),
    classSkills: [
      "Climb", "Craft", "Handle Animal", "Heal", "Hide", "Intimidate",
      "Jump", "Knowledge (geography)", "Knowledge (history)",
      "Knowledge (nature)", "Listen", "Move Silently", "Profession",
      "Ride", "Search", "Spot", "Survival", "Swim", "Use Rope",
    ],
    prerequisites: [
      "Race: Elf",
      "Region of origin: Valenar",
      "Base attack bonus +5",
      "Skills: Hide 5 ranks",
      "Skills: Knowledge (history) 2 ranks",
      "Skills: Move Silently 5 ranks",
      "Feats: Bladebearer of the Valenar, Two-Weapon Fighting, Weapon Focus (Valenar double scimitar)",
    ],
    features: [
      fr("Revenant Blade Proficiencies", "One of the Tairnadal revenants: a Valenar warrior who submerges his identity in the memories of a patron ancestor of the elf-giant wars, guided down the path by the elder revenants at Taer Valaestas or Taer Senadal. The class text prints no additional weapon or armor proficiencies beyond those the character already has.", undefined),
      fr("Ancestral Guidance (Su)", "Once per day, after spending 1 hour in quiet meditation at dawn, the revenant blade gains a bonus feat chosen from the following list, without needing to meet its prerequisites: Alertness, Blind-Fight, Combat Expertise, Dodge, Great Cleave, Improved Critical (Valenar double scimitar), Improved Sunder, Improved Trip, Power Attack, Skill Focus (Knowledge [history]), Spring Attack, Stealthy, Weapon Specialization (Valenar double scimitar). The feat lasts until the next dawn. At 3rd level he can choose two feats from the list upon completing his meditation, and at 5th level three. A feat gained this way can't be used to meet any requirement or prerequisite.", 1),
      fr("Hero of the Valaes Tairn (Ex)", "The revenant blade gains a +5 circumstance bonus on Diplomacy checks made to influence Valenar elves, and on Gather Information checks made when interacting with Valenar elves.", 1),
      fr("Ranger Class Features", "If the revenant blade has ranger levels, his revenant blade levels stack with his ranger levels for determining the abilities of his animal companion and the caster level of his ranger spells — but not for determining spells per day or any other ranger class features.", 1),
      fr("Shadow of the Past (Ex)", "At 2nd level and higher, the revenant blade adds his class level as a competence bonus on Hide and Move Silently checks.", 2),
      fr("Giant Slayer (Ex)", "At 4th level, the revenant blade gains a +4 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against giants, and a +4 bonus on weapon damage rolls against giants. He also gains the ability to speak Giant (and to read and write it, if he is literate) as if he had spent skill points to learn the language.", 4),
      fr("Legendary Force (Ex)", "At 5th level, the revenant blade treats both ends of the Valenar double scimitar as two-handed weapons, even when using it as a double weapon: he adds 1-1/2 times his Strength bonus on damage rolls with each end, and any damage bonus from the Power Attack feat is doubled when used with the weapon.", 5),
    ].map((x) => x as FeatureDefinition),
  },
];
