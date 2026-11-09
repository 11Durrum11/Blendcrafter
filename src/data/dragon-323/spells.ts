// Dragon Magazine #323 (September 2004) — spells.
// Transcribed from the magazine text on archive.org
// (DragonMagazine323_djvu.txt) and verified against the page
// images (magazine pp. 65–66, 70, 72, 79–80), which govern
// wherever the OCR layer garbles numbers.
//
// Fifteen spells stage, from three articles:
//   * "Spellcraft: Force Spells" by C. Wesley Clough (pp. 78–80)
//     prints seven: CHAIN MISSILE, EMERALD PLANES, FORCE CHEST,
//     FORCE RAM, MAGE ARMOR MASS, SHARD STORM, and TENSER'S
//     FLOATING DISK GREATER. Five of the seven also appear in the
//     Spell Compendium, whose versions the catalog already holds
//     (fan-index records in spells/spell-compendium-*.ts), and
//     every reprint differs from the magazine version — Chain
//     Missile SpC Sor/Wiz 3 vs. magazine 4; Force Chest SpC
//     Sor/Wiz 4 and extradimensional storage vs. magazine
//     Sor/Wiz 5 and a physical box; Mage Armor Mass SpC Sor/Wiz 3
//     vs. magazine Sor/Wiz 5; Shard Storm redesigned in SpC as
//     raining piercing crystal vs. the magazine's fixed-point
//     force bursts; Floating Disk Greater redesigned in SpC as a
//     heavy load-hauler vs. the magazine's rideable caster-tethered
//     disk. Per the issue-318/320/322 rule the magazine versions
//     stage suffixed -323 and both live. EMERALD PLANES and FORCE
//     RAM have no catalog record and stage unsuffixed.
//   * "Seven Deadly Domains" by Matt Sernett (pp. 62–67): the
//     "Sinful Spells" section (p. 65) prints four new spells —
//     RHINO'S RUSH, STICKY FINGERS, SWALLOW, and TREASURE SCENT.
//     Domain placements in the levels maps use the domain name
//     exactly as printed (the issue-312 convention). RHINO'S RUSH,
//     STICKY FINGERS, and TREASURE SCENT all have Spell
//     Compendium versions in the catalog and all differ (Rhino's
//     Rush SpC drops the Cleric/Druid lines and adds Paladin;
//     Sticky Fingers SpC is S component only with no Avarice
//     line; Treasure Scent SpC is a Divination on Bard/Druid/
//     Sorcerer-Wizard lists vs. the magazine's Transmutation on
//     Avarice/Druid), so the three stage suffixed -323. SWALLOW
//     has no catalog record and stages unsuffixed. The three
//     personal spells print no Saving Throw / Spell Resistance
//     lines; those fields read "Not printed in source."
//   * "See No Evil" by Michael Tresca (pp. 68–72) prints four:
//     DETECT ATTITUDE, DETECT GUILT, DETECT HERESY, and DETECT
//     VIOLENCE — none in the catalog; all stage unsuffixed.
//     Detect Heresy's stat block (Clr 3, Pal 2) agrees with the
//     article's "Detecting Spells" sidebar (3rd-level cleric,
//     2nd-level paladin); both were verified on the page image.
//
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

import type { SpellDefinition } from "@/engine/types";

const DM323_FORCE = "Dragon Magazine #323 — Spellcraft: Force Spells";
const DM323_SINFUL = "Dragon Magazine #323 — Seven Deadly Domains (Sinful Spells)";
const DM323_EVIL = "Dragon Magazine #323 — See No Evil";
const URL323 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine323_djvu.txt";

