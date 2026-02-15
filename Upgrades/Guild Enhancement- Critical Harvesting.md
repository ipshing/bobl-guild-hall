---
tags:
  - guild-hall/upgrade
name: "Guild Enhancement: Critical Harvesting"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Enhancement:_Critical_Harvesting
building: "[[Guild Workshop]]"
description: Add a personal enhancement at the tavern that increases the chance of getting a critical success when harvesting a node.
level: 5
requires:
  - "[[Workshop Restoration 1]]"
xp: 35
cost:
  favor: 50
  aetherium: 750
  gold: 0
isComplete: false
order: 2
materials:
  - link: "[[Carrot]]"
    count: 1000
    isComplete: false
  - link: "[[Potato]]"
    count: 1000
    isComplete: false
  - link: "[[Foxfire Cluster]]"
    count: 15
    isComplete: false
  - link: "[[Mystic Crystal]]"
    count: 10
    isComplete: false
  - link: "[[Glass Mug]]"
    count: 10
    isComplete: false
  - link: "[[Empty Keg]]"
    count: 10
    isComplete: false
  - link: "[[Potent Venom Sac]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```