import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronRight, X } from "lucide-react";
import { ALL_EQUIPMENT, ALL_MAGIC_ITEMS } from "@/data";
import type { DeckPlan } from "@/data/deck-plans";

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
 * nest: 44 plan sheets (35 class plans, 8 named-ship plans,
 * and the "Zanderin" sheet from Shaun's own files) staged
 * with the project's source files.
 *
 * DECK PLANS ON THE TITLES (Shaun, 2026-11-04, later that
 * night): "Make all the deck plans connect to the ship
 * titles. Make the ship titles clickable so you can see the
 * deck plans." Every plan sheet now rides on its ship's own
 * card (src/data/deck-plans.ts, keyed by ship record id —
 * named-ship sheets ride on their class's card): a ship with
 * plans shows a clickable title, and tapping it opens the
 * plan(s) right on the card. The data module loads lazily
 * (dynamic import below) so the images never weigh down the
 * main bundle.
 *
 * FULLY EXPANDABLE PLANS (Shaun, 2026-11-04, minutes later):
 * "Make the ship deck plan maps themselves fully expandable
 * upon clicking." Tapping a plan on a card opens it in a
 * full-screen overlay (his standing full-screen rule for
 * expandable windows); tapping the plan in the overlay
 * switches between fit-to-screen and full natural size (with
 * pan-by-scroll), and Close / tapping outside / Escape
 * leaves.
 *
 * NESTED HEADERS, same as Spelljamming: each block's
 * information sits inside its header — collapsible <details>
 * nests, closed until tapped. The header jump buttons in
 * builder.tsx open the target nest before scrolling to it.
 *
 * THE SHIPS NEST, BROKEN UP (Shaun, 2026-11-04, voice call —
 * "Give the same nesting" / "break up a nest the ships"):
 * the hulls no longer sit in one flat run inside The Ships.
 * The nest holds three sub-nests by kind — Spelljamming
 * Ships, Airships, Sea Ships — each minimized until tapped,
 * the same nesting the Spelljamming section uses.
 *
 * BACK INSIDE SPELLJAMMING (Shaun, 2026-11-04, 23:28 MST —
 * "Put the ships not as number five but put it nested in
 * spell jamming"): the Section 5 experiment is reversed.
 * This component no longer renders a standalone section; it
 * renders the CONTENT of the "Ships" nest inside the
 * Spelljamming section (step-spelljamming.tsx), in the nest
 * slot the ships held before Section 5 — the count/intro
 * cards, the three hull sub-nests, Ship Weapons & Combat,
 * and Maps & Deck Plans, deck plans on the titles and the
 * full-screen plan overlay included. Helms stay in
 * Spelljamming proper, as they always have.
 */

/** A sub-nest inside a nest — the break-up of The Ships
 * (Shaun, 2026-11-04). Spans the parent's full grid width;
 * its own cards grid inside it. */
function SubNest({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <details id={id} className="sj-nest rounded-md border border-border sm:col-span-2" data-testid={`ships-block-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2.5 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-4 w-4 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="grid gap-3 p-3 pt-0 sm:grid-cols-2">{children}</div>
    </details>
  );
}

/** One ship's card. When deck plans are on file for the hull
 * (Shaun's order, 2026-11-04), the title is a button: tap it
 * and the plan sheet(s) open right on the card. */
function ShipCard({
  item,
  plans,
  onZoom,
}: {
  item: { id: string; name: string; cost: string; notes?: string };
  plans?: DeckPlan[];
  onZoom: (plan: DeckPlan) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`ships-ship-${item.id}`}>
      {plans ? (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex w-full items-center gap-1.5 text-left font-display text-xs font-semibold uppercase tracking-wide"
        >
          <ChevronRight className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-90" : ""}`} />
          <span>
            {item.name} — {item.cost}
          </span>
          <span className="ml-auto shrink-0 font-normal normal-case text-muted-foreground">
            Deck plan{plans.length > 1 ? "s" : ""} ({plans.length})
          </span>
        </button>
      ) : (
        <p className="font-display text-xs font-semibold uppercase tracking-wide">
          {item.name} — {item.cost}
        </p>
      )}
      <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.notes}</p>
      {plans && open && (
        <div className="mt-2 space-y-3">
          {plans.map((p, i) => (
            <figure key={i}>
              <button
                type="button"
                onClick={() => onZoom(p)}
                aria-label={`Expand full-screen: ${p.caption}`}
                className="block w-full cursor-zoom-in"
              >
                <img src={p.src} alt={p.caption} loading="lazy" className="w-full rounded border border-card-border" />
              </button>
              <figcaption className="mt-1 text-xs text-muted-foreground">
                {p.caption} <span className="text-muted-foreground/80">(tap the plan to expand it full-screen)</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

const isShipCombatSource = (source: string) => source.startsWith("Ship Combat");

export function ShipsNestContent() {
  // Deck plans, loaded lazily: the module carries the plan
  // images, so it stays out of the main bundle until the
  // Ships section is actually opened (Shaun's order: the
  // plans connect to the ship titles — see ShipCard above).
  const [deckPlans, setDeckPlans] = useState<Record<string, DeckPlan[]> | null>(null);
  useEffect(() => {
    let live = true;
    import("@/data/deck-plans")
      .then((m) => {
        if (live) setDeckPlans(m.DECK_PLANS);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  // The fully-expanded deck plan (Shaun's order): one plan at
  // a time in a full-screen overlay; fullSize switches the
  // image between fit-to-screen and its natural size.
  const [zoomPlan, setZoomPlan] = useState<DeckPlan | null>(null);
  const [fullSize, setFullSize] = useState(false);
  useEffect(() => {
    setFullSize(false);
  }, [zoomPlan]);
  useEffect(() => {
    if (!zoomPlan) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomPlan(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomPlan]);
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
    <>
      <div className="rounded-md border border-card-border bg-muted/40 p-3 sm:col-span-2" data-testid="ships-intro">
        <p className="font-display text-xs font-semibold uppercase tracking-wide">Every ship in one place</p>
        <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
          Spelljamming ships, airships, and sea ships: the hulls, the weapons they fight with, and each
          ship&apos;s maps and deck plans — converted to 3.5 in the same format as everything else. The helms
          that drive these ships sit under Helms on this same page, and the same records also sit in their
          ordinary place in Equipment.
        </p>
      </div>
          <div className="rounded-md border border-card-border bg-muted/40 p-3 sm:col-span-2" data-testid="ships-count">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">{shipCounts.total} ships in all</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              {shipCounts.spelljamming} spelljamming ships, {shipCounts.airship} airships, and {shipCounts.sea} sea
              ships — every hull in the catalog, from the Spelljammer box sets, the wider Spelljammer line, Bastion
              Press Airships, the Pirates! sea-ship table, and Shaun&apos;s own homebrew ship files. The hulls are
              broken up by kind below — each group sits in its own nest, minimized until you tap it.
            </p>
          </div>
          <SubNest id="ships-hulls-spelljamming" label={`Spelljamming Ships — ${shipCounts.spelljamming}`}>
            {ships
              .filter((i) => i.category === "spelljamming ship")
              .map((item) => (
                <ShipCard key={item.id} item={item} plans={deckPlans?.[item.id]} onZoom={setZoomPlan} />
              ))}
          </SubNest>
          <SubNest id="ships-hulls-airships" label={`Airships — ${shipCounts.airship}`}>
            {ships
              .filter((i) => i.category === "airship")
              .map((item) => (
                <ShipCard key={item.id} item={item} plans={deckPlans?.[item.id]} onZoom={setZoomPlan} />
              ))}
          </SubNest>
          <SubNest id="ships-hulls-sea" label={`Sea Ships — ${shipCounts.sea}`}>
            {ships
              .filter((i) => i.category === "ship")
              .map((item) => (
                <ShipCard key={item.id} item={item} plans={deckPlans?.[item.id]} onZoom={setZoomPlan} />
              ))}
          </SubNest>

        <SubNest id="ships-weapons" label="Ship Weapons & Combat">
          {weapons.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`ships-weapon-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.notes}</p>
            </div>
          ))}
        </SubNest>

        <SubNest id="ships-maps" label="Maps & Deck Plans">
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
              copy of the preview. The sheet rides on the Airship (Sprint Freighter) card in The Ships above — tap
              its title to see it.
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
              Vipership, Vodoni Hunter-Killer, Vodoni Werewolf, and Wreckboat. Every one of these plans now rides
              on its ship&apos;s own card — tap the ship&apos;s title in The Ships above to see its plans.
            </p>
          </div>
          <div className="rounded-md border border-card-border bg-muted/40 p-3" data-testid="ships-map-named-plans">
            <p className="font-display text-xs font-semibold uppercase tracking-wide">Named-Ship Deck Plans — On File</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
              Eight plans of specific named ships are on file alongside the class plans: Terigamar (a Dragonfly),
              Raven (a Drakkar), Barracuda (a Hammership), Collector (a Neogi Mindspider), Void Reaper (a
              Nautiloid), Frostfire (a Squid Ship), Mithril Serpent (a Vipership), and a drow-crewed Wasp. Each
              named plan rides on its class&apos;s card the same way — tap the class title in The Ships.
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
        </SubNest>
    {zoomPlan &&
      createPortal(
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={zoomPlan.caption}
          data-testid="ships-plan-overlay"
        >
          <div className="flex items-center justify-between gap-3 px-3 py-2 text-white">
            <p className="font-display text-sm font-semibold">{zoomPlan.caption}</p>
            <button
              type="button"
              onClick={() => setZoomPlan(null)}
              className="flex shrink-0 items-center gap-1 rounded border border-white/40 px-2.5 py-1.5 text-sm font-semibold"
            >
              <X className="h-4 w-4" /> Close
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto" onClick={() => setZoomPlan(null)}>
            <img
              src={zoomPlan.src}
              alt={zoomPlan.caption}
              onClick={(e) => {
                e.stopPropagation();
                setFullSize((z) => !z);
              }}
              className={
                fullSize ? "mx-auto w-auto max-w-none cursor-zoom-out" : "mx-auto h-auto w-full cursor-zoom-in"
              }
            />
          </div>
          <p className="px-3 py-2 text-center text-xs text-white/70">
            Tap the plan to switch between fit-to-screen and full size. Tap outside it, or Close, to go back.
          </p>
        </div>,
        document.body,
      )}
    </>
  );
}
