---
tags:
  - guild-hall/upgrade
name: "Scribing: Arrow Cart"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Arrow_Cart
building: "[[War Room]]"
description: Craft schematics to manufacture WvW arrowcarts.
level: 10
requires:
  - "[[WvW Guild Claiming- Camps]]"
xp: 35
cost:
  favor: 300
  aetherium: 2000
  gold: 0
isComplete: false
order: 11
materials:
  - link: "[[Sheet of Rough Paper]]"
    count: 40
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Arrow Cart Blueprint]]"
    count: 25
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Large Fang]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```