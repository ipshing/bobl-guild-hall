---
tags:
  - guild-hall/upgrade
name: Aetherium Capacity 5
wikiLink: https://wiki.guildwars2.com/wiki/Aetherium_Capacity_5
building: "[[Guild Mine]]"
description: "Increase storage capacity for aetherium (from 10,000 ![[aetherium.png|css: icon]] to 15,000 ![[aetherium.png|css: icon]])."
level: 28
requires:
  - "[[Aetherium Capacity 4]]"
xp: 35
cost:
  favor: 500
  aetherium: 10000
  gold: 0
capacity: 15000
isComplete: false
order: 10
materials:
  - link: "[[Elder Wood Plank]]"
    count: 600
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 600
    isComplete: false
  - link: "[[Bloodstone Brick]]"
    count: 45
    isComplete: false
  - link: "[[Superior Rune of Holding]]"
    count: 12
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```