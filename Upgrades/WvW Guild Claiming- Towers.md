---
tags:
  - guild-hall/upgrade
name: "WvW Guild Claiming: Towers"
wikiLink: https://wiki.guildwars2.com/wiki/WvW_Guild_Claiming:_Towers
building: "[[War Room]]"
description: Allow guild members with the proper permissions to claim a tower for the guild, allowing it to gain access to upgrades over time.
level: 10
requires:
  - "[[WvW Guild Claiming- Camps]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 10
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
    count: 80
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```