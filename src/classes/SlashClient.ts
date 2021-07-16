import {Client, Intents} from 'discord.js';
import {readdirSync} from 'fs';
import {join} from 'path';
import IEvent from "./IEvent";
import ICommand from "./ICommand";
import { config } from 'dotenv';
config();
export default class SlashClient extends Client {
    public commands: ICommand[];
    constructor() {
        super({intents: new Intents(Object.values(Intents.FLAGS).reduce((acc, p) => acc | p, 0))});
        this.commands = [];
        this.login(process.env.TOKEN).then(() => {});
        this.init();
    }
    init() {
        this.handleEvents();
    }
    handleEvents() {
        const evtFiles = readdirSync(join(__dirname, '/../events'));
        evtFiles.forEach(async file => {
            const evt = await import(join(__dirname, '/../events/', file));
            const e: IEvent = new evt.default();
            this.on(e.name, e.run.bind(null, this));
        });
    }
}