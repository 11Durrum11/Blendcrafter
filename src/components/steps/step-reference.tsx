import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  ALL_BODY_MODIFICATIONS,
  ALL_CLASSES,
  ALL_DANDWIKI_REFERENCE_INDEX,
  ALL_EQUIPMENT,
  ALL_FEATS,
  ALL_FLAWS,
  ALL_HOUSE_RULES_INDEX,
  ALL_MAGIC_ITEMS,
  ALL_PRESTIGE_CLASSES,
  ALL_RACES,
  ALL_RANDOM_TABLES,
  ALL_SKILLS,
  ALL_SPELLS,
  ALL_SUMMONING_SPELL_LIST,
  ALL_TEMPLATES,
  ALL_TRAITS,
} from "@/data";
import type { Ruleset } from "@/engine/types";
import {
  describeEquipment,
  describeFeat,
  describeFlawTrait,
  describeClass,
  describeMagicItem,
  describePrestigeClass,
  describeRace,
  describeSkill,
  describeSpell,
  type EntityDetail,
} from "@/lib/entity-descriptions";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

/**
 * Player Reference (step 11 — renumbered from 10 when Prestige Classes moved to step 7, 2026-11-03; added 2026-11-03 at Shaun's direction):
 * one lookup for the whole library, so a player who wants to check
 * anything — a feat, a spell, an item, a house rule — finds it right
 * here in the app instead of hunting through the builder steps or
 * Shaun's Dropbox. Read-only: it changes nothing on the character.
 * It deliberately ignores the rule-set toggles and the per-entity
 * off lists: a reference shows ALL the information in the library;
 * the badges still say which rule set each entry belongs to.
 */

interface RefRow {
  key: string;
  category: string;
  name: string;
  source: string;
  ruleset?: Ruleset;
  /** Rendered grayed out and struck through (Shaun, 2026-11-03: the
   * summoning & travel list stays in the reference but grayed —
   * summoning doesn't work in APOC, so it is shown as unavailable;
   * the entry still opens, and its detail says it does not work). */
  disabled?: boolean;
  makeDetail: () => EntityDetail;
}

interface RefCategory {
  key: string;
  label: string;
  disabled?: boolean;
  rows: RefRow[];
}

function rsBadge(ruleset: Ruleset | undefined, extra: string[] = []): string[] {
  return [...extra, ...(ruleset && ruleset !== "core" ? [RULESET_LABELS[ruleset]] : [])];
}

/**
 * Transdimensional spells (Shaun, 2026-11-03: "Gray out all
 * transdimensional spells"). Planar travel is severed in APOC, so
 * these are shown grayed in the reference like the summoning list.
 * The set: every spell of the Calling subschool (creatures called
 * across planes), plus the named extra-dimensional / cross-planar
 * spells below — Banishment and Dismissal (Shaun's canon names
 * Banishment as failing), the extra-dimensional spaces (Familiar
 * Pocket, Force Chest, Hungry Gizzard, Pavilion of Grandeur),
 * cross-planar contact (Contact Other Plane, Interplanar Message,
 * Interplanar Telepathic Bond), Reality Maelstrom, Black Blade of
 * Disaster (a planar rift), Contingent Spell Lock (Ethereal-keyed),
 * and Ethereal Breath (reaches across the Ethereal boundary).
 * Deliberately NOT grayed: the anti-dimensional wards — Dimensional
 * Anchor, Dimensional Lock, Anticipate Teleportation (both),
 * Forbiddance, and the planar-protection spells — those enforce the
 * severance and still work. The classic teleport spells (Teleport,
 * Dimension Door, Plane Shift, Gate, Blink…) are not in the set
 * because they are no longer in the catalog at all: they were
 * deleted in the 2026-11-02 spell removals.
 */
const TRANSDIMENSIONAL_EXTRA_IDS = new Set([
  "banishment", "dismissal", "familiar-pocket", "force-chest",
  "hungry-gizzard", "pavilion-of-grandeur", "reality-maelstrom",
  "black-blade-of-disaster", "contact-other-plane", "interplanar-message",
  "interplanar-telepathic-bond", "contingent-spell-lock", "ethereal-breath",
]);

function isTransdimensionalSpell(s: { id: string; subschool?: string }): boolean {
  return s.subschool === "Calling" || TRANSDIMENSIONAL_EXTRA_IDS.has(s.id);
}

