---
tags:
  - guild-hall/upgrade
name: Aetherium Capacity 2
wikiLink: https://wiki.guildwars2.com/wiki/Aetherium_Capacity_2
building: "[[Guild Mine]]"
description: "Increase storage capacity for aetherium (from 1,500 ![[aetherium.png|css: icon]] to 3,000 ![[aetherium.png|css: icon]])."
level: 8
requires:
  - "[[Aetherium Capacity 1]]"
xp: 35
cost:
  favor: 200
  aetherium: 1500
  gold: 0
capacity: 3000
isComplete: false
order: 3
materials:
  - link: "[[Elder Wood Plank]]"
    count: 400
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 400
    isComplete: false
  - link: "[[Bloodstone Brick]]"
    count: 30
    isComplete: false
  - link: "[[Rune of Holding]]"
    count: 200
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```