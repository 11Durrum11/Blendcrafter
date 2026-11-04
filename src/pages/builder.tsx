import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { ChevronLeft, ChevronRight, Download, Link2, Moon, SlidersHorizontal, Sun, Upload, UserPlus } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RulesetToggle } from "@/components/ruleset-toggle";
import { HouseRulesToggle } from "@/components/house-rules-toggle";
import { CharacterRepository } from "@/components/character-repository";
import { OglFooter } from "@/components/ogl-footer";
import { StepRace } from "@/components/steps/step-race";
import { StepClasses } from "@/components/steps/step-classes";
import { StepPrestige } from "@/components/steps/step-prestige";
import { StepSpells } from "@/components/steps/step-spells";
import { StepSkills } from "@/components/steps/step-skills";
import { StepTemplates } from "@/components/steps/step-templates";
import { StepFeats } from "@/components/steps/step-feats";
import { StepEquipment } from "@/components/steps/step-equipment";
import { StepPersonality } from "@/components/steps/step-personality";
import { StepSheet } from "@/components/steps/step-sheet";
import { StepReference } from "@/components/steps/step-reference";
import { useCharacterBuild } from "@/lib/use-character-build";
import { exportCharacterJson, importCharacterJson } from "@/lib/character-io";
import { buildShareUrl, buildTokenFromSearch, copyText, decodeBuildToken, decodeSettingsToken, settingsShareUrl, settingsTokenFromSearch } from "@/lib/build-link";
import { loadTogglePrefs, prefsFromBuild, sanitizeTogglePrefs, saveTogglePrefs } from "@/lib/toggle-prefs";
import { CAMPAIGN_DEFAULT_PREFS, CAMPAIGN_DEFAULTS_VERSION, CAMPAIGN_DEFAULTS_VERSION_KEY, isFactoryDefaultPrefs, withCampaignOffs } from "@/lib/campaign-defaults";
import { useToast } from "@/hooks/use-toast";

const STEPS = [
  { id: "race", label: "Abilities & Race", num: "1" },
  { id: "classes", label: "Classes", num: "2" },
  { id: "skills", label: "Skills", num: "3" },
  { id: "templates", label: "Templates", num: "4" },
  { id: "feats", label: "Feats", num: "5" },
  { id: "spells", label: "Spells", num: "6" },
  // Prestige classes are their own step (Shaun, 2026-11-03), and sit
  // AFTER Spells (Shaun, later the same day: "Move it after Spells
  // and renumber the steps to fit") — the prerequisite gate judges
  // skills, templates, feats and spell picks, so those steps must
  // come first for anything to register as met.
  { id: "prestige", label: "Prestige Classes", num: "7" },
  { id: "equipment", label: "Equipment", num: "8" },
  { id: "personality", label: "Personality", num: "9" },
  { id: "sheet", label: "Character Sheet", num: "10" },
  { id: "reference", label: "Player Reference", num: "11" },
] as const;

type StepId = (typeof STEPS)[number]["id"];

/**
 * The ten boxes at the top of the site, in the order Shaun settled
 * on 2026-11-03 (the Rule Sets book over the moon, the Characters
 * book over the download/Export, three more boxes to the right on
 * each line). Later the same day he made the boxes MOVABLE —
 * "Put the six button movable action on the boxes at the top of
 * the very site", the drag action he had just taken off the Feats
 * sections — arranged them on his phone, and then ordered the
 * moving removed again: "I've put them where I wanted to." His
 * choice when offered the trade-off: freeze the arrangement on
 * his phone rather than bake it in for every device. So this
 * list is the DEFAULT order and the full id set, and the site
 * still READS a device's saved arrangement from localStorage
 * under HEADER_BOX_ORDER_KEY — Shaun's phone keeps the layout he
 * put the boxes in — but nothing can change it anymore: no drag,
 * and the order is never written back.
 */
const HEADER_BOX_DEFAULT_ORDER = [
  "rulesets",
  "characters",
  "house-rules",
  "save",
  "new",
  "theme",
  "export",
  "copy-build",
  "copy-settings",
  "import",
] as const;

const HEADER_BOX_ORDER_KEY = "blendcrafter:header-box-order";

