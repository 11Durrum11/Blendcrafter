// Dragon Magazine #319 (May 2004) — magic items.
// All ten items come from "I Scry: Watching the Watchers"
// (pp. 62–66), an article of scrying and anti-scrying items.
// (The program survey estimated ~20 items for the whole issue;
// the issue prints exactly these ten new magic items — the rest
// of the expected count was the Dark Sun feature's mundane gear,
// staged in equipment-draft.ts.) Descriptions were checked
// against the printed pages (magazine pp. 64–66 read from page
// images where the OCR layer interleaves columns). Aura, caster
// level, and construction prerequisites are folded into each
// summary, matching the live MagicItemDefinition shape and the
// integrated issue-318 format.
//
// One adjudication: the RING OF THE EVIL EYE is a single item.
// Its text begins at the bottom of p. 65's second column (the
// +6 Spot / +2 initiative function) and continues at the top of
// the third column (the curse: automatic failure against
// scrying); the OCR layer interleaves the columns and can make
// it look like two items. The page image shows one header only.
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

import type { MagicItemDefinition } from "@/engine/types";

const DM319 = "Dragon Magazine #319 — I Scry";
const URL319 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine319_djvu.txt";

export const DRAGON_319_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "amulet-of-deception",
    name: "Amulet of Deception",
    category: "wondrous",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "1,200 gp",
    summary:
      "Amulet slot. A locket, 1 inch wide and 2 inches tall, suspended from a thin gold chain. The portrait inside the locket is what appears in the wearer's place in any scrying effect (such as scrying or greater scrying) or in the area covered by one. The wearer also gains a +2 insight bonus on Intelligence checks made to notice a scrying sensor. The amulet does not otherwise keep a creature from being seen with scrying spells. Faint illusion; CL 5th; Craft Wondrous Item, disguise self.",
  },
  {
    id: "circlet-of-convocation",
    name: "Circlet of Convocation",
    category: "wondrous",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "4,775 gp",
    summary:
      "A silver circlet set with five green gems, granting a +5 insight bonus on Intelligence checks made to notice a scrying sensor. When the wearer notices a sensor, he may use a standard action to instantly appear in a random open square adjacent to the spellcaster scrying upon him; the teleportation effect is flawless and functions across planar boundaries. Each use causes one of the circlet's gems to burn out; once all five gems are burnt out it no longer teleports (but retains the +5 bonus). If no open square adjacent to the scrier exists, the attempt fails and no gem burns. The circlet gives no information about the scrier's identity or the safety of the destination. Strong conjuration; CL 13th; Craft Wondrous Item, detect scrying, greater teleport, plane shift.",
  },
  {
    id: "deathglance-locket",
    name: "Deathglance Locket",
    category: "wondrous",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "3,860 gp",
    summary:
      "Amulet slot. A 1-inch tiger-eye gem on a slim gold chain, granting a +2 insight bonus on Intelligence checks made to notice a scrying sensor. Once per day, when the wearer notices a scrying sensor, he may speak a command word: an immaterial copy of the gem flies from the locket to the location of the foe scrying him, dealing 10d6 points of damage to the scrier (DC 20 Will save for half damage), and the scrier must succeed at a Concentration check (DC 10 + damage dealt) or the scrying effect ends. Moderate abjuration; CL 11th; Craft Wondrous Item, detect scrying.",
  },
  {
    id: "golden-beholder",
    name: "Golden Beholder",
    category: "wondrous",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "38,000 gp",
    summary:
      "Weight 100 lb. A 2-foot-diameter statuette of a beholder made entirely of gold, its ten eyestalks removable as masterwork daggers (each about 450 gp in value, with a gemstone pommel stylized as an eye and a permanent Nystul's magic aura making it seem nonmagical; identify lets the caster attempt a DC 10 Will save to recognize the magic and identify the dagger's divination and illusion auras). A removed eyestalk dagger serves as a scrying sensor for the central eye: speaking the command word as the dagger is inserted into its sheath-hole in the central eye focuses the image on that dagger's location. The user sees and hears from the pommel with his own acuity (a gray haze obscures everything more than 30 feet away, though sound carries normally), can cast spells through it as with greater scrying, and the link works at any distance, even across planes. Watched creatures get no Intelligence check to sense the sensor (though a creature under detect scrying may notice it with a DC 10 Will save); there is no Will save to resist being seen and spell resistance does not apply, but mind blank and screen work normally. The link cannot be dispelled, though a targeted dispel magic on a dagger suppresses that dagger's scrying function for 1d4 rounds; an antimagic field suppresses access to the daggers. Removing or destroying a pommel gem ends that dagger's function. Strong divination; CL 13th; Craft Wondrous Item, greater scrying, Nystul's magic aura.",
  },
  {
    id: "ioun-stone-black-and-white-mottled",
    name: "Ioun Stone, Black and White Mottled",
    category: "wondrous",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "60,000 gp",
    summary:
      "This ellipsoid ioun stone, mottled black and white, provides the effects of a mind blank spell against scrying attempts only: direct attempts to scry upon the user automatically fail, and area or location scrying attempts show the area but not the person. The stone provides none of mind blank's other benefits. Strong abjuration; CL 15th; Craft Wondrous Item, mind blank.",
  },
  {
    id: "mirror-of-captured-images",
    name: "Mirror of Captured Images",
    category: "wondrous",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "40,000 gp",
    summary:
      "Weight 40 lb. A silver mirror roughly 3 feet wide by 4 feet long, set in a frame with twenty-four protruding gemstones and a retractable leg for support. Speaking the first command word views another place as with a clairvoyance spell — except that the user can extend his vision onto other planes if he is sufficiently familiar with the place — and the image continues automatically until dispelled or commanded to stop. The second command word records the images viewed into the gemstones (1 hour of images per gemstone, 24 hours total; after 24 hours it records over the oldest images); speaking the second word again stops recording. The third command word, spoken while touching a gem, plays back that gem's images; the fourth command word, spoken while touching a gem, locks that gem out of the recording loop so its images are stored indefinitely (repeating the word returns the gem to the pool, reducing continuous capacity while any gem is locked). The mirror has no auditory capability. Strong divination; CL 13th; Craft Wondrous Item, clairaudience/clairvoyance, plane shift.",
  },
  {
    id: "ring-of-scry-detection",
    name: "Ring of Scry Detection",
    category: "ring",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "28,000 gp",
    summary:
      "A gold ring inscribed with eyes on its interior surface. The wearer benefits from a constant detect scrying effect. Moderate divination; CL 7th; Forge Ring, detect scrying.",
  },
  {
    id: "ring-of-the-evil-eye",
    name: "Ring of the Evil Eye",
    category: "ring",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "6,000 gp",
    summary:
      "CURSED ITEM. A large gold ring set with what appears to be a moist, living eye. The wearer gains a +6 bonus on Spot checks and a +2 bonus on initiative rolls — that appears to be its only function. However, if the wearer is the target of a divination (scrying) spell, he automatically fails any saving throw to resist it and the spell automatically penetrates his spell resistance, if any. Detect magic reveals only a faint aura of transmutation; identify has a 1% chance per caster level to reveal the ring's true properties, and analyze dweomer reveals its true nature. The curse function is not apparent to the wearer. Moderate divination; CL 7th; Forge Ring, clairaudience/clairvoyance, scrying.",
  },
  {
    id: "scout-goggles",
    name: "Scout Goggles",
    category: "wondrous",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "15,000 gp",
    summary:
      "Priced per pair; scout goggles are made in sets of two or more identical magical pairs of goggles. Each pair has two command words, one to transmit and one to receive: activating transmit signals the other pairs of the set, whose wearers must activate receive mode to see what the transmitter sees (a pair cannot send and receive simultaneously; repeating a command word shuts the goggles off). The goggles function over any distance but not across planes. Receivers are susceptible to gaze attacks and other visual-based spells affecting the transmitter (each receiver makes her own saving throw), and a transmitting wearer confers a +2 circumstance bonus on Spot checks made by receiving wearers to notice something the transmitter already spotted. Receiving wearers see both their own field of view and the transmitted images without disorientation. A set works only within itself; additional pairs can be added to a set only if all other pairs are present during item creation. Faint divination; CL 5th; Craft Wondrous Item, clairaudience/clairvoyance.",
  },
  {
    id: "scryskull",
    name: "Scryskull and Scryskull Helm",
    category: "wondrous",
    ruleset: "core",
    source: DM319,
    sourceUrl: URL319,
    cost: "25,200 gp",
    summary:
      "Weight 3 lb. (helm), 3 lb. (skull). Two linked items, a flying skull and a larger skull-shaped helm, each etched with runes. The user wears the helm and speaks the command word (functioning only if both items are on the same plane): the smaller skull begins to fly, glowing with two red lights in its eye sockets, and the user sees through the skull's \"eyes\" as with an arcane eye spell, hears what it hears with his own hearing acuity, and can speak through the skull's mouth; he flies the skull with his thoughts at a speed of 60 feet with perfect maneuverability, and if he deactivates it in the air it sinks as with feather fall. The skull looks like an ordinary skull (DC 15 Spot check or close examination to notice the runes) and has hardness 5 and 10 hit points; it is created from the skull of a creature usually three size categories smaller than the helm's wearer. While the helm is active, the user does not see or hear with his own senses until he removes the helm or deactivates it. Moderate divination; CL 7th; Craft Wondrous Item, arcane eye, clairaudience/clairvoyance, magic mouth.",
  },
];
