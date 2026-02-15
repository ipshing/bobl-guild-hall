try {
    // Set up dataview plugin
    const dv = this.app.plugins.plugins.dataview.api;
    if (!dv) {
        throw new Error("Unable to access dataview plugin.");
    }

    // Confirm reset with modal
    const modal = new obsidian.Modal(this.app);
    modal.setTitle("Confirm Reset");
    modal.contentEl.addClass("confirmation-modal");
    modal.contentEl.createDiv({ text: "This will reset all guild hall upgrades and cannot be undone. Are you sure you want to continue?" });
    modal.contentEl.createEl("hr");
    const buttons = modal.contentEl.createDiv("action-buttons");
    const deleteContainer = buttons.createEl("span", { cls: "mb-button mb-button-inline" });
    const deleteBtn = deleteContainer.createEl("button", { cls: "mb-button-inner mod-warning" });
    deleteBtn.append("Reset");
    const cancelContainer = buttons.createEl("span", { cls: "mb-button mb-button-inline" });
    const cancelBtn = cancelContainer.createEl("button", { cls: "mb-button-inner" });
    cancelBtn.append("Cancel");
    cancelBtn.onclick = (event) => modal.close();

    // Put the delete button onclick here so it's not cluttered
    deleteBtn.onclick = async (event) => {
        // Get all pages tagged with 'guild-hall/upgrade'
        const upgrades = dv.pages("#guild-hall/upgrade");
        let missingFiles = false;
        for (const upgrade of upgrades) {
            // Get file object
            const file = this.app.vault.getFileByPath(upgrade.file.path);
            if (!file) {
                missingFiles = true;
                continue;
            }
            // Use obsidian api to update the frontmatter
            await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
                // set root 'isComplete' property to false
                frontmatter.isComplete = false;
                // If there are materials, reset each of those
                if (frontmatter.materials) {
                    for (const material of frontmatter.materials) {
                        material.isComplete = false;
                    }
                }
            });
        }
        // close the modal
        modal.close();
    };

    // Open the modal last
    modal.open();
} catch (error) {
    try {
        new obsidian.Notice(error.message);
        engine.message.createMessage("error", "Could not reset Guild Hall", error.message);
    } catch {
        console.log(error.message);
    }
}
