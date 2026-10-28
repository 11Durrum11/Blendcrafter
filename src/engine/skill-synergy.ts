/**
 * Superior Synergy — Shaun's house rule from "Superior Skill Synergys.pdf"
 * (Superior Skill Synergy, Steven Trustrum, Misfit Studios, © 2005; the
 * mechanics are Open Game Content). Shaun's copy lives in his Dropbox:
 * /A POC PC related/1.house rules for a poc/1.Main stuff/Superior Skill Synergys.pdf
 *
 * Standard synergy stops at 5 ranks (+2). This book adds benchmarks at 10,
 * 15, and 20 ranks: pure-bonus lines climb +2/+3/+4/+5, and mixed lines
 * trade the 10- and 20-rank steps for special benefits. Full accounting:
 * SUPERIOR-SYNERGY-ACCOUNTING.md in the rebuild root.
 *
 * Reading of the ladder (documented judgment call): each tier's benefit for
 * a given "channel" supersedes the lower tier's version of that same
 * benefit (the +4 at 15 ranks replaces the +2 at 5; the 20-rank special
 * replaces the 10-rank special), while benefits in other channels persist —
 * a 15-rank Bluff character keeps the 10-rank special benefits alongside
 * the +4 bonuses. Nothing stacks with its own lower tier.
 *
 * Application: an unconditional numeric bonus is added to the target
 * skill's total. A numeric bonus with a scope (e.g. "on scrolls") is
 * conditional, so it is reported as a note on the target skill instead of
 * inflating the general total; special benefits are notes as well.
 */

export interface SynergyEffect {
  /** Supersession key within one source line. */
  channel: string;
  targetSkillId?: string;
  /** Non-skill target ("Wild empathy checks", "Bardic knowledge checks", …). */
  targetLabel?: string;
  amount?: number;
  /** Condition for a numeric bonus, e.g. "on scrolls". */
  scope?: string;
  /** Free-text special benefit. */
  note?: string;
}

export interface SynergyTier {
  ranks: number;
  effects: SynergyEffect[];
}

export interface SynergyLine {
  sourceName: string;
  sourceSkillId?: string;
  /** Matches every skill id starting with this prefix (Craft and its subskills). */
  sourcePrefix?: string;
  tiers: SynergyTier[];
}

const bonus = (channel: string, targetSkillId: string, amount: number, scope?: string): SynergyEffect => ({
  channel,
  targetSkillId,
  amount,
  ...(scope ? { scope } : {}),
});
const labeledBonus = (channel: string, targetLabel: string, amount: number): SynergyEffect => ({
  channel,
  targetLabel,
  amount,
});
const note = (channel: string, text: string, targetSkillId?: string): SynergyEffect => ({
  channel,
  note: text,
  ...(targetSkillId ? { targetSkillId } : {}),
});

/** The +2/+3/+4/+5 ladder most lines follow. */
function ladder(channel: string, targetSkillId: string, scope?: string): SynergyTier[] {
  return [5, 10, 15, 20].map((ranks, i) => ({
    ranks,
    effects: [bonus(channel, targetSkillId, i + 2, scope)],
  }));
}

function knowledgeLine(
  name: string,
  skillId: string,
  target: { skillId: string; scope?: string } | { label: string },
  special20?: SynergyEffect
): SynergyLine {
  const targetSkillId = "skillId" in target ? target.skillId : undefined;
  const scope = "skillId" in target ? target.scope : undefined;
  const label = "label" in target ? target.label : undefined;
  const mk = (amount: number): SynergyEffect =>
    label
      ? labeledBonus(`k-${skillId}`, label, amount)
      : bonus(`k-${skillId}`, targetSkillId!, amount, scope);
  const tiers: SynergyTier[] = [
    { ranks: 5, effects: [mk(2)] },
    { ranks: 10, effects: [mk(3)] },
    { ranks: 15, effects: [mk(4)] },
    // At 20 the three special lines keep their +4 and gain the special
    // instead of the +5; the rest of the subskills take the +5.
    { ranks: 20, effects: special20 ? [special20] : [mk(5)] },
  ];
  return { sourceName: name, sourceSkillId: skillId, tiers };
}

