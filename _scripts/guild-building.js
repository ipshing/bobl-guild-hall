/**
 * Lists out all upgrades associated with a given guild building.
 */

// Process input arguments
const obsidian = input.obsidian;

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
// Get all pages that link back to dv.file
const upgrades = dv
    .pages("#guild-hall/upgrade")
    .where((u) => u.building.equals(dv.func.link(dv.currentFilePath)))
    .sort((u) => u.order);
// List files
const upgradeList = dv.container.createEl("ul", "contains-task-list has-list-bullet materials-list");
for (const upgrade of upgrades) {
    // Create list item
    const li = upgradeList.createEl("li", { cls: "task-list-item", attr: { "data-task": "", dir: "auto" } });
    li.createEl("span", "list-bullet");
    const chkbox = li.createEl("input", { cls: "task-list-item-checkbox", attr: { type: "checkbox" } });
    if (upgrade.isComplete) {
        li.addClass("is-checked");
        li.setAttr("data-task", "x");
        chkbox.setAttr("checked");
    }
    chkbox.onclick = async () => {
        const file = dv.app.vault.getFileByPath(upgrade.file.path);
        await dv.app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.isComplete = !frontmatter.isComplete;
        });
    };
    li.append(...markdownToHtml(`[[${upgrade.file.name}|${upgrade.name}]]`));
}
