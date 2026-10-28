import { useState } from "react";
import { Dices, Info, Sparkles } from "lucide-react";
import { ALL_RACES } from "@/data";
import { ABILITY_KEYS, ABILITY_LABEL } from "@/engine/types";
import type { AbilityKey, Ruleset } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { STANDARD_ARRAY } from "@/lib/use-character-build";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { isMonsterRace } from "@/lib/race-groups";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { describeAbility, describeRace, type EntityDetail } from "@/lib/entity-descriptions";

interface StepRaceProps {
  raceId: string;
  baseAbilityScores: Record<AbilityKey, number>;
  enabledRulesets: Ruleset[];
  disabledRaceIds: string[];
  disabledAbilities: AbilityKey[];
  onRaceChange: (raceId: string) => void;
  onAbilityChange: (key: AbilityKey, value: number) => void;
  onAllAbilitiesChange: (scores: Record<AbilityKey, number>) => void;
  onToggleRaceEnabled: (raceId: string, enabled: boolean) => void;
  onToggleAbilityEnabled: (key: AbilityKey, enabled: boolean) => void;
}

/** One cell of Shaun's dice grid: four dice rolled, the lowest dropped. */
export interface DiceCell {
  value: number;
  dice: number[];
}

export function rollDiceCell(): DiceCell {
  const buf = new Uint32Array(4);
  crypto.getRandomValues(buf);
  const dice = Array.from(buf, (n) => (n % 6) + 1);
  const sorted = [...dice].sort((a, b) => a - b);
  return { dice, value: sorted[1] + sorted[2] + sorted[3] };
}

/**
 * Shaun's My Way floor (2026-10-28): a result of 8 or below never
 * stands — it keeps rerolling until it's not ("keep rerolling the
 * eights or belows until it's not"). The floor is part of the roll
 * itself, not a separate cleanup step: an earlier build only applied
 * it from a "Reroll 8 and below" button, so a fresh grid still dealt
 * low cells and Shaun called it — "it's still rolling eight and
 * below." With the floor in the roll, the grid can never contain one.
 */
export function rollMyWayCell(threshold = 8): DiceCell {
  let cell = rollDiceCell();
  while (cell.value <= threshold) cell = rollDiceCell();
  return cell;
}

export function rollDiceGrid(): DiceCell[][] {
  return Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => rollMyWayCell()));
}

export interface DiceLine {
  id: string;
  group: "Rows" | "Columns" | "Diagonals";
  label: string;
  /** [row, col] coordinates of the line's cells, in ability order. */
  cells: [number, number][];
  values: number[];
}

/**
 * The 14 pickable lines of the 6×6 grid (Shaun's "My Way" method,
 * 2026-10-28): any row, any column, or either diagonal. Values are in
 * line order, which maps onto Str, Dex, Con, Int, Wis, Cha.
 */
export function diceLines(grid: DiceCell[][]): DiceLine[] {
  const lines: DiceLine[] = [];
  for (let r = 0; r < 6; r++) {
    const cells = grid[r].map((_, c) => [r, c] as [number, number]);
    lines.push({ id: `row-${r + 1}`, group: "Rows", label: `${r + 1}`, cells, values: cells.map(([rr, cc]) => grid[rr][cc].value) });
  }
  for (let c = 0; c < 6; c++) {
    const cells = grid.map((_, r) => [r, c] as [number, number]);
    lines.push({ id: `col-${c + 1}`, group: "Columns", label: `${c + 1}`, cells, values: cells.map(([rr, cc]) => grid[rr][cc].value) });
  }
  const down = grid.map((_, i) => [i, i] as [number, number]);
  lines.push({ id: "diag-down", group: "Diagonals", label: "↘", cells: down, values: down.map(([rr, cc]) => grid[rr][cc].value) });
  const up = grid.map((_, i) => [i, 5 - i] as [number, number]);
  lines.push({ id: "diag-up", group: "Diagonals", label: "↙", cells: up, values: up.map(([rr, cc]) => grid[rr][cc].value) });
  return lines;
}

