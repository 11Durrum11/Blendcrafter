// Dragon Magazine #327 (January 2005) — magic item draft: 9 records.
// Blocks: "Bazaar of the Bizarre: Modern Magic" (Robert J. Hahn), pp. 66-68 — SIX
// "modern marvels" (the program survey estimated ~8; the article prints six, its run
// ending on p. 68 with p. 69 a full-page advertisement); and "A Novel Approach:
// Frankenstein" (F. Wesley Schneider), pp. 72-73 — THREE construct augmentations,
// staged here as magic items with category "construct-augmentation" (shape resolved at
// extraction — see MANIFEST: no catalog barrel exists for creation-time construct
// modifications; the #315 graft precedent files body/construct modifications in the
// magic barrel, whose category is a free string). Summaries carry aura/CL/creation
// lines and weight in the house style of recent packs. Every price, CL, and creation
// line was verified against rendered page images (pp. 66-68, 72-73).
// ⚠️ APOC FLAGS — see SCREENING.md: the figurine of delivery is a teleport effect and
// the memory crystal keys off teleport/clairvoyance familiarity (planar travel is
// severed, extra-dimensional magic is dead); Rudimentary Intelligence creates a
// sentient construct (constructs-roster cross-reference in MANIFEST).

import type { MagicItemDefinition } from "@/engine/types";

