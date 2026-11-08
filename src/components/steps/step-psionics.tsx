import { useMemo, type ReactNode } from "react";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Piece, Zone, usePieces } from "@/components/movable-pieces";
import { Button } from "@/components/ui/button";
import { ALL_CLASSES, ALL_EQUIPMENT, ALL_FEATS, ALL_MAGIC_ITEMS, ALL_PRESTIGE_CLASSES, ALL_RACES, ALL_SPELLS } from "@/data";
import type { CharacterBuild, InventoryEntry, ResolvedCharacter, SpellDefinition } from "@/engine/types";
import { buildPrereqContext, evaluatePrestigeClass, type PrestigeGateResult } from "@/engine/prestige-prerequisites";
import { isApocDisabledPower } from "@/lib/apoc-disabled";

/**
 * Psionics (Shaun, 2026-11-04): its own step inside Character
 * Creation — between Magic Items and Inventory (step 11 since
 * the Abilities/Race split of 2026-11-05; it was step 10 when
 * Shaun ordered "make the psionics number ten... So inventory
 * will become 11, personality become number 12 and character
 * sheet will become 13"). Everything psionic sits in this step under
 * nested headers (Powers, Classes, Prestige Classes, Feats,
 * Races, Psionic Items, Equipment), minimized until clicked —
 * the Spelljamming pattern. Inside Powers, the powers are
 * subcategorized BY TYPE — one clickable sub-nest per
 * discipline (Clairsentience, Metacreativity, Psychokinesis,
 * Psychometabolism, Psychoportation, Telepathy), each
 * minimized until tapped (Shaun, 2026-11-05: "subcategorize
 * the powers and split them into subcategories... by type...
 * and minimized... and clickable"). A jump-button row across the top
 * duplicated those headers and Shaun ordered it removed
 * (2026-11-05: "you got the buttons twice... Get rid of the
 * buttons on top"); the nest headers are the list you click. The step's open
 * description paragraph was nested too (across-the-board
 * treatment pass, 2026-11-05): the canon text now sits inside
 * a "Psionics in APOC — the Rules" nest at the top of the
 * step; only the conditional grayed-step note stays visible,
 * because it is state feedback, not prose.
 *
 * Gathering: the two psionics books' records — source starts
 * with "Expanded Psionics Handbook" or "Complete Psionic" —
 * for classes, prestige classes, feats, races, items, and
 * equipment; the powers gather from the whole spell barrel by
 * their "(psionic power)" school tag (which also catches the
 * two Eberron powers), grouped by discipline. The powers ALSO
 * live in the ordinary Spells step, as Shaun ordered ("Give
 * everything everything its proper place").
 *
 * APOC canon on this page (Shaun, 2026-11-04): psionics–magic
 * transparency is in force, and psychoportation powers that
 * breach the world's boundaries don't work — those render
 * grayed and cannot be picked (src/lib/apoc-disabled.ts).
 * Astral Construct was left live at integration as the named
 * borderline case; Shaun ruled on it the same night —
 * "Leave out the construct" — so it is grayed with the rest
 * (src/lib/apoc-disabled.ts).
 *
 * Buttons (Shaun, 2026-11-05: "Add buttons to all the
 * psionics that need them. Like the equipment and so and so
 * forth."): every nest that holds something a character can
 * take now carries the same working control its home step
 * has — Powers already had Add/Remove (filed under a
 * manifester class on the build, the Spells step's model);
 * Classes and Prestige Classes get the - / Lv / + level
 * steppers from their steps (Prestige judged by the SAME
 * gate evaluator and the build's own certifications, so a
 * locked class stays locked here — certifying still happens
 * in the Prestige Classes step); Feats get an Add/Remove
 * toggle wired to the Feats step's selection; Psionic Items
 * and Equipment get the "Add" button that files them into
 * the build's inventory, exactly like the Magic Items and
 * Equipment steps. Races stay reference-only: a race is
 * picked once, in the Race step — the Spelljamming pattern.
 * APOC-grayed powers keep no button at all.
 *
 * The step's tab in the step navigation renders GRAYED when
 * the current build has no psionic class (builder.tsx,
 * buildHasPsionics below) — the step still opens for
 * reference; the gray lifts when a psionic class is on the
 * build.
 */

