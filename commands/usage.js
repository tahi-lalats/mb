const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pages = ["Usage Utility:", "Music:", "Fun:", "Gambling:", "Moderation:"];
    let pagesinfo = ["^avatar [mention]\n^botinfo\n^bugreport [bugname]\n^createinvite\n^serverinfo\n^weather [city]", "^play/^p [yt Url]\n^play/^p [search]\n^stop\n^skip/^s\n^resume\n^queue/^q\n^nowplaying/^np\n^volume\n^skip/s", "^8ball [question]\n^cat\n^cry [mention or no]\n^dog\n^flip\n^givecandy [mention]\n^hug [mention]\n^jokes\n^kiss [mention]\n^lucknumber\n^rps <rock/paper/scissors>\n^patgif [mention]\n^quiz\n^poll [question]\n^rainbow\n^rolldice\nslap [mention]\n^say [text]"]
    let page = 1;
    const embed = new Discord.RichEmbed()
        .setColor("#06238B")
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pagesinfo[page - 1])
        .setTitle(pages[page - 1])
        .setTimestamp();

    message.channel.send(embed).then(msg => {
        msg.react("⏪").then(r => {
            msg.react("⏩")

            const backwardsFilter = (reaction, user) => reaction.emoji.name === "⏪" && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === "⏩" && user.id === message.author.id;

            const backwards = msg.createReactionCollector(backwardsFilter, {
                time: 60000
            });
            const forwards = msg.createReactionCollector(forwardsFilter, {
                time: 60000
            });

            backwards.on("collect", r => {
                if (page === 1) return;
                page--;
                embed.setTitle(pages[page - 1]);
                embed.setDescription(pagesinfo[page - 1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed);
            });

            forwards.on("collect", r => {
                if (page === pages.length) return;
                page++;
                embed.setTitle(pages[page - 1]);
                embed.setDescription(pagesinfo[page - 1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed);
            });
        })
    })
}

module.exports.help = {
    name: "help"
}