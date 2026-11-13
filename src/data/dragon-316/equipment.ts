import type { EquipmentItem } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #316 pack (library-staging/packs/dragon-magazine/issue-316)
// The issue's twenty-nine equipment records, all from "Cloak and
// Dagger: Gear, Gadgets, and Gizmos for your Game" by Eric Cagle
// and Evan Michael Jackson (pp. 38–47): four alchemical items, six
// spy weapons, sixteen mundane tools and garments, and three
// prebuilt espionage kits (the Deceiver's Kit is one record with
// its three priced variants in the notes).
//
// PRICES: every price and weight below was verified against the
// printed Espionage Equipment and Espionage Weapons tables on the
// magazine's page images (archive.org scan), not the OCR text —
// the OCR misread several (it rendered the false scabbard at
// "15 sp" where print reads 15 gp, tracing dust at "80 gp" where
// print reads 20 gp, and the modular weapon's surcharge as
// illegible where print reads +150 gp). Print governs; see
// MANIFEST.md for the full list of OCR corrections.
//
// OVERLAPS (see MANIFEST.md): three of these items already exist
// in the catalog as fan-index pickings from this very article
// (src/data/core/new-equipment.json, cited "Dragon Magazine #316
// (fan index: crystalkeep.com d20 Equipment Index)") — disguised
// dagger, poison ring, and modular melee weapon. Per the program
// rule, the real extraction supersedes the fan-index records where
// they overlap and these records ship suffixed -316; both records
// stand. Three more items exist in the catalog from later books
// with different mechanics — Catstink and Listening Cone (Complete
// Adventurer) and the Keymaking Set (Goods and Gear stub) — and
// likewise stage suffixed -316 under the different-source
// precedent. The Collapsible Grappling Hook is footnoted in the
// magazine itself as reprinted from the Arms and Equipment Guide.
//
// Transcribed from the magazine text on archive.org
// (DragonMagazine316_djvu.txt) and the printed tables. Notes are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

const DM316 = "Dragon Magazine #316";
const DM316_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine316_djvu.txt";

