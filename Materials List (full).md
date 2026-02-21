Below is the **full list** of materials needed for the remaining Upgrades in the [[Upgrade Plan]]. The list will update automatically as Upgrades are completed.

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
let mats = [];
const phases = dv.page("Upgrade Plan").phases;
for (const phase of phases) {
    // Get only the tasks where an upgrade is listed
    for (const task of dv.array(phase.tasks).where((t) => t.upgrade)) {
        // connect to upgrade file
        const upgrade = dv.page(task.upgrade);
        // Skip if the upgrade is already complete
        if (upgrade.isComplete) continue;
        // Tally up materials into the 'mats' array
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
// List
const defList = materials.createEl("dl", "materials-list");
// Adjust dl-padding here to override main css style
defList.addClass("dl-padding-4");
for (const material of mats) {
    defList.createEl("dt", { text: material.count });
    const matDetails = defList.createEl("dd");
    // Get mat info using dataview
    const matPage = dv.page(material.link);
    matDetails.append(...markdownToHtml(`![[${matPage.image}|css: icon]] [${matPage.name}](${matPage.wikiLink})`));
}
```
