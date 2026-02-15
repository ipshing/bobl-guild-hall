---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Trebuchet"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Trebuchet
building: "[[War Room]]"
description: Craft schematics to manufacture WvW trebuchets that cost less supply to place.
level: 30
requires:
  - "[[WvW Guild Claiming- Keeps]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 33
materials:
  - link: "[[Sheet of Smooth Paper]]"
    count: 20
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 50
    isComplete: false
  - link: "[[Trebuchet Blueprint]]"
    count: 25
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Onyx Lodestone]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```