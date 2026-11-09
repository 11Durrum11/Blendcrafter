import type { SpellDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #315 pack (library-staging/packs/dragon-magazine/issue-315)
// The issue's seven spells:
//   * Forgotten Realms article (pp. 28–31): awaken sin, Eilistraee's
//     grace, moon bolt, moon lust — ruleset "faerun" (the issue-312
//     Auril-spells precedent).
//   * Dark Sun article "Defilers of Athas" (pp. 32–37): detect
//     defiler, revenge of the land. The defiler-magic system they
//     serve has no catalog mechanism and is written up in full in
//     reference.md.
//   * Ghostwalk article (p. 56): rejuvenative corpse.
// Transcribed from the magazine text on archive.org
// (DragonMagazine315_djvu.txt), cross-checked against the Spell
// Compendium reprints where they exist. Summaries and descriptions
// are mechanical paraphrases in our own words; stat lines are the
// magazine's own.
//
// Collisions (see MANIFEST.md): awaken sin, moon bolt, moon lust, and
// rejuvenative corpse were all reprinted in the Spell Compendium and
// already exist in the catalog; the magazine versions ship suffixed
// -315 and both records live. The magazine governs where the versions
// differ: awaken sin is Paladin 3 here (reprint: Paladin 2); moon
// bolt is Cleric 3 / Druid 3 dealing Strength damage here (reprint:
// Cleric 4 / Druid 4, damage and daze); moon lust is Enchantment
// (Compulsion) here (reprint: Illusion).

const DM315 = "Dragon Magazine #315";
const DM315_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt";

export const DRAGON_315_SPELLS: SpellDefinition[] = [
  {
    id: "awaken-sin-315",
    name: "Awaken Sin",
    ruleset: "faerun",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Fear", "Good", "Mind-Affecting"],
    levels: { "Cleric": 3, "Paladin": 3 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One evil fey, giant, humanoid, or monstrous humanoid",
    duration: "Instantaneous",
    savingThrow: "Will partial",
    spellResistance: "Yes",
    summary: "Floods an evil creature with guilt for its misdeeds: a failed save means 1d6 nonlethal damage per caster level (max 10d6) and stunned for 1 round; even a successful save leaves a −1 penalty on skill checks and attack rolls for 1 round.",
    description: "The subject is overwhelmed by guilt for its evil acts. If it fails its Will save, it takes 1d6 points of nonlethal damage per caster level (maximum 10d6) and is stunned for 1 round; a creature knocked unconscious by this damage also takes 1d6 points of Wisdom damage. On a successful save the subject takes only a −1 penalty on skill checks and attack rolls for 1 round. Dragon #315 printing; the Spell Compendium reprint lists the spell at Paladin 2.",
    source: DM315,
    sourceUrl: DM315_PATH,
  },
  {
    id: "eilistraees-grace",
    name: "Eilistraee's Grace",
    ruleset: "faerun",
    school: "Transmutation",
    descriptors: ["Good"],
    levels: { "Bard": 4, "Cleric": 5 },
    components: "V",
    castingTime: "1 free action (see text)",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "The caster glows with silvery light (shedding light to 60 ft. and taking a −20 penalty on Hide checks) and gains a +2 sacred bonus to Dexterity, +10 feet to land speed, and good-aligned touch attacks and wielded melee weapons for overcoming damage reduction.",
    description: "Casting this spell counts toward the one-quickened-spell-per-round limit. The caster is surrounded by silvery light that sheds illumination out to 60 feet; the glow imposes a −20 circumstance penalty on her Hide checks. For the duration she gains a +2 sacred bonus to Dexterity, her land speed increases by 10 feet, and her touch attacks and wielded melee weapons are treated as good-aligned for the purpose of overcoming damage reduction.",
    source: DM315,
    sourceUrl: DM315_PATH,
  },
  {
    id: "moon-bolt-315",
    name: "Moon Bolt",
    ruleset: "faerun",
    school: "Evocation",
    descriptors: [],
    levels: { "Cleric": 3, "Druid": 3 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Long (400 ft. + 40 ft./level)",
    targetOrArea: "One living or undead creature (two creatures if cast outdoors at night, no two of which can be more than 15 ft. apart)",
    duration: "Instantaneous",
    savingThrow: "Fortitude half (living) or Will negates (undead)",
    spellResistance: "Yes",
    summary: "A bolt of moonlight saps the strength of a living creature (1d4 points of Strength damage per 3 caster levels, maximum 5d4, Fortitude half) or strikes an undead creature prone and helpless (Will negates).",
    description: "Against a living target, the bolt deals Strength damage equal to 1d4 points per 3 caster levels (maximum 5d4); a successful Fortitude save halves the damage. Against an undead target, a failed Will save leaves it prone and helpless for 1d4 rounds, and it takes a −2 penalty on attack rolls and Will saves for 1 minute thereafter. Dragon #315 printing; the Spell Compendium version is a revised Cleric 4 / Druid 4 spell with different mechanics. The damage die is reconstructed from a garbled OCR line — see MANIFEST.md.",
    source: DM315,
    sourceUrl: DM315_PATH,
  },
  {
    id: "moon-lust-315",
    name: "Moon Lust",
    ruleset: "faerun",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting"],
    levels: { "Cleric": 1 },
    components: "V, S, F (silver ingot worth 5 gp)",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One living creature",
    duration: "1 round/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary: "The subject is fascinated by the moon; if the moon is not visible, it instead takes a −1 penalty on attack rolls and skill checks. Sightless creatures are unaffected.",
    description: "The subject becomes fascinated by the moon for the duration. If the moon is not visible to the subject, the spell instead imposes a −1 penalty on its attack rolls and skill checks. Creatures without sight are unaffected. Dragon #315 printing; the Spell Compendium reprint places the spell in the Illusion school.",
    source: DM315,
    sourceUrl: DM315_PATH,
  },
  {
    id: "detect-defiler",
    name: "Detect Defiler",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { "Druid": 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "60 ft.",
    targetOrArea: "Cone-shaped emanation",
    duration: "Concentration, up to 10 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Detects defilers (Dark Sun arcane casters who ravage the land for power; see reference.md) in a 60-foot cone, revealing the strength of their defiler auras over three rounds of study.",
    description: "The spell functions like detect evil, applied to defiler auras: a creature holding defiler points has a faint aura; a defiler score of 1–10 is moderate, 11–30 is strong, and 31 or more is overwhelming. If the strongest aura present is overwhelming and its source has at least twice the caster's Hit Dice or level, the caster is stunned for 1 round and the spell ends. The emanation is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
    source: DM315,
    sourceUrl: DM315_PATH,
  },
  {
    id: "revenge-of-the-land",
    name: "Revenge of the Land",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Earth"],
    levels: { "Druid": 5 },
    components: "V, S, M (a live seed, thrown at the caster's feet and ground into the dirt)",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One defiler creature/level, no two of which can be more than 30 ft. apart",
    duration: "1 round/level",
    savingThrow: "Fortitude partial",
    spellResistance: "Yes",
    summary: "The land itself strikes back at defilers: each target takes 1d8 damage per 2 caster levels each round, with a Fortitude save (penalized by its defiler score) negating each round's damage.",
    description: "Each round, every targeted defiler takes 1d8 points of damage per 2 caster levels; a successful Fortitude save negates that round's damage, but the target applies its defiler score as a penalty on the save. Spell resistance is checked only when the spell is first cast. Creatures without a defiler score are unaffected, and targets need not be touching the ground.",
    source: DM315,
    sourceUrl: DM315_PATH,
  },
  {
    id: "rejuvenative-corpse-315",
    name: "Rejuvenative Corpse",
    ruleset: "core",
    school: "Necromancy",
    descriptors: ["Evil"],
    levels: { "Cleric": 3 },
    components: "V, S, DF",
    castingTime: "1 minute",
    range: "Touch",
    targetOrArea: "One humanoid who died within the past week",
    duration: "One day or until discharged",
    savingThrow: "Will negates (object)",
    spellResistance: "Yes (object)",
    summary: "Charges a corpse with negative energy so that a corporeal undead that eats a full meal of it gains fast healing 1 for 5 minutes; a living creature that eats it risks filth fever.",
    description: "A corporeal undead that eats a full meal of the charged corpse (generally 10 minutes for a humanlike creature) gains fast healing 1 for 5 minutes upon completing the feast, discharging the spell; the fast healing does not stack with fast healing from other sources and does not regrow or reattach lost body parts. Multiple castings allow more than one undead to benefit, but one undead gains nothing extra from gorging on multiple meals while the first meal's effect lasts. A corpse yields 10 meals if Medium, 5 if Small, 2 if Tiny, and 1 if Diminutive. Skeletons, incorporeal creatures, and undead without even remnants of digestive organs cannot benefit. A living creature that eats the charged corpse must succeed on a Fortitude save or immediately contract filth fever (no incubation period). Creatures neither alive nor undead are unaffected. Dragon #315 printing; also reprinted in the Spell Compendium with the same header.",
    source: DM315,
    sourceUrl: DM315_PATH,
  },
];
