import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

// Heroes of Battle prestige classes: all four from Chapter 5 (pp. 99–113,
// Tables 5–2 through 5–5). Progressions are the book's printed tables —
// note that the Combat Medic's Will save is poor as printed (Table 5–2),
// unusual for a healer class but recorded as written. Short mechanical
// summaries in our own words, cited to book + page. The book's teamwork
// benefits and commander auras are systems this app does not model; they
// are documented in the Batch 8b addendum to REBUILD-NOTES.md.
// Source PDF: /a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G5 = [2, 3, 3, 4, 4]; // good save, 5 levels
const P5 = [0, 0, 1, 1, 1]; // poor save, 5 levels
const FULL5 = [1, 2, 3, 4, 5];
const HALF5 = [0, 1, 1, 2, 2];
const TQ5 = [0, 1, 2, 3, 3];

const HOB = "Heroes of Battle";
const HOB_PATH = "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf";
const CH5 = `${HOB} — Chapter 5: The Military Character`;

export const HEROES_OF_BATTLE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "combat-medic",
    name: "Combat Medic",
    ruleset: "core",
    source: `${CH5} — Combat Medic (p. 99)`,
    sourceUrl: HOB_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["ref"],
    progression: rows(HALF5, P5, G5, P5),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (history)", "Knowledge (religion)", "Profession", "Ride", "Spellcraft", "Spot"],
    prerequisites: [
      "Alignment: Any nonevil",
      "Skills: Concentration 4 ranks, Heal 8 ranks",
      "Feats: Combat Casting, Dodge",
      "Spells: Ability to cast cure light wounds",
    ],
    features: [
      {
        key: "combat-medic-features",
        name: "Combat Medic Features",
        category: "trait",
        description:
          "A front-line healer who keeps an army's troops fighting. Spellcasting advances +1 level of an existing eligible spellcasting class (one that includes cure light wounds on its spell list) at every level. Healing kicker lets her add a secondary effect to a conjuration (healing) spell cast on an ally, once per round up to a number of times per day equal to class level + Wisdom modifier: a sanctuary effect at 1st level (Will DC 15 + class level + Wis modifier), a competence bonus on Reflex saves equal to her class level at 3rd, and a maximized aid effect at 5th (temporary hit points equal to 8 + class level, lasting 1 minute). Also: defensive casting (2nd, competence bonus equal to class level on Concentration checks to cast defensively), field healer (2nd, first aid as a move action, and take 10 on such checks even under stress), Mobility as a bonus feat (3rd), evasion (4th), and spontaneous heal (5th, lose a prepared spell or slot of 6th level or higher to cast heal, even if it is not on her spell list). Table 5–2 prints a poor Will save for this class; the table is recorded as written.",
        source: `${CH5} — Combat Medic (pp. 99–103; Table 5–2, p. 100)`,
        sourceUrl: HOB_PATH,
      },
    ],
  },
  {
    id: "dread-commando",
    name: "Dread Commando",
    ruleset: "core",
    source: `${CH5} — Dread Commando (p. 103)`,
    sourceUrl: HOB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL5, P5, G5, P5),
    classSkills: ["Climb", "Craft", "Disable Device", "Disguise", "Escape Artist", "Hide", "Jump", "Knowledge (geography)", "Listen", "Move Silently", "Open Lock", "Profession", "Search", "Spot", "Swim", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Hide 6 ranks, Move Silently 6 ranks",
      "Feats: Dodge, Mobility",
    ],
    features: [
      {
        key: "dread-commando-features",
        name: "Dread Commando Features",
        category: "trait",
        description:
          "An elite scout and strike specialist who moves quickly and quietly even in heavy armor. Sudden strike deals +1d6 extra damage whenever his target is denied its Dexterity bonus to AC (rising to +2d6 at 3rd level and +3d6 at 5th; ranged sudden strikes only within 30 feet, and never nonlethal damage), stacking with sneak attack when both apply. Team initiative bonus grants all allies within 30 feet who can see him (including himself) a competence bonus on initiative checks equal to his class level. Armored ease reduces the armor check penalty of armor he is proficient with by 2 at 2nd level and by 4 at 4th. Stealthy movement (4th) removes the penalty on Hide and Move Silently checks while moving up to his normal speed, and reduces the running/charging penalty to –10.",
        source: `${CH5} — Dread Commando (pp. 103–106; Table 5–3, p. 104)`,
        sourceUrl: HOB_PATH,
      },
    ],
  },
  {
    id: "legendary-leader",
    name: "Legendary Leader",
    ruleset: "core",
    source: `${CH5} — Legendary Leader (p. 107)`,
    sourceUrl: HOB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, P5, P5, G5),
    classSkills: ["Bluff", "Craft", "Diplomacy", "Gather Information", "Handle Animal", "Intimidate", "Knowledge (history)", "Knowledge (nobility and royalty)", "Profession", "Ride", "Sense Motive"],
    prerequisites: [
      "Feats: Iron Will, Leadership",
      "Special: Base Leadership score of 7 or higher",
    ],
    features: [
      {
        key: "legendary-leader-features",
        name: "Legendary Leader Features",
        category: "trait",
        description:
          "A leader of legend whose followers embody his ideals. Fearless (immune to fear effects) and hero's luck (+1 luck bonus on all saving throws, rising to +2 at 3rd level and +3 at 5th) at 1st level, along with natural commander (his commander rating equals his class level unless his rank would grant a higher one) and legendary reputation (add his class level to Diplomacy checks to influence an NPC who is not already unfriendly or hostile). Greater command (spell-like, as the spell, DC 16 + Cha modifier) once per day at 2nd level and twice per day at 4th; quick rally (2nd, a rally check as a free action once per round); a bonus leader feat at 3rd; heroic success (4th, automatically succeed on one saving throw per day instead of rolling); and at 5th, an additional commander aura and to hell and back (followers and cohorts gained from Leadership are immune to fear, including morale checks, while they have line of sight to him). Commander ratings and commander auras are a system this app does not model.",
        source: `${CH5} — Legendary Leader (pp. 107–110; Table 5–4, p. 108)`,
        sourceUrl: HOB_PATH,
      },
    ],
  },
  {
    id: "war-weaver",
    name: "War Weaver",
    ruleset: "core",
    source: `${CH5} — War Weaver (p. 111)`,
    sourceUrl: HOB_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Concentration", "Craft", "Knowledge (arcana)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Craft (weaving) 6 ranks, Knowledge (arcana) 6 ranks",
      "Feats: Enlarge Spell",
      "Spells: Ability to cast 3rd-level arcane spells",
    ],
    features: [
      {
        key: "war-weaver-features",
        name: "War Weaver Features",
        category: "trait",
        description:
          "An arcane weaver who threads her allies together so one spell aids them all. Eldritch tapestry (1st): after 10 minutes and a DC 15 Craft (weaving) check, she connects a number of willing living allies equal to her arcane spellcasting ability bonus (plus herself, who always counts as connected) for 24 hours; a single harmless spell (or one requiring willing targets) she casts can then affect every creature in the tapestry as if it were a single creature, up to a spell level equal to her class level — spells with a range of personal cannot be cast this way, and costly components or XP must be paid once per target. Quiescent weaving stores spells in the tapestry for later release (one spell at 2nd level, plus one more at each level beyond 2nd, released together as a move action). Enlarged tapestry (5th) increases the range category of spells cast through the tapestry by one step (touch becomes close, close becomes medium, medium becomes long). Spellcasting advances +1 level of an existing arcane spellcasting class at every level except 1st.",
        source: `${CH5} — War Weaver (pp. 111–113; Table 5–5, p. 112)`,
        sourceUrl: HOB_PATH,
      },
    ],
  },
];
