const Discord = require ("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, client);
const config = require("./config.json");
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const allowedUsers = config.allowedUsers;
const roles = config.roleToDisco;
const youtube =  new Youtube(process.env.GAK);
const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();
const speaker = client.emojis.get("465236219463204874");
const YouTube = client.emojis.get("465236219463204874");
const queue = new Map();


var server = {};
var prefix = '^'

// ping 5 minutes
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
    exports.run = async (bot, message, args) => { //OH BTW BOT IS YOUR CLIENT SO IF YOU USED CLIENT THEN CHNAGE ALL THE "BOT" TO "CLIENT" cool!
        var footertext = [`${bot.user.username}: oof sexy`, `${bot.user.username}: nice`, `${bot.user.username}: 🔥`, `${bot.user.username}: Someone's looking sharp today!`, `${bot.user.username}: oof if i wasn't a bot...`, `${bot.user.username}: looking sexier than a mug`];
        var rand = Math.floor(Math.random() * footertext.length);
        var randomfooter = footertext[rand]; //THIS AND THE TWO LINES ABOVE IS TOTALLY UNNECESSARY. But you want to make your bot more interactive so keep it.Just an array of some random shit, you can add more if you would like just read the code and change it at your will! 
        message.channel.startTyping();
        let msg = await message.channel.send('``Generating that sexy avatar...``') //UNNECESSARY BUT COOL.

        let user = message.mentions.users.first() || message.author; //THIS IS IMPORTANT BECAUSE YOU WANT YOUR BOT TO SHOW OTHER PEOPLE'S AVATAR AS WELL BY MENTIONING THEM!
    }

    //PS: I suck at coding and explaining shit. So i do apologise. If you have any questions you can contact me on discord.("Please Don\'t!") ;)



    //
    //
    // Music Bots
    //
    //
client.on("ready", () => {
    //function randomStatus() {
        //let status = [`${client.guilds.size} guilds.`, `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users.`, `${config.prefix}help | ${config.prefix}helphere`, "MasterBot.", "Music Bot", `${client.ping}ms`, `discord.io/MasterBot`]
          //let rstatus = Math.floor(Math.random() * status.length);
        //client.user.setActivity(status[rstatus], {type: 'WATCHING'});
	//}; setInterval(randomStatus, 5000)
	setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
    console.log("Bot berhasil dinyalakan.");
});



    // Create an event listener for messages

    //
    //


    client.on("message", async message => {
      // This event will run on every single message received, from any channel or DM.
      
      // It's good practice to ignore other bots. This also makes your bot ignore itself
      // and not get into a spam loop (we call that "botception").
      if(message.author.bot) return;
      
      // Also good practice to ignore any message that does not start with our prefix, 
      // which is set in the configuration file.
      if(message.content.indexOf(config.prefix) !== 0) return;
      
      // Here we separate our "command" name, and our "arguments" for the command. 
      // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
      // command = say
      // args = ["Is", "this", "the", "real", "life?"]
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      

      
      if (command == "kiss") {
      let kiss = [
        "http://cdn.smosh.com/wp-content/uploads/ftpuploads/bloguploads/awkward-kiss-little-girl.gif",
        "https://media1.tenor.com/images/9c92434bdeea2df04d67710f338b212d/tenor.gif?itemid=5223535",
        "https://vignette.wikia.nocookie.net/degrassi/images/1/1d/Dair_kissing_.gif/revision/latest?cb=20150429211626",
        "https://media.giphy.com/media/xT9IgFh732bmm00u1a/giphy.gif",
        "https://media.giphy.com/media/10wwy1cJ8j2aD6/giphy.gif",
        "https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif",
        "https://media.giphy.com/media/3og0IvIXD1UrcEvNmw/giphy.gif",
        
      ]

      let hugresult = Math.floor((Math.random() * kiss.length));
      if (!args[0]) {
          const ghembed = new Discord.RichEmbed()
              .setColor(`#06238B`)
              .setTitle(`${message.author.username} Kiss Yourself?? `)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: ghembed
          })
          return;
      }
      if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
          const hembed = new Discord.RichEmbed()
              .setColor(`#06238B`)
              .setTitle(`${message.author.username} Kissing ${message.mentions.members.first().user.username}, so sweet :heart_eyes: `)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: hembed
          })
          return;
      }
      const ghembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Kiss Yourself?? `)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: ghembed
      })
  }
        if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
if (!message.member.hasPermission('ADMINISTRATOR')) { 
        message.channel.send (`Maaf ${message.author}, Kamu butuh permissions ADMINISTRATOR untuk memakai perintah ini!`); 
        return; 
    }
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let prefix = config.prefix;
    let messageArray = message.content.split(" "); 
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let user = message.mentions.users.first() || message.author;    
if (!message.member.hasPermission('ADMINISTRATOR')) { 
        message.channel.send (`Maaf ${message.author}, Kamu butuh permissions ADMINISTRATOR untuk memakai perintah ini!`); 
        return; 
    }
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
      
      if (command == "hug") {
    let kiss = [
      "https://media.giphy.com/media/LIwTMXYWu7WWA/giphy.gif",
      "https://thumbs.gfycat.com/WarlikeDecentCicada-size_restricted.gif",
      "https://media1.tenor.com/images/5cd23c906465474946375ad0414f94e5/tenor.gif?itemid=8739843",
      "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
      "https://media.giphy.com/media/l378uBCYt1vfaj2aA/giphy.gif",
      "https://media.giphy.com/media/xT0Gqne4C3IxaBcOdy/giphy.gif",
      "https://media.giphy.com/media/xUOxfb8r3BhgPpfyKs/giphy.gif",
      "https://media.giphy.com/media/LuSeshH6YcgZq/giphy.gif",
      "https://media.giphy.com/media/QbkL9WuorOlgI/giphy.gif",
      "https://media.giphy.com/media/xT0Gqne4C3IxaBcOdy/giphy.gif",
      "https://media.giphy.com/media/gnXG2hODaCOru/giphy.gif",
      "https://media.giphy.com/media/8KKRIP5ZHUo2k/giphy.gif",
      "https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif",
      
    ]

    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`#06238B`)
            .setTitle(`${message.author.username} Hug yourself? Why? `)
            .setImage(kiss[hugresult])
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`#06238B`)
            .setTitle(`${message.author.username} Hugging ${message.mentions.members.first().user.username}, :heart_eyes: `)
            .setImage(kiss[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(`#06238B`)
        .setTitle(`${message.author.username} Hug yourself? Why? `)
        .setImage(kiss[hugresult])
    message.channel.send({
        embed: ghembed
    })
}

if (command == "slap") {
  let kiss = [
    "https://i.makeagif.com/media/8-19-2015/nLkMFV.gif",
    "https://media.giphy.com/media/83bGzE1mKEpXO/giphy.gif",
    "https://media.giphy.com/media/10WtjJwAFYqJPy/giphy.gif",
    "https://media.giphy.com/media/INuiLQB92kvok/giphy.gif",
    "https://media.giphy.com/media/MzC4ydlZNhxV6/giphy.gif",
    "https://media.giphy.com/media/vxvNnIYFcYqEE/giphy.gif",
    "https://media.giphy.com/media/irU9BlmqEwZwc/giphy.gif",
    "https://media.giphy.com/media/Y6c59hTH3TJoA/giphy.gif",
    "https://media.giphy.com/media/l0MYthTiOGtg1zsT6/giphy.gif",
    "https://media.giphy.com/media/3o72F9iEaswZcxpgnC/giphy.gif",
    "https://cdn.weeb.sh/images/BJgsX1Kv-.gif",
    "https://media.giphy.com/media/3oriNXBCGHrzCYIbZK/giphy.gif",
    "https://media.giphy.com/media/bGnQmK38QoSg8/giphy.gif",
    "https://media.giphy.com/media/Y6c59hTH3TJoA/giphy.gif",
    
  ]

  let hugresult = Math.floor((Math.random() * kiss.length));
  if (!args[0]) {
      const ghembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Slapping themself `)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: ghembed
      })
      return;
  }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
      const hembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Slapping ${message.mentions.members.first().user.username} `)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: hembed
      })
      return;
  }
}

