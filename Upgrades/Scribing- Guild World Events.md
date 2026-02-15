---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild World Events"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_World_Events
building: "[[Guild Tavern]]"
description: Allows your guild to build consumables that can be used to activate various world events.
level: 33
requires:
  - "[[Tavern Restoration 2]]"
xp: 35
cost:
  favor: 300
  aetherium: 5000
  gold: 0
isComplete: false
order: 22
materials:
  - link: "[[Sheet of Quality Paper]]"
    count: 20
    isComplete: false
  - link: "[[Tome of Knowledge]]"
    count: 100
    isComplete: false
  - link: "[[Vial of Potent Blood]]"
    count: 100
    isComplete: false
  - link: "[[Vial of Powerful Blood]]"
    count: 30
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```