import { useState } from "react";
import { ChevronDown, ScrollText } from "lucide-react";
import type { AuditEntry } from "@/engine/types";
import { cn } from "@/lib/utils";

interface AuditTrailProps {
  label: string;
  value: string | number;
  audit: AuditEntry[];
  className?: string;
  "data-testid"?: string;
}

/**
 * Every key derived number on the character sheet renders through this
 * component so it can expand into the ordered list of {source, target,
 * operation, resultingValue} entries that produced it.
 */
export function AuditTrail({ label, value, audit, className, ...rest }: AuditTrailProps) {
  const [open, setOpen] = useState(false);
  const testId = rest["data-testid"] ?? `audit-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={cn("rounded-md border border-card-border bg-card", className)} data-testid={testId}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full flex-col items-start gap-1 px-3 py-2.5 text-left hover-elevate rounded-md"
        aria-expanded={open}
      >
        <span className="block w-full text-xs font-medium uppercase tracking-wide text-muted-foreground leading-tight">
          {label}
        </span>
        <span className="flex w-full items-center justify-between gap-1.5">
          <span className="font-display text-lg font-semibold text-foreground tabular-nums">{value}</span>
          <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")} />
        </span>
      </button>
      {open && (
        <div className="border-t border-card-border px-3 py-2.5">
          {audit.length === 0 ? (
            <p className="text-sm text-muted-foreground italic">No modifiers applied — base value only.</p>
          ) : (
            <ol className="space-y-1.5">
              {audit.map((entry, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <ScrollText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70" />
                  <span className="min-w-0">
                    <span className="font-medium text-foreground">{entry.source}</span>
                    {entry.sourceUrl ? (
                      <a
                        href={entry.sourceUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="ml-1 text-xs text-primary underline underline-offset-2"
                      >
                        SRD
                      </a>
                    ) : null}
                    <span className="text-muted-foreground"> — {entry.operation}</span>
                    <span className="ml-1 font-mono text-xs text-foreground/80">
                      → {String(entry.resultingValue)}
                    </span>
                    {entry.note ? <span className="block text-xs text-muted-foreground italic">{entry.note}</span> : null}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
