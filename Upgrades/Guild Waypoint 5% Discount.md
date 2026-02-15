---
tags:
  - guild-hall/upgrade
name: Guild Waypoint 5% Discount
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Waypoint_5%25_Discount
building: "[[Guild Tavern]]"
description: Reduce the cost of using waypoints by 5% for all guild members.
level: 13
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 500
  aetherium: 3000
  gold: 0
isComplete: false
order: 9
materials:
  - link: "[[Tome of Knowledge]]"
    count: 50
    isComplete: false
  - link: "[[Shard of Glory]]"
    count: 250
    isComplete: false
  - link: "[[Badge of Tribute]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```