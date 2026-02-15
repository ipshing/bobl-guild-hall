---
tags:
  - guild-hall/upgrade
name: "Scribing: Sabotage Depot"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Sabotage_Depot
building: "[[War Room]]"
description: Craft schematics to manufacture a tier 1 improvement that rigs the supply depot at your guild's claimed objectives to explode if your objective is captured by enemies, destroying all of the supply there.
level: 5
requires:
  - "[[WvW Guild Claiming- Camps]]"
xp: 35
cost:
  favor: 150
  aetherium: 500
  gold: 0
isComplete: false
order: 3
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
    count: 10
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Pile of Incandescent Dust]]"
    count: 200
    isComplete: false
  - link: "[[Watchwork Sprocket]]"
    count: 75
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```