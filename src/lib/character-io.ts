import type { CharacterBuild } from "@/engine/types";

/**
 * Export/import helpers for portable character JSON files (Blob download +
 * FileReader). The repository (IndexedDB) is separate; these files are the
 * portable backup/sharing format. No server, no cookies.
 */

export function exportCharacterJson(build: CharacterBuild): void {
  const payload = {
    app: "blendcrafter",
    version: 1,
    exportedAt: new Date().toISOString(),
    build,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${(build.name || "character").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.blendcrafter.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function importCharacterJson(file: File): Promise<CharacterBuild> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const build = (parsed && typeof parsed === "object" && "build" in parsed ? parsed.build : parsed) as CharacterBuild;
        if (!build || typeof build !== "object" || typeof build.raceId !== "string") {
          throw new Error("That file does not look like a Blendcrafter character export.");
        }
        resolve(build);
      } catch (error) {
        reject(error instanceof Error ? error : new Error("Invalid character file."));
      }
    };
    reader.readAsText(file);
  });
}
