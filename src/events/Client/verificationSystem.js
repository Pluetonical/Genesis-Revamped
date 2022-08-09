const { Interaction } = require("discord.js");



module.exports = {
  name: "interactionCreate",
  run: async(interaction, client) => {
    if (interaction.customId === "verify") {
      
      interaction.member.roles.add('925165735288901683')
      
    }
  }
};