export const DRAGON_316_EQUIPMENT: EquipmentItem[] = [
  // ---- Special substances and items (alchemical) ----
  {
    id: "catstink-316",
    name: "Catstink",
    category: "alchemical item",
    cost: "250 gp",
    weight: "—",
    notes: "Alchemical compound (not a feline product) spread on a trail to defeat pursuit by scent. A creature tracking by scent that crosses the dose must succeed on a DC 15 Survival check to regain the scent of any target it was pursuing before the exposure. Catstink does not impede any other use of the scent ability (such as detecting or pinpointing a hidden creature). Dragon #316 printing (p. 38).",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "slumberweed",
    name: "Slumberweed",
    category: "alchemical item",
    cost: "500 gp",
    weight: "—",
    notes: "Dried, ground leaves of a plant that induce a sleeplike state resembling death for 8 hours if ingested or inhaled. A successful DC 12 Fortitude save negates the sleep. Spies sometimes pack a dose into a hollow necklace that doubles as an impromptu blowgun usable only to deliver the powder, or ingest it themselves to feign death.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "spy-button",
    name: "Spy Button",
    category: "alchemical item",
    cost: "50 gp (flash), 30 gp (smoke), or 40 gp (thundering)",
    weight: "1/2 lb.",
    notes: "A button made to blend in with the clothing it is sewn onto. To use one, rip it free (no Strength check required) and throw it against a hard surface. Flash: a brilliant burst of light — a creature within 5 feet must succeed on a DC 15 Fortitude save or be dazzled for 1d3 rounds (sightless creatures are unaffected). Smoke: produces a cloud of impenetrable black smoke filling a 10-foot cube, dissipating in 2 rounds (1 round in moderate or stronger winds). Thundering: mimics the thunder effect of a thunderstorm as described in the Player's Handbook.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "tongueloose",
    name: "Tongueloose",
    category: "alchemical item",
    cost: "150 gp",
    weight: "—",
    notes: "A powder, usually dissolved in a drink or sprinkled over a meal. Ingesting it induces a lethargic state for 1d6 hours during which the subject is highly susceptible to suggestion; a successful DC 14 Fortitude save negates the effect. Anyone interacting with a subject who failed the save gains a +4 circumstance bonus on Bluff, Diplomacy, and Intimidate checks against that person.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  // ---- Espionage weapons ----
  {
    id: "disguised-dagger-316",
    name: "Disguised Dagger",
    category: "weapon",
    cost: "+50 gp",
    weight: "As base weapon",
    notes: "A dagger with a stiletto-like blade disguised to look like an ordinary object, such as a lady's hair comb or an ink pen. The wielder gains a +5 bonus on Sleight of Hand checks to conceal the weapon, in addition to the dagger's usual bonus. Damage, critical, and range as a standard dagger. The magazine prices this as a +50 gp modification to a dagger; the catalog's fan-index record of the same weapon (id disguised-dagger, cited to this article) priced it as a complete 52 gp weapon — this extraction supersedes it where they overlap. See MANIFEST.md.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "folding-bow",
    name: "Folding Bow",
    category: "weapon",
    cost: "+75 gp",
    weight: "As base weapon",
    notes: "A bow with a joint in the middle that lets it fold in half when unstrung, making it easier to conceal: a folded folding bow can be concealed with a Sleight of Hand check as if it were a small object. Only non-composite bows can be made into folding bows. Assembling or disassembling one is a standard action that provokes an attack of opportunity. Damage, critical, and range as the base bow.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "garrote-ring",
    name: "Garrote Ring",
    category: "weapon",
    cost: "50 gp",
    weight: "—",
    notes: "Light exotic weapon. The wearer of this large, ostentatious ring can detach the gem atop it and pull forth a length of extremely fine, tough wire used to strangle an opponent: damage (S) 1d6, (M) 1d8 per round of successful grappling, critical 18–20, slashing. Pulling out the wire is a free action; rewinding it requires a full-round action. Garrote attacks use the Garrote Attacks rules (reprinted from Song and Silence in the article's sidebar; see reference.md).",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "modular-weapon-316",
    name: "Modular Weapon",
    category: "weapon",
    cost: "+150 gp",
    weight: "As base weapon (each component weighs 1/5 of the total)",
    notes: "A weapon built from tiny, innocuous-looking components — two components per pound of the weapon's weight, each disguised as an article of clothing, jewelry, or another ordinary wearable object — that snap, twist, or screw together into a fully functioning weapon. Any simple or martial melee weapon weighing 5 pounds or less can be made modular, as can hand crossbows, darts, and slings. Recognizing the components for what they are requires a DC 20 Intelligence check, with a +1 bonus to the check for every two components the viewer can see. Assembling or disassembling takes 1 minute, plus 1 additional minute to redistribute the pieces into their disguised locations after disassembly; the weapon cannot be assembled if any components are missing. Whenever the wielder rolls a natural 1 on an attack roll with it, the weapon breaks and falls apart, dealing no damage for that attack. Damage, critical, and range as the base weapon.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "poison-ring-316",
    name: "Poison Ring",
    category: "weapon",
    cost: "45 gp",
    weight: "—",
    notes: "Light melee weapon: damage 1, critical 20, piercing. This large but stylish ring has a reservoir holding a single dose of poison (injury only). To deliver it, flip down a tiny hollow needle on the palm side of the ring and make a successful touch attack; the ring deals 1 point of damage plus the poison's normal effect. Locking the needle into place is a standard action (or a DC 15 Dexterity check to position it one-handed — failing by 5 or more pricks the wearer with her own needle). An observer can notice the protruding needle with a DC 30 Spot check, and out of combat the victim may need a DC 10 Wisdom check to recognize the source of the attack. Dragon #316 printing (p. 46); supersedes the catalog's fan-index record of the same weapon (id poison-ring) where they overlap. See MANIFEST.md.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "spring-dart-boots",
    name: "Spring Dart Boots",
    category: "weapon",
    cost: "65 gp",
    weight: "2 lb.",
    notes: "Light exotic weapon (pair). The oversized heel of each boot accommodates a small spring-loaded dart launcher equipped with a single dart: damage (S) 1d2, (M) 1d2, critical 20, range increment 10 ft., piercing. Because the dart deals only minimal damage, most users coat it with poison (purchased separately) or use the attack as a distraction.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  // ---- Mundane equipment ----
  {
    id: "climbing-boots",
    name: "Climbing Boots",
    category: "gear",
    cost: "25 gp",
    weight: "1 lb.",
    notes: "Sturdy, low-cut leather boots with small, broad blades built onto the insole and front, hidden until a latch springs them forth and locks them into place. The blades grant a +2 bonus on Climb checks made to climb wooden or stone surfaces, do not hinder movement, and are too short to deal damage in combat. Deploying or retracting the blades is a standard action. An observer needs a DC 15 Spot check to spot the blades while they are out, or a DC 20 Search check to notice anything unusual about the boots while they are retracted.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "collapsible-grappling-hook",
    name: "Collapsible Grappling Hook",
    category: "gear",
    cost: "3 gp",
    weight: "2 lb.",
    notes: "A small grappling hook with flat, retractable tines that fold out. Because it collapses to a small size when not in use, the DC of Search checks made to find it while it is folded and hidden among a person's garments increases by +4. (The magazine footnotes this item as first appearing in the Arms and Equipment Guide.)",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "cord-shirt",
    name: "Cord Shirt",
    category: "gear",
    cost: "20 gp",
    weight: "5 lb.",
    notes: "A long shirt made of a single piece of strong, flat silk cord, stitched together so that a tug in the right place unravels it into a 30-foot length of silk rope. Fully unraveling the shirt requires a full-round action, and it cannot be restitched afterward.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "drop-sheath",
    name: "Drop Sheath",
    category: "gear",
    cost: "600 gp",
    weight: "—",
    notes: "A sheath that affixes to the arm, concealing a light weapon in a sleeve and letting the wearer draw it quickly. It gives a +5 circumstance bonus on Sleight of Hand checks to conceal a light melee weapon, and the wearer can draw that weapon as a free action, as if he had the Quick Draw feat (for this weapon only, while it is sheathed in the drop sheath). Price as printed in the magazine's Espionage Equipment table (verified against the page image) — high for mundane gear, but that is the printed figure. See MANIFEST.md.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "false-scabbard",
    name: "False Scabbard",
    category: "gear",
    cost: "15 gp",
    weight: "1 lb.",
    notes: "A scabbard made longer than the blade it holds, with a secret compartment concealed in the extended space, serving the same purpose as hollow boots. A DC 20 Search check is required to reveal the hidden space.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "glass-cutting-ring",
    name: "Glass-Cutting Ring",
    category: "gear",
    cost: "500 gp",
    weight: "—",
    notes: "This ring appears to be a normal diamond ring, but the stone is attached to a special hinge that flips it in its setting, revealing a point that can cut panes of glass up to 1 inch thick for breaking and entering. Cutting a hole large enough for a Medium character to slip through takes 1 minute per quarter-inch of the glass's thickness. Price as printed (verified against the page image); the stone is a real diamond. See MANIFEST.md.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "hollow-boots",
    name: "Hollow Boots",
    category: "gear",
    cost: "15 gp",
    weight: "2 lb.",
    notes: "Boots whose swiveling heels contain hidden compartments in which small items — maps, documents, even small weapons such as a garrote — can be secretly carried into or out of restricted areas. Someone searching the wearer must succeed on a DC 24 Search check to discover the compartments. Also used as a dead drop between agents and handlers by way of a cutout shoemaker.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "infiltrators-outfit",
    name: "Infiltrator's Outfit",
    category: "gear",
    cost: "6 gp",
    weight: "2 lb.",
    notes: "A set of tight-fitting, matte-black clothing: a long-sleeved shirt, trousers with numerous pockets, soft black shoes, and a black face mask or scarf that can be wrapped around the head. It includes a cloth bandoleer that supports up to 5 pounds of equipment, with nonmetallic ties that secure items in a manner that minimizes noise.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "keymaking-set-316",
    name: "Keymaking Set",
    category: "gear",
    cost: "50 gp (masterwork 110 gp)",
    weight: "1 lb.",
    notes: "All the tools needed to make a working copy of a key in your possession, or of a key of which you have obtained an impression: two wax impression blocks, an assortment of small, incredibly sharp knives, blank keys, tiny files of all shapes, and polishing cloths of different coarseness. Using the set requires a successful DC 20 Open Lock check and 10 minutes of uninterrupted work; for every 5 points by which the check exceeds the DC, the copying takes 1 minute less. A masterwork keymaking set (110 gp) grants a +2 bonus on this check. Dragon #316 printing.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "listening-cone-316",
    name: "Listening Cone",
    category: "gear",
    cost: "10 gp",
    weight: "—",
    notes: "A simple cone, typically of brass or a similarly inexpensive metal. When used to listen at a door, wall, or similar obstacle, it grants a +5 bonus on Listen checks to hear through the obstruction; the user takes a -2 penalty on any other Listen checks made while listening at the door. The cone also protects the user from defenses that may not be visible to the naked eye, such as contact poison. Dragon #316 printing (p. 41).",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "smugglers-belt",
    name: "Smuggler's Belt",
    category: "gear",
    cost: "4 gp",
    weight: "—",
    notes: "A wide cloth belt used to hide small items beneath clothing. It can hold up to 1 pound of small items, such as papers, coins, or even a slender dagger. Anyone searching the wearer needs a successful DC 20 Search check to notice the belt's presence.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "spider-harness",
    name: "Spider",
    category: "gear",
    cost: "50 gp",
    weight: "3 lb.",
    notes: "Also known as a housebreaker's harness: a standard climbing harness that can be worn over light armor, with up to eight leather straps of varying length (generally up to 2 feet) with metal rings at their ends. Equipment can be hung from the straps for use while climbing, and ropes can be strung through one or more rings so the climber can ascend but not descend, letting her release the rope without fear of falling. Climbing spikes can also be hammered through the rings of two straps on either side of a window, giving extra leverage for a break-in or a vantage for observation. (Record name is the magazine's \"Spider\"; the id is lengthened to avoid confusion with the monster name.)",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "spider-wire",
    name: "Spider Wire",
    category: "gear",
    cost: "10 gp",
    weight: "—",
    notes: "Extremely fine wire sold on a spool in a 10-foot length, typically stretched low across a passageway to trip passers-by or up high to cut the neck of anyone who blunders into it. Securing each end of a length to a solid object takes a full-round action. Low-slung: a creature entering a rigged square must make a DC 15 Reflex save or trip; creatures with more than two legs receive a +4 bonus on this save, and a creature that moved at least 50 feet that round also takes 1d3 points of damage, plus 1d3 per 10 feet of movement beyond 50. Locating a trip wire takes a DC 15 Spot check under normal lighting. Neck-height: a creature entering the square must make a DC 15 Reflex save or take 1d6 points of damage, provided the wire is positioned at the correct height for its neck, plus 1d6 per 10 feet of movement beyond 30 feet; a creature one size category smaller than the intended target passes freely underneath, and a creature one or more size categories larger is affected as if by the trip wire version. Noticing a neck-height wire takes a DC 10 Spot check under normal lighting. The wire has hardness 2 and 2 hp, only slashing weapons can damage it, and its break DC is 16. It can also be used to make a garrote attack (see the Garrote Attacks rules in reference.md).",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "tracing-dust",
    name: "Tracing Dust",
    category: "gear",
    cost: "20 gp",
    weight: "—",
    notes: "A powder ordinarily invisible to the naked eye that adheres to anything it touches (or that touches it). When sprayed with its accompanying revealing agent, a chemical reaction turns the powder bright blue. Spies sprinkle it over items to track who has handled them: the dust sticks to a handler's hands and can be revealed by the agent. Sold in small jar-shaped containers with perforated lids that function like saltshakers; the price includes the revealing agent. (Price verified against the printed table; the magazine OCR reads 80 gp in error — see MANIFEST.md.)",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "tracing-vellum",
    name: "Tracing Vellum",
    category: "gear",
    cost: "10 gp",
    weight: "—",
    notes: "Finely crafted vellum so thin as to be almost transparent, sold in 1-foot square sheets and used to copy maps and other sensitive documents quickly. Placed over a map, book, or other writing, it lets the user trace the image with great precision: about 1 minute for a simple image, 10 minutes for one of moderate complexity, and 1 hour for a complicated drawing. Tracing vellum grants a +2 circumstance bonus on Forgery checks made to reproduce text, maps, or pictures. Price is per sheet.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "wax-impression-block",
    name: "Wax Impression Block",
    category: "gear",
    cost: "5 sp",
    weight: "1/2 lb.",
    notes: "A block of soft wax. When a key is pressed into it, a qualified craftsman can use the impression to make a working copy without having the actual key in hand — letting a spy carry a key's shape to a place of solitude instead of carrying a keymaking set. Two blocks are included in every keymaking set.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  // ---- Espionage kits ----
  {
    id: "deceivers-kit",
    name: "Deceiver's Kit",
    category: "gear",
    cost: "341 gp (artisan), 266 gp (commoner), or 501 gp (courtier)",
    weight: "13 lb. (artisan), 14 lb. (commoner), or 6 lb. (courtier)",
    notes: "A prebuilt kit for spies who infiltrate by impersonation; weapons in the kit are of standard quality. Artisan's kit: an artisan's outfit, masterwork artisan's tools of the appropriate type, spring dart boots, a spool of spider wire, a garrote ring, and a modular short sword — for posing as an artisan while still carrying hidden weapons. Commoner's kit: a peasant's outfit, two spy buttons (one thundering, one smoke) of plain styling, a modular long sword, a dagger, a quarterstaff, a pair of climbing boots, and a smuggler's belt. Courtier's kit: a noble's outfit equipped with three elaborately styled spy buttons (one flash, one smoke, one thundering), a poison ring, a signet ring, a modular hand crossbow, ten hand crossbow bolts, a cord shirt, three sheets of tracing vellum, an ink pen and ink, and a pair of spring dart boots.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "infiltrators-kit",
    name: "Infiltrator's Kit",
    category: "gear",
    cost: "50 gp",
    weight: "13 lb.",
    notes: "A prebuilt kit for covert entry when charm and bluff won't serve. Comes with an infiltrator's outfit, a spool of spider wire, a bag of caltrops, a collapsible grappling hook, and 50 feet of black silk rope. (The kit's price is confirmed in the article text as well as the table.)",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "second-story-kit",
    name: "Second-Story Kit",
    category: "gear",
    cost: "216 gp",
    weight: "24 lb.",
    notes: "A prebuilt kit for spies who need to access targets high off the ground. Comes with an infiltrator's outfit, a spider (housebreaker's harness), 100 feet of black silk rope, a collapsible grappling hook, a pair of climbing boots, ten pitons, a hammer, and a set of masterwork thieves' tools (for getting through locked windows at the top of the climb). (Price 216 gp as printed in the table and confirmed in the article text.)",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
];
