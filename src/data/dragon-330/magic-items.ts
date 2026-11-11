// Dragon Magazine #330 (April 2005) — magic item draft: 12 records.
// "Bazaar of the Bizarre: Tools of the Assassin" (Oliver Diaz & Robert J.
// Hahn), pp. 66-68 — EIGHT items plus TWO new weapon special abilities
// printed in the article's sidebar. The quiet dagger prints in three
// ranked forms (apprentice, journeyman, master) with separate prices and
// caster levels, so it stages as three records — ten item records plus
// the two special abilities, twelve in all (the program survey estimated
// ~8 items for the article; see MANIFEST).
// The special abilities stage in the magic barrel with category
// "weapon-special-ability" and a bonus-equivalent cost, per the live
// Magic Item Compendium weapon-properties convention. The wraithblade is
// a printed minor artifact and stages with category "artifact" and no
// price, per the issue-328/329 artifact precedent; its artifact grade is
// carried in the summary.
// Every price, aura, CL, and weight line was verified against rendered
// page images (magazine pp. 66-68); the image governs over the OCR
// stream.
// ⚠️ APOC NOTE — see SCREENING.md: the ring of stalking's target must be
// on the same plane as the wearer (flavor-bound in APOC, where planar
// travel is severed, but the mechanic works unchanged within the world);
// the wraithblade binds slain souls as wraiths under the wielder's
// control — ordinary necromancy, staged as printed. Nothing here
// summons, calls, or moves between planes.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #330 — Bazaar of the Bizarre: Tools of the Assassin (Oliver Diaz & Robert J. Hahn), pp. 66-68";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_330_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "bolts-of-arcane-penetration",
    name: "Bolts of Arcane Penetration",
    category: "ammunition",
    cost: "650 gp",
    summary:
      "Ammunition — bolts of arcane penetration are +1 phasing crossbow bolts that ignore deflection bonuses. The target of a bolt of arcane penetration does not benefit from any deflection bonus it might have. In addition, the target loses its cover, shield, or armor bonus, per the phasing special ability. Faint transmutation; CL 5th; Craft Magic Arms and Armor, blink; Weight —.",
  }),
  M({
    id: "mask-of-the-reaper",
    name: "Mask of the Reaper",
    cost: "30,000 gp",
    summary:
      "Wondrous item (face) — a mask of the reaper appears as a grey knit mask with two eyeholes. When worn, a mask of the reaper grants a gaze attack with a range of 30 feet. Any creature within range must make a DC 14 Will save or see in the wearer a manifestation of its worst fear, affecting the creature as the cause fear spell. The mask cannot affect a creature more than once in a 24-hour period, whether the target fails its save or not. Moderate illusion; CL 7th; Craft Wondrous Item, cause fear; Weight —.",
  }),
  M({
    id: "quiet-dagger-apprentice",
    name: "Quiet Dagger (Apprentice)",
    category: "weapon",
    cost: "10,800 gp",
    summary:
      "Specific weapon — the quiet daggers are the badge of the Guild of the Silent Scream: an assassin receives the apprentice dagger at 1st level in the assassin prestige class, the journeyman's at 5th, and the master's at 9th, and a dagger's shape and design reveal its wielder's rank, skills, specialties, and number of successful kills. An apprentice's quiet dagger is a +1 silent strike dagger that grants its wielder a +5 competence bonus on Move Silently checks when held. Faint illusion; CL 3rd; Craft Magic Arms and Armor, silence; Weight 1 lb.",
  }),
  M({
    id: "quiet-dagger-journeyman",
    name: "Quiet Dagger (Journeyman)",
    category: "weapon",
    cost: "25,300 gp",
    summary:
      "Specific weapon — a journeyman's quiet dagger is a +2 silent strike dagger that grants its wielder a +5 competence bonus on Move Silently checks when held. It also functions as a lesser silent metamagic rod. Moderate illusion; CL 6th; Craft Magic Arms and Armor, silence; Weight 1 lb.",
  }),
  M({
    id: "quiet-dagger-master",
    name: "Quiet Dagger (Master)",
    category: "weapon",
    cost: "59,300 gp",
    summary:
      "Specific weapon — a master's quiet dagger is a +3 silent strike dagger that grants its wielder a +5 competence bonus on Move Silently checks when held, functions as a lesser silent metamagic rod, and grants its wielder SR 14. Moderate illusion; CL 9th; Craft Magic Arms and Armor, silence, dispel magic (master dagger only); Weight 1 lb.",
  }),
  M({
    id: "requiem-jar",
    name: "Requiem Jar",
    cost: "3,300 gp",
    summary:
      "Wondrous item — this tonic of black sludge is typically encased in a barrel-shaped bronze receptacle, around which hangs a chain with a blank plaque. To use this tonic, it must be poured into a corpse's mouth. From there it magically works its way through the body, causing the corpse to deteriorate at an incredible rate. In 1 round all remnants of the corpse's flesh and blood dissolve into dust. In 2 rounds the creature's bones or exoskeleton completely crumble and in 3 rounds the resulting dust magically whirls up and flies into the empty container formerly housing the tonic. On the previously blank plaque the creature's name magically appears. This magical process ensures three things: the creature's remains are obfuscated from searching parties, a raise dead or resurrection spell cannot revive the dead creature, and the assassin has portable proof of the victim's demise. The remains in the jar are sufficient for a resurrection spell should they be emptied out. Living creatures that drink the fluid within a requiem jar are not affected by its magic, but are sickened for 1 hour. Faint evocation; CL 3rd; Craft Wondrous Item, disintegrate; Weight —.",
  }),
  M({
    id: "ring-of-stalking",
    name: "Ring of Stalking",
    category: "ring",
    cost: "56,000 gp",
    summary:
      "Ring — this delicate silver band has a single black diamond set on its surface. To activate the ring, the wearer must speak a command word and then the name of a creature known to the user into the stone. If the wearer concentrates on the creature and holds his hand aloft, the ring's gem glows when held in the direction of the named creature. There is no limit to the ring's range except that the target must be on the same plane as the wearer. When the wearer is within 120 feet of the target the ring glows continuously and grows warm to the touch; at that point, the proximity of the target is too close to reveal its exact direction. Changing the ring's target is a full-round action. Strong divination; CL 13th; Forge Ring, greater scrying, locate creature; Weight —.",
  }),
  M({
    id: "rod-of-deadly-function",
    name: "Rod of Deadly Function",
    category: "rod",
    cost: "60,000 gp",
    summary:
      "Rod — a dark variation of the rod of lordly might, this slim black rod has a series of studs along its base, and its numerous magical and mundane functions are activated either by concentrating or by pressing one of the studs. The following spell-like functions of the rod can each be used once per day: deep slumber upon touch, if the wielder so commands (Will DC 14 negates) — the wielder must choose to use this power and then succeed on a melee touch attack to activate it, and if the attack fails the effect is lost; true strike; and deal 2d4 hit points of damage to an opponent on a successful touch attack (Will DC 17 half) and cure the wielder of a like amount of damage — the wielder must choose to use this power before attacking, and if the attack fails the effect is lost. The following weapon functions of the rod have no limit on the number of times they can be employed: in its normal form, the rod can be used as a +1 light mace; pressing button 1 turns the rod into a +1 keen rapier; pressing button 2 turns the rod into a +2 returning throwing axe; pressing button 3 causes a steel-chain whip to form that acts as a +3 whip dagger; pressing button 4 causes the rod to extend various lockpicking tools which function as a set of masterwork lockpicks (picks, files, manual drills, spikes, levers, and wrenches). Strong divination, enchantment, evocation, and transmutation; CL 18th; Craft Rod, Craft Magic Arms and Armor, deep slumber, true strike; Weight 5 lb.",
  }),
  M({
    id: "goggles-of-scrutiny",
    name: "Goggles of Scrutiny",
    cost: "12,000 gp",
    summary:
      "Wondrous item (face) — goggles of scrutiny grant their wearer a +2 bonus on all Search and Spot checks. In addition, any creature with the death attack special ability need only study a potential victim for 2 rounds instead of 3. Strong divination; CL 12th; Craft Wondrous Item, clairaudience/clairvoyance; Weight —.",
  }),
  M({
    id: "wraithblade",
    name: "Wraithblade",
    category: "artifact",
    cost: "—",
    summary:
      "Minor artifact — a slender, wicked dagger seemingly carved from a single unclean bone shard, created (legend says) by the infamous assassin Szeptem Mor. The wraithblade is a +4 ghost touch dagger with other, more harrowing powers. Any living target struck by the wraithblade must succeed at a DC 16 Fortitude save or suffer 1d6 points of Constitution damage. The soul of any creature killed by the wraithblade becomes a thrall of the blade's wielder and serves him as a wraith. It takes 1 minute (10 rounds) for the soul to manifest as a wraith under the absolute control of the wraithblade's wielder. A creature whose soul is made into a wraith in this manner cannot be brought back from the dead until the wraith is destroyed. The number of wraiths created in this way can never exceed one plus the user's Charisma modifier (minimum of one wraith). If the maximum number of wraiths already exist and the wraithblade claims another life, no new wraith is formed. If the wielder loses control of the wraithblade before the entire minute has passed, the wraith still forms but it immediately attacks the wraithblade's wielder. If the wielder can control undead through a class ability (such as an evil cleric's ability to command undead) the wraiths created by the wraithblade do not count against the character's normal limit of undead he may control. Whenever the wraithblade changes hands, existing wraiths dissipate and their souls find rest. Overwhelming necromancy; CL 21st; Weight 1 lb.",
  }),
  M({
    id: "phasing",
    name: "Phasing",
    category: "weapon-special-ability",
    cost: "+2 bonus",
    summary:
      "Weapon property (ammunition only) — phasing ammunition allows the wielder to ignore a single solid obstacle no thicker than 5 feet. A phasing arrow can be shot through a glass window, stone rampart, or even an adamantine breastplate. When using phasing ammunition ignore cover, then shield, then armor of the target, in that order (you only get one). Once one form of bonus has been ignored, the rest apply normally. Natural armor, deflection, and dodge bonuses remain unaffected by phasing ammunition. Faint transmutation; CL 5th; Craft Magic Arms and Armor, blink.",
  }),
  M({
    id: "silent-strike",
    name: "Silent Strike",
    category: "weapon-special-ability",
    cost: "+1 bonus",
    summary:
      "Weapon property (weapon) — any creature struck by a silent strike weapon must make a DC 15 Will save or be silenced, as per the spell silence, for 4 rounds. Multiple hits from a silent strike weapon reset the duration of the silence but do not otherwise stack. Faint illusion; CL 3rd; Craft Magic Arms and Armor, silence.",
  }),
];
