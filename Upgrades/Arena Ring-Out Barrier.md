---
tags:
  - guild-hall/upgrade
name: Arena Ring-Out Barrier
wikiLink: https://wiki.guildwars2.com/wiki/Arena_Ring-Out_Barrier
building: "[[Guild Arena]]"
description: Add an option for the obstacles coordinator to turn on a boundary around the brawling arena to prevent ring-outs.
level: 23
requires:
  - "[[Brawling Obstacle- Walls]]"
xp: 35
cost:
  favor: 200
  aetherium: 3000
  gold: 0
isComplete: false
order: 11
materials:
  - link: "[[Vial of Potent Blood]]"
    count: 200
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 45
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 200
    isComplete: false
  - link: "[[Obsidian Shard]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```