export const SKILL_SYNERGY_LINES: SynergyLine[] = [
  {
    sourceName: "Bluff",
    sourceSkillId: "bluff",
    tiers: [
      {
        ranks: 5,
        effects: [
          bonus("bluff-diplomacy", "diplomacy", 2),
          bonus("bluff-intimidate", "intimidate", 2),
          bonus("bluff-sleight", "sleight-of-hand", 2),
          bonus("bluff-disguise", "disguise", 2, "when you know you're being observed and are trying to act in character"),
        ],
      },
      {
        ranks: 10,
        effects: [
          note("bluff-diplo-time", "Change the attitudes of others in roughly half the normal time", "diplomacy"),
          note("bluff-intim-duration", "The effects of a successful intimidation last 2d6×10 minutes afterward", "intimidate"),
          note("bluff-frisk", "Anyone frisking you: their Search check bonus is +2 instead of +4"),
          note(
            "bluff-disguise-cancel",
            "You may make a Bluff check to cancel one failed Disguise check against a specific individual when you know you're being observed and are trying to act in character",
            "disguise"
          ),
        ],
      },
      {
        ranks: 15,
        effects: [
          bonus("bluff-diplomacy", "diplomacy", 4),
          bonus("bluff-intimidate", "intimidate", 4),
          bonus("bluff-sleight", "sleight-of-hand", 4),
          bonus("bluff-disguise", "disguise", 4, "when you know you're being observed and are trying to act in character"),
        ],
      },
      {
        ranks: 20,
        effects: [
          note("bluff-diplo-time", "Change the attitudes of others in roughly one-quarter the normal time", "diplomacy"),
          note("bluff-intim-duration", "The effects of a successful intimidation last 3d6×10 minutes afterward", "intimidate"),
          note("bluff-frisk", "Anyone frisking you: their Search check bonus is negated"),
          note(
            "bluff-disguise-cadence",
            "Spot checks against your Disguise are made immediately upon meeting you and every two hours thereafter, instead of every hour",
            "disguise"
          ),
        ],
      },
    ],
  },
  {
    sourceName: "Craft",
    sourcePrefix: "craft",
    tiers: [
      { ranks: 5, effects: [bonus("craft-appraise", "appraise", 2, "on items made with that Craft skill")] },
      {
        ranks: 10,
        effects: [
          note("craft-retry", "You may retry an Appraise check on items made with that Craft skill; the retry takes twice as long as the initial attempt", "appraise"),
        ],
      },
      { ranks: 15, effects: [bonus("craft-appraise", "appraise", 4, "on items made with that Craft skill")] },
      {
        ranks: 20,
        effects: [
          note("craft-retry", "You may retry an Appraise check on items made with that Craft skill up to two times; each retry takes twice as long as the previous attempt", "appraise"),
        ],
      },
    ],
  },
  {
    sourceName: "Decipher Script",
    sourceSkillId: "decipher-script",
    tiers: [
      { ranks: 5, effects: [bonus("ds-umd", "use-magic-device", 2, "involving scrolls")] },
      {
        ranks: 10,
        effects: [
          note("ds-emulate", "For scrolls, you may make a Decipher Script check instead of a Use Magic Device check for the 'emulate an ability' use", "use-magic-device"),
        ],
      },
      { ranks: 15, effects: [bonus("ds-umd", "use-magic-device", 4, "involving scrolls")] },
      {
        ranks: 20,
        effects: [
          note("ds-mishap", "When you roll a natural 1 using Use Magic Device on a scroll, roll again — only a second natural 1 prevents you from trying to activate that scroll again for 24 hours", "use-magic-device"),
        ],
      },
    ],
  },
  { sourceName: "Escape Artist", sourceSkillId: "escape-artist", tiers: ladder("ea-userope", "use-rope", "to bind someone") },
  {
    sourceName: "Handle Animal",
    sourceSkillId: "handle-animal",
    tiers: [5, 10, 15, 20].map((ranks, i) => ({
      ranks,
      effects: [bonus("ha-ride", "ride", i + 2), labeledBonus("ha-wild-empathy", "Wild empathy checks", i + 2)],
    })),
  },
  {
    sourceName: "Jump",
    sourceSkillId: "jump",
    tiers: [
      { ranks: 5, effects: [bonus("jump-tumble", "tumble", 2)] },
      { ranks: 10, effects: [note("jump-fall", "On a DC 15 Tumble check, treat a fall as if it were 15 feet shorter when determining damage", "tumble")] },
      { ranks: 15, effects: [bonus("jump-tumble", "tumble", 4)] },
      { ranks: 20, effects: [note("jump-fall", "On a DC 15 Tumble check, treat a fall as if it were 20 feet shorter when determining damage", "tumble")] },
    ],
  },
  knowledgeLine("Knowledge (arcana)", "knowledge-arcana", { skillId: "spellcraft" }),
  knowledgeLine("Knowledge (architecture and engineering)", "knowledge-architecture", { skillId: "search", scope: "to find secret doors or hidden compartments" },
    note("ka-search-action", "Search checks to find secret doors or hidden compartments take only a standard action", "search")),
  knowledgeLine("Knowledge (geography)", "knowledge-geography", { skillId: "survival", scope: "to keep from getting lost or to avoid natural hazards" }),
  knowledgeLine("Knowledge (history)", "knowledge-history", { label: "Bardic knowledge checks" }),
  knowledgeLine("Knowledge (local)", "knowledge-local", { skillId: "gather-information" },
    note("kl-gi-time", "A typical Gather Information check takes 1d2 hours", "gather-information")),
  knowledgeLine("Knowledge (nature)", "knowledge-nature", { skillId: "survival", scope: "in aboveground natural environments" }),
  knowledgeLine("Knowledge (nobility and royalty)", "knowledge-nobility", { skillId: "diplomacy" },
    note("kn-diplo-time", "Diplomacy checks take half the normal time to perform", "diplomacy")),
  knowledgeLine("Knowledge (religion)", "knowledge-religion", { label: "Turning checks against undead" }),
  knowledgeLine("Knowledge (the planes)", "knowledge-the-planes", { skillId: "survival", scope: "made while on other planes" }),
  knowledgeLine("Knowledge (dungeoneering)", "knowledge-dungeoneering", { skillId: "survival", scope: "made while underground" }),
  {
    sourceName: "Search",
    sourceSkillId: "search",
    tiers: [
      { ranks: 5, effects: [bonus("search-tracks", "survival", 2, "to find or follow tracks")] },
      { ranks: 10, effects: [note("search-track-time", "Finding tracks takes half the normal time — what would typically take a full-round action now takes a standard action", "survival")] },
      { ranks: 15, effects: [bonus("search-tracks", "survival", 4, "to find or follow tracks")] },
      { ranks: 20, effects: [note("search-track-time", "Finding tracks takes one-quarter the normal time — what would typically take a full-round action now counts as a free action", "survival")] },
    ],
  },
  { sourceName: "Sense Motive", sourceSkillId: "sense-motive", tiers: ladder("sm-diplomacy", "diplomacy") },
  {
    sourceName: "Spellcraft",
    sourceSkillId: "spellcraft",
    tiers: [
      { ranks: 5, effects: [bonus("sc-umd", "use-magic-device", 2, "related to scrolls")] },
      { ranks: 10, effects: [note("sc-familiar-link", "Your familiar's empathic link range increases to 2 miles")] },
      { ranks: 15, effects: [bonus("sc-umd", "use-magic-device", 4, "related to scrolls")] },
      { ranks: 20, effects: [note("sc-familiar-bonus", "The bonus granted to you by your type of familiar increases by an additional +1")] },
    ],
  },
  { sourceName: "Survival", sourceSkillId: "survival", tiers: ladder("surv-knature", "knowledge-nature") },
  {
    sourceName: "Tumble",
    sourceSkillId: "tumble",
    tiers: [
      { ranks: 5, effects: [bonus("tumble-balance", "balance", 2), bonus("tumble-jump", "jump", 2)] },
      {
        ranks: 10,
        effects: [
          note("tumble-hop", "You may perform a hop up as part of a jump at the cost of 5 feet of movement, and you need only a DC 10 Reflex save to grab an edge when failing a long jump by less than 5", "tumble"),
        ],
      },
      { ranks: 15, effects: [bonus("tumble-balance", "balance", 4), bonus("tumble-jump", "jump", 4)] },
      {
        ranks: 20,
        effects: [
          note("tumble-speed", "Jump checks: take a −4 penalty for every 10 feet of speed less than 30 feet, and gain a +6 bonus for every 10 feet of speed beyond 30 feet", "jump"),
        ],
      },
    ],
  },
  {
    sourceName: "Use Magic Device",
    sourceSkillId: "use-magic-device",
    tiers: [
      { ranks: 5, effects: [bonus("umd-spellcraft", "spellcraft", 2, "to decipher spells on scrolls")] },
      {
        ranks: 10,
        effects: [
          note("umd-learn", "Spellcraft checks to learn a spell from a scroll require only 4 hours, and deciphering a written spell on a scroll requires only a standard action", "spellcraft"),
        ],
      },
      { ranks: 15, effects: [bonus("umd-spellcraft", "spellcraft", 4, "to decipher spells on scrolls")] },
      {
        ranks: 20,
        // The book's body text here says "10 or more ranks" under its own
        // 20-rank header — a typo in the source; the header governs.
        effects: [
          note("umd-learn", "Spellcraft checks to learn a spell from a scroll require only 2 hours, and deciphering a written spell scroll may be attempted twice a day", "spellcraft"),
        ],
      },
    ],
  },
  {
    sourceName: "Use Rope",
    sourceSkillId: "use-rope",
    tiers: [
      {
        ranks: 5,
        effects: [
          bonus("ur-climb", "climb", 2, "to climb a rope, a knotted rope, or a rope-and-wall combination"),
          bonus("ur-escape", "escape-artist", 2, "when escaping from rope bonds"),
        ],
      },
      {
        ranks: 10,
        effects: [
          note("ur-accel", "Your penalty for accelerated climbing is only −2 when using a rope", "climb"),
          note("ur-escape-time", "It takes you only 30 seconds to make an Escape Artist check when escaping from rope bonds", "escape-artist"),
        ],
      },
      {
        ranks: 15,
        effects: [
          bonus("ur-climb", "climb", 4, "to climb a rope, a knotted rope, or a rope-and-wall combination"),
          bonus("ur-escape", "escape-artist", 4, "when escaping from rope bonds"),
        ],
      },
      {
        ranks: 20,
        effects: [
          note("ur-accel", "When using accelerated climbing with a rope, you move at three-quarters your normal speed instead of one-half", "climb"),
          note("ur-escape-time", "It takes you only 3 rounds to make an Escape Artist check when escaping from rope bonds", "escape-artist"),
        ],
      },
    ],
  },
];

