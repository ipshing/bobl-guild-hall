---
tags:
  - guild-hall/upgrade
name: "Arena Brawling: Invulnerable Fighters"
wikiLink: https://wiki.guildwars2.com/wiki/Arena_Brawling:_Invulnerable_Fighters
building: "[[Guild Arena]]"
description: Add an invulnerability coordinator to the arena, allowing for brawling without taking damage.
level: 39
requires:
  - "[[Arena Restoration 2]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 22
materials:
  - link: "[[18 Slot Invisible Bag]]"
    count: 7
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 500
    isComplete: false
  - link: "[[Shard of Glory]]"
    count: 250
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```