export default function Builder() {
  const [, params] = useRoute<{ step: string }>("/step/:step");
  const [location, navigate] = useLocation();
  const { toast } = useToast();
  const importRef = useRef<HTMLInputElement>(null);

  // Header box order — FROZEN (Shaun, 2026-11-03). The boxes were
  // briefly movable; Shaun arranged them on his phone, then
  // ordered the moving removed and chose "just freeze it on my
  // phone" over baking his arrangement in for every device. So
  // the order is read ONCE from the device's saved arrangement
  // (merged over the default, so the state always holds all ten
  // ids) and never changes or gets written back: his phone keeps
  // exactly the layout he put them in, and there is no way to
  // move a box anymore.
  const [headerBoxOrder] = useState<string[]>(() => {
    let saved: string[] = [];
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(HEADER_BOX_ORDER_KEY) ?? "null");
      if (Array.isArray(parsed)) saved = parsed.filter((x): x is string => typeof x === "string");
    } catch {
      saved = [];
    }
    const merged = saved.filter((id) => (HEADER_BOX_DEFAULT_ORDER as readonly string[]).includes(id));
    for (const id of HEADER_BOX_DEFAULT_ORDER) if (!merged.includes(id)) merged.push(id);
    return merged;
  });

  const stepParam = (params?.step ?? (location === "/" ? "race" : "race")) as StepId;
  const currentStep: StepId = STEPS.some((s) => s.id === stepParam) ? stepParam : "race";
  const stepIndex = STEPS.findIndex((s) => s.id === currentStep);

  const cb = useCharacterBuild();
  const { build, resolved } = cb;

  // Campaign defaults (Shaun, 2026-11-02): his curated toggle state
  // ships with the app. Toggle prefs live in each browser's own
  // storage, so his phone and his group's browsers all started from
  // the factory default (everything on) and showed races he had
  // turned off on his computer. On a device whose saved prefs are
  // missing or still factory-default, his lists become the prefs
  // (and are applied to the open character); a device with its own
  // curation is never overwritten. Declared before the build-link
  // effect so a linked character still wins for itself.
  useEffect(() => {
    try {
      const applied = Number(globalThis.localStorage?.getItem(CAMPAIGN_DEFAULTS_VERSION_KEY) ?? 0);
      if (applied >= CAMPAIGN_DEFAULTS_VERSION) return;
      globalThis.localStorage?.setItem(CAMPAIGN_DEFAULTS_VERSION_KEY, String(CAMPAIGN_DEFAULTS_VERSION));
      const existing = loadTogglePrefs();
      if (existing === null || isFactoryDefaultPrefs(existing)) {
        // First run (or a device that never curated anything):
        // adopt Shaun's lists wholesale, as v1 did.
        const prefs = sanitizeTogglePrefs(CAMPAIGN_DEFAULT_PREFS);
        saveTogglePrefs(prefs);
        cb.setBuild({
          ...build,
          enabledRulesets: prefs.enabledRulesets,
          houseRules: prefs.houseRules,
          disabledRaceIds: prefs.disabledRaceIds,
          disabledClassIds: prefs.disabledClassIds,
          disabledSkillIds: prefs.disabledSkillIds,
          disabledFeatIds: prefs.disabledFeatIds,
          disabledAbilities: prefs.disabledAbilities,
        });
      } else {
        // v2 merge (Shaun's phone had stored prefs that were neither
        // missing nor factory, so v1 skipped it): union the campaign
        // offs into the saved prefs and into the open character.
        // Nothing is removed; rulesets and house rules stay the
        // device's own.
        saveTogglePrefs(sanitizeTogglePrefs(withCampaignOffs(existing)));
        cb.setBuild(withCampaignOffs(build));
      }
    } catch {
      // Storage unavailable: nothing to seed; the app runs as before.
    }
    // Runs once on mount by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Build deep links (APOC hub connection): a ?build= token in the URL
  // carries a whole character — the Campaign Tracker links here. Load it
  // once on arrival, then strip the token so a refresh doesn't reload it
  // over newer edits. A bad token only costs a toast; the app starts fine.
  useEffect(() => {
    const token = buildTokenFromSearch(window.location.search);
    if (!token) return;
    let cancelled = false;
    void (async () => {
      const linked = await decodeBuildToken(token);
      if (cancelled) return;
      const url = new URL(window.location.href);
      url.searchParams.delete("build");
      window.history.replaceState(null, "", url.toString());
      if (linked) {
        cb.setBuild(linked);
        toast({
          title: "Character loaded from link",
          description: `${linked.name || "Character"} arrived via its build link. Save it from the Characters menu to keep it in this browser.`,
        });
      } else {
        toast({
          title: "Build link unreadable",
          description: "That link's character data could not be decoded.",
          variant: "destructive",
        });
      }
    })();
    return () => {
      cancelled = true;
    };
    // Runs once on mount by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Settings links (Shaun, 2026-11-02): toggle prefs live in each
  // browser's own localStorage, so his phone and computer drifted —
  // the phone showed every race because ITS turned-off list was
  // empty. Opening a ?settings= link saves the prefs on this device
  // and applies them to the open character, so both devices match.
  useEffect(() => {
    const token = settingsTokenFromSearch(window.location.search);
    if (!token) return;
    let cancelled = false;
    void (async () => {
      const incoming = await decodeSettingsToken(token);
      if (cancelled) return;
      const url = new URL(window.location.href);
      url.searchParams.delete("settings");
      window.history.replaceState(null, "", url.toString());
      if (incoming) {
        const prefs = sanitizeTogglePrefs(incoming);
        saveTogglePrefs(prefs);
        cb.setBuild({
          ...build,
          enabledRulesets: prefs.enabledRulesets,
          houseRules: prefs.houseRules,
          disabledRaceIds: prefs.disabledRaceIds,
          disabledClassIds: prefs.disabledClassIds,
          disabledSkillIds: prefs.disabledSkillIds,
          disabledFeatIds: prefs.disabledFeatIds,
          disabledAbilities: prefs.disabledAbilities,
        });
        toast({
          title: "Settings applied",
          description:
            "This device now uses the same toggles as the one that sent the link — rulesets, house rules, and every turned-off race, class, skill, and feat.",
        });
      } else {
        toast({
          title: "Settings link unreadable",
          description: "That link's settings could not be decoded.",
          variant: "destructive",
        });
      }
    })();
    return () => {
      cancelled = true;
    };
    // Runs once on mount by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCopyBuildLink() {
    const url = await buildShareUrl(build);
    if (await copyText(url)) {
      toast({
        title: "Build link copied",
        description: "Paste it into this character's record in the Campaign Tracker — the link opens this exact build.",
      });
    } else {
      toast({
        title: "Copy failed",
        description: "Your browser blocked the copy — try again, or use Export for a file instead.",
        variant: "destructive",
      });
    }
  }

  // The Spells step is always in the step list (Shaun, 2026-11-02:
  // it used to appear only for casting builds, so its place in the
  // order was invisible on a non-caster). For a build with no
  // casting class the step itself shows a plain empty state.
  const visibleSteps = STEPS;
  const effectiveStep: StepId = currentStep;

  // Moving to the next section starts at the top of the page
  // (Shaun, 2026-11-02).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [effectiveStep]);
  const visibleIndex = visibleSteps.findIndex((s) => s.id === effectiveStep);

  const goTo = (step: StepId) => navigate(`/step/${step}`);
  const prev = visibleSteps[visibleIndex - 1];
  const next = visibleSteps[visibleIndex + 1];

  async function handleCopySettingsLink() {
    const url = await settingsShareUrl(prefsFromBuild(build));
    if (await copyText(url)) {
      toast({
        title: "Settings link copied",
        description:
          "Open it once on your other device — that device takes on these same toggles, including which races are turned off.",
      });
    } else {
      toast({
        title: "Copy failed",
        description: "Your browser blocked the copy — try again.",
        variant: "destructive",
      });
    }
  }

  async function handleImport(file: File | undefined) {
    if (!file) return;
    try {
      const imported = await importCharacterJson(file);
      cb.setBuild(imported);
      toast({ title: "Character imported", description: `Loaded ${imported.name || "character"} from file.` });
    } catch (error) {
      toast({
        title: "Import failed",
        description: error instanceof Error ? error.message : "That file could not be imported.",
        variant: "destructive",
      });
    }
  }

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  // The header boxes themselves, by id. Their order comes from
  // headerBoxOrder; the first five render on line one, the rest on
  // line two.
  const headerBoxNodes: Record<string, ReactNode> = {
    rulesets: <RulesetToggle enabledRulesets={build.enabledRulesets} onToggle={cb.toggleRuleset} />,
    characters: <CharacterRepository build={build} onLoad={cb.setBuild} part="characters" />,
    "house-rules": <HouseRulesToggle houseRules={build.houseRules} onToggle={cb.toggleHouseRule} />,
    save: <CharacterRepository build={build} onLoad={cb.setBuild} part="save" />,
    new: (
      <Button
        variant="outline"
        size="sm"
        className="px-1.5 sm:px-3"
        onClick={() => {
          cb.reset();
          goTo("race");
          toast({ title: "New character", description: "Started a fresh build." });
        }}
        data-testid="button-new-character"
      >
        <UserPlus className="h-3.5 w-3.5 sm:mr-1.5" />
        <span className="hidden sm:inline">New</span>
      </Button>
    ),
    theme: (
      <Button variant="outline" size="sm" className="px-1.5 sm:px-3" onClick={toggleTheme} aria-label="Toggle dark/light theme" data-testid="button-theme-toggle">
        <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    ),
    export: (
      <Button variant="outline" size="sm" className="px-1.5 sm:px-3" onClick={() => exportCharacterJson(build)} data-testid="button-export-character">
        <Download className="h-3.5 w-3.5 sm:mr-1.5" />
        <span className="hidden sm:inline">Export</span>
      </Button>
    ),
    "copy-build": (
      <Button variant="outline" size="sm" className="px-1.5 sm:px-3" onClick={() => void handleCopyBuildLink()} data-testid="button-copy-build-link">
        <Link2 className="h-3.5 w-3.5 sm:mr-1.5" />
        <span className="hidden sm:inline">Copy build link</span>
      </Button>
    ),
    "copy-settings": (
      <Button variant="outline" size="sm" className="px-1.5 sm:px-3" onClick={() => void handleCopySettingsLink()} data-testid="button-copy-settings-link">
        <SlidersHorizontal className="h-3.5 w-3.5 sm:mr-1.5" />
        <span className="hidden sm:inline">Copy settings link</span>
      </Button>
    ),
    import: (
      <Button variant="outline" size="sm" className="px-1.5 sm:px-3" onClick={() => importRef.current?.click()} data-testid="button-import-character">
        <Upload className="h-3.5 w-3.5 sm:mr-1.5" />
        <span className="hidden sm:inline">Import</span>
      </Button>
    ),
  };

  // One header box, rendered bare — the drag wrappers the boxes
  // briefly wore are gone with the moving (Shaun, 2026-11-03).
  const renderHeaderBox = (id: string) => <Fragment key={id}>{headerBoxNodes[id]}</Fragment>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-foreground" />
            <span className="font-display text-xl font-semibold">Blendcrafter</span>
          </Link>
          <span className="hidden text-xs text-muted-foreground md:inline">
            d20 SRD 3.5 template-blending character builder
          </span>
          {/* The header boxes, five to a line. The DEFAULT order
              is the arrangement Shaun settled on 2026-11-03 — the
              two double stacks on the left (the Rule Sets book over
              the moon, the Characters book over the download/
              Export), three more boxes to the right on each line.
              A device with a saved arrangement from the brief
              movable window shows that instead — Shaun's phone
              keeps the layout he put them in — and the boxes can
              no longer be moved (frozen at his order). */}
          <div className="ml-auto flex flex-col items-start gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              {headerBoxOrder.slice(0, 5).map(renderHeaderBox)}
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              {headerBoxOrder.slice(5).map(renderHeaderBox)}
              <input
                ref={importRef}
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={(e) => {
                  void handleImport(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 pb-3 sm:px-6">
          <label className="text-sm text-muted-foreground" htmlFor="character-name">
            Character name
          </label>
          <Input
            id="character-name"
            data-testid="input-character-name"
            value={build.name}
            onChange={(e) => cb.setName(e.target.value)}
            className="h-9 w-44 font-display sm:w-64"
            placeholder="Unnamed Character"
          />
          <span className="text-sm text-muted-foreground">
            {resolved.race.name} · ECL {resolved.ecl.value} · CR {resolved.cr.value} · HP {resolved.hp.total} · AC {resolved.ac.total}
          </span>
          {resolved.validation.some((v) => v.severity === "error") && (
            <span className="text-sm text-destructive">
              {resolved.validation.filter((v) => v.severity === "error").length} template issue(s) — see the Templates step
            </span>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <Tabs value={effectiveStep} onValueChange={(v) => goTo(v as StepId)}>
          <TabsList className="flex h-auto flex-wrap justify-start gap-1" data-testid="step-tabs">
            {visibleSteps.map((s) => (
              <TabsTrigger key={s.id} value={s.id} data-testid={`tab-step-${s.id}`}>
                <span className="mr-1.5 font-mono text-xs text-muted-foreground">{s.num}</span>
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-6">
          {currentStep === "race" && (
            <StepRace
              raceId={build.raceId}
              baseAbilityScores={build.baseAbilityScores}
              enabledRulesets={build.enabledRulesets}
              disabledRaceIds={build.disabledRaceIds}
              disabledAbilities={build.disabledAbilities}
              onRaceChange={cb.setRace}
              onAbilityChange={cb.setAbility}
              onAllAbilitiesChange={cb.setAllAbilities}
              onToggleRaceEnabled={cb.toggleRaceEnabled}
              onToggleAbilityEnabled={cb.toggleAbilityEnabled}
            />
          )}
          {effectiveStep === "classes" && (
            <StepClasses
              classLevels={build.classLevels}
              enabledRulesets={build.enabledRulesets}
              disabledClassIds={build.disabledClassIds}
              resolved={resolved}
              onAdd={cb.addClassLevel}
              onRemove={cb.removeClassLevel}
              onToggleClassEnabled={cb.toggleClassEnabled}
            />
          )}
          {effectiveStep === "prestige" && (
            <StepPrestige
              prestigeClassLevels={build.prestigeClassLevels}
              enabledRulesets={build.enabledRulesets}
              disabledClassIds={build.disabledClassIds}
              certifications={build.prestigePrereqCertifications}
              resolved={resolved}
              onAddPrestige={cb.addPrestigeLevel}
              onRemovePrestige={cb.removePrestigeLevel}
              onToggleClassEnabled={cb.toggleClassEnabled}
              onTogglePrestigeCertification={cb.togglePrestigeCertification}
            />
          )}
          {effectiveStep === "spells" && (
            <StepSpells build={build} resolved={resolved} onToggleSpell={cb.toggleSpell} />
          )}
          {currentStep === "skills" && (
            <StepSkills
              skillRanks={build.skillRanks}
              enabledRulesets={build.enabledRulesets}
              disabledSkillIds={build.disabledSkillIds}
              resolved={resolved}
              onSetRank={cb.setSkillRank}
              onToggleSkillEnabled={cb.toggleSkillEnabled}
            />
          )}
          {currentStep === "templates" && (
            <StepTemplates
              templates={build.templates}
              baseType={resolved.race.type}
              enabledRulesets={build.enabledRulesets}
              onAdd={cb.addTemplate}
              onRemove={cb.removeTemplate}
              onReorder={cb.reorderTemplate}
              onSetForm={cb.setTemplateForm}
              validation={resolved.validation}
            />
          )}
          {currentStep === "feats" && (
            <StepFeats
              featIds={build.featIds}
              enabledRulesets={build.enabledRulesets}
              disabledFeatIds={build.disabledFeatIds}
              resolved={resolved}
              onToggleFeat={cb.toggleFeat}
              onToggleFeatEnabled={cb.toggleFeatEnabled}
            />
          )}
          {currentStep === "equipment" && (
            <StepEquipment
              inventory={build.inventory}
              enabledRulesets={build.enabledRulesets}
              resolved={resolved}
              wealthLimitLevel={build.wealthLimitLevel ?? null}
              onAdd={cb.addInventory}
              onRemove={cb.removeInventory}
              onToggleEquipped={cb.toggleEquipped}
              onSetWealthLimitLevel={cb.setWealthLimitLevel}
            />
          )}
          {currentStep === "personality" && (
            <StepPersonality build={build} resolved={resolved} onChange={cb.updatePersonality} />
          )}
          {currentStep === "sheet" && <StepSheet character={resolved} />}
          {currentStep === "reference" && <StepReference />}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button variant="outline" disabled={!prev} onClick={() => prev && goTo(prev.id)} data-testid="button-prev-step">
            <ChevronLeft className="mr-1 h-4 w-4" /> {prev ? prev.label : "Back"}
          </Button>
          <span className="text-xs text-muted-foreground">
            Step {visibleSteps[visibleIndex]?.num} of {STEPS[STEPS.length - 1].num}
          </span>
          <Button disabled={!next} onClick={() => next && goTo(next.id)} data-testid="button-next-step">
            {next ? next.label : "Done"} <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </main>

      <OglFooter />
    </div>
  );
}
