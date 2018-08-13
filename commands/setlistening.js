const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let argcustom = args.join(" ");

    let specifyembed = new Discord.RichEmbed()
        .setColor(0xED0C0C)
        .setAuthor(`ERROR - Failed to Set Listening`, 'https://i.imgur.com/obwiHcn.png')
        .setDescription(`${message.author}, Please specify a song title to set.`);

    let setlistenmbed = new Discord.RichEmbed()
        .setColor(0x07DE47)
        .setAuthor(`Successfully Set Listening`, 'https://i.imgur.com/M6hqbcc.png')
        .setDescription(`${client.user.username} is now Listening to \`${argcustom}\`.`)
        .setFooter(`Set by ${message.author.username}.`, message.author.avatarURL);

    let wrongembed = new Discord.RichEmbed()
        .setColor(0xED0C0C)
        .setAuthor(`ERROR`, 'https://i.imgur.com/obwiHcn.png')
        .setDescription(`${message.author}, You do not have permission to use this command.`);

    if (message.author.id !== '335035386923581440') {
        message.channel.send(wrongembed)
        return;
    }

    if (!argcustom[0]) return message.channel.send(specifyembed)

    client.user.setActivity(argcustom, {
        type: "LISTENING"
    })
    console.log(`${client.user.username} is now Listening to ${argcustom}.`)
    message.channel.send(setlistenmbed)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["setl", "setlisten", "listen"],
    permLevel: 0
};

exports.help = {
    name: "setlistening",
    category: "Owner",
    description: "This can set the song title of the bot listening.",
    usage: "setlistening <song-title>"
};