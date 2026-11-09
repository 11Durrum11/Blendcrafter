// STAGING DRAFT — Dragon Magazine #321 pack (library-staging/packs/dragon-magazine/issue-321)
// The issue's two templates, in the issue-313 templates-draft shape:
//   * RADIANT, from "Creatures of Brilliance" (pp. 70–75) — an
//     inherited template for ordinary creature types, from the
//     "Creating a Radiant Creature" block (magazine pp. 74–75, read
//     off the page images; the magazine OCR garbles the spell-like
//     ability table and the ability line). The article's monsters
//     (prismfly swarm, rainbow dweller, and the radiant giant eagle
//     sample) are in reference.md — there is no monster barrel.
//     PRINT INCONSISTENCY, flagged in MANIFEST.md: the template
//     block prints +4 Dexterity and +6 Charisma, but the sample
//     radiant giant eagle's ability line (Dex 21, Cha 16 against the
//     Monster Manual giant eagle's Dex 15, Cha 16) reflects +6
//     Dexterity and +0 Charisma — exactly swapped. The record
//     follows the template block, as printed.
//   * ARCHDRAGON, from "Planar Dragons" (pp. 42–49) — an acquired
//     template for true dragons with four alignment aspects, staged
//     as one record with four forms. It stages under the issue-313
//     precedent: that pack staged five true-dragon-only templates
//     (the Dragon Psychoses) as full records. The five planar dragon
//     stat blocks and the cohort table are in reference.md. Two
//     durations in the article's OCR are illegible (the aligned
//     aura's duration and the lawful aspect's antimagic breath
//     duration); both are read as 1d4 rounds, the standard figure
//     for this article's parallel constructions, and are flagged in
//     MANIFEST.md as the pack's only unverified numbers.
// Descriptions are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced. APOC screening for both
// templates (planar travel severed; dragons withdrawn beneath the
// Council of Wyrms) is in SCREENING.md — flags only, mechanics as
// printed.

import type { TemplateDefinition } from "@/engine/types";

const DM321 = "Dragon Magazine #321";
const DM321_PATH =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine321_djvu.txt";

