exports.run = (client, message, args) => {
    if (message.channel.type === 'dm') return;
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Usage Commands :tada: Fun/Games",
    url: "https://discordbots.org/bot/464511870993432578/vote",
    fields: [{
        name: "8Ball",
        value: "^8ball [question]."
      },
      {
        name: "Cat",
        value: "^cat."
      },
      {
        name: "Cry",
        value: "^cry [mention] or no mention."
      },
      {
        name: "Dog",
        value: "^dog."
      },
      {
        name: "Flip",
        value: "^flip."
      },
      {
        name: "Give Candy",
        value: "^givecandy [mention]."
      },
      {
        name: "Hug",
        value: "^hug [mention]."
      },
      {
        name: "Jokes",
        value: "^jokes."
      },
      {
        name: "Kiss",
        value: "^Kiss [mention]."
      },
      {
        name: "LuckNumber",
        value: "^lucknumber."
      },
      {
        name: "Rps",
        value: "^rps <rock|paper|scissors>."
      },
      {
        name: "Pat",
        value: "^pat [mention]."
      },
            {
        name: "Quiz",
        value: "^Kiss [mention]."
      },
      {
        name: "Poll",
        value: "^lucknumber."
      },
      {
        name: "Rainbow",
        value: "^rps <rock|paper|scissors>."
      },
      {
        name: "Rolldice",
        value: "^pat [mention]."
      },
      {
        name: "slap",
        value: "^slap [mention]"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© MasterBotTeam"
    }
  }
});
}