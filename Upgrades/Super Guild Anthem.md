---
tags:
  - guild-hall/upgrade
name: Super Guild Anthem
wikiLink: https://wiki.guildwars2.com/wiki/Super_Guild_Anthem
building: "[[Guild Tavern]]"
description: Add a minstrel at the tavern who can set an anthem for your guild, which will play at moments of triumph.
level: 19
requires:
  - "[[Tavern Restoration 2]]"
  - "[[Guild Anthems]]"
xp: 35
cost:
  favor: 128
  aetherium: 256
  gold: 0
isComplete: false
order: 15
materials:
  - link: "[[World 1 Super Boom Box]]"
    count: 1
    isComplete: false
  - link: "[[Continue Coin]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```