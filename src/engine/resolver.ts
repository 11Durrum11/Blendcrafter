import {
  ABILITY_KEYS,
  type AbilityKey,
  type AuditEntry,
  type CharacterBuild,
  type ClassDefinition,
  type CreatureType,
  type FeatureDefinition,
  type Modifier,
  type Patch,
  type RaceDefinition,
  type ResolvedCharacter,
  type ResolvedSkill,
  type SaveKey,
  type Size,
  type TemplateDefinition,
  type ValidationIssue,
} from "./types";
import { ALL_CLASSES, ALL_EQUIPMENT, ALL_FEATS, ALL_MAGIC_ITEMS, ALL_PRESTIGE_CLASSES, ALL_RACES, ALL_SKILLS, ALL_TEMPLATES } from "@/data";
import { checkPrerequisites, checkTemplateOrdering } from "./prerequisites";
import { buildPrereqContext, evaluatePrestigeClass } from "./prestige-prerequisites";
import { validateSelectedSpells } from "./spells";
import { computeSynergies } from "./skill-synergy";
import { resolveModifierStack, formatSigned } from "./stacking";
import { averageRoll, parseDieFaces, stepDieSize } from "./dice";
import { progressionRow, SAVE_ABILITY } from "./progression";

/**
 * The 8-phase character resolver (see README "Resolver phases"):
 *   1. Normalize base creature      5. Merge features
 *   2. Validate template order     6. Derive statistics
 *   3. Apply structural patches    7. LA buyoff ledger
 *   4. Apply modifiers             8. Audit trail (woven through every phase)
 */

const SIZE_AC_MODIFIER: Record<Size, number> = {
  Fine: 8,
  Diminutive: 4,
  Tiny: 2,
  Small: 1,
  Medium: 0,
  Large: -1,
  Huge: -2,
  Gargantuan: -4,
  Colossal: -8,
};

const RACES_BY_ID = new Map(ALL_RACES.map((r) => [r.id, r]));
const CLASSES_BY_ID = new Map(ALL_CLASSES.map((c) => [c.id, c]));
const PRESTIGE_BY_ID = new Map(ALL_PRESTIGE_CLASSES.map((c) => [c.id, c]));
const TEMPLATES_BY_ID = new Map(ALL_TEMPLATES.map((t) => [t.id, t]));
const EQUIPMENT_BY_ID = new Map(ALL_EQUIPMENT.map((e) => [e.id, e]));
const MAGIC_BY_ID = new Map(ALL_MAGIC_ITEMS.map((m) => [m.id, m]));
const FEATS_BY_ID = new Map(ALL_FEATS.map((f) => [f.id, f]));

