---
tags:
  - guild-hall/upgrade
name: "Objective Aura 8: Magic Find"
wikiLink: https://wiki.guildwars2.com/wiki/Objective_Aura_8:_Magic_Find
building: "[[War Room]]"
description: Adds a +20% magic-find bonus to the boons applied by the guild's aura around claimed objectives.
level: 37
requires:
  - "[[Objective Aura 7- Vitality]]"
xp: 35
cost:
  favor: 200
  aetherium: 5000
  gold: 0
isComplete: false
order: 41
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
  - link: "[[Leaf Fossil]]"
    count: 50
    isComplete: false
  - link: "[[Evergreen Lodestone]]"
    count: 25
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```