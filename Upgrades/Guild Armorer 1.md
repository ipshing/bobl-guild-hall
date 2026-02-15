---
tags:
  - guild-hall/upgrade
name: Guild Armorer 1
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Armorer_1
building: "[[Guild Market]]"
description: Add a guild armorer to the market, from whom basic guild armor skins can be purchased.
level: 10
requires:
  - "[[Market Restoration 1]]"
xp: 35
cost:
  favor: 200
  aetherium: 3000
  gold: 0
isComplete: false
order: 4
materials:
  - link: "[[Orichalcum Ingot]]"
    count: 150
    isComplete: false
  - link: "[[Bolt of Gossamer]]"
    count: 150
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 150
    isComplete: false
  - link: "[[Celestial Intricate Gossamer Insignia]]"
    count: 4
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```