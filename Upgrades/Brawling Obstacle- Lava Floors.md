---
tags:
  - guild-hall/upgrade
name: "Brawling Obstacle: Lava Floors"
wikiLink: https://wiki.guildwars2.com/wiki/Brawling_Obstacle:_Lava_Floors
building: "[[Guild Arena]]"
description: Allow decorators in the arena to place floor tiles that will kill players on contact.
level: 40
requires:
  - "[[Brawling Obstacle- Walls]]"
xp: 35
cost:
  favor: 500
  aetherium: 2000
  gold: 0
isComplete: false
order: 23
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