---
tags:
  - guild-hall/upgrade
name: "Guild Enhancement: Critical Crafting"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Enhancement:_Critical_Crafting
building: "[[Guild Workshop]]"
description: Add a personal enhancement at the tavern that increases the chance of getting a critical success when crafting an item.
level: 9
requires:
  - "[[Workshop Restoration 1]]"
xp: 35
cost:
  favor: 100
  aetherium: 1500
  gold: 0
isComplete: false
order: 6
materials:
  - link: "[[Large Claw]]"
    count: 300
    isComplete: false
  - link: "[[Quartz Crystal]]"
    count: 100
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 30
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
  - link: "[[Potent Venom Sac]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```