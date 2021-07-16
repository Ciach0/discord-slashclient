import IEvent from "../classes/IEvent";
import {ClientEvents, Interaction} from "discord.js";
import AmpersandManager from "../classes/AmpersandManager";

export default class InteractionEvent implements IEvent {
    name: keyof ClientEvents = 'interactionCreate';
    async run(client: AmpersandManager, interaction: Interaction): Promise<any> {
        if (interaction.isCommand()) {
            const cmd = client.commands.find(x => x.name === interaction.commandName);
            if (cmd) await cmd.run(client, interaction);
            else await interaction.reply({ content: 'This command does not exist.', allowedMentions: { repliedUser: false } });
        }
    }
}