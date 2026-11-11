// Dragon Magazine #343 (May 2006) — magic item draft: 3 records.
// "Spellcraft: The Magic of Kyuss" (Jesse Decker), "Vestige Worms"
// sidebar, pp. 80-81. The program survey estimated ~0 named magic items
// in this issue; it missed these three entirely.
// Vestige worms are living Kyuss worms — Fine vermin, AC 10, 1 hp —
// that are also magic items. A worm is bound by placing it against
// unprotected flesh; it burrows in, dealing 1 point of damage, and the
// would-be host must succeed at a DC 20 Will save or fall under the
// worm's mental control and be forced to seek out Kyuss's followers; on
// a success the host masters the worm and can use its power. Bonding
// with a vestige worm is an evil act. The printed values exist to gauge
// effects on wealth by level — the article notes these worms are almost
// never bought and sold.
// APOC: the worms are in-world living creatures and in-world necromancy;
// nothing about them summons, calls, or travels the planes. The
// spellworm's example spell table (digested in reference.md) includes
// stored teleport and dimension door spells — examples of what a
// spellworm can hold, not a function of the item itself; teleportation
// within the plane stages per the issue-330 precedent. Bonding with a
// worm that can seize the host's mind is flagged in SCREENING.md.
// VERIFICATION BASIS: the archive.org OCR stream. The loreworm values
// follow the printed bonus-squared x 150 gp pattern (600 / 3,750 /
// 15,000 gp); the OCR reads the +5 worm's value as "375°", read as
// 3,750 gp on the strength of that pattern — flagged in MANIFEST.md.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #343 — Spellcraft: The Magic of Kyuss — Vestige Worms (Jesse Decker), pp. 80-81";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const VESTIGE_FRAME =
  "A vestige worm is a living Kyuss worm (Fine vermin, AC 10, 1 hp) that functions as a magic item. Bonding: placed against unprotected flesh, it burrows in (1 point of damage) and the host must succeed at a DC 20 Will save or fall under the worm's mental control and be forced to seek out followers of Kyuss; on a success, the host masters the worm and accesses its power. Bonding is an evil act. Vestige worms are almost never bought and sold; the value gauges wealth by level. ";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_343_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "spellworm",
    name: "Spellworm",
    cost: "50 gp x spell level x caster level",
    summary:
      VESTIGE_FRAME +
      "A spellworm hosts a single stored spell. The host can cast the stored spell as a full-round action following the normal rules for spellcasting (attacks of opportunity, arcane spell failure, and so on); the worm provides the power at the given caster level even if the host's relevant ability score is too low to cast the spell, though save DCs use the host's relevant ability score. Casting the spell destroys the worm. While bound, the host's pupils turn a dull, sickly green. Moderate necromancy; CL varies; Craft Wondrous Item, Wormbound Spellcaster feat or wormspawn subtype, ability to cast the spell to be stored, and any metamagic feats to be applied to the stored spell. Value: 50 gp x spell level x caster level (example spellworms are tabulated in the pack's reference.md).",
  }),
  M({
    id: "loreworm",
    name: "Loreworm",
    cost: "600 gp (+2) / 3,750 gp (+5) / 15,000 gp (+10)",
    summary:
      VESTIGE_FRAME +
      "A loreworm stores knowledge of a single subject: it grants its host a competence bonus on one Knowledge skill (+2, +5, or +10, by the worm's strength) and allows the host to make checks with that skill untrained; the worm is destroyed when it delivers its bonus, as described in the article. While bound, the host's pupils writhe through runelike shapes. Moderate necromancy; CL 7th; Craft Wondrous Item, Wormbound Spellcaster feat or wormspawn subtype, 8 ranks in a Knowledge skill. Value: +2 worm 600 gp; +5 worm 3,750 gp; +10 worm 15,000 gp.",
  }),
  M({
    id: "visionworm",
    name: "Visionworm",
    cost: "300 gp",
    summary:
      VESTIGE_FRAME +
      "A visionworm holds a perfect picture of a single witnessed moment. Its host can always recall the visual details of that moment with perfect clarity; drawing on the vision is a full-round action that provokes attacks of opportunity. While bound, the host's pupils turn lusterless gray. Moderate necromancy; CL 10th; Craft Wondrous Item, Wormbound Spellcaster feat or wormspawn subtype, and the creator must have witnessed the depicted event first-hand. Value: 300 gp.",
  }),
];
