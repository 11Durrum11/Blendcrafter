// Dragon Magazine #334 (August 2005) — spell draft: 6 spells.
// "Spellcraft: Mysteries of the Deep" (Greg Marks), pp. 74-76 — the sea
// spells of the Livre d'Aquatha, a legendary mariner's tome (the tome
// itself is lore and is digested in reference.md; consulting it grants
// a +2 circumstance bonus on Profession (sailor) and Knowledge
// (geography) checks related to the sea and coastal lands).
// Typed SpellDefinition in the house shape of recent packs: targetOrArea
// carries the printed Target/Area/Effect text without a label; material
// components ride in `note`.
// Every header was verified against rendered page images (magazine
// pp. 74-76); the image governs over the OCR stream. DragonDex's spell
// index for this issue lists exactly these six spells. Two of the
// article's sidebar blurbs conflict with the spells' own texts (geyser,
// shark bolt) — the spell texts govern and the conflicts are disclosed
// in the records' notes (cf. the issue-330/331 sidebar precedents).
// Lash of the Kraken's header prints NO Saving Throw / Spell Resistance
// lines; those fields stage as "Not printed in source" (the live
// catalog's own convention) with the gap disclosed in the record's note.
// ID NOTES: "float-334" and "geyser-334" — the plain id "float" is
// held by the unrelated Frostburn spell of the same name in the live
// spells barrel, and "geyser" is held in the live equipment barrel by
// a Races of Faerûn item; the issue suffixes keep the records distinct
// (issue-319/330/331 precedent).
// None of the six summons, calls, or opens a plane; shark bolt is a
// Conjuration (Creation) spell — see SCREENING.md.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #334 — Spellcraft: Mysteries of the Deep (Greg Marks), pp. 74-76";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Transmutation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
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

