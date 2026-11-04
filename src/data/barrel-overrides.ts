import type { EquipmentItem } from "@/engine/types";

/**
 * Barrel-level overrides for the item barrels (src/data/index.ts),
 * keeping ALL_EQUIPMENT strictly non-magic and ALL_MAGIC_ITEMS
 * strictly magic (Shaun, 2026-11-04: magic items in the Magic
 * Items step, non-magic items in the Equipment step), plus two
 * category corrections applied at barrel level so the source
 * packs stay untouched.
 */

/**
 * Plainly NON-magic records that sat in the magic barrel, converted
 * back into equipment (notes = the magic record's summary verbatim;
 * printed weight appended where the summary did not state it —
 * Dungeon Master's Guide specific armor/weapons whose own text
 * calls them nonmagical or masterwork material items: the SRD
 * files Elven Chain under "Specific Armor" while stating outright
 * that it is nonmagical mithral chainmail).
 */
export const EQUIPMENT_FROM_MAGIC: EquipmentItem[] = [
  {
    "id": "elven-chain",
    "name": "Elven Chain",
    "category": "armor",
    "cost": "4,150 gp",
    "weight": "20 lb.",
    "notes": "Nonmagical chainmail of very fine mithral links, light enough to count as light armor: maximum Dexterity bonus +4, armor check penalty -2, arcane spell failure chance 20%, weight 20 pounds.",
    "acBonus": 5,
    "source": "Dungeon Master's Guide — Specific Armor",
    "sourceUrl": "https://www.d20srd.org/srd/magicItems/magicArmor.htm",
    "ruleset": "core"
  },
  {
    "id": "silver-dagger-masterwork",
    "name": "Silver Dagger, Masterwork",
    "category": "weapon",
    "cost": "322 gp",
    "weight": "1 lb.",
    "notes": "A masterwork dagger of alchemical silver (damage reduced by one step, as for all alchemical silver weapons). Weight: 1 lb.",
    "source": "d20SRD — Magic Items: Specific Weapons",
    "sourceUrl": "https://www.d20srd.org/srd/magicItems/magicWeapons.htm",
    "ruleset": "core"
  },
  {
    "id": "cold-iron-longsword-masterwork",
    "name": "Cold Iron Longsword, Masterwork",
    "category": "weapon",
    "cost": "330 gp",
    "weight": "4 lb.",
    "notes": "A masterwork longsword of cold iron, effective against fey and demons. Weight: 4 lb.",
    "source": "d20SRD — Magic Items: Specific Weapons",
    "sourceUrl": "https://www.d20srd.org/srd/magicItems/magicWeapons.htm",
    "ruleset": "core"
  },
  {
    "id": "adamantine-dagger",
    "name": "Adamantine Dagger",
    "category": "weapon",
    "cost": "3,002 gp",
    "weight": "1 lb.",
    "notes": "A dagger of adamantine (counts as masterwork; hardness 20; ignores hardness of less than 20 when used to sunder). Weight: 1 lb.",
    "source": "d20SRD — Magic Items: Specific Weapons",
    "sourceUrl": "https://www.d20srd.org/srd/magicItems/magicWeapons.htm",
    "ruleset": "core"
  },
  {
    "id": "adamantine-battleaxe",
    "name": "Adamantine Battleaxe",
    "category": "weapon",
    "cost": "3,010 gp",
    "weight": "6 lb.",
    "notes": "A battleaxe of adamantine (counts as masterwork; hardness 20; ignores hardness of less than 20 when used to sunder). Weight: 6 lb.",
    "source": "d20SRD — Magic Items: Specific Weapons",
    "sourceUrl": "https://www.d20srd.org/srd/magicItems/magicWeapons.htm",
    "ruleset": "core"
  }
];

