---
tags:
  - guild-hall/upgrade
name: "Scribing: Hardened Gates"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Hardened_Gates
building: "[[War Room]]"
description: Craft schematics to manufacture a tier 2 improvement that significantly increases the defenses of gates at your guild's claimed objective.
level: 12
requires:
  - "[[WvW Guild Claiming- Keeps]]"
xp: 35
cost:
  favor: 300
  aetherium: 2000
  gold: 0
isComplete: false
order: 21
materials:
  - link: "[[Sheet of Fine Paper]]"
    count: 50
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
    count: 10
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Large Scale]]"
    count: 250
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```