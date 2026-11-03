import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { ALL_CLASSES } from "@/data";
import type { ClassDefinition, ClassLevelChoice, ResolvedCharacter, Ruleset } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { describeClass, type EntityDetail } from "@/lib/entity-descriptions";

/**
 * Step 2 — base classes only. Prestige classes live in their own
 * step (step-prestige.tsx): they started as "2B" right after this
 * step (Shaun, 2026-11-03), then moved to step 7, after Spells, at
 * Shaun's order the same day — the prerequisite gate judges skills,
 * templates, feats and spell picks, so those steps come first.
 */

interface StepClassesProps {
  classLevels: ClassLevelChoice[];
  enabledRulesets: Ruleset[];
  disabledClassIds: string[];
  resolved: ResolvedCharacter;
  onAdd: (classId: string) => void;
  onRemove: (classId: string) => void;
  onToggleClassEnabled: (classId: string, enabled: boolean) => void;
}

export function StepClasses({
  classLevels,
  enabledRulesets,
  disabledClassIds,
  onAdd,
  onRemove,
  onToggleClassEnabled,
}: StepClassesProps) {
  const [detailClass, setDetailClass] = useState<ClassDefinition | null>(null);
  const totalLevels = classLevels.reduce((s, c) => s + c.levels, 0);
  const visibleClasses = ALL_CLASSES.filter((cls) => enabledRulesets.includes(cls.ruleset));
  // Segregation (Shaun, 2026-10-28 — the same treatment as the races):
  // turned-off classes sink below the turned-on ones under a "Turned
  // off" subheading.
  const classesOn = visibleClasses.filter((cls) => !disabledClassIds.includes(cls.id));
  const classesOff = visibleClasses.filter((cls) => disabledClassIds.includes(cls.id));

  // Crunched cards, three across (Shaun, 2026-11-02): the card
  // carries the name, the level badge, the current-level stat row
  // and the level steppers. The name hovers for the short crunch
  // and clicks for the full-crunch dialog; the ruleset badge, the
  // hit-die line and the enable switch moved into that dialog
  // (the switch sits in its footer, like the Feats step).
  const renderClassCard = (cls: (typeof visibleClasses)[number]) => {
    const current = classLevels.find((c) => c.classId === cls.id);
    const row = current ? cls.progression.find((r) => r.level === current.levels) : undefined;
    const isDisabled = disabledClassIds.includes(cls.id);
    return (
      <div
        key={cls.id}
        className={cn("rounded-md border border-card-border bg-card p-3", isDisabled && "opacity-50")}
        data-testid={`class-card-${cls.id}`}
      >
        <div className="flex items-center justify-between gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => setDetailClass(cls)}
                className="text-left font-display text-base font-semibold leading-tight underline-offset-2 hover:underline"
                aria-label={`View description of ${cls.name}`}
                data-testid={`button-info-class-${cls.id}`}
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
        {row && (
          <div className="mt-1.5 flex gap-3 text-xs text-muted-foreground font-mono">
            <span>BAB +{row.bab}</span>
            <span>Fort +{row.fort}</span>
            <span>Ref +{row.ref}</span>
            <span>Will +{row.will}</span>
          </div>
        )}
        <div className="mt-2 flex items-center gap-2">
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Class Levels</CardTitle>
          <CardDescription>
            Multiclassing is allowed — add levels in any combination up to level 10 per class. Cards are
            crunched three across: <span className="font-medium">hover a name</span> for the short crunch,{" "}
            <span className="font-medium">click it</span> for the whole thing. Prestige classes come at
            step 7, after Skills, Feats and Spells — they're judged against the finished build. Source:{" "}
            <a href="https://www.d20srd.org/srd/classes/" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Classes
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{classesOn.map(renderClassCard)}</div>
          {classesOff.length > 0 && (
            <>
              <h4 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Turned off</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{classesOff.map(renderClassCard)}</div>
            </>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Total class levels: <span className="font-mono text-foreground">{totalLevels}</span>
          </p>
        </CardContent>
      </Card>
      <EntityDetailDialog
        detail={detailClass ? describeClass(detailClass) : null}
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
                data-testid={`switch-enable-class-${detailClass.id}`}
              />
            </div>
          ) : undefined
        }
      />
    </div>
  );
}
