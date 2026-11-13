// Dragon Magazine #352 (February 2007) — magic item draft: 2 records.
// TWO warforged components — "Dragonmarks: Warforged: Fierce and
// Furious" (Nicolas Logue, introduction by Keith Baker), New
// Components, p. 84: the BATTLE VISOR (attached component) and the
// CAMOUFLAGED COMPARTMENT (embedded component). SURVEY CORRECTION:
// the program survey estimated ~8 Dragonmarks items; the article as
// printed carries exactly TWO new components — the rest of the
// article is cosmetic warforged generation charts (body types, head
// types, accent compositions, condition/ornamentation, personality
// quirks — all explicitly without game effect) and the Eldritch
// Crucible affiliation, all carried in reference.md.
// Handled exactly as issue #341's components pass: ruleset "eberron",
// category "wondrous," each record leads with its printed component
// kind; the published restriction (usable only by a warforged) stays
// in the record text AS PRINTED — Shaun's shared-pool override
// (Warforged / War-Torn / Steamcraft armor draw on one interchangeable
// equipment pool) is applied at play and is NOT blended into these
// records; see SCREENING.md. Eberron setting lore is stripped; only
// the mechanics are carried.
// Component rules frame (Eberron Campaign Setting, p. 268): a
// component occupies the same body space as the equivalent normal
// magic item; an embedded component cannot be damaged when its
// warforged fails a saving throw with a natural 1 and cannot be
// targeted independently of the warforged; components are usually
// activated by thought alone; attaching or detaching a component is
// a standard action that never provokes attacks of opportunity.
// All values verified against the rendered page image (magazine
// p. 84); the image governs over the OCR stream. The battle visor's
// CL 5th is confirmed as printed — anomalously low for an item built
// on greater arcane sight (a 7th-level spell); it is carried AS
// PRINTED and flagged in SCREENING.md, not silently corrected.
// ⚠️ APOC FLAG: the camouflaged compartment's storage is an
// extradimensional space. Extra-dimensional magic is dead in APOC.
// The component stages as printed under the #341 precedent and is
// flagged prominently in SCREENING.md for Shaun's call.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_DRAGONMARKS = "Dragon Magazine #352 — Dragonmarks: Warforged: Fierce and Furious (Nicolas Logue), p. 84";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function W(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_DRAGONMARKS,
    sourceUrl: SRC_URL,
    ruleset: "eberron",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_352_MAGIC_ITEMS: MagicItemDefinition[] = [
  W({
    id: "battle-visor",
    name: "Battle Visor",
    cost: "55,000 gp",
    summary:
      "Warforged component (attached). A sleek mithral visor — of the kind commonly found on helmets of full plate armor — bearing two vertical eyeslits connected by a single horizontal crossbar. Activation: lowering the visor and locking it into place activates its powers. With the visor locked in place, you gain the ability to discern magical auras and threats, as greater arcane sight. You can also see invisible, as the spell. Finally, you can automatically see any abjuration effect with a variable effect — thus, if a warrior is shrouded in protection from energy, you know which energy type he is protected against (this extends to spell immunity and other variable abjuration effects as well). Moderate divination; CL 5th (as printed); Craft Wondrous Item, greater arcane sight, see invisible, 27,500 gp, 2,200 XP, 55 days; Weight 3 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  W({
    id: "camouflaged-compartment",
    name: "Camouflaged Compartment",
    cost: "12,000 gp",
    summary:
      "Warforged component (embedded). This magically concealed compartment appears exactly like the surrounding part of the body into which it is built; the interior looks like a small dark space. These compartments are constructed to blend in with the warforged's body composition, requiring a DC 30 Search check to find. Activation: placing an item into the camouflaged compartment activates its effects. Housed inside the chest, torso, or upper leg, this magically concealed compartment contains a 10-cubic-foot extradimensional space that can hold up to 50 pounds of gear. The compartment's opening is 6 inches across at its widest point. Items locked within the compartment are warded by Nystul's magic aura, to appear nonmagical, and obscure object. Moderate abjuration; CL 5th; Craft Wondrous Item, Nystul's magic aura, obscure object, 6,000 gp, 480 XP, 12 days; Weight 1 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override). (APOC: the compartment's storage is extradimensional space, and extra-dimensional magic is dead in APOC — staged as printed and flagged in SCREENING.md.)",
  }),
];
