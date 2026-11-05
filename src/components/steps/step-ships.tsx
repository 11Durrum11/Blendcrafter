import { useMemo, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ALL_EQUIPMENT, ALL_MAGIC_ITEMS } from "@/data";

/**
 * Ships (Shaun, 2026-11-04, voice call): a fifth top-level
 * section of its own — "Give me another number five ships.
 * And put all the ship information in there" — confirmed on
 * read-back: a whole new top-level Section 5 called Ships,
 * with every ship moved into it, next to the other sections,
 * not buried inside Spelljamming, "including any maps that
 * come with the ships themselves."
 *
 * So the hulls live HERE now (the Ships nest left the
 * Spelljamming section; the helms STAY in Spelljamming at
 * Shaun's standing layout — he moved the ships, not the
 * helms). The records themselves also file into the ordinary
 * catalogs (ships and ship weapons in Equipment), converted
 * to 3.5 in the same format as everything else; this page
 * gathers them back into one place. Read-only, like the
 * other top-level sections; it changes no build state.
 *
 * The hulls gather from THREE equipment categories, because
 * Shaun's order was every ship: "spelljamming ship" (boxed
 * set, web line, and his own homebrew ships), "airship"
 * (Bastion Press), and "ship" (the Pirates! sea vessels) —
 * the last two kinds landed with the ships-local sweep of
 * Shaun's own laptop and Dropbox files (2026-11-04), which
 * also brought his homebrew ship weapons/systems, the
 * classic fan-compilation helms (filed under Helms in
 * Spelljamming, not here), and the two map lines in the
 * Maps nest below. The second Spelljammer web pass added 41
 * more hulls and the fleet deck-plan inventory in the Maps
 * nest: 43 plan images (35 class plans, 8 named-ship plans)
 * staged with the project's source files, named here as
 * text lines only.
 *
 * NESTED HEADERS, same as Spelljamming: each block's
 * information sits inside its header — collapsible <details>
 * nests, closed until tapped. The header jump buttons in
 * builder.tsx open the target nest before scrolling to it.
 */

