import type { CharacterBuild } from "@/engine/types";

/**
 * Browser-local Character Repository, backed by IndexedDB (see README,
 * "Saved Character Repository"). All operations are async to match the
 * storage layer. If IndexedDB is unavailable (private mode, ancient
 * browser), the functions reject with a descriptive Error and the UI
 * surfaces it via toast — JSON export/import remains as a fallback.
 */

export interface SavedCharacter {
  id: string;
  name: string;
  build: CharacterBuild;
  createdAt: string;
  updatedAt: string;
}

const DB_NAME = "blendcrafter";
const DB_VERSION = 1;
const STORE = "characters";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB is not available in this browser, so the character repository cannot be used."));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Could not open the character repository database."));
  });
}

function run<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const tx = db.transaction(STORE, mode);
        const request = fn(tx.objectStore(STORE));
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error ?? new Error("Repository operation failed."));
        tx.oncomplete = () => db.close();
        tx.onerror = () => reject(tx.error ?? new Error("Repository transaction failed."));
      })
  );
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `char-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

export async function listSavedCharacters(): Promise<SavedCharacter[]> {
  const records = await run<SavedCharacter[]>("readonly", (store) => store.getAll() as IDBRequest<SavedCharacter[]>);
  return records.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

export async function getSavedCharacter(id: string): Promise<SavedCharacter | undefined> {
  return run<SavedCharacter | undefined>("readonly", (store) => store.get(id) as IDBRequest<SavedCharacter | undefined>);
}

/**
 * Save a build. Without `existingId`, creates a new repository entry; with
 * one, overwrites that entry (the "Update" action in the repository UI).
 */
export async function saveCharacter(build: CharacterBuild, existingId?: string): Promise<SavedCharacter> {
  const now = new Date().toISOString();
  const existing = existingId ? await getSavedCharacter(existingId) : undefined;
  const record: SavedCharacter = {
    id: existing?.id ?? newId(),
    name: build.name?.trim() || "Unnamed Character",
    build: structuredClone(build),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };
  await run("readwrite", (store) => store.put(record));
  return record;
}

export async function deleteSavedCharacter(id: string): Promise<void> {
  await run("readwrite", (store) => store.delete(id));
}
