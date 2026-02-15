---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Gathering Bonus Banner"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Gathering_Bonus_Banner
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture banners that offer allies a 10% boost to gathering chance for 30 minutes.
level: 3
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 25
  aetherium: 500
  gold: 0
isComplete: false
order: 3
materials:
  - link: "[[Sheet of Coarse Paper]]"
    count: 100
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 200
    isComplete: false
  - link: "[[Mithril Ingot]]"
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
  - link: "[[Omnomberry|Omnomberry]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```