// Dragon Magazine #325 (November 2004) — magic item draft: 21 items.
// Blocks: "The Magic Shop: Artifacts of the Pharaohs" (14 items, pp. 74-76) and
// "Silicon Sorcery: Dungeon Siege" (3 synergistic spellbooks, pp. 30-31), the latter staged
// as minor artifacts in the catalog's relics convention: category "artifact", cost "—",
// summary beginning "Artifact (wondrous item): " and carrying aura, CL, and weight.
// Summaries carry aura/CL/creation lines and weight in the house style of recent packs.
// A third block was added 2026-11-11 at Shaun's order: the four "Class Acts: Monk Magic
// Items" (p. 98), originally HELD as oriental-themed material, integrated under the
// Southie-reflavor precedent from #319 — street names and flavor, mechanics exactly as
// printed, each summary naming the printed original.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_SHOP = "Dragon Magazine #325 — The Magic Shop: Artifacts of the Pharaohs (Kevin Hamilton), pp. 74-76";
const SRC_BOOKS = "Dragon Magazine #325 — Silicon Sorcery: Dungeon Siege (Clifford Horowitz), pp. 30-31";
const SRC_CLASSACTS = "Dragon Magazine #325 — Class Acts: Monk Magic Items (Keith Strohm), p. 98 — Southie reflavor, mechanics as printed";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_SHOP,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_325_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- The Magic Shop: Artifacts of the Pharaohs ----
  M({
    id: "belt-of-the-camel",
    name: "Belt of the Camel",
    cost: "3,000 gp",
    summary:
      "A camel-hair belt decorated with turquoise and gold thread, blessed by the clerics of Isis, 1 lb.: it protects the wearer from extreme heat as per endure elements (but not from cold), and the wearer never becomes thirsty and never requires water for nourishment, although his need for food still exists. The belt must be worn for 24 hours before its powers take effect. Faint abjuration; CL 1st; Craft Wondrous Item, create water, endure elements.",
  }),
  M({
    id: "canopic-jars-of-the-guardians",
    name: "Canopic Jars of the Guardians",
    cost: "18,000 gp",
    summary:
      "A set of four embalming urns with baboon (lungs), jackal (stomach), human (liver), and falcon (intestines) lids, 2 lb. each: when the four jars are placed together and the sacred words are spoken by a cleric of good alignment (a full-round action that provokes an attack of opportunity), a guardian of Osiris rises to deliver divine justice — treat it as a mummy created as if by create undead, except that it is of lawful good alignment and lacks the despair ability. The guardian follows the commands of the cleric who raised it and exists for 3 hours or until destroyed. Usable once per day. Strong necromancy; CL 15th; Craft Wondrous Item, create undead.",
  }),
  M({
    id: "carrion-gauntlet",
    name: "Carrion Gauntlet",
    category: "weapon",
    cost: "32,300 gp",
    summary:
      "A +1 gauntlet made of bone, shards of carapace, and dried flesh, 1 lb.: the wearer can use it to cast vampiric touch at will as though cast by a 5th-level caster. Moderate necromancy; CL 5th; Craft Wondrous Item (as printed), vampiric touch.",
  }),
  M({
    id: "cartouche-of-imhotep",
    name: "Cartouche of Imhotep",
    cost: "5,000 gp",
    summary:
      "A carved ivory tablet hung on a plain iron chain: the wearer gains a +5 competence bonus on any Craft check. Faint transmutation; CL 3rd; Craft Wondrous Item, mending, Craft (any) 5 ranks; Weight \u2014.",
  }),
  M({
    id: "cloak-of-the-desert",
    name: "Cloak of the Desert",
    cost: "18,000 gp",
    summary:
      "A fine linen cloak dyed light brown: the wearer can wrap it around himself and merge with a mass of sand or sandstone large enough to encompass his body, as per meld into stone, for up to 1 hour per use, three times per day. Moderate transmutation; CL 6th; Craft Wondrous Item, meld into stone; Weight 1 lb.",
  }),
  M({
    id: "eye-of-horus",
    name: "Eye of Horus",
    cost: "13,200 gp",
    summary:
      "A single lens that melds into the flesh over one of the wearer's eyes (a full-round action to absorb it into the flesh or expel it; on the wearer's death it resurfaces, leaving an eye tattoo visible around it): the wearer can use detect evil at will as a standard action, and can call upon protection from evil, disguise self, and misdirection each once per day, only on himself. Faint divination; CL 3rd; Craft Wondrous Item, detect evil, disguise self, misdirection, protection from evil; Weight \u2014.",
  }),
  M({
    id: "keepers-guide",
    name: "Keeper's Guide",
    category: "ring",
    cost: "24,000 gp",
    summary:
      "A solid turquoise ring with a single lapis lazuli stone: the wearer finds traps as a rogue does and gains a +3 insight bonus on all Search checks to find traps. Moderate divination; CL 6th; Forge Ring, find traps; Weight 1 lb. (as printed).",
  }),
  M({
    id: "river-sandals",
    name: "River Sandals",
    cost: "47,000 gp",
    summary:
      "A pair of leather sandals, 1 lb.: the wearer leaves no footprints on any surface and cannot be tracked, as if affected by pass without trace (except that he can still be tracked by scent), and can walk across the surface of liquids as per water walk. Moderate transmutation; CL 5th; Craft Wondrous Item, water walk, pass without trace.",
  }),
  M({
    id: "robe-of-the-burning-serpent",
    name: "Robe of the Burning Serpent",
    cost: "40,000 gp",
    summary:
      "An ornately woven black robe with a silver snake motif, 1 lb.: once per day the wearer can change into a yuan-ti abomination as per the polymorph spell for 10 minutes. A wearer of good alignment takes 1d4+10 points of fire damage every round until the robe is removed; an evil wearer's serpents glow briefly, marking her as a true follower of Apep. Moderate transmutation; CL 10th; Craft Wondrous Item, polymorph, fire trap, creator must be of evil alignment.",
  }),
  M({
    id: "sand-of-set",
    name: "Sand of Set",
    cost: "4,200 gp",
    summary:
      "A small black bag of blessed sand holding enough for three uses: a handful tossed onto the ground within 5 feet causes 1d4+1 Medium vipers to appear, which follow the creator's mental commands for 7 rounds or until destroyed. Moderate conjuration; CL 7th; Craft Wondrous Item, summon nature's ally IV; Weight \u2014.",
  }),
  M({
    id: "scarab-charm",
    name: "Scarab Charm",
    cost: "300 gp",
    summary:
      "A turquoise scarab thrown as a weapon (range increment 10 feet) against a creature or a 5-foot square: on impact it creates a scarab beetle swarm (use the locust swarm entry) that attacks the target closest to the point of impact — the thrower chooses among tied targets — and remains for 3 rounds or until dispersed. The charm is destroyed once used. Faint conjuration; CL 3rd; Craft Wondrous Item, summon swarm; Weight \u2014.",
  }),
  M({
    id: "scorpion-bracers",
    name: "Scorpion Bracers",
    cost: "3,000 gp",
    summary:
      "A pair of copper bracers, 1 lb.: the wearer receives a +5 resistance bonus on Fortitude saves against all poisons. Moderate abjuration; CL 10th; Craft Wondrous Item, resistance.",
  }),
  M({
    id: "tiara-of-bast",
    name: "Tiara of Bast",
    cost: "8,000 gp",
    summary:
      "A golden headband decorated with topaz cats: a wearer of good alignment can speak with any feline animal as if she had cast speak with animals, and once per day may influence a feline animal as per charm animal. Faint enchantment; CL 3rd; Craft Wondrous Item, charm animal, speak with animals; Weight \u2014.",
  }),
  M({
    id: "vestment-of-judgment",
    name: "Vestment of Judgment",
    cost: "95,000 gp",
    summary:
      "A full-body garment of light linen and golden thread, 1 lb.: after a person of good alignment wears it for thirty days, she can use it to cast true resurrection once per month. A person of evil alignment who dons it must make a DC 16 Fortitude save each round or contract mummy rot. Strong conjuration; CL 17th; Create Wondrous Item (as printed), true resurrection, contagion, creator must be of good alignment.",
  }),
  // ---- Silicon Sorcery: the three synergistic spellbooks (minor artifacts) ----
  M({
    id: "book-of-elemental-attunement",
    name: "Book of Elemental Attunement",
    category: "artifact",
    cost: "\u2014",
    source: SRC_BOOKS,
    summary:
      "Artifact (wondrous item): a unique minor artifact and one of the synergistic spellbooks (see the pack reference for the shared rules). Its crackling vellum contains all sorcerer/wizard spells with the air, earth, fire, or water descriptors, and its telepathic treatises on the elemental planes grant its carrier a +6 insight bonus on Knowledge (the planes) checks regarding elementals or the elemental planes at all times, whether or not spells are prepared from it. The first wizard to prepare spells from it in each 24-hour period gains abilities by total spell levels prepared (0-level spells do not count), lasting 24 hours or until expended: 5\u201313 a swim speed equal to his base land speed; 14\u201324 pyrotechnics (3/day); 25\u201338 fly (3/day); 39\u201359 wind wall (3/day); 60\u201381 stone shape (3/day); 82\u2013112 fire shield (3/day); 113\u2013141 wall of stone (3/day); 142+ control water (3/day). Higher totals include all lower-tier abilities, which diminish as the prepared spells are cast; the spell-like abilities are usable at the book's caster level. Overwhelming (all schools) [air, earth, fire, water]; CL 21st; Weight 15 lb.",
  }),
  M({
    id: "book-of-the-robust",
    name: "Book of the Robust",
    category: "artifact",
    cost: "\u2014",
    source: SRC_BOOKS,
    summary:
      "Artifact (wondrous item): a unique minor artifact and one of the synergistic spellbooks (see the pack reference for the shared rules). It holds every sorcerer/wizard necromancy spell without the death, evil, or fear descriptor, plus all sorcerer/wizard spells with the good or light descriptors. The first wizard to prepare spells from it in each 24-hour period gains vigor by total spell levels prepared (0-level spells do not count): 14\u201324 5 temporary hit points; 25\u201338 10 temporary hit points and a +1 resistance bonus on Fortitude saves; 39\u201359 15 temporary hit points, +2 on Fortitude saves, and cure light wounds (1/day); 60\u201381 20 temporary hit points, +3, and cure moderate wounds (1/day); 82\u2013112 25 temporary hit points, +4, and cure serious wounds (1/day); 113+ 30 temporary hit points, +5, and cure critical wounds (1/day). The temporary hit points and bonuses are not cumulative — only the row for the total prepared applies — and last 24 hours or until removed by damage or expended. Strong conjuration; CL 18th; Weight 2 lb.",
  }),
  M({
    id: "book-of-warding",
    name: "Book of Warding",
    category: "artifact",
    cost: "\u2014",
    source: SRC_BOOKS,
    summary:
      "Artifact (wondrous item): a unique minor artifact and one of the synergistic spellbooks (see the pack reference for the shared rules). It contains every sorcerer/wizard abjuration spell and all divination (scrying) spells from the same list. Preparing spells from it surrounds the wizard with a shimmering, translucent force disk that grants a shield bonus and immunity to magic missiles; the first wizard to prepare from it in each 24-hour period gains, by total spell levels prepared (0-level spells do not count): 5\u201313 a +4 shield bonus and immunity to magic missiles; 14\u201324 +5; 25\u201338 +6; 39\u201359 +7; 60\u201381 +8; 82\u2013112 +9 and evasion (as a 2nd-level rogue); 113+ +10 and displacement (3/day). Higher totals include all lower-tier benefits, which diminish as the prepared spells are cast. Strong abjuration; CL 19th; Weight 4 lb.",
  }),
  // ---- Class Acts: Monk Magic Items (p. 98) — Southie reflavors, added 2026-11-11 at Shaun's order ----
  M({
    id: "hornetsting",
    name: "Hornetsting",
    category: "weapon",
    cost: "72,300 gp",
    source: SRC_CLASSACTS,
    summary:
      "A masterwork pronged dock spike, balanced and weighted in the sai's pattern, functioning as a +1 dancing returning sai, 1 lb. Loosed, it dances through the air and can also make ranged attacks as though thrown by its wielder against any opponent within 50 feet (normal ranged attack penalties apply); after attacking a distant opponent it returns to its wielder as per its returning special ability and continues dancing while the dancing duration remains. Strong transmutation; CL 15th; Craft Magic Arms and Armor, shield or shield of faith, telekinesis. (Southie reflavor of the printed Sai of the Hornet — mechanics as printed.)",
  }),
  M({
    id: "bands-of-the-iron-mastiff",
    name: "Bands of the Iron Mastiff",
    cost: "15,000 gp",
    source: SRC_CLASSACTS,
    summary:
      "Leather armbands adorned with six silver medallions stamped with mastiffs, 2 lb. While worn, they bestow a +2 bonus on initiative rolls and free use of the Deflect Arrows feat (both bands must be worn and one hand must be free). A wearer who already has Deflect Arrows may use it twice each round. Faint abjuration; CL 3rd; Craft Wondrous Item, entropic shield. (Southie reflavor of the printed Bands of the Iron Monkey — mechanics as printed.)",
  }),
  M({
    id: "steeplejacks-sash",
    name: "Steeplejack's Sash",
    cost: "48,000 gp",
    source: SRC_CLASSACTS,
    summary:
      "A long work sash of heavy silk, 1 lb. Any lawful wearer gains a +4 armor bonus to AC. In addition, a lawful neutral wearer with the unarmed strike ability or the Improved Unarmed Strike feat causes foes to suffer a 20% miss chance when making attacks against her; this miss chance is lost while the wearer is denied her Dexterity bonus to AC (leaving only the +4 armor bonus). Faint abjuration; CL 3rd; Craft Wondrous Item, mage armor, owl's wisdom. (Southie reflavor of the printed Obi of the White Lotus Master — mechanics as printed.)",
  }),
  M({
    id: "staff-of-the-crushing-gust",
    name: "Staff of the Crushing Gust",
    category: "weapon",
    cost: "18,000 gp",
    source: SRC_CLASSACTS,
    summary:
      "A +2 quarterstaff (a bamboo shaft wrapped in mithral chains), 4 lb., that grants its wielder the Improved Trip feat even if the wielder doesn't meet the prerequisites. Moderate evocation; CL 6th; Craft Magic Arms and Armor, gust of wind. (Southie reflavor of the printed Staff of the Crushing Breeze — mechanics as printed.)",
  }),
];
