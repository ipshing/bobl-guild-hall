---
tags:
  - guild-hall/upgrade
name: Guild Armorer 2
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Armorer_2
building: "[[Guild Market]]"
description: Add jungle armor recipes to the guild armorer's inventory.
level: 28
requires:
  - "[[Market Restoration 2]]"
  - "[[Guild Armorer 1]]"
xp: 35
cost:
  favor: 500
  aetherium: 7500
  gold: 0
isComplete: false
order: 15
materials:
  - link: "[[Orichalcum Ingot]]"
    count: 200
    isComplete: false
  - link: "[[Bolt of Gossamer]]"
    count: 200
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 200
    isComplete: false
  - link: "[[Celestial Intricate Gossamer Insignia]]"
    count: 6
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```