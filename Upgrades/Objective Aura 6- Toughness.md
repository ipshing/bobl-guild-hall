---
tags:
  - guild-hall/upgrade
name: "Objective Aura 6: Toughness"
wikiLink: https://wiki.guildwars2.com/wiki/Objective_Aura_6:_Toughness
building: "[[War Room]]"
description: Adds a +25 toughness bonus to the boons applied by the guild's aura around claimed objectives.
level: 29
requires:
  - "[[Objective Aura 5- Precision]]"
xp: 35
cost:
  favor: 200
  aetherium: 5000
  gold: 0
isComplete: false
order: 32
materials:
  - link: "[[Badge of Tribute]]"
    count: 20
    isComplete: false
  - link: "[[Large Scale]]"
    count: 200
    isComplete: false
  - link: "[[Mystic Coin]]"
    count: 100
    isComplete: false
  - link: "[[Pile of Crystalline Dust]]"
    count: 50
    isComplete: false
  - link: "[[Armored Scale]]"
    count: 10
    isComplete: false
  - link: "[[Onyx Lodestone]]"
    count: 25
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```