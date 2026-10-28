import { useMemo, useState } from "react";
import { AlertTriangle, Check, HelpCircle, Info, Lock, Minus, Plus, X } from "lucide-react";
import { ALL_CLASSES, ALL_PRESTIGE_CLASSES } from "@/data";
import type { ClassLevelChoice, ResolvedCharacter, Ruleset } from "@/engine/types";
import { buildPrereqContext, evaluatePrestigeClass, type PrestigeGateResult } from "@/engine/prestige-prerequisites";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { describeClass, describePrestigeClass, type EntityDetail } from "@/lib/entity-descriptions";

/**
 * Prereq float (Shaun, 2026-10-28): prestige classes whose prerequisites
 * are met sit on top; everything else sinks to the bottom. Stable — the
 * original order is preserved within the met and unmet groups.
 */
export function sortPrestigeByPrereqMet<T extends { id: string }>(
  list: T[],
  gates: Map<string, { selectable: boolean }>
): T[] {
  return [...list].sort(
    (a, b) => Number(gates.get(b.id)?.selectable ?? false) - Number(gates.get(a.id)?.selectable ?? false)
  );
}

interface StepClassesProps {
  classLevels: ClassLevelChoice[];
  prestigeClassLevels: ClassLevelChoice[];
  enabledRulesets: Ruleset[];
  disabledClassIds: string[];
  certifications: Record<string, string[]>;
  resolved: ResolvedCharacter;
  onAdd: (classId: string) => void;
  onRemove: (classId: string) => void;
  onAddPrestige: (classId: string) => void;
  onRemovePrestige: (classId: string) => void;
  onToggleClassEnabled: (classId: string, enabled: boolean) => void;
  onTogglePrestigeCertification: (classId: string, prereqText: string, certified: boolean) => void;
}

