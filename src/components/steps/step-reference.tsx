import { useMemo, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Piece, Zone } from "@/components/movable-pieces";
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
  ALL_RULES_COMPENDIUM_TOPICS,
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
import { weaponSubcategory, WEAPON_SUBCATEGORIES } from "@/lib/weapon-subcategories";
import { isApocDisabledPower, isApocDisabledRace, apocRaceNote } from "@/lib/apoc-disabled";
import { EntityDetailDialog } from "@/components/entity-detail-dialog";
import { withPieces } from "@/components/movable-pieces";
import { RULESET_LABELS } from "@/components/ruleset-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Player Reference (step 1 — moved to number one by Shaun, 2026-11-04; previously step 13, and step 11/10 before that; added 2026-11-03 at Shaun's direction):
 * one lookup for the whole library, so a player who wants to check
 * anything — a feat, a spell, an item, a house rule — finds it right
 * here in the app instead of hunting through the builder steps or
 * Shaun's Dropbox. Read-only: it changes nothing on the character.
 * It deliberately ignores the rule-set toggles and the per-entity
 * off lists: a reference shows ALL the information in the library;
 * the badges still say which rule set each entry belongs to.
 * Every category also breaks down into its own subcategories
 * (Shaun, 2026-11-03): picking a category shows its subcategory
 * buttons with counts, and picking one narrows the list to it.
 */

interface RefRow {
  key: string;
  category: string;
  /** The subcategory this entry falls under within its category
   * (Shaun, 2026-11-03: "break down all of the categories into their
   * subcategories within themselves"). Each category breaks down by
   * the grouping its own records already carry — creature type for
   * races, key ability for skills, feat type for feats, school for
   * spells, the equipment / magic-item sections for items, and so on. */
  subcategory: string;
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
  /** Display order for this category's subcategory buttons, where the
   * category has a canonical one; unlisted subcategories follow
   * alphabetically. */
  subcategoryOrder?: string[];
  rows: RefRow[];
}

function rsBadge(ruleset: Ruleset | undefined, extra: string[] = []): string[] {
  return [...extra, ...(ruleset && ruleset !== "core" ? [RULESET_LABELS[ruleset]] : [])];
}

/* ------------------------------------------------------------------ */
/* Subcategory breakdowns (Shaun, 2026-11-03). Every category breaks  */
/* down by the grouping its own records carry; the label maps below   */
/* mirror the ones the builder steps themselves use, so the           */
/* reference and the builder agree.                                   */
/* ------------------------------------------------------------------ */

/** Classes carry no finer printed grouping, so they break down by
 * rule set — the same split as the Rule Sets tab. */
function rulesetSubcategory(ruleset: Ruleset | undefined): string {
  return ruleset ? RULESET_LABELS[ruleset] : RULESET_LABELS.core;
}

const ABILITY_SUBCATEGORY_LABELS: Record<string, string> = {
  str: "Strength", dex: "Dexterity", con: "Constitution",
  int: "Intelligence", wis: "Wisdom", cha: "Charisma",
};

const FEAT_SUBCATEGORY_LABELS: Record<string, string> = {
  general: "General",
  combat: "Combat",
  "item-creation": "Item Creation",
  metamagic: "Metamagic",
  "race-specific": "Race-Specific",
  "setting-specific": "Setting-Specific",
};
const FEAT_SUBCATEGORY_ORDER = ["General", "Combat", "Item Creation", "Metamagic", "Race-Specific", "Setting-Specific"];

/** Equipment sections, in the Equipment step's own order. Weapons
 * split further into Melee / Ranged / Firearms, exactly as the
 * Equipment step's subcategory buttons do. */
const EQUIPMENT_SUBCATEGORY_LABELS: Record<string, string> = {
  weapon: "Weapons",
  armor: "Armor",
  shield: "Shields",
  helmet: "Helmets",
  ammunition: "Ammunition",
  "alchemical gear": "Alchemical Gear",
  tool: "Tools",
  gear: "Adventuring Gear",
  "food and drink": "Food & Drink",
  service: "Services",
  animal: "Animals",
};
const EQUIPMENT_SUBCATEGORY_ORDER = [
  "Weapons — Melee", "Weapons — Ranged", "Weapons — Firearms",
  "Armor", "Shields", "Helmets", "Ammunition", "Alchemical Gear", "Tools",
  "Adventuring Gear", "Food & Drink", "Services", "Animals",
];

