---
tags:
  - guild-hall/upgrade
name: Lumber Synthesizer 1
wikiLink: https://wiki.guildwars2.com/wiki/Lumber_Synthesizer_1
building: "[[Guild Workshop]]"
description: Add a lumber node to the workshop that randomly generates either green or soft logs when harvested.
level: 7
requires:
  - "[[Workshop Restoration 1]]"
xp: 35
cost:
  favor: 200
  aetherium: 1000
  gold: 0
isComplete: false
order: 3
materials:
  - link: "[[Green Wood Plank]]"
    count: 250
    isComplete: false
  - link: "[[Soft Wood Plank]]"
    count: 250
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 50
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