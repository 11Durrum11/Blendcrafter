import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Complete Scoundrel — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const COMPLETE_SCOUNDREL_SPELLS: SpellDefinition[] = [
{
  "id": "animate-instrument",
  "name": "Animate Instrument",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Instrument touched",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You imbue your musical instrument with the ability to play itself: it leaves your hands and floats before you, continuing your song.",
  "source": "Complete Scoundrel, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "aquatic-escape",
  "name": "Aquatic Escape",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your arms and legs fuse with your body as bright silvery scales cover your skin: you take the form of a Diminutive fish.",
  "source": "Complete Scoundrel, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Polymorph"
},
{
  "id": "armor-lock",
  "name": "Armor Lock",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Hexblade": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "One creature wearing armor",
  "duration": "1 round/level (D)",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "You cause the target's armor to swell and stiffen, slowing the wearer's movement and trapping him within it, as the text describes.",
  "source": "Complete Scoundrel, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "blockade",
  "name": "Blockade",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 swift action",
  "range": "0 ft.",
  "targetOrArea": "5-ft. cube of wood",
  "duration": "3 rounds",
  "savingThrow": "No",
  "spellResistance": "None",
  "summary": "You call a cube of solid wood, 5 feet on a side, into being at a point within range.",
  "source": "Complete Scoundrel, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Creation"
},
{
  "id": "catapult",
  "name": "Catapult",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One held object, weighing up to 5 lb.",
  "duration": "Instantaneous",
  "savingThrow": "No",
  "spellResistance": "None",
  "summary": "You propel a single held object out of your hand at fantastic speed, as the text describes.",
  "source": "Complete Scoundrel, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "create-fetch",
  "name": "Create Fetch",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Assassin": 3,
    "Bard": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "A duplicate of yourself",
  "duration": "10 minutes/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You create a fetch, a perfect replica of your form at the time you cast this spell.",
  "source": "Complete Scoundrel, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Creation"
},
{
  "id": "disobedience",
  "name": "Disobedience",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 hour/level (D)",
  "savingThrow": "Will negates (harmless); see text",
  "spellResistance": "Yes",
  "summary": "A ghostly great helm that only you can see appears around the subject's head, warding her mind against control, as the text describes.",
  "source": "Complete Scoundrel, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "enlarge-weapon",
  "name": "Enlarge Weapon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One touched melee weapon",
  "duration": "1 round/level",
  "savingThrow": "Will negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "A melee weapon you hold enlarges by one size category, becoming far more intimidating.",
  "source": "Complete Scoundrel, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "evacuation-rune",
  "name": "Evacuation Rune",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Bard": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One invisible rune",
  "duration": "24 hours",
  "savingThrow": "None (harmless)",
  "spellResistance": "No (harmless)",
  "summary": "You scribe an invisible rune; even though it disappears, you feel as though you can step back to it simply by willing it, as the text describes.",
  "source": "Complete Scoundrel, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Teleportation"
},
{
  "id": "fatal-flame",
  "name": "Fatal Flame",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "One living creature with 1 or more HD",
  "duration": "1 minute/level",
  "savingThrow": "Will negates, Reflex half; see text",
  "spellResistance": "Yes",
  "summary": "You place a tiny quantity of pure elemental fire within a creature's body, where it waits silently for its death, as the text describes.",
  "source": "Complete Scoundrel, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": ""
},
{
  "id": "grasping-wall",
  "name": "Grasping Wall",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft. /level)",
  "targetOrArea": "Hands sprout from a wall in an area of up to four 5-ft. squares (S)",
  "duration": "Concentration (max. 1 round/level) + 3 rounds",
  "savingThrow": "Reflex negates",
  "spellResistance": "No",
  "summary": "You cause hands to sprout from a wall within range, forming a sea of clutching, probing appendages.",
  "source": "Complete Scoundrel, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Creation"
},
{
  "id": "harmonic-void",
  "name": "Harmonic Void",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "60-ft. -radius spherical ema nation, centered on you",
  "duration": "Concentration, up to 1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You create a zone of disruptive arcane harmonies filled with jarring, discordant noises that interfere with spells that have verbal components, as the text describes.",
  "source": "Complete Scoundrel, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "lucky-streak",
  "name": "Lucky Streak",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 minute/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You improve the luck of the subject creature for the duration, as the text describes.",
  "source": "Complete Scoundrel, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "mage-burr",
  "name": "Mage Burr",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Hexblade": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "One creature wearing armor or using a shield",
  "duration": "1 round/level (D)",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Jagged edges and rough surfaces break forth all over the target creature's armor or shield like an angry, irritating disease, as the text describes.",
  "source": "Complete Scoundrel, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "manifestation-of-the-deity",
  "name": "Manifestation of the Deity",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Cleric": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "An image of the deity you worship",
  "duration": "1 round/3 levels (D)",
  "savingThrow": "Will negates",
  "spellResistance": "No",
  "summary": "You summon a looming, towering spectral image of the deity you worship above you, turning its wrath upon your foes.",
  "source": "Complete Scoundrel, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Pattern"
},
{
  "id": "mimicry",
  "name": "Mimicry",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Assassin": 1,
    "Bard": 1
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You can perfectly mimic familiar sounds, voices, and accents for the duration.",
  "source": "Complete Scoundrel, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "opportune-dodge",
  "name": "Opportune Dodge",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You surround your comrade with a thin, blurry haze: any time the subject might provoke attacks of opportunity, he can avoid them as the text describes.",
  "source": "Complete Scoundrel, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "scry-location",
  "name": "Scry Location",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 5,
    "Cleric": 7,
    "Druid": 7,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M/DF, F",
  "castingTime": "1 hour",
  "range": "See text",
  "targetOrArea": "Magical sensor",
  "duration": "1 minute/level",
  "savingThrow": "No",
  "spellResistance": "No",
  "summary": "You gaze into your scrying focus and stretch out your sight, seeing and hearing a familiar place, as the text describes.",
  "source": "Complete Scoundrel, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Scrying"
},
{
  "id": "siphon",
  "name": "Siphon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "One touched wand or staff",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You leach the power of a wand or staff you hold, drawing its charges out as a ghostly stream of blue mist, as the text describes.",
  "source": "Complete Scoundrel, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "smoke-stairs",
  "name": "Smoke Stairs",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Air"
  ],
  "levels": {
    "Assassin": 2,
    "Druid": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/ level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You step into intangible smoke and ascend as nimbly as if it were a flight of steps, running up columns of smoke as if they were normal stairs.",
  "source": "Complete Scoundrel, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "spell-theft",
  "name": "Spell Theft",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 4,
    "Hexblade": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You attempt to steal an opponent’s beneficial spell effects, ripping the dweomers away and feeling their energy rise around you, as the text describes.",
  "source": "Complete Scoundrel, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "spore-field",
  "name": "Spore Field",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft. /level)",
  "targetOrArea": "10-ft. -radius spread",
  "duration": "1 minute/level",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "No",
  "summary": "You cause the ground to become thick with spore-ridden fungus, making the area difficult terrain with the additional effects given in the text.",
  "source": "Complete Scoundrel, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "spymasters-coin",
  "name": "Spymaster's Coin",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Magical sensor",
  "duration": "1 hour/level or until triggered, then 1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You imbue a Fine object (such as a coin) with a dormant magical scrying sensor drawn from your own senses, as the text describes.",
  "source": "Complete Scoundrel, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Scrying"
},
{
  "id": "wall-of-vermin",
  "name": "Wall of Vermin",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "Wall of pests whose area is up to four 5-ft. squares (S)",
  "duration": "Concentration + 1 round/level",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "You cause a thick but porous wall, alive with hungry bugs, to roil up from beneath the earth.",
  "source": "Complete Scoundrel, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Creation"
},
{
  "id": "wand-modulation",
  "name": "Wand Modulation",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Touch",
  "targetOrArea": "One touched wand",
  "duration": "1 minute/level (D)",
  "savingThrow": "Yes (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "Manipulating the very magic that infuses your wand, you alter that energy, opening the magic item to a new power of your choosing, as the text describes.",
  "source": "Complete Scoundrel, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf"
},
{
  "id": "winged-watcher",
  "name": "Winged Watcher",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your body hunches and shrinks as dusky feathers sprout from your skin and your arms become wings: you take the form of an owl or a raven.",
  "source": "Complete Scoundrel, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf",
  "subschool": "Polymorph"
},
];
