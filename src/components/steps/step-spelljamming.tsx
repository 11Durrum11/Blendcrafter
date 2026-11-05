import { useMemo, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ALL_EQUIPMENT, ALL_MAGIC_ITEMS, ALL_RACES, ALL_SPELLS } from "@/data";

/**
 * Spelljamming (Shaun, 2026-11-04, voice call): a fourth
 * top-level section, its line sitting right next to Magic Item
 * Creation ("Next to Magic Creation"), minimized and clickable
 * like the other sections. EVERYTHING about Spelljamming lives
 * on this page: how it works, the ships, the helms, the peoples
 * of space, the spells, and the gear.
 *
 * The records themselves also file into the ordinary catalogs —
 * races in Abilities & Race, spells in the Spell Library, ships
 * and gear in Equipment, helms in Magic Items — converted from
 * Shaun's AD&D Spelljammer box sets to 3.5 in the same format as
 * everything else. This page gathers them back into one place.
 * Read-only, like Magic Item Creation; it changes no build
 * state.
 *
 * NESTED HEADERS (Shaun, 2026-11-04, voice call): each block's
 * information sits INSIDE its header — the six headers are
 * collapsible <details> nests, closed until tapped, so the page
 * opens as six clean headers. The header jump buttons in
 * builder.tsx open the target nest before scrolling to it.
 */

// How spelljamming works, distilled from the Concordance of
// Arcane Space in Shaun's copy of Spelljammer: Adventures in
// Space (read page by page from his scan, 2026-11-04),
// converted to 3.5 terms. Short mechanical summaries in our
// own words — the book's text is not reproduced. Page cites
// are the Concordance's printed pages.
export const SPELLJAMMING_RULE_LINES: { label: string; text: string }[] = [
  {
    label: "The Helm",
    text: "A spelljamming ship moves because a spellcaster sits in its helm — a throne-like magical device that turns the caster's spell energy into motive force. The seated caster is the ship's living engine; wizards and clerics alike can work a major or minor helm. (Concordance, pp. 11, 24)",
  },
  {
    label: "Ship's Rating",
    text: "A ship's tactical speed is its Ship's Rating (SR), and the SR comes from the helmsman's caster level: a major helm converts at 1 SR per 2 caster levels, a minor helm at 1 SR per 3 caster levels, fractions rounded up. Each SR point is 150 feet per round of tactical movement. (p. 24)",
  },
  {
    label: "Two Speeds",
    text: "SR speed is for maneuvering and combat. Once a ship is clear of large bodies it travels at spelljamming speed — roughly 100 million miles a day, the same for every ship — and drops back to tactical speed when it nears a planet, another ship, or any large mass.",
  },
  {
    label: "Air Envelope",
    text: "Everything that leaves a planet's atmosphere carries an envelope of air held by its own gravity, as deep in every direction as the body is across — a creature 5 feet across carries a bubble of air 15 feet across. A lone creature's envelope holds only 2d10 turns of fresh air: enough to cross between nearby ships, never enough to voyage. (p. 7)",
  },
  {
    label: "Ship's Air",
    text: "A ship's air starts out fresh for four months with a standard crew (roughly one person per ton of ship). Overcrowding shortens it — each full 25% over standard crew costs a month of fresh air — and losing crew cannot lengthen it. Then the air turns fouled (months 5-8: a -2 penalty to attack rolls and ability checks), then deadly (from month 9: save against poison each turn or collapse; a second failed save kills). Fresh air, or a Create Air spell, restores it. (p. 12)",
  },
  {
    label: "Gravity Planes",
    text: "A ship or other large body has a gravity plane through its middle. 'Down' pulls toward the plane from both sides, so crew can stand on the underside of the hull; objects falling off the side drop to the plane, oscillate through it a few times, or settle into orbit around the ship. Gravity reaches exactly as far as the air envelope. (pp. 7-8, 11)",
  },
  {
    label: "Hull & Saves",
    text: "Treat a ship's hull points as its hit points — at zero the ship is wrecked. A ship's armor rating works like armor class against ship weapons, and a ship makes saving throws as its hull material (thick wood, metal, crystal, and so on). (pp. 14, 31)",
  },
  {
    label: "Shipboard Combat",
    text: "Ship weapons are crewed engines — ballistae, catapults, bombards, jettisons — of the kind in the catalog's Ship Combat records. Ramming and shearing attacks ride the attacker's gravity plane: the correct approach is along the target's plane, and the defender must roll Dexterity or fall toward the other ship. (pp. 12, 31)",
  },
  {
    label: "The Phlogiston",
    text: "Between the crystal spheres lies the phlogiston — a rainbow river of flammable ether that cannot be brought inside a sphere (it dissipates if contained). Any open flame in it bursts into a fireball: even a candle makes a small one, a cooking fire a large one, and a fireball spell triples in size and damage. Ships in the Flow douse their lights and never use fire weapons. Clerics cut off from their powers cannot regain spells there. (p. 10)",
  },
  {
    label: "Spheres & Wildspace",
    text: "Each world floats inside a crystal sphere drifting in the phlogiston. Inside a sphere is wildspace — an airless void where air envelopes and gravity planes rule. The shell itself is unbreakable except at portals: natural ones that open from time to time, or ones made with Locate Portal and Create Portal. (pp. 7, 25-26)",
  },
  {
    label: "In APOC",
    text: "The Bastion's crystal sphere is scarred over and planar travel is severed, so no ship sails the Flow from Toril now. These rules stand as the record of how sailing the stars worked — and what the world has lost.",
  },
];

