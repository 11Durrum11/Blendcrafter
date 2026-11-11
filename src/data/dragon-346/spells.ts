// Dragon Magazine #346 (August 2006) — spell draft: 2 spells.
// "Core Beliefs: Pelor" (Sean K Reynolds), pp. 20-32 — its "New Divine
// Spells" block (p. 30) prints exactly two new spells. The program
// survey expected initiate feats from this article and ~0 spells; the
// issue prints the reverse (see MANIFEST's survey corrections).
// Typed SpellDefinition in the house shape of recent packs.
// Both headers verified against the rendered page image (magazine
// p. 30); the image governs over the OCR stream — it confirms Sun
// Father's Face at Clr 1, Drd 1, Pal 1, Rgr 1 with a 1 swift action
// casting time, and Sunmace at Clr 2, Drd 2 dealing 1d8 fire (+1 per
// three caster levels, max +5 at 15th) or 2d6 against undead.
// APOC screening: neither spell summons, calls, teleports, or opens a
// plane. Both are [Light] evocations themed on sunlight — in APOC the
// sky is always grey with no sun; the spells stage as printed with the
// canon note in SCREENING.md §3 (they create light, they do not require
// the sun to exist), flagged there rather than rewritten.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #346 — Core Beliefs: Pelor (Sean K Reynolds), p. 30";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Evocation",
    descriptors: ["Light"],
    levels: {},
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_346_SPELLS: SpellDefinition[] = [
  C({
    id: "sun-fathers-face",
    name: "Sun Father's Face",
    levels: { Cleric: 1, Druid: 1, Paladin: 1, Ranger: 1 },
    castingTime: "1 swift action",
    duration: "1 minute or until discharged",
    summary:
      "Your face and hair take on aspects of Pelor's greatness, becoming golden and shining. You shed light equal to a candle and your hair extends outward like the rays of the sun. You gain a +4 sacred bonus on a single turn undead or wild empathy check; you must choose to use this bonus before making the roll to which it applies, and the spell is then discharged.",
  }),
  C({
    id: "sunmace",
    name: "Sunmace",
    levels: { Cleric: 2, Druid: 2 },
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "Magic weapon of sunlight",
    duration: "1 round/level (D)",
    savingThrow: "None or Will negates (see text)",
    spellResistance: "Yes",
    summary:
      "A mace made of pure sunlight springs into existence and attacks opponents at a distance, as you direct it. It deals 1d8 points of fire damage per hit, +1 point per three caster levels (maximum +5 at 15th level), and dazzles the target for 1 round. Against undead, the weapon instead deals 2d6 points of fire damage and the creature must make a Will save or be blinded for 1 round; undead especially vulnerable to daylight or sunlight (such as spectres, vampires, and wraiths) take a -2 penalty on this saving throw. The sunmace has the same threat range and critical multiplier as a real mace (threat on a 20, double damage on a confirmed critical hit). It strikes the opponent you designate, starting with one attack in the round the spell is cast and continuing each round thereafter on your turn, using your base attack bonus (possibly allowing multiple attacks per round in subsequent rounds) plus your Wisdom modifier as its attack bonus. It strikes as a spell, not as a weapon, so it can damage creatures that have damage reduction; it does not get a flanking bonus or help a combatant get one, and your feats or combat actions do not affect it. If the sunmace goes beyond the spell range, goes out of your sight, or is not directed by you, it returns to you and hovers. Each round after the first, you can use a move action to redirect it to a new target; on any round it switches targets it gets only one attack, and subsequent rounds against that target allow multiple attacks if your base attack bonus permits. A sunmace cannot be attacked or harmed by physical attacks, but dispel magic, disintegrate, a sphere of annihilation, or a rod of cancellation affects it; its AC against touch attacks is 12 (10 + size bonus for a Tiny object). A deeper darkness spell cast on a sunmace instantly dispels it (and has no other effect). If an attacked creature has spell resistance, you make a caster level check (1d20 + caster level) against it the first time the sunmace strikes that creature; if the sunmace is successfully resisted, the spell is dispelled, otherwise it has its normal effect on that creature for the duration.",
  }),
];
