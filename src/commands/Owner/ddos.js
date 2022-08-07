const { EmbedBuilder } = require("discord.js");
const { post } = require("node-superfetch");

module.exports = {
    name: "ddos",
    category: "Owner",
    description: "ddos someone",
    args: true,
    usage: "<string>",
    userPerms: [],
    owner: true,
    execute: async (message, args, client, prefix) => {
       
        
        const embed = new EmbedBuilder()
       
        
        try {
            const code = args.join(" ");
            if (!code) return message.channel.send("Please provide a user");
            

            embed.setDescription(`Ddosing,  50GB`)

            message.channel.send({embeds: [embed]});

        } catch (error) {
           
    }
}
}
