/**
 * APOC canon gray-outs that the spell mechanism in
 * step-reference.tsx does not reach (integration, 2026-11-05).
 *
 * The transdimensional SPELL gray-out lives in
 * step-reference.tsx (Calling subschool + a named id set).
 * Two canon rulings needed the same treatment on records that
 * mechanism does not cover:
 *
 * 1. The psychoportation boundary rule (Shaun, 2026-11-04):
 *    "If the verbiage of psychoportation breaches the
 *    boundaries of my world, then it doesn't work" — restated:
 *    if a power takes the manifester (or a target) outside the
 *    Material Plane, it doesn't work. The psionic powers below
 *    were screened by their own verbiage at integration
 *    (Teleportation subschool, plane shift, astral/ethereal
 *    travel, extradimensional movement or spaces, calling).
 *    STAYING LIVE by the same test: the time powers (Time Hop
 *    family, Temporal Acceleration, Time Regression — they
 *    never leave the world), and the anti-teleport defensives
 *    (Dimensional Anchor, Psionic; Divert Teleport; Trace
 *    Teleport — the Dimensional Anchor precedent).
 *    ASTRAL CONSTRUCT: at integration it was left live as the
 *    named borderline case (it shapes ectoplasm drawn from
 *    the Astral Plane but creates the construct on the
 *    Material and calls no one across). Shaun ruled on it
 *    the same night (2026-11-04): "Leave out the construct."
 *    It is OUT — it joins this set below.
 *
 * 2. No tieflings (Shaun, 2026-11-04): tieflings do not exist
 *    in APOC — by definition of their bloodline, the
 *    fiend-blooded planetouched were all backdoored into
 *    being demons. Races have no other gray-out hook, so the
 *    race step renders these as grayed, unpickable rows with
 *    the canon note. The record itself is kept, not deleted.
 *
 * 3. No drow (Shaun, 2026-11-05): drow do not exist in APOC
 *    either — when the demons first came through, the drow
 *    as an entire race welcomed them and were all absorbed
 *    into the demons wholesale. Same handling as the
 *    tieflings: the race record is kept, grayed, unpickable,
 *    with its own canon note.
 *
 * 4. No diaboli (Shaun, 2026-11-09, on Dragon #327's Diabolus):
 *    "Gray out the Diabolus, like the tieflings" — the diaboli
 *    are fiend-blooded planetouched of the Demiplane of
 *    Nightmares, and planar travel is severed besides. Same
 *    handling: the record (Dragon Magazine #327, Winning
 *    Races) is kept, grayed, unpickable, with the tiefling
 *    bloodline note.
 */

export const APOC_DISABLED_POWER_IDS = new Set([
  // Expanded Psionics Handbook — Teleportation subschool
  "baleful-teleport",
  "call-weaponry",
  "dimension-door-psionic",
  "dimension-slide",
  "dimension-swap",
  "dissipating-touch",
  "retrieve",
  "teleport-psionic",
  "teleport-psionic-greater",
  "teleportation-circle-psionic",
  "teleport-trigger",
  // Expanded Psionics Handbook — planar verbiage
  "astral-construct",
  "astral-caravan",
  "ethereal-jaunt-psionic",
  "etherealness-psionic",
  "plane-shift-psionic",
  "genesis",
  "banishment-psionic",
  "dismissal-psionic",
  "dream-travel",
  // Complete Psionic
  "dimension-hop",
  "dimension-twister",
  "inconstant-location",
  "dimensional-pocket",
  "psychoportive-shelter",
  "ethereal-abduction",
  "shadow-walk-psionic",
  "call-armor",
  "planar-champion",
]);

export function isApocDisabledPower(s: { id: string }): boolean {
  return APOC_DISABLED_POWER_IDS.has(s.id);
}

export const APOC_DISABLED_RACE_IDS = new Set(["tiefling", "drow", "drow-dotu", "diabolus"]);
// "drow" is the Races of Eberron record; "drow-dotu" is the Drow
// of the Underdark record — the same race from its own book, and
// the same ruling covers both (Shaun, 2026-11-05). "diabolus" is
// the Dragon Magazine #327 record, grayed under the tiefling
// bloodline ruling (Shaun, 2026-11-09).

export const APOC_TIEFLING_NOTE =
  "In APOC: the fiend-blooded were backdoored into being demons — tieflings do not exist.";

export const APOC_DROW_NOTE =
  "In APOC: the drow welcomed the demons and were absorbed — drow do not exist.";

export const APOC_DIABOLUS_NOTE =
  "In APOC: the fiend-blooded were backdoored into being demons — the diaboli do not exist.";

const APOC_RACE_NOTES: Record<string, string> = {
  tiefling: APOC_TIEFLING_NOTE,
  drow: APOC_DROW_NOTE,
  "drow-dotu": APOC_DROW_NOTE,
  diabolus: APOC_DIABOLUS_NOTE,
};

export function apocRaceNote(r: { id: string }): string {
  return APOC_RACE_NOTES[r.id] ?? APOC_TIEFLING_NOTE;
}

export function isApocDisabledRace(r: { id: string }): boolean {
  return APOC_DISABLED_RACE_IDS.has(r.id);
}
