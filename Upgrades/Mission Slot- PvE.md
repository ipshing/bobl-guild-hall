---
tags:
  - guild-hall/upgrade
name: "Mission Slot: PvE"
wikiLink: https://wiki.guildwars2.com/wiki/Mission_Slot:_PvE
building: "[[Guild Market]]"
description: Unlock a weekly mission slot that will only generate PvE-oriented missions and is unaffected by the guild's mission preference.
level: 4
requires:
  - "[[Market Restoration 1]]"
xp: 35
cost:
  favor: 100
  aetherium: 500
  gold: 0
isComplete: false
order: 1
materials:
  - link: "[[Obsidian Shard]]"
    count: 50
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 300
    isComplete: false
  - link: "[[Bolt of Silk]]"
    count: 100
    isComplete: false
  - link: "[[Glob of Ectoplasm]]"
    count: 25
    isComplete: false
  - link: "[[Icy Runestone]]"
    count: 30
    isComplete: false
  - link: "[[Large Bone]]"
    count: 50
    isComplete: false
  - link: "[[Pile of Incandescent Dust]]"
    count: 50
    isComplete: false
  - link: "[[Barbed Thorn]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```