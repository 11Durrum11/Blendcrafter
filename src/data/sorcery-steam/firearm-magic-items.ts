/**
 * Sorcery & Steam firearm magic items pack: the firearm-specific
 * magic of Shaun's compiled firearms document
 * (workspace/user/files/fire_arms.docx, uploaded 2026-10-27), whose
 * magic sections reprint Pathfinder Ultimate Combat material.
 * Batch 1.5 of the "everything" program; see REBUILD-NOTES.md.
 *
 * Modeling notes: the document's weapon special abilities (Lucky,
 * Reliable, and their greater versions) use the core magic-item
 * pack's "armor-or-weapon-special-ability" category, and the Dry
 * Load ammunition ability is filed alongside them with its
 * ammunition-only scope stated in the summary; the two specific
 * magic bullets form an "ammunition" category. Aura and caster
 * level are folded into each summary. Prices are transcribed as
 * printed (the abilities are priced as enhancement-bonus
 * equivalents, "+1 bonus" / "+3 bonus").
 */
import type { MagicItemDefinition } from "@/engine/types";

export const SORCERY_STEAM_FIREARM_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    "id": "dry-load-ammunition-special-ability",
    "name": "Dry Load Ammunition Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "30 gp per cartridge or 1,500 gp for 50 cartridges",
    "summary": "Ammunition special ability (faint abjuration, CL 3rd), applied to alchemical or metal firearm cartridges. Such a cartridge can be loaded and fired underwater or in other airless environments: it is protected as it loads and leaves a bubble of air around the firearm lasting 3 minutes or until fired. Underwater shots still take the −2 attack penalty per 5 ft. of water, plus normal range penalties; an exploding misfire occurs normally.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "burrowing-bullet",
    "name": "Burrowing Bullet",
    "category": "ammunition",
    "cost": "1,722 gp (burrowing bullet) or 3,447 gp (greater burrowing bullet)",
    "summary": "+1 firearm bullet (moderate necromancy, CL 9th; greater version CL 13th). Deals normal damage, then burrows into a living creature's flesh, staggering it for 1d3 rounds (greater: 1d3+2 rounds) or until removed with a Heal check (DC 15; greater DC 20) made as a standard action.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tracer-bullet",
    "name": "Tracer Bullet",
    "category": "ammunition",
    "cost": "100 gp",
    "summary": "+1 firearm bullet (faint evocation, CL 2nd). Deals no damage; instead it outlines the target with a pale glow (a faerie fire effect) and imposes a −2 penalty to the target's AC against ranged attacks for 1d4 rounds.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "lucky-firearm-special-ability",
    "name": "Lucky Firearm Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon special ability for one-handed or two-handed firearms (moderate transmutation, CL 8th). The firearm holds its own reservoir of 1 grit point, refreshed daily; the wielder can spend it to reroll an attack from the firearm that would result in a misfire, and must keep the second result.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "lucky-greater-firearm-special-ability",
    "name": "Lucky, Greater Firearm Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Weapon special ability for one-handed or two-handed firearms (moderate enchantment, CL 12th). As the lucky ability, but the firearm's reservoir holds 3 grit points. A firearm cannot have both lucky and greater lucky.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "reliable-firearm-special-ability",
    "name": "Reliable Firearm Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon special ability for firearms (moderate transmutation, CL 8th). Reduces the firearm's misfire value by 1 (minimum 0), applied after any increases (such as from the broken condition).",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "reliable-greater-firearm-special-ability",
    "name": "Reliable, Greater Firearm Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Weapon special ability for one-handed or two-handed firearms (moderate enchantment, CL 12th). As the reliable ability, but reduces the firearm's misfire value by 4 (minimum 0). A firearm cannot have both reliable and greater reliable.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "amulet-of-bullet-protection",
    "name": "Amulet of Bullet Protection",
    "category": "wondrous",
    "cost": "1,500 gp (+1), 6,000 gp (+2), 13,500 gp (+3), 24,000 gp (+4), or 37,500 gp (+5)",
    "summary": "Neck-slot amulet (faint abjuration, CL 5th), often shaped from spent bullets. Grants the wearer a luck bonus to AC (by the amulet's version) against firearm attacks that target touch AC.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "dry-load-powder-horn",
    "name": "Dry Load Powder Horn",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Wondrous item (faint conjuration, CL 3rd), weight 1 lb. Holds 20 doses of black powder; a firearm loaded with powder directly from the horn is wrapped in a pocket of air, so the shot can be fired underwater or in an airless area — the pocket lasts 10 minutes or until the firearm is fired. Underwater shots still take the −2 attack penalty per 5 ft. of water traveled.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "far-reaching-sight",
    "name": "Far-Reaching Sight",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "Wondrous sight (faint divination, CL 3rd), weight 1 lb., attached to a single two-handed firearm (removing it is a full-round action). The wielder can spend a full-round action to make a single shot that resolves against the target's touch AC regardless of the range increment.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "figurine-of-wondrous-power-slate-spider",
    "name": "Figurine of Wondrous Power (Slate Spider)",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Wondrous figurine (moderate transmutation, CL 11th), weight 1 lb. Once per day for 1 minute the stone spider animates to groom its activator; commanded as a free action, it perches on a firearm's muzzle and cleans the barrel after a shot, so the firearm's next shot has no chance of misfiring.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "oil-of-silence",
    "name": "Oil of Silence",
    "category": "wondrous",
    "cost": "250 gp",
    "summary": "Wondrous oil (faint illusion, CL 5th). Applied to a one-handed or two-handed firearm, it renders the firearm silent for 1 hour. Five vials used together can silence a Large firearm siege engine, and ten a Huge one; it has no effect on larger siege engines.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "see-invisibility-sight",
    "name": "See Invisibility Sight",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "Wondrous sight (moderate divination, CL 8th), weight 1 lb., attached to a single two-handed firearm (removing it is a full-round action). The wielder can spend a full-round action to locate an invisible creature within line of sight, or to make a single shot that ignores the invisibility of a creature known to be in the area.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  }
];
