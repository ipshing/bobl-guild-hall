---
discord:
  miningRate: ""
  current: 277
  target: 1000
  ttu: 2026-03-11T14:18:11.982-07:00
timer:
  - aetherium: "15000"
    miningRate: Mining Rate 5
calculator:
  miningRate: Mining Rate 6
  days: 0
  hours: 3
  minutes: 25
---

```dataviewjs
// Constants
const AETH_VALUES = [100, 500, 750, 1000, 1500, 2000, 3000, 5000, 7500, 10000, 15000, 20000, 25000];
const MINING_RATES = ["None", "Mining Rate 1", "Mining Rate 2", "Mining Rate 3", "Mining Rate 4", "Mining Rate 5", "Mining Rate 6"]

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
function getGuildMiningRate(override) {
    // Default values
    let name = "None";
    let spa = 60;
    let aph = 60
    let ttk = "16h 40m";
    // Locate current rate page
    let ratePage = dv
        .pages('#guild-hall/upgrade AND -"_templates"')
        .where((u) => dv.func.link("Guild Mine").equals(u.building))
        .where((u) => u.name.toLowerCase().startsWith("mining rate"))
        .where((u) => u.isComplete)
        .sort((u) => u.order, "desc")
        .first();
    // Override if provided
    if (override) {
        ratePage = dv
            .pages('#guild-hall/upgrade AND -"_templates"')
            .where((u) => dv.func.link("Guild Mine").equals(u.building))
            .where((u) => u.name == override)
            .first();
    }
    // Update values
    if (ratePage) {
        name = ratePage.name;
        spa = ratePage.secondsPerAetherium;
        aph = ratePage.aetheriumPerHour;
        ttk = ratePage.timeToThousand.toFormat("h'h' m'm'");
    }
    return { name: name, spa: spa, aph: aph, ttk: ttk };
}
function createTextInput(parent, value, css) {
    const input = parent.createEl("input")
    input.setAttrs({
        "autocapitalize": "off",
        "spellcheck": "false",
        "enterkeyhint": "done",
        "type": "text",
    });
    if (value) {
        input.value = value;
    }
    if (css) {
        input.addClass(css);
    }
    return input;
}
function createTable(parent, css, headers) {
    const table = parent.createEl("table", css);
    if (headers) {
        const thead = table.createEl("thead");
        const row = thead.createEl("tr");
        for (const header of headers) {
            const cell = row.createEl("th", { text: header });
        }
    }
    return table;
}
function copyTimeCode(code, btn) {
    if (code.textContent.trim().length === 0) return;
    // Copy text to clipboard
    navigator.clipboard.writeText(code.textContent.trim());
    // Set icon and style
    obsidian.setIcon(btn, "lucide-check");
    btn.setCssStyles({
        color: "var(--text-success)",
        display: "inline-flex",
    });
    activeWindow.setTimeout(() => {
        // change icon and style back
        obsidian.setIcon(btn, "lucide-copy");
        btn.setCssStyles({
            color: "",
            display: "",
        });
    }, 1000);
}

// Add parent class to container
this.container.addClass("gw2-tool");
this.container.addClass("aetherium");

/****************************/
/*    Discord Timestamp     */
/****************************/
// Get discord-related properties
let discordRateOverride = dv.current().discord.miningRate || "";
let aethCurrent = dv.current().discord.current;
let aethTarget = dv.current().discord.target;
let ttu = dv.current().discord.ttu;

// Determine current mining rate, seconds per aetherium (spa), 
// aetherium per hour (aph), and time to 1000 aetherium (ttk)
let discordMiningRate = getGuildMiningRate(discordRateOverride);

// Header/description
this.container.createEl("h2", { text: "Discord Timestamp" });
this.container.createEl("p", { text: "Calculates the amount of time it takes to accumulate aetherium from a specified starting point, then provides copyable, Discord-coded timestamps. Mining Rate is customizeable." });
const discord = this.container.createDiv("discord");
const controls = discord.createDiv("column controls");
// Mining rate
const discordRate = controls.createDiv("mining-rate");
discordRate.createDiv({ text: "Current Rate:" });
const discordSelect = discordRate.createEl("select", "dropdown");
discordSelect.disabled = !discordRateOverride;
for (const val of MINING_RATES) discordSelect.createEl("option", { attr: { value: val }, text: val });
// Set value after adding options
discordSelect.value = discordMiningRate.name;
discordSelect.onchange = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.discord.miningRate = discordSelect.value;
    });    
}
const discordOverride = controls.createDiv("override");
discordOverride.createEl("label", { text: "Override" });
const discordOverrideContainer = discordOverride.createDiv("checkbox-container");
const discordOverrideInput = discordOverrideContainer.createEl("input", { attr: { type: "checkbox" }});
if (discordRateOverride) {
    discordOverrideContainer.addClass("is-enabled");
}
discordOverrideContainer.onclick = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        if (discordRateOverride) {
            frontmatter.discord.miningRate = "";
        }
        else {
            frontmatter.discord.miningRate = discordSelect.value;
        }
    });    
}

// Display current details
const details = controls.createDiv("details");
// Show seconds per aetherium
details.createDiv().append(...markdownToHtml(`**1** ![[aetherium.png|css: icon]] every ${discordMiningRate.spa} seconds`));
// Show aetherium per hour
details.createDiv().append(...markdownToHtml(`**${discordMiningRate.aph}** ![[aetherium.png|css: icon]] per hour`));
// Show time to 1000 aetherium
details.createDiv().append(...markdownToHtml(`time to **1000** ![[aetherium.png|css: icon]]: ${discordMiningRate.ttk}`));

// Set up inputs
const inputs = controls.createDiv("inputs");
// Custom input for current aetherium
const current = inputs.createDiv("current");
current.createDiv().append(...markdownToHtml(`Current ![[aetherium.png|css: icon]]`));
const currentInput = createTextInput(current, aethCurrent);
// Custom input for target aetherium
const target = inputs.createDiv("target");
target.createDiv().append(...markdownToHtml(`Target ![[aetherium.png|css: icon]]`));
const targetInput = createTextInput(target, aethTarget);
// Show time to target with copy button for discord
const buttons = inputs.createDiv("buttons");
const calcButton = buttons.createEl("button", { cls: "mod-cta", text: "Calculate" });
calcButton.onclick = async () => {
    // Run some basic error checks
    let hasError = false;
    aethCurrent = 0;
    aethTarget = 0;
    if (currentInput.value.trim().length === 0 || 
        targetInput.value.trim().length === 0) {
        hasError = true;
    }
    else {
        aethCurrent = Number(currentInput.value.trim());
        aethTarget = Number(targetInput.value.trim());
        if (aethCurrent < 0 || !Number.isInteger(Number(aethCurrent)) || 
            aethTarget < 0 || !Number.isInteger(Number(aethTarget)) ||
            aethTarget < aethCurrent) {
            hasError = true;
        }
    }
    if (hasError) {
        new obsidian.Notice("Cannot calculate. Current and Target values must be integers greater than or equal to 0, and the Target must be greater than or equal to the Current.");
        return;
    }
    // Get diff and multiply by spa
    let seconds = (aethTarget - aethCurrent) * discordMiningRate.spa;
    ttu = DateTime.now().plus({ seconds: seconds });
    // Store in frontmatter
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.discord.current = aethCurrent;
        frontmatter.discord.target = aethTarget;
        frontmatter.discord.ttu = ttu.toISO();
    });
};
const resetButton = buttons.createEl("button", { cls: "mod-warning", text: "Reset" });
resetButton.onclick = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.discord.miningRate = null;
        frontmatter.discord.current = null;
        frontmatter.discord.target = null;
        frontmatter.discord.ttu = null;
    });
};

// Set up results
const results = discord.createDiv("column results");
const resultsTable = createTable(results, "gw2-table col-1-width-1 col-1-nowrap no-footer", ["Discord Code", "Preview"]);
const tbody = resultsTable.createEl("tbody");
const shortDt = tbody.createEl("tr");
const shortDtCodeCol = shortDt.createEl("td", "code");
const shortDtCodeDiv = shortDtCodeCol.createDiv();
const shortDtCode = shortDtCodeDiv.createDiv("code-box");
const shortDtCopy = shortDtCodeDiv.createEl("button", "copy-code-button mx-copy-button");
const shortDtPrev = shortDt.createEl("td", "preview");
shortDtCopy.onclick = () => copyTimeCode(shortDtCode, shortDtCopy);
const shortTime = tbody.createEl("tr");
const shortTimeCodeCol = shortTime.createEl("td", "code");
const shortTimeCodeDiv = shortTimeCodeCol.createDiv();
const shortTimeCode = shortTimeCodeDiv.createDiv("code-box");
const shortTimeCopy = shortTimeCodeDiv.createEl("button", "copy-code-button mx-copy-button");
const shortTimePrev = shortTime.createEl("td", "preview");
shortTimeCopy.onclick = () => copyTimeCode(shortTimeCode, shortTimeCopy);
const relative = tbody.createEl("tr");
const relativeCodeCol = relative.createEl("td", "code");
const relativeCodeDiv = relativeCodeCol.createDiv();
const relativeCode = relativeCodeDiv.createDiv("code-box");
const relativeCopy = relativeCodeDiv.createEl("button", "copy-code-button mx-copy-button");
const relativePrev = relative.createEl("td", "preview");
relativeCopy.onclick = () => copyTimeCode(relativeCode, relativeCopy);

// Set button icons all at once
resultsTable.findAll("button").forEach((btn) => {
    obsidian.setIcon(btn, "lucide-copy");
});

// Calculate
if (!ttu || !ttu.isValid) {
    // attempt to re-calculate the ttu
    if (Number.isInteger(Number(aethCurrent)) && aethCurrent > 0 &&
        Number.isInteger(Number(aethTarget)) && aethTarget > 0 &&
        aethTarget > aethCurrent)
    {
        // Get diff and multiply by spa
        let seconds = (aethTarget - aethCurrent) * discordMiningRate.spa;
        ttu = DateTime.utc().plus({ seconds: seconds });    
    }
}
// re-verify
if (ttu && ttu.isValid) {
    // Populate table
    shortDtPrev.textContent = ttu.toFormat("LLLL d, yyyy 'at' h:mm a");
    shortTimePrev.textContent = ttu.toFormat("h:mm a");
    relativePrev.textContent = ttu.toRelative();
    shortDtCode.textContent = `<t:${ttu.toUnixInteger()}:f>`;
    shortTimeCode.textContent = `<t:${ttu.toUnixInteger()}:t>`;
    relativeCode.textContent = `<t:${ttu.toUnixInteger()}:R>`;
};

/****************************/
/*     Aetherium Timer      */
/****************************/
// Get timer-related properties
let timerRows = dv.current().timer || [];
// Ensure at least 1 row
if (timerRows.length == 0) {
    timerRows.push({ 
        aetherium: null, 
        miningRate: getGuildMiningRate()?.name ?? "None"
    });
}

this.container.createEl("h2", { text: "Aetherium Timer" });
this.container.createEl("p", { text: "Determine the total time needed to accumulate varying amounts of Aetherium. Mining Rate is customizable per amount." });
// Timer Table
const timer = this.container.createDiv("timer");
const timerInput = timer.createDiv("column table");
const timerTable = createTable(timerInput, "gw2-table col-3-width-1 no-footer", ["Aetherium", "Mining Rate", ""]);
const timerTbody = timerTable.createEl("tbody");
// Add rows from properties
for (let i = 0; i < timerRows.length; i++) {
    const timerRow = timerRows[i];
    const row = timerTbody.createEl("tr");
    // Aetherium
    const aethCell = row.createEl("td");
    const aethSelect = aethCell.createEl("select", "dropdown");
    for (const val of AETH_VALUES) aethSelect.createEl("option", { attr: { value: val }, text : val.toLocaleString() });
    aethSelect.value = timerRow.aetherium;
    aethSelect.onchange = async () => {
        // update timerRow
        timerRow.aetherium = aethSelect.value;
        // write back to frontmatter
        const file = this.app.vault.getFileByPath(this.currentFilePath);
        await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.timer = timerRows;
        });      
    }
    // Mining Rate
    const rateCell = row.createEl("td");
    const rateSelect = rateCell.createEl("select", "dropdown");
    for (const val of MINING_RATES) rateSelect.createEl("option", { attr: { value: val }, text: val });
    // Set value after adding options
    rateSelect.value = timerRow.miningRate;
    rateSelect.onchange = async () => {
        // update timerRow
        timerRow.miningRate = rateSelect.value;
        // write back to frontmatter
        const file = this.app.vault.getFileByPath(this.currentFilePath);
        await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.timer = timerRows;
        });    
    }
    // Controls
    const controlsCell = row.createEl("td");
    const buttons = controlsCell.createDiv("controls");
    // Show "add timer" button if last row
    if (i == timerRows.length - 1) {
        const addTimerButton = buttons.createEl("button", "mod-cta");
        obsidian.setIcon(addTimerButton, "lucide-clock-plus");
        addTimerButton.onclick = async () => {
            // Add a new timer, use this timer's mining rate for reference
            timerRows.push({ aetherium: null, miningRate: timerRow.miningRate });
            // write back to frontmatter
            const file = this.app.vault.getFileByPath(this.currentFilePath);
            await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.timer = timerRows;
            });
        }
    }
    const delTimerButton = buttons.createEl("button", "mod-warning");
    obsidian.setIcon(delTimerButton, "lucide-trash-2");
    delTimerButton.onclick = async () => {
        // Remove row from timerRows
        timerRows.splice(i, 1);
        // write back to frontmatter
        const file = this.app.vault.getFileByPath(this.currentFilePath);
        await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.timer = timerRows;
        });
    };
}
const timerResults = timer.createDiv("column results");
const total = timerResults.createDiv("total time");
total.createDiv({ cls: "label", text: "Total Time" });
// Calculate total time
let sec = 0;
for (const row of timerRows) {
    if (!row.aetherium || !Number(row.aetherium)) continue;
    // Get rate info matching selected rate
    const rateInfo = getGuildMiningRate(row.miningRate);
    if (rateInfo) {
        // add to total seconds
        sec += row.aetherium * rateInfo.spa;
    }
}
// Total duration
const dur = moment.duration(sec, "seconds");
// Round up to nearest minute
if(dur.seconds() > 0) dur.subtract(dur.seconds(), "seconds").add(1, "minute");
total.createEl("span", { text: `${dur.days()}d ${dur.hours()}h ${dur.minutes()}m` });
// Time remaining
const remaining = timerResults.createDiv("remaining time");
remaining.createDiv({ cls: "label", text: "Remaining" });
// Calculate remaining
const rem = moment.duration(7, "days").subtract(dur);
remaining.createEl("span", { text: `${rem.days()}d ${rem.hours()}h ${rem.minutes()}m` });
// Send button
const sendButton = remaining.createEl("button", "mod-cta");
obsidian.setIcon(sendButton, "clock-arrow-down");
obsidian.setTooltip(sendButton, "Send to Calculator");
sendButton.onclick = async () => {
    // Get current mining rate
    let rate = getGuildMiningRate();
    // Use rate in last row for comparison
    let lastRate = timerRows[timerRows.length - 1].miningRate;
    // Save remaining value to calculator frontmatter
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        // Set rate
        if (rate.name == lastRate)
            frontmatter.calculator.miningRate = null;
        else
            frontmatter.calculator.miningRate = lastRate;
        // Set time units
        frontmatter.calculator.days = rem.days();
        frontmatter.calculator.hours = rem.hours();
        frontmatter.calculator.minutes = rem.minutes();
    });
}
// Clear All button
const clearAll = timerResults.createDiv("clear-all");
const clearButton = clearAll.createEl("button", { cls: "mod-warning", text: "Clear All" });
clearButton.onclick = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.timer = null;
    });
}

/****************************/
/*   Aetherium Calculator   */
/****************************/
// Get calculator-related properties
let calcRateOverride = dv.current().calculator.miningRate || "";
let days = dv.current().calculator.days || 0;
let hours = dv.current().calculator.hours || 0;
let minutes = dv.current().calculator.minutes || 0;

// Determine current mining rate, seconds per aetherium (spa), 
// aetherium per hour (aph), and time to 1000 aetherium (ttk)
let calcMiningRate = getGuildMiningRate(calcRateOverride);

this.container.createEl("h2", { text: "Aetherium Calculator" });
this.container.createEl("p", { text: "Determine the total aetherium that can be gathered in the specified time. Mining Rate is customizable." });
const calc = this.container.createDiv("calculator");
// Mining rate
const calcRate = calc.createDiv("mining-rate");
calcRate.createDiv({ text: "Current Rate:" });
const calcSelect = calcRate.createEl("select", "dropdown");
calcSelect.disabled = !calcRateOverride;
for (const val of MINING_RATES) calcSelect.createEl("option", { attr: { value: val }, text: val });
// Set value after adding options
calcSelect.value = calcMiningRate.name;
calcSelect.onchange = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.calculator.miningRate = calcSelect.value;
    });    
}
const calcOverride = calcRate.createDiv("override");
calcOverride.createEl("label", { text: "Override" });
const calcOverrideContainer = calcOverride.createDiv("checkbox-container");
const calcOverrideInput = calcOverrideContainer.createEl("input", { attr: { type: "checkbox" }});
if (calcRateOverride) {
    calcOverrideContainer.addClass("is-enabled");
}
calcOverrideContainer.onclick = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        if (calcRateOverride) {
            frontmatter.calculator.miningRate = "";
        }
        else {
            frontmatter.calculator.miningRate = calcSelect.value;
        }
    });
}
// Time selectors
const calcTime = calc.createDiv("time");
// Day
const calcDays = calcTime.createDiv("days");
const calcDaysSelect = calcDays.createEl("select", "dropdown");
for (let i = 0; i <= 7; i++) calcDaysSelect.createEl("option", { attr: { value: i }, text: i });
// Set value after adding options
calcDaysSelect.value = days;
calcDaysSelect.onchange = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.calculator.days = calcDaysSelect.value;
    });
}
calcDays.createEl("label", { text: "days" });
// Hours
const calcHours = calcTime.createDiv("hours");
const calcHoursSelect = calcHours.createEl("select", "dropdown");
for (let i = 0; i <= 24; i++) calcHoursSelect.createEl("option", { attr: { value: i }, text: i });
// Set value after adding options
calcHoursSelect.value = hours;
calcHoursSelect.onchange = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.calculator.hours = calcHoursSelect.value;
    });
}
calcHours.createEl("label", { text: "hours" });
// Minutes
const calcMinutes = calcTime.createDiv("minutes");
const calcMinutesSelect = calcMinutes.createEl("select", "dropdown");
for (let i = 0; i <= 60; i++) calcMinutesSelect.createEl("option", { attr: { value: i }, text: i });
// Set value after adding options
calcMinutesSelect.value = minutes;
calcMinutesSelect.onchange = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.calculator.minutes = calcMinutesSelect.value;
    });
}
calcMinutes.createEl("label", { text: "minutes" });
// Reset button
const calcReset = calcTime.createEl("button", { cls: "mod-warning", text: "Reset" });
calcReset.onclick = async () => {
    const file = this.app.vault.getFileByPath(this.currentFilePath);
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.calculator.miningRate = null;
        frontmatter.calculator.days = null;
        frontmatter.calculator.hours = null;
        frontmatter.calculator.minutes = null;
    });
}
// Calculate Result
const time = moment.duration({ days: days, hours: hours, minutes: minutes });
const aeth = Math.floor(time.asSeconds() / calcMiningRate.spa);
// Display Result
const calcResult = calc.createDiv("result");
calcResult.append(...markdownToHtml(`**${aeth.toLocaleString()}** ![[aetherium.png|css: icon]] can be mined in *${days}d ${hours}h ${minutes}m* at a rate of **${calcMiningRate.aph}** ![[aetherium.png|css: icon]] per hour`));

```
