---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Karma Banner"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Karma_Banner
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture guild banners that offer allies a 5% boost to karma gain for 30 minutes.
level: 5
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 150
  aetherium: 500
  gold: 0
isComplete: false
order: 4
materials:
  - link: "[[Sheet of Coarse Paper]]"
    count: 100
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 200
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 50
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 20
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 50
    isComplete: false
  - link: "[[Obsidian Shard]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```