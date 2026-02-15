---
tags:
  - guild-hall/upgrade
name: Guild Trader 5
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Trader_5
building: "[[Guild Market]]"
description: Guild members may now purchase 3 items from the guild trader per day.
level: 38
requires:
  - "[[Guild Trader 4]]"
xp: 35
cost:
  favor: 500
  aetherium: 7500
  gold: 0
isComplete: false
order: 21
materials:
  - link: "[[Ancient Wood Plank]]"
    count: 300
    isComplete: false
  - link: "[[Orichalcum Ingot]]"
    count: 300
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 300
    isComplete: false
  - link: "[[Bolt of Gossamer]]"
    count: 300
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