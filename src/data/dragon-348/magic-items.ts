// Dragon Magazine #348 (October 2006) — magic item draft: 2 records.
// BOTH from "Core Beliefs: Vecna" (Sean K. Reynolds and Samuel D.
// Weiss), "Relics of the Faith" sidebar, pp. 25-26: the Tome of Shared
// Secrets (printed as a lesser artifact) and the Rod of the Whispered
// One. The sidebar's other relic matter — the Fragments of Vecna
// (rumored body-part relics with no stat lines) and the Hand, Eye, and
// Sword of Kas themselves (DMG artifacts) — digests in reference.md.
// ⚠️ APOC FLAGS — see SCREENING.md: the rod's scrying alerts Vecna
// "regardless of distance or planar boundaries" — Vecna is a god
// trapped OUTSIDE the sealed crystal sphere in APOC terms; the item
// stages as printed with the drawn-not-granted / sealed-sphere flag on
// the record. The tome's death clause sends the reader's soul to
// Vecna — same flag. Neither framing was silently rewritten.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #348 — Core Beliefs: Vecna: Relics of the Faith (Sean K. Reynolds and Samuel D. Weiss), pp. 25-26";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_348_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "tome-of-shared-secrets",
    name: "Tome of Shared Secrets",
    category: "artifact",
    summary:
      "Lesser artifact (book). A book of modest size appearing as a simple illustrated bestiary, devised to gather information. If a reader slices open his hand and places it on a creature's page, he gains a +4 competence bonus on attack rolls, skill checks, and saving throws against creatures of that kind (such as \"green dragons,\" \"pit fiends,\" or \"vampires\") for six days. Each time the book's power is used in this way it drains 1 point of Constitution; restoring this loss before the duration of the bonus expires causes the bonus to end prematurely. A reader reduced to 0 Constitution in this manner dies, his soul goes to Vecna, and his body animates as a mindless zombie. APOC: the soul-to-Vecna clause is printed framing under the sealed sphere (gods outside cannot touch anything inside) — staged as printed, flagged in SCREENING.md.",
  }),
  M({
    id: "rod-of-the-whispered-one",
    name: "Rod of the Whispered One",
    category: "rod",
    summary:
      "Rod. This rod of bone and metal looks like a skeletal human hand clutching a sphere of swirled iron and gold, designed to allow Vecna's lieutenants to maintain order while he was away from his throne. It functions as a rod of rulership (DC 20) and once per day can be used as a crystal ball (up to 10 minutes of scrying, DC 20 to resist). When used to scry, all clerics of Vecna within 10 miles are aware of it (as well as Vecna himself, regardless of distance or planar boundaries), and any scrying attempts against the user are automatically successful (as if he had failed his saving throw against the scry). Vecna's cultists have a ritual of human sacrifice that allows them to restore spent charges from the rulership ability; even when the available uses of the ability are spent it remains a viable scrying device (it does not crumble to dust like a typical rod of rulership). APOC: the \"Vecna himself, regardless of distance or planar boundaries\" clause cannot operate as printed under the sealed crystal sphere — staged as printed, flagged in SCREENING.md; the 10-mile cultist alert is unaffected.",
  }),
];
