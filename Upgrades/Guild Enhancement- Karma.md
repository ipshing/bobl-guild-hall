---
tags:
  - guild-hall/upgrade
name: "Guild Enhancement: Karma"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Enhancement:_Karma
building: "[[Guild Tavern]]"
description: Add a selectable personal enhancement at the tavern which will increase the rate of karma gain.
level: 1
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 50
  aetherium: 0
  gold: 0
isComplete: false
order: 1
materials:
  - link: "[[Bowl of Saffron-Mango Ice Cream]]"
    count: 40
    isComplete: false
  - link: "[[Bottle of Elonian Wine]]"
    count: 30
    isComplete: false
  - link: "[[Obsidian Shard]]"
    count: 20
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 10
    isComplete: false
  - link: "[[Glass Mug]]"
    count: 20
    isComplete: false
  - link: "[[Empty Keg]]"
    count: 10
    isComplete: false
  - link: "[[Large Claw]]"
    count: 50
    isComplete: false
  - link: "[[Large Fang]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```
