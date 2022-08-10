const { EmbedBuilder, CommandInteraction, Client, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "log",
    description: "logs a message",
    options: [
        {
            name: "input",
            description: "input",
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
       
        client.logger.log(interaction.options.data.map(juangay => juangay.value), "log")
    }
}
