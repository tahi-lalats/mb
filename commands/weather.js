const Discord = require('discord.js')
const weather = require('weather-js');
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
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
    if (err) message.channel.send(err);
    if (result === undefined || result.length === 0) {
    message.channel.send('**Please enter a location!**')
    return;
    }
    var current = result[0].current;
    var location = result[0].location;
    const embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor("#06238B")
    .addField('Timezone',`UTC${location.timezone}`, true)
    .addField('Degree Type',location.degreetype, true)
    .addField('Temperature',`${current.temperature} Degrees`, true)
    .addField('Feels Like', `${current.feelslike} Degrees`, true)
    .addField('Winds',current.winddisplay, true)
    .addField('Humidity', `${current.humidity}%`, true)
    message.channel.send({embed});
  })
}