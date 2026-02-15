---
tags:
  - guild-hall/upgrade
name: Aetherium Capacity 3
wikiLink: https://wiki.guildwars2.com/wiki/Aetherium_Capacity_3
building: "[[Guild Mine]]"
description: "Increase storage capacity for aetherium (from 3,000 ![[aetherium.png|css: icon]] to 5,000 ![[aetherium.png|css: icon]])."
level: 15
requires:
  - "[[Mine Excavation 2]]"
  - "[[Aetherium Capacity 2]]"
xp: 35
cost:
  favor: 500
  aetherium: 3000
  gold: 0
capacity: 5000
isComplete: false
order: 6
materials:
  - link: "[[Elder Wood Plank]]"
    count: 450
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 450
    isComplete: false
  - link: "[[Bloodstone Brick]]"
    count: 35
    isComplete: false
  - link: "[[Major Rune of Holding]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```