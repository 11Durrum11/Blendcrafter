import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronRight, GripVertical, Search, Zap } from "lucide-react";
import { ALL_FEATS } from "@/data";
import type { FeatDefinition, ResolvedCharacter, Ruleset } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CLASS_BONUS_FEAT_RULES } from "@/lib/class-bonus-feats";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { describeFeat, type EntityDetail } from "@/lib/entity-descriptions";

interface StepFeatsProps {
  featIds: string[];
  enabledRulesets: Ruleset[];
  disabledFeatIds: string[];
  resolved: ResolvedCharacter;
  onToggleFeat: (featId: string, selected: boolean) => void;
  onToggleFeatEnabled: (featId: string, enabled: boolean) => void;
}

const CATEGORY_LABELS: Record<FeatDefinition["category"], string> = {
  general: "General",
  "item-creation": "Item Creation",
  metamagic: "Metamagic",
  "race-specific": "Race-Specific",
  "setting-specific": "Setting-Specific",
  combat: "Combat",
};

/** Section order for the grouped feat list (Shaun, 2026-11-02). */
export const FEAT_CATEGORY_ORDER: FeatDefinition["category"][] = [
  "general",
  "combat",
  "item-creation",
  "metamagic",
  "race-specific",
  "setting-specific",
];

/**
 * The fighter bonus feat rule (record-text designations + the PHB
 * list + Player's Handbook II designations) and every other class's
 * bonus-feat rule live in src/lib/class-bonus-feats.ts. Re-exported
 * here for existing callers.
 */
export { isFighterBonusFeat } from "@/lib/class-bonus-feats";

/**
 * Best-effort free-text prerequisite check against ability scores / BAB / other selected
 * feats. This never hard-blocks selection — it only renders a warning badge, per spec,
 * since feat prerequisite text isn't structured data the way template prerequisites are.
 */
function looksUnmet(feat: FeatDefinition, resolved: ResolvedCharacter, selectedFeatIds: string[]): boolean {
  for (const raw of feat.prerequisites) {
    const p = raw.toLowerCase();
    const babMatch = p.match(/base attack bonus \+?(\d+)/);
    if (babMatch && resolved.bab.total < Number(babMatch[1])) return true;
    const abilityMatch = p.match(/(strength|dexterity|constitution|intelligence|wisdom|charisma) (\d+)/);
    if (abilityMatch) {
      const key = abilityMatch[1].slice(0, 3) as "str" | "dex" | "con" | "int" | "wis" | "cha";
      const score = resolved.abilityScores[key]?.total;
      if (score !== null && score !== undefined && score < Number(abilityMatch[2])) return true;
    }
    // "Feat X" as a prerequisite for another feat — check it's among current selections.
    const featNameMatch = ALL_FEATS.find((f) => f.id !== feat.id && p.includes(f.name.toLowerCase()));
    if (featNameMatch && !selectedFeatIds.includes(featNameMatch.id)) return true;
  }
  return false;
}

