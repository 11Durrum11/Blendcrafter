// Dragon Magazine #351 (January 2007) — spell draft: 1 spell.
// "Al-Qadim" article (Wolfgang Baur), pp. 28-31 — the issue's Arabian
// adventure prints one spell, a 3.5 restatement of the 2nd-edition
// Al-Qadim "province of sand" spell pillar of sand (Arabian
// Adventures). Per the brief's Al-Qadim line, Arabian generic
// mechanics stage as core with lore stripped (Sha'ir, issue-315
// precedent); the Zakhara lore digests in reference.md §2.
// CONVERSION: the magazine itself performs the 3.5 conversion — the
// 2e province system and its 1 turn + 1 round/level duration, AC 5 /
// flat 50 hp pillar are gone; the 3.5 printing gives class/level lists
// (Drd 2, Sor/Wiz 2), a 1 round/level (D) duration, and a pillar with
// AC 9 + caster's Intelligence modifier, hardness 5, and 10 hp per
// caster level. Staged in the magazine's own 3.5 form; the conversion
// is shown in SCREENING.md.
// APOC screening: the spell neither summons, calls, teleports, nor
// opens a plane; it shapes existing sand. Clean.
// Typed SpellDefinition in the house shape of recent packs:
// targetOrArea carries the printed Area text without a label; the
// focus rides in `note`. Summary is a faithful mechanical paraphrase
// in our own words; no magazine prose is reproduced.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #351 — Al-Qadim (Wolfgang Baur), pp. 28-31";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Evocation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_351_SPELLS: SpellDefinition[] = [
  C({
    id: "pillar-of-sand",
    name: "Pillar of Sand",
    school: "Transmutation",
    descriptors: ["Earth"],
    levels: { Druid: 2, "Sorcerer/Wizard": 2 },
    components: "V, S, F",
    range: "Touch",
    targetOrArea: "See description",
    duration: "1 round/level (D)",
    savingThrow: "Reflex (see text)",
    spellResistance: "No",
    note: "Focus: the sand from which the pillar is formed. The spell works only where enough sand is available — 500 cubic feet of sand per 10 feet of pillar height.",
    summary:
      "You cause a cylindrical pillar of sand to rise from the ground beneath the creature touched, carrying it upward. The pillar's top has a 10-foot radius and it can rise as high as you wish, to a maximum of 10 feet per caster level. Once formed, you can raise or lower the pillar by 10 feet per round as a free action, and move it horizontally at 10 feet per 5 caster levels (maximum 40 feet per round). The pillar has AC 9 + your Intelligence modifier, hardness 5, and 10 hit points per caster level. A creature that enters the pillar (rather than riding on top of it) takes 1d6 points of damage per round inside it and is blinded for 1d6 minutes; a Reflex save halves the damage and negates the blindness. The pillar collapses if the creature it carries steps off it, or when the spell ends.",
  }),
];
