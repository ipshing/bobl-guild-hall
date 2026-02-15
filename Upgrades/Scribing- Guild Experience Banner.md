---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Experience Banner"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Experience_Banner
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture banners that offer allies a 5% boost to experience gain 30 minutes.
level: 7
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 150
  aetherium: 1000
  gold: 0
isComplete: false
order: 5
materials:
  - link: "[[Sheet of Coarse Paper]]"
    count: 100
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
    count: 20
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Tome of Knowledge]]"
    count: 10
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```