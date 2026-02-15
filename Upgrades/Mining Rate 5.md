---
tags:
  - guild-hall/upgrade
name: Mining Rate 5
wikiLink: https://wiki.guildwars2.com/wiki/Mining_Rate_5
building: "[[Guild Mine]]"
description: "Produce aetherium at a faster rate (from 1 ![[aetherium.png|css: icon]] every 25 seconds to 1 ![[aetherium.png|css: icon]] every 20 seconds or 3 per minute)."
level: 31
requires:
  - "[[Mine Excavation 3]]"
  - "[[Mining Rate 4]]"
xp: 35
cost:
  favor: 300
  aetherium: 15000
  gold: 0
rate: 20
isComplete: false
order: 12
materials:
  - link: "[[Elder Wood Plank]]"
    count: 600
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 600
    isComplete: false
  - link: "[[Ley-Line Infused Tool]]"
    count: 150
    isComplete: false
  - link: "[[Silverwastes Shovel]]"
    count: 50
    isComplete: false
  - link: "[[Thermocatalytic Reagent]]"
    count: 500
    isComplete: false
  - link: "[[Pile of Crystalline Dust]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```