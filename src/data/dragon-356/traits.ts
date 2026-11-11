// Dragon Magazine #356 (June 2007) — trait draft: 8 records.
// Class Acts: "Occult Mutations" (Tim Hitchcock, illustrated by Jon
// Hodgson), pp. 88-89 — eight character traits in the Unearthed
// Arcana trait shape (benefit + drawback), printed as traits. The
// article's frame: occult mutations are character traits; a character
// may have only ONE occult mutation from this article (overriding the
// usual two-trait allowance for these), and traits are taken at 1st
// level. Ids are prefixed `occult-` to keep the generic mutation
// names clear of the live trait/flaw barrels.
// Read from the archive.org OCR stream, cross-checked against the
// article text; benefit/drawback numbers are the legible OCR values.
// APOC notes: Bleached Pupils' drawback keys off bright sunlight and
// the daylight spell — in APOC the sky is always grey with no sun;
// the trait stages as printed and the interaction is flagged in
// SCREENING.md (the daylight spell still exists; natural-sunlight
// dazzling simply has no sky to come from). Corpse Flesh grants
// DR 2/slashing in modern 3.5 notation as printed (no +N-keyed DR;
// no conversion needed). No trait summons, calls, or opens a plane.

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #356 — Class Acts: Occult Mutations (Tim Hitchcock), pp. 88-89";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const FRAME =
  " Occult mutation (character trait, Unearthed Arcana trait rules): taken at 1st level; a character may have only one occult mutation from this article.";

type TraitSeed = Partial<FlawTraitDefinition> & Pick<FlawTraitDefinition, "id" | "name" | "summary" | "description">;

function T(seed: TraitSeed): FlawTraitDefinition {
  return {
    kind: "trait",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    prerequisite: "1st level; only one occult mutation per character.",
    ...seed,
  } as FlawTraitDefinition;
}

