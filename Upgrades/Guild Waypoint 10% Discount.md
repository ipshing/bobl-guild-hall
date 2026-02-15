---
tags:
  - guild-hall/upgrade
name: Guild Waypoint 10% Discount
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Waypoint_10%25_Discount
building: "[[Guild Tavern]]"
description: Reduce the cost of using waypoints by 10% for all guild members.
level: 27
requires:
  - "[[Tavern Restoration 2]]"
  - "[[Guild Waypoint 5% Discount]]"
xp: 35
cost:
  favor: 800
  aetherium: 10000
  gold: 0
isComplete: false
order: 19
materials:
  - link: "[[Tome of Knowledge]]"
    count: 100
    isComplete: false
  - link: "[[Shard of Glory]]"
    count: 500
    isComplete: false
  - link: "[[Badge of Tribute]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```