export const DRAGON_321_TEMPLATES: TemplateDefinition[] = [
  {
    id: "radiant",
    name: "Radiant",
    ruleset: "core",
    timing: "inherited",
    summary: "A luminous native of the Plane of Radiance: the base creature becomes a native outsider wreathed in a dazzling rainbow aura, with spell-like abilities that grow with its Hit Dice, damage reduction, fast healing in the light, +4 Dexterity, and +6 Charisma. Applies to any aberration, animal, dragon, fey, giant, humanoid, magical beast, or monstrous humanoid. Level adjustment is the base creature's +3, recorded here as 3.",
    source: DM321,
    sourceUrl: DM321_PATH,
    crModifier: 1,
    levelAdjustment: 3,
    prerequisites: [
      {
        allowedBaseTypes: ["Aberration", "Animal", "Dragon", "Fey", "Giant", "Humanoid", "Magical Beast", "Monstrous Humanoid"],
        note: "Template can be added to any aberration, animal, dragon, fey, giant, humanoid, magical beast, or monstrous humanoid. A radiant creature with an Intelligence or Wisdom score of 8 or higher has the template's spell-like abilities. Level adjustment is the same as the base creature +3.",
      },
    ],
    abilityModifiers: { dex: 4, cha: 6 },
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider. Do not recalculate Hit Dice, base attack bonus, or saves. Size is unchanged." },
      { op: "add-subtype", value: "Native", note: "Radiant creatures are native outsiders." },
    ],
    features: [
      {
        key: "radiant-rainbow-aura",
        name: "Rainbow Aura (Su)",
        description: "The radiant creature constantly sheds a glaring aura that most creatures find difficult to look at. Those within 30 feet must make a Will save (DC 10 + 1/2 the creature's racial Hit Dice + its Charisma modifier) or be dazzled for 1d6 rounds, suffering a −1 penalty on attack rolls, Search checks, and Spot checks. Radiant creatures are immune to the rainbow aura of other radiant creatures. Although not a gaze attack in the usual sense, this ability uses the same rules for making attacks and avoiding its effects as a gaze attack (creatures can attempt to look away or close their eyes to avoid it). The save DC is Charisma-based.",
        category: "special-attack",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "radiant-spell-like-abilities",
        name: "Spell-Like Abilities",
        description: "A radiant creature with an Intelligence or Wisdom score of 8 or higher has spell-like abilities depending on its Hit Dice, as follows (cumulative; a radiant creature with 4 HD can use color spray as well as blur). Unless otherwise noted, an ability is usable once per day. Caster level equals the creature's HD, and the save DC is Charisma-based. 1–2 HD: color spray 3/day. 3–4 HD: blur 3/day. 5–6 HD: mirror image. 7–8 HD: searing light. 9–10 HD: freedom of movement. 11–12 HD: rainbow pattern. 13–14 HD: prismatic spray. 15–16 HD: repulsion. 17–18 HD: scintillating pattern. 19–20 HD: prismatic sphere.",
        category: "special-attack",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "radiant-damage-reduction",
        name: "Damage Reduction",
        description: "Damage reduction 5/magic (if 11 HD or less) or 10/magic (if 12 HD or more).",
        category: "special-quality",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "radiant-immunities",
        name: "Immunities and Fast Healing",
        description: "Immunity to blindness. No radiant creature can be dazed, dazzled, or stunned. Fast healing 2 so long as a source of light (other than the radiant creature itself) shines on the radiant creature.",
        category: "special-quality",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "radiant-skills",
        name: "Radiant Skills",
        description: "Radiant creatures suffer a −8 racial penalty on Hide checks, due to their rainbow aura, and they have a +4 racial bonus on Spot checks.",
        category: "trait",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "radiant-alignment-environment",
        name: "Alignment and Environment",
        description: "Alignment: one step closer to chaotic than the base creature. Environment: the Plane of Radiance.",
        category: "trait",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
    ],
  },
  {
    id: "archdragon",
    name: "Archdragon",
    ruleset: "core",
    timing: "acquired",
    summary: "An enhancement of a true dragon's form centered on an alignment focus: the dragon gains the extraplanar subtype and the alignment subtype of its aspect (chaotic, evil, good, or lawful), an aligned aura it can raise once per day, an alignment quality added to its breath weapon, access to three cleric domains, immunities to disease, fear, and polymorph, telepathy, and continuous true seeing. One template with four forms, one for each non-neutral alignment aspect.",
    source: DM321,
    sourceUrl: DM321_PATH,
    crModifier: 1,
    levelAdjustment: 4,
    prerequisites: [
      {
        allowedBaseTypes: ["Dragon"],
        note: "Base creature must be a true dragon. Upon becoming an archdragon, the base creature loses any other alignment subtypes; if it later changes the aspect of its alignment associated with its archdragon type, it loses the template.",
      },
    ],
    patches: [
      { op: "add-subtype", value: "Extraplanar", note: "The archdragon gains the extraplanar subtype and the alignment subtype appropriate to its archdragon type (chaotic, evil, good, or lawful); it loses any other alignment subtypes." },
    ],
    features: [
      {
        key: "archdragon-flight",
        name: "Flight",
        description: "The archdragon's flying maneuverability improves by one step (for example, a base creature with poor maneuverability becomes an archdragon with average maneuverability).",
        category: "trait",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "archdragon-aligned-aura",
        name: "Aligned Aura (Su)",
        description: "Once per day, an archdragon can surround itself with an aligned aura whose effect depends on the archdragon's alignment type (see the forms below). The aura extends in a radius equal to 20 feet per age category and lasts for 1d4 rounds plus the dragon's age category.",
        category: "special-attack",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "archdragon-breath-weapon",
        name: "Breath Weapon (Su)",
        description: "The archdragon's breath weapon gains an additional quality dependent on its alignment (blinding breath for chaotic, infectious breath for evil, holy breath for good, antimagic breath for lawful — see the forms below).",
        category: "special-attack",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "archdragon-spells",
        name: "Spells (Sp)",
        description: "If the archdragon can already cast spells from cleric domains, it gains access to additional domains based on its alignment type (see the forms below), cast as arcane spells as with its other cleric and domain spells. The archdragon loses access to spells with an alignment descriptor opposite its archdragon alignment. If the base creature is not an innate spellcaster, it is unaffected by this.",
        category: "special-quality",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "archdragon-immunities",
        name: "Immunities (Ex)",
        description: "Archdragons are immune to disease, fear, and polymorph effects.",
        category: "special-quality",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "archdragon-telepathy",
        name: "Telepathy (Su)",
        description: "An archdragon can communicate telepathically with any intelligent creature that has a language within 100 feet.",
        category: "special-quality",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "archdragon-true-seeing",
        name: "True Seeing (Su)",
        description: "All archdragons can continually see through illusions and invisibility, as a continuous true seeing spell, which the archdragon can suppress or renew as a free action at will.",
        category: "special-quality",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
      {
        key: "archdragon-alignment-environment",
        name: "Alignment and Environment",
        description: "A chaotic archdragon's alignment changes to chaotic neutral, an evil archdragon's to neutral evil, a good archdragon's to neutral good, and a lawful archdragon's to lawful neutral. Upon becoming an archdragon, the dragon becomes a native of the plane where it gained the archdragon template.",
        category: "trait",
        source: DM321,
        sourceUrl: DM321_PATH,
      },
    ],
    forms: [
      {
        id: "archdragon-chaotic",
        name: "Chaotic Archdragon",
        description: "Unrestrained turmoil given form. Blinding Breath (Su): its breath is infused with sparkling dust identical in effect to the glitterdust spell; a separate Will save negates the blinding effects, and all effects of the glitterdust remain until the dragon can use its breath weapon again. Chaos Aura (Su): a swirling mist of scintillating sparks; creatures without the chaotic subtype take 1d6 points of damage each round within it (creatures with the chaotic subtype are immune), and all attacks made within the aura except the chaotic archdragon's own suffer a miss chance — 20% for melee attacks, 50% for ranged attacks. Domains: Chaos, Luck, and Trickery. Special qualities: acid, fire, and sonic resistance 10.",
      },
      {
        id: "archdragon-evil",
        name: "Evil Archdragon",
        description: "A foul version of its former self, dining on intelligent, living beings to the exclusion of all other fare. Corrupting Aura (Su): thick shadows interspersed with ghostly, translucent images; any nonevil living creature within the aura must make a Fortitude save (DC 10 + 1/2 the dragon's Hit Dice + the dragon's Charisma modifier) each round or take 1 point of Constitution damage and 1 point of Wisdom damage, and all creatures except the evil archdragon suffer a −4 penalty on Search and Spot checks within the aura. Infectious Breath (Su): its breath weapon spreads the demon fever disease; a creature damaged by the breath weapon is automatically infected, and the disease then manifests as normal. Domains: Death, Evil, and War. Special qualities: acid, cold, and fire resistance 10.",
      },
      {
        id: "archdragon-good",
        name: "Good Archdragon",
        description: "A nobler, more regal form that radiates a soft white glow and eats only nonorganic matter (and occasionally the corpses of fiends). Aura of Wholesomeness (Su): a soft white light with glittering gold motes; good creatures gain fast healing 1 as long as they remain within the aura, and evil creatures must succeed at a Will save each round (DC 10 + 1/2 the dragon's Hit Dice + the dragon's Charisma modifier) or take 1d6 points of damage (evil outsiders and undead take 2d6 points of damage each round instead); all creatures except the good archdragon suffer a −1 penalty on attack and damage rolls (minimum 1 point of damage) while in the aura. Holy Breath (Su): its breath weapon gains a disrupting quality dangerous to undead — undead damaged by the breath weapon must succeed at a Fortitude save or be disintegrated and utterly destroyed. Domains: Good, Healing, and Protection. Special qualities: cold, electricity, and sonic resistance 10.",
      },
      {
        id: "archdragon-lawful",
        name: "Lawful Archdragon",
        description: "Steely in color and texture, cool to the touch; eats only metal and gems and enjoys cataloging its treasure. Antimagic Breath (Su): its breath weapon gains an antimagic quality — creatures damaged by the breath are affected as if in an antimagic field that covers themselves and their equipment; the antimagic effect of the breath lasts 1d4 rounds. Aura of Imposing Order (Su): perfectly vertical \"raindrops\" of energy; nonlawful creatures are affected as by a doom spell as long as they remain within the aura, and attacks based on an energy type (such as fire or lightning) deal minimum damage within the aura regardless of whether they originate within it, except those originating from the lawful archdragon itself. Domains: Knowledge, Law, and Strength. Special qualities: cold, electricity, and fire resistance 10.",
      },
    ],
  },
];
