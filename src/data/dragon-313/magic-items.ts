import type { MagicItemDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #313 pack (library-staging/packs/dragon-magazine/issue-313)
// The issue's seven magic items, all from "Eye Wares: Beholders"
// (pp. 54–56): the eye tyrant's lens, the dimensional pocket, four
// ocular gems, and the suspension sphere. Transcribed from the
// magazine text on archive.org (DragonMagazine313_djvu.txt).
// Summaries are mechanical paraphrases in our own words; no
// magazine prose is reproduced.
//
// There is no equipment-draft.ts for this issue: the article's orb
// armor is a pricing rule (standard armor traits at four times the
// price and twice the weight), not an item, and is written up in
// reference.md.
//
// Notes (flagged in MANIFEST.md):
//   * Ocular gems grant a beholder an eye-ray-like supernatural
//     ability when seated in the socket of a retracted eyestalk
//     (range 150 ft. unless otherwise specified; only beholders can
//     use them; up to ten are possible by retracting all eyestalks).
//     That shared framing rides in each gem's summary. A ghostly
//     white ray for the mind fog gem, a sickly greenish-brown ray
//     for the poison gem, a black ray for the ray of exhaustion gem.
//   * The mind fog gem's price prints as "63,000." without a unit;
//     it is carried as gp. The ray of exhaustion gem's price appears
//     in the magazine OCR as "£1,000 gp" and is read as 21,000 gp.
//   * The dimensional pocket collides with the Complete Psionic
//     power of the same name in the catalog and is suffixed -313.
//     In APOC the item's extra-dimensional space is dead — see
//     SCREENING.md; the record stands as published.

const DM313 = "Dragon Magazine #313";
const DM313_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine313_djvu.txt";

export const DRAGON_313_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "eye-tyrants-lens",
    name: "Eye Tyrant's Lens",
    category: "wondrous item",
    cost: "7,000 gp (standard) or 14,000 gp (fitted)",
    summary: "A 3-foot-wide glass lens in a stand. As a free action, a beholder lifts it with its telekinesis ray, holds it over any eyestalk, and discharges a single eye ray through it: that ray's save DC increases by +2 and its range doubles. A smaller fitted version caps a single eyestalk (a beholder could wear one per stalk) at twice the price. Moderate transmutation; CL 9th; Craft Wondrous Item, wall of force.",
    source: DM313,
    sourceUrl: DM313_PATH,
    ruleset: "core",
  },
  {
    id: "dimensional-pocket-313",
    name: "Dimensional Pocket",
    category: "wondrous item",
    cost: "9,000 gp",
    summary: "In essence a bag of holding in pocket form. Pressed against any surface (fabric, skin, bone) and spoken to with its command word, it adheres; only speaking the word again (or the wearer's death) removes it. Attached, it is invisible — see invisibility and true seeing reveal it, and detect magic reveals its aura but not the auras of its contents while it is closed — and the wearer always knows its location and reaches into it unerringly. It holds up to 1,000 pounds in 150 cubic feet, and its mouth expands to fit items up to 1 foot across. Contact with its space can be suppressed by a targeted dispel magic or an antimagic effect. Moderate conjuration; CL 9th; Craft Wondrous Item, Leomund's secret chest.",
    source: DM313,
    sourceUrl: DM313_PATH,
    ruleset: "core",
  },
  {
    id: "ocular-gem-mind-fog",
    name: "Ocular Gem (Mind Fog)",
    category: "wondrous item",
    cost: "63,000 gp",
    summary: "A fist-sized gem seated in the socket of a retracted eyestalk grants the beholder an eye-ray-like supernatural ability (range 150 ft.; only beholders can use ocular gems). This gem fires a ghostly white ray: the target must make a DC 17 Will save or be affected as by a mind fog spell. Faint enchantment; CL 9th; Craft Wondrous Item, mind fog.",
    source: DM313,
    sourceUrl: DM313_PATH,
    ruleset: "core",
  },
  {
    id: "ocular-gem-poison",
    name: "Ocular Gem (Poison)",
    category: "wondrous item",
    cost: "39,200 gp",
    summary: "A fist-sized gem seated in the socket of a retracted eyestalk grants the beholder an eye-ray-like supernatural ability (range 150 ft.; only beholders can use ocular gems). This gem fires a sickly greenish-brown ray delivering an effect identical to the poison spell (Fortitude DC 16). Faint necromancy; CL 7th; Craft Wondrous Item, poison.",
    source: DM313,
    sourceUrl: DM313_PATH,
    ruleset: "core",
  },
  {
    id: "ocular-gem-ray-of-exhaustion",
    name: "Ocular Gem (Ray of Exhaustion)",
    category: "wondrous item",
    cost: "21,000 gp",
    summary: "A fist-sized gem seated in the socket of a retracted eyestalk grants the beholder an eye-ray-like supernatural ability (range 150 ft.; only beholders can use ocular gems). This gem fires a black ray with the effect of a ray of exhaustion spell (Fortitude DC 14). Faint necromancy; CL 5th; Craft Wondrous Item, ray of exhaustion.",
    source: DM313,
    sourceUrl: DM313_PATH,
    ruleset: "core",
  },
  {
    id: "ocular-gem-stone-to-flesh",
    name: "Ocular Gem (Stone to Flesh)",
    category: "wondrous item",
    cost: "92,400 gp",
    summary: "A fist-sized gem seated in the socket of a retracted eyestalk grants the beholder an eye-ray-like supernatural ability (range 150 ft.; only beholders can use ocular gems). This gem fires a ray with the effect of a stone to flesh spell (Fortitude DC 19). Moderate transmutation; CL 11th; Craft Wondrous Item, stone to flesh.",
    source: DM313,
    sourceUrl: DM313_PATH,
    ruleset: "core",
  },
  {
    id: "suspension-sphere",
    name: "Suspension Sphere",
    category: "wondrous item",
    cost: "1,500 gp",
    summary: "A 6-inch glass globe holding suspended energy — acid, cold, fire, or electricity. It bursts on impact, dealing 10d6 points of damage of its energy type in a 30-foot-radius spread (Reflex DC 15 half). Any creature can throw one; beholders fling them with telekinesis. Moderate evocation; CL 10th; Craft Wondrous Item, acid fog, cone of cold, fireball, or lightning bolt as appropriate to the energy held.",
    source: DM313,
    sourceUrl: DM313_PATH,
    ruleset: "core",
  },
];
