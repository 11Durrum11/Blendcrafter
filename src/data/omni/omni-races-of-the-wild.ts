/**
 * Omni sweep Wave 2 (2026-11-02): Races of the Wild — Chapter 7:
 * Equipment and Magic (printed pp. 165–173). Most of this chapter was
 * already cataloged: the weapon special abilities (Blurstrike,
 * Hideaway) and the armor special ability (Woodwalk) at identical
 * prices, the specific armors, the swordbow, and the wondrous items
 * via their Magic Item Compendium reprints (at MIC prices, which
 * differ from this book's — see the omni-sweep report for the
 * conflicts), and the mundane weapons, material armors, and gear via
 * the crystalkeep fan index and the book's own earlier pack. What
 * remained unbuilt was the two other swordbow sizes, the four
 * special arrows, the three elven swords, the elvencraft bow and
 * forestwarden shroud modifications, the thistledown suit, and the
 * four mithral shields. (The leafweave studded leather, leafweave
 * hide, and wildwood chainmail, and the whole honey leather line,
 * turned out to be in the catalog already under inverted names —
 * "Studded Leather, Leafweave" and so on — at identical prices.)
 * The special materials
 * themselves (leafweave, thistledown, wildwood) are pricing rules,
 * not standalone items, and are not built. Prices are the printed
 * prices; summaries and notes are in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const RWILD_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "light-swordbow",
    "name": "Light Swordbow",
    "category": "weapon",
    "cost": "6,650 gp",
    "summary": "A +1 elven weapon that can change between rapier and shortbow form. Its enhancement bonus is the same in either form, and improving the bonus or adding special abilities costs as much as improving two separate weapons; an ability that can apply to only one form applies only in that form.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, p. 171",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "great-swordbow",
    "name": "Great Swordbow",
    "category": "weapon",
    "cost": "7,150 gp",
    "summary": "A +1 elven weapon that can change between greatsword and composite longbow form (the example given has a +4 Strength rating). Its enhancement bonus is the same in either form, and improving the bonus or adding special abilities costs as much as improving two separate weapons; an ability that can apply to only one form applies only in that form.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, p. 171",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const RWILD_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "arrow-blunt-20",
    "name": "Arrow, Blunt (20)",
    "category": "ammunition",
    "cost": "1 gp",
    "weight": "3 lb.",
    "notes": "Twenty blunt-headed arrows. They deal bludgeoning damage rather than piercing damage, and that damage is nonlethal rather than lethal.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–1, p. 165",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "arrow-dragonsbreath-20",
    "name": "Arrow, Dragonsbreath (20)",
    "category": "ammunition",
    "cost": "50 gp",
    "weight": "3 lb.",
    "notes": "Twenty arrows with resin-soaked shafts and heads holding a dab of alchemist's fire, which ignite in flight. A hit deals 1 extra point of fire damage, and the target must succeed on a DC 15 Reflex save or catch on fire. A dragonsbreath arrow cannot be reused after a miss.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–1, p. 165",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "arrow-serpentstongue-20",
    "name": "Arrow, Serpentstongue (20)",
    "category": "ammunition",
    "cost": "3 gp",
    "weight": "3 lb.",
    "notes": "Twenty arrows with forked, sharp-edged points. They deal both piercing and slashing damage, and deal full damage (rather than the usual half) to objects with a hardness of 5 or less, making them useful for cutting ropes and straps.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–1, p. 165",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "arrow-swiftwing-20",
    "name": "Arrow, Swiftwing (20)",
    "category": "ammunition",
    "cost": "20 gp",
    "weight": "3 lb.",
    "notes": "Twenty slightly overlong arrows with small heads and enlarged fletching for stability at long range. A swiftwing arrow takes only half the usual range penalty (–1 per range increment instead of –2).",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–1, p. 165",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-elven-lightblade",
    "name": "Sword, Elven Lightblade",
    "category": "weapon",
    "cost": "50 gp",
    "weight": "1 lb.",
    "notes": "Exotic light melee weapon dealing 1d6 points of piercing damage (18–20/×2) for a Medium wielder, though it weighs only as much as a dagger. A proficient wielder may treat it as a rapier or a short sword for feats such as Weapon Focus, Weapon Specialization, Improved Critical, and their greater versions, and can use Weapon Finesse with it.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–1, p. 165; description p. 167",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-elven-thinblade",
    "name": "Sword, Elven Thinblade",
    "category": "weapon",
    "cost": "100 gp",
    "weight": "3 lb.",
    "notes": "Exotic one-handed melee weapon dealing 1d8 points of piercing damage (18–20/×2) for a Medium wielder. A wielder can use Weapon Finesse with it, and a proficient wielder may treat it as a rapier or a longsword for feats such as Weapon Focus, Weapon Specialization, Improved Critical, and their greater versions.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–1, p. 165; description p. 167",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-elven-courtblade",
    "name": "Sword, Elven Courtblade",
    "category": "weapon",
    "cost": "150 gp",
    "weight": "6 lb.",
    "notes": "Exotic two-handed melee weapon dealing 1d10 points of piercing or slashing damage (18–20/×2) for a Medium wielder. A wielder can use Weapon Finesse with it despite its size, and a proficient wielder may treat it as a greatsword for feats such as Weapon Focus, Weapon Specialization, Improved Critical, and their greater versions.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–1, p. 165; description p. 167",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elvencraft-bow",
    "name": "Elvencraft Bow",
    "category": "weapon",
    "cost": "+300 gp",
    "weight": "—",
    "notes": "A bow built stout enough to serve as a melee weapon: an elvencraft shortbow functions as a club and an elvencraft longbow as a quarterstaff, with no penalty on melee attack rolls. The wielder threatens the squares around him and can mix melee and ranged attacks freely in a round. Enhancements to its melee use must be added separately from enhancements to its use as a bow. Costs 300 gp more than a normal bow of its type.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, p. 166",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "forestwarden-shroud",
    "name": "Forestwarden Shroud",
    "category": "gear",
    "cost": "100 gp",
    "weight": "2 lb.",
    "notes": "A slick tunic and leggings worn over a suit of armor, or built into the armor at creation. Its surface lets brush slide past, so undergrowth and heavy undergrowth do not hamper the wearer's Tumble and Move Silently checks. Adds 2 pounds to the weight of the armor worn.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, p. 167",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thistledown-suit",
    "name": "Thistledown Suit",
    "category": "gear",
    "cost": "250 gp",
    "weight": "—",
    "notes": "A quilted thistledown underlayer that can replace the fabric padding of any armor that normally incorporates one, such as a chain shirt or most metal medium and heavy armors. It increases the armor's armor check penalty by 1 but reduces its arcane spell failure chance by 5%. It adds no weight to the armor.",
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, p. 168",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "buckler-mithral",
    "name": "Buckler, Mithral",
    "category": "shield",
    "cost": "1,015 gp",
    "weight": "2-1/2 lb.",
    "notes": "A buckler made of mithral: +1 shield bonus, no armor check penalty, and no arcane spell failure chance.",
    "acBonus": 1,
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–2, p. 168",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-light-mithral",
    "name": "Shield, Light Mithral",
    "category": "shield",
    "cost": "1,009 gp",
    "weight": "3 lb.",
    "notes": "A light shield made of mithral: +1 shield bonus, no armor check penalty, and no arcane spell failure chance.",
    "acBonus": 1,
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–2, p. 168",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-heavy-mithral",
    "name": "Shield, Heavy Mithral",
    "category": "shield",
    "cost": "1,020 gp",
    "weight": "7-1/2 lb.",
    "notes": "A heavy shield made of mithral: +2 shield bonus, no armor check penalty, and a 5% arcane spell failure chance.",
    "acBonus": 2,
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–2, p. 168",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-mithral-tower",
    "name": "Shield, Mithral Tower",
    "category": "shield",
    "cost": "1,030 gp",
    "weight": "50 lb.",
    "notes": "A tower shield made of mithral: +4 shield bonus, maximum Dexterity bonus +4, armor check penalty –7, and a 40% arcane spell failure chance. As with any tower shield, it can instead grant total cover.",
    "acBonus": 4,
    "source": "Races of the Wild — Chapter 7: Equipment and Magic, Table 7–2, p. 168",
    "sourceUrl": "",
    "ruleset": "core"
  },

];
