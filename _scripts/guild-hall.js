/**
 * Lists all available guild hall buildings and their upgrades.
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
function formatCost(cost) {
    let costStr = "";
    if (cost.gold > 0) {
        costStr += `${cost.gold.toLocaleString("en-US")}![[coin-gold.png|css: icon]]`;
    }
    if (cost.favor > 0) {
        if (cost.gold > 0) costStr += " + ";
        costStr += `${cost.favor.toLocaleString("en-US")} ![[favor.png|css: icon]]`;
    }
    if (cost.aetherium > 0) {
        if (cost.gold > 0 || cost.favor > 0) costStr += " + ";
        costStr += `${cost.aetherium.toLocaleString("en-US")} ![[aetherium.png|css: icon]]`;
    }
    if (cost.gold > 0 || cost.favor > 0 || cost.aetherium > 0) costStr += " / ";
    return costStr;
}

/****************************/
/*          Render          */
/****************************/
// Get guild hall page
const hallPage = dv.current();
// Determine level by querying the XP from all completed upgrades
const xp = dv
    .pages('#guild-hall/upgrade AND -"_templates"')
    .where((u) => u.isComplete)
    .map((u) => u.xp)
    .sum();
const level = Math.floor(xp / 100) || 0;
const guildLevel = dv.container.createDiv("guild-xp");
guildLevel.append(...markdownToHtml(`Guild Level: **${level}** *(${xp}xp)*`));
// Determine aetherium capacity
let capacity = 500; // default
let miningPages = dv
    .pages('#guild-hall/upgrade AND -"_templates"')
    .where((u) => dv.func.link("Guild Mine").equals(u.building))
    .where((u) => u.capacity)
    .where((u) => u.isComplete)
    .sort((u) => u.order, "desc");
if (miningPages.length > 0) {
    capacity = miningPages.first().capacity;
}
const miningCapacity = dv.container.createDiv("mining-capacity");
miningCapacity.append(...markdownToHtml(`Mining Capacity: **${capacity.toLocaleString("en-us")}** ![[aetherium.png|css: icon]]`));
// Determine aetherium rate
let rate = 60; // default
miningPages = dv
    .pages('#guild-hall/upgrade AND -"_templates"')
    .where((u) => dv.func.link("Guild Mine").equals(u.building))
    .where((u) => u.rate)
    .where((u) => u.isComplete)
    .sort((u) => u.order, "desc");
if (miningPages.length > 0) {
    rate = miningPages.first().rate;
}
// Set aetherium per hour (aph) and time to 1000 units (ttk) based on rate
let aph = 60;
let ttk = "16h 40m";
switch (rate) {
    case 60:
    default:
        aph = 60;
        ttk = "16h 40m";
        break;
    case 50:
        aph = 72;
        ttk = "13h 54m";
        break;
    case 40:
        aph = 90;
        ttk = "11h 07m";
        break;
    case 30:
        aph = 120;
        ttk = "8h 20m";
        break;
    case 25:
        aph = 144;
        ttk = "6h 57m";
        break;
    case 20:
        aph = 180;
        ttk = "5h 34m";
        break;
    case 15:
        aph = 240;
        ttk = "4h 10m";
        break;
}
const miningRate = dv.container.createDiv("mining-rate");
miningRate.append(...markdownToHtml(`Mining Rate: **${aph}** ![[aetherium.png|css: icon]] per hour (time to **1000**: ${ttk})`));

// Get all buildings
const buildings = dv.pages('#guild-hall/building AND -"_templates"').sort((b) => b.order);
for (const building of buildings) {
    // Get upgrades for the building; filter out upgrades
    // that don't yet meet the requirements.
    let upgrades = dv
        .pages('#guild-hall/upgrade AND -"_templates"')
        .where((u) => u.building.equals(building.file.link))
        .sort((u) => u.order);
    if (!hallPage.showAll) {
        upgrades = upgrades.where((u) => u.level <= level).where((u) => u.requires.length === 0 || u.requires.filter((r) => !dv.page(r).isComplete).length < 1);
    }
    if (upgrades.length > 0) {
        // Header
        dv.container.createEl("h3", { cls: "building-header", text: building.file.name });
        // Upgrade list
        const upgradeList = dv.container.createEl("ul", "contains-task-list has-list-bullet upgrade-list");
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
            li.append(...markdownToHtml(`[[${upgrade.file.name}|${upgrade.name}]] (${formatCost(upgrade.cost)}level ${upgrade.level}) *${upgrade.xp}xp*`));
        }
    }
}
