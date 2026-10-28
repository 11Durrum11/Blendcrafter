import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Dragon Magic — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const DRAGON_MAGIC_SPELLS: SpellDefinition[] = [
{
  "id": "adoration-of-the-frightful",
  "name": "Adoration of the Frightful",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Cleric": 3,
    "Hexblade": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "60-ft. radius emanation, centered on you",
  "duration": "1 minute/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You radiate a magical aura that causes fearful creatures within the emanation to shy away from you and show you respect, as the text describes.",
  "source": "Dragon Magic, p. 64",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Charm"
},
{
  "id": "arcane-spellsurge",
  "name": "Arcane Spellsurge",
  "ruleset": "core",
  "school": "Universal",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 7,
    "Wu Jen": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell speeds the flow of magic through you, hastening your spellcasting for the duration, as the text describes.",
  "source": "Dragon Magic, p. 64",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "aspect-of-the-chromatic-dragon",
  "name": "Aspect of the Chromatic Dragon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer": 8
  },
  "components": "V, S, Evil",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You take the form of an aspect of Tiamat: your body becomes powerfully muscled and covered in multicolored scales, with four draconic heads sprouting from your shoulders, and you gain 100 temporary hit points.",
  "source": "Dragon Magic, p. 64",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Polymorph"
},
{
  "id": "aspect-of-the-platinum-dragon",
  "name": "Aspect of the Platinum Dragon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sorcerer": 7
  },
  "components": "V, S, Good",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You take the form of an aspect of Bahamut: your body expands with platinum scales, mighty claws and teeth, and a pair of great wings.",
  "source": "Dragon Magic, p. 64",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Polymorph"
},
{
  "id": "burst-of-glacial-wrath",
  "name": "Burst of Glacial Wrath",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "30 feet",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "You create an enormous bubble of icy energy that washes out over the landscape, freezing all in its path.",
  "source": "Dragon Magic, p. 64",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "call-of-the-twilight-defender",
  "name": "Call of the Twilight Defender",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One twilight guardian",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "The ground erupts and a twilight guardian — a regal creature of stone, wood, and plant parts — stands forth to serve you.",
  "source": "Dragon Magic, p. 65",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Summoning"
},
{
  "id": "channel-the-dragon",
  "name": "Channel the Dragon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 7
  },
  "components": "V, S",
  "castingTime": "1 full round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The force of elemental wyrms floods your spirit and reinforces your body: your flesh hardens and your eyes gleam, as the text describes.",
  "source": "Dragon Magic, p. 65",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "curse-of-the-elemental-lords",
  "name": "Curse of the Elemental Lords",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature/4 levels",
  "duration": "24 hours",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Ghostly images of elemental beasts fly from your arm and curse the targets, making them more susceptible to your elemental spells, as the text describes.",
  "source": "Dragon Magic, p. 65",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "detect-dragonblood",
  "name": "Detect Dragonblood",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped emanation",
  "duration": "Concentration, up to 10 min./level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "This spell functions like detect evil, except that you detect the auras of creatures of the dragon type or the dragonblood subtype.",
  "source": "Dragon Magic, p. 65",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "dragoneye-rune",
  "name": "Dragoneye Rune",
  "ruleset": "core",
  "school": "Universal",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 2,
    "Wu Jen": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One personal rune or mark, all of which must fi t within 1 sq. ft.",
  "duration": "Permanent",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You brand a special arcane mark onto an object or creature: a brightly glowing sigil that fades to invisibility, with the effects given in the text.",
  "source": "Dragon Magic, p. 66",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "dragonshape-least",
  "name": "Dragonshape, Least",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You shrink to the size of a housecat as red-brown scales replace your skin and your fingers become sharp claws, taking the form of a tiny dragon.",
  "source": "Dragon Magic, p. 66",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Polymorph"
},
{
  "id": "dragonshape-lesser",
  "name": "Dragonshape, Lesser",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Crimson scales grow over your body, a pair of great wings sprouts from your shoulders, and the scent of sulfur fills the air as you take a dragon's form.",
  "source": "Dragon Magic, p. 66",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Polymorph"
},
{
  "id": "eyes-of-the-oracle",
  "name": "Eyes of the Oracle",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Cleric": 6,
    "Sorcerer/Wizard": 6,
    "Wu Jen": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You can see slightly into the future, anticipating your foes' motions; translucent shadows of your form move just out of sync with your body.",
  "source": "Dragon Magic, p. 66",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "ferocity-of-sanguine-rage",
  "name": "Ferocity of Sanguine Rage",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Assassin": 4,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You are imbued with a supernatural ferocity, gaining an edge in melee combat for the duration, as the text describes.",
  "source": "Dragon Magic, p. 67",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "firestride-exhalation",
  "name": "Firestride Exhalation",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4,
    "Wu Jen": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "30 ft.; see text",
  "targetOrArea": "Cone-shaped burst; see text",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂ ex half",
  "spellResistance": "Yes",
  "summary": "You fill your lungs with swirling, burning energy and exhale a powerful cone of fire; the exhalation also moves you, as the text describes.",
  "source": "Dragon Magic, p. 67",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Teleportation"
},
{
  "id": "form-of-the-desert-hunter",
  "name": "Form of the Desert Hunter",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Brass scales grow from your flesh and a thick mane surrounds your face as your body hunches into a quadrupedal form with powerful limbs and sharp claws.",
  "source": "Dragon Magic, p. 67",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Polymorph"
},
{
  "id": "glorious-master-of-the-elements",
  "name": "Glorious Master of the Elements",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "None",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "One creature",
  "duration": "5 rounds",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You channel the awesome energy of the primal elements, lashing out with jolts of white, red, and yellow energy for the duration, as the text describes.",
  "source": "Dragon Magic, p. 67",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "haze-of-smoldering-stone",
  "name": "Haze of Smoldering Stone",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Druid": 7,
    "Sorcerer/Wizard": 6,
    "Wu Jen": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂ ex half",
  "spellResistance": "Yes",
  "summary": "You project hundreds of tiny, burning volcanic rocks outward, pummeling nearby foes with searing stone.",
  "source": "Dragon Magic, p. 68",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "hoard-gullet",
  "name": "Hoard Gullet",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain a magical second stomach, which can be used to transport objects, as the text describes.",
  "source": "Dragon Magic, p. 68",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "justice-of-the-wyrm-king",
  "name": "Justice of the Wyrm King",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "5 rounds",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You create a field of arcane force around yourself, ringed with spines of brilliant yellow light, as the text describes.",
  "source": "Dragon Magic, p. 68",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "kiss-of-draconic-defiance",
  "name": "Kiss of Draconic Defiance",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "40 ft.",
  "targetOrArea": "40-ft.-radius emanation centered on you",
  "duration": "Concentration + 1 round or until expended",
  "savingThrow": "Fortitude negates; see text",
  "spellResistance": "Yes; see text",
  "summary": "A ring of radiant energy spirals out from your body, disrupting and shattering the magical energies of others within the emanation, as the text describes.",
  "source": "Dragon Magic, p. 69",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "lord-of-the-sky",
  "name": "Lord of the Sky",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Shugenja": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A swirling cloud of black mist shot through with lightning surrounds you, making you more formidable in aerial combat, as the text describes.",
  "source": "Dragon Magic, p. 69",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "magic-of-the-dragonheart",
  "name": "Magic of the Dragonheart",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "An aura of bright energy coalesces into the shape of a translucent dragon above your head, granting you the benefits given in the text.",
  "source": "Dragon Magic, p. 70",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "mark-of-the-enlightened-soul",
  "name": "Mark of the Enlightened Soul",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "3 rounds or until ended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell adds a touch of good to your magic, granting you special potency against your evil-aligned enemies for a few rounds.",
  "source": "Dragon Magic, p. 70",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "mind-of-the-labyrinth",
  "name": "Mind of the Labyrinth",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 8
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour/level or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You twist your mind to become a magical labyrinth, with the defenses given in the text.",
  "source": "Dragon Magic, p. 70",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Compulsion"
},
{
  "id": "passage-of-the-shifting-sands",
  "name": "Passage of the Shifting Sands",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level (D) or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your body sparkles as color fades from your form, and you collapse into thousands of particles of sand carried on a stiff breeze, as the text describes.",
  "source": "Dragon Magic, p. 70",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "path-of-frost",
  "name": "Path of Frost",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action; see text",
  "range": "30 ft.",
  "targetOrArea": "One 5-foot square per level (maximum 5), beginning adjacent to your space (S)",
  "duration": "1 round/level",
  "savingThrow": "Reﬂ ex negates",
  "spellResistance": "No",
  "summary": "A pathway of solid ice races along the ground from your feet, creating a frozen, slippery strip.",
  "source": "Dragon Magic, p. 71",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "primal-hunter",
  "name": "Primal Hunter",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 2,
    "Ranger": 1,
    "Sorcerer": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "24 hours",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell causes your body to recall the strength of your forebears, hearkening back to a time when your ancestors hunted for survival.",
  "source": "Dragon Magic, p. 71",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "primal-instinct",
  "name": "Primal Instinct",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 3,
    "Ranger": 2,
    "Sorcerer": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "24 hours",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell calls upon the raw natural forces within you to grant the benefits given in the text for 24 hours.",
  "source": "Dragon Magic, p. 72",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "primal-senses",
  "name": "Primal Senses",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 4,
    "Ranger": 3,
    "Sorcerer": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "24 hours",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell calls upon the primal forces of creation to grant you the senses of your ancestors for 24 hours.",
  "source": "Dragon Magic, p. 72",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "primal-speed",
  "name": "Primal Speed",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 6,
    "Ranger": 4,
    "Sorcerer": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "24 hours",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell draws upon the natural reflexes of hunters and prey, giving you the abilities described in the text for 24 hours.",
  "source": "Dragon Magic, p. 72",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "rot-of-ages",
  "name": "Rot of Ages",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action; see text",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "2 rounds",
  "savingThrow": "Fortitude partial",
  "spellResistance": "No",
  "summary": "A cloud of rotting plant and animal matter swirls up around your target, encompassing it in a whirlwind of decay.",
  "source": "Dragon Magic, p. 72",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Creation"
},
{
  "id": "soul-of-anarchy",
  "name": "Soul of Anarchy",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Chaotic"
  ],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell infuses your body with chaotic energy drawn from the primal forces of chaos, as the text describes.",
  "source": "Dragon Magic, p. 72",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "soul-of-light",
  "name": "Soul of Light",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 3,
    "Paladin": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell infuses your body with energy drawn from the Positive Energy Plane, as the text describes.",
  "source": "Dragon Magic, p. 73",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "soul-of-order",
  "name": "Soul of Order",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Lawful"
  ],
  "levels": {
    "Paladin": 1,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell infuses your body with lawful energy drawn from the primal forces of law, as the text describes.",
  "source": "Dragon Magic, p. 73",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "soul-of-shadow",
  "name": "Soul of Shadow",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 2,
    "Cleric": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell infuses your body with energy drawn from the Negative Energy Plane, as the text describes.",
  "source": "Dragon Magic, p. 73",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "touch-of-the-blackened-soul",
  "name": "Touch of the Blackened Soul",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "3 rounds or until ended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell adds a taint of evil to your magic, granting you special potency against your good-aligned enemies for a few rounds.",
  "source": "Dragon Magic, p. 73",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "trance-of-the-verdant-domain",
  "name": "Trance of the Verdant Domain",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Hexblade": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You project an instantaneous surge of mental energy that overwhelms a weak-minded foe, as the text describes.",
  "source": "Dragon Magic, p. 74",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Compulsion"
},
{
  "id": "undying-vigor-of-the-dragonlords",
  "name": "Undying Vigor of the Dragonlords",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer": 5
  },
  "components": "V",
  "castingTime": "1 full round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A golden ray of light bathes you in healing illumination: this spell converts arcane spell energy into pure draconic healing power, as the text describes.",
  "source": "Dragon Magic, p. 74",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
  "subschool": "Healing"
},
{
  "id": "vision-of-the-omniscient-eye",
  "name": "Vision of the Omniscient Eye",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Cleric": 3,
    "Druid": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain great vision, allowing you to see everything in the surrounding area clearly, with a +10 bonus on Spot checks as the text describes.",
  "source": "Dragon Magic, p. 74",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "wingblast",
  "name": "Wingblast",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Air"
  ],
  "levels": {
    "Druid": 3,
    "Shugenja": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "See text",
  "targetOrArea": "See text",
  "duration": "1 round/level (D) or until expended; see text",
  "savingThrow": "None or Fortitude negates; see text",
  "spellResistance": "No or Yes; see text",
  "summary": "Large wings of mist-resembling vapor form at your sides, bearing you aloft; at your command, the wings transform into a great blast of wind or a cloud of fog.",
  "source": "Dragon Magic, p. 74",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
{
  "id": "wreath-of-flames",
  "name": "Wreath of Flames",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Druid": 3,
    "Sorcerer/Wizard": 3,
    "Wu Jen": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A burst of white-hot fire springs into existence around you: at the end of each of your turns, any enemy adjacent to you or sharing your space takes 1d6 points of fire damage, and your melee attacks deal an extra 1d6 points of fire damage.",
  "source": "Dragon Magic, p. 75",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf"
},
];
