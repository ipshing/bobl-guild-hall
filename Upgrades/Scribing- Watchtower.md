---
tags:
  - guild-hall/upgrade
name: "Scribing: Watchtower"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Watchtower
building: "[[War Room]]"
description: Craft schematics to manufacture a tier 3 improvement that reveals enemies in the region of your guild's claimed tower on your map.
level: 35
requires:
  - "[[WvW Guild Claiming- Stonemist Castle]]"
xp: 35
cost:
  favor: 3000
  aetherium: 2000
  gold: 0
isComplete: false
order: 39
materials:
  - link: "[[Sheet of Fine Paper]]"
    count: 50
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 200
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 5
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Giant Eye]]"
    count: 1
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```