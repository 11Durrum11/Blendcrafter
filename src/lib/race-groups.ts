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

/**
 * The ECL a character of this race starts at before any class levels
 * (Shaun, 2026-11-02: "Put ECL on cover of each race and in the
 * description"): racial Hit Dice + level adjustment. A race with no
 * racial Hit Dice still takes its first class level, so it counts 1 —
 * a human starts at ECL 1, a drow (LA +2, no racial HD) at ECL 3, and
 * a 6-HD, LA +2 monster race at ECL 8.
 */
export function raceStartingEcl(
  race: Pick<RaceDefinition, "racialHitDice" | "levelAdjustment">
): number {
  const racialHitDice = race.racialHitDice ?? 0;
  return racialHitDice + (race.levelAdjustment ?? 0) + (racialHitDice ? 0 : 1);
}
