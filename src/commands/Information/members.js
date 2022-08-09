const { EmbedBuilder, Embed, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
  name: "members",
  aliases: ["m"],
  category: "Information",
  description: "Returns a the ammount of members in this discord",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  
  execute: async (message, args, client, prefix) => {
    const guild = client.guilds.cache.get('925160468476207114')
    const userCount = guild.memberCount
    //const onlineCount = guild.members.cache.filter(m => m.presence.status === 'online').size
    const onlinecount = guild.members.cache.filter(member => member.presence?.status === "online");
    const memberCount = guild.members.cache.filter(member => !member.bot).size;
	const botCount = guild.members.cache.filter(member => member.user.bot).size;
    const embed = new EmbedBuilder()
        .setColor("#2F3136")
        .setTitle("Genesis - Discord Status")
        .setDescription("Here are the current Genesis Discord Stats!")
        .addFields([{name: "Total user count: ", value: `**${userCount}**`},{name: "Users online: ", value: `**${onlinecount.size}**`, inline: true}, {name: "Member Count: ", value: `${memberCount}`, inline: true}, {name: "Bot Count: ", value: `**${botCount}**`, inline: true}])
        .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.avatarURL({ dynamic: true }) });


    /*const embed = new EmbedBuilder()
        .setColor("#2F3136")
        .setTitle("Genesis - Discord Status")
        .setDescription("Here are the current Genesis Discord Stats!")
        .addField(`Total user count:`, `**${userCount}**`)
        .addField(`user's online: `, `**${onlineCount}**`, true)
        .setFooter(`Command requested by ${message.author.tag}`, message.author.displayAvatarURL());
 **/
   message.channel.send({embeds: [embed] })
  },
};
