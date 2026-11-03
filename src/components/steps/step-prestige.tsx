import { useMemo, useState } from "react";
import { AlertTriangle, Check, HelpCircle, Lock, Minus, Plus, X } from "lucide-react";
import { ALL_PRESTIGE_CLASSES } from "@/data";
import type { ClassLevelChoice, PrestigeClassDefinition, ResolvedCharacter, Ruleset } from "@/engine/types";
import { buildPrereqContext, evaluatePrestigeClass, type PrestigeGateResult } from "@/engine/prestige-prerequisites";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { describePrestigeClass } from "@/lib/entity-descriptions";

/**
 * Step 2B — Prestige Classes (Shaun, 2026-11-03: "Separate the
 * classes and the prestige classes. Call it 2B, prestige classes.").
 *
 * Ordering law (Shaun, 2026-10-28, restated 2026-11-03): prestige
 * classes whose prerequisites are MET sit on top; ALL non-met drop
 * to the bottom under their own "Prerequisites not met" subheading,
 * grayed out and blocked. Turned-off classes sink below both, under
 * "Turned off" (the 2026-10-28 segregation, as with the races);
 * within every group met floats above non-met. The sort is stable —
 * original order is preserved inside each tier.
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
  onToggleClassEnabled,
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
          <Badge variant="outline" className="shrink-0 font-mono">
            Lv {current?.levels ?? 0}
          </Badge>
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Prestige Classes</CardTitle>
          <CardDescription>
            Prerequisites are <span className="font-medium">enforced</span>: a prestige class stays grayed out and
            blocked until every prerequisite is met, and every class whose prerequisites are not met drops to the
            bottom, under "Prerequisites not met". Requirements the builder can check — base attack bonus, base
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
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{prestigeMet.map(renderPrestigeCard)}</div>
              )}
              {prestigeNonMet.length > 0 && (
                <>
                  <h4 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Prerequisites not met</h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{prestigeNonMet.map(renderPrestigeCard)}</div>
                </>
              )}
              {prestigeOff.length > 0 && (
                <>
                  <h4 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Turned off</h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{prestigeOff.map(renderPrestigeCard)}</div>
                </>
              )}
            </>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Total prestige levels: <span className="font-mono text-foreground">{totalPrestigeLevels}</span>
          </p>
        </CardContent>
      </Card>
      <EntityDetailDialog
        detail={detailClass ? describePrestigeClass(detailClass) : null}
        onOpenChange={(open) => !open && setDetailClass(null)}
        footer={
          detailClass ? (
            <div className="flex items-center justify-between gap-3 border-t border-card-border pt-3">
              <span className="text-sm">
                {disabledClassIds.includes(detailClass.id)
                  ? "This class is turned off for your characters."
                  : "This class is turned on."}
              </span>
              <Switch
                checked={!disabledClassIds.includes(detailClass.id)}
                onCheckedChange={(checked) => onToggleClassEnabled(detailClass.id, checked)}
                aria-label={disabledClassIds.includes(detailClass.id) ? `Enable ${detailClass.name}` : `Disable ${detailClass.name}`}
                data-testid={`switch-enable-prestige-${detailClass.id}`}
              />
            </div>
          ) : undefined
        }
      />
    </div>
  );
}
