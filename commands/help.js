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
try {
    const embed = new Discord.RichEmbed()
    .setColor("#06238B")
    .setAuthor(`${client.user.username} | Help`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`)
    .setTitle(`Invite Bot`) // TITLE
    .setURL('https://discordapp.com/oauth2/authorize?client_id=464511870993432578&scope=bot&permissions=2146958591') // THIS WILL SET THE TITLE URL TO "www.google.com" 
    .setThumbnail('https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048')
    .setDescription("Prefix = ^")
    .addBlankField()
    .addField("**ℹ️ Master Bot Information**", "`info`  `changelog | clog | log`  `dev`  `help`  `helphere`  `invite`  `ping`  `vote`", true)
    .addField("**🎶 Music**", "`play`  `pause`  `stop`  `resume`  `queue`  `np`  `volume`  `skip`", true)
    .addField("**🎉 Fun**", "`8ball`  `cat`  `cry`  `dog`  `flip`  `givecandy`  `hug`  `jokes`\
   `kiss`  `lucknumber`  `rps`  `pat`  `quiz`  `poll`  `rainbow`  `rolldice`  `say`  `slap`", true)
    .addField("**🔊 Soundboard**", "`airhorn`  `clap`  `cena`  `duck`  `pip`  `sad`  `troll`  `trombone`")
    .addField("**📋 Utility**", "`avatar`  `botinfo`  `bugreport`  `createinvite`  `serverinfo`  `userinfo`  `weather`", true)
    .addField("**🚫 Administration**", "`autonick`  `autorole`  `ban`  `kick`  `mute`  `purge`  `tempmute`  `addrole`  `removerole`  `welcome`  `goodbye`", false)
    .addField("**🔞 NSFW**", "`4k`  `asian`  `boobs`  `hentai`  `milf`  `porngif`", false)
    .addBlankField()
    .addField("_**Vote for this bot**_","[Vote](https://discordbots.org/bot/464511870993432578/vote)", true)
    .addField("_**Join Support Server**_","[Join](https://discord.gg/JYwQVjT)", true)
    .addField("_**Website**_",'[Click Here](http://masterbot.esy.es/en)')
    .setFooter(`© MasterBotTeam`)
    .setTimestamp() // SHOWS THE TIME OF THE EMBED CREATED
    await message.author.send({embed})
    message.react("✅")
    let serverembed = new Discord.RichEmbed()
    .addField(`${message.author.username}`, "Please Check Your DM!, If You Do Not Receive Anything, Type `^helphere`!")
    .setColor("#06238B")
    .setAuthor(`${client.user.username} | Help`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`)
    .setTitle(`Invite Bot`) // TITLE
    .setURL('https://discordapp.com/oauth2/authorize?client_id=464511870993432578&scope=bot&permissions=2146958591') // THIS WILL SET THE TITLE URL TO "www.google.com" 
    .setFooter(`© MasterBotTeam`)
    .setTimestamp() // SHOWS THE TIME OF THE EMBED CREATED
    message.channel.send(serverembed);
} catch (e) {
    throw e;
}
}
