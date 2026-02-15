---
tags:
  - guild-hall/upgrade
name: Guild Trader 2
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Trader_2
building: "[[Guild Market]]"
description: Expand the trader's inventory to include random crafting-related items.
level: 16
requires:
  - "[[Guild Trader 1]]"
xp: 35
cost:
  favor: 500
  aetherium: 3000
  gold: 0
isComplete: false
order: 7
materials:
  - link: "[[Ancient Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Orichalcum Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Bolt of Gossamer]]"
    count: 100
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 70
    isComplete: false
  - link: "[[Mystic Coin]]"
    count: 50
    isComplete: false
  - link: "[[Trading Post Express]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```