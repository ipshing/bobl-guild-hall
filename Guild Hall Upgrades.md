---
showAll: false
---
```meta-bind-button
style: destructive
label: Reset All
id: reset-button
action:
  type: "js"
  file: "_scripts/reset.js"
```

`INPUT[toggle:showAll]` Show All

```dataviewjs
await dv.view("_scripts/guild-hall", { obsidian: obsidian });
```