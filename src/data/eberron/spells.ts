import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Eberron Campaign Setting — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const EBERRON_CAMPAIGN_SETTING_SPELLS: SpellDefinition[] = [
{
  "id": "control-deathless",
  "name": "Control Deathless",
  "ruleset": "eberron",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Deathless": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Up to 2 HD of deathless creatures/level, no two of which can be more than 30 ft. apart",
  "duration": "1 min./level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "This spell enables you to command deathless creatures for a short period of time; the creatures understand you no matter what language you speak.",
  "source": "Eberron Campaign Setting, p. 109",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "create-deathless",
  "name": "Create Deathless",
  "ruleset": "eberron",
  "school": "Necromancy",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Deathless": 6
  },
  "components": "V, S, M",
  "castingTime": "1 hour",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One corpse",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Calling on the celestial powers, you restore life to a corpse, creating an undying soldier, a type of deathless creature.",
  "source": "Eberron Campaign Setting, p. 109",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "create-greater-deathless",
  "name": "Create Greater Deathless",
  "ruleset": "eberron",
  "school": "Necromancy",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Deathless": 8
  },
  "components": "V, S, M",
  "castingTime": "1 hour",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One corpse",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As create deathless, except that this spell allows you to create an undying councilor, a more powerful and intelligent deathless creature.",
  "source": "Eberron Campaign Setting, p. 113",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "detect-aberration",
  "name": "Detect Aberration",
  "ruleset": "eberron",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Druid": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped emanation",
  "duration": "Concentration, up to 1 min./level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You can detect the presence of aberrations by observing the disruption of the natural order around them; the amount of information revealed depends on how long you study a particular area.",
  "source": "Eberron Campaign Setting, p. 113",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "feast-of-champions",
  "name": "Feast of Champions",
  "ruleset": "eberron",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 9,
    "Feast": 9
  },
  "components": "V, S, DF",
  "castingTime": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Feast for one creature/level",
  "duration": "1 hour plus 12 hours; see text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You bring forth a magnificent feast, including a grand table, chairs, service, and food and drink; the feast takes 1 hour to consume, and the beneficial effects do not set in until it is finished.",
  "source": "Eberron Campaign Setting, p. 111",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "subschool": "Creation"
},
{
  "id": "halt-deathless",
  "name": "Halt Deathless",
  "ruleset": "eberron",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Deathless": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Up to three deathless, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "This spell renders up to three deathless creatures immobile, paralyzing them for the duration (similar to the effect of hold person on a living creature).",
  "source": "Eberron Campaign Setting, p. 111",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "heros-blade",
  "name": "Hero's Blade",
  "ruleset": "eberron",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Deathless": 9
  },
  "components": "V, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Melee weapon touched",
  "duration": "1 min./level",
  "savingThrow": "Will negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "You channel the spirit of a mighty elf hero of old into a melee weapon, granting it the benefits given in the text for the duration.",
  "source": "Eberron Campaign Setting, p. 115",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "magecraft",
  "name": "Magecraft",
  "ruleset": "eberron",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, F",
  "castingTime": "1 round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 day",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You get a +5 competence bonus on one Craft check representing a day of work crafting an item.",
  "source": "Eberron Campaign Setting, p. 113",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "natures-wrath",
  "name": "Nature's Wrath",
  "ruleset": "eberron",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Druid": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Unnatural creatures in a 20-ft.-radius burst",
  "duration": "Instantaneous and 1 round; see text",
  "savingThrow": "Will partial or Will half; see text",
  "spellResistance": "Yes",
  "summary": "You call up the power of nature to smite your enemies: creatures that are part of the natural world are unaffected, while aberrations, undead, and similar corruptions of nature are harmed, as the text describes.",
  "source": "Eberron Campaign Setting, p. 114",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "return-to-nature",
  "name": "Return to Nature",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "1 living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "The target creature draws closer to an ideal state of nature, with specific effects that depend on the creature’s type and abilities.",
  "source": "Eberron Campaign Setting, p. 114",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "shield-of-faith-legions",
  "name": "Shield of Faith, Legion's",
  "ruleset": "eberron",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Artificer": 4,
    "Cleric": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. +10 ft./level)",
  "targetOrArea": "Allied creatures in a 20-ft.-radius burst",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "This spell functions like shield of faith, except that it affects multiple allies at a distance.",
  "source": "Eberron Campaign Setting, p. 115",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "This book prints only the range and target lines and states that the spell functions like shield of faith (Player's Handbook); the remaining fields are filled from that spell."
},
{
  "id": "spirit-steed",
  "name": "Spirit Steed",
  "ruleset": "eberron",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Deathless": 4
  },
  "components": "V, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living animal touched",
  "duration": "1 hour/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You call a spirit steed to serve as your mount, as the text describes.",
  "source": "Eberron Campaign Setting, p. 115",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "status-greater",
  "name": "Status, Greater",
  "ruleset": "eberron",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Community": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One touched creature/3 levels",
  "duration": "1 hour/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "This spell functions like status, except that it can affect more creatures and reveals additional information, as the text describes.",
  "source": "Eberron Campaign Setting, p. 116",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "Heroes of Battle prints a different spell under this name (see the status-greater-hob record): that version is a cleric/healer spell rather than this Community domain spell. Both are included."
},
{
  "id": "zone-of-natural-purity",
  "name": "Zone of Natural Purity",
  "ruleset": "eberron",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Druid": 2
  },
  "components": "V, S, M, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius emanation",
  "duration": "2 hours/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You create an area of natural purity that hampers aberrations and other unnatural creatures, as the text describes.",
  "source": "Eberron Campaign Setting, p. 117",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
];
