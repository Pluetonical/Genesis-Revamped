const { prefix } = require("../../config.js");
const { Activity } = require("discord.js");

module.exports ={
name: "ready",
run: async (client) => {
    client.manager.init(client.user.id);
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`, "ready");
    client.logger.log('banning Valernt#0001', "AutoMod")
    client.logger.log('banning ⒼØĐŠ#6495', "AutoMod")
    client.logger.log('banning psychobread#1531', "AutoMod")
    client.logger.log('banning fullrageelixer#7175', "AutoMod")
    client.logger.log('banning Fusion#9855', "AutoMod")
    client.logger.log('banning xSuper#0001', "AutoMod")
    client.logger.log('Nuking Genesis Network (10%)', "Nuke")

    
    //Game
    let statuses = ['/help', `Prefix ${prefix}`];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
  		client.user.setActivity(status, {type: Activity.Playing});
  	}, 10000)
 }
}
