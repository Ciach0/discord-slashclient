import IEvent from "../classes/IEvent";
import {ClientEvents} from "discord.js";
import SlashClient from "../classes/SlashClient";
import { readdirSync } from 'fs';
import { join } from 'path';

export default class ReadyEvent implements IEvent {
    name: keyof ClientEvents = 'ready';
    async run(client: SlashClient): Promise<any> {
        client.user.setActivity('Slash Commands', {
            type: 'WATCHING'
        });
        for (const fileString of readdirSync(join(__dirname, '/../commands'))) {
            const file = await import(join(__dirname, '/../commands/', fileString));
            const cmd = new file.default();
            client.commands.push(cmd);
            console.log(`Registered command: ${cmd.name}!`);
        }
        await client.application.fetch();
        client.application?.commands.set(client.commands);
        console.log(`${client.user.tag} is ready! Also, please wait for up to 30 minutes, because slash commands won't appear immediately after bot start!`);
    }
}
