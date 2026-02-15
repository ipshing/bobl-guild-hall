---
tags:
  - guild-hall/upgrade
name: Leather Synthesizer 2
wikiLink: https://wiki.guildwars2.com/wiki/Leather_Synthesizer_2
building: "[[Guild Workshop]]"
description: Add coarse leather as a possible output from the workshop's leather synthesizer.
level: 17
requires:
  - "[[Leather Synthesizer 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 10
materials:
  - link: "[[Cured Coarse Leather Square]]"
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