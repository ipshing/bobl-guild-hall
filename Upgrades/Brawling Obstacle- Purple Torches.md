---
tags:
  - guild-hall/upgrade
name: "Brawling Obstacle: Purple Torches"
wikiLink: https://wiki.guildwars2.com/wiki/Brawling_Obstacle:_Purple_Torches
building: "[[Guild Arena]]"
description: Allow decorators in the arena to place purple torches, which can be lit and unlit at will.
level: 28
requires:
  - "[[Brawling Obstacle- Walls]]"
  - "[[Arena Brawling- Free-for-All Fighters]]"
xp: 35
cost:
  favor: 2000
  aetherium: 2000
  gold: 0
isComplete: false
order: 15
materials:
  - link: "[[Unidentified Dye]]"
    count: 25
    isComplete: false
  - link: "[[Eggplant]]"
    count: 1000
    isComplete: false
  - link: "[[Amethyst Lump]]"
    count: 500
    isComplete: false
  - link: "[[Molten Lodestone]]"
    count: 5
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```