/**
 * Ids removed from ALL_MAGIC_ITEMS by the reverse sweep: the five
 * EQUIPMENT_FROM_MAGIC conversions above, plus five special-
 * material items that exist in both barrels whose magic-barrel
 * summaries literally say "Nonmagical" — the fuller equipment
 * records (adamantine / dragonhide / darkwood construction) win.
 */
export const MAGIC_IDS_MOVED_TO_EQUIPMENT: string[] = [
  "adamantine-breastplate",
  "dragonhide-plate",
  "dwarven-plate",
  "darkwood-buckler",
  "mithral-heavy-shield",
  "elven-chain",
  "silver-dagger-masterwork",
  "cold-iron-longsword-masterwork",
  "adamantine-dagger",
  "adamantine-battleaxe",
];

/**
 * Magic-barrel records superseded by a fuller record in
 * relocated-magic-items-2.ts under a different id:
 * "bladed-crossbow" — the condensed Magic Item Compendium +1
 * bladed crossbow; the fuller conversion lives there as
 * "bladed-crossbow-mic" (the id the mundane crossbow's own notes
 * point to), and the plain id stays with the mundane Dragon
 * Magazine crossbow in Equipment.
 */
export const SUPERSEDED_MAGIC_IDS: string[] = [
  "bladed-crossbow",
];

/**
 * Id renames applied to ALL_MAGIC_ITEMS at barrel level, where two
 * DIFFERENT items share one id across the barrels:
 * "wand-sheath" — the mundane wand sheath (Ultimate Equipment
 * Guide 2) keeps the plain id in Equipment; the Eberron warforged
 * wand sheath component (a magic item) is renamed so both exist
 * exactly once.
 */
export const MAGIC_ID_RENAMES: Record<string, string> = {
  "wand-sheath": "wand-sheath-warforged",
};

/**
 * Category overrides applied to ALL_MAGIC_ITEMS at barrel level:
 * "minor-schema" — the Minor Schema (Magic of Eberron p. 122) was
 * filed under "scroll", but a schema is not a consumable scroll:
 * it is a reusable once-per-day spell-completion plate. Shaun
 * (2026-11-04) gave schemas their own Schemas section in the
 * Magic Items step, next to Scrolls and Wands. (The Spelljamming
 * ship helms and the Whelm spells/weapons are not schemas and are
 * untouched.)
 */
export const MAGIC_CATEGORY_OVERRIDES: Record<string, string> = {
  "minor-schema": "schema",
};

/**
 * Equipment copies of magic items that also exist in the magic
 * barrel with fuller text there (the rest of the 27 cross-barrel
 * duplicates; the fuller-equipment-text half was converted in
 * relocated-magic-items-2.ts instead). Filtered out of
 * ALL_EQUIPMENT so each item exists exactly once.
 */
export const DUPLICATE_EQUIPMENT_IDS: string[] = [
  "exoskeleton-armor",
  "ghoul-shell-armor",
  "ghost-net",
  "rod-of-surprises",
  "spectral-dagger",
  "swordbow-great",
  "swordbow-light",
  "tentacle-rod",
  "tentacle-rod-greater",
  "the-fist",
];

/**
 * Wearable helmets that were scattered through Equipment's Armor,
 * Adventuring Gear, and Weapons sections. Shaun (2026-11-04):
 * helmets get their own category. src/data/index.ts remaps these
 * ids to the "helmet" category in ALL_EQUIPMENT, where they render
 * as the Helmets section. All are mundane; magic helmets live in
 * the Magic Items step's own Helmets section (wondrous-head items
 * with "helm" in the name, split at render time in
 * step-equipment.tsx). "armet" is included beyond the original
 * name scan — an armet IS a close helmet; the scan missed it
 * because its name contains no "helm".
 */
export const HELMET_EQUIPMENT_IDS: string[] = [
  "barrel-helmet-great-helm",
  "war-helmet",
  "mirrored-helm",
  "aelfhelm",
  "piecemeal-helmet",
  "helm-pot",
  "helmet",
  "middle-eastern-helmet",
  "thieving-helmet",
  "helmet-lantern",
  "helmet-listening",
  "horned-helmet",
  "spiked-helmet",
  "armet",
];

