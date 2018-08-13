const Discord = require('discord.js')
if(allowedUsers.includes(message.author.id)) {
exports.run = (bot, message, args, tools) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) { 
        message.channel.send (`Sorry ${message.author}, You Need ADMINISTRATOR Permissions for use this commands!`); 
        return; 
    }
    var interval = setInterval (function () {
        message.channel.send("LEMAH")
      }, 1 * 100); 
    }
}