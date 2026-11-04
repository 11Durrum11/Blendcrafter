/**
 * The group shelf — shared characters for the whole table
 * (Shaun, 2026-11-04: "Same thing with Blendcrafter… everything on
 * the site should be for everyone", publish mode chosen by Shaun:
 * "Publish automatically whenever I save").
 *
 * Saved characters are published to the group's existing Supabase
 * project (apoc-survival-tracker — the Live Tracker's backend) in a
 * `shared_characters` table, using the project's publishable key —
 * the same public, by-design key the Live Tracker page ships. Same
 * open-board model as the tracker: anyone with the site link can
 * read and write the shelf. No secrets ever go here — builds only.
 *
 * What is NOT shared, by Shaun's standing rules: a player's own
 * settings. Toggle prefs, house-rule choices and campaign defaults
 * never leave the browser; this module only ever sends a saved
 * character's name + build JSON.
 *
 * Local saving remains the source of truth and is never blocked by
 * the shelf: every function here fails soft, and the one hard
 * distinction the UI needs — "the shelf table doesn't exist yet" —
 * is reported as SharedShelfUnavailable so the dialog can say so
 * plainly instead of erroring on every save.
 *
 * The link between a browser-local record and its shelf row lives
 * in a small localStorage map (blendcrafter:shared-map,
 * local id -> shelf id), so re-saving a character updates its own
 * shelf row instead of piling up duplicates. Opening someone else's
 * build and saving it creates a fresh local record and therefore a
 * fresh shelf row — the original author's row is never overwritten.
 */

import type { CharacterBuild } from "@/engine/types";

const SUPABASE_URL = "https://gjvebpbxggmumtslidej.supabase.co";
const SUPABASE_KEY = "sb_publishable_lHurlKltZPfNQ5VviUv90g_yiQ7xZSl";
const TABLE = "shared_characters";
const MAP_KEY = "blendcrafter:shared-map";

export interface SharedCharacterMeta {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export class SharedShelfUnavailable extends Error {
  constructor() {
    super("The group shelf table does not exist yet.");
    this.name = "SharedShelfUnavailable";
  }
}

function headers(extra?: Record<string, string>): Record<string, string> {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

async function shelfFetch(path: string, init?: RequestInit): Promise<Response> {
  let response: Response;
  try {
    response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}${path}`, {
      ...init,
      headers: headers(init?.headers as Record<string, string> | undefined),
    });
  } catch {
    throw new Error("Could not reach the group shelf (network).");
  }
  if (response.status === 404) throw new SharedShelfUnavailable();
  if (!response.ok) {
    // PostgREST reports a missing table as 404 with code PGRST205;
    // some configurations surface it as a 400 with the same code.
    try {
      const body = (await response.clone().json()) as { code?: string };
      if (body?.code === "PGRST205") throw new SharedShelfUnavailable();
    } catch (error) {
      if (error instanceof SharedShelfUnavailable) throw error;
    }
    throw new Error(`The group shelf returned an error (${response.status}).`);
  }
  return response;
}

/* ---------- the local <-> shelf id map (this browser only) ---------- */

function readMap(): Record<string, string> {
  try {
    const raw = window.localStorage.getItem(MAP_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") return parsed as Record<string, string>;
  } catch {
    /* a corrupt map just means "nothing linked yet" */
  }
  return {};
}

function writeMap(map: Record<string, string>) {
  try {
    window.localStorage.setItem(MAP_KEY, JSON.stringify(map));
  } catch {
    /* storage unavailable — publishing still works, it just re-inserts */
  }
}

export function getSharedId(localId: string): string | undefined {
  return readMap()[localId];
}

/** Local record ids this browser has published to the shelf. */
export function publishedLocalIds(): Set<string> {
  return new Set(Object.keys(readMap()));
}

export function publishedSharedIds(): Set<string> {
  return new Set(Object.values(readMap()));
}

/* ---------- shelf operations ---------- */

export async function listSharedCharacters(): Promise<SharedCharacterMeta[]> {
  const response = await shelfFetch(
    "?select=id,name,created_at,updated_at&order=updated_at.desc&limit=500",
  );
  return (await response.json()) as SharedCharacterMeta[];
}

export async function fetchSharedBuild(id: string): Promise<CharacterBuild> {
  const response = await shelfFetch(`?select=build&id=eq.${encodeURIComponent(id)}`);
  const rows = (await response.json()) as Array<{ build: CharacterBuild }>;
  if (!rows.length) throw new Error("That character is no longer on the group shelf.");
  return rows[0].build;
}

/**
 * Publish (or re-publish) a locally saved character to the shelf.
 * Returns the shelf row id. Throws SharedShelfUnavailable when the
 * table hasn't been created yet — callers treat that as "skip
 * quietly", never as a save failure.
 */
export async function publishCharacter(
  localId: string,
  name: string,
  build: CharacterBuild,
): Promise<string> {
  const map = readMap();
  const existing = map[localId];
  const payload = { name, build, updated_at: new Date().toISOString() };
  if (existing) {
    const response = await shelfFetch(`?id=eq.${encodeURIComponent(existing)}`, {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(payload),
    });
    const rows = (await response.json()) as Array<{ id: string }>;
    if (rows.length) return rows[0].id;
    // The shelf row was removed by someone — fall through and re-add.
  }
  const response = await shelfFetch("", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(payload),
  });
  const rows = (await response.json()) as Array<{ id: string }>;
  if (!rows.length) throw new Error("The group shelf did not accept the character.");
  map[localId] = rows[0].id;
  writeMap(map);
  return rows[0].id;
}

/** Remove a character from the shelf (its local copy is untouched). */
export async function unshareCharacter(localId: string): Promise<void> {
  const map = readMap();
  const sharedId = map[localId];
  if (sharedId) {
    await shelfFetch(`?id=eq.${encodeURIComponent(sharedId)}`, { method: "DELETE" });
    delete map[localId];
    writeMap(map);
  }
}

/** Remove any shelf row by id (shelf management from the dialog). */
export async function deleteSharedCharacter(sharedId: string): Promise<void> {
  await shelfFetch(`?id=eq.${encodeURIComponent(sharedId)}`, { method: "DELETE" });
  const map = readMap();
  for (const [localId, id] of Object.entries(map)) {
    if (id === sharedId) delete map[localId];
  }
  writeMap(map);
}
