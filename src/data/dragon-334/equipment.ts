// Dragon Magazine #334 (August 2005) — equipment draft: 33 records.
// ELEVEN incendiary items — "The Fires of Alchemy" (Paul Leach),
// pp. 49-51: four new special substances, three catapult ammunition
// types, two projector fuels, and two siphon projectors. FIVE
// alchemical brews — "Drunkards & Flagons" (Evan Dicken), p. 56
// table. SIX animal accessories — "Class Acts: Animal Accessories"
// (John E. Ling Jr.), p. 87 — a column the program survey did not
// itemize. ELEVEN mining-town goods — "Wormfood: The Kitchen Sink"
// (the Age of Worms companion), pp. 66-68 goods table and prose; the
// survey marked Wormfood reference-only, but the column prints a
// priced goods table and prose-priced alchemicals (see MANIFEST).
// Every price, weight, and Craft DC was verified against rendered
// page images (magazine pp. 49-51, 56, 68, 87); the image governs
// over the OCR stream — it corrects the OCR in several places (the
// Animal Accessories table prices training treats at 30 gp, not
// 50 gp; the Wormfood table prices the breathing mask at 6 gp and
// the birdcage at 20 sp).
// ID NOTES: "pickaxe-334", "canary-334", "breathing-mask-334",
// "smelling-salts-334", "mining-helmet-334", and "climbing-harness-334"
// — the plain ids are held in the live equipment barrel by records
// from other sources (a Goods and Gear pickaxe, an Arms and
// Equipment Guide breathing mask, Quintessential Dwarf mining helmet
// and climbing harness, and others); the issue suffixes keep these
// distinct records apart (issue-319/330/331 precedent).

import type { EquipmentItem } from "@/engine/types";

const SRC_FIRES = "Dragon Magazine #334 — The Fires of Alchemy (Paul Leach), pp. 49-51";
const SRC_BREWS = "Dragon Magazine #334 — Drunkards & Flagons (Evan Dicken), p. 56";
const SRC_ANIMAL = "Dragon Magazine #334 — Class Acts: Animal Accessories (John E. Ling Jr.), p. 87";
const SRC_WORM = "Dragon Magazine #334 — Wormfood: The Kitchen Sink, pp. 66-68";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_FIRES,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

const ALCH = "Alchemical item (nonmagical).";
const BREW =
  "Alchemical brew (nonmagical), priced per single serving. Brews are created with the Craft (alchemy) skill; the DM may also allow a +2 synergy bonus from having 5 or more ranks in Profession (brewing). A bottle holds 2 flagons, 4 glasses, or 12 shots; a waterskin holds twice those amounts; a barrel holds 150 flagons, 300 glasses, or 900 shots.";

