  const emoji = "✅"
  
  module.exports.run = async (client, message, args) => {
  message.channel.send('');
          const emb = new Discord.RichEmbed()
          .setDescription("Restart Done")
          .setColor("RANDOM")
          .setThumbnail("GIF")
          message.channel.send(emb).then(msg => {
        msg.react(emoji)
          .then(message => client.destroy())
          .then(() => client.login("TOKEN"));
})
  }