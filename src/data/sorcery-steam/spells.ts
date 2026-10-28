import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Sorcery & Steam — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const SORCERY_AND_STEAM_SPELLS: SpellDefinition[] = [
{
  "id": "aspects-of-the-iron-knight",
  "name": "Aspects of the Iron Knight",
  "ruleset": "sorcery_steam",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6,
    "Technology": 6
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You are infused with aspects of the fearsome iron golem: for the duration you gain damage reduction 50/+3 and heal 1 hit point for every point of electricity damage that would be dealt to you, as the text describes.",
  "source": "Sorcery & Steam, p. 113",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "bane-of-chaos",
  "name": "Bane of Chaos",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "No (see text)",
  "summary": "As bane of evil, except that the damage inflicted against the attacking creature applies to chaotic creatures.",
  "source": "Sorcery & Steam, p. 113",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "note": "Abbreviated entry in Sorcery & Steam: functions as Bane of Evil except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "bane-of-evil",
  "name": "Bane of Evil",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "No (see text)",
  "summary": "This spell deals 1d6 points of damage, +1 point per caster level, to any evil creature that attempts a melee attack against the warded creature.",
  "source": "Sorcery & Steam, p. 113",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "bane-of-good",
  "name": "Bane of Good",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "No (see text)",
  "summary": "As bane of evil, except that the damage inflicted against the attacking creature applies to good creatures.",
  "source": "Sorcery & Steam, p. 113",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "note": "Abbreviated entry in Sorcery & Steam: functions as Bane of Evil except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "bane-of-law",
  "name": "Bane of Law",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "No (see text)",
  "summary": "As bane of evil, except that the damage inflicted against the attacking creature applies to lawful creatures.",
  "source": "Sorcery & Steam, p. 113",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "note": "Abbreviated entry in Sorcery & Steam: functions as Bane of Evil except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "bladebane",
  "name": "Bladebane",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Your body becomes magically resistant to bladed weapons: you suffer only half damage from nonmagical bladed weapons for the duration.",
  "source": "Sorcery & Steam, p. 114",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "cart",
  "name": "Cart",
  "ruleset": "sorcery_steam",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One carriage (for 4 Medium-size humanoids)",
  "duration": "2 hours/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You summon a small cart and light horse to serve as transportation for up to four Medium-size or Small humanoid creatures.",
  "source": "Sorcery & Steam, p. 114",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "subschool": "Summoning"
},
{
  "id": "charged-object",
  "name": "Charged Object",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One object touched weighing no more than 5 lb.",
  "duration": "Permanent until discharged (D)",
  "savingThrow": "See text",
  "spellResistance": "Yes",
  "summary": "You charge a small object with destructive energy: the charge detonates when the charged object is touched, dealing damage as the text describes.",
  "source": "Sorcery & Steam, p. 114",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "coins-of-communication",
  "name": "Coins of Communication",
  "ruleset": "sorcery_steam",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Cleric": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "See below",
  "targetOrArea": "Two gold coins",
  "duration": "10 minutes/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You imbue two gold coins with magical energy, establishing a telepathic link between two creatures that each carry one of the coins.",
  "source": "Sorcery & Steam, p. 115",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "note": "The book prints no Target line for this spell; the targets are the two gold coins described in the text."
},
{
  "id": "cone-of-steam",
  "name": "Cone of Steam",
  "ruleset": "sorcery_steam",
  "school": "Evocation",
  "descriptors": [
    "Steam"
  ],
  "levels": {
    "Sorcerer/Wizard": 5,
    "Steam": 6
  },
  "components": "V, S, M / DF",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Cone",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "You create a cone of superheated steam that burns opponents, dealing 1d6 points of damage per caster level (maximum 15d6).",
  "source": "Sorcery & Steam, p. 115",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "counterattack",
  "name": "Counterattack",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 4,
    "Cleric": 4,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M / DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "For the duration, any time an opponent makes a melee attack against you, you may attempt one melee counterattack at your full base attack bonus that does not count as an attack of opportunity.",
  "source": "Sorcery & Steam, p. 115",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "curse-ward",
  "name": "Curse Ward",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 4,
    "Cleric": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M / DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 day/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You infuse yourself with positive energy and increase your defenses against curses, gaining a +6 resistance bonus on Will saves made to resist curse effects, as the text describes.",
  "source": "Sorcery & Steam, p. 115",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "dagger-of-nightmares",
  "name": "Dagger of Nightmares",
  "ruleset": "sorcery_steam",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, F",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "One masterwork dagger",
  "duration": "Instantaneous (see below)",
  "savingThrow": "Will disbelief (if caster strikes his target) and Fortitude negates",
  "spellResistance": "Yes",
  "summary": "You imbue a masterwork dagger with energy that visits horrid visions upon the victims of its strikes, as the text describes.",
  "source": "Sorcery & Steam, p. 116",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "subschool": "Phantasm"
},
{
  "id": "divine-knowledge",
  "name": "Divine Knowledge",
  "ruleset": "sorcery_steam",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "By calling forth the knowledge of your faith, you gain a +20 insight bonus on one Knowledge (religion) check.",
  "source": "Sorcery & Steam, p. 116",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "eyes-of-the-investigator",
  "name": "Eyes of the Investigator",
  "ruleset": "sorcery_steam",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain the intuitive skills and attention to detail of an experienced investigator: a +4 insight bonus on all Search checks for the duration.",
  "source": "Sorcery & Steam, p. 116",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "hand-of-the-marksman",
  "name": "Hand of the Marksman",
  "ruleset": "sorcery_steam",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Ranger": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, F",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "See text",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain a limited precognition: your next ranged attack roll made with a firearm (if made before the end of the next round) automatically hits, as the text describes.",
  "source": "Sorcery & Steam, p. 116",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "harvester-of-death",
  "name": "Harvester of Death",
  "ruleset": "sorcery_steam",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M / DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round or until discharged",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Fueled by the necromantic powers of death, you may make a coup de grace attack against a helpless defender as part of the casting, as the text describes.",
  "source": "Sorcery & Steam, p. 116",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "hood-of-shadows",
  "name": "Hood of Shadows",
  "ruleset": "sorcery_steam",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "By conjuring an illusion of shadows, you gain a +10 circumstance bonus on all Hide checks while within a dark or heavily shadowed area.",
  "source": "Sorcery & Steam, p. 117",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "subschool": "Shadow"
},
{
  "id": "iron-shape",
  "name": "Iron Shape",
  "ruleset": "sorcery_steam",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5,
    "Technology": 5
  },
  "components": "V, S, M / DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Iron or iron object touched, up to 10 cu. ft. + 1 cu. ft. /level",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You form an existing piece of iron into any shape that suits your purpose — an iron weapon, a set of iron stairs, or reshaping an iron door, for example.",
  "source": "Sorcery & Steam, p. 117",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "jack-of-trades",
  "name": "Jack of Trades",
  "ruleset": "sorcery_steam",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "See text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You gain great insight into your next attempt to use any skill in which you have at least one rank: a +4 insight bonus on your next skill check.",
  "source": "Sorcery & Steam, p. 117",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "legendary-performance",
  "name": "Legendary Performance",
  "ruleset": "sorcery_steam",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "See text",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain a +20 insight bonus on your next Perform check; the spell remains in effect for 1 day per level or until discharged.",
  "source": "Sorcery & Steam, p. 117",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "lightning-missile",
  "name": "Lightning Missile",
  "ruleset": "sorcery_steam",
  "school": "Evocation",
  "descriptors": [
    "Electricity"
  ],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature or object",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A missile of pure electrical energy crackles forth from your outstretched palm and unerringly strikes its target, dealing 1d6+1 points of electrical damage.",
  "source": "Sorcery & Steam, p. 117",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "lightning-sphere",
  "name": "Lightning Sphere",
  "ruleset": "sorcery_steam",
  "school": "Evocation",
  "descriptors": [
    "Electricity"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One lightning sphere",
  "duration": "1 round/level",
  "savingThrow": "Reflex negates",
  "spellResistance": "Yes",
  "summary": "A crackling globe of electrical energy rolls in whichever direction you point and deals damage to opponents it strikes; the sphere moves 30 feet per round.",
  "source": "Sorcery & Steam, p. 118",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "note": "The book prints no Target or Effect line for this spell; the target shown is the rolling sphere described in the text."
},
{
  "id": "net",
  "name": "Net",
  "ruleset": "sorcery_steam",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./level)",
  "targetOrArea": "One medium-size or smaller creature",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You create a layered mass of sticky strands that entangles one opponent on a successful ranged touch attack.",
  "source": "Sorcery & Steam, p. 118",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "subschool": "Creation"
},
{
  "id": "poisoned-grasp",
  "name": "Poisoned Grasp",
  "ruleset": "sorcery_steam",
  "school": "Transmutation",
  "descriptors": [
    "Poison"
  ],
  "levels": {
    "Cleric": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Until discharged",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "This spell imbues your hand with a paralytic poison that you can deliver with a successful melee touch attack.",
  "source": "Sorcery & Steam, p. 118",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "power-song-laughter",
  "name": "Power Song: Laughter",
  "ruleset": "sorcery_steam",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 4
  },
  "components": "V",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "See text",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "When you sing this magical song, you cause a single creature with 100 or fewer hit points to succumb to uncontrollable laughter.",
  "source": "Sorcery & Steam, p. 118",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "power-song-sleep",
  "name": "Power Song: Sleep",
  "ruleset": "sorcery_steam",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 5
  },
  "components": "V",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "See text",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "This powerful song causes a creature with 150 or fewer hit points to fall into a deep slumber, rendering it unconscious and helpless.",
  "source": "Sorcery & Steam, p. 119",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "question-of-truth",
  "name": "Question of Truth",
  "ruleset": "sorcery_steam",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Cleric": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "See text",
  "savingThrow": "Will negates",
  "spellResistance": "No",
  "summary": "Cast before asking a creature a single question, this spell lets you detect any intentional falsehoods or lies given as a response.",
  "source": "Sorcery & Steam, p. 119",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "reprieve",
  "name": "Reprieve",
  "ruleset": "sorcery_steam",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 day/level or until discharged",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You prepare a cure light wounds spell that will automatically take effect if you are reduced to -1 hit points or lower and begin to die.",
  "source": "Sorcery & Steam, p. 119",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "singular-deception",
  "name": "Singular Deception",
  "ruleset": "sorcery_steam",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "None or Will negates",
  "spellResistance": "No",
  "summary": "You and your gear vanish from the sight (even darkvision) of one target chosen at the time of casting.",
  "source": "Sorcery & Steam, p. 119",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "subschool": "Glamer"
},
{
  "id": "source-of-knowledge",
  "name": "Source of Knowledge",
  "ruleset": "sorcery_steam",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2,
    "Technology": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain clearer insight into an individual area of study: a +10 insight bonus on one Knowledge check, with the area determined before casting.",
  "source": "Sorcery & Steam, p. 120",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "steam-fog",
  "name": "Steam Fog",
  "ruleset": "sorcery_steam",
  "school": "Conjuration",
  "descriptors": [
    "Steam"
  ],
  "levels": {
    "Sorcerer/Wizard": 6,
    "Steam": 7
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Fog spreads in a 30-ft. radius, 20 ft. high",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You create a thick mist of steam vapors similar to a solid fog spell, which also scalds creatures within it, as the text describes.",
  "source": "Sorcery & Steam, p. 120",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "subschool": "Creation"
},
{
  "id": "steam-form",
  "name": "Steam Form",
  "ruleset": "sorcery_steam",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Steam": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "S, M /DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Willing corporeal creature touched",
  "duration": "2 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "The subject and all her possessions become insubstantial, misty, and translucent, transformed into steam with damage reduction 20/+2.",
  "source": "Sorcery & Steam, p. 120",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "stored-prayer",
  "name": "Stored Prayer",
  "ruleset": "sorcery_steam",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Cleric": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 day/level or until discharged.",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You cast a 1st-level spell that will not take effect until you call for it at a later time.",
  "source": "Sorcery & Steam, p. 121",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "stunning-hand",
  "name": "Stunning Hand",
  "ruleset": "sorcery_steam",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M / DF",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round /2 levels",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You temporarily gain the ability to stun creatures with your unarmed attacks, once per round for the duration.",
  "source": "Sorcery & Steam, p. 121",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "summon-firearm",
  "name": "Summon Firearm",
  "ruleset": "sorcery_steam",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4,
    "Technology": 4
  },
  "components": "V, S, M / DF",
  "castingTime": "1 action",
  "range": "See text",
  "targetOrArea": "One personal firearm weighing up to 10 lb.",
  "duration": "Permanent until discharged",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You call forth one small firearm directly to your hand; the spell magically links a firearm you possess to a pearl worth no less than 500 gp.",
  "source": "Sorcery & Steam, p. 121",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "subschool": "Summoning"
},
{
  "id": "summon-golem",
  "name": "Summon Golem",
  "ruleset": "sorcery_steam",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6,
    "Technology": 7
  },
  "components": "V, S, M/DF",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./ 2 levels)",
  "targetOrArea": "One summoned golem of a particular type",
  "duration": "1 round/level (D)",
  "savingThrow": "None (see text)",
  "spellResistance": "No",
  "summary": "This spell summons a golem to aid you in combat; it appears where you designate and acts immediately on your next turn.",
  "source": "Sorcery & Steam, p. 121",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
  "subschool": "Summoning"
},
{
  "id": "tale-of-bravery",
  "name": "Tale of Bravery",
  "ruleset": "sorcery_steam",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "See text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You infuse yourself with confidence and skill, allowing you to use your bardic abilities with extra potency, as the text describes.",
  "source": "Sorcery & Steam, p. 122",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "thunderball",
  "name": "Thunderball",
  "ruleset": "sorcery_steam",
  "school": "Evocation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Bard": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20 ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half, Fortitude negates",
  "spellResistance": "Yes",
  "summary": "A shimmering bead streaks forth and detonates with a roar of sound, injuring all creatures within the area.",
  "source": "Sorcery & Steam, p. 122",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "wall-of-lightning",
  "name": "Wall of Lightning",
  "ruleset": "sorcery_steam",
  "school": "Evocation",
  "descriptors": [
    "Electricity"
  ],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Opaque sheet of electricity up to 20 ft. long/caster level or a ring of electricity with a radius of up to 5 ft./two caster levels; either form 20 ft. high",
  "duration": "Concentration +1 round/level",
  "savingThrow": "See text",
  "spellResistance": "Yes",
  "summary": "A blazing curtain of crackling electrical energy blasts into existence; one side of the wall (selected by you) sparks forth bolts of electricity.",
  "source": "Sorcery & Steam, p. 122",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "ward-of-life",
  "name": "Ward of Life",
  "ruleset": "sorcery_steam",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You infuse yourself with positive energy and increase your defenses against death and death effects, gaining a +6 resistance bonus on saving throws against them, as the text describes.",
  "source": "Sorcery & Steam, p. 123",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
{
  "id": "wounding-touch",
  "name": "Wounding Touch",
  "ruleset": "sorcery_steam",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A sheath of energy crackles around your hand, creating a pair of spectral claws: with a successful unarmed melee attack you inflict 1d6 points of damage per level, as the text describes.",
  "source": "Sorcery & Steam, p. 123",
  "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf"
},
];
