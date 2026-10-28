import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Fiendish Codex II: Tyrants of the Nine Hells — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const FIENDISH_CODEX_II_SPELLS: SpellDefinition[] = [
{
  "id": "denounce",
  "name": "Denounce",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Cleric": 2,
    "Paladin": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One outsider",
  "duration": "1 min./level (D); see text",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "You instill feelings of shame and guilt in a target outsider, imposing a -4 insight penalty on its attack rolls, saves, and checks; each round the subject can attempt a new saving throw to end the effect. Outsiders with the good subtype are immune.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 100",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "devils-ego-fc2",
  "name": "Devil's Ego",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Diabolic": 3
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 min./level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain a +4 profane bonus to Charisma, and for the duration your type changes to outsider, making you immune to spells and effects that specifically target humanoids.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 101",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf",
  "note": "The Fiendish Codex II printing of this spell differs from the Book of Vile Darkness version (see that record): it grants a +4 profane bonus to Charisma instead of a 1d4+1 enhancement bonus, and its casting time is 1 swift action. Both versions are included; this is the later (2006) printing."
},
{
  "id": "hellfire-fc2",
  "name": "Hellfire",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Diabolic": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "10-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You create a small explosion of brimstone and fire dealing 1d8 points of damage per two caster levels (maximum 5d8) to creatures in the affected area. The damage is not fire damage and is not reduced by resistance to fire-based attacks.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 101",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf",
  "note": "The Fiendish Codex II printing of this spell differs from the Book of Vile Darkness version (see that record): a 10-ft.-radius spread instead of 5 ft., damage of 1d8 per two caster levels (maximum 5d8) instead of 3d6, and Spell Resistance: No instead of Yes. Both versions are included; this is the later (2006) printing."
},
{
  "id": "hellfire-storm-fc2",
  "name": "Hellfire Storm",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Diabolic": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "This spell functions like hellfire, except it deals 1d8 points of damage per caster level (maximum 10d8) to creatures in the affected area.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 101",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf",
  "note": "The Fiendish Codex II printing differs from the Book of Vile Darkness version (see that record): it functions as this book's hellfire and deals 1d8 points of damage per caster level (maximum 10d8) instead of 5d6. Both versions are included; this is the later (2006) printing. Abbreviated entry in Fiendish Codex II: Tyrants of the Nine Hells: functions as Hellfire except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "investiture-of-the-amnizu",
  "name": "Investiture of the Amnizu",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 3,
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You infuse a target with the intellect-sapping power and slippery mind of an amnizu: the subject can make a melee touch attack that deals 1d4 points of Intelligence damage, becomes immune to effects that damage or reduce Intelligence, and gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 101",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-barbed-devil",
  "name": "Investiture of the Barbed Devil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 4,
    "Cleric": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The target grows long barbs like those of a barbed devil: it does not provoke attacks of opportunity when initiating a grapple, and whenever it successfully makes a grapple check it impales its foe on its barbs for extra damage by size. It also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 102",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-bearded-devil",
  "name": "Investiture of the Bearded Devil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 2,
    "Cleric": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The target grows a long, ropy beard of callused tissue that flails about as though alive: if the subject hits an adjacent opponent with at least one melee attack in a round, it also automatically hits with its beard for an extra 2d8 points of damage. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 102",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-chain-devil",
  "name": "Investiture of the Chain Devil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 2,
    "Cleric": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The target is infused with the magical energies and malignant will of a chain devil: its reach increases by 5 feet and its maximum number of attacks of opportunity each round increases by one. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 102",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-erinyes",
  "name": "Investiture of the Erinyes",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 3,
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless); see text",
  "spellResistance": "Yes (harmless)",
  "summary": "The target gains the sinister allure of an erinyes: while the spell is in effect, the subject can beckon a creature it can see, forcing it to approach and take no action, as the text describes. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 102",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-harvester-devil",
  "name": "Investiture of the Harvester Devil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 3,
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The target deals horrific, lingering wounds with its melee attacks: a struck opponent takes an extra 1d6 points of damage each round until it dies or receives a DC 20 Heal check, a cure spell, or a heal spell. The subject also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 103",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-hellfire-engine",
  "name": "Investiture of the Hellfire Engine",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Cleric": 9,
    "Sorcerer/Wizard": 9
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless); see text",
  "spellResistance": "Yes (harmless)",
  "summary": "The affected creature gains all the benefits of the iron body spell except that its flesh transforms into living cold iron, and it can breathe a 30-foot cone of hellfire that deals 8d10 points of damage. It also gains resistance to fire 20. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 103",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-horned-devil",
  "name": "Investiture of the Horned Devil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Cleric": 8,
    "Sorcerer/Wizard": 8
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless); see text",
  "spellResistance": "Yes (harmless)",
  "summary": "Whenever the subject successfully strikes another living creature with the first melee attack it makes in a round, the struck creature must succeed on a Will save or be stunned for 1 round. The subject also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 103",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-ice-devil",
  "name": "Investiture of the Ice Devil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Cleric": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless); see text",
  "spellResistance": "Yes (harmless)",
  "summary": "Whenever the subject hits a living creature with a melee attack, that creature must succeed on a Will save or be slowed for 3 rounds, and the subject deals an extra 1d6 points of cold damage with each successful melee attack. The subject also gains resistance to cold 10 and fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 104",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-malebranche",
  "name": "Investiture of the Malebranche",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 4,
    "Cleric": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject grows twisted horns of blackened bone and deals extra damage whenever it successfully hits with a charge attack, depending on its size. It also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 104",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-narzugon",
  "name": "Investiture of the Narzugon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 4,
    "Cleric": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless); see text",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject can use a baleful gaze as a standard action: a single creature within 20 feet must succeed on a Will save or be immobilized for 1 round as if affected by a hold monster spell. The subject also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 104",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-orthon",
  "name": "Investiture of the Orthon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 4,
    "Cleric": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject can erect a 20-foot-radius field that disrupts teleportation spells and effects, as an immediate action, and benefits from a sonic shield like the fire shield spell (sonic damage instead of fire or cold). It also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 105",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-pit-fiend",
  "name": "Investiture of the Pit Fiend",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Cleric": 9,
    "Sorcerer/Wizard": 9
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless); see text",
  "spellResistance": "Yes (harmless)",
  "summary": "You infuse a creature with the terrifying power of a pit fiend: each round the invested creature chooses one of three aspects — tyranny (claw and wing attacks), pestilence (a cloud of disease-ridden air), or terror (a wave of fear) — as the text describes. The subject also gains immunity to poison and resistance to fire 20. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 105",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-spined-devil",
  "name": "Investiture of the Spined Devil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 1,
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject suddenly bristles with spines: it can snap its body forward to unleash a volley of up to three spines as a standard action, each dealing 1d6 points of damage plus the subject’s Strength modifier, up to fifteen spines per casting. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 106",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "investiture-of-the-steel-devil",
  "name": "Investiture of the Steel Devil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Investiture"
  ],
  "levels": {
    "Blackguard": 3,
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The target gains a +3 profane bonus on attack rolls and to Armor Class; this bonus increases by 1 for every adjacent creature that is also under the effect of an investiture of the steel devil spell. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 106",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
{
  "id": "righteous-exile",
  "name": "Righteous Exile",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 9
  },
  "components": "V",
  "castingTime": "1 full-round action",
  "range": "20 ft.",
  "targetOrArea": "20-ft.-radius burst, centered on you",
  "duration": "Instantaneous",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "All evil creatures in the area take 20d6 points of damage; in addition, evil outsiders that fail a Will saving throw are instantly transported back to their home planes.",
  "source": "Fiendish Codex II: Tyrants of the Nine Hells, p. 106",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf"
},
];