/**
 * Alchemical substances that were still filed under Adventuring
 * Gear, remapped to the "alchemical gear" category in
 * ALL_EQUIPMENT. Source-anchored only (the 2026-11-03 Food &
 * Drink precedent): a record moves only when its own source/table
 * is an alchemical table or the item is a canonical alchemical
 * substance — Shaun's compiled Alchemical_stuff.docx (every table
 * except its own "Tools, Devices and Kits" table), Liber
 * Mechanika's alchemical supplies table (p. 57), the Book of Vile
 * Darkness drugs and poisons, the Frostburn / Sandstorm /
 * Complete Adventurer / Complete Scoundrel / Races alchemical
 * tables, the SRD canonical alchemical items (acid, alchemist's
 * fire, holy water, smokestick, sunrod, tanglefoot bag,
 * tindertwig), and named alchemical items from other books.
 * NOT moved: tools, devices and kits, containers, capsule
 * retainers, clerical implements (aspergillum, censer, fonts),
 * spell and metamagic components (Unearthed Arcana Table 5-2,
 * Complete Champion power components), special materials,
 * firearms ammunition and powder (it stays in Adventuring Gear /
 * Ammunition), vehicles, saddles, and clothing.
 */
export const ALCHEMICAL_GEAR_IDS: string[] = [
  "acid-flask",
  "acid-standard-lm",
  "acidic-fire",
  "agony-liquid-pain",
  "air-crystals",
  "alchemical-cement",
  "alchemical-coal-blinding-cinders",
  "alchemical-coal-choking-smoke",
  "alchemical-glue",
  "alchemical-glue-accelerant",
  "alchemical-preserves",
  "alchemical-solvent",
  "alchemical-tooth",
  "alchemist-s-fire",
  "alchemists-frost",
  "alchemists-kindness",
  "alchemists-spark",
  "alkali-flask",
  "alkali-salt",
  "all-night",
  "ambrosia",
  "ansleighs-wound-seal",
  "antiplaque",
  "antitoxin-capsule",
  "antitoxin-standard-lm",
  "antitoxin-vial",
  "armor-insulation",
  "armor-lubricant",
  "armorbright",
  "auran-mask",
  "baccaran",
  "balelight",
  "balor-bile",
  "barbarian-chew",
  "baron-voratchiks-clawed-grip",
  "basilisk-breath",
  "beast-lure",
  "beast-scent",
  "bebilith-venom",
  "belladonna",
  "bile-brew",
  "bitterleaf-oil",
  "black-fester",
  "blackeye",
  "blackroot-balm",
  "blade-guard",
  "blade-resins",
  "blasphemix",
  "blasting-pellets",
  "blasting-powder",
  "blend-cream",
  "blight-burn-paste",
  "blister-oil",
  "blood-block",
  "blood-polyp-draught",
  "blood-polyp-incense",
  "body-balm",
  "bone-stripper",
  "brewed-reek",
  "brimstone-sulfur",
  "burning-angel-wing-fumes",
  "burning-powder",
  "buzzard-beetle-tenderizer",
  "caltrops-crystal",
  "candle-bright",
  "candle-cold",
  "candle-self-lighting",
  "cane-leech-repellant-jelly",
  "cane-leech-repellant-liquid",
  "capsule-retainer",
  "carrocks-sure-fire-etcher",
  "carvalos-wound-cleanser",
  "catstink",
  "chain-breaker",
  "chilblain-brain-juice",
  "clay-backfire",
  "clear-ear",
  "clear-mind",
  "clearwater-tablet",
  "cold-iron",
  "colossal-centipede-poison",
  "colossal-scorpion-poison",
  "colossal-spider-venom",
  "corbens-essential-elixir",
  "corbens-healing-elixir",
  "corbens-invigorating-elixir",
  "corbens-wound-closer",
  "crackle-powder",
  "cream-chill",
  "crypt-spider-acid",
  "cure-all-cream",
  "darkwood-reagent",
  "daystrider-capsule",
  "deep-draught",
  "defoliant",
  "deodorizing-agent",
  "devilseye",
  "devilweed",
  "dimmer-dust",
  "dire-troll-antitoxin",
  "ditherbomb-strong",
  "ditherbomb-weak",
  "ditherbomb-wyrm",
  "doc-petroks-rejuvenator",
  "dragon-bile",
  "drow-poison",
  "dust-of-dizziness",
  "dye-marker",
  "earrings-of-fire",
  "ectoplasmic-stabilizer",
  "elemental-breath",
  "elemental-flux-flask",
  "elemental-rime",
  "embalming-fluid",
  "embalming-fluid-lm",
  "endurance-elixir",
  "exalted-incense",
  "eyeblast",
  "fareye-oil",
  "feather-powder",
  "ferrous-aqua",
  "festering-bomb",
  "flame-ward",
  "flash-freeze",
  "flash-pellet",
  "flayleaf",
  "flesh-gem-decorative",
  "flesh-gem-spiked",
  "foam-impact",
  "focusing-candle",
  "forgers-paper",
  "freeglide",
  "freeze-powder",
  "frostbite-salve",
  "fungal-stun-vial",
  "fury-drops",
  "gargantuan-centipede-poison",
  "gargantuan-scorpion-poison",
  "gargantuan-spider-venom",
  "garlic",
  "gel-fire-ward",
  "gel-frost-ward",
  "gel-phosphorescent",
  "ghost-grenade",
  "ghostblight",
  "glue-water-soluble",
  "gold",
  "goodbye-kiss",
  "gorgons-hair",
  "grease-alchemical",
  "green-air-bramble",
  "hawks-ointment",
  "healers-balm",
  "healy-myrrh",
  "heartberry-essence",
  "hearthfire",
  "hobgoblin-war-draught",
  "holly",
  "holly-and-mistletoe",
  "holy-water",
  "holy-water-bag-1",
  "hot-grease",
  "hounds-blood",
  "huge-centipede-poison",
  "huge-scorpion-poison",
  "huge-spider-venom",
  "ice-chalk",
  "ice-toad-bile",
  "icegaunt-dust",
  "ifrits-blood",
  "incense-10-sticks",
  "incense-scent-bane",
  "ink-glowing",
  "ink-invisible-average",
  "ink-invisible-good",
  "ink-invisible-simple",
  "ink-invisible-superior",
  "instant-campfire",
  "ironman-capsule",
  "ironthorn-extract",
  "ishentav-bovd",
  "ivonas-bonding-resin",
  "jade-water",
  "jelling-compounds",
  "keenear-powder",
  "keepcool-salve",
  "large-centipede-poison",
  "large-scorpion-poison",
  "large-spider-venom",
  "leap-capsule",
  "leatherskin",
  "leaves-golden-maple",
  "lemax-spittle",
  "lichen-camouflage",
  "lifebane",
  "liniment-of-insulation",
  "liquid-ice",
  "liquid-sunlight",
  "lockslip-grease",
  "luhix",
  "magnesium",
  "medium-centipede-poison",
  "medium-scorpion-poison",
  "medium-spider-venom",
  "mellow-root",
  "melt-powder",
  "midnight-iris-perfume",
  "mist-of-nourn",
  "mist-piercer",
  "mistletoe",
  "moon-dew",
  "mordayn-vapor",
  "morrows-hand-oil",
  "mufflefoot",
  "mushroom-powder",
  "musk-harpy",
  "musk-wild",
  "muting-mist",
  "myrrh",
  "natures-draught",
  "nerv",
  "noxious-aromatic",
  "noxious-smokestick",
  "oil-anointing",
  "oil-kerosene",
  "oil-lamp",
  "oil-quick-freeze",
  "oil-stink",
  "oil-wing",
  "ointment-armor",
  "ooze-grease",
  "ooze-petrified",
  "paste-black-fingers-1-dose",
  "paste-bone-1-sq-ft-or-20-small-applications",
  "paste-mending",
  "paste-paper-wall",
  "paste-shrieking",
  "peptus-salix",
  "phosphorus",
  "plaster-casting",
  "poison-grenade",
  "poison-tattoo",
  "polar-skin",
  "poppy-tears",
  "powder-black",
  "powder-flash",
  "powder-foaming",
  "powder-insomnia",
  "powder-itching",
  "powder-normal",
  "powder-rusting",
  "powder-sneezing",
  "powdered-silver",
  "quickflame",
  "quickfrost",
  "quicksilver",
  "quicksilver-capsule",
  "quicksilver-tonic",
  "quickspark",
  "razor-ice-powder",
  "realgar",
  "redflower-leaves",
  "repellent-vermin",
  "rust-cube",
  "salt",
  "saltpeter",
  "salve-stone-chipper",
  "salvo",
  "samberine",
  "sannish",
  "sasson-juice",
  "scent-cloak",
  "scent-powder",
  "scoriks-soother",
  "screaming-flask",
  "shadow-cloy-flask",
  "shapesand",
  "sharpsalve",
  "silver",
  "silver-sheen",
  "sirens-breath",
  "sleep-gas",
  "slow-death",
  "slumber-sand",
  "small-centipede-poison",
  "small-scorpion-poison",
  "small-spider-venom",
  "smelling-salts",
  "smoke-pellet",
  "smoke-pellet-pepper",
  "smoke-pellet-smog",
  "smokestack",
  "smokestick",
  "snow-spider-blood",
  "snowflake-lichen-powder",
  "softfoot",
  "solovins-seal",
  "soothe-syrup",
  "soul-stimulant",
  "sparkpowder",
  "spiderlily-essence",
  "spirit-of-wine",
  "stability-capsule",
  "still-gut",
  "stinging-dust",
  "strongarm-capsule",
  "sufferfume",
  "sunrod",
  "sunshade-lotion",
  "suregrip",
  "swiftstride-capsule",
  "talcum-powder-globe",
  "tangle-foot-bag",
  "tanglefoot-bag",
  "tar-bomb",
  "tatzylwurm-antitoxin",
  "tea-meditation",
  "tea-night",
  "tearjerker",
  "terran-brandy",
  "terrap-sap-distilled",
  "thunderstone",
  "tinder-twig",
  "tindertwig",
  "tiny-centipede-poison",
  "tiny-scorpion-poison",
  "tiny-spider-venom",
  "tobacco",
  "tonic-blight",
  "tonic-twitch",
  "torch-ever-burning",
  "toxic-tooth",
  "tracer-oil",
  "triple-weapon-capsule-retainer",
  "troll-antitoxin",
  "troll-oil",
  "troll-styptic",
  "unguent-fiend-gore",
  "unguent-of-revivification-1-dose",
  "unstable-accelerant",
  "urea",
  "urthanyk",
  "vilestar",
  "vitriol-green",
  "vitus-flask",
  "vodare",
  "water-chaotic",
  "water-lawful",
  "weapon-blanch-adamantine",
  "weapon-blanch-cold-iron",
  "weapon-blanch-ghost-salt",
  "weapon-blanch-silver",
  "weapon-capsule-retainer",
  "weeping-flask",
  "weeping-stone",
  "whale-grease",
  "white-pudding-essence",
  "wild-dwarf-knockout-poison",
  "wolfs-bane",
  "woolly-mammoth-eye-juice",
  "wound-weal",
  "yeti-oil",
  "zealots-blade",
];
