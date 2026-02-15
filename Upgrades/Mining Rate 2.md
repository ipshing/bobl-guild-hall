---
tags:
  - guild-hall/upgrade
name: Mining Rate 2
wikiLink: https://wiki.guildwars2.com/wiki/Mining_Rate_2
building: "[[Guild Mine]]"
description: "Produce aetherium at a faster rate (from 1 ![[aetherium.png|css: icon]] every 50 seconds to 1 ![[aetherium.png|css: icon]] every 40 seconds or 1.5 per minute)."
level: 12
requires:
  - "[[Mining Rate 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
rate: 40
isComplete: false
order: 4
materials:
  - link: "[[Elder Wood Plank]]"
    count: 400
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 400
    isComplete: false
  - link: "[[Ley-Line Infused Tool]]"
    count: 40
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