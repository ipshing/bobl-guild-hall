---
tags:
  - guild-hall/upgrade
name: Mine Excavation 1
wikiLink: https://wiki.guildwars2.com/wiki/Mine_Excavation_1
building: "[[Guild Mine]]"
description: Excavate the beginnings of a mine for your guild hall and begin mining aetherium out of the stone.
level: 2
requires:
  - "[[Tavern Restoration 1]]"
xp: 100
cost:
  favor: 150
  aetherium: 0
  gold: 0
isComplete: false
order: 0
materials:
  - link: "[[Elder Wood Plank]]"
    count: 200
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 200
    isComplete: false
  - link: "[[Silverwastes Shovel]]"
    count: 50
    isComplete: false
  - link: "[[18 Slot Thick Leather Pack]]"
    count: 4
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```