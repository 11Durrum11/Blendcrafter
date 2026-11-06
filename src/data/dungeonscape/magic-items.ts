import type { MagicItemDefinition } from "@/engine/types";

// Dungeonscape (WotC, D&D 3.5) — Chapter 2: Tools of
// the Trade, magic items (printed pp. 39-42),
// transcribed from Shaun's own copy: 3 armor special
// abilities, 1 weapon special ability, and 5 wondrous
// items, all in the book's Description / Activation /
// Effect / Aura-Caster Level / Construction format.
// The special abilities are modeled as Magic Items
// records with category "armor" or "weapon", following
// the Planar Handbook pack's handling of special
// abilities. Summaries are short mechanical paraphrases
// in our own words, carrying the printed aura, caster
// level, creation prerequisites, and creation cost where
// the entry gives one; no book prose is reproduced.
//
// The chapter's "Tried and True Essentials" sidebar
// (pp. 37-39) discusses Dungeon Master's Guide items
// only; it introduces no new items and is noted in
// reference.md in this staging folder. One print quirk:
// the grasping hook's aura is printed as "Weak
// transmutation," where the standard aura strength term
// is "Faint"; the summary gives the standard term and
// notes the printed word.

const DS = "Dungeonscape";
const DS_PATH = "workspace/library-staging/books/dungeonscape.pdf";

