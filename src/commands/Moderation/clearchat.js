const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "clearchat",
  aliases: ["cc"],
  category: "Moderation",
  description: "Clears the chat",
  args: true,
  usage: "",
  userPerms: [],
  owner: false,
  player: false,
  inVoiceChannel: false,
  sameVoiceChannel: false,
  execute: async (message, args, client, prefix) => {
    if ( message.author.id !== '583772029228941334' ) return message.channel.send("<:icons_outage:995547920587825183> | Only Bot Owners may execute this command!");
    message.delete()
   
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply("that doesn't seem to be a valid number.");
        } else if (amount <= 1 || amount > 100) {
            return message.reply("you need to input a number between 1 and 99.");
        }
        
        message.channel.bulkDelete(amount, true).catch((err) => {
            console.error(err);
            message.channel.send(
                "there was an error trying to prune messages in this channel!"
            );
        
            message.delete()
        });
        message.delete()
  },
};
