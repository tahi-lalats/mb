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
      message.delete();
    let erembed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} | Vote`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`)
    .setThumbnail('https://media.giphy.com/media/26uf8tQf6WVQPxP9u/giphy.gif')
    .addField("**Vote Master Bot**", "[Click Here](https://discordbots.org/bot/464511870993432578/vote)", true)
    .setColor("#06238B")
    .setFooter(`© MasterBotTeam`)
    .setTimestamp() // SHOWS THE TIME OF THE EMBED CREATED
    message.channel.send(erembed);
}