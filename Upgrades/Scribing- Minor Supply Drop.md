---
tags:
  - guild-hall/upgrade
name: "Scribing: Minor Supply Drop"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Minor_Supply_Drop
building: "[[War Room]]"
description: Craft schematics to manufacture a tier 1 tactic that refills the supply cache at your guild's claimed objectives.
level: 5
requires:
  - "[[WvW Guild Claiming- Camps]]"
xp: 35
cost:
  favor: 150
  aetherium: 750
  gold: 0
isComplete: false
order: 4
materials:
  - link: "[[Sheet of Coarse Paper]]"
    count: 100
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
    count: 20
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Heavy Supply Bag]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```