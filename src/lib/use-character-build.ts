import { useCallback, useMemo, useState } from "react";
import {
  ABILITY_KEYS,
  type AbilityKey,
  type AppliedTemplateChoice,
  type CharacterBuild,
  type InventoryEntry,
  type PersonalityProfile,
  type ResolvedCharacter,
  type Ruleset,
} from "@/engine/types";
import { resolveCharacter } from "@/engine/resolver";
import { buildPrereqContext, evaluatePrestigeClass } from "@/engine/prestige-prerequisites";
import { ALL_PRESTIGE_CLASSES } from "@/data";
import { DEFAULT_HOUSE_RULES } from "@/engine/house-rules";
import { DEFAULT_PERSONALITY } from "@/engine/personality";

/** The classic 15/14/13/12/10/8 spread, assigned in ability order. */
export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

export function createDefaultBuild(): CharacterBuild {
  const baseAbilityScores = {} as Record<AbilityKey, number>;
  ABILITY_KEYS.forEach((key, i) => {
    baseAbilityScores[key] = STANDARD_ARRAY[i] ?? 10;
  });
  return {
    name: "Unnamed Character",
    raceId: "human",
    baseAbilityScores,
    classLevels: [],
    prestigeClassLevels: [],
    templates: [],
    skillRanks: {},
    featIds: [],
    prestigePrereqCertifications: {},
    selectedSpells: {},
    inventory: [],
    // Standard set (Shaun's live choice, made the default 2026-10-27):
    // every toggleable ruleset on.
    enabledRulesets: ["core", "eberron", "iron_kingdoms", "sorcery_steam", "homebrew"],
    houseRules: { ...DEFAULT_HOUSE_RULES },
    disabledRaceIds: [],
    disabledClassIds: [],
    disabledSkillIds: [],
    disabledFeatIds: [],
    disabledAbilities: [],
    personality: structuredClone(DEFAULT_PERSONALITY),
  };
}

/** Fill any missing fields on an imported/loaded build with defaults. */
export function normalizeBuild(input: CharacterBuild): CharacterBuild {
  const base = createDefaultBuild();
  return {
    ...base,
    ...input,
    baseAbilityScores: { ...base.baseAbilityScores, ...(input.baseAbilityScores ?? {}) },
    // Shaun's permanent lock (2026-10-27): cross-class skills never cost
    // double — forced off on every load, even for builds saved while it
    // was on. Stays off until Shaun asks to turn it on.
    houseRules: { ...base.houseRules, ...(input.houseRules ?? {}), crossClassSkillDoubleCost: false },
    // Batch 12: builds saved before spell selection existed have no
    // selectedSpells field — default to no selections.
    selectedSpells: { ...(input.selectedSpells ?? {}) },
    // 2026-10-28 rename (Shaun's direction): the homebrew ruleset used to
    // carry a person's name as its id; it is now "homebrew". Builds saved
    // before the rename carry that retired id, so any ruleset id this
    // version does not recognize is migrated to "homebrew" — the only
    // retired id that ever shipped — keeping saved toggle state and
    // homebrew content intact without the old name shipping in the app.
    enabledRulesets: Array.from(
      new Set(
        (input.enabledRulesets ?? base.enabledRulesets).map((r) =>
          (["core", "eberron", "iron_kingdoms", "sorcery_steam", "homebrew"] as string[]).includes(r as string)
            ? r
            : ("homebrew" as Ruleset)
        )
      )
    ),
    personality: { ...base.personality, ...(input.personality ?? {}), weights: { ...base.personality.weights, ...(input.personality?.weights ?? {}) } },
  };
}

let inventoryCounter = 0;
function nextEntryId(): string {
  inventoryCounter += 1;
  return `inv-${Date.now()}-${inventoryCounter}`;
}

