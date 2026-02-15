---
tags:
  - guild-hall/upgrade
name: Lumber Synthesizer 3
wikiLink: https://wiki.guildwars2.com/wiki/Lumber_Synthesizer_3
building: "[[Guild Workshop]]"
description: Add hard logs as a possible output from the workshop's lumber synthesizer.
level: 25
requires:
  - "[[Workshop Restoration 2]]"
  - "[[Lumber Synthesizer 2]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 18
materials:
  - link: "[[Hard Wood Plank]]"
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