---
tags:
  - guild-hall/upgrade
name: "Brawling Obstacle: Team-Color Torches"
wikiLink: https://wiki.guildwars2.com/wiki/Brawling_Obstacle:_Team-Color_Torches
building: "[[Guild Arena]]"
description: Allow decorators in the arena to place torches in the red, blue, and green team colors. These torches can be lit and unlit at will.
level: 18
requires:
  - "[[Brawling Obstacle- Walls]]"
  - "[[Arena Brawling- Green Team]]"
xp: 35
cost:
  favor: 200
  aetherium: 2000
  gold: 0
isComplete: false
order: 8
materials:
  - link: "[[Unidentified Dye]]"
    count: 25
    isComplete: false
  - link: "[[Pile of Incandescent Dust]]"
    count: 100
    isComplete: false
  - link: "[[Opal Orb]]"
    count: 200
    isComplete: false
  - link: "[[Molten Lodestone]]"
    count: 5
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 20
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```