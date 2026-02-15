---
tags:
  - guild-hall/upgrade
name: Guild Hall Swiftness +33%
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Hall_Swiftness_%2B33%25
building: "[[Guild Tavern]]"
description: Permanently increase the run speed of guild members while in this guild hall by 33%.
level: 35
requires:
  - "[[Guild Hall Swiftness +22%]]"
xp: 35
cost:
  favor: 500
  aetherium: 25000
  gold: 0
isComplete: false
order: 23
materials:
  - link: "[[Seaweed|Seaweed]]"
    count: 500
    isComplete: false
  - link: "[[Superior Rune of the Traveler]]"
    count: 3
    isComplete: false
  - link: "[[Superior Rune of Speed]]"
    count: 3
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```