if (command == "cry") {
  let kiss = [
    "https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif",
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
    "https://media.giphy.com/media/k61nOBRRBMxva/giphy.gif",
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    "https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif",
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
    "https://media.giphy.com/media/6Q3M4BIK0lX44/giphy.gif",
    "https://media.giphy.com/media/2Qs2hKWMvEzdu/giphy.gif",
    "https://media.giphy.com/media/Ph8OWoJA2M3eM/giphy.gif",
    "https://media.giphy.com/media/8ykJ4yAnwgK2I/giphy.gif",
    "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif",
    "https://media.giphy.com/media/l3q2RauzE5Vzf7iYo/giphy.gif",
    "https://media.giphy.com/media/wViS9n0RqN2/giphy.gif",
    "https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif",
    "https://media.giphy.com/media/9Jvj3vYjgmqH4AJTkx/giphy.gif",
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
    
  ]
  let hugresult = Math.floor((Math.random() * kiss.length));
  if (!args[0]) {
      const ghembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Crying alone`)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: ghembed
      })
      return;
  }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
      const hembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Crying with ${message.mentions.members.first().user.username} `)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: hembed
      })
      return;
  }
}
      
      if(message == `${prefix}flip`) {
    let embed = new Discord.RichEmbed()
    .addField("**Result**", `Result: **${Math.floor(Math.random() * 2) == 0 ? "heads" : "tails"}**!`)
    .setColor("RANDOM")
    message.channel.send(embed)
  }

  if(message == `${prefix}jawaban?`) {
    let embed = new Discord.RichEmbed()
    .addField("**Result**", `Result: **${Math.floor(Math.random() * 2) == 0 ? "yes" : "no"}**!`)
    .setColor("RANDOM")
    message.channel.send(embed)
  }

  if(command === "developer") {
    let embed = new Discord.RichEmbed()
    .addField("`_Brickmaster_#0218`", "[Server Discord](https://discordapp.com/api/oauth2/authorize?client_id=445819023553200148&permissions=8&scope=bot)")
    .setColor("RANDOM")
    message.channel.send(embed)
  }