const CATEGORIES: RefCategory[] = [
  {
    key: "races", label: "Races",
    rows: ALL_RACES.map((r) => ({ key: `races:${r.id}`, category: "Race", name: r.name, source: r.source, ruleset: r.ruleset, makeDetail: () => describeRace(r) })),
  },
  {
    key: "classes", label: "Base Classes",
    rows: ALL_CLASSES.map((c) => ({ key: `classes:${c.id}`, category: "Base Class", name: c.name, source: c.source, ruleset: c.ruleset, makeDetail: () => describeClass(c) })),
  },
  {
    key: "prestige", label: "Prestige Classes",
    rows: ALL_PRESTIGE_CLASSES.map((c) => ({ key: `prestige:${c.id}`, category: "Prestige Class", name: c.name, source: c.source, ruleset: c.ruleset, makeDetail: () => describePrestigeClass(c) })),
  },
  {
    key: "templates", label: "Templates",
    rows: ALL_TEMPLATES.map((t) => ({
      key: `templates:${t.id}`, category: "Template", name: t.name, source: t.source, ruleset: t.ruleset,
      makeDetail: (): EntityDetail => ({
        title: t.name,
        badges: rsBadge(t.ruleset, ["Template", t.timing === "inherited" ? "Inherited" : "Acquired"]),
        summary: t.summary,
        sections: [
          { heading: "Adjustments", body: `Challenge Rating ${t.crModifier >= 0 ? "+" : ""}${t.crModifier} · Level Adjustment ${t.levelAdjustment >= 0 ? "+" : ""}${t.levelAdjustment}` },
          ...(t.prerequisites && t.prerequisites.length > 0
            ? [{ heading: "Prerequisites", body: t.prerequisites.map((p) => p.note).join("\n") }]
            : []),
        ],
        source: t.source,
        sourceUrl: t.sourceUrl,
      }),
    })),
  },
  {
    key: "skills", label: "Skills",
    rows: ALL_SKILLS.map((s) => ({ key: `skills:${s.id}`, category: "Skill", name: s.name, source: s.source, ruleset: s.ruleset, makeDetail: () => describeSkill(s) })),
  },
  {
    key: "feats", label: "Feats",
    rows: ALL_FEATS.map((f) => ({ key: `feats:${f.id}`, category: "Feat", name: f.name, source: f.source, ruleset: f.ruleset, makeDetail: () => describeFeat(f) })),
  },
  {
    key: "spells", label: "Spells",
    rows: ALL_SPELLS.map((s) => {
      const td = isTransdimensionalSpell(s);
      return {
        key: `spells:${s.id}`, category: "Spell", name: s.name, source: s.source, ruleset: s.ruleset,
        ...(td ? { disabled: true } : {}),
        makeDetail: (): EntityDetail => {
          const d = describeSpell(s);
          return td ? { ...d, badges: ["Transdimensional — does not work in APOC", ...d.badges] } : d;
        },
      };
    }),
  },
  {
    key: "equipment", label: "Equipment",
    rows: ALL_EQUIPMENT.map((i) => ({ key: `equipment:${i.id}`, category: "Equipment", name: i.name, source: i.source, ruleset: i.ruleset, makeDetail: () => describeEquipment(i) })),
  },
  {
    key: "magic", label: "Magic Items",
    rows: ALL_MAGIC_ITEMS.map((i) => ({ key: `magic:${i.id}`, category: "Magic Item", name: i.name, source: i.source, ruleset: i.ruleset, makeDetail: () => describeMagicItem(i) })),
  },
  {
    key: "flaws", label: "Flaws",
    rows: ALL_FLAWS.map((f) => ({ key: `flaws:${f.id}`, category: "Flaw", name: f.name, source: f.source, ruleset: f.ruleset as Ruleset, makeDetail: () => describeFlawTrait(f) })),
  },
  {
    key: "traits", label: "Traits",
    rows: ALL_TRAITS.map((t) => ({ key: `traits:${t.id}`, category: "Trait", name: t.name, source: t.source, ruleset: t.ruleset as Ruleset, makeDetail: () => describeFlawTrait(t) })),
  },
  {
    key: "bodymods", label: "Body Modifications",
    rows: ALL_BODY_MODIFICATIONS.map((b) => ({
      key: `bodymods:${b.id}`, category: "Body Modification", name: b.name, source: b.source, ruleset: b.ruleset,
      makeDetail: (): EntityDetail => ({
        title: b.name,
        badges: rsBadge(b.ruleset, [b.kind, b.family]),
        summary: b.summary,
        sections: [
          ...(b.cost ? [{ heading: "Price", body: b.cost }] : []),
          ...(b.installation ? [{ heading: "Installation", body: b.installation }] : []),
        ],
        source: b.source,
        sourceUrl: b.sourceUrl,
      }),
    })),
  },
  {
    key: "tables", label: "Random Tables",
    rows: ALL_RANDOM_TABLES.map((t) => ({
      key: `tables:${t.id}`, category: "Random Table", name: t.name, source: t.source, ruleset: t.ruleset,
      makeDetail: (): EntityDetail => ({
        title: t.name,
        badges: rsBadge(t.ruleset, ["Random Table", `Roll ${t.die}`]),
        sections: [{ heading: `Table (${t.die})`, body: t.entries.map((e) => `${e.roll} — ${e.title}: ${e.effect}`).join("\n") }],
        source: t.source,
        sourceUrl: t.sourceUrl,
      }),
    })),
  },
  {
    key: "summoning", label: "Summoning & Travel Spells (APOC)", disabled: true,
    rows: ALL_SUMMONING_SPELL_LIST.map((s) => ({
      key: `summoning:${s.id}`, category: "Summoning / Travel", name: s.name, source: s.source, ruleset: s.ruleset, disabled: true,
      makeDetail: (): EntityDetail => ({
        title: s.name,
        badges: rsBadge(s.ruleset, [s.allowed ? "Allowed in APOC" : "Does not work in APOC", ...(s.badJuJu ? ["Bad Ju-Ju"] : [])]),
        summary: s.allowed
          ? "This spell may be cast under the APOC summoning/travel rework."
          : "This spell does not work in APOC Survival under the summoning/travel rework.",
        sections: [{ heading: "As listed in the table", body: `Book: ${s.book}\nType: ${s.bookType}` }],
        source: s.source,
        sourceUrl: s.sourceUrl,
      }),
    })),
  },
  {
    key: "houserules", label: "House Rules Index",
    rows: ALL_HOUSE_RULES_INDEX.map((h) => ({
      key: `houserules:${h.id}`, category: "House Rule", name: h.name, source: h.source, ruleset: h.ruleset,
      makeDetail: (): EntityDetail => ({
        title: h.name,
        badges: rsBadge(h.ruleset, ["House Rule", h.section]),
        summary: h.summary,
        sections: [],
        source: h.source,
        sourceUrl: h.sourceUrl,
      }),
    })),
  },
  {
    key: "dandwiki", label: "DandWiki Reference Index",
    rows: ALL_DANDWIKI_REFERENCE_INDEX.map((d) => ({
      key: `dandwiki:${d.id}`, category: "Reference", name: d.name, source: d.source, ruleset: d.ruleset,
      makeDetail: (): EntityDetail => ({
        title: d.name,
        badges: rsBadge(d.ruleset, ["Reference", d.list]),
        summary: d.summary,
        sections: [],
        source: d.source,
        sourceUrl: d.sourceUrl,
      }),
    })),
  },
];

