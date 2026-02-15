---
tags:
  - guild-hall/upgrade
name: "Guild Hall Music: Super Adventure Box"
wikiLink: https://wiki.guildwars2.com/wiki/Guild_Hall_Music:_Super_Adventure_Box
building: "[[Guild Tavern]]"
description: Visit the minstrel at the tavern to change the background music of your guild hall to a selection of themes based on Moto's Super Adventure Box.
level: 8
requires:
  - "[[Tavern Restoration 2]]"
  - "[[Guild Hall Music- City Themes|Guild Hall Music: City Themes]]"
xp: 35
cost:
  favor: 128
  aetherium: 256
  gold: 0
isComplete: false
order: 13
materials:
  - link: "[[World 1 Super Boom Box]]"
    count: 1
    isComplete: false
  - link: "[[World 2 Super Boom Box]]"
    count: 1
    isComplete: false
  - link: "[[Continue Coin]]"
    count: 500
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```