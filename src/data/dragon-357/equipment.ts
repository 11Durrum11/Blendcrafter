// Dragon Magazine #357 (July 2007) — equipment draft: 20 items.
// THIRTEEN mundane tools from "Feathers and Fur" (Hal Maclean),
// "Tools of the Trade," pp. 36-37 — the table is on p. 36 and the
// descriptions run pp. 36-37: Bells, Collar (spiked), Dog Whistle,
// Falcon's Hood, Falconer's Glove, Footfirm Boots, Lure, Perch
// (saddle), Perch (shoulder), Perch (stand), Rawhide (10 strips),
// Talon Tube, Training Arm.
// SIX nonmagical alchemical items from the same article's "Animal
// Alchemy," pp. 38-39 — table p. 38, descriptions pp. 38-39: Bird
// Bomb (dust), Bird Bomb (reek), Dog Smoke, Hound Snuff (10
// pinches), Mad Foam, Silent Bells (set of six). Alchemy is the
// cornerstone in APOC; these are nonmagical preparations that stage
// as printed. The section's seventh item, Nose Numb, prints NO cost
// or weight line anywhere (it appears in neither table) and is
// held to reference.md — see SCREENING.md.
// ONE special material from "Arcane Botanica" (Scott Noel),
// pp. 52-58: COLDWOOD, p. 55 — a priced material with a full
// cost-modifier table and a Craft DC modifier, staged as a material
// record (issue-349 construction-row precedent). The article's
// twelve living plants print specimen prices but no item stat
// lines and digest in reference.md — see SCREENING.md.
// All costs and weights verified against the rendered page images
// (magazine pp. 36, 38, 55); the image governs over the OCR stream.
// Descriptions are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { EquipmentItem } from "@/engine/types";

