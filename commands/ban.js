var Commands = []
var request = require('superagent')
var config = require('../../config.json')
var Logger = require('../internal/logger.js').Logger
var argv = require('minimist')(process.argv.slice(2))
var bugsnag = require('bugsnag')
bugsnag.register(config.api_keys.bugsnag)

Commands.ban = {
  name: 'ban',
  help: 'Swing the banhammer on someone!',
  noDM: true,
  usage: '[days (can be 0, 1, or 7)] <user-mention || user-mentions> [reason]',
  level: 0,
  fn: function (msg, suffix, bot) {
    function safeLoop (msg, days, members, reason, list) {
      if (members.length === 0) {
        let resp = ``
        if (list.success.length !== 0) resp += `Banned the following for **${days}** days: ${list.success.join(', ')}\n`
        if (list.error.length !== 0) resp += `Could not ban the following: ${list.error.join(', ')}\n`
        resp += `Reason provided by user: ${reason}`
        msg.reply(resp)
      } else {
        members[0].ban(parseInt(days), `${msg.author.username}#${msg.author.discriminator} used ban for: ${reason}`).then(() => {
          list.success.push(`\`${members[0].username}\``)
          members.shift()
          safeLoop(msg, days, members, reason, list)
        }).catch(() => {
          list.error.push(`\`${members[0].username}\``)
          members.shift()
          safeLoop(msg, days, members, reason, list)
        })
      }
    }