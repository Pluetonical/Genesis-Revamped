const { EmbedBuilder, CommandInteraction, Client, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "log",
    description: "logs a message",
    owner: true,
    options: [
        {
            name: "Message",
            description: "Message",
            required: true,
            type: ApplicationCommandOptionType.String
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
       
        client.logger.error(interaction.options.data.map(juangay => juangay.value))
    }
}
