// Dragon Magazine #345 (July 2006) — spell draft: 5 spells.
// "Spellcraft: Artifact Spells — Magic of the Giants" (Jason
// Bulmahn), pp. 76-78 — the five artifact spells, an ancient form
// of giant magic the article introduces as a supplement to Secrets
// of Xen'drik. Artifact spells are not learned like normal spells:
// any caster able to cast a spell of the proper level and type
// (arcane or divine) may study an inscription for 1d4 hours and
// succeed at a Spellcraft check (DC 15 + twice the spell's level;
// cannot take 10; a failed check may be retried after 24 hours) to
// gain the ability to cast the spell ONCE within the next year,
// after which it is lost unless the source is studied again.
// Prepared casters prepare it in a normal slot; spontaneous casters
// cast it from a slot of the appropriate level without its replacing
// a known spell. Artifact spells never have a material component or
// an arcane focus (divine ones may have a divine focus), cannot be
// modified by metamagic, and cannot be made into potions, scrolls,
// or other magic items; their inscriptions sit on large, immovable
// objects and cannot be copied or transported. The full system text
// digests in reference.md.
// LEVEL LINES: the magazine prints each spell's level as a bare
// type level — "Divine 3", "Arcane 6", and so on — because ANY
// caster of that type and spell level can learn the spell. The
// catalog has no "Arcane"/"Divine" spell-list key, so `levels` is
// empty and the printed level line is carried verbatim in each
// record's note; flagged in SCREENING.md for Shaun/integration.
// Every header was verified against rendered page images (magazine
// pp. 77-78); the image governs over the OCR stream — it settles
// the five names (Disjoin Possession; Eskellia's Soul Cyclone;
// Hibyrntic's Curse; Life Spring; Telepathic Strike), Hibyrntic's
// Curse's printed Spell Resistance: No, and Disjoin Possession's
// range line, which the magazine itself prints with mismatched
// label and numbers ("Medium (400 ft. + 40 ft./level)") — carried
// as printed, noted on the record.
// APOC screening: none of the five creates or calls an artifact,
// summons, teleports, or opens a plane. Eskellia's Soul Cyclone
// draws souls forth from the afterlife — screened individually in
// SCREENING.md and staged with that flag; its effect is an
// intra-planar wind that bestows negative levels. Telepathic
// Strike's targets "must be on the same plane as the caster" —
// under the sealed sphere that clause is inert. The article itself
// suggests Forgotten Realms provenance for such magic outside
// Eberron (relics of Netheril or the phaerimm), which fits APOC's
// FR base; the Xen'drik/quori flavor is lore and digests in
// reference.md. See SCREENING.md.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #345 — Spellcraft: Artifact Spells (Jason Bulmahn), pp. 76-78";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const ARTIFACT_NOTE =
  "Artifact spell (see the pack's reference.md for the full artifact-spell rules): learned by studying its ancient inscription — 1d4 hours and a successful Spellcraft check (DC 15 + twice the spell's level, no taking 10) — then castable once within the next year; never has a material component or arcane focus, cannot be modified by metamagic, and cannot be made into a potion, scroll, or other magic item.";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Evocation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_345_SPELLS: SpellDefinition[] = [
  C({
    id: "disjoin-possession",
    name: "Disjoin Possession",
    school: "Abjuration",
    components: "V, S, DF",
    range: "Medium (400 ft. + 40 ft./level)",
    targetOrArea: "50-ft.-radius spread",
    duration: "Instantaneous (1 hour/level); see text",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    note:
      "Printed level line: Divine 3. Range line as printed pairs the Medium label with long-range numbers (400 ft. + 40 ft./level) — a magazine misprint carried as printed. " +
      ARTIFACT_NOTE,
    summary:
      "A wave of crackling blue energy spreads from a point you designate, immediately expelling all possessing spirits within the area from their host bodies — demonic possession, quori possession, a ghost's malevolence ability, magic jar, and other similar possession effects. A successful Will save prevents the expulsion. In addition, every creature within the area is protected for 1 hour per caster level from any attempt to possess it or to exercise ongoing mental control over it (including enchantment [charm] effects and enchantment [compulsion] effects that grant the caster ongoing control, such as dominate person). Possessed creatures that avoid expulsion do not receive this protection.",
  }),
  C({
    id: "eskellias-soul-cyclone",
    name: "Eskellia's Soul Cyclone",
    descriptors: ["Air"],
    range: "Long (400 ft. + 40 ft./level)",
    targetOrArea: "Effect: Cyclone 30 ft. wide at base, 80 ft. wide at top, and 100 ft. tall",
    duration: "1 round/level (D)",
    savingThrow: "Reflex negates; see text",
    spellResistance: "Yes",
    note:
      "Printed level line: Arcane 6. Printed school line: Evocation [Air] and Necromancy — staged under Evocation with the dual school noted here. APOC flag: the cyclone's souls are 'drawn forth from the afterlife' as printed; the effect itself moves and harms within the Material Plane only — see SCREENING.md. " +
      ARTIFACT_NOTE,
    summary:
      "At a point you designate, a cyclone of howling souls springs into being, drawn forth from the afterlife. The cyclone moves across ground and water at 100 feet per round; you can concentrate on controlling its movement or specify a simple program, and directing it or changing its program is a standard action. The cyclone always moves during your turn; if it exceeds the spell's range it moves randomly and uncontrolled for 1d3 rounds and then dissipates, and you cannot regain control of it. Any Huge or smaller creature that comes in contact with the effect must succeed at a Reflex save or gain 1 negative level. A Large or smaller creature that fails its first save must succeed at a second one or be picked up bodily and held suspended in the winds, gaining 1 negative level each round on your turn; a successful Fortitude save each round avoids that round's negative level. You may direct the cyclone to eject any carried creatures whenever you wish.",
  }),
  C({
    id: "hibyrntics-curse",
    name: "Hibyrntic's Curse",
    school: "Conjuration",
    descriptors: ["Cold"],
    duration: "1 round/level",
    savingThrow: "Fortitude partial",
    spellResistance: "No",
    note:
      "Printed level line: Divine 4. Printed school line: Conjuration and Evocation [Cold] — staged under Conjuration with the dual school noted here. The caster-name is spelled as printed in the magazine's display heading (image-verified, p. 77). " +
      ARTIFACT_NOTE,
    summary:
      "The target creature is covered in a rime of deadly chilling ice for the duration. The ice deals 4d6 points of cold damage each round it persists; in addition, the creature can take only a single move action or standard action each turn, but not both, and it moves at half speed. Each round, the target makes a Fortitude save: on a success the damage is halved and the creature is not slowed that round; if the creature fails two such saves in a row, it becomes encased in ice, can take no further actions, and automatically fails all future Fortitude saves to avoid the effect. An encased creature can be freed by an adjacent creature with a successful DC 25 Strength check, or by a single attack dealing 20 or more points of damage — excess damage is applied to the target, who is automatically hit and receives no save against the effect, although spell resistance still applies. Fire damage deals 150% of normal damage to a creature encased in ice, acid deals one-quarter, electricity and sonic effects deal full damage, and cold damage has no effect. Once free, the target must begin making saves again.",
  }),
  C({
    id: "life-spring",
    name: "Life Spring",
    school: "Conjuration",
    components: "V, S, DF",
    range: "Touch",
    targetOrArea: "Dead creature touched",
    savingThrow: "None; see text",
    spellResistance: "Yes (harmless)",
    note:
      "Printed level line: Divine 6. Printed school line: Conjuration (Healing). Unlike raise dead, a creature restored by life spring loses no level — staged as printed; see SCREENING.md. " +
      ARTIFACT_NOTE,
    summary:
      "You restore life to a dead creature, healing it completely; you can raise a creature that has been dead for no longer than 1 hour per caster level. The subject's soul must be free and willing to return — if it is not willing, the spell does not work, and a subject that wants to return receives no saving throw. A creature restored to life by this spell does not lose a level, but is stunned for 1d6 rounds. The spell also heals the creature of all hit point and ability damage, and normal poison and normal disease are cured in the process of raising the subject, although magical diseases and curses are not undone. While the spell closes mortal wounds and repairs lethal damage of most kinds, the body of the creature must be whole; missing parts are still missing when the creature is brought back to life, and none of the dead creature's equipment or possessions are affected. This spell can restore a creature that has been turned into an undead creature or killed by a death effect, but it cannot bring back a creature that has died of old age.",
  }),
  C({
    id: "telepathic-strike",
    name: "Telepathic Strike",
    school: "Divination",
    descriptors: ["Mind-Affecting"],
    components: "V",
    range: "See text",
    targetOrArea: "One living creature; see text",
    duration: "1 round/level",
    savingThrow: "Will negates; see text",
    spellResistance: "Yes",
    note:
      "Printed level line: Arcane 3. Printed school line: Divination and Enchantment [Mind-Affecting] — staged under Divination with the dual school noted here. The spell's targets must be on the same plane as the caster (inert under APOC's sealed sphere), and it is negated by spells and effects that block scrying. " +
      ARTIFACT_NOTE,
    summary:
      "When you cast this spell, you name a specific creature to scry upon: for the duration, you see and hear through that creature's eyes and ears, using all the natural senses available to it (including its darkvision, if it has any), but not any magical senses it possesses, such as detect magic, tongues, or true seeing. A successful Will save by the named creature negates the effect and ends the spell immediately. Once per casting, you can lash out at a single target with a devastating telepathic wave; the target must be within line of sight of the creature whose senses you are using (which includes that creature itself). The wave deals 1d6 points of Intelligence, Wisdom, and Charisma damage and stuns the target for 1 round; a successful Will save halves the damage and negates the stunning — but if the wave targets the original creature, it receives no saving throw to halve the damage and is automatically stunned.",
  }),
];
