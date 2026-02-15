---
tags:
  - guild-hall/upgrade
name: Synthesis Output 2
wikiLink: https://wiki.guildwars2.com/wiki/Synthesis_Output_2
building: "[[Guild Workshop]]"
description: Increase the efficiency of the guild's synthesizers, increasing daily ore and lumber harvests to 6 each and plant, leather, and cloth harvests to 2 each.
level: 21
requires:
  - "[[Synthesis Output 1]]"
  - "[[Ore Synthesizer 2]]"
  - "[[Lumber Synthesizer 2]]"
  - "[[Plant Synthesizers 1]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 14
materials:
  - link: "[[Glob of Ectoplasm]]"
    count: 125
    isComplete: false
  - link: "[[Bottle of Airship Oil]]"
    count: 75
    isComplete: false
  - link: "[[Pile of Auric Dust]]"
    count: 75
    isComplete: false
  - link: "[[Ley Line Spark]]"
    count: 75
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```