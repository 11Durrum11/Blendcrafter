import { AlertTriangle, ArrowDown, ArrowUp, Info, X } from "lucide-react";
import { ALL_TEMPLATES } from "@/data";
import type { AppliedTemplateChoice, CreatureType, Ruleset, ValidationIssue } from "@/engine/types";
import { checkPrerequisites } from "@/engine/prerequisites";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";

interface StepTemplatesProps {
  templates: AppliedTemplateChoice[];
  baseType: CreatureType;
  enabledRulesets: Ruleset[];
  onAdd: (templateId: string) => void;
  onRemove: (templateId: string) => void;
  onReorder: (templateId: string, direction: -1 | 1) => void;
  onSetForm: (templateId: string, formId: string) => void;
  validation: ValidationIssue[];
}

export function StepTemplates({ templates, baseType, enabledRulesets, onAdd, onRemove, onReorder, onSetForm, validation }: StepTemplatesProps) {
  const visibleTemplates = ALL_TEMPLATES.filter((t) => enabledRulesets.includes(t.ruleset));
  const templatesById = new Map(visibleTemplates.map((t) => [t.id, t]));
  const availableTemplates = visibleTemplates.filter((t) => !templates.some((chosen) => chosen.templateId === t.id));

  // Simulate the running type as templates are applied in order (shown to
  // the user for context), but SRD template prerequisites such as "humanoid
  // or monstrous humanoid base creature only" (vampire) are phrased in
  // terms of the ORIGINAL base creature type, not whatever type an earlier
  // inherited template produces -- this is why half-dragon (-> Dragon) then
  // vampire (requires Humanoid/Monstrous Humanoid base) is a legal, classic
  // combination. Source: https://www.d20srd.org/srd/monsters/vampire.htm
  let simulatedType = baseType;
  const appliedIdsSoFar: string[] = [];
  const perTemplateIssues = templates.map((choice) => {
    const def = templatesById.get(choice.templateId);
    if (!def) return { choice, def, issues: [] as ValidationIssue[] };
    const issues = checkPrerequisites(def, { baseType, type: simulatedType, subtypes: [], appliedTemplateIds: appliedIdsSoFar });
    appliedIdsSoFar.push(def.id);
    const typePatch = def.patches.find((p) => p.op === "set-type");
    if (typePatch?.value) simulatedType = typePatch.value as CreatureType;
    return { choice, def, issues };
  });

  const orderingIssues = validation.filter((v) => v.message.includes("must be applied before"));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Template Blending</CardTitle>
          <CardDescription>
            Choose monster templates as an <strong>ordered</strong> list. Per SRD rule, inherited templates (e.g. Half-Dragon, Lycanthrope)
            must be applied before acquired templates (e.g. Vampire, Ghost). Source:{" "}
            <a href="https://www.d20srd.org/srd/improvingMonsters.htm" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              Improving Monsters
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {orderingIssues.length > 0 && (
            <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive" data-testid="ordering-warning">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <div>{orderingIssues.map((i, idx) => <p key={idx}>{i.message}</p>)}</div>
            </div>
          )}

          <div className="flex flex-wrap gap-2" data-testid="template-chip-list">
            {perTemplateIssues.length === 0 && (
              <p className="text-sm text-muted-foreground italic">No templates applied yet — the character is the unmodified base creature.</p>
            )}
            {perTemplateIssues.map(({ choice, def, issues }, idx) => {
              if (!def) return null;
              const hasError = issues.some((i) => i.severity === "error");
              return (
                <div
                  key={choice.templateId}
                  data-testid={`template-chip-${choice.templateId}`}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm",
                    hasError ? "border-destructive bg-destructive/10 text-destructive" : "border-primary/40 bg-accent/50 text-foreground"
                  )}
                >
                  <span className="font-mono text-xs text-muted-foreground">{idx + 1}.</span>
                  <span className="font-medium">{def.name}</span>
                  {def.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[def.ruleset]} />}
                  <Badge variant="outline" className="text-[10px] capitalize">
                    {def.timing}
                  </Badge>
                  {hasError && <AlertTriangle className="h-3.5 w-3.5" />}
                  {def.forms && def.forms.length > 0 && (
                    <Select value={choice.formId ?? def.forms[0].id} onValueChange={(v) => onSetForm(choice.templateId, v)}>
                      <SelectTrigger className="h-6 w-32 text-xs" data-testid={`select-form-${choice.templateId}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {def.forms.map((f) => (
                          <SelectItem key={f.id} value={f.id} className="text-xs">
                            {f.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <button
                    type="button"
                    onClick={() => onReorder(choice.templateId, -1)}
                    disabled={idx === 0}
                    aria-label={`Move ${def.name} earlier`}
                    className="rounded p-0.5 hover-elevate disabled:opacity-30"
                    data-testid={`button-move-up-${choice.templateId}`}
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onReorder(choice.templateId, 1)}
                    disabled={idx === perTemplateIssues.length - 1}
                    aria-label={`Move ${def.name} later`}
                    className="rounded p-0.5 hover-elevate disabled:opacity-30"
                    data-testid={`button-move-down-${choice.templateId}`}
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemove(choice.templateId)}
                    aria-label={`Remove ${def.name}`}
                    className="rounded p-0.5 hover-elevate"
                    data-testid={`button-remove-template-${choice.templateId}`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {perTemplateIssues.some(({ issues }) => issues.some((i) => i.severity === "error")) && (
            <div className="space-y-1.5">
              {perTemplateIssues
                .filter(({ issues }) => issues.some((i) => i.severity === "error"))
                .map(({ def, issues }) =>
                  issues
                    .filter((i) => i.severity === "error")
                    .map((issue, idx) => (
                      <p key={`${def?.id}-${idx}`} className="flex items-start gap-1.5 text-xs text-destructive" data-testid={`validation-error-${def?.id}`}>
                        <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" /> {issue.message}
                      </p>
                    ))
                )}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Add a Template</CardTitle>
          <CardDescription>Prerequisites are validated live against the original base creature's type, per SRD template wording (e.g. vampire requires a "humanoid or monstrous humanoid base creature").</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {availableTemplates.map((t) => {
              const issues = checkPrerequisites(t, { baseType, type: simulatedType, subtypes: [], appliedTemplateIds: appliedIdsSoFar });
              const blocked = issues.some((i) => i.severity === "error");
              return (
                <div key={t.id} className="rounded-md border border-card-border bg-card p-3" data-testid={`template-option-${t.id}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-display text-base font-semibold flex items-center gap-1.5">
                        {t.name}
                        {t.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[t.ruleset]} />}
                        <Badge variant="outline" className="text-[10px] capitalize">
                          {t.timing}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{t.summary}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="flex gap-2 text-xs font-mono text-muted-foreground">
                      <span>CR +{t.crModifier}</span>
                      <span>LA +{t.levelAdjustment}</span>
                    </div>
                    <Button type="button" size="sm" onClick={() => onAdd(t.id)} data-testid={`button-add-template-${t.id}`}>
                      Add
                    </Button>
                  </div>
                  {blocked && (
                    <p className="mt-2 flex items-start gap-1.5 text-xs text-destructive">
                      <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" />
                      {issues.find((i) => i.severity === "error")?.message}
                    </p>
                  )}
                  {!blocked && issues.some((i) => i.severity === "warning") && (
                    <p className="mt-2 flex items-start gap-1.5 text-xs text-muted-foreground">
                      <Info className="mt-0.5 h-3 w-3 shrink-0" />
                      {issues.find((i) => i.severity === "warning")?.message}
                    </p>
                  )}
                </div>
              );
            })}
            {availableTemplates.length === 0 && (
              <p className="text-sm text-muted-foreground italic">All available templates have been applied.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
