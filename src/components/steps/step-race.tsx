import { useState } from "react";
import { Info } from "lucide-react";
import { ALL_RACES } from "@/data";
import { ABILITY_KEYS } from "@/engine/types";
import type { Ruleset } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { isMonsterRace, raceStartingEcl } from "@/lib/race-groups";
import { isApocDisabledRace, apocRaceNote } from "@/lib/apoc-disabled";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { withPieces } from "@/components/movable-pieces";
import { describeRace, type EntityDetail } from "@/lib/entity-descriptions";

/**
 * Race — Character Creation step 2 (Shaun, 2026-11-05:
 * "Separate abilities and races. Abilities is number one,
 * race is number two, and everything else follows"). This
 * step and the Abilities step were one combined "Abilities &
 * Race" step until this split; the Ability Scores card and
 * the dice machinery moved to step-abilities.tsx, and the
 * race picker stayed here, unchanged.
 */

interface StepRaceProps {
  raceId: string;
  enabledRulesets: Ruleset[];
  disabledRaceIds: string[];
  onRaceChange: (raceId: string) => void;
  /** Still passed by the builder and still part of the build's toggle
   * state — but no longer rendered: the race tiles carry no toggle
   * switch (Shaun, 2026-11-03). */
  onToggleRaceEnabled: (raceId: string, enabled: boolean) => void;
}

export function StepRace({
  raceId,
  enabledRulesets,
  disabledRaceIds,
  onRaceChange,
}: StepRaceProps) {
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  const visibleRaces = ALL_RACES.filter((race) => enabledRulesets.includes(race.ruleset));
  // Race grouping (Shaun, 2026-10-28): playable character races first,
  // monster races after them. Both stay selectable. The monster
  // group has carried no heading since 2026-11-03 (Shaun's order);
  // its notation sits at the top of the Base Race card instead.
  const playableRaces = visibleRaces.filter((race) => !isMonsterRace(race));
  const monsterRaces = visibleRaces.filter((race) => isMonsterRace(race));

  const renderRaceTile = (race: (typeof visibleRaces)[number]) => {
  // APOC canon gray-out (Shaun, 2026-11-04 — no tieflings;
  // 2026-11-05 — no drow):
  // unlike a turned-off race, which is hidden entirely, an
  // APOC-disabled race stays VISIBLE as a grayed, unpickable
  // tile carrying the canon note — the record is kept, it
  // simply cannot be picked in APOC. See lib/apoc-disabled.ts.
  const apocOff = isApocDisabledRace(race);
  const isDisabled = disabledRaceIds.includes(race.id) || apocOff;
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
          ? // Bug sweep 2026-11-08: opacity alone barely read as
            // "off" over the transparent card tokens — grayscale
            // makes an unpickable race unmistakable.
            "cursor-not-allowed opacity-50 grayscale border-card-border bg-card"
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
        {/* No toggle switch on race tiles (Shaun, 2026-11-03: "Take
            off the toggle buttons for races and classes"). A race's
            on/off state still lives in the build / toggle prefs and
            turned-off races stay hidden, exactly as set — there is
            just no switch in the picker to flip it with. */}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">
        {race.size} · Speed {race.baseSpeed} ft
      </div>
      {apocOff && (
        <p className="mt-1 text-xs font-medium text-destructive" data-testid={`apoc-note-race-${race.id}`}>
          {apocRaceNote(race)}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-1">
        <Badge variant="secondary" className="text-[10px]" data-testid={`badge-ecl-${race.id}`}>
          ECL {raceStartingEcl(race)}
        </Badge>
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

  // Turned-off races are hidden entirely (Shaun, 2026-11-02: "Remove
  // all grayed out races"). Their off state stays exactly as saved in
  // the build / toggle prefs — they are simply not rendered in the
  // picker, so the grayed tiles no longer clutter it.
  // A null title renders the group with NO heading and NO blurb —
  // the monster races render that way at Shaun's order (2026-11-03:
  // "Remove the monster races header and put the notation at the
  // top. With the other notations."). Their races still follow the
  // playable ones in the same picker; only the header is gone, and
  // the notation lives in the card description at the top.
  const renderRaceSection = (
    title: string | null,
    blurb: string | null,
    races: typeof visibleRaces,
    headingClassName: string
  ) => {
    // APOC-disabled races (tiefling, drow) are NOT hidden with the
    // turned-off races — they render grayed with their canon
    // note (see renderRaceTile), so they pass this filter.
    const turnedOn = races.filter((race) => !disabledRaceIds.includes(race.id) || isApocDisabledRace(race));
    return (
      <>
        {title !== null && <h4 className={headingClassName}>{title}</h4>}
        {blurb !== null && <p className="mb-3 mt-1 text-xs text-muted-foreground">{blurb}</p>}
        {turnedOn.length > 0 ? (
          <div className={cn("grid grid-cols-2 gap-3 sm:grid-cols-4", title === null && "mt-3")}>
            {turnedOn.map(renderRaceTile)}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Every race in this group is turned off.</p>
        )}
      </>
    );
  };

  return withPieces("step:race", (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Base Race</CardTitle>
          <CardDescription>
            The base creature every template and class level applies on top of. Turned-off races are hidden
            from this picker; their off state is kept. Some races come from monster-book entries — playable,
            but they start with racial Hit Dice and level adjustments. Source:{" "}
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
            renderRaceSection(null, null, monsterRaces, "mt-6 font-display text-base font-semibold")}
        </CardContent>
      </Card>

      <EntityDetailDialog detail={detail} onOpenChange={(open) => !open && setDetail(null)} />
    </div>
  ), { skip: [EntityDetailDialog] });
}
