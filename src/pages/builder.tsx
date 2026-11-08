import { Fragment, useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode, type SyntheticEvent as ReactSyntheticEvent } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { ChevronDown, ChevronLeft, ChevronRight, Download, Link2, Moon, SlidersHorizontal, Sun, Upload, UserPlus, Volume2, VolumeX } from "lucide-react";
import { ambience, type AmbienceScene } from "@/lib/ambience";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DmControls, Piece, PieceFrame, PiecesProvider, Zone, isDmArmed } from "@/components/movable-pieces";
import { RulesetToggle } from "@/components/ruleset-toggle";
import { HouseRulesToggle } from "@/components/house-rules-toggle";
import { CharacterRepository } from "@/components/character-repository";
import { StepRace } from "@/components/steps/step-race";
import { StepAbilities } from "@/components/steps/step-abilities";
import { StepClasses } from "@/components/steps/step-classes";
import { StepPrestige } from "@/components/steps/step-prestige";
import { StepSpells } from "@/components/steps/step-spells";
import { StepSkills } from "@/components/steps/step-skills";
import { StepTemplates } from "@/components/steps/step-templates";
import { StepFeats } from "@/components/steps/step-feats";
import { StepEquipment, StepMagicItems, StepInventory } from "@/components/steps/step-equipment";
import { StepPersonality } from "@/components/steps/step-personality";
import { StepSheet } from "@/components/steps/step-sheet";
import { StepItemCreation } from "@/components/steps/step-item-creation";
import { StepSpelljamming } from "@/components/steps/step-spelljamming";
import { StepPsionics, buildHasPsionics } from "@/components/steps/step-psionics";
import { StepReference } from "@/components/steps/step-reference";
import { useCharacterBuild, createZeroBuild } from "@/lib/use-character-build";
import type { CharacterBuild } from "@/engine/types";
import { resolveCharacter } from "@/engine/resolver";
import { exportCharacterJson, importCharacterJson } from "@/lib/character-io";
import { buildShareUrl, buildTokenFromSearch, copyText, decodeBuildToken, decodeSettingsToken, settingsShareUrl, settingsTokenFromSearch } from "@/lib/build-link";
import { loadTogglePrefs, prefsFromBuild, sanitizeTogglePrefs, saveTogglePrefs } from "@/lib/toggle-prefs";
import { CAMPAIGN_DEFAULT_PREFS, CAMPAIGN_DEFAULTS_VERSION, CAMPAIGN_DEFAULTS_VERSION_KEY, isFactoryDefaultPrefs, withCampaignOffs } from "@/lib/campaign-defaults";
import { useToast } from "@/hooks/use-toast";

const STEPS = [
  // Top-level sections (Shaun, 2026-11-04): "number one is
  // player reference, make number two character creation. Inside
  // that put the ability and races, classes, skills, blah blah
  // blah." So Player Reference stands alone as section 1, and
  // every build step lives INSIDE section 2, Character Creation,
  // numbered 1–15 within it (the `num` on a creation step is its
  // number inside Character Creation). Player Reference is a
  // read-only lookup and changes no build state; the builder
  // itself opens on the Name step unless a step is chosen.
  { id: "reference", label: "Player Reference", num: "1" },
  // Name and Abilities are ONE step (Shaun, 2026-11-05, later:
  // "combine name and the abilities. Put the name on top in the
  // abilities and call that one and then everything else
  // after"). The name box sits on top inside the Abilities
  // step, which is Step 1; there is no separate Name step.
  // Renumbered: Abilities 1, Race 2, and everything else
  // follows to Character Sheet 14.
  { id: "abilities", label: "Abilities", num: "1" },
  { id: "race", label: "Race", num: "2" },
  { id: "classes", label: "Classes", num: "3" },
  { id: "skills", label: "Skills", num: "4" },
  { id: "templates", label: "Templates", num: "5" },
  { id: "feats", label: "Feats", num: "6" },
  { id: "spells", label: "Spells", num: "7" },
  // Prestige classes are their own step (Shaun, 2026-11-03), and sit
  // AFTER Spells (Shaun, later the same day: "Move it after Spells
  // and renumber the steps to fit") — the prerequisite gate judges
  // skills, templates, feats and spell picks, so those steps must
  // come first for anything to register as met.
  { id: "prestige", label: "Prestige Classes", num: "8" },
  { id: "equipment", label: "Equipment", num: "9" },
  // Magic Items and Inventory are their own steps now (Shaun,
  // 2026-11-04: "give equipment magic items and inventory their
  // own windows" — Equipment 8, Magic Items 9, Inventory 10
  // inside Character Creation), which pushes Personality and
  // the Sheet to 11 and 12 inside the group.
  { id: "magic-items", label: "Magic Items", num: "10" },
  // Psionics is a step of its own inside Character Creation
  // (Shaun, 2026-11-04, voice call: "make the psionics number
  // ten" — "So inventory will become 11, personality become
  // number 12 and character sheet will become 13"). Everything
  // psionic gathers there with its own buttons; its records
  // also live in their ordinary steps. The step's tab renders
  // grayed when the build has no psionic class (APOC style);
  // it still opens for reference.
  { id: "psionics", label: "Psionics", num: "11" },
  { id: "inventory", label: "Inventory", num: "12" },
  { id: "personality", label: "Personality", num: "13" },
  { id: "sheet", label: "Character Sheet", num: "14" },
  // Section 3 (Shaun, 2026-11-04, later): "New line. Next to
  // Character Creation. — Magic Item Creation." A top-level
  // reference section standing beside Character Creation, the
  // way Player Reference stands alone as section 1; its `num`
  // is its section number, 3. Like Player Reference it is
  // read-only and changes no build state.
  { id: "item-creation", label: "Magic Item Creation", num: "3" },
  // Section 4 (Shaun, 2026-11-04, voice call): "after Magic Item
  // Creation number four should be Spelljamming" — corrected in
  // the same call to "Next to Magic Creation": a fourth top-level
  // line standing right beside Magic Item Creation, minimized and
  // clickable the same way, and EVERYTHING about Spelljamming
  // lives inside it. The Spelljammer records themselves also file
  // into the ordinary catalogs (races with races, spells with
  // spells, ships with equipment, helms with magic items), so the
  // section page is the hub that gathers them all in one place.
  { id: "spelljamming", label: "Spelljamming", num: "4" },
  // NO Section 5 (Shaun, 2026-11-04, 23:28 MST): the Ships
  // section that stood here for one night ("Give me another
  // number five ships") was reversed the same night — "Put
  // the ships not as number five but put it nested in spell
  // jamming." The ships live as a nest inside Spelljamming
  // (Section 4) again; there are four top-level sections.
] as const;

