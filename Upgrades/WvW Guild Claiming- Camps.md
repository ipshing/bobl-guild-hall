---
tags:
  - guild-hall/upgrade
name: "WvW Guild Claiming: Camps"
wikiLink: https://wiki.guildwars2.com/wiki/WvW_Guild_Claiming:_Camps
building: "[[War Room]]"
description: Allow guild members with the proper permissions to claim a supply camp for the guild, allowing it to gain access to upgrades over time.
level: 5
requires:
  - "[[War Room Restoration 1]]"
xp: 35
cost:
  favor: 250
  aetherium: 500
  gold: 0
isComplete: false
order: 2
materials:
  - link: "[[Badge of Tribute]]"
    count: 15
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 250
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 250
    isComplete: false
  - link: "[[Rune of Holding]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```