export interface SynergyComputation {
  /** Unconditional bonuses to add to a skill's total. */
  appliedBonuses: Map<string, { amount: number; from: string }[]>;
  /** Conditional bonuses and special benefits, keyed by the skill they attach to. */
  skillNotes: Map<string, string[]>;
  /** Benefits whose target is not a skill total (wild empathy, familiars, …). */
  characterNotes: string[];
}

export function computeSynergies(ranksBySkillId: ReadonlyMap<string, number>): SynergyComputation {
  const appliedBonuses = new Map<string, { amount: number; from: string }[]>();
  const skillNotes = new Map<string, string[]>();
  const characterNotes: string[] = [];
  const pushNote = (skillId: string, text: string) => {
    const list = skillNotes.get(skillId) ?? [];
    list.push(text);
    skillNotes.set(skillId, list);
  };

  for (const line of SKILL_SYNERGY_LINES) {
    let sourceRanks = 0;
    if (line.sourceSkillId) sourceRanks = ranksBySkillId.get(line.sourceSkillId) ?? 0;
    if (line.sourcePrefix) {
      for (const [id, r] of ranksBySkillId) if (id.startsWith(line.sourcePrefix)) sourceRanks = Math.max(sourceRanks, r);
    }
    if (sourceRanks < 5) continue;

    // Highest tier per channel wins; other channels persist.
    const surviving = new Map<string, { effect: SynergyEffect; tierRanks: number }>();
    for (const tier of line.tiers) {
      if (tier.ranks > sourceRanks) break;
      for (const effect of tier.effects) surviving.set(effect.channel, { effect, tierRanks: tier.ranks });
    }

    for (const { effect, tierRanks } of surviving.values()) {
      const from = `${line.sourceName} ${tierRanks} ranks`;
      if (effect.amount !== undefined && effect.targetSkillId && !effect.scope) {
        const list = appliedBonuses.get(effect.targetSkillId) ?? [];
        list.push({ amount: effect.amount, from });
        appliedBonuses.set(effect.targetSkillId, list);
      } else if (effect.amount !== undefined && effect.targetSkillId && effect.scope) {
        pushNote(effect.targetSkillId, `+${effect.amount} ${effect.scope} (${from})`);
      } else if (effect.amount !== undefined && effect.targetLabel) {
        characterNotes.push(`${effect.targetLabel}: +${effect.amount} (${from})`);
      } else if (effect.note && effect.targetSkillId) {
        pushNote(effect.targetSkillId, `${effect.note} (${from})`);
      } else if (effect.note) {
        characterNotes.push(`${effect.note} (${from})`);
      }
    }
  }
  return { appliedBonuses, skillNotes, characterNotes };
}
