---
tags:
  - guild-hall/upgrade
name: Plant Synthesizers 1
wikiLink: https://wiki.guildwars2.com/wiki/Plant_Synthesizers_1
building: "[[Guild Workshop]]"
description: Add harvesting nodes to the workshop that randomly generate various vegetables, fruits, and herbs when harvested.
level: 19
requires:
  - "[[Workshop Restoration 1]]"
xp: 35
cost:
  favor: 150
  aetherium: 3000
  gold: 0
isComplete: false
order: 13
materials:
  - link: "[[Carrot]]"
    count: 1000
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 35
    isComplete: false
  - link: "[[Pile of Incandescent Dust]]"
    count: 200
    isComplete: false
  - link: "[[Empyreal Star]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```