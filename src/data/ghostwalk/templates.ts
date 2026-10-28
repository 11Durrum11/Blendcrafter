import type { TemplateDefinition } from "@/engine/types";

// Ghostwalk template: the Ghost template of Chapter 5 (pp. 163–165) —
// deliberately distinct from the Monster Manual ghost already in the
// core data. A Ghostwalk ghost is NOT undead: it is the disembodied
// soul of a dead creature, an outsider that counts as a living
// creature, can be raised or resurrected, and advances by taking
// levels in the eidolon or eidoloncer classes and [Ghost] feats.
// Challenge Rating +1 is from the book; the book prints no level
// adjustment for the template, and the official Ghostwalk 3.5 update
// (appended to this PDF) gives the replacement sample ghost a level
// adjustment of +0, which is recorded here; the update's sample also
// fixes the type line as outsider (augmented humanoid, extraplanar,
// incorporeal), recorded here. Chapter 5's other templates are NOT
// converted: Bonesinger (CR +0, no level adjustment printed),
// Broodguard (no level adjustment; the result is near-mindless),
// Monstrous Vampire (no level adjustment printed), and Mumia
// (CR +1, level adjustment —) do not fit a playable template record.
// See the Batch 8b addendum in REBUILD-NOTES.md. Short mechanical
// summaries in our own words, cited to book + page.
// Source PDF: /A POC PC related/5.Splat/Ghostwalk.pdf

const GW = "Ghostwalk";
const GW_PATH = "/A POC PC related/5.Splat/Ghostwalk.pdf";
const CH5 = `${GW} — Chapter 5: Monsters`;
const UPD = "official Ghostwalk 3.5 update (appended to the source PDF)";

export const GHOSTWALK_TEMPLATES: TemplateDefinition[] = [
  {
    id: "ghost-ghostwalk",
    name: "Ghost (Ghostwalk)",
    ruleset: "core",
    timing: "acquired",
    summary:
      "The disembodied soul of a dead humanoid — not undead, but an outsider (augmented humanoid, extraplanar, incorporeal) that counts as a living creature, keeps its ability scores and class abilities, flies and turns incorporeal, and develops ghost powers through eidolon/eidoloncer levels and [Ghost] feats.",
    source: `${CH5} — Ghost (pp. 163–165)`,
    sourceUrl: GW_PATH,
    crModifier: 1,
    levelAdjustment: 0,
    prerequisites: [
      {
        note: "“Ghost” is a template that can be applied to any living humanoid creature. The book prints no level adjustment; the +0 recorded here is from the replacement sample ghost in the official Ghostwalk 3.5 update. This is a different template from the Monster Manual ghost in the core data: a Ghostwalk ghost is not undead.",
      },
    ],
    patches: [
      { op: "set-type", value: "Outsider", note: "Type changes to outsider (the book prints outsider (incorporeal); the official update's sample ghost gives the full type line outsider (augmented humanoid, extraplanar, incorporeal))." },
      { op: "add-subtype", value: "Augmented Humanoid", note: "Per the official update's sample ghost." },
      { op: "add-subtype", value: "Extraplanar", note: "Per the official update's sample ghost; a ghost's native plane is beyond the Veil of Souls." },
      { op: "add-subtype", value: "Incorporeal", note: "A ghost is incorporeal except when manifested fully within the Manifest Ward or through feats such as Full Manifestation." },
    ],
    features: [
      {
        key: "ghost-gw-flight",
        name: "Ghost Flight and Deflection",
        description: "When incorporeal, a ghost can fly at a speed of 30 feet (good) and gains a deflection bonus to AC equal to its Charisma modifier (always at least +1). An incorporeal ghost has no natural ability to affect material creatures; certain feats let a ghost manifest fully or harm material creatures. A ghost retains all of its original ability scores, but has no Strength score while incorporeal.",
        category: "special-quality",
        source: `${CH5} — Ghost (p. 163)`,
        sourceUrl: GW_PATH,
      },
      {
        key: "ghost-gw-disembodied-soul",
        name: "Disembodied Soul (Ex)",
        description: "A ghost can be raised or resurrected if its physical body is present (the ghost merges with its body); true resurrection, miracle, or wish can restore it even if its body is missing. A ghost counts as a living creature for effects that affect living creatures, and as an outsider it is subject to spells that affect outsiders and extraplanar creatures, such as banishment — a banished ghost is sent to the True Afterlife.",
        category: "special-quality",
        source: `${CH5} — Ghost (p. 164)`,
        sourceUrl: GW_PATH,
      },
      {
        key: "ghost-gw-no-discernible-anatomy",
        name: "No Discernible Anatomy (Ex)",
        description: "A ghost is immune to critical hits, sneak attacks, and similar bonuses that do not work on creatures without a discernible anatomy, and is unharmed by diseases or poisons that would affect a physical body. Ghosts do not need to eat, breathe, or sleep (spellcaster ghosts still need to rest to prepare spells), but are subject to stunning effects that would affect living creatures. A ghost also has low-light vision.",
        category: "special-quality",
        source: `${CH5} — Ghost (pp. 163–164)`,
        sourceUrl: GW_PATH,
      },
      {
        key: "ghost-gw-ectoplasmic-body",
        name: "Ectoplasmic Body (Ex)",
        description: "A ghost's ectoplasmic body mutes physical sensations: ghosts cannot become fatigued or exhausted. When killed, a ghost's body reverts to raw ectoplasm, decaying into nothingness after 10 minutes (a gentle repose spell preserves it as a normal corpse). A ghost's body is the same temperature as its environment. A ghost receives a +4 racial bonus on Hide checks.",
        category: "special-quality",
        source: `${CH5} — Ghost (p. 164)`,
        sourceUrl: GW_PATH,
      },
      {
        key: "ghost-gw-sense-body-weakness",
        name: "Sense Physical Body (Su) and Ghost Weakness (Ex)",
        description: "Sense Physical Body: once per round, a ghost can attempt a Survival check (DC 15; printed as Intuit Direction, Wisdom check if untrained) to determine the general direction of its physical body. Ghost Weakness: if a ghost is hit by a sneak attack or a critical hit from a silver weapon, it must make a Fortitude save (DC 15) or be stunned for 1 round; other than this possible stunning, a critical hit or sneak attack deals no more damage than a normal hit from that weapon.",
        category: "special-quality",
        source: `${CH5} — Ghost (p. 164)`,
        sourceUrl: GW_PATH,
      },
    ],
  },
];
