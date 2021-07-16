"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestCommand {
    name = 'test';
    description = 'This is just a test command!';
    options = [
        {
            name: 'user',
            description: 'Select a user to continue',
            required: true,
            type: 'USER'
        }
    ];
    async run(client, interaction) {
        await interaction.reply(`You've choosen ${interaction.options.get('user').user.tag}`);
    }
}
exports.default = TestCommand;