client.on('message', message => {
  if (message.content === '^Developer') {
    message.reply('_Brickmaster_#0218');
  }
});
      
      client.on("message", message => {
if(message.content.startsWith(prefix + "stopspam")) {
    if(allowedUsers.includes(message.author.id)) {
    message.channel.sendMessage("Turn Off Spam Messages.");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  } else {
    message.reply(`SIAPA LU BANGSAT??????`);
    }
  }
  
  });
      
      if(command === "dmall") {
      let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      if(!message.member.hasPermission("ADMINISTRATOR"))
          return message.reply({embed: {
            color: 0x06238B,
            description: "No permission."
          }});
      let DMALL = args.join(" ").slice(0);
    if (!DMALL) return message.channel.send({embed: {
      color: 0x06238B,
      description: `${message.member} Please enter a message to dm all the players in the discord server.`
    }});

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {
          color: 0x06238B,
          title: `${message.guild.name}`,
          description: `${DMALL}`
        }});
    });
    message.channel.send({embed: {
      color: 0x06238B,
      description: "All players in this discord server have got your message."
  }});
}
      
      function timestamp(addon_msg) {
    let calendar = new Date();
    // ECMA 2017 String.prototype.padStart(), IE not supported
    let d = calendar.getDate().toString().padStart(2, 0);
    let m = calendar.getMonth().toString().padStart(2, 0);
    let y = calendar.getFullYear().toString().padStart(2, 0);
    let h = calendar.getHours().toString().padStart(2, 0);
    let mm = calendar.getMinutes().toString().padStart(2, 0);
    let s = calendar.getSeconds().toString().padStart(2, 0);
    const viewer = `[${d}-${m}-${y}|${h}\:${mm}\:${s}] [${addon_msg}]`;
    return viewer;
}

// timestamp(addon_msg) => addon_msg = Custom string, you can insert custom text there.
// usage:

console.log(`${timestamp("ReadyBot")} Bot has successfully deployed!`);

// output (on time):
// [01-01-2001|10:10:10] [ReadyBot] Bot has successfully deployed!

