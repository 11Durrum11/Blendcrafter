import type { TemplateDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #315 pack (library-staging/packs/dragon-magazine/issue-315)
// The issue's four templates:
//   * Ka-Tainted, from the Hollow World article (p. 22).
//   * T'liz, from the Dark Sun article "Defilers of Athas"
//     (pp. 32–37) — the end state of the defiler system written up
//     in reference.md.
//   * Fleshvigor, from the Ghostwalk article (p. 56).
//   * Afflicted, from the Red Steel article (pp. 68–73) — the end
//     state of the Red Curse system written up in reference.md.
// Transcribed from the magazine text on archive.org
// (DragonMagazine315_djvu.txt). Descriptions are faithful mechanical
// paraphrases in our own words; no magazine prose is reproduced.
// Sample creatures are written up in reference.md.
//
// Shape notes:
//   * Ka-Tainted changes no type and grants its speed/attack changes
//     conditionally by dinosaur form, so it carries an empty patches
//     array and everything rides in features.
//   * The t'liz Hit Dice change (all dice become d12s) is expressed
//     as an increase-hit-dice patch with a note; the Patch op steps
//     dice along the size ladder rather than setting a die, so the
//     note carries the printed rule (the issue-313 elder-serpent
//     precedent of carrying a die change partly in text).
//   * The afflicted template prints NO Challenge Rating or Level
//     Adjustment line in the article; its sample creature (a
//     5th-level human fighter) is CR 5, equal to its base, so both
//     are carried as 0 and flagged in MANIFEST.md.

const DM315 = "Dragon Magazine #315";
const DM315_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt";

export const DRAGON_315_TEMPLATES: TemplateDefinition[] = [
  {
    id: "ka-tainted",
    name: "Ka-Tainted",
    ruleset: "core",
    timing: "acquired",
    summary: "A creature infused with the essence of a Hollow World dinosaur kindred (deinonychus, elasmosaurus, megaraptor, triceratops, or tyrannosaurus) by the Tchaltilka ritual of the Defilers of Ka: poisonous blood, natural armor, dinosaur-form attacks and senses, Strength +4, Constitution +2, Intelligence −2, and Toughness as a bonus feat. Challenge Rating: +1. Level Adjustment: +3.",
    source: DM315,
    sourceUrl: DM315_PATH,
    crModifier: 1,
    levelAdjustment: 3,
    prerequisites: [
      { allowedBaseTypes: ["Giant", "Humanoid", "Monstrous Humanoid"], note: "Acquired template; can be added to any giant, humanoid, or monstrous humanoid. The creature takes on the traits of one dinosaur kindred (deinonychus, elasmosaurus, megaraptor, triceratops, or tyrannosaurus) chosen through the Tchaltilka ritual (see reference.md)." },
    ],
    abilityModifiers: { str: 4, con: 2, int: -2 },
    patches: [],
    features: [
      {
        key: "ka-tainted-natural-armor",
        name: "Natural Armor",
        description: "The Ka-tainted creature's natural armor bonus improves by +2 (+4 for a triceratops Ka-tainted).",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "ka-tainted-dinosaur-form",
        name: "Dinosaur Form Attacks",
        description: "The creature gains natural attacks by kindred: elasmosaurus — a swim speed of 20 feet; deinonychus or megaraptor — two claw attacks; triceratops — a gore attack, and the stability special quality; tyrannosaurus — a bite attack and Improved Natural Attack (bite) as a bonus feat. Natural attack damage by creature size (Bite / Claw / Gore): Fine 1d2* / 1* / —; Diminutive 1d2* / 1 / —; Tiny 1d3 / 1d2* / 1d2*; Small 1d4 / 1d3 / 1d4; Medium 1d6 / 1d4 / 1d6; Large 1d8 / 1d6 / 1d8*; Huge 2d6 / 2d6* / 2d6*; Gargantuan 3d6* / 3d6 / 3d6*; Colossal 4d6 / 4d6 / 4d6*. Values marked * are reconstructed: the magazine's damage table is partly illegible in the OCR and was rebuilt from the surviving cells and the standard natural-attack damage ladder — see MANIFEST.md.",
        category: "special-attack",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "ka-tainted-blood-of-ka",
        name: "Blood of Ka (Su)",
        description: "The Ka-tainted creature's blood is a contact poison (DC 10 + 1/2 the creature's racial Hit Dice + its Constitution modifier) dealing initial and secondary damage of 1d6 Intelligence and 1d4 Constitution. A creature that damages the Ka-tainted with a nonreach slashing or piercing handheld weapon or a natural weapon is exposed to the poison; victims often coat their weapons with the blood deliberately. The blood is harmless 24 hours after leaving the body. A Ka-tainted creature is immune to its own blood, but not to the blood of other Ka-tainted creatures.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
        dcFormula: "10 + 1/2 racial HD + Con",
      },
      {
        key: "ka-tainted-senses",
        name: "Senses",
        description: "The Ka-tainted creature gains low-light vision and the scent special quality.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "ka-tainted-skills",
        name: "Skills",
        description: "By kindred: a deinonychus or megaraptor Ka-tainted gains a +4 racial bonus on Hide, Jump, Listen, Spot, and Survival checks (bonus value read from a partially legible OCR line — see MANIFEST.md); an elasmosaurus Ka-tainted gains a +2 racial bonus on Hide checks in water.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "ka-tainted-toughness",
        name: "Toughness",
        description: "The Ka-tainted creature gains Toughness as a bonus feat.",
        category: "feat",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
    ],
  },
  {
    id: "tliz",
    name: "T'liz",
    ruleset: "core",
    timing: "acquired",
    summary: "A Dark Sun defiler whose accumulated defiler points (41 or more) have transformed her into an undead engine of defiling: undead type with all Hit Dice as d12s, natural armor +5, a fear aura, energy drain that feeds her defiling, rebuke undead, spectre spawn, turn resistance +4, damage reduction 10/bludgeoning and magic, and immunity to electricity, polymorph, and mind-affecting attacks. Challenge Rating: +2. Level Adjustment: +4. The defiler system this template caps is in reference.md; The APOC undead house rules are NOT baked into this record (see SCREENING.md).",
    source: DM315,
    sourceUrl: DM315_PATH,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      { allowedBaseTypes: ["Humanoid"], note: "Acquired template; can be added to any humanoid with 41 or more defiler points (see the defiler system in reference.md)." },
    ],
    abilityModifiers: { int: 4, cha: 4, con: null },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to Undead; do not recalculate base attack bonus, saves, or skill points." },
      { op: "increase-hit-dice", note: "All current and future Hit Dice become d12s (the printed rule sets the die to d12 regardless of the base creature's die; carried as a note because the Patch op steps dice along the ladder rather than setting a die)." },
    ],
    features: [
      {
        key: "tliz-natural-armor",
        name: "Natural Armor",
        description: "The t'liz has a natural armor bonus of +5, or the base creature's natural armor bonus, whichever is better.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-touch-attack",
        name: "Touch Attack",
        description: "If the base creature lacked a touch attack, the t'liz gains one, which carries its energy drain.",
        category: "special-attack",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-fear-aura",
        name: "Fear Aura (Su)",
        description: "Creatures of less than 5 Hit Dice within a 60-foot radius that look at the t'liz must succeed on a Will save or be affected as by a fear spell cast by a sorcerer of the t'liz's level. A creature that saves successfully is immune to that t'liz's fear aura for 24 hours.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
        dcFormula: "10 + 1/2 HD + Cha",
      },
      {
        key: "tliz-energy-drain",
        name: "Energy Drain (Su)",
        description: "A living creature hit by the t'liz's touch attack (or any of its natural weapons) gains 2 negative levels, once per round. For each negative level bestowed, the t'liz gains 5 temporary hit points (which expire at a rate of 1 per hour) and 1 point that functions like a defiler point for powering its defiling magic.",
        category: "special-attack",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-defiling",
        name: "Spells and Defiling",
        description: "A t'liz casts any spells it could cast in life. It keeps its defiler score and holds no defiler points, but it powers defiling magic by spending negative levels it has bestowed within the last week, one for one, losing 5 temporary hit points per level spent; vegetation is ashed around it as with normal defiling (see reference.md).",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-rebuke-undead",
        name: "Rebuke Undead (Su)",
        description: "A t'liz can rebuke or command undead as a cleric of a level equal to its Hit Dice.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-spawn",
        name: "Spawn (Su)",
        description: "A humanoid slain by the t'liz's energy drain rises as a spectre 1d4 days after death.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-turn-resistance",
        name: "Turn Resistance (Ex)",
        description: "A t'liz has +4 turn resistance.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-damage-reduction",
        name: "Damage Reduction (Su)",
        description: "A t'liz has damage reduction 10/bludgeoning and magic. Its natural weapons are treated as magic weapons for the purpose of overcoming damage reduction.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-immunities",
        name: "Immunities (Ex)",
        description: "A t'liz is immune to electricity, to polymorph effects (though it can still use polymorph effects on itself), and to mind-affecting attacks, in addition to its undead immunities.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "tliz-skills",
        name: "Skills",
        description: "A t'liz gains a +8 racial bonus on Intimidate, Listen, and Move Silently checks.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
    ],
  },
  {
    id: "fleshvigor",
    name: "Fleshvigor",
    ruleset: "core",
    timing: "acquired",
    summary: "A corporeal undead (other than a skeleton) driven to devour the flesh of the dead: natural armor +2, a bite attack, cannibalistic healing that also grants fast healing, Strength +2, and Weapon Focus (bite) as a bonus feat. Challenge Rating: +1. Level Adjustment: +1. The APOC undead house rules are NOT baked into this record (see SCREENING.md).",
    source: DM315,
    sourceUrl: DM315_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      { allowedBaseTypes: ["Undead"], note: "Acquired template; can be added to any non-skeletal corporeal undead." },
    ],
    abilityModifiers: { str: 2 },
    patches: [],
    features: [
      {
        key: "fleshvigor-natural-armor",
        name: "Natural Armor",
        description: "The fleshvigor creature's natural armor bonus improves by +2. It retains all the base creature's attacks and gains a bite attack if it did not already have one.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "fleshvigor-bite",
        name: "Bite",
        description: "Bite damage by size: Fine 1, Diminutive 1d2, Tiny 1d3, Small 1d4, Medium 1d6, Large 1d8, Huge 2d6, Gargantuan 2d8, Colossal 4d6. (The magazine's bite-damage table is largely lost in the OCR; these are the standard natural-attack values — see MANIFEST.md.)",
        category: "special-attack",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "fleshvigor-cannibalistic-healing",
        name: "Cannibalistic Healing (Su)",
        description: "As a full-round action, a fleshvigor creature can devour the flesh of a dead creature two or more sizes smaller than itself, leaving only bones; a creature one size smaller takes 5 rounds to devour, and one of the same size a full minute. On finishing, the fleshvigor heals 5 hit points per racial Hit Die of the consumed creature (class levels do not count; creatures of less than 1 HD heal only 1 hit point), up to its normal hit point total, and gains fast healing 1 for 5 minutes afterward. It cannot eat a larger creature or gain healing from one. (The eating itself is an extraordinary ability; the healing is supernatural.) Unintelligent fleshvigor creatures automatically fall upon and devour dead bodies nearby as soon as combat ends. A creature consumed by a spawn-creating undead with this template will not rise as spawn (not enough material remains) and cannot be raised (the body is not whole enough); resurrection and greater life-restoring magic work normally. Fleshvigor undead that create spawn create fleshvigor spawn.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "fleshvigor-weapon-focus",
        name: "Weapon Focus (Bite)",
        description: "The fleshvigor creature gains Weapon Focus (bite) as a bonus feat.",
        category: "feat",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
    ],
  },
  {
    id: "afflicted",
    name: "Afflicted",
    ruleset: "core",
    timing: "acquired",
    summary: "A creature overtaken by the Red Curse of the Savage Coast after at least a day without cinnabryl's protection: its fastest movement mode slows by 10 feet, natural armor +1, it gains an additional legacy (without ability drain), and it becomes immune to further effects of the Red Curse, at the cost of Dexterity −2, Intelligence −2, and Charisma −2. The Red Curse system and the Legacies table are in reference.md. Challenge Rating and Level Adjustment are not printed in the article and are carried as +0/+0 per the sample creature — see MANIFEST.md.",
    source: DM315,
    sourceUrl: DM315_PATH,
    crModifier: 0,
    levelAdjustment: 0,
    prerequisites: [
      { note: "Acquired template; can be added to any living, corporeal creature with an Intelligence score of 3 or more that already has the Red Curse and has been unprotected by cinnabryl for at least 24 hours." },
    ],
    abilityModifiers: { dex: -2, int: -2, cha: -2 },
    patches: [],
    features: [
      {
        key: "afflicted-speed",
        name: "Speed",
        description: "The afflicted creature's highest base speed (land, fly, swim, climb, or burrow) is reduced by 10 feet.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "afflicted-natural-armor",
        name: "Natural Armor",
        description: "The afflicted creature's natural armor bonus improves by +1.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "afflicted-legacy",
        name: "Legacy (Su)",
        description: "The afflicted creature keeps the legacies of the base creature and gains one additional randomly generated legacy (roll on the Legacies table in reference.md); it suffers no ability drain for the additional legacy.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "afflicted-red-curse-immunity",
        name: "Red Curse Immunity (Ex)",
        description: "The afflicted creature is immune to any further effects of the Red Curse.",
        category: "special-quality",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
      {
        key: "afflicted-inheritor-losses",
        name: "Doubled Losses (Inheritor)",
        description: "If the afflicted creature has the Inheritor feat, the template's ability losses are doubled (Dexterity −4, Intelligence −4, Charisma −4). Ability losses from this template never reduce a score below 1. The creature keeps the base creature's feats, but it cannot use feats it no longer qualifies for.",
        category: "trait",
        source: DM315,
        sourceUrl: DM315_PATH,
      },
    ],
  },
];
