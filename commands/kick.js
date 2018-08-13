client.on("message", async message => {
    
    if(message.author.bot) return;
    
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
      if (!message.member.hasPermission('ADMINISTRATOR')) { 
        message.channel.send (`Maaf ${message.author}, You need ADMINISTRATOR permissions to use this command!`); 
        return; 
    }
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!member)
        return message.reply ("Please mention the user who will be removed from the server!");
      if(!member.kickable) 
        return message.reply (`${member.user.tag} can not be issued because Roles is higher than me!`);
      
      let reason = args.slice(1).join(' ');
      if(!reason) reason = ". . .";
      
      await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} , I can not Kick ${member.user.tag} Because : ${error}`));
    message.reply(`Kick ${member.user.tag} From server because: ${reason}`);

  }
    
});