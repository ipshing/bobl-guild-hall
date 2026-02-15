---
tags:
  - guild-hall/upgrade
name: Aetherium Capacity 4
wikiLink: https://wiki.guildwars2.com/wiki/Aetherium_Capacity_4
building: "[[Guild Mine]]"
description: "Increase storage capacity for aetherium (from 5,000 ![[aetherium.png|css: icon]] to 10,000 ![[aetherium.png|css: icon]])."
level: 21
requires:
  - "[[Aetherium Capacity 3]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
capacity: 10000
isComplete: false
order: 8
materials:
  - link: "[[Elder Wood Plank]]"
    count: 500
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 500
    isComplete: false
  - link: "[[Bloodstone Brick]]"
    count: 40
    isComplete: false
  - link: "[[Greater Rune of Holding]]"
    count: 35
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```