const TOTAL_ROWS = CATEGORIES.reduce((n, c) => n + c.rows.length, 0);
const RENDER_CAP = 200;

export function StepReference() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [detail, setDetail] = useState<EntityDetail | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pools = category === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.key === category);
    const out: RefRow[] = [];
    for (const pool of pools) {
      const rows = q
        ? pool.rows.filter((r) => r.name.toLowerCase().includes(q) || r.source.toLowerCase().includes(q))
        : [...pool.rows].sort((a, b) => a.name.localeCompare(b.name));
      out.push(...rows);
    }
    return out;
  }, [query, category]);

  const shown = results.slice(0, RENDER_CAP);
  const browsing = query.trim() === "" && category !== "all";

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Player Reference</CardTitle>
          <CardDescription className="text-lg">
            Every entry in the library — {TOTAL_ROWS.toLocaleString()} records — in one lookup. Search by name or by
            book, or pick a category and browse. Nothing here changes your character; it is purely for looking
            things up, so nobody has to go dig through the Dropbox.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Look up anything — a feat, a spell, an item, a race…"
              className="h-12 pl-9 text-lg"
              data-testid="input-reference-search"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Button size="sm" className="text-base" variant={category === "all" ? "default" : "outline"} onClick={() => setCategory("all")}>
              All ({TOTAL_ROWS.toLocaleString()})
            </Button>
            {CATEGORIES.map((c) => (
              <Button
                key={c.key}
                size="sm"
                variant={category === c.key ? "default" : "outline"}
                className={c.disabled ? "text-base text-muted-foreground line-through opacity-60" : "text-base"}
                onClick={() => setCategory(c.key)}
              >
                {c.label} ({c.rows.length.toLocaleString()})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {query.trim() === "" && category === "all" ? (
        <p className="px-1 text-lg text-muted-foreground">
          Type above to search the whole library at once, or pick a category to browse it. Tap any entry to read
          its full details and where it comes from.
        </p>
      ) : (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">
              {results.length.toLocaleString()} {results.length === 1 ? "match" : "matches"}
              {browsing ? ` in ${CATEGORIES.find((c) => c.key === category)?.label}` : ""}
            </CardTitle>
            {results.length > RENDER_CAP && (
              <CardDescription className="text-lg">
                Showing the first {RENDER_CAP}. Add more words to the search to narrow it down.
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {shown.length === 0 ? (
              <p className="text-lg text-muted-foreground">Nothing in the library matches that. Try a different spelling or a shorter search.</p>
            ) : (
              <ul className="divide-y">
                {shown.map((row) => (
                  <li key={row.key}>
                    <button
                      type="button"
                      className={
                        row.disabled
                          ? "flex w-full items-center justify-between gap-3 py-2 text-left text-muted-foreground line-through opacity-60 hover:bg-muted/50"
                          : "flex w-full items-center justify-between gap-3 py-2 text-left hover:bg-muted/50"
                      }
                      onClick={() => setDetail(row.makeDetail())}
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-lg font-medium">{row.name}</span>
                        <span className="block truncate text-base text-muted-foreground">{row.source}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-1.5">
                        <Badge variant="secondary" className="text-sm">{row.category}</Badge>
                        {row.ruleset && row.ruleset !== "core" && (
                          <ProductIdentityBadge rulesetLabel={RULESET_LABELS[row.ruleset]} />
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}

      <EntityDetailDialog detail={detail} onOpenChange={(open) => { if (!open) setDetail(null); }} />
    </div>
  );
}