export function StepFeats({ featIds, enabledRulesets, disabledFeatIds, resolved, onToggleFeat, onToggleFeatEnabled }: StepFeatsProps) {
  const [query, setQuery] = useState("");
  const [detailFeat, setDetailFeat] = useState<FeatDefinition | null>(null);
  // Sections collapsed to their titles (Shaun, 2026-11-02): every
  // feat section — Fighter Bonus Feats included — closes down to
  // just its heading; a section opens only when its title is
  // clicked. While a search is typed, matching sections show open
  // so the results are visible.
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const toggleSection = (id: string) =>
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  // Draggable section titles (Shaun, 2026-11-02): press a section
  // title and drag to rearrange the sections; a plain click (no
  // drag) still expands/collapses. Pointer-based so it works with
  // touch as well as a mouse. The chosen order is a UI preference
  // kept in localStorage (like the toggle prefs), not per-build.
  const SECTION_ORDER_KEY = "blendcrafter:feat-section-order";
  const [sectionOrder, setSectionOrder] = useState<string[]>(() => {
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(SECTION_ORDER_KEY) ?? "null");
      return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(SECTION_ORDER_KEY, JSON.stringify(sectionOrder));
    } catch {
      /* storage unavailable — order just won't persist */
    }
  }, [sectionOrder]);
  const dragRef = useRef<{ id: string; startY: number; dragging: boolean } | null>(null);
  const justDraggedRef = useRef(false);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const visible = ALL_FEATS.filter(
    (f) => enabledRulesets.includes(f.ruleset) && f.name.toLowerCase().includes(query.toLowerCase())
  );
  const used = resolved.featSlots.used;
  const total = resolved.featSlots.total;

  // Feats grouped into class bonus-feat sections first (Shaun,
  // 2026-11-02: the PHB fighter bonus-feat list, and the same
  // treatment for every class that grants selectable bonus feats —
  // see src/lib/class-bonus-feats.ts), then by category.
  // Single-listing: a feat appears in the first section whose rule
  // it matches and nowhere else. A class section whose whole list
  // was claimed by earlier sections still shows its heading (with
  // its source note) as a pointer — unless a search is filtering
  // the list, in which case empty sections disappear entirely.
  const claimed = new Set<string>();
  const classSections = CLASS_BONUS_FEAT_RULES.map((rule) => {
    const matching = visible.filter((f) => rule.matches(f));
    const feats = matching.filter((f) => !claimed.has(f.id));
    for (const f of feats) claimed.add(f.id);
    return {
      id: `class-${rule.classId}`,
      label: rule.sectionLabel,
      note: rule.note as string | undefined,
      feats,
      shadowed: matching.length - feats.length,
    };
  });
  const featSections: { id: string; label: string; note?: string; feats: FeatDefinition[]; shadowed: number }[] = [
    ...classSections,
    ...FEAT_CATEGORY_ORDER.map((cat) => ({
      id: cat as string,
      label: CATEGORY_LABELS[cat],
      feats: visible.filter((f) => f.category === cat && !claimed.has(f.id)),
      shadowed: 0,
    })),
  ].filter((s) => s.feats.length > 0 || (query === "" && s.shadowed > 0));
  const orderedSections = useMemo(() => {
    const rank = (id: string) => {
      const i = sectionOrder.indexOf(id);
      return i === -1 ? Number.MAX_SAFE_INTEGER : i;
    };
    return featSections
      .map((section, i) => ({ section, i }))
      .sort((a, b) => rank(a.section.id) - rank(b.section.id) || a.i - b.i)
      .map(({ section }) => section);
  }, [featSections, sectionOrder]);

  // Minimized to the name (Shaun, 2026-11-02): the feats list
  // shows just each feat's name, like the flaw/trait pickers.
  // Hovering a name shows the truncated crunch (the short benefit
  // summary, clamped, plus prerequisites); clicking the name opens
  // the full-crunch dialog. The checkbox still picks the feat. The
  // per-feat enable/disable switch moved into that dialog, so a
  // turned-off feat is switched back on from its own full view.
  // Graying is unchanged: prerequisites-not-met renders muted,
  // a chosen feat keeps full strength.
  const renderFeatName = (feat: FeatDefinition) => {
    const selected = featIds.includes(feat.id);
    const unmet = looksUnmet(feat, resolved, featIds);
    const isDisabled = disabledFeatIds.includes(feat.id);
    const grayed = unmet && !selected && !isDisabled;
    return (
      <label
        key={feat.id}
        className={cn(
          "flex items-start gap-1.5 rounded p-1.5",
          isDisabled ? "opacity-50" : "cursor-pointer hover:bg-muted/40"
        )}
        data-testid={`feat-option-${feat.id}`}
      >
        <input
          type="checkbox"
          className="mt-0.5 shrink-0 accent-primary"
          checked={selected}
          disabled={isDisabled}
          onChange={() => onToggleFeat(feat.id, !selected)}
          data-testid={`checkbox-feat-${feat.id}`}
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={cn(
                "text-left text-sm font-medium leading-tight underline-offset-2 hover:underline",
                (grayed || isDisabled) && "text-muted-foreground",
                grayed && "saturate-50"
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDetailFeat(feat);
              }}
              data-testid={`feat-name-${feat.id}`}
            >
              {feat.name}
            </button>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm text-xs">
            <p className="font-semibold">{feat.name}</p>
            <p className="mt-0.5 line-clamp-3">{feat.benefitSummary}</p>
            {feat.prerequisites.length > 0 && (
              <p className="mt-1">
                <span className="font-medium">Prereqs:</span> {feat.prerequisites.join("; ")}
              </p>
            )}
            {unmet && (
              <p className="mt-1 text-amber-500">Prerequisites not verified against your current build.</p>
            )}
          </TooltipContent>
        </Tooltip>
      </label>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" /> Feats
          </CardTitle>
          <CardDescription>
            The list is names only: <span className="font-medium">hover a name</span> for the short crunch,{" "}
            <span className="font-medium">click it</span> for the whole thing. Feats whose prerequisites don't
            look met are <span className="font-medium">grayed out</span> — prerequisites are shown as free text and are{" "}
            <span className="font-medium">not enforced</span>. Source:{" "}
            <a href="https://www.d20srd.org/srd/feats.htm" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Feats
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-card-border bg-card p-3">
            <div className="text-sm">
              <span className="font-display text-lg font-semibold tabular-nums" data-testid="text-feat-slots-used">
                {used} / {total}
              </span>
              <span className="text-muted-foreground"> feat slots used</span>
            </div>
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search feats…"
                className="h-8 pl-8"
                data-testid="input-feat-search"
              />
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">No feats match your search or the enabled rule sets.</p>
          ) : (
            <div className="grid grid-cols-2 items-start gap-x-4 gap-y-5 sm:grid-cols-4">
            {orderedSections.map((section) => {
              const turnedOn = section.feats.filter((f) => !disabledFeatIds.includes(f.id));
              const turnedOff = section.feats.filter((f) => disabledFeatIds.includes(f.id));
              // Active feats to the top (Shaun, 2026-11-02): within a
              // section, the feats the build qualifies for (and any
              // already chosen) list first; the grayed-out ones sink
              // below under their own subheading, the same pattern as
              // the turned-off segregation.
              const isGrayed = (f: FeatDefinition) => looksUnmet(f, resolved, featIds) && !featIds.includes(f.id);
              const active = turnedOn.filter((f) => !isGrayed(f));
              const grayedOut = turnedOn.filter(isGrayed);
              const expanded = query !== "" || expandedSections.has(section.id);
              return (
                <div
                  key={section.id}
                  className={cn("rounded-md", expanded && "col-span-full", draggingId === section.id && "ring-2 ring-primary/50")}
                  data-testid={`feat-section-${section.id}`}
                  data-feat-section={section.id}
                >
                  <button
                    type="button"
                    className="flex w-full cursor-grab touch-none select-none items-center gap-2 text-left active:cursor-grabbing"
                    onClick={() => {
                      if (justDraggedRef.current) return;
                      toggleSection(section.id);
                    }}
                    onPointerDown={(e) => {
                      dragRef.current = { id: section.id, startY: e.clientY, dragging: false };
                      try {
                        e.currentTarget.setPointerCapture(e.pointerId);
                      } catch {
                        /* capture unsupported — drag still tracks via the button */
                      }
                    }}
                    onPointerMove={(e) => {
                      const d = dragRef.current;
                      if (!d || d.id !== section.id) return;
                      if (!d.dragging && Math.abs(e.clientY - d.startY) > 8) {
                        d.dragging = true;
                        setDraggingId(d.id);
                      }
                      if (d.dragging) {
                        const over = document
                          .elementFromPoint(e.clientX, e.clientY)
                          ?.closest<HTMLElement>("[data-feat-section]")?.dataset.featSection;
                        if (over && over !== d.id) {
                          const ids = orderedSections.map((x) => x.id);
                          const from = ids.indexOf(d.id);
                          const to = ids.indexOf(over);
                          if (from !== -1 && to !== -1) {
                            ids.splice(to, 0, ids.splice(from, 1)[0]);
                            setSectionOrder(ids);
                          }
                        }
                      }
                    }}
                    onPointerUp={() => {
                      if (dragRef.current?.dragging) {
                        justDraggedRef.current = true;
                        setTimeout(() => {
                          justDraggedRef.current = false;
                        }, 50);
                      }
                      dragRef.current = null;
                      setDraggingId(null);
                    }}
                    onPointerCancel={() => {
                      dragRef.current = null;
                      setDraggingId(null);
                    }}
                    aria-expanded={expanded}
                    data-testid={`feat-section-toggle-${section.id}`}
                  >
                    <GripVertical className="h-4 w-4 shrink-0 text-muted-foreground" />
                    {expanded ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
                    <span className="font-display text-base font-semibold">{section.label}</span>
                    <span className="text-xs font-normal text-muted-foreground">({section.feats.length})</span>
                  </button>
                  {expanded && (
                    <>
                  {section.note && <p className="mt-0.5 text-xs text-muted-foreground">{section.note}</p>}
                  {section.feats.length === 0 && (
                    <p className="mt-1 text-xs italic text-muted-foreground">Every feat on this list is listed in an earlier section above.</p>
                  )}
                  {active.length > 0 && <div className="mt-2 grid grid-cols-1 gap-1">{active.map(renderFeatName)}</div>}
                  {grayedOut.length > 0 && (
                    <>
                      <h5 className="mt-4 font-display text-sm font-semibold text-muted-foreground">Prerequisites not met</h5>
                      <div className="mt-2 grid grid-cols-1 gap-1">{grayedOut.map(renderFeatName)}</div>
                    </>
                  )}
                  {turnedOff.length > 0 && (
                    <>
                      <h5 className="mt-4 font-display text-sm font-semibold text-muted-foreground">Turned off</h5>
                      <div className="mt-2 grid grid-cols-1 gap-1">{turnedOff.map(renderFeatName)}</div>
                    </>
                  )}
                    </>
                  )}
                </div>
              );
            })}
            </div>
          )}
        </CardContent>
      </Card>
      <EntityDetailDialog
        detail={detailFeat ? describeFeat(detailFeat) : null}
        onOpenChange={(open) => !open && setDetailFeat(null)}
        headerAction={
          detailFeat ? (
            <Switch
              checked={!disabledFeatIds.includes(detailFeat.id)}
              onCheckedChange={(checked) => onToggleFeatEnabled(detailFeat.id, checked)}
              aria-label={disabledFeatIds.includes(detailFeat.id) ? `Enable ${detailFeat.name}` : `Disable ${detailFeat.name}`}
              data-testid={`switch-enable-feat-${detailFeat.id}`}
            />
          ) : undefined
        }
      />
    </div>
  );
}
