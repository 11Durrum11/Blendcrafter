import { useEffect, useState } from "react";
import type { ResolvedCharacter } from "@/engine/types";
import { ABILITY_KEYS, ABILITY_LABEL } from "@/engine/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AuditTrail } from "@/components/audit-trail";
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

  /* Sheet format choice (Shaun, 2026-11-04): the built-in sheet, or the
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
  useEffect(() => {
    if (sheetFormat !== "pdf") {
      setSheetUrl(null);
      return;
    }
    let cancelled = false;
    let url: string | null = null;
    setPreviewBusy(true);
    setPreviewError(null);
    fillInteractiveSheet(character)
      .then((bytes) => {
        if (cancelled) return;
        url = URL.createObjectURL(
          new Blob([bytes as BlobPart], { type: "application/pdf" }),
        );
        setSheetUrl(url);
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
      if (url) URL.revokeObjectURL(url);
    };
  }, [sheetFormat, character]);
  const chooseFormat = (format: "builtin" | "pdf") => {
    setSheetFormat(format);
    try {
      window.localStorage.setItem("blendcrafter:sheet-format", format);
    } catch {
      /* storage unavailable — the choice still applies for this visit */
    }
  };
  const sheetFormatToggle = (
    <Card>
      <CardContent className="flex flex-wrap items-center gap-3 pt-6">
        <span className="text-sm font-medium text-foreground">Sheet format:</span>
        <Button
          type="button"
          variant={sheetFormat === "builtin" ? "default" : "outline"}
          onClick={() => chooseFormat("builtin")}
          data-testid="button-sheet-format-builtin"
        >
          Built-in sheet
        </Button>
        <Button
          type="button"
          variant={sheetFormat === "pdf" ? "default" : "outline"}
          onClick={() => chooseFormat("pdf")}
          data-testid="button-sheet-format-pdf"
        >
          Interactive sheet (PDF)
        </Button>
      </CardContent>
    </Card>
  );

  if (sheetFormat === "pdf") {
    return (
      <div className="space-y-6" data-testid="character-sheet">
        {sheetFormatToggle}
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-2xl">
              {character.build.name} — Interactive Sheet
            </CardTitle>
            <CardDescription>
              The classic character sheet, filled in from this build — with extra pages at
              the back for the personality and campaign details the classic sheet has no
              room for.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-6 text-muted-foreground">
              Every number on it is this builder&apos;s number. The sheet&apos;s own built-in
              calculation scripts are removed from this copy, so nothing inside the
              file can recompute over your build — and every box stays editable by hand
              afterward, for the notes and changes you make at the table.
            </p>
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
              <iframe
                src={sheetUrl}
                title="Interactive character sheet"
                className="h-screen w-full rounded-md border border-card-border bg-white"
                data-testid="interactive-sheet-viewer"
              />
            ) : null}
            <Button
              type="button"
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
            {sheetError ? (
              <p className="text-sm text-destructive" data-testid="interactive-sheet-error">
                {sheetError}
              </p>
            ) : null}
            {sheetUrl ? (
              <p className="text-sm">
                <a
                  href={sheetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline underline-offset-2"
                  data-testid="link-open-interactive-sheet"
                >
                  Open the sheet in a new tab
                </a>{" "}
                — handy on a phone, where the built-in viewer may not show it in the page.
              </p>
            ) : null}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-testid="character-sheet">
      {sheetFormatToggle}
      <Card>
        <CardHeader>
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
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm leading-6 text-muted-foreground">
            <span className="font-medium text-foreground">How to read this sheet.</span> This is your finished
            character, top to bottom — what you are, how hard you are to hit, how you attack, how you resist,
            how fast you move, what you can do, and what you&apos;re carrying. Every boxed number on this page
            opens: tap one and it lists, in order, everything that added up to it — race, class, feats, gear —
            so no number here is a mystery.
          </p>
        </CardContent>
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
        <CardHeader>
          <CardTitle className="font-display text-lg">Ability Scores</CardTitle>
          <CardDescription>
            Your six core abilities. The big number is the score; the number in parentheses is its modifier —
            the part you actually add to rolls, checks, and everything the score feeds. Strength is muscle and
            melee, Dexterity is agility and aim, Constitution is health and endurance, Intelligence is learning
            and reasoning, Wisdom is awareness and willpower, Charisma is presence and influence. Tap any score
            to see what raised or lowered it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
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
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Armor Class</CardTitle>
            <CardDescription>
              How hard you are to hit: an attacker&apos;s roll must meet or beat this number. Touch {ac.touch} is
              your AC against attacks that only need to touch you, ignoring armor. Flat-footed {ac.flatFooted}{" "}
              is your AC when you&apos;re caught unprepared and can&apos;t dodge yet. The boxes below are every
              piece that builds the total.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <AuditTrail label="Total AC" value={ac.total} audit={ac.audit} />
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(ac.components).map(([key, comp]) => (
                <div key={key} className="rounded-md border border-card-border bg-card px-2.5 py-1.5 text-xs" data-testid={`ac-component-${key}`}>
                  <span className="capitalize text-muted-foreground">{key.replace("-", " ")}</span>{" "}
                  <span className="font-mono font-medium text-foreground">{comp.value >= 0 ? "+" : ""}{comp.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Base Attack &amp; Hit Points</CardTitle>
            <CardDescription>
              Base Attack Bonus is the backbone of every attack you make. Melee Attack adds your Strength to it,
              Ranged Attack adds your Dexterity, and Grapple is your bonus for wrestling, holding, and escaping
              holds. Initiative decides who acts first when a fight starts. Hit Points are how much damage you
              can take before you fall. Tap any of them for the full breakdown.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <AuditTrail label="Base Attack Bonus" value={`+${bab.total}`} audit={bab.audit} />
            <AuditTrail label="Melee Attack" value={fmtMod(attack.melee.total)} audit={attack.melee.audit} data-testid="attack-melee" />
            <AuditTrail label="Ranged Attack" value={fmtMod(attack.ranged.total)} audit={attack.ranged.audit} data-testid="attack-ranged" />
            <AuditTrail label="Grapple" value={fmtMod(attack.grapple.total)} audit={attack.grapple.audit} data-testid="attack-grapple" />
            <AuditTrail label="Initiative" value={fmtMod(initiative.total)} audit={initiative.audit} data-testid="initiative" />
            <AuditTrail label="Hit Points" value={hp.total} audit={hp.audit} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Saving Throws</CardTitle>
            <CardDescription>
              The three rolls you make to resist harm. Fortitude withstands poison, disease, and anything that
              attacks the body; Reflex dodges explosions, pits, and traps; Will resists charms, fear, and mind
              control. Higher is better — tap one to see what it&apos;s made of.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <AuditTrail label="Fortitude" value={fmtMod(saves.fort.total)} audit={saves.fort.audit} />
            <AuditTrail label="Reflex" value={fmtMod(saves.ref.total)} audit={saves.ref.audit} />
            <AuditTrail label="Will" value={fmtMod(saves.will.total)} audit={saves.will.audit} />
          </CardContent>
        </Card>
      </div>

      <p className="text-sm leading-6 text-muted-foreground">
        <span className="font-medium text-foreground">Challenge Rating</span> is how dangerous this character is
        as an opponent. <span className="font-medium text-foreground">Level Adjustment</span> is the price of a
        powerful race or template, paid in levels instead of power.{" "}
        <span className="font-medium text-foreground">Effective Character Level</span> — class levels plus level
        adjustment — is the level the game treats you as for experience, treasure, and what you can handle.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <AuditTrail label="Challenge Rating" value={cr.value} audit={cr.audit} />
        <AuditTrail label="Level Adjustment" value={levelAdjustment.current} audit={levelAdjustment.audit} />
        <AuditTrail label="Effective Character Level" value={ecl.value} audit={ecl.audit} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Speed</CardTitle>
          <CardDescription>
            How far you can move with one move action, by movement type. Land is ordinary walking and running;
            other badges appear only when you have that kind of movement — fly, swim, burrow, climb. Heavy
            armor and heavy loads can cut the land number down.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuditTrail label="Land Speed" value={`${speed.base} ft.`} audit={character.speedAudit} className="mb-3" data-testid="speed-land" />
          <div className="flex flex-wrap gap-3 text-sm">
            {Object.entries(speed).map(([key, value]) => (
              <Badge key={key} variant="outline" className="capitalize">
                {key}: {value} ft.
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Special Attacks, Qualities &amp; Traits</CardTitle>
          <CardDescription>
            Everything special about this character, merged from race, class, and every applied template.
            Special attacks are things you actively do to enemies; special qualities are passive properties of
            your body and mind that are simply always true; feats and traits listed here were granted to you
            rather than chosen. Each entry names the book it came from.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Skills</CardTitle>
          <CardDescription>
            <span className="block">
              Every skill you&apos;ve put ranks in, showing the total you&apos;d add to a d20 roll for it. (class)
              marks the skills your classes teach; the rest are cross-class. Tap a skill to see its ranks,
              ability modifier, and bonuses itemized. The line below is your skill-point budget: spent versus
              earned.
            </span>
            <AuditTrail label="Skill Points" value={`${skillPoints.spent} / ${skillPoints.total} spent`} audit={skillPoints.audit} className="mt-2" />
          </CardDescription>
        </CardHeader>
        <CardContent>
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
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Feats</CardTitle>
          <CardDescription>
            <span className="block">
              The permanent special abilities this character has learned or been granted — each one lists what
              it does under its name. The line below is your feat budget: how many you&apos;ve used of the total
              you may pick.
            </span>
            <AuditTrail label="Feat Slots" value={`${featSlots.used} / ${featSlots.total} used`} audit={featSlots.audit} className="mt-2" />
          </CardDescription>
        </CardHeader>
        <CardContent>
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
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Inventory</CardTitle>
          <CardDescription>
            Everything this character owns and carries. Anything marked Equipped is already counted where it
            belongs — equipped armor and shields are inside your Armor Class at the top of this sheet.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
      </Card>
    </div>
  );
}
