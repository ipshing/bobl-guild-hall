---
tags:
  - guild-hall/upgrade
name: Guild Trader 1
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Trader_1
building: "[[Guild Market]]"
description: Add a trader merchant to the market whose stock rotates daily. Guild members may purchase only one item each day.
level: 8
requires:
  - "[[Market Restoration 1]]"
xp: 35
cost:
  favor: 100
  aetherium: 1000
  gold: 0
isComplete: false
order: 3
materials:
  - link: "[[Ancient Wood Plank]]"
    count: 50
    isComplete: false
  - link: "[[Orichalcum Ingot]]"
    count: 50
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Bolt of Gossamer]]"
    count: 50
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 50
    isComplete: false
  - link: "[[Mystic Coin]]"
    count: 25
    isComplete: false
  - link: "[[Trading Post Express]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```