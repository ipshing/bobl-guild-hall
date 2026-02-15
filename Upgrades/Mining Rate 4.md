---
tags:
  - guild-hall/upgrade
name: Mining Rate 4
wikiLink: https://wiki.guildwars2.com/wiki/Mining_Rate_4
building: "[[Guild Mine]]"
description: "Produce aetherium at a faster rate (from 1 ![[aetherium.png|css: icon]] every 30 seconds to 1 ![[aetherium.png|css: icon]] every 25 seconds or 2.4 per minute)."
level: 25
requires:
  - "[[Mining Rate 3]]"
xp: 35
cost:
  favor: 300
  aetherium: 10000
  gold: 0
rate: 25
isComplete: false
order: 9
materials:
  - link: "[[Elder Wood Plank]]"
    count: 500
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 500
    isComplete: false
  - link: "[[Ley-Line Infused Tool]]"
    count: 100
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