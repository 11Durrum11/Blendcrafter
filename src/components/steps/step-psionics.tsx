import { useMemo, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ALL_CLASSES, ALL_EQUIPMENT, ALL_FEATS, ALL_MAGIC_ITEMS, ALL_PRESTIGE_CLASSES, ALL_RACES, ALL_SPELLS } from "@/data";
import type { CharacterBuild, SpellDefinition } from "@/engine/types";
import { isApocDisabledPower } from "@/lib/apoc-disabled";

/**
 * Psionics (Shaun, 2026-11-04): its own step inside Character
 * Creation — step 10, between Magic Items and Inventory
 * ("make the psionics number ten... So inventory will become
 * 11, personality become number 12 and character sheet will
 * become 13"). Everything psionic sits in this step under
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

function NestBlock({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <details id={id} className="sj-nest rounded-md border border-border" data-testid={`psionics-block-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2.5 font-display text-sm font-semibold [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-4 w-4 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="grid gap-3 p-3 pt-0 sm:grid-cols-2">{children}</div>
    </details>
  );
}

function SubNest({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <details id={id} className="sj-nest col-span-full rounded-md border border-border/70 bg-muted/20" data-testid={`psionics-subnest-${id}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 px-2.5 py-2 font-display text-xs font-semibold uppercase tracking-wide [&::-webkit-details-marker]:hidden">
        <ChevronRight className="sj-chevron h-3.5 w-3.5 shrink-0 transition-transform" />
        {label}
      </summary>
      <div className="grid gap-3 p-2.5 pt-0 sm:grid-cols-2">{children}</div>
    </details>
  );
}

export function StepPsionics({
  build,
  onToggleSpell,
}: {
  build: CharacterBuild;
  onToggleSpell: (classId: string, spellId: string, selected: boolean) => void;
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
        className={`rounded-md border border-card-border bg-muted/40 p-3 ${off ? "opacity-50" : ""}`}
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
            className="mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-border px-2.5 py-1 text-xs font-medium transition-all hover:bg-muted"
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
      <CardHeader>
        <CardTitle className="font-display text-xl">Psionics</CardTitle>
        {!hasPsionics && (
          <CardDescription>
            This build has no psionic class, so the step is grayed in the step list — it still opens for reference, and the gray lifts when a psionic class is on the build.
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        <NestBlock id="psionics-rules" label="Psionics in APOC — the Rules">
          <div className="rounded-md border border-card-border bg-muted/40 p-3 sm:col-span-2" data-testid="psionics-rules-card">
            <p className="text-sm leading-snug text-muted-foreground">
              Everything psionic in one step — the powers, the manifesting classes and prestige classes, the feats, the
              races, and the psionic items and equipment from the Expanded Psionics Handbook and Complete Psionic. The
              powers also live in the ordinary Spells step. Psionics–magic transparency is in force in APOC: spell
              resistance is power resistance, dispel magic works on powers, and dispel psionics works on spells.
            </p>
          </div>
        </NestBlock>

        <NestBlock id="psionics-powers" label="Powers">
          {powersByDiscipline.map(({ discipline, list }) => (
            <SubNest
              key={discipline}
              id={`psionics-powers-${discipline.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              label={`${discipline} — ${list.length}`}
            >
              {list.map(renderPower)}
            </SubNest>
          ))}
        </NestBlock>

        <NestBlock id="psionics-classes" label="Classes">
          {classes.map((c) => (
            <div key={c.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`psionics-class-${c.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {c.name} — Hit Die {c.hitDie}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                {c.skillPointsPerLevel} + Int skill points per level. Picked like any other class in the Classes step. (
                {c.source})
              </p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="psionics-prestige" label="Prestige Classes">
          {prestige.map((c) => (
            <div key={c.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`psionics-prestige-${c.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {c.name} — Hit Die {c.hitDie}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                Picked like any other prestige class in the Prestige Classes step, prerequisites and all. ({c.source})
              </p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="psionics-feats" label="Feats">
          {feats.map((f) => (
            <div key={f.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`psionics-feat-${f.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">{f.name}</p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{f.benefitSummary}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="psionics-races" label="Races">
          {races.map((race) => (
            <div key={race.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`psionics-race-${race.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {race.name} — {race.size} {race.type}
                {race.levelAdjustment ? `, LA +${race.levelAdjustment}` : ""}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                Speed {race.baseSpeed} ft.
                {race.favoredClass ? ` Favored class: ${race.favoredClass}.` : ""} Picked like any other race in
                Abilities &amp; Race.
              </p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="psionics-items" label="Psionic Items">
          {items.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`psionics-item-${item.id}`}>
              <p className="font-display text-xs font-semibold uppercase tracking-wide">
                {item.name} — {item.cost}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.summary}</p>
            </div>
          ))}
        </NestBlock>

        <NestBlock id="psionics-equipment" label="Equipment">
          {equipment.map((item) => (
            <div key={item.id} className="rounded-md border border-card-border bg-muted/40 p-3" data-testid={`psionics-equipment-${item.id}`}>
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
