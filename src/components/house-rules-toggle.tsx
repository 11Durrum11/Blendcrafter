import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { HouseRules } from "@/engine/types";
import { HOUSE_RULE_DEFS } from "@/engine/house-rules";

interface HouseRulesToggleProps {
  houseRules: HouseRules;
  onToggle: (id: keyof HouseRules, enabled: boolean) => void;
}

/**
 * Header control that lets the player flip individual rule mechanics on or off,
 * independent of which content rulesets are enabled. Every flag defaults to RAW
 * (Rules As Written) — turning one off swaps in a simplified/house-rule variant.
 * The catalog in engine/house-rules.ts is the single source of truth for both this
 * UI and the resolver, so adding a new toggle only requires editing that file.
 */
export function HouseRulesToggle({ houseRules, onToggle }: HouseRulesToggleProps) {
  const offCount = HOUSE_RULE_DEFS.filter((r) => houseRules[r.id] !== r.defaultValue).length;
  const categories = Array.from(new Set(HOUSE_RULE_DEFS.map((r) => r.category)));
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="px-2 sm:px-3" data-testid="button-house-rules-toggle">
          <Settings2 className="h-3.5 w-3.5 sm:mr-1.5" />
          <span className="hidden sm:inline">House Rules</span>
          {offCount > 0 && <span className="ml-1 rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">{offCount}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-96">
        <div className="space-y-3">
          <div>
            <h3 className="font-display text-sm font-semibold">House Rules</h3>
            <p className="text-xs text-muted-foreground">
              Toggle individual rule mechanics on or off. Defaults match RAW (Rules As Written) — turn any off to use a
              simplified variant at your table.
            </p>
          </div>
          {categories.map((category) => (
            <div key={category} className="space-y-2.5">
              <h4 className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{category}</h4>
              {HOUSE_RULE_DEFS.filter((r) => r.category === category).map((rule) => (
                <label key={rule.id} className="flex items-start gap-2.5 text-sm cursor-pointer">
                  <Checkbox
                    checked={houseRules[rule.id]}
                    onCheckedChange={(checked) => onToggle(rule.id, checked === true)}
                    data-testid={`checkbox-house-rule-${rule.id}`}
                  />
                  <span>
                    <span className="font-medium">{rule.label}</span>
                    <span className="block text-xs text-muted-foreground">{rule.description}</span>
                    <a
                      href={rule.ruleReference}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-primary underline underline-offset-2"
                    >
                      SRD rule
                    </a>
                  </span>
                </label>
              ))}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