export const DRAGON_334_EQUIPMENT: EquipmentItem[] = [
  // ---- The Fires of Alchemy: new special substances (4) ----
  E({
    id: "alchemists-fire-bullet",
    name: "Alchemist's Fire Bullet",
    category: "ammunition",
    cost: "25 gp",
    weight: "1/10 lb.",
    notes:
      ALCH + " Ammunition for a sling. Bullets of this type are actually spherical glass containers that hold alchemist's fire; on a successful hit, the container shatters, dealing an additional 1d4 points of fire damage in addition to the bullet's normal damage, and the target takes an additional 1d4 points of fire damage the following round unless the flames are extinguished, just like normal alchemist's fire. Attacks with these oversized bullets take a -2 penalty on the attack roll. To create one requires a successful DC 25 Craft (alchemy) check.",
  }),
  E({
    id: "burning-dust",
    name: "Burning Dust",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "1/10 lb.",
    notes:
      ALCH + " Grenadelike weapon. Usually held in bags or hollow eggshells, burning dust is a mixture of magnesium, iron filaments, and saltpeter. When thrown as a grenade against a particular 5-foot square (targeting AC 5), burning dust creates a cloud of intensely burning particles; creatures within 5 feet of the point of impact must succeed at a DC 12 Fortitude save or be blinded and sickened for 1d6 rounds. Creatures resistant to fire or immune to critical hits are unaffected. To create it requires a successful DC 15 Craft (alchemy) check.",
  }),
  E({
    id: "long-burning-alchemists-fire",
    name: "Long-Burning Alchemist's Fire",
    category: "alchemical gear",
    cost: "40 gp",
    weight: "1 lb.",
    notes:
      ALCH + " Grenadelike weapon (flask). This refined version of alchemist's fire functions just like regular alchemist's fire except that when it scores a direct hit it burns for 2 additional rounds (dealing an additional 1d6 points of fire damage in each of those rounds) before burning out. The DC to extinguish the flames is 17. To create it requires a successful DC 25 Craft (alchemy) check.",
  }),
  E({
    id: "wet-fire",
    name: "Wet Fire",
    category: "alchemical gear",
    cost: "50 gp",
    weight: "1 lb.",
    notes:
      ALCH + " Grenadelike weapon. Wet fire is a mixture of quicklime and a pint of oil that does not ignite when exposed to air but bursts into flame if exposed to water or an open flame; damage is as alchemist's fire. Wet fire does not deal damage until it ignites. Immersing the area affected by wet fire in water does not automatically extinguish the flames but does grant a +2 circumstance bonus on the Reflex save to extinguish the flames. A wet fire grenade has two chambers: one filled with wet fire, the other with water to get the fire started. To create it requires a successful DC 25 Craft (alchemy) check.",
  }),

  // ---- The Fires of Alchemy: siege engines and ammunition (7) ----
  E({
    id: "burning-dust-pot",
    name: "Burning Dust Pot",
    category: "ammunition",
    cost: "150 gp",
    weight: "25 lb.",
    notes:
      ALCH + " Siege ammunition (heavy catapult only). A burning dust pot functions like a dose of burning dust but affects a larger area: a 20-foot-radius burst. To create one requires a successful DC 15 Craft (alchemy) check.",
  }),
  E({
    id: "fire-pot",
    name: "Fire Pot",
    category: "ammunition",
    cost: "200 gp",
    weight: "25 lb.",
    notes:
      ALCH + " Siege ammunition (heavy catapult only). A fire pot is a clay vessel filled with alchemist's fire that bursts on impact, affecting a 20-foot-radius area. All creatures within the area take 4d6 points of fire damage (Reflex DC 15 half); all creatures affected by a fire pot take an additional 2d6 points of fire damage in the following round unless the flames are extinguished beforehand. To create one requires a successful DC 25 Craft (alchemy) check.",
  }),
  E({
    id: "long-burning-fire-pot",
    name: "Long-Burning Fire Pot",
    category: "ammunition",
    cost: "300 gp",
    weight: "25 lb.",
    notes:
      ALCH + " Siege ammunition (heavy catapult only). A long-burning fire pot functions just like a normal fire pot but the alchemist's fire within is the long-burning variety, dealing an additional 2d6 points of fire damage for one more round after the initial additional round (creatures affected take 2d6 points of fire damage in each of two following rounds unless the flames are extinguished). To create one requires a successful DC 25 Craft (alchemy) check.",
  }),
  E({
    id: "siphon-fire",
    name: "Siphon Fire (Barrel)",
    category: "alchemical gear",
    cost: "500 gp",
    weight: "80 lb.",
    notes:
      ALCH + " Projector fuel. Similar to the alchemist's fire found in the Player's Handbook, this oil has been formulated to be used in a siphon projector. One barrel's worth of siphon fire can fill one large siphon projector once or a small siphon projector three times. To create it requires a successful DC 25 Craft (alchemy) check.",
  }),
  E({
    id: "siphon-projector-large",
    name: "Siphon Projector, Large",
    cost: "3,500 gp",
    weight: "300 lb.",
    notes:
      "Nonmagical flame projector (siege weapon), manually portable. A large siphon projector can project a line of flames 60 feet long or a cone 30 feet long; changing the weapon's setting from a line to a cone effect or vice versa is a full-round action. Creatures in the flames take 4d6 points of fire damage (Reflex DC 15 half) and 2d6 additional points of fire damage in the following round unless they extinguish the flames (DC 15 Reflex save). Water is added to the mixture just before it is expelled when spraying wet fire, ensuring ignition. A full bellows contains enough liquid for six uses; refueling the weapon takes 3 rounds. The siphon projector is very combustible: whenever a siphon projector is subject to fire damage, it must make a Reflex save (DC 10 + fire damage dealt, save bonus +5) or explode in a conflagration dealing 2d6 points of fire damage per remaining use of siphon fire (or siphon wet fire) in a 20-foot-radius burst (Reflex DC 15 half). A large siphon projector takes up a space 10 feet by 10 feet and is usually stationary, typically moved by a pair of heavy horses; setting up a large siphon projector after it has been moved takes 1 minute. To create one requires a successful DC 25 Craft (alchemy) check.",
  }),
  E({
    id: "siphon-projector-small",
    name: "Siphon Projector, Small",
    cost: "1,200 gp",
    weight: "100 lb.",
    notes:
      "Nonmagical flame projector (siege weapon), manually portable. Similar to a large siphon projector but smaller in every respect: it projects a line of flames 40 feet long or a cone 20 feet long (changing the setting from a line to a cone effect or vice versa is a full-round action). Creatures in the flames take 2d6 points of fire damage (Reflex DC 15 half) and 1d6 additional points of fire damage in the following round unless they extinguish the flames. A full tube contains enough liquid for three uses; refueling the weapon is a full-round action. If subject to fire damage it must save as a large projector does (DC 10 + fire damage dealt, save bonus +5), but a small siphon projector's explosion deals only 2d6 points of fire damage in a 10-foot burst (Reflex DC 13 half). A small siphon projector takes up a space 5 feet by 5 feet and is usually stationary, typically moved by a crew of two or a single heavy horse; setting up a small siphon projector after it has been moved takes 5 rounds. To create one requires a successful DC 20 Craft (alchemy) check.",
  }),
  E({
    id: "siphon-wet-fire",
    name: "Siphon Wet Fire (Barrel)",
    category: "alchemical gear",
    cost: "750 gp",
    weight: "80 lb.",
    notes:
      ALCH + " Projector fuel. Similar to the wet fire presented earlier in the same article, siphon wet fire is designed to be used in a siphon projector: one barrel's worth can fill one large siphon projector once or a small siphon projector three times. To create it requires a successful DC 25 Craft (alchemy) check.",
  }),

  // ---- Drunkards & Flagons: alchemical brews (5) ----
  E({
    id: "burrfoots-nut-brown-ale",
    name: "Burrfoot's Nut Brown Ale",
    category: "alchemical gear",
    source: SRC_BREWS,
    cost: "20 gp",
    weight: "1 lb.",
    notes:
      BREW + " Serving: flagon. Craft (alchemy) DC 20. Characters who drink at least a pint take a -2 penalty on Sense Motive checks and gain a +2 alchemical bonus on Diplomacy checks for 30 minutes; a successful Fortitude save negates (DC 10, +2 per additional flagon consumed). These effects are not cumulative.",
  }),
  E({
    id: "dwarven-grave-ale",
    name: "Dwarven Grave Ale",
    category: "alchemical gear",
    source: SRC_BREWS,
    cost: "50 gp",
    weight: "1 lb.",
    notes:
      BREW + " Serving: flagon. Craft (alchemy) DC 25. Drinking at least a flagon grants a +2 alchemical bonus on saving throws against fear effects and a +1 alchemical bonus on attack and damage rolls for 10 minutes.",
  }),
  E({
    id: "evermead",
    name: "Evermead",
    category: "alchemical gear",
    source: SRC_BREWS,
    cost: "200 gp",
    weight: "1/2 lb.",
    notes:
      BREW + " Serving: glass. Craft (alchemy) DC 30. Drinking at least a glass causes the imbiber to lose all detrimental physical ability penalties due to aging (such as decreased Strength or Constitution, but not the mental bonuses of aging or other positive effects of age). This removal lasts for 12 hours per glass drunk. Evermead does not stave off death from natural causes (elders continue to age naturally) or aging effects from supernatural sources.",
  }),
  E({
    id: "firebelly",
    name: "Firebelly",
    category: "alchemical gear",
    source: SRC_BREWS,
    cost: "2 gp",
    weight: "1/4 lb.",
    notes:
      BREW + " Serving: shot. Craft (alchemy) DC 20. Drinking one shot grants a +4 alchemical bonus on Fortitude saving throws made to resist nonlethal damage from nonmagical cold sources for 1 hour; additional shots do not stack but maintain the bonus as long as at least one shot is drunk per hour.",
  }),
  E({
    id: "goodale",
    name: "Goodale",
    category: "alchemical gear",
    source: SRC_BREWS,
    cost: "10 gp",
    weight: "1 lb.",
    notes:
      BREW + " Serving: flagon. Craft (alchemy) DC 20. One pint removes all the penalties associated with normal fatigue (it has no effect on exhaustion or magically induced fatigue). Characters who include goodale as a regular part of their daily ration gain a +2 alchemical bonus on Constitution checks made to avoid nonlethal damage from a forced march.",
  }),

  // ---- Class Acts: Animal Accessories (6) ----
  E({
    id: "claw-extenders",
    name: "Claw Extenders",
    source: SRC_ANIMAL,
    cost: "20 gp",
    weight: "1 lb.",
    notes:
      "Animal gear. Claw extenders strap to an animal's forelegs and extend about an inch beyond its natural claws; strapping on the extenders requires 1 minute. An animal with the attack trick is proficient with claw extenders, while one that doesn't know that trick suffers the -4 penalty for nonproficiency; teaching an animal to use them is a DC 15 Handle Animal check (attack trick). An animal wearing claw extenders deals +1 point of extra damage when making a claw attack (rake attacks do not deal extra damage, as claw extenders only fit over the front claws). Claw extenders only fit animals of the size they were made for and cannot be strapped on to a larger or smaller animal. They can be made of special materials (such as cold iron or adamantine) or be of masterwork quality (and therefore made into magic weapons) like any other weapon, with the normal additional costs.",
  }),
  E({
    id: "climbing-harness-334",
    name: "Climbing Harness",
    source: SRC_ANIMAL,
    cost: "7 gp",
    weight: "1 lb.",
    notes:
      "Animal gear. Actually composed of two separate sets of straps attached by a rope, this harness allows your character to pull up an animal using a rope: one end of the harness supports the animal's weight at its hips and chest and requires 1 minute to put on, and the other part distributes the animal's weight evenly across the character's chest and shoulders, allowing her to climb and lift the animal safely. While using the harness, the animal's weight (and any gear the animal is wearing or carrying) counts against the character's maximum weight. Teaching an animal to accept a climbing harness is a DC 15 Handle Animal check (stay trick). (The plain id \"climbing-harness\" is held by a Quintessential Dwarf record; this record carries the issue suffix.)",
  }),
  E({
    id: "grooming-kit",
    name: "Grooming Kit",
    source: SRC_ANIMAL,
    cost: "15 gp",
    weight: "3 lb.",
    notes:
      "Animal gear. This simple kit contains various brushes, combs, and sundry items used to groom an animal; most often, the kind of animal (feline, canine, bird, and so on) determines exactly what is contained within a grooming kit.",
  }),
  E({
    id: "muzzle-false",
    name: "Muzzle, False",
    source: SRC_ANIMAL,
    cost: "20 gp",
    weight: "1 lb.",
    notes:
      "Animal gear. At a glance a false muzzle appears exactly like a normal muzzle (as presented on page 22 of the Arms and Equipment Guide); a DC 20 Search check reveals the truth, however. When trained, an animal can remove a false muzzle on its own as a move action — the perform trick teaches the animal how to remove the false muzzle on its own (teaching it is a DC 15 Handle Animal check). False muzzles always cost the same, regardless of the animal's size for which they were made.",
  }),
  E({
    id: "scent-blocker",
    name: "Scent Blocker",
    source: SRC_ANIMAL,
    cost: "50 gp",
    weight: "1/2 lb.",
    notes:
      "Animal gear. Rubbing this mixture of herbs into the fur, feathers, or skin of an animal masks its scent for 24 hours, which soothes skittish domestic animals when near a treated predator. A single application of this mixture is large enough to cover one Medium, four Small, or sixteen Tiny or smaller animals; applying scent blocker requires 1 minute per animal treated.",
  }),
  E({
    id: "training-treats",
    name: "Training Treats",
    source: SRC_ANIMAL,
    cost: "30 gp",
    weight: "2 lb.",
    notes:
      "Animal gear. These small treats come in a variety of flavors, in wax paper-lined boxes. When used consistently as a reward system while teaching an animal a new trick, training treats add a +2 circumstance bonus on your Handle Animal check; an entire box must be used over the course of the animal's training in order to gain the bonus.",
  }),

  // ---- Wormfood: goods of a mining town (11) ----
  E({
    id: "birdcage-small",
    name: "Birdcage, Small",
    source: SRC_WORM,
    cost: "20 sp",
    weight: "1 lb.",
    notes:
      "A small cage, of the sort miners carry a canary in as a warning against poisonous gases and other hazards: when the canary expires, they know to flee for their lives.",
  }),
  E({
    id: "breathing-mask-334",
    name: "Breathing Mask",
    source: SRC_WORM,
    cost: "6 gp",
    weight: "1/2 lb.",
    notes:
      "A thick piece of cloth that covers the mouth and nose when exploring particularly dusty or polluted subterranean areas, providing a +1 bonus (circumstance) on saving throws against inhaled poisons. (The plain id \"breathing-mask\" is held by an Arms and Equipment Guide record; this record carries the issue suffix.)",
  }),
  E({
    id: "canary-334",
    name: "Canary",
    category: "animal",
    source: SRC_WORM,
    cost: "1 sp",
    weight: "—",
    notes:
      "Animal. A living canary, carried by miners in a small cage as a warning against poisonous gases and other hazards — when the bird expires, they know to flee for their lives. A canary has the same statistics as a thrush (see the animals appendix of the Dungeon Master's Guide) except for a Constitution score of 1, which results in a -3 penalty on Fortitude saves. (The plain id \"canary\" is held by another animal record; this record carries the issue suffix.)",
  }),
  E({
    id: "diamond-water-elixir",
    name: "Diamond Water Elixir",
    category: "alchemical gear",
    source: SRC_WORM,
    cost: "40 gp",
    weight: "—",
    notes:
      "Special good. Distilled and purified from the waters of the lake the mining town stands on, this elixir lets the imbiber recover 2 points of ability damage instead of the usual 1 for that day — at the expense of being sickened for 24 hours after drinking it.",
  }),
  E({
    id: "mining-helmet-334",
    name: "Mining Helmet",
    category: "helmet",
    source: SRC_WORM,
    cost: "1 gp",
    weight: "1 lb.",
    notes:
      "Little more than a hardened leather cap with a lantern affixed to the front, a mining helmet provides its wearer a +1 armor bonus against falling rocks (it provides no benefit to AC otherwise). The lantern sheds bright light in a 10-foot radius and shadowy illumination to 20 feet, burning for 8 hours on a pint of oil. (The article's goods table lists this item as \"Miner's Hat.\" The plain id \"mining-helmet\" is held by a Quintessential Dwarf record; this record carries the issue suffix.)",
  }),
  E({
    id: "mining-outfit",
    name: "Mining Outfit",
    source: SRC_WORM,
    cost: "3 gp",
    weight: "6 lb.",
    notes:
      "A typical miner's working clothes: a padded shirt, thick pants, a poncho-like leather over-tunic, a wide-brimmed leather hat, and a pair of simple goggles. (The article's goods table lists this item as \"Miner's Outfit.\")",
  }),
  E({
    id: "pickaxe-334",
    name: "Pickaxe",
    category: "tool",
    source: SRC_WORM,
    cost: "8 gp",
    weight: "6 lb.",
    notes:
      "Mining tool. A pickaxe can be used as a heavy pick in combat if used as a weapon, but attacks made with it in such a manner suffer a -2 penalty on attack rolls. (The plain id \"pickaxe\" is held by a Goods and Gear weapon record; this record carries the issue suffix.)",
  }),
  E({
    id: "rockhammer",
    name: "Rockhammer",
    category: "tool",
    source: SRC_WORM,
    cost: "6 gp",
    weight: "10 lb.",
    notes:
      "Mining tool. Little more than chunks of pig-iron affixed to splintered shafts, rockhammers are substandard sledgehammers used to drive iron spikes into the stony walls of a mine. A rockhammer used in combat is treated as a warhammer, although you take a -2 penalty on attack rolls when used as a weapon.",
  }),
  E({
    id: "smelling-salts-334",
    name: "Smelling Salts",
    category: "alchemical gear",
    source: SRC_WORM,
    cost: "20 gp",
    weight: "—",
    notes:
      "Special good. Waving a dose of these salts under the nose of a stable character at negative hit points increases the chance to become conscious from 10% to 30%. The salts are produced by a local druid circle (in the article, the Bronzewood Lodge). (The plain id \"smelling-salts\" is held by a record from the user's compiled alchemical document; this record carries the issue suffix.)",
  }),
  E({
    id: "diamond-water-ale",
    name: "Diamond Water Ale",
    category: "alchemical gear",
    source: SRC_WORM,
    cost: "8 sp",
    weight: "—",
    notes:
      ALCH + " Illicit good. This cheap ale is fermented from the unfiltered, algae-filled waters of the lake — drinking a pint requires a Fortitude save (DC 12): failure leaves the drinker sickened; sickened individuals drinking diamond water ale become nauseated, and nauseated individuals drinking it fall unconscious for 1d6 hours. Craft (alchemy) DC 14.",
  }),
  E({
    id: "miners-milk",
    name: "Miner's Milk",
    category: "alchemical gear",
    source: SRC_WORM,
    cost: "5 gp",
    weight: "—",
    notes:
      ALCH + " Illicit good. This exceptionally strong moonshine is made with a rare mushroom found only in the deepest mines. Drinking a shot requires a Fortitude save (DC 14): success grants a +2 alchemical bonus on Fortitude saves against poison for 1 hour, while failure causes the drinker to fall unconscious for 1d6 hours. Craft (alchemy) DC 20.",
  }),
];
