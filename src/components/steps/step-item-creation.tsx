import { useMemo, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ALL_FEATS } from "@/data";
import type { FeatDefinition } from "@/engine/types";
import { describeFeat } from "@/lib/entity-descriptions";
import { MAGIC_ITEM_CREATION_LINES, POTION_RULE_LINES } from "@/components/steps/step-equipment";

/**
 * Magic Item Creation (Shaun, 2026-11-04): a third top-level
 * section beside Player Reference and Character Creation. The
 * page carries the WHOLE creation mechanics: the general
 * method, the cost per item family, alchemy the non-magical
 * craft, and every item-creation feat in the catalog in full.
 * Read-only; it changes no build state.
 *
 * THE TREATMENT (Shaun, 2026-11-05: "Magical item creation
 * nest everything within its headers"): everything on this
 * page sits inside a header — the four parts are collapsed
 * nests (The General Method, By Family, Alchemy, Item
 * Creation Feats), and inside By Family and Alchemy the
 * individual blocks are clickable sub-nests of their own,
 * minimized until tapped. Nothing sits open: the nest headers
 * are the page, the same shape as Spelljamming. (Its old
 * jump-button panel up top was removed in v20.23, and the open
 * layout went here; the page's own large title was removed
 * 2026-11-07 — the section button names the page.)
 */

function NestBlock({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <details id={id} className="sj-nest rounded-md border border-border [&[open]]:col-span-2 lg:[&[open]]:col-span-1" data-testid={`item-creation-block-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2.5 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-4 w-4 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="grid gap-3 p-3 pt-0">{children}</div>
    </details>
  );
}

function SubNest({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <details id={id} className="sj-nest col-span-full rounded-md border border-border/70 bg-muted/20" data-testid={`item-creation-subnest-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-2.5 py-2 font-display text-xs font-semibold uppercase tracking-wide [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-3.5 w-3.5 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="p-2.5 pt-0">{children}</div>
    </details>
  );
}

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
      {/* No page heading (Shaun, 2026-11-07): the section button
          already names this page, so the large "Magic Item
          Creation" title and its header block are gone entirely —
          the same treatment as Player Reference. With no
          CardHeader above it, CardContent's built-in pt-0 puts
          the nests directly under the card's top line. */}
      {/* The four nests in ONE row (Shaun, 2026-11-07, exact
          order confirmed): The General Method, then By Family,
          then Alchemy — the Non-Magical Craft, then Item
          Creation Feats — four across, each still collapsed,
          expanding in place (items-start: an open nest never
          stretches its row-mates). Narrower screens wrap to
          two, then one column. Inside a quarter-width nest the
          blocks stack in a single column (see NestBlock). */}
      <CardContent className="grid grid-cols-2 items-start gap-3 lg:grid-cols-4">
        <NestBlock id="creation-general" label="The General Method">
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="creation-general-method">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">{general.label}</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{general.text}</p>
          </div>
        </NestBlock>

        <NestBlock id="creation-families" label="By Family">
          {families.map((line) => (
            <SubNest key={line.label} id={`creation-family-${line.label}`} label={line.label}>
              <p className="text-sm leading-snug text-muted-foreground">{line.text}</p>
            </SubNest>
          ))}
        </NestBlock>

        <NestBlock id="creation-alchemy" label="Alchemy — the Non-Magical Craft">
          <SubNest id="creation-alchemy-not-magic" label="Not magic">
            <p className="text-sm leading-snug text-muted-foreground">
              Alchemical items are brewed and built, not enchanted — no item-creation feat is needed. The Craft (alchemy) skill does the work, and the finished items sit in Equipment, under Alchemical Gear.
            </p>
          </SubNest>
          <SubNest id="creation-alchemy-making" label="Making alchemical items">
            <p className="text-sm leading-snug text-muted-foreground">
              Pay 1/3 of the item's price in raw materials, then make Craft (alchemy) checks against the item's Craft DC: a week's progress is the check result × the DC, measured against the price in silver pieces (a day's work counts a tenth of that). Fail by 5 or more and half the raw materials are ruined. An alchemist's lab gives a +2 circumstance bonus on the checks.
            </p>
          </SubNest>
          {alchemyDifference && (
            <SubNest id="creation-alchemy-difference" label="Alchemical potions — the difference">
              <p className="text-sm leading-snug text-muted-foreground">{alchemyDifference.text}</p>
            </SubNest>
          )}
          {alchemyCures && (
            <SubNest id="creation-alchemy-cures" label={alchemyCures.label}>
              <p className="text-sm leading-snug text-muted-foreground">{alchemyCures.text}</p>
            </SubNest>
          )}
        </NestBlock>

        <NestBlock id="creation-feats" label={`Item Creation Feats — ${feats.length}`}>
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
        </NestBlock>
      </CardContent>
    </Card>
  );
}
