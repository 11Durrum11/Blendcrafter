import { useState } from "react";
import { AlertTriangle, Info, Search, Zap } from "lucide-react";
import { ALL_FEATS } from "@/data";
import type { FeatDefinition, ResolvedCharacter, Ruleset } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CLASS_BONUS_FEAT_RULES } from "@/lib/class-bonus-feats";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { describeFeat, type EntityDetail } from "@/lib/entity-descriptions";

interface StepFeatsProps {
  featIds: string[];
  enabledRulesets: Ruleset[];
  disabledFeatIds: string[];
  resolved: ResolvedCharacter;
  onToggleFeat: (featId: string, selected: boolean) => void;
  onToggleFeatEnabled: (featId: string, enabled: boolean) => void;
}

const CATEGORY_LABELS: Record<FeatDefinition["category"], string> = {
  general: "General",
  "item-creation": "Item Creation",
  metamagic: "Metamagic",
  "race-specific": "Race-Specific",
  "setting-specific": "Setting-Specific",
  combat: "Combat",
};

/** Section order for the grouped feat list (Shaun, 2026-11-02). */
export const FEAT_CATEGORY_ORDER: FeatDefinition["category"][] = [
  "general",
  "combat",
  "item-creation",
  "metamagic",
  "race-specific",
  "setting-specific",
];

/**
 * The fighter bonus feat rule (record-text designations + the PHB
 * list + Player's Handbook II designations) and every other class's
 * bonus-feat rule live in src/lib/class-bonus-feats.ts. Re-exported
 * here for existing callers.
 */
export { isFighterBonusFeat } from "@/lib/class-bonus-feats";

/**
 * Best-effort free-text prerequisite check against ability scores / BAB / other selected
 * feats. This never hard-blocks selection — it only renders a warning badge, per spec,
 * since feat prerequisite text isn't structured data the way template prerequisites are.
 */
function looksUnmet(feat: FeatDefinition, resolved: ResolvedCharacter, selectedFeatIds: string[]): boolean {
  for (const raw of feat.prerequisites) {
    const p = raw.toLowerCase();
    const babMatch = p.match(/base attack bonus \+?(\d+)/);
    if (babMatch && resolved.bab.total < Number(babMatch[1])) return true;
    const abilityMatch = p.match(/(strength|dexterity|constitution|intelligence|wisdom|charisma) (\d+)/);
    if (abilityMatch) {
      const key = abilityMatch[1].slice(0, 3) as "str" | "dex" | "con" | "int" | "wis" | "cha";
      const score = resolved.abilityScores[key]?.total;
      if (score !== null && score !== undefined && score < Number(abilityMatch[2])) return true;
    }
    // "Feat X" as a prerequisite for another feat — check it's among current selections.
    const featNameMatch = ALL_FEATS.find((f) => f.id !== feat.id && p.includes(f.name.toLowerCase()));
    if (featNameMatch && !selectedFeatIds.includes(featNameMatch.id)) return true;
  }
  return false;
}

