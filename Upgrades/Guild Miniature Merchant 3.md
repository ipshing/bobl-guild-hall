---
tags:
  - guild-hall/upgrade
name: Guild Miniature Merchant 3
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Miniature_Merchant_3
building: "[[Guild Market]]"
description: Expand the inventory of the guild miniature merchant.
level: 36
requires:
  - "[[Guild Miniature Merchant 2]]"
xp: 35
cost:
  favor: 500
  aetherium: 7500
  gold: 0
isComplete: false
order: 20
materials:
  - link: "[[Orichalcum Ingot]]"
    count: 180
    isComplete: false
  - link: "[[Ancient Wood Plank]]"
    count: 180
    isComplete: false
  - link: "[[Watchwork Sprocket]]"
    count: 50
    isComplete: false
  - link: "[[Bottle of Airship Oil]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```