---
tags:
  - guild-hall/upgrade
name: "Guild Enhancement: Magic Find"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Enhancement:_Magic_Find
building: "[[Guild Market]]"
description: Add a personal enhancement at the tavern that increases the chance of finding magic items.
level: 14
requires:
  - "[[Market Restoration 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 6
materials:
  - link: "[[Chocolate Omnomberry Cream]]"
    count: 100
    isComplete: false
  - link: "[[Bottle of Elonian Wine]]"
    count: 20
    isComplete: false
  - link: "[[Exotic Essence of Luck]]"
    count: 100
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
  - link: "[[Glass Mug]]"
    count: 20
    isComplete: false
  - link: "[[Empty Keg]]"
    count: 10
    isComplete: false
  - link: "[[Intricate Totem]]"
    count: 50
    isComplete: false
  - link: "[[Pile of Incandescent Dust]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```