function NestBlock({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <details id={id} className="sj-nest rounded-md border border-border" data-testid={`ships-block-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2.5 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-4 w-4 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="grid gap-3 p-3 pt-0 sm:grid-cols-2">{children}</div>
    </details>
  );
}

const isShipCombatSource = (source: string) => source.startsWith("Ship Combat");

export function StepShips() {
  // EVERY ship (Shaun's order): three hull categories gather
  // here — "spelljamming ship" (the boxed set, the web line,
  // and Shaun's own homebrew ships), "airship" (Bastion Press),
  // and "ship" (the Pirates! sea vessels from the ships-local
  // sweep of Shaun's own files).
  const ships = useMemo(
    () =>
      ALL_EQUIPMENT.filter(
        (i) => i.category === "spelljamming ship" || i.category === "airship" || i.category === "ship",
      ).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const shipCounts = useMemo(
    () => ({
      spelljamming: ships.filter((i) => i.category === "spelljamming ship").length,
      airship: ships.filter((i) => i.category === "airship").length,
      sea: ships.filter((i) => i.category === "ship").length,
      total: ships.length,
    }),
    [ships],
  );
  const weapons = useMemo(
    () =>
      [
        ...ALL_EQUIPMENT.filter(
          (i) =>
            i.category !== "spelljamming ship" &&
            i.category !== "airship" &&
            i.category !== "ship" &&
            (isShipCombatSource(i.source) ||
              (i.source.startsWith("Spelljammer") && i.category === "weapon") ||
              // The ships-local pack's ship weapons and ship
              // systems (Shaun's own Heavy Cannon, Free Turret
              // mounts, Ammunition Distribution System).
              i.category === "ship weapon" ||
              i.category === "ship system"),
        ),
        ...ALL_MAGIC_ITEMS.filter((i) => isShipCombatSource(i.source)).map((i) => ({
          id: i.id,
          name: i.name,
          cost: i.cost,
          notes: i.summary,
        })),
      ].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-xl">Ships</CardTitle>
        <CardDescription>
          Every ship in one place — spelljamming ships, airships, and sea ships: the hulls, the weapons they fight
          with, and where each ship&apos;s maps and deck plans live — converted to 3.5 in the same format as everything
          else. Each header holds its information inside it — tap a header to open it. The helms that drive these ships
          stay in the Spelljamming section, and the same records also sit in their ordinary place in Equipment.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <NestBlock id="ships-hulls" label="The Ships">
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="ships-count">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">{shipCounts.total} ships in all</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              {shipCounts.spelljamming} spelljamming ships, {shipCounts.airship} airships, and {shipCounts.sea} sea
              ships — every hull in the catalog, from the Spelljammer box sets, the wider Spelljammer line, Bastion
              Press Airships, the Pirates! sea-ship table, and Shaun&apos;s own homebrew ship files.
            </p>
          </div>
          {ships.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`ships-ship-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.notes}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="ships-weapons" label="Ship Weapons & Combat">
          {weapons.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`ships-weapon-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.notes}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="ships-maps" label="Maps & Deck Plans">
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="ships-maps-intro">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">Where the plans live</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              The Adventures in Space boxed set ends with fold-out deck plans for its ships, and every ship&apos;s full
              description and plan references ride in its book entry. One card per ship below names the book and page
              its printed plans and description come from — open the ship&apos;s own record in Equipment for its full
              converted stats.
            </p>
          </div>
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="ships-map-zanderin">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">Zanderin Sprint Freighter — Deck Plan</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              Bastion Press Airships preview, p. 29: the filled record sheet for the Sprint Freighter
              &ldquo;Zanderin&rdquo; prints the ship&apos;s deck plan — the only true ship deck plan in Shaun&apos;s
              copy of the preview. The plan image is kept with the project&apos;s source files; it is not reproduced
              in the app.
            </p>
          </div>
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="ships-map-pirate-collection">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">Pirate Maps Collection</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              Shaun&apos;s Dropbox holds a Pirate Maps collection of about 108 map files (in his transfer/maps
              folder) — regional and adventure maps rather than ship deck plans. Inventoried for this section; the
              files themselves stay in his Dropbox.
            </p>
          </div>
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="ships-map-fleet-plans">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">Fleet Deck Plans — On File</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              Printed deck plans for 35 ship classes are on file with the project&apos;s source files (scans of the
              printed plans, gathered in the pass-2 hunt): Dragonfly, Dragonship, Hammership, Tradesman, Angelship,
              Archaic Man-o&apos;-War, Bloatfly, Cargo Barge, Cuttle Command, Deathglory, Dwarven Mining Ship, Eel
              Ship, Goblin Blade (plus its Arrow sheet), Hummingbird, Lamprey, Leaf Ship (the sheet also covers the
              Thorn Ship), Mammoth, Mantis, Monarch Armada, Nightwolf, Octopus, Porcupine Ship, Pyramid Ship, Quad
              of Thay, Quentin&apos;s Libraria, Shrike, Skeleton Ship, Swan Ship, Turtle Ship, Unity Ship,
              Vipership, Vodoni Hunter-Killer, Vodoni Werewolf, and Wreckboat. The images stay with the source
              files; they are not reproduced in the app.
            </p>
          </div>
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="ships-map-named-plans">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">Named-Ship Deck Plans — On File</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              Eight plans of specific named ships are on file alongside the class plans: Terigamar (a Dragonfly),
              Raven (a Drakkar), Barracuda (a Hammership), Collector (a Neogi Mindspider), Void Reaper (a
              Nautiloid), Frostfire (a Squid Ship), Mithril Serpent (a Vipership), and a drow-crewed Wasp.
            </p>
          </div>
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="ships-map-print-only-plans">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">Plans in Print Only</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              Deck plans are verified to exist in print for a few more hulls, but no image is on file: Battle
              Dolphin, Gnomish Whelk, Smalljammer, and Whaleship (on their Legend of Spelljammer ship cards), Triop
              (in the War Captain&apos;s Companion box), Barge of Ptah (printed in Lost Ships), The Vul (the SJA4
              fold-out&apos;s &ldquo;Diamond-class Ship&rdquo; mapsheet), and Doombat, Crystal Ship, Thoric
              Tradesman, and Lanceship (on the Astromundi Cluster box&apos;s ship cards). The boxed set&apos;s
              Lorebook also prints deck plans with its ship write-ups as standard, as in Shaun&apos;s own scan.
            </p>
          </div>
          {ships.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`ships-map-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">{item.name}</p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.source}</p>
            </div>
          ))}
        </NestBlock>
      </CardContent>
    </Card>
  );
}
