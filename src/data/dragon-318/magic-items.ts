import type { MagicItemDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #318 pack (library-staging/packs/dragon-magazine/issue-318)
// Twenty-one magic items, from two articles:
//   * "X Marks the Spot" (pp. 53–55): the nine pirate grafts — staged
//     as magic items with category "graft", the issue-315 inevitable-
//     graft precedent (Fiend Folio graft rules; each summary carries
//     its printed creation line) — and seven pirate treasures.
//   * "Under Command" (p. 97): the five RPG-stat items from "The
//     Spider Queen's Treasure." Only their RPG Stats are staged; the
//     Skirmish Stats printed beside them are Miniatures-game numbers
//     and are carried in reference.md.
// Transcribed from the magazine text on archive.org
// (DragonMagazine318_djvu.txt); every price and stat line in both
// articles was verified against the page images of
// DragonMagazine318.pdf, which corrected four OCR readings (see
// MANIFEST.md): Teakwood Pegleg 12,550 gp, Hot Iron Hook 1d4 fire,
// Ossified Pegleg command undead as a 5th-level cleric, and the
// Arachnid Whip's poison at 1d2 Dexterity.
// Summaries are short mechanical paraphrases in our own words; no
// magazine prose is reproduced.

const DM318 = "Dragon Magazine #318";
const DM318_PATH =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine318_djvu.txt";

export const DRAGON_318_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Pirate grafts (X Marks the Spot, pp. 53–54) ----
  {
    id: "eye-of-the-murky-deep",
    name: "Eye of the Murky Deep",
    category: "graft",
    cost: "30,000 gp",
    summary:
      "Pirate graft (eye): while uncovered, the grafted creature takes a −2 penalty on Spot and Search checks; if all of the creature's other eyes are covered, it is immune to gaze attacks, and the eye guarantees the user can always see at a range of 20 feet when underwater, regardless of lighting conditions (magical darkness and blinding effects block it as usual). Prerequisites: Graft Flesh, create water, darkvision.",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "golden-dancing-pegleg",
    name: "Golden Dancing Pegleg",
    category: "graft",
    cost: "55,000 gp",
    summary:
      "Pirate graft (leg): grants the grafted creature the use of the Mobility and Spring Attack feats, even if it does not meet their prerequisites, and a +10 competence bonus on Perform (dance) checks. Prerequisites: Graft Flesh, cat's grace, freedom of movement.",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "hot-iron-hook",
    name: "Hot Iron Hook",
    category: "graft",
    cost: "36,000 gp",
    summary:
      "Pirate graft (hand): constantly searing hot, though it does not damage the grafted creature; it deals an additional 1d4 points of fire damage on top of normal damage. Once per day, the graft grants the ability to cast a variation of mark of justice as a 9th-level cleric, branding the victim with the searing hook instead of writing upon him (the injunction is usually against some act of good, such as informing on the pirate, disclosing the location of buried treasure, or deserting the ship). Prerequisites: Graft Flesh, heat metal, mark of justice. (Fire damage and caster level read off the page image; the djvu text garbles both.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "leg-of-squid",
    name: "Leg of Squid",
    category: "graft",
    cost: "40,000 gp",
    summary:
      "Pirate graft (leg): a mass of ten tentacles that only partially supports the grafted creature's weight, halving its base speed. Adds +4 to the grafted creature's grapple bonus, grants the Improved Grapple feat (even if the prerequisites are not met), and grants a +10 competence bonus on Swim checks. Prerequisites: Graft Flesh, Evard's black tentacles.",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "mutineers-eye",
    name: "Mutineer's Eye",
    category: "graft",
    cost: "4,000 gp",
    summary:
      "Pirate graft (eye): the recipient's other eye is weakened, imposing a permanent −2 penalty on Spot checks. When the owner makes a sneak attack, the eye adds +1d6 to her sneak attack damage; those with no sneak attack ability do not benefit from this graft. Prerequisites: Graft Flesh, bestow curse, true strike.",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "ossified-pegleg",
    name: "Ossified Pegleg",
    category: "graft",
    cost: "36,000 gp",
    summary:
      "Pirate graft (leg): a hideous bone pegleg that fools undead, granting the grafted creature a continuous hide from undead effect, which may be suppressed or reactivated as a standard action. In addition, the grafted creature can use command undead once per day, as a 5th-level cleric. Prerequisites: Graft Flesh, command undead, hide from undead. (Caster level read off the page image; the djvu text reads 9th.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "sailors-hook",
    name: "Sailor's Hook",
    category: "graft",
    cost: "12,500 gp",
    summary:
      "Pirate graft (hand): grants a +5 competence bonus on Use Rope and Climb checks. Prerequisites: Graft Flesh; crafter must have 1 rank in Climb and Use Rope.",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "spyglass-eye",
    name: "Spyglass Eye",
    category: "graft",
    cost: "25,000 gp",
    summary:
      "Pirate graft (eye): the graft recipient ignores the normal −1 penalty per 10 feet of distance that applies to Spot checks, out to a distance of 150 feet; after that, the cumulative penalty begins accruing normally. Prerequisites: Graft Flesh, guidance; crafter must have 1 rank in Spot.",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "teakwood-pegleg",
    name: "Teakwood Pegleg",
    category: "graft",
    cost: "12,550 gp",
    summary:
      "Pirate graft (leg): the buoyant teakwood pegleg grants a +5 competence bonus on Swim checks and a +5 bonus on Balance checks. A secret, watertight compartment is built into it, large enough to hold a rolled piece of letter-size parchment or a dagger; finding and opening it requires a DC 20 Search check. Prerequisites: Graft Flesh, cat's grace. (Price read off the page image; the djvu text garbles it.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },

  // ---- Pirate treasures (X Marks the Spot, pp. 54–55) ----
  {
    id: "corsair-cutlass",
    name: "Corsair Cutlass",
    category: "weapon",
    cost: "11,000 gp",
    summary:
      "A +1 keen cutlass that may be used to cut lines, clean fish, or hack down doors on boarding raids: when attacking an object, it ignores half its hardness. (Moderate transmutation; CL 10th; Craft Magic Arms and Armor, keen edge.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "deaths-head-earring",
    name: "Death's Head Earring",
    category: "wondrous-slotless",
    cost: "18,480 gp",
    summary:
      "A golden earring in the skull-and-crossbones motif. The wearer can use deathwatch at will, as a free action, and once per day may use death knell as cast by a 3rd-level cleric. This item does not use a magic item slot. (Faint necromancy; CL 3rd; Craft Wondrous Item, deathwatch, death knell; weight —.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "dragonhead-bowsprit",
    name: "Dragonhead Bowsprit",
    category: "wondrous",
    cost: "14,000 gp",
    summary:
      "Carved to resemble a black dragon, this ship's bowsprit can emit a gout of acid once per day in a 60-foot cone, dealing 10d6 points of damage (DC 14 Reflex save for half); the bowsprit is not flexible and can only attack targets directly ahead of the ship it is attached to. (Moderate evocation; CL 11th; Craft Wondrous Item, acid fog, acid spray; weight 500 lb.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "flag-of-the-mariner",
    name: "Flag of the Mariner",
    category: "wondrous",
    cost: "90,000 gp",
    summary:
      "A gold trident on a white-and-azure barred field. Any ship sailing under this flag has its speed increased by one-quarter for one hour per day, as determined by the captain; additionally, the officers and crew operate continuously with a +2 competence bonus on Profession (sailor) checks. (Moderate transmutation; CL 9th; Craft Wondrous Item, expeditious retreat; weight 4 lb. Price read off the page image; the djvu text garbles it.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "flag-of-terror",
    name: "Flag of Terror",
    category: "wondrous",
    cost: "23,000 gp",
    summary:
      "A blank scarlet field on which the victim's nightmares appear in horrific detail when activated. The captain of a vessel flying this flag can cast phantasmal killer once per day against any ship he can see and to which he has line of effect; if he can make out an individual person aboard, he may target that person, otherwise the spell attacks the target ship's captain. (Moderate illusion; CL 9th; Craft Wondrous Item, phantasmal killer; weight 4 lb.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "mephit-decanter",
    name: "Mephit Decanter",
    category: "wondrous",
    cost: "20,000 gp",
    summary:
      "A silver carafe fluted with aquamarine that can pour forth either a water mephit or an ooze mephit once per day (user's choice); the mephit serves as though summoned by a summon monster spell for a duration of one hour. (Moderate conjuration; CL 7th; Craft Wondrous Item, summon monster IV; weight 3 lb.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "ship-in-a-bottle",
    name: "Ship in a Bottle",
    category: "wondrous",
    cost: "—",
    summary:
      "An odd glass bottle similar in function to an iron flask, but it traps ships instead of outsiders. Once per day, on the command word, the user can force any one ship within 60 feet into the bottle if the highest-ranking sailor aboard fails a DC 22 Will save; each other crewmember is allowed a save, but success only lets that crewmember escape into the water — the ship is still captured. Loosing the cork frees the ship (if no large body of water is within half a mile, it appears on land in front of the bottle), and the owner may then compel the crew to serve her, as per the geas spell. A trapped crew does not age and needs no food or drink, is aware of its surroundings, but cannot move or communicate beyond the glass, even by teleport, plane shift, or sending. If the bottle is destroyed with a ship inside, the highest-ranking sailor must make another DC 22 Will save: success frees the ship and crew, failure destroys both irrevocably, and only divine intervention can bring them back. (Overwhelming conjuration; CL 21st; weight 1 lb. The magazine prints no price and no creation line for this item; the cost field carries the dash it would print.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "wheel-of-obad-hai",
    name: "Wheel of Obad-Hai",
    category: "wondrous",
    cost: "67,860 gp",
    summary:
      "A massive ship's steering wheel carved with frolicking sea cats, majestic whales, and gusting wind and clouds. The captain of a ship with this wheel installed may cast control winds and control weather each once per day. (Strong transmutation; CL 13th; Craft Wondrous Item, control weather, control winds; weight 100 lb.)",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },

  // ---- The Spider Queen's Treasure (Under Command, p. 97) ----
  {
    id: "arachnid-whip",
    name: "Arachnid Whip",
    category: "weapon",
    cost: "32,350 gp",
    summary:
      "A whip covered in poisonous barbs and tipped with a long, dagger-like spider fang, crafted for high priestesses of Lolth. Due to its deadly construction it deals 1d6 damage, has a threat range of 19–20, and adds the wielder's Strength modifier to damage; unlike a regular whip, armor and natural armor do not prevent it from dealing damage. Anyone struck is injected with poison (initial and secondary damage 1d2 Dexterity, DC 13 Fortitude save), and the wielder gains a +4 resistance bonus on saving throws against poison. (Poison damage read off the page image; the djvu text garbles the die.) It otherwise functions as a +1 whip. (Moderate necromancy; CL 7th; Craft Magic Arms and Armor, poison; weight 2 lb. RPG stats only; the article also prints Miniatures skirmish stats, carried in reference.md.)",
    source: `${DM318} — Under Command`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "arc-of-darkness",
    name: "Arc of Darkness",
    category: "weapon",
    cost: "18,400 gp",
    summary:
      "A finely carved black hand crossbow endowed with the power of infinite darkness, originally designed to fight surface elves. Any bolt fired from this +1 hand crossbow deals an additional 1d6 points of negative energy damage, and the weapon ignores any miss chance due to concealment (such as from displacement or blur); the negative energy damage does not heal undead. (Moderate necromancy; CL 11th; Craft Magic Arms and Armor, slashing darkness*, true sight; weight 2 lb. *This spell appears in the Miniatures Handbook. RPG stats only; skirmish stats in reference.md.)",
    source: `${DM318} — Under Command`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "piwafwi-of-shadows",
    name: "Piwafwi of Shadows",
    category: "wondrous-shoulders",
    cost: "19,000 gp",
    summary:
      "A long dark cloak covered in dark, intricate web patterns (visible to those who can see invisibility) that seems to fade in and out of vision. You may hide in plain sight, as the shadowdancer ability, as long as you do not move more than 5 feet per round while hidden, and you gain a +10 competence bonus on all Hide checks. (Moderate illusion; CL 8th; Craft Wondrous Item, invisibility; weight 1 lb. A different item from the Magic Item Compendium's greater piwafwi. RPG stats only; skirmish stats in reference.md.)",
    source: `${DM318} — Under Command`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "ring-of-the-spider",
    name: "Ring of the Spider",
    category: "ring",
    cost: "6,000 gp",
    summary:
      "The wearer can apply poison to a weapon without any chance of accidentally poisoning himself. The rings have even greater power in the hands of a drow: any drow wearing one gains a +1 bonus to the DC of any enchantment, evocation, or necromancy spells he casts. (Moderate transmutation; CL 9th; Forge Ring, neutralize poison, permanency. RPG stats only; skirmish stats in reference.md.)",
    source: `${DM318} — Under Command`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "spidersilk-pendant",
    name: "Spidersilk Pendant",
    category: "wondrous",
    cost: "2,160 gp",
    summary:
      "A small pendant in the shape of a very intricate web, crafted by drow wizards for drow priestesses of Lolth. It can be used to cast a web spell once per day. (Faint conjuration; CL 3rd; Craft Wondrous Item, web. RPG stats only; skirmish stats in reference.md.)",
    source: `${DM318} — Under Command`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
];
