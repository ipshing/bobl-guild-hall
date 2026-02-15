---
tags:
  - guild-hall/upgrade
name: Mining Rate 1
wikiLink: https://wiki.guildwars2.com/wiki/Mining_Rate_1
building: "[[Guild Mine]]"
description: "Produce aetherium at a faster rate (from 1 ![[aetherium.png|css: icon]] every 60 seconds to 1 ![[aetherium.png|css: icon]] every 50 seconds or 1.2 per minute)."
level: 5
requires:
  - "[[Mine Excavation 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 1500
  gold: 0
rate: 50
isComplete: false
order: 2
materials:
  - link: "[[Elder Wood Plank]]"
    count: 300
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 300
    isComplete: false
  - link: "[[Ley-Line Infused Tool]]"
    count: 20
    isComplete: false
  - link: "[[Silverwastes Shovel]]"
    count: 50
    isComplete: false
  - link: "[[Thermocatalytic Reagent]]"
    count: 350
    isComplete: false
  - link: "[[Pile of Crystalline Dust]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```