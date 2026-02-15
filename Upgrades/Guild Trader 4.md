---
tags:
  - guild-hall/upgrade
name: Guild Trader 4
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Trader_4
building: "[[Guild Market]]"
description: Expand the inventory of the guild trader to include guild hall decorations and related items.
level: 30
requires:
  - "[[Guild Trader 3]]"
  - "[[Guild Hall Decorations Merchant 1]]"
xp: 35
cost:
  favor: 500
  aetherium: 3000
  gold: 0
isComplete: false
order: 16
materials:
  - link: "[[Ancient Wood Plank]]"
    count: 250
    isComplete: false
  - link: "[[Orichalcum Ingot]]"
    count: 250
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 250
    isComplete: false
  - link: "[[Bolt of Gossamer]]"
    count: 200
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