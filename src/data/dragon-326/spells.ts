// Dragon Magazine #326 (December 2004) — spell draft: "Spellcraft: Cantrips and Orisons
// of the Academy of Apprentices" (Kieran Turley), pp. 72-74. Typed SpellDefinition in the
// house shape of recent packs: targetOrArea carries the printed Target/Area text without
// a label; material components ride in `note`. All seven headers were verified against
// rendered page images (pp. 73-74) — the image governs over the OCR stream. Three spells
// print NO Saving Throw / Spell Resistance lines and one prints NO Range line; those
// fields stage as "Not printed in source" (the live catalog's own convention, cf. the
// issue-325 pack) with the gap disclosed in each record's note and in MANIFEST.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #326 — Spellcraft: Cantrips and Orisons of the Academy of Apprentices (Kieran Turley), pp. 72-74";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Transmutation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 minute",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_326_SPELLS: SpellDefinition[] = [
  C({
    id: "fleeting-fame",
    name: "Fleeting Fame",
    school: "Illusion",
    subschool: "Glamer",
    levels: { Bard: 0, Cleric: 0, "Sorcerer/Wizard": 0 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    note: "The magazine header prints no Saving Throw or Spell Resistance line for this spell (image-verified, p. 73).",
    summary:
      "Your clothing, armor, weapons, equipment, and physical countenance take on a well-kept and stylish appearance, and those around you get the impression that you are wealthy, well known, and powerful: you gain a +2 bonus on the next single Bluff, Diplomacy, or Intimidation skill check you make during the spell's duration.",
  }),
  C({
    id: "groundsmoke",
    name: "Groundsmoke",
    school: "Transmutation",
    levels: { Druid: 0, Ranger: 1, "Sorcerer/Wizard": 0 },
    range: "Not printed in source",
    targetOrArea: "One fire no larger than 5 square feet",
    duration: "8 hours",
    savingThrow: "None",
    spellResistance: "No",
    note: "The spell's own header prints the name as one word, \"Groundsmoke,\" and prints no Range line (image-verified, p. 73); the article's spell list writes the name as two words, \"Ground Smoke.\"",
    summary:
      "The spell prevents natural smoke from rising into the air from the target fire: the smoke instead rolls out from the fire and dissipates into the ground about six inches from its source, for the spell's duration.",
  }),
  C({
    id: "necrosurgery",
    name: "Necrosurgery",
    school: "Necromancy",
    descriptors: ["Death"],
    levels: { "Sorcerer/Wizard": 0 },
    components: "V, S, M",
    note: "Material component: a sharp razor or blade. The 1d4 damage figure appears in the article's spell list (p. 73); the spell's body text states the +2 bonus and the disease already contracted without separately quantifying the damage — see MANIFEST.",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "Instantaneous",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    summary:
      "The spell helps contain disease in a subject by killing off infected flesh: it deals 1d4 points of damage to the subject (per the article's spell list) and grants the subject a +2 bonus on his next saving throw to resist any disease he has already contracted. It has no effect on an uninfected subject, a nonliving creature, or a creature immune to the disease it carries.",
  }),
  C({
    id: "nosy-neighbor",
    name: "Nosy Neighbor",
    school: "Transmutation",
    levels: { "Sorcerer/Wizard": 0 },
    components: "V, S, M",
    note: "Material component: a small cup. The magazine header prints no Saving Throw or Spell Resistance line for this spell (image-verified, p. 74). Print inconsistency: the spell's body text grants a +1 bonus on Listen checks, while the article's spell list (p. 73) says +2; the body text governs and is staged here — see MANIFEST.",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 minute",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "The spell improves your sense of hearing for its duration, giving you a +1 bonus on Listen skill checks (the article's spell list says +2; the spell's own text governs — see the note).",
  }),
  C({
    id: "seekers-chant",
    name: "Seeker's Chant",
    school: "Divination",
    levels: { Bard: 0, "Sorcerer/Wizard": 0 },
    components: "V, S",
    note: "The magazine header prints no Saving Throw or Spell Resistance line for this spell (image-verified, p. 74). Print inconsistency: the spell's body text grants a +1 bonus on Search checks, while the article's spell list (p. 73) says +2; the body text governs and is staged here — see MANIFEST.",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 minute",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "You gain a +1 bonus on Search checks while you utter this chant (the article's spell list says +2; the spell's own text governs — see the note). However, you also incur a −2 penalty on Move Silently checks, as you must constantly intone the words of the chant while concentrating. The chant sounds rather like a children's rhyme and is spoken in a firm voice.",
  }),
  C({
    id: "shadowplay",
    name: "Shadowplay",
    school: "Illusion",
    subschool: "Glamer",
    levels: { "Sorcerer/Wizard": 0 },
    components: "V, S",
    range: "Touch",
    targetOrArea: "Shadow of one Huge or smaller object or creature",
    duration: "Concentration",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "This spell alters an existing shadow into any shape you desire. The shadow of any Huge or smaller creature or object can be affected, but not the shadows of larger forms and not actual creatures such as shadows, shadow hounds, or shadow dragons. While you concentrate, the shadow's shape changes and moves as many times and however you wish: you can alter its shape, diminish it, and split it into numerous smaller shadows, but you cannot increase the shadow's actual size, and the shadow always remains affixed to the surface it falls on and cannot move outside the area it would normally fall. If the source of the shadow is removed, the spell ends. Cast upon a specific creature's shadow, the spell allows that creature a Will save and is subject to spell resistance.",
  }),
  C({
    id: "vengeful-mount",
    name: "Vengeful Mount",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting"],
    levels: { Druid: 0, Ranger: 1, "Sorcerer/Wizard": 0 },
    components: "V, S, M",
    note: "Material component: a riding crop or willow switch. The header's Duration line prints \"Instant\" (image-verified, p. 74), staged as printed rather than expanded to \"Instantaneous.\"",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One animal",
    duration: "Instant",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "This spell causes a creature of the animal type to shy away from riders or those attempting to use the Handle Animal skill on it. The target animal can attempt a Will save to negate the effect. If the animal fails this save, any creature riding the animal must immediately make a Ride check to remain mounted, usually requiring a DC 10 Ride check.",
  }),
];
