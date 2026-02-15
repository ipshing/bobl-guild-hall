---
tags:
  - guild-hall/upgrade
name: Cloth Synthesizer 2
wikiLink: https://wiki.guildwars2.com/wiki/Cloth_Synthesizer_2
building: "[[Guild Workshop]]"
description: Add cotton scraps as a possible output from the workshop's cloth synthesizer.
level: 17
requires:
  - "[[Cloth Synthesizer 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 11
materials:
  - link: "[[Bolt of Cotton]]"
    count: 250
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 5
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