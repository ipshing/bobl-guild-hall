---
tags:
  - guild-hall/upgrade
name: Ore Synthesizer 2
wikiLink: https://wiki.guildwars2.com/wiki/Ore_Synthesizer_2
building: "[[Guild Workshop]]"
description: Add silver as a possible output from the workshop's ore synthesizer.
level: 15
requires:
  - "[[Ore Synthesizer 1]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 9
materials:
  - link: "[[Silver Ore]]"
    count: 200
    isComplete: false
  - link: "[[Iron Ore]]"
    count: 200
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 50
    isComplete: false
  - link: "[[Amethyst Lump]]"
    count: 100
    isComplete: false
  - link: "[[Carnelian Lump]]"
    count: 100
    isComplete: false
  - link: "[[Lapis Lump]]"
    count: 100
    isComplete: false
  - link: "[[Peridot Lump]]"
    count: 100
    isComplete: false
  - link: "[[Spinel Lump]]"
    count: 100
    isComplete: false
  - link: "[[Sunstone Lump]]"
    count: 100
    isComplete: false
  - link: "[[Topaz Lump]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```