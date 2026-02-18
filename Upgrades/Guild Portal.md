---
tags:
  - guild-hall/upgrade
name: Guild Portal
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Portal_(upgrade)
building: "[[Guild Iniative Headquarters]]"
description: Add a portal device to the guild hall, allowing guild members to quickly travel as a group to missions and other destinations.
level: 10
requires:
  - "[[Guild Hall Upgrades]]"
xp: 100
cost:
  favor: 500
  aetherium: 3000
  gold: 0
isComplete: false
order: 6
materials:
  - link: "[[Glob of Ectoplasm]]"
    count: 50
    isComplete: false
  - link: "[[Watchwork Portal Device]]"
    count: 10
    isComplete: false
  - link: "[[Pile of Incandescent Dust]]"
    count: 100
    isComplete: false
  - link: "[[Orichalcum Ingot]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```