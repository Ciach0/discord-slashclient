"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const path_1 = require("path");
const dotenv_1 = require("dotenv");
dotenv_1.config();
class AmpersandManager extends discord_js_1.Client {
    commands;
    constructor() {
        super({ intents: new discord_js_1.Intents(Object.values(discord_js_1.Intents.FLAGS).reduce((acc, p) => acc | p, 0)) });
        this.commands = [];
        this.login(process.env.TOKEN).then(() => { });
        this.init();
    }
    init() {
        this.handleEvents();
    }
    handleEvents() {
        const evtFiles = fs_1.readdirSync(path_1.join(__dirname, '/../events'));
        evtFiles.forEach(async (file) => {
            const evt = await Promise.resolve().then(() => require(path_1.join(__dirname, '/../events/', file)));
            const e = new evt.default();
            this.on(e.name, e.run.bind(null, this));
        });
    }
}
exports.default = AmpersandManager;
