---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Gold from Kills Banner"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Gold_from_Kills_Banner
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture banners that offer allies a 5% boost to gold gain from monster kills for 30 minutes.
level: 17
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 150
  aetherium: 3000
  gold: 0
isComplete: false
order: 11
materials:
  - link: "[[Sheet of Fine Paper]]"
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
    count: 15
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 50
    isComplete: false
  - link: "[[Gold Ingot]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```