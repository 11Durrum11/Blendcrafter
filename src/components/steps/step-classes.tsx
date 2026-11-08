import { useState } from "react";
import { Info, Minus, Plus } from "lucide-react";
import { ALL_CLASSES } from "@/data";
import type { ClassDefinition, ClassLevelChoice, ResolvedCharacter, Ruleset } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { withPieces } from "@/components/movable-pieces";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { describeClass, type EntityDetail } from "@/lib/entity-descriptions";

/**
 * Step 2 inside Character Creation — base classes only. Prestige classes live in their own
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
  /** Still passed by the builder and still part of the build's toggle
   * state — but no longer rendered: the class dialog carries no
   * toggle switch (Shaun, 2026-11-03). */
  onToggleClassEnabled: (classId: string, enabled: boolean) => void;
}

export function StepClasses({
  classLevels,
  enabledRulesets,
  disabledClassIds,
  onAdd,
  onRemove,
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
  // and clicks for the full-breakdown dialog; since 2026-11-03 the
  // card also carries a visible round info button (like the race
  // tiles) opening that same dialog, at Shaun's order. (The
  // dialog's old footer switch is gone with the 2026-11-03 toggle
  // removal.)
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
        <div className="flex flex-wrap items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => setDetailClass(cls)}
                className="min-w-0 text-left font-display text-base font-semibold leading-tight underline-offset-2 hover:underline"
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
          {/* The little level picker sits right next to the class
              title (Shaun, 2026-11-07): the − / + steppers moved up
              from their own row at the bottom of the card into the
              title row, immediately beside the name button. The
              Prestige Classes step's full cards carry the same
              arrangement. */}
          <div className="flex shrink-0 items-center gap-1">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-6 w-6"
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
              className="h-6 w-6"
              disabled={(current?.levels ?? 0) >= 10 || isDisabled}
              onClick={() => onAdd(cls.id)}
              data-testid={`button-add-level-${cls.id}`}
              aria-label={`Add a level of ${cls.name}`}
            >
              <Plus className="h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-1.5">
            {/* The breakdown button (Shaun, 2026-11-03: "give an
                exclamation point that breaks down the entire class
                fully") — the same round info button the race tiles
                carry, opening the full class breakdown dialog:
                every level of the progression table and every
                class feature. The name still opens it too. */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDetailClass(cls);
              }}
              className="shrink-0 rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
              aria-label={`Full breakdown of ${cls.name}`}
              data-testid={`button-breakdown-class-${cls.id}`}
            >
              <Info className="h-3.5 w-3.5" />
            </button>
            <Badge variant="outline" className="shrink-0 whitespace-nowrap font-mono">
              Lv {current?.levels ?? 0}
            </Badge>
          </div>
        </div>
        {row && (
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted-foreground font-mono">
            <span>BAB +{row.bab}</span>
            <span>Fort +{row.fort}</span>
            <span>Ref +{row.ref}</span>
            <span>Will +{row.will}</span>
          </div>
        )}
      </div>
    );
  };

  return withPieces("step:classes", (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Class Levels</CardTitle>
          <CardDescription>
            Multiclassing is allowed — add levels in any combination up to level 10 per class. Cards are
            crunched three across: <span className="font-medium">hover a name</span> for the short crunch,{" "}
            <span className="font-medium">tap the ⓘ button</span> (or the name) for the full breakdown — every
            level of the progression table and every class feature. Prestige classes come at
            step 7, after Skills, Feats and Spells — they're judged against the finished build. Source:{" "}
            <a href="https://www.d20srd.org/srd/classes/" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Classes
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Doubled columns on the phone only (Shaun, 2026-11-07):
              two across on a phone, four across on a laptop as
              before. The Prestige Classes grids match. */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{classesOn.map(renderClassCard)}</div>
          {classesOff.length > 0 && (
            <>
              <h4 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Turned off</h4>
              <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">{classesOff.map(renderClassCard)}</div>
            </>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Total class levels: <span className="font-mono text-foreground">{totalLevels}</span>
          </p>
        </CardContent>
      </Card>
      {/* No toggle switch in the class detail dialog (Shaun,
          2026-11-03: "Take off the toggle buttons for races and
          classes"). A class's on/off state still lives in the build /
          toggle prefs and turned-off classes still sink under their
          "Turned off" heading — there is just no switch here to flip
          it with. */}
      <EntityDetailDialog
        detail={detailClass ? describeClass(detailClass) : null}
        onOpenChange={(open) => !open && setDetailClass(null)}
      />
    </div>
  ), { skip: [EntityDetailDialog] });
}
