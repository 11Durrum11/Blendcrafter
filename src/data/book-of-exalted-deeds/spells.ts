import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Book of Exalted Deeds — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const BOOK_OF_EXALTED_DEEDS_SPELLS: SpellDefinition[] = [
{
  "id": "affliction",
  "name": "Affliction",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 3,
    "Druid": 3,
    "Sorcerer/Wizard": 4,
    "Wrath": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Evil creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The target contracts a chosen affliction that strikes immediately and harms only evil creatures; evil outsiders, undead, elementals, and clerics of evil deities take extra damage.",
  "source": "Book of Exalted Deeds, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "amber-sarcophagus",
  "name": "Amber Sarcophagus",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 day/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A hurled sphere of amber (ranged touch attack) encases the target in a hardening translucent shell, holding it in stasis — unharmed but unable to act.",
  "source": "Book of Exalted Deeds, p. 90",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "armageddon",
  "name": "Armageddon",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 9
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "2 or more summoned creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Opens a portal to a good-aligned Outer Plane; waves of celestials — avorals, then a ghaele eladrin, then an astral deva — arrive over several rounds and serve you for the duration.",
  "source": "Book of Exalted Deeds, p. 90",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Summoning"
},
{
  "id": "aspect-of-the-deity",
  "name": "Aspect of the Deity",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 6,
    "Exalted Arcanist": 6,
    "Herald": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "As lesser aspect of the deity, but you take on all the qualities of a celestial creature: a shining metallic appearance, smite evil once per day, darkvision 60 feet, and resistance 20 to acid, cold, and electricity.",
  "source": "Book of Exalted Deeds, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "note": "Abbreviated entry in Book of Exalted Deeds: functions as Aspect of the Deity, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "aspect-of-the-deity-greater",
  "name": "Aspect of the Deity, Greater",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 9,
    "Exalted Arcanist": 9,
    "Herald": 9
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "As lesser aspect of the deity, except you take on the qualities of a half-celestial (but not its spell-like abilities), becoming an outsider for the duration, with wings and increased ability scores.",
  "source": "Book of Exalted Deeds, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "note": "Abbreviated entry in Book of Exalted Deeds: functions as Aspect of the Deity, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "aspect-of-the-deity-lesser",
  "name": "Aspect of the Deity, Lesser",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 4,
    "Exalted Arcanist": 4,
    "Paladin": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your form shifts closer to your deity's nature: you gain a +4 enhancement bonus to Charisma and resistance 10 to acid, cold, and electricity.",
  "source": "Book of Exalted Deeds, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "axiomatic-creature",
  "name": "Axiomatic Creature",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 8,
    "Sorcerer/Wizard": 8
  },
  "components": "V, S, M, XP, Archon",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "One corporeal creature of lawful or neutral alignment that is native to the Material Plane",
  "duration": "Permanent",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Transforms the target into an axiomatic creature — a perfected, law-aligned version of itself; animals become magical beasts, and a creature with Intelligence 2 or less is raised to Intelligence 3.",
  "source": "Book of Exalted Deeds, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "ayaillas-radiant-burst",
  "name": "Ayailla's Radiant Burst",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 2
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates (blindness) and Reflex half (shards)",
  "spellResistance": "Yes",
  "summary": "Shards of heavenly light from your fingertips blind evil creatures in the area for 1 round (Fortitude negates) and deal 1d6 points of damage per two caster levels (maximum 5d6; Reflex half) to evil creatures.",
  "source": "Book of Exalted Deeds, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "bastion-of-good",
  "name": "Bastion of Good",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 7,
    "Cleric": 7
  },
  "components": "V, S, Abstinence",
  "castingTime": "1 standard action",
  "range": "20 ft.",
  "targetOrArea": "20-ft.-radius spherical emanation centered on you",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "A nimbus of light surrounds you, excluding spell effects of up to 3rd level as a minor globe of invulnerability and warding those within as a double-strength magic circle against evil (+4 deflection bonus to AC and +4 resistance bonus on saves).",
  "source": "Book of Exalted Deeds, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "blessed-sight",
  "name": "Blessed Sight",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 3,
    "Champion of Gwynharwyf": 3,
    "Cleric": 3,
    "Paladin": 3,
    "Celestial": 3,
    "Slayer of Domiel": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your eyes glow with white light, letting you perceive the location and strength of all evil auras within 120 feet — like detect evil, but with no concentration required and quicker discernment.",
  "source": "Book of Exalted Deeds, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "blinding-beauty",
  "name": "Blinding Beauty",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Beloved of Valarian": 4,
    "Bard": 4,
    "Druid": 4,
    "Fey": 4,
    "Ranger": 4
  },
  "components": "V, S, Abstinence",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain the physical beauty of a nymph: humanoids within 60 feet who look directly at you must succeed on a Fortitude save or be blinded permanently, and you can suppress or resume the effect as a free action.",
  "source": "Book of Exalted Deeds, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "blinding-glory",
  "name": "Blinding Glory",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Glory": 9,
    "Sorcerer/Wizard": 9
  },
  "components": "V, S, M/DF",
  "castingTime": "1 hour",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "100-ft./level radius spread, centered on you",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Brilliant radiance spreads out from you like a daylight spell that no magical darkness can counter or disperse, and evil creatures within the light are blinded; where it meets magical darkness, both effects are temporarily negated.",
  "source": "Book of Exalted Deeds, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Creation"
},
{
  "id": "blood-of-the-martyr",
  "name": "Blood of the Martyr",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 4,
    "Champion of Gwynharwyf": 4,
    "Cleric": 4,
    "Paladin": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Willing creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You transfer your own hit points (at least 20) directly to a target creature, healing it as a cure spell would; the transferred points are damage to you, and the target cannot gain more hit points than its maximum.",
  "source": "Book of Exalted Deeds, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Healing"
},
{
  "id": "brilliant-emanation",
  "name": "Brilliant Emanation",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 3
  },
  "components": "Sacrifice",
  "castingTime": "1 standard action",
  "range": "100 ft. + 10 ft./level",
  "targetOrArea": "100-ft.-radius emanation + 10-ft. radius per level",
  "duration": "1d4 rounds",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "A divine glow radiates from reflective objects you wear or carry, blinding evil creatures in the area unless they succeed on a Fortitude save; nonevil creatures are unaffected.",
  "source": "Book of Exalted Deeds, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "call-faithful-servants",
  "name": "Call Faithful Servants",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Celestial": 6,
    "Cleric": 6,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, Abstinence,",
  "castingTime": "1 minute",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "1d4 lantern archons, coure eladrins, or musteval guardinals",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Calls 1d4 lantern archons, coure eladrins, or musteval guardinals (matching your alignment) to serve you for up to one year as guards, soldiers, or spies; you can control no more than 2 HD of celestials per caster level this way.",
  "source": "Book of Exalted Deeds, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Calling"
},
{
  "id": "call-mount",
  "name": "Call Mount",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Paladin": 2
  },
  "components": "V",
  "castingTime": "1 round",
  "range": "10 ft.",
  "targetOrArea": "Your special mount",
  "duration": "1 hour/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Summons your special mount from the celestial planes, exactly as your paladin class ability, except that the duration is shorter and there is no limit on how often you can call it in a day.",
  "source": "Book of Exalted Deeds, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Calling"
},
{
  "id": "celestial-aspect",
  "name": "Celestial Aspect",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 3
  },
  "components": "V, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One creature touched",
  "duration": "1 minute/level",
  "savingThrow": "Fortitude negates (harmless); see text",
  "spellResistance": "Yes (harmless)",
  "summary": "The target gains one celestial trait chosen from a list (such as a sword archon's armblade of flame or holy power) and can switch to a different trait as a free action, at most once per round.",
  "source": "Book of Exalted Deeds, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "celestial-blood",
  "name": "Celestial Blood",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 6,
    "Cleric": 6,
    "Pleasure": 6
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Nonevil creature touched",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject gains some of a celestial's protection: resistance 10 to acid, cold, and electricity, a +4 bonus on saving throws against poison, and damage reduction 10/evil.",
  "source": "Book of Exalted Deeds, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "celestial-brilliance",
  "name": "Celestial Brilliance",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good",
    "Light"
  ],
  "levels": {
    "Cleric": 4,
    "Glory": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Object touched",
  "duration": "1 day/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "The object touched sheds light channeled from the celestial realms — bright light to 60 feet and dim light for 60 feet beyond; undead within the bright light take 1d6 points of damage each round, and light-sensitive creatures suffer doubled penalties.",
  "source": "Book of Exalted Deeds, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "chaavs-laugh",
  "name": "Chaav's Laugh",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Cleric": 5,
    "Joy": 5
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "40 ft.",
  "targetOrArea": "40-ft.-radius spread centered on you",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (see text)",
  "spellResistance": "Yes",
  "summary": "Your joyous, boisterous laugh strengthens good creatures in the area (+2 morale bonus on attack rolls and saves against fear, plus 1d8 + caster level temporary hit points) and saps the resolve of evil creatures in the area.",
  "source": "Book of Exalted Deeds, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "channel-celestial",
  "name": "Channel Celestial",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 7
  },
  "components": "V, DF, Abstinence, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "You and 1 willing celestial",
  "duration": "10 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You invite a willing celestial of up to 12 HD that is present to occupy your body and channel its power through you, as described by the celestial channeling rules in Chapter 2.",
  "source": "Book of Exalted Deeds, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "channel-greater-celestial",
  "name": "Channel Greater Celestial",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 9
  },
  "components": "V, DF, Abstinence, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "You and 1 willing celestial",
  "duration": "10 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As channel celestial, but the celestial you channel may have up to 24 HD; you must have abstained from intoxicants and stimulants for a week and be free of other spells, ability damage, ability drain, and energy drain when you cast it.",
  "source": "Book of Exalted Deeds, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "note": "Abbreviated entry in Book of Exalted Deeds: functions as Channel Celestial except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "constricting-chains",
  "name": "Constricting Chains",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 7
  },
  "components": "V, S, F, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Writhing chains of scintillating light bind the target: it is entangled (-2 penalty on attack rolls, -4 effective Dexterity), anchored to the nearest immobile object so it cannot move, and must succeed on Concentration checks to cast spells.",
  "source": "Book of Exalted Deeds, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "convert-wand",
  "name": "Convert Wand",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Wand touched",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Temporarily transforms a magic wand of any type into a healing wand with the same number of charges (the wand's spell level sets which cure spell it delivers); when the spell ends the wand's original effect is restored, and charges spent remain spent.",
  "source": "Book of Exalted Deeds, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "crown-of-brilliance",
  "name": "Crown of Brilliance",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good",
    "Light"
  ],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S, M, Archon",
  "castingTime": "1 round",
  "range": "20 ft.",
  "targetOrArea": "20-ft.-radius emanation, centered on you",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "A blazing crown of golden light surrounds your head: creatures that engage you in melee must succeed on a Fortitude save or be blinded for 1d4 rounds, and remain dazzled while in melee with you even if they save.",
  "source": "Book of Exalted Deeds, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "crown-of-flame",
  "name": "Crown of Flame",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 5,
    "Exalted Arcanist": 5,
    "Glory": 5
  },
  "components": "V, Archon",
  "castingTime": "1 standard action",
  "range": "10 ft.",
  "targetOrArea": "10-ft.-radius emanation, centered on you",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You become a blazing beacon of the powers of good, searing all evil outsiders, evil undead, and evil fey within 10 feet of you for 2d6 points of damage per round.",
  "source": "Book of Exalted Deeds, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "cry-of-ysgard",
  "name": "Cry of Ysgard",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 7
  },
  "components": "V, Sacrifice",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Calls 2d4 bariaur defenders of",
  "duration": "Instantaneous; see text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Calls 2d4 bariaur defenders from the plains of Ysgard to your location; they serve you for up to a year, can be dismissed at any time, and as intelligent creatures can be assigned varied tasks.",
  "source": "Book of Exalted Deeds, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Calling"
},
{
  "id": "curtain-of-light",
  "name": "Curtain of Light",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Light"
  ],
  "levels": {
    "Sanctified": 5
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Curtain of light whose area is up to one 5-ft. square/level",
  "duration": "1 round/level (D)",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "An immobile, vertical curtain of brilliant light springs into existence (up to one 5-ft. square per level, bending around obstacles); the side you choose flashes light that deals 2d4 points of damage to evil creatures within 10 feet and 1d4 points to evil creatures up to 20 feet away.",
  "source": "Book of Exalted Deeds, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "dancing-web",
  "name": "Dancing Web",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 5,
    "Druid": 5,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half; see text",
  "spellResistance": "Yes",
  "summary": "A burst of magical energy deals 1d6 points of nonlethal damage per level (maximum 10d6); evil creatures that fail their saving throw are also entangled by lingering threads of energy for 1d6 rounds.",
  "source": "Book of Exalted Deeds, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "diamond-spray",
  "name": "Diamond Spray",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "A glittering cone of diamondlike shards dazzles evil creatures in the area for 2d6 rounds and deals 1d6 points of damage per caster level (maximum 10d6) to evil creatures only; a Reflex save halves the damage but does not reduce the dazzling.",
  "source": "Book of Exalted Deeds, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "distilled-joy",
  "name": "Distilled Joy",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Joy": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, F",
  "castingTime": "1 day",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "Permanent",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Draws forth the material essence of joy — ambrosia — from a creature experiencing great bliss; ambrosia can be used in creating good magic items, as a special spell component, or as a druglike substance with no addictive qualities.",
  "source": "Book of Exalted Deeds, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "divine-inspiration",
  "name": "Divine Inspiration",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Sanctified": 1
  },
  "components": "Sacrifice",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One creature touched",
  "duration": "1d4 rounds",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "The recipient gains limited precognitive ability against evil opponents: a +3 sacred bonus on all attack rolls made against evil creatures (no bonus against nonevil creatures).",
  "source": "Book of Exalted Deeds, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "dolorous-motes",
  "name": "Dolorous Motes",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 4,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "1 10-ft. cube/level",
  "duration": "1 round/level (D)",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "Creates one large cloud or several smaller clouds of flickering motes that cause intense mental anguish: creatures inside or passing through must succeed on a Will save each round or be dazed for 1 round.",
  "source": "Book of Exalted Deeds, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "dragon-cloud",
  "name": "Dragon Cloud",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Air"
  ],
  "levels": {
    "Sanctified": 8
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 round",
  "range": "Special (see text)",
  "targetOrArea": "One conjured dragon cloud (see text)",
  "duration": "1 min. + 1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Cast outdoors where clouds are visible, this spell calls a spirit of elemental air, binds it to a nearby cloud, and gives it dragonlike form; the cloud dragon flies to you, arriving in 1 minute, and serves for the duration.",
  "source": "Book of Exalted Deeds, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Calling"
},
{
  "id": "ease-pain",
  "name": "Ease Pain",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 2,
    "Beloved of Valarian": 2,
    "Cleric": 2
  },
  "components": "S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Immediately removes any lingering effects of pain, including penalties imposed by symbol of pain and similar spells; it does not heal damage or other effects, and pain from continuing-damage effects is eased only for a moment.",
  "source": "Book of Exalted Deeds, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Healing"
},
{
  "id": "eladrin-form",
  "name": "Eladrin Form",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You assume the form of an incorporeal globe of eldritch colors 5 feet in diameter, flying 150 feet with perfect maneuverability and passing through solid objects; you can use spell-like and psionic abilities but cannot cast spells or attack physically, and you have no Strength score in this form.",
  "source": "Book of Exalted Deeds, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "elation",
  "name": "Elation",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 2,
    "Cleric": 2,
    "Emissary of Barachiel": 2,
    "Joy": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "80 ft.",
  "targetOrArea": "Allies in an 80-ft.-radius spread of you",
  "duration": "1 round/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Your allies become elated and energetic: a +2 morale bonus to effective Strength and Dexterity and a +5-foot increase to speed; the spell offsets most penalties of fatigue without removing the fatigued condition.",
  "source": "Book of Exalted Deeds, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "emerald-burst",
  "name": "Emerald Burst",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "An emerald worth at least 1,000 gp flies toward your enemies and explodes in a pulse of green light: neutral creatures in the burst are dazed for 1 round, evil creatures are stunned for 1d4 rounds, and good creatures are unaffected.",
  "source": "Book of Exalted Deeds, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "empyreal-ecstasy",
  "name": "Empyreal Ecstasy",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 6,
    "Pleasure": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "30 ft.",
  "targetOrArea": "One creature/level",
  "duration": "1 minute/level (D)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As ease pain, immediately removing lingering pain effects and penalties, and additionally induces a pleasurable, fuguelike state that grants further benefits for the duration.",
  "source": "Book of Exalted Deeds, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "end-to-strife",
  "name": "End to Strife",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 9,
    "Cleric": 9
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "80 ft.",
  "targetOrArea": "80-ft.-radius emanation, centered on you",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "An invisible aura of divine power surrounds you, and every intelligent creature in the area becomes aware that hostile action will be punished: any creature in the area that makes an attack takes 20d6 points of damage (lethal or nonlethal, chosen when cast).",
  "source": "Book of Exalted Deeds, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "energetic-healing",
  "name": "Energetic Healing",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 5,
    "Cleric": 5,
    "Druid": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One living creature touched",
  "duration": "10 minutes/level or until discharged",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "The target is rendered immune to one energy type you choose (acid, cold, electricity, fire, or sonic), and whenever it would take magical damage of that type, it instead heals hit points equal to 10% of the damage dealt.",
  "source": "Book of Exalted Deeds, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Healing"
},
{
  "id": "energize-potion",
  "name": "Energize Potion",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 3,
    "Druid": 3,
    "Sorcerer/Wizard": 2,
    "Wrath": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "10-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "Transforms a magic potion into a volatile substance that can be hurled to the spell's range, destroying the potion and releasing a 10-foot-radius burst that deals 1d6 points of damage per spell level of the potion, of an energy type chosen when the spell is cast.",
  "source": "Book of Exalted Deeds, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "estannas-stew",
  "name": "Estanna's Stew",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Paladin": 2
  },
  "components": "V, S, F",
  "castingTime": "1 round",
  "range": "0 ft.",
  "targetOrArea": "Fills pot with healing stew (1 serving/2 levels)",
  "duration": "Instantaneous (see text)",
  "savingThrow": "Will half (harmless); see text",
  "spellResistance": "Yes (harmless)",
  "summary": "Calls on Estanna to fill a specially crafted stewpot you hold with a potent healing stew — one serving per two caster levels (maximum 5 servings); a serving eaten as a standard action heals 1d6+1 points of damage.",
  "source": "Book of Exalted Deeds, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Healing"
},
{
  "id": "exalted-fury",
  "name": "Exalted Fury",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 9
  },
  "components": "V, Sacrifice",
  "castingTime": "1 standard action",
  "range": "40 ft.",
  "targetOrArea": "40-ft. radius burst, centered on you",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Uttering a single syllable of the Words of Creation, your body erupts in holy power: all evil creatures within the area take damage equal to your current hit points + 50. Sacrifice: you die (though you can be raised or resurrected normally).",
  "source": "Book of Exalted Deeds, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "exalted-raiment",
  "name": "Exalted Raiment",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sanctified": 6
  },
  "components": "V, DF, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Robe, garment, or outfit touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "Imbues a robe, priestly garment, or outfit with divine power: a sacred bonus to AC (+1 per five caster levels, maximum +4), damage reduction 10/evil, spell resistance 5 + 1 per caster level (maximum 25), and ability damage you take from spellcasting reduced by 1.",
  "source": "Book of Exalted Deeds, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "eyes-of-the-avoral",
  "name": "Eyes of the Avoral",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 1,
    "Beloved of Valarian": 1,
    "Cleric": 1,
    "Druid": 1,
    "Ranger": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One creature",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject gains an avoral's sharp eyesight: a +8 racial bonus on Spot checks for the duration.",
  "source": "Book of Exalted Deeds, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "faerinaals-hymn",
  "name": "Faerinaal's Hymn",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 2
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Up to one evil creature/level",
  "duration": "Concentration",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Your gentle hymn clouds the minds of evil creatures that can hear it, causing affected targets to forgo attacks of opportunity for the spell's duration.",
  "source": "Book of Exalted Deeds, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "glorious-raiment",
  "name": "Glorious Raiment",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 2,
    "Glory": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Robe, garment, or outfit touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "Imbues a robe, priestly garment, or outfit with divine power: a sacred bonus to AC (+1 per five caster levels, maximum +4) and damage reduction 5/evil; only a good-aligned creature gains the spell's benefits from wearing it.",
  "source": "Book of Exalted Deeds, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "glory-of-the-martyr",
  "name": "Glory of the Martyr",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Champion of Gwynharwyf": 4,
    "Paladin": 4
  },
  "components": "V, S, F, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature/level",
  "duration": "1 hour/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Like shield other, but wards multiple subjects at once: each subject gains a +1 deflection bonus to AC and a +1 resistance bonus on saves, takes only half damage from all wounds and attacks that deal hit point damage, and the remaining half is taken by you.",
  "source": "Book of Exalted Deeds, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "greater-status",
  "name": "Greater Status",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 4,
    "Cleric": 4,
    "Community": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One creature touched/3 levels",
  "duration": "1 hour/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "As status, but you can also cast a limited selection of spells through the link as if you were touching the target: spells of 0th, 1st, or 2nd level with range Touch, a creature target, and a harmless saving throw.",
  "source": "Book of Exalted Deeds, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "hammer-of-righteousness",
  "name": "Hammer of Righteousness",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Force",
    "Good"
  ],
  "levels": {
    "Sanctified": 3
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Magic warhammer of force",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "A great warhammer of positive energy springs into existence and strikes a target you can see unerringly, dealing 1d6 points of damage per caster level, or 1d8 per caster level if the target is evil; you may choose to deal nonlethal damage instead, or split the damage between lethal and nonlethal.",
  "source": "Book of Exalted Deeds, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "hearts-ease",
  "name": "Heart's Ease",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Beloved of Valarian": 3,
    "Cleric": 3,
    "Pleasure": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature/level",
  "duration": "Permanent",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Cures emotional wounds as heal cures physical ones: subjects are freed of any fear effect, despair effect (such as crushing despair), or similar mind-affecting condition — though not charms or compulsions — and lingering psychological effects of torture are removed.",
  "source": "Book of Exalted Deeds, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "heavenly-lightning",
  "name": "Heavenly Lightning",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Celestial": 5,
    "Exalted Arcanist": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Up to one creature per 2 caster levels",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You create a leaping bolt of radiant lightning that arcs from one target to the next (up to one creature per two caster levels), dealing each 3d6 points of celestial electricity damage; creatures normally immune to electricity take full damage, and protection from energy (electricity) does not reduce it.",
  "source": "Book of Exalted Deeds, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "heavenly-lightning-storm",
  "name": "Heavenly Lightning Storm",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Celestial": 7,
    "Exalted Arcanist": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Area: 10-ft. wide to close range (25 ft. + 5 ft./2 levels); Targets: Up to one creature per caster level",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "As heavenly lightning, except it has a greater range, can strike more targets (up to one creature per caster level), and deals 5d6 points of celestial electricity damage to each target.",
  "source": "Book of Exalted Deeds, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "note": "Abbreviated entry in Book of Exalted Deeds: functions as Heavenly Lightning except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "heavens-trumpet",
  "name": "Heaven's Trumpet",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good",
    "Sonic"
  ],
  "levels": {
    "Bard": 6,
    "Cleric": 7,
    "Emissary of Barachiel": 4
  },
  "components": "S, F, Archon",
  "castingTime": "1 standard action",
  "range": "120 ft.",
  "targetOrArea": "Foes in a 120-ft.-radius burst centered on you",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "You produce a blast of music of utter clarity and paralyzing awe (focus: a masterwork trumpet you must blow): all foes within 120 feet must succeed on a Fortitude save or be paralyzed for 1d4 rounds.",
  "source": "Book of Exalted Deeds, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "inquisition",
  "name": "Inquisition",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Sanctified": 5
  },
  "components": "Sacrifice",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature with an Intelligence of 6 or more",
  "duration": "See text",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Compels the target, if it fails its save, to divulge information it may be hiding: it must answer your questions (one per three caster levels) truthfully and without misleading evasion, whether a simple yes or no or a more detailed response.",
  "source": "Book of Exalted Deeds, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "inspired-aim",
  "name": "Inspired Aim",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 4,
    "Cleric": 3,
    "Fey": 3,
    "Ranger": 3
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "40 ft.",
  "targetOrArea": "Allies with 40-ft.-radius emanation centered on you",
  "duration": "Concentration",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You inspire allies within the spell's area to focus on hitting their intended targets: all affected allies gain a +2 insight bonus on all ranged attack rolls.",
  "source": "Book of Exalted Deeds, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "lantern-light",
  "name": "Lantern Light",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good",
    "Light"
  ],
  "levels": {
    "Cleric": 1,
    "Paladin": 1,
    "Sorcerer/Wizard": 1,
    "Vassal of Bahamut": 1
  },
  "components": "S, Abstinence",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Ray",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Rays of holy light flash from your eyes: you can fire one ray per two caster levels, no more than one per round, each requiring a ranged touch attack and dealing 1d6 points of damage.",
  "source": "Book of Exalted Deeds, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "last-judgment",
  "name": "Last Judgment",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Death",
    "Good"
  ],
  "levels": {
    "Cleric": 8,
    "Sorcerer/Wizard": 8,
    "Wrath": 8
  },
  "components": "V, Celestial",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One evil humanoid, monstrous humanoid, or giant/2 levels",
  "duration": "Instantaneous",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "Reciting a list of the targets' evil deeds, you call down the judgment of the heavens: creatures that fail their saving throw are struck dead and bodily transported to the appropriate Lower Plane, while creatures that succeed take 3d6 points of temporary Wisdom damage as guilt overwhelms them.",
  "source": "Book of Exalted Deeds, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "leonals-roar",
  "name": "Leonal's Roar",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good",
    "Sonic"
  ],
  "levels": {
    "Druid": 8
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "40 ft.",
  "targetOrArea": "Nongood creatures in a 40-ft.- radius spread centered on you",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "This spell has the effect of a holy word, and additionally deals 2d6 points of sonic damage to nongood creatures in the area; a successful Fortitude save negates the sonic damage but not the holy word effects.",
  "source": "Book of Exalted Deeds, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "lastais-caress",
  "name": "Lastai's Caress",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Pleasure": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One known evil creature touched",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Your gentle touch fills the target with tremendous feelings of love and compassion; an evil creature touched (melee touch attack if unwilling) must wrestle with those feelings, rolling on the spell's table for its effect. The spell has no effect on a creature you do not know is evil.",
  "source": "Book of Exalted Deeds, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "luminous-armor",
  "name": "Luminous Armor",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sanctified": 2
  },
  "components": "Sacrifice",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One good creature touched",
  "duration": "1 hour/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "The target is enveloped in a protective, shimmering aura resembling dazzling but weightless full plate; it imparts the benefits of a breastplate (+5 armor bonus to AC) with no maximum Dexterity restriction and does not restrict the target's movement or mobility in any way.",
  "source": "Book of Exalted Deeds, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "luminous-armor-greater",
  "name": "Luminous Armor, Greater",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sanctified": 4
  },
  "components": "Sacrifice",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One good creature touched",
  "duration": "1 hour/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "This spell functions like luminous armor, except that it imparts the benefits of full plate (+8 armor bonus to AC). Sacrifice: 1d3 points of Strength damage.",
  "source": "Book of Exalted Deeds, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "note": "Abbreviated entry in Book of Exalted Deeds: functions as Luminous Armor except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "mind-bond",
  "name": "Mind Bond",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Paladin": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Special mount",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You temporarily strengthen the mental bond with your special mount: you and your mount gain a +4 flanking bonus on attack rolls (instead of +2) when flanking the same opponent, and your mount gains a +1 competence bonus on attack rolls for every three paladin levels you possess.",
  "source": "Book of Exalted Deeds, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "path-of-the-exalted",
  "name": "Path of the Exalted",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Sanctified": 3
  },
  "components": "V, Abstinence",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 decision; see text",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You consult your deity (or an agent of your deity) to help make a difficult decision — strategizing, choosing a lead to follow in an investigation, deciding who to help — and the deity helps you examine the known situation from a new perspective.",
  "source": "Book of Exalted Deeds, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "perfect-summons",
  "name": "Perfect Summons",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "40-ft.-radius spread",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You create an area in which only good creatures can be magically summoned: a later summoning brings a good version (a celestial beast rather than a fiendish one) or a good equivalent of the intended creature, and if the intended creature was neutral or evil, the good creature that appears is not bound to its summoner.",
  "source": "Book of Exalted Deeds, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "phierans-resolve",
  "name": "Phieran's Resolve",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "20 ft.",
  "targetOrArea": "One good creature/level in a 20-ft.-radius burst centered on you",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "This spell, devised to combat wielders of vile magic, grants the targets a +4 sacred bonus on saving throws against spells with the evil descriptor. Sacrifice: 1d3 points of Strength damage.",
  "source": "Book of Exalted Deeds, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "phoenix-fire",
  "name": "Phoenix Fire",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Fire",
    "Good"
  ],
  "levels": {
    "Sanctified": 7
  },
  "components": "V, S, F, Sacrifice",
  "castingTime": "1 standard action",
  "range": "15 ft.",
  "targetOrArea": "15-ft.-radius spread, centered on you",
  "duration": "Instantaneous (see text)",
  "savingThrow": "Reflex half (see text)",
  "spellResistance": "Yes (see text)",
  "summary": "You immolate yourself, consuming your flesh in a cloud of flame 20 feet high and 30 feet in diameter, and you die (no saving throw and spell resistance does not apply); every evil creature within the cloud takes 2d6 points of damage per caster level (maximum 40d6), neutral creatures take half damage (halved again on a successful Reflex save), and good creatures take no damage.",
  "source": "Book of Exalted Deeds, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "quickshift",
  "name": "Quickshift",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, Celestial",
  "castingTime": "1 round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "For the duration of this spell, your teleport or greater teleport spell-like ability is quickened (as if enhanced with the Quicken Spell feat); the spell has no effect on other spells or spell-like abilities.",
  "source": "Book of Exalted Deeds, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "radiant-fog",
  "name": "Radiant Fog",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, Abstinence",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Fog that spreads in a 20-ft. radius, 20 ft. high",
  "duration": "1 minute/level",
  "savingThrow": "Fortitude partial (see text)",
  "spellResistance": "Yes (see text)",
  "summary": "As solid fog, but the cloud shimmers with brilliant celestial radiance: creatures within must succeed on Fortitude saves or be dazzled (-1 penalty on attack rolls) while in the cloud and for 1 minute afterward, and creatures susceptible to bright light are blinded if they fail; sightless creatures are unaffected.",
  "source": "Book of Exalted Deeds, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Creation"
},
{
  "id": "radiant-shield",
  "name": "Radiant Shield",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Electricity",
    "Good"
  ],
  "levels": {
    "Sorcerer/Wizard": 4,
    "Wrath": 4
  },
  "components": "V, S, Abstinence",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A scintillating aura of white radiance wreathes you: each creature that strikes you with a natural or handheld weapon takes 1d6 points of electricity damage + 1 point per caster level (its spell resistance applies), and you take only half damage from electricity attacks.",
  "source": "Book of Exalted Deeds, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "rain-of-black-tulips",
  "name": "Rain of Black Tulips",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Druid": 9
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Cylinder (80-ft. radius, 80 ft. high)",
  "duration": "1 round/level (D)",
  "savingThrow": "None (damage) and Fortitude negates (nausea)",
  "spellResistance": "Yes",
  "summary": "Tulips as black as midnight fall from the sky and explode with divine energy upon striking evil creatures, each of which takes 5d6 points of damage; evil creatures that fail a Fortitude save are also nauseated until they leave the spell's area.",
  "source": "Book of Exalted Deeds, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "rain-of-embers",
  "name": "Rain of Embers",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire",
    "Good"
  ],
  "levels": {
    "Sanctified": 7
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Cylinder (40-ft. radius, 120 ft. high)",
  "duration": "1 round/level (D)",
  "savingThrow": "Reflex half; see text",
  "spellResistance": "Yes",
  "summary": "Orange, starlike embers rain steadily from above, dealing 10d6 points of damage each round to evil creatures within the area — half of it fire damage and half divine power, which resistance to fire does not reduce.",
  "source": "Book of Exalted Deeds, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "rain-of-roses",
  "name": "Rain of Roses",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Druid": 7
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Cylinder (80-ft. radius, 80 ft. high)",
  "duration": "1 round/level (D)",
  "savingThrow": "None (ability damage) and Fortitude negates (sickening)",
  "spellResistance": "Yes",
  "summary": "Red roses fall from the sky: their sharp thorns graze evil creatures for 1d4 points of temporary Wisdom damage per round (a creature reduced to 0 Wisdom falls unconscious, succumbing to horrible nightmares), and evil creatures touched by the petals that fail a Fortitude save are sickened.",
  "source": "Book of Exalted Deeds, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "ray-of-hope",
  "name": "Ray of Hope",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 1,
    "Bard": 1,
    "Cleric": 1,
    "Emissary of Barachiel": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Powerful hope wells up in the subject, who gains a +2 morale bonus on saving throws, attack rolls, ability checks, and skill checks; ray of hope counters and dispels sorrow (Book of Vile Darkness).",
  "source": "Book of Exalted Deeds, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "refreshment",
  "name": "Refreshment",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 3,
    "Bard": 3,
    "Cleric": 3,
    "Endurance": 3,
    "Vassal of Bahamut": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "20 ft.",
  "targetOrArea": "20-ft.-radius burst centered on you",
  "duration": "Instantaneous",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Channels celestial energy to remove all nonlethal damage the targets have taken, including damage from environmental conditions, starvation and thirst, and related effects, as well as damage dealt by nonlethal attacks.",
  "source": "Book of Exalted Deeds, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Healing"
},
{
  "id": "remove-addiction",
  "name": "Remove Addiction",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Beloved of Valarian": 2,
    "Cleric": 2,
    "Druid": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Cures all addictions the target suffers from (see Drugs in the Book of Vile Darkness); since the spell's duration is instantaneous, it does not prevent a new addiction to the same drug at a later date.",
  "source": "Book of Exalted Deeds, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Healing"
},
{
  "id": "remove-fatigue",
  "name": "Remove Fatigue",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 4,
    "Cleric": 4,
    "Pleasure": 4
  },
  "components": "S",
  "castingTime": "10 minutes",
  "range": "Touch",
  "targetOrArea": "Up to one living creature touched per two levels",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The creatures you touch gain the benefits of 8 hours of restful sleep: a fatigued subject's fatigue is removed, an exhausted subject becomes merely fatigued (eliminated by 1 more hour of rest), and a subject already well rested needs no rest or sleep during the next 24 hours.",
  "source": "Book of Exalted Deeds, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "remove-nausea",
  "name": "Remove Nausea",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 3,
    "Cleric": 3
  },
  "components": "V, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Restores to health a creature who is nauseated or sickened; it cures only the nausea or sickening effect, not disease, poison, or any other effects.",
  "source": "Book of Exalted Deeds, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Healing"
},
{
  "id": "restore-souls-treasure",
  "name": "Restore Soul's Treasure",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sanctified": 8
  },
  "components": "Sacrifice",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Disintegrated remains of one item",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "If the target lost a valuable item to the soul's treasure lost spell (Book of Vile Darkness), this spell restores it: cast within 4 hours of the item's destruction, it returns the disintegrated item to the original owner's possession in its prior condition.",
  "source": "Book of Exalted Deeds, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "righteous-glare",
  "name": "Righteous Glare",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Death",
    "Good"
  ],
  "levels": {
    "Cleric": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain a supernatural gaze attack like that of a ghaele eladrin: evil creatures with 5 HD or fewer within 60 feet must succeed on a Will save or die, and even on a successful save they are affected as by a fear spell for 2d10 rounds; neutral creatures and evil creatures with more than 5 HD must save or suffer the fear effect.",
  "source": "Book of Exalted Deeds, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "righteous-smite",
  "name": "Righteous Smite",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 7,
    "Exalted Arcanist": 7,
    "Wrath": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft. radius spread",
  "duration": "Instantaneous",
  "savingThrow": "Will partial; see text",
  "spellResistance": "Yes",
  "summary": "You draw down holy power to smite your enemies — evil creatures take 1d6 points of damage per caster level (maximum 20d6), or 1d8 per caster level (maximum 20d8) if they are evil outsiders, and are blinded for 1d4 rounds; neutral creatures are harmed as well, good creatures are unaffected, and a successful Will save reduces the damage to half and negates the blinding.",
  "source": "Book of Exalted Deeds, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "sacred-guardian",
  "name": "Sacred Guardian",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 5,
    "Cleric": 5
  },
  "components": "V, S, Celestial",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Object or willing creature touched",
  "duration": "1 day/level",
  "savingThrow": "None (see text)",
  "spellResistance": "Yes (harmless)",
  "summary": "Used by celestials to monitor a creature or object placed in their care: similar to status, this spell makes you constantly aware of the target's precise location and its status — whether a creature is unharmed, wounded, disabled, staggered, unconscious, dying, or dead, or whether an object is damaged.",
  "source": "Book of Exalted Deeds, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "sanctify-the-wicked",
  "name": "Sanctify the Wicked",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 9
  },
  "components": "V, S, F, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One evil creature",
  "duration": "See text",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Tears the foul, corrupted soul from an evil creature's body — its soulless body instantly withers or molders into dust — and traps the soul in a diamond receptacle, where it reflects on its past evils and slowly finds and nurtures a spark of goodness within itself.",
  "source": "Book of Exalted Deeds, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "secure-corpse",
  "name": "Secure Corpse",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Stores one creature’s corpse in your holy symbol",
  "duration": "1 day/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Turns your holy symbol into a magical receptacle capable of holding one creature's corpse: the corpse within range is transformed into divine energy, drawn into the holy symbol, and placed in stasis (as the gentle repose spell) until you release it.",
  "source": "Book of Exalted Deeds, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "shield-of-the-archons",
  "name": "Shield of the Archons",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Apostle of Peace": 7,
    "Cleric": 7
  },
  "components": "V, Archon",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You; Effect: Mobile shield",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A mystic shield of beneficent energies interposes itself between you and an incoming magical attack, blocking harmful spells, spell-like abilities, and supernatural abilities; it can block one such attack each round (the first), and any targeted magical attack that strikes the shield is dissipated.",
  "source": "Book of Exalted Deeds, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "sicken-evil",
  "name": "Sicken Evil",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 5
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "20-ft.-radius emanation",
  "duration": "1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You emanate a powerful aura that sickens evil creatures within the spell's area. Sacrifice: 1d4 points of Strength damage.",
  "source": "Book of Exalted Deeds, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "silvered-claws",
  "name": "Silvered Claws",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One living creature touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The target treats all of its natural attacks — slam attacks, fists or claws, bite attacks, and any other natural weapons — as silvered weapons; the spell does not change an unarmed strike's damage from nonlethal to lethal, and it can be made permanent with a permanency spell.",
  "source": "Book of Exalted Deeds, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "silvered-weapon",
  "name": "Silvered Weapon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Paladin": 1,
    "Ranger": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One weapon or projectile touched",
  "duration": "1 round/level",
  "savingThrow": "Fortitude negates (object, harmless)",
  "spellResistance": "Yes (object, harmless)",
  "summary": "Transforms a single weapon or projectile you are holding into a silvered weapon; the weapon may be magical, masterwork, or nonmagical, but it cannot be a natural weapon, and the spell cannot affect more than one weapon or multiple projectiles.",
  "source": "Book of Exalted Deeds, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "smite-heretic",
  "name": "Smite Heretic",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Paladin": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "For the duration, when you use your smite evil class ability against an evil creature with the ability to cast divine spells, you gain a +2 sacred bonus on the attack roll, and the attack deals 2 extra points of damage per paladin level instead of 1.",
  "source": "Book of Exalted Deeds, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "spear-of-valarian",
  "name": "Spear of Valarian",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Beloved of Valarian": 4,
    "Druid": 5,
    "Ranger": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One nonmagical weapon touched",
  "duration": "1 round/level (D)",
  "savingThrow": "Fortitude negates (object, harmless)",
  "spellResistance": "Yes (object, harmless)",
  "summary": "Transforms one nonmagical weapon you are carrying and have drawn into a shimmering silver spear functioning as a +1 silvered spear; against magical beasts, the weapon becomes a +3 silvered spear that deals +2d6 points of bonus damage (as the bane special property).",
  "source": "Book of Exalted Deeds, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "spread-of-contentment",
  "name": "Spread of Contentment",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Cleric": 8,
    "Pleasure": 8
  },
  "components": "V, S, M",
  "castingTime": "1 hour",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "10 ft./level-radius spread",
  "duration": "1 hour/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "This spell calms creatures within the area for the duration: hostile and unfriendly creatures become indifferent, indifferent creatures turn friendly, and friendly creatures become helpful; it directly counters the effects of spread of savagery (Book of Vile Darkness).",
  "source": "Book of Exalted Deeds, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "starmantle",
  "name": "Starmantle",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Joy": 7,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One living creature touched",
  "duration": "1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "Manifests as a draping cloak of tiny, cascading stars over the target's existing apparel, shedding light as a torch; the starmantle renders the wearer impervious to nonmagical weapon attacks and transforms any nonmagical weapon or missile that strikes it into a harmless form.",
  "source": "Book of Exalted Deeds, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "stars-of-arvandor",
  "name": "Stars of Arvandor",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Force",
    "Good"
  ],
  "levels": {
    "Cleric": 4,
    "Druid": 4,
    "Ranger": 4,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Up to one creature or object per round",
  "duration": "1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You create one tiny, twinkling star per level (maximum 10 stars) that orbit your head; as a free action you can launch one star per round at a target you designate, or as a standard action launch up to three stars per round at one or more targets, each star requiring its own ranged touch attack.",
  "source": "Book of Exalted Deeds, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "storm-of-shards",
  "name": "Storm of Shards",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 6
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "0 ft.",
  "targetOrArea": "80-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates (blinding) and Reflex half (shards)",
  "spellResistance": "Yes",
  "summary": "Shards of heavenly light rain down from above: evil creatures within the spell's area that fail a Fortitude save are blinded permanently, and the shards slice the flesh of evil creatures for 1d6 points of damage per caster level (maximum 20d6; a successful Reflex save halves the divine-origin damage). Sacrifice: 1d3 points of Strength drain.",
  "source": "Book of Exalted Deeds, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "sublime-revelry",
  "name": "Sublime Revelry",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 9,
    "Pleasure": 9
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature/level, no two of which can be more than 30 ft. apart",
  "duration": "1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Immediately removes any lingering effects of pain, including penalties imposed by symbol of pain and similar spells (without preventing damage or unrelated effects), and induces a pleasurable, fuguelike state with additional effects, among them immunity to mind-affecting spells and effects.",
  "source": "Book of Exalted Deeds, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "sunmantle",
  "name": "Sunmantle",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sanctified": 4
  },
  "components": "S, Sacrifice",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One creature touched",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Cloaks the target in a wavering cloak of light that illuminates the area around it (and dispels darkness) as a daylight spell and grants the target damage reduction 5/-; if the target is struck by a melee attack that deals hit point damage, a tendril of light lashes out at the attacker.",
  "source": "Book of Exalted Deeds, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "sustain",
  "name": "Sustain",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 4,
    "Cleric": 4,
    "Endurance": 4
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Up to one living creature touched/two levels",
  "duration": "6 hours/level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "Instantly relieves the negative effects of hunger and thirst and allows the targets to go without food or water for the spell's duration, suffering no ill effects from the deprivation; when the spell ends, normal eating and drinking resume without adverse effects.",
  "source": "Book of Exalted Deeds, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "sword-of-conscience",
  "name": "Sword of Conscience",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Champion of Gwynharwyf": 4,
    "Cleric": 4,
    "Exalted Arcanist": 4,
    "Paladin": 4,
    "Slayer of Domiel": 4
  },
  "components": "V, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One evil creature",
  "duration": "Instantaneous; see text",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The target creature, which must be evil, is struck by pangs of conscience and remorse, instantaneously taking Wisdom and Charisma damage according to the magnitude of its evil; the lost ability points return only through normal recovery, not when the spell expires, and the effect is not language-dependent.",
  "source": "Book of Exalted Deeds, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "telepathy-block",
  "name": "Telepathy Block",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 5,
    "Cleric": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "80-ft.-radius emanation centered on a creature, object, or point in space",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Blocks all telepathic communication within the affected area, making telepathic conversation impossible; cast on a point in space the effect is stationary, while centered on a creature or mobile object it emanates from it and moves with it.",
  "source": "Book of Exalted Deeds, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "telepathy-tap",
  "name": "Telepathy Tap",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Sanctified": 3
  },
  "components": "Sacrifice",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "10-ft./level-radius emanation",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You can overhear the telepathic conversations of other creatures within the spell's area; it does not let you detect uncommunicated thoughts or understand conversations in languages you do not comprehend, and amid many simultaneous conversations you specify which creatures to overhear in a given round.",
  "source": "Book of Exalted Deeds, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "tomb-of-light",
  "name": "Tomb of Light",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Evil extraplanar creature touched",
  "duration": "Concentration",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "You attempt to draw out the impure substance of an evil extraplanar creature and replace it with your own pure substance: when you touch the target, it must make a Fortitude saving throw, and if it succeeds it is unaffected; the exchange is draining for you to cast but deadly to evil outsiders and other extraplanar creatures with the taint of evil.",
  "source": "Book of Exalted Deeds, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "touch-of-adamantine",
  "name": "Touch of Adamantine",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 6,
    "Druid": 6,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Weapon touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (object, harmless)",
  "spellResistance": "Yes (object, harmless)",
  "summary": "Grants one weapon the properties of an adamantine weapon: a +1 enhancement bonus on attack rolls (as though it were masterwork), the ability to bypass hardness when striking objects or sundering weapons (ignoring hardness less than 20), and one-third more hit points than normal.",
  "source": "Book of Exalted Deeds, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "twilight-luck",
  "name": "Twilight Luck",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 1
  },
  "components": "V, Abstinence",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One nonevil creature touched",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "Imparts the luck of the fey to one nonevil being: the target gains a +1 luck bonus on all saving throws for the duration.",
  "source": "Book of Exalted Deeds, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "unearthly-beauty",
  "name": "Unearthly Beauty",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Druid": 8,
    "Fey": 8
  },
  "components": "V, S, Abstinence",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "As blinding beauty, but at any time during the duration of the spell you can evoke an additional effect as a free action: any creature within 30 feet of you that is looking directly at you must succeed on a Will save or die.",
  "source": "Book of Exalted Deeds, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "note": "Abbreviated entry in Book of Exalted Deeds: functions as Blinding Beauty except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "valiant-steed",
  "name": "Valiant Steed",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Sanctified": 6
  },
  "components": "V, S, Sacrifice",
  "castingTime": "1 hour",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Calls 1 pegasus or unicorn",
  "duration": "Instantaneous; see text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Calls a special servant of the exalted god Valarian — either a pegasus or a unicorn — to your location; the intelligent creature serves you for up to a year, may be dismissed at any time, and can be assigned complex tasks, though it will not undertake a quest or complex burdens beyond your supervision.",
  "source": "Book of Exalted Deeds, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Calling"
},
{
  "id": "vanishing-weapon",
  "name": "Vanishing Weapon",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Weapon touched",
  "duration": "1 minute/level",
  "savingThrow": "None; see text",
  "spellResistance": "No",
  "summary": "Encapsulates a weapon in a faint blue glow: in addition to dealing normal damage, the weapon dispels on contact any summoned creature or quasi-real creature brought into being by a Conjuration (summoning) or Illusion (shadow) spell, on a successful dispel check (1d20 + your caster level) against DC 11 + the level of the caster who summoned or created the creature.",
  "source": "Book of Exalted Deeds, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "vengeance-halo",
  "name": "Vengeance Halo",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 6,
    "Wrath": 6
  },
  "components": "V, S, DF, Abstinence",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One good-aligned creature; see text",
  "duration": "1 minute/level",
  "savingThrow": "None or Reflex half; see text",
  "spellResistance": "No",
  "summary": "A luminous ring of holy power appears above the head of a good creature and remains until the spell expires or the creature is slain (reduced to -10 hp); if the creature is slain, the halo discharges an arc of divine energy that deals 1d6 points of damage per caster level (maximum 20d6) to the slayer, who can make a Reflex save to reduce the damage.",
  "source": "Book of Exalted Deeds, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "vision-of-heaven",
  "name": "Vision of Heaven",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Apostle of Peace": 1,
    "Cleric": 1,
    "Celestial": 1,
    "Exalted Arcanist": 1,
    "Joy": 1,
    "Slayer of Domiel": 1
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One evil creature",
  "duration": "1 round",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Your words allow the target creature the merest glimpse of the blessed joy of the Seven Heavens, spurring a moment of regret for its evil deeds: for 1 round the target is dazed, and for the next 24 hours the creature takes a -1 penalty on all Will saves related to redemption.",
  "source": "Book of Exalted Deeds, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf"
},
{
  "id": "wages-of-sin",
  "name": "Wages of Sin",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, Abstinence",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft/level)",
  "targetOrArea": "One evil creature/level",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The affected creatures' own evil thoughts and impulses blossom into intense suspicion and distrust: each subject becomes convinced that its own allies are plotting to kill it, and attacks the nearest evil creature using whatever attack form is most effective against that foe.",
  "source": "Book of Exalted Deeds, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "warcry",
  "name": "Warcry",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Champion of Gwynharwyf": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "You unleash a tremendous battle cry: creatures within a 30-foot cone that fail a Fortitude save cower in fear for 1d4 rounds, losing their Dexterity bonus to AC and taking no actions, and foes gain a +2 bonus on attacks against cowering creatures.",
  "source": "Book of Exalted Deeds, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
{
  "id": "warding-gems",
  "name": "Warding Gems",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "1 gem/3 caster levels",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You cast this spell upon one or more gems, imbuing them with healing energy; the gems leap from your hand, fly to the target, and orbit its head like ioun stones, each gem a receptacle holding 10 hp that the target can access as a free action, releasing the energy as an unerring arc of divine power.",
  "source": "Book of Exalted Deeds, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Healing"
},
{
  "id": "yoke-of-mercy",
  "name": "Yoke of Mercy",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Apostle of Peace": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, Abstinence",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "No",
  "summary": "This spell compels a creature of up to 4 HD more than the caster's level to fight in a merciful manner: the creature deals nonlethal damage with its attacks, avoids using damaging spells or spell-like abilities, and does not deliver a coup de grace to a helpless foe.",
  "source": "Book of Exalted Deeds, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf",
  "subschool": "Compulsion"
},
];
