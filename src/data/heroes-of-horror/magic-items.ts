import type { MagicItemDefinition } from "@/engine/types";

// Heroes of Horror (WotC, D&D 3.5) magic items — the
// book prints exactly one priced, creatable magic item:
// the Rod of Sanctity (p. 133). The same section's other
// entries (Acererak's Robe, the Blade of Valgyr, and the
// Rod of Cas) are unique artifacts with no price or
// creation cost and are not built as records.
// Transcribed from Shaun's own copy.

const HOH = "Heroes of Horror";
const HOH_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Heroes Of Horror.pdf";

export const HEROES_OF_HORROR_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "rod-of-sanctity",
    name: "Rod of Sanctity",
    ruleset: "core",
    category: "rod",
    cost: "36,805 gp",
    summary: "A black iron rod inlaid with lapis lazuli, created by the ancient purifiers of the Hallowed Doctrine. It functions as a +2 bane light mace against any creature with a taint score, and as a masterwork light mace against all other creatures. It grants a +2 resistance bonus on saves made to resist gaining taint. If wielded by a purifier of the Hallowed Doctrine, it adds +4 to his effective purifier level and +2 to his effective Charisma modifier for purposes of smiting tainted creatures or turning tainted creatures. Strong abjuration; CL 11th; Craft Wondrous Item, must be capable of channeling positive energy specifically against taint; cost to create 18,250 gp + 1,460 XP (as printed: \"Cost 18,250 + 1,460\"); weight 8 lb.",
    source: `${HOH}, p. 133`,
    sourceUrl: HOH_PATH,
  },
];
