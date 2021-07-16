import ICommand from "../classes/ICommand";
import SlashClient from "../classes/SlashClient";
import {ApplicationCommandOptionData, CommandInteraction} from "discord.js";

export default class TestCommand implements ICommand {
    name: string = 'test';
    description: string = 'This is just a test command!';
    options: ApplicationCommandOptionData[] = [
        {
            name: 'user',
            description: 'Select a user to continue',
            required: true,
            type: 'USER'
        }
    ];
    async run(client: SlashClient, interaction: CommandInteraction): Promise<any> {
        await interaction.reply(`You've choosen ${interaction.options.get('user').user.tag}`);
    }
}
