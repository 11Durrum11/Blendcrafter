import type { ResolvedCharacter } from "@/engine/types";
import { ABILITY_KEYS, ABILITY_LABEL } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuditTrail } from "@/components/audit-trail";

interface StepSheetProps {
  character: ResolvedCharacter;
}

function fmtMod(n: number | null) {
  if (n === null) return "—";
  return n >= 0 ? `+${n}` : `${n}`;
}

export function StepSheet({ character }: StepSheetProps) {
  const {
    abilityScores,
    ac,
    bab,
    saves,
    hp,
    cr,
    levelAdjustment,
    ecl,
    features,
    size,
    type,
    subtypes,
    speed,
    race,
    appliedTemplates,
    validation,
    skillPoints,
    skills,
    featSlots,
    selectedFeats,
    inventory,
  } = character;

  const errors = validation.filter((v) => v.severity === "error");

  return (
    <div className="space-y-6" data-testid="character-sheet">
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle className="font-display text-2xl">{character.build.name}</CardTitle>
              <CardDescription>
                {size} {type}
                {subtypes.length > 0 ? ` (${subtypes.join(", ")})` : ""} · Base creature: {race.name}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {appliedTemplates.map((t) => (
                <Badge key={t.id} variant="secondary" data-testid={`sheet-template-badge-${t.id}`}>
                  {t.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        {errors.length > 0 && (
          <CardContent>
            <div className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive" data-testid="sheet-validation-errors">
              <p className="font-medium">Unresolved template prerequisite issues:</p>
              <ul className="mt-1 list-inside list-disc">
                {errors.map((e, i) => (
                  <li key={i}>{e.message}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        )}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Ability Scores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {ABILITY_KEYS.map((key) => {
              const score = abilityScores[key];
              return (
                <AuditTrail
                  key={key}
                  label={ABILITY_LABEL[key]}
                  value={score.total === null ? "—" : `${score.total} (${fmtMod(score.modifier)})`}
                  audit={score.audit}
                  data-testid={`ability-score-${key}`}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Armor Class</CardTitle>
            <CardDescription>Touch {ac.touch} · Flat-footed {ac.flatFooted}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <AuditTrail label="Total AC" value={ac.total} audit={ac.audit} />
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(ac.components).map(([key, comp]) => (
                <div key={key} className="rounded-md border border-card-border bg-card px-2.5 py-1.5 text-xs" data-testid={`ac-component-${key}`}>
                  <span className="capitalize text-muted-foreground">{key.replace("-", " ")}</span>{" "}
                  <span className="font-mono font-medium text-foreground">{comp.value >= 0 ? "+" : ""}{comp.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Base Attack &amp; Hit Points</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <AuditTrail label="Base Attack Bonus" value={`+${bab.total}`} audit={bab.audit} />
            <AuditTrail label="Hit Points" value={hp.total} audit={hp.audit} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Saving Throws</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <AuditTrail label="Fortitude" value={fmtMod(saves.fort.total)} audit={saves.fort.audit} />
            <AuditTrail label="Reflex" value={fmtMod(saves.ref.total)} audit={saves.ref.audit} />
            <AuditTrail label="Will" value={fmtMod(saves.will.total)} audit={saves.will.audit} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <AuditTrail label="Challenge Rating" value={cr.value} audit={cr.audit} />
        <AuditTrail label="Level Adjustment" value={levelAdjustment.current} audit={levelAdjustment.audit} />
        <AuditTrail label="Effective Character Level" value={ecl.value} audit={ecl.audit} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Speed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 text-sm">
            {Object.entries(speed).map(([key, value]) => (
              <Badge key={key} variant="outline" className="capitalize">
                {key}: {value} ft.
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Special Attacks, Qualities &amp; Traits</CardTitle>
          <CardDescription>Merged from race, class, and every applied template.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {(["special-attack", "special-quality", "feat", "trait"] as const).map((cat) => {
              const items = features.filter((f) => f.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {cat.replace("-", " ")}
                  </h4>
                  <ul className="space-y-1.5">
                    {items.map((f) => (
                      <li key={f.key} className="rounded-md border border-card-border bg-card p-2.5 text-sm" data-testid={`feature-${f.key}`}>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-medium text-foreground">{f.name}</span>
                          <a href={f.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 text-xs text-primary underline underline-offset-2">
                            {f.source}
                          </a>
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">{f.description}</p>
                        {f.dcFormula && <p className="mt-0.5 text-xs font-mono text-foreground/70">DC: {f.dcFormula}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Skills</CardTitle>
          <CardDescription>
            <AuditTrail label="Skill Points" value={`${skillPoints.spent} / ${skillPoints.total} spent`} audit={skillPoints.audit} className="mt-2" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          {skills.filter((s) => s.ranks > 0).length === 0 ? (
            <p className="text-sm text-muted-foreground">No skill ranks allocated yet.</p>
          ) : (
            <div className="grid gap-2 sm:grid-cols-2">
              {skills
                .filter((s) => s.ranks > 0)
                .map((s) => (
                  <AuditTrail
                    key={s.id}
                    label={`${s.name}${s.isClassSkill ? " (class)" : ""}`}
                    value={fmtMod(s.total)}
                    audit={s.audit}
                    data-testid={`sheet-skill-${s.id}`}
                  />
                ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Feats</CardTitle>
          <CardDescription>
            <AuditTrail label="Feat Slots" value={`${featSlots.used} / ${featSlots.total} used`} audit={featSlots.audit} className="mt-2" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedFeats.length === 0 ? (
            <p className="text-sm text-muted-foreground">No feats selected yet.</p>
          ) : (
            <ul className="space-y-1.5">
              {selectedFeats.map((f) => (
                <li key={f.id} className="rounded-md border border-card-border bg-card p-2.5 text-sm" data-testid={`sheet-feat-${f.id}`}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">{f.name}</span>
                    <a href={f.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 text-xs text-primary underline underline-offset-2">
                      {f.source}
                    </a>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{f.benefitSummary}</p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Inventory</CardTitle>
          <CardDescription>Equipment and magic items owned by this character.</CardDescription>
        </CardHeader>
        <CardContent>
          {inventory.length === 0 ? (
            <p className="text-sm text-muted-foreground">Inventory is empty.</p>
          ) : (
            <ul className="space-y-1.5">
              {inventory.map((ri) => (
                <li key={ri.entry.id} className="rounded-md border border-card-border bg-card p-2.5 text-sm" data-testid={`sheet-inventory-${ri.entry.id}`}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">
                      {ri.name} {ri.entry.equipped ? <Badge variant="secondary" className="ml-1 text-[10px]">Equipped</Badge> : null}
                    </span>
                    <a href={ri.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 text-xs text-primary underline underline-offset-2">
                      Source
                    </a>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{ri.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
