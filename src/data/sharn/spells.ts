import type { SpellDefinition } from "@/engine/types";

// Sharn: City of Towers (Eberron, WotC) — the Chapter 6
// spell list, printed p. 168 (arcane seal and force hammer)
// and pp. 168-169 (shockwave), transcribed from Shaun's own
// scanned copy (read visually; the scan is image-only),
// 2026-11-04. These three spells are the book's whole spell
// content: nonlethal-force and warding magic for a crowded
// city. Summaries are original paraphrases of the printed
// mechanics; no book prose is reproduced.

const SHARN = "Sharn: City of Towers";
const SHARN_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Sharn - City of Towers.pdf";

export const SHARN_SPELLS: SpellDefinition[] = [
{
  "id": "arcane-seal",
  "name": "Arcane Seal",
  "ruleset": "eberron",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Magewright": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "The door, chest, or portal touched, up to 30 sq. ft./level in size",
  "duration": "Permanent",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Magically seals a door, chest, or portal and attaches a mystical alarm to the location. The spell's focus is a platinum key (worth 50 gp), mystically bound to the target and unusable again; the key's bearer may freely pass the seal without affecting it. Otherwise the sealed door or object can be opened only by breaking in or with a successful dispel magic or knock spell, and the break-open DC is increased by 10. If the door is opened in any manner, the key's bearer receives a mental alert: a single word set when the spell is cast. A knock spell suppresses the seal for 10 minutes; dispel magic permanently destroys it on a successful dispel check, though the seal sends its alert even if dispelled. A rogue or artificer can sense an arcane seal with a successful Search check (DC 28), and can temporarily disable the alarm using an arcane key.",
  "source": `${SHARN}, p. 168`,
  "sourceUrl": SHARN_PATH
},
{
  "id": "force-hammer",
  "name": "Force Hammer",
  "ruleset": "eberron",
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
  "targetOrArea": "Effect: Ray",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Designed to bring down a single opponent without causing lasting harm: you fire a ray of force at a single target with a ranged touch attack, dealing 1d4 points of nonlethal damage per level (maximum 10d4). If the target fails its Fortitude save, it is dazed for one round (a successful saving throw does not reduce the damage). Force hammer has no effect on nonliving creatures or objects, and creatures immune to nonlethal damage cannot be dazed by the spell.",
  "source": `${SHARN}, p. 168`,
  "sourceUrl": SHARN_PATH
},
{
  "id": "shockwave",
  "name": "Shockwave",
  "ruleset": "eberron",
  "school": "Evocation",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Creates a burst of concussive force that disorients victims without causing any permanent damage, dealing 1d4 points of nonlethal damage per caster level (maximum 10d4) to every creature within the area and dazing them for 1 round. A successful Fortitude save reduces the damage by half and negates the dazed effect. Shockwave has no effect on nonliving creatures or objects, and creatures immune to nonlethal damage cannot be dazed by the spell. Material component: a small crystal sphere.",
  "source": `${SHARN}, pp. 168-169`,
  "sourceUrl": SHARN_PATH
}
];
