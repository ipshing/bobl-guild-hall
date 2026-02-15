---
tags:
  - guild-hall/upgrade
name: "Brawling Obstacle: White Torches"
wikiLink: https://wiki.guildwars2.com/wiki/Brawling_Obstacle:_White_Torches
building: "[[Guild Arena]]"
description: Allow decorators in the arena to place white torches, which can be lit and unlit at will.
level: 39
requires:
  - "[[Brawling Obstacle- Walls]]"
  - "[[Arena Brawling- Invulnerable Fighters]]"
xp: 35
cost:
  favor: 200
  aetherium: 2000
  gold: 0
isComplete: false
order: 21
materials:
  - link: "[[Unidentified Dye]]"
    count: 20
    isComplete: false
  - link: "[[Pearl]]"
    count: 100
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 200
    isComplete: false
  - link: "[[Pile of Crystalline Dust]]"
    count: 5
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```