const SRC_FF = "Dragon Magazine #357 — Feathers and Fur (Hal Maclean), pp. 36-37";
const SRC_ALCH = "Dragon Magazine #357 — Feathers and Fur (Hal Maclean): Animal Alchemy, pp. 38-39";
const SRC_BOT = "Dragon Magazine #357 — Arcane Botanica (Scott Noel), p. 55";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_FF,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_357_EQUIPMENT: EquipmentItem[] = [
  // ---- Tools of the Trade (13) ----
  E({
    id: "bells-animal",
    name: "Bells (animal)",
    cost: "15 gp",
    weight: "1/4 lb.",
    notes:
      "Metallic spheres fixed to a falcon's legs with leather straps called bewits; their unique tone lets a falconer find his bird if it goes missing, gets into trouble, or flies off. A falcon equipped with bells takes a -8 penalty on all Move Silently checks.",
  }),
  E({
    id: "collar-spiked",
    name: "Collar (spiked)",
    cost: "15 gp",
    weight: "4 lb.",
    notes:
      "A sturdy black leather collar with sharp 2-inch spikes jutting outward. Any creature that successfully grapples or pins a dog wearing one takes 1 point of piercing damage; a grappler can avoid the spikes by taking a -5 penalty on its grapple check.",
  }),
  E({
    id: "dog-whistle",
    name: "Dog Whistle",
    cost: "20 gp",
    weight: "1/10 lb.",
    notes:
      "A reedy metal whistle whose sound is inaudible to most humanoids but clearly heard by canines. Its user gains a +2 bonus on Handle Animal checks involving canines. Anyone with a dog whistle can try to drive away dogs within a 30-foot radius with a DC 25 Handle Animal check; a successful check forces the canines to make a Will save (DC 10 + 1 for each point the check exceeded 25) or become panicked for 1d4 rounds.",
  }),
  E({
    id: "falcon-hood",
    name: "Falcon's Hood",
    cost: "2 gp",
    weight: "1/8 lb.",
    notes:
      "A thin leather mask that slips over a falcon's eyes and upper head, simulating night: it calms the bird and encourages rest by limiting sensory stimuli. A hooded bird cannot see and is docile, generally unwilling to move or attack. A DC 15 Handle Animal check is required to fit a bird with a falcon's hood.",
  }),
  E({
    id: "falconers-glove",
    name: "Falconer's Glove",
    cost: "10 gp",
    weight: "3 lb.",
    notes:
      "A thick leather gauntlet serving as a resting place and launching platform for falcons, protecting the hand from the raptor's talons. Wearing it imposes a -2 penalty on checks with skills demanding precise and careful manipulation of the fingers, including Climb, Disable Device, Forgery, Open Lock, Sleight of Hand, and Use Rope.",
  }),
  E({
    id: "footfirm-boots",
    name: "Footfirm Boots",
    cost: "40 gp",
    weight: "6 lb.",
    notes:
      "Hardened leather pads laced around the paws of any Medium or Small dog; their soles are lined with tiny barbs. A dog wearing them gains a +2 bonus on any Climb checks or Strength checks to resist a bull rush.",
  }),
  E({
    id: "lure",
    name: "Lure",
    cost: "15 gp",
    weight: "4 lb.",
    notes:
      "Vaguely bird-shaped bags of leather attached to long cords, used to create the illusion of a prey animal. A falconer who whirls a lure over his head gains a +2 bonus on Handle Animal checks when training raptors new tricks.",
  }),
  E({
    id: "perch-saddle",
    name: "Perch (saddle)",
    cost: "40 gp",
    weight: "8 lb.",
    notes:
      "A metal semi-circle fitted with a wooden grip, customized to fit on a saddle, letting a falconer transport his raptor by horse without wearing a glove at all times. A falconer must train a bird to make it familiar with landing and riding on such a perch: one day and a successful DC 15 Handle Animal check; this does not count as a trick against the maximum number of tricks a falcon can learn.",
  }),
  E({
    id: "perch-shoulder",
    name: "Perch (shoulder)",
    cost: "30 gp",
    weight: "2 lb.",
    notes:
      "An elongated pad that lets a falconer carry his raptor on his shoulder, eliminating the need for a glove or a free-standing perch; cushioned and lined with wood and metal, it protects against the falcon's talons while giving it a comfortable resting place when not flying. Training a bird to land and ride on it takes one day and a successful DC 20 Handle Animal check; this does not count as a trick against the falcon's trick maximum.",
  }),
  E({
    id: "perch-stand",
    name: "Perch (stand)",
    cost: "20 gp",
    weight: "15 lb.",
    notes:
      "The heaviest kind of perch: a T-shaped, 5-foot-high stand on a secure tripod base. All falcons learn to take off and land from these as part of their early training.",
  }),
  E({
    id: "rawhide",
    name: "Rawhide (10 strips)",
    cost: "5 sp",
    weight: "1/4 lb.",
    notes:
      "Strips of sun-dried meat laced with spices, which dogs find particularly tasty. A character who uses rawhide as a reward when teaching a dog a new trick gains a +2 bonus on his Handle Animal checks for the purpose of teaching it; thereafter he takes a -2 penalty on Handle Animal checks whenever he orders the dog to perform that trick without simultaneously offering rawhide as a reward.",
  }),
  E({
    id: "talon-tube",
    name: "Talon Tube",
    cost: "30 gp",
    weight: "1/4 lb.",
    notes:
      "A small container able to hold a rolled-up scroll, potion, or other tiny object weighing less than a pound; it lets an avian carry an item without impeding its flight or use of natural weapons. A DC 12 Handle Animal check affixes a talon tube to a bird, or loads or retrieves an item from a worn tube.",
  }),
  E({
    id: "training-arm",
    name: "Training Arm",
    cost: "5 gp",
    weight: "15 lb.",
    notes:
      "A heavily padded glove covering the hand and arm up to the shoulder, designed to help trainers fend off biting dogs: it grants the wearer an additional +1 AC bonus when using total defense, and a +4 bonus on Handle Animal checks when teaching canines new tricks. The arm wearing it cannot be used for any other purpose, including wielding a weapon or carrying a shield, and the wearer takes a -6 penalty on checks with skills demanding precise and careful manipulation of the fingers, including Climb, Disable Device, Forgery, Open Lock, Sleight of Hand, and Use Rope.",
  }),
  // ---- Animal Alchemy (6) ----
  E({
    id: "bird-bomb-dust",
    name: "Bird Bomb (dust)",
    cost: "25 gp",
    weight: "1/2 lb.",
    source: SRC_ALCH,
    notes:
      "Alchemical item (nonmagical). A small, fragile orb crafted to be carried and dropped by a flying bird and used as a grenadelike weapon. When dropped, it shatters in a 5-foot-radius cloud of luminous, cloying dust; any creature in the area must make a DC 15 Reflex save or faintly glow for 1d4 minutes, during which time it does not benefit from the concealment normally provided by darkness, blur, displacement, or similar effects. Requires a DC 20 Craft (alchemy) check to create.",
  }),
  E({
    id: "bird-bomb-reek",
    name: "Bird Bomb (reek)",
    cost: "40 gp",
    weight: "1/2 lb.",
    source: SRC_ALCH,
    notes:
      "Alchemical item (nonmagical). A glass container of distilled troglodyte musk and skunk oil, used as a grenadelike weapon by a bird flying overhead. When dropped, any creature vulnerable to nausea effects within a 10-foot radius of the point of impact must make a DC 15 Fortitude save or become nauseated for as long as it remains within the area (no ill effects once it leaves). The smell persists for 1 minute but is diffused if the area is exposed to strong winds. Requires a DC 25 Craft (alchemy) check to create.",
  }),
  E({
    id: "dog-smoke",
    name: "Dog Smoke",
    cost: "75 gp",
    weight: "2 lb.",
    source: SRC_ALCH,
    notes:
      "Alchemical item (nonmagical). A canister that, when its tab is pulled, releases a sulfurous cloud of choking smoke; it can be thrown as a grenadelike weapon (range increment 20 feet), creating a 10-foot-radius cloud of choking yellow gas lasting 1 minute. Any creature vulnerable to nausea effects (except dogs, wolves, or other canines) must make a DC 15 Fortitude save every round it remains in the cloud or become nauseated; the nausea lasts for as long as the creature remains within the cloud plus 1d4 rounds thereafter. A moderate wind (11+ mph), such as a gust of wind spell, disperses the smoke in 4 rounds; a strong wind (21+ mph) disperses it in 1 round. Requires a DC 25 Craft (alchemy) check to create.",
  }),
  E({
    id: "hound-snuff",
    name: "Hound Snuff (10 pinches)",
    cost: "90 gp",
    weight: "1 lb.",
    source: SRC_ALCH,
    notes:
      "Alchemical item (nonmagical). A fine gray powder; a single pinch inhaled by a canine causes it to sneeze uncontrollably for 1 round, during which it is helpless unless it makes a DC 15 Fortitude save. Once the sneezing finishes, the canine's sense of smell grows more acute for 1 hour, granting it a +4 bonus on any checks involving the use of its scent ability. Requires a DC 15 Craft (alchemy) check to create.",
  }),
  E({
    id: "mad-foam",
    name: "Mad Foam",
    cost: "25 gp",
    weight: "1/4 lb.",
    source: SRC_ALCH,
    notes:
      "Alchemical item (nonmagical). Specially treated biscuits; if chewed and swallowed by a canine, they interfere with its salivary glands, causing it to produce great quantities of white foam for the next 2d6 minutes. This seeming ferocity grants the canine and any obvious master a +2 bonus on Intimidate checks for the duration. Requires a DC 15 Craft (alchemy) check to create.",
  }),
  E({
    id: "silent-bells",
    name: "Silent Bells (set of six)",
    cost: "50 gp",
    weight: "1 lb.",
    source: SRC_ALCH,
    notes:
      "Alchemical item (nonmagical). Tiny round bells bathed in exotic solutions; they chime on a frequency beyond most humanoids' hearing but perfectly audible to canines. If strung to a door, footpath, or similar location, they automatically alert any canine within 120 feet when someone trips them, without alerting the trespasser. Requires a DC 25 Craft (alchemy) check to create.",
  }),
  // ---- Arcane Botanica (1) ----
  E({
    id: "coldwood",
    name: "Coldwood",
    cost: "See notes",
    weight: "—",
    source: SRC_BOT,
    notes:
      "Special material. Rare wood harvested from trees warped by permanent cold (snowfields, glaciers, tundra), with the same hardness and strength as steel. Coldwood items cost more than their normal counterparts: ammunition +50 gp, light armor +500 gp, medium armor +2,000 gp, heavy armor +4,500 gp, shield +500 gp, weapon +2,000 gp, other items +250 gp per pound. The DC to create any coldwood item increases by +8. Living coldwood trees cannot thrive outside cold environments (see reference.md for the plant's full description).",
  }),
];
