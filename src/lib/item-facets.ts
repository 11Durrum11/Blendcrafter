import type { EquipmentItem } from "@/engine/types";

/**
 * Ammunition facets (Shaun, 2026-11-04: "Subcategorize ammunition
 * normal and alchemical" + "Melee and gun"). The Ammunition section
 * of the Equipment step gets two button rows, mirroring the Weapons
 * Melee / Ranged / Firearms buttons: an alchemical facet (Normal /
 * Alchemical) and a delivery facet (Gun / Other). EquipmentItem
 * carries no structured payload or delivery fields, so both facets
 * are classified here from the record's name and notes, verified
 * record-by-record over the whole Ammunition section.
 *
 * Alchemical: the projectile carries an alchemical payload or is
 * itself an alchemical delivery vessel — alchemist's fire / acid /
 * holy-water loads, tangle loads, thunderstone-payload heads,
 * smoke, blinding or deafening charges, incendiary and explosive
 * alchemical loads, glue loads, and arrows built to deliver an
 * alchemical substance (including the house arrows named for their
 * payloads: acid, alchemist's fire, grease, smokescreen, flash-bang,
 * choke, and the hardening-goo binding arrow; the hollow glass-
 * tipped house arrow counts too — it exists to deliver alchemy).
 * Judgment calls: tracer shot counts as alchemical (an incendiary
 * tracer compound, not plain shot), and so does the Siegemaster's
 * glass load — its text specifies alchemical glass and an explosive
 * charge, unlike a plain shrapnel load. NOT alchemical: pitch and
 * flare arrows that are simply lit before firing, hot oil / hot
 * sand siege loads, disease-bearing siege shot, and loads of live
 * creatures (spider shot, the swarm load — the alchemical drugs
 * only prep the vermin; the payload is the swarm) — those are
 * Normal. Cannon shells are Normal: gunpowder ordnance, not
 * alchemy.
 *
 * Gun: ammunition for a black powder firearm — bullets, cartridges,
 * shot and powder charges whose record says so, plus gun-ordnance
 * names (musketoon, blunderbuss, pedrero, cannon, canister, grape
 * shot, case shot) and the silver bullet. NOT gun: sling bullets
 * and stones (including the sling-fired exploding bullet and
 * firesling bullets — alchemical, but sling-delivered), ballista
 * bolts and other torsion-engine shot, crossbow clips, arrows,
 * darts, and the Electricaster's device pellets.
 */
export type AmmoFacet = "normal" | "alchemical";
export type AmmoDelivery = "gun" | "other";

export const AMMO_FACETS: { key: AmmoFacet; label: string }[] = [
  { key: "normal", label: "Normal" },
  { key: "alchemical", label: "Alchemical" },
];

export const AMMO_DELIVERIES: { key: AmmoDelivery; label: string }[] = [
  { key: "gun", label: "Gun" },
  { key: "other", label: "Other" },
];

// Payload vocabulary in the name itself.
const ALCHEMICAL_NAME =
  /alchemist|alchemical|\bacid\b|holy|unholy|tangle|thunder|smokescreen|smoke|blinding|deafening|incendiary|explosive|tracer|darkfire|flash-bang|flash bang|choke|binding|glass-tipped|grease/i;
// Alchemical payload described in the notes even when the name is plain.
const ALCHEMICAL_NOTES = /alchemist|\balchemical\b|elemental powders|hardening goo/i;
// House arrows are named for their payloads (the injection arrow is
// an alchemy-delivery vessel like the glass-tipped one).
const HOUSE_PAYLOAD = /^house-(acid|alchemists-fire|grease|smokescreen|flash-bang|choke|binding|glass-tipped|injection)-arrow$/;
// Live-creature loads stay Normal even though their notes mention
// the alchemical drugs used to prepare the creatures.
const NOT_ALCHEMICAL_IDS = new Set(["swarm-load-1"]);

export function ammoFacet(item: EquipmentItem): AmmoFacet {
  if (NOT_ALCHEMICAL_IDS.has(item.id)) return "normal";
  if (HOUSE_PAYLOAD.test(item.id)) return "alchemical";
  if (item.id === "glue-load-1" || item.id === "firesling-bullets-5" || item.id === "elemental-arrowbag-1") return "alchemical";
  if (/stone/i.test(item.name) && /holy|unholy/i.test(item.name)) return "alchemical";
  if (ALCHEMICAL_NAME.test(item.name)) return "alchemical";
  if (ALCHEMICAL_NOTES.test(item.notes)) return "alchemical";
  return "normal";
}

const GUN_NAME = /musketoon|blunderbuss|pedrero|cannon|canister|grape ?shot|case shot/i;
const GUN_IDS = new Set(["bullets-ss", "silver-bullet"]);

export function ammoDelivery(item: EquipmentItem): AmmoDelivery {
  if (GUN_IDS.has(item.id)) return "gun";
  if (/black powder firearm|firearm/i.test(item.notes)) return "gun";
  if (GUN_NAME.test(item.name)) return "gun";
  return "other";
}
