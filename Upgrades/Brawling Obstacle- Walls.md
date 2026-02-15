---
tags:
  - guild-hall/upgrade
name: "Brawling Obstacle: Walls"
wikiLink: https://wiki.guildwars2.com/wiki/Brawling_Obstacle:_Walls
building: "[[Guild Arena]]"
description: Add an obstacles coordinator to the arena, allowing players to enter the arena as a decorator and place walls.
level: 12
requires:
  - "[[Arena Restoration 2]]"
xp: 35
cost:
  favor: 200
  aetherium: 2000
  gold: 0
isComplete: false
order: 4
materials:
  - link: "[[Mithril Ingot]]"
    count: 300
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 300
    isComplete: false
  - link: "[[Large Scale]]"
    count: 500
    isComplete: false
  - link: "[[Armored Scale]]"
    count: 10
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```