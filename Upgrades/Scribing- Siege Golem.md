---
tags:
  - guild-hall/upgrade
name: "Scribing: Siege Golem"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Siege_Golem
building: "[[War Room]]"
description: Craft schematics to manufacture WvW siege golems.
level: 34
requires:
  - "[[WvW Guild Claiming- Stonemist Castle]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 38
materials:
  - link: "[[Sheet of Quality Paper]]"
    count: 20
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Siege Golem Blueprint]]"
    count: 25
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Large Scale]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```