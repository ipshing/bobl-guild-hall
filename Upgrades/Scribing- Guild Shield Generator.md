---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Shield Generator"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Shield_Generator
building: "[[War Room]]"
description: Craft schematics to manufacture WvW shield generators that cost less supply to place.
level: 38
requires:
  - "[[WvW Guild Claiming- Stonemist Castle]]"
xp: 35
cost:
  favor: 300
  aetherium: 20000
  gold: 0
isComplete: false
order: 42
materials:
  - link: "[[Sheet of Quality Paper]]"
    count: 20
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Crystal Lodestone]]"
    count: 30
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Large Scale]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```