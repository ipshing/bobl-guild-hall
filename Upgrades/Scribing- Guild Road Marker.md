---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Road Marker"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Road_Marker
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture banners that offer allies swiftness for 20 seconds.
level: 15
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 100
  aetherium: 3000
  gold: 0
isComplete: false
order: 10
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
    count: 10
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 50
    isComplete: false
  - link: "[[Seaweed|Seaweed]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```