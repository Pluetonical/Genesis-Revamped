const { prefix } = require("../../config.js");
const { Activity, EmbedBuilder, InteractionType, Embed, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { green } = require("colorette");
const { Schema } = require("mongoose");



module.exports ={
name: "interactionCreate",
run: async (client, interaction) => {
 


   if (interaction.customId === "acceptsuggest") {
      if (interaction.member.roles.cache.some(r => r.id === '990796816222150708')) {
        let em = interaction.message.embeds[0]
        let edit = {author:em.author,color: 3066993,timestamp: em.timestamp, footer: em.footer, description:em.description, fields:em.fields,}
        let button = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('upvote').setEmoji('<:icons_upvote:995545071795572758>').setLabel("Up Vote").setStyle(ButtonStyle.Secondary), new ButtonBuilder().setCustomId('downvote').setEmoji('<:icons_downvote:995546425704333322>').setLabel("Down Vote").setStyle(ButtonStyle.Secondary))
        interaction.message.edit({embeds: [edit], components: [button]})
        client.logger.log(`accepted suggestion`)
      } else {
       return interaction.reply({ content: 'You do not have permission to use accept this suggestion!', ephemeral: true });
      }

   }
   if (interaction.customId === "denysuggest") {
    if (interaction.member.roles.cache.some(r => r.id === '990796816222150708')) {
      let em = interaction.message.embeds[0]
      let edit = {author:em.author,color: 15158332,timestamp: em.timestamp, footer: em.footer, description:em.description, fields:em.fields,}
      let button = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('upvote').setEmoji('<:icons_upvote:995545071795572758>').setLabel("Up Vote").setStyle(ButtonStyle.Secondary), new ButtonBuilder().setCustomId('downvote').setEmoji('<:icons_downvote:995546425704333322>').setLabel("Down Vote").setStyle(ButtonStyle.Secondary))
      interaction.message.edit({embeds: [edit], components: [button]})
      client.logger.log(`denied suggestion`)
    } else {
     return interaction.reply({ content: 'You do not have permission to use deny this suggestion!', ephemeral: true });
    }

 }

 if (interaction.customId === "upvote") {
  
    let em = interaction.message.embeds[0]
    let newNumber = Number(em.fields[0].value.split("```\n")[1].split("```")[0]) + 1
    let currentn = Number(em.fields[0].value.split("```\n")[1].split("```")[0]) 
    let edit = {author:em.author,color: em.color,timestamp: em.timestamp, footer: em.footer, description:em.description, fields:[{name:"<:icons_upvote:995545071795572758> Up votes:",value:`\`\`\`\n${newNumber}\`\`\``,inline:true},
    em.fields[1],],}
  console.log(interaction.message.id)
    const upvoteschema = new Schema({ votes: currentn })
    let button = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('upvote').setEmoji('<:icons_upvote:995545071795572758>').setLabel("Up Vote").setStyle(ButtonStyle.Secondary), new ButtonBuilder().setCustomId('downvote').setEmoji('<:icons_downvote:995546425704333322>').setLabel("Down Vote").setStyle(ButtonStyle.Secondary))
    interaction.message.edit({embeds: [edit], components: [button]})
    client.logger.log(`upvoted suggestion`)
  
 
  

}
   
  /*switch (interaction.customId) {
    case 'acceptsuggest':
      let em = interaction.message.embeds[0] 
      let editembed = {author:em.author,color:'#00FF00',timestamp: em.timestamp, footer: em.footer, description:em.description, fields:em.fields,}
      const button = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId("upvote").setEmoji('<:icons_upvote:995545071795572758>').setLabel("Up Vote").setStyle("SECONDARY"),
        new ButtonBuilder().setCustomId("downvote").setEmoji('<:icons_downvote:995546425704333322>').setLabel("Down Vote").setStyle("SECONDARY")
      );
      if (!interaction.member?.roles.cache.has('925165680184164352')) return interaction.reply({ content: '**You do not have permission to accept suggestions!**', ephemeral: true })
      interaction.message.edit({components: [button], embeds: [editembed]})
      break;
    case 'denysuggest':
      let ems = interaction.message.embeds[0]
      let edit = {author:ems.author,color:'#ff0000',timestamp: ems.timestamp, footer: ems.footer, description:ems.description, fields:ems.fields,}
      const button2 = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId("upvote").setEmoji('<:icons_upvote:995545071795572758>').setLabel("Up Vote").setStyle("SECONDARY"),
        new ButtonBuilder().setCustomId("downvote").setEmoji('<:icons_downvote:995546425704333322>').setLabel("Down Vote").setStyle("SECONDARY")
      );
      if (!interaction.member?.roles.cache.has('925165680184164352')) return interaction.reply({ content: '**You do not have permission to deny suggestions!**', ephemeral: true })
      interaction.message.edit({components: [button2], embeds: [edit]})
      break;
    default: 
        break;
      
  **/
     
}
}

