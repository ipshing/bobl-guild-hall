---
tags:
  - guild-hall/upgrade
name: Ore Synthesizer 1
wikiLink: https://wiki.guildwars2.com/wiki/Ore_Synthesizer_1
building: "[[Guild Workshop]]"
description: Add an ore node to the workshop that randomly generates either copper or iron when mined.
level: 3
requires:
  - "[[Workshop Restoration 1]]"
xp: 35
cost:
  favor: 100
  aetherium: 1000
  gold: 0
isComplete: false
order: 1
materials:
  - link: "[[Copper Ore|Copper Ore]]"
    count: 200
    isComplete: false
  - link: "[[Iron Ore|Iron Ore]]"
    count: 200
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 25
    isComplete: false
  - link: "[[Amber Pebble]]"
    count: 50
    isComplete: false
  - link: "[[Garnet Pebble]]"
    count: 50
    isComplete: false
  - link: "[[Malachite Pebble]]"
    count: 50
    isComplete: false
  - link: "[[Tiger's Eye Pebble]]"
    count: 50
    isComplete: false
  - link: "[[Turquoise Pebble]]"
    count: 50
    isComplete: false
  - link: "[[Pearl]]"
    count: 50
    isComplete: false
  - link: "[[Empyreal Star]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```
