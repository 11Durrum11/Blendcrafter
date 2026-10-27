import { useState } from "react";
import { Info, Plus, Search, Shield, Trash2 } from "lucide-react";
import { ALL_EQUIPMENT, ALL_MAGIC_ITEMS } from "@/data";
import type { InventoryEntry, ResolvedCharacter, Ruleset } from "@/engine/types";
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
  onAdd: (kind: InventoryEntry["kind"], itemId: string) => void;
  onRemove: (id: string) => void;
  onToggleEquipped: (id: string, equipped: boolean) => void;
}

export function StepEquipment({ inventory, enabledRulesets, resolved, onAdd, onRemove, onToggleEquipped }: StepEquipmentProps) {
  const [equipQuery, setEquipQuery] = useState("");
  const [equipCategory, setEquipCategory] = useState<string>("all");
  const [itemQuery, setItemQuery] = useState("");
  const [detail, setDetail] = useState<EntityDetail | null>(null);

  function showInventoryDetail(entry: InventoryEntry) {
    if (entry.kind === "equipment") {
      const item = ALL_EQUIPMENT.find((e) => e.id === entry.itemId);
      if (item) setDetail(describeEquipment(item));
    } else {
      const item = ALL_MAGIC_ITEMS.find((m) => m.id === entry.itemId);
      if (item) setDetail(describeMagicItem(item));
    }
  }

  const equipmentCategories = Array.from(new Set(ALL_EQUIPMENT.map((e) => e.category)));
  const visibleEquipment = ALL_EQUIPMENT.filter(
    (e) =>
      enabledRulesets.includes(e.ruleset) &&
      e.name.toLowerCase().includes(equipQuery.toLowerCase()) &&
      (equipCategory === "all" || e.category === equipCategory)
  );
  const visibleMagicItems = ALL_MAGIC_ITEMS.filter(
    (m) => enabledRulesets.includes(m.ruleset) && m.name.toLowerCase().includes(itemQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
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
            <select
              value={equipCategory}
              onChange={(e) => setEquipCategory(e.target.value)}
              className="h-8 rounded-md border border-input bg-background px-2 text-sm"
              data-testid="select-equipment-category"
            >
              <option value="all">All categories</option>
              {equipmentCategories.map((c) => (
                <option key={c} value={c}>
                  {c[0].toUpperCase() + c.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3 max-h-80 overflow-y-auto divide-y divide-card-border rounded-md border border-card-border bg-card">
            {visibleEquipment.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">No equipment matches your search or the enabled rule sets.</p>
            ) : (
              visibleEquipment.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center justify-between gap-2 p-3" data-testid={`equipment-row-${item.id}`}>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium">{item.name}</span>
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
                    <p className="text-xs text-muted-foreground">{item.cost} · {item.weight} · {item.notes}</p>
                  </div>
                  <Button type="button" size="sm" variant="outline" onClick={() => onAdd("equipment", item.id)} data-testid={`button-add-equipment-${item.id}`}>
                    <Plus className="mr-1 h-3.5 w-3.5" /> Add
                  </Button>
                </div>
              ))
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
          <div className="mt-3 max-h-80 overflow-y-auto divide-y divide-card-border rounded-md border border-card-border bg-card">
            {visibleMagicItems.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">No magic items match your search or the enabled rule sets.</p>
            ) : (
              visibleMagicItems.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center justify-between gap-2 p-3" data-testid={`magic-item-row-${item.id}`}>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium">{item.name}</span>
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
                    <p className="text-xs text-muted-foreground">{item.cost} · {item.summary}</p>
                  </div>
                  <Button type="button" size="sm" variant="outline" onClick={() => onAdd("magic-item", item.id)} data-testid={`button-add-magic-item-${item.id}`}>
                    <Plus className="mr-1 h-3.5 w-3.5" /> Add
                  </Button>
                </div>
              ))
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
                    <p className="text-xs text-muted-foreground">{ri.summary}</p>
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