export interface UseCharacterBuild {
  build: CharacterBuild;
  resolved: ResolvedCharacter;
  setBuild: (build: CharacterBuild) => void;
  updateBuild: (patch: Partial<CharacterBuild>) => void;
  setName: (name: string) => void;
  setRace: (raceId: string) => void;
  setAbility: (key: AbilityKey, value: number) => void;
  setAllAbilities: (scores: Record<AbilityKey, number>) => void;
  addClassLevel: (classId: string) => void;
  removeClassLevel: (classId: string) => void;
  addPrestigeLevel: (classId: string) => void;
  removePrestigeLevel: (classId: string) => void;
  togglePrestigeCertification: (classId: string, prereqText: string, certified: boolean) => void;
  addTemplate: (templateId: string) => void;
  removeTemplate: (templateId: string) => void;
  reorderTemplate: (templateId: string, direction: -1 | 1) => void;
  setTemplateForm: (templateId: string, formId: string) => void;
  setSkillRank: (skillId: string, ranks: number) => void;
  toggleFeat: (featId: string, selected: boolean) => void;
  toggleSpell: (classId: string, spellId: string, selected: boolean) => void;
  addInventory: (kind: InventoryEntry["kind"], itemId: string) => void;
  removeInventory: (id: string) => void;
  toggleEquipped: (id: string, equipped: boolean) => void;
  toggleRuleset: (ruleset: Ruleset, enabled: boolean) => void;
  toggleHouseRule: (id: keyof CharacterBuild["houseRules"], enabled: boolean) => void;
  toggleRaceEnabled: (raceId: string, enabled: boolean) => void;
  toggleClassEnabled: (classId: string, enabled: boolean) => void;
  toggleSkillEnabled: (skillId: string, enabled: boolean) => void;
  toggleFeatEnabled: (featId: string, enabled: boolean) => void;
  toggleAbilityEnabled: (key: AbilityKey, enabled: boolean) => void;
  updatePersonality: (patch: Partial<PersonalityProfile>) => void;
  reset: () => void;
}

function adjustLevels(list: { classId: string; levels: number }[], classId: string, delta: number) {
  const existing = list.find((c) => c.classId === classId);
  if (!existing) return delta > 0 ? [...list, { classId, levels: 1 }] : list;
  const levels = Math.max(0, Math.min(10, existing.levels + delta));
  if (levels === 0) return list.filter((c) => c.classId !== classId);
  return list.map((c) => (c.classId === classId ? { ...c, levels } : c));
}

function toggleId(list: string[], id: string, enabled: boolean): string[] {
  return enabled ? list.filter((x) => x !== id) : list.includes(id) ? list : [...list, id];
}