export function StepClasses({
  classLevels,
  prestigeClassLevels,
  enabledRulesets,
  disabledClassIds,
  certifications,
  resolved,
  onAdd,
  onRemove,
  onAddPrestige,
  onRemovePrestige,
  onToggleClassEnabled,
  onTogglePrestigeCertification,
}: StepClassesProps) {
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  const totalLevels = classLevels.reduce((s, c) => s + c.levels, 0);
  const totalPrestigeLevels = prestigeClassLevels.reduce((s, c) => s + c.levels, 0);
  const visibleClasses = ALL_CLASSES.filter((cls) => enabledRulesets.includes(cls.ruleset));
  const visiblePrestige = ALL_PRESTIGE_CLASSES.filter((cls) => enabledRulesets.includes(cls.ruleset));
  // Segregation (Shaun, 2026-10-28 — the same treatment as the races):
  // turned-off classes sink below the turned-on ones under a "Turned
  // off" subheading, in both the base-class and prestige lists.
  const classesOn = visibleClasses.filter((cls) => !disabledClassIds.includes(cls.id));
  const classesOff = visibleClasses.filter((cls) => disabledClassIds.includes(cls.id));
  const prestigeOn = visiblePrestige.filter((cls) => !disabledClassIds.includes(cls.id));
  const prestigeOff = visiblePrestige.filter((cls) => disabledClassIds.includes(cls.id));

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

  // Met-prerequisite prestige classes float to the top of each list
  // (turned-on and turned-off alike); the rest sink below.
  const prestigeOnSorted = sortPrestigeByPrereqMet(prestigeOn, prestigeGates);
  const prestigeOffSorted = sortPrestigeByPrereqMet(prestigeOff, prestigeGates);

  const renderClassCard = (cls: (typeof visibleClasses)[number]) => {
    const current = classLevels.find((c) => c.classId === cls.id);
    const row = current ? cls.progression.find((r) => r.level === current.levels) : undefined;
    const isDisabled = disabledClassIds.includes(cls.id);
    return (
      <div
        key={cls.id}
        className={cn("rounded-md border border-card-border bg-card p-4", isDisabled && "opacity-50")}
        data-testid={`class-card-${cls.id}`}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5">
              <div className="font-display text-base font-semibold">{cls.name}</div>
              {cls.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[cls.ruleset]} />}
              <button
                type="button"
                onClick={() => setDetail(describeClass(cls))}
                className="rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
                aria-label={`View description of ${cls.name}`}
                data-testid={`button-info-class-${cls.id}`}
              >
                <Info className="h-3.5 w-3.5" />
              </button>
              <Switch
                checked={!isDisabled}
                onCheckedChange={(checked) => onToggleClassEnabled(cls.id, checked)}
                className="ml-auto shrink-0 scale-75"
                aria-label={isDisabled ? `Enable ${cls.name}` : `Disable ${cls.name}`}
                data-testid={`switch-enable-class-${cls.id}`}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              Hit Die {cls.hitDie} · {cls.babProgression} BAB
            </div>
          </div>
          <Badge variant="outline" className="font-mono">
            Lv {current?.levels ?? 0}
          </Badge>
        </div>
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
            disabled={!current || isDisabled}
            onClick={() => onRemove(cls.id)}
            data-testid={`button-remove-level-${cls.id}`}
            aria-label={`Remove a level of ${cls.name}`}
          >
            <Minus className="h-3.5 w-3.5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="h-7 w-7"
            disabled={(current?.levels ?? 0) >= 10 || isDisabled}
            onClick={() => onAdd(cls.id)}
            data-testid={`button-add-level-${cls.id}`}
            aria-label={`Add a level of ${cls.name}`}
          >
            <Plus className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    );
  };

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
          "rounded-md border border-card-border bg-card p-4",
          // Shaun's rule (2026-10-28): ALL prestige classes stay grayed
          // out until their prerequisites are met — including one whose
          // levels were taken and whose prerequisites later broke (it
          // keeps its red warning and its remove button below).
          (isDisabled || blocked) && "opacity-50"
        )}
        data-testid={`prestige-card-${cls.id}`}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-display text-base font-semibold">{cls.name}</span>
              <Badge variant="secondary" className="text-[10px]">Prestige</Badge>
              {cls.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[cls.ruleset]} />}
              <button
                type="button"
                onClick={() => setDetail(describePrestigeClass(cls))}
                className="rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
                aria-label={`View description of ${cls.name}`}
                data-testid={`button-info-prestige-${cls.id}`}
              >
                <Info className="h-3.5 w-3.5" />
              </button>
              <Switch
                checked={!isDisabled}
                onCheckedChange={(checked) => onToggleClassEnabled(cls.id, checked)}
                className="ml-auto shrink-0 scale-75"
                aria-label={isDisabled ? `Enable ${cls.name}` : `Disable ${cls.name}`}
                data-testid={`switch-enable-prestige-${cls.id}`}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              Hit Die {cls.hitDie} · {cls.babProgression} BAB
            </div>
          </div>
          <Badge variant="outline" className="font-mono">
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
        <a href={cls.sourceUrl} target="_blank" rel="noreferrer" className="mt-2 block text-[11px] text-primary underline underline-offset-2">
          {cls.source}
        </a>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Class Levels</CardTitle>
          <CardDescription>
            Multiclassing is allowed — add levels in any combination up to level 10 per class. Source:{" "}
            <a href="https://www.d20srd.org/srd/classes/" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Classes
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">{classesOn.map(renderClassCard)}</div>
          {classesOff.length > 0 && (
            <>
              <h4 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Turned off</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">{classesOff.map(renderClassCard)}</div>
            </>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Total class levels: <span className="font-mono text-foreground">{totalLevels}</span>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Prestige Classes</CardTitle>
          <CardDescription>
            Prerequisites are <span className="font-medium">enforced</span>: a prestige class stays grayed out and
            blocked until every prerequisite is met. Requirements the builder can check — base attack bonus, base
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
              <div className="grid gap-3 sm:grid-cols-2">{prestigeOnSorted.map(renderPrestigeCard)}</div>
              {prestigeOffSorted.length > 0 && (
                <>
                  <h4 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Turned off</h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">{prestigeOffSorted.map(renderPrestigeCard)}</div>
                </>
              )}
            </>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Total prestige levels: <span className="font-mono text-foreground">{totalPrestigeLevels}</span>
          </p>
        </CardContent>
      </Card>
      <EntityDetailDialog detail={detail} onOpenChange={(open) => !open && setDetail(null)} />
    </div>
  );
}
