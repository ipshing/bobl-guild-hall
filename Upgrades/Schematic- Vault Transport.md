---
tags:
  - guild-hall/upgrade
name: "Schematic: Vault Transport"
wikiLink: https://wiki.guildwars2.com/wiki/Schematic:_Vault_Transport
building: "[[Guild Market]]"
description: Craft schematics for manufacturing a remote access to the guild vault.
level: 32
requires:
  - "[[Market Restoration 2]]"
  - "[[Guild Vault- Stash|Guild Vault: Stash]]"
xp: 35
cost:
  favor: 150
  aetherium: 3000
  gold: 0
isComplete: false
order: 17
materials:
  - link: "[[Pile of Incandescent Dust]]"
    count: 300
    isComplete: false
  - link: "[[Watchwork Portal Device]]"
    count: 5
    isComplete: false
  - link: "[[Cured Hardened Leather Square]]"
    count: 150
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```