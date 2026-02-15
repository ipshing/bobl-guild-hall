---
tags:
  - guild-hall/upgrade
name: Leather Synthesizer 1
wikiLink: https://wiki.guildwars2.com/wiki/Leather_Synthesizer_1
building: "[[Guild Workshop]]"
description: Add a leather node to the workshop that randomly generates either rawhide or thin leather when harvested.
level: 7
requires:
  - "[[Workshop Restoration 1]]"
xp: 35
cost:
  favor: 200
  aetherium: 1000
  gold: 0
isComplete: false
order: 5
materials:
  - link: "[[Stretched Rawhide Leather Square]]"
    count: 250
    isComplete: false
  - link: "[[Cured Thin Leather Square]]"
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