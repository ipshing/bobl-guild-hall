---
tags:
  - guild-hall/upgrade
name: Cloth Synthesizer 1
wikiLink: https://wiki.guildwars2.com/wiki/Cloth_Synthesizer_1
building: "[[Guild Workshop]]"
description: Add a cloth node to the workshop that randomly generates either jute or wool scraps when harvested.
level: 7
requires:
  - "[[Workshop Restoration 1]]"
xp: 35
cost:
  favor: 200
  aetherium: 1000
  gold: 0
isComplete: false
order: 4
materials:
  - link: "[[Bolt of Jute]]"
    count: 250
    isComplete: false
  - link: "[[Bolt of Wool]]"
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