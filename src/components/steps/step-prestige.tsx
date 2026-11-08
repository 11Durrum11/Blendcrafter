import { useMemo, useState } from "react";
import { AlertTriangle, Check, HelpCircle, Info, Lock, Minus, Plus, X } from "lucide-react";
import { ALL_PRESTIGE_CLASSES } from "@/data";
import type { ClassLevelChoice, PrestigeClassDefinition, ResolvedCharacter, Ruleset } from "@/engine/types";
import { buildPrereqContext, evaluatePrestigeClass, type PrestigeGateResult } from "@/engine/prestige-prerequisites";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { withPieces } from "@/components/movable-pieces";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { describePrestigeClass } from "@/lib/entity-descriptions";

/**
 * Step 7 inside Character Creation — Prestige Classes (Shaun, 2026-11-03: "Separate the
 * classes and the prestige classes." First built as "2B" right after
 * Classes; moved here, after Spells, at Shaun's order the same day —
 * the gate judges skills, templates, feats and spell picks, so those
 * steps must be finished first for anything to register as met.)
 *
 * Ordering law (Shaun, 2026-10-28, restated 2026-11-03): prestige
 * classes whose prerequisites are MET sit on top; ALL non-met drop
 * to the bottom under their own "Prerequisites not met" subheading,
 * grayed out and blocked. Turned-off classes sink below both, under
 * "Turned off" (the 2026-10-28 segregation, as with the races);
 * within every group met floats above non-met. The sort is stable —
 * original order is preserved inside each tier.
 *
 * Minimized to names (Shaun, 2026-11-03): "Minimize the prestige
 * classes down to their names. Unless they are prerequisites met."
 * Only a prerequisites-MET class renders as a full card. A non-met
 * class renders as just its name (the name still opens the full
 * breakdown dialog) — with one necessity kept: a class blocked
 * only by player-certifiable "special" prerequisites still shows
 * those certify checkboxes under its name, or it could never
 * become met. A class the build has already TAKEN also keeps its
 * full card even if its prerequisites later break — its levels
 * have to stay manageable (remove button, warning).
 */
export function sortPrestigeByPrereqMet<T extends { id: string }>(
  list: T[],
  gates: Map<string, { selectable: boolean }>
): T[] {
  return [...list].sort(
    (a, b) => Number(gates.get(b.id)?.selectable ?? false) - Number(gates.get(a.id)?.selectable ?? false)
  );
}

interface StepPrestigeProps {
  prestigeClassLevels: ClassLevelChoice[];
  enabledRulesets: Ruleset[];
  disabledClassIds: string[];
  certifications: Record<string, string[]>;
  resolved: ResolvedCharacter;
  onAddPrestige: (classId: string) => void;
  onRemovePrestige: (classId: string) => void;
  /** Still passed by the builder and still part of the build's toggle
   * state — but no longer rendered: the prestige dialog carries no
   * toggle switch (Shaun, 2026-11-03). */
  onToggleClassEnabled: (classId: string, enabled: boolean) => void;
  onTogglePrestigeCertification: (classId: string, prereqText: string, certified: boolean) => void;
}

