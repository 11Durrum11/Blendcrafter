import type {
  CharacterBuild,
  GeneratedPersonality,
  PersonalityProfile,
  PersonalityWeights,
  ResolvedCharacter,
} from "./types";

/**
 * Personality & life-history generator (the NPC Life Engine slice of
 * Blendcrafter). Generation is deterministic for a given build: the same
 * race/class/abilities/weights always produce the same profile text, woven
 * from the character's actual mechanics plus the user's weighted inputs.
 * Weights (0–10) decide which influences dominate the narrative.
 */

export const DEFAULT_PERSONALITY_WEIGHTS: PersonalityWeights = {
  race: 5,
  class: 6,
  level: 4,
  alignment: 7,
  age: 3,
  background: 6,
  socialStanding: 5,
  wealth: 5,
  family: 5,
  religion: 3,
  faction: 3,
  reputation: 5,
  abilities: 6,
  feats: 3,
  specialAbilities: 4,
  enemies: 4,
  allies: 4,
  trauma: 5,
  goals: 7,
  secrets: 4,
  circumstances: 5,
};

export const DEFAULT_PERSONALITY: PersonalityProfile = {
  age: 24,
  alignment: "True Neutral",
  background: "Outlander",
  familyStatus: "Stable family",
  socialStanding: 5,
  wealth: 5,
  personalReputation: 0,
  publicReputation: 0,
  religion: "",
  factionGuild: "",
  occupation: "",
  allies: "",
  enemies: "",
  trauma: "",
  goals: "",
  secrets: "",
  circumstances: "",
  weights: { ...DEFAULT_PERSONALITY_WEIGHTS },
};

const ABILITY_FLAVOR: Record<string, { high: string; low: string }> = {
  str: { high: "physically imposing and direct", low: "slight of frame and careful about physical risk" },
  dex: { high: "quick-handed and restless", low: "deliberate in movement, sometimes clumsy" },
  con: { high: "hardy, with a laborer's endurance", low: "frail, and conscious of it" },
  int: { high: "analytical, with a scholar's vocabulary", low: "concrete-thinking and suspicious of cleverness" },
  wis: { high: "perceptive and slow to judge", low: "impulsive, often missing what is in front of them" },
  cha: { high: "magnetic, used to being listened to", low: "blunt and socially awkward" },
};

function topWeight(p: PersonalityProfile, keys: (keyof PersonalityWeights)[]): keyof PersonalityWeights {
  return keys.reduce((best, k) => (p.weights[k] > p.weights[best] ? k : best), keys[0]);
}

function dominantAbility(resolved: ResolvedCharacter): { key: string; total: number | null } {
  let best: { key: string; total: number | null } = { key: "int", total: null };
  for (const [key, score] of Object.entries(resolved.abilityScores)) {
    if (score.total !== null && (best.total === null || score.total > best.total)) {
      best = { key, total: score.total };
    }
  }
  return best;
}

function alignmentAxis(alignment: string): { moral: string; order: string } {
  const moral = alignment.includes("Good") ? "good" : alignment.includes("Evil") ? "evil" : "neutral";
  const order = alignment.startsWith("Lawful") ? "lawful" : alignment.startsWith("Chaotic") ? "chaotic" : "neutral";
  return { moral, order };
}

