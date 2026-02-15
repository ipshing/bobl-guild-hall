---
tags:
  - guild-hall/upgrade
name: Workshop Restoration 2
wikiLink: https://wiki.guildwars2.com/wiki/Workshop_Restoration_2
building: "[[Guild Workshop]]"
description: Complete the restoration of your workshop.
level: 23
requires:
  - "[[Workshop Restoration 1]]"
xp: 100
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 15
materials:
  - link: "[[Watchwork Sprocket]]"
    count: 500
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 500
    isComplete: false
  - link: "[[Vial of Linseed Oil]]"
    count: 400
    isComplete: false
  - link: "[[Bottle of Airship Oil]]"
    count: 50
    isComplete: false
  - link: "[[Thermocatalytic Reagent]]"
    count: 1000
    isComplete: false
  - link: "[[Orichalcum Ingot]]"
    count: 400
    isComplete: false
  - link: "[[Elonian Leather Square]]"
    count: 50
    isComplete: false
  - link: "[[Quartz Crystal]]"
    count: 400
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```