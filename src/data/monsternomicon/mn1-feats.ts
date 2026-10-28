import type { FeatDefinition } from "@/engine/types";

// Monsternomicon vol. 1 (Privateer Press, 2002): the
// appendix's Playable Races section prints one racial feat,
// Stronghammer Smith, in the Ogrun entry (p. 239). The
// 3.0-era prerequisites ("Str 15+, Int 8+") are recorded in
// modern form. Short mechanical summary in our own words,
// cited to book + page.
// Source PDF: /transfer/DnD-3.5/10937613-Iron-Kingdoms-Monsternomicon-v1.pdf

const MN1 = "Iron Kingdoms Monsternomicon, vol. 1";
const MN1_PATH = "/transfer/DnD-3.5/10937613-Iron-Kingdoms-Monsternomicon-v1.pdf";

export const MONSTERNOMICON_MN1_FEATS: FeatDefinition[] = [
  { id: "stronghammer-smith", name: "Stronghammer Smith", category: "race-specific", ruleset: "iron_kingdoms", prerequisites: ["Str 15", "Int 8", "ogrun"], benefitSummary: "This feat allows an ogrun to apply his Strength modifier to any Craft (blacksmithing, armorsmithing, or weaponsmithing) check. The Strength modifier is cumulative with any Intelligence bonus or penalty and is also cumulative with the racial bonus to metal Craft checks.", special: "This feat can only be learned by ogrun. (The book prints the prerequisites in 3.0 form: \"Str 15+, Int 8+, ogrun only.\")", source: `${MN1} — Ogrun (p. 239)`, sourceUrl: MN1_PATH },
];
