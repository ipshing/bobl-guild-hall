---
tags:
  - guild-hall/upgrade
name: Guild Trader 3
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Trader_3
building: "[[Guild Market]]"
description: Guild members may now purchase 2 items from the guild trader per day.
level: 24
requires:
  - "[[Market Restoration 2]]"
  - "[[Guild Trader 2]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 13
materials:
  - link: "[[Ancient Wood Plank]]"
    count: 150
    isComplete: false
  - link: "[[Orichalcum Ingot]]"
    count: 150
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 150
    isComplete: false
  - link: "[[Bolt of Gossamer]]"
    count: 150
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 100
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