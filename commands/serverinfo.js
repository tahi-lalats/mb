const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
    if (message.channel.type === 'dm') return;
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
     .setAuthor(message.guild.name, sicon)
     .setFooter(`© MasterBotTeam`)
     .setColor("#06238B")
     .setThumbnail(sicon)
     .addField(":crown: Server Owner", message.guild.owner, false)
     .addBlankField()
     .addField("📌 Server ID", message.guild.id, true)
     .addField("🏷 Server Name", message.guild.name, true)
     .addField(`🕛 Server Created`, `${day} - ${month} - ${year}`, true)
     .addField("🌏 Server Region", message.guild.region, true) 
     .addField("💻 Channels", message.guild.channels.size, true)
     .addField('✔️ Verification level', message.guild.verificationLevel, true)
     .addField("👥 Members", message.guild.memberCount, true)
     .addField("🕴️ Human", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
     .addField("👤 Bots", message.guild.members.filter(m => m.user.bot).size, true)
     .addField("Online", online.size, true)
     .addField('Member Status', `Online **${message.guild.members.filter(o => o.presence.status === 'online').size}**\nIdle/Away **${message.guild.members.filter(i => i.presence.status === 'idle').size}**\nDo Not Disturb **${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}**\nOffline/Invisible **${message.guild.members.filter(off => off.presence.status === 'offline').size}**\nStreaming **${message.guild.members.filter(s => s.presence.status === 'streaming').size}**`, true)
     .addField("Roles", message.guild.roles.size, true)
    message.channel.send(serverembed);
}