---
saved: []
includeCompleted: false
viewState:
  grouping: combined
  layout: collapsed
---
Use this page to create a custom list of materials based on chosen upgrades. Materials will be sorted and filtered based on completed upgrades and completed materials within upgrades.

```dataviewjs
// Get props from frontmatter
let saved = dv.array(dv.current().saved || []);
let includeCompleted = dv.current().includeCompleted || false;
let materialsView = dv.current().viewState?.grouping?.toString().toLowerCase() || "combined";
// Default view to "combined"
if (materialsView !== "combined" && materialsView !== "separate") materialsView = "combined";
let layout = dv.current().viewState?.layout?.toString().toLowerCase() || "collapsed";
if (layout !== "collapsed" && layout !== "expanded") layout = "collapsed";
// Get guild level
const xp = dv
    .pages('#guild-hall/upgrade AND -"_templates"')
    .where((u) => u.isComplete)
    .map((u) => u.xp)
    .sum();
const level = Math.floor(xp / 100) || 0;

// Connect to meta-bind api
const mb = app.plugins.getPlugin("obsidian-meta-bind-plugin")?.api;

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
            frontmatter[property].push(value);
        }
    });
}
// Sets a value in global memory whether the input field
// should be focused on next load or not.
function focusInput(val) {
    if (mb) {
        const bindTarget = mb.parseBindTarget("globalMemory^inputFocus", dv.currentFilePath);
        mb.setMetadata(bindTarget, val); 
    }
}
// Gets from global memory whether or not the input field
// should get focus.
function shouldInputFocus() {
    if (mb) {
        const bindTarget = mb.parseBindTarget("globalMemory^inputFocus", dv.currentFilePath);
        return mb.getMetadata(bindTarget) || false;
    }
    return false;
}
async function toggleCollapse(list, item, icon) {
    const collapsible = list.findAll(":scope > li.collapsible");
    if (item.hasClass("is-collapsed")) {
        // expand it
        item.removeClass("is-collapsed");
        icon.removeClass("is-collapsed");
        // check siblings
        if (collapsible && collapsible.length > 0 && !collapsible.some((i) => i.hasClass("is-collapsed")) && layout !== "expanded") {
            // Update frontmatter
            const file = dv.app.vault.getFileByPath(dv.currentFilePath);
            await dv.app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.viewState.layout = "expanded";
            });   
        }
    }
    else {
        // collapse it
        item.addClass("is-collapsed");
        icon.addClass("is-collapsed");
        // check siblings
        if (collapsible && collapsible.length > 0 && collapsible.every((i) => i.hasClass("is-collapsed")) && layout !== "collapsed") {
            // Update frontmatter
            const file = dv.app.vault.getFileByPath(dv.currentFilePath);
            await dv.app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.viewState.layout = "collapsed";
            });   
        }
    }
}

// Set class for container
this.container.addClass("gw2-tool");
this.container.addClass("guild-upgrade"); // for materials lists

/****************************/
/*         Settings         */
/****************************/
const settings = this.container.createDiv("settings");
const completedSetting = settings.createDiv("setting");
completedSetting.createDiv({ cls: "description", text: "Include Completed Upgrades" });
const completedToggleContainer = completedSetting.createDiv("control checkbox-container");
const completedToggle = completedToggleContainer.createEl("input", { attr: { type: "checkbox" }});
if (includeCompleted) {
    completedToggleContainer.addClass("is-enabled");
}
completedToggleContainer.onclick = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.includeCompleted = !includeCompleted;
    });    
}

/****************************/
/*      Item Selector       */
/****************************/
const form = this.container.createDiv("item-selector");
// Search
const search = form.createDiv("column search");
search.createEl("h2", { cls: "header", text: "Search" });
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
            obsidian.setIcon(saveButton, "plus");
            saveButton.onclick = async () => {
                await saveItem("saved", `[[${match.file.name}]]`);
                // Clear input and results no matter what
                input.value = "";
                results.empty();
                focusInput(true);
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
            focusInput(true);
        } 
    }
}
input.onclick = () => {
    input.value = "";
    results.empty();
}
// Saved Upgrades
const savedUpgrades = form.createDiv("column saved");
savedUpgrades.createEl("h2", { cls: "header", text: `Saved Upgrades (${saved.length})` });
const list = savedUpgrades.createDiv("saved-items list");
for (const upgrade of saved) {
    // Find the matching page for the upgrade
    const match = dv.page(upgrade);
    const item = list.createDiv({ cls: "saved item", attr: { id: match.file.name }});
    const details = item.createDiv("details");
    const name = details.createDiv({ cls: "item-name" });
    name.append(...markdownToHtml(`[[${match.file.name}|${match.name}]]`));
    const button = item.createDiv("save-button");
    const removeButton = button.createEl("button", "mod-warning");
    obsidian.setIcon(removeButton, "trash");
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
const materials = this.container.createDiv("materials");
const header = materials.createEl("h2", { text: "Materials" });
// View selector
const view = materials.createDiv("view-select");
view.createEl("label", { text: "View" });
const select = view.createEl("select", "dropdown");
select.createEl("option", { attr: { value: "combined" }, text: "Combined" });
select.createEl("option", { attr: { value: "separate" }, text: "By Upgrade" });
select.value = materialsView;
select.onchange = async () => {
    // Update frontmatter
    const file = dv.app.vault.getFileByPath(dv.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.viewState.grouping = select.value;
    });
}
// Expand/Collapse button
const toggleExpand = view.createEl("button");
if (layout === "collapsed") {
    obsidian.setIcon(toggleExpand, "lucide-chevrons-up-down");
    obsidian.setTooltip(toggleExpand, "Expand all");
}
else if (layout === "expanded") {
    obsidian.setIcon(toggleExpand, "lucide-chevrons-down-up");
    obsidian.setTooltip(toggleExpand, "Collapse all");
}
toggleExpand.onclick = async () => {
    // Update frontmatter
    const file = dv.app.vault.getFileByPath(dv.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.viewState.layout = layout === "collapsed" ? "expanded" : "collapsed";
    });    
}
// Combined List
if (materialsView === "combined") {
    // Build list of materials
    const mats = [];
    for (const save of saved) {
        // Connect to upgrade file
        const upgrade = dv.page(save);
        // Tally up materials into the 'mats' array
        for (const material of upgrade.materials) {
            // Check for existing in 'mats'
            let mat = mats.find((m) => m.link.equals(material.link));
            if (!mat) {
                mat = {
                    link: material.link,
                    count: material.count,
                    complete: material.isComplete ? material.count : 0,
                    upgrades: []
                };
                mats.push(mat);
            }
            else {
                mat.count += material.count;
                mat.complete += material.isComplete ? material.count : 0;
            }
            // Add upgrade to mat
            mat.upgrades.push(upgrade);
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
    if (mats.length === 0) {
        materials.createEl("p", { text: "Search for and save upgrades above to see the combined materials list." });
    }
    else {
        // Add copy button
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
        // Render the list
        const taskList = materials.createEl("ul", "contains-task-list has-list-bullet materials-list");
        for (const material of mats) {
            // Get mat info
            const matPage = dv.page(material.link);
            // Create list item
            const li = taskList.createEl("li", { cls: "task-list-item", attr: { "data-task": "", dir: "auto" } });
            let collapseIcon;
            if (material.upgrades.length > 1) {
                li.addClass("collapsible");
                collapseIcon = li.createDiv("collapse-icon");
                if (layout === "collapsed") {
                    li.addClass("is-collapsed");
                    collapseIcon.addClass("is-collapsed");
                }
                obsidian.setIcon(collapseIcon, "lucide-chevron-down");
                collapseIcon.onclick = async () => await toggleCollapse(taskList, li, collapseIcon);
            }
            li.createEl("span", "list-bullet");
            const chkbox = li.createEl("input", { cls: "task-list-item-checkbox", attr: { type: "checkbox" } });
            if (material.count === material.complete) {
                li.addClass("is-checked");
                li.setAttr("data-task", "x");
                chkbox.setAttr("checked");
            }
            else if (material.complete > 0) {
                li.addClass("is-checked");
                li.addClass("is-partial");
                li.setAttr("data-task", "x");
                chkbox.setAttr("checked");
            }
            chkbox.onclick = async () => {
                // Find material in all saved pages and mark complete
                for (const save of saved) {
                    // Connect to upgrade file
                    const upgrade = dv.page(save);
                    const index = upgrade.materials.findIndex((m) => m.link.equals(material.link));
                    if (index > -1) {
                        const file = dv.app.vault.getFileByPath(upgrade.file.path);
                        await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
                            frontmatter.materials[index].isComplete = !(material.count === material.complete);
                        });
                    }
                }
            };
            // Display text
            const display = li.createDiv("item-text");
            const name = material.count > 1 ? matPage.plural : matPage.name;
            if (material.upgrades.length > 1) {
                display.append(...markdownToHtml(`![[${matPage.image}|css: icon]]`));
                // generate anchor element with tooltip
                const anchor = display.createEl("a", { text: `${material.count} ${name}` });
                obsidian.setTooltip(anchor, "Click to expand");
                anchor.onclick = async () => await toggleCollapse(taskList, li, collapseIcon);
            }
            else {
                display.append(...markdownToHtml(`![[${matPage.image}|css: icon]] [[${material.upgrades[0].file.name}|${material.count} ${name}]]`));
            }
            // Add warning icon
            if (material.upgrades.some((u) => u.level > level)) {
                const warning = display.createDiv("warning");
                obsidian.setIcon(warning, "lucide-triangle-alert");
                if (material.upgrades.length > 1) {
                    obsidian.setTooltip(warning, "One or more upgrades are not yet available");
                }
                else {
                    obsidian.setTooltip(warning, `Available at level ${material.upgrades[0].level}`);
                }
            }
            else if (material.upgrades.some((u) => u.requires.some((link) => !dv.page(link).isComplete))) {
                const warning = display.createDiv("warning");
                obsidian.setIcon(warning, "lucide-triangle-alert");
                obsidian.setTooltip(warning, "One or more requirements have not been met");
            }
            // Create sublist of upgrades
            if (material.upgrades.length > 1) {
                const sublist = li.createEl("ul", "contains-task-list has-list-bullet upgrade-list");
                for (const parent of material.upgrades) {
                    const subitem = sublist.createEl("li", { cls: "task-list-item", attr: { "data-task": "", dir: "auto" } });
                    subitem.createEl("span", "list-bullet");
                    const subChkbox = subitem.createEl("input", { cls: "task-list-item-checkbox", attr: { type: "checkbox" } });
                    const index = parent.materials.findIndex((m) => m.link.equals(material.link));
                    if (index < 0) continue;
                    if (parent.materials[index].isComplete) {
                        subitem.addClass("is-checked");
                        subitem.setAttr("data-task", "x");
                        subChkbox.setAttr("checked");
                    }
                    subChkbox.onclick = async () => {
                        const file = dv.app.vault.getFileByPath(parent.file.path);
                        await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
                            frontmatter.materials[index].isComplete = !(material.count === material.complete);
                        });
                    };
                    const subDisplay = subitem.createDiv("item-text");
                    subDisplay.append(...markdownToHtml(`[[${parent.file.name}|${parent.name}]] (${parent.materials[index].count})`));
                    if (parent.level > level) {
                        const warning = subDisplay.createDiv("warning");
                        obsidian.setIcon(warning, "lucide-triangle-alert");
                        obsidian.setTooltip(warning, `Available at level ${parent.level}`);
                    }
                    else if (parent.requires.some((link) => !dv.page(link).isComplete)) {
                        const warning = subDisplay.createDiv("warning");
                        obsidian.setIcon(warning, "lucide-triangle-alert");
                        obsidian.setTooltip(warning, "One or more requirements have not been met");
                    }
                }
            }
        }
    }
}
// Separated by Upgrade
else {
    for (const save of saved) {
        const mats = [];
        // Connect to upgrade file
        const upgrade = dv.page(save);
        // Tally up materials into the 'mats' array
        for (const material of upgrade.materials) {
            // Check for existing in 'mats'
            let mat = mats.find((m) => m.link.equals(material.link));
            if (!mat) {
                mat = {
                    link: material.link,
                    count: material.count,
                    isComplete: material.isComplete
                };
                mats.push(mat);
            }
            else {
                mat.count += material.count;
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
        // Render list of materials
        const header = materials.createEl("h4", { cls: "materials-header", text: upgrade.name });
        if (mats.length == 0) {
            const allDone = materials.createEl("p");
            allDone.append(...markdownToHtml(`*All materials for this upgrade have been completed!*`));
        }
        else {
            // Add copy button
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
            if (upgrade.level > level) {
                const warning = header.createDiv("warning");
                obsidian.setIcon(warning, "lucide-triangle-alert");
                obsidian.setTooltip(warning, `Available at level ${upgrade.level}`);                
            }
            // Render the list
            const taskList = materials.createEl("ul", "contains-task-list has-list-bullet materials-list");
            for (const material of mats) {
                // Get mat info
                const matPage = dv.page(material.link);
                // Create list item
                const li = taskList.createEl("li", { cls: "task-list-item", attr: { "data-task": "", dir: "auto" } });
                li.createEl("span", "list-bullet");
                const chkbox = li.createEl("input", { cls: "task-list-item-checkbox", attr: { type: "checkbox" } });
                if (material.isComplete) {
                    li.addClass("is-checked");
                    li.setAttr("data-task", "x");
                    chkbox.setAttr("checked");
                }
                chkbox.onclick = async () => {
                    const index = upgrade.materials.findIndex((m) => m.link.equals(material.link));
                    if (index > -1) {
                        const file = dv.app.vault.getFileByPath(upgrade.file.path);
                        await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
                            frontmatter.materials[index].isComplete = !frontmatter.materials[index].isComplete;
                        });
                    }
                };
                // Pluralize name if necessary
                const name = material.count > 1 ? matPage.plural : matPage.name;
                li.append(...markdownToHtml(`![[${matPage.image}|css: icon]] [${material.count} ${name}](${matPage.wikiLink})`));
            }
        }
    }
}


// Focus the input
if (shouldInputFocus()) {
    input.focus();
    // Set focus to false for next load
    focusInput(false);
}

```