export const DRAGON_356_TRAITS: FlawTraitDefinition[] = [
  T({
    id: "occult-amphibious",
    name: "Amphibious (Occult Mutation)",
    summary:
      "Occult mutation trait: you gain a +1 bonus on Swim checks, can hold your breath for a number of rounds equal to 3 times your Constitution, and gain Kuo-Toan as a bonus language; drawback — you must drench your body in at least 5 gallons of water as part of the process to regain your spells.",
    description:
      "You unlocked the secrets of your craft by studying forbidden texts of kuo-toan magic; as you toiled over its pages, your hair slowly fell out and your skin paled, becoming saggy and semi-translucent, hanging loosely between your joints so your digits, armpits, knees, and elbows have a webbed appearance. Benefit: You gain a +1 bonus on Swim checks and you can hold your breath for a number of rounds equal to 3 times your Constitution. You also gain Kuo-Toan as a bonus language. Drawback: You must drench your body in at least 5 gallons of water as part of the process to regain your spells." +
      FRAME,
  }),
  T({
    id: "occult-bleached-pupils",
    name: "Bleached Pupils (Occult Mutation)",
    summary:
      "Occult mutation trait: your pupilless eyes grant a +1 bonus on Intimidate checks and a +3 bonus on all saves made to resist gaze attack effects; drawback — you are light sensitive (bright sunlight and the daylight spell dazzle you; if already light sensitive, you gain light blindness instead).",
    description:
      "Improper channeling of one of your evocation spells caused an explosive arcane backlash that bleached out your pupils, giving you an unnerving appearance. Benefit: Your pupilless eyes grant you a +1 bonus on Intimidate checks and a +3 bonus on all saves made to resist gaze attack effects. Drawback: You are light sensitive: bright sunlight and the daylight spell dazzle you. If you are already light sensitive, you gain light blindness instead: sunlight and the daylight spell blind you for 1 round; thereafter you are dazzled for as long as you remain in the affected area." +
      FRAME +
      " APOC note: the Bastion world's sky is always grey — no sun — so the natural-sunlight trigger has no sky to come from; the daylight spell trigger stands as printed. See SCREENING.md.",
  }),
  T({
    id: "occult-corpse-flesh",
    name: "Corpse Flesh (Occult Mutation)",
    summary:
      "Occult mutation trait: your deadened flesh grants DR 2/slashing; drawback — magical healing is blunted: spells from the healing subschool and supernatural abilities that cure hit point damage or ability damage cure or restore 1 point less per die rolled.",
    description:
      "Extensive use of the necromantic arts has left your outer layer of skin deadened and bloodless; it appears pallid and is cold and stiff to the touch. Benefit: It is difficult to make your deadened flesh bleed, granting you DR 2/slashing. Drawback: Your deadened flesh resists magical healing: spells from the healing subschool and supernatural abilities that cure hit point damage or ability damage cure or restore 1 point less per die rolled (for example, a cure moderate wounds spell cast by a 5th-level cleric would heal you of only 2d8+1 points of damage, and a lesser restoration would restore only 1d4-1 points of ability damage)." +
      FRAME,
  }),
  T({
    id: "occult-lidless-eyes",
    name: "Lidless Eyes (Occult Mutation)",
    summary:
      "Occult mutation trait: your unblinking lidless gaze grants a +2 bonus on Search and Spot checks; drawback — because you cannot close your eyes, you take a -2 penalty on all saving throws made to resist gaze attacks and cannot close your eyes to avoid them.",
    description:
      "Haunted as a child by terrible spirit visions, you ripped off your own eyelids; a mysterious cleric's strange magic covered your eyes with clear membranes similar to those of a lizard. Benefit: Your unblinking lidless gaze grants you a +2 bonus on Search and Spot checks. Drawback: Because you cannot close your eyes, you take a -2 penalty on all saving throws made to resist gaze attacks and cannot close your eyes to avoid them." +
      FRAME,
  }),
  T({
    id: "occult-midnight-pupils",
    name: "Midnight Pupils (Occult Mutation)",
    summary:
      "Occult mutation trait: you gain darkvision to a range of 60 feet (if you already have darkvision, its range increases by 60 feet); drawback — you can only see through your darkvision, seeing everything in black and white, and take a -2 penalty on Search and Spot checks in areas brighter than shadowy illumination.",
    description:
      "You survived a magical mishap involving sun-bright blasts of light that distended your pupils, leaving your irises swollen and black and your sight permanently altered — you now see only reflections of colorless shades of gray. Benefit: You gain darkvision to a range of 60 feet; if you already have darkvision, the range increases by 60 feet. Drawback: You can only see through your darkvision, meaning you see everything in black and white, and you take a -2 penalty on Search and Spot checks made in areas brighter than shadowy illumination." +
      FRAME,
  }),
  T({
    id: "occult-rune-scarred",
    name: "Rune-Scarred (Occult Mutation)",
    summary:
      "Occult mutation trait: the runes scarred into your flesh flash when you are struck by magical energy attacks, granting cold and electricity resistance 2; drawback — constant pain dulls your senses, imposing a -2 penalty on Listen, Spot, and initiative checks.",
    description:
      "To attain arcane secrets you underwent a painful ritual; something went terribly wrong, and the unleashed magical energies scarred your flesh with horrible runic scars that cause ceaseless pain. Benefit: The runes flash with bright magical energy whenever you are struck by magical energy attacks; these flashes grant you cold and electricity resistance 2. Drawback: The constant pain dulls your senses slightly, causing you to suffer a -2 penalty on Listen, Spot, and initiative checks." +
      FRAME,
  }),
  T({
    id: "occult-toad-warts",
    name: "Toad Warts (Occult Mutation)",
    summary:
      "Occult mutation trait: your thick, warty skin grants a +1 natural armor bonus; drawback — the same thick skin slows you and makes you hideous, imposing a -1 penalty on Reflex saves and Charisma-based skill checks.",
    description:
      "Thick, brown, warty bumps cover your body, giving your flesh a toad-like appearance; some sages speculate that poor bindings with toad familiars cause this mutation, others that it is a side effect of using slaadi magic. Benefit: Your thick, warty skin grants you a +1 natural armor bonus. Drawback: The same thick skin that protects you also slows you and makes you hideous to the eyes of others: you take a -1 penalty on Reflex saves and Charisma-based skill checks." +
      FRAME,
  }),
  T({
    id: "occult-unnatural-aura",
    name: "Unnatural Aura (Occult Mutation)",
    summary:
      "Occult mutation trait: you gain a +2 bonus on all Intimidate checks and a +2 bonus to the DC of spells from the fear subschool that you cast; drawback — your aura disturbs animals and vermin, imposing a -2 penalty on any skill checks or wild empathy checks you make dealing with them.",
    description:
      "You acquired your powers by infusing yourself with the supernatural essence of a magical beast, whose scent, aura, or other emanation infused your very being; most creatures barely notice your aura, but animals are extremely sensitive to it and find it disturbingly threatening. Benefit: You possess an unnatural aura: you gain a +2 bonus on all Intimidate checks and a +2 bonus to the DC of spells from the fear subschool that you cast. Drawback: Your unnatural aura disturbs creatures of the animal and vermin types, imposing a -2 penalty on any skill checks or wild empathy checks you make dealing with them." +
      FRAME,
  }),
];
