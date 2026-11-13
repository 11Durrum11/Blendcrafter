// Dragon Magazine #350 (December 2006) — magic item draft: 6 items.
// "Bazaar of the Bizarre: Wizard's Workshop" (James Lafond Sutter),
// pp. 70-73: arcane fence, containment cloth, failsafe ring,
// occulus, researcher, thaumatuscope. ⚠️ SURVEY CORRECTION: the
// survey estimated ~8 Bazaar items; the article prints six.
// The article uses the Cityscape-era format: a full aura/caster
// level/price/weight line and a construction line per item. The
// scan's OCR interleaves the two columns of these pages, so stat
// lines were paired to items by construction cost (price is twice
// construction gp in every legible case) and spell prerequisites;
// the pairings and the two figures that could not be settled are
// disclosed in MANIFEST.md (unresolved scan gaps).
// ⚠️ APOC FLAG — see SCREENING.md §4: the containment cloth is a
// portable summoning-and-binding circle; summoning does not work in
// APOC. It stages as printed with the flag (precedent: issue-331's
// flagged vehicles and binding items). The thaumatuscope's quasit
// brain is an ingredient, not a planar mechanic — noted, not held.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #350 — Bazaar of the Bizarre: Wizard's Workshop (James Lafond Sutter), pp. 70-73";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

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

export const DRAGON_350_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "arcane-fence",
    name: "Arcane Fence",
    cost: "2,000 gp",
    summary:
      "A set of four 2-foot-long metal stakes that hum faintly when driven into the ground (each within 20 feet of at least two others, enclosing up to a rough 20-foot square; as few as three stakes still work). The enclosed area is protected by an alarm effect until one of the stakes is pulled up by someone who knows the password chosen at emplacement; the alarm's klaxon is audible only inside the enclosed area, and the stakes can add a ghost sound white-noise effect that imposes a -2 penalty on Listen checks made by those outside trying to hear in. Sets of stakes can be attuned to work together by bundling them with silk rope for a week; attuned sets function together or separately for one month before needing reattunement. A stake taken out of range of its fellows stops humming and loses effectiveness until returned. A single replacement stake costs 1,000 gp and must be crafted in the presence of the set's remaining stakes. A variant set (4,000 gp) also provides endure elements to everyone inside the enclosure. Aura: faint abjuration and illusion; CL 3rd. Construction: Craft Wondrous Item, alarm, ghost sound; 1,000 gp, 80 XP, 2 days. Weight: 1 lb.",
  }),
  M({
    id: "containment-cloth",
    name: "Containment Cloth",
    cost: "40,000 gp",
    summary:
      "An ornate circle of thick tan cloth (a wide circle across when unfolded — the diameter figure is illegible in the scan; see MANIFEST) that folds down to a 6-inch cube at its tightest. Laid flat on a roughly horizontal surface, it becomes a portable summoning circle: four permanent magic circle spells (against chaos, evil, good, and law) focused inward, together with dimensional anchor, bind any creature with the chaos, evil, good, or law descriptor summoned into the cloth's center, holding it until the user peels up an edge and refolds the cloth or the field is dispelled. The cloth remains flat and active until deliberately removed. Aura: moderate abjuration; CL 7th. Construction: Craft Wondrous Item, dimensional anchor, magic circle against chaos, magic circle against evil, magic circle against good, magic circle against law; 20,000 gp, 1,600 XP, 40 days. Weight: 1 lb. ⚠️ APOC FLAG: this item exists to bind summoned creatures, and summoning does not work in APOC — staged as printed and flagged in SCREENING.md §4.",
  }),
  M({
    id: "failsafe-ring",
    name: "Failsafe Ring",
    category: "ring",
    cost: "800 gp",
    summary:
      "A steel ring that continuously monitors its wearer's condition as with a deathwatch effect. When the wearer takes damage, the ring immediately casts mage armor on the wearer as if cast by a 1st-level caster, and the armor lasts its full duration even if the ring is removed; the ring cannot prevent or reduce the damage that triggers it, and it does not activate if the wearer is already under the effect of the spell it provides (one clause of the activation text — whether it triggers when the triggering damage kills or renders the wearer unconscious — is ambiguous in the scan; see MANIFEST). The wearer can also trigger the ring manually by twisting it clockwise, as a standard action. The ring functions only once per day. Variants provide other defensive spells instead of mage armor: shield is the most common variant; a blink variant costs 12,000 gp (CL 5th) and a fire shield variant costs 22,400 gp (CL 7th). Construction: Forge Ring, deathwatch, mage armor; 400 gp, 32 XP, 1 day.",
  }),
  M({
    id: "occulus",
    name: "Occulus",
    cost: "10,000 gp",
    summary:
      "Steel-studded black-leather goggles with ruby lenses. To activate them, slide the goggles down over your eyes and study a magic item in view, focusing on the tiny rune engraved on each lens for 1 round; the item is then subjected to an instantaneous identify effect, without the spell's usual hour-long casting time or costly material components (those are incorporated into the occulus's creation). The occulus can be used up to five times per day and does not require the user to be able to cast spells. Aura: faint divination; CL 1st (aura/CL pairing reconstructed from the interleaved scan; see MANIFEST). Construction: Craft Wondrous Item, identify; 5,000 gp, 400 XP, 10 days.",
  }),
  M({
    id: "researcher",
    name: "Researcher",
    cost: "—",
    summary:
      "A Tiny animated object construct resembling a bloodshot eyeball with eight black clockwork legs, built as the perfect research aide. Released into a library and given a topic — no more specific than the closest Knowledge category, since overly specific requests overwhelm it — a researcher scans tomes and scrolls at great speed for 15 minutes (in a well-stocked library) and then telepathically communicates its findings, granting its master a +5 bonus on Knowledge checks in the specified field for one hour. It cannot make untrained Knowledge checks usable, and bonuses from multiple researchers do not stack. A researcher requires a three-month apprenticeship riding on its master before it reaches peak effectiveness, is mindlessly loyal, and will not take a new master unless its current one dies or voluntarily transfers ownership. In combat, treat a researcher as a Tiny animated object. Aura: moderate divination and transmutation; CL 9th. Construction: Craft Wondrous Item, animate object, legend lore (construction time 3 days; the researcher's price line was not legible in the scan — see MANIFEST). Weight: 2 lb. A DM may allow a researcher to be taken in place of a familiar.",
  }),
  M({
    id: "thaumatuscope",
    name: "Thaumatuscope",
    cost: "1,000 gp",
    summary:
      "A collapsible spyglass of leather, bronze, and glass (12 inches when extended), built around a magically reduced section of quasit brain. Placing it to one eye and scanning an area within normal sight range, as a standard action, grants the benefits of detect magic on every object in view instantly, plus a +2 competence bonus on Spellcraft checks to identify the auras of objects viewed through it. Auras of areas and of magic-using characters are visible as well; a user who cannot cast spells sees auras glow blue but learns nothing further from them. Aura: faint divination; CL 3rd. Construction: Craft Wondrous Item, detect magic; 500 gp, 40 XP, 1 day. Weight: 1 lb.",
  }),
];
