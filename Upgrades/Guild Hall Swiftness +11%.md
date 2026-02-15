---
tags:
  - guild-hall/upgrade
name: Guild Hall Swiftness +11%
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Hall_Swiftness_%2B11%25
building: "[[Guild Tavern]]"
description: Permanently increase the run speed of guild members while in this guild hall by 11%.
level: 9
requires:
  - "[[Tavern Restoration 1]]"
xp: 35
cost:
  favor: 200
  aetherium: 2000
  gold: 0
isComplete: false
order: 7
materials:
  - link: "[[Seaweed|Seaweed]]"
    count: 200
    isComplete: false
  - link: "[[Superior Rune of the Traveler]]"
    count: 1
    isComplete: false
  - link: "[[Superior Rune of Speed]]"
    count: 1
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```