---
tags:
  - guild-hall/upgrade
name: Guild Anthems
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Anthems
building: "[[Guild Tavern]]"
description: Add a minstrel at the tavern who can set an anthem for your guild, which will play at moments of triumph.
level: 19
requires:
  - "[[Tavern Restoration 2]]"
xp: 35
cost:
  favor: 500
  aetherium: 5000
  gold: 0
isComplete: false
order: 14
materials:
  - link: "[[Gift of Music]]"
    count: 1
    isComplete: false
  - link: "[[Choir Bell]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian })
```