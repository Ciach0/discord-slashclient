"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
class ReadyEvent {
    name = 'ready';
    async run(client) {
        client.user.setActivity('AmpersandBot', {
            type: 'WATCHING'
        });
        for (const fileString of fs_1.readdirSync(path_1.join(__dirname, '/../commands'))) {
            const file = await Promise.resolve().then(() => require(path_1.join(__dirname, '/../commands/', fileString)));
            const cmd = new file.default();
            client.commands.push(cmd);
            console.log(`Registered command: ${cmd.name}!`);
        }
        client.guilds.cache.get('622711270935887933')?.commands.set(client.commands);
        console.log(`${client.user.tag} is ready!`);
    }
}
exports.default = ReadyEvent;
