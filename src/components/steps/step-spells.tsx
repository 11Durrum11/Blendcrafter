import { useMemo, useState } from "react";
import { BookOpen, Search } from "lucide-react";
import { ALL_CLASSES, ALL_SPELLS, CASTING_PROFILES_BY_ID } from "@/data";
import type { CastingProfile, CharacterBuild, ResolvedCharacter, SpellDefinition } from "@/engine/types";
import { bonusSpells, canCastLevel, knownRow, perDayRow } from "@/engine/spells";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";

interface StepSpellsProps {
  build: CharacterBuild;
  resolved: ResolvedCharacter;
  onToggleSpell: (classId: string, spellId: string, selected: boolean) => void;
}

const LEVEL_LABELS = ["0-level (cantrips/orisons)", "1st level", "2nd level", "3rd level", "4th level", "5th level", "6th level", "7th level", "8th level", "9th level"];

const KIND_LABELS: Record<CastingProfile["kind"], string> = {
  "prepared-arcane": "Prepared (arcane)",
  "prepared-divine": "Prepared (divine)",
  spontaneous: "Spontaneous",
};

/** The per-level selection cap the UI enforces, or null for "no cap". */
function selectionCap(
  profile: CastingProfile,
  classLevel: number,
  spellLevel: number,
  abilityScore: number | null
): number | null {
  if (profile.kind === "spontaneous" && !profile.knowsEntireList) {
    const row = knownRow(profile, classLevel);
    if (row) return row[spellLevel] ?? null;
    return null;
  }
  if (profile.kind === "prepared-divine") {
    const cell = perDayRow(profile, classLevel)[spellLevel];
    if (cell === null || cell === undefined) return null;
    return cell + bonusSpells(abilityScore, spellLevel);
  }
  return null; // spellbook classes and know-whole-list classes: no cap
}

function capLabel(profile: CastingProfile): string {
  if (profile.kind === "spontaneous") return profile.knowsEntireList ? "known (whole list)" : "known";
  if (profile.kind === "prepared-divine") return "prepared per day";
  return "in spellbook";
}

