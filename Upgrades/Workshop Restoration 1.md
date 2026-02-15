---
tags:
  - guild-hall/upgrade
name: Workshop Restoration 1
wikiLink: https://wiki.guildwars2.com/wiki/Workshop_Restoration_1
building: "[[Guild Workshop]]"
description: Begin restoring your workshop.
level: 3
requires:
  - "[[Mine Excavation 1]]"
xp: 100
cost:
  favor: 150
  aetherium: 1500
  gold: 0
isComplete: false
order: 0
materials:
  - link: "[[Watchwork Sprocket]]"
    count: 200
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 200
    isComplete: false
  - link: "[[Vial of Linseed Oil]]"
    count: 50
    isComplete: false
  - link: "[[Bottle of Airship Oil]]"
    count: 20
    isComplete: false
  - link: "[[Thermocatalytic Reagent]]"
    count: 200
    isComplete: false
  - link: "[[Orichalcum Ingot]]"
    count: 50
    isComplete: false
  - link: "[[Elonian Leather Square]]"
    count: 5
    isComplete: false
  - link: "[[Quartz Crystal]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```