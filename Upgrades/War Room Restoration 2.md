---
tags:
  - guild-hall/upgrade
name: War Room Restoration 2
wikiLink: https://wiki.guildwars2.com/wiki/War_Room_Restoration_2
building: "[[War Room]]"
description: Complete the restoration of your war room.
level: 20
requires:
  - "[[War Room Restoration 1]]"
xp: 100
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 20
materials:
  - link: "[[Badge of Tribute]]"
    count: 30
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 1000
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 1000
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 200
    isComplete: false
  - link: "[[Dragonite Ingot]]"
    count: 10
    isComplete: false
  - link: "[[Spiritwood Plank]]"
    count: 10
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```