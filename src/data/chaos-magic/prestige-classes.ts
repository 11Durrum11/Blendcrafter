import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Chaos Magic: Wild Sorcery (Encyclopaedia Arcane,
// Mongoose Publishing, 2001) — the two prestige classes
// of the Wild Specialists chapter, printed pp. 50-53,
// transcribed in full — progression tables included —
// from Shaun's own scanned copy (read visually;
// the scan is image-only), 2026-11-04. This is a
// 3.0-era book: entries are transcribed as printed
// (the Bloodcarver's printed base attack progression
// +1/+1/+2/+2/+3 matches neither standard track; its
// progression rows transcribe the printed table
// exactly, and the Doomringer's table prints its Ref
// column without + signs). Chapter rule (p. 50): chaos
// mages may pursue any prestige class for which they
// fulfil the requirements, so long as that prestige
// class does not grant static magic of any type —
// chaos mages are unable to ever learn this type of
// magic and cannot get around this penalty by taking
// such a prestige class; they are free to gain the
// ability to cast divine spells as a result of
// pursuing a prestige class. Summaries are short
// mechanical paraphrases in our own words; no book
// prose is reproduced.

const CM = "Chaos Magic: Wild Sorcery";
const CM_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Encyclopaedia Arcane/Chaos Magic - Wild Sorcery.pdf";
const BCARV = `${CM} — Bloodcarver`;
const DOOM = `${CM} — Doomringer`;

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
      sourceUrl: CM_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fb = mk(BCARV);
const fd = mk(DOOM);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

export const CHAOS_MAGIC_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "bloodcarver",
    name: "Bloodcarver",
    ruleset: "core",
    source: `${BCARV} (pp. 50-51)`,
    sourceUrl: CM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows([1, 1, 2, 2, 3], [2, 3, 3, 4, 4], [0, 0, 1, 1, 2], [2, 3, 3, 4, 4]),
    classSkills: [
      "Balance", "Climb", "Concentration", "Heal", "Intimidate",
      "Spellcraft", "Survival",
    ],
    prerequisites: [
      "Skills: Concentration 12 ranks",
      "Special: ability to cast chaos magic spells",
    ],
    features: [
      fb("Bloodcarver Proficiencies", "Bloodcarvers injure themselves when casting spells, using pain and blood to focus the power of chaos in a specific direction — the deeper the cut, the more control the chaos mage has over his power. Bloodcarvers gain no proficiency in any weapon or armour. (The book notes that armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand and Tumble.)", undefined),
      fb("Bloodletting", "At 1st level, the bloodcarver learns how to release chaotic energies by spilling his own blood: every 2 hit points of damage the bloodcarver causes to himself whilst casting a spell allows a +1 circumstance bonus to the Casting check. Bloodletting allows the chaos mage to carefully control how much damage he causes himself — there is no danger of inadvertently causing more or less damage than desired when using this ability.", 1),
      fb("Ignore Pain", "At 2nd level, the bloodcarver is so resistant to pain that he is able to maintain his concentration even if he suffers damage from an attack. This ability grants the bloodcarver the Combat Casting feat; if he already possesses this feat, he doubles the bonus gained from it.", 2),
      fb("Damage Reduction", "At 3rd level, the bloodcarver suffers one hit point less of any damage he is dealt.", 3),
      fb("Armour of Scars", "By 4th level, the damage done to the chaos mage has left a criss-cross pattern of thick scar tissue covering most of the mage's available skin; the scarring is so severe the character gains protection from the thickened flesh — a +1 natural armour bonus to his Armour Class.", 4),
      fb("Bloodcarving", "At 5th level, the chaos mage has perfected the art of releasing chaos through pain and blood, carving his flesh more precisely so less damage need be dealt to himself to achieve the desired result: for every point of damage the bloodcarver causes to himself whilst casting a spell, he gains a +1 circumstance bonus to his Casting check. Bloodcarving allows the chaos mage to carefully control how much damage he causes himself, as Bloodletting.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "doomringer",
    name: "Doomringer",
    ruleset: "core",
    source: `${DOOM} (pp. 52-53)`,
    sourceUrl: CM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows([0, 1, 1, 2, 2], [0, 0, 1, 1, 2], [0, 0, 1, 1, 2], [2, 3, 3, 4, 4]),
    classSkills: [
      "Craft (alchemy)", "Concentration", "Craft (coppersmith)", "Knowledge (necrology)",
      "Sense Motive", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Concentration 12 ranks",
      "Alignment: chaotic evil",
      "Special: ability to cast chaos magic spells",
    ],
    features: [
      fd("Doomringer Proficiencies", "Doomringers are a cult of evil chaos mages who shift the lash of chaos from themselves to the dead: tiny enchanted copper bells are attached to the flesh of the dead and the living, forging a connection between the two through which spellcasting and backlash damage is transferred to a corpse, sparing the chaos mage. Cultists must maintain absolute secrecy about their organisation, on pain of death. Doomringers gain no proficiency in any weapon or armour.", undefined),
      fd("Corpse Pact", "Upon taking the first level of the doomringer prestige class, the character learns the secret of making a Corpse Pact. This requires enchanting a pair of copper bells with the mixed blood of the doomringer and a recently dead corpse, then infusing both bells with a rush of raw chaos in a ritual lasting 1d4 hours; the corpse must be recently dead when the bells are attached, as the process imprisons the spirit of the newly dead within its corpse. Only one corpse may be bonded in this way at any one time. Any time the doomringer would suffer damage from either a casting attempt or backlash, one-half of the hit point damage is transferred to the corpse instead. The bonded corpse has a number of hit points equal to 1d4 times the level of the doomringer at the time the bond was created (it does not gain new hit points if the doomringer gains a level after bonding). Once a corpse's hit points are depleted, it is destroyed — the powers of chaos demolish the corpse and the spirit it contained. If a doomringer is forced to take a step on one of the Paths of Chaos, the corpse is immediately destroyed, but the doomringer himself does not advance on the Path. Both bells emit a spectral ringing lasting 1 round for every five points of damage, or part thereof, suffered by the corpse (a full 5 rounds if the corpse is destroyed by a forced Path step); the bell can be heard by anyone within 50 feet and cannot be silenced or muffled in anyway. Once a corpse has been demolished by the force of chaos, the doomringer suffers double damage from any chaotic backlash or spellcasting strain until a new corpse has been bonded.", 1),
      fd("Preserve Corpse", "At 2nd level, the doomringer has learned enough about the dead to repair the damage dealt to his bonded corpse: once per day, the chaos mage can restore 1d6 points of damage to the corpse by infusing a fraction of his life essence back into the dead body.", 2),
      fd("Blood Shunt", "At 3rd level, the doomringer can transfer not only damage from chaos magic to the corpse, but also the effects of any injury he suffers: he can transfer one hit point of damage to the corpse for every four hit points they suffer from an attack or other source. The doomringer must decide immediately upon suffering an attack whether or not to transfer any damage to the bonded corpse. Doomringers do not suffer double damage from such sources if their corpse is destroyed — this applies only to damage from chaos spell casting or backlashes.", 3),
      fd("Walking Death", "By 4th level the doomringer can forestall his own death by drawing upon the spirit within his bonded corpse: if a doomringer falls below zero hit points, but has not yet reached -10 hit points, the imprisoned spirit can allow him to remain conscious (though weak). Every round the character remains at negative hit points, his corpse suffers 1d4 points of damage — if the corpse is destroyed while being used in this manner, the doomringer immediately dies. While using this ability, the doomringer can take only a single move action or standard action in each round.", 4),
      fd("Avatar of Death", "At 5th level, all damage dealt to the doomringer from either chaotic spell casting or backlashes may be transferred in its entirety to the corpse. In addition, one-half of any other damage can be transferred if the doomringer so wishes.", 5),
    ].map((x) => x as FeatureDefinition),
  },
];
