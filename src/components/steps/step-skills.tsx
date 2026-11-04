import { useState } from "react";
import { Info, Minus, Plus, Search } from "lucide-react";
import { ALL_SKILLS } from "@/data";
import type { ResolvedCharacter, Ruleset } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { describeSkill, type EntityDetail } from "@/lib/entity-descriptions";

interface StepSkillsProps {
  skillRanks: Record<string, number>;
  enabledRulesets: Ruleset[];
  disabledSkillIds: string[];
  resolved: ResolvedCharacter;
  onSetRank: (skillId: string, ranks: number) => void;
  /** Still passed by the builder and still part of the build's toggle
   * state — but no longer rendered: the skills carry no toggle switch
   * (Shaun, 2026-11-03). */
  onToggleSkillEnabled: (skillId: string, enabled: boolean) => void;
}

export function StepSkills({ skillRanks, enabledRulesets, disabledSkillIds, resolved, onSetRank }: StepSkillsProps) {
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  const skillsById = new Map(ALL_SKILLS.filter((s) => enabledRulesets.includes(s.ruleset)).map((s) => [s.id, s]));
  const visibleResolved = resolved.skills.filter((s) => skillsById.has(s.id) && s.name.toLowerCase().includes(query.toLowerCase()));
  const spent = resolved.skillPoints.spent;
  const total = resolved.skillPoints.total;
  const remaining = total - spent;

  return (
    <div className="space-y-6">
      <Card data-testid="card-skilled-vs-unskilled">
        <CardHeader>
          <CardTitle className="font-display text-xl">Skilled vs. Unskilled</CardTitle>
          <CardDescription>Whether a skill can be attempted at all depends on training.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Skilled (trained-only) skills</span> — marked{" "}
            <Badge variant="outline" className="text-[10px]">Trained only</Badge> below — can only be used if the
            character has at least 1 rank in them. With no ranks there is no check at all: the character simply
            cannot attempt the task, no matter how high the key ability is.
          </p>
          <p>
            <span className="font-medium text-foreground">Unskilled skills</span> can be attempted with no ranks at
            all — the character rolls with just the key ability modifier (plus any racial or synergy bonuses), and
            the armor check penalty still applies where a skill is marked{" "}
            <Badge variant="outline" className="text-[10px]">ACP</Badge>.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Skills</CardTitle>
          <CardDescription>
            Allocate skill ranks earned from class levels and Intelligence modifier. Class skills cap at level + 3
            ranks. Every skill costs 1 point per rank — the cross-class double-cost rule is LOCKED OFF at Shaun's
            direction. The cross-class rank cap follows the House Rules toggle above. Source:{" "}
            <a href="https://www.d20srd.org/srd/skills/skillsSummary.htm" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Skills
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-card-border bg-card p-3">
            <div className="text-sm">
              <span className="font-display text-lg font-semibold tabular-nums" data-testid="text-skill-points-remaining">
                {remaining}
              </span>
              <span className="text-muted-foreground"> remaining of {total} skill points ({spent} spent)</span>
            </div>
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills…"
                className="h-8 pl-8"
                data-testid="input-skill-search"
              />
            </div>
          </div>

          {/* Skills in two columns (Shaun, 2026-11-04): the list
              was one long single-column stack; it now runs two
              across on sm+ screens, one column on phones. The
              hairline dividers come from gap-px over the border
              color with each row on bg-card. */}
          <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-card-border bg-card-border sm:grid-cols-2">
            {visibleResolved.length === 0 ? (
              <p className="bg-card p-4 text-sm text-muted-foreground sm:col-span-2">No skills match your search or the enabled rule sets.</p>
            ) : (
              visibleResolved.map((skill) => {
                const def = skillsById.get(skill.id)!;
                const ranks = skillRanks[skill.id] ?? 0;
                const atCap = ranks >= skill.maxRanks;
                const isDisabled = disabledSkillIds.includes(skill.id);
                return (
                  <div
                    key={skill.id}
                    className={cn("flex flex-wrap items-center justify-between gap-3 bg-card p-3", isDisabled && "opacity-50")}
                    data-testid={`skill-row-${skill.id}`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-medium">{def.name}</span>
                        <button
                          type="button"
                          onClick={() => setDetail(describeSkill(def))}
                          className="rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
                          aria-label={`View description of ${def.name}`}
                          data-testid={`button-info-skill-${def.id}`}
                        >
                          <Info className="h-3.5 w-3.5" />
                        </button>
                        <Badge variant="outline" className="text-[10px] font-mono uppercase">{def.keyAbility}</Badge>
                        {skill.isClassSkill && <Badge variant="secondary" className="text-[10px]">Class skill</Badge>}
                        {skill.rankCost > 1 && (
                          <Badge variant="outline" className="text-[10px]" data-testid={`badge-rank-cost-${skill.id}`}>
                            {skill.rankCost}× cost
                          </Badge>
                        )}
                        {def.trainedOnly && <Badge variant="outline" className="text-[10px]">Trained only</Badge>}
                        {def.armorCheckPenalty && <Badge variant="outline" className="text-[10px]">ACP</Badge>}
                        {def.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[def.ruleset]} />}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Max ranks: <span className="font-mono">{skill.maxRanks}</span> · Cost:{" "}
                        <span className="font-mono">{skill.rankCost}/rank</span> · Total:{" "}
                        <span className="font-mono text-foreground">{skill.total >= 0 ? `+${skill.total}` : skill.total}</span>
                      </p>
                      {skill.synergyNotes && skill.synergyNotes.length > 0 && (
                        <ul className="mt-1 space-y-0.5" data-testid={`synergy-notes-${skill.id}`}>
                          {skill.synergyNotes.map((n, i) => (
                            <li key={i} className="text-xs text-primary/90">Synergy: {n}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-7 w-7"
                        disabled={ranks <= 0 || isDisabled}
                        onClick={() => onSetRank(skill.id, ranks - 1)}
                        data-testid={`button-remove-rank-${skill.id}`}
                        aria-label={`Remove a rank of ${def.name}`}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </Button>
                      <span className="w-8 text-center font-mono text-sm" data-testid={`text-ranks-${skill.id}`}>{ranks}</span>
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-7 w-7"
                        disabled={atCap || remaining < skill.rankCost || isDisabled}
                        onClick={() => onSetRank(skill.id, ranks + 1)}
                        data-testid={`button-add-rank-${skill.id}`}
                        aria-label={`Add a rank of ${def.name}`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </Button>
                      {/* No toggle switch on skills (Shaun, 2026-11-03:
                          "Take all the toggles off. All of them."). A
                          skill's disabled state still lives in the
                          build / toggle prefs exactly as set — there
                          is just no switch here to flip it with. */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          {resolved.synergyNotes.length > 0 && (
            <div className="mt-4 rounded-md border border-card-border bg-card p-3" data-testid="synergy-character-notes">
              <h4 className="font-display text-sm font-semibold">Superior Synergy — other benefits</h4>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {resolved.synergyNotes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">
                Per Superior Skill Synergy (Misfit Studios, 2005) — House Rules toggle.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      <EntityDetailDialog detail={detail} onOpenChange={(open) => !open && setDetail(null)} />
    </div>
  );
}
