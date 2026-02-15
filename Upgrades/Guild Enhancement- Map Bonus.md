---
tags:
  - guild-hall/upgrade
name: "Guild Enhancement: Map Bonus"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Enhancement:_Map_Bonus
building: "[[Guild Workshop]]"
description: Add a personal enhancement at the tavern that increases how often you get map bonuses.
level: 13
requires:
  - "[[Workshop Restoration 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 1000
  gold: 0
isComplete: false
order: 8
materials:
  - link: "[[Bowl of Lotus Stirfry]]"
    count: 50
    isComplete: false
  - link: "[[Quartz Crystal]]"
    count: 100
    isComplete: false
  - link: "[[Bottle of Elonian Wine]]"
    count: 20
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
  - link: "[[Glass Mug]]"
    count: 20
    isComplete: false
  - link: "[[Empty Keg]]"
    count: 10
    isComplete: false
  - link: "[[Large Bone]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```