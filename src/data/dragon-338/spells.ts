// Dragon Magazine #338 (December 2005) — spell draft: 7 spells.
// FIVE from "Spellcraft: The Silver Hexameric Folio" (Gregory
// Marks), pp. 77-79 — the unique spells of an ancient spell weaver
// spellbook (the program survey estimated ~6; the article prints
// five, listed in its sidebar: Anamensis, Cynosure, Modulate,
// Siphon, Spell Star). The folio itself and its sentient intelligence
// digest in reference.md.
// TWO from "Core Beliefs: Boccob" (Sean K. Reynolds), pp. 48-49 —
// the feature's "New Divine Spells," which the program survey never
// saw: Disk of Concordant Opposition and Boccob's Rolling Cloud.
// Typed SpellDefinition in the house shape of recent packs:
// targetOrArea carries the printed Target/Area/Effect text without a
// label; material components ride in `note`.
// Every header was verified against rendered page images (magazine
// pp. 48-49, 77-79); the image governs over the OCR stream.
// SPELLING: the magazine prints the first spell's name "Anamensis"
// in its heading, its sidebar list, and its body text; external
// indexes normalize it to "Anamnesis." The printed spelling is
// staged, with the variant noted on the record.
// APOC screening: Cynosure is a Conjuration (Teleportation) spell
// whose printed purpose includes aiding plane shift, which does not
// work in APOC; it stages with its subschool carried and is flagged
// in SCREENING.md (the issue-330 Crushing Coils precedent). No other
// spell here summons, calls, or opens a plane; Spell Star stores
// spells in a hovering star for automatic counterspelling — an
// abjuration, not extra-dimensional storage. The Silver Hexameric
// Folio article's aside about the Eberron artificer is framing only.

import type { SpellDefinition } from "@/engine/types";

