---
tags:
  - guild-hall/upgrade
name: War Room Restoration 1
wikiLink: https://wiki.guildwars2.com/wiki/War_Room_Restoration_1
building: "[[War Room]]"
description: Begin restoring your war room.
level: 4
requires:
  - "[[Workshop Restoration 1]]"
xp: 100
cost:
  favor: 250
  aetherium: 500
  gold: 0
isComplete: false
order: 0
materials:
  - link: "[[Elder Wood Plank]]"
    count: 500
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 500
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 35
    isComplete: false
  - link: "[[Dragonite Ingot]]"
    count: 5
    isComplete: false
  - link: "[[Spiritwood Plank]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```