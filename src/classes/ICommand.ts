import {ApplicationCommandOptionData, CommandInteraction} from "discord.js";
import SlashClient from "./SlashClient";

export default interface ICommand {
    name: string;
    description: string;
    options?: ApplicationCommandOptionData[];
    defaultPermission?: boolean;
    run(client: SlashClient, interaction: CommandInteraction): Promise<any>;
}