---
tags:
  - guild-hall/upgrade
name: Mine Excavation 3
wikiLink: https://wiki.guildwars2.com/wiki/Mine_Excavation_3
building: "[[Guild Mine]]"
description: Expand your guild's mine.
level: 31
requires:
  - "[[Mine Excavation 2]]"
xp: 100
cost:
  favor: 500
  aetherium: 15000
  gold: 0
isComplete: false
order: 11
materials:
  - link: "[[Elder Wood Plank]]"
    count: 1500
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 1500
    isComplete: false
  - link: "[[Silverwastes Shovel]]"
    count: 150
    isComplete: false
  - link: "[[18 Slot Thick Leather Pack]]"
    count: 10
    isComplete: false
  - link: "[[Vial of Linseed Oil]]"
    count: 100
    isComplete: false
  - link: "[[Molten Lodestone]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```