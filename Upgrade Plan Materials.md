---
phases:
  - name: Week 1
    upgrades: 
      - "[[Create Guild]]"
      - "[[Guild Initiative Registration]]"
      - "[[Guild Hall]]"
      - "[[Tavern Restoration 1]]"
      - "[[General Merchant]]"
      - "[[Repair Anvil]]"
      - "[[Mine Excavation 1]]"
      - "[[Aetherium Capacity 1]]"
  - name: Week 2
    upgrades: 
      - "[[Workshop Restoration 1]]"
      - "[[Market Restoration 1]]"
      - "[[Mission Slot- PvE]]"
      - "[[Ore Synthesizer 1]]"
      - "[[Guild Enhancement- Karma]]"
      - "[[Guild Enhancement- Experience]]"
  - name: Week 3
    upgrades: 
      - "[[Mining Rate 1]]"
      - "[[War Room Restoration 1]]"
      - "[[Arena Restoration 1]]"
      - "[[Aetherium Capacity 2]]"
      - "[[Guild Enhancement- Critical Crafting]]"
  - name: Week 4
    upgrades: 
      - "[[Guild Enhancement- Critical Harvesting]]"
      - "[[Guild Enhancement- World Reward Tracks]]"
      - "[[Guild Enhancement- PvP Reward Boost]]"
      - "[[Arena Restoration 2]]"
      - "[[Guild Portal]]"
      - "[[Scribing- Guild Gathering Bonus Banner]]"
  - name: Week 5
    upgrades: 
      - "[[Mining Rate 2]]"
      - "[[Guild Enhancement- Map Bonus]]"
      - "[[Scribing- Guild Karma Banner]]"
      - "[[Scribing- Guild Experience Banner]]"
      - "[[Scribing- Guild Magic Find Banner]]"
      - "[[Guild Enhancement- Magic Find]]"
  - name: Week 6
    upgrades: 
      - "[[Mine Excavation 2]]"
      - "[[Aetherium Capacity 3]]"
      - "[[Mission Slot- WvW]]"
      - "[[Mission Slot- PvP]]"
      - "[[Guild Hall Swiftness +11%]]"
  - name: Week 7
    upgrades: 
      - "[[Lumber Synthesizer 1]]"
      - "[[Mining Rate 3]]"
      - "[[Cloth Synthesizer 1]]"
      - "[[Leather Synthesizer 1]]"
      - "[[Ore Synthesizer 2]]"
  - name: Week 8
    upgrades: 
      - "[[Tavern Restoration 2]]"
      - "[[Plant Synthesizers 1]]"
      - "[[Aetherium Capacity 4]]"
      - "[[Guild Hall Decorations Merchant 1]]"
      - "[[Guild Trader 1]]"
  - name: Week 9
    upgrades: 
      - "[[Market Restoration 2]]"
      - "[[Workshop Restoration 2]]"
      - "[[War Room Restoration 2]]"
      - "[[Mining Rate 4]]"
  - name: Week 10
    upgrades: 
      - "[[Leather Synthesizer 2]]"
      - "[[Cloth Synthesizer 2]]"
      - "[[Lumber Synthesizer 2]]"
      - "[[Guild Waypoint 5% Discount]]"
      - "[[Scribing- Guild Road Marker]]"
      - "[[Scribing- Guild Gold from Kills Banner]]"
      - "[[WvW Guild Claiming- Camps]]"
  - name: Week 11
    upgrades: 
      - "[[Guild Waypoint 10% Discount]]"
      - "[[Scribing- Guild Banquet]]"
      - "[[Scribing- Guild Karma and Experience Banner]]"
      - "[[Synthesis Output 1]]"
      - "[[Scribing- Sabotage Depot]]"
      - "[[Scribing- Minor Supply Drop]]"
  - name: Week 12
    upgrades: 
      - "[[Synthesis Output 2]]"
      - "[[Ore Synthesizer 3]]"
      - "[[Aetherium Capacity 5]]"
      - "[[Scribing- Armored Dolyaks]]"
  - name: Week 13
    upgrades: 
      - "[[Mine Excavation 3]]"
      - "[[Cloth Synthesizer 3]]"
      - "[[Lumber Synthesizer 3]]"
      - "[[Leather Synthesizer 3]]"
  - name: Week 14
    upgrades: 
      - "[[Mining Rate 5]]"
      - "[[Ore Synthesizer 4]]"
      - "[[Plant Synthesizers 2]]"
      - "[[Objective Aura 1- Supply Capacity]]"
      - "[[Scribing- Healing Mist]]"
  - name: Week 15
    upgrades: 
      - "[[Lumber Synthesizer 4]]"
      - "[[Cloth Synthesizer 4]]"
      - "[[Leather Synthesizer 4]]"
      - "[[Guild Armorer 1]]"
  - name: Week 16
    upgrades: 
      - "[[Aetherium Capacity 6]]"
      - "[[Synthesis Output 3]]"
      - "[[Ore Synthesizer 5]]"
      - "[[Lumber Synthesizer 5]]"
      - "[[Leather Synthesizer 5]]"
      - "[[Cloth Synthesizer 5]]"
      - "[[Objective Aura 2- WvW Experience]]"
  - name: Week 17
    upgrades: 
      - "[[Mining Rate 6]]"
      - "[[Plant Synthesizers 3]]"
      - "[[Guild Weaponsmith 1]]"
  - name: Week 18
    upgrades: 
      - "[[Guild Waypoint 15% Discount]]"
  - name: Week 19
    upgrades: 
      - "[[Ore Synthesizer 6]]"
      - "[[Synthesis Output 4]]"