export const DRAGON_323_SPELLS: SpellDefinition[] = [
  // ---- Spellcraft: Force Spells (pp. 78–80) ----
  {
    id: "chain-missile-323",
    name: "Chain Missile",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Force"],
    levels: { "Sorcerer/Wizard": 4 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Long (400 ft. + 40 ft./level)",
    targetOrArea:
      "One creature, plus another creature/2 levels (each of which must be within 30 ft. of the primary target)",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "Yes",
    summary:
      "Missiles of magical energy dart from your fingertips and unerringly strike a creature, then spring to other targets. Each missile deals 1d4+1 points of force damage. One missile strikes the primary target per two caster levels, to a maximum of 10 missiles (dealing 10d4+10 points of damage). After the missiles strike, they ricochet to a number of secondary targets up to the number of missiles created; each secondary target takes 1d4+1 points of damage, as if struck by a single magic missile. You choose secondary targets as you like, but they must all be within 30 feet of the primary target, and no secondary target can be struck more than once; missiles without a secondary target do not ricochet off the primary target. Spells, magic items, and abilities that protect against magic missile (such as the shield spell or a brooch of shielding) also protect against this spell — if the primary target has that protection, the spell has no effect against it but still springs to all secondary targets (a brooch of shielding loses charges equal to the missiles hitting the creature, up to 10); if spell resistance causes the spell to fail to harm the primary target, the spell fails and missiles do not ricochet. The missiles strike unerringly, even if the targets are in melee or have anything less than total cover or concealment, but the spell cannot target or damage inanimate objects. (The Spell Compendium version is Sor/Wiz 3; the magazine version is 4th level, so it stages suffixed.)",
    source: DM323_FORCE,
    sourceUrl: URL323,
  },
  {
    id: "emerald-planes",
    name: "Emerald Planes",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Force"],
    levels: { "Sorcerer/Wizard": 2 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "Effect: One 5-foot square force plane/2 levels",
    duration: "1 min./level",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You create one or more flat, translucent green 5-foot-square, 1-inch-thick fields of force — one emerald plane per two caster levels. An emerald plane cannot move, is immune to damage of all kinds, and is unaffected by most spells, but a disintegrate spell, a rod of cancellation, or a sphere of annihilation destroys whichever plane it touches, while Mordenkainen's disjunction or dispel magic dispels all the planes created by a single casting. Breath weapons and spells cannot pass through an emerald plane in either direction, although dimension door, teleport, and similar effects can bypass the barrier; it blocks ethereal and incorporeal creatures as well as material ones, and hiding behind one provides cover. A plane cannot be conjured so that it occupies the same space as a creature or another object, and it must always be flat; planes require no anchors and can float above ground, created vertically or horizontally. Only one edge of a plane can touch another surface at the time of casting (it may touch more afterward), and all planes must be placed so no part of one is within 5 feet of any other. On the battle grid, a vertical plane can only be placed along the border of a square, stretching from intersection to intersection; a horizontal plane must be placed over a square without extending over others. All planes from one casting wink out when the duration ends. Emerald planes can be made permanent with a permanency spell (minimum caster level 10th, 1,000 XP). Material component: a pinch of powder made from a green gem.",
    source: DM323_FORCE,
    sourceUrl: URL323,
  },
  {
    id: "force-chest-323",
    name: "Force Chest",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Force"],
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "0 ft.",
    targetOrArea: "Effect: One 2-foot cube box of force",
    duration: "1 day/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "A lidded box of force appears in your hands; you can choose to make it either invisible or merely translucent. The chest has no weight worth noting. Solid walls of force form the chest's five sides and lid, and the caster and other creatures cannot open the lid except by first speaking the password (determined by the caster at the time of casting). Both objects and Tiny or smaller creatures can fit in the box; it holds enough air to allow one Tiny, two Diminutive, or four Fine creatures to breathe for 1 hour. Like a wall of force, a force chest is immune to damage of all kinds and resists dispel magic, but it is vulnerable to disintegrate and Mordenkainen's disjunction, and it can be destroyed by a sphere of annihilation or a rod of cancellation. The box is a spell effect, and Open Lock and Use Magic Device cannot open it. Material component: a 2-inch-square glass cube. (The Spell Compendium version is Sor/Wiz 4 and stores goods in an extradimensional space; the magazine version is 5th level and a physical box, so it stages suffixed.)",
    source: DM323_FORCE,
    sourceUrl: URL323,
  },
  {
    id: "force-ram",
    name: "Force Ram",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Force"],
    levels: { Druid: 2, "Sorcerer/Wizard": 2 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Effect: Ray",
    duration: "Instantaneous",
    savingThrow: "Reflex partial (see text)",
    spellResistance: "Yes",
    summary:
      "You create a field of rushing force vaguely discernible as a ram or goat. This force strikes a single target, dealing 1d6 points of damage; you must make a ranged touch attack to hit the target. The force of the blow is considerable, and a creature struck by the spell is subject to a bull rush — the ram has a Strength of 25, is considered Large, and always moves with the defender. In addition to its attack mode, force ram also has the power to open doors it strikes as if it were a character with a Strength of 25. Material component: a tuft of wool.",
    source: DM323_FORCE,
    sourceUrl: URL323,
  },
  {
    id: "mage-armor-mass-323",
    name: "Mage Armor, Mass",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Force"],
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, F",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature/level, no two of which can be more than 30 ft. apart",
    duration: "1 hour/level (D)",
    savingThrow: "Will negates (harmless)",
    spellResistance: "No (harmless)",
    summary:
      "This spell functions like mage armor, except that it affects multiple creatures — one creature per level, no two of which can be more than 30 feet apart. (The Spell Compendium version is Sor/Wiz 3; the magazine version is 5th level, so it stages suffixed.)",
    note: "The magazine prints an abbreviated stat block for this spell (level, range, and targets only), presenting it purely as mage armor affecting multiple creatures; components, casting time, duration, saving throw, and spell resistance are as mage armor.",
    source: DM323_FORCE,
    sourceUrl: URL323,
  },
  {
    id: "shard-storm-323",
    name: "Shard Storm",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Force"],
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "Effect: One or more 20-foot-radius bursts of force",
    duration: "1 round/level",
    savingThrow: "Reflex half",
    spellResistance: "Yes",
    summary:
      "Immediately upon completion of this spell, and once per round thereafter, you may cause minuscule shards of magical force to explode out in a 20-foot-radius burst from the chosen point of origin. The storm deals 3d6 points of force damage to all creatures within the radius; a successful Reflex save halves the damage. Each round, you may use a free action to cause a force shard storm — you need not cause it immediately, you can only call one storm per round, and only on your turn. The center point of the shard storm is fixed when the spell is cast and cannot be moved; there is no physical manifestation of the spell at the chosen point, although detect magic reveals a spell in effect at that location. Material component: a small shard of clear glass or crystal. (The Spell Compendium version rains piercing crystal shards over an area; the magazine version is fixed-point force bursts, so it stages suffixed.)",
    source: DM323_FORCE,
    sourceUrl: URL323,
  },
  {
    id: "tensers-floating-disk-greater-323",
    name: "Tenser's Floating Disk, Greater",
    ruleset: "core",
    school: "Evocation",
    descriptors: ["Force"],
    levels: { "Sorcerer/Wizard": 4 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Effect: 3-ft.-diameter disk of force",
    duration: "1 hour/level",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "This spell functions just like Tenser's floating disk, except that the created disk does not need to stay within 3 feet of the surface beneath it. However, the disk must remain within 15 feet of the caster at all times. The caster can concentrate (as a standard action) on the disk to make it move with a fly speed of 20 feet (perfect); this allows the caster to sit on the disk and command it to carry him about. Material component: a drop of mercury. (The Spell Compendium's Floating Disk, Greater is a redesigned heavy load-hauler; the magazine version is the rideable, caster-tethered disk, so it stages suffixed under its printed name.)",
    note: "The magazine prints an abbreviated stat block for this spell (level line and material component only), presenting it purely as a modification of Tenser's floating disk; components, casting time, range, effect, duration, saving throw, and spell resistance are as Tenser's floating disk.",
    source: DM323_FORCE,
    sourceUrl: URL323,
  },
  // ---- Seven Deadly Domains: Sinful Spells (p. 65) ----
  {
    id: "rhinos-rush-323",
    name: "Rhino's Rush",
    ruleset: "core",
    school: "Evocation",
    descriptors: [],
    levels: { Cleric: 1, Druid: 1, Ranger: 1, Wrath: 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "A violent fury consumes you, allowing you to propel yourself in a single deadly charge. Any charge attack you make before the end of the next round inflicts double damage on a successful hit. (The Spell Compendium version drops the Cleric and Druid lines and adds Paladin 1; the magazine version also carries the Wrath domain line, so it stages suffixed.)",
    source: DM323_SINFUL,
    sourceUrl: URL323,
  },
  {
    id: "sticky-fingers-323",
    name: "Sticky Fingers",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Assassin: 1, Avarice: 1, Bard: 1 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "10 min./level (D)",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "Your fingers exude a slightly viscous secretion and become more nimble. This augmentation grants you a +10 bonus on your Sleight of Hand checks. (The Spell Compendium version has an S component only and no Avarice domain line; the magazine version is V, S and an Avarice 1 spell, so it stages suffixed.)",
    source: DM323_SINFUL,
    sourceUrl: URL323,
  },
  {
    id: "swallow",
    name: "Swallow",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Teleportation",
    descriptors: [],
    levels: { Gluttony: 8, "Sorcerer/Wizard": 8 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "1 round/level; see text",
    savingThrow: "None",
    spellResistance: "Yes",
    summary:
      "You can make a touch attack to trap an opponent in a deadly extradimensional space. Touching an enemy causes a horrific visual effect as your mouth grotesquely distends, swallowing the target and banishing it to a tight, swelteringly humid extradimensional chamber (the spell's 'extradimensional gizzard') with constricting, pulpy walls. Upon being teleported to this gizzard, the victim is considered grappled and suffers 2d6 points of bludgeoning damage + 1 point/level as well as 6 points of acid damage every round for a number of rounds equal to the caster level. The victim may attempt to escape by using a light slashing or piercing weapon to deal 30 points of damage to the space's walls (the space has an AC equal to the caster level), or by making a grapple or Escape Artist check opposed by the space, which has a grapple bonus equal to double the caster level. A victim that escapes either way is expelled from the gizzard and reappears where it had been when the swallow spell was cast (or in the next nearest open space if that location is filled with a solid object). Otherwise, the target remains trapped and takes damage every round until the spell ends. If the target is killed by the spell, its body is dissolved and its possessions are expelled onto the Astral Plane.",
    source: DM323_SINFUL,
    sourceUrl: URL323,
  },
  {
    id: "treasure-scent-323",
    name: "Treasure Scent",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Avarice: 2, Druid: 3 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 hour/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "You gain the ability to smell gold and other precious materials. You can detect copper, silver, gold, platinum, and gems within 30 feet by sense of smell and differentiate between the scents of these five kinds of valuables. If such treasure is upwind, the range increases to 60 feet; if downwind, it drops to 15 feet. Strong scents, such as an open chest of treasure, can be detected at twice the ranges noted; overpowering scents, such as a dragon's hoard, can be detected at triple normal range. When you detect one of these types of valuables, the exact location of the source is not revealed — only its presence somewhere within range; you can take a move action to note the direction of the scent, and whenever you come within 5 feet of the source you can pinpoint its exact location. If you have the Track feat, you can follow the tracks of a moving creature with valuables by smell, making a Wisdom (or Survival) check to find or follow such tracks; the typical DC for a fresh trail is 10 regardless of the surface, increasing by 2 for each hour the trail is cold, and the ability otherwise follows the rules of the Track feat — creatures tracking using this spell ignore the effects of surface conditions and poor visibility. (The Spell Compendium version is a Divination on the Bard, Druid, and Sorcerer/Wizard lists; the magazine version is a Transmutation on the Avarice and Druid lists, so it stages suffixed.)",
    source: DM323_SINFUL,
    sourceUrl: URL323,
  },
  // ---- See No Evil (pp. 68–72) ----
  {
    id: "detect-attitude",
    name: "Detect Attitude",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { Bard: 1, Cleric: 1, Paladin: 1 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature",
    duration: "Concentration, up to 1 round/level",
    savingThrow: "None",
    spellResistance: "Yes",
    summary:
      "You sense the target's attitude toward you (as described under the Diplomacy skill) by seeing a faintly glowing colored aura surrounding it, visible only to you: friendly is white, indifferent is blue, unfriendly is black, and hostile is red. You can determine how the target's attitude changes over time, allowing you to know the effectiveness of attempts to change the target's attitude. If you cast this spell on someone who has not met you, that person's aura always appears blue (indifferent).",
    source: DM323_EVIL,
    sourceUrl: URL323,
  },
  {
    id: "detect-guilt",
    name: "Detect Guilt",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { Cleric: 1, Paladin: 1 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You sense the presence of guilt in the target creature, and its severity by aura power: faint (has occasional pangs of guilt), moderate (stomach-churning guilt; worries about what happened), strong (loses sleep over what happened; obsesses about it), or overwhelming (wants to take rash actions to avoid feeling the guilt). This spell in no way reveals why the target feels guilty, only that it does; the level of guilt a creature feels has little to do with whatever act causes it. Good creatures typically feel greater amounts of guilt than neutral creatures, who in turn usually feel more guilt than evil creatures, but these generalizations cannot guarantee how a creature reacts to its own actions. A creature must have at least 3 Intelligence, 1 Wisdom, and 1 Charisma in order to feel guilt; the spell fails if cast on a creature without those minimum ability scores.",
    source: DM323_EVIL,
    sourceUrl: URL323,
  },
  {
    id: "detect-heresy",
    name: "Detect Heresy",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { Cleric: 3, Paladin: 2 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature",
    duration: "Concentration, up to 1 round/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "Prized by inquisitors and martial religious orders, this spell reveals past heretical actions and the current heretical thoughts of the target. You sense the target's heretical thoughts and past actions by seeing a faintly glowing aura surrounding it, visible only to you; the strength of the aura shows the level of heresy (faint for tangential heresy, moderate for contrarian heresy, strong for fundamental heresy, overwhelming for apostasy/blasphemy). You detect current heretical thoughts in the target as well as all consciously made acts of heresy performed within the past 1 day per caster level; the spell cannot detect heretical acts that occurred prior to that limit, regardless of their intensity. You define what constitutes heresy by your own belief structure, even if the majority of faithful disagree. This spell only affects people of your own faith, those who say they follow your faith, and those who show aspects of your faith (wearing your deity's holy symbol, or attending a religious service, for example); any action or thought that opposes your particular definition of your religion's dogma or teachings counts as heresy, while a character of a different faith doesn't show as heretical (a character pretending to be a member of your religion shows as committing apostasy/blasphemy). By concentrating you learn more: 1st round — presence of heretical acts in the subject's history or current heretical thoughts; 2nd round — intensity of the subject's current heretical thoughts; 3rd round — number and intensity of past heretical acts performed by the subject.",
    source: DM323_EVIL,
    sourceUrl: URL323,
  },
  {
    id: "detect-violence",
    name: "Detect Violence",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { Cleric: 1, Paladin: 1, Ranger: 1 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "60 ft.",
    targetOrArea: "Cone-shaped emanation",
    duration: "Concentration, up to 1 round/level",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "When casting this spell, you perceive the residual aura caused by acts of violence committed in the area of effect. The spell detects violence committed within the past 1 month per caster level; it cannot detect violent acts that occurred prior to that limit, regardless of their intensity. Violence does not necessarily end in death, but the more violent the act the stronger the psychic residue left behind. This spell does not detect the capacity to cause violence — it only detects violence committed against a living creature — and it does not specify why the violence was committed, nor the alignment of the assailant or of the victim. By concentrating, you can learn more details of specific violent acts: 1st round — presence of violence in the area within the spell's time limit; 2nd round — number and location of violent acts performed in the area; 3rd round — strength of aura of violent acts performed; 4th and subsequent rounds — number of days and hours since the most recent violent act, then of earlier violent acts in chronological progression from second most recent backward, with one act indicated per round. Residual aura strength is gauged by the act's effects: faint (10 hp or less of nonlethal damage, 2 hp or less of lethal damage, or non-damaging effects such as blinding, deafening, pinning, and stunning), moderate (11–30 hp nonlethal, 3–10 hp lethal, or ability damage and paralyzing effects), strong (31–50 hp nonlethal, 11–30 hp lethal, or ability drain and unsuccessful death effects), overwhelming (51 hp or more nonlethal, 31 hp or more lethal, or a successful death effect); if the amount of damage dealt resulted in a creature's death, the residual aura power automatically shows as the next most powerful level (up to a maximum of overwhelming).",
    source: DM323_EVIL,
    sourceUrl: URL323,
  },
];