export function StepPrestige({
  prestigeClassLevels,
  enabledRulesets,
  disabledClassIds,
  certifications,
  resolved,
  onAddPrestige,
  onRemovePrestige,
  onTogglePrestigeCertification,
}: StepPrestigeProps) {
  const [detailClass, setDetailClass] = useState<PrestigeClassDefinition | null>(null);
  const totalPrestigeLevels = prestigeClassLevels.reduce((s, c) => s + c.levels, 0);
  const visiblePrestige = ALL_PRESTIGE_CLASSES.filter((cls) => enabledRulesets.includes(cls.ruleset));

  // Prestige prerequisites are hard-gated: evaluate every visible class
  // against the resolved build. A class is selectable only when every
  // machine-checkable prerequisite is met and every "special" prerequisite
  // has been certified by the player.
  const prestigeGates = useMemo(() => {
    const ctx = buildPrereqContext(resolved);
    const gates = new Map<string, PrestigeGateResult>();
    for (const cls of ALL_PRESTIGE_CLASSES) {
      if (!enabledRulesets.includes(cls.ruleset)) continue;
      gates.set(cls.id, evaluatePrestigeClass(cls, ctx, certifications[cls.id] ?? []));
    }
    return gates;
  }, [resolved, certifications, enabledRulesets]);

  // The tiers (Shaun, 2026-11-03): met on top, ALL non-met dropped to
  // the bottom, turned-off below everything.
  const prestigeOn = visiblePrestige.filter((cls) => !disabledClassIds.includes(cls.id));
  const prestigeOff = sortPrestigeByPrereqMet(
    visiblePrestige.filter((cls) => disabledClassIds.includes(cls.id)),
    prestigeGates
  );
  const prestigeMet = prestigeOn.filter((cls) => prestigeGates.get(cls.id)?.selectable);
  const prestigeNonMet = prestigeOn.filter((cls) => !prestigeGates.get(cls.id)?.selectable);

  const renderPrestigeCard = (cls: (typeof visiblePrestige)[number]) => {
    const current = prestigeClassLevels.find((c) => c.classId === cls.id);
    const row = current ? cls.progression.find((r) => r.level === current.levels) : undefined;
    const gate = prestigeGates.get(cls.id);
    const taken = (current?.levels ?? 0) > 0;
    const takenUnmet = taken && (gate?.entries.some((e) => e.status === "unmet") ?? false);
    const blocked = !(gate?.selectable ?? true);
    const isDisabled = disabledClassIds.includes(cls.id);
    return (
      <div
        key={cls.id}
        className={cn(
          "rounded-md border border-card-border bg-card p-3",
          // Shaun's rule (2026-10-28): ALL prestige classes stay grayed
          // out until their prerequisites are met — including one whose
          // levels were taken and whose prerequisites later broke (it
          // keeps its red warning and its remove button below).
          (isDisabled || blocked) && "opacity-50"
        )}
        data-testid={`prestige-card-${cls.id}`}
      >
        <div className="flex items-center justify-between gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => setDetailClass(cls)}
                className="text-left font-display text-base font-semibold leading-tight underline-offset-2 hover:underline"
                aria-label={`View description of ${cls.name}`}
                data-testid={`button-info-prestige-${cls.id}`}
              >
                {cls.name}
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm text-xs">
              <p className="font-semibold">{cls.name}</p>
              <p className="mt-0.5">
                Hit Die {cls.hitDie} · {cls.babProgression} BAB · {cls.skillPointsPerLevel} skill points per level
              </p>
              {row && current && (
                <p className="mt-0.5 font-mono">
                  Level {current.levels}: BAB +{row.bab} · Fort +{row.fort} · Ref +{row.ref} · Will +{row.will}
                </p>
              )}
            </TooltipContent>
          </Tooltip>
          <div className="flex shrink-0 items-center gap-1.5">
            {/* The breakdown button, same as the Classes step
                (Shaun, 2026-11-03) — the round info button opening
                the full prestige-class breakdown dialog:
                prerequisites, every level of the progression table
                and every class feature. The name still opens it
                too. */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDetailClass(cls);
              }}
              className="shrink-0 rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
              aria-label={`Full breakdown of ${cls.name}`}
              data-testid={`button-breakdown-prestige-${cls.id}`}
            >
              <Info className="h-3.5 w-3.5" />
            </button>
            <Badge variant="outline" className="shrink-0 font-mono">
              Lv {current?.levels ?? 0}
            </Badge>
          </div>
        </div>
        {gate && gate.entries.length > 0 && (
          <div className="mt-2 space-y-1.5" data-testid={`prereq-list-${cls.id}`}>
            <div className="text-xs font-medium text-foreground">Prerequisites:</div>
            {gate.entries.map((entry, i) => {
              const unmetReasons = entry.fragments
                .filter((f) => f.status === "unmet")
                .map((f) => f.reason ?? f.text);
              return (
                <div key={i} className="text-xs">
                  <div className="flex items-start gap-1.5">
                    {entry.status === "met" || (entry.status === "special" && entry.certified) ? (
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    ) : entry.status === "unmet" ? (
                      <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
                    ) : (
                      <HelpCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                    )}
                    <span className={entry.status === "unmet" ? "text-foreground" : "text-muted-foreground"}>
                      {entry.text}
                    </span>
                  </div>
                  {entry.status === "unmet" && unmetReasons.length > 0 && (
                    <div className="ml-5 text-destructive">{unmetReasons.join("; ")}</div>
                  )}
                  {entry.status === "special" && (
                    <div className="ml-5 mt-1 flex items-center gap-2">
                      <Checkbox
                        id={`certify-${cls.id}-${i}`}
                        checked={entry.certified}
                        onCheckedChange={(checked) =>
                          onTogglePrestigeCertification(cls.id, entry.text, checked === true)
                        }
                        data-testid={`checkbox-certify-${cls.id}-${i}`}
                      />
                      <Label htmlFor={`certify-${cls.id}-${i}`} className="text-xs font-normal text-muted-foreground">
                        {entry.certified
                          ? "Confirmed — you meet this requirement"
                          : "Can't be auto-checked — I meet this requirement"}
                      </Label>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {takenUnmet && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-destructive" data-testid={`warning-prereq-${cls.id}`}>
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> Prerequisites no longer met — existing
            levels are kept, but further levels are blocked.
          </div>
        )}
        {blocked && !taken && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground" data-testid={`gate-locked-${cls.id}`}>
            <Lock className="h-3.5 w-3.5 shrink-0" /> Locked — meet the prerequisites above to take
            this class.
          </div>
        )}
        {row && (
          <div className="mt-2 flex gap-3 text-xs text-muted-foreground font-mono">
            <span>BAB +{row.bab}</span>
            <span>Fort +{row.fort}</span>
            <span>Ref +{row.ref}</span>
            <span>Will +{row.will}</span>
          </div>
        )}
        <div className="mt-3 flex items-center gap-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="h-7 w-7"
            disabled={!current}
            onClick={() => onRemovePrestige(cls.id)}
            data-testid={`button-remove-prestige-level-${cls.id}`}
            aria-label={`Remove a level of ${cls.name}`}
          >
            <Minus className="h-3.5 w-3.5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="h-7 w-7"
            disabled={(current?.levels ?? 0) >= 10 || isDisabled || blocked}
            onClick={() => onAddPrestige(cls.id)}
            data-testid={`button-add-prestige-level-${cls.id}`}
            aria-label={`Add a level of ${cls.name}`}
          >
            <Plus className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    );
  };

  // The minimized form (Shaun, 2026-11-03): a non-met prestige
  // class is listed by name. The name still opens the full
  // breakdown dialog, so no information is lost. Kept under the
  // name: any "special" prerequisite's certify checkbox — for a
  // class blocked only by those, ticking them is what makes it
  // met, so they have to stay reachable here — and, since
  // 2026-11-04, the class's UNMET requirements as well. Shaun
  // read the bare names as "empty" (Archmage and a score of
  // others carry only hard-checked prerequisites, so nothing at
  // all printed under their names) and approved printing what
  // is unmet under every not-met name, the way the full cards
  // show it.
  const renderPrestigeNameRow = (cls: (typeof visiblePrestige)[number]) => {
    const gate = prestigeGates.get(cls.id);
    const specials = (gate?.entries ?? [])
      .map((entry, i) => ({ entry, i }))
      .filter(({ entry }) => entry.status === "special");
    const unmet = (gate?.entries ?? []).filter((entry) => entry.status === "unmet");
    return (
      <div key={cls.id} className="rounded-md px-1.5 py-1 opacity-50" data-testid={`prestige-card-${cls.id}`}>
        <button
          type="button"
          onClick={() => setDetailClass(cls)}
          className="text-left text-sm font-medium leading-tight text-muted-foreground underline-offset-2 hover:underline"
          aria-label={`View description of ${cls.name}`}
          data-testid={`button-info-prestige-${cls.id}`}
        >
          {cls.name}
        </button>
        {unmet.length > 0 && (
          <div className="mt-1 space-y-1" data-testid={`unmet-list-${cls.id}`}>
            {unmet.map((entry, i) => {
              const reasons = entry.fragments
                .filter((f) => f.status === "unmet")
                .map((f) => f.reason ?? f.text);
              return (
                <div key={i} className="text-xs">
                  <div className="text-muted-foreground">{entry.text}</div>
                  {reasons.length > 0 && <div className="text-destructive">{reasons.join("; ")}</div>}
                </div>
              );
            })}
          </div>
        )}
        {specials.length > 0 && (
          <div className="mt-1 space-y-1.5">
            {specials.map(({ entry, i }) => (
              <div key={i} className="text-xs">
                <div className="text-muted-foreground">{entry.text}</div>
                <div className="mt-0.5 flex items-center gap-2">
                  <Checkbox
                    id={`certify-${cls.id}-${i}`}
                    checked={entry.certified}
                    onCheckedChange={(checked) =>
                      onTogglePrestigeCertification(cls.id, entry.text, checked === true)
                    }
                    data-testid={`checkbox-certify-${cls.id}-${i}`}
                  />
                  <Label htmlFor={`certify-${cls.id}-${i}`} className="text-xs font-normal text-muted-foreground">
                    {entry.certified
                      ? "Confirmed — you meet this requirement"
                      : "Can't be auto-checked — I meet this requirement"}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Per tier: full cards first (met classes in the met tier;
  // taken classes anywhere — their levels stay manageable), then
  // the minimized name rows.
  const isTaken = (cls: (typeof visiblePrestige)[number]) =>
    (prestigeClassLevels.find((c) => c.classId === cls.id)?.levels ?? 0) > 0;
  const nonMetFull = prestigeNonMet.filter(isTaken);
  const nonMetNames = prestigeNonMet.filter((cls) => !isTaken(cls));
  const offFull = prestigeOff.filter((cls) => isTaken(cls) || prestigeGates.get(cls.id)?.selectable);
  const offNames = prestigeOff.filter((cls) => !isTaken(cls) && !prestigeGates.get(cls.id)?.selectable);

  return withPieces("step:prestige", (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Prestige Classes</CardTitle>
          <CardDescription>
            This step comes after Skills, Templates, Feats and Spells on purpose: prerequisites are judged
            against the finished build, and you must meet them <span className="font-medium">before</span> taking
            the class. Prerequisites are <span className="font-medium">enforced</span>: a prestige class stays grayed out and
            blocked until every prerequisite is met, and every class whose prerequisites are not met drops to the
            bottom, under "Prerequisites not met", where they are listed by name only until their prerequisites
            are met (tap a name for its full breakdown). Requirements the builder can check — base attack bonus, base
            saves, skill ranks, feats, race, alignment — are verified automatically against your build. The rest
            are listed with a checkbox so you can confirm you meet them. If a build changes so a taken class's
            prerequisites are no longer met, its levels are kept but further levels are blocked. Toggle additional
            rule sets in the header to see more options.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {visiblePrestige.length === 0 ? (
            <p className="text-sm text-muted-foreground">No prestige classes available for the enabled rule sets.</p>
          ) : (
            <>
              {prestigeMet.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{prestigeMet.map(renderPrestigeCard)}</div>
              )}
              {prestigeNonMet.length > 0 && (
                <>
                  <h4 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Prerequisites not met</h4>
                  {nonMetFull.length > 0 && (
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{nonMetFull.map(renderPrestigeCard)}</div>
                  )}
                  {nonMetNames.length > 0 && (
                    <div className="mt-3 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">{nonMetNames.map(renderPrestigeNameRow)}</div>
                  )}
                </>
              )}
              {prestigeOff.length > 0 && (
                <>
                  <h4 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Turned off</h4>
                  {offFull.length > 0 && (
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{offFull.map(renderPrestigeCard)}</div>
                  )}
                  {offNames.length > 0 && (
                    <div className="mt-3 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">{offNames.map(renderPrestigeNameRow)}</div>
                  )}
                </>
              )}
            </>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Total prestige levels: <span className="font-mono text-foreground">{totalPrestigeLevels}</span>
          </p>
        </CardContent>
      </Card>
      {/* No toggle switch in the prestige detail dialog either
          (Shaun, 2026-11-03: "Take off the toggle buttons for races
          and classes") — prestige classes share the classes' on/off
          list and handler, so their switch goes with the classes'
          switch. The on/off state itself is untouched: turned-off
          prestige classes still sit under their "Turned off"
          heading, exactly as set. */}
      <EntityDetailDialog
        detail={detailClass ? describePrestigeClass(detailClass) : null}
        onOpenChange={(open) => !open && setDetailClass(null)}
      />
    </div>
  ), { skip: [EntityDetailDialog] });
}
