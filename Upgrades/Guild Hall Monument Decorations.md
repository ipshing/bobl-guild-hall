---
tags:
  - guild-hall/upgrade
name: Guild Hall Monument Decorations
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Hall_Monument_Decorations
building: "[[Guild Market]]"
description: Add special decorations that can be inscribed with custom messages to the basic decorations merchant's inventory.
level: 23
requires:
  - "[[Market Restoration 2]]"
  - "[[Guild Hall Decorations Merchant 2]]"
xp: 35
cost:
  favor: 300
  aetherium: 3000
  gold: 0
isComplete: false
order: 12
materials:
  - link: "[[Memory of Battle]]"
    count: 500
    isComplete: false
  - link: "[[Steel Chisel]]"
    count: 25
    isComplete: false
  - link: "[[Steel Craftsman's Hammer]]"
    count: 25
    isComplete: false
  - link: "[[Bottle of Elonian Wine]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```