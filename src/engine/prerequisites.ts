import type {
  AppliedTemplateChoice,
  CreatureType,
  TemplateDefinition,
  ValidationIssue,
} from "./types";

/**
 * Template prerequisite + ordering checks.
 *
 * SRD template prerequisites ("humanoid or monstrous humanoid base creature
 * only") are phrased in terms of the ORIGINAL base creature's type — not the
 * intermediate type after an earlier inherited template mutates it. That is
 * why Half-Dragon (-> Dragon) followed by Vampire (requires a Humanoid or
 * Monstrous Humanoid base) is a legal, classic combination: Vampire's
 * prerequisite sees Human -> Humanoid.
 *
 * Sources: https://www.d20srd.org/srd/monsters/vampire.htm
 *          https://www.d20srd.org/srd/improvingMonsters.htm
 */

export interface PrerequisiteContext {
  /** The original race's type, before any template is applied. */
  baseType: CreatureType;
  /** The creature's current (simulated) type at this point in the list. */
  type: CreatureType;
  /** The creature's current subtypes. */
  subtypes: string[];
  /** Template ids already applied earlier in the ordered list. */
  appliedTemplateIds: string[];
}

export function checkPrerequisites(
  def: TemplateDefinition,
  ctx: PrerequisiteContext
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (ctx.appliedTemplateIds.includes(def.id)) {
    issues.push({
      severity: "error",
      templateId: def.id,
      message: `${def.name} is already applied — a template can only be applied once.`,
    });
  }

  for (const prereq of def.prerequisites ?? []) {
    if (prereq.allowedBaseTypes && !prereq.allowedBaseTypes.includes(ctx.baseType)) {
      issues.push({
        severity: "error",
        templateId: def.id,
        message:
          `${def.name} requires a base creature of type ${joinTypes(prereq.allowedBaseTypes)}, ` +
          `but the base creature is ${ctx.baseType}. (${prereq.note})`,
      });
    }
  }

  return issues;
}

/**
 * SRD ordering rule: inherited templates must be applied before acquired
 * templates. Returns one error per out-of-order pair; the message always
 * contains "must be applied before" (the steps UI filters on that phrase).
 */
export function checkTemplateOrdering(
  choices: AppliedTemplateChoice[],
  defsById: Map<string, TemplateDefinition>
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const applied = choices
    .map((c) => defsById.get(c.templateId))
    .filter((d): d is TemplateDefinition => Boolean(d));

  applied.forEach((def, i) => {
    if (def.timing !== "acquired") return;
    const laterInherited = applied.slice(i + 1).filter((d) => d.timing === "inherited");
    for (const inherited of laterInherited) {
      issues.push({
        severity: "error",
        templateId: inherited.id,
        message:
          `SRD ordering rule: inherited template ${inherited.name} must be applied before ` +
          `acquired template ${def.name}. Move ${inherited.name} earlier in the list.`,
      });
    }
  });

  return issues;
}

function joinTypes(types: CreatureType[]): string {
  if (types.length <= 2) return types.join(" or ");
  return `${types.slice(0, -1).join(", ")}, or ${types[types.length - 1]}`;
}
