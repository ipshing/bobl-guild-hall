---
tags:
  - guild-hall/upgrade
name: Guild Hall Decorations Merchant 3
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Hall_Decorations_Merchant_3
building: "[[Guild Market]]"
description: Increase the inventory of your guild hall decorations merchant.
level: 34
requires:
  - "[[Guild Hall Decorations Merchant 2]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 19
materials:
  - link: "[[Vial of Linseed Oil]]"
    count: 300
    isComplete: false
  - link: "[[Sheet of Extra Coarse Sandpaper]]"
    count: 300
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 2000
    isComplete: false
  - link: "[[Dragonite Ingot]]"
    count: 10
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```