	  
exports.run = async (client, msg, args, tools, map) => {
    const Discord = require("discord.js")
    const moment = require('moment');
    const _fs = require("fs");
    const packages = JSON.parse(_fs.readFileSync('./package.json', 'utf-8'));
    require('moment-duration-format');
    const os = require('os'); 
    let cpu = os.cpus();
		
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const servers = client.guilds.size
      const client_channel = client.guilds.reduce((a, b) => a + b.channels.size, 0).toLocaleString()

      const owner = packages.author
      const idowner = packages.idauthor
      const shardall = client.shard.count

      const ccpu = process.cpuUsage().system / 1024 / 1024;

      const users = client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
      const nodever = process.version
      const memory_on_bot = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)

        const statembed = new Discord.RichEmbed()
        .setColor("#06238B")
        .setDescription("📊 Master Bot Stats")
        .setFooter(`Master Bot | ${shardall} Shard`)
        .setTimestamp()
        
        .addField("Bot Uptime:", `• ${duration}`, true)
        .addField("Memory Usage:", `• ${memory_on_bot} MB`, true)
        .addField("CPU Usage:", `• ${Math.round(ccpu * 100) / 100}%`, true)
        .addField("Advanced Stats:", `• ${servers} Servers \n• ${users} Users \n• ${client_channel} Channels`, true)
        .addField("Bot Informations:", `• Bot Developer: ${owner} \n• Bot Version: ${packages.version}`, true)
	
	.addField("Usefull Links", "[Invite Me](https://discordapp.com/oauth2/authorize?client_id=464511870993432578&scope=bot&permissions=2146958591) | [Vote](https://discordbots.org/bot/464511870993432578/vote) | [Support Server](https://discord.io/MasterBot) | [Website](http://masterbot.esy.es)") 

        msg.channel.send(statembed);	
	};
