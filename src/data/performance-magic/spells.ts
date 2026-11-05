import type { SpellDefinition } from "@/engine/types";

// Forbidden Arcana: Performance Magic (Ronin Arts, © 2003,
// written by Michael Hammes) — the book's NEW spells, from
// the Spells section, printed pp. 6-11, transcribed from
// Shaun's own copy of the standalone PDF (read visually;
// the file is image-only), 2026-11-05. Printed page numbers
// are the PDF's own "N of 14" foliation. This is a
// 3.0-era book (it requires the Third Edition Player's
// Handbook): level lines print abbreviated class names
// (Brd, Sor/Wiz — expanded here to the catalog's list
// names Bard and Sorcerer/Wizard) and all mechanics are
// transcribed as printed, not modernized. The book prints
// spells of 0 to 2nd level only. Its other entries in the
// Spells section are stage-use notes on standard spells
// (already in the catalog) and are not records; the book
// prints no feats and no classes — "performance mage" is
// expressly not a class or prestige class (p. 2) — and its
// four magic items (p. 13) are already in the catalog from
// this book's reprint in Forbidden Arcana: A Collection of
// Arcane Options (omni sweep: amplificator, hand-fireworks,
// ventriliquator, fireworks-silent-image,
// fireworks-minor-image, fireworks-major-image), so no
// item records are built here. One id collision: the Spell
// Compendium already owns "amplify" for a different spell,
// so this book's Amplify is amplify-performance-magic
// (the razor-wings-spells-magic precedent). Summaries are
// short mechanical paraphrases in our own words;
// descriptions are the spells' full printed text.

const PM = "Forbidden Arcana: Performance Magic";
const PM_PATH = "/A POC DM related/misc items/d20 Ronin Arts/d20 Ronin Arts Forbidden Arcana - Performance Magic.pdf";

