// Dragon Magazine #344 (Jun 2006) — spells draft: 4 records.
// THREE from "The Wizards Three: A Dark and Stormy Knight" (Ed
// Greenwood), pp. 56–61 (spells printed pp. 60–61) — Elminster,
// Mordenkainen, and Dalamar swapping tales and spells. Mechanics stage;
// the Greyhawk framing around Mordenkainen is stripped per the brief
// (Forgotten Realms is the base canon). None of the three summons, calls,
// or opens a plane: battle tentacles is Conjuration (Creation), mailed
// might animates armor into constructs, wyrmcone is a force evocation.
// ONE from "Dreadhold" (Keith Baker & Jason Bulmahn), pp. 70–82 —
// shockwave, from the Tools of the Trade material on p. 82, staged under
// a -344 id because its printing STUNS where the live catalog's Sharn:
// City of Towers printing dazes (see SCREENING.md). The article's other
// tool spell, arcane seal, is an identical reprint of the live Sharn
// record and digests in reference.md instead.
// Every header and damage figure verified against rendered page images
// (folios 60–61 and 82); the image governs over the OCR stream.

import type { SpellDefinition } from "@/engine/types";

const SRC_WT = "Dragon Magazine #344 — The Wizards Three: A Dark and Stormy Knight (Ed Greenwood), pp. 56–61";
const SRC_DREAD = "Dragon Magazine #344 — Dreadhold: Tools of the Trade (Keith Baker & Jason Bulmahn), p. 82";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

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
    source: SRC_WT,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_344_SPELLS: SpellDefinition[] = [
  C({
    id: "battle-tentacles",
    name: "Battle Tentacles",
    school: "Conjuration",
    subschool: "Creation",
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, M",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "20-ft.-radius spread",
    duration: "1 round/level (D)",
    summary:
      "Switching, rubbery black tentacles similar to those of Evard's black tentacles sprout from the ground, studded with finlike spines running their full length. Each tentacle makes one melee attack per round against every creature within the area; a tentacle is treated as a Medium creature with a base attack bonus equal to your caster level and Strength 19, and a hit deals 2d6+4 points of damage, half bludgeoning and half slashing. A creature that enters the area is immediately attacked, and movement through the area is at half speed. The tentacles are insubstantial to you: with a thought you can cause them to ignore your presence and let you pass freely through the area they fill.",
    note: "Material component: A piece of tentacle from a giant octopus or giant squid, together with a fragment of spine or bone from any aquatic creature.",
  }),
  C({
    id: "mailed-might",
    name: "Mailed Might",
    school: "Transmutation",
    levels: { "Sorcerer/Wizard": 8 },
    components: "V, S, F",
    range: "Touch",
    targetOrArea: "Touched armor pieces",
    duration: "1 round/level",
    summary:
      "You animate up to two pieces of metal armor, which become up to two variant helmed horrors under your control. The armors' pieces merge and take the shape of warrior-like constructs of vaguely humanoid appearance with empty, glowing eyes (the exact appearance depends on the armor used). The helmed horrors fight on your behalf and obey simple commands — they can fetch, carry things, guard, open doors, and perform other simple actions, but do not follow complex commands. Unlike most helmed horrors, these use no crossbows and have no missile attacks. The horrors follow your will silently; one told to attack a creature attacks it, and one given no orders idles, while one set to a task works at it until the task is completed. A horror reduced to 0 hit points explodes in a shard storm (as the spell of that name in the Spell Compendium: a 20-ft.-radius burst of force dealing 3d6 points of force damage, Reflex save for half, spell resistance applies; the burst lasts only 1 round and leaves no shrapnel behind). When the spell ends, the constructs fade away and the armor pieces fall where they stood. Use the helmed horror statistics from Lost Empires of Faerûn (p. 175), or shield guardians if that source is unavailable.",
    note: "Focus: Two pieces of nonmagical, predominantly metal armor that have previously been worn by someone in a battle; the condition of the armor pieces is irrelevant so long as all the metal is present, the pieces need not come from the same suit, and the armor cannot be worn by anyone while the spell is cast.",
  }),
  C({
    id: "wyrmcone",
    name: "Wyrmcone",
    levels: { "Sorcerer/Wizard": 6 },
    components: "V, S, M/DF",
    range: "60 ft.",
    targetOrArea: "Cone-shaped burst",
    savingThrow: "Reflex half",
    spellResistance: "Yes",
    summary:
      "Chaotically whirling translucent dragon-like claws and fanged jaws of force appear in a cone before you, tearing at every creature in the area. The spell deals 2d4 points of damage per caster level (maximum 30d4); half of this damage is slashing damage and half is energy damage of a type set by the dragon-derived material component: acid for black, copper, or green; electricity for blue or bronze; fire for brass, gold, or red; and cold for silver or white.",
    note: "Material component: A very small crystal or glass cone, together with a tiny fragment or speck of dragon scale, bone, tooth, or talon. (Dragons have been unseen for a thousand years under APOC canon; the record stands as printed — see SCREENING.md.)",
  }),
  C({
    id: "shockwave-344",
    name: "Shockwave",
    descriptors: ["Force"],
    levels: { "Sorcerer/Wizard": 3 },
    components: "V, S, M",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "20-ft.-radius burst",
    savingThrow: "Fortitude partial",
    spellResistance: "Yes",
    summary:
      "You create a burst of concussive force that disorients victims without causing permanent damage. Shockwave deals 1d4 points of nonlethal damage per caster level (maximum 10d4) to every creature within the area and stuns them for 1 round. A successful Fortitude save reduces the damage by half and negates the stun. Shockwave has no effect on nonliving creatures or objects, and creatures immune to nonlethal damage cannot be stunned by the spell.",
    note: "Material component: A small crystal sphere. DIVERGENCE: this Dragon #344 printing stuns for 1 round; the live catalog's Shockwave record (Sharn: City of Towers) dazes for 1 round instead. The two printings stand as separate records — see SCREENING.md.",
    source: SRC_DREAD,
    ruleset: "eberron",
  }),
];
