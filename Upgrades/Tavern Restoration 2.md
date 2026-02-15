---
tags:
  - guild-hall/upgrade
name: Tavern Restoration 2
wikiLink: https://wiki.guildwars2.com/wiki/Tavern_Restoration_2
building: "[[Guild Tavern]]"
description: Complete the restoration of your tavern.
level: 19
requires:
  - "[[Tavern Restoration 1]]"
xp: 100
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 12
materials:
  - link: "[[Elder Wood Plank]]"
    count: 1000
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 1000
    isComplete: false
  - link: "[[Bottle of Elonian Wine]]"
    count: 200
    isComplete: false
  - link: "[[Empty Keg]]"
    count: 200
    isComplete: false
  - link: "[[Glass Mug]]"
    count: 300
    isComplete: false
  - link: "[[Obsidian Shard]]"
    count: 80
    isComplete: false
  - link: "[[Bolt of Silk]]"
    count: 100
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 400
    isComplete: false
  - link: "[[Bolt of Gossamer]]"
    count: 60
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 200
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```