console.log(`${timestamp("ErrorOccured")} Hmm, there was something missing!`);
	    let prefix = '^'
	    

   if (!message.startsWith(prefix)) return;
   if (commandcooldown.has(message.author.id)) {
      return message.channel.send(`Please wait **5 seconds** cooldown...`).then(msg => msg.delete(2000));
      }
      commandcooldown.add(message.author.id);
      setTimeout(() => {
        commandcooldown.delete(message.author.id);
      }, 5000);




   
      
   

      
      
    try {
      let commands = require(`./commands/${command}.js`);
      commands.run(client, message, args);
    } catch (e) {
     console.log(e.stack)
    } finally {
      console.log(`${message.author.tag} menggunakan perintah ${command}`)
    }
      
      


        });

client.on("message", async message => {
  const YouTube = client.emojis.find("name", "YouTube");
  var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "mplay":
      case "mp":
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`✅Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
          var index = 0;
          message.channel.send({embed: {
color: 0x06238B,
                    author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
description: `🎶 __**Song Selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
~~⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯~~
Please select one of the search results ranging from 1-10.`,
            timestamp: new Date(),
        footer: {
          text: "©MasterBot"
}}})
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('No or invalid value entered, cancelling video selection.');
					}
					var videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('🆘I could not obtain any search results.');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
        break;
      case "mskip":
      case "ms":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
        break;
      case "mstop":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
break;
      case "mvolume":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    var volval;
            if (serverQueue.volume == 1) {
                volval = `○──── :loud_sound:⠀`
            }
            if (serverQueue.volume == 2) {
                volval = `─○─── :loud_sound:⠀`
            }
            if (serverQueue.volume == 3) {
                volval = `──○── :loud_sound:⠀`
            }
            if (serverQueue.volume == 4) {
                volval = `───○─ :loud_sound:⠀`
            }
            if (serverQueue.volume == 5) {
                volval = `────○ :loud_sound:⠀`
            }
            return message.channel.send(volval)
break;
      case "mnp":
      case "mnowplaying":
		if (!serverQueue) return message.channel.send('There is nothing playing.');
    let serverembed = new Discord.RichEmbed()
    .addField("**🎶 Now playing:** ", `**${serverQueue.songs[0].title}**`)
    .addField(`Requested by:`, `${message.author.tag} `)
    .setColor("#06238B")
    .setAuthor(`${client.user.username}`)
    .setFooter(`©MasterBot V0.4.4`)
    message.channel.send(serverembed);
break;
      case "mqueue":
      case "mq":
		if (!serverQueue) return message.channel.send('There is nothing playing.');
        let embed = new Discord.RichEmbed()
        .setColor("#06238B")
        .setAuthor(`${client.user.username}`)
        .setFooter(`©MasterBot V0.4.4`)
        .setDescription(`${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`)
        message.channel.send(embed);
break;
      case "mpause":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
      let embed = new Discord.RichEmbed()
      .setColor("#06238B")
      .setAuthor(`${client.user.username}`)
      .setFooter(`©MasterBot V0.4.4`)
      .addField('⏸ Pause', "Paused Your Music")
      message.channel.send(embed)('Paused the music for you!');
		}
		return message.channel.send('There is nothing playing.');
break;
      case "mresume":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
      let serverembed = new Discord.RichEmbed()
      .addField("Resume: ", `:notes: Resumed the music for you!`)
      .setColor("#06238B")
      .setAuthor(`${client.user.username}`)
      .setFooter(`©MasterBot V0.4.4`)
      return message.channel.send(serverembed);
		}
		return message.channel.send('There is nothing playing.');
	

	return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return message.channel.send({embed: {
            color: 0x06238B,
            description: `✅ [${song.title}](${video.url}) added to the queue!`
        }})
    }
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
      let serverembed = new Discord.RichEmbed()
      .addField("Music End", ':checkered_flag: Song Queue Finished!')
      .setColor("#06238B")
      .setAuthor(`${client.user.username}`)
      .setFooter(`©MasterBot V0.4.4`)
      message.channel.send(serverembed);
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
    .on('error', error => console.error(error));
    var volval;
    if (serverQueue.volume == 1) {
        volval = `○──── :speaker:⠀`
    }
    if (serverQueue.volume == 2) {
        volval = `─○─── :sound:⠀`
    }
    if (serverQueue.volume == 3) {
        volval = `──○── :sound:⠀`
    }
    if (serverQueue.volume == 4) {
        volval = `───○─ :loud_sound:⠀`
    }
    if (serverQueue.volume == 5) {
        volval = `────○ :loud_sound:⠀`
    }
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

   let serverembed = new Discord.RichEmbed()
    .setColor("06238B")
    .setAuthor(`${client.user.username} | Playing`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`)
    .setURL('https://discordapp.com/oauth2/authorize?client_id=464511870993432578&scope=bot&permissions=2146958591')
    .addField(`🎶 Playing: `, `[${song.title}](${video.url})`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
    .setTimestamp()

   serverQueue.textChannel.send(serverembed);
}
});

