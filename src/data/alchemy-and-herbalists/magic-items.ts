import type { MagicItemDefinition } from "@/engine/types";

// Alchemy & Herbalists (Bastion Press, d20) — magic items.
// Only items the book brackets [Magical] live here; items bracketed
// [Special] (nonmagical alchemical/herbal preparations) are in
// equipment.ts under the "alchemical gear" category.
// The book prints no weights for these items, so none are recorded here.
// Prices, caster levels, and creation DCs are exactly as printed;
// summaries are paraphrases of the book's effects.

const AH = "Alchemy & Herbalists";

export const ALCHEMY_HERBALISTS_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "bag-of-herbal-harvesting",
    name: "Bag of Herbal Harvesting",
    category: "wondrous-slotless",
    cost: "4,000 gp",
    summary: "Catalog entry [Erlcana/Wondrous: Magical]. Caster Level 9; no creation DC printed; Cost to Create 2,400 gp. A bag of holding type 2 variant that holds up to 12 different plant types in separate pockets, keeping harvested plants in stasis for 21 days.",
    source: `${AH}, p. 65`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "chartans-mysticswathe",
    name: "Chartan's Mysticswathe",
    category: "wondrous",
    cost: "120,000 gp",
    summary: "Catalog entry [Erlcana, Greater/Wondrous: Magical]. Caster Level 19; creation DC 38; Cost to Create 57,000 gp. A permanent greater swathe: permanent mage armor plus barkskin (+4 magical armor bonus and +3 natural armor bonus, stacking, only while no other armor is worn), permanent resist elements, immunity to entangle, and pass without trace. A club or quarterstaff held by the wearer gains shillelagh; the wearer can speak with plants once per day and can become a wall of thorns (as a 10th-level caster). Counts as occupying the robe/vestment slot.",
    source: `${AH}, p. 66`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "heating-plate",
    name: "Heating Plate",
    category: "wondrous-slotless",
    cost: "1,500 gp",
    summary: "Catalog entry [Wondrous: Magical] (Table 22: 'Heating Plates'). Caster Level 3; the book prints its creation DC literally as '##' (a typo in the source; no DC is given). An object left touching the plate for more than 1 round causes it to glow red hot, as heat metal; it cools again when the object is removed.",
    source: `${AH}, p. 75`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "laasics-athanor",
    name: "Laasic's Athanor",
    category: "wondrous-slotless",
    cost: "2,000 gp",
    summary: "Catalog entry [Wondrous: Magical]. Caster Level 7; no creation DC or Cost to Create printed. Prerequisites: Alchemy, Craft Wondrous Item, burning hands, fire shield, heat metal. A never-cooling flaming furnace, a 9-ft. pyramid with five ovens (2 Tiny, and 1 each of Small, Medium, and Large); a command word sets the heat.",
    source: `${AH}, p. 76`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "lash-of-saumar",
    name: "Lash of Saumar",
    category: "wondrous",
    cost: "400 gp",
    summary: "Catalog entry [Alchana/Wondrous: Magical]. Caster Level 8; no creation DC printed. A liquid-metal whip that deals lethal (rather than subdual) damage and damages creatures with less than a +3 armor bonus or +6 natural armor bonus; only its wielder can untangle it, and when idle it pours into a belt holster.",
    source: `${AH}, p. 76`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "loyals-feedbag",
    name: "Loyal's Feedbag",
    category: "wondrous-slotless",
    cost: "1,750 gp",
    summary: "Catalog entry [Erlcana/Wondrous: Magical]. Caster Level 6; no creation DC printed. Produces any one herbal feed once per 24 hours, and produces 1 lb. of normal mount feed every 8 hours.",
    source: `${AH}, p. 77`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "saraguns-potion-pendant",
    name: "Saragun's Potion Pendant",
    category: "wondrous",
    cost: "2,000 gp",
    summary: "Catalog entry [Wondrous: Magical] (the entry heading reads 'Saragun's Pendant'; the tables call it Saragun's Potion Pendant). Caster Level 8; no creation DC printed. Stores up to 8 potions, elixirs, erlixirs, or other ingestibles extradimensionally; touching the pendant and whispering the stored item's name lets the wearer drink a full dose from the neck of the pendant.",
    source: `${AH}, p. 83`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "saraguns-temperant-bottle",
    name: "Saragun's Temperant Bottle",
    category: "wondrous-slotless",
    cost: "28,000 gp",
    summary: "Catalog entry [Alchana/Wondrous: Magical]. Caster Level 14; no creation DC printed. Produces one dose of temperant paste every 48 hours, or a minor or lesser temperant bath once a month; it can produce at most 1 gallon of temperant liquid per day.",
    source: `${AH}, p. 83`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "steelscrolls",
    name: "Steelscrolls",
    category: "scroll",
    cost: "(Normal scroll cost) x2 + 100 gp",
    summary: "Catalog entry [Alchana/Scroll: Special/Magical] — filed with the magic items because it is a reusable arcane scroll (see the report). Caster Level 3; creation DC 17; Cost to Create 50 gp per steelscroll (without spells). Each steelscroll can be used 2d3 times (-1 use per spell level above 4th) to cast the single spell enscribed on it; only arcane spells can be enscribed, a scroll's spell can be read only once in any 12-hour period, and enchanting or scribing a steelscroll costs double normal scroll prices.",
    source: `${AH}, p. 85`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "swatharness",
    name: "Swatharness",
    category: "wondrous",
    cost: "3,000 gp",
    summary: "Catalog entry [Swathe/Wondrous: Magical]. Caster Level 10; no creation DC printed. A leather harness bonded with a lesser swathe of holly and briar roses; it adds a +2 natural armor bonus over whatever armor it is worn over — effectively a portable defenswathe that is not bonded to any one suit of armor.",
    source: `${AH}, p. 85`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "swathold",
    name: "Swathold",
    category: "wondrous-slotless",
    cost: "7,500 gp",
    summary: "Catalog entry [Erlcana/Wondrous: Magical]. Caster Level 10; no creation DC printed. Acts as a bag of holding that a greater swathe can enter and exit while the swathold is open; conditions inside keep the swathe alive (magical sunlight, water, and loam/earth), and one hour a day inside provides the swathe's necessary sustenance for the day.",
    source: `${AH}, p. 85`,
    sourceUrl: "",
    ruleset: "core",
  },
  {
    id: "teas-of-the-emperor",
    name: "Teas of the Emperor",
    category: "wondrous-slotless",
    cost: "40,500 gp per tea box",
    summary: "Catalog entry [Erlcana/Wondrous: Magical]. Caster Level 10; creation DC 21; Cost to Create 800 gp per pound of tea leaves + spells cast, per tea box. One record covering five teas, each in its own enchanted tea box: a full box brews 20 cups, the pourer speaks the command word while pouring, each tea's effect is usable 5 times per day, and refilling a box requires a Profession (Herbalist) check (DC 21) and costs one-tenth of the market value in rare tea leaves. Tea of Strength (ornate silver box): cure light wounds, magic fang, true strike. Tea of Courage (ornate gold box): bless, mage armor, remove fear. Tea of Cunning (carved ivory box): change self, charm person, hypnotism. Tea of Wisdom (carved stone box): command, message, unseen servant. Tea of Woe (carved bone box): bane, cause fear, inflict light wounds.",
    source: `${AH}, p. 86`,
    sourceUrl: "",
    ruleset: "core",
  },
];