/** Magic item sections, in the Equipment step's own order. */
const MAGIC_SUBCATEGORY_ORDER = [
  "Helmets", "Wondrous — Head", "Wondrous — Face", "Wondrous — Throat",
  "Wondrous — Shoulders", "Wondrous — Body", "Wondrous — Torso",
  "Wondrous — Arms", "Wondrous — Hands", "Wondrous — Waist",
  "Wondrous — Feet", "Wondrous — Slotless", "Wondrous Items — Other",
  "Rings", "Rods", "Staffs", "Wands", "Scrolls", "Schemas", "Potions",
  "Magic Weapons", "Magic Armor", "Magic Shields",
  "Armor Special Abilities", "Weapon Special Abilities",
  "Shield Special Abilities", "Augment Crystals", "Magic Ammunition",
  "Artifacts",
];
const MAGIC_SUBCATEGORY_LABELS: Record<string, string> = {
  "wondrous-helmets": "Helmets",
  "wondrous-head": "Wondrous — Head",
  "wondrous-face": "Wondrous — Face",
  "wondrous-throat": "Wondrous — Throat",
  "wondrous-shoulders": "Wondrous — Shoulders",
  "wondrous-body": "Wondrous — Body",
  "wondrous-torso": "Wondrous — Torso",
  "wondrous-arms": "Wondrous — Arms",
  "wondrous-hands": "Wondrous — Hands",
  "wondrous-waist": "Wondrous — Waist",
  "wondrous-feet": "Wondrous — Feet",
  "wondrous-slotless": "Wondrous — Slotless",
  wondrous: "Wondrous Items — Other",
  ring: "Rings",
  rod: "Rods",
  staff: "Staffs",
  wand: "Wands",
  scroll: "Scrolls",
  schema: "Schemas",
  potion: "Potions",
  weapon: "Magic Weapons",
  armor: "Magic Armor",
  shield: "Magic Shields",
  "armor-special-ability": "Armor Special Abilities",
  "weapon-special-ability": "Weapon Special Abilities",
  "shield-special-ability": "Shield Special Abilities",
  "augment-crystal": "Augment Crystals",
  ammunition: "Magic Ammunition",
  artifact: "Artifacts",
};

/** Flaws and traits come from exactly two places in the library. */
const FLAW_TRAIT_SUBCATEGORY_LABELS: Record<string, string> = {
  "unearthed-arcana": "Unearthed Arcana",
  dandwiki: "D&D Wiki (Homebrew)",
};

function capitalize(text: string): string {
  return text.length > 0 ? text[0].toUpperCase() + text.slice(1) : text;
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
  // Planar Handbook integration (2026-11-05), screened by the
  // same test: portal divination and manipulation of Astral
  // color pools (portals), a portal to a created demiplane,
  // reshaping another plane's substance, the greater plane
  // shift, spells that rip the boundary open (planar breaches),
  // and the cross-planar telepathic bond. The book's Calling
  // spells gray automatically via the subschool rule above;
  // its planar-protection spells (Attune Form, Avoid Planar
  // Effects, Planar Tolerance, Resist Planar Alignment) and
  // Seal Portal stay live under the Dimensional Anchor
  // precedent, and its summoning spells are treated exactly
  // like every other book's — the APOC summoning rework lives
  // in its own category below.
  "analyze-portal", "cloak-pool", "discolor-pool", "astral-hospice",
  "perinarch", "perinarch-planar", "plane-shift-greater",
  "precipitate-breach", "precipitate-complete-breach",
  "rarys-interplanar-telepathic-bond",
]);

function isTransdimensionalSpell(s: { id: string; subschool?: string }): boolean {
  // Psionic powers screened under Shaun's psychoportation
  // boundary rule (2026-11-04) join the same gray-out — see
  // src/lib/apoc-disabled.ts for the screened set.
  return s.subschool === "Calling" || TRANSDIMENSIONAL_EXTRA_IDS.has(s.id) || isApocDisabledPower(s);
}