export const DUNGEONSCAPE_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Armor special abilities (p. 39) ----
  {
    id: "durable-armor",
    name: "Durable",
    ruleset: "core",
    category: "armor",
    cost: "500 gp",
    summary: "Armor special ability; only metal armors can have it. The armor has immunity to special attacks that would cause it to dissolve or rust, including rusting grasp and the touch of black puddings, gray oozes, and rust monsters, and it takes no damage from green slime or from acid — though it does not extend this protection to the wearer. The effect is automatic; no action on the wearer's part is required. Moderate abjuration; CL 7th; Craft Magic Arms and Armor, protection from energy; Price 500 gp.",
    source: DS,
    sourceUrl: DS_PATH,
  },
  {
    id: "restful-armor",
    name: "Restful",
    ruleset: "core",
    category: "armor",
    cost: "500 gp",
    summary: "Armor special ability; armor of any type can have it, though medium and heavy armors are the most common choices. Sleeping in restful armor does not cause you to become fatigued, even if the armor is medium or heavy, and you take only a -5 penalty on Listen checks while sleeping in it; if you succeed on a Listen check while sleeping, you can choose to wake up or remain asleep. The ability activates when you fall asleep wearing the armor. Faint abjuration; CL 5th; Craft Magic Arms and Armor, sleep, lullaby; Price 500 gp.",
    source: DS,
    sourceUrl: DS_PATH,
  },
  {
    id: "swarmguard-armor",
    name: "Swarmguard",
    ruleset: "core",
    category: "armor",
    cost: "+1 bonus",
    summary: "Armor special ability. You gain damage reduction 5/- against the swarm attack ability of any creature of the swarm subtype, and a bonus on Fortitude saving throws and Concentration checks to resist a swarm's distraction ability equal to the armor bonus of the armor you are wearing. The ability activates automatically when a creature of the swarm subtype enters your space. Moderate abjuration; CL 7th; Craft Magic Arms and Armor, repel vermin; Price +1 bonus.",
    source: DS,
    sourceUrl: DS_PATH,
  },
  // ---- Weapon special abilities (p. 40) ----
  {
    id: "swarmstrike-weapon",
    name: "Swarmstrike",
    ruleset: "core",
    category: "weapon",
    cost: "+1 bonus",
    summary: "Weapon special ability. When used to attack creatures of the swarm subtype, the weapon's enhancement bonus increases by 2, and the weapon deals lethal damage against a creature of the swarm subtype regardless of the size of the component creatures or the type of damage dealt by the weapon. The ability activates automatically when you attack a creature of the swarm subtype. Moderate abjuration; CL 7th; Craft Magic Arms and Armor, repel vermin; Price +1 bonus.",
    source: DS,
    sourceUrl: DS_PATH,
  },
  // ---- Wondrous items (pp. 40-42) ----
  {
    id: "blankets-of-security",
    name: "Blankets of Security",
    ruleset: "core",
    category: "wondrous-slotless",
    cost: "2,200 gp (set of 5)",
    summary: "Five matching wool blankets embroidered with sigils. You fall asleep under one as under any normal blanket; when a creature within 100 feet speaks the set's command word (a free action), each blanket automatically wakes any creature sleeping under it, even if the sleeping creature is under a magical sleep effect — one uttered phrase awakens five people. Sets of more than five blankets exist for larger parties. Faint abjuration; CL 3rd; Craft Wondrous Item, alarm; Price 2,200 gp (set of 5) + 440 gp per each additional blanket. Weight 15 lb. (set of 5) + 3 lb. per each additional blanket.",
    source: DS,
    sourceUrl: DS_PATH,
  },
  {
    id: "boots-of-sidestepping",
    name: "Boots of Sidestepping",
    ruleset: "core",
    category: "wondrous-feet",
    cost: "3,000 gp",
    summary: "Boots fashioned from the tanned hide of displacer beasts. While wearing them, you can move 5 feet as an immediate action whenever you are allowed to make a Reflex save against a spell, spell-like ability, or supernatural effect; you move before making the save, and if after moving you stand outside the attack's area, you avoid it completely and no longer need to attempt the save. This movement does not provoke attacks of opportunity. The boots activate automatically when you are exposed to an attack that allows a Reflex save. Strong transmutation; CL 12th; Craft Wondrous Item, haste; Price 3,000 gp. Weight 1 lb.",
    source: DS,
    sourceUrl: DS_PATH,
  },
  {
    id: "clasp-of-safeguarding",
    name: "Clasp of Safeguarding",
    ruleset: "core",
    category: "wondrous-slotless",
    cost: "1,500 gp",
    summary: "A tiny decorative gold clasp, sculpted as a tortoise, that must be clipped onto one of your exposed magic items to be effective. It activates automatically whenever you roll a natural 1 on a saving throw against a spell, trap, or other effect that could affect any of your items (such as a fireball or a dragon's breath, but not an effect that cannot affect objects, such as charm person): none of your exposed items, magical or otherwise, is harmed by that effect. A clasp of safeguarding works only once; afterward it loses its magic and becomes a mundane piece of jewelry. Faint abjuration; CL 5th; Craft Wondrous Item, protection from energy; Price 1,500 gp. Weight 1/3 lb.",
    source: DS,
    sourceUrl: DS_PATH,
  },
  {
    id: "dancing-lantern",
    name: "Dancing Lantern",
    ruleset: "core",
    category: "wondrous-slotless",
    cost: "2,000 gp",
    summary: "A mithral bullseye lantern with interior mirrors of polished silver. It provides magical light as a standard bullseye lantern but consumes no oil, and it levitates on command: one command word lights or extinguishes it, and a second causes it to float or land gently. While it floats it hovers within your reach, or you can direct it verbally as a free action while it is within 1,000 feet of you; on any of your turns it can fly up to 90 feet with perfect maneuverability and rotate to shine its cone of light in any direction, and it will not stray farther than 1,000 feet from you (if you move farther away, it attempts to move to within 1,000 feet on its next turn). A flying lantern is Tiny, with AC 12, 30 hit points, and hardness 10. Variant: some dancing lanterns are intelligent items (Price 10,300 gp) that can fly on their own, travel more than 1,000 feet from their owner, and decide where to shine their light; a typical intelligent dancing lantern has Int 14, Wis 10, Cha 14, Ego 7, vision and hearing to 120 feet, speaks Common and two other languages, can communicate telepathically with its owner within 1,000 feet, has 10 ranks in Search, and can use faerie fire three times per day as a spell-like ability. Faint evocation and transmutation, CL 5th (standard lantern), or strong transmutation and evocation, CL 15th (intelligent lantern); Craft Wondrous Item, continual flame, levitate; Price 2,000 gp (standard) or 10,300 gp (intelligent). Weight 3 lb.",
    source: DS,
    sourceUrl: DS_PATH,
  },
  {
    id: "grasping-hook",
    name: "Grasping Hook",
    ruleset: "core",
    category: "wondrous-slotless",
    cost: "500 gp",
    summary: "An animated mithral grappling hook sculpted to resemble a dragon's claw. Tied to silk rope, it can be thrown as a standard mithral grappling hook; or you can speak its command word (a free action) as you throw it, causing it to animate, spring to life, and seek the nearest secure object it can grasp, granting a +6 competence bonus on your Use Rope check to seat it properly. A grasping hook has a Strength of 25 and can hold 1,600 pounds when grasping a secure object or terrain feature. Speaking the command word a second time causes it to release its grasp immediately and resume its dormant form. Faint transmutation (printed as 'Weak transmutation'); CL 3rd; Craft Wondrous Item, bull's strength; Price 500 gp. Weight 2 lb.",
    source: DS,
    sourceUrl: DS_PATH,
  },
];
