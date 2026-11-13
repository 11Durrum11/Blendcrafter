/**
 * Omni sweep Wave 4 (2026-11-02): Shaun Bradley's house arrow list --
 * "104 arrows.txt" (the complete d100 table) and its near-identical
 * draft "arrows.docx". The Wave 2 house-docs pass enumerated these
 * 104 arrow types but built none, because neither document prints a
 * price for any arrow. Shaun has since directed that the arrows go in
 * anyway, pricing waived, so every record below carries cost "—".
 *
 * Reconciliation of the two drafts: "104 arrows.txt" is the complete
 * table (104 entries) and supplies the base text. "arrows.docx" skips
 * four entries (#27 Pointy Twig, #58 Arrow of Teleportation, #74
 * Trickstrike Arrow, #92 Ethereal Arrow) and its entry #72 is a
 * different arrow -- Doom Slayer Arrow (double damage to living
 * creatures) where the txt has Wyrmslayer Arrow (double damage to
 * dragons and like kin) -- so the union of distinct named arrow types
 * is 105, and both #72 variants are built. Where the drafts disagree
 * on a figure (Ice Arrow, Deadweight Arrow, Arrow of Returning), the
 * txt text governs and the summary notes the docx variant.
 * arrows.docx also opens with a blanket note that all arrows in the
 * list are single-use, their shafts breaking upon impact so enemies
 * cannot collect and reuse them.
 *
 * One listed type is NOT built: Sleep Arrow (#34) already exists in
 * the catalog under that exact name (a book record), and the sweep
 * does not duplicate names; the house version -- a mundane
 * sleep-powder arrow -- is noted in the omni-sweep report instead.
 *
 * Filing rule: arrows the documents describe with enchantments, spell
 * effects, or magical effects are magic items (category
 * "ammunition"); arrows that work by construction, materials, or a
 * physical/alchemical payload are equipment (category "ammunition",
 * weight "—" because the documents print no weights). Prices and
 * names are exactly as the documents print them; summaries are the
 * documents' content in our own words. All records use ruleset
 * "homebrew" and carry "house-" id prefixes, matching
 * omni-house-docs.ts.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const HARR_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "house-ice-arrow",
    "name": "Ice Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "An arrow whose head is a shard of razor-sharp ever-frozen ice; a hit freezes the area around the wound for 1d4 hours. The arrows.docx draft instead reads that the wound freezes 'for 1d4 hp.'",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #1",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-shock-arrow",
    "name": "Shock Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "A thundergem sharpened into an arrowhead; on a hit the brittle gem shatters, releasing an additional 1d8 lightning damage in a 10-foot radius.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #8",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-water-arrow",
    "name": "Water Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "On contact this arrow releases a burst of water that extinguishes any source of fire no greater than a five-foot cube; elementals attuned to fire are weak against its damage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #9",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-moss-arrow",
    "name": "Moss Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "When this arrow is fired at a surface, creeping moss rapidly spreads to a circle with a ten-foot radius around the point of contact; walking or climbing on the moss grants advantage on Stealth checks to remain silent.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #10",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-thundersteel-arrow",
    "name": "Thundersteel Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "Made from meteoric iron imbued with the essence of the sky domain, this arrow deals an additional 1d4 lightning damage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #14",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-healing",
    "name": "Arrow of Healing",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow deals 1d4 damage and heals 1d8 hit points.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #16",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-returning",
    "name": "Arrow of Returning",
    "category": "ammunition",
    "cost": "—",
    "summary": "After firing and striking something, this arrow vanishes in a puff of smoke and returns to your quiver. The arrows.docx draft instead has it return when it does not hit the intended target.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #18",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-superior-smoke-arrow",
    "name": "Superior Smoke Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow creates a Fog Cloud after 2 turns.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #21",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrows-of-the-wraith",
    "name": "Arrows of the Wraith",
    "category": "ammunition",
    "cost": "—",
    "summary": "These arrows have ethereal tips that don't hurt most creatures but are devastating to ghosts and other spirits.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #23",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-blinding",
    "name": "Arrow of Blinding",
    "category": "ammunition",
    "cost": "—",
    "summary": "As it impacts the target, this arrow explodes in a flash of light, rendering everyone who was not averting their eyes blinded for 1d4 rounds.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #25",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-delay",
    "name": "Arrow of Delay",
    "category": "ammunition",
    "cost": "—",
    "summary": "When fired, this arrow freezes in place mid-air, thawing one round later and targeting the original targeted location; in addition to normal damage, on a hit the target is frozen in time for one round, unable to take any actions.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #26",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-buzzing-arrow",
    "name": "Buzzing Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "An arrow with a head coated in honey; when it hits a target, a swarm of bees is summoned, centered on the target. The bees are not friendly to the user, but likely won't attack unless provoked.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #28",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-splitting-arrow",
    "name": "Splitting Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "An arrow that splits into 3 separate arrows mid-flight; there are rarer versions that split into 5 and even 7.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #29",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-light-arrow",
    "name": "Light Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "These arrows deal radiant damage instead of piercing; they appear to be made out of pure light while emitting none at the same time, and they leave a streak in the air, marking their path for up to an hour.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #31",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-vampire-teeth-arrow",
    "name": "Vampire Teeth Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "While not actual vampire teeth, they look pretty close; these arrows deal necrotic damage instead of piercing. The teeth may be recovered after battle to gain the damage dealt with them as healing or temporary hit points.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #32",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-stalker-arrow",
    "name": "Stalker Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "Upon impact, this arrow lodges a small magical tracker in its target; the archer now knows the location of the target for 24 hours.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #38",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-taser-bolt",
    "name": "Taser Bolt",
    "category": "ammunition",
    "cost": "—",
    "summary": "Upon impact, the target must make a DC 14 Constitution saving throw; on a fail, the target is paralyzed, as if affected by the Hold Person spell. The saving throw may be repeated at the end of each of the target's turns.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #39",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-scrying-arrow",
    "name": "Scrying Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "It takes a moment to prep this arrow: you look into the foggy glass and your non-dominant eye loses sight for a second before reforming inside the glassy bulb. This effect lasts for a minute; the arrow can then be shot.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #40",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-deadweight-arrow",
    "name": "Deadweight Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "Once it's stabbed into a surface, the target's weight increases to 50 pounds. The arrows.docx draft instead says the weight increases to 500 pounds, for 1 minute.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #41",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-shadow-arrows",
    "name": "Shadow Arrows",
    "category": "ammunition",
    "cost": "—",
    "summary": "Arrows exposed to alchemy that allows them to go through an object or person and pierce something else.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #46",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-gossip-arrow",
    "name": "Gossip Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "On a hit, the archer discovers one mundane secret about the target (the 'the bandit loves knitting' kind of secret); this secret is broadcast in a 30-foot radius by an ethereal voice.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #49",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-edible-arrow",
    "name": "Edible Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow can be shot and breaks like a normal arrow but is unrecoverable; otherwise it provides the effect of one goodberry with no time spoilage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #50",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-navigators-shot",
    "name": "Navigators Shot",
    "category": "ammunition",
    "cost": "—",
    "summary": "Upon firing upwards, the arrow travels 80 feet upwards before going 50 feet towards a goal (a target or location) the archer is currently seeking; the magic loses effect if it impacts anything before the ascent.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #51",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-cupids-lust",
    "name": "Cupid's Lust",
    "category": "ammunition",
    "cost": "—",
    "summary": "This pair of arrows switches the minds of the targets for 24 hours when struck with the tip.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #52",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-evertrue-arrow",
    "name": "Evertrue Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "When this arrow is fired, a target will be hit -- maybe not the one you're aiming at; the arrow will continue to travel across the surface of the plane it was shot on in a random direction that changes every minute until it hits a target.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #53",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-moist-arrow",
    "name": "Moist Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "Upon impact, any surface in a 10-foot cube will immediately be drenched in a thin layer of water.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #54",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-missile-attraction",
    "name": "Arrow of Missile Attraction",
    "category": "ammunition",
    "cost": "—",
    "summary": "On a hit, the target becomes missile attractive: any missile or projectile that passes within 20 feet of the victim has a 2 in 6 chance of being redirected towards the victim.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #55",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-monster-attraction",
    "name": "Arrow of Monster Attraction",
    "category": "ammunition",
    "cost": "—",
    "summary": "Any target hit by this arrow will attract any monster within 200 feet; monsters (with below human intelligence) will treat the person or creature hit by this arrow as hostile. If the arrow hits an inanimate object or the ground, any monster drawn to it will treat everyone in the area as hostile.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #56",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-illusion",
    "name": "Arrow of Illusion",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow creates an illusion of the archer at the impact site.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #57",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-teleportation",
    "name": "Arrow of Teleportation",
    "category": "ammunition",
    "cost": "—",
    "summary": "The user is teleported to the impact site of the arrow.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #58",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-anti-magic",
    "name": "Arrow of Anti-Magic",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow dispels all magic spells and effects within 10 feet of its impact.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #59",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-vampire-arrow",
    "name": "Vampire Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "An arrow made from bone that appears to be covered in dozens of tiny holes near its tip; on a hit, it begins rapidly draining blood from the target's body, causing 1d6 necrotic damage at the start of the target's turn until the head of the arrow is removed from the body. These additional effects do not occur if the target has no blood or similar essential body fluid.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #60",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-anti-ballistic-arrow",
    "name": "Anti-Ballistic Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "A thick arrow with a rounded tip, with fletching that constantly adjusts and readjusts itself; upon being fired, the arrow seeks out the closest moving projectile that is within 30 feet of any point of the arrow's flight path. The arrow changes its direction to intercept the moving projectile, and a successful attack roll against an AC of 15 results in the intercepted projectile being knocked out of the air and/or destroyed.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #61",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-blight-arrow",
    "name": "Blight Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "A sinister-looking arrow made from a dark wood that seems to pulse with life; on a hit, the wooden shaft wiggles and writhes its way into the body of the target, dealing an additional 1d4 damage on the hit and at the start of each of the target's turns thereafter until the wood is removed with magical restoration or a successful DC 16 Medicine check. If the shaft still remains inside the target's body when the target dies, 1d3 twig blights burst forth from the target's body 2d4 rounds after the creature's death; the twig blights are hostile to all creatures other than each other.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #62",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-screamer-arrow",
    "name": "Screamer Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "A transparent, fragile arrowhead filled with volatile sonic energy causes this arrow to mildly vibrate at all times; on a hit, the arrowhead shatters and releases an ear-shattering scream. Instead of dealing traditional damage, all creatures within a 30-foot radius of the arrow's point of impact must make a Constitution saving throw, taking 2d8 thunder damage on a failed save and half as much on a successful one; a creature made of inorganic material such as stone or metal has disadvantage on this saving throw, and any nonmagical objects that aren't being worn or carried also take the damage if they are in the radius.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #63",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-cannon-arrow",
    "name": "Cannon Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "An arrow seemingly made entirely out of metal that is still light enough to be used, with faintly glowing runic symbols covering every surface; upon being fired, the arrow transforms into a cannonball that magically continues following the arrow's flight path. A creature that is hit with the cannonball takes 8d10 bludgeoning damage and must succeed on a DC 22 Strength saving throw or be knocked prone.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #64",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-foecrusher-arrow",
    "name": "Foecrusher Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "An arrow with a very large head that is disproportionate to the rest of the arrow's body and somehow weighs the same as a normal arrowhead; upon being fired, the arrow begins to rapidly grow in size over the course of its flight. For every 10 feet the arrow moves, the arrow's damage increases by 1d6 piercing damage; if the arrow travels at least 100 feet, every creature within a 5-foot radius of the arrow's point of impact must make a DC 18 Dexterity saving throw, taking the arrow's full damage as bludgeoning damage on a failed save and half as much on a successful one -- this damage is done instead of the arrow's single-target damage, not in addition to it, and the radius increases by 5 feet for every additional 100 feet the arrow travels after the initial 100 feet.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #65",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-silence-arrow",
    "name": "Silence Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "An arrow with a fog-filled glass pearl instead of an arrowhead; it casts the Silence spell in a 20-foot spherical radius lasting for 5 minutes where it strikes.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #67",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-glass-break-arrow",
    "name": "Glass-Break Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "The arrowhead is high-quality ceramic and very lightly touched with enchantment so that it thoroughly shatters glass; despite being enchanted, Detect Magic will overlook it most of the time. The document calls it inexpensive, but notes that only shops catering to thieves and mischief sell them, and that possession may be a crime in some areas.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #68",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-tracer-arrow",
    "name": "Tracer Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow glows when fired so you can see the arc of the arrow and where it lands. The document calls it inexpensive.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #69",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-flightstopper-arrow",
    "name": "Flightstopper Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "A creature that is flying or attempting to fly must make a Constitution save before using its movement; on failure, it cannot gain altitude and instead drops 60 feet. A flying creature does not take fall damage if it is forced from the sky by this arrow; the throw is repeated every time the flying creature tries to use its movement, and the effect lasts one minute or until the arrow is removed, whichever comes sooner.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #71",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-wyrmslayer-arrow",
    "name": "Wyrmslayer Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow deals double damage to dragons and like kin.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #72",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-trickstrike-arrow",
    "name": "Trickstrike Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "The arrow teleports mid-firing so that it appears to have been fired from a direction of the attacker's choosing instead; the accuracy is the same as a normal arrow.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #74",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-black-arrow",
    "name": "Black Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "Dwarven-made, it is ancient and capable of piercing dragon hide.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #76",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-huntress-arrow",
    "name": "Huntress Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "The Goddess of the Hunt blessed this arrow; it hits with the force of a falling oak tree.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #77",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-the-feywar",
    "name": "Arrow of the Feywar",
    "category": "ammunition",
    "cost": "—",
    "summary": "Upon a successful hit, this arrow transports the victim to another point nearby or another point on the nearest continent (flip a coin to decide). The arrows.docx draft adds that it draws demons.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #78",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-ricochet",
    "name": "Arrow of Ricochet",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow considers full cover to be half cover.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #79",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-desperation",
    "name": "Arrow of Desperation",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow gains a +4 bonus when the archer or one of their companions has less than a quarter HP remaining.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #80",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-mind-spike-arrow",
    "name": "Mind Spike Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow deals only psychic damage; the target has disadvantage on Wisdom saves until its next turn. It is pink in colour.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #81",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-skeletal-grasp-arrow",
    "name": "Skeletal Grasp Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "An arrow of bone with a grasping hand on the front; if the target is struck, grasping skeletal hands raise up from the ground, dealing bludgeoning damage and restraining the target and those caught in the area (5-foot radius).",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #82",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-meteor-shower-arrow",
    "name": "Meteor Shower Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "A pure black arrow that marks a target for a meteor shower; the meteors are summoned and take 1 turn to arrive, and after 1 turn a shower of massive flaming meteors rains down on the target, dealing heavy fire and bludgeoning damage in a 15-foot radius (the document does not give dice for the damage).",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #83",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-sentient-arrow",
    "name": "Sentient Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "The arrow is actually a living organism shaped like an arrow, its head being the arrow head; when drawing blood it sprouts its thin limbs and begins trying to inject itself inside its target host. The initial strike does damage and the target must succeed a Constitution saving throw or else the creature will successfully dive into the host; while inside, it will deal 1d4 damage per turn and the host can feel the creature moving around inside.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #84",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-dryads-kiss-arrow",
    "name": "Dryad's Kiss Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "Upon a successful hit by this legendary arrow, the target is wrapped in vines and dragged into the earth; on a miss, the arrow sprouts vines and roots that create an oasis of permanent plant life and sprouts another arrow every century.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #85",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-quiver-mother-arrow",
    "name": "Quiver Mother Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "As long as this arrow is in your quiver, it makes 15 arrows per day.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #86",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-drow-ascension-arrow",
    "name": "Drow Ascension Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "Touching these arrows bathes the shooter or anything it hits in shadow for 1 hour.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #87",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-haunted-skull-dread-arrow",
    "name": "Haunted Skull-Dread Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow does regular damage; if the arrow isn't pulled out before 3 turns are over, the creature gains either a minor curse from a d100 table or a disease from a d100 table. If it is a critical hit, then on the first turn the effect activates.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #90",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-agitation",
    "name": "Arrow of Agitation",
    "category": "ammunition",
    "cost": "—",
    "summary": "On a successful hit, the target experiences varying nervous agitation, which affects attack rolls and any bonuses to AC for Dexterity; roll a d4, and subtract that number from attack rolls and Dex-based AC. The effect lasts for 6-8 rounds.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #91",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-ethereal-arrow",
    "name": "Ethereal Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "Upon using a command word, this arrow shifts between the Material and Ethereal planes; it can be used to shoot through allies without harming them or to shoot through cover.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #92",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-tipsy-arrow",
    "name": "Tipsy Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "On a successful hit, the target is impaired as if drunk for 1d4 minutes (disadvantage on attacks).",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #93",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-babel-arrow",
    "name": "Babel Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "On a hit, this arrow makes you forget the languages you speak and speak languages you didn't beforehand, for 1d4 hours.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #94",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-spoil-arrow",
    "name": "Spoil Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "On a hit, you have a horrible taste in your mouth that distracts you from whatever else you were doing, sending you to seek water.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #95",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-blurry-arrow",
    "name": "Blurry Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow blurs vision for 1d20 minutes.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #96",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-short-jump-arrow",
    "name": "Short Jump Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow's range is only 30 feet, but it allows you to teleport to anywhere within the range where it lands. The arrows.docx draft adds that the teleport draws demons.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #97",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-pulling-arrow",
    "name": "Pulling Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow can pull 300 pounds of weight that is tied to the arrow for 1d100 feet.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #98",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-invisibility-arrow",
    "name": "Invisibility Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "On hit, the target vanishes for a whole 1d12 minutes.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #99",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-blessed-arrow",
    "name": "Blessed Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow does extra 1d4 damage to undead.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #100",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-banshee-wail-arrow",
    "name": "Banshee Wail Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow releases a mournful wail; the wail has no effect on constructs and undead. All other creatures within 30 feet that can hear it must make a DC 13 Constitution saving throw; on a failure, a creature takes 3d6 psychic damage, and on a successful save it takes no damage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #101",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-sanctuary-arrow",
    "name": "Sanctuary Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow casts Sanctuary in the area where it hits.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #103",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-doom-slayer-arrow",
    "name": "Doom Slayer Arrow",
    "category": "ammunition",
    "cost": "—",
    "summary": "This arrow deals double damage to living creatures.",
    "source": "arrows.docx (house document) — numbered arrow list, entry #72",
    "sourceUrl": "",
    "ruleset": "homebrew"
  }
];

export const HARR_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "house-net-arrow",
    "name": "Net Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow's head is a small clay pot holding a spring-loaded silk net. On a hit the target must make a DC 13 Dexterity save or be restrained, and on its turn it can try a DC 16 Strength check to break free.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #2",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-acid-arrow",
    "name": "Acid Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "The glass head of this arrow shatters on impact, spraying the target with corrosive acid for an additional 1d4 acid damage on a hit.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #3",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-non-lethal-arrow-blunt-head",
    "name": "Non-lethal Arrow (blunt head)",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "An arrow with a blunt head that deals blunt damage instead of piercing damage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #4",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-rose-thorn-arrow",
    "name": "Rose Thorn Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "On a hit this thorned arrow deals an extra 1d4 piercing damage, and the target must make a DC 15 Strength or Dexterity save or be ensnared for 1d4 rounds, taking 1d4 piercing damage each round it moves while ensnared and retrying the save each round to get free.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #5",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-grappling-arrow",
    "name": "Grappling Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "An arrow with a strong head that will hold up to 300 pounds of weight on an attached 100-foot length of rope.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #6",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-small-game-broadhead",
    "name": "Small Game Broadhead",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "A broadhead with extending fins that will decapitate small game (CR 1/8 or lower); the precision needed gives the target +5 to AC.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #7",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-rope-arrow",
    "name": "Rope Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "When fired, this arrow releases 25 feet of hempen rope behind it.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #11",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-choke-arrow",
    "name": "Choke Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "When this arrow makes contact with an object, it explodes into a cloud of noxious fumes in a sphere with a five-foot radius; those inside choke as if affected by the Stinking Cloud spell (DC 12).",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #12",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-alchemists-fire-arrow",
    "name": "Alchemists Fire Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow contains a small vial of alchemist's fire, dealing an additional 1d4 fire damage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #13",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-boxing-glove-arrow",
    "name": "Boxing Glove Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow stuns an enemy or knocks them prone on a hit.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #15",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-barbed-arrow",
    "name": "Barbed Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This cruelly barbed arrow does normal damage going in and 1d6+2 damage coming out; careful removal takes 1d6+1 rounds and a DC 15 Dexterity check (no damage if the check succeeds, half damage if it fails), and if left in, it deals 1 damage per round spent doing anything but remaining carefully still.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #17",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arched-arrow",
    "name": "Arched Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "A slightly curved arrow with air channels engraved onto the tip; when fired, it flies in a circle of 60-foot diameter in the direction the arrow is curved toward when aiming.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #19",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-crescent-moon-arrow",
    "name": "Crescent Moon Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "Its broad cutting head causes slashing damage and hooks itself in the flesh as the wound closes behind it, causing bleeding; it is not effective against armor or at long range, but can be used to cut objects further away, like ropes for traps.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #20",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-scorpion-arrow",
    "name": "Scorpion Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow does an additional 1d4 poison damage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #22",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-arrow-of-whooshing",
    "name": "Arrow of Whooshing",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "As it flies through the air, this arrow makes a sound like someone making the sound of an arrow flying through the air.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #24",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-pointy-twig",
    "name": "Pointy Twig",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "Sold by a goblin travelling merchant, who swears it's an arrow of never-missing; it's actually just a pointy twig.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #27",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-suckerpunch-arrow",
    "name": "Suckerpunch Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "These arrows have a light metal ball instead of a pointed head, better for knocking out targets with a shot to the head or knocking the wind out of them with a shot to the gut; incredibly nonlethal.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #30",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-glass-tipped-arrow",
    "name": "Glass Tipped Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "An arrow with a glass tip, made either solid or hollow to fill with alchemy items.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #33",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-flare-arrow",
    "name": "Flare Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow creates a flare-like projectile; if shot skyward it can be seen up to one mile away. It deals only 1d4 additional fire damage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #35",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-grapple-hook-arrow",
    "name": "Grapple Hook Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow does not do standard damage; it can be used as a standard grapple hook as well as an attempt to attach it to a target.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #36",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-flash-bang-arrow",
    "name": "Flash Bang Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow is tipped with a small grey canister that explodes in a 10-foot radius on impact; creatures in the blast must make a DC 14 Constitution save or be blinded and deafened for 1d4 rounds, and may repeat the saving throw at the end of each of their turns.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #37",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-curved-arrow",
    "name": "Curved Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "An arrow with a slight curve in it, used to hit targets behind cover.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #42",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-injection-arrow",
    "name": "Injection Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "An arrow with a needle on the tip used to inject enemies with poisons and other alchemical brews.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #43",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-armor-piercing-arrows",
    "name": "Armor Piercing Arrows",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "Tipped with special metals that ignore AC; +2 to hit.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #44",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-hollow-tipped-arrows",
    "name": "Hollow Tipped Arrows",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "These arrows break off inside the victim, causing more damage, but are harder to penetrate armor with: -1 to hit, +1d4 damage.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #45",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-smokescreen-arrow",
    "name": "Smokescreen Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "Tipped with a smokebomb, this arrow causes a cloud of smoke that obstructs vision for 1d4-1 rounds and moves 10 feet in the direction of the wind every turn.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #47",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-binding-arrow",
    "name": "Binding Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "Designed to explode on contact with a sticky goo that hardens almost instantly (DC 15 Strength check to break); can be used to stop or hinder movement.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #48",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-whistling-arrow",
    "name": "Whistling arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "A non-magical arrow with a wiffle ball-like attachment affixed to the shaft behind the point; it makes a shrill whistling sound as it travels through the air. The document calls it inexpensive.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #66",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-grease-arrow",
    "name": "Grease Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "An alchemist's vial of grease replaces the arrowhead and spreads grease on whatever surface it strikes.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #70",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-compass-arrow",
    "name": "Compass Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "Ordinary when fired, this arrow swivels to point north when balanced on a finger.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #73",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-bluff-arrow",
    "name": "Bluff Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "A regular arrow with an extremely persuasive letter tied to it.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #75",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-jagged-arrow",
    "name": "Jagged Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "When this arrow hits a target, it does 1d4 piercing damage every 12 seconds (2 turns) until removed by a Medicine check of 15+.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #88",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-zipper-arrow",
    "name": "Zipper Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow does regular damage, but when the arrow is ripped out, it does 4d4 damage; to rip the arrow out, one needs a prerequisite Strength of 15. The actual arrow has many small spikes and sharp edges on it, and near the base of the arrow is a large pull handle.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #89",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-snake-arrow",
    "name": "Snake Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "This arrow releases 1d4+2 snakes when hitting an enemy (the document notes it could be a small clay vase).",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #102",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "house-bull-arrow",
    "name": "Bull Arrow",
    "category": "ammunition",
    "cost": "—",
    "weight": "—",
    "notes": "Designed to puncture heavy armor and animal skins, this arrow has a small cache of gunpowder on the end that only detonates on contact with a hard enough surface; it deals 1d4 piercing damage, and an extra 1d8 bludgeoning damage if the target has an AC over 16.",
    "source": "104 arrows.txt (house document) — d100 arrow table, entry #104",
    "sourceUrl": "",
    "ruleset": "homebrew"
  }
];
