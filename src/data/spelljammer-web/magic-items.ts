import type { MagicItemDefinition } from "@/engine/types";

// Spelljammer helm types and engines from the WIDER 2e line —
// the named helm types the catalog did not already have. The
// generic major/minor helm configurations (136 records) and the
// Lifejammer, Life Forcer, and Charge Forcer are already in the
// catalog from the 3e fan "Helms" document, and the Series Helm
// is in src/data/spelljammer/magic-items.ts; none of those are
// rebuilt here. Researched and built 2026-11-04 from the
// Spelljammer Wiki's helm article (which digests the printed 2e
// rules), cross-checked against the Forgotten Realms Wiki and
// the Realm of Adventure wiki. Converted to 3.5 on the boxed-set
// pack's pattern. No price is recorded unless a source in hand
// prints one: most of these engines are built into their ships,
// made by one race for itself, or simply never sold, and the
// books print no price for them. House style: short mechanical
// summaries written for this dataset; the books' text is not
// reproduced.

const HELMS_WIKI = "https://spelljammer.fandom.com/wiki/Spelljammer_Helms";
const SRC = "Spelljammer — helm types of the AD&D 2e line, via the Spelljammer Wiki (converted to 3.5)";

export const SPELLJAMMER_WEB_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "furnace-helm",
    name: "Furnace",
    category: "wondrous-slotless",
    cost: "—",
    summary: "An early form of spelljamming helm that burns magic items for motive power instead of draining a spellcaster. For every 1,000 XP an item fed into it is worth, the furnace runs for one week at Ship's Rating 2; feeding a second item at the same time raises the rating to 3 but carries a 25% chance the furnace explodes, dealing 10d10 damage in a 30 ft radius. Furnaces work only inside a crystal sphere — in the phlogiston the furnace fire ignites the flow and the ship is destroyed. Most furnaces are found on ghost ships and crashed hulks; the Arcane are rumored to have developed them. The books print no price.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "artifurnace",
    name: "Artifurnace",
    category: "wondrous-slotless",
    cost: "—",
    summary: "The rarest and most dangerous furnace variant: instead of consuming magic items, an artifurnace saps the theoretically inexhaustible power of a major artifact. It has the power of a major helm (in 3e conversion terms, a ship of up to 100+1d10 tons) with no fuel limit — and it is built around an artifact no sane owner would risk. Never sold; no price is printed in any source read.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "death-helm",
    name: "Death Helm (Deathjammer)",
    category: "wondrous-slotless",
    cost: "—",
    summary: "A neogi refinement of the lifejammer, shaped like an ordinary helm seat. It drains the life force of the being seated in it exactly as a lifejammer does — 1d8 hit points per day of operation and a save versus death, hit points that cannot be regained while the victim remains in the helm — but moves a ship as a major helm, and it charms its user (as charm person) to love the sensation and resist all attempts to remove them, wasting away happily until they die at the seat. A being who makes the initial save senses the wrongness of the device forever after. Not an Arcane creation; the books print no price. (One secondary wiki gives the drain as 2d6 per day; the Spelljammer Wiki's 'same fashion as a lifejammer' wording is followed here — see the build report.)",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "pool-helm",
    name: "Pool Helm",
    category: "wondrous-slotless",
    cost: "500,000 gp",
    summary: "An illithid engine built around an elder brain's brine pool: the tadpoles in the pool are the power source, giving a fixed Ship's Rating of 5 regardless of crew, and freeing the two to five mind flayers a series helm would occupy. The elder brain aboard can scan for thinking creatures within 2 miles. Only about 10% of illithid ships carry one; rumor credits pool helms with moving ships of up to 200 tons. Price as given by the Realm of Adventure wiki; no printed price was verified against a book (see the build report).",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "ki-helm",
    name: "Ki Helm",
    category: "wondrous-slotless",
    cost: "—",
    summary: "The engine of Wa's great Tsunami flagships: a large onyx circle bearing a yin-yang symbol, with an octagonal crystal at its center and eight meditation circles around it. Up to eight ki-empowered individuals meditate in the circles and pour their ki into the crystal, where a ninth, focal helmsman seated on the crystal turns the accumulated energy into motive force — without the focal helmsman the energy is wasted. Every full 20 points of accumulated ki raises the Ship's Rating by 1 (10-19 points gives SR 1; fewer than 10 cannot move the ship at all). A contributor can serve up to 12 hours, then must rest a full day or contribute at half strength. The books print no price.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "grand-helm",
    name: "Grand Helm",
    category: "wondrous-slotless",
    cost: "—",
    summary: "Created by the wizards of Thay for their Quad of Thay: a helm that lets up to four mages or priests power a ship together — their caster levels are added and divided by four (rounding up) to set the Ship's Rating. At spelljamming speed the ship turns partially ethereal and achieves double the normal spelljamming speed; only an object of 200 tons or more can pull it back down to tactical speed, and smaller vessels pass it by unnoticed. The phasing effect bars the ship from the phlogiston entirely — it must be towed between spheres by a conventionally helmed vessel — so grand helms are almost never seen outside Realmspace. The books print no price.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "radiant-helm",
    name: "Radiant Helm",
    category: "wondrous-slotless",
    cost: "—",
    summary: "The drow engine of the Jade Spider ships: a crown built from the legs of a great poisonous spider, functioning as a major helm. It works only aboard specially built drow hulls incorporating radioactive Underdark ores, and only drow or other innately magical creatures can use it — the helmsman draws on their own innate magic, supplemented by the ores' radiation, and loses all innate magical abilities until they have rested a full eight hours. The books print no price.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "bardic-helm",
    name: "Bardic Helm",
    category: "wondrous-slotless",
    cost: "—",
    summary: "A helm built around a musical instrument, found on bardic vessels such as the Iambus and Quentin's Libraria. While a bard — or anyone with the musical proficiency to play the particular instrument — performs on it, the bardic helm functions as a major helm. The instrument is often strange or exotic, which doubles as theft protection: few thieves can play the ship away. The books print no price.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "forge-engine",
    name: "Forge (Dwarven Engine)",
    category: "wondrous-slotless",
    cost: "—",
    summary: "Not a helm but a foundry: the dwarven engine that powers the great stone citadels. A forge fills a large foundry room where dwarves work around the clock, and their creative energy — not spellcasting — becomes motive force: Ship's Rating 1 for every 100 dwarves working in the foundry. A forge can move a ship of 100 to 700 tons. No other race has ever made the technology work, and a forge is built into its citadel rather than sold; the books print no price.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "orbus-engine",
    name: "Orbus (Beholder Engine)",
    category: "wondrous-slotless",
    cost: "—",
    summary: "Not a device at all but a living engine: the orbus, a bred beholder-kin, channels the aberrant magical energies of beholders into motive force aboard Tyrant ships. Each orbus aboard gives Ship's Rating 1, to a maximum of five orbii; one orbus can power a ship of up to 20 tons, two up to 40 tons, and three or more up to 60 tons. Beholders destroy their orbii rather than let another race take one; no price exists.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "pump-helm",
    name: "Pump Helm (The Pump)",
    category: "wondrous-slotless",
    cost: "—",
    summary: "A gruesome goblin engine from the Unhuman Wars fleets: the Pump must be fed material — one pound of it (10 coins or gems' worth of mass) moves a ship of up to 100 tons for one hour, and the Ship's Rating depends on the material fed (a printed material-to-SR table exists in the sources but its values were not captured in readable text; see the build report). Nothing of the fuel remains afterward — if the fuel was flesh, there is nothing left to resurrect. The Pump cannot digest magic items at all: spellbooks, enchanted swords, and artifacts placed in it are ejected from the ship after 24 hours. The books print no price.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
  {
    id: "beacon-helm",
    name: "Beacon Helm",
    category: "wondrous-slotless",
    cost: "—",
    summary: "A major helm paired at its making with one or more alarm beacons — rings of adamantite, each set with a single large blue carbuncle. While the beacon helm operates, each linked ring's gem flashes and pulses visibly and can be felt by the wearer, giving the rough direction and distance of the helm; the ring is silent, and its bearer cannot cast spells while wearing it (potions, scrolls, and item activations still work). A ring can never be linked to an existing helm, dies if its gem is shattered or removed, and a wearer can distinguish up to three helms by their rings — a fourth makes all of them stop working until it is removed. The books print no price.",
    source: SRC,
    sourceUrl: HELMS_WIKI,
    ruleset: "core",
  },
];
