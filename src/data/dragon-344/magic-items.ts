// Dragon Magazine #344 (Jun 2006) — magic items draft: 2 records.
// Amulet of the silent word — "Dreadhold" (Keith Baker & Jason
// Bulmahn), pp. 70–82, Tools of the Trade, p. 82 (image-verified).
// Elixir of aranea ichor — the sidebar in "Voyage of the Princess Ark"
// (Bruce Heard), pp. 62–69, printed p. 68 (image-verified).
// The issue's third magic item, the gloves of the locksmith (Web
// Supplement), is an identical reprint of the live Sharn: City of
// Towers record and digests in reference.md instead.
// House shape (per the #331 pack): aura/CL/creation/weight line rides
// inside the summary.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_DREAD = "Dragon Magazine #344 — Dreadhold: Tools of the Trade (Keith Baker & Jason Bulmahn), p. 82";
const SRC_ARK = "Dragon Magazine #344 — Voyage of the Princess Ark (Bruce Heard), p. 68";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type MagicSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: MagicSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_DREAD,
    sourceUrl: SRC_URL,
    ruleset: "eberron",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_344_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "amulet-of-the-silent-word",
    name: "Amulet of the Silent Word",
    cost: "500 gp",
    summary:
      "This amulet allows its wearer to trigger password wards — such as alarm, fire trap, and glyph of warding spells — without making any noise. As a free action, the amulet's wearer can trigger a password ward simply by thinking the appropriate password. He must know the exact location of the ensorcelled object or area, and the amulet can trigger wards up to 110 feet away as long as there is a clear line of sight to the warded area or object. Faint transmutation; CL 1st; Craft Wondrous Item, message; Price 500 gp; Weight —.",
  }),
  M({
    id: "elixir-of-aranea-ichor",
    name: "Elixir of Aranea Ichor",
    cost: "1,400 gp",
    summary:
      "This medicinal elixir is brewed for araneas (magical spiderlike creatures of Herath, in Mystara) that lack the natural ability to transform into human shape. For a drinker who is not an aranea, the elixir instead functions as an alter self spell, with the following exceptions: the drinker adopts the appearance, size, voice, speech patterns, mannerisms, personality, and smell of the first creature of his own type that he sees after drinking it, but gains none of that subject's memories, knowledge, or skills. The drinker must succeed on a DC 16 Will save to remember his own past identity and overcome the personality issues, or he remains convinced he is the other person until the elixir wears off. Its duration is 48 hours, less 2 hours for each point of the drinker's Intelligence (minimum 2 hours). Moderate transmutation; CL 7th; Brew Elixir (as printed — an unusual prerequisite; see SCREENING.md), polymorph; Price 1,400 gp; Weight —.",
    source: SRC_ARK,
    ruleset: "core",
  }),
];
