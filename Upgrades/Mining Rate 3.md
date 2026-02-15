---
tags:
  - guild-hall/upgrade
name: Mining Rate 3
wikiLink: https://wiki.guildwars2.com/wiki/Mining_Rate_3
building: "[[Guild Mine]]"
description: "Produce aetherium at a faster rate (from 1 ![[aetherium.png|css: icon]] every 40 seconds to 1 ![[aetherium.png|css: icon]] every 30 seconds or 2 per minute)."
level: 18
requires:
  - "[[Mine Excavation 2]]"
  - "[[Mining Rate 2]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
rate: 30
isComplete: false
order: 7
materials:
  - link: "[[Elder Wood Plank]]"
    count: 450
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 450
    isComplete: false
  - link: "[[Ley-Line Infused Tool]]"
    count: 65
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