// Dragon Magazine #347 (September 2006) — spell draft: 6 spells.
// "Spellcraft: Scripture of Elemental Evil" (Owen K.C. Stephens),
// pp. 76-78 — the blasphemous utterances of the Temple of Elemental
// Evil. The article PRINTS SEVEN spells; the seventh, Summon Avatar
// of Elemental Evil (Clr 8), is a Conjuration (Summoning) spell and is
// HELD to reference.md §6.2 under the standing APOC screening
// (summoning spells don't work) — see SCREENING.md. The survey's
// "spells ~7" is thus 6 staged + 1 held.
// All six staged spells are DUAL-SCHOOLED (a Player's Handbook II
// concept; the article's sidebar addresses it). The house spell shape
// carries one school: the first printed school sits in `school` and
// the full printed dual-school line rides in `note` on every record.
// Greyhawk lore (the Scripture's Tharizdun / Elder Elemental Eye
// origin) is stripped from the records and digested in reference.md
// §6.1; per the issue brief, each staged spell is itemized in
// SCREENING.md for whether it calls on or channels the Elder
// Elemental Eye / a planar power — none of the six does mechanically;
// they are self-contained blasphemies and stage as printed.
// Every header was verified against rendered page images (magazine
// pp. 76-78); the image governs over the OCR stream — it confirms,
// among others, Storm Slave at Clr 6 / Sor/Wiz 6 (the article's own
// spell-list sidebar and the OCR both blur this), Summon Avatar of
// Elemental Evil at Clr 8, and Storm Slave's escape DCs (Strength 25,
// Escape Artist 30).
// APOC screening: none of the six summons, calls, teleports, or opens
// a plane. Liferot is printed Conjuration/Necromancy with NO subschool
// — it is not a summoning or creation effect as printed and stages as
// printed, noted in SCREENING.md. Elemental magic is hampered in APOC
// unless augmented — that hampering is a SCREENING note only; no
// record is rewritten to bake it in.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #347 — Spellcraft: Scripture of Elemental Evil (Owen K.C. Stephens), pp. 76-78";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const SCRIPTURE_NOTE =
  "One of the Scripture of Elemental Evil spells (Spellcraft, Dragon #347). The Scripture's origin lore — a Tharizdun cult work spread under false divine pretenses — is Greyhawk lore, stripped here and digested in the pack's reference.md. APOC: elemental magic is hampered unless augmented; that hampering is a screening note (SCREENING.md), not baked into this record.";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Evocation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "Yes",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_347_SPELLS: SpellDefinition[] = [
  C({
    id: "blaze-bones",
    name: "Blaze Bones",
    school: "Evocation",
    descriptors: ["Evil", "Fire"],
    levels: { Cleric: 2, "Sorcerer/Wizard": 2 },
    targetOrArea: "One corporeal undead",
    duration: "1 round/level",
    savingThrow: "Will negates (see below)",
    note: "Printed as a dual-school spell: Evocation/Necromancy [Evil, Fire] (Player's Handbook II dual-school concept; see the article's sidebar, digested in the pack's reference.md). " + SCRIPTURE_NOTE,
    summary:
      "You wreathe one corporeal undead creature in a corona of flames. Unintelligent undead receive no saving throw against this spell. The undead creature gains a +2 bonus on all melee attack rolls and deals an additional 1d6 points of fire damage with every successful melee attack. It also takes 1d3 points of fire damage every round. Any effect that prevents the 1d3 points of damage (such as fire resistance) also ends the blaze bones spell. If the undead drops to 0 hit points while under the effects of this spell, it explodes in a small burst of flames dealing 2d6 points of fire damage to all creatures adjacent to the undead (Reflex save for half). APOC house rules for undead apply on top of this spell as printed.",
  }),
  C({
    id: "burning-hate",
    name: "Burning Hate",
    school: "Enchantment",
    descriptors: ["Evil", "Fire"],
    levels: { Cleric: 2, "Sorcerer/Wizard": 3 },
    duration: "1 round/level",
    savingThrow: "Reflex half",
    note: "Printed as a dual-school spell: Enchantment/Evocation [Evil, Fire] (Player's Handbook II dual-school concept; see the article's sidebar, digested in the pack's reference.md). " + SCRIPTURE_NOTE,
    summary:
      "You fire a bolt of flame at the target, both dealing damage and marking it as the target of your hate. The bolt deals 1d6 points of fire damage per two caster levels (maximum 5d6); a successful Reflex save halves this damage. A thin halo of flames surrounds the target for the remainder of the spell's duration. The flames deal no damage, but they inspire great hatred in you and your allies when looking at the target: you and your allies gain a +1 morale bonus on all attack and damage rolls made against the target for the duration of the spell.",
  }),
  C({
    id: "caustic-disdain",
    name: "Caustic Disdain",
    school: "Enchantment",
    descriptors: ["Acid", "Evil"],
    levels: { Cleric: 4, "Sorcerer/Wizard": 4 },
    range: "Medium (100 ft. + 10 ft./level)",
    duration: "1 round/level",
    savingThrow: "Fortitude partial (see text)",
    note: "Printed as a dual-school spell: Enchantment/Evocation [Acid, Evil] (Player's Handbook II dual-school concept; see the article's sidebar, digested in the pack's reference.md). " + SCRIPTURE_NOTE,
    summary:
      "You encase one target in a field of acidic vapor. The field deals 1d6 points of acid damage each round, with a Fortitude save allowed for half damage (a single save is made for the duration of the spell). The aura of acid lingers around the target, causing a foul odor, making its appearance haggard and unkempt, and magically dampening the enthusiasm of characters wishing to assist your target: any creature wishing to cast a spell noted as \"harmless\" (in the saving throw line of a spell's description) on the target during the duration of the spell must make a Will save; on a failed save, the caster loses the spell and that part of his action. A caster may make a new save each round; once a caster saves against the caustic disdain, he ignores the effect for the remainder of the duration. This spell does not prevent the targeted creature from being affected by area-of-effect spells.",
  }),
  C({
    id: "cold-of-the-grave",
    name: "Cold of the Grave",
    school: "Evocation",
    descriptors: ["Cold", "Evil"],
    levels: { Cleric: 2, "Sorcerer/Wizard": 2 },
    targetOrArea: "One creature or object",
    savingThrow: "Fortitude partial (see text)",
    note: "Printed as a dual-school spell: Evocation/Necromancy [Cold, Evil] (Player's Handbook II dual-school concept; see the article's sidebar, digested in the pack's reference.md). " + SCRIPTURE_NOTE,
    summary:
      "You fire a ray of deathly cold necromantic energy. You make a ranged touch attack against one target, dealing 1d6 points of cold damage and 1d6 points of negative energy damage. The target takes 1 point of Strength damage, +1 additional point of Strength damage per 4 caster levels (maximum 5 points). A successful Fortitude save negates the Strength damage.",
  }),
  C({
    id: "liferot",
    name: "Liferot",
    school: "Conjuration",
    descriptors: ["Evil"],
    levels: { Cleric: 3, "Sorcerer/Wizard": 4 },
    range: "Medium (100 ft. + 10 ft./level)",
    duration: "1 minute/level",
    savingThrow: "Will partial",
    note: "Printed as a dual-school spell: Conjuration/Necromancy [Evil], with no subschool printed (Player's Handbook II dual-school concept; see the article's sidebar, digested in the pack's reference.md). " + SCRIPTURE_NOTE,
    summary:
      "The target of this spell begins to sprout fungal growths across its body, particularly around wounds or injuries. For the duration of the spell, the target cannot be healed by any magical means, as every wound is filled with life-leaching fungi. A successful Will save allows the target to receive half the benefits of magical healing for the duration of the spell. This spell is immune to the effects of dispel magic but can be ended with a remove curse, remove disease, or diminish plants spell.",
  }),
  C({
    id: "storm-slave",
    name: "Storm Slave",
    school: "Enchantment",
    descriptors: ["Electricity", "Evil"],
    levels: { Cleric: 6, "Sorcerer/Wizard": 6 },
    range: "Medium (100 ft. + 10 ft./level)",
    duration: "1 round/level",
    savingThrow: "Reflex partial",
    note: "Printed as a dual-school spell: Enchantment/Evocation [Electricity, Evil] (Player's Handbook II dual-school concept; see the article's sidebar, digested in the pack's reference.md). " + SCRIPTURE_NOTE,
    summary:
      "Chains of lightning bind a target, entangling it and dealing 2d6 points of electricity damage each round. (An entangled creature moves at half speed, cannot run or charge, takes a -2 penalty on attack rolls and a -4 penalty to Dexterity, and must make a DC 15 Concentration check to cast spells.) A target may escape by taking a full-round action to make a DC 25 Strength check or a DC 30 Escape Artist check. Additionally, the target can choose to free itself from the chains of electricity by submitting to a charm monster effect: the target becomes aware of this option 1 round after the spell is cast; if the target allows this, the storm slave spell ends and the target is affected as if by charm monster with no Will save (the target is considered to have consciously failed any saving throw). If the target of the storm slave makes its Reflex save, it is not entangled by the lightning and takes only 1d6 points of electricity damage a round; it may still end the spell by allowing itself to be affected by a charm monster effect. A creature that touches the target of the spell (to heal it, aid another, or even make an unarmed or natural weapon attack) takes 1d6 points of electricity damage.",
  }),
];
