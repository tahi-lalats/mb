const Discord = require('discord.js');
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
    let user = message.mentions.users.first() || message.author;
   
   let embed = new Discord.RichEmbed()
   .setColor("#06238B")
   .setAuthor(`${client.user.username}`)
   .setImage(`https://cdn.discordapp.com/attachments/465242799151906816/468103370733912064/achievement.png`)
   message.channel.send(embed) 
  }