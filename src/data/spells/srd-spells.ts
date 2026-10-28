import type { SpellDefinition } from "@/engine/types";

// SRD core spells (ruleset "core"), authored from the System Reference
// Document and verified against the d20srd.org class/domain spell-list
// pages on 2026-10-28. Where Spell Compendium reprints a spell, the SC
// version governs and the SRD record is omitted (see REBUILD-NOTES.md).
export const SRD_SPELLS: SpellDefinition[] = [
  {
    "id": "acid-arrow",
    "name": "Acid Arrow",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One arrow of acid",
    "duration": "1 round + 1 round per three levels",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A magical arrow of acid deals 2d4 acid damage on a ranged touch hit and keeps dealing 2d4 damage each round for several rounds.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/acidArrow.htm",
    "subschool": "Creation"
  },
  {
    "id": "acid-fog",
    "name": "Acid Fog",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 6,
      "Water": 7
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Fog spread 20 ft. radius, 20 ft. high",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Like solid fog, plus 2d6 acid damage per round to creatures and objects inside.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/acidFog.htm",
    "subschool": "Creation"
  },
  {
    "id": "acid-splash",
    "name": "Acid Splash",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Hurls a small orb of acid dealing 1d3 acid damage on a ranged touch attack.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/acidSplash.htm",
    "subschool": "Creation"
  },
  {
    "id": "aid",
    "name": "Aid",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Grants +1 morale on attacks and fear saves plus 1d8+1/level (max +10) temporary hit points.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/aid.htm",
    "subschool": "Healing"
  },
  {
    "id": "air-walk",
    "name": "Air Walk",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "The subject treads on air as if walking on solid ground, ascending or descending at up to 45 degrees.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/airWalk.htm"
  },
  {
    "id": "alarm",
    "name": "Alarm",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius emanation centered on a point in space",
    "duration": "2 hours/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Wards an area; creatures entering without the password trigger a mental or audible alarm.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/alarm.htm"
  },
  {
    "id": "align-weapon",
    "name": "Align Weapon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Makes a weapon chaotic, evil, good, or lawful for overcoming damage reduction.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/alignWeapon.htm"
  },
  {
    "id": "alter-self",
    "name": "Alter Self",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Assume the form of a similar creature of your type, gaining mundane physical qualities like wings or gills.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/alterSelf.htm"
  },
  {
    "id": "analyze-dweomer",
    "name": "Analyze Dweomer",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One object or creature per caster level",
    "duration": "1 round/level (D)",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "No",
    "summary": "Reveals all spells and magic functionings on creatures and objects, one per round of study.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/analyzeDweomer.htm"
  },
  {
    "id": "animal-growth",
    "name": "Animal Growth",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Ranger": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to one animal per two levels, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Doubles an animal's size: +8 size bonus to Strength, +4 Constitution, -2 Dexterity, +2 natural armor, and bigger natural weapons.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/animalGrowth.htm"
  },
  {
    "id": "animal-messenger",
    "name": "Animal Messenger",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 2,
      "Ranger": 1,
      "Bard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One Tiny animal",
    "duration": "One day/level",
    "savingThrow": "None; see text",
    "spellResistance": "Yes",
    "summary": "Compels a Tiny animal to carry a message to a place you name and wait for a recipient.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/animalMessenger.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "animal-trance",
    "name": "Animal Trance",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 2,
      "Druid": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Animals or magical beasts with Int 1 or 2",
    "duration": "Concentration",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Fascinates animals with song or gestures so they take no actions while you concentrate.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/animalTrance.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "animate-dead",
    "name": "Animate Dead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One or more corpses touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates skeletons and zombies from corpses; you control up to 4 HD of undead per caster level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/animateDead.htm"
  },
  {
    "id": "animate-objects",
    "name": "Animate Objects",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 6,
      "Chaos": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One Small object per caster level; see text",
    "duration": "1 round/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Animates objects that attack your enemies as constructs under your direction.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/animateObjects.htm"
  },
  {
    "id": "animate-rope",
    "name": "Animate Rope",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One rope-like object, length up to 50 ft. + 5 ft./level",
    "duration": "1 round/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Animates a rope to coil, knot, trip, or entangle creatures as you direct.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/animateRope.htm"
  },
  {
    "id": "antilife-shell",
    "name": "Antilife Shell",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 6,
      "Animal": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A mobile barrier that keeps all living creatures out, though it collapses if you force it against them.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/antilifeShell.htm"
  },
  {
    "id": "antimagic-field",
    "name": "Antimagic Field",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 6,
      "Magic": 6,
      "Protection": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "See text",
    "summary": "Suppresses all magic within 10 feet of you: no spells, supernatural abilities, or magic items function.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/antimagicField.htm"
  },
  {
    "id": "arcane-eye",
    "name": "Arcane Eye",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Unlimited",
    "targetOrArea": "Invisible magical sensor at a point in space",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an invisible floating eye that flies where you direct, showing you what it sees.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/arcaneEye.htm",
    "subschool": "Scrying"
  },
  {
    "id": "arcane-lock",
    "name": "Arcane Lock",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "The door, chest, or portal touched, up to 30 sq. ft./level in size",
    "duration": "Permanent",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Locks a portal so only you can pass freely; others need knock, dispel, or a much higher caster level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/arcaneLock.htm"
  },
  {
    "id": "arcane-mark",
    "name": "Arcane Mark",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "One personal rune or mark (up to six characters)",
    "duration": "Permanent",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Inscribe your invisible or visible personal rune on a surface or creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/arcaneMark.htm"
  },
  {
    "id": "arcane-sight",
    "name": "Arcane Sight",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your eyes glow blue and you see magical auras like detect magic, without concentrating.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/arcaneSight.htm"
  },
  {
    "id": "arcane-sight-greater",
    "name": "Arcane Sight, Greater",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As arcane sight, but you also learn spellcasting ability and caster levels of creatures, and identify spells in place.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/arcaneSightGreater.htm"
  },
  {
    "id": "astral-projection",
    "name": "Astral Projection",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9,
      "Travel": 9
    },
    "components": "V, S, M",
    "castingTime": "30 minutes",
    "range": "Touch",
    "targetOrArea": "You plus one additional willing creature per two levels",
    "duration": "See text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Projects your astral forms to other planes, leaving your bodies in suspended animation on the Material Plane.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/astralProjection.htm"
  },
  {
    "id": "atonement",
    "name": "Atonement",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Druid": 5
    },
    "components": "V, S, M, DF, XP",
    "castingTime": "1 hour",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Redeems a creature of its misdeeds, restoring alignment and class standing after sincere contrition.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/atonement.htm"
  },
  {
    "id": "augury",
    "name": "Augury",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S, M, F",
    "castingTime": "1 minute",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals whether a planned action will bring weal, woe, both, or neither in the next half hour.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/augury.htm"
  },
  {
    "id": "awaken",
    "name": "Awaken",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, DF, XP",
    "castingTime": "24 hours",
    "range": "Touch",
    "targetOrArea": "Animal or tree touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Awakens an animal or tree to humanlike sentience, friendly to you, with its own new ability scores.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/awaken.htm"
  },
  {
    "id": "baleful-polymorph",
    "name": "Baleful Polymorph",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Permanent",
    "savingThrow": "Fortitude negates, Will partial; see text",
    "spellResistance": "Yes",
    "summary": "Transforms the subject into a harmless 1-HD animal form permanently, possibly taking its mind too.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/balefulPolymorph.htm"
  },
  {
    "id": "bane",
    "name": "Bane",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "50 ft.",
    "targetOrArea": "All enemies within 50 ft.",
    "duration": "1 minute/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Fills your enemies with fear and doubt: -1 on attacks and saves against fear.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/bane.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "banishment",
    "name": "Banishment",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more extraplanar creatures, no two more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Drives up to 2 HD/level of extraplanar creatures back to their home planes; special items add to the DC.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/banishment.htm"
  },
  {
    "id": "barkskin",
    "name": "Barkskin",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Hardens skin to bark: +2 natural armor enhancement, +1 per three levels above 3rd (max +5).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/barkskin.htm"
  },
  {
    "id": "bears-endurance",
    "name": "Bear's Endurance",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 2,
      "Ranger": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes",
    "summary": "Grants a +4 enhancement bonus to Constitution.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/bearsEndurance.htm"
  },
  {
    "id": "bears-endurance-mass",
    "name": "Bear's Endurance, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As bear's endurance (+4 Constitution), but affects one creature per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/bearsEnduranceMass.htm"
  },
  {
    "id": "bestow-curse",
    "name": "Bestow Curse",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Permanent",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Curses the target: -6 to an ability, -4 on attacks/saves/checks, or 50% chance to lose each action.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/bestowCurse.htm"
  },
  {
    "id": "binding",
    "name": "Binding",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "See text (D)",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "A versatile magical imprisonment: chaining, slumber, metamorphosis, or a minimus containment sphere, by components chosen.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/binding.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "black-tentacles",
    "name": "Black Tentacles",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius spread",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Rubbery tentacles fill the area, grappling creatures (grapple +8 + caster level) and dealing 1d6+4 damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/blackTentacles.htm",
    "subschool": "Creation"
  },
  {
    "id": "blade-barrier",
    "name": "Blade Barrier",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Cleric": 6,
      "War": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Wall of whirling blades up to 20 ft. long/level, or ring up to 5 ft. radius/2 levels by 20 ft. high",
    "duration": "1 minute/level (D)",
    "savingThrow": "Reflex half or negates; see text",
    "spellResistance": "Yes",
    "summary": "A wall of whirling blades deals 1d6/level damage (max 15d6) to creatures passing through.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/bladeBarrier.htm"
  },
  {
    "id": "blasphemy",
    "name": "Blasphemy",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Evil",
      "Sonic"
    ],
    "levels": {
      "Cleric": 7,
      "Evil": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "Nonevil creatures in a 40-ft.-radius spread centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Nonevil creatures are dazed, weakened, paralyzed, or killed and banished, by their HD relative to yours.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/blasphemy.htm"
  },
  {
    "id": "bless",
    "name": "Bless",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "50 ft.",
    "targetOrArea": "All allies within 50 ft.",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Allies gain +1 morale on attacks and on saves against fear.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/bless.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "bless-weapon",
    "name": "Bless Weapon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Touched weapon becomes good-aligned for overcoming damage reduction and confirms crits against evil foes automatically.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/blessWeapon.htm"
  },
  {
    "id": "blight",
    "name": "Blight",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One plant or plant creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "Withers a plant creature for 1d6/level damage, or destroys ordinary plant life in an area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/blight.htm"
  },
  {
    "id": "blindness-deafness",
    "name": "Blindness/Deafness",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 3,
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "Permanent (D)",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Renders the target blind or deaf, permanently unless cured.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/blindnessDeafness.htm"
  },
  {
    "id": "blink",
    "name": "Blink",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You flicker between the Material and Ethereal planes: attacks against you have a 50% miss chance and you strike as invisible.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/blink.htm"
  },
  {
    "id": "blur",
    "name": "Blur",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your outline becomes blurred, granting concealment (20% miss chance).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/blur.htm",
    "subschool": "Glamer"
  },
  {
    "id": "break-enchantment",
    "name": "Break Enchantment",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Cleric": 5,
      "Paladin": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to one creature per level, all within 30 ft. of each other",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Frees victims from enchantments, transmutations, and curses with a caster level check (max +15).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/breakEnchantment.htm"
  },
  {
    "id": "bulls-strength",
    "name": "Bull's Strength",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 2,
      "Paladin": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +4 enhancement bonus to Strength.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/bullsStrength.htm"
  },
  {
    "id": "bulls-strength-mass",
    "name": "Bull's Strength, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As bull's strength (+4 Strength), but affects one creature per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/bullsStrengthMass.htm"
  },
  {
    "id": "burning-hands",
    "name": "Burning Hands",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "15 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A cone of flame deals 1d4 fire damage per level (max 5d4).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/burningHands.htm"
  },
  {
    "id": "calm-animals",
    "name": "Calm Animals",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Animals within 30 ft. of each other",
    "duration": "1 minute/level",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Calms aggressive animals, making them indifferent.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/calmAnimals.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "calm-emotions",
    "name": "Calm Emotions",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Creatures in a 20-ft.-radius burst",
    "duration": "Concentration, up to 1 round/level (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Calms agitated creatures, negating emotion effects, fear, and confusion while it lasts.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/calmEmotions.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "cats-grace",
    "name": "Cat's Grace",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Druid": 2,
      "Ranger": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +4 enhancement bonus to Dexterity.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/catsGrace.htm"
  },
  {
    "id": "cats-grace-mass",
    "name": "Cat's Grace, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Druid": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As cat's grace (+4 Dexterity), but affects one creature per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/catsGraceMass.htm"
  },
  {
    "id": "cause-fear",
    "name": "Cause Fear",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature with 5 or fewer HD",
    "duration": "1d4 rounds or 1 round; see text",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "One low-HD creature becomes frightened, or shaken on a successful save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/causeFear.htm"
  },
  {
    "id": "chain-lightning",
    "name": "Chain Lightning",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 6,
      "Air": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One primary target, plus one secondary target per level (each within 30 ft. of the primary)",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Lightning strikes the primary target for 1d6/level (max 20d6), then arcs to secondary targets for half.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/chainLightning.htm"
  },
  {
    "id": "changestaff",
    "name": "Changestaff",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Your touched staff",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Transforms your quarterstaff into a treant-like creature under your control for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/changestaff.htm"
  },
  {
    "id": "chaos-hammer",
    "name": "Chaos Hammer",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Chaotic",
      "Sonic"
    ],
    "levels": {
      "Chaos": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A wave of chaotic energy deals 1d8 damage per two levels (max 10d8) to lawful creatures, slowing them on a failed save; extra damage to lawful outsiders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/chaosHammer.htm"
  },
  {
    "id": "charm-animal",
    "name": "Charm Animal",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One animal",
    "duration": "1 hour/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Makes one animal regard you as a trusted friend.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/charmAnimal.htm",
    "subschool": "Charm"
  },
  {
    "id": "charm-monster",
    "name": "Charm Monster",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1 day/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Makes any creature regard you as a trusted friend and ally.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/charmMonster.htm",
    "subschool": "Charm"
  },
  {
    "id": "charm-monster-mass",
    "name": "Charm Monster, Mass",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more creatures, no two more than 30 ft. apart",
    "duration": "1 day/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As charm monster, but any number of creatures within the area regard you as a friend.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/charmMonsterMass.htm",
    "subschool": "Charm"
  },
  {
    "id": "charm-person",
    "name": "Charm Person",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One humanoid creature",
    "duration": "1 hour/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Makes one humanoid regard you as a trusted friend and ally.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/charmPerson.htm",
    "subschool": "Charm"
  },
  {
    "id": "chill-metal",
    "name": "Chill Metal",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Metal equipment of one creature per two levels, no two within 30 ft.",
    "duration": "7 rounds",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Chills metal equipment so it damages those wearing or holding it over 7 rounds.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/chillMetal.htm"
  },
  {
    "id": "chill-touch",
    "name": "Chill Touch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature or creatures touched (up to one/level)",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial or Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Your touch deals 1d6 cold damage and possibly 1 Strength damage; usable once per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/chillTouch.htm"
  },
  {
    "id": "circle-of-death",
    "name": "Circle of Death",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death"
    ],
    "levels": {
      "Sorcerer/Wizard": 6,
      "Death": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Several living creatures within a 40-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Slays 1d4 HD per level of the weakest living creatures in the area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/circleOfDeath.htm"
  },
  {
    "id": "clairaudience-clairvoyance",
    "name": "Clairaudience/Clairvoyance",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F/DF",
    "castingTime": "10 minutes",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Magical sensor at a known or obvious location",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an invisible sensor that lets you hear or see (your choice) at a distant location.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/clairaudienceClairvoyance.htm",
    "subschool": "Scrying"
  },
  {
    "id": "clenched-fist",
    "name": "Clenched Fist",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 8,
      "Strength": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One hand",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A Huge hand of force that interposes, pushes, grapples, or punches for 1d8+11 damage with stunning blows.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/clenchedFist.htm"
  },
  {
    "id": "clone",
    "name": "Clone",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M, F",
    "castingTime": "10 minutes",
    "range": "0 ft.",
    "targetOrArea": "One clone",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Grows a duplicate body; if you die, your soul transfers into it (with level loss) as a backup life.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/clone.htm"
  },
  {
    "id": "cloudkill",
    "name": "Cloudkill",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Poison"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Cloud spread 20 ft. radius, 20 ft. high",
    "duration": "1 minute/level",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "No",
    "summary": "A poisonous fog bank rolls away from you; kills 3 HD or less, 1d4 Con damage to others on failed saves.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/cloudkill.htm",
    "subschool": "Creation"
  },
  {
    "id": "color-spray",
    "name": "Color Spray",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "15 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous; see text",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A vivid cone knocks out, blinds, or stuns creatures depending on their Hit Dice.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/colorSpray.htm",
    "subschool": "Pattern"
  },
  {
    "id": "command",
    "name": "Command",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Language-Dependent",
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1 round",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Give one creature a single-word order — approach, drop, fall, flee, or halt — for 1 round.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/command.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "command-plants",
    "name": "Command Plants",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Ranger": 4
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to 2 HD of plant creatures per level, no two more than 30 ft. apart",
    "duration": "1 day/level",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "Plant creatures obey your spoken commands as if friendly to you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/commandPlants.htm"
  },
  {
    "id": "command-undead",
    "name": "Command Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One undead creature",
    "duration": "1 day/level",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Brings one undead under your control: intelligent undead get a Will save and daily saves to break free; mindless undead obey without a save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/commandUndead.htm"
  },
  {
    "id": "commune",
    "name": "Commune",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, M, DF, XP",
    "castingTime": "10 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your deity answers one yes-or-no question per level, truthfully but briefly.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/commune.htm"
  },
  {
    "id": "commune-with-nature",
    "name": "Commune with Nature",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Ranger": 4
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Learn three facts about the surrounding terrain, plants, minerals, water, and creatures within miles.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/communeWithNature.htm"
  },
  {
    "id": "comprehend-languages",
    "name": "Comprehend Languages",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10 minutes/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You understand all spoken languages and can read text in any language.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/comprehendLanguages.htm"
  },
  {
    "id": "cone-of-cold",
    "name": "Cone of Cold",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 5,
      "Water": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A blast of extreme cold deals 1d6/level cold damage (max 15d6) in a cone.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/coneOfCold.htm"
  },
  {
    "id": "confusion",
    "name": "Confusion",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "All creatures in a 15-ft.-radius burst",
    "duration": "1 round/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Creatures in the area act randomly each round: wander, attack randomly, babble, or strike themselves.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/confusion.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "confusion-lesser",
    "name": "Confusion, Lesser",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1 round",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "One creature acts randomly for 1 round, as the confusion spell.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/confusionLesser.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "consecrate",
    "name": "Consecrate",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius emanation",
    "duration": "2 hours/level",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Fills an area with positive energy: +3 turn checks and penalties for undead within.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/consecrate.htm"
  },
  {
    "id": "contact-other-plane",
    "name": "Contact Other Plane",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V",
    "castingTime": "10 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Concentration",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Contact a demigod or greater power's mind to ask one question per two levels, risking ability damage on failure.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/contactOtherPlane.htm"
  },
  {
    "id": "contagion",
    "name": "Contagion",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Disease",
      "Evil"
    ],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Infects the subject with a filthy, immediately-onset disease of your choice.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/contagion.htm"
  },
  {
    "id": "contingency",
    "name": "Contingency",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M, F",
    "castingTime": "At least 10 minutes; see text",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 day/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Stores a companion spell (5th level or lower) that triggers automatically on a condition you set.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/contingency.htm"
  },
  {
    "id": "continual-flame",
    "name": "Continual Flame",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "Permanent",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a permanent heatless flame on an object that sheds light like a torch.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/continualFlame.htm"
  },
  {
    "id": "control-plants",
    "name": "Control Plants",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 8,
      "Plant": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to 2 HD/level of plant creatures, no two more than 30 ft. apart",
    "duration": "1 round/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Controls the actions of plant creatures, which obey your telepathic commands; suicidal orders are not obeyed.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/controlPlants.htm"
  },
  {
    "id": "control-undead",
    "name": "Control Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7,
      "Death": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to 2 HD of undead per level, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Undead of up to 2 HD/level fall under your control; intelligent undead remember and may retaliate later.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/controlUndead.htm"
  },
  {
    "id": "control-water",
    "name": "Control Water",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Cleric": 4,
      "Druid": 4,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Water in a volume of 10 ft./level by 10 ft./level by 2 ft./level (S)",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Raises or lowers a body of water by 2 feet per level, or parts it to form a trench.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/controlWater.htm"
  },
  {
    "id": "control-weather",
    "name": "Control Weather",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Druid": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "10 minutes; see text",
    "range": "2 miles",
    "targetOrArea": "2-mile-radius circle centered on you",
    "duration": "4d12 hours; see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Change the weather in a 2-mile radius over 10 minutes: precipitation, temperature, wind, even storms by season.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/controlWeather.htm"
  },
  {
    "id": "control-winds",
    "name": "Control Winds",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "40 ft./level",
    "targetOrArea": "40 ft./level radius cylinder, 40 ft. high",
    "duration": "10 minutes/level",
    "savingThrow": "Fortitude negates",
    "spellResistance": "No",
    "summary": "Increase or decrease wind strength by up to three levels within a huge cylinder around you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/controlWinds.htm"
  },
  {
    "id": "create-food-and-water",
    "name": "Create Food and Water",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Food and water for three humans or one horse per level",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates wholesome food and water sufficient for three humans per level for a day.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/createFoodAndWater.htm",
    "subschool": "Creation"
  },
  {
    "id": "create-greater-undead",
    "name": "Create Greater Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8,
      "Death": 8
    },
    "components": "V, S, M",
    "castingTime": "1 hour",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One corpse",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a shadow, wraith, spectre, or devourer from a corpse, by caster level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/createGreaterUndead.htm"
  },
  {
    "id": "create-undead",
    "name": "Create Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 6,
      "Death": 6
    },
    "components": "V, S, M",
    "castingTime": "1 hour",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One corpse",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a ghoul, ghast, mummy, or mohrg from a corpse, by caster level; control is not guaranteed.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/createUndead.htm"
  },
  {
    "id": "create-water",
    "name": "Create Water",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Cleric": 0,
      "Druid": 0,
      "Paladin": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to 2 gallons of water/level",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates clean drinkable water, up to 2 gallons per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/createWater.htm",
    "subschool": "Creation"
  },
  {
    "id": "creeping-doom",
    "name": "Creeping Doom",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 7
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to four swarms of centipedes, in total no more than 60 ft. apart",
    "duration": "Concentration + 1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons swarms of centipedes that you direct to attack; each swarm deals damage and poison to creatures in its space.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/creepingDoom.htm",
    "subschool": "Summoning"
  },
  {
    "id": "crushing-despair",
    "name": "Crushing Despair",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "1 minute/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Creatures in the cone take -2 on attacks, saves, checks, and weapon damage from an overwhelming sense of failure.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/crushingDespair.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "crushing-hand",
    "name": "Crushing Hand",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9,
      "Strength": 9
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Hand of force",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "As grasping hand, but the huge hand of force can also grapple and crush the target for heavy damage each round.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/crushingHand.htm",
    "subschool": "Force"
  },
  {
    "id": "cure-critical-wounds",
    "name": "Cure Critical Wounds",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Cleric": 4,
      "Druid": 5,
      "Healing": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless); see text",
    "spellResistance": "Yes (harmless); see text",
    "summary": "Heals 4d8+1/level (max +20) damage; damages undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/cureCriticalWounds.htm",
    "subschool": "Healing"
  },
  {
    "id": "cure-critical-wounds-mass",
    "name": "Cure Critical Wounds, Mass",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Druid": 9,
      "Healing": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless); see text",
    "spellResistance": "Yes (harmless); see text",
    "summary": "As cure critical wounds (4d8 +1/level, max +40) on one creature per level; damages undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/cureCriticalWoundsMass.htm",
    "subschool": "Healing"
  },
  {
    "id": "cure-light-wounds",
    "name": "Cure Light Wounds",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Druid": 1,
      "Paladin": 1,
      "Ranger": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless); see text",
    "spellResistance": "Yes (harmless); see text",
    "summary": "Heals 1d8+1/level (max +5) damage; damages undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/cureLightWounds.htm",
    "subschool": "Healing"
  },
  {
    "id": "cure-light-wounds-mass",
    "name": "Cure Light Wounds, Mass",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Cleric": 5,
      "Druid": 6,
      "Healing": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more creatures, no two more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless) or Will half; see text",
    "spellResistance": "Yes (harmless) or Yes; see text",
    "summary": "Heals 1d8+1/level (max +25) damage to each selected creature; damages undead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/cureLightWoundsMass.htm",
    "subschool": "Healing"
  },
  {
    "id": "cure-minor-wounds",
    "name": "Cure Minor Wounds",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 0,
      "Druid": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Heals 1 point of damage to a touched creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/cureMinorWounds.htm",
    "subschool": "Healing"
  },
  {
    "id": "cure-moderate-wounds",
    "name": "Cure Moderate Wounds",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 2,
      "Druid": 3,
      "Paladin": 3,
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless); see text",
    "spellResistance": "Yes (harmless); see text",
    "summary": "Heals 2d8+1/level (max +10) damage; damages undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/cureModerateWounds.htm",
    "subschool": "Healing"
  },
  {
    "id": "cure-serious-wounds",
    "name": "Cure Serious Wounds",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Cleric": 3,
      "Druid": 4,
      "Paladin": 4,
      "Ranger": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless); see text",
    "spellResistance": "Yes (harmless); see text",
    "summary": "Heals 3d8+1/level (max +15) damage; damages undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/cureSeriousWounds.htm",
    "subschool": "Healing"
  },
  {
    "id": "dancing-lights",
    "name": "Dancing Lights",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Bard": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to four lights within a 10-ft.-radius area",
    "duration": "1 minute (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates up to four floating lights that move as you direct, resembling torches or lanterns.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dancingLights.htm"
  },
  {
    "id": "darkness",
    "name": "Darkness",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Darkness"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Radiates shadowy darkness from an object, granting concealment even against darkvision.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/darkness.htm"
  },
  {
    "id": "darkvision",
    "name": "Darkvision",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Ranger": 3,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 hour/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants the subject darkvision out to 60 feet.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/darkvision.htm"
  },
  {
    "id": "daylight",
    "name": "Daylight",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Bard": 3,
      "Cleric": 3,
      "Druid": 3,
      "Paladin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Object sheds bright light in a 60-foot radius, dispelling darkness effects as a 3rd-level light spell.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/daylight.htm"
  },
  {
    "id": "daze",
    "name": "Daze",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One humanoid creature of 4 HD or less",
    "duration": "1 round",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Dazes a low-HD humanoid so it can take no actions for 1 round.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/daze.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "daze-monster",
    "name": "Daze Monster",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature of 6 HD or less",
    "duration": "1 round",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Dazes any living creature of 6 HD or less so it can take no actions for 1 round.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dazeMonster.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "death-knell",
    "name": "Death Knell",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Evil"
    ],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous/10 minutes per HD of subject; see text",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Slays a dying creature and feeds you 1d8 temporary hp, +2 Str, and +1 caster level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/deathKnell.htm"
  },
  {
    "id": "death-ward",
    "name": "Death Ward",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 5,
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants immunity to death spells, magical death effects, energy drain, and negative energy effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/deathWard.htm"
  },
  {
    "id": "deep-slumber",
    "name": "Deep Slumber",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One or more living creatures within a 10-ft.-radius burst",
    "duration": "1 minute/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Puts up to 10 HD of creatures into a magical slumber.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/deepSlumber.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "deeper-darkness",
    "name": "Deeper Darkness",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Darkness"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "1 day/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Radiates deep shadowy darkness from an object, granting concealment even against darkvision.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/deeperDarkness.htm"
  },
  {
    "id": "delay-poison",
    "name": "Delay Poison",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 2,
      "Druid": 2,
      "Paladin": 2,
      "Ranger": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 hour/level",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Suspends the effects of any poison in the subject's system until the spell ends.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/delayPoison.htm",
    "subschool": "Healing"
  },
  {
    "id": "delayed-blast-fireball",
    "name": "Delayed Blast Fireball",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius spread",
    "duration": "See text",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "As fireball (1d6/level, max 20d6) but you can delay the explosion up to 5 rounds.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/delayedBlastFireball.htm"
  },
  {
    "id": "demand",
    "name": "Demand",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M/DF",
    "castingTime": "10 minutes",
    "range": "See text",
    "targetOrArea": "One creature",
    "duration": "1 round; see text",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "As sending, but the 25-word message carries a suggestion the target may obey on a failed save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/demand.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "desecrate",
    "name": "Desecrate",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius emanation",
    "duration": "2 hours/level",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Fills an area with negative energy: -3 turn checks and profane bonuses for undead within.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/desecrate.htm"
  },
  {
    "id": "destruction",
    "name": "Destruction",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death"
    ],
    "levels": {
      "Cleric": 7,
      "Death": 7,
      "Destruction": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "Slays the target and consumes its body; on a successful save it still takes 10d6 damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/destruction.htm"
  },
  {
    "id": "detect-animals-or-plants",
    "name": "Detect Animals or Plants",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Detects animals or a chosen kind of plant within a long cone.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectAnimalsOrPlants.htm"
  },
  {
    "id": "detect-chaos",
    "name": "Detect Chaos",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals chaotic auras — creatures, spells, and objects — while you concentrate.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectChaos.htm"
  },
  {
    "id": "detect-evil",
    "name": "Detect Evil",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals evil auras — creatures, spells, and objects — while you concentrate.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectEvil.htm"
  },
  {
    "id": "detect-good",
    "name": "Detect Good",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals good auras — creatures, spells, and objects — while you concentrate.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectGood.htm"
  },
  {
    "id": "detect-law",
    "name": "Detect Law",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals lawful auras — creatures, spells, and objects — while you concentrate.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectLaw.htm"
  },
  {
    "id": "detect-magic",
    "name": "Detect Magic",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Cleric": 0,
      "Druid": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals magical auras in a cone; concentration reveals strength and location over several rounds.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectMagic.htm"
  },
  {
    "id": "detect-poison",
    "name": "Detect Poison",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 0,
      "Druid": 0,
      "Paladin": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature, one object, or a 5-ft. cube",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Determines whether a creature or object is poisoned or carries poison.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectPoison.htm"
  },
  {
    "id": "detect-scrying",
    "name": "Detect Scrying",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Cleric": 5,
      "Druid": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "40-ft.-radius emanation centered on you",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Alerts you to magical spying and shows a brief image of the scryer and their surroundings.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectScrying.htm"
  },
  {
    "id": "detect-secret-doors",
    "name": "Detect Secret Doors",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals hidden doors, compartments, and passages in the cone as you concentrate.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectSecretDoors.htm"
  },
  {
    "id": "detect-snares-and-pits",
    "name": "Detect Snares and Pits",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals natural and primitive snares, pits, and deadfalls in the area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectSnaresAndPits.htm"
  },
  {
    "id": "detect-thoughts",
    "name": "Detect Thoughts",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 1 minute/level (D)",
    "savingThrow": "Will negates; see text",
    "spellResistance": "No",
    "summary": "Reads surface thoughts of creatures in the cone; longer concentration reveals more.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectThoughts.htm"
  },
  {
    "id": "detect-undead",
    "name": "Detect Undead",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Paladin": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals undead auras in a cone while you concentrate.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/detectUndead.htm"
  },
  {
    "id": "dictum",
    "name": "Dictum",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Lawful",
      "Sonic"
    ],
    "levels": {
      "Cleric": 7,
      "Law": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "Nonlawful creatures in a 40-ft.-radius spread centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Nonlawful creatures are deafened, slowed, paralyzed, or killed and banished, by their HD relative to yours.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dictum.htm"
  },
  {
    "id": "dimension-door",
    "name": "Dimension Door",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4,
      "Travel": 4
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "You and touched objects or other touched willing creatures",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates (object)",
    "spellResistance": "No or Yes (object)",
    "summary": "Teleport yourself and up to your Medium load / one creature per three levels to a visualized or described destination.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dimensionDoor.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "dimensional-anchor",
    "name": "Dimensional Anchor",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A green ray blocks extradimensional travel: blink, dimension door, teleport, plane shift, and similar effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dimensionalAnchor.htm"
  },
  {
    "id": "dimensional-lock",
    "name": "Dimensional Lock",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius emanation centered on a point in space",
    "duration": "1 day/level",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Bars all dimensional travel into or out of the area: teleport, plane shift, blink, gate, and summoning.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dimensionalLock.htm"
  },
  {
    "id": "diminish-plants",
    "name": "Diminish Plants",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Shrinks normal plants to a third of their size or blights plant growth over a wide area, ruining crops and cover.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/diminishPlants.htm"
  },
  {
    "id": "discern-lies",
    "name": "Discern Lies",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Paladin": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level",
    "duration": "Concentration, up to 1 round/level (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You can tell whether a subject is deliberately lying; evasions and true-but-misleading statements are not detected.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/discernLies.htm"
  },
  {
    "id": "discern-location",
    "name": "Discern Location",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8,
      "Knowledge": 8
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Unlimited",
    "targetOrArea": "One creature or object",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Learns the exact location (place, name, direction) of a creature or object you have seen or touched.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/discernLocation.htm"
  },
  {
    "id": "disguise-self",
    "name": "Disguise Self",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Changes your appearance, including clothing and gear, within your general size and shape.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/disguiseSelf.htm",
    "subschool": "Glamer"
  },
  {
    "id": "disintegrate",
    "name": "Disintegrate",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6,
      "Destruction": 7
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature or object",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial (object)",
    "spellResistance": "Yes",
    "summary": "A green ray deals 2d6/level damage (max 40d6) and reduces the target to dust at 0 hp; 5d6 on a save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/disintegrate.htm"
  },
  {
    "id": "dismissal",
    "name": "Dismissal",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One extraplanar creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Forces an extraplanar creature back to its native plane.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dismissal.htm"
  },
  {
    "id": "dispel-chaos",
    "name": "Dispel Chaos",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Law": 5,
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius burst centered on you",
    "duration": "1 round/level or instantaneous; see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Grants +4 AC and automatic dispel of chaotic creatures' enchantments on touch; also drives chaotic outsiders back.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dispelChaos.htm"
  },
  {
    "id": "dispel-evil",
    "name": "Dispel Evil",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Good": 5,
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius burst centered on you",
    "duration": "1 round/level or instantaneous; see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Grants +4 AC and automatic dispel of evil enchantments on touch; also dismisses evil outsiders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dispelEvil.htm"
  },
  {
    "id": "dispel-good",
    "name": "Dispel Good",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Evil": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius burst centered on you",
    "duration": "1 round/level or instantaneous; see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Grants +4 AC and automatic dispel of good enchantments on touch; also dismisses good outsiders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dispelGood.htm"
  },
  {
    "id": "dispel-law",
    "name": "Dispel Law",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Chaos": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius burst centered on you",
    "duration": "1 round/level or instantaneous; see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Grants +4 AC and automatic dispel of lawful enchantments on touch; also dismisses lawful outsiders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dispelLaw.htm"
  },
  {
    "id": "dispel-magic",
    "name": "Dispel Magic",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Cleric": 3,
      "Druid": 3,
      "Paladin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One spellcaster, creature, or object; or a 20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Ends ongoing spells on a target or area with a dispel check (1d20 + caster level, max +10).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dispelMagic.htm"
  },
  {
    "id": "dispel-magic-greater",
    "name": "Dispel Magic, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Cleric": 6,
      "Druid": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One spellcaster, creature, or object; or a 20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As dispel magic, but the dispel check caps at +20 and a targeted dispel strips every spell on the target.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dispelMagicGreater.htm"
  },
  {
    "id": "displacement",
    "name": "Displacement",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal or touch",
    "targetOrArea": "You or creature touched",
    "duration": "1 round/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subject appears about 2 feet from its true position: attacks against it have a 50% miss chance.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/displacement.htm",
    "subschool": "Glamer"
  },
  {
    "id": "disrupt-undead",
    "name": "Disrupt Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One undead creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray of positive energy deals 1d6 damage to one undead creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/disruptUndead.htm"
  },
  {
    "id": "disrupting-weapon",
    "name": "Disrupting Weapon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One melee weapon",
    "duration": "1 round/level",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "A melee weapon can destroy undead it hits: undead with HD no greater than your caster level must save or be destroyed.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/disruptingWeapon.htm"
  },
  {
    "id": "divination",
    "name": "Divination",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A deity or agent gives a short, useful piece of advice about a specific goal or event within a week (70% + 1%/level accuracy).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/divination.htm"
  },
  {
    "id": "divine-favor",
    "name": "Divine Favor",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Grants you a luck bonus on attack and weapon damage rolls, +1 per three caster levels (max +6).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/divineFavor.htm"
  },
  {
    "id": "divine-power",
    "name": "Divine Power",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "War": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You gain the attack bonus of a fighter, +6 Str enhancement, and 1 temporary hp per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/divinePower.htm"
  },
  {
    "id": "dominate-animal",
    "name": "Dominate Animal",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One animal",
    "duration": "1 round/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Telepathically control one animal, which obeys all but suicidal orders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dominateAnimal.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "dominate-monster",
    "name": "Dominate Monster",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1 day/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Telepathically control any creature, which obeys all but suicidal orders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dominateMonster.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "dominate-person",
    "name": "Dominate Person",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One humanoid",
    "duration": "1 day/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Telepathically control one humanoid, which obeys all but suicidal orders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dominatePerson.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "doom",
    "name": "Doom",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "1 minute/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "One creature becomes shaken (-2 attacks, saves, and checks).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/doom.htm"
  },
  {
    "id": "drawmijs-instant-summons",
    "name": "Drawmij's Instant Summons",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "One object of 10 lb. or less",
    "duration": "Until discharged (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Teleport a marked object into your hand from any distance by crushing its paired gem.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/drawmijsInstantSummons.htm",
    "subschool": "Summoning"
  },
  {
    "id": "dream",
    "name": "Dream",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Unlimited",
    "targetOrArea": "One living creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Send a visual message into a sleeping creature's dreams, which it remembers on waking.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/dream.htm",
    "subschool": "Phantasm"
  },
  {
    "id": "eagles-splendor",
    "name": "Eagle's Splendor",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 2,
      "Paladin": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +4 enhancement bonus to Charisma.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/eaglesSplendor.htm"
  },
  {
    "id": "eagles-splendor-mass",
    "name": "Eagle's Splendor, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As eagle's splendor (+4 Charisma), but affects one creature per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/eaglesSplendorMass.htm"
  },
  {
    "id": "earthquake",
    "name": "Earthquake",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Cleric": 8,
      "Druid": 8,
      "Earth": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "80-ft.-radius spread (S)",
    "duration": "1 round",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "No",
    "summary": "An intense tremor topples structures, opens fissures, and throws creatures prone for 5d6 damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/earthquake.htm"
  },
  {
    "id": "elemental-swarm",
    "name": "Elemental Swarm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Air": 9,
      "Druid": 9,
      "Earth": 9,
      "Fire": 9,
      "Water": 9
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two or more summoned elementals, no two more than 30 ft. apart",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a succession of elementals of one type (air, earth, fire, or water) over the duration, up to a large host.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/elementalSwarm.htm",
    "subschool": "Summoning"
  },
  {
    "id": "endure-elements",
    "name": "Endure Elements",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1,
      "Paladin": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "24 hours",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Touched creature suffers no harm from hot or cold environments between -50 and 140 degrees.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/endureElements.htm"
  },
  {
    "id": "energy-drain",
    "name": "Energy Drain",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A black ray bestows 2d4 negative levels on the target.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/energyDrain.htm"
  },
  {
    "id": "enervation",
    "name": "Enervation",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A black ray bestows 1d4 negative levels on the target.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/enervation.htm"
  },
  {
    "id": "enlarge-person",
    "name": "Enlarge Person",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One humanoid creature",
    "duration": "1 minute/level (D)",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Doubles a humanoid's size: +2 Str, -2 Dex, -1 attacks/AC, larger reach and weapon damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/enlargePerson.htm"
  },
  {
    "id": "entangle",
    "name": "Entangle",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Plant"
    ],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Plants in a 40-ft.-radius spread",
    "duration": "1 minute/level (D)",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "No",
    "summary": "Plants in the area wrap around creatures, entangling them and hindering movement.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/entangle.htm"
  },
  {
    "id": "enthrall",
    "name": "Enthrall",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Language-Dependent",
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Any number of creatures",
    "duration": "1 hour or until completed",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Captivates listeners with oratory or music so they do nothing while you speak or sing.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/enthrall.htm",
    "subschool": "Charm"
  },
  {
    "id": "entropic-shield",
    "name": "Entropic Shield",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A shimmering field gives ranged attacks against you a 20% miss chance.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/entropicShield.htm"
  },
  {
    "id": "erase",
    "name": "Erase",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One scroll or two pages of writing",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Erases mundane or magical writing, including scrolls and explosive runes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/erase.htm"
  },
  {
    "id": "ethereal-jaunt",
    "name": "Ethereal Jaunt",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You become ethereal, moving through objects and unseen by Material Plane creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/etherealJaunt.htm"
  },
  {
    "id": "etherealness",
    "name": "Etherealness",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "You and one other touched creature per three levels",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You and companions become ethereal, traveling the Ethereal Plane while insubstantial on the Material.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/etherealness.htm"
  },
  {
    "id": "expeditious-retreat",
    "name": "Expeditious Retreat",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Increases your base land speed by 30 feet.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/expeditiousRetreat.htm"
  },
  {
    "id": "explosive-runes",
    "name": "Explosive Runes",
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
    "range": "Touch",
    "targetOrArea": "One touched object bearing written information",
    "duration": "Permanent until discharged (D)",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "Written runes explode when read, dealing 6d6 force damage to the reader and nearby creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/explosiveRunes.htm"
  },
  {
    "id": "eyebite",
    "name": "Eyebite",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature per round",
    "duration": "1 round/level; see text",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Each round you gaze at a creature, inflicting sickened, panicked, sleep, or comatose effects by its HD.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/eyebite.htm"
  },
  {
    "id": "fabricate",
    "name": "Fabricate",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "See text",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to 10 cu. ft./level; see text",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Convert raw material into a finished product of the same material with a Craft check.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fabricate.htm"
  },
  {
    "id": "faerie-fire",
    "name": "Faerie Fire",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Creatures and objects within a 5-ft.-radius burst",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Outlines subjects with a pale glow, negating concealment, blur, and invisibility benefits.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/faerieFire.htm"
  },
  {
    "id": "false-life",
    "name": "False Life",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 hour/level or until discharged",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Gain 1d10 + 1/level (max +10) temporary hit points.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/falseLife.htm"
  },
  {
    "id": "false-vision",
    "name": "False Vision",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Circle with a radius of up to 40 ft.",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Sends a false image of your choosing to anyone scrying on the warded area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/falseVision.htm"
  },
  {
    "id": "fear",
    "name": "Fear",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "1 round/level or 1 round; see text",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "Creatures in the cone become panicked, or shaken on a successful save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fear.htm"
  },
  {
    "id": "feather-fall",
    "name": "Feather Fall",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 immediate action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One Medium or smaller freefalling object or creature/level, no two within 20 ft.",
    "duration": "Until landing or 1 round/level",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Subjects fall slowly, at 60 feet per round, taking no falling damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/featherFall.htm"
  },
  {
    "id": "feeblemind",
    "name": "Feeblemind",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Reduces the target's Intelligence and Charisma to 1; arcane casters save at -4.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/feeblemind.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "find-the-path",
    "name": "Find the Path",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 6,
      "Druid": 6,
      "Knowledge": 6
    },
    "components": "V, S, F",
    "castingTime": "3 rounds",
    "range": "Personal or touch",
    "targetOrArea": "You or creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject senses the most direct physical route to a chosen destination, indoors or out.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/findThePath.htm"
  },
  {
    "id": "find-traps",
    "name": "Find Traps",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 min./level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You notice traps as a rogue does, gaining an insight bonus on Search checks to find traps equal to half your caster level (max +10).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/findTraps.htm"
  },
  {
    "id": "finger-of-death",
    "name": "Finger of Death",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death"
    ],
    "levels": {
      "Cleric": 7,
      "Druid": 9,
      "Sorcerer/Wizard": 7,
      "Death": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "Slays the subject; on a successful save it takes 3d6 + 1/level damage instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fingerOfDeath.htm"
  },
  {
    "id": "fire-seeds",
    "name": "Fire Seeds",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 6,
      "Sun": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Up to four acorns or up to eight holly berries",
    "duration": "10 minutes/level",
    "savingThrow": "None or Reflex half; see text",
    "spellResistance": "No",
    "summary": "Turns acorns into grenades (1d8/level split) or holly berries into bombs (1d8 damage each).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fireSeeds.htm",
    "subschool": "Creation"
  },
  {
    "id": "fire-shield",
    "name": "Fire Shield",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire or Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 4,
      "Fire": 5,
      "Sun": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Flames wreathe you, harming attackers for 1d6+1/level and halving fire (warm version) or cold (chill version) damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fireShield.htm"
  },
  {
    "id": "fire-storm",
    "name": "Fire Storm",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Cleric": 7,
      "Druid": 8,
      "Fire": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two 10-ft. cubes per level (S)",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "The whole area bursts into roaring flame for 1d6/level damage; you may leave cubes unaffected.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fireStorm.htm"
  },
  {
    "id": "fire-trap",
    "name": "Fire Trap",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "Permanent until discharged (D)",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Traps an object so opening it bursts fire dealing 1d4 + 1/level damage around it.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fireTrap.htm"
  },
  {
    "id": "fireball",
    "name": "Fireball",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius spread",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A bead streaks to the target point and bursts into flame dealing 1d6/level fire damage (max 10d6).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fireball.htm"
  },
  {
    "id": "flame-arrow",
    "name": "Flame Arrow",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Fifty projectiles, all within 10 ft. of each other",
    "duration": "30 minutes",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Turns up to 50 arrows or bolts into flaming projectiles dealing +1d6 fire damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/flameArrow.htm"
  },
  {
    "id": "flame-blade",
    "name": "Flame Blade",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "Sword-like beam",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A blade of fire springs from your hand, dealing 1d8+1/level (max +10) damage on melee touch attacks.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/flameBlade.htm"
  },
  {
    "id": "flame-strike",
    "name": "Flame Strike",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Cleric": 5,
      "Druid": 4,
      "Sun": 5,
      "War": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Cylinder (5-ft. radius, 40 ft. high)",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A column of divine flame deals 1d6/level damage (max 15d6), half fire and half divine.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/flameStrike.htm"
  },
  {
    "id": "flaming-sphere",
    "name": "Flaming Sphere",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "5-ft.-diameter sphere",
    "duration": "1 round/level",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "Creates a rolling sphere of fire you direct, dealing 2d6 fire damage to creatures it touches.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/flamingSphere.htm"
  },
  {
    "id": "flare",
    "name": "Flare",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Bard": 0,
      "Druid": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Burst of light",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A burst of light dazzles one creature (-1 on attacks) if it fails its save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/flare.htm"
  },
  {
    "id": "flesh-to-stone",
    "name": "Flesh to Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Transforms a creature of flesh into a stone statue.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fleshToStone.htm"
  },
  {
    "id": "floating-disk",
    "name": "Floating Disk",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "3-ft.-diameter disk of force",
    "duration": "1 hour/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a horizontal disk of force that follows you and can hold 100 pounds per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/floatingDisk.htm",
    "subschool": "Force"
  },
  {
    "id": "fly",
    "name": "Fly",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subject flies at 60 feet (good maneuverability), or 40 feet in medium/heavy armor or load.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fly.htm"
  },
  {
    "id": "fog-cloud",
    "name": "Fog Cloud",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Fog spread 20 ft. radius, 20 ft. high",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A fog bank grants concealment; total concealment beyond 5 feet.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/fogCloud.htm",
    "subschool": "Creation"
  },
  {
    "id": "forcecage",
    "name": "Forcecage",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Barred cage (20-ft. cube) or windowless cell (10-ft. cube)",
    "duration": "2 hours/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an immobile cage or cell of force that imprisons creatures without need for bars.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/forcecage.htm"
  },
  {
    "id": "foresight",
    "name": "Foresight",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 9,
      "Sorcerer/Wizard": 9,
      "Knowledge": 9,
      "Time": 9
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal or touch",
    "targetOrArea": "See text",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Warns you of impending danger: never surprised or flat-footed, +2 insight to AC and Reflex saves.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/foresight.htm"
  },
  {
    "id": "foxs-cunning",
    "name": "Fox's Cunning",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +4 enhancement bonus to Intelligence.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/foxsCunning.htm"
  },
  {
    "id": "foxs-cunning-mass",
    "name": "Fox's Cunning, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As fox's cunning (+4 Intelligence), but affects one creature per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/foxsCunningMass.htm"
  },
  {
    "id": "freedom",
    "name": "Freedom",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "Releases a creature from imprisonment, petrification, binding, temporal stasis, and similar restraints.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/freedom.htm"
  },
  {
    "id": "freedom-of-movement",
    "name": "Freedom of Movement",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Cleric": 4,
      "Druid": 4,
      "Ranger": 4,
      "Luck": 4
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "Personal or touch",
    "targetOrArea": "Creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subject moves and attacks normally even under paralysis, grapples, underwater, or magical restraint.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/freedomOfMovement.htm"
  },
  {
    "id": "freezing-sphere",
    "name": "Freezing Sphere",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "See text",
    "duration": "Instantaneous or 1 round/level; see text",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "A globe of cold deals 1d6/level damage (max 15d6) and can freeze water solid or be held and thrown.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/freezingSphere.htm"
  },
  {
    "id": "gaseous-form",
    "name": "Gaseous Form",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Willing living creature touched",
    "duration": "2 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Subject and its gear become insubstantial vapor: damage reduction 10/magic, immune to poison and crits, flies at 10 feet.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/gaseousForm.htm"
  },
  {
    "id": "gate",
    "name": "Gate",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9,
      "Travel": 8
    },
    "components": "V, S, XP",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "See text",
    "duration": "Instantaneous or concentration (up to 1 round/level); see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Opens a portal to another plane for travel, or calls an extraplanar creature of up to twice your level in HD to serve.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/gate.htm",
    "subschool": "Calling or Creation"
  },
  {
    "id": "geas-lesser",
    "name": "Geas, Lesser",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Language-Dependent",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature of 7 HD or less",
    "duration": "1 day/level or until discharged (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Compels a creature of 7 HD or less to follow an instruction; disobedience sickens it.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/geasLesser.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "geas-quest",
    "name": "Geas/Quest",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Language-Dependent",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 6,
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1 day/level or until discharged (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Compels any creature to follow an instruction; disobedience saps its ability scores daily.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/geasQuest.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "gentle-repose",
    "name": "Gentle Repose",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Corpse touched",
    "duration": "1 day/level",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Preserves a corpse so it doesn't decay and extends the time limit for raising it.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/gentleRepose.htm"
  },
  {
    "id": "ghost-sound",
    "name": "Ghost Sound",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Illusory sounds",
    "duration": "1 round/level (D)",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Creates illusory sounds as loud as up to four people per level, anywhere in range.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/ghostSound.htm",
    "subschool": "Figment"
  },
  {
    "id": "ghoul-touch",
    "name": "Ghoul Touch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living humanoid touched",
    "duration": "1d6+2 rounds",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your touch paralyzes a humanoid and surrounds it with a carrion stench that sickens others.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/ghoulTouch.htm"
  },
  {
    "id": "giant-vermin",
    "name": "Giant Vermin",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to three vermin, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Enlarges ordinary centipedes, scorpions, or spiders into giant versions under your control.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/giantVermin.htm"
  },
  {
    "id": "glibness",
    "name": "Glibness",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10 min./level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You gain a +30 bonus on Bluff checks and your lies can defeat magical discernment (discern lies and similar must beat a caster level check).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/glibness.htm"
  },
  {
    "id": "glitterdust",
    "name": "Glitterdust",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Creatures and objects within a 10-ft.-radius spread",
    "duration": "1 round/level",
    "savingThrow": "Will negates (blindness only)",
    "spellResistance": "No",
    "summary": "Covers everything in golden dust, outlining invisible things and possibly blinding creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/glitterdust.htm",
    "subschool": "Creation"
  },
  {
    "id": "globe-of-invulnerability",
    "name": "Globe of Invulnerability",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius spherical emanation, centered on you",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Excludes all spell effects of 4th level or lower from the protected sphere.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/globeOfInvulnerability.htm"
  },
  {
    "id": "globe-of-invulnerability-lesser",
    "name": "Globe of Invulnerability, Lesser",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius spherical emanation, centered on you",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Excludes all spell effects of 3rd level or lower from the protected sphere.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/globeOfInvulnerabilityLesser.htm"
  },
  {
    "id": "glyph-of-warding",
    "name": "Glyph of Warding",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Object touched or up to 5 sq. ft./level",
    "duration": "Permanent until discharged (D)",
    "savingThrow": "Reflex negates; see text or None; see text",
    "spellResistance": "Yes; see text",
    "summary": "Inscribes a ward that triggers a blast (1d8/2 levels) or a spell of 3rd level or lower when an intruder passes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/glyphOfWarding.htm"
  },
  {
    "id": "glyph-of-warding-greater",
    "name": "Glyph of Warding, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Object touched or up to 5 sq. ft./level",
    "duration": "Permanent until discharged (D)",
    "savingThrow": "See text",
    "spellResistance": "Yes; see text",
    "summary": "As glyph of warding, but the blast deals up to 10d8 damage or you store a spell of up to 6th level in the glyph.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/glyphOfWardingGreater.htm"
  },
  {
    "id": "good-hope",
    "name": "Good Hope",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature per level, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Subjects gain a +2 morale bonus on saves, attacks, ability checks, skill checks, and weapon damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/goodHope.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "goodberry",
    "name": "Goodberry",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Up to five fresh berries touched",
    "duration": "1 day/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Enchants fresh berries so each cures 1 point of damage when eaten (max 8 points per creature in 24 hours) and nourishes like a meal.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/goodberry.htm"
  },
  {
    "id": "grasping-hand",
    "name": "Grasping Hand",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 7,
      "Strength": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One hand",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A Huge hand of force (AC 20, hp as you) that interposes, pushes, or grapples with +18 + caster level + ability modifiers.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/graspingHand.htm"
  },
  {
    "id": "grease",
    "name": "Grease",
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
    "targetOrArea": "One object or a 10-ft. square",
    "duration": "1 round/level (D)",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Coats a surface or object with slippery grease; creatures fall prone and movement is halved.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/grease.htm",
    "subschool": "Creation"
  },
  {
    "id": "guards-and-wards",
    "name": "Guards and Wards",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M, F",
    "castingTime": "30 minutes",
    "range": "Anywhere within the area to be warded",
    "targetOrArea": "Area up to 200 sq. ft./level (S)",
    "duration": "2 hours/level (D)",
    "savingThrow": "See text",
    "spellResistance": "See text",
    "summary": "Wards an area with fog, arcane locks, webs, confusion effects, suggestion, and a dancing lights guardian.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/guardsAndWards.htm"
  },
  {
    "id": "guidance",
    "name": "Guidance",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 0,
      "Druid": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute or until discharged",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes",
    "summary": "Touched creature gains a +1 competence bonus on one attack roll, save, or skill check.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/guidance.htm"
  },
  {
    "id": "gust-of-wind",
    "name": "Gust of Wind",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Line-shaped gust of severe wind emanating from you",
    "duration": "1 round",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A line of severe wind knocks down small creatures and blows away gases and smaller foes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/gustOfWind.htm"
  },
  {
    "id": "hallow",
    "name": "Hallow",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 5,
      "Druid": 5
    },
    "components": "V, S, M, DF",
    "castingTime": "24 hours",
    "range": "Touch",
    "targetOrArea": "Site or structure with up to a 40-ft.-radius emanation",
    "duration": "One year",
    "savingThrow": "See text",
    "spellResistance": "Yes; see text",
    "summary": "Designates a site as holy: it blocks undead and evil summoned creatures, protects against mental control, and can carry one attached beneficial spell.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/hallow.htm"
  },
  {
    "id": "hallucinatory-terrain",
    "name": "Hallucinatory Terrain",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One 30-ft. cube per level (S)",
    "duration": "2 hours/level (D)",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Makes an area's terrain look, sound, and smell like a different kind of natural terrain.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/hallucinatoryTerrain.htm",
    "subschool": "Glamer"
  },
  {
    "id": "halt-undead",
    "name": "Halt Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to three undead creatures, no two more than 30 ft. apart",
    "duration": "1 round/level",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Immobilizes up to three undead creatures; intelligent undead get a new save each round you attack or approach.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/haltUndead.htm"
  },
  {
    "id": "harm",
    "name": "Harm",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Destruction": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half; see text",
    "spellResistance": "Yes",
    "summary": "Deals 10 damage per caster level (max 150) and can reduce the target to no less than 1 hp; heals undead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/harm.htm"
  },
  {
    "id": "haste",
    "name": "Haste",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "1 round/level",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subjects act faster: extra attack on a full attack, +1 attacks/AC/Reflex, +30 ft. speed.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/haste.htm"
  },
  {
    "id": "heal",
    "name": "Heal",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 7,
      "Healing": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Heals 10 damage per caster level (max 150) and removes most conditions: blinded, deafened, diseased, poisoned, nauseated, and more.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/heal.htm",
    "subschool": "Healing"
  },
  {
    "id": "heal-mount",
    "name": "Heal Mount",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Paladin": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Your mount",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Works like heal, but only on your special mount.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/healMount.htm",
    "subschool": "Healing"
  },
  {
    "id": "heal-mass",
    "name": "Heal, Mass",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Healing": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more creatures, no two more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As heal (10 hp per level, max 250), applied to every selected creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/healMass.htm",
    "subschool": "Healing"
  },
  {
    "id": "heat-metal",
    "name": "Heat Metal",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Metal equipment of one creature per two levels, no two within 30 ft.",
    "duration": "7 rounds",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Heats metal equipment so it burns those wearing or holding it over 7 rounds.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/heatMetal.htm"
  },
  {
    "id": "helping-hand",
    "name": "Helping Hand",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ghostly hand",
    "duration": "1 hour/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A ghostly hand seeks out a creature you name within range and beckons and guides it back to you, pointing the way.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/helpingHand.htm"
  },
  {
    "id": "heroes-feast",
    "name": "Heroes' Feast",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 6
    },
    "components": "V, S, DF",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Feast for one creature per level",
    "duration": "1 hour plus 12 hours; see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A grand feast cures disease and poison, grants 1d8+1/2 level temporary hp, and +1 morale on attacks and Will saves.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/heroesFeast.htm",
    "subschool": "Creation"
  },
  {
    "id": "heroism",
    "name": "Heroism",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +2 morale bonus on attacks, saves, and skill checks.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/heroism.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "heroism-greater",
    "name": "Heroism, Greater",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 min./level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains a +4 morale bonus on attack rolls, saves, and skill checks, immunity to fear, and 1 temporary hit point per level (max 20).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/heroismGreater.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "hide-from-animals",
    "name": "Hide from Animals",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature touched/level",
    "duration": "10 minutes/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Animals cannot see, hear, or smell the protected creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/hideFromAnimals.htm"
  },
  {
    "id": "hide-from-undead",
    "name": "Hide from Undead",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature touched/level",
    "duration": "10 minutes/level (D)",
    "savingThrow": "Will negates (harmless); see text",
    "spellResistance": "Yes (harmless); see text",
    "summary": "Undead cannot perceive the protected creatures by sight, hearing, or smell.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/hideFromUndead.htm"
  },
  {
    "id": "hideous-laughter",
    "name": "Hideous Laughter",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1 round/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject bursts into uncontrollable laughter, falling prone and unable to act for the duration (creatures with Intelligence 2 or lower are unaffected).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/hideousLaughter.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "hold-animal",
    "name": "Hold Animal",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One animal",
    "duration": "1 round/level (D); see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Paralyzes one animal for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holdAnimal.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "hold-monster",
    "name": "Hold Monster",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 5,
      "Law": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "1 round/level (D); see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Paralyzes any living creature for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holdMonster.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "hold-monster-mass",
    "name": "Hold Monster, Mass",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One or more creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D); see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "As hold monster, but paralyzes any number of creatures within the area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holdMonsterMass.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "hold-person",
    "name": "Hold Person",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One humanoid creature",
    "duration": "1 round/level (D); see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Paralyzes one humanoid for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holdPerson.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "hold-person-mass",
    "name": "Hold Person, Mass",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One or more humanoid creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D); see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "As hold person, but paralyzes any number of humanoids within the area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holdPersonMass.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "hold-portal",
    "name": "Hold Portal",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One portal, up to 20 sq. ft./level",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Magically holds a door, gate, or similar portal shut.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holdPortal.htm"
  },
  {
    "id": "holy-aura",
    "name": "Holy Aura",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 8,
      "Good": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level (in a 20-ft.-radius burst around you)",
    "duration": "1 round/level (D)",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A holy radiance grants +4 deflection AC, +4 saves, SR 25 vs evil spells, and blinds evil attackers.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holyAura.htm"
  },
  {
    "id": "holy-smite",
    "name": "Holy Smite",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Good": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "Divine power smites evil creatures for 1d8 damage per two levels (max 10d8), blinding them on a failed save; extra damage to evil outsiders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holySmite.htm"
  },
  {
    "id": "holy-sword",
    "name": "Holy Sword",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Paladin": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Melee weapon touched",
    "duration": "1 round/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "The weapon becomes +5, deals +2d6 damage against evil creatures, and projects a magic circle against evil; striking an evil creature can dispel its evil magic effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holySword.htm"
  },
  {
    "id": "holy-word",
    "name": "Holy Word",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good",
      "Sonic"
    ],
    "levels": {
      "Cleric": 7,
      "Good": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "Nongood creatures in a 40-ft.-radius spread centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Nongood creatures are deafened, blinded, paralyzed, or killed and banished, by their HD relative to yours.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/holyWord.htm"
  },
  {
    "id": "horrid-wilting",
    "name": "Horrid Wilting",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8,
      "Water": 8
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Living creatures, no two more than 60 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "Dehydrates every living creature in range for 1d6/level damage (max 20d6); devastating to plants and water creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/horridWilting.htm"
  },
  {
    "id": "hypnotic-pattern",
    "name": "Hypnotic Pattern",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Colorful lights in a 10-ft.-radius spread",
    "duration": "Concentration + 2 rounds",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A shifting pattern of colors fascinates 2d4 + level HD of creatures within the area, holding them entranced while it lasts.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/hypnoticPattern.htm",
    "subschool": "Pattern"
  },
  {
    "id": "hypnotism",
    "name": "Hypnotism",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Several living creatures, no two more than 30 ft. apart",
    "duration": "2d4 rounds (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Fascinates 2d4 HD of creatures and lets you make one brief request of them.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/hypnotism.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "ice-storm",
    "name": "Ice Storm",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 4,
      "Sorcerer/Wizard": 4,
      "Water": 5
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Cylinder (20-ft. radius, 40 ft. high)",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Hailstones rain down dealing 3d6 bludgeoning and 2d6 cold damage, hampering Listen checks and movement.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/iceStorm.htm"
  },
  {
    "id": "identify",
    "name": "Identify",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 hour",
    "range": "Touch",
    "targetOrArea": "One touched object",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reveals all the magical properties of a single magic item.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/identify.htm"
  },
  {
    "id": "illusory-script",
    "name": "Illusory Script",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 minute or longer",
    "range": "Touch",
    "targetOrArea": "One object touched, 10 lb. or less",
    "duration": "One day/level (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You write a message only designated readers can decipher; anyone else sees unintelligible writing and is subject to an implanted suggestion you chose.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/illusoryScript.htm",
    "subschool": "Phantasm"
  },
  {
    "id": "illusory-wall",
    "name": "Illusory Wall",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Image 1 ft. by 10 ft. by 10 ft.",
    "duration": "Permanent",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Creates a permanent illusion of a wall, floor, ceiling, or similar surface.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/illusoryWall.htm",
    "subschool": "Figment"
  },
  {
    "id": "imbue-with-spell-ability",
    "name": "Imbue with Spell Ability",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Creature touched; see text",
    "duration": "Permanent until discharged",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Transfers some of your prepared 1st- and 2nd-level spells to a willing creature to cast.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/imbueWithSpellAbility.htm"
  },
  {
    "id": "implosion",
    "name": "Implosion",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Destruction": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One corporeal creature per round",
    "duration": "Concentration (up to 4 rounds)",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "You cause one creature per round to collapse in on itself and die.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/implosion.htm"
  },
  {
    "id": "imprisonment",
    "name": "Imprisonment",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Entombs the target in suspended animation deep within the earth, undetectable, until freedom is cast.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/imprisonment.htm"
  },
  {
    "id": "incendiary-cloud",
    "name": "Incendiary Cloud",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 8,
      "Fire": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Cloud spread 20 ft. radius, 20 ft. high",
    "duration": "Concentration + 1d6 rounds",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A fog of roiling flame deals 4d6 fire damage per round to creatures inside.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/incendiaryCloud.htm",
    "subschool": "Creation"
  },
  {
    "id": "inflict-critical-wounds",
    "name": "Inflict Critical Wounds",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half",
    "spellResistance": "Yes",
    "summary": "Touch deals 4d8+1/level (max +20) damage; heals undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/inflictCriticalWounds.htm"
  },
  {
    "id": "inflict-critical-wounds-mass",
    "name": "Inflict Critical Wounds, Mass",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Will half",
    "spellResistance": "Yes",
    "summary": "As inflict critical wounds (4d8 +1/level, max +40) on one creature per level; heals undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/inflictCriticalWoundsMass.htm"
  },
  {
    "id": "inflict-light-wounds",
    "name": "Inflict Light Wounds",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half",
    "spellResistance": "Yes",
    "summary": "Touch deals 1d8+1/level (max +5) damage; heals undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/inflictLightWounds.htm"
  },
  {
    "id": "inflict-minor-wounds",
    "name": "Inflict Minor Wounds",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Touch deals 1 point of damage to the target.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/inflictMinorWounds.htm"
  },
  {
    "id": "inflict-moderate-wounds",
    "name": "Inflict Moderate Wounds",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half",
    "spellResistance": "Yes",
    "summary": "Touch deals 2d8+1/level (max +10) damage; heals undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/inflictModerateWounds.htm"
  },
  {
    "id": "inflict-serious-wounds",
    "name": "Inflict Serious Wounds",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half",
    "spellResistance": "Yes",
    "summary": "Touch deals 3d8+1/level (max +15) damage; heals undead instead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/inflictSeriousWounds.htm"
  },
  {
    "id": "insanity",
    "name": "Insanity",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 7,
      "Madness": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject is permanently confused, acting randomly each round for life.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/insanity.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "insect-plague",
    "name": "Insect Plague",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Druid": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 minute",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One locust swarm per three levels, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons locust swarms that obscure vision and deal swarm damage to creatures in their area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/insectPlague.htm",
    "subschool": "Summoning"
  },
  {
    "id": "instant-summons",
    "name": "Instant Summons",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "One object of up to 10 lb.",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons an object you previously marked with an arcane mark from anywhere on the same plane directly to your hand when you speak its name.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/instantSummons.htm",
    "subschool": "Summoning"
  },
  {
    "id": "interposing-hand",
    "name": "Interposing Hand",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Hand of force",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A Large hand of force interposes itself between you and a designated opponent, providing cover (+4 AC) and blocking its path.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/interposingHand.htm",
    "subschool": "Force"
  },
  {
    "id": "invisibility",
    "name": "Invisibility",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal or touch",
    "targetOrArea": "You or a creature or object weighing no more than 100 lb./level",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will negates (harmless) or Will negates (object)",
    "spellResistance": "Yes (harmless) or Yes (object)",
    "summary": "Subject becomes invisible until it attacks or the spell ends.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/invisibility.htm",
    "subschool": "Glamer"
  },
  {
    "id": "invisibility-purge",
    "name": "Invisibility Purge",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Surrounds you with a sphere that negates all forms of invisibility within 5 feet per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/invisibilityPurge.htm"
  },
  {
    "id": "invisibility-sphere",
    "name": "Invisibility Sphere",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal or touch",
    "targetOrArea": "10-ft.-radius emanation around the recipient",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will negates (harmless) or Will negates (object)",
    "spellResistance": "Yes (harmless) or Yes (object)",
    "summary": "All creatures within 10 feet of the subject are invisible, though they can see each other.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/invisibilitySphere.htm",
    "subschool": "Glamer"
  },
  {
    "id": "invisibility-greater",
    "name": "Invisibility, Greater",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal or touch",
    "targetOrArea": "You or a creature or object weighing no more than 100 lb./level",
    "duration": "1 round/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As invisibility, but the subject can attack and remain invisible.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/invisibilityGreater.htm",
    "subschool": "Glamer"
  },
  {
    "id": "invisibility-mass",
    "name": "Invisibility, Mass",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Any number of creatures, all within 180 ft.",
    "duration": "1 round/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As invisibility, but affects any number of creatures; a creature that attacks loses the benefit but others remain invisible.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/invisibilityMass.htm",
    "subschool": "Glamer"
  },
  {
    "id": "iron-body",
    "name": "Iron Body",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your body becomes living iron: DR 15/adamantine, immunity to many attacks and effects, +6 Str, -6 Dex, spell failure 35%.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/ironBody.htm"
  },
  {
    "id": "ironwood",
    "name": "Ironwood",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, M",
    "castingTime": "1 minute per pound created",
    "range": "0 ft.",
    "targetOrArea": "Up to 5 lb./level of wood shaped as you desire",
    "duration": "1 day/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates temporary ironwood: wood with the strength and fire resistance of steel, which you shape as the spell is cast.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/ironwood.htm"
  },
  {
    "id": "irresistible-dance",
    "name": "Irresistible Dance",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 8
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1d4+1 rounds",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Forces the subject to dance for 1d4+1 rounds: -4 AC, no shield benefit, -10 Reflex saves.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/irresistibleDance.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "jump",
    "name": "Jump",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +10, +20, or +30 enhancement bonus on Jump checks by caster level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/jump.htm"
  },
  {
    "id": "keen-edge",
    "name": "Keen Edge",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One weapon or fifty projectiles, all within 10 ft. of each other",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Doubles a piercing or slashing weapon's threat range.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/keenEdge.htm"
  },
  {
    "id": "knock",
    "name": "Knock",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One door, box, or chain, up to 30 sq. ft./level in size",
    "duration": "Instantaneous; see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Opens stuck, barred, locked, or arcane-locked doors and containers.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/knock.htm"
  },
  {
    "id": "know-direction",
    "name": "Know Direction",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Druid": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You instantly know which way is north.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/knowDirection.htm"
  },
  {
    "id": "legend-lore",
    "name": "Legend Lore",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 6,
      "Knowledge": 7
    },
    "components": "V, S, M, F",
    "castingTime": "See text",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "See text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Learn stories and lore about a legendary person, place, or thing; casting may take days or weeks.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/legendLore.htm"
  },
  {
    "id": "leomunds-secret-chest",
    "name": "Leomund's Secret Chest",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "One chest and up to 1 cu. ft. of material per level",
    "duration": "60 days or until discharged",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Hides an expensive chest on the Ethereal Plane; summon it back with a miniature replica.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/leomundsSecretChest.htm",
    "subschool": "Summoning"
  },
  {
    "id": "levitate",
    "name": "Levitate",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal or close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "You or one willing creature or object (total weight up to 100 lb./level)",
    "duration": "1 minute/level (D)",
    "savingThrow": "Unwilling creatures or objects: Will negates",
    "spellResistance": "No",
    "summary": "Raises the subject vertically at 20 feet per round, controlled by your mental direction.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/levitate.htm"
  },
  {
    "id": "light",
    "name": "Light",
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
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Makes an object glow like a torch for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/light.htm"
  },
  {
    "id": "lightning-bolt",
    "name": "Lightning Bolt",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "120 ft.",
    "targetOrArea": "120-ft. line",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A bolt of lightning deals 1d6/level electricity damage (max 10d6) along a 120-foot line.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/lightningBolt.htm"
  },
  {
    "id": "limited-wish",
    "name": "Limited Wish",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, XP",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "See text",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Alters reality within limits: duplicate a spell of 6th level or lower (5th for other classes), undo effects, or grant a single wish-like outcome.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/limitedWish.htm"
  },
  {
    "id": "liveoak",
    "name": "Liveoak",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "One Huge oak tree",
    "duration": "1 day/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Transforms a great oak into a treant guardian of its area when intruders approach.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/liveoak.htm"
  },
  {
    "id": "locate-creature",
    "name": "Locate Creature",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Circle, centered on you, with a radius of 400 ft. + 40 ft./level",
    "duration": "10 minutes/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Senses the direction of a familiar creature you have in mind, as locate object but for creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/locateCreature.htm"
  },
  {
    "id": "locate-object",
    "name": "Locate Object",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 3,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Circle, centered on you, with a radius of 400 ft. + 40 ft./level",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Senses the direction of a familiar or specific object within range.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/locateObject.htm"
  },
  {
    "id": "longstrider",
    "name": "Longstrider",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Increases your base land speed by 10 feet.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/longstrider.htm"
  },
  {
    "id": "lullaby",
    "name": "Lullaby",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Living creatures within a 10-ft.-radius burst",
    "duration": "Concentration + 1 round/level (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Makes creatures drowsy: -5 Listen/Spot and -2 on saves against sleep effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/lullaby.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "mage-armor",
    "name": "Mage Armor",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 hour/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "An invisible but tangible field of force grants the subject a +4 armor bonus to AC (which applies against incorporeal attacks).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mageArmor.htm",
    "subschool": "Creation"
  },
  {
    "id": "mage-hand",
    "name": "Mage Hand",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One nonmagical, unattended object weighing up to 5 lb.",
    "duration": "Concentration",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Moves a light unattended object slowly at range with a spectral hand.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mageHand.htm"
  },
  {
    "id": "mages-disjunction",
    "name": "Mage's Disjunction",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Magic": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "All magical effects and magic items within a 40-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "No",
    "summary": "Ends all magic effects in the area and can destroy magic items (each gets a Will save); even artifacts may be destroyed, risking the caster's own spellcasting.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magesDisjunction.htm"
  },
  {
    "id": "mages-faithful-hound",
    "name": "Mage's Faithful Hound",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Phantom watchdog",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a phantom watchdog that guards a spot, barking at intruders and biting those who come within 5 feet (and can bite invisible creatures).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magesFaithfulHound.htm",
    "subschool": "Creation"
  },
  {
    "id": "mages-lucubration",
    "name": "Mage's Lucubration",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You recall any one spell of 5th level or lower that you cast within the past 24 hours, regaining it as if it had not been cast (wizard only in practice).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magesLucubration.htm"
  },
  {
    "id": "mages-magnificent-mansion",
    "name": "Mage's Magnificent Mansion",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Extradimensional mansion, up to three 10-ft. cubes per level (S)",
    "duration": "2 hours/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an extradimensional mansion with food and near-transparent servants for you and your guests.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magesMagnificentMansion.htm",
    "subschool": "Creation"
  },
  {
    "id": "mages-private-sanctum",
    "name": "Mage's Private Sanctum",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "30-ft. cube/level (S)",
    "duration": "24 hours (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Wards an area against sight, hearing, and scrying from outside; those within can see and hear out normally, and teleportation into the area still works.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magesPrivateSanctum.htm"
  },
  {
    "id": "mages-sword",
    "name": "Mage's Sword",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One sword of force",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A sword of force attacks a designated target each round using your base attack bonus plus your Intelligence or Charisma modifier, dealing 4d6+3 force damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magesSword.htm",
    "subschool": "Force"
  },
  {
    "id": "magic-aura",
    "name": "Magic Aura",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One touched object weighing up to 5 lb./level",
    "duration": "1 day/level (D)",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "Gives an object a false magical aura, or hides its real aura, fooling detect magic and similar spells.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicAura.htm",
    "subschool": "Glamer"
  },
  {
    "id": "magic-circle-against-chaos",
    "name": "Magic Circle against Chaos",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Paladin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "10-ft.-radius emanation from touched creature",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No; see text",
    "summary": "As protection from chaos for all within 10 feet; can trap a called chaotic creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicCircleAgainstChaos.htm"
  },
  {
    "id": "magic-circle-against-evil",
    "name": "Magic Circle against Evil",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 3,
      "Paladin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "10-ft.-radius emanation from touched creature",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No; see text",
    "summary": "As protection from evil for all within 10 feet; can trap a called evil creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicCircleAgainstEvil.htm"
  },
  {
    "id": "magic-circle-against-good",
    "name": "Magic Circle against Good",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "10-ft.-radius emanation from touched creature",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No; see text",
    "summary": "As protection from good for all within 10 feet; can trap a called good creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicCircleAgainstGood.htm"
  },
  {
    "id": "magic-circle-against-law",
    "name": "Magic Circle against Law",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Paladin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "10-ft.-radius emanation from touched creature",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No; see text",
    "summary": "As protection from law for all within 10 feet; can trap a called lawful creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicCircleAgainstLaw.htm"
  },
  {
    "id": "magic-fang",
    "name": "Magic Fang",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "One natural weapon of the target gains +1 enhancement on attacks and damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicFang.htm"
  },
  {
    "id": "magic-fang-greater",
    "name": "Magic Fang, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1 hour/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +1 enhancement bonus per four caster levels (max +5) to one natural weapon of the subject, or +1 to all of its natural weapons.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicFangGreater.htm"
  },
  {
    "id": "magic-jar",
    "name": "Magic Jar",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1 hour/level or until you return to your body",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Your soul enters a gem, then hops into and possesses creatures' bodies, displacing their souls.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicJar.htm"
  },
  {
    "id": "magic-missile",
    "name": "Magic Missile",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to five creatures, no two more than 15 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Bolts of force strike unerringly for 1d4+1 damage; one missile at 1st level, +1 per two levels (max 5).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicMissile.htm"
  },
  {
    "id": "magic-mouth",
    "name": "Magic Mouth",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature or object",
    "duration": "Permanent until discharged",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Places an invisible mouth that delivers a spoken message of up to 25 words when triggered.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicMouth.htm",
    "subschool": "Figment"
  },
  {
    "id": "magic-stone",
    "name": "Magic Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Up to three pebbles touched",
    "duration": "30 minutes or until discharged",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Enchants up to three pebbles as +1 sling bullets dealing 1d6+1 (2d6+2 vs undead).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicStone.htm"
  },
  {
    "id": "magic-vestment",
    "name": "Magic Vestment",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Strength": 3,
      "War": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Armor or shield touched",
    "duration": "1 hour/level (D)",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "No",
    "summary": "You imbue a suit of armor or shield with a +1 enhancement bonus per four caster levels (max +5).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicVestment.htm"
  },
  {
    "id": "magic-weapon",
    "name": "Magic Weapon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Paladin": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Gives a weapon a +1 enhancement bonus on attacks and damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicWeapon.htm"
  },
  {
    "id": "magic-weapon-greater",
    "name": "Magic Weapon, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Paladin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One weapon or fifty projectiles, all within 10 ft. of each other",
    "duration": "1 hour/level",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Gives a weapon +1 enhancement per four caster levels (max +5) on attacks and damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/magicWeaponGreater.htm"
  },
  {
    "id": "major-creation",
    "name": "Major Creation",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Unattended, nonmagical object of nonliving matter, up to 1 cu. ft./level",
    "duration": "See text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As minor creation, but stone, metal, and gems last shorter times by material hardness and rarity.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/majorCreation.htm",
    "subschool": "Creation"
  },
  {
    "id": "major-image",
    "name": "Major Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Visual figment within four 10-ft. cubes + one per level",
    "duration": "Concentration + 3 rounds",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Creates a visual illusion with sound, smell, and thermal effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/majorImage.htm",
    "subschool": "Figment"
  },
  {
    "id": "make-whole",
    "name": "Make Whole",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One object of up to 10 cu. ft./level",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Fully repairs a damaged object, restoring it as if new.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/makeWhole.htm"
  },
  {
    "id": "mark-of-justice",
    "name": "Mark of Justice",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Permanent; see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Draws a mark that activates a bestow curse effect when the target commits a specified offense.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/markOfJustice.htm"
  },
  {
    "id": "maze",
    "name": "Maze",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Concentration or 10 minutes; see text",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Banishes the subject into an extradimensional labyrinth; it escapes with a DC 20 Intelligence check or after 10 minutes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/maze.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "meld-into-stone",
    "name": "Meld into Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "8 hours (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You merge with solid stone, remaining aware and able to cast spells on yourself.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/meldIntoStone.htm"
  },
  {
    "id": "mending",
    "name": "Mending",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Cleric": 0,
      "Druid": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "One object of up to 1 lb.",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Repairs a single break or tear in a small object.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mending.htm"
  },
  {
    "id": "message",
    "name": "Message",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Language-Dependent"
    ],
    "levels": {
      "Bard": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature/level",
    "duration": "10 minutes/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Whisper messages to distant creatures who can reply the same way.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/message.htm"
  },
  {
    "id": "meteor-swarm",
    "name": "Meteor Swarm",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Four 40-ft.-radius spreads or eight 20-ft.-radius spreads; see text",
    "duration": "Instantaneous",
    "savingThrow": "None or Reflex half; see text",
    "spellResistance": "Yes",
    "summary": "Four fiery spheres deal 2d6 bludgeoning on impact and burst for 6d6 fire each, no two overlapping the same creature fully.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/meteorSwarm.htm"
  },
  {
    "id": "mind-blank",
    "name": "Mind Blank",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8,
      "Protection": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "24 hours",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Protects against all mind-affecting effects and information gathering by divination, even wish and miracle.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mindBlank.htm"
  },
  {
    "id": "mind-fog",
    "name": "Mind Fog",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Fog spread 20 ft. radius, 20 ft. high",
    "duration": "30 minutes and 2d6 rounds; see text",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A mist that imposes -10 on Wisdom checks and Will saves for those who fail inside it.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mindFog.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "minor-creation",
    "name": "Minor Creation",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "Unattended, nonmagical object of nonliving plant matter, up to 1 cu. ft./level",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a nonmagical object of vegetable matter that lasts until it vanishes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/minorCreation.htm",
    "subschool": "Creation"
  },
  {
    "id": "minor-image",
    "name": "Minor Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Visual figment within four 10-ft. cubes + one per level",
    "duration": "Concentration + 2 rounds",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Creates a visual illusion with minor sound, within the figment size limits.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/minorImage.htm",
    "subschool": "Figment"
  },
  {
    "id": "miracle",
    "name": "Miracle",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Luck": 9
    },
    "components": "V, S, XP",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "See text",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Request your deity's direct intercession: duplicate spells up to 8th level, swing an event, or greater requests at XP cost.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/miracle.htm"
  },
  {
    "id": "mirage-arcana",
    "name": "Mirage Arcana",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One 20-ft. cube per level (S)",
    "duration": "Concentration + 1 hour/level (D)",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Changes an area's terrain and structures with full sight, sound, smell, and feel.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mirageArcana.htm",
    "subschool": "Glamer"
  },
  {
    "id": "mirror-image",
    "name": "Mirror Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal; see text",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates 1d4+1/three levels illusory duplicates of you that absorb attacks.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mirrorImage.htm",
    "subschool": "Figment"
  },
  {
    "id": "misdirection",
    "name": "Misdirection",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature or object, up to a 10-ft. cube in size",
    "duration": "1 hour/level",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "No",
    "summary": "Makes one object or creature radiate the magical aura of another instead of its own.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/misdirection.htm",
    "subschool": "Glamer"
  },
  {
    "id": "mislead",
    "name": "Mislead",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 6,
      "Trickery": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "You/one illusory double",
    "duration": "1 round/level (D) and concentration + 3 rounds; see text",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "You become improved invisible while an illusory double of you moves and behaves as you direct.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mislead.htm",
    "subschool": "Figment, Glamer"
  },
  {
    "id": "mnemonic-enhancer",
    "name": "Mnemonic Enhancer",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Wizard-only focus spell: either prepare up to three additional levels of spells, or retain a spell of up to 3rd level that you cast in the previous round.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mnemonicEnhancer.htm"
  },
  {
    "id": "modify-memory",
    "name": "Modify Memory",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action; see text",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Permanent",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Rewrites up to 5 minutes of the subject's memory: erase, implant, change, or eliminate details.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/modifyMemory.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "moment-of-prescience",
    "name": "Moment of Prescience",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8,
      "Luck": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 hour/level or until discharged",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Gain an insight bonus equal to caster level (max +25) on a single attack, check, or save, discharged at use.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/momentOfPrescience.htm"
  },
  {
    "id": "mordenkainens-disjunction",
    "name": "Mordenkainen's Disjunction",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9,
      "Magic": 9
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "40-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "No",
    "summary": "Destroys all magic in the area: spells end, items become mundane (Will save each), even artifacts may be unmade.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mordenkainensDisjunction.htm"
  },
  {
    "id": "mount",
    "name": "Mount",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One mount",
    "duration": "2 hours/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a horse or pony that serves you willingly as a mount.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/mount.htm",
    "subschool": "Summoning"
  },
  {
    "id": "move-earth",
    "name": "Move Earth",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Dirt or clay in an area up to 750 ft. by 750 ft. and 10 ft. deep (S)",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Excavates trenches and raises hills of loose earth over up to 10 minutes per area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/moveEarth.htm"
  },
  {
    "id": "neutralize-poison",
    "name": "Neutralize Poison",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Cleric": 3,
      "Druid": 3,
      "Paladin": 4,
      "Ranger": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature or object of up to 1 cu. ft./level touched",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Detoxifies venom in a creature or object and grants immunity to poison for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/neutralizePoison.htm",
    "subschool": "Healing"
  },
  {
    "id": "nightmare",
    "name": "Nightmare",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting",
      "Evil"
    ],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Unlimited",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Torments a sleeping creature with a nightmare: 1d10 damage, fatigue, and no proper rest.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/nightmare.htm",
    "subschool": "Phantasm"
  },
  {
    "id": "nondetection",
    "name": "Nondetection",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Ranger": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature or object touched",
    "duration": "1 hour/level",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Hides the subject from divination and scrying; diviners must beat your caster level to detect it.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/nondetection.htm"
  },
  {
    "id": "obscure-object",
    "name": "Obscure Object",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 2,
      "Bard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One object touched, up to 100 lb./level",
    "duration": "8 hours (D)",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Hides an object from scrying and divination detection.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/obscureObject.htm"
  },
  {
    "id": "obscuring-mist",
    "name": "Obscuring Mist",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "Cloud spread 20 ft. radius, 20 ft. high",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A stationary fog cloud grants concealment; total concealment beyond 5 feet.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/obscuringMist.htm",
    "subschool": "Creation"
  },
  {
    "id": "open-close",
    "name": "Open/Close",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Object weighing up to 30 lb. or a portal that can be opened or closed",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Opens or closes a light door, chest, or similar portal at range.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/openClose.htm"
  },
  {
    "id": "orders-wrath",
    "name": "Order's Wrath",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Lawful",
      "Sonic"
    ],
    "levels": {
      "Law": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A wave of lawful energy deals 1d8 damage per two levels (max 10d8) to chaotic creatures, dazing them on a failed save; extra damage to chaotic outsiders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/ordersWrath.htm"
  },
  {
    "id": "overland-flight",
    "name": "Overland Flight",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You fly at 40 feet per round with average maneuverability and can hustle overland without fatigue for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/overlandFlight.htm"
  },
  {
    "id": "owls-wisdom",
    "name": "Owl's Wisdom",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 2,
      "Paladin": 2,
      "Ranger": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +4 enhancement bonus to Wisdom.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/owlsWisdom.htm"
  },
  {
    "id": "owls-wisdom-mass",
    "name": "Owl's Wisdom, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As owl's wisdom (+4 Wisdom), but affects one creature per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/owlsWisdomMass.htm"
  },
  {
    "id": "pass-without-trace",
    "name": "Pass without Trace",
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
    "targetOrArea": "One creature touched/level",
    "duration": "1 hour/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subjects leave no tracks or scent and cannot be tracked nonmagically.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/passWithoutTrace.htm"
  },
  {
    "id": "passwall",
    "name": "Passwall",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One passage, up to 5 ft. by 8 ft. by 10 ft./three levels deep",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a temporary passage through a wooden, plaster, or stone wall.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/passwall.htm"
  },
  {
    "id": "permanency",
    "name": "Permanency",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, XP",
    "castingTime": "2 rounds; see text",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "Permanent; see text",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Makes certain other spells permanent on yourself, objects, or creatures for an XP cost by spell.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/permanency.htm"
  },
  {
    "id": "permanent-image",
    "name": "Permanent Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Visual figment within four 10-ft. cubes + one per level",
    "duration": "Permanent (D)",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "A permanent illusion with sound, smell, and thermal effects that follows a script you set.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/permanentImage.htm",
    "subschool": "Figment"
  },
  {
    "id": "persistent-image",
    "name": "Persistent Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Visual figment within four 10-ft. cubes + one per level",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "An illusion with sound, smell, and script-following behavior that needs no concentration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/persistentImage.htm",
    "subschool": "Figment"
  },
  {
    "id": "phantasmal-killer",
    "name": "Phantasmal Killer",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Will disbelief (if interacted with), then Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "The victim's worst fear attacks it: disbelief or it dies of fright; otherwise 3d6 damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/phantasmalKiller.htm",
    "subschool": "Phantasm"
  },
  {
    "id": "phantom-steed",
    "name": "Phantom Steed",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "0 ft.",
    "targetOrArea": "One quasi-real, horselike creature",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a magical horse (12 hp per level tier) that can ride over water, swamps, and eventually air at higher levels.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/phantomSteed.htm",
    "subschool": "Creation"
  },
  {
    "id": "phantom-trap",
    "name": "Phantom Trap",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "Permanent until discharged",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Makes a lock, container, or portal appear trapped to anyone examining it; anyone using trapfinding believes a real trap is present.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/phantomTrap.htm",
    "subschool": "Glamer"
  },
  {
    "id": "phase-door",
    "name": "Phase Door",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "One 5 ft. by 8 ft. opening, 10 ft. deep plus 5 ft./three levels",
    "duration": "One usage per two levels",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an invisible passage through wood, plaster, or stone walls, usable only by you and one other you designate.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/phaseDoor.htm",
    "subschool": "Creation"
  },
  {
    "id": "planar-ally",
    "name": "Planar Ally",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6
    },
    "components": "V, S, DF, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or two called elementals or outsiders, totaling no more than 12 HD",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls outsiders totaling up to 12 HD to perform a task for negotiated payment.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/planarAlly.htm",
    "subschool": "Calling"
  },
  {
    "id": "planar-ally-greater",
    "name": "Planar Ally, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 8
    },
    "components": "V, S, DF, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to three called elementals or outsiders, no two more than 30 ft. apart and totaling no more than 18 HD",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls outsiders totaling up to 18 HD to perform a task for negotiated payment.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/planarAllyGreater.htm",
    "subschool": "Calling"
  },
  {
    "id": "planar-ally-lesser",
    "name": "Planar Ally, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, DF, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One called elemental or outsider of 6 HD or less",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls an outsider or elemental of up to 6 HD to perform a task for negotiated payment.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/planarAllyLesser.htm",
    "subschool": "Calling"
  },
  {
    "id": "planar-binding",
    "name": "Planar Binding",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to three elementals or outsiders, total up to 12 HD",
    "duration": "Instantaneous or 1 day/level or less; see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "As lesser planar binding, but up to 12 HD of called creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/planarBinding.htm",
    "subschool": "Calling"
  },
  {
    "id": "planar-binding-greater",
    "name": "Planar Binding, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to three elementals or outsiders, total up to 18 HD",
    "duration": "Instantaneous or 1 day/level or less; see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "As lesser planar binding, but up to 18 HD of called creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/planarBindingGreater.htm",
    "subschool": "Calling"
  },
  {
    "id": "planar-binding-lesser",
    "name": "Planar Binding, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One elemental or outsider of up to 6 HD",
    "duration": "Instantaneous or 1 day/level or less; see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Traps a called extraplanar creature of up to 6 HD in a prepared trap until it agrees to perform a service for its freedom.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/planarBindingLesser.htm",
    "subschool": "Calling"
  },
  {
    "id": "plane-shift",
    "name": "Plane Shift",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched, or up to eight willing creatures joining hands",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Transports touched creatures to another plane, arriving 5-500 miles from the intended destination.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/planeShift.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "plant-growth",
    "name": "Plant Growth",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Plant": 3,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Makes vegetation grow thick and tangled into difficult, concealing overgrowth, or enriches plants so yields rise by a third for a year.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/plantGrowth.htm"
  },
  {
    "id": "poison",
    "name": "Poison",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous; see text",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "Calls a venomous essence into the target: 1d10 Con damage now and again 1 minute later.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/poison.htm"
  },
  {
    "id": "polar-ray",
    "name": "Polar Ray",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature or object",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A blue-white ray deals 1d6/level cold damage (max 25d6) on a ranged touch attack.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/polarRay.htm"
  },
  {
    "id": "polymorph",
    "name": "Polymorph",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Willing creature touched",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Transforms a willing creature into another form of 1 HD or less per level (max 15 HD), gaining its physical traits.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/polymorph.htm"
  },
  {
    "id": "polymorph-any-object",
    "name": "Polymorph Any Object",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8,
      "Trickery": 8
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature or object",
    "duration": "See text",
    "savingThrow": "Fortitude negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Transforms any creature or object into another form; duration by similarity — up to permanent.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/polymorphAnyObject.htm"
  },
  {
    "id": "power-word-blind",
    "name": "Power Word Blind",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature with 200 hp or less",
    "duration": "See text",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Blinds one creature by its current hp: up to 50 hp permanently, 51-100 for 1d4+1 minutes, 101-200 for 1d4+1 rounds.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/powerWordBlind.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "power-word-kill",
    "name": "Power Word Kill",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Death",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 9,
      "War": 9,
      "Death": 9
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature with 100 hp or less",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Kills one living creature with 100 or fewer current hit points, instantly.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/powerWordKill.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "power-word-stun",
    "name": "Power Word Stun",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 8,
      "War": 8
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature with 150 hp or less",
    "duration": "See text",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Stuns one creature by its current hp: up to 50 for 2d4 rounds, 51-100 for 1d4 rounds, 101-150 for 1 round.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/powerWordStun.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "prayer",
    "name": "Prayer",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 3,
      "Paladin": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "All allies and foes within a 40-ft.-radius burst centered on you",
    "duration": "1 round/level",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Allies gain +1 luck on attacks, damage, saves, and checks; enemies take -1 on the same.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/prayer.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "prestidigitation",
    "name": "Prestidigitation",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "See text",
    "duration": "1 hour",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Performs minor magical tricks: small lifts, cleaning, flavoring, coloring, and similar cantrip effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/prestidigitation.htm"
  },
  {
    "id": "prismatic-sphere",
    "name": "Prismatic Sphere",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9,
      "Sun": 9
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius sphere centered on you",
    "duration": "10 minutes/level (D)",
    "savingThrow": "See text",
    "spellResistance": "Yes; see text",
    "summary": "A stationary sphere of seven colored layers with all the prismatic wall effects, protecting you completely.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/prismaticSphere.htm"
  },
  {
    "id": "prismatic-spray",
    "name": "Prismatic Spray",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A cone of seven colored rays strikes creatures for random effects: fire, acid, lightning, poison, petrification, insanity, or banishment.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/prismaticSpray.htm"
  },
  {
    "id": "prismatic-wall",
    "name": "Prismatic Wall",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Wall 4 ft./level wide, 2 ft./level high",
    "duration": "10 minutes/level (D)",
    "savingThrow": "See text",
    "spellResistance": "Yes; see text",
    "summary": "A vertical wall of seven colored layers, each with prismatic spray-like effects, each negated by a specific spell.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/prismaticWall.htm"
  },
  {
    "id": "produce-flame",
    "name": "Produce Flame",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "Flame in your palm",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Creates a flame in your palm you can touch with or hurl for 1d6+1/level (max +5) fire damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/produceFlame.htm"
  },
  {
    "id": "programmed-image",
    "name": "Programmed Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Visual figment within four 10-ft. cubes + one per level",
    "duration": "Permanent until triggered, then 1 round/level",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "An illusion with all senses that lies dormant until a trigger condition you set occurs.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/programmedImage.htm",
    "subschool": "Figment"
  },
  {
    "id": "project-image",
    "name": "Project Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One shadow duplicate",
    "duration": "1 round/level (D)",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Projects a shadowy duplicate you can see, speak, and cast spells through.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/projectImage.htm",
    "subschool": "Shadow"
  },
  {
    "id": "protection-from-arrows",
    "name": "Protection from Arrows",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 hour/level or until discharged",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "Grants DR 10/magic against ranged weapons, absorbing up to 10 points per level (max 100) before discharging.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/protectionFromArrows.htm"
  },
  {
    "id": "protection-from-chaos",
    "name": "Protection from Chaos",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Paladin": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "+2 AC and saves vs chaotic creatures, blocks mental control and contact by summoned chaotic creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/protectionFromChaos.htm"
  },
  {
    "id": "protection-from-energy",
    "name": "Protection from Energy",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Ranger": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10 minutes/level or until discharged",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Absorbs the first 12 points per caster level (max 120) of damage from one chosen energy type.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/protectionFromEnergy.htm"
  },
  {
    "id": "protection-from-evil",
    "name": "Protection from Evil",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Paladin": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "+2 AC and saves vs evil creatures, blocks mental control and contact by summoned evil creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/protectionFromEvil.htm"
  },
  {
    "id": "protection-from-good",
    "name": "Protection from Good",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "+2 AC and saves vs good creatures, blocks mental control and contact by summoned good creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/protectionFromGood.htm"
  },
  {
    "id": "protection-from-law",
    "name": "Protection from Law",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "+2 AC and saves vs lawful creatures, blocks mental control and contact by summoned lawful creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/protectionFromLaw.htm"
  },
  {
    "id": "protection-from-spells",
    "name": "Protection from Spells",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8,
      "Magic": 8
    },
    "components": "V, S, M, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Up to one creature per four levels",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a +8 resistance bonus on saves against spells and spell-like effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/protectionFromSpells.htm"
  },
  {
    "id": "prying-eyes",
    "name": "Prying Eyes",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "1 mile",
    "targetOrArea": "Up to ten floating eyes",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates 1d4+1/level floating eyes that scout and return to report what they saw.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/pryingEyes.htm",
    "subschool": "Scrying"
  },
  {
    "id": "prying-eyes-greater",
    "name": "Prying Eyes, Greater",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "1 mile",
    "targetOrArea": "Up to ten floating eyes",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As prying eyes, but the eyes have true seeing and can be ordered to specific tasks.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/pryingEyesGreater.htm",
    "subschool": "Scrying"
  },
  {
    "id": "purify-food-and-drink",
    "name": "Purify Food and Drink",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 0,
      "Druid": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "1 cu. ft./level of contaminated food and water",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Makes spoiled or poisoned food and water pure and safe to consume.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/purifyFoodAndDrink.htm"
  },
  {
    "id": "pyrotechnics",
    "name": "Pyrotechnics",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One fire source, up to a 20-ft. cube",
    "duration": "1d4+1 rounds, or 1 round/level; see text",
    "savingThrow": "Will negates or Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "Turns a fire into blinding fireworks or a smoke cloud that sickens those within.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/pyrotechnics.htm"
  },
  {
    "id": "quench",
    "name": "Quench",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One 20-ft. cube/level (S) or one fire-based magic item",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates (object)",
    "spellResistance": "Yes or Yes (object)",
    "summary": "Extinguishes all nonmagical fires in the area, or dispels the fire spells of one magic item, countering fire effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/quench.htm"
  },
  {
    "id": "rage",
    "name": "Rage",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One willing living creature per three levels, no two more than 30 ft. apart",
    "duration": "Concentration + 1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Willing subjects fly into a barbarian-like rage: +2 Str and Con, +1 Will saves, -2 AC.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/rage.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "rainbow-pattern",
    "name": "Rainbow Pattern",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Colorful lights with a 20-ft.-radius spread",
    "duration": "Concentration + 1 round/level (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Fascinates up to 24 HD of creatures with shifting lights; they follow the pattern as it moves.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/rainbowPattern.htm",
    "subschool": "Pattern"
  },
  {
    "id": "raise-dead",
    "name": "Raise Dead",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, M, DF",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Dead creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "Restores life to a creature dead up to 1 day/level; it loses a level and is weak on return.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/raiseDead.htm",
    "subschool": "Healing"
  },
  {
    "id": "ray-of-enfeeblement",
    "name": "Ray of Enfeeblement",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray imposes a 1d6+1/level (max +5) penalty to Strength.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/rayOfEnfeeblement.htm"
  },
  {
    "id": "ray-of-exhaustion",
    "name": "Ray of Exhaustion",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1 minute/level",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "A black ray exhausts the target, or fatigues it on a successful save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/rayOfExhaustion.htm"
  },
  {
    "id": "ray-of-frost",
    "name": "Ray of Frost",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray of cold deals 1d3 cold damage on a ranged touch attack.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/rayOfFrost.htm"
  },
  {
    "id": "read-magic",
    "name": "Read Magic",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Cleric": 0,
      "Druid": 0,
      "Paladin": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10 minutes/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Lets you decipher magical inscriptions, scrolls, and spellbooks you couldn't otherwise read.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/readMagic.htm"
  },
  {
    "id": "reduce-animal",
    "name": "Reduce Animal",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One willing animal",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Shrinks a willing animal by one size category, reversing the effects of animal growth.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/reduceAnimal.htm"
  },
  {
    "id": "reduce-person",
    "name": "Reduce Person",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One humanoid creature",
    "duration": "1 minute/level (D)",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Halves a humanoid's size: -2 Str, +2 Dex, +1 attacks/AC, smaller weapons and reach.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/reducePerson.htm"
  },
  {
    "id": "reduce-person-mass",
    "name": "Reduce Person, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One humanoid creature/level, no two more than 30 ft. apart",
    "duration": "1 min./level (D)",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "As reduce person, but affects one humanoid creature per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/reducePersonMass.htm"
  },
  {
    "id": "refuge",
    "name": "Refuge",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 9,
      "Liberation": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One object touched",
    "duration": "Permanent until discharged",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Enchants an item so that breaking it teleports its bearer (and gear) to your home.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/refuge.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "regenerate",
    "name": "Regenerate",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Druid": 9,
      "Healing": 7
    },
    "components": "V, S, DF",
    "castingTime": "3 full rounds",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Regrows severed limbs and broken bones, heals 4d8+1/level (max +35), and removes fatigue and nonlethal damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/regenerate.htm",
    "subschool": "Healing"
  },
  {
    "id": "reincarnate",
    "name": "Reincarnate",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, M, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Dead creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "Returns a dead creature to life in a new, young adult body of a random race.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/reincarnate.htm"
  },
  {
    "id": "remove-blindness-deafness",
    "name": "Remove Blindness/Deafness",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Paladin": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Cures blindness or deafness, whether natural or magical in origin.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/removeBlindnessDeafness.htm",
    "subschool": "Healing"
  },
  {
    "id": "remove-curse",
    "name": "Remove Curse",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Cleric": 3,
      "Paladin": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature or object touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Instantly removes all curses on a creature or object; cursed items need a caster level check.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/removeCurse.htm"
  },
  {
    "id": "remove-disease",
    "name": "Remove Disease",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Paladin": 3,
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Cures all diseases the subject is suffering, including magical ones with a caster level check.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/removeDisease.htm",
    "subschool": "Healing"
  },
  {
    "id": "remove-fear",
    "name": "Remove Fear",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Cleric": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature plus one per four levels, no two more than 30 ft. apart",
    "duration": "10 minutes",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Suppresses fear effects and grants +4 morale on saves against fear.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/removeFear.htm"
  },
  {
    "id": "remove-paralysis",
    "name": "Remove Paralysis",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Paladin": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to four creatures, no two more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Frees creatures from paralysis or grants a new save with a bonus against such effects.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/removeParalysis.htm",
    "subschool": "Healing"
  },
  {
    "id": "repel-metal-or-stone",
    "name": "Repel Metal or Stone",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "60-ft. emanation centered on you",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Metal and stone objects and creatures are pushed away from you by an invisible barrier, as repel wood but for metal and stone.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/repelMetalOrStone.htm"
  },
  {
    "id": "repel-vermin",
    "name": "Repel Vermin",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Cleric": 4,
      "Druid": 4,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Creates an invisible barrier that vermin cannot cross, repelling swarms and giant vermin.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/repelVermin.htm"
  },
  {
    "id": "repel-wood",
    "name": "Repel Wood",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 6,
      "Plant": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "60-ft. emanation centered on you",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Wooden objects and creatures (including trees and wooden weapons) are pushed away from you by an invisible barrier for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/repelWood.htm"
  },
  {
    "id": "repulsion",
    "name": "Repulsion",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Up to 10 ft./level",
    "targetOrArea": "Up to 10-ft.-radius/level emanation centered on you",
    "duration": "1 round/level (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Creatures cannot approach within the emanation's radius of you for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/repulsion.htm"
  },
  {
    "id": "resist-energy",
    "name": "Resist Energy",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 2,
      "Paladin": 2,
      "Ranger": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants resistance 10 (20 at 7th, 30 at 11th) against one energy type.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/resistEnergy.htm"
  },
  {
    "id": "resistance",
    "name": "Resistance",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Cleric": 0,
      "Druid": 0,
      "Paladin": 1,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Touched creature gains a +1 resistance bonus on saving throws for 1 minute.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/resistance.htm"
  },
  {
    "id": "restoration",
    "name": "Restoration",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Paladin": 4
    },
    "components": "V, S, M",
    "castingTime": "3 rounds",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Restores all temporary ability damage, 1d4 drained ability points, fatigue/exhaustion, and one drained level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/restoration.htm",
    "subschool": "Healing"
  },
  {
    "id": "restoration-greater",
    "name": "Restoration, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S, XP",
    "castingTime": "3 rounds",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As restoration, but restores all drained abilities, all drained levels, and cures insanity and confusion.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/restorationGreater.htm",
    "subschool": "Healing"
  },
  {
    "id": "restoration-lesser",
    "name": "Restoration, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 2,
      "Paladin": 1
    },
    "components": "V, S",
    "castingTime": "3 rounds",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Dispels magical ability penalties and restores 1d4 points of temporary ability damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/restorationLesser.htm",
    "subschool": "Healing"
  },
  {
    "id": "resurrection",
    "name": "Resurrection",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S, M, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Dead creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "Restores life and full health to a creature dead up to 10 years/level, even from a piece of the body; it loses a level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/resurrection.htm",
    "subschool": "Healing"
  },
  {
    "id": "reverse-gravity",
    "name": "Reverse Gravity",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 8,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to one 10-ft. cube per level (S)",
    "duration": "1 round/level (D)",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "Reverses gravity in the area: creatures and objects fall upward to the ceiling or sky.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/reverseGravity.htm"
  },
  {
    "id": "righteous-might",
    "name": "Righteous Might",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Strength": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You grow one size, gaining +4 Str, +2 Con, +4 natural armor, and damage reduction by alignment.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/righteousMight.htm"
  },
  {
    "id": "rope-trick",
    "name": "Rope Trick",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One touched piece of rope, 5-30 ft. long",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A rope rises into an extradimensional space that hides up to eight creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/ropeTrick.htm"
  },
  {
    "id": "rusting-grasp",
    "name": "Rusting Grasp",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature or object",
    "duration": "See text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your touch corrodes iron and its alloys, destroying items and damaging iron golems.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/rustingGrasp.htm"
  },
  {
    "id": "sanctuary",
    "name": "Sanctuary",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 round/level",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "Attackers must succeed on a Will save to attack the warded creature directly; ends if the creature attacks.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sanctuary.htm"
  },
  {
    "id": "scare",
    "name": "Scare",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature per three levels, no two more than 30 ft. apart",
    "duration": "1 round/level or 1 round; see text",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "Living creatures of less than 6 HD become frightened, or shaken on a successful save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/scare.htm"
  },
  {
    "id": "scintillating-pattern",
    "name": "Scintillating Pattern",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Colorful pattern in a 20-ft.-radius spread",
    "duration": "Concentration + 2 rounds",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A twisting pattern of colors affects creatures by HD: unconscious, stunned, or confused — with no save — as long as they remain in the pattern.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/scintillatingPattern.htm",
    "subschool": "Pattern"
  },
  {
    "id": "scorching-ray",
    "name": "Scorching Ray",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more creatures or objects, no two more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Fiery rays deal 4d6 fire damage each; one ray at 3rd level, +1 per four levels (max 3).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/scorchingRay.htm"
  },
  {
    "id": "screen",
    "name": "Screen",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8,
      "Trickery": 8
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "30-ft. cube/level (S)",
    "duration": "24 hours",
    "savingThrow": "None or Will disbelief (if interacted with); see text",
    "spellResistance": "No",
    "summary": "Makes an area appear as something else to sight and scrying; scryers see the false scene automatically.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/screen.htm",
    "subschool": "Glamer"
  },
  {
    "id": "scrying",
    "name": "Scrying",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Cleric": 5,
      "Druid": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF, F",
    "castingTime": "1 hour",
    "range": "See text",
    "targetOrArea": "Magical sensor at a place the subject is",
    "duration": "1 minute/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Spy on a subject remotely through a mirror, pool, or holy water; the subject gets a Will save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/scrying.htm",
    "subschool": "Scrying"
  },
  {
    "id": "scrying-greater",
    "name": "Scrying, Greater",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 7,
      "Druid": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "Magical sensor at a place the subject is",
    "duration": "1 hour/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As scrying, but faster casting, longer duration, and message and tongues work through the sensor.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/scryingGreater.htm",
    "subschool": "Scrying"
  },
  {
    "id": "sculpt-sound",
    "name": "Sculpt Sound",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature or object per level, no two more than 30 ft. apart",
    "duration": "1 hour/level (D)",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Changes the sounds creatures or objects make into whatever sounds you choose.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sculptSound.htm"
  },
  {
    "id": "searing-light",
    "name": "Searing Light",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray of sunlight deals 1d8/level damage to undead (max 10d8), half that to others.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/searingLight.htm"
  },
  {
    "id": "secret-chest",
    "name": "Secret Chest",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "See text",
    "targetOrArea": "One chest and up to 1 cu. ft./level of goods",
    "duration": "Sixty days or until discharged",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Hides an expensive chest on the Ethereal Plane; you can retrieve it at will by using its miniature replica, and it returns automatically if not recalled.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/secretChest.htm",
    "subschool": "Summoning"
  },
  {
    "id": "secret-page",
    "name": "Secret Page",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "One page touched, up to 3 ft. square in size",
    "duration": "Permanent (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Changes a page's contents and hides the original text until a command word is spoken.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/secretPage.htm"
  },
  {
    "id": "secure-shelter",
    "name": "Secure Shelter",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M, F",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-square structure",
    "duration": "2 hours/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a sturdy cottage with an unseen servant, arcane-locked openings, and provisions for eight.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/secureShelter.htm",
    "subschool": "Creation"
  },
  {
    "id": "see-invisibility",
    "name": "See Invisibility",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You can see invisible and ethereal creatures and objects as translucent shapes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/seeInvisibility.htm"
  },
  {
    "id": "seeming",
    "name": "Seeming",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "12 hours (D)",
    "savingThrow": "Will negates or Will disbelief (if interacted with)",
    "spellResistance": "Yes",
    "summary": "Changes the appearance of a whole group as disguise self, for each member.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/seeming.htm",
    "subschool": "Glamer"
  },
  {
    "id": "sending",
    "name": "Sending",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M/DF",
    "castingTime": "10 minutes",
    "range": "See text",
    "targetOrArea": "One creature",
    "duration": "1 round; see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Send a 25-word message to a familiar creature anywhere, which can reply with 25 words.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sending.htm"
  },
  {
    "id": "sepia-snake-sigil",
    "name": "Sepia Snake Sigil",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "One touched piece of text, up to 25 words",
    "duration": "Permanent until discharged; then 1d4 days + 1 day/level",
    "savingThrow": "Reflex negates",
    "spellResistance": "No",
    "summary": "Hides a sigil in text; when read, a snake springs out and holds the reader in stasis.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sepiaSnakeSigil.htm",
    "subschool": "Creation"
  },
  {
    "id": "sequester",
    "name": "Sequester",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One willing creature or object (up to a 2-ft. cube per level) touched",
    "duration": "1 day/level (D)",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Puts a creature into suspended animation and makes subject and its gear invisible to sight and scrying.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sequester.htm"
  },
  {
    "id": "shades",
    "name": "Shades",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Will disbelief (if interacted with)",
    "targetOrArea": "See text",
    "duration": "See text",
    "savingThrow": "See text",
    "spellResistance": "See text",
    "summary": "As shadow conjuration, but conjures quasi-real versions of spells up to 8th level that are 80% real if disbelieved.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shades.htm",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-conjuration",
    "name": "Shadow Conjuration",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "See text",
    "savingThrow": "Will disbelief (if interacted with); see text",
    "spellResistance": "Yes; see text",
    "summary": "Mimics a sorcerer/wizard conjuration spell of 3rd level or lower with quasi-real shadow stuff (20% real).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shadowConjuration.htm",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-conjuration-greater",
    "name": "Shadow Conjuration, Greater",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "See text",
    "savingThrow": "Will disbelief (if interacted with); see text",
    "spellResistance": "Yes; see text",
    "summary": "As shadow conjuration, but mimics spells of 6th level or lower and is 60% real.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shadowConjurationGreater.htm",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-evocation",
    "name": "Shadow Evocation",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "See text",
    "savingThrow": "Will disbelief (if interacted with); see text",
    "spellResistance": "Yes; see text",
    "summary": "Mimics a sorcerer/wizard evocation spell of 4th level or lower with shadow stuff (20% real).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shadowEvocation.htm",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-evocation-greater",
    "name": "Shadow Evocation, Greater",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "See text",
    "savingThrow": "Will disbelief (if interacted with); see text",
    "spellResistance": "Yes; see text",
    "summary": "As shadow evocation, but mimics spells of 7th level or lower and is 60% real.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shadowEvocationGreater.htm",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-walk",
    "name": "Shadow Walk",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Up to one touched creature per level",
    "duration": "1 hour/level (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Subjects step into shadow and travel the border of the Plane of Shadow at 50 miles per hour.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shadowWalk.htm",
    "subschool": "Shadow"
  },
  {
    "id": "shambler",
    "name": "Shambler",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to three shambling mounds, no two more than 30 ft. apart",
    "duration": "7 days or 7 months; see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons shambling mounds that guard an area for months or fight for you for a week.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shambler.htm",
    "subschool": "Summoning"
  },
  {
    "id": "shapechange",
    "name": "Shapechange",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 9,
      "Sorcerer/Wizard": 9,
      "Animal": 9
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Assume the form of any creature from Fine to Colossal (up to 25 HD), changing once per round as a free action.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shapechange.htm"
  },
  {
    "id": "shatter",
    "name": "Shatter",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "5-ft.-radius spread, or one solid object or crystal creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object); Will negates (object) or Fortitude half; see text",
    "spellResistance": "Yes (object)",
    "summary": "A sonic blast shatters brittle objects or damages a crystal creature for 1d6/level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shatter.htm"
  },
  {
    "id": "shield",
    "name": "Shield",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an invisible shield giving +4 shield bonus to AC and blocking magic missiles.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shield.htm"
  },
  {
    "id": "shield-of-faith",
    "name": "Shield of Faith",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Touched creature gains a +2 deflection bonus to AC, +1 per six caster levels (max +5).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shieldOfFaith.htm"
  },
  {
    "id": "shield-of-law",
    "name": "Shield of Law",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Lawful"
    ],
    "levels": {
      "Cleric": 8,
      "Law": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level in a 20-ft.-radius burst centered on you",
    "duration": "1 round/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Wards subjects like holy aura but against chaos: +4 deflection to AC, +4 resistance on saves, SR 25 against chaotic spells, and chaotic summoned creatures are hedged out.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shieldOfLaw.htm"
  },
  {
    "id": "shield-other",
    "name": "Shield Other",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Paladin": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1 hour/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains +1 deflection AC and +1 on saves, and you absorb half the damage it takes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shieldOther.htm"
  },
  {
    "id": "shillelagh",
    "name": "Shillelagh",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One touched nonmagical oak club or quarterstaff",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Your club or quarterstaff becomes a +1 weapon dealing 2d6 base damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shillelagh.htm"
  },
  {
    "id": "shocking-grasp",
    "name": "Shocking Grasp",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Your touch deals 1d6 electricity damage per level (max 5d6), +3 to hit metal-clad foes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shockingGrasp.htm"
  },
  {
    "id": "shout",
    "name": "Shout",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial or Reflex negates (object); see text",
    "spellResistance": "Yes (object)",
    "summary": "An ear-splitting yell deals 5d6 sonic damage and deafens creatures in the cone.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shout.htm"
  },
  {
    "id": "shout-greater",
    "name": "Shout, Greater",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "60 feet",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial or Reflex negates (object); see text",
    "spellResistance": "Yes (object)",
    "summary": "As shout but far stronger: 10d6 sonic damage, stunning, deafness, and damage to crystalline creatures and objects in the cone.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shoutGreater.htm"
  },
  {
    "id": "shrink-item",
    "name": "Shrink Item",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One touched object of up to 2 cu. ft./level",
    "duration": "1 day/level; see text",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Shrinks an item to 1/16 size (1/4,000 mass), optionally turning it clothlike, until dismissed.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/shrinkItem.htm"
  },
  {
    "id": "silence",
    "name": "Silence",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius emanation centered on a creature, object, or point in space",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will negates; see text or None (object)",
    "spellResistance": "Yes; see text or No (object)",
    "summary": "Creates an area of total silence: no speech, verbal spells, or sonic effects within.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/silence.htm",
    "subschool": "Glamer"
  },
  {
    "id": "silent-image",
    "name": "Silent Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Visual figment within four 10-ft. cubes + one per level",
    "duration": "Concentration",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Creates a silent visual illusion of an object, creature, or force.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/silentImage.htm",
    "subschool": "Figment"
  },
  {
    "id": "simulacrum",
    "name": "Simulacrum",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M, XP",
    "castingTime": "12 hours",
    "range": "0 ft.",
    "targetOrArea": "One duplicate creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a part-real duplicate of a creature with half its levels/HD and abilities, under your control.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/simulacrum.htm",
    "subschool": "Shadow"
  },
  {
    "id": "slay-living",
    "name": "Slay Living",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death"
    ],
    "levels": {
      "Cleric": 5,
      "Death": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "Your touch slays the subject; on a successful save it still takes 3d6 + 1/level damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/slayLiving.htm"
  },
  {
    "id": "sleep",
    "name": "Sleep",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One or more living creatures within a 10-ft.-radius burst",
    "duration": "1 minute/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Puts up to 4 HD of creatures into a magical slumber.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sleep.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "sleet-storm",
    "name": "Sleet Storm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Cylinder (40-ft. radius, 20 ft. high)",
    "duration": "1 round/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Driving sleet blocks all sight, makes the ground icy and slippery, and extinguishes flames.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sleetStorm.htm",
    "subschool": "Creation"
  },
  {
    "id": "slow",
    "name": "Slow",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level, no two more than 30 ft. apart",
    "duration": "1 round/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Slows creatures: only one action per round, -1 attacks/AC/Reflex, speed halved. Counters haste.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/slow.htm"
  },
  {
    "id": "snare",
    "name": "Snare",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "3 rounds",
    "range": "Touch",
    "targetOrArea": "Touched rope or vine, 5 ft. + 2 ft./level long at most",
    "duration": "Until triggered or broken",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Enchants a loop of rope or vine into a magical trap that entangles a creature stepping in.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/snare.htm"
  },
  {
    "id": "soften-earth-and-stone",
    "name": "Soften Earth and Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 2,
      "Earth": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "10-ft. square/level",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Turns worked or unworked stone to soft clay and earth to sand or mud, collapsing structures and miring creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/softenEarthAndStone.htm"
  },
  {
    "id": "solid-fog",
    "name": "Solid Fog",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Fog spread 20 ft. radius, 20 ft. high",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Like fog cloud, but the thick vapors also slow movement to 5 feet and impose -2 on melee attacks and damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/solidFog.htm",
    "subschool": "Creation"
  },
  {
    "id": "song-of-discord",
    "name": "Song of Discord",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Creatures within a 20-ft.-radius spread",
    "duration": "1 round/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Causes affected creatures to attack each other (50% chance each round) instead of their foes.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/songOfDiscord.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "soul-bind",
    "name": "Soul Bind",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Corpse",
    "duration": "Permanent",
    "savingThrow": "Will negates; see text",
    "spellResistance": "No",
    "summary": "Traps the soul of a newly dead creature in a black sapphire, preventing its return to life.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/soulBind.htm"
  },
  {
    "id": "sound-burst",
    "name": "Sound Burst",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 2
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Spread 10-ft. radius",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "A blast of sound deals 1d8 sonic damage and may stun creatures for 1 round.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/soundBurst.htm"
  },
  {
    "id": "speak-with-animals",
    "name": "Speak with Animals",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You can converse with animals, asking questions and receiving answers within their knowledge.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/speakWithAnimals.htm"
  },
  {
    "id": "speak-with-dead",
    "name": "Speak with Dead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Language-Dependent"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, DF",
    "castingTime": "10 minutes",
    "range": "10 ft.",
    "targetOrArea": "One dead creature",
    "duration": "1 minute/level",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Ask a corpse questions (two per level); answers are brief and reflect what it knew in life.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/speakWithDead.htm"
  },
  {
    "id": "speak-with-plants",
    "name": "Speak with Plants",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Druid": 3,
      "Ranger": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You can converse with normal and magical plants about the area and recent events.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/speakWithPlants.htm"
  },
  {
    "id": "spectral-hand",
    "name": "Spectral Hand",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One ghostly hand",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a ghostly hand that delivers your touch spells at range with a +2 attack bonus.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spectralHand.htm"
  },
  {
    "id": "spell-immunity",
    "name": "Spell Immunity",
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
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants complete immunity to one named spell per four levels (4th level or lower, SR applicable).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spellImmunity.htm"
  },
  {
    "id": "spell-immunity-greater",
    "name": "Spell Immunity, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10 min./level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As spell immunity, but protects against spells of up to 8th level (one spell per four caster levels).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spellImmunityGreater.htm"
  },
  {
    "id": "spell-resistance",
    "name": "Spell Resistance",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants spell resistance 12 + caster level to the touched creature.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spellResistance.htm"
  },
  {
    "id": "spell-turning",
    "name": "Spell Turning",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7,
      "Magic": 7,
      "Luck": 7
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Until expended or 10 minutes/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Reflects 1d4+6 spell levels of targeted spells back at their casters.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spellTurning.htm"
  },
  {
    "id": "spellstaff",
    "name": "Spellstaff",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, F",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "Wooden quarterstaff touched",
    "duration": "Permanent until discharged (D)",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Stores one spell you cast into your staff, which you can later cast as if storing it in a ring of spell storing (usable once until recharged).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spellstaff.htm"
  },
  {
    "id": "spider-climb",
    "name": "Spider Climb",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subject can climb and travel on vertical surfaces and ceilings like a spider.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spiderClimb.htm"
  },
  {
    "id": "spike-growth",
    "name": "Spike Growth",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One 20-ft. square/level (S)",
    "duration": "1 hour/level (D)",
    "savingThrow": "Reflex partial",
    "spellResistance": "No",
    "summary": "Ground vegetation turns sharp and tangled: creatures take 1d4 damage for each 5 feet moved through it, and a failed Reflex save injures a leg, halving speed.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spikeGrowth.htm"
  },
  {
    "id": "spike-stones",
    "name": "Spike Stones",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 4,
      "Earth": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One 20-ft. square/level (S)",
    "duration": "1 hour/level (D)",
    "savingThrow": "Reflex partial",
    "spellResistance": "Yes",
    "summary": "The ground becomes sharp stone spikes: creatures moving through take 1d8 damage per 5 feet and may be slowed by leg injuries, and the area counts as difficult terrain.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spikeStones.htm"
  },
  {
    "id": "spiritual-weapon",
    "name": "Spiritual Weapon",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Magic weapon of force",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A weapon of force shaped like your deity's weapon strikes foes for 1d8+1/three levels.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/spiritualWeapon.htm"
  },
  {
    "id": "statue",
    "name": "Statue",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 hour/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject transforms into a granite statue (and back by free action) while retaining awareness.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/statue.htm"
  },
  {
    "id": "status",
    "name": "Status",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One living creature touched per three levels",
    "duration": "1 hour/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Monitors the condition and location of allies: dying, stable, poisoned, diseased, and so on.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/status.htm"
  },
  {
    "id": "stinking-cloud",
    "name": "Stinking Cloud",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Poison"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Cloud spread 20 ft. radius, 20 ft. high",
    "duration": "1 round/level",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "No",
    "summary": "Creates a bank of nauseating vapors; creatures in it are nauseated while inside and 1d4+1 rounds after.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/stinkingCloud.htm",
    "subschool": "Creation"
  },
  {
    "id": "stone-shape",
    "name": "Stone Shape",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Stone or stone object touched, up to 10 cu. ft. + 1 cu. ft./level",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Shapes an existing piece of stone into any form you choose.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/stoneShape.htm"
  },
  {
    "id": "stone-tell",
    "name": "Stone Tell",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, DF",
    "castingTime": "10 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 min./level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You commune with natural or worked stone, which answers questions about creatures and events it has witnessed (its perspective is limited and literal).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/stoneTell.htm"
  },
  {
    "id": "stone-to-flesh",
    "name": "Stone to Flesh",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One petrified creature or a cylinder of stone 1-3 ft. diameter by up to 10 ft. long",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates (object); see text",
    "spellResistance": "Yes",
    "summary": "Restores a petrified creature to flesh (with a system shock survival roll) or converts plain stone to flesh.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/stoneToFlesh.htm"
  },
  {
    "id": "stoneskin",
    "name": "Stoneskin",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Sorcerer/Wizard": 4,
      "Earth": 4,
      "Strength": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10 minutes/level or until discharged",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants damage reduction 10/adamantine, absorbing up to 10 points per level (max 150).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/stoneskin.htm"
  },
  {
    "id": "storm-of-vengeance",
    "name": "Storm of Vengeance",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Druid": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "360-ft.-radius spread",
    "duration": "Concentration (maximum 10 rounds) (D)",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A vast storm: deafening thunder, acid rain, lightning (6d6), hail (5d6), then blinding rain and altered terrain.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/stormOfVengeance.htm",
    "subschool": "Summoning"
  },
  {
    "id": "suggestion",
    "name": "Suggestion",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Language-Dependent",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1 hour/level or until completed",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Compels a creature to follow a reasonable spoken course of activity.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/suggestion.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "suggestion-mass",
    "name": "Suggestion, Mass",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Language-Dependent",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature/level, no two more than 30 ft. apart",
    "duration": "1 hour/level or until completed",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As suggestion, but affects one creature per level with the same suggested course of action.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/suggestionMass.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "summon-instrument",
    "name": "Summon Instrument",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 0
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "0 ft.",
    "targetOrArea": "One summoned handheld musical instrument",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a common musical instrument into your hands.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonInstrument.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-i",
    "name": "Summon Monster I",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned creature",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a low-tier celestial or fiendish creature that fights for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterI.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-ii",
    "name": "Summon Monster II",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-2 celestial or fiendish creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterII.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-iii",
    "name": "Summon Monster III",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-3 celestial or fiendish creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterIII.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-iv",
    "name": "Summon Monster IV",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-4 celestial or fiendish creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterIV.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-ix",
    "name": "Summon Monster IX",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-9 celestial or fiendish creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterIX.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-v",
    "name": "Summon Monster V",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-5 celestial or fiendish creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterV.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-vi",
    "name": "Summon Monster VI",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-6 celestial or fiendish creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterVI.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-vii",
    "name": "Summon Monster VII",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-7 celestial or fiendish creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterVII.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-monster-viii",
    "name": "Summon Monster VIII",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-8 celestial or fiendish creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonMonsterVIII.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-i",
    "name": "Summon Nature's Ally I",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned creature",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a natural animal or creature that fights for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyI.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-ii",
    "name": "Summon Nature's Ally II",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-2 natural creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyII.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-iii",
    "name": "Summon Nature's Ally III",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-3 natural creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyIII.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-iv",
    "name": "Summon Nature's Ally IV",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Ranger": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-4 natural creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyIV.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-ix",
    "name": "Summon Nature's Ally IX",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-9 natural creatures, up to elder elementals, that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyIX.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-v",
    "name": "Summon Nature's Ally V",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-5 natural creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyV.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-vi",
    "name": "Summon Nature's Ally VI",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-6 natural creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyVI.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-vii",
    "name": "Summon Nature's Ally VII",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-7 natural creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyVII.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-natures-ally-viii",
    "name": "Summon Nature's Ally VIII",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two more than 30 ft. apart",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons tier-8 natural creatures that fight for you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonNaturesAllyVIII.htm",
    "subschool": "Summoning"
  },
  {
    "id": "summon-swarm",
    "name": "Summon Swarm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One swarm of bats, rats, or spiders",
    "duration": "Concentration + 2 rounds",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a swarm of bats, rats, or spiders that attacks creatures in its area.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/summonSwarm.htm",
    "subschool": "Summoning"
  },
  {
    "id": "sunbeam",
    "name": "Sunbeam",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Druid": 7,
      "Sun": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Line 60 ft. long, 5 ft. wide",
    "duration": "1 round/level or until all beams expended",
    "savingThrow": "Reflex negates or Reflex half; see text",
    "spellResistance": "Yes",
    "summary": "Creates one beam of blinding light per level (max one per round), 4d6 damage and devastating to undead and fungi.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sunbeam.htm"
  },
  {
    "id": "sunburst",
    "name": "Sunburst",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Druid": 8,
      "Sorcerer/Wizard": 8,
      "Sun": 8
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "80-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex partial",
    "spellResistance": "Yes",
    "summary": "A globe of searing light blinds creatures and deals 6d6 (1d6/level, max 25d6 to undead and light-vulnerable foes).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sunburst.htm"
  },
  {
    "id": "symbol-of-death",
    "name": "Symbol of Death",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death"
    ],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "One symbol",
    "duration": "See text",
    "savingThrow": "Fortitude negates",
    "spellResistance": "No",
    "summary": "A rune that, when triggered, slays the weakest creatures within 60 feet up to 150 hp total.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/symbolOfDeath.htm"
  },
  {
    "id": "symbol-of-fear",
    "name": "Symbol of Fear",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "One symbol",
    "duration": "See text",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "A rune that, when triggered, panics all within 60 feet for 1 round per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/symbolOfFear.htm"
  },
  {
    "id": "symbol-of-insanity",
    "name": "Symbol of Insanity",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "One symbol",
    "duration": "See text",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "A rune that, when triggered, drives all within 60 feet permanently insane.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/symbolOfInsanity.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "symbol-of-pain",
    "name": "Symbol of Pain",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "One symbol",
    "duration": "See text",
    "savingThrow": "Fortitude negates",
    "spellResistance": "No",
    "summary": "A rune that, when triggered, wracks all within 60 feet with pain (-4 attacks, skills, abilities) for 1 hour.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/symbolOfPain.htm"
  },
  {
    "id": "symbol-of-persuasion",
    "name": "Symbol of Persuasion",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "One symbol",
    "duration": "See text",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "A rune that, when triggered, charms all within 60 feet for 1 hour per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/symbolOfPersuasion.htm",
    "subschool": "Charm"
  },
  {
    "id": "symbol-of-sleep",
    "name": "Symbol of Sleep",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "Symbol",
    "duration": "See text",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "When triggered, all creatures within 60 feet fall into a catatonic slumber for 3d6x10 minutes (creatures of 10 HD or more are unaffected).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/symbolOfSleep.htm"
  },
  {
    "id": "symbol-of-stunning",
    "name": "Symbol of Stunning",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "One symbol",
    "duration": "See text",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "A rune that, when triggered, stuns all within 60 feet for 1d6 rounds.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/symbolOfStunning.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "symbol-of-weakness",
    "name": "Symbol of Weakness",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "One symbol",
    "duration": "See text",
    "savingThrow": "Fortitude negates",
    "spellResistance": "No",
    "summary": "A rune that, when triggered, imposes 3d6 Strength damage on all within 60 feet.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/symbolOfWeakness.htm"
  },
  {
    "id": "sympathetic-vibration",
    "name": "Sympathetic Vibration",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 6
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "One freestanding structure",
    "duration": "Up to 1 round/level; see text",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Sets up destructive resonance in a structure: it takes 2d10 damage per round until the spell ends or the structure fails.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sympatheticVibration.htm"
  },
  {
    "id": "sympathy",
    "name": "Sympathy",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 9,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 hour",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One location or object, up to one 10-ft. cube per level",
    "duration": "2 hours/level (D)",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Draws a specified kind of creature irresistibly to a place or object, where it stays contentedly.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/sympathy.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "tashas-hideous-laughter",
    "name": "Tasha's Hideous Laughter",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature; see text",
    "duration": "1 round/level (concentration)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Subject collapses into gales of manic laughter, prone and unable to act.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/tashasHideousLaughter.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "telekinesis",
    "name": "Telekinesis",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "See text",
    "duration": "Concentration (up to 1 round/level) or instantaneous; see text",
    "savingThrow": "Will negates (object); see text",
    "spellResistance": "Yes (object); see text",
    "summary": "Move objects up to 25 lb./level, hurl objects and creatures as attacks, or sustain force on a target.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/telekinesis.htm"
  },
  {
    "id": "telepathic-bond",
    "name": "Telepathic Bond",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "You plus one willing creature per three levels, no two more than 30 ft. apart",
    "duration": "10 min./level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a telepathic link among you and the subjects: you can communicate mentally at any distance on the same plane.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/telepathicBond.htm"
  },
  {
    "id": "teleport",
    "name": "Teleport",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5,
      "Travel": 5
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal and touch",
    "targetOrArea": "You and touched objects or other touched willing creatures",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates (object)",
    "spellResistance": "No or Yes (object)",
    "summary": "Instantly transports you up to 100 miles/level to a known destination; familiarity determines mishap risk.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/teleport.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "teleport-object",
    "name": "Teleport Object",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One touched object of up to 50 lb./level and 3 cu. ft./level",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "As teleport, but teleports a touched object to a designated destination instead of creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/teleportObject.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "teleport-greater",
    "name": "Teleport, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7,
      "Travel": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal and touch",
    "targetOrArea": "You and touched objects or other touched willing creatures",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates (object)",
    "spellResistance": "No or Yes (object)",
    "summary": "As teleport, but no range limit and no off-target arrival.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/teleportGreater.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "teleportation-circle",
    "name": "Teleportation Circle",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "0 ft.",
    "targetOrArea": "Circle 5 ft. in radius",
    "duration": "10 minutes/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an invisible circle that teleports any creature stepping in it to a designated destination.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/teleportationCircle.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "temporal-stasis",
    "name": "Temporal Stasis",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Puts the subject into suspended animation: unaging, unaware, and immune to harm, undetectable by most divinations.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/temporalStasis.htm"
  },
  {
    "id": "time-stop",
    "name": "Time Stop",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9,
      "Trickery": 9,
      "Time": 8
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1d4+1 rounds (apparent time); see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Time freezes for everyone else while you act freely for 1d4+1 rounds (unable to harm others directly).",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/timeStop.htm"
  },
  {
    "id": "tiny-hut",
    "name": "Tiny Hut",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "20-ft.-radius sphere centered on your location",
    "duration": "2 hours/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an opaque, weatherproof force sphere that shelters up to nine others with you.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/tinyHut.htm"
  },
  {
    "id": "tongues",
    "name": "Tongues",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 4,
      "Sorcerer/Wizard": 3
    },
    "components": "V, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "The subject can speak and understand any language spoken by intelligent creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/tongues.htm"
  },
  {
    "id": "touch-of-fatigue",
    "name": "Touch of Fatigue",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 round/level",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your touch fatigues the target for the duration.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/touchOfFatigue.htm"
  },
  {
    "id": "touch-of-idiocy",
    "name": "Touch of Idiocy",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "10 minutes/level",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Your touch imposes a 1d6 penalty to the target's Intelligence, Wisdom, and Charisma.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/touchOfIdiocy.htm",
    "subschool": "Compulsion"
  },
  {
    "id": "transformation",
    "name": "Transformation",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You become a fighting machine: fighter BAB, +4 Str/Dex/Con enhancements, +4 natural armor, +5 Fortitude; you lose spellcasting.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/transformation.htm"
  },
  {
    "id": "transmute-metal-to-wood",
    "name": "Transmute Metal to Wood",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "All metal within a 40-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "All nonmagical metal in the area becomes wood; magical metal items get a saving throw, and attended items use their bearer's save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/transmuteMetalToWood.htm"
  },
  {
    "id": "transmute-mud-to-rock",
    "name": "Transmute Mud to Rock",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to two 10-ft. cubes per level (S)",
    "duration": "Permanent",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Transforms natural mud or quicksand into permanent soft stone.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/transmuteMudToRock.htm"
  },
  {
    "id": "transmute-rock-to-mud",
    "name": "Transmute Rock to Mud",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to two 10-ft. cubes per level (S)",
    "duration": "Permanent",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "No",
    "summary": "Transforms natural rock into mud deep enough to mire creatures and collapse ceilings.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/transmuteRockToMud.htm"
  },
  {
    "id": "transport-via-plants",
    "name": "Transport via Plants",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Unlimited",
    "targetOrArea": "One plant",
    "duration": "1 round",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Step into a plant and exit any other plant of the same kind on the same plane, any distance.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/transportViaPlants.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "trap-the-soul",
    "name": "Trap the Soul",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M, F",
    "castingTime": "1 standard action or see text",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Permanent; see text",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes; see text",
    "summary": "Imprisons a creature's life force and body inside a gem, which can be hidden or carried.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/trapTheSoul.htm",
    "subschool": "Summoning"
  },
  {
    "id": "tree-shape",
    "name": "Tree Shape",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You become a Large tree or shrub of a familiar kind, aware of your surroundings but unable to move or act; indistinguishable from a real tree without close inspection.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/treeShape.htm"
  },
  {
    "id": "tree-stride",
    "name": "Tree Stride",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Ranger": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 hour/level or until expended (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Step into one tree and out of another of the same kind up to 3,000 feet away, once per level.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/treeStride.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "true-resurrection",
    "name": "True Resurrection",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 9
    },
    "components": "V, S, M, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Dead creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "Restores life with no level or Constitution loss, even to a creature dead 200 years, destroyed, or with no body.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/trueResurrection.htm",
    "subschool": "Healing"
  },
  {
    "id": "true-seeing",
    "name": "True Seeing",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Cleric": 5,
      "Druid": 5,
      "Sorcerer/Wizard": 6,
      "Knowledge": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute/level",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subject sees through darkness, illusions, invisibility, and transformations, and discerns true forms, to 120 feet.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/trueSeeing.htm"
  },
  {
    "id": "true-strike",
    "name": "True Strike",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "See text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your next attack roll (before the end of your next turn) gains a +20 insight bonus and ignores concealment miss chances.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/trueStrike.htm"
  },
  {
    "id": "undeath-to-death",
    "name": "Undeath to Death",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Several undead creatures within a 40-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Destroys 1d4 HD per level of the weakest undead in the area, as circle of death for undead.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/undeathToDeath.htm"
  },
  {
    "id": "undetectable-alignment",
    "name": "Undetectable Alignment",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Cleric": 2,
      "Paladin": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature or object",
    "duration": "24 hours",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Conceals a creature's or object's alignment from all divinations.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/undetectableAlignment.htm"
  },
  {
    "id": "unhallow",
    "name": "Unhallow",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 5,
      "Druid": 5
    },
    "components": "V, S, M, DF",
    "castingTime": "24 hours",
    "range": "Touch",
    "targetOrArea": "Site or structure with up to a 40-ft.-radius emanation",
    "duration": "One year",
    "savingThrow": "See text",
    "spellResistance": "Yes; see text",
    "summary": "Designates a site as unholy, mirroring hallow: it strengthens undead, blocks good summoned creatures, and can carry one attached spell effect.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/unhallow.htm"
  },
  {
    "id": "unholy-aura",
    "name": "Unholy Aura",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 8,
      "Evil": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature per level (in a 20-ft.-radius burst around you)",
    "duration": "1 round/level (D)",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "See text",
    "summary": "An unholy radiance grants +4 deflection AC, +4 saves, SR 25 vs good spells, and weakens good attackers.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/unholyAura.htm"
  },
  {
    "id": "unholy-blight",
    "name": "Unholy Blight",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Evil": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "Unholy power smites good creatures for 1d8 damage per two levels (max 10d8), sickening them on a failed save; extra damage to good outsiders.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/unholyBlight.htm"
  },
  {
    "id": "unseen-servant",
    "name": "Unseen Servant",
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
    "targetOrArea": "One invisible, mindless, shapeless servant",
    "duration": "1 hour/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an invisible servant that fetches, carries, cleans, and performs simple tasks.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/unseenServant.htm",
    "subschool": "Creation"
  },
  {
    "id": "vampiric-touch",
    "name": "Vampiric Touch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous/1 hour; see text",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Your touch deals 1d6/level damage (max 10d6) and you gain that much as temporary hit points.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/vampiricTouch.htm"
  },
  {
    "id": "veil",
    "name": "Veil",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more creatures, no two more than 30 ft. apart",
    "duration": "Concentration + 1 hour/level (D)",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes; see text",
    "summary": "Changes the appearance of a whole group into other creatures, down to their voices and feel.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/veil.htm",
    "subschool": "Glamer"
  },
  {
    "id": "ventriloquism",
    "name": "Ventriloquism",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Intelligible sound, usually speech",
    "duration": "1 minute/level (D)",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Throws your voice or a similar sound so it seems to come from elsewhere.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/ventriloquism.htm",
    "subschool": "Figment"
  },
  {
    "id": "virtue",
    "name": "Virtue",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 0,
      "Druid": 0,
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Touched creature gains 1 temporary hit point for 1 minute.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/virtue.htm"
  },
  {
    "id": "vision",
    "name": "Vision",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, XP",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Concentration, up to 1 round/level",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As legend lore but quicker: a vision of a person, place, or thing of great importance, risking exhaustion.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/vision.htm"
  },
  {
    "id": "wail-of-the-banshee",
    "name": "Wail of the Banshee",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Sonic"
    ],
    "levels": {
      "Sorcerer/Wizard": 9,
      "Death": 9
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature per level within a 40-ft.-radius spread",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your keening wail slays up to one living creature per level that hears it and fails.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wailOfTheBanshee.htm"
  },
  {
    "id": "wall-of-fire",
    "name": "Wall of Fire",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 5,
      "Sorcerer/Wizard": 4,
      "Fire": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Wall of fire up to 20 ft. long/level or a ring up to 5 ft. radius/2 levels",
    "duration": "Concentration + 1 round/level",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A blazing curtain of fire damages creatures passing through (2d6+1/level) and radiates heat to one side.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wallOfFire.htm"
  },
  {
    "id": "wall-of-force",
    "name": "Wall of Force",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Wall of up to one 10-ft. square per level",
    "duration": "1 round/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "An invisible, immobile wall of force that blocks attacks, spells, and ethereal travel; only certain spells destroy it.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wallOfForce.htm"
  },
  {
    "id": "wall-of-ice",
    "name": "Wall of Ice",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 4,
      "Water": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Anchored plane of ice up to one 10-ft. square/level, or hemisphere of 3-ft. radius + 1 ft./level",
    "duration": "1 minute/level (D)",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "Creates a wall of ice (3 hp/inch) that emits a sheet of freezing cold on one side.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wallOfIce.htm"
  },
  {
    "id": "wall-of-iron",
    "name": "Wall of Iron",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Iron wall with an area of up to one 5-ft. square per level (S); see text",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Creates a permanent wall of iron (30 hp per inch) that can be toppled onto creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wallOfIron.htm",
    "subschool": "Creation"
  },
  {
    "id": "wall-of-stone",
    "name": "Wall of Stone",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Cleric": 5,
      "Druid": 6,
      "Sorcerer/Wizard": 5,
      "Earth": 5
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Stone wall with an area of up to one 5-ft. square per level (S)",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Creates a permanent wall of stone (15 hp per inch of thickness) that can trap creatures with a Reflex save.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wallOfStone.htm",
    "subschool": "Creation"
  },
  {
    "id": "wall-of-thorns",
    "name": "Wall of Thorns",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Wall of thorny brush up to one 10-ft. cube per level (S)",
    "duration": "1 minute/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a dense barrier of thorns; pushing through deals 25 damage minus AC per round of effort.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wallOfThorns.htm",
    "subschool": "Creation"
  },
  {
    "id": "warp-wood",
    "name": "Warp Wood",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One Small wooden object per level, no two within 20 ft.",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Bends, twists, or warps wooden objects, ruining weapons, doors, and tools.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/warpWood.htm"
  },
  {
    "id": "water-breathing",
    "name": "Water Breathing",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Ranger": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creatures touched, up to one per level",
    "duration": "2 hours/level; see text",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subjects can breathe underwater; the duration is divided among all recipients.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/waterBreathing.htm"
  },
  {
    "id": "water-walk",
    "name": "Water Walk",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One touched creature per level",
    "duration": "10 minutes/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Subjects can tread on liquids as if solid ground.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/waterWalk.htm"
  },
  {
    "id": "waves-of-exhaustion",
    "name": "Waves of Exhaustion",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Waves of negative energy exhaust all living creatures in the cone.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wavesOfExhaustion.htm"
  },
  {
    "id": "waves-of-fatigue",
    "name": "Waves of Fatigue",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Waves of negative energy fatigue all living creatures in the cone.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wavesOfFatigue.htm"
  },
  {
    "id": "web",
    "name": "Web",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Webs in a 20-ft.-radius spread",
    "duration": "10 minutes/level (D)",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "No",
    "summary": "Fills an area with sticky webs that entangle creatures and hinder movement.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/web.htm",
    "subschool": "Creation"
  },
  {
    "id": "weird",
    "name": "Weird",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Any number of creatures, no two more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Will disbelief (if interacted with), then Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "As phantasmal killer, but against any number of creatures; survivors take 1d4 rounds of stun and 1d4 Str damage.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/weird.htm",
    "subschool": "Phantasm"
  },
  {
    "id": "whirlwind",
    "name": "Whirlwind",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Air": 8,
      "Druid": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Whirlwind 10 ft. wide at base, 30 ft. wide at top, 50 ft. tall",
    "duration": "1 round/level (D)",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "Creates a powerful whirlwind under your control that can pick up creatures, dealing damage each round they remain caught.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/whirlwind.htm"
  },
  {
    "id": "whispering-wind",
    "name": "Whispering Wind",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "1 mile/level or within spell's area",
    "targetOrArea": "10-ft.-radius spread",
    "duration": "1 hour or until discharged (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Sends a short message on a breeze to a destination you know within range.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/whisperingWind.htm"
  },
  {
    "id": "wind-walk",
    "name": "Wind Walk",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "You and one touched creature per three levels",
    "duration": "1 hour/level (D)",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You and allies become vaporous and fly at up to 600 feet per round, changing form at will.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/windWalk.htm"
  },
  {
    "id": "wind-wall",
    "name": "Wind Wall",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 3,
      "Ranger": 2,
      "Sorcerer/Wizard": 3,
      "Air": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Wall up to 10 ft. long/level and 5 ft. high/level (S)",
    "duration": "1 round/level",
    "savingThrow": "None; see text",
    "spellResistance": "Yes",
    "summary": "A curtain of wind deflects arrows and bolts, scatters gases, and hinders flying creatures.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/windWall.htm"
  },
  {
    "id": "wish",
    "name": "Wish",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, XP",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "See text",
    "duration": "See text",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "The mightiest spell: duplicate spells up to 8th level, create items, grant inherent bonuses, undo misfortune, transport anywhere, and more at 5,000 XP.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wish.htm"
  },
  {
    "id": "wood-shape",
    "name": "Wood Shape",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One touched piece of wood no larger than 10 cu. ft. + 1 cu. ft./level",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Reshapes a piece of wood into any simple form you desire.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/woodShape.htm"
  },
  {
    "id": "word-of-chaos",
    "name": "Word of Chaos",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Chaotic",
      "Sonic"
    ],
    "levels": {
      "Cleric": 7,
      "Chaos": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "Nonchaotic creatures in a 40-ft.-radius spread centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Nonchaotic creatures are deafened, confused, stunned, or killed and banished, by their HD relative to yours.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wordOfChaos.htm"
  },
  {
    "id": "word-of-recall",
    "name": "Word of Recall",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Unlimited",
    "targetOrArea": "You and touched objects or other touched willing creatures",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates (object)",
    "spellResistance": "No or Yes (object)",
    "summary": "Teleport instantly back to your designated sanctuary with any touched companions.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/wordOfRecall.htm",
    "subschool": "Teleportation"
  },
  {
    "id": "zone-of-silence",
    "name": "Zone of Silence",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 4
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Personal",
    "targetOrArea": "5-ft.-radius emanation centered on you",
    "duration": "1 hour/level (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You surround yourself with a zone where no sound can be heard from outside the area, preventing eavesdropping on conversations within.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/zoneOfSilence.htm",
    "subschool": "Glamer"
  },
  {
    "id": "zone-of-truth",
    "name": "Zone of Truth",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 2,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius emanation",
    "duration": "1 minute/level",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Creatures in the area can't speak deliberate lies, though they may stay silent or evasive.",
    "source": "System Reference Document (SRD) spells",
    "sourceUrl": "https://www.d20srd.org/srd/spells/zoneOfTruth.htm",
    "subschool": "Compulsion"
  }
];
