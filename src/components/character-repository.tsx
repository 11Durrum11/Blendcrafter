import { useEffect, useMemo, useState } from "react";
import { BookOpen, Check, Loader2, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import type { CharacterBuild } from "@/engine/types";
import { deleteSavedCharacter, listSavedCharacters, saveCharacter, type SavedCharacter } from "@/lib/character-repository";

interface CharacterRepositoryProps {
  build: CharacterBuild;
  onLoad: (build: CharacterBuild) => void;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function CharacterRepository({ build, onLoad }: CharacterRepositoryProps) {
  const [open, setOpen] = useState(false);
  const [records, setRecords] = useState<SavedCharacter[]>([]);
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState(false);
  const [savedId, setSavedId] = useState<string>();
  const { toast } = useToast();

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
    if (open) void refresh();
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
      await saveCharacter(build, record.id);
      setSavedId(record.id);
      await refresh();
      toast({ title: "Character updated", description: `${build.name || "Character"} was updated.` });
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
      await deleteSavedCharacter(record.id);
      if (savedId === record.id) setSavedId(undefined);
      await refresh();
      toast({ title: "Character deleted", description: `${record.name} was removed.` });
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

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return records;
    return records.filter((record) => record.name.toLowerCase().includes(needle));
  }, [records, query]);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Button variant="outline" size="sm" onClick={handleSave} disabled={busy} className="px-2 sm:px-3" data-testid="button-save-character">
        {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin sm:mr-1.5" /> : <Check className="h-3.5 w-3.5 sm:mr-1.5" />}
        <span className="hidden sm:inline">Save</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="px-2 sm:px-3" data-testid="button-character-repository">
            <BookOpen className="h-3.5 w-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Characters</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Character Repository</DialogTitle>
            <DialogDescription>
              Saved characters are kept locally in this browser. They remain available after closing and reopening Blendcrafter.
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

          <div className="max-h-[55vh] overflow-y-auto pr-1">
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
