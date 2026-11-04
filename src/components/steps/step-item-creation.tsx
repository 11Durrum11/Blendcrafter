import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MAGIC_ITEM_CREATION_LINES } from "@/components/steps/step-equipment";

/**
 * Magic Item Creation (Shaun, 2026-11-04): a third top-level
 * section beside Player Reference and Character Creation — the
 * creation mechanics as their own reference page: the method and
 * the cost per item family. The same lines ride in compact form
 * under the Magic Items step's header. Read-only; it changes no
 * build state.
 */
export function StepItemCreation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-xl">Magic Item Creation</CardTitle>
        <CardDescription>
          The method and the cost for each family of magic item — standard SRD/DMG figures, plus the house brewing rules.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {MAGIC_ITEM_CREATION_LINES.map((line) => (
            <div key={line.label} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`creation-family-${line.label}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">{line.label}</p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{line.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
