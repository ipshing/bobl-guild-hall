---
tags:
  - guild-hall/upgrade
name: Guild Weaponsmith 2
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Weaponsmith_2
building: "[[Guild Market]]"
description: Add recipes for chiaroscuro weapons to the guild weaponsmith's inventory.
level: 40
requires:
  - "[[Market Restoration 2]]"
  - "[[Guild Weaponsmith 1]]"
xp: 35
cost:
  favor: 500
  aetherium: 10000
  gold: 0
isComplete: false
order: 22
materials:
  - link: "[[Orichalcum Ingot]]"
    count: 200
    isComplete: false
  - link: "[[Ancient Wood Plank]]"
    count: 200
    isComplete: false
  - link: "[[Milling Stone]]"
    count: 200
    isComplete: false
  - link: "[[Celestial Orichalcum Imbued Inscription]]"
    count: 10
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```