export function useCharacterBuild(initial?: CharacterBuild): UseCharacterBuild {
  const [build, setBuildState] = useState<CharacterBuild>(() =>
    initial ? normalizeBuild(initial) : createDefaultBuild()
  );

  const resolved = useMemo(() => resolveCharacter(build), [build]);

  const setBuild = useCallback((next: CharacterBuild) => setBuildState(normalizeBuild(next)), []);
  const updateBuild = useCallback((patch: Partial<CharacterBuild>) => {
    setBuildState((b) => ({ ...b, ...patch }));
  }, []);

  const setName = useCallback((name: string) => updateBuild({ name }), [updateBuild]);
  const setRace = useCallback((raceId: string) => updateBuild({ raceId }), [updateBuild]);
  const setAbility = useCallback(
    (key: AbilityKey, value: number) =>
      setBuildState((b) => ({ ...b, baseAbilityScores: { ...b.baseAbilityScores, [key]: value } })),
    []
  );
  const setAllAbilities = useCallback(
    (baseAbilityScores: Record<AbilityKey, number>) => updateBuild({ baseAbilityScores }),
    [updateBuild]
  );

  const addClassLevel = useCallback(
    (classId: string) => setBuildState((b) => ({ ...b, classLevels: adjustLevels(b.classLevels, classId, 1) })),
    []
  );
  const removeClassLevel = useCallback(
    (classId: string) => setBuildState((b) => ({ ...b, classLevels: adjustLevels(b.classLevels, classId, -1) })),
    []
  );
  const addPrestigeLevel = useCallback((classId: string) => {
    setBuildState((b) => {
      // Prestige classes are gated: refuse the add unless every
      // machine-checkable prerequisite is met and every "special"
      // prerequisite has been player-certified for this build.
      const def = ALL_PRESTIGE_CLASSES.find((c) => c.id === classId);
      if (def) {
        const gate = evaluatePrestigeClass(
          def,
          buildPrereqContext(resolveCharacter(b)),
          (b.prestigePrereqCertifications ?? {})[classId] ?? []
        );
        if (!gate.selectable) return b;
      }
      return { ...b, prestigeClassLevels: adjustLevels(b.prestigeClassLevels, classId, 1) };
    });
  }, []);
  const togglePrestigeCertification = useCallback((classId: string, prereqText: string, certified: boolean) => {
    setBuildState((b) => {
      const all = b.prestigePrereqCertifications ?? {};
      const current = all[classId] ?? [];
      const next = certified
        ? current.includes(prereqText)
          ? current
          : [...current, prereqText]
        : current.filter((t) => t !== prereqText);
      if (next === current) return b;
      const certifications = { ...all };
      if (next.length > 0) certifications[classId] = next;
      else delete certifications[classId];
      return { ...b, prestigePrereqCertifications: certifications };
    });
  }, []);
  const removePrestigeLevel = useCallback(
    (classId: string) =>
      setBuildState((b) => ({ ...b, prestigeClassLevels: adjustLevels(b.prestigeClassLevels, classId, -1) })),
    []
  );

  const addTemplate = useCallback((templateId: string) => {
    setBuildState((b) =>
      b.templates.some((t) => t.templateId === templateId)
        ? b
        : { ...b, templates: [...b.templates, { templateId } as AppliedTemplateChoice] }
    );
  }, []);
  const removeTemplate = useCallback((templateId: string) => {
    setBuildState((b) => ({ ...b, templates: b.templates.filter((t) => t.templateId !== templateId) }));
  }, []);
  const reorderTemplate = useCallback((templateId: string, direction: -1 | 1) => {
    setBuildState((b) => {
      const idx = b.templates.findIndex((t) => t.templateId === templateId);
      const swap = idx + direction;
      if (idx < 0 || swap < 0 || swap >= b.templates.length) return b;
      const templates = [...b.templates];
      [templates[idx], templates[swap]] = [templates[swap], templates[idx]];
      return { ...b, templates };
    });
  }, []);
  const setTemplateForm = useCallback((templateId: string, formId: string) => {
    setBuildState((b) => ({
      ...b,
      templates: b.templates.map((t) => (t.templateId === templateId ? { ...t, formId } : t)),
    }));
  }, []);

  const setSkillRank = useCallback((skillId: string, ranks: number) => {
    setBuildState((b) => ({ ...b, skillRanks: { ...b.skillRanks, [skillId]: Math.max(0, ranks) } }));
  }, []);

  const toggleFeat = useCallback((featId: string, selected: boolean) => {
    setBuildState((b) => ({
      ...b,
      featIds: selected ? (b.featIds.includes(featId) ? b.featIds : [...b.featIds, featId]) : b.featIds.filter((f) => f !== featId),
    }));
  }, []);

  const toggleSpell = useCallback((classId: string, spellId: string, selected: boolean) => {
    setBuildState((b) => {
      const current = b.selectedSpells?.[classId] ?? [];
      const next = selected
        ? current.includes(spellId)
          ? current
          : [...current, spellId]
        : current.filter((s) => s !== spellId);
      if (next === current) return b;
      const selectedSpells = { ...(b.selectedSpells ?? {}) };
      if (next.length > 0) selectedSpells[classId] = next;
      else delete selectedSpells[classId];
      return { ...b, selectedSpells };
    });
  }, []);

  const addInventory = useCallback((kind: InventoryEntry["kind"], itemId: string) => {
    setBuildState((b) => ({
      ...b,
      inventory: [...b.inventory, { id: nextEntryId(), kind, itemId, equipped: false }],
    }));
  }, []);
  const removeInventory = useCallback((id: string) => {
    setBuildState((b) => ({ ...b, inventory: b.inventory.filter((e) => e.id !== id) }));
  }, []);
  const toggleEquipped = useCallback((id: string, equipped: boolean) => {
    setBuildState((b) => ({
      ...b,
      inventory: b.inventory.map((e) => (e.id === id ? { ...e, equipped } : e)),
    }));
  }, []);

  const toggleRuleset = useCallback((ruleset: Ruleset, enabled: boolean) => {
    setBuildState((b) => {
      const extra = b.enabledRulesets.filter((r) => r !== "core" && r !== ruleset);
      if (enabled) extra.push(ruleset);
      return { ...b, enabledRulesets: ["core", ...extra] as Ruleset[] };
    });
  }, []);
  const toggleHouseRule = useCallback((id: keyof CharacterBuild["houseRules"], enabled: boolean) => {
    // Permanent lock (Shaun, 2026-10-27): the cross-class double-cost rule
    // cannot be switched on. Off until Shaun asks to turn it on.
    if (id === "crossClassSkillDoubleCost" && enabled) return;
    setBuildState((b) => ({ ...b, houseRules: { ...b.houseRules, [id]: enabled } }));
  }, []);

  const toggleRaceEnabled = useCallback(
    (raceId: string, enabled: boolean) =>
      setBuildState((b) => ({ ...b, disabledRaceIds: toggleId(b.disabledRaceIds, raceId, enabled) })),
    []
  );
  const toggleClassEnabled = useCallback(
    (classId: string, enabled: boolean) =>
      setBuildState((b) => ({ ...b, disabledClassIds: toggleId(b.disabledClassIds, classId, enabled) })),
    []
  );
  const toggleSkillEnabled = useCallback(
    (skillId: string, enabled: boolean) =>
      setBuildState((b) => ({ ...b, disabledSkillIds: toggleId(b.disabledSkillIds, skillId, enabled) })),
    []
  );
  const toggleFeatEnabled = useCallback(
    (featId: string, enabled: boolean) =>
      setBuildState((b) => ({ ...b, disabledFeatIds: toggleId(b.disabledFeatIds, featId, enabled) })),
    []
  );
  const toggleAbilityEnabled = useCallback((key: AbilityKey, enabled: boolean) => {
    setBuildState((b) => ({
      ...b,
      disabledAbilities: enabled ? b.disabledAbilities.filter((k) => k !== key) : [...b.disabledAbilities, key],
    }));
  }, []);

  const updatePersonality = useCallback((patch: Partial<PersonalityProfile>) => {
    setBuildState((b) => ({ ...b, personality: { ...b.personality, ...patch } }));
  }, []);

  const reset = useCallback(() => setBuildState(createDefaultBuild()), []);

  return {
    build,
    resolved,
    setBuild,
    updateBuild,
    setName,
    setRace,
    setAbility,
    setAllAbilities,
    addClassLevel,
    removeClassLevel,
    addPrestigeLevel,
    removePrestigeLevel,
    togglePrestigeCertification,
    addTemplate,
    removeTemplate,
    reorderTemplate,
    setTemplateForm,
    setSkillRank,
    toggleFeat,
    toggleSpell,
    addInventory,
    removeInventory,
    toggleEquipped,
    toggleRuleset,
    toggleHouseRule,
    toggleRaceEnabled,
    toggleClassEnabled,
    toggleSkillEnabled,
    toggleFeatEnabled,
    toggleAbilityEnabled,
    updatePersonality,
    reset,
  };
}
