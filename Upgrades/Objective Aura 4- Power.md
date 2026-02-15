---
tags:
  - guild-hall/upgrade
name: "Objective Aura 4: Power"
wikiLink: https://wiki.guildwars2.com/wiki/Objective_Aura_4:_Power
building: "[[War Room]]"
description: Adds a +25 power bonus to the boons applied by the guild's aura around claimed objectives.
level: 21
requires:
  - "[[War Room Restoration 2]]"
  - "[[Objective Aura 3- Movement Speed]]"
xp: 35
cost:
  favor: 200
  aetherium: 5000
  gold: 0
isComplete: false
order: 23
materials:
  - link: "[[Badge of Tribute]]"
    count: 20
    isComplete: false
  - link: "[[Vial of Potent Blood]]"
    count: 200
    isComplete: false
  - link: "[[Mystic Coin]]"
    count: 80
    isComplete: false
  - link: "[[Pile of Crystalline Dust]]"
    count: 50
    isComplete: false
  - link: "[[Vial of Powerful Blood]]"
    count: 10
    isComplete: false
  - link: "[[Destroyer Lodestone]]"
    count: 30
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```