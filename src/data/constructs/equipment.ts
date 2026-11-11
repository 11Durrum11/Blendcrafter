import type { EquipmentItem } from "@/engine/types";

// Construct weapons from Encyclopaedia Arcane – Constructs: It
// Is Alive (Mongoose Publishing, ©2002, MGP 1004), the
// "Construct Weapons" section of the "Building a Better
// Construct" chapter. These are the only priced goods in the
// book: weapons designed to be built into (or wielded by)
// automata and simulacra, printed with a stat table (category,
// cost, damage, critical, range increment, weight, type) —
// transcribed as printed, 3.0-era values untouched. The table
// carries the footnote "* all scores are intended for a
// Medium-size wielder", while several entries are themselves
// sized (broad (Tiny), long (Medium-size), short (Small),
// heavy (Small), spring (Medium-size), triple (Large)); the
// printed sizes are kept in the record names and the footnote
// is noted rather than resolved. Summaries and notes are short
// paraphrases written for this dataset; the book's prose is
// not reproduced. Source: Shaun's own copy, read page by page
// from his scan (printed page = PDF page − 2).

const CONSTRUCTS = "Constructs: It Is Alive";
const CONSTRUCTS_PDF =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Constructs. It Is Alive.pdf";

export const CONSTRUCTS_EQUIPMENT: EquipmentItem[] = [
  {
    id: "arm-blades-broad",
    name: "Arm Blades, Broad (Tiny)",
    category: "weapon",
    cost: "12 gp",
    weight: "2 lbs.",
    notes:
      "Martial melee weapon; damage 1d4+1, critical 18-20/x2, slashing. Arm blades are firmly attached to the construct's arms; the broad version sports a wide and short blade. Many automata and simulacra can slide these weapons in and out of their arms by taking the Concealed Weapon Mounting feat. Name and size as printed in the book's table, whose footnote reads '* all scores are intended for a Medium-size wielder'.",
    source: `${CONSTRUCTS}, pp. 51-52`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "arm-blades-long",
    name: "Arm Blades, Long (Medium-size)",
    category: "weapon",
    cost: "45 gp",
    weight: "5 lbs.",
    notes:
      "Martial melee weapon; damage 1d8, critical 18-20/x2, slashing. Arm blades are firmly attached to the construct's arms and vary in size, with the longsword the most common. Many automata and simulacra can slide these weapons in and out of their arms by taking the Concealed Weapon Mounting feat. Name and size as printed in the book's table, whose footnote reads '* all scores are intended for a Medium-size wielder'.",
    source: `${CONSTRUCTS}, pp. 51-52`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "arm-blades-short",
    name: "Arm Blades, Short (Small)",
    category: "weapon",
    cost: "30 gp",
    weight: "3 lbs.",
    notes:
      "Martial melee weapon; damage 1d6, critical 18-20/x2, slashing. Arm blades are firmly attached to the construct's arms; short sword versions exist alongside the common long version. Many automata and simulacra can slide these weapons in and out of their arms by taking the Concealed Weapon Mounting feat. Name and size as printed in the book's table, whose footnote reads '* all scores are intended for a Medium-size wielder'.",
    source: `${CONSTRUCTS}, pp. 51-52`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "chakram-heavy",
    name: "Chakram, Heavy (Small)",
    category: "weapon",
    cost: "50 gp",
    weight: "4 lbs.",
    notes:
      "Exotic ranged weapon; damage 2d4, critical 19-20/x2, range increment 20 ft., slashing. A chakram is a circular blade that is normally thrown and retrieved, but constructs have no need for such fancy techniques — the heavy chakram is meant to be thrown hard, sometimes even from a mechanical launcher similar to a ballista, mounted in a construct's body. Name and size as printed in the book's table, whose footnote reads '* all scores are intended for a Medium-size wielder'.",
    source: `${CONSTRUCTS}, pp. 51-52`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "crossbow-spring",
    name: "Crossbow, Spring (Medium-size)",
    category: "weapon",
    cost: "150 gp",
    weight: "12 lbs.",
    notes:
      "Martial ranged weapon; damage — (ammunition), critical 19-20/x2, range increment 80 ft., piercing. Basically a missile launcher that depends on tightly wound springs to provide power instead of a tension bow; never found in a carried version, always mounted on a construct's arm or shoulders. It can fire normal crossbow and ballista bolts (for Huge and larger sizes) as well as javelins, stones and exotic thrown weapons like the heavy chakram. Reloading the crossbow is a move action for the construct that provokes an attack of opportunity. Name and size as printed in the book's table, whose footnote reads '* all scores are intended for a Medium-size wielder'.",
    source: `${CONSTRUCTS}, pp. 51-52`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "flail-triple-construct",
    name: "Flail, Triple (Large)",
    category: "weapon",
    cost: "60 gp",
    weight: "23 lbs.",
    notes:
      "Exotic melee weapon; damage 2d8, critical 19-20/x2, bludgeoning. Similar to a heavy flail, but composed of three weight-and-chain components instead of one. Spinning the flails for a full round provides one-quarter cover, granting a +2 bonus to AC and +1 bonus to Reflex saves. Name and size as printed in the book's table, whose footnote reads '* all scores are intended for a Medium-size wielder'. (A different, smaller triple flail from Goods and Gear already uses the plain id 'flail-triple'; this is that weapon's Large construct counterpart from Constructs: It Is Alive.)",
    source: `${CONSTRUCTS}, pp. 51-52`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
];