export const PSIONIC_BASE_CLASS_IDS = ["psion", "psychic-warrior", "soulknife", "wilder", "ardent", "divine-mind", "lurk"];

const PSIONIC_SOURCE_PREFIXES = ["Expanded Psionics Handbook", "Complete Psionic"];
const isPsionicSource = (source: string) => PSIONIC_SOURCE_PREFIXES.some((p) => source.startsWith(p));

export const PSIONIC_PRESTIGE_CLASS_IDS: string[] = ALL_PRESTIGE_CLASSES.filter((c) => isPsionicSource(c.source)).map(
  (c) => c.id,
);

/** Does this build carry any psionic class, base or prestige? */
export function buildHasPsionics(build: Pick<CharacterBuild, "classLevels" | "prestigeClassLevels">): boolean {
  return (
    build.classLevels.some((c) => PSIONIC_BASE_CLASS_IDS.includes(c.classId)) ||
    build.prestigeClassLevels.some((c) => PSIONIC_PRESTIGE_CLASS_IDS.includes(c.classId))
  );
}

const DISCIPLINE_LIST_KEYS = ["Seer", "Shaper", "Telepath", "Nomad", "Egoist", "Kineticist"];

/**
 * Which of the build's classes could manifest this power, by
 * its printed list keys: "Psion/Wilder" → psion or wilder;
 * a discipline name → psion; "Psychic Warrior" and "Lurk" →
 * those classes; anything else is a mantle key → ardent or
 * divine mind. Soulknife manifests no powers and never
 * matches. Picks file under the matched class, exactly like
 * spell picks file under their casting class.
 */
function manifesterClassIdsFor(power: SpellDefinition, buildClassIds: string[]): string[] {
  const matched = new Set<string>();
  for (const key of Object.keys(power.levels)) {
    const candidates =
      key === "Psion/Wilder"
        ? ["psion", "wilder"]
        : key === "Psychic Warrior"
          ? ["psychic-warrior"]
          : key === "Lurk"
            ? ["lurk"]
            : DISCIPLINE_LIST_KEYS.includes(key)
              ? ["psion"]
              : ["ardent", "divine-mind"];
    for (const c of candidates) if (buildClassIds.includes(c)) matched.add(c);
  }
  return buildClassIds.filter((id) => matched.has(id));
}

function NestBlock({ id, label, children, subZoneId }: { id: string; pieceId?: string; label: string; children: ReactNode; subZoneId?: string }) {
  // Nests are pieces (Shaun, 2026-11-08 — every button movable):
  // drag a nest's grip to reorder the grid on this device. The
  // open-span moved onto the piece shell, which watches its
  // details; the nest itself still just opens and closes.
  // Bug sweep 2026-11-08: on DM devices the piece chrome floats
  // over the summary's right end — pad long titles clear of it.
  const { dm } = usePieces();
  return (
    <Piece pieceId={id} layout="grid" className="[&:has(details[open])]:col-span-2 lg:[&:has(details[open])]:col-span-3">
      <details id={id} className="sj-nest h-full rounded-md border border-border" data-testid={`psionics-block-${id}`}>
      <summary className={"flex cursor-pointer list-none items-center gap-2 px-2 py-1.5 font-display text-[13px] font-semibold [&::-webkit-details-marker]:hidden" + (dm ? " pr-12" : "")}>
        <ChevronRight className="sj-chevron h-4 w-4 shrink-0 transition-transform" />
        {label}
      </summary>
      {subZoneId ? (
        <Zone zoneId={subZoneId} className="grid grid-cols-2 gap-2 p-2.5 pt-0 lg:grid-cols-4">{children}</Zone>
      ) : (
        <div className="grid grid-cols-2 gap-2 p-2.5 pt-0 lg:grid-cols-4">{children}</div>
      )}
      </details>
    </Piece>
  );
}

