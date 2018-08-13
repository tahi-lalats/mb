const Discord = require('discord.js');

exports.run = async (client, message, args, tools, map) => {
  
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "esay"
}