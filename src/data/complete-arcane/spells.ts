import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Complete Arcane — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const COMPLETE_ARCANE_SPELLS: SpellDefinition[] = [
{
  "id": "apparition",
  "name": "Apparition",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Wu Jen": 2
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The subject's face takes on a horrible, terrifying appearance of hideous features you choose, though it cannot duplicate the appearance of any specific creature or person.",
  "source": "Complete Arcane, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Phantasm"
},
{
  "id": "assay-resistance",
  "name": "Assay Resistance",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You divine the exact nature and vulnerabilities of one creature's magical defenses, gaining a +10 bonus on caster level checks to overcome its spell resistance.",
  "source": "Complete Arcane, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "body-outside-body",
  "name": "Body Outside Body",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 7
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "10 ft.",
  "targetOrArea": "One duplicate/5 levels",
  "duration": "1 minute",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Creates one or more indistinguishable duplicates of you that share your ability scores, personality, class levels, skills, feats, and memories, but cannot cast spells.",
  "source": "Complete Arcane, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Creation"
},
{
  "id": "chameleon",
  "name": "Chameleon",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Druid": 2,
    "Wu Jen": 2
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "Alters the recipient's coloration to blend with the surrounding background, granting a +10 circumstance bonus on Hide checks.",
  "source": "Complete Arcane, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Glamer"
},
{
  "id": "cloud-chariot",
  "name": "Cloud Chariot",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Water"
  ],
  "levels": {
    "Wu Jen": 8
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Personal and touch",
  "targetOrArea": "You and other touched willing creatures",
  "duration": "10 minutes (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You and any willing creatures you touch lift into the air on a magic chariot formed of cloud and fly in the direction you desire.",
  "source": "Complete Arcane, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Creation"
},
{
  "id": "cobras-breath",
  "name": "Cobra's Breath",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 1
  },
  "components": "S, M",
  "castingTime": "1 standard action",
  "range": "10 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "No",
  "summary": "Your saliva becomes virulent poison that you spray in a 10-foot cone: creatures in it must save or take 1d3 points of Constitution damage.",
  "source": "Complete Arcane, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "commune-with-greater-spirit",
  "name": "Commune With Greater Spirit",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Wu Jen": 7
  },
  "components": "V, S, M, XP",
  "castingTime": "10 minutes",
  "range": "10 ft.",
  "targetOrArea": "One spirit",
  "duration": "1 min./level",
  "savingThrow": "Will negates; see text",
  "spellResistance": "No",
  "summary": "As commune with lesser spirit, except that it can contact any spirit creature regardless of Hit Dice, and you can ask one question per caster level.",
  "source": "Complete Arcane, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "note": "Abbreviated entry in Complete Arcane: functions as Commune with Lesser Spirit except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "commune-with-lesser-spirit",
  "name": "Commune With Lesser Spirit",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Wu Jen": 3
  },
  "components": "V, S, M",
  "castingTime": "10 minutes",
  "range": "10 ft.",
  "targetOrArea": "One lesser spirit",
  "duration": "1 min./level",
  "savingThrow": "Will negates; see text",
  "spellResistance": "No",
  "summary": "You contact a local spirit creature with 4 or fewer Hit Dice and can ask it up to one question per two caster levels.",
  "source": "Complete Arcane, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "creeping-darkness",
  "name": "Creeping Darkness",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Darkness"
  ],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "Cloud spreads in a 20-ft.- radius, 20 ft. high (S)",
  "duration": "3 rounds/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Creates an amorphous cloud of inky blackness that you can shape and move up to 20 feet per round while you concentrate; it stops all light and sound.",
  "source": "Complete Arcane, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "dancing-blade",
  "name": "Dancing Blade",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One sword",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "The target sword hovers and attacks on its own, aiding a character you designate within range.",
  "source": "Complete Arcane, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "decapitating-scarf",
  "name": "Decapitating Scarf",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 7
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "No",
  "summary": "You flick a silk scarf at one creature, propelling it with ironlike hardness to wrap around the creature's neck; on a successful ranged attack the scarf begins to strangle and decapitate.",
  "source": "Complete Arcane, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "earthbolt",
  "name": "Earthbolt",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Wu Jen": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Line up to close range (25 ft. + 5 ft./2 levels)",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂ ex half",
  "spellResistance": "Yes",
  "summary": "You strike the ground and create a bolt of seismic force along a line, causing earth, rock, and sand to fly into the air and strike creatures for 1d6 damage per caster level (maximum 10d6).",
  "source": "Complete Arcane, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "elemental-burst",
  "name": "Elemental Burst",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "10-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂ ex half or Reﬂ ex negates; see text",
  "spellResistance": "Yes",
  "summary": "You designate a target composed of one of the five wu jen elements, causing it to release magical energy in a sudden explosive burst whose effect depends on the element.",
  "source": "Complete Arcane, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "elemental-ward",
  "name": "Elemental Ward",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "60-ft.-radius emanation, centered on you",
  "duration": "1 minute",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "By uttering a fearsome cry, you drive off elementals of a specific type: any elemental in the area must leave unless it makes a Will save.",
  "source": "Complete Arcane, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "entangling-scarf",
  "name": "Entangling Scarf",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 2
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round/level",
  "savingThrow": "Reﬂ ex negates",
  "spellResistance": "No",
  "summary": "You flick a silk scarf at one creature, propelling it with ironlike hardness to wrap around and entangle the target on a successful ranged touch attack.",
  "source": "Complete Arcane, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "fiery-eyes",
  "name": "Fiery Eyes",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Wu Jen": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute",
  "savingThrow": "Reﬂ ex special; see text",
  "spellResistance": "Not printed in source",
  "summary": "Your eyes glow with unnatural fire, projecting beams of bright light; by fixing your sight on one spot as a full-round action, you can set combustibles alight.",
  "source": "Complete Arcane, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "finding-the-center",
  "name": "Finding the Center",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 8
  },
  "components": "S",
  "castingTime": "1 immediate action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "As aiming at the target, except that your unconscious mind maintains the required concentration, allowing you to take other actions — including casting more spells — normally.",
  "source": "Complete Arcane, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "note": "Complete Arcane prints this spell in abbreviated form (\"As aiming at the target\"); it prints only the level and duration, and the remaining stat-block fields follow aiming at the target (Spell Compendium) as the book directs."
},
{
  "id": "fire-breath",
  "name": "Fire Breath",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Wu Jen": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Once per round as a standard action, you breathe a gout of flame with a ranged touch attack to 15 feet, dealing 1d8 points of fire damage per two caster levels (maximum 10d8).",
  "source": "Complete Arcane, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "force-whip",
  "name": "Force Whip",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Sonic",
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 2,
    "Wu Jen": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "A whip of force",
  "duration": "1 round/level",
  "savingThrow": "Will negates; see text",
  "spellResistance": "No",
  "summary": "Creates a whip of magical force that you wield as if proficient; simply cracking it keeps normal animals at least 30 feet away unless they succeed on a Will save.",
  "source": "Complete Arcane, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "ghost-light",
  "name": "Ghost Light",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Fear",
    "Mind-Affecting"
  ],
  "levels": {
    "Wu Jen": 1
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "One Medium or smaller ghostly light",
  "duration": "Concentration",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Creates a ghostly green radiance, bright as a torch and shaped as you wish, that moves as you direct and causes creatures within 30 feet to become shaken unless they save.",
  "source": "Complete Arcane, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "giant-size",
  "name": "Giant Size",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 7
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You grow to Huge, Gargantuan, or Colossal size depending on your caster level, gaining the Strength, natural armor, and other adjustments of the new size.",
  "source": "Complete Arcane, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "ice-blast",
  "name": "Ice Blast",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Wu Jen": 2
  },
  "components": "S, M",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous; see text",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "You spit forth a cone of icy crystals dealing 1d6 points of damage per two caster levels (maximum 10d6) and leaving creatures fatigued with frostbite.",
  "source": "Complete Arcane, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "internal-fire",
  "name": "Internal Fire",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Wu Jen": 9
  },
  "components": "V, S, F",
  "castingTime": "1 round",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "Up to 1 HD/level of creatures, no two of which can be more than 20 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Creates a deadly raging heat in the targets' internal organs: those that fail a Fortitude save die instantly as they burst into flame from within; those that save take heavy fire damage.",
  "source": "Complete Arcane, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "iron-scarf",
  "name": "Iron Scarf",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 1
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You flick a silk scarf at one creature, propelling it with ironlike hardness; on a successful ranged attack it deals 1d8 points of damage +1 per caster level.",
  "source": "Complete Arcane, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "kiss-of-the-toad",
  "name": "Kiss of the Toad",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Wu Jen": 2
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "Instantaneous; see text",
  "savingThrow": "Fortitude negates; see text",
  "spellResistance": "Yes",
  "summary": "Your touch becomes toxic: a creature hit by your melee touch attack is poisoned, taking 1d6 points of Constitution damage now and again 1 minute later, each negated by a Fortitude save.",
  "source": "Complete Arcane, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "lightning-blade",
  "name": "Lightning Blade",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Electricity"
  ],
  "levels": {
    "Wu Jen": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Willing creature touched; see text",
  "duration": "1 minute or until discharged",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A sword blade of crackling electrical energy appears in the hand of the willing creature you touch, wielded as a martial weapon.",
  "source": "Complete Arcane, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "note": "Complete Arcane prints no Range line for this spell; the range is given as Touch, as its target is a willing creature touched."
},
{
  "id": "magnetism",
  "name": "Magnetism",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Ray",
  "duration": "1 round/level",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "A shimmering magnetic ray springs from your hand: once per round on a successful ranged touch attack, it can draw an iron or steel object of up to 8,000 pounds toward you with an effective Strength of 30.",
  "source": "Complete Arcane, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "melt",
  "name": "Melt",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 1
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One 5-ft. cube of ice or 10-ft. cube of snow/level, or one cold",
  "duration": "Instantaneous",
  "savingThrow": "None or Fortitude half; see text",
  "spellResistance": "See text",
  "summary": "Allows you to melt ice and snow automatically, or to deal damage to cold creatures.",
  "source": "Complete Arcane, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "metal-skin",
  "name": "Metal Skin",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 min./level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "The recipient’s skin toughens and gleams as if metallic, gaining a natural armor bonus of +8 but taking a -2 penalty to Dexterity.",
  "source": "Complete Arcane, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "minute-form",
  "name": "Minute Form",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 8
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You shrink to Tiny, Diminutive, or Fine size depending on your caster level, with the accompanying changes to ability scores, size modifiers, space, and reach.",
  "source": "Complete Arcane, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "pain",
  "name": "Pain",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Up to 1 HD/level of creatures, no two of which can be more than 20 ft. apart",
  "duration": "1 minute",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "The target creatures are struck by wracking pains and agony, taking a -4 penalty on attack rolls, skill checks, and ability checks; a successful Fortitude save lessens the penalty to -2.",
  "source": "Complete Arcane, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "poison-needles",
  "name": "Poison Needles",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "None and Fortitude negates; see text",
  "spellResistance": "Yes",
  "summary": "A needle flicked from your fingers multiplies into a hail of poisoned needles striking a single target for 1d4 points of damage per caster level (maximum 5d4) plus a poison effect of your choice.",
  "source": "Complete Arcane, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "protection-from-charm",
  "name": "Protection from Charm",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The recipient gains a resistance bonus of +1 per three caster levels (maximum +5) on Will saves against charm or compulsion spells and effects.",
  "source": "Complete Arcane, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "rain-of-needles",
  "name": "Rain of Needles",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Up to one creature/level",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A needle flicked from your fingers multiplies into a hail of needles raining down on targets you select, dealing 1d4 points of damage per caster level (maximum 5d4) divided among the targets.",
  "source": "Complete Arcane, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "reanimation",
  "name": "Reanimation",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 7
  },
  "components": "V, S, M, F",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 day/level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "Restores a semblance of life to a creature dead no more than one day per caster level, putting it in a state of half life without fully binding the soul back into the body.",
  "source": "Complete Arcane, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Healing"
},
{
  "id": "scales-of-the-lizard",
  "name": "Scales of the Lizard",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 1
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your skin toughens and shimmers as if covered with scales: a +2 enhancement bonus to natural armor, rising to +5 at 12th level, stacking with your own natural armor.",
  "source": "Complete Arcane, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "secret-signs",
  "name": "Secret Signs",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Wu Jen": 1
  },
  "components": "F",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One intelligent creature",
  "duration": "1 round",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "Using nonverbal signs, you communicate a complete thought of twenty-five words or less to one intelligent creature within range.",
  "source": "Complete Arcane, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "smoke-ladder",
  "name": "Smoke Ladder",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 1
  },
  "components": "V, S, F",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "A ladder of smoke",
  "duration": "1 min./level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Creates a misty ladder up to 10 feet long per caster level, shaped from the smoke of a fire; it is always steady and rigid and needs no support.",
  "source": "Complete Arcane, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "snake-darts",
  "name": "Snake Darts",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "One or two creatures",
  "duration": "Instantaneous; see text",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "Your snake tattoos transform into real poisonous snakes that fly to the targets you select and always hit, dealing 3d6 points of damage each plus Constitution-damaging poison.",
  "source": "Complete Arcane, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "spirit-binding",
  "name": "Spirit Binding",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 6
  },
  "components": "V, S",
  "castingTime": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels); see text",
  "targetOrArea": "Up to 16 HD worth of spirits, no two of which can be more than 30 ft. apart when they appear",
  "duration": "Instantaneous",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As lesser spirit binding, except you can call and trap one or more spirit creatures of the same type whose Hit Dice total no more than 16.",
  "source": "Complete Arcane, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Calling",
  "note": "Abbreviated entry in Complete Arcane: functions as Spirit Binding, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "spirit-binding-lesser",
  "name": "Spirit Binding, Lesser",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S",
  "castingTime": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels); see text",
  "targetOrArea": "One spirit of up to 8 HD",
  "duration": "Instantaneous",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Functions as lesser planar binding, except that it allows you to call and trap a single spirit creature of up to 8 Hit Dice.",
  "source": "Complete Arcane, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Calling"
},
{
  "id": "spirit-binding-greater",
  "name": "Spirit Binding, Greater",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 8
  },
  "components": "V, S",
  "castingTime": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels); see text",
  "targetOrArea": "Up to 24 HD worth of spirits, no two of which can be more than 30 ft. apart when they appear",
  "duration": "Instantaneous",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As lesser spirit binding, except you can call and trap one or more spirit creatures of the same type whose Hit Dice total no more than 24.",
  "source": "Complete Arcane, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Calling",
  "note": "Abbreviated entry in Complete Arcane: functions as Spirit Binding, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "spirit-needle",
  "name": "Spirit Needle",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 6
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One spirit creature",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A needle flicked from your fingers penetrates a spirit creature’s aura on a successful ranged attack: the spirit loses the benefits of incorporeality and is held in place.",
  "source": "Complete Arcane, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "spirit-self",
  "name": "Spirit Self",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Wu Jen": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You send your spirit outside your body in incorporeal form while your physical body retains a semblance of life; the spirit has a speed of 90 feet but cannot stray more than a limited distance from your body.",
  "source": "Complete Arcane, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "steam-breath",
  "name": "Steam Breath",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Wu Jen": 3
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "30 ft.",
  "targetOrArea": "Cone",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂ ex half",
  "spellResistance": "Yes",
  "summary": "You expel a cone of superheated steam dealing 1d6 points of fire damage per caster level (maximum 10d6).",
  "source": "Complete Arcane, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "summoning-wind",
  "name": "Summoning Wind",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 5
  },
  "components": "V, S",
  "castingTime": "10 minutes",
  "range": "10 miles/level",
  "targetOrArea": "Up to 10 creatures/level",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You send a message or sound on the wind to specific creatures you identify while casting, distinguished by location, position, or some feature other than race or class.",
  "source": "Complete Arcane, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "superior-invisibility",
  "name": "Superior Invisibility",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S",
  "castingTime": "10 minutes",
  "range": "Personal or touch",
  "targetOrArea": "You or a creature or object weighing no more than 100 lb./level",
  "duration": "1 hour/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "No",
  "summary": "Functions as greater invisibility, except that it masks image, scent, and sound alike, concealing the subject from all senses except touch and taste.",
  "source": "Complete Arcane, p. 125",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Glamer"
},
{
  "id": "terra-cotta-lion",
  "name": "Terra Cotta Lion",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 5
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One statuette touched",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As terra cotta warrior, but the spell animates a statuette of a foo lion into a Huge animated object.",
  "source": "Complete Arcane, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "note": "Abbreviated entry in Complete Arcane: functions as Terra Cotta Warrior except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "terra-cotta-warrior",
  "name": "Terra Cotta Warrior",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 3
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One statuette touched",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Turns a statuette of decoration and devotion into a full-sized Medium animated object warrior that attacks a specified target as you direct.",
  "source": "Complete Arcane, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "wall-of-bones",
  "name": "Wall of Bones",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "Wall whose area is up to one 10-ft. square/level",
  "duration": "10 minutes",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Causes a wall of bones to erupt from the earth in whatever shape you desire, so long as its base is solidly on the ground; the wall has many small openings and gaps.",
  "source": "Complete Arcane, p. 128",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Creation"
},
{
  "id": "water-to-poison",
  "name": "Water to Poison",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "One ounce of water/level",
  "duration": "Instantaneous",
  "savingThrow": "None; see text",
  "spellResistance": "No",
  "summary": "Transforms a volume of water into an equal volume of colorless, tasteless ingested poison with a save DC equal to the spell’s DC, dealing Constitution damage.",
  "source": "Complete Arcane, p. 129",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
];
