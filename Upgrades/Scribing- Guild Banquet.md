---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Banquet"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Banquet
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture celebratory banquets that players can eat and drink from.
level: 23
requires:
  - "[[Tavern Restoration 2]]"
xp: 35
cost:
  favor: 100
  aetherium: 2000
  gold: 0
isComplete: false
order: 17
materials:
  - link: "[[Sheet of Rough Paper]]"
    count: 50
    isComplete: false
  - link: "[[Meat Pie]]"
    count: 100
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 30
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 10
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```