export function StepFeats({ featIds, enabledRulesets, disabledFeatIds, resolved, onToggleFeat, onToggleFeatEnabled }: StepFeatsProps) {
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  const visible = ALL_FEATS.filter(
    (f) => enabledRulesets.includes(f.ruleset) && f.name.toLowerCase().includes(query.toLowerCase())
  );
  const used = resolved.featSlots.used;
  const total = resolved.featSlots.total;

  // Feats grouped into class bonus-feat sections first (Shaun,
  // 2026-11-02: the PHB fighter bonus-feat list, and the same
  // treatment for every class that grants selectable bonus feats —
  // see src/lib/class-bonus-feats.ts), then by category.
  // Single-listing: a feat appears in the first section whose rule
  // it matches and nowhere else. A class section whose whole list
  // was claimed by earlier sections still shows its heading (with
  // its source note) as a pointer — unless a search is filtering
  // the list, in which case empty sections disappear entirely.
  const claimed = new Set<string>();
  const classSections = CLASS_BONUS_FEAT_RULES.map((rule) => {
    const matching = visible.filter((f) => rule.matches(f));
    const feats = matching.filter((f) => !claimed.has(f.id));
    for (const f of feats) claimed.add(f.id);
    return {
      id: `class-${rule.classId}`,
      label: rule.sectionLabel,
      note: rule.note as string | undefined,
      feats,
      shadowed: matching.length - feats.length,
    };
  });
  const featSections: { id: string; label: string; note?: string; feats: FeatDefinition[]; shadowed: number }[] = [
    ...classSections,
    ...FEAT_CATEGORY_ORDER.map((cat) => ({
      id: cat as string,
      label: CATEGORY_LABELS[cat],
      feats: visible.filter((f) => f.category === cat && !claimed.has(f.id)),
      shadowed: 0,
    })),
  ].filter((s) => s.feats.length > 0 || (query === "" && s.shadowed > 0));

  const renderFeatCard = (feat: FeatDefinition) => {
    const selected = featIds.includes(feat.id);
    const unmet = looksUnmet(feat, resolved, featIds);
    const isDisabled = disabledFeatIds.includes(feat.id);
    // Grayed out (Shaun, 2026-11-02): a feat whose prerequisites
    // don't look met renders grayed so the ones the build qualifies
    // for stand out at a glance. Still selectable — prerequisites
    // are flagged, never enforced. A feat already chosen keeps its
    // full-strength card (with the warning line) so the current
    // build stays readable.
    const grayed = unmet && !selected && !isDisabled;
    return (
      <div
        key={feat.id}
        role="checkbox"
        aria-checked={selected}
        tabIndex={isDisabled ? -1 : 0}
        onClick={() => !isDisabled && onToggleFeat(feat.id, !selected)}
        onKeyDown={(e) => {
          if (isDisabled) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggleFeat(feat.id, !selected);
          }
        }}
        className={cn(
          "flex items-start gap-2.5 rounded-md border border-card-border bg-card p-3",
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover-elevate",
          grayed && "bg-muted/40 opacity-60 saturate-50"
        )}
        data-testid={`feat-card-${feat.id}`}
      >
        <Checkbox
          checked={selected}
          disabled={isDisabled}
          onCheckedChange={(checked) => onToggleFeat(feat.id, checked === true)}
          onClick={(e) => e.stopPropagation()}
          className="mt-0.5"
          data-testid={`checkbox-feat-${feat.id}`}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={cn("font-medium", grayed && "text-muted-foreground")}>{feat.name}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setDetail(describeFeat(feat));
              }}
              className="rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
              aria-label={`View description of ${feat.name}`}
              data-testid={`button-info-feat-${feat.id}`}
            >
              <Info className="h-3.5 w-3.5" />
            </button>
            <Switch
              checked={!isDisabled}
              onCheckedChange={(checked) => onToggleFeatEnabled(feat.id, checked)}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto shrink-0 scale-75"
              aria-label={isDisabled ? `Enable ${feat.name}` : `Disable ${feat.name}`}
              data-testid={`switch-enable-feat-${feat.id}`}
            />
            <Badge variant="outline" className="text-[10px]">{CATEGORY_LABELS[feat.category]}</Badge>
            {feat.modifiers && feat.modifiers.length > 0 && (
              <Badge variant="secondary" className="text-[10px]">Mechanical effect</Badge>
            )}
            {feat.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[feat.ruleset]} />}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">{feat.benefitSummary}</p>
          {feat.prerequisites.length > 0 && (
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Prereqs:</span> {feat.prerequisites.join("; ")}
            </p>
          )}
          {unmet && (
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-500" data-testid={`warning-prereq-${feat.id}`}>
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> Prerequisites not verified against your current build.
            </div>
          )}
          <a href={feat.sourceUrl} target="_blank" rel="noreferrer" className="mt-1.5 block text-[11px] text-primary underline underline-offset-2">
            {feat.source}
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" /> Feats
          </CardTitle>
          <CardDescription>
            Feats whose prerequisites don't look met are <span className="font-medium">grayed out</span> and
            flagged with a warning — prerequisites are shown as free text and are{" "}
            <span className="font-medium">not enforced</span>. Source:{" "}
            <a href="https://www.d20srd.org/srd/feats.htm" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Feats
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-card-border bg-card p-3">
            <div className="text-sm">
              <span className="font-display text-lg font-semibold tabular-nums" data-testid="text-feat-slots-used">
                {used} / {total}
              </span>
              <span className="text-muted-foreground"> feat slots used</span>
            </div>
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search feats…"
                className="h-8 pl-8"
                data-testid="input-feat-search"
              />
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">No feats match your search or the enabled rule sets.</p>
          ) : (
            featSections.map((section) => {
              const turnedOn = section.feats.filter((f) => !disabledFeatIds.includes(f.id));
              const turnedOff = section.feats.filter((f) => disabledFeatIds.includes(f.id));
              // Active feats to the top (Shaun, 2026-11-02): within a
              // section, the feats the build qualifies for (and any
              // already chosen) list first; the grayed-out ones sink
              // below under their own subheading, the same pattern as
              // the turned-off segregation.
              const isGrayed = (f: FeatDefinition) => looksUnmet(f, resolved, featIds) && !featIds.includes(f.id);
              const active = turnedOn.filter((f) => !isGrayed(f));
              const grayedOut = turnedOn.filter(isGrayed);
              return (
                <div key={section.id} className="mt-5" data-testid={`feat-section-${section.id}`}>
                  <h4 className="font-display text-base font-semibold">{section.label}</h4>
                  {section.note && <p className="mt-0.5 text-xs text-muted-foreground">{section.note}</p>}
                  {section.feats.length === 0 && (
                    <p className="mt-1 text-xs italic text-muted-foreground">Every feat on this list is listed in an earlier section above.</p>
                  )}
                  {active.length > 0 && <div className="mt-2 grid gap-3 sm:grid-cols-2">{active.map(renderFeatCard)}</div>}
                  {grayedOut.length > 0 && (
                    <>
                      <h5 className="mt-4 font-display text-sm font-semibold text-muted-foreground">Prerequisites not met</h5>
                      <div className="mt-2 grid gap-3 sm:grid-cols-2">{grayedOut.map(renderFeatCard)}</div>
                    </>
                  )}
                  {turnedOff.length > 0 && (
                    <>
                      <h5 className="mt-4 font-display text-sm font-semibold text-muted-foreground">Turned off</h5>
                      <div className="mt-2 grid gap-3 sm:grid-cols-2">{turnedOff.map(renderFeatCard)}</div>
                    </>
                  )}
                </div>
              );
            })
          )}
        </CardContent>
      </Card>
      <EntityDetailDialog detail={detail} onOpenChange={(open) => !open && setDetail(null)} />
    </div>
  );
}
