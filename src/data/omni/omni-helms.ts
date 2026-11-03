/**
 * Omni sweep wave 2 (2026-11-02): Helms — a 3e Spelljammer fan
 * document covering spelljamming helms. The helms themselves are
 * priced in Table 3 by three variables: maximum ship size, maximum
 * tactical speed (1-9), and whether the helm can reach spelljamming
 * (long-range) speed or is tactical-only, giving 126 priced
 * configurations, each built as its own record below. Table 2 prices
 * helm batteries by power-level capacity (7 records). The document's
 * three other named magic items (charge forcer, life forcer,
 * lifejammer) are built at their printed market prices. The
 * document prints no mundane equipment, so the equipment array is
 * empty. Prices are the printed market prices; summaries are the
 * mechanics in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const HELM_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "helm-spelljamming-tiny-speed-1",
    "name": "Helm, Spelljamming (Tiny, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "2,444 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 1 (150 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-1",
    "name": "Helm, Tactical Only (Tiny, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "1,210 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 1 (150 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-tiny-speed-2",
    "name": "Helm, Spelljamming (Tiny, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "4,889 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 2 (300 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-2",
    "name": "Helm, Tactical Only (Tiny, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "2,420 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 2 (300 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-tiny-speed-3",
    "name": "Helm, Spelljamming (Tiny, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "7,333 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 3 (450 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-3",
    "name": "Helm, Tactical Only (Tiny, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "3,667 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 3 (450 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-tiny-speed-4",
    "name": "Helm, Spelljamming (Tiny, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "9,778 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 4 (600 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-4",
    "name": "Helm, Tactical Only (Tiny, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "4,877 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 4 (600 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-tiny-speed-5",
    "name": "Helm, Spelljamming (Tiny, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "12,222 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 5 (750 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-5",
    "name": "Helm, Tactical Only (Tiny, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "6,087 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 5 (750 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-tiny-speed-6",
    "name": "Helm, Spelljamming (Tiny, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "14,667 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 6 (900 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-6",
    "name": "Helm, Tactical Only (Tiny, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "7,333 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 6 (900 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-tiny-speed-7",
    "name": "Helm, Spelljamming (Tiny, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "19,556 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 7 (1,050 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-7",
    "name": "Helm, Tactical Only (Tiny, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "9,753 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 7 (1,050 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-tiny-speed-8",
    "name": "Helm, Spelljamming (Tiny, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "24,444 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 8 (1,200 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-8",
    "name": "Helm, Tactical Only (Tiny, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "12,173 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 8 (1,200 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-tiny-speed-9",
    "name": "Helm, Spelljamming (Tiny, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "29,333 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 9 (1,350 feet per round); it can also travel at spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-tiny-speed-9",
    "name": "Helm, Tactical Only (Tiny, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "14,667 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Tiny size at a maximum tactical speed of 9 (1,350 feet per round); it cannot reach spelljamming speed. Moving a Tiny ship draws 0.25 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-1",
    "name": "Helm, Spelljamming (Small, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "3,667 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 1 (150 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-1",
    "name": "Helm, Tactical Only (Small, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "1,815 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 1 (150 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-2",
    "name": "Helm, Spelljamming (Small, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "7,333 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 2 (300 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-2",
    "name": "Helm, Tactical Only (Small, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "3,630 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 2 (300 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-3",
    "name": "Helm, Spelljamming (Small, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "11,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 3 (450 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-3",
    "name": "Helm, Tactical Only (Small, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "5,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 3 (450 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-4",
    "name": "Helm, Spelljamming (Small, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "14,667 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 4 (600 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-4",
    "name": "Helm, Tactical Only (Small, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "7,315 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 4 (600 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-5",
    "name": "Helm, Spelljamming (Small, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "18,333 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 5 (750 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-5",
    "name": "Helm, Tactical Only (Small, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "9,130 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 5 (750 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-6",
    "name": "Helm, Spelljamming (Small, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "22,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 6 (900 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-6",
    "name": "Helm, Tactical Only (Small, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "11,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 6 (900 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-7",
    "name": "Helm, Spelljamming (Small, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "29,333 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 7 (1,050 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-7",
    "name": "Helm, Tactical Only (Small, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "14,630 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 7 (1,050 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-8",
    "name": "Helm, Spelljamming (Small, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "36,667 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 8 (1,200 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-8",
    "name": "Helm, Tactical Only (Small, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "18,260 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 8 (1,200 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-small-speed-9",
    "name": "Helm, Spelljamming (Small, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "44,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 9 (1,350 feet per round); it can also travel at spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-small-speed-9",
    "name": "Helm, Tactical Only (Small, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "22,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Small size at a maximum tactical speed of 9 (1,350 feet per round); it cannot reach spelljamming speed. Moving a Small ship draws 0.5 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-1",
    "name": "Helm, Spelljamming (Medium, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "5,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 1 (150 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-1",
    "name": "Helm, Tactical Only (Medium, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "2,723 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 1 (150 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-2",
    "name": "Helm, Spelljamming (Medium, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "11,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 2 (300 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-2",
    "name": "Helm, Tactical Only (Medium, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "5,445 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 2 (300 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-3",
    "name": "Helm, Spelljamming (Medium, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "16,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 3 (450 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-3",
    "name": "Helm, Tactical Only (Medium, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "8,250 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 3 (450 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-4",
    "name": "Helm, Spelljamming (Medium, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "22,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 4 (600 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-4",
    "name": "Helm, Tactical Only (Medium, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "10,973 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 4 (600 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-5",
    "name": "Helm, Spelljamming (Medium, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "27,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 5 (750 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-5",
    "name": "Helm, Tactical Only (Medium, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "13,695 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 5 (750 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-6",
    "name": "Helm, Spelljamming (Medium, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "33,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 6 (900 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-6",
    "name": "Helm, Tactical Only (Medium, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "16,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 6 (900 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-7",
    "name": "Helm, Spelljamming (Medium, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "44,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 7 (1,050 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-7",
    "name": "Helm, Tactical Only (Medium, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "21,945 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 7 (1,050 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-8",
    "name": "Helm, Spelljamming (Medium, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "55,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 8 (1,200 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-8",
    "name": "Helm, Tactical Only (Medium, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "27,390 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 8 (1,200 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-medium-speed-9",
    "name": "Helm, Spelljamming (Medium, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "66,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 9 (1,350 feet per round); it can also travel at spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-medium-speed-9",
    "name": "Helm, Tactical Only (Medium, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "33,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Medium size at a maximum tactical speed of 9 (1,350 feet per round); it cannot reach spelljamming speed. Moving a Medium ship draws 1 power level per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-1",
    "name": "Helm, Spelljamming (Large, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "8,250 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 1 (150 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-1",
    "name": "Helm, Tactical Only (Large, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "4,084 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 1 (150 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-2",
    "name": "Helm, Spelljamming (Large, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "16,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 2 (300 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-2",
    "name": "Helm, Tactical Only (Large, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "8,168 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 2 (300 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-3",
    "name": "Helm, Spelljamming (Large, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "24,750 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 3 (450 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-3",
    "name": "Helm, Tactical Only (Large, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "12,375 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 3 (450 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-4",
    "name": "Helm, Spelljamming (Large, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "33,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 4 (600 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-4",
    "name": "Helm, Tactical Only (Large, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "16,459 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 4 (600 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-5",
    "name": "Helm, Spelljamming (Large, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "41,250 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 5 (750 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-5",
    "name": "Helm, Tactical Only (Large, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "20,543 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 5 (750 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-6",
    "name": "Helm, Spelljamming (Large, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "49,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 6 (900 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-6",
    "name": "Helm, Tactical Only (Large, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "24,750 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 6 (900 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-7",
    "name": "Helm, Spelljamming (Large, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "66,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 7 (1,050 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-7",
    "name": "Helm, Tactical Only (Large, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "32,918 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 7 (1,050 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-8",
    "name": "Helm, Spelljamming (Large, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "82,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 8 (1,200 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-8",
    "name": "Helm, Tactical Only (Large, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "41,085 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 8 (1,200 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-large-speed-9",
    "name": "Helm, Spelljamming (Large, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "99,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 9 (1,350 feet per round); it can also travel at spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-large-speed-9",
    "name": "Helm, Tactical Only (Large, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "49,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Large size at a maximum tactical speed of 9 (1,350 feet per round); it cannot reach spelljamming speed. Moving a Large ship draws 2 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-1",
    "name": "Helm, Spelljamming (Huge, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "12,375 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 1 (150 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-1",
    "name": "Helm, Tactical Only (Huge, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "6,126 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 1 (150 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-2",
    "name": "Helm, Spelljamming (Huge, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "24,750 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 2 (300 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-2",
    "name": "Helm, Tactical Only (Huge, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "12,251 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 2 (300 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-3",
    "name": "Helm, Spelljamming (Huge, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "37,125 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 3 (450 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-3",
    "name": "Helm, Tactical Only (Huge, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "18,563 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 3 (450 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-4",
    "name": "Helm, Spelljamming (Huge, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "49,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 4 (600 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-4",
    "name": "Helm, Tactical Only (Huge, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "24,688 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 4 (600 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-5",
    "name": "Helm, Spelljamming (Huge, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "61,875 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 5 (750 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-5",
    "name": "Helm, Tactical Only (Huge, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "30,814 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 5 (750 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-6",
    "name": "Helm, Spelljamming (Huge, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "74,250 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 6 (900 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-6",
    "name": "Helm, Tactical Only (Huge, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "37,125 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 6 (900 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-7",
    "name": "Helm, Spelljamming (Huge, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "99,000 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 7 (1,050 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-7",
    "name": "Helm, Tactical Only (Huge, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "49,376 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 7 (1,050 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-8",
    "name": "Helm, Spelljamming (Huge, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "123,750 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 8 (1,200 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-8",
    "name": "Helm, Tactical Only (Huge, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "61,628 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 8 (1,200 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-huge-speed-9",
    "name": "Helm, Spelljamming (Huge, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "148,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 9 (1,350 feet per round); it can also travel at spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-huge-speed-9",
    "name": "Helm, Tactical Only (Huge, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "74,250 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Huge size at a maximum tactical speed of 9 (1,350 feet per round); it cannot reach spelljamming speed. Moving a Huge ship draws 4 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-1",
    "name": "Helm, Spelljamming (Gargantuan, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "18,562 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 1 (150 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-1",
    "name": "Helm, Tactical Only (Gargantuan, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "9,188 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 1 (150 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-2",
    "name": "Helm, Spelljamming (Gargantuan, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "37,125 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 2 (300 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-2",
    "name": "Helm, Tactical Only (Gargantuan, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "18,377 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 2 (300 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-3",
    "name": "Helm, Spelljamming (Gargantuan, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "55,688 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 3 (450 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-3",
    "name": "Helm, Tactical Only (Gargantuan, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "27,844 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 3 (450 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-4",
    "name": "Helm, Spelljamming (Gargantuan, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "74,250 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 4 (600 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-4",
    "name": "Helm, Tactical Only (Gargantuan, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "37,032 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 4 (600 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-5",
    "name": "Helm, Spelljamming (Gargantuan, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "92,812 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 5 (750 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-5",
    "name": "Helm, Tactical Only (Gargantuan, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "46,221 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 5 (750 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-6",
    "name": "Helm, Spelljamming (Gargantuan, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "111,375 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 6 (900 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-6",
    "name": "Helm, Tactical Only (Gargantuan, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "55,688 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 6 (900 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-7",
    "name": "Helm, Spelljamming (Gargantuan, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "148,500 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 7 (1,050 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-7",
    "name": "Helm, Tactical Only (Gargantuan, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "74,064 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 7 (1,050 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-8",
    "name": "Helm, Spelljamming (Gargantuan, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "185,625 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 8 (1,200 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-8",
    "name": "Helm, Tactical Only (Gargantuan, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "92,441 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 8 (1,200 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-gargantuan-speed-9",
    "name": "Helm, Spelljamming (Gargantuan, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "222,750 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 9 (1,350 feet per round); it can also travel at spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-gargantuan-speed-9",
    "name": "Helm, Tactical Only (Gargantuan, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "111,375 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Gargantuan size at a maximum tactical speed of 9 (1,350 feet per round); it cannot reach spelljamming speed. Moving a Gargantuan ship draws 8 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-1",
    "name": "Helm, Spelljamming (Colossal, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "27,844 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 1 (150 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-1",
    "name": "Helm, Tactical Only (Colossal, Speed 1)",
    "category": "wondrous-slotless",
    "cost": "13,783 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 1 (150 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-2",
    "name": "Helm, Spelljamming (Colossal, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "55,687 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 2 (300 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-2",
    "name": "Helm, Tactical Only (Colossal, Speed 2)",
    "category": "wondrous-slotless",
    "cost": "27,565 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 2 (300 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-3",
    "name": "Helm, Spelljamming (Colossal, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "83,531 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 3 (450 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-3",
    "name": "Helm, Tactical Only (Colossal, Speed 3)",
    "category": "wondrous-slotless",
    "cost": "41,766 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 3 (450 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-4",
    "name": "Helm, Spelljamming (Colossal, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "111,375 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 4 (600 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-4",
    "name": "Helm, Tactical Only (Colossal, Speed 4)",
    "category": "wondrous-slotless",
    "cost": "55,548 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 4 (600 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-5",
    "name": "Helm, Spelljamming (Colossal, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "139,219 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 5 (750 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-5",
    "name": "Helm, Tactical Only (Colossal, Speed 5)",
    "category": "wondrous-slotless",
    "cost": "69,331 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 5 (750 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-6",
    "name": "Helm, Spelljamming (Colossal, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "167,063 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 6 (900 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-6",
    "name": "Helm, Tactical Only (Colossal, Speed 6)",
    "category": "wondrous-slotless",
    "cost": "83,531 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 6 (900 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-7",
    "name": "Helm, Spelljamming (Colossal, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "222,750 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 7 (1,050 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-7",
    "name": "Helm, Tactical Only (Colossal, Speed 7)",
    "category": "wondrous-slotless",
    "cost": "111,097 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 7 (1,050 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-8",
    "name": "Helm, Spelljamming (Colossal, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "278,437 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 8 (1,200 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-8",
    "name": "Helm, Tactical Only (Colossal, Speed 8)",
    "category": "wondrous-slotless",
    "cost": "138,662 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 8 (1,200 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-spelljamming-colossal-speed-9",
    "name": "Helm, Spelljamming (Colossal, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "334,125 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 9 (1,350 feet per round); it can also travel at spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Spelljamming Speed Capable)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-tactical-colossal-speed-9",
    "name": "Helm, Tactical Only (Colossal, Speed 9)",
    "category": "wondrous-slotless",
    "cost": "167,063 gp",
    "summary": "Throne-like helm of dark wood, bolted to a ship's deck, that lets a seated helmsman propel a ship of up to Colossal size at a maximum tactical speed of 9 (1,350 feet per round); it cannot reach spelljamming speed. Moving a Colossal ship draws 16 power levels per 6 hours, fed from spell power channeled into the helm.",
    "source": "Helms (3e Spelljammer) — Table 3: Helm Costs (Tactical Speed Capable Only)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-battery-capacity-3",
    "name": "Helm Battery (Capacity 3)",
    "category": "wondrous-slotless",
    "cost": "1,250 gp",
    "summary": "Egg-shaped crystal about a foot long, framed with adamantine, that stores spell power for a spelljamming helm. It holds up to 3 power levels; a spellcaster charges it by grasping it and channeling spells, and its stored power transfers to a helm pressed against it.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Helm Batteries, Table 2: Helm Battery Prices",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-battery-capacity-6",
    "name": "Helm Battery (Capacity 6)",
    "category": "wondrous-slotless",
    "cost": "2,000 gp",
    "summary": "Egg-shaped crystal about a foot long, framed with adamantine, that stores spell power for a spelljamming helm. It holds up to 6 power levels; a spellcaster charges it by grasping it and channeling spells, and its stored power transfers to a helm pressed against it.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Helm Batteries, Table 2: Helm Battery Prices",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-battery-capacity-12",
    "name": "Helm Battery (Capacity 12)",
    "category": "wondrous-slotless",
    "cost": "3,000 gp",
    "summary": "Egg-shaped crystal about a foot long, framed with adamantine, that stores spell power for a spelljamming helm. It holds up to 12 power levels; a spellcaster charges it by grasping it and channeling spells, and its stored power transfers to a helm pressed against it.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Helm Batteries, Table 2: Helm Battery Prices",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-battery-capacity-24",
    "name": "Helm Battery (Capacity 24)",
    "category": "wondrous-slotless",
    "cost": "5,000 gp",
    "summary": "Egg-shaped crystal about a foot long, framed with adamantine, that stores spell power for a spelljamming helm. It holds up to 24 power levels; a spellcaster charges it by grasping it and channeling spells, and its stored power transfers to a helm pressed against it.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Helm Batteries, Table 2: Helm Battery Prices",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-battery-capacity-48",
    "name": "Helm Battery (Capacity 48)",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "Egg-shaped crystal about a foot long, framed with adamantine, that stores spell power for a spelljamming helm. It holds up to 48 power levels; a spellcaster charges it by grasping it and channeling spells, and its stored power transfers to a helm pressed against it.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Helm Batteries, Table 2: Helm Battery Prices",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-battery-capacity-96",
    "name": "Helm Battery (Capacity 96)",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "Egg-shaped crystal about a foot long, framed with adamantine, that stores spell power for a spelljamming helm. It holds up to 96 power levels; a spellcaster charges it by grasping it and channeling spells, and its stored power transfers to a helm pressed against it.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Helm Batteries, Table 2: Helm Battery Prices",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-battery-capacity-192",
    "name": "Helm Battery (Capacity 192)",
    "category": "wondrous-slotless",
    "cost": "17,000 gp",
    "summary": "Egg-shaped crystal about a foot long, framed with adamantine, that stores spell power for a spelljamming helm. It holds up to 192 power levels; a spellcaster charges it by grasping it and channeling spells, and its stored power transfers to a helm pressed against it.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Helm Batteries, Table 2: Helm Battery Prices",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "charge-forcer",
    "name": "Charge Forcer",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "Torq or headgear, popular with pirates and slavers, that forces the mind of a spellcaster wearing it to link with a spelljamming helm and channel all of his spells into it, whether he wants to or not. The wearer cannot use the helm in any other way while wearing it.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Charge Forcer",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "life-forcer",
    "name": "Life Forcer",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "Device that lets a conscious user recharge a standard spelljamming helm with his own life force, channeling hit points of his choice in 5-point increments at 1 power level per 5 hit points. Hit points spent this way return only through natural healing, and the forcer will not let the drain kill the user.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Life Forcer",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lifejammer",
    "name": "Lifejammer",
    "category": "wondrous-slotless",
    "cost": "25,000 gp",
    "summary": "Coffin-shaped metal box mounted on a spelljamming helm that lets the helm be charged by a trapped living creature's life force instead of spells, siphoning hit points in 5-point increments at 1 power level per 5 hit points. Damage so drained can only be healed by time, and a partially drained victim must save or die.",
    "source": "Helms (3e Spelljammer) — New Magic Items: Lifejammer",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const HELM_EQUIPMENT_OMNI: EquipmentItem[] = [];
