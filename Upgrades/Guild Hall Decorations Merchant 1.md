---
tags:
  - guild-hall/upgrade
name: Guild Hall Decorations Merchant 1
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Hall_Decorations_Merchant_1
building: "[[Guild Market]]"
description: Add a merchant to the workshop who sells basic decorations for your guild hall.
level: 6
requires:
  - "[[Market Restoration 1]]"
xp: 35
cost:
  favor: 100
  aetherium: 1000
  gold: 0
isComplete: false
order: 2
materials:
  - link: "[[Vial of Linseed Oil]]"
    count: 100
    isComplete: false
  - link: "[[Sheet of Extra Coarse Sandpaper]]"
    count: 100
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 500
    isComplete: false
  - link: "[[Dragonite Ingot]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```