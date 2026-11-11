// Dragon Magazine #358 (August 2007) — spell draft: 4 spells.
// "Core Beliefs: Saint Cuthbert" (Sean K. Reynolds), pp. 24-36 — its
// "New Divine Spells" block (p. 33) prints exactly four new spells, each
// a variant of a common spell restricted to Saint Cuthbert's clergy as
// a whole or to one of the faith's three orders (the billets, the
// chapeaux, and the stars). The program survey expected feats from this
// article ("series feats"); the article prints NO feats — its record
// yield is these four spells and two relics (the relics digest in
// reference.md §2 under the Core Beliefs relic precedent of issues
// #342/#346). Typed SpellDefinition in the house shape of recent packs.
// Every header was verified against the rendered page image (magazine
// p. 33); the image governs over the OCR stream — it confirms Banner of
// the Saint's full header (1 round casting time, 1 minute duration,
// focus of the banner and a blessed cloth worth 100 gp) and the three
// "functions like" spells' levels and order restrictions.
// Level-key note: each spell prints its level as "Cleric N (Saint
// Cuthbert[, order] only)". The records key the level to Cleric — the
// printed class — and carry the deity/order restriction in the note,
// rather than inventing a deity list key with no casting profile (the
// issue-342 initiate spells took the other route and stand flagged for
// an integration decision there; this pack's choice is flagged in
// SCREENING.md §3 so integration can convert the four keys in one move
// if Shaun prefers the dedicated-list treatment).
// APOC screening: none of the four summons, calls, teleports, or opens
// a plane. The deity framing carries APOC's drawn-not-granted note in
// SCREENING.md §3; the mechanics stage as printed.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #358 — Core Beliefs: Saint Cuthbert (Sean K. Reynolds), p. 33";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const DEITY_NOTE =
  "New divine spell of the church of Saint Cuthbert (Core Beliefs). Printed level line restricts the spell to Saint Cuthbert's clergy, as noted on this record; in APOC, divine power is drawn, not granted — the restriction stages as printed and is flagged in the pack's SCREENING.md.";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting"],
    levels: {},
    components: "V, S, DF",
    castingTime: "1 round",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_358_SPELLS: SpellDefinition[] = [
  C({
    id: "banner-of-the-saint",
    name: "Banner of the Saint",
    levels: { Cleric: 3 },
    components: "V, S, DF, F",
    range: "Banner touched",
    targetOrArea: "60-ft.-radius emanation centered on the banner",
    duration: "1 minute",
    savingThrow: "None",
    spellResistance: "Yes",
    note:
      "Focus: the banner and a small blessed cloth worth 100 gp. Printed level: Cleric 3 (Saint Cuthbert). " +
      DEITY_NOTE,
    summary:
      "You create an aura of power centered on a banner bearing Saint Cuthbert's symbol or likeness. All allies within the aura gain a +2 morale bonus on attack rolls and saving throws against fear effects. The spell ends if the cloth of the banner is destroyed or touches the ground.",
  }),
  C({
    id: "persuasive-oration",
    name: "Persuasive Oration",
    subschool: "Charm",
    levels: { Cleric: 1 },
    duration: "10 minutes/level",
    note:
      "Printed level: Cleric 1 (Saint Cuthbert, billet only) — restricted to the billets, the order of Saint Cuthbert that ministers to and protects the faithful. Fields the article does not print (range, target, saving throw, spell resistance) follow charm person, per the spell's own text. " +
      DEITY_NOTE,
    summary:
      "This spell functions like charm person except as noted in the spell header (casting time 1 round, duration 10 minutes/level, and the Saint Cuthbert billet-only restriction carried in this record's note).",
  }),
  C({
    id: "saint-cuthberts-cudgel",
    name: "Saint Cuthbert's Cudgel",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: [],
    levels: { Cleric: 1 },
    targetOrArea: "One touched nonmagical oak or bronzewood club or quarterstaff",
    note:
      "Printed level: Cleric 1 (Saint Cuthbert, chapeaux only) — restricted to the chapeaux, the order of Saint Cuthbert that seeks to convert others to the faith. Fields the article does not print follow shillelagh, per the spell's own text. " +
      DEITY_NOTE,
    summary:
      "This spell functions like shillelagh except as noted in the spell header (its target is one touched nonmagical oak or bronzewood club or quarterstaff, and the Saint Cuthbert chapeaux-only restriction carried in this record's note).",
  }),
  C({
    id: "unearth-heresy",
    name: "Unearth Heresy",
    school: "Divination",
    subschool: undefined,
    descriptors: ["Mind-Affecting"],
    levels: { Cleric: 2 },
    note:
      "Printed level: Cleric 2 (Saint Cuthbert, star only) — restricted to the stars, the order of Saint Cuthbert that enforces doctrinal purity. Fields the article does not print follow detect thoughts, per the spell's own text. " +
      DEITY_NOTE,
    summary:
      "This spell functions like detect thoughts except as noted in the spell header (and the Saint Cuthbert star-only restriction carried in this record's note).",
  }),
];