const CATEGORIES: RefCategory[] = [
  {
    key: "races", label: "Races",
    rows: ALL_RACES.map((r) => {
      // No tieflings or drow in APOC (Shaun, 2026-11-04 /
      // 2026-11-05): those records are kept but grayed, like
      // the transdimensional spells below. See
      // src/lib/apoc-disabled.ts.
      const apocOff = isApocDisabledRace(r);
      return {
        key: `races:${r.id}`, category: "Race", subcategory: r.type, name: r.name, source: r.source, ruleset: r.ruleset,
        ...(apocOff ? { disabled: true } : {}),
        makeDetail: (): EntityDetail => {
          const d = describeRace(r);
          return apocOff ? { ...d, badges: [apocRaceNote(r), ...d.badges] } : d;
        },
      };
    }),
  },
  {
    key: "classes", label: "Base Classes",
    rows: ALL_CLASSES.map((c) => ({ key: `classes:${c.id}`, category: "Base Class", subcategory: rulesetSubcategory(c.ruleset), name: c.name, source: c.source, ruleset: c.ruleset, makeDetail: () => describeClass(c) })),
  },
  {
    key: "prestige", label: "Prestige Classes",
    rows: ALL_PRESTIGE_CLASSES.map((c) => ({ key: `prestige:${c.id}`, category: "Prestige Class", subcategory: rulesetSubcategory(c.ruleset), name: c.name, source: c.source, ruleset: c.ruleset, makeDetail: () => describePrestigeClass(c) })),
  },
  {
    key: "templates", label: "Templates",
    rows: ALL_TEMPLATES.map((t) => ({
      key: `templates:${t.id}`, category: "Template", subcategory: t.timing === "inherited" ? "Inherited" : "Acquired", name: t.name, source: t.source, ruleset: t.ruleset,
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
    rows: ALL_SKILLS.map((s) => ({ key: `skills:${s.id}`, category: "Skill", subcategory: ABILITY_SUBCATEGORY_LABELS[s.keyAbility] ?? capitalize(s.keyAbility), name: s.name, source: s.source, ruleset: s.ruleset, makeDetail: () => describeSkill(s) })),
  },
  {
    key: "feats", label: "Feats", subcategoryOrder: FEAT_SUBCATEGORY_ORDER,
    rows: ALL_FEATS.map((f) => ({ key: `feats:${f.id}`, category: "Feat", subcategory: FEAT_SUBCATEGORY_LABELS[f.category] ?? capitalize(f.category), name: f.name, source: f.source, ruleset: f.ruleset, makeDetail: () => describeFeat(f) })),
  },
  {
    key: "spells", label: "Spells",
    rows: ALL_SPELLS.map((s) => {
      const td = isTransdimensionalSpell(s);
      return {
        key: `spells:${s.id}`, category: "Spell", subcategory: s.school, name: s.name, source: s.source, ruleset: s.ruleset,
        ...(td ? { disabled: true } : {}),
        makeDetail: (): EntityDetail => {
          const d = describeSpell(s);
          return td ? { ...d, badges: ["Transdimensional — does not work in APOC", ...d.badges] } : d;
        },
      };
    }),
  },
  {
    key: "equipment", label: "Equipment", subcategoryOrder: EQUIPMENT_SUBCATEGORY_ORDER,
    rows: ALL_EQUIPMENT.map((i) => ({
      key: `equipment:${i.id}`, category: "Equipment",
      subcategory: i.category === "weapon"
        ? `Weapons — ${WEAPON_SUBCATEGORIES.find((w) => w.key === weaponSubcategory(i))?.label ?? "Melee"}`
        : (EQUIPMENT_SUBCATEGORY_LABELS[i.category] ?? capitalize(i.category)),
      name: i.name, source: i.source, ruleset: i.ruleset, makeDetail: () => describeEquipment(i),
    })),
  },
  {
    key: "magic", label: "Magic Items", subcategoryOrder: MAGIC_SUBCATEGORY_ORDER,
    // Magic helmets split out of Wondrous — Head by name, exactly as
    // the Magic Items step groups them (Shaun, 2026-11-04).
    rows: ALL_MAGIC_ITEMS.map((i) => ({ key: `magic:${i.id}`, category: "Magic Item", subcategory: i.category === "wondrous-head" && /helm/i.test(i.name) ? "Helmets" : (MAGIC_SUBCATEGORY_LABELS[i.category] ?? capitalize(i.category)), name: i.name, source: i.source, ruleset: i.ruleset, makeDetail: () => describeMagicItem(i) })),
  },
  {
    // Flaw/trait records carry an origin string ("unearthed-arcana" /
    // "dandwiki"), not a Ruleset — the audit of 2026-11-03 caught them
    // being cast to Ruleset anyway, which rendered a Product Identity
    // badge with an empty label on all 316 rows. Their origin rides on
    // the subcategory badge instead, so no ruleset is passed here.
    key: "flaws", label: "Flaws",
    rows: ALL_FLAWS.map((f) => ({ key: `flaws:${f.id}`, category: "Flaw", subcategory: FLAW_TRAIT_SUBCATEGORY_LABELS[f.ruleset] ?? capitalize(f.ruleset), name: f.name, source: f.source, makeDetail: () => describeFlawTrait(f) })),
  },
  {
    key: "traits", label: "Traits",
    rows: ALL_TRAITS.map((t) => ({ key: `traits:${t.id}`, category: "Trait", subcategory: FLAW_TRAIT_SUBCATEGORY_LABELS[t.ruleset] ?? capitalize(t.ruleset), name: t.name, source: t.source, makeDetail: () => describeFlawTrait(t) })),
  },
  {
    key: "bodymods", label: "Body Modifications",
    rows: ALL_BODY_MODIFICATIONS.map((b) => ({
      key: `bodymods:${b.id}`, category: "Body Modification", subcategory: b.family, name: b.name, source: b.source, ruleset: b.ruleset,
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
      key: `tables:${t.id}`, category: "Random Table", subcategory: `Roll ${t.die}`, name: t.name, source: t.source, ruleset: t.ruleset,
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
      key: `summoning:${s.id}`, category: "Summoning / Travel", subcategory: s.allowed ? (s.badJuJu ? "Allowed but Bad Ju-Ju" : "Allowed in APOC") : "Does not work in APOC", name: s.name, source: s.source, ruleset: s.ruleset, disabled: true,
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
      key: `houserules:${h.id}`, category: "House Rule", subcategory: h.section, name: h.name, source: h.source, ruleset: h.ruleset,
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
    key: "rules-compendium", label: "Rules Compendium",
    rows: ALL_RULES_COMPENDIUM_TOPICS.map((h) => ({
      key: `rules-compendium:${h.id}`, category: "Rules Topic", subcategory: h.section, name: h.name, source: h.source, ruleset: h.ruleset,
      makeDetail: (): EntityDetail => ({
        title: h.name,
        badges: rsBadge(h.ruleset, ["Rules Compendium", h.section]),
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
      key: `dandwiki:${d.id}`, category: "Reference", subcategory: d.list, name: d.name, source: d.source, ruleset: d.ruleset,
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
  const [subcategory, setSubcategory] = useState<string>("all");
  const [detail, setDetail] = useState<EntityDetail | null>(null);

  const activeCategory = CATEGORIES.find((c) => c.key === category);

  /** The selected category's subcategory breakdown, with counts, in
   * the category's own order where it has one (alphabetical after). */
  const subcategories = useMemo(() => {
    if (!activeCategory) return [];
    const counts = new Map<string, number>();
    for (const row of activeCategory.rows) {
      counts.set(row.subcategory, (counts.get(row.subcategory) ?? 0) + 1);
    }
    const order = activeCategory.subcategoryOrder ?? [];
    return [...counts.entries()]
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => {
        const ai = order.indexOf(a.label);
        const bi = order.indexOf(b.label);
        if (ai !== -1 || bi !== -1) {
          if (ai === -1) return 1;
          if (bi === -1) return -1;
          return ai - bi;
        }
        return a.label.localeCompare(b.label);
      });
  }, [activeCategory]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pools = category === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.key === category);
    const out: RefRow[] = [];
    for (const pool of pools) {
      let rows = subcategory === "all" || category === "all"
        ? pool.rows
        : pool.rows.filter((r) => r.subcategory === subcategory);
      rows = q
        ? rows.filter((r) => r.name.toLowerCase().includes(q) || r.source.toLowerCase().includes(q))
        : [...rows].sort((a, b) => a.name.localeCompare(b.name));
      out.push(...rows);
    }
    return out;
  }, [query, category, subcategory]);

  const shown = results.slice(0, RENDER_CAP);
  const browsing = query.trim() === "" && category !== "all";

  /** Browse results split into parts (Shaun, 2026-11-07):
   * browsing a category with no subcategory picked groups the
   * shown rows under collapsed per-subcategory nests instead of
   * one long list. A picked subcategory or a typed search keeps
   * the flat list — it is already narrowed. */
  const resultGroups = useMemo(() => {
    if (!browsing || subcategory !== "all") return null;
    const order = subcategories.map((s) => s.label);
    const map = new Map<string, RefRow[]>();
    for (const row of shown) {
      const arr = map.get(row.subcategory) ?? [];
      arr.push(row);
      map.set(row.subcategory, arr);
    }
    return [...map.entries()]
      .sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]))
      .map(([label, rows]) => ({ label, rows }));
  }, [browsing, subcategory, shown, subcategories]);

  function pickCategory(key: string) {
    setCategory(key);
    setSubcategory("all");
  }

  return withPieces("step:reference", (
    <div className="space-y-3">
      <Card>
        {/* No page heading (Shaun, 2026-11-07): the section button
            already names this page, so the large "Player Reference"
            title and its header block are gone entirely. With no
            CardHeader above it, CardContent's built-in pt-0 puts
            the search box directly under the card's top line. */}
        <CardContent className="space-y-2 pb-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Look up anything — a feat, a spell, an item, a race…"
              className="h-10 pl-9 text-base"
              data-testid="input-reference-search"
            />
          </div>
          {/* Split into parts (Shaun, 2026-11-07, spec given
              on the call: "Make it so all the buttons fit in
              such a way there are two buttons all the way
              down"): the category buttons are laid out as
              buttons in TWO columns — two across, row after row
              all the way down — sized so the whole set fits his
              phone screen without scrolling. The subcategory
              buttons below follow the same two-across layout
              when a category is picked. (An earlier pass the
              same night tucked the walls inside a collapsed
              Categories nest; his spec replaced it — the buttons
              themselves, two across, are the split.) */}
          {/* The category buttons are pieces (Shaun, 2026-11-08 —
              every button movable, the Library named explicitly):
              drag a button's grip to reorder the grid on this
              device; the button itself still just clicks. */}
          <Zone zoneId="reference-categories" className="grid grid-cols-2 gap-1">
            <Piece pieceId="cat-all" layout="grid">
              <Button size="sm" className="h-7 w-full text-sm" variant={category === "all" ? "default" : "outline"} onClick={() => pickCategory("all")}>
                All ({TOTAL_ROWS.toLocaleString()})
              </Button>
            </Piece>
            {CATEGORIES.map((c) => (
              <Piece key={c.key} pieceId={`cat-${c.key}`} layout="grid">
                <Button
                  size="sm"
                  variant={category === c.key ? "default" : "outline"}
                  className={c.disabled ? "h-7 w-full text-sm text-muted-foreground line-through opacity-60" : "h-7 w-full text-sm"}
                  onClick={() => pickCategory(c.key)}
                >
                  {c.label} ({c.rows.length.toLocaleString()})
                </Button>
              </Piece>
            ))}
          </Zone>
          {activeCategory && subcategories.length > 1 && (
            <Zone zoneId="reference-subcategories" className="grid grid-cols-2 items-center gap-1 border-t border-border pt-3">
              <Piece pieceId="sub-label" layout="grid">
                <span className="text-base text-muted-foreground">{activeCategory.label}:</span>
              </Piece>
              <Piece pieceId="sub-all" layout="grid">
                <Button
                  size="sm"
                  className="w-full text-sm"
                  variant={subcategory === "all" ? "default" : "outline"}
                  onClick={() => setSubcategory("all")}
                  data-testid="button-reference-subcategory-all"
                >
                  All in {activeCategory.label} ({activeCategory.rows.length.toLocaleString()})
                </Button>
              </Piece>
              {subcategories.map((s) => (
                <Piece key={s.label} pieceId={`sub-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} layout="grid">
                  <Button
                    size="sm"
                    className={activeCategory.disabled ? "w-full text-sm text-muted-foreground line-through opacity-60" : "w-full text-sm"}
                    variant={subcategory === s.label ? "default" : "outline"}
                    onClick={() => setSubcategory(s.label)}
                    data-testid={`button-reference-subcategory-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {s.label} ({s.count.toLocaleString()})
                  </Button>
                </Piece>
              ))}
            </Zone>
          )}
        </CardContent>
      </Card>

      {!(query.trim() === "" && category === "all") && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">
              {results.length.toLocaleString()} {results.length === 1 ? "match" : "matches"}
              {browsing ? ` in ${activeCategory?.label}` : ""}
              {subcategory !== "all" && activeCategory ? ` — ${subcategory}` : ""}
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
            ) : resultGroups ? (
              <Zone zoneId="reference-groups" className="grid grid-cols-2 items-start gap-2">
                {resultGroups.map((g) => (
                  <Piece key={g.label} pieceId={`group-${g.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} layout="grid" className="[&:has(details[open])]:col-span-2">
                    <details className="sj-nest h-full rounded-md border border-border" data-testid={`reference-results-group-${g.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    <summary className="flex cursor-pointer list-none items-center gap-2 px-2.5 py-2 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
                      <ChevronRight className="sj-chevron h-4 w-4 shrink-0 transition-transform" />
                      {g.label} ({g.rows.length})
                    </summary>
                    <ul className="grid grid-cols-2 gap-x-4 p-3 pt-0 lg:grid-cols-4">
                      {g.rows.map((row) => (
                        <li key={row.key} className="border-b">
                          <button
                            type="button"
                            className={
                              row.disabled
                                ? "flex w-full items-center justify-between gap-3 py-1.5 text-left text-muted-foreground line-through opacity-60 hover:bg-muted/50"
                                : "flex w-full items-center justify-between gap-3 py-1.5 text-left hover:bg-muted/50"
                            }
                            onClick={() => setDetail(row.makeDetail())}
                          >
                            <span className="min-w-0">
                              <span className="block text-lg font-medium">{row.name}</span>
                              <span className="block truncate text-base text-muted-foreground">{row.source}</span>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    </details>
                  </Piece>
                ))}
              </Zone>
            ) : (
              <ul className="grid grid-cols-2 gap-x-4 lg:grid-cols-4">
                {shown.map((row) => (
                  <li key={row.key} className="border-b">
                    <button
                      type="button"
                      className={
                        row.disabled
                          ? "flex w-full items-center justify-between gap-3 py-1.5 text-left text-muted-foreground line-through opacity-60 hover:bg-muted/50"
                          : "flex w-full items-center justify-between gap-3 py-1.5 text-left hover:bg-muted/50"
                      }
                      onClick={() => setDetail(row.makeDetail())}
                    >
                      <span className="min-w-0">
                        {/* No category / subcategory / rule-set tags
                            on reference rows (Shaun, 2026-11-04): the
                            tags ate the room and the item's name went
                            missing off the front. The name gets the
                            whole row and wraps instead of truncating;
                            category/subcategory still live in the
                            category picker above and in the detail
                            dialog. (Both row lists — grouped nests
                            and this flat list — use this same row.) */}
                        <span className="block text-lg font-medium">{row.name}</span>
                        <span className="block truncate text-base text-muted-foreground">{row.source}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}

      {/* No Ambience Credits nest here (Shaun, 2026-11-07: the
          ambience credits button is removed entirely). The
          recordings' provenance and license credits ride in
          src/data/ambience-audio.ts. */}

      <EntityDetailDialog detail={detail} onOpenChange={(open) => { if (!open) setDetail(null); }} />
    </div>
  ), { skip: [EntityDetailDialog] });
}
