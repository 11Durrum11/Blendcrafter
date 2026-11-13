import type { TemplateDefinition } from "@/engine/types";

// Relics (Alderac Entertainment Group, ©2003, d20
// System, 3.0-era) — the two templates the book prints
// inside artifact entries' Legends, transcribed from
// Shaun's own scanned copy (read visually; the scan is
// image-only), 2026-11-04. Neither is a "Creating a..."
// block in the 3.5 style: both are short template
// write-ups keyed to their relics (the Bound results
// from bracers of bonding; a Nemesis is raised against
// whoever unites the Rings of the Three Sisters).
// Numbers the app must store as single values: Bound
// prints no Challenge Rating adjustment and no level
// adjustment at all, so both are recorded as 0 with
// that stated in the record; Nemesis prints "Challenge
// Rating: As the base creature +2" (crModifier 2) and
// no level adjustment (recorded 0, stated in the
// record). Summaries are mechanical paraphrases in our
// own words; no book prose is reproduced.

const REL = "Relics";
const REL_PATH = "/A POC DM related/New folder/Relics.pdf";
const BND = `${REL} — Bound`;
const NEM = `${REL} — Nemesis`;

export const RELICS_TEMPLATES: TemplateDefinition[] = [
  {
    id: "bound",
    name: "Bound",
    ruleset: "core",
    timing: "acquired",
    summary: "An acquired template created when two creatures are joined into a single body, as happens to the wearers of bracers of bonding: it can be added to any two humanoid or monstrous humanoid creatures (referred to as \"the characters\"), provided a joining between the two occurs, as with bracers of bonding, and bound creatures may still bind to another creature, applying this template again. The creatures' type changes to monstrous humanoid if necessary, and the bound also gains the aberration type (see Monster Manual), as printed. The bound uses the greater of the characters' statistics and special abilities (Hit Dice, Speed, AC, Damage, Special Attacks, Abilities, Skills) except as noted: Fortitude and Reflex saves are the greater of both characters'; from the \"victor's\" Will save is subtracted the \"victim's\" Will save if the Bracers of Bonding created the bound, or else the lesser Will save bonus is subtracted from the greater. Feats are the same as both characters'. Alignment is averaged between both characters, with non-neutral tendencies winning out (for example, a lawful good character combined with a neutral evil character becomes lawful neutral, while a chaotic good character joining a lawful evil results in a neutral bound); if a character is already of the bound template, the alignment shifts to chaotic. The book prints no Challenge Rating adjustment and no level adjustment for this template.",
    source: `${BND} (p. 17)`,
    sourceUrl: REL_PATH,
    crModifier: 0,
    levelAdjustment: 0,
    prerequisites: [
      { note: "Can be added to any two humanoid or monstrous humanoid creatures, provided a joining between the two occurs, as with bracers of bonding." },
    ],
    patches: [
      { op: "set-type", value: "Monstrous Humanoid", note: "The creatures' type changes to monstrous humanoid if necessary; the book's Special Qualities line additionally says the bound gains the aberration type (see Monster Manual) — both statements are as printed." },
    ],
    features: [
      {
        key: "bound-divided-minds",
        name: "Divided Minds (Su)",
        description: "The mindset of a bound is alien even to itself: the bound has a racial bonus equal to its CR on all Will saves to resist enchantment spells, as well as on opposed Bluff, Diplomacy, and Intimidate checks.",
        category: "special-quality",
        source: BND,
        sourceUrl: REL_PATH,
      },
      {
        key: "bound-redundant-organs",
        name: "Redundant Organs (Su)",
        description: "The bound are no more uniform inside than out, containing all the organs of their original forms: the bound receives a racial bonus equal to its challenge rating on all Fortitude saves to resist non-supernatural poisons and diseases.",
        category: "special-quality",
        source: BND,
        sourceUrl: REL_PATH,
      },
    ],
  },
  {
    id: "nemesis-relic",
    name: "Nemesis",
    ruleset: "core",
    timing: "acquired",
    summary: "An acquired template raised in opposition to the Rings of the Three Sisters: whenever the three Rings are brought together by a single wielder, a spark of the Sisters' essence manifests on the mortal plane and merges with the spirit of a chosen being, creating a champion to stand against the Rings' might. It can be applied to any aberration, beast, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, outsider, or shapechanger with an Intelligence score of 3 or greater, and the creature's type changes to outsider. A nemesis creature uses all the base creature's statistics and special abilities except where noted, and retains all the base creature's special attacks and special qualities. Feats: as the base creature plus Great Fortitude, Iron Will, and Lightning Reflexes. Challenge Rating: as the base creature +2. The book prints no level adjustment.",
    source: `${NEM} (p. 89)`,
    sourceUrl: REL_PATH,
    crModifier: 2,
    levelAdjustment: 0,
    prerequisites: [
      { allowedBaseTypes: ["Aberration", "Dragon", "Fey", "Giant", "Humanoid", "Magical Beast", "Monstrous Humanoid", "Outsider"], note: "Can be applied to any aberration, beast, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, outsider, or shapechanger with an Intelligence score of 3 or greater." },
    ],
    abilityModifiers: { str: 4, con: 4, int: 4, wis: 4 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Creatures who gain this template have their type changed to outsider." },
    ],
    features: [
      {
        key: "nemesis-slow",
        name: "Slow",
        description: "Three times per day, the nemesis can generate a slow field, as the spell cast by a 20th-level sorcerer and affecting a 30-foot radius; the slow effect automatically affects the wearer of the combined Rings, counteracting the Ring of the Mother's permanent haste effect.",
        category: "special-attack",
        source: NEM,
        sourceUrl: REL_PATH,
      },
      {
        key: "nemesis-ageless",
        name: "Ageless",
        description: "The nemesis is immune to effects of magical aging; he suffers none of the normal penalties to Strength, Dexterity or Constitution when advancing an age category, but still gains the standard bonuses to Intelligence, Wisdom and Charisma. Though he is not immortal, his normal life span is doubled and maximized, and he cannot die of old age until the Rings of the Three Sisters are separated from one another.",
        category: "special-quality",
        source: NEM,
        sourceUrl: REL_PATH,
      },
      {
        key: "nemesis-independent-fate",
        name: "Independent Fate",
        description: "The nemesis is absolutely immune to all the powers of the Rings of the Three Sisters, including the Ring of the Crone's retrocognition ability, and the combined Rings' ability to influence past events.",
        category: "special-quality",
        source: NEM,
        sourceUrl: REL_PATH,
      },
      {
        key: "nemesis-sense-bearer",
        name: "Sense Bearer",
        description: "The nemesis is always unfailingly able to sense the general location of the Rings of the Three Sisters, and is able to pinpoint their location to within a mile, regardless of distance or dimensional or temporal location; no magic, regardless of its power, can hide the Rings' location from him.",
        category: "special-quality",
        source: NEM,
        sourceUrl: REL_PATH,
      },
      {
        key: "nemesis-serial-immortality",
        name: "Serial Immortality",
        description: "Should the nemesis be slain, it immediately manifests in another creature; the new nemesis appears somewhere within 500 miles of the current location of the Rings, and is made instantly aware of all relevant events that have occurred since the Rings were brought together.",
        category: "special-quality",
        source: NEM,
        sourceUrl: REL_PATH,
      },
      {
        key: "nemesis-temporal-blindspot",
        name: "Temporal Blindspot",
        description: "The nemesis is immune to all location and detection magic wielded by the wearer of the Rings of the Three Sisters; further, all allies within a 60-foot radius of the nemesis are immune to the retrocognition power of the Ring of the Crone, and cannot be affected by the combined Rings' power to influence past events.",
        category: "special-quality",
        source: NEM,
        sourceUrl: REL_PATH,
      },
    ],
  },
];
