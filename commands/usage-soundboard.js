exports.run = (client, message, args) => {
    if (message.channel.type === 'dm') return;
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Usage Commands :loud_sound: Soundboard",
    url: "https://discordbots.org/bot/464511870993432578/vote",
    fields: [{
        name: "Air Horn",
        value: "^airhorn."
      },
      {
        name: "Cena",
        value: "^cena."
      },
      {
        name: "Clap",
        value: "^clap."
      },
      {
        name: "Duck",
        value: "^duck."
      },
      {
        name: "Sad",
        value: "^sad."
      },
      {
        name: "Troll",
        value: "^troll."
      },
      {
        name: "Pip",
        value: "^pip."
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