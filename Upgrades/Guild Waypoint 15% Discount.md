---
tags:
  - guild-hall/upgrade
name: Guild Waypoint 15% Discount
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Waypoint_15%25_Discount
building: "[[Guild Tavern]]"
description: Reduce the cost of using waypoints by 15% for all guild members.
level: 40
requires:
  - "[[Guild Waypoint 10% Discount]]"
xp: 35
cost:
  favor: 1000
  aetherium: 25000
  gold: 0
isComplete: false
order: 25
materials:
  - link: "[[Tome of Knowledge]]"
    count: 200
    isComplete: false
  - link: "[[Shard of Glory]]"
    count: 1000
    isComplete: false
  - link: "[[Badge of Tribute]]"
    count: 200
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```