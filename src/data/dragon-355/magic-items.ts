// Dragon Magazine #355 (May 2007) — magic item draft: 3 records.
// All three come from the dealer sidebars of "Savage Tidings: The Market
// Is Bad" (James Jacobs and Richard Pett), pp. 64-69 — the Scuttlecove
// market column the program survey filed as reference-only. The issue
// itself governs over the survey: each item prints a complete Magic
// Item Compendium-format stat line (price and item level, body slot,
// caster level, aura, activation, weight, prerequisites, cost to
// create), the same record shape as the Bazaar items staged throughout
// this program. They stage here; the divergence from the survey tag is
// flagged prominently in SCREENING.md.
//   - Cadgraydian's Welcome Embrace (cursed item), p. 67.
//   - Figurine of Wondrous Power (Porphyry Snake), p. 67.
//   - Insidious Seaweed, p. 67.
// Every price, aura, CL, and weight line was verified against the
// rendered page image (magazine p. 67); the image governs over the OCR
// stream — it corrects the seaweed's aura DC (16, not 26) and confirms
// the figurine's printed CL 5th (low for its prerequisites; carried as
// printed and noted in SCREENING.md).
// ⚠️ APOC FLAGS — see SCREENING.md: the embrace works by summoning
// viper swarms and the figurine's creation requires summon monster III;
// summoning does not work in APOC. Both stage as printed with the flag
// on the record, per the cursed-item and Bazaar precedents — Shaun's
// call at integration.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_SAVAGE = "Dragon Magazine #355 — Savage Tidings: The Market Is Bad (James Jacobs and Richard Pett), pp. 64-69";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_SAVAGE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_355_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "cadgraydians-welcome-embrace",
    name: "Cadgraydian's Welcome Embrace",
    cost: "500 gp",
    summary:
      "Cursed item (wondrous) — sold by the Scuttlecove enchanter Ingram Cadgraydian. Price (Item Level): 500 gp (3rd). Body Slot: Back. Caster Level: 5th. Aura: Moderate (DC 17), conjuration. Activation: —. Weight: 3 lb. This fine cloak is made of a deep-hued fine wool that, on close inspection, has the vague figures of snakes woven within. When donned, this cloak changes to become a trio of viper swarms (Fiend Folio, 172) that instantly attack the wearer. The cloak is destroyed when the swarms are summoned. Prerequisites: Create Wondrous Item, summon swarm. Cost to Create: 250 gp, 10 XP, 1 day. APOC: the item's curse works by summoning — summoning spells do not work in APOC; staged as printed, flagged in SCREENING.md.",
  }),
  M({
    id: "figurine-of-wondrous-power-porphyry-snake",
    name: "Figurine of Wondrous Power (Porphyry Snake)",
    cost: "16,000 gp",
    summary:
      "Wondrous item — sold in Scuttlecove. Price (Item Level): 16,000 gp (14th). Body Slot: — (held). Caster Level: 5th (as printed; low for the item's prerequisites — carried as printed, see SCREENING.md). Aura: Faint (DC 17), transmutation. Activation: Standard (command). Weight: 2 lb. This dark, purplish-red stone winged snake is coiled as if ready to strike. When activated, the porphyry snake becomes a normal winged viper (Forgotten Realms Campaign Setting, 309) who obeys your every command. The item can be used twice per week for up to 6 hours per use. When 6 hours have passed, when you speak the command word again, or if the winged viper is reduced to 0 hit points, the porphyry snake once again becomes a tiny statue. Prerequisites: Craft Wondrous Item, animate objects, summon monster III. Cost to Create: 8,000 gp, 640 XP, 16 days. APOC: a figurine's creature is an animated/transmuted servant rather than a called outsider, but its printed creation calls for a summoning spell — flagged in SCREENING.md.",
  }),
  M({
    id: "insidious-seaweed",
    name: "Insidious Seaweed",
    cost: "3,200 gp",
    summary:
      "Wondrous item — sold in Scuttlecove. Price (Item Level): 3,200 gp (8th). Body Slot: — (held). Caster Level: 3rd. Aura: Faint (DC 16), transmutation. Activation: Standard (command). Weight: —. This brittle strand of dried seaweed bears a rough texture and a slight briny smell. Once per day, when you activate the insidious seaweed, it quickly grows to many times its size, duplicating the effects of an entangle spell for 3 minutes, centered on you (DC 11). You are not affected by the entangling plants created by your own insidious seaweed as long as you hold it; if you let go of the seaweed you are affected by its entangling plants as normal. Insidious seaweed does not need nearby plants to work, as it creates its own. You can end the effect prematurely by uttering the command word a second time. Prerequisites: Craft Wondrous Item, entangle. Cost to Create: 1,600 gp, 128 XP, 3 days.",
  }),
];
