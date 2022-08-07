const { EmbedBuilder, CommandInteraction, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, ApplicationCommandType } = require("discord.js")

module.exports = {
    name: "about",
    description: "See information about this project",
    type: ApplicationCommandType.ChatInput,
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
        
        const button = new ButtonBuilder()
            .setLabel("Invite")
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`)

        const button2 = new ButtonBuilder()
            .setLabel("GitHub")
            .setStyle(ButtonStyle.Link)
            .setURL("https://github.com/Pluetonical/GenesisUtil-Guide");

        const button3 = new ButtonBuilder()
            .setLabel("Support Server")
            .setStyle(ButtonStyle.Link)
            .setURL("https://discord.gg/qmnFa45zBK")

        const row = new ActionRowBuilder().addComponents(button, button2, button3);

        const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Genesis Utlities', iconURL: 'https://cdn.discordapp.com/attachments/859870702018494477/1002791940183556156/BE8FED23-3B88-4C6B-B3D3-2C04E8CA2DD6.jpg' })
            .setThumbnail('https://cdn.discordapp.com/attachments/995551235371438132/1002793718526509178/Untitled180_20220729232359.png')
            .setColor(0x303236)
            .addFields([
                { name: 'Creator', value: '[Juanito#1234](https://github.com/Pluetonical) And [˜”*°• Quandale dingleberry •°*”˜#0421](https://github.com/Bulkmrslasher)', inline: true },
                { name: 'Supporter', value: '[Feline](https://cash.app/$xfeline)', inline: true },
                { name: 'Repository', value: '[Here](https://github.com/Pluetonical/GenesisUtil-Guide)', inline: true },
                { name: '\u200b', value: `Genesis Utilities is a multi-usage bot for Genesis Network. Developed by Juan & Jackson. Including ticket-system, reaction roles, verification, in-game status tracking, suggestions, and so much more! Designed for usage by other servers related to Genesis Network. Special thanks to 𝐹𝑒𝓁𝒾𝓃𝑒 for providing entertainment and brain damage to the developers.`, inline: true },
            ]);
        await interaction.followUp({ embeds: [mainPage], components: [row] });
    }
}
