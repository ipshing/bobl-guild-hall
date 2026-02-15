---
tags:
  - guild-hall/upgrade
name: Mine Excavation 2
wikiLink: https://wiki.guildwars2.com/wiki/Mine_Excavation_2
building: "[[Guild Mine]]"
description: Expand your guild's mine.
level: 15
requires:
  - "[[Mine Excavation 1]]"
xp: 100
cost:
  favor: 500
  aetherium: 3000
  gold: 0
isComplete: false
order: 5
materials:
  - link: "[[Elder Wood Plank]]"
    count: 1000
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 1000
    isComplete: false
  - link: "[[Silverwastes Shovel]]"
    count: 100
    isComplete: false
  - link: "[[18 Slot Thick Leather Pack]]"
    count: 7
    isComplete: false
  - link: "[[Vial of Linseed Oil]]"
    count: 50
    isComplete: false
  - link: "[[Molten Lodestone]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```