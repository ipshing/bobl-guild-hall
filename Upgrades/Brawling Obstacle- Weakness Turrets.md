---
tags:
  - guild-hall/upgrade
name: "Brawling Obstacle: Weakness Turrets"
wikiLink: https://wiki.guildwars2.com/wiki/Brawling_Obstacle:_Weakness_Turrets
building: "[[Guild Arena]]"
description: Allow decorators in the arena to place turrets that weaken nearby combatants.
level: 14
requires:
  - "[[Arena Restoration 2]]"
xp: 35
cost:
  favor: 200
  aetherium: 2000
  gold: 0
isComplete: false
order: 5
materials:
  - link: "[[Mithril Ingot]]"
    count: 300
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 300
    isComplete: false
  - link: "[[Large Bone]]"
    count: 500
    isComplete: false
  - link: "[[Ancient Bone]]"
    count: 10
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```