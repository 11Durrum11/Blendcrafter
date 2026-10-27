import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/**
 * Small badge shown next to any race/class/skill/feat/item that comes from a
 * non-SRD ruleset (Eberron, Iron Kingdoms, Sorcery & Steam). Communicates that
 * this is our own mechanical-reference summary of a Product Identity element,
 * not reproduced text from the source publication.
 */
export function ProductIdentityBadge({ rulesetLabel }: { rulesetLabel: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant="outline" className="gap-1 text-[10px] font-medium" data-testid="badge-product-identity">
          <Info className="h-3 w-3" /> {rulesetLabel}
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs text-xs">
        This is an independent mechanical-reference summary (numbers, tags, and short paraphrase) inspired by{" "}
        {rulesetLabel}. Names, settings, and story text are Product Identity of their respective publisher; no
        copyrighted prose is reproduced here — similar in spirit to fan reference tools like PCGen or dndtools.net.
      </TooltipContent>
    </Tooltip>
  );
}
