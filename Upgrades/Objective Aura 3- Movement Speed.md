---
tags:
  - guild-hall/upgrade
name: "Objective Aura 3: Movement Speed"
wikiLink: https://wiki.guildwars2.com/wiki/Objective_Aura_3:_Movement_Speed
building: "[[War Room]]"
description: Adds a 25% movement speed bonus to the boons applied by the guild's aura around claimed objectives.
level: 17
requires:
  - "[[Objective Aura 2- WvW Experience]]"
  - "[[WvW Guild Claiming- Towers]]"
xp: 35
cost:
  favor: 200
  aetherium: 2000
  gold: 0
isComplete: false
order: 17
materials:
  - link: "[[Badge of Tribute]]"
    count: 20
    isComplete: false
  - link: "[[Seaweed]]"
    count: 200
    isComplete: false
  - link: "[[Mystic Coin]]"
    count: 100
    isComplete: false
  - link: "[[Pile of Crystalline Dust]]"
    count: 50
    isComplete: false
  - link: "[[Pile of Incandescent Dust]]"
    count: 400
    isComplete: false
  - link: "[[Crystal Lodestone]]"
    count: 30
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```