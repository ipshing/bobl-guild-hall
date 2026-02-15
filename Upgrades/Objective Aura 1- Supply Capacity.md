---
tags:
  - guild-hall/upgrade
name: "Objective Aura 1: Supply Capacity"
wikiLink: https://wiki.guildwars2.com/wiki/Objective_Aura_1:_Supply_Capacity
building: "[[War Room]]"
description: The guild's claimed objectives now always emanate an aura that applies boons to allies in the vicinity while the guild holds the objective. Initially, the aura applies a +5 supply capacity.
level: 6
requires:
  - "[[WvW Guild Claiming- Camps]]"
xp: 35
cost:
  favor: 200
  aetherium: 1000
  gold: 0
isComplete: false
order: 5
materials:
  - link: "[[Badge of Tribute]]"
    count: 10
    isComplete: false
  - link: "[[Exotic Essence of Luck]]"
    count: 77
    isComplete: false
  - link: "[[Mystic Coin]]"
    count: 100
    isComplete: false
  - link: "[[Pile of Crystalline Dust]]"
    count: 50
    isComplete: false
  - link: "[[Intricate Totem]]"
    count: 400
    isComplete: false
  - link: "[[Charged Lodestone]]"
    count: 5
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```