---
Below is a breakdown of the materials and other resources (excluding Favor and Aetherium) that will be required each week according to the [[Upgrade Plan]]. This list does not currently update based on completed upgrades nor reflect the quantities adjusted for already collected materials.

```dataviewjs
/****************************/
/*     Helper Functions     */
/****************************/
function markdownToHtml(markdown) {
    // Create a temp element
    const temp = createDiv();
    // Use obsidian's renderer to convert the markdown to HTML
    obsidian.MarkdownRenderer.render(dv.app, markdown, temp, dv.currentFilePath, dv.component);
    // Renderer places element inside a <p> tag in the temp element
    const p = temp.find("p");
    if (p) return p.childNodes;
    else return temp.childNodes;
}

/****************************/
/*          Render          */
/****************************/
// Apply 'guild-upgrade' class to container
this.container.addClass("guild-upgrade");

// Pull phases from frontmatter
const phases = dv.current().phases;
for (const phase of phases) {
    let gold = 0;
    let mats = [];
    // Go through each upgrade to tally gold/materials
    for (const link of phase.upgrades) {
        // connect to upgrade file
        const upgrade = dv.page(link.path);
        gold += upgrade.cost.gold;
        for (const material of upgrade.materials) {
            // check for existing in 'mats'
            let mat = mats.find((m) => m.link.equals(material.link));
            if (!mat) {
                mat = {
                    link: material.link,
                    count: material.count
                };
                mats.push(mat);
            }
            else {
                mat.count += material.count;
            }
        }
    }
    // Sort mats
    mats.sort((a, b) => {
        const matA = dv.page(a.link);
        const matB = dv.page(b.link);
        if(matA.name < matB.name) return -1;
        else if(matA.name > matB.name) return 1;
        else return 0;
    });
    // Render list of materials
    const materials = this.container.createDiv("materials");
    // Header
    const header = materials.createEl("h2", { cls: "materials-header", text: phase.name });
    // Copy Button
    const copy = header.createEl("button", { cls: "copy-code-button mx-copy-code-button" });
    obsidian.setIcon(copy, "lucide-copy");
    copy.onclick = (event) => {
        event.stopPropagation();
        // Determine longest materials count length
        max = dv.array(mats).count.max().toString().length;
        if (max < 3) max = 3;
        // Build materials text
        let text = "";
        for (const material of mats) {
            const info = dv.page(material.link);
            text += `\`${material.count.toString().padStart(max, " ")}\`  |  [${info.name}](${info.wikiLink})\n`;
        }
        // Copy text to clipboard
        navigator.clipboard.writeText(text.trim());
        // Set icon and style
        obsidian.setIcon(copy, "lucide-check");
        copy.setCssStyles({
            color: "var(--text-success)",
            display: "inline-flex",
        });
        activeWindow.setTimeout(() => {
            // change icon and style back
            obsidian.setIcon(copy, "lucide-copy");
            copy.setCssStyles({
                color: "",
                display: "",
            });
        }, 1000);
    };
    // Coin (Gold)
    const coin = materials.createEl("p");
    coin.append(...markdownToHtml(`**Gold:** ${gold}![[coin-gold.png|css: icon]]`));
    // List
    const defList = materials.createEl("dl", "materials-list");
    // Add dl-padding class to override style sheet default
    defList.addClass("dl-padding-3-5");
    for (const material of mats) {
        defList.createEl("dt", { text: material.count });
        const matDetails = defList.createEl("dd");
        // Get mat info using dataview
        const matPage = dv.page(material.link);
        matDetails.append(...markdownToHtml(`![[${matPage.image}|css: icon]] [${matPage.name}](${matPage.wikiLink})`));
    }
}
```