const SRC_BAZAAR = "Dragon Magazine #327 — Bazaar of the Bizarre: Modern Magic (Robert J. Hahn), pp. 66-68";
const SRC_FRANK = "Dragon Magazine #327 — A Novel Approach: Frankenstein (F. Wesley Schneider), pp. 72-73";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_BAZAAR,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_327_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Bazaar of the Bizarre: Modern Magic ----
  M({
    id: "figurine-of-delivery",
    name: "Figurine of Delivery",
    cost: "32,800 gp",
    summary:
      "A small, poorly carved but brightly painted statue of a humanoid wearing a backpack (most have humanlike shapes, although some are created to look like gnomes or dwarves instead), created by the clerics of Boccob: by placing the figurine on an object and speaking the command word, the user teleports any object smaller than 39 cubic feet and less than 650 pounds, as with the teleport object spell — except that rather than teleporting the object to a known location, the user names a specific creature and the figurine teleports itself and the object under it to a space adjacent to the named creature (if no empty adjacent space exists, the figurine and its object arrive in the closest empty space). The named creature must be on the same plane as the figurine or else the teleport fails and the figurine cannot be used again for 24 hours. The user of the figurine need not know the named creature's current location, and the figurine always teleports to a named creature as if very familiar with the named creature's location (see page 293 of the Player's Handbook). A figurine of delivery can only be used once per day. Strong conjuration; CL 13th; Craft Wondrous Item, teleport object; Weight 2 lb.",
  }),
  M({
    id: "gem-of-location",
    name: "Gem of Location",
    cost: "5,000 gp",
    summary:
      "An ordinary-looking emerald, peridot, or other green gem roughly encased in a small, rough nugget of silver, first created by an ancient elven nation and dedicated to a specific geographical area, from a single forest or village to an entire city: upon command, a gem of location projects a 3-foot square illusionary map of the area programmed into it, initially showing a 1-square-mile area, with additional command words able to direct the gem to alter the image at larger scales (up to the maximum size of the map contained) and to move the center of the illusion to show other areas within the map. A gem can hold enough information necessary to show an area no greater than 100 square miles (an area equal to 10 miles on a side). A gem of location shows all permanent structures and natural formations present within the location it maps at the time of its creation; it does not mark the passage of time, so a found gem's information might be out of date if discovered years after its creation. Accessing a gem of location's information requires a full-round action, but it provides a +5 circumstance bonus on all Knowledge (geography) and Knowledge (local) checks made while consulting the map; to gain these bonuses, the skill checks must pertain to information present on the map. Faint illusion; CL 5th; Craft Wondrous Item, locate object, major image; Weight —.",
  }),
  M({
    id: "horn-of-recording",
    name: "Horn of Recording",
    cost: "750 gp",
    summary:
      "A miniature hollow cornucopia made entirely of bronze with multiple lesser gemstones around its rim, whose tip rotates stiffly, with a small tab locking it into several positions: positioning the point so it faces the mouth of the horn activates its recording ability (a horn can record up to a maximum of 2 hours of sound), positioning the point so that it faces away from the mouth of the horn activates its play ability (when playing, the horn continuously loops through any sound recorded in it), and positioning the point at any other location deactivates the horn. Once filled with 2 hours of sound, the horn can no longer record anything new, and thereafter can only play what it has already recorded. A horn of recording cannot duplicate the verbal component of spells, spell triggers, command words, bardic music, or any other magical effect. Faint illusion; CL 3rd; Craft Wondrous Item, major image; Weight 1 lb.",
  }),
  M({
    id: "memory-crystal",
    name: "Memory Crystal",
    cost: "200 gp",
    summary:
      "A thick quartz crystal lens with irregular, uncut rims — one side highly polished with a transparent finish, the other looking more like a clear gemstone recently cut but unpolished: when a character places an unused crystal to his eye and winks, the image seen through the crystal freezes for eternity on the unpolished side of the gem. Capturing an image in this way is a standard action that provokes an attack of opportunity. The image caught on the unpolished side of the crystal portrays the same image with perfect clarity, but it only shows what a normal human in the current light condition can see, and it never reveals hidden, incorporeal, or invisible creatures or objects. The image caught on a memory crystal is permanent, although the spell permanent image can be cast into a memory crystal to alter an image or create a wholly new representation, and any attempt to remove a picture from a memory crystal, such as with the spells miracle, Mordenkainen's disjunction, or wish, destroys the crystal. For the purposes of a spell such as teleport, a caster who studies a memory crystal's image of a location for 10 minutes can consider it studied carefully; a location studied through a memory crystal also counts as being familiar for the purposes of the clairaudience/clairvoyance spell. Faint illusion; CL 1st; Craft Wondrous Item, silent image; Weight —.",
  }),
  M({
    id: "mirrors-of-communication",
    name: "Mirrors of Communication",
    cost: "30,000 gp for a pair + 10,000 gp for each mirror added to a set",
    summary:
      "Highly polished, elaborately carved hardwood frames surrounding silvered mirrors of around 18 inches in diameter or 2-foot square, developed and commissioned by clerics of Boccob: these items always come in sets of at least two, but a set can have as many as eighteen individual mirrors. A user who speaks while in front of a mirror of communication has his voice projected through the other mirrors in the set, allowing instantaneous communication with anyone looking into one of the other linked mirrors; the user of a mirror of communication linked with only one other mirror sees what lies beyond the other mirror, even with no one there. If multiple users speak at the same time the images and voices of all the speakers overlap within the mirror and become a confusing jumble — a successful Listen check (DC 10 + 5 for each speaker beyond the first) allows a user to discern what one of the speakers is saying. Finally, gaze attacks pass through a mirror of communication and can affect anyone looking at other mirrors in the set. Faint divination; CL 5th; Craft Wondrous Item, clairaudience/clairvoyance; Weight 6 lb.",
  }),
  M({
    id: "slate-folio",
    name: "Slate Folio",
    cost: "7,500 gp",
    summary:
      "A 1-foot by 9-inch piece of gray slate with two gems set within the bottom of the folio and a third gem with five runed facets on the right-hand side of the slate, which can copy up to five other books: by rotating the side gem you can select one of the five books linked to the slate folio, and once you choose a book for viewing the first page of its text appears on the slate folio, after which you may flip forward or backward through the pages by pressing one of the two gems in the bottom of the slate folio. To attune the slate folio to a specific book, you need only place the slate folio on top of the closed book, select with the five-sided gem which of the five slots you wish to attune the book to, and press in on the side gem; it takes an hour for the slate folio to read the book and record its contents, after which time the depressed side gem pops out to its default position. Pressing the gem with no book under the slate folio does nothing; the gem simply doesn't stay in the depressed position. You may overwrite a filled slot simply by selecting that slot and placing the slate folio on top of a book and depressing the side gem. A slate folio can hold any mundane book or spellbook of 100 pages or less; it cannot hold the contents or duplicate the abilities of any magic book, such as a book of exalted deeds or a tome of understanding, or any other form of magical writing, such as a scroll — however, it can hold copies of the pages of nonmagic books that have pages with magical effects on them, such as a sepia snake sigil or secret page spell: when reading through a book with such a magical effect on it, the slate folio shows where the magical glyph, rune, sigil, or other writing is located but replaces it with a nonmagical image indicating the effect's location, and looking at a page with magical writing in the slate folio does not trigger any effect associated with the writing. Faint illusion; CL 5th; Craft Wondrous Item, clairvoyance; Weight 2 lb.",
  }),
  // ---- A Novel Approach: Frankenstein — construct augmentations ----
  // Framework (carried in full on the first record and in reference.md): the benefits
  // and additions presented in the article are available to any construct that meets
  // the construct prerequisites at the time of its creation; any character with the
  // Craft Construct feat can make these additions if he meets the creator requirements
  // detailed with each augmentation; the additions raise the market price and creation
  // cost of the construct by an equal amount, and require additional time equal to
  // 1 day per 1,000 gp in the construct's total price and experience equal to 1/25 of
  // that total, both after customizations; a spellcaster may not make these
  // augmentations to a construct already created, only to new creations he crafts; a
  // construct may have as many additions as its creator is willing to pay for, and the
  // additions might adjust the construct's CR as noted in the individual descriptions.
  M({
    id: "advanced-binding",
    name: "Advanced Binding",
    category: "construct-augmentation",
    cost: "+3,000 gp",
    source: SRC_FRANK,
    summary:
      "Construct augmentation (Frankenstein framework: available to any construct meeting the construct prerequisites at the time of its creation, added during creation by a creator with the Craft Construct feat who meets the creator prerequisites; the cost raises the construct's market price and creation cost by an equal amount, with added time of 1 day per 1,000 gp of the construct's total price and XP equal to 1/25 of that total, both after customizations; augmentations cannot be added to a construct already created). Your construct cannot go berserk. Construct Prerequisites: Construct, berserk extraordinary ability. Creator Prerequisites: Craft Construct, CL 10th. CR Adjustment: +0. The elemental spirit responsible for animating your construct is bound utterly to your will: as such, constructs with the berserk extraordinary ability no longer suffer a chance of going berserk and are for all account and purposes treated as though they lack that ability. A flesh golem with advanced binding costs 23,000 gp and requires a spellcaster to spend 23 days, 13,500 gp, and 920 XP to create.",
  }),
  M({
    id: "extra-arms",
    name: "Extra Arms",
    category: "construct-augmentation",
    cost: "+25% of the construct's market price and cost",
    source: SRC_FRANK,
    summary:
      "Construct augmentation (Frankenstein framework as printed with Advanced Binding in this draft: creation-time only, Craft Construct creator, cost added to the construct's market price and creation cost, added time and XP computed on the total after customizations). Your construct has more than the standard number of arms. Construct Prerequisites: Construct, must have a slam attack. Creator Prerequisites: Craft Construct, CL 14th. CR Adjustment: +1. A construct with this augmentation gains two more arms than normal and may make two additional slam attacks during a full attack action. These additional slam attacks are treated in all ways as the construct's usual slam attacks, with the same attack and damage modifiers. A stone golem with extra arms costs 112,500 gp and requires a spellcaster to spend 112 days, 62,500 gp, and 4,500 XP to create.",
  }),
  M({
    id: "rudimentary-intelligence",
    name: "Rudimentary Intelligence",
    category: "construct-augmentation",
    cost: "+8,000 gp",
    source: SRC_FRANK,
    summary:
      "Construct augmentation (Frankenstein framework as printed with Advanced Binding in this draft: creation-time only, Craft Construct creator, cost added to the construct's market price and creation cost, added time and XP computed on the total after customizations). Your construct possesses intelligence. Construct Prerequisites: Construct, no Intelligence score. Creator Prerequisites: Craft Construct, CL 12th. CR Adjustment: 11 HD or less, as base creature; HD 12-23, as base creature +1; HD 24 or more, as base creature +2. A spellcaster applying this augmentation bestows upon his creation an Intelligence score equal to 1/2 his caster level. In addition to being able to make judgments and decisions as any other creature with a similar Intelligence score, the construct gains feats and skill points befitting an intelligent construct of its Hit Dice (see page 301 of the Monster Manual for information on how to determine and distribute monstrous feats and skill points). This augmentation cannot add additional Intelligence to a construct that normally has an Intelligence score. A golem that gains intelligence in this manner is still bound to the will of its creator as normal. A clay golem with rudimentary intelligence costs 48,000 gp and requires a spellcaster to spend 48 days, 29,500 gp, and 1,920 XP to create; such a golem gains an Intelligence score of 6, four feats, and 14 skill points.",
  }),
];
