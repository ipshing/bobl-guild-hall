---
tags:
  - guild-hall/upgrade
name: "Guild Enhancement: PvP Reward Boost"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Enhancement:_PvP_Reward_Boost
building: "[[Guild Arena]]"
description: Add a personal enhancement at the tavern that increases the rate at which PvP reward tracks progress.
level: 7
requires:
  - "[[Arena Restoration 1]]"
xp: 35
cost:
  favor: 150
  aetherium: 1000
  gold: 0
isComplete: false
order: 2
materials:
  - link: "[[Bowl of Black Pepper Cactus Salad]]"
    count: 80
    isComplete: false
  - link: "[[Bottle of Elonian Wine]]"
    count: 10
    isComplete: false
  - link: "[[Shard of Glory]]"
    count: 100
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 10
    isComplete: false
  - link: "[[Glass Mug]]"
    count: 15
    isComplete: false
  - link: "[[Empty Keg]]"
    count: 10
    isComplete: false
  - link: "[[Vial of Potent Blood]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```