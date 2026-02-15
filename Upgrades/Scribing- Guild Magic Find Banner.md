---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Magic Find Banner"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Magic_Find_Banner
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture banners that offer allies a 10% boost to magic find for 30 minutes.
level: 11
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 150
  aetherium: 2000
  gold: 0
isComplete: false
order: 8
materials:
  - link: "[[Sheet of Rough Paper]]"
    count: 50
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 50
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
    count: 50
    isComplete: false
  - link: "[[Exotic Essence of Luck]]"
    count: 77
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```