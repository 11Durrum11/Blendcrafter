import type { MagicItemDefinition } from "@/engine/types";

// Explorer's Handbook (Eberron, Wizards of the Coast, 2005)
// magic items: the Appendix's Ancient Treasures (pp. 149-157)
// — the Giant Antiquities and Dhakaani Antiquities that the
// book gives full item write-ups — except those already in
// the catalog from later reprints (see the pack report):
// the Life Ring (p. 31), Twilight armor ability (p. 154),
// Vanguard Treads (pp. 154-155), Banner of the Storm's Eye
// (pp. 155-156), and Robe of Arcane Might (p. 153) all
// already exist as records sourced to the Magic Item
// Compendium / Book of Exalted Deeds, so they are not
// duplicated here. The appendix's two treasure tables
// (pp. 150, 156) list art objects and priced instances of
// these items (drake-helm and necklace combinations, the
// twilight armors, the wands) — the tables themselves are
// treasure dressing, not additional items. Transcribed
// from Shaun's own copy (text-extracted), 2026-11-05.
// Summaries are short mechanical paraphrases in our own
// words, per house style.

const EH_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Explorer's Handbook.pdf";

export const EXPLORERS_HANDBOOK_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "disc-of-absorptive-negation",
    name: "Disc of Absorptive Negation",
    category: "wondrous-slotless",
    cost: "4,000 gp (4,500 gp for the variant granting a one-time +4 bonus on dispel checks)",
    summary: "A golden disc, about five inches across, with a Siberys dragonshard set through it; it functions only for spellcasters. When you cast dispel magic or greater dispel magic with the disc in hand, the disc absorbs the magical energy of one spell you dispel (the highest-level spell, if you dispel more than one). Any time within the next 24 hours, you can use the stored spell energy to cast any single spell you have prepared or know without expending a spell slot: the stored spell levels must be equal to or greater than the level of the spell you cast, material components must still be present, and the disc must be in hand. Stored energy cannot be split between spells; unused levels are lost, and the dragonshard shatters when you call on its energy (the disc itself remains, worth 50 gp). Unused energy dissipates harmlessly after 24 hours. Moderate abjuration; CL 11th.",
    source: "Explorer's Handbook, pp. 150-151",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "drake-helm",
    name: "Drake-Helm",
    category: "wondrous-head",
    cost: "1,000 gp (one socket); 8,000 gp (two sockets); 18,000 gp (three sockets); 32,000 gp (four sockets)",
    summary: "A black metal helm styled with reptile scales, folded dragon-wing ear guards, and a spiny crest holding one to four sockets for attuned Siberys dragonshards. The helm itself does nothing; each attuned dragonshard set into it gives a spontaneous arcane spellcaster (such as a sorcerer or bard) an extra arcane spell known of the shard's level — the spell is on the wearer's spell list just as if chosen normally, though the wearer must still provide the spell slot. Attaching or removing a dragonshard is a move action that provokes attacks of opportunity, and others cannot remove the shards. The spell within a shard can be changed once per month by casting a spell into it (as with a ring of spell storing), and a shard will also hold a spell of less than its maximum level. Weight 3 lb., plus 1 lb. per dragonshard. The helm is always strong transmutation, CL 12th.",
    source: "Explorer's Handbook, pp. 151-152",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "attuned-siberys-dragonshard",
    name: "Attuned Siberys Dragonshard (Drake-Helm)",
    category: "wondrous-slotless",
    cost: "6,000 gp (1st-level spell); 9,000 gp (2nd); 14,000 gp (3rd); 26,000 gp (4th); 35,000 gp (5th); 46,000 gp (6th); 69,000 gp (7th); 84,000 gp (8th); 101,000 gp (9th)",
    summary: "A Siberys dragonshard of the finest quality, attuned to hold a single arcane spell for a drake-helm: set into a drake-helm worn by a spontaneous arcane spellcaster, it grants that spell as an extra spell known. Only the finest Siberys dragonshards can be attuned; attuning requires the Craft Wondrous Item feat and a creator able to cast spells of the relevant level. The spell within can be changed once per month by casting a spell into the shard, and a shard can hold a spell of less than its maximum level. Faint (1st-2nd), moderate (3rd-5th), or strong (6th-9th) transmutation; CL 2nd (1st), 4th (2nd), 6th (3rd), 8th (4th), 10th (5th), 12th (6th), 14th (7th), 16th (8th), 18th (9th).",
    source: "Explorer's Handbook, p. 152",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "monocle-of-the-ebon-hunter",
    name: "Monocle of the Ebon Hunter",
    category: "wondrous-face",
    cost: "18,000 gp (lesser); 38,000 gp (greater)",
    summary: "An embedded warforged component (functions only for warforged): a coin-sized lens of smoky crystal in a wire frame attached at the temple, occupying the body's lenses/goggles space. Embedding or detaching it is a standard action that does not provoke attacks of opportunity; only one monocle can be worn at a time. Both versions grant darkvision out to 60 feet. A lesser monocle grants a +1 competence bonus on ranged attacks made against targets within 60 feet; a greater monocle grants a +2 competence bonus on such ranged attacks and a +1 competence bonus on damage rolls if those attacks hit. Moderate transmutation; CL 6th.",
    source: "Explorer's Handbook, p. 152",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "necklace-of-the-phantom-library",
    name: "Necklace of the Phantom Library",
    category: "wondrous-throat",
    cost: "15,000 gp",
    summary: "A golden chain necklace with five lozenge-shaped Siberys dragonshards: the ancient giants' equivalent of a spellbook. It holds 500 pages' worth of spells, which appear as yellow-orange sigils floating about two feet in front of the wearer's face (granting total concealment to anyone who isn't adjacent to the wearer while worn). Inscribing a new spell takes only 8 hours and costs no material components (instead of the usual 100 gp per page); unwanted spells can be purged with a moment's thought. Putting the necklace on or taking it off is a standard action; moving from spell to spell is a free action. Only wizards can use the spells within. Moderate illusion; CL 11th.",
    source: "Explorer's Handbook, pp. 152-153",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "raven-skull-rod",
    name: "Raven Skull Rod",
    category: "rod",
    cost: "4,000 gp",
    summary: "A 1-foot ebony rod topped with a shellacked raven skull, built in batches of six to twelve by Dhakaani crafters; a single rod is useless (and worthless to most merchants) — the rod works only with two or more rods made in the same batch. Three times per day, by holding the rod and speaking the names of one or more other raven skull rods in the batch followed by a message of up to 25 words (a move action), you send the message: each named rod emits a whispered screech for 1 round, says the name of your rod, and repeats your message word for word in a harsh whisper over the next round. Range 3 miles. Faint transmutation; CL 3rd.",
    source: "Explorer's Handbook, p. 157",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "tunic-of-thurrinak",
    name: "Tunic of Thurrinak",
    category: "wondrous-body",
    cost: "5,000 gp (+1); 20,000 gp (+2); 45,000 gp (+3); 80,000 gp (+4); 125,000 gp (+5)",
    summary: "A reddish-brown tunic of Dhakaan's Thurrinak warrior clan (the darker the brown, the more powerful), worn in the vest/vestment body space. It simultaneously hardens the wearer's skin and surrounds the body with a protective field: it provides an equal enhancement bonus to natural armor and deflection bonus to Armor Class, from +1 (weakest) to +5 (strongest). Faint (+1), moderate (+2 or +3), or strong (+4 or +5) abjuration; CL 3rd (+1), 6th (+2), 9th (+3), 12th (+4), or 15th (+5).",
    source: "Explorer's Handbook, p. 157",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
];