type StepId = (typeof STEPS)[number]["id"];

/**
 * The ten boxes at the top of the site, in their PERMANENT order —
 * Shaun's own arrangement, baked in at his order (2026-11-03).
 * History: the boxes started in a settled layout, were briefly
 * movable ("Put the six button movable action on the boxes at the
 * top of the very site"), and Shaun arranged them on his phone,
 * then had the moving removed. Offered freeze-on-his-phone vs
 * bake-it-in, he first picked the freeze, then reversed — "No
 * make it baked in then" — and confirmed with a screenshot of his
 * phone: "The way you see it now bake it in." This list is that
 * screenshot, read icon by icon and checked against the code
 * (Rule Sets = book with the ruleset-count badge; Characters =
 * book without; Save = the checkmark button; House Rules =
 * sliders with the off-default badge):
 *
 *   Rule Sets · Import · Characters · New · Moon · House Rules ·
 *   Export · Save — one row on laptop widths; on phone widths
 *   the row breaks after the Moon into a second line (Shaun,
 *   2026-11-04: the one-row layout is "just for the purposes of
 *   the laptop").
 *
 * It is a plain constant now: no drag, and no per-device saved
 * arrangement is read anymore (the old localStorage key
 * blendcrafter:header-box-order is simply never looked at), so
 * every device shows exactly this, forever, cache clears or not.
 *
 * 2026-11-04: Shaun ordered Copy build link and Copy settings
 * link hidden ("Hide them") — he had never used either. Their
 * buttons and handlers stay in headerBoxNodes below; dropping
 * their ids from this list is all the hiding does, and putting
 * the ids back restores them.
 *
 * 2026-11-04 (later, voice call): three more rulings — the New
 * button goes second, Export sits next to Import, and the Moon
 * (theme) button goes last. The order below satisfied all three.
 *
 * 2026-11-05: superseded in part — "put it first": the New
 * button led the header for a few hours (2x2, and the gate
 * that starts a character; see the gate note in Builder).
 * Export still sits next to Import, Moon still last. Later
 * the same morning Shaun moved New again — out of the
 * header entirely: it now sits nested FIRST inside the
 * Character Creation panel, ahead of the Abilities step
 * (see the step-group JSX). Stored per-device header
 * orders drop "new" on load.
 */
const HEADER_BOX_ORDER = [
  "rulesets",
  "import",
  "export",
  "characters",
  "house-rules",
  "save",
  "ambience",
  "theme",
] as const;

// Movable header boxes (Shaun, 2026-11-05: "Make those top
// buttons movable" — supersedes the fixed 2026-11-03
// arrangement): HEADER_BOX_ORDER above is now the DEFAULT
// order. Each device keeps its own arrangement in
// localStorage, the way it keeps Shaun's toggle prefs; press
// and hold a box, then slide it onto the box it should swap
// with. A stored order is validated against the known ids —
// anything unknown drops out, anything new joins at the end.
const HEADER_BOX_ORDER_STORAGE_KEY = "blendcrafter:header-box-order";

function loadHeaderBoxOrder(): string[] {
  try {
    const raw = globalThis.localStorage?.getItem(HEADER_BOX_ORDER_STORAGE_KEY);
    if (!raw) return [...HEADER_BOX_ORDER];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [...HEADER_BOX_ORDER];
    const known = parsed.filter(
      (x): x is string => typeof x === "string" && (HEADER_BOX_ORDER as readonly string[]).includes(x),
    );
    const missing = HEADER_BOX_ORDER.filter((id) => !known.includes(id));
    return [...known, ...missing];
  } catch {
    return [...HEADER_BOX_ORDER];
  }
}

function saveHeaderBoxOrder(order: string[]): void {
  try {
    globalThis.localStorage?.setItem(HEADER_BOX_ORDER_STORAGE_KEY, JSON.stringify(order));
  } catch {
    // Storage unavailable: the arrangement lasts for this visit.
  }
}

// The little version indicator at the top of the site (Shaun,
// 2026-11-04): a simple human version like "20.2" so he can see at a
// glance what build he is looking at. The number lives in
// public/version.json as "display" alongside the cache-busting stamp.
function VersionBadge() {
  const [v, setV] = useState("");
  useEffect(() => {
    fetch("./version.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && typeof d.display === "string" && d.display) setV(d.display);
        else if (d && typeof d.version === "string") setV(d.version);
      })
      .catch(() => {});
  }, []);
  if (!v) return null;
  return (
    <span
      className="rounded border border-border px-1.5 py-0.5 text-[11px] font-semibold text-muted-foreground"
      data-testid="site-version-badge"
    >
      v{v}
    </span>
  );
}

