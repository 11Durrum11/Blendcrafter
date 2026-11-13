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
  "note": "Community domain spell."
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

{
  "id": "armor-enhancement",
  "name": "Armor Enhancement",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 2
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Armor or shield touched",
  "duration": "10 min./level",
  "savingThrow": "None (object)",
  "spellResistance": "No (object)",
  "summary": "As armor enhancement, lesser, but the special ability can be worth up to a +3 bonus equivalent or 35,000 gp, such as ghost touch or acid resistance. Material component: an ointment costing 50 gp.",
  "source": "Eberron Campaign Setting, p. 108",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "The printed entry is abbreviated (\"As lesser armor enhancement...\") and gives no separate stat block; the fields above follow armor enhancement, lesser, apart from the material component noted in the summary."
},
{
  "id": "armor-enhancement-greater",
  "name": "Armor Enhancement, Greater",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 3
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Armor or shield touched",
  "duration": "10 min./level",
  "savingThrow": "None (object)",
  "spellResistance": "No (object)",
  "summary": "As armor enhancement, lesser, but the special ability can be worth up to a +5 bonus equivalent or 100,000 gp, such as etherealness or greater fire resistance. Material component: an ointment costing 100 gp.",
  "source": "Eberron Campaign Setting, p. 109",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "The printed entry is abbreviated (\"As lesser armor enhancement...\") and gives no separate stat block; the fields above follow armor enhancement, lesser, apart from the material component noted in the summary."
},
{
  "id": "armor-enhancement-lesser",
  "name": "Armor Enhancement, Lesser",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Armor or shield touched",
  "duration": "10 min./level",
  "savingThrow": "None (object)",
  "spellResistance": "No (object)",
  "summary": "The armor or shield you touch temporarily gains a special ability commonly found on magic armor and shields, whose market price is equivalent to a +1 bonus or up to 5,000 gp, such as light fortification or shadow; the item does not need an existing enhancement bonus and gains none from this infusion. Material component: an ointment made from rare spices and minerals, costing 10 gp.",
  "source": "Eberron Campaign Setting, p. 109",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "construct-energy-ward",
  "name": "Construct Energy Ward",
  "ruleset": "eberron",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Artificer": 3
  },
  "components": "S",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "10 min./level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "As resist energy (see page 272 of the Player's Handbook), except that the target must be a construct.",
  "source": "Eberron Campaign Setting, p. 109",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "construct-energy-ward-greater",
  "name": "Construct Energy Ward, Greater",
  "ruleset": "eberron",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Artificer": 4
  },
  "components": "S",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "10 min./level or until discharged",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "As protection from energy (see page 266 of the Player's Handbook), except that the target must be a construct.",
  "source": "Eberron Campaign Setting, p. 109",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "disable-construct",
  "name": "Disable Construct",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "Instantaneous",
  "savingThrow": "Will half; see text",
  "spellResistance": "Yes",
  "summary": "You transmute the structure of a construct to deal 10 points of damage per caster level (to a maximum of 150 points at 15th level). If the construct successfully saves, the infusion deals half this amount, but it cannot reduce the target's hit points to less than 1.",
  "source": "Eberron Campaign Setting, p. 111",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "energy-alteration",
  "name": "Energy Alteration",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Magic item touched",
  "duration": "10 min./level",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes (object)",
  "summary": "You alter an item that employs an energy type or grants protection from an energy type, so that it employs or protects against a different energy type instead (for example, changing a +2 flaming battleaxe to a +2 frost battleaxe); the amount of damage dealt, protection offered, and all other effects remain the same. Material component: an alchemical ointment formed from materials representing all five energy types and costing 50 gp.",
  "source": "Eberron Campaign Setting, p. 111",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "enhancement-alteration",
  "name": "Enhancement Alteration",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "S",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Weapon or shield touched",
  "duration": "10 min./level (D)",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes (object)",
  "summary": "You shift some or all of an existing enhancement bonus to a different use: a shield's enhancement bonus can apply to shield bash attacks instead of to Armor Class, or a weapon's enhancement bonus can apply to the wielder's Armor Class while fighting defensively, using the total defense action or Combat Expertise, or wielding it in the off hand with the Two-Weapon Defense feat; the shifted bonus no longer applies to its original purpose, and if the item is attended, the wielder can make a Will saving throw to negate the effect.",
  "source": "Eberron Campaign Setting, p. 111",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "inflict-critical-damage",
  "name": "Inflict Critical Damage",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "As inflict light damage, except inflict critical damage deals 4d8 points of damage + 1 point per caster level (maximum +20).",
  "source": "Eberron Campaign Setting, p. 112",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "The printed entry is abbreviated (\"As inflict light damage...\") and gives no separate stat block; the fields above follow inflict light damage."
},
{
  "id": "inflict-light-damage",
  "name": "Inflict Light Damage",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "When laying your hand upon a construct, you transmute its structure to deal 1d8 points of damage +1 point per caster level (maximum +5).",
  "source": "Eberron Campaign Setting, p. 112",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "inflict-moderate-damage",
  "name": "Inflict Moderate Damage",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "As inflict light damage, except inflict moderate damage deals 2d8 points of damage + 1 point per caster level (maximum +10).",
  "source": "Eberron Campaign Setting, p. 113",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "The printed entry is abbreviated (\"As inflict light damage...\") and gives no separate stat block; the fields above follow inflict light damage."
},
{
  "id": "inflict-serious-damage",
  "name": "Inflict Serious Damage",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "As inflict light damage, except inflict serious damage deals 3d8 points of damage + 1 point per caster level (maximum +15).",
  "source": "Eberron Campaign Setting, p. 113",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "The printed entry is abbreviated (\"As inflict light damage...\") and gives no separate stat block; the fields above follow inflict light damage."
},
{
  "id": "iron-construct",
  "name": "Iron Construct",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 4
  },
  "components": "S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "1 min./level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You transform an existing construct into a powerhouse of hardened iron, similar to the effect of the iron body spell: the construct gains damage reduction 15/adamantine, takes half damage from acid and fire attacks, and becomes vulnerable to all special attacks that affect iron golems; it also gains a +4 enhancement bonus to Strength but takes a -4 penalty to Dexterity (to a minimum Dexterity of 1), and its weight increases by a factor of five. Material component: a small piece of iron that was once part of an iron golem, a hero's armor, or a war machine.",
  "source": "Eberron Campaign Setting, p. 113",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "item-alteration",
  "name": "Item Alteration",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 4
  },
  "components": "S",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Magic item touched",
  "duration": "10 min./level",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes (object)",
  "summary": "You alter an item that provides a certain type of bonus so that it provides a different type of bonus to the same value or roll (for example, changing a ring of protection so it provides a natural armor bonus instead of a deflection bonus); you cannot change an item to provide a sacred or profane bonus, change an item that already provides one, or make an item provide a dodge bonus to Armor Class.",
  "source": "Eberron Campaign Setting, p. 113",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "metamagic-item",
  "name": "Metamagic Item",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 3
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Spell trigger magic item touched",
  "duration": "1 round/level",
  "savingThrow": "Will negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "You temporarily apply a metamagic feat you know to a single spell contained within a spell trigger item; for the duration of this infusion, anyone who casts that spell from the item gains the benefit of that metamagic feat.",
  "source": "Eberron Campaign Setting, p. 113",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "power-surge",
  "name": "Power Surge",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 3
  },
  "components": "S, XP",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Wand or staff touched",
  "duration": "1 min./level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "By touching a wand or staff that has at least 1 charge, you imbue it with 1 temporary charge per five caster levels; these charges are spent before the item's own charges when the item is used, and any remaining temporary charges are lost when the infusion expires. XP cost: 5 XP times the level of the highest-level spell stored in the item.",
  "source": "Eberron Campaign Setting, p. 114",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "resistance-item",
  "name": "Resistance Item",
  "ruleset": "eberron",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Item touched",
  "duration": "10 min./level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "A nonmagical item imbued with this infusion grants a +1 resistance bonus on saving throws to a character who wears or wields it; this bonus increases by 1 for every four caster levels (to +2 at 4th level, +3 at 8th level, +4 at 12th level, and so forth). Material component: oil mixed with various spices and minerals.",
  "source": "Eberron Campaign Setting, p. 114",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "skill-enhancement",
  "name": "Skill Enhancement",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Item touched",
  "duration": "10 min./level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "An item imbued with this infusion grants a +2 circumstance bonus on a specific skill check (determined by the caster) to a character who wears or wields it; this bonus increases by 1 for every two caster levels (to +3 at 2nd level, +4 at 4th level, +5 at 6th level, and so forth). Material component: a length of fine, black thread.",
  "source": "Eberron Campaign Setting, p. 115",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "spell-storing-item",
  "name": "Spell Storing Item",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "S, XP (see text)",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Item touched",
  "duration": "1 hour/level or until discharged",
  "savingThrow": "None (object)",
  "spellResistance": "No (object)",
  "summary": "You place a spell effect into an item to draw forth later at your command, making it in effect a wand with a single charge that only you can use: you can imbue any spell of 4th level or lower whose level is no greater than one-half your artificer level, using your artificer level as the spell's caster level, by making a Use Magic Device check (DC 20 + spell level x 3) to emulate and store it. A single item can carry only one spell at a time. XP cost: your caster level times the spell level.",
  "source": "Eberron Campaign Setting, p. 115",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "stone-construct",
  "name": "Stone Construct",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 3
  },
  "components": "S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "10 min./level or until discharged",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The construct you touch gains damage reduction 10/adamantine; once the spell has prevented a total of 10 points of damage per artificer level you possess (maximum 150 points), it is discharged. Material component: granite and 250 gp worth of diamond dust sprinkled on the construct.",
  "source": "Eberron Campaign Setting, p. 116",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "suppress-requirement",
  "name": "Suppress Requirement",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 3
  },
  "components": "S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Magic item touched",
  "duration": "10 min./level",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes (object)",
  "summary": "You alter a magic item that requires a certain class feature, race, ability score, or alignment to function to its fullest potential, so that it no longer carries that requirement; you must make a Use Magic Device check sufficient to emulate the requirement as if you were attempting to use the item yourself, and if you succeed, the requirement is suppressed for the duration of this infusion. Material component: powdered gemstones worth a total of 500 gp.",
  "source": "Eberron Campaign Setting, p. 116",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "total-repair",
  "name": "Total Repair",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "Instantaneous",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You transmute the structure of a construct to wipe away damage and afflictions: the infusion immediately ends any and all of the following adverse conditions affecting the target (ability damage, blinded, confused, dazed, dazzled, deafened, feebleminded, and insanity) and also repairs 10 points of damage per level of the caster, to a maximum of 150 points at 15th level.",
  "source": "Eberron Campaign Setting, p. 116",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "toughen-construct",
  "name": "Toughen Construct",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "10 min./level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "You thicken the unliving matter that forms a construct's skin, granting a +2 enhancement bonus to the creature's existing natural armor bonus; this bonus increases by 1 for every three caster levels above 3rd, to a maximum of +5 at caster level 12th, and it stacks with the target's natural armor bonus but not with other enhancement bonuses to natural armor.",
  "source": "Eberron Campaign Setting, p. 116",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
},
{
  "id": "weapon-augmentation",
  "name": "Weapon Augmentation",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 4
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "One weapon or fifty projectiles, all of which must be in contact with each other at the time of casting",
  "duration": "10 min./level",
  "savingThrow": "None (object)",
  "spellResistance": "No (object)",
  "summary": "As lesser weapon augmentation, but you can choose any special ability whose market price is equivalent to a bonus of up to +3 or up to 70,000 gp, such as speed. Material component: an ointment costing 100 gp.",
  "source": "Eberron Campaign Setting, p. 117",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "The printed entry is abbreviated (\"As lesser weapon augmentation...\") and gives no separate stat block; the fields above follow weapon augmentation, lesser, apart from the material component noted in the summary."
},
{
  "id": "weapon-augmentation-greater",
  "name": "Weapon Augmentation, Greater",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 6
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "One weapon or fifty projectiles, all of which must be in contact with each other at the time of casting",
  "duration": "10 min./level",
  "savingThrow": "None (object)",
  "spellResistance": "No (object)",
  "summary": "As lesser weapon augmentation, but you can choose any special ability whose market price is equivalent to a bonus of up to +5 or up to 200,000 gp, such as vorpal. Material component: an ointment costing 200 gp.",
  "source": "Eberron Campaign Setting, p. 117",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "The printed entry is abbreviated (\"As lesser weapon augmentation...\") and gives no separate stat block; the fields above follow weapon augmentation, lesser, apart from the material component noted in the summary."
},
{
  "id": "weapon-augmentation-lesser",
  "name": "Weapon Augmentation, Lesser",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 2
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "One weapon or fifty projectiles, all of which must be in contact with each other at the time of casting",
  "duration": "10 min./level",
  "savingThrow": "None (object)",
  "spellResistance": "No (object)",
  "summary": "As personal weapon augmentation, but any character can wield the weapon you augment. Alternatively, you can affect as many as fifty arrows, bolts, or bullets of the same kind that are together (in the same quiver or other container); projectiles, but not thrown weapons, lose their transmutation when used, and shuriken are treated as projectiles rather than thrown weapons for this infusion. Material component: an ointment made from rare spices and minerals, costing 20 gp.",
  "source": "Eberron Campaign Setting, p. 117",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
  "note": "The printed entry gives only the Duration and Target lines; the remaining fields above follow weapon augmentation, personal, which the entry incorporates by reference."
},
{
  "id": "weapon-augmentation-personal",
  "name": "Weapon Augmentation, Personal",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Weapon touched",
  "duration": "10 min./level",
  "savingThrow": "None (object)",
  "spellResistance": "No (object)",
  "summary": "The weapon you touch temporarily gains a special ability commonly found on magic weapons: you can choose any special ability whose market price is equivalent to a +1 bonus or up to 10,000 gp, such as flaming or keen. The weapon does not need to have an existing enhancement bonus, nor does it gain one from this infusion, and the weapon gains the benefit of the infusion only if you wield, throw, or fire it. Material component: a patch of rabbit's fur.",
  "source": "Eberron Campaign Setting, p. 117",
  "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf"
}
];