export const PERFORMANCE_MAGIC_SPELLS: SpellDefinition[] = [
  // ================= 0 LEVEL =================
  {
    id: "fog",
    name: "Fog",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: [],
    levels: { Bard: 0, "Sorcerer/Wizard": 0 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Effect: Cloud spreads in 10-ft. radius from you, 10 ft. high",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Creates a stationary fog cloud (10-ft. radius, 10 ft. high) at a designated spot in close range: sight beyond 5 ft. is obscured, a creature 5 ft. away has concealment (20% miss chance), and creatures farther away have total concealment (50% miss chance). Moderate wind disperses it in 4 rounds, strong wind in 1 round, and fire or explosion spells burn it away; it does not function underwater. A smaller, dismissible alternative to obscuring mist, used for dramatic entrances and exits.",
    description: "A misty vapor arises at a spot within range you designate. It is stationary once created. The vapor obscures all sight, including darkvision, beyond 5 feet. A creature 5 feet away has concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, and the attacker cannot use sight to locate the target). A moderate wind (11+ mph), such as from a gust of wind spell, disperses the fog in 4 rounds. A strong wind (21+ mph) disperses the fog in 1 round. A fireball, flame strike, or similar spell burns away the fog in the explosive or fiery spell's area. A wall of fire burns away the fog in the area into which it deals damage. This spell does not function underwater. This spell is usually used to create a dramatic entrance or exit. In case of the entrance, the caster usually hides while casting the spell and then steps into the fog, canceling it when he or she is ready to begin the act. Although some might try to use obscuring mist for the same kind of effect, the larger area that spell covers and the fact that it cannot be dispelled make it a poor choice.",
    source: `${PM} — Fog, p. 6`,
    sourceUrl: PM_PATH,
  },
  {
    id: "hot-foot",
    name: "Hot Foot",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Fire"],
    levels: { Bard: 0, "Sorcerer/Wizard": 0 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Effect: One foot or piece of footwear of a single creature",
    duration: "Instantaneous",
    savingThrow: "Fortitude partial; see text",
    spellResistance: "Yes",
    summary: "Flames flare on the target's foot or footwear for 1d3 fire damage (no save); the shock also makes the creature drop whatever it is holding and grab its foot unless it succeeds at a Fortitude save.",
    description: "Flames flare on the targeted creature's footwear or foot (if it is not wearing any footwear) causing 1d3 points of damage (no save). The sudden shock and pain also cause the creature to drop any items it was holding and grab its foot unless it succeeds at a Fortitude saving throw.",
    source: `${PM} — Hot Foot, p. 7`,
    sourceUrl: PM_PATH,
  },
  {
    id: "streamers",
    name: "Streamers",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 0 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "10 foot",
    targetOrArea: "Area: Cone",
    duration: "Instantaneous",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary: "A burst of colorful streamers from the caster's hand: creatures of 3 or fewer Hit Dice in the cone must make a Will save or be dazed for 1 round (no actions, no AC penalty). Sightless creatures are unaffected. The printed level line is Sor/Wiz 0 only — no bard level — and the range prints as \"10 foot\"; both are recorded as printed. Material component: a small piece of tinder.",
    description: "You fire a burst of colorful streamers from your outstretched hand. Any creatures of 3 or fewer Hit Dice within the area of effect must succeed at a Will save or be considered dazed (can take no actions, but has no penalty to AC) for 1 round. Sightless creatures are unaffected by this spell. Many beginning performers like to end their performance in this way. Material Component: A small piece of tinder.",
    source: `${PM} — Streamers, p. 8`,
    sourceUrl: PM_PATH,
  },
  {
    id: "water-splash",
    name: "Water Splash",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Water"],
    levels: { Bard: 0, "Sorcerer/Wizard": 0 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Effect: One 1-foot diameter globule of water",
    duration: "Instantaneous",
    savingThrow: "Reflex negates",
    spellResistance: "No",
    summary: "Fires a 1-foot globule of water (ranged touch attack): enough to soak a creature up to Medium size, and it extinguishes small fires (any fire source dealing no more than 1d6 damage). Fired at a creature's face at a -4 penalty to the attack roll, a hit dazzles the creature (-1 on attack rolls, Search, and Spot) for 1 minute unless it makes a Reflex save; sightless or already-dazzled creatures are unaffected by the dazzle.",
    description: "You fire a small sphere of water at the target. You must succeed on a ranged touch attack to hit your target. The water is enough to soak any creature of up to medium size causing clothing to cling, hair to be ruined, make-up to run, etc. The globule of water is enough to put out small fires (i.e. any fire source that does no more than 1d6 points of damage is extinguished) such as campfires, torches, and even creatures' clothing. The globule can be fired at a creature's face (-4 penalty to attack roll) and, if it hits, the creature is dazzled (-1 penalty on attack rolls, Search checks, and Spot checks) for 1 minute unless it succeeds at a Reflex save (averted or closed its eyes and the water did not get into them). Sightless creatures or those already dazzled are unaffected by the dazzle effect of this spell.",
    source: `${PM} — Water Splash, p. 8`,
    sourceUrl: PM_PATH,
  },
  // ================= 1ST LEVEL =================
  {
    id: "amplify-performance-magic",
    name: "Amplify",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Bard: 1 },
    components: "V, S",
    castingTime: "Not printed in source",
    range: "Personal or close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Targets: You or one willing creature or one musical instrument",
    duration: "10 min./level (D)",
    savingThrow: "Will negates (object)",
    spellResistance: "Yes (object)",
    summary: "Doubles the effective range of the target's voice or of a musical instrument for 10 min./level, for being heard in large crowds or over greater distances. It does not affect sonic-based spells such as shout or bardic music. The printed stat block (p. 8) has no Casting Time line; the field says so rather than inventing one. This is a different spell from the Spell Compendium's amplify, which already owns that id.",
    description: "Amplify doubles the effective range of a creature's voice or musical instrument. The added volume is handy for making oneself heard in large crowds or for calling out over greater distances and, as a result, is often employed by heralds and other public speakers in addition to bards. Note that amplify does not affect the properties of any sonic-based spells such as shout or bardic music.",
    source: `${PM} — Amplify, pp. 8-9`,
    sourceUrl: PM_PATH,
  },
  {
    id: "tune",
    name: "Tune",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Bard: 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal or close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Targets: You or one willing creature or musical instrument",
    duration: "10 min./level (D)",
    savingThrow: "Will negates (object)",
    spellResistance: "Yes (object)",
    summary: "Magically smooths out a voice or musical instrument, granting a +1 competence bonus on Perform checks involving that voice or instrument per four caster levels (maximum +3) for 10 min./level. The bonus applies only to normal performances — not to bardic music — and does not aid anyone with 15 or more ranks in the appropriate Perform skill.",
    description: "This spell magically enhances a voice or musical instrument by smoothing out inconsistencies, adjusting timbre, etc. The spell grants a +1 competence bonus to Perform checks involving the voice or the instrument in question for every four caster levels (maximum +3). The spell's bonus only applies to normal performances; it does not aid in the performance of bardic music nor does it aid anyone with 15 or more ranks in the appropriate Perform skill.",
    source: `${PM} — Tune, pp. 9-10`,
    sourceUrl: PM_PATH,
  },
  // ================= 2ND LEVEL =================
  {
    id: "bang-bombs",
    name: "Bang Bombs",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Sonic"],
    levels: { "Sorcerer/Wizard": 2 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "Targets: One bead per two caster levels",
    duration: "10 min./level or until used",
    savingThrow: "Fortitude negates",
    spellResistance: "No",
    summary: "Turns ordinary ceramic beads or marbles (one per two caster levels) into bombs detonated by a spoken command word from within 50 feet. Each exploding bead makes a deafening bang audible up to 100 feet away; a creature occupying the same 5-ft. square as a bang bomb must make a Fortitude save or be deafened for 1 hour. Material component: ceramic beads or marbles.",
    description: "You turn ordinary ceramic beads or marbles into bombs that you can detonate on command. You can turn one bead for every two levels into a bang bomb. If you are within 50 feet and speak a word of command, each bead instantly creates a deafening bang as it explodes. The bang can be heard clearly up to 100 feet away, although any creature occupying the same space (5' square) as a bang bomb must succeed at a Fortitude save or be deafened for 1 hour. For tactical uses please see the flash bomb entry. Material Component: Ceramic beads or marbles.",
    source: `${PM} — Bang Bombs, p. 10`,
    sourceUrl: PM_PATH,
  },
  {
    id: "flash-bombs",
    name: "Flash Bombs",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Fire"],
    levels: { "Sorcerer/Wizard": 2 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "Targets: One bead per two caster levels",
    duration: "10 min./level or until used",
    savingThrow: "Reflex half; see text",
    spellResistance: "No",
    summary: "Turns ordinary glass beads or marbles (one per two caster levels) into bombs detonated by a spoken command word from within 50 feet. Each bead bursts into flame over one 5-ft. square, dealing 1d4 fire damage (Reflex save for half) and igniting easily combustible materials such as clothing or paper (not wood). The bombs can be thrown (range increment 5 ft.) but detonate only on the command word, never on impact, and do no damage when thrown. Material component: glass beads or marbles.",
    description: "You turn ordinary glass beads or marbles into bombs that you can detonate on command. You can turn one bead for every two levels into a flash bomb. If you are within 50 feet and speak a word of command, each bead instantly bursts into flame. The flames shoot out in a two-foot radius (effectively one 5' square is covered by the flames) and cause 1d4 points of fire damage to anyone caught in the area, as well as igniting any easily combustible materials (such as clothing or paper, but not wood) in the area. A creature caught in the blast may attempt a Reflex save for half damage. Flash bombs are usually placed by hand in fire-resistant surfaces, either dirt or small metal saucers in areas where there are no audience members. They are often used as part of a fireworks display or during a performer's entrance or exit. Flash bombs can be thrown, having a range increment of 5 feet. However, they only detonate upon use of the command word, not on impact, so timing is of the essence if they are going to be used as weapons in this manner. Furthermore, they cause no actual damage when thrown. A better tactic is to roll them under the feet of enemies. This can be done individually, but they are usually all rolled into the same area (same 5' square) so that their combined effect is more devastating (they do more damage, but still only light easily combustible materials on flame). Material Component: Glass beads or marbles.",
    source: `${PM} — Flash Bombs, p. 11`,
    sourceUrl: PM_PATH,
  },
];
