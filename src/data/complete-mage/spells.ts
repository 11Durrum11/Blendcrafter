import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Complete Mage — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const COMPLETE_MAGE_SPELLS: SpellDefinition[] = [
{
  "id": "adamantine-wings",
  "name": "Adamantine Wings",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 7,
    "Wu Jen": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour/level (D) or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You sprout wings of overlapping adamantine feathers, granting a fly speed of 60 feet (40 feet in medium or heavy armor or with a heavy load).",
  "source": "Complete Mage, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "allied-footsteps",
  "name": "Allied Footsteps",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "Willing living creature touched",
  "duration": "1 day/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject knows the direction and approximate distance to reach you, enabling him to find you under almost any circumstances.",
  "source": "Complete Mage, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "animate-weapon",
  "name": "Animate Weapon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Assassin": 2,
    "Hexblade": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Weapon touched",
  "duration": "Concentration + 1 round",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes",
  "summary": "Your weapon leaps from your hands and fights on its own, functioning like an animated object of its size.",
  "source": "Complete Mage, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "arcane-fusion",
  "name": "Arcane Fusion",
  "ruleset": "core",
  "school": "Universal",
  "descriptors": [],
  "levels": {
    "Sorcerer": 5
  },
  "components": "V, S; see text",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "None or Will partial; see text",
  "spellResistance": "Yes",
  "summary": "You cast two sorcerer spells you know — one 1st-level and one of 4th level or lower — together in a single burst of magic.",
  "source": "Complete Mage, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "arcane-fusion-greater",
  "name": "Arcane Fusion, Greater",
  "ruleset": "core",
  "school": "Universal",
  "descriptors": [],
  "levels": {
    "Sorcerer": 8
  },
  "components": "V, S; see text",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "None or Will partial; see text",
  "spellResistance": "Yes",
  "summary": "As arcane fusion, except that you combine a sorcerer spell of 4th level or lower with one of 7th level or lower.",
  "source": "Complete Mage, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "note": "Abbreviated entry in Complete Mage: functions as Arcane Fusion except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "aspect-of-the-icy-hunter",
  "name": "Aspect of the Icy Hunter",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You take the form of a winter wolf, gaining 20 temporary hit points for the duration.",
  "source": "Complete Mage, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Polymorph"
},
{
  "id": "attentive-alarm",
  "name": "Attentive Alarm",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, F/DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius emanation centered on a point in space",
  "duration": "2 hours/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Functions as alarm, except that you immediately know the type and number of creatures that triggered the ward.",
  "source": "Complete Mage, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "note": "Complete Mage prints this spell in abbreviated form (\"functions as\" alarm (Player's Handbook)); the remaining stat-block fields follow that spell as the book directs."
},
{
  "id": "battlecry",
  "name": "Battlecry",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Mind-Affecting",
    "Sonic"
  ],
  "levels": {
    "Bard": 4
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "60 ft.",
  "targetOrArea": "You and all allies within 60 ft.",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Your bold shout bolsters your allies: the next single attack by any affected creature before the end of your next turn gains a +5 morale bonus on the damage roll.",
  "source": "Complete Mage, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "blackrot",
  "name": "Blackrot",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Druid": 2,
    "Wu Jen": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One plant creature or one wooden weapon touched",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial or",
  "spellResistance": "Yes",
  "summary": "Your touch delivers a malignant rot to a plant creature, damaging it over a number of rounds, or renders a wooden weapon poisonous.",
  "source": "Complete Mage, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "bloodletting",
  "name": "Bloodletting",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Assassin": 1,
    "Hexblade": 1
  },
  "components": "S",
  "castingTime": "1 swift action",
  "range": "Touch",
  "targetOrArea": "One light weapon you hold",
  "duration": "See text",
  "savingThrow": "None",
  "spellResistance": "Yes; see text",
  "summary": "Imbues a light weapon you hold with the power to wound grievously: the next time it damages a living creature, the wound bleeds for extra damage each round.",
  "source": "Complete Mage, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "boiling-blood",
  "name": "Boiling Blood",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "1 round + 1 round/3 levels",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "The subject's blood heats up, dealing 2d6 points of fire damage each round for a duration that grows with caster level.",
  "source": "Complete Mage, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "bothersome-babble",
  "name": "Bothersome Babble",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Hexblade": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "3 rounds",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The subject's speech becomes nonsense: he cannot make himself understood verbally, though he can still write.",
  "source": "Complete Mage, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Compulsion"
},
{
  "id": "cacophonous-alarm",
  "name": "Cacophonous Alarm",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2
  },
  "components": "V, S, F/DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius emanation centered on a point in space",
  "duration": "2 hours/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Functions as alarm, but only with an audible result, and the first creature to violate the warded area is struck by an effect equivalent to sound burst.",
  "source": "Complete Mage, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "note": "Complete Mage prints this spell in abbreviated form (\"functions as\" alarm (Player's Handbook)); the remaining stat-block fields follow that spell as the book directs."
},
{
  "id": "caterwaul",
  "name": "Caterwaul",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "1 round",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "Your earsplitting shriek nauseates creatures in the area for 1 round; those that save are sickened for 1 round instead.",
  "source": "Complete Mage, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Compulsion"
},
{
  "id": "catsfeet",
  "name": "Catsfeet",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Assassin": 1,
    "Bard": 1,
    "Hexblade": 1
  },
  "components": "V",
  "castingTime": "1 immediate action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous you complete this spell, you feel as lithe and quick as a cat.",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "When you cast this spell, you immediately reroll a Balance, Climb, Jump, or Move Silently check you just rolled, with a +5 insight bonus; you must keep the second result.",
  "source": "Complete Mage, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "caustic-mire",
  "name": "Caustic Mire",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Acidic sludge coats the ground: entering an affected square costs extra movement, and each square entered deals acid damage.",
  "source": "Complete Mage, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "caustic-smoke",
  "name": "Caustic Smoke",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Acidic fog spreads in a 20-ft. radius, 20 ft. high",
  "duration": "5 rounds",
  "savingThrow": "Fortitude partial",
  "spellResistance": "No",
  "summary": "Creates a bank of green-tinged smoke like fog cloud that also deals acid damage each round to creatures within and burns their eyes.",
  "source": "Complete Mage, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "channeled-lifetheft",
  "name": "Channeled Lifetheft",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "See text",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You pour negative energy into a dark mote over several rounds, then release it to drain the life of a single foe; the longer you channel, the stronger the effect.",
  "source": "Complete Mage, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "channeled-sound-blast",
  "name": "Channeled Sound Blast",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Bard": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "See text",
  "range": "See text",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "You channel energy into waves of sound over several rounds, then release a cone of sonic energy; the longer you channel, the stronger the blast.",
  "source": "Complete Mage, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Sonic"
},
{
  "id": "choking-cobwebs",
  "name": "Choking Cobwebs",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Dusty webs in a 10-ft.-radius spread",
  "duration": "1 minute/level (D)",
  "savingThrow": "Fortitude partial",
  "spellResistance": "No",
  "summary": "Fills an area with thin, dust-laden filaments like old cobwebs that need not be anchored, choking creatures caught within.",
  "source": "Complete Mage, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "climbing-tree",
  "name": "Climbing Tree",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1,
    "Wu Jen": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 full round",
  "range": "0 ft.",
  "targetOrArea": "A thin but sturdy tree",
  "duration": "1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "A tree snakes up from the earth in an adjacent square, growing up to 10 feet per caster level (maximum 50 feet) with branches perfectly spaced for climbing.",
  "source": "Complete Mage, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "coat-of-arms",
  "name": "Coat of Arms",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "0 ft.",
  "targetOrArea": "A ring of blades swirling around you",
  "duration": "1 minute/level (D) or until expended",
  "savingThrow": "None",
  "spellResistance": "No or Yes; see text",
  "summary": "A ring of spinning force blades surrounds you — one per three caster levels, up to six — granting a shield bonus to AC equal to the number of blades.",
  "source": "Complete Mage, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "combined-talent",
  "name": "Combined Talent",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 level)",
  "targetOrArea": "Two willing creatures no more than 30 ft. apart",
  "duration": "10 minutes (D) or until expended",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "One subject may use the skill ranks of the other subject in place of her own for one chosen skill, up to your caster level in ranks (maximum 10).",
  "source": "Complete Mage, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "dawn-burst",
  "name": "Dawn Burst",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Light"
  ],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "10-ft.-radius burst",
  "duration": "1 round/level (D)",
  "savingThrow": "Reflex partial",
  "spellResistance": "Yes",
  "summary": "A globe of brilliant radiance erupts: all creatures in the area glow like torches, making hiding difficult and revealing the location of invisible creatures.",
  "source": "Complete Mage, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "deadly-lahar",
  "name": "Deadly Lahar",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Earth",
    "Fire"
  ],
  "levels": {
    "Druid": 8,
    "Sorcerer/Wizard": 8,
    "Wu Jen": 8
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped spread",
  "duration": "Instantaneous",
  "savingThrow": "Reflex partial",
  "spellResistance": "No",
  "summary": "A torrent of molten volcanic material washes over your foes, dealing 10d6 points of fire damage and coating them in viscous rock that slows them.",
  "source": "Complete Mage, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "deadly-sunstroke",
  "name": "Deadly Sunstroke",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Light"
  ],
  "levels": {
    "Sorcerer/Wizard": 9,
    "Wu Jen": 9
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "One creature/level, no two of which are more than 60 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Waves of overwhelming heat deal 1d6 points of fire damage per caster level (maximum 25d6); undead and plants take half again as much, and living creatures damaged are fatigued.",
  "source": "Complete Mage, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "deafening-blast",
  "name": "Deafening Blast",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Bard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "A blast of sound louder than thunder permanently deafens all creatures in the area; a successful Fortitude save reduces the deafness to 1 round.",
  "source": "Complete Mage, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "deaths-call",
  "name": "Death's Call",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Hexblade": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "10 ft.",
  "targetOrArea": "10-ft.-radius burst, centered on you",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Your scream chills the air with deathly energy: living creatures in the area take 1 point of damage per caster level (maximum 5) and become fatigued; swarms take more damage.",
  "source": "Complete Mage, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "deathsight",
  "name": "Deathsight",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Assassin": 4
  },
  "components": "S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "One attack",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain intuitive insight into your foes' vital spots: your next attack before the end of your next turn counts as a death attack without the usual observation.",
  "source": "Complete Mage, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "deceptive-facade",
  "name": "Deceptive Facade",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature or object (up to 1 cu. ft./level) touched",
  "duration": "10 minutes/level (D)",
  "savingThrow": "Will negates (harmless, object) or Will disbelief (if interacted with, everyone else)",
  "spellResistance": "Yes (harmless)",
  "summary": "Your touch cloaks another being or object in a new appearance, functioning as disguise self but able to affect a target other than yourself.",
  "source": "Complete Mage, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Glamer"
},
{
  "id": "dimension-jumper",
  "name": "Dimension Jumper",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Bard": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You and objects touched",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "For the duration, you can teleport yourself up to 30 feet once per round as a move action, carrying objects up to your maximum load.",
  "source": "Complete Mage, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Teleportation"
},
{
  "id": "dimension-jumper-greater",
  "name": "Dimension Jumper, Greater",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You and objects touched",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "As dimension jumper, except that you teleport as a swift action and the range extends to 60 feet.",
  "source": "Complete Mage, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Teleportation",
  "note": "Abbreviated entry in Complete Mage: functions as Dimension Jumper except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "discordant-malediction",
  "name": "Discordant Malediction",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Bard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "1 creature",
  "duration": "24 hours",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Curses the subject’s voice: each time she casts a spell with a verbal component, she deals 2d6 points of sonic damage to all creatures within 10 feet (including herself) and must concentrate to avoid losing the spell.",
  "source": "Complete Mage, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "doublespeak",
  "name": "Doublespeak",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 2
  },
  "components": "S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "You plus one creature touched/4 levels",
  "duration": "1 minute/level (D)",
  "savingThrow": "Will negates (harmless, target) or Will disbelief (if interacted with, everyone else)",
  "spellResistance": "Yes (harmless)",
  "summary": "The subjects can speak about anything they like, but everyone else hears only mundane conversation about the weather, the food, and similar small talk.",
  "source": "Complete Mage, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Glamer"
},
{
  "id": "dreaded-form-of-the-eye-tyrant",
  "name": "Dreaded Form of the Eye Tyrant",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 8
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Your body withers away, leaving a floating, oversized head with a single central eye and ten writhing eyestalks: you take the form of a beholder and gain 30 temporary hit points.",
  "source": "Complete Mage, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Polymorph"
},
{
  "id": "genius-loci",
  "name": "Genius Loci",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 hour",
  "range": "Touch",
  "targetOrArea": "One building, location, or discernible geographic area, up to a maximum area of one 10-ft. cube/ caster level",
  "duration": "Permanent",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You awaken the spirit of a building, location, or geographic area, creating a permanent guardian presence bound to that place.",
  "source": "Complete Mage, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "heart-of-fire",
  "name": "Heart of Fire",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 5,
    "Wu Jen": 5
  },
  "components": "V, S",
  "castingTime": "standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour/ level (D) or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Part of your body becomes elemental fire: you gain a +10-foot enhancement bonus to land speed and fire resistance 20, and you can activate a fire shield effect while the spell lasts.",
  "source": "Complete Mage, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "heart-of-water",
  "name": "Heart of Water",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Water"
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
  "duration": "1 hour/level (D) or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Part of your body becomes elemental water: you gain a swim speed equal to your land speed and can slip through confined spaces like water.",
  "source": "Complete Mage, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "hood-of-the-cobra",
  "name": "Hood of the Cobra",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Hexblade": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 round/3 levels; see text",
  "savingThrow": "Will disbelief, then Fortitude negates",
  "spellResistance": "Yes",
  "summary": "In the subject’s mind, you grow a cobra’s hood, serpent eyes, and venomous fangs, terrifying the victim who perceives your serpentine transformation.",
  "source": "Complete Mage, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Phantasm"
},
{
  "id": "horrid-sickness",
  "name": "Horrid Sickness",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Hexblade": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature/3 levels, no two of which are more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Waves of pain and sickness render the subjects nauseated; a subject may attempt a new Fortitude save as a move action each round to end the effect.",
  "source": "Complete Mage, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "immediate-assistance",
  "name": "Immediate Assistance",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 1
  },
  "components": "V",
  "castingTime": "1 immediate action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One willing creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You grant the subject a chance to reroll a skill check, casting after the roll but before success or failure is determined.",
  "source": "Complete Mage, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Compulsion"
},
{
  "id": "incendiary-slime",
  "name": "Incendiary Slime",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One object or a 10-ft. square",
  "duration": "1 round/level (D)",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Functions as grease, except the liquid is highly flammable: any fire damage in the area makes it burst into flame, dealing 4d6 points of damage and ending the spell.",
  "source": "Complete Mage, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation",
  "note": "Complete Mage prints this spell in abbreviated form (\"functions as\" grease (Player's Handbook)); the remaining stat-block fields follow that spell as the book directs."
},
{
  "id": "incendiary-surge",
  "name": "Incendiary Surge",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "Deals 1d6 points of fire damage per caster level (maximum 10d6) to all creatures in the area; casting it again before the end of your next turn uses larger damage dice.",
  "source": "Complete Mage, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "interminable-echo",
  "name": "Interminable Echo",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "5 rounds",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "The tolling of a bell fills the target’s mind: a -10 penalty on Listen checks and 2d6 points of sonic damage each round.",
  "source": "Complete Mage, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Phantasm"
},
{
  "id": "jet-of-steam",
  "name": "Jet of Steam",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Water"
  ],
  "levels": {
    "Sorcerer/Wizard": 1,
    "Wu Jen": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "30-ft. line",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "A jet of superheated steam bursts from your finger, dealing 1d4 points of fire damage per caster level (maximum 5d4) to each creature in its area; it does not damage objects.",
  "source": "Complete Mage, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "karmic-aura",
  "name": "Karmic Aura",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Hexblade": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V",
  "castingTime": "1 swift action",
  "range": "20 ft.",
  "targetOrArea": "20-ft.-radius emanation, centered on you",
  "duration": "1 round/level",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "While this spell lasts, any creature within range that damages you with an attack, spell, or other effect becomes fatigued for 1 round, unless it saves.",
  "source": "Complete Mage, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "lingering-chorus",
  "name": "Lingering Chorus",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 4
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "0 ft.",
  "targetOrArea": "A chorus of phantasmal voices",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Continues any one bardic music effect you are maintaining that can last longer than 1 round, freeing you to cast spells or use a second bardic music ability.",
  "source": "Complete Mage, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Figment"
},
{
  "id": "lingering-flames",
  "name": "Lingering Flames",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Sorcerer/Wizard": 6,
    "Wu Jen": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "3 rounds",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "Functions as fireball, except the area remains filled with fire for the whole duration, dealing damage to creatures within or entering it.",
  "source": "Complete Mage, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "luminous-swarm",
  "name": "Luminous Swarm",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "5 rounds",
  "savingThrow": "Reflex partial",
  "spellResistance": "Yes",
  "summary": "A swarm of luminous force motes engulfs one creature, imposing a 20% miss chance on its sight-based attacks and dealing force damage each round.",
  "source": "Complete Mage, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "magic-savant",
  "name": "Magic Savant",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Bard": 2
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain a +4 insight bonus on Use Magic Device checks, and with 10 or more ranks in the skill you can take 10 on those checks even under pressure.",
  "source": "Complete Mage, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "mask-of-the-ideal",
  "name": "Mask of the Ideal",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Your voice and features shift toward an ideal form: a +4 competence bonus on Bluff and Diplomacy checks, and on Disguise checks to disguise yourself.",
  "source": "Complete Mage, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Glamer"
},
{
  "id": "melfs-slumber-arrows",
  "name": "Melf's Slumber Arrows",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "1 arrow/3 levels",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "You can imbue an arrow you hold with slumber as a swift action: a creature of 15 HD or less damaged by it before the end of your turn falls asleep.",
  "source": "Complete Mage, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Compulsion"
},
{
  "id": "mordenkainens-trusted-bloodhound",
  "name": "Mordenkainen's Trusted Bloodhound",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Assassin": 4,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Phantom watchdog",
  "duration": "1 hour/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Functions as Mordenkainen’s faithful hound, except the phantom bloodhound can also track a creature as if it had the Track feat, with a Survival modifier equal to your caster level.",
  "source": "Complete Mage, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation",
  "note": "Complete Mage prints this spell in abbreviated form (\"functions as\" Mordenkainen's faithful hound (Player's Handbook)); the remaining stat-block fields follow that spell as the book directs."
},
{
  "id": "mysterious-redirection",
  "name": "Mysterious Redirection",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 8,
    "Wu Jen": 8
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "5 rounds or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A field around you deflects physical blows: melee and ranged attacks with natural or manufactured weapons are redirected toward other targets.",
  "source": "Complete Mage, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "near-horizon",
  "name": "Near Horizon",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Assassin": 2,
    "Ranger": 2
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "3 rounds",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You take no range penalties when using ranged weapons for the duration, though weapons remain limited to their normal maximum distance.",
  "source": "Complete Mage, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "necrotic-curse",
  "name": "Necrotic Curse",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius emanation",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Imbues an area with negative energy so powerful it inverts healing: anyone casting a healing spell there must succeed on a caster level check or the spell is twisted to its opposite.",
  "source": "Complete Mage, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "nightmare-terrain",
  "name": "Nightmare Terrain",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Assassin": 3,
    "Bard": 3,
    "Hexblade": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Five 10-ft. cubes + one 10-ft. cube/level (S)",
  "duration": "1 round/level",
  "savingThrow": "Will disbelief (if interacted with)",
  "spellResistance": "No",
  "summary": "You cloak your surroundings in a horrific dreamscape of writhing vegetation, disembodied limbs, and animated corpses, making the terrain look, sound, and smell like a nightmare.",
  "source": "Complete Mage, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Shadow"
},
{
  "id": "otilukes-impressing-field",
  "name": "Otiluke's Impressing Field",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 full round",
  "range": "20 ft.",
  "targetOrArea": "20-ft.-radius emanation, centered on you",
  "duration": "10 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You radiate a field that suppresses spells of a school or subtype you designate: casting such a spell in or into the area requires a successful caster level check.",
  "source": "Complete Mage, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "ottos-imperative-ambulation",
  "name": "Otto's Imperative Ambulation",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 3
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round/3 levels",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The subject must begin each of its turns by taking a move action to move at least 10 feet, provoking attacks of opportunity as normal.",
  "source": "Complete Mage, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Compulsion"
},
{
  "id": "painful-echoes",
  "name": "Painful Echoes",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Bard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature/4 levels, no two of which are more than 30 ft. apart",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Painful vibrations pummel your subjects each round, dealing sonic damage and sickening them for 1 round; a successful Fortitude save negates both.",
  "source": "Complete Mage, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "pall-of-twilight",
  "name": "Pall of Twilight",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Assassin": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "A creeping pall of darkness reduces illumination to shadowy and imposes a -10 penalty on Listen, Search, Sense Motive, and Spot checks for creatures in the area.",
  "source": "Complete Mage, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Pattern"
},
{
  "id": "phantasmal-strangler",
  "name": "Phantasmal Strangler",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Hexblade": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "5 rounds",
  "savingThrow": "Will disbelief",
  "spellResistance": "Yes",
  "summary": "You fashion a nightmare creature from the subject’s own mind that clings and chokes him; only the subject can sense the assailant.",
  "source": "Complete Mage, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Phantasm"
},
{
  "id": "prickling-torment",
  "name": "Prickling Torment",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Druid": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "5 rounds",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The subject’s skin erupts in a blistering, maddening rash: the creature is sickened, and takes damage whenever it takes more than a free, swift, or immediate action on its turn.",
  "source": "Complete Mage, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "prismatic-aura",
  "name": "Prismatic Aura",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level or until discharged (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A flashing aura of many colors grants you concealment, and any creature that hits you with a nonreach melee weapon is subject to a random prismatic effect.",
  "source": "Complete Mage, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "prismatic-bow",
  "name": "Prismatic Bow",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 8
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "0 ft.",
  "targetOrArea": "A longbow made up of swirling, prismatic colors",
  "duration": "1 minute/level or until discharged",
  "savingThrow": "See text",
  "spellResistance": "Yes",
  "summary": "A glittering longbow of every hue appears in your hands, functioning as a +1 longbow; once per round you can imbue an arrow shot from it with one of the seven prismatic colors.",
  "source": "Complete Mage, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "prismatic-deluge",
  "name": "Prismatic Deluge",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Cylinder (40-ft. radius, 80-ft. high)",
  "duration": "Instantaneous",
  "savingThrow": "See text",
  "spellResistance": "Yes",
  "summary": "You call an enormous rainbow from the heavens: every creature in the area is affected as though by prismatic spray.",
  "source": "Complete Mage, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "rain-of-spines",
  "name": "Rain of Spines",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Cylinder (5-ft. radius, 20 ft. high)",
  "duration": "Instantaneous",
  "savingThrow": "Reflex partial",
  "spellResistance": "No",
  "summary": "A storm of small piercing metallic projectiles rains down, dealing 6d6 points of damage to each creature in the area and pinning them to the floor.",
  "source": "Complete Mage, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "rarys-arcane-conversion",
  "name": "Rary's Arcane Conversion",
  "ruleset": "core",
  "school": "Universal",
  "descriptors": [],
  "levels": {
    "Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 full round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Allows you to exchange a prepared wizard spell for another spell of equal or lower level.",
  "source": "Complete Mage, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "reaving-aura",
  "name": "Reaving Aura",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Assassin": 1,
    "Cleric": 1,
    "Hexblade": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V",
  "castingTime": "1 swift action",
  "range": "10 ft.",
  "targetOrArea": "10-ft.-radius emanation, centered on you",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Negative energy floods the air around you: every creature in the area at 0 or fewer hit points takes 1 point of damage, so the stable become dying and those at -9 die.",
  "source": "Complete Mage, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "rebirth-of-iron",
  "name": "Rebirth of Iron",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4,
    "Wu Jen": 3
  },
  "components": "V, S",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "One former metallic item, destroyed by rust",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "You instantly restore a single metal object damaged or destroyed by rust, even one reduced to powder by a rusting grasp spell.",
  "source": "Complete Mage, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "repelling-shield",
  "name": "Repelling Shield",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Functions as shield, except that any adjacent creature that makes a melee attack against you is also pushed away from you after the attack (Reflex negates).",
  "source": "Complete Mage, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "resinous-tar",
  "name": "Resinous Tar",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One object or 10-ft. square",
  "duration": "1 round/level (D)",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "A sticky layer of black liquid coats the target: movement costs across the area are doubled, and prone creatures must succeed on a Strength check to stand.",
  "source": "Complete Mage, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "resonating-agony",
  "name": "Resonating Agony",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Bard": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Your touch attack sets up agonizing vibrations in the target’s body: the target is nauseated, with a Fortitude save each round to end the effect.",
  "source": "Complete Mage, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "resounding-thunder",
  "name": "Resounding Thunder",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Bard": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100ft. + 10 ft/level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "5 rounds (D)",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Discordant crashes of sonic energy deal 4d6 points of sonic damage per round to creatures in the area and deafen those within or entering it.",
  "source": "Complete Mage, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "retributive-enervation",
  "name": "Retributive Enervation",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level or until expended",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A sheath of crackling negative energy bestows a negative level on any non-undead creature that successfully strikes you in melee; there is no save, but spell resistance applies.",
  "source": "Complete Mage, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "retributive-image",
  "name": "Retributive Image",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Visual image that can extend as far as four 10-ft. cubes + one 10-ft. cube/level (S)",
  "duration": "Concentration + 3 rounds",
  "savingThrow": "Will disbelief (if interacted with), then Will partial",
  "spellResistance": "Yes",
  "summary": "Creates an image or scene with sight, sound, smell, and thermal effects, functioning as major image except that the illusion is a pattern rather than a figment.",
  "source": "Complete Mage, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Pattern"
},
{
  "id": "rusted-blade",
  "name": "Rusted Blade",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Assassin": 3,
    "Druid": 3,
    "Sorcerer/Wizard": 4,
    "Wu Jen": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One weapon touched",
  "duration": "1 round/level (D)",
  "savingThrow": "Will negates (object, harmless) and Fortitude negates",
  "spellResistance": "Yes (object, harmless)",
  "summary": "Your touch coats the target weapon in a rustlike patina: living creatures damaged by it are affected as the full text describes, regardless of the weapon’s material.",
  "source": "Complete Mage, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "seed-of-undeath",
  "name": "Seed of Undeath",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "Living humanoid or animal touched",
  "duration": "1 day/level (D)",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "You plant a kernel of negative energy in the subject, held in check by the subject’s life force; should the subject die while the spell lasts, undeath takes root.",
  "source": "Complete Mage, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "seed-of-undeath-greater",
  "name": "Seed of Undeath, Greater",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "40-ft.-radius emanation",
  "duration": "1 day/level (D)",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Functions as seed of undeath, except it applies to any humanoid or animal that dies in the area while the spell is in effect.",
  "source": "Complete Mage, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "note": "Abbreviated entry in Complete Mage: functions as Seed of Undeath except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "shape-of-the-hellspawned-stalker",
  "name": "Shape of the Hellspawned Stalker",
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
  "summary": "You take the form of a hell hound, gaining 10 temporary hit points for the duration.",
  "source": "Complete Mage, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Polymorph"
},
{
  "id": "smoky-confinement",
  "name": "Smoky Confinement",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Your touch transforms the subject into smoke or gas, which flows into a prepared receptacle where the victim remains trapped, unaware and ageless, until it is broken or opened.",
  "source": "Complete Mage, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "steal-summoning",
  "name": "Steal Summoning",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 immediate action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One summoned creature",
  "duration": "Concentration (up to 1 round/level) + 1 round",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You steal control of a creature as it is being summoned, wresting the connection between summoner and minion with a caster level check.",
  "source": "Complete Mage, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Summoning"
},
{
  "id": "storm-of-fire-and-ice",
  "name": "Storm of Fire and Ice",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold",
    "Fire"
  ],
  "levels": {
    "Druid": 6,
    "Sorcerer/Wizard": 6,
    "Wu Jen": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Cylinder (20-ft. radius, 40 ft. high)",
  "duration": "1 round",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "A shower of lava globs and hailstones rains down for 1 round, dealing 6d6 points of cold damage and 6d6 points of fire damage to everything in the area.",
  "source": "Complete Mage, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "storm-of-needles",
  "name": "Storm of Needles",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Wu Jen": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "No",
  "summary": "A burst of thousands of tiny needles fills the cone, dealing 1d4 points of damage per caster level (maximum 15d4).",
  "source": "Complete Mage, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "summon-component",
  "name": "Summon Component",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "S",
  "castingTime": "1 swift action",
  "range": "0 ft.",
  "targetOrArea": "Noncostly material component for a single spell",
  "duration": "1 round",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You conjure the material component or components for a single spell that you can cast, worth no more than 1 gold piece and never a magic item.",
  "source": "Complete Mage, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Summoning"
},
{
  "id": "summon-weapon",
  "name": "Summon Weapon",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Assassin": 2,
    "Bard": 2
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "0 ft .",
  "targetOrArea": "Nonmagical light weapon",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You conjure a nonmagical light weapon sized for you, normal in every respect and made of no unusual metal.",
  "source": "Complete Mage, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Summoning"
},
{
  "id": "tactical-teleportation",
  "name": "Tactical Teleportation",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One willing creature/3 levels",
  "duration": "Instantaneous",
  "savingThrow": "None and Will negates (object)",
  "spellResistance": "No and Yes",
  "summary": "You instantly teleport a number of willing creatures a short distance with no chance of mishap, repositioning them to tactically viable spots.",
  "source": "Complete Mage, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Teleportation"
},
{
  "id": "tenacious-dispelling",
  "name": "Tenacious Dispelling",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature or object, or 20-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Functions as a targeted dispel magic; if you cast it again before the end of your next turn, the second casting is stronger.",
  "source": "Complete Mage, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "torrent-of-tears",
  "name": "Torrent of Tears",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2,
    "Wu Jen": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "5 rounds",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Tears pour from the subject’s eyes as his body is wracked with sobs: the subject is sickened and blinded for the duration; a successful Will save negates.",
  "source": "Complete Mage, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Compulsion"
},
{
  "id": "touch-of-the-graveborn",
  "name": "Touch of the Graveborn",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 8
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature or creatures touched (up to one/3 levels)",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial or Will negates",
  "spellResistance": "Yes",
  "summary": "Your melee touch attacks channel negative energy dealing 10d6 points of damage, usable once per three levels.",
  "source": "Complete Mage, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "touch-of-vecna",
  "name": "Touch of Vecna",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil",
    "Fear"
  ],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "1 round and permanent",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Your touch bestows negative energy, dealing 1d8 points of damage +1 per caster level (maximum +10) and rendering the target shaken for 1 round.",
  "source": "Complete Mage, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "touch-of-years",
  "name": "Touch of Years",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "1 day/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Your touch drops a weight of years on the subject, draining Strength, Dexterity, and Constitution; a successful Fortitude save negates.",
  "source": "Complete Mage, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
{
  "id": "towering-thunderhead",
  "name": "Towering Thunderhead",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Air"
  ],
  "levels": {
    "Druid": 9,
    "Sorcerer/Wizard": 9
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Cylinder (40-ft. radius, 60 ft. high)",
  "duration": "3 rounds (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "An enormous cylinder of roiling dark clouds provides concealment like fog cloud, with contrary winds like a wind wall and sheets of lightning.",
  "source": "Complete Mage, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "toxic-tongue",
  "name": "Toxic Tongue",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Assassin": 3
  },
  "components": "V, S",
  "castingTime": "1 standard",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level sickly black fluid dribbles from the corner of your mouth.",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You create a virulent poison in your mouth, which you can spit at a foe up to 30 feet away or apply to a weapon.",
  "source": "Complete Mage, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf",
  "subschool": "Creation"
},
{
  "id": "transcend-mortality",
  "name": "Transcend Mortality",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Wu Jen": 9
  },
  "components": "V, S",
  "castingTime": "1 immediate action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "For the duration you are all but indestructible, gaining damage reduction 30/epic, spell resistance, and a host of divine defenses — at a terrible price when the spell ends.",
  "source": "Complete Mage, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf"
},
];
