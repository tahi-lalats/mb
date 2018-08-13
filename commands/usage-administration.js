exports.run = (client, message, args) => {
    if (message.channel.type === 'dm') return;
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Usage Commands :no_entry_sign: Administration",
    url: "https://discordbots.org/bot/464511870993432578/vote",
    fields: [{
        name: "Ban",
        value: "^ban [mention] [reason]."
      },
      {
        name: "Kick",
        value: "^kick [mention] [reason]."
      },
      {
        name: "Purge",
        value: "^purge [2 - 100]."
      },
      {
        name: "mute",
        value: "^mute [mention]."
      },
      {
        name: "TempMute",
        value: "^tempmute [mention] [1s/1m/1h/1d]."
      },
      {
        name: "AddRole",
        value: "^addrole [mention] [name of role]."
      },
      {
        name: "RemoveRole",
        value: "^removerole [mention] [name of role]."
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