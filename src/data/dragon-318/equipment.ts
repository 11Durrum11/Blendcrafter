import type { EquipmentItem } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #318 pack (library-staging/packs/dragon-magazine/issue-318)
// The two Pirate Weapons from "X Marks the Spot" (p. 53), transcribed
// from the printed table and weapon texts and verified against the
// page image of DragonMagazine318.pdf.
//
// Supersede notes (see MANIFEST.md): the catalog already holds a
// fan-index Hook record citing this very article (core/new-equipment
// .json, "Dragon Magazine #318, p.53 (fan index: crystalkeep.com d20
// Equipment Index)") whose notes carry only the Medium damage line;
// the magazine extraction stages suffixed hook-318 with the full
// printed text, both stand. The catalog's Cutlass cites Stormwrack
// (p. 107) and lists the damage type as slashing only; the magazine
// printing (slashing and piercing, with the basket-hilt text and the
// Forgotten Realms Campaign Setting origin note) stages suffixed
// cutlass-318, both stand.

const DM318 = "Dragon Magazine #318";
const DM318_PATH =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine318_djvu.txt";

export const DRAGON_318_EQUIPMENT: EquipmentItem[] = [
  {
    id: "hook-318",
    name: "Hook",
    category: "weapon",
    cost: "8 gp",
    weight: "1 lb.",
    notes:
      "Simple light melee weapon; 1d3 (Small) / 1d4 (Medium) damage; ×4 critical; piercing. A prosthetic appendage securely attached in place of a missing hand (the character must first be missing a hand, right or left). A character using a hook cannot be disarmed, but suffers a −2 penalty on all skill checks requiring the use of hands. Attacks made with a hook count as natural attacks.",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
  {
    id: "cutlass-318",
    name: "Cutlass",
    category: "weapon",
    cost: "15 gp",
    weight: "3 lb.",
    notes:
      "Martial light melee weapon; 1d4 (Small) / 1d6 (Medium) damage; 19–20/×2 critical; slashing and piercing. A short, heavy, slightly curved blade; its heavy basket hilt gives the wielder a +2 circumstance bonus on any checks to resist being disarmed. The cutlass first appeared in the Forgotten Realms Campaign Setting.",
    source: `${DM318} — X Marks the Spot`,
    sourceUrl: DM318_PATH,
    ruleset: "core",
  },
];
