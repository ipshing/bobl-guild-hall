---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Karma and Experience Banner"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Karma_and_Experience_Banner
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture banners that offer allies a 10% boost to experience and karma gain for 30 minutes.
level: 25
requires:
  - "[[Tavern Restoration 2]]"
  - "[[Scribing- Guild Experience Banner|Scribing: Guild Experience Banner]]"
  - "[[Scribing- Guild Karma Banner|Scribing: Guild Karma Banner]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 18
materials:
  - link: "[[Sheet of Fine Paper]]"
    count: 50
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 10
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Obsidian Shard]]"
    count: 20
    isComplete: false
  - link: "[[Tome of Knowledge]]"
    count: 10
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```