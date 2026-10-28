/**
 * Tome of Battle skill data pack: Martial Lore, the one genuinely
 * new skill of Chapter 2 of Tome of Battle: The Book of Nine
 * Swords (Wizards of the Coast). Built 2026-10-27 from the copy
 * in Shaun's Dropbox library:
 *   /a poc dm related/desktop/Sourcebooks/Tome of Battle - The Book of Nine Swords (oef, act, bm, hq) (WTC953787200).pdf
 * The chapter's other skill material (the Intimidate duel of
 * wills and Knowledge (local) used for martial traditions) is new
 * uses for existing skills and is not duplicated here. The
 * skill's check DC table is summarized in the description.
 */
import type { SkillDefinition } from "@/engine/types";

const TOB = "Tome of Battle: The Book of Nine Swords";
const TOB_PATH = "/a poc dm related/desktop/Sourcebooks/Tome of Battle - The Book of Nine Swords (oef, act, bm, hq) (WTC953787200).pdf";
const CH2 = `${TOB} — Chapter 2: Skills and Feats`;

export const TOME_OF_BATTLE_SKILLS: SkillDefinition[] = [
  {
    id: "martial-lore",
    name: "Martial Lore",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "core",
    source: `${CH2} — Martial Lore (p. 28)`,
    sourceUrl: TOB_PATH,
    description:
      "Identify martial maneuvers and the disciplines behind them. DC 10 + maneuver level to identify a maneuver being initiated by someone you can see (no action, no retry) or to identify a maneuver recorded on a martial script (one try per day, full-round action). DC 20 + the target's initiator level to determine all disciplines known by a creature after watching it initiate at least one maneuver. A swordsage gains a +2 bonus on a Martial Lore check involving a maneuver in a discipline in which he has discipline focus.",
  },
];
