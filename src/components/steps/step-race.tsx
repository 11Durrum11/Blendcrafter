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
  const [mode, setMode] = useState<"standard" | "pointbuy">("standard");
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  const visibleRaces = ALL_RACES.filter((race) => enabledRulesets.includes(race.ruleset));
  // Race grouping (Shaun, 2026-10-28): playable character races first,
  // monster races under their own heading below. Both stay selectable.
  const playableRaces = visibleRaces.filter((race) => !isMonsterRace(race));
  const monsterRaces = visibleRaces.filter((race) => isMonsterRace(race));

  const pointsSpent = ABILITY_KEYS.reduce((sum, k) => sum + (POINT_BUY_COST[baseAbilityScores[k]] ?? 0), 0);

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
          <h4 className="font-display text-base font-semibold">Playable Character Races</h4>
          <p className="mb-3 mt-1 text-xs text-muted-foreground">Races the books present for player characters.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{playableRaces.map(renderRaceTile)}</div>
          {monsterRaces.length > 0 && (
            <>
              <h4 className="mt-6 font-display text-base font-semibold">Monster Races</h4>
              <p className="mb-3 mt-1 text-xs text-muted-foreground">
                From monster-book entries — playable, but they start with racial Hit Dice and level adjustments.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{monsterRaces.map(renderRaceTile)}</div>
            </>
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
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {mode === "pointbuy" && (
            <p className="text-sm text-muted-foreground">
              Budget: <span className={cn("font-mono", pointsSpent > POINT_BUY_BUDGET ? "text-destructive" : "text-foreground")}>{pointsSpent}</span> / {POINT_BUY_BUDGET} points
            </p>
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
