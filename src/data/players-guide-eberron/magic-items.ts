import type { MagicItemDefinition } from "@/engine/types";

// Player's Guide to Eberron (Wizards of the Coast, 2006) —
// magic items. The book prints only one wondrous item that
// the catalog lacked: the zaelshin tu (p. 145), the
// revenant ancestor relic. Its three specific weapons
// (bloodstone blade, nightshard maul, twinblade scourge)
// are filed in equipment.ts, following the Explorer's
// Handbook pack's house convention for specific weapons.
// The book's Artificer's Monocle (p. 63; 19,000 gp) is NOT
// built: the Magic Item Compendium version of the same
// item (1,500 gp, with an added detect magic trigger) is
// already in the catalog — see the extraction report.
// Transcribed from Shaun's own copy (text-extracted,
// 2026-11-05). Summaries are short mechanical paraphrases
// in our own words; no book prose is reproduced.

const PG = "Player's Guide to Eberron";
const PG_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Player's Guide to Eberron.pdf";

export const PLAYERS_GUIDE_TO_EBERRON_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "zaelshin-tu",
    name: "Zaelshin Tu",
    category: "wondrous-throat",
    cost: "1,800 gp",
    summary: "An amulet of platinum inlaid with precious stones, formed around a physical relic (a tooth or sliver of bone) of a particular Tairnadal elf hero, whose sigil it bears; it occupies the amulet (neck) body slot. Only a Tairnadal elf descended from the hero whose sigil adorns the amulet gains any benefit from it (any other character who wears one triggers a hostile reaction from any Tairnadal he encounters), and only a revenant blade can use all its functions. Wearing it requires no special activation: you gain a +2 competence bonus on Hide and Move Silently checks and a +2 circumstance bonus on Diplomacy checks made to influence another Tairnadal elf. If you are also a revenant blade, when you use your ancestral guidance class feature you gain one extra bonus feat (a 1st-level revenant blade has access to two bonus feats, a 3rd-level character to three, and a 5th-level character to four). A zaelshin tu tied to a particular ancestor might grant a competence bonus on different skills rather than Hide and Move Silently. Weight 1 lb. (faint transmutation and necromancy; CL 5th. Construction: Craft Wondrous Item, speak with dead, a relic of the particular elf hero, 900 gp, 72 XP, 18 days.)",
    source: `${PG}, p. 145`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
];
