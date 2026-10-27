/**
 * Sorcery & Steam skill data pack: the new skills of Chapter 3 of
 * Sorcery & Steam (Fantasy Flight Games, Legends & Lairs). Built
 * 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC DM related/Desktop/Sorcery & Steam.pdf
 * (path as recorded in the Dropbox connector; the folder's display
 * casing is "A POC DM related".)
 *
 * The book is a 3.0-era d20 sourcebook. Its genuinely new skills are
 * Drive, Munitions, and Use Steamcraft Device, plus the new Knowledge
 * areas it names (steamcraft, clockworks, firearms, engine
 * programming) and the two new Profession specialties it presents as
 * new skills (detective, profiler). Existing-skill new uses (Alchemy
 * gunpowder/refined coal, Appraise social status, Disable Device
 * against machines, and so on) are NOT separate skills and are not
 * duplicated here.
 */
import type { SkillDefinition } from "@/engine/types";

const SS = "Sorcery & Steam";
const SS_PATH = "/A POC DM related/Desktop/Sorcery & Steam.pdf";
const CH3 = `${SS} — Chapter 3: Skills, Feats, and Spells`;

export const SORCERY_STEAM_SKILLS: SkillDefinition[] = [
  {
    id: "drive",
    name: "Drive",
    keyAbility: "dex",
    armorCheckPenalty: true,
    ruleset: "sorcery_steam",
    source: `${CH3} — New Skills: Drive (pp. 100–101)`,
    sourceUrl: SS_PATH,
    description:
      "Operate and control a steam-powered vehicle, such as a horseless carriage, airship, or steamship. Routine driving needs no check; checks are made for unusual circumstances or dramatic situations (chases, attacks, deadlines). You can take 10 but not take 20.",
  },
  {
    id: "munitions",
    name: "Munitions",
    keyAbility: "dex",
    trainedOnly: true,
    ruleset: "sorcery_steam",
    source: `${CH3} — New Skills: Munitions (pp. 101–102)`,
    sourceUrl: SS_PATH,
    description:
      "Handle, place, or disable gunpowder explosives safely and accurately, and reload and maintain firearms. Covers disabling simple or trapped explosives (trapped ones are opposed checks), setting fuses (including timed fuses), placing charges for maximum effect, making complex explosives, and quick-reloading firearms.",
  },
  {
    id: "use-steamcraft-device",
    name: "Use Steamcraft Device",
    keyAbility: "int",
    ruleset: "sorcery_steam",
    source: `${CH3} — New Skills: Use Steamcraft Device (p. 102)`,
    sourceUrl: SS_PATH,
    description:
      "Operate complex mechanical and electrical devices, such as steam engines, analytical engines, and telegraphs. No check is needed for common devices in a typical steampunk campaign; the skill is used where such technology is rare or for advanced or specialized tasks.",
  },
  {
    id: "knowledge-steamcraft",
    name: "Knowledge (steamcraft)",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "sorcery_steam",
    source: `${CH3} — Knowledge (p. 99)`,
    sourceUrl: SS_PATH,
    description:
      "Knowledge of steamcraft: mechanics, materials, and the design and operation of steam-powered technology. One of the new Knowledge areas the book introduces for a steampunk setting.",
  },
  {
    id: "knowledge-clockworks",
    name: "Knowledge (clockworks)",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "sorcery_steam",
    source: `${CH3} — Knowledge (p. 99)`,
    sourceUrl: SS_PATH,
    description:
      "Knowledge of clockworks: design, applications, famous clockmakers, gears and pulleys. One of the new Knowledge areas the book introduces for a steampunk setting.",
  },
  {
    id: "knowledge-firearms",
    name: "Knowledge (firearms)",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "sorcery_steam",
    source: `${CH3} — Knowledge (p. 99)`,
    sourceUrl: SS_PATH,
    description:
      "Knowledge of firearms: ranges, makes and models, and caliber. One of the new Knowledge areas the book introduces for a steampunk setting.",
  },
  {
    id: "knowledge-engine-programming",
    name: "Knowledge (engine programming)",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "sorcery_steam",
    source: `${CH3} — Knowledge (engine programming) (p. 99)`,
    sourceUrl: SS_PATH,
    description:
      "Devise programs for analytical engines. Complex programs require higher check DCs than simple ones; each check takes 1 hour.",
  },
  {
    id: "profession-detective",
    name: "Profession (detective)",
    keyAbility: "wis",
    trainedOnly: true,
    ruleset: "sorcery_steam",
    source: `${CH3} — New Skills: Profession (detective) (p. 100)`,
    sourceUrl: SS_PATH,
    description:
      "Collect forensic clues such as fingerprints and footstep impressions, and estimate characteristics of a dead body such as time and cause of death. Checks without proper tools (magnifying glass and the like) take a –4 circumstance penalty; masterwork tool sets grant +2. A check covers a 5-foot-by-5-foot area and takes 1 minute.",
  },
  {
    id: "profession-profiler",
    name: "Profession (profiler)",
    keyAbility: "wis",
    trainedOnly: true,
    ruleset: "sorcery_steam",
    source: `${CH3} — New Skills: Profession (profiler) (p. 100)`,
    sourceUrl: SS_PATH,
    description:
      "Learn facts about a person, creature, or object (occupation, general tendencies, perhaps city or region of origin) from observing the subject over a period of time, in the manner of a great consulting detective.",
  },
];
