const Discord = require('discord.js')
const fs = require('fs')
const { AuditLogEvent} = require('discord.js')

const logger = fs.createWriteStream('log.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
const writeLine = (line) => logger.write(`\n${line}`);

module.exports = {
    name: 'messageDelete',
    run: async(message) => {
       
        
        console.log(message.content)
        //writeLine(`Message Delete: [ Username: "${messageDelete.author}", User Id: "${messageDelete.author.id}", Content: "${messageDelete.content}", Channel: "${messageDelete.channel.id}" ]`)
        

    }
}