export const DRAGON_334_SPELLS: SpellDefinition[] = [
  C({
    id: "curse-of-spilt-water",
    name: "Curse of Spilt Water",
    descriptors: ["Water"],
    levels: { Druid: 6, "Sorcerer/Wizard": 6 },
    components: "V, S, M",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    note: "Material component: a rag doll soaked in seawater.",
    summary:
      "The target of this spell, if it fails its saving throw, is permanently transformed into a quantity of water equal to its original volume; its equipment is likewise transformed. The water splashes to the ground at the target's feet or, if the caster directs, into a suitable container within 5 feet. The transformed creature has no consciousness and can take no actions while it remains water. If any quantity of the water is recovered, a break enchantment spell restores the victim to its original form. If the water is allowed to evaporate (1 hour for Fine size, 1 day for Tiny size, and an additional 2 days per size category above Tiny) or merges with a larger body of water (such as being thrown into a river or lake), only a limited wish, miracle, or wish spell can restore the victim.",
  }),
  C({
    id: "float-334",
    name: "Float",
    levels: { Cleric: 1, "Sorcerer/Wizard": 1 },
    range: "Touch",
    targetOrArea: "Willing creature or object touched",
    duration: "10 min./level (D)",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    note: "A different spell from the Frostburn spell of the same name already in the catalog; this record carries the issue suffix.",
    summary:
      "Upon casting this spell you magically support a willing target or object in water or similar liquid, buoying it to the surface. If cast on a creature, the target gains a +5 bonus on Swim checks and does not go underwater if it fails a Swim check by 5 or more; however, the target cannot swim underwater for the duration of this spell. If cast on an unattended object, that item bobs to the surface. You can affect one item weighing no more than 50 pounds plus 100 pounds per level; objects that weigh more than the maximum weight you can affect are unaffected by this spell.",
  }),
  C({
    id: "geyser-334",
    name: "Geyser",
    school: "Evocation",
    descriptors: ["Water"],
    levels: { Druid: 3, "Sorcerer/Wizard": 2 },
    targetOrArea: "One ray",
    savingThrow: "Reflex",
    spellResistance: "Yes",
    note: "The printed Saving Throw line reads simply \"Reflex\"; per the spell text, the save applies to the knock-down effect, not to the damage. The article's sidebar spell list describes geyser as a line dealing 1d6 nonlethal damage +1d6 per two additional levels; the spell's own text (a ray dealing 2d6 + 1d6 per two caster levels) governs. The plain id \"geyser\" is held in the live equipment barrel by a Races of Faerûn item; this record carries the issue suffix.",
    summary:
      "This spell creates a ray of water that blasts toward one target that you designate. If you successfully hit with a ranged touch attack, the watery jet deals 2d6 points of nonlethal damage, +1d6 per two caster levels (dealing 5d6 damage at 6th level, 6d6 at 8th, and so on) up to a maximum of 8d6 damage at 12th level. In addition, those struck by this spell must save or be knocked prone. Geyser deals no damage to objects or those creatures immune to nonlethal damage.",
  }),
  C({
    id: "lash-of-the-kraken",
    name: "Lash of the Kraken",
    levels: { Druid: 3, "Sorcerer/Wizard": 3 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 min./level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    note: "The printed header ends at the Duration line; no Saving Throw or Spell Resistance lines are printed in the source.",
    summary:
      "This spell transforms one of your appendages into a lashing, barb-covered tentacle like that of a kraken. This rubbery appendage gives you reach and deals damage as indicated on the following chart by your size: Fine — damage 1, reach 0 ft.; Diminutive — 1, 0 ft.; Tiny — 1d3, 5 ft.; Small — 1d4, 5 ft.; Medium — 1d6, 10 ft.; Large — 1d8, 15 ft.; Huge — 2d6, 20 ft.; Gargantuan — 2d8, 40 ft.; Colossal — 4d6, 60 ft. As a primary attack, the tentacle adds your Strength modifier to damage. The tentacle can also be used as a secondary natural attack in conjunction with a manufactured weapon; such secondary attacks do not interfere with your primary attack as attacking with an off-hand weapon would, but you take the usual -5 penalty for the tentacle attack when used as a secondary natural attack. If you hit with this tentacle attack, you may attempt a grapple check against your opponent without provoking an attack of opportunity; if you succeed, you immediately constrict the foe and deal automatic tentacle damage as if you had hit the target again, and each round you maintain a grapple you automatically deal tentacle damage to your foe (a constricted enemy is grappled as normal and may escape by making a successful grapple check on its turn). A creature with a natural tentacle attack may use its own tentacle damage or that granted by the spell, whichever is greater, and it gains the ability to grab and constrict with all of its tentacle attacks if it could not already.",
  }),
  C({
    id: "scyllan-scream",
    name: "Scyllan Scream",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting", "Sonic"],
    levels: { Bard: 5 },
    range: "Personal",
    targetOrArea: "100-ft.-radius emanation centered on you",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "Upon casting this spell, you issue forth a terrible wail exactly like the screeching of a fierce scyllan (see Stormwrack for more on these myth-spawned outsiders). All creatures within 100 feet that hear this noise must make a Will save, with those that save being unaffected by the spell. Creatures with 4 or fewer HD that fail this save become panicked for 2d6 rounds, while those with 5 or more HD become shaken for 2d6 rounds. The creatures known as scyllans are immune to this spell.",
  }),
  C({
    id: "shark-bolt",
    name: "Shark Bolt",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Water"],
    levels: { Cleric: 4, "Sorcerer/Wizard": 3 },
    components: "V, S, M",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "1 to 4 shark-shaped bolts of water",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "Yes",
    note: "Material component: one shark's tooth for every bolt called into existence. The article's sidebar blurb says the spell \"summons\" its sharks, but the spell's own header prints Conjuration (Creation) — the bolts are created water constructs, not summoned creatures, and the spell stages clean under the APOC summoning screen; see SCREENING.md.",
    summary:
      "This spell creates one or more bolts of water, each the size and shape of a Small shark, that spring into existence and attack opponents within range as directed. The number of bolts created depends on your caster level: you create one bolt plus an additional bolt per five caster levels (two at 10th level, three at 15th, and the maximum of four bolts at 20th level). Each bolt deals 1d6 points of damage per hit, +1 point per three caster levels (maximum +6 at 18th level). The bolts strike the opponents you designate, starting with one attack in the round the spell is cast and continuing each round thereafter on your turn; each uses your highest base attack bonus and attacks only once per round. The bolts always strike from your direction; they do not get flanking bonuses or help combatants get them, and your feats or combat actions do not affect shark bolts. If the bolts go beyond the spell range or go out of your sight they return to you and hover. Each round after the first, you can spend a move action to redirect all of your shark bolts to new targets; if you do not, the bolts continue to attack the previous round's target, and a bolt may attack on a round it switches targets if the new target is within 30 feet of its previous target. Shark bolts cannot be attacked or harmed by physical attacks, but they are destroyed by any spell that dispels magic or destroys water; in addition, shark bolts within the area of effect of a spell with the fire descriptor (such as fireball) are also dispelled. A bolt's AC against touch attacks is 11 (10 + size bonus for Small object). If a creature attacked by a shark bolt has spell resistance, you make a caster level check (1d20 + caster level) against that spell resistance whenever a bolt strikes it; if a bolt is successfully resisted, it is dispelled — this dispels only the bolt attacking the creature and not the entire spell if multiple bolts are in existence.",
  }),
];
