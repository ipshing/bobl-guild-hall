---
tags:
  - guild-hall/upgrade
name: Cloth Synthesizer 5
wikiLink: https://wiki.guildwars2.com/wiki/Cloth_Synthesizer_5
building: "[[Guild Workshop]]"
description: Add gossamer scraps as a possible output from the workshop's cloth synthesizer.
level: 37
requires:
  - "[[Cloth Synthesizer 4]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 29
materials:
  - link: "[[Bolt of Gossamer]]"
    count: 200
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 10
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