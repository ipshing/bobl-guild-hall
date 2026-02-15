---
tags:
  - guild-hall/upgrade
name: Guild Miniature Merchant 2
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Miniature_Merchant_2
building: "[[Guild Market]]"
description: Expand the inventory of the guild miniature merchant.
level: 26
requires:
  - "[[Market Restoration 2]]"
  - "[[Guild Miniature Merchant 1]]"
xp: 35
cost:
  favor: 500
  aetherium: 3000
  gold: 0
isComplete: false
order: 14
materials:
  - link: "[[Orichalcum Ingot]]"
    count: 125
    isComplete: false
  - link: "[[Ancient Wood Plank]]"
    count: 125
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