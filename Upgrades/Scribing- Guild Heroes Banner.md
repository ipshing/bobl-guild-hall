---
tags:
  - guild-hall/upgrade
name: "Scribing: Guild Heroes Banner"
wikiLink: https://wiki.guildwars2.com/wiki/Scribing:_Guild_Heroes_Banner
building: "[[Guild Tavern]]"
description: Craft schematics to manufacture banners that offer allies boosts to karma, experience, gold gain, gathering chance, magic find, and run speed for 30 minutes.
level: 37
requires:
  - "[[Scribing- Guild Gathering and Swiftness Banner|Scribing: Guild Gathering and Swiftness Banner]]"
  - "[[Scribing- Guild Gold and Magic Find Banner|Scribing: Guild Gold and Magic Find Banner]]"
  - "[[Scribing- Guild Karma and Experience Banner|Scribing: Guild Karma and Experience Banner]]"
xp: 35
cost:
  favor: 400
  aetherium: 5000
  gold: 0
isComplete: false
order: 24
materials:
  - link: "[[Sheet of Premium Paper]]"
    count: 20
    isComplete: false
  - link: "[[Mithril Ingot]]"
    count: 100
    isComplete: false
  - link: "[[Cured Thick Leather Square]]"
    count: 100
    isComplete: false
  - link: "[[Elder Wood Plank]]"
    count: 100
    isComplete: false
  - link: "[[Obsidian Shard]]"
    count: 20
    isComplete: false
  - link: "[[Tome of Knowledge]]"
    count: 10
    isComplete: false
  - link: "[[Gold Ingot]]"
    count: 50
    isComplete: false
  - link: "[[Exotic Essence of Luck]]"
    count: 77
    isComplete: false
  - link: "[[Omnomberry|Omnomberry]]"
    count: 100
    isComplete: false
  - link: "[[Seaweed|Seaweed]]"
    count: 100
    isComplete: false
---

```dataviewjs
await dv.view("_scripts/guild-upgrade", { obsidian: obsidian });
```