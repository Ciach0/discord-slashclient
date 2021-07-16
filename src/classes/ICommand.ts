import {ApplicationCommandOptionData, CommandInteraction} from "discord.js";
import AmpersandManager from "./AmpersandManager";

export default interface ICommand {
    name: string;
    description: string;
    options?: ApplicationCommandOptionData[];
    defaultPermission?: boolean;
    run(client: AmpersandManager, interaction: CommandInteraction): Promise<any>;
}