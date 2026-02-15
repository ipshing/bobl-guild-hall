---
tags:
  - guild-hall/upgrade
name: Guild Hall Decorations Merchant 2
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Hall_Decorations_Merchant_2
building: "[[Guild Market]]"
description: Increase the inventory of your guild hall decorations merchant.
level: 22
requires:
  - "[[Market Restoration 2]]"
  - "[[Guild Hall Decorations Merchant 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 11
materials:
  - link: "[[Vial of Linseed Oil]]"
    count: 200
    isComplete: false
  - link: "[[Sheet of Extra Coarse Sandpaper]]"
    count: 200
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Dragonite Ingot]]"
    count: 10
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```