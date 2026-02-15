---
tags:
  - guild-hall/upgrade
name: "WvW Guild Claiming: Stonemist Castle"
wikiLink: https://wiki.guildwars2.com/wiki/WvW_Guild_Claiming:_Stonemist_Castle
building: "[[War Room]]"
description: Allow guild members with the proper permissions to claim Stonemist Castle for the guild, allowing it to gain access to upgrades over time.
level: 31
requires:
  - "[[WvW Guild Claiming- Keeps]]"
xp: 35
cost:
  favor: 300
  aetherium: 15000
  gold: 0
isComplete: false
order: 35
materials:
  - link: "[[Badge of Tribute]]"
    count: 20
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 200
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 200
    isComplete: false
  - link: "[[Superior Rune of Holding]]"
    count: 10
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```