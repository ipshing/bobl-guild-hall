---
tags:
  - guild-hall/upgrade
name: Synthesis Output 1
wikiLink: https://wiki.guildwars2.com/wiki/Synthesis_Output_1
building: "[[Guild Workshop]]"
description: Increase the efficiency of the guild's ore and lumber synthesizers, increasing daily harvesting opportunities to 4 each.
level: 11
requires:
  - "[[Lumber Synthesizer 1]]"
  - "[[Ore Synthesizer 1]]"
xp: 35
cost:
  favor: 500
  aetherium: 3000
  gold: 0
isComplete: false
order: 7
materials:
  - link: "[[Glob of Ectoplasm]]"
    count: 125
    isComplete: false
  - link: "[[Bottle of Airship Oil]]"
    count: 50
    isComplete: false
  - link: "[[Pile of Auric Dust]]"
    count: 50
    isComplete: false
  - link: "[[Ley Line Spark]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```