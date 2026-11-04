import { useState } from "react";
import { Coins, Info, Plus, Search, Shield, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ALL_EQUIPMENT, ALL_MAGIC_ITEMS } from "@/data";
import type { EquipmentItem, InventoryEntry, ResolvedCharacter, Ruleset } from "@/engine/types";
import { weaponSubcategory, WEAPON_SUBCATEGORIES } from "@/lib/weapon-subcategories";
import { formatGp, initialWealthSplit, WEALTH_BY_LEVEL, wealthByLevel } from "@/engine/wealth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ProductIdentityBadge } from "@/components/product-identity-badge";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { describeEquipment, describeMagicItem, type EntityDetail } from "@/lib/entity-descriptions";

interface StepEquipmentProps {
  inventory: InventoryEntry[];
  enabledRulesets: Ruleset[];
  resolved: ResolvedCharacter;
  /** The chart level picked as this build's total gp limit. */
  wealthLimitLevel: number | null;
  onAdd: (kind: InventoryEntry["kind"], itemId: string) => void;
  onRemove: (id: string) => void;
  onToggleEquipped: (id: string, equipped: boolean) => void;
  onSetWealthLimitLevel: (level: number | null) => void;
}

/**
 * Category structure for the equipment lists (Shaun, 2026-11-02:
 * "Categorize the equipment and put the category headings at the
 * top"). Sections render in this order with a heading at the top of
 * each; categories outside the list append alphabetically.
 */
const EQUIPMENT_CATEGORY_ORDER: { key: string; label: string }[] = [
  { key: "weapon", label: "Weapons" },
  { key: "armor", label: "Armor" },
  { key: "shield", label: "Shields" },
  { key: "ammunition", label: "Ammunition" },
  { key: "alchemical gear", label: "Alchemical Gear" },
  { key: "tool", label: "Tools" },
  { key: "gear", label: "Adventuring Gear" },
  { key: "food and drink", label: "Food & Drink" },
];

const MAGIC_CATEGORY_ORDER: { key: string; label: string }[] = [
  { key: "wondrous-head", label: "Wondrous — Head" },
  { key: "wondrous-face", label: "Wondrous — Face" },
  { key: "wondrous-throat", label: "Wondrous — Throat" },
  { key: "wondrous-shoulders", label: "Wondrous — Shoulders" },
  { key: "wondrous-body", label: "Wondrous — Body" },
  { key: "wondrous-torso", label: "Wondrous — Torso" },
  { key: "wondrous-arms", label: "Wondrous — Arms" },
  { key: "wondrous-hands", label: "Wondrous — Hands" },
  { key: "wondrous-waist", label: "Wondrous — Waist" },
  { key: "wondrous-feet", label: "Wondrous — Feet" },
  { key: "wondrous-slotless", label: "Wondrous — Slotless" },
  { key: "wondrous", label: "Wondrous Items — Other" },
  { key: "ring", label: "Rings" },
  { key: "rod", label: "Rods" },
  { key: "staff", label: "Staffs" },
  { key: "wand", label: "Wands" },
  { key: "scroll", label: "Scrolls" },
  { key: "potion", label: "Potions" },
  { key: "weapon", label: "Magic Weapons" },
  { key: "armor", label: "Magic Armor" },
  { key: "shield", label: "Magic Shields" },
  { key: "armor-special-ability", label: "Armor Special Abilities" },
  { key: "weapon-special-ability", label: "Weapon Special Abilities" },
  { key: "shield-special-ability", label: "Shield Special Abilities" },
  { key: "augment-crystal", label: "Augment Crystals" },
  { key: "ammunition", label: "Magic Ammunition" },
  { key: "artifact", label: "Artifacts" },
];

interface CategorySection<T> {
  key: string;
  label: string;
  items: T[];
}

