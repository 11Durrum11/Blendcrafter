import { useMemo, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ALL_EQUIPMENT, ALL_MAGIC_ITEMS, ALL_RACES, ALL_SPELLS } from "@/data";
import { ShipsNestContent } from "./step-ships";

/**
 * Spelljamming (Shaun, 2026-11-04, voice call): a fourth
 * top-level section, its line sitting right next to Magic Item
 * Creation ("Next to Magic Creation"), minimized and clickable
 * like the other sections. Everything about Spelljamming lives
 * on this page: how it works, THE SHIPS (nested here again —
 * Shaun, 2026-11-04, 23:28 MST: "Put the ships not as number
 * five but put it nested in spell jamming," reversing the
 * same-night move that had made Ships a top-level Section 5),
 * the helms, the peoples of space, the spells, and the gear.
 * The ships nest below renders step-ships.tsx's content: the
 * hulls by kind, ship weapons, and the maps & deck plans.
 * Helms STAY here, beside the ships, as they always have.
 *
 * The records themselves also file into the ordinary catalogs —
 * races in the Race step, spells in the Spell Library, ships
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
    label: "Maneuver Classes",
    text: "A ship's maneuverability class (MC) rates how it turns in tactical combat, from A (most agile) to F (worst). It is set by the ship's rating, hull design, construction materials, and rigging - sails, oars, fins. Elven ships are the most graceful; an F rating marks a barely modified sea vessel that purpose-built craft will outfly. The helm only supplies the push: the crew works the rigging to tack, heel, and spin the ship. (Spelljammer Wiki, 'Spelljamming ship')",
  },
  {
    label: "Tonnage",
    text: "Ship tonnage is displacement, not weight: 1 ton equals 100 cubic yards (2,700 cubic feet) of volume, and brings along enough air to sustain one human-sized person for 4 to 8 months. Half of each ton (50 cubic yards) is usable cargo space; the rest is crew, structure, and armament. Tonnage also caps how many people a ship can carry before its air envelope is overstrained - small folk use half a share of air, large ones double, gargantuan five times. (Spelljammer Wiki, 'Spelljamming ship')",
  },
  {
    label: "Helm Endurance",
    text: "One caster can power a helm for up to 12 hours; past that, the Ship's Rating drops by 1 point for every extra hour, and working a helm uses up the caster's spellcasting for 24 hours regardless. Serious ships carry relief helmsmen, and only one helm or power source can drive a ship at a time - the rest are backups, and a ship with no power running is adrift, unable to control its motion. A minor helm moves up to 50 tons, a major helm up to 100. (Spelljammer helms compilation, after the Concordance and Lost Ships)",
  },
  {
    label: "Series & Pool Helms",
    text: "Mind flayer inventions. A series helm links three to five helms together; each helm that is manned adds 1 to the Ship's Rating, and they can be worked by creatures with innate spell-like abilities rather than true spellcasters - ships of 5 to 50 tons. A pool helm draws on an elder brain's life-pool instead of any individual, runs at a fixed Ship's Rating of 5, and is rumored to move ships of up to 200 tons. (Spelljammer helms compilation)",
  },
  {
    label: "Lifejammers & Death Helms",
    text: "The neogi answer to the helm burns a captive's life instead of spells. A lifejammer drains 1d8 hit points from the creature sealed inside for every day of operation, plus a daily save against death; the lost hit points cannot be regained while the victim remains in the helm, and its Ship's Rating is figured as if the victim were a wizard of the same level on a minor helm. A death helm is worse: it drains 2d6 hit points a day, moves a ship as a major helm, and charms its victim into loving the seat, so they resist rescue and waste away content. (Spelljammer helms compilation)",
  },
  {
    label: "Furnaces & Forges",
    text: "Not every ship burns spellcasters. A furnace helm burns magic items for motive force - roughly a week at Ship's Rating 2 for every 1,000 XP an item is worth, a second item raising it to 3 at a real risk of explosion - and it can burn only inside a crystal sphere: lit in the phlogiston, it explodes catastrophically. Dwarven forges turn labor into motion: every 100 dwarves working the foundry give the ship 1 point of Ship's Rating, powering stone citadels of 100 to 700 tons. (Spelljammer helms compilation)",
  },
  {
    label: "Sailing the Flow",
    text: "The phlogiston gathers into rainbow rivers running from sphere to sphere, and ships ride them: the denser the flow, the faster the current, and sails help a ship catch it. Most rivers run in both directions, but some flow only one way, forcing a detour through a second or third sphere to reach a destination. A sphere-to-sphere passage takes 10 to 100 days. The spheres themselves drift slowly over time, but the rivers almost never change course, so a good chart stays good. (Spelljammer Wiki, 'Phlogiston')",
  },
  {
    label: "Dangers of the Flow",
    text: "Extra-dimensional magic does not work in the phlogiston - bags of holding and portable holes fail, and nothing can be summoned in from another plane. A living castaway overboard does not suffocate: the Flow preserves them, skin hardening into a grey, stone-like torpor, until they are hauled back into an air envelope and slowly recover. A few inky Dark Regions of the Flow are shunned by every captain who knows them. (Spelljammer Wiki, 'Phlogiston')",
  },
  {
    label: "Personal Air",
    text: "A lone spacer's own air envelope runs out fast: the air stays fresh for 2d20 rounds, then turns fouled through round 30 (-2 to attacks and ability checks), then deadly - from round 31 the spacer must save against death each turn or fall unconscious, keeps saving while out, and a failed save is death by suffocation. Fresh - or even merely fouled - air revives the fallen. (Priest's Spell Compendium Vol. 1, p. 151, 'Air in Space')",
  },
  {
    label: "Helm Warfare",
    text: "Whole spells exist to kill the other ship's engine. Disable helm scrambles an operating helm for 1 round per level and the helm gets no saving throw; destroy minor helm and destroy major helm wreck helms outright - the major version destroys any helm type, though dwarven foundries can usually be repaired - and spark burst deals 1 hull point to a ship for every 10 dice of its damage. A ship whose helm dies in a fight is dead in space. (Wizard's Spell Compendium Vols. 1 and 3)",
  },
  {
    label: "Cosmic Storms",
    text: "Wildspace's strangest hazard: a cosmic storm is a drifting wormhole mouth that no one controls. It wanders at random, drags every ship within 20 hexes (10,000 ft.) toward itself each turn, and anything that enters its hex is deposited anywhere - sages say possibly anywhen - in the universe. The summon cosmic storm spell calls one up, but the caster cannot steer it, and it dies out only when it strays too far from him or swallows him. (Wizard's Spell Compendium Vol. 4, p. 890)",
  },
  {
    label: "In APOC",
    text: "The Bastion's crystal sphere is scarred over and planar travel is severed, so no ship sails the Flow from Toril now. These rules stand as the record of how sailing the stars worked — and what the world has lost.",
  },
];

const isSpelljammerSource = (source: string) =>
  source.startsWith("Spelljammer") || source.startsWith("Helms (3e Spelljammer)") || source.startsWith("Ship Combat (3e Spelljammer)");

// Shaun's fan helm compilation (ships-local sweep, 2026-11-04):
// the classic named helms — Minor Helm, Major Helm, Gnomish
// Helm, Crown of the Stars — and the Non-Magical Engines record
// carry this source. They are helms, so they gather under
// Helms here, not under Ships.
const isHelmCompilationSource = (source: string) => source.startsWith("Helm Types and Function");

function NestBlock({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <details id={id} className="sj-nest rounded-md border border-border [&[open]]:col-span-2 lg:[&[open]]:col-span-1" data-testid={`spelljamming-block-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2.5 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-4 w-4 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="grid gap-3 p-3 pt-0">{children}</div>
    </details>
  );
}

export function StepSpelljamming() {
  const gear = useMemo(
    () =>
      ALL_EQUIPMENT.filter((i) => i.category !== "spelljamming ship" && isSpelljammerSource(i.source)).sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
    [],
  );
  const helms = useMemo(
    () =>
      [
        ...ALL_MAGIC_ITEMS.filter((i) => isSpelljammerSource(i.source) || isHelmCompilationSource(i.source)).map((i) => ({
          id: i.id,
          name: i.name,
          cost: i.cost,
          summary: i.summary,
        })),
        // Non-Magical Engines is filed as equipment, not a magic
        // item, but it drives a ship like a helm and belongs with
        // the helms (ships-local adjudication) — gather it in too.
        ...ALL_EQUIPMENT.filter((i) => isHelmCompilationSource(i.source)).map((i) => ({
          id: i.id,
          name: i.name,
          cost: i.cost,
          summary: i.notes,
        })),
      ].sort((a, b) => a.name.localeCompare(b.name)),
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
      {/* No page heading (Shaun, 2026-11-07): the section button
          already names this page, so the large "Spelljamming"
          title and its header block are gone — the same
          treatment as Player Reference and Magic Item Creation.
          CardContent's built-in pt-0 puts the nests directly
          under the card's top line. */}
      {/* The six nests side by side (Shaun, 2026-11-07: "put all
          those buttons now next to each other"), in his order —
          How It Works, Ships, Helms, Peoples of Space, Spells,
          Gear — three across at page width, wrapping to a
          second row of three (six across cannot fit the page
          width cleanly), each still collapsed, expanding in
          place. Inside a third-width nest the blocks stack in a
          single column (see NestBlock). */}
      <CardContent className="grid grid-cols-2 items-start gap-3 lg:grid-cols-3">
        <NestBlock id="spelljamming-how" label="How It Works">
          {SPELLJAMMING_RULE_LINES.map((line) => (
            <div key={line.label} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`spelljamming-rule-${line.label}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">{line.label}</p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{line.text}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="spelljamming-ships" label="Ships">
          <ShipsNestContent />
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
                {race.favoredClass ? ` Favored class: ${race.favoredClass}.` : ""} Picked like any other race in the Race step.
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
