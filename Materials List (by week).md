Below is a breakdown of the materials and other resources (excluding Favor and Aetherium) that will be required each week according to the [[Upgrade Plan]]. The list will update automatically as Upgrades are completed.

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

// Pull phases from frontmatter of the "Upgrade Plan" file
const phases = dv.page("Upgrade Plan").phases;
for (const phase of phases) {
    let gold = 0;
    let mats = [];
    // Get only the tasks where an upgrade is listed
    for (const task of dv.array(phase.tasks).where((t) => t.upgrade)) {
            // connect to upgrade file
            const upgrade = dv.page(task.upgrade);
            // Skip if the upgrade is already complete
            if (upgrade.isComplete) continue;
            // Add gold and mats to existing counts
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
    // Display message if no gold/mats left
    if (gold <= 0 && mats.length === 0) {
        const allDone = materials.createEl("p");
        allDone.append(...markdownToHtml(`*Everything for this week has been completed!*`));
    }
    else {
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
        if (gold > 0) {
            const coin = materials.createEl("p");
            coin.append(...markdownToHtml(`**Coin:** ${gold}![[coin-gold.png|css: icon]]`));
        }
        // List materials
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
}
```
