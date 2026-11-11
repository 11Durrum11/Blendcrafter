// Dragon Magazine #338 (December 2005) — magic item draft: 3 records.
// TWO from "Class Acts: Animal Magic" (William L. Christensen),
// p. 91 — magic gear for animal companions: the Barding of Size
// Alteration and the Spectral Collar.
// ONE from "Class Acts: The Elk King" (Richard Farrese), p. 95 —
// the Mantle of the Elk King, presented in the column's "New Magic
// Item" sidebar. The mantle is essentially priceless (one belongs to
// each guildhall of the Fraternity of the Elk King, and the secret
// of its construction is lost), so no price is printed; its cost
// stages as "—" per the house convention for priceless items (cf.
// the issue-330 Wraithblade).
// Every price, aura, CL, and weight line was verified against
// rendered page images (magazine pp. 91, 95); the image governs over
// the OCR stream.
// ⚠️ APOC FLAG — see SCREENING.md: the mantle's twice-daily power
// summons dire elk (as summon nature's ally IV), and summoning does
// not work in APOC; the item stages as printed with the flag, per
// the issue-331 Chariot of Sustarre precedent.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_ANIMAL = "Dragon Magazine #338 — Class Acts: Animal Magic (William L. Christensen), p. 91";
const SRC_ELK = "Dragon Magazine #338 — Class Acts: The Elk King (Richard Farrese), p. 95";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_ANIMAL,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_338_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "barding-of-size-alteration",
    name: "Barding of Size Alteration",
    category: "armor",
    cost: "45,718 gp (Medium or smaller), 55,718 gp (Large)",
    summary:
      "Magic barding (armor) — a suit of +1 mithral chainmail barding, wrought of mithral and often bearing elaborate etchings of battle featuring the animal it was crafted for. Barding of size alteration exists for animals of all kinds and shapes; it is typically created with a unique animal in mind, but a blacksmith can easily adjust the armor to fit animals of a similar kind and size with a DC 12 Craft (armorsmithing) check (for example, wolf barding can be adjusted to fit a dog, but cannot be worn by a bear). Three times per day, the barding can shrink the animal wearing it, as the spell reduce animal. Once per day, the barding can make the animal wearing it grow, as the spell animal growth. To activate these abilities, the animal's keeper must touch the animal and speak the proper command word; this requires a standard action, and the abilities only function if the animal is willing to alter its size (in nearly all cases the animal willingly changes if commanded by its master, but it is not likely to comply if commanded by another). Animals wearing barding of size alteration with an Intelligence score of 5 or higher and the ability to speak may activate the barding's abilities themselves. Moderate transmutation; CL 9th; Craft Magic Arms and Armor, animal growth, reduce animal; Weight by size.",
  }),
  M({
    id: "spectral-collar",
    name: "Spectral Collar",
    cost: "34,080 gp",
    summary:
      "Wondrous item (animal collar) — spectral collars vary in appearance according to the whims of their creators, and can be crafted from leather, metal, or wood; they are typically marked by extravagant works of craftsmanship, being etched with elaborate designs or studded with gems or spikes. An animal wearing a spectral collar gains the benefit of a constant blur effect, as the spell. In addition, once per day the animal can cast fear by vocalizing in whatever manner is natural for its kind, with the intent of driving away creatures (DC 14 Will save negates). A humanoid may also wear a spectral collar in the amulet body slot. Moderate illusion and necromancy; CL 7th; Craft Wondrous Item, blur, fear; Weight 1 lb.",
  }),
  M({
    id: "mantle-of-the-elk-king",
    name: "Mantle of the Elk King",
    source: SRC_ELK,
    summary:
      "Wondrous item (unique fraternity regalia) — designed by and for rangers belonging to the Fraternity of the Elk King, a mantle of the Elk King belongs to each guildhall of the fraternity; it is nearly impossible to find this item outside of the organization, as its members zealously guard (and use) the mantle, and the secret of the construction of these powerful items was lost with the disappearance of the Elk King, making them extremely rare and essentially priceless (no price printed). This item looks like a simple, hollowed-out stuffed elk head; when worn by a ranger the mantle merges with its wearer's head. Donning the mantle grants a ranger darkvision out to 120 feet as well as a +4 enhancement bonus to his Strength and Constitution scores, and a +8 bonus on all Intimidate skill checks. He also benefits from being able to, twice per day, summon a pair of dire elk (see page 75 of the Monster Manual II) to aid him (as per summon nature's ally IV); these elk remain for 18 rounds or until slain. The mantle of the Elk King bestows one negative level on any nonranger who dons it; the negative level remains as long as the mantle is worn and disappears when it is removed — this negative level never results in actual level loss, but cannot be overcome in any way while the mantle is worn. Strong transmutation; CL 18th; Weight 9 lb. APOC: the elk-summoning power works by summoning, which does not function in APOC — staged as printed, flagged in SCREENING.md.",
  }),
];
