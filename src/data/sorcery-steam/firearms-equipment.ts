/**
 * Sorcery & Steam firearms equipment pack: the firearms, ammunition,
 * and gun gear of Shaun's compiled firearms document
 * (workspace/user/files/fire_arms.docx, uploaded 2026-10-27) — the
 * document's tables carry the Pathfinder Ultimate Combat (UC)
 * firearms statistics, followed by a looser tail section (musket
 * ammunition variants, two gunpowder melee weapons, three siege
 * engines) with no source tag. Batch 1.5 of the "everything"
 * program; see REBUILD-NOTES.md.
 *
 * Modeling notes: EquipmentItem has no weapon-stat structure, so
 * each firearm's printed statistics (damage by size, critical,
 * range increment, misfire, capacity, damage type, scatter) are
 * transcribed into the record's notes, following the core pack's
 * convention of carrying damage in notes. Firearms and the tail
 * weapons are category "weapon"; ammunition and gear are "gear";
 * the gunsmith's kit is a "tool", as in the core pack.
 */
import type { EquipmentItem } from "@/engine/types";

export const SORCERY_STEAM_FIREARM_EQUIPMENT: EquipmentItem[] = [
  {
    "id": "buckler-gun",
    "name": "Buckler gun",
    "category": "weapon",
    "cost": "300 gp",
    "weight": "6 lbs.",
    "notes": "One-handed firearm. Damage 1d4 (Small) / 1d6 (Medium), crit ×4, range increment 10 ft., misfire 1 (5 ft. misfire radius), capacity 2, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pepperbox",
    "name": "Pepperbox",
    "category": "weapon",
    "cost": "350 gp",
    "weight": "5 lbs.",
    "notes": "One-handed firearm. Damage 1d6 (Small) / 1d8 (Medium), crit ×4, range increment 20 ft., misfire 1–2 (5 ft. misfire radius), capacity 6, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pistol",
    "name": "Pistol",
    "category": "weapon",
    "cost": "400 gp",
    "weight": "4 lbs.",
    "notes": "One-handed firearm. Damage 1d6 (Small) / 1d8 (Medium), crit ×4, range increment 20 ft., misfire 1 (5 ft. misfire radius), capacity 1, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pistol-coat",
    "name": "Pistol, coat",
    "category": "weapon",
    "cost": "250 gp",
    "weight": "1 lb.",
    "notes": "One-handed firearm. Damage 1d3 (Small) / 1d4 (Medium), crit ×3, range increment 10 ft., misfire 1 (5 ft. misfire radius), capacity 1, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pistol-dagger",
    "name": "Pistol, dagger",
    "category": "weapon",
    "cost": "250 gp",
    "weight": "1 lb.",
    "notes": "One-handed firearm. Damage 1d3 (Small) / 1d4 (Medium), crit ×3, range increment 10 ft., misfire 1 (5 ft. misfire radius), capacity 1, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pistol-double-barreled",
    "name": "Pistol, double-barreled",
    "category": "weapon",
    "cost": "350 gp",
    "weight": "5 lbs.",
    "notes": "One-handed firearm. Damage 1d6 (Small) / 1d8 (Medium), crit ×4, range increment 20 ft., misfire 1–2 (5 ft. misfire radius), capacity 2, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pistol-dragon",
    "name": "Pistol, dragon",
    "category": "weapon",
    "cost": "400 gp",
    "weight": "3 lbs.",
    "notes": "One-handed firearm. Damage 1d4 (Small) / 1d6 (Medium), crit ×4, range increment 20 ft., misfire 1–2 (5 ft. misfire radius), capacity 1, damage type bludgeoning and piercing. Scatter quality: can also make a scattering shot against all creatures in a cone (separate attack roll per creature, Reflex DC 15 for half, precision damage does not apply; a scatter shot rolls only to determine misfire).",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pistol-sword-cane",
    "name": "Pistol, sword cane",
    "category": "weapon",
    "cost": "275 gp",
    "weight": "1 lb.",
    "notes": "One-handed firearm. Damage 1d3 (Small) / 1d4 (Medium), crit ×3, range increment 10 ft., misfire 1 (5 ft. misfire radius), capacity 1, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "revolver",
    "name": "Revolver",
    "category": "weapon",
    "cost": "800 gp",
    "weight": "4 lbs.",
    "notes": "One-handed firearm. Damage 1d6 (Small) / 1d8 (Medium), crit ×4, range increment 20 ft., misfire 1, capacity 6, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "blunderbuss",
    "name": "Blunderbuss",
    "category": "weapon",
    "cost": "500 gp",
    "weight": "8 lbs.",
    "notes": "Two-handed firearm. Damage 1d6 (Small) / 1d8 (Medium), crit ×2, range increment special, misfire 1–2 (10 ft. misfire radius), capacity 1, damage type bludgeoning and piercing. Scatter quality: can also make a scattering shot against all creatures in a cone (separate attack roll per creature, Reflex DC 15 for half, precision damage does not apply; a scatter shot rolls only to determine misfire).",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "culverin",
    "name": "Culverin",
    "category": "weapon",
    "cost": "700 gp",
    "weight": "40 lbs.",
    "notes": "Two-handed firearm. Damage 2d6 (Small) / 2d8 (Medium), crit ×4, range increment 30 ft., misfire 1 (10 ft. misfire radius), capacity 1, damage type bludgeoning and piercing. Scatter quality: can also make a scattering shot against all creatures in a cone (separate attack roll per creature, Reflex DC 15 for half, precision damage does not apply; a scatter shot rolls only to determine misfire).",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "double-hackbut",
    "name": "Double hackbut",
    "category": "weapon",
    "cost": "800 gp",
    "weight": "18 lbs.",
    "notes": "Two-handed firearm. Damage 2d10 (Small) / 2d12 (Medium), crit ×4, range increment 50 ft., misfire 1–2 (5 ft. misfire radius), capacity 2, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "fire-lance",
    "name": "Fire lance",
    "category": "weapon",
    "cost": "250 gp",
    "weight": "4 lbs.",
    "notes": "Two-handed firearm. Damage 1d4 (Small) / 1d6 (Medium), crit ×4, range increment 10 ft., misfire 1–4 (5 ft. misfire radius), capacity 1, damage type piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "musket",
    "name": "Musket",
    "category": "weapon",
    "cost": "700 gp",
    "weight": "9 lbs.",
    "notes": "Two-handed firearm. Damage 1d10 (Small) / 1d12 (Medium), crit ×4, range increment 40 ft., misfire 1–2 (5 ft. misfire radius), capacity 1, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "musket-axe",
    "name": "Musket, axe",
    "category": "weapon",
    "cost": "500 gp",
    "weight": "6 lbs.",
    "notes": "Two-handed firearm. Damage 1d6 (Small) / 1d8 (Medium), crit ×4, range increment 30 ft., misfire 1–2 (5 ft. misfire radius), capacity 1, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "musket-double-barreled",
    "name": "Musket, double-barreled",
    "category": "weapon",
    "cost": "700 gp",
    "weight": "11 lbs.",
    "notes": "Two-handed firearm. Damage 1d10 (Small) / 1d12 (Medium), crit ×4, range increment 40 ft., misfire 1–3 (5 ft. misfire radius), capacity 2, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "musket-warhammer",
    "name": "Musket, Warhammer",
    "category": "weapon",
    "cost": "500 gp",
    "weight": "6 lbs.",
    "notes": "Two-handed firearm. Damage 1d6 (Small) / 1d8 (Medium), crit ×4, range increment 30 ft., misfire 1–2 (5 ft. misfire radius), capacity 1, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "rifle",
    "name": "Rifle",
    "category": "weapon",
    "cost": "1,500 gp",
    "weight": "12 lbs.",
    "notes": "Two-handed firearm. Damage 1d8 (Small) / 1d10 (Medium), crit ×4, range increment 80 ft., misfire 1, capacity 1, damage type bludgeoning and piercing.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "shotgun-2-barreled",
    "name": "Shotgun, 2 barreled",
    "category": "weapon",
    "cost": "1,000 gp",
    "weight": "15 lbs.",
    "notes": "Two-handed firearm. Damage 1d6 (Small) / 1d8 (Medium), crit ×2, range increment 20 ft., misfire 1–2, capacity 2, damage type bludgeoning and piercing. Scatter quality: can also make a scattering shot against all creatures in a cone (separate attack roll per creature, Reflex DC 15 for half, precision damage does not apply; a scatter shot rolls only to determine misfire).",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "alchemical-cartridge-dragons-breath",
    "name": "Alchemical cartridge, dragon's breath",
    "category": "gear",
    "cost": "40 gp",
    "weight": "—",
    "notes": "Alchemical cartridge for firearms: a prepared bundle of black powder and shot sealed in paper or cloth. Loading with an alchemical cartridge reduces the loading time by one step but increases the firearm's misfire value as listed for the cartridge.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "alchemical-cartridge-entangling-shot",
    "name": "Alchemical cartridge, entangling shot",
    "category": "gear",
    "cost": "40 gp",
    "weight": "—",
    "notes": "Alchemical cartridge for firearms (see the cartridge loading and misfire rules under the dragon's breath cartridge).",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "alchemical-cartridge-flare",
    "name": "Alchemical cartridge, flare",
    "category": "gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "Alchemical cartridge for firearms (see the cartridge loading and misfire rules under the dragon's breath cartridge).",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "alchemical-cartridge-paper",
    "name": "Alchemical cartridge, paper",
    "category": "gear",
    "cost": "12 gp",
    "weight": "—",
    "notes": "Paper alchemical cartridge (bullet or pellet): the simplest cartridge, a mix of black powder and either a bullet or pellets wrapped in paper or cloth.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "alchemical-cartridge-salt-shot",
    "name": "Alchemical cartridge, salt shot",
    "category": "gear",
    "cost": "12 gp",
    "weight": "—",
    "notes": "Alchemical cartridge for firearms (see the cartridge loading and misfire rules under the dragon's breath cartridge).",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "black-powder-dose",
    "name": "Black powder (dose)",
    "category": "gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "A single dose of black powder, enough to load a firearm.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "black-powder-keg",
    "name": "Black powder (keg)",
    "category": "gear",
    "cost": "1,000 gp",
    "weight": "5 lbs.",
    "notes": "A keg of black powder.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "firearm-bullet-10",
    "name": "Firearm bullet (10)",
    "category": "gear",
    "cost": "1 gp",
    "weight": "1 lb.",
    "notes": "Ten firearm bullets.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "firearm-bullet-30",
    "name": "Firearm bullet (30)",
    "category": "gear",
    "cost": "30 gp",
    "weight": "3 lbs.",
    "notes": "Thirty firearm bullets.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "bullet-adamantine",
    "name": "Bullet, adamantine",
    "category": "gear",
    "cost": "61 gp",
    "weight": "—",
    "notes": "Adamantine firearm bullet.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "firearm-bullet-pitted",
    "name": "Firearm bullet, pitted",
    "category": "gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "Pitted firearm bullet; the listed cost does not include any poison compound applied to it.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "firearm-bullet-silver",
    "name": "Firearm bullet, silver",
    "category": "gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "Silver firearm bullet.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "gunsmiths-kit",
    "name": "Gunsmith's kit",
    "category": "tool",
    "cost": "15 gp",
    "weight": "2 lbs.",
    "notes": "Kit with all the tools needed to create, repair, and restore firearms (raw materials not included); without one, firearms cannot be properly constructed or maintained.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "metal-cartridge",
    "name": "Metal cartridge",
    "category": "gear",
    "cost": "15 gp",
    "weight": "—",
    "notes": "Metal firearm cartridge.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pellets-handful",
    "name": "Pellets (handful)",
    "category": "gear",
    "cost": "1 gp",
    "weight": "—",
    "notes": "A handful of pellets for scatter firearms.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "pellets-30-handfuls",
    "name": "Pellets (30 handfuls)",
    "category": "gear",
    "cost": "30 gp",
    "weight": "1/2 lb.",
    "notes": "Thirty handfuls of pellets for scatter firearms.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "powder-horn",
    "name": "Powder horn",
    "category": "gear",
    "cost": "3 gp",
    "weight": "1 lb.",
    "notes": "Horn (animal horn or metal) holding up to 10 doses of black powder; protects the powder from fire, electricity, firearm misfires, and water.",
    "source": "Pathfinder Ultimate Combat (document source tag UC) — via fire_arms.docx, Shaun Bradley's compiled firearms document",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "musket-ball-5",
    "name": "Musket ball (5)",
    "category": "gear",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "Ammunition for pistols and muskets; price and weight cover the ball, gunpowder, and wadding for 5 rounds.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "flechette-5",
    "name": "Flechette (5)",
    "category": "gear",
    "cost": "15 gp",
    "weight": "1 lb.",
    "notes": "Metal dart in a leather casing, far more accurate than a musket ball; can only be fired from a musket. Deals normal damage but increases the musket's base range increment to 100 ft.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "quickshot-musket-ball-5",
    "name": "Quickshot musket ball (5)",
    "category": "gear",
    "cost": "100 gp",
    "weight": "1/2 lb.",
    "notes": "Alchemically coated musket balls that need no black powder; can be loaded as a free action, letting the user attack with a gun up to their full number of attacks.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "thunderball",
    "name": "Thunderball",
    "category": "gear",
    "cost": "50 gp",
    "weight": "1/2 lb.",
    "notes": "A defensive ammunition that looks and loads like a normal musket ball; when the gun is fired it explodes in the chamber, dealing 3d6 sonic damage to the user, who must make a DC 15 Fortitude save or be deafened for 1 hour (−4 initiative, 20% chance to miscast and lose verbal-component spells). Can be unloaded from a gun as a standard action.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "krakling-spear",
    "name": "Krakling Spear",
    "category": "weapon",
    "cost": "50 gp",
    "weight": "4 lbs.",
    "notes": "Simple melee weapon (can be thrown, range increment 15 ft.). Damage 1d4+1d4 fire (Small) / 1d6+1d4 fire (Medium) / 1d8+1d4 fire (Large), crit ×2, piercing. A short spear with an explosive charge behind the head: a creature struck must make a DC 20 Reflex save or be knocked prone; the spear is destroyed after a successful melee attack.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "dwarven-thunderhammer",
    "name": "Dwarven Thunderhammer",
    "category": "weapon",
    "cost": "150 gp",
    "weight": "8 lbs.",
    "notes": "Exotic two-handed melee weapon (martial for dwarves). Damage 1d12+1d6 fire (Medium), crit 19–20, bludgeoning. A warhammer whose moving head ignites a gunpowder charge on impact, jetting flame through the head; unloaded, it deals damage without the fire. Loading is a move action that provokes attacks of opportunity; a gunpowder load costs 1 gp.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "cannon",
    "name": "Cannon",
    "category": "weapon",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "Siege engine. Damage 6d8, range increment 250 ft., typical crew 7. Firing takes a series of full-round actions (4 to clean and load, 2 more to prepare ammunition; a large enough crew can work concurrently); −4 penalty to hit, and recoil forces re-aiming after every shot. A single cannon load costs 10 gp. Occupies a space 10 ft. across.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "ships-cannon",
    "name": "Ship's Cannon",
    "category": "weapon",
    "cost": "2,000 gp",
    "weight": "—",
    "notes": "Siege engine. Damage 4d8, range increment 200 ft., typical crew 5. Smaller cannon fixed in position, usually on a ship: 2 full-round actions to clean and load, plus 2 to prepare ammunition; −6 penalty to hit (fixed mount, limited mobility). A single load costs 10 gp. Occupies a space 5 ft. across.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "dragon-ballista",
    "name": "Dragon Ballista",
    "category": "weapon",
    "cost": "750 gp",
    "weight": "—",
    "notes": "Siege engine. Damage 3d8, crit 19–20, range increment 200 ft., typical crew 1. Resembles a small cannon more than a ballista; uses a gunpowder charge to fire a ballista bolt and loads with a single full-round action regardless of size. A single shot costs 5 gp. Occupies a space 5 ft. across.",
    "source": "fire_arms.docx, Shaun Bradley's compiled firearms document (tail section; no source tag in the document)",
    "sourceUrl": "workspace/user/files/fire_arms.docx",
    "ruleset": "sorcery_steam"
  }
];
