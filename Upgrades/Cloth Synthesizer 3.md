---
tags:
  - guild-hall/upgrade
name: Cloth Synthesizer 3
wikiLink: https://wiki.guildwars2.com/wiki/Cloth_Synthesizer_3
building: "[[Guild Workshop]]"
description: Add linen scraps as a possible output from the workshop's cloth synthesizer.
level: 25
requires:
  - "[[Workshop Restoration 2]]"
  - "[[Cloth Synthesizer 2]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 17
materials:
  - link: "[[Bolt of Linen]]"
    count: 250
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 15
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