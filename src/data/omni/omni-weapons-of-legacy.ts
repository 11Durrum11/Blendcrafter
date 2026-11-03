/**
 * Omni sweep wave 2 (2026-11-02): Weapons of Legacy — all 48 legacy
 * items of Chapter 3 (Table 3–1, the book's summary table, cross-
 * checked against each entry's Nonlegacy Game Statistics block),
 * plus the Amulet of Death's Calling, a standard wondrous item
 * printed in a sidebar of the Exordius entry (p. 82) — 49 detailed
 * items in all, matching the count the book's introduction gives. Each record's cost is the
 * book's printed price for the item with its legacy unknown (Table
 * 3–1 footnote: legacy items are otherwise priceless), and each
 * summary gives the base item and the printed legacy ritual costs.
 * One internal price conflict: Divine Spark's own stat block prices
 * it at 1,550 gp while Table 3–1 lists 1,050 gp — the record
 * uses the stat block's 1,550 gp (see the omni-sweep report).
 * Not built: Chapter 4's founding-ritual cost tables and Chapter 5's
 * sample conversions (a legacy holy avenger and a legacy staff of
 * power — conversions of standard items, not new purchasable
 * items), and the Chapter 2 sample cost progressions (rules tables).
 * Prices are the printed prices; summaries are in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const WOL_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "bloodcrier-s-hammer",
    "name": "Bloodcrier’s Hammer",
    "category": "weapon",
    "cost": "2,324 gp",
    "summary": "An earth-powered legacy warhammer, the signature weapon of an ancient dwarven folk hero. Base item: Large +1 warhammer; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,200 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–2; entry p. 29)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bones-of-li-peng",
    "name": "Bones of Li-Peng",
    "category": "weapon",
    "cost": "2,302 gp",
    "summary": "A legacy nunchaku that enhances the monk abilities of its wielder. Base item: +1 nunchaku; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,000 gp (least), 12,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–3; entry p. 33)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bow-of-the-black-archer",
    "name": "Bow of the Black Archer",
    "category": "weapon",
    "cost": "2,375 gp",
    "summary": "A legacy longbow devoted to slaying drow. Base item: +1 longbow; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,625 gp (least), 13,500 gp (lesser), and 38,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–4; entry p. 36)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bright-evening-star",
    "name": "Bright Evening Star",
    "category": "ring",
    "cost": "1,500 gp",
    "summary": "An elven legacy ring of radiance magic. Base item: Bright Evening Star (unique legacy ring); the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 4,000 gp (least), 13,500 gp (lesser), and 43,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–5; entry p. 40)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bullybasher-s-gauntlets",
    "name": "Bullybasher’s Gauntlets",
    "category": "wondrous-hands",
    "cost": "4,604 gp",
    "summary": "Legacy gauntlets that swell the wearer's unarmed combat capabilities. Base item: +1 gauntlets; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,400 gp (least), 12,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–6; entry p. 43)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "caladbolg",
    "name": "Caladbolg",
    "category": "weapon",
    "cost": "2,310 gp",
    "summary": "A legacy short sword that cuts through almost anything. Base item: +1 short sword; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,700 gp (least), 13,500 gp (lesser), and 38,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–7; entry p. 47)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "caput-mortuum",
    "name": "Caput Mortuum",
    "category": "weapon",
    "cost": "2,318 gp",
    "summary": "A legacy scythe favored by death cults. Base item: +1 scythe; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,200 gp (least), 11,500 gp (lesser), and 39,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–8; entry p. 50)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "celdoriath-s-clarion",
    "name": "Celdoriath’s Clarion",
    "category": "wondrous-slotless",
    "cost": "2,500 gp",
    "summary": "A legacy trumpet whose sounding summons aid. Base item: Celdoriath’s Clarion (unique legacy trumpet); the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,800 gp (least), 12,700 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–9; entry p. 53)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "coral-s-bite",
    "name": "Coral’s Bite",
    "category": "weapon",
    "cost": "2,315 gp",
    "summary": "A legacy trident, the implement of aquatic champions. Base item: +1 trident; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,200 gp (least), and 12,000 gp (lesser).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–10; entry p. 57)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "crimson-ruination",
    "name": "Crimson Ruination",
    "category": "weapon",
    "cost": "2,350 gp",
    "summary": "A legacy greatsword, the ultimate bane of red dragons. Base item: +1 greatsword; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,650 gp (least), 13,500 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–11; entry p. 61)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "desert-wind",
    "name": "Desert Wind",
    "category": "weapon",
    "cost": "2,315 gp",
    "summary": "A legacy scimitar of fire and wind. Base item: +1 scimitar; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,000 gp (least), 12,700 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–12; entry p. 64)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "devious",
    "name": "Devious",
    "category": "weapon",
    "cost": "2,308 gp",
    "summary": "A legacy kukri, the counterpart to Vicious; the paired blades share one entry. Base item: +1 kukri; the price shown is the book's price for the item with its legacy unknown. Its single legacy ritual costs 2,000 gp (least).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–13; entry p. 67)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vicious",
    "name": "Vicious",
    "category": "weapon",
    "cost": "2,308 gp",
    "summary": "A legacy kukri, the counterpart to Devious; the paired blades share one entry. Base item: +1 kukri; the price shown is the book's price for the item with its legacy unknown. Its single legacy ritual costs 2,000 gp (least).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–14; entry p. 67)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "divine-spark",
    "name": "Divine Spark",
    "category": "wondrous-slotless",
    "cost": "1,550 gp",
    "summary": "A legacy holy symbol, a tool of faith for the open-minded. Base item: Silver holy symbol of resistance +1; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,450 gp (least), and 11,500 gp (lesser).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–15; entry p. 72)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "durindana",
    "name": "Durindana",
    "category": "weapon",
    "cost": "2,315 gp",
    "summary": "A legacy longsword, a blade of saints. Base item: +1 longsword; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,200 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–16; entry p. 75)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dymondheart",
    "name": "Dymondheart",
    "category": "weapon",
    "cost": "2,315 gp",
    "summary": "A living legacy longsword of the druid lords. Base item: +1 longsword; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,140 gp (least), 13,500 gp (lesser), and 38,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–17; entry p. 78)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "exordius",
    "name": "Exordius",
    "category": "weapon",
    "cost": "2,315 gp",
    "summary": "A legacy longsword: an evil sword redeemed by purity. Base item: +1 longsword; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 3,000 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–18; entry p. 80)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fiendkiller-s-flail",
    "name": "Fiendkiller’s Flail",
    "category": "weapon",
    "cost": "4,330 gp",
    "summary": "A devil-forged legacy flail made for slaying fiends. Base item: Large +1 cold iron flail; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 3,500 gp (least), and 13,000 gp (lesser).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–19; entry p. 83)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flamecaster-s-bolt",
    "name": "Flamecaster’s Bolt",
    "category": "weapon",
    "cost": "2,335 gp",
    "summary": "A fiery legacy light crossbow. Base item: +1 light crossbow; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 4,500 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–20; entry p. 86)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flay",
    "name": "Flay",
    "category": "weapon",
    "cost": "2,301 gp",
    "summary": "A legacy whip with snakelike abilities, fashioned from a giant constrictor's skin. Base item: +1 whip; the price shown is the book's price for the item with its legacy unknown. Its single legacy ritual costs 4,300 gp (least).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–21; entry p. 90)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frostburn-s-wrath",
    "name": "Frostburn’s Wrath",
    "category": "weapon",
    "cost": "2,640 gp",
    "summary": "A legacy quarterstaff that channels the power of winter. Base item: Masterwork/+1 quarterstaff; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 3,200 gp (least), 13,500 gp (lesser), and 39,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–22; entry p. 93)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "full-moon-s-trick",
    "name": "Full Moon’s Trick",
    "category": "weapon",
    "cost": "2,330 gp",
    "summary": "A legacy short sword useful both for and against shapechangers. Base item: Small +1 silver short sword; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 4,300 gp (least), 12,700 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–23; entry p. 96)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ghostfolly-s-gloves",
    "name": "Ghostfolly’s Gloves",
    "category": "wondrous-hands",
    "cost": "2,035 gp",
    "summary": "Legacy gloves, a perfect tool for a heist. Base item: Gloves of protection +1; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 3,700 gp (least), 12,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–24; entry p. 99)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "guurgal",
    "name": "Guurgal",
    "category": "weapon",
    "cost": "4,304 gp",
    "summary": "A legacy spear, the implement of orc warlords. Base item: +1 cold iron spear; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 3,500 gp (least), 13,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–25; entry p. 103)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hammer-of-witches",
    "name": "Hammer of Witches",
    "category": "weapon",
    "cost": "2,312 gp",
    "summary": "A legacy warhammer, a mage-slayer. Base item: +1 warhammer; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 3,500 gp (least), 11,500 gp (lesser), and 39,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–26; entry p. 106)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infiltrator",
    "name": "Infiltrator",
    "category": "armor",
    "cost": "2,100 gp",
    "summary": "Legacy armor ideal for spying. Base item: +1 mithral chain shirt; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 4,300 gp (least), 12,700 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–27; entry p. 109)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lorestealer",
    "name": "Lorestealer",
    "category": "weapon",
    "cost": "2,308 gp",
    "summary": "A legacy throwing axe whose wielder can use scrolls. Base item: +1 throwing axe; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 4,500 gp (least), and 12,500 gp (lesser).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–28; entry p. 112)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mau-jehe",
    "name": "Mau-Jehe",
    "category": "weapon",
    "cost": "2,310 gp",
    "summary": "A legacy short sword: matter made into a mind blade. Base item: +1 short sword; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,200 gp (least), and 12,500 gp (lesser).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–29)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "merikel",
    "name": "Merikel",
    "category": "weapon",
    "cost": "2,350 gp",
    "summary": "A legacy greatsword of temptation or redemption. Base item: +1 greatsword; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 4,500 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–30; entry p. 117)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mindsplinter",
    "name": "Mindsplinter",
    "category": "weapon",
    "cost": "2,308 gp",
    "summary": "A screaming, spiked legacy morningstar. Base item: +1 morningstar; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 4,500 gp (least), 13,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–31; entry p. 120)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "notched-spear",
    "name": "Notched Spear",
    "category": "weapon",
    "cost": "2,305 gp",
    "summary": "A legacy longspear of triton legend. Base item: +1 longspear; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 4,000 gp (least), 13,500 gp (lesser), and 38,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–32; entry p. 124)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "planeshifter-s-knife",
    "name": "Planeshifter’s Knife",
    "category": "weapon",
    "cost": "2,302 gp",
    "summary": "A legacy dagger, the implement of extraplanar travelers. Base item: +1 dagger; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 3,200 gp (least), and 13,500 gp (lesser).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–33; entry p. 126)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quickspur-s-ally",
    "name": "Quickspur’s Ally",
    "category": "shield",
    "cost": "1,170 gp",
    "summary": "A legacy shield of mounted knights. Base item: +1 heavy steel shield; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,500 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–34; entry p. 129)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-trimeg",
    "name": "Rod of Trimeg",
    "category": "weapon",
    "cost": "2,000 gp",
    "summary": "A legacy quarterstaff, a traveler's boon. Base item: Masterwork quarterstaff; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,700 gp (least), 12,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–35; entry p. 133)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "scales-of-balance",
    "name": "Scales of Balance",
    "category": "weapon",
    "cost": "920 gp",
    "summary": "A legacy quarterstaff fusing positive and negative energy. Base item: Masterwork quarterstaff; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 3,600 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–36; entry p. 136)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "scarab-of-aradros",
    "name": "Scarab of Aradros",
    "category": "wondrous-slotless",
    "cost": "1,500 gp",
    "summary": "A legacy scarab, a defender of arcanists. Base item: Scarab of resistance +1; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,500 gp (least), and 13,500 gp (lesser).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–37; entry p. 139)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shishi-o",
    "name": "Shishi-O",
    "category": "weapon",
    "cost": "2,535 gp",
    "summary": "A legacy katana; its wielder is the king of beasts. Base item: +1 katana; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,000 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–38; entry p. 141)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "simple-bow",
    "name": "Simple Bow",
    "category": "weapon",
    "cost": "2,375 gp",
    "summary": "A legacy longbow that opens the eyes and mind. Base item: +1 longbow; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,500 gp (least), 11,000 gp (lesser), and 39,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–39; entry p. 144)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "skull-lash",
    "name": "Skull Lash",
    "category": "weapon",
    "cost": "2,315 gp",
    "summary": "A legacy heavy flail whose bound skulls and abilities are interchangeable. Base item: +1 heavy flail; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,700 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–40; entry p. 147)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sling-of-the-dire-wind",
    "name": "Sling of the Dire Wind",
    "category": "weapon",
    "cost": "2,300 gp",
    "summary": "A legacy sling that slings wind and stones. Base item: +1 sling; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,000 gp (least), 13,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–41; entry p. 150)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-the-torrent-moons",
    "name": "Staff of the Torrent Moons",
    "category": "weapon",
    "cost": "2,720 gp",
    "summary": "A bladed legacy staff of the waters. Base item: Masterwork/+1 lajatang; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,000 gp (least), 12,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–42; entry p. 154)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stalker-s-bow",
    "name": "Stalker’s Bow",
    "category": "weapon",
    "cost": "2,375 gp",
    "summary": "A legacy bow of stealth and hunting. Base item: +1 composite shortbow; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,875 gp (least), 12,700 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–43; entry p. 158)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "steadfast",
    "name": "Steadfast",
    "category": "weapon",
    "cost": "2,315 gp",
    "summary": "A legacy scimitar of movement and stability. Base item: Small +1 scimitar; the price shown is the book's price for the item with its legacy unknown. Its single legacy ritual costs 1,200 gp (least).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–44; entry p. 160)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stormchaser-s-cudgel",
    "name": "Stormchaser’s Cudgel",
    "category": "weapon",
    "cost": "2,310 gp",
    "summary": "A legacy greatclub that bestows the power of the storm. Base item: Large +1 greatclub; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,100 gp (least), 12,500 gp (lesser), and 40,500 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–45; entry p. 163)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thanifex",
    "name": "Thanifex",
    "category": "weapon",
    "cost": "2,325 gp",
    "summary": "A profane legacy greatspear of undeath. Base item: +1 greatspear; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,000 gp (least), 11,500 gp (lesser), and 39,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–46; entry p. 166)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "treebrother",
    "name": "Treebrother",
    "category": "staff",
    "cost": "1,100 gp",
    "summary": "A legacy staff, the tool of the forest warder. Base item: Staff of light; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 2,400 gp (least), and 11,500 gp (lesser).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–47; entry p. 169)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ur",
    "name": "Ur",
    "category": "weapon",
    "cost": "2,306 gp",
    "summary": "A primeval legacy handaxe of animal spirits. Base item: +1 handaxe; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,600 gp (least), 13,500 gp (lesser), and 38,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–48; entry p. 173)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wargird-s-armor",
    "name": "Wargird’s Armor",
    "category": "armor",
    "cost": "1,350 gp",
    "summary": "Legacy armor that protects against all foes. Base item: +1 breastplate; the price shown is the book's price for the item with its legacy unknown. Its legacy rituals cost 1,500 gp (least), 13,000 gp (lesser), and 40,000 gp (greater).",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (Table 3–49; entry p. 176)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-deaths-calling",
    "name": "Amulet of Death’s Calling",
    "category": "wondrous-throat",
    "cost": "2,160 gp",
    "summary": "An amulet of pale alabaster carved into the likeness of a small gong or bell with a skull motif, worn on a blackened steel chain. Once per day on command, it allows the wearer to use death knell as the spell.",
    "source": "Weapons of Legacy — Chapter 3: Items of Legacy (sidebar in the Exordius entry), p. 82",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const WOL_EQUIPMENT_OMNI: EquipmentItem[] = [];
