---
tags:
  - guild-hall/upgrade
name: Synthesis Output 4
wikiLink: https://wiki.guildwars2.com/wiki/Synthesis_Output_4
building: "[[Guild Workshop]]"
description: Increase the efficiency of the guild's synthesizers, increasing daily ore and lumber harvests to 10 each and plant, leather, and cloth harvests to 3 each.
level: 40
requires:
  - "[[Synthesis Output 3]]"
  - "[[Ore Synthesizer 6]]"
  - "[[Lumber Synthesizer 5]]"
  - "[[Plant Synthesizers 3]]"
xp: 35
cost:
  favor: 500
  aetherium: 25000
  gold: 0
isComplete: false
order: 32
materials:
  - link: "[[Glob of Ectoplasm]]"
    count: 125
    isComplete: false
  - link: "[[Bottle of Airship Oil]]"
    count: 150
    isComplete: false
  - link: "[[Pile of Auric Dust]]"
    count: 150
    isComplete: false
  - link: "[[Ley Line Spark]]"
    count: 150
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```