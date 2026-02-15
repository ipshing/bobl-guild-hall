---
tags:
  - guild-hall/upgrade
name: Synthesis Output 3
wikiLink: https://wiki.guildwars2.com/wiki/Synthesis_Output_3
building: "[[Guild Workshop]]"
description: Increase the efficiency of the guild's synthesizers, increasing daily ore and lumber harvests to 8 each.
level: 33
requires:
  - "[[Synthesis Output 2]]"
  - "[[Ore Synthesizer 4]]"
  - "[[Lumber Synthesizer 3]]"
  - "[[Plant Synthesizers 2]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 25
materials:
  - link: "[[Glob of Ectoplasm]]"
    count: 125
    isComplete: false
  - link: "[[Bottle of Airship Oil]]"
    count: 100
    isComplete: false
  - link: "[[Pile of Auric Dust]]"
    count: 100
    isComplete: false
  - link: "[[Ley Line Spark]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```