export default function Builder() {
  const [, params] = useRoute<{ step: string }>("/step/:step");
  const [location, navigate] = useLocation();
  const { toast } = useToast();
  const importRef = useRef<HTMLInputElement>(null);

  // The header box order starts from HEADER_BOX_ORDER and is
  // Shaun's to rearrange (2026-11-05: the boxes are movable
  // now); each device remembers its arrangement. The state and
  // drag handlers live just above headerBoxNodes below.

  const stepParam = (params?.step ?? (location === "/" ? "abilities" : "abilities")) as StepId;
  const currentStep: StepId = STEPS.some((s) => s.id === stepParam) ? stepParam : "abilities";
  const stepIndex = STEPS.findIndex((s) => s.id === currentStep);

  // Character Creation is a clickable folder (Shaun, 2026-11-04:
  // "Minimize one through 12 into character creation" / "Make
  // character creation clickable" / "put character creation next
  // to player reference"). The 1-12 step tabs stay minimized
  // inside it until its button — which sits right beside the
  // Player Reference tab — is clicked open.
  const [creationOpen, setCreationOpen] = useState(false);
  // Magic Item Creation is clickable the same way (Shaun,
  // 2026-11-04, later): its line opens a panel with jump links
  // into its page.
  // Spelljamming is clickable the same way again (Shaun,
  // 2026-11-04, voice call): its line opens a panel with jump
  // links into its page.

  // Ambience (Shaun, 2026-11-04): the per-area backdrop scenes are
  // animated and carry matching ambient sound, with ONE toggle for
  // both ("make those scenes animated and give me an option as to
  // animate them or not" / "with the appropriate ambient sounds").
  // Persisted per device; defaults ON unless the OS asks for
  // reduced motion. Sound itself can only start after the first
  // tap/click/keypress (browser autoplay rule) — the engine in
  // lib/ambience arms that itself.
  const [ambienceOn, setAmbienceOn] = useState<boolean>(() => {
    try {
      const saved = window.localStorage.getItem("blendcrafter:ambience");
      if (saved !== null) return saved === "1";
    } catch {
      /* storage unavailable */
    }
    return !(
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(
        "blendcrafter:ambience",
        ambienceOn ? "1" : "0",
      );
    } catch {
      /* storage unavailable */
    }
    ambience.setEnabled(ambienceOn);
  }, [ambienceOn]);

  // Ambience volume (Shaun, 2026-11-04: "Give the ambiance button a
  // volume control"). A 0..1 fraction, persisted per device; the
  // slider rides beside the Ambience button while ambience is on.
  const [ambienceVolume, setAmbienceVolume] = useState<number>(() => {
    try {
      const saved = window.localStorage.getItem("blendcrafter:ambience-volume");
      if (saved !== null) {
        const v = Number.parseFloat(saved);
        if (Number.isFinite(v)) return Math.min(1, Math.max(0, v));
      }
    } catch {
      /* storage unavailable */
    }
    return 1;
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(
        "blendcrafter:ambience-volume",
        String(ambienceVolume),
      );
    } catch {
      /* storage unavailable */
    }
    ambience.setVolume(ambienceVolume);
  }, [ambienceVolume]);

  const cb = useCharacterBuild();
  const { build, resolved } = cb;
  // The gate (Shaun, 2026-11-05): "On character creation, unless
  // a character is being made zero everything out" — and "the
  // way to know if the character is being made is if the new
  // character button is clicked first." Until New is clicked
  // (or a character is opened — loaded, imported, or arrived by
  // build link), every Character Creation step renders the ZERO
  // build and its zeroed resolution, and every build-changing
  // callback the steps receive is inert, so nothing can start a
  // character by accident. The header's own controls (Rule
  // Sets, House Rules, Save, Characters) keep the real build:
  // those are the library and Shaun's settings, not the canvas.
  const [characterStarted, setCharacterStarted] = useState(false);
  const zeroBuild = useMemo(createZeroBuild, []);
  const zeroResolved = useMemo(() => resolveCharacter(zeroBuild), [zeroBuild]);
  const viewBuild = characterStarted ? build : zeroBuild;
  const viewResolved = characterStarted ? resolved : zeroResolved;
  const handleLoadBuild = (next: CharacterBuild) => {
    cb.setBuild(next);
    setCharacterStarted(true);
  };
  const noop = () => {};
  const idleCb: typeof cb = {
    ...cb,
    updateBuild: noop,
    setName: noop,
    setRace: noop,
    setAbility: noop,
    setAllAbilities: noop,
    addClassLevel: noop,
    removeClassLevel: noop,
    addPrestigeLevel: noop,
    removePrestigeLevel: noop,
    togglePrestigeCertification: noop,
    addTemplate: noop,
    removeTemplate: noop,
    reorderTemplate: noop,
    setTemplateForm: noop,
    setSkillRank: noop,
    toggleFeat: noop,
    toggleSpell: noop,
    addInventory: noop,
    removeInventory: noop,
    toggleEquipped: noop,
    toggleRaceEnabled: noop,
    toggleClassEnabled: noop,
    toggleSkillEnabled: noop,
    toggleFeatEnabled: noop,
    toggleAbilityEnabled: noop,
    updatePersonality: noop,
    setWealthLimitLevel: noop,
  };
  const viewCb = characterStarted ? cb : idleCb;

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
        setCharacterStarted(true);
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

  // The backdrop scene and its ambient sound follow the area. The
  // Character Sheet is left alone (Shaun): it keeps the default
  // street scene and the street sounds.
  // Psionics borrows the street scene for now, like
  // Spelljamming does (a dedicated scene is a follow-up,
  // noted 2026-11-04).
  const sceneKey =
    effectiveStep === "sheet" || effectiveStep === "spelljamming" || effectiveStep === "psionics"
      ? "street"
      : effectiveStep === "abilities"
        ? "race"
        : effectiveStep;
  useEffect(() => {
    ambience.setScene(sceneKey as AmbienceScene);
  }, [sceneKey]);
  const visibleIndex = visibleSteps.findIndex((s) => s.id === effectiveStep);
  // A step belongs to Character Creation unless it is one of the
  // standalone top-level sections (Player Reference, Magic Item
  // Creation).
  const inCreation =
    effectiveStep !== "reference" &&
    effectiveStep !== "item-creation" &&
    effectiveStep !== "spelljamming";

  const goTo = (step: StepId) => navigate(`/step/${step}`);
  const toggleCreation = () => {
    if (!creationOpen && !inCreation) {
      // Coming from a standalone section (Player Reference,
      // Magic Item Creation, or Spelljamming), clicking
      // Character Creation ENTERS it: open the group and land
      // on its first step.
      setCreationOpen(true);
      goTo("abilities");
    } else {
      setCreationOpen((o) => !o);
    }
  };
  const toggleItemCreation = () => {
    // No jump panel for Magic Item Creation either (standing
    // pattern, Shaun 2026-11-05: when he gives an order like
    // this he wants it to land like this — nested, minimized,
    // clickable, nothing duplicated): its jump buttons (The
    // General Method / By Family / Alchemy / Item Creation
    // Feats) duplicated the headers on its own page, the same
    // duplication removed from Spelljamming and Psionics.
    // Clicking lands straight on the page.
    setCreationOpen(false);
    goTo("item-creation");
  };
  const toggleSpelljamming = () => {
    // No jump panel for Spelljamming (Shaun, voice call
    // 2026-11-04: "Get rid of those little buttons" — the How It
    // Works / Ships / Helms / Peoples of Space / Spells / Gear
    // buttons duplicated the nests sitting on the page itself).
    // Clicking Spelljamming lands on its page; the nests are
    // the navigation.
    setCreationOpen(false);
    goTo("spelljamming");
  };
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
      setCharacterStarted(true);
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
  // HEADER_BOX_ORDER; the first five form the first group, the rest
  // the second — the two groups sit side by side in one row on
  // laptop widths and stack into two lines on phone widths.
  // Header box dragging (Shaun, 2026-11-05): press and hold a
  // box for a beat, then slide — when the pointer crosses
  // another box, the two swap places live. A short press that
  // moves early is a scroll or a tap and cancels the drag, so
  // ordinary taps and page scrolling are untouched. A real
  // drag swallows the click it ends with, so letting go over
  // the box's own button never fires it.
  // DM / player split (Shaun, 2026-11-07): the movable treatment —
  // header boxes included — is DM-only. A device armed as the DM's
  // (opened once with ?dm=1) gets its own saved box order and the
  // drag; every other device gets the shipped order and no drag.
  const dmArmed = isDmArmed();
  const [headerOrder, setHeaderOrder] = useState<string[]>(() =>
    dmArmed ? loadHeaderBoxOrder() : [...HEADER_BOX_ORDER],
  );
  const [draggingBoxId, setDraggingBoxId] = useState<string | null>(null);
  const dragRef = useRef<{ id: string; startX: number; startY: number; active: boolean; timer: number } | null>(null);
  const justDraggedRef = useRef(0);
  useEffect(() => {
    if (dmArmed) saveHeaderBoxOrder(headerOrder);
  }, [headerOrder]);

  const onHeaderBoxPointerDown = (e: ReactPointerEvent, id: string) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const el = e.currentTarget as HTMLElement;
    const info = { id, startX: e.clientX, startY: e.clientY, active: false, timer: 0 };
    dragRef.current = info;
    info.timer = window.setTimeout(() => {
      if (dragRef.current !== info) return;
      info.active = true;
      setDraggingBoxId(id);
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        // Pointer capture is a nicety; the drag still tracks
        // while the pointer stays over the header.
      }
    }, 180);
  };
  const onHeaderBoxPointerMove = (e: ReactPointerEvent) => {
    const info = dragRef.current;
    if (!info) return;
    if (!info.active) {
      if (Math.hypot(e.clientX - info.startX, e.clientY - info.startY) > 10) {
        window.clearTimeout(info.timer);
        dragRef.current = null;
      }
      return;
    }
    const nodes = document.querySelectorAll<HTMLElement>("[data-header-box]");
    nodes.forEach((n) => {
      const otherId = n.dataset.headerBox;
      if (!otherId || otherId === info.id) return;
      const r = n.getBoundingClientRect();
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
        setHeaderOrder((prev) => {
          const a = prev.indexOf(info.id);
          const b = prev.indexOf(otherId);
          if (a === -1 || b === -1 || a === b) return prev;
          const next = [...prev];
          [next[a], next[b]] = [next[b], next[a]];
          return next;
        });
      }
    });
  };
  const onHeaderBoxPointerEnd = () => {
    const info = dragRef.current;
    if (!info) return;
    window.clearTimeout(info.timer);
    if (info.active) {
      justDraggedRef.current = Date.now();
      setDraggingBoxId(null);
    }
    dragRef.current = null;
  };
  const swallowDraggedClick = (e: ReactSyntheticEvent) => {
    if (Date.now() - justDraggedRef.current < 250) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const headerBoxNodes: Record<string, ReactNode> = {
    rulesets: <RulesetToggle enabledRulesets={build.enabledRulesets} onToggle={cb.toggleRuleset} />,
    characters: <CharacterRepository build={build} onLoad={handleLoadBuild} part="characters" />,
    "house-rules": <HouseRulesToggle houseRules={build.houseRules} onToggle={cb.toggleHouseRule} />,
    save: <CharacterRepository build={build} onLoad={handleLoadBuild} part="save" />,
    theme: (
      <Button variant="outline" size="sm" className="px-1.5 sm:px-3" onClick={toggleTheme} aria-label="Toggle dark/light theme" data-testid="button-theme-toggle">
        <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    ),
    ambience: (
      <span className="inline-flex items-center gap-1.5">
        <Button variant="outline" size="sm" className="px-1.5 sm:px-3" onClick={() => setAmbienceOn((v) => !v)} aria-pressed={ambienceOn} aria-label="Toggle background animation and ambient sound" data-testid="button-ambience-toggle">
          {ambienceOn ? <Volume2 className="h-3.5 w-3.5 sm:mr-1.5" /> : <VolumeX className="h-3.5 w-3.5 sm:mr-1.5" />}
          <span className="hidden sm:inline">Ambience</span>
        </Button>
        {ambienceOn ? (
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(ambienceVolume * 100)}
            onChange={(e) => setAmbienceVolume(Number(e.target.value) / 100)}
            className="w-14 accent-amber-500 sm:w-20"
            aria-label="Ambience volume"
            data-testid="ambience-volume-slider"
          />
        ) : null}
      </span>
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

  // One header box in its drag shell (Shaun, 2026-11-05: the
  // boxes are movable again — press, hold, and slide to swap).
  const renderHeaderBox = (id: string) => (
    <div
      key={id}
      data-header-box={id}
      data-testid={`header-box-${id}`}
      className={`${dmArmed ? "touch-none " : ""}select-none${draggingBoxId === id ? " scale-105 opacity-60" : ""}`}
      onPointerDown={dmArmed ? (e) => onHeaderBoxPointerDown(e, id) : undefined}
      onPointerMove={dmArmed ? onHeaderBoxPointerMove : undefined}
      onPointerUp={dmArmed ? onHeaderBoxPointerEnd : undefined}
      onPointerCancel={dmArmed ? onHeaderBoxPointerEnd : undefined}
    >
      {headerBoxNodes[id]}
    </div>
  );

  return (
    <PiecesProvider>
    <div className={`app-backdrop min-h-screen bg-background text-foreground${ambienceOn ? " bg-animated" : ""}`} data-scene={effectiveStep === "sheet" ? undefined : effectiveStep === "abilities" ? "race" : effectiveStep}>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-1.5 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-foreground" />
            <span className="font-display text-xl font-semibold">Blendcrafter</span>
          </Link>
          <VersionBadge />
          {/* The DM's controls (Shaun, 2026-11-07): the Edit Lock
              toggle and Reset layout, side by side in the header.
              Reset puts every piece back in its shipped place,
              sizes and locks cleared — and the header boxes' own
              saved order resets with it. Both controls render ONLY
              on DM-armed devices; players see neither. */}
          <DmControls
            onResetExtra={() => {
              setHeaderOrder([...HEADER_BOX_ORDER]);
              toast({ title: "Layout reset", description: "Every piece is back in its shipped place." });
            }}
          />
          {/* The "d20 SRD 3.5 template-blending character builder"
              tagline that used to sit beside the title was removed
              2026-11-04 at Shaun's order. */}
          {/* The header boxes, in Shaun's baked-in arrangement
              (2026-11-03, from his phone screenshot — see
              HEADER_BOX_ORDER): Rule Sets · Import · Export ·
              Characters · House Rules · Save · Ambience · Moon
              (the New Character button left the header
              2026-11-05; it is nested first inside Character
              Creation now). They sat in two stacked groups
              until 2026-11-05 put them all on one row (see the
              next comment). Copy build link and Copy settings link were
              hidden 2026-11-04 at Shaun's order. The order shown
              is the device's own: the boxes are movable
              (2026-11-05) — press, hold, and slide to swap. */}
          {/* All the top boxes on ONE row (Shaun, 2026-11-05:
              "Put all the boxes on top on one row" — "so it can
              all fit on one row") — the two stacked groups are
              gone, and the row does NOT wrap: the boxes are
              icon-compact on phone widths, so all eight fit
              across a single line in their set order, and they
              stay movable. */}
          <div className="ml-auto flex flex-nowrap items-center gap-1 sm:gap-2" onClickCapture={swallowDraggedClick}>
            {headerOrder.map(renderHeaderBox)}
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
        {viewResolved.validation.some((v) => v.severity === "error") && (
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 pb-3 sm:px-6">
            <span className="text-sm text-destructive">
              {viewResolved.validation.filter((v) => v.severity === "error").length} template issue(s) — see the Templates step
            </span>
          </div>
        )}
      </header>

      {/* Bottom padding (Shaun, 2026-11-04): just enough clear space
          at the foot of every page that the area's background scene
          shows unimpeded when he scrolls to the end. */}
      {/* Tight-page exception (Shaun, 2026-11-07): on Player
          Reference, Magic Item Creation, Spelljamming, and the
          Abilities step, the 45vh foot of clear backdrop is
          dropped (pb-6) and the nav row below tightens — his
          order is that those pages ride up tight and fit one
          screen with no scrolling in their default state. Every
          other page keeps pb-[45vh]. */}
      <main className={`mx-auto ${effectiveStep === "sheet" ? "max-w-[110rem]" : "max-w-6xl"} px-4 pt-1 sm:px-6 ${effectiveStep === "reference" || effectiveStep === "item-creation" || effectiveStep === "spelljamming" || effectiveStep === "abilities" || effectiveStep === "equipment" || effectiveStep === "magic-items" || effectiveStep === "inventory" || effectiveStep === "psionics" || effectiveStep === "sheet" ? "pb-6" : "pb-[45vh]"}`}>
        <Tabs value={effectiveStep} onValueChange={(v) => goTo(v as StepId)}>
          <TabsList className="flex h-auto flex-wrap justify-start gap-0.5 [&>button]:py-0.5" data-testid="step-tabs">
            {/* The four sections on ONE LINE (Shaun,
                2026-11-07: "Put the player reference first, the
                magic item creation header next to it, the
                character creation header next to the magic item
                creation, and the spelljamming all the way to the
                right of character creation and make it all one
                line. Then bring it all up."). Left to right:
                Player Reference | Magic Item Creation |
                Character Creation | Spelljamming. This
                supersedes the 2026-11-05 two-by-two grid. The
                Character Creation panel opens full-width under
                the row, where it always opened. Labels may wrap
                inside their quarter cell on a narrow phone
                screen; the row itself never wraps. */}
            {/* The four section cells are movable pieces now
                (Shaun, 2026-11-07): drag a cell's grip to reorder
                the line, lock a cell to pin it. The cells stay
                equal quarters of the one-line grid — resizing a
                single navigation button has no content to reflow,
                so move + lock is their treatment. */}
            <Zone zoneId="sections" testId="section-grid" className="grid basis-full auto-rows-fr grid-cols-4 gap-1">
            {/* Section 1 — Player Reference, standing alone
                (Shaun, 2026-11-04). */}
            {visibleSteps
              .filter((s) => s.id === "reference")
              .map((s) => (
                <Piece key={s.id} pieceId="reference" layout="grid">
                  <TabsTrigger value={s.id} data-testid={`tab-step-${s.id}`} className="h-full w-full py-2 font-semibold">
                    <span className="whitespace-normal text-center leading-tight">{s.label}</span>
                  </TabsTrigger>
                </Piece>
              ))}
            {/* Section 2 — Magic Item Creation, a top-level line
                right next to Character Creation (Shaun, 2026-11-04),
                carrying the whole creation mechanics on its page.
                NO jump panel (standing pattern, Shaun 2026-11-05):
                the button lands straight on the page, like
                Spelljamming. */}
            <Piece pieceId="item-creation" layout="grid">
            <button
              type="button"
              onClick={toggleItemCreation}
              data-testid="step-group-item-creation-toggle"
              className={
                "inline-flex h-full w-full items-center justify-center rounded-sm px-3 py-2 font-display leading-tight text-sm font-semibold font-semibold ring-offset-background transition-all " +
                (effectiveStep === "item-creation"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-foreground/70 hover:text-foreground")
              }
            >
              <span data-testid="step-group-item-creation-label">
                                Magic Item Creation
              </span>
            </button>
            </Piece>
            {/* Section 3 — Character Creation, sitting right next
                to Player Reference (Shaun, 2026-11-04). It is a
                CLICKABLE folder: steps 1–13 stay minimized inside
                it until its button is clicked open ("Minimize one
                through 12 into character creation" / "Make
                character creation clickable" / "With one through
                12 inside character creation"). Clicking it from
                Player Reference enters it at its first step. */}
            <Piece pieceId="creation" layout="grid">
            <button
              type="button"
              onClick={toggleCreation}
              aria-expanded={creationOpen}
              data-testid="step-group-character-creation-toggle"
              className={
                "inline-flex h-full w-full items-center justify-center rounded-sm px-3 py-2 font-display leading-tight text-sm font-semibold font-semibold ring-offset-background transition-all " +
                (inCreation
                  ? "bg-background text-foreground shadow-sm"
                  : "text-foreground/70 hover:text-foreground")
              }
            >
              <span data-testid="step-group-character-creation-label">
                                Character Creation
              </span>
              {creationOpen ? (
                <ChevronDown className="ml-1.5 h-4 w-4 shrink-0" />
              ) : (
                <ChevronRight className="ml-1.5 h-4 w-4 shrink-0" />
              )}
            </button>
            </Piece>
            {/* Section 4 — Spelljamming, a top-level line right
                next to Magic Item Creation (Shaun, 2026-11-04,
                voice call: "Next to Magic Creation"). NO jump
                panel: Shaun ordered its little buttons (How It
                Works / Ships / Helms / Peoples of Space / Spells
                / Gear) removed — the nests on the page are the
                navigation. The button lands straight on the page. */}
            <Piece pieceId="spelljamming" layout="grid">
            <button
              type="button"
              onClick={toggleSpelljamming}
              data-testid="step-group-spelljamming-toggle"
              className={
                "inline-flex h-full w-full items-center justify-center rounded-sm px-3 py-2 font-display leading-tight text-sm font-semibold font-semibold ring-offset-background transition-all " +
                (effectiveStep === "spelljamming"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-foreground/70 hover:text-foreground")
              }
            >
              <span data-testid="step-group-spelljamming-label">
                                Spelljamming
              </span>
            </button>
            </Piece>
            </Zone>
            {creationOpen && (
              <Zone
                zoneId="creation"
                testId="step-group-character-creation"
                className="flex basis-full flex-wrap items-center gap-0.5 rounded-md border border-border p-1"
              >
                {/* The summary line sits ABOVE the New Character
                    button (Shaun, 2026-11-05: "Put the None / ECL
                    0 / CR 0 / HP 0 / AC 0 above the new character
                    box") — first thing in the opened section. Its
                    content is unchanged: the build's race · ECL ·
                    CR · HP · AC, zeroed until a character is
                    started. */}
                <Piece pieceId="summary">
                  <div className="text-sm text-muted-foreground" data-testid="character-summary-line">
                    {viewResolved.race.name} · ECL {viewResolved.ecl.value} · CR {viewResolved.cr.value} · HP {viewResolved.hp.total} · AC {viewResolved.ac.total}
                  </div>
                </Piece>
                {/* The New Character button, nested FIRST inside
                    Character Creation (Shaun, 2026-11-05: "Put the
                    new character button first nested in character
                    creation") — ahead of Step 1 (Abilities). It
                    keeps its 2x2 size and its job as the gate:
                    clicking it starts a character being made;
                    until then Character Creation sits zeroed out
                    (see the gate note in Builder). It lived in the
                    header until this order moved it here. */}
                <Piece pieceId="new-character" basis="auto">
                  <Button
                    variant="outline"
                    className="h-12 px-6 text-base"
                    onClick={() => {
                      cb.reset();
                      setCharacterStarted(true);
                      goTo("abilities");
                      toast({ title: "New character", description: "Started a fresh build." });
                    }}
                    data-testid="button-new-character"
                  >
                    <UserPlus className="mr-2 h-6 w-6" />
                    <span>New Character</span>
                  </Button>
                </Piece>
                {/* The character-name field, moved up beside the
                    New Character button (Shaun, 2026-11-07: "Put
                    the unnamed character button next to the new
                    character button — in between the new character
                    button and the abilities"): one tight row —
                    New Character · name field · Abilities onward.
                    Same field, same wiring (viewBuild/viewCb, so
                    the New-button gate applies exactly as it did
                    inside the Abilities panel); only its position
                    changed. It lived on top of the Abilities panel
                    from v20.41 until this move. */}
                <Piece pieceId="name-box" basis="auto">
                  <div
                    className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-md border border-input bg-background py-1 pl-3 pr-3"
                    data-testid="character-heading-box"
                  >
                    <Input
                      id="character-name"
                      data-testid="input-character-name"
                      aria-label="Character name"
                      value={viewBuild.name}
                      onChange={(e) => viewCb.setName(e.target.value)}
                      className="h-9 w-44 border-0 bg-transparent px-0 font-display shadow-none focus-visible:ring-0 sm:w-56"
                      placeholder="Unnamed Character"
                    />
                  </div>
                </Piece>
                {visibleSteps
                  .filter((s) => s.id !== "reference" && s.id !== "item-creation" && s.id !== "spelljamming")
                  .map((s) => (
                    <TabsTrigger
                      key={s.id}
                      value={s.id}
                      data-testid={`tab-step-${s.id}`}
                      // Psionics gray-out (Shaun, 2026-11-04): the
                      // Psionics step's button renders grayed when
                      // the build has no psionic class — the
                      // APOC-style "not applicable" treatment. The
                      // step still opens for reference; the gray
                      // lifts when a psionic class is on the build.
                      className={
                        s.id === "psionics" && !buildHasPsionics(viewBuild) ? "text-muted-foreground/60 opacity-60" : undefined
                      }
                    >
                      {s.label}
                    </TabsTrigger>
                  ))}
              </Zone>
            )}
          </TabsList>
        </Tabs>

        {/* The Abilities step, the Spelljamming page, and Player
            Reference ride up tight (Shaun, 2026-11-07: "push
            everything up" — no dead gap above them); other steps
            keep mt-6. */}
        <div className={effectiveStep === "abilities" || effectiveStep === "spelljamming" || effectiveStep === "reference" || effectiveStep === "equipment" || effectiveStep === "magic-items" || effectiveStep === "inventory" || effectiveStep === "psionics" || effectiveStep === "sheet" ? "mt-1" : "mt-6"}>
          {currentStep === "abilities" && (
            <div data-testid="step-panel-abilities">
              {/* Step 1 is Abilities. The name box that sat on
                  top of this panel (v20.41) moved up beside the
                  New Character button on 2026-11-07 at Shaun's
                  order — it lives in the Character Creation panel
                  now, between New Character and the Abilities
                  tab. There is still no separate Name step and no
                  second name box anywhere. */}
              <StepAbilities
                baseAbilityScores={viewBuild.baseAbilityScores}
                disabledAbilities={viewBuild.disabledAbilities}
                onAbilityChange={viewCb.setAbility}
                onAllAbilitiesChange={viewCb.setAllAbilities}
                onToggleAbilityEnabled={viewCb.toggleAbilityEnabled}
              />
            </div>
          )}
          {currentStep === "race" && (
            <StepRace
              raceId={viewBuild.raceId}
              enabledRulesets={viewBuild.enabledRulesets}
              disabledRaceIds={viewBuild.disabledRaceIds}
              onRaceChange={viewCb.setRace}
              onToggleRaceEnabled={viewCb.toggleRaceEnabled}
            />
          )}
          {effectiveStep === "classes" && (
            <StepClasses
              classLevels={viewBuild.classLevels}
              enabledRulesets={viewBuild.enabledRulesets}
              disabledClassIds={viewBuild.disabledClassIds}
              resolved={viewResolved}
              onAdd={viewCb.addClassLevel}
              onRemove={viewCb.removeClassLevel}
              onToggleClassEnabled={viewCb.toggleClassEnabled}
            />
          )}
          {effectiveStep === "prestige" && (
            <StepPrestige
              prestigeClassLevels={viewBuild.prestigeClassLevels}
              enabledRulesets={viewBuild.enabledRulesets}
              disabledClassIds={viewBuild.disabledClassIds}
              certifications={viewBuild.prestigePrereqCertifications}
              resolved={viewResolved}
              onAddPrestige={viewCb.addPrestigeLevel}
              onRemovePrestige={viewCb.removePrestigeLevel}
              onToggleClassEnabled={viewCb.toggleClassEnabled}
              onTogglePrestigeCertification={viewCb.togglePrestigeCertification}
            />
          )}
          {effectiveStep === "spells" && (
            <StepSpells build={viewBuild} resolved={viewResolved} onToggleSpell={viewCb.toggleSpell} />
          )}
          {currentStep === "skills" && (
            <StepSkills
              skillRanks={viewBuild.skillRanks}
              enabledRulesets={viewBuild.enabledRulesets}
              disabledSkillIds={viewBuild.disabledSkillIds}
              resolved={viewResolved}
              onSetRank={viewCb.setSkillRank}
              onToggleSkillEnabled={viewCb.toggleSkillEnabled}
            />
          )}
          {currentStep === "templates" && (
            <StepTemplates
              templates={viewBuild.templates}
              baseType={viewResolved.race.type}
              enabledRulesets={viewBuild.enabledRulesets}
              onAdd={viewCb.addTemplate}
              onRemove={viewCb.removeTemplate}
              onReorder={viewCb.reorderTemplate}
              onSetForm={viewCb.setTemplateForm}
              validation={viewResolved.validation}
            />
          )}
          {currentStep === "feats" && (
            <StepFeats
              featIds={viewBuild.featIds}
              enabledRulesets={viewBuild.enabledRulesets}
              disabledFeatIds={viewBuild.disabledFeatIds}
              resolved={viewResolved}
              onToggleFeat={viewCb.toggleFeat}
              onToggleFeatEnabled={viewCb.toggleFeatEnabled}
            />
          )}
          {currentStep === "equipment" && (
            <StepEquipment
              inventory={viewBuild.inventory}
              enabledRulesets={viewBuild.enabledRulesets}
              resolved={viewResolved}
              wealthLimitLevel={viewBuild.wealthLimitLevel ?? null}
              onAdd={viewCb.addInventory}
              onRemove={viewCb.removeInventory}
              onToggleEquipped={viewCb.toggleEquipped}
              onSetWealthLimitLevel={viewCb.setWealthLimitLevel}
            />
          )}
          {currentStep === "magic-items" && (
            <StepMagicItems
              inventory={viewBuild.inventory}
              enabledRulesets={viewBuild.enabledRulesets}
              resolved={viewResolved}
              wealthLimitLevel={viewBuild.wealthLimitLevel ?? null}
              onAdd={viewCb.addInventory}
              onRemove={viewCb.removeInventory}
              onToggleEquipped={viewCb.toggleEquipped}
              onSetWealthLimitLevel={viewCb.setWealthLimitLevel}
            />
          )}
          {currentStep === "psionics" && (
            <PieceFrame zoneId="page:psionics">
              <StepPsionics
                build={viewBuild}
                resolved={viewResolved}
                onToggleSpell={viewCb.toggleSpell}
                onToggleFeat={viewCb.toggleFeat}
                onAddClass={viewCb.addClassLevel}
                onRemoveClass={viewCb.removeClassLevel}
                onAddPrestige={viewCb.addPrestigeLevel}
                onRemovePrestige={viewCb.removePrestigeLevel}
                onAddInventory={viewCb.addInventory}
              />
            </PieceFrame>
          )}
          {currentStep === "inventory" && (
            <StepInventory
              inventory={viewBuild.inventory}
              enabledRulesets={viewBuild.enabledRulesets}
              resolved={viewResolved}
              wealthLimitLevel={viewBuild.wealthLimitLevel ?? null}
              onAdd={viewCb.addInventory}
              onRemove={viewCb.removeInventory}
              onToggleEquipped={viewCb.toggleEquipped}
              onSetWealthLimitLevel={viewCb.setWealthLimitLevel}
            />
          )}
          {currentStep === "personality" && (
            <StepPersonality build={viewBuild} resolved={viewResolved} onChange={viewCb.updatePersonality} />
          )}
          {currentStep === "sheet" && (
            <PieceFrame zoneId="page:sheet">
              <StepSheet character={viewResolved} />
            </PieceFrame>
          )}
          {currentStep === "reference" && <StepReference />}
          {currentStep === "item-creation" && (
            <PieceFrame zoneId="page:item-creation">
              <StepItemCreation />
            </PieceFrame>
          )}
          {currentStep === "spelljamming" && (
            <PieceFrame zoneId="page:spelljamming">
              <StepSpelljamming />
            </PieceFrame>
          )}
        </div>

        <div className={`${effectiveStep === "reference" || effectiveStep === "item-creation" || effectiveStep === "spelljamming" || effectiveStep === "abilities" || effectiveStep === "equipment" || effectiveStep === "magic-items" || effectiveStep === "inventory" || effectiveStep === "psionics" || effectiveStep === "sheet" ? "mt-2" : "mt-8"} flex items-center justify-between`}>
          <Button variant="outline" size="sm" disabled={!prev} onClick={() => prev && goTo(prev.id)} data-testid="button-prev-step">
            <ChevronLeft className="mr-1 h-4 w-4" /> {prev ? prev.label : "Back"}
          </Button>
          <span className="text-xs text-muted-foreground">
            {effectiveStep === "reference"
              ? "Section 1 of 4 — Player Reference"
              : effectiveStep === "item-creation"
                ? "Section 3 of 4 — Magic Item Creation"
                : effectiveStep === "spelljamming"
                  ? "Section 4 of 4 — Spelljamming"
                  : "Section 2 of 4 — Character Creation"}
          </span>
          <Button size="sm" disabled={!next} onClick={() => next && goTo(next.id)} data-testid="button-next-step">
            {next ? next.label : "Done"} <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </main>
      {/* No bottom footer section (Shaun, 2026-11-07): the
          "Blendcrafter open-source template / blending" footer
          with its About / Attribution button is removed — the
          page ends with the content above. The ogl-footer
          component file remains in the tree, unreferenced. */}
    </div>
    </PiecesProvider>
  );
}
