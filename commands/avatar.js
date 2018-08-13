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
   .setAuthor(`${user.username}`)
   .setImage(user.displayAvatarURL)
   message.channel.send(embed) 
  }