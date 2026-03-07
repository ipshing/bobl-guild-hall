---
saved: []
includeCompleted: false
---
Use this page to create a custom list of materials based on chosen upgrades. Materials will be sorted and filtered based on completed upgrades and completed materials within upgrades.

```dataviewjs
const saved = dv.array(dv.current().saved || []);
const includeCompleted = dv.current().includeCompleted || false;

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
async function saveItem(property, value) {
    const file = dv.app.vault.getFileByPath(dv.currentFilePath);
    await dv.app.fileManager.processFrontMatter(file, (frontmatter) => {
        if (!frontmatter[property]) {
            frontmatter[property] = [];
        }
        if (!frontmatter[property].find((a) => a == value)) {
            // Add to "top" of list
            frontmatter[property].unshift(value);
        }
    });
}

/****************************/
/*      Item Selector       */
/****************************/
const form = this.container.createDiv("item-selector");
// Search
const search = form.createDiv("column search");
search.createEl("h3", { cls: "header", text: "Search" });
const input = search.createEl("input");
input.setAttrs({
    "autocapitalize": "off",
    "spellcheck": "false",
    "enterkeyhint": "done",
    "type": "text",
    "placeholder": "Enter upgrade name..."
});
const results = search.createDiv("search-results list");
input.oninput = (e) => {
    // Clear results
    results.empty();
    // Only find matches if there is text in the input box
    let val = e.target.value.toLowerCase();
    if (val.trim().length > 0) {
        // Search upgrades for matches
        const matches = dv.pages("#guild-hall/upgrade")
            .where((u) => u.name.toLowerCase().contains(val))
            // Filter out already saved upgrades
            .where((u) => saved.none((s) => s.equals(u.file.link)))
            // Sort by name
            .sort((u) => u.name);
        for (const match of matches) {
            // Skip completed upgrades
            if (match.isComplete && !includeCompleted) continue;
            const item = results.createDiv({ cls: "result item", attr: { id: match.file.name }});
            const details = item.createDiv("details");
            details.createDiv({ cls: "item-name", text: match.name });
            const button = item.createDiv("button");
            const saveButton = button.createEl("button", "mod-cta");
            obsidian.setIcon(saveButton, "lucide-plus");
            saveButton.onclick = async () => {
                await saveItem("saved", `[[${match.file.name}]]`);
                // Clear input and results no matter what
                input.value = "";
                results.empty();
                
            };
        }
    }
};
input.onkeydown = async (e) => {
    if (e.code === "Enter" && results.children.length > 0) {
        // Get the first searched upgrade
        const first = results.children[0];
        // Try to find a matching upgrade page
        const match = dv.page(first.id);
        if (match) {
            await saveItem("saved", `[[${match.file.name}]]`);
            // Clear input and results no matter what
            input.value = "";
            results.empty();
        } 
    }
}
input.onclick = () => {
    input.value = "";
    results.empty();
}
// Saved Upgrades
const savedUpgrades = form.createDiv("column saved");
savedUpgrades.createEl("h3", { cls: "header", text: `Saved Upgrades (${saved.length})` });
const list = savedUpgrades.createDiv("saved-items list");
for (const upgrade of saved) {
    // Find the matching page for the upgrade
    const match = dv.page(upgrade);
    const item = list.createDiv({ cls: "saved item", attr: { id: match.file.name }});
    const details = item.createDiv("details");
    const name = details.createDiv({ cls: "item-name" });
    name.append(...markdownToHtml(`[[${match.file.name}|${match.name}]]`));
    const button = item.createDiv("save-button");
    const removeButton = button.createEl("button", "mod-cta");
    obsidian.setIcon(removeButton, "lucide-x");
    removeButton.onclick = async () => {
        const file = this.app.vault.getFileByPath(this.currentFilePath);
        await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
            const index = saved.indexOf(match.file.link);
            if (index > -1) {
                frontmatter.saved.splice(index, 1);
            }
        });
    };
}
const buttons = savedUpgrades.createDiv("buttons");
const clearBtn = buttons.createEl("button", { cls: "mod-warning", text: "Clear" });
clearBtn.onclick = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.saved = [];
    });
};

/****************************/
/*        Materials         */
/****************************/
// Apply 'guild-upgrade' class to container
this.container.addClass("guild-upgrade");

// Build list of materials
const mats = [];
for (const save of saved) {
    // Connect to upgrade file
    const upgrade = dv.page(save);
    // Skip if upgrade is already complete
    if (upgrade.isComplete && !includeCompleted) continue;
    // Tally up materials into the 'mats' array
    for (const material of upgrade.materials) {
        // Skip materials that are done
        if (material.isComplete && !includeCompleted) continue;
        // Check for existing in 'mats'
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
// Sort the list
mats.sort((a, b) => {
    const matA = dv.page(a.link);
    const matB = dv.page(b.link);
    if(matA.name < matB.name) return -1;
    else if(matA.name > matB.name) return 1;
    else return 0;
});
// Render the list
const materials = this.container.createDiv("materials");
const header = materials.createEl("h3", { text: "Materials" });
if (mats.length === 0) {
    materials.createEl("p", { text: "Search for and save upgrades above to see the combined materials list." });
}
else {
    // Copy button
    const copy = header.createEl("button", "copy-code-button mx-copy-button");
    obsidian.setIcon(copy, "lucide-copy");
    copy.onclick = (event) => {
            event.stopPropagation();
            // Determine longest materials count length
            let max = dv.array(mats).count.max().toString().length;
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
    // Materials List
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
}

// Always put input in focus
input.focus();
```
