import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Fiendish Codex II prestige classes: all four from Chapter 3 —
// Hellbreaker (p. 86), Hellfire Warlock (p. 89), Hellreaver
// (p. 92), and Soulguard (p. 95). Short mechanical summaries in
// our own words, cited to book + page; progression tables are
// the book's printed tables.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf

const FC2 = "Fiendish Codex II: Tyrants of the Nine Hells";
const FC2_PATH = "/A POC PC related/4.Core books/monster manuals/Fiendish Codex II, Tyrant of the Nine Hells.pdf";
const CH3 = `${FC2} — Chapter 3: Game Rules`;

type F = FeatureDefinition & { levelsNeeded?: number };

function f(name: string, description: string, levelsNeeded: number | undefined, source: string): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl: FC2_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

export const FIENDISH_CODEX_II_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "hellbreaker",
    name: "Hellbreaker",
    ruleset: "core",
    source: `${CH3} — Hellbreaker (pp. 86–88)`,
    sourceUrl: FC2_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Appraise", "Bluff", "Escape Artist", "Gather Information", "Hide", "Intimidate",
      "Knowledge (the planes)", "Listen", "Move Silently", "Search", "Sense Motive",
      "Spot", "Tumble",
    ],
    prerequisites: [
      "Alignment: Any chaotic",
      "Skills: Bluff 8 ranks, Knowledge (the planes) 4 ranks, Sense Motive 8 ranks",
      "Language: Infernal",
      "Feats: Combat Expertise, Improved Feint, Undo Resistance",
      "Special: Sneak attack +2d6, skirmish +2d6, or sudden strike +2d6",
    ],
    features: [
      f("Mantle of Darkness (Ex)", "At 1st level, you can make Hide checks in any kind of darkness, even when observed by creatures that can see in darkness.", 1, `${CH3} — Hellbreaker (p. 87)`),
      f("Telepathic Static (Su)", "Beginning at 1st level, you emit a field of psychic chatter out to 20 feet that negates the telepathy ability of all creatures in range and impedes divination spells and spell-like abilities: a caster must succeed on a Spellcraft check (DC 20 + the spell's level) or the effect fails and is lost. You can suppress the field for 1 round as a free action.", 1, `${CH3} — Hellbreaker (p. 87)`),
      f("Steal Spell-Like Ability (Su)", "Starting at 2nd level, when you hit an opponent with a sneak attack you can forgo 2d6 dice of sneak attack damage to gain one use of one of the target's spell-like abilities (any level up to half your class level). You must use it within 1 minute or it is lost; until then the target cannot use it, and your use counts against the target's daily uses. A willing target can be touched as a standard action instead. Once you have stolen an ability you cannot use neutralize spell-like ability until you have used the stolen one.", 2, `${CH3} — Hellbreaker (p. 87)`),
      f("Sneak Attack", "At 3rd level, your sneak attack damage increases by +1d6, as the rogue class feature. It increases again to +2d6 at 6th level and +3d6 at 9th level.", 3, `${CH3} — Hellbreaker (pp. 86–87)`),
      f("Stowaway (Su)", "From 4th level on, you can hitch a ride on a conjuration (teleportation) spell or spell-like ability cast or used within 30 feet of you: if the target is unwilling, you must succeed on a level check (DC 10 + the caster level of the effect) as an immediate action; if the target is willing, the ability functions automatically. When the spell is cast, you appear wherever the caster appears.", 4, `${CH3} — Hellbreaker (p. 87)`),
      f("Neutralize Spell-Like Ability (Su)", "Beginning at 5th level, you can neutralize one of a target's spell-like abilities: this functions like steal spell-like ability, except you do not gain the use of the ability — instead, you prevent the target from using it for a number of rounds equal to your class level. You cannot use this ability while holding a stolen spell-like ability.", 5, `${CH3} — Hellbreaker (p. 87)`),
      f("Foil Summoning (Su)", "At 7th level, your telepathic static intensifies so that it also impedes conjuration (calling) and conjuration (summoning) spells and spell-like effects within 20 feet (see telepathic static, above).", 7, `${CH3} — Hellbreaker (p. 87)`),
      f("Steal Supernatural Ability (Su)", "From 8th level on, you can steal supernatural abilities, functioning like steal spell-like ability. While in possession of a stolen spell-like or supernatural ability, you cannot use steal spell-like ability, steal supernatural ability, or neutralize spell-like ability again until you lose access to the stolen ability (by discharging it or after 1 minute).", 8, `${CH3} — Hellbreaker (p. 88)`),
      f("Plane Hop (Sp)", "At 10th level, you can use plane shift as an immediate action once per day, functioning like the spell but with a range of personal and a target of you only.", 10, `${CH3} — Hellbreaker (p. 88)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "hellfire-warlock",
    name: "Hellfire Warlock",
    ruleset: "core",
    source: `${CH3} — Hellfire Warlock (pp. 89–90)`,
    sourceUrl: FC2_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows([0, 1, 2], [0, 0, 1], [0, 0, 1], [2, 3, 3]),
    classSkills: [
      "Concentration", "Disguise", "Intimidate", "Knowledge (arcana)",
      "Knowledge (the planes)", "Knowledge (religion)", "Spellcraft", "Use Magic Device",
    ],
    prerequisites: [
      "Skills: Intimidate 6 ranks, Knowledge (the planes) 12 ranks, Spellcraft 6 ranks",
      "Language: Infernal",
      "Warlock Invocation: Must know brimstone blast or hellrime blast",
    ],
    features: [
      f("Invoking", "At each level, you gain new invocations known, increased eldritch blast damage, and an increase in invoker level as if you had also gained a level in the warlock class; you do not gain any other benefit of that class.", 1, `${CH3} — Hellfire Warlock (p. 90)`),
      f("Hellfire Blast (Sp)", "Whenever you use your eldritch blast, you can change it into a hellfire blast, adding +2d6 damage per class level (+2d6 at 1st, +4d6 at 2nd, +6d6 at 3rd). The extra damage is not fire damage. Each use costs you 1 point of Constitution damage; if you have no Constitution score or are immune to Constitution damage, you cannot use this ability.", 1, `${CH3} — Hellfire Warlock (p. 90)`),
      f("Hellfire Infusion (Su)", "Starting at 2nd level, when you use a charged magic item (such as a wand or staff), as a swift action you can apply one metamagic effect to your next use of the item — empower, enlarge, widen, or energy substitution — usable a number of times per day equal to your Charisma modifier (minimum one).", 2, `${CH3} — Hellfire Warlock (p. 90)`),
      f("Resistance to Fire 10 (Ex)", "At 2nd level, you gain resistance to fire 10, stacking with fire resistance from warlock class levels.", 2, `${CH3} — Hellfire Warlock (p. 90)`),
      f("Hellfire Shield (Sp)", "Starting at 3rd level, when someone directs a melee attack against you, as an immediate action you can aim a blast of hellfire at that creature, dealing your eldritch blast damage (including hellfire blast bonus damage); the blast strikes automatically, with a Reflex save (DC 10 + 1/2 your character level + your Cha modifier) for half damage. Each use costs 1 point of Constitution damage (same restriction as hellfire blast).", 3, `${CH3} — Hellfire Warlock (p. 90)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "hellreaver",
    name: "Hellreaver",
    ruleset: "core",
    source: `${CH3} — Hellreaver (pp. 92–94)`,
    sourceUrl: FC2_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], P, P, G),
    classSkills: [
      "Craft", "Intimidate", "Knowledge (religion)", "Knowledge (the planes)",
      "Listen", "Sense Motive", "Spot",
    ],
    prerequisites: [
      "Alignment: Any good",
      "Base Attack Bonus: +5",
      "Skills: Knowledge (the planes) 4 ranks",
      "Feats: Power Attack",
      "Special: Must slay an outsider with the evil subtype",
    ],
    features: [
      f("Holy Fury (Ex)", "Once per encounter (a free action to enter, lasting until the encounter ends), you enter a holy fury: your melee attacks are good-aligned, you are immune to fear effects, and you gain a pool of holy fury points equal to your hellreaver level plus your Charisma modifier, which powers many of the class's abilities.", 1, `${CH3} — Hellreaver (p. 94)`),
      f("Furious Strike (Su)", "As a swift action, spend 1 holy fury point to charge your weapon against an evil creature: +2 on the attack roll and +1d6 damage on your next attack. The bonuses rise to +4/+2d6 at 4th level, +6/+3d6 at 7th, and +8/+4d6 at 10th. A missed or misdirected strike still spends the point.", 1, `${CH3} — Hellreaver (p. 94)`),
      f("Divine Succor (Su)", "Beginning at 2nd level, as a swift action, spend 1 holy fury point to heal 10 points of damage to yourself or a good-aligned creature within 20 feet. The amount rises to 20 points at 5th level and 30 points at 8th.", 2, `${CH3} — Hellreaver (p. 94)`),
      f("Divine Resolve (Su)", "From 3rd level, as an immediate action (even after attempting a save, before learning the result), spend 1 holy fury point to gain a +2 bonus on your next saving throw.", 3, `${CH3} — Hellreaver (p. 94)`),
      f("Divine Shield (Su)", "From 3rd level, as an immediate action (even after a foe attacks, before learning the result), spend 1 holy fury point to gain a +2 bonus to AC against the next attack you face.", 3, `${CH3} — Hellreaver (p. 94)`),
      f("Mettle (Ex)", "Beginning at 4th level, if you make a successful Fortitude or Will save that would normally reduce (rather than negate) a spell's effect, you suffer no effect from the spell at all.", 4, `${CH3} — Hellreaver (p. 94)`),
      f("Heroic Sacrifice (Su)", "From 5th level, as a swift action, you can voluntarily take 2 points of Constitution damage to fully replenish your holy fury points.", 5, `${CH3} — Hellreaver (p. 93)`),
      f("Call to Judgment (Su)", "At 6th level, as a swift action, spend 3 holy fury points to charge your weapon; if your next melee attack hits an evil outsider, the target suffers a dimensional anchor effect (caster level equal to your hellreaver level).", 6, `${CH3} — Hellreaver (p. 93)`),
      f("Improved Divine Resolve (Su)", "At 9th level, spend 2 holy fury points as an immediate action to gain a +4 bonus on a saving throw (replacing the +2 of divine resolve).", 9, `${CH3} — Hellreaver (p. 93)`),
      f("Improved Divine Shield (Su)", "At 9th level, spend 2 holy fury points as an immediate action to gain a +4 bonus to AC (replacing the +2 of divine shield).", 9, `${CH3} — Hellreaver (p. 93)`),
      f("Divine Retribution (Su)", "At 10th level, once per day as a swift action, spend 4 holy fury points to imbue your next attack: if it hits an outsider with the evil subtype, the target must make a Fortitude save (DC 10 + 1/2 your character level + your Cha modifier) or be slain in an explosion that blinds all evil creatures in a 60-foot-radius burst for 1 round (no save); on a successful save it instead takes 10d6 points of damage in addition to the attack's normal damage.", 10, `${CH3} — Hellreaver (p. 93)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "soulguard",
    name: "Soulguard",
    ruleset: "core",
    source: `${CH3} — Soulguard (pp. 95–96)`,
    sourceUrl: FC2_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: [
      "Concentration", "Decipher Script", "Diplomacy", "Gather Information", "Intimidate",
      "Knowledge (religion)", "Knowledge (the planes)", "Sense Motive", "Spellcraft",
    ],
    prerequisites: [
      "Alignment: Lawful good or lawful neutral",
      "Skills: Intimidate 4 ranks, Knowledge (religion) 9 ranks, Knowledge (the planes) 4 ranks",
      "Language: Infernal",
      "Feat: Iron Will",
      "Spellcasting: Ability to cast 1st-level divine spells",
    ],
    features: [
      f("Spellcasting", "At each level above 1st (2nd through 10th), you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in a divine spellcasting class you belonged to before adding the prestige class level; you gain no other benefit of that class. (At 1st level, no spellcasting advancement.)", 1, `${CH3} — Soulguard (p. 96)`),
      f("Pierce Deception (Sp)", "A number of times per day equal to your Wisdom modifier (minimum one), as a standard action, you can sacrifice a prepared spell or spell slot to use true seeing on yourself (no material component), lasting a number of rounds equal to the level of the spell sacrificed; caster level equals your caster level.", 1, `${CH3} — Soulguard (p. 96)`),
      f("Divine Rebuke (Su)", "Starting at 2nd level, as a swift action, sacrifice a spell slot or prepared spell to rebuke an evil outsider within 30 feet: it must succeed on a Will save (DC 10 + the level of the spell sacrificed + your Cha modifier) or cower for a number of rounds equal to the spell slot sacrificed; the effect ends if the fiend is attacked.", 2, `${CH3} — Soulguard (p. 96)`),
      f("Immunity to Charm (Ex)", "At 2nd level, you gain immunity to enchantment (charm) spells and effects.", 2, `${CH3} — Soulguard (p. 96)`),
      f("Dispel Evil (Sp)", "Beginning at 3rd level, you can use dispel evil once per day (caster level equals your divine caster level; save DC Charisma-based). Uses rise to twice per day at 6th level and three times per day at 9th.", 3, `${CH3} — Soulguard (p. 96)`),
      f("Absolution (Sp)", "Starting at 4th level, you can use atonement once per day as a spell-like ability; under this book's corruption mechanics it can instead purify a willing creature of corruption points, as the class describes.", 4, `${CH3} — Soulguard (p. 96)`),
      f("Immunity to Compulsion (Ex)", "At 5th level, you gain immunity to enchantment (compulsion) spells and effects.", 5, `${CH3} — Soulguard (p. 96)`),
      f("Purging Radiance (Su)", "At 7th level, as a standard action, spend a daily use of your turn undead ability to deal 1d6 points of damage per class level to evil outsiders within 30 feet. This ability does not provoke attacks of opportunity and has no effect if you lack the turn undead ability.", 7, `${CH3} — Soulguard (p. 96)`),
      f("Resistance Aura (Su)", "From 8th level, you and all allies within 20 feet gain a +2 bonus on saving throws against spells and effects generated by evil outsiders.", 8, `${CH3} — Soulguard (p. 96)`),
      f("Dimensional Anchor (Su)", "At 10th level, no evil outsider can use a teleportation spell or effect while within 20 feet of you. Multiclass note: a paladin who becomes a soulguard can continue advancing as a paladin.", 10, `${CH3} — Soulguard (p. 96)`),
    ].map((x) => x as FeatureDefinition),
  },
];