function groupByCategory<T extends { category: string }>(
  items: T[],
  order: { key: string; label: string }[],
  normalize?: (category: string) => string
): CategorySection<T>[] {
  const byKey = new Map<string, T[]>();
  for (const item of items) {
    const key = normalize ? normalize(item.category) : item.category;
    const list = byKey.get(key) ?? [];
    list.push(item);
    byKey.set(key, list);
  }
  const sections: CategorySection<T>[] = [];
  for (const { key, label } of order) {
    const list = byKey.get(key);
    if (list && list.length > 0) {
      sections.push({ key, label, items: list });
      byKey.delete(key);
    }
  }
  for (const key of [...byKey.keys()].sort()) {
    sections.push({ key, label: key[0].toUpperCase() + key.slice(1), items: byKey.get(key)! });
  }
  return sections;
}

export function StepEquipment({ inventory, enabledRulesets, resolved, wealthLimitLevel, onAdd, onRemove, onToggleEquipped, onSetWealthLimitLevel }: StepEquipmentProps) {
  const [equipQuery, setEquipQuery] = useState("");
  const [itemQuery, setItemQuery] = useState("");
  const [detail, setDetail] = useState<EntityDetail | null>(null);
  // Wealth-by-level minimized to its title (Shaun, 2026-11-02):
  // the panel shows just its title until clicked, then the chart
  // and the 70/30 calculation expand.
  const [wblOpen, setWblOpen] = useState(false);
  // Equipment and Magic Items minimized to their titles (Shaun,
  // 2026-11-02): every category section starts closed to just its
  // heading; clicking the heading expands its items. While a
  // search is typed, sections show open so matches are visible.
  // The heading buttons above each list now also open the section
  // they jump to.
  const [openEquipSections, setOpenEquipSections] = useState<Set<string>>(new Set());
  const [openMagicSections, setOpenMagicSections] = useState<Set<string>>(new Set());
  // Weapons split into Melee / Ranged / Firearms behind subcategory
  // buttons (Shaun, 2026-11-03); each button opens its own list.
  const [openWeaponSubs, setOpenWeaponSubs] = useState<Set<string>>(new Set());
  const toggleSet = (fn: React.Dispatch<React.SetStateAction<Set<string>>>, key: string) =>
    fn((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  // One equipment row, shared by the plain category lists and the
  // Weapons subcategory lists.
  // Item rows are name + price only: the wording that used to sit
  // under each name (weight / notes here, the summary on magic
  // items and inventory rows) is minimized away at Shaun's order
  // (2026-11-04) — the full text still lives behind the row's
  // info button. The lists themselves doubled from one column
  // to two (same order).
  const renderEquipmentRow = (item: EquipmentItem) => (
    <div key={item.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-card-border p-3" data-testid={`equipment-row-${item.id}`}>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-medium">{item.name}</span>
          {/* Price right beside the item's name (Shaun, 2026-11-02). */}
          <span className="ml-1.5 font-mono text-sm font-semibold" data-testid={`price-equipment-${item.id}`}>{item.cost}</span>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDetail(describeEquipment(item)); }}
            data-testid={`button-info-equipment-${item.id}`}
            aria-label={`View description of ${item.name}`}
          >
            <Info className="h-3.5 w-3.5" />
          </button>
          <Badge variant="outline" className="text-[10px] capitalize">{item.category}</Badge>
          {typeof item.acBonus === "number" && <Badge variant="secondary" className="text-[10px]">AC +{item.acBonus}</Badge>}
          {item.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[item.ruleset]} />}
        </div>
      </div>
      <Button type="button" size="sm" variant="outline" onClick={() => onAdd("equipment", item.id)} data-testid={`button-add-equipment-${item.id}`}>
        <Plus className="mr-1 h-3.5 w-3.5" /> Add
      </Button>
    </div>
  );
  // Click-a-level gp limit (Shaun, 2026-11-02): clicking a level
  // in the wealth-by-level chart sets the total gp limit, shown
  // beside Magic items in the summary below (0 gp until a level
  // is clicked). The pick is saved on the build itself
  // (build.wealthLimitLevel), so it survives step switches,
  // saves, and build links. Clicking the picked level again
  // clears it.
  const limitGp = wealthLimitLevel !== null ? (WEALTH_BY_LEVEL[wealthLimitLevel] ?? 0) : 0;

  function showInventoryDetail(entry: InventoryEntry) {
    if (entry.kind === "equipment") {
      const item = ALL_EQUIPMENT.find((e) => e.id === entry.itemId);
      if (item) setDetail(describeEquipment(item));
    } else {
      const item = ALL_MAGIC_ITEMS.find((m) => m.id === entry.itemId);
      if (item) setDetail(describeMagicItem(item));
    }
  }

  const visibleEquipment = ALL_EQUIPMENT.filter(
    (e) => enabledRulesets.includes(e.ruleset) && e.name.toLowerCase().includes(equipQuery.toLowerCase())
  );
  const visibleMagicItems = ALL_MAGIC_ITEMS.filter(
    (m) => enabledRulesets.includes(m.ruleset) && m.name.toLowerCase().includes(itemQuery.toLowerCase())
  );
  const equipmentSections = groupByCategory(visibleEquipment, EQUIPMENT_CATEGORY_ORDER);
  // "wondrous-item" is a one-record spelling variant of "wondrous" in
  // the data; the two display as one Wondrous Items section.
  const magicSections = groupByCategory(visibleMagicItems, MAGIC_CATEGORY_ORDER, (c) =>
    c === "wondrous-item" ? "wondrous" : c
  );


  const wealth = resolved.wealth;
  const wbl = wealthByLevel(resolved.ecl.value);
  const wblDelta = wbl !== null ? wealth.totalGp - wbl : 0;
  // 70/30 rule (Shaun, 2026-11-02): the DMG wealth-by-level amount is
  // the character's initial wealth — at least 70% spent on gear, at
  // most 30% left liquid. Level 1 keeps the starting-gold note instead.
  const split = wbl !== null ? initialWealthSplit(wbl, wealth.totalGp) : null;
  const formatPct = (v: number) => `${Math.round(v * 10) / 10}%`;
  // Wealth-by-level chart entries for the header panel (Shaun,
  // 2026-11-02: chart next to the Wealth header, calculated).
  const wblEntries = Object.entries(WEALTH_BY_LEVEL)
    .map(([lvl, gp]) => ({ level: Number(lvl), gp }))
    .sort((a, b) => a.level - b.level);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div>
            <CardTitle className="font-display text-xl flex items-center gap-2">
              <Coins className="h-5 w-5 text-primary" /> Wealth
            </CardTitle>
            {/* Currency types beside the Wealth header (Shaun,
                2026-11-02), taken from his "MISC OTHER HOUSE RULES"
                document: coin, gems, scripts, and cheqs. Coin uses
                book-standard conversions — 10 cp = 1 sp, 10 sp = 1 gp,
                1 pp = 10 gp, 50 coins to the pound; no electrum. */}
            {/* The four currency types used to share two lines
                (Shaun, 2026-11-02: Coin + Gems, then Scripts +
                Cheqs). On 2026-11-04 Shaun split them onto four
                lines of their own — "I want gems and its wording
                in the second line, I want checks and its wording
                on the fourth line" — so: Coin first, Gems second,
                Scripts third, Cheqs fourth, wording unchanged.
                The block sits in its own full-width row under the
                Wealth title (Shaun, 2026-11-03) with wrapping off
                on large screens so each line stays on one line;
                small screens still wrap normally. */}
            <div
              className="mt-0.5 w-full space-y-1 text-xs leading-relaxed text-muted-foreground xl:text-[11px]"
              data-testid="wealth-currency-types"
            >
              <p className="xl:whitespace-nowrap">
                <span className="font-medium text-foreground">Coin:</span> copper (cp), silver (sp), gold (gp),
                platinum (pp) — 10 cp = 1 sp · 10 sp = 1 gp · 1 pp = 10 gp · 50 coins = 1 lb.
              </p>
              <p className="xl:whitespace-nowrap">
                <span className="font-medium text-foreground">Gems:</span> 10 to a pound; compound pricing; price
                is very appraise-dependent.
              </p>
              <p className="xl:whitespace-nowrap">
                <span className="font-medium text-foreground">Scripts:</span> paper money, 1 gp each; 500 to a
                pound; very society-dependent.
              </p>
              <p className="xl:whitespace-nowrap">
                <span className="font-medium text-foreground">Cheqs:</span> any amount; very lightweight; very
                society-dependent.
              </p>
            </div>
          </div>
          {/* Inventory-value summary ABOVE the Wealth by Level panel
              (Shaun, 2026-11-03): the description, the priced count,
              and the level-1 starting-gold note used to sit below the
              panel (the description at the end of this header, the
              counts in the card content); he read them off and said
              "Put this above the wealth by level." */}
          <CardDescription className="mt-2">
            The gold-piece value of everything in your inventory, kept current as you add and remove items below.
          </CardDescription>
          <p className="mt-1 text-sm text-muted-foreground">
            {wealth.pricedCount} item{wealth.pricedCount === 1 ? "" : "s"} priced.
            {wealth.unpricedCount > 0 && (
              <> {wealth.unpricedCount} item{wealth.unpricedCount === 1 ? "" : "s"} {wealth.unpricedCount === 1 ? "has" : "have"} no gold price listed (such as a "+bonus" special ability) and {wealth.unpricedCount === 1 ? "isn't" : "aren't"} counted.</>
            )}
            {wbl !== null ? (
              <> Wealth by level for ECL {resolved.ecl.value}: <span className="font-mono text-foreground">{formatGp(wbl)} gp</span> guideline — you're {formatGp(Math.abs(wblDelta))} gp {wblDelta >= 0 ? "over" : "under"} it.</>
            ) : (
              resolved.ecl.value < 2 && <> Level 1 characters use their class's starting gold instead of the wealth-by-level guideline.</>
            )}
          </p>
          {/* Wealth-by-level chart + calculation beside the Wealth
              header (Shaun, 2026-11-02): the full DMG Table 5–1 chart
              with the build's ECL highlighted, and the 70/30 rule
              calculated from it — at least 70% of the chart amount
              must be spent on gear, at most 30% may stay liquid. */}
          <div className="mt-3 rounded-md border border-card-border bg-card p-3" data-testid="wealth-by-level-panel">
            <button
              type="button"
              className="flex w-full flex-wrap items-baseline justify-between gap-2 text-left"
              onClick={() => setWblOpen((o) => !o)}
              aria-expanded={wblOpen}
              data-testid="wealth-by-level-toggle"
            >
              <p className="flex items-center gap-1.5 font-display text-sm font-semibold">
                {wblOpen ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
                Wealth by Level — DMG Table 5–1
              </p>
              <p className="text-xs text-muted-foreground">
                Your ECL is {resolved.ecl.value}
                {wblOpen ? " — highlighted below" : ""}
              </p>
            </button>
            {wblOpen && (
              <>
            {/* List format (Shaun, 2026-11-02): every level with the
                whole number and its 70% and 30% numbers beside it. */}
            <p className="mt-2 text-xs text-muted-foreground">
              Click a level to set it as your total gp limit — the limit shows beside Magic items in the
              summary below.
            </p>
            <div className="mt-2 max-h-64 overflow-y-auto" data-testid="wealth-by-level-chart">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-card-border text-left text-muted-foreground">
                    <th className="py-1 pr-2 font-medium">Level</th>
                    <th className="py-1 pr-2 font-medium">Wealth (gp)</th>
                    <th className="py-1 pr-2 font-medium">Spend 70%</th>
                    <th className="py-1 font-medium">Liquid 30%</th>
                  </tr>
                </thead>
                <tbody>
                  {wblEntries.map(({ level, gp }) => (
                    <tr
                      key={level}
                      data-testid={level === resolved.ecl.value ? "wealth-by-level-current" : undefined}
                      onClick={() => onSetWealthLimitLevel(wealthLimitLevel === level ? null : level)}
                      className={
                        "cursor-pointer hover:bg-muted/40 " +
                        (wealthLimitLevel === level
                          ? "bg-emerald-500/20 font-semibold text-foreground"
                          : level === resolved.ecl.value
                            ? "bg-primary/15 font-semibold text-foreground"
                            : "text-muted-foreground")
                      }
                    >
                      <td className="py-0.5 pr-2 font-mono">{level}</td>
                      <td className="py-0.5 pr-2 font-mono">{formatGp(gp)}</td>
                      <td className="py-0.5 pr-2 font-mono">{formatGp(gp * 0.7)}</td>
                      <td className="py-0.5 font-mono">{formatGp(gp * 0.3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {split !== null ? (
              <div className="mt-3 border-t border-card-border pt-2" data-testid="wealth-initial-split">
                <p className="text-sm">
                  Initial wealth (DMG, level {resolved.ecl.value}):{" "}
                  <span className="font-mono font-semibold text-foreground" data-testid="text-initial-wealth">
                    {formatGp(split.initial)} gp
                  </span>
                  {" · "}Must spend (70%):{" "}
                  <span className="font-mono font-semibold text-foreground" data-testid="text-spend-target">
                    {formatGp(split.initial * 0.7)} gp
                  </span>
                  {" · "}Liquid max (30%):{" "}
                  <span className="font-mono text-foreground">{formatGp(split.initial * 0.3)} gp</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Spent on gear: <span className="font-mono text-foreground">{formatGp(split.spent)} gp</span> (
                  {formatPct(split.spentPct)}) · Liquid:{" "}
                  <span className="font-mono text-foreground">{formatGp(split.liquid)} gp</span> (
                  {formatPct(split.liquidPct)})
                </p>
                <p className="mt-1 text-sm">
                  {split.initial * 0.7 > wealth.totalGp ? (
                    <>
                      Still to spend to reach 70%:{" "}
                      <span className="font-mono font-semibold text-foreground">
                        {formatGp(split.initial * 0.7 - wealth.totalGp)} gp
                      </span>
                      .{" "}
                    </>
                  ) : (
                    <>You've met the 70% spending requirement. </>
                  )}
                  {split.liquidWithinLimit ? (
                    <span className="font-medium text-emerald-500" data-testid="wealth-rule-ok">
                      At most 30% liquid — good.
                    </span>
                  ) : (
                    <span className="font-medium text-amber-500" data-testid="wealth-rule-warning">
                      Too much liquid: spend at least 70% of initial wealth on gear.
                    </span>
                  )}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  The rule: you need to spend at least 70% of your wealth-by-level amount on gear. What's left
                  unspent is liquid cash, and it can never be more than 30% — if it is, keep buying gear until it
                  isn't.
                </p>
                <p className="mt-1 text-xs text-muted-foreground" data-testid="wealth-buy-note">
                  You can buy whatever you can afford — even if that means upgrading something you already have —
                  whatever it costs. It all counts toward the 70%.
                </p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">
                {resolved.ecl.value < 2
                  ? "Level 1 characters use their class's starting gold instead — the chart and the 70% calculation start at level 2."
                  : "The DMG chart stops at level 20, so there's no chart amount to calculate from past that."}
              </p>
            )}
              </>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <div>
              <span className="font-display text-3xl font-semibold tabular-nums" data-testid="text-wealth-total">
                {formatGp(wealth.totalGp)} gp
              </span>
              <span className="ml-2 text-sm text-muted-foreground">total gear value</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Equipment <span className="font-mono text-foreground">{formatGp(wealth.equipmentGp)} gp</span>
              {" · "}Magic items <span className="font-mono text-foreground">{formatGp(wealth.magicItemGp)} gp</span>
              {" · "}Limit{" "}
              <span className="font-mono text-foreground" data-testid="text-wealth-limit">
                {formatGp(limitGp)} gp
              </span>
              {wealthLimitLevel !== null && <span> (level {wealthLimitLevel})</span>}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" /> Equipment
          </CardTitle>
          <CardDescription>
            Add gear to your inventory. Equipped armor and shields with an AC bonus feed directly into the Character
            Sheet's Armor Class total. Source:{" "}
            <a href="https://www.d20srd.org/srd/equipment/" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Equipment
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative flex-1 min-w-[180px]">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input value={equipQuery} onChange={(e) => setEquipQuery(e.target.value)} placeholder="Search equipment…" className="h-8 pl-8" data-testid="input-equipment-search" />
            </div>
          </div>


          <div className="mt-3 grid grid-cols-2 items-start gap-3 sm:grid-cols-4">
            {visibleEquipment.length === 0 ? (
              <p className="col-span-full p-4 text-sm text-muted-foreground">No equipment matches your search or the enabled rule sets.</p>
            ) : (
              equipmentSections.map((section) => {
                const equipOpen = equipQuery.trim() !== "" || openEquipSections.has(section.key);
                return (
                <div key={section.key} className={cn("rounded-md border border-card-border bg-card", equipOpen && "col-span-full")}>
                  <button
                    type="button"
                    id={`equip-cat-${section.key}`}
                    className="flex w-full items-center gap-1.5 border-b border-card-border bg-card px-3 py-2 text-left font-display text-sm font-semibold"
                    onClick={() => toggleSet(setOpenEquipSections, section.key)}
                    aria-expanded={equipOpen}
                    data-testid={`heading-equip-cat-${section.key}`}
                  >
                    {equipOpen ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
                    {section.label}{" "}
                    <span className="text-xs font-normal text-muted-foreground">({section.items.length})</span>
                  </button>
                  {equipOpen && section.key === "weapon" && (() => {
                    // Weapons open onto subcategory buttons (Shaun,
                    // 2026-11-03): Melee / Ranged / Firearms, each
                    // button opening its own list. While searching,
                    // every subcategory shows so matches are visible.
                    const searching = equipQuery.trim() !== "";
                    return (
                      <div>
                        <div className="flex flex-wrap gap-1.5 px-3 py-2">
                          {WEAPON_SUBCATEGORIES.map((sub) => {
                            const count = section.items.filter((i) => weaponSubcategory(i) === sub.key).length;
                            if (count === 0) return null;
                            const subOpen = searching || openWeaponSubs.has(sub.key);
                            return (
                              <Button
                                key={sub.key}
                                type="button"
                                size="sm"
                                variant={subOpen && !searching ? "default" : "outline"}
                                onClick={() => toggleSet(setOpenWeaponSubs, sub.key)}
                                aria-expanded={subOpen}
                                data-testid={`button-weapon-sub-${sub.key}`}
                              >
                                {sub.label} <span className="ml-1 text-xs opacity-75">({count})</span>
                              </Button>
                            );
                          })}
                        </div>
                        {WEAPON_SUBCATEGORIES.map((sub) => {
                          const subOpen = searching || openWeaponSubs.has(sub.key);
                          if (!subOpen) return null;
                          const subItems = section.items.filter((i) => weaponSubcategory(i) === sub.key);
                          if (subItems.length === 0) return null;
                          return (
                            <div key={sub.key} data-testid={`weapon-sub-list-${sub.key}`}>
                              <p className="border-t border-card-border bg-muted/40 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-muted-foreground">{sub.label}</p>
                              {sub.key === "firearms" && (
                                <p className="border-t border-card-border px-3 py-1.5 text-xs italic text-muted-foreground" data-testid="firearms-simple-note">
                                  Firearms are simple weapons. The skill comes in reloading them, tinkering with them, and trick shots.
                                </p>
                              )}
                              <div className="grid max-h-80 overflow-y-auto sm:grid-cols-2">
                                {subItems.map(renderEquipmentRow)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                  {equipOpen && section.key !== "weapon" && (
                  <div className="grid max-h-80 overflow-y-auto sm:grid-cols-2">
                    {section.items.map(renderEquipmentRow)}
                  </div>
                  )}
                </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Magic Items</CardTitle>
          <CardDescription>
            Source:{" "}
            <a href="https://www.d20srd.org/srd/magicItems/" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
              d20 SRD Magic Items
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input value={itemQuery} onChange={(e) => setItemQuery(e.target.value)} placeholder="Search magic items…" className="h-8 pl-8" data-testid="input-magic-item-search" />
          </div>
          <div className="mt-3 grid grid-cols-2 items-start gap-3 sm:grid-cols-4">
            {visibleMagicItems.length === 0 ? (
              <p className="col-span-full p-4 text-sm text-muted-foreground">No magic items match your search or the enabled rule sets.</p>
            ) : (
              magicSections.map((section) => {
                const magicOpen = itemQuery.trim() !== "" || openMagicSections.has(section.key);
                return (
                <div key={section.key} className={cn("rounded-md border border-card-border bg-card", magicOpen && "col-span-full")}>
                  <button
                    type="button"
                    id={`magic-cat-${section.key}`}
                    className="flex w-full items-center gap-1.5 border-b border-card-border bg-card px-3 py-2 text-left font-display text-sm font-semibold"
                    onClick={() => toggleSet(setOpenMagicSections, section.key)}
                    aria-expanded={magicOpen}
                    data-testid={`heading-magic-cat-${section.key}`}
                  >
                    {magicOpen ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
                    {section.label}{" "}
                    <span className="text-xs font-normal text-muted-foreground">({section.items.length})</span>
                  </button>
                  {magicOpen && (
                  <div className="grid max-h-80 overflow-y-auto sm:grid-cols-2">
                    {section.items.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-card-border p-3" data-testid={`magic-item-row-${item.id}`}>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium">{item.name}</span>
                      {/* Price right beside the item's name (Shaun, 2026-11-02). */}
                      <span className="ml-1.5 font-mono text-sm font-semibold" data-testid={`price-magic-item-${item.id}`}>{item.cost}</span>
                      <button
                        type="button"
                        className="text-muted-foreground hover:text-foreground"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDetail(describeMagicItem(item)); }}
                        data-testid={`button-info-magic-item-${item.id}`}
                        aria-label={`View description of ${item.name}`}
                      >
                        <Info className="h-3.5 w-3.5" />
                      </button>
                      <Badge variant="outline" className="text-[10px] capitalize">{item.category}</Badge>
                      {item.ruleset !== "core" && <ProductIdentityBadge rulesetLabel={RULESET_LABELS[item.ruleset]} />}
                    </div>
                  </div>
                  <Button type="button" size="sm" variant="outline" onClick={() => onAdd("magic-item", item.id)} data-testid={`button-add-magic-item-${item.id}`}>
                    <Plus className="mr-1 h-3.5 w-3.5" /> Add
                  </Button>
                </div>
                    ))}
                  </div>
                  )}
                </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Inventory</CardTitle>
          <CardDescription>Toggle "Equipped" on armor or shields to apply their AC bonus.</CardDescription>
        </CardHeader>
        <CardContent>
          {resolved.inventory.length === 0 ? (
            <p className="text-sm text-muted-foreground">Nothing in inventory yet — add items above.</p>
          ) : (
            <div className="divide-y divide-card-border rounded-md border border-card-border bg-card">
              {resolved.inventory.map((ri) => (
                <div key={ri.entry.id} className="flex flex-wrap items-center justify-between gap-2 p-3" data-testid={`inventory-row-${ri.entry.id}`}>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium">{ri.name}</span>
                      <button
                        type="button"
                        className="text-muted-foreground hover:text-foreground"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); showInventoryDetail(ri.entry); }}
                        data-testid={`button-info-inventory-${ri.entry.id}`}
                        aria-label={`View description of ${ri.name}`}
                      >
                        <Info className="h-3.5 w-3.5" />
                      </button>
                      <Badge variant="outline" className="text-[10px] capitalize">{ri.category}</Badge>
                      <Badge variant="outline" className="text-[10px]">{ri.entry.kind === "equipment" ? "Equipment" : "Magic Item"}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {(ri.category === "armor" || ri.category === "shield") && (
                      <label className="flex items-center gap-1.5 text-xs">
                        <Checkbox
                          checked={ri.entry.equipped}
                          onCheckedChange={(checked) => onToggleEquipped(ri.entry.id, checked === true)}
                          data-testid={`checkbox-equipped-${ri.entry.id}`}
                        />
                        Equipped
                      </label>
                    )}
                    <Button type="button" size="icon" variant="outline" className="h-7 w-7" onClick={() => onRemove(ri.entry.id)} data-testid={`button-remove-inventory-${ri.entry.id}`} aria-label={`Remove ${ri.name}`}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      <EntityDetailDialog detail={detail} onOpenChange={(open) => !open && setDetail(null)} />
    </div>
  );
}
