---
tags:
  - guild-hall/upgrade
name: "Scribing: Ballista"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Ballista
building: "[[War Room]]"
description: Craft schematics to manufacture WvW ballistae.
level: 13
requires:
  - "[[WvW Guild Claiming- Towers]]"
xp: 35
cost:
  favor: 300
  aetherium: 2000
  gold: 0
isComplete: false
order: 13
materials:
  - link: "[[Sheet of Rough Paper]]"
    count: 30
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Ballista Blueprint]]"
    count: 25
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Large Claw]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```