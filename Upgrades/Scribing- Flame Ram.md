---
tags:
  - guild-hall/upgrade
name: "Scribing: Flame Ram"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Flame_Ram
building: "[[War Room]]"
description: Craft schematics to manufacture WvW flame rams.
level: 26
requires:
  - "[[WvW Guild Claiming- Keeps]]"
xp: 35
cost:
  favor: 300
  aetherium: 2000
  gold: 0
isComplete: false
order: 29
materials:
  - link: "[[Sheet of Fine Paper]]"
    count: 50
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Flame Ram Blueprint]]"
    count: 25
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Molten Lodestone]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```