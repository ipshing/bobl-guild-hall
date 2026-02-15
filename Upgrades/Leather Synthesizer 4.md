---
tags:
  - guild-hall/upgrade
name: Leather Synthesizer 4
wikiLink: https://wiki.guildwars2.com/wiki/Leather_Synthesizer_4
building: "[[Guild Workshop]]"
description: Add thick leather as a possible output from the workshop's leather synthesizer.
level: 31
requires:
  - "[[Leather Synthesizer 3]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 24
materials:
  - link: "[[Cured Thick Leather Square]]"
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