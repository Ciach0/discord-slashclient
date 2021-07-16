import SlashClient from "./SlashClient";
import {ClientEvents} from "discord.js";

export default interface IEvent {
    name: keyof ClientEvents;
    run(client: SlashClient, ...args: any[]): Promise<any>;
}