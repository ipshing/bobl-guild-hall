---
tags:
  - guild-hall/upgrade
name: "Arena Brawling: Green Team"
wikiLink: https://wiki.guildwars2.com/wiki/Arena_Brawling:_Green_Team
building: "[[Guild Arena]]"
description: Add a green team coordinator to the arena, allowing for three-way team brawling.
level: 18
requires:
  - "[[Arena Restoration 2]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 7
materials:
  - link: "[[Shard of Glory]]"
    count: 250
    isComplete: false
  - link: "[[Emerald Orb]]"
    count: 500
    isComplete: false
  - link: "[[Green Wood Plank]]"
    count: 500
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```