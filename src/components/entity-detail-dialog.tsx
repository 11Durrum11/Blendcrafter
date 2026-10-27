import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { EntityDetail } from "@/lib/entity-descriptions";

interface EntityDetailDialogProps {
  detail: EntityDetail | null;
  onOpenChange: (open: boolean) => void;
}

/**
 * Shared read-only detail view opened by clicking a race, class, prestige class, skill,
 * feat, or ability score anywhere in the builder. Content comes from entity-descriptions.ts.
 */
export function EntityDetailDialog({ detail, onOpenChange }: EntityDetailDialogProps) {
  return (
    <Dialog open={detail !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg" data-testid="dialog-entity-detail">
        {detail && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl">{detail.title}</DialogTitle>
              {detail.badges.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {detail.badges.map((b) => (
                    <Badge key={b} variant="outline" className="text-[10px]">
                      {b}
                    </Badge>
                  ))}
                </div>
              )}
              {detail.summary && <DialogDescription className="pt-1.5 text-sm text-foreground">{detail.summary}</DialogDescription>}
            </DialogHeader>
            <div className="space-y-3">
              {detail.sections.map((s) => (
                <div key={s.heading}>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.heading}</h4>
                  <p className="mt-1 whitespace-pre-line text-sm text-foreground">{s.body}</p>
                </div>
              ))}
            </div>
            {detail.sourceUrl && (
              <a
                href={detail.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-[11px] text-primary underline underline-offset-2"
              >
                {detail.source}
              </a>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
