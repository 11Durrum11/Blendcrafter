/**
 * Core Books Audit (2026-10-28): PHB equipment missing from the app —
 * the remaining rows of the SRD weapons table, armor/shield spikes
 * from the SRD armor table, and the SRD goods-and-services tables
 * (adventuring gear, special substances, class/kit items). Present
 * already and therefore skipped: all 13 SRD armors and shields, most
 * PHB weapons, and the gear carried by other packs (backpack, bedroll,
 * climber's kit, healer's kit, lanterns, rations, ropes, spyglass,
 * tent, thieves' tools, torch, waterskin, acid, alchemist's fire,
 * holy water). Special materials (adamantine, mithral, etc.) are SRD
 * rules text, not standalone items, and clothing/food/lodging/mount/
 * transport/services tables are price lists rather than builder
 * items — see the audit addendum in REBUILD-NOTES.md.
 */
import type { EquipmentItem } from "@/engine/types";

const W = "https://www.d20srd.org/srd/equipment/weapons.htm";
const A = "https://www.d20srd.org/srd/equipment/armor.htm";
const G = "https://www.d20srd.org/srd/equipment/goodsAndServices.htm";

type Row = [string, string, string, string, string, string];

function items(category: string, sourceUrl: string, rows: Row[]): EquipmentItem[] {
  return rows.map(([id, name, cost, weight, notes, source]) => ({
    id,
    name,
    category,
    cost,
    weight,
    notes,
    source,
    sourceUrl,
    ruleset: "core" as const,
  }));
}

const SW = "d20SRD — Equipment: Weapons";
const SA = "d20SRD — Equipment: Armor";
const SG = "d20SRD — Equipment: Goods and Services";

