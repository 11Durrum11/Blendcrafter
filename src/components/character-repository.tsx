import { useEffect, useMemo, useState } from "react";
import { BookOpen, Check, Loader2, Search, Trash2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import type { CharacterBuild } from "@/engine/types";
import { deleteSavedCharacter, listSavedCharacters, saveCharacter, type SavedCharacter } from "@/lib/character-repository";
import {
  SharedShelfUnavailable,
  deleteSharedCharacter,
  fetchSharedBuild,
  listSharedCharacters,
  publishCharacter,
  publishedLocalIds,
  publishedSharedIds,
  unshareCharacter,
  type SharedCharacterMeta,
} from "@/lib/shared-characters";

interface CharacterRepositoryProps {
  build: CharacterBuild;
  onLoad: (build: CharacterBuild) => void;
  /**
   * Which part of the repository controls to render. The header toolbar
   * (Shaun, 2026-11-03) places the Characters book in its own slot,
   * separated from the Save button, so the two halves render as separate
   * instances there. Defaults to "all" (both, side by side).
   */
  part?: "all" | "save" | "characters";
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function CharacterRepository({ build, onLoad, part = "all" }: CharacterRepositoryProps) {
  const [open, setOpen] = useState(false);
  const [records, setRecords] = useState<SavedCharacter[]>([]);
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState(false);
  const [savedId, setSavedId] = useState<string>();
  const { toast } = useToast();

  /* Group shelf (Shaun, 2026-11-04): every save also publishes to the
     shared shelf so the whole table can open it. The shelf lives in
     the group's Supabase project; until its one-time table exists,
     shelfStatus is "unavailable" and publishing skips quietly — the
     shelf section in the dialog explains the setup. Local saving is
     never affected by the shelf either way. */
  const [shared, setShared] = useState<SharedCharacterMeta[]>([]);
  const [shelfStatus, setShelfStatus] = useState<"loading" | "ready" | "unavailable" | "error">("loading");
  const mySharedIds = useMemo(() => publishedSharedIds(), [shared]);
  const myLocalIds = useMemo(() => publishedLocalIds(), [shared]);

  async function refreshShared() {
    try {
      setShared(await listSharedCharacters());
      setShelfStatus("ready");
    } catch (error) {
      setShelfStatus(error instanceof SharedShelfUnavailable ? "unavailable" : "error");
    }
  }

  async function publishQuietly(record: SavedCharacter) {
    try {
      await publishCharacter(record.id, record.name, record.build);
      await refreshShared();
      toast({
        title: "Shared with the group",
        description: `${record.name} is on the group shelf — everyone at the table can open it.`,
      });
    } catch (error) {
      if (error instanceof SharedShelfUnavailable) return;
      toast({
        title: "Saved locally, but sharing failed",
        description: error instanceof Error ? error.message : "The group shelf could not be reached.",
        variant: "destructive",
      });
    }
  }

  async function refresh() {
    try {
      setRecords(await listSavedCharacters());
    } catch (error) {
      toast({
        title: "Repository unavailable",
        description: error instanceof Error ? error.message : "Could not access saved characters.",
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    if (open) {
      void refresh();
      void refreshShared();
    }
  }, [open]);

  async function handleSave() {
    setBusy(true);
    try {
      const record = await saveCharacter(build);
      setSavedId(record.id);
      await refresh();
      toast({
        title: "Character saved",
        description: `${record.name} is now in your local character repository.`,
      });
      void publishQuietly(record);
    } catch (error) {
      toast({
        title: "Save failed",
        description: error instanceof Error ? error.message : "Could not save this character.",
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  }

  async function handleUpdate(record: SavedCharacter) {
    setBusy(true);
    try {
      const updated = await saveCharacter(build, record.id);
      setSavedId(record.id);
      await refresh();
      toast({ title: "Character updated", description: `${build.name || "Character"} was updated.` });
      void publishQuietly(updated);
    } catch (error) {
      toast({
        title: "Update failed",
        description: error instanceof Error ? error.message : "Could not update this character.",
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(record: SavedCharacter) {
    if (!window.confirm(`Delete "${record.name}" from the character repository?`)) return;
    try {
      const wasShared = myLocalIds.has(record.id);
      await deleteSavedCharacter(record.id);
      if (wasShared) {
        try {
          await unshareCharacter(record.id);
          await refreshShared();
        } catch {
          /* shelf cleanup is best-effort; the local delete already landed */
        }
      }
      if (savedId === record.id) setSavedId(undefined);
      await refresh();
      toast({
        title: "Character deleted",
        description: wasShared ? `${record.name} was removed, including its copy on the group shelf.` : `${record.name} was removed.`,
      });
    } catch (error) {
      toast({
        title: "Delete failed",
        description: error instanceof Error ? error.message : "Could not delete this character.",
        variant: "destructive",
      });
    }
  }

  function handleLoad(record: SavedCharacter) {
    onLoad(structuredClone(record.build));
    setSavedId(record.id);
    setOpen(false);
    toast({ title: "Character loaded", description: `Loaded ${record.name}.` });
  }

  async function handleLoadShared(meta: SharedCharacterMeta) {
    setBusy(true);
    try {
      const sharedBuild = await fetchSharedBuild(meta.id);
      onLoad(structuredClone(sharedBuild));
      setSavedId(undefined);
      setOpen(false);
      toast({
        title: "Character loaded from the group shelf",
        description: `Loaded ${meta.name}. Saving it keeps your own copy and publishes it under your name.`,
      });
    } catch (error) {
      toast({
        title: "Could not open that character",
        description: error instanceof Error ? error.message : "The group shelf could not be reached.",
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  }

  async function handleRemoveShared(meta: SharedCharacterMeta) {
    if (!window.confirm(`Remove "${meta.name}" from the group shelf? Everyone will stop seeing it there.`)) return;
    try {
      await deleteSharedCharacter(meta.id);
      await refreshShared();
      toast({ title: "Removed from the group shelf", description: `${meta.name} is off the shelf.` });
    } catch (error) {
      toast({
        title: "Remove failed",
        description: error instanceof Error ? error.message : "The group shelf could not be reached.",
        variant: "destructive",
      });
    }
  }

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return records;
    return records.filter((record) => record.name.toLowerCase().includes(needle));
  }, [records, query]);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {part !== "characters" && (
        <Button variant="outline" size="sm" onClick={handleSave} disabled={busy} className="px-2 sm:px-3" data-testid="button-save-character">
          {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin sm:mr-1.5" /> : <Check className="h-3.5 w-3.5 sm:mr-1.5" />}
          <span className="hidden sm:inline">Save</span>
        </Button>
      )}

      {part !== "save" && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="px-2 sm:px-3" data-testid="button-character-repository">
            <BookOpen className="h-3.5 w-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Characters</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="flex h-[100dvh] max-h-[100dvh] w-[100vw] max-w-none flex-col rounded-none sm:max-w-none sm:rounded-none">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Character Repository</DialogTitle>
            <DialogDescription>
              Saved characters are kept locally in this browser. They remain available after closing and reopening Blendcrafter — and every save is also published to the group shelf below, so the whole table can open it.
            </DialogDescription>
          </DialogHeader>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search saved characters..."
                className="pl-8"
                aria-label="Search saved characters"
                data-testid="input-search-characters"
              />
            </div>
            <Button onClick={handleSave} disabled={busy} variant="secondary">
              Save New
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <div className="rounded-md border border-dashed border-card-border p-8 text-center text-sm text-muted-foreground">
                {records.length === 0 ? "No characters have been saved yet." : "No saved characters match your search."}
              </div>
            ) : (
              <div className="space-y-2">
                {filtered.map((record) => (
                  <div key={record.id} className="rounded-lg border border-card-border bg-card p-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate font-medium">{record.name}</h3>
                          {savedId === record.id && <Badge variant="secondary">Current</Badge>}
                          {myLocalIds.has(record.id) && <Badge variant="outline">On group shelf</Badge>}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Updated {formatDate(record.updatedAt)}
                        </p>
                      </div>
                      <div className="flex shrink-0 gap-1.5">
                        <Button size="sm" onClick={() => handleLoad(record)} data-testid={`button-load-character-${record.id}`}>
                          <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Load
                        </Button>
                        {savedId === record.id && (
                          <Button size="sm" variant="outline" onClick={() => handleUpdate(record)} disabled={busy}>
                            <Check className="mr-1.5 h-3.5 w-3.5" /> Update
                          </Button>
                        )}
                        <Button size="icon" variant="outline" onClick={() => handleDelete(record)} aria-label={`Delete ${record.name}`}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 border-t border-card-border pt-4">
            <div className="mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-display text-base">Group shelf</h3>
              <span className="text-xs text-muted-foreground">Shared with everyone at the table — saving a character publishes it here.</span>
            </div>
            {shelfStatus === "loading" ? (
              <div className="rounded-md border border-dashed border-card-border p-4 text-sm text-muted-foreground">
                Checking the group shelf…
              </div>
            ) : shelfStatus === "unavailable" ? (
              <div className="rounded-md border border-dashed border-card-border p-4 text-sm text-muted-foreground">
                The group shelf isn't set up yet — it needs a one-time table in the shared campaign database (Shaun has the setup). Until then, saves stay in this browser only, exactly as before.
                <Button size="sm" variant="outline" className="ml-3" onClick={() => void refreshShared()}>
                  Check again
                </Button>
              </div>
            ) : shelfStatus === "error" ? (
              <div className="rounded-md border border-dashed border-card-border p-4 text-sm text-muted-foreground">
                The group shelf couldn't be reached just now. Local saving is unaffected.
                <Button size="sm" variant="outline" className="ml-3" onClick={() => void refreshShared()}>
                  Try again
                </Button>
              </div>
            ) : shared.length === 0 ? (
              <div className="rounded-md border border-dashed border-card-border p-4 text-sm text-muted-foreground">
                Nothing on the shelf yet — the first character anyone saves will appear here for the whole table.
              </div>
            ) : (
              <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
                {shared.map((meta) => (
                  <div key={meta.id} className="rounded-lg border border-card-border bg-card p-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="truncate font-medium">{meta.name}</h4>
                          {mySharedIds.has(meta.id) && <Badge variant="outline">Shared from this browser</Badge>}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Updated {formatDate(meta.updated_at)}</p>
                      </div>
                      <div className="flex shrink-0 gap-1.5">
                        <Button size="sm" onClick={() => void handleLoadShared(meta)} disabled={busy} data-testid={`button-load-shared-${meta.id}`}>
                          <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Load
                        </Button>
                        <Button size="icon" variant="outline" onClick={() => void handleRemoveShared(meta)} aria-label={`Remove ${meta.name} from the group shelf`}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      )}
    </div>
  );
}
