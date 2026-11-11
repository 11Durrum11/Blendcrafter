// Dragon Magazine #330 — flaw draft: "Class Acts: Flaws for Commoners"
// (Ted Ragonstaff), p. 87 — the issue's April-Fools column. Typed
// FlawTraitDefinition records in the house shape of the issue-326 flaws
// (src/data/dragon-326/flaws.ts). Ten of the eleven printed gag flaws are
// staged; the eleventh, Corpse, is NOT record-shaped and stays out (see
// held-c.md). Prerequisites as printed: the column is for 1st-level
// commoners only (take up to two at 1st level per Unearthed Arcana, each
// granting an extra feat — the standing flaw rules, carried here in the
// header rather than per record, per house practice).
// Source transcription: issue-330 pack reference.md, "Flaws for Commoners"
// section (full printed texts).

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #330 — Class Acts: Flaws for Commoners (Ted Ragonstaff), p. 87";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FlawSeed = Partial<FlawTraitDefinition> & Pick<FlawTraitDefinition, "id" | "name" | "summary" | "description">;

function F(seed: FlawSeed): FlawTraitDefinition {
  return {
    kind: "flaw",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    ...seed,
  } as FlawTraitDefinition;
}

export const DRAGON_330_FLAWS: FlawTraitDefinition[] = [
  F({
    id: "chicken-infested",
    name: "Chicken Infested",
    prerequisite: "1st-level commoner.",
    summary: "Whenever you draw a weapon or pull an item out of a container, you have a 50% chance of drawing a live chicken instead.",
    description:
      "You've got chickens. Whenever you draw a weapon or pull an item out of a container, you have a 50% chance of drawing a live chicken instead. No one knows where the chickens come from. One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "delicious",
    name: "Delicious",
    prerequisite: "1st-level commoner.",
    summary: "All monsters attack you if able, regardless of their attitude toward the rest of your party; when subjected to a swallow whole attack, you are treated as two size categories smaller than you actually are.",
    description:
      "Someone cast divine flavor on you. All monsters attack you if able, regardless of their attitude toward the rest of your party. In addition, you go down smooth: when subjected to a swallow whole special attack, you are treated as two size categories smaller than you actually are. One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "dirt-farmer",
    name: "Dirt Farmer",
    prerequisite: "1st-level commoner.",
    summary: "You must spend 18 hours every day farming for your liege; if you fail to spend 18 hours every day farming, your liege has you killed.",
    description:
      "You farm. You must spend 18 hours every day farming for your liege. If you fail to spend 18 hours every day farming, your liege has you killed. One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "incomprehensible-accent",
    name: "Incomprehensible Accent",
    prerequisite: "1st-level commoner.",
    summary: "No one can understand what you are saying; your thick accent even baffles comprehend languages and similar magical effects.",
    description:
      "No one can understand what you are saying. Your thick accent even baffles comprehend languages and similar magical effects. One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "nagging-cough",
    name: "Nagging Cough",
    prerequisite: "1st-level commoner.",
    summary: "You begin play afflicted with mummy rot, and you have made no successful Fortitude saves to kick the disease.",
    description:
      "You are sick. You begin play afflicted with mummy rot. You've made no successful Fortitude saves to kick the disease. One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "peasant-hat",
    name: "Peasant Hat",
    prerequisite: "1st-level commoner.",
    summary: "You suffer a −15 penalty on all Diplomacy checks; other characters in your party can cast command on you once per day, with no save allowed. If you remove the hat, crows peck at your exposed brains, killing you.",
    description:
      "You have a peasant hat. You suffer a −15 penalty on all Diplomacy checks. Other characters in your party can cast command on you once per day, with no save allowed. Special: If you remove the hat, crows peck at your exposed brains, killing you. One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "pig-bond",
    name: "Pig Bond",
    prerequisite: "1st-level commoner.",
    summary: "You must at all times carry a pig that weighs an amount equal to your maximum load; the pig refuses to walk on its own, and its weight tracks your maximum load as your Strength changes. If more than a few inches ever separates you and the pig, the pig transforms into Orcus and skins you.",
    description:
      "You have a pig. You must at all times carry a pig that weighs an amount equal to your maximum load. The pig refuses to walk on its own. If your Strength score increases, the weight of the pig increases to match your new maximum load; if your Strength score decreases, get a cart. Special: If more than a few inches ever separates you and the pig, the pig transforms into Orcus and skins you (which probably kills you). One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "unimportant-npc",
    name: "Unimportant NPC",
    prerequisite: "1st-level commoner.",
    summary: "You have no name, you are never included when the group divides its treasure, and you are never part of the initiative order — you always go last, if you go at all.",
    description:
      "Nobody cares about you. You have no name. You are never included when the group divides its treasure. You are never part of the initiative order (and thus you always go last — if your DM even lets you go at all). One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "weresheep",
    name: "Weresheep",
    prerequisite: "1st-level commoner.",
    summary: "You are afflicted with lycanthropy; your hybrid and animal forms are of a harmless sheep, and when in hybrid or animal form you suffer the effects of the Delicious flaw.",
    description:
      "You are afflicted with lycanthropy. Your hybrid and animal forms are of a harmless sheep. When in hybrid or animal form you suffer the effects of the Delicious flaw. One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
  F({
    id: "xp-farm",
    name: "XP Farm",
    prerequisite: "1st-level commoner.",
    summary: "You are worth 10 times the normal XP for a creature of your CR.",
    description:
      "You're going to make someone very happy. You are worth 10 times the normal XP for a creature of your CR. One of the Flaws for Commoners (Dragon #330's April-Fools column), staged as printed.",
  }),
];
