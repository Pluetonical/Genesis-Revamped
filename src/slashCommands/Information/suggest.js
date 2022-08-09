const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, CommandInteraction, ButtonStyle, Client, ApplicationCommandOptionType } = require("discord.js");
const { Mongoose, default: mongoose } = require("mongoose");

module.exports = {
    name: "suggest",
    description: "suggest something!",
    owner: false,
    options: [
        {
            name: "suggestion",
            description: "Suggest something!",
            required: true,
            type: ApplicationCommandOptionType.String
            
            
        }
    ],

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client,  interaction, prefix) => {
        
       
  
   
        const button = new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId("acceptsuggest").setLabel("Accept Suggestion").setStyle(ButtonStyle.Success),
          new ButtonBuilder().setCustomId("denysuggest").setLabel("Deny Suggestion").setStyle(ButtonStyle.Danger),
          new ButtonBuilder().setCustomId("upvote").setEmoji('<:icons_upvote:995545071795572758>').setLabel("Up Vote").setStyle(ButtonStyle.Secondary),
          new ButtonBuilder().setCustomId("downvote").setEmoji('<:icons_downvote:995546425704333322>').setLabel("Down Vote").setStyle(ButtonStyle.Secondary)
        ); 
        
        client.logger.log(interaction.options.data.map(juanisgae => juanisgae.value))
        const embed = new EmbedBuilder()
            .setTitle('New Suggestion')
            .setColor('#2F3136')
            .setTimestamp(new Date())
            .setFooter({text: `Suggest by ${interaction.member.id}}`})
            .setDescription(`**Suggestion: \`\`\` ${interaction.options.data.map(juanisgae => juanisgae.value)} \`\`\`**`)
            .addFields([{name:"<:icons_upvote:995545071795572758> Up votes:",value:"```\n0```",inline:true},
            {name:"<:icons_downvote:995546425704333322> Down votes:",value:"```\n0```",inline:true},
            {name: `Created`, value: `<t:${Math.trunc(Date.now() / 1000)}:R>`}])
            
    
          interaction.reply("Your suggestion has been added, check <#997638155412975697>!");
          client.channels.cache.get('997638155412975697').send({embeds: [embed], components: [button]})
          
          
              /*case 'upvote':
                  
                  //await db.push(interaction.message.id.toString()+".voters", '1212121212122')
                
                  let embed = interaction.message.embeds[0]
                  let value = db.get(interaction.message.id.toString()+".voters") 
                  let val = Mongoose
                  let  newNumber  = Number(embed.fields[0].value.split("```\n")[1].split("```")[0]) + 1;
                  console.log(await value)
                if ( (await value).includes(interaction.user.id) === undefined) return db.deleteAll()
                  if ((await value).includes(interaction.user.id) ) return interaction.followUp({content:"You have voted for this suggestion before.", ephemeral:true});
                console.log(interaction.user.id)
                  let editEmbed = {author:embed.author,color:embed.color,timestamp: embed.timestamp, footer: embed.footer, description:embed.description, fields:[
                    {name:"<:icons_upvote:995545071795572758> Up votes:",value:`\`\`\`\n${newNumber}\`\`\``,inline:true},
                embed.fields[1],
                  ]}
                  
                  await db.push(interaction.message.id.toString()+".voters", interaction.user.id.toString())
                
                interaction.message.edit({components: interaction.message.components,embeds: [editEmbed]})
                break;
              case 'downvote':
                let embedd = interaction.message.embeds[0]
                let valued = db.get(interaction.message.id.toString()+".voters") 
                let  newNumberd  = Number(embedd.fields[1].value.split("```\n")[1].split("```")[0]) + 1;
                await db.push(interaction.message.id.toString()+".voters", '1212121212122')
                  
                
                  if ((await valued).includes(interaction.user.id) ) return interaction.followUp({content:"You have voted for this suggestion before.", ephemeral:true});
                console.log(interaction.user.id)
                  let editEmbeds = {author:embedd.author,color:embedd.color,timestamp: embedd.timestamp, footer: embedd.footer, description:embedd.description, fields:[
                    embedd.fields[0],
                    {name:"<:icons_downvote:995546425704333322> Down votes:",value:`\`\`\`\n${newNumberd}\`\`\``,inline:true},
                  ]}
                  
                  await db.push(interaction.message.id.toString()+".voters", interaction.user.id.toString())
                
                interaction.message.edit({components: interaction.message.components,embeds: [editEmbeds]})
                break;
            **/
           
 }

}

