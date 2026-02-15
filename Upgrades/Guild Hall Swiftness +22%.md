---
tags:
  - guild-hall/upgrade
name: Guild Hall Swiftness +22%
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Hall_Swiftness_%2B22%25
building: "[[Guild Tavern]]"
description: Permanently increase the run speed of guild members while in this guild hall by 22%.
level: 21
requires:
  - "[[Tavern Restoration 2]]"
  - "[[Guild Hall Swiftness +11%]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 16
materials:
  - link: "[[Seaweed|Seaweed]]"
    count: 250
    isComplete: false
  - link: "[[Superior Rune of the Traveler]]"
    count: 2
    isComplete: false
  - link: "[[Superior Rune of Speed]]"
    count: 2
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```