const SRC_FOLIO = "Dragon Magazine #338 — Spellcraft: The Silver Hexameric Folio (Gregory Marks), pp. 77-79";
const SRC_BOCCOB = "Dragon Magazine #338 — Core Beliefs: Boccob (Sean K. Reynolds), pp. 48-49";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Transmutation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC_FOLIO,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_338_SPELLS: SpellDefinition[] = [
  C({
    id: "anamensis",
    name: "Anamensis",
    school: "Divination",
    levels: { Bard: 3, "Sorcerer/Wizard": 4 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 hour/level or until discharged (D)",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "By casting this spell you tap into the musings of some alien collective memory. For the duration of the spell you can perform any Knowledge skill check untrained and can make one Knowledge check with a +10 bonus; if you have the bardic knowledge ability or a similar class ability, the +10 bonus can apply to that check instead. The bonus can only be applied once, as a free action, at any time during the duration of the spell, and once the Knowledge bonus is used the spell ends. For as long as the spell is in effect, however, you perceive noises — echoing hums, clicks, and complex rhythms — just at the edges of your senses, as if some outside intelligence were trying to communicate with you, and you take a −4 penalty on all Will saves for as long as the spell is in effect. Spell weavers are not subject to this penalty. You cannot have more than one anamensis active at the same time.",
    note: "Printed spelling: the magazine prints this spell's name \"Anamensis\" in its heading, sidebar spell list, and body text; external indexes (including the fan spell compilations) normalize it to \"Anamnesis.\" The printed spelling is staged. One of the Silver Hexameric Folio spells, created by ancient spell weaver masters; the folio itself digests in the pack's reference.md.",
  }),
  C({
    id: "cynosure",
    name: "Cynosure",
    school: "Conjuration",
    subschool: "Teleportation",
    levels: { "Sorcerer/Wizard": 4 },
    targetOrArea: "Creature touched",
    duration: "1 round",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "As accuracy is frequently a concern when using long-range teleportation spells, spell weavers created this spell to increase the reliability of their innate plane walking ability. By using cynosure prior to casting spells like plane shift or teleport, which require or have a chance of requiring you to roll to randomly determine the location targets are transported to, you decrease the distance targets appear from the intended location by 75% (rounded down to the nearest mile). Thus, if the target or targets would normally appear 18 miles from their intended location, they would only appear 4 miles away with the aid of this spell. Cynosure has no effect on teleportation effects that have no chance of deviating, and the spell is wasted if its subject casts no relevant teleportation spell or uses no relevant ability within the spell's 1-round duration.",
    note: "APOC: staged with its printed Teleportation subschool; the spell's printed purpose includes aiding plane shift, which does not work inside the sealed crystal sphere — flagged in SCREENING.md (issue-330 Crushing Coils precedent). One of the Silver Hexameric Folio spells; the folio itself digests in the pack's reference.md.",
  }),
  C({
    id: "modulate",
    name: "Modulate",
    levels: { "Sorcerer/Wizard": 3 },
    castingTime: "1 round",
    targetOrArea: "1 wand touched",
    duration: "1 minute/level (D)",
    savingThrow: "Yes (harmless, object)",
    spellResistance: "Yes (harmless, object)",
    summary:
      "In a process developed from their mastery of the written word, spell weavers learned to infuse spells into charged spell trigger items for later use. After casting modulate, the next spell you cast on the wand touched infuses that spell into the wand, changing the remaining charges within the wand to discharge that spell instead of the wand's normal spell. The spell you cast on the wand must be one or more levels lower than the spell normally cast from the wand. A modulated wand casts its infused spell at the minimum caster level for that spell, and each use of a modulated wand expends 2 charges. If the wand doesn't have enough charges remaining, the wand cannot be activated. (Example: if you modulate a wand of magic missile, caster level 3rd, you can then cast light upon it; until the duration expires or all its charges are expended, the wand discharges light instead of magic missile, two charges per use.)",
    note: "Saving Throw line as printed (\"Yes (harmless, object),\" with no saving-throw type named). One of the Silver Hexameric Folio spells; the folio itself digests in the pack's reference.md.",
  }),
  C({
    id: "siphon-338",
    name: "Siphon",
    levels: { "Sorcerer/Wizard": 3 },
    targetOrArea: "Wand or staff touched",
    duration: "Permanent",
    summary:
      "As spell weavers have an innate understanding of the flow of magic, spells such as siphon come naturally to them. You touch a staff or wand that contains at least 5 charges. By expending 5 charges from the wand or staff, you replace one cast spell or used spell slot of a level equal to or less than the highest-level spell held within the wand or staff. If you are a caster that prepares spells, you regain a spell slot or prepared spell of the affected spell level that you have already cast that day. A single casting of siphon can replace multiple spell levels for a single casting if the wand or staff has enough charges. For example, if you drained 15 charges from a staff of frost, you could regain up to 3 expended 5th-level spell slots. If the wand or staff does not have enough charges, the spell has no effect.",
    note: "Printed #338 version, staged beside the live Complete Scoundrel record of the same name (id \"siphon\") under the standing side-by-side pairs rule — the two printings differ materially: the magazine version casts in 1 standard action with a Permanent duration, while the Complete Scoundrel reprint takes 1 minute with an Instantaneous duration. See MANIFEST.md. One of the Silver Hexameric Folio spells; the folio itself digests in the pack's reference.md.",
  }),
  C({
    id: "spell-star",
    name: "Spell Star",
    school: "Abjuration",
    levels: { "Sorcerer/Wizard": 8 },
    components: "V, S, M",
    castingTime: "1 round + 6 rounds to add spells",
    range: "Personal",
    targetOrArea: "You",
    duration: "10 min/level (D)",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "You create a six-pointed star made of glowing blue-white light that hovers before you, casting light as a candle. During the 6 rounds after casting spell star, you may cast one spell per round into the spell star; you may only cast spells of 6th level or lower into the star. Once full, the star disappears, visible only to those using arcane sight, greater arcane sight, see invisibility, true seeing, or a similar effect. For the duration of the spell, whenever you are targeted with a spell that you have stored within the star, that spell is automatically countered as if you had used a counterspell action (though you need not take an action, or even be aware of the attack), and that spell is removed from the star. You can store the same spell multiple times to counter it multiple times. Any spell slots left unfilled after 6 rounds are wasted. When a spell star counters a spell it is briefly visible; anyone who can see it may make a Spellcraft check (DC 28) to recognize it as a spell star. A spell star takes up no room and cannot be damaged or harmed in any way, and you cannot have more than one spell star in effect at any one time; wearing a ring of counterspells immediately ends spell star.",
    note: "Material component: a moonstone worth 25 gp. One of the Silver Hexameric Folio spells; the folio itself digests in the pack's reference.md. The star counters stored spells on the caster's person — it is not an extra-dimensional storage effect.",
  }),
  C({
    id: "disk-of-concordant-opposition",
    name: "Disk of Concordant Opposition",
    school: "Conjuration",
    subschool: "Creation",
    levels: { Cleric: 5, "Sorcerer/Wizard": 5 },
    components: "V, S, M/DF",
    source: SRC_BOCCOB,
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Disk of energy",
    savingThrow: "Fortitude half (object)",
    spellResistance: "Yes",
    summary:
      "You hurl a hand-sized disk of interwoven positive and negative energy, a lesser form of Boccob's own power with this name; you must make a successful ranged touch attack to hit. Any creature struck by the disk takes 1d6 points of damage per caster level (to a maximum of 15d6). Half the damage from this spell comes from positive energy, half from negative energy; unlike the negative energy from an inflict wounds spell, this spell does not cure undead (nor does its positive energy component cure living creatures). A creature or object that makes a successful Fortitude save is partially affected, taking only half damage. If this damage reduces the creature or object to 0 or fewer hit points, it is entirely disintegrated, leaving behind only a trace of fine dust; a disintegrated creature's equipment is unaffected. When used against an object, the disk simply disintegrates as much as one 5-foot cube of nonliving matter, so the spell disintegrates only part of any very large object or structure targeted. The disk affects even objects constructed entirely of force, such as Bigby's interposing hand or a wall of force, as long as the caster level of this spell's caster equals or exceeds the caster level of the target force effect's caster, but not magical effects such as a globe of invulnerability or an antimagic field. Only the first creature or object struck can be affected; the disk affects only one target per casting.",
    note: "Arcane material component: a small iron and electrum wheel with a rod rising from the center of one side. The printed level line reads \"Clr 5 (Boccob), Sor/Wiz 5\" — the Cleric level is Boccob's faithful's version, staged as the Cleric key with the deity noted here. Range line as printed reads \"Short (25 ft. + 5 ft./2 levels)\"; it is staged in the 3.5 standard \"Close\" form at the identical distances — see SCREENING.md.",
  }),
  C({
    id: "boccobs-rolling-cloud",
    name: "Boccob's Rolling Cloud",
    school: "Evocation",
    descriptors: ["Electricity", "Fire"],
    levels: { Cleric: 4, "Sorcerer/Wizard": 3 },
    components: "V, S, M/DF",
    source: SRC_BOCCOB,
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Cone-shaped burst",
    savingThrow: "Reflex half (see text)",
    spellResistance: "Yes",
    summary:
      "A shimmering 10-foot-tall cloud made of gold, red, violet, and blue energy springs into existence, resembling rolling fire and lightning. The cloud appears in front of you and sweeps outward to the extent of the range. Creatures struck by the cloud take 1d6 points of damage per level (maximum 10d6). The damage is one-quarter electricity, one-quarter fire, one-quarter negative energy, and one-quarter positive energy; unlike the negative energy from an inflict wounds spell, this spell does not cure undead (nor does its positive energy component cure living creatures). A creature that fails its save is struck full-force by the cloud and must make a Fortitude save or be dazed for one round; creatures immune to stunning are immune to this aspect of the spell. This spell can be made permanent with a permanency spell (minimum caster level 11th; 1,500 XP), in which case it creates a straight cloud 5-foot-wide, 10-foot-tall, and up to 25-foot + 5 ft./2 levels long that deals 2d6 points of damage +1 point per caster level to any creature that contacts it; a creature that passes through the wall must succeed at a Fortitude save or be dazed for 1 round.",
    note: "Arcane material component: four stones, one for each of the colors of the cloud.",
  }),
];
