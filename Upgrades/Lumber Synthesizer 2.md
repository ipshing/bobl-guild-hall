---
tags:
  - guild-hall/upgrade
name: Lumber Synthesizer 2
wikiLink: https://wiki.guildwars2.com/wiki/Lumber_Synthesizer_2
building: "[[Guild Workshop]]"
description: Add seasoned logs as a possible output from the workshop's lumber synthesizer.
level: 17
requires:
  - "[[Lumber Synthesizer 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 12
materials:
  - link: "[[Seasoned Wood Plank]]"
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