/**
 * Free placement of a picked line's results (Shaun, 2026-10-28): the
 * player chooses which ability each result goes to — the line is a
 * pool, not an order. Placements are keyed by pool INDEX (not value),
 * so duplicate results (two 14s) stay distinct.
 */
export type LinePlacements = Record<AbilityKey, number | null>;

export function emptyPlacements(): LinePlacements {
  return { str: null, dex: null, con: null, int: null, wis: null, cha: null };
}

export function placeValue(placements: LinePlacements, ability: AbilityKey, poolIndex: number): LinePlacements {
  const next = { ...placements };
  (Object.keys(next) as AbilityKey[]).forEach((key) => {
    if (next[key] === poolIndex) next[key] = null;
  });
  next[ability] = poolIndex;
  return next;
}

export function unplaceValue(placements: LinePlacements, ability: AbilityKey): LinePlacements {
  return { ...placements, [ability]: null };
}

export function placementsComplete(placements: LinePlacements): boolean {
  return ABILITY_KEYS.every((key) => placements[key] !== null);
}

export function placementsToScores(placements: LinePlacements, pool: number[]): Record<AbilityKey, number> {
  const scores = {} as Record<AbilityKey, number>;
  ABILITY_KEYS.forEach((key) => {
    const idx = placements[key];
    scores[key] = idx !== null ? pool[idx] ?? 10 : 10;
  });
  return scores;
}

const POINT_BUY_COST: Record<number, number> = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 6, 15: 8, 16: 10, 17: 13, 18: 16 };
const POINT_BUY_BUDGET = 25;

