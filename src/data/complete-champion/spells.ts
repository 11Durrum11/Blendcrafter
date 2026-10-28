import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Complete Champion — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const COMPLETE_CHAMPION_SPELLS: SpellDefinition[] = [
{
  "id": "aligned-aura",
  "name": "Aligned Aura",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Blackguard": 4,
    "Cleric": 4,
    "Paladin": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "20 ft. or 60 ft.",
  "targetOrArea": "20-ft. -radius emanation or 60-ft. -radius burst, cen tered on you",
  "duration": "1 round/level or until discharged",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Divine energy infuses your body with the essence of one non-neutral aspect of your own alignment — chaos, evil, good, or law — surrounding you with a matching aura.",
  "source": "Complete Champion, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "benediction",
  "name": "Benediction",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Paladin": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "10 minutes/level or until discharged",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You grant another creature the luck of the gods: a +2 luck bonus on all saving throws, and the subject can cash in the blessing for an additional benefit before it expires.",
  "source": "Complete Champion, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "bewildering-mischance",
  "name": "Bewildering Mischance",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Adept": 5,
    "Cleric": 5,
    "Shugenja": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft. /2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Extreme bad luck befalls the target: for the duration, the subject must roll each saving throw, attack roll, and skill check twice, keeping the lower of the two rolls.",
  "source": "Complete Champion, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Compulsion"
},
{
  "id": "bewildering-substitution",
  "name": "Bewildering Substitution",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Adept": 2,
    "Cleric": 2,
    "Shugenja": 2
  },
  "components": "V, S, DF -1 to Armor Class",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You cause the subject to believe that one ally and one enemy have traded places, so the closest ally seems to wear the enemy's appearance, voice, clothing, and gear.",
  "source": "Complete Champion, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Phantasm"
},
{
  "id": "bewildering-visions",
  "name": "Bewildering Visions",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Adept": 2,
    "Cleric": 2,
    "Shugenja": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft/2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The world appears to the subject to be tossing and rippling nauseatingly: the subject is sickened, and must make a Fortitude save or be nauseated.",
  "source": "Complete Champion, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Phantasm"
},
{
  "id": "body-ward",
  "name": "Body Ward",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Druid": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 minute/level or until expended",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You grant the subject limited resistance to ability damage to one physical ability score you choose — Strength, Dexterity, or Constitution — absorbing the next 5 points of such damage.",
  "source": "Complete Champion, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "bolster-aura",
  "name": "Bolster Aura",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 3,
    "Paladin": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature or object touched",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes (object)",
  "summary": "You make the aura of the target creature or object stronger, so that other creatures may assume the target is more powerful than it actually is.",
  "source": "Complete Champion, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "conduit-of-life",
  "name": "Conduit of Life",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Paladin": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level or until discharged",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The next time you use a class feature or racial ability to channel positive energy (such as turn undead or lay on hands), you also heal yourself for 2d10+1 points per caster level (maximum 10).",
  "source": "Complete Champion, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Healing"
},
{
  "id": "confound",
  "name": "Confound",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Cleric": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Short (25 ft. + 5 ft/2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You render the target unable to follow your movements: it takes a -2 penalty on attack rolls against you, and you gain a +2 circumstance bonus on attack rolls against it.",
  "source": "Complete Champion, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Compulsion"
},
{
  "id": "dampen-magic",
  "name": "Dampen Magic",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level or until discharged (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You surround the subject with a mystical field that dampens the effects of magic, weakening the enhancement bonuses of magic weapons and similar effects within it.",
  "source": "Complete Champion, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "darts-of-life",
  "name": "Darts of Life",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft/2 levels)",
  "targetOrArea": "One or more creatures per round",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Ten small orbs of light circle your head; as a free action you can launch one dart to strike a friend and heal him of damage.",
  "source": "Complete Champion, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Healing"
},
{
  "id": "deific-bastion",
  "name": "Deific Bastion",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Blackguard": 3,
    "Cleric": 3,
    "Paladin": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Shield or heavy armor touched",
  "duration": "1 round/level",
  "savingThrow": "Fortitude negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "You imbue a shield you hold or heavy armor you wear with a +1 enhancement bonus and an additional special ability that depends on your deity.",
  "source": "Complete Champion, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "divine-presence",
  "name": "Divine Presence",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Blackguard": 2,
    "Cleric": 2,
    "Druid": 2,
    "Paladin": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You channel a spark of the divine, gaining a +5 sacred or profane bonus on Intimidate checks.",
  "source": "Complete Champion, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "divine-retribution",
  "name": "Divine Retribution",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level or until discharged",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "For the duration, any creature that attacks you — with a physical attack, a spell, or by other means — is struck by a retributive effect immediately after you are affected.",
  "source": "Complete Champion, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "door-of-decay",
  "name": "Door of Decay",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "See text",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You use the Negative Energy Plane as a conduit, stepping through a touched undead creature and reappearing elsewhere.",
  "source": "Complete Champion, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Teleportation"
},
{
  "id": "execration",
  "name": "Execration",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Blackguard": 2,
    "Cleric": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "10 minutes/level or until discharged",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "With a touch, you channel your deity's wrath and impose a -2 penalty on all of another creature's saving throws; the subject can end the effect early at a price.",
  "source": "Complete Champion, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "footsteps-of-the-divine",
  "name": "Footsteps of the Divine",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You briefly acquire a new movement mode and speed based on your deity, as given in the spell's table.",
  "source": "Complete Champion, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "forest-child",
  "name": "Forest Child",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 8
  },
  "components": "V, S, M, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft/level)",
  "targetOrArea": "One wooden duplicate",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You draw forth a humanoid wooden duplicate of yourself from the wood of a tree at least one size category larger than you.",
  "source": "Complete Champion, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "forest-eyes",
  "name": "Forest Eyes",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Druid": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 minute",
  "range": "Unlimited",
  "targetOrArea": "Two plants of the same type, one of which must be in physical contact with you",
  "duration": "1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You touch a normal Medium or larger plant or tree and immediately see the surroundings of another plant or tree of the same kind that you designate, regardless of distance.",
  "source": "Complete Champion, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Scrying"
},
{
  "id": "forest-voice",
  "name": "Forest Voice",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 minute",
  "range": "Unlimited",
  "targetOrArea": "Two plants of the same kind, one of which must be in physical contact with you",
  "duration": "1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You touch a plant or tree and can carry on a conversation with anyone within 10 feet of another plant or tree of the same kind that you designate.",
  "source": "Complete Champion, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Language-Dependent"
},
{
  "id": "healing-circle",
  "name": "Healing Circle",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level or until discharged",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You create an aura of healing energy with five charges: once per round, a single allied creature within 30 feet can drain one charge as a standard action to mend its own wounds.",
  "source": "Complete Champion, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Healing"
},
{
  "id": "iconic-manifestation",
  "name": "Iconic Manifestation",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Chaotic",
    "Evil",
    "Good",
    "Lawful"
  ],
  "levels": {
    "Druid": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level, then 1 minute/level (D); see text",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The energies of the spiritual world flow into you: the spell's descriptor and effects match the non-neutral component of your own alignment.",
  "source": "Complete Champion, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "impede",
  "name": "Impede",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft/level)",
  "targetOrArea": "One humanoid creature",
  "duration": "1 round/level (D)",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "Your will clamps down on the subject's mind: the creature can still act, but it cannot step from its current square for the duration.",
  "source": "Complete Champion, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Compulsion"
},
{
  "id": "interfaith-blessing",
  "name": "Interfaith Blessing",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Adept": 2,
    "Cleric": 2,
    "Druid": 2,
    "Shugenja": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "20 ft.",
  "targetOrArea": "20-ft.-radius burst centered on you",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Diverse divine energies fill a burst centered on you, strengthening your allies as the full text describes.",
  "source": "Complete Champion, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Compulsion"
},
{
  "id": "light-of-courage",
  "name": "Light of Courage",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S, DF",
  "castingTime": "1 swift action",
  "range": "Touch",
  "targetOrArea": "Holy symbol touched",
  "duration": "1 round/level, or until discharged",
  "savingThrow": "Will half",
  "spellResistance": "No",
  "summary": "You infuse your holy symbol with divine power: if you make a turning check before the spell expires, each undead creature you target takes extra damage.",
  "source": "Complete Champion, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "light-of-faith",
  "name": "Light of Faith",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 swift action",
  "range": "Touch",
  "targetOrArea": "Holy symbol touched",
  "duration": "1 round/level, or until dis charged",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Your holy symbol glows warmly, granting you a sacred or profane bonus equal to one-half your divine caster level (maximum +5) on your next turning check.",
  "source": "Complete Champion, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "light-of-purity",
  "name": "Light of Purity",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 swift action",
  "range": "Touch",
  "targetOrArea": "Holy symbol touched",
  "duration": "1 round/level, or until discharged",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Your holy symbol gleams with cleansing light: your turning damage increases by 1d6 per four divine caster levels (maximum +5d6) on your next turning attempt.",
  "source": "Complete Champion, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "light-of-wisdom",
  "name": "Light of Wisdom",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 swift action",
  "range": "Touch",
  "targetOrArea": "Holy symbol touched",
  "duration": "1 round/level, or until discharged",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Cool blue radiance pours from your holy symbol: your effective turning level increases by 1 per three caster levels for your next turning attempt.",
  "source": "Complete Champion, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "mark-of-sin",
  "name": "Mark of Sin",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level or permanent; see text",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "Your successful touch attack leaves a mystical mark that brings the subject’s inner sins and crimes to manifest in its appearance and aura after a number of rounds equal to your divine caster level.",
  "source": "Complete Champion, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "master-cavalier",
  "name": "Master Cavalier",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Blackguard": 2,
    "Cleric": 2,
    "Paladin": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your muscles and equilibrium shift to make you at home in the saddle: you gain a +10 bonus on Ride checks, more if you have a special mount or similar ability.",
  "source": "Complete Champion, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "metal-fang",
  "name": "Metal Fang",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 2,
    "Ranger": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "One of the subject’s natural weapons takes on a gleaming metallic sheen, temporarily becoming cold iron or silvered, as you choose.",
  "source": "Complete Champion, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "phantom-charge",
  "name": "Phantom Charge",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Blackguard": 4,
    "Paladin": 4
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal and touch",
  "targetOrArea": "You and your special mount or fiendish companion",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Cast while mounted on your special mount, this spell lets you and your mount charge through other creatures and obstacles as though incorporeal for the charge.",
  "source": "Complete Champion, p. 125",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Teleportation"
},
{
  "id": "profane-item",
  "name": "Profane Item",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 4,
    "Blackguard": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "Object touched",
  "duration": "Permanent until discharged",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes (object)",
  "summary": "You imbue a touched object with latent negative energy that discharges against animals, plants, or good creatures that touch or are touched by it, as the text describes.",
  "source": "Complete Champion, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "ravenous-darkness",
  "name": "Ravenous Darkness",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Darkness"
  ],
  "levels": {
    "Cleric": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Object touched",
  "duration": "1 minute/level (D)",
  "savingThrow": "None or Fortitude negates; see text",
  "spellResistance": "No or yes; see text",
  "summary": "The object touched sheds darkness as a deeper darkness spell, and every living creature within the resulting darkness is assailed by the ravenous night as the text describes.",
  "source": "Complete Champion, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "rejuvenating-light",
  "name": "Rejuvenating Light",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Light"
  ],
  "levels": {
    "Cleric": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Object touched",
  "duration": "1 minute/level (D)",
  "savingThrow": "None or Fortitude negates; see text",
  "spellResistance": "No or yes; see text",
  "summary": "The object touched sheds light as a daylight spell, and every living creature within the area is bathed in rejuvenating warmth as the text describes.",
  "source": "Complete Champion, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Healing"
},
{
  "id": "sacred-item",
  "name": "Sacred Item",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 4,
    "Paladin": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "Object touched",
  "duration": "Permanent until discharged",
  "savingThrow": "Will negates",
  "spellResistance": "Yes (object)",
  "summary": "You imbue a touched object with latent positive energy that discharges against undead or evil outsiders that touch or are touched by it, as the text describes.",
  "source": "Complete Champion, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "spiritual-advisor",
  "name": "Spiritual Advisor",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Cleric": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You consult with a spirit, angel, or divine aspect of your deity that manifests as a barely shimmering presence and answers your questions.",
  "source": "Complete Champion, p. 127",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "spiritual-guardian",
  "name": "Spiritual Guardian",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S, DP",
  "castingTime": "1 standard action",
  "range": "5 ft.",
  "targetOrArea": "A phantasmal knight",
  "duration": "1 minute/level or 1 round/level; see text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "A translucent knight clad in heavy plate, bearing your deity’s holy symbol, appears by your side and guards you.",
  "source": "Complete Champion, p. 127",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "subdue-aura",
  "name": "Subdue Aura",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 3,
    "Paladin": 4
  },
  "components": "V, S",
  "castingTime": "1 stan dard action",
  "range": "Touch",
  "targetOrArea": "Creature or ob ject touched",
  "duration": "10 minutes/ level",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes",
  "summary": "The target’s aura recedes, making it appear less powerful than it really is to creatures that can see such marks.",
  "source": "Complete Champion, p. 128",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "substitute-domain",
  "name": "Substitute Domain",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 2
  },
  "components": "V, S, DF",
  "castingTime": "10 minutes",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 day/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You swap one of your current domains for another that your deity offers, gaining the new domain’s granted power and access to its spells.",
  "source": "Complete Champion, p. 128",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "summon-holy-symbol",
  "name": "Summon Holy Symbol",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 0,
    "Paladin": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "0 ft.",
  "targetOrArea": "Small wooden i holy symbol",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "I",
  "summary": "You conjure a small holy symbol in your hand, which you can use to turn undead, as a divine focus, or for any other normal purpose.",
  "source": "Complete Champion, p. 128",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Summoning"
},
{
  "id": "surge-of-fortune",
  "name": "Surge of Fortune",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level or until discharged",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your deity’s power guides you: a +2 luck bonus on attack and damage rolls, saving throws, skill checks, ability checks, spell penetration checks, and Armor Class, until you discharge it.",
  "source": "Complete Champion, p. 128",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "touch-of-restoration",
  "name": "Touch of Restoration",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Paladin": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "While this spell is active, you can use your lay on hands ability to cure ability damage.",
  "source": "Complete Champion, p. 129",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Healing"
},
{
  "id": "turn-anathema",
  "name": "Turn Anathema",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Blackguard": 2,
    "Cleric": 2,
    "Paladin": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Choose one non-neutral aspect of your own alignment: creatures of that alignment component are especially vulnerable to your turning, as the text describes.",
  "source": "Complete Champion, p. 129",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
  "subschool": "Compulsion"
},
{
  "id": "war-mount",
  "name": "War-mount",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Blackguard": 3,
    "Paladin": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Special mount or fiendish companion touched",
  "duration": "1 minute/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "At your touch, your mount’s natural attacks become magical, gaining a +2 enhancement bonus on attack and damage rolls for the duration.",
  "source": "Complete Champion, p. 129",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "weight-of-sin",
  "name": "Weight of Sin",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Chaotic",
    "Evil",
    "Good",
    "Lawful"
  ],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft. /level)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous, then 1 round/level or perma nent; see text",
  "savingThrow": "Fortitude partial, then Will partial; see text",
  "spellResistance": "Yes",
  "summary": "You pull the target’s sins from its soul and expose them for all to see; the effect depends on how the target’s alignment compares to your own, and has no effect on a target of the same alignment.",
  "source": "Complete Champion, p. 129",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
{
  "id": "wooden-blight",
  "name": "Wooden Blight",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 6
  },
  "components": "V, S, M the spell",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature of weakness",
  "duration": "1 round/level (D)",
  "savingThrow": "Fortitude partial polymorph,",
  "spellResistance": "Yes",
  "summary": "You transform the subject’s body into wood from the inside out; each round the subject must make a new saving throw or progress through the blight’s stages as the text describes.",
  "source": "Complete Champion, p. 130",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf"
},
];
