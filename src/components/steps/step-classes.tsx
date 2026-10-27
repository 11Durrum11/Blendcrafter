import { useState } from "react";
import { AlertTriangle, Info, Minus, Plus } from "lucide-react";
import { ALL_CLASSES, ALL_PRESTIGE_CLASSES } from "@/data";
import type { ClassLevelChoice, ResolvedCharacter, Ruleset } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { describeClass, describePrestigeClass, type EntityDetail } from "@/lib/entity-descriptions";

interface StepClassesProps {
  classLevels: ClassLevelChoice[];
  prestigeClassLevels: ClassLevelChoice[];
  enabledRulesets: Ruleset[];
  disabledClassIds: string[];
  resolved: ResolvedCharacter;
  onAdd: (classId: string) => void;
  onRemove: (classId: string) => void;
  onAddPrestige: (classId: string) => void;
  onRemovePrestige: (classId: string) => void;
  onToggleClassEnabled: (classId: string, enabled: boolean) => void;
}

export function StepClasses({
  classLevels,
  prestigeClassLevels,
  enabledRulesets,
  disabledClassIds,
  resolved,
  onAdd,
  onRemove,
  onAddPrestige,
  onRemovePrestige,
  onToggleClassEnabled,
}: StepClassesProps) {
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  const totalLevels = classLevels.reduce((s, c) => s + c.levels, 0);
  const totalPrestigeLevels = prestigeClassLevels.reduce((s, c) => s + c.levels, 0);
  const visibleClasses = ALL_CLASSES.filter((cls) => enabledRulesets.includes(cls.ruleset));
  const visiblePrestige = ALL_PRESTIGE_CLASSES.filter((cls) => enabledRulesets.includes(cls.ruleset));

  // Best-effort free-text check: does any currently-taken class/level/BAB roughly satisfy
  // the prestige class's prerequisites text? This never hard-blocks — it only flags a
  // soft warning so the player can make the final call themselves.
  function looksUnmet(prereqs: string[]): boolean {
    const bab = resolved.bab.total;
    const totalCharLevel = resolved.totalHitDice;
    for (const p of prereqs) {
      const lower = p.toLowerCase();
      const babMatch = lower.match(/base attack bonus \+?(\d+)/);
      if (babMatch && bab < Number(babMatch[1])) return true;
      const levelMatch = lower.match(/(?:character level|class level)s? (\d+)/);
      if (levelMatch && totalCharLevel < Number(levelMatch[1])) return true;
    }
    return false;
  }

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
          <div className="grid gap-3 sm:grid-cols-2">
            {visibleClasses.map((cls) => {
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
            })}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Total class levels: <span className="font-mono text-foreground">{totalLevels}</span>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Prestige Classes</CardTitle>
          <CardDescription>
            Prerequisites are shown as free text and are <span className="font-medium">not enforced</span> — a soft
            warning badge appears if your current build doesn't obviously meet them, but you can still take the
            levels. Toggle additional rule sets in the header to see more options.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {visiblePrestige.length === 0 ? (
            <p className="text-sm text-muted-foreground">No prestige classes available for the enabled rule sets.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {visiblePrestige.map((cls) => {
                const current = prestigeClassLevels.find((c) => c.classId === cls.id);
                const row = current ? cls.progression.find((r) => r.level === current.levels) : undefined;
                const unmet = looksUnmet(cls.prerequisites);
                const isDisabled = disabledClassIds.includes(cls.id);
                return (
                  <div
                    key={cls.id}
                    className={cn("rounded-md border border-card-border bg-card p-4", isDisabled && "opacity-50")}
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
                    {cls.prerequisites.length > 0 && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Prerequisites:</span> {cls.prerequisites.join("; ")}
                      </p>
                    )}
                    {unmet && (current?.levels ?? 0) === 0 && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-500" data-testid={`warning-prereq-${cls.id}`}>
                        <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> Prerequisites not verified against your current build.
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
                        disabled={(current?.levels ?? 0) >= 10}
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
              })}
            </div>
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
