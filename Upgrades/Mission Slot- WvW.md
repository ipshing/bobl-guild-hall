---
tags:
  - guild-hall/upgrade
name: "Mission Slot: WvW"
wikiLink: https://wiki.guildwars2.com/wiki/Mission_Slot:_WvW
building: "[[War Room]]"
description: Unlock a weekly mission slot that will only generate WvW missions and is unaffected by the guild's mission preference.
level: 4
requires:
  - "[[War Room Restoration 1]]"
xp: 35
cost:
  favor: 150
  aetherium: 500
  gold: 0
isComplete: false
order: 1
materials:
  - link: "[[Badge of Tribute]]"
    count: 25
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
  - link: "[[Siege Golem Blueprint]]"
    count: 20
    isComplete: false
  - link: "[[Large Claw]]"
    count: 50
    isComplete: false
  - link: "[[Intricate Totem]]"
    count: 50
    isComplete: false
  - link: "[[Leaf Fossil]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```