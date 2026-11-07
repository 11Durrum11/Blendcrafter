import { useState } from "react";
import { Dices, Info } from "lucide-react";
import { ABILITY_KEYS, ABILITY_LABEL } from "@/engine/types";
import type { AbilityKey } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { describeAbility, type EntityDetail } from "@/lib/entity-descriptions";

/**
 * Abilities — Character Creation step 1 (Shaun, 2026-11-05:
 * "Separate abilities and races. Abilities is number one,
 * race is number two, and everything else follows"). This
 * step and the Race step were one combined "Abilities & Race"
 * step until this split; the dice machinery and the Ability
 * Scores card moved here verbatim, and the race picker lives
 * in step-race.tsx as step 2.
 */

interface StepAbilitiesProps {
  baseAbilityScores: Record<AbilityKey, number>;
  disabledAbilities: AbilityKey[];
  onAbilityChange: (key: AbilityKey, value: number) => void;
  onAllAbilitiesChange: (scores: Record<AbilityKey, number>) => void;
  /** Still passed by the builder and still part of the build's toggle
   * state — but no longer rendered: the ability rows carry no toggle
   * switch (Shaun, 2026-11-03). */
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

export function StepAbilities({
  baseAbilityScores,
  disabledAbilities,
  onAbilityChange,
  onAllAbilitiesChange,
}: StepAbilitiesProps) {
  const [diceGrid, setDiceGrid] = useState<DiceCell[][] | null>(null);
  const [pickedLineId, setPickedLineId] = useState<string | null>(null);
  const [placements, setPlacements] = useState<LinePlacements>(emptyPlacements());
  const [grabbedPoolIndex, setGrabbedPoolIndex] = useState<number | null>(null);
  const [detail, setDetail] = useState<EntityDetail | null>(null);

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

  return (
    <div className="space-y-6">
      <Card>
        {/* pb-3 (Shaun, 2026-11-07): with the description
            paragraph below removed, the header's bottom padding
            tightens too, so the content closes up into the freed
            space — no empty gap where the paragraph was. */}
        <CardHeader className="pb-1 pt-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <CardTitle className="font-display text-lg">Ability Scores</CardTitle>
            {/* The "Base scores before racial adjustments…"
                description paragraph that sat under this title
                was removed at Shaun's order, 2026-11-07 — the
                title and the controls below it stay. */}
            {/* The My Way verbiage sits NEXT TO the header
                (Shaun, 2026-11-07): the "Roll 4d6…" paragraph
                moved up here from the top of the card body,
                wording unchanged; the body below closes up into
                the space it left. */}
            <p className="min-w-0 flex-1 basis-64 text-xs leading-4 text-muted-foreground">
              Roll 4d6 and drop the lowest, thirty-six times, into a 6×6 grid — then pick any row, any column, or
              either diagonal, and place its six results on whichever abilities you choose. No result of 8 or
              below ever stands — it rerolls on the spot until it beats 8.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-1.5 pb-3">
          <div className="space-y-2">
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
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {ABILITY_KEYS.map((key) => {
              const isDisabled = disabledAbilities.includes(key);
              return (
                <div key={key} className={cn("space-y-0.5", isDisabled && "opacity-60")}>
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
                    {/* No toggle switch on abilities either (Shaun,
                        2026-11-03: "Take off the toggles on the
                        abilities too"), following the race/class switch
                        removal. An ability's disabled state still lives
                        in the build / toggle prefs exactly as set —
                        there is just no switch here to flip it with. */}
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
                    className="h-8 font-mono"
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
