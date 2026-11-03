/**
 * Omni sweep wave 2 (2026-11-02): Expanded Psionics Handbook —
 * Chapter 7: Psionic Items (printed pp. 157-182), read in full from
 * Shaun's OCR copy. The book's own pack already cataloged the armor,
 * shield, and weapon special abilities, the ten psicrowns, the seven
 * crystal anchors, the crystal mask of insightful detection, the two
 * named crawling tattoos, the shard, the psionatrixes, both torcs,
 * the skin of proteus, the third eye of view, and the reverse
 * capacitor; a Complete Psionic-derived set already carries the
 * remaining crystal masks, skins, mirrors, eyes, and third eyes
 * under slightly different name forms. What was missing entirely:
 * the four generic power-storage item types (dorje, power stone,
 * psionic tattoo, crawling tattoo), the gloves of titan's grip, the
 * mirror of mind switch, two of the four pearls, all four psionic
 * restraints, and all four psionic artifacts. Many pre-existing
 * records carry prices that disagree with this book (21 conflicts,
 * some extreme — torc of power preservation 4,000 gp in the catalog
 * vs. 36,000 gp printed here; skin of the psion at 90,000 vs.
 * 151,000); per sweep rules they are reported, not edited — see the
 * omni-sweep report. Not built: the special materials (deep
 * crystal, mundane crystal) — they are price modifiers on other
 * items, not standalone purchasable items; and the githyanki silver
 * sword, already cataloged as equipment at the printed 50,530 gp.
 * Prices are the printed market prices; summaries are mechanical
 * effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const XPH_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "dorje-psionic",
    "name": "Dorje (psionic)",
    "category": "wand",
    "cost": "750 gp (1st-level power); 4,500 gp (2nd); 11,250 gp (3rd); 21,000 gp (4th); 33,750 gp (5th); 49,500 gp (6th); 68,250 gp (7th); 90,000 gp (8th); 114,750 gp (9th)",
    "summary": "A slender crystal, 8 to 10 inches long, imbued with a single psionic power and 50 charges; each charge manifests the power once. It is a power trigger item, so the user must have the power on her class list, and stored powers are not augmented unless the dorje was created at a higher manifester level.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 167",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "power-stone",
    "name": "Power Stone",
    "category": "wondrous-slotless",
    "cost": "25 gp × power level × manifester level (per power imprinted)",
    "summary": "A thumb-sized crystal imprinted with one or more psionic powers, each usable once before the stone is flushed. The user must first address the stone (a Psicraft check), then meet the usual requirements — the power on her class list and the requisite key ability score — to manifest the stored power as if it were her own.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, pp. 167–168",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psionic-tattoo",
    "name": "Psionic Tattoo",
    "category": "wondrous",
    "cost": "50 gp (1st-level power); 300 gp (2nd); 750 gp (3rd); powers with a range of personal cost double",
    "summary": "A psionic design scribed on the wearer's skin holding a single power of up to 3rd level that affects only the wearer, who is both manifester and target. Tapping the tattoo activates it, and the design disappears once used.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, pp. 170–171",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "crawling-tattoo",
    "name": "Crawling Tattoo",
    "category": "wondrous",
    "cost": "50 gp (1st-level power); 300 gp (2nd); 750 gp (3rd)",
    "summary": "A psionic tattoo scribed with a power of up to 3rd level that targets creatures. When tapped, it animates as a Fine construct (AC 18, 10 hit points, speed 30 feet), scuttles to the designated target, and delivers its power with a touch attack, shattering if destroyed before it strikes.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, pp. 171–172",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-titans-grip",
    "name": "Gloves of Titan's Grip",
    "category": "wondrous-hands",
    "cost": "14,000 gp",
    "summary": "Oversize gloves that grant a +8 enhancement bonus on grapple checks when the wearer enters a grapple. Each use lasts up to 7 rounds, and the gloves can be used three times per day.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 174",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mirror-of-mind-switch",
    "name": "Mirror of Mind Switch",
    "category": "wondrous-slotless",
    "cost": "19,800 gp",
    "summary": "A small hand mirror that once per day can turn its power on a creature that sees its own reflection within 30 feet, as a gaze attack. A creature failing a DC 19 Will save trades minds with the mirror's wielder, as the mind switch power; the wielder is unaffected by his own reflection.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 174",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pearl-of-mind-seed",
    "name": "Pearl of Mind Seed",
    "category": "wondrous-slotless",
    "cost": "18,500 gp",
    "summary": "A tiny pearly sphere that takes on the handler's skin tone and can be hurled at any target the owner can see within 150 feet. A target failing a DC 22 Will save is affected as if by the mind seed power, with the pearl's wielder as the manifester; using the pearl destroys it.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 175",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pearl-of-personality-parasite",
    "name": "Pearl of Personality Parasite",
    "category": "wondrous-slotless",
    "cost": "1,400 gp",
    "summary": "A tiny pearly sphere hurled at any target the owner can see within 130 feet. A target failing a DC 16 Will save is affected as if by the personality parasite power for 5 rounds; using the pearl destroys it.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 175",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psionic-restraints-lesser",
    "name": "Psionic Restraints, Lesser",
    "category": "wondrous-slotless",
    "cost": "1,000 gp",
    "summary": "An iron cuff that locks around a psionic creature's wrist (DC 27 Open Lock check to escape) and limits the wearer to spending no more than 5 power points in any single round, whatever his reserve.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 175",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psionic-restraints-average",
    "name": "Psionic Restraints, Average",
    "category": "wondrous-slotless",
    "cost": "6,000 gp",
    "summary": "An iron cuff that locks around a psionic creature's wrist (DC 27 Open Lock check to escape) and limits the wearer to spending no more than 3 power points in any single round, whatever his reserve.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 175",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psionic-restraints-greater",
    "name": "Psionic Restraints, Greater",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "An iron cuff that locks around a psionic creature's wrist (DC 27 Open Lock check to escape) and limits the wearer to spending no more than 1 power point in any single round, whatever his reserve.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 175",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psionic-restraints-damping",
    "name": "Psionic Restraints, Damping",
    "category": "wondrous-slotless",
    "cost": "24,000 gp",
    "summary": "An iron cuff that locks around a psionic creature's wrist (DC 27 Open Lock check to escape) and completely damps the wearer's ability to use psionics, allowing no power points to be spent at all.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items, p. 175",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sutra-of-tranquil-thought",
    "name": "Sutra of Tranquil Thought",
    "category": "artifact",
    "cost": "—",
    "summary": "Minor artifact. A monastic tome of mental focus: a nonevil psionic character who studies it through a week of solitary contemplation gains 17 bonus power points and experience enough to stand halfway to the next level, after which the book vanishes to the Astral Plane. An evil reader instead loses 5d6 × 1,000 XP and must save or be permanently confused, and nonpsionic minds see only meaningless patterns in its pages.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items (Psionic Artifacts), p. 178",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "annulus",
    "name": "Annulus",
    "category": "artifact",
    "cost": "—",
    "summary": "Major artifact. A 1-foot silvery ring forged by ancient illithids as the ultimate psionic nullifier: it radiates a continuous catapsi effect out to 100 feet (wielder unaffected), grants +4 on attempts to resist ability damage, can trigger ultrablast once per day and a dimensional anchor-like effect over a 50-foot radius three times per day. Once per year, after 10 rounds of concentration, it can utterly disintegrate designated psionic creatures or items within 100 feet — though nullifying a demigod or another major artifact destroys the Annulus itself.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items (Psionic Artifacts), pp. 178–179",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psicrown-of-the-crystal-mind",
    "name": "Psicrown of the Crystal Mind",
    "category": "artifact",
    "cost": "—",
    "summary": "Major artifact. An elaborate crystalline psicrown holding 1,000 power points (recharging 1 point per day) that the wearer can spend on a fixed list of powers — including burst, catfall, greater concealing amorpha, dominate, telekinetic powers, psionic teleport, and true metabolism — at manifester level 20th. The wearer also gains power resistance equal to 10 + his manifester level, and as a one-time use can discharge all remaining points as an uncontrolled burst dealing damage to everyone within 20 feet, destroying the crown.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items (Psionic Artifacts), p. 179",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-ancient-penumbra",
    "name": "Staff of Ancient Penumbra",
    "category": "artifact",
    "cost": "—",
    "summary": "Major artifact. An intelligent (lawful evil, Ego 18) +5 quarterstaff of near-indestructible substare, dedicated to illithid rulership and prone to personality conflicts with owners who won't serve that purpose. On a critical hit it lashes out with a 5d6 fire energy bolt, which the wielder can also direct at a target within 15 feet; it grants extra saving throws three times per day, manifests body adjustment on the wielder up to five times per day, lets the wielder see through darkness and other obscurants and briefly through solid objects, and can grant true seeing once per day if doing so serves its purpose.",
    "source": "Expanded Psionics Handbook — Chapter 7: Psionic Items (Psionic Artifacts), pp. 179–180",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const XPH_EQUIPMENT_OMNI: EquipmentItem[] = [];
