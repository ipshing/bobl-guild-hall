---
tags:
  - guild-hall/upgrade
name: Mining Rate 6
wikiLink: https://wiki.guildwars2.com/wiki/Mining_Rate_6
building: "[[Guild Mine]]"
description: "Produce aetherium at a faster rate (from 1 ![[aetherium.png|css: icon]] every 20 seconds to 1 ![[aetherium.png|css: icon]] every 15 seconds or 4 per minute)."
level: 37
requires:
  - "[[Mining Rate 5]]"
xp: 35
cost:
  favor: 500
  aetherium: 20000
  gold: 0
rate: 15
isComplete: false
order: 14
materials:
  - link: "[[Elder Wood Plank]]"
    count: 800
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 800
    isComplete: false
  - link: "[[Ley-Line Infused Tool]]"
    count: 200
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