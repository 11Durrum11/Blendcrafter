import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { Ruleset } from "@/engine/types";

export const RULESET_LABELS: Record<Ruleset, string> = {
  core: "Core / SRD",
  eberron: "Eberron",
  iron_kingdoms: "Iron Kingdoms",
  sorcery_steam: "Sorcery & Steam",
};

const TOGGLEABLE_RULESETS: Ruleset[] = ["eberron", "iron_kingdoms", "sorcery_steam"];

interface RulesetToggleProps {
  enabledRulesets: Ruleset[];
  onToggle: (ruleset: Ruleset, enabled: boolean) => void;
}

/**
 * Header control that lets the player opt in to non-core content sets. Core/SRD content
 * is always available and cannot be turned off. Every picker in the app (races, classes,
 * prestige classes, skills, feats, templates, equipment, magic items) filters its list by
 * this same `enabledRulesets` array, so toggling here changes what shows up everywhere.
 */
export function RulesetToggle({ enabledRulesets, onToggle }: RulesetToggleProps) {
  const extraCount = TOGGLEABLE_RULESETS.filter((r) => enabledRulesets.includes(r)).length;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="px-2 sm:px-3" data-testid="button-ruleset-toggle">
          <BookOpen className="h-3.5 w-3.5 sm:mr-1.5" />
          <span className="hidden sm:inline">Rule Sets</span>
          {extraCount > 0 && <span className="ml-1 rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">{extraCount}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <div className="space-y-3">
          <div>
            <h3 className="font-display text-sm font-semibold">Rule Sets</h3>
            <p className="text-xs text-muted-foreground">
              Choose which mechanical-reference content sets appear in every picker. Core/SRD is always on.
            </p>
          </div>
          <div className="space-y-2.5">
            <label className="flex items-start gap-2.5 text-sm opacity-70">
              <Checkbox checked disabled data-testid="checkbox-ruleset-core" />
              <span>
                <span className="font-medium">{RULESET_LABELS.core}</span>
                <span className="block text-xs text-muted-foreground">Always enabled — Open Game Content from the d20 SRD.</span>
              </span>
            </label>
            {TOGGLEABLE_RULESETS.map((rs) => (
              <label key={rs} className="flex items-start gap-2.5 text-sm cursor-pointer">
                <Checkbox
                  checked={enabledRulesets.includes(rs)}
                  onCheckedChange={(checked) => onToggle(rs, checked === true)}
                  data-testid={`checkbox-ruleset-${rs}`}
                />
                <span>
                  <span className="font-medium">{RULESET_LABELS[rs]}</span>
                  <span className="block text-xs text-muted-foreground">
                    Independent mechanical-reference index — no reproduced Product Identity text.
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
