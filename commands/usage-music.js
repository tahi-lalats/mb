exports.run = (client, message, args) => {
    if (message.channel.type === 'dm') return;
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Usage Commands :notes: Music",
    url: "https://discordbots.org/bot/464511870993432578/vote",
    fields: [{
        name: "Play",
        value: "^play/^p [yt Url or Search]."
      },
      {
        name: "Pause",
        value: "^pause."
      },
      {
        name: "Stop",
        value: "^Stop."
      },
      {
        name: "Skip",
        value: "^skip/^s."
      },
      {
        name: "Resume",
        value: "^resume."
      },
      {
        name: "Queue",
        value: "^queue/^q."
      },
      {
        name: "Now Playing",
        value: "^nowplaying/^np."
      },
      {
        name: "Volume",
        value: "^volume [1 - 5]."
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