export const CORE_AUDIT_EQUIPMENT: EquipmentItem[] = [
  ...items("weapon", W, [
    ["flail-heavy", "Heavy Flail", "15 gp", "10 lb.", "1d10 bludgeoning, crit 19-20/x2; martial two-handed weapon", SW],
    ["crossbow-repeating-heavy", "Repeating Heavy Crossbow", "400 gp", "12 lb.", "1d10 piercing, crit 19-20/x2, range 120 ft.; exotic weapon, loads a case of 5 bolts", SW],
    ["crossbow-repeating-light", "Repeating Light Crossbow", "250 gp", "6 lb.", "1d8 piercing, crit 19-20/x2, range 80 ft.; exotic weapon, loads a case of 5 bolts", SW],
    ["shuriken-5", "Shuriken (5)", "1 gp", "1/2 lb.", "1d2 piercing, crit x2, range 10 ft.; exotic weapon, treated as ammunition (destroyed on a hit, 50% chance when missed)", SW],
    ["net", "Net", "20 gp", "6 lb.", "No damage; ranged touch attack entangles the target, range 10 ft.; exotic weapon", SW],
    ["bolas", "Bolas", "5 gp", "2 lb.", "1d4 nonlethal bludgeoning, crit x2, range 10 ft.; exotic weapon, can also trip at range", SW],
    ["arrows-20", "Arrows (20)", "1 gp", "3 lb.", "Ammunition for bows", SW],
    ["crossbow-bolts-10", "Crossbow Bolts (10)", "1 gp", "1 lb.", "Ammunition for crossbows", SW],
    ["sling-bullets-10", "Sling Bullets (10)", "1 sp", "5 lb.", "Ammunition for slings", SW],
  ]),
  {
    id: "armor-spikes",
    name: "Armor Spikes",
    category: "armor",
    cost: "50 gp",
    weight: "+10 lb.",
    notes: "Spikes added to armor; usable as a martial melee weapon dealing 1d6 piercing damage (Medium), including in a grapple",
    source: SA,
    sourceUrl: A,
    ruleset: "core",
  },
  {
    id: "shield-spikes",
    name: "Shield Spikes",
    category: "shield",
    cost: "10 gp",
    weight: "+5 lb.",
    notes: "Spikes added to a shield; the shield bash becomes a martial piercing attack and its damage increases as though the shield were one size larger",
    source: SA,
    sourceUrl: A,
    ruleset: "core",
  },
  ...items("gear", G, [
    ["barrel", "Barrel", "2 gp", "30 lb.", "Wooden storage barrel", SG],
    ["basket", "Basket", "4 sp", "1 lb.", "Woven carrying basket", SG],
    ["bell", "Bell", "1 gp", "—", "Small hand bell", SG],
    ["blanket-winter", "Blanket, Winter", "5 sp", "3 lb.", "Thick wool blanket for cold nights and use as a pallet", SG],
    ["block-and-tackle", "Block and Tackle", "5 gp", "5 lb.", "Pulley system granting a +5 bonus on hoisting checks, as printed", SG],
    ["bottle-wine-glass", "Bottle, Wine, Glass", "2 gp", "—", "Empty glass bottle", SG],
    ["bucket", "Bucket", "5 sp", "2 lb.", "Wooden bucket", SG],
    ["candle", "Candle", "1 cp", "—", "Illuminates a 5-foot radius for 1 hour", SG],
    ["canvas-sq-yd", "Canvas (Sq. Yd.)", "1 sp", "1 lb.", "One square yard of heavy cloth", SG],
    ["case-map-or-scroll", "Case, Map or Scroll", "1 gp", "1/2 lb.", "Leather case holding rolled papers", SG],
    ["chain-10-ft", "Chain (10 Ft.)", "30 gp", "2 lb.", "Hardness 10, 5 hit points, burst DC 26", SG],
    ["chalk-1-piece", "Chalk, 1 Piece", "1 cp", "—", "A stick of chalk for marking surfaces", SG],
    ["chest", "Chest", "2 gp", "25 lb.", "Wooden storage chest (lock sold separately)", SG],
    ["fishhook", "Fishhook", "1 sp", "—", "Barbed fishing hook", SG],
    ["fishing-net-25-sq-ft", "Fishing Net, 25 Sq. Ft.", "4 gp", "5 lb.", "Net for catching fish", SG],
    ["flask-empty", "Flask (Empty)", "3 cp", "1-1/2 lb.", "Empty flask holding 1 pint", SG],
    ["flint-and-steel", "Flint and Steel", "1 gp", "—", "Lights a fire as a full-round action", SG],
    ["hammer-tool", "Hammer", "5 sp", "2 lb.", "Tool hammer for driving spikes and nails", SG],
    ["ink-1-oz-vial", "Ink (1 Oz. Vial)", "8 gp", "—", "Black ink; other colors cost twice as much", SG],
    ["inkpen", "Inkpen", "1 sp", "—", "Pen for writing with ink", SG],
    ["jug-clay", "Jug, Clay", "3 cp", "9 lb.", "Holds 1 gallon of liquid", SG],
    ["ladder-10-foot", "Ladder, 10-Foot", "5 cp", "20 lb.", "Straight wooden ladder", SG],
    ["lamp-common", "Lamp, Common", "1 sp", "1 lb.", "Illuminates a 15-foot radius; burns 6 hours per pint of oil", SG],
    ["lock-very-simple", "Lock (Very Simple)", "20 gp", "1 lb.", "Open Lock DC 20", SG],
    ["lock-average", "Lock (Average)", "40 gp", "1 lb.", "Open Lock DC 25", SG],
    ["lock-good", "Lock (Good)", "80 gp", "1 lb.", "Open Lock DC 30", SG],
    ["lock-amazing", "Lock (Amazing)", "150 gp", "1 lb.", "Open Lock DC 40", SG],
    ["manacles", "Manacles", "15 gp", "2 lb.", "Restrains a Medium creature; Escape Artist DC 30, burst DC 26", SG],
    ["manacles-masterwork", "Manacles, Masterwork", "50 gp", "2 lb.", "Restrains a Medium creature; Escape Artist DC 35, burst DC 28", SG],
    ["mirror-small-steel", "Mirror, Small Steel", "10 gp", "1/2 lb.", "Polished steel mirror", SG],
    ["mug-tankard-clay", "Mug/Tankard, Clay", "2 cp", "1 lb.", "One-pint clay mug", SG],
    ["oil-1-pint-flask", "Oil (1-Pint Flask)", "1 sp", "1 lb.", "Lamp fuel; can also be thrown as a splash weapon as printed", SG],
    ["paper-sheet", "Paper (Sheet)", "4 sp", "—", "One sheet of paper", SG],
    ["parchment-sheet", "Parchment (Sheet)", "2 sp", "—", "One sheet of parchment", SG],
    ["pick-miners", "Pick, Miner's", "3 gp", "10 lb.", "Mining pick (a tool, not the military pick weapon)", SG],
    ["pitcher-clay", "Pitcher, Clay", "2 cp", "5 lb.", "Holds 1/2 gallon of liquid", SG],
    ["piton", "Piton", "1 sp", "1/2 lb.", "Iron spike hammered into stone to secure a rope", SG],
    ["pole-10-foot", "Pole, 10-Foot", "2 sp", "8 lb.", "Wooden pole for probing and reaching", SG],
    ["pot-iron", "Pot, Iron", "5 sp", "10 lb.", "Cooking pot holding 1 gallon", SG],
    ["pouch-belt", "Pouch, Belt", "1 gp", "1/2 lb.", "Leather belt pouch holding 1/5 cubic foot", SG],
    ["ram-portable", "Ram, Portable", "10 gp", "20 lb.", "Grants a +2 bonus on checks to break open doors, as printed", SG],
    ["sack", "Sack", "1 sp", "1/2 lb.", "Burlap sack holding 1 cubic foot", SG],
    ["sealing-wax", "Sealing Wax", "1 gp", "1 lb.", "Wax for sealing letters and containers", SG],
    ["sewing-needle", "Sewing Needle", "5 sp", "—", "Needle for stitching cloth and leather", SG],
    ["signal-whistle", "Signal Whistle", "8 sp", "—", "Whistle audible over long distances", SG],
    ["signet-ring", "Signet Ring", "5 gp", "—", "Personal seal pressed into sealing wax", SG],
    ["soap-per-lb", "Soap (Per Lb.)", "5 sp", "1 lb.", "One pound of soap", SG],
    ["spade-or-shovel", "Spade or Shovel", "2 gp", "8 lb.", "Digging tool", SG],
    ["vial-ink-or-potion", "Vial, Ink or Potion", "1 gp", "—", "Glass vial holding 1 ounce of liquid", SG],
    ["whetstone", "Whetstone", "2 cp", "1 lb.", "Sharpens a blade in 15 minutes, as printed", SG],
    ["smokestick", "Smokestick", "20 gp", "1/2 lb.", "Alchemical stick producing a 10-foot cube of smoke for 1 round when ignited", SG],
    ["sunrod", "Sunrod", "2 gp", "1 lb.", "Illuminates a 30-foot radius for 6 hours when struck", SG],
    ["tanglefoot-bag", "Tanglefoot Bag", "50 gp", "4 lb.", "Thrown bag of alchemical glue; entangles the target (Reflex DC 15), as printed", SG],
    ["tindertwig", "Tindertwig", "1 gp", "—", "Alchemical match; lights a fire as a standard action", SG],
  ]),
  ...items("tool", G, [
    ["artisans-tools", "Artisan's Tools", "5 gp", "5 lb.", "Tools for one Craft skill", SG],
    ["artisans-tools-masterwork", "Artisan's Tools, Masterwork", "55 gp", "5 lb.", "+2 circumstance bonus on Craft checks with the skill", SG],
    ["disguise-kit", "Disguise Kit", "50 gp", "8 lb.", "+2 circumstance bonus on Disguise checks; exhausted after 10 uses", SG],
    ["holy-symbol-wooden", "Holy Symbol, Wooden", "1 gp", "—", "Divine focus for a cleric or paladin", SG],
    ["holy-symbol-silver", "Holy Symbol, Silver", "25 gp", "1 lb.", "Silver divine focus for a cleric or paladin", SG],
    ["hourglass", "Hourglass", "25 gp", "1 lb.", "Measures one hour", SG],
    ["magnifying-glass", "Magnifying Glass", "100 gp", "—", "+2 circumstance bonus on Appraise checks for small or detailed items; doubles as a fire starter in sunlight", SG],
    ["musical-instrument-common", "Musical Instrument, Common", "5 gp", "3 lb.", "A typical lute, flute, or similar instrument", SG],
    ["musical-instrument-masterwork", "Musical Instrument, Masterwork", "100 gp", "3 lb.", "+2 circumstance bonus on Perform checks with the instrument", SG],
    ["scale-merchants", "Scale, Merchant's", "2 gp", "1 lb.", "+2 circumstance bonus on Appraise checks involving weight or bulk", SG],
    ["spellbook-wizards-blank", "Spellbook, Wizard's (Blank)", "15 gp", "3 lb.", "100 blank pages, each holding one spell", SG],
    ["thieves-tools-masterwork", "Thieves' Tools, Masterwork", "100 gp", "2 lb.", "+2 circumstance bonus on Disable Device and Open Lock checks", SG],
    ["tool-masterwork", "Tool, Masterwork", "50 gp", "1 lb.", "+2 circumstance bonus on a single skill check the tool is made for", SG],
    ["water-clock", "Water Clock", "1,000 gp", "200 lb.", "Stationary clock accurate to within half an hour per day", SG],
  ]),
];
