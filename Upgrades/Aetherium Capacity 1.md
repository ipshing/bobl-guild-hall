---
tags:
  - guild-hall/upgrade
name: Aetherium Capacity 1
wikiLink: https://wiki.guildwars2.com/wiki/Aetherium_Capacity_1
building: "[[Guild Mine]]"
description: "Increase storage capacity for aetherium (from 500 ![[aetherium.png|css: icon]] to 1,500 ![[aetherium.png|css: icon]])."
level: 2
requires:
  - "[[Mine Excavation 1]]"
xp: 35
cost:
  favor: 50
  aetherium: 500
  gold: 0
capacity: 1500
isComplete: false
order: 1
materials:
  - link: "[[Elder Wood Plank]]"
    count: 150
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 150
    isComplete: false
  - link: "[[Bloodstone Brick]]"
    count: 20
    isComplete: false
  - link: "[[Minor Rune of Holding]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```