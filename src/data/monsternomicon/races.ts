import type { RaceDefinition } from "@/engine/types";

// Monsternomicon race data: the Efaarit of the Iron Kingdoms
// (Privateer Press, Monsternomicon vol. 2), the one creature in
// vol. 2's bestiary entries that prints a full "as Characters"
// racial trait list. (Vol. 1's Playable Races appendix
// covers five peoples — gobber, bogrin, trollkin, ogrun,
// Nyss — but all five duplicate the Iron Kingdoms pack's
// records for the same races and were skipped in Batch 9.) The Tharn Bloodtrackers
// entry (vol. 2, p. 154) prints a level adjustment in its stat
// block but no racial trait list anywhere in the book, so it is
// not converted (no deriving traits from stat blocks). The
// five Skorne ethnic variants (vol. 2, pp. 199–203) print only
// adjustment blocks against a base Skorne race that is not
// printed in either volume, so they are likewise omitted.
// Short mechanical summaries in our own words, cited to
// book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/IK-Monsternomicon, vol. 2.pdf

const MN2 = "Iron Kingdoms Monsternomicon, vol. 2";
const MN2_PATH = "/A POC PC related/4.Core books/monster manuals/IK-Monsternomicon, vol. 2.pdf";

export const MONSTERNOMICON_RACES: RaceDefinition[] = [
  {
    id: "efaarit",
    name: "Efaarit",
    ruleset: "iron_kingdoms",
    source: `${MN2} — Efaarit (pp. 62–63)`,
    sourceUrl: MN2_PATH,
    size: "Small",
    baseSpeed: 20,
    type: "Humanoid",
    subtypes: ["Efaarit"],
    abilityModifiers: { con: 2, wis: 2, int: -2 },
    favoredClass: "ranger",
    levelAdjustment: 1,
    racialHitDice: 2,
    hitDie: "d8",
    naturalArmor: 1,
    skillBonuses: { concentration: 2, "handle-animal": 2 },
    traits: [
      {
        key: "efaarit-racial-hit-dice",
        name: "Racial Hit Dice",
        description:
          "An efaarit begins with two levels of humanoid (2d8 Hit Dice, base attack bonus +1, base saving throw bonuses of Fort +0, Ref +3, and Will +0), which provide 4 × (2 + Int modifier, minimum 1) skill points; its class skills are Concentration, Intimidate, and Survival. An efaarit has low-light vision, a natural armor bonus of +1 (recorded above), and receives Endurance as a bonus feat. Efaarits are proficient with all simple weapons as well as with a single kind of pole-arm (such as a glaive, halberd, or longspear).",
        category: "special-quality",
        source: `${MN2} — Efaarit (p. 63)`,
        sourceUrl: MN2_PATH,
      },
      {
        key: "efaarit-qualities",
        name: "Dogged, Innate Direction, Sand Walk, and Shallow Breath",
        description:
          "Special qualities: Dogged (Su) — an efaarit can continue fighting without penalty even while disabled or dying. Innate Direction (Ex) — an efaarit always knows which direction is true north while above ground and under an open sky. Sand Walk (Ex) — an efaarit moves through sandy or soft-dirt terrain without penalty, and leaves no tracks in sand unless it wishes to. Shallow Breath (Ex) — an efaarit can survive twice as long as normal without air before it must begin making Constitution checks to avoid suffocation. Automatic languages: Efaarit; bonus languages: Cygnaran, Khadoran, Shyr, Sulese.",
        category: "special-quality",
        source: `${MN2} — Efaarit (p. 63)`,
        sourceUrl: MN2_PATH,
      },
    ],
  },
];