function SubNest({ id, label, children }: { id: string; pieceId?: string; label: string; children: ReactNode }) {
  // Sub-nests are pieces too (platform rule, 2026-11-08: every
  // button movable, inner buttons included — a nest must not move
  // while its sub-nests stay stuck). The full-width span rides on
  // the piece shell; the details keeps the rest.
  return (
    <Piece pieceId={id} layout="grid" className="col-span-full">
      <details id={id} className="sj-nest h-full rounded-md border border-border/70 bg-muted/20" data-testid={`psionics-subnest-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-2 py-1 font-display text-xs font-semibold uppercase tracking-wide [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-3.5 w-3.5 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="grid grid-cols-2 gap-2 p-2 pt-0 lg:grid-cols-4">{children}</div>
      </details>
    </Piece>
  );
}

export function StepPsionics({
  build,
  resolved,
  onToggleSpell,
  onToggleFeat,
  onAddClass,
  onRemoveClass,
  onAddPrestige,
  onRemovePrestige,
  onAddInventory,
}: {
  build: CharacterBuild;
  resolved: ResolvedCharacter;
  onToggleSpell: (classId: string, spellId: string, selected: boolean) => void;
  onToggleFeat: (featId: string, selected: boolean) => void;
  onAddClass: (classId: string) => void;
  onRemoveClass: (classId: string) => void;
  onAddPrestige: (classId: string) => void;
  onRemovePrestige: (classId: string) => void;
  onAddInventory: (kind: InventoryEntry["kind"], itemId: string) => void;
}) {
  const powersByDiscipline = useMemo(() => {
    const groups = new Map<string, SpellDefinition[]>();
    for (const s of ALL_SPELLS) {
      if (!s.school.includes("(psionic power)")) continue;
      const discipline = s.school.replace(" (psionic power)", "");
      const list = groups.get(discipline) ?? [];
      list.push(s);
      groups.set(discipline, list);
    }
    return [...groups.entries()]
      .map(([discipline, list]) => ({ discipline, list: list.sort((a, b) => a.name.localeCompare(b.name)) }))
      .sort((a, b) => a.discipline.localeCompare(b.discipline));
  }, []);
  const classes = useMemo(
    () => ALL_CLASSES.filter((c) => isPsionicSource(c.source)).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const prestige = useMemo(
    () => ALL_PRESTIGE_CLASSES.filter((c) => isPsionicSource(c.source)).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const feats = useMemo(
    () => ALL_FEATS.filter((f) => isPsionicSource(f.source)).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const races = useMemo(
    () => ALL_RACES.filter((r) => isPsionicSource(r.source)).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const items = useMemo(
    () => ALL_MAGIC_ITEMS.filter((i) => isPsionicSource(i.source)).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const equipment = useMemo(
    () => ALL_EQUIPMENT.filter((i) => isPsionicSource(i.source)).sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  const buildClassIds = useMemo(() => build.classLevels.map((c) => c.classId), [build.classLevels]);
  const hasPsionics = buildHasPsionics(build);

  // The prestige gate, judged by the same evaluator the
  // Prestige Classes step uses, with the build's own
  // certifications — a psionic prestige class is addable here
  // only when it is selectable there.
  const prestigeGates = useMemo(() => {
    const ctx = buildPrereqContext(resolved);
    const gates = new Map<string, PrestigeGateResult>();
    for (const cls of prestige) {
      gates.set(cls.id, evaluatePrestigeClass(cls, ctx, build.prestigePrereqCertifications[cls.id] ?? []));
    }
    return gates;
  }, [prestige, resolved, build.prestigePrereqCertifications]);

  // Toggle buttons at half footprint (Shaun, 2026-11-07).
  const toggleBtnClass =
    "mt-1.5 inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-border px-2 py-0.5 text-[11px] font-medium transition-all hover:bg-muted";

  const renderPower = (power: SpellDefinition) => {
    const off = isApocDisabledPower(power);
    const matched = off ? [] : manifesterClassIdsFor(power, buildClassIds);
    const selectedClass = matched.find((cid) => (build.selectedSpells?.[cid] ?? []).includes(power.id));
    const isSelected = selectedClass !== undefined;
    const levelLine = Object.entries(power.levels)
      .map(([list, lvl]) => `${list} ${lvl}`)
      .join(", ");
    return (
      <div
        key={power.id}
        className={`rounded-md border border-card-border bg-muted/40 p-2.5 ${off ? "opacity-50" : ""}`}
        data-testid={`psionics-power-${power.id}`}
      >
        <p className="font-display text-xs font-semibold uppercase tracking-wide">
          {power.name} — {levelLine}
        </p>
        <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{power.summary}</p>
        {off ? (
          <p className="mt-1.5 text-xs font-medium text-destructive">
            Does not work in APOC — psychoportation that breaches the world&apos;s boundaries fails.
          </p>
        ) : matched.length > 0 ? (
          <button
            type="button"
            className={toggleBtnClass}
            data-testid={`psionics-power-toggle-${power.id}`}
            onClick={() => {
              if (isSelected) {
                for (const cid of matched) {
                  if ((build.selectedSpells?.[cid] ?? []).includes(power.id)) onToggleSpell(cid, power.id, false);
                }
              } else {
                onToggleSpell(matched[0], power.id, true);
              }
            }}
          >
            {isSelected ? "Remove" : "Add"}
          </button>
        ) : null}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-start gap-x-4 gap-y-1">
          <CardTitle className="font-display text-xl">Psionics</CardTitle>
          {/* The verbiage sits NEXT TO the header (Shaun,
              2026-11-07, same pattern as the other steps): the
              note moved up beside the title, wording unchanged;
              everything below pulls up into the space it left. */}
          {!hasPsionics && (
            <CardDescription className="min-w-0 flex-1 basis-72">
              This build has no psionic class, so the step is grayed in the step list — it still opens for reference, and the gray lifts when a psionic class is on the build.
            </CardDescription>
          )}
        </div>
      </CardHeader>
      {/* The nests stand THREE across (Shaun, 2026-11-07:
          "No, three by three. Sorry." — his final word on the
          grid, superseding his four-by-four and six-by-six
          tries on the same call): footprints cut down, filled
          in order, instead of one tall stack. An opened nest
          spans the whole row so its contents stay readable —
          the same expand-to-full pattern the Equipment
          category boxes use. */}
      <CardContent>
        <Zone zoneId="psionics-nests" className="grid grid-cols-2 items-start gap-2 lg:grid-cols-3">
        <NestBlock id="psionics-rules" pieceId="psionics-rules" label="Psionics in APOC — the Rules">
          <div className="rounded-md border border-card-border bg-muted/40 p-2.5" data-testid="psionics-rules-card">
            <p className="text-sm leading-snug text-muted-foreground">
              Everything psionic in one step — the powers, the manifesting classes and prestige classes, the feats, the
              races, and the psionic items and equipment from the Expanded Psionics Handbook and Complete Psionic. The
              powers also live in the ordinary Spells step. Psionics–magic transparency is in force in APOC: spell
              resistance is power resistance, dispel magic works on powers, and dispel psionics works on spells.
            </p>
          </div>
        </NestBlock>

        <NestBlock id="psionics-powers" pieceId="psionics-powers" label="Powers" subZoneId="psionics-powers-sub">
          {powersByDiscipline.map(({ discipline, list }) => (
            <SubNest
              key={discipline}
              id={`psionics-powers-${discipline.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              pieceId={`psionics-powers-${discipline.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              label={`${discipline} — ${list.length}`}
            >
              {list.map(renderPower)}
            </SubNest>
          ))}
        </NestBlock>

        <NestBlock id="psionics-classes" pieceId="psionics-classes" label="Classes">
          {classes.map((c) => {
            const current = build.classLevels.find((x) => x.classId === c.id);
            const isDisabled = build.disabledClassIds.includes(c.id);
            return (
              <div key={c.id} className="rounded-md border border-card-border bg-muted/40 p-2.5" data-testid={`psionics-class-${c.id}`}>
                <p className="font-display text-xs font-semibold uppercase tracking-wide">
                  {c.name} — Hit Die {c.hitDie}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                  {c.skillPointsPerLevel} + Int skill points per level. ({c.source})
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    className="h-6 w-6"
                    disabled={!current || isDisabled}
                    onClick={() => onRemoveClass(c.id)}
                    data-testid={`psionics-class-remove-${c.id}`}
                    aria-label={`Remove a level of ${c.name}`}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="font-mono text-xs text-muted-foreground">Lv {current?.levels ?? 0}</span>
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    className="h-6 w-6"
                    disabled={(current?.levels ?? 0) >= 10 || isDisabled}
                    onClick={() => onAddClass(c.id)}
                    data-testid={`psionics-class-add-${c.id}`}
                    aria-label={`Add a level of ${c.name}`}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            );
          })}
        </NestBlock>

        <NestBlock id="psionics-prestige" pieceId="psionics-prestige" label="Prestige Classes">
          {prestige.map((c) => {
            const current = build.prestigeClassLevels.find((x) => x.classId === c.id);
            const gate = prestigeGates.get(c.id);
            const blocked = !(gate?.selectable ?? true);
            const isDisabled = build.disabledClassIds.includes(c.id);
            return (
              <div key={c.id} className="rounded-md border border-card-border bg-muted/40 p-2.5" data-testid={`psionics-prestige-${c.id}`}>
                <p className="font-display text-xs font-semibold uppercase tracking-wide">
                  {c.name} — Hit Die {c.hitDie}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                  Prerequisites judged exactly as in the Prestige Classes step. ({c.source})
                </p>
                {blocked && !current ? (
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Locked — meet the prerequisites to take this class; the Prestige Classes step shows what is
                    missing and takes any certifications.
                  </p>
                ) : (
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      className="h-6 w-6"
                      disabled={!current}
                      onClick={() => onRemovePrestige(c.id)}
                      data-testid={`psionics-prestige-remove-${c.id}`}
                      aria-label={`Remove a level of ${c.name}`}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-mono text-xs text-muted-foreground">Lv {current?.levels ?? 0}</span>
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      className="h-6 w-6"
                      disabled={(current?.levels ?? 0) >= 10 || isDisabled || blocked}
                      onClick={() => onAddPrestige(c.id)}
                      data-testid={`psionics-prestige-add-${c.id}`}
                      aria-label={`Add a level of ${c.name}`}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </NestBlock>

        <NestBlock id="psionics-feats" pieceId="psionics-feats" label="Feats">
          {feats.map((f) => {
            const selected = build.featIds.includes(f.id);
            const isDisabled = build.disabledFeatIds.includes(f.id);
            return (
              <div key={f.id} className="rounded-md border border-card-border bg-muted/40 p-2.5" data-testid={`psionics-feat-${f.id}`}>
                <p className="font-display text-xs font-semibold uppercase tracking-wide">{f.name}</p>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{f.benefitSummary}</p>
                {!isDisabled && (
                  <button
                    type="button"
                    className={toggleBtnClass}
                    data-testid={`psionics-feat-toggle-${f.id}`}
                    onClick={() => onToggleFeat(f.id, !selected)}
                  >
                    {selected ? "Remove" : "Add"}
                  </button>
                )}
              </div>
            );
          })}
        </NestBlock>

        <NestBlock id="psionics-races" pieceId="psionics-races" label="Races">
          {races.map((race) => (
            <div key={race.id} className="rounded-md border border-card-border bg-muted/40 p-2.5" data-testid={`psionics-race-${race.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {race.name} — {race.size} {race.type}
                {race.levelAdjustment ? `, LA +${race.levelAdjustment}` : ""}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                Speed {race.baseSpeed} ft.
                {race.favoredClass ? ` Favored class: ${race.favoredClass}.` : ""} Picked like any other race in
                the Race step.
              </p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="psionics-items" pieceId="psionics-items" label="Psionic Items">
          {items.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-2.5" data-testid={`psionics-item-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.summary}</p>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="mt-1.5 h-6 px-2 text-[11px]"
                onClick={() => onAddInventory("magic-item", item.id)}
                data-testid={`psionics-item-add-${item.id}`}
              >
                Add
              </Button>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="psionics-equipment" pieceId="psionics-equipment" label="Equipment">
          {equipment.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-2.5" data-testid={`psionics-equipment-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.notes}</p>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="mt-1.5 h-6 px-2 text-[11px]"
                onClick={() => onAddInventory("equipment", item.id)}
                data-testid={`psionics-equipment-add-${item.id}`}
              >
                Add
              </Button>
            </div>
          ))}
        </NestBlock>
        </Zone>
      </CardContent>
    </Card>
  );
}
