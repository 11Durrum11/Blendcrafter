import type { RaceDefinition } from "@/engine/types";

/**
 * Race picker grouping (Shaun, 2026-10-28): the Base Race step shows
 * playable character races first and monster races under their own
 * heading. The split follows where each book presents the race: races
 * sourced from a Monster Manual entry or the SRD monster pages are
 * monster races; races from race chapters, campaign settings and class
 * books are playable character races. Nothing is hidden or locked —
 * monster races stay selectable, just grouped separately.
 */
export const MONSTER_RACE_IDS: ReadonlySet<string> = new Set([
  "armand",
  "azer",
  "crystalline-troll",
  "deep-dwarf",
  "dracotaur",
  "duergar-mm",
  "efaarit",
  "flind",
  "forest-gnome",
  "forestkith-goblin",
  "gargoyle",
  "goatfolk",
  "grimlock",
  "harssaf",
  "jaebrin",
  "kenku",
  "lumi",
  "minotaur",
  "naztharune-rakshasa",
  "nycter",
  "ogre",
  "ogre-mage",
  "pixie",
  "poison-dusk-lizardfolk",
  "quaraphon",
  "rakshasa",
  "sand-giant",
  "satyr",
  "skullcrusher-ogre",
  "svirfneblin",
  "troglodyte",
  "troll",
  "varag",
  "warforged-charger",
  "warforged-scout",
  "witchknife",
]);

export function isMonsterRace(race: Pick<RaceDefinition, "id">): boolean {
  return MONSTER_RACE_IDS.has(race.id);
}
