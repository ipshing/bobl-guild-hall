---
tags:
  - guild-hall/upgrade
name: Guild Weaponsmith 1
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Weaponsmith_1
building: "[[Guild Market]]"
description: Add a guild weaponsmith to the market, selling a selection of guild weapon skins.
level: 12
requires:
  - "[[Market Restoration 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 5
materials:
  - link: "[[Orichalcum Ingot]]"
    count: 150
    isComplete: false
  - link: "[[Ancient Wood Plank]]"
    count: 150
    isComplete: false
  - link: "[[Milling Stone]]"
    count: 100
    isComplete: false
  - link: "[[Celestial Orichalcum Imbued Inscription]]"
    count: 4
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```