export function generatePersonality(
  build: CharacterBuild,
  resolved: ResolvedCharacter,
  profile: PersonalityProfile
): GeneratedPersonality {
  const p = profile;
  const race = resolved.race.name;
  const classes = [...build.classLevels, ...build.prestigeClassLevels]
    .map((c) => c.levels)
    .reduce((a, b) => a + b, 0);
  const classNames = resolved.build.classLevels.length + resolved.build.prestigeClassLevels.length;
  const level = Math.max(resolved.totalHitDice, 1);
  const dom = dominantAbility(resolved);
  const domFlavor = ABILITY_FLAVOR[dom.key] ?? ABILITY_FLAVOR.int;
  const abilitySentence =
    dom.total !== null && dom.total >= 14
      ? `Defined mechanically by an exceptional ${dom.key.toUpperCase()} (${dom.total}), they come across as ${domFlavor.high}.`
      : `No single ability dominates; they read as ${domFlavor.low} more often than not.`;
  const { moral, order } = alignmentAxis(p.alignment);
  const heaviest = topWeight(p, ["trauma", "goals", "background", "family", "alignment", "race", "class"]);
  const templateNames = resolved.appliedTemplates.map((t) => t.name);
  const templateClause =
    templateNames.length > 0
      ? ` The ${templateNames.join(" + ")} transformation is never far from the surface — it has rewritten how strangers look at them and how they look at themselves.`
      : "";
  const wealthWord = p.wealth >= 8 ? "genuinely wealthy" : p.wealth >= 5 ? "comfortable" : p.wealth >= 3 ? "getting by" : "poor";
  const standingWord =
    p.socialStanding >= 8 ? "high-born or celebrated" : p.socialStanding >= 5 ? "respectable" : p.socialStanding >= 3 ? "unremarkable" : "marginal";

  const temperament =
    `${race} temperament filtered through a ${p.background.toLowerCase()} upbringing: ` +
    (order === "lawful"
      ? "structured, habitual, and visibly calmed by routine."
      : order === "chaotic"
        ? "improvisational, allergic to routine, and quick to improvise under pressure."
        : "pragmatic — orderly when it pays, loose when it doesn't.") +
    templateClause;

  const corePersonality =
    `${abilitySentence} Their ${p.alignment} outlook is not a philosophy they recite; it shows in small transactions — ` +
    (moral === "good"
      ? "debts forgiven quietly, strangers fed without ceremony."
      : moral === "evil"
        ? "favors tracked precisely, weaknesses noted and filed away."
        : "help offered when the cost is low, withheld when it isn't.") +
    (heaviest === "trauma" && p.trauma
      ? ` Underneath it all sits the defining wound: ${p.trauma}`
      : heaviest === "goals" && p.goals
        ? ` What organizes their days is the goal: ${p.goals}`
        : ` Their ${heaviest} is the heaviest weight in how they were made.`);

  const lifeHistory =
    `Age ${p.age}. Raised in a ${p.familyStatus.toLowerCase()} situation, coming out of a ${p.background.toLowerCase()} background` +
    (level > 1
      ? ` and hardened by roughly ${level} levels of hard experience${classNames > 1 ? " across more than one discipline" : ""}.`
      : " and only just starting to be tested by the world.") +
    (p.trauma ? ` The event that still steers them: ${p.trauma}` : "") +
    (templateClause ? ` Everything since the change is 'after'.${templateClause}` : "");

  const values =
    (order === "lawful" ? "Oaths, contracts, and kept promises" : order === "chaotic" ? "Freedom, loyalty to persons over institutions" : "Competence, fair dealing, and not being owned") +
    (p.religion ? `; faith in ${p.religion} is a real pillar` : "") +
    (p.factionGuild ? `; standing within ${p.factionGuild} matters to them` : "") +
    ".";

  const motivations: string[] = [];
  if (p.goals) motivations.push(`Advance the stated goal: ${p.goals}`);
  if (p.wealth <= 3) motivations.push("Escape poverty — money is security, and security is scarce.");
  if (p.wealth >= 8) motivations.push("Protect and grow an existing fortune without public embarrassment.");
  if (p.socialStanding <= 3) motivations.push("Earn a name the world cannot ignore or erase.");
  if (p.enemies) motivations.push(`Settle accounts with: ${p.enemies}`);
  if (motivations.length === 0) motivations.push("Keep the current, workable life from falling apart.");

  const fears: string[] = [];
  if (p.trauma) fears.push(`Anything that rhymes with the old wound: ${p.trauma}`);
  if (templateNames.length > 0) fears.push(`Losing control of what the ${templateNames[0]} change is making of them.`);
  if (p.secrets) fears.push(`Exposure of the secret: ${p.secrets}`);
  if (p.publicReputation <= -3) fears.push("Being cornered by the reputation they cannot outrun.");
  if (fears.length === 0) fears.push("Ordinary fears, honestly held: irrelevance, decline, dying unremembered.");

  const moralOutlook =
    p.alignment +
    " in practice: " +
    (moral === "good"
      ? "others' suffering registers as a personal cost."
      : moral === "evil"
        ? "others are resources, obstacles, or audience — in that order."
        : "conscience is situational; loyalty is to the in-group.") +
    (order === "lawful"
      ? " Rules are load-bearing; breaking them has a price even in private."
      : order === "chaotic"
        ? " Rules are other people's habits; promises to persons bind, laws do not."
        : "");

  const socialBehavior =
    `${standingWord}, ${wealthWord}, and aware of both facts. ` +
    (dom.key === "cha" && (dom.total ?? 0) >= 14
      ? "Works a room deliberately; silence is a tool, not a gap."
      : "Socially functional but economical — saves their energy for people who matter.") +
    (p.allies ? ` Known associates: ${p.allies}` : "");

  const reputationInterpretation =
    `Those who know them personally rate them at ${p.personalReputation >= 0 ? "+" : ""}${p.personalReputation}; the public story says ${p.publicReputation >= 0 ? "+" : ""}${p.publicReputation}. ` +
    (p.personalReputation > p.publicReputation
      ? "The gap means the public story is worse than the person — they live with being underestimated or misjudged."
      : p.publicReputation > p.personalReputation
        ? "The gap means the public story is better than the person — they live with the maintenance cost of the image."
        : "Person and reputation are roughly aligned; what you hear is close to what you get.");

  const relationships =
    `Family: ${p.familyStatus.toLowerCase()}. ` +
    (p.allies ? `Allies and patrons: ${p.allies} ` : "No declared allies. ") +
    (p.enemies ? `Enemies and rivals: ${p.enemies}` : "No declared enemies — either a quiet life or unlisted ones.");

  const currentPressure = p.circumstances
    ? `Right now: ${p.circumstances}`
    : `No acute crisis; the pressure is the ordinary kind — level ${classes} expectations, ${wealthWord} finances, and whatever the road brings next.`;

  const mannerisms: string[] = [
    dom.key === "dex" ? "Taps or spins a small object when thinking." : dom.key === "str" ? "Takes up space without noticing; doors get opened with the shoulder." : "Goes quiet and still when a decision actually matters.",
    order === "lawful" ? "Keeps kit, coin, and obligations in fixed places." : "Leaves small systems half-finished and trusts memory instead.",
    templateNames.length > 0 ? `A tell from the ${templateNames[0]} side slips out under stress.` : "An accent or phrase from the old background surfaces when tired.",
  ];

  const voice =
    (dom.key === "int" && (dom.total ?? 0) >= 14
      ? "Precise, a little pedantic, enjoys the exact word."
      : dom.key === "cha" && (dom.total ?? 0) >= 14
        ? "Warm, pitched to the listener, rarely wasted."
        : "Economical; says the necessary thing and stops.") +
    (p.background === "Noble" ? " Formal register by default." : p.background === "Criminal" ? " Street register when relaxed, careful register when not." : "");

  const combatPsychology =
    level >= 8
      ? "Veteran's economy: threat assessment first, ego never. Has survived enough to know which fights are real."
      : level >= 4
        ? "Competent and increasingly confident; still capable of one reckless decision per bad day."
        : "Untested: braver in imagination than in fact, and either learning fast or lucky." +
          (templateNames.length > 0 ? ` The ${templateNames[0]} instincts push toward aggression or predation and must be managed.` : "");

  const contradictions: string[] = [
    moral === "good" ? "Generous to strangers, ruthless about one specific old debt." : "Preaches detachment; keeps every slight catalogued.",
    p.weights.secrets >= 6 && p.secrets ? `The secret (${p.secrets}) warps decisions they claim are purely practical.` : "Wants to be left alone and cannot stand being overlooked.",
  ];

  const adventureHooks: string[] = [];
  if (p.goals) adventureHooks.push(`The goal — ${p.goals} — requires something only an adventure provides.`);
  if (p.enemies) adventureHooks.push(`${p.enemies} makes a move that cannot be answered from home.`);
  if (p.secrets) adventureHooks.push(`Someone else learns the secret: ${p.secrets}`);
  if (templateNames.length > 0) adventureHooks.push(`The ${templateNames.join(" + ")} condition develops a new symptom, a new hunger, or a new witness.`);
  if (adventureHooks.length === 0) adventureHooks.push("A routine job intersects with the one thing they swore they were done with.");

  return {
    temperament,
    corePersonality,
    lifeHistory,
    values,
    motivations,
    fears,
    moralOutlook,
    socialBehavior,
    reputationInterpretation,
    relationships,
    currentPressure,
    mannerisms,
    voice,
    combatPsychology,
    contradictions,
    adventureHooks,
  };
}
