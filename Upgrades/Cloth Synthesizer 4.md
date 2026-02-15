---
tags:
  - guild-hall/upgrade
name: Cloth Synthesizer 4
wikiLink: https://wiki.guildwars2.com/wiki/Cloth_Synthesizer_4
building: "[[Guild Workshop]]"
description: Add silk scraps as a possible output from the workshop's cloth synthesizer.
level: 31
requires:
  - "[[Cloth Synthesizer 3]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 23
materials:
  - link: "[[Bolt of Silk]]"
    count: 500
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 25
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