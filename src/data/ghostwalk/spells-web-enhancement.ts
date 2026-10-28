import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Ghostwalk Web Enhancement — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const GHOSTWALK_WEB_ENHANCEMENT_SPELLS: SpellDefinition[] = [
{
  "id": "demonic-blood-infusion",
  "name": "DEMONIC BLOOD INFUSION",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Chaotic",
    "Evil"
  ],
  "levels": {
    "Cleric": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Willing creature touched",
  "duration": "1 hour/level",
  "savingThrow": "None (see text)",
  "spellResistance": "Yes",
  "summary": "You grant the subject infernal power by transforming its blood into the blood of a demon: it gains the fiendish template and the chaotic and evil subtypes, and becomes chaotic evil if it is not already.",
  "source": "Ghostwalk Web Enhancement, p. 228",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "From the official Ghostwalk Web Enhancement (Sean K. Reynolds), appended to the library PDF."
},
{
  "id": "door-to-great-evil",
  "name": "DOOR TO GREAT EVIL",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Teleportation"
  ],
  "levels": {
    "Paladin": 4
  },
  "components": "V, DF",
  "castingTime": "1 action",
  "range": "Personal or touch",
  "targetOrArea": "You or willing paladin touched",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "This spell functions like teleport, except as noted in its text; when you cast it, you select one of two variants.",
  "source": "Ghostwalk Web Enhancement, p. 228",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "From the official Ghostwalk Web Enhancement (Sean K. Reynolds), appended to the library PDF."
},
{
  "id": "candlelight",
  "name": "CANDLELIGHT",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Light"
  ],
  "levels": {
    "Bard": 0,
    "Cleric": 0,
    "Druid": 0,
    "Sorcerer/Wizard": 0
  },
  "components": "V, M/DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Object touched",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You cause an object to glow like a candle, shedding light in a 5-foot radius. The light produced is not strong enough to counter or dispel any magical darkness.",
  "source": "Ghostwalk Web Enhancement, p. 227",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "From the official Ghostwalk Web Enhancement (Sean K. Reynolds), appended to the library PDF."
},
{
  "id": "fetid-breath",
  "name": "FETID BREATH",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "10 ft.",
  "targetOrArea": "Cone",
  "duration": "1 round (see text)",
  "savingThrow": "Fortitude negates (see text)",
  "spellResistance": "Yes",
  "summary": "This spell functions like stinking cloud, except you exhale a 10-foot cone of stinking gas that persists for only 1 round, and creatures that succumb to its effects are nauseated for 1d4+1 rounds after leaving the cone. Creatures immune to poison are unaffected.",
  "source": "Ghostwalk Web Enhancement, p. 229",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Creation",
  "note": "From the official Ghostwalk Web Enhancement (Sean K. Reynolds), appended to the library PDF."
},
{
  "id": "leech-ghost-skill",
  "name": "LEECH GHOST SKILL",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "10 minutes",
  "range": "Touch (see text)",
  "targetOrArea": "Ghost touched",
  "duration": "1 day/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You bind the ectoplasmic form of the target ghost onto another creature as a tattoo for the duration; while bound, the bearer can use the ghost’s skill ranks instead of his own.",
  "source": "Ghostwalk Web Enhancement, p. 229",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "From the official Ghostwalk Web Enhancement (Sean K. Reynolds), appended to the library PDF."
},
];
