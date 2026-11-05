import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

// Magic of Incarnum (WotC, 2005) — Chapter 2: Classes,
// printed pp. 20-32, transcribed from the pdftotext
// extraction of Shaun's own copy, 2026-11-05. Progression
// rows are the printed Tables 2-2, 2-3, and 2-4 for levels
// 1-10, matching this app's per-class level cap convention.
// The meldshaping columns those tables print (soulmelds
// shaped, essentia pool, chakra binds per level) are carried
// in each class's Meldshaping feature text, since the app's
// progression-row shape holds only BAB and saves.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const MOI = "Magic of Incarnum";
const MOI_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Magic of Incarnum.pdf";
const CH2 = `${MOI} — Chapter 2: Classes`;

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key:
        source.split("— ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-") +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: MOI_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fi = mk(`${CH2} — Incarnate`);
const fs = mk(`${CH2} — Soulborn`);
const ft = mk(`${CH2} — Totemist`);

export const MAGIC_OF_INCARNUM_CLASSES: ClassDefinition[] = [
  {
    id: "incarnate",
    name: "Incarnate",
    ruleset: "core",
    source: `${CH2} — Incarnate (pp. 20-24)`,
    sourceUrl: MOI_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF, GOOD, POOR, GOOD),
    classSkills: [
      "Concentration", "Craft", "Knowledge (arcana)", "Knowledge (religion)",
      "Knowledge (the planes)", "Profession", "Spellcraft",
    ],
    features: [
      fi("Incarnate Basics", "Alignment: the incarnate must choose one alignment component — good, evil, law, or chaos — and be neutral as to the other, so the only possible alignments are neutral good, neutral evil, lawful neutral, or chaotic neutral. Key abilities: Constitution determines the maximum number of soulmelds shaped at once (and incarnum radiance duration); Wisdom sets soulmeld save DCs; Strength matters for melee-focused meld choices. Weapon and armor proficiency: all simple weapons, light and medium armor, and shields (except tower shields). Starting gold 5d4x10 gp (125 gp); starting age as cleric.", undefined),
      fi("Meldshaping", "The incarnate shapes soulmelds from the incarnate soulmeld list (book p. 54); he knows and can shape any soulmeld on the list, but cannot shape soulmelds with an alignment descriptor that does not match his own. Save DC = 10 + essentia invested + Wisdom modifier; meldshaper level = incarnate level. Soulmelds shaped / essentia pool / chakra binds by level (Table 2-2) — 1st: 2 / 1 / 0; 2nd: 3 / 2 / 1; 3rd: 3 / 3 / 1; 4th: 4 / 4 / 1; 5th: 4 / 5 / 1; 6th: 4 / 6 / 2; 7th: 5 / 7 / 2; 8th: 5 / 8 / 2; 9th: 5 / 9 / 2; 10th: 6 / 10 / 3; 11th: 6 / 11 / 3; 12th: 6 / 12 / 3; 13th: 7 / 13 / 3; 14th: 7 / 14 / 4; 15th: 7 / 16 / 4; 16th: 8 / 18 / 4; 17th: 8 / 20 / 4; 18th: 8 / 22 / 5; 19th: 9 / 24 / 5; 20th: 9 / 26 / 5. Simultaneous soulmelds are capped by Constitution score - 10 or the table number, whichever is lower. Essentia is reallocated as a swift action each round; soulmelds are shaped after a good night's rest and 1 hour of meditation. Essentia capacity per soulmeld is set by character level (Table 2-1): 1 at levels 1-5, 2 at 6-11, 3 at 12-17, 4 at 18-20 (before this class's Expanded Soulmeld Capacity).", 1),
      fi("Aura (Ex)", "A particularly powerful aura corresponding to his alignment (as the detect evil spell), with power equal to his incarnate level, like the aura of a cleric. His soulmelds likewise radiate his alignment component as though they were aligned magic items with caster level equal to his class level.", 1),
      fi("Detect Opposition (Sp)", "At will, detect the presence of creatures whose alignment is opposite his own; works like detect evil, except it detects the specific alignment opposed to his own (a good incarnate detects evil, a chaotic incarnate detects law).", 1),
      fi("Chakra Binds", "Binding a soulmeld to a chakra grants new powers based on the soulmeld and chakra, and closes the associated body slot to magic items. Schedule (Table 2-2): 2nd level — crown (1 bind). 4th level — feet and hands. 9th level — arms, brow, and shoulders. 14th level — throat and waist. 16th level — heart. 19th level — soul. Total active binds by level: 1 at 2nd-5th, 2 at 6th-9th, 3 at 10th-13th, 4 at 14th-17th, 5 at 18th-20th (see the Meldshaping feature for the full table).", 2),
      fi("Expanded Soulmeld Capacity (Ex)", "At 3rd level the essentia capacity of the incarnate's soulmelds increases by 1, superseding Table 2-1; at 15th level it increases by 1 more (+2 total). Applies to soulmelds only, not to feats, class features, or other essentia receptacles.", 3),
      fi("Incarnum Radiance (Su)", "Once per day at 3rd level (2/day at 8th, 3/day at 13th, 4/day at 18th), activate a visible aura as a free action for 3 + Constitution modifier rounds (minimum 1). Effect by alignment — Good: silvery light, +1 AC, improving by +1 per five levels (+2 at 5th, +3 at 10th, +4 at 15th, +5 at 20th). Evil: ash-gray aura, +2 on melee damage rolls, improving by +2 per five levels (+4 at 5th, +6 at 10th, +8 at 15th, +10 at 20th). Lawful: blood-red corona, +1 on melee attack rolls, improving by +1 per five levels (to +5 at 20th). Chaotic: faint green nimbus, +10 ft. base land speed (a bonus), improving by +10 ft. per five levels (to +50 ft. at 20th).", 3),
      fi("Rapid Meldshaping (Su)", "Once per day at 5th level (2/day at 11th, 3/day at 17th), unshape one existing soulmeld and immediately shape another as a full-round action that provokes attacks of opportunity. The newly shaped soulmeld cannot be bound to a chakra, even if the unshaped one was bound.", 5),
      fi("Share Incarnum Radiance (Su)", "Beginning at 7th level, when activating incarnum radiance the incarnate may share its benefit with all allies within 30 feet who share his alignment cause (an ally who leaves the radius loses the benefit until he returns). Sharing leaves the incarnate fatigued at the end of the duration (fatigue fades in 10 minutes); from 17th level, sharing no longer fatigues him.", 7),
      fi("Perfect Meldshaper (Su)", "At 20th level, as a free action that does not provoke attacks of opportunity, once per day: increase the essentia invested in each currently shaped incarnate soulmeld to that soulmeld's maximum essentia capacity (exceeding his normal pool) for 3 + Wisdom modifier rounds; during this time he can't reallocate essentia from his incarnate soulmelds.", 20),
      fi("True Incarnation (Su)", "At 20th level the incarnate gains the outsider type and the alignment subtype corresponding to his cause; both natural and weapon attacks are treated as having that alignment for overcoming damage reduction.", 20),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "soulborn",
    name: "Soulborn",
    ruleset: "core",
    source: `${CH2} — Soulborn (pp. 25-28)`,
    sourceUrl: MOI_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, GOOD, POOR, POOR),
    classSkills: [
      "Climb", "Concentration", "Craft", "Handle Animal", "Heal", "Jump",
      "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Ride",
      "Spellcraft", "Swim",
    ],
    features: [
      fs("Soulborn Basics", "Alignment: soulborns hew to strong convictions and can only be lawful good, chaotic good, lawful evil, or chaotic evil. Key abilities: Strength and Constitution for combat; Constitution also governs her meldshaping; Charisma feeds smite opposition. Weapon and armor proficiency: all simple and martial weapons, light, medium, and heavy armor, and shields (except tower shields). Class skills additionally include one skill by alignment: Diplomacy (lawful good), Gather Information (chaotic good), Bluff (lawful evil), or Intimidate (chaotic evil). Starting gold 6d4x10 gp (150 gp); starting age as paladin.", undefined),
      fs("Aura (Ex)", "A particularly powerful aura corresponding to her alignment (see the detect evil spell).", 1),
      fs("Smite Opposition (Su)", "Once per day, channel conviction into a melee attack: add Charisma bonus (if any) to the attack roll and deal +1 damage per soulborn level. Applies only against creatures whose alignment opposes at least one component of hers (a lawful good soulborn smites chaotic and/or evil foes; a chaotic good soulborn smites lawful and/or evil foes). A smite against a creature of the wrong alignment has no effect but is still used up. Usable 2/day at 5th level, 3/day at 10th, 4/day at 15th, 5/day at 20th.", 1),
      fs("Incarnum Defense (Su)", "At 2nd level her incarnum-fused soul visibly changes her appearance and grants an immunity by alignment — Lawful good: eyes become solid gold orbs; immunity to fear. Chaotic good: irises turn emerald green; immunity to paralysis. Lawful evil: pupils show an unholy red hue; immunity to exhaustion (effects that would exhaust render her fatigued instead). Chaotic evil: eyes become solid shadowy black orbs; immunity to any penalty, damage, or drain to Strength.", 2),
      fs("Bonus Feat", "At 3rd, 7th, and 11th levels, gain a bonus incarnum feat (Chapter 3) whose prerequisites she meets.", 3),
      fs("Meldshaping", "Beginning at 4th level, the soulborn shapes soulmelds from the soulborn soulmeld list (book p. 56); she knows and can shape any soulmeld on the list, but cannot shape soulmelds with an alignment descriptor that does not match her own. Save DC = 10 + essentia invested + Constitution modifier; meldshaper level = one-half her soulborn level. Soulmelds shaped / essentia pool / chakra binds by level (Table 2-3) — 1st-3rd: 0 / 0 / 0; 4th: 1 / 0 / 0; 5th: 1 / 0 / 0; 6th: 1 / 1 / 0; 7th: 1 / 1 / 0; 8th: 2 / 2 / 1; 9th: 2 / 2 / 1; 10th: 2 / 3 / 1; 11th: 2 / 3 / 1; 12th: 3 / 4 / 1; 13th: 3 / 4 / 1; 14th: 3 / 5 / 2; 15th: 3 / 5 / 2; 16th: 4 / 6 / 2; 17th: 4 / 7 / 2; 18th: 4 / 8 / 3; 19th: 4 / 9 / 3; 20th: 5 / 10 / 3. (Essentia pool begins at 6th level.) Simultaneous soulmelds capped by Constitution - 10 or the table, whichever is lower; essentia reallocated as a swift action; shape after rest + 1 hour of meditation.", 4),
      fs("Chakra Binds", "Schedule (Table 2-3): 8th level — crown, feet, and hands (1 bind). 14th level — arms, brow, and shoulders (2 binds). 18th level — throat and waist (3 binds). A soulborn never gains the ability to bind a soulmeld to her heart or soul chakras. Binding closes the associated body slot to magic items.", 8),
      fs("Share Incarnum Defense (Su)", "Starting at 9th level, once per day (2/day at 13th, 3/day at 17th) share her incarnum defense immunity with a single touched ally (standard action) for 3 + Charisma modifier rounds. The ally's alignment may not be opposed to hers. Only one ally at a time; sharing with a second ally ends the effect on the first.", 9),
      fs("Timeless Body (Ex)", "At 19th level she no longer takes penalties to her ability scores for aging and cannot be magically aged; penalties already taken remain, bonuses still accrue, and she still dies of old age when her time is up.", 19),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "totemist",
    name: "Totemist",
    ruleset: "core",
    source: `${CH2} — Totemist (pp. 29-32)`,
    sourceUrl: MOI_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, GOOD, GOOD, POOR),
    classSkills: [
      "Concentration", "Craft", "Handle Animal", "Knowledge (arcana)",
      "Knowledge (nature)", "Knowledge (the planes)", "Listen", "Profession",
      "Ride", "Spellcraft", "Spot", "Survival", "Swim",
    ],
    features: [
      ft("Totemist Basics", "Alignment: any. Key abilities: Constitution determines how many soulmelds he can shape at once and sets the save DCs of his soulmelds; Strength for melee; Dexterity for AC. Weapon and armor proficiency: all simple weapons, light armor, and shields (except tower shields). Like barbarians, totemists are illiterate (see Illiteracy). Starting package in the book: studded leather, heavy wooden shield, shortspear and light crossbow.", undefined),
      ft("Meldshaping", "The totemist shapes soulmelds from the totemist soulmeld list (book p. 58); he knows and can shape any soulmeld on the list — his melds channel the spirits of magical beasts rather than aligned forces. Save DC = 10 + essentia invested + Constitution modifier; meldshaper level = totemist level. Soulmelds shaped / essentia pool / chakra binds by level (Table 2-4) — 1st: 2 / 1 / 0; 2nd: 3 / 2 / 1; 3rd: 3 / 2 / 1; 4th: 4 / 3 / 1; 5th: 4 / 3 / 1; 6th: 4 / 4 / 2; 7th: 5 / 5 / 2; 8th: 5 / 5 / 2; 9th: 5 / 6 / 2; 10th: 6 / 7 / 3; 11th: 6 / 8 / 3; 12th: 6 / 9 / 3; 13th: 7 / 10 / 3; 14th: 7 / 11 / 4; 15th: 7 / 12 / 4; 16th: 8 / 13 / 4; 17th: 8 / 14 / 4; 18th: 8 / 16 / 5; 19th: 9 / 18 / 5; 20th: 9 / 20 / 5. Simultaneous soulmelds capped by Constitution - 10 or the table, whichever is lower; essentia reallocated as a swift action; shape after rest + 1 hour of meditation.", 1),
      ft("Wild Empathy (Ex)", "As the druid class ability (Player's Handbook p. 35), plus a +4 bonus on wild empathy checks to influence magical beasts of the same kind as the beast associated with the soulmeld bound to his totem chakra.", 1),
      ft("Illiteracy", "Totemists do not begin the game knowing how to read and write; spend 2 skill points to learn to read and write all languages he can speak. Gaining a level in any other class (except barbarian) automatically grants literacy; a literate character who gains a totemist level does not lose literacy.", 1),
      ft("Totem Chakra Bind", "At 2nd level he gains access to the unique totem chakra — not a body location, so binding there doesn't restrict magic items — representing his connection to the wild soul energy of magical beasts; binding a soulmeld there takes on characteristics of the represented creature. A soulmeld bound to the totem chakra has essentia capacity +1 (increased by another +1 at 15th level, +2 total). At 6th level, the effective meldshaper level of a totem-bound soulmeld is his meldshaper level +1 (making it harder to unshape). At 11th level, he can bind a single soulmeld to his totem chakra and to another chakra at the same time, gaining both binds' benefits.", 2),
      ft("Chakra Binds", "Schedule (Table 2-4): 2nd level — totem chakra (1 bind). 5th level — crown, feet, and hands. 9th level — arms, brow, and shoulders. 14th level — throat and waist. 17th level — heart. He never gains the ability to bind a soulmeld to his soul chakra. Total binds: 1 at 2nd-5th, 2 at 6th-9th, 3 at 10th-13th, 4 at 14th-17th, 5 at 18th-20th.", 2),
      ft("Totem's Protection (Ex)", "At 3rd level, +4 bonus on saving throws against the supernatural abilities of magical beasts.", 3),
      ft("Rebind Totem Soulmeld (Su)", "Starting at 8th level, once per day (2/day at 12th, 3/day at 16th, 4/day at 20th), unbind a soulmeld from his totem chakra and bind a different already-shaped meld to it, as a full-round action that provokes attacks of opportunity.", 8),
      ft("Totem Embodiment (Su)", "At 20th level, once per day as a free action, for a number of minutes equal to his Constitution bonus (minimum 1): the essentia capacity of any soulmeld bound to his totem chakra is doubled, and every point of essentia invested in such a soulmeld counts as 2 points.", 20),
    ].map((x) => x as FeatureDefinition),
  },
];
