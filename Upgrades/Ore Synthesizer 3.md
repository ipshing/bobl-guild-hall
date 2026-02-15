---
tags:
  - guild-hall/upgrade
name: Ore Synthesizer 3
wikiLink: https://wiki.guildwars2.com/wiki/Ore_Synthesizer_3
building: "[[Guild Workshop]]"
description: Add gold as a possible output from the workshop's ore synthesizer.
level: 23
requires:
  - "[[Workshop Restoration 2]]"
  - "[[Ore Synthesizer 2]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 16
materials:
  - link: "[[Gold Ore]]"
    count: 200
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 50
    isComplete: false
  - link: "[[Amethyst Nugget]]"
    count: 100
    isComplete: false
  - link: "[[Carnelian Nugget]]"
    count: 100
    isComplete: false
  - link: "[[Lapis Nugget]]"
    count: 100
    isComplete: false
  - link: "[[Peridot Nugget]]"
    count: 100
    isComplete: false
  - link: "[[Spinel Nugget]]"
    count: 100
    isComplete: false
  - link: "[[Sunstone Nugget]]"
    count: 100
    isComplete: false
  - link: "[[Topaz Nugget]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```