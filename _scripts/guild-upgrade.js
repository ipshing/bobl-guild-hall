/**
 * Lists the details and materials needed for a guild hall upgrade.
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
// Get page
const page = dv.page(dv.currentFilePath);
// Create a container to hold the upgrade info
const upgrade = dv.container.createDiv("guild-upgrade");
// Wiki link
// const wiki = upgrade.createEl("p", "wiki-link");
upgrade.append(...markdownToHtml(`[Wiki Link](${page.wikiLink})`));
// Details
const details = upgrade.createDiv("details");
details.createEl("h3", { cls: "details-header", text: "Details" });
const detailsList = details.createEl("dl", "details-list");
// Building
detailsList.createEl("dt", { text: "Building" });
const building = detailsList.createEl("dd", "building");
building.append(...markdownToHtml(page.building.markdown()));
// Guild Level
detailsList.createEl("dt", { text: "Guild Level" });
//                               .toString() ensures 0's get displayed
detailsList.createEl("dd", { cls: "level", text: page.level.toString() });
// Requirements
detailsList.createEl("dt", { text: "Requires" });
const requires = detailsList.createEl("dd", "requirements");
if (!page.requires) {
    requires.addClass("no-requirements");
    requires.append(document.createTextNode("None"));
} else {
    for (const req of page.requires) {
        const div = requires.createDiv("requirement");
        div.append(...markdownToHtml(req.markdown()));
    }
}
// Guild XP
detailsList.createEl("dt", { text: "Guild XP" });
//                         .toString() ensures 0's get displayed
detailsList.createEl("dd", { cls: "xp", text: page.xp.toString() });
// Cost
detailsList.createEl("dt", { text: "Cost" });
const cost = detailsList.createEl("dd", "cost");
if (page.cost.gold > 0) {
    cost.append(document.createTextNode(page.cost.gold.toLocaleString("en-US")));
    cost.append(...markdownToHtml("![[coin-gold.png|css: icon]]"));
}
if (page.cost.favor > 0) {
    if (page.cost.gold > 0) cost.append(document.createTextNode(" + "));
    cost.append(document.createTextNode(page.cost.favor.toLocaleString("en-US") + " "));
    cost.append(...markdownToHtml("![[favor.png|css: icon]]"));
}
if (page.cost.aetherium > 0) {
    if (page.cost.favor > 0) cost.append(document.createTextNode(" + "));
    cost.append(document.createTextNode(page.cost.aetherium.toLocaleString("en-US") + " "));
    cost.append(...markdownToHtml("![[aetherium.png|css: icon]]"));
}
// Description
if (page.description) {
    detailsList.createEl("dt", { text: "Description" });
    const desc = detailsList.createEl("dd", "description");
    desc.append(...markdownToHtml(page.description));
}

// Materials
if (page.materials.length > 0) {
    const materials = upgrade.createDiv("materials");
    const header = materials.createEl("h3", { cls: "materials-header", text: "Materials" });
    // Add copy button
    const copy = header.createEl("button", { cls: "copy-code-button mx-copy-code-button" });
    obsidian.setIcon(copy, "lucide-copy");
    copy.onclick = (event) => {
        event.stopPropagation();
        // Determine longest materials count length
        max = dv.array(page.materials).count.max().toString().length;
        if (max < 3) max = 3;
        // Build materials text
        let text = "";
        for (const material of page.materials) {
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
    /* If displaying as a definition list */
    // const matList = materials.createEl("dl", "materials-list");
    // for (const material of page.materials) {
    //     matList.createEl("dt", { text: material.count });
    //     const matDetails = matList.createEl("dd");
    //     // Get mat info using dataview
    //     const matPage = dv.page(material.link);
    //     matDetails.append(...markdownToHtml(`![[${matPage.image}|css: icon]] [${matPage.name}](${matPage.wikiLink})`));
    // }
    /* If displaying as a task list */
    const matList = materials.createEl("ul", "contains-task-list has-list-bullet materials-list");
    for (let i = 0; i < page.materials.length; i++) {
        const material = page.materials[i];
        // Get mat info
        const matPage = dv.page(material.link);
        // Create list item
        const li = matList.createEl("li", { cls: "task-list-item", attr: { "data-task": "", dir: "auto" } });
        li.createEl("span", "list-bullet");
        const chkbox = li.createEl("input", { cls: "task-list-item-checkbox", attr: { type: "checkbox" } });
        if (material.isComplete) {
            li.addClass("is-checked");
            li.setAttr("data-task", "x");
            chkbox.setAttr("checked");
        }
        chkbox.onclick = async () => {
            const file = dv.app.vault.getFileByPath(page.file.path);
            await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
                const target = frontmatter.materials[i];
                if (target) {
                    target.isComplete = !target.isComplete;
                }
            });
        };
        // Pluralize name if necessary
        const name = material.count > 1 ? matPage.plural : matPage.name;
        li.append(...markdownToHtml(`![[${matPage.image}|css: icon]] [${material.count} ${name}](${matPage.wikiLink})`));
    }
}