export function resolveCharacter(build: CharacterBuild): ResolvedCharacter {
  /* ---------------- Phase 1: normalize base creature ---------------- */
  const race: RaceDefinition = RACES_BY_ID.get(build.raceId) ?? ALL_RACES[0];
  const baseType = race.type;
  let type: CreatureType = race.type;
  let subtypes: string[] = [...race.subtypes];
  let size: Size = race.size;
  const speed: Record<string, number> = { base: race.baseSpeed };

  const appliedDefs: { def: TemplateDefinition; formId?: string }[] = [];
  for (const choice of build.templates) {
    const def = TEMPLATES_BY_ID.get(choice.templateId);
    if (def) appliedDefs.push({ def, formId: choice.formId });
  }

  /* ---------------- Phase 2: validate order + prerequisites --------- */
  const validation: ValidationIssue[] = [...checkTemplateOrdering(build.templates, TEMPLATES_BY_ID)];
  {
    let simulatedType = baseType;
    const appliedIds: string[] = [];
    for (const { def } of appliedDefs) {
      validation.push(...checkPrerequisites(def, { baseType, type: simulatedType, subtypes, appliedTemplateIds: appliedIds }));
      appliedIds.push(def.id);
      const typePatch = def.patches?.find((p) => p.op === "set-type");
      if (typePatch?.value) simulatedType = typePatch.value as CreatureType;
    }
  }

  /* ---------------- Phase 3: structural patches --------------------- */
  let hitDieStepUps = 0;
  let allDiceD12 = false;
  let animalHitDice = 0;

  const applyPatches = (def: TemplateDefinition, patches: Patch[] | undefined) => {
    for (const patch of patches ?? []) {
      switch (patch.op) {
        case "set-type": {
          type = patch.value as CreatureType;
          if (type === "Undead") allDiceD12 = true;
          break;
        }
        case "add-subtype":
          if (patch.value && !subtypes.includes(String(patch.value))) subtypes.push(String(patch.value));
          break;
        case "remove-subtype":
          subtypes = subtypes.filter((s) => s !== String(patch.value));
          break;
        case "set-size":
          size = patch.value as Size;
          break;
        case "increase-hit-dice":
          hitDieStepUps += patch.amount ?? 0;
          break;
        case "set-speed":
          if (typeof patch.value === "number") speed.base = patch.value;
          break;
        case "add-speed": {
          const mode = String(patch.value ?? "fly");
          const amount = patch.amount ?? 0;
          speed[mode] = Math.max(speed[mode] ?? 0, amount);
          break;
        }
      }
    }
    void def;
  };

  for (const { def, formId } of appliedDefs) {
    applyPatches(def, def.patches);
    const form = def.forms?.find((f) => f.id === formId) ?? def.forms?.[0];
    if (def.forms && form) {
      applyPatches(def, form.patches);
      animalHitDice += form.hitDiceIncrease ?? 0;
    }
  }

  /* ---------------- Phase 4: modifiers ------------------------------ */
  const modifierPool: Modifier[] = [];

  // Racial skill bonuses become ordinary racial-type modifiers.
  for (const [skillId, value] of Object.entries(race.skillBonuses ?? {})) {
    modifierPool.push({
      id: `race-skill-${skillId}`,
      source: race.name,
      sourceUrl: race.sourceUrl,
      target: `skill.${skillId}`,
      value,
      mode: "add",
      bonusType: "racial",
      note: `${race.name} racial skill bonus.`,
    });
  }
  // Halfling-style across-the-board save luck lives in traits text for most
  // races; the halfling's "+1 on all saving throws" is mechanical, so model it.
  if (race.id === "halfling") {
    for (const save of ["fort", "ref", "will"] as SaveKey[]) {
      modifierPool.push({
        id: `halfling-luck-${save}`,
        source: "Halfling Luck",
        sourceUrl: race.sourceUrl,
        target: `save.${save}`,
        value: 1,
        mode: "add",
        bonusType: "racial",
        note: "+1 racial bonus on all saving throws.",
      });
    }
  }

  for (const { def, formId } of appliedDefs) {
    modifierPool.push(...(def.modifiers ?? []));
    const form = def.forms?.find((f) => f.id === formId) ?? def.forms?.[0];
    if (def.forms && form) modifierPool.push(...(form.modifiers ?? []));
  }

  const selectedFeats = build.featIds
    .map((id) => FEATS_BY_ID.get(id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));
  for (const feat of selectedFeats) modifierPool.push(...(feat.modifiers ?? []));

  // Equipped armor/shields and magic-item modifiers join the same pool.
  const resolvedInventory = build.inventory.flatMap((entry) => {
    if (entry.kind === "equipment") {
      const item = EQUIPMENT_BY_ID.get(entry.itemId);
      if (!item) return [];
      if (entry.equipped && typeof item.acBonus === "number") {
        const isShield = item.category === "shield";
        modifierPool.push({
          id: `equip-${entry.id}`,
          source: item.name,
          sourceUrl: item.sourceUrl,
          target: isShield ? "ac.shield" : "ac.armor",
          value: item.acBonus,
          mode: "add",
          bonusType: isShield ? "shield" : "armor",
          note: `Equipped ${isShield ? "shield" : "armor"} bonus.`,
        });
      }
      return [{
        entry,
        name: item.name,
        category: item.category,
        summary: `${item.cost} · ${item.weight} · ${item.notes}`,
        source: item.source,
        sourceUrl: item.sourceUrl,
      }];
    }
    const item = MAGIC_BY_ID.get(entry.itemId);
    if (!item) return [];
    modifierPool.push(...(item.modifiers ?? []));
    return [{
      entry,
      name: item.name,
      category: item.category,
      summary: item.summary,
      source: item.source,
      sourceUrl: item.sourceUrl,
    }];
  });

  /* ---------------- Ability scores ---------------------------------- */
  const abilityScores = {} as ResolvedCharacter["abilityScores"];
  const abilityModifier = {} as Record<AbilityKey, number | null>;

  for (const key of ABILITY_KEYS) {
    const audit: AuditEntry[] = [];
    const target = `ability.${key}`;
    const disabled = build.disabledAbilities.includes(key);
    let total: number | null = disabled ? 10 : build.baseAbilityScores[key] ?? 10;
    audit.push({
      source: disabled ? "Ability disabled (house option)" : "Base score",
      target,
      operation: disabled ? "Locked at 10 (+0)" : `Base ability score ${total}`,
      resultingValue: total,
      note: disabled ? "Disabled abilities are locked at 10 before adjustments." : undefined,
    });

    const racial = race.abilityModifiers[key];
    if (typeof racial === "number" && racial !== 0 && total !== null) {
      total += racial;
      audit.push({ source: race.name, sourceUrl: race.sourceUrl, target, operation: `${formatSigned(racial)} racial adjustment`, resultingValue: total });
    }

    for (const { def, formId } of appliedDefs) {
      const sources: [string, TemplateDefinition["abilityModifiers"]][] = [[def.name, def.abilityModifiers]];
      const form = def.forms?.find((f) => f.id === formId) ?? def.forms?.[0];
      if (def.forms && form) sources.push([`${def.name} (${form.name})`, form.abilityModifiers]);
      for (const [sourceName, mods] of sources) {
        const delta = mods?.[key];
        if (delta === null) {
          total = null;
          audit.push({
            source: sourceName,
            sourceUrl: def.sourceUrl,
            target,
            operation: "Ability score removed",
            resultingValue: "—",
            note: `${sourceName} removes this ability score (e.g. undead have no Constitution).`,
          });
        } else if (typeof delta === "number" && delta !== 0 && total !== null) {
          total += delta;
          audit.push({ source: sourceName, sourceUrl: def.sourceUrl, target, operation: `${formatSigned(delta)} template adjustment`, resultingValue: total });
        }
      }
    }

    const modifier = total === null ? null : Math.floor((total - 10) / 2);
    abilityModifier[key] = modifier;
    abilityScores[key] = { total, modifier, audit };
  }

  const abilityModOr0 = (key: AbilityKey): number => abilityModifier[key] ?? 0;

  /* ---------------- Hit dice & hit points --------------------------- */
  const classChoices: { def: ClassDefinition; levels: number; prestige: boolean }[] = [];
  for (const choice of build.classLevels) {
    const def = CLASSES_BY_ID.get(choice.classId);
    if (def && choice.levels > 0) classChoices.push({ def, levels: choice.levels, prestige: false });
  }
  for (const choice of build.prestigeClassLevels) {
    const def = PRESTIGE_BY_ID.get(choice.classId);
    if (def && choice.levels > 0) classChoices.push({ def, levels: choice.levels, prestige: true });
  }
  const classHitDice = classChoices.reduce((s, c) => s + c.levels, 0);
  const racialHitDice = (race.racialHitDice ?? 0) + animalHitDice;
  const totalHitDice = classHitDice + racialHitDice;

  const hpAudit: AuditEntry[] = [];
  let hpTotal = 0;
  const conMod = abilityModOr0("con");
  const dieFor = (faces: number) => (allDiceD12 ? 12 : faces);

  if (racialHitDice > 0) {
    const baseFaces = parseDieFaces(race.hitDie ?? "d8") || 8;
    const faces = dieFor(stepDieSize(baseFaces, hitDieStepUps));
    const rolled = Math.floor(averageRoll(faces) * racialHitDice);
    hpTotal += rolled;
    hpAudit.push({
      source: animalHitDice > 0 ? "Racial / animal Hit Dice" : race.name,
      sourceUrl: race.sourceUrl,
      target: "hp",
      operation: `${racialHitDice} × average ${`d${faces}`} (${averageRoll(faces)})`,
      resultingValue: hpTotal,
      note: hitDieStepUps > 0 ? "Hit die size stepped up by template patches." : undefined,
    });
  }

  let firstClassLevel = true;
  for (const { def, levels } of classChoices) {
    const faces = dieFor(parseDieFaces(def.hitDie) || 8);
    let classHp = 0;
    for (let i = 0; i < levels; i++) {
      classHp += firstClassLevel ? faces : Math.floor(averageRoll(faces));
      firstClassLevel = false;
    }
    hpTotal += classHp;
    hpAudit.push({
      source: def.name,
      sourceUrl: def.sourceUrl,
      target: "hp",
      operation: `${levels} level(s) of ${def.name} (${def.hitDie}${allDiceD12 ? " → d12 as undead" : ""}; first character level takes the maximum die)`,
      resultingValue: hpTotal,
    });
  }

  if (totalHitDice > 0 && abilityScores.con.total !== null) {
    const conBonus = conMod * totalHitDice;
    hpTotal += conBonus;
    hpAudit.push({ source: "Constitution", target: "hp", operation: `${formatSigned(conMod)} per Hit Die × ${totalHitDice} HD`, resultingValue: hpTotal });
  } else if (abilityScores.con.total === null) {
    hpAudit.push({ source: "Undead traits", target: "hp", operation: "No Constitution score — no Constitution bonus to hit points", resultingValue: hpTotal });
  }

  const hpBonusStack = resolveModifierStack(modifierPool, "hp.bonus");
  if (hpBonusStack.value !== 0) {
    hpTotal += hpBonusStack.value;
    hpAudit.push(...hpBonusStack.audit.map((a) => ({ ...a, resultingValue: hpTotal })));
  }
  const hp = { total: hpTotal, audit: hpAudit };

  /* ---------------- BAB & saves -------------------------------------- */
  const babAudit: AuditEntry[] = [];
  let babTotal = 0;
  const saveBase: Record<SaveKey, number> = { fort: 0, ref: 0, will: 0 };
  const saveAudits: Record<SaveKey, AuditEntry[]> = { fort: [], ref: [], will: [] };

  for (const { def, levels } of classChoices) {
    const row = progressionRow(def, levels);
    babTotal += row.bab;
    babAudit.push({ source: def.name, sourceUrl: def.sourceUrl, target: "bab", operation: `BAB ${formatSigned(row.bab)} at ${def.name} level ${levels}`, resultingValue: babTotal });
    for (const save of ["fort", "ref", "will"] as SaveKey[]) {
      saveBase[save] += row[save];
      saveAudits[save].push({ source: def.name, sourceUrl: def.sourceUrl, target: `save.${save}`, operation: `Base save ${formatSigned(row[save])} at ${def.name} level ${levels}`, resultingValue: saveBase[save] });
    }
  }
  if (classChoices.length === 0) {
    babAudit.push({ source: "No class levels", target: "bab", operation: "Base attack bonus +0", resultingValue: 0 });
  }
  const bab = { total: babTotal, audit: babAudit };

  const saves = {} as ResolvedCharacter["saves"];
  for (const save of ["fort", "ref", "will"] as SaveKey[]) {
    const audit = [...saveAudits[save]];
    let total = saveBase[save];
    const abilityKey = SAVE_ABILITY[save];
    const mod = abilityModOr0(abilityKey);
    if (abilityScores[abilityKey].total === null) {
      audit.push({ source: "No ability score", target: `save.${save}`, operation: `${abilityKey.toUpperCase()} removed — no ability modifier applies`, resultingValue: total });
    } else {
      total += mod;
      audit.push({ source: `${abilityKey.toUpperCase()} modifier`, target: `save.${save}`, operation: `${formatSigned(mod)} ability modifier`, resultingValue: total });
    }
    const stack = resolveModifierStack(modifierPool, `save.${save}`);
    total += stack.value;
    audit.push(...stack.audit.map((a) => ({ ...a, resultingValue: total })));
    saves[save] = { total, audit };
  }

  /* ---------------- Armor class -------------------------------------- */
  const acAudit: AuditEntry[] = [
    { source: "Base", target: "ac", operation: "Base armor class 10", resultingValue: 10 },
  ];
  const components: Record<string, { value: number }> = { base: { value: 10 } };

  const setComponent = (key: string, value: number, audits: AuditEntry[]) => {
    if (value !== 0) components[key] = { value };
    acAudit.push(...audits);
  };

  // Natural armor: the race's base value, improved by template "improve" mods.
  {
    const stack = resolveModifierStack(modifierPool, "ac.natural");
    const natural = (race.naturalArmor ?? 0) + stack.value;
    const audits: AuditEntry[] = [];
    if (race.naturalArmor) {
      audits.push({ source: race.name, sourceUrl: race.sourceUrl, target: "ac", operation: `${formatSigned(race.naturalArmor)} base natural armor`, resultingValue: natural });
    }
    audits.push(...stack.audit.map((a) => ({ ...a, target: "ac" })));
    setComponent("natural-armor", natural, audits);
  }

  // Every other ac.* target present in the pool (armor, shield, deflection, …).
  const acTargets = new Set(
    modifierPool.filter((m) => m.target.startsWith("ac.") && m.target !== "ac.natural").map((m) => m.target)
  );
  for (const target of acTargets) {
    const stack = resolveModifierStack(modifierPool, target);
    setComponent(target.slice(3), stack.value, stack.audit.map((a) => ({ ...a, target: "ac" })));
  }

  const dexComponent = abilityModOr0("dex");
  setComponent("dexterity", dexComponent, [
    { source: "Dexterity", target: "ac", operation: `${formatSigned(dexComponent)} Dexterity modifier`, resultingValue: dexComponent },
  ]);
  const sizeComponent = SIZE_AC_MODIFIER[size];
  setComponent("size", sizeComponent, [
    { source: "Size", target: "ac", operation: `${formatSigned(sizeComponent)} size modifier (${size})`, resultingValue: sizeComponent },
  ]);

  const acTotal = Object.values(components).reduce((s, c) => s + c.value, 0);
  const armorShieldNatural =
    (components.armor?.value ?? 0) + (components.shield?.value ?? 0) + (components["natural-armor"]?.value ?? 0);
  const touch = acTotal - armorShieldNatural;
  const flatFooted = acTotal - Math.max(dexComponent, 0) - (components.dodge?.value ?? 0);
  acAudit.push({ source: "Total", target: "ac", operation: `Armor class ${acTotal} (touch ${touch}, flat-footed ${flatFooted})`, resultingValue: acTotal });
  const ac = { total: acTotal, touch, flatFooted, components, audit: acAudit };

  /* ---------------- Phase 5: merge features -------------------------- */
  const featureMap = new Map<string, FeatureDefinition>();
  const addFeatures = (features: FeatureDefinition[] | undefined) => {
    for (const f of features ?? []) if (!featureMap.has(f.key)) featureMap.set(f.key, f);
  };
  addFeatures(race.traits);
  for (const { def } of classChoices) addFeatures(def.features);
  for (const { def, formId } of appliedDefs) {
    addFeatures(def.features);
    const form = def.forms?.find((f) => f.id === formId) ?? def.forms?.[0];
    if (def.forms && form) addFeatures(form.features);
  }
  for (const feat of selectedFeats) {
    addFeatures([
      {
        key: `feat:${feat.id}`,
        name: feat.name,
        description: feat.benefitSummary,
        category: "feat",
        source: feat.source,
        sourceUrl: feat.sourceUrl,
      },
    ]);
  }
  const features = [...featureMap.values()];

  /* ---------------- Skills ------------------------------------------- */
  const chosenClassDefs = classChoices.map((c) => c.def);
  const isClassSkill = (skillName: string): boolean =>
    chosenClassDefs.some((def) =>
      def.classSkills.some((cs) => {
        if (cs === skillName) return true;
        if (cs.endsWith("(all)")) return skillName.startsWith(cs.replace(" (all)", ""));
        const base = cs.split(" (")[0];
        return skillName === base || skillName.startsWith(`${base} (`);
      })
    );

  const skillPointsAudit: AuditEntry[] = [];
  let skillPointsTotal = 0;
  {
    let firstLevelSeen = false;
    const intMod = abilityModOr0("int");
    for (const { def, levels } of classChoices) {
      for (let i = 0; i < levels; i++) {
        let points = Math.max(1, def.skillPointsPerLevel + intMod);
        if (!firstLevelSeen) {
          points *= 4;
          firstLevelSeen = true;
          skillPointsAudit.push({
            source: def.name,
            sourceUrl: def.sourceUrl,
            target: "skill-points",
            operation: `1st level: (${def.skillPointsPerLevel} + Int ${formatSigned(intMod)}) × 4`,
            resultingValue: points,
          });
          skillPointsTotal += points;
        } else {
          skillPointsTotal += points;
          skillPointsAudit.push({
            source: def.name,
            sourceUrl: def.sourceUrl,
            target: "skill-points",
            operation: `+${points} (${def.skillPointsPerLevel} + Int ${formatSigned(intMod)}, minimum 1)`,
            resultingValue: skillPointsTotal,
          });
        }
      }
    }
    if ((race.bonusSkillPointsAtFirstLevel ?? 0) > 0 || (race.bonusSkillPointsPerLevel ?? 0) > 0) {
      const bonus =
        (race.bonusSkillPointsAtFirstLevel ?? 0) + (race.bonusSkillPointsPerLevel ?? 0) * Math.max(0, classHitDice - 1);
      if (classHitDice > 0 && bonus > 0) {
        skillPointsTotal += bonus;
        skillPointsAudit.push({
          source: race.name,
          sourceUrl: race.sourceUrl,
          target: "skill-points",
          operation: `${formatSigned(bonus)} racial bonus skill points`,
          resultingValue: skillPointsTotal,
        });
      }
    }
    if (classChoices.length === 0) {
      skillPointsAudit.push({ source: "No class levels", target: "skill-points", operation: "No skill points without class levels", resultingValue: 0 });
    }
  }

  let skillPointsSpent = 0;
  const resolvedSkills: ResolvedSkill[] = ALL_SKILLS.map((skill) => {
    const classSkill = isClassSkill(skill.name);
    const levelCap = totalHitDice + 3;
    const maxRanks = classSkill
      ? levelCap
      : build.houseRules.crossClassSkillHalfCap
        ? Math.floor(levelCap / 2)
        : levelCap;
    const rankCost = classSkill ? 1 : build.houseRules.crossClassSkillDoubleCost ? 2 : 1;
    const ranks = Math.max(0, Math.min(build.skillRanks[skill.id] ?? 0, maxRanks));
    skillPointsSpent += ranks * rankCost;

    const audit: AuditEntry[] = [];
    let total = ranks;
    audit.push({ source: "Skill ranks", target: `skill.${skill.id}`, operation: `${ranks} rank(s)${classSkill ? " (class skill)" : " (cross-class)"}`, resultingValue: total });
    const abilityKey = skill.keyAbility;
    const mod = abilityModOr0(abilityKey);
    total += mod;
    audit.push({ source: `${abilityKey.toUpperCase()} modifier`, target: `skill.${skill.id}`, operation: `${formatSigned(mod)} key ability modifier`, resultingValue: total });
    const stack = resolveModifierStack(modifierPool, `skill.${skill.id}`);
    total += stack.value;
    audit.push(...stack.audit);

    return { id: skill.id, name: skill.name, ranks, total, isClassSkill: classSkill, maxRanks, rankCost, audit };
  });

  // Superior Synergy (Shaun's house rule): synergy benefits at 5/10/15/20
  // ranks per Superior Skill Synergy (Misfit Studios, 2005). Unconditional
  // bonuses join the target skill's total (with an audit entry each);
  // conditional bonuses and special benefits ride along as notes.
  let synergyCharacterNotes: string[] = [];
  if (build.houseRules.superiorSynergy) {
    const synergy = computeSynergies(new Map(resolvedSkills.map((s) => [s.id, s.ranks])));
    for (const s of resolvedSkills) {
      for (const applied of synergy.appliedBonuses.get(s.id) ?? []) {
        s.total += applied.amount;
        s.audit.push({
          source: `Superior Synergy — ${applied.from}`,
          target: `skill.${s.id}`,
          operation: `${formatSigned(applied.amount)} synergy bonus`,
          resultingValue: s.total,
        });
      }
      const notes = synergy.skillNotes.get(s.id);
      if (notes && notes.length > 0) s.synergyNotes = notes;
    }
    synergyCharacterNotes = synergy.characterNotes;
  }

  const skillPoints = { total: skillPointsTotal, spent: skillPointsSpent, audit: skillPointsAudit };
  if (skillPointsSpent > skillPointsTotal) {
    validation.push({
      severity: "warning",
      message: `Skill points overspent by ${skillPointsSpent - skillPointsTotal}: reduce ranks or add class levels.`,
    });
  }

  /* ---------------- Feat slots --------------------------------------- */
  const featSlotsTotal =
    (totalHitDice > 0 ? 1 + Math.floor(totalHitDice / 3) : 0) + (race.bonusFeatSlots ?? 0);
  const featSlotsAudit: AuditEntry[] = [
    {
      source: "Character level",
      target: "feat-slots",
      operation: totalHitDice > 0 ? `1 feat at 1st level + 1 per 3 Hit Dice (${totalHitDice} HD)` : "No Hit Dice — no feat slots",
      resultingValue: featSlotsTotal,
    },
  ];
  if (race.bonusFeatSlots) {
    featSlotsAudit.push({ source: race.name, sourceUrl: race.sourceUrl, target: "feat-slots", operation: `${formatSigned(race.bonusFeatSlots)} bonus feat slot`, resultingValue: featSlotsTotal });
  }
  const featSlots = { total: featSlotsTotal, used: selectedFeats.length, audit: featSlotsAudit };
  if (selectedFeats.length > featSlotsTotal) {
    validation.push({
      severity: "warning",
      message: `${selectedFeats.length} feats selected but only ${featSlotsTotal} feat slot(s) available.`,
    });
  }

  /* ---------------- Phase 6/7: CR, LA buyoff, ECL --------------------- */
  const crAudit: AuditEntry[] = [];
  let crValue = totalHitDice > 0 ? totalHitDice : 0.5;
  crAudit.push({ source: "Base creature", target: "cr", operation: `Base challenge rating ${crValue} (total Hit Dice)`, resultingValue: crValue });
  for (const { def, formId } of appliedDefs) {
    const form = def.forms?.find((f) => f.id === formId) ?? def.forms?.[0];
    const mod = (def.forms && form?.crModifier !== undefined ? form.crModifier : def.crModifier) ?? 0;
    if (mod !== 0) {
      crValue += mod;
      crAudit.push({ source: def.name, sourceUrl: def.sourceUrl, target: "cr", operation: `${formatSigned(mod)} challenge rating adjustment`, resultingValue: crValue });
    }
  }
  const cr = { value: crValue, audit: crAudit };

  const laAudit: AuditEntry[] = [];
  let laBase = race.levelAdjustment ?? 0;
  if (laBase > 0) {
    laAudit.push({ source: race.name, sourceUrl: race.sourceUrl, target: "level-adjustment", operation: `${formatSigned(laBase)} racial level adjustment`, resultingValue: laBase });
  }
  for (const { def, formId } of appliedDefs) {
    const form = def.forms?.find((f) => f.id === formId) ?? def.forms?.[0];
    const mod = (def.forms && form?.levelAdjustment !== undefined ? form.levelAdjustment : def.levelAdjustment) ?? 0;
    if (mod !== 0) {
      laBase += mod;
      laAudit.push({ source: def.name, sourceUrl: def.sourceUrl, target: "level-adjustment", operation: `${formatSigned(mod)} level adjustment`, resultingValue: laBase });
    }
  }
  if (laAudit.length === 0) {
    laAudit.push({ source: "Base creature", target: "level-adjustment", operation: "Level adjustment +0", resultingValue: 0 });
  }

  // Phase 7: LA buyoff ledger (Unearthed Arcana variant, house-rule gated).
  let boughtOff = 0;
  if (build.houseRules.levelAdjustmentBuyoff && laBase > 0) {
    let remaining = laBase;
    let levelsNeeded = 0;
    while (remaining > 0) {
      levelsNeeded += 3 * remaining;
      if (classHitDice < levelsNeeded) break;
      boughtOff += 1;
      const xpCost = (totalHitDice + remaining - 1) * 1000;
      laAudit.push({
        source: "LA Buyoff (Unearthed Arcana)",
        sourceUrl: "https://www.d20srd.org/srd/variant/races/reducingLevelAdjustments.htm",
        target: "level-adjustment",
        operation: `Bought off 1 point at class level ${levelsNeeded} (XP cost ${xpCost.toLocaleString()})`,
        resultingValue: laBase - boughtOff,
        note: "Each buyoff costs (current ECL − 1) × 1,000 XP.",
      });
      remaining -= 1;
    }
  }
  const levelAdjustment = { base: laBase, boughtOff, current: laBase - boughtOff, audit: laAudit };

  const eclValue = totalHitDice + levelAdjustment.current;
  const ecl = {
    value: eclValue,
    audit: [
      {
        source: "Effective Character Level",
        sourceUrl: "https://www.d20srd.org/srd/monstersAsRaces.htm",
        target: "ecl",
        operation: `${totalHitDice} Hit Dice + ${levelAdjustment.current} level adjustment`,
        resultingValue: eclValue,
      },
    ],
  };

  const resolvedCharacter: ResolvedCharacter = {
    build,
    race,
    size,
    type,
    subtypes,
    speed,
    abilityScores,
    ac,
    bab,
    saves,
    hp,
    cr,
    levelAdjustment,
    ecl,
    totalHitDice,
    classHitDice,
    racialHitDice,
    features,
    appliedTemplates: appliedDefs.map((a) => a.def),
    selectedFeats,
    skills: resolvedSkills,
    synergyNotes: synergyCharacterNotes,
    skillPoints,
    featSlots,
    inventory: resolvedInventory,
    validation,
  };

  // Spell selection validation (Batch 12): list membership, level
  // access, and per-level known/prepared caps from the casting
  // profiles. Prestige "+1 spellcasting" advancement is not modeled
  // (documented in src/engine/spells.ts).
  {
    const totals = {} as Record<AbilityKey, number | null>;
    for (const key of ABILITY_KEYS) totals[key] = resolvedCharacter.abilityScores[key]?.total ?? null;
    validation.push(...validateSelectedSpells(build, totals));
  }

  // Prestige-class prerequisite enforcement for classes already taken:
  // levels are never stripped, but if the build no longer meets a taken
  // class's machine-checkable prerequisites, surface an error so the UI
  // can badge it and block further levels (the add path re-checks the
  // full gate, certifications included).
  {
    const ctx = buildPrereqContext(resolvedCharacter);
    for (const choice of build.prestigeClassLevels) {
      if (choice.levels <= 0) continue;
      const def = PRESTIGE_BY_ID.get(choice.classId);
      if (!def) continue;
      const gate = evaluatePrestigeClass(def, ctx, (build.prestigePrereqCertifications ?? {})[def.id] ?? []);
      const reasons = gate.entries
        .filter((e) => e.status === "unmet")
        .flatMap((e) => e.fragments.filter((f) => f.status === "unmet").map((f) => f.reason ?? f.text));
      if (reasons.length > 0) {
        validation.push({
          severity: "error",
          message:
            `${def.name}: prerequisites no longer met (${reasons.join("; ")}). ` +
            "Existing levels are kept, but no further levels can be added until the prerequisites are met again.",
        });
      }
    }
  }

  return resolvedCharacter;
}
