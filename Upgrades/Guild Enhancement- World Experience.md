---
tags:
  - guild-hall/upgrade
name: "Guild Enhancement: World Experience"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Enhancement:_World_Experience
building: "[[War Room]]"
description: Add a personal enhancement at the tavern that increases the rate of WXP gain.
level: 14
requires:
  - "[[War Room Restoration 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 14
materials:
  - link: "[[Loaf of Saffron Bread]]"
    count: 500
    isComplete: false
  - link: "[[Bottle of Elonian Wine]]"
    count: 20
    isComplete: false
  - link: "[[Badge of Tribute]]"
    count: 10
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