import IEvent from "../classes/IEvent";
import {ClientEvents} from "discord.js";
import AmpersandManager from "../classes/AmpersandManager";
import { readdirSync } from 'fs';
import { join } from 'path';

export default class ReadyEvent implements IEvent {
    name: keyof ClientEvents = 'ready';
    async run(client: AmpersandManager): Promise<any> {
        client.user.setActivity('AmpersandBot', {
            type: 'WATCHING'
        });
        for (const fileString of readdirSync(join(__dirname, '/../commands'))) {
            const file = await import(join(__dirname, '/../commands/', fileString));
            const cmd = new file.default();
            client.commands.push(cmd);
            console.log(`Registered command: ${cmd.name}!`);
        }
        client.guilds.cache.get('622711270935887933')?.commands.set(client.commands);
        console.log(`${client.user.tag} is ready!`);
    }
}