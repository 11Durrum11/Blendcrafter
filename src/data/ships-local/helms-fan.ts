import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

// "1. Helm types and function.txt" — a classic fan compilation
// of spelljamming helms in Shaun's ships folder, pricing 14
// helm types with full function text. DEDUPE (checked against
// the live catalog AND the staged spelljammer-web pack, any
// quoting style): SEVEN of its fourteen entries duplicate the
// staged web pack's helms (Pool Helm, Orbus, Forge, Furnace,
// Artifurnace, Death Helm, Pump Helm) and are not rebuilt; the
// Series Helm and the Lifejammer already exist in the catalog
// (the boxed-set Series Helm record, and the Lifejammer built
// from the "3e Spelljammer: Spelljamming Helms" fan document at
// that document's price of 25,000 gp — this compilation prices
// the Lifejammer at 80,000 gp instead; the disagreement is
// flagged in the sweep report, not silently resolved). The
// FIVE records here are what is genuinely new as named items:
// Minor Helm, Major Helm, Gnomish Helm, Crown of the Stars,
// and Non-Magical Engines. (The catalog's 136 "Helms (3e
// Spelljammer)" records are size-by-speed matrix configurations
// from the other fan document, a different pricing model from
// these classic flat-priced named helms.)
// House style: short mechanical summaries; the file's text is
// not reproduced.

const HELM = "Helm Types and Function (fan compilation, Shaun's files)";
const HELM_PATH =
  "/A POC PC related/3.All to do with ships/1. Helm types and function.txt";

const SR_TABLE = `Ship's Rating by helmsman level (Minor/Major): levels 1-3: 1/1 · 4-5: 1/2 · 6-7: 2/3 · 8: 2/4 · 9: 3/4 · 10-11: 3/5 · 12: 4/6 · 13: 4/6 · 14: 4/7 · 15: 5/7 · 16: 5/8 · 17: 5/8 · 18: 6/9 · 19: 6/9 · 20: 6/10.`;

function helm(
  id: string,
  name: string,
  cost: string,
  summary: string,
): MagicItemDefinition {
  return {
    id: `fan-${id}`,
    name,
    category: "helm",
    cost,
    summary,
    source: HELM,
    sourceUrl: HELM_PATH,
    ruleset: "core",
  };
}

export const FAN_HELM_MAGIC_ITEMS: MagicItemDefinition[] = [
  helm(
    "minor-helm",
    "Minor Helm (classic)",
    "100,000 gp",
    `The classic spelljamming helm: converts a seated spellcaster's spell energy directly into motive force. Only mages and clerics can power it, and powering the helm prohibits the mage from any spell use within a 24-hour period of powering the helm. Provides 1 point of Ship's Rating per three levels of the helmsman (major helm: 1 per two levels). An individual can power the helm for up to 12 hours, after which the Ship's Rating drops by 1 point per additional hour. A minor helm moves a ship of up to 50 tons (minimum 1 ton); only one helm can be used at a time, but smart captains keep a spare aboard. Caster level 15th; Will save +18 (per the compilation's table). ${SR_TABLE}`,
  ),
  helm(
    "major-helm",
    "Major Helm (classic)",
    "250,000 gp",
    `The greater classic spelljamming helm; works exactly as the minor helm but provides 1 point of Ship's Rating per two levels of the helmsman and moves a ship of up to 100 tons (minimum 1 ton). Only mages and clerics can power it; powering it bars the mage from spell use within a 24-hour period of powering the helm; up to 12 hours at full rating, then the rating drops 1 point per additional hour. Caster level 17th; Will save +20. ${SR_TABLE}`,
  ),
  helm(
    "gnomish-helm",
    "Gnomish Helm",
    "50,000 gp",
    `By all logic a gnomish helm should not function, as it defies the very laws of nature — of course, it works anyway, generally because the design includes a minor helm hidden away somewhere within. It carries an incredibly large number of moving parts, bells and whistles that create much commotion but do very little; the object of scorn and ridicule among the larger spacer population, and often at the epicenter of some of the void's most legendary pranks. Caster level 15th; Will save +18.`,
  ),
  helm(
    "crown-of-the-stars",
    "Crown of the Stars",
    "a king's ransom, at least",
    `A magical item that takes all of the abilities of the Minor Helm and puts them into an item that can be worn, allowing the helmsman to move around the ship normally. It does not have to be a crown, and may come in the form of any sort of magical item that is worn, with the exception of a ring. The Crown can be used effectively up to a mile away from the ship, allowing the helmsman to command the vessel even if he is not onboard — much sought after by merchant captains who wish to power a barge with it instead of towing it. Caster level 19th; Will save +22. Price unknown, but bound to be extremely high.`,
  ),
];

export const FAN_HELM_EQUIPMENT: EquipmentItem[] = [
  {
    id: "fan-non-magical-engines",
    name: "Non-Magical Engines (spelljamming)",
    category: "ship engine",
    cost: "varies, but approx. 10,000 gp is common",
    weight: "—",
    notes: `Not every spelljamming engine uses magic: alternatives run from chemical propellants to explosive mixtures ignited in a closed space. Most non-magical engines are used in lifeboats, or as backups for the main helm — to be used if the helm is disabled, or in dead magic areas. The maximum Ship's Rating for any non-magical engine is never more than 1, and they cannot be used to lift off from celestial bodies larger than Class A.`,
    source: HELM,
    sourceUrl: HELM_PATH,
    ruleset: "core",
  },
];