const isSpelljammerSource = (source: string) =>
  source.startsWith("Spelljammer") || source.startsWith("Helms (3e Spelljammer)") || source.startsWith("Ship Combat (3e Spelljammer)");

function NestBlock({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <details id={id} className="sj-nest rounded-md border border-border" data-testid={`spelljamming-block-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2.5 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-4 w-4 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="grid gap-3 p-3 pt-0 sm:grid-cols-2">{children}</div>
    </details>
  );
}

export function StepSpelljamming() {
  const ships = useMemo(
    () => ALL_EQUIPMENT.filter((i) => i.category === "spelljamming ship").sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const gear = useMemo(
    () =>
      ALL_EQUIPMENT.filter((i) => i.category !== "spelljamming ship" && isSpelljammerSource(i.source)).sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
    [],
  );
  const helms = useMemo(
    () => ALL_MAGIC_ITEMS.filter((i) => isSpelljammerSource(i.source)).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const races = useMemo(
    () => ALL_RACES.filter((r) => r.source.startsWith("Spelljammer")).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const spells = useMemo(
    () => ALL_SPELLS.filter((s) => s.source.startsWith("Spelljammer")).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-xl">Spelljamming</CardTitle>
        <CardDescription>
          The whole of it — how sailing the stars works, the ships, the helms, the peoples of space, the spells, and the gear, converted from the Spelljammer box sets to 3.5. Each header holds its information inside it — tap a header to open it. The same records also sit in their ordinary places: races with the races, spells with the spells, ships and gear with the equipment, helms with the magic items.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <NestBlock id="spelljamming-how" label="How It Works">
          {SPELLJAMMING_RULE_LINES.map((line) => (
            <div key={line.label} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`spelljamming-rule-${line.label}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">{line.label}</p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{line.text}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="spelljamming-ships" label="The Ships">
          {ships.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`spelljamming-ship-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.notes}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="spelljamming-helms" label="Helms">
          {helms.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`spelljamming-helm-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.summary}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="spelljamming-races" label="Peoples of Space">
          {races.map((race) => (
            <div key={race.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`spelljamming-race-${race.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {race.name} — {race.size} {race.type}
                {race.levelAdjustment ? `, LA +${race.levelAdjustment}` : ""}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                Speed {race.baseSpeed} ft.
                {race.favoredClass ? ` Favored class: ${race.favoredClass}.` : ""} Picked like any other race in Abilities &amp; Race.
              </p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="spelljamming-spells" label="Spells">
          {spells.map((spell) => (
            <div key={spell.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`spelljamming-spell-${spell.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {spell.name} — {spell.school}
                {spell.subschool ? ` (${spell.subschool})` : ""}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{spell.summary}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="spelljamming-gear" label="Gear">
          {gear.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`spelljamming-gear-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.notes}</p>
            </div>
          ))}
        </NestBlock>
      </CardContent>
    </Card>
  );
}
