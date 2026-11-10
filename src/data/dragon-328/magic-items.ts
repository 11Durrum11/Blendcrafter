// Dragon Magazine #328 (February 2005) — magic item draft: 9 records.
// "Bazaar of the Bizarre: Treasures of the Elven Empire" (Richard Farrese),
// pp. 64-67 — EIGHT items from the ancient elven empires (the program survey's ~8
// for both item articles combined; the Bazaar alone prints eight — see MANIFEST);
// and "Silicon Sorcery: God of War," pp. 68-69 — the ANARCH RAZORS, a pair of lesser
// artifact weapons, staged here in the magic barrel with category "artifact" (shape
// call, see MANIFEST: the catalog's magic barrel takes artifact weapons — cf. the
// issue-327 construct-augmentation precedent — and the record carries the printed
// exotic-weapon stat line in its summary). Summaries carry aura/CL/creation lines,
// price, and weight in the house style of recent packs. Every price, CL, and
// creation line was verified against rendered page images (pp. 66-69); the image
// governs over the OCR stream — the rod of revealing's 110-foot radius and
// 110-minute duration are the printed figures, not OCR errors, and the hand of the
// creator is a +1 (not +2) keen punching dagger as printed.
// ⚠️ APOC FLAGS — see SCREENING.md: the anarch razors are bestowed by a deity after
// a ritual of service; in APOC the gods are trapped outside the crystal sphere and
// power is drawn, not granted. The record stages as printed; disposition is Shaun's
// call. The quiver of plenty creates arrows by conjuration (creation) — it stores
// nothing and is not extra-dimensional.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_BAZAAR = "Dragon Magazine #328 — Bazaar of the Bizarre: Treasures of the Elven Empire (Richard Farrese), pp. 64-67";
const SRC_SILICON = "Dragon Magazine #328 — Silicon Sorcery: God of War, pp. 68-69";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_BAZAAR,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_328_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Bazaar of the Bizarre: Treasures of the Elven Empire ----
  M({
    id: "armor-of-the-long-journey",
    name: "Armor of the Long Journey",
    category: "armor",
    cost: "39,650 gp",
    summary:
      "A suit of +2 full plate of cold resistance that is as light as a chain shirt: the armor weighs only 25 pounds, the wearer moves at his normal base speed in it, medium loads count as light loads and heavy loads count as medium loads for the wearer, and the wearer never becomes fatigued from traveling (he can still become fatigued from combat, swimming, raging, spells, and similar exertions). Moderate abjuration; CL 6th; Craft Magic Arms and Armor, bear's endurance, resist energy; Price 39,650 gp; Weight 25 lb.",
  }),
  M({
    id: "boots-of-the-woodland",
    name: "Boots of the Woodland",
    cost: "16,000 gp",
    summary:
      "Boots that serve their wearer in any forest environment: while in a forest, the wearer is under a permanent endure elements effect, gains a +10-foot enhancement bonus to his base land speed and a +4 insight bonus on Reflex saves, and gains a +10 competence bonus on Move Silently checks. Both boots must be worn in a forest for 24 hours before the magic takes effect. Faint abjuration; CL 5th; Craft Wondrous Item, cat's grace, endure elements, expeditious retreat; Price 16,000 gp; Weight 1 lb.",
  }),
  M({
    id: "cape-of-the-general",
    name: "Cape of the General",
    cost: "38,000 gp",
    summary:
      "A cape that functions as a +2 cloak of resistance while also granting its wearer a +2 enhancement bonus to Charisma and a +2 enhancement bonus to Intelligence. Worn by a character with elven blood, the cape also grants a +4 morale bonus on saves against fear to all elven-blooded allies within 30 feet. Faint abjuration and transmutation; CL 5th; Craft Wondrous Item, eagle's splendor, fox's cunning, remove fear, creator must be elf or half-elf; Price 38,000 gp; Weight 1 lb.",
  }),
  M({
    id: "hand-of-the-creator",
    name: "Hand of the Creator",
    category: "weapon",
    cost: "48,502 gp",
    summary:
      "A mithral +1 keen punching dagger (katar) that deals an extra 1d4 points of damage when wielded by an elf or half-elf. When used by a character with elven blood, the hand of the creator bestows the Curse of the Creator on any creature without elven blood it strikes: the non-elf foe can make a DC 14 Will save to resist the curse, which surrounds the creature in a permanent faerie fire effect and causes the target to be permanently shaken. The hand of the creator's wielder can remove the curse as a standard action; the spells break enchantment, limited wish, miracle, remove curse, and wish can also remove the curse. Moderate abjuration; CL 7th; Craft Magic Arms and Armor, bestow curse, faerie fire, keen edge, creator must be elf or half-elf; Price 48,502 gp; Weight 1/2 lb.",
  }),
  M({
    id: "quiver-of-plenty",
    name: "Quiver of Plenty",
    cost: "18,000 gp",
    summary:
      "A quiver that provides its owner with a limitless supply of various types of masterwork arrows: whenever the owner reaches into the quiver, his mental desire causes it to instantly create an arrow of the desired type that remains in existence long enough to fire. The quiver of plenty can create an infinite number of wooden arrows, steel-tipped arrows, alchemical silver-tipped arrows, and cold iron arrows; it can also create five adamantine-tipped arrows each day. If the quiver's owner drops, hands off, or otherwise lets go of a created arrow in a way that isn't firing it from a bow, the arrow disappears, and all arrows created by a quiver of plenty dissipate into nothingness immediately after they strike a solid object (whether the intended target or not). Strong conjuration; CL 9th; Craft Wondrous Item, major creation; Price 18,000 gp; Weight 1 lb.",
  }),
  M({
    id: "rod-of-revealing",
    name: "Rod of Revealing",
    category: "rod",
    cost: "60,000 gp",
    summary:
      "A simple iron scepter carved with an open eye upon one end: a rod of revealing suppresses all magic from the school of illusion as if it were within an antimagic field. This effect covers a 110-foot radius centered on the rod and is useable once per day; the rod can maintain this illusion suppression field for 110 minutes (1 hour, 50 minutes). While the rod affects an area, no new illusion spells or effects can be cast or triggered there, and magic items that produce illusion effects (such as a ring of invisibility) fail to function in the area. The rod has no effect on magic that is not of the illusion school. Strong abjuration; CL 11th; Craft Rod, antimagic field, invisibility purge; Price 60,000 gp; Weight 5 lb.",
  }),
  M({
    id: "shield-of-obstruction",
    name: "Shield of Obstruction",
    category: "armor",
    cost: "27,403 gp",
    summary:
      "A spiked +3 light wooden shield that can grow a wall of thorns, as the spell, once per day: the wall is 90 feet long and 10 feet thick, lasts for 90 minutes, and must be a straight line — it is not shapeable. Moderate transmutation; CL 9th; Craft Magic Arms and Armor, wall of thorns; Price 27,403 gp; Weight 5 lb.",
  }),
  M({
    id: "thespians-mask",
    name: "Thespian's Mask",
    cost: "3,000 gp",
    summary:
      "A unique ivory mask depicting a specific humanoid face: when worn, the mask merges with the wearer's face and changes his features (including clothing and equipment) to match the depicted creature, functioning as a disguise self spell that can only ever change the wearer into that one depicted face, for as long as the mask is worn. Faint illusion; CL 5th; Craft Wondrous Item, disguise self, creator must possess at least 10 ranks in Craft (sculpting); Price 3,000 gp; Weight —.",
  }),
  // ---- Silicon Sorcery: God of War ----
  M({
    id: "anarch-razors",
    name: "Anarch Razors",
    category: "artifact",
    cost: "special (lesser artifacts)",
    source: SRC_SILICON,
    summary:
      "Lesser artifacts — a pair of exotic one-handed melee weapons on 10-foot chains, installed as a set (Dmg (S) 1d10; Dmg (M) 1d12; Critical 19-20/x2; Range Increment —; Weight special; Type slashing). The blades and their chains are fused through the wielder's flesh to his bones; blades and chains have 40 hit points and hardness 20 and cannot be sundered by traditional means. The wielder is considered proficient with the razors, which function as reach weapons that can also strike adjacent foes, and as a standard action the wielder can command the blades to mimic any metal for the purpose of bypassing damage reduction, the change persisting until he changes it again. RITUAL OF LINKING: anarch razors are not items found on the shelf — attaching them requires a ritual that demands the permanent sacrifice of 1 point of Charisma and 1 point of Strength (one sacrifice installs both blades; installation of a single blade is not possible), and the wielder must worship and swear his service to a deity willing to grant the wielder the blades. Once attached, nothing but the deity or the permanent loss of the appendages can take anarch razors away, not even miracle or wish. METTLE OF THE GODS: if some event destroys the blades or chains (such as exposure to a sphere of annihilation or similar powerful artifact), whatever is left of the anarch razors retracts into the appendages of the wielder and remains dormant for 24 hours, after which new chains and blades are reconstituted and available for use. ALL ARE SUBJECT: once the ritual is complete, the wielder is able to use the anarch razors as though he had the Whirlwind Attack feat, regardless of whether he qualifies for the feat (this application is only useful with the anarch razors, not with any other weapon). CHAOTIC WOMB: anarch razors can wrap around enemies, making it difficult for them to extract themselves from a successful grapple; anarch razors grant the wielder a +4 bonus on grapple checks.",
  }),
];
