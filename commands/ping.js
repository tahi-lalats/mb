const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
  message.delete()
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);

    const m = await message.channel.send("Ping?");
    await m.delete()
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
    message.channel.send({embed})
  }