export function StepRace({
  raceId,
  baseAbilityScores,
  enabledRulesets,
  disabledRaceIds,
  disabledAbilities,
  onRaceChange,
  onAbilityChange,
  onAllAbilitiesChange,
  onToggleRaceEnabled,
  onToggleAbilityEnabled,
}: StepRaceProps) {
  const [mode, setMode] = useState<"standard" | "pointbuy" | "myway">("standard");
  const [diceGrid, setDiceGrid] = useState<DiceCell[][] | null>(null);
  const [pickedLineId, setPickedLineId] = useState<string | null>(null);
  const [placements, setPlacements] = useState<LinePlacements>(emptyPlacements());
  const [grabbedPoolIndex, setGrabbedPoolIndex] = useState<number | null>(null);
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  const visibleRaces = ALL_RACES.filter((race) => enabledRulesets.includes(race.ruleset));
  // Race grouping (Shaun, 2026-10-28): playable character races first,
  // monster races under their own heading below. Both stay selectable.
  const playableRaces = visibleRaces.filter((race) => !isMonsterRace(race));
  const monsterRaces = visibleRaces.filter((race) => isMonsterRace(race));

  const pointsSpent = ABILITY_KEYS.reduce((sum, k) => sum + (POINT_BUY_COST[baseAbilityScores[k]] ?? 0), 0);

  const myWayLines = diceGrid ? diceLines(diceGrid) : [];
  const pickedLine = myWayLines.find((l) => l.id === pickedLineId) ?? null;
  const pickedCells = new Set((pickedLine?.cells ?? []).map(([r, c]) => `${r},${c}`));

  function handleRollGrid() {
    setDiceGrid(rollDiceGrid());
    setPickedLineId(null);
    setPlacements(emptyPlacements());
    setGrabbedPoolIndex(null);
  }

  function handlePickLine(line: DiceLine) {
    setPickedLineId(line.id);
    setPlacements(emptyPlacements());
    setGrabbedPoolIndex(null);
  }

  function handleChipClick(poolIndex: number) {
    setGrabbedPoolIndex((cur) => (cur === poolIndex ? null : poolIndex));
  }

  function handleSlotClick(key: AbilityKey) {
    if (grabbedPoolIndex !== null) {
      setPlacements((p) => placeValue(p, key, grabbedPoolIndex));
      setGrabbedPoolIndex(null);
    } else if (placements[key] !== null) {
      setPlacements((p) => unplaceValue(p, key));
    }
  }

  function handleApplyPlacements() {
    if (!pickedLine || !placementsComplete(placements)) return;
    onAllAbilitiesChange(placementsToScores(placements, pickedLine.values));
  }

  function assignStandardArray() {
    const scores: Record<AbilityKey, number> = { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 };
    ABILITY_KEYS.forEach((key, i) => {
      scores[key] = STANDARD_ARRAY[i] ?? 10;
    });
    onAllAbilitiesChange(scores);
  }

  const renderRaceTile = (race: (typeof visibleRaces)[number]) => {
  const isDisabled = disabledRaceIds.includes(race.id);
  return (
    <div
      key={race.id}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      data-testid={`race-option-${race.id}`}
      onClick={() => !isDisabled && onRaceChange(race.id)}
      onKeyDown={(e) => {
        if (!isDisabled && (e.key === "Enter" || e.key === " ")) onRaceChange(race.id);
      }}
      className={cn(
        "rounded-md border p-3 text-left transition-colors",
        isDisabled
          ? "cursor-not-allowed opacity-50 border-card-border bg-card"
          : cn(
              "cursor-pointer hover-elevate",
              raceId === race.id ? "border-primary ring-1 ring-primary bg-accent/40" : "border-card-border bg-card"
            )
      )}
    >
      <div className="font-display text-base font-semibold flex items-center gap-1.5">
        {race.name}
        {race.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[race.ruleset]} />}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDetail(describeRace(race));
          }}
          className="ml-auto shrink-0 rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
          aria-label={`View description of ${race.name}`}
          data-testid={`button-info-race-${race.id}`}
        >
          <Info className="h-3.5 w-3.5" />
        </button>
        <Switch
          checked={!isDisabled}
          onCheckedChange={(checked) => onToggleRaceEnabled(race.id, checked)}
          onClick={(e) => e.stopPropagation()}
          className="shrink-0 scale-75"
          aria-label={isDisabled ? `Enable ${race.name}` : `Disable ${race.name}`}
          data-testid={`switch-enable-race-${race.id}`}
        />
      </div>
      <div className="mt-1 text-xs text-muted-foreground">
        {race.size} · Speed {race.baseSpeed} ft
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {ABILITY_KEYS.filter((k) => race.abilityModifiers[k]).map((k) => (
          <Badge key={k} variant="outline" className="text-[10px]">
            {k.toUpperCase()} {race.abilityModifiers[k]! > 0 ? "+" : ""}
            {race.abilityModifiers[k]}
          </Badge>
        ))}
        {ABILITY_KEYS.every((k) => !race.abilityModifiers[k]) && (
          <Badge variant="outline" className="text-[10px]">
            No adjustments
          </Badge>
        )}
      </div>
    </div>
  );
  };

  // Segregation (Shaun, 2026-10-28): within each race group, turned-off
  // races sink below the turned-on ones under their own "Turned off"
  // subheading, so the active picker stays uncluttered. Turning one back
  // on (its tile switch) moves it back up immediately.
  const renderRaceSection = (
    title: string,
    blurb: string,
    races: typeof visibleRaces,
    headingClassName: string
  ) => {
    const turnedOn = races.filter((race) => !disabledRaceIds.includes(race.id));
    const turnedOff = races.filter((race) => disabledRaceIds.includes(race.id));
    return (
      <>
        <h4 className={headingClassName}>{title}</h4>
        <p className="mb-3 mt-1 text-xs text-muted-foreground">{blurb}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{turnedOn.map(renderRaceTile)}</div>
        {turnedOff.length > 0 && (
          <>
            <h5 className="mt-5 font-display text-sm font-semibold text-muted-foreground">Turned off</h5>
            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">{turnedOff.map(renderRaceTile)}</div>
          </>
        )}
      </>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Base Race</CardTitle>
          <CardDescription>
            The base creature every template and class level applies on top of. Source:{" "}
            <a href="https://www.d20srd.org/srd/races/" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Races
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderRaceSection(
            "Playable Character Races",
            "Races the books present for player characters.",
            playableRaces,
            "font-display text-base font-semibold"
          )}
          {monsterRaces.length > 0 &&
            renderRaceSection(
              "Monster Races",
              "From monster-book entries \u2014 playable, but they start with racial Hit Dice and level adjustments.",
              monsterRaces,
              "mt-6 font-display text-base font-semibold"
            )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
          <div>
            <CardTitle className="font-display text-xl">Ability Scores</CardTitle>
            <CardDescription>Assign base scores before racial adjustments are applied.</CardDescription>
          </div>
          <div className="flex shrink-0 gap-2 flex-wrap">
            <Button
              type="button"
              size="sm"
              variant={mode === "standard" ? "default" : "outline"}
              onClick={() => {
                setMode("standard");
                assignStandardArray();
              }}
              data-testid="button-standard-array"
            >
              <Dices className="mr-1.5 h-3.5 w-3.5" /> Standard Array
            </Button>
            <Button
              type="button"
              size="sm"
              variant={mode === "pointbuy" ? "default" : "outline"}
              onClick={() => setMode("pointbuy")}
              data-testid="button-point-buy"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Point Buy
            </Button>
            <Button
              type="button"
              size="sm"
              variant={mode === "myway" ? "default" : "outline"}
              onClick={() => setMode("myway")}
              data-testid="button-my-way"
            >
              <Dices className="mr-1.5 h-3.5 w-3.5" /> My Way
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {mode === "pointbuy" && (
            <p className="text-sm text-muted-foreground">
              Budget: <span className={cn("font-mono", pointsSpent > POINT_BUY_BUDGET ? "text-destructive" : "text-foreground")}>{pointsSpent}</span> / {POINT_BUY_BUDGET} points
            </p>
          )}
          {mode === "myway" && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Roll 4d6 and drop the lowest, thirty-six times, into a 6×6 grid — then pick any row, any column, or
                either diagonal, and place its six results on whichever abilities you choose. No result of 8 or
                below ever stands — it rerolls on the spot until it beats 8.
              </p>
              {!diceGrid ? (
                <Button type="button" size="sm" onClick={handleRollGrid} data-testid="button-roll-my-way">
                  <Dices className="mr-1.5 h-3.5 w-3.5" /> Roll the grid
                </Button>
              ) : (
                <>
                  <div className="grid max-w-md grid-cols-6 gap-1.5">
                    {diceGrid.map((row, r) =>
                      row.map((cell, c) => (
                        <div
                          key={`${r}-${c}`}
                          title={`Rolled ${cell.dice.join(", ")} — lowest dropped`}
                          className={cn(
                            "rounded-md border px-1 py-1.5 text-center font-mono text-sm",
                            pickedCells.has(`${r},${c}`)
                              ? "border-primary bg-accent/40 font-bold"
                              : "border-card-border bg-card"
                          )}
                        >
                          {cell.value}
                        </div>
                      ))
                    )}
                  </div>
                  {(["Rows", "Columns", "Diagonals"] as const).map((group) => (
                    <div key={group} className="flex flex-wrap items-center gap-1.5">
                      <span className="w-20 shrink-0 text-xs text-muted-foreground">{group}</span>
                      {myWayLines
                        .filter((l) => l.group === group)
                        .map((l) => (
                          <Button
                            key={l.id}
                            type="button"
                            size="sm"
                            variant={pickedLineId === l.id ? "default" : "outline"}
                            onClick={() => handlePickLine(l)}
                            data-testid={`button-line-${l.id}`}
                          >
                            {l.label} · {l.values.reduce((a, b) => a + b, 0)}
                          </Button>
                        ))}
                    </div>
                  ))}
                  {pickedLine && (
                    <div className="space-y-2 rounded-md border border-card-border bg-card p-3">
                      <p className="text-sm text-muted-foreground">
                        Place the results: tap a result, then tap the ability it goes to. Tap a filled ability to
                        free its result back up.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {pickedLine.values.map((value, i) => {
                          const placed = ABILITY_KEYS.some((key) => placements[key] === i);
                          return (
                            <Button
                              key={i}
                              type="button"
                              size="sm"
                              variant={grabbedPoolIndex === i ? "default" : "outline"}
                              disabled={placed}
                              onClick={() => handleChipClick(i)}
                              data-testid={`button-pool-${i}`}
                              className={cn("font-mono", placed && "opacity-40 line-through")}
                            >
                              {value}
                            </Button>
                          );
                        })}
                      </div>
                      <div className="grid max-w-md grid-cols-3 gap-1.5 sm:grid-cols-6">
                        {ABILITY_KEYS.map((key) => {
                          const idx = placements[key];
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => handleSlotClick(key)}
                              data-testid={`button-slot-${key}`}
                              className={cn(
                                "rounded-md border px-1 py-1.5 text-center transition-colors",
                                idx !== null
                                  ? "border-primary bg-accent/40"
                                  : "border-card-border bg-card hover-elevate"
                              )}
                            >
                              <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                                {ABILITY_LABEL[key]}
                              </div>
                              <div className="font-mono text-sm font-bold">{idx !== null ? pickedLine.values[idx] : "—"}</div>
                            </button>
                          );
                        })}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          size="sm"
                          disabled={!placementsComplete(placements)}
                          onClick={handleApplyPlacements}
                          data-testid="button-apply-my-way"
                        >
                          Apply these scores
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setPlacements(emptyPlacements());
                            setGrabbedPoolIndex(null);
                          }}
                          data-testid="button-clear-my-way"
                        >
                          Clear placements
                        </Button>
                      </div>
                    </div>
                  )}
                  <Button type="button" size="sm" variant="outline" onClick={handleRollGrid} data-testid="button-reroll-my-way">
                    <Dices className="mr-1.5 h-3.5 w-3.5" /> Re-roll whole grid
                  </Button>
                </>
              )}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {ABILITY_KEYS.map((key) => {
              const isDisabled = disabledAbilities.includes(key);
              return (
                <div key={key} className={cn("space-y-1.5", isDisabled && "opacity-60")}>
                  <Label htmlFor={`ability-${key}`} className="flex items-center gap-1">
                    {ABILITY_LABEL[key]}
                    <button
                      type="button"
                      onClick={() => setDetail(describeAbility(key))}
                      className="rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
                      aria-label={`View description of ${ABILITY_LABEL[key]}`}
                      data-testid={`button-info-ability-${key}`}
                    >
                      <Info className="h-3 w-3" />
                    </button>
                    <Switch
                      checked={!isDisabled}
                      onCheckedChange={(checked) => onToggleAbilityEnabled(key, checked)}
                      className="ml-auto shrink-0 scale-75"
                      aria-label={isDisabled ? `Enable ${ABILITY_LABEL[key]}` : `Disable ${ABILITY_LABEL[key]}`}
                      data-testid={`switch-enable-ability-${key}`}
                    />
                  </Label>
                  <Input
                    id={`ability-${key}`}
                    data-testid={`input-ability-${key}`}
                    type="number"
                    min={3}
                    max={20}
                    value={baseAbilityScores[key]}
                    disabled={isDisabled}
                    onChange={(e) => onAbilityChange(key, Number(e.target.value) || 0)}
                    className="font-mono"
                  />
                  {isDisabled && <p className="text-[11px] text-muted-foreground">Disabled — locked at 10 (+0).</p>}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <EntityDetailDialog detail={detail} onOpenChange={(open) => !open && setDetail(null)} />
    </div>
  );
}
