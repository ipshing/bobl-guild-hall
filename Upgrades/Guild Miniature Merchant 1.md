---
tags:
  - guild-hall/upgrade
name: Guild Miniature Merchant 1
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Miniature_Merchant_1
building: "[[Guild Market]]"
description: Add a merchant to the market who sells miniatures emblazoned with your guild emblem.
level: 18
requires:
  - "[[Market Restoration 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 8
materials:
  - link: "[[Orichalcum Ingot]]"
    count: 80
    isComplete: false
  - link: "[[Ancient Wood Plank]]"
    count: 80
    isComplete: false
  - link: "[[Watchwork Sprocket]]"
    count: 50
    isComplete: false
  - link: "[[Bottle of Airship Oil]]"
    count: 10
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```