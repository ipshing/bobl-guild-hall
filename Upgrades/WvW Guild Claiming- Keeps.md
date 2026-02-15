---
tags:
  - guild-hall/upgrade
name: "WvW Guild Claiming: Keeps"
wikiLink: https://wiki.guildwars2.com/wiki/WvW_Guild_Claiming:_Keeps
building: "[[War Room]]"
description: Allow guild members with the proper permissions to claim a keep for the guild, allowing it to gain access to upgrades over time.
level: 22
requires:
  - "[[War Room Restoration 2]]"
  - "[[WvW Guild Claiming- Towers]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 25
materials:
  - link: "[[Badge of Tribute]]"
    count: 20
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 250
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 250
    isComplete: false
  - link: "[[Major Rune of Holding]]"
    count: 33
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```