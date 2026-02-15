---
tags:
  - guild-hall/upgrade
name: "Mission Slot: PvP"
wikiLink: https://wiki.guildwars2.com/wiki/Mission_Slot:_PvP
building: "[[Guild Arena]]"
description: Unlock a weekly mission slot that will only generate PvP-oriented missions and is unaffected by the guild's mission preference.
level: 4
requires:
  - "[[Arena Restoration 1]]"
xp: 35
cost:
  favor: 100
  aetherium: 500
  gold: 0
isComplete: false
order: 1
materials:
  - link: "[[Shard of Glory]]"
    count: 250
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
  - link: "[[Custom Arena Time Token]]"
    count: 15
    isComplete: false
  - link: "[[Vial of Potent Blood]]"
    count: 50
    isComplete: false
  - link: "[[Large Fang]]"
    count: 50
    isComplete: false
  - link: "[[Potent Venom Sac]]"
    count: 50
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```