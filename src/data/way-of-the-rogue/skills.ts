import type { SkillDefinition } from "@/engine/types";

// Way of the Rogue — Chapter One of Traps & Treachery
// (Fantasy Flight Games, Legends & Lairs, 2001; the chapter
// identification is from the chapter's contents — Shaun's scan
// is the chapter alone, printed pp. 5-56, with no credits page).
// New Skills, printed pp. 33-34. Transcribed from Shaun's own
// scanned copy (image-only; pages read visually, 2026-11-04).
// Descriptions are short mechanical paraphrases in our own
// words carrying every DC, modifier, and synergy the book
// prints; no book prose is reproduced. 3.0-era skill names
// (Wilderness Lore, Pick Pocket, Innuendo) are kept as printed.

const WOTR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/d20_dungeons_and_dragons_Way Of The Rogue.pdf";

export const WAY_OF_THE_ROGUE_SKILLS: SkillDefinition[] = [
  {
    id: "mimic-voice",
    name: "Mimic Voice",
    keyAbility: "cha",
    ruleset: "core",
    source: "Way of the Rogue — New Skills (p. 33)",
    sourceUrl: WOTR_PATH,
    description:
      "Repeat a phrase or short sentence you have heard, in a spoken language, duplicating another person's voice. You need proper vocal organs to use the skill, but you need not speak (or even understand) the language being mimicked. You make one Mimic Voice check, which the DM rolls secretly, opposed by the Listen check of everyone who hears it. Modifiers to your check (all that apply stack): unknown language -4; different gender -2; different race -2; different creature type -4; different age -2 per category of age difference (the book's worked example, a young female human imitating an ancient male dragon in an unknown tongue, totals -14). Listeners who know the person being imitated gain a circumstance bonus on Listen: passing familiarity +4, friends and associates +6, close friends +8, intimate friends +10. Listen is rolled on first hearing and every round thereafter; for group interaction, make one check per hour or day of interaction against the group's average Listen check. Synergy: 5 or more ranks in Bluff gives a +2 synergy bonus on Mimic Voice checks, and 5 or more ranks in Disguise plus a successful Disguise check gives a further +2 (these stack). You cannot reproduce verbal spell components or magical vocal abilities (such as a siren's song or a banshee's wail) with this skill.",
  },
  {
    id: "urban-lore",
    name: "Urban Lore",
    keyAbility: "wis",
    ruleset: "core",
    source: "Way of the Rogue — New Skills (pp. 33-34)",
    sourceUrl: WOTR_PATH,
    description:
      "The urban counterpart to Survival: knowledge of surviving and operating in a city. It is a class skill for rogues, bards, and rangers; a ranger who takes Urban Lore as a class skill makes Survival a cross-class skill instead and gains the Shadow feat in place of Track (decided at 1st ranger level). Checks: DC 10 — scrounge enough food and water for basic sustenance and find a reasonably safe place to sleep on the street; DC 15 — judge whether an abandoned building is safe to enter or occupy (against collapse, monsters, and similar dangers); DC 20 — recognize the signs of underworld factions and whose turf an area is, which also grants a +2 synergy bonus to Gather Information checks made in that specific area. Retry: the food and shelter uses can be retried once per day; the Gather Information synergy can be attempted only once per use of Gather Information.",
  },
];
