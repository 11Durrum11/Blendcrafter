import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import type { ResolvedCharacter } from "@/engine/types";
import { ABILITY_KEYS, ABILITY_LABEL } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AuditTrail } from "@/components/audit-trail";
import { cn } from "@/lib/utils";
import { downloadInteractiveSheet, fillInteractiveSheet } from "@/lib/interactive-sheet";

interface StepSheetProps {
  character: ResolvedCharacter;
}

function fmtMod(n: number | null) {
  if (n === null) return "—";
  return n >= 0 ? `+${n}` : `${n}`;
}

export function StepSheet({ character }: StepSheetProps) {
  const {
    abilityScores,
    ac,
    bab,
    attack,
    initiative,
    saves,
    hp,
    cr,
    levelAdjustment,
    ecl,
    features,
    size,
    type,
    subtypes,
    speed,
    race,
    appliedTemplates,
    validation,
    skillPoints,
    skills,
    featSlots,
    selectedFeats,
    inventory,
  } = character;

  const errors = validation.filter((v) => v.severity === "error");

  /* Sheet format choice: the built-in sheet, or the
     interactive PDF he supplied — filled with this build's numbers, its
     own calculation scripts stripped. Remembered per device. */
  const [sheetFormat, setSheetFormat] = useState<"builtin" | "pdf">(() =>
    typeof window !== "undefined" &&
    window.localStorage.getItem("blendcrafter:sheet-format") === "pdf"
      ? "pdf"
      : "builtin",
  );
  const [sheetBusy, setSheetBusy] = useState(false);
  const [sheetError, setSheetError] = useState<string | null>(null);
  /* When the Interactive sheet is chosen, it is SHOWN in the page, not
     just offered as a download (Shaun, 2026-11-04: "When clicked, show
     the interactive character sheet"). The preview is the same filled,
     neutralized file the download button saves. */
  const [sheetUrl, setSheetUrl] = useState<string | null>(null);
  const [previewBusy, setPreviewBusy] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  /* One sheet at a time (Shaun, 2026-11-07): the preview shows a
     single page of the filled sheet, whole, with no scrolling;
     the arrow buttons flanking it turn to the next / previous
     sheet. The filled file's bytes are kept and each page is
     cut out of them on its own as it is shown. The Open /
     Download buttons still hand over the complete interactive
     file, every page, fully editable. */
  const [sheetBytes, setSheetBytes] = useState<Uint8Array | null>(null);
  const [sheetPageCount, setSheetPageCount] = useState(0);
  const [sheetPage, setSheetPage] = useState(1);
  /* Shaun, 2026-11-11: the character sheet is reduced to its
     section headers until clicked — every section card shows
     its title only; its description and contents open on
     click. The validation-errors block stays visible: it is a
     warning, not verbiage. */
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const toggleSection = (id: string) =>
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const sectionToggle = (id: string, label: string) => (
    <button
      type="button"
      onClick={() => toggleSection(id)}
      className="shrink-0 rounded-full p-0.5 text-muted-foreground hover-elevate hover:text-foreground"
      aria-label={openSections.has(id) ? `Collapse ${label}` : `Expand ${label}`}
      aria-expanded={openSections.has(id)}
      data-testid={`button-expand-sheet-${id}`}
    >
      <ChevronDown className={cn("h-4 w-4 transition-transform", openSections.has(id) && "rotate-180")} />
    </button>
  );
  const pageUrlsRef = useRef<string[]>([]);
  useEffect(() => {
    if (sheetFormat !== "pdf") {
      setSheetBytes(null);
      setSheetPageCount(0);
      setSheetUrl(null);
      return;
    }
    let cancelled = false;
    setPreviewBusy(true);
    setPreviewError(null);
    fillInteractiveSheet(character)
      .then(async (bytes) => {
        if (cancelled) return;
        const { PDFDocument } = await import("pdf-lib");
        const doc = await PDFDocument.load(bytes as Uint8Array);
        if (cancelled) return;
        setSheetBytes(bytes);
        setSheetPageCount(doc.getPageCount());
        setSheetPage(1);
      })
      .catch(() => {
        if (!cancelled) {
          setPreviewError(
            "The sheet could not be built just now. The built-in sheet above still has everything.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setPreviewBusy(false);
      });
    return () => {
      cancelled = true;
    };
  }, [sheetFormat, character]);
  useEffect(() => {
    if (!sheetBytes || sheetPageCount === 0) return;
    let cancelled = false;
    (async () => {
      const { PDFDocument } = await import("pdf-lib");
      const doc = await PDFDocument.load(sheetBytes);
      const one = await PDFDocument.create();
      const [pg] = await one.copyPages(doc, [Math.min(sheetPage, sheetPageCount) - 1]);
      one.addPage(pg);
      const bytes = await one.save();
      if (cancelled) return;
      const url = URL.createObjectURL(
        new Blob([bytes as BlobPart], { type: "application/pdf" }),
      );
      pageUrlsRef.current.push(url);
      setSheetUrl(url);
    })().catch(() => {
      if (!cancelled) {
        setPreviewError(
          "That sheet page could not be shown just now. The Download button still has the whole sheet.",
        );
      }
    });
    return () => {
      cancelled = true;
    };
  }, [sheetBytes, sheetPage, sheetPageCount]);
  useEffect(() => {
    const urls = pageUrlsRef.current;
    return () => {
      urls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, []);
  const [openBusy, setOpenBusy] = useState(false);
  const [openError, setOpenError] = useState<string | null>(null);
  /* Open the sheet (Shaun, 2026-11-05: "The open button on the
     character sheet on the phone is not working"). The old control
     was a link to the preview's blob URL with target="_blank" —
     on a phone that tap goes nowhere: a new tab cannot load
     another page's blob URL, and the URL is revoked and rebuilt
     on every build change besides. The Open button instead fills
     the sheet fresh at tap time and hands the file over through
     the same anchor-download path the Download button uses,
     which is the route that works on a phone: the file lands
     and the phone's PDF app opens it, every box still editable. */
  const handleOpenSheet = async () => {
    setOpenBusy(true);
    setOpenError(null);
    try {
      await downloadInteractiveSheet(character);
    } catch {
      setOpenError(
        "The sheet could not be built just now. The built-in sheet above still has everything.",
      );
    } finally {
      setOpenBusy(false);
    }
  };
  const chooseFormat = (format: "builtin" | "pdf") => {
    setSheetFormat(format);
    try {
      window.localStorage.setItem("blendcrafter:sheet-format", format);
    } catch {
      /* storage unavailable — the choice still applies for this visit */
    }
  };
  /* The Sheet format toggle lives up beside the Character Sheet
     heading (Shaun, 2026-11-07) — a compact inline control in the
     sheet card's own header, not a card of its own above it; the
     space its card used to take is closed up. */
  const sheetFormatToggle = (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        type="button"
        size="sm"
        variant={sheetFormat === "builtin" ? "default" : "outline"}
        onClick={() => chooseFormat("builtin")}
        data-testid="button-sheet-format-builtin"
      >
        Built-in sheet
      </Button>
      <Button
        type="button"
        size="sm"
        variant={sheetFormat === "pdf" ? "default" : "outline"}
        onClick={() => chooseFormat("pdf")}
        data-testid="button-sheet-format-pdf"
      >
        Interactive sheet (PDF)
      </Button>
    </div>
  );

  if (sheetFormat === "pdf") {
    return (
      <div className="space-y-1.5" data-testid="character-sheet">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <CardTitle className="font-display text-2xl">
                  {character.build.name} — Interactive Sheet
                </CardTitle>
                <CardDescription>
                  The classic character sheet, filled in from this build — with extra pages at
                  the back for the personality and campaign details the classic sheet has no
                  room for.
                </CardDescription>
              </div>
              {sheetFormatToggle}
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-[13px] leading-5 text-muted-foreground">
              Every number on it is this builder&apos;s number. The sheet&apos;s own built-in
              calculation scripts are removed from this copy, so nothing inside the
              file can recompute over your build — and every box stays editable by hand
              afterward, for the notes and changes you make at the table.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                disabled={openBusy}
                onClick={handleOpenSheet}
                data-testid="button-open-interactive-sheet"
              >
                {openBusy ? "Filling in your sheet…" : "Open the sheet"}
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={sheetBusy}
                onClick={async () => {
                  setSheetBusy(true);
                  setSheetError(null);
                  try {
                    await downloadInteractiveSheet(character);
                  } catch {
                    setSheetError(
                      "The sheet could not be built just now. The built-in sheet above still has everything.",
                    );
                  } finally {
                    setSheetBusy(false);
                  }
                }}
                data-testid="button-download-interactive-sheet"
              >
                {sheetBusy ? "Filling in your sheet…" : "Download the filled sheet (PDF)"}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              On a phone, Open hands the sheet to your PDF app — every box on it stays
              editable there.
            </p>
            {openError ? (
              <p className="text-sm text-destructive" data-testid="interactive-sheet-open-error">
                {openError}
              </p>
            ) : null}
            {sheetError ? (
              <p className="text-sm text-destructive" data-testid="interactive-sheet-error">
                {sheetError}
              </p>
            ) : null}
            {previewBusy && !sheetUrl ? (
              <p className="text-sm text-muted-foreground" data-testid="interactive-sheet-loading">
                Filling in your sheet…
              </p>
            ) : null}
            {previewError ? (
              <p className="text-sm text-destructive" data-testid="interactive-sheet-preview-error">
                {previewError}
              </p>
            ) : null}
            {sheetUrl ? (
              /* No sidebar, one sheet at a time (Shaun, 2026-11-07):
                 the preview frame shows a single sheet page, whole
                 (view=Fit — no scrolling inside the frame), with
                 the viewer's navigation sidebar switched off
                 (navpanes=0). The arrow buttons flanking the frame
                 turn to the previous / next sheet. */
              <div className="relative ml-[calc(50%-50vw)] w-screen">
                <iframe
                  src={`${sheetUrl}#navpanes=0&view=Fit`}
                  title="Interactive character sheet"
                  className="h-[100dvh] w-full rounded-md border border-card-border bg-white"
                  data-testid="interactive-sheet-viewer"
                />
                <button
                  type="button"
                  onClick={() => setSheetPage((n) => Math.max(1, n - 1))}
                  disabled={sheetPage <= 1}
                  aria-label="Previous sheet"
                  data-testid="button-sheet-prev"
                  className="opaque-surface absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-card-border p-1.5 shadow-md transition-opacity disabled:opacity-40"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => setSheetPage((n) => Math.min(sheetPageCount, n + 1))}
                  disabled={sheetPage >= sheetPageCount}
                  aria-label="Next sheet"
                  data-testid="button-sheet-next"
                  className="opaque-surface absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-card-border p-1.5 shadow-md transition-opacity disabled:opacity-40"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            ) : null}
            {sheetUrl && sheetPageCount > 0 ? (
              <p className="text-center text-sm text-muted-foreground" data-testid="sheet-page-indicator">
                Sheet {sheetPage} of {sheetPageCount} — the arrows beside the sheet turn its pages.
              </p>
            ) : null}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-1.5" data-testid="character-sheet">
      <Card>
        <CardHeader className="pb-3 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle className="font-display text-2xl">{character.build.name}</CardTitle>
              <CardDescription>
                {size} {type}
                {subtypes.length > 0 ? ` (${subtypes.join(", ")})` : ""} · Base creature: {race.name}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {appliedTemplates.map((t) => (
                <Badge key={t.id} variant="secondary" data-testid={`sheet-template-badge-${t.id}`}>
                  {t.name}
                </Badge>
              ))}
            </div>
            {sheetFormatToggle}
          </div>
          {sectionToggle("overview", "How to read this sheet")}
          {openSections.has("overview") && (
            <>
          <p className="text-[13px] leading-5 text-muted-foreground">
            <span className="font-medium text-foreground">How to read this sheet.</span> This is your finished
            character, top to bottom — what you are, how hard you are to hit, how you attack, how you resist,
            how fast you move, what you can do, and what you&apos;re carrying. Every boxed number on this page
            opens: tap one and it lists, in order, everything that added up to it — race, class, feats, gear —
            so no number here is a mystery.
          </p>
          <p className="mt-1 text-[13px] leading-5 text-muted-foreground">
            <span className="font-medium text-foreground">Challenge Rating</span> is how dangerous this character is
            as an opponent. <span className="font-medium text-foreground">Level Adjustment</span> is the price of a
            powerful race or template, paid in levels instead of power.{" "}
            <span className="font-medium text-foreground">Effective Character Level</span> — class levels plus level
            adjustment — is the level the game treats you as for experience, treasure, and what you can handle.
          </p>
            </>
          )}
        </CardHeader>
        {errors.length > 0 && (
          <CardContent>
            <div className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive" data-testid="sheet-validation-errors">
              <p className="font-medium">Unresolved template prerequisite issues:</p>
              <ul className="mt-1 list-inside list-disc">
                {errors.map((e, i) => (
                  <li key={i}>{e.message}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        )}
      </Card>

      <Card>
        <CardHeader className="pb-2 pt-4">
          <div className="flex flex-wrap items-start gap-x-4 gap-y-1">
            <CardTitle className="shrink-0 font-display text-lg">Ability Scores</CardTitle>
            {sectionToggle("abilities", "Ability Scores")}
            {openSections.has("abilities") && (
            <CardDescription className="min-w-0 flex-1">
            Your six core abilities. The big number is the score; the number in parentheses is its modifier —
            the part you actually add to rolls, checks, and everything the score feeds. Strength is muscle and
            melee, Dexterity is agility and aim, Constitution is health and endurance, Intelligence is learning
            and reasoning, Wisdom is awareness and willpower, Charisma is presence and influence. Tap any score
            to see what raised or lowered it.
            </CardDescription>
            )}
          </div>
        </CardHeader>
{openSections.has("abilities") && (
        <CardContent className="pb-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {ABILITY_KEYS.map((key) => {
              const score = abilityScores[key];
              return (
                <AuditTrail
                  key={key}
                  label={ABILITY_LABEL[key]}
                  value={score.total === null ? "—" : `${score.total} (${fmtMod(score.modifier)})`}
                  audit={score.audit}
                  data-testid={`ability-score-${key}`}
                />
              );
            })}
          </div>
        </CardContent>
        )}
      </Card>

      <div className="grid items-start gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {/* Stat bubbles (Shaun, 2026-11-07): Base Attack &
            Hit Points on the LEFT spanning the band, Armor
            Class to its RIGHT, Saving Throws BELOW Armor
            Class, and the Challenge Rating / Level Adjustment
            / Effective Character Level bubbles stacked in
            the right-hand column beside the Saving Throws.
            Armor Class and Saving Throws are both shrunk to
            fit their contents. Contents, values, and
            behaviour unchanged — positions only. */}
        <Card className="lg:row-span-2">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="font-display text-lg">Base Attack &amp; Hit Points</CardTitle>
            {sectionToggle("babhp", "Base Attack and Hit Points")}
            {openSections.has("babhp") && (
            <CardDescription className="text-xs leading-[15px]">
              Base Attack Bonus is the backbone of every attack you make. Melee Attack adds your Strength to it,
              Ranged Attack adds your Dexterity, and Grapple is your bonus for wrestling, holding, and escaping
              holds. Initiative decides who acts first when a fight starts. Hit Points are how much damage you
              can take before you fall. Tap any of them for the full breakdown.
            </CardDescription>
            )}
          </CardHeader>
{openSections.has("babhp") && (
          <CardContent className="grid grid-cols-2 gap-2 pb-3">
            <AuditTrail label="Base Attack Bonus" value={`+${bab.total}`} audit={bab.audit} />
            <AuditTrail label="Melee Attack" value={fmtMod(attack.melee.total)} audit={attack.melee.audit} data-testid="attack-melee" />
            <AuditTrail label="Ranged Attack" value={fmtMod(attack.ranged.total)} audit={attack.ranged.audit} data-testid="attack-ranged" />
            <AuditTrail label="Grapple" value={fmtMod(attack.grapple.total)} audit={attack.grapple.audit} data-testid="attack-grapple" />
            <AuditTrail label="Initiative" value={fmtMod(initiative.total)} audit={initiative.audit} data-testid="initiative" />
            <AuditTrail label="Hit Points" value={hp.total} audit={hp.audit} />
          </CardContent>
        )}
        </Card>

        {/* Armor Class fits its content too (Shaun,
            2026-11-07: "So is the armor class") — h-fit plus
            the tightened header, like Saving Throws. */}
        <Card className="h-fit lg:col-start-2">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="font-display text-lg">Armor Class</CardTitle>
            {sectionToggle("ac", "Armor Class")}
            {openSections.has("ac") && (
            <CardDescription className="text-xs leading-[15px]">
              How hard you are to hit: an attacker&apos;s roll must meet or beat this number. Touch {ac.touch} is
              your AC against attacks that only need to touch you, ignoring armor. Flat-footed {ac.flatFooted}{" "}
              is your AC when you&apos;re caught unprepared and can&apos;t dodge yet. The boxes below are every
              piece that builds the total.
            </CardDescription>
            )}
          </CardHeader>
{openSections.has("ac") && (
          <CardContent className="flex items-start gap-2 pb-3">
            <AuditTrail label="Total AC" className="w-36 shrink-0" value={ac.total} audit={ac.audit} />
            <div className="grid flex-1 grid-cols-3 gap-2">
              {Object.entries(ac.components).map(([key, comp]) => (
                <div key={key} className="rounded-md border border-card-border bg-card px-2.5 py-1.5 text-xs" data-testid={`ac-component-${key}`}>
                  <span className="capitalize text-muted-foreground">{key.replace("-", " ")}</span>{" "}
                  <span className="font-mono font-medium text-foreground">{comp.value >= 0 ? "+" : ""}{comp.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        )}
        </Card>

        {/* Saving Throws fits its content (Shaun,
            2026-11-07: "that whole bottom half is blank") —
            h-fit plus the tightened header; the band grid is
            items-start so no bubble stretches into dead
            space. */}
        <Card className="h-fit lg:col-start-2 lg:row-start-2">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="font-display text-lg">Saving Throws</CardTitle>
            {sectionToggle("saves", "Saving Throws")}
            {openSections.has("saves") && (
            <CardDescription className="text-xs leading-[15px]">
              The three rolls you make to resist harm. Fortitude withstands poison, disease, and anything that
              attacks the body; Reflex dodges explosions, pits, and traps; Will resists charms, fear, and mind
              control. Higher is better — tap one to see what it&apos;s made of.
            </CardDescription>
            )}
          </CardHeader>
{openSections.has("saves") && (
          <CardContent className="grid grid-cols-3 gap-2 pb-3">
            <AuditTrail label="Fortitude" value={fmtMod(saves.fort.total)} audit={saves.fort.audit} />
            <AuditTrail label="Reflex" value={fmtMod(saves.ref.total)} audit={saves.ref.audit} />
            <AuditTrail label="Will" value={fmtMod(saves.will.total)} audit={saves.will.audit} />
          </CardContent>
        )}
        </Card>

        {/* CR / LA / ECL stacked beside the Saving Throws
            (Shaun, 2026-11-07) — moved up from the
            three-across row that used to sit below the
            explanatory paragraph; the paragraph itself stays
            below the band as the sheet's legend. */}
        <div className="flex flex-col justify-center gap-2 lg:col-start-3 lg:row-span-2">
          <AuditTrail label="Challenge Rating" value={cr.value} audit={cr.audit} />
          <AuditTrail label="Level Adjustment" value={levelAdjustment.current} audit={levelAdjustment.audit} />
          <AuditTrail label="Effective Character Level" value={ecl.value} audit={ecl.audit} />
        </div>
      </div>

      {/* Five blocks halved and grouped (Shaun, 2026-11-07:
          "Cut the speed bubble in half, the special attacks
          bubble in half, and the skills in half and the feats
          in half and the inventory in half. Stack them all up
          next to each other."): Speed, Special Attacks,
          Skills, Feats, and Inventory stand side by side at
          half width in one group; every content and value
          inside them is unchanged. */}
      <div className="grid items-start gap-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="font-display text-lg">Speed</CardTitle>
          {sectionToggle("speed", "Speed")}
          {openSections.has("speed") && (
          <CardDescription className="text-xs leading-[15px]">
            How far you can move with one move action, by movement type. Land is ordinary walking and running;
            other badges appear only when you have that kind of movement — fly, swim, burrow, climb. Heavy
            armor and heavy loads can cut the land number down.
          </CardDescription>
          )}
        </CardHeader>
{openSections.has("speed") && (
        <CardContent className="pb-3">
          <div className="flex flex-wrap items-start gap-2">
          <AuditTrail label="Land Speed" value={`${speed.base} ft.`} audit={character.speedAudit} className="w-44 shrink-0" data-testid="speed-land" />
          <div className="flex flex-1 flex-wrap gap-2 text-sm">
            {Object.entries(speed).map(([key, value]) => (
              <Badge key={key} variant="outline" className="capitalize">
                {key}: {value} ft.
              </Badge>
            ))}
          </div>
          </div>
        </CardContent>
        )}
      </Card>

      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="font-display text-lg">Special Attacks, Qualities &amp; Traits</CardTitle>
          {sectionToggle("special", "Special Attacks, Qualities and Traits")}
          {openSections.has("special") && (
          <CardDescription className="text-xs leading-[15px]">
            Everything special about this character, merged from race, class, and every applied template.
            Special attacks are things you actively do to enemies; special qualities are passive properties of
            your body and mind that are simply always true; feats and traits listed here were granted to you
            rather than chosen. Each entry names the book it came from.
          </CardDescription>
          )}
        </CardHeader>
{openSections.has("special") && (
        <CardContent className="pb-3">
          <div className="space-y-3">
            {(["special-attack", "special-quality", "feat", "trait"] as const).map((cat) => {
              const items = features.filter((f) => f.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {cat.replace("-", " ")}
                  </h4>
                  <ul className="space-y-1.5">
                    {items.map((f) => (
                      <li key={f.key} className="rounded-md border border-card-border bg-card p-2.5 text-sm" data-testid={`feature-${f.key}`}>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-medium text-foreground">{f.name}</span>
                          <a href={f.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 text-xs text-primary underline underline-offset-2">
                            {f.source}
                          </a>
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">{f.description}</p>
                        {f.dcFormula && <p className="mt-0.5 text-xs font-mono text-foreground/70">DC: {f.dcFormula}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </CardContent>
        )}
      </Card>

      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="font-display text-lg">Skills</CardTitle>
          {sectionToggle("skills", "Skills")}
          {openSections.has("skills") && (
          <CardDescription className="text-xs leading-[15px]">
            <span className="block">
              Every skill you&apos;ve put ranks in, showing the total you&apos;d add to a d20 roll for it. (class)
              marks the skills your classes teach; the rest are cross-class. Tap a skill to see its ranks,
              ability modifier, and bonuses itemized. The line below is your skill-point budget: spent versus
              earned.
            </span>
            <AuditTrail label="Skill Points" value={`${skillPoints.spent} / ${skillPoints.total} spent`} audit={skillPoints.audit} className="mt-2" />
          </CardDescription>
          )}
        </CardHeader>
{openSections.has("skills") && (
        <CardContent className="pb-3">
          {skills.filter((s) => s.ranks > 0).length === 0 ? (
            <p className="text-sm text-muted-foreground">No skill ranks allocated yet.</p>
          ) : (
            <div className="grid gap-2 sm:grid-cols-2">
              {skills
                .filter((s) => s.ranks > 0)
                .map((s) => (
                  <AuditTrail
                    key={s.id}
                    label={`${s.name}${s.isClassSkill ? " (class)" : ""}`}
                    value={fmtMod(s.total)}
                    audit={s.audit}
                    data-testid={`sheet-skill-${s.id}`}
                  />
                ))}
            </div>
          )}
        </CardContent>
        )}
      </Card>

      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="font-display text-lg">Feats</CardTitle>
          {sectionToggle("feats", "Feats")}
          {openSections.has("feats") && (
          <CardDescription className="text-xs leading-[15px]">
            <span className="block">
              The permanent special abilities this character has learned or been granted — each one lists what
              it does under its name. The line below is your feat budget: how many you&apos;ve used of the total
              you may pick.
            </span>
            <AuditTrail label="Feat Slots" value={`${featSlots.used} / ${featSlots.total} used`} audit={featSlots.audit} className="mt-2" />
          </CardDescription>
          )}
        </CardHeader>
{openSections.has("feats") && (
        <CardContent className="pb-3">
          {selectedFeats.length === 0 ? (
            <p className="text-sm text-muted-foreground">No feats selected yet.</p>
          ) : (
            <ul className="space-y-1.5">
              {selectedFeats.map((f) => (
                <li key={f.id} className="rounded-md border border-card-border bg-card p-2.5 text-sm" data-testid={`sheet-feat-${f.id}`}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">{f.name}</span>
                    <a href={f.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 text-xs text-primary underline underline-offset-2">
                      {f.source}
                    </a>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{f.benefitSummary}</p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        )}
      </Card>

      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="font-display text-lg">Inventory</CardTitle>
          {sectionToggle("inventory", "Inventory")}
          {openSections.has("inventory") && (
          <CardDescription className="text-xs leading-[15px]">
            Everything this character owns and carries. Anything marked Equipped is already counted where it
            belongs — equipped armor and shields are inside your Armor Class at the top of this sheet.
          </CardDescription>
          )}
        </CardHeader>
{openSections.has("inventory") && (
        <CardContent className="pb-3">
          {inventory.length === 0 ? (
            <p className="text-sm text-muted-foreground">Inventory is empty.</p>
          ) : (
            <ul className="space-y-1.5">
              {inventory.map((ri) => (
                <li key={ri.entry.id} className="rounded-md border border-card-border bg-card p-2.5 text-sm" data-testid={`sheet-inventory-${ri.entry.id}`}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">
                      {ri.name} {ri.entry.equipped ? <Badge variant="secondary" className="ml-1 text-[10px]">Equipped</Badge> : null}
                    </span>
                    <a href={ri.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 text-xs text-primary underline underline-offset-2">
                      Source
                    </a>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{ri.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        )}
      </Card>
      </div>
    </div>
  );
}
