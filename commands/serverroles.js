exports.run = async (anko, message, args, color) => {
  const emojiList = message.guild.roles.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList);
}