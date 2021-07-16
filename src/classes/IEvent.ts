import AmpersandManager from "./AmpersandManager";
import {ClientEvents} from "discord.js";

export default interface IEvent {
    name: keyof ClientEvents;
    run(client: AmpersandManager, ...args: any[]): Promise<any>;
}