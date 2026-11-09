import type { EquipmentItem } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #315 pack (library-staging/packs/dragon-magazine/issue-315)
// The issue's two equipment records:
//   * Sharktooth gauntlet, from the Taladas article (p. 41) — the
//     weapon this issue's Shark Cultist prestige class is built
//     around.
//   * Crimson essence, from the Red Steel article (p. 68) — the
//     alchemical draught the Inheritor feat requires.
// Transcribed from the magazine text on archive.org
// (DragonMagazine315_djvu.txt).
//
// OVERLAP (see MANIFEST.md): the sharktooth gauntlet is the one
// catalog record that already cites this issue — a fan-index
// pickings record (id "sharktooth-gauntlet", from the crystalkeep
// d20 Equipment Index, cited in PROGRAM.md). Per the program rule,
// the real extraction supersedes the fan-index record where they
// overlap and this record ships suffixed -315; both records stand.
// The extraction confirms the fan index's 18–20/x2 critical (the
// magazine OCR reads "13-20", a misread of 18–20) and adds the Small
// damage die and the counts-as-armed line the index lacked.
//
// Crimson essence staging call (see MANIFEST.md): it is a priced,
// purchasable consumable with a full preparation and effect block,
// so it stages as an equipment record; the Red Curse system it plugs
// into is a variant rule with no catalog mechanism and is written up
// in full in reference.md.

const DM315 = "Dragon Magazine #315";
const DM315_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt";

export const DRAGON_315_EQUIPMENT: EquipmentItem[] = [
  {
    id: "sharktooth-gauntlet-315",
    name: "Sharktooth Gauntlet",
    category: "weapon",
    cost: "10 gp",
    weight: "1 lb.",
    notes: "Exotic light melee weapon (price is for a single gauntlet): damage (S) 1d3, (M) 1d4, critical 18–20/x2, piercing or slashing. A spiked gauntlet lined with shark's teeth; attacking with it counts as an armed attack, and it cannot be disarmed. Dragon #315 printing (Taladas article, p. 41); supersedes the catalog's fan-index record of the same weapon (id sharktooth-gauntlet) where they overlap.",
    source: DM315,
    sourceUrl: DM315_PATH,
    ruleset: "core",
  },
  {
    id: "crimson-essence",
    name: "Crimson Essence",
    category: "alchemical item",
    cost: "750 gp",
    weight: "—",
    notes: "A draught of vermeil, crushed cinnabryl, and red wine, used with the Inheritor feat (see the feats draft and the Red Curse system in reference.md). Preparing a dose requires a successful DC 25 Craft (alchemy) check and 90 gp of materials. A dose must be attuned to its user — worn next to the skin for one week — before it is drunk, or it has no effect. A character not eligible for the Inheritor feat who drinks a properly prepared and attuned dose temporarily gains a random legacy and takes 2 points of ability damage to its associated ability score (this damage cannot be healed by magic or rest); the temporary legacy can be used up to three times in the following 24 hours (subject to its normal limits; a legacy already possessed gains three additional uses). At the end of 24 hours the legacy vanishes and the character makes a DC 18 Fortitude save: on a success the ability damage also vanishes; on a failure it becomes permanent ability drain. A second dose has no further effect on a character who already has a temporary legacy. Weight not printed in source.",
    source: DM315,
    sourceUrl: DM315_PATH,
    ruleset: "core",
  },
];