export function StepSpells({ build, resolved, onToggleSpell }: StepSpellsProps) {
  const [query, setQuery] = useState("");
  const [selectedOnly, setSelectedOnly] = useState(false);

  const casterClasses = useMemo(
    () =>
      build.classLevels
        .filter((c) => c.levels > 0 && CASTING_PROFILES_BY_ID[c.classId])
        .map((c) => ({ choice: c, profile: CASTING_PROFILES_BY_ID[c.classId] })),
    [build.classLevels]
  );

  if (casterClasses.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" /> Spells
          </CardTitle>
          <CardDescription>
            None of this build's classes has a spellcasting progression. Add levels in a casting class (wizard,
            cleric, sorcerer, …) and its spell list will appear here.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" /> Spells
          </CardTitle>
          <CardDescription>
            Pick spells per casting class. Lists, level access, and per-level limits come from each class's own
            book table; selections above a limit are blocked here and flagged on the sheet if they ever slip
            through. Wizard and wu jen selections are the spellbook (no known cap in the rules). Prestige-class
            "+1 spellcasting" advancement is not modeled.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search spells…"
                className="h-8 pl-8"
                data-testid="input-spell-search"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <Switch checked={selectedOnly} onCheckedChange={setSelectedOnly} data-testid="switch-spell-selected-only" />
              Selected only
            </label>
          </div>
        </CardContent>
      </Card>

      {casterClasses.map(({ choice, profile }) => {
        const abilityScore = resolved.abilityScores[profile.keyAbility]?.total ?? null;
        const selected = build.selectedSpells?.[choice.classId] ?? [];
        const list = ALL_SPELLS.filter(
          (s) =>
            s.levels[profile.listName] !== undefined &&
            build.enabledRulesets.includes(s.ruleset) &&
            (!profile.allowedSchools || profile.allowedSchools.includes(s.school))
        );
        const byLevel = new Map<number, SpellDefinition[]>();
        for (const s of list) {
          const lvl = s.levels[profile.listName];
          if (!canCastLevel(profile, choice.levels, lvl, abilityScore)) continue;
          const arr = byLevel.get(lvl) ?? [];
          arr.push(s);
          byLevel.set(lvl, arr);
        }
        const levels = [...byLevel.keys()].sort((a, b) => a - b);
        const displayName = ALL_CLASSES.find((c) => c.id === choice.classId)?.name ?? choice.classId;
        return (
          <Card key={choice.classId} data-testid={`spell-class-${choice.classId}`}>
            <CardHeader>
              <CardTitle className="font-display text-lg">
                {displayName} {choice.levels} — {profile.listName} spells
              </CardTitle>
              <CardDescription>
                {KIND_LABELS[profile.kind]} · key ability {profile.keyAbility.toUpperCase()}
                {profile.knowsEntireList ? " · knows the entire list (selections are favorites)" : ""}.{" "}
                {selected.length} selected. Source: {profile.source}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {levels.map((lvl) => {
                const cap = selectionCap(profile, choice.levels, lvl, abilityScore);
                const inLevel = byLevel.get(lvl) ?? [];
                const selectedInLevel = inLevel.filter((s) => selected.includes(s.id));
                const atCap = cap !== null && selectedInLevel.length >= cap;
                const visible = inLevel.filter(
                  (s) =>
                    s.name.toLowerCase().includes(query.toLowerCase()) &&
                    (!selectedOnly || selected.includes(s.id))
                );
                if (query && visible.length === 0) return null;
                if (selectedOnly && visible.length === 0) return null;
                return (
                  <div key={lvl}>
                    <div className="mb-2 flex items-baseline gap-2">
                      <h3 className="font-display text-base font-semibold">{LEVEL_LABELS[lvl]}</h3>
                      <span className="text-xs text-muted-foreground" data-testid={`spell-count-${choice.classId}-${lvl}`}>
                        {selectedInLevel.length}
                        {cap !== null ? ` / ${cap}` : ""} {capLabel(profile)}
                      </span>
                      {atCap && <Badge variant="secondary" className="text-[10px]">Limit reached</Badge>}
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {visible.map((spell) => {
                        const isSelected = selected.includes(spell.id);
                        const blocked = !isSelected && atCap;
                        return (
                          <div
                            key={spell.id}
                            role="checkbox"
                            aria-checked={isSelected}
                            tabIndex={blocked ? -1 : 0}
                            onClick={() => !blocked && onToggleSpell(choice.classId, spell.id, !isSelected)}
                            onKeyDown={(e) => {
                              if (blocked) return;
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                onToggleSpell(choice.classId, spell.id, !isSelected);
                              }
                            }}
                            className={cn(
                              "flex items-start gap-2.5 rounded-md border border-card-border bg-card p-3",
                              blocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover-elevate"
                            )}
                            data-testid={`spell-card-${spell.id}`}
                          >
                            <Checkbox
                              checked={isSelected}
                              disabled={blocked}
                              onCheckedChange={(checked) => onToggleSpell(choice.classId, spell.id, checked === true)}
                              onClick={(e) => e.stopPropagation()}
                              className="mt-0.5"
                              data-testid={`checkbox-spell-${spell.id}`}
                            />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-medium">{spell.name}</span>
                                <Badge variant="outline" className="text-[10px]">
                                  {spell.school}
                                  {spell.subschool ? ` (${spell.subschool})` : ""}
                                </Badge>
                                {spell.ruleset !== "core" && (
                                  <ProductIdentityBadge rulesetLabel={RULESET_LABELS[spell.ruleset]} />
                                )}
                              </div>
                              <p className="mt-1 text-xs text-muted-foreground">{spell.summary}</p>
                              <p className="mt-1 text-[11px] text-muted-foreground">
                                {spell.castingTime} · {spell.range} · {spell.duration}
                              </p>
                              <a
                                href={spell.sourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-1 block text-[11px] text-primary underline underline-offset-2"
                              >
                                {spell.source}
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              {levels.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No spells are available yet at this class level with the current rule sets.
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
