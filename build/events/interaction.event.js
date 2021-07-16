"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InteractionEvent {
    name = 'interactionCreate';
    async run(client, interaction) {
        if (interaction.isCommand()) {
            const cmd = client.commands.find(x => x.name === interaction.commandName);
            if (cmd)
                await cmd.run(client, interaction);
            else
                await interaction.reply({ content: 'This command does not exist.', allowedMentions: { repliedUser: false } });
        }
    }
}
exports.default = InteractionEvent;
