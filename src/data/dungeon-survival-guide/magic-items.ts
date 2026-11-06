import type { MagicItemDefinition } from "@/engine/types";

// Dungeon Survival Guide (WotC, D&D 3.5) — Treasures of
// Legend (printed pp. 20-21), transcribed from Shaun's own
// copy. This is the book's only record-shaped content: eight
// artifacts presented as headed item write-ups in an items
// chapter. They are modeled as Magic Items records with
// category "artifact" and cost "—", the catalog's existing
// convention for artifacts (see the DMG artifacts in
// src/data/core/audit-magic-items-artifacts-specifics.ts and
// core/magic-items.ts).
//
// IMPORTANT: this book is a 64-page player's primer, and its
// artifact write-ups are narrative DIGESTS, not stat blocks.
// The summaries below condense only what this chapter
// actually prints — no Dungeon Master's Guide mechanics
// (charges, caster levels, save DCs, full card lists) have
// been imported to fill them out. Seven of the eight records
// duplicate, under the same id, a fuller artifact record the
// catalog already carries from the DMG/SRD; the manifest in
// this staging folder names each one, and dedupe at
// integration should keep the fuller record. The eighth
// (Book of Exalted Deeds) has no artifact record anywhere in
// the catalog under that name or id, so it may be this pack's
// only net-new record — still a digest, as printed here.
//
// The Hand and Eye of Vecna share one section in the book
// but are written as two records, matching the catalog's
// existing convention (separate eye-of-vecna and
// hand-of-vecna records).
//
// Both Treasures of Legend pages were verified against
// rendered pages of the PDF: the text layer garbles the
// book's decorative display type, but the chapter body text
// reads cleanly and matches the renders.

const DSG = "Dungeon Survival Guide";
const DSG_PATH = "workspace/library-staging/books/dungeon-survival-guide.pdf";

export const DUNGEON_SURVIVAL_GUIDE_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "book-of-exalted-deeds",
    name: "Book of Exalted Deeds",
    ruleset: "core",
    category: "artifact",
    cost: "—",
    summary: "Minor artifact; a holy book sacred to divine spellcasters that specifically aids good-aligned clerics. Reading the sacred book increases a cleric's Wisdom and experience, making him or her immediately more powerful. An evil cleric who reads the tome immediately loses an equivalent amount of Wisdom and power. Once read, the artifact disappears until some adventurer finds its new hiding place.",
    source: DSG,
    sourceUrl: DSG_PATH,
  },
  {
    id: "deck-of-many-things",
    name: "Deck of Many Things",
    ruleset: "core",
    category: "artifact",
    cost: "—",
    summary: "Artifact; a set of cards or plaques made of ivory, engraved with sigils and glyphs and usually kept in a leather pouch. Only one card can be drawn from the deck at a time, and when a card is drawn, its magic is bestowed upon the user — for better or for worse. Upon finding a deck, a user can decide to draw a small number of cards; these cards must be drawn and revealed within one hour, or the cards flip out of the deck on their own. Cards the book names include the Fates (avoid any single situation you choose), the Key (gain a major magic weapon), and the Ruin (you immediately lose all of your wealth and possessions).",
    source: DSG,
    sourceUrl: DSG_PATH,
  },
  {
    id: "hammer-of-thunderbolts",
    name: "Hammer of Thunderbolts",
    ruleset: "core",
    category: "artifact",
    cost: "—",
    summary: "Artifact; a legendary dwarven warhammer that returns when thrown and is more accurate and damaging than a normal warhammer. If it is combined with a belt of giant strength and gauntlets of ogre power, it becomes even more powerful: it kills giants with a single hit, and unleashes a stunning clap of thunder when hurled.",
    source: DSG,
    sourceUrl: DSG_PATH,
  },
  {
    id: "sphere-of-annihilation",
    name: "Sphere of Annihilation",
    ruleset: "core",
    category: "artifact",
    cost: "—",
    summary: "Artifact; a two-foot-diameter ball of absolute blackness, a terrible artifact of destructive power. It appears as a black hole set in a wall or on the floor. Any matter that comes in contact with the sphere is sucked into the nothingness and utterly destroyed.",
    source: DSG,
    sourceUrl: DSG_PATH,
  },
  {
    id: "staff-of-the-magi",
    name: "Staff of the Magi",
    ruleset: "core",
    category: "artifact",
    cost: "—",
    summary: "Artifact; a long, wooden staff covered in sigils and runes. A wizard who wields the staff receives resistance against spells cast against him, as well as access to a variety of arcane spells; spells that can be cast from the staff include detect magic, mage armor, fireball, lightning bolt, web, and plane shift. The staff can also be used to deliver a retributive strike: the wielder can purposely break the staff, unleashing its stored power in a 30-foot spread that damages everyone in range, and the wielder either gets blasted to another plane of existence or is utterly destroyed in the process.",
    source: DSG,
    sourceUrl: DSG_PATH,
  },
  {
    id: "eye-of-vecna",
    name: "Eye of Vecna",
    ruleset: "core",
    category: "artifact",
    cost: "—",
    summary: "Artifact; the mummified eye of Vecna, the archlich who became a god. The eye must replace the user's own eye, and it stays with its host until death. With the eye, a host has access to a number of evil abilities, including dominion, destruction, and unhallow spells, as well as darkvision and true seeing. A person who bears both the eye and the hand of Vecna gains additional powers, but the temptation to commit evil acts is even greater when a person hosts both artifacts.",
    source: DSG,
    sourceUrl: DSG_PATH,
  },
  {
    id: "hand-of-vecna",
    name: "Hand of Vecna",
    ruleset: "core",
    category: "artifact",
    cost: "—",
    summary: "Artifact; the mummified hand of Vecna, the archlich who became a god. The hand replaces the severed hand of its host and bestows a number of evil abilities until it is removed — which results in the host's death. The hand can draw life force from a victim or inflict cold damage on one, as well as cast blasphemy and unholy aura. A person who bears both the hand and the eye of Vecna gains additional powers, but the temptation to commit evil acts is even greater when a person hosts both artifacts.",
    source: DSG,
    sourceUrl: DSG_PATH,
  },
  {
    id: "orbs-of-dragonkind",
    name: "Orbs of Dragonkind",
    ruleset: "core",
    category: "artifact",
    cost: "—",
    summary: "Artifacts; a set of orbs created in an ancient age, during the time of the terrible Dragon Wars, each magically linked to a specific dragon type — a red dragon orb, for example, allows the bearer to control red dragons and provides protection from a red dragon's breath attack. Those who possess the orbs can communicate with one another, always know the location of dragons tied to their orbs, and gain an individual power invoked from an orb. They also forever earn the enmity of all dragonkind, for dragons hate the orbs and the potential for enslavement that they represent.",
    source: DSG,
    sourceUrl: DSG_PATH,
  },
];
