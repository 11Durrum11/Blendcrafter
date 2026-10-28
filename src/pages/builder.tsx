import { useRef } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { ChevronLeft, ChevronRight, Download, Moon, Sun, Upload, UserPlus } from "lucide-react";
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
import { StepSkills } from "@/components/steps/step-skills";
import { StepTemplates } from "@/components/steps/step-templates";
import { StepFeats } from "@/components/steps/step-feats";
import { StepEquipment } from "@/components/steps/step-equipment";
import { StepPersonality } from "@/components/steps/step-personality";
import { StepSheet } from "@/components/steps/step-sheet";
import { useCharacterBuild } from "@/lib/use-character-build";
import { exportCharacterJson, importCharacterJson } from "@/lib/character-io";
import { useToast } from "@/hooks/use-toast";

const STEPS = [
  { id: "race", label: "Race & Abilities" },
  { id: "classes", label: "Classes" },
  { id: "skills", label: "Skills" },
  { id: "templates", label: "Templates" },
  { id: "feats", label: "Feats" },
  { id: "equipment", label: "Equipment" },
  { id: "personality", label: "Personality" },
  { id: "sheet", label: "Character Sheet" },
] as const;

type StepId = (typeof STEPS)[number]["id"];

export default function Builder() {
  const [, params] = useRoute<{ step: string }>("/step/:step");
  const [location, navigate] = useLocation();
  const { toast } = useToast();
  const importRef = useRef<HTMLInputElement>(null);

  const stepParam = (params?.step ?? (location === "/" ? "race" : "race")) as StepId;
  const currentStep: StepId = STEPS.some((s) => s.id === stepParam) ? stepParam : "race";
  const stepIndex = STEPS.findIndex((s) => s.id === currentStep);

  const cb = useCharacterBuild();
  const { build, resolved } = cb;

  const goTo = (step: StepId) => navigate(`/step/${step}`);
  const prev = STEPS[stepIndex - 1];
  const next = STEPS[stepIndex + 1];

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
          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <RulesetToggle enabledRulesets={build.enabledRulesets} onToggle={cb.toggleRuleset} />
            <HouseRulesToggle houseRules={build.houseRules} onToggle={cb.toggleHouseRule} />
            <CharacterRepository build={build} onLoad={cb.setBuild} />
            <Button variant="outline" size="sm" className="px-2 sm:px-3" onClick={() => exportCharacterJson(build)} data-testid="button-export-character">
              <Download className="h-3.5 w-3.5 sm:mr-1.5" />
              <span className="hidden sm:inline">Export</span>
            </Button>
            <Button variant="outline" size="sm" className="px-2 sm:px-3" onClick={() => importRef.current?.click()} data-testid="button-import-character">
              <Upload className="h-3.5 w-3.5 sm:mr-1.5" />
              <span className="hidden sm:inline">Import</span>
            </Button>
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
            <Button
              variant="outline"
              size="sm"
              className="px-2 sm:px-3"
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
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme} aria-label="Toggle dark/light theme" data-testid="button-theme-toggle">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
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
            className="h-9 w-64 font-display"
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
        <Tabs value={currentStep} onValueChange={(v) => goTo(v as StepId)}>
          <TabsList className="flex h-auto flex-wrap justify-start gap-1" data-testid="step-tabs">
            {STEPS.map((s, i) => (
              <TabsTrigger key={s.id} value={s.id} data-testid={`tab-step-${s.id}`}>
                <span className="mr-1.5 font-mono text-xs text-muted-foreground">{i + 1}</span>
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
          {currentStep === "classes" && (
            <StepClasses
              classLevels={build.classLevels}
              prestigeClassLevels={build.prestigeClassLevels}
              enabledRulesets={build.enabledRulesets}
              disabledClassIds={build.disabledClassIds}
              certifications={build.prestigePrereqCertifications}
              resolved={resolved}
              onAdd={cb.addClassLevel}
              onRemove={cb.removeClassLevel}
              onAddPrestige={cb.addPrestigeLevel}
              onRemovePrestige={cb.removePrestigeLevel}
              onToggleClassEnabled={cb.toggleClassEnabled}
              onTogglePrestigeCertification={cb.togglePrestigeCertification}
            />
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
              onAdd={cb.addInventory}
              onRemove={cb.removeInventory}
              onToggleEquipped={cb.toggleEquipped}
            />
          )}
          {currentStep === "personality" && (
            <StepPersonality build={build} resolved={resolved} onChange={cb.updatePersonality} />
          )}
          {currentStep === "sheet" && <StepSheet character={resolved} />}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button variant="outline" disabled={!prev} onClick={() => prev && goTo(prev.id)} data-testid="button-prev-step">
            <ChevronLeft className="mr-1 h-4 w-4" /> {prev ? prev.label : "Back"}
          </Button>
          <span className="text-xs text-muted-foreground">
            Step {stepIndex + 1} of {STEPS.length}
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
