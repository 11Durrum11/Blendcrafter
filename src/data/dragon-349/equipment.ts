// Dragon Magazine #349 (November 2006) — equipment draft: 24 items.
//
//   "Hitting the Bullseye" (Eric Cagle, pp. 21–28) — the Complete Bow
//     and Crossbow Chart (pp. 22–23) compiles weapons and ammunition
//     from across the 3.0/3.5 line. Dedupe against the live catalog
//     (full accounting in MANIFEST.md / reference.md):
//     * Six weapons stage here because the catalog holds no full record
//       for them: the handbow and prodd (no record at all), the aquatic
//       crossbow (the live crossbow-aquatic is a different weapon, from
//       Ultimate Equipment Guide), and the bladed, double, and
//       grapple-firing crossbows, whose only live traces are one-line
//       crystalkeep fan-index stubs sourced to this very article (and,
//       for the grapple crossbow, a one-line Song and Silence summary)
//       — staged as -349 full extractions beside those stubs.
//     * Three chart construction rows stage as their own records
//       because no live record carries them: steel crossbows (light and
//       heavy; the chart's "Steel +300 gp" row written out per base
//       weapon) and the elvencraft bow construction (Races of the Wild
//       printing; bows only, +300 gp).
//     * Nine ammunition records stage: the eight chart types with no
//       full live record (alchemist's fire arrow, alchemist's frost
//       arrow, fletched darts, smoking arrow, splintering bolt,
//       tanglefoot bolt, tumbling bolt — several exist live only as
//       one-line Arms and Equipment Guide summaries with divergent or
//       absent mechanics) plus grapple bolts, the grapple-firing
//       crossbow's ammunition. (The chart's blunt arrows are identical
//       to the live Races of the Wild record and reference-note instead.)
//     * Everything else on the chart is identical to a full live book
//       record and goes to reference.md: the PHB bows and crossbows,
//       bone bow and icechucker (Frostburn), footbow and the swiftwing /
//       serpentstongue / dragonsbreath arrows (Races of the Wild),
//       greatbow and composite greatbow (Complete Warrior), great
//       crossbow (Races of Stone — chart line verified identical,
//       2d8 (M) / 18–20/×2 / 120 ft / 14 lb), elven double bow and the
//       flight / signal / thundering arrows (Arms and Equipment Guide),
//       aquatic longbow (Races of Faerûn), yuan-ti serpent bow (chart
//       line matches its fan-index stub exactly).
//     All chart numbers verified against the rendered pp. 22–23 images.
//
//   "Class Acts: Adventurers — Poisonmaking Guide" (Amber E. Scott,
//     pp. 86–87): the poisoner's kit. The column's Craft (poisonmaking)
//     rules and its 29-poison Craft DC table are a Complete Adventurer
//     reprint and go to reference.md.
//
//   "Class Acts: Divine — Animal Battle Gear" (William L. Christensen,
//     pp. 90–91): six new items for animal companions and mounts. The
//     column's reprint tables (Arms and Equipment Guide animal gear;
//     Dragon #334 animal gear; leash and muzzle prices by size) go to
//     reference.md — those items stand in their own sources.

import type { EquipmentItem } from "@/engine/types";