client.on("message", message => {

    function discoRole() {
      let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: random}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    if(message.content.startsWith(prefix + "startdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.sendMessage("Turn On Disco Roles");
    } else {
    }
  } else
  
  if(message.content.startsWith(prefix + "stopdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    message.channel.sendMessage("Turn Off Disco Roles.");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  } else {
    message.reply(`Mau ngapain??`);
    }
  }
  
  });


client.on('message', message => {
  if (message.content.startsWith(prefix + 'aplay')) {
    var yt = require('ytdl-core');
    var voiceChannel = message.member.voiceChannel;
    var YouTubeURL = message.content.split(" ").slice(1).join(" ")
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let video = yt(YouTubeURL, {audioonly: true});
        const dispatcher = connnection.playStream(video);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'annoying1')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'troll')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=acEYHN3NTOw", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'sad')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=OS8zUCfCiz0", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'pip')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=jE9nFhsdlAo", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
	
	  if (message.content.startsWith(prefix + 'kidslapped')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hem :v')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=pOeig6_aAtE", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'airhorn')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=OFr74zI1LBM", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  const speaker = client.emojis.find("name", "speaker");
  if (message.content.startsWith(prefix + 'duck')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react(speaker)
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=Fw3RB7xnb80", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  const speaker = client.emojis.find("name", "speaker");
  if (message.content.startsWith(prefix + 'run')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react(speaker)
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=RNsRT0uPFD4", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  const speaker = client.emojis.find("name", "speaker");
  if (message.content.startsWith(prefix + 'thuglife')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react(speaker)
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=Rq2vdkfjaMg", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  const speaker = client.emojis.find("name", "speaker");
  if (message.content.startsWith(prefix + 'funnylaugh')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react(speaker)
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=29UH3Yovrn0", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  const speaker = client.emojis.find("name", "speaker");
  if (message.content.startsWith(prefix + 'titanicfail')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react(speaker)
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=CVCuN_q1K_g", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  const speaker = client.emojis.find("name", "speaker");
  if (message.content.startsWith(prefix + 'runningman')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react(speaker)
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=TFPG65B7-dE", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  const speaker = client.emojis.find("name", "speaker");
  if (message.content.startsWith(prefix + '20th')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react(speaker)
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=VtZx6AppJ5M", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  const speaker = client.emojis.find("name", "speaker");
  if (message.content.startsWith(prefix + 'friendzone')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react(speaker)
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=RhzArIfe_Qs", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'trombone')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage(':v')
    message.react("🔊")
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=CQeezCdF4mk", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'duality')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Nicky Romero')
    message.react("🔊")
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=xbhFbG1eaEA", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'allnight')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Listening')
    message.react("🔊")
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=_sPBHFYi_n4", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'garox')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Mamang Sallamualaikum')
    message.react("🔊")
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=oTJKrb5Qm0E", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'egp')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('EGP...EGP ga gue pikirin.')
    message.react("🔊")
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=KTN1knGr-Xs", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'clap')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('')
        message.react("🔊") 
      .then(() => message.react('👍'))
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=jDOrc8FmDy4", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'annoying2')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=qZiMqiNVN0U", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});

client.on("message", function(message) {
if(message.content.startsWith(prefix + "playersearch")) {
var search = message.content.split(" ").slice(1).join(" ")
message.channel.sendMessage(`https://namemc.com/name/`+search)
console.log(message.author.username + " Searched the Skin: " + search)
}
});

client.on("message", function(message) {
if(message.content.startsWith(prefix + "skinsearch")) {
var search = message.content.split(" ").slice(1).join(" ")
message.channel.sendMessage(`http://www.minecraftskins.com/search/skin/`+search+`/1/`)
console.log(message.author.username + " Searched the Skin: " + search)
}
});






        

      

    client.login(process.env.TOKEN);
