import { useMemo, useState } from "react";
import { BookOpen, ChevronDown, ChevronRight, Search } from "lucide-react";
import { ALL_CASTING_PROFILES, ALL_CLASSES, ALL_SPELLS, CASTING_PROFILES_BY_ID } from "@/data";
import type { CastingProfile, CharacterBuild, ResolvedCharacter, SpellDefinition } from "@/engine/types";
import { bonusSpells, canCastLevel, knownRow, perDayRow, spellLevelOnList } from "@/engine/spells";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { withPieces, Piece, Zone } from "@/components/movable-pieces";
import { describeSpell, type EntityDetail } from "@/lib/entity-descriptions";

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
  const [expandedTypes, setExpandedTypes] = useState<Set<string>>(new Set());
  const [detail, setDetail] = useState<EntityDetail | null>(null);

  const casterClasses = useMemo(
    () =>
      build.classLevels
        .filter((c) => c.levels > 0 && CASTING_PROFILES_BY_ID[c.classId])
        .map((c) => ({ choice: c, profile: CASTING_PROFILES_BY_ID[c.classId] })),
    [build.classLevels]
  );

  // The whole spell library segregated by casting type (cleric, wizard,
  // druid, …) and, inside each type, by spell level (Shaun, 2026-11-02).
  // One section per list; where several classes share a list (cleric /
  // favored soul, druid / spirit shaman), the fuller profile represents it.
  const library = useMemo(() => {
    const countFor = (prof: CastingProfile) =>
      ALL_SPELLS.reduce((n, s) => n + (spellLevelOnList(s, prof) !== undefined ? 1 : 0), 0);
    const byList = new Map<string, CastingProfile>();
    for (const p of ALL_CASTING_PROFILES) {
      const existing = byList.get(p.listName);
      if (!existing || countFor(p) > countFor(existing)) byList.set(p.listName, p);
    }
    return [...byList.values()]
      .map((profile) => {
        const byLevel = new Map<number, SpellDefinition[]>();
        for (const s of ALL_SPELLS) {
          const lvl = spellLevelOnList(s, profile);
          if (lvl === undefined) continue;
          if (!build.enabledRulesets.includes(s.ruleset)) continue;
          if (profile.allowedSchools && !profile.allowedSchools.includes(s.school)) continue;
          const arr = byLevel.get(lvl) ?? [];
          arr.push(s);
          byLevel.set(lvl, arr);
        }
        for (const arr of byLevel.values()) arr.sort((a, b) => a.name.localeCompare(b.name));
        const levels = [...byLevel.keys()].sort((a, b) => a - b);
        const total = levels.reduce((n, l) => n + (byLevel.get(l)?.length ?? 0), 0);
        return { profile, byLevel, levels, total };
      })
      .filter((g) => g.total > 0);
  }, [build.enabledRulesets]);

  return withPieces("step:spells", (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-start gap-x-4 gap-y-1">
            <CardTitle className="font-display text-xl flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" /> Spells
            </CardTitle>
            {/* All the Spells verbiage sits NEXT TO the header
                (Shaun, 2026-11-07, same pattern as Ability Scores
                and Feats): the description beside the title,
                wording unchanged — and the "None of this build's
                classes…" sentence, which used to sit apart down
                in the card body, brought up to sit with the rest
                of the verbiage. The search bar moved down beside
                the Spell Library heading; with both gone, this
                card is header-only and everything below pulls
                up into the freed space. */}
            <CardDescription className="min-w-0 flex-1 basis-72">
              Pick spells per casting class. Lists, level access, and per-level limits come from each class's own
              book table; selections above a limit are blocked here and flagged on the sheet if they ever slip
              through. Wizard and wu jen selections are the spellbook (no known cap in the rules). Prestige-class
              "+1 spellcasting" advancement is not modeled.
              {casterClasses.length === 0 && (
                <span className="mt-2 block">
                  None of this build's classes has a spellcasting progression. Add levels in a casting class (wizard,
                  cleric, sorcerer, …) and its list will appear below the library for picking.
                </span>
              )}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Spell library: every list segregated by casting type, then by level. */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1 basis-80">
              <CardTitle className="font-display text-lg">Spell Library — by casting type and level</CardTitle>
              <CardDescription className="mt-1.5">
                Every spell list, segregated by casting type — cleric, wizard, druid, and so on — and inside each type
                by spell level. This is the browsing library; you pick spells in your own classes' cards below.
              </CardDescription>
            </div>
            {/* The search bar sits next to the Spell Library
                heading (Shaun, 2026-11-07), aligned with the
                casting type and level controls it narrows. No
                "Selected only" toggle switch (Shaun, 2026-11-03:
                "Take all the toggles off. All of them."). The
                lists show every spell; the search box still
                narrows them. */}
            <div className="relative w-full shrink-0 sm:w-64">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search spells…"
                className="h-8 pl-8"
                data-testid="input-spell-search"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {casterClasses.length === 0 && (
            <p className="rounded-md border border-card-border bg-muted/40 px-3 py-2 text-sm" data-testid="library-cannot-cast-note">
              You can browse every spell here — but this character can't cast or pick any of them: no
              spellcasting class levels.
            </p>
          )}
          <Zone zoneId="spell-library" className="grid grid-cols-2 items-start gap-3 sm:grid-cols-4">
          {library.map(({ profile, byLevel, levels, total }) => {
            const searching = query.trim().length > 0;
            const expanded = searching || expandedTypes.has(profile.listName);
            // Full-screen breakout only for a HAND-opened list —
            // while searching every matching list expands, and
            // stacking them all full-screen buried the page (the
            // same fix the Feats step got in the 2026-11-08 sweep).
            const breakout = !searching && expandedTypes.has(profile.listName);
            const visibleLevels = levels
              .map((lvl) => ({
                lvl,
                spells: (byLevel.get(lvl) ?? []).filter((s) =>
                  s.name.toLowerCase().includes(query.toLowerCase())
                ),
              }))
              .filter((g) => g.spells.length > 0);
            if (searching && visibleLevels.length === 0) return null;
            return (
              // Library lists are pieces (platform rule, 2026-11-08:
              // inner buttons movable too). The hand-opened
              // breakout rides on the piece shell.
              <Piece key={profile.listName} pieceId={`library-type-${profile.classId}`} layout="grid" className={breakout ? "col-span-full ml-[calc(50%-50vw)] min-h-[100dvh] w-screen" : ""}>
              <div className="h-full rounded-md border border-card-border" data-testid={`library-type-${profile.classId}`}>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-2.5 py-1.5 text-left"
                  onClick={() =>
                    setExpandedTypes((prev) => {
                      const next = new Set(prev);
                      if (next.has(profile.listName)) next.delete(profile.listName);
                      else next.add(profile.listName);
                      return next;
                    })
                  }
                  data-testid={`button-library-type-${profile.classId}`}
                >
                  {expanded ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
                  <span className="font-display text-base font-semibold">{profile.listName}</span>
                  <span className="text-xs text-muted-foreground">{total} spells</span>
                </button>
                {expanded && (
                  <div className="grid grid-cols-2 items-start gap-x-4 gap-y-5 border-t border-card-border px-3 py-3">
                    {visibleLevels.map(({ lvl, spells }) => (
                      <div key={lvl} className={lvl === 0 ? "col-span-2" : undefined}>
                        <h4 className="font-display text-lg font-semibold">
                          {LEVEL_LABELS[lvl]}{" "}
                          <span className="text-sm font-normal text-muted-foreground">({spells.length})</span>
                        </h4>
                        {/* Level groups pair up in reading order
                            (Shaun, 2026-11-07): 1st beside 2nd,
                            3rd beside 4th, on through 7th/8th,
                            9th last; the 0-level group spans the
                            top on its own. Names run one across
                            inside a paired group (two on wide
                            screens), two/four across in the
                            full-width 0-level group. */}
                        <div className={lvl === 0 ? "mt-1 grid grid-cols-2 gap-x-4 gap-y-0 lg:grid-cols-4" : "mt-1 grid grid-cols-1 gap-x-4 gap-y-0 lg:grid-cols-2"}>
                          {spells.map((s) => (
                            <Tooltip key={s.id}>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="text-left text-sm leading-tight underline-offset-2 hover:underline"
                                  onClick={() => setDetail(describeSpell(s, profile.listName))}
                                  data-testid={`library-spell-${s.id}`}
                                >
                                  {s.name}
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-sm text-xs">
                                <p className="font-semibold">{s.name}</p>
                                <p>
                                  {s.school}
                                  {s.subschool ? ` (${s.subschool})` : ""}
                                  {s.descriptors.length > 0 ? ` [${s.descriptors.join(", ")}]` : ""} ·{" "}
                                  {profile.listName} {lvl}
                                </p>
                                <p>Casting time: {s.castingTime} · Components: {s.components}</p>
                                <p>Range: {s.range} · {s.targetOrArea}</p>
                                <p>
                                  Duration: {s.duration} · Saving throw: {s.savingThrow} · Spell resistance:{" "}
                                  {s.spellResistance}
                                </p>
                                <p className="mt-1">{s.summary}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              </Piece>
            );
          })}
          </Zone>
        </CardContent>
      </Card>

      {casterClasses.map(({ choice, profile }) => {
        const abilityScore = resolved.abilityScores[profile.keyAbility]?.total ?? null;
        const selected = build.selectedSpells?.[choice.classId] ?? [];
        const list = ALL_SPELLS.filter(
          (s) =>
            spellLevelOnList(s, profile) !== undefined &&
            build.enabledRulesets.includes(s.ruleset) &&
            (!profile.allowedSchools || profile.allowedSchools.includes(s.school))
        );
        const byLevel = new Map<number, SpellDefinition[]>();
        for (const s of list) {
          const lvl = spellLevelOnList(s, profile);
          if (lvl === undefined) continue;
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
            <CardContent className="grid grid-cols-2 items-start gap-x-4 gap-y-6">
              {levels.map((lvl) => {
                const cap = selectionCap(profile, choice.levels, lvl, abilityScore);
                const inLevel = byLevel.get(lvl) ?? [];
                const selectedInLevel = inLevel.filter((s) => selected.includes(s.id));
                const atCap = cap !== null && selectedInLevel.length >= cap;
                const visible = inLevel.filter((s) =>
                  s.name.toLowerCase().includes(query.toLowerCase())
                );
                if (query && visible.length === 0) return null;
                return (
                  <div key={lvl} className={lvl === 0 ? "col-span-2" : undefined}>
                    <div className="mb-2 flex items-baseline gap-2">
                      <h3 className="font-display text-xl font-semibold">{LEVEL_LABELS[lvl]}</h3>
                      <span className="text-xs text-muted-foreground" data-testid={`spell-count-${choice.classId}-${lvl}`}>
                        {selectedInLevel.length}
                        {cap !== null ? ` / ${cap}` : ""} {capLabel(profile)}
                      </span>
                      {atCap && <Badge variant="secondary" className="text-[10px]">Limit reached</Badge>}
                    </div>
                    <div className={lvl === 0 ? "grid grid-cols-2 gap-3 lg:grid-cols-4" : "grid grid-cols-1 gap-3 lg:grid-cols-2"}>
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
                                <button
                                  type="button"
                                  className="text-left font-medium underline-offset-2 hover:underline"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setDetail(describeSpell(spell, profile.listName));
                                  }}
                                  data-testid={`spell-name-${spell.id}`}
                                >
                                  {spell.name}
                                </button>
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
      <EntityDetailDialog detail={detail} onOpenChange={(open) => !open && setDetail(null)} />
    </div>
  ), { skip: [EntityDetailDialog] });
}
