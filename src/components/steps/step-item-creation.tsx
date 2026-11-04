import { useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ALL_FEATS } from "@/data";
import type { FeatDefinition } from "@/engine/types";
import { describeFeat } from "@/lib/entity-descriptions";
import { MAGIC_ITEM_CREATION_LINES, POTION_RULE_LINES } from "@/components/steps/step-equipment";

/**
 * Magic Item Creation (Shaun, 2026-11-04): a third top-level
 * section beside Player Reference and Character Creation, and
 * its line up top is clickable like Character Creation — it
 * opens, with jump links to the parts of this page. The page
 * carries the WHOLE creation mechanics: the general method, the
 * cost per item family, alchemy the non-magical craft, and every
 * item-creation feat in the catalog in full. Read-only; it
 * changes no build state.
 */

// The classic SRD creation feats lead the feat list, then
// Shaun's house brewing chain, then everything else the catalog
// holds, alphabetical.
const FEATURED_FEAT_IDS = [
  "scribe-scroll",
  "brew-potion",
  "craft-wondrous-item",
  "craft-magic-arms-and-armor",
  "craft-rod",
  "craft-staff",
  "craft-wand",
  "forge-ring",
  "brew-potion-or-oil-house",
  "improved-brew-potion-or-oil-house",
  "greater-brew-potion-or-oil-house",
  "brew-injection",
];

function orderedCreationFeats(): FeatDefinition[] {
  const all = ALL_FEATS.filter((f) => f.category === "item-creation");
  const byId = new Map(all.map((f) => [f.id, f]));
  const featured = FEATURED_FEAT_IDS.map((id) => byId.get(id)).filter((f): f is FeatDefinition => !!f);
  const featuredIds = new Set(featured.map((f) => f.id));
  const rest = all
    .filter((f) => !featuredIds.has(f.id))
    .sort((a, b) => a.name.localeCompare(b.name));
  return [...featured, ...rest];
}

export function StepItemCreation() {
  const feats = useMemo(orderedCreationFeats, []);
  const general = MAGIC_ITEM_CREATION_LINES[0];
  const families = MAGIC_ITEM_CREATION_LINES.slice(1);
  const alchemyDifference = POTION_RULE_LINES.find((l) => l.label.startsWith("Magical vs alchemical"));
  const alchemyCures = POTION_RULE_LINES.find((l) => l.label.startsWith("Cure line"));
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-xl">Magic Item Creation</CardTitle>
        <CardDescription>
          The whole of it — the general method, the cost for each family of magic item, alchemy the non-magical craft, and every item-creation feat in the library, in full.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div id="creation-general" className="rounded-md border border-card-border bg-muted/40 p-4" data-testid="creation-general">
          <p className="font-display text-xs font-semibold uppercase tracking-wide">The General Method — {general.label}</p>
          <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{general.text}</p>
        </div>

        <div id="creation-families">
          <p className="font-display text-sm font-semibold">By Family</p>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {families.map((line) => (
              <div key={line.label} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`creation-family-${line.label}`}>
                <p className="font-display text-xs font-semibold uppercase tracking-wide">{line.label}</p>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{line.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="creation-alchemy">
          <p className="font-display text-sm font-semibold">Alchemy — the Non-Magical Craft</p>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="creation-alchemy-not-magic">
              <p className="font-display text-xs font-semibold uppercase tracking-wide">Not magic</p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                Alchemical items are brewed and built, not enchanted — no item-creation feat is needed. The Craft (alchemy) skill does the work, and the finished items sit in Equipment, under Alchemical Gear.
              </p>
            </div>
            <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="creation-alchemy-making">
              <p className="font-display text-xs font-semibold uppercase tracking-wide">Making alchemical items</p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                Pay 1/3 of the item's price in raw materials, then make Craft (alchemy) checks against the item's Craft DC: a week's progress is the check result × the DC, measured against the price in silver pieces (a day's work counts a tenth of that). Fail by 5 or more and half the raw materials are ruined. An alchemist's lab gives a +2 circumstance bonus on the checks.
              </p>
            </div>
            {alchemyDifference && (
              <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="creation-alchemy-difference">
                <p className="font-display text-xs font-semibold uppercase tracking-wide">Alchemical potions — the difference</p>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{alchemyDifference.text}</p>
              </div>
            )}
            {alchemyCures && (
              <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="creation-alchemy-cures">
                <p className="font-display text-xs font-semibold uppercase tracking-wide">{alchemyCures.label}</p>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{alchemyCures.text}</p>
              </div>
            )}
          </div>
        </div>

        <div id="creation-feats">
          <p className="font-display text-sm font-semibold">
            Item Creation Feats <span className="text-xs font-normal text-muted-foreground">({feats.length})</span>
          </p>
          <div className="mt-2 grid items-start gap-3 sm:grid-cols-2">
            {feats.map((feat) => {
              const detail = describeFeat(feat);
              return (
                <div key={feat.id} className="rounded-md border border-card-border bg-card p-3" data-testid={`creation-feat-${feat.id}`}>
                  <p className="font-display text-sm font-semibold">{detail.title}</p>
                  <p className="mt-1 text-sm leading-snug">{detail.summary}</p>
                  {detail.sections.map((section) => (
                    <div key={section.heading} className="mt-2">
                      <p className="font-display text-xs font-semibold uppercase tracking-wide text-muted-foreground">{section.heading}</p>
                      <p className="mt-0.5 whitespace-pre-line text-sm leading-snug text-muted-foreground">{section.body}</p>
                    </div>
                  ))}
                  <p className="mt-2 text-xs text-muted-foreground">{detail.source}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