const SRC_BOWS = "Dragon Magazine #349 — Hitting the Bullseye (Eric Cagle), pp. 21-28";
const SRC_POISON = "Dragon Magazine #349 — Class Acts: Adventurers — Poisonmaking Guide (Amber E. Scott), pp. 86-87";
const SRC_ANIMAL = "Dragon Magazine #349 — Class Acts: Divine — Animal Battle Gear (William L. Christensen), pp. 90-91";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_BOWS,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_349_EQUIPMENT: EquipmentItem[] = [
  // ---- Hitting the Bullseye: weapons with no full live record (6) ----
  E({
    id: "handbow",
    name: "Handbow",
    category: "weapon",
    cost: "15 gp",
    weight: "1 lb.",
    notes:
      "Martial ranged weapon. 1d4 piercing (M), crit 19-20/x2, range increment 30 ft. A tiny bow designed mostly for concealment and stealth rather than power; it uses fletched darts rather than arrows, and wielders commonly employ poisoned darts with it. Handbows cannot be made with an increased Strength rating.",
  }),
  E({
    id: "prodd",
    name: "Prodd",
    category: "weapon",
    cost: "20 gp",
    weight: "4 lb.",
    notes:
      "Simple ranged weapon. 1d4 bludgeoning (M), crit x2, range increment 80 ft. A crossbow-like weapon that shoots sling bullets; a stone fired from a prodd deals damage as if the weapon were one size smaller.",
  }),
  E({
    id: "crossbow-aquatic-349",
    name: "Crossbow, Aquatic",
    category: "weapon",
    cost: "250 gp",
    weight: "4 lb.",
    notes:
      "Exotic ranged weapon. 1d8 piercing (M), crit 19-20/x2, range increment 40 ft both in and out of the water. A light crossbow strung especially taut with thicker string and reinforced so as not to snap under the increased tension; it is not subject to the normal -2 penalty on ranged attack rolls for every 5 feet of distance underwater. Favored by aventi, merfolk, and tritons. (Staged as -349: the live crossbow-aquatic record is a different weapon, from Ultimate Equipment Guide.)",
  }),
  E({
    id: "crossbow-bladed-349",
    name: "Crossbow, Bladed",
    category: "weapon",
    cost: "150 gp",
    weight: "8 lb.",
    notes:
      "Simple weapon. Ranged: 1d8 piercing (M), crit 19-20/x2, range increment 80 ft. Melee: 1d4 piercing or slashing (M), crit 19-20/x2. A light crossbow crafted entirely from metal, with a small blade beneath the prod that lets it function as a dagger in melee with no penalty on attack rolls. The wielder can freely interchange melee and ranged attacks during the same round and threatens the squares around him no matter how he last used the weapon. Magical enhancements to the crossbow affect only its use as a ranged weapon; enhancements to its melee capability must be added separately. (Full extraction beside the catalog's fan-index stubs for this weapon.)",
  }),
  E({
    id: "crossbow-double-349",
    name: "Crossbow, Double",
    category: "weapon",
    cost: "100 gp",
    weight: "8 lb.",
    notes:
      "Simple ranged weapon. 1d8 piercing (M), crit 19-20/x2, range increment 80 ft. Two sets of prods and strings, one above and one below: the strength of a light crossbow at the weight of a heavy crossbow. The bottom bolt sits inside a covered channel so it cannot fall out, and a separate lever cocks each string; operating it normally requires two hands. If fully loaded, you can shoot both bolts at a single target with one attack roll at a -2 penalty to determine whether both bolts strike; on a critical hit only one bolt deals extra damage, and extra sneak attack damage is also applied only once. (Full extraction beside the catalog's fan-index stub for this weapon.)",
  }),
  E({
    id: "crossbow-grapple-349",
    name: "Crossbow, Grapple-Firing",
    category: "weapon",
    cost: "70 gp",
    weight: "12 lb.",
    notes:
      "Simple ranged weapon. 1d3 piercing (M), crit x2, range increment 120 ft. A heavy crossbow modified to fire a special grapple-headed metal bolt attached to 100 feet of thin, light rope (see grapple bolts). A successful shot at an appropriate target anchors the rope firmly enough to climb with a successful DC 15 Climb check. On a failure, one of three results applies: the grapple simply failed to snag anything (recoil the rope and try again); it lodged but is not secure enough to support a climber's weight (a successful DC 15 Use Rope check made before anyone climbs reveals the instability; the grapple cannot be freed, but another may be fired — anyone who climbs the unstable rope gets 2d10 feet up before the grapple gives way); or there is simply nothing for it to catch (retries automatically fail). (Full extraction: the live Song and Silence record of this item is a one-line summary; compiled here from the Song and Silence printing.)",
  }),

  // ---- Hitting the Bullseye: chart construction rows (3) ----
  E({
    id: "steel-crossbow-light-349",
    name: "Steel Crossbow, Light",
    category: "weapon",
    cost: "335 gp",
    weight: "4 lb.",
    notes:
      "Chart construction: a light crossbow built of steel (+300 gp over the base weapon), per the Complete Bow and Crossbow Chart's Special Materials, Construction, and Enhancements table (crossbows only). A steel crossbow is stronger than a wooden one and can be wielded in melee as a light mace of the same size, in addition to its normal ranged use (1d8 piercing (M), crit 19-20/x2, range increment 80 ft).",
  }),
  E({
    id: "steel-crossbow-heavy-349",
    name: "Steel Crossbow, Heavy",
    category: "weapon",
    cost: "350 gp",
    weight: "8 lb.",
    notes:
      "Chart construction: a heavy crossbow built of steel (+300 gp over the base weapon), per the Complete Bow and Crossbow Chart's Special Materials, Construction, and Enhancements table (crossbows only). A steel crossbow is stronger than a wooden one and can be wielded in melee as a heavy mace of the same size, in addition to its normal ranged use (1d10 piercing (M), crit 19-20/x2, range increment 120 ft).",
  }),
  E({
    id: "elvencraft-bow-349",
    name: "Elvencraft Bow",
    category: "weapon",
    cost: "+300 gp",
    weight: "As base bow",
    notes:
      "Chart construction (bows only, +300 gp over the base bow), from Races of the Wild as compiled in the Complete Bow and Crossbow Chart. An elvencraft bow is thicker and heavier than a normal bow: an elvencraft shortbow functions as a club in melee, and an elvencraft longbow functions as a quarterstaff. The wielder incurs no penalty on attack rolls when using an elvencraft bow as a melee weapon, can freely interchange melee and ranged attacks during the same round, and threatens the squares around him no matter how he last used the weapon. Magical enhancements to an elvencraft bow only affect its use as a bow; enhancements to its melee capabilities must be added separately.",
  }),

  // ---- Hitting the Bullseye: ammunition (9) ----
  E({
    id: "alchemists-fire-arrow",
    name: "Arrow, Alchemist's Fire",
    category: "weapon",
    cost: "75 gp",
    weight: "1/5 lb.",
    notes:
      "Ammunition (single arrow). 1d4 fire (M), crit x2; range increment three-quarters the firing weapon's (round up to the nearest 10-foot increment). Ammunition damage assumes a longbow or composite longbow; with a shortbow or composite shortbow, reduce the damage die one step.",
  }),
  E({
    id: "alchemists-frost-arrow",
    name: "Arrow, Alchemist's Frost",
    category: "weapon",
    cost: "75 gp",
    weight: "1/5 lb.",
    notes:
      "Ammunition (single arrow). 1d4 cold (M), crit x2; range increment three-quarters the firing weapon's (round up to the nearest 10-foot increment). Ammunition damage assumes a longbow or composite longbow; with a shortbow or composite shortbow, reduce the damage die one step.",
  }),
  E({
    id: "fletched-darts",
    name: "Darts, Fletched (20)",
    category: "weapon",
    cost: "1 gp",
    weight: "1/2 lb.",
    notes:
      "Ammunition (20 darts) for the handbow, used in place of arrows. A fletched dart deals the handbow's damage; wielders commonly employ poisoned darts.",
  }),
  E({
    id: "grapple-bolts",
    name: "Bolts, Grapple (10)",
    category: "weapon",
    cost: "200 gp",
    weight: "8 lb.",
    notes:
      "Ammunition (10 bolts) for a grapple-firing crossbow: grapple-headed metal bolts, each attached to 100 feet of thin, light rope. See the grapple-firing crossbow for the anchoring and failure rules.",
  }),
  E({
    id: "smoking-arrow",
    name: "Arrow, Smoking",
    category: "weapon",
    cost: "30 gp",
    weight: "3 lb.",
    notes:
      "Ammunition (single arrow). 1d4 bludgeoning (M), crit x2; range increment half the firing weapon's (round up to the nearest 10-foot increment). Ammunition damage assumes a longbow or composite longbow; with a shortbow or composite shortbow, reduce the damage die one step.",
  }),
  E({
    id: "splintering-bolt",
    name: "Bolt, Splintering",
    category: "weapon",
    cost: "30 gp",
    weight: "1/5 lb.",
    notes:
      "Ammunition (single bolt). 1d6 piercing (M); the bolt splinters on firing into a 30-foot cone.",
  }),
  E({
    id: "tanglefoot-bolt",
    name: "Bolt, Tanglefoot",
    category: "weapon",
    cost: "60 gp",
    weight: "4 lb.",
    notes:
      "Ammunition (single bolt). Special damage (tanglefoot effect on a hit, as a tanglefoot bag delivered by crossbow); range increment half the firing weapon's (round up to the nearest 10-foot increment).",
  }),
  E({
    id: "tumbling-bolt-349",
    name: "Bolt, Tumbling",
    category: "weapon",
    cost: "5 gp",
    weight: "1/5 lb.",
    notes:
      "Ammunition (single bolt). 1d8 piercing (M), crit 19-20/x2; range increment half the firing weapon's (round up to the nearest 10-foot increment). (Staged as -349 beside the catalog's one-line Arms and Equipment Guide summary of the tumbling bolt, which instead describes a +2 damage bonus; the magazine chart's full stat line governs here.)",
  }),

  // ---- Poisonmaking Guide (1) ----
  E({
    id: "poisoners-kit",
    name: "Poisoner's Kit",
    source: SRC_POISON,
    cost: "100 gp",
    weight: "5 lb.",
    notes:
      "Tools of the poisonmaker's trade: recipe manuals and reagents for making a variety of poisons; the recipe and basic reagents for antitoxin are also included. Using a poisoner's kit grants a +2 circumstance bonus on Craft (poisonmaking) checks, on Craft (alchemy) checks made to create antitoxin, and on Heal checks made to treat poison.",
  }),

  // ---- Animal Battle Gear (6) ----
  E({
    id: "archery-saddle",
    name: "Archery Saddle",
    source: SRC_ANIMAL,
    cost: "120 gp",
    weight: "30 lb.",
    notes:
      "A saddle with a high saddlebow and back that braces the rider, allowing her to hold a bow with both hands; it can be crafted for any kind of animal but is usually made for a horse, and can only be worn by the kind of animal it was designed to fit. The rider gains a +2 bonus on Ride checks made to guide her mount with her knees, and the penalty for using a ranged weapon while on a moving mount is lessened by 1: only a -3 penalty when the mount takes a double move (-1 with the Mounted Archery feat) and a -7 penalty when the mount runs (-3 with Mounted Archery).",
  }),
  E({
    id: "curative-steaks",
    name: "Curative Steaks",
    source: SRC_ANIMAL,
    cost: "Special (as the equivalent potion)",
    weight: "1/2 lb.",
    notes:
      "Thin slabs of uncooked meat soaked in cure potions, easily fed to animal companions on or off the battlefield. When consumed (a full-round action), a curative steak cures an amount of hit points equal to the type of cure potion the meat was soaked in (1d8+1 for a cure light wounds steak, 2d8+3 for cure moderate wounds, and so on). To create one, soak a steak in the contents of a cure potion for at least 8 hours; the steak absorbs the magical liquid (destroying the potion). The market price of a curative steak is the same as that of its equivalent potion. A curative steak remains fresh and viable for up to fourteen days after creation, then spoils and loses its curative properties. Druids with herbivorous animal companions make similar items from millet and grasses held together with honey.",
  }),
  E({
    id: "grotesque-barding",
    name: "Grotesque Barding",
    source: SRC_ANIMAL,
    cost: "+50 gp over ordinary barding of the same type",
    weight: "+10 lb. over ordinary barding of the same type",
    notes:
      "Barding crafted with horns, scales, and other body parts from devils and demons, horrible to behold. An animal wearing grotesque barding takes a -1 penalty on attack rolls but automatically attempts to demoralize any creature it attacks, gaining a +2 circumstance bonus on the Intimidate check; the check is made as part of the animal's attack and requires no conscious choice by the animal nor an additional standard action.",
  }),
  E({
    id: "ram-helmet",
    name: "Ram Helmet",
    source: SRC_ANIMAL,
    cost: "80 gp",
    weight: "20 lb.",
    notes:
      "An ironclad wooden helm, thickly padded inside with leather, covering the animal's face and head and set with two large ram's horns that protrude forward. An animal trained to know the attack trick may charge a door while wearing the helmet (it must have 10 feet in which to charge the doorway) and gains a +2 circumstance bonus on Strength checks made to break open the door. Instead of making a normal attack, an animal wearing a ram helmet and knowing the attack trick can make a gore attack when it charges, as appropriate to its size (1d4 Small, 1d6 Medium, 1d8 Large, 2d6 Huge); the animal only makes a gore attack when commanded to charge in this manner, and an animal that already has a gore attack gains no further bonus.",
  }),
  E({
    id: "spiked-barding",
    name: "Spiked Barding",
    source: SRC_ANIMAL,
    cost: "Special (as adding armor spikes; see the Player's Handbook)",
    weight: "Special (as adding armor spikes; see the Player's Handbook)",
    notes:
      "Barding of any type fitted with spikes, much like ordinary armor. An animal wearing spiked barding that knows the attack and perform tricks can use the spikes to deal extra piercing damage (1d4 Small, 1d6 Medium, 1d8 Large, 2d6 Huge) whenever it grapples or is grappled.",
  }),
  E({
    id: "steel-talons",
    name: "Steel Talons",
    source: SRC_ANIMAL,
    cost: "310 gp",
    weight: "—",
    notes:
      "A set of steel talons fitted to a bird of prey (an eagle, falcon, hawk, owl, or other hunting bird), granting it a +1 circumstance bonus on damage rolls made with its talons. A set is always masterwork and must be fitted to each individual bird. A set of steel talons can be enhanced in the same manner as other weapons (the set is treated as a single weapon for the purpose of enhancing it magically), and sets are rarely made from other materials, such as adamantine or cold iron, with the same cost increases as normal for weapons made from the appropriate material.",
  }),
];
