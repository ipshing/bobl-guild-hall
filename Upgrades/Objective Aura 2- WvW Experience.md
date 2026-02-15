---
tags:
  - guild-hall/upgrade
name: "Objective Aura 2: WvW Experience"
wikiLink: https://wiki.guildwars2.com/wiki/Objective_Aura_2:_WvW_Experience
building: "[[War Room]]"
description: Adds a 10% WvW experience bonus to the boons applied by the guild's aura around claimed objectives.
level: 9
requires:
  - "[[Objective Aura 1- Supply Capacity]]"
xp: 35
cost:
  favor: 200
  aetherium: 1500
  gold: 0
isComplete: false
order: 9
materials:
  - link: "[[Badge of Tribute]]"
    count: 20
    isComplete: false
  - link: "[[Tome of Knowledge]]"
    count: 20
    isComplete: false
  - link: "[[Mystic Coin]]"
    count: 100
    isComplete: false
  - link: "[[Pile of Crystalline Dust]]"
    count: 50
    isComplete: false
  - link: "[[Large Claw]]"
    count: 400
    isComplete: false
  - link: "[[Molten Lodestone]]"
    count: 30
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```