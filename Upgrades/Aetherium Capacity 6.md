---
tags:
  - guild-hall/upgrade
name: Aetherium Capacity 6
wikiLink: https://wiki.guildwars2.com/wiki/Aetherium_Capacity_6
building: "[[Guild Mine]]"
description: "Increase storage capacity for aetherium (from 15,000 ![[aetherium.png|css: icon]] to 25,000 ![[aetherium.png|css: icon]])."
level: 34
requires:
  - "[[Mine Excavation 3]]"
  - "[[Aetherium Capacity 5]]"
xp: 35
cost:
  favor: 500
  aetherium: 15000
  gold: 0
capacity: 25000
isComplete: false
order: 13
materials:
  - link: "[[Elder Wood Plank]]"
    count: 1000
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 1000
    isComplete: false
  - link: "[[Bloodstone Brick]]"
    count: 50
    isComplete: false
  - link: "[[Superior Rune of Holding]]"
    count: 15
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```