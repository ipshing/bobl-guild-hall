---
tags:
  - guild-hall/upgrade
name: "Guild Enhancement: Experience"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Enhancement:_Experience
building: "[[Guild Tavern]]"
description: Add a selectable personal enhancement at the tavern which will increase the rate of experience gain.
level: 1
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 50
  aetherium: 0
  gold: 0
isComplete: false
order: 2
materials:
  - link: "[[Meat Pie]]"
    count: 100
    isComplete: false
  - link: "[[Bottle of Elonian Wine]]"
    count: 30
    isComplete: false
  - link: "[[Tome of Knowledge]]"
    count: 10
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 10
    isComplete: false
  - link: "[[Glass Mug]]"
    count: 10
    isComplete: false
  - link: "[[Empty Keg]]"
    count: 10
    isComplete: false
  - link: "[[Intricate Totem]]"
    count: 50
    isComplete: false
  - link: "[[Pile of Incandescent Dust]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```