const { prefix } = require("../../config.js");
const { Activity, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports ={
name: "ready",
run: async (client) => {
    const verifychannel = await client.guilds.cache.get('925160468476207114').channels.fetch('925164747014426675');
    const verifyCollection = await verifychannel.messages.fetch();

 

    
    //Verify message
    if (verifyCollection.size === 0 ) {
      const embed = new EmbedBuilder()
      .setTitle('Genesis Verification')
      .setColor('#2F3136')
      .setImage('https://discord.com/channels/@me/997735117445419118/998435623734095894')
      .setDescription('Please verify here to gain access to our discord!')
      .addFields({name: '**Please React to atleast one role to limit everyone pings!**', value: '<#925162992767729755>'})

      const button = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId("verify").setEmoji('<:icons_colorserververified:995546207361441793>').setLabel("Verify").setStyle(ButtonStyle.Success)
      )
      
      verifychannel.send({
        embeds: [embed],
        components: [button]
      })
    }
 }
}
